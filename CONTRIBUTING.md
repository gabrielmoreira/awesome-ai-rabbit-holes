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

`npm run catalog -- update`, `npm run catalog -- refresh`, and `npm run catalog -- rerun-excluded` run directly with Node.js type stripping and GitHub Copilot CLI.

1. Install Node.js 25.2+ (the repo ships a local `.mise.toml`, so `mise install` is the easiest path if you use mise)
2. Install `@github/copilot`, authenticate it, and keep a token with `Copilot Requests` permission available via `COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, or `GITHUB_TOKEN`
3. Keep the Copilot token available to GitHub Actions as the repository secret `COPILOT_GITHUB_TOKEN`

- The catalog defaults to GitHub Copilot model `gpt-5.2`.
- You can override the model with `CATALOG_AI_MODEL` or `COPILOT_MODEL` if your Copilot account exposes a different supported model.

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
npm run catalog -- update
```

Awesome-list discovery is staged. Each `update` run imports up to `catalog/config.yml` → `source_lists.max_new_items_per_run` new list-derived repos, ordered by how many source lists mention them, while still backfilling source-list provenance for repos already in the catalog.

To re-run AI curation only for items currently marked `curation.status: excluded`, use:

```sh
npm run catalog -- rerun-excluded
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
