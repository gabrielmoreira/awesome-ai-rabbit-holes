import { describe, expect, it } from "vitest";
import { resolveCatalogLlmModel, resolveCatalogLlmTimeoutMs } from "../scripts/catalog/llm-gateway.js";

describe("resolveCatalogLlmTimeoutMs", () => {
  it("defaults and validates the optional timeout override", () => {
    expect(resolveCatalogLlmTimeoutMs({} as NodeJS.ProcessEnv)).toBe(60_000);
    expect(resolveCatalogLlmTimeoutMs({ CATALOG_LLM_TIMEOUT_MS: "45000" } as NodeJS.ProcessEnv)).toBe(45_000);
    expect(resolveCatalogLlmTimeoutMs({ CATALOG_LLM_TIMEOUT_MS: "garbage" } as NodeJS.ProcessEnv)).toBe(60_000);
  });
});

describe("resolveCatalogLlmModel", () => {
  it("defaults the catalog runner to the shared fallback loop when no override is set", () => {
    expect(resolveCatalogLlmModel(undefined, {} as any)).toBeNull();
  });

  it("prefers explicit, then catalog model configuration", () => {
    expect(resolveCatalogLlmModel("gpt-5", { CATALOG_LLM_MODEL: "gpt-4o" } as any)).toBe("gpt-5");
    expect(resolveCatalogLlmModel(undefined, { CATALOG_LLM_MODEL: "gpt-4o" } as any)).toBe("gpt-4o");
  });
});

describe("legacy llm env aliases", () => {
  it("ignores removed AI-prefixed env aliases", () => {
    expect(resolveCatalogLlmModel(undefined, { CATALOG_AI_MODEL: "gpt-4o" } as any)).toBeNull();
    expect(resolveCatalogLlmTimeoutMs({ CATALOG_AI_TIMEOUT_MS: "45000" } as any)).toBe(60_000);
  });
});
