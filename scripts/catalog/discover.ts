import * as fs from "node:fs";
import { writeTextFileIfChanged } from "../support/files.ts";
import { mapWithConcurrency } from "../support/async.ts";
import { parseGitHubUrl } from "../support/github.ts";
import { DISCOVERY_CANDIDATES_PATH } from "../support/paths.ts";
import { buildProgressHeartbeat, createProgressHeartbeatPrinter } from "../support/progress.ts";
import {
  orderDiscoverableSources,
  orderDiscoveryCandidates,
  reconcileDiscoveryCandidates,
  resolveSourceListNewItemLimit,
  selectSourceListDiscoveryCandidates,
} from "./discovery.ts";
import { makeItemId, normalizeSourceCoverageUrl, normalizeSourceKind } from "./core.ts";

import { loadCatalogItems, loadSources, saveCatalogItem } from "./data.ts";
import { loadSettings } from "./settings.ts";
import { loadSourceListDiscoveryCandidates,
materializeSourceListMetadata,
resolveCanonicalCatalogUrl,
shouldSkipDiscoveredUrl, } from "./source-lists.ts";
import type { CatalogItem, DiscoveryCandidate, Source } from "./types.ts";

export function resolveDirectDiscoveryConcurrency(env: NodeJS.ProcessEnv = process.env): number {
  return loadSettings({}, env).concurrency.site;
}

function resolveDiscoverBudgetMs(env: NodeJS.ProcessEnv = process.env): number | null {
  const rawMinutes = env.CATALOG_DISCOVER_BUDGET_MINUTES?.trim();
  if (rawMinutes) {
    const parsedMinutes = Number.parseFloat(rawMinutes);
    if (Number.isFinite(parsedMinutes) && parsedMinutes > 0) return Math.floor(parsedMinutes * 60_000);
  }
  const settings = loadSettings({}, env);
  return settings.budgets.discover_minutes > 0 ? settings.budgets.discover_minutes * 60_000 : null;
}

function normalizeDiscoveryCandidate(raw: unknown): DiscoveryCandidate | null {
  if (!raw || typeof raw !== "object") return null;

  const targetUrl = typeof (raw as { target_url?: unknown }).target_url === "string"
    ? normalizeSourceCoverageUrl((raw as { target_url: string }).target_url)
    : null;
  if (!targetUrl) return null;

  const source = (raw as { source?: { url?: unknown; kind?: unknown; note?: unknown } }).source;
  const extraction = (raw as { extraction?: { mode?: unknown; section_path?: unknown; anchor_text?: unknown; extracted_url?: unknown; surrounding_text?: unknown; confidence?: unknown } }).extraction;
  const canonicalizationCause = (raw as { canonicalization_cause?: { type?: unknown; message?: unknown } }).canonicalization_cause;
  const canonicalUrlHint = typeof (raw as { canonical_url_hint?: unknown }).canonical_url_hint === "string"
    ? normalizeSourceCoverageUrl((raw as { canonical_url_hint: string }).canonical_url_hint)
    : null;
  const matchedCategoryIds = Array.isArray((raw as { matched_category_ids?: unknown }).matched_category_ids)
    ? (raw as { matched_category_ids: unknown[] }).matched_category_ids.filter((value): value is string => typeof value === "string")
    : [];
  const sectionPath = Array.isArray(extraction?.section_path)
    ? extraction.section_path.filter((value): value is string => typeof value === "string")
    : [];
  const kind = normalizeSourceKind(typeof source?.kind === "string" ? source.kind : null);

  return {
    target_url: targetUrl,
    source: {
      url: typeof source?.url === "string" ? source.url : targetUrl,
      ...(kind ? { kind } : {}),
      ...(typeof source?.note === "string" ? { note: source.note } : {}),
    },
    extraction: {
      mode: extraction?.mode === "parsed" || extraction?.mode === "scraped" ? extraction.mode : "direct",
      section_path: sectionPath.length > 0 ? sectionPath : ["inbox"],
      anchor_text: typeof extraction?.anchor_text === "string" ? extraction.anchor_text : targetUrl,
      extracted_url: typeof extraction?.extracted_url === "string" ? normalizeSourceCoverageUrl(extraction.extracted_url) : targetUrl,
      surrounding_text: typeof extraction?.surrounding_text === "string" ? extraction.surrounding_text : null,
      confidence: extraction?.confidence === "low" || extraction?.confidence === "medium" ? extraction.confidence : "high",
    },
    ...(canonicalUrlHint && canonicalUrlHint !== targetUrl ? { canonical_url_hint: canonicalUrlHint } : {}),
    ...(matchedCategoryIds.length > 0 ? { matched_category_ids: [...new Set(matchedCategoryIds)].sort() } : {}),
    ...(typeof canonicalizationCause?.type === "string" && typeof canonicalizationCause?.message === "string"
      ? { canonicalization_cause: { type: canonicalizationCause.type, message: canonicalizationCause.message } }
      : {}),
  };
}

export function serializeDiscoveryCandidates(candidates: DiscoveryCandidate[]): string {
  return `${JSON.stringify(candidates, null, 2)}\n`;
}

export function loadDiscoveryCandidates(cachePath: string = DISCOVERY_CANDIDATES_PATH): DiscoveryCandidate[] {
  if (!fs.existsSync(cachePath)) return [];

  try {
    const raw = JSON.parse(fs.readFileSync(cachePath, "utf8"));
    if (!Array.isArray(raw)) return [];
    return raw
      .map((candidate) => normalizeDiscoveryCandidate(candidate))
      .filter((candidate): candidate is DiscoveryCandidate => candidate !== null);
  } catch {
    return [];
  }
}

