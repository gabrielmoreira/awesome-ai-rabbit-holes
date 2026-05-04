import * as fs from "node:fs";
import {
  PI_FREE_ALL_MODELS_PATH,
  PI_FREE_CATALOG_DIR,
  PI_FREE_INTELLIGENCE_PATH,
  PI_FREE_RANKED_MODELS_PATH,
} from "../support/paths.ts";

export { PI_FREE_ALL_MODELS_PATH, PI_FREE_CATALOG_DIR, PI_FREE_INTELLIGENCE_PATH, PI_FREE_RANKED_MODELS_PATH };

export const PI_FREE_INTELLIGENCE_SOURCE_URL = "https://artificialanalysis.ai/leaderboards/models";

export type PiFreeEnvValues = Record<string, string | undefined>;

export type PiFreeIntelligenceRecord = {
  id: string;
  model: string;
  creator: string;
  artificial_analysis_intelligence_index: number | null;
  aliases: string[];
};

export type PiFreeIntelligenceFile = {
  generated_at: string;
  source_url: string;
  records: PiFreeIntelligenceRecord[];
};

export type PiFreeAllModel = {
  spec: string;
  provider: string;
  model_id: string;
  context_window: string | null;
  max_output: string | null;
  supports_thinking: boolean;
  supports_images: boolean;
  free_tier_hint: boolean;
  included_reason: "direct_provider" | "openrouter_free" | "openrouter_catalog";
};

export type PiFreeAllModelsFile = {
  generated_at: string;
  source_command: string;
  model_count: number;
  models: PiFreeAllModel[];
};

export type PiFreeResolvedAllModel = PiFreeAllModel & {
  auth_configured: boolean;
  intelligence_record_id: string | null;
  artificial_analysis_intelligence_index: number | null;
};

export type PiFreeRankedModelResult = {
  spec: string;
  provider: string;
  model_id: string;
  ok: boolean;
  elapsed_ms: number;
  error_type: string | null;
  error_message: string | null;
  output_excerpt: string | null;
  intelligence_record_id: string | null;
  artificial_analysis_intelligence_index: number | null;
};

export type PiFreeRankedModelsFile = {
  generated_at: string;
  prompt: string;
  timeout_ms: number;
  providers_considered: string[];
  ordered_models: string[];
  results: PiFreeRankedModelResult[];
};

export const PI_FREE_MODEL_CYCLE = [
  "nvidia/deepseek-ai/deepseek-v4-pro",
  "nvidia/z-ai/glm-5.1",
  "nvidia/z-ai/glm5",
  "nvidia/minimaxai/minimax-m2.7",
  "nvidia/qwen/qwen3-next-80b-a3b-thinking",
  "nvidia/moonshotai/kimi-k2-instruct-0905",
  "nvidia/moonshotai/kimi-k2-thinking",
  "nvidia/mistralai/mistral-medium-3.5-128b",
  "nvidia/nvidia/nemotron-3-super-120b-a12b",
  "openrouter/tencent/hy3-preview:free",
  "openrouter/google/gemma-4-31b-it:free",
  "openrouter/openai/gpt-oss-120b:free",
  "openrouter/openai/gpt-oss-20b:free",
  "openrouter/nvidia/nemotron-3-super-120b-a12b:free",
  "openrouter/qwen/qwen3-next-80b-a3b-instruct:free",
] as const;

export const PI_FREE_DEFAULT_MODEL = PI_FREE_MODEL_CYCLE[0] ?? null;

const PROVIDER_AUTH_REQUIREMENTS: Record<string, string[]> = {
  openrouter: ["OPENROUTER_API_KEY"],
  nvidia: ["NVIDIA_API_KEY"],
  mistral: ["MISTRAL_API_KEY"],
  ollama: ["OLLAMA_API_KEY"],
  cloudflare: ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID"],
};

const PI_FREE_DIRECT_PROVIDERS = new Set(["nvidia", "mistral", "ollama", "cloudflare"]);

