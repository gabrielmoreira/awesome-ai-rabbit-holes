// scripts/render.ts
// Renders README, rabbit-hole pages, and catalog/catalog.json.

import * as path from "node:path";
import { loadCatalogItems, loadCategories } from "./data.ts"
import { isLowSignalCatalogUrl } from "./core.ts"
import type { CatalogItem, Category } from "./types.ts"
import { writeTextFileIfChanged } from "../support/files.ts"
import { REPO_ROOT } from "../support/paths.ts"
import { parseGitHubUrl } from "../support/github.ts"


const README_INTRO = `# Awesome AI Rabbit Holes

A never-complete, already-outdated catalog of AI agents, tools, workflows, and rabbit holes for people who keep asking: "Am I behind?", "Is everyone else already using this?", "Should I rebuild my workflow again?", "Was this obvious to everyone but me?", and "Is this curiosity, productivity, anxiety, impostor syndrome, or just the slow road to burnout?"

Come for the tools. Stay for the FOMO, impostor syndrome, anxiety, and occasional reminder that you probably do not need to rebuild your entire workflow again today.

## How to use this repo

Do not try to read everything.

Pick one rabbit hole, follow it until it becomes useful or emotionally dangerous, then stop.`;

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

function renderToolBullet(item: CatalogItem): string {
  const summary = ensureSentence(item.insights.summary) ?? "No summary yet.";
  const starBadge = isKnownStarCount(item) ? ` \`⭐ ${formatStars(item.metadata.github.stars!)}\`` : "";
  return `- **[${displayNameForItem(item)}](${item.canonical_url})**${starBadge} ${summary}`;
}


function renderToolDetails(item: CatalogItem): string[] {
  const whyItMatters = ensureSentence(item.insights.why_it_matters);
  const punchline = ensureSentence(item.insights.mental_damage);
  const tagLine = item.insights.tags.length > 0
    ? item.insights.tags.map((tag) => `\`${tag}\``).join(" ")
    : null;

  if (!whyItMatters && !punchline && !tagLine) return [];

  const lines = ["<details><summary>More about</summary>", ""];

  if (whyItMatters) {
    lines.push(`  ${whyItMatters}`, "");
  }

  if (punchline) {
    lines.push(`  _${punchline}_`, "");
  }

  if (tagLine) {
    lines.push(`  ${tagLine}`, "");
  }

  if (lines[lines.length - 1] === "") lines.pop();
  lines.push("  </details>");
  return lines;
}

function renderToolList(items: CatalogItem[]): string[] {
  const lines: string[] = [];

  for (const item of [...items].sort(compareCatalogItemsByStars)) {
    const details = renderToolDetails(item);
    if (details.length === 0) {
      lines.push(renderToolBullet(item), "");
      continue;
    }

    lines.push(`${renderToolBullet(item)} ${details[0]}`);
    lines.push(...details.slice(1));
    lines.push("");
  }

  return lines;
}

export function renderReadme(_items: CatalogItem[], categories: Category[]): string {
  const lines: string[] = [README_INTRO, "", "## Rabbit Holes", ""];

  for (const cat of categories) {
    lines.push(
      `- [${cat.name}](docs/rabbit-holes/${cat.slug}.md) — ${firstSentence(cat.description)}`
    );
  }

  return lines.join("\n") + "\n";
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

  const lines: string[] = [
    `# ${category.name}`,
    "",
    category.description,
    "",
  ];

  if (activeItems.length > 0) {
    lines.push("## Tools & Resources", "", ...renderToolList(activeItems));
  }

  if (incubatingItems.length > 0) {
    lines.push(
      "## Incubating",
      "",
      "_These are new or low-traffic entries being watched._",
      "",
      ...renderToolList(incubatingItems)
    );
  }

  if (activeItems.length === 0 && incubatingItems.length === 0) {
    lines.push(
      "## Nothing Here Yet",
      "",
      "_Even the hype forgot to stop here._",
      ""
    );
  }

  return lines.join("\n").trimEnd();
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
