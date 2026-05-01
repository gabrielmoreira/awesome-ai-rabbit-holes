import * as fs from "node:fs";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  PI_FREE_DEFAULT_MODEL,
  PI_FREE_MODEL_CYCLE,
  findNextPiFreeFallbackModel,
  isPiFreeRetryableError,
  parsePiFreeModelSpec,
  pickPiFreeFallbackCandidate,
  resolvePiFreeOrderedModels,
  resolvePiFreeStartupModel,
  shouldAutoSelectPiFreeStartupModel,
} from "../.pi/extensions/pi-free-fallback.js";
import { PI_FREE_ALL_MODELS_PATH,
PI_FREE_CATALOG_DIR,
PI_FREE_RANKED_MODELS_PATH,
comparePiFreeRankedResults,
matchPiFreeIntelligenceRecord,
orderPiFreeAllModels,
parsePiListModelsOutput,
selectPiFreeProbeCandidates,
type PiFreeAllModel,
type PiFreeIntelligenceFile,
type PiFreeRankedModelResult, } from "../scripts/pi/models.js"

let previousRankedModelsFile: string | null = null;
let previousAllModelsFile: string | null = null;

beforeEach(() => {
  previousRankedModelsFile = fs.existsSync(PI_FREE_RANKED_MODELS_PATH)
    ? fs.readFileSync(PI_FREE_RANKED_MODELS_PATH, "utf8")
    : null;
  previousAllModelsFile = fs.existsSync(PI_FREE_ALL_MODELS_PATH)
    ? fs.readFileSync(PI_FREE_ALL_MODELS_PATH, "utf8")
    : null;
});

afterEach(() => {
  if (previousRankedModelsFile == null) {
    fs.rmSync(PI_FREE_RANKED_MODELS_PATH, { force: true });
  } else {
    fs.mkdirSync(PI_FREE_CATALOG_DIR, { recursive: true });
    fs.writeFileSync(PI_FREE_RANKED_MODELS_PATH, previousRankedModelsFile, "utf8");
  }

  if (previousAllModelsFile == null) {
    fs.rmSync(PI_FREE_ALL_MODELS_PATH, { force: true });
  } else {
    fs.mkdirSync(PI_FREE_CATALOG_DIR, { recursive: true });
    fs.writeFileSync(PI_FREE_ALL_MODELS_PATH, previousAllModelsFile, "utf8");
  }

  try {
    const entries = fs.readdirSync(PI_FREE_CATALOG_DIR);
    if (entries.length === 0) {
      fs.rmdirSync(PI_FREE_CATALOG_DIR);
    }
  } catch {
    // nothing to clean
  }
});

const INTELLIGENCE_FIXTURE: PiFreeIntelligenceFile = {
  generated_at: "2026-05-02T12:00:00.000Z",
  source_url: "https://artificialanalysis.ai/leaderboards/models",
  records: [
    {
      id: "gemini-3-1-pro-preview",
      model: "Gemini 3.1 Pro Preview",
      creator: "Google",
      artificial_analysis_intelligence_index: 57,
      aliases: ["gemini 3.1 pro preview", "google/gemini-3.1-pro-preview"],
    },
    {
      id: "deepseek-v4-pro",
      model: "DeepSeek V4 Pro",
      creator: "DeepSeek",
      artificial_analysis_intelligence_index: 52,
      aliases: ["deepseek v4 pro", "deepseek-ai/deepseek-v4-pro"],
    },
    {
      id: "gemma-4-31b",
      model: "Gemma 4 31B",
      creator: "Google",
      artificial_analysis_intelligence_index: 39,
      aliases: ["gemma 4 31b", "google/gemma-4-31b-it"],
    },
    {
      id: "kimi-k2-6",
      model: "Kimi K2.6",
      creator: "Kimi",
      artificial_analysis_intelligence_index: 54,
      aliases: ["kimi k2.6", "kimi-k2-6", "kimi kimi k2.6"],
    },
    {
      id: "kimi-k2-5-non-reasoning",
      model: "Kimi K2.5",
      creator: "Kimi",
      artificial_analysis_intelligence_index: 37,
      aliases: ["kimi k2.5", "kimi-k2-5-non-reasoning", "kimi kimi k2.5"],
    },
  ],
};

