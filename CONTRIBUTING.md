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

See `sources/scope.yml` for positive and negative examples. That file is
**not** processed by the pipeline — it only exists to inform future
classification.

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
pnpm catalog update
```

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
