// scripts/ai.ts
// AI prompt and response boundary. Generates insights, tags, category candidates.

import type { CatalogItem } from "./types.js";

export interface AIInsightRequest {
  item: Pick<CatalogItem, "name" | "canonical_url" | "metadata" | "provenance">;
  categories: string[];
}

export interface AIInsightResponse {
  summary: string;
  why_it_matters: string;
  mental_damage: string;
  tags: string[];
  category_candidates: string[];
  confidence: "high" | "medium" | "low";
}

export function buildInsightPrompt(request: AIInsightRequest): string {
  const { item, categories } = request;
  const github = item.metadata.github;
  const credit = item.provenance.primary_credit;

  return `You are a dry, slightly sardonic curator of AI tools for developers who are already three rabbit holes behind.

Generate insights for this tool/project:

Name: ${item.name}
URL: ${item.canonical_url}
Description: ${github.description ?? "Not available"}
Stars: ${github.stars ?? "Unknown"}
Topics: ${(github.topics ?? []).join(", ") || "None"}
License: ${github.license ?? "Unknown"}
Credit: ${credit.label}

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

Rules:
- summary: factual, no marketing language
- why_it_matters: honest, useful
- mental_damage: aim the joke at AI FOMO, workflow rebuild spirals, our collective inability to stop opening tabs
- Do not mock authors, do not invent features
- tags: lowercase, hyphenated, max 5
- category_candidates: pick from the available categories list only`;
}

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
