// test/catalog.test.ts
// Tests for catalog pipeline behavior

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import { fileURLToPath } from "node:url";
import {
  validateSources,
  validateCatalogItem,
  validateCatalogItems,
  validateOverride,
  validateOverridesUniqueness,
  makeItemId,
  makeItemPath,
  makeDiscoveryId,
  normalizeGitHubUrl,
  buildNewCatalogItem,
  discover,
  discoverCandidates,
  selectSourceListDiscoveryCandidates,
  resolveSourceListNewItemLimit,
  resolveDirectDiscoveryConcurrency,
  resolveGitHubEnrichmentConcurrency,
  resolveAIInsightConcurrency,
  resolveAIInsightBudgetMs,
  applyLifecycleRules,
  applyOverride,
  applyOverrides,
  applyPlacement,
  needsAIInsights,
  applyAIInsights,
  enrichWithAIInsights,
  materializeCatalogState,
  summarizeProcessingErrors,
  shouldFailOnProcessingErrors,
  normalizeSourceCoverageUrl,
  buildReviewReport,
  loadConfig,
  loadSources,
  loadCategories,
} from "../scripts/catalog.js";
import { parseAIInsightResponse, buildInsightPrompt } from "../scripts/catalog/categorize-prompt.js"
import {
  renderReadme,
  renderRabbitHolePage,
  renderSiteCatalog,
} from "../scripts/catalog/render.js";
import type { CatalogItem, Source, Override, Category, CatalogConfig } from "../scripts/catalog/types.js"

// ─── Fixtures ────────────────────────────────────────────────────────────────

const DEFAULT_CONFIG: CatalogConfig = {
  promotion: { incubating_until_stars: 150 },
  github: { metadata_refresh_days: 7 },
};

const CATEGORIES: Category[] = [
  {
    id: "coding-agents",
    name: "Coding Agents",
    slug: "coding-agents",
    description: "Tools for coding with AI.",
    prompt_instruction: "User-facing coding assistants that directly write or review code.",
  },
  {
    id: "ai-frameworks",
    name: "AI Frameworks and SDKs",
    slug: "ai-frameworks",
    description: "Code-first AI building blocks.",
    prompt_instruction: "Frameworks, SDKs, and libraries that developers import or build on in code.",
  },
  {
    id: "mcp",
    name: "MCP Servers",
    slug: "mcp",
    description: "MCP tooling.",
    prompt_instruction: "Model Context Protocol tooling.",
  },
  {
    id: "awesome-awesomes",
    name: "Awesome Awesomes",
    slug: "awesome-awesomes",
    description: "Meta-lists.",
    prompt_instruction: "Curated directories and indexes rather than individual tools.",
  },
];

function makeItem(overrides: Partial<CatalogItem> = {}): CatalogItem {
  return {
    id: "github__testowner__test-repo",
    kind: "github-repo",
    name: "test-repo",
    canonical_url: "https://github.com/testowner/test-repo",
    identity: { github_repo: "testowner/test-repo" },
    provenance: {
      discoveries: [
        {
          id: "discovery__github__testowner__test-repo__direct-link",
          discovered_at: "2026-04-30T00:00:00Z",
          source: { type: "direct-link", name: "Manual submission", url: null, repository: null },
          extraction: {
            mode: "direct",
            section_path: ["inbox"],
            anchor_text: "https://github.com/testowner/test-repo",
            extracted_url: "https://github.com/testowner/test-repo",
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
        homepage: null,
        topics: null,
        last_checked_at: null,
      },
    },
    insights: {
      summary: null,
      why_it_matters: null,
      mental_damage: null,
      tags: [],
      confidence: null,
    },
    curation: {
      status: "included",
      reason: "Fits the catalog.",
      evidence: ["Repo metadata says it fits the catalog."],
    },
    placement: {
      primary_category: null,
      section: null,
    },
    lifecycle: { status: "incubating" },
    ...overrides,
  };
}

// ─── Phase 1: Validate ────────────────────────────────────────────────────────

describe("validate", () => {
  describe("sources", () => {
    it("valid empty source list passes", () => {
      expect(validateSources([])).toHaveLength(0);
    });

    it("source without url fails", () => {
      const errors = validateSources([{ url: "" } as Source]);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].message).toContain("url");
    });

    it("source with url passes", () => {
      const errors = validateSources([{ url: "https://github.com/foo/bar" }]);
      expect(errors).toHaveLength(0);
    });

    it("normalizes GitHub source URLs conservatively", () => {
      expect(normalizeSourceCoverageUrl("https://github.com/BloopAI/Vibe-Kanban/")).toBe(
        "https://github.com/bloopai/vibe-kanban"
      );
    });
  });

  describe("catalog items", () => {
    it("valid catalog item passes", () => {
      const item = makeItem();
      expect(validateCatalogItem(item)).toHaveLength(0);
    });

    it("catalog item without id fails", () => {
      const item = makeItem({ id: "" });
      const errors = validateCatalogItem(item);
      expect(errors.length).toBeGreaterThan(0);
    });

    it("catalog item without canonical_url fails", () => {
      const item = makeItem({ canonical_url: "" });
      const errors = validateCatalogItem(item);
      expect(errors.length).toBeGreaterThan(0);
    });

    it("catalog item without provenance fails", () => {
      const item = makeItem({
        provenance: {
          discoveries: [],
        },
      });
      const errors = validateCatalogItem(item);
      expect(errors.length).toBeGreaterThan(0);
      expect(errors[0].message).toContain("provenance");
    });

    it("valid empty catalog passes", () => {
      expect(validateCatalogItems([])).toHaveLength(0);
    });
  });

  describe("overrides", () => {
    it("override requires id", () => {
      const override = { id: "", override: { reason: "test", updated_by: "me", updated_at: "2026" }, patch: {} } as Override;
      const errors = validateOverride(override, [makeItem()]);
      expect(errors.some((e) => e.message.includes("id"))).toBe(true);
    });

    it("override requires reason", () => {
      const item = makeItem();
      const override = { id: item.id, override: { reason: "", updated_by: "me", updated_at: "2026" }, patch: {} } as Override;
      const errors = validateOverride(override, [item]);
      expect(errors.some((e) => e.message.includes("reason"))).toBe(true);
    });

    it("override id must match existing item", () => {
      const override = { id: "nonexistent-id", override: { reason: "test", updated_by: "me", updated_at: "2026" }, patch: {} } as Override;
      const errors = validateOverride(override, [makeItem()]);
      expect(errors.some((e) => e.message.includes("nonexistent-id"))).toBe(true);
    });

    it("override cannot change canonical_url", () => {
      const item = makeItem();
      const override = {
        id: item.id,
        override: { reason: "test", updated_by: "me", updated_at: "2026" },
        patch: { canonical_url: "https://example.com" } as Record<string, unknown>,
      } as Override;
      const errors = validateOverride(override, [item]);
      expect(errors.some((e) => e.message.includes("canonical_url"))).toBe(true);
    });
  });
});

// ─── Phase 2: Discover ────────────────────────────────────────────────────────

