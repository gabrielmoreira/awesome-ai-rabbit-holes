// scripts/catalog/core.ts
// Shared pure helpers for catalog ids, normalization, lifecycle, overrides, and reporting.

import * as path from "node:path";
import { parseGitHubUrl } from "../support/github.ts"
import { CATALOG_ITEMS_DIR } from "../support/paths.ts"
import type { CatalogConfig,
CatalogItem,
Discovery,
Insights,
Override,
ProcessingCommandState,
ProcessingState,
ReviewReport,
Source, } from "./types.ts"

export type ProcessingError = {
  stage: "github_enrichment" | "ai_insights";
  item_id: string;
  message: string;
};

type NormalizedProcessingState = ProcessingState & {
  discover: ProcessingCommandState;
  stars: ProcessingCommandState;
  categorize: ProcessingCommandState;
};

export function makeItemId(url: string): string {
  const github = parseGitHubUrl(url);
  if (github) return `github__${github.owner.toLowerCase()}__${github.repo.toLowerCase()}`;
  return url.replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/gi, "__").toLowerCase();
}

export function makeItemPath(url: string): string {
  const github = parseGitHubUrl(url);
  if (github) {
    return path.join(CATALOG_ITEMS_DIR, "github", github.owner.toLowerCase(), `${github.repo.toLowerCase()}.yml`);
  }
  return path.join(CATALOG_ITEMS_DIR, `${makeItemId(url)}.yml`);
}

export function normalizeGitHubUrl(url: string): string {
  const github = parseGitHubUrl(url);
  if (!github) return url;
  return `https://github.com/${github.owner.toLowerCase()}/${github.repo.toLowerCase()}`;
}

export function normalizeSourceCoverageUrl(url: string): string {
  const normalizedGitHub = normalizeGitHubUrl(url);
  if (normalizedGitHub !== url) return normalizedGitHub;
  try {
    const parsed = new URL(url);
    parsed.hash = "";
    parsed.search = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return url.trim().replace(/\/+$/, "");
  }
}

export function isLowSignalCatalogUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const pathname = parsed.pathname.toLowerCase();
    if (host === "camo.githubusercontent.com") return true;
    if (host === "arxiv.org" && pathname.startsWith("/abs/")) return true;
    if (host === "docs.google.com" && pathname.includes("/forms/")) return true;
    if (host === "img.shields.io" || host === "assets-global.website-files.com") return true;
    if (/\.(?:png|jpe?g|gif|webp|svg|avif|ico|pdf)(?:$|[?#])/i.test(parsed.pathname)) return true;
    if (pathname.includes("/_next/image")) return true;
  } catch {
    return false;
  }
  return false;
}


export function makeDiscoveryId(url: string, source: Source): string {
  const itemId = makeItemId(url);
  const kind = source.kind ?? "direct-link";
  if (kind === "direct-link" || kind === "manual-submission") return `discovery__${itemId}__${kind}`;

  const sourceGithub = parseGitHubUrl(source.url);
  if (sourceGithub) {
    return `discovery__${itemId}__${kind}__${sourceGithub.owner.toLowerCase()}__${sourceGithub.repo.toLowerCase()}`;
  }

  const sourceKey = source.url.replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/gi, "__").toLowerCase();
  return `discovery__${itemId}__${kind}__${sourceKey}`;
}

function normalizeLoadedDiscovery(raw: any, fallbackUrl: string): Discovery {
  const normalizedSource: Source = {
    url: raw?.source?.url ?? fallbackUrl,
    kind: raw?.source?.type ?? "direct-link",
    note: raw?.extraction?.surrounding_text ?? undefined,
  };
  const extraction = {
    mode: raw?.extraction?.mode ?? "direct",
    section_path: Array.isArray(raw?.extraction?.section_path) ? raw.extraction.section_path : ["inbox"],
    anchor_text: raw?.extraction?.anchor_text ?? fallbackUrl,
    extracted_url: raw?.extraction?.extracted_url ?? fallbackUrl,
    surrounding_text: raw?.extraction?.surrounding_text ?? null,
    confidence: raw?.extraction?.confidence ?? "high",
  } as Discovery["extraction"];

  return {
    id: raw?.id ?? makeDiscoveryId(extraction.extracted_url, normalizedSource),
    discovered_at: raw?.discovered_at ?? null,
    source: {
      type: normalizedSource.kind ?? "direct-link",
      name: raw?.source?.name ?? "Manual submission",
      url: raw?.source?.url ?? null,
      repository: raw?.source?.repository ?? null,
    },
    extraction,
  };
}

