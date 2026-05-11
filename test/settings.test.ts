import { describe, expect, it } from "vitest";
import { loadSettings, loadSettingsFromRaw, DEFAULT_SETTINGS, type AppSettings } from "../scripts/catalog/settings.js";
import { readYaml } from "../scripts/support/yaml.js";

const EMPTY_ENV = {} as NodeJS.ProcessEnv;
const okMinimal: AppSettings = {
  promotion: { ...DEFAULT_SETTINGS.promotion },
  github: { ...DEFAULT_SETTINGS.github },
  budgets: { ...DEFAULT_SETTINGS.budgets },
  concurrency: { ...DEFAULT_SETTINGS.concurrency },
};

describe("settings schema and safe defaults", () => {
  it("rejects negative concurrency", () => {
    expect(() => loadSettings({ ...okMinimal, concurrency: { github: -4 } } as any, EMPTY_ENV)).toThrow();
  });

  it("clamps concurrency to >= 1", () => {
    const s = loadSettings({ ...okMinimal, concurrency: { github: 0, llm: 0 } } as any, EMPTY_ENV);
    expect(s.concurrency.github).toBeGreaterThanOrEqual(1);
    expect(s.concurrency.llm).toBeGreaterThanOrEqual(1);
  });

  it("uses defaults when nothing passed", () => {
    const s = loadSettings({}, EMPTY_ENV);
    expect(s.budgets.categorize_minutes).toBe(DEFAULT_SETTINGS.budgets.categorize_minutes);
    expect(s.concurrency.github).toBe(DEFAULT_SETTINGS.concurrency.github);
    expect(s.concurrency.llm).toBe(DEFAULT_SETTINGS.concurrency.llm);
    expect("model_probe" in s.concurrency).toBe(false);
  });

  it("respects explicit github concurrency env overrides", () => {
    const s = loadSettings({}, { CATALOG_GITHUB_CONCURRENCY: "8" } as NodeJS.ProcessEnv);
    expect(s.concurrency.github).toBe(8);
    expect(s.concurrency.llm).toBeGreaterThanOrEqual(1);
  });

  it("ignores removed legacy env aliases", () => {
    const s = loadSettings({}, { CONCURRENCY_GITHUB: "8", CATALOG_AI_CONCURRENCY: "7" } as NodeJS.ProcessEnv);
    expect(s.concurrency.github).toBe(DEFAULT_SETTINGS.concurrency.github);
    expect(s.concurrency.llm).toBe(DEFAULT_SETTINGS.concurrency.llm);
  });

  it("ignores removed model probe env overrides", () => {
    const s = loadSettings({}, { CATALOG_MODEL_PROBE_CONCURRENCY: "3" } as NodeJS.ProcessEnv);
    expect(s.concurrency).toEqual(DEFAULT_SETTINGS.concurrency);
  });

  it("rejects malformed settings roots instead of silently using defaults", () => {
    expect(() => loadSettingsFromRaw([] as any, {}, EMPTY_ENV)).toThrow(/yaml mapping/i);
  });

  it("rejects malformed nested settings sections instead of silently using defaults", () => {
    expect(() => loadSettingsFromRaw({ budgets: [] } as any, {}, EMPTY_ENV)).toThrow(/settings\.budgets/i);
  });

  it("reads budgets and concurrency from config/settings.yml", () => {
    const s = loadSettingsFromRaw({
      promotion: { incubating_until_stars: 333 },
      github: { metadata_refresh_days: 11 },
      budgets: { discover_minutes: 3, stars_minutes: 4, categorize_minutes: 5 },
      concurrency: { github: 6, site: 3, llm: 2 },
    }, {}, EMPTY_ENV);

    expect(s.promotion.incubating_until_stars).toBe(333);
    expect(s.github.metadata_refresh_days).toBe(11);
    expect(s.budgets.discover_minutes).toBe(3);
    expect(s.budgets.stars_minutes).toBe(4);
    expect(s.budgets.categorize_minutes).toBe(5);
    expect(s.concurrency.github).toBe(6);
    expect(s.concurrency.site).toBe(3);
    expect(s.concurrency.llm).toBe(2);
    expect("model_probe" in s.concurrency).toBe(false);
  });

  it("supports current env override names for local runs", () => {
    const s = loadSettings({}, {
      CATALOG_GITHUB_CONCURRENCY: "7",
      CATALOG_SITE_CONCURRENCY: "5",
      CATALOG_LLM_CONCURRENCY: "2",
      CATALOG_DISCOVER_BUDGET_MINUTES: "12",
      CATALOG_STARS_BUDGET_MINUTES: "13",
      CATALOG_CATEGORIZE_BUDGET_MINUTES: "14",
    } as NodeJS.ProcessEnv);

    expect(s.concurrency.github).toBe(7);
    expect(s.concurrency.site).toBe(5);
    expect(s.concurrency.llm).toBe(2);
    expect(s.budgets.discover_minutes).toBe(12);
    expect(s.budgets.stars_minutes).toBe(13);
    expect(s.budgets.categorize_minutes).toBe(14);
  });

  it("keeps explicit env overrides ahead of nested override objects", () => {
    const s = loadSettingsFromRaw(
      { budgets: { discover_minutes: 20 }, concurrency: { github: 3 } } as any,
      { budgets: { discover_minutes: 30 }, concurrency: { github: 6 } } as any,
      { CATALOG_DISCOVER_BUDGET_MINUTES: "5", CATALOG_GITHUB_CONCURRENCY: "7" },
    );

    expect(s.budgets.discover_minutes).toBe(5);
    expect(s.concurrency.github).toBe(7);
  });

  it("keeps config settings aligned with runtime defaults", () => {
    const fileSettings = readYaml<unknown>("config/settings.yml");
    expect(loadSettingsFromRaw(fileSettings as Partial<AppSettings>, {}, EMPTY_ENV)).toEqual(DEFAULT_SETTINGS);
  });
});