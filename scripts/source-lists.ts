import * as fs from "node:fs";
import * as path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { mapWithConcurrency } from "./async.ts";
import { fetchGitHubReadmeResult, fetchGitHubRepo, parseGitHubUrl } from "./github.ts";
import { buildProgressHeartbeat, shouldEmitProgressHeartbeat } from "./progress.ts";
import type { CatalogItem, DiscoveryCandidate, Source } from "./types.ts";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_LIST_CACHE_DIR = path.join(REPO_ROOT, ".cache", "source-lists");
const WEBSITE_LINK_CACHE_DIR = path.join(REPO_ROOT, ".cache", "linked-sites");
const WEBSITE_LINK_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const DEFAULT_SOURCE_LIST_REFRESH_CONCURRENCY = 2;
const WEBSITE_LINK_RESOLUTION_CONCURRENCY = 8;
const WEBSITE_TEXT_EXCERPT_MAX_CHARS = 1200;
const HTML_FETCH_TIMEOUT_MS = 10_000;
const LINKED_SITE_HEARTBEAT_EVERY = 50;
const GENERIC_GITHUB_REPO_TOKENS = new Set([
  "docs",
  "doc",
  "documentation",
  "website",
  "site",
  "homepage",
  "home",
  "blog",
]);

export const OWN_REPO_URL = "https://github.com/gabrielmoreira/awesome-ai-rabbit-holes";
export const SOURCE_LIST_CACHE_TTL_MS = 30 * 60 * 1000;

export type WebsiteLinkResolution = {
  fetched_at: string | null;
  final_url: string;
  canonical_url: string;
  github_repo_url: string | null;
  title: string | null;
  description: string | null;
  excerpt: string | null;
};

export type SourceListEntry = {
  extracted_url: string;
  normalized_url: string;
  canonical_url: string;
  anchor_text: string;
  section_path: string[];
  surrounding_text: string | null;
  page_title: string | null;
  page_description: string | null;
  page_excerpt: string | null;
  github_repo_url: string | null;
};

export type SourceListMetadata = {
  source_url: string;
  source_name: string;
  fetched_at: string | null;
  purpose: string | null;
  entries: SourceListEntry[];
};

