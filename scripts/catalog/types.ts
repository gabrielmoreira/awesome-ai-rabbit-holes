// scripts/catalog/types.ts
// Shared TypeScript types for the catalog pipeline.

export type SourceKind =
  | "direct-link"
  | "awesome-list"
  | "article"
  | "docs-page"
  | "newsletter"
  | "paper"
  | "manual-submission";

export type Source = {
  url: string;
  kind?: SourceKind;
  note?: string;
};

export type CatalogItemKind = "github-repo" | "website" | "article" | "paper" | "tool";

export type LifecycleStatus =
  | "incubating"
  | "promotion_candidate"
  | "curated"
  | "landmark"
  | "watchlist"
  | "archived"
  | "needs_review";

export type SourceInfo = {
  type: SourceKind;
  name: string;
  url: string | null;
  repository: string | null;
};

export type ExtractionInfo = {
  mode: "direct" | "scraped" | "parsed";
  section_path: string[];
  anchor_text: string;
  extracted_url: string;
  surrounding_text: string | null;
  confidence: "high" | "medium" | "low";
};

export type Discovery = {
  id: string;
  discovered_at: string;
  source: SourceInfo;
  extraction: ExtractionInfo;
};

export type DiscoveryCandidate = {
  target_url: string;
  source: Source;
  extraction: ExtractionInfo;
  canonicalization_cause?: { type: string; message: string } | null;
};

export type Provenance = {
  discoveries: Discovery[];
};

export type GitHubReadmeProvenance = {
  fetched_at: string | null;
  bytes: number | null;
};

export type GitHubMetadata = {
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
};

export type ItemMetadata = {
  github: GitHubMetadata;
};

export type Insights = {
  summary: string | null;
  why_it_matters: string | null;
  mental_damage: string | null;
  tags: string[];
  confidence: "high" | "medium" | "low" | null;
};

export type Curation = {
  status: "pending" | "included" | "excluded";
  reason: string | null;
  evidence: string[];
};

export type Placement = {
  primary_category: string | null;
  secondary_categories?: string[];
  section: string | null;
};

export type Lifecycle = {
  status: LifecycleStatus;
  reason?: string | null;
};

export type ProcessingCommandState = {
  status: "pending" | "done" | "deferred" | "failed" | "skipped";
  updated_at: string | null;
  cause?: { type: string; message: string } | null;
  next_retry_at?: string | null;
  attempts?: number;
  prompt_version?: string;
  category_rules_version?: string;
};

export type ProcessingState = Partial<Record<"discover" | "stars" | "categorize" | string, ProcessingCommandState>>;

export type CatalogItem = {
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
  processing?: ProcessingState;
};

export type Override = {
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
};

export type Category = {
  id: string;
  name: string;
  description: string;
  slug: string;
  prompt_instruction?: string;
};

export type CatalogConfig = {
  promotion: {
    incubating_until_stars: number;
  };
  github: {
    metadata_refresh_days: number;
  };
};

export type ReviewReport = {
  new_items: string[];
  updated_metadata: string[];
  promotion_candidates: string[];
  needs_review: string[];
  new_discovery_sources: string[];
};

export type AppSettings = {
  promotion: { incubating_until_stars: number };
  github: { metadata_refresh_days: number };
  budgets: { discover_minutes: number; stars_minutes: number; categorize_minutes: number };
  concurrency: { github: number; site: number; llm: number; model_probe: number };
};
