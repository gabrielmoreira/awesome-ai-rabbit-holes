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
            prompt_instruction: "",
          },
        ],
        "config/categories.yml",
      ),
    ).toThrow(/categories\[0\]\.prompt_instruction/i);
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
            prompt_instruction: "Model Context Protocol infrastructure.",
          },
          {
            id: "mcp",
            name: "Other MCP",
            slug: "mcp-alt",
            description: "Duplicate id.",
            prompt_instruction: "Duplicate id.",
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
            prompt_instruction: "Model Context Protocol infrastructure.",
          },
          {
            id: "mcp-alt",
            name: "Other MCP",
            slug: "mcp",
            description: "Duplicate slug.",
            prompt_instruction: "Duplicate slug.",
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
            prompt_instruction: "Developer-facing coding assistants.",
            sections: ["Terminal & CLI Agents", "  ", "Terminal & CLI Agents"],
          },
        ],
        "config/categories.yml",
      ),
    ).toThrow(/categories\[0\]\.sections/i);
  });
});
