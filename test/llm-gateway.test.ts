import { describe, expect, it } from "vitest";
import { executeLLM } from "../scripts/catalog/llm-gateway.js"

describe("LLM Gateway sole boundary", () => {
  it("gateway exports the unique executeLLM function", () => {
    expect(typeof executeLLM).toBe("function");
  });
});
