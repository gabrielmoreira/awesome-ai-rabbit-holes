import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import {
  parsePiFreeModelSpec,
  recordPiFreeRecentFailure,
  resolvePiFreeStartupCandidates,
} from "./models.ts";

const PI_FREE_RETRYABLE_ERROR_PATTERN =
  /overloaded|provider.?returned.?error|rate.?limit|too many requests|429|404|500|502|503|504|service.?unavailable|temporarily unavailable|quota exceeded|throttled|retry shortly|retry later|requires a subscription|upgrade for access|free-models-per-min|unexpected message role|reasoning_effort|no route matched|model not found/i;
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

type ModelRegistryContext = {
  model?: { provider: string; id: string } | null;
  modelRegistry: { find: (provider: string, id: string) => unknown };
  ui: { notify: (message: string, level: "warning") => void };
};

function isAssistantErrorMessage(message: unknown): message is AssistantErrorMessage {
  return Boolean(
    message &&
      typeof message === "object" &&
      (message as AssistantErrorMessage).role === "assistant" &&
      typeof (message as AssistantErrorMessage).errorMessage === "string" &&
      (message as AssistantErrorMessage).errorMessage.length > 0,
  );
}

function findRegisteredModel(ctx: ModelRegistryContext, modelKey: string) {
  const parsed = parsePiFreeModelSpec(modelKey);
  if (!parsed) return null;
  return ctx.modelRegistry.find(parsed.provider, parsed.id) ?? null;
}

function currentModelKey(ctx: ModelRegistryContext): string | null {
  return ctx.model ? `${ctx.model.provider}/${ctx.model.id}` : null;
}

function selectAvailableFallbackModel(
  ctx: ModelRegistryContext,
  orderedModels: string[],
  fromModelKey: string | null | undefined,
): { modelKey: string; model: unknown } | null {
  let attemptedFromModelKey = fromModelKey;
  while (true) {
    const nextModelKey = pickPiFreeFallbackCandidate(orderedModels, attemptedFromModelKey, (candidateKey) => {
      return Boolean(findRegisteredModel(ctx, candidateKey));
    });
    if (!nextModelKey || nextModelKey === attemptedFromModelKey) return null;

    const nextModel = findRegisteredModel(ctx, nextModelKey);
    if (nextModel) return { modelKey: nextModelKey, model: nextModel };
    attemptedFromModelKey = nextModelKey;
  }
}

export function shouldAutoSelectPiFreeStartupModel(argv: string[] = process.argv.slice(2)): boolean {
  return !PI_FREE_EXPLICIT_MODEL_FLAGS.some((flag) => argv.includes(flag));
}

export function findNextPiFreeFallbackModel(
  orderedModels: string[],
  currentModel: string | null | undefined,
): string | null {
  if (!currentModel) return orderedModels[0] ?? null;
  const currentIndex = orderedModels.indexOf(currentModel);
  if (currentIndex < 0) return orderedModels[0] ?? null;
  return orderedModels[currentIndex + 1] ?? null;
}

export function pickPiFreeFallbackCandidate(
  orderedModels: string[],
  currentModelKey: string | null | undefined,
  canUseModel: (modelKey: string) => boolean,
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
  _errorMessage: string,
): string {
  return PI_FREE_RETRY_INSTRUCTION;
}

export default function piFreeFallbackExtension(pi: ExtensionAPI) {
  pi.on("session_start", async (_event, ctx) => {
    if (!shouldAutoSelectPiFreeStartupModel()) return;

    const fallbackModels = resolvePiFreeStartupCandidates();
    const startupModel = selectAvailableFallbackModel(ctx, fallbackModels, null);
    if (!startupModel) return;
    if (startupModel.modelKey === currentModelKey(ctx)) return;

    await pi.setModel(startupModel.model as never);
  });

  let lastRetriedTurnIndex: number | null = null;

  pi.on("turn_end", async (event, ctx) => {
    if (!isAssistantErrorMessage(event.message)) return;
    const errorMessage = event.message.errorMessage;
    if (!isPiFreeRetryableError(errorMessage)) return;
    if (lastRetriedTurnIndex === event.turnIndex) return;

    const failedModelKey = currentModelKey(ctx);
    if (failedModelKey) {
      recordPiFreeRecentFailure(failedModelKey, errorMessage);
    }

    const fallbackModels = resolvePiFreeStartupCandidates();
    if (fallbackModels.length < 2) {
      ctx.ui.notify("pi-free fallback: no switchable authenticated models remain.", "warning");
      return;
    }

    const nextFallback = selectAvailableFallbackModel(ctx, fallbackModels, failedModelKey);
    if (!nextFallback) {
      ctx.ui.notify("pi-free fallback: no switchable authenticated models remain.", "warning");
      return;
    }

    const switched = await pi.setModel(nextFallback.model as never);
    if (!switched) {
      ctx.ui.notify("pi-free fallback: no switchable authenticated models remain.", "warning");
      return;
    }

    lastRetriedTurnIndex = event.turnIndex;
    ctx.ui.notify(`pi-free fallback: ${(failedModelKey ?? "unknown")} -> ${nextFallback.modelKey}`, "warning");
    pi.sendMessage(
      {
        customType: "pi-free-fallback-retry",
        content: buildPiFreeRetryInstruction(failedModelKey ?? "unknown", nextFallback.modelKey, errorMessage),
        display: false,
      },
      { triggerTurn: true, deliverAs: "followUp" },
    );
  });
}
