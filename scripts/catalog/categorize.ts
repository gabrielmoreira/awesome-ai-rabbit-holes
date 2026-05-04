import { createHash } from "node:crypto";
import { buildInsightPrompt, parseAIInsightResponse } from "./categorize-prompt.ts"
import { loadCatalogItems, loadCategories, loadConfig, loadOverrides, saveCatalogItem } from "./data.ts"
import { applyLifecycleRules,
applyOverrides,
applyPlacement,
hasInsightText,
isDirectAwesomeListSource,
type ProcessingError, } from "./core.ts"
import { runCatalogLlmPrompt, resolveCatalogLlmTimeoutMs } from "./llm-gateway.ts"
import { nextRetry, readProcessing, runClaimedWork, updateProcessing } from "./processing.ts"
import { formatDurationMs } from "../support/progress.ts"
import { loadSettings } from "./settings.ts"
import { loadSourceContextLinesForItem, readWebsiteLinkResolution } from "./source-lists.ts"
import { readReadmeFromCache } from "./readme-cache.ts"
import { validateOverride, validateOverridesUniqueness } from "./validate.ts";
import { shouldRefreshMetadata } from "./stars.ts";


import type { CatalogItem, Category, Override } from "./types.ts"

const MIN_AI_INSIGHT_START_BUDGET_MS = 5_000;
export const CATALOG_CATEGORIZE_PROMPT_VERSION = "catalog-categorize-v2";
export const MAX_CONSECUTIVE_LLM_FAILURES = 20;
const CATEGORIZE_BUDGET_EXHAUSTED_MESSAGE = "Categorization budget expired before this item was claimed";


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

function isAppBuilderCandidate(item: CatalogItem, response: ReturnType<typeof parseAIInsightResponse>): boolean {
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
    const metadataRefreshDays = options.metadataRefreshDays ?? loadConfig().github.metadata_refresh_days;
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
  if (/Invalid AI response format|No JSON found|Missing required field|Invalid confidence value/i.test(message)) {
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
          prompt_instruction: category.prompt_instruction ?? null,
        })),
      ),
    )
    .digest("hex")
    .slice(0, 12);
}


function assertOverridesValid(overrides: Override[], items: CatalogItem[]): void {
  const errors = overrides.flatMap((override) => validateOverride(override, items));
  errors.push(...validateOverridesUniqueness(overrides));
  if (errors.length === 0) return;
  const details = errors.map((error) => `[${error.path}] ${error.message}`).join("; ");
  throw new Error(`Catalog override validation failed: ${details}`);
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
  rulesVersion: string,
  cause: { type: string; message: string },
  options: { attempts?: number; retryAt?: string | null } = {},
): CatalogItem {
  const deferred = { ...item };
  updateProcessing(deferred, "categorize", {
    status: "deferred",
    cause,
    next_retry_at: options.retryAt ?? null,
    attempts: options.attempts ?? item.processing?.categorize?.attempts ?? 0,
    prompt_version: CATALOG_CATEGORIZE_PROMPT_VERSION,
    category_rules_version: rulesVersion,
  });
  return deferred;
}




