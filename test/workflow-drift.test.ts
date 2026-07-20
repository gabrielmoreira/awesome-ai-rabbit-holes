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
  "CATALOG_MAX_SOURCE_LIST_NEW_ITEMS",
] as const;

type WorkflowStep = {
  id?: string;
  if?: string;
  name?: string;
  run?: string;
  shell?: string;
  uses?: string;
  env?: Record<string, unknown>;
  with?: Record<string, unknown>;
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

  it("keeps model probes on the scheduled LLM sync only", () => {
    const refresh = readWorkflowText(WORKFLOWS.refresh);
    const generatedDocs = readWorkflowText(WORKFLOWS.smoke);
    expect(refresh).toContain("mise run llm:doctor --limit 5");
    expect(refresh).not.toContain("pi:free:doctor");
    expect(generatedDocs).not.toContain("llm:doctor");
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

    const refresh = readWorkflowText(WORKFLOWS.refresh);
    expect(refresh).toContain("mise run catalog:check");
    expect(refresh).not.toContain("mise run catalog:test");

    const generatedDocs = readWorkflowText(WORKFLOWS.smoke);
    expect(generatedDocs).toContain("mise run catalog:render");
    expect(generatedDocs).not.toContain("mise run catalog:check");
    expect(generatedDocs).not.toContain("mise run catalog:sync");
  });
});

describe("workflow sync contract", () => {
  it("runs preflight checks before model probes and the scheduled sync", () => {
    const refreshSteps = getWorkflowSteps(WORKFLOWS.refresh, "sync");
    expect(findStepIndex(refreshSteps, "Run catalog preflight checks")).toBeLessThan(
      findStepIndex(refreshSteps, "Probe top pi-free fallback models"),
    );
    expect(findStepIndex(refreshSteps, "Run catalog preflight checks")).toBeLessThan(
      findStepIndex(refreshSteps, "Sync catalog metadata and generated output"),
    );
  });

  it("rerenders and validates after a push race without repeating the LLM sync", () => {
    const refreshSteps = getWorkflowSteps(WORKFLOWS.refresh, "sync");
    const commitStep = findStep(refreshSteps, "Commit and push generated updates");
    const commitRun = commitStep.run ?? "";
    expect(commitRun).toContain("mise run catalog:render");
    expect(commitRun).toContain("mise run catalog:validate");
    expect(commitRun).not.toContain("mise run catalog:sync");
    expect(commitRun).not.toContain("mise run catalog:check");
    expect(commitRun.indexOf("mise run catalog:render")).toBeLessThan(
      commitRun.indexOf("mise run catalog:validate"),
    );
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
      CATALOG_MAX_SOURCE_LIST_NEW_ITEMS: "25",
    });
    expect(syncStep.env).toHaveProperty("CATALOG_CATEGORIZE_BUDGET_MINUTES");

    const commitEnv = commitStep.env ?? {};
    for (const key of SYNC_ONLY_ENV_KEYS) {
      expect(commitEnv).not.toHaveProperty(key);
    }

    const commitRun = commitStep.run ?? "";
    expect(commitRun).not.toContain("CATALOG_FAIL_ON_PROCESSING_ERRORS");
    expect(commitRun).not.toContain("CATALOG_LLM_CONCURRENCY");
    expect(commitRun).not.toContain("CATALOG_LLM_TIMEOUT_MS");
    expect(commitRun).not.toContain("CATALOG_CATEGORIZE_BUDGET_MINUTES");
  });

  it("keys catalog checkpoints to authoritative repo inputs", () => {
    const contents = readWorkflowText(WORKFLOWS.refresh);
    expect(contents).toContain("sources/**/*.yml");
    expect(contents).toContain("catalog/items/**/*.yml");
  });

  it("appends catalog gaps to the GitHub step summary after sync", () => {
    const steps = getWorkflowSteps(WORKFLOWS.refresh, "sync");
    const syncIndex = findStepIndex(steps, "Sync catalog metadata and generated output");
    const gapsIndex = findStepIndex(steps, "Append catalog gaps to job summary");
    const gapsStep = findStep(steps, "Append catalog gaps to job summary");
    expect(syncIndex).toBeLessThan(gapsIndex);
    expect(gapsStep.run).toContain("mise run catalog:gaps");
    expect(gapsStep.shell).toBe("bash");
    expect(gapsStep.run).toContain("$GITHUB_STEP_SUMMARY");
  });

  it("restores and refreshes catalog item checkpoints around the expensive sync", () => {
    const steps = getWorkflowSteps(WORKFLOWS.refresh, "sync");
    const restoreIndex = findStepIndex(steps, "Restore catalog items checkpoint");
    const syncIndex = findStepIndex(steps, "Sync catalog metadata and generated output");
    const detectIndex = findStepIndex(steps, "Detect generated changes");
    const prePushUploadIndex = findStepIndex(steps, "Upload catalog items checkpoint before push");
    const commitIndex = findStepIndex(steps, "Commit and push generated updates");
    const postPushUploadIndex = findStepIndex(steps, "Refresh catalog items checkpoint after push");
    expect(restoreIndex).toBeLessThan(syncIndex);
    expect(syncIndex).toBeLessThan(detectIndex);
    expect(detectIndex).toBeLessThan(prePushUploadIndex);
    expect(prePushUploadIndex).toBeLessThan(commitIndex);
    expect(commitIndex).toBeLessThan(postPushUploadIndex);

    const restoreStep = findStep(steps, "Restore catalog items checkpoint");
    const detectStep = findStep(steps, "Detect generated changes");
    const prePushUploadStep = findStep(steps, "Upload catalog items checkpoint before push");
    const postPushUploadStep = findStep(steps, "Refresh catalog items checkpoint after push");
    expect(restoreStep.uses).toBe("actions/download-artifact@v5");
    expect(detectStep.if).toContain("!cancelled()");
    expect(prePushUploadStep.if).toContain("!cancelled()");
    const checkpointSafetyStep = findStep(steps, "Validate catalog items for failure checkpoint");
    expect(checkpointSafetyStep.if).toContain("steps.catalog-sync.outcome == 'failure'");
    expect(checkpointSafetyStep.run).toContain("mise run catalog:render");
    expect(checkpointSafetyStep.run).toContain("mise run catalog:validate");
    expect(prePushUploadStep.if).toContain("steps.catalog-sync.outcome == 'success'");
    expect(prePushUploadStep.if).toContain("steps.checkpoint-safety.outcome == 'success'");
    expect(prePushUploadStep.uses).toBe("actions/upload-artifact@v4");
    expect(postPushUploadStep.uses).toBe("actions/upload-artifact@v4");
  });
});

