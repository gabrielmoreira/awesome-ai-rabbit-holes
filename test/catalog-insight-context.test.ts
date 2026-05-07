import { describe, expect, it } from "vitest";
import { buildCatalogInsightPrompt } from "../scripts/catalog/insight-context.js";
import type { CatalogItem, Category } from "../scripts/catalog/types.js";

const CATEGORIES: Category[] = [
  {
    id: "coding-agents",
    name: "Coding Agents",
    slug: "coding-agents",
    description: "Tools for coding with AI.",
    prompt: {
      instructions: "Tools that directly help developers write or review code.",
      use_when: ["The product itself is the coding assistant."],
      do_not_use_when: ["It mainly augments another assistant."],
      canonical_positives: ["Claude Code"],
      common_false_positives: ["Cursor"],
    },
    sections: ["Terminal & CLI Agents"],
  },
];

function makeGitHubItem(overrides: Partial<CatalogItem> = {}): CatalogItem {
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
          discovered_at: "2026-05-01T00:00:00Z",
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
        stars: 1200,
        forks: 10,
        license: "MIT",
        archived: false,
        created_at: "2024-01-01T00:00:00Z",
        pushed_at: "2026-04-01T00:00:00Z",
        description: "A developer-facing AI tool.",
        homepage: null,
        topics: ["ai", "agents"],
        last_checked_at: null,
      } as any,
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
    lifecycle: { status: "incubating" },
    processing: {},
    ...overrides,
  } as CatalogItem;
}

function makeWebsiteItem(overrides: Partial<CatalogItem> = {}): CatalogItem {
  return makeGitHubItem({
    id: "example__com",
    kind: "website",
    name: "example.com",
    canonical_url: "https://example.com",
    identity: {},
    ...overrides,
  });
}

describe("buildCatalogInsightPrompt", () => {
  it("loads shared readme and source context for repo items", () => {
    let readmeLookup: [string, string] | null = null;
    const prompt = buildCatalogInsightPrompt(makeGitHubItem(), CATEGORIES, {
      deps: {
        readReadmeFromCache: (owner, repo) => {
          readmeLookup = [owner, repo];
          return "# Test README\n\nDoes coding-agent things.";
        },
        loadSourceContextLinesForItem: () => ["awesome-list | section: Coding Agents"],
        readWebsiteLinkResolution: () => null,
      },
    });

    expect(readmeLookup).toEqual(["testowner", "test-repo"]);
    expect(prompt).toContain("README excerpt (markdown");
    expect(prompt).toContain("Does coding-agent things.");
    expect(prompt).toContain("awesome-list | section: Coding Agents");
    expect(prompt).toContain("canonical_positives");
  });

  it("loads shared website context for website items", () => {
    const prompt = buildCatalogInsightPrompt(makeWebsiteItem(), CATEGORIES, {
      deps: {
        readReadmeFromCache: () => {
          throw new Error("website prompts should not load README cache");
        },
        loadSourceContextLinesForItem: () => [],
        readWebsiteLinkResolution: () => ({
          url: "https://example.com",
          final_url: "https://example.com",
          title: "Example App Builder",
          description: "Prompt-to-app product",
          excerpt: "Build internal tools from prompts.",
          canonical_url: null,
          fetched_at: "2026-05-04T00:00:00Z",
        }),
      },
    });

    expect(prompt).toContain("Scraped site context:");
    expect(prompt).toContain("Example App Builder");
    expect(prompt).toContain("Build internal tools from prompts.");
  });
});
