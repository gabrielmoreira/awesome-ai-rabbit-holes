// scripts/ai.ts
// AI prompt and response boundary. Generates insights, tags, and a persisted
// curation decision for whether a project belongs in the catalog.

import type { CatalogItem } from "./types.ts";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AIInsightRequest {
  item: Pick<CatalogItem, "name" | "canonical_url" | "metadata" | "provenance">;
  /**
   * Formatted category lines, e.g. `coding-agents | Coding Agents | Tools for
   * coding with AI.`
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

}

export interface AIInsightResponse {
  summary: string;
  why_it_matters: string;
  mental_damage: string;
  tags: string[];
  should_include: boolean;
  primary_category: string | null;
  decision_reason: string;
  decision_evidence: string[];
  category_candidates: string[];
  confidence: "high" | "medium" | "low";
}

// ─── Budget ───────────────────────────────────────────────────────────────────

// Budget for the README excerpt sent to the model. ~6 KB ≈ ~1500 tokens, which
// is enough for an intro + "What is this" + first feature section without
// blowing up prompt size. The AI gets *substance*, not the whole repo.
export const README_EXCERPT_MAX_CHARS = 6000;
export const README_TRUNCATION_MARKER = "\n\n…[truncated]";

function isDirectAwesomeListSource(
  item: Pick<CatalogItem, "provenance">
): boolean {
  return item.provenance.discoveries.some(
    (discovery) => discovery.source.type === "awesome-list" && discovery.extraction.mode === "direct"
  );
}

// ─── Prompt ───────────────────────────────────────────────────────────────────

export function buildInsightPrompt(request: AIInsightRequest): string {
  const { item, categories, source_contexts = [], readme, website_context } = request;
  const github = item.metadata.github;
  const directAwesomeList = isDirectAwesomeListSource(item);

  const readmeSection =
    readme && readme.trim().length > 0
      ? `\nREADME excerpt (markdown, may be truncated):\n---\n${truncateReadmeForPrompt(readme)}\n---\n`
      : "";

  const websiteContextSection =
    website_context && (website_context.title || website_context.description || website_context.excerpt)
      ? `\nScraped site context:\n- Title: ${website_context.title ?? "(none)"}\n- Description: ${website_context.description ?? "(none)"}\n${website_context.excerpt ? `Primary page excerpt:\n---\n${website_context.excerpt}\n---\n` : ""}`
      : "";

  const sourceContextSection =
    source_contexts.length > 0
      ? `\nSeen in source lists / directories:\n${source_contexts.map((line) => `- ${line}`).join("\n")}\n`
      : "";

  const categorySection = categories.map((line) => `- ${line}`).join("\n");

  return `You are the automated PR reviewer for a curated catalog of AI rabbit holes for software developers.

Your job is two-fold:
1. Generate useful public-facing insight text for the project.
2. Make the same include/exclude decision a careful human maintainer would make when reviewing whether this belongs in our lists.

You receive grounded inputs:
- Repo description: a one-line GitHub description. Use this as the seed for the factual one-line summary when it exists.
- README excerpt: the project's own pitch in its own words. Use this for substance — what the tool actually does, who it is for, what workflow it changes, what pain it claims to solve.
- Scraped site context: title, description, and a short excerpt from the linked tool page when the source URL is not a GitHub repo.
- Source-list context: who already curates or includes it, and in what section.
Catalog scope:
- practical AI tools, agents, workflows, and infrastructure for software developers
- coding agents, agent orchestration, MCP tooling, AI IDEs, local AI, evals, developer workflow automation, and adjacent developer-facing infrastructure
- not a generic AI directory, not general ML research, not broad AI news, not vague resource dumps with no developer-tooling angle

Use these credibility / fit signals as heuristics, not hard gates:
- stars: rough ecosystem traction
- created_at: how new or established the repo is
- pushed_at: whether it still looks active
- archived: immediate negative signal
- description + scraped site context + README: what it actually claims to do
- source-list context: who already curates or includes it, and in what section

Inputs:

Name: ${item.name}
URL: ${item.canonical_url}
Repo description: ${github.description ?? "(none)"}
Stars: ${github.stars ?? "Unknown"}
Topics: ${(github.topics ?? []).join(", ") || "None"}
License: ${github.license ?? "Unknown"}
Archived: ${github.archived === true ? "yes" : github.archived === false ? "no" : "unknown"}
Created at: ${github.created_at ?? "Unknown"}
Pushed at: ${github.pushed_at ?? "Unknown"}
Homepage: ${github.homepage ?? "(none)"}
Direct awesome list source: ${directAwesomeList ? "yes" : "no"}
${sourceContextSection}${websiteContextSection}${readmeSection}
Available categories (id | name | description):
${categorySection}

Respond with valid JSON matching this schema:
{
  "summary": "One sentence factual description of what this is.",
  "why_it_matters": "One sentence on why this matters to developers.",
  "mental_damage": "One dry, self-aware sentence about the workflow anxiety or ecosystem absurdity this creates.",
  "tags": ["tag1", "tag2"],
  "should_include": true,
  "primary_category": "coding-agents" | null,
  "decision_reason": "One sentence explaining why this belongs, or why it stays out.",
  "decision_evidence": ["Short grounded fact 1", "Short grounded fact 2"],
  "category_candidates": ["coding-agents"],
  "confidence": "high" | "medium" | "low"
}
Tone ladder, in this order:
1. Useful first — the reader should learn what this is and whether it fits their workflow.
2. Funny second — dry, self-aware, recognisable to anyone who has lived through the last year of AI tooling.
3. Acidic third — sharp, but earned.

Decision rules:
- should_include: true only when the project clearly belongs in this catalog's developer-tooling scope.
- primary_category: if should_include is true, choose exactly one category id from the available category list. If should_include is false, use null.
- decision_reason: always required. If included, explain why it fits and why that category. If excluded, explain why it stays out.
- decision_evidence: always required. Give 1-3 short bullets grounded in the provided inputs above. Cite concrete signals such as the repo description, README claims, archived flag, dates, or source-list context.
- source-list context is evidence, not destiny. Appearing in strong awesome lists helps, but does not override a bad fit.
- a very new or low-star repo can still be included if the fit is unusually clear; just lower confidence when the signals are weak.
- archived repos should usually be excluded unless there is a compelling reason otherwise.
- a shutdown/sunsetting banner alone is not enough to exclude a project. Balance that signal against archive status, recency, and whether the project still presents itself as usable.
- for awesome lists or directories, if they have a meaningful developer-tooling slice or are useful starting maps for developers, prefer include under awesome-awesomes; they are navigation aids, and readers can decide which entries matter.

Writing rules:
- summary: factual, no marketing language. Seed it from the repo description; sharpen it with the README only when the description is vague or missing.
- why_it_matters: honest, useful. Grounded in what the README or source-list context says the tool changes for developers.
- mental_damage: dry, self-aware, grounded in the project's actual promise. The joke must have a foot in reality. No generic "another AI tool, haha". No invented features. No attacks on the project authors.
- tags: lowercase, hyphenated, max 5.
- category_candidates: include the chosen category first when included; use [] when excluded.`;
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

  return {
    summary: obj.summary as string,
    why_it_matters: obj.why_it_matters as string,
    mental_damage: obj.mental_damage as string,
    tags: (obj.tags as unknown[]).map((t) => String(t).toLowerCase().replace(/\s+/g, "-")),
    should_include: obj.should_include as boolean,
    primary_category: obj.primary_category as string | null,
    decision_reason: (obj.decision_reason as string).trim(),
    decision_evidence: decisionEvidence,
    category_candidates: obj.category_candidates as string[],
    confidence: confidence as "high" | "medium" | "low",
  };
}
