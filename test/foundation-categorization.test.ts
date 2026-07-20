import { describe, expect, it } from "vitest";
import {
  applyAIInsights,
  CATALOG_CATEGORIZE_PROMPT_VERSION,
  enrichWithAIInsights,
  materializeCatalogState,
} from "../scripts/catalog/categorize.js";
import { parseAIInsightResponse } from "../scripts/catalog/categorize-prompt.js";
import type { AIInsightResponse } from "../scripts/catalog/categorize-prompt.js";
import type { CatalogItem, Category } from "../scripts/catalog/types.js";

const CATEGORIES: Category[] = [
  {
    id: "coding-agents",
    name: "Coding Agents",
    slug: "coding-agents",
    description: "Tools that work directly on code.",
    prompt: {
      instructions: "Use for developer-facing coding agents.",
      use_when: ["The tool directly changes or reviews code."],
      do_not_use_when: ["The tool primarily exposes a protocol."],
      canonical_positives: ["Claude Code"],
      common_false_positives: ["MCP servers"],
    },
  },
  {
    id: "mcp",
    name: "MCP",
    slug: "mcp",
    description: "Model Context Protocol infrastructure.",
    prompt: {
      instructions: "Use for MCP infrastructure.",
      use_when: ["The primary artifact is an MCP server."],
      do_not_use_when: ["MCP is only an integration."],
      canonical_positives: ["MCP SDK"],
      common_false_positives: ["Coding agents with MCP support"],
    },
  },
];

const NOW = new Date("2026-07-16T00:00:00.000Z");

function makeItem(overrides: Partial<CatalogItem> = {}): CatalogItem {
  return {
    id: "github__example__agent",
    kind: "github-repo",
    name: "agent",
    canonical_url: "https://github.com/example/agent",
    identity: { github_repo: "example/agent" },
    provenance: {
      discoveries: [
        {
          id: "discovery__github__example__agent__direct",
          discovered_at: "2026-07-15T00:00:00.000Z",
          source: { type: "direct-link", name: "Manual", url: null, repository: null },
          extraction: {
            mode: "direct",
            section_path: ["inbox"],
            anchor_text: "agent",
            extracted_url: "https://github.com/example/agent",
            surrounding_text: "A coding agent.",
            confidence: "high",
          },
        },
      ],
    },
    metadata: {
      github: {
        stars: 10,
        forks: 1,
        license: "MIT",
        archived: false,
        created_at: "2026-01-01T00:00:00.000Z",
        pushed_at: "2026-07-15T00:00:00.000Z",
        description: "A coding agent.",
        homepage: null,
        topics: ["coding-agent"],
        last_checked_at: "2026-07-15T00:00:00.000Z",
        readme: { fetched_at: "2026-07-15T00:00:00.000Z", bytes: 42 },
      },
    },
    insights: {
      summary: "A coding agent.",
      why_it_matters: "It edits code for developers.",
      mental_damage: "The agent now reviews your review agent.",
      tags: ["coding-agent"],
      confidence: "high",
    },
    curation: { status: "included", reason: "Existing coding fit.", evidence: ["Existing evidence."] },
    placement: { primary_category: "coding-agents", section: null },
    lifecycle: { status: "incubating" },
    processing: {
      discover: { status: "done", updated_at: "2026-07-15T00:00:00.000Z" },
      stars: { status: "done", updated_at: "2026-07-15T00:00:00.000Z" },
      categorize: {
        status: "done",
        updated_at: "2026-07-15T00:00:00.000Z",
        prompt_version: CATALOG_CATEGORIZE_PROMPT_VERSION,
        category_rules_version: "current-placeholder",
      },
    },
    ...overrides,
  };
}

function response(overrides: Partial<AIInsightResponse> = {}): AIInsightResponse {
  return {
    summary: "Fresh summary.",
    why_it_matters: "Fresh explanation.",
    mental_damage: "Fresh joke.",
    tags: ["coding-agent"],
    should_include: true,
    primary_category: "coding-agents",
    section: null,
    decision_reason: "The model proposes coding agents.",
    decision_evidence: ["The README describes direct code editing."],
    category_candidates: ["coding-agents", "mcp"],
    contrastive_reason: "Choose coding-agents over mcp because direct code editing is the primary product behavior.",
    confidence: "high",
    ...overrides,
  };
}


