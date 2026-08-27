import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { groupPiFreeFamilies } from "../scripts/pi/pool.js";
import { resolvePiFreePoolModels, resolvePiFreePoolStartupCandidates } from "../scripts/pi/discover.js";
import { resetPiFreeRecentFailures } from "../scripts/pi/models.js";
import {
  computePiFreeFamilyScore,
  orderPoolByCapabilityScores,
  PI_FREE_SCORE_TTL_MS,
  PI_FREE_SCORES_VERSION,
  readPiFreeScores,
  writePiFreeScores,
  type PiFreeModelRunCounts,
  type PiFreeScoresCache,
} from "../scripts/pi/scores.js";

const NOW = Date.parse("2026-08-23T12:00:00Z");
const ENV = { OPENROUTER_API_KEY: "or-key", NVIDIA_API_KEY: "nv-key", CLOUDFLARE_API_TOKEN: "cf-token", CLOUDFLARE_ACCOUNT_ID: "cf-account", MISTRAL_API_KEY: "mi-key" };

let tmpDir: string;

beforeEach(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "pi-free-scores-"));
});

afterEach(() => {
  resetPiFreeRecentFailures();
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

function counts(overrides: Partial<PiFreeModelRunCounts> = {}): PiFreeModelRunCounts {
  return { total: 20, passed: 15, exactMatches: 12, hardFailures: 3, infraErrors: 0, invalidResponses: 0, executionErrors: 2, ...overrides };
}

function makeScoresCache(families: Record<string, number>, updatedAtMs = NOW): PiFreeScoresCache {
  return {
    version: PI_FREE_SCORES_VERSION,
    updatedAtMs,
    families: Object.fromEntries(
      Object.entries(families).map(([name, score]) => [
        name,
        { score, totalCases: 20, gradedCases: 20, passed: Math.round(score * 20), exactMatches: 0, hardFailures: 0, infraErrors: 0, invalidResponses: 0, executionErrors: 0, ranAtMs: updatedAtMs },
      ]),
    ),
  };
}

function writeScoresFixture(cache: PiFreeScoresCache): string {
  const target = path.join(tmpDir, "scores.json");
  fs.writeFileSync(target, JSON.stringify(cache));
  return target;
}

describe("computePiFreeFamilyScore", () => {
  it("computes the pass rate over graded cases rounded to four decimals", () => {
    expect(computePiFreeFamilyScore(counts(), { ranAtMs: NOW })).toMatchObject({ score: 0.75, totalCases: 20, gradedCases: 20, passed: 15, infraErrors: 0 });
  });

  it("excludes infra errors from the denominator", () => {
    expect(computePiFreeFamilyScore(counts({ total: 26, passed: 8, infraErrors: 6 }), { ranAtMs: NOW })).toMatchObject({ score: 0.4, gradedCases: 20 });
  });

  it("returns null when every case is an infra error", () => {
    expect(computePiFreeFamilyScore(counts({ total: 10, passed: 0, infraErrors: 10 }), { ranAtMs: NOW })).toBeNull();
  });

  it("returns null for zero total cases", () => {
    expect(computePiFreeFamilyScore(counts({ total: 0, passed: 0, exactMatches: 0, hardFailures: 0, infraErrors: 0, invalidResponses: 0, executionErrors: 0 }), { ranAtMs: NOW })).toBeNull();
  });

  it("returns null when graded cases fall below the default quarter-of-total threshold", () => {
    expect(computePiFreeFamilyScore(counts({ total: 26, passed: 2, infraErrors: 24 }), { ranAtMs: NOW })).toBeNull();
  });

  it("honors an explicit minGraded override", () => {
    const score = computePiFreeFamilyScore(counts({ total: 26, passed: 2, infraErrors: 24 }), { minGraded: 1, ranAtMs: NOW });
    expect(score).toMatchObject({ score: 1, gradedCases: 2 });
  });
});

describe("pi-free scores cache", () => {
  it("round-trips through atomic write and read without leaving temp files", () => {
    const target = path.join(tmpDir, "nested", "scores.json");
    writePiFreeScores(makeScoresCache({ "a/b": 0.5 }), target);
    expect(readPiFreeScores(target)).toEqual(makeScoresCache({ "a/b": 0.5 }));
    expect(fs.readdirSync(path.dirname(target))).toEqual(["scores.json"]);
  });

  it("returns null for missing, corrupt, or version-mismatched score files", () => {
    const target = path.join(tmpDir, "missing.json");
    expect(readPiFreeScores(target)).toBeNull();

    fs.writeFileSync(target, "{not json");
    expect(readPiFreeScores(target)).toBeNull();

    const valid = makeScoresCache({ "a/b": 0.5 });
    fs.writeFileSync(target, JSON.stringify({ ...valid, version: PI_FREE_SCORES_VERSION + 1 }));
    expect(readPiFreeScores(target)).toBeNull();
  });
});

const POOL = [
  "openrouter/google/gemma-4-26b-a4b-it:free",
  "cloudflare/@cf/google/gemma-4-26b-a4b-it",
  "openrouter/mistralai/mistral-small-2512:free",
  "cloudflare/@cf/meta/llama-4-scout-17b-16e-instruct",
];

describe("orderPoolByCapabilityScores", () => {
  it("returns the pool unchanged when no scoresPath is provided", () => {
    expect(orderPoolByCapabilityScores(POOL)).toEqual(POOL);
  });

  it("orders measured families by score desc, keeps replicas together, and leaves unmeasured last", () => {
    const scoresPath = writeScoresFixture(makeScoresCache({ "meta/llama-4-scout-17b-16e-instruct": 0.9, "mistralai/mistral-small-2512": 0.5 }));
    expect(orderPoolByCapabilityScores(POOL, { scoresPath, now: NOW })).toEqual([
      "cloudflare/@cf/meta/llama-4-scout-17b-16e-instruct",
      "openrouter/mistralai/mistral-small-2512:free",
      "openrouter/google/gemma-4-26b-a4b-it:free",
      "cloudflare/@cf/google/gemma-4-26b-a4b-it",
    ]);
  });

  it("keeps original relative order for tied scores", () => {
    const scoresPath = writeScoresFixture(makeScoresCache({ "meta/llama-4-scout-17b-16e-instruct": 0.7, "mistralai/mistral-small-2512": 0.7 }));
    expect(orderPoolByCapabilityScores(POOL, { scoresPath, now: NOW })).toEqual([
      "openrouter/mistralai/mistral-small-2512:free",
      "cloudflare/@cf/meta/llama-4-scout-17b-16e-instruct",
      "openrouter/google/gemma-4-26b-a4b-it:free",
      "cloudflare/@cf/google/gemma-4-26b-a4b-it",
    ]);
  });

  it("ignores scores older than the TTL", () => {
    const scoresPath = writeScoresFixture(makeScoresCache({ "meta/llama-4-scout-17b-16e-instruct": 0.9 }, NOW - PI_FREE_SCORE_TTL_MS - 1));
    expect(orderPoolByCapabilityScores(POOL, { scoresPath, now: NOW })).toEqual(POOL);
  });
});

describe("startup candidate score ordering", () => {
  it("keeps static order when no scoresPath is provided", () => {
    const cachePath = path.join(tmpDir, "candidates.json");
    expect(resolvePiFreePoolStartupCandidates(ENV, { cachePath })).toEqual(resolvePiFreePoolModels(ENV, { cachePath }));
  });

  it("reorders startup candidates by fresh capability scores", () => {
    const cachePath = path.join(tmpDir, "candidates.json");
    const base = resolvePiFreePoolModels(ENV, { cachePath });
    const families = groupPiFreeFamilies(base);
    expect(families.length).toBeGreaterThanOrEqual(3);

    const top = families[0].family;
    const bottom = families[families.length - 1].family;
    const rest = families.filter((family) => family.family !== top && family.family !== bottom).map((family) => family.family);
    const scoresPath = writeScoresFixture(makeScoresCache({ [bottom]: 0.95, [top]: 0.1 }));

    const candidates = resolvePiFreePoolStartupCandidates(ENV, { cachePath, scoresPath });

    expect(candidates).toHaveLength(base.length);
    expect(groupPiFreeFamilies(candidates).map((family) => family.family)).toEqual([bottom, top, ...rest]);
  });

  it("keeps static order when the scores file is stale", () => {
    const cachePath = path.join(tmpDir, "candidates.json");
    const base = resolvePiFreePoolModels(ENV, { cachePath });
    const families = groupPiFreeFamilies(base);
    const scoresPath = writeScoresFixture(makeScoresCache({ [families[0].family]: 0.9 }, NOW - PI_FREE_SCORE_TTL_MS - 1));

    expect(resolvePiFreePoolStartupCandidates(ENV, { cachePath, scoresPath })).toEqual(base);
  });
});
