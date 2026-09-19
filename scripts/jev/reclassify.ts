#!/usr/bin/env node
/**
 * scripts/jev/reclassify.ts
 *
 * Jev-powered catalog reclassifier with progress cache.
 *
 * Cache key = SHA-1 of the section criteria derived from categories.yml.
 * If categories.yml changes, the hash changes → all items are re-evaluated.
 * If the run crashes, the next run resumes from where it left off because
 * already-processed items are stored in the cache and skipped.
 *
 * Usage:
 *   node --experimental-strip-types scripts/jev/reclassify.ts [options]
 *
 * Options:
 *   --sample N          Only process N items (for testing)
 *   --category CAT      Only process items currently in CAT
 *   --ids ID1,ID2,...   Comma-separated item ids to process
 *   --dry-run           Print decisions without writing YAML files
 *   --concurrency N     Parallel Jev calls (default 20)
 *   --min-confidence N  Hold ambiguous below this threshold (default 0.55)
 *   --reset-cache       Ignore existing cache and start fresh
 */

import * as fs from "node:fs";
import * as path from "node:path";
import * as crypto from "node:crypto";
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
    canonical_positives: string[];
    common_false_positives: string[];
  };
  sections: string[];
}

interface ProcessingEntry {
  status: string;
  updated_at: string | null;
  cause?: { type: string; message: string } | null;
  prompt_version?: string;
  category_rules_version?: string;
}

interface CatalogItem {
  id: string;
  name: string;
  kind: string;
  canonical_url: string;
  identity?: { github_repo?: string };
  insights?: { summary?: string; why_it_matters?: string; tags?: string[] };
  provenance?: {
    discoveries?: Array<{
      extraction?: { section_path?: string[]; anchor_text?: string; surrounding_text?: string };
    }>;
  };
  placement?: { primary_category?: string | null; secondary_categories?: string[]; section?: string | null };
  curation?: { status?: string; reason?: string | null; evidence?: string[] };
  lifecycle?: { status?: string; reason?: string | null };
  metadata?: { github?: { stars?: number; description?: string } };
  processing?: Record<string, ProcessingEntry | undefined>;
}

interface JevChoiceAnswer {
  type: "choice";
  choice: string;
  probabilities: Record<string, number>;
  confidence: number;
}
interface JevNoulAnswer { type: "noul"; noul: number; }
interface JevResponse {
  model: string;
  answers: Record<string, JevChoiceAnswer | JevNoulAnswer>;
  usage: { input_tokens: number; output_tokens: number };
}

interface ReclassifyResult {
  itemId: string;
  filePath: string;
  oldCategory: string | null;
  oldSection: string | null;
  newCategory: string | null;
  newSection: string | null;
  shouldInclude: boolean;
  confidence: number;
  ambiguous: boolean;
  changed: boolean;
  skipped: boolean;
  skipReason?: string;
  inputTokens: number;
  model: string;
}

/** Persisted cache entry for one item. */
interface CacheEntry {
  status: "done" | "ambiguous" | "skipped" | "error";
  newCategory: string | null;
  newSection: string | null;
  shouldInclude: boolean;
  confidence: number;
  processedAt: string;
}

