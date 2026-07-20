import * as fs from "node:fs";
import * as path from "node:path";
import type { CatalogItem } from "./types.ts";
import { CATALOG_ITEM_OVERRIDES_DIR } from "../support/paths.ts";
import { readYaml } from "../support/yaml.ts";

const OVERRIDE_TOP_LEVEL_KEYS = {
  id: true,
  override: true,
  patch: true,
} as const;
const AUDIT_METADATA_KEYS = {
  reason: true,
  updated_by: true,
  updated_at: true,
} as const;
const PATCHABLE_ITEM_KEYS = {
  kind: true,
  name: true,
  canonical_url: true,
  identity: true,
  provenance: true,
  metadata: true,
  insights: true,
  curation: true,
  placement: true,
  lifecycle: true,
  processing: true,
} as const satisfies Record<Exclude<keyof CatalogItem, "id">, true>;

type CatalogOverride = {
  id: string;
  patch: Record<string, unknown>;
  filePath: string;
};

type ValueRule =
  | { kind: "string"; nullable?: true; values?: readonly string[] }
  | { kind: "number"; nullable?: true }
  | { kind: "boolean"; nullable?: true }
  | { kind: "array"; nullable?: true; element: ValueRule }
  | {
      kind: "mapping";
      nullable?: true;
      fields: Record<string, ValueRule>;
      required?: readonly string[];
      additional?: ValueRule;
    };

const STRING_RULE = { kind: "string" } as const satisfies ValueRule;
const NULLABLE_STRING_RULE = { kind: "string", nullable: true } as const satisfies ValueRule;
const NULLABLE_NUMBER_RULE = { kind: "number", nullable: true } as const satisfies ValueRule;
const NULLABLE_BOOLEAN_RULE = { kind: "boolean", nullable: true } as const satisfies ValueRule;
const STRING_LIST_RULE = { kind: "array", element: STRING_RULE } as const satisfies ValueRule;
const NULLABLE_STRING_LIST_RULE = {
  kind: "array",
  element: STRING_RULE,
  nullable: true,
} as const satisfies ValueRule;

const CATEGORIZATION_PROVENANCE_RULE = {
  kind: "mapping",
  fields: {
    answering_model: NULLABLE_STRING_RULE,
    prompt_version: STRING_RULE,
    category_rules_version: STRING_RULE,
    input_hash: NULLABLE_STRING_RULE,
    proposed_primary_category: NULLABLE_STRING_RULE,
    disagreement: { kind: "boolean" },
    decision_reason: STRING_RULE,
    decision_evidence: STRING_LIST_RULE,
    category_candidates: STRING_LIST_RULE,
    contrastive_reason: NULLABLE_STRING_RULE,
    review_reason: NULLABLE_STRING_RULE,
    review_resume_lifecycle: {
      kind: "mapping",
      nullable: true,
      fields: {
        status: { kind: "string", values: ["curated", "landmark"] },
        reason: NULLABLE_STRING_RULE,
      },
      required: ["status"],
    },
  },
  required: [
    "answering_model",
    "prompt_version",
    "category_rules_version",
    "input_hash",
    "proposed_primary_category",
    "disagreement",
    "decision_reason",
    "decision_evidence",
    "category_candidates",
    "contrastive_reason",
  ],
} as const satisfies ValueRule;

const PROCESSING_COMMAND_RULE = {
  kind: "mapping",
  fields: {
    status: { kind: "string", values: ["pending", "done", "deferred", "failed", "skipped"] },
    updated_at: NULLABLE_STRING_RULE,
    cause: {
      kind: "mapping",
      nullable: true,
      fields: { type: STRING_RULE, message: STRING_RULE },
      required: ["type", "message"],
    },
    next_retry_at: NULLABLE_STRING_RULE,
    attempts: { kind: "number" },
    prompt_version: STRING_RULE,
    category_rules_version: STRING_RULE,
    classification: CATEGORIZATION_PROVENANCE_RULE,
  },
  required: ["status", "updated_at"],
} as const satisfies ValueRule;

