import * as fs from "node:fs";
import * as path from "node:path";
import { CACHE_DIR } from "../support/paths.ts";
import { groupPiFreeFamilies } from "./pool.ts";
import { listPiFreeRecentFailureRecords, resolvePiFreeOrderedModels, type PiFreeEnvValues } from "./models.ts";

export const PI_FREE_CACHE_DIR = path.join(CACHE_DIR, "pi-free");
export const PI_FREE_POOL_SNAPSHOT_PATH = path.join(PI_FREE_CACHE_DIR, "pool.json");
export const PI_FREE_CANDIDATES_PATH = path.join(PI_FREE_CACHE_DIR, "candidates.json");

export type PiFreeReplicaSnapshot = {
  provider: string;
  modelId: string;
  spec: string;
  alive: boolean;
};

export type PiFreeFamilySnapshot = {
  family: string;
  order: number;
  score: number | null;
  replicas: PiFreeReplicaSnapshot[];
};

export type PiFreePoolSnapshot = {
  version: 1;
  updatedAtMs: number;
  families: PiFreeFamilySnapshot[];
};

export type BuildPiFreePoolSnapshotOptions = {
  nowMs?: number;
};

/**
 * Builds a pool snapshot from the source-controlled ordered cycle and active recent-failure records.
 * `score` stays null until capability scoring (catalog:evals) fills it in.
 */
export function buildPiFreePoolSnapshot(
  envValues: PiFreeEnvValues = process.env,
  options: BuildPiFreePoolSnapshotOptions = {}
): PiFreePoolSnapshot {
  const nowMs = Number.isFinite(options.nowMs) ? (options.nowMs as number) : Date.now();
  const orderedModels = resolvePiFreeOrderedModels(envValues);
  const failedSpecs = new Set(listPiFreeRecentFailureRecords(nowMs).map((record) => record.model));

  return {
    version: 1,
    updatedAtMs: nowMs,
    families: groupPiFreeFamilies(orderedModels).map((family, index) => ({
      family: family.family,
      order: index,
      score: null,
      replicas: family.replicas.map((replica) => ({
        provider: replica.provider,
        modelId: replica.modelId,
        spec: replica.spec,
        alive: !failedSpecs.has(replica.spec),
      })),
    })),
  };
}

/** Atomically writes the pool snapshot (tmp file + rename) so readers never observe a partial file. */
export function writePiFreePoolSnapshot(
  snapshot: PiFreePoolSnapshot,
  targetPath: string = PI_FREE_POOL_SNAPSHOT_PATH
): string {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  const tmpPath = `${targetPath}.tmp.${process.pid}`;
  fs.writeFileSync(tmpPath, JSON.stringify(snapshot, null, 2) + "\n", "utf8");
  fs.renameSync(tmpPath, targetPath);
  return targetPath;
}

/** Reads and validates a pool snapshot; returns null when the file is missing, corrupt, or malformed. */
export function readPiFreePoolSnapshot(
  sourcePath: string = PI_FREE_POOL_SNAPSHOT_PATH
): PiFreePoolSnapshot | null {
  let parsed: unknown;
  try {
    parsed = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  } catch {
    return null;
  }
  return isPiFreePoolSnapshot(parsed) ? parsed : null;
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function isReplicaSnapshot(value: unknown): boolean {
  if (typeof value !== "object" || value === null) return false;
  const replica = value as Record<string, unknown>;
  return (
    typeof replica.provider === "string" &&
    typeof replica.modelId === "string" &&
    typeof replica.spec === "string" &&
    typeof replica.alive === "boolean"
  );
}

function isFamilySnapshot(value: unknown): boolean {
  if (typeof value !== "object" || value === null) return false;
  const family = value as Record<string, unknown>;
  return (
    typeof family.family === "string" &&
    family.family.length > 0 &&
    Number.isInteger(family.order) &&
    (family.score === null || isFiniteNumber(family.score)) &&
    Array.isArray(family.replicas) &&
    family.replicas.every(isReplicaSnapshot)
  );
}

export function isPiFreePoolSnapshot(value: unknown): value is PiFreePoolSnapshot {
  if (typeof value !== "object" || value === null) return false;
  const snapshot = value as Record<string, unknown>;
  return (
    snapshot.version === 1 &&
    isFiniteNumber(snapshot.updatedAtMs) &&
    Array.isArray(snapshot.families) &&
    snapshot.families.every(isFamilySnapshot)
  );
}
