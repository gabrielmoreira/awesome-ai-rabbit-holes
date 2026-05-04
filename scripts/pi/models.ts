import * as fs from "node:fs";
import * as path from "node:path";
import { createHash } from "node:crypto";
import { CACHE_DIR } from "../support/paths.ts";

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

export const PI_FREE_RECENT_FAILURE_TTL_MS = 30 * 60 * 1000;

export const PI_FREE_MODEL_CYCLE = [
  "cloudflare/@cf/moonshotai/kimi-k2.6",
  "nvidia/moonshotai/kimi-k2.6",
  "nvidia/deepseek-ai/deepseek-v4-pro",
  "nvidia/z-ai/glm-5.1",
  "nvidia/minimaxai/minimax-m2.7",
  "openrouter/minimax/minimax-m2.5:free",
  "nvidia/minimaxai/minimax-m2.5",
  "nvidia/deepseek-ai/deepseek-v4-flash",
  "nvidia/z-ai/glm5",
  "cloudflare/@cf/moonshotai/kimi-k2.5",
  "nvidia/stepfun-ai/step-3.5-flash",
  "openrouter/stepfun/step-3.5-flash:free",
  "nvidia/qwen/qwen3.5-397b-a17b",
  "nvidia/moonshotai/kimi-k2-thinking",
  "openrouter/google/gemma-4-31b-it:free",
  "nvidia/z-ai/glm4.7",
  "nvidia/qwen/qwen3.5-122b-a10b",
  "nvidia/deepseek-ai/deepseek-v3.2",
  "cloudflare/@cf/google/gemma-4-26b-a4b-it",
  "openrouter/google/gemma-4-26b-a4b-it:free",
  "cloudflare/@cf/zai-org/glm-4.7-flash",
  "cloudflare/@cf/openai/gpt-oss-120b",
  "nvidia/openai/gpt-oss-120b",
  "openrouter/openai/gpt-oss-120b:free",
  "nvidia/nvidia/nemotron-3-super-120b-a12b",
  "openrouter/nvidia/nemotron-3-super-120b-a12b:free",
  "cloudflare/@cf/nvidia/nemotron-3-120b-a12b",
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
  "openrouter/nvidia/nemotron-nano-9b-v2:free",
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

export const PI_FREE_DEFAULT_MODEL = PI_FREE_MODEL_CYCLE[0] ?? null;

const PROVIDER_AUTH_REQUIREMENTS: Record<string, string[]> = {
  openrouter: ["OPENROUTER_API_KEY"],
  nvidia: ["NVIDIA_API_KEY"],
  mistral: ["MISTRAL_API_KEY"],
  ollama: ["OLLAMA_API_KEY"],
  cloudflare: ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID"],
};

function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

function resolvePiFreeRecentFailureFilename(modelSpec: string): string {
  const parsed = parsePiFreeModelSpec(modelSpec);
  const provider = parsed?.provider ?? "unknown";
  const digest = createHash("sha256").update(modelSpec).digest("hex").slice(0, 16);
  return `${provider}--${digest}.json`;
}

function resolvePiFreeRecentFailurePath(modelSpec: string, envValues: PiFreeEnvValues = process.env): string {
  return path.join(resolvePiFreeRecentFailureDir(envValues), resolvePiFreeRecentFailureFilename(modelSpec));
}

function readRecentFailureRecord(filePath: string): PiFreeRecentFailureRecord | null {
  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8")) as Partial<PiFreeRecentFailureRecord>;
    if (
      typeof parsed.model !== "string" ||
      typeof parsed.failed_at !== "string" ||
      typeof parsed.expires_at !== "string" ||
      (parsed.error_message != null && typeof parsed.error_message !== "string")
    ) {
      return null;
    }
    return {
      model: parsed.model,
      failed_at: parsed.failed_at,
      expires_at: parsed.expires_at,
      error_message: parsed.error_message ?? null,
    };
  } catch {
    return null;
  }
}

