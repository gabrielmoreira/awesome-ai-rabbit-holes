import { loadCatalogItems, loadConfig, saveCatalogItem } from "./data.ts"
import { applyLifecycleRules, normalizeLoadedItem } from "./core.ts"
import { runClaimedWork, updateProcessing } from "./processing.ts"
import { readReadmeFromCache, readmeCachePath, writeReadmeToCache } from "./readme-cache.ts"
import { loadSettings } from "./settings.ts"
import type { AppSettings, CatalogConfig, CatalogItem, GitHubReadmeProvenance } from "./types.ts"
import { fetchGitHubReadmeResult, fetchGitHubRepo, parseGitHubUrl } from "../support/github.ts"

const MAX_CONSECUTIVE_GITHUB_UNAVAILABLE = 20;

export function shouldRefreshMetadata(lastCheckedAt: string | null, windowDays: number, now: Date = new Date()): boolean {
  if (!lastCheckedAt) return true;
  const last = Date.parse(lastCheckedAt);
  if (Number.isNaN(last)) return true;
  return now.getTime() - last >= windowDays * 24 * 60 * 60 * 1000;
}

export function selectStarRefreshTargets(
  items: CatalogItem[],
  metadataRefreshDays: number,
  now: Date = new Date(),
  options: { force?: boolean } = {},
): CatalogItem[] {
  return items.filter(
    (item) =>
      Boolean(item.identity.github_repo) &&
      (options.force || item.metadata.github.created_at == null || shouldRefreshMetadata(item.metadata.github.last_checked_at, metadataRefreshDays, now)),
  );
}

function applyStarLifecycle(item: CatalogItem, threshold: number): CatalogItem {
  return applyLifecycleRules(item, {
    promotion: { incubating_until_stars: threshold },
    github: { metadata_refresh_days: 0 },
  });
}