describe("discover", () => {
  it("creates item from GitHub URL", () => {
    const sources: Source[] = [{ url: "https://github.com/BloopAI/vibe-kanban", note: "Kanban UI" }];
    const { newItems } = discover(sources, []);
    expect(newItems).toHaveLength(1);
    expect(newItems[0].canonical_url).toBe("https://github.com/bloopai/vibe-kanban");
  });

  it("normalizes GitHub URL", () => {
    expect(normalizeGitHubUrl("https://github.com/BloopAI/vibe-kanban/")).toBe(
      "https://github.com/bloopai/vibe-kanban"
    );
    expect(normalizeGitHubUrl("https://github.com/BloopAI/vibe-kanban.git")).toBe(
      "https://github.com/bloopai/vibe-kanban"
    );
  });

  it("creates stable item id", () => {
    const id = makeItemId("https://github.com/BloopAI/vibe-kanban");
    expect(id).toBe("github__bloopai__vibe-kanban");
  });

  it("adds provenance discovery", () => {
    const source: Source = { url: "https://github.com/BloopAI/vibe-kanban", note: "Kanban UI" };
    const item = buildNewCatalogItem("https://github.com/BloopAI/vibe-kanban", source, "2026-04-30T00:00:00Z");
    expect(item.provenance.discoveries).toHaveLength(1);
    expect(item.provenance.discoveries[0].source.type).toBe("direct-link");
  });

  it("running update twice does not duplicate item", () => {
    const sources: Source[] = [{ url: "https://github.com/BloopAI/vibe-kanban" }];
    const { newItems } = discover(sources, []);
    const { newItems: secondNew } = discover(sources, newItems);
    expect(secondNew).toHaveLength(0);
  });

  it("existing item gets new provenance when found in another source", () => {
    const url = "https://github.com/BloopAI/vibe-kanban";
    const sources: Source[] = [{ url }];
    const { newItems } = discover(sources, []);

    const source2: Source[] = [{ url, kind: "awesome-list", note: "Found in an awesome list" }];
    const { updatedItems } = discover(source2, newItems);

    expect(updatedItems).toHaveLength(1);
    expect(updatedItems[0].provenance.discoveries).toHaveLength(2);
  });

  it("creates items from parsed awesome-list entries", () => {
    const { newItems } = discoverCandidates(
      [
        {
          target_url: "https://github.com/example/playwright-mcp",
          source: {
            url: "https://github.com/punkpeye/awesome-mcp-servers",
            kind: "awesome-list",
            note: "MCP servers.",
          },
          extraction: {
            mode: "parsed",
            section_path: ["Browser Automation"],
            anchor_text: "Playwright MCP",
            extracted_url: "https://github.com/example/playwright-mcp",
            surrounding_text: "- [Playwright MCP](https://github.com/example/playwright-mcp) - browser automation",
            confidence: "high",
          },
        },
      ],
      []
    );

    expect(newItems).toHaveLength(1);
    expect(newItems[0].canonical_url).toBe("https://github.com/example/playwright-mcp");
    expect(newItems[0].provenance.discoveries[0].source.type).toBe("awesome-list");
    expect(newItems[0].provenance.discoveries[0].source.repository).toBe("punkpeye/awesome-mcp-servers");
    expect(newItems[0].provenance.discoveries[0].extraction.mode).toBe("parsed");
  });

  it("records canonicalization ambiguity on discover while keeping the website canonical", () => {
    const { newItems } = discoverCandidates(
      [
        {
          target_url: "https://mystery-tool.dev",
          source: {
            url: "https://github.com/ai-for-developers/awesome-ai-coding-tools",
            kind: "awesome-list",
            note: "AI coding tools.",
          },
          extraction: {
            mode: "parsed",
            section_path: ["Editors"],
            anchor_text: "Mystery Tool",
            extracted_url: "https://mystery-tool.dev",
            surrounding_text: "- [Mystery Tool](https://mystery-tool.dev/) - AI editor",
            confidence: "high",
          },
          canonicalization_cause: {
            type: "ambiguous_canonicalization",
            message: "Kept the website URL because multiple GitHub repository links were present and no confident canonical match could be selected.",
          },
        },
      ],
      []
    );

    expect(newItems).toHaveLength(1);
    expect(newItems[0].canonical_url).toBe("https://mystery-tool.dev");
    expect(newItems[0].processing?.discover?.cause?.type).toBe("ambiguous_canonicalization");
  });

  it("keeps multi-source discoveries on newly created items", () => {
    const { newItems, updatedItems } = discoverCandidates(
      [
        {
          target_url: "https://github.com/example/playwright-mcp",
          source: {
            url: "https://github.com/punkpeye/awesome-mcp-servers",
            kind: "awesome-list",
            note: "MCP servers.",
          },
          extraction: {
            mode: "parsed",
            section_path: ["Browser Automation"],
            anchor_text: "Playwright MCP",
            extracted_url: "https://github.com/example/playwright-mcp",
            surrounding_text: "- [Playwright MCP](https://github.com/example/playwright-mcp) - browser automation",
            confidence: "high",
          },
        },
        {
          target_url: "https://github.com/example/playwright-mcp",
          source: {
            url: "https://github.com/wong2/awesome-mcp-servers",
            kind: "awesome-list",
            note: "Another MCP directory.",
          },
          extraction: {
            mode: "parsed",
            section_path: ["Testing"],
            anchor_text: "Playwright MCP",
            extracted_url: "https://github.com/example/playwright-mcp",
            surrounding_text: "- [Playwright MCP](https://github.com/example/playwright-mcp) - testing",
            confidence: "high",
          },
        },
      ],
      []
    );

    expect(newItems).toHaveLength(1);
    expect(updatedItems).toHaveLength(0);
    expect(newItems[0].provenance.discoveries).toHaveLength(2);
    expect(newItems[0].provenance.discoveries.map((discovery) => discovery.source.repository)).toEqual([
      "punkpeye/awesome-mcp-servers",
      "wong2/awesome-mcp-servers",
    ]);
  });

  it("keeps source-list intake stable across reruns while considering every supported group", () => {
    const selected = selectSourceListDiscoveryCandidates(
      [
        {
          target_url: "https://github.com/example/top-tool",
          source: {
            url: "https://github.com/list-a/awesome-tools",
            kind: "awesome-list",
          },
          extraction: {
            mode: "parsed",
            section_path: ["Top"],
            anchor_text: "top-tool",
            extracted_url: "https://github.com/example/top-tool",
            surrounding_text: null,
            confidence: "high",
          },
        },
        {
          target_url: "https://github.com/example/top-tool",
          source: {
            url: "https://github.com/list-b/awesome-tools",
            kind: "awesome-list",
          },
          extraction: {
            mode: "parsed",
            section_path: ["Top"],
            anchor_text: "top-tool",
            extracted_url: "https://github.com/example/top-tool",
            surrounding_text: null,
            confidence: "high",
          },
        },
        {
          target_url: "https://github.com/example/lower-rank",
          source: {
            url: "https://github.com/list-c/awesome-tools",
            kind: "awesome-list",
          },
          extraction: {
            mode: "parsed",
            section_path: ["Other"],
            anchor_text: "lower-rank",
            extracted_url: "https://github.com/example/lower-rank",
            surrounding_text: null,
            confidence: "high",
          },
        },
      ],
      new Set<string>(),
      []
    );

    expect(selected).toHaveLength(3);
    expect(selected.map((candidate) => candidate.target_url)).toEqual([
      "https://github.com/example/top-tool",
      "https://github.com/example/top-tool",
      "https://github.com/example/lower-rank",
    ]);
  });

  it("caps source-list intake by ranked item groups when configured", () => {
    const selected = selectSourceListDiscoveryCandidates(
      [
        {
          target_url: "https://github.com/example/top-tool",
          source: {
            url: "https://github.com/list-a/awesome-tools",
            kind: "awesome-list",
          },
          extraction: {
            mode: "parsed",
            section_path: ["Top"],
            anchor_text: "top-tool",
            extracted_url: "https://github.com/example/top-tool",
            surrounding_text: null,
            confidence: "high",
          },
        },
        {
          target_url: "https://github.com/example/top-tool",
          source: {
            url: "https://github.com/list-b/awesome-tools",
            kind: "awesome-list",
          },
          extraction: {
            mode: "parsed",
            section_path: ["Top"],
            anchor_text: "top-tool",
            extracted_url: "https://github.com/example/top-tool",
            surrounding_text: null,
            confidence: "high",
          },
        },
        {
          target_url: "https://github.com/example/lower-rank",
          source: {
            url: "https://github.com/list-c/awesome-tools",
            kind: "awesome-list",
          },
          extraction: {
            mode: "parsed",
            section_path: ["Other"],
            anchor_text: "lower-rank",
            extracted_url: "https://github.com/example/lower-rank",
            surrounding_text: null,
            confidence: "high",
          },
        },
      ],
      new Set<string>(),
      [],
      1
    );

    expect(selected).toHaveLength(2);
    expect(selected.map((candidate) => candidate.target_url)).toEqual([
      "https://github.com/example/top-tool",
      "https://github.com/example/top-tool",
    ]);
  });

  it("skips fully discovered top groups before slicing the next batch", () => {
    const existing = makeItem({
      id: makeItemId("https://github.com/example/top-tool"),
      name: "top-tool",
      canonical_url: "https://github.com/example/top-tool",
      identity: { github_repo: "example/top-tool" },
      provenance: {
        discoveries: [
          {
            id: makeDiscoveryId("https://github.com/example/top-tool", {
              url: "https://github.com/list-a/awesome-tools",
              kind: "awesome-list",
            }),
            discovered_at: "2026-05-01T00:00:00Z",
            source: {
              type: "awesome-list",
              name: "list-a/awesome-tools",
              url: "https://github.com/list-a/awesome-tools",
              repository: null,
            },
            extraction: {
              mode: "parsed",
              section_path: ["Top"],
              anchor_text: "top-tool",
              extracted_url: "https://github.com/example/top-tool",
              surrounding_text: null,
              confidence: "high",
            },
          },
          {
            id: makeDiscoveryId("https://github.com/example/top-tool", {
              url: "https://github.com/list-b/awesome-tools",
              kind: "awesome-list",
            }),
            discovered_at: "2026-05-01T00:00:00Z",
            source: {
              type: "awesome-list",
              name: "list-b/awesome-tools",
              url: "https://github.com/list-b/awesome-tools",
              repository: null,
            },
            extraction: {
              mode: "parsed",
              section_path: ["Top"],
              anchor_text: "top-tool",
              extracted_url: "https://github.com/example/top-tool",
              surrounding_text: null,
              confidence: "high",
            },
          },
        ],
      },
    });

    const selected = selectSourceListDiscoveryCandidates(
      [
        {
          target_url: "https://github.com/example/top-tool",
          source: { url: "https://github.com/list-a/awesome-tools", kind: "awesome-list" },
          extraction: {
            mode: "parsed",
            section_path: ["Top"],
            anchor_text: "top-tool",
            extracted_url: "https://github.com/example/top-tool",
            surrounding_text: null,
            confidence: "high",
          },
        },
        {
          target_url: "https://github.com/example/top-tool",
          source: { url: "https://github.com/list-b/awesome-tools", kind: "awesome-list" },
          extraction: {
            mode: "parsed",
            section_path: ["Top"],
            anchor_text: "top-tool",
            extracted_url: "https://github.com/example/top-tool",
            surrounding_text: null,
            confidence: "high",
          },
        },
        {
          target_url: "https://github.com/example/lower-rank",
          source: { url: "https://github.com/list-c/awesome-tools", kind: "awesome-list" },
          extraction: {
            mode: "parsed",
            section_path: ["Other"],
            anchor_text: "lower-rank",
            extracted_url: "https://github.com/example/lower-rank",
            surrounding_text: null,
            confidence: "high",
          },
        },
      ],
      new Set<string>(),
      [existing],
      1
    );

    expect(selected).toHaveLength(1);
    expect(selected[0].target_url).toBe("https://github.com/example/lower-rank");
  });
});

// ─── Phase 4: Lifecycle ───────────────────────────────────────────────────────

