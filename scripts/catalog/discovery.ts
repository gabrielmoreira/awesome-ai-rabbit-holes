import {
  makeDiscoveryId as buildDiscoveryId,
  makeItemId,
  normalizeGitHubUrl,
  normalizeLoadedItem,
  normalizeSourceCoverageUrl,
} from "./core.ts";
import { updateProcessing } from "./processing.ts";
import { shouldSkipDiscoveredUrl } from "./source-lists.ts";
import type { CatalogItem, Discovery, DiscoveryCandidate, Source } from "./types.ts";
import { parseGitHubUrl } from "../support/github.ts";

function normalizeDiscoveryTarget(url: string): string {
  return normalizeSourceCoverageUrl(url);
}

export { makeDiscoveryId } from "./core.ts";

function deriveSourceInfo(source: Source): { name: string; url: string | null; repository: string | null } {
  const kind = source.kind ?? "direct-link";
  if (kind === "direct-link" || kind === "manual-submission") {
    return { name: "Manual submission", url: null, repository: null };
  }

  const github = parseGitHubUrl(source.url);
  if (github) {
    return {
      name: `${github.owner}/${github.repo}`,
      url: normalizeGitHubUrl(source.url),
      repository: `${github.owner}/${github.repo}`,
    };
  }

  try {
    const host = new URL(source.url).hostname.replace(/^www\./, "") || source.url;
    return { name: host, url: source.url, repository: null };
  } catch {
    return { name: source.url, url: source.url, repository: null };
  }
}

export function buildDiscovery(
  url: string,
  source: Source,
  discoveredAt: string,
  extraction: Discovery["extraction"] = {
    mode: "direct",
    section_path: ["inbox"],
    anchor_text: url,
    extracted_url: url,
    surrounding_text: source.note ?? null,
    confidence: "high",
  },
): Discovery {
  const sourceInfo = deriveSourceInfo(source);
  return {
    id: buildDiscoveryId(url, source),
    discovered_at: discoveredAt,
    source: {
      type: source.kind ?? "direct-link",
      name: sourceInfo.name,
      url: sourceInfo.url,
      repository: sourceInfo.repository,
    },
    extraction,
  };
}

export function buildNewCatalogItem(
  url: string,
  source: Source,
  discoveredAt: string,
  extraction?: Discovery["extraction"],
): CatalogItem {
  const github = parseGitHubUrl(url);
  const discovery = buildDiscovery(url, source, discoveredAt, extraction);
  return {
    id: makeItemId(url),
    kind: github ? "github-repo" : "website",
    name: github ? github.repo : url.split("/").pop() ?? url,
    canonical_url: url,
    identity: github ? { github_repo: `${github.owner}/${github.repo}` } : {},
    provenance: { discoveries: [discovery] },
    metadata: {
      github: {
        stars: null,
        forks: null,
        license: null,
        archived: null,
        created_at: null,
        pushed_at: null,
        description: null,
        homepage: null,
        topics: null,
        last_checked_at: null,
      },
    },
    insights: { summary: null, why_it_matters: null, mental_damage: null, tags: [], confidence: null },
    curation: { status: "pending", reason: null, evidence: [] },
    placement: { primary_category: null, section: null },
    lifecycle: { status: "incubating" },
  };
}

type DiscoveryGroup = {
  targetUrl: string;
  itemId: string;
  support: number;
  candidates: DiscoveryCandidate[];
};

function rankDiscoveryGroups(
  candidates: DiscoveryCandidate[],
  blockedItemIds: Set<string>,
  existingItems: CatalogItem[],
): DiscoveryGroup[] {
  const grouped = new Map<string, DiscoveryCandidate[]>();
  for (const candidate of candidates) {
    const targetUrl = normalizeDiscoveryTarget(candidate.target_url);
    const normalizedCandidate: DiscoveryCandidate = {
      target_url: targetUrl,
      source: candidate.source,
      extraction: {
        ...candidate.extraction,
        extracted_url: normalizeDiscoveryTarget(candidate.extraction.extracted_url),
      },
      ...(candidate.canonicalization_cause ? { canonicalization_cause: candidate.canonicalization_cause } : {}),
    };
    grouped.set(targetUrl, [...(grouped.get(targetUrl) ?? []), normalizedCandidate]);
  }

  const existingById = new Map(existingItems.map((item) => [item.id, item]));
  return [...grouped.entries()]
    .map(([targetUrl, group]) => ({
      targetUrl,
      itemId: makeItemId(targetUrl),
      support: new Set(group.map((candidate) => normalizeDiscoveryTarget(candidate.source.url))).size,
      candidates: group,
    }))
    .filter((group) => {
      if (blockedItemIds.has(group.itemId)) return false;
      const existing = existingById.get(group.itemId);
      if (!existing) return true;
      const existingDiscoveryIds = new Set(existing.provenance.discoveries.map((discovery) => discovery.id));
      return group.candidates.some((candidate) => !existingDiscoveryIds.has(buildDiscoveryId(group.targetUrl, candidate.source)));
    })
    .sort((a, b) => b.support - a.support || a.targetUrl.localeCompare(b.targetUrl));
}

