import { spawn, type ChildProcess } from "node:child_process";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const PI_FREE_TASK_NAME = "pi:free";

function resolveMiseCommand(): string {
  return process.platform === "win32" ? "mise.exe" : "mise";
}

export function buildPiFreeTaskArgs(model?: string | null): string[] {
  const args = ["run", PI_FREE_TASK_NAME, "--", "--stdin"];
  if (model && model.trim().length > 0) {
    args.push("--model", model.trim());
  }
  return args;
}

export function stripPiFreeTaskPrelude(text: string): string {
  return text.replace(/^\[pi:free\] \$ .*?(?:\r?\n|$)/, "").trim();
}

export function resolveCatalogAIModel(
  requestedModel?: string | null,
  env: NodeJS.ProcessEnv = process.env
): string | null {
  if (requestedModel && requestedModel.trim().length > 0) return requestedModel.trim();

  const catalogModel = env["CATALOG_AI_MODEL"];
  if (catalogModel && catalogModel.trim().length > 0) return catalogModel.trim();

  return null;
}
const DEFAULT_CATALOG_AI_TIMEOUT_MS = 120_000;

export function resolveCatalogAITimeoutMs(env: NodeJS.ProcessEnv = process.env): number {
  const raw = env["CATALOG_AI_TIMEOUT_MS"]?.trim();
  if (!raw) return DEFAULT_CATALOG_AI_TIMEOUT_MS;

  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return DEFAULT_CATALOG_AI_TIMEOUT_MS;

  return parsed;
}



function terminatePiFreeProcessTree(child: ChildProcess): void {
  if (child.pid == null) return;

  if (process.platform === "win32") {
    const killer = spawn("taskkill", ["/pid", String(child.pid), "/t", "/f"], {
      windowsHide: true,
      stdio: "ignore",
      shell: false,
    });
    killer.unref();
    return;
  }

  child.kill("SIGKILL");
}

export function buildPiFreeTaskEnv(env: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
  const taskEnv: NodeJS.ProcessEnv = { ...env };
  for (const key of Object.keys(taskEnv)) {
    if (key.toLowerCase().startsWith("npm_")) {
      delete taskEnv[key];
    }
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
export async function runCatalogAIPrompt(
  prompt: string,
  options: { model?: string | null } = {}
): Promise<string> {
  const resolvedModel = resolveCatalogAIModel(options.model);
  const timeoutMs = resolveCatalogAITimeoutMs();
  return new Promise((resolve, reject) => {
    const child = spawn(resolveMiseCommand(), buildPiFreeTaskArgs(resolvedModel), {
      cwd: REPO_ROOT,
      env: buildPiFreeTaskEnv(),
      windowsHide: true,
      stdio: ["pipe", "pipe", "pipe"],
      shell: false,
    });

    let timedOut = false;
    const timeout = setTimeout(() => {
      timedOut = true;
      terminatePiFreeProcessTree(child);
    }, timeoutMs);

    child.stdin?.end(prompt);

    let stdout = "";
    let stderr = "";

    child.stdout?.on("data", (chunk: string | Buffer) => {
      stdout += String(chunk);
    });
    child.stderr?.on("data", (chunk: string | Buffer) => {
      stderr += String(chunk);
    });

    child.on("error", (error) => {
      clearTimeout(timeout);
      const err = error as NodeJS.ErrnoException;
      if (err.code === "ENOENT") {
        reject(
          new Error(
            "mise is not installed or not on PATH. Run the catalog through `mise run` or install `mise` so the pinned pi:free task is available."
          )
        );
        return;
      }
      reject(new Error(err.message));
    });

    child.on("close", (code) => {
      clearTimeout(timeout);

      if (timedOut) {
        reject(new Error(`pi:free task timed out after ${timeoutMs}ms`));
        return;
      }

      const cleanedStdout = stripPiFreeTaskPrelude(stdout);
      const cleanedStderr = stripPiFreeTaskPrelude(stderr);

      if ((code ?? 1) !== 0) {
        const detail = [cleanedStderr, cleanedStdout, stderr.trim(), stdout.trim()].find(
          (value) => value.length > 0
        );
        reject(new Error(detail ? `pi:free task failed: ${detail}` : "pi:free task failed"));
        return;
      }

      const output = cleanedStdout.length > 0 ? cleanedStdout : cleanedStderr;
      if (output.length === 0) {
        reject(new Error("pi:free task returned empty output"));
        return;
      }

      resolve(output);
    });
  });
}
