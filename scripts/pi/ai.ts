import { complete, getEnvApiKey, getModel, type AssistantMessage, type Context } from "@mariozechner/pi-ai";
import {
  clearPiFreeRecentFailure,
  filterPiFreeRecentFailures,
  isPiFreeRetryableError,
  listPiFreeRecentFailureRecords,
  normalizePiFreeEnv,
  parsePiFreeModelSpec,
  recordPiFreeRecentFailure,
  resetPiFreeRecentFailures,
  resolvePiFreeStartupCandidates,
  type PiFreeEnvValues,
} from "./models.ts";

export type RunPiFreeTextPromptOptions = {
  model?: string | null;
  candidates?: string[] | null;
  timeoutMs?: number | null;
  env?: PiFreeEnvValues;
  allowFallback?: boolean | null;
  rememberFailures?: boolean | null;
};

export type PiFreeTextPromptResult = {
  model: string;
  text: string;
};

export type RunPiFreeTextPromptDeps = {
  getModel?: (provider: string, modelId: string) => ReturnType<typeof getModel>;
  complete?: typeof complete;
};

function buildUserPrompt(prompt: string): Context {
  return {
    messages: [{ role: "user", content: prompt, timestamp: Date.now() }],
  };
}

const LEGACY_PI_AI_MODEL_OVERRIDES: Record<string, { provider: string; modelId: string }> = {
  "cloudflare/@cf/google/gemma-4-26b-a4b-it": { provider: "cloudflare-workers-ai", modelId: "@cf/google/gemma-4-26b-a4b-it" },
  "cloudflare/@cf/meta/llama-4-scout-17b-16e-instruct": { provider: "cloudflare-workers-ai", modelId: "@cf/meta/llama-4-scout-17b-16e-instruct" },
  "cloudflare/@cf/moonshotai/kimi-k2.5": { provider: "cloudflare-workers-ai", modelId: "@cf/moonshotai/kimi-k2.5" },
  "cloudflare/@cf/moonshotai/kimi-k2.6": { provider: "cloudflare-workers-ai", modelId: "@cf/moonshotai/kimi-k2.6" },
  "cloudflare/@cf/nvidia/nemotron-3-120b-a12b": { provider: "cloudflare-workers-ai", modelId: "@cf/nvidia/nemotron-3-120b-a12b" },
  "cloudflare/@cf/openai/gpt-oss-120b": { provider: "cloudflare-workers-ai", modelId: "@cf/openai/gpt-oss-120b" },
  "cloudflare/@cf/openai/gpt-oss-20b": { provider: "cloudflare-workers-ai", modelId: "@cf/openai/gpt-oss-20b" },
  "cloudflare/@cf/zai-org/glm-4.7-flash": { provider: "cloudflare-workers-ai", modelId: "@cf/zai-org/glm-4.7-flash" },
  "nvidia/minimaxai/minimax-m2.7": { provider: "minimax", modelId: "MiniMax-M2.7" },
  "nvidia/moonshotai/kimi-k2-thinking": { provider: "moonshotai", modelId: "kimi-k2-thinking" },
  "nvidia/moonshotai/kimi-k2.6": { provider: "moonshotai", modelId: "kimi-k2.6" },
  "nvidia/z-ai/glm-5.1": { provider: "zai", modelId: "glm-5.1" },
  "nvidia/z-ai/glm4.7": { provider: "zai", modelId: "glm-4.7" },
};

export function resolvePiAiModelSpec(modelKey: string): { provider: string; modelId: string } | null {
  const normalized = modelKey.trim();
  if (!normalized) return null;

  const override = LEGACY_PI_AI_MODEL_OVERRIDES[normalized];
  if (override) return override;

  const parsed = parsePiFreeModelSpec(normalized);
  if (!parsed) return null;
  if (parsed.provider === "cloudflare") {
    return { provider: "cloudflare-workers-ai", modelId: parsed.id };
  }
  return { provider: parsed.provider, modelId: parsed.id };
}
function extractTextContent(message: AssistantMessage): string {
  return message.content
    .filter((block): block is Extract<AssistantMessage["content"][number], { type: "text" }> => block.type === "text")
    .map((block) => block.text)
    .join("")
    .trim();
}

function normalizeFailureMessage(message: AssistantMessage, timeoutMs: number | null): string {
  if (message.stopReason === "aborted") {
    return timeoutMs != null && timeoutMs > 0 ? `timed out after ${timeoutMs}ms` : "request was aborted";
  }
  if (typeof message.errorMessage === "string" && message.errorMessage.trim().length > 0) {
    return message.errorMessage.trim();
  }
  const text = extractTextContent(message);
  if (text.length > 0) return text;
  if (message.stopReason === "toolUse") return "provider unexpectedly requested tool use";
  return `provider stop reason: ${message.stopReason}`;
}