export function orderDiscoverableSources(sources: Source[]): Source[] {
  const discoverableSources = sources.filter((source) => !shouldSkipDiscoveredUrl(source.url));
  return [
    ...discoverableSources.filter((source) => source.kind === "awesome-list"),
    ...discoverableSources.filter((source) => source.kind !== "awesome-list"),
  ];
}

export function resolveSourceListNewItemLimit(env: NodeJS.ProcessEnv = process.env): number | null {
  const raw = env.CATALOG_MAX_SOURCE_LIST_NEW_ITEMS?.trim();
  if (!raw) return null;
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

export function selectSourceListDiscoveryCandidates(
  candidates: DiscoveryCandidate[],
  blockedItemIds: Set<string>,
  existingItems: CatalogItem[] = [],
  maxItems: number | null = null,
): DiscoveryCandidate[] {
  const rankedGroups = rankDiscoveryGroups(candidates, blockedItemIds, existingItems);
  const limitedGroups = maxItems == null ? rankedGroups : rankedGroups.slice(0, maxItems);
  return limitedGroups.flatMap((group) => group.candidates);
}

function buildDirectDiscoveryCandidatesSync(sources: Source[]): DiscoveryCandidate[] {
  return sources
    .filter((source) => !shouldSkipDiscoveredUrl(source.url))
    .map((source) => {
      const extractedUrl = normalizeDiscoveryTarget(source.url);
      return {
        target_url: extractedUrl,
        source,
        extraction: {
          mode: "direct",
          section_path: ["inbox"],
          anchor_text: extractedUrl,
          extracted_url: extractedUrl,
          surrounding_text: source.note ?? null,
          confidence: "high",
        },
      } satisfies DiscoveryCandidate;
    });
}

export function discover(sources: Source[], existingItems: CatalogItem[]): { newItems: CatalogItem[]; updatedItems: CatalogItem[] } {
  return discoverCandidates(buildDirectDiscoveryCandidatesSync(sources), existingItems);
}

export function discoverCandidates(
  candidates: DiscoveryCandidate[],
  existingItems: CatalogItem[],
): { newItems: CatalogItem[]; updatedItems: CatalogItem[] } {
  const newItems: CatalogItem[] = [];
  const newItemIndexes = new Map<string, number>();
  const updatedById = new Map<string, CatalogItem>();
  const existingById = new Map(existingItems.map((item) => [item.id, item]));
  const discoveredAt = new Date().toISOString();

  for (const candidate of candidates) {
    if (shouldSkipDiscoveredUrl(candidate.target_url)) continue;

    const normalized = normalizeDiscoveryTarget(candidate.target_url);
    const extraction = {
      ...candidate.extraction,
      extracted_url: normalizeDiscoveryTarget(candidate.extraction.extracted_url),
    };
    const id = makeItemId(normalized);
    const existing = updatedById.get(id) ?? existingById.get(id);

    if (!existing) {
      const item = normalizeLoadedItem(buildNewCatalogItem(normalized, candidate.source, discoveredAt, extraction));
      updateProcessing(item, "discover", { status: "done", cause: candidate.canonicalization_cause ?? null });
      newItemIndexes.set(id, newItems.length);
      newItems.push(item);
      existingById.set(id, item);
      continue;
    }

    const newDiscovery = buildDiscovery(normalized, candidate.source, discoveredAt, extraction);
    if (existing.provenance.discoveries.some((discovery) => discovery.id === newDiscovery.id)) continue;

    const updated = normalizeLoadedItem({
      ...existing,
      provenance: {
        ...existing.provenance,
        discoveries: [...existing.provenance.discoveries, newDiscovery],
      },
    });
    updateProcessing(updated, "discover", { status: "done", cause: candidate.canonicalization_cause ?? null });

    const newItemIndex = newItemIndexes.get(id);
    if (newItemIndex !== undefined) {
      newItems[newItemIndex] = updated;
      existingById.set(id, updated);
      continue;
    }

    updatedById.set(id, updated);
    existingById.set(id, updated);
  }

  return { newItems, updatedItems: [...updatedById.values()] };
}
