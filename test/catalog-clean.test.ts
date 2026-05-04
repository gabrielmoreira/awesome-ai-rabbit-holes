import { describe, expect, it } from "vitest";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import { listCleanTargets, resolveCleanSelection, runClean, type CleanPaths } from "../scripts/catalog/clean.js";

describe("catalog clean selection", () => {
  it("defaults to a full clean when no scope flags are provided", () => {
    expect(resolveCleanSelection([])).toEqual({ cache: true, data: true, docs: true });
  });

  it("supports cleaning only a selected scope", () => {
    expect(resolveCleanSelection(["--docs"])).toEqual({ cache: false, data: false, docs: true });
    expect(resolveCleanSelection(["--cache", "--data"])).toEqual({ cache: true, data: true, docs: false });
  });

  it("rejects unknown clean flags instead of defaulting to a full clean", () => {
    expect(() => resolveCleanSelection(["--bogus"])).toThrow("Unknown clean flag");
  });

  it("maps the data scope only to generated catalog json and items", () => {
    const root = path.join("/tmp", "aarh-clean");
    const paths: CleanPaths = {
      readmeCacheDir: path.join(root, ".cache", "readmes", "github"),
      sourceListCacheDir: path.join(root, ".cache", "source-lists"),
      websiteLinkCacheDir: path.join(root, ".cache", "linked-sites"),
      readmePath: path.join(root, "README.md"),
      docsDir: path.join(root, "docs", "rabbit-holes"),
      catalogJsonPath: path.join(root, "catalog", "catalog.json"),
      catalogItemsDir: path.join(root, "catalog", "items"),
    };

    expect(listCleanTargets({ cache: false, data: true, docs: false }, paths)).toEqual([
      paths.catalogJsonPath,
      paths.catalogItemsDir,
    ]);
  });
});

