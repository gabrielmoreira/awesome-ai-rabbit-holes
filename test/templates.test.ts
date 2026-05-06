import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  renderCatalogCategoryPageTemplate,
  renderCatalogInsightPromptTemplate,
  renderCatalogReadmeTemplate,
  resolveCatalogTemplateFileUrl,
} from "../scripts/catalog/templates.js";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TEMPLATE_DIR = path.join(REPO_ROOT, "config", "templates");

describe("catalog templates", () => {
  it("stores each catalog template in its own .njk file", () => {
    expect(fs.existsSync(path.join(TEMPLATE_DIR, "readme.njk"))).toBe(true);
    expect(fs.existsSync(path.join(TEMPLATE_DIR, "category-page.njk"))).toBe(true);
    expect(fs.existsSync(path.join(TEMPLATE_DIR, "categorize-baseline-current.njk"))).toBe(true);
    expect(fs.existsSync(path.join(TEMPLATE_DIR, "categorize-definition.njk"))).toBe(true);
  });

  it("resolves template files from config/templates", () => {
    expect(String(resolveCatalogTemplateFileUrl("readme.njk"))).toMatch(/[\\/]config[\\/]templates[\\/]readme\.njk$/);
    expect(String(resolveCatalogTemplateFileUrl("categorize-definition.njk"))).toMatch(
      /[\\/]config[\\/]templates[\\/]categorize-definition\.njk$/,
    );
  });

  it("starts each template file with a Nunjucks header comment describing purpose and inputs", () => {
    for (const fileName of [
      "readme.njk",
      "category-page.njk",
      "categorize-baseline-current.njk",
      "categorize-definition.njk",
    ]) {
      const template = fs.readFileSync(path.join(TEMPLATE_DIR, fileName), "utf8");
      expect(template.startsWith("{#")).toBe(true);
      expect(template).toContain("Purpose:");
      expect(template).toContain("Executed by:");
      expect(template).toContain("Receives:");
    }
  });

  it("keeps category page branching inline instead of splitting fragments", () => {
    const template = fs.readFileSync(path.join(TEMPLATE_DIR, "category-page.njk"), "utf8");

    expect(template).toContain("{% for item in activeItems %}");
    expect(template).toContain("{% for item in incubatingItems %}");
    expect(template).toContain("{% if item.hasStars %}");
    expect(template).toContain("{% if item.hasActivity %}");
    expect(template).toContain("{% if item.hasDetails %}");
    expect(template).not.toContain("{% include");
    expect(template).not.toContain("{% extends");
  });

  it("uses one shared definition template file gated by includeExamples", () => {
    const template = fs.readFileSync(path.join(TEMPLATE_DIR, "categorize-definition.njk"), "utf8");

    expect(template).toContain("{% if includeExamples %}");
    expect(template).toContain("Contrastive boundary examples:");
  });

  it("keeps the README intro text inside the template file", () => {
    const template = fs.readFileSync(path.join(TEMPLATE_DIR, "readme.njk"), "utf8");

    expect(template).toContain("# Awesome AI Rabbit Holes");
    expect(template).toContain("Come for the tools. Stay for the FOMO");
  });

  it("renders README links from a simple ViewModel", () => {
    const output = renderCatalogReadmeTemplate({
      rabbitHoles: [
        {
          name: "Coding Agents",
          slug: "coding-agents",
          description: "Tools for coding with AI.",
        },
        {
          name: "MCP",
          slug: "mcp",
          description: "Model Context Protocol tooling.",
        },
      ],
    });

    expect(output).toContain("# Awesome AI Rabbit Holes");
    expect(output).toContain("Come for the tools. Stay for the FOMO");
    expect(output).toContain("## Rabbit Holes");
    expect(output).toContain("- [Coding Agents](docs/rabbit-holes/coding-agents.md) — Tools for coding with AI.");
    expect(output).toContain("- [MCP](docs/rabbit-holes/mcp.md) — Model Context Protocol tooling.");
  });

  it("renders category pages with inline stars, activity, and details blocks", () => {
    const output = renderCatalogCategoryPageTemplate({
      categoryName: "Coding Agents",
      categoryDescription: "Tools for coding with AI.",
      hasActiveItems: true,
      activeItems: [
        {
          name: "test-tool",
          url: "https://github.com/example/test-tool",
          summary: "A great tool for teams.",
          hasStars: true,
          starsLabel: "1.2k",
          hasActivity: true,
          activityLabel: "updated ≤30d",
          hasDetails: true,
          hasWhyItMatters: true,
          whyItMatters: "Matters a lot for busy teams.",
          hasMentalDamage: true,
          mentalDamage: "Now your backlog has a boss.",
          hasTags: true,
          tags: ["agents", "kanban"],
        },
        {
          name: "website-only",
          url: "https://example.com/tool",
          summary: "Website-only item.",
          hasStars: false,
          starsLabel: null,
          hasActivity: false,
          activityLabel: null,
          hasDetails: false,
          hasWhyItMatters: false,
          whyItMatters: null,
          hasMentalDamage: false,
          mentalDamage: null,
          hasTags: false,
          tags: [],
        },
      ],
      hasIncubatingItems: true,
      incubatingItems: [
        {
          name: "new-tool",
          url: "https://example.com/new",
          summary: "New tool.",
          hasStars: true,
          starsLabel: "42",
          hasActivity: false,
          activityLabel: null,
          hasDetails: false,
          hasWhyItMatters: false,
          whyItMatters: null,
          hasMentalDamage: false,
          mentalDamage: null,
          hasTags: false,
          tags: [],
        },
      ],
      isEmpty: false,
    });

    expect(output).toBe(
      "# Coding Agents\n\nTools for coding with AI.\n\n## Tools & Resources\n\n- **[test-tool](https://github.com/example/test-tool)** `⭐ 1.2k` `updated ≤30d` A great tool for teams. <details><summary>More about</summary>\n\n  Matters a lot for busy teams.\n\n  _Now your backlog has a boss._\n\n  `agents` `kanban`\n  </details>\n\n- **[website-only](https://example.com/tool)** Website-only item.\n\n## Incubating\n\n_These are new or low-traffic entries being watched._\n\n- **[new-tool](https://example.com/new)** `⭐ 42` New tool.",
    );
  });

  it("renders the empty category fallback branch", () => {
    const output = renderCatalogCategoryPageTemplate({
      categoryName: "MCP",
      categoryDescription: "Model Context Protocol tooling.",
      hasActiveItems: false,
      activeItems: [],
      hasIncubatingItems: false,
      incubatingItems: [],
      isEmpty: true,
    });

    expect(output).toBe(
      "# MCP\n\nModel Context Protocol tooling.\n\n## Nothing Here Yet\n\n_Even the hype forgot to stop here._",
    );
  });

  it("renders the baseline categorization prompt with optional evidence blocks", () => {
    const output = renderCatalogInsightPromptTemplate({
      profile: "baseline-current",
      item: {
        name: "test-tool",
        url: "https://github.com/example/test-tool",
        repoDescription: "A developer-facing AI tool.",
        stars: "1200",
        topics: "ai, agents",
        license: "MIT",
        archived: "no",
        createdAt: "2024-01-01T00:00:00Z",
        pushedAt: "2026-04-01T00:00:00Z",
        homepage: "(none)",
        directAwesomeList: "no",
      },
      categoryLines: [
        "coding-agents | Coding Agents | Tools for coding with AI. | Tools that directly help developers write or review code. | sections: Terminal & CLI Agents",
      ],
      hasSourceContext: true,
      sourceContextLines: ["awesome-list | section: Coding Agents"],
      hasWebsiteContext: true,
      websiteTitle: "Test Tool",
      websiteDescription: "A website summary.",
      hasWebsiteExcerpt: true,
      websiteExcerpt: "Builds things for developers.",
      hasReadmeExcerpt: true,
      readmeExcerpt: "# Test Tool\n\nREADME excerpt.",
    });

    expect(output).toContain("Seen in source lists / directories:");
    expect(output).toContain("awesome-list | section: Coding Agents");
    expect(output).toContain("Scraped site context:");
    expect(output).toContain("Primary page excerpt:");
    expect(output).toContain("README excerpt (markdown, may be truncated):");
    expect(output).toContain("sections: Terminal & CLI Agents");
    expect(output).toContain("choose the single best matching section exactly as written");
    expect(output).toContain('"section": "Terminal & CLI Agents" | null');
    expect(output).not.toContain("Contrastive boundary examples:");
  });

  it("omits optional categorization prompt blocks when the data is absent", () => {
    const output = renderCatalogInsightPromptTemplate({
      profile: "baseline-current",
      item: {
        name: "test-tool",
        url: "https://github.com/example/test-tool",
        repoDescription: "A developer-facing AI tool.",
        stars: "Unknown",
        topics: "None",
        license: "Unknown",
        archived: "unknown",
        createdAt: "Unknown",
        pushedAt: "Unknown",
        homepage: "(none)",
        directAwesomeList: "no",
      },
      categoryLines: ["coding-agents | Coding Agents | Tools for coding with AI. | Tools that directly help developers write or review code."],
      hasSourceContext: false,
      sourceContextLines: [],
      hasWebsiteContext: false,
      websiteTitle: "(none)",
      websiteDescription: "(none)",
      hasWebsiteExcerpt: false,
      websiteExcerpt: "",
      hasReadmeExcerpt: false,
      readmeExcerpt: "",
    });

    expect(output).not.toContain("Seen in source lists / directories:\n-");
    expect(output).not.toContain("Primary page excerpt:\n---");
    expect(output).not.toContain("README excerpt (markdown, may be truncated):\n---");
  });

  it("renders the definition-first prompt without contrastive examples", () => {
    const output = renderCatalogInsightPromptTemplate({
      profile: "definition-first",
      item: {
        name: "test-tool",
        url: "https://github.com/example/test-tool",
        repoDescription: "A developer-facing AI tool.",
        stars: "1200",
        topics: "ai, agents",
        license: "MIT",
        archived: "no",
        createdAt: "2024-01-01T00:00:00Z",
        pushedAt: "2026-04-01T00:00:00Z",
        homepage: "(none)",
        directAwesomeList: "yes",
      },
      categoryLines: [
        "coding-agents | Coding Agents | Tools for coding with AI. | Tools that directly help developers write or review code. | sections: Terminal & CLI Agents",
      ],
      hasSourceContext: false,
      sourceContextLines: [],
      hasWebsiteContext: false,
      websiteTitle: "(none)",
      websiteDescription: "(none)",
      hasWebsiteExcerpt: false,
      websiteExcerpt: "",
      hasReadmeExcerpt: false,
      readmeExcerpt: "",
    });

    expect(output).toContain("Some category lines include 'sections: ...' with the allowed grouping labels for that category.");
    expect(output).toContain('"section": "Terminal & CLI Agents" | null');
    expect(output).not.toContain("Contrastive boundary examples:");
  });

  it("renders the definition-with-examples prompt with stronger boundary examples", () => {
    const output = renderCatalogInsightPromptTemplate({
      profile: "definition-with-examples",
      item: {
        name: "test-tool",
        url: "https://github.com/example/test-tool",
        repoDescription: "A developer-facing AI tool.",
        stars: "1200",
        topics: "ai, agents",
        license: "MIT",
        archived: "no",
        createdAt: "2024-01-01T00:00:00Z",
        pushedAt: "2026-04-01T00:00:00Z",
        homepage: "(none)",
        directAwesomeList: "no",
      },
      categoryLines: [
        "coding-agents | Coding Agents | Tools for coding with AI. | Tools that directly help developers write or review code. | sections: Terminal & CLI Agents",
      ],
      hasSourceContext: false,
      sourceContextLines: [],
      hasWebsiteContext: false,
      websiteTitle: "(none)",
      websiteDescription: "(none)",
      hasWebsiteExcerpt: false,
      websiteExcerpt: "",
      hasReadmeExcerpt: false,
      readmeExcerpt: "",
    });

    expect(output).toContain("Contrastive boundary examples:");
    expect(output).toContain("If the tool is itself a coding assistant");
    expect(output).toContain("gives another assistant/editor access to git, debugger, browser, Figma, or similar host capabilities");
    expect(output).toContain("core novelty is memory, retrieval, compression, or context-shaping infrastructure");
    expect(output).toContain("coordinates multiple agents or runtimes");
    expect(output).toContain("inline code explanation, commenting, or lightweight review inside an IDE plugin");
  });
});
