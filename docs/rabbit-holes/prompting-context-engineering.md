# Prompting and Context Engineering

Prompt design, retrieval, memory, compression, and context-shaping systems for making models see the right information while everyone quietly begs for more tokens.

## Tools & Resources

- **[prompt-engineering-guide](https://github.com/dair-ai/prompt-engineering-guide)** `⭐ 74.2k` `updated ≤90d` A comprehensive guide and web resource containing papers, tutorials, techniques, and prompt examples for prompt engineering, context engineering, RAG, and AI agents. <details><summary>More about</summary>

  It provides developers with the foundational knowledge and reference patterns needed to design effective prompts and reliably interface with LLMs for coding, RAG, and agent workflows.

  _You now have 74,000 stars worth of prompting techniques to choose from, ensuring you can over-engineer a simple instruction for an entire afternoon._

  `prompt-engineering` `llm-guides` `rag` `ai-agents` `learning-resource`
  </details>

- **[memvid](https://github.com/memvid/memvid)** `⭐ 15.3k` `updated ≤90d` Memvid is a serverless, single-file memory layer for AI agents that replaces complex RAG pipelines with a portable, versioned, and offline-first memory system using video-inspired encoding. <details><summary>More about</summary>

  It gives developers a way to add persistent, long-term memory to AI agents without standing up vector databases or managing complex retrieval infrastructure.

  _Yet another clever workaround for the fact that your agent still can’t remember what it did five minutes ago without an external memory prosthetic._

  `memory` `rag` `agents` `vector-search` `offline-first`
  </details>

- **[memvid](https://github.com/olow304/memvid)** `⭐ 15.3k` `updated ≤90d` Memvid is a single-file, serverless memory layer for AI agents that replaces traditional RAG pipelines with a portable, video-encoding-inspired archive for instant retrieval and long-term memory. <details><summary>More about</summary>

  It enables developers to give AI agents persistent, versioned, and offline-first memory without the operational overhead of running vector databases or complex retrieval infrastructure.

  _Just when you thought RAG couldn't get any more convoluted, someone decided to encode your agent's thoughts into a video file, because apparently the next frontier in AI memory is avoiding databases entirely._

  `memory` `rag` `vector-database` `offline-first` `python`
  </details>

- **[gitingest](https://github.com/coderamp-labs/gitingest)** `⭐ 14.5k` `updated ≤30d` A tool that converts Git repositories into prompt-friendly text digests, accessible via CLI, Python package, browser extension, or by swapping 'hub' for 'ingest' in GitHub URLs. <details><summary>More about</summary>

  It handles the tedious work of packaging a codebase's structure and content into a format optimized for LLM context windows.

  _Because apparently the modern developer workflow now requires a dedicated middleware layer just to feed your own code into the AI that's supposed to understand it._

  `context-engineering` `llm-ingest` `cli-tool` `browser-extension`
  </details>

- **[gitingest](https://github.com/cyclotruc/gitingest)** `⭐ 14.5k` `updated ≤30d` A tool that converts Git repositories into prompt-friendly text digests with token counts, available as a CLI, Python package, hosted service, and browser extension. <details><summary>More about</summary>

  It solves the mechanical friction of feeding an entire codebase into an LLM by handling directory structure extraction, file filtering, and token budgeting automatically.

  _We have officially reached the point where we need a dedicated utility just to translate our own source code into a dialect that our AI overlords can digest._

  `context-engineering` `llm-ingest` `cli` `browser-extension` `git`
  </details>

- **[cocoindex-code](https://github.com/cocoindex-io/cocoindex-code)** `⭐ 1.5k` `updated ≤30d` A lightweight, AST-based semantic code search CLI that integrates with coding agents via CLI, Skill, or MCP to reduce context tokens by roughly 70%. <details><summary>More about</summary>

  It gives coding agents a fast, local way to retrieve relevant code snippets without stuffing entire repositories into context windows.

  _We have officially reached the point where our AI assistants need their own indexing pipeline just to cope with the context we keep feeding them._

  `code-search` `ast` `mcp` `context-engineering` `coding-agent`
  </details>

- **[aperag](https://github.com/apecloud/aperag)** `⭐ 1.2k` `updated ≤30d` ApeRAG is a production-ready RAG platform combining Graph RAG, vector search, and full-text search with AI agents, offering multimodal indexing and scalable Kubernetes deployment. <details><summary>More about</summary>

  It gives developers a self-hosted way to build knowledge graphs and context-engineered agent backends that integrate directly with MCP clients.

  _You can now deploy a Kubernetes cluster just to give your AI agent the existential dread of traversing a knowledge graph instead of a flat vector store._

  `rag` `graphrag` `mcp` `knowledge-graph` `context-engineering`
  </details>

- **[agentmark](https://github.com/agentmark-ai/agentmark)** `⭐ 346` `updated ≤30d` An open-source platform for developing, testing, and observing AI agents using Markdown-defined prompts with version control, evaluations, and OpenTelemetry tracing. <details><summary>More about</summary>

  It lets developers manage prompts as code, run evaluations against datasets, and trace LLM calls across multiple SDKs from a single CLI and dev server.

  _Finally, a way to version-control your prompt engineering despair in Markdown while convincing yourself that shipping a 400-line .prompt.mdx file counts as proper software architecture._

  `prompt-management` `observability` `evals` `agents` `opentelemetry`
  </details>

- **[ai-distiller](https://github.com/janreges/ai-distiller)** `⭐ 153` `updated ≤90d` AI Distiller is an open-source CLI and MCP server that extracts public APIs, types, and structure from large codebases, compressing code by 90–98% to fit into AI context windows. <details><summary>More about</summary>

  It enables AI coding agents to understand entire project architectures without hitting context limits, reducing hallucinations and iterative debugging cycles.

  _We have finally engineered a tool to solve the context window problem by throwing away the implementations, leaving the AI to confidently invent them with even greater efficiency._

  `context-engineering` `mcp` `cli` `code-analysis` `compression`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[core](https://github.com/omega-memory/core)** `⭐ 113` `updated ≤30d` A local-first memory layer and MCP server that gives AI coding agents persistent, cross-model memory across sessions. <details><summary>More about</summary>

  It eliminates the daily ritual of re-explaining your codebase and past decisions to stateless agents by storing preferences, errors, and architecture choices locally.

  _We have finally built a brain for the thing that was supposed to be the brain, and it turns out even the brain needs its own brain to remember what it learned yesterday._

  `memory` `mcp` `local-first` `context-engineering`
  </details>

- **[core](https://github.com/omega-memory/omega-memory)** `⭐ 113` `updated ≤30d` A local-first persistent memory system that integrates with AI coding agents via MCP to store and recall decisions, preferences, and context across sessions. <details><summary>More about</summary>

  It eliminates the repetitive context re-explanation tax developers pay when starting new sessions with stateless coding agents by providing semantic memory that works across models and editors.

  _We have successfully escalated from writing code to writing infrastructure so our AI can remember that we prefer tabs over spaces, as if the machines needed another reason to judge us._

  `memory` `mcp` `local-first` `context-engineering`
  </details>

- **[myco](https://github.com/battam1111/myco)** `⭐ 60` `updated ≤30d` Myco is a self-evolving knowledge subgraph and memory layer that runs as a CLI and MCP server, allowing AI agents to ingest, digest, and restructure their own long-term context on the filesystem. <details><summary>More about</summary>

  It gives coding agents a persistent, auto-maintaining memory graph so developers can stop rewriting context and stop migrating frameworks every few months.

  _You have finally automated the one thing that was still human: the crushing existential dread of maintaining your own notes._

  `mcp` `agent-memory` `knowledge-graph` `context-engineering` `python`
  </details>

- **[promptsite](https://github.com/dkuang1980/promptsite)** `⭐ 47` `updated >1y` PromptSite is a lightweight Python package for version controlling, tracking, and experimenting with LLM prompts using local files, Git, and simple decorators. <details><summary>More about</summary>

  It gives developers a low-overhead way to iteratively debug prompts, track LLM runs, and manage variables without standing up a separate server or database.

  _Just what your workflow needed: another layer of versioning, this time for the sentences you feed to the model until it stops lying to you._

  `prompt-management` `llmops` `python` `version-control` `experimentation`
  </details>

- **[hypersigil](https://github.com/hypersigilhq/hypersigil)** `⭐ 25` `updated ≤30d` A prompt management gateway with a UI that lets teams centrally store, test, refine, and hot-swap prompts across multiple AI providers without redeploying application code. <details><summary>More about</summary>

  Developers can decouple prompt lifecycle management from application code, enabling non-technical teammates to iterate on prompts while maintaining governance and cross-provider failover.

  _Because nothing says 'agile AI orchestration' like introducing a dedicated prompt deployment platform to solve the complexity introduced by your multi-provider LLM abstraction layer._

  `prompt-management` `llm-gateway` `multi-provider` `prompt-tuning`
  </details>

- **[agentlint](https://github.com/0xmariowu/agentlint)** `⭐ 23` `updated ≤30d` A CLI and Claude Code plugin that lints and scores an AI coding agent's harness (AGENTS.md, CLAUDE.md, CI configs, .gitignore) across 51+ checks to improve context quality and agent reliability. <details><summary>More about</summary>

  It treats prompt files, CI configs, and repo instructions as a first-class engineering surface, giving developers a measurable way to harden the context that agents actually read.

  _We have finally achieved the inevitable endpoint of modern development: installing a linter to complain about the Markdown files we wrote to tell the AI how to behave._

  `linting` `context-engineering` `claude-code` `cursor` `harness`
  </details>

- **[promptext](https://github.com/1broseidon/promptext)** `⭐ 21` `updated ≤30d` A Go-based CLI tool that analyzes a codebase, ranks files by relevance, and packages them into token-efficient formats for pasting into LLM chats. <details><summary>More about</summary>

  It automates the tedious and error-prone work of selecting and formatting code context, helping developers stay within token limits and reduce API costs.

  _We have finally built a tool to manage the tragic reality that our context windows are too small for the sprawling monoliths we blindly feed to ChatGPT._

  `cli` `context-engineering` `prompt-tooling` `go` `token-management`
  </details>

- **[cortex](https://github.com/gzoonet/cortex)** `⭐ 14` `updated ≤30d` A local-first CLI and dashboard that watches project files, builds a knowledge graph using LLMs, and lets developers query across multiple repos with natural language. <details><summary>More about</summary>

  It gives developers a way to resurface scattered architecture decisions, patterns, and constraints across projects without manually digging through old READMEs and source files.

  _Now you can query three months of architectural indecision in natural language and get citations proving you contradicted yourself before the code even compiled._

  `knowledge-graph` `local-first` `mcp` `llm` `developer-tools`
  </details>

- **[clickup-cli](https://github.com/nicholasbester/clickup-cli)** `⭐ 10` `updated ≤30d` A CLI for the ClickUp API that provides token-efficient output optimized for AI agents and human users, covering all ~130 endpoints across 28 resource groups. <details><summary>More about</summary>

  It reduces massive ClickUp API JSON responses (12,000+ tokens for 5 tasks) to compact table output (~150 tokens), preventing AI agents from exhausting their context windows.

  _We have finally optimized the tooling around a project management API so heavily that our agents can now contextually dread their task lists more efficiently._

  `cli` `clickup` `context-optimization` `token-efficiency`
  </details>

- **[nocturnusai](https://github.com/auctalis/nocturnusai)** `⭐ 2` `updated ≤30d` A context engineering engine and SDK for AI agents that compresses conversation history into deterministic, logic-based fact deltas using backward-chaining inference rather than vector search or summarization. <details><summary>More about</summary>

  It claims to reduce token usage by up to 5–10x per turn by sending only inferred facts that changed, directly lowering latency and API costs for agent workflows.

  _We have graduated from prompting to epistemology, where your agent now needs a truth-maintenance system just to remember what you told it three turns ago._

  `context-engineering` `mcp` `agent-memory` `sdk` `logic-inference`
  </details>

- **[context7.com](https://context7.com)** Context7 provides up-to-date, version-specific documentation and code examples for libraries, pulled directly into AI coding tools like Cursor, Claude Code, and Windsurf. <details><summary>More about</summary>

  It reduces hallucinations and version-mismatch errors by grounding AI coding assistants in current, relevant documentation rather than stale training data.

  _We have finally solved the problem of LLMs using deprecated APIs by building an entire infrastructure just to remind them that React 19 exists._

  `documentation` `context` `llm-grounding` `developer-productivity`
  </details>

- **[getizlo.com](https://getizlo.com)** Izlo is a team-focused prompt management platform that provides version control, collaboration, testing, and API deployment for storing and iterating on AI prompts. <details><summary>More about</summary>

  It centralizes prompt engineering workflows into a single workspace with versioning and testing, allowing teams to stop hardcoding prompts in source code and spreadsheets.

  _Now your team can spend three hours remixing a prompt in a dedicated sandbox while the original requirement doc remains a mystery._

  `prompt-management` `llmops` `team-collaboration` `testing`
  </details>

- **[o1-skill-issue](https://www.latent.space/p/o1-skill-issue)** A Latent Space guest post documenting how developers should adapt their prompting strategy to effectively use OpenAI's o1 reasoning models as report generators rather than conversational chat models. <details><summary>More about</summary>

  It provides a practical mental model and specific context-engineering techniques for developers trying to integrate high-latency reasoning models into their workflows.

  _We have successfully evolved from 'prompt engineering' to 'writing 10x context briefs' just to coax a model into not contradicting itself for five minutes._

  `prompting` `o1` `reasoning-models` `context-engineering`
  </details>

- **[pmptwiki.com](https://pmptwiki.com)** A platform and CLI for recording, sharing, and cloning structured AI prompting journeys so that others can reproduce how a product was built with AI. <details><summary>More about</summary>

  Developers can stop guessing which vague prompt led to a working prototype by cloning documented, versioned prompt workflows and pasting them directly into Claude or Cursor.

  _We’ve moved from 'it works on my machine' to 'it prompted on my machine,' and now we’re publishing the hallucinations as reproducible artifacts._

  `prompt-sharing` `cli` `reproducibility` `mcp`
  </details>

- **[prompt.16x.engineer](https://prompt.16x.engineer)** A desktop application that helps developers structure prompts by managing source code context, tracking token limits, and sending requests to multiple LLMs via API or copy-paste. <details><summary>More about</summary>

  It reduces the friction of manually feeding existing codebases into chat-based LLMs by handling context selection, formatting, and model comparison in a local workspace.

  _We have successfully abstracted the job into managing the meta-work of prompting the tools that manage the prompts for the code we aren't writing._

  `prompt-management` `context-engineering` `desktop-app` `llm-client`
  </details>

- **[prompts](https://docs.wandb.ai/guides/prompts)** Documentation and guides for managing, versioning, and evaluating prompts within the Weights & Biases experiment tracking platform. <details><summary>More about</summary>

  It provides developers with a structured way to track prompt iterations, model inputs, and outputs alongside standard ML experiment metrics.

  _Yet another reminder that your prompt engineering workflow is now serious enough to require its own dashboard, version control, and observability suite._

  `prompt-management` `llmops` `wandb` `experiment-tracking`
  </details>

- **[ref.tools](https://ref.tools)** A tool that provides coding agents with compressed, relevant documentation to reduce context bloat and token usage. <details><summary>More about</summary>

  It addresses the token window limitation by stripping documentation down to only the necessary tokens required for a specific coding task.

  _We have finally engineered a solution to the problem of documentation being too long to read, by automating the process of reading less of it._

  `context-engineering` `docs` `tokens` `agent-optimization`
  </details>

- **[www.graphlit.com](https://www.graphlit.com)** Graphlit is a hosted context layer for AI agents that provides real-time data synchronization across tools like Slack, GitHub, and Jira via a single API with built-in semantic search. <details><summary>More about</summary>

  It handles the plumbing of feeding relevant, up-to-date external context into agent workflows, removing the need to build custom connectors and retrieval pipelines.

  _Yet another layer promising to solve the 'context problem' so your agents can hallucinate about your Jira tickets with unprecedented semantic accuracy._

  `context-layer` `agents` `rag` `api` `integrations`
  </details>

- **[www.prompteams.com](https://www.prompteams.com)** A SaaS platform for managing, versioning, testing, and deploying AI prompts with Git-like workflows and auto-generated APIs for team collaboration. <details><summary>More about</summary>

  It provides a structured environment to version prompts, build CI/CD pipelines for LLM testing, and decouple prompt updates from application code via real-time APIs.

  _Because nothing says 'cutting-edge AI innovation' quite like building a dedicated CI/CD pipeline to manage the recursive art of asking a robot to please behave this time._

  `prompt-management` `llmops` `testing` `versioning` `ci-cd`
  </details>

- **[www.promptfoundry.ai](https://www.promptfoundry.ai)** A browser-based prompt management and evaluation tool for AI applications that supports comparing models, testing variables, and mocking tool calls across Node, JavaScript, TypeScript, and Python SDKs. <details><summary>More about</summary>

  Developers building AI applications can use it to iterate on prompts, compare model outputs, and test tool-calling behavior before deploying to production.

  _Another SaaS layer to manage the strings you feed to the black box, so you can feel methodical while praying temperature=0.7 still produces different results on Tuesdays._

  `prompt-management` `evals` `llm-testing` `developer-tooling`
  </details>

- **[www.prompthub.us](https://www.prompthub.us)** PromptHub is a hosted platform for teams to version, test, evaluate, and deploy prompts across multiple LLM providers via a web UI and API. <details><summary>More about</summary>

  It replaces spreadsheet-based prompt tracking with Git-style versioning, batch eval runs, and API endpoints so teams can ship prompt changes to production without manual redeploys.

  _We have successfully abstracted the abstraction, meaning you now need version control, CI pipelines, and eval suites for the sentences you type into a chat box._

  `prompt-management` `llmops` `evaluations` `team-collaboration`
  </details>

- **[www.tavily.com](https://www.tavily.com)** Tavily is a hosted API service that provides real-time web search, content extraction, and crawling specifically designed to ground AI agents and RAG workflows with fresh web context. <details><summary>More about</summary>

  It allows developers to reduce hallucinations in LLM applications by providing a production-grade retrieval stack that returns structured, chunked web data ready for model consumption.

  _We have successfully abstracted 'looking something up on the internet' into a paid API call with 180ms latency, just so our agents can hallucinate with verifiable sources._

  `search-api` `rag` `agents` `mcp` `web-scraping`
  </details>