describe("runClean", () => {
  it("removes only generated data files and preserves sidecars", async () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "aarh-clean-"));
    const paths: CleanPaths = {
      readmeCacheDir: path.join(root, ".cache", "readmes", "github"),
      sourceListCacheDir: path.join(root, ".cache", "source-lists"),
      websiteLinkCacheDir: path.join(root, ".cache", "linked-sites"),
      readmePath: path.join(root, "README.md"),
      docsDir: path.join(root, "docs", "rabbit-holes"),
      catalogJsonPath: path.join(root, "catalog", "catalog.json"),
      catalogItemsDir: path.join(root, "catalog", "items"),
    };

    try {
      fs.mkdirSync(path.join(paths.docsDir, "nested"), { recursive: true });
      fs.writeFileSync(path.join(paths.docsDir, "page.md"), "docs", "utf8");
      fs.writeFileSync(path.join(paths.docsDir, "notes.txt"), "keep", "utf8");
      fs.writeFileSync(path.join(paths.docsDir, "nested", "manual.md"), "keep nested", "utf8");
      fs.mkdirSync(path.dirname(paths.catalogJsonPath), { recursive: true });
      fs.writeFileSync(paths.catalogJsonPath, "{}", "utf8");
      fs.mkdirSync(paths.catalogItemsDir, { recursive: true });
      fs.writeFileSync(path.join(paths.catalogItemsDir, "item.yml"), "id: test", "utf8");
      fs.writeFileSync(path.join(paths.catalogItemsDir, "README.txt"), "keep", "utf8");
      fs.writeFileSync(paths.readmePath, "generated readme", "utf8");
      const humanOwned = path.join(root, "config", "settings.yml");
      fs.mkdirSync(path.dirname(humanOwned), { recursive: true });
      fs.writeFileSync(humanOwned, "budgets: {}", "utf8");
      const unrelatedPiCache = path.join(root, ".cache", "pi", "recent-failures", "stale.json");
      fs.mkdirSync(path.dirname(unrelatedPiCache), { recursive: true });
      fs.writeFileSync(unrelatedPiCache, "{}", "utf8");

      await runClean(["--data"], paths);

      expect(fs.existsSync(paths.catalogJsonPath)).toBe(false);
      expect(fs.existsSync(path.join(paths.catalogItemsDir, "item.yml"))).toBe(false);
      expect(fs.existsSync(path.join(paths.catalogItemsDir, "README.txt"))).toBe(true);
      expect(fs.existsSync(path.join(paths.docsDir, "nested", "manual.md"))).toBe(true);
      expect(fs.existsSync(paths.docsDir)).toBe(true);
      expect(fs.existsSync(paths.readmePath)).toBe(true);
      expect(fs.existsSync(humanOwned)).toBe(true);
      expect(fs.existsSync(unrelatedPiCache)).toBe(true);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  it("removes only top-level generated docs and keeps nested/manual docs intact", async () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "aarh-clean-docs-"));
    const paths: CleanPaths = {
      readmeCacheDir: path.join(root, ".cache", "readmes", "github"),
      sourceListCacheDir: path.join(root, ".cache", "source-lists"),
      websiteLinkCacheDir: path.join(root, ".cache", "linked-sites"),
      readmePath: path.join(root, "README.md"),
      docsDir: path.join(root, "docs", "rabbit-holes"),
      catalogJsonPath: path.join(root, "catalog", "catalog.json"),
      catalogItemsDir: path.join(root, "catalog", "items"),
    };

    try {
      fs.mkdirSync(path.join(paths.docsDir, "nested"), { recursive: true });
      fs.writeFileSync(paths.readmePath, "generated readme", "utf8");
      fs.writeFileSync(path.join(paths.docsDir, "ai-app-builders.md"), "generated", "utf8");
      fs.writeFileSync(path.join(paths.docsDir, "notes.txt"), "keep", "utf8");
      fs.writeFileSync(path.join(paths.docsDir, "nested", "design.md"), "keep nested", "utf8");

      await runClean(["--docs"], paths);

      expect(fs.existsSync(paths.readmePath)).toBe(false);
      expect(fs.existsSync(path.join(paths.docsDir, "ai-app-builders.md"))).toBe(false);
      expect(fs.existsSync(path.join(paths.docsDir, "notes.txt"))).toBe(true);
      expect(fs.existsSync(path.join(paths.docsDir, "nested", "design.md"))).toBe(true);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  it("removes only catalog-owned cache directories", async () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "aarh-clean-cache-"));
    const paths: CleanPaths = {
      readmeCacheDir: path.join(root, ".cache", "readmes", "github"),
      sourceListCacheDir: path.join(root, ".cache", "source-lists"),
      websiteLinkCacheDir: path.join(root, ".cache", "linked-sites"),
      readmePath: path.join(root, "README.md"),
      docsDir: path.join(root, "docs", "rabbit-holes"),
      catalogJsonPath: path.join(root, "catalog", "catalog.json"),
      catalogItemsDir: path.join(root, "catalog", "items"),
    };

    try {
      fs.mkdirSync(path.join(paths.readmeCacheDir, "owner"), { recursive: true });
      fs.mkdirSync(paths.sourceListCacheDir, { recursive: true });
      fs.mkdirSync(paths.websiteLinkCacheDir, { recursive: true });
      const unrelatedPiCache = path.join(root, ".cache", "pi", "agent");
      fs.mkdirSync(unrelatedPiCache, { recursive: true });
      fs.writeFileSync(path.join(unrelatedPiCache, "session.json"), "{}", "utf8");

      await runClean(["--cache"], paths);

      expect(fs.existsSync(paths.readmeCacheDir)).toBe(false);
      expect(fs.existsSync(paths.sourceListCacheDir)).toBe(false);
      expect(fs.existsSync(paths.websiteLinkCacheDir)).toBe(false);
      expect(fs.existsSync(path.join(unrelatedPiCache, "session.json"))).toBe(true);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });
});
