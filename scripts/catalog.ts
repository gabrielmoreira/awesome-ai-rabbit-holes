// scripts/catalog.ts
// Main orchestrator. Owns update, refresh, validate.

import * as fs from "node:fs";
import * as path from "node:path";
import { readYaml, readYamlIfExists, writeYaml, yamlExists } from "./yaml.js";
import { parseGitHubUrl, fetchGitHubRepo } from "./github.js";
import {
  renderReadme,
  renderRabbitHolePage,
  renderSiteCatalog,
  writeReadme,
  writeRabbitHolePage,
  writeSiteCatalog,
} from "./render.js";
import type {
  Source,
  CatalogItem,
  Override,
  Category,
  CatalogConfig,
  ReviewReport,
  Discovery,
  LifecycleStatus,
  Insights,
} from "./types.js";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");

const DEFAULT_CONFIG: CatalogConfig = {
  promotion: { incubating_until_stars: 150 },
  github: { metadata_refresh_days: 7 },
  render: { include_source_credits: true },
};

// ─── Config ───────────────────────────────────────────────────────────────────

export function loadConfig(): CatalogConfig {
  const configPath = path.join(REPO_ROOT, "catalog", "config.yml");
  if (!fs.existsSync(configPath)) return DEFAULT_CONFIG;
  const raw = readYaml<Partial<CatalogConfig>>(configPath);
  return {
    promotion: { ...DEFAULT_CONFIG.promotion, ...raw.promotion },
    github: { ...DEFAULT_CONFIG.github, ...raw.github },
    render: { ...DEFAULT_CONFIG.render, ...raw.render },
  };
}

// ─── Load ──────────────────────────────────────────────────────────────────────

export function loadSources(): Source[] {
  const inboxPath = path.join(REPO_ROOT, "sources", "inbox.yml");
  if (!fs.existsSync(inboxPath)) return [];
  const raw = readYamlIfExists<Source[] | null>(inboxPath, null);
  if (!raw) return [];
  return raw;
}

export function loadCategories(): Category[] {
  const catPath = path.join(REPO_ROOT, "catalog", "categories.yml");
  if (!fs.existsSync(catPath)) return [];
  return readYamlIfExists<Category[]>(catPath, []);
}

export function loadCatalogItems(): CatalogItem[] {
  const itemsDir = path.join(REPO_ROOT, "catalog", "items");
  if (!fs.existsSync(itemsDir)) return [];
  return loadItemsFromDir(itemsDir);
}

function loadItemsFromDir(dir: string): CatalogItem[] {
  const items: CatalogItem[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      items.push(...loadItemsFromDir(path.join(dir, entry.name)));
    } else if (entry.name.endsWith(".yml") && entry.name !== ".gitkeep") {
      const item = readYaml<CatalogItem>(path.join(dir, entry.name));
      items.push(item);
    }
  }
  return items;
}

export function loadOverrides(): Override[] {
  const overridesDir = path.join(REPO_ROOT, "overrides", "catalog", "items");
  if (!fs.existsSync(overridesDir)) return [];
  return loadOverridesFromDir(overridesDir);
}

function loadOverridesFromDir(dir: string): Override[] {
  const overrides: Override[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      overrides.push(...loadOverridesFromDir(path.join(dir, entry.name)));
    } else if (entry.name.endsWith(".yml")) {
      const override = readYaml<Override>(path.join(dir, entry.name));
      overrides.push(override);
    }
  }
  return overrides;
}

// ─── Validate ─────────────────────────────────────────────────────────────────

export interface ValidationError {
  path: string;
  message: string;
}

export function validateSources(sources: Source[]): ValidationError[] {
  const errors: ValidationError[] = [];
  for (const [i, source] of sources.entries()) {
    if (!source.url) {
      errors.push({ path: `sources[${i}]`, message: "Source is missing required field: url" });
    }
  }
  return errors;
}

export function validateCatalogItem(item: CatalogItem): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!item.id) {
    errors.push({ path: item.id ?? "unknown", message: "Item missing required field: id" });
  }
  if (!item.canonical_url) {
    errors.push({ path: item.id, message: "Item missing required field: canonical_url" });
  }
  if (!item.provenance || !item.provenance.discoveries || item.provenance.discoveries.length === 0) {
    errors.push({ path: item.id, message: "Item missing required field: provenance.discoveries" });
  }

  return errors;
}

