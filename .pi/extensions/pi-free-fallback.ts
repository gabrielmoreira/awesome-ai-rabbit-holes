import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export const PI_FREE_DEFAULT_MODEL = "openrouter/google/gemma-4-31b-it:free";
export const PI_FREE_MODEL_CYCLE = [
  "cloudflare/@cf/moonshotai/kimi-k2.6",
  "ollama-cloud/kimi-k2.6:cloud",
  "nvidia/z-ai/glm-5.1",
  "ollama-cloud/glm-5.1",
  "nvidia/minimaxai/minimax-m2.7",
  "ollama-cloud/minimax-m2.7",
  "ollama-cloud/gemini-3-flash-preview",
  "nvidia/qwen/qwen3.5-397b-a17b",
  "openrouter/google/gemma-4-31b-it:free",
  "nvidia/mistralai/mistral-medium-3.5-128b",
  "ollama-cloud/deepseek-v4-pro",
  "cloudflare/@cf/moonshotai/kimi-k2.5",
  "nvidia/moonshotai/kimi-k2.5",
  "openrouter/nvidia/nemotron-3-super-120b-a12b:free",
  "ollama-cloud/deepseek-v4-flash",
  "openrouter/openai/gpt-oss-120b:free",
  "cloudflare/@cf/openai/gpt-oss-120b",
  "nvidia/openai/gpt-oss-120b",
  "mistral/devstral-2512",
  "mistral/labs-devstral-small-2512",
] as const;

const PI_FREE_RETRYABLE_ERROR_PATTERN =
  /overloaded|provider.?returned.?error|rate.?limit|too many requests|429|500|502|503|504|service.?unavailable|temporarily unavailable|quota exceeded|throttled|retry shortly|retry later/i;
const PI_FREE_EXPLICIT_MODEL_FLAGS = ["--model", "--models", "--provider"];
const PI_FREE_RETRY_INSTRUCTION = [
  "[pi-free automatic fallback]",
  "The immediately preceding assistant turn failed before producing a useful answer because the previous model hit a retryable upstream provider error.",
  "Ignore that provider failure.",
  "Answer the most recent real user request from scratch using the newly selected fallback model.",
  "Do not mention this automatic retry unless the user explicitly asks about it.",
].join("\n");

type AssistantErrorMessage = {
  role: "assistant";
  errorMessage: string;
};

type PiFreeEnvValues = Record<string, string | undefined>;

function isAssistantErrorMessage(message: unknown): message is AssistantErrorMessage {
  return Boolean(
    message &&
    typeof message === "object" &&
    (message as AssistantErrorMessage).role === "assistant" &&
    typeof (message as AssistantErrorMessage).errorMessage === "string" &&
    (message as AssistantErrorMessage).errorMessage.length > 0
  );
}

export function normalizePiFreeEnv(envValues: PiFreeEnvValues): Record<string, string> {
  const normalized = Object.fromEntries(
    Object.entries(envValues).flatMap(([key, value]) =>
      typeof value === "string" ? [[key, value]] : []
    )
  );

  if (normalized.CF_API_TOKEN && !normalized.CLOUDFLARE_API_TOKEN) {
    normalized.CLOUDFLARE_API_TOKEN = normalized.CF_API_TOKEN;
  }
  if (normalized.CF_ACCOUNT_ID && !normalized.CLOUDFLARE_ACCOUNT_ID) {
    normalized.CLOUDFLARE_ACCOUNT_ID = normalized.CF_ACCOUNT_ID;
  }
  if (normalized.CLOUDFLARE_API_TOKEN && !normalized.CF_API_TOKEN) {
    normalized.CF_API_TOKEN = normalized.CLOUDFLARE_API_TOKEN;
  }
  if (normalized.CLOUDFLARE_ACCOUNT_ID && !normalized.CF_ACCOUNT_ID) {
    normalized.CF_ACCOUNT_ID = normalized.CLOUDFLARE_ACCOUNT_ID;
  }

  return normalized;
}

function hasProviderAuth(providerId: string, envValues: Record<string, string>): boolean {
  switch (providerId) {
    case "openrouter":
      return Boolean(envValues.OPENROUTER_API_KEY);
    case "cloudflare":
      return Boolean(envValues.CLOUDFLARE_API_TOKEN && envValues.CLOUDFLARE_ACCOUNT_ID);
    case "nvidia":
      return Boolean(envValues.NVIDIA_API_KEY);
    case "ollama-cloud":
      return Boolean(envValues.OLLAMA_API_KEY);
    case "mistral":
      return Boolean(envValues.MISTRAL_API_KEY);
    default:
      return false;
  }
}

export function resolvePiFreeOrderedModels(envValues: PiFreeEnvValues = process.env): string[] {
  const normalizedEnv = normalizePiFreeEnv(envValues);
  return PI_FREE_MODEL_CYCLE.filter((model) => hasProviderAuth(model.split("/")[0], normalizedEnv));
}

export function resolvePiFreeStartupModel(envValues: PiFreeEnvValues = process.env): string | null {
  return resolvePiFreeOrderedModels(envValues)[0] ?? null;
}

