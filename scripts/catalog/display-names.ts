import type { CatalogItem, Discovery } from "./types.ts";
import { parseGitHubUrl } from "../support/github.ts";

const GENERIC_DISPLAY_NAME_PATTERN = /^(?:intro|introduction|overview|docs|documentation|readme|getting-started|welcome|viewform|image|website|servers?|mcp|cli)$/;

function trimDisplayNameCandidate(value: string | null | undefined): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function displayNameFromMarkdownLink(value: string): string | null {
  if (/!\[[^\]]*\]\([^)]+\)/.test(value)) return null;
  const match = value.match(/\[([^\]]+)\]\(https?:\/\/[^)\s]+\)/);
  return trimDisplayNameCandidate(match?.[1] ?? null);
}
function isBadgeOrImageDisplayName(value: string): boolean {
  return /^!\[[^\]]*\]\([^)]+\)$/.test(value)
    || /^(?:badge|build status|ci status|coverage|downloads|github actions|github stars|license|npm(?: package)? version|tests?|version)$/i.test(value);
}

function isSentenceLikeSubscriptionDisplayName(value: string): boolean {
  return /^(?:subscribe|sign up|join|get|receive)\b.*\b(?:newsletter|updates?|inbox|email)\b/i.test(value)
    || /^(?:newsletter|weekly newsletter)\b.*\b(?:subscribe|sign up|join)\b/i.test(value);
}

function isHostnamePathDisplayName(value: string): boolean {
  return /^(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[^/\s]+)+\/?$/i.test(value);
}


function scoreDisplayNameCandidate(candidate: string, targetKeys: Set<string>): number {
  let score = 0;
  const key = normalizeCatalogDisplayNameKey(candidate);
  if (key && targetKeys.has(key)) score += 50;
  if (isLowSignalDisplayName(candidate)) score -= 40;
  else score += 40;
  if (/[A-Z]/.test(candidate)) score += 10;
  if (/\s/.test(candidate)) score += 5;
  if (/[a-z][A-Z]/.test(candidate)) score += 5;
  if (/^[a-z0-9-]+$/.test(candidate)) score -= 5;
  return score;
}

export function normalizeCatalogDisplayNameKey(value: string | null | undefined): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
  return normalized.length > 0 ? normalized : null;
}

export function resolveCatalogUrlHostLabel(url: string): string | null {
  try {
    const hostname = new URL(url).hostname.toLowerCase().replace(/^www\./, "");
    const parts = hostname.split(".");
    const label = parts.length >= 2 ? parts[parts.length - 2] : parts[0];
    return normalizeCatalogDisplayNameKey(label);
  } catch {
    return null;
  }
}

export function isLowSignalDisplayName(name: string | null | undefined): boolean {
  const trimmed = trimDisplayNameCandidate(name);
  if (!trimmed) return true;
  const normalized = trimmed.toLowerCase();
  return /^https?:\/\//i.test(trimmed)
    || GENERIC_DISPLAY_NAME_PATTERN.test(normalized)
    || isBadgeOrImageDisplayName(trimmed)
    || isHostnamePathDisplayName(trimmed)
    || isSentenceLikeSubscriptionDisplayName(trimmed)
    || /^[a-f0-9]{24,}$/i.test(normalized)
    || /^\d{4}\.\d{4,5}$/.test(normalized);
}

export function collectCatalogDisplayNameCandidates(item: CatalogItem): string[] {
  const candidates: string[] = [];
  const seen = new Set<string>();
  const push = (value: string | null | undefined) => {
    const trimmed = trimDisplayNameCandidate(value);
    if (!trimmed || seen.has(trimmed)) return;
    seen.add(trimmed);
    candidates.push(trimmed);
  };

  push(item.name);
  for (const discovery of item.provenance.discoveries) {
    for (const segment of discovery.extraction.section_path) {
      push(displayNameFromMarkdownLink(segment));
    }
    push(discovery.extraction.anchor_text);
  }
  return candidates;
}

export function selectBestCatalogDisplayName(candidates: string[], targetKeys: Iterable<string> = []): string | null {
  const uniqueCandidates = [...new Set(candidates.map((candidate) => trimDisplayNameCandidate(candidate)).filter((candidate): candidate is string => candidate != null))];
  if (uniqueCandidates.length === 0) return null;
  const normalizedTargetKeys = new Set(
    [...targetKeys]
      .map((candidate) => normalizeCatalogDisplayNameKey(candidate))
      .filter((candidate): candidate is string => candidate != null),
  );

  const scored = uniqueCandidates.map((candidate, index) => ({
    candidate,
    index,
    score: scoreDisplayNameCandidate(candidate, normalizedTargetKeys),
  }));
  scored.sort((left, right) => right.score - left.score || left.index - right.index || left.candidate.localeCompare(right.candidate));
  return scored[0]?.candidate ?? null;
}

export function resolveCatalogDisplayNameTargetKeys(canonicalUrl: string, githubRepo: string | null | undefined): string[] {
  const targetKeys = new Set<string>();
  const github = parseGitHubUrl(canonicalUrl);
  if (github) targetKeys.add(github.repo);
  const explicitRepo = trimDisplayNameCandidate(githubRepo);
  if (explicitRepo) {
    const repo = explicitRepo.split("/").at(-1);
    if (repo) targetKeys.add(repo);
  }
  const hostLabel = resolveCatalogUrlHostLabel(canonicalUrl);
  if (hostLabel) targetKeys.add(hostLabel);
  return [...targetKeys];
}

export function resolveCatalogDisplayName(item: CatalogItem): string {
  return selectBestCatalogDisplayName(
    collectCatalogDisplayNameCandidates(item),
    resolveCatalogDisplayNameTargetKeys(item.canonical_url, item.identity.github_repo),
  ) ?? item.name;
}

export function resolveDiscoveryDisplayName(discovery: Discovery): string | null {
  for (const segment of discovery.extraction.section_path) {
    const linkedName = displayNameFromMarkdownLink(segment);
    if (linkedName && !isLowSignalDisplayName(linkedName)) return linkedName;
  }
  return isLowSignalDisplayName(discovery.extraction.anchor_text) ? null : discovery.extraction.anchor_text;
}
