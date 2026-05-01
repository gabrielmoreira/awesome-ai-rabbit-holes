// scripts/catalog/llm-gateway.ts
// Sole Pi/mise execution boundary for catalog LLM calls.

import { spawn } from "node:child_process";
import * as path from "node:path";

export interface LLMCallOptions {
  model?: string | null;
  timeoutMs?: number;
}

export const PI_FREE_TASK_NAME = "pi:free";
const DEFAULT_CATALOG_LLM_TIMEOUT_MS = 60_000;

function getMiseCmd(): string {
  return process.platform === "win32" ? "mise.exe" : "mise";
}

export function buildPiFreeTaskArgs(model?: string | null): string[] {
  const args = ["run", PI_FREE_TASK_NAME, "--", "--stdin"];
  if (model && model.trim().length > 0) {
    args.push("--model", model.trim());
  }
  return args;
}

export function buildPiFreeTaskEnv(env: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
  const taskEnv: NodeJS.ProcessEnv = { ...env };
  for (const key of Object.keys(taskEnv)) {
    if (key.toLowerCase().startsWith("npm_")) delete taskEnv[key];
  }
  delete taskEnv.INIT_CWD;

  const pathKey = Object.keys(taskEnv).find((key) => key.toLowerCase() === "path");
  if (pathKey && taskEnv[pathKey]) {
    taskEnv[pathKey] = taskEnv[pathKey]
      .split(path.delimiter)
      .filter((entry) => !/[\\/]node_modules[\\/]\.bin$/i.test(entry))
      .join(path.delimiter);
  }

  return taskEnv;
}

export function stripPiFreeTaskPrelude(text: string): string {
  return text.replace(/^\[pi:free\] \$ .*?(?:\r?\n|$)/, "").trim();
}

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

  return new Promise((resolve, reject) => {
    const child = spawn(getMiseCmd(), buildPiFreeTaskArgs(resolvedModel), {
      cwd: process.cwd(),
      env: buildPiFreeTaskEnv(process.env),
      stdio: ["pipe", "pipe", "pipe"],
      shell: false,
      windowsHide: true,
    });

    let stdout = "";
    let stderr = "";
    const timeout = setTimeout(() => {
      child.kill();
      reject(new Error(`LLM call timed out after ${timeoutMs}ms`));
    }, timeoutMs);

    child.stdout?.on("data", (chunk) => {
      stdout += String(chunk);
    });
    child.stderr?.on("data", (chunk) => {
      stderr += String(chunk);
    });

    child.on("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });

    child.on("close", (code) => {
      clearTimeout(timeout);
      if (code !== 0) {
        reject(new Error(stderr || stdout || `pi:free exited with code ${code}`));
        return;
      }
      resolve(stdout.trim());
    });

    child.stdin?.end(prompt);
  });
}

export async function runCatalogLlmPrompt(
  prompt: string,
  options: { model?: string | null; timeoutMs?: number | null } = {},
): Promise<string> {
  const output = await executeLLM(prompt, {
    model: options.model ?? null,
    timeoutMs: options.timeoutMs ?? resolveCatalogLlmTimeoutMs(),
  });
  return stripPiFreeTaskPrelude(output);
}
