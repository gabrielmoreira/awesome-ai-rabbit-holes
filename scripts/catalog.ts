// scripts/catalog.ts
// Main orchestrator. Owns update, refresh, validate.

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { mapWithConcurrency } from "./async.ts";
import { readYaml, readYamlIfExists, writeYaml, yamlExists } from "./yaml.ts";
import { parseGitHubUrl, fetchGitHubRepo, fetchGitHubReadmeResult } from "./github.ts";
import { buildInsightPrompt, parseAIInsightResponse } from "./ai.ts";
import { resolveCatalogAIModel, runCatalogAIPrompt } from "./ai-runner.ts";
import { buildProgressHeartbeat, shouldEmitProgressHeartbeat } from "./progress.ts";

import {
  loadSourceContextLinesForItem,
  loadSourceListDiscoveryCandidates,
  materializeSourceListMetadata,
  readWebsiteLinkResolution,
  resolveCanonicalCatalogUrl,
  shouldSkipDiscoveredUrl,
} from "./source-lists.ts";
import {
  renderReadme,
  renderRabbitHolePage,
  renderSiteCatalog,
  writeReadme,
  writeRabbitHolePage,
  writeSiteCatalog,
} from "./render.ts";
import type {
  Source,
  CatalogItem,
  Override,
  Category,
  CatalogConfig,
  ReviewReport,
  Discovery,
  DiscoveryCandidate,
  LifecycleStatus,
  Insights,
  GitHubReadmeProvenance,
} from "./types.ts";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const DEFAULT_CONFIG: CatalogConfig = {
  promotion: { incubating_until_stars: 150 },
  github: { metadata_refresh_days: 7 },
};
const ITEM_HEARTBEAT_EVERY = 50;
const DEFAULT_DIRECT_DISCOVERY_CONCURRENCY = 8;
const DEFAULT_GITHUB_ENRICHMENT_CONCURRENCY = 8;
const DEFAULT_AI_INSIGHT_CONCURRENCY = 2;
// ─── Config ───────────────────────────────────────────────────────────────────

export function loadConfig(): CatalogConfig {
  const configPath = path.join(REPO_ROOT, "catalog", "config.yml");
  if (!fs.existsSync(configPath)) return DEFAULT_CONFIG;
  const raw = readYaml<Partial<CatalogConfig>>(configPath);
  return {
    promotion: { ...DEFAULT_CONFIG.promotion, ...raw.promotion },
    github: { ...DEFAULT_CONFIG.github, ...raw.github },
  };
}

// ─── Load ──────────────────────────────────────────────────────────────────────

export function loadSources(): Source[] {
  const inboxPath = path.join(REPO_ROOT, "sources", "inbox.yml");
  if (!fs.existsSync(inboxPath)) return [];
  const raw = readYamlIfExists<unknown>(inboxPath, null);
  if (!raw) return [];
  // Defend against a malformed YAML root (e.g. mapping instead of list):
  // downstream code assumes an array, and we'd rather treat malformed input
  // as "no sources" than crash with a confusing TypeError on `validateSources`.
  if (!Array.isArray(raw)) {
    console.error(
      `Validation error: expected ${inboxPath} to contain a YAML list of sources.`
    );
    return [];
  }
  return raw as Source[];
}

type ScopeExamplesFile = {
  in_scope?: Source[];
  out_of_scope?: Source[];
};

export function loadScopeExamples(): ScopeExamplesFile {
  const scopePath = path.join(REPO_ROOT, "sources", "scope.yml");
  if (!fs.existsSync(scopePath)) return { in_scope: [], out_of_scope: [] };
  const raw = readYamlIfExists<Partial<ScopeExamplesFile>>(scopePath, {});
  return {
    in_scope: Array.isArray(raw.in_scope) ? raw.in_scope : [],
    out_of_scope: Array.isArray(raw.out_of_scope) ? raw.out_of_scope : [],
  };
}

export function normalizeSourceCoverageUrl(url: string): string {
  const github = parseGitHubUrl(url);
  if (github) {
    return `https://github.com/${github.owner.toLowerCase()}/${github.repo.toLowerCase()}`;
  }

  try {
    const parsed = new URL(url);
    parsed.hash = "";
    parsed.search = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return url.trim().replace(/\/+$/, "");
  }
}

export function loadCategories(): Category[] {
  const catPath = path.join(REPO_ROOT, "catalog", "categories.yml");
  if (!fs.existsSync(catPath)) return [];
  return readYamlIfExists<Category[]>(catPath, []);
}

export function loadCatalogItems(): CatalogItem[] {
  const itemsDir = path.join(REPO_ROOT, "catalog", "items");
  if (!fs.existsSync(itemsDir)) return [];
  return loadItemsFromDir(itemsDir);
}

function normalizeLoadedCatalogItem(raw: any): CatalogItem {
  const github = raw?.metadata?.github ?? {};
  const discoveries = Array.isArray(raw?.provenance?.discoveries) ? raw.provenance.discoveries : [];

  return {
    id: raw.id,
    kind: raw.kind,
    name: raw.name,
    canonical_url: raw.canonical_url,
    identity: raw.identity ?? {},
    provenance: {
      discoveries: Array.from(
        new Map<string, Discovery>(
          discoveries.map((discovery: any) => {
            const normalizedSource: Source = {
              url: discovery?.source?.url ?? raw.canonical_url,
              kind: discovery?.source?.type ?? "direct-link",
              note: discovery?.extraction?.surrounding_text ?? undefined,
            };
            const extraction = {
              mode: discovery?.extraction?.mode ?? "direct",
              section_path: Array.isArray(discovery?.extraction?.section_path)
                ? discovery.extraction.section_path
                : ["inbox"],
              anchor_text: discovery?.extraction?.anchor_text ?? raw.canonical_url,
              extracted_url: discovery?.extraction?.extracted_url ?? raw.canonical_url,
              surrounding_text: discovery?.extraction?.surrounding_text ?? null,
              confidence: discovery?.extraction?.confidence ?? "high",
            } as Discovery["extraction"];

            const normalizedDiscovery: Discovery = {
              id: makeDiscoveryId(extraction.extracted_url, normalizedSource),
              discovered_at: discovery.discovered_at,
              source: {
                type: normalizedSource.kind ?? "direct-link",
                name: discovery?.source?.name ?? "Manual submission",
                url: discovery?.source?.url ?? null,
                repository: discovery?.source?.repository ?? null,
              },
              extraction,
            };

            return [normalizedDiscovery.id, normalizedDiscovery] as const;
          })
        ).values()
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
      summary: raw?.insights?.summary ?? null,
      why_it_matters: raw?.insights?.why_it_matters ?? null,
      mental_damage: raw?.insights?.mental_damage ?? null,
      tags: Array.isArray(raw?.insights?.tags) ? raw.insights.tags : [],
      confidence: raw?.insights?.confidence ?? null,
    },
    curation: {
      status: raw?.curation?.status ?? "pending",
      reason: raw?.curation?.reason ?? null,
      evidence: Array.isArray(raw?.curation?.evidence)
        ? raw.curation.evidence.map((value: unknown) => String(value).trim()).filter((value: string) => value.length > 0)
        : [],
    },
    placement: {
      primary_category: raw?.placement?.primary_category ?? null,
      secondary_categories: Array.isArray(raw?.placement?.secondary_categories)
        ? raw.placement.secondary_categories
        : undefined,
      section: raw?.placement?.section ?? null,
    },
    lifecycle: {
      status: raw?.lifecycle?.status ?? "incubating",
      reason: raw?.lifecycle?.reason ?? null,
    },
  };
}

function loadItemsFromDir(dir: string): CatalogItem[] {
  const items: CatalogItem[] = [];
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    if (entry.isDirectory()) {
      items.push(...loadItemsFromDir(path.join(dir, entry.name)));
    } else if (entry.name.endsWith(".yml") && entry.name !== ".gitkeep") {
      const item = readYaml<any>(path.join(dir, entry.name));
      items.push(normalizeLoadedCatalogItem(item));
    }
  }
  return items;
}

