# Contributing

> Do not edit `README.md`.
> Do not edit `docs/rabbit-holes/*.md`.
> Do not manually update stars.
> Do not manually sort sections.
>
> The pipeline does the rest.

## Scope

This catalog is **not** a generic AI directory. It focuses on practical AI
tools, agents, workflows, and infrastructure that help **software developers
become more productive**: coding agents, agent orchestration, MCP tooling,
AI IDEs, local AI runtimes, evaluation harnesses, RAG for developer workflows,
and similar.

Lower priority / out of scope: generic ChatGPT prompt collections, ML theory,
deep learning, computer vision, NLP research, diffusion models, RL, and
broad AI resource lists with no clear developer-tooling angle.

See `sources/scope.yml` for positive and negative examples. The positive
`in_scope` examples are enforced by catalog validation so the repo does not
quietly drift away from its own scope.

## Prerequisites

`mise install` provisions the pinned local toolchain from `.mise.toml` (Node.js 25.x, GitHub Copilot CLI, and Pi coding agent CLI).

1. Install [mise](https://mise.jdx.dev/) and run `mise install`
2. Authenticate GitHub Copilot CLI, and keep a token with `Copilot Requests` permission available via `COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, or `GITHUB_TOKEN`
3. Keep the Copilot token available to GitHub Actions as the repository secret `COPILOT_GITHUB_TOKEN`

- The catalog defaults to GitHub Copilot model `gpt-4o`.
- You can override the model with `CATALOG_AI_MODEL` or `COPILOT_MODEL` if your Copilot account exposes a different supported model.
- The shared Pi entrypoint is `mise run pi -- ...`. It uses `PI_CODING_AGENT_DIR=.cache/pi/agent`, disables Pi's built-in tools, and starts with both extension discovery and skill discovery turned off (`--no-extensions --no-skills`).
- GitHub Actions also exposes a manual `pi` workflow that smoke-tests the same command path with `mise run pi -- --help`.
- GitHub workflows bound source-list intake with `CATALOG_MAX_SOURCE_LIST_NEW_ITEMS` so CI proves the real Copilot path without trying to curate thousands of new candidates in one run. Leave it unset locally to run the full uncapped discovery pass.

## To add something

Edit `sources/inbox.yml`:

```yaml
- url: https://github.com/example/cool-agent-tool
  note: Optional short note.
```

Or for an awesome list:

```yaml
- url: https://github.com/example/awesome-ai-agents
  kind: awesome-list
  note: Useful list for discovering agent tools.
```

Then run:

```sh
mise run catalog:update
```

The underlying Node entrypoint is still `npm run catalog -- update` if you need it directly, but CI now calls the same `mise` task namespace.

Awesome-list discovery is no longer staged. Each `update` run considers every list-derived link, dedupes them by canonical URL, and backfills source-list provenance for repos or sites already in the catalog.

To re-run AI curation only for items currently marked `curation.status: excluded`, use:

```sh
mise run catalog:rerun-excluded
```

This keeps the existing catalog, resets excluded items back to `pending`, and asks the configured Copilot model to reconsider them using the current prompt rules.

## To correct something

Add a file to `overrides/catalog/items/...yml` mirroring the catalog path.

Example: `overrides/catalog/items/github/example/cool-agent-tool.yml`

```yaml
id: github__example__cool-agent-tool

override:
  reason: This belongs more clearly under agent orchestration.
  updated_by: Your Name
  updated_at: 2026-04-30

patch:
  placement:
    primary_category: agent-orchestration
    section: null
```

## What the pipeline owns

- `README.md`
- `docs/rabbit-holes/*.md`
- `site/catalog.json`
- `catalog/items/**/*.yml` (generated and updated by pipeline)

## What humans own

- `sources/inbox.yml`
- `overrides/catalog/items/**/*.yml`
- `catalog/categories.yml`
- `catalog/config.yml`
