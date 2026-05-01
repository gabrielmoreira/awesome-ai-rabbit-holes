import { pathToFileURL } from "node:url";
import { spawn, type ChildProcess } from "node:child_process";
import { buildPiFreeAllModelsFile, parsePiListModelsOutput, writePiFreeAllModelsFile } from "./pi/models.ts"

const DEFAULT_TIMEOUT_MS = 60_000;

function resolvePiCommand(): string {
  return process.platform === "win32" ? "pi.exe" : "pi";
}

function terminateProcessTree(child: ChildProcess): void {
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

function parseArgs(argv: string[]): { timeoutMs: number } {
  let timeoutMs = DEFAULT_TIMEOUT_MS;
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--timeout-ms" && argv[index + 1]) {
      const parsed = Number.parseInt(argv[index + 1], 10);
      if (Number.isFinite(parsed) && parsed > 0) timeoutMs = parsed;
      index += 1;
    }
  }
  return { timeoutMs };
}

async function runPiListModels(timeoutMs: number): Promise<string> {
  return await new Promise((resolve, reject) => {
    const child = spawn(
      resolvePiCommand(),
      ["--no-tools", "--no-skills", "--no-extensions", "-e", "npm:pi-free@2.0.2", "--list-models"],
      {
        cwd: process.cwd(),
        env: process.env,
        windowsHide: true,
        stdio: ["ignore", "pipe", "pipe"],
        shell: false,
      }
    );

    let stdout = "";
    let stderr = "";
    let timedOut = false;
    const timeout = setTimeout(() => {
      timedOut = true;
      terminateProcessTree(child);
    }, timeoutMs);

    child.stdout?.on("data", (chunk: string | Buffer) => {
      stdout += String(chunk);
    });
    child.stderr?.on("data", (chunk: string | Buffer) => {
      stderr += String(chunk);
    });

    child.on("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });

    child.on("close", (code) => {
      clearTimeout(timeout);
      if (timedOut) {
        reject(new Error(`timed out after ${timeoutMs}ms`));
        return;
      }
      if ((code ?? 1) !== 0) {
        reject(new Error(stderr.trim() || stdout.trim() || "pi --list-models failed"));
        return;
      }
      resolve(stdout);
    });
  });
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  console.log("Discovering pi-free candidate models...");
  const output = await runPiListModels(args.timeoutMs);
  const models = parsePiListModelsOutput(output);
  const file = buildPiFreeAllModelsFile(models);
  writePiFreeAllModelsFile(file);
  console.log(`Wrote ${file.model_count} model(s) to all-models.json.`);
}

const isDirectCliEntry = process.argv[1] ? pathToFileURL(process.argv[1]).href === import.meta.url : false;

if (isDirectCliEntry) {
  void main().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
    process.exit(1);
  });
}