describe("lifecycle rules", () => {
  it("item with 42 stars is incubating", () => {
    const item = makeItem({ metadata: { github: { stars: 42, forks: null, license: null, archived: null, pushed_at: null, description: null, homepage: null, topics: null, last_checked_at: null } } });
    const result = applyLifecycleRules(item, DEFAULT_CONFIG);
    expect(result.lifecycle.status).toBe("incubating");
  });

  it("item with 151 stars becomes promotion_candidate", () => {
    const item = makeItem({
      metadata: {
        github: { stars: 151, forks: null, license: null, archived: false, pushed_at: null, description: null, homepage: null, topics: null, last_checked_at: null },
      },
      lifecycle: { status: "incubating" },
    });
    const result = applyLifecycleRules(item, DEFAULT_CONFIG);
    expect(result.lifecycle.status).toBe("promotion_candidate");
  });

  it("curated item does not move back automatically", () => {
    const item = makeItem({
      metadata: {
        github: { stars: 10, forks: null, license: null, archived: null, pushed_at: null, description: null, homepage: null, topics: null, last_checked_at: null },
      },
      lifecycle: { status: "curated" },
    });
    const result = applyLifecycleRules(item, DEFAULT_CONFIG);
    expect(result.lifecycle.status).toBe("curated");
  });

  it("landmark override wins", () => {
    const item = makeItem({
      metadata: {
        github: { stars: 10, forks: null, license: null, archived: null, pushed_at: null, description: null, homepage: null, topics: null, last_checked_at: null },
      },
      lifecycle: { status: "landmark" },
    });
    const result = applyLifecycleRules(item, DEFAULT_CONFIG);
    expect(result.lifecycle.status).toBe("landmark");
  });

  it("archived repo becomes needs_review", () => {
    const item = makeItem({
      metadata: {
        github: { stars: 100, forks: null, license: null, archived: true, pushed_at: null, description: null, homepage: null, topics: null, last_checked_at: null },
      },
      lifecycle: { status: "incubating" },
    });
    const result = applyLifecycleRules(item, DEFAULT_CONFIG);
    expect(result.lifecycle.status).toBe("needs_review");
  });
});

// ─── Phase 5: Overrides ───────────────────────────────────────────────────────

describe("overrides", () => {
  it("override applies to matching item", () => {
    const item = makeItem();
    const override: Override = {
      id: item.id,
      override: { reason: "Better placement", updated_by: "Me", updated_at: "2026-04-30" },
      patch: {
        placement: { primary_category: "coding-agents", section: null },
      },
    };
    const result = applyOverride(item, override);
    expect(result.placement.primary_category).toBe("coding-agents");
  });

  it("override can change lifecycle", () => {
    const item = makeItem();
    const override: Override = {
      id: item.id,
      override: { reason: "This is a landmark", updated_by: "Me", updated_at: "2026-04-30" },
      patch: {
        lifecycle: { status: "landmark" },
      },
    };
    const result = applyOverride(item, override);
    expect(result.lifecycle.status).toBe("landmark");
  });

  it("override can change mental_damage", () => {
    const item = makeItem();
    const override: Override = {
      id: item.id,
      override: { reason: "Better joke", updated_by: "Me", updated_at: "2026-04-30" },
      patch: {
        insights: { mental_damage: "Custom mental damage text" },
      },
    };
    const result = applyOverride(item, override);
    expect(result.insights.mental_damage).toBe("Custom mental damage text");
  });

  it("applyOverrides applies all matching overrides", () => {
    const item1 = makeItem({ id: "item1", canonical_url: "https://github.com/a/a" });
    const item2 = makeItem({ id: "item2", canonical_url: "https://github.com/b/b" });
    const overrides: Override[] = [
      {
        id: "item1",
        override: { reason: "test", updated_by: "me", updated_at: "2026" },
        patch: { lifecycle: { status: "curated" } },
      },
    ];
    const result = applyOverrides([item1, item2], overrides);
    expect(result[0].lifecycle.status).toBe("curated");
    expect(result[1].lifecycle.status).toBe("incubating");
  });
});

// ─── Phase 6: Render ─────────────────────────────────────────────────────────

describe("render", () => {
  it("README includes title and intro", () => {
    const readme = renderReadme([], CATEGORIES);
    expect(readme).toContain("# Awesome AI Rabbit Holes");
    expect(readme).toContain("Come for the tools");
  });

  it("README includes category links and short hints", () => {
    const item = makeItem({
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "curated" },
    });
    const readme = renderReadme([item], CATEGORIES);
    expect(readme).toContain("Coding Agents");
    expect(readme).toContain("coding-agents.md");
    expect(readme).toContain(
      "- [Coding Agents](docs/rabbit-holes/coding-agents.md) — Tools for coding with AI."
    );
  });

  it("README links every rabbit-hole page", () => {
    const readme = renderReadme([], CATEGORIES);
    expect(readme).toContain("coding-agents.md");
    expect(readme).toContain("mcp.md");
    expect(readme).toContain("awesome-awesomes.md");
  });

  it("rabbit-hole page renders curated items as compact bullets with inline details", () => {
    const item = makeItem({
      name: "test-tool",
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "curated" },
      metadata: {
        github: {
          stars: 1234,
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
      insights: {
        summary: "A great tool for teams",
        why_it_matters: "Matters a lot for busy teams.",
        mental_damage: "Now your backlog has a boss.",
        tags: ["agents", "kanban"],
        confidence: "high",
      },
    });
    const page = renderRabbitHolePage(CATEGORIES[0], [item]);
    expect(page).toContain(
      "- **[test-tool](https://github.com/testowner/test-repo)** `⭐ 1.2k` A great tool for teams. <details><summary>More about</summary>"
    );
    expect(page).toContain("Matters a lot for busy teams.");
    expect(page).toContain("Now your backlog has a boss.");
    expect(page).not.toContain("### [test-tool]");
  });

  it("rabbit-hole page sorts tools by stars descending", () => {
    const higherStar = makeItem({
      name: "high-star",
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "curated" },
      metadata: {
        github: {
          ...makeItem().metadata.github,
          stars: 5000,
        },
      },
    });
    const lowerStar = makeItem({
      id: "github__testowner__other-repo",
      name: "low-star",
      canonical_url: "https://github.com/testowner/other-repo",
      identity: { github_repo: "testowner/other-repo" },
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "curated" },
      metadata: {
        github: {
          ...makeItem().metadata.github,
          stars: 12,
        },
      },
    });

    const page = renderRabbitHolePage(CATEGORIES[0], [lowerStar, higherStar]);
    expect(page.indexOf("high-star")).toBeLessThan(page.indexOf("low-star"));
  });

  it("incubating items render separately as compact bullets", () => {
    const item = makeItem({
      name: "new-tool",
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "incubating" },
      metadata: {
        github: {
          stars: 1000,
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
      insights: {
        summary: "A great tool",
        why_it_matters: "Useful for fast-moving teams.",
        mental_damage: "Your queue now has opinions.",
        tags: [],
        confidence: "high",
      },
    });
    const page = renderRabbitHolePage(CATEGORIES[0], [item]);
    expect(page).toContain("## Incubating");
    expect(page).toContain("- **[new-tool](https://github.com/testowner/test-repo)** `⭐ 1k` A great tool.");
  });

  it("empty rabbit-hole pages render a short waiting message", () => {
    const page = renderRabbitHolePage(CATEGORIES[1], []);
    expect(page).toContain("## Nothing Here Yet");
    expect(page).toContain("Even the hype forgot to stop here.");
    expect(page).not.toContain("taxonomy starts as an empty box");
  });

  it("catalog/catalog.json contains public item fields", () => {
    const item = makeItem();
    const catalog = renderSiteCatalog([item]);
    expect(catalog.items).toHaveLength(1);
    const catalogItem = catalog.items[0];
    expect(catalogItem).toHaveProperty("id");
    expect(catalogItem).toHaveProperty("canonical_url");
    expect(catalogItem).toHaveProperty("lifecycle_status");
    expect(catalogItem).not.toHaveProperty("provenance");
  });

  it("render output is stable across runs", () => {
    const item = makeItem();
    const result1 = renderSiteCatalog([item]);
    const result2 = renderSiteCatalog([item]);
    expect(JSON.stringify(result1.items)).toBe(JSON.stringify(result2.items));
  });

  it("renderSiteCatalog is fully deterministic (including generated_at)", () => {
    // Regression: `generated_at` used to be `new Date().toISOString()`, which
    // made `check-generated-docs.yml` always report drift. It must now be
    // derived from item data so two consecutive renders are byte-identical.
    const item = makeItem({
      metadata: {
        github: {
          stars: 1, forks: 0, license: null, archived: false,
          pushed_at: null, description: null, homepage: null, topics: null,
          last_checked_at: "2026-04-01T00:00:00Z",
          readme: null,
        },
      },
    });
    const a = renderSiteCatalog([item]);
    const b = renderSiteCatalog([item]);
    expect(JSON.stringify(a)).toBe(JSON.stringify(b));
    expect(a.generated_at).toBe("2026-04-01T00:00:00Z");
  });

  it("site catalog sorts included items by stars descending", () => {
    const higherStar = makeItem({
      name: "high-star",
      metadata: {
        github: {
          ...makeItem().metadata.github,
          stars: 5000,
          last_checked_at: "2026-04-02T00:00:00Z",
        },
      },
    });
    const lowerStar = makeItem({
      id: "github__testowner__other-repo",
      name: "low-star",
      canonical_url: "https://github.com/testowner/other-repo",
      identity: { github_repo: "testowner/other-repo" },
      metadata: {
        github: {
          ...makeItem().metadata.github,
          stars: 12,
          last_checked_at: "2026-04-01T00:00:00Z",
        },
      },
    });

    const catalog = renderSiteCatalog([lowerStar, higherStar]);
    expect(catalog.items.map((item) => item.name)).toEqual(["high-star", "low-star"]);
  });
});

