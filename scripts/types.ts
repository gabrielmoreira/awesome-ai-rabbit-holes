// scripts/types.ts
// Shared TypeScript types for the catalog pipeline

export type SourceKind =
  | "direct-link"
  | "awesome-list"
  | "article"
  | "docs-page"
  | "newsletter"
  | "paper"
  | "manual-submission";

export interface Source {
  url: string;
  kind?: SourceKind;
  note?: string;
}

export type CatalogItemKind = "github-repo" | "website" | "article" | "paper" | "tool";

export type LifecycleStatus =
  | "incubating"
  | "promotion_candidate"
  | "curated"
  | "landmark"
  | "watchlist"
  | "archived"
  | "needs_review";

export interface SourceInfo {
  type: SourceKind;
  name: string;
  url: string | null;
  repository: string | null;
}

export interface ExtractionInfo {
  mode: "direct" | "scraped" | "parsed";
  section_path: string[];
  anchor_text: string;
  extracted_url: string;
  surrounding_text: string | null;
  confidence: "high" | "medium" | "low";
}

export interface Discovery {
  id: string;
  discovered_at: string;
  source: SourceInfo;
  extraction: ExtractionInfo;
}

export interface DiscoveryCandidate {
  target_url: string;
  source: Source;
  extraction: ExtractionInfo;
}

export interface Provenance {
  discoveries: Discovery[];
}

export interface GitHubReadmeProvenance {
  fetched_at: string | null;
  bytes: number | null;
}

export interface GitHubMetadata {
  stars: number | null;
  forks: number | null;
  license: string | null;
  archived: boolean | null;
  created_at?: string | null;
  pushed_at: string | null;
  description: string | null;
  homepage: string | null;
  topics: string[] | null;
  last_checked_at: string | null;
  readme?: GitHubReadmeProvenance | null;
}

export interface ItemMetadata {
  github: GitHubMetadata;
}

export interface Insights {
  summary: string | null;
  why_it_matters: string | null;
  mental_damage: string | null;
  tags: string[];
  confidence: "high" | "medium" | "low" | null;
}

export interface Curation {
  status: "pending" | "included" | "excluded";
  reason: string | null;
  evidence: string[];
}

export interface Placement {
  primary_category: string | null;
  secondary_categories?: string[];
  section: string | null;
}

export interface Lifecycle {
  status: LifecycleStatus;
  reason?: string | null;
}

export interface CatalogItem {
  id: string;
  kind: CatalogItemKind;
  name: string;
  canonical_url: string;

  identity: {
    github_repo?: string;
  };

  provenance: Provenance;
  metadata: ItemMetadata;
  insights: Insights;
  curation: Curation;
  placement: Placement;
  lifecycle: Lifecycle;
}

export interface Override {
  id: string;
  override: {
    reason: string;
    updated_by: string;
    updated_at: string;
  };
  patch: Partial<{
    insights: Partial<Insights>;
    curation: Partial<Curation>;
    placement: Partial<Placement>;
    lifecycle: Partial<Lifecycle>;
  }>;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface CatalogConfig {
  promotion: {
    incubating_until_stars: number;
  };
  github: {
    metadata_refresh_days: number;
  };
  source_lists: {
    max_new_items_per_run: number;
  };
}

export interface ReviewReport {
  new_items: string[];
  updated_metadata: string[];
  promotion_candidates: string[];
  needs_review: string[];
  new_discovery_sources: string[];
}
