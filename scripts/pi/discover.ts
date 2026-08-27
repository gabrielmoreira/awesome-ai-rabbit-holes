import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { PI_FREE_CANDIDATES_PATH } from "./snapshot.ts";
import { filterPiFreeRecentFailures, hasPiFreeProviderAuth, listPiFreeRecentFailureRecords, normalizePiFreeEnv, parsePiFreeModelSpec, resolvePiFreeOrderedModels, type PiFreeEnvValues } from "./models.ts";
import { orderPoolByCapabilityScores } from "./scores.ts";

export const PI_FREE_DISCOVERY_CACHE_VERSION = 1;
export const PI_FREE_CANDIDATE_TTL_MS = 24 * 60 * 60 * 1000;
const OPENROUTER_MODELS_URL = "https://openrouter.ai/api/v1/models";

export type PiFreeProviderCatalog = { fetchedAtMs: number; models: string[] };
export type PiFreeCandidateCache = { version: typeof PI_FREE_DISCOVERY_CACHE_VERSION; updatedAtMs: number; providers: Record<string, PiFreeProviderCatalog> };
type FetchLike = (url: string, init?: { headers?: Record<string, string> }) => Promise<{ status: number; json(): Promise<unknown> }>;

function isZeroPricing(value: unknown): boolean {
  if (typeof value === "number") return value === 0;
  if (typeof value !== "string") return false;
  const parsed = Number.parseFloat(value);
  return !Number.isNaN(parsed) && parsed === 0;
}

export async function fetchOpenRouterFreeModels(options: { apiKey?: string | null; fetchImpl?: FetchLike } = {}): Promise<string[]> {
  const headers: Record<string, string> = {};
  if (options.apiKey) headers.Authorization = `Bearer ${options.apiKey}`;
  const response = await (options.fetchImpl ?? fetch)(OPENROUTER_MODELS_URL, { headers });
  if (response.status !== 200) throw new Error(`OpenRouter models endpoint returned ${response.status}`);
  const body: unknown = await response.json();
  let data: unknown[] = [];
  if (body !== null && typeof body === "object" && "data" in body && Array.isArray(body.data)) {
    data = body.data;
  }
  const specs: string[] = [];
  for (const rawEntry of data) {
    if (!rawEntry || typeof rawEntry !== "object") continue;
    const entry = rawEntry as Record<string, unknown>; // boundary cast: OpenRouter model row
    const id = entry.id;
    if (typeof id !== "string" || !id.includes("/")) continue;
    const pricingRaw = entry.pricing;
    const pricing: Record<string, unknown> = pricingRaw && typeof pricingRaw === "object" ? (pricingRaw as Record<string, unknown>) : {};
    const free = isZeroPricing(pricing.prompt) && isZeroPricing(pricing.completion);
    if (!free && !id.endsWith(":free")) continue;
    const spec = `openrouter/${id}`;
    if (!specs.includes(spec)) specs.push(spec);
  }
  return specs;
}
export function readPiFreeCandidateCache(cachePath: string): PiFreeCandidateCache | null {
  let raw: string;
  try {
    raw = readFileSync(cachePath, "utf8");
  } catch {
    return null; // missing cache file is a normal first-run state
  }
  const parsed: unknown = (() => {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  })();
  if (!parsed || typeof parsed !== "object") return null;
  const candidate = parsed as Record<string, unknown>; // boundary cast: persisted cache blob
  if (candidate.version !== PI_FREE_DISCOVERY_CACHE_VERSION) return null;
  if (typeof candidate.updatedAtMs !== "number" || !Number.isFinite(candidate.updatedAtMs)) return null;
  const providersRaw = candidate.providers;
  if (!providersRaw || typeof providersRaw !== "object") return null;
  const providers: Record<string, PiFreeProviderCatalog> = {};
  for (const [provider, rawCatalog] of Object.entries(providersRaw as Record<string, unknown>)) {
    if (!rawCatalog || typeof rawCatalog !== "object") continue;
    const catalog = rawCatalog as Record<string, unknown>; // boundary cast: provider entry
    if (typeof catalog.fetchedAtMs !== "number" || !Array.isArray(catalog.models)) continue;
    providers[provider] = { fetchedAtMs: catalog.fetchedAtMs, models: (catalog.models as unknown[]).filter((m): m is string => typeof m === "string") };
  }
  return { version: PI_FREE_DISCOVERY_CACHE_VERSION, updatedAtMs: candidate.updatedAtMs, providers };
}

