import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WORKFLOWS = [
  ".github/workflows/check-generated-docs.yml",
  ".github/workflows/refresh-metadata.yml",
] as const;

describe("workflow llm task drift", () => {
  it("runs sync-catalog on a stable twice-weekly schedule", () => {
    const workflow = fs.readFileSync(path.join(REPO_ROOT, ".github/workflows/refresh-metadata.yml"), "utf8");
    expect(workflow).toContain('cron: "0 4 * * 1,4"');
    expect(workflow).not.toContain('cron: "0 4 */3 * *"');
  });

  it("uses the current llm:doctor task name everywhere", () => {
    for (const relativePath of WORKFLOWS) {
      const contents = fs.readFileSync(path.join(REPO_ROOT, relativePath), "utf8");
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

    const prChecks = fs.readFileSync(path.join(REPO_ROOT, ".github/workflows/pr-checks.yml"), "utf8");
    expect(prChecks).toContain("mise run catalog:verify");
    expect(prChecks).not.toContain("mise run catalog:test");
    expect(prChecks).not.toContain("mise run catalog:validate");

    for (const relativePath of WORKFLOWS) {
      const contents = fs.readFileSync(path.join(REPO_ROOT, relativePath), "utf8");
      expect(contents).toContain("mise run catalog:check");
      expect(contents).not.toContain("mise run catalog:test");
    }
  });
});
