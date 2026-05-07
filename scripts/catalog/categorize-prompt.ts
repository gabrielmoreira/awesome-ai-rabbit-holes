// scripts/catalog/categorize-prompt.ts
// Catalog prompt and response boundary. Generates insights, sections, and a
// persisted curation decision for whether a project belongs in the catalog.

import { isDirectAwesomeListSource } from "./core.ts";
import {
  renderCatalogInsightPromptTemplate,
  type CatalogInsightPromptTemplateViewModel,
} from "./templates.ts";
import type { CatalogItem, Category } from "./types.ts";

export type AIInsightRequest = {
  item: Pick<CatalogItem, "name" | "canonical_url" | "metadata" | "provenance">;
  categories: Array<Pick<Category, "id" | "name" | "description" | "slug" | "prompt" | "sections">>;
  source_contexts?: string[];
  website_context?: {
    title?: string | null;
    description?: string | null;
    excerpt?: string | null;
  };
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
  contrastive_reason: string | null;
  confidence: "high" | "medium" | "low";
};

export const README_EXCERPT_MAX_CHARS = 6000;
export const README_EXCERPT_MAX_LINES = 400;
export const README_TRUNCATION_MARKER = "\n\n…[truncated]";

function buildInsightPromptViewModel(request: AIInsightRequest): CatalogInsightPromptTemplateViewModel {
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
    categories: request.categories.map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      prompt: {
        instructions: category.prompt.instructions,
        use_when: [...category.prompt.use_when],
        do_not_use_when: [...category.prompt.do_not_use_when],
        canonical_positives: [...category.prompt.canonical_positives],
        common_false_positives: [...category.prompt.common_false_positives],
      },
      hasSections: Array.isArray(category.sections) && category.sections.length > 0,
      sections: category.sections ?? [],
    })),
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

export function buildInsightPrompt(request: AIInsightRequest): string {
  return renderCatalogInsightPromptTemplate(buildInsightPromptViewModel(request));
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

export function parseAIInsightResponse(raw: string): AIInsightResponse {
  let parsed: unknown;
  try {
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON found in AI response");
    parsed = JSON.parse(jsonMatch[0]);
  } catch (error) {
    throw new Error(`Invalid AI response format: ${error}`);
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
  if (!Array.isArray(obj.decision_evidence)) throw new Error("Missing required field: decision_evidence");
  if (!Array.isArray(obj.category_candidates)) throw new Error("Missing required field: category_candidates");
  if (!(typeof obj.contrastive_reason === "string" || obj.contrastive_reason === null)) {
    throw new Error("Missing required field: contrastive_reason");
  }

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

  const categoryCandidates = [...new Set(
    (obj.category_candidates as unknown[])
      .map((value) => String(value).trim().toLowerCase())
      .filter((value) => value.length > 0),
  )];

  const hasSection = Object.hasOwn(obj, "section");
  const section = typeof obj.section === "string" ? obj.section.trim() : null;
  const contrastiveReason = typeof obj.contrastive_reason === "string"
    ? obj.contrastive_reason.trim()
    : null;

  if (obj.should_include) {
    if (categoryCandidates.length !== 2) {
      throw new Error("Included responses must provide exactly two ranked category_candidates");
    }
    if (typeof obj.primary_category !== "string" || obj.primary_category.trim().length === 0) {
      throw new Error("Included responses must provide primary_category");
    }
    if (categoryCandidates[0] !== obj.primary_category.trim().toLowerCase()) {
      throw new Error("Included responses must rank primary_category first in category_candidates");
    }
    if (!contrastiveReason || !/^Choose\s+/.test(contrastiveReason)) {
      throw new Error("Included responses must provide contrastive_reason starting with 'Choose '");
    }
  } else {
    if (categoryCandidates.length > 0) {
      throw new Error("Excluded responses must use an empty category_candidates list");
    }
    if (contrastiveReason !== null) {
      throw new Error("Excluded responses must set contrastive_reason to null");
    }
  }

  return {
    summary: obj.summary as string,
    why_it_matters: obj.why_it_matters as string,
    mental_damage: obj.mental_damage as string,
    tags: (obj.tags as unknown[]).map((tag) => String(tag).toLowerCase().replace(/\s+/g, "-")),
    should_include: obj.should_include as boolean,
    primary_category: typeof obj.primary_category === "string" ? obj.primary_category.trim().toLowerCase() : null,
    ...(hasSection ? { section: section && section.length > 0 ? section : null } : {}),
    decision_reason: (obj.decision_reason as string).trim(),
    decision_evidence: decisionEvidence,
    category_candidates: categoryCandidates,
    contrastive_reason: contrastiveReason,
    confidence: confidence as "high" | "medium" | "low",
  };
}