export function writePiFreeCandidateCache(cachePath: string, cache: PiFreeCandidateCache): void {
  mkdirSync(path.dirname(cachePath), { recursive: true });
  const tmpPath = `${cachePath}.tmp`;
  writeFileSync(tmpPath, JSON.stringify(cache, null, 2) + "\n", "utf8");
  renameSync(tmpPath, cachePath);
}

export function collectDiscoveredSpecs(cache: PiFreeCandidateCache | null, options: { ttlMs?: number; now?: number } = {}): string[] {
  if (!cache) return [];
  const ttlMs = options.ttlMs ?? PI_FREE_CANDIDATE_TTL_MS;
  const now = options.now ?? Date.now();
  const specs: string[] = [];
  for (const catalog of Object.values(cache.providers)) {
    if (now - catalog.fetchedAtMs > ttlMs) continue;
    for (const spec of catalog.models) {
      if (!specs.includes(spec)) specs.push(spec);
    }
  }
  return specs;
}
export function resolvePiFreePoolModels(envValues: PiFreeEnvValues = process.env, options: { cachePath?: string; now?: number } = {}): string[] {
  const seed = resolvePiFreeOrderedModels(envValues);
  const cache = readPiFreeCandidateCache(options.cachePath ?? PI_FREE_CANDIDATES_PATH);
  const discovered = collectDiscoveredSpecs(cache, { now: options.now });
  const pool = [...seed];
  for (const spec of discovered) {
    if (pool.includes(spec)) continue;
    const parsed = parsePiFreeModelSpec(spec);
    if (!parsed || !hasPiFreeProviderAuth(parsed.provider, envValues)) continue;
    pool.push(spec);
  }
  return pool;
}

export function resolvePiFreePoolStartupCandidates(
  envValues: PiFreeEnvValues = process.env,
  options: { cachePath?: string; now?: number; recentFailures?: Iterable<string>; scoresPath?: string } = {}
): string[] {
  const poolModels = resolvePiFreePoolModels(envValues, options);
  if (poolModels.length === 0) return [];
  const recentFailureModels = new Set(
    options.recentFailures ? [...options.recentFailures] : listPiFreeRecentFailureRecords(options.now ?? Date.now()).map((record) => record.model)
  );
  const filtered = filterPiFreeRecentFailures(poolModels, recentFailureModels);
  return orderPoolByCapabilityScores(filtered, { scoresPath: options.scoresPath });
}
export async function runPiFreeDiscover(): Promise<void> {
  const envValues = normalizePiFreeEnv(process.env);
  const cachePath = PI_FREE_CANDIDATES_PATH;
  const existing = readPiFreeCandidateCache(cachePath) ?? { version: PI_FREE_DISCOVERY_CACHE_VERSION, updatedAtMs: Date.now(), providers: {} };
  if (hasPiFreeProviderAuth("openrouter", envValues)) {
    try {
      const models = await fetchOpenRouterFreeModels({ apiKey: envValues.OPENROUTER_API_KEY });
      existing.providers.openrouter = { fetchedAtMs: Date.now(), models };
      console.log(`[pi-free:discover] openrouter: ${models.length} free model(s) refreshed`);
    } catch (error) {
      console.error(`[pi-free:discover] openrouter fetch failed, keeping previous cache entry: ${error instanceof Error ? error.message : String(error)}`);
    }
  } else {
    console.log("[pi-free:discover] openrouter: no API key configured, skipping");
  }
  existing.updatedAtMs = Date.now();
  writePiFreeCandidateCache(cachePath, existing);
  const poolModels = resolvePiFreePoolModels(envValues, { cachePath });
  console.log(`[pi-free:discover] pool: ${poolModels.length} spec(s) (${resolvePiFreeOrderedModels(envValues).length} seed)`);
}

const isDirectCliEntry = process.argv[1] ? process.argv[1] === fileURLToPath(import.meta.url) : false;

if (isDirectCliEntry) {
  runPiFreeDiscover().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