export function normalizeLoadedItem(item: any): CatalogItem & { processing: NormalizedProcessingState } {
  const github = item?.metadata?.github ?? {};
  const discoveries = Array.isArray(item?.provenance?.discoveries) ? item.provenance.discoveries : [];
  const normalized: CatalogItem & { processing: NormalizedProcessingState } = {
    id: item?.id,
    kind: item?.kind,
    name: item?.name,
    canonical_url: item?.canonical_url,
    identity: item?.identity ?? {},
    provenance: {
      discoveries: Array.from(
        new Map<string, Discovery>(
          discoveries.map((discovery: any) => {
            const normalizedDiscovery = normalizeLoadedDiscovery(discovery, item?.canonical_url);
            return [normalizedDiscovery.id, normalizedDiscovery] as const;
          }),
        ).values(),
      ),
    },
    metadata: {
      github: {
        stars: github.stars ?? null,
        forks: github.forks ?? null,
        license: github.license ?? null,
        archived: github.archived ?? null,
        created_at: github.created_at ?? null,
        pushed_at: github.pushed_at ?? null,
        description: github.description ?? null,
        homepage: github.homepage ?? null,
        topics: Array.isArray(github.topics) ? github.topics : null,
        last_checked_at: github.last_checked_at ?? null,
        readme: github.readme ?? null,
      },
    },
    insights: {
      summary: item?.insights?.summary ?? null,
      why_it_matters: item?.insights?.why_it_matters ?? null,
      mental_damage: item?.insights?.mental_damage ?? null,
      tags: Array.isArray(item?.insights?.tags) ? item.insights.tags : [],
      confidence: item?.insights?.confidence ?? null,
    },
    curation: {
      status: item?.curation?.status ?? "pending",
      reason: item?.curation?.reason ?? null,
      evidence: Array.isArray(item?.curation?.evidence)
        ? item.curation.evidence.map((value: unknown) => String(value).trim()).filter((value: string) => value.length > 0)
        : [],
    },
    placement: {
      primary_category: item?.placement?.primary_category ?? null,
      secondary_categories: Array.isArray(item?.placement?.secondary_categories)
        ? item.placement.secondary_categories
        : undefined,
      section: item?.placement?.section ?? null,
    },
    lifecycle: {
      status: item?.lifecycle?.status ?? "incubating",
      reason: item?.lifecycle?.reason ?? null,
    },
    processing: {
      ...(item?.processing ?? {}),
      discover: item?.processing?.discover ?? { status: "pending", updated_at: null, cause: null },
      stars: item?.processing?.stars ?? { status: "pending", updated_at: null, cause: null },
      categorize: item?.processing?.categorize ?? { status: "pending", updated_at: null, cause: null },
    },
  };
  return normalized;
}

function hasInsightText(value: string | null | undefined): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function applyLifecycleRules(item: CatalogItem, config: CatalogConfig): CatalogItem {
  const { stars, archived } = item.metadata.github;
  const currentStatus = item.lifecycle.status;

  if (item.curation.status === "excluded") return item;
  if (currentStatus === "curated" || currentStatus === "landmark") return item;

  if (archived === true) {
    return { ...item, lifecycle: { status: "needs_review", reason: "Repository is archived" } };
  }

  if (stars !== null && stars > config.promotion.incubating_until_stars && currentStatus === "incubating") {
    return {
      ...item,
      lifecycle: {
        status: "promotion_candidate",
        reason: `Stars (${stars}) exceeded threshold (${config.promotion.incubating_until_stars})`,
      },
    };
  }

  return item;
}

export function applyPlacement(item: CatalogItem, categories: Array<{ id: string }>): CatalogItem {
  if (item.curation.status !== "included") return item;
  if (item.placement.primary_category) return item;

  const tags = item.insights.tags;
  const categoryIds = categories.map((category) => category.id);

  if ((tags.includes("mcp") || tags.includes("mcp-server")) && categoryIds.includes("mcp")) {
    return { ...item, placement: { ...item.placement, primary_category: "mcp" } };
  }

  if (item.kind === "github-repo" && tags.includes("awesome-list") && categoryIds.includes("awesome-awesomes")) {
    return { ...item, placement: { ...item.placement, primary_category: "awesome-awesomes" } };
  }

  return item;
}

export function applyOverride(item: CatalogItem, override: Override): CatalogItem {
  const patch = override.patch;
  let updated = { ...item };

  if (patch.insights) {
    updated = { ...updated, insights: { ...updated.insights, ...patch.insights } as Insights };
  }
  if (patch.curation) {
    updated = { ...updated, curation: { ...updated.curation, ...patch.curation } };
  }
  if (patch.placement) {
    updated = { ...updated, placement: { ...updated.placement, ...patch.placement } };
  }
  if (patch.lifecycle) {
    updated = { ...updated, lifecycle: { ...updated.lifecycle, ...patch.lifecycle } };
  }

  return updated;
}

export function applyOverrides(items: CatalogItem[], overrides: Override[]): CatalogItem[] {
  const overrideMap = new Map(overrides.map((override) => [override.id, override]));
  return items.map((item) => {
    const override = overrideMap.get(item.id);
    return override ? applyOverride(item, override) : item;
  });
}

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

export function hasRequiredInsights(item: CatalogItem): boolean {
  return (
    hasInsightText(item.insights.summary) &&
    hasInsightText(item.insights.why_it_matters) &&
    hasInsightText(item.insights.mental_damage) &&
    item.insights.tags.length > 0 &&
    item.insights.confidence !== null &&
    item.curation.status !== "pending" &&
    hasInsightText(item.curation.reason)
  );
}
