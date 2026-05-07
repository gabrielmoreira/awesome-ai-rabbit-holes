import { describe, expect, it } from "vitest";
import { loadCategoriesFromRaw } from "../scripts/catalog/data.js";

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
