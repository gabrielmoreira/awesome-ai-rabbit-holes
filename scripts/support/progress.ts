export const DEFAULT_HEARTBEAT_INTERVAL_MS = 30_000;

export type ProgressHeartbeat = {
  phase: string;
  done: number;
  total: number;
  ok: number;
  fail: number;
  defer: number;
  skip: number;
  startedAtMs: number;
  nowMs: number;
  ratePerSecond: number;
  etaMs: number | null;
  budgetLeftMs: number | null;
  checkpoint: string | null;
  final: boolean;
};

export function formatDurationMs(ms: number): string {
  if (ms > 0 && ms < 1000) return "<1s";
  const totalSeconds = Math.max(0, Math.round(ms / 1000));
  if (totalSeconds < 60) return `${totalSeconds}s`;

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return seconds > 0 ? `${hours}h ${minutes}m ${seconds}s` : `${hours}h ${minutes}m`;
  }
  return seconds > 0 ? `${minutes}m ${seconds}s` : `${minutes}m`;
}

const PHASE_LABEL_WIDTH = 15;

export function buildProgressHeartbeat(input: {
  phase: string;
  done: number;
  total: number;
  ok?: number;
  fail?: number;
  defer?: number;
  skip?: number;
  startedAtMs: number;
  nowMs?: number;
  budgetLeftMs?: number | null;
  checkpoint?: string | null;
  final?: boolean;
}): ProgressHeartbeat {
  const nowMs = input.nowMs ?? Date.now();
  const elapsedMs = Math.max(1, nowMs - input.startedAtMs);
  const safeDone = Math.max(0, input.done);
  const safeTotal = Math.max(0, input.total);
  const ratePerSecond = safeDone / (elapsedMs / 1000);
  const remaining = Math.max(0, safeTotal - safeDone);
  const etaMs = remaining > 0 && safeDone > 0 && ratePerSecond > 0 ? (remaining / ratePerSecond) * 1000 : null;

  return {
    phase: input.phase,
    done: safeDone,
    total: safeTotal,
    ok: Math.max(0, input.ok ?? safeDone),
    fail: Math.max(0, input.fail ?? 0),
    defer: Math.max(0, input.defer ?? 0),
    skip: Math.max(0, input.skip ?? 0),
    startedAtMs: input.startedAtMs,
    nowMs,
    ratePerSecond,
    etaMs,
    budgetLeftMs: input.budgetLeftMs == null ? null : Math.max(0, input.budgetLeftMs),
    checkpoint: input.checkpoint ?? null,
    final: input.final === true,
  };
}

export function formatProgressHeartbeat(heartbeat: ProgressHeartbeat): string {
  const phaseLabel = heartbeat.phase.padEnd(PHASE_LABEL_WIDTH);
  const etaLabel = heartbeat.etaMs == null ? "--" : formatDurationMs(heartbeat.etaMs);
  const leftLabel = heartbeat.budgetLeftMs == null ? "" : ` | left ${formatDurationMs(heartbeat.budgetLeftMs)}`;
  return `  · ${phaseLabel} ${heartbeat.done}/${heartbeat.total} | ok ${heartbeat.ok} fail ${heartbeat.fail} defer ${heartbeat.defer} skip ${heartbeat.skip} | ${heartbeat.ratePerSecond.toFixed(1)}/s | eta ${etaLabel}${leftLabel}`;
}

export function createProgressHeartbeatPrinter(options: {
  intervalMs?: number;
  log?: (line: string) => void;
  allowFinalZeroTotal?: boolean;
} = {}) {
  const intervalMs = options.intervalMs ?? DEFAULT_HEARTBEAT_INTERVAL_MS;
  const log = options.log ?? ((line: string) => console.log(line));
  let lastPrintedAtMs: number | null = null;
  let lastPrintedSignature: string | null = null;

  return {
    push(heartbeat: ProgressHeartbeat): void {
      if (heartbeat.total <= 0 && !(heartbeat.final && options.allowFinalZeroTotal === true)) return;
      const sinceLastPrintMs =
        lastPrintedAtMs == null ? heartbeat.nowMs - heartbeat.startedAtMs : heartbeat.nowMs - lastPrintedAtMs;
      const shouldPrint = heartbeat.final || (heartbeat.done > 0 && sinceLastPrintMs >= intervalMs);
      if (!shouldPrint) return;

      const signature = [
        heartbeat.phase,
        heartbeat.done,
        heartbeat.total,
        heartbeat.ok,
        heartbeat.fail,
        heartbeat.defer,
        heartbeat.skip,
        heartbeat.budgetLeftMs ?? "na",
        heartbeat.final ? 1 : 0,
      ].join("|");

      if (lastPrintedSignature === signature && lastPrintedAtMs === heartbeat.nowMs) return;

      log(formatProgressHeartbeat(heartbeat));
      lastPrintedAtMs = heartbeat.nowMs;
      lastPrintedSignature = signature;
    },
  };
}
