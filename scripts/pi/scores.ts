import * as fs from "node:fs";
import * as path from "node:path";
import { PI_FREE_CACHE_DIR } from "./snapshot.ts";
import { groupPiFreeFamilies } from "./pool.ts";

/** Persisted capability scores for pi-free model families, refreshed by `mise run llm:rank`. */
export const PI_FREE_SCORES_PATH = path.join(PI_FREE_CACHE_DIR, "scores.json");
/** Scores older than this are ignored so stale measurements never reorder the pool. */
export const PI_FREE_SCORE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
export const PI_FREE_SCORES_VERSION = 1;

/** Raw per-model run counts aggregated from prompt-eval case results. */
export type PiFreeModelRunCounts = {
  total: number;
  passed: number;
  exactMatches: number;
  hardFailures: number;
  infraErrors: number;
  invalidResponses: number;
  executionErrors: number;
};

/** Measured capability of one model family (replicas are interchangeable). */
export type PiFreeFamilyScore = Omit<PiFreeModelRunCounts, "total"> & {
  /** Total number of cases executed against the representative replica. */
  totalCases: number;
  /** Pass rate over graded cases, rounded to four decimals. */
  score: number;
  /** total - infraErrors; the denominator used for `score`. */
  gradedCases: number;
  ranAtMs: number;
};

export type PiFreeScoresCache = {
  version: typeof PI_FREE_SCORES_VERSION;
  updatedAtMs: number;
  families: Record<string, PiFreeFamilyScore>;
};

function isNonNegativeInteger(value: unknown): value is number {
  return Number.isInteger(value) && (value as number) >= 0;
}

/**
 * Score = passed / graded where graded = total - infraErrors. Infra errors are transient
 * (rate limits, network blips) and excluded from the denominator; invalid responses and
 * execution errors count against the family because they signal the model cannot serve
 * this workload. Returns null when too few cases were graded to trust a score: below
 * `minGraded` (default max(3, ceil(total / 4))) or zero total.
 */
export function computePiFreeFamilyScore(
  counts: PiFreeModelRunCounts,
  options: { minGraded?: number; ranAtMs?: number } = {},
): PiFreeFamilyScore | null {
  const total = counts.total;
  if (!isNonNegativeInteger(total) || total === 0) return null;

  const infraErrors = Math.min(Math.max(counts.infraErrors, 0), total);
  const gradedCases = total - infraErrors;
  const minGraded = options.minGraded ?? Math.max(3, Math.ceil(total / 4));
  if (gradedCases < minGraded) return null;

  const passed = Math.min(Math.max(counts.passed, 0), gradedCases);
  return {
    score: Math.round((passed / gradedCases) * 10000) / 10000,
    totalCases: total,
    gradedCases,
    passed,
    exactMatches: counts.exactMatches,
    hardFailures: counts.hardFailures,
    infraErrors,
    invalidResponses: counts.invalidResponses,
    executionErrors: counts.executionErrors,
    ranAtMs: options.ranAtMs ?? Date.now(),
  };
}

function isValidFamilyScore(entry: unknown): entry is PiFreeFamilyScore {
  if (typeof entry !== "object" || entry === null) return false;
  const e = entry as Record<string, unknown>;
  if (typeof e.score !== "number" || !Number.isFinite(e.score) || e.score < 0 || e.score > 1) return false;
  for (const key of ["totalCases", "gradedCases", "passed", "exactMatches", "hardFailures", "infraErrors", "invalidResponses", "executionErrors"]) {
    if (!isNonNegativeInteger(e[key])) return false;
  }
  return typeof e.ranAtMs === "number" && Number.isFinite(e.ranAtMs);
}

/** Reads and validates a scores cache; returns null when missing, corrupt, or malformed. */
export function readPiFreeScores(sourcePath: string = PI_FREE_SCORES_PATH): PiFreeScoresCache | null {
  let parsed: unknown;
  try {
    parsed = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  } catch {
    return null;
  }
  if (typeof parsed !== "object" || parsed === null) return null;
  const cache = parsed as Record<string, unknown>;
  if (cache.version !== PI_FREE_SCORES_VERSION) return null;
  if (typeof cache.updatedAtMs !== "number" || !Number.isFinite(cache.updatedAtMs)) return null;
  if (typeof cache.families !== "object" || cache.families === null || Array.isArray(cache.families)) return null;
  for (const entry of Object.values(cache.families as Record<string, unknown>)) {
    if (!isValidFamilyScore(entry)) return null;
  }
  return parsed as PiFreeScoresCache;
}

/** Atomically writes the scores cache (tmp file + rename) so readers never observe a partial file. */
export function writePiFreeScores(cache: PiFreeScoresCache, targetPath: string = PI_FREE_SCORES_PATH): string {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  const tmpPath = `${targetPath}.tmp.${process.pid}`;
  fs.writeFileSync(tmpPath, JSON.stringify(cache, null, 2) + "\n", "utf8");
  fs.renameSync(tmpPath, targetPath);
  return targetPath;
}

/**
 * Reorder flat model specs so measured families come first (score descending), ties keep
 * original relative order, and unmeasured families trail in their original relative order.
 * Replicas of a family always stay adjacent. Returns the input unchanged when no path is
 * given, the file is missing/corrupt/version-mismatched, or the cache is outside its TTL.
 */
export function orderPoolByCapabilityScores(
  modelSpecs: string[],
  options: { scoresPath?: string; ttlMs?: number; now?: number } = {},
): string[] {
  const specs = [...modelSpecs];
  const scoresPath = options.scoresPath;
  if (!scoresPath) return specs;

  const cache = readPiFreeScores(scoresPath);
  if (!cache) return specs;

  const now = options.now ?? Date.now();
  const ttlMs = options.ttlMs ?? PI_FREE_SCORE_TTL_MS;
  if (now < cache.updatedAtMs || now - cache.updatedAtMs > ttlMs) return specs;

  const families = groupPiFreeFamilies(specs);
  const ranked = families.map((family, index) => ({ family, index, score: cache.families[family.family]?.score ?? null }));
  ranked.sort((a, b) => {
    if (a.score === null && b.score === null) return a.index - b.index;
    if (a.score === null) return 1;
    if (b.score === null) return -1;
    return b.score - a.score || a.index - b.index;
  });

  const ordered: string[] = [];
  for (const { family } of ranked) ordered.push(...family.replicas.map((replica) => replica.spec));
  return ordered;
}
