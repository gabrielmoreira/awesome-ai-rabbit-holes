import { describe, expect, it } from "vitest";
import { buildProgressHeartbeat, shouldEmitProgressHeartbeat } from "../scripts/progress.js";

describe("progress heartbeats", () => {
  it("formats indented heartbeat logs with throughput and eta", () => {
    expect(
      buildProgressHeartbeat({
        label: "AI insights",
        completed: 50,
        total: 200,
        startedAtMs: 0,
        nowMs: 10_000,
      })
    ).toBe("  · AI insights: 50/200 | avg 5.0 items/s | eta 30s");
  });

  it("emits on configured intervals and always on completion", () => {
    expect(shouldEmitProgressHeartbeat(24, 100, 25)).toBe(false);
    expect(shouldEmitProgressHeartbeat(25, 100, 25)).toBe(true);
    expect(shouldEmitProgressHeartbeat(100, 100, 25)).toBe(true);
  });
});
