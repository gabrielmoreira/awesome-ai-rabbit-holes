import { normalizeCatalogUrl } from "./core.ts";
import type { ProcessingError } from "./core.ts";
import type { CatalogItem, ReviewReport } from "./types.ts";

export type DistinctCount = { value: string; count: number };

export type CatalogReviewWarning =
  | {
      kind: "normalized-url-collision";
      normalizedUrl: string;
      items: [
        { id: string; url: string },
        { id: string; url: string },
      ];
    }
  | {
      kind: "website-github-homepage-match";
      website: { id: string; url: string };
      github: { id: string; url: string; homepage: string };
    };

export type CatalogProcessingGapReport = {
  total: number;
  resolved: number;
  included: number;
  excluded: number;
  pending: number;
  unresolvedBuckets: {
    neverRan: number;
    deferred: number;
    failed: number;
    otherPending: number;
  };
  neverRanByStage: DistinctCount[];
  deferredByCause: DistinctCount[];
  failedByCause: DistinctCount[];
  excludedByReason: DistinctCount[];
  reviewWarnings: CatalogReviewWarning[];
  processingFailureCount: number;
};

export function summarizeProcessingErrors(errors: ProcessingError[]): {
  total: number;
  byStage: Record<ProcessingError["stage"], number>;
} {
  return {
    total: errors.length,
    byStage: errors.reduce(
      (counts, error) => ({ ...counts, [error.stage]: counts[error.stage] + 1 }),
      { github_enrichment: 0, ai_insights: 0 } as Record<ProcessingError["stage"], number>,
    ),
  };
}

export function summarizeDistinctCounts(values: Array<string | null | undefined>): DistinctCount[] {
  const counts = new Map<string, number>();
  for (const value of values) {
    if (!value) continue;
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .map(([value, count]) => ({ value, count }));
}

function pendingRequiredStages(item: CatalogItem): string[] {
  const stages: string[] = [];
  if (item.processing?.discover?.status === "pending") stages.push("discover");
  if (item.identity.github_repo && item.processing?.stars?.status === "pending") stages.push("stars");
  if (item.curation.status === "pending" && item.processing?.categorize?.status === "pending") stages.push("categorize");
  return stages;
}

function firstStageWithStatus(
  item: CatalogItem,
  status: "failed" | "deferred",
): { stage: string; state: NonNullable<NonNullable<CatalogItem["processing"]>[string]> } | null {
  const entries = Object.entries(item.processing ?? {}).sort((left, right) => left[0].localeCompare(right[0]));
  for (const [stage, state] of entries) {
    if (state?.status === status) return { stage, state };
  }
  return null;
}

function formatPercent(count: number, total: number): string {
  if (total <= 0) return "0.0%";
  return `${((count / total) * 100).toFixed(1)}%`;
}

function buildCatalogReviewWarnings(items: CatalogItem[]): CatalogReviewWarning[] {
  const websitesByNormalizedUrl = new Map<string, CatalogItem[]>();
  for (const item of items) {
    if (item.kind !== "website") continue;
    const normalizedUrl = normalizeCatalogUrl(item.canonical_url);
    const matches = websitesByNormalizedUrl.get(normalizedUrl) ?? [];
    matches.push(item);
    websitesByNormalizedUrl.set(normalizedUrl, matches);
  }

  const warnings: CatalogReviewWarning[] = [];
  const itemsByNormalizedUrl = new Map<string, CatalogItem[]>();
  for (const item of items) {
    const normalizedUrl = normalizeCatalogUrl(item.canonical_url);
    itemsByNormalizedUrl.set(
      normalizedUrl,
      [...(itemsByNormalizedUrl.get(normalizedUrl) ?? []), item],
    );
  }
  for (const [normalizedUrl, matches] of itemsByNormalizedUrl) {
    const sortedMatches = matches.toSorted(
      (left, right) => left.id.localeCompare(right.id) || left.canonical_url.localeCompare(right.canonical_url),
    );
    for (let leftIndex = 0; leftIndex < sortedMatches.length; leftIndex += 1) {
      for (let rightIndex = leftIndex + 1; rightIndex < sortedMatches.length; rightIndex += 1) {
        const left = sortedMatches[leftIndex]!;
        const right = sortedMatches[rightIndex]!;
        warnings.push({
          kind: "normalized-url-collision",
          normalizedUrl,
          items: [
            { id: left.id, url: left.canonical_url },
            { id: right.id, url: right.canonical_url },
          ],
        });
      }
    }
  }
  const githubItems = items
    .filter((item) => item.kind === "github-repo" && item.metadata.github.homepage)
    .toSorted((left, right) => left.id.localeCompare(right.id) || left.canonical_url.localeCompare(right.canonical_url));
  for (const githubItem of githubItems) {
    const homepage = githubItem.metadata.github.homepage!;
    const matchingWebsites = (websitesByNormalizedUrl.get(normalizeCatalogUrl(homepage)) ?? []).toSorted(
      (left, right) => left.id.localeCompare(right.id) || left.canonical_url.localeCompare(right.canonical_url),
    );
    for (const websiteItem of matchingWebsites) {
      if (websiteItem.id === githubItem.id) continue;
      warnings.push({
        kind: "website-github-homepage-match",
        website: { id: websiteItem.id, url: websiteItem.canonical_url },
        github: { id: githubItem.id, url: githubItem.canonical_url, homepage },
      });
    }
  }

  return warnings.toSorted((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)));
}

