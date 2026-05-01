// scripts/files.ts
// Shared text-file write helpers for generated output.

import * as fs from "node:fs";
import * as path from "node:path";

export type LineEnding = "\n" | "\r\n";

export function detectLineEnding(content: string): LineEnding {
  return content.includes("\r\n") ? "\r\n" : "\n";
}

export function normalizeLineEndings(content: string, lineEnding: LineEnding): string {
  const normalized = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  return lineEnding === "\n" ? normalized : normalized.replace(/\n/g, "\r\n");
}

export function writeTextFileIfChanged(filePath: string, content: string): boolean {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  if (fs.existsSync(filePath)) {
    const current = fs.readFileSync(filePath, "utf8");
    const next = normalizeLineEndings(content, detectLineEnding(current));
    if (current === next) return false;
    fs.writeFileSync(filePath, next, "utf8");
    return true;
  }

  fs.writeFileSync(filePath, content, "utf8");
  return true;
}
