// scripts/catalog/categorize-prompt.ts
// Catalog prompt and response boundary. Generates insights, sections, and a
// persisted curation decision for whether a project belongs in the catalog.

import { isDirectAwesomeListSource } from "./core.ts";
import { renderCatalogInsightPromptTemplate, type CatalogInsightPromptTemplateViewModel } from "./templates.ts";
import type { CatalogItem, Category } from "./types.ts";

// ─── Types ────────────────────────────────────────────────────────────────────

export type InsightPromptProfile = "baseline-current" | "definition-first" | "definition-with-examples";

export const DEFAULT_INSIGHT_PROMPT_PROFILE: InsightPromptProfile = "definition-with-examples";
export const DEFAULT_EVAL_INSIGHT_PROMPT_PROFILES: InsightPromptProfile[] = ["definition-first", "definition-with-examples"];

export function isInsightPromptProfile(value: string): value is InsightPromptProfile {
  return value === "baseline-current" || value === "definition-first" || value === "definition-with-examples";
}

export type AIInsightRequest = {
  item: Pick<CatalogItem, "name" | "canonical_url" | "metadata" | "provenance">;
  /**
   * Formatted category lines, e.g. `coding-agents | Coding Agents | Tools for
   * coding with AI. | ... | sections: Terminal & CLI Agents; IDE-Native Assistants`.
   */
  categories: string[];
  /**
   * Optional context lines derived from deterministic source-list metadata,
   * e.g. `awesome-mcp-servers | purpose: curated MCP servers | section: Browser Automation`.
   */
  source_contexts?: string[];
  /**
   * Optional scraped website context for non-GitHub tool pages. Lets the model
   * reason about a site-backed tool even when there is no GitHub README.
   */
  website_context?: {
    title?: string | null;
    description?: string | null;
    excerpt?: string | null;
  };
  /**
   * Optional README body. When provided, it is truncated to a bounded excerpt
   * before being included in the prompt. Treat as "may be missing" — the
   * prompt must still work using only repo metadata + source-list context.
   */
  readme?: string | null;
};

export type AIInsightResponse = {
  summary: string;
  why_it_matters: string;
  mental_damage: string;
  tags: string[];
  should_include: boolean;
  primary_category: string | null;
  section?: string | null;
  decision_reason: string;
  decision_evidence: string[];
  category_candidates: string[];
  confidence: "high" | "medium" | "low";
};

// ─── Budget ───────────────────────────────────────────────────────────────────

// Budget for the README excerpt sent to the model. ~6 KB ≈ ~1500 tokens, which
// is enough for an intro + "What is this" + first feature section without
// blowing up prompt size. The AI gets *substance*, not the whole repo.
export const README_EXCERPT_MAX_CHARS = 6000;
export const README_EXCERPT_MAX_LINES = 400;

export const README_TRUNCATION_MARKER = "\n\n…[truncated]";

// ─── Category formatting ──────────────────────────────────────────────────────

export function formatCategoryPromptEntry(
  category: Pick<Category, "id" | "name" | "description" | "slug" | "prompt_instruction" | "sections">,
  options: { includeSections?: boolean } = {},
): string {
  const parts = [
    category.id,
    category.name,
    category.description,
    category.prompt_instruction ?? category.description,
  ];
  if (options.includeSections !== false && Array.isArray(category.sections) && category.sections.length > 0) {
    parts.push(`sections: ${category.sections.join("; ")}`);
  }
  return parts.join(" | ");
}

export function formatCategoryPromptEntries(
  categories: Array<Pick<Category, "id" | "name" | "description" | "slug" | "prompt_instruction" | "sections">>,
  options: { includeSections?: boolean } = {},
): string[] {
  return categories.map((category) => formatCategoryPromptEntry(category, options));
}

// ─── Prompt ───────────────────────────────────────────────────────────────────

function buildInsightPromptViewModel(
  request: AIInsightRequest,
  profile: InsightPromptProfile,
): CatalogInsightPromptTemplateViewModel {
  const { item } = request;
  const github = item.metadata.github;
  const sourceContextLines = request.source_contexts ?? [];
  const websiteContext = request.website_context;
  const hasWebsiteContext = Boolean(
    websiteContext && (websiteContext.title || websiteContext.description || websiteContext.excerpt),
  );
  const websiteExcerpt = websiteContext?.excerpt ?? "";
  const readmeExcerpt = request.readme && request.readme.trim().length > 0
    ? truncateReadmeForPrompt(request.readme)
    : "";

  return {
    profile,
    item: {
      name: item.name,
      url: item.canonical_url,
      repoDescription: github.description ?? "(none)",
      stars: String(github.stars ?? "Unknown"),
      topics: (github.topics ?? []).join(", ") || "None",
      license: github.license ?? "Unknown",
      archived: github.archived === true ? "yes" : github.archived === false ? "no" : "unknown",
      createdAt: github.created_at ?? "Unknown",
      pushedAt: github.pushed_at ?? "Unknown",
      homepage: github.homepage ?? "(none)",
      directAwesomeList: isDirectAwesomeListSource(item) ? "yes" : "no",
    },
    categoryLines: request.categories,
    hasSourceContext: sourceContextLines.length > 0,
    sourceContextLines,
    hasWebsiteContext,
    websiteTitle: websiteContext?.title ?? "(none)",
    websiteDescription: websiteContext?.description ?? "(none)",
    hasWebsiteExcerpt: websiteExcerpt.length > 0,
    websiteExcerpt,
    hasReadmeExcerpt: readmeExcerpt.length > 0,
    readmeExcerpt,
  };
}

