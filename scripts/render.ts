// scripts/render.ts
// Renders README, rabbit-hole pages, and site/catalog.json.

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import type { CatalogItem, Category } from "./types.js";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const README_INTRO = `# Awesome AI Rabbit Holes

A never-complete, already-outdated catalog of AI agents, tools, workflows, and rabbit holes for people who keep asking: "Am I behind?", "Is everyone else already using this?", "Should I rebuild my workflow again?", "Was this obvious to everyone but me?", and "Is this curiosity, productivity, anxiety, impostor syndrome, or just the slow road to burnout?"

Come for the tools. Stay for the FOMO, impostor syndrome, anxiety, and occasional reminder that you probably do not need to rebuild your entire workflow again today.

## How to use this repo

Do not try to read everything.

Pick one rabbit hole, follow it until it becomes useful or emotionally dangerous, then stop.`;

const SOURCE_CREDITS_INTRO = `Humanity seems to be speedrunning a very weird AI casino: every new tool is another shiny slot machine, every benchmark is a jackpot animation, and somehow we keep pulling the lever while insisting this is productivity research. This catalog exists because someone had to keep track of the machines before we started calling the blinking lights a methodology.

For the full list of awesome lists, indexes, and source pages we shamelessly mined for rabbit holes, see the dedicated [Source Credits](docs/source-credits.md) page or browse the [Awesome Awesomes](docs/rabbit-holes/awesome-awesomes.md) rabbit hole.`;

// Source `type`s that represent an *external page* we discovered links from,
// as opposed to a manual submission. Only these belong on the public Source
// Credits page; submitter identity stays in structured provenance data.
const EXTERNAL_SOURCE_TYPES = new Set([
  "awesome-list",
  "article",
  "docs-page",
  "newsletter",
  "paper",
]);

export function renderReadme(
  items: CatalogItem[],
  categories: Category[],
  includeSourceCredits: boolean
): string {
  const lines: string[] = [README_INTRO, "", "## Rabbit Holes", ""];

  const categoriesWithItems = categories.filter((cat) =>
    items.some(
      (item) =>
        item.placement.primary_category === cat.id &&
        item.lifecycle.status !== "incubating" &&
        item.lifecycle.status !== "needs_review"
    )
  );

  for (const cat of categoriesWithItems) {
    lines.push(`- [${cat.name}](docs/rabbit-holes/${cat.slug}.md)`);
  }

  if (includeSourceCredits) {
    lines.push("", "## Source Credits", "", SOURCE_CREDITS_INTRO);
  }

  return lines.join("\n") + "\n";
}

export function renderRabbitHolePage(
  category: Category,
  items: CatalogItem[],
  includeSourceCredits: boolean
): string {
  const categoryItems = items.filter(
    (item) => item.placement.primary_category === category.id
  );

  const activeItems = categoryItems.filter(
    (item) => item.lifecycle.status !== "incubating" && item.lifecycle.status !== "needs_review"
  );
  const incubatingItems = categoryItems.filter(
    (item) => item.lifecycle.status === "incubating"
  );

  const lines: string[] = [
    `# ${category.name}`,
    "",
    category.description,
    "",
  ];

  if (activeItems.length > 0) {
    lines.push("## Tools & Resources", "");
    for (const item of activeItems) {
      lines.push(`### [${item.name}](${item.canonical_url})`, "");
      if (item.insights.summary) {
        lines.push(item.insights.summary, "");
      }
      if (item.insights.why_it_matters) {
        lines.push(`**Why it matters:** ${item.insights.why_it_matters}`, "");
      }
      if (item.insights.mental_damage) {
        lines.push(`> ${item.insights.mental_damage}`, "");
      }
      if (item.insights.tags.length > 0) {
        lines.push(item.insights.tags.map((t) => `\`${t}\``).join(" "), "");
      }
      if (includeSourceCredits) {
        const credit = item.provenance.primary_credit;
        if (credit.url) {
          lines.push(`*via [${credit.label}](${credit.url})*`, "");
        } else {
          lines.push(`*via ${credit.label}*`, "");
        }
      }
    }
  }

  if (incubatingItems.length > 0) {
    lines.push("## Incubating", "", "_These are new or low-traffic entries being watched._", "");
    for (const item of incubatingItems) {
      lines.push(`- [${item.name}](${item.canonical_url})`);
      if (item.insights.summary) {
        lines.push(`  ${item.insights.summary}`);
      }
    }
    lines.push("");
  }

  return lines.join("\n");
}

export function renderSiteCatalog(items: CatalogItem[]): object {
  return {
    generated_at: new Date().toISOString(),
    items: items.map((item) => ({
      id: item.id,
      kind: item.kind,
      name: item.name,
      canonical_url: item.canonical_url,
      summary: item.insights.summary,
      tags: item.insights.tags,
      primary_category: item.placement.primary_category,
      lifecycle_status: item.lifecycle.status,
      stars: item.metadata.github.stars,
      credit: item.provenance.primary_credit,
    })),
  };
}

function collectSourceCredits(
  items: CatalogItem[]
): Array<{ label: string; url: string | null }> {
  const seen = new Set<string>();
  const credits: Array<{ label: string; url: string | null }> = [];

  for (const item of items) {
    for (const discovery of item.provenance.discoveries) {
      if (!EXTERNAL_SOURCE_TYPES.has(discovery.source.type)) continue;
      const sourceUrl = discovery.source.url;
      const sourceName = discovery.source.name;
      // Dedupe on URL when present, otherwise on name.
      const key = sourceUrl ?? `name:${sourceName}`;
      if (seen.has(key)) continue;
      seen.add(key);
      credits.push({ label: sourceName, url: sourceUrl });
    }
  }

  return credits;
}

const SOURCE_CREDITS_PAGE_INTRO = `# Source Credits

This catalog did not emerge from divine inspiration. Most of the rabbit holes here were discovered by mining other people's awesome lists, indexes, articles, docs, and newsletters. The pages below did the curation work first; this catalog just remixes their findings into yet another rabbit hole.

If you maintain one of these and want to be removed, opened up with more detail, or merged with a sibling list, open an issue.`;

export function renderSourceCreditsPage(items: CatalogItem[]): string {
  const credits = collectSourceCredits(items);
  const lines: string[] = [SOURCE_CREDITS_PAGE_INTRO, "", "## Sources", ""];

  if (credits.length === 0) {
    lines.push("_No external source pages have been mined yet._", "");
  } else {
    for (const credit of credits) {
      if (credit.url) {
        lines.push(`- [${credit.label}](${credit.url})`);
      } else {
        lines.push(`- ${credit.label}`);
      }
    }
    lines.push("");
  }

  return lines.join("\n");
}

export function writeReadme(content: string): void {
  fs.writeFileSync(path.join(REPO_ROOT, "README.md"), content, "utf8");
}

export function writeRabbitHolePage(slug: string, content: string): void {
  const dir = path.join(REPO_ROOT, "docs", "rabbit-holes");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${slug}.md`), content, "utf8");
}

export function writeSourceCreditsPage(content: string): void {
  const dir = path.join(REPO_ROOT, "docs");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "source-credits.md"), content, "utf8");
}

export function writeSiteCatalog(data: object): void {
  const dir = path.join(REPO_ROOT, "site");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "catalog.json"), JSON.stringify(data, null, 2) + "\n", "utf8");
}
