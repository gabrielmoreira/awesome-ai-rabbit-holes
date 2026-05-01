# Pi-Free Model Pipeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hardcoded/JSON Pi model pipeline with a YAML-driven `config/models/` pipeline, make `ai-runner` the only Pi execution boundary, and produce `config/models.yml` as the definitive runtime contract.

**Architecture:** `scripts/ai-runner.ts` becomes the only file allowed to spawn `mise` or `pi`, with a managed runtime mode and a direct discovery/probe mode. Discovery, metadata enrichment, ranking, and merge stages write YAML intermediates under `config/models/`, while runtime selection reads only `config/models.yml` and falls back to `config/models/defaults.yml` if needed.

**Tech Stack:** Node 25, TypeScript, `js-yaml`, Vitest, Mise, Pi coding agent, GitHub Actions.

---

## File Map

### Create

- `config/models/defaults.yml`
- `config/models/matching-overrides.yml`
- `scripts/model-config.ts`
- `scripts/pi-free-api-free-models.ts`
- `scripts/pi-free-merge-models.ts`
- `test/model-config.test.ts`
- `test/pi-free-api-free-models.test.ts`
- `test/pi-free-merge-models.test.ts`

### Modify

- `.mise.toml`
- `.pi/extensions/pi-free-fallback.ts`
- `.github/workflows/refresh-metadata.yml`
- `.github/workflows/check-generated-docs.yml`
- `scripts/ai-runner.ts`
- `scripts/paths.ts`
- `scripts/pi-free-all-models.ts`
- `scripts/pi-free-intelligence.ts`
- `scripts/pi-free-models.ts`
- `scripts/pi-free-rank-models.ts`
- `test/ai-runner.test.ts`
- `test/pi-free-intelligence.test.ts`
- `test/pi-free.test.ts`

### Remove After Cutover

- JSON-specific path constants and readers/writers in `scripts/paths.ts` and `scripts/pi-free-models.ts`
- JSON model artifacts under `config/pi-free/` and `catalog/pi-free/`

## YAML Shapes To Standardize Early

Use these shapes consistently across tasks.

### `config/models/defaults.yml`

```yaml
version: 1
generated_from_ranked_seed: false
runtime_fallback_order:
  - openrouter/google/gemma-4-31b-it:free
  - openrouter/openai/gpt-oss-20b:free
provider_policy:
  openrouter:
    require_free_suffix: true
  nvidia:
    enabled: true
manual_priorities: []
manual_exclusions: []
```

### `config/models/matching-overrides.yml`

```yaml
version: 1
intelligence_alias_overrides:
  kimi-k2-5-non-reasoning:
    - moonshotai/kimi-k2.5
  kimi-k2-6:
    - moonshotai/kimi-k2
    - moonshotai/kimi-k2-thinking
    - moonshotai/kimi-k2-instruct
    - moonshotai/kimi-k2-instruct-0905
```

### `config/models.yml`

```yaml
version: 1
generated_at: 2026-05-02T00:00:00.000Z
ordered_models:
  - spec: openrouter/google/gemma-4-31b-it:free
    source: pi
    provider: openrouter
    model_id: google/gemma-4-31b-it:free
    intelligence_record_id: gemma-4-31b
    artificial_analysis_intelligence_index: 39
    zero_cost: true
    elapsed_ms: 22000
```

---

### Task 1: Add YAML paths and schema helpers

**Files:**
- Create: `scripts/model-config.ts`
- Modify: `scripts/paths.ts`
- Test: `test/model-config.test.ts`

- [ ] **Step 1: Write the failing test for YAML paths and round-trip I/O**

