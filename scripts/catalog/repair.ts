import * as fs from "node:fs";
import * as path from "node:path";
import { mapWithConcurrency } from "../support/async.ts";
import { fetchGitHubRepo, parseGitHubUrl, resolveGitHubRepoDataIdentity } from "../support/github.ts";
import { CATALOG_ITEMS_DIR } from "../support/paths.ts";
import { makeItemId, makeItemPath, normalizeCatalogUrl, normalizeLoadedItem } from "./core.ts";
import { loadGeneratedCatalogItems, saveCatalogItem } from "./data.ts";
import {
  collectCatalogDisplayNameCandidates,
  normalizeCatalogDisplayNameKey,
  resolveCatalogDisplayName,
  resolveCatalogDisplayNameTargetKeys,
  resolveCatalogUrlHostLabel,
  selectBestCatalogDisplayName,
} from "./display-names.ts";
import { summarizeDistinctCounts } from "./reporting.ts";
import { loadCatalogOverrideIds } from "./overrides.ts";
import type { CatalogItem, ProcessingCommandState } from "./types.ts";
import { resolveWebsiteLink } from "./website-links.ts";

const REPAIR_CONCURRENCY = 8;
const PROCESSING_STATUS_PRIORITY: Record<ProcessingCommandState["status"], number> = {
  done: 5,
  deferred: 4,
  failed: 3,
  skipped: 2,
  pending: 1,
};
const CONFIDENCE_PRIORITY = { high: 3, medium: 2, low: 1 } as const;

function legacyCatalogItemPath(url: string): string {
  const github = parseGitHubUrl(url);
  if (github) return makeItemPath(url);
  const legacyId = url.replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/gi, "__").toLowerCase();
  return path.join(CATALOG_ITEMS_DIR, `${legacyId}.yml`);
}

function persistedGitHubRenameTarget(item: CatalogItem): string | null {
  const fullName = item.metadata.github.full_name;
  const htmlUrl = item.metadata.github.html_url;
  if (typeof fullName !== "string" || typeof htmlUrl !== "string") return null;

  const verifiedIdentity = resolveGitHubRepoDataIdentity({
    full_name: fullName,
    html_url: htmlUrl,
  });
  if (!verifiedIdentity) return null;

  const currentUrl = normalizeCatalogUrl(item.canonical_url);
  if (
    currentUrl === verifiedIdentity.canonicalUrl
    && item.id === makeItemId(verifiedIdentity.canonicalUrl)
  ) {
    return null;
  }
  return verifiedIdentity.canonicalUrl;
}

export type CatalogRepairCause = "unchanged" | "github_alias" | "website_to_github" | "website_canonical";

export type CatalogRepairTarget = {
  canonicalUrl: string;
  cause: CatalogRepairCause;
  ambiguous?: true;
};

export type CatalogRepairPlan = {
  items: CatalogItem[];
  changedItems: CatalogItem[];
  removedPaths: string[];
  summary: {
    candidates: number;
    changedCandidates: number;
    repairedGroups: number;
    removedPaths: number;
    byCause: Array<{ value: string; count: number }>;
  };
};
export type RunRepairOptions = {
  mode?: "manual" | "automatic-safe";
};

export type RepairCatalogItemsOptions = {
  protectedItemIds?: Set<string>;
  candidateItemIds?: Set<string>;
};


export type RepairDeps = {
  loadItems: () => CatalogItem[];
  loadOverriddenItemIds: () => Set<string>;
  resolveTarget: (item: CatalogItem, token?: string) => Promise<CatalogRepairTarget>;
  saveItem: (item: CatalogItem) => void;
  removePath: (filePath: string) => void;
};


