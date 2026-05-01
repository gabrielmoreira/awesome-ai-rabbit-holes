// scripts/catalog/processing.ts
// Minimal processing state helpers and bounded work-claim utilities.

import { formatDurationMs } from "../support/progress.ts";

export type ProcessingStatus = "pending" | "done" | "deferred" | "failed" | "skipped";
export type ClaimedWorkStatus = Exclude<ProcessingStatus, "pending">;

export interface ProcessingEntry {
  status: ProcessingStatus;
  updated_at: string | null;
  cause?: { type: string; message: string } | null;
  next_retry_at?: string | null;
  attempts?: number;
  prompt_version?: string;
  category_rules_version?: string;
}

export interface ClaimedWorkItemResult<TValue> {
  status: ClaimedWorkStatus;
  value: TValue | null;
}

export interface ClaimedWorkSummary<TValue> {
  outputs: Array<TValue | null>;
  claimed: number;
  completed: number;
  failed: number;
  deferred: number;
  skipped: number;
  remaining: number;
  budgetExhausted: boolean;
}

export interface RunClaimedWorkOptions<TItem, TValue> {
  command: string;
  items: TItem[];
  concurrency: number;
  deadlineMs: number | null;
  heartbeatEvery?: number;
  minRemainingMs?: number;
  startedAtMs?: number;
  getCheckpoint?: (item: TItem, index: number) => string | null;
  onHeartbeat?: (heartbeat: string) => void;
  worker: (item: TItem, index: number) => Promise<ClaimedWorkItemResult<TValue>>;
}

function defaultEntry(): ProcessingEntry {
  return {
    status: "pending",
    updated_at: null,
    cause: null,
    next_retry_at: null,
    attempts: 0,
    prompt_version: undefined,
    category_rules_version: undefined,
  };
}


export function readProcessing<T extends { processing?: any }>(item: T, command: string): ProcessingEntry {
  if (!item || !item.processing) return defaultEntry();
  return item.processing[command] ?? defaultEntry();
}

export function updateProcessing<T extends { processing?: any }>(
  item: T,
  command: string,
  patch: Partial<ProcessingEntry>
): void {
  if (!item.processing) item.processing = {};
  const curr = readProcessing(item, command);
  const next = { ...curr, ...patch, updated_at: patch.updated_at ?? new Date().toISOString() };
  if (patch.status !== undefined && patch.status !== "deferred" && patch.next_retry_at === undefined) {
    next.next_retry_at = null;
  }
  item.processing[command] = next;
}

export function markDone<T extends { processing?: any }>(item: T, command: string): void {
  updateProcessing(item, command, { status: "done" });
}

export function markFailed<T extends { processing?: any }>(item: T, command: string, cause?: any): void {
  updateProcessing(item, command, { status: "failed", cause });
}

export function markSkipped<T extends { processing?: any }>(item: T, command: string): void {
  updateProcessing(item, command, { status: "skipped" });
}

export function markDeferred<T extends { processing?: any }>(item: T, command: string, nextRetry?: string): void {
  updateProcessing(item, command, { status: "deferred", next_retry_at: nextRetry ?? null });
}

export function isFresh(lastCheckedAt: string | null, ttlMinutes: number): boolean {
  if (!lastCheckedAt) return false;
  const then = Date.parse(lastCheckedAt);
  const now = Date.now();
  return (now - then) < (ttlMinutes * 60_000);
}

export function nextRetry(baseIso: string, minutes: number): string {
  const d = new Date(baseIso);
  d.setMinutes(d.getMinutes() + minutes);
  return d.toISOString();
}

export function makeHeartbeat(cmd: string, done: number, failed: number, skipped: number, ts: string): string {
  return `[${ts}] ${cmd}: done:${done} failed:${failed} skipped:${skipped}`;
}

export function buildClaimedWorkHeartbeat(input: {
  command: string;
  claimed: number;
  total: number;
  completed: number;
  failed: number;
  deferred: number;
  skipped: number;
  startedAtMs: number;
  nowMs?: number;
  checkpoint?: string | null;
}): string {
  const nowMs = input.nowMs ?? Date.now();
  const elapsed = formatDurationMs(Math.max(1, nowMs - input.startedAtMs));
  const checkpoint = input.checkpoint ? ` | checkpoint ${input.checkpoint}` : "";
  return `  · ${input.command}: claimed ${input.claimed}/${input.total} | done ${input.completed} | failed ${input.failed} | deferred ${input.deferred} | skipped ${input.skipped} | elapsed ${elapsed}${checkpoint}`;
}

export async function runClaimedWork<TItem, TValue>(
  options: RunClaimedWorkOptions<TItem, TValue>
): Promise<ClaimedWorkSummary<TValue>> {
  const total = options.items.length;
  const outputs: Array<TValue | null> = Array.from({ length: total }, () => null);
  const startedAtMs = options.startedAtMs ?? Date.now();
  const heartbeatEvery = options.heartbeatEvery ?? 25;
  const minRemainingMs = options.minRemainingMs ?? 0;
  const concurrency = total === 0 ? 1 : Math.max(1, Math.min(options.concurrency, total));
  let claimed = 0;
  let completed = 0;
  let failed = 0;
  let deferred = 0;
  let skipped = 0;
  let budgetExhausted = false;
  let lastHeartbeatHandled = 0;

  const maybeEmitHeartbeat = (checkpoint?: string | null) => {
    if (!options.onHeartbeat) return;
    const handled = completed + failed + deferred + skipped;
    if (handled <= 0) return;
    if (handled === lastHeartbeatHandled) return;
    if (handled === total || handled === claimed || (heartbeatEvery > 0 && handled % heartbeatEvery === 0)) {
      options.onHeartbeat(
        buildClaimedWorkHeartbeat({
          command: options.command,
          claimed,
          total,
          completed,
          failed,
          deferred,
          skipped,
          startedAtMs,
          checkpoint,
        }),
      );
      lastHeartbeatHandled = handled;
    }
  };

  const claimNextIndex = (): number | null => {
    if (claimed >= total) return null;
    if (options.deadlineMs != null && Date.now() + minRemainingMs >= options.deadlineMs) {
      budgetExhausted = true;
      return null;
    }
    const current = claimed;
    claimed += 1;
    return current;
  };

  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (true) {
        const current = claimNextIndex();
        if (current == null) return;
        const item = options.items[current];
        const checkpoint = options.getCheckpoint?.(item, current) ?? null;
        const result = await options.worker(item, current);
        outputs[current] = result.value;
        if (result.status === "done") completed += 1;
        if (result.status === "failed") failed += 1;
        if (result.status === "deferred") deferred += 1;
        if (result.status === "skipped") skipped += 1;
        maybeEmitHeartbeat(checkpoint);
      }
    }),
  );

  maybeEmitHeartbeat(null);

  return {
    outputs,
    claimed,
    completed,
    failed,
    deferred,
    skipped,
    remaining: Math.max(0, total - claimed),
    budgetExhausted: budgetExhausted || claimed < total,
  };
}
