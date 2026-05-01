import { runCopilotPrompt } from "./copilot.ts";

export function resolveCatalogAIModel(
  requestedModel?: string | null,
  env: NodeJS.ProcessEnv = process.env
): string {
  if (requestedModel && requestedModel.trim().length > 0) return requestedModel.trim();

  const catalogModel = env["CATALOG_AI_MODEL"];
  if (catalogModel && catalogModel.trim().length > 0) return catalogModel.trim();

  const copilotModel = env["COPILOT_MODEL"];
  if (copilotModel && copilotModel.trim().length > 0) return copilotModel.trim();

  return "gpt-5.2";
}

export async function runCatalogAIPrompt(
  prompt: string,
  options: { model?: string | null } = {}
): Promise<string> {
  const resolvedModel = resolveCatalogAIModel(options.model);
  return runCopilotPrompt(prompt, { model: resolvedModel });
}
