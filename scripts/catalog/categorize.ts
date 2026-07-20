import { createHash } from "node:crypto";
import {
  parseAIInsightResponse,
  type AIInsightResponse,
} from "./categorize-prompt.ts";
import { loadCategories, loadGeneratedCatalogItems, saveCatalogItem } from "./data.ts";
import {
  applyLifecycleRules,
  applyPlacement,
  hasInsightText,
  isDirectAwesomeListSource,
  type ProcessingError,
} from "./core.ts";
import { summarizeDistinctCounts } from "./reporting.ts";
import { buildCatalogInsightPrompt } from "./insight-context.ts";
import {
  resolveCatalogLlmTimeoutMs,
  runCatalogLlmPromptWithMetadata,
  type CatalogLlmPromptResult,
} from "./llm-gateway.ts";
import { nextRetry, readProcessing, runClaimedWork, updateProcessing } from "./processing.ts";
import { createProgressHeartbeatPrinter, formatDurationMs } from "../support/progress.ts";
import { loadSettings } from "./settings.ts";
import { shouldRefreshMetadata } from "./stars.ts";

import type { CatalogConfig, CatalogItem, Category } from "./types.ts";


const MIN_AI_INSIGHT_START_BUDGET_MS = 5_000;
export const CATALOG_CATEGORIZE_PROMPT_VERSION = "catalog-categorize-v5-single-template";
export const MAX_CONSECUTIVE_LLM_FAILURES = 20;
const CATEGORIZE_BUDGET_EXHAUSTED_MESSAGE = "Categorization budget expired before this item was claimed";
const CATALOG_LLM_JITTER_MIN_MS = 50;
const CATALOG_LLM_JITTER_MAX_MS = 150;

function resolveCategorizeLlmJitterMs(random: () => number = Math.random): number {
  const sample = random();
  const clamped = Number.isFinite(sample) ? Math.max(0, Math.min(1, sample)) : 0;
  return CATALOG_LLM_JITTER_MIN_MS + Math.round(clamped * (CATALOG_LLM_JITTER_MAX_MS - CATALOG_LLM_JITTER_MIN_MS));
}



function buildDirectAwesomeListEvidence(item: CatalogItem): string[] {
  const evidence = ["Item was submitted directly as an awesome-list source."];
  if (hasInsightText(item.metadata.github.description)) {
    evidence.push(`Repo description: ${item.metadata.github.description}`);
  }
  const discoveryNote = item.provenance.discoveries
    .map((discovery) => discovery.extraction.surrounding_text)
    .find((note) => hasInsightText(note));
  if (discoveryNote) evidence.push(`Discovery note: ${discoveryNote}`);
  return evidence.slice(0, 3);
}

function isAppBuilderCandidate(item: CatalogItem, response: AIInsightResponse): boolean {
  if (item.kind !== "website") return false;
  const hasAppBuilderSourceContext = item.provenance.discoveries.some((discovery) =>
    discovery.extraction.section_path.some((section) => /app builders/i.test(section)),
  );
  if (hasAppBuilderSourceContext) return true;

  const hasAppBuilderDiscoveryLanguage = item.provenance.discoveries.some((discovery) => {
    const text = `${discovery.extraction.anchor_text} ${discovery.extraction.surrounding_text ?? ""}`;
    return /(build|create|generate).*(app|apps|application|applications|website|websites|site|sites)/i.test(text)
      || /(full-stack|full stack).*(app|apps|application|applications)/i.test(text)
      || /prompt-to-app/i.test(text);
  });
  if (hasAppBuilderDiscoveryLanguage) return true;

  const tags = new Set(response.tags.map((tag) => tag.toLowerCase()));
  return tags.has("ai-app-builder") || tags.has("ai-website-builder") || tags.has("no-code") || tags.has("low-code");
}

export function markExcludedItemsPending(items: CatalogItem[]): { items: CatalogItem[]; resetIds: string[] } {
  const resetIds: string[] = [];
  const updatedItems = items.map((item) => {
    if (item.curation.status !== "excluded") return item;
    resetIds.push(item.id);
    return {
      ...item,
      curation: { status: "pending" as const, reason: null, evidence: [] },
    };
  });
  return { items: updatedItems, resetIds };
}

