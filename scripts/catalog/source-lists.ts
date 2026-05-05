import * as fs from "node:fs";
import * as path from "node:path";
import { createHash } from "node:crypto";
import { mapWithConcurrency } from "../support/async.ts";
import { fetchGitHubReadmeResult, fetchGitHubRepo, parseGitHubUrl } from "../support/github.ts";
import { SOURCE_LIST_CACHE_DIR } from "../support/paths.ts";
import { buildProgressHeartbeat, createProgressHeartbeatPrinter } from "../support/progress.ts";
import { loadCategories } from "./data.ts";
import { isCuratedListSource, isLowSignalCatalogUrl, normalizeCatalogUrl as normalizeUrl } from "./core.ts";
import type { CatalogItem, Category, DiscoveryCandidate, Source } from "./types.ts";
import { resolveWebsiteLink, type WebsiteLinkResolution } from "./website-links.ts";

const WEBSITE_LINK_RESOLUTION_CONCURRENCY = 8;

export const OWN_REPO_URL = "https://github.com/gabrielmoreira/awesome-ai-rabbit-holes";
export const SOURCE_LIST_CACHE_TTL_MS = 30 * 60 * 1000;
const CATEGORY_MATCH_STOP_WORDS = new Set([
  "ai",
  "agent",
  "agents",
  "tool",
  "tools",
  "developer",
  "developers",
  "user",
  "users",
  "platform",
  "platforms",
  "product",
  "products",
  "service",
  "services",
  "workflow",
  "workflows",
  "code",
  "direct",
  "source",
  "surface",
  "surfaces",
  "primary",
  "and",
  "or",
  "for",
  "with",
  "from",
  "into",
  "than",
  "that",
  "this",
  "these",
  "those",
  "around",
  "built",
  "whose",
  "generic",
  "reference",
  "references",
  "resource",
  "resources",
  "link",
  "links",
]);


export interface SourceListEntry {
  extracted_url: string;
  normalized_url: string;
  canonical_url: string;
  anchor_text: string;
  section_path: string[];
  surrounding_text: string | null;
  page_title: string | null;
  page_description: string | null;
  github_repo_url: string | null;
  canonicalization_cause?: { type: string; message: string } | null;
}

export interface SourceListMetadata {
  source_url: string;
  source_name: string;
  fetched_at: string | null;
  purpose: string | null;
  entries: SourceListEntry[];
}

function normalizeSourceListEntry(raw: any): SourceListEntry {
  const normalizedUrl = normalizeUrl(raw?.normalized_url ?? raw?.extracted_url ?? "");
  const canonicalUrl = normalizeUrl(raw?.canonical_url ?? normalizedUrl);
  const canonicalizationCause = raw?.canonicalization_cause;
  return {
    extracted_url: raw?.extracted_url ?? normalizedUrl,
    normalized_url: normalizedUrl,
    canonical_url: canonicalUrl,
    anchor_text: raw?.anchor_text ?? normalizedUrl,
    section_path: Array.isArray(raw?.section_path) ? raw.section_path : [],
    surrounding_text: raw?.surrounding_text ?? null,
    page_title: raw?.page_title ?? null,
    page_description: raw?.page_description ?? null,
    github_repo_url: raw?.github_repo_url ? normalizeUrl(raw.github_repo_url) : null,
    ...(canonicalizationCause?.type && canonicalizationCause?.message
      ? { canonicalization_cause: { type: String(canonicalizationCause.type), message: String(canonicalizationCause.message) } }
      : {}),
  };
}

function normalizeSourceListMetadata(raw: any): SourceListMetadata {
  return {
    source_url: normalizeUrl(raw?.source_url ?? ""),
    source_name: raw?.source_name ?? "unknown-source",
    fetched_at: raw?.fetched_at ?? null,
    purpose: raw?.purpose ?? null,
    entries: Array.isArray(raw?.entries) ? raw.entries.map(normalizeSourceListEntry) : [],
  };
}



export function shouldSkipDiscoveredUrl(url: string): boolean {
  return normalizeUrl(url) === normalizeUrl(OWN_REPO_URL);
}

function sanitizePathSegment(value: string): string {
  return value.replace(/[^A-Za-z0-9._-]+/g, "_").replace(/^_+|_+$/g, "") || "item";
}

function cacheFileNameForUrl(url: string): string {
  const safePrefix = sanitizePathSegment(url).slice(0, 80) || "item";
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 12);
  return `${safePrefix}-${hash}`;
}

