# Agent Orchestration

Frameworks, platforms, and patterns for coordinating multiple AI agents. Because one AI making decisions was not enough.


## Tools & Resources

- **[auto-gpt](https://github.com/significant-gravitas/auto-gpt)** `⭐ 183.9k` AutoGPT is a platform for building, deploying, and running continuous AI agents to automate multi-step workflows. <details><summary>More about</summary>

  It gives developers a self-hostable, Docker-based way to turn repeatable work into agent workflows with a UI (builder/management) instead of a pile of one-off scripts.

  _It promises “continuous agents” and a marketplace, which is how you end up debugging your own workflow graph at 2am because the robot is now a coworker with opinions._

  `ai-agents` `agent-platform` `workflow-automation` `self-hosted` `docker`
  </details>

- **[metagpt](https://github.com/geekan/metagpt)** `⭐ 67.6k` MetaGPT is an open-source multi-agent framework that assigns software-team roles (PM, architect, engineers) to LLMs to generate software artifacts and code from a natural-language requirement. <details><summary>More about</summary>

  It offers a “one prompt → structured plan/docs/APIs/repo” workflow that can help developers prototype or scaffold projects by orchestrating multiple specialized agent roles instead of a single chat session.

  _It normalizes the idea that your “team” now includes a product manager bot that can block your PR because the SOP says so._

  `multi-agent` `agent-orchestration` `coding-agent` `python` `llm-framework`
  </details>

- **[autogen](https://github.com/microsoft/autogen)** `⭐ 57.6k` A Microsoft-built Python framework for building multi-agent AI applications and orchestrations. <details><summary>More about</summary>

  It gives developers a structured way to compose multiple LLM-backed agents (and tools like MCP servers) into reproducible workflows instead of one-off prompt scripts.

  _Nothing calms the soul like betting your architecture on a “maintenance mode” framework while simultaneously being told the real framework is the other framework._

  `agent-orchestration` `multi-agent` `llm-framework` `python` `mcp`
  </details>

- **[flowise](https://github.com/flowiseai/flowise)** `⭐ 52.5k` Flowise is a low-code, visual builder for creating and running LLM workflows and AI agents. <details><summary>More about</summary>

  It lets developers prototype and self-host agent/RAG pipelines with a UI while still integrating into Node/TypeScript deployment workflows (npm, Docker, API server + React UI).

  _You’ll be dragging boxes at 2am wondering whether you’re “building an agent” or just inventing a new, more expensive way to forget where your prompt variables went._

  `agent-workflows` `low-code` `rag` `langchain` `self-hosted`
  </details>

- **[litellm](https://github.com/berriai/litellm)** `⭐ 45.4k` LiteLLM is a Python SDK and self-hostable proxy (AI gateway) that provides an OpenAI-compatible interface to call 100+ LLM providers with centralized logging, cost tracking, and routing features. <details><summary>More about</summary>

  It lets developers standardize LLM integrations across vendors (auth, request/response shape, errors) and add production controls like spend tracking, guardrails, and load balancing without rewriting app code per provider.

  _Nothing says “simple abstraction” like needing an AI gateway so you can swap twelve “OpenAI-compatible” APIs that are each compatible in their own special way._

  `llm-gateway` `openai-compatible` `proxy-server` `llmops` `cost-tracking`
  </details>

- **[semantic-kernel](https://github.com/microsoft/semantic-kernel)** `⭐ 27.8k` A Microsoft SDK for integrating LLMs into applications and orchestrating single- and multi-agent workflows across multiple runtimes. <details><summary>More about</summary>

  It gives developers a model-agnostic way to build agents (tools/plugins, memory, planning) and multi-agent systems with integrations like vector DBs and MCP, without committing to one vendor stack.

  _Nothing says “enterprise-ready” like learning a new agent framework while it’s simultaneously telling you it has a newer, enterprise-ready successor._

  `agent-orchestration` `llm-sdk` `mcp` `multi-agent` `enterprise`
  </details>

- **[vibe-kanban](https://github.com/BloopAI/vibe-kanban)** `⭐ 25.8k` A kanban-style UI that orchestrates coding agents by turning issues into workspaces with branches, terminals, app previews, and diff review. <details><summary>More about</summary>

  It packages the messy parts of “agent-driven dev” (planning, running, reviewing, and shipping) into a single workflow so teams can iterate faster without living in five separate tools.

  _It formalizes the new career arc where you do project management for robots, then leave inline comments so your robot can fix its robot mistakes on a fresh branch._

  `agent-orchestration` `kanban` `code-review` `dev-workflow` `workspace-runner`
  </details>

- **[haystack](https://github.com/deepset-ai/haystack)** `⭐ 25k` Haystack is an open-source Python framework for orchestrating LLM applications with modular pipelines and agent workflows, including retrieval, routing, memory, and generation. <details><summary>More about</summary>

  It gives developers explicit, swappable building blocks for production RAG and agent systems (e.g., semantic search and Q&A) instead of burying core decisions inside a black-box framework.

  _You will gain “explicit control” over retrieval, routing, memory, and generation, then spend your week explaining why every box in your pipeline diagram is now a configurable product surface._

  `rag` `agent-orchestration` `llm-framework` `python` `semantic-search`
  </details>

- **[mastra](https://github.com/mastra-ai/mastra)** `⭐ 23.5k` Mastra is a TypeScript framework for building AI-powered applications and agents, including agents, workflows, evals, and MCP server support. <details><summary>More about</summary>

  It gives developers a batteries-included way to ship agentic features (tool use, workflow orchestration, memory/context, evals/observability) inside Node/Next.js/React apps or as standalone services.

  _You will finally have “production-ready agents,” which mostly means you now have a graph engine, a memory layer, and 40+ model providers to blame when the same prompt behaves differently on Tuesday._

  `typescript` `agents` `workflows` `mcp` `evals`
  </details>

- **[babyagi](https://github.com/yoheinakajima/babyagi)** `⭐ 22.2k` BabyAGI is an experimental Python framework for building autonomous agents around a database-backed function registry with a dashboard. <details><summary>More about</summary>

  It gives developers a concrete “functions as tools” workflow (dependencies, secrets, logging, loading packs) to prototype and reason about agent capabilities beyond a single prompt.

  _You’ll start treating your codebase like a tamagotchi that learns new tricks from a database, then remember the README told you not to ship it._

  `agent-framework` `python` `function-registry` `tooling` `dashboard`
  </details>