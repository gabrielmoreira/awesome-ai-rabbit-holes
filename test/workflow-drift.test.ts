import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WORKFLOWS = {
  smoke: ".github/workflows/check-generated-docs.yml",
  refresh: ".github/workflows/refresh-metadata.yml",
} as const;
const SYNC_ONLY_ENV_KEYS = [
  "CATALOG_FAIL_ON_PROCESSING_ERRORS",
  "CATALOG_LLM_CONCURRENCY",
  "CATALOG_LLM_TIMEOUT_MS",
  "CATALOG_CATEGORIZE_BUDGET_MINUTES",
] as const;

type WorkflowStep = {
  id?: string;
  name?: string;
  run?: string;
  uses?: string;
  env?: Record<string, unknown>;
};

type WorkflowJob = {
  env?: Record<string, unknown>;
  steps?: WorkflowStep[];
};

type WorkflowFile = {
  jobs?: Record<string, WorkflowJob>;
};

function readWorkflowText(relativePath: string): string {
  return fs.readFileSync(path.join(REPO_ROOT, relativePath), "utf8");
}

function loadWorkflow(relativePath: string): WorkflowFile {
  return (yaml.load(readWorkflowText(relativePath)) ?? {}) as WorkflowFile;
}

function getWorkflowJob(relativePath: string, jobName: string): WorkflowJob {
  const workflow = loadWorkflow(relativePath);
  const job = workflow.jobs?.[jobName];
  expect(job, `Missing job ${jobName} in ${relativePath}`).toBeDefined();
  return job!;
}

function getWorkflowSteps(relativePath: string, jobName: string): WorkflowStep[] {
  const job = getWorkflowJob(relativePath, jobName);
  expect(job.steps, `Missing steps for ${jobName} in ${relativePath}`).toBeDefined();
  return job.steps ?? [];
}

function findStep(steps: WorkflowStep[], stepName: string): WorkflowStep {
  const step = steps.find((candidate) => candidate.name === stepName);
  expect(step, `Missing step ${stepName}`).toBeDefined();
  return step!;
}

function findStepIndex(steps: WorkflowStep[], stepName: string): number {
  const index = steps.findIndex((candidate) => candidate.name === stepName);
  expect(index, `Missing step ${stepName}`).toBeGreaterThanOrEqual(0);
  return index;
}

describe("workflow llm task drift", () => {
  it("keeps refresh-metadata.yml (sync-catalog) on a stable twice-weekly schedule", () => {
    const workflow = fs.readFileSync(path.join(REPO_ROOT, ".github/workflows/refresh-metadata.yml"), "utf8");
    expect(workflow).toContain('cron: "0 4 * * 1,4"');
    expect(workflow).not.toContain('cron: "0 4 */3 * *"');
  });

  it("uses the current llm:doctor task name everywhere", () => {
    for (const relativePath of Object.values(WORKFLOWS)) {
      const contents = readWorkflowText(relativePath);
      expect(contents).toContain("mise run llm:doctor --limit 3");
      expect(contents).not.toContain("pi:free:doctor");
    }
  });

  it("uses shared catalog verification tasks instead of ad hoc test steps", () => {
    const mise = fs.readFileSync(path.join(REPO_ROOT, ".mise.toml"), "utf8");
    expect(mise).toContain('[tasks."catalog:check"]');
    expect(mise).toContain('[tasks."catalog:verify"]');
    expect(mise).toContain('run = "mise run catalog:typecheck && mise run catalog:test"');
    expect(mise).toContain('run = "mise run catalog:check && mise run catalog:validate"');

    const prChecks = readWorkflowText(".github/workflows/pr-checks.yml");
    expect(prChecks).toContain("mise run catalog:verify");
    expect(prChecks).not.toContain("mise run catalog:test");
    expect(prChecks).not.toContain("mise run catalog:validate");

    for (const relativePath of Object.values(WORKFLOWS)) {
      const contents = readWorkflowText(relativePath);
      expect(contents).toContain("mise run catalog:check");
      expect(contents).not.toContain("mise run catalog:test");
    }
  });
});

