import { spawn, type ChildProcess } from "node:child_process";
import { mapWithConcurrency } from "../support/async.ts";
import {
  comparePiFreeRankedResults,
  loadPiFreeAllModelsFile,
  loadPiFreeIntelligenceFile,
  loadPiFreeRankedModelsFile,
  matchPiFreeIntelligenceRecord,
  orderPiFreeAllModels,
  selectPiFreeProbeCandidates,
  type PiFreeAllModel,
  type PiFreeRankedModelResult,
  writePiFreeRankedModelsFile,
} from "./models.ts";

const DEFAULT_PROMPT = "Reply with exactly HI.";
const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_LIMIT = Number.POSITIVE_INFINITY;
const DEFAULT_CONCURRENCY = 4;

type RankArgs = {
  prompt: string;
  timeoutMs: number;
  limit: number;
  concurrency: number;
};

function resolvePiCommand(): string {
  return process.platform === "win32" ? "pi.exe" : "pi";
}

function parseArgs(argv: string[]): RankArgs {
  let prompt = DEFAULT_PROMPT;
  let timeoutMs = DEFAULT_TIMEOUT_MS;
  let limit = DEFAULT_LIMIT;
  let concurrency = DEFAULT_CONCURRENCY;

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
    if (arg === "--concurrency" && next) {
      const parsed = Number.parseInt(next, 10);
      if (Number.isFinite(parsed) && parsed > 0) concurrency = parsed;
      index += 1;
      continue;
    }
  }

  return { prompt, timeoutMs, limit, concurrency };
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

async function runPiCommand(args: string[], stdinText: string | null, timeoutMs: number): Promise<string> {
  return await new Promise((resolve, reject) => {
    const child = spawn(resolvePiCommand(), args, {
      cwd: process.cwd(),
      env: process.env,
      windowsHide: true,
      stdio: ["pipe", "pipe", "pipe"],
      shell: false,
    });

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

    if (stdinText == null) {
      child.stdin?.end();
    } else {
      child.stdin?.end(stdinText);
    }

    child.on("close", (code) => {
      clearTimeout(timeout);
      if (timedOut) {
        reject(new Error(`timed out after ${timeoutMs}ms`));
        return;
      }
      if ((code ?? 1) !== 0) {
        const detail = [stderr.trim(), stdout.trim()].find((value) => value.length > 0) ?? "pi command failed";
        reject(new Error(detail));
        return;
      }
      resolve(stdout);
    });
  });
}

