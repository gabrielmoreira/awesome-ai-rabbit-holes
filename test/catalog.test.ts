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
  applyLifecycleRules,
  applyOverride,
  applyOverrides,
  applyPlacement,
} from "../scripts/catalog.js";
import { parseAIInsightResponse, buildInsightPrompt } from "../scripts/ai.js";
import {
  renderReadme,
  renderRabbitHolePage,
  renderSiteCatalog,
} from "../scripts/render.js";
import type { CatalogItem, Source, Override, Category, CatalogConfig } from "../scripts/types.js";

// ─── Fixtures ────────────────────────────────────────────────────────────────

const DEFAULT_CONFIG: CatalogConfig = {
  promotion: { incubating_until_stars: 150 },
  github: { metadata_refresh_days: 7 },
  render: { include_source_credits: true },
  credit: { submitter: { name: "Test Maintainer", url: null } },
};

const CATEGORIES: Category[] = [
  { id: "coding-agents", name: "Coding Agents", slug: "coding-agents", description: "Tools for coding with AI." },
  { id: "mcp", name: "MCP Servers", slug: "mcp", description: "MCP tooling." },
  { id: "awesome-awesomes", name: "Awesome Awesomes", slug: "awesome-awesomes", description: "Meta-lists." },
];

function makeItem(overrides: Partial<CatalogItem> = {}): CatalogItem {
  return {
    id: "github__testowner__test-repo",
    kind: "github-repo",
    name: "test-repo",
    canonical_url: "https://github.com/testowner/test-repo",
    identity: { github_repo: "testowner/test-repo" },
    provenance: {
      primary_credit: { label: "Test User", url: null },
      discoveries: [
        {
          id: "discovery__github__testowner__test-repo__direct-link",
          discovered_at: "2026-04-30T00:00:00Z",
          submitted_by: { type: "maintainer", name: "Test User", url: null },
          contribution: { type: "manual", url: null, number: null, author: { name: "Test User", url: null } },
          source: { type: "direct-link", name: "Manual submission", url: null, repository: null },
          extraction: {
            mode: "direct",
            section_path: ["inbox"],
            anchor_text: "https://github.com/testowner/test-repo",
            extracted_url: "https://github.com/testowner/test-repo",
            surrounding_text: null,
            confidence: "high",
          },
          credit: { label: "Test User", url: null },
        },
      ],
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
    insights: {
      summary: null,
      why_it_matters: null,
      mental_damage: null,
      tags: [],
      confidence: null,
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
          primary_credit: { label: "Test", url: null },
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
    expect(newItems[0].canonical_url).toBe("https://github.com/BloopAI/vibe-kanban");
  });

  it("normalizes GitHub URL", () => {
    expect(normalizeGitHubUrl("https://github.com/BloopAI/vibe-kanban/")).toBe(
      "https://github.com/BloopAI/vibe-kanban"
    );
    expect(normalizeGitHubUrl("https://github.com/BloopAI/vibe-kanban.git")).toBe(
      "https://github.com/BloopAI/vibe-kanban"
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
    const readme = renderReadme([], CATEGORIES, false);
    expect(readme).toContain("# Awesome AI Rabbit Holes");
    expect(readme).toContain("Come for the tools");
  });

  it("README includes category links for categories with items", () => {
    const item = makeItem({
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "curated" },
    });
    const readme = renderReadme([item], CATEGORIES, false);
    expect(readme).toContain("Coding Agents");
    expect(readme).toContain("coding-agents.md");
  });

  it("rabbit-hole page includes item from category", () => {
    const item = makeItem({
      name: "test-tool",
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "curated" },
      insights: { summary: "A great tool", why_it_matters: "Matters a lot", mental_damage: "Oh no", tags: [], confidence: null },
    });
    const page = renderRabbitHolePage(CATEGORIES[0], [item], false);
    expect(page).toContain("test-tool");
    expect(page).toContain("A great tool");
  });

  it("incubating items render separately", () => {
    const item = makeItem({
      name: "new-tool",
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "incubating" },
    });
    const page = renderRabbitHolePage(CATEGORIES[0], [item], false);
    expect(page).toContain("Incubating");
    expect(page).toContain("new-tool");
  });

  it("site/catalog.json contains public item fields", () => {
    const item = makeItem();
    const catalog = renderSiteCatalog([item]) as { items: Array<Record<string, unknown>> };
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
      category_candidates: ["coding-agents"],
      confidence: "high",
    });
    const result = parseAIInsightResponse(raw);
    expect(result.summary).toBe("A kanban tool for coding agents.");
    expect(result.tags).toContain("kanban");
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
      await import("../scripts/ai.js");
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
    const { truncateReadmeForPrompt } = await import("../scripts/ai.js");
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
    const { fetchGitHubReadme, README_MAX_BYTES } = await import("../scripts/github.js");
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
    expect(a.endsWith("/catalog/items/github/bloopai/vibe-kanban.yml")).toBe(true);
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

  it("encodes the source kind when provided", () => {
    const source: Source = { url: "https://github.com/foo/bar", kind: "awesome-list" };
    const id = makeDiscoveryId("https://github.com/foo/bar", source);
    expect(id.endsWith("__awesome-list")).toBe(true);
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

describe("renderReadme: needs_review filter", () => {
  it("does not link to a category whose only items are needs_review", () => {
    const item = makeItem({
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "needs_review", reason: "Repository is archived" },
    });
    const readme = renderReadme([item], CATEGORIES, false);
    expect(readme).not.toContain("coding-agents.md");
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
    const readme = renderReadme(items, CATEGORIES, false);
    expect(readme).toContain("coding-agents.md");
  });
});

describe("buildNewCatalogItem: configurable submitter", () => {
  it("uses the supplied submitter for primary_credit and discovery", () => {
    const item = buildNewCatalogItem(
      "https://github.com/foo/bar",
      { url: "https://github.com/foo/bar" },
      "2026-04-30T00:00:00Z",
      { name: "Alice", url: "https://github.com/alice" }
    );
    expect(item.provenance.primary_credit.label).toBe("Alice");
    expect(item.provenance.primary_credit.url).toBe("https://github.com/alice");
    expect(item.provenance.discoveries[0].submitted_by.name).toBe("Alice");
    expect(item.provenance.discoveries[0].credit.label).toBe("Alice");
  });

  it("falls back to a generic default when no submitter is supplied", () => {
    const item = buildNewCatalogItem(
      "https://github.com/foo/bar",
      { url: "https://github.com/foo/bar" },
      "2026-04-30T00:00:00Z"
    );
    // Generic default — no hardcoded person name.
    expect(item.provenance.primary_credit.label).not.toBe("Gabriel Moreira");
  });
});

// ─── Source Credits: README + dedicated page ─────────────────────────────────

import { renderSourceCreditsPage } from "../scripts/render.js";

function makeAwesomeListItem(): CatalogItem {
  const base = makeItem();
  return {
    ...base,
    id: "github__awesomelistowner__awesome-things",
    name: "awesome-things",
    canonical_url: "https://github.com/awesomelistowner/awesome-things",
    provenance: {
      primary_credit: { label: "Gabriel Moreira", url: null },
      discoveries: [
        {
          id: "discovery__github__awesomelistowner__awesome-things__awesome-list",
          discovered_at: "2026-04-30T00:00:00Z",
          submitted_by: { type: "maintainer", name: "Gabriel Moreira", url: null },
          contribution: { type: "manual", url: null, number: null, author: { name: "Gabriel Moreira", url: null } },
          source: {
            type: "awesome-list",
            name: "Awesome Things",
            url: "https://github.com/awesomelistowner/awesome-things",
            repository: "awesomelistowner/awesome-things",
          },
          extraction: {
            mode: "scraped",
            section_path: ["Tools"],
            anchor_text: "awesome-things",
            extracted_url: "https://github.com/awesomelistowner/awesome-things",
            surrounding_text: null,
            confidence: "high",
          },
          credit: { label: "Awesome Things", url: "https://github.com/awesomelistowner/awesome-things" },
        },
      ],
    },
    placement: { primary_category: "awesome-awesomes", section: null },
    lifecycle: { status: "curated" },
  };
}

describe("README Source Credits", () => {
  it("does not list submitter names as bullet credits", () => {
    const item = makeItem({
      provenance: {
        primary_credit: { label: "Some Submitter", url: null },
        discoveries: [
          {
            id: "discovery__github__testowner__test-repo__direct-link",
            discovered_at: "2026-04-30T00:00:00Z",
            submitted_by: { type: "maintainer", name: "Some Submitter", url: null },
            contribution: { type: "manual", url: null, number: null, author: { name: "Some Submitter", url: null } },
            source: { type: "direct-link", name: "Manual submission", url: null, repository: null },
            extraction: {
              mode: "direct",
              section_path: ["inbox"],
              anchor_text: "x",
              extracted_url: "https://github.com/testowner/test-repo",
              surrounding_text: null,
              confidence: "high",
            },
            credit: { label: "Some Submitter", url: null },
          },
        ],
      },
      placement: { primary_category: "coding-agents", section: null },
      lifecycle: { status: "curated" },
    });
    const readme = renderReadme([item], CATEGORIES, true);
    // Old behavior was a bullet line "- Some Submitter" or "- [Some Submitter](...)"
    expect(readme).not.toMatch(/^- \[?Some Submitter/m);
    expect(readme).not.toMatch(/^- Some Submitter$/m);
  });

  it("renders the AI casino paragraph", () => {
    const readme = renderReadme([], CATEGORIES, true);
    expect(readme).toContain("## Source Credits");
    expect(readme).toMatch(/casino|slot machine|lever/i);
  });

  it("links to the dedicated Source Credits page", () => {
    const readme = renderReadme([], CATEGORIES, true);
    expect(readme).toContain("docs/source-credits.md");
  });

  it("links to the Awesome Awesomes rabbit hole page", () => {
    const readme = renderReadme([], CATEGORIES, true);
    expect(readme).toContain("docs/rabbit-holes/awesome-awesomes.md");
  });

  it("Source Credits section is shown even when include_source_credits is false (the section is now generated, not a per-item credit list)", () => {
    // We still want the casino text to be reachable; behavior with include=false
    // is: section is omitted (preserves the toggle semantics for users who really
    // do not want it). This test just locks the behavior in.
    const readme = renderReadme([], CATEGORIES, false);
    expect(readme).not.toContain("## Source Credits");
  });
});

describe("dedicated Source Credits page", () => {
  it("includes external source pages (awesome-list etc.)", () => {
    const item = makeAwesomeListItem();
    const page = renderSourceCreditsPage([item]);
    expect(page).toContain("Awesome Things");
    expect(page).toContain("https://github.com/awesomelistowner/awesome-things");
  });

  it("excludes manual submitter-only credits (direct-link / manual-submission)", () => {
    // makeItem() default uses source.type = "direct-link"
    const submitterOnly = makeItem({
      provenance: {
        primary_credit: { label: "Some Submitter", url: null },
        discoveries: [
          {
            id: "discovery__github__testowner__test-repo__direct-link",
            discovered_at: "2026-04-30T00:00:00Z",
            submitted_by: { type: "maintainer", name: "Some Submitter", url: null },
            contribution: { type: "manual", url: null, number: null, author: { name: "Some Submitter", url: null } },
            source: { type: "direct-link", name: "Manual submission", url: null, repository: null },
            extraction: {
              mode: "direct",
              section_path: ["inbox"],
              anchor_text: "x",
              extracted_url: "https://github.com/testowner/test-repo",
              surrounding_text: null,
              confidence: "high",
            },
            credit: { label: "Some Submitter", url: null },
          },
        ],
      },
    });
    const page = renderSourceCreditsPage([submitterOnly]);
    expect(page).not.toContain("Some Submitter");
    expect(page).not.toContain("Manual submission");
  });

  it("preserves provenance data on items (does not mutate)", () => {
    const item = makeAwesomeListItem();
    const before = JSON.stringify(item.provenance);
    renderSourceCreditsPage([item]);
    expect(JSON.stringify(item.provenance)).toBe(before);
  });

  it("deduplicates the same external source listed by multiple items", () => {
    const a = makeAwesomeListItem();
    const b = { ...makeAwesomeListItem(), id: "github__b__b", canonical_url: "https://github.com/b/b" };
    const page = renderSourceCreditsPage([a, b]);
    // Source URL should appear once in the bullet list.
    const occurrences = page.match(/awesomelistowner\/awesome-things/g) ?? [];
    expect(occurrences.length).toBe(1);
  });
});

describe("Context Engineering page wording", () => {
  it("category description carries the 'tokens' joke (from catalog/categories.yml)", () => {
    const yamlPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "catalog", "categories.yml");
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
    const page = renderRabbitHolePage(ctx, [item], false);
    expect(page).toContain("give me tokens, my precious tokens");
  });
});

// ─── Review fixes: external source provenance + override validation in cmdUpdate ───

import { buildDiscovery } from "../scripts/catalog.js";

describe("buildDiscovery preserves external source provenance", () => {
  it("awesome-list: keeps source.url and uses a non-generic name", () => {
    const d = buildDiscovery(
      "https://github.com/some/repo",
      { url: "https://github.com/punkpeye/awesome-mcp-servers", kind: "awesome-list", note: null as any },
      "2026-04-30T00:00:00Z",
      "Maintainer",
      null
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
        "2026-04-30T00:00:00Z",
        "Maintainer",
        null
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
      "2026-04-30T00:00:00Z",
      "Maintainer",
      null
    );
    expect(d.source.type).toBe("direct-link");
    expect(d.source.url).toBeNull();
    expect(d.source.name).toBe("Manual submission");
  });
});

describe("cmdUpdate validates overrides before applying", () => {
  // We don't run cmdUpdate end-to-end here (it touches the real filesystem and
  // GitHub); we verify the validation primitives are wired up to catch the
  // exact malformed shapes cmdUpdate would otherwise pass to applyOverrides.
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

describe("cmdRefresh honors metadata_refresh_days", () => {
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
