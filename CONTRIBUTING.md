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

`mise install` provisions the pinned local toolchain from `.mise.toml` (Node.js 25.x, Pi coding agent CLI, and GitHub CLI).

1. Install [mise](https://mise.jdx.dev/) and run `mise install`
2. Copy `.env.pi-free.example` to `.env.pi-free` for local runs, then fill in the provider credentials you actually want to use
3. Mirror the same env names into the GitHub Actions environment `pi-free` so workflow runs have the same provider access

- Run catalog operations through the `mise run catalog:*` task namespace. The npm scripts remain package-level development entrypoints, but the documented operational path is `mise` because it owns repo-local tools and external command environment.
- The TypeScript catalog runner uses `pi:free` as its only LLM execution path. It builds prompts in Node, then shells to `mise run pi:free -- --stdin` and writes the prompt over stdin so model provider selection, free-only guardrails, credentials, fallback behavior, and long-prompt handling stay inside the shared mise task.
- If you need to pin one specific model instead of the automatic fallback chain, set `CATALOG_AI_MODEL` to an explicit Pi model id (for example `openrouter/openai/gpt-oss-120b:free`).
- The shared locked-down Pi entrypoint is `mise run pi -- ...`. This repo sets `PI_CODING_AGENT_DIR=.cache/pi/agent` at the top-level `mise` environment, so both `pi` and `pi:free` reuse the same local Pi state directory.
- The local `pi-free` entrypoint is `mise run pi:free -- ...`. `mise` loads `.env.pi-free` directly and then runs `pi` directly with only the pinned `npm:pi-free@2.0.2` extension plus the repo-local `pi-free-fallback` extension enabled.
- Copy `.env.pi-free.example` to `.env.pi-free` for local credentials. Use the canonical `CLOUDFLARE_*` variable names there so the upstream `pi-free` provider can read them directly without extra task templating.
- The runtime fallback logic lives in the repo-local `pi-free-fallback` extension. `pi:free` walks a curated free-only fallback chain in descending intelligence order from your ranking table. When the same model family is available on multiple free providers, it tries that family on each provider before dropping to the next-lower family. The current provider tie-break order is OpenRouter, Cloudflare, NVIDIA, Ollama Cloud, then Mistral.
- The manual catalog smoke workflow caps source-list intake with `CATALOG_MAX_SOURCE_LIST_NEW_ITEMS` so CI can prove the real `pi:free` path without trying to curate thousands of new candidates. The scheduled/manual full sync workflow leaves this unset so production behavior remains uncapped.
- External I/O runs with bounded parallelism. You can tune it with `CATALOG_SOURCE_LIST_CONCURRENCY` (default `2`), `CATALOG_DIRECT_DISCOVERY_CONCURRENCY` (default `8`), `CATALOG_GITHUB_CONCURRENCY` (default `8`), and `CATALOG_AI_CONCURRENCY` (default `2`).

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

Catalog update and refresh are intentionally documented as mise tasks because they may cross the npm boundary into GitHub and Pi tooling. The underlying package scripts stay available for focused Node development, but the maintained catalog operation path is through `mise run catalog:*`.
Awesome-list discovery is no longer staged. Each `update` run considers every list-derived link, dedupes them by canonical URL, and backfills source-list provenance for repos or sites already in the catalog.

To re-run AI curation only for items currently marked `curation.status: excluded`, use:

```sh
mise run catalog:rerun-excluded
```


This keeps the existing catalog, resets excluded items back to `pending`, and asks the configured `pi:free` path to reconsider them using the current prompt rules.

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
