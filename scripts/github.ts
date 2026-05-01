// scripts/github.ts
// GitHub API boundary. Fetches repo metadata and README when needed.

export interface GitHubRepoData {
  stars: number;
  forks: number;
  license: string | null;
  archived: boolean;
  created_at: string;
  pushed_at: string;
  description: string | null;
  homepage: string | null;
  topics: string[];

}

export function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  // Use the URL parser (not a regex) so query strings, fragments, trailing
  // slashes, and `.git` suffixes do not bleed into the owner/repo segments.
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
  if (parsed.hostname !== "github.com") return null;

  const segments = parsed.pathname.split("/").filter(Boolean);
  if (segments.length < 2) return null;

  const owner = segments[0];
  let repo = segments[1];
  if (repo.endsWith(".git")) repo = repo.slice(0, -".git".length);
  if (!owner || !repo) return null;
  return { owner, repo };
}

export async function fetchGitHubRepo(
  owner: string,
  repo: string,
  token?: string
): Promise<GitHubRepoData | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (token) {
    headers["Authorization"] = `token ${token}`;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers });
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json() as {
      stargazers_count: number;
      forks_count: number;
      license: { spdx_id: string } | null;
      archived: boolean;
      created_at: string;
      pushed_at: string;
      description: string | null;
      homepage: string | null;
      topics: string[];
    };

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      license: data.license?.spdx_id ?? null,
      archived: data.archived,
      created_at: data.created_at,
      pushed_at: data.pushed_at,
      description: data.description,
      homepage: data.homepage,
      topics: data.topics ?? [],
    };
  } catch {
    return null;
  }
}

// Hard cap on raw README body we will read into memory, to defend against
// absurd payloads (e.g. binary checked in as README, or HTML disguised as
// markdown). 1 MiB is well above any reasonable README and well below the
// point where we would care about memory.
export const README_MAX_BYTES = 1024 * 1024;

export async function fetchGitHubReadme(
  owner: string,
  repo: string,
  token?: string
): Promise<string | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3.raw",
  };
  if (token) {
    headers["Authorization"] = `token ${token}`;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
      headers,
    });
    if (!response.ok) return null;
    // Read as bytes so the cap actually counts bytes (not UTF-16 code
    // units): a multi-byte UTF-8 README could otherwise smuggle past the
    // limit. When truncating, walk back to the last UTF-8 lead byte so we
    // never decode a partial codepoint (which would otherwise become
    // U+FFFD and inflate the re-encoded length past the cap).
    const buf = Buffer.from(await response.arrayBuffer());
    if (buf.byteLength === 0) return null;
    let capped = buf;
    if (buf.byteLength > README_MAX_BYTES) {
      let end = README_MAX_BYTES;
      // 0b10xxxxxx is a continuation byte; back up until we land on a
      // start byte (0xxxxxxx or 11xxxxxx) or hit the limit.
      while (end > 0 && (buf[end] & 0b1100_0000) === 0b1000_0000) {
        end--;
      }
      capped = buf.subarray(0, end);
    }
    const text = new TextDecoder("utf-8").decode(capped);
    if (!text) return null;
    return text;
  } catch {
    return null;
  }
}
