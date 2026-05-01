import { describe, expect, it } from "vitest";
import { readProcessing,
updateProcessing,
markDone,
markDeferred,
markFailed,
markSkipped,
isFresh,
nextRetry,
makeHeartbeat, } from "../scripts/catalog/processing.js"

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

  it("markDone / markFailed / markSkipped / markDeferred change status", () => {
    const item: any = { processing: {} };
    markDone(item, "discover");
    expect(readProcessing(item, "discover").status).toBe("done");
    markFailed(item, "stars");
    expect(readProcessing(item, "stars").status).toBe("failed");
    markDeferred(item, "categorize");
    expect(readProcessing(item, "categorize").status).toBe("deferred");
    markSkipped(item, "categorize");
    expect(readProcessing(item, "categorize").status).toBe("skipped");
  });

  it("clears a stale retry timestamp when work later finishes", () => {
    const item: any = { processing: { categorize: { status: "deferred", updated_at: null, next_retry_at: "2026-05-03T03:00:00Z" } } };
    markDone(item, "categorize");
    expect(readProcessing(item, "categorize").next_retry_at).toBeNull();
  });

  it("nextRetry returns a future date when provided", () => {
    const item: any = { processing: {} };
    const when = nextRetry("2026-05-02T00:00:00Z", 60);
    expect(when > "2026-05-02T00:00:00Z").toBe(true);
  });

  it("isFresh returns false for old timestamps", () => {
    expect(isFresh("2026-01-01T00:00:00Z", 30)).toBe(false);
    const now = new Date().toISOString();
    expect(isFresh(now, 30)).toBe(true);
  });

  it("heartbeat gives expected shape", () => {
    const hb = makeHeartbeat("categorize", 3, 1, 1, "2026-05-02T12:00:00Z");
    expect(hb).toContain("categorize");
    expect(hb).toContain("done:3");
  });
});
