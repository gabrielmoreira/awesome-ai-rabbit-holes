// scripts/catalog/core.ts
// Shared pure helpers for catalog ids, normalization, lifecycle, and item integrity.

import * as path from "node:path";
import { parseGitHubUrl } from "../support/github.ts"
import { CATALOG_ITEMS_DIR } from "../support/paths.ts"
import type {
  CanonicalSourceKind,
  CatalogConfig,
  CatalogItem,
  Discovery,
  DiscoverySourceType,
  ProcessingCommandState,
  ProcessingState,
  Source,
} from "./types.ts";

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
  return normalizeCatalogUrl(url).replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/gi, "__").toLowerCase();
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

export function normalizeCatalogUrl(url: string): string {
  const trimmed = url.trim();
  const normalizedGitHub = normalizeGitHubUrl(trimmed);
  if (normalizedGitHub !== trimmed) return normalizedGitHub;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      parsed.protocol = "https:";
      if (parsed.hostname.toLowerCase().startsWith("www.")) {
        parsed.hostname = parsed.hostname.slice(4);
      }
      if (parsed.port === "443") parsed.port = "";
    }
    parsed.hash = "";
    parsed.search = "";
    parsed.pathname = parsed.pathname.replace(/\/+$/, "") || "/";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return trimmed.replace(/\/+$/, "");
  }
}

export function normalizeSourceCoverageUrl(url: string): string {
  return normalizeCatalogUrl(url);
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

export function normalizeSourceKind(kind: string | null | undefined): CanonicalSourceKind | null {
  switch (kind ?? "direct-item") {
    case "direct-item":
    case "direct-link":
      return "direct-item";
    case "curated-list":
    case "awesome-list":
      return "curated-list";
    case "article":
    case "docs-page":
    case "newsletter":
    case "paper":
    case "manual-submission":
      return kind as CanonicalSourceKind;
    default:
      return null;
  }
}

export function toDiscoverySourceType(kind: string | null | undefined): DiscoverySourceType {
  const normalized = normalizeSourceKind(kind);
  if (normalized === "direct-item") return "direct-link";
  if (normalized === "curated-list") return "awesome-list";
  return normalized ?? "direct-link";
}

export function isCuratedListSource(source: Pick<Source, "kind">): boolean {
  return normalizeSourceKind(source.kind) === "curated-list";
}

export function isDirectAwesomeListSource(item: Pick<CatalogItem, "provenance">): boolean {
  return item.provenance.discoveries.some(
    (discovery) => discovery.source.type === "awesome-list" && discovery.extraction.mode === "direct",
  );
}

export function makeDiscoveryId(url: string, source: Source): string {
  const itemId = makeItemId(url);
  const kind = toDiscoverySourceType(source.kind);
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
    kind: normalizeSourceKind(raw?.source?.type) ?? "direct-item",
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
      type: toDiscoverySourceType(normalizedSource.kind),
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
        full_name: github.full_name ?? null,
        html_url: github.html_url ?? null,
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

export function hasInsightText(value: string | null | undefined): value is string {
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
