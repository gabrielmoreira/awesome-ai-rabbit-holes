import { describe, expect, it } from "vitest";
import { resolveCatalogAIModel } from "../scripts/ai-runner.js";

describe("resolveCatalogAIModel", () => {
  it("defaults the catalog runner to gpt-4o", () => {
    expect(resolveCatalogAIModel(undefined, {} as any)).toBe("gpt-4o");
  });

  it("prefers explicit, catalog, then copilot model configuration", () => {
    expect(resolveCatalogAIModel("gpt-5", { CATALOG_AI_MODEL: "gpt-4o", COPILOT_MODEL: "gpt-4.1" } as any)).toBe(
      "gpt-5"
    );
    expect(resolveCatalogAIModel(undefined, { CATALOG_AI_MODEL: "gpt-4o", COPILOT_MODEL: "gpt-4.1" } as any)).toBe(
      "gpt-4o"
    );
    expect(resolveCatalogAIModel(undefined, { COPILOT_MODEL: "gpt-4.1" } as any)).toBe("gpt-4.1");
  });
});
