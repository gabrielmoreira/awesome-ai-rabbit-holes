import { afterEach, describe, expect, it } from "vitest";
import {
  PI_FREE_MODEL_CYCLE,
  PI_FREE_RECENT_FAILURE_TTL_MS,
  isPiFreeRetryableError,
  listPiFreeRecentFailureRecords,
  parsePiFreeModelSpec,
  recordPiFreeRecentFailure,
  resetPiFreeRecentFailures,
  resolvePiFreeOrderedModels,
  resolvePiFreeStartupCandidates,
  type PiFreeEnvValues,
} from "../scripts/pi/models.js";
import { parsePiFreeCliArgs } from "../scripts/pi/free.js";

const FULLY_CONFIGURED_ENV: PiFreeEnvValues = {
  OPENROUTER_API_KEY: "or-key",
  NVIDIA_API_KEY: "nv-key",
  CLOUDFLARE_API_TOKEN: "cf-token",
  CLOUDFLARE_ACCOUNT_ID: "cf-account",
  MISTRAL_API_KEY: "mi-key",
};

afterEach(() => {
  resetPiFreeRecentFailures();
});

describe("pi-free model selection", () => {
  it("uses the source-controlled fallback order filtered by configured providers", () => {
    const env: PiFreeEnvValues = {
      ...FULLY_CONFIGURED_ENV,
      CLOUDFLARE_API_TOKEN: undefined,
      CLOUDFLARE_ACCOUNT_ID: undefined,
      MISTRAL_API_KEY: undefined,
    };

    const ordered = resolvePiFreeOrderedModels(env);
    expect(ordered.slice(0, 5)).toEqual([
      "nvidia/moonshotai/kimi-k2.6",
      "nvidia/deepseek-ai/deepseek-v4-pro",
      "nvidia/z-ai/glm-5.1",
      "nvidia/z-ai/glm5",
      "nvidia/minimaxai/minimax-m2.7",
    ]);
    expect(ordered[0] ?? null).toBe("nvidia/moonshotai/kimi-k2.6");
  });

  it("keeps the highest-ranked openrouter entries first when only OpenRouter is configured", () => {
    const env: PiFreeEnvValues = {
      OPENROUTER_API_KEY: "or-key",
    };

    const ordered = resolvePiFreeOrderedModels(env);
    expect(ordered.slice(0, 4)).toEqual([
      "openrouter/minimax/minimax-m2.5:free",
      "openrouter/tencent/hy3-preview:free",
      "openrouter/google/gemma-4-31b-it:free",
      "openrouter/stepfun/step-3.5-flash:free",
    ]);
    expect(ordered[0] ?? null).toBe("openrouter/minimax/minimax-m2.5:free");
  });

  it("keeps the full static order when every provider is configured", () => {
    const ordered = resolvePiFreeOrderedModels(FULLY_CONFIGURED_ENV);
    expect(ordered.slice(0, 5)).toEqual(PI_FREE_MODEL_CYCLE.slice(0, 5));
    expect(ordered[0] ?? null).toBe(PI_FREE_MODEL_CYCLE[0] ?? null);
  });

  it("stores recent failures in memory and exposes active records", () => {
    const ordered = resolvePiFreeOrderedModels(FULLY_CONFIGURED_ENV);

    recordPiFreeRecentFailure(ordered[0]!, "429 provider returned error", 1_000);
    recordPiFreeRecentFailure(ordered[1]!, "503 upstream overloaded", 2_000);

    expect(listPiFreeRecentFailureRecords(3_000).map((record) => record.model)).toEqual([
      ordered[0],
      ordered[1],
    ]);
  });

  it("skips unexpired recent failures on the next startup selection", () => {
    const ordered = resolvePiFreeOrderedModels(FULLY_CONFIGURED_ENV);
    const now = Date.parse("2026-05-04T10:00:00.000Z");

    recordPiFreeRecentFailure(ordered[0]!, "429 provider returned error", now);

    const startupCandidates = resolvePiFreeStartupCandidates(FULLY_CONFIGURED_ENV, { now: now + 5 * 60_000 });
    expect(startupCandidates.slice(0, 3)).toEqual(ordered.slice(1, 4));
    expect(startupCandidates[0] ?? null).toBe(ordered[1] ?? null);
  });

  it("expires recent failures after the ttl window", () => {
    const ordered = resolvePiFreeOrderedModels(FULLY_CONFIGURED_ENV);
    const now = Date.parse("2026-05-04T10:00:00.000Z");

    recordPiFreeRecentFailure(ordered[0]!, "503 upstream overloaded", now);

    const startupCandidates = resolvePiFreeStartupCandidates(FULLY_CONFIGURED_ENV, {
      now: now + PI_FREE_RECENT_FAILURE_TTL_MS + 1,
    });
    expect(startupCandidates[0] ?? null).toBe(ordered[0] ?? null);
    expect(listPiFreeRecentFailureRecords(now + PI_FREE_RECENT_FAILURE_TTL_MS + 1)).toEqual([]);
  });

  it("falls back to the base order when every configured model is cooling down", () => {
    const ordered = resolvePiFreeOrderedModels(FULLY_CONFIGURED_ENV);

    expect(resolvePiFreeStartupCandidates(FULLY_CONFIGURED_ENV, { recentFailures: ordered })).toEqual(ordered);
  });

  it("parses provider-scoped model ids", () => {
    expect(parsePiFreeModelSpec("cloudflare/@cf/openai/gpt-oss-120b")).toEqual({
      provider: "cloudflare",
      id: "@cf/openai/gpt-oss-120b",
    });
    expect(parsePiFreeModelSpec("invalid")).toBeNull();
  });

  it("classifies timeouts and provider failures as retryable", () => {
    expect(isPiFreeRetryableError("timed out after 60000ms")).toBe(true);
    expect(isPiFreeRetryableError("Connection error.")).toBe(true);
    expect(isPiFreeRetryableError("400 Reasoning is mandatory for this endpoint and cannot be disabled.")).toBe(true);
    expect(isPiFreeRetryableError("429 Provider returned error")).toBe(true);
    expect(isPiFreeRetryableError("403 this model requires a subscription, upgrade for access")).toBe(true);
    expect(isPiFreeRetryableError('Mistral API error (404): {"message":"no Route matched with those values"}')).toBe(true);
    expect(isPiFreeRetryableError("permission denied")).toBe(false);
  });

  it("exports a non-empty bootstrap cycle", () => {
    expect(PI_FREE_MODEL_CYCLE.length).toBeGreaterThan(50);
  });
});

