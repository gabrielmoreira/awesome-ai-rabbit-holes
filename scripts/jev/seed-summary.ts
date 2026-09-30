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
 */
export function deriveSeedSummary(item: SeedSummaryItem, readPage: PageLookup): string {
  const description = sanitizeText(item.metadata?.github?.description);
  if (description.length >= 15) return description;

  for (const discovery of item.provenance?.discoveries ?? []) {
    const line = cleanIndexLine(discovery.extraction?.surrounding_text);
    if (line.length >= 15) return line;
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
    .replace(/^\s*[-*]\s*/, "")
    .replace(/[|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