export function sourceListMetadataPath(sourceUrl: string): string {
  const github = parseGitHubUrl(sourceUrl);
  if (github) {
    return path.join(
      SOURCE_LIST_CACHE_DIR,
      "github",
      github.owner.toLowerCase(),
      `${github.repo.toLowerCase()}.json`
    );
  }

  const normalized = normalizeUrl(sourceUrl);
  return path.join(SOURCE_LIST_CACHE_DIR, "url", `${cacheFileNameForUrl(normalized)}.json`);
}


function extractMarkdownLink(value: string): { text: string; url: string } | null {
  const match = value.match(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/);
  if (!match) return null;
  return { text: match[1].trim(), url: match[2].trim() };
}

function headingText(raw: string): string {
  const linked = extractMarkdownLink(raw);
  if (linked) return linked.text;
  return raw.trim().replace(/\s+#*$/, "");
}


function isSecondaryLinkSection(sectionPath: string[]): boolean {
  const last = sectionPath[sectionPath.length - 1]?.trim().toLowerCase();
  return last === "links";
}

function normalizeCategoryMatchToken(value: string): string | null {
  const normalized = value.toLowerCase().replace(/[^a-z0-9]+/g, "");
  if (!normalized) return null;

  const singular = normalized.endsWith("ies") && normalized.length > 4
    ? `${normalized.slice(0, -3)}y`
    : normalized.endsWith("s") && !normalized.endsWith("ss") && normalized.length > 4
      ? normalized.slice(0, -1)
      : normalized;

  if (CATEGORY_MATCH_STOP_WORDS.has(singular)) return null;
  if (singular.length < 3 && !/\d/.test(singular)) return null;
  return singular;
}

function tokenizeCategoryMatchValues(values: Array<string | null | undefined>): Set<string> {
  const tokens = new Set<string>();
  for (const value of values) {
    if (!value) continue;
    for (const token of value.split(/[^a-z0-9]+/i)) {
      const normalized = normalizeCategoryMatchToken(token);
      if (normalized) tokens.add(normalized);
    }
  }
  return tokens;
}

function buildCategorySignalTokens(category: Category): Set<string> {
  return tokenizeCategoryMatchValues([
    category.id,
    category.slug,
    category.name,
  ]);
}

function matchSourceListEntryCategoryIds(source: Source, metadata: SourceListMetadata, entry: SourceListEntry, categories: Category[]): string[] {
  if (categories.length === 0) return [];

  const evidenceTokens = tokenizeCategoryMatchValues([
    source.note,
    metadata.purpose,
    entry.anchor_text,
    entry.surrounding_text,
    entry.page_title,
    entry.page_description,
    ...entry.section_path,
  ]);
  if (evidenceTokens.size === 0) return [];

  return categories
    .filter((category) => [...buildCategorySignalTokens(category)].some((token) => evidenceTokens.has(token)))
    .map((category) => category.id)
    .sort();
}




export function extractSourceListEntries(readme: string, sourceUrl: string): SourceListEntry[] {
  const lines = readme.split(/\r?\n/);
  const sectionPath: string[] = [];
  const seen = new Set<string>();
  const entries: SourceListEntry[] = [];

  const addEntry = (input: { url: string; anchorText: string; sectionPath: string[]; surroundingText: string }): void => {
    const extractedUrl = normalizeUrl(input.url);
    if (extractedUrl === normalizeUrl(sourceUrl)) return;
    if (shouldSkipDiscoveredUrl(extractedUrl)) return;
    if (isLowSignalCatalogUrl(extractedUrl)) return;
    if (seen.has(extractedUrl)) return;
    seen.add(extractedUrl);
    entries.push({
      extracted_url: extractedUrl,
      normalized_url: extractedUrl,
      canonical_url: extractedUrl,
      anchor_text: input.anchorText || extractedUrl,
      section_path: input.sectionPath,
      surrounding_text: input.surroundingText.trim() || null,
      page_title: null,
      page_description: null,
      github_repo_url: null,
    });
  };

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+(.*\S)\s*$/);
    if (headingMatch) {
      const depth = headingMatch[1].length;
      const rawHeading = headingMatch[2];
      const text = headingText(rawHeading);
      if (depth === 1) {
        sectionPath.length = 0;
      } else {
        sectionPath.length = Math.max(0, depth - 2);
        sectionPath[depth - 2] = text;
      }

      const linkedHeading = depth > 1 ? extractMarkdownLink(rawHeading) : null;
      if (linkedHeading) {
        addEntry({
          url: linkedHeading.url,
          anchorText: linkedHeading.text,
          sectionPath: [...sectionPath],
          surroundingText: line,
        });
      }
      continue;
    }

    if (isSecondaryLinkSection(sectionPath)) continue;

    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
    let match: RegExpExecArray | null;
    while ((match = linkRegex.exec(line)) !== null) {
      if (match.index > 0 && line[match.index - 1] === "!") continue;
      addEntry({
        url: match[2],
        anchorText: match[1].trim(),
        sectionPath: [...sectionPath],
        surroundingText: line,
      });
    }
  }

  return entries;
}