```ts
import * as fs from "node:fs";
import { describe, expect, it } from "vitest";
import {
  CONFIG_MODELS_DIR,
  CONFIG_MODELS_RUNTIME_PATH,
  CONFIG_MODELS_DEFAULTS_PATH,
  CONFIG_MODELS_MATCHING_OVERRIDES_PATH,
  CONFIG_MODELS_PI_FREE_PATH,
  CONFIG_MODELS_API_FREE_PATH,
  CONFIG_MODELS_RANKED_PI_PATH,
  CONFIG_MODELS_RANKED_API_PATH,
  CONFIG_MODELS_INTELLIGENCE_PATH,
} from "../scripts/paths.js";
import {
  readModelDefaultsFile,
  writeModelDefaultsFile,
  type ModelDefaultsFile,
} from "../scripts/model-config.js";

describe("model-config YAML helpers", () => {
  it("writes and reads defaults YAML through config/models paths", () => {
    const payload: ModelDefaultsFile = {
      version: 1,
      generated_from_ranked_seed: false,
      runtime_fallback_order: ["openrouter/google/gemma-4-31b-it:free"],
      provider_policy: { openrouter: { require_free_suffix: true } },
      manual_priorities: [],
      manual_exclusions: [],
    };

    writeModelDefaultsFile(payload);
    expect(readModelDefaultsFile()).toEqual(payload);
    expect(CONFIG_MODELS_RUNTIME_PATH.endsWith("config/models.yml")).toBe(true);
    expect(CONFIG_MODELS_DIR.endsWith("config/models")).toBe(true);
    expect(CONFIG_MODELS_DEFAULTS_PATH.endsWith("config/models/defaults.yml")).toBe(true);
    expect(CONFIG_MODELS_MATCHING_OVERRIDES_PATH.endsWith("config/models/matching-overrides.yml")).toBe(true);
    expect(CONFIG_MODELS_PI_FREE_PATH.endsWith("config/models/pi-free-models.yml")).toBe(true);
    expect(CONFIG_MODELS_API_FREE_PATH.endsWith("config/models/api-free-models.yml")).toBe(true);
    expect(CONFIG_MODELS_RANKED_PI_PATH.endsWith("config/models/ranked-pi-free-models.yml")).toBe(true);
    expect(CONFIG_MODELS_RANKED_API_PATH.endsWith("config/models/ranked-api-free-models.yml")).toBe(true);
    expect(CONFIG_MODELS_INTELLIGENCE_PATH.endsWith("config/models/intelligence.yml")).toBe(true);
  });
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `mise exec -- npm test -- test/model-config.test.ts`
Expected: FAIL with missing `scripts/model-config.ts` exports and missing `config/models` path constants.

- [ ] **Step 3: Implement YAML path constants in `scripts/paths.ts`**

```ts
export const CONFIG_MODELS_DIR = path.join(CONFIG_DIR, "models");
export const CONFIG_MODELS_RUNTIME_PATH = path.join(CONFIG_DIR, "models.yml");
export const CONFIG_MODELS_DEFAULTS_PATH = path.join(CONFIG_MODELS_DIR, "defaults.yml");
export const CONFIG_MODELS_MATCHING_OVERRIDES_PATH = path.join(CONFIG_MODELS_DIR, "matching-overrides.yml");
export const CONFIG_MODELS_INTELLIGENCE_PATH = path.join(CONFIG_MODELS_DIR, "intelligence.yml");
export const CONFIG_MODELS_PI_FREE_PATH = path.join(CONFIG_MODELS_DIR, "pi-free-models.yml");
export const CONFIG_MODELS_API_FREE_PATH = path.join(CONFIG_MODELS_DIR, "api-free-models.yml");
export const CONFIG_MODELS_RANKED_PI_PATH = path.join(CONFIG_MODELS_DIR, "ranked-pi-free-models.yml");
export const CONFIG_MODELS_RANKED_API_PATH = path.join(CONFIG_MODELS_DIR, "ranked-api-free-models.yml");
```

- [ ] **Step 4: Implement YAML schemas and readers/writers in `scripts/model-config.ts`**

```ts
import * as fs from "node:fs";
import * as yaml from "js-yaml";
import {
  CONFIG_MODELS_DEFAULTS_PATH,
  CONFIG_MODELS_DIR,
  CONFIG_MODELS_MATCHING_OVERRIDES_PATH,
  CONFIG_MODELS_RUNTIME_PATH,
  CONFIG_MODELS_INTELLIGENCE_PATH,
  CONFIG_MODELS_PI_FREE_PATH,
  CONFIG_MODELS_API_FREE_PATH,
  CONFIG_MODELS_RANKED_PI_PATH,
  CONFIG_MODELS_RANKED_API_PATH,
} from "./paths.js";

export type ModelDefaultsFile = {
  version: 1;
  generated_from_ranked_seed: boolean;
  runtime_fallback_order: string[];
  provider_policy: Record<string, Record<string, boolean | string | number>>;
  manual_priorities: string[];
  manual_exclusions: string[];
};

