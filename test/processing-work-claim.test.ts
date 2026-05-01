import { describe, expect, it } from "vitest";
import { buildClaimedWorkHeartbeat, runClaimedWork } from "../scripts/catalog/processing.js"

describe("buildClaimedWorkHeartbeat", () => {
  it("includes claimed progress, outcomes, elapsed time, and checkpoint", () => {
    const heartbeat = buildClaimedWorkHeartbeat({
      command: "stars",
      claimed: 3,
      total: 10,
      completed: 2,
      failed: 1,
      deferred: 0,
      skipped: 0,
      startedAtMs: 0,
      nowMs: 10_000,
      checkpoint: "github__example__tool",
    });

    expect(heartbeat).toContain("stars");
    expect(heartbeat).toContain("claimed 3/10");
    expect(heartbeat).toContain("done 2");
    expect(heartbeat).toContain("failed 1");
    expect(heartbeat).toContain("elapsed 10s");
    expect(heartbeat).toContain("checkpoint github__example__tool");
  });
});

describe("runClaimedWork", () => {
  it("stops claiming new work after the deadline while allowing in-flight work to finish", async () => {
    const releases = new Map<number, () => void>();
    const started: number[] = [];
    const heartbeats: string[] = [];
    let inFlight = 0;
    let maxInFlight = 0;

    const work = runClaimedWork<number, string>({
      command: "categorize",
      items: [1, 2, 3],
      concurrency: 2,
      deadlineMs: Date.now() + 5,
      heartbeatEvery: 1,
      getCheckpoint: (item) => `item-${item}`,
      onHeartbeat: (heartbeat) => {
        heartbeats.push(heartbeat);
      },
      worker: async (item) => {
        started.push(item);
        inFlight += 1;
        maxInFlight = Math.max(maxInFlight, inFlight);
        await new Promise<void>((resolve) => {
          releases.set(item, resolve);
        });
        inFlight -= 1;
        return { status: "done", value: `done-${item}` };
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 15));
    expect(started).toEqual([1, 2]);

    releases.get(1)?.();
    releases.get(2)?.();

    const result = await work;
    expect(maxInFlight).toBe(2);
    expect(result.claimed).toBe(2);
    expect(result.completed).toBe(2);
    expect(result.remaining).toBe(1);
    expect(result.budgetExhausted).toBe(true);
    expect(result.outputs).toEqual(["done-1", "done-2", null]);
    expect(heartbeats.some((heartbeat) => heartbeat.includes("checkpoint item-1") || heartbeat.includes("checkpoint item-2"))).toBe(true);
  });
});
