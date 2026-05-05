import * as fs from "node:fs";
import * as path from "node:path";
import { README_CACHE_DIR } from "../support/paths.ts";

const SAFE_PATH_SEGMENT = /^[A-Za-z0-9._-]+$/;

function assertSafePathSegment(segment: string, label: string): void {
  if (!segment || segment === "." || segment === ".." || !SAFE_PATH_SEGMENT.test(segment)) {
    throw new Error(`Unsafe ${label} for cache path: ${JSON.stringify(segment)}`);
  }
}

export function readmeCachePath(owner: string, repo: string): string {
  assertSafePathSegment(owner, "owner");
  assertSafePathSegment(repo, "repo");
  return path.join(README_CACHE_DIR, owner, `${repo}.md`);
}

export function readReadmeFromCache(owner: string, repo: string): string | null {
  const cachePath = readmeCachePath(owner, repo);
  if (!fs.existsSync(cachePath)) return null;
  try {
    return fs.readFileSync(cachePath, "utf8");
  } catch {
    return null;
  }
}

export function writeReadmeToCache(owner: string, repo: string, body: string): void {
  const cachePath = readmeCachePath(owner, repo);
  fs.mkdirSync(path.dirname(cachePath), { recursive: true });
  fs.writeFileSync(cachePath, body, "utf8");
}
