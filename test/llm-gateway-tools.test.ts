import { describe, expect, it } from "vitest";
import * as path from "node:path";
import { buildPiFreeTaskArgs,
buildPiFreeTaskEnv,
resolveCatalogLlmModel,
resolveCatalogLlmTimeoutMs,
stripPiFreeTaskPrelude, } from "../scripts/catalog/llm-gateway.js"

describe("buildPiFreeTaskArgs", () => {
  it("spawns the shared pi:free mise task in stdin mode", () => {
    expect(buildPiFreeTaskArgs()).toEqual([
      "run",
      "pi:free",
      "--",
      "--stdin",
    ]);
  });

  it("keeps the prompt off the command line", () => {
    expect(buildPiFreeTaskArgs().join(" ")).not.toContain("Reply with OK.");
  });

  it("appends an explicit model override when requested", () => {
    expect(buildPiFreeTaskArgs("openrouter/openai/gpt-oss-120b:free")).toEqual([
      "run",
      "pi:free",
      "--",
      "--stdin",
      "--model",
      "openrouter/openai/gpt-oss-120b:free",
    ]);
  });
});

describe("buildPiFreeTaskEnv", () => {
  it("keeps provider credentials while dropping npm lifecycle variables", () => {
    const fakeNodeModulesBin = path.join("workspace", "node_modules", ".bin");
    const fakeSystemBin = path.join("system", "bin");
    const taskEnv = buildPiFreeTaskEnv({
      OPENROUTER_API_KEY: "present",
      npm_config_prefix: "tool-prefix",
      npm_lifecycle_event: "catalog",
      INIT_CWD: path.join("workspace", "repo"),
      Path: [fakeNodeModulesBin, fakeSystemBin].join(path.delimiter),
    } as NodeJS.ProcessEnv);

    expect(taskEnv).toEqual({
      OPENROUTER_API_KEY: "present",
      Path: fakeSystemBin,
    });
  });
});

describe("stripPiFreeTaskPrelude", () => {
  it("drops the mise task prelude line and keeps the model output", () => {
    expect(
      stripPiFreeTaskPrelude(
        "[pi:free] $ pi --no-tools --no-skills --no-extensions -p Reply with OK.\nOK.\n"
      )
    ).toBe("OK.");
  });
});

describe("resolveCatalogLlmTimeoutMs", () => {
  it("defaults and validates the optional timeout override", () => {
    expect(resolveCatalogLlmTimeoutMs({} as NodeJS.ProcessEnv)).toBe(60_000);
    expect(resolveCatalogLlmTimeoutMs({ CATALOG_LLM_TIMEOUT_MS: "45000" } as NodeJS.ProcessEnv)).toBe(45_000);
    expect(resolveCatalogLlmTimeoutMs({ CATALOG_LLM_TIMEOUT_MS: "garbage" } as NodeJS.ProcessEnv)).toBe(60_000);
  });
});

describe("resolveCatalogLlmModel", () => {
  it("defaults the catalog runner to the pi-free fallback chain when no override is set", () => {
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
