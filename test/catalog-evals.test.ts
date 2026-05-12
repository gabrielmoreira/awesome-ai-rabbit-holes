import { describe, expect, it } from "vitest";
import {
  classifyCategoryEvalErrorKind,
  DEFAULT_CATEGORY_EVAL_MODEL,
  gradeCategoryEvalDecision,
  parseCatalogEvalsArgs,
  summarizeCategoryEvalGrades,
  type CategoryEvalCase,
} from "../scripts/catalog/evals.js";

describe("catalog eval args", () => {
  it("uses explicit repeated models, suites, and case ids", () => {
    const args = parseCatalogEvalsArgs([
      "--model",
      "openrouter/qwen/qwen3-coder:free",
      "--model",
      "openrouter/google/gemma-4-31b-it:free",
      "--suite",
      "prompt-core",
      "--suite",
      "prompt-holdout",
      "--case",
      "coding-agents__opencode",
      "--case",
      "evals__agenta",
      "--limit",
      "5",
      "--timeout-ms",
      "15000",
    ]);

    expect(args.models).toEqual([
      "openrouter/qwen/qwen3-coder:free",
      "openrouter/google/gemma-4-31b-it:free",
    ]);
    expect(args.suites).toEqual(["prompt-core", "prompt-holdout"]);
    expect(args.caseIds).toEqual(["coding-agents__opencode", "evals__agenta"]);
    expect(args.limit).toBe(5);
    expect(args.timeoutMs).toBe(15_000);
  });

  it("strips surrounding quotes added by mise json_encode usage", () => {
    const args = parseCatalogEvalsArgs([
      "--model",
      '"openrouter/qwen/qwen3-coder:free"',
      "--suite",
      '"prompt-core"',
      "--case",
      '"coding-agents__opencode"',
    ]);

    expect(args.models).toEqual(["openrouter/qwen/qwen3-coder:free"]);
    expect(args.suites).toEqual(["prompt-core"]);
    expect(args.caseIds).toEqual(["coding-agents__opencode"]);
  });

  it("treats partial json starts as invalid prompt output, not infra", () => {
    expect(classifyCategoryEvalErrorKind("{")).toBe("invalid_response");
    expect(classifyCategoryEvalErrorKind("```" )).toBe("invalid_response");
    expect(classifyCategoryEvalErrorKind("No JSON found in AI response")).toBe("invalid_response");
    expect(classifyCategoryEvalErrorKind("timed out after 15000ms")).toBe("infra_error");
  });

  it("defaults to the anchor model and no suite or case filters", () => {
    const args = parseCatalogEvalsArgs([]);

    expect(args.models).toEqual([DEFAULT_CATEGORY_EVAL_MODEL]);
    expect(args.suites).toEqual([]);
    expect(args.caseIds).toEqual([]);
    expect(args.limit).toBeNull();
    expect(args.timeoutMs).toBeNull();
  });
});

describe("catalog eval grading", () => {
  const positiveCase: CategoryEvalCase = {
    id: "coding-agents__opencode",
    item_id: "github__anomalyco__opencode",
    suite: "prompt-core",
    fix_scope: "prompt",
    case_type: "adversarial",
    expected: {
      include: true,
      primary_category: "coding-agents",
      section: "Terminal & CLI Agents",
    },
    acceptable_alternatives: ["ai-ides-editors"],
    hard_negatives: ["app-builders", "mcp"],
  };

  it("treats an acceptable alternative as a soft pass without exact match", () => {
    const result = gradeCategoryEvalDecision(positiveCase, {
      include: true,
      primary_category: "ai-ides-editors",
      section: null,
    });

    expect(result.pass).toBe(true);
    expect(result.exactMatch).toBe(false);
    expect(result.usedAcceptableAlternative).toBe(true);
    expect(result.hardFailure).toBe(false);
  });

  it("fails when include mismatches even if the category matches", () => {
    const result = gradeCategoryEvalDecision(positiveCase, {
      include: false,
      primary_category: "coding-agents",
      section: "Terminal & CLI Agents",
    });

    expect(result.pass).toBe(false);
    expect(result.includeMatch).toBe(false);
    expect(result.categoryMatch).toBe(true);
  });

  it("does not mark section match true for acceptable alternative categories", () => {
    const result = gradeCategoryEvalDecision(positiveCase, {
      include: true,
      primary_category: "ai-ides-editors",
      section: "Full IDEs & Editors",
    });

    expect(result.pass).toBe(true);
    expect(result.usedAcceptableAlternative).toBe(true);
    expect(result.exactMatch).toBe(false);
    expect(result.sectionMatch).toBe(false);
  });

  it("flags hard-negative forced fits as hard failures", () => {
    const result = gradeCategoryEvalDecision(positiveCase, {
      include: true,
      primary_category: "app-builders",
      section: "Prompt-to-App Builders",
    });

    expect(result.pass).toBe(false);
    expect(result.hardFailure).toBe(true);
    expect(result.failureReasons.join(" ")).toMatch(/hard negative/i);
  });

  it("summarizes pass, exact match, and hard-failure counts", () => {
    const summary = summarizeCategoryEvalGrades([
      gradeCategoryEvalDecision(positiveCase, {
        include: true,
        primary_category: "coding-agents",
        section: "Terminal & CLI Agents",
      }),
      gradeCategoryEvalDecision(positiveCase, {
        include: true,
        primary_category: "ai-ides-editors",
        section: null,
      }),
      gradeCategoryEvalDecision(positiveCase, {
        include: true,
        primary_category: "app-builders",
        section: "Prompt-to-App Builders",
      }),
    ]);

    expect(summary.total).toBe(3);
    expect(summary.passed).toBe(2);
    expect(summary.exactMatches).toBe(1);
    expect(summary.acceptableAlternativePasses).toBe(1);
    expect(summary.hardFailures).toBe(1);
  });
});