function buildBaselinePrompt(request: AIInsightRequest): string {
  return renderCatalogInsightPromptTemplate(buildInsightPromptViewModel(request, "baseline-current"));
}

function buildDefinitionPrompt(request: AIInsightRequest, includeExamples: boolean): string {
  return renderCatalogInsightPromptTemplate(
    buildInsightPromptViewModel(
      request,
      includeExamples ? "definition-with-examples" : "definition-first",
    ),
  );
}

export function buildInsightPrompt(
  request: AIInsightRequest,
  options: { profile?: InsightPromptProfile } = {},
): string {
  const profile = options.profile ?? DEFAULT_INSIGHT_PROMPT_PROFILE;
  if (profile === "baseline-current") return buildBaselinePrompt(request);
  if (profile === "definition-with-examples") return buildDefinitionPrompt(request, true);
  return buildDefinitionPrompt(request, false);
}

/**
 * Truncate a README to a bounded excerpt suitable for inclusion in an LLM
 * prompt. Prefers cutting at a markdown `\n## ` section boundary near the
 * budget so we don't slice mid-sentence; falls back to the last paragraph
 * break (`\n\n`) when no usable heading is in range. Always preserves the
 * beginning of the README (intro / "What is this" / "Why" / "Features"
 * usually live there).
 */
export function truncateReadmeForPrompt(
  readme: string,
  maxChars: number = README_EXCERPT_MAX_CHARS,
): string {
  const lines = readme.split(/\r?\n/);
  const lineLimited = lines.length > README_EXCERPT_MAX_LINES
    ? lines.slice(0, README_EXCERPT_MAX_LINES).join("\n").trimEnd() + README_TRUNCATION_MARKER
    : readme;
  if (lineLimited.length <= maxChars) return lineLimited;

  const slice = lineLimited.slice(0, maxChars);
  // Don't cut so close to the start that we throw away most of the README.
  const minKeep = Math.floor(maxChars * 0.5);
  let cutAt = -1;
  const headingMatch = slice.lastIndexOf("\n## ");
  if (headingMatch >= minKeep) {
    cutAt = headingMatch;
  } else {
    const paragraphMatch = slice.lastIndexOf("\n\n");
    if (paragraphMatch >= minKeep) cutAt = paragraphMatch;
  }
  const body = cutAt > 0 ? slice.slice(0, cutAt) : slice;
  return body.trimEnd() + README_TRUNCATION_MARKER;
}

// ─── Response parsing ─────────────────────────────────────────────────────────

export function parseAIInsightResponse(raw: string): AIInsightResponse {
  let parsed: unknown;
  try {
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON found in AI response");
    parsed = JSON.parse(jsonMatch[0]);
  } catch (e) {
    throw new Error(`Invalid AI response format: ${e}`);
  }

  const obj = parsed as Record<string, unknown>;

  if (typeof obj.summary !== "string") throw new Error("Missing required field: summary");
  if (typeof obj.why_it_matters !== "string") throw new Error("Missing required field: why_it_matters");
  if (typeof obj.mental_damage !== "string") throw new Error("Missing required field: mental_damage");
  if (!Array.isArray(obj.tags)) throw new Error("Missing required field: tags");
  if (typeof obj.should_include !== "boolean") throw new Error("Missing required field: should_include");
  if (!(typeof obj.primary_category === "string" || obj.primary_category === null)) {
    throw new Error("Missing required field: primary_category");
  }
  if (!(typeof obj.section === "string" || obj.section == null || !("section" in obj))) {
    throw new Error("Invalid field: section");
  }
  if (typeof obj.decision_reason !== "string") throw new Error("Missing required field: decision_reason");
  if (!Array.isArray(obj.decision_evidence)) {
    throw new Error("Missing required field: decision_evidence");
  }
  if (!Array.isArray(obj.category_candidates)) throw new Error("Missing required field: category_candidates");

  const confidence = obj.confidence as string;
  if (!["high", "medium", "low"].includes(confidence)) {
    throw new Error(`Invalid confidence value: ${confidence}`);
  }

  const decisionEvidence = (obj.decision_evidence as unknown[])
    .map((value) => String(value).trim())
    .filter((value) => value.length > 0);
  if (decisionEvidence.length === 0) {
    throw new Error("Missing required field: decision_evidence");
  }

  const hasSection = Object.hasOwn(obj, "section");
  const section = typeof obj.section === "string" ? obj.section.trim() : null;

  return {
    summary: obj.summary as string,
    why_it_matters: obj.why_it_matters as string,
    mental_damage: obj.mental_damage as string,
    tags: (obj.tags as unknown[]).map((t) => String(t).toLowerCase().replace(/\s+/g, "-")),
    should_include: obj.should_include as boolean,
    primary_category: obj.primary_category as string | null,
    ...(hasSection ? { section: section && section.length > 0 ? section : null } : {}),
    decision_reason: (obj.decision_reason as string).trim(),
    decision_evidence: decisionEvidence,
    category_candidates: obj.category_candidates as string[],
    confidence: confidence as "high" | "medium" | "low",
  };
}