export function loadOverrides(): Override[] {
  const overridesDir = path.join(REPO_ROOT, "overrides", "catalog", "items");
  if (!fs.existsSync(overridesDir)) return [];
  return loadOverridesFromDir(overridesDir);
}

function loadOverridesFromDir(dir: string): Override[] {
  const overrides: Override[] = [];
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    if (entry.isDirectory()) {
      overrides.push(...loadOverridesFromDir(path.join(dir, entry.name)));
    } else if (entry.name.endsWith(".yml")) {
      const override = readYaml<Override>(path.join(dir, entry.name));
      overrides.push(override);
    }
  }
  return overrides;
}

// ─── Validate ─────────────────────────────────────────────────────────────────

export type ValidationError = {
  path: string;
  message: string;
};

export function validateSources(sources: Source[]): ValidationError[] {
  const errors: ValidationError[] = [];
  for (const [i, source] of sources.entries()) {
    if (!source.url) {
      errors.push({ path: `sources[${i}]`, message: "Source is missing required field: url" });
    }
  }
  return errors;
}

export function validateScopeCoverage(
  sources: Source[],
  requiredSources: Source[]
): ValidationError[] {
  const errors: ValidationError[] = [];
  const coveredUrls = new Set(
    sources
      .filter((source) => typeof source.url === "string" && source.url.trim().length > 0)
      .map((source) => normalizeSourceCoverageUrl(source.url))
  );

  for (const requiredSource of requiredSources) {
    if (!requiredSource.url) continue;
    const normalized = normalizeSourceCoverageUrl(requiredSource.url);
    if (!coveredUrls.has(normalized)) {
      errors.push({
        path: "sources/inbox.yml",
        message: `Missing required in-scope source from sources/scope.yml: ${requiredSource.url}`,
      });
    }
  }

  return errors;
}


export function validateCatalogItem(item: CatalogItem): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!item.id) {
    errors.push({ path: item.id ?? "unknown", message: "Item missing required field: id" });
  }
  if (!item.canonical_url) {
    errors.push({ path: item.id, message: "Item missing required field: canonical_url" });
  }
  if (!item.provenance || !item.provenance.discoveries || item.provenance.discoveries.length === 0) {
    errors.push({ path: item.id, message: "Item missing required field: provenance.discoveries" });
  }
  if (!item.curation || !item.curation.status) {
    errors.push({ path: item.id, message: "Item missing required field: curation.status" });
  }

  return errors;
}

export function validateCatalogItems(items: CatalogItem[]): ValidationError[] {
  const errors: ValidationError[] = [];
  for (const item of items) {
    errors.push(...validateCatalogItem(item));
  }
  return errors;
}

export function validateOverride(override: Override, items: CatalogItem[]): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!override.id) {
    errors.push({ path: "override", message: "Override missing required field: id" });
  }
  if (!override.override?.reason) {
    errors.push({ path: override.id ?? "unknown", message: "Override missing required field: override.reason" });
  }

  const targetItem = items.find((item) => item.id === override.id);
  if (!targetItem) {
    errors.push({ path: override.id, message: `Override targets unknown item id: ${override.id}` });
  }

  // Patch must be a plain object (not null/array/scalar).
  const rawPatch = override.patch as unknown;
  if (
    rawPatch === null ||
    rawPatch === undefined ||
    typeof rawPatch !== "object" ||
    Array.isArray(rawPatch)
  ) {
    errors.push({
      path: override.id ?? "unknown",
      message: "Override patch must be a plain object",
    });
    return errors;
  }

  // Only an explicit allowlist of top-level keys may be patched. This stops
  // overrides from silently mutating protected nested fields like
  // `metadata.github.stars` or `provenance.discoveries` via `patch.metadata`
  // / `patch.provenance`, etc.
  const allowed = new Set(["insights", "curation", "placement", "lifecycle"]);
  const patchObj = rawPatch as Record<string, unknown>;
  for (const field of Object.keys(patchObj)) {
    if (!allowed.has(field)) {
      errors.push({
        path: override.id ?? "unknown",
        message: `Override cannot patch field: ${field} (allowed: ${[...allowed].join(", ")})`,
      });
    }
  }

  // Each allowed sub-patch must itself be a plain object — otherwise
  // `applyOverride` would spread a string/array/scalar into the item shape
  // and fail in surprising ways at runtime.
  for (const field of allowed) {
    if (!(field in patchObj)) continue;
    const sub = patchObj[field];
    if (sub === null || sub === undefined || typeof sub !== "object" || Array.isArray(sub)) {
      errors.push({
        path: override.id ?? "unknown",
        message: `Override patch.${field} must be a plain object`,
      });
    }
  }

  return errors;
}

export function validateOverridesUniqueness(overrides: Override[]): ValidationError[] {
  const errors: ValidationError[] = [];
  const seen = new Map<string, number>();
  for (const o of overrides) {
    if (!o.id) continue;
    seen.set(o.id, (seen.get(o.id) ?? 0) + 1);
  }
  for (const [id, count] of seen) {
    if (count > 1) {
      errors.push({ path: id, message: `Duplicate override id: ${id} (found ${count} times)` });
    }
  }
  return errors;
}

export async function cmdValidate(): Promise<void> {
  console.log("Validating catalog...");

  const sources = loadSources();
  const scopeExamples = loadScopeExamples();
  const items = loadCatalogItems();
  const overrides = loadOverrides();

  const errors: ValidationError[] = [];

  // Validate sources
  const sourceErrors = validateSources(sources);
  errors.push(...sourceErrors);
  errors.push(...validateScopeCoverage(sources, scopeExamples.in_scope ?? []));

  // Validate items
  const itemErrors = validateCatalogItems(items);
  errors.push(...itemErrors);

  // Validate overrides
  for (const override of overrides) {
    errors.push(...validateOverride(override, items));
  }
  errors.push(...validateOverridesUniqueness(overrides));

  if (errors.length > 0) {
    console.error(`\n❌ Validation failed with ${errors.length} error(s):\n`);
    for (const err of errors) {
      console.error(`  [${err.path}] ${err.message}`);
    }
    process.exit(1);
  }

  console.log(`✅ Catalog is valid (${items.length} items, ${sources.length} sources)`);
}

