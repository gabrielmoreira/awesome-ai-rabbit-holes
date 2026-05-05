import * as fs from "node:fs";
import * as path from "node:path";
import { makeItemPath, normalizeLoadedItem, normalizeSourceKind } from "./core.ts";
import {
  CATALOG_ITEMS_DIR,
  CONFIG_CATEGORIES_PATH,
  CONFIG_SOURCES_PATH,
} from "../support/paths.ts";
import type { CatalogItem, Category, Source } from "./types.ts";
import { readYaml, readYamlIfExists, writeYaml } from "../support/yaml.ts";

function readYamlList(filePath: string, label: string): unknown[] {
  if (!fs.existsSync(filePath)) return [];
  const raw = readYamlIfExists<unknown>(filePath, null);
  if (!raw) return [];
  if (!Array.isArray(raw)) {
    throw new Error(`Validation error: expected ${filePath} to contain a YAML list of ${label}.`);
  }
  return raw;
}

function normalizeLoadedSource(raw: any, index: number, filePath: string): Source {
  const kind = normalizeSourceKind(raw?.kind);
  if (!kind) {
    throw new Error(`Validation error: ${filePath} has invalid kind at sources[${index}]: ${String(raw?.kind)}`);
  }

  return {
    url: typeof raw?.url === "string" ? raw.url : "",
    kind,
    note: typeof raw?.note === "string" ? raw.note : undefined,
  };
}

function requireNonEmptyString(value: unknown, path: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Validation error: ${path} must be a non-empty string.`);
  }
  return value.trim();
}

function normalizeLoadedCategory(raw: unknown, index: number, filePath: string): Category {
  const pathPrefix = `${filePath} categories[${index}]`;
  const category = raw && typeof raw === "object" && !Array.isArray(raw) ? (raw as Record<string, unknown>) : null;
  if (!category) {
    throw new Error(`Validation error: ${pathPrefix} must be a YAML mapping.`);
  }

  const sectionsRaw = category.sections;
  let sections: string[] | undefined;
  if (sectionsRaw !== undefined) {
    if (!Array.isArray(sectionsRaw)) {
      throw new Error(`Validation error: ${pathPrefix}.sections must be a YAML list of non-empty strings.`);
    }
    const normalizedSections = sectionsRaw.map((section, sectionIndex) =>
      requireNonEmptyString(section, `${pathPrefix}.sections[${sectionIndex}]`)
    );
    const seenSections = new Set<string>();
    for (const section of normalizedSections) {
      const normalizedKey = section.toLowerCase();
      if (seenSections.has(normalizedKey)) {
        throw new Error(`Validation error: duplicate section in ${pathPrefix}.sections: ${section}`);
      }
      seenSections.add(normalizedKey);
    }
    sections = normalizedSections;
  }

  return {
    id: requireNonEmptyString(category.id, `${pathPrefix}.id`),
    name: requireNonEmptyString(category.name, `${pathPrefix}.name`),
    slug: requireNonEmptyString(category.slug, `${pathPrefix}.slug`),
    description: requireNonEmptyString(category.description, `${pathPrefix}.description`),
    prompt_instruction: requireNonEmptyString(category.prompt_instruction, `${pathPrefix}.prompt_instruction`),
    ...(sections ? { sections } : {}),
  };
}

function assertUniqueCategories(categories: Category[], filePath: string): void {
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();
  for (const category of categories) {
    if (seenIds.has(category.id)) {
      throw new Error(`Validation error: duplicate category id in ${filePath}: ${category.id}`);
    }
    seenIds.add(category.id);

    const normalizedSlug = category.slug.toLowerCase();
    if (seenSlugs.has(normalizedSlug)) {
      throw new Error(`Validation error: duplicate category slug in ${filePath}: ${category.slug}`);
    }
    seenSlugs.add(normalizedSlug);
  }
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

export function loadSourcesFromRaw(raw: unknown, filePath: string = CONFIG_SOURCES_PATH): Source[] {
  if (raw === null || raw === undefined) return [];
  if (!Array.isArray(raw)) {
    throw new Error(`Validation error: expected ${filePath} to contain a YAML list of sources.`);
  }
  return raw.map((source, index) => normalizeLoadedSource(source, index, filePath));
}

export function loadSources(): Source[] {
  return loadSourcesFromRaw(readYamlList(CONFIG_SOURCES_PATH, "sources"), CONFIG_SOURCES_PATH);
}

export function loadCategoriesFromRaw(raw: unknown, filePath: string = CONFIG_CATEGORIES_PATH): Category[] {
  if (raw === null || raw === undefined) return [];
  if (!Array.isArray(raw)) {
    throw new Error(`Validation error: expected ${filePath} to contain a YAML list of categories.`);
  }
  const categories = raw.map((category, index) => normalizeLoadedCategory(category, index, filePath));
  assertUniqueCategories(categories, filePath);
  return categories;
}

export function loadCategories(): Category[] {
  return loadCategoriesFromRaw(readYamlList(CONFIG_CATEGORIES_PATH, "categories"), CONFIG_CATEGORIES_PATH);
}

export function loadCatalogItems(): CatalogItem[] {
  return loadYamlTree(
    CATALOG_ITEMS_DIR,
    (entry) => entry.isFile() && entry.name.endsWith(".yml") && entry.name !== ".gitkeep",
    (filePath) => normalizeLoadedItem(readYaml<any>(filePath)),
  );
}


export function saveCatalogItem(item: CatalogItem): void {
  writeYaml(makeItemPath(item.canonical_url), item);
}

export { CONFIG_SOURCES_PATH, CONFIG_CATEGORIES_PATH };