function resolvePromptCandidates(options: RunPiFreeTextPromptOptions): string[] {
  const explicitModel = options.model?.trim() || null;
  if (explicitModel) return [explicitModel];

  if (options.candidates && options.candidates.length > 0) {
    const recentFailures = listPiFreeRecentFailureRecords().map((record) => record.model);
    return filterPiFreeRecentFailures(
      [...new Set(options.candidates.map((candidate) => candidate.trim()).filter((candidate) => candidate.length > 0))],
      recentFailures
    );
  }

  return resolvePiFreeStartupCandidates(options.env ?? process.env);
}

function resolvePiAiApiKey(provider: string, envValues: PiFreeEnvValues = process.env): string | null {
  const normalizedEnv = normalizePiFreeEnv(envValues);
  if (provider === "cloudflare-workers-ai" || provider === "cloudflare-ai-gateway") {
    return normalizedEnv.CLOUDFLARE_API_KEY ?? normalizedEnv.CLOUDFLARE_API_TOKEN ?? null;
  }
  return getEnvApiKey(provider) ?? null;
}

export function hasPiAiProviderAuth(provider: string, envValues: PiFreeEnvValues = process.env): boolean {
  if (provider === "cloudflare-workers-ai" || provider === "cloudflare-ai-gateway") {
    const normalizedEnv = normalizePiFreeEnv(envValues);
    return Boolean(resolvePiAiApiKey(provider, envValues) && normalizedEnv.CLOUDFLARE_ACCOUNT_ID);
  }
  return Boolean(resolvePiAiApiKey(provider, envValues));
}

async function completeWithTimeout(
  model: NonNullable<ReturnType<typeof getModel>>,
  prompt: string,
  timeoutMs: number | null,
  completePrompt: typeof complete,
  apiKey: string | null = null
): Promise<AssistantMessage> {
  const controller = timeoutMs != null && timeoutMs > 0 ? new AbortController() : null;
  const timeout =
    controller && timeoutMs != null && timeoutMs > 0
      ? setTimeout(() => {
          controller.abort();
        }, timeoutMs)
      : null;

  try {
    return await completePrompt(model, buildUserPrompt(prompt), {
      ...(controller ? { signal: controller.signal } : {}),
      ...(apiKey ? { apiKey } : {}),
    });
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}

export async function runPiFreeTextPrompt(
  prompt: string,
  options: RunPiFreeTextPromptOptions = {},
  deps: RunPiFreeTextPromptDeps = {}
): Promise<PiFreeTextPromptResult> {
  const completePrompt = deps.complete ?? complete;
  const resolveModel = deps.getModel ?? ((provider: string, modelId: string) => getModel(provider as never, modelId as never));
  const envValues = options.env ?? process.env;
  const candidates = resolvePromptCandidates({
    ...options,
    env: envValues,
  });
  const explicitModel = options.model?.trim() || null;
  const allowFallback = options.allowFallback ?? explicitModel == null;
  const rememberFailures = options.rememberFailures ?? allowFallback;

  if (candidates.length === 0) {
    throw new Error("No authenticated pi-free models are configured in the fallback order.");
  }

  let lastError = "No pi-free model produced a useful response.";
  for (const modelKey of candidates) {
    const resolvedSpec = resolvePiAiModelSpec(modelKey);
    if (!resolvedSpec) {
      lastError = `Invalid pi-free model spec: ${modelKey}`;
      continue;
    }
    if (!deps.complete && !hasPiAiProviderAuth(resolvedSpec.provider, envValues)) {
      lastError = `Provider ${resolvedSpec.provider} is not configured for fallback spec: ${modelKey}`;
      continue;
    }

    const model = resolveModel(resolvedSpec.provider, resolvedSpec.modelId);
    if (!model) {
      lastError = `Unknown pi-ai model for fallback spec: ${modelKey}`;
      continue;
    }

    const apiKey = deps.complete ? null : resolvePiAiApiKey(resolvedSpec.provider, envValues);
    try {
      const message = await completeWithTimeout(model, prompt, options.timeoutMs ?? null, completePrompt, apiKey);
      const text = extractTextContent(message);

      if ((message.stopReason === "stop" || message.stopReason === "length") && text.length > 0) {
        clearPiFreeRecentFailure(modelKey);
        return { model: modelKey, text };
      }

      const failureMessage = text.length > 0 && message.stopReason !== "toolUse"
        ? text
        : normalizeFailureMessage(message, options.timeoutMs ?? null);
      lastError = failureMessage;

      if (allowFallback && isPiFreeRetryableError(failureMessage)) {
        if (rememberFailures) recordPiFreeRecentFailure(modelKey, failureMessage);
        continue;
      }

      throw new Error(failureMessage);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      lastError = message;
      if (allowFallback && isPiFreeRetryableError(message)) {
        if (rememberFailures) recordPiFreeRecentFailure(modelKey, message);
        continue;
      }
      throw new Error(message);
    }
  }

  throw new Error(lastError);
}

export { resetPiFreeRecentFailures };
