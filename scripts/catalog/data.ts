import * as fs from "node:fs";
import * as path from "node:path";
import { makeItemPath, normalizeLoadedItem, normalizeSourceKind } from "./core.ts";
import {
  CATALOG_ITEMS_DIR,
  CONFIG_CATEGORIES_PATH,
  CONFIG_SETTINGS_PATH,
  CONFIG_SOURCES_PATH,
  REPO_ROOT,
} from "../support/paths.ts";
import { loadSettings } from "./settings.ts";
import type { CatalogConfig, CatalogItem, Category, Override, Source } from "./types.ts";
import { readYaml, readYamlIfExists, writeYaml } from "../support/yaml.ts";

const OVERRIDES_DIR = path.join(REPO_ROOT, "overrides", "catalog", "items");

export function loadConfig(): CatalogConfig {
  const settings = loadSettings();
  return {
    promotion: settings.promotion,
    github: settings.github,
  };
}

function normalizeLoadedSource(raw: any, index: number): Source {
  const kind = normalizeSourceKind(raw?.kind);
  if (!kind) {
    throw new Error(`Validation error: ${CONFIG_SOURCES_PATH} has invalid kind at sources[${index}]: ${String(raw?.kind)}`);
  }

  return {
    url: typeof raw?.url === "string" ? raw.url : "",
    kind,
    note: typeof raw?.note === "string" ? raw.note : undefined,
  };
}

function loadYamlTree<T>(
  dir: string,
  predicate: (entry: fs.Dirent) => boolean,
  reader: (filePath: string) => T,
): T[] {
  if (!fs.existsSync(dir)) return [];

  const items: T[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      items.push(...loadYamlTree(fullPath, predicate, reader));
      continue;
    }
    if (predicate(entry)) items.push(reader(fullPath));
  }
  return items;
}

export function loadSources(): Source[] {
  if (!fs.existsSync(CONFIG_SOURCES_PATH)) return [];
  const raw = readYamlIfExists<unknown>(CONFIG_SOURCES_PATH, null);
  if (!raw) return [];
  if (!Array.isArray(raw)) {
    throw new Error(`Validation error: expected ${CONFIG_SOURCES_PATH} to contain a YAML list of sources.`);
  }
  return raw.map((source, index) => normalizeLoadedSource(source, index));
}

export function loadCategories(): Category[] {
  if (!fs.existsSync(CONFIG_CATEGORIES_PATH)) return [];
  const raw = readYamlIfExists<unknown>(CONFIG_CATEGORIES_PATH, null);
  if (!raw) return [];
  if (!Array.isArray(raw)) {
    throw new Error(`Validation error: expected ${CONFIG_CATEGORIES_PATH} to contain a YAML list of categories.`);
  }
  return raw as Category[];
}

export function loadCatalogItems(): CatalogItem[] {
  return loadYamlTree(
    CATALOG_ITEMS_DIR,
    (entry) => entry.isFile() && entry.name.endsWith(".yml") && entry.name !== ".gitkeep",
    (filePath) => normalizeLoadedItem(readYaml<any>(filePath)),
  );
}

export function loadOverrides(): Override[] {
  return loadYamlTree(
    OVERRIDES_DIR,
    (entry) => entry.isFile() && entry.name.endsWith(".yml"),
    (filePath) => readYaml<Override>(filePath),
  );
}

export function saveCatalogItem(item: CatalogItem): void {
  writeYaml(makeItemPath(item.canonical_url), item);
}

export { CONFIG_SETTINGS_PATH, CONFIG_SOURCES_PATH, CONFIG_CATEGORIES_PATH };
