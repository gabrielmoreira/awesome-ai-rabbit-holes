# Pi-Free Model Pipeline Redesign

Date: 2026-05-02
Status: approved design

## Summary

Redesign the model discovery, probing, and runtime selection pipeline so that:

- `ai-runner` is the only code allowed to invoke `pi` or `mise`
- model-related state moves to YAML under `config/models/`
- the runtime reads exactly one definitive file: `config/models.yml`
- raw Pi discovery and `models.dev` zero-cost discovery remain separate inputs
- ranking probes run without the fallback extension so results reflect the truth about each requested model
- hardcoded defaults, aliases, and bootstrap model lists are removed from `scripts/pi-free-models.ts`

## Goals

1. Preserve one clean execution boundary for Pi invocation.
2. Stop spreading model policy across TypeScript constants, generated JSON, and runtime code.
3. Load both `.env` and `.env.pi-free`, with `.env.pi-free` overriding `.env`.
4. Keep raw discovery, metadata-derived candidates, ranked probe outputs, and runtime selection as distinct artifacts.
5. Make runtime behavior deterministic by reading only `config/models.yml`.
6. Keep enough intermediate YAML to explain why a model was or was not selected.

## Non-goals

1. Do not introduce new TypeScript wrappers around Pi outside `ai-runner`.
2. Do not treat `models.dev/api.json` as proof that a model works.
3. Do not keep JSON artifacts for the redesigned model pipeline.
4. Do not let runtime selection read intermediate files directly.

## Problems In The Current Shape

1. `.mise.toml` currently loads only `.env`, so `.env.pi-free` credentials are invisible unless passed another way.
2. `scripts/pi-free-models.ts` still contains hardcoded bootstrap/default and matching policy.
3. generated model artifacts are JSON and split between `config/` and `catalog/`.
4. `all-models` currently acts as a filtered candidate list instead of a truthful raw discovery snapshot.
5. ranking and discovery logic know too much about Pi invocation details instead of going through one execution boundary.

## Source Of Truth Layout

### Manual YAML

- `config/models/defaults.yml`
- `config/models/matching-overrides.yml`

### Generated YAML

- `config/models/intelligence.yml`
- `config/models/pi-free-models.yml`
- `config/models/api-free-models.yml`
- `config/models/ranked-pi-free-models.yml`
- `config/models/ranked-api-free-models.yml`

### Definitive Runtime YAML

- `config/models.yml`

## Meaning Of Each File

### `config/models/defaults.yml`

Durable manual policy and bootstrap fallback input. This file owns:

- default runtime ordering when `config/models.yml` is missing or empty
- provider policy that should outlive one probe run
- any manual priority or exclusion policy that should remain stable across refreshes

Important rule: `defaults.yml` may be seeded once from the best available ranked order so the manual fallback starts from a sensible baseline. After that, it remains a durable policy file and is not silently rewritten during normal runtime execution.

### `config/models/matching-overrides.yml`

Durable manual matching fixes, such as alias corrections and family-specific overrides that should not live in TypeScript.

Example use cases:

- `kimi-k2.5` must resolve to the correct intelligence record
- provider/model naming differences that cannot be inferred safely from normalization alone

### `config/models/intelligence.yml`

Generated intelligence metadata derived from the Artificial Analysis leaderboard.

This file does not decide runtime eligibility by itself. It enriches ranking and merge decisions.

### `config/models/pi-free-models.yml`

Raw discovery snapshot from Pi.

Source:

- `ai-runner.listModels()`
- direct mode
- fallback disabled
- env merged from `.env` then `.env.pi-free`

This file should reflect what `pi --list-models` exposed under the loaded credentials. It is a discovery artifact, not a policy-filtered final list.

### `config/models/api-free-models.yml`

Generated zero-cost candidate set derived from `https://models.dev/api.json`.

This file is filtered to models that are:

- zero-cost according to the metadata source
- expressed in a provider/model form we can attempt through the local Pi workflow

This file is metadata-derived and does not prove runtime usability.

### `config/models/ranked-pi-free-models.yml`

Probe results for every candidate from `pi-free-models.yml`.

Source:

- `ai-runner.probeModel()`
- direct mode
- fallback disabled

### `config/models/ranked-api-free-models.yml`

Probe results for every candidate from `api-free-models.yml`, including API-only candidates that were not present in raw Pi discovery.

Source:

- `ai-runner.probeModel()`
- direct mode
- fallback disabled
- explicit model required

### `config/models.yml`

The only definitive runtime file.

Runtime selection reads this file only. It is generated from successful results in the ranked YAML files, merged with durable manual policy from `defaults.yml` and enriched by `intelligence.yml` and `matching-overrides.yml`.

## `ai-runner` Contract

`ai-runner` becomes the sole execution boundary for all Pi-related work.

No other script may spawn `pi`, `pi.exe`, `mise`, or `mise.exe` directly.

### Responsibilities

1. Load env files.
2. Merge env values.
3. Normalize provider-specific env aliases in one place.
4. Spawn Pi in the correct mode.
5. Return truthful per-call results.

### Env Loading Rules

`ai-runner` loads env files in this order:

1. `.env`
2. `.env.pi-free`

If the same variable exists in both, `.env.pi-free` wins.

Model-related scripts must rely on this explicit merge behavior rather than on `.mise.toml` env-file loading.

### Execution Modes

#### Managed runtime mode

Used by normal catalog AI generation.

Behavior:

