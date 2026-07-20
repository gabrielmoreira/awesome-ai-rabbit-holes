import { describe, expect, it } from "vitest";
import { makeItemId, normalizeCatalogUrl, normalizeSourceCoverageUrl } from "../scripts/catalog/core.js";
import { parseGitHubUrl } from "../scripts/support/github.js";
import { enrichWithGitHub } from "../scripts/catalog/stars.js";
import { repairCatalogItems, resolveCatalogRepairTarget, runRepair, selectRepairCandidates } from "../scripts/catalog/repair.js";
import { resolveBestGitHubRepoUrl, resolvePublicWebsiteCanonicalUrl, resolveWebsiteLink } from "../scripts/catalog/website-links.js";
import { runSync } from "../scripts/catalog.js";
import type { CatalogItem } from "../scripts/catalog/types.js";

function makeGitHubItem(overrides: Partial<CatalogItem> = {}): CatalogItem {
  return {
    id: "github__legacy-owner__legacy-repo",
    kind: "github-repo",
    name: "legacy-repo",
    canonical_url: "https://github.com/legacy-owner/legacy-repo",
    identity: { github_repo: "legacy-owner/legacy-repo" },
    provenance: {
      discoveries: [
        {
          id: "discovery__github__legacy-owner__legacy-repo__direct-link",
          discovered_at: "2026-07-01T00:00:00Z",
          source: { type: "direct-link", name: "Manual submission", url: null, repository: null },
          extraction: {
            mode: "direct",
            section_path: ["inbox"],
            anchor_text: "Legacy Repo",
            extracted_url: "https://github.com/legacy-owner/legacy-repo",
            surrounding_text: null,
            confidence: "high",
          },
        },
      ],
    },
    metadata: {
      github: {
        stars: 1,
        forks: 0,
        license: null,
        archived: false,
        created_at: "2025-01-01T00:00:00Z",
        pushed_at: "2026-07-01T00:00:00Z",
        description: "A moved repository",
        homepage: null,
        topics: [],
        last_checked_at: "2026-07-01T00:00:00Z",
      },
    },
    insights: { summary: null, why_it_matters: null, mental_damage: null, tags: [], confidence: null },
    curation: { status: "pending", reason: null, evidence: [] },
    placement: { primary_category: null, section: null },
    lifecycle: { status: "incubating" },
    processing: {
      discover: { status: "done", updated_at: "2026-07-01T00:00:00Z", cause: null },
      stars: { status: "pending", updated_at: null, cause: null },
      categorize: { status: "pending", updated_at: null, cause: null },
    },
    ...overrides,
  };
}

function responseAt(url: string, html: string): Response {
  const response = new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
  Object.defineProperty(response, "url", { value: url });
  return response;
}

let websiteSequence = 0;
async function resolveCanonicalFixture(canonicalHref: string): Promise<{ finalUrl: string; canonicalUrl: string }> {
  websiteSequence += 1;
  const finalUrl = `https://docs-${process.pid}-${Date.now()}-${websiteSequence}.example.com/guides/start`;
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => responseAt(
    finalUrl,
    `<html><head><link rel="canonical" href="${canonicalHref}"></head><body>Product docs</body></html>`,
  );
  try {
    const resolution = await resolveWebsiteLink(finalUrl, undefined, async () => [{ address: "8.8.8.8" }]);
    return { finalUrl: normalizeCatalogUrl(finalUrl), canonicalUrl: resolution.canonical_url };
  } finally {
    globalThis.fetch = originalFetch;
  }
}

