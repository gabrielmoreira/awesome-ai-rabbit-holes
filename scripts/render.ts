// scripts/render.ts
// Renders README, rabbit-hole pages, and site/catalog.json.

import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { writeTextFileIfChanged } from "./files.ts";
import type { CatalogItem, Category } from "./types.ts";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

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

function compareCatalogItemsByStars(a: CatalogItem, b: CatalogItem): number {
  const starsA = a.metadata.github.stars ?? -1;
  const starsB = b.metadata.github.stars ?? -1;
  if (starsA !== starsB) return starsB - starsA;
  const byName = a.name.localeCompare(b.name);
  if (byName !== 0) return byName;
  return a.canonical_url.localeCompare(b.canonical_url);
}

function formatStars(stars: number | null): string {
  if (stars === null || !Number.isFinite(stars)) return "?";
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
  return `- **[${item.name}](${item.canonical_url})** \`⭐ ${formatStars(item.metadata.github.stars)}\` ${summary}`;
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
    (item) => item.curation.status === "included" && item.placement.primary_category === category.id
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

export type SiteCatalogItem = {
  id: string;
  kind: string;
  name: string;
  canonical_url: string;
  summary: string | null;
  tags: string[];
  primary_category: string | null;
  lifecycle_status: string;
  stars: number | null;
};

export type SiteCatalog = {
  generated_at: string | null;
  items: SiteCatalogItem[];
};

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
    .filter((item) => item.curation.status === "included")
    .sort(compareCatalogItemsByStars);

  return {
    generated_at: latest,
    items: sortedItems.map((item) => ({
      id: item.id,
      kind: item.kind,
      name: item.name,
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
    path.join(REPO_ROOT, "site", "catalog.json"),
    JSON.stringify(data, null, 2) + "\n"
  );
}