function classifyProbeError(message: string): string {
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
  if (normalized.includes("unexpected message role") || normalized.includes("reasoning_effort")) {
    return "request_shape";
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

function summarizeResult(result: PiFreeRankedModelResult): string {
  if (result.ok) {
    return `OK  | ${result.elapsed_ms}ms | ${result.spec} | IQ ${result.artificial_analysis_intelligence_index ?? "?"} | ${result.output_excerpt ?? "(no excerpt)"}`;
  }
  return `ERR | ${result.elapsed_ms}ms | ${result.spec} | ${result.error_type ?? "unknown"} | IQ ${result.artificial_analysis_intelligence_index ?? "?"} | ${result.error_message ?? "no details"}`;
}

async function probeModel(
  model: PiFreeAllModel,
  intelligenceFile: ReturnType<typeof loadPiFreeIntelligenceFile>,
  prompt: string,
  timeoutMs: number,
): Promise<PiFreeRankedModelResult> {
  const startedAt = Date.now();
  const intelligence = matchPiFreeIntelligenceRecord(model.spec, intelligenceFile);
  try {
    const output = await runPiCommand(
      [
        "--no-tools",
        "--no-skills",
        "--no-extensions",
        "-e",
        "npm:pi-free@2.0.2",
        "--model",
        model.spec,
        "--print",
        prompt,
        "--no-session",
      ],
      null,
      timeoutMs,
    );
    const excerpt = output.trim().replace(/\s+/g, " ").slice(0, 120) || null;
    return {
      spec: model.spec,
      provider: model.provider,
      model_id: model.model_id,
      ok: true,
      elapsed_ms: Date.now() - startedAt,
      error_type: null,
      error_message: null,
      output_excerpt: excerpt,
      intelligence_record_id: intelligence?.id ?? null,
      artificial_analysis_intelligence_index: intelligence?.artificial_analysis_intelligence_index ?? null,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      spec: model.spec,
      provider: model.provider,
      model_id: model.model_id,
      ok: false,
      elapsed_ms: Date.now() - startedAt,
      error_type: classifyProbeError(message),
      error_message: message,
      output_excerpt: null,
      intelligence_record_id: intelligence?.id ?? null,
      artificial_analysis_intelligence_index: intelligence?.artificial_analysis_intelligence_index ?? null,
    };
  }
}

function refreshRankedResultIntelligence(
  result: PiFreeRankedModelResult,
  intelligenceFile: ReturnType<typeof loadPiFreeIntelligenceFile>,
): PiFreeRankedModelResult {
  const intelligence = matchPiFreeIntelligenceRecord(result.spec, intelligenceFile);
  return {
    ...result,
    intelligence_record_id: intelligence?.id ?? null,
    artificial_analysis_intelligence_index: intelligence?.artificial_analysis_intelligence_index ?? null,
  };
}

export async function runPiFreeRankModels(argv: string[] = process.argv.slice(2)): Promise<void> {
  const args = parseArgs(argv);
  const allModelsFile = loadPiFreeAllModelsFile();
  if (!allModelsFile || allModelsFile.models.length === 0) {
    throw new Error("all-models.json is missing or empty. Run `mise run pi:free:all-models` first.");
  }
  const intelligenceFile = loadPiFreeIntelligenceFile();
  if (!intelligenceFile || intelligenceFile.records.length === 0) {
    throw new Error("catalog/pi-free/intelligence.json is missing or empty. Run `mise run pi:free:intelligence` first.");
  }

  const previousRanked = loadPiFreeRankedModelsFile();
  const reusablePreviousResults =
    previousRanked && previousRanked.prompt === args.prompt && previousRanked.timeout_ms === args.timeoutMs
      ? previousRanked.results ?? []
      : [];
  const probePool = orderPiFreeAllModels(allModelsFile.models, intelligenceFile);
  const candidates = selectPiFreeProbeCandidates(probePool, args.limit);
  console.log(`Loaded ${allModelsFile.models.length} model(s) from all-models.json`);
  console.log(`Loaded ${intelligenceFile.records.length} intelligence record(s)`);
  console.log(`Models selected for probing: ${candidates.length}`);
  console.log(`Probe concurrency: ${args.concurrency}`);

  const results = await mapWithConcurrency(candidates, args.concurrency, async (candidate) => {
    const result = await probeModel(candidate, intelligenceFile, args.prompt, args.timeoutMs);
    console.log(summarizeResult(result));
    return result;
  });

  const currentSpecs = new Set(allModelsFile.models.map((model) => model.spec));
  const mergedResultsBySpec = new Map(
    reusablePreviousResults
      .filter((result) => currentSpecs.has(result.spec))
      .map((result) => [result.spec, refreshRankedResultIntelligence(result, intelligenceFile)] as const),
  );
  for (const result of results) mergedResultsBySpec.set(result.spec, result);

  const mergedResults = [...mergedResultsBySpec.values()].sort(comparePiFreeRankedResults);
  const knownResultsBySpec = new Map(mergedResults.map((result) => [result.spec, result] as const));
  const successfulOrderedModels = mergedResults.filter((result) => result.ok).map((result) => result.spec);
  const fallbackTail = probePool
    .map((model) => model.spec)
    .filter((spec) => !knownResultsBySpec.has(spec));
  const knownFailureTail = probePool
    .map((model) => model.spec)
    .filter((spec) => knownResultsBySpec.get(spec)?.ok === false);
  const orderedModels = [...successfulOrderedModels, ...fallbackTail, ...knownFailureTail];

  writePiFreeRankedModelsFile({
    generated_at: new Date().toISOString(),
    prompt: args.prompt,
    timeout_ms: args.timeoutMs,
    providers_considered: Array.from(new Set(allModelsFile.models.map((candidate) => candidate.provider))),
    ordered_models: orderedModels,
    results: mergedResults,
  });

  const successCount = results.filter((result) => result.ok).length;
  const failureCount = results.length - successCount;
  console.log(`Ranked models written with ${successCount} success(es) and ${failureCount} failure(s).`);
}
