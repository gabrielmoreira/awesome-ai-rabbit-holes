import * as fs from "node:fs";
import { mapWithConcurrency } from "../support/async.ts";
import { fetchGitHubRepo, parseGitHubUrl } from "../support/github.ts";
import { makeItemId, makeItemPath, normalizeCatalogUrl, normalizeLoadedItem } from "./core.ts";
import { loadCatalogItems, saveCatalogItem } from "./data.ts";
import {
  collectCatalogDisplayNameCandidates,
  normalizeCatalogDisplayNameKey,
  resolveCatalogDisplayName,
  resolveCatalogDisplayNameTargetKeys,
  resolveCatalogUrlHostLabel,
  selectBestCatalogDisplayName,
} from "./display-names.ts";
import { summarizeDistinctCounts } from "./reporting.ts";
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

export type CatalogRepairCause = "unchanged" | "github_alias" | "website_to_github" | "website_canonical";

export type CatalogRepairTarget = {
  canonicalUrl: string;
  cause: CatalogRepairCause;
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

export type RepairDeps = {
  loadItems: () => CatalogItem[];
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
  preferred: CatalogItem,
): { curation: CatalogItem["curation"]; conflict: boolean } {
  const decided = [...new Set(items.map((item) => item.curation.status).filter((status) => status !== "pending"))];
  if (decided.length === 0) {
    return { curation: { status: "pending", reason: null, evidence: [] }, conflict: false };
  }

  const chosenStatus = decided.length === 1
    ? (decided[0] as "included" | "excluded")
    : preferred.curation.status !== "pending"
      ? preferred.curation.status
      : null;
  if (!chosenStatus) {
    return { curation: { status: "pending", reason: null, evidence: [] }, conflict: true };
  }

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
  return {
    primary_category: categories.length === 1 ? categories[0] : null,
    secondary_categories: undefined,
    section: sections.length === 1 ? sections[0] : null,
  };
}

function mergeGithubMetadata(preferred: CatalogItem, items: CatalogItem[]): CatalogItem["metadata"]["github"] {
  const metadataSource = items
    .filter((item) => typeof item.metadata.github.last_checked_at === "string")
    .sort((left, right) => String(right.metadata.github.last_checked_at ?? "").localeCompare(String(left.metadata.github.last_checked_at ?? "")))[0]
    ?? preferred;
  return {
    stars: pickFirstDefined(metadataSource, items, (item) => item.metadata.github.stars),
    forks: pickFirstDefined(metadataSource, items, (item) => item.metadata.github.forks),
    license: pickFirstDefined(metadataSource, items, (item) => item.metadata.github.license),
    archived: pickFirstDefined(metadataSource, items, (item) => item.metadata.github.archived),
    created_at: pickFirstDefined(metadataSource, items, (item) => item.metadata.github.created_at),
    pushed_at: pickFirstDefined(metadataSource, items, (item) => item.metadata.github.pushed_at),
    description: pickFirstDefined(metadataSource, items, (item) => item.metadata.github.description),
    homepage: pickFirstDefined(metadataSource, items, (item) => item.metadata.github.homepage),
    topics: metadataSource.metadata.github.topics ?? null,
    last_checked_at: metadataSource.metadata.github.last_checked_at ?? null,
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

export function selectRepairCandidates(items: CatalogItem[]): CatalogItem[] {
  const githubRepoCounts = new Map<string, number>();
  const githubRepoKeyCounts = new Map<string, number>();
  const githubNameCounts = new Map<string, number>();
  const websiteSignals = new Set<string>();
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

export async function resolveCatalogRepairTarget(item: CatalogItem, token?: string): Promise<CatalogRepairTarget> {
  const normalizedUrl = normalizeCatalogUrl(item.canonical_url);
  const github = parseGitHubUrl(normalizedUrl);
  if (github) {
    const repoData = await fetchGitHubRepo(github.owner, github.repo, token);
    const canonicalUrl = normalizeCatalogUrl(repoData?.html_url ?? normalizedUrl);
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

export function repairCatalogItems(items: CatalogItem[], targets: Map<string, CatalogRepairTarget>): CatalogRepairPlan {
  const grouped = new Map<string, CatalogItem[]>();
  for (const item of items) {
    const targetUrl = targets.get(item.id)?.canonicalUrl ?? normalizeCatalogUrl(item.canonical_url);
    grouped.set(targetUrl, [...(grouped.get(targetUrl) ?? []), item]);
  }

  const changedItems: CatalogItem[] = [];
  const finalItems: CatalogItem[] = [];
  for (const [targetUrl, group] of [...grouped.entries()].sort((left, right) => left[0].localeCompare(right[0]))) {
    const originalUrls = [...new Set(group.map((item) => normalizeCatalogUrl(item.canonical_url)))];
    const targetChanged = group.some((item) => (targets.get(item.id)?.canonicalUrl ?? normalizeCatalogUrl(item.canonical_url)) !== normalizeCatalogUrl(item.canonical_url));
    const preferred = choosePreferredItem(group, targetUrl);
    const mergedName = chooseMergedName(preferred, group, targetUrl);
    const nameChanged = group.some((item) => item.name.trim() !== mergedName);
    if (originalUrls.length === 1 && !targetChanged && !nameChanged) {
      const preferredSignature = serializeRepairComparableItem(preferred);
      const shouldPersistPreferred = group.some((item) => serializeRepairComparableItem(item) !== preferredSignature);
      finalItems.push(preferred);
      if (shouldPersistPreferred) changedItems.push(preferred);
      continue;
    }

    const { curation, conflict } = resolveMergedCuration(group, preferred);
    const keepPlacement = curation.status === "included" && !conflict;
    const targetGithub = parseGitHubUrl(targetUrl);
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
      placement: resolveMergedPlacement(group, keepPlacement),
      lifecycle: preferred.lifecycle,
      processing: mergeProcessing(group, conflict),
    });
    changedItems.push(merged);
    finalItems.push(merged);
  }

  const finalPaths = new Set(finalItems.map((item) => makeItemPath(item.canonical_url)));
  const removedPaths = [...new Set(items.map((item) => makeItemPath(item.canonical_url)).filter((filePath) => !finalPaths.has(filePath)))];
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
): Promise<void> {
  const resolvedDeps: RepairDeps = {
    loadItems: deps.loadItems ?? loadCatalogItems,
    resolveTarget: deps.resolveTarget ?? resolveCatalogRepairTarget,
    saveItem: deps.saveItem ?? saveCatalogItem,
    removePath: deps.removePath ?? ((filePath) => {
      if (fs.existsSync(filePath)) fs.rmSync(filePath, { force: true });
    }),
  };

  const items = resolvedDeps.loadItems();
  const candidates = selectRepairCandidates(items);
  if (candidates.length === 0) {
    console.log("No catalog repair candidates matched the current duplicate heuristics.");
    return;
  }

  const resolvedTargets = await mapWithConcurrency(candidates, REPAIR_CONCURRENCY, async (item) => {
    const target = await resolvedDeps.resolveTarget(item, token);
    if (target.cause === "unchanged") {
      const localMatch = findLocalWebsiteGitHubMatch(item, items);
      if (localMatch && localMatch !== normalizeCatalogUrl(item.canonical_url)) {
        return { id: item.id, target: { canonicalUrl: localMatch, cause: "website_to_github" as const } };
      }
    }
    return { id: item.id, target };
  });
  const targets = new Map(resolvedTargets.map((entry) => [entry.id, entry.target] as const));
  const plan = repairCatalogItems(items, targets);

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
