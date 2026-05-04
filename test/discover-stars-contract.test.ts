import { describe, expect, it } from "vitest";
import {
  orderDiscoverableSources,
} from "../scripts/catalog/discovery.js";
import { selectDiscoverSources } from "../scripts/catalog/discover.js";
import {
  refreshItemStars,
  runStars,
  selectStarRefreshTargets,
} from "../scripts/catalog/stars.js";
import type { CatalogItem, Source } from "../scripts/catalog/types.js"

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
        stars: 10,
        forks: 1,
        license: "MIT",
        archived: false,
        created_at: "2026-04-01T00:00:00Z",
        pushed_at: "2026-05-01T00:00:00Z",
        description: "Developer tool",
        homepage: "",
        topics: ["agent"],
        last_checked_at: "2026-04-01T00:00:00Z",
      },
    },
    insights: { summary: null, why_it_matters: null, mental_damage: null, tags: [], confidence: null },
    curation: { status: "pending", reason: null, evidence: [] },
    placement: { primary_category: null, section: null },
    lifecycle: { status: "incubating" },
    processing: {
      discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
      stars: { status: "pending", updated_at: null },
      categorize: { status: "skipped", updated_at: "2026-05-01T00:00:00Z", cause: { type: "missing_metadata", message: "not ready" } },
    },
    ...overrides,
  };
}

describe("orderDiscoverableSources", () => {
  it("prioritizes curated lists before unrelated direct sources", () => {
    const sources: Source[] = [
      { url: "https://example.com/direct", kind: "direct-item" },
      { url: "https://github.com/example/awesome-list", kind: "curated-list" },
      { url: "https://example.com/docs", kind: "docs-page" },
    ];

    expect(orderDiscoverableSources(sources).map((source) => source.url)).toEqual([
      "https://github.com/example/awesome-list",
      "https://example.com/direct",
      "https://example.com/docs",
    ]);
  });
});

describe("selectDiscoverSources", () => {
  it("matches normalized GitHub source urls from provenance-driven resync inputs", () => {
    const sources: Source[] = [
      { url: "https://github.com/bradAGI/awesome-cli-coding-agents", kind: "curated-list" },
      { url: "https://example.com/inbox", kind: "direct-item" },
    ];

    const selected = selectDiscoverSources(sources, new Set(["https://github.com/bradagi/awesome-cli-coding-agents"]));
    expect(selected.map((source) => source.url)).toEqual(["https://github.com/bradAGI/awesome-cli-coding-agents"]);
  });
});

describe("selectStarRefreshTargets", () => {
  it("includes github-backed items even when categorization is not ready", () => {
    const staleGithub = makeGitHubItem();
    const freshGithub = makeGitHubItem({
      id: "github__example__fresh",
      canonical_url: "https://github.com/example/fresh",
      identity: { github_repo: "example/fresh" },
      metadata: {
        github: {
          stars: 50,
          forks: 2,
          license: "MIT",
          archived: false,
          created_at: "2026-04-01T00:00:00Z",
          pushed_at: "2026-05-01T00:00:00Z",
          description: "Fresh repo",
          homepage: "",
          topics: ["agent"],
          last_checked_at: new Date().toISOString(),
        },
      },
    });

    const incompleteFreshGithub = makeGitHubItem({
      id: "github__example__incomplete",
      canonical_url: "https://github.com/example/incomplete",
      identity: { github_repo: "example/incomplete" },
      metadata: {
        github: {
          stars: 5,
          forks: 0,
          license: "MIT",
          archived: false,
          created_at: null,
          pushed_at: "2026-05-01T00:00:00Z",
          description: "Partial metadata",
          homepage: "",
          topics: ["agent"],
          last_checked_at: new Date().toISOString(),
        },
      },
    });

    const websiteOnly = makeGitHubItem({
      id: "website__example__tool",
      kind: "website",
      canonical_url: "https://example.com/tool",
      identity: {},
    });

    const selected = selectStarRefreshTargets(
      [staleGithub, freshGithub, incompleteFreshGithub, websiteOnly],
      7,
      new Date("2026-05-10T00:00:00Z"),
      { force: false }
    );

    expect(selected.map((item) => item.id)).toEqual([staleGithub.id, incompleteFreshGithub.id]);
  });
});

describe("runStars", () => {
  it("does not rewrite unclaimed items when the stars budget is already exhausted", async () => {
    const staleGithub = makeGitHubItem();
    const anotherStaleGithub = makeGitHubItem({
      id: "github__example__another",
      canonical_url: "https://github.com/example/another",
      identity: { github_repo: "example/another" },
    });
    const savedIds: string[] = [];
    const logLines: string[] = [];

    await runStars(undefined, {}, {
      loadItems: () => [staleGithub, anotherStaleGithub],
      saveItem: (item) => { savedIds.push(item.id); },
      loadSettings: () => ({
        promotion: { incubating_until_stars: 150 },
        github: { metadata_refresh_days: 7 },
        budgets: { discover_minutes: 10, stars_minutes: 0, categorize_minutes: 60 },
        concurrency: { github: 1, site: 2, llm: 2, model_probe: 1 },
      }),
      loadConfig: () => ({
        promotion: { incubating_until_stars: 150 },
        github: { metadata_refresh_days: 7 },
      }),
      refreshItem: async (item) => item,
      log: (line) => { logLines.push(line); },
    });

    expect(savedIds).toEqual([]);
    expect(logLines).toContain("Star refresh budget exhausted before claiming any item(s); leaving 2 item(s) pending.");
  });

  it("continues saving other items when one star refresh throws", async () => {
    const failing = makeGitHubItem();
    const succeeding = makeGitHubItem({
      id: "github__example__success",
      canonical_url: "https://github.com/example/success",
      identity: { github_repo: "example/success" },
    });
    const saved = new Map<string, CatalogItem>();

    await runStars(undefined, {}, {
      loadItems: () => [failing, succeeding],
      saveItem: (item) => { saved.set(item.id, item); },
      loadSettings: () => ({
        promotion: { incubating_until_stars: 150 },
        github: { metadata_refresh_days: 7 },
        budgets: { discover_minutes: 10, stars_minutes: 10, categorize_minutes: 60 },
        concurrency: { github: 1, site: 2, llm: 2, model_probe: 1 },
      }),
      loadConfig: () => ({
        promotion: { incubating_until_stars: 150 },
        github: { metadata_refresh_days: 7 },
      }),
      refreshItem: async (item) => {
        if (item.id === failing.id) throw new Error("network down");
        return {
          ...item,
          processing: {
            ...item.processing,
            stars: { status: "done", updated_at: "2026-05-02T00:00:00Z", cause: null },
          },
        };
      },
    });

    expect(saved.get(failing.id)?.processing?.stars?.status).toBe("failed");
    expect(saved.get(failing.id)?.processing?.stars?.cause?.type).toBe("github_refresh_failed");
    expect(saved.get(succeeding.id)?.processing?.stars?.status).toBe("done");
  });
});

describe("refreshItemStars", () => {
  it("defers unavailable github metadata instead of crashing the command", async () => {
    const item = makeGitHubItem();

    const refreshed = await refreshItemStars(
      item,
      undefined,
      150,
      async () => item,
    );

    expect(refreshed.processing?.stars?.status).toBe("deferred");
    expect(refreshed.processing?.stars?.cause?.type).toBe("github_unavailable");
  });
});
