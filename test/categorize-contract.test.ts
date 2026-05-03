import { describe, expect, it } from "vitest";
import {
  applyAIInsights,
  CATALOG_CATEGORIZE_PROMPT_VERSION,
  enrichWithAIInsights,
  isCategorizeRetryDue,
  materializeCatalogState,
} from "../scripts/catalog/categorize.js";

import type { CatalogItem, Category } from "../scripts/catalog/types.js"

const CATEGORIES: Category[] = [
  {
    id: "coding-agents",
    name: "Coding Agents",
    slug: "coding-agents",
    description: "Tools that write or review code for developers.",
    prompt_instruction: "Developer-facing coding tools, agentic coding systems, or code review helpers.",
  },
  {
    id: "app-builders",
    name: "AI App Builders",
    slug: "ai-app-builders",
    description: "Hosted prompt-to-app or prompt-to-site builders.",
    prompt_instruction: "Browser-first SaaS products that generate apps or sites from prompts rather than collaborating on a source repo.",
  },
];

function makeGitHubItem(overrides: Partial<CatalogItem> = {}): CatalogItem {
  return {
    id: "github__example__tool",
    kind: "github-repo",
    name: "tool",
    canonical_url: "https://github.com/example/tool",
    identity: { github_repo: "example/tool" },
    provenance: {
      discoveries: [
        {
          id: "discovery__github__example__tool__direct-link",
          discovered_at: "2026-05-01T00:00:00Z",
          source: { type: "direct-link", name: "Manual submission", url: null, repository: null },
          extraction: {
            mode: "direct",
            section_path: ["inbox"],
            anchor_text: "https://github.com/example/tool",
            extracted_url: "https://github.com/example/tool",
            surrounding_text: null,
            confidence: "high",
          },
        },
      ],
    },
    metadata: {
      github: {
        stars: 42,
        forks: 1,
        license: "MIT",
        archived: false,
        created_at: "2026-04-01T00:00:00Z",
        pushed_at: "2026-05-01T00:00:00Z",
        description: "A coding agent for developers.",
        homepage: "",
        topics: ["agent"],
        last_checked_at: "2026-05-01T00:00:00Z",
      },
    },
    insights: { summary: null, why_it_matters: null, mental_damage: null, tags: [], confidence: null },
    curation: { status: "pending", reason: null, evidence: [] },
    placement: { primary_category: null, section: null },
    lifecycle: { status: "incubating" },
    processing: {
      discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
      stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
      categorize: { status: "pending", updated_at: null },
    },
    ...overrides,
  };
}
function makeCategorized(candidate: CatalogItem): CatalogItem {
  return {
    ...candidate,
    insights: {
      summary: `summary for ${candidate.name}`,
      why_it_matters: `why ${candidate.name} matters`,
      mental_damage: `joke for ${candidate.name}`,
      tags: ["coding-agent"],
      confidence: "high",
    },
    curation: { status: "included", reason: `fit ${candidate.name}`, evidence: [`evidence for ${candidate.name}`] },
    placement: { primary_category: "coding-agents", section: null },
  };
}


