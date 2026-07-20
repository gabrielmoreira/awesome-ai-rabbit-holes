import { loadCatalogItems } from "./data.ts";
import {
  buildCatalogProcessingGapReport,
  renderCatalogProcessingGapReport,
  shouldFailOnProcessingErrors,
} from "./reporting.ts";
import type { CatalogItem } from "./types.ts";

export type GapsDeps = {
  loadItems: () => CatalogItem[];
  log: (message: string) => void;
  env: NodeJS.ProcessEnv;
};

function parseGapsArgs(argv: string[]): { all: boolean } {
  const all = argv.includes("--all");
  const unknown = argv.find((arg) => arg !== "--all");
  if (unknown) {
    throw new Error(`Unknown catalog:gaps argument: ${unknown}`);
  }
  return { all };
}

export function runGaps(argv: string[] = [], deps: Partial<GapsDeps> = {}): void {
  const options = parseGapsArgs(argv);
  const resolvedDeps: GapsDeps = {
    loadItems: deps.loadItems ?? loadCatalogItems,
    log: deps.log ?? console.log,
    env: deps.env ?? process.env,
  };
  const report = buildCatalogProcessingGapReport(resolvedDeps.loadItems());
  resolvedDeps.log(renderCatalogProcessingGapReport(report, { maxEntriesPerSection: options.all ? 0 : 20 }));
  if (shouldFailOnProcessingErrors(resolvedDeps.env) && report.processingFailureCount > 0) {
    throw new Error(`Catalog processing gaps include ${report.processingFailureCount} failed item(s)`);
  }
}
