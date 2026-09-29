<!-- This file is generated. Do not edit it directly. Submit tools through config/sources.yml. -->
# Memory & Context

Systems that improve what goes into the model: persistent agent memory, retrieval and RAG pipelines, context compression, and prompt management.

_203 entries in 5 sections, ranked by stars. Each section opens with its top 30; the rest of that section waits behind the **▸ more** panel at its end._

## Contents

- [Persistent Memory & Knowledge](#persistent-memory--knowledge) — 115
- [Context & Session Management](#context--session-management) — 15
- [Compression & Token Optimization](#compression--token-optimization) — 27
- [Retrieval & Fresh Docs](#retrieval--fresh-docs) — 31
- [Prompt Engineering & Management](#prompt-engineering--management) — 15

## Persistent Memory & Knowledge

- **[Mem0](https://github.com/mem0ai/mem0)** `⭐ 62.4k` `updated ≤90d` Universal memory layer for AI Agents. <details><summary>More about</summary>

  Gives agents long-term, personalized memory so assistants stop forgetting user preferences between turns.

  _Yet another piece of infrastructure glued onto agents to paper over the fact that LLMs have the retention span of a goldfish._

  `memory` `agents` `context`
  </details>
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** `⭐ 29k` `updated ≤90d` Cognee is an open-source memory control plane that combines embeddings, knowledge graphs, and cognitive science approaches to give AI agents persistent, searchable memory of data, decisions, and workflows. <details><summary>More about</summary>

  It provides developers with unified ingestion and retrieval infrastructure so agents can maintain context, learn from feedback, and share knowledge across sessions instead of resetting every run.

  _Yet another chance to outsource your own memory to a graph database, because clearly the problem wasn't too many moving parts in your agent stack._

  `memory` `rag` `knowledge-graph` `context-engineering` `agent-infra`
  </details>
- **[Beads](https://github.com/gastownhall/beads)** 🔥 `⭐ 26.8k` `updated ≤30d` A distributed, graph-based memory and issue-tracking layer for AI coding agents. <details><summary>More about</summary>

  It enables agents to manage long-horizon tasks by replacing fragile markdown-based plans with a version-controlled, dependency-aware memory graph.

  _Because if we're going to delegate our entire codebase to autonomous loops, we might as well give them a way to document their own technical debt._

  `agents` `memory` `cli` `issue-tracking` `dolt`
  </details>
- **[Hindsight](https://github.com/vectorize-io/hindsight)** `⭐ 18.6k` `updated ≤90d` Hindsight is an agent memory system that enables AI agents to learn over time rather than just recall conversation history. <details><summary>More about</summary>

  It provides developers with a production-tested memory system that improves agent performance on long-term memory tasks through learning, not just retrieval.

  _Another memory system promising to fix AI forgetfulness, adding yet another layer to the growing tower of agent infrastructure we pretend we understand._

  `agent-memory` `learning` `llm-wrapper` `sdk`
  </details>
- **[rowboat](https://github.com/rowboatlabs/rowboat)** `⭐ 16.7k` `updated ≤90d` An open-source, local-first AI coworker that builds a long-lived knowledge graph from emails and meeting notes to draft documents, prep meetings, and generate artifacts like PDF slides. <details><summary>More about</summary>

  It offers developers a transparent, Markdown-based memory system that compounds context locally, reducing the need to repeatedly re-explain project history to AI tools.

  _Finally, a local AI coworker that builds a sprawling knowledge graph of your meetings, ensuring you can never truly escape the context of that roadmap sync from three months ago._

  `knowledge-graph` `local-first` `memory` `multi-agent` `productivity`
  </details>
- **[memvid](https://github.com/memvid/memvid)** `⭐ 16.1k` `updated ≤90d` Memvid is a portable, single-file memory layer for AI agents that stores embeddings and metadata in an append-only, video-inspired format for fast retrieval. <details><summary>More about</summary>

  It gives developers a simple, serverless way to equip AI agents with long-term memory and instant recall without managing RAG pipelines.

  _Another RAG infrastructure._

  `memory` `context-engineering` `ai-agents`
  </details>
- **[Memori](https://github.com/memorilabs/memori)** `⭐ 15.7k` `updated ≤90d` Memori is agent-native memory infrastructure that turns agent execution and conversation into structured, persistent state for production systems. <details><summary>More about</summary>

  It gives developers a way to retain long-term context across agent interactions without bloating prompts, reducing token usage while preserving reasoning quality.

  _Another layer of infrastructure to bolt onto your agent stack, promising memory that 'just works' while you debug why it forgot your user's name again._

  `memory` `agent-infrastructure` `context-engineering`
  </details>
- **[skill_seekers](https://github.com/yusufkaraaslan/skill_seekers)** `⭐ 14.5k` `updated ≤90d` Skill Seekers converts documentation, GitHub repos, PDFs, and other sources into structured knowledge assets for AI skills, RAG, and coding assistants. <details><summary>More about</summary>

  It reduces the manual effort of turning diverse knowledge sources into usable AI context, accelerating skill and RAG pipeline creation.

  _Another tool promising to eliminate context-switching by creating yet another place to manage context._

  `context-engineering` `ai-skills` `mcp`
  </details>
- **[reme](https://github.com/agentscope-ai/reme)** `⭐ 3.5k` `updated ≤30d` A local-first memory management layer that transforms agent conversations and resources into searchable, editable Markdown files. <details><summary>More about</summary>

  It provides a persistent, human-readable knowledge base that allows AI agents to retain context, project decisions, and workflow experience across sessions.

  _Now you have to manage your agent's long-term memory like you're organizing a chaotic personal wiki._

  `agent-memory` `markdown` `rag` `local-first` `knowledge-base`
  </details>
- **[doobidoo/mcp-memory-service](https://github.com/doobidoo/mcp-memory-service)** `⭐ 1.9k` `updated ≤30d` Open-source persistent memory service with REST API and knowledge graph for AI agent pipelines. <details><summary>More about</summary>

  Provides shared, low-latency memory across agent frameworks without cloud lock-in or custom infrastructure glue.

  _Finally, a way to make your agents remember your architecture decisions so you don’t have to re-explain them in every new chat._

  `agent-memory` `knowledge-graph` `mcp` `self-hosted`
  </details>
- **[Omnigraph](https://github.com/modernrelay/omnigraph)** `⭐ 1k` `updated ≤90d` A lakehouse-native graph engine designed for agentic memory and multimodal context assembly. <details><summary>More about</summary>

  It provides a versioned, branchable data layer that allows fleets of agents to maintain durable, multimodal memory and shared knowledge graphs.

  _Now your agents can suffer from git-style merge conflicts in their collective memory._

  `graph-database` `agentic-memory` `context-retrieval` `lakehouse` `multi-agent`
  </details>
- **[Teenage AGI](https://github.com/seanpixel/teenage-agi)** `⭐ 909` `updated >1y` A Python-based autonomous agent that uses OpenAI and Pinecone to maintain persistent vector-database memory across sessions and deliberates before responding. <details><summary>More about</summary>

  It demonstrates a practical, self-contained pattern for adding durable, retrieval-augmented memory to an autonomous agent using early-2023 LLM infrastructure.

  _Nothing says 'production-grade autonomous agent' like a terminal script built in a college dorm that hasn't been touched since GPT-4 was brand new._

  `autonomous-agents` `memory` `vector-db` `pinecone` `python`
  </details>
- **[Contexto](https://github.com/ekailabs/contexto)** `⭐ 620` `updated ≤180d` A context engine that stores full episodic memory for long-running AI agents and retrieves forgotten constraints instead of letting them be compacted away. <details><summary>More about</summary>

  It lets developers keep agents reliable across long sessions without prompt hacks, by recovering original instructions and decisions that default context-window compaction would otherwise summarize into oblivion.

  _It is oddly dystopian that we now pay for external episodic memory so our agents can remember not to delete emails after thirty turns._

  `context-engine` `memory` `retrieval` `openclaw` `agents`
  </details>
- **[SwarmVault](https://github.com/swarmclawai/swarmvault)** `⭐ 620` `updated ≤180d` A local-first CLI tool that compiles docs, code, and notes into a persistent knowledge graph and RAG knowledge base, designed to serve as durable memory for coding agents like Claude Code and Codex. <details><summary>More about</summary>

  It gives developers a way to build a persistent, token-bounded context layer on disk that agents can query, reducing the friction of re-explaining codebases and domain knowledge across sessions.

  _Just what the modern developer needs: another offline wiki to maintain so their AI can finally remember why that one hack was introduced six months ago._

  `agent-memory` `rag` `knowledge-graph` `local-first` `context`
  </details>
- **[Caura](https://github.com/caura-ai/caura)** `⭐ 534` `updated ≤30d` Caura is a governed shared memory layer for AI agent fleets that enables multi-agent knowledge sharing, retrieval, and self-improving recall under trust tiers and audit trails. <details><summary>More about</summary>

  It solves the fragmentation of agent learning by turning individual interactions into compounding fleet intelligence, reducing redundant mistakes and token waste.

  _Finally, a way to make your agents stop relearning the same thing while you pretend governance isn’t just another layer of YAML to debug._

  `agent-memory` `multi-agent` `mcp` `knowledge-graph` `rag`
  </details>
- **[second-brain-agent](https://github.com/flepied/second-brain-agent)** `⭐ 313` `updated ≤180d` An AI agent designed for personal knowledge management that indexes markdown files, PDFs, and web content to enable interactive retrieval. <details><summary>More about</summary>

  It automates the indexing of fragmented personal data and provides an MCP server to inject that context directly into other AI workflows.

  _Because nothing says productivity like building a complex automated system to manage the notes you'll never actually read._

  `pkm` `mcp` `knowledge-management` `automation`
  </details>
- **[busabase/busabase](https://github.com/busabase/busabase)** `⭐ 267` `updated ≤30d` Open-source database & workspace for AI agents — structured data, durable knowledge, reusable skills, runnable apps, and human review on the writes that matter. Local-first and self-hostable.
- **[l33tdawg/sage](https://github.com/l33tdawg/sage)** `⭐ 242` `updated ≤90d` SAGE is a persistent, consensus-validated memory infrastructure for AI agents, built on CometBFT consensus primitives. <details><summary>More about</summary>

  It gives AI agents institutional memory that persists across conversations, with BFT consensus validation, confidence scoring, and natural decay, addressing the problem of reliable, shared memory in multi-agent systems.

  _Finally, a way for your agents to remember things without pretending a vector DB is a brain._

  `memory-infrastructure` `consensus` `multi-agent` `bft` `context-engineering`
  </details>
- **[varun29ankuS/shodh-memory](https://github.com/varun29ankus/shodh-memory)** `⭐ 239` `updated ≤90d` Shodh-Memory is a persistent cognitive memory system for AI agents that learns from usage and forgets irrelevant data via algorithmic intelligence, running fully offline as a single binary. <details><summary>More about</summary>

  It gives developers a lightweight, private memory layer for AI agents that improves with use without API calls or external dependencies.

  _Finally, a memory system that doesn’t require you to trade latency, cost, or offline access for the illusion of intelligence._

  `memory` `mcp` `offline` `agentic-ai` `context-engineering`
  </details>
- **[Mengram](https://github.com/alibaizhanov/mengram)** `⭐ 195` `updated ≤30d` A memory system for AI agents offering semantic, episodic, and procedural memory with Python/JS SDKs and integrations for LangChain, CrewAI, and MCP. <details><summary>More about</summary>

  Developers can give their agents persistent, evolving memory (including workflows that learn from failures) without building retrieval or context systems from scratch.

  _Finally, an AI that remembers your tech stack but still forgets why you chose it._

  `agent-memory` `context-engineering` `mcp-compatible` `langchain-integration` `procedural-learning`
  </details>
- **[omega-memory/omega-memory](https://github.com/omega-memory/omega-memory)** `⭐ 189` `updated ≤180d` A local-first persistent memory system that provides cross-model semantic memory, knowledge graphs, and MCP server integration for AI coding agents like Claude, Cursor, and Windsurf. <details><summary>More about</summary>

  It eliminates context re-explanation across sessions by giving agents a local, provider-agnostic memory layer with semantic search and knowledge graph traversal.

  _We have finally solved the problem of AI forgetting what we did five minutes ago, provided we install a local-first brain that promises to remember everything except why we started this project in the first place._

  `memory` `mcp` `local-first` `context-engineering` `multi-agent`
  </details>
- **[Jean Memory](https://github.com/jean-technologies/jean-memory)** `⭐ 170` `updated ≤1y` AI memory infrastructure providing a persistent, intelligent context layer for applications via SDKs and APIs. <details><summary>More about</summary>

  Developers can add long-term memory and context-aware retrieval to their AI apps with minimal integration effort.

  _Finally, a way to make your AI remember what you told it yesterday—assuming you can remember where you stored the API key._

  `memory` `context-engineering` `sdk` `ai-infrastructure` `retrieval`
  </details>
- **[pi22by7/In-Memoria](https://github.com/pi22by7/in-memoria)** `⭐ 170` `updated ≤1y` An MCP server that indexes codebases to provide persistent memory, pattern recognition, and semantic search across sessions for AI coding assistants. <details><summary>More about</summary>

  It eliminates the repetitive context-rebuilding loop by giving assistants like Claude and Copilot instant access to learned architecture, conventions, and file routing.

  _We have finally built a tool to remember that we are tired of explaining our architectural choices to a bot that forgets them every time we close the window._

  `mcp` `persistent-memory` `context` `codebase-intelligence`
  </details>
- **[dnotitia/akb](https://github.com/dnotitia/akb)** `⭐ 160` `updated ≤30d` A Git-backed knowledge base that provides agents with structured documents, tables, and hybrid search via the Model Context Protocol. <details><summary>More about</summary>

  It offers a version-controlled, searchable 'organizational memory' that allows agents to access long-term context instead of relying on ephemeral chat history.

  _Because we have officially reached the stage where we need version-controlled repositories just to manage the documentation our agents are generating for themselves._

  `mcp` `rag` `knowledge-graph` `memory`
  </details>
- **[redleaves/context-keeper](https://github.com/redleaves/context-keeper)** `⭐ 153` `updated ≤1y` Context-Keeper is a Go-based memory and context management system that uses RAG, vector search, and knowledge graphs to persist and retrieve project history for LLM-assisted development workflows. <details><summary>More about</summary>

  It aims to solve the memory-loss problem in AI coding assistants by providing a two-stage retrieval pipeline that surfaces historical decisions, bugs, and architecture context across sessions.

  _Another layer of infrastructure promising that your AI will finally remember why you chose microservices, right before you spend three days debugging the memory layer itself._

  `memory` `rag` `context-retrieval` `mcp-compatible` `go`
  </details>
- **[sheawinkler/ContextLattice](https://github.com/sheawinkler/contextlattice)** `⭐ 136` `updated ≤90d` ContextLattice is a local-first control plane for long-horizon agent memory and coordination, providing durable memory writes, multi-sink fanout, and retrieval learning loops for AI systems. <details><summary>More about</summary>

  It gives developers a self-hosted infrastructure layer to manage high-volume agent memory and coordination without bloating prompts or relying on cloud-only memory services.

  _Finally, a dedicated local control plane to manage the chaotic memory sprawl of agents that are somehow both hallucinating and forgetting everything simultaneously._

  `memory` `agent-orchestration` `local-first` `mcp` `context-engineering`
  </details>
- **[deusXmachina-dev/memorylane](https://github.com/deusxmachina-dev/memorylane)** `⭐ 123` `updated ≤30d` A desktop app that records screen activity to build work context and surfaces automation opportunities, queryable via MCP in AI chats. <details><summary>More about</summary>

  It turns passive observation of developer workflows into structured context that can be fed into AI assistants for smarter automation suggestions.

  _Now your AI knows you spent 20 minutes renaming a variable and will judge you silently._

  `mcp` `workflow-automation` `context-building` `desktop-app`
  </details>
- **[elvismdev/mem0-mcp-selfhosted](https://github.com/elvismdev/mem0-mcp-selfhosted)** `⭐ 107` `updated ≤1y` Self-hosted MCP server for mem0 that integrates with Claude Code, providing persistent memory via Qdrant, Neo4j, and Ollama. <details><summary>More about</summary>

  Enables developers to give Claude Code long-term memory and knowledge graph capabilities without relying on cloud services.

  _Now your AI assistant remembers your TypeScript preferences forever, or at least until you forget to pay the Neo4j bill._

  `mcp` `memory` `claude-code` `self-hosted` `knowledge-graph`
  </details>
- **[avinash-jetwani/jevmem](https://github.com/avinash-jetwani/jevmem)** `⭐ 98` `updated ≤30d` Automatic project memory for Claude Code. Also works with Cursor and Codex.
- **[DomDemetz/claude-soul](https://github.com/domdemetz/claude-soul)** `⭐ 89` `updated ≤180d` A self-correcting memory and behavioral tracking engine for Claude Code that provides cross-session persistence via local SQLite and semantic search. <details><summary>More about</summary>

  It solves the 'amnesia' problem in terminal-based coding agents by allowing them to remember past decisions, user corrections, and project context across sessions.

  _Nothing says 'cutting edge' like attempting to cultivate a stable personality for a CLI tool that might be superseded by a new model release tomorrow._

  `claude-code` `memory` `mcp` `local-ai` `context-engineering`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+85 more in Persistent Memory & Knowledge &nbsp;—&nbsp; click to expand</strong></summary>

- **[decisionnode/DecisionNode](https://github.com/decisionnode/decisionnode)** `⭐ 83` `updated ≤180d` A CLI and local MCP server providing a shared, semantically queryable structured memory store for AI coding assistants like Claude Code, Cursor, and Windsurf.
- **[Necmttn/ax](https://github.com/necmttn/ax)** `⭐ 83` `updated ≤90d` A local-first observability and memory layer that uses a typed graph to record and learn from agent sessions.
- **[teolex2020/AuraSDK](https://github.com/teolex2020/aura-memory)** `⭐ 73` `updated ≤90d` AuraSDK is a local, pure-Rust cognitive memory runtime that adds durable, sub-millisecond recall, governed correction, and self-adaptation to frozen AI models without cloud training or fine-tuning.
- **[pi-mem](https://github.com/jo-inc/pi-mem)** `⭐ 70` `updated ≤90d` A Markdown-based persistent memory system that provides long-term facts, daily logs, and semantic search for AI coding agents.
- **[Battam1111/Myco](https://github.com/battam1111/myco)** `⭐ 64` `updated ≤90d` A living cognitive substrate for AI agents that ingests, digests, and evolves knowledge as a filesystem-based graph of markdown and YAML.
- **[EGC](https://github.com/fmarzochi/egc)** `⭐ 57` `updated ≤30d` EGC gives every AI coding agent the same brain. Shared memory, skills, and live context across Cursor, Claude Code, Copilot, Aider, and 20+ AI coding tools with zero configuration. Every tab, terminal, and AI stays automatically synchronized. One brain. Everywhere.
- **[Memory-Plus](https://github.com/yuchen20/memory-plus)** `⭐ 56` `updated >1y` Memory-Plus is a local RAG memory store that enables MCP agents to record, retrieve, update, and visualize persistent session memories.
- **[roampal-ai/roampal-core](https://github.com/roampal-ai/roampal-core)** `⭐ 46` `updated ≤180d` An outcome-based persistent memory MCP server for Claude Code and OpenCode that scores and promotes useful advice while demoting bad advice.
- **[tstockham96/engram](https://github.com/tstockham96/engram)** `⭐ 45` `updated ≤180d` Universal memory layer for AI agents that stores memories in a local SQLite knowledge graph with semantic vector search and LLM-powered consolidation.
- **[nex-as-a-skill](https://github.com/nex-crm/nex-as-a-skill)** `⭐ 41` `updated ≤180d` Nex is a knowledge graph and memory layer that unifies AI agent conversations across tools like Claude Code, Cursor, and Slack, distributed as a CLI and a set of slash commands, rules, and plugins for supported platforms.
- **[pi-reflect](https://github.com/jo-inc/pi-reflect)** `⭐ 38` `updated ≤90d` A tool for AI agents to iteratively improve their behavioral rules, memory, and personality files by analyzing session transcripts.
- **[memi](https://github.com/sarveshsea/memi)** `⭐ 34` `updated ≤90d` memi is a CLI and daemon that exports design tokens and components from Tailwind apps into shadcn-native registries for AI coding agents.
- **[memem](https://github.com/tt-wang/memem)** `⭐ 33` `updated ≤90d` A Claude Code plugin that gives Claude persistent memory across sessions by mining lessons from completed transcripts, storing them as markdown in an Obsidian vault, and retrieving relevant context via SQLite FTS5.
- **[kael-bit/engram-rs](https://github.com/kael-bit/engram-rs)** `⭐ 27` `updated ≤1y` Memory engine for AI agents with time-based decay/promotion and self-organizing topic trees, implemented as a single Rust binary with SQLite storage.
- **[markmhendrickson/neotoma](https://github.com/markmhendrickson/neotoma)** `⭐ 27` `updated ≤90d` Neotoma is a local-first, deterministic state layer for AI agents that stores versioned, replayable records across sessions and tools via MCP.
- **[pomazanbohdan/memory-mcp-1file](https://github.com/pomazanbohdan/memory-mcp-1file)** `⭐ 26` `updated ≤180d` A self-contained, pure Rust MCP server that provides persistent, semantic, and graph-based memory for AI agents using an embedded database and local ONNX runtime.
- **[chopratejas/invalidate](https://github.com/chopratejas/invalidate)** `⭐ 23` `updated ≤30d` The invalidation layer for AI memory. Every fact gets a lease; new evidence ends it. Built on TypeSafe Jev.
- **[hermes-labs-ai/fidelis](https://github.com/hermes-labs-ai/fidelis)** `⭐ 23` `updated ≤30d` Zero-LLM agent memory for Claude Code and AI agents: local-first BM25, dense-vector, and reciprocal-rank-fusion retrieval. Returns original passages verbatim by default. Available on PyPI as fidelis-memory. Apache-2.0.
- **[kerbelp/metatron](https://github.com/kerbelp/metatron)** `⭐ 23` `updated ≤90d` A self-hosted system that captures codebase implementation decisions and serves them to coding agents via the Model Context Protocol.
- **[gzoonet/cortex](https://github.com/gzoonet/cortex)** `⭐ 21` `updated ≤90d` Local-first knowledge graph for developers that watches project files, builds a knowledge graph with LLMs, and allows natural language queries across projects.
- **[m1nd](https://github.com/maxkle1nz/m1nd)** `⭐ 21` `updated ≤90d` A neuro-symbolic code graph and shell that provides memory, trust, and reasoning capabilities to coding agents via MCP.
- **[sgx-labs/statelessagent](https://github.com/sgx-labs/statelessagent)** `⭐ 21` `updated ≤180d` A local-first MCP server that gives AI coding agents persistent memory by indexing markdown notes and surfacing relevant context across sessions.
- **[GetCacheOverflow/CacheOverflow](https://github.com/getcacheoverflow/cacheoverflow)** `⭐ 19` `updated ≤1y` A distributed knowledge base for AI agents to share, discover, and publish verified technical solutions.
- **[celiums-memory](https://github.com/terrizoaguimor/celiums-memory)** `⭐ 18` `updated ≤180d` An open-source MCP server that provides AI coding assistants like Claude Code and Cursor with persistent memory, circadian rhythm simulation, and access to 5,100 expert knowledge modules.
- **[Data Olympus](https://github.com/knaisoma/data-olympus)** `⭐ 18` `updated ≤90d` A governance-grade knowledge base format and single-writer MCP server for managing engineering standards and architectural decisions.
- **[besslframework-stack/project-tessera](https://github.com/besslframework-stack/project-tessera)** `⭐ 17` `updated ≤1y` Tessera is a local-first memory layer for AI agents with encrypted storage, document search, and an HTTP API for persistent knowledge across sessions.
- **[fornhere/hafiza-os](https://github.com/fornhere/hafiza-os)** `⭐ 17` `updated ≤30d` Linux, macOS ve Windows için kaynaklı ikinci beyin. Claude Code, Codex ve Antigravity adaptörleri; yerel Markdown kasa, ayrı hafıza incelemesi, isteğe bağlı Mem0/Jev.
- **[masondelan/selvedge](https://github.com/masondelan/selvedge)** `⭐ 17` `updated ≤90d` A local MCP server that captures an AI agent's reasoning live as code changes are made, storing structured change events with justifications in a local SQLite database for later audit.
- **[jarvis-orb](https://github.com/thestack-ai/jarvis-orb)** `⭐ 16` `updated ≤180d` A Rust + Tauri desktop app and MCP server that gives Claude Code and other assistants persistent multi-tier memory plus a real-time 3D orb visualization of AI reasoning.
- **[graphpilot-oss/graphpilot](https://github.com/graphpilot-oss/graphpilot)** `⭐ 15` `updated ≤90d` A local CLI and MCP server that indexes TypeScript/JavaScript repositories into a structural graph for coding agents to query symbols, callers, and call-edges.
- **[remembra-ai/remembra](https://github.com/remembra-ai/remembra)** `⭐ 15` `updated ≤90d` A self-hosted memory layer for AI applications that provides persistent storage, entity resolution, and graph-aware recall via Python and TypeScript SDKs and an MCP server.
- **[SecurityRonin/alaya](https://github.com/securityronin/alaya)** `⭐ 14` `updated ≤90d` Alaya is an embeddable Rust memory engine for conversational AI agents that applies neuroscience-grounded memory dynamics—such as dual-strength forgetting, retrieval-induced suppression, and Hebbian co-activation—to store, retrieve, and decay agent memories using a single SQLite file.
- **[aistastudio/myc](https://github.com/aistastudio/myc)** `⭐ 13` `updated ≤30d` AI-agents development memory/tasks/context.
- **[get-engram/engram](https://github.com/get-engram/engram)** `⭐ 13` `updated ≤30d` Persistent, searchable long-term memory for AI agents. MCP-native. Works with ChatGPT, Claude, Cursor, and any MCP client.
- **[Wynelson94/longhand](https://github.com/wynelson94/longhand)** `⭐ 12` `updated ≤90d` Lossless local memory for Claude Code that stores every tool call, file edit, and thinking block verbatim in SQLite for searchable recall.
- **[mnlt/wellread](https://github.com/mnlt/wellread)** `⭐ 9` `updated ≤180d` Collective research memory for AI agents that caches and shares technical research findings to avoid redundant web searches across sessions.
- **[n24q02m/mnemo-mcp](https://github.com/n24q02m/mnemo-mcp)** `⭐ 8` `updated ≤90d` An open-source MCP server providing persistent AI memory with hybrid search, knowledge graphs, and multi-machine sync for coding assistants like Claude Code and Cursor.
- **[g1itchbot8888-del/agent-memory](https://github.com/g1itchbot8888-del/agent-memory)** `⭐ 7` `updated ≤1y` A local-first memory system for autonomous agents using SQLite and local embeddings.
- **[hifriendbot/cogmemai-mcp](https://github.com/hifriendbot/cogmemai-mcp)** `⭐ 7` `updated ≤180d` CogmemAi is a portable memory layer that provides persistent recall across sessions for AI systems, including coding assistants, with benchmark-topping accuracy.
- **[rushikeshmore/CodeCortex](https://github.com/rushikeshmore/codecortex)** `⭐ 7` `updated ≤180d` A persistent codebase knowledge layer that pre-builds architecture, dependency, coupling, and risk knowledge, exposing it to AI agents via an MCP server and inline context injection.
- **[devspecs-com/devspecs-cli](https://github.com/devspecs-com/devspecs-cli)** `⭐ 6` `updated ≤30d` Local-first CLI for indexing specs, plans, ADRs, and agent-ready engineering context.
- **[dl4rce/flaiwheel](https://github.com/dl4rce/flaiwheel)** `⭐ 6` `updated ≤30d` Self-hosted memory and governance layer for AI coding agents that indexes documentation, enforces structured knowledge capture, and provides an MCP server for agent integration.
- **[penfieldlabs/penfield-mcp](https://github.com/penfieldlabs/penfield-mcp)** `⭐ 6` `updated ≤180d` An MCP server that provides persistent memory, knowledge graphs, and context management for AI agents across sessions and tools like Claude, Cursor, and Windsurf.
- **[ErebusEnigma/context-memory](https://github.com/erebusenigma/context-memory)** `⭐ 5` `updated ≤1y` Persistent, searchable context storage plugin for Claude Code that uses SQLite + FTS5 to maintain memory across sessions.
- **[LuizEduPP/rememb](https://github.com/luizedupp/rememb)** `⭐ 4` `updated ≤180d` rememb is a local, zero-config persistent memory system for AI agents that stores project context in a .rememb/ directory and works via MCP with Cursor, Windsurf, and Claude.
- **[nfemmanuel/iranti](https://github.com/nfemmanuel/iranti)** `⭐ 4` `updated ≤90d` A self-hosted MCP server that provides persistent, identity-based memory infrastructure for multi-agent systems and AI coding tools like Claude Code, Codex CLI, and GitHub Copilot.
- **[rdanieli/tentra-mcp](https://github.com/rdanieli/tentra-mcp)** `⭐ 4` `updated ≤180d` Tentra MCP is a memory server providing persistent code graphs and AI architecture diagrams via 32 MCP tools for AI coding agents.
- **[TheStack-ai/waypath](https://github.com/thestack-ai/waypath)** `⭐ 4` `updated ≤180d` A local-first CLI and MCP server that gives coding agents like Claude Code and Codex persistent, graph-aware memory backed by a single SQLite database with promotion and review governance.
- **[AlekseiMarchenko/central-intelligence](https://github.com/alekseimarchenko/central-intelligence)** `⭐ 3` `updated ≤180d` Persistent memory system for AI agents that integrates with MCP-compatible tools like Claude Code and Cursor.
- **[ghilteras/opencode-agent-memory](https://github.com/ghilteras/opencode-agent-memory)** `⭐ 3` `updated ≤30d` Persistent, self-editable memory blocks and an optional append-only journal with local semantic search for the OpenCode coding agent.
- **[Jev Second Brain](https://github.com/fellowship-dev/jev-second-brain)** `⭐ 3` `updated ≤30d` Local-first Markdown memory alignment and source-linked search with optional Jev judgments.
- **[Thezenmonster/agentmem](https://github.com/thezenmonster/agentmem)** `⭐ 3` `updated ≤180d` A local-first memory system for coding agents like Claude Code and Cursor that adds governance, conflict detection, and trust ranking to stored memories.
- **[albedoweb/agmem](https://github.com/albedoweb/agmem)** `⭐ 2` `updated ≤90d` Persistent project context for Claude Code / Codex / Cursor — searchable, local, no API calls.
- **[gamaze-labs/hicortex](https://github.com/gamaze-labs/hicortex)** `⭐ 2` `updated ≤30d` Self-learning memory for AI agents — experience captured automatically, distilled into lessons overnight, shared across your whole fleet. Works with Hermes, OpenClaw, Claude Code, and Pi.
- **[Hivelore](https://github.com/doucs91/hivelore)** `⭐ 2` `updated ≤30d` A policy enforcement layer for AI coding agents that uses repo-native memory to prevent repeating previously identified mistakes.
- **[PerfectRecall](https://github.com/arslanr-com/perfectrecall)** `⭐ 2` `updated ≤30d` Jev-powered memory for AI agents, with Mnemosyne-compatible storage and Hermes integration.
- **[Relay](https://github.com/momobits/relay)** `⭐ 2` `updated ≤180d` Relay is a structured workflow system that adds persistent memory, issue tracking, and phased planning as reusable skills for Claude Code, OpenAI Codex CLI, and Google Gemini CLI.
- **[claimidx/claimidx](https://github.com/claimidx/claimidx)** `⭐ 1` `updated ≤30d` A public, signed index of software failures and verified fixes designed to prevent AI agents from repeatedly solving the same problems.
- **[peterbeck111/knowledgelib-io](https://github.com/peterbeck111/knowledgelib-io)** `⭐ 1` `updated ≤90d` A structured knowledge library offering pre-verified, cited knowledge units via MCP, REST, and LangChain integrations to reduce token usage and hallucinations in AI agents.
- **[AgenticRevolution/memory-nexus-cloud](https://github.com/agenticrevolution/memory-nexus-cloud)** AgenticRevolution/memory-nexus-cloud ☁️ - Cloud-hosted persistent semantic memory for AI agents. Semantic search, knowledge graphs, specialist expertise hats, and multi-tenant isolation. Free 7-day trial.
- **[Byeori](https://github.com/joonan-lab/byeori)** Scientific knowledge system using Jev to nominate reusable knowledge issues for human review.
- **[CanopyHQ/phloem](https://github.com/canopyhq/phloem)** CanopyHQ/phloem ️ - Local-first AI memory with causal graphs and citation verification. Semantic search, confidence decay when code drifts, and zero network connections. Works across Claude Code, Cursor, VS Code, and 7 more MCP clients.
- **[ChatCrystal](https://github.com/zengliangyi/chatcrystal)** ChatCrystal – Local-first memory loop for AI coding conversations, with MCP search, task recall, writeback, and installable Agent Skills.
- **[CommitLore](https://github.com/monglong0214/commitlore)** CommitLore – Git-native decision memory that stores constraints and ruled-out alternatives as git trailers and notes, giving coding agents only the guidance still in force for the file being edited.
- **[Jev-Mem](https://github.com/libingzheren/jev-mem)** Jev-Mem - Jev-Mem: System-One Controlled Agentic Memory.
- **[kitfunso/hippo-memory](https://github.com/kitfunso/hippo-memory)** Agent memory library with an optional Jev reranker that judges which retrieved memories are relevant.
- **[Lians-ai/Lians](https://github.com/lians-ai/lians)** Lians-ai/Lians : Runs local-first agent memory with SQLite, cross-session recall, and point-in-time history through MCP.
- **[liza-studio/skillmem](https://github.com/liza-studio/skillmem)** liza-studio/skillmem : Stores how a task was solved — trigger, steps, outcome, lessons — and recalls it through editor hooks, entirely on the local machine.
- **[louis030195/hyperconsciousness](https://github.com/louis030195/hyperconsciousness)** louis030195/hyperconsciousness : Developer-alpha encrypted knowledge store exposing MCP search and retrieval through scoped, expiring grants.
- **[ohad6k/emulo](https://github.com/ohad6k/emulo)** ditto – Mines your local Claude Code, Codex, and Cursor session logs into a you.md working profile your agent loads before every task: what you reject, what "done" means to you, when you ask for proof, how you actually work. Local-first, MIT, one command: npx skills add ohad6k/ditto.
- **[OpenViking](https://github.com/volcengine/openviking)** OpenViking ⭐ 38.9k [ByteDance] — Context database for AI agents: memories, resources, and skills stored as one virtual filesystem under a viking:// protocol, so any agent reads and writes context the same way. ov CLI plus an MCP server and a browser studio. AGPL-3.0.
- **[patdolitse/piia-engram](https://github.com/patdolitse/piia-engram)** piia-engram – Cross-tool persistent memory MCP server. Stores preferences, standards, and lessons locally across Claude Code, Cursor, Codex, and any MCP client.
- **[poiuyjie/jev_project_context](https://github.com/poiuyjie/jev_project_context)** jev_project_context - Evidence-first long-term experiment memory skill for AI coding agents, with optional Jev decision-model layers.
- **[romiluz13/jevmory](https://github.com/romiluz13/jevmory)** jevmory - Coding-agent memory where every fact is a verbatim quote graded by TypeSafe Jev's calibrated confidence. Local-first, SQLite receipts, zero dependencies.
- **[stonianua/neither-mcp](https://github.com/stonianua/neither-mcp)** stonianua/neither-mcp : Hosted company-context graph for AI agents — decisions and memory with supersession; MCP server for Cursor and Claude Desktop (npx -y @neitherai/mcp-server@latest).
- **[syncable-dev/memtrace-public](https://github.com/syncable-dev/memtrace-public)** syncable-dev/memtrace-public : Persistent memory layer for coding agents — bi-temporal structural knowledge graph over your codebase (AST-driven symbols/relationships, temporal evolution, cross-service API topology).
- **[Tree Ring Memory](https://github.com/terminallylazy/tree-ring-memory)** Tree Ring Memory ⭐ 18 — Local-first Rust CLI for the coding-agent memory lifecycle: project-scoped SQLite recall, evidence-backed lessons, and consolidation of older memories into "rings" so context compresses instead of growing without bound. Remember, recall, audit, and consolidate subcommands over a three-crate workspace; signed prebuilt binaries for macOS and Linux. MIT.
- **[vbcherepanov/total-agent-memory](https://github.com/vbcherepanov/total-agent-memory)** Jev checks retrieved memories for contradictions before an agent uses them in an answer.
- **[zilliztech/memsearch](https://github.com/zilliztech/memsearch)** Agent memory search with optional Jev relevance judgments to rerank retrieved passages.
- **[Graphlit](https://graphlit.com)** Graphlit provides a managed context layer for AI agents with real-time sync across Slack, GitHub, and Jira, plus built-in semantic search.
- **[HackMD](https://hackmd.io)** HackMD is a real-time collaborative Markdown editor that provides versioned notes and API access for teams and AI agents to share context.
- **[jevmem](https://npmjs.com/package/jevmem)** jevmem (site) - Jev decides. The LLM writes one line. Your project never forgets. Jev-powered memory layer for AI coding tools.
- **[Powerdrill AI](https://powerdrill.ai)** Powerdrill.ai is an AI-powered data analysis workspace with memory that allows users to query documents and databases in plain language and get sourced answers.
- **[Remio](https://remio.ai)** Remio – Local-first AI memory and knowledge base desktop app with a CLI/agent skill interface. Indexes files, webpages, recordings, emails, messages, images, and notes into local vectors so coding agents can retrieve focused personal/project context instead of repeatedly grepping folders or loading whole documents into prompts. CLI/skill workflows require the Remio desktop client.
- **[Vectorize](https://vectorize.io)** Vectorize provides open-source agent memory (Hindsight) that enables AI agents to learn from experience and retain persistent context across sessions.

</details>

## Context & Session Management

- **[Brigade](https://github.com/escoffier-labs/brigade)** `⭐ 73` `updated ≤30d` Track work, verify results, carry memory, and sync tools across coding agents. Local files, no daemon.
- **[Archcore](https://github.com/archcore-ai/archcore)** `⭐ 62` `updated ≤30d` Spec-driven development and context engineering for Claude Code, Cursor, Codex, and GitHub Copilot — backed by project context in Git.
- **[showagent](https://github.com/aytzey/showagent)** `⭐ 48` `updated ≤30d` A CLI and TUI tool for finding local coding agent sessions and transferring their conversation history into different agent runtimes. <details><summary>More about</summary>

  It allows developers to switch between different coding assistants without losing the context of their ongoing work.

  _Because the search for the perfect coding agent has evolved from choosing one tool to managing a complex ecosystem of handoffs between them._

  `cli` `tui` `mcp` `session-management` `coding-agents`
  </details>
- **[code-collator](https://github.com/tawandakembo/code-collator)** `⭐ 28` `updated >1y` A CLI tool that aggregates an entire codebase into a single Markdown file for easy sharing with AI assistants like ChatGPT or Claude. <details><summary>More about</summary>

  It reduces the friction of pasting code into prompts by packaging repos into a format optimized for LLM context windows.

  _We have now automated the tedious human task of Ctrl+A, Ctrl+C, and Ctrl+V, proving that if a workflow is painful enough, someone will write a pip install to do it for you._

  `cli` `context-packing` `codebase-analysis`
  </details>
- **[Agent Shadow Brain](https://github.com/theihtisham/agent-shadow-brain)** `⭐ 20` `updated ≤180d` A local-first shared memory and context system that acts as a singleton brain for multiple AI coding agents, injecting briefings, causal memory chains, and task context across tools like Claude Code, Cursor, and Cline. <details><summary>More about</summary>

  It attempts to solve the problem of agents starting from zero each session by sharing learned context, sub-agent state, and decision history across your entire local AI toolchain.

  _You now have a singleton brain for your agents, which means they can all forget things together in perfect, cryptographically signed harmony._

  `local-first` `memory` `multi-agent` `context` `mcp`
  </details>
- **[Cheshi](https://github.com/cheshiai/cheshi)** `⭐ 19` `updated ≤30d` Jev-powered conversation memory: find past sessions and revisit decisions with original sources. A macOS workspace for OpenAI Codex. Manage AI conversations and agents, explore code with CodeGraph, and work with Git, Ghostty terminals, and Apple Notes in one app.
- **[Pluribus](https://github.com/caioribeiroclw-pixel/pluribus)** `⭐ 14` `updated ≤90d` Sync one reviewed context source into native AI-agent files, with privacy-safe evidence receipts that never confuse generation with runtime load.
- **[conversation-handoff-mcp](https://github.com/trust-delta/conversation-handoff-mcp)** `⭐ 6` `updated ≤90d` MCP server that saves, tags, and transfers conversation context between AI chats and projects. <details><summary>More about</summary>

  Lets developers resume work across different AI sessions or tools without losing context, effectively creating a shared memory layer for CLI and desktop agents.

  _Because each AI chat window starts with a clean slate and a blank stare, and we have somehow made that a server problem._

  `mcp` `context-handoff` `memory` `cross-session`
  </details>
- **[azimov777/casefile](https://github.com/azimov777/casefile)** `⭐ 5` `updated ≤30d` AI agents forget between sessions. Casefile gives every task a case file — decisions, dead ends, open questions — so the next agent picks up where the last one stopped. Self-hosted MCP server + live board.
- **[Portable Handoff](https://github.com/legoambarish/portable-handoff)** Portable Handoff – Local-first CLI that compacts a coding session into a Markdown/JSON capsule for resuming in Claude Code, Codex, or Cursor, with verified Git facts and no API key.
- **[serdardb/context-bridge](https://github.com/serdardb/context-bridge)** context-bridge ⭐ 4 — Hands a live coding session from one CLI agent to another without losing the thread: each agent keeps its own native session and the bridge transfers only the delta the next one is missing, via /bridge codex inside Claude Code or $bridge claude elsewhere. Covers Claude Code, Codex, Grok, Antigravity, and OpenCode; no API keys — it drives the subscription-authenticated CLIs already installed. Node, npm @serdardb/context-bridge, MIT.
- **[tenequm/pond](https://github.com/tenequm/pond)** pond ⭐ 73 — Lossless session archive for coding agents: ingests what twelve harnesses already write (Claude Code, Codex, opencode, pi, OpenClaw, Hermes, letta-code, grok-build and more) into Lance on a local directory or your own S3 bucket, then serves recall back over CLI, MCP, HTTP, and read-only SQL. Sessions outlive harness retention windows and restore into any supported client. Rust, Apache-2.0.
- **[vectorarc/avp-python](https://github.com/vectorarc/avp-python)** AVP 28 Python Apache-2.0 2026-04 Transfers KV-cache between agents, not text.
- **[vshulcz/deja-vu](https://github.com/vshulcz/deja-vu)** vshulcz/deja-vu : Shared session memory for coding agents, read from the transcripts 25 agents already write on this machine — including sessions from before it was installed. Nothing is written to a memory store; retrieval is lexical, with no LLM and no embeddings. One Go binary, MCP server plus hooks. npx @vshulcz/deja-vu.
- **[Context by Fulcra](https://fulcradynamics.com)** Fulcra is a user-owned context backend for AI agents that unifies real-world data, files, and agent work into a controllable context lake. <details><summary>More about</summary>

  It solves the fragmentation of agent memory by giving developers a shared, persistent context that travels across agents and models.

  _Finally, a place where your AI agents can gossip about you without you being able to delete the chat history._

  `context-engineering` `mcp` `data-platform`
  </details>

## Compression & Token Optimization

- **[alexgreensh/token-optimizer](https://github.com/alexgreensh/token-optimizer)** `⭐ 2.3k` `updated ≤30d` A utility for identifying 'ghost tokens' and managing context compaction to prevent quality decay in AI coding assistants. <details><summary>More about</summary>

  It helps developers reduce token costs and maintain high-quality model reasoning by optimizing how context is packed into long-running agent sessions.

  _Because managing the entropic decay of a context window is now a legitimate part of the software development lifecycle._

  `token-optimization` `context-engineering` `claude-code` `cost-reduction` `agent-skills`
  </details>
- **[Mibayy/token-savior](https://github.com/mibayy/token-savior)** `⭐ 1.1k` `updated ≤90d` An MCP server that optimizes AI coding agent performance through Bash output compaction, structural code navigation, and persistent memory. <details><summary>More about</summary>

  It significantly reduces token consumption and latency in agentic workflows while improving task success rates by cleaning up the context sent to the model.

  _Nothing says 'I've lost control of my context window' like needing a specialized savior just to stop Claude from drowning in its own bash history._

  `mcp` `token-optimization` `context-management` `coding-agents` `bash-compaction`
  </details>
- **[ooples/token-optimizer-mcp](https://github.com/ooples/token-optimizer-mcp)** `⭐ 445` `updated ≤90d` An MCP server that optimizes token usage for Claude Code through caching, compression, and smart tool intelligence to reduce context window consumption. <details><summary>More about</summary>

  Developers using Claude Code can significantly reduce token costs and fit more context into limited windows by automatically compressing and caching tool outputs.

  _We have successfully built infrastructure to manage the exhaustion of the context window that the previous layer of infrastructure was supposed to solve._

  `mcp` `token-optimization` `claude-code` `compression` `context`
  </details>
- **[Entroly](https://github.com/juyterman1000/entroly)** `⭐ 431` `updated ≤90d` A local proxy and context control plane that compresses context, optimizes provider cache hits, and verifies LLM outputs to reduce AI coding costs. <details><summary>More about</summary>

  It allows developers to slash API bills by 70-95% while improving context relevance and adding a layer of hallucination detection to existing coding assistants.

  _Nothing says modern development like spending an hour fine-tuning a context compression algorithm just to save enough money for a single latte._

  `context-compression` `llm-proxy` `hallucination-detection` `token-optimization` `rust`
  </details>
- **[ai-distiller](https://github.com/janreges/ai-distiller)** `⭐ 165` `updated ≤180d` AI Distiller is an open-source CLI tool that compresses large codebases into AI-friendly context by extracting only essential public APIs, types, and structure, reducing volume by 90–98%. <details><summary>More about</summary>

  It solves the problem of AI assistants hallucinating or guessing interfaces in large codebases by providing distilled, dependency-aware context that fits within model limits.

  _Finally, a way to stop your AI from writing code that compiles in its dreams but explodes in your repo._

  `context-compression` `code-distillation` `mcp-server` `cli-tool` `multi-language`
  </details>
- **[nicholasbester/clickup-cli](https://github.com/nicholasbester/clickup-cli)** `⭐ 37` `updated ≤90d` A CLI for the ClickUp API that compresses API responses into token-efficient output optimized for AI agents and human users. <details><summary>More about</summary>

  It reduces ClickUp API responses from ~12,000 tokens to ~150 tokens by default, preventing AI agents from exhausting their context windows on nested JSON.

  _We have finally reached the point where we need a specialized CLI to stop our AI assistants from drowning in the JSON output of our project management tools._

  `cli` `clickup` `context-engineering` `token-efficiency` `api`
  </details>
- **[Avazbek22/DevProjex](https://github.com/avazbek22/devprojex)** `⭐ 25` `updated ≤30d` Build safe, token-efficient codebase context for LLMs, AI chats, and coding agents — local-first GUI, TUI, CLI, and a read-only MCP server with Smart Ignore, secret/PII redaction, Git scopes, and code compression.
- **[promptext](https://github.com/1broseidon/promptext)** `⭐ 22` `updated ≤180d` A CLI tool that extracts and optimizes codebase context into token-efficient formats for LLMs. <details><summary>More about</summary>

  It solves the tedious process of manually selecting relevant files and managing token budgets when feeding large repositories into AI assistants.

  _Finally, a way to precisely calculate exactly how much money you're wasting on context windows before you hit 'end'._

  `cli` `context-management` `token-optimization` `codebase-analysis` `golang`
  </details>
- **[davidcreador/pi-dcp](https://github.com/davidcreador/pi-dcp)** `⭐ 18` `updated ≤30d` Cut LLM token spend in long Pi sessions, automatically. Dedup redundant tool calls, strip errored payloads, and let the model summarize closed work-streams — all without ever modifying your session history.
- **[Tiermem](https://github.com/freedomintelligence/tiermem)** `⭐ 15` `updated ≤30d` [COLM' 2026] TierMem: Balancing Compressed Memory and Raw Evidence for Long-Horizon Agent Memory.
- **[AlphaOptimizer](https://github.com/alpha-tales/alphaoptimizer)** `⭐ 4` `updated ≤30d` Jev-powered output optimization for Codex, built to keep large tool results concise and usable.
- **[foldwork-dev/mcp-injector](https://github.com/foldwork-dev/mcp-injector)** `⭐ 4` `updated ≤90d` A local MCP daemon that compresses codebase context using AST folding to reduce token usage. <details><summary>More about</summary>

  It significantly lowers API costs and improves context relevance by stripping non-essential code structures while preserving essential signatures.

  _Finally, a way to feel like a responsible engineer while watching your Claude API bill plummet._

  `mcp` `context-compression` `token-optimization` `ast` `local-ai`
  </details>
- **[Auctalis/nocturnusai](https://github.com/auctalis/nocturnusai)** `⭐ 3` `updated ≤90d` A context engineering engine for AI agents that compresses context, extracts facts, and provides deterministic answers with proof via logical inference. <details><summary>More about</summary>

  It reduces token usage and cost by up to 10x while preserving truth and determinism in agent workflows, addressing the pain of replaying entire conversation histories.

  _Finally, a way to stop your AI from re-reading the entire conversation like a goldfish who forgot where it parked._

  `context-engineering` `deterministic-inference` `token-optimization` `mcp` `knowledge-graph`
  </details>
- **[MakeaMouse/fish-bridge-mcp](https://github.com/makeamouse/fish-bridge-mcp)** `⭐ 2` `updated ≤90d` A session-scoped knowledge graph engine that compresses long AI chat histories into compact, typed context summaries automatically ingested by Copilot, Claude Code, and Cursor. <details><summary>More about</summary>

  It slashes token burn by distilling 40k-token sessions into ~350-token graphs, letting developers maintain coherent long-running conversations with coding assistants without hitting context limits or paying to resend full history every turn.

  _You already paid to generate the 40k tokens, and now you need a second AI to summarize them so the first AI can afford to keep talking to you._

  `context-compression` `knowledge-graph` `memory` `cli` `mcp-server`
  </details>
- **[ShipItAndPray/mcp-compress](https://github.com/shipitandpray/mcp-compress)** `⭐ 2` `updated ≤1y` An MCP server that provides 7 tools for compressing, decompressing, analyzing, and storing text, JSON, CSV, and log data using algorithms like brotli, gzip, and deflate, designed to reduce context window usage for AI agents. <details><summary>More about</summary>

  It lets agents shrink large API responses, logs, and docs before they hit the context window, potentially lowering token costs and fitting more data into limited space.

  _We have finally reached the point where our agents need dedicated lossless compression middleware so they can pretend to read 30KB of logs without actually reading 30KB of logs._

  `mcp` `compression` `context-engineering` `data`
  </details>
- **[UACOS](https://github.com/caotiensinh/uacos)** `⭐ 1` `updated ≤90d` UACOS is a local-first context compression, orchestration planner, and safety gate for AI coding workflows. <details><summary>More about</summary>

  It helps developers reduce token waste and prevent unsafe AI-generated changes by bounding context and validating patches before apply.

  _Another layer of YAML and JSON to make sure your AI doesn’t hallucinate a root rm -rf while you sip cold brew and pretend you’re in control._

  `context-compression` `ai-safety` `orchestration`
  </details>
- **[Boost](https://github.com/jfrog/boost)** Boost – Free CLI that reduces terminal and CI output before it reaches Cursor, Claude Code, and Codex, typically saving 60–90% of log tokens with reversible retrieval and local performance reports.
- **[Context-OS](https://github.com/sravan27/context-os)** Context-OS – Scans repos for coding-agent context bloat and ships a GitHub Action gate for Claude Code, Codex, Cursor, and OpenCode.
- **[iamunbounded/save-token-jev-clean](https://github.com/iamunbounded/save-token-jev-clean)** save-token-jev-clean.
- **[ilkerulusoy/pi-jev-compact](https://github.com/ilkerulusoy/pi-jev-compact)** pi-jev-compact — A Pi context-pruning extension targeting tool history by default, with optional assistant-prose pruning.
- **[ILoveMyJay/repocontext](https://github.com/ilovemyjay/repocontext)** ILoveMyJay/repocontext - AST-based codebase map, token compression and context packaging for AI coding agents and IDEs.
- **[kirder24-code/ai-agent-manager](https://github.com/kirder24-code/ai-agent-manager)** Runcap – Free local CLI that estimates, hard-caps, and losslessly compresses the cost of AI coding agents. Delta-encodes re-read files (37.9% proven on a real OpenAI call). MIT, 100% local.
- **[labguy94/jevtok](https://github.com/labguy94/jevtok)** jevtok - Exact token counting and request-cost prediction for TypeSafe Jev (tiktoken-style encoder reconstructed from API usage). Project guide.
- **[martinopiaggi/summarize](https://github.com/martinopiaggi/summarize)** The optional Jev prefilter scores transcript segments before the selected material is sent to the summarizer.
- **[rafim-dev/mcp-context-condenser](https://github.com/rafim-dev/mcp-context-condenser)** rafim-dev/mcp-context-condenser - AST-based code outliner, log compressor and context budget analyzer to reduce LLM token usage.
- **[trakshan-mishra/Diffcontext](https://github.com/trakshan-mishra/diffcontext)** trakshan-mishra/Diffcontext - Static-analysis context compiler for Python repos: selects callers, callees and related functions for a change and packs them into a token budget.
- **[wang-auspicious/pi-jev-compaction](https://github.com/wang-auspicious/pi-jev-compaction)** pi-jev-compaction — Extractive context compaction for Pi that keeps selected original tool records instead of generating a summary.

## Retrieval & Fresh Docs

- **[Context 7](https://github.com/upstash/context7)** `⭐ 59.5k` `updated ≤90d` Context7 Platform provides up-to-date code documentation and examples for LLMs and AI code editors via CLI skills or MCP server integration. <details><summary>More about</summary>

  It reduces hallucinated or outdated code generation by fetching real-time, version-specific documentation directly into the developer's AI coding workflow.

  _Another tool to remind your AI assistant that it still can't remember last week's API changes, so you spend more time managing context than coding._

  `context-engineering` `mcp` `ai-dev-extensions`
  </details>
- **[gitingest](https://github.com/coderamp-labs/gitingest)** 🔥 `⭐ 15.4k` `updated ≤30d` A tool that converts GitHub repository URLs into prompt-friendly text digests for LLM consumption. <details><summary>More about</summary>

  Developers can quickly feed entire codebases into LLMs without manual context curation, improving prompt relevance and reducing token waste.

  _Now you can finally stop pretending you read the entire repo before asking the LLM to fix it._

  `context-engineering` `code-ingestion` `llm-prompting` `github-integration`
  </details>
- **[QAnything](https://github.com/netease-youdao/qanything)** `⭐ 14k` `updated >1y` QAnything is a local, self-hosted knowledge base question-answering system that ingests files and web links to provide offline document retrieval and Q&A. <details><summary>More about</summary>

  Developers can deploy it locally to index technical documentation, codebases, and internal knowledge without sending data to external LLM APIs.

  _Finally, a way to ask your 400-page PDF specifications questions, while quietly wondering if the real RAG was the context tokens we burned along the way._

  `rag` `local-ai` `knowledge-base` `document-qa`
  </details>
- **[Fast-GraphRAG](https://github.com/circlemind-ai/fast-graphrag)** `⭐ 3.9k` `updated ≤1y` A GraphRAG implementation that intelligently adapts to specific use cases, data, and queries. <details><summary>More about</summary>

  It addresses the limitations of standard RAG by using graph structures to improve retrieval accuracy for complex, interconnected datasets.

  _Now you can spend your weekends worrying about the structural integrity of your knowledge graphs instead of just your code._

  `rag` `graph-rag` `retrieval` `knowledge-graph` `llm-infrastructure`
  </details>
- **[CocoIndex Code](https://github.com/cocoindex-io/cocoindex-code)** `⭐ 2.7k` `updated ≤30d` A lightweight AST-based semantic code search CLI that optimizes context for coding agents by reducing token usage. <details><summary>More about</summary>

  It helps developers and coding agents work faster by providing precise, token-efficient code search and retrieval for large codebases.

  _Finally, a tool that lets your AI assistant find the right code without burning through your entire context window on irrelevant files._

  `code-search` `ast` `context-engineering` `token-optimization` `mcp`
  </details>
- **[SolidGPT](https://github.com/ai-citizen/solidgpt)** `⭐ 1.8k` `updated >1y` An AI searching assistant that provides semantic search and context retrieval across local codebases and Notion workspaces. <details><summary>More about</summary>

  It reduces context switching by allowing developers to query their codebase and project documentation through a single semantic interface.

  _Because nothing says 'I've lost my grip on the architecture' like needing an LLM to tell you where you wrote that one specific function three months ago._

  `semantic-search` `rag` `vscode-extension` `context-retrieval` `knowledge-management`
  </details>
- **[dzhng/jevgrep](https://github.com/dzhng/jevgrep)** 🔥 `⭐ 1.6k` `updated ≤30d` Find code by asking what it does. A CLI for coding agents that uses Jev to discover relevant files and source context.
- **[CAG](https://github.com/hhhuang/cag)** `⭐ 1.5k` `updated >1y` Cache-Augmented Generation (CAG) is a retrieval-free alternative to RAG that preloads knowledge into a model's context and caches runtime parameters for faster, more reliable inference. <details><summary>More about</summary>

  It offers developers a simpler, lower-latency approach to augmenting LLMs with external knowledge by eliminating real-time retrieval steps while maintaining context relevance.

  _Finally, a way to avoid the existential dread of watching your RAG pipeline spin up another vector search just to answer a simple question._

  `cag` `rag-alternative` `context-augmentation` `llm-optimization`
  </details>
- **[ref-tools-mcp](https://github.com/ref-tools/ref-tools-mcp)** `⭐ 1.1k` `updated ≤180d` An MCP server that provides AI coding tools with token-efficient access to documentation through agentic search and targeted content retrieval. <details><summary>More about</summary>

  It reduces context rot and API costs by fetching only the most relevant documentation snippets instead of dumping entire pages into the model's context window.

  _We have successfully built infrastructure to solve the problem of our previous infrastructure making our models dumber by feeding them too much infrastructure documentation._

  `mcp` `documentation` `context-engineering` `token-efficiency`
  </details>
- **[CodeAlmanac](https://github.com/almanaccode/codealmanac)** `⭐ 996` `updated ≤90d` A codebase wiki for AI coding agents. Captures what the code can't say: decisions, flows, invariants, gotchas.
- **[dr-doc-search](https://github.com/namuan/dr-doc-search)** `⭐ 598` `updated >1y` A Python CLI and web app that indexes PDF books using LangChain and OpenAI/HuggingFace embeddings to enable conversational Q&A over document content. <details><summary>More about</summary>

  It provides a reusable pattern for building local document-indexing pipelines that developers can adapt for internal docs, wikis, or proprietary knowledge bases.

  _Yet another reminder that in 2023 we decided the best way to read a book is to pay a language model to summarize it for us one question at a time._

  `langchain` `rag` `pdf` `cli` `huggingface`
  </details>
- **[Llama-github](https://github.com/jetxu-llm/llama-github)** `⭐ 292` `updated ≤90d` llama-github is a Python library that enables LLM chatbots, AI agents, and auto-dev solutions to perform Agentic RAG by retrieving relevant code snippets, issues, and repository information from GitHub. <details><summary>More about</summary>

  It streamlines development by augmenting AI agents with context-rich GitHub data, reducing the time spent searching for relevant code examples or repository insights.

  _Now your AI agent can drown in GitHub issues just like you do._

  `python-library` `github-rag` `agentic-retrieval` `code-context` `llm-integration`
  </details>
- **[PatrickSys/codebase-context](https://github.com/patricksys/codebase-context)** `⭐ 55` `updated ≤180d` A local-first MCP server and CLI that maps a codebase's architecture, patterns, and conventions to give AI agents a preflight context map before they start searching or editing. <details><summary>More about</summary>

  It stops agents from wasting tokens wandering through generic examples by showing them the team's actual patterns, golden files, and architectural layers first.

  _One more layer of infrastructure to ensure your AI agent understands your repo well enough to generate code that still somehow ignores the conventions you just mapped for it._

  `mcp` `context-engineering` `local-first` `semantic-search` `codebase-mapping`
  </details>
- **[agent-toolkit](https://github.com/video-db/agent-toolkit)** `⭐ 47` `updated ≤1y` An open-source agent toolkit that auto-syncs SDK versions, docs, and examples for LLMs and AI agents, with MCP and llms.txt integration for VideoDB. <details><summary>More about</summary>

  It reduces context drift in AI coding workflows by keeping LLM-facing documentation and SDK examples up to date automatically.

  _Another tool to manage the metadata your AI agents need to not hallucinate about your own stack._

  `mcp` `llms-txt` `context-engineering` `video-db`
  </details>
- **[vezlo/src-to-kb](https://github.com/vezlo/src-to-kb)** `⭐ 37` `updated ≤1y` Converts source code into a searchable knowledge base with MCP server support for Claude Code and Cursor integration. <details><summary>More about</summary>

  Enables developers to query and navigate their own codebase using natural language via local or external AI-powered search.

  _Finally, a way to feel smart while asking an AI where you put that one utility function three sprints ago._

  `code-search` `knowledge-base` `mcp`
  </details>
- **[sequa-ai/sequa-mcp](https://github.com/sequa-ai/sequa-mcp)** `⭐ 21` `updated ≤1y` An MCP server that connects AI coding assistants to Sequa's hosted contextual knowledge engine to provide always-current codebase documentation and internal standards. <details><summary>More about</summary>

  It aims to automatically keep documentation in sync with code changes so that AI assistants like Cursor and Claude stop writing code based on stale architectural assumptions.

  _We've reached the point where we need an AI tool to fix the documentation drift caused by the speed of AI code generation, completing the 'AI writes code, AI writes docs, AI reads docs' ouroboros._

  `mcp` `documentation` `context` `knowledge-base`
  </details>
- **[JSungMin/vs-token-safer](https://github.com/jsungmin/vs-token-safer)** `⭐ 10` `updated ≤90d` A token-optimized code retrieval layer that uses language server indexes like clangd and Roslyn to provide semantic search for coding agents. <details><summary>More about</summary>

  It prevents coding agents from flooding their context windows with irrelevant code by replacing naive grep searches with precise, symbol-based lookups.

  _Because apparently, even the smartest LLMs can't be trusted to find a function without accidentally reading the entire monorepo._

  `mcp` `context-engineering` `claude-code` `semantic-search` `token-optimization`
  </details>
- **[aifabrice/jev-rag](https://github.com/aifabrice/jev-rag)** `⭐ 3` `updated ≤30d` Open-source local knowledge search with 7 measurable pipelines: vector-free BM25 + Jev, agentic lexical, hybrid retrieval, taxonomy, passage gate, and line search.
- **[HakashiKatake/docorbit](https://github.com/hakashikatake/docorbit)** `⭐ 3` `updated ≤30d` DocOrbit discovers authoritative documentation, resolves it against your project's dependency versions, retrieves task-specific context, and verifies generated code against documentation contracts.
- **[Agent Seek](https://github.com/gitmaxd/agent-seek)** `⭐ 2` `updated ≤30d` Agent Seek — precision web recall for agents. You.com discover + TypeSafe Jev ranking. MCP + REST. Live demo: https://agentseek.dev.
- **[ndjordjevic/pinrag](https://github.com/ndjordjevic/pinrag)** `⭐ 2` `updated ≤180d` A RAG system built with LangChain that exposes multi-format document indexing and citation-based querying as an MCP server for Cursor, VS Code, and other AI assistants. <details><summary>More about</summary>

  It lets developers centralize scattered learning materials—PDFs, GitHub repos, YouTube videos, and Discord threads—into one queryable index that their coding assistant can cite directly inside the editor.

  _We have successfully reached the point where the assistant needs its own assistant just to remember what you watched on YouTube yesterday._

  `rag` `mcp` `langchain` `context` `knowledge`
  </details>
- **[54lynnn/graphify-jev](https://github.com/54lynnn/graphify-jev)** `⭐ 1` `updated ≤30d` Next-gen Codebase Knowledge Graph with TypeSafe JEV Semantic Navigation & Zero Vector DB. Accurate to the code line, 90% fewer tokens.
- **[AI Badger](https://github.com/pvrlabs/aibadger)** AI Badger – Local-first CLI for extracting clean, relevant codebase context to paste into any AI coding assistant.
- **[infino-ai/supergrep](https://github.com/infino-ai/supergrep)** infino-ai/code-context ️ - Local code search for coding agents: hybrid keyword and semantic search with SQL relevance ranking over a plain-file index.
- **[kyle641320/true-memory-fragments](https://github.com/kyle641320/true-memory-fragments)** kyle641320/true-memory-fragments - Checks source-context freshness against a Git working tree and retrieves source-linked code relationships to surface stale knowledge and cross-file impact.
- **[pdavis68/RepoMapper](https://github.com/pdavis68/repomapper)** pdavis68/RepoMapper - Dynamic map of chat-related repository files with their function prototypes and related files, ranked by relevance, based on Aider's Repo Map.
- **[Reflex](https://github.com/reflex-search/reflex)** Reflex – Local-first full-text code search engine with MCP server and JSON output built for AI coding agents.
- **[SylphxAI/lockdocs](https://github.com/sylphxai/lockdocs)** SylphxAI/lockdocs : Local, offline library docs for AI agents from the exact versions in your lockfile (npm, PyPI, crates.io, Go), with pinned-version lookup, cited doc sections and exact API signatures.
- **[SylphxAI/repomap](https://github.com/sylphxai/repomap)** SylphxAI/repomap : A local code graph for AI agents with hybrid search, callers and callees, call paths, change impact including git diff, and an interactive graph UI.
- **[vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag)** vitali87/code-graph-rag : Builds knowledge graphs from multi-language codebases using Tree-sitter AST parsing for RAG-style code understanding.

<details><summary><strong>▸ &nbsp;&nbsp;+1 more in Retrieval & Fresh Docs &nbsp;—&nbsp; click to expand</strong></summary>

- **[Dosu](https://dosu.dev)** Dosu is a knowledge infrastructure layer that automatically captures and syncs team documentation to reduce token usage and improve agent performance.

</details>

## Prompt Engineering & Management

- **[GPT Runner](https://github.com/nicepkg/gpt-runner)** `⭐ 383` `updated >1y` A local CLI, web UI, and VSCode extension for managing AI presets and chatting with selected code files using OpenAI or Anthropic models. <details><summary>More about</summary>

  It lets teams version-control reusable AI prompt presets as .gpt.md files and avoids the manual copy-paste workflow when discussing code with LLMs.

  _We have finally solved the ancient engineering problem of copying code into a browser tab and pasting it back, provided you also maintain yet another config file format._

  `prompt-presets` `vscode-extension` `cli` `context-management`
  </details>
- **[langfuse/mcp-server-langfuse](https://github.com/langfuse/mcp-server-langfuse)** `⭐ 169` `updated >1y` An MCP server that exposes Langfuse prompts for discovery, retrieval, and compilation via the Model Context Protocol in clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It lets developers centralize prompt management in Langfuse and surface those prompts directly inside their MCP-compatible coding assistants.

  _Because nothing says streamlined engineering like running a dedicated protocol server just to paste your meticulously versioned prompt templates into Claude Desktop._

  `mcp` `prompt-management` `langfuse` `developer-tools`
  </details>
- **[PromptSite](https://github.com/dkuang1980/promptsite)** `⭐ 46` `updated >1y` PromptSite is a lightweight Python package for version controlling, tracking, and experimenting with LLM prompts. <details><summary>More about</summary>

  It helps developers manage prompt iterations, track executions, and debug LLM outputs without heavy infrastructure.

  _Finally, a way to version your prompts so you can stop pretending your latest tweak was definitely better._

  `prompt-management` `llm-workflows` `version-control` `python`
  </details>
- **[Hypersigil](https://github.com/hypersigilhq/hypersigil)** `⭐ 27` `updated ≤180d` Prompt management gateway with a UI for centralizing, testing, and deploying prompts across multiple AI providers. <details><summary>More about</summary>

  Enables teams to iterate on AI workflows without code redeployments, bridging domain expertise and AI implementation.

  _Finally, a way to hot-swap prompts like you hot-swap your existential dread about prompt drift._

  `prompt-management` `multi-provider` `llm-gateway` `collaboration` `prompt-engineering`
  </details>
- **[vasayxtx/mcp-prompt-engine](https://github.com/vasayxtx/mcp-prompt-engine)** `⭐ 18` `updated ≤1y` MCP Prompt Engine is a Go-based MCP server that serves dynamic prompt templates using Go text/template syntax. <details><summary>More about</summary>

  It lets developers manage and version prompt templates as code, making prompt reuse and dynamic argument injection reliable across MCP clients.

  _Another layer of YAML-adjacent templating to maintain while waiting for the next protocol that makes this obsolete._

  `mcp` `prompt-templates` `go`
  </details>
- **[pmptwiki/pmpt-cli](https://github.com/pmptwiki/pmpt-cli)** `⭐ 6` `updated ≤1y` A CLI tool that guides developers through five questions to generate structured AI prompts, then tracks, versions, and publishes the resulting product development journey. <details><summary>More about</summary>

  It standardizes the fragile transition from vague idea to actionable prompt and adds version control for the AI-driven build process itself.

  _We have now achieved version control for the hallucinations that build our apps, ensuring we can forever reproduce exactly how we lost three days to a misunderstood requirements prompt._

  `cli` `prompt-engineering` `version-control` `mcp`
  </details>
- **[alexwestco/llm-to-jev](https://github.com/alexwestco/llm-to-jev)** `⭐ 5` `updated ≤30d` Convert LLM prompts to Jev prompts.
- **[GeiserX/lynxprompt-mcp](https://github.com/geiserx/lynxprompt-mcp)** `⭐ 2` `updated ≤30d` An MCP server that exposes LynxPrompt AI configuration blueprints like AGENTS.md and CLAUDE.md to LLMs via the Model Context Protocol. <details><summary>More about</summary>

  It allows AI assistants to programmatically access and manage structured configuration files that define agent behavior and project context.

  _Another layer of abstraction between you and your config files, because clearly, writing a simple markdown file wasn't enough of a ritual._

  `mcp` `mcp-server` `prompt-management` `ai-config` `agent-blueprints`
  </details>
- **[Omni-Rewriter](https://github.com/waynejin0918/omni-rewriter)** Omni-Rewriter 89 Python Apache-2.0 2026-08 Prompt expansion for image and video generation.
- **[soulware-studio/promethic-mcp](https://github.com/soulware-studio/promethic-mcp)** soulware-studio/promethic-mcp ☁️ - Prompt library with versioned prompts and per-version model settings for text, image and JSON; tracks edits and proposes refined versions.
- **[16x Prompt](https://prompt.16x.engineer)** 16x Prompt is a desktop application that helps developers compose and manage prompts with source code context for AI coding tasks. <details><summary>More about</summary>

  It streamlines prompt engineering for coding by organizing context, tracking tokens, and integrating with multiple LLM APIs, reducing manual copy-paste workflows.

  _Finally, a tool that lets you spend more time crafting the perfect prompt than actually writing code._

  `prompt-engineering` `context-management` `ai-coding` `desktop-app` `multi-llm`
  </details>
- **[Izlo](https://getizlo.com)** Izlo is a prompt management platform that provides version control, collaboration, and testing workflows for team-based AI prompts. <details><summary>More about</summary>

  It enables developers to manage prompts as structured assets with versioning and APIs, rather than letting them remain hardcoded or scattered across documentation.

  _Finally, a way to version control the chaotic string literals that are currently holding your production application together._

  `prompt-management` `prompt-ops` `collaboration` `version-control` `testing`
  </details>
- **[Prompteams](https://prompteams.com)** Prompteams is a prompt management system with versioning, testing, and auto-generated APIs for team collaboration on LLM prompts. <details><summary>More about</summary>

  It gives developers a Git-like workflow for prompt iteration, testing, and deployment, reducing friction in LLM integration.

  _Finally, a way to treat your prompts like code — until you realize you’re now versioning hallucinations._

  `prompt-management` `llm-ops` `versioning`
  </details>
- **[PromptHub](https://prompthub.us)** PromptHub is a prompt management platform for teams that enables versioning, testing, and deployment of prompts with Git-based workflows and AI-assisted creation tools. <details><summary>More about</summary>

  It gives developers a structured way to manage prompts as version-controlled artifacts, reducing drift and improving reproducibility in AI-integrated workflows.

  _Another tool promising to tame the chaos of prompt sprawl, while quietly adding yet another login tab to your overflowing SaaS dashboard._

  `prompt-management` `versioning` `collaboration` `ai-tooling`
  </details>
- **[PromptLayer](https://promptlayer.com)** A platform for managing prompt versions, running LLM evaluations, and monitoring agent observability in production. <details><summary>More about</summary>

  It decouples prompt iteration from application deployment, allowing domain experts to update model behavior without engineer intervention.

  _It turns your mission-critical logic into a visual CMS, making 'it worked in staging' a much more complicated question._

  `prompt-management` `llmops` `observability` `evals` `tracing`
  </details>