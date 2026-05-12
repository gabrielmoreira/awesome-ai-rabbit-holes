import * as fs from "node:fs";
import { parseAIInsightResponse } from "./categorize-prompt.ts";
import { loadCatalogItems, loadCategories } from "./data.ts";
import { buildCatalogInsightPrompt } from "./insight-context.ts";
import { runCatalogLlmPrompt, resolveCatalogLlmTimeoutMs } from "./llm-gateway.ts";
import { CACHE_DIR, CONFIG_DIR } from "../support/paths.ts";
import { readYamlIfExists } from "../support/yaml.ts";
import { isPiFreeRetryableError, PI_FREE_PRIMARY_MODEL } from "../pi/models.ts";
import type { CatalogItem } from "./types.ts";
import { applyAIInsights } from "./categorize.ts";

const CONFIG_CATEGORY_EVALS_PATH = `${CONFIG_DIR}/category-evals.yml`;
const EVALS_CACHE_DIR = `${CACHE_DIR}/evals`;
const LATEST_RESULTS_PATH = `${EVALS_CACHE_DIR}/catalog-prompt-evals.latest.json`;

export const DEFAULT_CATEGORY_EVAL_MODEL = PI_FREE_PRIMARY_MODEL;

export type CategoryEvalSuite = "prompt-core" | "prompt-holdout" | "pipeline-redflags";
export type CategoryEvalFixScope = "prompt" | "mixed" | "deterministic";
export type CategoryEvalCaseType = "positive" | "negative" | "adversarial";

export type CategoryEvalCase = {
  id: string;
  item_id: string;
  suite: CategoryEvalSuite;
  fix_scope: CategoryEvalFixScope;
  case_type: CategoryEvalCaseType;
  expected: {
    include: boolean;
    primary_category: string | null;
    section: string | null;
  };
  acceptable_alternatives?: string[];
  hard_negatives?: string[];
  notes?: string;
};

export type CategoryEvalArgs = {
  models: string[];
  suites: CategoryEvalSuite[];
  caseIds: string[];
  limit: number | null;
  timeoutMs: number | null;
};

export type CategoryEvalDecision = {
  include: boolean;
  primary_category: string | null;
  section: string | null;
};

export type CategoryEvalGrade = {
  pass: boolean;
  exactMatch: boolean;
  includeMatch: boolean;
  categoryMatch: boolean;
  sectionMatch: boolean;
  usedAcceptableAlternative: boolean;
  hardFailure: boolean;
  failureReasons: string[];
};

export type CategoryEvalGradeSummary = {
  total: number;
  passed: number;
  exactMatches: number;
  acceptableAlternativePasses: number;
  hardFailures: number;
};

export type CategoryEvalErrorKind = "infra_error" | "invalid_response" | "execution_error";

type PromptEvalCaseResult = {
  caseId: string;
  itemId: string;
  suite: CategoryEvalSuite;
  expected: CategoryEvalCase["expected"];
  model: string;
  durationMs: number;
  prompt: string;
  rawResponse: string | null;
  decision: CategoryEvalDecision | null;
  grade: CategoryEvalGrade | null;
  errorKind: CategoryEvalErrorKind | null;
  errorMessage: string | null;
};

type PromptEvalRunSummary = CategoryEvalGradeSummary & {
  infraErrors: number;
  invalidResponses: number;
  executionErrors: number;
};

function isCategoryEvalSuite(value: string): value is CategoryEvalSuite {
  return value === "prompt-core" || value === "prompt-holdout" || value === "pipeline-redflags";
}

function isCategoryEvalFixScope(value: string): value is CategoryEvalFixScope {
  return value === "prompt" || value === "mixed" || value === "deterministic";
}

function isCategoryEvalCaseType(value: string): value is CategoryEvalCaseType {
  return value === "positive" || value === "negative" || value === "adversarial";
}

function unquoteCliValue(value: string): string {
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  return value;
}

function requireNext(argv: string[], index: number, flag: string): string {
  const next = argv[index + 1]?.trim();
  if (!next) throw new Error(`Missing value for ${flag}`);
  return unquoteCliValue(next);
}

