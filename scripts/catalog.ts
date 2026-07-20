import { fileURLToPath } from "node:url";
import { runCategorize } from "./catalog/categorize.ts";
import { runDiscover } from "./catalog/discover.ts";
import { runEvals } from "./catalog/evals.ts";
import { runGaps } from "./catalog/gaps.ts";
import { runRender } from "./catalog/render.ts";
import { runClean } from "./catalog/clean.ts";
import { runRepair } from "./catalog/repair.ts";
import type { RunRepairOptions } from "./catalog/repair.ts";
import { runResync } from "./catalog/resync.ts";
import { runStars } from "./catalog/stars.ts";
import { runValidate } from "./catalog/validate.ts";
export { loadSources, loadCategories, loadCatalogItems, loadGeneratedCatalogItems, saveCatalogItem } from "./catalog/data.ts";
export {
  makeItemId,
  makeItemPath,
  normalizeGitHubUrl,
  normalizeCatalogUrl,
  normalizeSourceCoverageUrl,
  normalizeLoadedItem,
  applyLifecycleRules,
  applyPlacement,
} from "./catalog/core.ts";
export {
  buildCatalogProcessingGapReport,
  buildReviewReport,
  renderCatalogProcessingGapReport,
  shouldFailOnProcessingErrors,
  summarizeDistinctCounts,
  summarizeProcessingErrors,
} from "./catalog/reporting.ts";
export type { ProcessingError } from "./catalog/core.ts";
export {
  makeDiscoveryId,
  buildDiscovery,
  buildNewCatalogItem,
  discover,
  reconcileDiscoveryCandidates,
  orderDiscoverableSources,
  resolveSourceListNewItemLimit,
  selectSourceListDiscoveryCandidates,
} from "./catalog/discovery.ts";
export { readmeCachePath, readReadmeFromCache } from "./catalog/readme-cache.ts";
export {
  validateSources,
  validateCatalogItem,
  validateCatalogItems,
  validateCatalogState,
  runValidate as cmdValidate,
} from "./catalog/validate.ts";
export type { ValidationError } from "./catalog/validate.ts";
export { resolveDirectDiscoveryConcurrency, runDiscover } from "./catalog/discover.ts";
export {
  shouldRefreshMetadata,
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
export { runEvals } from "./catalog/evals.ts";
export { listCleanTargets, resolveCleanSelection, runClean } from "./catalog/clean.ts";
export {
  repairCatalogItems,
  resolveCatalogRepairTarget,
  runRepair,
  selectRepairCandidates,
  selectAutomaticSafeRepairCandidates,
} from "./catalog/repair.ts";
export { runGaps } from "./catalog/gaps.ts";

export type SyncCommandDeps = {
  discover: () => Promise<void>;
  stars: () => Promise<void>;
  repair?: (options?: RunRepairOptions) => Promise<void>;
  categorize: () => Promise<void>;
  render: () => Promise<void>;
  validate: () => Promise<void>;
};

export type CatalogCommandDeps = {
  clean: (argv: string[]) => Promise<void> | void;
  discover: (token?: string) => Promise<void> | void;
  stars: (token?: string) => Promise<void> | void;
  categorize: (token?: string) => Promise<void> | void;
  evals: (argv: string[]) => Promise<void> | void;
  gaps: (argv: string[]) => Promise<void> | void;
  repair: (token?: string) => Promise<void> | void;
  render: () => Promise<void> | void;
  validate: () => Promise<void> | void;
  resync: (argv: string[], token?: string) => Promise<void> | void;
  sync: (token?: string) => Promise<void> | void;
};

export async function runSync(
  token?: string,
  deps: Partial<SyncCommandDeps> = {},
): Promise<void> {
  const commands = {
    discover: deps.discover ?? (() => runDiscover(token)),
    stars: deps.stars ?? (() => runStars(token)),
    categorize: deps.categorize ?? (() => runCategorize(token)),
    render: deps.render ?? (() => Promise.resolve(runRender())),
    validate: deps.validate ?? (() => Promise.resolve(runValidate())),
  };
  const hasCompleteLegacyDeps = Boolean(
    deps.discover && deps.stars && deps.categorize && deps.render && deps.validate,
  );
  const repair = deps.repair ?? (hasCompleteLegacyDeps ? null : (options?: RunRepairOptions) => runRepair(token, {}, options));

  await commands.discover();
  await commands.stars();
  if (repair) await repair({ mode: "automatic-safe" });
  await commands.categorize();
  await commands.render();
  await commands.validate();
}

export function createCatalogCommandMap(
  token?: string,
  argv: string[] = [],
  deps: Partial<CatalogCommandDeps> = {},
) {
  return {
    clean: () => Promise.resolve().then(() => (deps.clean ? deps.clean(argv) : runClean(argv))),
    discover: () => Promise.resolve().then(() => (deps.discover ? deps.discover(token) : runDiscover(token))),
    stars: () => Promise.resolve().then(() => (deps.stars ? deps.stars(token) : runStars(token))),
    categorize: () => Promise.resolve().then(() => (deps.categorize ? deps.categorize(token) : runCategorize(token))),
    evals: () => Promise.resolve().then(() => (deps.evals ? deps.evals(argv) : runEvals(argv))),
    gaps: () => Promise.resolve().then(() => (deps.gaps ? deps.gaps(argv) : runGaps(argv))),
    repair: () => Promise.resolve().then(() => (deps.repair ? deps.repair(token) : runRepair(token))),
    render: () => Promise.resolve().then(() => (deps.render ? deps.render() : runRender())),
    validate: () => Promise.resolve().then(() => (deps.validate ? deps.validate() : runValidate())),
    resync: () => Promise.resolve().then(() => (deps.resync ? deps.resync(argv, token) : runResync(argv, token))),
    sync: () => Promise.resolve().then(() => (deps.sync ? deps.sync(token) : runSync(token))),
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
    console.error("Usage: npm run catalog -- [clean|discover|stars|categorize|evals|gaps|repair|render|validate|sync|resync]");
    process.exit(1);
  }

  commands[command]().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
