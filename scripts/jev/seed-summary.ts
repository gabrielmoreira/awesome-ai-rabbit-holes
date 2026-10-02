/**
 * What an item can say about itself before the categorizer writes its prose.
 *
 * The seed used to read only the item's own data: a repository description, or
 * the index line the project was found on. Items discovered from a bare link —
 * a list entry with no description, a site whose page carries the whole story —
 * had nothing, so they were skipped as "no summary" and never classified at all.
 * The website-link cache already holds the pages the pipeline fetched, with
 * their descriptions and text, so the last fallback reads what was downloaded
 * and thrown away.
 */

export type SeedSummaryItem = {
  name?: string;
  canonical_url?: string;
  metadata?: { github?: { description?: string | null } };
  provenance?: { discoveries?: Array<{ extraction?: { surrounding_text?: string | null } }> };
};

export type SeedPage = {
  title?: string | null;
  description?: string | null;
  excerpt?: string | null;
};

/** Reads a page the pipeline already fetched, or null when it never did. */
export type PageLookup = (url: string) => SeedPage | null;

/** A fetched description shorter than this is a tagline, not a summary. */
const MIN_PAGE_DESCRIPTION = 25;
/** Below this the page text is a menu, not prose the model can classify from. */
const MIN_PAGE_EXCERPT = 60;
/** A page's text is trimmed to this many characters before it becomes a summary. */
const EXCERPT_LIMIT = 300;

/**
 * The order matters: the item's own words beat the index line it was listed on,
 * which beats the page behind it. Only the first two sources are the item's, so
 * a page is read only when the item says nothing — the cache is keyed by URL and
 * a miss costs a cache read.
 *
 * An index line is written for a list, not for the item. It opens with the
 * linked name, often carries a star badge the list renders inline, and reads
 * from that name as the subject of the sentence. None of that is the item's
 * description. The name is stripped only at the start, because a name that
 * appears later in the line is usually part of what the item does.
 */
export function deriveSeedSummary(item: SeedSummaryItem, readPage: PageLookup): string {
  const description = sanitizeText(item.metadata?.github?.description);
  if (description.length >= 15) return description;

  for (const discovery of item.provenance?.discoveries ?? []) {
    const line = cleanIndexLine(discovery.extraction?.surrounding_text);
    if (line.length >= 15) return stripLeadingSelfReference(line, item.name);
  }

  const url = sanitizeText(item.canonical_url);
  if (!url) return "";
  const page = readPage(url);
  if (!page) return "";
  const pageDescription = sanitizeText(page.description);
  if (pageDescription.length >= MIN_PAGE_DESCRIPTION) return pageDescription;
  const excerpt = sanitizeText(page.excerpt);
  if (excerpt.length >= MIN_PAGE_EXCERPT) return excerpt.slice(0, EXCERPT_LIMIT);
  return "";
}

/**
 * An index line opens with the linked name and often a star badge the list
 * renders inline, because the line was written to be read in the list, not as
 * a description of the item. Both are noise here: the star count is the list's
 * own display of data the catalog takes from the GitHub API, and keeping it in
 * the summary publishes a stale number the reader has no way to distinguish
 * from the real one.
 */
export function sanitizeText(text: string | null | undefined): string {
  if (!text) return "";
  return text
    .replace(/[\uD800-\uDFFF]/g, "") // unpaired surrogates
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "") // control chars (keep \t \n \r)
    .trim();
}

/** Strip markdown table/badge/link noise from an index line so it reads as prose. */
export function cleanIndexLine(raw: string | null | undefined): string {
  const text = sanitizeText(raw);
  if (!text) return "";
  // Table-style indexes put the useful description in the longest cell; the
  // other cells hold the name, a star count, a language, and a date.
  const cells = text.split("|").map((cell) => cell.trim()).filter(Boolean);
  const source = cells.length > 1 ? cells.reduce((longest, cell) => (cell.length > longest.length ? cell : longest)) : text;
  return source
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*|`/g, "")
    // A star badge the list renders inline is the list's display of data the
    // catalog takes from the GitHub API; left in the summary it publishes a
    // stale number the reader cannot tell from the real one.
    .replace(/[⭐★☆]\s*[\d.,]+\s*[kKmMbB]?/g, " ")
    .replace(/^\s*[-*]\s*/, "")
    .replace(/[|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * An index line reads from the linked name as the subject of the sentence:
 * "**[Claudette](url)** — Native iOS...". The name is not the item's
 * description, and repeating it makes the rendered page show it twice. Only a
 * leading match is stripped, because a name that appears later in the line is
 * usually part of what the item does.
 */
function stripLeadingSelfReference(line: string, name: string | null | undefined): string {
  if (!name) return line;
  const short = name.includes("/") ? name.split("/").pop() ?? name : name;
  if (!short || short.length < 3) return line;
  const pattern = new RegExp(`^${escapeRegExp(short)}\\s*[:;—–-]?\\s*`, "iu");
  return line.replace(pattern, "").replace(/^[\s—–-]+\s*/, "").trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
