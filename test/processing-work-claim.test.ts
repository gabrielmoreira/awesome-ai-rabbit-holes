import { describe, expect, it } from "vitest";
import { buildClaimedWorkHeartbeat, runClaimedWork } from "../scripts/catalog/processing.js"

describe("buildClaimedWorkHeartbeat", () => {
  it("returns compact progress counts and checkpoint metadata", () => {
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

    expect(heartbeat.phase).toBe("stars");
    expect(heartbeat.done).toBe(3);
    expect(heartbeat.ok).toBe(2);
    expect(heartbeat.fail).toBe(1);
    expect(heartbeat.checkpoint).toBe("github__example__tool");
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
      getCheckpoint: (item) => `item-${item}`,
      onHeartbeat: (heartbeat) => {
        heartbeats.push(heartbeat.checkpoint ?? "");
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
    expect(heartbeats).toEqual(expect.arrayContaining(["item-1", "item-2"]));
  });

  it("stops claiming new work when an external halt condition becomes true", async () => {
    let shouldHalt = false;
    const started: number[] = [];

    const result = await runClaimedWork<number, string>({
      command: "stars",
      items: [1, 2, 3, 4],
      concurrency: 1,
      deadlineMs: null,
      stopClaimingWhen: () => shouldHalt,
      haltReason: () => "github unavailable streak",
      worker: async (item) => {
        started.push(item);
        if (item === 2) shouldHalt = true;
        return { status: "done", value: `done-${item}` };
      },
    });

    expect(started).toEqual([1, 2]);
    expect(result.claimed).toBe(2);
    expect(result.remaining).toBe(2);
    expect(result.budgetExhausted).toBe(false);
    expect(result.halted).toBe(true);
    expect(result.haltReason).toBe("github unavailable streak");
    expect(result.outputs).toEqual(["done-1", "done-2", null, null]);
  });

  it("latches the halt reason when stop-claiming first trips", async () => {
    let shouldHalt = false;
    let haltReason = "steady";
    let releaseSecond: (() => void) | null = null;

    const resultPromise = runClaimedWork<number, string>({
      command: "stars",
      items: [1, 2, 3],
      concurrency: 2,
      deadlineMs: null,
      stopClaimingWhen: () => shouldHalt,
      haltReason: () => haltReason,
      worker: async (item) => {
        if (item === 1) {
          shouldHalt = true;
          haltReason = "systemic outage";
          return { status: "done", value: "done-1" };
        }
        if (item === 2) {
          await new Promise<void>((resolve) => {
            releaseSecond = resolve;
          });
          haltReason = "recovered";
          return { status: "done", value: "done-2" };
        }
        return { status: "done", value: `done-${item}` };
      },
    });

    await Promise.resolve();
    const releaseSecondFn = releaseSecond as (() => void) | null;
    if (releaseSecondFn) {
      releaseSecondFn();
    }
    const result = await resultPromise;

    expect(result.halted).toBe(true);
    expect(result.haltReason).toBe("systemic outage");
  });

  it("applies startup jitter once per worker before claiming work", async () => {
    const order: string[] = [];

    const result = await runClaimedWork<number, string>({
      command: "categorize",
      items: [1, 2],
      concurrency: 2,
      deadlineMs: null,
      workerStartupDelayMs: (workerIndex: number) => 50 + workerIndex * 100,
      sleep: async (ms: number) => {
        order.push(`sleep:${ms}`);
      },
      worker: async (item) => {
        order.push(`work:${item}`);
        return { status: "done", value: `done-${item}` };
      },
    });

    expect(result.outputs).toEqual(["done-1", "done-2"]);
    expect(order).toEqual(["sleep:50", "sleep:150", "work:1", "work:2"]);
  });
});
