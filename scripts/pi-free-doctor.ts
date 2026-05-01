import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
import { PI_FREE_ALL_MODELS_PATH, PI_FREE_RANKED_MODELS_PATH } from "./support/paths.ts"

type ProviderName = "openrouter" | "nvidia" | "cloudflare" | "mistral" | "ollama";

type ProviderRule = {
  provider: ProviderName;
  requiredEnv: string[];
};

type RankedResult = {
  spec: string;
  provider: string;
  ok: boolean;
  error_message?: string | null;
};

type AllModelsPayload = { models?: Array<{ spec: string; provider: string }> };

type RankedModelsPayload = {
  ordered_models?: string[];
  results?: RankedResult[];
};

export type ProviderDoctorSummary = {
  provider: ProviderName;
  configured: boolean;
  discovered: number;
  working: number;
  failing: number;
  first_working_model: string | null;
  warning: string | null;
};

export type PiFreeDoctorReport = {
  providers: ProviderDoctorSummary[];
  first_usable_model: string | null;
  ordered_models: string[];
  warnings: string[];
};

const PROVIDERS: ProviderRule[] = [
  { provider: "openrouter", requiredEnv: ["OPENROUTER_API_KEY"] },
  { provider: "nvidia", requiredEnv: ["NVIDIA_API_KEY"] },
  { provider: "cloudflare", requiredEnv: ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID"] },
  { provider: "mistral", requiredEnv: ["MISTRAL_API_KEY"] },
  { provider: "ollama", requiredEnv: ["OLLAMA_API_KEY"] },
];

function isConfigured(rule: ProviderRule, env: NodeJS.ProcessEnv): boolean {
  return rule.requiredEnv.every((key) => {
    const value = env[key];
    return typeof value === "string" && value.trim().length > 0;
  });
}

function readJsonIfExists<T>(filePath: string, fallback: T): T {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

export function buildPiFreeDoctorReport(args: {
  env?: NodeJS.ProcessEnv;
  allModels?: AllModelsPayload;
  rankedModels?: RankedModelsPayload;
}): PiFreeDoctorReport {
  const env = args.env ?? process.env;
  const allModels = args.allModels ?? { models: [] };
  const rankedModels = args.rankedModels ?? { ordered_models: [], results: [] };
  const orderedModels = rankedModels.ordered_models ?? [];
  const results = rankedModels.results ?? [];
  const warnings: string[] = [];

  const providers = PROVIDERS.map<ProviderDoctorSummary>((rule) => {
    const configured = isConfigured(rule, env);
    const discovered = (allModels.models ?? []).filter((model) => model.provider === rule.provider).length;
    const providerResults = results.filter((result) => result.provider === rule.provider);
    const working = providerResults.filter((result) => result.ok).length;
    const failing = providerResults.filter((result) => !result.ok).length;
    const firstWorkingModel = orderedModels.find(
      (spec) => providerResults.some((result) => result.spec === spec && result.ok),
    ) ?? providerResults.find((result) => result.ok)?.spec ?? null;

    let warning: string | null = null;
    if (!configured) {
      warning = `${rule.provider} not configured (${rule.requiredEnv.join(", ")})`;
    } else if (discovered > 0 && working === 0) {
      warning = `${rule.provider} configured but no ranked model is currently working`;
    }
    if (warning) warnings.push(warning);

    return {
      provider: rule.provider,
      configured,
      discovered,
      working,
      failing,
      first_working_model: firstWorkingModel,
      warning,
    };
  });

  const firstUsableModel = orderedModels.find((spec) => results.some((result) => result.spec === spec && result.ok)) ?? null;
  if (!firstUsableModel) warnings.push("No usable ranked model found in catalog/pi-free/ranked-models.json");

  return {
    providers,
    first_usable_model: firstUsableModel,
    ordered_models: orderedModels,
    warnings,
  };
}

export async function runPiFreeDoctor(env: NodeJS.ProcessEnv = process.env): Promise<void> {
  const report = buildPiFreeDoctorReport({
    env,
    allModels: readJsonIfExists<AllModelsPayload>(PI_FREE_ALL_MODELS_PATH, { models: [] }),
    rankedModels: readJsonIfExists<RankedModelsPayload>(PI_FREE_RANKED_MODELS_PATH, { ordered_models: [], results: [] }),
  });

  for (const provider of report.providers) {
    const suffix = provider.warning ? ` | warning: ${provider.warning}` : "";
    console.log(
      `${provider.provider}: configured=${provider.configured} discovered=${provider.discovered} working=${provider.working} failing=${provider.failing} first=${provider.first_working_model ?? "(none)"}${suffix}`,
    );
  }
  console.log(`first_usable_model=${report.first_usable_model ?? "(none)"}`);

  if (!report.first_usable_model) {
    throw new Error("No usable ranked model found. Run pi:free ranking again or configure a working provider.");
  }
}

if (process.argv[1] && process.argv[1] === fileURLToPath(import.meta.url)) {
  runPiFreeDoctor().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