export function validateCatalogItems(items: CatalogItem[]): ValidationError[] {
  const errors: ValidationError[] = [];
  for (const item of items) {
    errors.push(...validateCatalogItem(item));
  }
  return errors;
}

export function validateOverride(override: Override, items: CatalogItem[]): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!override.id) {
    errors.push({ path: "override", message: "Override missing required field: id" });
  }
  if (!override.override?.reason) {
    errors.push({ path: override.id ?? "unknown", message: "Override missing required field: override.reason" });
  }

  const targetItem = items.find((item) => item.id === override.id);
  if (!targetItem) {
    errors.push({ path: override.id, message: `Override targets unknown item id: ${override.id}` });
  }

  // Check forbidden fields
  const patch = override.patch as Record<string, unknown>;
  const forbidden = ["id", "kind", "canonical_url", "identity"];
  for (const field of forbidden) {
    if (field in patch) {
      errors.push({ path: override.id, message: `Override cannot change forbidden field: ${field}` });
    }
  }

  return errors;
}

export async function cmdValidate(): Promise<void> {
  console.log("Validating catalog...");

  const sources = loadSources();
  const items = loadCatalogItems();
  const overrides = loadOverrides();

  const errors: ValidationError[] = [];

  // Validate sources
  const sourceErrors = validateSources(sources);
  errors.push(...sourceErrors);

  // Validate items
  const itemErrors = validateCatalogItems(items);
  errors.push(...itemErrors);

  // Validate overrides
  for (const override of overrides) {
    errors.push(...validateOverride(override, items));
  }

  if (errors.length > 0) {
    console.error(`\n❌ Validation failed with ${errors.length} error(s):\n`);
    for (const err of errors) {
      console.error(`  [${err.path}] ${err.message}`);
    }
    process.exit(1);
  }

  console.log(`✅ Catalog is valid (${items.length} items, ${sources.length} sources)`);
}

// ─── Discover ─────────────────────────────────────────────────────────────────

export function makeItemId(url: string): string {
  const github = parseGitHubUrl(url);
  if (github) {
    return `github__${github.owner.toLowerCase()}__${github.repo.toLowerCase()}`;
  }
  // Fallback: slugify the URL
  return url
    .replace(/^https?:\/\//, "")
    .replace(/[^a-z0-9]+/gi, "__")
    .toLowerCase();
}

export function makeItemPath(url: string): string {
  const github = parseGitHubUrl(url);
  if (github) {
    return path.join(
      REPO_ROOT,
      "catalog",
      "items",
      "github",
      github.owner,
      `${github.repo}.yml`
    );
  }
  const id = makeItemId(url);
  return path.join(REPO_ROOT, "catalog", "items", `${id}.yml`);
}

export function makeDiscoveryId(url: string, source: Source, date: string): string {
  const itemId = makeItemId(url);
  const mode = source.kind ?? "manual";
  return `discovery__${date}__${itemId}__${mode}`;
}

export function buildDiscovery(
  url: string,
  source: Source,
  discoveredAt: string,
  submitterName: string,
  submitterUrl: string | null
): Discovery {
  const date = discoveredAt.split("T")[0];
  return {
    id: makeDiscoveryId(url, source, date),
    discovered_at: discoveredAt,
    submitted_by: {
      type: "maintainer",
      name: submitterName,
      url: submitterUrl,
    },
    contribution: {
      type: "manual",
      url: null,
      number: null,
      author: {
        name: submitterName,
        url: submitterUrl,
      },
    },
    source: {
      type: source.kind ?? "direct-link",
      name: source.kind === "awesome-list" ? "Awesome list" : "Manual submission",
      url: source.kind === "awesome-list" ? source.url : null,
      repository: null,
    },
    extraction: {
      mode: "direct",
      section_path: ["inbox"],
      anchor_text: url,
      extracted_url: url,
      surrounding_text: source.note ?? null,
      confidence: "high",
    },
    credit: {
      label: submitterName,
      url: submitterUrl,
    },
  };
}

export function buildNewCatalogItem(url: string, source: Source, discoveredAt: string): CatalogItem {
  const github = parseGitHubUrl(url);
  const id = makeItemId(url);
  const name = github ? github.repo : url.split("/").pop() ?? url;
  const submitterName = "Gabriel Moreira";
  const submitterUrl = null;

  const discovery = buildDiscovery(url, source, discoveredAt, submitterName, submitterUrl);

  return {
    id,
    kind: github ? "github-repo" : "website",
    name,
    canonical_url: url,
    identity: github ? { github_repo: `${github.owner}/${github.repo}` } : {},
    provenance: {
      primary_credit: {
        label: submitterName,
        url: submitterUrl,
      },
      discoveries: [discovery],
    },
    metadata: {
      github: {
        stars: null,
        forks: null,
        license: null,
        archived: null,
        pushed_at: null,
        description: null,
        homepage: null,
        topics: null,
        last_checked_at: null,
      },
    },
    insights: {
      summary: null,
      why_it_matters: null,
      mental_damage: null,
      tags: [],
      confidence: null,
    },
    placement: {
      primary_category: null,
      section: null,
    },
    lifecycle: {
      status: "incubating",
    },
  };
}

// ─── Resolve ──────────────────────────────────────────────────────────────────

export function normalizeGitHubUrl(url: string): string {
  const match = url.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?(?:\/.*)?$/);
  if (match) {
    return `https://github.com/${match[1]}/${match[2]}`;
  }
  return url;
}