// ─── Discover ─────────────────────────────────────────────────────────────────

export function makeItemId(url: string): string {
  const github = parseGitHubUrl(url);
  if (github) {
    return `github__${github.owner.toLowerCase()}__${github.repo.toLowerCase()}`;
  }
  // Fallback: slugify the URL
  return url
    .replace(/^https?:\/\//, "")
    .replace(/[^a-z0-9]+/gi, "__")
    .toLowerCase();
}

export function makeItemPath(url: string): string {
  const github = parseGitHubUrl(url);
  if (github) {
    // Lowercase owner/repo so the same repo always maps to the same path
    // regardless of how the URL was capitalized in the source. Matches the
    // lowercase id produced by makeItemId().
    return path.join(
      REPO_ROOT,
      "catalog",
      "items",
      "github",
      github.owner.toLowerCase(),
      `${github.repo.toLowerCase()}.yml`
    );
  }
  const id = makeItemId(url);
  return path.join(REPO_ROOT, "catalog", "items", `${id}.yml`);
}

export function makeDiscoveryId(url: string, source: Source): string {
  const itemId = makeItemId(url);
  const kind = source.kind ?? "direct-link";
  // Discovery id is intentionally stable across days so re-running `update`
  // on a different date does not create a duplicate provenance entry for the
  // same source. `discovered_at` carries the timestamp instead.
  if (kind === "direct-link" || kind === "manual-submission") {
    return `discovery__${itemId}__${kind}`;
  }

  const sourceGithub = parseGitHubUrl(source.url);
  if (sourceGithub) {
    return `discovery__${itemId}__${kind}__${sourceGithub.owner.toLowerCase()}__${sourceGithub.repo.toLowerCase()}`;
  }

  const sourceKey = source.url
    .replace(/^https?:\/\//, "")
    .replace(/[^a-z0-9]+/gi, "__")
    .toLowerCase();
  return `discovery__${itemId}__${kind}__${sourceKey}`;
}

// Map a `Source.kind` to the human-readable `source.name` and `source.url`
// kept in each `Discovery`. External pages (awesome-list / article /
// docs-page / newsletter / paper) keep the page URL in structured
// provenance data; direct/manual submissions stay as "Manual submission"
// with no URL.
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
  let host = source.url;
  try {
    host = new URL(source.url).hostname.replace(/^www\./, "") || source.url;
  } catch {
    // leave host as-is on unparseable URLs
  }
  return { name: host, url: source.url, repository: null };
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
  }
): Discovery {
  const sourceInfo = deriveSourceInfo(source);
  return {
    id: makeDiscoveryId(url, source),
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
  extraction?: Discovery["extraction"]
): CatalogItem {
  const github = parseGitHubUrl(url);
  const id = makeItemId(url);
  const name = github ? github.repo : url.split("/").pop() ?? url;

  const discovery = buildDiscovery(url, source, discoveredAt, extraction);

  return {
    id,
    kind: github ? "github-repo" : "website",
    name,
    canonical_url: url,
    identity: github ? { github_repo: `${github.owner}/${github.repo}` } : {},
    provenance: {
      discoveries: [discovery],
    },
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
    insights: {
      summary: null,
      why_it_matters: null,
      mental_damage: null,
      tags: [],
      confidence: null,
    },
    curation: {
      status: "pending",
      reason: null,
      evidence: [],
    },
    placement: {
      primary_category: null,
      section: null,
    },
    lifecycle: {
      status: "incubating",
    },
  };
}

// ─── Resolve ──────────────────────────────────────────────────────────────────

function normalizeDiscoveryTarget(url: string): string {
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
// ─── Resolve ──────────────────────────────────────────────────────────────────

export function normalizeGitHubUrl(url: string): string {
  const match = url.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?(?:\/.*)?$/);
  if (match) {
    return `https://github.com/${match[1]}/${match[2]}`;
  }
  return url;
}

// ─── Discover ─────────────────────────────────────────────────────────────────

function buildSourceListSources(sources: Source[], existingItems: CatalogItem[]): Source[] {
  const catalogSourceLists = existingItems
    .filter(
      (item) =>
        item.curation.status === "included" &&
        item.placement.primary_category === "awesome-awesomes"
    )
    .map((item) => ({
      url: item.canonical_url,
      kind: "awesome-list" as const,
      note: item.insights.summary ?? item.metadata.github.description ?? item.curation.reason ?? undefined,
    }));

  return [...sources, ...catalogSourceLists];
}

async function buildDirectDiscoveryCandidates(
  sources: Source[],
  token?: string
): Promise<DiscoveryCandidate[]> {
  const discoverableSources = sources.filter((source) => !shouldSkipDiscoveredUrl(source.url));
  return mapWithConcurrency(
    discoverableSources,
    resolveDirectDiscoveryConcurrency(),
    async (source) => {
      const extractedUrl = normalizeDiscoveryTarget(source.url);
      const targetUrl = await resolveCanonicalCatalogUrl(extractedUrl, token);
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
      };
    }
  );
}

function buildDirectDiscoveryCandidatesSync(sources: Source[]): DiscoveryCandidate[] {
  return sources
    .filter((source) => !shouldSkipDiscoveredUrl(source.url))
    .map((source) => {
      const targetUrl = normalizeDiscoveryTarget(source.url);
      return {
        target_url: targetUrl,
        source,
        extraction: {
          mode: "direct",
          section_path: ["inbox"],
          anchor_text: targetUrl,
          extracted_url: targetUrl,
          surrounding_text: source.note ?? null,
          confidence: "high",
        },
      };
    });
}

function resolvePositiveConcurrencyLimit(
  envName: string,
  fallback: number,
  env: NodeJS.ProcessEnv = process.env
): number {
  const raw = env[envName]?.trim();
  if (!raw) return fallback;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return parsed;
}

export function resolveDirectDiscoveryConcurrency(
  env: NodeJS.ProcessEnv = process.env
): number {
  return resolvePositiveConcurrencyLimit(
    "CATALOG_DIRECT_DISCOVERY_CONCURRENCY",
    DEFAULT_DIRECT_DISCOVERY_CONCURRENCY,
    env
  );
}

export function resolveGitHubEnrichmentConcurrency(
  env: NodeJS.ProcessEnv = process.env
): number {
  return resolvePositiveConcurrencyLimit(
    "CATALOG_GITHUB_CONCURRENCY",
    DEFAULT_GITHUB_ENRICHMENT_CONCURRENCY,
    env
  );
}

