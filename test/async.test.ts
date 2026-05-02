import { describe, expect, it } from "vitest";
import { mapWithConcurrency } from "../scripts/async.js";

describe("mapWithConcurrency", () => {
  it("preserves input order while allowing multiple in-flight tasks", async () => {
    const started: number[] = [];
    const resolvers = new Map<number, () => void>();
    let active = 0;
    let maxActive = 0;

    const work = mapWithConcurrency([1, 2, 3], 2, async (value) => {
      started.push(value);
      active += 1;
      maxActive = Math.max(maxActive, active);
      await new Promise<void>((resolve) => {
        resolvers.set(value, () => {
          active -= 1;
          resolve();
        });
      });
      return value * 10;
    });

    await Promise.resolve();
    expect(started).toEqual([1, 2]);
    expect(maxActive).toBe(2);

    resolvers.get(1)?.();
    await Promise.resolve();
    await Promise.resolve();
    expect(started).toEqual([1, 2, 3]);

    resolvers.get(2)?.();
    resolvers.get(3)?.();

    await expect(work).resolves.toEqual([10, 20, 30]);
    expect(maxActive).toBe(2);
  });

  it("returns an empty list for empty input", async () => {
    await expect(mapWithConcurrency([], 4, async () => 1)).resolves.toEqual([]);
  });
});
