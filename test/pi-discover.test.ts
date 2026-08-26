import { afterEach, describe, expect, it } from "vitest";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  PI_FREE_CANDIDATES_PATH,
} from "../scripts/pi/snapshot.js";
import {
  collectDiscoveredSpecs,
  fetchOpenRouterFreeModels,
  readPiFreeCandidateCache,
  resolvePiFreePoolModels,
  resolvePiFreePoolStartupCandidates,
  writePiFreeCandidateCache,
  type PiFreeCandidateCache,
} from "../scripts/pi/discover.js";
import { PI_FREE_MODEL_CYCLE } from "../scripts/pi/models.js";

const NOW = Date.parse("2026-08-23T12:00:00Z");
const ENV = { OPENROUTER_API_KEY: "or-key", CLOUDFLARE_API_TOKEN: "cf-token", CLOUDFLARE_ACCOUNT_ID: "cf-account", MISTRAL_API_KEY: "mi-key" };

type MockFetch = ((url: string, init?: { headers?: Record<string, string> }) => Promise<{ status: number; json: () => Promise<unknown> }>) & { calls: Array<{ url: string; auth: string | null }> };

function mockOpenRouterFetch(models: unknown[]): MockFetch {
  const fetchImpl = (async (url: string, init?: { headers?: Record<string, string> }) => {
    fetchImpl.calls.push({ url, auth: init?.headers?.Authorization ?? null });
    return { status: 200, json: async () => ({ data: models }) };
  }) as MockFetch;
  fetchImpl.calls = [];
  return fetchImpl;
}

const tmpRoots: string[] = [];

function makeCachePath() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "aarh-pi-discover-"));
  tmpRoots.push(root);
  return path.join(root, ".cache", "pi-free", "candidates.json");
}

afterEach(() => {
  for (const root of tmpRoots.splice(0)) fs.rmSync(root, { recursive: true, force: true });
});
describe("fetchOpenRouterFreeModels", () => {
  it("keeps zero-priced models without :free suffix and :free models, drops paid ones", async () => {
    const fetchImpl = mockOpenRouterFetch([
      { id: "stealth/ox-alpha", pricing: { prompt: "0", completion: "0" } },
      { id: "dots-studio/dots-3-note-preview:free", pricing: { prompt: "0", completion: "0" } },
      { id: "openai/gpt-5-paid", pricing: { prompt: "1.25", completion: "10" } },
    ]);

    const specs = await fetchOpenRouterFreeModels({ apiKey: "or-key", fetchImpl });

    expect(specs).toEqual(["openrouter/stealth/ox-alpha", "openrouter/dots-studio/dots-3-note-preview:free"]);
    expect(fetchImpl.calls).toHaveLength(1);
    expect(fetchImpl.calls[0].url).toBe("https://openrouter.ai/api/v1/models");
    expect(fetchImpl.calls[0].auth).toBe("Bearer or-key");
  });

  it("omits the Authorization header when no API key is configured", async () => {
    const fetchImpl = mockOpenRouterFetch([{ id: "a/b:free", pricing: { prompt: "0", completion: "0" } }]);
    await fetchOpenRouterFreeModels({ apiKey: null, fetchImpl });
    expect(fetchImpl.calls[0].auth).toBeNull();
  });

  it("throws on non-200 responses", async () => {
    const fetchImpl = (async () => ({ status: 503, json: async () => ({}) })) as unknown as MockFetch;
    await expect(fetchOpenRouterFreeModels({ apiKey: "or-key", fetchImpl })).rejects.toThrow(/503/);
  });

  it("returns an empty list for malformed payloads", async () => {
    const fetchImpl = mockOpenRouterFetch(null as unknown as unknown[]);
    expect(await fetchOpenRouterFreeModels({ apiKey: "or-key", fetchImpl })).toEqual([]);
  });
});
describe("candidate cache", () => {
  it("round-trips through write and read", () => {
    const cachePath = makeCachePath();
    const cache: PiFreeCandidateCache = {
      version: 1,
      updatedAtMs: NOW,
      providers: { openrouter: { fetchedAtMs: NOW - 60_000, models: ["openrouter/a/b:free"] } },
    };

    writePiFreeCandidateCache(cachePath, cache);

    expect(readPiFreeCandidateCache(cachePath)).toEqual(cache);
    expect(fs.existsSync(`${cachePath}.tmp`)).toBe(false);
  });

  it("returns null for missing, corrupt, or wrong-version caches", () => {
    const cachePath = makeCachePath();
    expect(readPiFreeCandidateCache(cachePath)).toBeNull();

    fs.mkdirSync(path.dirname(cachePath), { recursive: true });
    fs.writeFileSync(cachePath, "{not json", "utf8");
    expect(readPiFreeCandidateCache(cachePath)).toBeNull();

    const badVersion: PiFreeCandidateCache = { version: 9 as never, updatedAtMs: NOW, providers: {} };
    fs.writeFileSync(cachePath, JSON.stringify(badVersion), "utf8");
    expect(readPiFreeCandidateCache(cachePath)).toBeNull();
  });
});