describe("categorize command contract", () => {
  it("records invalid llm json after a single prompt call", async () => {
    const item = makeGitHubItem();
    let calls = 0;

    const result = await materializeCatalogState([item], CATEGORIES, [], {
      enrichItem: (candidate, categories) =>
        enrichWithAIInsights(candidate, categories, async () => {
          calls += 1;
          return '{"summary":"broken"';
        }),
      saveItem: () => {},
      renderCatalog: () => {},
    });

    expect(calls).toBe(1);
    expect(result.finalItems[0]?.processing?.categorize?.status).toBe("deferred");
    expect(result.finalItems[0]?.processing?.categorize?.cause?.type).toBe("invalid_llm_json");
  });

  it("skips github items that never completed star metadata refresh", async () => {
    const item = makeGitHubItem({
      metadata: {
        github: {
          stars: null,
          forks: null,
          license: null,
          archived: null,
          created_at: null,
          pushed_at: null,
          description: null,
          homepage: null,
          topics: null,
          last_checked_at: null,
        },
      },
      processing: {
        discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        stars: { status: "deferred", updated_at: "2026-05-01T00:00:00Z", cause: { type: "github_unavailable", message: "later" } },
        categorize: { status: "pending", updated_at: null },
      },
    });
    let calls = 0;

    const result = await materializeCatalogState([item], CATEGORIES, [], {
      enrichItem: async (candidate) => {
        calls += 1;
        return candidate;
      },
      saveItem: () => {},
      renderCatalog: () => {},
    });

    expect(calls).toBe(0);
    expect(result.finalItems[0]?.processing?.categorize?.status).toBe("skipped");
    expect(result.finalItems[0]?.processing?.categorize?.cause?.type).toBe("missing_metadata");
  });

  it("skips github items whose star metadata is stale even if a previous stars run marked them done", async () => {
    const item = makeGitHubItem({
      metadata: {
        github: {
          stars: 42,
          forks: 1,
          license: "MIT",
          archived: false,
          created_at: "2026-04-01T00:00:00Z",
          pushed_at: "2026-05-01T00:00:00Z",
          description: "A coding agent for developers.",
          homepage: "",
          topics: ["agent"],
          last_checked_at: "2026-03-01T00:00:00Z",
        },
      },
      processing: {
        discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        stars: { status: "done", updated_at: "2026-03-01T00:00:00Z" },
        categorize: { status: "pending", updated_at: null },
      },
    });
    let calls = 0;

    const result = await materializeCatalogState([item], CATEGORIES, [], {
      enrichItem: async (candidate) => {
        calls += 1;
        return candidate;
      },
      saveItem: () => {},
      renderCatalog: () => {},
      metadataRefreshDays: 7,
      now: new Date("2026-05-02T00:00:00Z"),
    });

    expect(calls).toBe(0);
    expect(result.finalItems[0]?.processing?.categorize?.status).toBe("skipped");
    expect(result.finalItems[0]?.processing?.categorize?.cause?.type).toBe("missing_metadata");
  });

  it("force rebuild still categorizes stale github items when metadata is complete", async () => {
    const item = makeGitHubItem({
      metadata: {
        github: {
          stars: 42,
          forks: 1,
          license: "MIT",
          archived: false,
          created_at: "2026-04-01T00:00:00Z",
          pushed_at: "2026-05-01T00:00:00Z",
          description: "A coding agent for developers.",
          homepage: "",
          topics: ["agent"],
          last_checked_at: "2026-03-01T00:00:00Z",
        },
      },
      processing: {
        discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        stars: { status: "done", updated_at: "2026-03-01T00:00:00Z" },
        categorize: { status: "pending", updated_at: null },
      },
    });
    let calls = 0;

    const result = await materializeCatalogState([item], CATEGORIES, [], {
      enrichItem: async (candidate) => {
        calls += 1;
        return candidate;
      },
      saveItem: () => {},
      renderCatalog: () => {},
      metadataRefreshDays: 7,
      now: new Date("2026-05-02T00:00:00Z"),
      forceRebuild: true,
    });

    expect(calls).toBe(1);
    expect(result.finalItems[0]?.processing?.categorize?.status).not.toBe("skipped");
  });

  it("skips github items whose star metadata is still incomplete even with a fresh timestamp", async () => {
    const item = makeGitHubItem({
      metadata: {
        github: {
          stars: 42,
          forks: 1,
          license: "MIT",
          archived: false,
          created_at: null,
          pushed_at: "2026-05-01T00:00:00Z",
          description: "A coding agent for developers.",
          homepage: "",
          topics: ["agent"],
          last_checked_at: "2026-05-02T00:00:00Z",
        },
      },
      processing: {
        discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        stars: { status: "done", updated_at: "2026-05-02T00:00:00Z" },
        categorize: { status: "pending", updated_at: null },
      },
    });
    let calls = 0;

    const result = await materializeCatalogState([item], CATEGORIES, [], {
      enrichItem: async (candidate) => {
        calls += 1;
        return candidate;
      },
      saveItem: () => {},
      renderCatalog: () => {},
      metadataRefreshDays: 7,
      now: new Date("2026-05-02T00:00:00Z"),
    });

    expect(calls).toBe(0);
    expect(result.finalItems[0]?.processing?.categorize?.status).toBe("skipped");
    expect(result.finalItems[0]?.processing?.categorize?.cause?.type).toBe("missing_metadata");
  });


  it("treats pre-start budget exhaustion as deferred backlog instead of a provider failure", async () => {
    const item = makeGitHubItem();

    const result = await materializeCatalogState([item], CATEGORIES, [], {
      enrichItem: async () => {
        throw new Error("LLM categorization budget exhausted before starting item");
      },
      saveItem: () => {},
      renderCatalog: () => {},
    });

    expect(result.attemptedAiTargetCount).toBe(0);
    expect(result.skippedAiTargetIds).toEqual([item.id]);
    expect(result.finalItems[0]?.processing?.categorize?.cause?.type).toBe("budget_exhausted");
  });
  it("stores prompt and category versions on successful categorization", async () => {
    const item = makeGitHubItem();

    const result = await materializeCatalogState([item], CATEGORIES, [], {
      enrichItem: async (candidate) => ({
        ...candidate,
        insights: {
          summary: "A coding agent.",
          why_it_matters: "It helps developers ship faster.",
          mental_damage: "Now your backlog needs its own backlog.",
          tags: ["coding-agent"],
          confidence: "high",
        },
        curation: {
          status: "included",
          reason: "Clear developer tooling fit.",
          evidence: ["Repo description says it is a coding agent for developers."],
        },
        placement: {
          primary_category: "coding-agents",
          section: null,
        },
      }),
      saveItem: () => {},
      renderCatalog: () => {},
    });

    expect(result.finalItems[0]?.processing?.categorize?.status).toBe("done");
    expect(result.finalItems[0]?.processing?.categorize?.prompt_version).toBe(CATALOG_CATEGORIZE_PROMPT_VERSION);
    expect(result.finalItems[0]?.processing?.categorize?.category_rules_version).toMatch(/^[a-f0-9]{12}$/);
  });

  it("force mode reruns categorization even when insights already exist", async () => {
    const item = makeGitHubItem({
      insights: {
        summary: "Old summary.",
        why_it_matters: "Old reason.",
        mental_damage: "Old joke.",
        tags: ["coding-agent"],
        confidence: "medium",
      },
      curation: { status: "included", reason: "Old fit.", evidence: ["Old evidence."] },
      placement: { primary_category: "coding-agents", section: null },
    });
    let calls = 0;

    const result = await enrichWithAIInsights(
      item,
      CATEGORIES,
      async () => {
        calls += 1;
        return JSON.stringify({
          summary: "Fresh summary.",
          why_it_matters: "Fresh reason.",
          mental_damage: "Fresh joke.",
          tags: ["ai-app-builder"],
          should_include: true,
          primary_category: "app-builders",
          decision_reason: "Fresh fit.",
          decision_evidence: ["Fresh evidence."],
          category_candidates: ["app-builders"],
          confidence: "high",
        });
      },
      { force: true },
    );

    expect(calls).toBe(1);
    expect(result.insights.summary).toBe("Fresh summary.");
    expect(result.curation.reason).toBe("Fresh fit.");
    expect(result.placement.primary_category).toBe("app-builders");
  });

  it("persists only items whose final state changed", async () => {
    const unchanged = makeGitHubItem({
      id: "github__example__unchanged",
      insights: {
        summary: "Already done.",
        why_it_matters: "Already explained.",
        mental_damage: "Already joked.",
        tags: ["coding-agent"],
        confidence: "high",
      },
      curation: { status: "included", reason: "Already classified.", evidence: ["Existing evidence."] },
      placement: { primary_category: "coding-agents", section: null },
    });
    const changed = makeGitHubItem({ id: "github__example__changed", canonical_url: "https://github.com/example/changed", identity: { github_repo: "example/changed" } });
    const saved: string[] = [];

    await materializeCatalogState([unchanged, changed], CATEGORIES, [], {
      enrichItem: async (candidate) => {
        if (candidate.id === unchanged.id) return candidate;
        return {
          ...candidate,
          insights: {
            summary: "Fresh summary.",
            why_it_matters: "Fresh reason.",
            mental_damage: "Fresh joke.",
            tags: ["coding-agent"],
            confidence: "high",
          },
          curation: { status: "included", reason: "Fresh fit.", evidence: ["Fresh evidence."] },
          placement: { primary_category: "coding-agents", section: null },
        };
      },
      saveItem: (item) => {
        saved.push(item.id);
      },
      renderCatalog: () => {},
    });

    expect(saved).toEqual([changed.id]);
  });

  it("relabels hosted app builders away from coding-agents when app-builders exists", () => {
    const websiteItem: CatalogItem = {
      ...makeGitHubItem({
        id: "lovable__dev",
        kind: "website",
        name: "Lovable",
        canonical_url: "https://lovable.dev",
        identity: {},
        metadata: {
          github: {
            stars: null,
            forks: null,
            license: null,
            archived: null,
            created_at: null,
            pushed_at: null,
            description: null,
            homepage: null,
            topics: null,
            last_checked_at: null,
          },
        },
        provenance: {
          discoveries: [
            {
              id: "discovery__lovable__dev__awesome-list__app-builders",
              discovered_at: "2026-05-01T00:00:00Z",
              source: {
                type: "awesome-list",
                name: "awesome-ai-coding-tools",
                url: "https://github.com/ai-for-developers/awesome-ai-coding-tools",
                repository: "ai-for-developers/awesome-ai-coding-tools",
              },
              extraction: {
                mode: "parsed",
                section_path: ["App Builders"],
                anchor_text: "Lovable",
                extracted_url: "https://lovable.dev",
                surrounding_text: "Prompt-to-app SaaS.",
                confidence: "high",
              },
            },
          ],
        },
        processing: {
          discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
          stars: { status: "pending", updated_at: null },
          categorize: { status: "pending", updated_at: null },
        },
      }),
    };

    const result = applyAIInsights(
      websiteItem,
      {
        summary: "Lovable is a hosted product that generates web apps from prompts.",
        why_it_matters: "It helps developers prototype product surfaces quickly.",
        mental_damage: "Now the Figma-to-app gap is one more tab away from existential collapse.",
        tags: ["ai-app-builder", "no-code"],
        should_include: true,
        primary_category: "coding-agents",
        decision_reason: "It generates production-ready apps from prompts.",
        decision_evidence: ["Discovery source groups it under App Builders."],
        category_candidates: ["coding-agents", "app-builders"],
        confidence: "medium",
      },
      CATEGORIES,
    );

    expect(result.placement.primary_category).toBe("app-builders");
    expect(result.curation.status).toBe("included");
    expect(result.curation.evidence.some((entry) => /App Builders|app-building|prompt-to-app/i.test(entry))).toBe(true);
    expect(result.curation.reason).toContain("app-builders");
  });

  it("orders categorize work by oldest processing timestamp and skips retry-blocked items", async () => {
    const pending = makeGitHubItem({
      id: "github__example__pending",
      name: "pending",
      canonical_url: "https://github.com/example/pending",
      identity: { github_repo: "example/pending" },
      processing: {
        discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        categorize: { status: "pending", updated_at: null, next_retry_at: null },
      },
    });
    const oldest = makeGitHubItem({
      id: "github__example__oldest",
      name: "oldest",
      canonical_url: "https://github.com/example/oldest",
      identity: { github_repo: "example/oldest" },
      processing: {
        discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        categorize: { status: "deferred", updated_at: "2000-01-01T00:00:00Z", next_retry_at: "2000-01-01T01:00:00Z" },
      },
    });
    const recent = makeGitHubItem({
      id: "github__example__recent",
      name: "recent",
      canonical_url: "https://github.com/example/recent",
      identity: { github_repo: "example/recent" },
      processing: {
        discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        categorize: { status: "failed", updated_at: "2099-01-01T00:00:00Z", next_retry_at: null },
      },
    });
    const retryBlocked = makeGitHubItem({
      id: "github__example__retry-blocked",
      name: "retry-blocked",
      canonical_url: "https://github.com/example/retry-blocked",
      identity: { github_repo: "example/retry-blocked" },
      processing: {
        discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        categorize: { status: "deferred", updated_at: "2001-01-01T00:00:00Z", next_retry_at: "2999-01-01T00:00:00Z" },
      },
    });
    const seen: string[] = [];

    const result = await materializeCatalogState([recent, retryBlocked, oldest, pending], CATEGORIES, [], {
      enrichItem: async (candidate) => {
        seen.push(candidate.id);
        return makeCategorized(candidate);
      },
      saveItem: () => {},
      renderCatalog: () => {},
    });

    expect(seen).toEqual([oldest.id, recent.id, pending.id]);

    expect(result.retryBlockedTargetCount).toBe(1);
    expect(result.finalItems.find((item) => item.id === retryBlocked.id)?.processing?.categorize?.next_retry_at).toBe("2999-01-01T00:00:00Z");
  });

  it("force rebuild ignores the retry window", async () => {
    const retryBlocked = makeGitHubItem({
      id: "github__example__retry-blocked",
      name: "retry-blocked",
      canonical_url: "https://github.com/example/retry-blocked",
      identity: { github_repo: "example/retry-blocked" },
      processing: {
        discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        categorize: { status: "deferred", updated_at: "2001-01-01T00:00:00Z", next_retry_at: "2999-01-01T00:00:00Z" },
      },
    });
    const seen: string[] = [];

    const result = await materializeCatalogState([retryBlocked], CATEGORIES, [], {
      enrichItem: async (candidate) => {
        seen.push(candidate.id);
        return makeCategorized(candidate);
      },
      saveItem: () => {},
      renderCatalog: () => {},
      forceRebuild: true,
    });

    expect(seen).toEqual([retryBlocked.id]);
    expect(result.retryBlockedTargetCount).toBe(0);
  });

  it("respects categorize retry windows and force override", () => {
    expect(isCategorizeRetryDue(makeGitHubItem())).toBe(true);
    expect(isCategorizeRetryDue(
      makeGitHubItem({
        processing: {
          discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
          stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
          categorize: { status: "deferred", updated_at: "2026-05-01T00:00:00Z", next_retry_at: "2999-01-01T00:00:00Z" },
        },
      }),
    )).toBe(false);
    expect(isCategorizeRetryDue(
      makeGitHubItem({
        processing: {
          discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
          stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
          categorize: { status: "deferred", updated_at: "2026-05-01T00:00:00Z", next_retry_at: "2999-01-01T00:00:00Z" },
        },
      }),
      Date.parse("2026-05-03T00:00:00Z"),
      true,
    )).toBe(true);
  });

});