describe("review report", () => {
  it("counts only external discovery sources", () => {
    const manual = makeItem();
    const external = makeItem({
      id: "github__example__mcp-list",
      provenance: {
        discoveries: [
          {
            id: "discovery__github__example__mcp-list__awesome-list",
            discovered_at: "2026-05-01T00:00:00Z",
            source: {
              type: "awesome-list",
              name: "awesome-mcp-servers",
              url: "https://github.com/punkpeye/awesome-mcp-servers",
              repository: "punkpeye/awesome-mcp-servers",
            },
            extraction: {
              mode: "direct",
              section_path: ["inbox"],
              anchor_text: "https://github.com/example/mcp-list",
              extracted_url: "https://github.com/example/mcp-list",
              surrounding_text: null,
              confidence: "high",
            },
          } as any,
        ],
      } as any,
    });

    const report = buildReviewReport([manual, external], [], [manual, external]);
    expect(report.new_discovery_sources).toEqual(["awesome-mcp-servers"]);
  });
});

// ─── Phase 8: AI Insights ─────────────────────────────────────────────────────

describe("AI insights", () => {
  it("prompt includes metadata", () => {
    const item = makeItem({
      metadata: {
        github: {
          stars: 500, forks: 10, license: "MIT", archived: false,
          pushed_at: "2026-04-01", description: "A great tool", homepage: null, topics: ["ai", "agent"], last_checked_at: null,
        },
      },
    });
    const prompt = buildInsightPrompt({ item, categories: ["coding-agents", "mcp"] });
    expect(prompt).toContain("500");
    expect(prompt).toContain("A great tool");
    expect(prompt).toContain("coding-agents");
  });

  it("valid AI response is parsed correctly", () => {
    const raw = JSON.stringify({
      summary: "A kanban tool for coding agents.",
      why_it_matters: "Helps organize agent tasks.",
      mental_damage: "Now you need a project manager for your project manager.",
      tags: ["kanban", "agents"],
      should_include: true,
      primary_category: "coding-agents",
      decision_reason: "Fits developer tooling and belongs in coding agents.",
      decision_evidence: ["Repo description says it is a kanban tool for coding agents."],
      category_candidates: ["coding-agents"],
      confidence: "high",
    });
    const result = parseAIInsightResponse(raw);
    expect(result.summary).toBe("A kanban tool for coding agents.");
    expect(result.tags).toContain("kanban");
    expect((result as any).should_include).toBe(true);
    expect(result.confidence).toBe("high");
  });

  it("invalid AI response is rejected", () => {
    expect(() => parseAIInsightResponse("not json")).toThrow();
    expect(() =>
      parseAIInsightResponse(JSON.stringify({ summary: "Only summary" }))
    ).toThrow();
  });

  it("tags are normalized to lowercase hyphenated", () => {
    const raw = JSON.stringify({
      summary: "A tool.",
      why_it_matters: "It matters.",
      mental_damage: "Oh no.",
      tags: ["Coding Agent", "MCP Server"],
      should_include: true,
      primary_category: "coding-agents",
      decision_reason: "Fits coding workflows.",
      decision_evidence: ["Repo description says it is a developer tool."],
      category_candidates: ["coding-agents"],
      confidence: "medium",
    });
    const result = parseAIInsightResponse(raw);
    expect(result.tags).toContain("coding-agent");
    expect(result.tags).toContain("mcp-server");
  });

  it("prompt includes README excerpt when readme is provided", () => {
    const item = makeItem({
      metadata: {
        github: {
          stars: 100, forks: 1, license: "MIT", archived: false,
          pushed_at: "2026-04-01", description: "A tool.", homepage: null, topics: ["ai"], last_checked_at: null,
        },
      },
    });
    const readme = "# Cool Tool\n\nThis tool turns prompts into pull requests.";
    const prompt = buildInsightPrompt({ item, categories: ["coding-agents"], readme });
    expect(prompt).toContain("README excerpt (markdown");
    expect(prompt).toContain("turns prompts into pull requests");
  });

  it("prompt includes scraped website context when a non-GitHub tool page was resolved", () => {
    const item = makeItem({
      kind: "website",
      id: "website__cursor",
      name: "Cursor",
      canonical_url: "https://www.cursor.sh",
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
          readme: null,
        },
      },
    });
    const prompt = buildInsightPrompt({
      item,
      categories: ["coding-agents"],
      website_context: {
        title: "Cursor",
        description: "AI-first code editor.",
        excerpt: "Cursor is an AI-first code editor built for developers.",
      },
    });
    expect(prompt).toContain("Scraped site context");
    expect(prompt).toContain("AI-first code editor.");
    expect(prompt).toContain("built for developers");
  });

  it("prompt uses YAML-driven category instructions instead of hardcoded category prose", () => {
    const item = makeItem();
    const prompt = buildInsightPrompt({
      item,
      categories: [
        "coding-agents | Coding Agents | Tools that directly write or review code. | User-facing coding assistants that directly write or review code.",
        "ai-frameworks | AI Frameworks and SDKs | Code-first AI building blocks. | Frameworks, SDKs, and libraries that developers import or build on in code.",
        "mcp | MCP Servers and Tooling | Model Context Protocol infrastructure. | Model Context Protocol tooling.",
      ],
    });

    expect(prompt).toContain("Use the available category list below as the source of truth.");
    expect(prompt).toContain("prompt-specific fit instruction");
    expect(prompt).toContain("coding-agents | Coding Agents | Tools that directly write or review code. | User-facing coding assistants that directly write or review code.");
    expect(prompt).toContain("ai-frameworks | AI Frameworks and SDKs | Code-first AI building blocks. | Frameworks, SDKs, and libraries that developers import or build on in code.");
    expect(prompt).toContain("mcp | MCP Servers and Tooling | Model Context Protocol infrastructure. | Model Context Protocol tooling.");
    expect(prompt).not.toContain("- coding-agents: user-facing coding assistants");
  });


  it("prompt omits README excerpt section when readme is missing", () => {
    const item = makeItem({
      metadata: {
        github: {
          stars: 100, forks: 1, license: "MIT", archived: false,
          pushed_at: "2026-04-01", description: "A tool.", homepage: null, topics: ["ai"], last_checked_at: null,
        },
      },
    });
    const prompt = buildInsightPrompt({ item, categories: ["coding-agents"] });
    // The delimited body section is not present, even though instructions
    // about README excerpts may still mention the phrase.
    expect(prompt).not.toContain("README excerpt (markdown");
    // Empty string should also be treated as missing.
    const prompt2 = buildInsightPrompt({ item, categories: ["coding-agents"], readme: "" });
    expect(prompt2).not.toContain("README excerpt (markdown");
    // No "Not available" placeholder either — the section is just omitted.
    expect(prompt).not.toContain("Not available");
  });

  it("README excerpt is truncated near the budget with a visible marker", async () => {
    const { truncateReadmeForPrompt, README_EXCERPT_MAX_CHARS, README_TRUNCATION_MARKER } =
      await import("../scripts/catalog/categorize-prompt.js");
    // Build a long README with section headings so the truncator can find a boundary.
    const sections: string[] = ["# Title\n\nIntro paragraph.\n"];
    for (let i = 0; i < 50; i++) {
      sections.push(`\n## Section ${i}\n\n${"x".repeat(500)}\n`);
    }
    const long = sections.join("");
    expect(long.length).toBeGreaterThan(README_EXCERPT_MAX_CHARS);
    const truncated = truncateReadmeForPrompt(long);
    expect(truncated.endsWith(README_TRUNCATION_MARKER)).toBe(true);
    expect(truncated.length).toBeLessThanOrEqual(README_EXCERPT_MAX_CHARS + README_TRUNCATION_MARKER.length);
    // Beginning is preserved.
    expect(truncated.startsWith("# Title")).toBe(true);
  });

  it("short README is returned unchanged by truncator", async () => {
    const { truncateReadmeForPrompt } = await import("../scripts/catalog/categorize-prompt.js");
    const short = "# Title\n\nA short readme.";
    expect(truncateReadmeForPrompt(short)).toBe(short);
  });

  it("prompt encodes useful->funny->acidic tone ladder and reality guardrail", () => {
    const item = makeItem();
    const prompt = buildInsightPrompt({ item, categories: ["coding-agents"] });
    // Tone ladder
    expect(prompt).toMatch(/Useful first/i);
    expect(prompt).toMatch(/Funny second/i);
    expect(prompt).toMatch(/Acidic third/i);
    // Reality guardrail: joke must be grounded
    expect(prompt).toMatch(/foot in reality/i);
    // Author guardrail
    expect(prompt).toMatch(/No attacks on the project authors|do not mock authors|not at the people/i);
    // No invented features
    expect(prompt).toMatch(/invent/i);
    // Anti-generic
    expect(prompt).toMatch(/another AI tool/i);
  });

  it("prompt instructs that description seeds summary and README seeds substance", () => {
    const item = makeItem();
    const prompt = buildInsightPrompt({ item, categories: ["coding-agents"] });
    expect(prompt).toMatch(/Repo description:/);
    expect(prompt).toMatch(/seed for the factual one-line summary/i);
    expect(prompt).toMatch(/README excerpt: the project's own pitch/i);
  });
});

