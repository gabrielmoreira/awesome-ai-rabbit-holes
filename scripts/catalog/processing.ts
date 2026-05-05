// scripts/catalog/processing.ts
// Minimal processing state helpers and bounded work-claim utilities.

import { buildProgressHeartbeat, type ProgressHeartbeat } from "../support/progress.ts";

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
  halted: boolean;
  haltReason: string | null;
}

export interface RunClaimedWorkOptions<TItem, TValue> {
  command: string;
  items: TItem[];
  concurrency: number;
  deadlineMs: number | null;
  minRemainingMs?: number;
  startedAtMs?: number;
  getCheckpoint?: (item: TItem, index: number) => string | null;
  onHeartbeat?: (heartbeat: ProgressHeartbeat) => void;
  stopClaimingWhen?: () => boolean;
  haltReason?: () => string | null;
  workerStartupDelayMs?: (workerIndex: number) => number;
  sleep?: (ms: number) => Promise<void>;
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

export function nextRetry(baseIso: string, minutes: number): string {
  const d = new Date(baseIso);
  d.setMinutes(d.getMinutes() + minutes);
  return d.toISOString();
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
  final?: boolean;
}): ProgressHeartbeat {
  const done = input.completed + input.failed + input.deferred + input.skipped;
  return buildProgressHeartbeat({
    phase: input.command,
    done,
    total: input.total,
    ok: input.completed,
    fail: input.failed,
    defer: input.deferred,
    skip: input.skipped,
    startedAtMs: input.startedAtMs,
    nowMs: input.nowMs,
    checkpoint: input.checkpoint ?? null,
    final: input.final === true,
  });
}

async function sleepMs(ms: number): Promise<void> {
  if (ms <= 0) return;
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function runClaimedWork<TItem, TValue>(
  options: RunClaimedWorkOptions<TItem, TValue>
): Promise<ClaimedWorkSummary<TValue>> {
  const total = options.items.length;
  const outputs: Array<TValue | null> = Array.from({ length: total }, () => null);
  const startedAtMs = options.startedAtMs ?? Date.now();
  const minRemainingMs = options.minRemainingMs ?? 0;
  const concurrency = total === 0 ? 1 : Math.max(1, Math.min(options.concurrency, total));
  let claimed = 0;
  let completed = 0;
  let failed = 0;
  let deferred = 0;
  let skipped = 0;
  let budgetExhausted = false;
  let halted = false;

  const emitHeartbeat = (checkpoint?: string | null, final = false) => {
    if (!options.onHeartbeat) return;
    const handled = completed + failed + deferred + skipped;
    if (handled <= 0 && !final) return;
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
        nowMs: Date.now(),
        checkpoint,
        final,
      })
    );
  };

  const claimNextIndex = (): number | null => {
    if (claimed >= total) return null;
    if (options.stopClaimingWhen?.()) {
      halted = true;
      return null;
    }
    if (options.deadlineMs != null && Date.now() + minRemainingMs >= options.deadlineMs) {
      budgetExhausted = true;
      return null;
    }
    const current = claimed;
    claimed += 1;
    return current;
  };

  await Promise.all(
    Array.from({ length: concurrency }, async (_, workerIndex) => {
      const startupDelayMs = options.workerStartupDelayMs?.(workerIndex) ?? 0;
      if (startupDelayMs > 0) {
        await (options.sleep ?? sleepMs)(startupDelayMs);
      }

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
        emitHeartbeat(checkpoint, false);
      }
    }),
  );

  emitHeartbeat(null, true);

  return {
    outputs,
    claimed,
    completed,
    failed,
    deferred,
    skipped,
    remaining: Math.max(0, total - claimed),
    budgetExhausted,
    halted,
    haltReason: halted ? options.haltReason?.() ?? null : null,
  };
}
