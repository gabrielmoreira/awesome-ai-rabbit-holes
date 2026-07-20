import { afterEach, describe, expect, it } from "vitest";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { applyCatalogOverrides } from "../scripts/catalog/data.ts";
import type { CatalogItem } from "../scripts/catalog/types.ts";

const temporaryDirectories: string[] = [];

function makeTemporaryDirectory(): string {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "catalog-overrides-"));
  temporaryDirectories.push(directory);
  return directory;
}

function writeOverride(directory: string, relativePath: string, content: string): void {
  const filePath = path.join(directory, relativePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
}

function makeItem(id = "github__example__tool"): CatalogItem {
  return {
    id,
    kind: "github-repo",
    name: "Example Tool",
    canonical_url: "https://github.com/example/tool",
    identity: { github_repo: "example/tool" },
    provenance: { discoveries: [] },
    metadata: {
      github: {
        stars: 10,
        forks: 2,
        license: "MIT",
        archived: false,
        created_at: "2025-01-01T00:00:00.000Z",
        pushed_at: "2026-01-01T00:00:00.000Z",
        description: "Generated description",
        homepage: null,
        topics: ["agents"],
        last_checked_at: "2026-07-01T00:00:00.000Z",
      },
    },
    insights: {
      summary: "Generated summary",
      why_it_matters: "Generated rationale",
      mental_damage: null,
      tags: ["agents"],
      confidence: "medium",
    },
    curation: { status: "included", reason: null, evidence: ["generated"] },
    placement: {
      primary_category: "coding-agents",
      secondary_categories: ["developer-tools"],
      section: "Frameworks",
    },
    lifecycle: { status: "curated", reason: "Reviewed" },
    processing: {
      categorize: { status: "done", updated_at: "2026-07-01T00:00:00.000Z" },
    },
  };
}

const validAuditMetadata = `override:
  reason: This belongs under agent orchestration, not coding agents.
  updated_by: Catalog Maintainer
  updated_at: 2026-05-04
`;

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

describe("catalog item overrides", () => {
  it("applies a placement patch without replacing unpatched nested fields", () => {
    const directory = makeTemporaryDirectory();
    writeOverride(
      directory,
      "categories/example.yml",
      `id: github__example__tool
${validAuditMetadata}patch:
  placement:
    primary_category: agent-orchestration
    section: null
`,
    );

    const [item] = applyCatalogOverrides([makeItem()], directory);

    expect(item.placement).toEqual({
      primary_category: "agent-orchestration",
      secondary_categories: ["developer-tools"],
      section: null,
    });
    expect(item.insights).toEqual(makeItem().insights);
  });

  it("preserves nested generated values while patching one metadata field", () => {
    const directory = makeTemporaryDirectory();
    writeOverride(
      directory,
      "metadata.yml",
      `id: github__example__tool
${validAuditMetadata}patch:
  metadata:
    github:
      homepage: https://example.com
`,
    );

    const [item] = applyCatalogOverrides([makeItem()], directory);

    expect(item.metadata.github.homepage).toBe("https://example.com");
    expect(item.metadata.github.stars).toBe(10);
    expect(item.metadata.github.topics).toEqual(["agents"]);
  });

  it("rejects an override for an unknown item id", () => {
    const directory = makeTemporaryDirectory();
    writeOverride(
      directory,
      "unknown.yml",
      `id: github__missing__tool
${validAuditMetadata}patch:
  name: Missing Tool
`,
    );

    expect(() => applyCatalogOverrides([makeItem()], directory)).toThrow(
      /unknown item id.*github__missing__tool/i,
    );
  });

  it("rejects duplicate overrides for one item in deterministic file order", () => {
    const directory = makeTemporaryDirectory();
    writeOverride(
      directory,
      "z-last.yml",
      `id: github__example__tool
${validAuditMetadata}patch:
  name: Last
`,
    );
    writeOverride(
      directory,
      "a-first.yml",
      `id: github__example__tool
${validAuditMetadata}patch:
  name: First
`,
    );

    expect(() => applyCatalogOverrides([makeItem()], directory)).toThrow(
      /duplicate override.*github__example__tool.*a-first\.yml.*z-last\.yml/i,
    );
  });

  it("rejects attempts to mutate the item id", () => {
    const directory = makeTemporaryDirectory();
    writeOverride(
      directory,
      "id-mutation.yml",
      `id: github__example__tool
${validAuditMetadata}patch:
  id: github__other__tool
`,
    );

    expect(() => applyCatalogOverrides([makeItem()], directory)).toThrow(
      /id-mutation\.yml.*patch\.id.*must not mutate/i,
    );
  });

  it("rejects invalid top-level patch keys", () => {
    const directory = makeTemporaryDirectory();
    writeOverride(
      directory,
      "invalid-key.yml",
      `id: github__example__tool
${validAuditMetadata}patch:
  category: agent-orchestration
`,
    );

    expect(() => applyCatalogOverrides([makeItem()], directory)).toThrow(
      /invalid-key\.yml.*patch\.category.*not an allowed catalog item field/i,
    );
  });

  it("rejects malformed values inside an allowed patch field", () => {
    const directory = makeTemporaryDirectory();
    writeOverride(
      directory,
      "invalid-value.yml",
      `id: github__example__tool
${validAuditMetadata}patch:
  placement:
    primary_category: 42
`,
    );

    expect(() => applyCatalogOverrides([makeItem()], directory)).toThrow(
      /invalid-value\.yml.*patch\.placement\.primary_category.*string or null/i,
    );
  });

  it("rejects prototype keys inside nested patches", () => {
    const directory = makeTemporaryDirectory();
    writeOverride(
      directory,
      "prototype-key.yml",
      `id: github__example__tool
${validAuditMetadata}patch:
  placement:
    __proto__:
      polluted: true
`,
    );

    expect(() => applyCatalogOverrides([makeItem()], directory)).toThrow(
      /prototype-key\.yml.*unexpected patch\.placement\.__proto__/i,
    );
  });

  it.each([
    ["missing reason", "  updated_by: Catalog Maintainer\n  updated_at: 2026-05-04\n", /override\.reason.*non-empty string/i],
    ["empty maintainer", "  reason: Needed correction\n  updated_by: \"\"\n  updated_at: 2026-05-04\n", /override\.updated_by.*non-empty string/i],
    ["invalid date", "  reason: Needed correction\n  updated_by: Catalog Maintainer\n  updated_at: not-a-date\n", /override\.updated_at.*YYYY-MM-DD/i],
  ])("rejects malformed audit metadata: %s", (_label, metadata, expectedError) => {
    const directory = makeTemporaryDirectory();
    writeOverride(
      directory,
      "malformed.yml",
      `id: github__example__tool
override:
${metadata}patch:
  name: Corrected name
`,
    );

    expect(() => applyCatalogOverrides([makeItem()], directory)).toThrow(expectedError);
  });

  it("accepts persisted categorization review fields when narrowly patching categorize state", () => {
    const directory = makeTemporaryDirectory();
    const generated = makeItem();
    generated.processing = {
      ...generated.processing,
      categorize: {
        status: "done",
        updated_at: "2026-07-15T00:00:00.000Z",
        classification: {
          answering_model: "test-model",
          prompt_version: "prompt-v1",
          category_rules_version: "rules-v1",
          input_hash: "sha256:abc",
          proposed_primary_category: "coding-agents",
          disagreement: false,
          decision_reason: "Direct coding workflow.",
          decision_evidence: ["README evidence"],
          category_candidates: ["coding-agents"],
          contrastive_reason: null,
          review_reason: null,
          review_resume_lifecycle: {
            status: "curated",
            reason: "Previously reviewed",
          },
        },
      },
    };
    writeOverride(
      directory,
      "categorize.yml",
      `id: github__example__tool
${validAuditMetadata}patch:
  processing:
    categorize:
      status: pending
      updated_at: null
`,
    );

    const [item] = applyCatalogOverrides([generated], directory);

    expect(item.processing?.categorize?.status).toBe("pending");
    expect(item.processing?.categorize?.classification?.review_resume_lifecycle).toEqual({
      status: "curated",
      reason: "Previously reviewed",
    });
  });

  it("treats a missing override directory as no overrides", () => {
    const directory = path.join(makeTemporaryDirectory(), "does-not-exist");
    const generated = [makeItem()];

    expect(applyCatalogOverrides(generated, directory)).toEqual(generated);
  });
});