- allowed to use the fallback extension
- preserves the existing `pi:free` runtime path
- uses `config/models.yml` as the definitive ordered model contract

This mode is the only mode allowed to walk a fallback chain.

#### Direct discovery/probe mode

Used by discovery and ranking.

Behavior:

- fallback extension disabled
- no model-chain walking
- explicit requested model is tested directly
- result must describe the truth about that exact requested model

This mode is used by:

- `listModels()`
- `probeModel()`

### Public Surface

The design assumes these high-level entry points in `ai-runner`:

- `runPrompt(...)` for runtime catalog prompts, fallback enabled
- `listModels(...)` for raw discovery, fallback disabled
- `probeModel(...)` for explicit single-model probe, fallback disabled

Exact TypeScript signatures are implementation detail. The contract is behavioral, not cosmetic.

## Pipeline Flow

### Step 1: Raw Pi discovery

Generate `config/models/pi-free-models.yml` from `ai-runner.listModels()` in direct mode.

Rules:

- no fallback
- merged env from `.env` then `.env.pi-free`
- keep it as a truthful discovery snapshot
- do not reduce it to only free or preferred models at this stage

### Step 2: Zero-cost metadata discovery

Generate `config/models/api-free-models.yml` from `models.dev/api.json`.

Rules:

- keep only zero-cost models
- keep only provider/model forms that are plausibly usable through the local Pi workflow
- this is still only a candidate source, not runtime truth

### Step 3: Independent ranking passes

Generate:

- `config/models/ranked-pi-free-models.yml`
- `config/models/ranked-api-free-models.yml`

Rules:

- every candidate in each source file is probed independently
- both ranking passes call `ai-runner.probeModel()` in direct mode
- failures do not abort the whole ranking run
- every result records exactly which requested model was tested and what happened

### Step 4: Final merge

Generate `config/models.yml` from the two ranked YAMLs.

Rules:

- only successful probes enter the final runtime file
- duplicates are deduplicated by exact normalized model spec
- if the same spec appears in both ranked files, prefer the Pi-discovered record as the base runtime record
- merge in useful metadata from the API-derived side when available, such as zero-cost signal and cost/context metadata

## Ordering Rules

The final ordered runtime model list in `config/models.yml` should be produced by these priorities:

1. explicit manual policy from `defaults.yml`, when present
2. intelligence score from `intelligence.yml`
3. source confidence, with Pi-discovered success ranked above API-only success
4. successful probe latency
5. stable lexical tiebreaker

`defaults.yml` may be initially seeded from a good ranked result so that manual fallback order starts sensible even before later tuning.

## Error Handling

### Discovery failures

- failure to generate `pi-free-models.yml` must not silently reuse stale discovery as if nothing happened
- the pipeline may keep previous artifacts on disk, but the failure must be explicit in command output

### Metadata fetch failures

- failure to fetch `models.dev/api.json` should not break the whole catalog pipeline if a valid `config/models.yml` already exists
- this should degrade ranking freshness, not destroy runtime behavior

### Probe failures

- one probe failure must not abort the whole ranking run
- failed results stay in the ranked source YAML for debugging
- failed results do not enter `config/models.yml`

### Runtime fallback

- runtime reads only `config/models.yml`
- if `config/models.yml` is missing or empty, runtime falls back to `config/models/defaults.yml`
- runtime must never read intermediate generated YAML files directly

## Expected Ranked YAML Contents

Each ranked YAML should retain enough detail to explain the outcome for each model, including:

- requested model spec
- source file or source kind
- execution mode (`direct`)
- success or failure
- elapsed time
- normalized error type
- raw or lightly normalized error excerpt
- matched intelligence record id, when present
- intelligence score, when present

## Verification Requirements

The redesign is not complete without focused verification for these cases:

1. env precedence
   - `.env.pi-free` overrides `.env`
2. `ai-runner` mode separation
   - discovery and probe paths do not load fallback
   - runtime path does
3. raw discovery truthfulness
   - `pi-free-models.yml` reflects raw Pi discovery rather than a policy-filtered subset
4. metadata candidate generation
   - `api-free-models.yml` only includes zero-cost models in provider/model forms we can attempt
5. direct probe truthfulness
   - API-only candidates can be probed directly without fallback
6. merge correctness
   - successful ranked outputs merge deterministically into `config/models.yml`
   - duplicate records across sources merge correctly
7. regression coverage
   - Kimi specificity fix
   - OpenRouter `:free` handling
   - runtime fallback to `defaults.yml`

## Cutover Plan Constraints

Implementation should make one clean cutover:

- remove hardcoded default model cycle and alias policy from `scripts/pi-free-models.ts`
- remove JSON readers, writers, and paths for the redesigned model pipeline
- update tasks, scripts, workflows, and tests to YAML paths
- keep one final runtime contract: `config/models.yml`

## Consequences

### Benefits

- one clear execution boundary
- one definitive runtime file
- raw discovery and derived metadata no longer get conflated
- ranking becomes truthful because fallback is disabled during probes
- runtime behavior becomes easier to reason about and test

### Costs

- more YAML artifacts to maintain
- one extra merge stage
- `ai-runner` takes on more responsibility and must stay well-tested

## Final Decision

Adopt the single-gateway `ai-runner` design, move model pipeline artifacts to YAML under `config/models/`, keep `config/models.yml` as the definitive runtime contract, and eliminate hardcoded model policy from `scripts/pi-free-models.ts`.