export function resolveAIInsightConcurrency(
  env: NodeJS.ProcessEnv = process.env
): number {
  return resolvePositiveConcurrencyLimit(
    "CATALOG_AI_CONCURRENCY",
    DEFAULT_AI_INSIGHT_CONCURRENCY,
    env
  );
}

export function resolveSourceListNewItemLimit(env: NodeJS.ProcessEnv = process.env): number | null {
  const raw = env["CATALOG_MAX_SOURCE_LIST_NEW_ITEMS"]?.trim();
  if (!raw) return null;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}
type SourceListDiscoveryGroup = {
  targetUrl: string;
  itemId: string;
  support: number;
  candidates: DiscoveryCandidate[];
};

function rankEligibleSourceListDiscoveryGroups(
  candidates: DiscoveryCandidate[],
  blockedItemIds: Set<string>,
  existingItems: CatalogItem[] = []
): SourceListDiscoveryGroup[] {
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
    };
    const group = grouped.get(targetUrl);
    if (group) {
      group.push(normalizedCandidate);
      continue;
    }
    grouped.set(targetUrl, [normalizedCandidate]);
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
      return group.candidates.some(
        (candidate) => !existingDiscoveryIds.has(makeDiscoveryId(group.targetUrl, candidate.source))
      );
    })
    .sort((a, b) => b.support - a.support || a.targetUrl.localeCompare(b.targetUrl));
}

export function selectSourceListDiscoveryCandidates(
  candidates: DiscoveryCandidate[],
  blockedItemIds: Set<string>,
  existingItems: CatalogItem[] = [],
  maxItems: number | null = null
): DiscoveryCandidate[] {
  const rankedGroups = rankEligibleSourceListDiscoveryGroups(
    candidates,
    blockedItemIds,
    existingItems
  );
  const limitedGroups = maxItems == null ? rankedGroups : rankedGroups.slice(0, maxItems);

  return limitedGroups.flatMap((group) => group.candidates);
}

async function buildDiscoveryCandidates(
  sources: Source[],
  existingItems: CatalogItem[],
  token?: string
): Promise<DiscoveryCandidate[]> {
  const directCandidates = await buildDirectDiscoveryCandidates(sources, token);
  const blockedItemIds = new Set(directCandidates.map((candidate) => makeItemId(candidate.target_url)));

  const sourceListCandidates = loadSourceListDiscoveryCandidates(
    buildSourceListSources(sources, existingItems)
  );
  const sourceListLimit = resolveSourceListNewItemLimit();
  const rankedSourceListGroups = rankEligibleSourceListDiscoveryGroups(
    sourceListCandidates,
    blockedItemIds,
    existingItems
  );
  const selectedSourceListGroups =
    sourceListLimit == null ? rankedSourceListGroups : rankedSourceListGroups.slice(0, sourceListLimit);

  if (sourceListLimit != null) {
    console.log(
      `Source-list discovery cap: selected ${selectedSourceListGroups.length}/${rankedSourceListGroups.length} eligible item group(s) with limit ${sourceListLimit}; already-discovered groups are skipped before capping.`
    );
  }

  const selectedSourceListCandidates = selectedSourceListGroups.flatMap((group) => group.candidates);

  return [...directCandidates, ...selectedSourceListCandidates];
}

export function discoverCandidates(
  candidates: DiscoveryCandidate[],
  existingItems: CatalogItem[]
): {
  newItems: CatalogItem[];
  updatedItems: CatalogItem[];
} {
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
      const item = buildNewCatalogItem(normalized, candidate.source, discoveredAt, extraction);
      newItemIndexes.set(id, newItems.length);
      newItems.push(item);
      existingById.set(id, item);
      continue;
    }

    const newDiscovery = buildDiscovery(normalized, candidate.source, discoveredAt, extraction);
    const alreadyDiscovered = existing.provenance.discoveries.some((discovery) => discovery.id === newDiscovery.id);
    if (alreadyDiscovered) continue;

    const updated: CatalogItem = {
      ...existing,
      provenance: {
        ...existing.provenance,
        discoveries: [...existing.provenance.discoveries, newDiscovery],
      },
    };
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

export function discover(
  sources: Source[],
  existingItems: CatalogItem[]
): {
  newItems: CatalogItem[];
  updatedItems: CatalogItem[];
} {
  return discoverCandidates(buildDirectDiscoveryCandidatesSync(sources), existingItems);
}

// ─── Enrich (GitHub metadata) ─────────────────────────────────────────────────

// README bodies are stored as a local cache, not in the catalog YAML, because
// they are large, volatile, and would create giant noisy diffs in PRs. Only
// small provenance (fetched_at, bytes) is persisted on the item itself.
const README_CACHE_DIR = path.join(REPO_ROOT, ".cache", "readmes", "github");

// GitHub repo and owner names are restricted to alphanumerics, `-`, `_`, and
// `.` (no path separators, no `..`). We enforce that allowlist before joining
// owner/repo into a filesystem path, so a crafted identity cannot escape the
// `.cache` directory.
const SAFE_PATH_SEGMENT = /^[A-Za-z0-9._-]+$/;

function assertSafePathSegment(segment: string, label: string): void {
  if (!segment || segment === "." || segment === ".." || !SAFE_PATH_SEGMENT.test(segment)) {
    throw new Error(`Unsafe ${label} for cache path: ${JSON.stringify(segment)}`);
  }
}

export function readmeCachePath(owner: string, repo: string): string {
  assertSafePathSegment(owner, "owner");
  assertSafePathSegment(repo, "repo");
  return path.join(README_CACHE_DIR, owner, `${repo}.md`);
}

export function readReadmeFromCache(owner: string, repo: string): string | null {
  const p = readmeCachePath(owner, repo);
  if (!fs.existsSync(p)) return null;
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return null;
  }
}

function writeReadmeToCache(owner: string, repo: string, body: string): void {
  const p = readmeCachePath(owner, repo);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body, "utf8");
}

export async function enrichWithGitHub(
  item: CatalogItem,
  token?: string
): Promise<CatalogItem> {
  if (item.kind !== "github-repo" || !item.identity.github_repo) return item;

  const [owner, repo] = item.identity.github_repo.split("/");
  const [data, readmeResult] = await Promise.all([
    fetchGitHubRepo(owner, repo, token),
    fetchGitHubReadmeResult(owner, repo, token),
  ]);

  if (!data) return item;

  // README is best-effort. 404 / private / empty / rate-limited must not
  // fail enrichment — the AI stage falls back to description + topics only.
  // On failure, leave any existing cache file in place and keep prior
  // readme provenance, so we don't lose a previous fetch.
  const previousReadme = item.metadata.github.readme ?? null;
  let readmeProvenance: GitHubReadmeProvenance | null = previousReadme;
  if (readmeResult.body !== null) {
    writeReadmeToCache(owner, repo, readmeResult.body);
    readmeProvenance = {
      fetched_at: new Date().toISOString(),
      bytes: Buffer.byteLength(readmeResult.body, "utf8"),
    };
  }

  const shouldReevaluateCuration = item.metadata.github.created_at == null && data.created_at != null;

  return {
    ...item,
    metadata: {
      github: {
        stars: data.stars,
        forks: data.forks,
        license: data.license,
        archived: data.archived,
        created_at: data.created_at,
        pushed_at: data.pushed_at,
        description: data.description,
        homepage: data.homepage,
        topics: data.topics,
        last_checked_at: new Date().toISOString(),
        readme: readmeProvenance,
      },
    },
    curation: shouldReevaluateCuration
      ? { status: "pending", reason: null, evidence: [] }
      : item.curation,
  };
}

