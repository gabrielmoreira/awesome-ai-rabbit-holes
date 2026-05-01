import { describe, expect, it } from "vitest";
import { resolveCatalogAIModel } from "../scripts/ai-runner.js";

describe("resolveCatalogAIModel", () => {
  it("defaults the catalog runner to gpt-5.2", () => {
    expect(resolveCatalogAIModel(undefined, {} as any)).toBe("gpt-5.2");
  });

  it("prefers explicit, catalog, then copilot model configuration", () => {
    expect(resolveCatalogAIModel("gpt-5", { CATALOG_AI_MODEL: "gpt-5.2", COPILOT_MODEL: "gpt-4.1" } as any)).toBe(
      "gpt-5"
    );
    expect(resolveCatalogAIModel(undefined, { CATALOG_AI_MODEL: "gpt-5.2", COPILOT_MODEL: "gpt-4.1" } as any)).toBe(
      "gpt-5.2"
    );
    expect(resolveCatalogAIModel(undefined, { COPILOT_MODEL: "gpt-4.1" } as any)).toBe("gpt-4.1");
  });
});
