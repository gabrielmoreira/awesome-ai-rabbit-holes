import { describe, expect, it } from "vitest";
import {
  orderDiscoverableSources,
} from "../scripts/catalog/discovery.js";
import {
  refreshItemStars,
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
  it("prioritizes explicit awesome lists before unrelated direct links", () => {
    const sources: Source[] = [
      { url: "https://example.com/direct", kind: "direct-link" },
      { url: "https://github.com/example/awesome-list", kind: "awesome-list" },
      { url: "https://example.com/docs", kind: "docs-page" },
    ];

    expect(orderDiscoverableSources(sources).map((source) => source.url)).toEqual([
      "https://github.com/example/awesome-list",
      "https://example.com/direct",
      "https://example.com/docs",
    ]);
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
