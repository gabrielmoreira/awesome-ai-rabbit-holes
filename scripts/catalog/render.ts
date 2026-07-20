// scripts/render.ts
// Renders README, rabbit-hole pages, and catalog/catalog.json.

import * as fs from "node:fs";
import * as path from "node:path";
import { loadCatalogItems, loadCategories } from "./data.ts";
import { isLowSignalCatalogUrl } from "./core.ts";
import { resolveCatalogDisplayName } from "./display-names.ts";
import {
  renderCatalogCategoryPageTemplate,
  renderCatalogReadmeTemplate,
  type CatalogCategoryItemTemplateViewModel,
  type CatalogCategoryPageTemplateViewModel,
  type CatalogReadmeTemplateViewModel,
} from "./templates.ts";
import type { CatalogItem, Category } from "./types.ts";
import { writeTextFileIfChanged } from "../support/files.ts";
import { REPO_ROOT } from "../support/paths.ts";
import { parseGitHubUrl } from "../support/github.ts";
const RABBIT_HOLES_DIRECTORY = path.join(REPO_ROOT, "docs", "rabbit-holes");



function ensureSentence(text: string | null): string | null {
  if (typeof text !== "string") return null;
  const trimmed = text.trim();
  if (trimmed.length === 0) return null;
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function firstSentence(text: string): string {
  const trimmed = text.trim();
  const match = trimmed.match(/^.*?[.!?](?=\s|$)/);
  return (match ? match[0] : trimmed).trim();
}

function isGitHubBacked(item: CatalogItem): boolean {
  return Boolean(item.identity.github_repo) || Boolean(parseGitHubUrl(item.canonical_url));
}

type RepoActivityBucket = "updated_30d" | "updated_90d" | "updated_180d" | "updated_365d" | "inactive";

const DAY_MS = 24 * 60 * 60 * 1000;

function parseIsoMs(value: string | null): number | null {
  if (!value) return null;
  const ms = Date.parse(value);
  return Number.isFinite(ms) ? ms : null;
}

function resolveRepoActivityBucket(
  pushedAt: string | null,
  checkedAt: string | null,
  snapshotMs: number | null,
): RepoActivityBucket | null {
  const pushedAtMs = parseIsoMs(pushedAt);
  const checkedAtMs = parseIsoMs(checkedAt);
  if (pushedAtMs === null || checkedAtMs === null || snapshotMs === null) return null;

  const effectiveSnapshotMs = Math.max(snapshotMs, checkedAtMs);
  const ageDays = Math.max(0, effectiveSnapshotMs - pushedAtMs) / DAY_MS;
  if (ageDays <= 30) return "updated_30d";
  if (ageDays <= 90) return "updated_90d";
  if (ageDays <= 180) return "updated_180d";
  if (ageDays <= 365) return "updated_365d";
  return "inactive";
}

function formatRepoActivityLabel(bucket: RepoActivityBucket): string {
  switch (bucket) {
    case "updated_30d":
      return "updated ≤30d";
    case "updated_90d":
      return "updated ≤90d";
    case "updated_180d":
      return "updated ≤180d";
    case "updated_365d":
      return "updated ≤1y";
    case "inactive":
      return "updated >1y";
  }
}


function resolveCatalogSnapshotTimestamp(items: CatalogItem[]): string | null {
  const checkedAts = items
    .map((item) => item.metadata.github.last_checked_at)
    .filter((value): value is string => typeof value === "string" && value.length > 0)
    .sort();
  return checkedAts.length > 0 ? checkedAts[checkedAts.length - 1] : null;
}

function resolveItemActivityBucket(item: CatalogItem, snapshotMs: number | null): RepoActivityBucket | null {
  return resolveRepoActivityBucket(item.metadata.github.pushed_at, item.metadata.github.last_checked_at, snapshotMs);
}


function shouldRenderCatalogItem(item: CatalogItem): boolean {
  return item.curation.status === "included" && !isLowSignalCatalogUrl(item.canonical_url);
}

function isKnownStarCount(item: CatalogItem): boolean {
  return isGitHubBacked(item) && item.metadata.github.stars !== null && Number.isFinite(item.metadata.github.stars);
}


function displayNameForItem(item: CatalogItem): string {
  return resolveCatalogDisplayName(item);
}

function compareCatalogItemsByStars(a: CatalogItem, b: CatalogItem): number {
  const githubDelta = Number(isGitHubBacked(b)) - Number(isGitHubBacked(a));
  if (githubDelta !== 0) return githubDelta;
  const knownStarDelta = Number(isKnownStarCount(b)) - Number(isKnownStarCount(a));
  if (knownStarDelta !== 0) return knownStarDelta;
  const starsA = a.metadata.github.stars ?? -1;
  const starsB = b.metadata.github.stars ?? -1;
  if (starsA !== starsB) return starsB - starsA;
  const byName = displayNameForItem(a).localeCompare(displayNameForItem(b));
  if (byName !== 0) return byName;
  return a.canonical_url.localeCompare(b.canonical_url);
}

function formatStars(stars: number): string {
  if (stars >= 1_000_000) {
    return `${(stars / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (stars >= 1_000) {
    return `${(stars / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(stars);
}

function buildToolBulletViewModel(
  item: CatalogItem,
  snapshotMs: number | null,
): CatalogCategoryItemTemplateViewModel {
  const activityBucket = resolveItemActivityBucket(item, snapshotMs);
  const whyItMatters = ensureSentence(item.insights.why_it_matters);
  const mentalDamage = ensureSentence(item.insights.mental_damage);

  return {
    name: displayNameForItem(item),
    url: item.canonical_url,
    summary: ensureSentence(item.insights.summary) ?? "No summary yet.",
    hasStars: isKnownStarCount(item),
    starsLabel: isKnownStarCount(item) ? formatStars(item.metadata.github.stars!) : null,
    hasActivity: activityBucket !== null,
    activityLabel: activityBucket ? formatRepoActivityLabel(activityBucket) : null,
    hasDetails: Boolean(whyItMatters || mentalDamage || item.insights.tags.length > 0),
    hasWhyItMatters: whyItMatters !== null,
    whyItMatters,
    hasMentalDamage: mentalDamage !== null,
    mentalDamage,
    hasTags: item.insights.tags.length > 0,
    tags: item.insights.tags,
  };
}

function buildToolListViewModel(items: CatalogItem[], snapshotMs: number | null): CatalogCategoryItemTemplateViewModel[] {
  return [...items].sort(compareCatalogItemsByStars).map((item) => buildToolBulletViewModel(item, snapshotMs));
}

export function renderReadme(_items: CatalogItem[], categories: Category[]): string {
  const viewModel: CatalogReadmeTemplateViewModel = {
    rabbitHoles: categories.map((category) => ({
      name: category.name,
      slug: category.slug,
      description: firstSentence(category.description),
    })),
  };

  return renderCatalogReadmeTemplate(viewModel);
}

export function renderRabbitHolePage(
  category: Category,
  items: CatalogItem[]
): string {
  const snapshotMs = parseIsoMs(resolveCatalogSnapshotTimestamp(items));
  const categoryItems = items.filter(
    (item) => shouldRenderCatalogItem(item) && item.placement.primary_category === category.id
  );

  const activeItems = [...categoryItems.filter(
    (item) => item.lifecycle.status !== "incubating" && item.lifecycle.status !== "needs_review"
  )].sort(compareCatalogItemsByStars);
  const incubatingItems = [...categoryItems.filter(
    (item) => item.lifecycle.status === "incubating"
  )].sort(compareCatalogItemsByStars);

  const viewModel: CatalogCategoryPageTemplateViewModel = {
    categoryName: category.name,
    categoryDescription: category.description,
    hasActiveItems: activeItems.length > 0,
    activeItems: buildToolListViewModel(activeItems, snapshotMs),
    hasIncubatingItems: incubatingItems.length > 0,
    incubatingItems: buildToolListViewModel(incubatingItems, snapshotMs),
    isEmpty: activeItems.length === 0 && incubatingItems.length === 0,
  };

  return renderCatalogCategoryPageTemplate(viewModel);
}

export interface SiteCatalogItem {
  id: string;
  kind: string;
  name: string;
  canonical_url: string;
  summary: string | null;
  tags: string[];
  primary_category: string | null;
  lifecycle_status: string;
  stars: number | null;
  pushed_at: string | null;
  activity_bucket: RepoActivityBucket | null;
}

export interface SiteCatalog {
  generated_at: string | null;
  items: SiteCatalogItem[];
}

export function renderSiteCatalog(items: CatalogItem[]): SiteCatalog {
  // Derive `generated_at` from the latest `last_checked_at` of any item so
  // that the rendered output is deterministic across runs (a wall-clock
  // `new Date()` would make `check-generated-docs.yml` always report drift,
  // and would defeat the "render output is stable across runs" guarantee).
  const latest = resolveCatalogSnapshotTimestamp(items);
  const snapshotMs = parseIsoMs(latest);

  const sortedItems = [...items]
    .filter(shouldRenderCatalogItem)
    .sort(compareCatalogItemsByStars);

  return {
    generated_at: latest,
    items: sortedItems.map((item) => ({
      id: item.id,
      kind: item.kind,
      name: displayNameForItem(item),
      canonical_url: item.canonical_url,
      summary: item.insights.summary,
      tags: item.insights.tags,
      primary_category: item.placement.primary_category,
      lifecycle_status: item.lifecycle.status,
      stars: item.metadata.github.stars,
      pushed_at: item.metadata.github.pushed_at,
      activity_bucket: resolveItemActivityBucket(item, snapshotMs),
    })),
  };
}

export function writeReadme(content: string): void {
  writeTextFileIfChanged(path.join(REPO_ROOT, "README.md"), content);
}

export function writeRabbitHolePage(slug: string, content: string): void {
  writeTextFileIfChanged(path.join(RABBIT_HOLES_DIRECTORY, `${slug}.md`), content);
}

export function removeObsoleteRabbitHolePages(
  categories: readonly Pick<Category, "slug">[],
  docsDirectory = RABBIT_HOLES_DIRECTORY,
): void {
  if (!fs.existsSync(docsDirectory) || !fs.statSync(docsDirectory).isDirectory()) return;

  const expectedPages = new Set(categories.map((category) => `${category.slug}.md`));
  const obsoletePages = fs
    .readdirSync(docsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md") && !expectedPages.has(entry.name))
    .map((entry) => entry.name)
    .sort();

  for (const fileName of obsoletePages) {
    fs.rmSync(path.join(docsDirectory, fileName), { force: true });
  }
}

export function writeSiteCatalog(data: object): void {
  writeTextFileIfChanged(
    path.join(REPO_ROOT, "catalog", "catalog.json"),
    JSON.stringify(data, null, 2) + "\n"
  );
}

export async function runRender(): Promise<void> {
  const categories = loadCategories();
  const items = loadCatalogItems();

  writeReadme(renderReadme(items, categories));
  for (const category of categories) {
    writeRabbitHolePage(category.slug, renderRabbitHolePage(category, items));
  }
  removeObsoleteRabbitHolePages(categories);
  writeSiteCatalog(renderSiteCatalog(items));
}
