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

/**
 * True when the repository is gaining traction now: it shipped within 30 days
 * and adds at least HOT_STARS_PER_DAY stars a day over its lifetime.
 */
function resolveHotSignal(item: CatalogItem, snapshotMs: number | null): boolean {
  if (!isGitHubBacked(item) || !isKnownStarCount(item)) return false;
  if (resolveItemActivityBucket(item, snapshotMs) !== "updated_30d") return false;
  const createdMs = parseIsoMs(item.metadata.github.created_at ?? null);
  if (createdMs === null || snapshotMs === null) return false;
  const ageDays = Math.max(HOT_MIN_AGE_DAYS, (snapshotMs - createdMs) / DAY_MS);
  return item.metadata.github.stars! / ageDays >= HOT_STARS_PER_DAY;
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
    isHot: resolveHotSignal(item, snapshotMs),
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

/** Entries a section shows before folding the rest into its expandable panel. */
const SECTION_TOP_N = 30;
/** Section name used for entries the classifier never gave a section. */
const UNSECTIONED_SECTION_NAME = "Others";
/**
 * The 🔥 badge means "gaining traction right now", computed from stored signals
 * instead of inherited from the source list: the repository must have shipped
 * within 30 days and be adding at least HOT_STARS_PER_DAY stars a day since it
 * was created. A floor on the age keeps a one-day-old repo from dividing by
 * almost zero.
 */
const HOT_STARS_PER_DAY = 20;
const HOT_MIN_AGE_DAYS = 14;

/**
 * GitHub's heading anchor: lowercase, drop punctuation, every space becomes a
 * hyphen (so "a, b & c" keeps the double hyphen the '&' leaves behind).
 */
function markdownHeadingAnchor(text: string): string {
  return text.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s/g, "-");
}

export function renderRabbitHolePage(
  category: Category,
  items: CatalogItem[]
): string {
  const snapshotMs = parseIsoMs(resolveCatalogSnapshotTimestamp(items));
  const categoryItems = items.filter(
    (item) => shouldRenderCatalogItem(item) && item.placement.primary_category === category.id
  );
  // `needs_review` work stays off the published page until a human clears it.
  const published = categoryItems.filter((item) => item.lifecycle.status !== "needs_review");
  const ranked = [...published].sort(compareCatalogItemsByStars);

  const grouped = new Map<string, CatalogItem[]>();
  for (const item of ranked) {
    const name = item.placement.section?.trim() || UNSECTIONED_SECTION_NAME;
    grouped.set(name, [...(grouped.get(name) ?? []), item]);
  }

  // Declared order first, then any section name the classifier invented (sorted,
  // so output stays deterministic), then the unsectioned remainder last.
  const declared = category.sections ?? [];
  const orderedNames = [
    ...declared.filter((name) => grouped.has(name)),
    ...[...grouped.keys()]
      .filter((name) => !declared.includes(name) && name !== UNSECTIONED_SECTION_NAME)
      .sort(),
    ...(grouped.has(UNSECTIONED_SECTION_NAME) ? [UNSECTIONED_SECTION_NAME] : []),
  ];

  const sections = orderedNames.map((name) => {
    const sectionItems = grouped.get(name) ?? [];
    return {
      name,
      anchor: markdownHeadingAnchor(name),
      totalCount: sectionItems.length,
      visibleItems: sectionItems.slice(0, SECTION_TOP_N).map((item) => buildToolBulletViewModel(item, snapshotMs)),
      hasOverflow: sectionItems.length > SECTION_TOP_N,
      overflowCount: Math.max(0, sectionItems.length - SECTION_TOP_N),
      overflowItems: sectionItems.slice(SECTION_TOP_N).map((item) => buildToolBulletViewModel(item, snapshotMs)),
    };
  });

  const viewModel: CatalogCategoryPageTemplateViewModel = {
    categoryName: category.name,
    categoryDescription: category.description,
    totalCount: published.length,
    topN: SECTION_TOP_N,
    sectionCount: sections.length,
    hasSections: sections.length > 0,
    sections,
    isEmpty: sections.length === 0,
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