function choosePreferredItem(items: CatalogItem[], canonicalUrl: string): CatalogItem {
  const canonicalGithub = parseGitHubUrl(canonicalUrl);
  const scored = items.map((item) => {
    let score = 0;
    const resolvedName = resolveCatalogDisplayName(item);
    if (item.curation.status !== "pending") score += 200;
    if (item.processing?.categorize?.status === "done") score += 80;
    if (item.processing?.stars?.status === "done") score += 40;
    if (item.placement.primary_category) score += 30;
    if (item.insights.summary) score += 20;
    if (item.insights.why_it_matters) score += 15;
    if (item.insights.mental_damage) score += 10;
    if ((item.insights.tags ?? []).length > 0) score += 10;
    if (canonicalGithub && item.kind === "github-repo") score += 50;
    if (resolvedName === item.name) score += 10;
    return { item, score };
  });
  scored.sort((left, right) => right.score - left.score || left.item.canonical_url.localeCompare(right.item.canonical_url));
  return scored[0]?.item ?? items[0]!;
}

function pickFirstDefined<T>(preferred: CatalogItem, items: CatalogItem[], pick: (item: CatalogItem) => T | null | undefined): T | null {
  const preferredValue = pick(preferred);
  if (preferredValue !== null && preferredValue !== undefined) return preferredValue;
  for (const item of items) {
    const value = pick(item);
    if (value !== null && value !== undefined) return value;
  }
  return null;
}

function serializeRepairComparableItem(item: CatalogItem): string {
  return JSON.stringify(normalizeLoadedItem(item));
}

function chooseMergedName(preferred: CatalogItem, items: CatalogItem[], canonicalUrl: string): string {
  const canonicalGithub = parseGitHubUrl(canonicalUrl);
  const targetKeys = resolveCatalogDisplayNameTargetKeys(canonicalUrl, canonicalGithub ? `${canonicalGithub.owner}/${canonicalGithub.repo}` : preferred.identity.github_repo);
  const mergedName = selectBestCatalogDisplayName(
    items.flatMap((item) => collectCatalogDisplayNameCandidates(item)),
    targetKeys,
  );
  if (mergedName) return mergedName;
  if (canonicalGithub) return canonicalGithub.repo;
  return preferred.name;
}

function mergeTags(items: CatalogItem[]): string[] {
  return [...new Set(items.flatMap((item) => item.insights.tags ?? []).map((value) => value.trim()).filter((value) => value.length > 0))]
    .sort((left, right) => left.localeCompare(right));
}

function mergeConfidence(items: CatalogItem[]): "high" | "medium" | "low" | null {
  const values = [...new Set(items.map((item) => item.insights.confidence).filter((value): value is "high" | "medium" | "low" => value != null))];
  if (values.length === 0) return null;
  values.sort((left, right) => CONFIDENCE_PRIORITY[right] - CONFIDENCE_PRIORITY[left]);
  return values[0] ?? null;
}

function mergeProcessingState(items: CatalogItem[], key: string): ProcessingCommandState | undefined {
  const states = items
    .map((item) => item.processing?.[key])
    .filter((state): state is ProcessingCommandState => state != null);
  if (states.length === 0) return undefined;
  states.sort((left, right) => {
    const byStatus = PROCESSING_STATUS_PRIORITY[right.status] - PROCESSING_STATUS_PRIORITY[left.status];
    if (byStatus !== 0) return byStatus;
    return String(right.updated_at ?? "").localeCompare(String(left.updated_at ?? ""));
  });
  return states[0];
}

function mergeProcessing(items: CatalogItem[], forceCategorizePending: boolean): CatalogItem["processing"] {
  const keys = [...new Set(items.flatMap((item) => Object.keys(item.processing ?? {})))].sort((left, right) => left.localeCompare(right));
  const merged = Object.fromEntries(
    keys
      .map((key) => [key, mergeProcessingState(items, key)] as const)
      .filter((entry): entry is [string, ProcessingCommandState] => entry[1] != null),
  );
  if (forceCategorizePending) {
    merged.categorize = { status: "pending", updated_at: null, cause: null };
  }
  return merged;
}

