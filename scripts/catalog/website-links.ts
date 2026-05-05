import * as fs from "node:fs";
import * as path from "node:path";
import { createHash } from "node:crypto";
import { lookupGitHubRepo, parseGitHubUrl } from "../support/github.ts";
import { WEBSITE_LINK_CACHE_DIR } from "../support/paths.ts";
import { normalizeCatalogUrl } from "./core.ts";

const WEBSITE_LINK_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const WEBSITE_TEXT_EXCERPT_MAX_CHARS = 24_000;
const WEBSITE_TEXT_EXCERPT_MAX_LINES = 400;
const WEBSITE_RESPONSE_MAX_BYTES = 1_000_000;
const HTML_FETCH_TIMEOUT_MS = 10_000;
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

function sanitizePathSegment(value: string): string {
  return value.replace(/[^A-Za-z0-9._-]+/g, "_").replace(/^_+|_+$/g, "") || "item";
}

function cacheFileNameForUrl(url: string): string {
  const safePrefix = sanitizePathSegment(url).slice(0, 80) || "item";
  const hash = createHash("sha1").update(url).digest("hex").slice(0, 12);
  return `${safePrefix}-${hash}`;
}

function websiteLinkResolutionPath(url: string): string {
  const normalized = normalizeCatalogUrl(url);
  return path.join(WEBSITE_LINK_CACHE_DIR, `${cacheFileNameForUrl(normalized)}.json`);
}

function normalizeOptionalUrl(url: string | null | undefined, baseUrl?: string): string | null {
  if (!url || url.trim().length === 0) return null;
  try {
    const resolved = baseUrl ? new URL(url, baseUrl) : new URL(url);
    return normalizeCatalogUrl(resolved.toString());
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
  hints: string[],
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
      if (sharedRepoTokens >= 1) return normalizeCatalogUrl(candidate.url);
      continue;
    }

    if (sharedRepoTokens >= 2) return normalizeCatalogUrl(candidate.url);
    if (sharedRepoTokens >= 1 && sharedOwnerTokens >= 1) return normalizeCatalogUrl(candidate.url);
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
  baseUrl: string,
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

export async function resolveBestGitHubRepoUrl(
  candidates: Array<{ url: string; score: number }>,
  hints: string[],
  token?: string,
): Promise<string | null> {
  const remaining = [...candidates];
  while (remaining.length > 0) {
    const chosenUrl = chooseRelevantGitHubRepoCandidate(remaining, hints);
    if (!chosenUrl) return null;

    const parsed = parseGitHubUrl(chosenUrl);
    if (!parsed) return null;

    const lookup = await lookupGitHubRepo(parsed.owner, parsed.repo, token);
    if (lookup.status === "exists") return normalizeCatalogUrl(lookup.data.html_url);
    if (lookup.status === "unknown") return normalizeCatalogUrl(chosenUrl);

    const normalizedChosenUrl = normalizeCatalogUrl(chosenUrl);
    const next = remaining.filter((candidate) => normalizeCatalogUrl(candidate.url) !== normalizedChosenUrl);
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
  const normalized = normalizeCatalogUrl(url);
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
  now: Date = new Date(),
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
  const normalizedUrl = normalizeCatalogUrl(url);
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

    const finalUrl = normalizeCatalogUrl(response.url || normalizedUrl);
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
    const githubRepoUrl = await resolveBestGitHubRepoUrl(
      githubCandidates,
      [finalUrl, pageCanonicalUrl, title ?? ""],
      token,
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