export function saveDiscoveryCandidates(
  candidates: DiscoveryCandidate[],
  cachePath: string = DISCOVERY_CANDIDATES_PATH,
): void {
  writeTextFileIfChanged(cachePath, serializeDiscoveryCandidates(candidates));
}

export const rankDirectDiscoveryCandidates = orderDiscoveryCandidates;

async function buildDirectDiscoveryCandidates(
  sources: Source[],
  token?: string,
  deadlineMs: number | null = null,
): Promise<DiscoveryCandidate[]> {
  const orderedSources = orderDiscoverableSources(sources);
  const concurrency = resolveDirectDiscoveryConcurrency();
  const startedAtMs = Date.now();
  const heartbeatPrinter = createProgressHeartbeatPrinter();
  let completed = 0;

  const results: Array<DiscoveryCandidate | null> = await mapWithConcurrency(orderedSources, concurrency, async (source) => {
    if (deadlineMs != null && Date.now() >= deadlineMs) return null;
    const extractedUrl = source.url;
    const targetUrl = await resolveCanonicalCatalogUrl(extractedUrl, token);
    completed += 1;
    heartbeatPrinter.push(
      buildProgressHeartbeat({
        phase: "discover:direct",
        done: completed,
        total: orderedSources.length,
        ok: completed,
        startedAtMs,
        nowMs: Date.now(),
        budgetLeftMs: deadlineMs == null ? null : deadlineMs - Date.now(),
        checkpoint: source.url,
      })
    );
    return {
      target_url: targetUrl,
      source,
      extraction: {
        mode: parseGitHubUrl(extractedUrl) || extractedUrl === targetUrl ? "direct" : "scraped",
        section_path: ["inbox"],
        anchor_text: extractedUrl,
        extracted_url: extractedUrl,
        surrounding_text: source.note ?? null,
        confidence: "high",
      },
    } satisfies DiscoveryCandidate;
  });

  heartbeatPrinter.push(
    buildProgressHeartbeat({
      phase: "discover:direct",
      done: completed,
      total: orderedSources.length,
      ok: completed,
      startedAtMs,
      nowMs: Date.now(),
      budgetLeftMs: deadlineMs == null ? null : deadlineMs - Date.now(),
      final: true,
    })
  );

  return orderDiscoveryCandidates(results.filter((candidate): candidate is DiscoveryCandidate => candidate !== null));

}
export async function collectDiscoveryCandidates(
  sources: Source[],
  existingItems: CatalogItem[],
  token?: string,
  deadlineMs: number | null = null,
): Promise<DiscoveryCandidate[]> {
  const directCandidates = await buildDirectDiscoveryCandidates(sources, token, deadlineMs);
  if (deadlineMs != null && Date.now() >= deadlineMs) {
    console.log("Discover budget exhausted after direct source processing; skipping source-list candidate expansion.");
    return directCandidates;
  }

  const blockedItemIds = new Set(directCandidates.map((candidate) => makeItemId(candidate.target_url)));
  const listCandidates = loadSourceListDiscoveryCandidates(sources);
  const limit = resolveSourceListNewItemLimit();
  const selectedCandidates = selectSourceListDiscoveryCandidates(listCandidates, blockedItemIds, existingItems, limit);

  if (limit != null) {
    const candidateIds = new Set(selectedCandidates.map((candidate) => makeItemId(candidate.target_url)));
    console.log(
      `Source-list discovery cap: selected ${candidateIds.size} item group(s) with limit ${limit}; already-discovered groups are skipped before capping.`,
    );
  }

  return [...directCandidates, ...selectedCandidates];
}


export function selectDiscoverSources(sources: Source[], sourceUrls?: Set<string>): Source[] {
  if (!sourceUrls) return sources;
  const normalizedSourceUrls = new Set([...sourceUrls].map((url) => normalizeSourceCoverageUrl(url)));
  return sources.filter((source) => normalizedSourceUrls.has(normalizeSourceCoverageUrl(source.url)));
}

export async function runDiscover(
  token?: string,
  options: { sourceUrls?: Set<string> } = {},
): Promise<void> {
  const allSources = loadSources();
  const sources = selectDiscoverSources(allSources, options.sourceUrls);
  const existingItems = loadCatalogItems();
  const budgetMs = resolveDiscoverBudgetMs();
  const deadlineMs = budgetMs == null ? null : Date.now() + budgetMs;
  console.log(`Discovering catalog candidates from ${sources.length} source(s)...`);

  await materializeSourceListMetadata(sources, token, deadlineMs);
  const candidates = await collectDiscoveryCandidates(sources, existingItems, token, deadlineMs);
  saveDiscoveryCandidates(candidates);
  const persistedCandidates = loadDiscoveryCandidates();
  const { newItems, updatedItems } = reconcileDiscoveryCandidates(persistedCandidates, existingItems);

  for (const item of [...newItems, ...updatedItems]) saveCatalogItem(item);

  console.log(
    `✅ Discovery complete: ${persistedCandidates.length} candidate(s), ${newItems.length} new item(s), ${updatedItems.length} provenance update(s).`,
  );
}

export { shouldSkipDiscoveredUrl };
