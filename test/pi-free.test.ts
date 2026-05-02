import { describe, expect, it } from "vitest";
import {
  PI_FREE_DEFAULT_MODEL,
  findNextPiFreeFallbackModel,
  isPiFreeRetryableError,
  parsePiFreeModelSpec,
  pickPiFreeFallbackCandidate,
  resolvePiFreeOrderedModels,
  resolvePiFreeStartupModel,
  shouldAutoSelectPiFreeStartupModel,
} from "../.pi/extensions/pi-free-fallback.js";

describe("pi-free fallback extension", () => {
  it("does not auto-select over an explicit model request", () => {
    expect(shouldAutoSelectPiFreeStartupModel([])).toBe(true);
    expect(shouldAutoSelectPiFreeStartupModel(["--model", "openrouter/foo"])).toBe(false);
    expect(shouldAutoSelectPiFreeStartupModel(["--provider", "openrouter"])).toBe(false);
    expect(shouldAutoSelectPiFreeStartupModel(["--models", "openrouter/*"])).toBe(false);
  });

  it("tries higher-intelligence model families before lower ones across authenticated providers", () => {
    const env = {
      OPENROUTER_API_KEY: "or-key",
      CLOUDFLARE_API_TOKEN: "cf-legacy",
      CLOUDFLARE_ACCOUNT_ID: "acct",
      NVIDIA_API_KEY: "nv-key",
    };

    expect(resolvePiFreeStartupModel(env)).toBe("cloudflare/@cf/moonshotai/kimi-k2.6");
    expect(resolvePiFreeOrderedModels(env)).toEqual([
      "cloudflare/@cf/moonshotai/kimi-k2.6",
      "nvidia/z-ai/glm-5.1",
      "nvidia/minimaxai/minimax-m2.7",
      "nvidia/qwen/qwen3.5-397b-a17b",
      "openrouter/google/gemma-4-31b-it:free",
      "nvidia/mistralai/mistral-medium-3.5-128b",
      "cloudflare/@cf/moonshotai/kimi-k2.5",
      "nvidia/moonshotai/kimi-k2.5",
      "openrouter/nvidia/nemotron-3-super-120b-a12b:free",
      "openrouter/openai/gpt-oss-120b:free",
      "cloudflare/@cf/openai/gpt-oss-120b",
      "nvidia/openai/gpt-oss-120b",
    ]);
  });

  it("prefers the ranked openrouter shortlist when that provider is configured", () => {
    expect(resolvePiFreeStartupModel({ OPENROUTER_API_KEY: "or-key" })).toBe(PI_FREE_DEFAULT_MODEL);
  });

  it("parses provider-scoped model ids", () => {
    expect(parsePiFreeModelSpec("cloudflare/@cf/openai/gpt-oss-120b")).toEqual({
      provider: "cloudflare",
      id: "@cf/openai/gpt-oss-120b",
    });
    expect(parsePiFreeModelSpec("invalid")).toBeNull();
  });

  it("tries the same model family on every free provider before dropping lower", () => {
    expect(
      findNextPiFreeFallbackModel(
        [
          "openrouter/openai/gpt-oss-120b:free",
          "cloudflare/@cf/openai/gpt-oss-120b",
          "nvidia/openai/gpt-oss-120b",
          "mistral/devstral-2512",
        ],
        "openrouter/openai/gpt-oss-120b:free"
      )
    ).toBe("cloudflare/@cf/openai/gpt-oss-120b");
  });

  it("skips stale candidates and keeps scanning the fallback chain", () => {
    expect(
      pickPiFreeFallbackCandidate(
        [
          "openrouter/openai/gpt-oss-120b:free",
          "cloudflare/@cf/openai/gpt-oss-120b",
          "nvidia/openai/gpt-oss-120b",
          "mistral/devstral-2512",
        ],
        "openrouter/openai/gpt-oss-120b:free",
        (modelKey) => modelKey === "nvidia/openai/gpt-oss-120b"
      )
    ).toBe("nvidia/openai/gpt-oss-120b");
  });

  it("classifies provider rate limits as retryable fallback errors", () => {
    expect(isPiFreeRetryableError("429 Provider returned error")).toBe(true);
    expect(isPiFreeRetryableError("permission denied")).toBe(false);
  });
});