/** Full cache file structure. */
interface CacheFile {
  criteriaHash: string;
  items: Record<string, CacheEntry>;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const API_URL = "https://api.typesafe.ai/v1/systemone";
const MODEL = "jev-latest";
const CATEGORIES_PATH = path.join(process.cwd(), "config/categories.yml");
const ITEMS_DIR = path.join(process.cwd(), "catalog/items");
const CACHE_PATH = path.join(process.cwd(), ".local/jev-reclassify-cache.json");
const REPORT_DIR = path.join(process.cwd(), ".local");
const EXCLUDED_PLACEMENT_KEY = "__excluded__";

// ─── Cache helpers ────────────────────────────────────────────────────────────

function loadCache(criteriaHash: string, resetCache: boolean): Map<string, CacheEntry> {
  if (resetCache || !fs.existsSync(CACHE_PATH)) return new Map();
  try {
    const raw = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8")) as CacheFile;
    if (raw.criteriaHash !== criteriaHash) {
      console.log(`Cache hash mismatch — categories changed. Starting fresh.\n  old: ${raw.criteriaHash}\n  new: ${criteriaHash}\n`);
      return new Map();
    }
    const map = new Map(Object.entries(raw.items));
    const doneCount = [...map.values()].filter((e) => e.status === "done" || e.status === "ambiguous").length;
    console.log(`Loaded cache: ${map.size} entries (${doneCount} done/ambiguous → will skip)\n`);
    return map;
  } catch {
    return new Map();
  }
}

function saveCache(criteriaHash: string, cache: Map<string, CacheEntry>): void {
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
  const data: CacheFile = { criteriaHash, items: Object.fromEntries(cache) };
  const tmp = `${CACHE_PATH}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
  fs.renameSync(tmp, CACHE_PATH);
}

// ─── Semaphore ────────────────────────────────────────────────────────────────

function createSemaphore(limit: number) {
  let active = 0;
  const queue: Array<() => void> = [];

  function release() {
    active -= 1;
    const next = queue.shift();
    if (next) { active += 1; next(); }
  }

  function acquire(): Promise<() => void> {
    if (active < limit) { active += 1; return Promise.resolve(release); }
    const { promise, resolve } = Promise.withResolvers<() => void>();
    queue.push(() => resolve(release));
    return promise;
  }

  return { acquire };
}

// ─── File helpers ─────────────────────────────────────────────────────────────

function walkDir(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walkDir(path.join(dir, e.name)) : [path.join(dir, e.name)],
  );
}

function loadCategories(): Category[] {
  return yaml.load(fs.readFileSync(CATEGORIES_PATH, "utf8")) as Category[];
}

interface LoadedItem { filePath: string; item: CatalogItem; }

function loadIncludedItems(): LoadedItem[] {
  return walkDir(ITEMS_DIR)
    .filter((f) => f.endsWith(".yml"))
    .flatMap((filePath) => {
      try {
        const item = yaml.load(fs.readFileSync(filePath, "utf8")) as CatalogItem;
        if (item?.curation?.status === "included" || item?.curation?.status === "pending") {
          return [{ filePath, item }];
        }
        return [];
      } catch { return []; }
    });
}

function saveItem(filePath: string, item: CatalogItem): void {
  fs.writeFileSync(filePath, yaml.dump(item, { lineWidth: 120, noRefs: true }), "utf8");
}

// ─── Text helpers ─────────────────────────────────────────────────────────────

/** Strip unpaired surrogates and control chars that Jev rejects. */
function sanitizeText(text: string | null | undefined): string {
  if (!text) return "";
  return text
    .replace(/[\uD800-\uDFFF]/g, "")           // unpaired surrogates
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "") // control chars (keep \t \n \r)
    .trim();
}

// ─── Jev helpers ──────────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  const { promise, resolve } = Promise.withResolvers<void>();
  setTimeout(resolve, ms);
  return promise;
}

async function callJevWithRetry(
  state: unknown,
  questions: Record<string, unknown>,
  apiKey: string,
  maxRetries = 3,
): Promise<JevResponse | null> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ state, model: MODEL, questions }),
    });

    if (res.ok) return res.json() as Promise<JevResponse>;

    if ((res.status === 429 || res.status === 529) && attempt < maxRetries) {
      await sleep(Math.min(1000 * 2 ** attempt, 8000) + Math.random() * 200);
      continue;
    }

    if (res.status === 400) {
      // Invalid request — skip this item (usually bad Unicode or oversized state)
      return null;
    }

    const body = await res.text();
    throw new Error(`Jev ${res.status}: ${body.slice(0, 200)}`);
  }
  throw new Error("Jev: max retries exceeded");
}

// ─── Criteria builder — derived from categories.yml ──────────────────────────

interface CategoryWithHints extends Category {
  prompt: Category["prompt"] & {
    section_hints?: Record<string, string>;
  };
}

/**
 * Builds Jev placement criteria dynamically from categories.yml.
 * Each option key: "category-id||Section Name"
 * Each value: section_hint (from YAML) enriched with:
 *   - category instructions (first sentence — what it IS)
 *   - canonical_positives (examples that belong)
 *   - common_false_positives (examples that DON'T belong)
 *
 * This makes categories.yml the single source of truth.
 * Cache invalidation key is the SHA-1 of the categories.yml file content.
 */
function buildPlacementCriteria(categories: CategoryWithHints[]): Record<string, string> {
  const criteria: Record<string, string> = {
    [EXCLUDED_PLACEMENT_KEY]:
      "This item should NOT be in the catalog: it is a documentation page, auxiliary link, generic non-AI SaaS, or lacks enough information to evaluate.",
  };

  for (const cat of categories) {
    const hints = cat.prompt.section_hints ?? {};
    // First sentence of instructions = the core identity statement
    const identity = cat.prompt.instructions.trim().replace(/\n\s*/g, " ").split(/\.\s+/)[0] + ".";
    // Examples: canonical_positives
    const positives = cat.prompt.canonical_positives.slice(0, 4).join(", ");
    // Counter-examples: common_false_positives
    const negatives = cat.prompt.common_false_positives.slice(0, 3).join("; ");

    for (const section of (cat.sections ?? [])) {
      const key = `${cat.id}||${section}`;
      const hint = hints[section] ?? "";
      criteria[key] = [
        `[${cat.name} → ${section}]`,
        identity,
        hint ? hint : "",
        `Canonical examples: ${positives}.`,
        `NOT for: ${negatives}.`,
      ].filter(Boolean).join(" ");
    }
  }

  return criteria;
}

function computeCriteriaHash(): string {
  // Hash the raw categories.yml file — if it changes, all items re-evaluate
  const content = fs.readFileSync(CATEGORIES_PATH, "utf8");
  return crypto.createHash("sha1").update(content).digest("hex").slice(0, 12);
}

// ─── State builder ────────────────────────────────────────────────────────────

function buildItemState(item: CatalogItem): Record<string, unknown> {
  const discoveries = item.provenance?.discoveries ?? [];
  const sourceContext = discoveries
    .slice(0, 3)
    .map((d) => {
      const secs = d.extraction?.section_path?.join(" > ") ?? "";
      const anchor = d.extraction?.anchor_text ?? "";
      const surr = (d.extraction?.surrounding_text ?? "").slice(0, 100);
      return [secs, anchor, surr].filter(Boolean).join(" | ");
    })
    .filter(Boolean)
    .join("; ");

  return {
    name: sanitizeText(item.name),
    url: item.canonical_url,
    kind: item.kind,
    github_repo: item.identity?.github_repo ?? null,
    github_description: sanitizeText(item.metadata?.github?.description),
    summary: sanitizeText(item.insights?.summary),
    why_it_matters: sanitizeText(item.insights?.why_it_matters),
    tags: (item.insights?.tags ?? []).map(sanitizeText).filter(Boolean),
    source_context: sanitizeText(sourceContext) || null,
  };
}

// ─── Result applier ───────────────────────────────────────────────────────────

function applyResultToItem(
  item: CatalogItem,
  newCategory: string | null,
  newSection: string | null,
  shouldInclude: boolean,
): CatalogItem {
  const updated = structuredClone(item);
  if (!shouldInclude) {
    updated.curation = {
      status: "pending",
      reason: "Jev reclassifier flagged as out-of-scope — needs human review",
      evidence: ["Jev classification confidence below inclusion threshold"],
    };
    updated.placement = { primary_category: null, secondary_categories: [], section: null };
  } else {
    updated.placement = { primary_category: newCategory, secondary_categories: [], section: newSection };
  }
  return updated;
}

// ─── Core reclassifier ────────────────────────────────────────────────────────

async function reclassifyItem(
  loaded: LoadedItem,
  placementCriteria: Record<string, string>,
  apiKey: string,
  minConfidence: number,
): Promise<ReclassifyResult> {
  const { filePath, item } = loaded;
  const summary = item.insights?.summary ?? "";
  if (!summary || summary === "N/A" || summary.length < 15) {
    return {
      itemId: item.id, filePath,
      oldCategory: item.placement?.primary_category ?? null, oldSection: item.placement?.section ?? null,
      newCategory: null, newSection: null,
      shouldInclude: false, confidence: 0, ambiguous: false, changed: false,
      skipped: true, skipReason: "no_summary", inputTokens: 0, model: "",
    };
  }

  const state = buildItemState(item);
  const questions = {
    placement: {
      type: "choice",
      instructions:
        "Classify this developer AI tool into the single best category and section. " +
        "The key format is 'category-id||Section Name'. " +
        "Base your decision on the product's primary identity and main reason to exist, " +
        "not on side features or integrations it also supports. " +
        "Select '__excluded__' only if this is clearly not a developer-facing AI tool.",
      criteria: placementCriteria,
    },
    should_include: {
      type: "noul",
      instructions:
        "This item is a genuine, developer-facing AI tool that belongs in a curated catalog " +
        "of AI tools for developers — not a documentation page, auxiliary link, or generic SaaS.",
    },
  };

  const result = await callJevWithRetry(state, questions, apiKey);
  if (!result) {
    // 400 — bad request, skip this item
    return {
      itemId: item.id, filePath,
      oldCategory: item.placement?.primary_category ?? null, oldSection: item.placement?.section ?? null,
      newCategory: null, newSection: null,
      shouldInclude: false, confidence: 0, ambiguous: false, changed: false,
      skipped: true, skipReason: "jev_400_invalid_request", inputTokens: 0, model: "",
    };
  }

  const catAnswer = result.answers.placement as JevChoiceAnswer;
  const inclAnswer = result.answers.should_include as JevNoulAnswer;

  const choiceKey = catAnswer.choice;
  const isExcluded = choiceKey === EXCLUDED_PLACEMENT_KEY;
  const shouldInclude = !isExcluded && inclAnswer.noul >= 0.4;

  let newCategory: string | null = null;
  let newSection: string | null = null;
  if (!isExcluded && choiceKey.includes("||")) {
    const [cat, sec] = choiceKey.split("||");
    newCategory = cat ?? null;
    newSection = sec ?? null;
  }

  const confidence = catAnswer.confidence;
  const ambiguous = confidence < minConfidence;
  const oldCategory = item.placement?.primary_category ?? null;
  const oldSection = item.placement?.section ?? null;
  const changed = newCategory !== oldCategory || newSection !== oldSection;

  return {
    itemId: item.id, filePath,
    oldCategory, oldSection, newCategory, newSection,
    shouldInclude, confidence, ambiguous, changed,
    skipped: false, inputTokens: result.usage.input_tokens, model: result.model,
  };
}

// ─── CLI args ─────────────────────────────────────────────────────────────────

interface CliArgs {
  sample: number | null;
  category: string | null;
  ids: Set<string> | null;
  dryRun: boolean;
  concurrency: number;
  minConfidence: number;
  resetCache: boolean;
}

function parseArgs(): CliArgs {
  const argv = process.argv.slice(2);
  const args: CliArgs = { sample: null, category: null, ids: null, dryRun: false, concurrency: 20, minConfidence: 0.55, resetCache: false };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--sample" && argv[i + 1]) args.sample = Number(argv[++i]);
    else if (argv[i] === "--category" && argv[i + 1]) args.category = argv[++i] ?? null;
    else if (argv[i] === "--ids" && argv[i + 1]) args.ids = new Set((argv[++i] ?? "").split(",").filter(Boolean));
    else if (argv[i] === "--dry-run") args.dryRun = true;
    else if (argv[i] === "--concurrency" && argv[i + 1]) args.concurrency = Number(argv[++i]);
    else if (argv[i] === "--min-confidence" && argv[i + 1]) args.minConfidence = Number(argv[++i]);
    else if (argv[i] === "--reset-cache") args.resetCache = true;
  }
  return args;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const apiKey = process.env.TYPESAFE_AI_API_KEY ?? process.env.TYPESAFE_API_KEY;
  if (!apiKey) throw new Error("TYPESAFE_AI_API_KEY not set");

  const args = parseArgs();
  const categories = loadCategories() as CategoryWithHints[];
  const placementCriteria = buildPlacementCriteria(categories);
  const criteriaHash = computeCriteriaHash();
  const cache = loadCache(criteriaHash, args.resetCache);

  console.log(`Jev Reclassifier`);
  console.log(`Criteria hash: ${criteriaHash} | Options: ${Object.keys(placementCriteria).length}`);
  console.log(`Concurrency: ${args.concurrency} | Min-confidence: ${args.minConfidence} | Dry-run: ${args.dryRun}\n`);

  let items = loadIncludedItems();
  if (args.ids) items = items.filter((l) => args.ids!.has(l.item.id));
  else if (args.category) items = items.filter((l) => l.item.placement?.primary_category === args.category);
  if (args.sample && args.sample > 0) items = items.slice(0, args.sample);

  // Filter out items already in cache (done or ambiguous)
  const toProcess = items.filter((l) => {
    const cached = cache.get(l.item.id);
    return !cached || cached.status === "error";  // re-process errors only
  });
  const cachedDone = items.length - toProcess.length;
  console.log(`Total eligible: ${items.length} | Cached (skip): ${cachedDone} | To process: ${toProcess.length}\n`);

  if (toProcess.length === 0) {
    console.log("All items already cached. Use --reset-cache to re-evaluate.");
    return;
  }

  const sem = createSemaphore(args.concurrency);
  const results: ReclassifyResult[] = [];
  let done = 0;

  // Persist cache after each item to enable resume on crash
  const saveCacheThrottled = (() => {
    let pending = false;
    return () => {
      if (pending) return;
      pending = true;
      setImmediate(() => {
        saveCache(criteriaHash, cache);
        pending = false;
      });
    };
  })();

  await Promise.all(
    toProcess.map(async (loaded) => {
      const release = await sem.acquire();
      try {
        const result = await reclassifyItem(loaded, placementCriteria, apiKey, args.minConfidence);
        results.push(result);

        // Update cache
        const cacheStatus: CacheEntry["status"] =
          result.skipped ? "skipped" :
          result.ambiguous ? "ambiguous" :
          "done";
        cache.set(result.itemId, {
          status: cacheStatus,
          newCategory: result.newCategory,
          newSection: result.newSection,
          shouldInclude: result.shouldInclude,
          confidence: result.confidence,
          processedAt: new Date().toISOString(),
        });
        if (!args.dryRun) saveCacheThrottled();

        done += 1;
        if (done % 50 === 0 || done === toProcess.length) {
          const changed = results.filter((r) => r.changed && !r.skipped).length;
          const ambig = results.filter((r) => r.ambiguous && !r.skipped).length;
          process.stdout.write(`\r  ${done}/${toProcess.length} | ${changed} changed | ${ambig} ambiguous`);
        }

        // Apply to disk
        if (!args.dryRun && !result.skipped && !result.ambiguous && result.newCategory) {
          const updated = applyResultToItem(loaded.item, result.newCategory, result.newSection, result.shouldInclude);
          saveItem(loaded.filePath, updated);
        }
      } catch (err) {
        // Record error in cache so it gets retried next run
        cache.set(loaded.item.id, {
          status: "error",
          newCategory: null, newSection: null, shouldInclude: false, confidence: 0,
          processedAt: new Date().toISOString(),
        });
        if (!args.dryRun) saveCacheThrottled();
        console.error(`\nERROR ${loaded.item.id}: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        release();
      }
    }),
  );

  // Final cache save
  if (!args.dryRun) saveCache(criteriaHash, cache);
  console.log("\n");

  // ─── Summary ────────────────────────────────────────────────────────────────

  const processed = results.filter((r) => !r.skipped);
  const skipped = results.filter((r) => r.skipped);
  const changed = processed.filter((r) => r.changed);
  const ambiguous = processed.filter((r) => r.ambiguous);
  const totalTokens = results.reduce((s, r) => s + r.inputTokens, 0);

  console.log("═══════════════════════════════════════════════");
  console.log("RECLASSIFICATION SUMMARY");
  console.log("═══════════════════════════════════════════════");
  console.log(`Total eligible:    ${items.length}`);
  console.log(`Cached (skipped):  ${cachedDone}`);
  console.log(`Processed:         ${processed.length}`);
  console.log(`Skipped (no data): ${skipped.length}`);
  console.log(`Changed:           ${changed.length}`);
  console.log(`Ambiguous (held):  ${ambiguous.length}`);
  console.log(`Applied to disk:   ${args.dryRun ? "NO (dry-run)" : changed.filter((r) => !r.ambiguous).length}`);
  console.log(`Tokens used:       ${totalTokens.toLocaleString()}`);
  console.log(`Est. cost:         $${((totalTokens / 1_000_000) * 0.042).toFixed(4)}`);
  console.log(`Cache file:        ${CACHE_PATH}`);

  // New distribution
  const allCacheEntries = [...cache.values()].filter((e) => e.status === "done" && e.newCategory);
  const newDist: Record<string, number> = {};
  for (const e of allCacheEntries) {
    newDist[e.newCategory!] = (newDist[e.newCategory!] ?? 0) + 1;
  }
  if (Object.keys(newDist).length > 0) {
    console.log("\nCategory distribution (from full cache):");
    for (const [cat, count] of Object.entries(newDist).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${cat.padEnd(32)} ${String(count).padStart(5)}`);
    }
  }

  // Sample changes
  const movers = changed.filter((r) => !r.ambiguous).slice(0, 15);
  if (movers.length > 0) {
    console.log("\nSample changes:");
    for (const r of movers) {
      console.log(`  ${r.itemId}`);
      console.log(`    ${r.oldCategory ?? "none"} / ${r.oldSection ?? "none"}`);
      console.log(`    → ${r.newCategory} / ${r.newSection}  (conf=${r.confidence.toFixed(2)})`);
    }
  }

  // Save JSON report
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const reportPath = path.join(REPORT_DIR, `jev-reclassify-${new Date().toISOString().slice(0, 19).replace(/:/g, "-")}.json`);
  fs.writeFileSync(reportPath, JSON.stringify({ criteriaHash, cachedDone, args, summary: { total: items.length, processed: processed.length, changed: changed.length, ambiguous: ambiguous.length, totalTokens }, results }, null, 2));
  console.log(`\nReport: ${reportPath}`);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.stack ?? err.message : String(err));
  process.exit(1);
});