function ensureModelsDir(): void {
  fs.mkdirSync(CONFIG_MODELS_DIR, { recursive: true });
}

function readYamlIfExists<T>(filePath: string): T | null {
  if (!fs.existsSync(filePath)) return null;
  return yaml.load(fs.readFileSync(filePath, "utf8")) as T;
}

function writeYaml(filePath: string, value: unknown): void {
  ensureModelsDir();
  fs.writeFileSync(filePath, yaml.dump(value, { lineWidth: 120, noRefs: true }), "utf8");
}

export function readModelDefaultsFile(): ModelDefaultsFile | null {
  return readYamlIfExists<ModelDefaultsFile>(CONFIG_MODELS_DEFAULTS_PATH);
}

export function writeModelDefaultsFile(value: ModelDefaultsFile): void {
  writeYaml(CONFIG_MODELS_DEFAULTS_PATH, value);
}
```

- [ ] **Step 5: Run the focused test to verify it passes**

Run: `mise exec -- npm test -- test/model-config.test.ts`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add scripts/paths.ts scripts/model-config.ts test/model-config.test.ts
git commit -m "refactor: add YAML model config helpers"
```

### Task 2: Make `ai-runner` the only Pi execution boundary

**Files:**
- Modify: `scripts/ai-runner.ts`
- Test: `test/ai-runner.test.ts`

- [ ] **Step 1: Write failing tests for env precedence and mode separation**

```ts
import { describe, expect, it } from "vitest";
import {
  buildMergedPiEnv,
  buildPiInvocation,
  type PiExecutionMode,
} from "../scripts/ai-runner.js";

describe("ai-runner model execution modes", () => {
  it("lets .env.pi-free override .env", () => {
    expect(
      buildMergedPiEnv(
        { OPENROUTER_API_KEY: "from-dot-env", NVIDIA_API_KEY: "shared" },
        { OPENROUTER_API_KEY: "from-pi-free" }
      )
    ).toMatchObject({
      OPENROUTER_API_KEY: "from-pi-free",
      NVIDIA_API_KEY: "shared",
    });
  });

  it("does not load fallback extension in direct mode", () => {
    expect(buildPiInvocation("direct", { model: "openrouter/google/gemma-4-31b-it:free", prompt: "HI" })).toEqual(
      expect.objectContaining({
        args: expect.arrayContaining(["--no-extensions", "-e", "npm:pi-free@2.0.2"]),
      })
    );
  });

  it("loads the repo fallback extension in managed mode", () => {
    expect(buildPiInvocation("managed", { model: null, prompt: "HI" }).args).toEqual(
      expect.arrayContaining(["-e", ".pi/extensions/pi-free-fallback.ts"])
    );
  });
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `mise exec -- npm test -- test/ai-runner.test.ts`
Expected: FAIL because `buildMergedPiEnv()` and `buildPiInvocation()` do not exist yet.

- [ ] **Step 3: Implement env loading, merge, and invocation builders in `scripts/ai-runner.ts`**

```ts
export type PiExecutionMode = "managed" | "direct";

export function buildMergedPiEnv(baseEnv: NodeJS.ProcessEnv, piFreeEnv: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  return normalizePiEnvAliases({ ...baseEnv, ...piFreeEnv });
}

export function buildPiInvocation(
  mode: PiExecutionMode,
  options: { model?: string | null; prompt?: string | null; listModels?: boolean }
): { command: string; args: string[] } {
  const args = ["run", "pi:free", "--"];
  if (mode === "direct") {
    return {
      command: resolveMiseCommand(),
      args: [
        "exec",
        "--",
        "pi",
        "--no-tools",
        "--no-skills",
        "--no-extensions",
        "-e",
        "npm:pi-free@2.0.2",
        ...(options.listModels ? ["--list-models"] : []),
        ...(options.model ? ["--model", options.model] : []),
        ...(options.prompt ? ["--print", options.prompt, "--no-session"] : []),
      ],
    };
  }
  return {
    command: resolveMiseCommand(),
    args: buildPiFreeTaskArgs(options.model ?? null),
  };
}
```

- [ ] **Step 4: Add public runner helpers for the plan’s three modes**

```ts
export async function runPrompt(prompt: string, options: { model?: string | null; timeoutMs?: number | null } = {}): Promise<string> {
  return await executePi("managed", { prompt, model: options.model ?? null, timeoutMs: options.timeoutMs ?? resolveCatalogAITimeoutMs() });
}

