import { spawn } from "node:child_process";
import * as path from "node:path";

export const PI_FREE_TASK_NAME = "pi:free";

export type MiseTaskRunOptions = {
  cwd?: string;
  env?: NodeJS.ProcessEnv;
  stdinText?: string | null;
  timeoutMs?: number | null;
};

function resolveMiseCommand(): string {
  return process.platform === "win32" ? "mise.exe" : "mise";
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildMiseTaskArgs(taskName: string, taskArgs: string[] = []): string[] {
  return taskArgs.length > 0 ? ["run", taskName, "--", ...taskArgs] : ["run", taskName];
}

export function buildMiseTaskEnv(env: NodeJS.ProcessEnv = process.env): NodeJS.ProcessEnv {
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

export function stripMiseTaskPrelude(text: string, taskName: string): string {
  const escapedTaskName = escapeRegExp(taskName);
  return text.replace(new RegExp(`^\\[${escapedTaskName}\\] \\$ .*?(?:\\r?\\n|$)`), "").trim();
}

export async function runMiseTask(
  taskName: string,
  taskArgs: string[] = [],
  options: MiseTaskRunOptions = {}
): Promise<string> {
  const timeoutMs = options.timeoutMs ?? null;

  return await new Promise((resolve, reject) => {
    let settled = false;
    let timedOut = false;
    let stdout = "";
    let stderr = "";
    const controller = timeoutMs != null ? new AbortController() : null;
    const timeout =
      timeoutMs != null
        ? setTimeout(() => {
            timedOut = true;
            controller?.abort();
          }, timeoutMs)
        : null;

    const child = spawn(resolveMiseCommand(), buildMiseTaskArgs(taskName, taskArgs), {
      cwd: options.cwd ?? process.cwd(),
      env: buildMiseTaskEnv(options.env ?? process.env),
      stdio: ["pipe", "pipe", "pipe"],
      shell: false,
      windowsHide: true,
      signal: controller?.signal,
    });

    const finish = (done: () => void): void => {
      if (settled) return;
      settled = true;
      if (timeout != null) clearTimeout(timeout);
      done();
    };

    child.stdout?.on("data", (chunk) => {
      stdout += String(chunk);
    });
    child.stderr?.on("data", (chunk) => {
      stderr += String(chunk);
    });

    child.on("error", (error) => {
      finish(() => {
        if (timedOut || error.name === "AbortError") {
          reject(new Error(`timed out after ${timeoutMs}ms`));
          return;
        }
        reject(error);
      });
    });

    child.on("close", (code) => {
      finish(() => {
        const cleanStdout = stripMiseTaskPrelude(stdout, taskName);
        const cleanStderr = stripMiseTaskPrelude(stderr, taskName);
        if (timedOut) {
          reject(new Error(`timed out after ${timeoutMs}ms`));
          return;
        }
        if ((code ?? 1) !== 0) {
          reject(new Error(cleanStderr || cleanStdout || `${taskName} exited with code ${code}`));
          return;
        }
        resolve(cleanStdout);
      });
    });

    if (options.stdinText == null) {
      child.stdin?.end();
      return;
    }
    child.stdin?.end(options.stdinText);
  });
}