function resolveMergedCuration(
  items: CatalogItem[],
): { curation: CatalogItem["curation"]; conflict: boolean } {
  const decided = [...new Set(items.map((item) => item.curation.status).filter((status) => status !== "pending"))];
  const includedPlacementKeys = new Set(
    items
      .filter((item) => item.curation.status === "included")
      .map((item) => JSON.stringify({
        primary_category: item.placement.primary_category,
        secondary_categories: [...(item.placement.secondary_categories ?? [])].sort(),
        section: item.placement.section,
      })),
  );
  const conflict = decided.length > 1 || includedPlacementKeys.size > 1;
  if (conflict) {
    const combinedEvidence = [
      ...new Set(
        items.flatMap((item) => [
          ...(item.curation.evidence ?? []),
          ...(item.curation.reason
            ? [`${item.curation.status}: ${item.curation.reason}`]
            : []),
        ]).map((value) => value.trim()).filter((value) => value.length > 0),
      ),
    ];
    return {
      curation: {
        status: "pending",
        reason: "Conflicting duplicate curation or placement requires review.",
        evidence: combinedEvidence,
      },
      conflict: true,
    };
  }

  if (decided.length === 0) {
    return { curation: { status: "pending", reason: null, evidence: [] }, conflict: false };
  }

  const chosenStatus = decided[0] as "included" | "excluded";
  const sameStatusItems = items.filter((item) => item.curation.status === chosenStatus);
  return {
    curation: {
      status: chosenStatus,
      reason: sameStatusItems.map((item) => item.curation.reason).find((value): value is string => typeof value === "string" && value.trim().length > 0) ?? null,
      evidence: [...new Set(sameStatusItems.flatMap((item) => item.curation.evidence ?? []).map((value) => value.trim()).filter((value) => value.length > 0))],
    },
    conflict: false,
  };
}

function resolveMergedPlacement(items: CatalogItem[], keepPlacement: boolean): CatalogItem["placement"] {
  if (!keepPlacement) return { primary_category: null, section: null };
  const categories = [...new Set(items.map((item) => item.placement.primary_category).filter((value): value is string => typeof value === "string" && value.length > 0))];
  const sections = [...new Set(items.map((item) => item.placement.section).filter((value): value is string => typeof value === "string" && value.length > 0))];
  const secondaryLists = items.map((item) => [...(item.placement.secondary_categories ?? [])].sort());
  const distinctSecondaryLists = new Set(secondaryLists.map((values) => JSON.stringify(values)));
  const secondaryCategories = distinctSecondaryLists.size === 1 && secondaryLists[0]?.length
    ? secondaryLists[0]
    : undefined;
  return {
    primary_category: categories.length === 1 ? categories[0] : null,
    secondary_categories: secondaryCategories,
    section: sections.length === 1 ? sections[0] : null,
  };
}

function mergeGithubMetadata(preferred: CatalogItem, items: CatalogItem[]): CatalogItem["metadata"]["github"] {
  const metadataSource = items
    .filter((item) => typeof item.metadata.github.last_checked_at === "string")
    .sort((left, right) => String(right.metadata.github.last_checked_at ?? "").localeCompare(String(left.metadata.github.last_checked_at ?? "")))[0]
    ?? preferred;
  return {
    ...metadataSource.metadata.github,
    topics: metadataSource.metadata.github.topics ? [...metadataSource.metadata.github.topics] : null,
    readme: metadataSource.metadata.github.readme ?? null,
  };
}

function collectDiscoveryAnchorKeys(item: CatalogItem): Set<string> {
  return new Set(
    item.provenance.discoveries
      .map((discovery) => normalizeCatalogDisplayNameKey(discovery.extraction.anchor_text))
      .filter((value): value is string => typeof value === "string" && value.length > 0),
  );
}

