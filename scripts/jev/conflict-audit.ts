#!/usr/bin/env node
/**
 * scripts/jev/conflict-audit.ts
 * Phase 1: Jev conflict detection across category boundary items.
 */

import * as fs from "node:fs";
import * as path from "node:path";
import * as yaml from "js-yaml";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Category {
  id: string;
  name: string;
  description: string;
  prompt: {
    instructions: string;
    use_when: string[];
    do_not_use_when: string[];
  };
  sections: string[];
}

interface CatalogItem {
  id: string;
  name: string;
  kind: string;
  canonical_url: string;
  insights?: { summary?: string; tags?: string[]; why_it_matters?: string };
  provenance?: { discoveries?: Array<{ extraction?: { section_path?: string[]; anchor_text?: string } }> };
  placement?: { primary_category?: string; section?: string };
  curation?: { status?: string };
  metadata?: { github?: { stars?: number; description?: string } };
}

interface JevChoice {
  type: "choice";
  choice: string;
  probabilities: Record<string, number>;
  confidence: number;
}

interface JevNoul {
  type: "noul";
  noul: number;
}

interface JevResponse {
  model: string;
  answers: Record<string, JevChoice | JevNoul>;
  usage: { input_tokens: number; output_tokens: number };
}

// ─── Config ───────────────────────────────────────────────────────────────────

const API_URL = "https://api.typesafe.ai/v1/systemone";
const MODEL = "jev-latest";
const CONFIDENCE_THRESHOLD = 0.70;
const TOP2_GAP_THRESHOLD = 0.25;
const CATEGORIES_PATH = path.join(process.cwd(), "config/categories.yml");
const ITEMS_DIR = path.join(process.cwd(), "catalog/items");

// ─── Helpers ──────────────────────────────────────────────────────────────────

function walkDir(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walkDir(path.join(dir, e.name)) : [path.join(dir, e.name)],
  );
}

function loadCategories(): Category[] {
  return yaml.load(fs.readFileSync(CATEGORIES_PATH, "utf8")) as Category[];
}

function loadItems(): CatalogItem[] {
  return walkDir(ITEMS_DIR)
    .filter((f) => f.endsWith(".yml"))
    .flatMap((f) => {
      try {
        return [yaml.load(fs.readFileSync(f, "utf8")) as CatalogItem];
      } catch {
        return [];
      }
    });
}

function sleep(ms: number): Promise<void> {
  const { promise, resolve } = Promise.withResolvers<void>();
  setTimeout(resolve, ms);
  return promise;
}

function buildCategoryCriteria(categories: Category[]): Record<string, string> {
  return Object.fromEntries(
    categories.map((c) => [
      c.id,
      [
        c.prompt.instructions.trim(),
        `Use when: ${c.prompt.use_when.slice(0, 2).join("; ")}.`,
        `Do NOT use when: ${c.prompt.do_not_use_when.slice(0, 2).join("; ")}.`,
      ].join(" "),
    ]),
  );
}

function buildItemState(item: CatalogItem): Record<string, unknown> {
  const sourceContext = item.provenance?.discoveries
    ?.slice(0, 2)
    .map((d) => {
      const sections = d.extraction?.section_path?.join(" > ") ?? "";
      const anchor = d.extraction?.anchor_text ?? "";
      return [sections, anchor].filter(Boolean).join(": ");
    })
    .filter(Boolean)
    .join("; ");

  return {
    name: item.name,
    url: item.canonical_url,
    kind: item.kind,
    summary: item.insights?.summary ?? "",
    why_it_matters: item.insights?.why_it_matters ?? "",
    tags: item.insights?.tags ?? [],
    github_description: item.metadata?.github?.description ?? "",
    source_context: sourceContext ?? "",
    current_category: item.placement?.primary_category ?? "unassigned",
  };
}

