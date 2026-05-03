import { mapWithConcurrency } from "../support/async.ts"
import { parseGitHubUrl } from "../support/github.ts"
import { buildProgressHeartbeat, shouldEmitProgressHeartbeat } from "../support/progress.ts"
import { discoverCandidates,
orderDiscoverableSources,
resolveSourceListNewItemLimit,
selectSourceListDiscoveryCandidates, } from "./discovery.ts"
import { makeItemId, normalizeSourceCoverageUrl } from "./core.ts";

import { loadCatalogItems, loadSources, saveCatalogItem } from "./data.ts"
import { loadSettings } from "./settings.ts"
import { loadSourceListDiscoveryCandidates,
materializeSourceListMetadata,
resolveCanonicalCatalogUrl,
shouldSkipDiscoveredUrl, } from "./source-lists.ts"
import type { CatalogItem, DiscoveryCandidate, Source } from "./types.ts"

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

async function buildDirectDiscoveryCandidates(
  sources: Source[],
  token?: string,
  deadlineMs: number | null = null,
): Promise<DiscoveryCandidate[]> {
  const orderedSources = orderDiscoverableSources(sources);
  const concurrency = resolveDirectDiscoveryConcurrency();
  const startedAtMs = Date.now();
  let completed = 0;

  const results: Array<DiscoveryCandidate | null> = await mapWithConcurrency(orderedSources, concurrency, async (source) => {
    if (deadlineMs != null && Date.now() >= deadlineMs) return null;
    const extractedUrl = source.url;
    const targetUrl = await resolveCanonicalCatalogUrl(extractedUrl, token);
    completed += 1;
    if (shouldEmitProgressHeartbeat(completed, orderedSources.length, 25)) {
      console.log(buildProgressHeartbeat({ label: "discover", completed, total: orderedSources.length, startedAtMs }));
    }
    const candidate: DiscoveryCandidate = {
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
    };
    return candidate;
  });

  return results.filter((candidate): candidate is DiscoveryCandidate => candidate !== null);
}

async function buildDiscoveryCandidates(
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

  await materializeSourceListMetadata(sources, token);
  const candidates = await buildDiscoveryCandidates(sources, existingItems, token, deadlineMs);
  const { newItems, updatedItems } = discoverCandidates(candidates, existingItems);

  for (const item of [...newItems, ...updatedItems]) saveCatalogItem(item);

  console.log(
    `✅ Discovery complete: ${candidates.length} candidate(s), ${newItems.length} new item(s), ${updatedItems.length} provenance update(s).`,
  );
}

export { shouldSkipDiscoveredUrl };
