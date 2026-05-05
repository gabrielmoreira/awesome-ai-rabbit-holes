import { normalizeSourceKind } from "./core.ts"
import { loadCatalogItems, loadCategories, loadSources } from "./data.ts"
import type { CatalogItem, Source } from "./types.ts"

export type ValidationError = {
  path: string;
  message: string;
};

const VALID_CURATION_STATUSES = new Set(["pending", "included", "excluded"]);
const VALID_PROCESSING_STATUSES = new Set(["pending", "done", "deferred", "failed", "skipped"]);

export function validateSources(sources: Source[]): ValidationError[] {
  const errors: ValidationError[] = [];
  for (const [index, source] of sources.entries()) {
    if (!source.url) {
      errors.push({ path: `sources[${index}]`, message: "Source is missing required field: url" });
    }
    if (normalizeSourceKind(source.kind) == null) {
      errors.push({ path: `sources[${index}]`, message: `Source has invalid kind: ${String(source.kind)}` });
    }
  }
  return errors;
}

function validateProcessing(item: CatalogItem): ValidationError[] {
  const errors: ValidationError[] = [];
  for (const [command, state] of Object.entries(item.processing ?? {})) {
    if (!state) continue;
    if (!VALID_PROCESSING_STATUSES.has(state.status)) {
      errors.push({ path: item.id, message: `Invalid processing status for ${command}: ${state.status}` });
    }
    if (state.cause) {
      if (typeof state.cause.type !== "string" || state.cause.type.trim().length === 0) {
        errors.push({ path: item.id, message: `Invalid processing cause.type for ${command}` });
      }
      if (typeof state.cause.message !== "string" || state.cause.message.trim().length === 0) {
        errors.push({ path: item.id, message: `Invalid processing cause.message for ${command}` });
      }
    }
  }
  return errors;
}

export function validateCatalogItem(item: CatalogItem): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!item.id) errors.push({ path: item.id ?? "unknown", message: "Item missing required field: id" });
  if (!item.canonical_url) errors.push({ path: item.id ?? "unknown", message: "Item missing required field: canonical_url" });
  if (!item.provenance?.discoveries?.length) {
    errors.push({ path: item.id ?? "unknown", message: "Item missing required field: provenance.discoveries" });
  }
  if (!item.curation?.status || !VALID_CURATION_STATUSES.has(item.curation.status)) {
    errors.push({ path: item.id ?? "unknown", message: "Item missing or invalid field: curation.status" });
  }
  errors.push(...validateProcessing(item));

  return errors;
}

export function validateCatalogItems(items: CatalogItem[]): ValidationError[] {
  return items.flatMap((item) => validateCatalogItem(item));
}


function validateDuplicateIds(items: CatalogItem[]): ValidationError[] {
  const seen = new Set<string>();
  const errors: ValidationError[] = [];
  for (const item of items) {
    if (seen.has(item.id)) {
      errors.push({ path: item.id, message: `Duplicate item id: ${item.id}` });
    }
    seen.add(item.id);
  }
  return errors;
}

function validateCategoryReferences(items: CatalogItem[], categories: Array<{ id: string }>): ValidationError[] {
  const categoryIds = new Set(categories.map((category) => category.id));
  const errors: ValidationError[] = [];
  for (const item of items) {
    const categoryId = item.placement.primary_category;
    if (!categoryId) continue;
    if (!categoryIds.has(categoryId)) {
      errors.push({ path: item.id, message: `Unknown primary category: ${categoryId}` });
    }
  }
  return errors;
}

export async function runValidate(): Promise<void> {
  console.log("Validating catalog...");

  const sources = loadSources();
  const categories = loadCategories();
  const items = loadCatalogItems();
  const errors: ValidationError[] = [];

  errors.push(...validateSources(sources));
  errors.push(...validateCatalogItems(items));
  errors.push(...validateDuplicateIds(items));
  errors.push(...validateCategoryReferences(items, categories));

  if (errors.length > 0) {
    console.error(`\n❌ Validation failed with ${errors.length} error(s):\n`);
    for (const error of errors) {
      console.error(`  [${error.path}] ${error.message}`);
    }
    throw new Error(`Catalog validation failed (${errors.length} error(s))`);
  }

  console.log(`✅ Catalog is valid (${items.length} items, ${sources.length} sources)`);
}