export function findLocalWebsiteGitHubMatch(item: CatalogItem, items: CatalogItem[]): string | null {
  if (item.kind !== "website") return null;
  const hostLabel = resolveCatalogUrlHostLabel(item.canonical_url);
  if (!hostLabel) return null;

  const websiteEvidenceKeys = [...collectDiscoveryAnchorKeys(item)];
  if (websiteEvidenceKeys.length === 0) return null;

  const candidates = items.filter((candidate) => {
    const github = parseGitHubUrl(candidate.canonical_url);
    if (!github || candidate.id === item.id) return false;
    const candidateKeys = new Set<string>([
      github.repo,
      normalizeCatalogDisplayNameKey(candidate.name) ?? "",
      ...collectDiscoveryAnchorKeys(candidate),
    ].filter((value) => value.length > 0));
    if (!candidateKeys.has(hostLabel)) return false;
    return websiteEvidenceKeys.some((key) => candidateKeys.has(key));
  });

  const uniqueUrls = [...new Set(candidates.map((candidate) => normalizeCatalogUrl(candidate.canonical_url)))];
  if (uniqueUrls.length !== 1) return null;
  return uniqueUrls[0] ?? null;
}

export function selectRepairCandidates(
  items: CatalogItem[],
  protectedItemIds: Set<string> = new Set(),
): CatalogItem[] {
  const githubRepoCounts = new Map<string, number>();
  const githubRepoKeyCounts = new Map<string, number>();
  const githubNameCounts = new Map<string, number>();
  const websiteSignals = new Set<string>();
  const normalizedUrlCounts = new Map<string, number>();
  const githubRenameEvidenceIds = new Set<string>();
  for (const item of items) {
    const normalizedUrl = normalizeCatalogUrl(item.canonical_url);
    normalizedUrlCounts.set(normalizedUrl, (normalizedUrlCounts.get(normalizedUrl) ?? 0) + 1);
    if (persistedGitHubRenameTarget(item)) githubRenameEvidenceIds.add(item.id);
  }
  for (const item of items) {
    const github = parseGitHubUrl(item.canonical_url);
    const nameKey = normalizeCatalogDisplayNameKey(item.name);
    if (github) {
      githubRepoCounts.set(github.repo, (githubRepoCounts.get(github.repo) ?? 0) + 1);
      const repoKey = normalizeCatalogDisplayNameKey(github.repo);
      if (repoKey) githubRepoKeyCounts.set(repoKey, (githubRepoKeyCounts.get(repoKey) ?? 0) + 1);
      if (nameKey) githubNameCounts.set(nameKey, (githubNameCounts.get(nameKey) ?? 0) + 1);
      continue;
    }
    if (item.kind !== "website") continue;
    const hostLabel = resolveCatalogUrlHostLabel(item.canonical_url);
    if (hostLabel) websiteSignals.add(hostLabel);
    if (nameKey) websiteSignals.add(nameKey);
  }

  return items.filter((item) => {
    if (protectedItemIds.has(item.id)) return false;
    const normalizedUrl = normalizeCatalogUrl(item.canonical_url);
    if ((normalizedUrlCounts.get(normalizedUrl) ?? 0) > 1 || githubRenameEvidenceIds.has(item.id)) {
      return true;
    }
    const resolvedName = resolveCatalogDisplayName(item);
    const needsNameRepair = resolvedName.trim() !== item.name.trim();
    const github = parseGitHubUrl(item.canonical_url);
    if (github) {
      const repoKey = normalizeCatalogDisplayNameKey(github.repo);
      const nameKey = normalizeCatalogDisplayNameKey(item.name);
      const hasAliasProneGitHubMatch = (githubRepoCounts.get(github.repo) ?? 0) > 1
        || (repoKey != null && (githubRepoKeyCounts.get(repoKey) ?? 0) > 1)
        || (nameKey != null && (githubNameCounts.get(nameKey) ?? 0) > 1);
      const hasWebsiteMatch = (repoKey != null && websiteSignals.has(repoKey))
        || (nameKey != null && websiteSignals.has(nameKey));
      return needsNameRepair || hasAliasProneGitHubMatch || hasWebsiteMatch;
    }
    if (item.kind !== "website") return needsNameRepair;
    const hostLabel = resolveCatalogUrlHostLabel(item.canonical_url);
    const nameKey = normalizeCatalogDisplayNameKey(item.name);
    const hasLocalGitHubMatch = Boolean(
      (hostLabel && ((githubRepoKeyCounts.get(hostLabel) ?? 0) > 0 || (githubNameCounts.get(hostLabel) ?? 0) > 0))
      || (nameKey && ((githubRepoKeyCounts.get(nameKey) ?? 0) > 0 || (githubNameCounts.get(nameKey) ?? 0) > 0)),
    );
    return hasLocalGitHubMatch || needsNameRepair;
  });
}
export function selectAutomaticSafeRepairCandidates(
  items: CatalogItem[],
  protectedItemIds: Set<string> = new Set(),
): CatalogItem[] {
  const itemsByNormalizedUrl = new Map<string, CatalogItem[]>();
  const aliasTargetsById = new Map<string, Set<string>>();
  const protectedTargetUrls = new Set<string>();
  for (const item of items) {
    const normalizedUrl = normalizeCatalogUrl(item.canonical_url);
    itemsByNormalizedUrl.set(normalizedUrl, [...(itemsByNormalizedUrl.get(normalizedUrl) ?? []), item]);
    const aliasTarget = persistedGitHubRenameTarget(item);
    if (aliasTarget) {
      const targets = aliasTargetsById.get(item.id) ?? new Set<string>();
      targets.add(aliasTarget);
      aliasTargetsById.set(item.id, targets);
    }
    if (protectedItemIds.has(item.id)) {
      protectedTargetUrls.add(normalizedUrl);
      if (aliasTarget) protectedTargetUrls.add(aliasTarget);
    }
  }

  const verifiedAliasTargetUrls = new Set(
    [...aliasTargetsById.values()]
      .filter((targets) => targets.size === 1)
      .map((targets) => targets.values().next().value!),
  );
  const blockedCollisionUrls = new Set(
    [...itemsByNormalizedUrl.entries()]
      .filter(([, matches]) => matches.some((item) => protectedItemIds.has(item.id)))
      .map(([normalizedUrl]) => normalizedUrl),
  );
  return items.filter((item) => {
    if (protectedItemIds.has(item.id)) return false;
    const normalizedUrl = normalizeCatalogUrl(item.canonical_url);
    const hasUnprotectedExactCollision =
      (itemsByNormalizedUrl.get(normalizedUrl)?.length ?? 0) > 1
      && !blockedCollisionUrls.has(normalizedUrl);
    const aliasTargets = aliasTargetsById.get(item.id);
    const verifiedAliasTarget = aliasTargets?.size === 1
      ? aliasTargets.values().next().value ?? null
      : null;
    const isVerifiedAliasTargetOccupant =
      verifiedAliasTargetUrls.has(normalizedUrl)
      && !protectedTargetUrls.has(normalizedUrl);
    return hasUnprotectedExactCollision
      || isVerifiedAliasTargetOccupant
      || (verifiedAliasTarget != null && !protectedTargetUrls.has(verifiedAliasTarget));
  });
}


