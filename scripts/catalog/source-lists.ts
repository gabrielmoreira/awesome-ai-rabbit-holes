import * as fs from "node:fs";
import * as path from "node:path";
import { createHash } from "node:crypto";
import { mapWithConcurrency } from "../support/async.ts";
import { fetchGitHubReadmeResult, fetchGitHubRepo, parseGitHubUrl, verifyGitHubRepo } from "../support/github.ts";
import {
  SOURCE_LIST_CACHE_DIR,
  WEBSITE_LINK_CACHE_DIR,
} from "../support/paths.ts";
import { buildProgressHeartbeat, shouldEmitProgressHeartbeat } from "../support/progress.ts";
import { loadCategories } from "./data.ts";
import { isCuratedListSource, isLowSignalCatalogUrl } from "./core.ts";
import type { CatalogItem, Category, DiscoveryCandidate, Source } from "./types.ts";

const WEBSITE_LINK_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const WEBSITE_LINK_RESOLUTION_CONCURRENCY = 8;
const WEBSITE_TEXT_EXCERPT_MAX_CHARS = 24_000;
const WEBSITE_TEXT_EXCERPT_MAX_LINES = 400;

const WEBSITE_RESPONSE_MAX_BYTES = 1_000_000;
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

export interface WebsiteLinkResolution {
  fetched_at: string | null;
  final_url: string;
  canonical_url: string;
  github_repo_url: string | null;
  canonicalization_cause?: { type: string; message: string } | null;
  title: string | null;
  description: string | null;
  excerpt: string | null;
}

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

function isSupportedWebsiteContentType(contentType: string | null): boolean {
  if (!contentType) return true;
  return /text\/html|application\/xhtml\+xml|text\/plain/i.test(contentType);
}

async function readResponseTextCapped(response: Response): Promise<string | null> {
  const contentLength = Number.parseInt(response.headers.get("content-length") ?? "", 10);
  if (Number.isFinite(contentLength) && contentLength > WEBSITE_RESPONSE_MAX_BYTES) return null;
  const body = Buffer.from(await response.arrayBuffer());
  if (body.byteLength > WEBSITE_RESPONSE_MAX_BYTES) return null;
  return body.toString("utf8");
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

export function stripHtmlToTextExcerpt(html: string): string | null {
  const bodyMatch = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  const source = bodyMatch?.[1] ?? html;
  const withoutHidden = source
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, " ")
    .replace(/<img\b[^>]*>/gi, " ")
    .replace(/<\/(?:p|div|section|article|li|ul|ol|h[1-6]|blockquote|pre|tr)>/gi, "\n")
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<[^>]+>/g, " ");
  const lines = withoutHidden
    .split(/\r?\n/)
    .map((line) => normalizeText(line))
    .filter((line): line is string => Boolean(line));
  if (lines.length === 0) return null;
  return truncateText(lines.slice(0, WEBSITE_TEXT_EXCERPT_MAX_LINES).join("\n"), WEBSITE_TEXT_EXCERPT_MAX_CHARS);
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
  const remaining = [...candidates];
  while (remaining.length > 0) {
    const chosenUrl = chooseRelevantGitHubRepoCandidate(remaining, hints);
    if (!chosenUrl) return null;

    const parsed = parseGitHubUrl(chosenUrl);
    if (!parsed) return null;

    const verification = await verifyGitHubRepo(parsed.owner, parsed.repo, token);
    if (verification !== "missing") return normalizeUrl(chosenUrl);

    const normalizedChosenUrl = normalizeUrl(chosenUrl);
    const next = remaining.filter((candidate) => normalizeUrl(candidate.url) !== normalizedChosenUrl);
    if (next.length === remaining.length) return null;
    remaining.splice(0, remaining.length, ...next);
  }
  return null;
}

function buildCanonicalizationCause(input: {
  githubCandidateCount: number;
  githubRepoUrl: string | null;
  pageCanonicalUrl: string;
}): { type: string; message: string } | null {
  if (input.githubRepoUrl) return null;
  if (parseGitHubUrl(input.pageCanonicalUrl)) return null;
  if (input.githubCandidateCount <= 1) return null;
  return {
    type: "ambiguous_canonicalization",
    message: "Kept the website URL because multiple GitHub repository links were present and no confident canonical match could be selected.",
  };
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
      if (cached) return cached;
      const fallback = fallbackWebsiteLinkResolution(normalizedUrl);
      writeWebsiteLinkResolution(fallback, normalizedUrl);
      return fallback;
    }

    const contentType = response.headers.get("content-type");
    const html = await readResponseTextCapped(response);
    if (!isSupportedWebsiteContentType(contentType) || html == null) {
      if (cached) return cached;
      const fallback = fallbackWebsiteLinkResolution(normalizedUrl);
      writeWebsiteLinkResolution(fallback, normalizedUrl);
      return fallback;
    }

    const finalUrl = normalizeUrl(response.url || normalizedUrl);
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

    const canonicalizationCause = buildCanonicalizationCause({
      githubCandidateCount: githubCandidates.length,
      githubRepoUrl,
      pageCanonicalUrl,
    });

    const resolution: WebsiteLinkResolution = {
      fetched_at: fetchedAt,
      final_url: finalUrl,
      canonical_url: githubRepoUrl ?? pageCanonicalUrl,
      github_repo_url: githubRepoUrl,
      ...(canonicalizationCause ? { canonicalization_cause: canonicalizationCause } : {}),
      title,
      description,
      excerpt,
    };
    writeWebsiteLinkResolution(resolution, normalizedUrl);
    return resolution;
  } catch {
    if (cached) return cached;
    const fallback = fallbackWebsiteLinkResolution(normalizedUrl);
    writeWebsiteLinkResolution(fallback, normalizedUrl);
    return fallback;
  }
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
            github_repo_url: resolution.github_repo_url ? normalizeUrl(resolution.github_repo_url) : null,
            ...(resolution.canonicalization_cause ? { canonicalization_cause: resolution.canonicalization_cause } : {}),
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
  if (parseGitHubUrl(normalizedUrl)) return normalizedUrl;
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
  token?: string
): Promise<void> {
  const curatedSources = uniqueCuratedListSources(sources);

  for (const source of curatedSources) {
    const cached = readSourceListMetadata(source.url);
    if (!shouldRefreshSourceListMetadata(cached)) continue;

    const github = parseGitHubUrl(source.url);
    if (!github) continue;

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
    if (!metadata) continue;
    writeSourceListMetadata(metadata);
  }
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
