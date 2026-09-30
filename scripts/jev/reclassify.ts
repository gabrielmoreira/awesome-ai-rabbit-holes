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

const DEFAULT_ENDPOINT = "https://api.typesafe.ai/v1/systemone";
/**
 * OpenRouter serves the same System One contract at its own path and bills the
 * request to an OpenRouter key, which is what makes this reachable when the
 * TypeSafe account is out of credit.
 */
const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/systemone";
const DEFAULT_MODEL = "jev-latest";

/** Set from the CLI flags in main(); the provider is a choice, not a constant. */
const client = {
  endpoint: DEFAULT_ENDPOINT,
  model: DEFAULT_MODEL,
  apiKey: "",
};

function resolveApiKey(endpoint: string, env: NodeJS.ProcessEnv = process.env): string {
  const host = new URL(endpoint).hostname;
  if (host.endsWith("openrouter.ai")) {
    const key = env.OPENROUTER_API_KEY?.trim();
    if (!key) throw new Error("OPENROUTER_API_KEY not set (required for the OpenRouter endpoint)");
    return key;
  }
  // A decision model served on this machine (Ollaya and friends) needs no key
  // unless the server was started with one.
  if (host === "localhost" || host === "127.0.0.1" || host === "::1" || host === "host.docker.internal") {
    return env.OLLAYA_API_KEY?.trim() ?? "";
  }
  const key = env.TYPESAFE_AI_API_KEY?.trim() ?? env.TYPESAFE_API_KEY?.trim();
  if (!key) throw new Error("TYPESAFE_AI_API_KEY not set");
  return key;
}
/**
 * Bump when the classifier's shape changes: the cache key must move with it,
 * or a new builder silently reuses verdicts the old one produced.
 */
const CLASSIFIER_VERSION = "v5-inclusion";
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
    const res = await fetch(client.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(client.apiKey ? { Authorization: `Bearer ${client.apiKey}` } : {}),
      },
      body: JSON.stringify({ state, model: client.model, questions }),
    });

    if (res.ok) return res.json() as Promise<JevResponse>;

    // Out of credit or over a key's limit is a whole-run failure, not a
    // per-item one: stop instead of repeating the same error for every
    // remaining item.
    if (res.status === 402 || res.status === 403) {
      const body = await res.text();
      throw new Error(body.includes("Key limit exceeded")
        ? `PROVIDER_KEY_LIMIT 403: ${body.slice(0, 240)}`
        : `PROVIDER_OUT_OF_CREDIT ${res.status}: ${body.slice(0, 240)}`);
    }

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
 * Two-level classification, both derived from categories.yml.
 *
 * Asking one question over every `category||section` option diluted the rules:
 * 66 options meant each carried only the first sentence of its instructions and
 * three examples, so every rule written in `use_when`/`do_not_use_when` — the
 * ones that actually separate lookalikes — never reached the model.
 *
 * Pass 1 chooses between the categories themselves, where each option can afford
 * its full identity, its inclusion anchors, its exclusion anchors, and examples.
 * Pass 2 then chooses a section inside the winning category, where the options
 * are few and the section hints are the whole question. Fewer options per
 * decision also means less dilution, and the two calls together are cheaper than
 * the single 66-option call they replace.
 */
/**
 * The pairs the classifier confuses, written as resolutions. Every line restates
 * a rule the YAML already carries, moved to where a smaller model will weigh it:
 * these are exactly the pairs the golden cases catch.
 */
const TIE_BREAKS = [
  "- A library or framework developers import is ai-frameworks even when it runs or serves models locally; local-ai is for products whose point is running models on your own hardware — runtimes, serving stacks, desktop UIs, fine-tuning toolkits.",
  "- A plugin, extension, or add-on that installs into an existing agent is extensions-and-addons even when it ships an MCP server; mcp is for products whose identity is the protocol itself.",
  "- A platform, workbench, or builder for running agents is agent-orchestration even when it contains evaluation features; evals is for products whose point is measuring model behaviour.",
  "- A browser or computer-use agent that exists to do coding work is coding-agents; one that automates general web tasks, or takes its decisions from a decision model, belongs elsewhere.",
  "- A curated list, newsletter, or directory of tools is awesome-awesomes, and it is included even when it is broader than the rest of the catalog.",
].join("\n");

