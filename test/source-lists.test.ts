import { describe, expect, it } from "vitest";
import type { CatalogItem } from "../scripts/types.js";
import {
  buildSourceContextLines,
  buildSourceListDiscoveryCandidates,
  buildSourceListMetadata,
  extractSourceListEntries,
  shouldRefreshSourceListMetadata,
  sourceListMetadataPath,
} from "../scripts/source-lists.js";

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
        anchor_text: "Playwright MCP",
        section_path: ["Browser Automation"],
        surrounding_text: "- [Playwright MCP](https://github.com/example/playwright-mcp) - browser automation",
      },
      {
        extracted_url: "https://github.com/example/db-tool",
        normalized_url: "https://github.com/example/db-tool",
        anchor_text: "DB Tool",
        section_path: ["Databases"],
        surrounding_text: "- [DB Tool](https://github.com/example/db-tool)",
      },
    ]);
  });

  it("builds deterministic source-list metadata and keeps the list purpose", () => {
    const metadata = buildSourceListMetadata({
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

  it("turns source-list metadata into discovery candidates for downstream catalog items", () => {
    const source = {
      url: "https://github.com/punkpeye/awesome-mcp-servers",
      kind: "awesome-list" as const,
      note: "MCP servers.",
    };
    const metadata = buildSourceListMetadata({
      sourceUrl: source.url,
      sourceName: "awesome-mcp-servers",
      fetchedAt: "2026-05-01T00:00:00Z",
      repoDescription: "A curated collection of MCP servers.",
      readme: "# Awesome MCP Servers\n\n## Browser Automation\n- [Playwright MCP](https://github.com/example/playwright-mcp) - browser automation",
    });

    expect(buildSourceListDiscoveryCandidates(source, metadata)).toEqual([
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

  it("uses deterministic cache paths for GitHub source lists", () => {
    expect(sourceListMetadataPath("https://github.com/punkpeye/awesome-mcp-servers")).toMatch(
      /source-lists[\\/]github[\\/]punkpeye[\\/]awesome-mcp-servers\.json$/
    );
  });
});

describe("source list context lines", () => {
  it("turns source-list metadata into prompt context for an item", () => {
    const item = {
      canonical_url: "https://github.com/example/playwright-mcp",
    } as CatalogItem;

    const lines = buildSourceContextLines(item, [
      {
        source_url: "https://github.com/punkpeye/awesome-mcp-servers",
        source_name: "awesome-mcp-servers",
        fetched_at: "2026-05-01T00:00:00Z",
        purpose: "A curated collection of MCP servers.",
        entries: [
          {
            extracted_url: "https://github.com/example/playwright-mcp",
            normalized_url: "https://github.com/example/playwright-mcp",
            anchor_text: "Playwright MCP",
            section_path: ["Browser Automation"],
            surrounding_text: null,
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
            extracted_url: "https://github.com/example/playwright-mcp",
            normalized_url: "https://github.com/example/playwright-mcp",
            anchor_text: "Playwright MCP",
            section_path: ["Integrations"],
            surrounding_text: null,
          },
        ],
      },
    ]);

    expect(lines).toEqual([
      "awesome-mcp-servers | purpose: A curated collection of MCP servers. | section: Browser Automation",
      "awesome-mcp-servers-2 | purpose: Another MCP directory. | section: Integrations",
    ]);
  });
});