describe("pi-free cli args", () => {
  it("accepts a positional prompt for the llm task surface", () => {
    expect(parsePiFreeCliArgs(["Reply with exactly HI."])).toEqual({
      prompt: "Reply with exactly HI.",
      useStdin: false,
      model: null,
    });
  });

  it("still supports explicit flags", () => {
    expect(parsePiFreeCliArgs(["--stdin", "--model", "mistral/codestral-latest"])).toEqual({
      prompt: null,
      useStdin: true,
      model: "mistral/codestral-latest",
    });
  });

  it("also reads usage-backed task env defaults", () => {
    expect(
      parsePiFreeCliArgs([], {
        usage_prompt: "Reply with exactly HI.",
        usage_stdin: "false",
        usage_model: "mistral/codestral-latest",
      } as NodeJS.ProcessEnv)
    ).toEqual({
      prompt: "Reply with exactly HI.",
      useStdin: false,
      model: "mistral/codestral-latest",
    });
  });

  it("rejects unknown flags and missing values", () => {
    expect(() => parsePiFreeCliArgs(["--nope"])).toThrow("Unknown llm argument: --nope");
    expect(() => parsePiFreeCliArgs(["--model"])).toThrow("Missing value for --model");
  });

  it("rejects multiple positional prompts", () => {
    expect(() => parsePiFreeCliArgs(["one", "two"])).toThrow("llm accepts only one positional prompt.");
  });
});
