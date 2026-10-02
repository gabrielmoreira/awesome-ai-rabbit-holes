import { describe, expect, it } from "vitest";
import { fetchUnghStars, type UnghFetch } from "../scripts/catalog/ungh-stars.js";

type Response = { status: number; body: unknown };

/**
 * A fetcher scripted by the exact batch path after `/stars/`. Each entry is
 * consumed in order, so a test can make the same path fail twice and succeed
 * on the third attempt.
 */
function scripted(responses: Record<string, Response[]>): UnghFetch {
  const used = new Map<string, number>();
  return async (url: string) => {
    const path = url.split("/stars/")[1] ?? "";
    const replies = responses[path];
    if (!replies) throw new Error(`unexpected path: ${path}`);
    const i = used.get(path) ?? 0;
    used.set(path, i + 1);
    return replies[Math.min(i, replies.length - 1)];
  };
}

const ok = (stars: Record<string, number>): Response => ({ status: 200, body: { stars } });
const dead = (): Response => ({ status: 404, body: {} });
const throttled = (): Response => ({ status: 429, body: {} });

describe("fetching star counts from ungh in batches", () => {
  it("returns the star counts of a batch that succeeds", async () => {
    const fetcher = scripted({
      "a/b,c/d": [ok({ "a/b": 100, "c/d": 200 })],
    });
    const result = await fetchUnghStars(["a/b", "c/d"], fetcher, { retries: 0 });
    expect(result.stars.get("a/b")).toBe(100);
    expect(result.stars.get("c/d")).toBe(200);
    expect(result.notFound.size).toBe(0);
    expect(result.failed.size).toBe(0);
  });

  it("splits a batch that 404s down to individual repos", async () => {
    const fetcher = scripted({
      "a/b,c/d": [dead()],
      "a/b": [ok({ "a/b": 50 })],
      "c/d": [dead()],
    });
    const result = await fetchUnghStars(["a/b", "c/d"], fetcher, { retries: 0 });
    expect(result.stars.get("a/b")).toBe(50);
    expect(result.notFound.has("c/d")).toBe(true);
  });

  it("retries a rate-limited batch and takes the answer when it recovers", async () => {
    const fetcher = scripted({
      "a/b": [throttled(), throttled(), ok({ "a/b": 10 })],
    });
    const result = await fetchUnghStars(["a/b"], fetcher, { retries: 3, retryDelayMs: 1 });
    expect(result.stars.get("a/b")).toBe(10);
    expect(result.failed.size).toBe(0);
  });

  it("reports a batch as failed when every retry is throttled", async () => {
    const fetcher = scripted({
      "a/b": [throttled()],
    });
    const result = await fetchUnghStars(["a/b"], fetcher, { retries: 3, retryDelayMs: 1 });
    expect(result.failed.has("a/b")).toBe(true);
    expect(result.stars.size).toBe(0);
  });

  it("keeps the repos a dead one hid, and names the dead one", async () => {
    const fetcher = scripted({
      "a/b,dead/x,c/d": [dead()],
      "a/b": [ok({ "a/b": 1 })],
      "dead/x": [dead()],
      "c/d": [ok({ "c/d": 2 })],
    });
    const result = await fetchUnghStars(["a/b", "dead/x", "c/d"], fetcher, { retries: 0 });
    expect(result.stars.get("a/b")).toBe(1);
    expect(result.stars.get("c/d")).toBe(2);
    expect(result.notFound.has("dead/x")).toBe(true);
  });
});
