import { describe, expect, it } from "vitest";
import { makeItemId } from "../scripts/catalog/core.ts";
import {
  findLocalWebsiteGitHubMatch,
  repairCatalogItems,
  runRepair,
  selectRepairCandidates,
  type CatalogRepairTarget,
} from "../scripts/catalog/repair.ts";
import type { CatalogItem } from "../scripts/catalog/types.ts";

function makeItem(overrides: Partial<CatalogItem> & { canonical_url: string; name?: string } ): CatalogItem {
  const github = overrides.identity?.github_repo;
  return {
    id: overrides.id ?? makeItemId(overrides.canonical_url),
    kind: overrides.kind ?? (github ? "github-repo" : "website"),
    name: overrides.name ?? (github ? github.split("/")[1]! : overrides.canonical_url),
    canonical_url: overrides.canonical_url,
    identity: overrides.identity ?? (github ? { github_repo: github } : {}),
    provenance: overrides.provenance ?? { discoveries: [] },
    metadata: overrides.metadata ?? {
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
    insights: overrides.insights ?? {
      summary: null,
      why_it_matters: null,
      mental_damage: null,
      tags: [],
      confidence: null,
    },
    curation: overrides.curation ?? { status: "pending", reason: null, evidence: [] },
    placement: overrides.placement ?? { primary_category: null, section: null },
    lifecycle: overrides.lifecycle ?? { status: "incubating", reason: null },
    processing: overrides.processing ?? {
      discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
      stars: { status: github ? "pending" : "skipped", updated_at: null, cause: null },
      categorize: { status: "pending", updated_at: null, cause: null },
    },
  };
}

function targetMap(...entries: Array<[string, CatalogRepairTarget]>): Map<string, CatalogRepairTarget> {
  return new Map(entries);
}

describe("catalog repair planning", () => {
  it("merges persisted GitHub alias pairs into the canonical repo item", () => {
    const oldItem = makeItem({
      canonical_url: "https://github.com/opendevin/opendevin",
      identity: { github_repo: "opendevin/opendevin" },
      name: "OpenDevin",
      provenance: {
        discoveries: [{
          id: "old",
          discovered_at: "2026-05-05T00:00:00Z",
          source: { type: "awesome-list", name: "old-list", url: "https://github.com/example/old-list", repository: "example/old-list" },
          extraction: { mode: "parsed", section_path: ["Agents"], anchor_text: "OpenDevin", extracted_url: "https://github.com/opendevin/opendevin", surrounding_text: null, confidence: "high" },
        }],
      },
    });
    const canonicalItem = makeItem({
      canonical_url: "https://github.com/openhands/openhands",
      identity: { github_repo: "openhands/openhands" },
      name: "openhands",
      provenance: {
        discoveries: [{
          id: "canonical",
          discovered_at: "2026-05-05T00:01:00Z",
          source: { type: "awesome-list", name: "new-list", url: "https://github.com/example/new-list", repository: "example/new-list" },
          extraction: { mode: "parsed", section_path: ["Coding Agents"], anchor_text: "OpenHands", extracted_url: "https://github.com/openhands/openhands", surrounding_text: null, confidence: "high" },
        }],
      },
      curation: { status: "included", reason: "Strong fit.", evidence: ["Direct coding workflow."] },
      placement: { primary_category: "coding-agents", section: "Terminal & CLI Agents" },
      insights: {
        summary: "Open coding agent.",
        why_it_matters: "Automates repo work.",
        mental_damage: "Now your terminal has opinions.",
        tags: ["agents"],
        confidence: "high",
      },
      processing: {
        discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
        stars: { status: "done", updated_at: "2026-05-05T00:05:00Z", cause: null },
        categorize: { status: "done", updated_at: "2026-05-05T00:10:00Z", cause: null },
      },
    });

    const plan = repairCatalogItems(
      [oldItem, canonicalItem],
      targetMap(
        [oldItem.id, { canonicalUrl: "https://github.com/openhands/openhands", cause: "github_alias" }],
      ),
    );

    expect(plan.changedItems).toHaveLength(1);
    expect(plan.summary.changedCandidates).toBe(1);
    expect(plan.summary.byCause).toEqual([{ value: "github_alias", count: 1 }]);
    expect(plan.removedPaths).toHaveLength(1);
    expect(plan.changedItems[0]).toMatchObject({
      id: "github__openhands__openhands",
      canonical_url: "https://github.com/openhands/openhands",
      identity: { github_repo: "openhands/openhands" },
      curation: { status: "included", reason: "Strong fit." },
      placement: { primary_category: "coding-agents", section: "Terminal & CLI Agents" },
    });
    expect(plan.changedItems[0]?.provenance.discoveries).toHaveLength(2);
  });

  it("keeps GitHub metadata aligned with the freshest checked alias record", () => {
    const stalePreferred = makeItem({
      canonical_url: "https://github.com/opendevin/opendevin",
      identity: { github_repo: "opendevin/opendevin" },
      name: "OpenDevin",
      curation: { status: "included", reason: "Keep it.", evidence: ["fit"] },
      metadata: {
        github: {
          stars: 10,
          forks: 1,
          license: "MIT",
          archived: false,
          created_at: "2024-01-01T00:00:00Z",
          pushed_at: "2026-05-01T00:00:00Z",
          description: "old description",
          homepage: "https://old.example",
          topics: ["old-topic"],
          last_checked_at: "2026-05-01T00:00:00Z",
          readme: { fetched_at: "2026-05-01T00:00:00Z", bytes: 100 },
        },
      },
    });
    const freshAlias = makeItem({
      canonical_url: "https://github.com/openhands/openhands",
      identity: { github_repo: "openhands/openhands" },
      name: "openhands",
      metadata: {
        github: {
          stars: 72,
          forks: 9,
          license: "Apache-2.0",
          archived: false,
          created_at: "2024-01-01T00:00:00Z",
          pushed_at: "2026-05-05T00:00:00Z",
          description: "fresh description",
          homepage: "https://openhands.dev",
          topics: ["agents", "developer-tools"],
          last_checked_at: "2026-05-05T00:00:00Z",
          readme: { fetched_at: "2026-05-05T00:00:00Z", bytes: 200 },
        },
      },
    });

    const plan = repairCatalogItems(
      [stalePreferred, freshAlias],
      targetMap(
        [stalePreferred.id, { canonicalUrl: "https://github.com/openhands/openhands", cause: "github_alias" }],
      ),
    );

    expect(plan.changedItems[0]?.metadata.github).toMatchObject({
      stars: 72,
      forks: 9,
      license: "Apache-2.0",
      description: "fresh description",
      homepage: "https://openhands.dev",
      topics: ["agents", "developer-tools"],
      last_checked_at: "2026-05-05T00:00:00Z",
      readme: { fetched_at: "2026-05-05T00:00:00Z", bytes: 200 },
    });
  });

  it("merges website duplicates into the GitHub canonical item while keeping stronger curation", () => {
    const websiteItem = makeItem({
      canonical_url: "https://kiro.dev",
      name: "kiro.dev",
      curation: { status: "included", reason: "Spec-driven environment.", evidence: ["Spec-first workflow."] },
      placement: { primary_category: "spec-driven-development", section: "Spec-First Environments" },
      insights: {
        summary: "Spec-driven AI dev environment.",
        why_it_matters: "Keeps specs central.",
        mental_damage: "Every feature starts with another plan.",
        tags: ["spec-driven"],
        confidence: "high",
      },
    });
    const githubItem = makeItem({
      canonical_url: "https://github.com/kirodotdev/kiro",
      identity: { github_repo: "kirodotdev/kiro" },
      name: "kiro",
    });

    const plan = repairCatalogItems(
      [websiteItem, githubItem],
      targetMap(
        [websiteItem.id, { canonicalUrl: "https://github.com/kirodotdev/kiro", cause: "website_to_github" }],
      ),
    );

    expect(plan.changedItems).toHaveLength(1);
    expect(plan.summary.byCause).toEqual([{ value: "website_to_github", count: 1 }]);
    expect(plan.changedItems[0]).toMatchObject({
      canonical_url: "https://github.com/kirodotdev/kiro",
      identity: { github_repo: "kirodotdev/kiro" },
      name: "kiro",
      curation: { status: "included", reason: "Spec-driven environment." },
      placement: { primary_category: "spec-driven-development", section: "Spec-First Environments" },
    });
  });

  it("requeues conflicting duplicate curation instead of choosing a preferred variant", () => {
    const includedWebsite = makeItem({
      canonical_url: "https://crewai.io",
      name: "crewai.io",
      curation: { status: "included", reason: "Framework fit.", evidence: ["framework"] },
      placement: { primary_category: "ai-frameworks", section: "Agent Frameworks" },
      insights: {
        summary: "Framework.",
        why_it_matters: "Developers build with it.",
        mental_damage: "Another agent framework.",
        tags: ["framework"],
        confidence: "high",
      },
    });
    const excludedVariant = makeItem({
      canonical_url: "https://github.com/crewaiinc/crewai",
      identity: { github_repo: "crewaiinc/crewai" },
      name: "crewai",
      curation: { status: "excluded", reason: "Docs page drift.", evidence: ["docs"] },
    });

    const plan = repairCatalogItems(
      [includedWebsite, excludedVariant],
      targetMap([
        includedWebsite.id,
        { canonicalUrl: "https://github.com/crewaiinc/crewai", cause: "website_to_github" },
      ]),
    );

    expect(plan.changedItems[0]).toMatchObject({
      canonical_url: "https://github.com/crewaiinc/crewai",
      curation: {
        status: "pending",
        evidence: expect.arrayContaining(["framework", "docs"]),
      },
      placement: { primary_category: null, section: null },
      processing: { categorize: { status: "pending" } },
    });
  });

  it("picks only alias-prone GitHub items and website items that line up with existing GitHub identities", () => {
    const aliasOld = makeItem({ canonical_url: "https://github.com/joaomdmoura/crewai", identity: { github_repo: "joaomdmoura/crewai" }, name: "crewai" });
    const aliasNew = makeItem({ canonical_url: "https://github.com/crewaiinc/crewai", identity: { github_repo: "crewaiinc/crewai" }, name: "crewai" });
    const websiteDuplicate = makeItem({ canonical_url: "https://crewai.io", name: "crewai.io" });
    const unrelatedGitHub = makeItem({ canonical_url: "https://github.com/example/solo-tool", identity: { github_repo: "example/solo-tool" }, name: "solo-tool" });
    const unrelatedWebsite = makeItem({ canonical_url: "https://example.com/no-match", name: "Example" });

    const candidates = selectRepairCandidates([aliasOld, aliasNew, websiteDuplicate, unrelatedGitHub, unrelatedWebsite]);
    expect(candidates.map((item) => item.id).sort()).toEqual([
      aliasNew.id,
      aliasOld.id,
      websiteDuplicate.id,
    ].sort());
  });

  it("finds a unique local website-to-github match when the host, repo name, and discovery anchors line up", () => {
    const websiteItem = makeItem({
      canonical_url: "https://crewai.io",
      name: "crewai.io",
      provenance: {
        discoveries: [{
          id: "website",
          discovered_at: "2026-05-05T00:00:00Z",
          source: { type: "awesome-list", name: "list", url: "https://github.com/example/list", repository: "example/list" },
          extraction: { mode: "parsed", section_path: ["Agents"], anchor_text: "CrewAI", extracted_url: "https://crewai.io", surrounding_text: null, confidence: "high" },
        }],
      },
    });
    const githubItem = makeItem({
      canonical_url: "https://github.com/crewaiinc/crewai",
      identity: { github_repo: "crewaiinc/crewai" },
      name: "crewai",
      provenance: {
        discoveries: [{
          id: "github",
          discovered_at: "2026-05-05T00:01:00Z",
          source: { type: "awesome-list", name: "list", url: "https://github.com/example/list", repository: "example/list" },
          extraction: { mode: "parsed", section_path: ["Frameworks"], anchor_text: "CrewAI", extracted_url: "https://github.com/crewaiinc/crewai", surrounding_text: null, confidence: "high" },
        }],
      },
    });

    expect(findLocalWebsiteGitHubMatch(websiteItem, [websiteItem, githubItem])).toBe(
      "https://github.com/crewaiinc/crewai",
    );
  });

  it("does not match a website to GitHub on host label alone when anchor evidence disagrees", () => {
    const websiteItem = makeItem({
      canonical_url: "https://crewai.io",
      name: "crewai.io",
      provenance: {
        discoveries: [{
          id: "website-bad",
          discovered_at: "2026-05-05T00:00:00Z",
          source: { type: "awesome-list", name: "list", url: "https://github.com/example/list", repository: "example/list" },
          extraction: { mode: "parsed", section_path: ["Agents"], anchor_text: "Completely Different", extracted_url: "https://crewai.io", surrounding_text: null, confidence: "high" },
        }],
      },
    });
    const githubItem = makeItem({
      canonical_url: "https://github.com/crewaiinc/crewai",
      identity: { github_repo: "crewaiinc/crewai" },
      name: "crewai",
      provenance: {
        discoveries: [{
          id: "github",
          discovered_at: "2026-05-05T00:01:00Z",
          source: { type: "awesome-list", name: "list", url: "https://github.com/example/list", repository: "example/list" },
          extraction: { mode: "parsed", section_path: ["Frameworks"], anchor_text: "CrewAI", extracted_url: "https://github.com/crewaiinc/crewai", surrounding_text: null, confidence: "high" },
        }],
      },
    });

    expect(findLocalWebsiteGitHubMatch(websiteItem, [websiteItem, githubItem])).toBeNull();
  });

  it("matches hyphenated website hosts against normalized GitHub identities", () => {
    const websiteItem = makeItem({
      canonical_url: "https://open-hands.dev",
      name: "open-hands.dev",
      provenance: {
        discoveries: [{
          id: "website-hyphen",
          discovered_at: "2026-05-05T00:00:00Z",
          source: { type: "awesome-list", name: "list", url: "https://github.com/example/list", repository: "example/list" },
          extraction: { mode: "parsed", section_path: ["Agents"], anchor_text: "OpenHands", extracted_url: "https://open-hands.dev", surrounding_text: null, confidence: "high" },
        }],
      },
    });
    const githubItem = makeItem({
      canonical_url: "https://github.com/openhands/openhands",
      identity: { github_repo: "openhands/openhands" },
      name: "openhands",
      provenance: {
        discoveries: [{
          id: "github-hyphen",
          discovered_at: "2026-05-05T00:01:00Z",
          source: { type: "awesome-list", name: "list", url: "https://github.com/example/list", repository: "example/list" },
          extraction: { mode: "parsed", section_path: ["Agents"], anchor_text: "OpenHands", extracted_url: "https://github.com/openhands/openhands", surrounding_text: null, confidence: "high" },
        }],
      },
    });

    expect(findLocalWebsiteGitHubMatch(websiteItem, [websiteItem, githubItem])).toBe(
      "https://github.com/openhands/openhands",
    );
  });

  it("selects standalone weak-name items when discovery evidence provides a stronger product name", () => {
    const websiteItem = makeItem({
      canonical_url: "https://10web.io",
      name: "10web.io",
      provenance: {
        discoveries: [{
          id: "website-name",
          discovered_at: "2026-05-05T00:00:00Z",
          source: { type: "awesome-list", name: "list", url: "https://github.com/example/list", repository: "example/list" },
          extraction: { mode: "parsed", section_path: ["App Builders"], anchor_text: "10Web", extracted_url: "https://10web.io", surrounding_text: null, confidence: "high" },
        }],
      },
    });

    const candidates = selectRepairCandidates([websiteItem]);

    expect(candidates.map((item) => item.id)).toEqual([websiteItem.id]);
  });

  it("repairs standalone weak names from source-list evidence even when the canonical URL is unchanged", () => {
    const item = makeItem({
      canonical_url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview",
      name: "overview",
      provenance: {
        discoveries: [{
          id: "claude-code-docs",
          discovered_at: "2026-05-05T00:00:00Z",
          source: { type: "awesome-list", name: "list", url: "https://github.com/example/list", repository: "example/list" },
          extraction: {
            mode: "parsed",
            section_path: ["[Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview)", "Links"],
            anchor_text: "Documentation",
            extracted_url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview",
            surrounding_text: null,
            confidence: "high",
          },
        }],
      },
    });

    const plan = repairCatalogItems(
      [item],
      targetMap([
        item.id,
        { canonicalUrl: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview", cause: "unchanged" },
      ]),
    );

    expect(plan.changedItems).toHaveLength(1);
    expect(plan.changedItems[0]).toMatchObject({
      canonical_url: "https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview",
      name: "Claude Code",
    });
  });

  it("prefers discovery casing over lowercase repo slugs when the product identity matches", () => {
    const item = makeItem({
      canonical_url: "https://github.com/crewaiinc/crewai",
      identity: { github_repo: "crewaiinc/crewai" },
      name: "crewai",
      provenance: {
        discoveries: [{
          id: "crewai-name",
          discovered_at: "2026-05-05T00:00:00Z",
          source: { type: "awesome-list", name: "list", url: "https://github.com/example/list", repository: "example/list" },
          extraction: {
            mode: "parsed",
            section_path: ["Frameworks"],
            anchor_text: "CrewAI",
            extracted_url: "https://github.com/crewaiinc/crewai",
            surrounding_text: null,
            confidence: "high",
          },
        }],
      },
    });

    const plan = repairCatalogItems(
      [item],
      targetMap([
        item.id,
        { canonicalUrl: "https://github.com/crewaiinc/crewai", cause: "unchanged" },
      ]),
    );

    expect(plan.changedItems).toHaveLength(1);
    expect(plan.changedItems[0]).toMatchObject({
      canonical_url: "https://github.com/crewaiinc/crewai",
      name: "CrewAI",
    });
  });

  it("canonicalizes the preferred duplicate id while preserving its curated record", () => {
    const weakerDuplicate = makeItem({
      id: "duplicate-weak",
      canonical_url: "https://github.com/crewaiinc/crewai",
      identity: { github_repo: "crewaiinc/crewai" },
      name: "CrewAI",
      curation: { status: "pending", reason: null, evidence: [] },
      placement: { primary_category: null, section: null },
      insights: {
        summary: null,
        why_it_matters: null,
        mental_damage: null,
        tags: [],
        confidence: null,
      },
      processing: {
        discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
        stars: { status: "pending", updated_at: null, cause: null },
        categorize: { status: "pending", updated_at: null, cause: null },
      },
    });
    const preferredDuplicate = makeItem({
      id: "duplicate-preferred",
      canonical_url: "https://github.com/crewaiinc/crewai",
      identity: { github_repo: "crewaiinc/crewai" },
      name: "CrewAI",
      curation: { status: "included", reason: "Framework fit.", evidence: ["framework"] },
      placement: { primary_category: "ai-frameworks", section: "Agent Frameworks" },
      insights: {
        summary: "Framework.",
        why_it_matters: "Developers build with it.",
        mental_damage: "Another agent framework.",
        tags: ["framework"],
        confidence: "high",
      },
      processing: {
        discover: { status: "done", updated_at: "2026-05-05T00:00:00Z", cause: null },
        stars: { status: "done", updated_at: "2026-05-05T00:01:00Z", cause: null },
        categorize: { status: "done", updated_at: "2026-05-05T00:02:00Z", cause: null },
      },
    });

    const plan = repairCatalogItems(
      [weakerDuplicate, preferredDuplicate],
      targetMap(
        [weakerDuplicate.id, { canonicalUrl: "https://github.com/crewaiinc/crewai", cause: "unchanged" }],
        [preferredDuplicate.id, { canonicalUrl: "https://github.com/crewaiinc/crewai", cause: "unchanged" }],
      ),
    );

    expect(plan.changedItems).toHaveLength(1);
    expect(plan.items).toHaveLength(1);
    expect(plan.items[0]).toMatchObject({
      id: "github__crewaiinc__crewai",
      canonical_url: "https://github.com/crewaiinc/crewai",
      curation: { status: "included", reason: "Framework fit." },
      placement: { primary_category: "ai-frameworks", section: "Agent Frameworks" },
      insights: { summary: "Framework." },
    });
  });

  it("runRepair only saves changed repair outputs instead of rewriting every catalog item", async () => {
    const unchangedItem = makeItem({
      canonical_url: "https://example.com/no-match",
      name: "Example",
    });
    const repairedNameItem = makeItem({
      canonical_url: "https://10web.io",
      name: "10web.io",
      provenance: {
        discoveries: [{
          id: "repair-name",
          discovered_at: "2026-05-05T00:00:00Z",
          source: { type: "awesome-list", name: "list", url: "https://github.com/example/list", repository: "example/list" },
          extraction: { mode: "parsed", section_path: ["App Builders"], anchor_text: "10Web", extracted_url: "https://10web.io", surrounding_text: null, confidence: "high" },
        }],
      },
    });
    const savedUrls: string[] = [];

    await runRepair(undefined, {
      loadItems: () => [unchangedItem, repairedNameItem],
      resolveTarget: async (item) => ({ canonicalUrl: item.canonical_url, cause: "unchanged" }),
      saveItem: (item) => {
        savedUrls.push(item.canonical_url);
      },
      removePath: () => {},
    });

    expect(savedUrls).toEqual(["https://10web.io"]);
  });

  it("preserves known GitHub identity when merging onto a non-GitHub canonical URL", () => {
    const preferredWebsite = makeItem({
      canonical_url: "https://example.com/product",
      name: "Product",
      identity: { github_repo: "example/product" },
      curation: { status: "included", reason: "Keep it.", evidence: ["fit"] },
    });
    const duplicateWebsite = makeItem({
      id: "duplicate-website",
      canonical_url: "https://www.example.com/product",
      name: "product",
    });

    const plan = repairCatalogItems(
      [preferredWebsite, duplicateWebsite],
      targetMap(
        [duplicateWebsite.id, { canonicalUrl: "https://example.com/product", cause: "website_canonical" }],
      ),
    );

    expect(plan.changedItems).toHaveLength(1);
    expect(plan.changedItems[0]).toMatchObject({
      canonical_url: "https://example.com/product",
      identity: { github_repo: "example/product" },
    });
  });
});
