import * as fs from "node:fs";
import * as path from "node:path";
import { makeItemPath, normalizeLoadedItem, normalizeSourceKind } from "./core.ts";
import { CATALOG_ITEMS_DIR,
CONFIG_CATEGORIES_PATH,
CONFIG_SETTINGS_PATH,
CONFIG_SOURCES_PATH,
REPO_ROOT, } from "../support/paths.ts"
import { loadSettings } from "./settings.ts";
import type { CatalogConfig, CatalogItem, Category, Override, Source } from "./types.ts"
import { readYaml, readYamlIfExists, writeYaml } from "../support/yaml.ts"

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
    console.error(`Validation error: expected ${CONFIG_CATEGORIES_PATH} to contain a YAML list of categories.`);
    return [];
  }
  return raw as Category[];
}

function loadItemsFromDir(dir: string): CatalogItem[] {
  const items: CatalogItem[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      items.push(...loadItemsFromDir(full));
    } else if (entry.isFile() && entry.name.endsWith(".yml") && entry.name !== ".gitkeep") {
      items.push(normalizeLoadedItem(readYaml<any>(full)));
    }
  }
  return items;
}

export function loadCatalogItems(): CatalogItem[] {
  if (!fs.existsSync(CATALOG_ITEMS_DIR)) return [];
  return loadItemsFromDir(CATALOG_ITEMS_DIR);
}

function loadOverridesFromDir(dir: string): Override[] {
  const overrides: Override[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      overrides.push(...loadOverridesFromDir(full));
    } else if (entry.isFile() && entry.name.endsWith(".yml")) {
      overrides.push(readYaml<Override>(full));
    }
  }
  return overrides;
}

export function loadOverrides(): Override[] {
  const overridesDir = path.join(REPO_ROOT, "overrides", "catalog", "items");
  if (!fs.existsSync(overridesDir)) return [];
  return loadOverridesFromDir(overridesDir);
}

export function saveCatalogItem(item: CatalogItem): void {
  writeYaml(makeItemPath(item.canonical_url), item);
}

export { CONFIG_SETTINGS_PATH, CONFIG_SOURCES_PATH, CONFIG_CATEGORIES_PATH };