async function callJev(state: unknown, questions: Record<string, unknown>, apiKey: string): Promise<JevResponse> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ state, model: MODEL, questions }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Jev ${res.status}: ${body}`);
  }
  return res.json() as Promise<JevResponse>;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const apiKey = process.env.TYPESAFE_AI_API_KEY ?? process.env.TYPESAFE_API_KEY;
  if (!apiKey) throw new Error("TYPESAFE_AI_API_KEY not set");

  const categories = loadCategories();
  const allItems = loadItems();
  const included = allItems.filter((i) => i.curation?.status === "included");
  const categoryCriteria = buildCategoryCriteria(categories);

  // Boundary items identified by tags/category analysis
  const BOUNDARY_IDS = new Set([
    // coding-agents vs extensions-and-addons
    "github__agentic-box__owlex",
    "github__coollabsio__jean",
    "github__logly__mureo",
    "github__sh3rd3n__megazord",
    // ai-frameworks vs agent-orchestration
    "crewai__io",
    "github__agentscope-ai__agentscope",
    // mcp vs extensions-and-addons (claude-code MCP servers)
    "github__admin978__canvas-mcp",
    "github__alexei-led__k8s-mcp-server",
    "github__alimuratkuslu__byok-observability-mcp",
    // memory-and-context vs extensions-and-addons
    "atlan__com",
    "github__0xmariowu__agentlint",
    "github__20alexl__claude-engram",
    "github__abhigyan-shekhar__waggle-mcp",
    // skills vs extensions-and-addons
    "github__aidesignblueprint__integrations",
    "github__emblemcompany__agent-skills",
    // evals vs agent-orchestration
    "github__agenta-ai__agenta",
    // local-ai vs ai-frameworks
    "github__pacwoodson__ai-mask",
  ]);

  const targetItems = included.filter((i) => BOUNDARY_IDS.has(i.id));
  console.log(`\nRunning Jev conflict audit on ${targetItems.length} boundary items...\n`);

  const results: Array<{
    id: string;
    currentCategory: string;
    jevCategory: string;
    confidence: number;
    top2: [string, number][];
    isConflicted: boolean;
    ambiguousProbability: number;
    inputTokens: number;
    match: boolean;
  }> = [];

  let totalTokens = 0;

  for (const item of targetItems) {
    try {
      const state = buildItemState(item);
      const questions = {
        primary_category: {
          type: "choice",
          instructions:
            "Classify this developer AI tool into exactly one primary category. " +
            "Base your decision on the product's core identity and main reason to exist, " +
            "not on side features or integrations it also provides.",
          criteria: categoryCriteria,
        },
        is_ambiguous: {
          type: "noul",
          instructions:
            "This item's product identity fits almost equally well in two or more categories, " +
            "making the right classification genuinely unclear even with careful reading of the descriptions.",
        },
      };

      const result = await callJev(state, questions, apiKey);
      const catAnswer = result.answers.primary_category as JevChoice;
      const ambigAnswer = result.answers.is_ambiguous as JevNoul;

      const probs = Object.entries(catAnswer.probabilities).sort((a, b) => b[1] - a[1]);
      const top2 = probs.slice(0, 2) as [string, number][];
      const isConflicted =
        catAnswer.confidence < CONFIDENCE_THRESHOLD ||
        (top2.length >= 2 && top2[0][1] - top2[1][1] < TOP2_GAP_THRESHOLD);

      totalTokens += result.usage.input_tokens;

      const entry = {
        id: item.id,
        currentCategory: item.placement?.primary_category ?? "none",
        jevCategory: catAnswer.choice,
        confidence: catAnswer.confidence,
        top2,
        isConflicted,
        ambiguousProbability: ambigAnswer.noul,
        inputTokens: result.usage.input_tokens,
        match: catAnswer.choice === item.placement?.primary_category,
      };
      results.push(entry);

      const flag = isConflicted ? "⚠ CONFLICT" : !entry.match ? "↩ MISMATCH" : "✓";
      console.log(`${flag}  ${item.id}`);
      console.log(`  current=${entry.currentCategory}  jev=${entry.jevCategory}  conf=${entry.confidence.toFixed(2)}  ambig=${entry.ambiguousProbability.toFixed(2)}`);
      if (top2.length >= 2) {
        console.log(`  top2: ${top2[0][0]}=${top2[0][1].toFixed(2)}  ${top2[1][0]}=${top2[1][1].toFixed(2)}`);
      }
      console.log();

      await sleep(200);
    } catch (err) {
      console.error(`ERROR ${item.id}: ${err instanceof Error ? err.message : String(err)}`);
      await sleep(1000);
    }
  }

  // ─── Summary ────────────────────────────────────────────────────────────────

  console.log("═══════════════════════════════════════");
  console.log("CONFLICT AUDIT SUMMARY");
  console.log("═══════════════════════════════════════");
  console.log(`Items tested:   ${results.length}`);
  console.log(`Conflicts:      ${results.filter((r) => r.isConflicted).length}`);
  console.log(`Match current:  ${results.filter((r) => r.match).length}`);
  console.log(`Mismatches:     ${results.filter((r) => !r.match).length}`);
  console.log(`Total tokens:   ${totalTokens}`);
  console.log(`Est. cost:      $${((totalTokens / 1_000_000) * 0.042).toFixed(4)}`);

  const conflictPairs: Record<string, string[]> = {};
  for (const r of results.filter((r) => r.isConflicted && r.top2.length >= 2)) {
    const pair = [r.top2[0][0], r.top2[1][0]].sort().join(" ↔ ");
    conflictPairs[pair] = [...(conflictPairs[pair] ?? []), r.id];
  }

  if (Object.keys(conflictPairs).length > 0) {
    console.log("\nConflicted category pairs:");
    for (const [pair, ids] of Object.entries(conflictPairs).sort((a, b) => b[1].length - a[1].length)) {
      console.log(`  ${pair}  (${ids.length})`);
      ids.forEach((id) => console.log(`    - ${id}`));
    }
  }

  const reportPath = path.join(process.cwd(), ".local/jev-conflict-audit.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify({ categories: categories.map((c) => c.id), results, conflictPairs }, null, 2));
  console.log(`\nReport saved: ${reportPath}`);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
