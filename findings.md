# Findings

## Main repo current state
- `awesome-ai-rabbit-holes` is significantly dirtier than `awesome-ai-rabbit-holes-validate`.
- The reintegration-relevant file set is still clear and isolated enough to update safely.
- Planning files were absent in main before this session.

## Validated changes to reintegrate
Main repo still lacks the validated behavior in these areas:
- budget-aware AI insight batching in `scripts/catalog.ts`
- richer `materializeCatalogState` return shape and blocked-item handling integration
- non-fatal processing errors by default
- YAML-driven category prompt guidance in `scripts/ai.ts`
- 60s default AI timeout plus per-call timeout override in `scripts/ai-runner.ts`
- ranked/master-list precedence in `.pi/extensions/pi-free-fallback.ts`
- `pi:free:rank-models` task and its supporting scripts
- workflow defaults for non-fatal scheduled processing and cache persistence

## Safe reintegration set
Existing files to replace:
- `scripts/catalog.ts`
- `scripts/ai.ts`
- `scripts/ai-runner.ts`
- `scripts/types.ts`
- `.mise.toml`
- `.pi/extensions/pi-free-fallback.ts`
- `test/catalog.test.ts`
- `test/ai-runner.test.ts`
- `test/pi-free.test.ts`
- `.github/workflows/refresh-metadata.yml`
- `catalog/categories.yml`

New files to add:
- `scripts/pi-free-models.ts`
- `scripts/pi-free-rank-models.ts`

## Verification target
After reintegration, the main repo should pass:
- `mise exec -- npm exec tsc -- --noEmit`
- `mise exec -- npm test -- test/catalog.test.ts test/pi-free.test.ts test/ai-runner.test.ts`

## Execution strategy
- Update focused tests first and confirm RED.
- Then copy validated implementation files.
- Then run typecheck and focused tests in main.
- Avoid touching unrelated generated catalog/docs already modified in main.

## Current refactor decisions
- Chose `config/` as the durable home for source/config inputs so `catalog/` can remain a derived tree.
- Split pi-free artifacts into three stages/files:
  1. `config/pi-free/intelligence.json` — extracted reference intelligence data
  2. `catalog/pi-free/all-models.json` — generated inventory from `pi --list-models`
  3. `catalog/pi-free/ranked-models.json` — generated probe results and runtime ordering
- `pi:free:rank-models` now depends on the other two artifacts instead of discovering models inline.
- Runtime ordering precedence is now intended to be:
  1. `catalog/pi-free/ranked-models.json`
  2. `catalog/pi-free/all-models.json` ordered against `config/pi-free/intelligence.json`
  3. source-controlled bootstrap fallback cycle in `scripts/pi-free-models.ts`
- Full probing behavior now uses every discovered candidate from `all-models.json`; it no longer pre-filters the probe set to only auth-configured entries.
- Successful ranked results sort by known Artificial Analysis intelligence before latency.
- `.mise.toml` now loads `.env` globally, matching the user's request that available API keys come from `.env`.

## Observed external-data behavior
- `read("https://artificialanalysis.ai/leaderboards/models")` returned the leaderboard rows in reader-mode markdown, including model links and intelligence scores.
- Raw HTML/browser access in this harness was unreliable, so the extraction script was designed to try the original URL first and fall back to reader-mode parsing when direct parsing yields no leaderboard rows.
- Generated `config/pi-free/intelligence.json` currently contains `212` records.
- Generated `catalog/pi-free/all-models.json` currently contains `332` discovered models.

## Bounded clean-tree rerun result
- After stashing and deleting generated trees, a bounded clean-tree `catalog:update` completed with validation passing.
- Observed distilled summary: `4146 items in catalog` after the run.
- Observed non-fatal AI processing errors: `2`, both `ai_insights` timeouts at `60000ms`.

## Remaining verification
- The full clean-tree `pi:free:rank-models --timeout-ms 60000` run is still in progress in background job `bg_1`.
