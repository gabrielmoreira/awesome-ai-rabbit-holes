import { describe, expect, it } from "vitest";
import { buildPiFreeDoctorReport } from "../scripts/pi-free-doctor.js";

describe("buildPiFreeDoctorReport", () => {
  it("summarizes configured providers, working models, and the first usable model", () => {
    const report = buildPiFreeDoctorReport({
      env: {
        OPENROUTER_API_KEY: "present",
        NVIDIA_API_KEY: "present",
      } as NodeJS.ProcessEnv,
      allModels: {
        models: [
          { spec: "openrouter/google/gemma-4-31b-it:free", provider: "openrouter" },
          { spec: "nvidia/deepseek-ai/deepseek-v4-pro", provider: "nvidia" },
        ],
      },
      rankedModels: {
        ordered_models: ["openrouter/google/gemma-4-31b-it:free"],
        results: [
          { spec: "openrouter/google/gemma-4-31b-it:free", provider: "openrouter", ok: true, error_message: null },
          { spec: "nvidia/deepseek-ai/deepseek-v4-pro", provider: "nvidia", ok: false, error_message: "401 status code (no body)" },
        ],
      },
    });

    expect(report.first_usable_model).toBe("openrouter/google/gemma-4-31b-it:free");
    expect(report.providers.find((provider) => provider.provider === "openrouter")).toMatchObject({
      configured: true,
      discovered: 1,
      working: 1,
      failing: 0,
      first_working_model: "openrouter/google/gemma-4-31b-it:free",
    });
    expect(report.providers.find((provider) => provider.provider === "nvidia")).toMatchObject({
      configured: true,
      discovered: 1,
      working: 0,
      failing: 1,
    });
  });

  it("warns when providers are unconfigured or have no working ranked model", () => {
    const report = buildPiFreeDoctorReport({
      env: {} as NodeJS.ProcessEnv,
      allModels: {
        models: [{ spec: "openrouter/google/gemma-4-31b-it:free", provider: "openrouter" }],
      },
      rankedModels: {
        ordered_models: [],
        results: [{ spec: "openrouter/google/gemma-4-31b-it:free", provider: "openrouter", ok: false, error_message: "429 rate limit" }],
      },
    });

    expect(report.first_usable_model).toBeNull();
    expect(report.providers.find((provider) => provider.provider === "openrouter")?.warning).toContain("not configured");
    expect(report.warnings.some((warning) => warning.includes("No usable ranked model"))).toBe(true);
  });
});
