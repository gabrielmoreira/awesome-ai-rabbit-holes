import { fileURLToPath } from "node:url";
import { PI_FREE_TASK_NAME, runMiseTask } from "../support/runner.ts";
import { parsePiFreeModelSpec, resolvePiFreeOrderedModels } from "./models.ts";

const DEFAULT_PROMPT = "Reply with exactly HI.";
const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_LIMIT = 10;

export type PiFreeProbeResult = {
  spec: string;
  provider: string;
  ok: boolean;
  elapsed_ms: number;
  error_type: string | null;
  error_message: string | null;
  output_excerpt: string | null;
};

export type PiFreeDoctorReport = {
  attempted: number;
  succeeded: number;
  failed: number;
  first_working_model: string | null;
  results: PiFreeProbeResult[];
};

type DoctorArgs = {
  prompt: string;
  timeoutMs: number;
  limit: number;
};

function parseArgs(argv: string[]): DoctorArgs {
  let prompt = DEFAULT_PROMPT;
  let timeoutMs = DEFAULT_TIMEOUT_MS;
  let limit = DEFAULT_LIMIT;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];
    if (arg === "--prompt" && next) {
      prompt = next;
      index += 1;
      continue;
    }
    if (arg === "--timeout-ms" && next) {
      const parsed = Number.parseInt(next, 10);
      if (Number.isFinite(parsed) && parsed > 0) timeoutMs = parsed;
      index += 1;
      continue;
    }
    if (arg === "--limit" && next) {
      const parsed = Number.parseInt(next, 10);
      if (Number.isFinite(parsed) && parsed > 0) limit = parsed;
      index += 1;
      continue;
    }
  }

  return { prompt, timeoutMs, limit };
}

export function selectPiFreeDoctorTargets(orderedModels: string[], limit: number): string[] {
  const safeLimit = Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : orderedModels.length;
  return orderedModels.slice(0, safeLimit);
}

export function classifyPiFreeProbeError(message: string): string {
  const normalized = message.toLowerCase();
  if (normalized.includes("timed out")) return "timeout";
  if (
    normalized.includes("rate limit") ||
    normalized.includes("too many requests") ||
    normalized.includes("quota") ||
    normalized.includes("credits") ||
    normalized.includes("402") ||
    normalized.includes("429")
  ) {
    return "quota";
  }
  if (normalized.includes("requires a subscription") || normalized.includes("upgrade for access")) {
    return "subscription";
  }
  if (normalized.includes("no route matched") || normalized.includes("404") || normalized.includes("model not found")) {
    return "not_found";
  }
  if (
    normalized.includes("permission") ||
    normalized.includes("unauthorized") ||
    normalized.includes("forbidden") ||
    normalized.includes("401") ||
    normalized.includes("403")
  ) {
    return "auth";
  }
  if (normalized.includes("empty output")) return "empty_output";
  return "unknown";
}

export function buildPiFreeDoctorReport(results: PiFreeProbeResult[]): PiFreeDoctorReport {
  return {
    attempted: results.length,
    succeeded: results.filter((result) => result.ok).length,
    failed: results.filter((result) => !result.ok).length,
    first_working_model: results.find((result) => result.ok)?.spec ?? null,
    results,
  };
}

function summarizeResult(result: PiFreeProbeResult): string {
  if (result.ok) {
    return `OK  | ${result.elapsed_ms}ms | ${result.spec} | ${result.output_excerpt ?? "(no excerpt)"}`;
  }
  return `ERR | ${result.elapsed_ms}ms | ${result.spec} | ${result.error_type ?? "unknown"} | ${result.error_message ?? "no details"}`;
}

async function probeModel(spec: string, prompt: string, timeoutMs: number): Promise<PiFreeProbeResult> {
  const startedAt = Date.now();
  const provider = parsePiFreeModelSpec(spec)?.provider ?? "unknown";

  try {
    const output = await runMiseTask(PI_FREE_TASK_NAME, ["--stdin", "--model", spec], {
      stdinText: prompt,
      timeoutMs,
    });
    const excerpt = output.trim().replace(/\s+/g, " ").slice(0, 120) || null;
    return {
      spec,
      provider,
      ok: true,
      elapsed_ms: Date.now() - startedAt,
      error_type: null,
      error_message: null,
      output_excerpt: excerpt,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      spec,
      provider,
      ok: false,
      elapsed_ms: Date.now() - startedAt,
      error_type: classifyPiFreeProbeError(message),
      error_message: message,
      output_excerpt: null,
    };
  }
}

export async function runPiFreeDoctor(argv: string[] = process.argv.slice(2)): Promise<void> {
  const args = parseArgs(argv);
  const orderedModels = resolvePiFreeOrderedModels(process.env);
  if (orderedModels.length === 0) {
    throw new Error("No authenticated pi-free models are configured in the static fallback list.");
  }

  const targets = selectPiFreeDoctorTargets(orderedModels, args.limit);
  console.log(`Probing ${targets.length}/${orderedModels.length} configured pi-free model(s) from the static fallback order...`);

  const results: PiFreeProbeResult[] = [];
  for (const spec of targets) {
    const result = await probeModel(spec, args.prompt, args.timeoutMs);
    results.push(result);
    console.log(summarizeResult(result));
  }

  const report = buildPiFreeDoctorReport(results);
  console.log(
    `doctor summary: attempted=${report.attempted} succeeded=${report.succeeded} failed=${report.failed} first=${report.first_working_model ?? "(none)"}`
  );

  if (!report.first_working_model) {
    throw new Error("No probed pi-free model succeeded.");
  }
}

const isDirectCliEntry = process.argv[1] ? process.argv[1] === fileURLToPath(import.meta.url) : false;

if (isDirectCliEntry) {
  runPiFreeDoctor().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}