function hasInsightText(value: string | null): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export type ProcessingError = {
  stage: "github_enrichment" | "ai_insights";
  item_id: string;
  message: string;
};

export function summarizeProcessingErrors(errors: ProcessingError[]): {
  total: number;
  byStage: Record<ProcessingError["stage"], number>;
} {
  return {
    total: errors.length,
    byStage: errors.reduce(
      (counts, error) => ({
        ...counts,
        [error.stage]: counts[error.stage] + 1,
      }),
      { github_enrichment: 0, ai_insights: 0 } as Record<ProcessingError["stage"], number>
    ),
  };
}

function isDirectAwesomeListSource(item: CatalogItem): boolean {
  return item.provenance.discoveries.some(
    (discovery) => discovery.source.type === "awesome-list" && discovery.extraction.mode === "direct"
  );
}

function buildDirectAwesomeListEvidence(item: CatalogItem): string[] {
  const evidence = ["Item was submitted directly as an awesome-list source."];
  if (hasInsightText(item.metadata.github.description)) {
    evidence.push(`Repo description: ${item.metadata.github.description}`);
  }
  const discoveryNote = item.provenance.discoveries
    .map((discovery) => discovery.extraction.surrounding_text)
    .find((note) => hasInsightText(note));
  if (discoveryNote) {
    evidence.push(`Discovery note: ${discoveryNote}`);
  }
  return evidence.slice(0, 3);
}

export function markExcludedItemsPending(
  items: CatalogItem[]
): { items: CatalogItem[]; resetIds: string[] } {
  const resetIds: string[] = [];
  const updatedItems = items.map((item) => {
    if (item.curation.status !== "excluded") return item;
    resetIds.push(item.id);
    return {
      ...item,
      curation: { status: "pending" as const, reason: null, evidence: [] },
    };
  });

  return { items: updatedItems, resetIds };
}

export function needsAIInsights(item: CatalogItem): boolean {
  return (
    !hasInsightText(item.insights.summary) ||
    !hasInsightText(item.insights.why_it_matters) ||
    !hasInsightText(item.insights.mental_damage) ||
    item.insights.tags.length === 0 ||
    item.insights.confidence === null ||
    item.curation.status === "pending" ||
    !hasInsightText(item.curation.reason)
  );
}

export function applyAIInsights(
  item: CatalogItem,
  response: ReturnType<typeof parseAIInsightResponse>,
  categories: Category[]
): CatalogItem {
  const validCategoryIds = new Set(categories.map((category) => category.id));
  const aiPrimaryCategory =
    (response.primary_category && validCategoryIds.has(response.primary_category)
      ? response.primary_category
      : null) ??
    response.category_candidates.find((candidate) => validCategoryIds.has(candidate)) ??
    null;

  let shouldInclude = response.should_include;
  let primaryCategory = shouldInclude
    ? item.placement.primary_category ?? aiPrimaryCategory
    : null;
  let decisionReason = response.decision_reason;
  let decisionEvidence = response.decision_evidence;

  if (!shouldInclude && isDirectAwesomeListSource(item) && validCategoryIds.has("awesome-awesomes")) {
    shouldInclude = true;
    primaryCategory = item.placement.primary_category ?? "awesome-awesomes";
    decisionReason =
      "Included because this is a curated awesome list with developer-relevant entries; even when broader than our core slice, it remains a useful map and readers can decide what to follow.";
    decisionEvidence = buildDirectAwesomeListEvidence(item);
  }

  if (shouldInclude && !item.placement.primary_category && !primaryCategory) {
    throw new Error(`AI marked ${item.id} as included but did not provide a valid category`);
  }

  return {
    ...item,
    insights: {
      summary: response.summary,
      why_it_matters: response.why_it_matters,
      mental_damage: response.mental_damage,
      tags: response.tags,
      confidence: response.confidence,
    },
    curation: {
      status: shouldInclude ? "included" : "excluded",
      reason: decisionReason,
      evidence: decisionEvidence,
    },
    placement: {
      ...item.placement,
      primary_category: shouldInclude ? primaryCategory : null,
    },
  };
}

export async function enrichWithAIInsights(
  item: CatalogItem,
  categories: Category[],
  runPrompt: (prompt: string) => Promise<string> = runCatalogAIPrompt
): Promise<CatalogItem> {
  if (!needsAIInsights(item)) return item;

  const readme =
    item.kind === "github-repo" && item.identity.github_repo
      ? (() => {
          const [owner, repo] = item.identity.github_repo.split("/");
          return readReadmeFromCache(owner, repo);
        })()
      : null;
  const websiteContext =
    item.kind === "website"
      ? readWebsiteLinkResolution(item.canonical_url)
      : null;

  const prompt = buildInsightPrompt({
    item,
    categories: categories.map(
      (category) => `${category.id} | ${category.name} | ${category.description}`
    ),
    source_contexts: loadSourceContextLinesForItem(item),
    readme,
    website_context: websiteContext
      ? {
          title: websiteContext.title,
          description: websiteContext.description,
          excerpt: websiteContext.excerpt,
        }
      : undefined,
  });

  let lastError: unknown = null;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const raw = await runPrompt(prompt);
      return applyAIInsights(item, parseAIInsightResponse(raw), categories);
    } catch (error) {
      lastError = error;
      if (attempt === 2) break;
    }
  }

  const message = lastError instanceof Error ? lastError.message : String(lastError);
  throw new Error(`Catalog AI insight generation failed for ${item.id}: ${message}`);
}

export type MaterializeCatalogStateDeps = {
  enrichItem?: (item: CatalogItem, categories: Category[]) => Promise<CatalogItem>;
  saveItem?: (item: CatalogItem) => void;
  renderCatalog?: (items: CatalogItem[], categories: Category[]) => void;
};

export type MaterializeCatalogStateResult = {
  finalItems: CatalogItem[];
  aiUpdatedIds: string[];
  processingErrors: ProcessingError[];
};