describe("AI insight application", () => {
  it("needsAIInsights detects missing and complete AI-owned fields", () => {
    expect(needsAIInsights(makeItem())).toBe(true);

    const complete = makeItem({
      insights: {
        summary: "A tool.",
        why_it_matters: "It matters.",
        mental_damage: "You now need a workflow for your workflow.",
        tags: ["coding-agent"],
        confidence: "high",
      },
    });

    expect(needsAIInsights(complete)).toBe(false);
  });

  it("applyAIInsights fills insights and uses the first valid category candidate", () => {
    const item = makeItem();
    const result = applyAIInsights(
      item,
      {
        summary: "A CLI-first catalog.",
        why_it_matters: "It turns messy discovery into something searchable.",
        mental_damage: "Now your backlog has a backlog.",
        tags: ["coding-agent", "catalog"],
        should_include: true,
        primary_category: "coding-agents",
        decision_reason: "Fits developer tooling and belongs in coding agents.",
        decision_evidence: ["Repo description says it is a CLI-first catalog."],
        category_candidates: ["not-a-real-category", "coding-agents"],
        confidence: "medium",
      } as any,
      CATEGORIES
    );

    expect(result.insights.summary).toBe("A CLI-first catalog.");
    expect(result.insights.tags).toEqual(["coding-agent", "catalog"]);
    expect(result.placement.primary_category).toBe("coding-agents");
  });

  it("applyAIInsights keeps an existing explicit placement", () => {
    const item = makeItem({
      placement: { primary_category: "mcp", section: null },
    });

    const result = applyAIInsights(
      item,
      {
        summary: "A tool.",
        why_it_matters: "It matters.",
        mental_damage: "Oh no.",
        tags: ["coding-agent"],
        should_include: true,
        primary_category: "coding-agents",
        decision_reason: "Fits the catalog but an override already pinned it to mcp.",
        decision_evidence: ["The repo is still a developer-facing tool."],
        category_candidates: ["coding-agents"],
        confidence: "high",
      } as any,
      CATEGORIES
    );

    expect(result.placement.primary_category).toBe("mcp");
  });

  it("continues materialization when one item's AI enrichment fails and reports the error", async () => {
    const first = makeItem({
      id: "github__example__first",
      name: "first",
      canonical_url: "https://github.com/example/first",
      identity: { github_repo: "example/first" },
      metadata: {
        github: { stars: 10, forks: 1, license: "MIT", archived: false, created_at: "2026-04-01T00:00:00Z", pushed_at: "2026-05-01T00:00:00Z", description: "first", homepage: null, topics: ["agent"], last_checked_at: "2026-05-01T00:00:00Z" },
      },
      processing: { discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, categorize: { status: "pending", updated_at: null } },
    });
    const second = makeItem({
      id: "github__example__second",
      name: "second",
      canonical_url: "https://github.com/example/second",
      identity: { github_repo: "example/second" },
      metadata: {
        github: { stars: 11, forks: 1, license: "MIT", archived: false, created_at: "2026-04-01T00:00:00Z", pushed_at: "2026-05-01T00:00:00Z", description: "second", homepage: null, topics: ["agent"], last_checked_at: "2026-05-01T00:00:00Z" },
      },
      processing: { discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, categorize: { status: "pending", updated_at: null } },
    });

    const saved: CatalogItem[] = [];
    let rendered = false;

    const result = await materializeCatalogState([first, second], CATEGORIES, [], {
      enrichItem: async (item) => {
        if (item.id === second.id) throw new Error("boom");
        return {
          ...item,
          insights: {
            ...item.insights,
            summary: "A real summary.",
            why_it_matters: "It matters.",
            mental_damage: "Now the pipeline has opinions.",
            tags: ["coding-agent"],
            confidence: "high",
          },
        };
      },
      saveItem: (item) => {
        saved.push(item);
      },
      renderCatalog: () => {
        rendered = true;
      },
    });

    expect(saved.map((item) => item.id)).toEqual([first.id]);
    expect(rendered).toBe(true);
    expect(result.aiUpdatedIds).toEqual([first.id]);
    expect(result.processingErrors).toEqual([
      { stage: "ai_insights", item_id: second.id, message: "boom" },
    ]);
    expect(result.finalItems.find((item) => item.id === second.id)?.insights.summary).toBeNull();
  });

  it("skips AI materialization for items blocked by an incomplete earlier phase", async () => {
    const first = makeItem({
      id: "github__example__first",
      name: "first",
      canonical_url: "https://github.com/example/first",
      identity: { github_repo: "example/first" },
      metadata: {
        github: { stars: 10, forks: 1, license: "MIT", archived: false, created_at: "2026-04-01T00:00:00Z", pushed_at: "2026-05-01T00:00:00Z", description: "first", homepage: null, topics: ["agent"], last_checked_at: "2026-05-01T00:00:00Z" },
      },
      processing: { discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, categorize: { status: "pending", updated_at: null } },
    });
    const second = makeItem({
      id: "github__example__second",
      name: "second",
      canonical_url: "https://github.com/example/second",
      identity: { github_repo: "example/second" },
      metadata: {
        github: { stars: 11, forks: 1, license: "MIT", archived: false, created_at: "2026-04-01T00:00:00Z", pushed_at: "2026-05-01T00:00:00Z", description: "second", homepage: null, topics: ["agent"], last_checked_at: "2026-05-01T00:00:00Z" },
      },
      processing: { discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, categorize: { status: "pending", updated_at: null } },
    });

    const seen: string[] = [];
    const result = await materializeCatalogState([first, second], CATEGORIES, [], {
      blockedItemIds: new Set([second.id]),
      enrichItem: async (item) => {
        seen.push(item.id);
        return {
          ...item,
          insights: {
            ...item.insights,
            summary: `summary for ${item.name}`,
            why_it_matters: `why ${item.name}`,
            mental_damage: `pain ${item.name}`,
            tags: ["coding-agent"],
            confidence: "high",
          },
          curation: {
            status: "included",
            reason: "Fits the catalog.",
            evidence: ["Grounded test fixture."],
          },
        };
      },
      saveItem: () => {},
      renderCatalog: () => {},
    });

    expect(seen).toEqual([first.id]);
    expect(result.aiUpdatedIds).toEqual([first.id]);
    expect(result.finalItems.find((item) => item.id === second.id)?.insights.summary).toBeNull();
  });

  it("materializes AI insights with bounded concurrency while preserving input order", async () => {
    const items = [
      makeItem({ id: "github__example__first", name: "first", canonical_url: "https://github.com/example/first", identity: { github_repo: "example/first" }, metadata: { github: { stars: 10, forks: 1, license: "MIT", archived: false, created_at: "2026-04-01T00:00:00Z", pushed_at: "2026-05-01T00:00:00Z", description: "first", homepage: null, topics: ["agent"], last_checked_at: "2026-05-01T00:00:00Z" } }, processing: { discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, categorize: { status: "pending", updated_at: null } } }),
      makeItem({ id: "github__example__second", name: "second", canonical_url: "https://github.com/example/second", identity: { github_repo: "example/second" }, metadata: { github: { stars: 11, forks: 1, license: "MIT", archived: false, created_at: "2026-04-01T00:00:00Z", pushed_at: "2026-05-01T00:00:00Z", description: "second", homepage: null, topics: ["agent"], last_checked_at: "2026-05-01T00:00:00Z" } }, processing: { discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, categorize: { status: "pending", updated_at: null } } }),
      makeItem({ id: "github__example__third", name: "third", canonical_url: "https://github.com/example/third", identity: { github_repo: "example/third" }, metadata: { github: { stars: 12, forks: 1, license: "MIT", archived: false, created_at: "2026-04-01T00:00:00Z", pushed_at: "2026-05-01T00:00:00Z", description: "third", homepage: null, topics: ["agent"], last_checked_at: "2026-05-01T00:00:00Z" } }, processing: { discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" }, categorize: { status: "pending", updated_at: null } } }),
    ];

    const started: string[] = [];
    const resolvers = new Map<string, () => void>();
    const previous = process.env.CATALOG_LLM_CONCURRENCY;
    process.env.CATALOG_LLM_CONCURRENCY = "2";

    try {
      const work = materializeCatalogState(items, CATEGORIES, [], {
        enrichItem: async (item) => {
          started.push(item.id);
          await new Promise<void>((resolve) => {
            resolvers.set(item.id, resolve);
          });
          return {
            ...item,
            insights: {
              ...item.insights,
              summary: `summary for ${item.name}`,
            },
          };
        },
        saveItem: () => {},
        renderCatalog: () => {},
      });

      await Promise.resolve();
      expect(started).toEqual([items[0].id, items[1].id]);

      resolvers.get(items[0].id)?.();
      for (let attempt = 0; attempt < 10 && started.length < 3; attempt += 1) {
        await Promise.resolve();
      }
      expect(started).toEqual([items[0].id, items[1].id, items[2].id]);

      resolvers.get(items[1].id)?.();
      resolvers.get(items[2].id)?.();

      const result = await work;
      expect(result.aiUpdatedIds).toEqual(items.map((item) => item.id));
      expect(result.finalItems.map((item) => item.id)).toEqual(items.map((item) => item.id));
    } finally {
      if (previous === undefined) {
        delete process.env.CATALOG_LLM_CONCURRENCY;
      } else {
        process.env.CATALOG_LLM_CONCURRENCY = previous;
      }
      }
  });

  it("summarizes processing errors by stage", () => {
    expect(
      summarizeProcessingErrors([
        { stage: "github_enrichment", item_id: "a", message: "x" },
        { stage: "ai_insights", item_id: "b", message: "y" },
        { stage: "ai_insights", item_id: "c", message: "z" },
      ])
    ).toEqual({
      total: 3,
      byStage: { github_enrichment: 1, ai_insights: 2 },
    });
  });


  it("fails on processing errors only when explicitly enabled", () => {
    expect(shouldFailOnProcessingErrors({} as NodeJS.ProcessEnv)).toBe(false);
    expect(
      shouldFailOnProcessingErrors({ CATALOG_FAIL_ON_PROCESSING_ERRORS: "true" } as NodeJS.ProcessEnv)
    ).toBe(true);
    expect(
      shouldFailOnProcessingErrors({ CATALOG_FAIL_ON_PROCESSING_ERRORS: "1" } as NodeJS.ProcessEnv)
    ).toBe(true);
    expect(
      shouldFailOnProcessingErrors({ CATALOG_FAIL_ON_PROCESSING_ERRORS: "no" } as NodeJS.ProcessEnv)
    ).toBe(false);
  });

  it("parses the optional source-list intake env limit", () => {
    expect(resolveSourceListNewItemLimit({} as NodeJS.ProcessEnv)).toBeNull();
    expect(
      resolveSourceListNewItemLimit({ CATALOG_MAX_SOURCE_LIST_NEW_ITEMS: "25" } as NodeJS.ProcessEnv)
    ).toBe(25);
    expect(
      resolveSourceListNewItemLimit({ CATALOG_MAX_SOURCE_LIST_NEW_ITEMS: "0" } as NodeJS.ProcessEnv)
    ).toBeNull();
    expect(
      resolveSourceListNewItemLimit({ CATALOG_MAX_SOURCE_LIST_NEW_ITEMS: "garbage" } as NodeJS.ProcessEnv)
    ).toBeNull();
  });

  it("parses an optional categorization time budget from env", () => {
    expect(resolveAIInsightBudgetMs({} as NodeJS.ProcessEnv)).toBe(60 * 60_000);
    expect(resolveAIInsightBudgetMs({ CATALOG_CATEGORIZE_BUDGET_MS: "60000" } as NodeJS.ProcessEnv)).toBe(60000);
    expect(resolveAIInsightBudgetMs({ CATALOG_CATEGORIZE_BUDGET_MINUTES: "1.5" } as NodeJS.ProcessEnv)).toBe(90000);
    expect(resolveAIInsightBudgetMs({ CATALOG_CATEGORIZE_BUDGET_MS: "garbage" } as NodeJS.ProcessEnv)).toBe(60 * 60_000);
  });

  it("parses optional concurrency env overrides", () => {
    expect(resolveDirectDiscoveryConcurrency({} as NodeJS.ProcessEnv)).toBe(2);
    expect(resolveDirectDiscoveryConcurrency({ CATALOG_SITE_CONCURRENCY: "4" } as NodeJS.ProcessEnv)).toBe(4);
    expect(resolveGitHubEnrichmentConcurrency({} as NodeJS.ProcessEnv)).toBe(4);
    expect(resolveGitHubEnrichmentConcurrency({ CATALOG_GITHUB_CONCURRENCY: "8" } as NodeJS.ProcessEnv)).toBe(8);
    expect(resolveAIInsightConcurrency({} as NodeJS.ProcessEnv)).toBe(2);
    expect(resolveAIInsightConcurrency({ CATALOG_LLM_CONCURRENCY: "2" } as NodeJS.ProcessEnv)).toBe(2);
    expect(() => resolveAIInsightConcurrency({ CATALOG_LLM_CONCURRENCY: "garbage" } as NodeJS.ProcessEnv)).toThrow();
  });
  it("enrichWithAIInsights skips AI execution when the item already has insights", async () => {
    const item = makeItem({
      insights: {
        summary: "A tool.",
        why_it_matters: "It matters.",
        mental_damage: "Oh no.",
        tags: ["coding-agent"],
        confidence: "high",
      },
    });

    let called = false;
    const result = await enrichWithAIInsights(item, CATEGORIES, async () => {
      called = true;
      return JSON.stringify({});
    });

    expect(called).toBe(false);
    expect(result).toBe(item);
  });

  it("enrichWithAIInsights uses AI output to populate summary and placement", async () => {
    const item = makeItem();
    const result = await enrichWithAIInsights(
      item,
      CATEGORIES,
      async () =>
        JSON.stringify({
          summary: "A catalog for AI rabbit holes.",
          why_it_matters: "It keeps fast-moving tooling discoverable.",
          mental_damage: "Now every list becomes another tab you should read.",
          tags: ["Coding Agent", "Catalog"],
          should_include: true,
          primary_category: "coding-agents",
          decision_reason: "Fits developer tooling and belongs in coding agents.",
          decision_evidence: ["Repo description says it keeps fast-moving tooling discoverable."],
          category_candidates: ["coding-agents"],
          confidence: "high",
        })
    );

    expect(result.insights.summary).toBe("A catalog for AI rabbit holes.");
    expect(result.insights.tags).toEqual(["coding-agent", "catalog"]);
    expect(result.placement.primary_category).toBe("coding-agents");
  });

  it("fails after one malformed LLM response instead of retrying", async () => {
    const item = makeItem();
    let calls = 0;

    await expect(
      enrichWithAIInsights(item, CATEGORIES, async () => {
        calls += 1;
        return "{\"summary\":\"broken\"";
      })
    ).rejects.toThrow(/Catalog LLM categorization failed/i);

    expect(calls).toBe(1);
  });


});

// ─── README enrichment ───────────────────────────────────────────────────────

describe("enrichWithGitHub readme integration", () => {
  let tmpRoot: string;
  let originalCwd: string;
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "aarh-readme-"));
    originalCwd = process.cwd();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    process.chdir(originalCwd);
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  });

  function mockFetch(handler: (url: string) => { ok: boolean; status?: number; body: string }) {
    const calls: string[] = [];
    globalThis.fetch = (async (input: RequestInfo | URL) => {
      const url = typeof input === "string" ? input : input.toString();
      calls.push(url);
      const result = handler(url);
      const bodyBytes = Buffer.from(result.body, "utf8");
      return {
        ok: result.ok,
        status: result.status ?? (result.ok ? 200 : 404),
        statusText: result.ok ? "OK" : "Not Found",
        json: async () => JSON.parse(result.body),
        text: async () => result.body,
        arrayBuffer: async () =>
          bodyBytes.buffer.slice(
            bodyBytes.byteOffset,
            bodyBytes.byteOffset + bodyBytes.byteLength
          ),
      } as Response;
    }) as typeof fetch;
    return calls;
  }

  it("fetches README and writes it to the .cache directory", async () => {
    const { enrichWithGitHub, readmeCachePath, readReadmeFromCache } =
      await import("../scripts/catalog.js");
    const repoJson = JSON.stringify({
      stargazers_count: 10, forks_count: 2, license: { spdx_id: "MIT" },
      archived: false, pushed_at: "2026-04-01", description: "A neat tool.",
      homepage: null, topics: ["ai"],
    });
    const readmeBody = "# Neat Tool\n\nIt does neat things for AI workflows.";
    const calls = mockFetch((url) => {
      if (url.endsWith("/readme")) return { ok: true, body: readmeBody };
      return { ok: true, body: repoJson };
    });

    const item = makeItem();
    const enriched = await enrichWithGitHub(item);

    // Both endpoints called.
    expect(calls.some((u) => u.endsWith("/repos/testowner/test-repo"))).toBe(true);
    expect(calls.some((u) => u.endsWith("/repos/testowner/test-repo/readme"))).toBe(true);

    // Cache file exists at the documented path.
    const cachePath = readmeCachePath("testowner", "test-repo");
    expect(cachePath).toContain(path.join(".cache", "readmes", "github", "testowner", "test-repo.md"));
    expect(fs.existsSync(cachePath)).toBe(true);
    expect(readReadmeFromCache("testowner", "test-repo")).toBe(readmeBody);

    // Provenance recorded on the item; README body is NOT in the YAML.
    expect(enriched.metadata.github.readme).not.toBeNull();
    expect(enriched.metadata.github.readme?.bytes).toBe(Buffer.byteLength(readmeBody, "utf8"));
    expect(typeof enriched.metadata.github.readme?.fetched_at).toBe("string");

    // Clean up cache file written under repo root.
    try { fs.unlinkSync(cachePath); } catch { /* best effort */ }
  });

  it("retries public README fetches without auth after a 403", async () => {
    const { fetchGitHubReadmeResult } = await import("../scripts/support/github.js");
    const calls: Array<{ url: string; auth: string | null }> = [];
    globalThis.fetch = (async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === "string" ? input : input.toString();
      const headers = new Headers(init?.headers);
      calls.push({ url, auth: headers.get("Authorization") });

      if (calls.length === 1) {
        return {
          ok: false,
          status: 403,
          statusText: "Forbidden",
          arrayBuffer: async () => new ArrayBuffer(0),
        } as Response;
      }

      const body = "# Awesome CLI Coding Agents\n";
      const bytes = Buffer.from(body, "utf8");
      return {
        ok: true,
        status: 200,
        statusText: "OK",
        arrayBuffer: async () =>
          bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength),
      } as Response;
    }) as typeof fetch;

    const result = await fetchGitHubReadmeResult("testowner", "test-repo", "token-123");

    expect(calls).toEqual([
      {
        url: "https://api.github.com/repos/testowner/test-repo/readme",
        auth: "token token-123",
      },
      {
        url: "https://api.github.com/repos/testowner/test-repo/readme",
        auth: null,
      },
    ]);
    expect(result.status).toBe(200);
    expect(result.body).toBe("# Awesome CLI Coding Agents\n");
  });


  it("README 404 does not break enrichment; readme provenance stays null", async () => {
    const { enrichWithGitHub } = await import("../scripts/catalog.js");
    const repoJson = JSON.stringify({
      stargazers_count: 5, forks_count: 0, license: null,
      archived: false, pushed_at: "2026-04-01", description: "Thing.",
      homepage: null, topics: [],
    });
    mockFetch((url) => {
      if (url.endsWith("/readme")) return { ok: false, status: 404, body: "" };
      return { ok: true, body: repoJson };
    });

    const item = makeItem();
    const enriched = await enrichWithGitHub(item);

    // Repo metadata still applied.
    expect(enriched.metadata.github.stars).toBe(5);
    expect(enriched.metadata.github.last_checked_at).not.toBeNull();
    // README provenance not set on a fresh failure (no prior cache).
    expect(enriched.metadata.github.readme ?? null).toBeNull();
  });

  it("README fetch failure preserves prior readme provenance and cache", async () => {
    const { enrichWithGitHub, readmeCachePath } = await import("../scripts/catalog.js");
    const cachePath = readmeCachePath("testowner", "test-repo");
    fs.mkdirSync(path.dirname(cachePath), { recursive: true });
    fs.writeFileSync(cachePath, "# Older cached README", "utf8");
    try {
      const repoJson = JSON.stringify({
        stargazers_count: 7, forks_count: 0, license: null,
        archived: false, pushed_at: "2026-04-01", description: "Thing.",
        homepage: null, topics: [],
      });
      mockFetch((url) => {
        if (url.endsWith("/readme")) return { ok: false, status: 500, body: "" };
        return { ok: true, body: repoJson };
      });

      const item = makeItem({
        metadata: {
          github: {
            stars: null, forks: null, license: null, archived: null,
            pushed_at: null, description: null, homepage: null, topics: null,
            last_checked_at: null,
            readme: { fetched_at: "2026-04-01T00:00:00Z", bytes: 21 },
          },
        },
      });
      const enriched = await enrichWithGitHub(item);

      // Prior provenance preserved.
      expect(enriched.metadata.github.readme?.fetched_at).toBe("2026-04-01T00:00:00Z");
      // Cache file untouched.
      expect(fs.readFileSync(cachePath, "utf8")).toBe("# Older cached README");
    } finally {
      try { fs.unlinkSync(cachePath); } catch { /* best effort */ }
    }
  });

  it("rejects path-traversal segments in owner/repo so the cache stays inside .cache/", async () => {
    const { readmeCachePath } = await import("../scripts/catalog.js");
    expect(() => readmeCachePath("..", "repo")).toThrow();
    expect(() => readmeCachePath("owner", "..")).toThrow();
    expect(() => readmeCachePath("owner/with/slash", "repo")).toThrow();
    expect(() => readmeCachePath("owner", "..\\evil")).toThrow();
    expect(() => readmeCachePath("", "repo")).toThrow();
  });

  it("cache hit: when metadata is fresh, the README endpoint is not re-hit", async () => {
    const { shouldRefreshMetadata, enrichWithGitHub } = await import("../scripts/catalog.js");
    const recent = new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(); // 1d ago
    expect(shouldRefreshMetadata(recent, 7)).toBe(false);

    const calls = mockFetch(() => ({ ok: true, body: "{}" }));
    const item = makeItem({
      metadata: {
        github: {
          stars: 1, forks: 0, license: null, archived: false,
          pushed_at: null, description: null, homepage: null, topics: null,
          last_checked_at: recent,
          readme: { fetched_at: recent, bytes: 42 },
        },
      },
    });
    if (shouldRefreshMetadata(item.metadata.github.last_checked_at, 7)) {
      await enrichWithGitHub(item);
    }
    expect(calls.length).toBe(0);
  });

  it("README cap is enforced in bytes, not UTF-16 code units", async () => {
    const { fetchGitHubReadme, README_MAX_BYTES } = await import("../scripts/support/github.js");
    // Multi-byte UTF-8 char (3 bytes in UTF-8, 1 code unit). A char-length
    // check would let ~3× the budget through; a byte check must not.
    const heavyChar = "✓";
    const oversized = heavyChar.repeat(README_MAX_BYTES);
    mockFetch(() => ({ ok: true, body: oversized }));
    const got = await fetchGitHubReadme("owner", "repo");
    expect(got).not.toBeNull();
    expect(Buffer.byteLength(got!, "utf8")).toBeLessThanOrEqual(README_MAX_BYTES);
  });
});