export function deriveSourceListPurpose(repoDescription: string | null, readme: string): string | null {
  if (repoDescription && repoDescription.trim().length > 0) {
    return repoDescription.trim();
  }

  const lines = readme.split(/\r?\n/);
  const paragraph: string[] = [];
  let started = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!started) {
      if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        continue;
      }
      started = true;
      paragraph.push(trimmed);
      continue;
    }

    if (!trimmed) break;
    if (trimmed.startsWith("#") || trimmed.startsWith("- ") || trimmed.startsWith("* ")) break;
    paragraph.push(trimmed);
  }

  if (paragraph.length === 0) return null;
  return paragraph.join(" ").trim();
}

async function resolveSourceListEntryUrl(url: string, token?: string): Promise<WebsiteLinkResolution> {
  const normalizedUrl = normalizeUrl(url);
  const github = parseGitHubUrl(normalizedUrl);
  if (github) {
    const repoData = await fetchGitHubRepo(github.owner, github.repo, token);
    return {
      fetched_at: null,
      final_url: normalizedUrl,
      canonical_url: normalizeUrl(repoData?.html_url ?? normalizedUrl),
      github_repo_url: null,
      title: null,
      description: null,
      excerpt: null,
    };
  }

  return resolveWebsiteLink(normalizedUrl, token);
}

export async function buildSourceListMetadata(
  input: {
    sourceUrl: string;
    sourceName: string;
    fetchedAt?: string | null;
    repoDescription: string | null;
    readme: string;
    deadlineMs?: number | null;
    onProgress?: (event: {
      sourceName: string;
      discoveredDelta: number;
      resolvedDelta: number;
      final: boolean;
      nowMs: number;
    }) => void;
  },
  resolveLinkedSite: (url: string) => Promise<WebsiteLinkResolution> = (url) => resolveSourceListEntryUrl(url)
): Promise<SourceListMetadata> {
  const extractedEntries = extractSourceListEntries(input.readme, input.sourceUrl);
  input.onProgress?.({
    sourceName: input.sourceName,
    discoveredDelta: extractedEntries.length,
    resolvedDelta: 0,
    final: extractedEntries.length === 0,
    nowMs: Date.now(),
  });

  let resolvedEntries = 0;
  const entries = await mapWithConcurrency(
    extractedEntries,
    WEBSITE_LINK_RESOLUTION_CONCURRENCY,
    async (entry) => {
      const resolution = await resolveLinkedSite(entry.normalized_url);
      const finalEntry = {
        ...entry,
        canonical_url: normalizeUrl(resolution.github_repo_url ?? resolution.canonical_url ?? entry.normalized_url),
        page_title: resolution.title ?? null,
        page_description: resolution.description ?? null,
        github_repo_url: resolution.github_repo_url ? normalizeUrl(resolution.github_repo_url) : null,
        ...(resolution.canonicalization_cause ? { canonicalization_cause: resolution.canonicalization_cause } : {}),
      } satisfies SourceListEntry;
      resolvedEntries += 1;
      input.onProgress?.({
        sourceName: input.sourceName,
        discoveredDelta: 0,
        resolvedDelta: 1,
        final: resolvedEntries >= extractedEntries.length,
        nowMs: Date.now(),
      });
      return finalEntry;
    }
  );

  return {
    source_url: normalizeUrl(input.sourceUrl),
    source_name: input.sourceName,
    fetched_at: input.fetchedAt ?? null,
    purpose: deriveSourceListPurpose(input.repoDescription, input.readme),
    entries,
  };
}

export function finalizeSourceListMetadata(
  cached: SourceListMetadata | null,
  refreshed: SourceListMetadata,
  options: { preserveCachedEntries: boolean }
 ): SourceListMetadata | null {
  if (options.preserveCachedEntries) {
    if (cached && cached.entries.length > 0) {
      return { ...cached, fetched_at: refreshed.fetched_at ?? cached.fetched_at };
    }
    if (!cached && refreshed.entries.length === 0) {
      return null;
    }
  }
  return refreshed;
}