export async function resolveCatalogRepairTarget(item: CatalogItem, token?: string): Promise<CatalogRepairTarget> {
  const normalizedUrl = normalizeCatalogUrl(item.canonical_url);
  const github = parseGitHubUrl(normalizedUrl);
  if (github) {
    const repoData = await fetchGitHubRepo(github.owner, github.repo, token);
    const apiIdentity = repoData ? resolveGitHubRepoDataIdentity(repoData) : null;
    const canonicalUrl = apiIdentity?.canonicalUrl ?? normalizedUrl;
    return {
      canonicalUrl,
      cause: canonicalUrl === normalizedUrl ? "unchanged" : "github_alias",
    };
  }
  if (item.kind === "website") {
    const resolution = await resolveWebsiteLink(normalizedUrl, token);
    const canonicalUrl = normalizeCatalogUrl(resolution.github_repo_url ?? resolution.canonical_url ?? normalizedUrl);
    if (resolution.github_repo_url) {
      return { canonicalUrl, cause: canonicalUrl === normalizedUrl ? "unchanged" : "website_to_github" };
    }
    return { canonicalUrl, cause: canonicalUrl === normalizedUrl ? "unchanged" : "website_canonical" };
  }
  return { canonicalUrl: normalizedUrl, cause: "unchanged" };
}