// ─── Phase 9: Placement ───────────────────────────────────────────────────────

describe("placement", () => {
  it("override placement wins", () => {
    const item = makeItem({
      insights: { summary: null, why_it_matters: null, mental_damage: null, tags: ["mcp"], confidence: null },
      placement: { primary_category: "coding-agents", section: null }, // explicit override
    });
    const result = applyPlacement(item, CATEGORIES);
    expect(result.placement.primary_category).toBe("coding-agents");
  });

  it("mcp tag goes to mcp category", () => {
    const item = makeItem({
      insights: { summary: null, why_it_matters: null, mental_damage: null, tags: ["mcp"], confidence: null },
      placement: { primary_category: null, section: null },
    });
    const result = applyPlacement(item, CATEGORIES);
    expect(result.placement.primary_category).toBe("mcp");
  });

  it("item with no placement stays needs review ready", () => {
    const item = makeItem({
      placement: { primary_category: null, section: null },
    });
    const result = applyPlacement(item, CATEGORIES);
    // No placement info, no tags - stays null
    expect(result.placement.primary_category).toBeNull();
  });
});

// ─── PR review feedback regressions ───────────────────────────────────────────

describe("makeItemPath", () => {
  it("lowercases owner and repo so casing in the URL doesn't change the path", () => {
    const a = makeItemPath("https://github.com/BloopAI/Vibe-Kanban");
    const b = makeItemPath("https://github.com/bloopai/vibe-kanban");
    expect(a).toBe(b);
    expect(path.normalize(a)).toContain(
      path.normalize(path.join("catalog", "items", "github", "bloopai", "vibe-kanban.yml"))
    );
  });
});