export async function listModels(options: { timeoutMs?: number | null } = {}): Promise<string> {
  return await executePi("direct", { listModels: true, timeoutMs: options.timeoutMs ?? 60_000 });
}

export async function probeModel(prompt: string, options: { model: string; timeoutMs?: number | null }): Promise<string> {
  return await executePi("direct", { prompt, model: options.model, timeoutMs: options.timeoutMs ?? 60_000 });
}
```

- [ ] **Step 5: Run the focused tests to verify they pass**

Run: `mise exec -- npm test -- test/ai-runner.test.ts`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add scripts/ai-runner.ts test/ai-runner.test.ts
git commit -m "refactor: centralize pi execution in ai-runner"
```

### Task 3: Convert intelligence and Pi discovery to YAML outputs

**Files:**
- Modify: `scripts/pi-free-intelligence.ts`
- Modify: `scripts/pi-free-all-models.ts`
- Modify: `.mise.toml`
- Test: `test/pi-free-intelligence.test.ts`
- Test: `test/pi-free.test.ts`

- [ ] **Step 1: Write failing tests for raw Pi discovery YAML and intelligence YAML**

```ts
it("writes intelligence records to config/models/intelligence.yml", () => {
  const file = buildPiFreeIntelligenceFile(INTELLIGENCE_FIXTURE.records, { sourceUrl: INTELLIGENCE_FIXTURE.source_url });
  writeModelIntelligenceFile(file);
  expect(readModelIntelligenceFile()).toEqual(file);
});

it("keeps raw Pi discovery instead of filtering it down to only free candidates", () => {
  const discovered = parsePiListModelsOutput([
    "provider    model                                           context  max-out  thinking  images",
    "openrouter  google/gemini-3.1-pro-preview                   1.0M     65.5K    yes       yes",
    "openrouter  google/gemma-4-31b-it:free                      262.1K   32.8K    yes       yes",
    "nvidia      deepseek-ai/deepseek-v4-pro                     1.0M     393.2K   yes       no",
  ].join("\n"));

  expect(discovered.map((model) => model.spec)).toEqual([
    "nvidia/deepseek-ai/deepseek-v4-pro",
    "openrouter/google/gemini-3.1-pro-preview",
    "openrouter/google/gemma-4-31b-it:free",
  ]);
});
```

- [ ] **Step 2: Run the focused tests to verify they fail**

Run: `mise exec -- npm test -- test/pi-free-intelligence.test.ts test/pi-free.test.ts`
Expected: FAIL because the scripts still write JSON and the discovery parser still filters OpenRouter to `:free`.

- [ ] **Step 3: Update `scripts/pi-free-intelligence.ts` and `scripts/pi-free-all-models.ts` to use YAML + `ai-runner.listModels()`**

```ts
// scripts/pi-free-all-models.ts
import { listModels } from "./ai-runner.js";
import { buildPiFreeDiscoveryFile, parsePiListModelsOutput, writePiFreeDiscoveryFile } from "./pi-free-models.js";

const output = await listModels({ timeoutMs: args.timeoutMs });
const models = parsePiListModelsOutput(output);
writePiFreeDiscoveryFile(buildPiFreeDiscoveryFile(models));
```

```ts
// scripts/pi-free-intelligence.ts
import { writeModelIntelligenceFile } from "./model-config.js";

const file = buildPiFreeIntelligenceFile(records, { sourceUrl: args.sourceUrl });
writeModelIntelligenceFile(file);
```

- [ ] **Step 4: Update `.mise.toml` task descriptions and output expectations to YAML paths**

```toml
[tasks."pi:free:all-models"]
description = "Generate config/models/pi-free-models.yml from pi --list-models"

[tasks."pi:free:intelligence"]
description = "Generate config/models/intelligence.yml from the Artificial Analysis leaderboard"
```

- [ ] **Step 5: Run the focused tests to verify they pass**

