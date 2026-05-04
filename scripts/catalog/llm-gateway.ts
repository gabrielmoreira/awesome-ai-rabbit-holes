import { PI_FREE_TASK_NAME, runMiseTask } from "../support/runner.ts";

export interface LLMCallOptions {
  model?: string | null;
  timeoutMs?: number;
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

export async function executeLLM(prompt: string, opts: LLMCallOptions = {}): Promise<string> {
  const resolvedModel = resolveCatalogLlmModel(opts.model);
  const timeoutMs = opts.timeoutMs ?? resolveCatalogLlmTimeoutMs();
  const taskArgs = ["--stdin"];

  if (resolvedModel) {
    taskArgs.push("--model", resolvedModel);
  }

  return await runMiseTask(PI_FREE_TASK_NAME, taskArgs, {
    stdinText: prompt,
    timeoutMs,
  });
}

export async function runCatalogLlmPrompt(
  prompt: string,
  options: { model?: string | null; timeoutMs?: number | null } = {},
): Promise<string> {
  return await executeLLM(prompt, {
    model: options.model ?? null,
    timeoutMs: options.timeoutMs ?? resolveCatalogLlmTimeoutMs(),
  });
}