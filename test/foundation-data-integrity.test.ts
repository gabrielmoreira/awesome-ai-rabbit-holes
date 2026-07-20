import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { describe, expect, it } from "vitest";
import { makeItemId, makeItemPath } from "../scripts/catalog/core.js";
import {
  loadCatalogItems,
  loadGeneratedCatalogItems,
  saveCatalogItem,
} from "../scripts/catalog/data.js";
import {
  repairCatalogItems,
  runRepair,
  selectAutomaticSafeRepairCandidates,
} from "../scripts/catalog/repair.js";
import { buildCatalogProcessingGapReport } from "../scripts/catalog/reporting.js";
import { validateCatalogState } from "../scripts/catalog/validate.js";
import { CATALOG_ITEMS_DIR } from "../scripts/support/paths.js";
import type { CatalogItem } from "../scripts/catalog/types.js";
import { writeYaml } from "../scripts/support/yaml.js";

function makeItem(overrides: Partial<CatalogItem> = {}): CatalogItem {
  const canonicalUrl = overrides.canonical_url ?? "https://example.com/tool";
  return {
    id: overrides.id ?? makeItemId(canonicalUrl),
    kind: "website",
    name: "Tool",
    canonical_url: canonicalUrl,
    identity: {},
    provenance: {
      discoveries: [{
        id: `discovery__${makeItemId(canonicalUrl)}__direct-link`,
        discovered_at: "2026-07-01T00:00:00Z",
        source: { type: "direct-link", name: "Manual submission", url: null, repository: null },
        extraction: {
          mode: "direct",
          section_path: ["inbox"],
          anchor_text: "Tool",
          extracted_url: canonicalUrl,
          surrounding_text: null,
          confidence: "high",
        },
      }],
    },
    metadata: {
      github: {
        stars: null,
        forks: null,
        license: null,
        archived: null,
        pushed_at: null,
        description: null,
        homepage: null,
        topics: null,
        last_checked_at: null,
      },
    },
    insights: { summary: null, why_it_matters: null, mental_damage: null, tags: [], confidence: null },
    curation: { status: "pending", reason: null, evidence: [] },
    placement: { primary_category: null, section: null },
    lifecycle: { status: "incubating" },
    processing: {
      discover: { status: "done", updated_at: "2026-07-01T00:00:00Z", cause: null },
      stars: { status: "pending", updated_at: null, cause: null },
      categorize: { status: "pending", updated_at: null, cause: null },
    },
    ...overrides,
  };
}

