import * as fs from "node:fs";
import * as path from "node:path";
import {
  CATALOG_ITEMS_DIR,
  README_CACHE_DIR,
  REPO_ROOT,
  SOURCE_LIST_CACHE_DIR,
  WEBSITE_LINK_CACHE_DIR,
} from "../support/paths.ts";

export type CleanSelection = {
  cache: boolean;
  data: boolean;
  docs: boolean;
};

export type CleanPaths = {
  readmeCacheDir: string;
  sourceListCacheDir: string;
  websiteLinkCacheDir: string;
  readmePath: string;
  docsDir: string;
  catalogJsonPath: string;
  catalogItemsDir: string;
};

export const DEFAULT_CLEAN_PATHS: CleanPaths = {
  readmeCacheDir: README_CACHE_DIR,
  sourceListCacheDir: SOURCE_LIST_CACHE_DIR,
  websiteLinkCacheDir: WEBSITE_LINK_CACHE_DIR,
  readmePath: path.join(REPO_ROOT, "README.md"),
  docsDir: path.join(REPO_ROOT, "docs", "rabbit-holes"),
  catalogJsonPath: path.join(REPO_ROOT, "catalog", "catalog.json"),
  catalogItemsDir: CATALOG_ITEMS_DIR,
};

const VALID_CLEAN_FLAGS = new Set(["--full", "--cache", "--data", "--docs"]);

export function resolveCleanSelection(argv: string[]): CleanSelection {
  const unknownFlag = argv.find((arg) => !VALID_CLEAN_FLAGS.has(arg));
  if (unknownFlag) {
    throw new Error(`Unknown clean flag: ${unknownFlag}`);
  }

  const selection: CleanSelection = {
    cache: argv.includes("--cache"),
    data: argv.includes("--data"),
    docs: argv.includes("--docs"),
  };

  if (argv.includes("--full") || (!selection.cache && !selection.data && !selection.docs)) {
    return { cache: true, data: true, docs: true };
  }

  return selection;
}

export function listCleanTargets(selection: CleanSelection, paths: CleanPaths = DEFAULT_CLEAN_PATHS): string[] {
  const targets: string[] = [];
  if (selection.cache) {
    targets.push(paths.readmeCacheDir, paths.sourceListCacheDir, paths.websiteLinkCacheDir);
  }
  if (selection.data) {
    targets.push(paths.catalogJsonPath, paths.catalogItemsDir);
  }
  if (selection.docs) {
    targets.push(paths.readmePath, paths.docsDir);
  }
  return targets;
}

function removePathIfPresent(targetPath: string): boolean {
  if (!fs.existsSync(targetPath)) return false;
  fs.rmSync(targetPath, { recursive: true, force: true });
  return true;
}

function walkFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) return [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath));
      continue;
    }
    if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

function pruneEmptyDirectories(dirPath: string): void {
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) return;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (entry.isDirectory()) pruneEmptyDirectories(path.join(dirPath, entry.name));
  }
  if (fs.readdirSync(dirPath).length === 0) {
    fs.rmdirSync(dirPath);
  }
}

function removeGeneratedFiles(dirPath: string, extension: string): string[] {
  const removed: string[] = [];
  for (const filePath of walkFiles(dirPath)) {
    if (!filePath.endsWith(extension)) continue;
    fs.rmSync(filePath, { force: true });
    removed.push(filePath);
  }
  pruneEmptyDirectories(dirPath);
  return removed;
}
function removeDirectFiles(dirPath: string, extension: string): string[] {
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) return [];
  const removed: string[] = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(extension)) continue;
    const filePath = path.join(dirPath, entry.name);
    fs.rmSync(filePath, { force: true });
    removed.push(filePath);
  }
  pruneEmptyDirectories(dirPath);
  return removed;
}


export async function runClean(argv: string[] = [], paths: CleanPaths = DEFAULT_CLEAN_PATHS): Promise<void> {
  const selection = resolveCleanSelection(argv);
  const removedTargets: string[] = [];

  if (selection.cache) {
    for (const targetPath of [paths.readmeCacheDir, paths.sourceListCacheDir, paths.websiteLinkCacheDir]) {
      if (removePathIfPresent(targetPath)) removedTargets.push(targetPath);
    }
  }

  if (selection.data) {
    if (removePathIfPresent(paths.catalogJsonPath)) removedTargets.push(paths.catalogJsonPath);
    removedTargets.push(...removeGeneratedFiles(paths.catalogItemsDir, ".yml"));
  }

  if (selection.docs) {
    if (removePathIfPresent(paths.readmePath)) removedTargets.push(paths.readmePath);
    removedTargets.push(...removeDirectFiles(paths.docsDir, ".md"));
  }

  const scopeLabels = Object.entries(selection)
    .filter(([, enabled]) => enabled)
    .map(([scope]) => scope)
    .join(", ");

  console.log(`Catalog clean scopes: ${scopeLabels || "none"}`);
  for (const targetPath of removedTargets) console.log(`removed ${targetPath}`);
  if (removedTargets.length === 0) console.log("No matching generated or cache paths were present.");
}