const PI_FREE_INTELLIGENCE_ALIAS_OVERRIDES: Record<string, string[]> = {
  "deepseek-v4-pro": ["deepseek-ai/deepseek-v4-pro"],
  "gemini-3-1-pro-preview": ["google/gemini-3.1-pro-preview"],
  "gemini-2-5-pro": ["google/gemini-2.5-pro"],
  "gemma-4-31b": ["google/gemma-4-31b-it"],
  "glm-5-1": ["z-ai/glm-5.1"],
  "glm-5": ["z-ai/glm5", "z-ai/glm-5"],
  "gpt-oss-120b": ["openai/gpt-oss-120b"],
  hy3: ["tencent/hy3-preview"],
  "kimi-k2-5-non-reasoning": ["moonshotai/kimi-k2.5"],
  "minimax-m2-7": ["minimaxai/minimax-m2.7", "minimax/minimax-m2.7"],
  "mistral-medium-3-1": ["mistralai/mistral-medium-3.1", "mistralai/mistral-medium-3.5-128b"],
  "nvidia-nemotron-3-super-120b-a12b": ["nvidia/nemotron-3-super-120b-a12b", "nvidia/nvidia/nemotron-3-super-120b-a12b"],
  "qwen3-5-397b-a17b": ["qwen/qwen3.5-397b-a17b"],
  "qwen3-next-80b-a3b-reasoning": ["qwen/qwen3-next-80b-a3b-thinking", "qwen/qwen3-next-80b-a3b-instruct"],
  "trinity-large-thinking": ["arcee-ai/trinity-large-thinking"],
  "mercury-2": ["inception/mercury-2"],
};


const PI_FREE_CREATOR_PROVIDER_SLUGS: Record<string, string[]> = {
  amazon: ["amazon"],
  anthropic: ["anthropic"],
  arcee: ["arcee-ai"],
  "arcee ai": ["arcee-ai"],
  cloudflare: ["cloudflare"],
  deepseek: ["deepseek-ai", "deepseek"],
  google: ["google"],
  inception: ["inception"],
  kimi: ["moonshotai", "kimi"],
  meta: ["meta"],
  minimax: ["minimaxai", "minimax"],
  mistral: ["mistralai", "mistral"],
  moonshot: ["moonshotai"],
  "moonshot ai": ["moonshotai"],
  nvidia: ["nvidia"],
  openai: ["openai"],
  qwen: ["qwen"],
  tencent: ["tencent"],
  "x ai": ["x-ai", "xai"],
  xai: ["x-ai", "xai"],
  "z ai": ["z-ai"],
  "z-ai": ["z-ai"],
};

function normalizeCreatorKey(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}


function normalizeHumanAliasLabel(value: string): string {
  return value.toLowerCase().replace(/[()]/g, " ").replace(/\s+/g, " ").trim();
}
function normalizeModelIdLike(value: string): string {
  return value
    .toLowerCase()
    .replace(/[()]/g, " ")
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function convertSingleDigitHyphenVersions(value: string): string {
  return value.replace(/(^|[^0-9])(\d)-(\d)(?=[^0-9]|$)/g, (_, prefix: string, left: string, right: string) => {
    return `${prefix}${left}.${right}`;
  });
}

function stripNonReasoningSuffix(value: string): string | null {
  return value.endsWith("-non-reasoning") ? value.slice(0, -"-non-reasoning".length) : null;
}

function buildModelIdLikeAliases(record: Pick<PiFreeIntelligenceRecord, "id" | "model">): string[] {
  const aliases = new Set<string>();
  const add = (value: string | null | undefined) => {
    if (!value || value.trim().length === 0) return;
    aliases.add(value.trim());
  };

  const normalizedModel = normalizeModelIdLike(record.model);
  add(record.id);
  add(normalizedModel);
  add(convertSingleDigitHyphenVersions(record.id));
  add(convertSingleDigitHyphenVersions(normalizedModel));
  const nonReasoningId = stripNonReasoningSuffix(record.id);
  add(nonReasoningId);
  add(nonReasoningId ? convertSingleDigitHyphenVersions(nonReasoningId) : null);
  return [...aliases];
}

function buildCreatorProviderAliases(record: Pick<PiFreeIntelligenceRecord, "creator" | "id" | "model">): string[] {
  const creatorKey = normalizeCreatorKey(record.creator);
  const providers = PI_FREE_CREATOR_PROVIDER_SLUGS[creatorKey] ?? [creatorKey.replace(/\s+/g, "-")].filter(Boolean);
  const idLikeAliases = buildModelIdLikeAliases(record);
  return providers.flatMap((provider) => idLikeAliases.map((alias) => `${provider}/${alias}`));
}

export function buildPiFreeIntelligenceAliases(
  record: Pick<PiFreeIntelligenceRecord, "id" | "model" | "creator"> & { aliases?: string[] },
): string[] {
  const aliases = new Set<string>();
  const add = (value: string | null | undefined) => {
    if (!value || value.trim().length === 0) return;
    aliases.add(value.trim());
  };

  for (const alias of buildModelIdLikeAliases(record)) add(alias);
  add(normalizeHumanAliasLabel(record.model));
  add(normalizeHumanAliasLabel(`${record.creator} ${record.model}`));
  for (const alias of record.aliases ?? []) add(alias);
  for (const alias of buildCreatorProviderAliases(record)) add(alias);
  return [...aliases];
}
function readJsonIfExists<T>(filePath: string): T | null {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
  } catch {
    return null;
  }
}