export function writeSourceListMetadata(metadata: SourceListMetadata): void {
  const outPath = sourceListMetadataPath(metadata.source_url);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(metadata, null, 2) + "\n", "utf8");
}

export function readSourceListMetadata(sourceUrl: string): SourceListMetadata | null {
  const cachePath = sourceListMetadataPath(sourceUrl);
  if (!fs.existsSync(cachePath)) return null;
  try {
    return normalizeSourceListMetadata(JSON.parse(fs.readFileSync(cachePath, "utf8")));
  } catch {
    return null;
  }
}

function uniqueCuratedListSources(sources: Source[]): Source[] {
  return [...new Map(
    sources
      .filter((source) => isCuratedListSource(source) && !shouldSkipDiscoveredUrl(source.url))
      .map((source) => [normalizeUrl(source.url), source])
  ).values()];
}


function shouldPreserveSourceListCacheOnReadmeFailure(status: number | null): boolean {
  return status == null || status === 403 || status === 429 || status >= 500;
}

function sourceNameFromUrl(sourceUrl: string): string {
  const github = parseGitHubUrl(sourceUrl);
  if (github) return github.repo;
  try {
    const parsed = new URL(sourceUrl);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return sourceUrl;
  }
}

export async function resolveCanonicalCatalogUrl(url: string, token?: string): Promise<string> {
  const normalizedUrl = normalizeUrl(url);
  const github = parseGitHubUrl(normalizedUrl);
  if (github) {
    const repoData = await fetchGitHubRepo(github.owner, github.repo, token);
    return normalizeUrl(repoData?.html_url ?? normalizedUrl);
  }
  const resolution = await resolveWebsiteLink(normalizedUrl, token);
  return normalizeUrl(resolution.github_repo_url ?? resolution.canonical_url ?? normalizedUrl);
}

export function buildSourceListDiscoveryCandidates(
  source: Source,
  metadata: SourceListMetadata,
  categories: Category[]
): DiscoveryCandidate[] {
  return metadata.entries
    .map((entry) => ({ entry, matchedCategoryIds: matchSourceListEntryCategoryIds(source, metadata, entry, categories) }))
    .filter(({ entry, matchedCategoryIds }) => !shouldSkipDiscoveredUrl(entry.normalized_url) && (categories.length === 0 || matchedCategoryIds.length > 0))
    .map(({ entry, matchedCategoryIds }) => ({
      target_url: entry.normalized_url,
      source,
      extraction: {
        mode: entry.github_repo_url ? "scraped" : "parsed",
        section_path: entry.section_path.length > 0 ? entry.section_path : ["README"],
        anchor_text: entry.anchor_text,
        extracted_url: entry.extracted_url,
        surrounding_text: entry.surrounding_text,
        confidence: "high",
      },
      ...(entry.canonical_url !== entry.normalized_url ? { canonical_url_hint: entry.canonical_url } : {}),
      ...(matchedCategoryIds.length > 0 ? { matched_category_ids: matchedCategoryIds } : {}),
      ...(entry.canonicalization_cause ? { canonicalization_cause: entry.canonicalization_cause } : {}),
    }));
}

export function shouldRefreshSourceListMetadata(
  metadata: SourceListMetadata | null,
  now: Date = new Date()
): boolean {
  if (!metadata?.fetched_at) return true;
  const fetchedAt = Date.parse(metadata.fetched_at);
  if (Number.isNaN(fetchedAt)) return true;
  return now.getTime() - fetchedAt >= SOURCE_LIST_CACHE_TTL_MS;
}

