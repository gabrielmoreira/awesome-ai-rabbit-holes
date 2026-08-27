import { fileURLToPath } from "node:url";
import { loadCatalogItems, loadCategories } from "../catalog/data.ts";
import { loadCategoryEvalCases, runSinglePromptEvalCase, type PromptEvalCaseResult } from "../catalog/evals.ts";
import { resolvePiFreePoolModels } from "./discover.ts";
import { hasPiFreeProviderAuth, parsePiFreeModelSpec, type PiFreeEnvValues } from "./models.ts";
import { groupPiFreeFamilies } from "./pool.ts";
import { computePiFreeFamilyScore, PI_FREE_SCORES_PATH, PI_FREE_SCORES_VERSION, writePiFreeScores, type PiFreeFamilyScore } from "./scores.ts";

/** CLI options for `llm:rank`. */
export type RankArgs = {
  /** Family keys or model specs to measure; defaults to every family in the resolved pool. */
  families?: string[];
  /** Cap on eval cases per family (first N loaded); defaults to all loaded cases. */
  limitCases?: number;
  timeoutMs?: number | null;
  scoresPath?: string;
};

function requireNext(argv: string[], index: number, flag: string): string {
  const next = argv[index + 1]?.trim();
  if (!next) throw new Error(`Missing value for ${flag}`);
  return next;
}

export function parseRankArgs(argv: string[]): RankArgs {
  const args: RankArgs = {};
  for (let i = 0; i < argv.length; i += 1) {
    const flag = argv[i];
    if (flag === "--family") {
      args.families = [...(args.families ?? []), requireNext(argv, i, "--family")];
      i += 1;
    } else if (flag === "--limit-cases") {
      args.limitCases = Number.parseInt(requireNext(argv, i, "--limit-cases"), 10);
      i += 1;
    } else if (flag === "--timeout-ms") {
      args.timeoutMs = Number.parseInt(requireNext(argv, i, "--timeout-ms"), 10);
      i += 1;
    } else if (flag === "--scores-path") {
      args.scoresPath = requireNext(argv, i, "--scores-path");
      i += 1;
    } else {
      throw new Error(`Unknown rank argument: ${flag}`);
    }
  }
  return args;
}

/**
 * Measure each pi-free model family on catalog prompt-eval cases and persist a
 * capability score per family. One representative replica (first with configured provider
 * auth) is measured per family; replicas are interchangeable so one measurement covers all.
 * The scores file is fully replaced by this run's measurements, so a partial `--family`
 * run intentionally narrows the persisted set.
 */
export async function runPiFreeRank(args: RankArgs = {}, envValues: PiFreeEnvValues = process.env): Promise<void> {
  const poolModels = resolvePiFreePoolModels(envValues);
  let families = groupPiFreeFamilies(poolModels);
  if (args.families && args.families.length > 0) {
    const wanted = args.families;
    families = families.filter(
      (family) => wanted.some((w) => w === family.family || family.replicas.some((replica) => replica.spec === w)),
    );
  }
  if (families.length === 0) {
    throw new Error(
      args.families && args.families.length > 0
        ? `No pi-free families matched: ${args.families.join(", ")}`
        : "No pi-free models in the resolved pool; configure provider keys or run llm:discover.",
    );
  }

  const itemsById = new Map(loadCatalogItems().map((item) => [item.id, item] as const));
  const categories = loadCategories();
  let cases = loadCategoryEvalCases();
  if (args.limitCases !== undefined && args.limitCases > 0) cases = cases.slice(0, args.limitCases);
  if (cases.length === 0) throw new Error("No eval cases loaded; nothing to rank.");
  const scores: Record<string, PiFreeFamilyScore> = {};
  for (const family of families) {
    const representative = family.replicas.find((replica) => {
      const parsed = parsePiFreeModelSpec(replica.spec);
      return parsed !== null && hasPiFreeProviderAuth(parsed.provider, envValues);
    });
    if (!representative) {
      console.warn(`[pi-free:rank] ${family.family}: no configured provider auth; skipping`);
      continue;
    }

    const results: PromptEvalCaseResult[] = [];
    for (const testCase of cases) {
      const item = itemsById.get(testCase.item_id);
      if (!item) {
        console.warn(`[pi-free:rank] case ${testCase.id}: missing catalog item ${testCase.item_id}; skipping`);
        continue;
      }
      results.push(await runSinglePromptEvalCase(testCase, item, representative.spec, categories, args.timeoutMs ?? null));
    }

    const counts = {
      total: results.length,
      passed: results.filter((result) => result.grade?.pass === true).length,
      exactMatches: results.filter((result) => result.grade?.exactMatch === true).length,
      hardFailures: results.filter((result) => result.grade?.hardFailure === true).length,
      infraErrors: results.filter((result) => result.errorKind === "infra_error").length,
      invalidResponses: results.filter((result) => result.errorKind === "invalid_response").length,
      executionErrors: results.filter((result) => result.errorKind === "execution_error").length,
    };
    const score = computePiFreeFamilyScore(counts);
    if (!score) {
      console.warn(`[pi-free:rank] ${family.family}: not enough graded cases (${counts.total - counts.infraErrors}/${counts.total}); skipping`);
      continue;
    }
    scores[family.family] = score;
    console.log(
      `[pi-free:rank] ${family.family} | via=${representative.spec} | score=${score.score.toFixed(4)} | pass=${score.passed}/${score.gradedCases} | exact=${score.exactMatches} | hard=${score.hardFailures} | invalid=${score.invalidResponses} | infra=${score.infraErrors} | exec=${score.executionErrors}`,
    );
  }

  if (Object.keys(scores).length === 0) throw new Error("No family produced a usable score; nothing written.");
  const targetPath = writePiFreeScores(
    { version: PI_FREE_SCORES_VERSION, updatedAtMs: Date.now(), families: scores },
    args.scoresPath ?? PI_FREE_SCORES_PATH,
  );
  console.log(`[pi-free:rank] wrote ${Object.keys(scores).length} family score(s) to ${targetPath}`);
}

const isDirectCliEntry = process.argv[1] ? process.argv[1] === fileURLToPath(import.meta.url) : false;

if (isDirectCliEntry) {
  const main = async () => runPiFreeRank(parseRankArgs(process.argv.slice(2)));
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
