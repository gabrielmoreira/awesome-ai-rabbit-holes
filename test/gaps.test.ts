import { describe, expect, it } from "vitest";
import { makeItemId } from "../scripts/catalog/core.ts";
import { runGaps } from "../scripts/catalog/gaps.ts";
import {
  buildCatalogProcessingGapReport,
  renderCatalogProcessingGapReport,
} from "../scripts/catalog/reporting.ts";
import type { CatalogItem } from "../scripts/catalog/types.ts";

function makeItem(overrides: Partial<CatalogItem> & { canonical_url: string; name?: string }): CatalogItem {
  const github = overrides.identity?.github_repo;
  return {
    id: overrides.id ?? makeItemId(overrides.canonical_url),
    kind: overrides.kind ?? (github ? "github-repo" : "website"),
    name: overrides.name ?? (github ? github.split("/")[1]! : overrides.canonical_url),
    canonical_url: overrides.canonical_url,
    identity: overrides.identity ?? (github ? { github_repo: github } : {}),
    provenance: overrides.provenance ?? { discoveries: [] },
    metadata: overrides.metadata ?? {
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
        readme: null,
      },
    },
    insights: overrides.insights ?? {
      summary: null,
      why_it_matters: null,
      mental_damage: null,
      tags: [],
      confidence: null,
    },
    curation: overrides.curation ?? { status: "pending", reason: null, evidence: [] },
    placement: overrides.placement ?? { primary_category: null, section: null },
    lifecycle: overrides.lifecycle ?? { status: "incubating", reason: null },
    processing: overrides.processing ?? {
      discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
      stars: { status: github ? "done" : "skipped", updated_at: "2026-05-05T00:05:00Z", cause: null },
      categorize: { status: "done", updated_at: "2026-05-05T00:10:00Z", cause: null },
    },
  };
}

describe("catalog processing gaps", () => {
  it("summarizes unresolved states and exclusion reasons", () => {
    const items: CatalogItem[] = [
      makeItem({
        canonical_url: "https://github.com/example/included",
        identity: { github_repo: "example/included" },
        curation: { status: "included", reason: "Useful.", evidence: ["fit"] },
      }),
      makeItem({
        canonical_url: "https://example.com/excluded",
        curation: { status: "excluded", reason: "generic directory", evidence: ["directory"] },
      }),
      makeItem({
        canonical_url: "https://github.com/example/pending-stars",
        identity: { github_repo: "example/pending-stars" },
        processing: {
          discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
          stars: { status: "pending", updated_at: null, cause: null },
          categorize: { status: "pending", updated_at: null, cause: null },
        },
      }),
      makeItem({
        canonical_url: "https://github.com/example/failed-stars",
        identity: { github_repo: "example/failed-stars" },
        processing: {
          discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
          stars: { status: "failed", updated_at: "2026-05-05T00:02:00Z", cause: { type: "github_repo_missing", message: "missing" } },
          categorize: { status: "pending", updated_at: null, cause: null },
        },
      }),
      makeItem({
        canonical_url: "https://example.com/deferred-categorize",
        processing: {
          discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
          stars: { status: "skipped", updated_at: "2026-05-05T00:05:00Z", cause: null },
          categorize: { status: "deferred", updated_at: "2026-05-05T00:10:00Z", cause: { type: "budget_exhausted", message: "later" } },
        },
      }),
    ];

    const report = buildCatalogProcessingGapReport(items);
    expect(report).toMatchObject({
      total: 5,
      resolved: 2,
      included: 1,
      excluded: 1,
      pending: 3,
      unresolvedBuckets: {
        neverRan: 1,
        failed: 1,
        deferred: 1,
        otherPending: 0,
      },
      neverRanByStage: [
        { value: "categorize", count: 1 },
        { value: "stars", count: 1 },
      ],
      failedByCause: [{ value: "stars:github_repo_missing", count: 1 }],
      deferredByCause: [{ value: "categorize:budget_exhausted", count: 1 }],
      excludedByReason: [{ value: "generic directory", count: 1 }],
    });
  });

  it("renders user-facing gap counts and cause breakdowns", () => {
    const report = buildCatalogProcessingGapReport([
      makeItem({
        canonical_url: "https://example.com/excluded",
        curation: { status: "excluded", reason: "generic directory", evidence: [] },
      }),
      makeItem({
        canonical_url: "https://github.com/example/pending-stars",
        identity: { github_repo: "example/pending-stars" },
        processing: {
          discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
          stars: { status: "pending", updated_at: null, cause: null },
          categorize: { status: "pending", updated_at: null, cause: null },
        },
      }),
      makeItem({
        canonical_url: "https://github.com/example/failed-stars",
        identity: { github_repo: "example/failed-stars" },
        processing: {
          discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
          stars: { status: "failed", updated_at: "2026-05-05T00:02:00Z", cause: { type: "github_repo_missing", message: "missing" } },
          categorize: { status: "pending", updated_at: null, cause: null },
        },
      }),
      makeItem({
        canonical_url: "https://example.com/deferred-categorize",
        processing: {
          discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
          stars: { status: "skipped", updated_at: "2026-05-05T00:05:00Z", cause: null },
          categorize: { status: "deferred", updated_at: "2026-05-05T00:10:00Z", cause: { type: "budget_exhausted", message: "later" } },
        },
      }),
    ]);

    const output = renderCatalogProcessingGapReport(report, { maxEntriesPerSection: 5 });
    expect(output).toContain("Catalog processing gaps");
    expect(output).toContain("Problem summary");
    expect(output).toContain("Never-ran breakdown");
    expect(output).toContain("Deferred causes");
    expect(output).toContain("Failed causes");
    expect(output).toContain("stars:github_repo_missing");
    expect(output).toContain("categorize:budget_exhausted");
    expect(output).toContain("generic directory");
    expect(output).not.toContain("share reason");
  });

  it("prints the rendered report through runGaps", () => {
    const logs: string[] = [];
    runGaps([], {
      loadItems: () => [
        makeItem({
          canonical_url: "https://github.com/example/pending-stars",
          identity: { github_repo: "example/pending-stars" },
          processing: {
            discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
            stars: { status: "pending", updated_at: null, cause: null },
            categorize: { status: "pending", updated_at: null, cause: null },
          },
        }),
      ],
      log: (message) => logs.push(message),
    });

    expect(logs).toHaveLength(1);
    expect(logs[0]).toContain("Catalog processing gaps");
    expect(logs[0]).toContain("never ran yet: 1");
    expect(logs[0]).toContain("Never-ran breakdown");
  });
});