function buildCategoryCriteria(categories: CategoryWithHints[], terse = false): Record<string, string> {
  const criteria: Record<string, string> = {
    [EXCLUDED_PLACEMENT_KEY]:
      "Not a developer-facing AI tool: a documentation page, a citation, an auxiliary link, a generic non-AI product, or too little information to judge.",
  };

  for (const cat of categories) {
    // Every rule reaches the model. An earlier version took the first four
    // use_when and six exclusions, which silently dropped exactly the rules
    // that settled the cases the classifier got wrong — a benchmark of a
    // decision model sat at use_when[7] and never made it into the prompt.
    const exclusions = [...cat.prompt.common_false_positives, ...cat.prompt.do_not_use_when];
    criteria[cat.id] = terse
      ? [
        // A dense option: the identity sentence, two inclusion anchors, three
        // examples, two exclusions. The prompt is 8k tokens of prose that a small
        // model has to weigh 14 ways; length is the cost and the dilution.
        `[${cat.name}]`,
        firstSentence(cat.prompt.instructions),
        `Belongs when: ${cat.prompt.use_when.slice(0, 2).join("; ")}.`,
        `Examples: ${cat.prompt.canonical_positives.slice(0, 3).join(", ")}.`,
        `NOT for: ${exclusions.slice(0, 2).join("; ")}.`,
      ].join(" ")
      : [
        `[${cat.name}]`,
        collapseWhitespace(cat.prompt.instructions),
        `Belongs when: ${cat.prompt.use_when.join("; ")}.`,
        `Canonical examples: ${cat.prompt.canonical_positives.join(", ")}.`,
        `NOT for: ${exclusions.join("; ")}.`,
      ].join(" ");
  }

  return criteria;
}

function firstSentence(value: string): string {
  const collapsed = collapseWhitespace(value);
  const match = collapsed.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : collapsed;
}

function buildSectionCriteria(category: CategoryWithHints): Record<string, string> {
  const hints = category.prompt.section_hints ?? {};
  const criteria: Record<string, string> = {};
  for (const section of category.sections ?? []) {
    criteria[section] = hints[section] ?? `A section of ${category.name}.`;
  }
  return criteria;
}

function collapseWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/** One line per category id, so a roster can be built for any subset. */
function buildRosterLines(categories: CategoryWithHints[]): Record<string, string> {
  return Object.fromEntries(
    categories.map((cat) => [
      cat.id,
      `- ${cat.id} (${cat.name}): ${cat.prompt.use_when[0] ?? collapseWhitespace(cat.prompt.instructions)}`,
    ]),
  );
}

function rosterFor(lines: Record<string, string>, keep?: Set<string>): string {
  return Object.entries(lines)
    .filter(([id]) => !keep || keep.has(id))
    .map(([, line]) => line)
    .join("\n");
}

/**
 * One line per category instead of its full rules: the coarse first stage of a
 * cascade. It cannot decide the lookalike pairs on its own — that is the point,
 * it only has to keep the right answer inside the window that does.
 */
function buildCategoryShortlist(categories: CategoryWithHints[]): Record<string, string> {
  const criteria: Record<string, string> = {
    [EXCLUDED_PLACEMENT_KEY]:
      "Not a developer-facing AI tool: a documentation page, a citation, an auxiliary link, a generic non-AI product, or too little information to judge.",
  };
  for (const cat of categories) {
    criteria[cat.id] = `${cat.name}: ${cat.prompt.use_when[0] ?? collapseWhitespace(cat.prompt.instructions)}`;
  }
  return criteria;
}

function computeCriteriaHash(ablation: string): string {
  // Hash the raw categories.yml file — if it changes, all items re-evaluate
  const content = fs.readFileSync(CATEGORIES_PATH, "utf8");
  // Provider, model and ablation are part of the key: a prompt variant must not
  // reuse another variant's verdicts. Without this a terse-criteria run reads
  // the full-criteria cache and measures nothing.
  return crypto.createHash("sha1").update(`${content}
${client.endpoint}
${client.model}
${ablation}`).digest("hex").slice(0, 12);
}

