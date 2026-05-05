// scripts/render.ts
// Renders README, rabbit-hole pages, and catalog/catalog.json.

import * as path from "node:path";
import { loadCatalogItems, loadCategories } from "./data.ts";
import { isLowSignalCatalogUrl } from "./core.ts";
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
): RepoActivityBucket | null {
  const pushedAtMs = parseIsoMs(pushedAt);
  const checkedAtMs = parseIsoMs(checkedAt);
  if (pushedAtMs === null || checkedAtMs === null) return null;

  const ageDays = Math.max(0, checkedAtMs - pushedAtMs) / DAY_MS;
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

function resolveItemActivityBucket(item: CatalogItem): RepoActivityBucket | null {
  return resolveRepoActivityBucket(item.metadata.github.pushed_at, item.metadata.github.last_checked_at);
}


function shouldRenderCatalogItem(item: CatalogItem): boolean {
  return item.curation.status === "included" && !isLowSignalCatalogUrl(item.canonical_url);
}

function isKnownStarCount(item: CatalogItem): boolean {
  return isGitHubBacked(item) && item.metadata.github.stars !== null && Number.isFinite(item.metadata.github.stars);
}

function displayNameFromMarkdownLink(value: string): string | null {
  const match = value.match(/\[([^\]]+)\]\(https?:\/\/[^)\s]+\)/);
  return match?.[1]?.trim() || null;
}

function isLowSignalDisplayName(name: string): boolean {
  const normalized = name.trim().toLowerCase();
  return normalized.length === 0 ||
    /^(?:intro|introduction|overview|docs|documentation|readme|getting-started|welcome|viewform|image)$/.test(normalized) ||
    /^[a-f0-9]{24,}$/i.test(normalized) ||
    /^\d{4}\.\d{4,5}$/.test(normalized);
}

function displayNameForItem(item: CatalogItem): string {
  if (!isLowSignalDisplayName(item.name)) return item.name;
  for (const discovery of item.provenance.discoveries) {
    for (const segment of discovery.extraction.section_path) {
      const linkedName = displayNameFromMarkdownLink(segment);
      if (linkedName && !isLowSignalDisplayName(linkedName)) return linkedName;
    }

    const anchor = discovery.extraction.anchor_text;
    if (!isLowSignalDisplayName(anchor)) return anchor;
  }
  return item.name;
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

function buildToolBulletViewModel(item: CatalogItem): CatalogCategoryItemTemplateViewModel {
  const activityBucket = resolveItemActivityBucket(item);
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

function buildToolListViewModel(items: CatalogItem[]): CatalogCategoryItemTemplateViewModel[] {
  return [...items].sort(compareCatalogItemsByStars).map(buildToolBulletViewModel);
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
    activeItems: buildToolListViewModel(activeItems),
    hasIncubatingItems: incubatingItems.length > 0,
    incubatingItems: buildToolListViewModel(incubatingItems),
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
  const checkedAts = items
    .map((item) => item.metadata.github.last_checked_at)
    .filter((v): v is string => typeof v === "string" && v.length > 0)
    .sort();
  const latest = checkedAts.length > 0 ? checkedAts[checkedAts.length - 1] : null;

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
      activity_bucket: resolveItemActivityBucket(item),
    })),
  };
}

export function writeReadme(content: string): void {
  writeTextFileIfChanged(path.join(REPO_ROOT, "README.md"), content);
}

export function writeRabbitHolePage(slug: string, content: string): void {
  writeTextFileIfChanged(path.join(REPO_ROOT, "docs", "rabbit-holes", `${slug}.md`), content);
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
  writeSiteCatalog(renderSiteCatalog(items));
}