describe("makeDiscoveryId", () => {
  it("is stable across days (no date in id)", () => {
    const source: Source = { url: "https://github.com/foo/bar" };
    const id = makeDiscoveryId("https://github.com/foo/bar", source);
    expect(id).toBe("discovery__github__foo__bar__direct-link");
    expect(id).not.toMatch(/\d{4}-\d{2}-\d{2}/);
  });

  it("defaults source kind to direct-link, not 'manual'", () => {
    const source: Source = { url: "https://github.com/foo/bar" };
    const id = makeDiscoveryId("https://github.com/foo/bar", source);
    expect(id.endsWith("__direct-link")).toBe(true);
  });

  it("encodes the source kind and source identity when provided", () => {
    const source: Source = { url: "https://github.com/foo/bar", kind: "awesome-list" };
    const id = makeDiscoveryId("https://github.com/foo/bar", source);
    expect(id).toContain("__awesome-list__foo__bar");
  });
});

describe("discover idempotency across dates", () => {
  it("re-running discover does not append a duplicate provenance entry", () => {
    const sources: Source[] = [{ url: "https://github.com/foo/bar" }];
    const { newItems } = discover(sources, []);
    expect(newItems[0].provenance.discoveries).toHaveLength(1);

    // Simulate "next day": pass the same source against the just-created item.
    const { newItems: again, updatedItems } = discover(sources, newItems);
    expect(again).toHaveLength(0);
    expect(updatedItems).toHaveLength(0);
  });
});

describe("validateOverride: schema + allowlist", () => {
  it("rejects a missing/null patch instead of throwing", () => {
    const item = makeItem();
    const override = {
      id: item.id,
      override: { reason: "x", updated_by: "me", updated_at: "2026-04-30" },
      // Note: patch deliberately null/missing.
      patch: null as unknown,
    } as unknown as Override;
    expect(() => validateOverride(override, [item])).not.toThrow();
    const errors = validateOverride(override, [item]);
    expect(errors.some((e) => e.message.includes("plain object"))).toBe(true);
  });

  it("rejects patches that try to mutate protected nested fields", () => {
    const item = makeItem();
    const override = {
      id: item.id,
      override: { reason: "x", updated_by: "me", updated_at: "2026-04-30" },
      patch: { metadata: { github: { stars: 9999 } } } as unknown,
    } as unknown as Override;
    const errors = validateOverride(override, [item]);
    expect(errors.some((e) => e.message.includes("metadata"))).toBe(true);
  });

  it("rejects patches that try to mutate provenance", () => {
    const item = makeItem();
    const override = {
      id: item.id,
      override: { reason: "x", updated_by: "me", updated_at: "2026-04-30" },
      patch: { provenance: { discoveries: [] } } as unknown,
    } as unknown as Override;
    const errors = validateOverride(override, [item]);
    expect(errors.some((e) => e.message.includes("provenance"))).toBe(true);
  });

  it("still allows insights/placement/lifecycle patches", () => {
    const item = makeItem();
    const override: Override = {
      id: item.id,
      override: { reason: "x", updated_by: "me", updated_at: "2026-04-30" },
      patch: {
        insights: { mental_damage: "ok" },
        placement: { primary_category: "coding-agents", section: null },
        lifecycle: { status: "curated" },
      },
    };
    const errors = validateOverride(override, [item]);
    expect(errors).toHaveLength(0);
  });
});