export async function materializeCatalogState(
  items: CatalogItem[],
  categories: Category[],
  overrides: Override[],
  deps: MaterializeCatalogStateDeps = {}
): Promise<MaterializeCatalogStateResult> {
  const enrichItem = deps.enrichItem ?? enrichWithAIInsights;
  const saveItem = deps.saveItem ?? saveCatalogItem;
  const renderCatalog = deps.renderCatalog ?? render;
  const startedAtMs = Date.now();
  let processedItems = 0;

  const outcomes = await mapWithConcurrency(
    items,
    resolveAIInsightConcurrency(),
    async (item) => {
      try {
        const withInsights = await enrichItem(item, categories);
        return {
          item: withInsights,
          aiUpdatedId: withInsights !== item ? withInsights.id : null,
          processingError: null as ProcessingError | null,
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          item,
          aiUpdatedId: null,
          processingError: { stage: "ai_insights", item_id: item.id, message } as ProcessingError,
        };
      } finally {
        processedItems += 1;
        if (shouldEmitProgressHeartbeat(processedItems, items.length, ITEM_HEARTBEAT_EVERY)) {
          console.log(
            buildProgressHeartbeat({
              label: "AI insights",
              completed: processedItems,
              total: items.length,
              startedAtMs,
            })
          );
        }
      }
    }
  );

  const aiUpdatedIds = outcomes.flatMap((outcome) =>
    outcome.aiUpdatedId ? [outcome.aiUpdatedId] : []
  );
  const processingErrors = outcomes.flatMap((outcome) =>
    outcome.processingError ? [outcome.processingError] : []
  );
  const itemsWithInsights = outcomes.map((outcome) => outcome.item);

  let finalItems = applyOverrides(itemsWithInsights, overrides);
  finalItems = finalItems.map((item) => applyPlacement(item, categories));

  for (const item of finalItems) {
    saveItem(item);
  }

  renderCatalog(finalItems, categories);

  return { finalItems, aiUpdatedIds, processingErrors };
}

// ─── Lifecycle ────────────────────────────────────────────────────────────────


export function applyLifecycleRules(item: CatalogItem, config: CatalogConfig): CatalogItem {
  const { stars, archived } = item.metadata.github;
  const currentStatus = item.lifecycle.status;

  if (item.curation.status === "excluded") return item;

  // Manual statuses always win (if set by override, they won't be touched here)
  if (currentStatus === "curated" || currentStatus === "landmark") {
    return item;
  }

  // Archived repo -> needs_review
  if (archived === true) {
    return {
      ...item,
      lifecycle: {
        status: "needs_review",
        reason: "Repository is archived",
      },
    };
  }

  // Stars-based rules
  if (stars !== null) {
    if (stars > config.promotion.incubating_until_stars && currentStatus === "incubating") {
      return {
        ...item,
        lifecycle: {
          status: "promotion_candidate",
          reason: `Stars (${stars}) exceeded threshold (${config.promotion.incubating_until_stars})`,
        },
      };
    }
    if (stars <= config.promotion.incubating_until_stars && currentStatus === "incubating") {
      return item; // Stay incubating
    }
  }

  return item;
}

// ─── Placement ────────────────────────────────────────────────────────────────

export function applyPlacement(
  item: CatalogItem,
  categories: Category[]
): CatalogItem {
  if (item.curation.status !== "included") return item;

  // If already has placement, keep it
  if (item.placement.primary_category) return item;

  // Deterministic rules based on tags
  const tags = item.insights.tags;
  const categoryIds = categories.map((c) => c.id);

  if (tags.includes("mcp") || tags.includes("mcp-server")) {
    if (categoryIds.includes("mcp")) {
      return { ...item, placement: { ...item.placement, primary_category: "mcp" } };
    }
  }

  // Check kind
  if (item.kind === "github-repo" && item.insights.tags.includes("awesome-list")) {
    if (categoryIds.includes("awesome-awesomes")) {
      return {
        ...item,
        placement: { ...item.placement, primary_category: "awesome-awesomes" },
      };
    }
  }

  return item;
}

// ─── Overrides ────────────────────────────────────────────────────────────────

export function applyOverride(item: CatalogItem, override: Override): CatalogItem {
  const patch = override.patch;

  let updated = { ...item };

  if (patch.insights) {
    updated = {
      ...updated,
      insights: {
        ...updated.insights,
        ...patch.insights,
      } as Insights,
    };
  }

  if (patch.curation) {
    updated = {
      ...updated,
      curation: {
        ...updated.curation,
        ...patch.curation,
      },
    };
  }

  if (patch.placement) {
    updated = {
      ...updated,
      placement: {
        ...updated.placement,
        ...patch.placement,
      },
    };
  }

  if (patch.lifecycle) {
    updated = {
      ...updated,
      lifecycle: {
        ...updated.lifecycle,
        ...patch.lifecycle,
      },
    };
  }

  return updated;
}

export function applyOverrides(items: CatalogItem[], overrides: Override[]): CatalogItem[] {
  const overrideMap = new Map(overrides.map((o) => [o.id, o]));

  return items.map((item) => {
    const override = overrideMap.get(item.id);
    if (!override) return item;
    return applyOverride(item, override);
  });
}

// ─── Save ─────────────────────────────────────────────────────────────────────

export function saveCatalogItem(item: CatalogItem): void {
  const itemPath = makeItemPath(item.canonical_url);
  writeYaml(itemPath, item);
}

// ─── Render ───────────────────────────────────────────────────────────────────

export function render(items: CatalogItem[], categories: Category[]): void {
  // Write README.md
  const readme = renderReadme(items, categories);
  writeReadme(readme);

  // Write rabbit-hole pages
  for (const category of categories) {
    const page = renderRabbitHolePage(category, items);
    writeRabbitHolePage(category.slug, page);
  }

  // Write site/catalog.json
  const siteCatalog = renderSiteCatalog(items);
  writeSiteCatalog(siteCatalog);
}

// ─── Review ───────────────────────────────────────────────────────────────────

export function buildReviewReport(
  newItems: CatalogItem[],
  updatedMetadataIds: string[],
  allItems: CatalogItem[]
): ReviewReport {
  const promotionCandidates = allItems
    .filter((item) => item.curation.status === "included" && item.lifecycle.status === "promotion_candidate")
    .map((item) => item.id);

  const needsReview = allItems
    .filter((item) => item.curation.status === "included" && item.lifecycle.status === "needs_review")
    .map((item) => item.id);

  const externalSourceTypes = new Set([
    "awesome-list",
    "article",
    "docs-page",
    "newsletter",
    "paper",
  ]);
  const newDiscoverySources: string[] = [];
  for (const item of newItems) {
    for (const discovery of item.provenance.discoveries) {
      if (!externalSourceTypes.has(discovery.source.type)) continue;
      const label = discovery.source.name ?? discovery.source.url ?? discovery.source.type;
      newDiscoverySources.push(label);
    }
  }

  return {
    new_items: newItems.map((i) => i.id),
    updated_metadata: updatedMetadataIds,
    promotion_candidates: promotionCandidates,
    needs_review: needsReview,
    new_discovery_sources: [...new Set(newDiscoverySources)],
  };
}

