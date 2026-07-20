import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CANONICAL_INTAKE = "config/sources.yml";
const GENERATED_OUTPUTS = ["README.md", "docs/rabbit-holes/*.md", "catalog/catalog.json"] as const;

function read(relativePath: string): string {
  return fs.readFileSync(path.join(REPO_ROOT, relativePath), "utf8");
}

describe("foundation contributor guard", () => {
  it("renders generated-file warnings that point to the canonical intake", () => {
    for (const template of ["config/templates/docs-readme.njk", "config/templates/docs-category-page.njk"]) {
      const contents = read(template);
      expect(contents).toContain("<!--");
      expect(contents).toContain("generated");
      expect(contents).toContain("Do not edit");
      expect(contents).toContain(CANONICAL_INTAKE);
    }
  });

  it("keeps the legacy inbox as an empty non-input pointer", () => {
    const contents = read("sources/inbox.yml");
    expect(yaml.load(contents)).toEqual([]);
    expect(contents).toContain("NOT AN INPUT FILE");
    expect(contents).toContain(CANONICAL_INTAKE);
    expect(contents).not.toContain("npm run catalog -- update");
    expect(contents).not.toContain("sources/scope.yml");
  });

  it("gives pull requests one source intake and protects generated output", () => {
    const contents = read(".github/PULL_REQUEST_TEMPLATE.md");
    expect(contents).toContain(CANONICAL_INTAKE);
    for (const generatedOutput of GENERATED_OUTPUTS) {
      expect(contents).toContain(generatedOutput);
    }
    expect(contents).toContain("scheduled automation");
  });

  it("provides a valid Submit a tool issue form with the automation contract", () => {
    const contents = read(".github/ISSUE_TEMPLATE/submit-tool.yml");
    const form = yaml.load(contents) as {
      name?: string;
      body?: Array<{ id?: string; validations?: { required?: boolean } }>;
    };
    expect(form.name).toBe("Submit a tool");
    expect(form.body?.find((entry) => entry.id === "url")?.validations?.required).toBe(true);
    expect(contents).toContain(CANONICAL_INTAKE);
    expect(contents).toContain("scheduled automation");
  });

  it("documents config/sources.yml as the only catalog intake", () => {
    const contents = read("CONTRIBUTING.md");
    expect(contents).toContain("`config/sources.yml` is the only catalog intake");
    expect(contents).toContain("`sources/inbox.yml` is not an input");
  });
});
