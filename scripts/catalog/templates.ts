import * as fs from "node:fs";
import { Environment } from "nunjucks";

const TEMPLATE_ENV = new Environment(null, {
  autoescape: false,
  throwOnUndefined: true,
});

const TEMPLATE_CACHE = new Map<string, string>();

const PROMPT_TEMPLATE_FILES = {
  "baseline-current": "categorize-baseline-current.njk",
  "definition-first": "categorize-definition.njk",
  "definition-with-examples": "categorize-definition.njk",
} as const;

export type InsightPromptTemplateProfile = keyof typeof PROMPT_TEMPLATE_FILES;

export type CatalogReadmeTemplateViewModel = {
  rabbitHoles: Array<{
    name: string;
    slug: string;
    description: string;
  }>;
};

export type CatalogCategoryItemTemplateViewModel = {
  name: string;
  url: string;
  summary: string;
  hasStars: boolean;
  starsLabel: string | null;
  hasActivity: boolean;
  activityLabel: string | null;
  hasDetails: boolean;
  hasWhyItMatters: boolean;
  whyItMatters: string | null;
  hasMentalDamage: boolean;
  mentalDamage: string | null;
  hasTags: boolean;
  tags: string[];
};

export type CatalogCategoryPageTemplateViewModel = {
  categoryName: string;
  categoryDescription: string;
  hasActiveItems: boolean;
  activeItems: CatalogCategoryItemTemplateViewModel[];
  hasIncubatingItems: boolean;
  incubatingItems: CatalogCategoryItemTemplateViewModel[];
  isEmpty: boolean;
};

export type CatalogInsightPromptTemplateViewModel = {
  profile: InsightPromptTemplateProfile;
  item: {
    name: string;
    url: string;
    repoDescription: string;
    stars: string;
    topics: string;
    license: string;
    archived: string;
    createdAt: string;
    pushedAt: string;
    homepage: string;
    directAwesomeList: string;
  };
  categoryLines: string[];
  hasSourceContext: boolean;
  sourceContextLines: string[];
  hasWebsiteContext: boolean;
  websiteTitle: string;
  websiteDescription: string;
  hasWebsiteExcerpt: boolean;
  websiteExcerpt: string;
  hasReadmeExcerpt: boolean;
  readmeExcerpt: string;
};

export function resolveCatalogTemplateFileUrl(fileName: string): URL {
  return new URL(`../../config/templates/${fileName}`, import.meta.url);
}

function readTemplateFile(fileName: string): string {
  const cacheKey = fileName;
  const cached = TEMPLATE_CACHE.get(cacheKey);
  if (cached) return cached;

  const template = fs.readFileSync(resolveCatalogTemplateFileUrl(fileName), "utf8");
  TEMPLATE_CACHE.set(cacheKey, template);
  return template;
}

function renderTemplateFile<TViewModel extends object>(fileName: string, viewModel: TViewModel): string {
  return TEMPLATE_ENV.renderString(readTemplateFile(fileName), viewModel).replace(/\r\n/g, "\n").trimStart();
}

export function renderCatalogReadmeTemplate(viewModel: CatalogReadmeTemplateViewModel): string {
  return `${renderTemplateFile("readme.njk", viewModel).trimEnd()}\n`;
}

export function renderCatalogCategoryPageTemplate(viewModel: CatalogCategoryPageTemplateViewModel): string {
  return renderTemplateFile("category-page.njk", viewModel).trimEnd();
}

export function renderCatalogInsightPromptTemplate(viewModel: CatalogInsightPromptTemplateViewModel): string {
  return renderTemplateFile(PROMPT_TEMPLATE_FILES[viewModel.profile], {
    ...viewModel,
    includeExamples: viewModel.profile === "definition-with-examples",
  }).trimEnd();
}
