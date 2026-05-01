export function shouldEmitProgressHeartbeat(
  completed: number,
  total: number,
  every: number
): boolean {
  if (total <= 0 || completed <= 0) return false;
  if (completed >= total) return true;
  return every > 0 && completed % every === 0;
}

function formatDurationMs(ms: number): string {
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

export function buildProgressHeartbeat(input: {
  label: string;
  completed: number;
  total: number;
  startedAtMs: number;
  nowMs?: number;
}): string {
  const nowMs = input.nowMs ?? Date.now();
  const elapsedMs = Math.max(1, nowMs - input.startedAtMs);
  const rate = input.completed / (elapsedMs / 1000);
  const remaining = Math.max(0, input.total - input.completed);
  const etaMs = rate > 0 ? (remaining / rate) * 1000 : 0;

  return `  · ${input.label}: ${input.completed}/${input.total} | avg ${rate.toFixed(1)} items/s | eta ${formatDurationMs(etaMs)}`;
}
