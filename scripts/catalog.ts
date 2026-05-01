import { fileURLToPath } from "node:url";
import { runCategorize } from "./catalog/categorize.ts";
import { runDiscover } from "./catalog/discover.ts";
import { runRender } from "./catalog/render.ts";
import { runResync } from "./catalog/resync.ts";
import { runStars } from "./catalog/stars.ts";
import { runValidate } from "./catalog/validate.ts";

export { loadConfig, loadSources, loadCategories, loadCatalogItems, loadOverrides, saveCatalogItem } from "./catalog/data.ts";
export {
  makeItemId,
  makeItemPath,
  normalizeGitHubUrl,
  normalizeSourceCoverageUrl,
  normalizeLoadedItem,
  applyLifecycleRules,
  applyOverride,
  applyOverrides,
  applyPlacement,
  summarizeProcessingErrors,
  buildReviewReport,
  shouldFailOnProcessingErrors,
} from "./catalog/core.ts";
export type { ProcessingError } from "./catalog/core.ts";
export {
  makeDiscoveryId,
  buildDiscovery,
  buildNewCatalogItem,
  discover,
  discoverCandidates,
  orderDiscoverableSources,
  resolveSourceListNewItemLimit,
  selectSourceListDiscoveryCandidates,
} from "./catalog/discovery.ts";
export { readmeCachePath, readReadmeFromCache } from "./catalog/readme-cache.ts";
export {
  validateSources,
  validateCatalogItem,
  validateCatalogItems,
  validateOverride,
  validateOverridesUniqueness,
  runValidate as cmdValidate,
} from "./catalog/validate.ts";
export type { ValidationError } from "./catalog/validate.ts";
export { resolveDirectDiscoveryConcurrency, runDiscover } from "./catalog/discover.ts";
export {
  shouldRefreshMetadata,
  resolveGitHubEnrichmentConcurrency,
  selectStarRefreshTargets,
  refreshItemStars,
  enrichWithGitHub,
  runStars,
} from "./catalog/stars.ts";
export {
  applyAIInsights,
  CATALOG_CATEGORIZE_PROMPT_VERSION,
  enrichWithAIInsights,
  isClassificationReady,
  markExcludedItemsPending,
  materializeCatalogState,
  needsAIInsights,
  resolveAIInsightBudgetMs,
  resolveAIInsightConcurrency,
  runCategorize,
} from "./catalog/categorize.ts";
export {
  renderReadme,
  renderRabbitHolePage,
  renderSiteCatalog,
  runRender,
  writeRabbitHolePage,
  writeReadme,
  writeSiteCatalog,
} from "./catalog/render.ts";
export { runResync, selectResyncItems } from "./catalog/resync.ts";

export type SyncCommandDeps = {
  discover: () => Promise<void>;
  stars: () => Promise<void>;
  categorize: () => Promise<void>;
  render: () => Promise<void>;
  validate: () => Promise<void>;
};

export async function runSync(
  token?: string,
  deps: Partial<SyncCommandDeps> = {},
): Promise<void> {
  const commands: SyncCommandDeps = {
    discover: deps.discover ?? (() => runDiscover(token)),
    stars: deps.stars ?? (() => runStars(token)),
    categorize: deps.categorize ?? (() => runCategorize(token)),
    render: deps.render ?? (() => Promise.resolve(runRender())),
    validate: deps.validate ?? (() => Promise.resolve(runValidate())),
  };

  await commands.discover();
  await commands.stars();
  await commands.categorize();
  await commands.render();
  await commands.validate();
}

export function createCatalogCommandMap(token?: string, argv: string[] = []) {
  return {
    discover: () => runDiscover(token),
    stars: () => runStars(token),
    categorize: () => runCategorize(token),
    render: () => runRender(),
    validate: () => runValidate(),
    resync: () => runResync(argv, token),
    sync: () => runSync(token),
  };
}

type CatalogCommandMap = ReturnType<typeof createCatalogCommandMap>;
type CatalogCommandName = keyof CatalogCommandMap;

export function hasCatalogCommand(commands: CatalogCommandMap, command: string | undefined): command is CatalogCommandName {
  return typeof command === "string" && Object.hasOwn(commands, command);
}

const command = process.argv[2];
const args = process.argv.slice(3);
const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
const commands = createCatalogCommandMap(token, args);
const isDirectCliEntry = process.argv[1] ? process.argv[1] === fileURLToPath(import.meta.url) : false;

if (isDirectCliEntry) {
  if (!hasCatalogCommand(commands, command)) {
    console.error("Usage: npm run catalog -- [discover|stars|categorize|render|validate|sync|resync]");
    process.exit(1);
  }

  commands[command]().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