describe("catalog identity foundation", () => {
  it("normalizes protocol, one www prefix, default ports, query, hash, and trailing slash without losing the path", () => {
    const raw = "http://WWW.Example.COM:80/Docs/Guide/?utm_source=audit#section";
    const normalized = "https://example.com/Docs/Guide";

    expect(normalizeCatalogUrl(raw)).toBe(normalized);
    expect(normalizeSourceCoverageUrl(raw)).toBe(normalized);
    expect(makeItemId(raw)).toBe(makeItemId(normalized));
    expect(normalizeCatalogUrl("https://www.www.example.com:443/path/")).toBe("https://www.example.com/path");
    expect(normalizeCatalogUrl("https://example.com:80/path")).toBe("https://example.com:80/path");
  });

  it("rejects reserved GitHub routes and placeholder owner/repo pairs while preserving real subpaths and .git", () => {
    for (const route of ["features", "orgs", "topics", "marketplace", "collections", "sponsors", "apps", "about", "trending"]) {
      expect(parseGitHubUrl(`https://github.com/${route}/anything`)).toBeNull();
    }
    expect(parseGitHubUrl("https://github.com/owner/repo")).toBeNull();
    expect(parseGitHubUrl("https://github.com/your-org/your-repo")).toBeNull();
    expect(parseGitHubUrl("https://github.com/settings/profile")).toBeNull();
    expect(parseGitHubUrl("https://github.com/search/advanced")).toBeNull();
    expect(parseGitHubUrl("https://github.com/solutions/use-case")).toBeNull();
    expect(parseGitHubUrl("https://github.com/enterprise/contact")).toBeNull();
    expect(parseGitHubUrl("https://github.com/readme/featured")).toBeNull();
    expect(parseGitHubUrl("https://github.com/Real-Owner/Real.Repo.git/tree/main/docs")).toEqual({
      owner: "Real-Owner",
      repo: "Real.Repo",
    });
  });

  it("rejects a loopback page canonical and falls back to the public final URL", async () => {
    const resolved = await resolveCanonicalFixture("http://localhost:3000/private");
    expect(resolved.canonicalUrl).toBe(resolved.finalUrl);
  });

  it("rejects a same-site canonical whose DNS evidence resolves to a private address", async () => {
    const finalUrl = "https://docs.example.com/guides/start";
    for (const privateAddress of ["0:0:0:0:0:0:0:1", "fec0::1"]) {
      const canonicalUrl = await resolvePublicWebsiteCanonicalUrl(
        finalUrl,
        ["https://docs.example.com/product"],
        async () => [{ address: privateAddress }],
      );
      expect(canonicalUrl).toBe(finalUrl);
    }
  });

  it("rejects an unrelated registrable-domain canonical and keeps same-domain canonicals", async () => {
    const unrelated = await resolveCanonicalFixture("https://unrelated.example.net/product");
    expect(unrelated.canonicalUrl).toBe(unrelated.finalUrl);

    const sameDomain = await resolveCanonicalFixture("/product/");
    expect(sameDomain.canonicalUrl).toBe(normalizeCatalogUrl(new URL("/product", sameDomain.finalUrl).toString()));

    const publicIpFinalUrl = "https://8.8.8.8/docs";
    const unrelatedPublicIp = await resolvePublicWebsiteCanonicalUrl(
      publicIpFinalUrl,
      ["https://1.1.1.1/product"],
      async () => [{ address: "1.1.1.1" }],
    );
    expect(unrelatedPublicIp).toBe(publicIpFinalUrl);
  });

  it("records consistent GitHub API rename evidence and repairs the stale identity without losing provenance", async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async (input) => {
      const url = String(input);
      if (url.endsWith("/readme")) return new Response(null, { status: 404 });
      return Response.json({
        full_name: "canonical-owner/canonical-repo",
        html_url: "https://github.com/canonical-owner/canonical-repo",
        stargazers_count: 42,
        forks_count: 3,
        license: { spdx_id: "MIT" },
        archived: false,
        created_at: "2025-01-01T00:00:00Z",
        pushed_at: "2026-07-15T00:00:00Z",
        description: "Moved repository",
        homepage: null,
        topics: ["agents"],
      });
    };

    const original = makeGitHubItem({
      metadata: {
        github: {
          ...makeGitHubItem().metadata.github,
          homepage: "https://stale.example.com",
        },
      },
      curation: { status: "included", reason: "verified", evidence: ["manual review"] },
      placement: {
        primary_category: "coding-agents",
        secondary_categories: ["agent-frameworks"],
        section: "Developer Tools",
      },
    });
    try {
      const enriched = await enrichWithGitHub(original);
      expect(enriched.id).toBe(original.id);
      expect(enriched.canonical_url).toBe(original.canonical_url);
      expect(enriched.identity.github_repo).toBe(original.identity.github_repo);
      expect(enriched.metadata.github.full_name).toBe("canonical-owner/canonical-repo");
      expect(enriched.metadata.github.html_url).toBe("https://github.com/canonical-owner/canonical-repo");
      expect(selectRepairCandidates([enriched])).toEqual([enriched]);

      const plan = repairCatalogItems(
        [enriched],
        new Map([[enriched.id, { canonicalUrl: enriched.canonical_url, cause: "unchanged" }]]),
      );
      expect(plan.items).toHaveLength(1);
      expect(plan.items[0]?.id).toBe("github__canonical-owner__canonical-repo");
      expect(plan.items[0]?.provenance.discoveries).toEqual(original.provenance.discoveries);
      expect(plan.items[0]?.placement.secondary_categories).toEqual(["agent-frameworks"]);

      const staleAliasPlan = repairCatalogItems(
        [original, enriched],
        new Map([[original.id, { canonicalUrl: original.canonical_url, cause: "unchanged" }]]),
      );
      expect(staleAliasPlan.items).toHaveLength(1);
      expect(staleAliasPlan.items[0]?.canonical_url).toBe("https://github.com/canonical-owner/canonical-repo");
      expect(staleAliasPlan.items[0]?.metadata.github.homepage).toBeNull();
      expect(staleAliasPlan.items[0]?.placement.secondary_categories).toEqual(["agent-frameworks"]);

      const freshApiPlan = repairCatalogItems(
        [original, enriched],
        new Map([[
          original.id,
          { canonicalUrl: "https://github.com/fresh-owner/fresh-repo", cause: "github_alias" },
        ]]),
      );
      expect(freshApiPlan.items).toHaveLength(1);
      expect(freshApiPlan.items[0]?.canonical_url).toBe("https://github.com/fresh-owner/fresh-repo");

      const conflicting = {
        ...enriched,
        canonical_url: "https://github.com/other-owner/other-repo",
        identity: { github_repo: "other-owner/other-repo" },
        metadata: {
          github: {
            ...enriched.metadata.github,
            full_name: "other-owner/other-repo",
            html_url: "https://github.com/other-owner/other-repo",
          },
        },
      };
      const ambiguousPlan = repairCatalogItems([original, enriched, conflicting], new Map());
      expect(ambiguousPlan.items.map((item) => item.canonical_url).sort()).toEqual([
        original.canonical_url,
        conflicting.canonical_url,
      ].sort());
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it("prefers unique fresh GitHub alias evidence when duplicate resolutions share a stale ID", async () => {
    const original = makeGitHubItem();
    const renamed: CatalogItem = {
      ...original,
      canonical_url: "https://github.com/canonical-owner/canonical-repo",
      identity: { github_repo: "canonical-owner/canonical-repo" },
    };
    const saved: CatalogItem[] = [];

    await runRepair(undefined, {
      loadItems: () => [original, renamed],
      resolveTarget: async (item) => item.canonical_url === original.canonical_url
        ? { canonicalUrl: "https://github.com/fresh-owner/fresh-repo", cause: "github_alias" }
        : { canonicalUrl: renamed.canonical_url, cause: "unchanged" },
      saveItem: (item) => {
        saved.push(item);
      },
      removePath: () => {},
    });

    expect(saved).toHaveLength(1);
    expect(saved[0]?.canonical_url).toBe("https://github.com/fresh-owner/fresh-repo");
  });

  it("ignores inconsistent GitHub API rename fields during repair resolution", async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async () => Response.json({
      full_name: "canonical-owner/canonical-repo",
      html_url: "https://github.com/different-owner/different-repo",
      stargazers_count: 1,
      forks_count: 0,
      license: null,
      archived: false,
      created_at: "2025-01-01T00:00:00Z",
      pushed_at: "2026-07-15T00:00:00Z",
      description: null,
      homepage: null,
      topics: [],
    });
    try {
      await expect(resolveCatalogRepairTarget(makeGitHubItem())).resolves.toEqual({
        canonicalUrl: "https://github.com/legacy-owner/legacy-repo",
        cause: "unchanged",
      });
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it("rejects inconsistent GitHub link lookup identity evidence", async () => {
    const originalFetch = globalThis.fetch;
    globalThis.fetch = async () => Response.json({
      full_name: "canonical-owner/canonical-repo",
      html_url: "https://github.com/different-owner/different-repo",
      stargazers_count: 1,
      forks_count: 0,
      license: null,
      archived: false,
      created_at: "2025-01-01T00:00:00Z",
      pushed_at: "2026-07-15T00:00:00Z",
      description: null,
      homepage: null,
      topics: [],
    });
    try {
      await expect(resolveBestGitHubRepoUrl(
        [{ url: "https://github.com/canonical-owner/canonical-repo", score: 100 }],
        ["canonical-repo"],
      )).resolves.toBeNull();
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it("reuses a fresh sanitized website resolution cache entry", async () => {
    const finalUrl = `https://example.com/foundation-cache-${process.pid}-${Date.now()}`;
    const originalFetch = globalThis.fetch;
    let fetchCalls = 0;
    globalThis.fetch = async () => {
      fetchCalls += 1;
      return responseAt(finalUrl, "<html><head><link rel=\"canonical\" href=\"/product\"></head></html>");
    };
    const lookupHost = async () => [{ address: "8.8.8.8" }];
    try {
      await resolveWebsiteLink(finalUrl, undefined, lookupHost);
      await resolveWebsiteLink(finalUrl, undefined, lookupHost);
      expect(fetchCalls).toBe(1);
    } finally {
      globalThis.fetch = originalFetch;
    }
  });

  it("selects normalized URL duplicate groups without relying on similar names", () => {
    const first = makeGitHubItem({
      id: makeItemId("http://www.product.example.com/docs/"),
      kind: "website",
      name: "Alpha",
      canonical_url: "http://www.product.example.com/docs/",
      identity: {},
    });
    const second = makeGitHubItem({
      id: makeItemId("https://product.example.com/docs"),
      kind: "website",
      name: "Completely Different",
      canonical_url: "https://product.example.com/docs",
      identity: {},
    });

    expect(selectRepairCandidates([first, second])).toEqual([first, second]);
  });

  it("persists normalized duplicate spelling and removes the legacy website path", () => {
    const rawUrl = "http://www.product.example.com/docs/";
    const canonicalUrl = "https://product.example.com/docs";
    const first = makeGitHubItem({
      id: makeItemId(rawUrl),
      kind: "website",
      name: "Product",
      canonical_url: rawUrl,
      identity: {},
    });
    const second = makeGitHubItem({
      id: makeItemId(canonicalUrl),
      kind: "website",
      name: "Product",
      canonical_url: canonicalUrl,
      identity: {},
    });

    const plan = repairCatalogItems([first, second], new Map());
    expect(plan.items).toHaveLength(1);
    expect(plan.items[0]?.canonical_url).toBe(canonicalUrl);
    expect(plan.removedPaths.map((filePath) => filePath.replaceAll("\\", "/"))).toContainEqual(
      expect.stringMatching(/\/catalog\/items\/www__product__example__com__docs__\.yml$/),
    );
  });

  it("runs automatic-safe repair after stars and before categorization during sync", async () => {
    const calls: string[] = [];
    await runSync(undefined, {
      discover: async () => { calls.push("discover"); },
      stars: async () => { calls.push("stars"); },
      repair: async (options) => {
        expect(options).toEqual({ mode: "automatic-safe" });
        calls.push("repair");
      },
      categorize: async () => { calls.push("categorize"); },
      render: async () => { calls.push("render"); },
      validate: async () => { calls.push("validate"); },
    });

    expect(calls).toEqual(["discover", "stars", "repair", "categorize", "render", "validate"]);
  });
});
