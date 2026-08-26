import { parsePiFreeModelSpec } from "./models.ts";

export type PiFreeReplica = {
  provider: string;
  modelId: string;
  spec: string;
};

export type PiFreeFamily = {
  family: string;
  replicas: PiFreeReplica[];
};

const FREE_SUFFIX = ":free";
const CLOUDFLARE_PREFIX = "@cf/";

/**
 * Canonical cross-provider key for a model. The same underlying model hosted by
 * different providers (e.g. `openrouter/google/gemma-4-26b-a4b-it:free` and
 * `cloudflare/@cf/google/gemma-4-26b-a4b-it`) maps to the same family, which is
 * what lets us treat them as interchangeable replicas for load balancing.
 */
export function piFreeModelFamily(modelSpec: string): string | null {
  const parsed = parsePiFreeModelSpec(modelSpec);
  if (!parsed) return null;

  let id = parsed.id.trim();
  if (id.startsWith(CLOUDFLARE_PREFIX)) id = id.slice(CLOUDFLARE_PREFIX.length);
  if (id.endsWith(FREE_SUFFIX)) id = id.slice(0, -FREE_SUFFIX.length).trim();
  const family = id.toLowerCase();
  return family.length > 0 ? family : null;
}

/** Group flat model specs into families, preserving first-seen order and deduping identical specs. */
export function groupPiFreeFamilies(modelSpecs: string[]): PiFreeFamily[] {
  const byFamily = new Map<string, PiFreeReplica[]>();

  for (const spec of modelSpecs) {
    const parsed = parsePiFreeModelSpec(spec);
    const family = piFreeModelFamily(spec);
    if (!parsed || !family) continue;

    let replicas = byFamily.get(family);
    if (!replicas) {
      replicas = [];
      byFamily.set(family, replicas);
    }
    if (replicas.some((replica) => replica.spec === spec)) continue;
    replicas.push({ provider: parsed.provider, modelId: parsed.id, spec });
  }

  return Array.from(byFamily.entries()).map(([family, replicas]) => ({ family, replicas }));
}

/**
 * Rotate replica order within each family so consecutive calls spread load across
 * providers hosting the same model quality. Family order (first-seen) is preserved;
 * single-replica families are untouched. Deterministic for a given seed.
 */
export function balancePiFreeCandidates(modelSpecs: string[], seed: number): string[] {
  const families = groupPiFreeFamilies(modelSpecs);
  const normalizedSeed = Number.isFinite(seed) ? Math.abs(Math.trunc(seed)) : 0;
  const balanced: string[] = [];

  let familyIndex = 0;
  for (const family of families) {
    const replicas = family.replicas;
    if (replicas.length > 1) {
      const start = (normalizedSeed + familyIndex) % replicas.length;
      balanced.push(
        ...replicas.slice(start).map((replica) => replica.spec),
        ...replicas.slice(0, start).map((replica) => replica.spec)
      );
    } else if (replicas.length === 1) {
      balanced.push(replicas[0].spec);
    }
    familyIndex += 1;
  }

  return balanced;
}

let balanceSeedCounter = 0;

/** Round-robin seed source: each default-path prompt advances the rotation so consecutive calls hit different replicas of the same family. */
export function nextPiFreeBalanceSeed(): number {
  const seed = balanceSeedCounter;
  balanceSeedCounter += 1;
  return seed;
}

export function resetPiFreeBalanceSeed(): void {
  balanceSeedCounter = 0;
}
