import { describe, expect, it } from "vitest";
import { runSync } from "../scripts/catalog.js";
import { runResync } from "../scripts/catalog/resync.js";
import type { CatalogItem } from "../scripts/catalog/types.js"

function makeItem(overrides: Partial<CatalogItem> = {}): CatalogItem {
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

describe("runSync", () => {
  it("runs the simplified command sequence in order", async () => {
    const calls: string[] = [];

    await runSync(undefined, {
      piFreeRefresh: async () => { calls.push("piFreeRefresh"); },
      discover: async () => { calls.push("discover"); },
      stars: async () => { calls.push("stars"); },
      categorize: async () => { calls.push("categorize"); },
      render: async () => { calls.push("render"); },
      validate: async () => { calls.push("validate"); },
    });

    expect(calls).toEqual(["piFreeRefresh", "discover", "stars", "categorize", "render", "validate"]);
  });

  it("stops immediately when a structural command fails", async () => {
    const calls: string[] = [];

    await expect(
      runSync(undefined, {
        piFreeRefresh: async () => { calls.push("piFreeRefresh"); },
        discover: async () => { calls.push("discover"); },
        stars: async () => {
          calls.push("stars");
          throw new Error("boom");
        },
        categorize: async () => { calls.push("categorize"); },
        render: async () => { calls.push("render"); },
        validate: async () => { calls.push("validate"); },
      })
    ).rejects.toThrow("boom");

    expect(calls).toEqual(["piFreeRefresh", "discover", "stars"]);
  });
  it("continues when a command handles item-level failures without throwing", async () => {
    const calls: string[] = [];

    await runSync(undefined, {
      piFreeRefresh: async () => { calls.push("piFreeRefresh"); },
      discover: async () => { calls.push("discover"); },
      stars: async () => { calls.push("stars"); },
      categorize: async () => {
        calls.push("categorize");
      },
      render: async () => { calls.push("render"); },
      validate: async () => { calls.push("validate"); },
    });

    expect(calls).toEqual(["piFreeRefresh", "discover", "stars", "categorize", "render", "validate"]);
  });

  it("stops immediately when the pi-free pool refresh fails", async () => {
    const calls: string[] = [];

    await expect(
      runSync(undefined, {
        piFreeRefresh: async () => {
          calls.push("piFreeRefresh");
          throw new Error("pool refresh failed");
        },
        discover: async () => { calls.push("discover"); },
        stars: async () => { calls.push("stars"); },
        categorize: async () => { calls.push("categorize"); },
        render: async () => { calls.push("render"); },
        validate: async () => { calls.push("validate"); },
      })
    ).rejects.toThrow("pool refresh failed");

    expect(calls).toEqual(["piFreeRefresh"]);
  });

});

describe("runResync", () => {
  it("re-runs categorize only for matched items before render and validate", async () => {
    const included = makeItem({
      id: "github__example__included",
      canonical_url: "https://github.com/example/included",
      identity: { github_repo: "example/included" },
      curation: { status: "included", reason: "fits", evidence: [] },
    });
    const excluded = makeItem({
      id: "github__example__excluded",
      canonical_url: "https://github.com/example/excluded",
      identity: { github_repo: "example/excluded" },
      curation: { status: "excluded", reason: "wrong fit", evidence: [] },
    });

    const calls: string[] = [];
    let selectedIds: string[] = [];

    await runResync(["--status", "excluded"], undefined, {
      loadItems: () => [included, excluded],
      runDiscover: async () => { calls.push("discover"); },
      runStars: async () => { calls.push("stars"); },
      runCategorize: async (_token, options) => {
        calls.push("categorize");
        selectedIds = [...(options?.itemIds ?? new Set<string>())].sort();
      },
      runRender: async () => { calls.push("render"); },
      runValidate: async () => { calls.push("validate"); },
    });

    expect(selectedIds).toEqual([excluded.id]);
    expect(calls).toEqual(["categorize", "render", "validate"]);
  });
});