function normalizeSourceListEntry(raw: any): SourceListEntry {
  const normalizedUrl = normalizeUrl(raw?.normalized_url ?? raw?.extracted_url ?? "");
  const canonicalUrl = normalizeUrl(raw?.canonical_url ?? normalizedUrl);
  return {
    extracted_url: raw?.extracted_url ?? normalizedUrl,
    normalized_url: normalizedUrl,
    canonical_url: canonicalUrl,
    anchor_text: raw?.anchor_text ?? normalizedUrl,
    section_path: Array.isArray(raw?.section_path) ? raw.section_path : [],
    surrounding_text: raw?.surrounding_text ?? null,
    page_title: raw?.page_title ?? null,
    page_description: raw?.page_description ?? null,
    page_excerpt: raw?.page_excerpt ?? null,
    github_repo_url: raw?.github_repo_url ? normalizeUrl(raw.github_repo_url) : null,
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

function normalizeUrl(url: string): string {
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

function normalizeOptionalUrl(url: string | null | undefined, baseUrl?: string): string | null {
  if (!url || url.trim().length === 0) return null;
  try {
    const resolved = baseUrl ? new URL(url, baseUrl) : new URL(url);
    return normalizeUrl(resolved.toString());
  } catch {
    return null;
  }
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

function websiteLinkResolutionPath(url: string): string {
  const normalized = normalizeUrl(url);
  return path.join(WEBSITE_LINK_CACHE_DIR, `${cacheFileNameForUrl(normalized)}.json`);
}

function headingText(raw: string): string {
  return raw.trim().replace(/\s+#*$/, "");
}

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&#x27;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function normalizeText(value: string | null | undefined): string | null {
  if (!value) return null;
  const decoded = decodeHtmlEntities(value);
  const collapsed = decoded.replace(/\s+/g, " ").trim();
  return collapsed.length > 0 ? collapsed : null;
}

function truncateText(value: string, maxChars: number): string {
  if (value.length <= maxChars) return value;
  const sliced = value.slice(0, maxChars);
  const boundary = Math.max(sliced.lastIndexOf(" "), sliced.lastIndexOf("\n"));
  return (boundary >= Math.floor(maxChars * 0.6) ? sliced.slice(0, boundary) : sliced).trimEnd();
}

function extractTagAttribute(tag: string, attribute: string): string | null {
  const match = tag.match(new RegExp(`${attribute}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'>]+))`, "i"));
  if (!match) return null;
  return match[1] ?? match[2] ?? match[3] ?? null;
}

function extractMetaContent(html: string, attribute: "name" | "property", value: string): string | null {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  for (const tag of tags) {
    const attrValue = extractTagAttribute(tag, attribute);
    if (!attrValue || attrValue.toLowerCase() !== value.toLowerCase()) continue;
    const content = extractTagAttribute(tag, "content");
    if (!content) continue;
    return normalizeText(content);
  }
  return null;
}

function extractLinkHrefByRel(html: string, relToken: string): string | null {
  const tags = html.match(/<link\b[^>]*>/gi) ?? [];
  for (const tag of tags) {
    const rel = extractTagAttribute(tag, "rel");
    if (!rel) continue;
    const tokens = rel.toLowerCase().split(/\s+/).filter(Boolean);
    if (!tokens.includes(relToken.toLowerCase())) continue;
    const href = extractTagAttribute(tag, "href");
    if (!href) continue;
    return href;
  }
  return null;
}

function extractTitle(html: string): string | null {
  const match = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  return normalizeText(match?.[1] ?? null);
}

function stripHtmlToTextExcerpt(html: string): string | null {
  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  const source = bodyMatch?.[1] ?? html;
  const withoutHidden = source
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, " ")
    .replace(/<img\b[^>]*>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  const text = normalizeText(withoutHidden);
  if (!text) return null;
  return truncateText(text, WEBSITE_TEXT_EXCERPT_MAX_CHARS);
}

function tokenizeIdentity(value: string | null | undefined): string[] {
  if (!value) return [];
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/i)
    .filter((token) => token.length >= 3 || /\d/.test(token));
}

function collectIdentityHintTokens(hints: string[]): Set<string> {
  return new Set(hints.flatMap((hint) => tokenizeIdentity(hint)));
}

export function chooseRelevantGitHubRepoCandidate(
  candidates: Array<{ url: string; score: number }>,
  hints: string[]
): string | null {
  const hintTokens = collectIdentityHintTokens(hints);

  for (const candidate of candidates) {
    if (candidate.score < 40) continue;

    const parsed = parseGitHubUrl(candidate.url);
    if (!parsed) continue;

    const repoTokens = tokenizeIdentity(parsed.repo);
    const ownerTokens = tokenizeIdentity(parsed.owner);
    if (repoTokens.length === 0) continue;
    if (repoTokens.length === 1 && GENERIC_GITHUB_REPO_TOKENS.has(repoTokens[0])) continue;

    const sharedRepoTokens = repoTokens.filter((token) => hintTokens.has(token)).length;
    const sharedOwnerTokens = ownerTokens.filter((token) => hintTokens.has(token)).length;

    if (repoTokens.length === 1) {
      if (sharedRepoTokens >= 1) return normalizeUrl(candidate.url);
      continue;
    }

    if (sharedRepoTokens >= 2) return normalizeUrl(candidate.url);
    if (sharedRepoTokens >= 1 && sharedOwnerTokens >= 1) return normalizeUrl(candidate.url);
  }

  return null;
}

function githubCandidateScore(url: string, label: string): number {
  let score = 0;
  const lower = label.toLowerCase();
  if (lower.includes("github")) score += 100;
  if (lower.includes("source")) score += 40;
  if (lower.includes("repo")) score += 25;
  if (lower.includes("code")) score += 15;
  if (lower.includes("star") || lower.includes("fork")) score += 5;

  const parsed = parseGitHubUrl(url);
  if (!parsed) return score;
  const pathMatch = url.match(/^https?:\/\/github\.com\/[^/]+\/[^/]+$/i);
  if (pathMatch) score += 10;
  return score;
}

function collectGitHubRepoLinkCandidates(
  html: string,
  baseUrl: string
): Array<{ url: string; score: number }> {
  const candidates = new Map<string, number>();
  const anchorTags = html.match(/<a\b[^>]*>[\s\S]*?<\/a>/gi) ?? [];

  for (const tag of anchorTags) {
    const href = extractTagAttribute(tag, "href");
    const resolvedHref = normalizeOptionalUrl(href, baseUrl);
    if (!resolvedHref || !parseGitHubUrl(resolvedHref)) continue;

    const innerText = normalizeText(tag.replace(/<[^>]+>/g, " ")) ?? "";
    const label = [
      innerText,
      extractTagAttribute(tag, "title") ?? "",
      extractTagAttribute(tag, "aria-label") ?? "",
      extractTagAttribute(tag, "rel") ?? "",
      extractTagAttribute(tag, "class") ?? "",
    ].join(" ");

    const score = githubCandidateScore(resolvedHref, label);
    const previous = candidates.get(resolvedHref) ?? Number.NEGATIVE_INFINITY;
    if (score > previous) candidates.set(resolvedHref, score);
  }

  return [...candidates.entries()]
    .map(([url, score]) => ({ url, score }))
    .sort((a, b) => b.score - a.score || a.url.localeCompare(b.url));
}

async function selectBestGitHubRepoUrl(
  candidates: Array<{ url: string; score: number }>,
  hints: string[],
  token?: string
): Promise<string | null> {
  const chosenUrl = chooseRelevantGitHubRepoCandidate(candidates, hints);
  if (!chosenUrl) return null;

  const parsed = parseGitHubUrl(chosenUrl);
  if (!parsed) return null;

  const repo = await fetchGitHubRepo(parsed.owner, parsed.repo, token);
  return repo ? normalizeUrl(chosenUrl) : null;
}

function fallbackWebsiteLinkResolution(url: string, fetchedAt: string | null = null): WebsiteLinkResolution {
  const normalized = normalizeUrl(url);
  return {
    fetched_at: fetchedAt,
    final_url: normalized,
    canonical_url: normalized,
    github_repo_url: null,
    title: null,
    description: null,
    excerpt: null,
  };
}

function shouldRefreshWebsiteLinkResolution(
  resolution: WebsiteLinkResolution | null,
  now: Date = new Date()
): boolean {
  if (!resolution?.fetched_at) return true;
  const fetchedAt = Date.parse(resolution.fetched_at);
  if (Number.isNaN(fetchedAt)) return true;
  return now.getTime() - fetchedAt >= WEBSITE_LINK_CACHE_TTL_MS;
}

function writeWebsiteLinkResolution(resolution: WebsiteLinkResolution, sourceUrl: string): void {
  const payload = JSON.stringify(resolution, null, 2) + "\n";
  const outPath = websiteLinkResolutionPath(sourceUrl);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, payload, "utf8");

  const canonicalPath = websiteLinkResolutionPath(resolution.canonical_url);
  if (canonicalPath !== outPath) {
    fs.mkdirSync(path.dirname(canonicalPath), { recursive: true });
    fs.writeFileSync(canonicalPath, payload, "utf8");
  }
}

export function readWebsiteLinkResolution(url: string): WebsiteLinkResolution | null {
  const cachePath = websiteLinkResolutionPath(url);
  if (!fs.existsSync(cachePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(cachePath, "utf8")) as WebsiteLinkResolution;
  } catch {
    return null;
  }
}

export async function resolveWebsiteLink(url: string, token?: string): Promise<WebsiteLinkResolution> {
  const normalizedUrl = normalizeUrl(url);
  const cached = readWebsiteLinkResolution(normalizedUrl);
  if (!shouldRefreshWebsiteLinkResolution(cached)) {
    return cached!;
  }

  const fetchedAt = new Date().toISOString();
  try {
    const response = await fetch(normalizedUrl, {
      headers: { Accept: "text/html,application/xhtml+xml;q=0.9,text/plain;q=0.8" },
      signal: AbortSignal.timeout(HTML_FETCH_TIMEOUT_MS),
    });
    if (!response.ok) {
      const fallback = fallbackWebsiteLinkResolution(normalizedUrl, fetchedAt);
      writeWebsiteLinkResolution(fallback, normalizedUrl);
      return fallback;
    }

    const finalUrl = normalizeUrl(response.url || normalizedUrl);
    const html = await response.text();
    const canonicalHref = extractLinkHrefByRel(html, "canonical");
    const ogUrl = extractMetaContent(html, "property", "og:url");
    const pageCanonicalUrl =
      normalizeOptionalUrl(canonicalHref, finalUrl) ??
      normalizeOptionalUrl(ogUrl, finalUrl) ??
      finalUrl;

    const title =
      extractMetaContent(html, "property", "og:title") ??
      extractMetaContent(html, "name", "twitter:title") ??
      extractTitle(html);
    const description =
      extractMetaContent(html, "property", "og:description") ??
      extractMetaContent(html, "name", "description") ??
      extractMetaContent(html, "name", "twitter:description");
    const excerpt = stripHtmlToTextExcerpt(html);

    const githubCandidates: Array<{ url: string; score: number }> = [];
    if (parseGitHubUrl(pageCanonicalUrl)) {
      githubCandidates.push({ url: pageCanonicalUrl, score: 200 });
    }
    githubCandidates.push(...collectGitHubRepoLinkCandidates(html, finalUrl));
    const githubRepoUrl = await selectBestGitHubRepoUrl(
      githubCandidates,
      [finalUrl, pageCanonicalUrl, title ?? ""],
      token
    );

    const resolution: WebsiteLinkResolution = {
      fetched_at: fetchedAt,
      final_url: finalUrl,
      canonical_url: githubRepoUrl ?? pageCanonicalUrl,
      github_repo_url: githubRepoUrl,
      title,
      description,
      excerpt,
    };
    writeWebsiteLinkResolution(resolution, normalizedUrl);
    return resolution;
  } catch {
    const fallback = fallbackWebsiteLinkResolution(normalizedUrl, fetchedAt);
    writeWebsiteLinkResolution(fallback, normalizedUrl);
    return fallback;
  }
}


export function extractSourceListEntries(readme: string, sourceUrl: string): SourceListEntry[] {
  const lines = readme.split(/\r?\n/);
  const sectionPath: string[] = [];
  const seen = new Set<string>();
  const entries: SourceListEntry[] = [];

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+(.*\S)\s*$/);
    if (headingMatch) {
      const depth = headingMatch[1].length;
      const text = headingText(headingMatch[2]);
      if (depth === 1) {
        sectionPath.length = 0;
      } else {
        sectionPath.length = Math.max(0, depth - 2);
        sectionPath[depth - 2] = text;
      }
      continue;
    }

    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
    let match: RegExpExecArray | null;
    while ((match = linkRegex.exec(line)) !== null) {
      const anchorText = match[1].trim();
      if (anchorText.startsWith("!")) continue;

      try {
        const parsed = new URL(match[2]);
        if (parsed.hostname === "img.shields.io") continue;
      } catch {
        // ignore parse failures here; normalizeUrl will keep the raw string
      }

      const extractedUrl = normalizeUrl(match[2]);
      if (extractedUrl === normalizeUrl(sourceUrl)) continue;
      if (shouldSkipDiscoveredUrl(extractedUrl)) continue;
      if (seen.has(extractedUrl)) continue;
      seen.add(extractedUrl);
      entries.push({
        extracted_url: extractedUrl,
        normalized_url: extractedUrl,
        canonical_url: extractedUrl,
        anchor_text: anchorText || extractedUrl,
        section_path: [...sectionPath],
        surrounding_text: line.trim() || null,
        page_title: null,
        page_description: null,
        page_excerpt: null,
        github_repo_url: null,
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

export async function buildSourceListMetadata(
  input: {
    sourceUrl: string;
    sourceName: string;
    fetchedAt?: string | null;
    repoDescription: string | null;
    readme: string;
  },
  resolveLinkedSite: (url: string) => Promise<WebsiteLinkResolution> = (url) => resolveWebsiteLink(url)
): Promise<SourceListMetadata> {
  const extractedEntries = extractSourceListEntries(input.readme, input.sourceUrl);
  const resolutionStartedAtMs = Date.now();
  let resolvedEntries = 0;
  const entries = await mapWithConcurrency(
    extractedEntries,
    WEBSITE_LINK_RESOLUTION_CONCURRENCY,
    async (entry) => {
      const resolved = parseGitHubUrl(entry.normalized_url)
        ? entry
        : (() => resolveLinkedSite(entry.normalized_url))().then((resolution) => ({
            ...entry,
            canonical_url: normalizeUrl(resolution.github_repo_url ?? resolution.canonical_url ?? entry.normalized_url),
            page_title: resolution.title ?? null,
            page_description: resolution.description ?? null,
            page_excerpt: resolution.excerpt ?? null,
            github_repo_url: resolution.github_repo_url ? normalizeUrl(resolution.github_repo_url) : null,
          } satisfies SourceListEntry));

      const finalEntry = await resolved;
      resolvedEntries += 1;
      if (shouldEmitProgressHeartbeat(resolvedEntries, extractedEntries.length, LINKED_SITE_HEARTBEAT_EVERY)) {
        console.log(
          buildProgressHeartbeat({
            label: `${input.sourceName} / linked sites`,
            completed: resolvedEntries,
            total: extractedEntries.length,
            startedAtMs: resolutionStartedAtMs,
          })
        );
      }
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
): SourceListMetadata {
  if (options.preserveCachedEntries && cached && cached.entries.length > 0) {
    return { ...cached, fetched_at: refreshed.fetched_at ?? cached.fetched_at };
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

function uniqueAwesomeListSources(sources: Source[]): Source[] {
  return [...new Map(
    sources
      .filter((source) => source.kind === "awesome-list" && !shouldSkipDiscoveredUrl(source.url))
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
  if (parseGitHubUrl(normalizedUrl)) return normalizedUrl;
  const resolution = await resolveWebsiteLink(normalizedUrl, token);
  return normalizeUrl(resolution.github_repo_url ?? resolution.canonical_url ?? normalizedUrl);
}

export function buildSourceListDiscoveryCandidates(
  source: Source,
  metadata: SourceListMetadata
): DiscoveryCandidate[] {
  return metadata.entries
    .filter((entry) => !shouldSkipDiscoveredUrl(entry.canonical_url))
    .map((entry) => ({
      target_url: entry.canonical_url,
      source,
      extraction: {
        mode: entry.github_repo_url ? "scraped" : "parsed",
        section_path: entry.section_path.length > 0 ? entry.section_path : ["README"],
        anchor_text: entry.anchor_text,
        extracted_url: entry.extracted_url,
        surrounding_text: entry.surrounding_text,
        confidence: "high",
      },
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

export function resolveSourceListRefreshConcurrency(
  env: NodeJS.ProcessEnv = process.env
): number {
  const raw = env["CATALOG_SOURCE_LIST_CONCURRENCY"]?.trim();
  if (!raw) return DEFAULT_SOURCE_LIST_REFRESH_CONCURRENCY;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return DEFAULT_SOURCE_LIST_REFRESH_CONCURRENCY;
  return parsed;
}
export async function materializeSourceListMetadata(
  sources: Source[],
  token?: string
): Promise<void> {
  const awesomeSources = uniqueAwesomeListSources(sources);
  const staleSources = awesomeSources.filter((source) => {
    const cached = readSourceListMetadata(source.url);
    return shouldRefreshSourceListMetadata(cached);
  });

  await mapWithConcurrency(
    staleSources,
    resolveSourceListRefreshConcurrency(),
    async (source) => {
      const cached = readSourceListMetadata(source.url);
      const github = parseGitHubUrl(source.url);
      if (!github) return;

      const [repoData, readmeResult] = await Promise.all([
        fetchGitHubRepo(github.owner, github.repo, token),
        fetchGitHubReadmeResult(github.owner, github.repo, token),
      ]);

      const metadata = finalizeSourceListMetadata(
        cached,
        await buildSourceListMetadata(
          {
            sourceUrl: source.url,
            sourceName: sourceNameFromUrl(source.url),
            fetchedAt: new Date().toISOString(),
            repoDescription: repoData?.description ?? null,
            readme: readmeResult.body ?? "",
          },
          (url) => resolveWebsiteLink(url, token)
        ),
        { preserveCachedEntries: shouldPreserveSourceListCacheOnReadmeFailure(readmeResult.status) }
      );
      writeSourceListMetadata(metadata);
    }
  );
}

export function loadSourceListDiscoveryCandidates(sources: Source[]): DiscoveryCandidate[] {
  const candidates: DiscoveryCandidate[] = [];

  for (const source of uniqueAwesomeListSources(sources)) {
    const metadata = readSourceListMetadata(source.url);
    if (!metadata) continue;
    candidates.push(...buildSourceListDiscoveryCandidates(source, metadata));
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