export function parseCatalogEvalsArgs(argv: string[]): CategoryEvalArgs {
  const models: string[] = [];
  const suites: CategoryEvalSuite[] = [];
  const caseIds: string[] = [];
  let limit: number | null = null;
  let timeoutMs: number | null = null;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg) continue;

    if (arg === "--model") {
      models.push(requireNext(argv, index, arg));
      index += 1;
      continue;
    }
    if (arg === "--suite") {
      const suite = requireNext(argv, index, arg);
      if (!isCategoryEvalSuite(suite)) throw new Error(`Unknown eval suite: ${suite}`);
      suites.push(suite);
      index += 1;
      continue;
    }
    if (arg === "--case") {
      caseIds.push(requireNext(argv, index, arg));
      index += 1;
      continue;
    }
    if (arg === "--limit") {
      const value = Number.parseInt(requireNext(argv, index, arg), 10);
      if (!Number.isFinite(value) || value <= 0) throw new Error(`Invalid --limit value: ${argv[index + 1]}`);
      limit = value;
      index += 1;
      continue;
    }
    if (arg === "--timeout-ms") {
      const value = Number.parseInt(requireNext(argv, index, arg), 10);
      if (!Number.isFinite(value) || value <= 0) throw new Error(`Invalid --timeout-ms value: ${argv[index + 1]}`);
      timeoutMs = value;
      index += 1;
      continue;
    }
    throw new Error(`Unknown eval argument: ${arg}`);
  }

  return {
    models: models.length > 0 ? [...new Set(models)] : [DEFAULT_CATEGORY_EVAL_MODEL],
    suites: suites.length > 0 ? [...new Set(suites)] : [],
    caseIds: caseIds.length > 0 ? [...new Set(caseIds)] : [],
    limit,
    timeoutMs,
  };
}

function normalizeCategoryEvalCase(raw: unknown, index: number): CategoryEvalCase {
  const entry = raw as Record<string, unknown>;
  const id = typeof entry.id === "string" ? entry.id.trim() : "";
  const itemId = typeof entry.item_id === "string" ? entry.item_id.trim() : "";
  const suite = typeof entry.suite === "string" ? entry.suite.trim() : "";
  const fixScope = typeof entry.fix_scope === "string" ? entry.fix_scope.trim() : "";
  const caseType = typeof entry.case_type === "string" ? entry.case_type.trim() : "";
  const expected = (entry.expected ?? {}) as Record<string, unknown>;

  if (!id) throw new Error(`Validation error: ${CONFIG_CATEGORY_EVALS_PATH} cases[${index}] is missing id`);
  if (!itemId) throw new Error(`Validation error: ${CONFIG_CATEGORY_EVALS_PATH} cases[${index}] is missing item_id`);
  if (!isCategoryEvalSuite(suite)) throw new Error(`Validation error: ${CONFIG_CATEGORY_EVALS_PATH} cases[${index}] has invalid suite`);
  if (!isCategoryEvalFixScope(fixScope)) throw new Error(`Validation error: ${CONFIG_CATEGORY_EVALS_PATH} cases[${index}] has invalid fix_scope`);
  if (!isCategoryEvalCaseType(caseType)) throw new Error(`Validation error: ${CONFIG_CATEGORY_EVALS_PATH} cases[${index}] has invalid case_type`);
  if (typeof expected.include !== "boolean") {
    throw new Error(`Validation error: ${CONFIG_CATEGORY_EVALS_PATH} cases[${index}] expected.include must be boolean`);
  }
  if (!(typeof expected.primary_category === "string" || expected.primary_category === null)) {
    throw new Error(`Validation error: ${CONFIG_CATEGORY_EVALS_PATH} cases[${index}] expected.primary_category must be string|null`);
  }
  if (!(typeof expected.section === "string" || expected.section === null)) {
    throw new Error(`Validation error: ${CONFIG_CATEGORY_EVALS_PATH} cases[${index}] expected.section must be string|null`);
  }

  return {
    id,
    item_id: itemId,
    suite,
    fix_scope: fixScope,
    case_type: caseType,
    expected: {
      include: expected.include,
      primary_category: expected.primary_category as string | null,
      section: expected.section as string | null,
    },
    acceptable_alternatives: Array.isArray(entry.acceptable_alternatives)
      ? entry.acceptable_alternatives.map((value) => String(value).trim()).filter((value) => value.length > 0)
      : [],
    hard_negatives: Array.isArray(entry.hard_negatives)
      ? entry.hard_negatives.map((value) => String(value).trim()).filter((value) => value.length > 0)
      : [],
    notes: typeof entry.notes === "string" ? entry.notes : undefined,
  };
}

export function loadCategoryEvalCases(filePath: string = CONFIG_CATEGORY_EVALS_PATH): CategoryEvalCase[] {
  const raw = readYamlIfExists<unknown>(filePath, null);
  if (!raw) return [];
  if (!Array.isArray(raw)) {
    throw new Error(`Validation error: expected ${filePath} to contain a YAML list of eval cases.`);
  }
  return raw.map((entry, index) => normalizeCategoryEvalCase(entry, index));
}

