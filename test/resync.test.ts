import { describe, expect, it } from "vitest";
import { runResync, selectResyncItems } from "../scripts/catalog/resync.js";
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
        created_at: null,
        pushed_at: null,
        description: "A tool",
        homepage: null,
        topics: ["mcp"],
        last_checked_at: null,
      },
    },
    insights: { summary: null, why_it_matters: null, mental_damage: null, tags: [], confidence: null },
    curation: { status: "pending", reason: null, evidence: [] },
    placement: { primary_category: null, section: null },
    lifecycle: { status: "incubating" },
    processing: {
      discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
      stars: { status: "deferred", updated_at: "2026-05-01T00:00:00Z", cause: { type: "github_unavailable", message: "later" } },
      categorize: { status: "pending", updated_at: null },
    },
    ...overrides,
  };
}

describe("selectResyncItems", () => {
  const items = [
    makeItem(),
    makeItem({
      id: "github__example__other",
      name: "other",
      canonical_url: "https://github.com/example/other",
      identity: { github_repo: "example/other" },
      curation: { status: "included", reason: "fits", evidence: ["desc"] },
      processing: {
        discover: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        stars: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
        categorize: { status: "done", updated_at: "2026-05-01T00:00:00Z" },
      },
    }),
  ];

  it("matches by id, url, match text, status, and where expression", () => {
    expect(selectResyncItems(items, { ids: [items[0].id], urls: [], match: [], statuses: [], wheres: [], actions: { discover: false, stars: false, categorize: false } })).toHaveLength(1);
    expect(selectResyncItems(items, { ids: [], urls: [items[1].canonical_url], match: [], statuses: [], wheres: [], actions: { discover: false, stars: false, categorize: false } })).toHaveLength(1);
    expect(selectResyncItems(items, { ids: [], urls: [], match: ["other"], statuses: [], wheres: [], actions: { discover: false, stars: false, categorize: false } })).toHaveLength(1);
    expect(selectResyncItems(items, { ids: [], urls: [], match: [], statuses: ["included"], wheres: [], actions: { discover: false, stars: false, categorize: false } })).toHaveLength(1);
    expect(selectResyncItems(items, { ids: [], urls: [], match: [], statuses: ["deferred"], wheres: [], actions: { discover: false, stars: false, categorize: false } })).toHaveLength(1);
    expect(selectResyncItems(items, { ids: [], urls: [], match: [], statuses: [], wheres: ["processing.stars.status=deferred"], actions: { discover: false, stars: false, categorize: false } })).toHaveLength(1);
  });
});

