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
    return await response.text();
  } catch {
    return null;
  }
}