describe("collectDiscoveredSpecs", () => {
  it("includes only providers within the TTL and preserves provider order", () => {
    const cache: PiFreeCandidateCache = {
      version: 1,
      updatedAtMs: NOW,
      providers: {
        openrouter: { fetchedAtMs: NOW - 60_000, models: ["openrouter/a/b:free", "openrouter/c/d:free"] },
        mistral: { fetchedAtMs: NOW - (24 * 60 * 60 + 1) * 1000, models: ["mistral/stale-model"] },
      },
    };

    expect(collectDiscoveredSpecs(cache, { now: NOW })).toEqual(["openrouter/a/b:free", "openrouter/c/d:free"]);
  });

  it("returns an empty list for a null cache", () => {
    expect(collectDiscoveredSpecs(null, { now: NOW })).toEqual([]);
  });
});
describe("resolvePiFreePoolModels", () => {
  it("appends only new discovered families after the seed order", () => {
    const cachePath = makeCachePath();
    writePiFreeCandidateCache(cachePath, {
      version: 1,
      updatedAtMs: NOW,
      providers: {
        openrouter: {
          fetchedAtMs: NOW - 60_000,
          models: ["openrouter/google/gemma-4-26b-a4b-it:free", "openrouter/stealth/ox-alpha"],
        },
      },
    });

    const seed = PI_FREE_MODEL_CYCLE.filter((spec) => spec.startsWith("cloudflare/") || spec.startsWith("mistral/") || spec.startsWith("openrouter/"));
    expect(resolvePiFreePoolModels(ENV, { cachePath, now: NOW })).toEqual([...seed, "openrouter/stealth/ox-alpha"]);
  });

  it("falls back to the seed order when the cache is missing or stale", () => {
    const seed = [...PI_FREE_MODEL_CYCLE];
    expect(resolvePiFreePoolModels(ENV, { cachePath: makeCachePath(), now: NOW })).toEqual(seed);

    const cachePath = makeCachePath();
    writePiFreeCandidateCache(cachePath, {
      version: 1,
      updatedAtMs: NOW - (24 * 60 * 60 + 1) * 1000,
      providers: { openrouter: { fetchedAtMs: NOW - (24 * 60 * 60 + 1) * 1000, models: ["openrouter/stealth/ox-alpha"] } },
    });
    expect(resolvePiFreePoolModels(ENV, { cachePath, now: NOW })).toEqual(seed);
  });

  it("excludes discovered specs whose provider has no auth", () => {
    const cachePath = makeCachePath();
    writePiFreeCandidateCache(cachePath, {
      version: 1,
      updatedAtMs: NOW,
      providers: { openrouter: { fetchedAtMs: NOW - 60_000, models: ["openrouter/stealth/ox-alpha"] } },
    });

    const env = { ...ENV, OPENROUTER_API_KEY: undefined };
    expect(resolvePiFreePoolModels(env, { cachePath, now: NOW })).toEqual(PI_FREE_MODEL_CYCLE.filter((spec) => !spec.startsWith("openrouter/")));
  });
});
describe("resolvePiFreePoolStartupCandidates", () => {
  it("filters recent failures from the pool and keeps the rest in order", () => {
    const cachePath = makeCachePath();
    writePiFreeCandidateCache(cachePath, {
      version: 1,
      updatedAtMs: NOW,
      providers: { openrouter: { fetchedAtMs: NOW - 60_000, models: ["openrouter/stealth/ox-alpha"] } },
    });

    const candidates = resolvePiFreePoolStartupCandidates(ENV, { cachePath, now: NOW, recentFailures: ["cloudflare/@cf/moonshotai/kimi-k2.6", "openrouter/stealth/ox-alpha"] });

    expect(candidates).not.toContain("cloudflare/@cf/moonshotai/kimi-k2.6");
    expect(candidates).not.toContain("openrouter/stealth/ox-alpha");
    expect(candidates[0]).toBe("mistral/mistral-medium-2604");
  });
});

describe("default cache path", () => {
  it("points at the repo-local pi-free candidates file", () => {
    expect(PI_FREE_CANDIDATES_PATH.endsWith(path.join(".cache", "pi-free", "candidates.json"))).toBe(true);
  });
});