const PATCH_VALUE_RULES = {
  kind: {
    kind: "string",
    values: ["github-repo", "website", "article", "paper", "tool"],
  },
  name: STRING_RULE,
  canonical_url: STRING_RULE,
  identity: {
    kind: "mapping",
    fields: { github_repo: STRING_RULE },
  },
  provenance: {
    kind: "mapping",
    fields: {
      discoveries: {
        kind: "array",
        element: {
          kind: "mapping",
          fields: {
            id: STRING_RULE,
            discovered_at: STRING_RULE,
            source: {
              kind: "mapping",
              fields: {
                type: STRING_RULE,
                name: STRING_RULE,
                url: NULLABLE_STRING_RULE,
                repository: NULLABLE_STRING_RULE,
              },
              required: ["type", "name", "url", "repository"],
            },
            extraction: {
              kind: "mapping",
              fields: {
                mode: { kind: "string", values: ["direct", "scraped", "parsed"] },
                section_path: STRING_LIST_RULE,
                anchor_text: STRING_RULE,
                extracted_url: STRING_RULE,
                surrounding_text: NULLABLE_STRING_RULE,
                confidence: { kind: "string", values: ["high", "medium", "low"] },
              },
              required: [
                "mode",
                "section_path",
                "anchor_text",
                "extracted_url",
                "surrounding_text",
                "confidence",
              ],
            },
          },
          required: ["id", "discovered_at", "source", "extraction"],
        },
      },
    },
    required: ["discoveries"],
  },
  metadata: {
    kind: "mapping",
    fields: {
      github: {
        kind: "mapping",
        fields: {
          stars: NULLABLE_NUMBER_RULE,
          forks: NULLABLE_NUMBER_RULE,
          license: NULLABLE_STRING_RULE,
          archived: NULLABLE_BOOLEAN_RULE,
          created_at: NULLABLE_STRING_RULE,
          pushed_at: NULLABLE_STRING_RULE,
          description: NULLABLE_STRING_RULE,
          homepage: NULLABLE_STRING_RULE,
          topics: NULLABLE_STRING_LIST_RULE,
          full_name: NULLABLE_STRING_RULE,
          html_url: NULLABLE_STRING_RULE,
          last_checked_at: NULLABLE_STRING_RULE,
          readme: {
            kind: "mapping",
            nullable: true,
            fields: {
              fetched_at: NULLABLE_STRING_RULE,
              bytes: NULLABLE_NUMBER_RULE,
            },
            required: ["fetched_at", "bytes"],
          },
        },
        required: [
          "stars",
          "forks",
          "license",
          "archived",
          "pushed_at",
          "description",
          "homepage",
          "topics",
          "last_checked_at",
        ],
      },
    },
    required: ["github"],
  },
  insights: {
    kind: "mapping",
    fields: {
      summary: NULLABLE_STRING_RULE,
      why_it_matters: NULLABLE_STRING_RULE,
      mental_damage: NULLABLE_STRING_RULE,
      tags: STRING_LIST_RULE,
      confidence: {
        kind: "string",
        nullable: true,
        values: ["high", "medium", "low"],
      },
    },
    required: ["summary", "why_it_matters", "mental_damage", "tags", "confidence"],
  },
  curation: {
    kind: "mapping",
    fields: {
      status: { kind: "string", values: ["pending", "included", "excluded"] },
      reason: NULLABLE_STRING_RULE,
      evidence: STRING_LIST_RULE,
    },
    required: ["status", "reason", "evidence"],
  },
  placement: {
    kind: "mapping",
    fields: {
      primary_category: NULLABLE_STRING_RULE,
      secondary_categories: STRING_LIST_RULE,
      section: NULLABLE_STRING_RULE,
    },
    required: ["primary_category", "section"],
  },
  lifecycle: {
    kind: "mapping",
    fields: {
      status: {
        kind: "string",
        values: [
          "incubating",
          "promotion_candidate",
          "curated",
          "landmark",
          "watchlist",
          "archived",
          "needs_review",
        ],
      },
      reason: NULLABLE_STRING_RULE,
    },
    required: ["status"],
  },
  processing: {
    kind: "mapping",
    fields: {},
    additional: PROCESSING_COMMAND_RULE,
  },
} as const satisfies Record<Exclude<keyof CatalogItem, "id">, ValueRule>;

