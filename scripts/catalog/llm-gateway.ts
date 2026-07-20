import { runPiFreeTextPrompt } from "../pi/ai.ts";

export interface CatalogLlmPromptOptions {
  model?: string | null;
  timeoutMs?: number | null;
}

export interface CatalogLlmPromptResult {
  model: string;
  text: string;
}

const DEFAULT_CATALOG_LLM_TIMEOUT_MS = 60_000;

export function resolveCatalogLlmModel(
  requestedModel?: string | null,
  env: NodeJS.ProcessEnv = process.env,
): string | null {
  if (requestedModel && requestedModel.trim().length > 0) return requestedModel.trim();
  const catalogModel = env["CATALOG_LLM_MODEL"];
  if (catalogModel && catalogModel.trim().length > 0) return catalogModel.trim();
  return null;
}

export function resolveCatalogLlmTimeoutMs(env: NodeJS.ProcessEnv = process.env): number {
  const raw = env["CATALOG_LLM_TIMEOUT_MS"]?.trim();
  if (!raw) return DEFAULT_CATALOG_LLM_TIMEOUT_MS;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return DEFAULT_CATALOG_LLM_TIMEOUT_MS;
  return parsed;
}

export async function runCatalogLlmPromptWithMetadata(
  prompt: string,
  options: CatalogLlmPromptOptions = {},
): Promise<CatalogLlmPromptResult> {
  return runPiFreeTextPrompt(prompt, {
    model: resolveCatalogLlmModel(options.model),
    timeoutMs: options.timeoutMs ?? resolveCatalogLlmTimeoutMs(),
  });
}

export async function runCatalogLlmPrompt(
  prompt: string,
  options: CatalogLlmPromptOptions = {},
): Promise<string> {
  const result = await runCatalogLlmPromptWithMetadata(prompt, options);
  return result.text;
}
