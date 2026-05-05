import { runPiFreeTextPrompt } from "../pi/ai.ts";

export interface CatalogLlmPromptOptions {
  model?: string | null;
  timeoutMs?: number | null;
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

export async function runCatalogLlmPrompt(
  prompt: string,
  options: CatalogLlmPromptOptions = {},
): Promise<string> {
  const result = await runPiFreeTextPrompt(prompt, {
    model: resolveCatalogLlmModel(options.model),
    timeoutMs: options.timeoutMs ?? resolveCatalogLlmTimeoutMs(),
  });
  return result.text;
}
