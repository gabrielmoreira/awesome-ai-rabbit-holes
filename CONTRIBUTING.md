# Contributing

The pipeline owns generated output. Humans own the inputs.

## First rules

- Do not hand-edit `README.md`.
- Do not hand-edit `docs/rabbit-holes/*.md`.
- Do not hand-edit `catalog/catalog.json`.
- Do not hand-edit `catalog/items/**/*.yml`.
- Do not manually sort rendered sections or generated item files.
- Use `.local/` for scratch notes, plans, and temporary reports. It is ignored on purpose.

If the catalog output is wrong, fix the source input or add an override. Do not patch the generated files directly.

## What belongs where

### Human-owned inputs

- `config/sources.yml` — discovery queue
- `config/categories.yml` — taxonomy and category descriptions
- `config/settings.yml` — budgets, concurrency, and catalog policy defaults
- `overrides/catalog/items/**/*.yml` — last-resort manual corrections
- `.env.pi-free.example` — example provider configuration only

### Generated outputs

- `README.md`
- `docs/rabbit-holes/*.md`
- `catalog/catalog.json`
- `catalog/items/**/*.yml`

### Local-only state

- `.cache/` — website, README, and source-list caches
- `.local/` — personal notes, plans, reports, scratch docs
- `.env`, `.env.pi-free` — local credentials and overrides

## Catalog scope

This repo is not a generic AI directory. It catalogs practical AI tools and rabbit holes that matter to software developers: coding agents, app builders, agent orchestration, MCP tooling, AI IDEs, local AI, evals, and adjacent developer workflow infrastructure.

Lower priority or out of scope:

- generic prompt collections
- broad AI news feeds with no developer-tooling angle
- general ML research with no clear developer workflow relevance
- diffusion / computer vision / RL links that do not map back to developer tooling
- random secondary URLs such as forms, badges, docs mirrors, image assets, or waitlists

## Setup

1. Install [mise](https://mise.jdx.dev/) and run `mise install`
2. Run `mise run catalog:deps`
3. Configure at least one working provider in `.env` or `.env.pi-free`
4. Verify the Pi fallback stack before doing LLM-backed catalog work

Useful checks:

```sh
mise run llm:doctor --limit 3
mise run catalog:validate
```

Provider credentials come from `.env` and `.env.pi-free`. `.env.pi-free` is optional but useful when you want Pi-specific overrides without polluting your main shell environment.

## Source input rules

`config/sources.yml` is the durable intake file.

Use these source kinds:

- `direct-item` — a single tool, repo, site, paper, or article
- `curated-list` — a list meant to be expanded into item candidates
- omit `kind` only when you want the default `direct-item`

Examples:

```yaml
- url: https://github.com/example/cool-agent-tool
  kind: direct-item
  note: CLI coding agent for large repo refactors.

- url: https://github.com/example/awesome-ai-agents
  kind: curated-list
  note: Useful developer-facing list with strong agent coverage.
```

Guidance:

- Prefer the main product or repo URL, not a deep docs page.
- If a real GitHub repo exists, the pipeline prefers the GitHub repo as canonical.
- Website-only entries should be explicit maintainer inputs or clearly primary entries from a relevant curated list.
- Low-signal secondary links should not become catalog tools.

## Normal workflow

For most changes, this is enough:

```sh
mise run catalog:sync
```

`catalog:sync` runs the real pipeline in order:

1. `catalog:discover`
2. `catalog:stars`
3. `catalog:categorize`
4. `catalog:render`
5. `catalog:validate`

Local and CI should use the same command surface.

## Fixing one item or a small subset

Prefer targeted maintenance before reaching for overrides.

```sh
mise run catalog:resync --id github__example__cool-agent-tool --categorize
mise run catalog:resync --where processing.categorize.status=deferred --categorize
mise run catalog:resync --match "lovable|bolt|v0" --categorize
mise run catalog:resync --url https://github.com/example/cool-agent-tool --stars
```

Notes:

- `--discover` re-runs source discovery for the matched subset
- `--stars` refreshes GitHub metadata for the matched items
- `--categorize` forces a fresh categorization attempt for the matched items
- if you pass no action flags, `catalog:resync` defaults to categorization

## Overrides

Only add an override when the deterministic pipeline plus a targeted resync still lands on the wrong result.

Example:

```yaml
id: github__example__cool-agent-tool

override:
  reason: This belongs under agent orchestration, not coding agents.
  updated_by: Your Name
  updated_at: 2026-05-04

patch:
  placement:
    primary_category: agent-orchestration
    section: null
```

Keep overrides narrow. Patch the smallest truthful surface.

## Pi fallback notes

`mise run llm` runs the repo's shared non-interactive `@mariozechner/pi-ai` model loop against the static fallback order.

Important behavior:

- automatic fallback only happens for retryable upstream/provider failures
- recent failures cool down in memory for about 10 minutes inside the current process
- `llm:doctor` is read-only diagnostics; it does not update the shared cooldown window
- if you explicitly pass `--model`, automatic fallback is disabled

## Cleaning generated state

Use the catalog clean tasks instead of ad hoc deletions:

```sh
mise run catalog:clean
mise run catalog:clean:cache
mise run catalog:clean:data
mise run catalog:clean:docs
```

Scope summary:

- `catalog:clean` — generated docs, generated catalog data, and catalog caches
- `catalog:clean:cache` — `.cache/` only
- `catalog:clean:data` — `catalog/catalog.json` and `catalog/items/**/*.yml`
- `catalog:clean:docs` — `README.md` and `docs/rabbit-holes/*.md`

## Command reference

```sh
mise run catalog:deps
mise run catalog:test
mise run catalog:typecheck
mise run catalog:discover
mise run catalog:stars
mise run catalog:categorize
mise run catalog:render
mise run catalog:validate
mise run catalog:sync
mise run catalog:resync --id <item-id> --categorize
mise run catalog:clean
mise run catalog:clean:cache
mise run catalog:clean:data
mise run catalog:clean:docs
mise run llm:doctor --limit 3
```

`mise tasks` is the quickest way to inspect the supported task surface.
