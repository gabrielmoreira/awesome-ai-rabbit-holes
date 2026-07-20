// scripts/support/github.ts
// GitHub API boundary. Fetches repo metadata and README when needed.

export type GitHubRepoData = {
  full_name: string;
  html_url: string;
  stars: number;
  forks: number;
  license: string | null;
  archived: boolean;
  created_at: string;
  pushed_at: string;
  description: string | null;
  homepage: string | null;
  topics: string[];
};

const RESERVED_GITHUB_ROUTE_OWNERS: Record<string, true> = {
  about: true,
  codespaces: true,
  contact: true,
  "customer-stories": true,
  apps: true,
  collections: true,
  features: true,
  dashboard: true,
  enterprises: true,
  enterprise: true,
  explore: true,
  issues: true,
  join: true,
  login: true,
  logout: true,
  marketplace: true,
  orgs: true,
  new: true,
  notifications: true,
  organizations: true,
  pricing: true,
  resources: true,
  pulls: true,
  readme: true,
  search: true,
  security: true,
  settings: true,
  site: true,
  solutions: true,
  sponsors: true,
  topics: true,
  trending: true,
};
const GITHUB_OWNER_PLACEHOLDERS: Record<string, true> = {
  org: true,
  owner: true,
  user: true,
  username: true,
  "your-org": true,
  "your-owner": true,
  "your-username": true,
};
const GITHUB_REPO_PLACEHOLDERS: Record<string, true> = {
  repo: true,
  repository: true,
  "repo-name": true,
  "repository-name": true,
  "your-repo": true,
  "your-repository": true,
};

export function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
  if (parsed.hostname !== "github.com" && parsed.hostname !== "www.github.com") return null;

  const segments = parsed.pathname.split("/").filter(Boolean);
  if (segments.length < 2) return null;

  const owner = segments[0]!;
  let repo = segments[1]!;
  if (/\.git$/i.test(repo)) repo = repo.slice(0, -".git".length);

  const ownerKey = owner.toLowerCase();
  const repoKey = repo.toLowerCase();
  const validOwner = owner.length <= 39
    && /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/.test(owner);
  const validRepo = repo.length <= 100
    && repo !== "."
    && repo !== ".."
    && /^[A-Za-z0-9._-]+$/.test(repo);
  if (
    !validOwner
    || !validRepo
    || RESERVED_GITHUB_ROUTE_OWNERS[ownerKey]
    || GITHUB_OWNER_PLACEHOLDERS[ownerKey]
    || GITHUB_REPO_PLACEHOLDERS[repoKey]
  ) {
    return null;
  }
  return { owner, repo };
}

export type GitHubRepoIdentity = {
  canonicalUrl: string;
  githubRepo: string;
  owner: string;
  repo: string;
};

export function resolveGitHubRepoDataIdentity(
  data: Pick<GitHubRepoData, "full_name" | "html_url">,
): GitHubRepoIdentity | null {
  const fromFullName = parseGitHubUrl(`https://github.com/${data.full_name}`);
  const fromHtmlUrl = parseGitHubUrl(data.html_url);
  if (
    !fromFullName
    || !fromHtmlUrl
    || fromFullName.owner.toLowerCase() !== fromHtmlUrl.owner.toLowerCase()
    || fromFullName.repo.toLowerCase() !== fromHtmlUrl.repo.toLowerCase()
  ) {
    return null;
  }
  const owner = fromHtmlUrl.owner.toLowerCase();
  const repo = fromHtmlUrl.repo.toLowerCase();
  return {
    canonicalUrl: `https://github.com/${owner}/${repo}`,
    githubRepo: `${owner}/${repo}`,
    owner,
    repo,
  };
}

export type GitHubRepoVerification = "exists" | "missing" | "unknown";

export type GitHubRepoLookup =
  | { status: "exists"; data: GitHubRepoData }
  | { status: "missing" }
  | { status: "unknown" };

function buildGitHubHeaders(token?: string): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (token) headers["Authorization"] = `token ${token}`;
  return headers;
}

export async function lookupGitHubRepo(owner: string, repo: string, token?: string): Promise<GitHubRepoLookup> {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers: buildGitHubHeaders(token) });
    if (!response.ok) {
      if (response.status === 404) return { status: "missing" };
      return { status: "unknown" };
    }

    const data = await response.json() as {
      full_name: string;
      html_url: string;
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
      status: "exists",
      data: {
        full_name: data.full_name,
        html_url: data.html_url,
        stars: data.stargazers_count,
        forks: data.forks_count,
        license: data.license?.spdx_id ?? null,
        archived: data.archived,
        created_at: data.created_at,
        pushed_at: data.pushed_at,
        description: data.description,
        homepage: data.homepage,
        topics: data.topics ?? [],
      },
    };
  } catch {
    return { status: "unknown" };
  }
}

export async function fetchGitHubRepo(
  owner: string,
  repo: string,
  token?: string
): Promise<GitHubRepoData | null> {
  const lookup = await lookupGitHubRepo(owner, repo, token);
  return lookup.status === "exists" ? lookup.data : null;
}

export async function verifyGitHubRepo(owner: string, repo: string, token?: string): Promise<GitHubRepoVerification> {
  const lookup = await lookupGitHubRepo(owner, repo, token);
  return lookup.status;
}

// Hard cap on raw README body we will read into memory, to defend against
// absurd payloads (e.g. binary checked in as README, or HTML disguised as
// markdown). 1 MiB is well above any reasonable README and well below the
// point where we would care about memory.
export const README_MAX_BYTES = 1024 * 1024;

export type GitHubReadmeResult = {
  body: string | null;
  status: number | null;
};

export async function fetchGitHubReadmeResult(
  owner: string,
  repo: string,
  token?: string
): Promise<GitHubReadmeResult> {
  const readmeUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3.raw",
  };
  if (token) {
    headers["Authorization"] = `token ${token}`;
  }

  try {
    let response = await fetch(readmeUrl, { headers });
    if (!response.ok && token && response.status === 403) {
      response = await fetch(readmeUrl, {
        headers: { Accept: "application/vnd.github.v3.raw" },
      });
    }
    if (!response.ok) return { body: null, status: response.status };
    const buf = Buffer.from(await response.arrayBuffer());
    if (buf.byteLength === 0) return { body: null, status: response.status };
    let capped = buf;
    if (buf.byteLength > README_MAX_BYTES) {
      let end = README_MAX_BYTES;
      while (end > 0 && (buf[end] & 0b1100_0000) === 0b1000_0000) {
        end--;
      }
      capped = buf.subarray(0, end);
    }
    const text = new TextDecoder("utf-8").decode(capped);
    if (!text) return { body: null, status: response.status };
    return { body: text, status: response.status };
  } catch {
    return { body: null, status: null };
  }
}

export async function fetchGitHubReadme(
  owner: string,
  repo: string,
  token?: string
): Promise<string | null> {
  return (await fetchGitHubReadmeResult(owner, repo, token)).body;
}
