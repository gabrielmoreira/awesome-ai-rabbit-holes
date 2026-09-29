import { describe, expect, it } from "vitest";
import * as fs from "node:fs";
import * as path from "node:path";
import * as yaml from "js-yaml";
import { fileURLToPath } from "node:url";
import { loadCategories, loadCategoriesFromRaw, loadSources } from "../scripts/catalog/data.js";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

describe("category loading", () => {
  it("rejects missing required prompt fields", () => {
    expect(() =>
      loadCategoriesFromRaw(
        [
          {
            id: "mcp",
            name: "MCP Servers and Tooling",
            slug: "mcp",
            description: "Model Context Protocol servers, clients, and tooling.",
            prompt: {
              instructions: "",
              use_when: ["MCP is the product identity."],
              do_not_use_when: ["MCP is only a compatibility feature."],
              canonical_positives: ["playwright-mcp"],
              common_false_positives: ["apisix"],
            },
          },
        ],
        "config/categories.yml",
      ),
    ).toThrow(/categories\[0\]\.prompt\.instructions/i);
  });

  it("rejects duplicate category ids and slugs", () => {
    expect(() =>
      loadCategoriesFromRaw(
        [
          {
            id: "mcp",
            name: "MCP Servers and Tooling",
            slug: "mcp",
            description: "Model Context Protocol servers, clients, and tooling.",
            prompt: {
              instructions: "Model Context Protocol infrastructure.",
              use_when: ["MCP is the product identity."],
              do_not_use_when: ["MCP is only a compatibility feature."],
              canonical_positives: ["playwright-mcp"],
              common_false_positives: ["apisix"],
            },
          },
          {
            id: "mcp",
            name: "Other MCP",
            slug: "mcp-alt",
            description: "Duplicate id.",
            prompt: {
              instructions: "Duplicate id.",
              use_when: ["use"],
              do_not_use_when: ["avoid"],
              canonical_positives: ["positive"],
              common_false_positives: ["negative"],
            },
          },
        ],
        "config/categories.yml",
      ),
    ).toThrow(/duplicate category id/i);

    expect(() =>
      loadCategoriesFromRaw(
        [
          {
            id: "mcp",
            name: "MCP Servers and Tooling",
            slug: "mcp",
            description: "Model Context Protocol servers, clients, and tooling.",
            prompt: {
              instructions: "Model Context Protocol infrastructure.",
              use_when: ["MCP is the product identity."],
              do_not_use_when: ["MCP is only a compatibility feature."],
              canonical_positives: ["playwright-mcp"],
              common_false_positives: ["apisix"],
            },
          },
          {
            id: "mcp-alt",
            name: "Other MCP",
            slug: "mcp",
            description: "Duplicate slug.",
            prompt: {
              instructions: "Duplicate slug.",
              use_when: ["use"],
              do_not_use_when: ["avoid"],
              canonical_positives: ["positive"],
              common_false_positives: ["negative"],
            },
          },
        ],
        "config/categories.yml",
      ),
    ).toThrow(/duplicate category slug/i);
  });

  it("rejects invalid or duplicate sections", () => {
    expect(() =>
      loadCategoriesFromRaw(
        [
          {
            id: "coding-agents",
            name: "Coding Agents",
            slug: "coding-agents",
            description: "Coding assistants and coding agents.",
            prompt: {
              instructions: "Developer-facing coding assistants.",
              use_when: ["The product directly edits code."],
              do_not_use_when: ["It is mainly an extension."],
              canonical_positives: ["Claude Code"],
              common_false_positives: ["Cursor"],
            },
            sections: ["Terminal & CLI Agents", "  ", "Terminal & CLI Agents"],
          },
        ],
        "config/categories.yml",
      ),
    ).toThrow(/categories\[0\]\.sections/i);
  });
});

// ─── Decision models (Jev and Jev-like), 2026-09-29 ───────────────────────────

const DECISION_MODEL_SECTIONS = [
  "Official Jev & System One",
  "Open & Local Decision Models",
  "Local Serving & Gateways",
  "Cloud Gateways & Providers",
  "Framework & SDK Integrations",
  "Client SDKs & CLIs",
  "Agent Gates, Routers & Skills",
  "Context Compaction & Memory",
  "Browser & Computer Use",
  "Search, Retrieval & Data",
  "Verification, Guardrails & Safety",
  "Evals, Benchmarks & Calibration",
  "Apps, Games & Simulation",
];

const DECISION_MODEL_SOURCE_URLS = [
  "https://github.com/hellogumbo/awesome-jev",
  "https://github.com/AppitStudio/awesome-jev",
  "https://github.com/cobanov/awesome-jev",
  "https://github.com/heyjunpenn/awesome-jev",
  "https://github.com/logicrw/awesome-jev-projects",
  "https://github.com/yibie/awesome-jev",
];

describe("decision models taxonomy", () => {
  it("registers the decision-models category with the approved sections", () => {
    const category = loadCategories().find((entry) => entry.id === "decision-models");
    expect(category, "decision-models is missing from config/categories.yml").toBeDefined();
    expect(category?.sections).toEqual(DECISION_MODEL_SECTIONS);
    expect(category?.prompt.canonical_positives.length).toBeGreaterThan(0);
    expect(category?.prompt.common_false_positives.length).toBeGreaterThan(0);
  });

  it("gives every section of every category a section hint", () => {
    // The reclassifier builds one placement criterion per section from section_hints.
    // A section without a hint silently degrades that option to a bare label.
    const raw = yaml.load(fs.readFileSync(path.join(REPO_ROOT, "config", "categories.yml"), "utf8")) as Array<{
      id: string;
      sections?: string[];
      prompt?: { section_hints?: Record<string, string> };
    }>;
    const missing: string[] = [];
    for (const category of raw) {
      const hints = category.prompt?.section_hints ?? {};
      for (const section of category.sections ?? []) {
        if (!hints[section]?.trim()) missing.push(`${category.id} → ${section}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it("registers every Jev ecosystem index as a curated list source", () => {
    const byUrl = new Map(loadSources().map((source) => [source.url.replace(/\/$/, ""), source]));
    for (const url of DECISION_MODEL_SOURCE_URLS) {
      const source = byUrl.get(url);
      expect(source, `${url} is missing from config/sources.yml`).toBeDefined();
      expect(source?.kind, `${url} must be a curated-list source`).toBe("curated-list");
    }
  });
});
