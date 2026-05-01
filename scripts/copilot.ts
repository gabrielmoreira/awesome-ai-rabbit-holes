// scripts/copilot.ts
// GitHub Copilot CLI boundary for non-interactive prompt execution.

import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export function resolveCopilotModel(
  requestedModel?: string | null,
  envModel: string | null | undefined = process.env["COPILOT_MODEL"]
): string | null {
  if (requestedModel && requestedModel.trim().length > 0) return requestedModel;
  if (envModel && envModel.trim().length > 0) return envModel;
  return null;
}

export function buildCopilotArgs(prompt: string, model?: string | null): string[] {
  const args = [
    "-p",
    prompt,
    "-s",
    "--no-ask-user",
    "--no-custom-instructions",
    "--no-auto-update",
    "--disallow-temp-dir",
    "--disable-builtin-mcps",
    "--excluded-tools=*",
  ];
  if (model && model.trim().length > 0) {
    args.push("--model", model);
  }
  return args;
}

export async function runCopilotPrompt(
  prompt: string,
  options: { model?: string | null } = {}
): Promise<string> {
  try {
    const resolvedModel = resolveCopilotModel(options.model);
    const { stdout, stderr } = await execFileAsync("copilot", buildCopilotArgs(prompt, resolvedModel), {
      windowsHide: true,
      maxBuffer: 4 * 1024 * 1024,
      timeout: 120_000,
      env: process.env,
    });

    const output = stdout.trim();
    if (output.length === 0) {
      const detail = stderr.trim();
      throw new Error(detail ? `Copilot returned empty output: ${detail}` : "Copilot returned empty output");
    }

    return output;
  } catch (error) {
    const err = error as NodeJS.ErrnoException & {
      stdout?: string;
      stderr?: string;
    };

    if (err.code === "ENOENT") {
      throw new Error(
        "GitHub Copilot CLI (`copilot`) is not installed or not on PATH. Install `@github/copilot` locally and in CI before running catalog update/refresh/rerun-excluded with the Copilot provider."
      );
    }

    const detail = [err.stderr, err.stdout, err.message]
      .map((value) => value?.trim())
      .find((value) => value && value.length > 0);

    throw new Error(detail ? `Copilot CLI failed: ${detail}` : "Copilot CLI failed");
  }
}