export function resolveSource(source: Source): { url: string; normalized: string } {
  const normalized = normalizeGitHubUrl(source.url);
  return { url: source.url, normalized };
}

// ─── Discover ─────────────────────────────────────────────────────────────────

export function discover(sources: Source[], existingItems: CatalogItem[]): {
  newItems: CatalogItem[];
  updatedItems: CatalogItem[];
} {
  const newItems: CatalogItem[] = [];
  const updatedItems: CatalogItem[] = [];
  const existingById = new Map(existingItems.map((item) => [item.id, item]));
  const discoveredAt = new Date().toISOString();

  for (const source of sources) {
    if (source.kind === "awesome-list") {
      // TODO: Phase 7 - extract links from awesome list
      // For now, catalog the awesome list itself
    }

    const { normalized } = resolveSource(source);
    const id = makeItemId(normalized);
    const existing = existingById.get(id);

    if (!existing) {
      // New item
      const item = buildNewCatalogItem(normalized, source, discoveredAt);
      newItems.push(item);
      existingById.set(id, item);
    } else {
      // Check if discovery already exists
      const discoveryId = makeDiscoveryId(normalized, source, discoveredAt.split("T")[0]);
      const alreadyDiscovered = existing.provenance.discoveries.some((d) => d.id === discoveryId);

      if (!alreadyDiscovered) {
        // Add new discovery to existing item
        const newDiscovery = buildDiscovery(normalized, source, discoveredAt, "Gabriel Moreira", null);
        const updated: CatalogItem = {
          ...existing,
          provenance: {
            ...existing.provenance,
            discoveries: [...existing.provenance.discoveries, newDiscovery],
          },
        };
        updatedItems.push(updated);
        existingById.set(id, updated);
      }
    }
  }

  return { newItems, updatedItems };
}

// ─── Enrich (GitHub metadata) ─────────────────────────────────────────────────

export async function enrichWithGitHub(
  item: CatalogItem,
  token?: string
): Promise<CatalogItem> {
  if (item.kind !== "github-repo" || !item.identity.github_repo) return item;

  const [owner, repo] = item.identity.github_repo.split("/");
  const data = await fetchGitHubRepo(owner, repo, token);

  if (!data) return item;

  return {
    ...item,
    metadata: {
      github: {
        stars: data.stars,
        forks: data.forks,
        license: data.license,
        archived: data.archived,
        pushed_at: data.pushed_at,
        description: data.description,
        homepage: data.homepage,
        topics: data.topics,
        last_checked_at: new Date().toISOString(),
      },
    },
  };
}

// ─── Lifecycle ────────────────────────────────────────────────────────────────

export function applyLifecycleRules(item: CatalogItem, config: CatalogConfig): CatalogItem {
  const { stars, archived } = item.metadata.github;
  const currentStatus = item.lifecycle.status;

  // Manual statuses always win (if set by override, they won't be touched here)
  if (currentStatus === "curated" || currentStatus === "landmark") {
    return item;
  }

  // Archived repo -> needs_review
  if (archived === true) {
    return {
      ...item,
      lifecycle: {
        status: "needs_review",
        reason: "Repository is archived",
      },
    };
  }

  // Stars-based rules
  if (stars !== null) {
    if (stars > config.promotion.incubating_until_stars && currentStatus === "incubating") {
      return {
        ...item,
        lifecycle: {
          status: "promotion_candidate",
          reason: `Stars (${stars}) exceeded threshold (${config.promotion.incubating_until_stars})`,
        },
      };
    }
    if (stars <= config.promotion.incubating_until_stars && currentStatus === "incubating") {
      return item; // Stay incubating
    }
  }

  return item;
}

