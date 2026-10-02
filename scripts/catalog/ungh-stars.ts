/**
 * Star counts from ungh.cc, the unjs team's cached proxy of the GitHub API.
 *
 * The pipeline's own star refresh hits the GitHub API directly, and when GitHub
 * rate-limits it, items are left with `stars: null` and published anyway — the
 * reader then sees a star count that came from the source list's markdown,
 * stale by however long the list has been unmaintained. This module is the
 * recovery path: same data, no authentication, no per-request rate limit, at
 * the cost of going through someone else's cache.
 *
 * The batch endpoint `/stars/{owner}/{repo},{owner}/{repo},...` answers many
 * repos in one request, but one dead repo 404s the whole batch. So the batch
 * is small (10), and a 404 falls back to querying each repo in that batch
 * alone — the dead one is named, and the living ones keep their stars.
 */

/** The minimum a caller needs to fake the HTTP for a test. */
export type UnghFetch = (url: string) => Promise<{ status: number; body: unknown }>;

export type UnghStarsResult = {
  /** Repos with their star count. */
  stars: Map<string, number>;
  /** Repos that returned 404 — they do not exist on GitHub. */
  notFound: Set<string>;
  /** Repos the fetcher could not answer after every retry. */
  failed: Set<string>;
};

/** Small enough that a dead repo costs at most ten individual lookups. */
const BATCH_SIZE = 10;
/** The ungh base. Kept here so a test never constructs a URL by hand. */
const UNGH_STARS_URL = "https://ungh.cc/stars/";

export async function fetchUnghStars(
  repos: string[],
  fetcher: UnghFetch,
  options: { batchSize?: number; retries?: number; retryDelayMs?: number } = {},
): Promise<UnghStarsResult> {
  const batchSize = options.batchSize ?? BATCH_SIZE;
  const retries = options.retries ?? 3;
  const retryDelayMs = options.retryDelayMs ?? 2000;

  const stars = new Map<string, number>();
  const notFound = new Set<string>();
  const failed = new Set<string>();
  const retryQueue: string[][] = [];

  const batches: string[][] = [];
  for (let i = 0; i < repos.length; i += batchSize) {
    batches.push(repos.slice(i, i + batchSize));
  }

  for (const batch of batches) {
    await resolve(batch, { stars, notFound, failed, retryQueue }, fetcher);
  }

  // The ones a throttled batch hid get their chance once everything else has
  // been asked, so a temporary limit does not leave a hole in the results.
  // Each pass grows the wait: a service that is throttling needs time, not
  // another immediate request.
  for (let attempt = 0; attempt < retries && retryQueue.length > 0; attempt += 1) {
    await sleep(retryDelayMs * (attempt + 1));
    const waiting = retryQueue.splice(0, retryQueue.length);
    const stillWaiting: string[][] = [];
    for (const batch of waiting) {
      await resolve(batch, { stars, notFound, failed, retryQueue: stillWaiting }, fetcher);
    }
    retryQueue.push(...stillWaiting);
  }
  for (const batch of retryQueue) {
    for (const repo of batch) failed.add(repo);
  }

  return { stars, notFound, failed };
}

async function resolve(
  repos: string[],
  out: { stars: Map<string, number>; notFound: Set<string>; failed: Set<string>; retryQueue: string[][] },
  fetcher: UnghFetch,
): Promise<void> {
  if (repos.length === 0) return;
  try {
    const response = await fetcher(`${UNGH_STARS_URL}${repos.join(",")}`);
    if (response.status === 200) {
      const body = response.body as { stars?: Record<string, number> };
      for (const [repo, count] of Object.entries(body.stars ?? {})) {
        if (typeof count === "number") out.stars.set(repo, count);
      }
      return;
    }
    if (response.status === 404) {
      // One dead repo 404s the whole batch; the living ones still deserve
      // their stars, so each repo in the batch is asked alone.
      if (repos.length === 1) {
        out.notFound.add(repos[0]!);
      } else {
        for (const repo of repos) {
          await resolve([repo], out, fetcher);
        }
      }
      return;
    }
    // 429, 403, or anything else the caller should try again later for.
    out.retryQueue.push(repos);
  } catch {
    out.retryQueue.push(repos);
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolvePromise) => setTimeout(resolvePromise, ms));
}
