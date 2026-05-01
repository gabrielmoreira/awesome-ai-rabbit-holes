# Progress Log

## 2026-05-02 — Session 1

### Setup
- Loaded planning workflow into the main repo.
- Confirmed main repo has many unrelated modifications and untracked generated files.
- Isolated the reintegration file set that should be touched.

### Current Plan
1. Copy validated focused tests into main and run them to establish RED.
2. Copy validated implementation/task/workflow files into main.
3. Run typecheck and focused tests in main.
4. Report only verified status.

### Notes
- The validated source of truth for reintegration is `awesome-ai-rabbit-holes-validate`.
- Do not overwrite unrelated generated files in main.

### RED verification
- Command: `mise exec -- npm test -- test/catalog.test.ts test/pi-free.test.ts test/ai-runner.test.ts`
- Result: failed as expected before reintegration
- Observed failures included:
  - `resolveCatalogAITimeoutMs` still returns `120000` instead of validated `60000`
  - prompt builder still uses hardcoded category guidance instead of YAML-driven guidance
  - additional catalog expectations for non-fatal processing defaults / AI budget handling are not yet satisfied in main

### Reintegration copy
- Copied validated focused implementation files from `awesome-ai-rabbit-holes-validate` into main for:
  - `scripts/catalog.ts`
  - `scripts/ai.ts`
  - `scripts/ai-runner.ts`
  - `scripts/types.ts`
  - `scripts/github.ts`
  - `.mise.toml`
  - `.pi/extensions/pi-free-fallback.ts`
  - `.github/workflows/refresh-metadata.yml`
  - `catalog/categories.yml`
  - `scripts/pi-free-models.ts`
  - `scripts/pi-free-rank-models.ts`
  - focused tests (`catalog`, `ai-runner`, `pi-free`)

### GREEN verification
- Typecheck: `mise exec -- npm exec tsc -- --noEmit` -> pass
- Focused tests: `mise exec -- npm test -- test/catalog.test.ts test/pi-free.test.ts test/ai-runner.test.ts` -> `3 passed`, `130 passed`

## 2026-05-02 — Session 2

### Reset and source/config split
- Created safety stash before destructive cleanup: `stash@{0}` message `pre-generated-reset-2026-05-02`.
- Deleted generated trees from the worktree: `.cache/`, `README.md`, `docs/rabbit-holes/`, `site/catalog.json`, `catalog/items/`.
- Restored source files needed for continued work and migrated source inputs into `config/`.
- Added `scripts/paths.ts` and moved config inputs to:
  - `config/catalog/config.yml`
  - `config/catalog/categories.yml`
  - `config/sources/inbox.yml`
  - `config/sources/scope.yml`
- Removed the old source/config locations:
  - `sources/`
  - `catalog/config.yml`
  - `catalog/categories.yml`

### Free-model ranking refactor
- Added separated tasks and scripts:
  - `mise run pi:free:all-models`
  - `mise run pi:free:intelligence`
  - `mise run pi:free:rank-models`
- `pi:free:all-models` now generates `catalog/pi-free/all-models.json`.
- `pi:free:intelligence` now generates `config/pi-free/intelligence.json` from the Artificial Analysis leaderboard with a direct-fetch + reader-mode fallback strategy.
- `pi:free:rank-models` now consumes both files, probes the full candidate set, and orders successful models by known intelligence before latency.
- Tasks now load `.env` globally through `.mise.toml` instead of `.env.pi-free` task-local wiring.

### Verification completed so far
- Focused tests: `mise exec -- npm test -- test/pi-free.test.ts test/pi-free-intelligence.test.ts test/catalog.test.ts` -> `3 passed`, `128 passed`
- Typecheck: `mise exec -- npm exec tsc -- --noEmit` -> pass
- Intelligence generation: `mise run pi:free:intelligence` -> `SUCCESS 212`
- All-model inventory: `mise run pi:free:all-models --timeout-ms 60000` -> `SUCCESS 332`
- Bounded regeneration: `CATALOG_AI_INSIGHT_BUDGET_MS=120000 CATALOG_AI_TIMEOUT_MS=60000 CATALOG_FAIL_ON_PROCESSING_ERRORS=0 mise run catalog:update`
  - observed summary from distilled output: `4146 items in catalog`
  - observed non-fatal AI timeouts: `2` (`github__bloopai__vibe-kanban`, `github__bradagi__awesome-cli-coding-agents`)
- Catalog validation after bounded run: `mise run catalog:validate` -> `PASS`

### Still running
- Full `mise run pi:free:rank-models --timeout-ms 60000` started in background job `bg_1` and was still running at last check.

### Final ranking corrections
- Fixed a bad intelligence link reported by the user: `openrouter/moonshotai/kimi-k2.5` had been linked to `kimi-k2-6`; matching now prefers the most specific alias before raw intelligence score.
- Restricted OpenRouter candidate discovery/ordering to specs explicitly ending in `:free`.
- Protected `test/pi-free.test.ts` from deleting real generated `catalog/pi-free/*.json` artifacts during cleanup.
- Final reruns after those fixes:
  - `mise run pi:free:all-models --timeout-ms 60000` -> `Wrote 49 model(s) to all-models.json.`
  - `mise run pi:free:rank-models --timeout-ms 60000` -> `49` probed, `9` successes, `40` failures
  - direct JSON check confirmed:
    - no OpenRouter entries without `:free` remained in `all-models.json`
    - no OpenRouter entries without `:free` remained in `ranked-models.json`
    - `nvidia/moonshotai/kimi-k2.5` now maps to `kimi-k2-5-non-reasoning` with intelligence `37`
- Fresh validation after the last patch: `mise run catalog:validate` -> `✅ Catalog is valid (4146 items, 15 sources)`

### Review automation
- Invoked TypeScript reviewer jobs for the changed code, but both review jobs stalled without returning findings and were canceled explicitly rather than being silently ignored.