Run: `mise exec -- npm test -- test/pi-free-intelligence.test.ts test/pi-free.test.ts`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add scripts/pi-free-intelligence.ts scripts/pi-free-all-models.ts .mise.toml test/pi-free-intelligence.test.ts test/pi-free.test.ts
git commit -m "refactor: write intelligence and pi discovery as YAML"
```

### Task 4: Add `models.dev` zero-cost candidate generation

**Files:**
- Create: `scripts/pi-free-api-free-models.ts`
- Test: `test/pi-free-api-free-models.test.ts`
- Modify: `.mise.toml`

- [ ] **Step 1: Write the failing test for zero-cost provider filtering**

```ts
import { describe, expect, it } from "vitest";
import { extractApiFreeModels } from "../scripts/pi-free-api-free-models.js";

describe("models.dev zero-cost extraction", () => {
  it("keeps only zero-cost models in provider/model forms that local Pi can probe", () => {
    const payload = {
      openrouter: {
        env: ["OPENROUTER_API_KEY"],
        models: {
          "google/gemma-4-31b-it:free": { cost: { input: 0, output: 0 }, limit: { context: 262144, output: 32768 } },
          "google/gemini-3.1-pro-preview": { cost: { input: 1, output: 5 } },
        },
      },
      nvidia: {
        env: ["NVIDIA_API_KEY"],
        models: {
          "deepseek-ai/deepseek-v4-pro": { cost: { input: 0, output: 0 }, limit: { context: 1000000, output: 393216 } },
        },
      },
    };

    expect(extractApiFreeModels(payload).map((model) => model.spec)).toEqual([
      "nvidia/deepseek-ai/deepseek-v4-pro",
      "openrouter/google/gemma-4-31b-it:free",
    ]);
  });
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `mise exec -- npm test -- test/pi-free-api-free-models.test.ts`
Expected: FAIL because the script and extractor do not exist yet.

- [ ] **Step 3: Implement `scripts/pi-free-api-free-models.ts`**

```ts
export function extractApiFreeModels(payload: Record<string, unknown>): ApiFreeModelRecord[] {
  return Object.entries(payload).flatMap(([provider, providerValue]) => {
    const models = (providerValue as { models?: Record<string, { cost?: { input?: number; output?: number }; limit?: { context?: number; output?: number } }> }).models ?? {};
    return Object.entries(models)
      .filter(([, value]) => (value.cost?.input ?? 1) === 0 && (value.cost?.output ?? 1) === 0)
      .map(([modelId, value]) => ({
        spec: `${provider}/${modelId}`,
        provider,
        model_id: modelId,
        zero_cost: true,
        context_window: value.limit?.context ?? null,
        max_output: value.limit?.output ?? null,
      }));
  });
}
```

- [ ] **Step 4: Add the generation task to `.mise.toml`**

```toml
[tasks."pi:free:api-free-models"]
description = "Generate config/models/api-free-models.yml from models.dev zero-cost metadata"
run = '''
node scripts/pi-free-api-free-models.ts
'''
```

- [ ] **Step 5: Run the focused test to verify it passes**

Run: `mise exec -- npm test -- test/pi-free-api-free-models.test.ts`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add scripts/pi-free-api-free-models.ts test/pi-free-api-free-models.test.ts .mise.toml
git commit -m "feat: generate zero-cost API model candidates"
```

### Task 5: Replace hardcoded runtime policy with YAML-driven runtime selection

**Files:**
- Modify: `scripts/pi-free-models.ts`
- Modify: `.pi/extensions/pi-free-fallback.ts`
- Create: `config/models/defaults.yml`
- Create: `config/models/matching-overrides.yml`
- Test: `test/pi-free.test.ts`

- [ ] **Step 1: Write failing tests for runtime YAML selection and defaults fallback**

```ts
it("reads ordered runtime models from config/models.yml", () => {
  writeRuntimeModelsFile({
    version: 1,
    generated_at: "2026-05-02T12:00:00.000Z",
    ordered_models: [
      { spec: "openrouter/google/gemma-4-31b-it:free", source: "pi", provider: "openrouter", model_id: "google/gemma-4-31b-it:free", intelligence_record_id: "gemma-4-31b", artificial_analysis_intelligence_index: 39, zero_cost: true, elapsed_ms: 1000 },
    ],
  });

  expect(resolvePiFreeOrderedModels({ OPENROUTER_API_KEY: "or-key" })).toEqual(["openrouter/google/gemma-4-31b-it:free"]);
});

it("falls back to defaults.yml when config/models.yml is missing", () => {
  writeModelDefaultsFile({
    version: 1,
    generated_from_ranked_seed: false,
    runtime_fallback_order: ["nvidia/deepseek-ai/deepseek-v4-pro"],
    provider_policy: { nvidia: { enabled: true } },
    manual_priorities: [],
    manual_exclusions: [],
  });

  expect(resolvePiFreeStartupModel({ NVIDIA_API_KEY: "nv-key" })).toBe("nvidia/deepseek-ai/deepseek-v4-pro");
});
```

- [ ] **Step 2: Run the focused tests to verify they fail**

Run: `mise exec -- npm test -- test/pi-free.test.ts`
Expected: FAIL because runtime selection still depends on hardcoded `PI_FREE_MODEL_CYCLE` and JSON files.

- [ ] **Step 3: Implement YAML-driven readers in `scripts/pi-free-models.ts` and simplify the extension**

```ts
export function resolvePiFreeOrderedModels(envValues: PiFreeEnvValues = process.env): string[] {
  const runtimeFile = readRuntimeModelsFile();
  if (runtimeFile?.ordered_models?.length) {
    return runtimeFile.ordered_models
      .map((entry) => entry.spec)
      .filter((spec) => {
        const parsed = parsePiFreeModelSpec(spec);
        return parsed ? hasPiFreeProviderAuth(parsed.provider, envValues) : false;
      });
  }

  const defaultsFile = readModelDefaultsFile();
  return (defaultsFile?.runtime_fallback_order ?? []).filter((spec) => {
    const parsed = parsePiFreeModelSpec(spec);
    return parsed ? hasPiFreeProviderAuth(parsed.provider, envValues) : false;
  });
}
```

```ts
// .pi/extensions/pi-free-fallback.ts
const orderedModels = resolvePiFreeOrderedModels();
if (orderedModels.length === 0) return;
```

- [ ] **Step 4: Add manual YAML seed files**

```yaml
# config/models/defaults.yml
version: 1
generated_from_ranked_seed: false
runtime_fallback_order:
  - nvidia/deepseek-ai/deepseek-v4-pro
  - openrouter/google/gemma-4-31b-it:free
provider_policy:
  openrouter:
    require_free_suffix: true
  nvidia:
    enabled: true
manual_priorities: []
manual_exclusions: []
```

```yaml
# config/models/matching-overrides.yml
version: 1
intelligence_alias_overrides:
  kimi-k2-5-non-reasoning:
    - moonshotai/kimi-k2.5
```

- [ ] **Step 5: Run the focused tests to verify they pass**

Run: `mise exec -- npm test -- test/pi-free.test.ts`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add scripts/pi-free-models.ts .pi/extensions/pi-free-fallback.ts config/models/defaults.yml config/models/matching-overrides.yml test/pi-free.test.ts
git commit -m "refactor: drive runtime model selection from YAML"
```

### Task 6: Split ranking into Pi/API passes and merge into `config/models.yml`

**Files:**
- Modify: `scripts/pi-free-rank-models.ts`
- Create: `scripts/pi-free-merge-models.ts`
- Test: `test/pi-free-merge-models.test.ts`
- Modify: `.mise.toml`

- [ ] **Step 1: Write the failing test for duplicate merge and final ordering**

```ts
import { describe, expect, it } from "vitest";
import { mergeRankedModelSources } from "../scripts/pi-free-merge-models.js";

describe("final model merge", () => {
  it("prefers successful Pi-discovered records and enriches them with API metadata", () => {
    const merged = mergeRankedModelSources(
      {
        results: [
          { spec: "openrouter/google/gemma-4-31b-it:free", ok: true, provider: "openrouter", model_id: "google/gemma-4-31b-it:free", elapsed_ms: 2000, error_type: null, error_message: null, output_excerpt: "HI", intelligence_record_id: "gemma-4-31b", artificial_analysis_intelligence_index: 39 },
        ],
      },
      {
        results: [
          { spec: "openrouter/google/gemma-4-31b-it:free", ok: true, provider: "openrouter", model_id: "google/gemma-4-31b-it:free", elapsed_ms: 3000, error_type: null, error_message: null, output_excerpt: "HI", intelligence_record_id: "gemma-4-31b", artificial_analysis_intelligence_index: 39, zero_cost: true },
        ],
      },
      { version: 1, generated_from_ranked_seed: false, runtime_fallback_order: [], provider_policy: {}, manual_priorities: [], manual_exclusions: [] }
    );

    expect(merged.ordered_models[0]).toEqual(
      expect.objectContaining({
        spec: "openrouter/google/gemma-4-31b-it:free",
        source: "pi",
        zero_cost: true,
      })
    );
  });
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `mise exec -- npm test -- test/pi-free-merge-models.test.ts`
Expected: FAIL because the merge script does not exist yet.

- [ ] **Step 3: Generalize ranking + implement final merge**

```ts
// scripts/pi-free-rank-models.ts
const source = args.source === "api" ? readApiFreeModelsFile() : readPiFreeDiscoveryFile();
const results = await mapWithConcurrency(source.models, args.concurrency, async (candidate) => {
  const output = await probeModel(args.prompt, { model: candidate.spec, timeoutMs: args.timeoutMs });
  return buildRankedResult(candidate, output);
});
writeRankedModelsFile(args.source, buildRankedModelsFile(results, args));
```

```ts
// scripts/pi-free-merge-models.ts
export function mergeRankedModelSources(piRanked: RankedModelsFile, apiRanked: RankedModelsFile, defaults: ModelDefaultsFile): RuntimeModelsFile {
  const successful = [...piRanked.results.filter((r) => r.ok), ...apiRanked.results.filter((r) => r.ok)];
  const mergedBySpec = new Map<string, RuntimeModelEntry>();
  for (const result of successful) {
    const existing = mergedBySpec.get(result.spec);
    if (!existing || existing.source !== "pi") {
      mergedBySpec.set(result.spec, {
        spec: result.spec,
        source: existing?.source === "pi" ? "pi" : result.source,
        provider: result.provider,
        model_id: result.model_id,
        intelligence_record_id: result.intelligence_record_id,
        artificial_analysis_intelligence_index: result.artificial_analysis_intelligence_index,
        zero_cost: result.zero_cost ?? existing?.zero_cost ?? false,
        elapsed_ms: result.elapsed_ms,
      });
    }
  }
  return orderRuntimeModels([...mergedBySpec.values()], defaults);
}
```

- [ ] **Step 4: Update task wiring in `.mise.toml`**

```toml
[tasks."pi:free:rank-models"]
description = "Rank models from a chosen YAML source with direct no-fallback probes"
usage = '''
flag "--source <source>" help="pi or api"
flag "--limit <limit>" help="Optional cap on models to probe"
flag "--prompt <prompt>" help="Prompt to send to each model"
flag "--timeout-ms <timeoutMs>" help="Per-model timeout in milliseconds"
flag "--concurrency <concurrency>" help="Parallel probe count"
'''
run = '''
node scripts/pi-free-rank-models.ts --source {{ usage.source }}{% if usage.limit %} --limit {{ usage.limit }}{% endif %}{% if usage.prompt %} --prompt {{ usage.prompt | json_encode }}{% endif %}{% if usage.timeout_ms %} --timeout-ms {{ usage.timeout_ms }}{% endif %}{% if usage.concurrency %} --concurrency {{ usage.concurrency }}{% endif %}
'''

[tasks."pi:free:merge-models"]
description = "Merge ranked YAML sources into config/models.yml"
run = '''
node scripts/pi-free-merge-models.ts
'''
```

- [ ] **Step 5: Run the focused tests to verify they pass**

Run: `mise exec -- npm test -- test/pi-free-merge-models.test.ts test/pi-free.test.ts`
Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add scripts/pi-free-rank-models.ts scripts/pi-free-merge-models.ts .mise.toml test/pi-free-merge-models.test.ts test/pi-free.test.ts
git commit -m "feat: split ranking sources and merge final runtime models"
```

### Task 7: Cut over workflows, seed defaults once, and verify end to end

**Files:**
- Modify: `.github/workflows/refresh-metadata.yml`
- Modify: `.github/workflows/check-generated-docs.yml`
- Modify: `scripts/pi-free-models.ts`
- Modify: `scripts/paths.ts`
- Modify: `.mise.toml`

- [ ] **Step 1: Write the failing regression test for runtime defaults seed order**

```ts
it("can seed defaults.yml from a ranked result without changing runtime contract", () => {
  const seeded = seedDefaultsFromRanked(
    [
      { spec: "openrouter/google/gemma-4-31b-it:free" },
      { spec: "openrouter/openai/gpt-oss-20b:free" },
    ],
    {
      version: 1,
      generated_from_ranked_seed: false,
      runtime_fallback_order: [],
      provider_policy: {},
      manual_priorities: [],
      manual_exclusions: [],
    }
  );

  expect(seeded.generated_from_ranked_seed).toBe(true);
  expect(seeded.runtime_fallback_order).toEqual([
    "openrouter/google/gemma-4-31b-it:free",
    "openrouter/openai/gpt-oss-20b:free",
  ]);
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `mise exec -- npm test -- test/pi-free.test.ts test/pi-free-merge-models.test.ts`
Expected: FAIL because the seed helper does not exist yet.

- [ ] **Step 3: Update workflows and cutover remaining JSON references**

```yaml
# .github/workflows/refresh-metadata.yml
- name: Generate Pi model YAMLs
  run: |
    mise run pi:free:intelligence
    mise run pi:free:all-models --timeout-ms 60000
    mise run pi:free:api-free-models
    mise run pi:free:rank-models --source pi --timeout-ms 60000
    mise run pi:free:rank-models --source api --timeout-ms 60000
    mise run pi:free:merge-models
```

```ts
// scripts/pi-free-models.ts
export function seedDefaultsFromRanked(entries: { spec: string }[], defaults: ModelDefaultsFile): ModelDefaultsFile {
  return {
    ...defaults,
    generated_from_ranked_seed: true,
    runtime_fallback_order: entries.map((entry) => entry.spec),
  };
}
```

- [ ] **Step 4: Run the full narrow verification set**

Run: `mise exec -- npm exec tsc -- --noEmit`
Expected: `mise: ok`

Run: `mise exec -- npm test -- test/model-config.test.ts test/ai-runner.test.ts test/pi-free.test.ts test/pi-free-intelligence.test.ts test/pi-free-api-free-models.test.ts test/pi-free-merge-models.test.ts`
Expected: PASS

Run: `mise run pi:free:intelligence`
Expected: writes `config/models/intelligence.yml`

Run: `mise run pi:free:all-models --timeout-ms 60000`
Expected: writes `config/models/pi-free-models.yml`

Run: `mise run pi:free:api-free-models`
Expected: writes `config/models/api-free-models.yml`

Run: `mise run pi:free:rank-models --source pi --timeout-ms 60000`
Expected: writes `config/models/ranked-pi-free-models.yml`

Run: `mise run pi:free:rank-models --source api --timeout-ms 60000`
Expected: writes `config/models/ranked-api-free-models.yml`

Run: `mise run pi:free:merge-models`
Expected: writes `config/models.yml`

Run: `mise run catalog:validate`
Expected: `✅ Catalog is valid`

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/refresh-metadata.yml .github/workflows/check-generated-docs.yml scripts/pi-free-models.ts scripts/paths.ts .mise.toml
git commit -m "refactor: cut over model pipeline to YAML runtime contract"
```

## Self-Review Checklist

### Spec coverage

- `ai-runner` as sole Pi execution boundary: Task 2
- `.env` + `.env.pi-free` merge with override: Task 2
- YAML under `config/models/`: Tasks 1, 3, 4, 5, 6
- `config/models.yml` as sole runtime contract: Tasks 5 and 6
- raw Pi discovery vs zero-cost `models.dev` candidates kept separate: Tasks 3 and 4
- dual ranked passes + final merge: Task 6
- `defaults.yml` may be seeded once from ranked order: Task 7
- JSON removal and workflow cutover: Task 7

### Placeholder scan

- No `TBD`, `TODO`, or “similar to above” placeholders remain.
- Every task includes exact files, commands, and concrete code snippets.

### Type consistency

- YAML helper types originate in `scripts/model-config.ts`
- `ai-runner` owns `runPrompt()`, `listModels()`, and `probeModel()` behavior
- runtime reads `config/models.yml` and only falls back to `config/models/defaults.yml`

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-05-02-pi-free-model-pipeline-implementation.md`. Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**