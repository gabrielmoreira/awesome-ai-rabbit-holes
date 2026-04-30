// scripts/github.ts
// GitHub API boundary. Fetches repo metadata and README when needed.

export interface GitHubRepoData {
  stars: number;
  forks: number;
  license: string | null;
  archived: boolean;
  pushed_at: string;
  description: string | null;
  homepage: string | null;
  topics: string[];
}

export interface GitHubReadmeData {
  content: string;
  encoding: string;
}

export function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  const match = url.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?(?:\/.*)?$/);
  if (!match) return null;
  return { owner: match[1], repo: match[2] };
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
    const text = await response.text();
    if (!text) return null;
    if (text.length > README_MAX_BYTES) {
      return text.slice(0, README_MAX_BYTES);
    }
    return text;
  } catch {
    return null;
  }
}
