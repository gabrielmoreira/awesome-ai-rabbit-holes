# Task Plan

## Goal
Reset generated outputs, separate pi-free intelligence/all-models/ranked-models into explicit stages, move source config into `config/`, and re-run the catalog from a clean tree with a bounded local budget.

## Status
- Current phase: Full ranking run
- Overall status: in_progress

## Phases

### Phase 1 — Clean reset
Status: complete
- Stash the dirty worktree for safety
- Delete generated cache/docs/catalog outputs
- Rebuild from a clean generated tree baseline

### Phase 2 — Config layout migration
Status: complete
- Move source/config inputs under `config/`
- Update code, tests, and workflow cache keys to follow `config/`
- Remove the old duplicate source/config locations

### Phase 3 — Split pi-free artifacts
Status: complete
- Create an `intelligence.json` generation step
- Create an `all-models.json` generation step
- Make `rank-models` consume those two inputs and sort successes by intelligence

### Phase 4 — Verification and rerun
Status: in_progress
- Run focused tests and typecheck after the refactor
- Generate `config/pi-free/intelligence.json`
- Generate `catalog/pi-free/all-models.json`
- Run full `catalog/pi-free/ranked-models.json` generation
- Run bounded clean-tree `catalog:update` with `CATALOG_AI_INSIGHT_BUDGET_MS=120000` and `CATALOG_AI_TIMEOUT_MS=60000`
- Validate the generated catalog and report observed results

## Reintegrated File Set
Existing files to replace from validate:
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

New files to add from validate:
- `scripts/pi-free-models.ts`
- `scripts/pi-free-rank-models.ts`

## Decisions
- Preserve unrelated generated output changes already present in main; touch only the reintegration set above.
- Follow TDD order for the reintegration slice: tests first, verify failure, then implementation.
- Main repo must end up with the same validated behavior as the validate repo for the reintegration set.

## Errors Encountered
| Error | Attempt | Resolution |
|---|---:|---|
| None in main repo reintegration yet | 0 | Pending |

## Risks
- Main repo is already dirty with many generated and content changes; careless wide copies would trample unrelated work.
- `.pi/` is currently untracked in main repo; reintegration must still add the validated extension file.
