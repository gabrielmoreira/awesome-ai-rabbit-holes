import { describe, expect, it } from "vitest";
import type { CatalogItem, Category } from "../scripts/catalog/types.js";
import { buildSourceContextLines,
buildSourceListDiscoveryCandidates,
buildSourceListMetadata,
chooseRelevantGitHubRepoCandidate,
extractSourceListEntries,
finalizeSourceListMetadata,
shouldRefreshSourceListMetadata,
sourceListMetadataPath,
stripHtmlToTextExcerpt, } from "../scripts/catalog/source-lists.js";

const SOURCE_LIST_CATEGORIES: Category[] = [
  {
    id: "mcp",
    name: "MCP Servers and Tooling",
    slug: "mcp",
    description: "Model Context Protocol servers, clients, and tooling.",
    prompt_instruction: "Model Context Protocol servers, clients, registries, and tooling.",
  },
  {
    id: "coding-agents",
    name: "Coding Agents",
    slug: "coding-agents",
    description: "AI coding assistants and autonomous programming agents.",
    prompt_instruction: "User-facing coding assistants and autonomous coding agents that directly write or review code.",
  },
  {
    id: "ai-ides-editors",
    name: "AI IDEs and Editors",
    slug: "ai-ides-editors",
    description: "Editors and IDEs built around AI assistance.",
    prompt_instruction: "IDEs and editors whose primary product surface is an AI-native development environment.",
  },
];

