import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  findNextPiFreeFallbackModel,
  isPiFreeRetryableError,
  pickPiFreeFallbackCandidate,
  shouldAutoSelectPiFreeStartupModel,
} from "../scripts/pi/fallback-pi-extension.js";
import {
  PI_FREE_DEFAULT_MODEL,
  PI_FREE_MODEL_CYCLE,
  PI_FREE_RECENT_FAILURE_TTL_MS,
  listPiFreeRecentFailureRecords,
  parsePiFreeModelSpec,
  recordPiFreeRecentFailure,
  resolvePiFreeOrderedModels,
  resolvePiFreeRecentFailureDir,
  resolvePiFreeStartupCandidates,
  resolvePiFreeStartupModel,
  type PiFreeEnvValues,
} from "../scripts/pi/models.js";

const FULLY_CONFIGURED_ENV: PiFreeEnvValues = {
  OPENROUTER_API_KEY: "or-key",
  NVIDIA_API_KEY: "nv-key",
  CLOUDFLARE_API_TOKEN: "cf-token",
  CLOUDFLARE_ACCOUNT_ID: "cf-account",
  MISTRAL_API_KEY: "mi-key",
};

const tempDirs: string[] = [];

function createTempPiEnv(overrides: PiFreeEnvValues = {}): PiFreeEnvValues {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "aarh-pi-free-"));
  tempDirs.push(dir);
  return {
    ...FULLY_CONFIGURED_ENV,
    PI_CODING_AGENT_DIR: dir,
    ...overrides,
  };
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe("pi-free fallback extension", () => {
  it("does not auto-select over an explicit model request", () => {
    expect(shouldAutoSelectPiFreeStartupModel([])).toBe(true);
    expect(shouldAutoSelectPiFreeStartupModel(["--model", "openrouter/foo"])).toBe(false);
    expect(shouldAutoSelectPiFreeStartupModel(["--provider", "openrouter"])).toBe(false);
    expect(shouldAutoSelectPiFreeStartupModel(["--models", "openrouter/*"])).toBe(false);
  });

  it("uses the source-controlled fallback order filtered by configured providers", () => {
    const env = createTempPiEnv({
      CLOUDFLARE_API_TOKEN: undefined,
      CLOUDFLARE_ACCOUNT_ID: undefined,
      MISTRAL_API_KEY: undefined,
    });

    expect(PI_FREE_DEFAULT_MODEL).toBe(PI_FREE_MODEL_CYCLE[0]);
    expect(resolvePiFreeOrderedModels(env).slice(0, 4)).toEqual([
      "nvidia/moonshotai/kimi-k2.6",
      "nvidia/deepseek-ai/deepseek-v4-pro",
      "nvidia/z-ai/glm-5.1",
      "nvidia/minimaxai/minimax-m2.7",
    ]);
    expect(resolvePiFreeStartupModel(env)).toBe("nvidia/moonshotai/kimi-k2.6");
  });

  it("keeps the full static order when every provider is configured", () => {
    const env = createTempPiEnv();

    expect(resolvePiFreeOrderedModels(env).slice(0, 5)).toEqual(PI_FREE_MODEL_CYCLE.slice(0, 5));
    expect(resolvePiFreeStartupModel(env)).toBe(PI_FREE_MODEL_CYCLE[0]);
  });

  it("stores recent failures as independent per-model cache files", () => {
    const env = createTempPiEnv();
    const ordered = resolvePiFreeOrderedModels(env);

    recordPiFreeRecentFailure(ordered[0]!, "429 provider returned error", env, 1_000);
    recordPiFreeRecentFailure(ordered[1]!, "503 upstream overloaded", env, 2_000);

    const dir = resolvePiFreeRecentFailureDir(env);
    expect(fs.readdirSync(dir).filter((entry) => entry.endsWith(".json")).length).toBe(2);
    expect(listPiFreeRecentFailureRecords(env, 3_000).map((record) => record.model)).toEqual([
      ordered[0],
      ordered[1],
    ]);
  });

  it("skips unexpired recent failures on the next startup selection", () => {
    const env = createTempPiEnv();
    const ordered = resolvePiFreeOrderedModels(env);
    const now = Date.parse("2026-05-04T10:00:00.000Z");

    recordPiFreeRecentFailure(ordered[0]!, "429 provider returned error", env, now);

    expect(resolvePiFreeStartupCandidates(env, { now: now + 5 * 60_000 }).slice(0, 3)).toEqual(ordered.slice(1, 4));
    expect(resolvePiFreeStartupModel(env, { now: now + 5 * 60_000 })).toBe(ordered[1]);
  });

  it("expires recent failures after the ttl window", () => {
    const env = createTempPiEnv();
    const ordered = resolvePiFreeOrderedModels(env);
    const now = Date.parse("2026-05-04T10:00:00.000Z");

    recordPiFreeRecentFailure(ordered[0]!, "503 upstream overloaded", env, now);

    expect(resolvePiFreeStartupModel(env, { now: now + PI_FREE_RECENT_FAILURE_TTL_MS + 1 })).toBe(ordered[0]);
    expect(listPiFreeRecentFailureRecords(env, now + PI_FREE_RECENT_FAILURE_TTL_MS + 1)).toEqual([]);
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

  it("walks the ranked fallback chain in order", () => {
    expect(
      findNextPiFreeFallbackModel(
        [
          "cloudflare/@cf/moonshotai/kimi-k2.6",
          "nvidia/moonshotai/kimi-k2.6",
          "nvidia/deepseek-ai/deepseek-v4-pro",
        ],
        "cloudflare/@cf/moonshotai/kimi-k2.6"
      )
    ).toBe("nvidia/moonshotai/kimi-k2.6");
  });

  it("skips unavailable candidates and keeps scanning the fallback chain", () => {
    expect(
      pickPiFreeFallbackCandidate(
        [
          "cloudflare/@cf/moonshotai/kimi-k2.6",
          "nvidia/moonshotai/kimi-k2.6",
          "openrouter/minimax/minimax-m2.5:free",
        ],
        "cloudflare/@cf/moonshotai/kimi-k2.6",
        (modelKey) => modelKey === "openrouter/minimax/minimax-m2.5:free"
      )
    ).toBe("openrouter/minimax/minimax-m2.5:free");
  });

  it("classifies provider outages, subscription failures, and route mismatches as retryable", () => {
    expect(isPiFreeRetryableError("429 Provider returned error")).toBe(true);
    expect(isPiFreeRetryableError("403 this model requires a subscription, upgrade for access")).toBe(true);
    expect(isPiFreeRetryableError('Mistral API error (404): {"message":"no Route matched with those values"}')).toBe(true);
    expect(isPiFreeRetryableError("permission denied")).toBe(false);
  });

  it("exports a non-empty bootstrap cycle", () => {
    expect(PI_FREE_MODEL_CYCLE.length).toBeGreaterThan(20);
  });
});
