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
export const PI_FREE_DEFAULT_MODEL = "cloudflare/@cf/moonshotai/kimi-k2.6";

export const PI_FREE_MODEL_CYCLE = [
  PI_FREE_DEFAULT_MODEL,
  "nvidia/moonshotai/kimi-k2.6",
  "nvidia/deepseek-ai/deepseek-v4-pro",
  "nvidia/z-ai/glm-5.1",
  "nvidia/z-ai/glm5",
  "nvidia/minimaxai/minimax-m2.7",
  "openrouter/minimax/minimax-m2.5:free",
  "nvidia/minimaxai/minimax-m2.5",
  "nvidia/deepseek-ai/deepseek-v4-flash",
  "nvidia/qwen/qwen3.5-397b-a17b",
  "openrouter/tencent/hy3-preview:free",
  "nvidia/qwen/qwen3.5-122b-a10b",
  "openrouter/google/gemma-4-31b-it:free",
  "cloudflare/@cf/moonshotai/kimi-k2.5",
  "nvidia/stepfun-ai/step-3.5-flash",
  "openrouter/stepfun/step-3.5-flash:free",
  "openrouter/google/gemma-4-26b-a4b-it:free",
  "cloudflare/@cf/google/gemma-4-26b-a4b-it",
  "nvidia/nvidia/nemotron-3-super-120b-a12b",
  "openrouter/nvidia/nemotron-3-super-120b-a12b:free",
  "cloudflare/@cf/nvidia/nemotron-3-120b-a12b",
  "cloudflare/@cf/openai/gpt-oss-120b",
  "nvidia/openai/gpt-oss-120b",
  "openrouter/openai/gpt-oss-120b:free",
  "openrouter/z-ai/glm-4.5-air:free",
  "nvidia/qwen/qwen3-next-80b-a3b-thinking",
  "nvidia/deepseek-ai/deepseek-v3.1-terminus",
  "nvidia/qwen/qwen3-coder-480b-a35b-instruct",
  "nvidia/moonshotai/kimi-k2-instruct-0905",
  "openrouter/nvidia/nemotron-3-nano-30b-a3b:free",
  "nvidia/moonshotai/kimi-k2-instruct",
  "nvidia/mistralai/mistral-small-4-119b-2603",
  "mistral/mistral-small-2603",
  "mistral/mistral-small-latest",
  "nvidia/qwen/qwen3-next-80b-a3b-instruct",
  "openrouter/qwen/qwen3-next-80b-a3b-instruct:free",
  "cloudflare/@cf/openai/gpt-oss-20b",
  "openrouter/openai/gpt-oss-20b:free",
  "cloudflare/@cf/qwen/qwen3-30b-a3b-fp8",
  "mistral/devstral-small-2507",
  "mistral/magistral-medium-latest",
  "mistral/pixtral-large-latest",
  "cloudflare/@cf/qwen/qwq-32b",
  "nvidia/mistralai/magistral-small-2506",
  "mistral/magistral-small",
  "cloudflare/@cf/meta/llama-3.1-405b-instruct",
  "nvidia/meta/llama-3.1-405b-instruct",
  "nvidia/meta/llama-3.3-70b-instruct",
  "cloudflare/@cf/meta/llama-3.3-70b-instruct-fp8-fast",
  "openrouter/meta-llama/llama-3.3-70b-instruct:free",
  "nvidia/mistralai/mistral-large-3-675b-instruct-2512",
  "mistral/mistral-large-2512",
  "mistral/mistral-large-latest",
  "mistral/ministral-8b-latest",
  "mistral/mistral-large-2411",
  "mistral/mistral-small-2506",
  "nvidia/meta/llama-3.2-90b-vision-instruct",
  "cloudflare/@cf/meta/llama-4-scout-17b-16e-instruct",
  "cloudflare/@cf/meta/llama-3.1-70b-instruct",
  "nvidia/meta/llama-3.1-70b-instruct",
  "cloudflare/@cf/google/gemma-3-12b-it",
  "mistral/ministral-3b-latest",
  "cloudflare/@cf/qwen/qwen2.5-coder-32b-instruct",
  "openrouter/qwen/qwen3-coder:free",
  "nvidia/microsoft/phi-4-multimodal-instruct",
  "mistral/codestral-latest",
  "cloudflare/@cf/meta/llama-3.2-11b-vision-instruct",
  "mistral/pixtral-12b",
  "mistral/mistral-nemo",
  "nvidia/mistralai/devstral-2-123b-instruct-2512",
  "openrouter/nvidia/nemotron-nano-12b-v2-vl:free",
  "openrouter/nvidia/nemotron-nano-9b-v2:free",
  "nvidia/sarvamai/sarvam-m",
  "nvidia/stockmark/stockmark-2-100b-instruct",
  "nvidia/mistralai/mistral-nemotron",
  "nvidia/mistralai/mixtral-8x22b-instruct-v0.1",
  "nvidia/abacusai/dracarys-llama-3.1-70b-instruct",
  "mistral/devstral-2512",
  "nvidia/mistralai/mistral-medium-3.5-128b",
  "mistral/devstral-small-2505",
  "mistral/labs-devstral-small-2512",
  "openrouter/arcee-ai/trinity-large-preview:free",
  "openrouter/arcee-ai/trinity-mini:free",
  "nvidia/mistralai/mistral-medium-3-instruct",
  "mistral/devstral-medium-2507",
  "mistral/devstral-medium-latest",
  "mistral/mistral-medium-2505",
  "mistral/mistral-medium-2508",
  "mistral/mistral-medium-latest",
  "mistral/open-mistral-7b",
  "mistral/open-mixtral-8x22b",
  "mistral/open-mixtral-8x7b",
] as const;


const PROVIDER_AUTH_REQUIREMENTS: Record<string, string[]> = {
  openrouter: ["OPENROUTER_API_KEY"],
  nvidia: ["NVIDIA_API_KEY"],
  mistral: ["MISTRAL_API_KEY"],
  ollama: ["OLLAMA_API_KEY"],
  cloudflare: ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID"],
};

const PI_FREE_RETRYABLE_ERROR_PATTERN =
  /timed out|request was aborted|aborted|connection error|network error|fetch failed|socket hang up|econnreset|econnrefused|enotfound|overloaded|provider.?returned.?error|rate.?limit|too many requests|429|404|500|502|503|504|service.?unavailable|temporarily unavailable|quota exceeded|throttled|retry shortly|retry later|requires a subscription|upgrade for access|free-models-per-min|unexpected message role|reasoning_effort|reasoning is mandatory|cannot be disabled|no route matched|model not found/i;

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
