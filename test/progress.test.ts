import { describe, expect, it } from "vitest";
import {
  buildProgressHeartbeat,
  createProgressHeartbeatPrinter,
  formatDurationMs,
  formatProgressHeartbeat,
} from "../scripts/support/progress.js";

describe("progress heartbeats", () => {
  it("formats compact, predictable heartbeat lines", () => {
    const heartbeat = buildProgressHeartbeat({
      phase: "categorize",
      done: 3,
      total: 10,
      ok: 2,
      fail: 1,
      defer: 0,
      skip: 1,
      startedAtMs: 0,
      nowMs: 2_000,
      budgetLeftMs: 58_000,
    });

    expect(formatProgressHeartbeat(heartbeat)).toBe(
      "  · categorize      3/10 | ok 2 fail 1 defer 0 skip 1 | 1.5/s | eta 5s | left 58s"
    );
  });

  it("renders subsecond remaining time without collapsing to 0s", () => {
    expect(formatDurationMs(250)).toBe("<1s");
  });

  it("prints on the configured time interval instead of item counts", () => {
    const lines: string[] = [];
    const printer = createProgressHeartbeatPrinter({
      intervalMs: 30_000,
      log: (line) => {
        lines.push(line);
      },
    });

    printer.push(
      buildProgressHeartbeat({
        phase: "stars",
        done: 1,
        total: 10,
        ok: 1,
        fail: 0,
        defer: 0,
        skip: 0,
        startedAtMs: 0,
        nowMs: 5_000,
      })
    );
    printer.push(
      buildProgressHeartbeat({
        phase: "stars",
        done: 2,
        total: 10,
        ok: 2,
        fail: 0,
        defer: 0,
        skip: 0,
        startedAtMs: 0,
        nowMs: 29_000,
      })
    );

    expect(lines).toEqual([]);

    printer.push(
      buildProgressHeartbeat({
        phase: "stars",
        done: 3,
        total: 10,
        ok: 3,
        fail: 0,
        defer: 0,
        skip: 0,
        startedAtMs: 0,
        nowMs: 30_000,
      })
    );
    printer.push(
      buildProgressHeartbeat({
        phase: "stars",
        done: 10,
        total: 10,
        ok: 10,
        fail: 0,
        defer: 0,
        skip: 0,
        startedAtMs: 0,
        nowMs: 31_000,
        final: true,
      })
    );

    expect(lines).toEqual([
      "  · stars           3/10 | ok 3 fail 0 defer 0 skip 0 | 0.1/s | eta 1m 10s",
      "  · stars           10/10 | ok 10 fail 0 defer 0 skip 0 | 0.3/s | eta --",
    ]);
  });

  it("prints a final zero-count heartbeat", () => {
    const lines: string[] = [];
    const printer = createProgressHeartbeatPrinter({
      allowFinalZeroTotal: true,
      log: (line) => {
        lines.push(line);
      },
    });

    printer.push(
      buildProgressHeartbeat({
        phase: "discover:links",
        done: 0,
        total: 0,
        ok: 0,
        fail: 0,
        defer: 0,
        skip: 0,
        startedAtMs: 0,
        nowMs: 1_000,
        final: true,
      }),
    );

    expect(lines).toEqual([
      "  · discover:links  0/0 | ok 0 fail 0 defer 0 skip 0 | 0.0/s | eta --",
    ]);
  });
});