export function shouldAutoSelectPiFreeStartupModel(argv: string[] = process.argv.slice(2)): boolean {
  return !PI_FREE_EXPLICIT_MODEL_FLAGS.some((flag) => argv.includes(flag));
}

export function parsePiFreeModelSpec(modelSpec: string): { provider: string; id: string } | null {
  const firstSlash = modelSpec.indexOf("/");
  if (firstSlash <= 0 || firstSlash === modelSpec.length - 1) return null;
  return {
    provider: modelSpec.slice(0, firstSlash),
    id: modelSpec.slice(firstSlash + 1),
  };
}

export function findNextPiFreeFallbackModel(
  orderedModels: string[],
  currentModel: string | null | undefined
): string | null {
  if (!currentModel) return orderedModels[0] ?? null;
  const currentIndex = orderedModels.indexOf(currentModel);
  if (currentIndex < 0) return orderedModels[0] ?? null;
  return orderedModels[currentIndex + 1] ?? null;
}

export function pickPiFreeFallbackCandidate(
  orderedModels: string[],
  currentModelKey: string | null | undefined,
  canUseModel: (modelKey: string) => boolean
): string | null {
  let nextModelKey = findNextPiFreeFallbackModel(orderedModels, currentModelKey);
  while (nextModelKey) {
    if (canUseModel(nextModelKey)) return nextModelKey;
    nextModelKey = findNextPiFreeFallbackModel(orderedModels, nextModelKey);
  }
  return null;
}

export function isPiFreeRetryableError(message: string | null | undefined): boolean {
  return Boolean(message && PI_FREE_RETRYABLE_ERROR_PATTERN.test(message));
}

export function buildPiFreeRetryInstruction(
  _failedModel: string,
  _nextModel: string,
  _errorMessage: string
): string {
  return PI_FREE_RETRY_INSTRUCTION;
}

export default function piFreeFallbackExtension(pi: ExtensionAPI) {
  const orderedModels = resolvePiFreeOrderedModels();

  pi.on("session_start", async (_event, ctx) => {
    if (!shouldAutoSelectPiFreeStartupModel()) return;

    const currentModelKey = ctx.model ? `${ctx.model.provider}/${ctx.model.id}` : null;
    if (currentModelKey && orderedModels.includes(currentModelKey)) return;

    const startupModelKey = pickPiFreeFallbackCandidate(
      orderedModels,
      null,
      (candidateKey) => {
        const parsedCandidate = parsePiFreeModelSpec(candidateKey);
        if (!parsedCandidate) return false;
        return Boolean(ctx.modelRegistry.find(parsedCandidate.provider, parsedCandidate.id));
      }
    );
    if (!startupModelKey) return;

    const parsedStartupModel = parsePiFreeModelSpec(startupModelKey);
    if (!parsedStartupModel) return;

    const startupModel = ctx.modelRegistry.find(parsedStartupModel.provider, parsedStartupModel.id);
    if (!startupModel) return;

    await pi.setModel(startupModel);
  });

  if (orderedModels.length < 2) return;

  let lastRetriedTurnIndex: number | null = null;

  pi.on("turn_end", async (event, ctx) => {
    if (!isAssistantErrorMessage(event.message)) return;
    const errorMessage = event.message.errorMessage;
    if (!isPiFreeRetryableError(errorMessage)) return;
    if (lastRetriedTurnIndex === event.turnIndex) return;

    const currentModelKey = ctx.model ? `${ctx.model.provider}/${ctx.model.id}` : null;
    let attemptedFromModelKey = currentModelKey;

    while (true) {
      const nextModelKey = pickPiFreeFallbackCandidate(
        orderedModels,
        attemptedFromModelKey,
        (candidateKey) => {
          const parsedCandidate = parsePiFreeModelSpec(candidateKey);
          if (!parsedCandidate) return false;
          return Boolean(ctx.modelRegistry.find(parsedCandidate.provider, parsedCandidate.id));
        }
      );
      if (!nextModelKey || nextModelKey === attemptedFromModelKey) break;

      const parsedNextModel = parsePiFreeModelSpec(nextModelKey);
      if (!parsedNextModel) {
        attemptedFromModelKey = nextModelKey;
        continue;
      }

      const nextModel = ctx.modelRegistry.find(parsedNextModel.provider, parsedNextModel.id);
      if (!nextModel) {
        attemptedFromModelKey = nextModelKey;
        continue;
      }

      const switched = await pi.setModel(nextModel);
      if (!switched) {
        attemptedFromModelKey = nextModelKey;
        continue;
      }

      lastRetriedTurnIndex = event.turnIndex;
      ctx.ui.notify(
        `pi-free fallback: ${(currentModelKey ?? "unknown")} -> ${nextModelKey}`,
        "warning"
      );
      pi.sendMessage(
        {
          customType: "pi-free-fallback-retry",
          content: buildPiFreeRetryInstruction(
            currentModelKey ?? "unknown",
            nextModelKey,
            errorMessage
          ),
          display: false,
        },
        { triggerTurn: true, deliverAs: "followUp" }
      );
      return;
    }

    ctx.ui.notify("pi-free fallback: no switchable authenticated models remain.", "warning");
  });
}