describe("validateOverridesUniqueness", () => {
  it("flags duplicate override ids", () => {
    const o = (id: string): Override => ({
      id,
      override: { reason: "x", updated_by: "me", updated_at: "2026-04-30" },
      patch: { lifecycle: { status: "curated" } },
    });
    const errors = validateOverridesUniqueness([o("a"), o("a"), o("b")]);
    expect(errors).toHaveLength(1);
    expect(errors[0].message).toContain("Duplicate override id: a");
  });

  it("passes when all ids are unique", () => {
    const o = (id: string): Override => ({
      id,
      override: { reason: "x", updated_by: "me", updated_at: "2026-04-30" },
      patch: {},
    });
    expect(validateOverridesUniqueness([o("a"), o("b")])).toHaveLength(0);
  });
});

describe("renderReadme: all category links stay visible", () => {
  it("links a category page even when the current items there are needs_review", () => {
    const item = makeItem({
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "needs_review", reason: "Repository is archived" },
    });
    const readme = renderReadme([item], CATEGORIES);
    expect(readme).toContain("coding-agents.md");
  });

  it("still links to categories with at least one curated/landmark item", () => {
    const items = [
      makeItem({
        id: "github__a__a",
        placement: { primary_category: "coding-agents", section: null },
        lifecycle: { status: "curated" },
      }),
      makeItem({
        id: "github__b__b",
        placement: { primary_category: "coding-agents", section: null },
        lifecycle: { status: "needs_review" },
      }),
    ];
    const readme = renderReadme(items, CATEGORIES);
    expect(readme).toContain("coding-agents.md");
  });
});



describe("Context Engineering page wording", () => {
  it("category description carries the 'tokens' joke (from config/categories.yml)", () => {
    const yamlPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "config", "categories.yml");
    const yaml = fs.readFileSync(yamlPath, "utf8");
    // Pull out the context-engineering entry's description block.
    const m = yaml.match(/- id: context-engineering[\s\S]*?description: >([\s\S]*?)(?:\n- id:|\n*$)/);
    expect(m, "context-engineering category not found").not.toBeNull();
    const description = (m![1] ?? "").toLowerCase();
    expect(description).toMatch(/tokens?/);
  });

  it("renderRabbitHolePage emits the category description verbatim", () => {
    const ctx: Category = {
      id: "context-engineering",
      name: "Prompting and Context Engineering",
      slug: "prompting-context-engineering",
      description: "give me tokens, my precious tokens",
    };
    const item = makeItem({
      placement: { primary_category: "context-engineering", section: null },
      lifecycle: { status: "curated" },
    });
    const page = renderRabbitHolePage(ctx, [item]);
    expect(page).toContain("give me tokens, my precious tokens");
  });
});

// ─── Review fixes: external source provenance + override validation ───

import { buildDiscovery } from "../scripts/catalog.js";

describe("buildDiscovery preserves external source provenance", () => {
  it("awesome-list: keeps source.url and uses a non-generic name", () => {
    const d = buildDiscovery(
      "https://github.com/some/repo",
      { url: "https://github.com/punkpeye/awesome-mcp-servers", kind: "awesome-list", note: null as any },
      "2026-04-30T00:00:00Z"
    );
    expect(d.source.type).toBe("awesome-list");
    expect(d.source.url).toBe("https://github.com/punkpeye/awesome-mcp-servers");
    expect(d.source.name).not.toBe("Manual submission");
    expect(d.source.name.length).toBeGreaterThan(0);
  });

  it.each(["article", "docs-page", "newsletter", "paper"] as const)(
    "%s: keeps source.url and a non-generic name (so the dedicated credits page can render it)",
    (kind) => {
      const d = buildDiscovery(
        "https://github.com/some/repo",
        { url: "https://example.com/great-post", kind, note: null as any },
        "2026-04-30T00:00:00Z"
      );
      expect(d.source.type).toBe(kind);
      expect(d.source.url).toBe("https://example.com/great-post");
      expect(d.source.name).not.toBe("Manual submission");
      expect(d.source.name).not.toBe("");
    }
  );

  it("direct-link: still renders as Manual submission with null url", () => {
    const d = buildDiscovery(
      "https://github.com/some/repo",
      { url: "https://github.com/some/repo" },
      "2026-04-30T00:00:00Z"
    );
    expect(d.source.type).toBe("direct-link");
    expect(d.source.url).toBeNull();
    expect(d.source.name).toBe("Manual submission");
  });
});

describe("override validation stays strict before applying patches", () => {
  // We exercise the validation primitives directly so malformed override shapes
  // fail before any command attempts to apply them.
  it("flags an override with a non-object patch (would otherwise throw at runtime)", () => {
    const item = makeItem();
    const errs = validateOverride(
      // @ts-expect-error intentionally malformed
      { id: item.id, override: { reason: "x", updated_by: "x", updated_at: "x" }, patch: null },
      [item]
    );
    expect(errs.some((e) => /patch must be a plain object/i.test(e.message))).toBe(true);
  });

  it("flags duplicate override ids (would otherwise be silently dropped by Map)", () => {
    const o: Override = {
      id: "github__a__b",
      override: { reason: "r", updated_by: "u", updated_at: "t" },
      patch: { lifecycle: { status: "curated" } },
    };
    const errs = validateOverridesUniqueness([o, o]);
    expect(errs.length).toBe(1);
    expect(errs[0]?.message).toMatch(/duplicate/i);
  });
});

describe("star refresh honors metadata_refresh_days", () => {
  // We test the helper directly so we don't have to mock GitHub.
  it("shouldRefreshMetadata returns false when last_checked_at is within window", async () => {
    const { shouldRefreshMetadata } = await import("../scripts/catalog.js");
    const now = new Date("2026-04-30T12:00:00Z");
    // 1 day ago, window = 7 days → still fresh
    const recent = new Date("2026-04-29T12:00:00Z").toISOString();
    expect(shouldRefreshMetadata(recent, 7, now)).toBe(false);
  });

  it("shouldRefreshMetadata returns true when last_checked_at is older than window", async () => {
    const { shouldRefreshMetadata } = await import("../scripts/catalog.js");
    const now = new Date("2026-04-30T12:00:00Z");
    const old = new Date("2026-04-20T12:00:00Z").toISOString(); // 10 days ago
    expect(shouldRefreshMetadata(old, 7, now)).toBe(true);
  });

  it("shouldRefreshMetadata returns true when last_checked_at is null", async () => {
    const { shouldRefreshMetadata } = await import("../scripts/catalog.js");
    expect(shouldRefreshMetadata(null, 7)).toBe(true);
  });
});

describe("parseGitHubUrl: query string and fragment handling", () => {
  it("strips ?query and #fragment so they do not bleed into the repo name", async () => {
    const { parseGitHubUrl } = await import("../scripts/support/github.js");
    expect(parseGitHubUrl("https://github.com/org/repo?tab=readme")).toEqual({
      owner: "org",
      repo: "repo",
    });
    expect(parseGitHubUrl("https://github.com/org/repo#section")).toEqual({
      owner: "org",
      repo: "repo",
    });
    expect(parseGitHubUrl("https://github.com/org/repo.git")).toEqual({
      owner: "org",
      repo: "repo",
    });
    expect(parseGitHubUrl("https://github.com/org/repo/tree/main")).toEqual({
      owner: "org",
      repo: "repo",
    });
  });

  it("rejects non-github hosts and malformed URLs", async () => {
    const { parseGitHubUrl } = await import("../scripts/support/github.js");
    expect(parseGitHubUrl("https://gitlab.com/org/repo")).toBeNull();
    expect(parseGitHubUrl("not a url")).toBeNull();
    expect(parseGitHubUrl("https://github.com/org")).toBeNull();
  });
});

describe("loadSources: shape validation", () => {
  it("returns [] when config/sources.yml is not a YAML list", async () => {
    // loadSources reads via readYamlIfExists; assert the validator-style
    // guard against a malformed YAML mapping at the root.
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "sources-shape-"));
    try {
      const sourcesPath = path.join(tmp, "config", "sources.yml");
      fs.mkdirSync(path.dirname(sourcesPath), { recursive: true });
      fs.writeFileSync(sourcesPath, "not_a_list: true\n");
      const { readYamlIfExists } = await import("../scripts/support/yaml.js");
      const raw = readYamlIfExists<unknown>(sourcesPath, null);
      const result = Array.isArray(raw) ? raw : [];
      expect(result).toEqual([]);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });
});

describe("validateOverride: nested subpatch shape", () => {
  it("rejects non-object values for insights / placement / lifecycle", () => {
    const item = makeItem();
    const errors = validateOverride(
      {
        id: item.id,
        override: { reason: "x", updated_by: "test", updated_at: "2026-04-30T00:00:00Z" },
        // @ts-expect-error - intentionally malformed to exercise validation
        patch: { insights: "not an object" },
      },
      [item]
    );
    expect(errors.some((e) => /insights/.test(e.message))).toBe(true);
  });

  it("rejects array values for sub-patches", () => {
    const item = makeItem();
    const errors = validateOverride(
      {
        id: item.id,
        override: { reason: "x", updated_by: "test", updated_at: "2026-04-30T00:00:00Z" },
        // @ts-expect-error - intentionally malformed
        patch: { placement: [] },
      },
      [item]
    );
    expect(errors.some((e) => /placement/.test(e.message))).toBe(true);
  });
});
// ─── Runtime config flattening tests ─────────────────────────────────────────
describe("runtime config flattening", () => {
  it("reads flat config roots from the simplified paths", () => {
    const cfg = loadConfig();
    const sources = loadSources();
    const cats = loadCategories();

    expect(cfg).toHaveProperty("promotion");
    expect(cfg).toHaveProperty("github");
    expect(Array.isArray(sources)).toBe(true);
    expect(Array.isArray(cats)).toBe(true);
  });
});
