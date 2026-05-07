import { describe, expect, it } from "vitest";
import {
  applyAIInsights,
  buildNewCatalogItem,
  markExcludedItemsPending,
  needsAIInsights,
} from "../scripts/catalog.js";
import { buildInsightPrompt, parseAIInsightResponse } from "../scripts/catalog/categorize-prompt.js"
import { renderRabbitHolePage, renderSiteCatalog } from "../scripts/catalog/render.js";
import type { CatalogItem, Category } from "../scripts/catalog/types.js"

const CATEGORIES: Category[] = [
  {
    id: "coding-agents",
    name: "Coding Agents",
    slug: "coding-agents",
    description: "Tools for coding with AI.",
    prompt: {
      instructions: "Tools for coding with AI.",
      use_when: ["The product directly writes or reviews code."],
      do_not_use_when: ["It mainly augments another assistant."],
      canonical_positives: ["Claude Code"],
      common_false_positives: ["Cursor"],
    },
    sections: ["Terminal & CLI Agents", "IDE-Native Assistants"],
  },
  {
    id: "ai-dev-extensions",
    name: "AI Developer Extensions",
    slug: "ai-dev-extensions",
    description: "Add-ons, memory layers, and workflow boosters for AI developer tools.",
    prompt: {
      instructions: "Extensions that augment another assistant.",
      use_when: ["The product adds memory, QA, or workflow capabilities to another assistant."],
      do_not_use_when: ["The product itself is the main coding assistant."],
      canonical_positives: ["Git AI"],
      common_false_positives: ["Claude Code"],
    },
    sections: ["Memory & Context Add-ons", "IDE / UI / Workflow Add-ons"],
  },
  {
    id: "skills",
    name: "AI Developer Skills",
    slug: "skills",
    description: "Reusable skill packs, command packs, and skill directories for AI developer tools.",
    prompt: {
      instructions: "Reusable skill packs and skill directories.",
      use_when: ["The primary artifact is the skill content itself."],
      do_not_use_when: ["The stronger identity is a broader platform or workflow system."],
      canonical_positives: ["anthropics/skills"],
      common_false_positives: ["cc-sdd"],
    },
    sections: ["Skill Packs & Libraries", "Skill Registries & Directories"],
  },
  {
    id: "mcp",
    name: "MCP Servers",
    slug: "mcp",
    description: "MCP tooling.",
    prompt: {
      instructions: "MCP must be the product identity.",
      use_when: ["The product itself is MCP infrastructure."],
      do_not_use_when: ["MCP is just a compatibility layer."],
      canonical_positives: ["playwright-mcp"],
      common_false_positives: ["apisix"],
    },
  },
  {
    id: "awesome-awesomes",
    name: "Awesome Awesomes",
    slug: "awesome-awesomes",
    description: "Curated maps and directories for navigating AI tooling.",
    prompt: {
      instructions: "Curated directories and indexes rather than individual tools.",
      use_when: ["The main value is navigation or discovery."],
      do_not_use_when: ["The product itself is a standalone tool."],
      canonical_positives: ["awesome-ai-agents"],
      common_false_positives: ["Chip Huyen"],
    },
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
      summary: "A developer-facing AI tool.",
      why_it_matters: "It helps developers ship faster.",
      mental_damage: "Another workflow to evaluate.",
      tags: ["coding-agent"],
      confidence: "high",
    },
    curation: {
      status: "included",
      reason: "Fits developer tooling and belongs in coding agents.",
      evidence: ["Repo description says it is a developer-facing AI tool."],
    } as any,
    placement: { primary_category: "coding-agents", section: null },
    lifecycle: { status: "curated" },
    ...overrides,
  } as CatalogItem;
}

