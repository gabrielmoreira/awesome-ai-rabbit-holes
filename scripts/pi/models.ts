export type PiFreeEnvValues = Record<string, string | undefined>;

export type PiFreeRecentFailureRecord = {
  model: string;
  failed_at: string;
  expires_at: string;
  error_message: string | null;
};

export type ResolvePiFreeStartupOptions = {
  now?: number;
  recentFailures?: Iterable<string>;
};

export const PI_FREE_RECENT_FAILURE_TTL_MS = 10 * 60 * 1000;

// Ranked by exact-version Artificial Analysis Index v4.1 as of 2026-07-20; same-version provider replicas adjacent; unranked coding specialist trails: https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index
export const PI_FREE_MODEL_CYCLE = [
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

export const PI_FREE_DEFAULT_MODEL = PI_FREE_MODEL_CYCLE[0];


const PROVIDER_AUTH_REQUIREMENTS: Record<string, string[]> = {
  openrouter: ["OPENROUTER_API_KEY"],
  mistral: ["MISTRAL_API_KEY"],
  ollama: ["OLLAMA_API_KEY"],
  cloudflare: ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID"],
};

const PI_FREE_RETRYABLE_ERROR_PATTERN =
  /timed out|request was aborted|aborted|connection error|network error|fetch failed|socket hang up|econnreset|econnrefused|enotfound|internal server error|overloaded|provider.?returned.?error|rate.?limit|too many requests|403|429|404|500|502|503|504|service.?unavailable|temporarily unavailable|quota exceeded|throttled|retry shortly|retry later|requires a subscription|upgrade for access|free-models-per-min|unexpected message role|reasoning_effort|reasoning is mandatory|cannot be disabled|no route matched|model not found/i;

const recentFailures = new Map<string, PiFreeRecentFailureRecord>();

function isRecentFailureActive(record: PiFreeRecentFailureRecord, now: number): boolean {
  const expiresAt = Date.parse(record.expires_at);
  return Number.isFinite(expiresAt) && expiresAt > now;
}

function prunePiFreeRecentFailures(now: number): void {
  for (const [model, record] of recentFailures.entries()) {
    if (!isRecentFailureActive(record, now)) recentFailures.delete(model);
  }
}

export function normalizePiFreeEnv(envValues: PiFreeEnvValues): Record<string, string> {
  const normalized = Object.fromEntries(
    Object.entries(envValues).flatMap(([key, value]) => (typeof value === "string" ? [[key, value]] : []))
  );

  if (normalized.CF_API_TOKEN && !normalized.CLOUDFLARE_API_TOKEN) {
    normalized.CLOUDFLARE_API_TOKEN = normalized.CF_API_TOKEN;
  }
  if (normalized.CF_ACCOUNT_ID && !normalized.CLOUDFLARE_ACCOUNT_ID) {
    normalized.CLOUDFLARE_ACCOUNT_ID = normalized.CF_ACCOUNT_ID;
  }
  if (normalized.CLOUDFLARE_API_TOKEN && !normalized.CF_API_TOKEN) {
    normalized.CF_API_TOKEN = normalized.CLOUDFLARE_API_TOKEN;
  }
  if (normalized.CLOUDFLARE_ACCOUNT_ID && !normalized.CF_ACCOUNT_ID) {
    normalized.CF_ACCOUNT_ID = normalized.CLOUDFLARE_ACCOUNT_ID;
  }

  return normalized;
}

export function hasPiFreeProviderAuth(providerId: string, envValues: PiFreeEnvValues = process.env): boolean {
  const normalizedEnv = normalizePiFreeEnv(envValues);
  const requiredKeys = PROVIDER_AUTH_REQUIREMENTS[providerId];
  if (!requiredKeys) return false;
  return requiredKeys.every((key) => Boolean(normalizedEnv[key] && normalizedEnv[key].trim().length > 0));
}

export function parsePiFreeModelSpec(modelSpec: string): { provider: string; id: string } | null {
  const firstSlash = modelSpec.indexOf("/");
  if (firstSlash <= 0 || firstSlash === modelSpec.length - 1) return null;
  return {
    provider: modelSpec.slice(0, firstSlash),
    id: modelSpec.slice(firstSlash + 1),
  };
}

export function isPiFreeRetryableError(message: string | null | undefined): boolean {
  return Boolean(message && PI_FREE_RETRYABLE_ERROR_PATTERN.test(message));
}

export function listPiFreeRecentFailureRecords(now: number = Date.now()): PiFreeRecentFailureRecord[] {
  prunePiFreeRecentFailures(now);
  return Array.from(recentFailures.values()).sort(
    (a, b) => Date.parse(a.failed_at) - Date.parse(b.failed_at) || a.model.localeCompare(b.model)
  );
}

export function recordPiFreeRecentFailure(
  modelSpec: string,
  errorMessage: string | null,
  failedAtMs: number = Date.now()
): PiFreeRecentFailureRecord {
  const record: PiFreeRecentFailureRecord = {
    model: modelSpec,
    failed_at: new Date(failedAtMs).toISOString(),
    expires_at: new Date(failedAtMs + PI_FREE_RECENT_FAILURE_TTL_MS).toISOString(),
    error_message: errorMessage,
  };
  recentFailures.set(modelSpec, record);
  return record;
}

export function clearPiFreeRecentFailure(modelSpec: string): void {
  recentFailures.delete(modelSpec);
}

export function resetPiFreeRecentFailures(): void {
  recentFailures.clear();
}

export function resolvePiFreeOrderedModels(envValues: PiFreeEnvValues = process.env): string[] {
  return Array.from(new Set(PI_FREE_MODEL_CYCLE)).filter((modelSpec) => {
    const parsed = parsePiFreeModelSpec(modelSpec);
    return parsed ? hasPiFreeProviderAuth(parsed.provider, envValues) : false;
  });
}

export function filterPiFreeRecentFailures(orderedModels: string[], recentFailuresInput: Iterable<string>): string[] {
  const failedModels = new Set(recentFailuresInput);
  const filtered = orderedModels.filter((modelSpec) => !failedModels.has(modelSpec));
  return filtered.length > 0 ? filtered : orderedModels;
}

export function resolvePiFreeStartupCandidates(
  envValues: PiFreeEnvValues = process.env,
  options: ResolvePiFreeStartupOptions = {}
): string[] {
  const orderedModels = resolvePiFreeOrderedModels(envValues);
  if (orderedModels.length === 0) return [];

  const recentFailureModels = options.recentFailures
    ? new Set(options.recentFailures)
    : new Set(listPiFreeRecentFailureRecords(options.now ?? Date.now()).map((record) => record.model));

  return filterPiFreeRecentFailures(orderedModels, recentFailureModels);
}
