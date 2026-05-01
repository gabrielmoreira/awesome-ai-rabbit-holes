import { runCategorize } from "./categorize.ts";
import { loadCatalogItems } from "./data.ts"
import { runDiscover } from "./discover.ts";
import { runRender } from "./render.ts";
import { runStars } from "./stars.ts";
import { runValidate } from "./validate.ts";
import type { CatalogItem } from "./types.ts"

type ResyncSelection = {
  ids: string[];
  urls: string[];
  match: string[];
  statuses: string[];
  wheres: string[];
  actions: { discover: boolean; stars: boolean; categorize: boolean };
};

export type ResyncDeps = {
  loadItems: () => CatalogItem[];
  runDiscover: (token?: string, options?: { sourceUrls?: Set<string> }) => Promise<void>;
  runStars: (token?: string, options?: { itemIds?: Set<string>; force?: boolean }) => Promise<void>;
  runCategorize: (token?: string, options?: { itemIds?: Set<string>; force?: boolean }) => Promise<void>;
  runRender: () => Promise<void> | void;
  runValidate: () => Promise<void> | void;
};


function normalizeSelectionValue(value: string | undefined): string {
  const trimmed = (value ?? "").trim();
  if (trimmed.length >= 2) {
    const first = trimmed[0];
    const last = trimmed[trimmed.length - 1];
    if ((first === '"' && last === '"') || (first === "'" && last === "'")) {
      return trimmed.slice(1, -1);
    }
  }
  return trimmed;
}


function readSelectorValue(argv: string[], index: number, flag: string): string {
  const value = argv[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`Missing value for ${flag}`);
  }
  return normalizeSelectionValue(value);
}

function parseSelection(argv: string[]): ResyncSelection {
  const selection: ResyncSelection = {
    ids: [],
    urls: [],
    match: [],
    statuses: [],
    wheres: [],
    actions: { discover: false, stars: false, categorize: false },
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--id") selection.ids.push(readSelectorValue(argv, index++, "--id"));
    else if (arg === "--url") selection.urls.push(readSelectorValue(argv, index++, "--url"));
    else if (arg === "--match") selection.match.push(readSelectorValue(argv, index++, "--match"));
    else if (arg === "--status") selection.statuses.push(readSelectorValue(argv, index++, "--status"));
    else if (arg === "--where") selection.wheres.push(readSelectorValue(argv, index++, "--where"));
    else if (arg === "--discover") selection.actions.discover = true;
    else if (arg === "--stars") selection.actions.stars = true;
    else if (arg === "--categorize") selection.actions.categorize = true;
    else throw new Error(`Unknown resync argument: ${arg}`);
  }

  return selection;
}

function hasSelector(selection: ResyncSelection): boolean {
  return Boolean(
    selection.ids.length || selection.urls.length || selection.match.length || selection.statuses.length || selection.wheres.length,
  );
}

function getByPath(value: unknown, pathExpression: string): unknown {
  return pathExpression.split(".").reduce<unknown>((current, segment) => {
    if (current && typeof current === "object" && segment in (current as Record<string, unknown>)) {
      return (current as Record<string, unknown>)[segment];
    }
    return undefined;
  }, value);
}

function matchesText(item: CatalogItem, patterns: string[]): boolean {
  if (patterns.length === 0) return true;
  const haystacks = [item.id, item.name, item.canonical_url, item.identity.github_repo ?? ""];
  return patterns.some((pattern) => {
    try {
      const regex = new RegExp(pattern, "i");
      return haystacks.some((haystack) => regex.test(haystack));
    } catch {
      const lowered = pattern.toLowerCase();
      return haystacks.some((haystack) => haystack.toLowerCase().includes(lowered));
    }
  });
}

function matchesStatus(item: CatalogItem, statuses: string[]): boolean {
  if (statuses.length === 0) return true;
  return statuses.some((status) => {
    if (["included", "excluded", "pending"].includes(status)) {
      return item.curation.status === status;
    }
    return Object.values(item.processing ?? {}).some((state) => state != null && state.status === status);
  });
}