describe("AI curation prompt", () => {
  it("includes credibility signals, structured category definitions, and evidence fields", () => {
    const prompt = buildInsightPrompt({
      item: makeItem(),
      categories: [CATEGORIES[0]!, CATEGORIES[3]!],
      source_contexts: [
        "awesome-mcp-servers | purpose: curated MCP servers | section: Browser Automation",
      ],
    });

    expect(prompt).toContain("Created at: 2024-01-01T00:00:00Z");
    expect(prompt).toContain("Coding Agents");
    expect(prompt).toContain("awesome-mcp-servers");
    expect(prompt).toContain("should_include");
    expect(prompt).toContain("decision_reason");
    expect(prompt).toContain("decision_evidence");
    expect(prompt).toContain('"section"');
    expect(prompt).toContain("instructions:");
    expect(prompt).toContain("canonical_positives:");
    expect(prompt).toContain("common_false_positives:");
    expect(prompt).toContain("contrastive_reason");
    expect(prompt).toMatch(/Primary product identity beats integration identity/i);
  });

  it("tells the model not to overreact to shutdown banners and to keep source lists discoverable", () => {
    const prompt = buildInsightPrompt({
      item: makeItem({
        name: "awesome-ai-agents",
        provenance: {
          discoveries: [
            {
              id: "discovery__github__e2b-dev__awesome-ai-agents__awesome-list__e2b-dev__awesome-ai-agents",
              discovered_at: "2026-05-01T00:00:00Z",
              source: {
                type: "awesome-list",
                name: "e2b-dev/awesome-ai-agents",
                url: "https://github.com/e2b-dev/awesome-ai-agents",
                repository: "e2b-dev/awesome-ai-agents",
              },
              extraction: {
                mode: "direct",
                section_path: ["inbox"],
                anchor_text: "https://github.com/e2b-dev/awesome-ai-agents",
                extracted_url: "https://github.com/e2b-dev/awesome-ai-agents",
                surrounding_text: "AI agents broadly, with a developer-tooling lean.",
                confidence: "high",
              },
            },
          ],
        } as any,
      }),
      categories: [CATEGORIES[4]!],
    });

    expect(prompt).toContain("Direct awesome list source: yes");
    expect(prompt).toMatch(/shutdown\/sunsetting banner alone is not enough/i);
    expect(prompt).toMatch(/prefer include under `awesome-awesomes`/i);
  });

  it("renders structured sections for categories that define them", () => {
    const prompt = buildInsightPrompt({
      item: makeItem(),
      categories: [CATEGORIES[2]!],
    });

    expect(prompt).toContain("sections:");
    expect(prompt).toContain("Skill Packs & Libraries");
    expect(prompt).toContain("Skill Registries & Directories");
  });

  it("parses inclusion decisions with evidence and optional sections", () => {
    const result = parseAIInsightResponse(JSON.stringify({
      summary: "A coding agent.",
      why_it_matters: "It helps developers.",
      mental_damage: "Another workflow to evaluate.",
      tags: ["coding-agent"],
      should_include: true,
      primary_category: "coding-agents",
      section: "Terminal & CLI Agents",
      decision_reason: "Fits developer tooling and belongs in coding agents.",
      decision_evidence: [
        "Repo description says it is a developer-facing AI tool.",
        "Recent activity shows it is still maintained.",
      ],
      category_candidates: ["coding-agents", "ai-dev-extensions"],
      contrastive_reason: "Choose coding-agents over ai-dev-extensions because it directly handles repo work rather than augmenting another assistant.",
      confidence: "high",
    }));

    expect((result as any).should_include).toBe(true);
    expect((result as any).primary_category).toBe("coding-agents");
    expect((result as any).section).toBe("Terminal & CLI Agents");
    expect((result as any).decision_reason).toContain("coding agents");
    expect((result as any).decision_evidence).toHaveLength(2);
  });
});