export async function materializeSourceListMetadata(
  sources: Source[],
  token?: string,
  deadlineMs: number | null = null
): Promise<void> {
  const curatedSources = uniqueCuratedListSources(sources);
  const startedAtMs = Date.now();
  const listHeartbeatPrinter = createProgressHeartbeatPrinter();
  const linkHeartbeatPrinter = createProgressHeartbeatPrinter({ allowFinalZeroTotal: true });
  let handledSources = 0;
  let discoveredLinks = 0;
  let resolvedLinks = 0;

  const pushLinksHeartbeat = (nowMs: number, checkpoint: string | null = null, final = false) => {
    if (discoveredLinks <= 0 && !final) return;
    linkHeartbeatPrinter.push(
      buildProgressHeartbeat({
        phase: "discover:links",
        done: resolvedLinks,
        total: discoveredLinks,
        ok: resolvedLinks,
        startedAtMs,
        nowMs,
        budgetLeftMs: deadlineMs == null ? null : deadlineMs - nowMs,
        checkpoint,
        final,
      })
    );
  };

  for (const source of curatedSources) {
    const sourceName = sourceNameFromUrl(source.url);
    const cached = readSourceListMetadata(source.url);
    const needsRefresh = shouldRefreshSourceListMetadata(cached);

    if (cached && !needsRefresh) {
      discoveredLinks += cached.entries.length;
      resolvedLinks += cached.entries.length;
      pushLinksHeartbeat(Date.now(), sourceName, false);
    }

    if (needsRefresh) {
      const github = parseGitHubUrl(source.url);
      if (github) {
        const [repoData, readmeResult] = await Promise.all([
          fetchGitHubRepo(github.owner, github.repo, token),
          fetchGitHubReadmeResult(github.owner, github.repo, token),
        ]);

        const metadata = finalizeSourceListMetadata(
          cached,
          await buildSourceListMetadata(
            {
              sourceUrl: source.url,
              sourceName,
              fetchedAt: new Date().toISOString(),
              repoDescription: repoData?.description ?? null,
              readme: readmeResult.body ?? "",
              deadlineMs,
              onProgress: (event) => {
                discoveredLinks += event.discoveredDelta;
                resolvedLinks += event.resolvedDelta;
                pushLinksHeartbeat(event.nowMs, event.sourceName, false);
              },
            },
            (url) => resolveSourceListEntryUrl(url, token)
          ),
          { preserveCachedEntries: shouldPreserveSourceListCacheOnReadmeFailure(readmeResult.status) }
        );
        if (metadata) writeSourceListMetadata(metadata);
      }
    }
    handledSources += 1;
    listHeartbeatPrinter.push(
      buildProgressHeartbeat({
        phase: "discover:lists",
        done: handledSources,
        total: curatedSources.length,
        ok: handledSources,
        startedAtMs,
        nowMs: Date.now(),
        budgetLeftMs: deadlineMs == null ? null : deadlineMs - Date.now(),
        checkpoint: source.url,
        final: handledSources >= curatedSources.length,
      })
    );
  }

  pushLinksHeartbeat(Date.now(), null, true);
}

export function loadSourceListDiscoveryCandidates(sources: Source[]): DiscoveryCandidate[] {
  const categories = loadCategories();
  const candidates: DiscoveryCandidate[] = [];

  for (const source of uniqueCuratedListSources(sources)) {
    const metadata = readSourceListMetadata(source.url);
    if (!metadata) continue;
    candidates.push(...buildSourceListDiscoveryCandidates(source, metadata, categories));
  }

  return candidates;
}

export function buildSourceContextLines(
  item: Pick<CatalogItem, "canonical_url">,
  metadataList: Iterable<SourceListMetadata>
): string[] {
  const normalizedItemUrl = normalizeUrl(item.canonical_url);
  const seen = new Set<string>();
  const lines: string[] = [];

  for (const metadata of metadataList) {
    const entry = metadata.entries.find((candidate) => normalizeUrl(candidate.canonical_url) === normalizedItemUrl);
    if (!entry) continue;

    const section = entry.section_path.length > 0 ? ` | section: ${entry.section_path.join(" > ")}` : "";
    const purpose = metadata.purpose ? ` | purpose: ${metadata.purpose}` : "";
    const linkedPage = entry.page_description ?? entry.page_title;
    const page = linkedPage ? ` | linked page: ${linkedPage}` : "";
    const line = `${metadata.source_name}${purpose}${section}${page}`;
    if (seen.has(line)) continue;
    seen.add(line);
    lines.push(line);
  }

  return lines;
}

function listMetadataFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...listMetadataFiles(full));
    } else if (entry.name.endsWith(".json")) {
      out.push(full);
    }
  }
  return out;
}

export function loadSourceContextLinesForItem(item: Pick<CatalogItem, "canonical_url">): string[] {
  const metadataList = listMetadataFiles(SOURCE_LIST_CACHE_DIR)
    .map((filePath) => {
      try {
        return normalizeSourceListMetadata(JSON.parse(fs.readFileSync(filePath, "utf8")));
      } catch {
        return null;
      }
    })
    .filter((metadata): metadata is SourceListMetadata => metadata !== null);

  return buildSourceContextLines(item, metadataList);
}
