import { afterEach, describe, expect, it } from "vitest";
import {
  resolvePiAiModelSpec,
  runPiFreeTextPrompt,
  resetPiFreeRecentFailures,
  type RunPiFreeTextPromptDeps,
} from "../scripts/pi/ai.js";
import { resetPiFreeBalanceSeed } from "../scripts/pi/pool.js";

afterEach(() => {
  resetPiFreeRecentFailures();
  resetPiFreeBalanceSeed();
});


describe("pi-ai model aliases", () => {
  it("maps the shared fallback specs onto pi-ai providers when possible", () => {
    expect(resolvePiAiModelSpec("cloudflare/@cf/moonshotai/kimi-k2.6")).toEqual({
      provider: "cloudflare-workers-ai",
      modelId: "@cf/moonshotai/kimi-k2.6",
    });
    expect(resolvePiAiModelSpec("openrouter/google/gemma-4-31b-it:free")).toEqual({
      provider: "openrouter",
      modelId: "google/gemma-4-31b-it:free",
    });
  });
});
describe("pi-ai fallback loop", () => {
  it("falls back inside one shared model loop and remembers retryable failures in memory", async () => {
    const seen: string[] = [];

    const result = await runPiFreeTextPrompt(
      "Reply with exactly HI.",
      {
        candidates: ["faux/first", "faux/second"],
      },
      {
        getModel: (provider, id) => ({ provider, id } as any),
        complete: async (model) => {
          seen.push(`${model.provider}/${model.id}`);
          if (model.id === "first") {
            return {
              role: "assistant",
              api: "faux-api",
              provider: model.provider,
              model: model.id,
              content: [],
              usage: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, totalTokens: 0, cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 } },
              stopReason: "error",
              errorMessage: "429 provider returned error",
              timestamp: Date.now(),
            } as any;
          }
          return {
            role: "assistant",
            api: "faux-api",
            provider: model.provider,
            model: model.id,
            content: [{ type: "text", text: "HI." }],
            usage: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, totalTokens: 0, cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 } },
            stopReason: "stop",
            timestamp: Date.now(),
          } as any;
        },
      }
    );

    expect(result.text).toBe("HI.");
    expect(result.model).toBe("faux/second");
    expect(seen).toEqual(["faux/first", "faux/second"]);

    seen.length = 0;
    const cached = await runPiFreeTextPrompt(
      "Reply with exactly HI.",
      {
        candidates: ["faux/first", "faux/second"],
      },
      {
        getModel: (provider, id) => ({ provider, id } as any),
        complete: async (model) => {
          seen.push(`${model.provider}/${model.id}`);
          return {
            role: "assistant",
            api: "faux-api",
            provider: model.provider,
            model: model.id,
            content: [{ type: "text", text: model.id }],
            usage: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, totalTokens: 0, cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 } },
            stopReason: "stop",
            timestamp: Date.now(),
          } as any;
        },
      }
    );

    expect(cached.text).toBe("second");
    expect(seen).toEqual(["faux/second"]);
  });

  it("does not fall back away from an explicit model override", async () => {
    await expect(
      runPiFreeTextPrompt(
        "Reply with exactly HI.",
        {
          model: "faux/first",
          candidates: ["faux/first", "faux/second"],
        },
        {
          getModel: (provider, id) => ({ provider, id } as any),
          complete: async (model) => ({
            role: "assistant",
            api: "faux-api",
            provider: model.provider,
            model: model.id,
            content: [],
            usage: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, totalTokens: 0, cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 } },
            stopReason: "error",
            errorMessage: "429 provider returned error",
            timestamp: Date.now(),
          } as any),
        }
      )
    ).rejects.toThrow("429 provider returned error");
  });
});

describe("pi-ai replica load balancing", () => {
  const BALANCING_ENV = {
    OPENROUTER_API_KEY: "or-key",
    CLOUDFLARE_API_TOKEN: "cf-token",
    CLOUDFLARE_ACCOUNT_ID: "cf-account",
    MISTRAL_API_KEY: "mi-key",
  };

  const RATE_LIMITED_IDS = new Set(["@cf/moonshotai/kimi-k2.6", "mistral-medium-2604", "google/gemma-4-31b-it:free"]);

  type FauxModel = { provider: string; id: string };
  type FauxMessage = {
    role: "assistant";
    content: Array<{ type: "text"; text: string }>;
    stopReason: "stop" | "error";
    errorMessage?: string;
  };

  function makeBalancingDeps(): RunPiFreeTextPromptDeps {
    // pi-ai Model/AssistantMessage are opaque here; ai.ts only consumes model.id/.provider and message content/stop fields.
    const faux = {
      getModel: (provider: string, modelId: string): FauxModel => ({ provider, id: modelId }),
      complete: async (model: FauxModel): Promise<FauxMessage> => {
        if (RATE_LIMITED_IDS.has(model.id)) {
          return { role: "assistant", content: [], stopReason: "error", errorMessage: "429 rate limited" };
        }
        return { role: "assistant", content: [{ type: "text", text: "HI." }], stopReason: "stop" };
      },
    };
    return faux as unknown as RunPiFreeTextPromptDeps;
  }

  it("rotates provider replicas of the same family across consecutive default-path calls", async () => {
    resetPiFreeBalanceSeed();
    const first = await runPiFreeTextPrompt(
      "Reply with exactly HI.",
      { env: BALANCING_ENV, rememberFailures: false },
      makeBalancingDeps()
    );
    const second = await runPiFreeTextPrompt(
      "Reply with exactly HI.",
      { env: BALANCING_ENV, rememberFailures: false },
      makeBalancingDeps()
    );

    expect(first.model).toBe("cloudflare/@cf/google/gemma-4-26b-a4b-it");
    expect(second.model).toBe("openrouter/google/gemma-4-26b-a4b-it:free");
  });
});
