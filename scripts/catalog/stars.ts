import { loadCatalogItems, loadConfig, saveCatalogItem } from "./data.ts"
import { applyLifecycleRules, normalizeLoadedItem } from "./core.ts"
import { nextRetry, runClaimedWork, updateProcessing } from "./processing.ts"
import { readReadmeFromCache, readmeCachePath, writeReadmeToCache } from "./readme-cache.ts"
import { loadSettings } from "./settings.ts"
import type { CatalogItem, GitHubReadmeProvenance } from "./types.ts"
import { fetchGitHubReadmeResult, fetchGitHubRepo, parseGitHubUrl } from "../support/github.ts"

export function resolveGitHubEnrichmentConcurrency(env: NodeJS.ProcessEnv = process.env): number {
  return loadSettings({}, env).concurrency.github;
}

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

export async function runStars(
  token?: string,
  options: { itemIds?: Set<string>; force?: boolean } = {},
): Promise<void> {
  const settings = loadSettings();
  const config = loadConfig();
  const allItems = loadCatalogItems();
  const eligibleItems = options.itemIds ? allItems.filter((item) => options.itemIds?.has(item.id)) : allItems;
  const now = new Date();
  const targets = selectStarRefreshTargets(eligibleItems, config.github.metadata_refresh_days, now, options);

  if (targets.length === 0) {
    console.log("No GitHub-backed items need star refresh.");
    return;
  }

  console.log(`Refreshing GitHub star/order signals for ${targets.length}/${eligibleItems.length} item(s)...`);
  const concurrency = Math.max(1, Math.min(resolveGitHubEnrichmentConcurrency(), targets.length));
  const deadlineMs = Date.now() + settings.budgets.stars_minutes * 60_000;
  const summary = await runClaimedWork({
    command: "stars",
    items: targets,
    concurrency,
    deadlineMs,
    heartbeatEvery: 50,
    getCheckpoint: (item) => item.id,
    onHeartbeat: (heartbeat) => {
      console.log(heartbeat);
    },
    worker: async (item) => {
      const next = await refreshItemStars(item, token, config.promotion.incubating_until_stars);
      const status = next.processing?.stars?.status ?? "done";
      return {
        status: status === "pending" ? "done" : status,
        value: next,
      };
    },
  });

  if (summary.remaining > 0) {
    const retryAt = nextRetry(new Date().toISOString(), 60);
    for (const item of targets.slice(summary.claimed)) {
      updateProcessing(item, "stars", {
        status: "deferred",
        cause: { type: "budget_exhausted", message: "Star refresh budget expired before this item was claimed" },
        next_retry_at: retryAt,
      });
      saveCatalogItem(item);
    }
    console.log(`Star refresh budget exhausted after claiming ${summary.claimed}/${targets.length} item(s).`);
  }

  for (const item of summary.outputs.filter((value): value is CatalogItem => value !== null)) {
    saveCatalogItem(item);
  }

  console.log(`✅ Star refresh complete: ${summary.completed + summary.skipped} done, ${summary.failed + summary.deferred} deferred/failed.`);
}

export { readReadmeFromCache, readmeCachePath };
