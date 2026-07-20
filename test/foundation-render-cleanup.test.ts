import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { describe, expect, it } from "vitest";
import { removeObsoleteRabbitHolePages } from "../scripts/catalog/render.js";

describe("foundation render cleanup", () => {
  it("removes renamed and removed category pages without crossing the generated docs boundary", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "aarh-render-cleanup-"));
    const docsDirectory = path.join(root, "docs", "rabbit-holes");
    const unrelatedFile = path.join(root, "docs", "manual.md");
    const nestedFile = path.join(docsDirectory, "nested", "manual.md");

    try {
      fs.mkdirSync(path.dirname(nestedFile), { recursive: true });
      fs.writeFileSync(path.join(docsDirectory, "current-category.md"), "current", "utf8");
      fs.writeFileSync(path.join(docsDirectory, "renamed-category.md"), "obsolete", "utf8");
      fs.writeFileSync(path.join(docsDirectory, "removed-category.md"), "obsolete", "utf8");
      fs.writeFileSync(path.join(docsDirectory, "notes.txt"), "manual", "utf8");
      fs.writeFileSync(nestedFile, "manual", "utf8");
      fs.writeFileSync(unrelatedFile, "manual", "utf8");

      removeObsoleteRabbitHolePages(
        [{ slug: "current-category" }, { slug: "new-category" }],
        docsDirectory,
      );

      expect(fs.existsSync(path.join(docsDirectory, "current-category.md"))).toBe(true);
      expect(fs.existsSync(path.join(docsDirectory, "renamed-category.md"))).toBe(false);
      expect(fs.existsSync(path.join(docsDirectory, "removed-category.md"))).toBe(false);
      expect(fs.existsSync(path.join(docsDirectory, "notes.txt"))).toBe(true);
      expect(fs.existsSync(nestedFile)).toBe(true);
      expect(fs.existsSync(unrelatedFile)).toBe(true);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });
});
