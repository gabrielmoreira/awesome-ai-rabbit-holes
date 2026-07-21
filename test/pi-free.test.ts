import { afterEach, describe, expect, it } from "vitest";
import {
  PI_FREE_MODEL_CYCLE,
  PI_FREE_DEFAULT_MODEL,
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

const EXPECTED_PI_FREE_MODEL_CYCLE = [
  "cloudflare/@cf/moonshotai/kimi-k2.6",
  "mistral/mistral-medium-2604",
  "openrouter/google/gemma-4-31b-it:free",
  "openrouter/google/gemma-4-26b-a4b-it:free",
  "cloudflare/@cf/google/gemma-4-26b-a4b-it",
  "openrouter/nvidia/nemotron-3-super-120b-a12b:free",
  "cloudflare/@cf/nvidia/nemotron-3-120b-a12b",
  "cloudflare/@cf/openai/gpt-oss-120b",
  "mistral/mistral-small-2603",
  "mistral/mistral-large-2512",
  "openrouter/openai/gpt-oss-20b:free",
  "cloudflare/@cf/openai/gpt-oss-20b",
  "openrouter/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
  "openrouter/nvidia/nemotron-3-nano-30b-a3b:free",
  "openrouter/nvidia/nemotron-nano-9b-v2:free",
  "cloudflare/@cf/meta/llama-4-scout-17b-16e-instruct",
  "openrouter/nvidia/nemotron-nano-12b-v2-vl:free",
  "openrouter/poolside/laguna-m.1:free",
] as const;

const EXPECTED_OPENROUTER_MODEL_ORDER = EXPECTED_PI_FREE_MODEL_CYCLE.filter((model) =>
  model.startsWith("openrouter/")
);

afterEach(() => {
  resetPiFreeRecentFailures();
});

describe("pi-free model selection", () => {
  it("uses only supported providers from the source-controlled fallback order", () => {
    const env: PiFreeEnvValues = {
      ...FULLY_CONFIGURED_ENV,
      CLOUDFLARE_API_TOKEN: undefined,
      CLOUDFLARE_ACCOUNT_ID: undefined,
      MISTRAL_API_KEY: undefined,
    };

    const ordered = resolvePiFreeOrderedModels(env);
    expect(ordered).toEqual(EXPECTED_OPENROUTER_MODEL_ORDER);
  });

  it("keeps the highest-ranked openrouter entries first when only OpenRouter is configured", () => {
    const env: PiFreeEnvValues = {
      OPENROUTER_API_KEY: "or-key",
    };

    const ordered = resolvePiFreeOrderedModels(env);
    expect(ordered).toEqual(EXPECTED_OPENROUTER_MODEL_ORDER);
  });

  it("keeps the exact static order when every provider is configured", () => {
    const ordered = resolvePiFreeOrderedModels(FULLY_CONFIGURED_ENV);
    expect(PI_FREE_MODEL_CYCLE).toEqual(EXPECTED_PI_FREE_MODEL_CYCLE);
    expect(ordered).toEqual(EXPECTED_PI_FREE_MODEL_CYCLE);
    expect(ordered[0] ?? null).toBe(PI_FREE_DEFAULT_MODEL);
  });

  it("excludes aliases and retired free model ids", () => {
    const staleModelPattern =
      /latest|openrouter\/openai\/gpt-oss-120b:free|glm-4\.5-air|ling[-.]?2\.6|qwen3-(?:next|coder)|llama-3\.3|trinity|cloudflare\/@cf\/moonshotai\/kimi-k2\.5/i;

    expect(PI_FREE_MODEL_CYCLE.some((model) => model.startsWith("nvidia/"))).toBe(false);
    expect(PI_FREE_MODEL_CYCLE.some((model) => staleModelPattern.test(model))).toBe(false);
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
    expect(isPiFreeRetryableError("Internal Server Error")).toBe(true);
    expect(isPiFreeRetryableError("403 this model requires a subscription, upgrade for access")).toBe(true);
    expect(isPiFreeRetryableError('Mistral API error (404): {"message":"no Route matched with those values"}')).toBe(true);
    expect(isPiFreeRetryableError("permission denied")).toBe(false);
  });

  it("exports the complete exact-version bootstrap cycle", () => {
    expect(PI_FREE_MODEL_CYCLE).toHaveLength(EXPECTED_PI_FREE_MODEL_CYCLE.length);
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