// ─── Placement ────────────────────────────────────────────────────────────────

export function applyPlacement(
  item: CatalogItem,
  categories: Category[]
): CatalogItem {
  // If already has placement, keep it
  if (item.placement.primary_category) return item;

  // Deterministic rules based on tags
  const tags = item.insights.tags;
  const categoryIds = categories.map((c) => c.id);

  if (tags.includes("mcp") || tags.includes("mcp-server")) {
    if (categoryIds.includes("mcp")) {
      return { ...item, placement: { ...item.placement, primary_category: "mcp" } };
    }
  }

  // Check kind
  if (item.kind === "github-repo" && item.insights.tags.includes("awesome-list")) {
    if (categoryIds.includes("awesome-awesomes")) {
      return {
        ...item,
        placement: { ...item.placement, primary_category: "awesome-awesomes" },
      };
    }
  }

  return item;
}

// ─── Overrides ────────────────────────────────────────────────────────────────

export function applyOverride(item: CatalogItem, override: Override): CatalogItem {
  const patch = override.patch;

  let updated = { ...item };

  if (patch.insights) {
    updated = {
      ...updated,
      insights: {
        ...updated.insights,
        ...patch.insights,
      } as Insights,
    };
  }

  if (patch.placement) {
    updated = {
      ...updated,
      placement: {
        ...updated.placement,
        ...patch.placement,
      },
    };
  }

  if (patch.lifecycle) {
    updated = {
      ...updated,
      lifecycle: {
        ...updated.lifecycle,
        ...patch.lifecycle,
      },
    };
  }

  return updated;
}

export function applyOverrides(items: CatalogItem[], overrides: Override[]): CatalogItem[] {
  const overrideMap = new Map(overrides.map((o) => [o.id, o]));

  return items.map((item) => {
    const override = overrideMap.get(item.id);
    if (!override) return item;
    return applyOverride(item, override);
  });
}

// ─── Save ─────────────────────────────────────────────────────────────────────

export function saveCatalogItem(item: CatalogItem): void {
  const itemPath = makeItemPath(item.canonical_url);
  writeYaml(itemPath, item);
}

// ─── Render ───────────────────────────────────────────────────────────────────

export function render(items: CatalogItem[], categories: Category[], config: CatalogConfig): void {
  const { include_source_credits } = config.render;

  // Write README.md
  const readme = renderReadme(items, categories, include_source_credits);
  writeReadme(readme);

  // Write rabbit-hole pages
  for (const category of categories) {
    const page = renderRabbitHolePage(category, items, include_source_credits);
    writeRabbitHolePage(category.slug, page);
  }

  // Write site/catalog.json
  const siteCatalog = renderSiteCatalog(items);
  writeSiteCatalog(siteCatalog);
}

// ─── Review ───────────────────────────────────────────────────────────────────

export function buildReviewReport(
  newItems: CatalogItem[],
  updatedMetadataIds: string[],
  allItems: CatalogItem[]
): ReviewReport {
  const promotionCandidates = allItems
    .filter((item) => item.lifecycle.status === "promotion_candidate")
    .map((item) => item.id);

  const needsReview = allItems
    .filter((item) => item.lifecycle.status === "needs_review")
    .map((item) => item.id);

  const newSourceCredits: string[] = [];
  for (const item of newItems) {
    for (const discovery of item.provenance.discoveries) {
      newSourceCredits.push(discovery.credit.label);
    }
  }

  return {
    new_items: newItems.map((i) => i.id),
    updated_metadata: updatedMetadataIds,
    promotion_candidates: promotionCandidates,
    needs_review: needsReview,
    new_source_credits: [...new Set(newSourceCredits)],
  };
}