export function needsAIInsights(item: CatalogItem): boolean {
  return (
    !hasInsightText(item.insights.summary) ||
    !hasInsightText(item.insights.why_it_matters) ||
    !hasInsightText(item.insights.mental_damage) ||
    item.insights.tags.length === 0 ||
    item.insights.confidence === null ||
    item.curation.status === "pending" ||
    !hasInsightText(item.curation.reason)
  );
}

export function isClassificationReady(
  item: CatalogItem,
  options: { metadataRefreshDays?: number; now?: Date; ignoreFreshness?: boolean } = {},
): boolean {
  if (item.kind === "github-repo") {
    const metadataRefreshDays = options.metadataRefreshDays ?? loadSettings().github.metadata_refresh_days;
    const lastCheckedAt = item.metadata.github.last_checked_at;
    return Boolean(
      item.identity.github_repo &&
      item.processing?.stars?.status === "done" &&
      item.metadata.github.created_at &&
      lastCheckedAt &&
      (options.ignoreFreshness || !shouldRefreshMetadata(lastCheckedAt, metadataRefreshDays, options.now)),
    );
  }
  return Boolean(item.canonical_url);
}

function categorizeFailureCauseType(message: string): string {
  if (/Invalid AI response|No JSON found|Missing required field|Invalid confidence value/i.test(message)) {
    return "invalid_llm_json";
  }
  if (/timed out/i.test(message)) return "provider_timeout";
  return "categorization_failed";
}

function categoryRulesVersion(categories: Category[]): string {
  return createHash("sha1")
    .update(
      JSON.stringify(
        categories.map((category) => ({
          id: category.id,
          name: category.name,
          description: category.description,
          prompt: category.prompt,
          sections: category.sections ?? [],
        })),
      ),
    )
    .digest("hex")
    .slice(0, 12);
}

export function hasCategorizationVersionDrift(item: CatalogItem, categories: Category[]): boolean {
  const state = readProcessing(item, "categorize");
  const hasStoredVersion = state.prompt_version != null || state.category_rules_version != null;
  if (state.status !== "done" && !hasStoredVersion) return false;
  return (
    state.prompt_version !== CATALOG_CATEGORIZE_PROMPT_VERSION
    || state.category_rules_version !== categoryRulesVersion(categories)
  );
}

export function needsCategorization(item: CatalogItem, categories: Category[]): boolean {
  return needsAIInsights(item) || hasCategorizationVersionDrift(item, categories);
}

function resolveCategorySection(
  categoryId: string | null,
  requestedSection: string | null | undefined,
  categories: Category[],
): string | null {
  if (!categoryId || !requestedSection) return null;
  const normalizedRequested = requestedSection.trim().toLowerCase();
  if (normalizedRequested.length === 0) return null;
  const allowedSections = categories.find((category) => category.id === categoryId)?.sections ?? [];
  return allowedSections.find((section) => section.trim().toLowerCase() === normalizedRequested) ?? null;
}



export function resolveAIInsightConcurrency(env: NodeJS.ProcessEnv = process.env): number {
  return loadSettings({}, env).concurrency.llm;
}

export function resolveAIInsightBudgetMs(env: NodeJS.ProcessEnv = process.env): number | null {
  const rawMs = env["CATALOG_CATEGORIZE_BUDGET_MS"]?.trim();
  if (rawMs) {
    const parsedMs = Number.parseInt(rawMs, 10);
    if (Number.isFinite(parsedMs) && parsedMs > 0) return parsedMs;
  }

  const settings = loadSettings({}, env);
  const rawMinutes = env["CATALOG_CATEGORIZE_BUDGET_MINUTES"]?.trim();
  if (rawMinutes) {
    const parsedMinutes = Number.parseFloat(rawMinutes);
    if (Number.isFinite(parsedMinutes) && parsedMinutes > 0) return Math.floor(parsedMinutes * 60_000);
  }

  return settings.budgets.categorize_minutes > 0 ? settings.budgets.categorize_minutes * 60_000 : null;
}