function inTempDirectory(run: (root: string) => void): void {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "catalog-integrity-"));
  try {
    run(root);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

describe("catalog foundation data integrity", () => {
  it("keeps generated items raw while the effective view applies reversible overrides", () => {
    inTempDirectory((root) => {
      const itemsDir = path.join(root, "items");
      const overridesDir = path.join(root, "overrides");
      const generated = makeItem({ id: "legacy-tool", name: "Generated name" });
      writeYaml(path.join(itemsDir, "legacy-tool.yml"), generated);
      writeYaml(path.join(overridesDir, "legacy-tool.yml"), {
        id: "legacy-tool",
        override: { reason: "Curated correction", updated_by: "reviewer", updated_at: "2026-07-16" },
        patch: { name: "Effective name" },
      });

      expect(loadGeneratedCatalogItems(itemsDir)[0]?.name).toBe("Generated name");
      expect(loadCatalogItems(itemsDir, overridesDir)[0]?.name).toBe("Effective name");

      fs.rmSync(path.join(overridesDir, "legacy-tool.yml"));
      expect(loadCatalogItems(itemsDir, overridesDir)[0]?.name).toBe("Generated name");
    });
  });

  it("keeps an existing legacy item at its original path during ordinary saves", () => {
    inTempDirectory((root) => {
      const itemsDir = path.join(root, "items");
      const legacyPath = path.join(itemsDir, "legacy-tool.yml");
      const item = makeItem({ id: "legacy-tool", canonical_url: "https://www.example.com/tool/?source=old" });
      writeYaml(legacyPath, item);

      saveCatalogItem({ ...item, name: "Refreshed metadata" }, itemsDir);

      const canonicalRelativePath = path.relative(CATALOG_ITEMS_DIR, makeItemPath(item.canonical_url));
      expect(fs.existsSync(legacyPath)).toBe(true);
      expect(fs.existsSync(path.join(itemsDir, canonicalRelativePath))).toBe(false);
      expect(loadGeneratedCatalogItems(itemsDir)[0]?.name).toBe("Refreshed metadata");
    });
  });

  it("refuses to overwrite an occupied canonical destination", () => {
    inTempDirectory((root) => {
      const itemsDir = path.join(root, "items");
      const incoming = makeItem({ id: "incoming", canonical_url: "https://example.com/tool" });
      const occupied = makeItem({ id: "other-item", canonical_url: incoming.canonical_url });
      const canonicalRelativePath = path.relative(CATALOG_ITEMS_DIR, makeItemPath(incoming.canonical_url));
      writeYaml(path.join(itemsDir, canonicalRelativePath), occupied);

      expect(() => saveCatalogItem(incoming, itemsDir)).toThrow(/occupied.*other-item/i);
      expect(loadGeneratedCatalogItems(itemsDir)[0]?.id).toBe("other-item");
    });
  });

  it("limits automatic repair candidates to exact normalized collisions and verified GitHub aliases", () => {
    const collisionA = makeItem({ id: "collision-a", canonical_url: "http://www.example.com/tool/" });
    const collisionB = makeItem({ id: "collision-b", canonical_url: "https://example.com/tool" });
    const verifiedAlias = makeItem({
      id: "github__legacy-owner__legacy-repo",
      kind: "github-repo",
      canonical_url: "https://github.com/legacy-owner/legacy-repo",
      identity: { github_repo: "legacy-owner/legacy-repo" },
      metadata: {
        github: {
          ...makeItem().metadata.github,
          full_name: "canonical-owner/canonical-repo",
          html_url: "https://github.com/canonical-owner/canonical-repo",
        },
      } as CatalogItem["metadata"],
    });
    const similarGitHub = makeItem({
      id: "similar-github",
      kind: "github-repo",
      name: "Product",
      canonical_url: "https://github.com/example/product",
      identity: { github_repo: "example/product" },
    });
    const similarWebsite = makeItem({ id: "similar-website", name: "Product", canonical_url: "https://product.example" });

    expect(selectAutomaticSafeRepairCandidates([
      collisionA,
      collisionB,
      verifiedAlias,
      similarGitHub,
      similarWebsite,
    ]).map((item) => item.id).sort()).toEqual(["collision-a", "collision-b", "github__legacy-owner__legacy-repo"]);
  });

  it("does not mutate heuristic-only items during automatic-safe repair", async () => {
    const collisionA = makeItem({ id: "collision-a", canonical_url: "http://www.example.com/tool/" });
    const collisionB = makeItem({ id: "collision-b", canonical_url: "https://example.com/tool" });
    const heuristicOnly = makeItem({
      id: "legacy-similar-name",
      name: "Product",
      canonical_url: "https://product.example",
    });
    const saved: CatalogItem[] = [];

    await runRepair(undefined, {
      loadItems: () => [collisionA, collisionB, heuristicOnly],
      loadOverriddenItemIds: () => new Set(),
      resolveTarget: async (item) => ({ canonicalUrl: item.canonical_url, cause: "unchanged" }),
      saveItem: (item) => saved.push(item),
      removePath: () => {},
    }, { mode: "automatic-safe" });

    expect(saved.some((item) => item.canonical_url === heuristicOnly.canonical_url)).toBe(false);
  });

  it.each(["manual", "automatic-safe"] as const)(
    "skips an entire %s repair group when an item id has an override",
    async (mode) => {
      const first = makeItem({ id: "legacy-overridden", canonical_url: "http://www.example.com/tool/" });
      const second = makeItem({ id: "canonical-generated", canonical_url: "https://example.com/tool" });
      const saved: CatalogItem[] = [];
      const removed: string[] = [];

      await runRepair(undefined, {
        loadItems: () => [first, second],
        loadOverriddenItemIds: () => new Set([first.id]),
        resolveTarget: async (item) => ({ canonicalUrl: item.canonical_url, cause: "unchanged" }),
        saveItem: (item) => saved.push(item),
        removePath: (filePath) => removed.push(filePath),
      }, { mode });

      expect(saved).toEqual([]);
      expect(removed).toEqual([]);
    },
  );

  it("clears conflicting curation and placement while preserving combined evidence", () => {
    const includedA = makeItem({
      id: "included-a",
      canonical_url: "http://www.example.com/tool/",
      curation: { status: "included", reason: "Strong fit", evidence: ["source-a"] },
      placement: { primary_category: "coding-agents", section: "CLI" },
    });
    const includedB = makeItem({
      id: "included-b",
      canonical_url: "https://example.com/tool",
      curation: { status: "included", reason: "Also a fit", evidence: ["source-b"] },
      placement: { primary_category: "agent-frameworks", section: "Frameworks" },
      processing: {
        ...makeItem().processing,
        categorize: { status: "done", updated_at: "2026-07-15T00:00:00Z", cause: null },
      },
    });

    const merged = repairCatalogItems([includedA, includedB], new Map()).items[0]!;
    expect(merged.curation.status).toBe("pending");
    expect(merged.curation.evidence).toEqual(expect.arrayContaining(["source-a", "source-b"]));
    expect(merged.placement).toMatchObject({ primary_category: null, section: null });
    expect(merged.processing?.categorize?.status).toBe("pending");
  });

  it("does not block validation on normalized collisions while gaps keep them visible", () => {
    const first = makeItem({ id: "collision-a", canonical_url: "http://www.example.com/tool/" });
    const second = makeItem({ id: "collision-b", canonical_url: "https://example.com/tool" });

    expect(validateCatalogState([first, second], [], [])).toEqual([]);
    const warnings = buildCatalogProcessingGapReport([first, second]).reviewWarnings;
    expect(warnings).toContainEqual(expect.objectContaining({ kind: "normalized-url-collision" }));
  });
});