describe("source list extraction", () => {
  it("extracts entries with section paths, deduplicates repeated links, and skips this repo", () => {
    const readme = `# Awesome MCP Servers

Curated MCP servers.

## Browser Automation
- [Playwright MCP](https://github.com/example/playwright-mcp) - browser automation
- [This Repo](https://github.com/gabrielmoreira/awesome-ai-rabbit-holes) - should skip

## Databases
- [DB Tool](https://github.com/example/db-tool)
- [DB Tool Again](https://github.com/example/db-tool)
`;

    const entries = extractSourceListEntries(
      readme,
      "https://github.com/punkpeye/awesome-mcp-servers"
    );

    expect(entries).toEqual([
      {
        extracted_url: "https://github.com/example/playwright-mcp",
        normalized_url: "https://github.com/example/playwright-mcp",
        canonical_url: "https://github.com/example/playwright-mcp",
        anchor_text: "Playwright MCP",
        section_path: ["Browser Automation"],
        surrounding_text: "- [Playwright MCP](https://github.com/example/playwright-mcp) - browser automation",
        page_title: null,
        page_description: null,
        github_repo_url: null,
      },
      {
        extracted_url: "https://github.com/example/db-tool",
        normalized_url: "https://github.com/example/db-tool",
        canonical_url: "https://github.com/example/db-tool",
        anchor_text: "DB Tool",
        section_path: ["Databases"],
        surrounding_text: "- [DB Tool](https://github.com/example/db-tool)",
        page_title: null,
        page_description: null,
        github_repo_url: null,
      },
    ]);
  });

  it("treats linked headings as primary catalog entries and ignores their secondary links", () => {
    const readme = `# Awesome AI Agents

## [Taxy AI](https://github.com/TaxyAI/browser-extension)
Browser automation with GPT.

### Links
- [Waitlist](https://docs.google.com/forms/d/e/example/viewform)
![Image](https://camo.githubusercontent.com/hash/68747470733a2f2f6578616d706c652e636f6d2f696d6167652e706e67)
`;

    expect(extractSourceListEntries(readme, "https://github.com/e2b-dev/awesome-ai-agents")).toEqual([
      {
        extracted_url: "https://github.com/taxyai/browser-extension",
        normalized_url: "https://github.com/taxyai/browser-extension",
        canonical_url: "https://github.com/taxyai/browser-extension",
        anchor_text: "Taxy AI",
        section_path: ["Taxy AI"],
        surrounding_text: "## [Taxy AI](https://github.com/TaxyAI/browser-extension)",
        page_title: null,
        page_description: null,
        github_repo_url: null,
      },
    ]);
  });

  it("skips low-signal source-list URLs that are not catalog tools", () => {
    const readme = `# Directory

- [Waitlist](https://docs.google.com/forms/d/e/example/viewform)
- [Paper](https://arxiv.org/abs/2303.17580)
- [Screenshot](https://assets.example.com/logo.png)
- ![Architecture](https://camo.githubusercontent.com/hash/68747470733a2f2f6578616d706c652e636f6d2f617263682e706e67)
- [Actual Tool](https://github.com/example/tool)
`;

    expect(extractSourceListEntries(readme, "https://github.com/example/list").map((entry) => entry.canonical_url)).toEqual([
      "https://github.com/example/tool",
    ]);
  });


  it("builds deterministic source-list metadata and keeps the list purpose", async () => {
    const metadata = await buildSourceListMetadata({
      sourceUrl: "https://github.com/punkpeye/awesome-mcp-servers",
      sourceName: "awesome-mcp-servers",
      fetchedAt: "2026-05-01T00:00:00Z",
      repoDescription: "A curated collection of MCP servers.",
      readme: "# Awesome MCP Servers\n\nA curated collection of MCP servers.\n\n## Browser Automation\n- [Playwright MCP](https://github.com/example/playwright-mcp)",
    });

    expect(metadata.source_url).toBe("https://github.com/punkpeye/awesome-mcp-servers");
    expect(metadata.fetched_at).toBe("2026-05-01T00:00:00Z");
    expect(metadata.purpose).toBe("A curated collection of MCP servers.");
    expect(metadata.entries).toHaveLength(1);
  });

  it("resolves a non-GitHub tool page to the linked GitHub repo when scraping finds one", async () => {
    const metadata = await buildSourceListMetadata(
      {
        sourceUrl: "https://github.com/ai-for-developers/awesome-ai-coding-tools",
        sourceName: "awesome-ai-coding-tools",
        fetchedAt: "2026-05-01T00:00:00Z",
        repoDescription: "A curated list of AI coding tools.",
        readme: "# Awesome AI Coding Tools\n\n## Code Editors\n- [Continue](https://continue.dev/) - Open-source AI coding assistant",
      },
      async (url) => ({
        fetched_at: "2026-05-01T00:00:00Z",
        final_url: url,
        canonical_url: url,
        github_repo_url: "https://github.com/continuedev/continue",
        title: "Continue",
        description: "Open-source AI tool for code completion and chat.",
        excerpt: "Continue brings open-source AI coding assistance to editors.",
      })
    );

    expect(metadata.entries).toEqual([
      {
        extracted_url: "https://continue.dev",
        normalized_url: "https://continue.dev",
        canonical_url: "https://github.com/continuedev/continue",
        anchor_text: "Continue",
        section_path: ["Code Editors"],
        surrounding_text: "- [Continue](https://continue.dev/) - Open-source AI coding assistant",
        page_title: "Continue",
        page_description: "Open-source AI tool for code completion and chat.",
        github_repo_url: "https://github.com/continuedev/continue",
      },
    ]);
  });

  it("keeps a non-GitHub tool page canonical when scraping finds no GitHub repo", async () => {
    const metadata = await buildSourceListMetadata(
      {
        sourceUrl: "https://github.com/ai-for-developers/awesome-ai-coding-tools",
        sourceName: "awesome-ai-coding-tools",
        fetchedAt: "2026-05-01T00:00:00Z",
        repoDescription: "A curated list of AI coding tools.",
        readme: "# Awesome AI Coding Tools\n\n## Editors\n- [Cursor](https://www.cursor.sh/) - AI code editor",
      },
      async (url) => ({
        fetched_at: "2026-05-01T00:00:00Z",
        final_url: url,
        canonical_url: url,
        github_repo_url: null,
        title: "Cursor",
        description: "AI-first code editor.",
        excerpt: "Cursor is an AI-first code editor.",
      })
    );

    expect(metadata.entries).toEqual([
      {
        extracted_url: "https://www.cursor.sh",
        normalized_url: "https://www.cursor.sh",
        canonical_url: "https://www.cursor.sh",
        anchor_text: "Cursor",
        section_path: ["Editors"],
        surrounding_text: "- [Cursor](https://www.cursor.sh/) - AI code editor",
        page_title: "Cursor",
        page_description: "AI-first code editor.",
        github_repo_url: null,
      },
    ]);
  });

  it("keeps website canonical and carries canonicalization ambiguity forward when no confident repo can be selected", async () => {
    const source = {
      url: "https://github.com/ai-for-developers/awesome-ai-coding-tools",
      kind: "curated-list" as const,
      note: "AI coding tools.",
    };
    const metadata = await buildSourceListMetadata(
      {
        sourceUrl: source.url,
        sourceName: "awesome-ai-coding-tools",
        fetchedAt: "2026-05-01T00:00:00Z",
        repoDescription: "A curated list of AI coding tools.",
        readme: "# Awesome AI Coding Tools\n\n## Editors\n- [Mystery Tool](https://mystery-tool.dev/) - AI editor",
      },
      async (url) => ({
        fetched_at: "2026-05-01T00:00:00Z",
        final_url: url,
        canonical_url: url,
        github_repo_url: null,
        canonicalization_cause: {
          type: "ambiguous_canonicalization",
          message: "Kept the website URL because multiple GitHub repository links were present and no confident canonical match could be selected.",
        },
        title: "Mystery Tool",
        description: "AI editor.",
        excerpt: "Mystery Tool helps with coding.",
      })
    );

    expect(metadata.entries[0]?.canonicalization_cause).toEqual({
      type: "ambiguous_canonicalization",
      message: "Kept the website URL because multiple GitHub repository links were present and no confident canonical match could be selected.",
    });
    expect(buildSourceListDiscoveryCandidates(source, metadata, SOURCE_LIST_CATEGORIES)[0]?.canonicalization_cause?.type).toBe("ambiguous_canonicalization");
    expect(buildSourceListDiscoveryCandidates(source, metadata, SOURCE_LIST_CATEGORIES)[0]?.target_url).toBe("https://mystery-tool.dev");
    expect(buildSourceListDiscoveryCandidates(source, metadata, SOURCE_LIST_CATEGORIES)[0]?.matched_category_ids).toContain("coding-agents");
  });

  it("keeps extracted website urls in candidates while carrying canonical hints", async () => {
    const source = {
      url: "https://github.com/ai-for-developers/awesome-ai-coding-tools",
      kind: "curated-list" as const,
      note: "AI IDEs and editors.",
    };
    const metadata = await buildSourceListMetadata(
      {
        sourceUrl: source.url,
        sourceName: "awesome-ai-coding-tools",
        fetchedAt: "2026-05-01T00:00:00Z",
        repoDescription: "A curated list of AI coding tools.",
        readme: "# Awesome AI Coding Tools\n\n## Code Editors\n- [Continue](https://continue.dev/) - Open-source AI coding assistant",
      },
      async (url) => ({
        fetched_at: "2026-05-01T00:00:00Z",
        final_url: url,
        canonical_url: url,
        github_repo_url: "https://github.com/continuedev/continue",
        title: "Continue",
        description: "Open-source AI tool for code completion and chat.",
        excerpt: "Continue brings open-source AI coding assistance to editors.",
      })
    );

    const candidates = buildSourceListDiscoveryCandidates(source, metadata, SOURCE_LIST_CATEGORIES);

    expect(candidates).toHaveLength(1);
    expect(candidates[0]).toMatchObject({
      target_url: "https://continue.dev",
      canonical_url_hint: "https://github.com/continuedev/continue",
    });
    expect(candidates[0]?.matched_category_ids).toContain("ai-ides-editors");
  });

  it("filters curated-list entries without category evidence", () => {
    const source = {
      url: "https://github.com/example/list",
      kind: "curated-list" as const,
      note: "Generic resources.",
    };
    const metadata = {
      source_url: source.url,
      source_name: "example-list",
      fetched_at: "2026-05-01T00:00:00Z",
      purpose: "Generic links and references.",
      entries: [
        {
          extracted_url: "https://github.com/example/tool",
          normalized_url: "https://github.com/example/tool",
          canonical_url: "https://github.com/example/tool",
          anchor_text: "Tool",
          section_path: ["Resources"],
          surrounding_text: "- [Tool](https://github.com/example/tool)",
          page_title: null,
          page_description: null,
          github_repo_url: null,
        },
      ],
    };

    expect(buildSourceListDiscoveryCandidates(source, metadata, SOURCE_LIST_CATEGORIES)).toEqual([]);
  });
  it("turns source-list metadata into discovery candidates for downstream catalog items", async () => {
    const source = {
      url: "https://github.com/punkpeye/awesome-mcp-servers",
      kind: "curated-list" as const,
      note: "MCP servers.",
    };
    const metadata = await buildSourceListMetadata({
      sourceUrl: source.url,
      sourceName: "awesome-mcp-servers",
      fetchedAt: "2026-05-01T00:00:00Z",
      repoDescription: "A curated collection of MCP servers.",
      readme: "# Awesome MCP Servers\n\n## Browser Automation\n- [Playwright MCP](https://github.com/example/playwright-mcp) - browser automation",
    });

    expect(buildSourceListDiscoveryCandidates(source, metadata, SOURCE_LIST_CATEGORIES)).toEqual([
      {
        target_url: "https://github.com/example/playwright-mcp",
        source,
        extraction: {
          mode: "parsed",
          section_path: ["Browser Automation"],
          anchor_text: "Playwright MCP",
          extracted_url: "https://github.com/example/playwright-mcp",
          surrounding_text: "- [Playwright MCP](https://github.com/example/playwright-mcp) - browser automation",
          confidence: "high",
        },
        matched_category_ids: ["mcp"],
      },
    ]);
  });

  it("invalidates source-list cache entries after 30 minutes", () => {
    const metadata = {
      source_url: "https://github.com/punkpeye/awesome-mcp-servers",
      source_name: "awesome-mcp-servers",
      fetched_at: "2026-05-01T00:00:00Z",
      purpose: "A curated collection of MCP servers.",
      entries: [],
    };

    expect(
      shouldRefreshSourceListMetadata(metadata, new Date("2026-05-01T00:29:59Z"))
    ).toBe(false);
    expect(
      shouldRefreshSourceListMetadata(metadata, new Date("2026-05-01T00:30:00Z"))
    ).toBe(true);
    expect(shouldRefreshSourceListMetadata(null, new Date("2026-05-01T00:00:00Z"))).toBe(true);
  });

  it("strips website HTML into at most the first 400 text lines for prompt context", () => {
    const html = `<html><head><title>Ignored</title><script>hidden()</script></head><body>${Array.from(
      { length: 450 },
      (_, index) => `<p>visible line ${index + 1}</p>`,
    ).join("\n")}</body></html>`;

    const excerpt = stripHtmlToTextExcerpt(html);

    expect(excerpt).toContain("visible line 400");
    expect(excerpt).not.toContain("visible line 401");
    expect(excerpt).not.toContain("hidden()");
  });


  it("uses deterministic cache paths for GitHub source lists", () => {
    expect(sourceListMetadataPath("https://github.com/punkpeye/awesome-mcp-servers")).toMatch(
      /source-lists[\\/]github[\\/]punkpeye[\\/]awesome-mcp-servers\.json$/
    );
  });

  it("keeps the previous source-list metadata when a refresh fetch fails", () => {
    const cached = {
      source_url: "https://github.com/punkpeye/awesome-mcp-servers",
      source_name: "awesome-mcp-servers",
      fetched_at: "2026-05-01T00:00:00Z",
      purpose: "A curated collection of MCP servers.",
      entries: [
        {
          extracted_url: "https://github.com/example/playwright-mcp",
          normalized_url: "https://github.com/example/playwright-mcp",
          canonical_url: "https://github.com/example/playwright-mcp",
          anchor_text: "Playwright MCP",
          section_path: ["Browser Automation"],
          surrounding_text: null,
          page_title: null,
          page_description: null,
          github_repo_url: null,
        },
      ],
    };
    const refreshed = {
      ...cached,
      fetched_at: "2026-05-02T00:00:00Z",
      entries: [],
    };

    expect(
      finalizeSourceListMetadata(cached, refreshed, { preserveCachedEntries: true })
    ).toEqual({ ...cached, fetched_at: refreshed.fetched_at });
    expect(
      finalizeSourceListMetadata(cached, refreshed, { preserveCachedEntries: false })
    ).toEqual(refreshed);
    expect(
      finalizeSourceListMetadata(null, refreshed, { preserveCachedEntries: true })
    ).toBeNull();
    expect(
      finalizeSourceListMetadata(null, { ...cached, fetched_at: refreshed.fetched_at }, { preserveCachedEntries: true })
    ).toEqual({ ...cached, fetched_at: refreshed.fetched_at });
});

});

