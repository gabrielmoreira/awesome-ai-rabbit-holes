import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  recordPiFreeRecentFailure,
  resetPiFreeRecentFailures,
  resolvePiFreeOrderedModels,
  type PiFreeEnvValues,
} from "../scripts/pi/models.js";
import {
  buildPiFreePoolSnapshot,
  readPiFreePoolSnapshot,
  writePiFreePoolSnapshot,
} from "../scripts/pi/snapshot.js";

const FULLY_CONFIGURED_ENV: PiFreeEnvValues = {
  OPENROUTER_API_KEY: "or-key",
  NVIDIA_API_KEY: "nv-key",
  CLOUDFLARE_API_TOKEN: "cf-token",
  CLOUDFLARE_ACCOUNT_ID: "cf-account",
  MISTRAL_API_KEY: "mi-key",
};

const NOW_MS = Date.parse("2026-08-23T12:00:00.000Z");

let tmpDir: string;
let snapshotPath: string;

beforeEach(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "pi-free-snapshot-"));
  snapshotPath = path.join(tmpDir, "pool.json");
});

afterEach(() => {
  resetPiFreeRecentFailures();
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

describe("pi-free pool snapshot", () => {
  it("builds families with sequential order, alive replicas and null scores from the ordered cycle", () => {
    const snapshot = buildPiFreePoolSnapshot(FULLY_CONFIGURED_ENV, { nowMs: NOW_MS });
    const ordered = resolvePiFreeOrderedModels(FULLY_CONFIGURED_ENV);

    expect(snapshot.version).toBe(1);
    expect(snapshot.updatedAtMs).toBe(NOW_MS);
    expect(snapshot.families.length).toBeGreaterThan(0);

    snapshot.families.forEach((family, index) => {
      expect(family.order).toBe(index);
      expect(family.score).toBeNull();
      expect(family.family.length).toBeGreaterThan(0);
      for (const replica of family.replicas) {
        expect(replica.alive).toBe(true);
        expect(typeof replica.provider).toBe("string");
        expect(typeof replica.modelId).toBe("string");
        expect(typeof replica.spec).toBe("string");
      }
    });

    const specs = snapshot.families.flatMap((family) => family.replicas.map((replica) => replica.spec));
    expect(specs.length).toBe(ordered.length);
    expect(new Set(specs)).toEqual(new Set(ordered));

    const gemmaFamily = snapshot.families.find((family) => family.family === "google/gemma-4-26b-a4b-it");
    expect(gemmaFamily?.replicas.map((replica) => replica.provider).sort()).toEqual(["cloudflare", "openrouter"]);
  });

  it("marks replicas with active recent failures as not alive", () => {
    const ordered = resolvePiFreeOrderedModels(FULLY_CONFIGURED_ENV);
    recordPiFreeRecentFailure(ordered[2]!, "429 provider returned error", NOW_MS);

    const snapshot = buildPiFreePoolSnapshot(FULLY_CONFIGURED_ENV, { nowMs: NOW_MS });
    const marked = snapshot.families.flatMap((family) => family.replicas).find((replica) => replica.spec === ordered[2]);
    expect(marked?.alive).toBe(false);

    const totalReplicas = snapshot.families.reduce((count, family) => count + family.replicas.length, 0);
    const aliveCount = snapshot.families.reduce(
      (count, family) => count + family.replicas.filter((replica) => replica.alive).length,
      0
    );
    expect(aliveCount).toBe(totalReplicas - 1);
  });

  it("round-trips a snapshot through an atomic write and read without tmp residue", () => {
    const snapshot = buildPiFreePoolSnapshot(FULLY_CONFIGURED_ENV, { nowMs: NOW_MS });

    expect(writePiFreePoolSnapshot(snapshot, snapshotPath)).toBe(snapshotPath);
    expect(fs.existsSync(snapshotPath)).toBe(true);
    expect(readPiFreePoolSnapshot(snapshotPath)).toEqual(snapshot);
    expect(fs.readdirSync(tmpDir).sort()).toEqual(["pool.json"]);
  });

  it("overwrites an existing snapshot on rewrite", () => {
    const first = buildPiFreePoolSnapshot(FULLY_CONFIGURED_ENV, { nowMs: NOW_MS });
    writePiFreePoolSnapshot(first, snapshotPath);

    const restrictedEnv: PiFreeEnvValues = { ...FULLY_CONFIGURED_ENV, MISTRAL_API_KEY: undefined };
    const second = buildPiFreePoolSnapshot(restrictedEnv, { nowMs: NOW_MS + 1000 });
    writePiFreePoolSnapshot(second, snapshotPath);

    expect(readPiFreePoolSnapshot(snapshotPath)).toEqual(second);
  });

  it("returns null when the snapshot file is missing", () => {
    expect(readPiFreePoolSnapshot(path.join(tmpDir, "missing.json"))).toBeNull();
  });

  it("returns null for corrupt or malformed snapshots", () => {
    fs.writeFileSync(snapshotPath, "{not json");
    expect(readPiFreePoolSnapshot(snapshotPath)).toBeNull();

    const valid = buildPiFreePoolSnapshot(FULLY_CONFIGURED_ENV, { nowMs: NOW_MS });
    fs.writeFileSync(snapshotPath, JSON.stringify({ ...valid, version: 2 }));
    expect(readPiFreePoolSnapshot(snapshotPath)).toBeNull();

    fs.writeFileSync(snapshotPath, JSON.stringify({ version: 1, updatedAtMs: "nope", families: [] }));
    expect(readPiFreePoolSnapshot(snapshotPath)).toBeNull();
  });
});