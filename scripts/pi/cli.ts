export function isPiCliFlag(arg: string): boolean {
  return arg.startsWith("--");
}

export function requirePiCliValue(argv: string[], index: number, flag: string): string {
  const next = argv[index + 1]?.trim();
  if (!next || isPiCliFlag(next)) {
    throw new Error(`Missing value for ${flag}`);
  }
  return next;
}

export function parsePositivePiCliInteger(argv: string[], index: number, flag: string): number {
  const rawValue = requirePiCliValue(argv, index, flag);
  const parsed = Number.parseInt(rawValue, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`Invalid value for ${flag}: ${rawValue}`);
  }
  return parsed;
}