export function printReviewReport(report: ReviewReport): void {
  console.log("\n📋 Review Report");
  console.log("─".repeat(40));
  console.log(`New items:           ${report.new_items.length}`);
  console.log(`Updated metadata:    ${report.updated_metadata.length}`);
  console.log(`Promotion candidates: ${report.promotion_candidates.length}`);
  console.log(`Needs review:        ${report.needs_review.length}`);
  console.log(`New discovery sources: ${report.new_discovery_sources.length}`);

  if (report.promotion_candidates.length > 0) {
    console.log("\n⭐ Promotion candidates:");
    for (const id of report.promotion_candidates) {
      console.log(`  - ${id}`);
    }
  }

  if (report.needs_review.length > 0) {
    console.log("\n⚠️  Needs review:");
    for (const id of report.needs_review) {
      console.log(`  - ${id}`);
    }
  }
}

function logStage(step: number, total: number, label: string, detail?: string): void {
  const suffix = detail ? ` — ${detail}` : "";
  console.log(`\n[${step}/${total}] ${label}${suffix}`);
}

function logCatalogAIModel(): void {
  const configuredModel = resolveCatalogAIModel();
  console.log(
    configuredModel
      ? `AI runner: pi:free (${configuredModel})`
      : "AI runner: pi:free (automatic fallback chain)"
  );
}

function printProcessingErrorSummary(errors: ProcessingError[], contextLabel: string): void {
  if (errors.length === 0) return;

  const summary = summarizeProcessingErrors(errors);
  console.warn(`\n⚠️ ${contextLabel} completed with ${summary.total} non-fatal processing error(s):`);
  for (const [stage, count] of Object.entries(summary.byStage)) {
    if (count > 0) console.warn(`  - ${stage}: ${count}`);
  }
  console.warn("  Remaining targets were left for a later round.");
  console.warn("  Details:");
  for (const error of errors) {
    console.warn(`  - [${error.stage}] ${error.item_id}: ${error.message}`);
  }
}

export function shouldFailOnProcessingErrors(env: NodeJS.ProcessEnv = process.env): boolean {
  const value = env["CATALOG_FAIL_ON_PROCESSING_ERRORS"]?.trim().toLowerCase();
  if (!value) return true;
  return value !== "0" && value !== "false" && value !== "no";
}

function maybeFailOnProcessingErrors(errors: ProcessingError[], contextLabel: string): void {
  if (errors.length === 0 || !shouldFailOnProcessingErrors()) return;
  throw new Error(`${contextLabel} finished with ${errors.length} processing error(s).`);
}

// ─── Commands ─────────────────────────────────────────────────────────────────

// ─── Refresh helpers ──────────────────────────────────────────────────────────

// Returns true when an item's GitHub metadata is older than `windowDays`
// (or has never been fetched). Pulled out as a pure function so the refresh
// window from `catalog/config.yml` is actually honored and easy to test.
export function shouldRefreshMetadata(
  lastCheckedAt: string | null,
  windowDays: number,
  now: Date = new Date(),
  missingCreatedAt: boolean = false
): boolean {
  if (missingCreatedAt) return true;
  if (!lastCheckedAt) return true;
  const last = Date.parse(lastCheckedAt);
  if (Number.isNaN(last)) return true;
  const ageMs = now.getTime() - last;
  const windowMs = windowDays * 24 * 60 * 60 * 1000;
  return ageMs >= windowMs;
}

export async function cmdRefresh(token?: string): Promise<void> {
  console.log("Refreshing catalog metadata...");
  logCatalogAIModel();
  const config = loadConfig();
  const categories = loadCategories();
  const overrides = loadOverrides();
  const items = loadCatalogItems();

  if (items.length === 0) {
    console.log("No items to refresh.");
    return;
  }

  logStage(1, 4, "Load current catalog", `${items.length} item(s)`);
  const sources = loadSources();
  logStage(2, 4, "Refresh source-list cache");
  await materializeSourceListMetadata(buildSourceListSources(sources, items), token);

  const updatedIds: string[] = [];
  const processingErrors: ProcessingError[] = [];
  const windowDays = config.github.metadata_refresh_days;
  logStage(3, 4, "Refresh GitHub metadata", `${items.length} item(s) under evaluation`);

  const startedAtMs = Date.now();
  let processedItems = 0;
  const now = new Date();
  const refreshOutcomes = await mapWithConcurrency(
    items,
    resolveGitHubEnrichmentConcurrency(),
    async (item) => {
      try {
        const refreshed = shouldRefreshMetadata(
          item.metadata.github.last_checked_at,
          windowDays,
          now,
          item.metadata.github.created_at == null
        )
          ? await enrichWithGitHub(item, token)
          : item;

        return {
          item: applyLifecycleRules(refreshed, config),
          updatedId: refreshed !== item ? refreshed.id : null,
          processingError: null as ProcessingError | null,
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          item: applyLifecycleRules(item, config),
          updatedId: null,
          processingError: { stage: "github_enrichment", item_id: item.id, message } as ProcessingError,
        };
      } finally {
        processedItems += 1;
        if (shouldEmitProgressHeartbeat(processedItems, items.length, ITEM_HEARTBEAT_EVERY)) {
          console.log(
            buildProgressHeartbeat({
              label: "Refresh metadata",
              completed: processedItems,
              total: items.length,
              startedAtMs,
            })
          );
        }
      }
    }
  );

  const refreshedItems = refreshOutcomes.map((outcome) => outcome.item);
  updatedIds.push(...refreshOutcomes.flatMap((outcome) => (outcome.updatedId ? [outcome.updatedId] : [])));
  processingErrors.push(
    ...refreshOutcomes.flatMap((outcome) => (outcome.processingError ? [outcome.processingError] : []))
  );

  logStage(4, 4, "Materialize AI, placement, and generated output");
  const { aiUpdatedIds, processingErrors: aiErrors } = await materializeCatalogState(
    refreshedItems,
    categories,
    overrides
  );
  processingErrors.push(...aiErrors);
  if (aiUpdatedIds.length > 0) {
    console.log(`🤖 Filled AI insights for ${aiUpdatedIds.length} item(s)`);
  }

  console.log(`✅ Refreshed metadata for ${updatedIds.length} item(s)`);
  printProcessingErrorSummary(processingErrors, "Refresh");
  maybeFailOnProcessingErrors(processingErrors, "Refresh");
}