export function repairCatalogItems(
  items: CatalogItem[],
  targets: Map<string, CatalogRepairTarget>,
  options: RepairCatalogItemsOptions = {},
): CatalogRepairPlan {
  const githubRenameTargetSetsById = new Map<string, Set<string>>();
  for (const item of items) {
    const renameTarget = persistedGitHubRenameTarget(item);
    if (!renameTarget) continue;
    const targetsForId = githubRenameTargetSetsById.get(item.id) ?? new Set<string>();
    targetsForId.add(renameTarget);
    githubRenameTargetSetsById.set(item.id, targetsForId);
  }
  const githubRenameTargetsById = new Map<string, string>();
  const ambiguousGitHubRenameIds = new Set<string>();
  for (const [id, renameTargets] of githubRenameTargetSetsById) {
    if (renameTargets.size === 1) {
      githubRenameTargetsById.set(id, renameTargets.values().next().value!);
    } else {
      ambiguousGitHubRenameIds.add(id);
    }
  }
  const protectedItemIds = options.protectedItemIds ?? new Set<string>();
  const candidateItemIds = options.candidateItemIds;
  const protectedTargetUrls = new Set<string>();
  for (const item of items) {
    if (!protectedItemIds.has(item.id)) continue;
    protectedTargetUrls.add(normalizeCatalogUrl(item.canonical_url));
    const renameTarget = persistedGitHubRenameTarget(item);
    if (renameTarget) protectedTargetUrls.add(renameTarget);
  }
  const skippedItems = new Set<CatalogItem>();
  const grouped = new Map<string, CatalogItem[]>();
  for (const item of items) {
    const freshTarget = targets.get(item.id);
    const targetUrl = freshTarget?.ambiguous
      ? normalizeCatalogUrl(item.canonical_url)
      : freshTarget?.cause === "github_alias"
        ? freshTarget.canonicalUrl
        : ambiguousGitHubRenameIds.has(item.id)
          ? normalizeCatalogUrl(item.canonical_url)
          : githubRenameTargetsById.get(item.id)
            ?? freshTarget?.canonicalUrl
            ?? normalizeCatalogUrl(item.canonical_url);
    if (
      (candidateItemIds && !candidateItemIds.has(item.id))
      || protectedItemIds.has(item.id)
      || protectedTargetUrls.has(targetUrl)
    ) {
      skippedItems.add(item);
      continue;
    }
    grouped.set(targetUrl, [...(grouped.get(targetUrl) ?? []), item]);
  }

  const changedItems: CatalogItem[] = [];
  const finalItems: CatalogItem[] = [...skippedItems];
  for (const [targetUrl, group] of [...grouped.entries()].sort((left, right) => left[0].localeCompare(right[0]))) {
    const originalUrls = [...new Set(group.map((item) => normalizeCatalogUrl(item.canonical_url)))];
    const targetChanged = group.some((item) => normalizeCatalogUrl(item.canonical_url) !== targetUrl);
    const preferred = choosePreferredItem(group, targetUrl);
    const mergedName = chooseMergedName(preferred, group, targetUrl);
    const nameChanged = group.some((item) => item.name.trim() !== mergedName);
    const targetGithub = parseGitHubUrl(targetUrl);
    const identityChanged = group.some((item) => {
      if (item.id !== makeItemId(targetUrl)) return true;
      if (!targetGithub) return false;
      const itemGithub = item.identity.github_repo
        ? parseGitHubUrl(`https://github.com/${item.identity.github_repo}`)
        : null;
      return !itemGithub
        || itemGithub.owner.toLowerCase() !== targetGithub.owner.toLowerCase()
        || itemGithub.repo.toLowerCase() !== targetGithub.repo.toLowerCase();
    });
    const urlSpellingChanged = group.some((item) => item.canonical_url !== targetUrl);
    if (originalUrls.length === 1 && !targetChanged && !nameChanged && !identityChanged && !urlSpellingChanged) {
      const preferredSignature = serializeRepairComparableItem(preferred);
      const shouldPersistPreferred = group.some((item) => serializeRepairComparableItem(item) !== preferredSignature);
      finalItems.push(preferred);
      if (shouldPersistPreferred) changedItems.push(preferred);
      continue;
    }

    const { curation, conflict } = resolveMergedCuration(group);
    const keepPlacement = curation.status === "included" && !conflict;
    const merged = normalizeLoadedItem({
      ...preferred,
      id: makeItemId(targetUrl),
      kind: targetGithub ? "github-repo" : preferred.kind,
      name: mergedName,
      canonical_url: targetUrl,
      identity: targetGithub
        ? { github_repo: `${targetGithub.owner}/${targetGithub.repo}` }
        : (() => {
            const githubRepo = pickFirstDefined(preferred, group, (item) => item.identity.github_repo);
            return githubRepo ? { github_repo: githubRepo } : {};
          })(),
      provenance: {
        discoveries: group.flatMap((item) => item.provenance.discoveries),
      },
      metadata: {
        github: mergeGithubMetadata(preferred, group),
      },
      insights: {
        summary: pickFirstDefined(preferred, group, (item) => item.insights.summary),
        why_it_matters: pickFirstDefined(preferred, group, (item) => item.insights.why_it_matters),
        mental_damage: pickFirstDefined(preferred, group, (item) => item.insights.mental_damage),
        tags: mergeTags(group),
        confidence: mergeConfidence(group),
      },
      curation,
      placement: group.length === 1 && keepPlacement
        ? preferred.placement
        : resolveMergedPlacement(group, keepPlacement),
      lifecycle: preferred.lifecycle,
      processing: mergeProcessing(group, conflict),
    });
    changedItems.push(merged);
    finalItems.push(merged);
  }

  const finalPaths = new Set(finalItems.map((item) => makeItemPath(item.canonical_url)));
  const removedPaths = [
    ...new Set(
      items
        .filter((item) => !skippedItems.has(item))
        .flatMap((item) => [makeItemPath(item.canonical_url), legacyCatalogItemPath(item.canonical_url)])
        .filter((filePath) => !finalPaths.has(filePath)),
    ),
  ];
  const changedCauseSummary = summarizeDistinctCounts(
    [...targets.values()].map((target) => (target.cause === "unchanged" ? null : target.cause)),
  );

  return {
    items: finalItems,
    changedItems,
    removedPaths,
    summary: {
      candidates: targets.size,
      changedCandidates: [...targets.values()].filter((target) => target.cause !== "unchanged").length,
      repairedGroups: changedItems.length,
      removedPaths: removedPaths.length,
      byCause: changedCauseSummary,
    },
  };
}