export async function enrichWithGitHub(item: CatalogItem, token?: string): Promise<CatalogItem> {
  if (item.kind !== "github-repo" || !item.identity.github_repo) return item;

  const [owner, repo] = item.identity.github_repo.split("/");
  const [data, readmeResult] = await Promise.all([
    fetchGitHubRepo(owner, repo, token),
    fetchGitHubReadmeResult(owner, repo, token),
  ]);

  if (!data) return item;

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

  return normalizeLoadedItem({
    ...item,
    metadata: {
      github: {
        ...item.metadata.github,
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
    curation: shouldReevaluateCuration ? { status: "pending", reason: null, evidence: [] } : item.curation,
  });
}

export async function refreshItemStars(
  item: CatalogItem,
  token: string | undefined,
  threshold: number,
  enrichItem: (item: CatalogItem, token?: string) => Promise<CatalogItem> = enrichWithGitHub,
): Promise<CatalogItem> {
  const repo = item.identity.github_repo;
  if (!repo) {
    updateProcessing(item, "stars", {
      status: "skipped",
      cause: { type: "not_applicable", message: "Item has no GitHub repository identity" },
    });
    return item;
  }

  const parsed = parseGitHubUrl(`https://github.com/${repo}`);
  if (!parsed) {
    updateProcessing(item, "stars", {
      status: "failed",
      cause: { type: "invalid_github_repo", message: `Invalid GitHub repository identity: ${repo}` },
    });
    return item;
  }

  const enriched = await enrichItem(item, token);
  if (enriched === item) {
    updateProcessing(item, "stars", {
      status: "deferred",
      cause: { type: "github_unavailable", message: `Could not fetch GitHub metadata for ${repo}` },
    });
    return item;
  }

  const withLifecycle = applyStarLifecycle(enriched, threshold);
  updateProcessing(withLifecycle, "stars", { status: "done", cause: null });
  return withLifecycle;
}

export interface RunStarsDeps {
  loadSettings?: () => AppSettings;
  loadConfig?: () => CatalogConfig;
  loadItems?: () => CatalogItem[];
  saveItem?: (item: CatalogItem) => void;
  refreshItem?: (item: CatalogItem, token: string | undefined, threshold: number) => Promise<CatalogItem>;
  log?: (line: string) => void;
}


function isSystemicGitHubAvailabilityFailure(item: CatalogItem | null): boolean {
  return item?.processing?.stars?.status === "deferred" && item.processing.stars.cause?.type === "github_unavailable";
}

export { MAX_CONSECUTIVE_GITHUB_UNAVAILABLE };
export async function runStars(
  token?: string,
  options: { itemIds?: Set<string>; force?: boolean } = {},
  deps: RunStarsDeps = {},
): Promise<void> {
  const settings = deps.loadSettings?.() ?? loadSettings();
  const config = deps.loadConfig?.() ?? loadConfig();
  const allItems = deps.loadItems?.() ?? loadCatalogItems();
  const saveItem = deps.saveItem ?? saveCatalogItem;
  const refreshItem = deps.refreshItem ?? ((item: CatalogItem, currentToken: string | undefined, threshold: number) => refreshItemStars(item, currentToken, threshold));
  const log = deps.log ?? ((line: string) => console.log(line));
  const eligibleItems = options.itemIds ? allItems.filter((item) => options.itemIds?.has(item.id)) : allItems;
  const now = new Date();
  const targets = selectStarRefreshTargets(eligibleItems, config.github.metadata_refresh_days, now, options);

  if (targets.length === 0) {
    log("No GitHub-backed items need star refresh.");
    return;
  }

  log(`Refreshing GitHub star/order signals for ${targets.length}/${eligibleItems.length} item(s)...`);
  const concurrency = Math.max(1, Math.min(settings.concurrency.github, targets.length));
  const deadlineMs = Date.now() + settings.budgets.stars_minutes * 60_000;
  let consecutiveGitHubUnavailable = 0;
  const summary = await runClaimedWork({
    command: "stars",
    items: targets,
    concurrency,
    deadlineMs,
    heartbeatEvery: 50,
    getCheckpoint: (item) => item.id,
    onHeartbeat: (heartbeat) => {
      log(heartbeat);
    },
    stopClaimingWhen: () => consecutiveGitHubUnavailable >= MAX_CONSECUTIVE_GITHUB_UNAVAILABLE,
    haltReason: () =>
      `GitHub metadata became unavailable for ${consecutiveGitHubUnavailable} claimed item(s) in a row`,
    worker: async (item) => {
      try {
        const next = await refreshItem(item, token, config.promotion.incubating_until_stars);
        consecutiveGitHubUnavailable = isSystemicGitHubAvailabilityFailure(next) ? consecutiveGitHubUnavailable + 1 : 0;
        const status = next.processing?.stars?.status ?? "done";
        return {
          status: status === "pending" ? "done" : status,
          value: next,
        };
      } catch (error) {
        consecutiveGitHubUnavailable = 0;
        const failed = { ...item };
        const message = error instanceof Error ? error.message : String(error);
        updateProcessing(failed, "stars", {
          status: "failed",
          cause: { type: "github_refresh_failed", message },
        });
        return { status: "failed", value: failed };
      }
    },
  });

  if (summary.halted && summary.remaining > 0) {
    log(`Star refresh halted: ${summary.haltReason ?? "GitHub metadata became unavailable repeatedly"}; leaving ${summary.remaining} item(s) untouched for a later run.`);
  } else if (summary.remaining > 0) {
    if (summary.claimed === 0) {
      log(`Star refresh budget exhausted before claiming any item(s); leaving ${summary.remaining} item(s) pending.`);
    } else {
      log(`Star refresh budget exhausted after claiming ${summary.claimed}/${targets.length} item(s); leaving ${summary.remaining} item(s) pending.`);
    }
  }

  for (const item of summary.outputs.filter((value): value is CatalogItem => value !== null)) {
    saveItem(item);
  }

  log(`✅ Star refresh complete: ${summary.completed + summary.skipped} done, ${summary.failed + summary.deferred} deferred/failed.`);
}

export { readReadmeFromCache, readmeCachePath };