function selectCategoryEvalCases(cases: CategoryEvalCase[], args: CategoryEvalArgs): CategoryEvalCase[] {
  const selected = cases.filter((testCase) =>
    (args.suites.length === 0 || args.suites.includes(testCase.suite))
    && (args.caseIds.length === 0 || args.caseIds.includes(testCase.id))
  );
  return args.limit == null ? selected : selected.slice(0, args.limit);
}

export function gradeCategoryEvalDecision(testCase: CategoryEvalCase, decision: CategoryEvalDecision): CategoryEvalGrade {
  const acceptableAlternatives = new Set(testCase.acceptable_alternatives ?? []);
  const hardNegatives = new Set(testCase.hard_negatives ?? []);
  const includeMatch = decision.include === testCase.expected.include;
  const exactCategoryMatch = decision.primary_category === testCase.expected.primary_category;
  const usedAcceptableAlternative = !exactCategoryMatch && decision.primary_category != null && acceptableAlternatives.has(decision.primary_category);
  const categoryMatch = exactCategoryMatch || usedAcceptableAlternative;
  const sectionMatch = exactCategoryMatch && decision.section === testCase.expected.section;

  const failureReasons: string[] = [];
  if (!includeMatch) failureReasons.push(`include mismatch: expected ${testCase.expected.include}, got ${decision.include}`);
  if (testCase.expected.include && !categoryMatch) {
    failureReasons.push(`category mismatch: expected ${testCase.expected.primary_category}, got ${decision.primary_category}`);
  }
  if (testCase.expected.include && exactCategoryMatch && !sectionMatch) {
    failureReasons.push(`section mismatch: expected ${testCase.expected.section}, got ${decision.section}`);
  }
  if (!testCase.expected.include && decision.include) {
    failureReasons.push(`forced include for negative case: got ${decision.primary_category}`);
  }
  if (decision.primary_category != null && hardNegatives.has(decision.primary_category)) {
    failureReasons.push(`hard negative category selected: ${decision.primary_category}`);
  }

  const hardFailure = failureReasons.some((reason) => /hard negative|forced include/i.test(reason));
  const pass = failureReasons.length === 0;
  const exactMatch = pass && !usedAcceptableAlternative;

  return {
    pass,
    exactMatch,
    includeMatch,
    categoryMatch,
    sectionMatch,
    usedAcceptableAlternative,
    hardFailure,
    failureReasons,
  };
}

export function summarizeCategoryEvalGrades(grades: CategoryEvalGrade[]): CategoryEvalGradeSummary {
  return {
    total: grades.length,
    passed: grades.filter((grade) => grade.pass).length,
    exactMatches: grades.filter((grade) => grade.exactMatch).length,
    acceptableAlternativePasses: grades.filter((grade) => grade.pass && grade.usedAcceptableAlternative).length,
    hardFailures: grades.filter((grade) => grade.hardFailure).length,
  };
}

function summarizePromptEvalRun(results: PromptEvalCaseResult[]): PromptEvalRunSummary {
  const grades = results.flatMap((result) => (result.grade ? [result.grade] : []));
  const summary = summarizeCategoryEvalGrades(grades);
  return {
    ...summary,
    total: results.length,
    infraErrors: results.filter((result) => result.errorKind === "infra_error").length,
    invalidResponses: results.filter((result) => result.errorKind === "invalid_response").length,
    executionErrors: results.filter((result) => result.errorKind === "execution_error").length,
  };
}

export function classifyCategoryEvalErrorKind(message: string): CategoryEvalErrorKind {
  const trimmed = message.trim();
  if (
    trimmed === "{"
    || trimmed === "```"
    || /Invalid AI response format|No JSON found|Missing required field|Invalid confidence value|Included responses must|Excluded responses must/i.test(message)
  ) {
    return "invalid_response";
  }
  if (isPiFreeRetryableError(message) || /timed out|aborted/i.test(message)) {
    return "infra_error";
  }
  return "execution_error";
}

