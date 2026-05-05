import { describe, it, expect } from "vitest";
import { makeItemId, normalizeLoadedItem } from "../scripts/catalog/core.js"
import type { CatalogItem } from "../scripts/catalog/types.js"

describe("normalizeLoadedItem (processing state)", () => {
  it("adds missing processing.* keys with default pending state", () => {
    const raw = {
      id: makeItemId("https://github.com/test/a"),
      kind: "github-repo",
      name: "a",
      canonical_url: "https://github.com/test/a",
      identity: { github_repo: "test/a" },
      provenance: { discoveries: [] },
      metadata: {},
      insights: {},
      curation: { status: "included" },
      placement: { primary_category: null },
      lifecycle: { status: "incubating" },
    } as any;

    const normalized = normalizeLoadedItem(raw);
    expect(normalized.processing.discover.status).toBe("pending");
    expect(normalized.processing.stars.status).toBe("pending");
    expect(normalized.processing.categorize.status).toBe("pending");
  });

  it("does not overwrite already present status", () => {
    const raw = {
      id: makeItemId("https://github.com/test/b"),
      kind: "github-repo",
      name: "b",
      canonical_url: "https://github.com/test/b",
      identity: { github_repo: "test/b" },
      provenance: { discoveries: [] },
      metadata: {},
      insights: {},
      curation: { status: "included" },
      placement: { primary_category: null },
      lifecycle: { status: "incubating" },
      processing: { discover: { status: "done", updated_at: "2026-05" } },
    } as any;

    const normalized = normalizeLoadedItem(raw);
    expect(normalized.processing.discover.status).toBe("done");
  });
});