export function buildCatalogProcessingGapReport(items: CatalogItem[]): CatalogProcessingGapReport {
  const included = items.filter((item) => item.curation.status === "included").length;
  const excludedItems = items.filter((item) => item.curation.status === "excluded");
  const excluded = excludedItems.length;
  const pendingItems = items.filter((item) => item.curation.status === "pending");
  const pendingStageLabels: string[] = [];
  const deferredCauseLabels: string[] = [];
  const failedCauseLabels: string[] = [];
  let processingFailureCount = 0;
  for (const item of items) {
    const failedState = firstStageWithStatus(item, "failed");
    if (!failedState) continue;
    processingFailureCount += 1;
    failedCauseLabels.push(`${failedState.stage}:${failedState.state.cause?.type ?? "unknown"}`);
  }
  let neverRan = 0;
  let deferred = 0;
  let failed = 0;
  let otherPending = 0;

  for (const item of pendingItems) {
    const failedState = firstStageWithStatus(item, "failed");
    if (failedState) {
      failed += 1;
      continue;
    }

    const deferredState = firstStageWithStatus(item, "deferred");
    if (deferredState) {
      deferred += 1;
      deferredCauseLabels.push(`${deferredState.stage}:${deferredState.state.cause?.type ?? "unknown"}`);
      continue;
    }

    const missingStages = pendingRequiredStages(item);
    if (missingStages.length > 0) {
      neverRan += 1;
      pendingStageLabels.push(...missingStages);
      continue;
    }

    otherPending += 1;
  }

  return {
    total: items.length,
    resolved: included + excluded,
    included,
    excluded,
    pending: pendingItems.length,
    unresolvedBuckets: { neverRan, deferred, failed, otherPending },
    neverRanByStage: summarizeDistinctCounts(pendingStageLabels),
    deferredByCause: summarizeDistinctCounts(deferredCauseLabels),
    failedByCause: summarizeDistinctCounts(failedCauseLabels),
    excludedByReason: summarizeDistinctCounts(
      excludedItems.map((item) => item.curation.reason?.trim() || "unspecified"),
    ),
    reviewWarnings: buildCatalogReviewWarnings(items),
    processingFailureCount,
  };
}

function renderDistinctSection(
  title: string,
  values: DistinctCount[],
  total: number,
  emptyLabel: string,
  maxEntries: number,
): string[] {
  const lines = [title];
  if (values.length === 0) {
    lines.push(`- ${emptyLabel}`);
    return lines;
  }
  const visible = maxEntries > 0 ? values.slice(0, maxEntries) : values;
  for (const value of visible) {
    lines.push(`- ${value.value}: ${value.count} (${formatPercent(value.count, total)})`);
  }
  if (visible.length < values.length) {
    lines.push(`- ... ${values.length - visible.length} more`);
  }
  return lines;
}

function renderReviewWarnings(warnings: CatalogReviewWarning[], maxEntries: number): string[] {
  const lines = ["Semantic duplicate review warnings"];
  if (warnings.length === 0) {
    lines.push("- none");
    return lines;
  }
  const visible = maxEntries > 0 ? warnings.slice(0, maxEntries) : warnings;
  for (const warning of visible) {
    if (warning.kind === "normalized-url-collision") {
      const [left, right] = warning.items;
      lines.push(
        `- [${warning.kind}] ${left.id} (${left.url}) and ${right.id} (${right.url}) normalize to ${warning.normalizedUrl}`,
      );
      continue;
    }
    lines.push(
      `- [${warning.kind}] ${warning.website.id} (${warning.website.url}) matches the GitHub homepage of ` +
        `${warning.github.id} (${warning.github.url}): ${warning.github.homepage}`,
    );
  }
  if (visible.length < warnings.length) {
    lines.push(`- ... ${warnings.length - visible.length} more`);
  }
  return lines;
}