export function applyAIInsights(
  item: CatalogItem,
  response: ReturnType<typeof parseAIInsightResponse>,
  categories: Category[],
  options: { forceCategory?: boolean } = {},
): CatalogItem {
  const validCategoryIds = new Set(categories.map((category) => category.id));
  const aiPrimaryCategory =
    (response.primary_category && validCategoryIds.has(response.primary_category) ? response.primary_category : null) ??
    response.category_candidates.find((candidate) => validCategoryIds.has(candidate)) ??
    null;

  let shouldInclude = response.should_include;
  let primaryCategory = shouldInclude
    ? (options.forceCategory ? aiPrimaryCategory ?? item.placement.primary_category : item.placement.primary_category ?? aiPrimaryCategory)
    : null;
  let decisionReason = response.decision_reason;
  let decisionEvidence = response.decision_evidence;

  if (!shouldInclude && isDirectAwesomeListSource(item) && validCategoryIds.has("awesome-awesomes")) {
    shouldInclude = true;
    primaryCategory = item.placement.primary_category ?? "awesome-awesomes";
    decisionReason =
      "Included because this is a curated awesome list with developer-relevant entries; even when broader than our core slice, it remains a useful map and readers can decide what to follow.";
    decisionEvidence = buildDirectAwesomeListEvidence(item);
  }

  if (shouldInclude && validCategoryIds.has("app-builders") && isAppBuilderCandidate(item, response)) {
    if (primaryCategory == null || primaryCategory === "coding-agents" || primaryCategory === "ai-ides-editors") {
      primaryCategory = "app-builders";
      if (!/app-builders|app builder/i.test(decisionReason)) {
        decisionReason =
          "Fits the app-builders category as a hosted prompt-to-app product rather than a direct coding agent or AI IDE.";
      }
    }
    if (!decisionEvidence.some((entry) => /app builders|prompt-to-app|website builder/i.test(entry))) {
      decisionEvidence = [
        ...decisionEvidence,
        "Source-list context and product framing match hosted app-building / prompt-to-app tooling rather than direct code collaboration.",
      ].slice(0, 3);
    }
  }

  if (shouldInclude && !item.placement.primary_category && !primaryCategory) {
    throw new Error(`AI marked ${item.id} as included but did not provide a valid category`);
  }

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
      reason: decisionReason,
      evidence: decisionEvidence,
    },
    placement: {
      ...item.placement,
      primary_category: shouldInclude ? primaryCategory : null,
    },
  };
}

