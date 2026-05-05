import {
  buildInsightPrompt,
  DEFAULT_INSIGHT_PROMPT_PROFILE,
  formatCategoryPromptEntries,
  type AIInsightRequest,
  type InsightPromptProfile,
} from "./categorize-prompt.ts";
import { readReadmeFromCache } from "./readme-cache.ts";
import { loadSourceContextLinesForItem } from "./source-lists.ts";
import { readWebsiteLinkResolution } from "./website-links.ts";
import type { CatalogItem, Category } from "./types.ts";

export type CatalogInsightContext = Pick<AIInsightRequest, "readme" | "source_contexts" | "website_context">;

export type CatalogInsightPromptDeps = {
  readReadmeFromCache?: (owner: string, repo: string) => string | null;
  loadSourceContextLinesForItem?: (item: CatalogItem) => string[];
  readWebsiteLinkResolution?: (url: string) => AIInsightRequest["website_context"] | null;
};

export function loadCatalogInsightContext(
  item: CatalogItem,
  deps: CatalogInsightPromptDeps = {},
): CatalogInsightContext {
  const readReadme = deps.readReadmeFromCache ?? readReadmeFromCache;
  const loadSourceContexts = deps.loadSourceContextLinesForItem ?? loadSourceContextLinesForItem;
  const readWebsiteContext = deps.readWebsiteLinkResolution ?? readWebsiteLinkResolution;

  const readme =
    item.kind === "github-repo" && item.identity.github_repo
      ? (() => {
          const [owner, repo] = item.identity.github_repo.split("/");
          return owner && repo ? readReadme(owner, repo) : null;
        })()
      : null;

  const websiteContext = item.kind === "website" ? readWebsiteContext(item.canonical_url) : null;
  return {
    readme,
    source_contexts: loadSourceContexts(item),
    website_context: websiteContext
      ? {
          title: websiteContext.title ?? null,
          description: websiteContext.description ?? null,
          excerpt: websiteContext.excerpt ?? null,
        }
      : undefined,
  };
}

export function buildCatalogInsightPrompt(
  item: CatalogItem,
  categories: Category[],
  options: { profile?: InsightPromptProfile; deps?: CatalogInsightPromptDeps } = {},
): string {
  const profile = options.profile ?? DEFAULT_INSIGHT_PROMPT_PROFILE;
  return buildInsightPrompt(
    {
      item,
      categories: formatCategoryPromptEntries(categories, { includeSections: profile !== "baseline-current" }),
      ...loadCatalogInsightContext(item, options.deps),
    },
    { profile },
  );
}
