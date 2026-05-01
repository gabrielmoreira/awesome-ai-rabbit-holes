import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { fetchGitHubReadme, fetchGitHubRepo, parseGitHubUrl } from "./github.ts";
import type { CatalogItem, DiscoveryCandidate, Source } from "./types.ts";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_LIST_CACHE_DIR = path.join(REPO_ROOT, ".cache", "source-lists");
export const OWN_REPO_URL = "https://github.com/gabrielmoreira/awesome-ai-rabbit-holes";
export const SOURCE_LIST_CACHE_TTL_MS = 30 * 60 * 1000;
export interface SourceListEntry {
  extracted_url: string;
  normalized_url: string;
  anchor_text: string;
  section_path: string[];
  surrounding_text: string | null;
}

export interface SourceListMetadata {
  source_url: string;
  source_name: string;
  fetched_at: string | null;
  purpose: string | null;
  entries: SourceListEntry[];
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

export function shouldSkipDiscoveredUrl(url: string): boolean {
  return normalizeUrl(url) === normalizeUrl(OWN_REPO_URL);
}

function sanitizePathSegment(value: string): string {
  return value.replace(/[^A-Za-z0-9._-]+/g, "_").replace(/^_+|_+$/g, "") || "item";
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
  return path.join(SOURCE_LIST_CACHE_DIR, "url", `${sanitizePathSegment(normalized)}.json`);
}

function headingText(raw: string): string {
  return raw.trim().replace(/\s+#*$/, "");
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
        anchor_text: anchorText || extractedUrl,
        section_path: [...sectionPath],
        surrounding_text: line.trim() || null,
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

export function buildSourceListMetadata(input: {
  sourceUrl: string;
  sourceName: string;
  fetchedAt?: string | null;
  repoDescription: string | null;
  readme: string;
}): SourceListMetadata {
  return {
    source_url: normalizeUrl(input.sourceUrl),
    source_name: input.sourceName,
    fetched_at: input.fetchedAt ?? null,
    purpose: deriveSourceListPurpose(input.repoDescription, input.readme),
    entries: extractSourceListEntries(input.readme, input.sourceUrl),
  };
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
    return JSON.parse(fs.readFileSync(cachePath, "utf8")) as SourceListMetadata;
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


export function buildSourceListDiscoveryCandidates(
  source: Source,
  metadata: SourceListMetadata
): DiscoveryCandidate[] {
  return metadata.entries
    .filter((entry) => !shouldSkipDiscoveredUrl(entry.normalized_url))
    .map((entry) => ({
      target_url: entry.normalized_url,
      source,
      extraction: {
        mode: "parsed",
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

export async function materializeSourceListMetadata(
  sources: Source[],
  token?: string
): Promise<void> {
  const awesomeSources = uniqueAwesomeListSources(sources);

  await Promise.all(awesomeSources.map(async (source) => {
    const cached = readSourceListMetadata(source.url);
    if (!shouldRefreshSourceListMetadata(cached)) return;

    const github = parseGitHubUrl(source.url);
    if (!github) return;

    const [repoData, readme] = await Promise.all([
      fetchGitHubRepo(github.owner, github.repo, token),
      fetchGitHubReadme(github.owner, github.repo, token),
    ]);

    const metadata = buildSourceListMetadata({
      sourceUrl: source.url,
      sourceName: sourceNameFromUrl(source.url),
      fetchedAt: new Date().toISOString(),
      repoDescription: repoData?.description ?? null,
      readme: readme ?? "",
    });
    writeSourceListMetadata(metadata);
  }));
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
    const entry = metadata.entries.find((candidate) => candidate.normalized_url === normalizedItemUrl);
    if (!entry) continue;

    const section = entry.section_path.length > 0 ? ` | section: ${entry.section_path.join(" > ")}` : "";
    const purpose = metadata.purpose ? ` | purpose: ${metadata.purpose}` : "";
    const line = `${metadata.source_name}${purpose}${section}`;
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
        return JSON.parse(fs.readFileSync(filePath, "utf8")) as SourceListMetadata;
      } catch {
        return null;
      }
    })
    .filter((metadata): metadata is SourceListMetadata => metadata !== null);

  return buildSourceContextLines(item, metadataList);
}