describe("generated output drift guard", () => {
  it("runs deterministic rendering for pull requests and fails on generated drift", () => {
    const contents = readWorkflowText(WORKFLOWS.smoke);
    expect(contents).toContain("pull_request:");

    const steps = getWorkflowSteps(WORKFLOWS.smoke, "generated-output");
    const installIndex = findStepIndex(steps, "Install project dependencies");
    const renderIndex = findStepIndex(steps, "Render generated catalog output");
    const driftIndex = findStepIndex(steps, "Fail on generated output drift");
    expect(installIndex).toBeLessThan(renderIndex);
    expect(renderIndex).toBeLessThan(driftIndex);

    const driftRun = findStep(steps, "Fail on generated output drift").run ?? "";
    expect(driftRun).toContain("git status --porcelain -- README.md docs/rabbit-holes catalog/catalog.json");
    expect(driftRun).toContain("config/sources.yml");
    expect(driftRun).toContain("exit 1");
  });

  it("rejects automation-owned catalog item edits only for pull requests", () => {
    const contents = readWorkflowText(WORKFLOWS.smoke);
    expect(contents).toContain("workflow_dispatch:");

    const steps = getWorkflowSteps(WORKFLOWS.smoke, "generated-output");
    const checkoutStep = findStep(steps, "Checkout");
    expect(checkoutStep.with).toMatchObject({ "fetch-depth": 0 });

    const guardIndex = findStepIndex(steps, "Reject direct catalog item edits");
    const installIndex = findStepIndex(steps, "Install project dependencies");
    expect(guardIndex).toBeLessThan(installIndex);

    const guardStep = findStep(steps, "Reject direct catalog item edits");
    expect(guardStep.if).toContain("github.event_name == 'pull_request'");
    expect(guardStep.run).toContain("${{ github.event.pull_request.base.sha }}");
    expect(guardStep.run).toContain("git diff --name-only");
    expect(guardStep.run).toContain("--no-renames");
    expect(guardStep.run).toContain("catalog/items/**/*.yml");
    expect(guardStep.run).toContain("automation-owned");
    expect(guardStep.run).toContain("exit 1");
  });
});