function matchesWhere(item: CatalogItem, wheres: string[]): boolean {
  if (wheres.length === 0) return true;
  return wheres.every((clause) => {
    const [pathExpression, expected] = clause.split("=", 2);
    if (!pathExpression || expected === undefined) return false;
    const actual = getByPath(item, pathExpression);
    return String(actual ?? "") === expected;
  });
}

export function selectResyncItems(items: CatalogItem[], selection: ResyncSelection): CatalogItem[] {
  return items.filter((item) => {
    if (selection.ids.length > 0 && !selection.ids.includes(item.id)) return false;
    if (selection.urls.length > 0 && !selection.urls.includes(item.canonical_url)) return false;
    if (!matchesText(item, selection.match)) return false;
    if (!matchesStatus(item, selection.statuses)) return false;
    if (!matchesWhere(item, selection.wheres)) return false;
    return true;
  });
}


function discoverSourceUrlsForItems(_selection: ResyncSelection, items: CatalogItem[]): Set<string> {
  return new Set(
    items.flatMap((item) => {
      const provenanceUrls = item.provenance.discoveries
        .map((discovery) => discovery.source.url)
        .filter((value): value is string => typeof value === "string" && value.trim().length > 0);
      return provenanceUrls.length > 0 ? provenanceUrls : [item.canonical_url];
    }),
  );
}


function followUpItemIdsAfterDiscover(originalItems: CatalogItem[], refreshedItems: CatalogItem[]): Set<string> {
  const originalIds = new Set(originalItems.map((item) => item.id));
  const originalCanonicalUrls = new Set(originalItems.map((item) => item.canonical_url));
  const originalExtractedUrls = new Set(
    originalItems.flatMap((item) => item.provenance.discoveries.map((discovery) => discovery.extraction.extracted_url)),
  );
  return new Set(
    refreshedItems
      .filter(
        (item) =>
          originalIds.has(item.id)
          || originalCanonicalUrls.has(item.canonical_url)
          || item.provenance.discoveries.some((discovery) => originalExtractedUrls.has(discovery.extraction.extracted_url)),
      )
      .map((item) => item.id),
  );
}

export async function runResync(
  argv: string[],
  token?: string,
  deps: Partial<ResyncDeps> = {},
): Promise<void> {
  const selection = parseSelection(argv);
  if (!hasSelector(selection)) {
    throw new Error("catalog:resync requires at least one selector (--id, --url, --match, --status, or --where)");
  }

  const resolvedDeps: ResyncDeps = {
    loadItems: deps.loadItems ?? loadCatalogItems,
    runDiscover: deps.runDiscover ?? runDiscover,
    runStars: deps.runStars ?? runStars,
    runCategorize: deps.runCategorize ?? runCategorize,
    runRender: deps.runRender ?? runRender,
    runValidate: deps.runValidate ?? runValidate,
  };

  const items = resolvedDeps.loadItems();
  const selectedItems = selectResyncItems(items, selection);
  if (selectedItems.length === 0) {
    console.log("No catalog items matched the provided resync selector.");
    return;
  }

  let selectedIds = new Set(selectedItems.map((item) => item.id));
  const explicitActions = selection.actions.discover || selection.actions.stars || selection.actions.categorize;
  const shouldDiscover = selection.actions.discover;
  const shouldStars = selection.actions.stars;
  const shouldCategorize = selection.actions.categorize || !explicitActions;

  if (shouldDiscover) {
    const sourceUrls = discoverSourceUrlsForItems(selection, selectedItems);
    await resolvedDeps.runDiscover(token, { sourceUrls });
    const refreshedItems = resolvedDeps.loadItems();
    selectedIds = followUpItemIdsAfterDiscover(selectedItems, refreshedItems);
  }
  if (shouldStars) {
    await resolvedDeps.runStars(token, { itemIds: selectedIds, force: true });
  }
  if (shouldCategorize) {
    await resolvedDeps.runCategorize(token, { itemIds: selectedIds, force: true });
  }

  await resolvedDeps.runRender();
  await resolvedDeps.runValidate();
}