describe("GitHub canonical choice heuristics", () => {
  it("rejects unrelated GitHub repos from directory or newsletter pages", () => {
    expect(
      chooseRelevantGitHubRepoCandidate(
        [
          { url: "https://github.com/paul-gauthier/aider", score: 0 },
          { url: "https://github.com/ai-for-developers/awesome-ai-coding-tools", score: 100 },
        ],
        ["https://aifordevelopers.org", "https://aifordevelopers.org", "AI For Developers"]
      )
    ).toBeNull();
  });

  it("rejects generic docs repos for product documentation pages", () => {
    expect(
      chooseRelevantGitHubRepoCandidate(
        [{ url: "https://github.com/sourcegraph/docs", score: 100 }],
        ["https://about.sourcegraph.com/cody", "https://about.sourcegraph.com/cody", "Cody - Sourcegraph Docs"]
      )
    ).toBeNull();
  });

  it("accepts repo matches that line up with the site identity", () => {
    expect(
      chooseRelevantGitHubRepoCandidate(
        [{ url: "https://github.com/zed-industries/zed", score: 40 }],
        ["https://zed.dev", "https://zed.dev", "Zed"]
      )
    ).toBe("https://github.com/zed-industries/zed");
  });
});

describe("source list context lines", () => {
  it("turns source-list metadata into prompt context for an item", () => {
    const item = {
      canonical_url: "https://github.com/continuedev/continue",
    } as CatalogItem;

    const lines = buildSourceContextLines(item, [
      {
        source_url: "https://github.com/punkpeye/awesome-mcp-servers",
        source_name: "awesome-mcp-servers",
        fetched_at: "2026-05-01T00:00:00Z",
        purpose: "A curated collection of MCP servers.",
        entries: [
          {
            extracted_url: "https://continue.dev",
            normalized_url: "https://continue.dev",
            canonical_url: "https://github.com/continuedev/continue",
            anchor_text: "Continue",
            section_path: ["Browser Automation"],
            surrounding_text: null,
            page_title: "Continue",
            page_description: "Open-source AI tool for code completion and chat.",
            github_repo_url: "https://github.com/continuedev/continue",
          },
        ],
      },
      {
        source_url: "https://github.com/wong2/awesome-mcp-servers",
        source_name: "awesome-mcp-servers-2",
        fetched_at: "2026-05-01T00:00:00Z",
        purpose: "Another MCP directory.",
        entries: [
          {
            extracted_url: "https://github.com/continuedev/continue",
            normalized_url: "https://github.com/continuedev/continue",
            canonical_url: "https://github.com/continuedev/continue",
            anchor_text: "Continue",
            section_path: ["Integrations"],
            surrounding_text: null,
            page_title: null,
            page_description: null,
            github_repo_url: null,
          },
        ],
      },
    ]);

    expect(lines).toEqual([
      "awesome-mcp-servers | purpose: A curated collection of MCP servers. | section: Browser Automation | linked page: Open-source AI tool for code completion and chat.",
      "awesome-mcp-servers-2 | purpose: Another MCP directory. | section: Integrations",
    ]);
  });
});