function parseIsoMs(value: string | null | undefined): number | null {
  if (!value) return null;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function isCategorizeRetryDue(
  item: Pick<CatalogItem, "processing">,
  nowMs: number = Date.now(),
  force: boolean = false,
): boolean {
  if (force) return true;
  const retryAtMs = parseIsoMs(readProcessing(item, "categorize").next_retry_at ?? null);
  return retryAtMs == null || retryAtMs <= nowMs;
}

function compareCategorizeTargets(
  left: { item: CatalogItem; index: number },
  right: { item: CatalogItem; index: number },
): number {
  const leftUpdatedAtMs = parseIsoMs(readProcessing(left.item, "categorize").updated_at) ?? Number.POSITIVE_INFINITY;
  const rightUpdatedAtMs = parseIsoMs(readProcessing(right.item, "categorize").updated_at) ?? Number.POSITIVE_INFINITY;

  if (leftUpdatedAtMs !== rightUpdatedAtMs) return leftUpdatedAtMs - rightUpdatedAtMs;
  return left.index - right.index;
}

function markCategorizeDeferred(
  item: CatalogItem,
  cause: { type: string; message: string },
  options: { attempts?: number; retryAt?: string | null } = {},
): CatalogItem {
  const deferred = { ...item };
  updateProcessing(deferred, "categorize", {
    status: "deferred",
    cause,
    next_retry_at: options.retryAt ?? null,
    attempts: options.attempts ?? item.processing?.categorize?.attempts ?? 0,
    prompt_version: item.processing?.categorize?.prompt_version,
    category_rules_version: item.processing?.categorize?.category_rules_version,
  });
  return deferred;
}




export function applyAIInsights(
  item: CatalogItem,
  response: AIInsightResponse,
  categories: Category[],
  options: {
    forceCategory?: boolean;
    provenance?: {
      answeringModel: string | null;
      promptVersion: string;
      categoryRulesVersion: string;
      inputHash: string | null;
    };
  } = {},
): CatalogItem {
  const validCategoryIds = new Set(categories.map((category) => category.id));
  const invalidCategoryCandidates = [
    ...new Set(response.category_candidates.filter((candidate) => !validCategoryIds.has(candidate))),
  ];
  const responsePrimaryIsValid =
    response.primary_category != null && validCategoryIds.has(response.primary_category);
  let proposedPrimaryCategory =
    (responsePrimaryIsValid ? response.primary_category : null)
    ?? response.category_candidates.find((candidate) => validCategoryIds.has(candidate))
    ?? null;
  const invalidPrimaryPromoted =
    response.should_include
    && response.primary_category != null
    && !responsePrimaryIsValid
    && proposedPrimaryCategory != null;

  let shouldInclude = response.should_include;
  let proposedDecisionReason = response.decision_reason;
  let proposedDecisionEvidence = response.decision_evidence;

  if (!shouldInclude && isDirectAwesomeListSource(item) && validCategoryIds.has("awesome-awesomes")) {
    shouldInclude = true;
    proposedPrimaryCategory = item.placement.primary_category ?? "awesome-awesomes";
    proposedDecisionReason =
      "Included because this is a curated awesome list with developer-relevant entries; even when broader than our core slice, it remains a useful map and readers can decide what to follow.";
    proposedDecisionEvidence = buildDirectAwesomeListEvidence(item);
  }

  if (shouldInclude && validCategoryIds.has("app-builders") && isAppBuilderCandidate(item, response)) {
    if (
      proposedPrimaryCategory == null
      || proposedPrimaryCategory === "coding-agents"
      || proposedPrimaryCategory === "ai-ides-editors"
    ) {
      proposedPrimaryCategory = "app-builders";
      if (!/app-builders|app builder/i.test(proposedDecisionReason)) {
        proposedDecisionReason =
          "Fits the app-builders category as a hosted prompt-to-app product rather than a direct coding agent or AI IDE.";
      }
    }
    if (!proposedDecisionEvidence.some((entry) => /app builders|prompt-to-app|website builder/i.test(entry))) {
      proposedDecisionEvidence = [
        ...proposedDecisionEvidence,
        "Source-list context and product framing match hosted app-building / prompt-to-app tooling rather than direct code collaboration.",
      ].slice(0, 3);
    }
  }

  const existingPrimaryCategory = item.placement.primary_category;
  const disagreement = Boolean(
    shouldInclude
    && !options.forceCategory
    && existingPrimaryCategory
    && proposedPrimaryCategory
    && existingPrimaryCategory !== proposedPrimaryCategory,
  );
  const primaryCategory = shouldInclude
    ? (
      options.forceCategory
        ? proposedPrimaryCategory ?? existingPrimaryCategory
        : existingPrimaryCategory ?? proposedPrimaryCategory
    )
    : null;

  if (shouldInclude && !primaryCategory) {
    throw new Error(`AI marked ${item.id} as included but did not provide a valid category`);
  }

  const aiSection = shouldInclude
    ? (response.section === undefined ? undefined : resolveCategorySection(primaryCategory, response.section, categories))
    : null;
  const existingSection = shouldInclude ? resolveCategorySection(primaryCategory, item.placement.section, categories) : null;
  const section: string | null = shouldInclude
    ? (response.section === undefined ? existingSection : aiSection ?? null)
    : null;

  const retainedReason = hasInsightText(item.curation.reason)
    ? item.curation.reason
    : `Retained existing placement '${existingPrimaryCategory}' pending review of proposed category '${proposedPrimaryCategory}'.`;
  const curationReason = disagreement ? retainedReason : proposedDecisionReason;
  const curationEvidence = disagreement ? item.curation.evidence : proposedDecisionEvidence;
  const reviewReasons: string[] = [];
  if (invalidCategoryCandidates.length > 0) {
    reviewReasons.push(`unknown category candidate(s): ${invalidCategoryCandidates.join(", ")}`);
  }
  if (response.confidence === "low") reviewReasons.push("low confidence");
  if (invalidPrimaryPromoted) {
    reviewReasons.push(
      `invalid primary '${response.primary_category}' promoted runner-up '${proposedPrimaryCategory}'`,
    );
  }
  if (disagreement) {
    reviewReasons.push(
      `placement disagreement: retained '${existingPrimaryCategory}', proposed '${proposedPrimaryCategory}'`,
    );
  }

  const existingCategorizationReview =
    item.lifecycle.status === "needs_review"
    && item.lifecycle.reason?.startsWith("Categorization review required:");
  const priorResumeLifecycle =
    item.processing?.categorize?.classification?.review_resume_lifecycle ?? null;
  const reviewResumeLifecycle = reviewReasons.length > 0
    ? (
      priorResumeLifecycle
      ?? (
        item.lifecycle.status === "curated" || item.lifecycle.status === "landmark"
          ? { status: item.lifecycle.status, reason: item.lifecycle.reason }
          : null
      )
    )
    : null;
  const lifecycle = item.metadata.github.archived === true
    ? item.lifecycle
    : reviewReasons.length > 0
      ? {
          status: "needs_review" as const,
          reason: `Categorization review required: ${reviewReasons.join("; ")}`,
        }
      : existingCategorizationReview
        ? priorResumeLifecycle ?? { status: "incubating" as const, reason: null }
        : item.lifecycle;
  const provenance = options.provenance ?? {
    answeringModel: null,
    promptVersion: CATALOG_CATEGORIZE_PROMPT_VERSION,
    categoryRulesVersion: categoryRulesVersion(categories),
    inputHash: null,
  };

  return {
    ...item,
    insights: {
      summary: response.summary,
      why_it_matters: response.why_it_matters,
      mental_damage: response.mental_damage,
      tags: response.tags,
      confidence: response.confidence,
    },
    curation: {
      status: shouldInclude ? "included" : "excluded",
      reason: curationReason,
      evidence: curationEvidence,
    },
    processing: {
      ...item.processing,
      categorize: {
        status: item.processing?.categorize?.status ?? "pending",
        updated_at: item.processing?.categorize?.updated_at ?? null,
        ...item.processing?.categorize,
        classification: {
          answering_model: provenance.answeringModel,
          prompt_version: provenance.promptVersion,
          category_rules_version: provenance.categoryRulesVersion,
          input_hash: provenance.inputHash,
          proposed_primary_category: shouldInclude ? proposedPrimaryCategory : null,
          disagreement,
          decision_reason: proposedDecisionReason,
          decision_evidence: proposedDecisionEvidence,
          category_candidates: response.category_candidates,
          contrastive_reason: response.contrastive_reason,
          review_reason: reviewReasons.length > 0
            ? `Categorization review required: ${reviewReasons.join("; ")}`
            : null,
          review_resume_lifecycle: reviewResumeLifecycle,
        },
      },
    },
    placement: {
      ...item.placement,
      primary_category: shouldInclude ? primaryCategory : null,
      section,
    },
    lifecycle,
  };
}

export async function enrichWithAIInsights(
  item: CatalogItem,
  categories: Category[],
  runPrompt: (prompt: string) => Promise<string | CatalogLlmPromptResult> = runCatalogLlmPromptWithMetadata,
  options: { force?: boolean; refresh?: boolean } = {},
): Promise<CatalogItem> {
  if (!options.force && !options.refresh && !needsAIInsights(item)) return item;

  const prompt = buildCatalogInsightPrompt(item, categories);
  try {
    const promptResult = await runPrompt(prompt);
    const raw = typeof promptResult === "string" ? promptResult : promptResult.text;
    const answeringModel = typeof promptResult === "string" ? null : promptResult.model;
    return applyAIInsights(item, parseAIInsightResponse(raw), categories, {
      forceCategory: options.force === true,
      provenance: {
        answeringModel,
        promptVersion: CATALOG_CATEGORIZE_PROMPT_VERSION,
        categoryRulesVersion: categoryRulesVersion(categories),
        inputHash: `sha256:${createHash("sha256").update(prompt).digest("hex")}`,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Catalog LLM categorization failed for ${item.id}: ${message}`);
  }
}

export type MaterializeCatalogStateDeps = {
  enrichItem?: (item: CatalogItem, categories: Category[]) => Promise<CatalogItem>;
  runPrompt?: (prompt: string, options: { timeoutMs: number }) => Promise<string | CatalogLlmPromptResult>;
  sleep?: (ms: number) => Promise<void>;
  random?: () => number;
  saveItem?: (item: CatalogItem) => void;
  renderCatalog?: (items: CatalogItem[], categories: Category[]) => void;
  blockedItemIds?: Set<string>;
  selectTarget?: (item: CatalogItem) => boolean;
  forceRebuild?: boolean;
  metadataRefreshDays?: number;
  catalogConfig?: CatalogConfig;
  now?: Date;
};

export type MaterializeCatalogStateResult = {
  finalItems: CatalogItem[];
  aiUpdatedIds: string[];
  processingErrors: ProcessingError[];
  attemptedAiTargetCount: number;
  skippedAiTargetIds: string[];
  budgetExhausted: boolean;
  retryBlockedTargetCount: number;
};

type CategorizeWorkOutput = {
  item: CatalogItem;
  updated: boolean;
  errorMessage: string | null;
  budgetSkipped: boolean;
};

export async function materializeCatalogState(
  items: CatalogItem[],
  categories: Category[],
  deps: MaterializeCatalogStateDeps = {},
): Promise<MaterializeCatalogStateResult> {
  const saveItem = deps.saveItem ?? saveCatalogItem;
  const renderCatalog = deps.renderCatalog ?? (() => undefined);
  const blockedItemIds = deps.blockedItemIds ?? new Set<string>();
  const rulesVersion = categoryRulesVersion(categories);
  const targetSelector = deps.selectTarget ?? ((item: CatalogItem) => needsCategorization(item, categories));
  const retryNowMs = Date.now();
  const catalogConfig = deps.catalogConfig ?? loadSettings();
  const metadataRefreshDays = deps.metadataRefreshDays ?? catalogConfig.github.metadata_refresh_days;
  const readinessNow = deps.now ?? new Date();
  const originalSerializedById = new Map(items.map((item) => [item.id, JSON.stringify(item)] as const));
  const candidateTargets = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !blockedItemIds.has(item.id) && targetSelector(item));
  const retryReadyTargets = candidateTargets.filter(({ item }) => isCategorizeRetryDue(item, retryNowMs, deps.forceRebuild === true));
  const retryBlockedTargetCount = candidateTargets.length - retryReadyTargets.length;
  const aiTargets = retryReadyTargets
    .filter(({ item }) => isClassificationReady(item, {
      metadataRefreshDays,
      now: readinessNow,
      ignoreFreshness: deps.forceRebuild === true,
    }))
    .sort(compareCategorizeTargets);

  const skippedForReadiness = retryReadyTargets
    .filter(({ item }) => !isClassificationReady(item, {
      metadataRefreshDays,
      now: readinessNow,
      ignoreFreshness: deps.forceRebuild === true,
    }))
    .map(({ item }) => {
      const next = { ...item };
      updateProcessing(next, "categorize", {
        status: "skipped",
        cause: { type: "missing_metadata", message: "Item is not ready for categorization" },
      });
      return next;
    });

  const itemsWithInsights = [...items];
  for (const skipped of skippedForReadiness) {
    const index = items.findIndex((item) => item.id === skipped.id);
    if (index >= 0) itemsWithInsights[index] = skipped;
  }

  const aiUpdatedIds: string[] = [];
  const processingErrors: ProcessingError[] = [];
  const skippedAiTargetIds: string[] = skippedForReadiness.map((item) => item.id);
  const startedAtMs = Date.now();
  const budgetMs = resolveAIInsightBudgetMs();
  const deadlineMs = budgetMs == null ? null : startedAtMs + budgetMs;
  const defaultTimeoutMs = resolveCatalogLlmTimeoutMs();
  const concurrency = Math.max(1, Math.min(resolveAIInsightConcurrency(), aiTargets.length || 1));
  let consecutiveLlmFailures = 0;
  const runPrompt = deps.runPrompt
    ?? ((prompt: string, options: { timeoutMs: number }) => runCatalogLlmPromptWithMetadata(prompt, options));
  const enrichTarget = deps.enrichItem
    ? deps.enrichItem
    : async (item: CatalogItem, loadedCategories: Category[]) => {
        const remainingBudgetMs = deadlineMs == null ? null : deadlineMs - Date.now();
        if (remainingBudgetMs != null && remainingBudgetMs < MIN_AI_INSIGHT_START_BUDGET_MS) {
          throw new Error("LLM categorization budget exhausted before starting item");
        }
        const timeoutMs =
          remainingBudgetMs == null ? defaultTimeoutMs : Math.max(1, Math.min(defaultTimeoutMs, remainingBudgetMs));

        return enrichWithAIInsights(
          item,
          loadedCategories,
          (prompt) => runPrompt(prompt, { timeoutMs }),
          {
            force: deps.forceRebuild === true,
            refresh: hasCategorizationVersionDrift(item, loadedCategories),
          },
        );
      };

  const heartbeatPrinter = createProgressHeartbeatPrinter();
  const summary = await runClaimedWork<{ item: CatalogItem; index: number }, CategorizeWorkOutput>({
    command: "categorize",
    items: aiTargets,
    concurrency,
    deadlineMs,
    minRemainingMs: MIN_AI_INSIGHT_START_BUDGET_MS - 1,
    startedAtMs,
    getCheckpoint: (target) => target.item.id,
    workerStartupDelayMs:
      concurrency > 1 ? () => resolveCategorizeLlmJitterMs(deps.random ?? Math.random) : undefined,
    sleep: deps.sleep,
    onHeartbeat: (heartbeat) => {
      heartbeatPrinter.push({
        ...heartbeat,
        budgetLeftMs: deadlineMs == null ? null : deadlineMs - heartbeat.nowMs,
      });
    },
    stopClaimingWhen: () => consecutiveLlmFailures >= MAX_CONSECUTIVE_LLM_FAILURES,
    haltReason: () => `LLM categorization failed for ${consecutiveLlmFailures} claimed item(s) in a row`,
    worker: async (target) => {
      try {
        const withInsights = await enrichTarget(target.item, categories);
        consecutiveLlmFailures = 0;
        updateProcessing(withInsights, "categorize", {
          status: "done",
          cause: null,
          attempts: (target.item.processing?.categorize?.attempts ?? 0) + 1,
          prompt_version: CATALOG_CATEGORIZE_PROMPT_VERSION,
          category_rules_version: rulesVersion,
        });
        return {
          status: "done",
          value: { item: withInsights, updated: withInsights !== target.item, errorMessage: null, budgetSkipped: false },
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        if (message === "LLM categorization budget exhausted before starting item") {
          consecutiveLlmFailures = 0;
          return {
            status: "skipped",
            value: {
              item: markCategorizeDeferred(target.item, {
                type: "budget_exhausted",
                message: CATEGORIZE_BUDGET_EXHAUSTED_MESSAGE,
              }, {
                retryAt: nextRetry(new Date().toISOString(), 60),
              }),
              updated: false,
              errorMessage: null,
              budgetSkipped: true,
            },
          };
        }
        consecutiveLlmFailures += 1;
        return {
          status: "deferred",
          value: {
            item: markCategorizeDeferred(target.item, {
              type: categorizeFailureCauseType(message),
              message,
            }, {
              attempts: (target.item.processing?.categorize?.attempts ?? 0) + 1,
            }),
            updated: false,
            errorMessage: message,
            budgetSkipped: false,
          },
        };
      }
    },
  });

  let budgetExhausted = summary.budgetExhausted;
  for (const [outputIndex, output] of summary.outputs.entries()) {
    if (!output) continue;
    const target = aiTargets[outputIndex];
    if (!target) continue;
    itemsWithInsights[target.index] = output.item;
    if (output.updated) aiUpdatedIds.push(output.item.id);
    if (output.budgetSkipped) {
      budgetExhausted = true;
      skippedAiTargetIds.push(target.item.id);
      continue;
    }
    if (output.errorMessage) {
      processingErrors.push({ stage: "ai_insights", item_id: target.item.id, message: output.errorMessage });
    }
  }

  const attemptedAiTargetCount = summary.completed + summary.failed + summary.deferred;
  if (summary.halted && summary.remaining > 0) {
    console.log(
      `Categorization halted: ${summary.haltReason ?? "LLM categorization failed repeatedly"}; leaving ${summary.remaining} target(s) untouched for a later run.`,
    );
  } else if (summary.remaining > 0) {
    const retryAt = nextRetry(new Date().toISOString(), 60);
    for (const { item, index } of aiTargets.slice(summary.claimed)) {
      itemsWithInsights[index] = markCategorizeDeferred(item, {
        type: "budget_exhausted",
        message: CATEGORIZE_BUDGET_EXHAUSTED_MESSAGE,
      }, {
        retryAt,
      });
      skippedAiTargetIds.push(item.id);
    }
  }

  if (budgetExhausted && skippedAiTargetIds.length > 0) {
    console.log(
      `Categorization budget exhausted after attempting ${attemptedAiTargetCount}/${aiTargets.length} target(s); leaving ${skippedAiTargetIds.length} target(s) for a later round.`,
    );
  }

  let finalItems = itemsWithInsights.map((item) => applyPlacement(item, categories));
  finalItems = finalItems.map((item) => applyLifecycleRules(item, catalogConfig));

  const changedItems = finalItems.filter((item) => originalSerializedById.get(item.id) !== JSON.stringify(item));
  for (const item of changedItems) saveItem(item);
  renderCatalog(finalItems, categories);

  return {
    finalItems,
    aiUpdatedIds,
    processingErrors,
    attemptedAiTargetCount,
    skippedAiTargetIds,
    budgetExhausted,
    retryBlockedTargetCount,
  };

}

export async function runCategorize(
  _token?: string,
  options: { itemIds?: Set<string>; force?: boolean } = {},
): Promise<void> {
  const categories = loadCategories();
  const items = loadGeneratedCatalogItems();
  const settings = loadSettings();
  const selectedIds = options.itemIds ?? null;
  const selectedCount = selectedIds ? items.filter((item) => selectedIds.has(item.id)).length : items.length;

  if (selectedIds && selectedCount === 0) {
    console.log("No selected catalog items matched the resync selector.");
    return;
  }

  const budgetMs = resolveAIInsightBudgetMs();
  const maxConcurrency = settings.concurrency.llm;
  console.log(
    `Scanning ${selectedCount} selected item(s) for categorize scheduling | configured max concurrency ${maxConcurrency} | time budget ${budgetMs == null ? "none" : formatDurationMs(budgetMs)} | oldest-first | retry-aware.`,
  );

  const result = await materializeCatalogState(items, categories, {
    blockedItemIds: new Set(
      selectedIds ? items.filter((item) => !selectedIds.has(item.id)).map((item) => item.id) : [],
    ),
    selectTarget: options.force
      ? (item) => (selectedIds ? selectedIds.has(item.id) : true)
      : (item) => (!selectedIds || selectedIds.has(item.id)) && needsCategorization(item, categories),
    forceRebuild: options.force === true,
    catalogConfig: settings,
  });


  const categorizeIssueSummary = summarizeDistinctCounts(
    result.processingErrors.map((error) => categorizeFailureCauseType(error.message))
  );
  if (categorizeIssueSummary.length > 0) {
    console.log(
      `Categorization issues (${result.processingErrors.length}): ${categorizeIssueSummary.map(({ value, count }) => `${value}=${count}`).join(", ")}`
    );
  }
  const retryBlockedSuffix = result.retryBlockedTargetCount > 0
    ? `, ${result.retryBlockedTargetCount} waiting for retry window`
    : "";
  console.log(
    `✅ Categorization complete: ${result.attemptedAiTargetCount} attempted, ${result.aiUpdatedIds.length} updated, ${result.skippedAiTargetIds.length} deferred/skipped${retryBlockedSuffix}.`,
  );
}