export function printReviewReport(report: ReviewReport): void {
  console.log("\n📋 Review Report");
  console.log("─".repeat(40));
  console.log(`New items:           ${report.new_items.length}`);
  console.log(`Updated metadata:    ${report.updated_metadata.length}`);
  console.log(`Promotion candidates: ${report.promotion_candidates.length}`);
  console.log(`Needs review:        ${report.needs_review.length}`);
  console.log(`New source credits:  ${report.new_source_credits.length}`);

  if (report.promotion_candidates.length > 0) {
    console.log("\n⭐ Promotion candidates:");
    for (const id of report.promotion_candidates) {
      console.log(`  - ${id}`);
    }
  }

  if (report.needs_review.length > 0) {
    console.log("\n⚠️  Needs review:");
    for (const id of report.needs_review) {
      console.log(`  - ${id}`);
    }
  }
}

// ─── Commands ─────────────────────────────────────────────────────────────────

export async function cmdRefresh(token?: string): Promise<void> {
  console.log("Refreshing catalog metadata...");
  const config = loadConfig();
  const items = loadCatalogItems();

  if (items.length === 0) {
    console.log("No items to refresh.");
    return;
  }

  const updatedIds: string[] = [];

  for (const item of items) {
    const refreshed = await enrichWithGitHub(item, token);
    if (refreshed !== item) {
      saveCatalogItem(refreshed);
      updatedIds.push(refreshed.id);
    }
  }

  // Apply lifecycle rules after refresh
  const refreshedItems = loadCatalogItems();
  for (const item of refreshedItems) {
    const withLifecycle = applyLifecycleRules(item, config);
    if (withLifecycle.lifecycle.status !== item.lifecycle.status) {
      saveCatalogItem(withLifecycle);
    }
  }

  console.log(`✅ Refreshed metadata for ${updatedIds.length} item(s)`);
}

export async function cmdUpdate(token?: string): Promise<void> {
  console.log("Running catalog update pipeline...");
  const config = loadConfig();

  // 1. Load
  const sources = loadSources();
  const categories = loadCategories();
  let existingItems = loadCatalogItems();
  const overrides = loadOverrides();

  // 2. Validate sources
  const sourceErrors = validateSources(sources);
  if (sourceErrors.length > 0) {
    console.error("❌ Source validation errors:");
    for (const err of sourceErrors) {
      console.error(`  [${err.path}] ${err.message}`);
    }
    process.exit(1);
  }

  // 3. Discover
  const { newItems, updatedItems } = discover(sources, existingItems);

  // 4. Enrich (fetch GitHub metadata for new items)
  const enrichedNewItems: CatalogItem[] = [];
  for (const item of newItems) {
    const enriched = await enrichWithGitHub(item, token);
    enrichedNewItems.push(enriched);
  }

  // 5. Apply lifecycle
  const allNewItems = enrichedNewItems.map((item) => applyLifecycleRules(item, config));
  const allUpdatedItems = updatedItems.map((item) => applyLifecycleRules(item, config));

  // 6. Save new/updated items
  for (const item of allNewItems) {
    saveCatalogItem(item);
  }
  for (const item of allUpdatedItems) {
    saveCatalogItem(item);
  }

  // 7. Load all items fresh (includes newly saved)
  existingItems = loadCatalogItems();

  // 8. Apply overrides
  let finalItems = applyOverrides(existingItems, overrides);

  // 9. Apply placement
  finalItems = finalItems.map((item) => applyPlacement(item, categories));

  // 10. Save final items with overrides/placement applied
  for (const item of finalItems) {
    saveCatalogItem(item);
  }

  // 11. Render
  render(finalItems, categories, config);

  // 12. Review report
  const report = buildReviewReport(
    allNewItems,
    allUpdatedItems.map((i) => i.id),
    finalItems
  );
  printReviewReport(report);

  // 13. Validate
  const itemErrors = validateCatalogItems(finalItems);
  if (itemErrors.length > 0) {
    console.error("\n❌ Catalog validation errors after update:");
    for (const err of itemErrors) {
      console.error(`  [${err.path}] ${err.message}`);
    }
    process.exit(1);
  }

  console.log(`\n✅ Update complete. ${finalItems.length} items in catalog.`);
}

// ─── CLI entry ─────────────────────────────────────────────────────────────────

const [, , command] = process.argv;

const token = process.env["GITHUB_TOKEN"];

if (command === "update") {
  cmdUpdate(token).catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else if (command === "refresh") {
  cmdRefresh(token).catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else if (command === "validate") {
  cmdValidate().catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else if (command !== undefined) {
  console.error(`Unknown command: ${command}`);
  console.error("Usage: npm run catalog -- [update|refresh|validate]");
  process.exit(1);
}