function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true });
}

function numberOrMinusInfinity(value: number | null): number {
  return value == null ? Number.NEGATIVE_INFINITY : value;
}

function providerPriority(provider: string): number {
  switch (provider) {
    case "nvidia":
      return 0;
    case "openrouter":
      return 1;
    case "mistral":
      return 2;
    case "cloudflare":
      return 3;
    case "ollama":
      return 4;
    default:
      return 5;
  }
}

function normalizeLooseText(value: string): string {
  return value
    .toLowerCase()
    .replace(/:free/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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

export function isPiFreeFreeTierHint(modelSpec: string): boolean {
  return modelSpec.includes(":free") || modelSpec.startsWith("kilo/");
}

function dedupePiFreeModels<T extends { spec: string }>(models: T[]): T[] {
  return Array.from(new Map(models.map((model) => [model.spec, model])).values());
}

function compareParsedPiFreeModels(a: PiFreeAllModel, b: PiFreeAllModel): number {
  return (
    providerPriority(a.provider) - providerPriority(b.provider) ||
    Number(a.free_tier_hint) - Number(b.free_tier_hint) ||
    a.spec.localeCompare(b.spec)
  );
}

function buildRecordAliases(record: PiFreeIntelligenceRecord): string[] {
  return Array.from(
    new Set([
      ...buildPiFreeIntelligenceAliases(record),
      ...(PI_FREE_INTELLIGENCE_ALIAS_OVERRIDES[record.id] ?? []),
    ])
  );
}

function bestPiFreeAliasMatchScore(modelSpec: string, record: PiFreeIntelligenceRecord): number {
  const normalizedSpec = normalizeLooseText(modelSpec);
  let bestScore = 0;
  for (const alias of buildRecordAliases(record)) {
    const normalizedAlias = normalizeLooseText(alias);
    if (!normalizedAlias) continue;
    if (normalizedSpec === normalizedAlias) {
      bestScore = Math.max(bestScore, 10_000 + normalizedAlias.length);
      continue;
    }
    if (normalizedSpec.includes(normalizedAlias)) {
      bestScore = Math.max(bestScore, normalizedAlias.length);
    }
  }
  return bestScore;
}

export function matchPiFreeIntelligenceRecord(
  modelSpec: string,
  intelligenceFile: PiFreeIntelligenceFile | null
): PiFreeIntelligenceRecord | null {
  if (!intelligenceFile) return null;

  const matches = intelligenceFile.records
    .map((record) => ({ record, aliasScore: bestPiFreeAliasMatchScore(modelSpec, record) }))
    .filter((entry) => entry.aliasScore > 0);

  if (matches.length === 0) return null;
  return [...matches].sort(
    (a, b) =>
      b.aliasScore - a.aliasScore ||
      numberOrMinusInfinity(b.record.artificial_analysis_intelligence_index) -
        numberOrMinusInfinity(a.record.artificial_analysis_intelligence_index) ||
      a.record.id.localeCompare(b.record.id)
  )[0]?.record ?? null;
}

function resolvePiFreeIntelligence(record: PiFreeIntelligenceRecord | null): {
  intelligence_record_id: string | null;
  artificial_analysis_intelligence_index: number | null;
} {
  return {
    intelligence_record_id: record?.id ?? null,
    artificial_analysis_intelligence_index: record?.artificial_analysis_intelligence_index ?? null,
  };
}

export function orderPiFreeAllModels(
  models: PiFreeAllModel[],
  intelligenceFile: PiFreeIntelligenceFile | null,
  envValues: PiFreeEnvValues = process.env
): PiFreeResolvedAllModel[] {
  return [...models]
    .map((model) => {
      const match = resolvePiFreeIntelligence(matchPiFreeIntelligenceRecord(model.spec, intelligenceFile));
      return {
        ...model,
        auth_configured: hasPiFreeProviderAuth(model.provider, envValues),
        intelligence_record_id: match.intelligence_record_id,
        artificial_analysis_intelligence_index: match.artificial_analysis_intelligence_index,
      } satisfies PiFreeResolvedAllModel;
    })
    .sort(
      (a, b) =>
        Number(b.auth_configured) - Number(a.auth_configured) ||
        numberOrMinusInfinity(b.artificial_analysis_intelligence_index) -
          numberOrMinusInfinity(a.artificial_analysis_intelligence_index) ||
        Number(b.free_tier_hint) - Number(a.free_tier_hint) ||
        providerPriority(a.provider) - providerPriority(b.provider) ||
        a.spec.localeCompare(b.spec)
    );
}

export function selectPiFreeProbeCandidates(models: PiFreeAllModel[], limit: number): PiFreeAllModel[] {
  const safeLimit = Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : models.length;
  return models.slice(0, safeLimit);
}

export function comparePiFreeRankedResults(a: PiFreeRankedModelResult, b: PiFreeRankedModelResult): number {
  return (
    Number(b.ok) - Number(a.ok) ||
    numberOrMinusInfinity(b.artificial_analysis_intelligence_index) -
      numberOrMinusInfinity(a.artificial_analysis_intelligence_index) ||
    a.elapsed_ms - b.elapsed_ms ||
    a.spec.localeCompare(b.spec)
  );
}

export function shouldIncludeDiscoveredPiFreeModel(provider: string, modelId: string): {
  include: boolean;
  reason: PiFreeAllModel["included_reason"];
} {
  const spec = `${provider}/${modelId}`;
  if (provider === "openrouter") {
    return isPiFreeFreeTierHint(spec)
      ? { include: true, reason: "openrouter_free" }
      : { include: false, reason: "openrouter_catalog" };
  }

  if (PI_FREE_DIRECT_PROVIDERS.has(provider)) {
    return { include: true, reason: "direct_provider" };
  }

  return { include: false, reason: "direct_provider" };
}

export function parsePiListModelsOutput(output: string): PiFreeAllModel[] {
  const lines = output
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter((line) => line.length > 0 && !line.startsWith("Usage:") && !line.startsWith("Examples:"));

  const models: PiFreeAllModel[] = [];
  for (const line of lines) {
    if (line.startsWith("provider") || line.startsWith("[pi] $")) continue;
    const parts = line.split(/\s{2,}/).map((part) => part.trim()).filter(Boolean);
    if (parts.length < 6) continue;
    const [provider, modelId, contextWindow, maxOutput, thinking, images] = parts;
    const inclusion = shouldIncludeDiscoveredPiFreeModel(provider, modelId);
    if (!inclusion.include) continue;
    const spec = `${provider}/${modelId}`;
    models.push({
      spec,
      provider,
      model_id: modelId,
      context_window: contextWindow,
      max_output: maxOutput,
      supports_thinking: thinking === "yes",
      supports_images: images === "yes",
      free_tier_hint: isPiFreeFreeTierHint(spec),
      included_reason: inclusion.reason,
    });
  }

  return dedupePiFreeModels(models).sort(compareParsedPiFreeModels);
}

export function buildPiFreeAllModelsFile(models: PiFreeAllModel[]): PiFreeAllModelsFile {
  const orderedModels = dedupePiFreeModels(models).sort(compareParsedPiFreeModels);
  return {
    generated_at: new Date().toISOString(),
    source_command: 'pi --no-tools --no-skills --no-extensions -e npm:pi-free@2.0.2 --list-models',
    model_count: orderedModels.length,
    models: orderedModels,
  };
}

export function loadPiFreeIntelligenceFile(): PiFreeIntelligenceFile | null {
  return readJsonIfExists<PiFreeIntelligenceFile>(PI_FREE_INTELLIGENCE_PATH);
}

export function writePiFreeIntelligenceFile(file: PiFreeIntelligenceFile): void {
  ensureDir(PI_FREE_CATALOG_DIR);
  fs.writeFileSync(PI_FREE_INTELLIGENCE_PATH, JSON.stringify(file, null, 2) + "\n", "utf8");
}

export function loadPiFreeAllModelsFile(): PiFreeAllModelsFile | null {
  return readJsonIfExists<PiFreeAllModelsFile>(PI_FREE_ALL_MODELS_PATH);
}

export function writePiFreeAllModelsFile(file: PiFreeAllModelsFile): void {
  ensureDir(PI_FREE_CATALOG_DIR);
  fs.writeFileSync(PI_FREE_ALL_MODELS_PATH, JSON.stringify(file, null, 2) + "\n", "utf8");
}

export function loadPiFreeRankedModelsFile(): PiFreeRankedModelsFile | null {
  return readJsonIfExists<PiFreeRankedModelsFile>(PI_FREE_RANKED_MODELS_PATH);
}

export function writePiFreeRankedModelsFile(file: PiFreeRankedModelsFile): void {
  ensureDir(PI_FREE_CATALOG_DIR);
  fs.writeFileSync(PI_FREE_RANKED_MODELS_PATH, JSON.stringify(file, null, 2) + "\n", "utf8");
}

export function resolvePiFreeOrderedModels(envValues: PiFreeEnvValues = process.env): string[] {
  const ranked = loadPiFreeRankedModelsFile();
  if (ranked && Array.isArray(ranked.ordered_models) && ranked.ordered_models.length > 0) {
    const rankedModels = ranked.ordered_models.filter((spec) => {
      const parsed = parsePiFreeModelSpec(spec);
      return parsed ? hasPiFreeProviderAuth(parsed.provider, envValues) : false;
    });
    if (rankedModels.length > 0) return Array.from(new Set(rankedModels));
  }

  const allModels = loadPiFreeAllModelsFile();
  if (allModels && Array.isArray(allModels.models) && allModels.models.length > 0) {
    const ordered = orderPiFreeAllModels(allModels.models, loadPiFreeIntelligenceFile(), envValues)
      .filter((model) => model.auth_configured)
      .map((model) => model.spec);
    if (ordered.length > 0) return Array.from(new Set(ordered));
  }

  return PI_FREE_MODEL_CYCLE.filter((spec) => {
    const parsed = parsePiFreeModelSpec(spec);
    return parsed ? hasPiFreeProviderAuth(parsed.provider, envValues) : false;
  });
}


export function resolvePiFreeStartupCandidates(envValues: PiFreeEnvValues = process.env): string[] {
  const orderedModels = resolvePiFreeOrderedModels(envValues);
  const ranked = loadPiFreeRankedModelsFile();
  const rankedResultsBySpec = new Map(
    (ranked && Array.isArray(ranked.results) ? ranked.results : []).map((result) => [result.spec, result.ok] as const)
  );
  if (rankedResultsBySpec.size === 0) return orderedModels;

  const successful = orderedModels.filter((spec) => rankedResultsBySpec.get(spec) === true);
  const unprobed = orderedModels.filter((spec) => !rankedResultsBySpec.has(spec));
  const failed = orderedModels.filter((spec) => rankedResultsBySpec.get(spec) === false);
  return [...successful, ...unprobed, ...failed];
}
export function resolvePiFreeStartupModel(envValues: PiFreeEnvValues = process.env): string | null {
  return resolvePiFreeStartupCandidates(envValues)[0] ?? null;
}