function describeRule(rule: ValueRule): string {
  const base =
    rule.kind === "mapping"
      ? "YAML mapping"
      : rule.kind === "array"
        ? "YAML list"
        : rule.kind === "string" && rule.values
          ? `one of ${rule.values.join(", ")}`
          : rule.kind;
  return rule.nullable ? `${base} or null` : base;
}

function validateValue(value: unknown, rule: ValueRule, fieldPath: string, filePath: string): void {
  if (value === null && rule.nullable) return;

  if (rule.kind === "string") {
    if (typeof value === "string" && (!rule.values || rule.values.includes(value))) return;
  } else if (rule.kind === "number") {
    if (typeof value === "number" && Number.isFinite(value)) return;
  } else if (rule.kind === "boolean") {
    if (typeof value === "boolean") return;
  } else if (rule.kind === "array") {
    if (Array.isArray(value)) {
      value.forEach((entry, index) => validateValue(entry, rule.element, `${fieldPath}[${index}]`, filePath));
      return;
    }
  } else if (isMapping(value)) {
    for (const requiredField of rule.required ?? []) {
      if (!Object.hasOwn(value, requiredField)) {
        throw new Error(
          `Invalid catalog override ${filePath}: ${fieldPath}.${requiredField} is required after applying the patch.`,
        );
      }
    }
    for (const [key, nestedValue] of Object.entries(value)) {
      const nestedRule = Object.hasOwn(rule.fields, key) ? rule.fields[key] : rule.additional;
      if (!nestedRule) {
        throw new Error(`Invalid catalog override ${filePath}: unexpected ${fieldPath}.${key}.`);
      }
      validateValue(nestedValue, nestedRule, `${fieldPath}.${key}`, filePath);
    }
    return;
  }

  throw new Error(`Invalid catalog override ${filePath}: ${fieldPath} must be a ${describeRule(rule)}.`);
}

function isMapping(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value) && !(value instanceof Date);
}

function requireMapping(value: unknown, fieldPath: string, filePath: string): Record<string, unknown> {
  if (!isMapping(value)) {
    throw new Error(`Invalid catalog override ${filePath}: ${fieldPath} must be a YAML mapping.`);
  }
  return value;
}