describe("workflow sync contract", () => {
  it("runs catalog checks before model probes and sync in both catalog workflows", () => {
    const smokeSteps = getWorkflowSteps(WORKFLOWS.smoke, "dry-run");
    expect(findStepIndex(smokeSteps, "Run catalog checks")).toBeLessThan(
      findStepIndex(smokeSteps, "Probe top pi-free fallback models"),
    );
    expect(findStepIndex(smokeSteps, "Run catalog checks")).toBeLessThan(
      findStepIndex(smokeSteps, "Run bounded catalog sync smoke test"),
    );

    const refreshSteps = getWorkflowSteps(WORKFLOWS.refresh, "sync");
    expect(findStepIndex(refreshSteps, "Run catalog preflight checks")).toBeLessThan(
      findStepIndex(refreshSteps, "Probe top pi-free fallback models"),
    );
    expect(findStepIndex(refreshSteps, "Run catalog preflight checks")).toBeLessThan(
      findStepIndex(refreshSteps, "Sync catalog metadata and generated output"),
    );

    const commitStep = findStep(refreshSteps, "Commit and push generated updates");
    const commitRun = commitStep.run ?? "";
    expect(commitRun.indexOf("mise run catalog:check")).toBeGreaterThanOrEqual(0);
    expect(commitRun.indexOf("mise run catalog:sync")).toBeGreaterThanOrEqual(0);
    expect(commitRun.indexOf("mise run catalog:check")).toBeLessThan(commitRun.indexOf("mise run catalog:sync"));
  });

  it("keeps sync-only env scoped to the sync boundary in refresh-metadata", () => {
    const job = getWorkflowJob(WORKFLOWS.refresh, "sync");
    const jobEnv = job.env ?? {};
    for (const key of SYNC_ONLY_ENV_KEYS) {
      expect(jobEnv).not.toHaveProperty(key);
    }

    const steps = getWorkflowSteps(WORKFLOWS.refresh, "sync");
    const syncStep = findStep(steps, "Sync catalog metadata and generated output");
    const commitStep = findStep(steps, "Commit and push generated updates");

    expect(syncStep.env).toMatchObject({
      CATALOG_FAIL_ON_PROCESSING_ERRORS: "0",
      CATALOG_LLM_CONCURRENCY: "2",
      CATALOG_LLM_TIMEOUT_MS: "60000",
    });
    expect(syncStep.env).toHaveProperty("CATALOG_CATEGORIZE_BUDGET_MINUTES");

    const commitEnv = commitStep.env ?? {};
    for (const key of SYNC_ONLY_ENV_KEYS) {
      expect(commitEnv).not.toHaveProperty(key);
    }

    const commitRun = commitStep.run ?? "";
    expect(commitRun).toContain('CATALOG_FAIL_ON_PROCESSING_ERRORS="0"');
    expect(commitRun).toContain('CATALOG_LLM_CONCURRENCY="2"');
    expect(commitRun).toContain('CATALOG_LLM_TIMEOUT_MS="60000"');
    expect(commitRun).toContain('CATALOG_CATEGORIZE_BUDGET_MINUTES="$sync_budget_minutes" mise run catalog:sync');
  });

  it("keys catalog checkpoints to authoritative repo inputs", () => {
    const contents = readWorkflowText(WORKFLOWS.refresh);
    expect(contents).toContain("sources/**/*.yml");
    expect(contents).toContain("catalog/items/**/*.yml");
  });

  it("restores and refreshes catalog item checkpoints around the expensive sync", () => {
    const steps = getWorkflowSteps(WORKFLOWS.refresh, "sync");
    const restoreIndex = findStepIndex(steps, "Restore catalog items checkpoint");
    const syncIndex = findStepIndex(steps, "Sync catalog metadata and generated output");
    const prePushUploadIndex = findStepIndex(steps, "Upload catalog items checkpoint before push");
    const commitIndex = findStepIndex(steps, "Commit and push generated updates");
    const postPushUploadIndex = findStepIndex(steps, "Refresh catalog items checkpoint after push");
    expect(restoreIndex).toBeLessThan(syncIndex);
    expect(syncIndex).toBeLessThan(prePushUploadIndex);
    expect(prePushUploadIndex).toBeLessThan(commitIndex);
    expect(commitIndex).toBeLessThan(postPushUploadIndex);

    const restoreStep = findStep(steps, "Restore catalog items checkpoint");
    const prePushUploadStep = findStep(steps, "Upload catalog items checkpoint before push");
    const postPushUploadStep = findStep(steps, "Refresh catalog items checkpoint after push");
    expect(restoreStep.uses).toBe("actions/download-artifact@v5");
    expect(prePushUploadStep.uses).toBe("actions/upload-artifact@v4");
    expect(postPushUploadStep.uses).toBe("actions/upload-artifact@v4");
  });
});