describe("runResync", () => {
  it("fails safely when no selector is provided", async () => {
    await expect(runResync([])).rejects.toThrow(/requires at least one selector/i);
  });

  it("rejects selector flags that are missing a value", async () => {
    await expect(runResync(["--match", "--categorize"])).rejects.toThrow(/missing value for --match/i);
  });

  it("accepts quoted selector values produced by mise task templating", async () => {
    let matchedSelectedId = false;
    let renderCalled = false;
    let validateCalled = false;

    await runResync([
      "--match",
      '"10web__io"',
      "--categorize",
    ], undefined, {
      loadItems: () => [makeItem({ id: "10web__io", name: "10Web", canonical_url: "https://10web.io", identity: {} })],
      runDiscover: async () => {},
      runStars: async () => {},
      runCategorize: async (_token, options) => {
        matchedSelectedId = options?.itemIds?.has("10web__io") ?? false;
      },
      runRender: () => {
        renderCalled = true;
      },
      runValidate: () => {
        validateCalled = true;
      },
    });

    expect(matchedSelectedId).toBe(true);
    expect(renderCalled).toBe(true);
    expect(validateCalled).toBe(true);
  });

  it("maps --url --discover to provenance source urls instead of item canonical urls", async () => {
    let sawProvenanceSource = false;

    await runResync([
      "--url",
      "https://github.com/anthropics/claude-code",
      "--discover", 
    ], undefined, {
      loadItems: () => [makeItem({
        id: "github__anthropics__claude-code",
        name: "claude-code",
        canonical_url: "https://github.com/anthropics/claude-code",
        identity: { github_repo: "anthropics/claude-code" },
        provenance: {
          discoveries: [
            {
              id: "discovery__github__anthropics__claude-code__awesome-list__bradagi__awesome-cli-coding-agents",
              discovered_at: "2026-05-01T00:00:00Z",
              source: {
                type: "awesome-list",
                name: "bradAGI/awesome-cli-coding-agents",
                url: "https://github.com/bradAGI/awesome-cli-coding-agents",
                repository: "bradAGI/awesome-cli-coding-agents",
              },
              extraction: {
                mode: "parsed",
                section_path: ["Coding Agents"],
                anchor_text: "Claude Code",
                extracted_url: "https://github.com/anthropics/claude-code",
                surrounding_text: "CLI coding agent.",
                confidence: "high",
              },
            },
          ],
        },
      })],
      runDiscover: async (_token, options) => {
        sawProvenanceSource = options?.sourceUrls?.has("https://github.com/bradAGI/awesome-cli-coding-agents") ?? false;
      },
      runStars: async () => {},
      runCategorize: async () => {},
      runRender: () => {},
      runValidate: () => {},
    });

    expect(sawProvenanceSource).toBe(true);
  });

  it("keeps follow-up stars and categorize targets after discover canonicalizes urls", async () => {
    const selectedIdBeforeDiscover = "example__com__tool__";
    const selectedIdAfterDiscover = "example__com__tool";
    let loadCount = 0;
    const starRuns: string[][] = [];
    const categorizeRuns: string[][] = [];

    await runResync([
      "--id",
      selectedIdBeforeDiscover,
      "--discover",
      "--stars",
      "--categorize",
    ], undefined, {
      loadItems: () => {
        loadCount += 1;
        if (loadCount === 1) {
          return [makeItem({
            id: selectedIdBeforeDiscover,
            kind: "website",
            name: "Example Tool",
            canonical_url: "https://Example.com/tool/",
            identity: {},
            provenance: {
              discoveries: [{
                id: "discovery__example__com__tool__awesome-list__example__awesome-tools",
                discovered_at: "2026-05-01T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://Example.com/tool/",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }],
            },
          })];
        }

        return [
          makeItem({
            id: selectedIdBeforeDiscover,
            kind: "website",
            name: "Example Tool",
            canonical_url: "https://Example.com/tool/",
            identity: {},
            provenance: {
              discoveries: [{
                id: "discovery__example__com__tool__awesome-list__example__awesome-tools",
                discovered_at: "2026-05-01T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://Example.com/tool/",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }],
            },
          }),
          makeItem({
            id: "example__com__tool__ref__campaign",
            kind: "website",
            name: "Example Tool",
            canonical_url: "https://example.com/tool/?ref=campaign",
            identity: {},
            provenance: {
              discoveries: [{
                id: "discovery__example__com__tool__ref__campaign__awesome-list__example__awesome-tools",
                discovered_at: "2026-05-01T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://example.com/tool/?ref=campaign",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }],
            },
          }),
          makeItem({
            id: selectedIdAfterDiscover,
            kind: "website",
            name: "Example Tool",
            canonical_url: "https://example.com/tool",
            identity: {},
            provenance: {
              discoveries: [{
                id: "discovery__example__com__tool__awesome-list__example__awesome-tools",
                discovered_at: "2026-05-01T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://example.com/tool",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }, {
                id: "discovery__example__com__tool__legacy__example__awesome-tools",
                discovered_at: "2026-04-30T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://Example.com/tool/",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }],

            },
          }),
        ];


      },
      runDiscover: async () => {},
      runStars: async (_token, options) => {
        starRuns.push([...(options?.itemIds ?? new Set<string>())]);
      },
      runCategorize: async (_token, options) => {
        categorizeRuns.push([...(options?.itemIds ?? new Set<string>())]);
      },
      runRender: () => {},
      runValidate: () => {},
    });

    expect(starRuns).toEqual([[selectedIdAfterDiscover]]);
    expect(categorizeRuns).toEqual([[selectedIdAfterDiscover]]);
  });

  it("keeps the original normalized id when discover only adds stale siblings", async () => {
    const selectedId = "example__com__tool";
    let loadCount = 0;
    const starRuns: string[][] = [];
    const categorizeRuns: string[][] = [];

    await runResync([
      "--id",
      selectedId,
      "--discover",
      "--stars",
      "--categorize",
    ], undefined, {
      loadItems: () => {
        loadCount += 1;
        if (loadCount === 1) {
          return [makeItem({
            id: selectedId,
            kind: "website",
            name: "Example Tool",
            canonical_url: "https://example.com/tool",
            identity: {},
            provenance: {
              discoveries: [{
                id: "discovery__example__com__tool__awesome-list__example__awesome-tools",
                discovered_at: "2026-05-01T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://example.com/tool",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }],
            },
          })];
        }

        return [
          makeItem({
            id: selectedId,
            kind: "website",
            name: "Example Tool",
            canonical_url: "https://example.com/tool",
            identity: {},
            provenance: {
              discoveries: [{
                id: "discovery__example__com__tool__awesome-list__example__awesome-tools",
                discovered_at: "2026-05-01T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://example.com/tool",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }],
            },
          }),
          makeItem({
            id: "example__com__tool__ref__campaign",
            kind: "website",
            name: "Example Tool",
            canonical_url: "https://example.com/tool/?ref=campaign",
            identity: {},
            provenance: {
              discoveries: [{
                id: "discovery__example__com__tool__ref__campaign__awesome-list__example__awesome-tools",
                discovered_at: "2026-05-01T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://example.com/tool/?ref=campaign",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }],
            },
          }),
        ];
      },
      runDiscover: async () => {},
      runStars: async (_token, options) => {
        starRuns.push([...(options?.itemIds ?? new Set<string>())]);
      },
      runCategorize: async (_token, options) => {
        categorizeRuns.push([...(options?.itemIds ?? new Set<string>())]);
      },
      runRender: () => {},
      runValidate: () => {},
    });

    expect(starRuns).toEqual([[selectedId]]);
    expect(categorizeRuns).toEqual([[selectedId]]);
  });

  it("keeps the original id when no normalized successor exists", async () => {
    const selectedId = "example__com__tool__";
    let loadCount = 0;
    const starRuns: string[][] = [];
    const categorizeRuns: string[][] = [];

    await runResync([
      "--id",
      selectedId,
      "--discover",
      "--stars",
      "--categorize",
    ], undefined, {
      loadItems: () => {
        loadCount += 1;
        if (loadCount === 1) {
          return [makeItem({
            id: selectedId,
            kind: "website",
            name: "Example Tool",
            canonical_url: "https://Example.com/tool/",
            identity: {},
            provenance: {
              discoveries: [{
                id: "discovery__example__com__tool__awesome-list__example__awesome-tools",
                discovered_at: "2026-05-01T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://Example.com/tool/",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }],
            },
          })];
        }

        return [
          makeItem({
            id: selectedId,
            kind: "website",
            name: "Example Tool",
            canonical_url: "https://Example.com/tool/",
            identity: {},
            provenance: {
              discoveries: [{
                id: "discovery__example__com__tool__awesome-list__example__awesome-tools",
                discovered_at: "2026-05-01T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://Example.com/tool/",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }],
            },
          }),
          makeItem({
            id: "example__com__tool__ref__campaign",
            kind: "website",
            name: "Example Tool",
            canonical_url: "https://example.com/tool/?ref=campaign",
            identity: {},
            provenance: {
              discoveries: [{
                id: "discovery__example__com__tool__ref__campaign__awesome-list__example__awesome-tools",
                discovered_at: "2026-05-01T00:00:00Z",
                source: {
                  type: "awesome-list",
                  name: "example/awesome-tools",
                  url: "https://github.com/example/awesome-tools",
                  repository: "example/awesome-tools",
                },
                extraction: {
                  mode: "parsed",
                  section_path: ["App Builders"],
                  anchor_text: "Example Tool",
                  extracted_url: "https://example.com/tool/?ref=campaign",
                  surrounding_text: "Prompt-to-app builder.",
                  confidence: "high",
                },
              }],
            },
          }),
        ];
      },
      runDiscover: async () => {},
      runStars: async (_token, options) => {
        starRuns.push([...(options?.itemIds ?? new Set<string>())]);
      },
      runCategorize: async (_token, options) => {
        categorizeRuns.push([...(options?.itemIds ?? new Set<string>())]);
      },
      runRender: () => {},
      runValidate: () => {},
    });

    expect(starRuns).toEqual([[selectedId]]);
    expect(categorizeRuns).toEqual([[selectedId]]);
  });

});