// ─── State builder ────────────────────────────────────────────────────────────

function buildItemState(item: CatalogItem, summaryOverride?: string): Record<string, unknown> {
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
    summary: sanitizeText(summaryOverride ?? item.insights?.summary),
    why_it_matters: sanitizeText(item.insights?.why_it_matters),
    tags: (item.insights?.tags ?? []).map(sanitizeText).filter(Boolean),
    source_context: sanitizeText(sourceContext) || null,
  };
}

// ─── Result applier ───────────────────────────────────────────────────────────

/** Strip markdown table/badge/link noise from an index line so it reads as prose. */
function cleanIndexLine(raw: string | null | undefined): string {
  const text = sanitizeText(raw);
  if (!text) return "";
  // Table-style indexes put the useful description in the longest cell; the
  // other cells hold the name, a star count, a language, and a date.
  const cells = text.split("|").map((cell) => cell.trim()).filter(Boolean);
  const source = cells.length > 1 ? cells.reduce((longest, cell) => (cell.length > longest.length ? cell : longest)) : text;
  return source
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*|`/g, "")
    .replace(/^\s*[-*]\s*/, "")
    .replace(/[|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * The catalog prompt tells the categorizer to seed the summary from the
 * repository description. Discovery and the star refresh already store that
 * description, and every discovery records the index line the project was
 * found on, so a freshly imported item can be placed and rendered before the
 * (slow, free) categorizer writes its own prose. The categorizer overwrites
 * this later because its stored rules version is still missing.
 */
function deriveSeedSummary(item: CatalogItem): string {
  const description = sanitizeText(item.metadata?.github?.description);
  if (description.length >= 15) return description;

  for (const discovery of item.provenance?.discoveries ?? []) {
    const line = cleanIndexLine(discovery.extraction?.surrounding_text);
    if (line.length >= 15) return line;
  }
  return "";
}

function resolveSummaryText(item: CatalogItem): string {
  const existing = sanitizeText(item.insights?.summary);
  if (existing.length >= 15 && existing !== "N/A") return existing;
  return deriveSeedSummary(item);
}

/** True once the categorizer, not this script, wrote the item's prose. */
function hasCategorizerInsights(item: CatalogItem): boolean {
  return item.insights?.why_it_matters != null;
}

function applyResultToItem(
  item: CatalogItem,
  newCategory: string | null,
  newSection: string | null,
  shouldInclude: boolean,
  confidence: number,
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
    updated.curation = {
      status: "included",
      reason: `Jev decision-model reclassifier placed this item in ${newCategory} / ${newSection}`,
      evidence: [`jev-latest choice confidence ${confidence.toFixed(2)}`],
    };
    const seededSummary = resolveSummaryText(item);
    if (seededSummary && sanitizeText(item.insights?.summary) !== seededSummary) {
      updated.insights = { ...updated.insights, summary: seededSummary };
    }
  }
  return updated;
}

// ─── Core reclassifier ────────────────────────────────────────────────────────

async function reclassifyItem(
  loaded: LoadedItem,
  context: {
    categories: CategoryWithHints[];
    categoryCriteria: Record<string, string>;
    shortlistCriteria: Record<string, string>;
    rosterLines: Record<string, string>;
    ablation: string;
    tieBreaks: boolean;
    sectionContext: boolean;
    /** 0 disables the cascade: category rules are sent in full, once. */
    cascadeWindow: number;
  },
  apiKey: string,
  minConfidence: number,
): Promise<ReclassifyResult> {
  const { filePath, item } = loaded;
  const oldCategory = item.placement?.primary_category ?? null;
  const oldSection = item.placement?.section ?? null;
  const skip = (reason: string): ReclassifyResult => ({
    itemId: item.id, filePath, oldCategory, oldSection,
    newCategory: null, newSection: null,
    shouldInclude: false, confidence: 0, ambiguous: false, changed: false,
    skipped: true, skipReason: reason, inputTokens: 0, model: "",
  });

  const summary = resolveSummaryText(item);
  if (summary.length < 15) return skip("no_summary");

  const state = buildItemState(item, summary);

  // Pass 1 — the category. With a cascade, a first call over one line per
  // category narrows the field, and only those few are re-asked with their full
  // rules. The state and the instructions are paid again in that second call,
  // so the saving is bounded by how much of the prompt the rules are; what it
  // buys is a decision made over 3-4 options instead of 14.
  //
  // Measured on the golden cases (winnow:e4b, the same 50 items): full rules
  // 80.0% at 7,646 tokens/item, window 4 68.0% at 4,020, window 3 68.0% at
  // 3,640. The first pass over one line per category misranks the lookalikes —
  // skills__sh came back awesome-awesomes, checkmarx__com came back
  // agent-orchestration — and a category it drops cannot return in the second
  // pass. That trades 12 points of accuracy for 2x the speed. Off by default,
  // kept as an ablation knob because a larger model may not pay the same price.
  let categoryCriteria = context.categoryCriteria;
  let shortlistTokens = 0;
  if (context.cascadeWindow > 0) {
    const shortlistResult = await callJevWithRetry(state, {
      category: {
        type: "choice",
        instructions:
          "Pick the single category whose primary identity this developer tool matches, from its " +
          "main reason to exist rather than from side features or integrations it also supports. " +
          "This is the first of two questions and the answer only has to keep the right category " +
          "in the running: when two categories both look plausible, prefer the one whose identity " +
          "line names the product's main job.",
        criteria: context.shortlistCriteria,
      },
    }, apiKey);
    if (!shortlistResult) return skip("jev_400_invalid_request");
    shortlistTokens = shortlistResult.usage.input_tokens;
    const probabilities = (shortlistResult.answers.category as JevChoiceAnswer).probabilities ?? {};
    const keep = new Set(
      Object.entries(probabilities)
        .sort((a, b) => b[1] - a[1])
        .slice(0, context.cascadeWindow)
        .map(([id]) => id),
    );
    // Two entries never leave the shortlist. The incumbent, because one line per
    // category is a coarse filter and a vague line must not be able to hide the
    // placement the item already has. The exclusion, because dropping it would
    // force an out-of-scope item into a category it does not belong to.
    if (oldCategory && context.categoryCriteria[oldCategory]) keep.add(oldCategory);
    keep.add(EXCLUDED_PLACEMENT_KEY);
    categoryCriteria = Object.fromEntries(
      Object.entries(context.categoryCriteria).filter(([id]) => keep.has(id)),
    );
  }

  const categoryResult = await callJevWithRetry(state, {
    category: {
      type: "choice",
      instructions:
        "Pick the single category whose primary identity this developer tool matches, from its " +
        "main reason to exist rather than from side features or integrations it also supports. " +
        (context.cascadeWindow > 0
          ? "Every category still under consideration is listed in the roster with the one thing it " +
            "means; a category absent from this list was ruled out by the first question:\n" +
            rosterFor(context.rosterLines, new Set(Object.keys(categoryCriteria))) + "\n"
          : "Every category is listed in the roster with the one thing it means:\n" + rosterFor(context.rosterLines) + "\n") +
        (context.tieBreaks ? "Tie-breaks, when two categories both look plausible:\n" + TIE_BREAKS + "\n" : "") +
        "Precedence, when a product could sit in two: a decision model (Jev, TypeSafe System One, " +
        "Laya, Kev, and similar) or a tool whose judgment IS the product goes to decision-models " +
        "even when it also ships an MCP server, installs as a host add-on, or measures model " +
        "behaviour — the protocol, host, or harness is the transport, not the identity. Then, a " +
        "coding agent stays in coding-agents; an MCP server whose identity is the protocol stays " +
        "in mcp. Choose '" + EXCLUDED_PLACEMENT_KEY + "' only when this is not a developer-facing AI " +
        "tool at all.",
      criteria: categoryCriteria,
    },
    should_include: {
      type: "noul",
      // A curated list or a newsletter is not a "tool", and the older wording
      // made the model exclude every one of them.
      instructions:
        "This item is a genuine, developer-facing AI resource that belongs in a curated catalog " +
        "for developers: a tool, a framework, a curated list, or a publication such as a newsletter " +
        "or blog. It is NOT a documentation page, a citation, an auxiliary link, or a generic " +
        "non-AI product.",
    },
  }, apiKey);
  if (!categoryResult) return skip("jev_400_invalid_request");

  const categoryAnswer = categoryResult.answers.category as JevChoiceAnswer;
  const includeAnswer = categoryResult.answers.should_include as JevNoulAnswer;
  const chosenKey = categoryAnswer.choice;
  const isExcluded = chosenKey === EXCLUDED_PLACEMENT_KEY;
  // A category the model invented falls back to "no placement" rather than a bad one.
  const chosenCategory = context.categories.find((entry) => entry.id === chosenKey) ?? null;
  const shouldInclude = !isExcluded && chosenCategory !== null && includeAnswer.noul >= 0.4;
  const confidence = categoryAnswer.confidence;
  const inputTokens = categoryResult.usage.input_tokens + shortlistTokens;
  const model = categoryResult.model;

  if (!shouldInclude || !chosenCategory) {
    return {
      itemId: item.id, filePath, oldCategory, oldSection,
      newCategory: null, newSection: null,
      shouldInclude: false, confidence, ambiguous: confidence < minConfidence, changed: false,
      skipped: false, inputTokens, model,
    };
  }

  // Pass 2 — the section inside the chosen category. The category is already
  // decided, so the question carries its identity: with one-line hints alone the
  // model cannot tell a section of this category from a similar section of
  // another, and it does not know what the category itself means.
  const sectionCriteria = buildSectionCriteria(chosenCategory);
  let newSection: string | null = null;
  let totalTokens = inputTokens;
  if (Object.keys(sectionCriteria).length > 0) {
    const sectionResult = await callJevWithRetry(state, {
      section: {
        type: "choice",
        instructions:
          (context.sectionContext
            ? `The category is already decided: this item is in "${chosenCategory.name}". What that category means: ${collapseWhitespace(chosenCategory.prompt.instructions)} `
            : `The item is in the "${chosenCategory.name}" category. `) +
          "Pick the section of that category the item belongs in, by what the product IS rather " +
          "than by what it uses. If two sections both fit, pick the one whose description names " +
          "the product's main job.",
        criteria: sectionCriteria,
      },
    }, apiKey);
    if (sectionResult) {
      totalTokens += sectionResult.usage.input_tokens;
      const sectionAnswer = sectionResult.answers.section as JevChoiceAnswer;
      if (Object.hasOwn(sectionCriteria, sectionAnswer.choice)) newSection = sectionAnswer.choice;
    }
  }

  return {
    itemId: item.id, filePath, oldCategory, oldSection,
    newCategory: chosenCategory.id, newSection,
    shouldInclude: true, confidence,
    ambiguous: confidence < minConfidence,
    changed: chosenCategory.id !== oldCategory || newSection !== oldSection,
    skipped: false,
    inputTokens: totalTokens,
    model,
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
  seedOnly: boolean;
  endpoint: string;
  model: string;
  tieBreaks: boolean;
  sectionContext: boolean;
  terseCriteria: boolean;
  cascadeWindow: number;
}
function parseArgs(): CliArgs {
  const argv = process.argv.slice(2);
  const args: CliArgs = { sample: null, category: null, ids: null, dryRun: false, concurrency: 20, minConfidence: 0.55, resetCache: false, seedOnly: false, endpoint: DEFAULT_ENDPOINT, model: DEFAULT_MODEL, tieBreaks: false, sectionContext: false, terseCriteria: false, cascadeWindow: 0 };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--sample" && argv[i + 1]) args.sample = Number(argv[++i]);
    else if (argv[i] === "--category" && argv[i + 1]) args.category = argv[++i] ?? null;
    else if (argv[i] === "--ids" && argv[i + 1]) args.ids = new Set((argv[++i] ?? "").split(",").filter(Boolean));
    else if (argv[i] === "--ids-file" && argv[i + 1]) {
      const lines = fs.readFileSync(argv[++i]!, "utf8").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      args.ids = new Set([...(args.ids ?? []), ...lines]);
    }
    else if (argv[i] === "--dry-run") args.dryRun = true;
    else if (argv[i] === "--concurrency" && argv[i + 1]) args.concurrency = Number(argv[++i]);
    else if (argv[i] === "--min-confidence" && argv[i + 1]) args.minConfidence = Number(argv[++i]);
    else if (argv[i] === "--reset-cache") args.resetCache = true;
    else if (argv[i] === "--seed-only") args.seedOnly = true;
    else if (argv[i] === "--endpoint" && argv[i + 1]) args.endpoint = argv[++i]!;
    else if (argv[i] === "--model" && argv[i + 1]) args.model = argv[++i]!;
    else if (argv[i] === "--no-tie-breaks") args.tieBreaks = false;
    else if (argv[i] === "--no-section-context") args.sectionContext = false;
    else if (argv[i] === "--terse-criteria") args.terseCriteria = true;
    else if (argv[i] === "--cascade" && argv[i + 1]) args.cascadeWindow = Number(argv[++i]);
  }
  return args;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs();

  if (args.seedOnly) {
    // Provisional summaries are a pure function of the item's stored data, so
    // re-running this needs no API key and no spend. The categorizer replaces
    // them with real prose later.
    let items = loadIncludedItems();
    if (args.ids) items = items.filter((l) => args.ids!.has(l.item.id));
    if (args.sample && args.sample > 0) items = items.slice(0, args.sample);

    let updated = 0;
    for (const { filePath, item } of items) {
      if (item.curation?.status !== "included") continue;
      if (hasCategorizerInsights(item)) continue;
      const seeded = deriveSeedSummary(item);
      if (!seeded || seeded === sanitizeText(item.insights?.summary)) continue;
      // Replacing an existing summary is only safe for items the caller named
      // explicitly — without an id set, this only fills a missing summary so a
      // real one can never be overwritten by a repository description.
      const existing = sanitizeText(item.insights?.summary);
      if (existing && !args.ids) continue;
      if (!args.dryRun) saveItem(filePath, { ...item, insights: { ...item.insights, summary: seeded } });
      updated += 1;
    }
    console.log(`Seed-only: ${updated} summar${updated === 1 ? "y" : "ies"} written from ${items.length} candidate item(s)${args.dryRun ? " (dry-run)" : ""}.`);
    return;
  }

  client.endpoint = args.endpoint;
  client.model = args.model;
  client.apiKey = resolveApiKey(client.endpoint);

  const categories = loadCategories() as CategoryWithHints[];
  const categoryCriteria = buildCategoryCriteria(categories, args.terseCriteria);
  const shortlistCriteria = buildCategoryShortlist(categories);
  const rosterLines = buildRosterLines(categories);
  const ablation = [args.tieBreaks ? "tb" : "-", args.sectionContext ? "sc" : "-", args.terseCriteria ? "tc" : "-", args.cascadeWindow > 0 ? "cs" + args.cascadeWindow : "-"].join("");
  const context = { categories, categoryCriteria, shortlistCriteria, rosterLines, ablation, tieBreaks: args.tieBreaks, sectionContext: args.sectionContext, cascadeWindow: args.cascadeWindow };
  const criteriaHash = computeCriteriaHash(ablation);
  const cache = loadCache(criteriaHash, args.resetCache);

  console.log(`Jev Reclassifier`);
  console.log(`Criteria hash: ${criteriaHash} | Categories: ${Object.keys(categoryCriteria).length - 1} + excluded`);
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

  // A provider limit or credit failure stops the run: every later item would
  // fail the same way, so we stop claiming work instead of retrying thousands
  // of doomed calls.
  let providerFailure: string | null = null;
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
      if (providerFailure) { release(); return; }
      try {
        const result = await reclassifyItem(loaded, context, client.apiKey, args.minConfidence);
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
          const updated = applyResultToItem(loaded.item, result.newCategory, result.newSection, result.shouldInclude, result.confidence);
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
        const message = err instanceof Error ? err.message : String(err);
        if (message.startsWith("PROVIDER_")) {
          if (!providerFailure) { providerFailure = message; console.error(`\n${message}`); }
          process.exitCode = 2;
          return;
        }
        console.error(`\nERROR ${loaded.item.id}: ${message}`);
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
