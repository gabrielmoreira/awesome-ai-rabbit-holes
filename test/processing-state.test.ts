import { describe, expect, it } from "vitest";
import { readProcessing,
updateProcessing,
nextRetry,
buildClaimedWorkHeartbeat, } from "../scripts/catalog/processing.js"

describe("processing-state helpers", () => {
  it("reads default pending state when entry missing", () => {
    const s = readProcessing<any>({ processing: {} } as any, "discover");
    expect(s.status).toBe("pending");
    expect(s.updated_at).toBeNull();
  });

  it("updates and reads back correctly", () => {
    const item: any = { processing: {} };
    updateProcessing(item, "stars", { status: "done", updated_at: "2026-05-02T10:00:00Z" });
    expect(readProcessing(item, "stars").status).toBe("done");
  });

  it("updateProcessing changes status and clears stale retry timestamps on completion", () => {
    const item: any = { processing: {} };
    updateProcessing(item, "discover", { status: "done" });
    expect(readProcessing(item, "discover").status).toBe("done");
    updateProcessing(item, "stars", { status: "failed", cause: { type: "boom", message: "bad" } });
    expect(readProcessing(item, "stars").status).toBe("failed");
    updateProcessing(item, "categorize", { status: "deferred", next_retry_at: "2026-05-03T03:00:00Z" });
    expect(readProcessing(item, "categorize").status).toBe("deferred");
    expect(readProcessing(item, "categorize").next_retry_at).toBe("2026-05-03T03:00:00Z");
    updateProcessing(item, "categorize", { status: "skipped" });
    expect(readProcessing(item, "categorize").status).toBe("skipped");
    expect(readProcessing(item, "categorize").next_retry_at).toBeNull();
  });

  it("nextRetry returns a future date when provided", () => {
    const when = nextRetry("2026-05-02T00:00:00Z", 60);
    expect(when > "2026-05-02T00:00:00Z").toBe(true);
  });

  it("claimed-work heartbeat gives expected shape", () => {
    const hb = buildClaimedWorkHeartbeat({
      command: "categorize",
      claimed: 3,
      total: 10,
      completed: 2,
      failed: 1,
      deferred: 0,
      skipped: 1,
      startedAtMs: 0,
      nowMs: 1_000,
      checkpoint: "item-1",
    });
    expect(hb).toContain("categorize");
    expect(hb).toContain("claimed 3/10");
    expect(hb).toContain("failed 1");
  });
});
