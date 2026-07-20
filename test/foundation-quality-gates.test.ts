import { describe, expect, it } from "vitest";
import {
  isLowSignalDisplayName,
  resolveCatalogDisplayName,
  resolveDiscoveryDisplayName,
  selectBestCatalogDisplayName,
} from "../scripts/catalog/display-names.ts";
import { runGaps } from "../scripts/catalog/gaps.ts";
import { buildCatalogProcessingGapReport } from "../scripts/catalog/reporting.ts";
import type { CatalogItem, ProcessingState } from "../scripts/catalog/types.ts";
import { validateSemanticDuplicates } from "../scripts/catalog/validate.ts";

function makeItem(options: {
  id: string;
  canonicalUrl: string;
  kind?: CatalogItem["kind"];
  name?: string;
  githubRepo?: string;
  homepage?: string | null;
  anchorText?: string;
  sectionPath?: string[];
  processing?: ProcessingState;
}): CatalogItem {
  return {
    id: options.id,
    kind: options.kind ?? (options.githubRepo ? "github-repo" : "website"),
    name: options.name ?? options.id,
    canonical_url: options.canonicalUrl,
    identity: options.githubRepo ? { github_repo: options.githubRepo } : {},
    provenance: {
      discoveries: [
        {
          id: `discovery-${options.id}`,
          discovered_at: "2026-07-16T00:00:00.000Z",
          source: { type: "direct-link", name: "fixture", url: null, repository: null },
          extraction: {
            mode: "direct",
            section_path: options.sectionPath ?? [],
            anchor_text: options.anchorText ?? options.name ?? options.id,
            extracted_url: options.canonicalUrl,
            surrounding_text: null,
            confidence: "high",
          },
        },
      ],
    },
    metadata: {
      github: {
        stars: null,
        forks: null,
        license: null,
        archived: null,
        created_at: null,
        pushed_at: null,
        description: null,
        homepage: options.homepage ?? null,
        topics: null,
        last_checked_at: null,
        readme: null,
      },
    },
    insights: {
      summary: null,
      why_it_matters: null,
      mental_damage: null,
      tags: [],
      confidence: null,
    },
    curation: { status: "pending", reason: null, evidence: [] },
    placement: { primary_category: null, section: null },
    lifecycle: { status: "incubating", reason: null },
    processing: options.processing ?? {
      discover: { status: "done", updated_at: "2026-07-16T00:00:00.000Z", cause: null },
      stars: { status: options.githubRepo ? "done" : "skipped", updated_at: "2026-07-16T00:00:00.000Z", cause: null },
      categorize: { status: "done", updated_at: "2026-07-16T00:00:00.000Z", cause: null },
    },
  };
}

describe("catalog foundation quality gates", () => {
  it("reports deterministic normalized URL collisions with both IDs and original URLs", () => {
    const errors = validateSemanticDuplicates([
      makeItem({ id: "item-z", canonicalUrl: "https://example.com/product/?utm=campaign#install" }),
      makeItem({ id: "item-a", canonicalUrl: "https://example.com/product" }),
    ]);

    expect(errors).toEqual([
      {
        path: "item-a,item-z",
        message:
          "Normalized canonical URL collision: item-a (https://example.com/product) and item-z (https://example.com/product/?utm=campaign#install) both normalize to https://example.com/product",
      },
    ]);
  });

  it("reports website to GitHub homepage equality as a review warning without merging", () => {
    const report = buildCatalogProcessingGapReport([
      makeItem({ id: "site-item", canonicalUrl: "https://product.example/?ref=catalog", kind: "website" }),
      makeItem({
        id: "repo-item",
        canonicalUrl: "https://github.com/example/product",
        githubRepo: "example/product",
        homepage: "https://product.example/",
      }),
    ]);

    expect(report.reviewWarnings).toEqual([
      {
        kind: "website-github-homepage-match",
        website: { id: "site-item", url: "https://product.example/?ref=catalog" },
        github: {
          id: "repo-item",
          url: "https://github.com/example/product",
          homepage: "https://product.example/",
        },
      },
    ]);
  });

  it("prints gaps before failing only when processing-error strict mode is enabled", () => {
    const failedItem = makeItem({
      id: "failed-item",
      canonicalUrl: "https://github.com/example/failed",
      githubRepo: "example/failed",
      processing: {
        discover: { status: "done", updated_at: "2026-07-16T00:00:00.000Z", cause: null },
        stars: {
          status: "failed",
          updated_at: "2026-07-16T00:00:00.000Z",
          cause: { type: "github_repo_missing", message: "missing" },
        },
        categorize: { status: "pending", updated_at: null, cause: null },
      },
    });
    failedItem.curation = { status: "included", reason: "already resolved", evidence: ["fixture"] };
    const strictLogs: string[] = [];

    expect(() =>
      runGaps([], {
        loadItems: () => [failedItem],
        log: (message) => strictLogs.push(message),
        env: { CATALOG_FAIL_ON_PROCESSING_ERRORS: "1" } as NodeJS.ProcessEnv,
      }),
    ).toThrow("Catalog processing gaps include 1 failed item(s)");
    expect(strictLogs).toHaveLength(1);
    expect(strictLogs[0]).toContain("stars:github_repo_missing: 1 (100.0%)");

    expect(() =>
      runGaps([], {
        loadItems: () => [failedItem],
        log: () => undefined,
        env: { CATALOG_FAIL_ON_PROCESSING_ERRORS: "0" } as NodeJS.ProcessEnv,
      }),
    ).not.toThrow();
  });

  it("prefers product names over generic, badge, sentence, and host-path labels", () => {
    const item = makeItem({
      id: "rabbit-core",
      canonicalUrl: "https://github.com/example/rabbit-core",
      githubRepo: "example/rabbit-core",
      name: "Website",
      anchorText: "RabbitCore",
      sectionPath: ["![Build Status](https://img.shields.io/badge/build-passing.svg)"],
    });

    expect(resolveCatalogDisplayName(item)).toBe("RabbitCore");
    const imageAltItem = makeItem({
      id: "image-alt",
      canonicalUrl: "https://example.com/image-alt",
      name: "Website",
      anchorText: "Website",
      sectionPath: ["![RabbitCore Logo](https://example.com/logo.png)"],
    });
    expect(resolveDiscoveryDisplayName(imageAltItem.provenance.discoveries[0]!)).toBeNull();
    expect(selectBestCatalogDisplayName(["Build Status", "RabbitCore"], ["rabbitcore"])).toBe("RabbitCore");
    expect(selectBestCatalogDisplayName(["example.com/docs", "Example Product"], ["exampleproduct"])).toBe("Example Product");
    expect(selectBestCatalogDisplayName(["Example.com/docs", "rabbit-core"])).toBe("rabbit-core");
    expect(isLowSignalDisplayName("example.com/docs")).toBe(true);
    expect(isLowSignalDisplayName("Website")).toBe(true);
    expect(isLowSignalDisplayName("servers")).toBe(true);
    expect(isLowSignalDisplayName("mcp")).toBe(true);
    expect(isLowSignalDisplayName("Subscribe to our newsletter for weekly updates")).toBe(true);
    expect(isLowSignalDisplayName("![Build Status](https://img.shields.io/badge/build-passing.svg)")).toBe(true);
  });

  it("keeps a legitimate dotted product brand", () => {
    expect(isLowSignalDisplayName("Tana.inc")).toBe(false);
    expect(selectBestCatalogDisplayName(["Website", "Tana.inc"], ["tana"])).toBe("Tana.inc");
  });
});