async function runSinglePromptEvalCase(
  testCase: CategoryEvalCase,
  item: CatalogItem,
  model: string,
  categories: ReturnType<typeof loadCategories>,
  timeoutMs: number | null,
): Promise<PromptEvalCaseResult> {
  const prompt = buildCatalogInsightPrompt(item, categories);

  const startedAt = Date.now();
  try {
    const rawResponse = await runCatalogLlmPrompt(prompt, {
      model,
      timeoutMs: timeoutMs ?? resolveCatalogLlmTimeoutMs(),
    });
    const parsed = parseAIInsightResponse(rawResponse);
    const applied = applyAIInsights(item, parsed, categories, { forceCategory: true });
    const decision: CategoryEvalDecision = {
      include: applied.curation.status === "included",
      primary_category: applied.placement.primary_category,
      section: applied.placement.section,
    };
    return {
      caseId: testCase.id,
      itemId: item.id,
      suite: testCase.suite,
      expected: testCase.expected,
      model,
      durationMs: Date.now() - startedAt,
      prompt,
      rawResponse,
      decision,
      grade: gradeCategoryEvalDecision(testCase, decision),
      errorKind: null,
      errorMessage: null,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const errorKind = classifyCategoryEvalErrorKind(message);
    return {
      caseId: testCase.id,
      itemId: item.id,
      suite: testCase.suite,
      expected: testCase.expected,
      model,
      durationMs: Date.now() - startedAt,
      prompt,
      rawResponse: null,
      decision: null,
      grade: null,
      errorKind,
      errorMessage: message,
    };
  }
}

function printRunSummary(model: string, summary: PromptEvalRunSummary, results: PromptEvalCaseResult[]): void {
  console.log(
    `evals | model=${model} | pass=${summary.passed}/${summary.total} | exact=${summary.exactMatches} | acceptable=${summary.acceptableAlternativePasses} | hard=${summary.hardFailures} | invalid=${summary.invalidResponses} | infra=${summary.infraErrors} | exec=${summary.executionErrors}`,
  );

  for (const result of results) {
    if (result.errorKind) {
      console.log(`  ERR  | ${result.caseId} | ${result.errorKind} | ${result.errorMessage}`);
      continue;
    }
    if (!result.grade?.pass) {
      console.log(
        `  FAIL | ${result.caseId} | expected=${JSON.stringify(result.expected)} | got=${JSON.stringify(result.decision)} | ${result.grade?.failureReasons.join("; ")}`,
      );
    }
  }
}

function writeEvalResults(results: unknown): string {
  fs.mkdirSync(EVALS_CACHE_DIR, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const timestampedPath = `${EVALS_CACHE_DIR}/catalog-prompt-evals.${timestamp}.json`;
  const payload = JSON.stringify(results, null, 2);
  fs.writeFileSync(LATEST_RESULTS_PATH, payload, "utf8");
  fs.writeFileSync(timestampedPath, payload, "utf8");
  return timestampedPath;
}

export async function runEvals(argv: string[] = []): Promise<void> {
  const args = parseCatalogEvalsArgs(argv);
  const categories = loadCategories();
  const items = loadCatalogItems();
  const itemsById = new Map(items.map((item) => [item.id, item] as const));
  const allCases = loadCategoryEvalCases();
  const selectedCases = selectCategoryEvalCases(allCases, args);

  if (selectedCases.length === 0) {
    console.log("No eval cases matched the requested filters.");
    return;
  }

  for (const testCase of selectedCases) {
    if (!itemsById.has(testCase.item_id)) {
      throw new Error(`Eval case ${testCase.id} references missing catalog item: ${testCase.item_id}`);
    }
  }

  console.log(
    `Running ${selectedCases.length} eval case(s) across ${args.models.length} model(s) using current on-disk fetched inputs.`,
  );

  const runOutputs: Array<{
    model: string;
    summary: PromptEvalRunSummary;
    results: PromptEvalCaseResult[];
  }> = [];

  for (const model of args.models) {
    const results: PromptEvalCaseResult[] = [];
    for (const testCase of selectedCases) {
      const item = itemsById.get(testCase.item_id);
      if (!item) continue;
      results.push(await runSinglePromptEvalCase(testCase, item, model, categories, args.timeoutMs));
    }
    const summary = summarizePromptEvalRun(results);
    printRunSummary(model, summary, results);
    runOutputs.push({ model, summary, results });
  }

  const writtenPath = writeEvalResults({
    ran_at: new Date().toISOString(),
    config_path: CONFIG_CATEGORY_EVALS_PATH,
    case_count: selectedCases.length,
    selected_case_ids: selectedCases.map((testCase) => testCase.id),
    models: args.models,
    timeout_ms: args.timeoutMs ?? resolveCatalogLlmTimeoutMs(),
    outputs: runOutputs,
  });

  console.log(`Saved eval results to ${writtenPath}`);
}
