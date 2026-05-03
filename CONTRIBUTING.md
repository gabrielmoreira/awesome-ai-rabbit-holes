# Contributing

> Do not edit `README.md`.
> Do not edit `docs/rabbit-holes/*.md`.
> Do not edit `catalog/catalog.json`.
> Do not manually sort sections or hand-edit generated item YAML.

The pipeline owns generated output. Humans own the inputs.

## Scope

This catalog is not a generic AI directory. It focuses on practical AI tools,
agents, workflows, and infrastructure that help software developers become more
productive: coding agents, agent orchestration, MCP tooling, AI IDEs, local AI,
evals, developer workflow automation, and adjacent developer-facing
infrastructure.

Lower priority / out of scope: generic prompt collections, general ML research,
computer vision, diffusion, RL, and broad AI resource lists with no clear
developer-tooling angle.

## Prerequisites

1. Install [mise](https://mise.jdx.dev/) and run `mise install`
2. Run `mise run catalog:deps`
3. Keep at least one working free-model provider credential available locally
   in `.env` or `.env.pi-free` (for example `OPENROUTER_API_KEY`,
   `NVIDIA_API_KEY`, `MISTRAL_API_KEY`, `CLOUDFLARE_API_TOKEN` plus
   `CLOUDFLARE_ACCOUNT_ID`, or `OLLAMA_API_KEY`)


Useful checks:

```sh
mise run pi:free:doctor
mise run catalog:validate
```

## Human-owned files

- `config/sources.yml` — discovery queue
- `config/categories.yml` — taxonomy
- `config/settings.yml` — budgets, concurrency, promotion / GitHub policy
- `overrides/catalog/items/**/*.yml` — last-resort manual corrections

## Generated files

- `README.md`
- `docs/rabbit-holes/*.md`
- `catalog/catalog.json`
- `catalog/items/**/*.yml`

## Add new links

Edit `config/sources.yml`:

```yaml
- url: https://github.com/example/cool-agent-tool
  note: Optional short note.

- url: https://github.com/example/awesome-ai-agents
  kind: awesome-list
  note: Useful list for discovering agent tools.
```

Then run:

```sh
mise run catalog:sync
```

## Correct a categorization or placement

Prefer a targeted resync first:

```sh
mise run catalog:resync --id github__example__cool-agent-tool --categorize
mise run catalog:resync --where processing.categorize.status=deferred --categorize
```

If the model still makes the wrong call, add an override under
`overrides/catalog/items/...yml`.

Example:

```yaml
id: github__example__cool-agent-tool

override:
  reason: This belongs more clearly under agent orchestration.
  updated_by: Your Name
  updated_at: 2026-05-02

patch:
  placement:
    primary_category: agent-orchestration
    section: null
```

## Command reference

```sh
mise run catalog:discover
mise run catalog:stars
mise run catalog:categorize
mise run catalog:render
mise run catalog:validate
mise run catalog:sync
mise run catalog:resync --id <item-id> --categorize
mise run pi:free:doctor
```

## Notes

- `catalog:sync` is the main local and CI entrypoint.
- `catalog:stars` refreshes GitHub-backed items independently of categorization readiness.
- `catalog:categorize` uses one LLM call per item.
- `catalog:render` is disk-only and idempotent.
- `mise tasks` is the quickest way to discover the supported commands.