describe("persistent AI curation", () => {
  it("starts new items in a pending curation state", () => {
    const item = buildNewCatalogItem(
      "https://github.com/foo/bar",
      { url: "https://github.com/foo/bar" },
      "2026-05-01T00:00:00Z"
    );

    expect((item as any).curation).toEqual({ status: "pending", reason: null, evidence: [] });
  });

  it("treats missing stored curation decisions as needing AI", () => {
    const pending = makeItem({ curation: { status: "pending", reason: null, evidence: [] } as any } as any);
    expect(needsAIInsights(pending)).toBe(true);
    expect(needsAIInsights(makeItem())).toBe(false);
  });

  it("stores include decisions, evidence, chosen categories, and valid sections", () => {
    const result = applyAIInsights(
      makeItem({ curation: { status: "pending", reason: null, evidence: [] } as any } as any),
      {
        summary: "A CLI coding agent.",
        why_it_matters: "It helps developers ship faster.",
        mental_damage: "Another workflow to evaluate.",
        tags: ["coding-agent"],
        should_include: true,
        primary_category: "coding-agents",
        section: "Terminal & CLI Agents",
        decision_reason: "Fits developer tooling and belongs in coding agents.",
        decision_evidence: ["Repo description says it is a developer-facing AI tool."],
        category_candidates: ["coding-agents", "ai-dev-extensions"],
        contrastive_reason: "Choose coding-agents over ai-dev-extensions because it directly handles repo work rather than augmenting another assistant.",
        confidence: "high",
      } as any,
      CATEGORIES,
      { forceCategory: true },
    );

    expect((result as any).curation.status).toBe("included");
    expect((result as any).curation.reason).toContain("coding agents");
    expect((result as any).curation.evidence).toEqual([
      "Repo description says it is a developer-facing AI tool.",
    ]);
    expect(result.placement.primary_category).toBe("coding-agents");
    expect(result.placement.section).toBe("Terminal & CLI Agents");
  });

  it("stores skills category decisions with valid skills sections", () => {
    const result = applyAIInsights(
      makeItem({ curation: { status: "pending", reason: null, evidence: [] } as any } as any),
      {
        summary: "A reusable AI developer skill pack.",
        why_it_matters: "It helps developers install a packaged workflow quickly.",
        mental_damage: "Now the prompt has a plugin ecosystem.",
        tags: ["skills"],
        should_include: true,
        primary_category: "skills",
        section: "Skill Packs & Libraries",
        decision_reason: "The primary artifact is a reusable skill pack rather than a broader extension product.",
        decision_evidence: ["The source describes a reusable skills pack for AI developer tools."],
        category_candidates: ["skills", "ai-dev-extensions"],
        contrastive_reason: "Choose skills over ai-dev-extensions because the distributed artifact is the reusable skill pack itself, not a host integration layer.",
        confidence: "high",
      } as any,
      CATEGORIES,
      { forceCategory: true },
    );

    expect(result.placement.primary_category).toBe("skills");
    expect(result.placement.section).toBe("Skill Packs & Libraries");
    expect(result.curation.status).toBe("included");
  });

  it("drops invalid section labels instead of persisting made-up buckets", () => {
    const result = applyAIInsights(
      makeItem({ curation: { status: "pending", reason: null, evidence: [] } as any } as any),
      {
        summary: "A coding agent.",
        why_it_matters: "It helps developers ship faster.",
        mental_damage: "Another workflow to evaluate.",
        tags: ["coding-agent"],
        should_include: true,
        primary_category: "coding-agents",
        section: "Made Up Section",
        decision_reason: "Fits developer tooling and belongs in coding agents.",
        decision_evidence: ["Repo description says it is a developer-facing AI tool."],
        category_candidates: ["coding-agents", "ai-dev-extensions"],
        contrastive_reason: "Choose coding-agents over ai-dev-extensions because it directly handles repo work rather than augmenting another assistant.",
        confidence: "high",
      } as any,
      CATEGORIES,
      { forceCategory: true },
    );

    expect(result.placement.primary_category).toBe("coding-agents");
    expect(result.placement.section).toBeNull();
  });

  it("keeps an existing section when the response omits section entirely", () => {
    const result = applyAIInsights(
      makeItem({
        curation: { status: "pending", reason: null, evidence: [] } as any,
        placement: { primary_category: "coding-agents", section: "IDE-Native Assistants" },
      } as any),
      {
        summary: "A coding agent.",
        why_it_matters: "It helps developers ship faster.",
        mental_damage: "Another workflow to evaluate.",
        tags: ["coding-agent"],
        should_include: true,
        primary_category: "coding-agents",
        decision_reason: "Fits developer tooling and belongs in coding agents.",
        decision_evidence: ["Repo description says it is a developer-facing AI tool."],
        category_candidates: ["coding-agents", "ai-dev-extensions"],
        contrastive_reason: "Choose coding-agents over ai-dev-extensions because it directly handles repo work rather than augmenting another assistant.",
        confidence: "high",
      } as any,
      CATEGORIES,
      { forceCategory: true },
    );

    expect(result.placement.primary_category).toBe("coding-agents");
    expect(result.placement.section).toBe("IDE-Native Assistants");
  });

  it("clears an existing section when the response explicitly sets section to null", () => {
    const result = applyAIInsights(
      makeItem({
        curation: { status: "pending", reason: null, evidence: [] } as any,
        placement: { primary_category: "coding-agents", section: "IDE-Native Assistants" },
      } as any),
      {
        summary: "A coding agent.",
        why_it_matters: "It helps developers ship faster.",
        mental_damage: "Another workflow to evaluate.",
        tags: ["coding-agent"],
        should_include: true,
        primary_category: "coding-agents",
        section: null,
        decision_reason: "Fits developer tooling and belongs in coding agents.",
        decision_evidence: ["Repo description says it is a developer-facing AI tool."],
        category_candidates: ["coding-agents", "ai-dev-extensions"],
        contrastive_reason: "Choose coding-agents over ai-dev-extensions because it directly handles repo work rather than augmenting another assistant.",
        confidence: "high",
      } as any,
      CATEGORIES,
      { forceCategory: true },
    );

    expect(result.placement.primary_category).toBe("coding-agents");
    expect(result.placement.section).toBeNull();
  });

  it("stores exclude decisions, evidence, and clears category placement", () => {
    const result = applyAIInsights(
      makeItem(),
      {
        summary: "A generic AI directory.",
        why_it_matters: "It is broadly useful.",
        mental_damage: "Another generic AI directory appears.",
        tags: ["directory"],
        should_include: false,
        primary_category: null,
        decision_reason: "Too broad and not focused enough on developer tooling.",
        decision_evidence: ["Repo description frames it as a broad AI directory."],
        category_candidates: [],
        contrastive_reason: null,
        confidence: "medium",
      } as any,
      CATEGORIES,
    );

    expect((result as any).curation.status).toBe("excluded");
    expect((result as any).curation.reason).toContain("Too broad");
    expect((result as any).curation.evidence).toEqual([
      "Repo description frames it as a broad AI directory.",
    ]);
    expect(result.placement.primary_category).toBeNull();
  });

  it("keeps direct awesome-list sources included so readers can decide", () => {
    const awesomeListItem = makeItem({
      name: "awesome-ai-agents",
      placement: { primary_category: null, section: null },
      provenance: {
        discoveries: [
          {
            id: "discovery__github__e2b-dev__awesome-ai-agents__awesome-list__e2b-dev__awesome-ai-agents",
            discovered_at: "2026-05-01T00:00:00Z",
            source: {
              type: "awesome-list",
              name: "e2b-dev/awesome-ai-agents",
              url: "https://github.com/e2b-dev/awesome-ai-agents",
              repository: "e2b-dev/awesome-ai-agents",
            },
            extraction: {
              mode: "direct",
              section_path: ["inbox"],
              anchor_text: "https://github.com/e2b-dev/awesome-ai-agents",
              extracted_url: "https://github.com/e2b-dev/awesome-ai-agents",
              surrounding_text: "AI agents broadly, with a developer-tooling lean.",
              confidence: "high",
            },
          },
        ],
      } as any,
      metadata: {
        github: {
          ...makeItem().metadata.github,
          description: "A list of AI autonomous agents",
        },
      } as any,
      curation: { status: "pending", reason: null, evidence: [] } as any,
    });

    const result = applyAIInsights(
      awesomeListItem,
      {
        summary: "A broad AI agent directory.",
        why_it_matters: "It maps the agent ecosystem.",
        mental_damage: "Now even the map needs a map.",
        tags: ["awesome-list", "directory"],
        should_include: false,
        primary_category: null,
        decision_reason: "Too broad for a developer-focused catalog.",
        decision_evidence: ["Repo description says it is a list of AI autonomous agents."],
        category_candidates: [],
        contrastive_reason: null,
        confidence: "medium",
      } as any,
      CATEGORIES,
    );

    expect(result.curation.status).toBe("included");
    expect(result.curation.reason).toMatch(/curated awesome list|readers can decide/i);
    expect(result.curation.evidence.join(" ")).toMatch(/awesome-list|developer/i);
    expect(result.placement.primary_category).toBe("awesome-awesomes");
  });


  it("resets only excluded items when rerunning excluded curation", () => {
    const included = makeItem({ id: "github__included__tool" });
    const excluded = makeItem({
      id: "github__excluded__tool",
      curation: {
        status: "excluded",
        reason: "Too broad.",
        evidence: ["Old evidence."],
      } as any,
      placement: { primary_category: null, section: null },
    } as any);

    const { items, resetIds } = markExcludedItemsPending([included, excluded]);

    expect(resetIds).toEqual(["github__excluded__tool"]);
    expect(items[0].curation.status).toBe("included");
    expect(items[1].curation).toEqual({ status: "pending", reason: null, evidence: [] });
  });
});

describe("public rendering", () => {
  it("hides excluded items from rabbit-hole pages", () => {
    const page = renderRabbitHolePage(CATEGORIES[0], [
      makeItem({ name: "included-tool" }),
      makeItem({
        name: "excluded-tool",
        curation: { status: "excluded", reason: "Out of scope.", evidence: ["Broad directory."] } as any,
      } as any),
    ] as any);

    expect(page).toContain("included-tool");
    expect(page).not.toContain("excluded-tool");
  });

  it("keeps excluded items out of catalog/catalog.json", () => {
    const catalog = renderSiteCatalog([
      makeItem({ id: "github__included__tool", canonical_url: "https://github.com/included/tool" }),
      makeItem({
        id: "github__excluded__tool",
        canonical_url: "https://github.com/excluded/tool",
        curation: { status: "excluded", reason: "Out of scope.", evidence: ["Broad directory."] } as any,
      } as any),
    ] as any);

    expect(catalog.items.map((item) => item.id)).toEqual(["github__included__tool"]);
  });
});