function isRecentFailureActive(record: PiFreeRecentFailureRecord, now: number): boolean {
  const expiresAt = Date.parse(record.expires_at);
  return Number.isFinite(expiresAt) && expiresAt > now;
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

export function resolvePiFreeRecentFailureDir(envValues: PiFreeEnvValues = process.env): string {
  const baseDir = typeof envValues.PI_CODING_AGENT_DIR === "string" && envValues.PI_CODING_AGENT_DIR.trim().length > 0
    ? envValues.PI_CODING_AGENT_DIR.trim()
    : path.join(CACHE_DIR, "pi", "agent");
  return path.join(baseDir, "pi-free-recent-failures");
}

export function listPiFreeRecentFailureRecords(
  envValues: PiFreeEnvValues = process.env,
  now: number = Date.now()
): PiFreeRecentFailureRecord[] {
  const dirPath = resolvePiFreeRecentFailureDir(envValues);
  if (!fs.existsSync(dirPath)) return [];

  const activeRecords: PiFreeRecentFailureRecord[] = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".json")) continue;
    const filePath = path.join(dirPath, entry.name);
    const record = readRecentFailureRecord(filePath);
    if (!record || !isRecentFailureActive(record, now)) {
      fs.rmSync(filePath, { force: true });
      continue;
    }
    activeRecords.push(record);
  }

  return activeRecords.sort(
    (a, b) => Date.parse(a.failed_at) - Date.parse(b.failed_at) || a.model.localeCompare(b.model)
  );
}

export function recordPiFreeRecentFailure(
  modelSpec: string,
  errorMessage: string | null,
  envValues: PiFreeEnvValues = process.env,
  failedAtMs: number = Date.now()
): PiFreeRecentFailureRecord {
  const dirPath = resolvePiFreeRecentFailureDir(envValues);
  ensureDir(dirPath);
  const record: PiFreeRecentFailureRecord = {
    model: modelSpec,
    failed_at: new Date(failedAtMs).toISOString(),
    expires_at: new Date(failedAtMs + PI_FREE_RECENT_FAILURE_TTL_MS).toISOString(),
    error_message: errorMessage,
  };
  const targetPath = resolvePiFreeRecentFailurePath(modelSpec, envValues);
  const tempPath = `${targetPath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(record, null, 2) + "\n", "utf8");
  try {
    try {
      fs.renameSync(tempPath, targetPath);
    } catch {
      fs.rmSync(targetPath, { force: true });
      fs.renameSync(tempPath, targetPath);
    }
  } finally {
    fs.rmSync(tempPath, { force: true });
  }
  return record;
}

export function clearPiFreeRecentFailure(modelSpec: string, envValues: PiFreeEnvValues = process.env): void {
  fs.rmSync(resolvePiFreeRecentFailurePath(modelSpec, envValues), { force: true });
}

export function resolvePiFreeOrderedModels(envValues: PiFreeEnvValues = process.env): string[] {
  return Array.from(new Set(PI_FREE_MODEL_CYCLE)).filter((modelSpec) => {
    const parsed = parsePiFreeModelSpec(modelSpec);
    return parsed ? hasPiFreeProviderAuth(parsed.provider, envValues) : false;
  });
}

export function filterPiFreeRecentFailures(orderedModels: string[], recentFailures: Iterable<string>): string[] {
  const failedModels = new Set(recentFailures);
  const filtered = orderedModels.filter((modelSpec) => !failedModels.has(modelSpec));
  return filtered.length > 0 ? filtered : orderedModels;
}

export function resolvePiFreeStartupCandidates(
  envValues: PiFreeEnvValues = process.env,
  options: ResolvePiFreeStartupOptions = {}
): string[] {
  const orderedModels = resolvePiFreeOrderedModels(envValues);
  if (orderedModels.length === 0) return [];

  const recentFailures = options.recentFailures
    ? new Set(options.recentFailures)
    : new Set(listPiFreeRecentFailureRecords(envValues, options.now ?? Date.now()).map((record) => record.model));

  return filterPiFreeRecentFailures(orderedModels, recentFailures);
}

export function resolvePiFreeStartupModel(
  envValues: PiFreeEnvValues = process.env,
  options: ResolvePiFreeStartupOptions = {}
): string | null {
  return resolvePiFreeStartupCandidates(envValues, options)[0] ?? null;
}