export async function runRepair(
  token?: string,
  deps: Partial<RepairDeps> = {},
  options: RunRepairOptions = {},
): Promise<void> {
  const resolvedDeps: RepairDeps = {
    loadItems: deps.loadItems ?? loadGeneratedCatalogItems,
    loadOverriddenItemIds: deps.loadOverriddenItemIds ?? loadCatalogOverrideIds,
    resolveTarget: deps.resolveTarget ?? resolveCatalogRepairTarget,
    saveItem: deps.saveItem ?? saveCatalogItem,
    removePath: deps.removePath ?? ((filePath) => {
      if (fs.existsSync(filePath)) fs.rmSync(filePath, { force: true });
    }),
  };

  const items = resolvedDeps.loadItems();
  const overriddenItemIds = resolvedDeps.loadOverriddenItemIds();
  const candidates = options.mode === "automatic-safe"
    ? selectAutomaticSafeRepairCandidates(items, overriddenItemIds)
    : selectRepairCandidates(items, overriddenItemIds);
  if (candidates.length === 0) {
    console.log("No catalog repair candidates matched the current duplicate heuristics.");
    return;
  }

  const resolvedTargets = options.mode === "automatic-safe"
    ? candidates.map((item) => {
        const aliasTarget = persistedGitHubRenameTarget(item);
        return {
          id: item.id,
          target: aliasTarget
            ? { canonicalUrl: aliasTarget, cause: "github_alias" as const }
            : { canonicalUrl: normalizeCatalogUrl(item.canonical_url), cause: "unchanged" as const },
        };
      })
    : await mapWithConcurrency(candidates, REPAIR_CONCURRENCY, async (item) => {
        const target = await resolvedDeps.resolveTarget(item, token);
        if (target.cause === "unchanged") {
          const localMatch = findLocalWebsiteGitHubMatch(item, items);
          if (localMatch && localMatch !== normalizeCatalogUrl(item.canonical_url)) {
            return { id: item.id, target: { canonicalUrl: localMatch, cause: "website_to_github" as const } };
          }
        }
        return { id: item.id, target };
      });
  const resolvedTargetsById = new Map<string, CatalogRepairTarget[]>();
  for (const entry of resolvedTargets) {
    resolvedTargetsById.set(entry.id, [...(resolvedTargetsById.get(entry.id) ?? []), entry.target]);
  }
  const targets = new Map<string, CatalogRepairTarget>();
  for (const [id, idTargets] of resolvedTargetsById) {
    const aliasTargets = [...new Set(
      idTargets
        .filter((target) => target.cause === "github_alias")
        .map((target) => normalizeCatalogUrl(target.canonicalUrl)),
    )];
    if (aliasTargets.length === 1) {
      targets.set(id, { canonicalUrl: aliasTargets[0]!, cause: "github_alias" });
      continue;
    }
    const canonicalTargets = [...new Set(idTargets.map((target) => normalizeCatalogUrl(target.canonicalUrl)))];
    if (aliasTargets.length > 1 || canonicalTargets.length > 1) {
      targets.set(id, { canonicalUrl: "", cause: "unchanged", ambiguous: true });
      continue;
    }
    const firstTarget = idTargets[0];
    if (firstTarget) targets.set(id, firstTarget);
  }
  const plan = repairCatalogItems(items, targets, {
    protectedItemIds: overriddenItemIds,
    candidateItemIds: options.mode === "automatic-safe"
      ? new Set(candidates.map((item) => item.id))
      : undefined,
  });

  for (const item of plan.changedItems) resolvedDeps.saveItem(item);
  for (const filePath of plan.removedPaths) resolvedDeps.removePath(filePath);

  console.log(`Catalog repair candidates: ${plan.summary.candidates}`);
  console.log(`Changed candidates: ${plan.summary.changedCandidates}`);
  console.log(`Repaired groups: ${plan.summary.repairedGroups}`);
  console.log(`Removed obsolete item files: ${plan.summary.removedPaths}`);
  if (plan.summary.byCause.length > 0) {
    console.log(
      `Repair causes: ${plan.summary.byCause.map((entry) => `${entry.value}=${entry.count}`).join(", ")}`,
    );
  }
  if (plan.changedItems.length === 0 && plan.summary.removedPaths === 0) {
    console.log("No persisted catalog items required canonical repair.");
  }
}