export async function enrichWithAIInsights(
  item: CatalogItem,
  categories: Category[],
  runPrompt: (prompt: string) => Promise<string> = runCatalogLlmPrompt,
  options: { force?: boolean } = {},
): Promise<CatalogItem> {
  if (!options.force && !needsAIInsights(item)) return item;

  const readme =
    item.kind === "github-repo" && item.identity.github_repo
      ? (() => {
          const [owner, repo] = item.identity.github_repo.split("/");
          return readReadmeFromCache(owner, repo);
        })()
      : null;
  const websiteContext = item.kind === "website" ? readWebsiteLinkResolution(item.canonical_url) : null;

  const prompt = buildInsightPrompt({
    item,
    categories: categories.map(
      (category) =>
        `${category.id} | ${category.name} | ${category.description} | ${category.prompt_instruction ?? category.description}`,
    ),
    source_contexts: loadSourceContextLinesForItem(item),
    readme,
    website_context: websiteContext
      ? { title: websiteContext.title, description: websiteContext.description, excerpt: websiteContext.excerpt }
      : undefined,
  });

  try {
    const raw = await runPrompt(prompt);
    return applyAIInsights(item, parseAIInsightResponse(raw), categories, { forceCategory: options.force === true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Catalog LLM categorization failed for ${item.id}: ${message}`);
  }
}

export type MaterializeCatalogStateDeps = {
  enrichItem?: (item: CatalogItem, categories: Category[]) => Promise<CatalogItem>;
  saveItem?: (item: CatalogItem) => void;
  renderCatalog?: (items: CatalogItem[], categories: Category[]) => void;
  blockedItemIds?: Set<string>;
  selectTarget?: (item: CatalogItem) => boolean;
  forceRebuild?: boolean;
  metadataRefreshDays?: number;
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
  overrides: Override[],
  deps: MaterializeCatalogStateDeps = {},
): Promise<MaterializeCatalogStateResult> {
  const saveItem = deps.saveItem ?? saveCatalogItem;
  const renderCatalog = deps.renderCatalog ?? (() => undefined);
  const blockedItemIds = deps.blockedItemIds ?? new Set<string>();
  const targetSelector = deps.selectTarget ?? ((item: CatalogItem) => needsAIInsights(item));
  const rulesVersion = categoryRulesVersion(categories);
  const retryNowMs = Date.now();
  const metadataRefreshDays = deps.metadataRefreshDays ?? loadConfig().github.metadata_refresh_days;
  const readinessNow = deps.now ?? new Date();
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
  const enrichTarget = deps.enrichItem
    ? deps.enrichItem
    : (item: CatalogItem, loadedCategories: Category[]) => {
        const remainingBudgetMs = deadlineMs == null ? null : deadlineMs - Date.now();
        if (remainingBudgetMs != null && remainingBudgetMs < MIN_AI_INSIGHT_START_BUDGET_MS) {
          throw new Error("LLM categorization budget exhausted before starting item");
        }
        const timeoutMs =
          remainingBudgetMs == null ? defaultTimeoutMs : Math.max(1, Math.min(defaultTimeoutMs, remainingBudgetMs));

        return enrichWithAIInsights(
          item,
          loadedCategories,
          (prompt) => runCatalogLlmPrompt(prompt, { timeoutMs }),
          { force: deps.forceRebuild === true },
        );
      };

  const summary = await runClaimedWork<{ item: CatalogItem; index: number }, CategorizeWorkOutput>({
    command: "categorize",
    items: aiTargets,
    concurrency,
    deadlineMs,
    minRemainingMs: MIN_AI_INSIGHT_START_BUDGET_MS - 1,
    startedAtMs,
    heartbeatEvery: 25,
    getCheckpoint: (target) => target.item.id,
    onHeartbeat: (heartbeat) => {
      const budgetSuffix = deadlineMs == null ? "" : ` | budget left ${formatDurationMs(Math.max(0, deadlineMs - Date.now()))}`;
      console.log(`${heartbeat}${budgetSuffix}`);
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
              item: markCategorizeDeferred(target.item, rulesVersion, {
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
            item: markCategorizeDeferred(target.item, rulesVersion, {
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
      itemsWithInsights[index] = markCategorizeDeferred(item, rulesVersion, {
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

  let finalItems = applyOverrides(itemsWithInsights, overrides);
  finalItems = finalItems.map((item) => applyPlacement(item, categories));
  finalItems = finalItems.map((item) => applyLifecycleRules(item, loadConfig()));

  const originalSerializedById = new Map(items.map((item) => [item.id, JSON.stringify(item)] as const));
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
  const overrides = loadOverrides();
  const items = loadCatalogItems();
  assertOverridesValid(overrides, items);
  const selectedIds = options.itemIds ?? null;
  const selectedCount = selectedIds ? items.filter((item) => selectedIds.has(item.id)).length : items.length;

  if (selectedIds && selectedCount === 0) {
    console.log("No selected catalog items matched the resync selector.");
    return;
  }

  const budgetMs = resolveAIInsightBudgetMs();
  const maxConcurrency = resolveAIInsightConcurrency();
  console.log(
    `Scanning ${selectedCount} selected item(s) for categorize scheduling | configured max concurrency ${maxConcurrency} | time budget ${budgetMs == null ? "none" : formatDurationMs(budgetMs)} | oldest-first | retry-aware.`,
  );



  const result = await materializeCatalogState(items, categories, overrides, {
    blockedItemIds: new Set(
      selectedIds ? items.filter((item) => !selectedIds.has(item.id)).map((item) => item.id) : [],
    ),
    selectTarget: options.force
      ? (item) => (selectedIds ? selectedIds.has(item.id) : true)
      : (item) => (!selectedIds || selectedIds.has(item.id)) && needsAIInsights(item),
    forceRebuild: options.force === true,
  });

  const retryBlockedSuffix = result.retryBlockedTargetCount > 0
    ? `, ${result.retryBlockedTargetCount} waiting for retry window`
    : "";
  console.log(
    `✅ Categorization complete: ${result.attemptedAiTargetCount} attempted, ${result.aiUpdatedIds.length} updated, ${result.skippedAiTargetIds.length} deferred/skipped${retryBlockedSuffix}.`,
  );
}

