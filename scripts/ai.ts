// scripts/ai.ts
// AI prompt and response boundary. Generates insights, tags, category candidates.
//
// Reading order: types and budget constants up front, then the public entry
// points in dependency order — `buildInsightPrompt` (which calls
// `truncateReadmeForPrompt`) before `parseAIInsightResponse`.

import type { CatalogItem } from "./types.js";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AIInsightRequest {
  item: Pick<CatalogItem, "name" | "canonical_url" | "metadata" | "provenance">;
  categories: string[];
  /**
   * Optional README body. When provided, it is truncated to a bounded excerpt
   * before being included in the prompt. Treat as "may be missing" — the
   * prompt must still work using only the repo description + topics.
   */
  readme?: string | null;
}

export interface AIInsightResponse {
  summary: string;
  why_it_matters: string;
  mental_damage: string;
  tags: string[];
  category_candidates: string[];
  confidence: "high" | "medium" | "low";
}

// ─── Budget ───────────────────────────────────────────────────────────────────

// Budget for the README excerpt sent to the model. ~6 KB ≈ ~1500 tokens, which
// is enough for an intro + "What is this" + first feature section without
// blowing up prompt size. The AI gets *substance*, not the whole repo.
export const README_EXCERPT_MAX_CHARS = 6000;
export const README_TRUNCATION_MARKER = "\n\n…[truncated]";

// ─── Prompt ───────────────────────────────────────────────────────────────────

export function buildInsightPrompt(request: AIInsightRequest): string {
  const { item, categories, readme } = request;
  const github = item.metadata.github;
  const credit = item.provenance.primary_credit;

  const readmeSection =
    readme && readme.trim().length > 0
      ? `\nREADME excerpt (markdown, may be truncated):\n---\n${truncateReadmeForPrompt(readme)}\n---\n`
      : "";

  return `You are a dry, slightly sardonic curator of AI tools for developers who are already three rabbit holes behind.

Generate insights for this tool/project.

You receive two grounded inputs:
- Repo description: a one-line GitHub description. Use this as the seed for the factual one-line summary.
- README excerpt: the project's own pitch in its own words. Use this for substance — what the tool actually does, who it is for, what workflow it changes, what pain it claims to solve.

Inputs:

Name: ${item.name}
URL: ${item.canonical_url}
Repo description: ${github.description ?? "(none)"}
Stars: ${github.stars ?? "Unknown"}
Topics: ${(github.topics ?? []).join(", ") || "None"}
License: ${github.license ?? "Unknown"}
Archived: ${github.archived === true ? "yes" : github.archived === false ? "no" : "unknown"}
Homepage: ${github.homepage ?? "(none)"}
Pushed at: ${github.pushed_at ?? "Unknown"}
Credit: ${credit.label}
${readmeSection}
Available categories: ${categories.join(", ")}

Respond with valid JSON matching this schema:
{
  "summary": "One sentence factual description of what this is.",
  "why_it_matters": "One sentence on why this matters to AI developers.",
  "mental_damage": "One dry, self-aware sentence about the FOMO or workflow anxiety this creates.",
  "tags": ["tag1", "tag2"],
  "category_candidates": ["primary-category"],
  "confidence": "high" | "medium" | "low"
}

Tone ladder, in this order:
1. Useful first — the reader should learn what this is and whether it fits their workflow.
2. Funny second — dry, self-aware, recognisable to anyone who has lived through the last year of AI tooling.
3. Acidic third — sharp, but earned.

Rules:
- summary: factual, no marketing language. Seed it from the repo description; sharpen it with the README only when the description is vague or missing.
- why_it_matters: honest, useful. Grounded in what the README actually claims the tool does and who it is for.
- mental_damage: aim the joke at our collective AI workflow madness — FOMO, agentic rabbit holes, the productivity fantasy, the urge to rebuild your stack every Tuesday. The joke must have a foot in reality: it must come from this project's actual promise (description + README) and the workflow it is trying to improve. No generic "another AI tool, haha". No invented features. No attacks on the project authors — punch at the ecosystem, not at the people who shipped this.
- If the README excerpt is missing, stay closer to the repo description and topics; do not invent details to fill the gap, and lower confidence accordingly.
- tags: lowercase, hyphenated, max 5.
- category_candidates: pick from the available categories list only.`;
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
  maxChars: number = README_EXCERPT_MAX_CHARS
): string {
  if (readme.length <= maxChars) return readme;

  const slice = readme.slice(0, maxChars);
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
    // Try to extract JSON from the response
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
  if (!Array.isArray(obj.category_candidates)) throw new Error("Missing required field: category_candidates");

  const confidence = obj.confidence as string;
  if (!["high", "medium", "low"].includes(confidence)) {
    throw new Error(`Invalid confidence value: ${confidence}`);
  }

  return {
    summary: obj.summary as string,
    why_it_matters: obj.why_it_matters as string,
    mental_damage: obj.mental_damage as string,
    tags: (obj.tags as unknown[]).map((t) => String(t).toLowerCase().replace(/\s+/g, "-")),
    category_candidates: obj.category_candidates as string[],
    confidence: confidence as "high" | "medium" | "low",
  };
}