const CONFIG = {
  promotion: { incubating_until_stars: 1_000 },
  github: { metadata_refresh_days: 30 },
};

describe("categorization foundation", () => {
  it("requeues completed categorization when prompt or category rules versions drift", async () => {
    for (const categorize of [
      { status: "done" as const, updated_at: "2026-07-15T00:00:00.000Z", prompt_version: "old-prompt", category_rules_version: "current-placeholder" },
      { status: "done" as const, updated_at: "2026-07-15T00:00:00.000Z", prompt_version: CATALOG_CATEGORIZE_PROMPT_VERSION, category_rules_version: "old-rules" },
    ]) {
      let calls = 0;
      const item = makeItem({ processing: { ...makeItem().processing, categorize } });
      await materializeCatalogState([item], CATEGORIES, {
        enrichItem: async (candidate) => {
          calls += 1;
          return candidate;
        },
        saveItem: () => {},
        renderCatalog: () => {},
        now: NOW,
        catalogConfig: CONFIG,
      });
      expect(calls).toBe(1);
    }
  });

  it("persists the answering model, ranked candidates, contrastive reason, and prompt input hash", async () => {
    const result = await enrichWithAIInsights(
      makeItem({ placement: { primary_category: null, section: null }, curation: { status: "pending", reason: null, evidence: [] } }),
      CATEGORIES,
      async () => ({ model: "cloudflare/@cf/openai/gpt-oss-120b", text: JSON.stringify(response()) }),
      { force: true },
    );

    const classification = result.processing?.categorize?.classification;
    expect(classification?.answering_model).toBe("cloudflare/@cf/openai/gpt-oss-120b");
    expect(classification?.category_candidates).toEqual(["coding-agents", "mcp"]);
    expect(classification?.contrastive_reason).toMatch(/^Choose coding-agents over mcp because /);
    expect(classification?.prompt_version).toBe(CATALOG_CATEGORIZE_PROMPT_VERSION);
    expect(classification?.category_rules_version).toMatch(/^[a-f0-9]{12}$/);
    expect(classification?.input_hash).toMatch(/^sha256:[a-f0-9]{64}$/);
  });

  it("retains a non-forced placement and its reasoning while recording the disagreement", () => {
    const item = makeItem({
      placement: { primary_category: "mcp", section: null },
      curation: { status: "included", reason: "Maintainer placed this in MCP.", evidence: ["Maintainer evidence."] },
    });
    const result = applyAIInsights(item, response(), CATEGORIES);

    expect(result.placement.primary_category).toBe("mcp");
    expect(result.curation.reason).toBe("Maintainer placed this in MCP.");
    expect(result.curation.evidence).toEqual(["Maintainer evidence."]);
    expect(result.processing?.categorize?.classification?.proposed_primary_category).toBe("coding-agents");
    expect(result.processing?.categorize?.classification?.disagreement).toBe(true);
    expect(result.processing?.categorize?.classification?.decision_reason).toBe("The model proposes coding agents.");
    expect(result.lifecycle.status).toBe("needs_review");
    expect(result.lifecycle.reason).toMatch(/placement disagreement/i);
  });

  it("applies a forced category normally", () => {
    const item = makeItem({ placement: { primary_category: "mcp", section: null } });
    const result = applyAIInsights(item, response(), CATEGORIES, { forceCategory: true });

    expect(result.placement.primary_category).toBe("coding-agents");
    expect(result.curation.reason).toBe("The model proposes coding agents.");
    expect(result.processing?.categorize?.classification?.disagreement).toBe(false);
    expect(result.lifecycle.status).not.toBe("needs_review");
  });

  it("marks low-confidence classification for review", () => {
    const result = applyAIInsights(
      makeItem({ placement: { primary_category: null, section: null } }),
      response({ confidence: "low" }),
      CATEGORIES,
    );

    expect(result.insights.confidence).toBe("low");
    expect(result.lifecycle.status).toBe("needs_review");
    expect(result.lifecycle.reason).toMatch(/low confidence/i);
  });

  it("marks invalid-primary runner-up promotion for review", () => {
    const result = applyAIInsights(
      makeItem({ placement: { primary_category: null, section: null } }),
      response({
        primary_category: "made-up-category",
        category_candidates: ["made-up-category", "coding-agents"],
        contrastive_reason: "Choose made-up-category over coding-agents because the model emitted an invalid primary category.",
      }),
      CATEGORIES,
    );

    expect(result.placement.primary_category).toBe("coding-agents");
    expect(result.lifecycle.status).toBe("needs_review");
    expect(result.lifecycle.reason).toMatch(/invalid primary.*runner-up/i);
  });

  it("marks an unknown runner-up category for review even when the primary is valid", () => {
    const result = applyAIInsights(
      makeItem({ placement: { primary_category: null, section: null } }),
      response({
        primary_category: "coding-agents",
        category_candidates: ["coding-agents", "unknown-runner-up"],
        contrastive_reason: "Choose coding-agents over unknown-runner-up because the repository directly edits code.",
      }),
      CATEGORIES,
    );

    expect(result.placement.primary_category).toBe("coding-agents");
    expect(result.lifecycle.status).toBe("needs_review");
    expect(result.processing?.categorize?.classification?.review_reason).toMatch(
      /unknown category candidate.*unknown-runner-up/i,
    );
  });

  it("keeps a failed version refresh eligible for the existing retry scheduler", async () => {
    const stale = makeItem({
      processing: {
        ...makeItem().processing,
        categorize: {
          status: "done",
          updated_at: "2026-07-15T00:00:00.000Z",
          prompt_version: "old-prompt",
          category_rules_version: "old-rules",
        },
      },
    });
    const failed = await materializeCatalogState([stale], CATEGORIES, {
      runPrompt: async () => {
        throw new Error("provider unavailable");
      },
      saveItem: () => {},
      renderCatalog: () => {},
      now: NOW,
      catalogConfig: CONFIG,
    });
    let retryCalls = 0;

    await materializeCatalogState(failed.finalItems, CATEGORIES, {
      enrichItem: async (candidate) => {
        retryCalls += 1;
        return candidate;
      },
      saveItem: () => {},
      renderCatalog: () => {},
      now: NOW,
      catalogConfig: CONFIG,
    });

    expect(retryCalls).toBe(1);
  });

  it("restores a curated lifecycle after its categorization review is resolved", () => {
    const curated = makeItem({ lifecycle: { status: "curated", reason: "Maintainer approved." } });
    const flagged = applyAIInsights(curated, response({ confidence: "low" }), CATEGORIES);
    expect(flagged.lifecycle.status).toBe("needs_review");

    const resolved = applyAIInsights(flagged, response({ confidence: "high" }), CATEGORIES, { forceCategory: true });
    expect(resolved.lifecycle).toEqual({ status: "curated", reason: "Maintainer approved." });
  });

  it("requires a full contrastive structure and classifies violations as invalid LLM responses", async () => {
    const malformed = JSON.stringify(response({
      contrastive_reason: "Choose coding-agents because it edits code.",
    }));
    expect(() => parseAIInsightResponse(malformed)).toThrow(/Invalid AI response structure/);

    const result = await materializeCatalogState(
      [makeItem({ placement: { primary_category: null, section: null }, curation: { status: "pending", reason: null, evidence: [] } })],
      CATEGORIES,
      {
        runPrompt: async () => malformed,
        saveItem: () => {},
        renderCatalog: () => {},
        now: NOW,
        catalogConfig: CONFIG,
      },
    );

    expect(result.finalItems[0]?.processing?.categorize?.status).toBe("deferred");
    expect(result.finalItems[0]?.processing?.categorize?.cause?.type).toBe("invalid_llm_json");
  });
});