function requireNonEmptyString(value: unknown, fieldPath: string, filePath: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid catalog override ${filePath}: ${fieldPath} must be a non-empty string.`);
  }
  return value.trim();
}

function isCalendarDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function validateUpdatedAt(value: unknown, filePath: string): void {
  if (value instanceof Date) {
    if (!Number.isNaN(value.getTime()) && value.toISOString().endsWith("T00:00:00.000Z")) return;
  } else if (typeof value === "string" && isCalendarDate(value)) {
    return;
  }

  throw new Error(
    `Invalid catalog override ${filePath}: override.updated_at must be a valid YYYY-MM-DD date.`,
  );
}

function assertOnlyKeys(
  mapping: Record<string, unknown>,
  allowedKeys: object,
  fieldPath: string,
  filePath: string,
): void {
  const unexpectedKey = Object.keys(mapping).find((key) => !Object.hasOwn(allowedKeys, key));
  if (unexpectedKey) {
    throw new Error(`Invalid catalog override ${filePath}: unexpected ${fieldPath}.${unexpectedKey}.`);
  }
}

function parseCatalogOverride(filePath: string): CatalogOverride {
  const raw = requireMapping(readYaml<unknown>(filePath), "document", filePath);
  assertOnlyKeys(raw, OVERRIDE_TOP_LEVEL_KEYS, "document", filePath);

  const id = requireNonEmptyString(raw.id, "id", filePath);
  const audit = requireMapping(raw.override, "override", filePath);
  assertOnlyKeys(audit, AUDIT_METADATA_KEYS, "override", filePath);
  requireNonEmptyString(audit.reason, "override.reason", filePath);
  requireNonEmptyString(audit.updated_by, "override.updated_by", filePath);
  validateUpdatedAt(audit.updated_at, filePath);

  const patch = requireMapping(raw.patch, "patch", filePath);
  if (Object.keys(patch).length === 0) {
    throw new Error(`Invalid catalog override ${filePath}: patch must contain at least one catalog item field.`);
  }
  if (Object.hasOwn(patch, "id")) {
    throw new Error(`Invalid catalog override ${filePath}: patch.id must not mutate the catalog item id.`);
  }
  for (const key of Object.keys(patch)) {
    if (!Object.hasOwn(PATCHABLE_ITEM_KEYS, key)) {
      throw new Error(
        `Invalid catalog override ${filePath}: patch.${key} is not an allowed catalog item field.`,
      );
    }
  }

  return { id, patch, filePath };
}
function listOverrideFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  if (!fs.statSync(directory).isDirectory()) {
    throw new Error(`Invalid catalog override path ${directory}: expected a directory.`);
  }

  const files: string[] = [];
  const entries = fs
    .readdirSync(directory, { withFileTypes: true })
    .sort((left, right) => (left.name < right.name ? -1 : left.name > right.name ? 1 : 0));
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listOverrideFiles(entryPath));
    } else if (entry.isFile() && entry.name.endsWith(".yml")) {
      files.push(entryPath);
    }
  }
  return files;
}
export function loadCatalogOverrideIds(
  directory: string = CATALOG_ITEM_OVERRIDES_DIR,
): Set<string> {
  return new Set(listOverrideFiles(directory).map((filePath) => parseCatalogOverride(filePath).id));
}


function clonePatchValue(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(clonePatchValue);
  if (!isMapping(value)) return value;
  return Object.fromEntries(Object.entries(value).map(([key, nestedValue]) => [key, clonePatchValue(nestedValue)]));
}

function applyDeepPatch(generated: unknown, patch: unknown): unknown {
  if (!isMapping(patch)) return clonePatchValue(patch);

  const base = isMapping(generated) ? generated : {};
  const merged: Record<string, unknown> = { ...base };
  for (const [key, patchValue] of Object.entries(patch)) {
    Object.defineProperty(merged, key, {
      value: applyDeepPatch(base[key], patchValue),
      enumerable: true,
      configurable: true,
      writable: true,
    });
  }
  return merged;
}

export function applyCatalogOverrides(items: CatalogItem[], overrideDirectory: string): CatalogItem[] {
  const overrides = listOverrideFiles(overrideDirectory).map(parseCatalogOverride);
  const overrideById = new Map<string, CatalogOverride>();

  for (const override of overrides) {
    const previous = overrideById.get(override.id);
    if (previous) {
      throw new Error(
        `Duplicate override for catalog item ${override.id}: ${previous.filePath} and ${override.filePath}. Keep exactly one override per item id.`,
      );
    }
    overrideById.set(override.id, override);
  }

  const itemIds = new Set(items.map((item) => item.id));
  for (const override of overrides) {
    if (!itemIds.has(override.id)) {
      throw new Error(
        `Invalid catalog override ${override.filePath}: unknown item id ${override.id}. Generate or correct the catalog item before overriding it.`,
      );
    }
  }

  return items.map((item) => {
    const override = overrideById.get(item.id);
    if (!override) return item;
    const patchedItem = applyDeepPatch(item, override.patch) as Record<string, unknown>;
    for (const key of Object.keys(override.patch) as Array<Exclude<keyof CatalogItem, "id">>) {
      validateValue(patchedItem[key], PATCH_VALUE_RULES[key], `patch.${key}`, override.filePath);
    }
    return patchedItem as CatalogItem;
  });
}
