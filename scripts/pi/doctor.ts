import { fileURLToPath } from "node:url";
import { getModel } from "@mariozechner/pi-ai";
import { hasPiAiProviderAuth, resolvePiAiModelSpec, runPiFreeTextPrompt } from "./ai.ts";
import { parsePositivePiCliInteger, requirePiCliValue } from "./cli.ts";
import { parsePiFreeModelSpec, PI_FREE_MODEL_CYCLE } from "./models.ts";

const DEFAULT_PROMPT = "Reply with exactly HI.";
const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_LIMIT = 10;

export type PiFreeProbeResult = {
  spec: string;
  provider: string;
  status: "ok" | "failed" | "skipped";
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
  skipped: number;
  first_working_model: string | null;
  results: PiFreeProbeResult[];
};

type DoctorArgs = {
  prompt: string;
  timeoutMs: number;
  limit: number;
};

function normalizeDoctorLimit(limit: number, fallbackLimit: number): number {
  return Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : fallbackLimit;
}

export function parsePiFreeDoctorArgs(argv: string[]): DoctorArgs {
  let prompt = DEFAULT_PROMPT;
  let timeoutMs = DEFAULT_TIMEOUT_MS;
  let limit = DEFAULT_LIMIT;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--prompt") {
      prompt = requirePiCliValue(argv, index, arg);
      index += 1;
      continue;
    }
    if (arg === "--timeout-ms") {
      timeoutMs = parsePositivePiCliInteger(argv, index, arg);
      index += 1;
      continue;
    }
    if (arg === "--limit") {
      limit = parsePositivePiCliInteger(argv, index, arg);
      index += 1;
      continue;
    }
    throw new Error(`Unknown llm:doctor argument: ${arg}`);
  }

  return { prompt, timeoutMs, limit };
}

export function selectPiFreeDoctorTargets(
  orderedModels: string[],
  limit: number,
  canProbe: (spec: string) => boolean = () => true,
): string[] {
  const safeLimit = normalizeDoctorLimit(limit, orderedModels.length);
  return orderedModels.filter((spec) => canProbe(spec)).slice(0, safeLimit);
}

export function classifyPiFreeProbeError(message: string): string {
  const normalized = message.toLowerCase();
  if (normalized.includes("timed out")) return "timeout";
  if (
    normalized.includes("connection error") ||
    normalized.includes("network error") ||
    normalized.includes("fetch failed") ||
    normalized.includes("socket hang up") ||
    normalized.includes("econnreset") ||
    normalized.includes("econnrefused") ||
    normalized.includes("enotfound")
  ) {
    return "network";
  }
  if (normalized.includes("no longer available as a free model") || normalized.includes("transitioned to a paid model")) {
    return "not_free";
  }
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
  if (normalized.includes("reasoning is mandatory") || normalized.includes("cannot be disabled")) {
    return "unsupported_request";
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
    attempted: results.filter((result) => result.status !== "skipped").length,
    succeeded: results.filter((result) => result.ok).length,
    failed: results.filter((result) => result.status === "failed").length,
    skipped: results.filter((result) => result.status === "skipped").length,
    first_working_model: results.find((result) => result.ok)?.spec ?? null,
    results,
  };
}

export function getPiFreeDoctorFailure(report: PiFreeDoctorReport): string | null {
  if (report.first_working_model) return null;
  if (report.attempted === 0 && report.skipped > 0) {
    return "No runnable pi-free model is available in the current environment.";
  }
  return "No working pi-free model was found in the probed fallback set.";
}

function summarizeResult(result: PiFreeProbeResult): string {
  if (result.status === "skipped") {
    return `SKIP| ${result.elapsed_ms}ms | ${result.spec} | ${result.error_type ?? "unavailable"} | ${result.error_message ?? "not runnable in current environment"}`;
  }
  if (result.ok) {
    return `OK  | ${result.elapsed_ms}ms | ${result.spec} | ${result.output_excerpt ?? "(no excerpt)"}`;
  }
  return `ERR | ${result.elapsed_ms}ms | ${result.spec} | ${result.error_type ?? "unknown"} | ${result.error_message ?? "no details"}`;
}

function buildSkippedResult(spec: string, errorType: string, errorMessage: string): PiFreeProbeResult {
  return {
    spec,
    provider: parsePiFreeModelSpec(spec)?.provider ?? "unknown",
    status: "skipped",
    ok: false,
    elapsed_ms: 0,
    error_type: errorType,
    error_message: errorMessage,
    output_excerpt: null,
  };
}

async function probeModel(spec: string, prompt: string, timeoutMs: number): Promise<PiFreeProbeResult> {
  const startedAt = Date.now();
  const provider = parsePiFreeModelSpec(spec)?.provider ?? "unknown";

  try {
    const output = await runPiFreeTextPrompt(prompt, {
      model: spec,
      candidates: [spec],
      timeoutMs,
      allowFallback: false,
      rememberFailures: false,
    });
    const excerpt = output.text.trim().replace(/\s+/g, " ").slice(0, 120) || null;
    return {
      spec,
      provider,
      status: "ok",
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
      status: "failed",
      ok: false,
      elapsed_ms: Date.now() - startedAt,
      error_type: classifyPiFreeProbeError(message),
      error_message: message,
      output_excerpt: null,
    };
  }
}

function getProbeSkipResult(spec: string): PiFreeProbeResult | null {
  const resolved = resolvePiAiModelSpec(spec);
  if (!resolved) return buildSkippedResult(spec, "invalid_spec", "Invalid pi-free model spec.");
  if (!hasPiAiProviderAuth(resolved.provider)) {
    return buildSkippedResult(spec, "unavailable_env", `Provider ${resolved.provider} is unavailable in the current environment (missing credentials).`);
  }
  if (!getModel(resolved.provider as never, resolved.modelId as never)) {
    return buildSkippedResult(spec, "unavailable_runtime", `Model ${resolved.modelId} is not available through provider ${resolved.provider} in the current runtime.`);
  }
  return null;
}

export async function runPiFreeDoctor(argv: string[] = process.argv.slice(2)): Promise<void> {
  const args = parsePiFreeDoctorArgs(argv);
  const orderedModels = Array.from(new Set(PI_FREE_MODEL_CYCLE));
  if (orderedModels.length === 0) {
    throw new Error("No pi-free models are configured in the static fallback list.");
  }

  const safeLimit = normalizeDoctorLimit(args.limit, orderedModels.length);
  console.log(`Probing up to ${safeLimit} runnable pi-free model(s) from the static fallback order...`);

  const results: PiFreeProbeResult[] = [];
  let attempted = 0;
  for (const spec of orderedModels) {
    const skipped = getProbeSkipResult(spec);
    if (skipped) {
      results.push(skipped);
      console.log(summarizeResult(skipped));
      continue;
    }

    const result = await probeModel(spec, args.prompt, args.timeoutMs);
    results.push(result);
    console.log(summarizeResult(result));
    attempted += 1;
    if (attempted >= safeLimit) break;
  }

  const report = buildPiFreeDoctorReport(results);
  console.log(
    `doctor summary: attempted=${report.attempted} succeeded=${report.succeeded} failed=${report.failed} skipped=${report.skipped} first=${report.first_working_model ?? "(none)"}`,
  );

  const failure = getPiFreeDoctorFailure(report);
  if (failure) throw new Error(failure);
}

const isDirectCliEntry = process.argv[1] ? process.argv[1] === fileURLToPath(import.meta.url) : false;

if (isDirectCliEntry) {
  runPiFreeDoctor().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