export async function cmdRerunExcluded(token?: string): Promise<void> {
  console.log("Re-running AI curation for excluded items...");
  logCatalogAIModel();
  const config = loadConfig();
  const categories = loadCategories();
  const overrides = loadOverrides();
  const currentItems = loadCatalogItems();
  logStage(1, 4, "Load current catalog", `${currentItems.length} item(s)`);
  const sources = loadSources();
  logStage(2, 4, "Refresh source-list cache");
  await materializeSourceListMetadata(buildSourceListSources(sources, currentItems), token);

  const { items, resetIds } = markExcludedItemsPending(currentItems);

  if (resetIds.length === 0) {
    console.log("No excluded items to re-run.");
    return;
  }

  logStage(3, 4, "Reset excluded items to pending", `${resetIds.length} item(s)`);

  logStage(4, 4, "Re-run AI, placement, and validation");
  const { aiUpdatedIds, finalItems, processingErrors } = await materializeCatalogState(
    items,
    categories,
    overrides
  );
  const itemErrors = validateCatalogItems(finalItems);
  if (itemErrors.length > 0) {
    console.error("\n❌ Catalog validation errors after rerun-excluded:");
    for (const err of itemErrors) {
      console.error(`  [${err.path}] ${err.message}`);
    }
    process.exit(1);
  }

  console.log(`🤖 Re-ran AI curation for ${resetIds.length} excluded item(s)`);
  console.log(`✅ Updated AI insights for ${aiUpdatedIds.length} item(s)`);
  console.log(`✅ Catalog remains valid with ${finalItems.length} items.`);
  printProcessingErrorSummary(processingErrors, "rerun-excluded");
  maybeFailOnProcessingErrors(processingErrors, "rerun-excluded");
}

export async function cmdUpdate(token?: string): Promise<void> {
  console.log("Running catalog update pipeline...");
  logCatalogAIModel();
  const config = loadConfig();

  // 1. Load
  const sources = loadSources();
  const scopeExamples = loadScopeExamples();
  const categories = loadCategories();
  const existingItems = loadCatalogItems();
  const overrides = loadOverrides();
  logStage(1, 6, "Load inputs", `${sources.length} source(s), ${existingItems.length} existing item(s)`);

  // 2. Validate sources
  const sourceErrors = validateSources(sources);
  const scopeCoverageErrors = validateScopeCoverage(sources, scopeExamples.in_scope ?? []);
  if (sourceErrors.length > 0 || scopeCoverageErrors.length > 0) {
    console.error("❌ Source validation errors:");
    for (const err of [...sourceErrors, ...scopeCoverageErrors]) {
      console.error(`  [${err.path}] ${err.message}`);
    }
    process.exit(1);
  }

  // 2b. Validate overrides up-front (schema, allowlist, uniqueness) so a
  //     malformed override file fails fast instead of throwing inside
  //     applyOverrides() later, and so duplicate ids are not silently
  //     dropped by the override Map.
  const overrideErrors: ValidationError[] = [];
  for (const o of overrides) {
    overrideErrors.push(...validateOverride(o, existingItems));
  }
  overrideErrors.push(...validateOverridesUniqueness(overrides));
  if (overrideErrors.length > 0) {
    console.error("❌ Override validation errors:");
    for (const err of overrideErrors) {
      console.error(`  [${err.path}] ${err.message}`);
    }
    process.exit(1);
  }

  logStage(2, 6, "Refresh source-list cache");
  await materializeSourceListMetadata(buildSourceListSources(sources, existingItems), token);

  // 3. Discover
  const discoveryCandidates = await buildDiscoveryCandidates(sources, existingItems, token);
  const { newItems, updatedItems } = discoverCandidates(discoveryCandidates, existingItems);
  console.log(`Selected ${discoveryCandidates.length} discovery candidate(s): ${newItems.length} new, ${updatedItems.length} provenance update(s).`);

  // 4. Enrich (fetch GitHub metadata for new items)
  logStage(4, 6, "Enrich new GitHub items", `${newItems.length} item(s)`);
  const processingErrors: ProcessingError[] = [];
  const startedAtMs = Date.now();
  let processedItems = 0;
  const enrichmentOutcomes = await mapWithConcurrency(
    newItems,
    resolveGitHubEnrichmentConcurrency(),
    async (item) => {
      try {
        return {
          item: await enrichWithGitHub(item, token),
          processingError: null as ProcessingError | null,
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return {
          item,
          processingError: { stage: "github_enrichment", item_id: item.id, message } as ProcessingError,
        };
      } finally {
        processedItems += 1;
        if (shouldEmitProgressHeartbeat(processedItems, newItems.length, ITEM_HEARTBEAT_EVERY)) {
          console.log(
            buildProgressHeartbeat({
              label: "GitHub enrichment",
              completed: processedItems,
              total: newItems.length,
              startedAtMs,
            })
          );
        }
      }
    }
  );
  const enrichedNewItems = enrichmentOutcomes.map((outcome) => outcome.item);
  processingErrors.push(
    ...enrichmentOutcomes.flatMap((outcome) => (outcome.processingError ? [outcome.processingError] : []))
  );

  // 5. Apply lifecycle
  const allNewItems = enrichedNewItems.map((item) => applyLifecycleRules(item, config));
  const allUpdatedItems = updatedItems.map((item) => applyLifecycleRules(item, config));
  const workingItemsById = new Map(existingItems.map((item) => [item.id, item]));
  for (const item of allUpdatedItems) {
    workingItemsById.set(item.id, item);
  }
  for (const item of allNewItems) {
    workingItemsById.set(item.id, item);
  }
  const workingItems = [...workingItemsById.values()];

  // 6. Materialize AI insights, overrides, placement, and rendered output
  logStage(5, 6, "Materialize AI, placement, and generated output");
  const { finalItems, aiUpdatedIds, processingErrors: aiErrors } = await materializeCatalogState(
    workingItems,
    categories,
    overrides
  );
  processingErrors.push(...aiErrors);

  if (aiUpdatedIds.length > 0) {
    console.log(`🤖 Filled AI insights for ${aiUpdatedIds.length} item(s)`);
  }

  // 8. Review report
  const report = buildReviewReport(
    allNewItems,
    allUpdatedItems.map((i) => i.id),
    finalItems
  );
  printReviewReport(report);

  // 9. Validate
  logStage(6, 6, "Validate final catalog", `${finalItems.length} item(s)`);
  const itemErrors = validateCatalogItems(finalItems);
  if (itemErrors.length > 0) {
    console.error("\n❌ Catalog validation errors after update:");
    for (const err of itemErrors) {
      console.error(`  [${err.path}] ${err.message}`);
    }
    process.exit(1);
  }

  printProcessingErrorSummary(processingErrors, "Update");
  maybeFailOnProcessingErrors(processingErrors, "Update");

  console.log(`\n✅ Update complete. ${finalItems.length} items in catalog.`);
}

// ─── CLI entry ─────────────────────────────────────────────────────────────────

const [, , command] = process.argv;

const token = process.env["GITHUB_TOKEN"] ?? process.env["GH_TOKEN"];

if (command === "update") {
  cmdUpdate(token).catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else if (command === "refresh") {
  cmdRefresh(token).catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else if (command === "rerun-excluded") {
  cmdRerunExcluded(token).catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else if (command === "validate") {
  cmdValidate().catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else if (command !== undefined) {
  console.error(`Unknown command: ${command}`);
  console.error("Usage: npm run catalog -- [update|refresh|rerun-excluded|validate]");
  process.exit(1);
}
