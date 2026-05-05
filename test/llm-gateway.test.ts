import { describe, expect, it } from "vitest";
import * as gateway from "../scripts/catalog/llm-gateway.js";

describe("LLM gateway boundary", () => {
  it("exposes only the catalog-scoped prompt runner", () => {
    expect(typeof gateway.runCatalogLlmPrompt).toBe("function");
    expect("executeLLM" in gateway).toBe(false);
  });
});