export function renderCatalogProcessingGapReport(
  report: CatalogProcessingGapReport,
  options: { maxEntriesPerSection?: number } = {},
): string {
  const unresolved = report.pending;
  const maxEntriesPerSection = options.maxEntriesPerSection ?? 20;
  const summaryLines = [
    report.neverRanByStage[0] ? `${report.neverRanByStage[0].count} item(s) still never ran ${report.neverRanByStage[0].value}.` : null,
    report.failedByCause[0] ? `${report.failedByCause[0].count} item(s) are blocked by ${report.failedByCause[0].value}.` : null,
    report.deferredByCause[0] ? `${report.deferredByCause[0].count} item(s) are deferred by ${report.deferredByCause[0].value}.` : null,
  ].filter((value): value is string => Boolean(value));

  return [
    "Catalog processing gaps",
    "",
    `Total items: ${report.total}`,
    `Processing failures: ${report.processingFailureCount}`,
    `Resolved: ${report.resolved} (${formatPercent(report.resolved, report.total)})`,
    `- included: ${report.included}`,
    `- excluded: ${report.excluded}`,
    `Unresolved: ${report.pending} (${formatPercent(report.pending, report.total)})`,
    `- never ran yet: ${report.unresolvedBuckets.neverRan} (${formatPercent(report.unresolvedBuckets.neverRan, unresolved)})`,
    `- deferred: ${report.unresolvedBuckets.deferred} (${formatPercent(report.unresolvedBuckets.deferred, unresolved)})`,
    `- failed: ${report.unresolvedBuckets.failed} (${formatPercent(report.unresolvedBuckets.failed, unresolved)})`,
    `- other pending: ${report.unresolvedBuckets.otherPending} (${formatPercent(report.unresolvedBuckets.otherPending, unresolved)})`,
    "",
    "Problem summary",
    ...(summaryLines.length > 0 ? summaryLines.map((line) => `- ${line}`) : ["- No outstanding blockers were detected."]),
    "",
    ...renderDistinctSection("Never-ran breakdown", report.neverRanByStage, unresolved, "none", maxEntriesPerSection),
    "",
    ...renderDistinctSection("Deferred causes", report.deferredByCause, unresolved, "none", maxEntriesPerSection),
    "",
    ...renderDistinctSection("Failed causes", report.failedByCause, report.processingFailureCount, "none", maxEntriesPerSection),
    "",
    ...renderDistinctSection("Excluded reasons", report.excludedByReason, report.excluded, "none", maxEntriesPerSection),
    "",
    ...renderReviewWarnings(report.reviewWarnings, maxEntriesPerSection),
  ].join("\n");
}

export function buildReviewReport(
  newItems: CatalogItem[],
  updatedMetadataIds: string[],
  allItems: CatalogItem[],
): ReviewReport {
  const promotionCandidates = allItems
    .filter((item) => item.curation.status === "included" && item.lifecycle.status === "promotion_candidate")
    .map((item) => item.id);

  const needsReview = allItems
    .filter((item) => item.curation.status === "included" && item.lifecycle.status === "needs_review")
    .map((item) => item.id);

  const externalSourceTypes = new Set(["awesome-list", "article", "docs-page", "newsletter", "paper"]);
  const newDiscoverySources: string[] = [];
  for (const item of newItems) {
    for (const discovery of item.provenance.discoveries) {
      if (!externalSourceTypes.has(discovery.source.type)) continue;
      const label = discovery.source.name ?? discovery.source.url ?? discovery.source.type;
      newDiscoverySources.push(label);
    }
  }

  return {
    new_items: newItems.map((item) => item.id),
    updated_metadata: updatedMetadataIds,
    promotion_candidates: promotionCandidates,
    needs_review: needsReview,
    new_discovery_sources: [...new Set(newDiscoverySources)],
  };
}

export function shouldFailOnProcessingErrors(env: NodeJS.ProcessEnv = process.env): boolean {
  const value = env["CATALOG_FAIL_ON_PROCESSING_ERRORS"]?.trim().toLowerCase();
  if (!value) return false;
  return value === "1" || value === "true" || value === "yes";
}