describe("pi-free fallback extension", () => {
  it("does not auto-select over an explicit model request", () => {
    expect(shouldAutoSelectPiFreeStartupModel([])).toBe(true);
    expect(shouldAutoSelectPiFreeStartupModel(["--model", "openrouter/foo"])).toBe(false);
    expect(shouldAutoSelectPiFreeStartupModel(["--provider", "openrouter"])).toBe(false);
    expect(shouldAutoSelectPiFreeStartupModel(["--models", "openrouter/*"])).toBe(false);
  });

  it("boots from the source-controlled bootstrap list when no generated ranking files exist", () => {
    const env = { OPENROUTER_API_KEY: "or-key", NVIDIA_API_KEY: "nv-key" };
    fs.rmSync(PI_FREE_RANKED_MODELS_PATH, { force: true });
    fs.rmSync(PI_FREE_ALL_MODELS_PATH, { force: true });

    expect(PI_FREE_DEFAULT_MODEL).toBe(PI_FREE_MODEL_CYCLE[0]);
    expect(resolvePiFreeStartupModel(env)).toBe(PI_FREE_MODEL_CYCLE[0]);
    expect(PI_FREE_MODEL_CYCLE.filter((spec) => spec.startsWith("openrouter/")).every((spec) => spec.includes(":free"))).toBe(
      true
    );
    expect(resolvePiFreeOrderedModels(env).slice(0, 4)).toEqual(PI_FREE_MODEL_CYCLE.slice(0, 4));
  });

  it("prefers the ranked catalog file when one was generated successfully", () => {
    fs.mkdirSync(PI_FREE_CATALOG_DIR, { recursive: true });
    fs.writeFileSync(
      PI_FREE_RANKED_MODELS_PATH,
      JSON.stringify(
        {
          generated_at: "2026-05-02T12:00:00.000Z",
          prompt: "Reply with exactly HI.",
          timeout_ms: 60000,
          providers_considered: ["openrouter"],
          ordered_models: [
            "openrouter/google/gemma-4-31b-it:free",
            "openrouter/openai/gpt-oss-120b:free",
          ],
          results: [],
        },
        null,
        2
      ) + "\n",
      "utf8"
    );

    expect(resolvePiFreeOrderedModels({ OPENROUTER_API_KEY: "or-key" })).toEqual([
      "openrouter/google/gemma-4-31b-it:free",
      "openrouter/openai/gpt-oss-120b:free",
    ]);
  });

  it("parses provider-scoped model ids", () => {
    expect(parsePiFreeModelSpec("cloudflare/@cf/openai/gpt-oss-120b")).toEqual({
      provider: "cloudflare",
      id: "@cf/openai/gpt-oss-120b",
    });
    expect(parsePiFreeModelSpec("invalid")).toBeNull();
  });

  it("walks the ranked fallback chain in order", () => {
    expect(
      findNextPiFreeFallbackModel(
        [
          "openrouter/google/gemini-3.1-pro-preview",
          "nvidia/moonshotai/kimi-k2-instruct-0905",
          "nvidia/deepseek-ai/deepseek-v4-pro",
        ],
        "openrouter/google/gemini-3.1-pro-preview"
      )
    ).toBe("nvidia/moonshotai/kimi-k2-instruct-0905");
  });

  it("skips unavailable candidates and keeps scanning the fallback chain", () => {
    expect(
      pickPiFreeFallbackCandidate(
        [
          "openrouter/google/gemini-3.1-pro-preview",
          "nvidia/moonshotai/kimi-k2-instruct-0905",
          "openrouter/google/gemini-3-flash-preview",
        ],
        "openrouter/google/gemini-3.1-pro-preview",
        (modelKey) => modelKey === "openrouter/google/gemini-3-flash-preview"
      )
    ).toBe("openrouter/google/gemini-3-flash-preview");
  });

  it("classifies rate limits and subscription/provider mismatches as retryable fallback errors", () => {
    expect(isPiFreeRetryableError("429 Provider returned error")).toBe(true);
    expect(isPiFreeRetryableError("403 this model requires a subscription, upgrade for access")).toBe(true);
    expect(isPiFreeRetryableError("permission denied")).toBe(false);
  });

  it("keeps only `:free` OpenRouter entries in the all-models inventory", () => {
    const discovered = parsePiListModelsOutput(
      [
        "provider    model                                           context  max-out  thinking  images",
        "openrouter  google/gemini-3.1-pro-preview                   1.0M     65.5K    yes       yes",
        "openrouter  google/gemma-4-31b-it:free                      262.1K   32.8K    yes       yes",
        "nvidia      deepseek-ai/deepseek-v4-pro                     1.0M     393.2K   yes       no",
      ].join("\n")
    );

    expect(discovered.map((model) => model.spec)).toEqual([
      "nvidia/deepseek-ai/deepseek-v4-pro",
      "openrouter/google/gemma-4-31b-it:free",
    ]);
    expect(discovered.find((model) => model.spec === "openrouter/google/gemma-4-31b-it:free")?.included_reason).toBe(
      "openrouter_free"
    );
  });

  it("prefers the more specific Kimi alias over the broader family alias", () => {
    expect(matchPiFreeIntelligenceRecord("openrouter/moonshotai/kimi-k2.5", INTELLIGENCE_FIXTURE)?.id).toBe(
      "kimi-k2-5-non-reasoning"
    );
  });

  it("orders all-model candidates by current auth first and known intelligence second", () => {
    const models: PiFreeAllModel[] = [
      {
        spec: "cloudflare/@cf/google/gemini-3.1-pro-preview",
        provider: "cloudflare",
        model_id: "@cf/google/gemini-3.1-pro-preview",
        context_window: "1.0M",
        max_output: "65.5K",
        supports_thinking: true,
        supports_images: true,
        free_tier_hint: false,
        included_reason: "direct_provider",
      },
      {
        spec: "openrouter/google/gemma-4-31b-it:free",
        provider: "openrouter",
        model_id: "google/gemma-4-31b-it:free",
        context_window: "262.1K",
        max_output: "32.8K",
        supports_thinking: true,
        supports_images: true,
        free_tier_hint: true,
        included_reason: "openrouter_free",
      },
      {
        spec: "nvidia/deepseek-ai/deepseek-v4-pro",
        provider: "nvidia",
        model_id: "deepseek-ai/deepseek-v4-pro",
        context_window: "1.0M",
        max_output: "393.2K",
        supports_thinking: true,
        supports_images: false,
        free_tier_hint: false,
        included_reason: "direct_provider",
      },
      {
        spec: "openrouter/google/gemini-3.1-pro-preview",
        provider: "openrouter",
        model_id: "google/gemini-3.1-pro-preview",
        context_window: "1.0M",
        max_output: "65.5K",
        supports_thinking: true,
        supports_images: true,
        free_tier_hint: false,
        included_reason: "openrouter_catalog",
      },
    ];

    expect(
      orderPiFreeAllModels(models, INTELLIGENCE_FIXTURE, {
        OPENROUTER_API_KEY: "or-key",
        NVIDIA_API_KEY: "nv-key",
      }).map((model) => model.spec)
    ).toEqual([
      "openrouter/google/gemini-3.1-pro-preview",
      "nvidia/deepseek-ai/deepseek-v4-pro",
      "openrouter/google/gemma-4-31b-it:free",
      "cloudflare/@cf/google/gemini-3.1-pro-preview",
    ]);
  });

  it("probes every discovered candidate and only applies the limit as a slice", () => {
    const models: PiFreeAllModel[] = [
      {
        spec: "openrouter/alpha",
        provider: "openrouter",
        model_id: "alpha",
        context_window: null,
        max_output: null,
        supports_thinking: false,
        supports_images: false,
        free_tier_hint: false,
        included_reason: "openrouter_catalog",
      },
      {
        spec: "nvidia/beta",
        provider: "nvidia",
        model_id: "beta",
        context_window: null,
        max_output: null,
        supports_thinking: false,
        supports_images: false,
        free_tier_hint: false,
        included_reason: "direct_provider",
      },
      {
        spec: "cloudflare/gamma",
        provider: "cloudflare",
        model_id: "gamma",
        context_window: null,
        max_output: null,
        supports_thinking: false,
        supports_images: false,
        free_tier_hint: false,
        included_reason: "direct_provider",
      },
    ];

    expect(selectPiFreeProbeCandidates(models, Number.POSITIVE_INFINITY).map((model) => model.spec)).toEqual([
      "openrouter/alpha",
      "nvidia/beta",
      "cloudflare/gamma",
    ]);
    expect(selectPiFreeProbeCandidates(models, 2).map((model) => model.spec)).toEqual([
      "openrouter/alpha",
      "nvidia/beta",
    ]);
  });

  it("orders successful ranked models by known intelligence before latency", () => {
    const results: PiFreeRankedModelResult[] = [
      {
        spec: "openrouter/google/gemma-4-31b-it:free",
        provider: "openrouter",
        model_id: "google/gemma-4-31b-it:free",
        ok: false,
        elapsed_ms: 100,
        error_type: "quota",
        error_message: "quota",
        output_excerpt: null,
        intelligence_record_id: "gemma-4-31b",
        artificial_analysis_intelligence_index: 39,
      },
      {
        spec: "nvidia/deepseek-ai/deepseek-v4-pro",
        provider: "nvidia",
        model_id: "deepseek-ai/deepseek-v4-pro",
        ok: true,
        elapsed_ms: 50,
        error_type: null,
        error_message: null,
        output_excerpt: "HI",
        intelligence_record_id: "deepseek-v4-pro",
        artificial_analysis_intelligence_index: 52,
      },
      {
        spec: "openrouter/google/gemini-3.1-pro-preview",
        provider: "openrouter",
        model_id: "google/gemini-3.1-pro-preview",
        ok: true,
        elapsed_ms: 5000,
        error_type: null,
        error_message: null,
        output_excerpt: "HI",
        intelligence_record_id: "gemini-3-1-pro-preview",
        artificial_analysis_intelligence_index: 57,
      },
    ];

    expect([...results].sort(comparePiFreeRankedResults).map((result) => result.spec)).toEqual([
      "openrouter/google/gemini-3.1-pro-preview",
      "nvidia/deepseek-ai/deepseek-v4-pro",
      "openrouter/google/gemma-4-31b-it:free",
    ]);
  });

  it("exports a non-empty bootstrap cycle", () => {
    expect(PI_FREE_MODEL_CYCLE.length).toBeGreaterThan(5);
  });
});
