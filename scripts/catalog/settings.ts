import type { AppSettings } from "./types.ts"
import { CONFIG_SETTINGS_PATH } from "../support/paths.ts"
import { readYamlIfExists } from "../support/yaml.ts"

export type { AppSettings };

export const DEFAULT_SETTINGS: AppSettings = {
  promotion: { incubating_until_stars: 150 },
  github: { metadata_refresh_days: 7 },
  budgets: { discover_minutes: 10, stars_minutes: 10, categorize_minutes: 60 },
  concurrency: { github: 4, site: 3, llm: 6 },
};

const MAX_CONCURRENCY = 8;

function asObject(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

function asMapping(value: unknown, source: string): Record<string, unknown> {
  if (value === null || value === undefined) return {};
  if (typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`Validation error: expected ${source} to contain a YAML mapping.`);
  }
  return value as Record<string, unknown>;
}

function enforcePositiveConcurrency(value: unknown, field: string, fallback: number): number {
  if (value === undefined || value === null || value === "") return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) {
    throw new Error(`concurrency value for ${field} must be positive`);
  }
  return Math.min(MAX_CONCURRENCY, Math.max(1, Math.floor(parsed)));
}

function enforcePositiveBudget(value: unknown, field: string, fallback: number): number {
  if (value === undefined || value === null || value === "") return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`budget value for ${field} must be positive`);
  }
  return Math.floor(parsed);
}

function readSettingsFile(): Partial<AppSettings> {
  const raw = readYamlIfExists<unknown>(CONFIG_SETTINGS_PATH, {});
  return asMapping(raw, CONFIG_SETTINGS_PATH) as Partial<AppSettings>;
}

function lookupOverride(source: Record<string, unknown>, ...keys: string[]): unknown {
  for (const key of keys) {
    if (source[key] !== undefined) return source[key];
  }
  return undefined;
}

export function loadSettings(
  overrides: Partial<AppSettings & Record<string, unknown>> = {},
  env: NodeJS.ProcessEnv = process.env,
): AppSettings {
  return loadSettingsFromRaw(readSettingsFile(), overrides, env);
}

export function loadSettingsFromRaw(
  fileSettings: Partial<AppSettings>,
  overrides: Partial<AppSettings & Record<string, unknown>> = {},
  env: NodeJS.ProcessEnv = process.env,
): AppSettings {
  const fileRoot = asMapping(fileSettings, "settings");
  const overrideObject = asObject(overrides);
  const promotion = { ...DEFAULT_SETTINGS.promotion, ...asMapping(fileRoot.promotion, "settings.promotion"), ...asObject(overrides.promotion) };
  const github = { ...DEFAULT_SETTINGS.github, ...asMapping(fileRoot.github, "settings.github"), ...asObject(overrides.github) };
  const budgetsRaw = { ...DEFAULT_SETTINGS.budgets, ...asMapping(fileRoot.budgets, "settings.budgets"), ...asObject(overrides.budgets) };
  const concurrencyRaw = { ...DEFAULT_SETTINGS.concurrency, ...asMapping(fileRoot.concurrency, "settings.concurrency"), ...asObject(overrides.concurrency) };
  const envSource: Record<string, unknown> = { ...env, ...overrideObject };
  return {
    promotion: {
      incubating_until_stars: enforcePositiveBudget(
        promotion.incubating_until_stars,
        "promotion.incubating_until_stars",
        DEFAULT_SETTINGS.promotion.incubating_until_stars,
      ),
    },
    github: {
      metadata_refresh_days: enforcePositiveBudget(
        github.metadata_refresh_days,
        "github.metadata_refresh_days",
        DEFAULT_SETTINGS.github.metadata_refresh_days,
      ),
    },
    budgets: {
      discover_minutes: enforcePositiveBudget(
        lookupOverride(envSource, "CATALOG_DISCOVER_BUDGET_MINUTES"),
        "budgets.discover_minutes",
        enforcePositiveBudget(budgetsRaw.discover_minutes, "budgets.discover_minutes", DEFAULT_SETTINGS.budgets.discover_minutes),
      ),
      stars_minutes: enforcePositiveBudget(
        lookupOverride(envSource, "CATALOG_STARS_BUDGET_MINUTES"),
        "budgets.stars_minutes",
        enforcePositiveBudget(budgetsRaw.stars_minutes, "budgets.stars_minutes", DEFAULT_SETTINGS.budgets.stars_minutes),
      ),
      categorize_minutes: enforcePositiveBudget(
        lookupOverride(envSource, "CATALOG_CATEGORIZE_BUDGET_MINUTES"),
        "budgets.categorize_minutes",
        enforcePositiveBudget(
          budgetsRaw.categorize_minutes,
          "budgets.categorize_minutes",
          DEFAULT_SETTINGS.budgets.categorize_minutes,
        ),
      ),
    },
    concurrency: {
      github: enforcePositiveConcurrency(
        lookupOverride(envSource, "CATALOG_GITHUB_CONCURRENCY"),
        "github",
        enforcePositiveConcurrency(concurrencyRaw.github, "github", DEFAULT_SETTINGS.concurrency.github),
      ),
      site: enforcePositiveConcurrency(
        lookupOverride(envSource, "CATALOG_SITE_CONCURRENCY"),
        "site",
        enforcePositiveConcurrency(concurrencyRaw.site, "site", DEFAULT_SETTINGS.concurrency.site),
      ),
      llm: enforcePositiveConcurrency(
        lookupOverride(envSource, "CATALOG_LLM_CONCURRENCY"),
        "llm",
        enforcePositiveConcurrency(concurrencyRaw.llm, "llm", DEFAULT_SETTINGS.concurrency.llm),
      ),
    },
  };
}