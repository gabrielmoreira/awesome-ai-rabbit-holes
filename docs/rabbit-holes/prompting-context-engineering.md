# Prompt & Context Engineering

Memory, retrieval, compression, and prompt-shaping systems for getting the right context in front of a model.

## Tools & Resources

- **[RAGFlow](https://github.com/infiniflow/ragflow)** `⭐ 83.8k` `updated ≤30d` RAGFlow is an open-source Retrieval-Augmented Generation (RAG) engine that combines agent capabilities with a context engine to help developers build knowledge-grounded AI systems. <details><summary>More about</summary>

  It provides developers with a self-hostable platform to ingest complex data, manage retrieval workflows, and orchestrate agentic RAG pipelines for production-ready AI applications.

  _Just when you thought 'building a chatbot' was trivial, here comes a full platform reminding you that your real job is now maintaining a dedicated context engine and an ingestion pipeline for documents you haven't read._

  `rag` `context-engineering` `self-hosted` `agentic`
  </details>

- **[Mem0](https://github.com/mem0ai/mem0)** `⭐ 60.2k` `updated ≤30d` Mem0 is a memory layer for AI agents and assistants that provides multi-level memory retention, entity linking, and multi-signal retrieval to personalize and persist context across sessions. <details><summary>More about</summary>

  It gives developers a structured way to add long-term memory, user preferences, and session state to AI agents without building custom retrieval and storage infrastructure.

  _Another excuse to pretend your stateless prompt-completion loop is secretly a coherent, remembering coworker rather than a very polite amnesia patient._

  `memory` `agents` `retrieval` `llm-infra` `sdk`
  </details>

- **[Context 7](https://github.com/upstash/context7)** `⭐ 55.1k` `updated ≤90d` Context7 Platform provides up-to-date code documentation and examples for LLMs and AI code editors via CLI skills or MCP server integration. <details><summary>More about</summary>

  It reduces hallucinated or outdated code generation by fetching real-time, version-specific documentation directly into the developer's AI coding workflow.

  _Another tool to remind your AI assistant that it still can't remember last week's API changes, so you spend more time managing context than coding._

  `context-engineering` `mcp` `ai-dev-extensions`
  </details>

- **[codebase-memory-mcp](https://github.com/deusdata/codebase-memory-mcp)** `⭐ 28.7k` `updated ≤30d` A high-performance code intelligence engine that indexes repositories into persistent knowledge graphs using Tree-Sitter AST analysis. <details><summary>More about</summary>

  It drastically reduces token consumption and latency for AI agents by replacing linear file-by-file searches with millisecond-level structural queries.

  _The relief of 120x fewer tokens is almost eclipsed by the anxiety of seeing the Linux kernel indexed in three minutes on your local machine._

  `mcp` `tree-sitter` `knowledge-graph` `code-analysis` `local-ai`
  </details>

- **[cognee](https://github.com/topoteretes/cognee)** `⭐ 17.1k` `updated ≤90d` Cognee is an open-source memory control plane that combines embeddings, knowledge graphs, and cognitive science approaches to give AI agents persistent, searchable memory of data, decisions, and workflows. <details><summary>More about</summary>

  It provides developers with unified ingestion and retrieval infrastructure so agents can maintain context, learn from feedback, and share knowledge across sessions instead of resetting every run.

  _Yet another chance to outsource your own memory to a graph database, because clearly the problem wasn't too many moving parts in your agent stack._

  `memory` `rag` `knowledge-graph` `context-engineering` `agent-infra`
  </details>

- **[memvid](https://github.com/memvid/memvid)** `⭐ 15.7k` `updated ≤90d` Memvid is a serverless, single-file memory system that packages embeddings, search structures, and metadata into a portable file to provide AI agents with long-term memory and instant retrieval. <details><summary>More about</summary>

  It replaces complex RAG pipelines and server-based vector databases with a portable, offline-first memory layer that developers can integrate via SDKs in Python and Rust.

  _We have successfully encoded the existential dread of context window limits into a video-inspired file format, proving that no matter the medium, we will still find ways to bloat the context until retrieval latency wins again._

  `memory` `rag` `context-engineering` `offline-first` `vector-search`
  </details>

- **[Memori](https://github.com/memorilabs/memori)** `⭐ 15.5k` `updated ≤30d` Memori is an LLM-agnostic memory infrastructure layer that persists agent execution history and conversation state into structured, queryable memory for production systems. <details><summary>More about</summary>

  It offers Python and TypeScript SDKs to automatically capture and recall agent state, reducing prompt size by ~95% compared to full-context prompting while maintaining high benchmark accuracy.

  _Because nothing says 'production-ready agent' like adding a dedicated memory layer to remember what your stateless LLM forgot it was doing five minutes ago._

  `memory` `agent-infrastructure` `context-management` `sdk`
  </details>

- **[gitingest](https://github.com/coderamp-labs/gitingest)** `⭐ 15k` `updated ≤30d` A tool that converts Git repositories or local directories into prompt-ready text digests with file structure, size stats, and token counts. <details><summary>More about</summary>

  It gives developers a quick way to package entire codebases into a format that LLMs can actually ingest without manual copying or context overflow.

  _We have officially reached the point where preparing your code for the AI takes almost as much tooling as writing the code itself._

  `context-engineering` `cli` `llm-ingest` `developer-tool`
  </details>

- **[QAnything](https://github.com/netease-youdao/qanything)** `⭐ 14k` `updated >1y` QAnything is a local, self-hosted knowledge base question-answering system that ingests files and web links to provide offline document retrieval and Q&A. <details><summary>More about</summary>

  Developers can deploy it locally to index technical documentation, codebases, and internal knowledge without sending data to external LLM APIs.

  _Finally, a way to ask your 400-page PDF specifications questions, while quietly wondering if the real RAG was the context tokens we burned along the way._

  `rag` `local-ai` `knowledge-base` `document-qa`
  </details>

- **[skill_seekers](https://github.com/yusufkaraaslan/skill_seekers)** `⭐ 13.5k` `updated ≤90d` Skill Seekers converts documentation, GitHub repos, PDFs, and other sources into structured knowledge assets for AI skills, RAG, and coding assistants. <details><summary>More about</summary>

  It reduces the manual effort of turning diverse knowledge sources into usable AI context, accelerating skill and RAG pipeline creation.

  _Another tool promising to eliminate context-switching by creating yet another place to manage context._

  `context-engineering` `ai-skills` `mcp`
  </details>

- **[rowboat](https://github.com/rowboatlabs/rowboat)** `⭐ 13.3k` `updated ≤90d` An open-source, local-first AI coworker that builds a long-lived knowledge graph from emails and meeting notes to draft documents, prep meetings, and generate artifacts like PDF slides. <details><summary>More about</summary>

  It offers developers a transparent, Markdown-based memory system that compounds context locally, reducing the need to repeatedly re-explain project history to AI tools.

  _Finally, a local AI coworker that builds a sprawling knowledge graph of your meetings, ensuring you can never truly escape the context of that roadmap sync from three months ago._

  `knowledge-graph` `local-first` `memory` `multi-agent` `productivity`
  </details>

- **[Hindsight](https://github.com/vectorize-io/hindsight)** `⭐ 13.1k` `updated ≤90d` Hindsight is an agent memory system that enables AI agents to learn over time rather than just recall conversation history. <details><summary>More about</summary>

  It provides developers with a production-tested memory system that improves agent performance on long-term memory tasks through learning, not just retrieval.

  _Another memory system promising to fix AI forgetfulness, adding yet another layer to the growing tower of agent infrastructure we pretend we understand._

  `agent-memory` `learning` `llm-wrapper` `sdk`
  </details>

- **[LangGPT](https://github.com/langgptai/langgpt)** `⭐ 12.3k` `updated ≤30d` LangGPT is a structured prompt design framework and template system for creating reusable, modular prompts for large language models like GPT-4 and Claude. <details><summary>More about</summary>

  It gives developers a systematic, code-like methodology for managing prompt complexity, moving beyond trial-and-error to versionable, modular prompt architectures.

  _We have successfully abstracted software engineering into prompt engineering, creating a 'programming language' for the very thing we hoped would replace programming languages._

  `prompt-engineering` `structured-prompts` `meta-prompting` `templates`
  </details>

- **[Airweave](https://github.com/airweave-ai/airweave)** `⭐ 6.5k` `updated ≤90d` Open-source context retrieval layer that syncs data from 50+ sources into a unified, LLM-friendly search interface for AI agents and RAG systems. <details><summary>More about</summary>

  It spares developers from rebuilding fragile data-ingestion, indexing, and auth pipelines for every agent by offering shared retrieval infrastructure with native SDK and MCP access.

  _Because pointing agents directly at your database was too straightforward, you now get to maintain a separate retrieval service with fifty OAuth connectors and its own Docker Compose file._

  `context-retrieval` `rag-infrastructure` `data-connectors` `retrieval-api` `agent-infrastructure`
  </details>

- **[Pezzo 🕹️](https://github.com/pezzolabs/pezzo)** `⭐ 3.2k` `updated ≤180d` Pezzo is an open-source LLMOps platform for managing prompts, monitoring AI operations, and tracking costs across Node.js, Python, and LangChain clients. <details><summary>More about</summary>

  It gives developers a centralized control plane to version prompts, observe LLM calls, and cut costs without wiring custom instrumentation into every app.

  _Yet another platform promising to solve the chaos of your prompt strings, as if the real problem was version control and not the fact that your carefully tuned system message breaks on the next model update._

  `llmops` `prompt-management` `observability` `open-source` `platform`
  </details>

- **[reme](https://github.com/agentscope-ai/reme)** `⭐ 3.2k` `updated ≤30d` ReMe is a Python memory management framework for AI agents that provides file-based and vector-based systems to persist context, compress long conversations, and recall relevant information across sessions. <details><summary>More about</summary>

  It solves the stateless-session and context-window limits that break long-running coding assistants by giving agents persistent, searchable memory.

  _Because nothing says 'the future of autonomous engineering' like bolting an external hippocampus onto your agent so it can pretend it remembers what you asked three prompts ago._

  `memory` `agents` `context` `python` `rag`
  </details>

- **[cocoindex-code](https://github.com/cocoindex-io/cocoindex-code)** `⭐ 2.5k` `updated ≤30d` A lightweight, AST-based semantic code search CLI that indexes local codebases to reduce token usage by approximately 70% when used with coding agents. <details><summary>More about</summary>

  It integrates with Claude, Codex, and Cursor via CLI, Skill, or MCP to deliver relevant code context without blowing through context windows or API budgets.

  _Yet another clever tool to solve the fundamental problem of feeding an entire codebase to a model that still can't remember what it did three prompts ago._

  `ast` `code-search` `token-optimization` `mcp` `context-engineering`
  </details>

- **[Vearch](https://github.com/vearch/vearch)** `⭐ 2.3k` `updated ≤90d` Distributed vector database for efficient similarity search and retrieval in AI-native applications, serving as a scalable memory backend for RAG systems. <details><summary>More about</summary>

  Developers building retrieval-augmented generation need low-latency hybrid search over millions of embeddings without manually orchestrating storage, replication, and metadata filtering.

  _Now you need a Kubernetes cluster just to remember what your code does._

  `vector-database` `rag` `embeddings` `memory-backend` `cloud-native`
  </details>

- **[mcp-memory-service](https://github.com/doobidoo/mcp-memory-service)** `⭐ 1.9k` `updated ≤90d` An open-source, self-hosted memory backend for AI agents that provides persistent storage via a REST API, knowledge graph, and MCP server with sub-5ms retrieval. <details><summary>More about</summary>

  It allows agents built with LangGraph, CrewAI, AutoGen, or Claude to share causal knowledge graphs and long-term memory without relying on cloud-hosted vector databases.

  _Because the only thing better than debugging a multi-agent pipeline is debugging the shared persistent memory service that the agents are now blaming for their amnesia._

  `memory` `mcp` `self-hosted` `knowledge-graph` `agent-infra`
  </details>

- **[SolidGPT](https://github.com/ai-citizen/solidgpt)** `⭐ 1.8k` `updated >1y` SolidGPT is a developer-facing AI search assistant that indexes local codebases and Notion workspace documents for semantic querying within a VSCode extension. <details><summary>More about</summary>

  It lets developers query their existing code and project documentation in natural language, reducing context-switching between the editor and external wikis.

  _Another valiant attempt to solve the modern developer's dilemma of having 500 files onboarded but still spending three hours finding where the actual logic lives._

  `semantic-search` `vscode-extension` `notion-integration` `codebase-indexing` `langchain`
  </details>

- **[Vald](https://github.com/vdaas/vald)** `⭐ 1.7k` `updated ≤90d` A highly scalable distributed vector search engine for approximate nearest neighbor (ANN) search on high-dimensional dense vectors. <details><summary>More about</summary>

  Provides the retrieval backbone for RAG systems and similarity search at billion-scale, deployed as cloud-native Kubernetes infrastructure.

  _Because nothing says 'AI-ready' like deploying a bespoke distributed vector database just to find the three most relevant chunks of documentation._

  `vector-search` `retrieval` `kubernetes` `ann` `infrastructure`
  </details>

- **[CAG](https://github.com/hhhuang/cag)** `⭐ 1.5k` `updated >1y` Cache-Augmented Generation (CAG) is a research implementation and experiment framework that preloads knowledge into an LLM's KV-cache to eliminate real-time retrieval latency associated with RAG. <details><summary>More about</summary>

  It offers developers a simplified, retrieval-free alternative to RAG for scenarios where the knowledge base fits within an extended context window, reducing system complexity and inference delay.

  _Just when you finished debugging your vector database, the community decides the best context is the one you preheated in the toaster oven._

  `cag` `llm` `context-engineering` `inference`
  </details>

- **[Repowise](https://github.com/repowise-dev/repowise)** `⭐ 1.4k` `updated ≤90d` An MCP-compatible CLI tool that indexes codebases into dependency graphs, git analytics, auto-generated docs, and architectural decisions to reduce token usage for AI agents. <details><summary>More about</summary>

  It allows coding agents like Claude Code to answer 'why' questions about architecture and history without reading entire files, cutting costs and context window bloat.

  _We have successfully optimized the part of the workflow where the AI reads our code, now we just need a tool to optimize the part where we pretend to understand why we wrote it that way three years ago._

  `mcp` `context-engineering` `token-efficiency` `codebase-intelligence` `git-analytics`
  </details>

- **[tradememory-protocol](https://github.com/mnemox-ai/tradememory-protocol)** `⭐ 1.4k` `updated ≤90d` A persistent memory layer and MCP server that records trading decisions, outcomes, and audit trails for AI agents with SHA-256 tamper detection and outcome-weighted recall. <details><summary>More about</summary>

  It gives trading agents a memory system that survives context windows and produces regulator-ready audit trails across any market, broker, or AI platform.

  _Your AI trader still can't beat the market, but at least it can now perfectly document every dollar it forgot it lost._

  `mcp` `memory` `trading` `audit-trail` `context-engineering`
  </details>

- **[token-savior](https://github.com/mibayy/token-savior)** `⭐ 1.1k` `updated ≤30d` An MCP server that optimizes AI coding agent performance through Bash output compaction, structural code navigation, and persistent memory. <details><summary>More about</summary>

  It significantly reduces token consumption and latency in agentic workflows while improving task success rates by cleaning up the context sent to the model.

  _Nothing says 'I've lost control of my context window' like needing a specialized savior just to stop Claude from drowning in its own bash history._

  `mcp` `token-optimization` `context-management` `coding-agents` `bash-compaction`
  </details>

- **[Omnigraph](https://github.com/modernrelay/omnigraph)** `⭐ 713` `updated ≤30d` A lakehouse-native graph engine designed for agentic memory and multimodal context assembly. <details><summary>More about</summary>

  It provides a versioned, branchable data layer that allows fleets of agents to maintain durable, multimodal memory and shared knowledge graphs.

  _Now your agents can suffer from git-style merge conflicts in their collective memory._

  `graph-database` `agentic-memory` `context-retrieval` `lakehouse` `multi-agent`
  </details>

- **[Contexto](https://github.com/ekailabs/contexto)** `⭐ 629` `updated ≤30d` A context engine that stores full episodic memory for long-running AI agents and retrieves forgotten constraints instead of letting them be compacted away. <details><summary>More about</summary>

  It lets developers keep agents reliable across long sessions without prompt hacks, by recovering original instructions and decisions that default context-window compaction would otherwise summarize into oblivion.

  _It is oddly dystopian that we now pay for external episodic memory so our agents can remember not to delete emails after thirty turns._

  `context-engine` `memory` `retrieval` `openclaw` `agents`
  </details>

- **[Entroly](https://github.com/juyterman1000/entroly)** `⭐ 417` `updated ≤30d` A local proxy and context control plane that compresses context, optimizes provider cache hits, and verifies LLM outputs to reduce AI coding costs. <details><summary>More about</summary>

  It allows developers to slash API bills by 70-95% while improving context relevance and adding a layer of hallucination detection to existing coding assistants.

  _Nothing says modern development like spending an hour fine-tuning a context compression algorithm just to save enough money for a single latte._

  `context-compression` `llm-proxy` `hallucination-detection` `token-optimization` `rust`
  </details>

- **[SwarmVault](https://github.com/swarmclawai/swarmvault)** `⭐ 396` `updated ≤90d` A local-first CLI tool that compiles docs, code, and notes into a persistent knowledge graph and RAG knowledge base, designed to serve as durable memory for coding agents like Claude Code and Codex. <details><summary>More about</summary>

  It gives developers a way to build a persistent, token-bounded context layer on disk that agents can query, reducing the friction of re-explaining codebases and domain knowledge across sessions.

  _Just what the modern developer needs: another offline wiki to maintain so their AI can finally remember why that one hack was introduced six months ago._

  `agent-memory` `rag` `knowledge-graph` `local-first` `context`
  </details>

- **[onecompression](https://github.com/fujitsuresearch/onecompression)** `⭐ 395` `updated ≤30d` A Python package for the automated compression and quantization of Large Language Models. <details><summary>More about</summary>

  It simplifies the complex process of shrinking LLMs to fit on available VRAM by automating bit-width selection and error correction.

  _We've reached the point where the primary developer workflow is just playing Tetris with VRAM to see if a model will actually boot._

  `quantization` `llm-ops` `vram-optimization` `model-compression`
  </details>

- **[GPT Runner](https://github.com/nicepkg/gpt-runner)** `⭐ 381` `updated >1y` A local CLI, web UI, and VSCode extension for managing AI presets and chatting with selected code files using OpenAI or Anthropic models. <details><summary>More about</summary>

  It lets teams version-control reusable AI prompt presets as .gpt.md files and avoids the manual copy-paste workflow when discussing code with LLMs.

  _We have finally solved the ancient engineering problem of copying code into a browser tab and pasting it back, provided you also maintain yet another config file format._

  `prompt-presets` `vscode-extension` `cli` `context-management`
  </details>

- **[iai-mcp](https://github.com/codeabra/iai-mcp)** `⭐ 333` `updated ≤30d` A local, MCP-compatible memory system that provides long-term context and verbatim recall for AI coding assistants. <details><summary>More about</summary>

  It automates the injection of relevant past session context into new conversations, eliminating the need to manually remind assistants of project details.

  _You can no longer blame your assistant's short-term memory loss for the fact that it keeps hallucinating your variable names._

  `mcp` `memory` `local-ai` `context-engineering` `claude-code`
  </details>

- **[iai-personal-memory-engine](https://github.com/codeabra/iai-personal-memory-engine)** `⭐ 333` `updated ≤30d` A local memory server that provides long-term, verbatim conversation recall for Claude and other MCP-compatible assistants. <details><summary>More about</summary>

  It removes the need to manually remind assistants of previous context by automatically capturing and injecting relevant historical conversation slices into new sessions.

  _The relief of not having to say 'remember that thing from three days ago' is slightly offset by the anxiety of a local database recording every single prompt you've ever sent._

  `mcp` `long-term-memory` `local-ai` `claude-code` `retrieval`
  </details>

- **[DataChad](https://github.com/gustavz/datachad)** `⭐ 321` `updated >1y` A Streamlit app that lets users upload files or URLs to create knowledge bases and ask questions using LangChain, vector databases, and LLMs. <details><summary>More about</summary>

  It gives developers a self-contained, local-first interface for building and querying RAG pipelines without wiring together loaders, embeddings, and vector stores by hand.

  _Yet another boutique RAG wrapper that proves the hardest part of AI development is admitting you probably didn't need a custom vector store to answer questions about your PDFs._

  `rag` `langchain` `streamlit` `knowledge-base` `local-ai`
  </details>

- **[second-brain-agent](https://github.com/flepied/second-brain-agent)** `⭐ 306` `updated ≤180d` A personal knowledge management agent that automatically indexes markdown files, PDFs, videos, and web pages, exposing them via a built-in MCP server for retrieval into LLM workflows. <details><summary>More about</summary>

  It gives developers a reusable context-retrieval layer that connects local notes and docs directly into coding assistants via MCP.

  _Because what your second brain really needed was one more background service and a fresh excuse to reorganize your markdown folders instead of shipping code._

  `second-brain` `pkm` `mcp` `retrieval` `langchain`
  </details>

- **[llm-context](https://github.com/cyberchitta/llm-context.py)** `⭐ 305` `updated ≤30d` A CLI tool and MCP server that uses rule-based YAML+Markdown configurations to select, filter, and format relevant project files for sharing with LLMs via clipboard or context protocol. <details><summary>More about</summary>

  It replaces the manual, token-budget guessing game of copying files into chat with composable rules that automate context selection for tasks like code review and documentation.

  _We have officially reached the point where we need a dedicated rule engine just to manage what we are willing to show the AI, because apparently our repos are now too large for the models but too precious for us to summarize ourselves._

  `context-management` `mcp` `cli` `rules`
  </details>

- **[smart-tree](https://github.com/8b-is/smart-tree)** `⭐ 258` `updated ≤90d` A blazingly fast, Rust-based directory visualization and MCP server providing AI-friendly context compression, semantic search, and persistent memory tools for coding assistants. <details><summary>More about</summary>

  It drastically reduces token usage for AI assistants by compressing codebase context and offering 30+ MCP tools for filesystem understanding and memory anchoring.

  _Now your file tree isn't just a list of directories, it's a 'cyber-botanical dashboard' with 'MEM8 quantum compression' and a philosophical stance on your filesystem._

  `mcp` `context-compression` `cli` `rust` `memory`
  </details>

- **[sage](https://github.com/l33tdawg/sage)** `⭐ 236` `updated ≤30d` SAGE is a persistent, BFT consensus-validated memory infrastructure for AI agents, exposing memory via MCP and REST for use across sessions and multi-agent networks. <details><summary>More about</summary>

  It gives coding agents durable, scored, and consensus-validated memory that persists across conversations and agents instead of relying on ephemeral context or bolted-on vector DBs.

  _Finally, your agent can forget things with cryptographic confidence and Byzantine fault tolerance, ensuring even its memory decay is distributed, validated, and impossible to blame on you._

  `agent-memory` `mcp` `distributed-systems` `context-engineering` `bft`
  </details>

- **[shodh-memory](https://github.com/varun29ankus/shodh-memory)** `⭐ 210` `updated ≤90d` Shodh-Memory is a persistent cognitive memory system for AI agents that learns from usage and forgets irrelevant data via algorithmic intelligence, running fully offline as a single binary. <details><summary>More about</summary>

  It gives developers a lightweight, private memory layer for AI agents that improves with use without API calls or external dependencies.

  _Finally, a memory system that doesn’t require you to trade latency, cost, or offline access for the illusion of intelligence._

  `memory` `mcp` `offline` `agentic-ai` `context-engineering`
  </details>

- **[Mengram](https://github.com/alibaizhanov/mengram)** `⭐ 183` `updated ≤30d` A memory layer for AI agents providing semantic, episodic, and procedural memory with Python and JS SDKs, including automatic Claude Code hooks and integrations for LangChain, CrewAI, and MCP. <details><summary>More about</summary>

  It gives agents a structured way to learn from past failures and recall context across sessions, aiming to solve the amnesia problem in long-running developer workflows.

  _We have finally built a system that remembers every deployment mistake you made last month, just in case you wanted to feel bad about them again._

  `memory-layer` `agent-infra` `context` `sdk`
  </details>

- **[Jean Memory](https://github.com/jean-technologies/jean-memory)** `⭐ 169` `updated ≤1y` Jean Memory is a developer-facing memory infrastructure product that provides SDKs and an orchestration layer for adding persistent, context-aware memory to AI applications and agents. <details><summary>More about</summary>

  It offers drop-in React, Python, and Node.js SDKs that handle context retrieval and memory storage, removing the need to build custom RAG or memory pipelines from scratch.

  _Another layer of abstraction promising that your agent will finally remember who you are, provided you’re comfortable wiring yet another memory service into your already unstable stack._

  `memory` `context` `sdk` `self-hosted` `rag`
  </details>

- **[in-memoria](https://github.com/pi22by7/in-memoria)** `⭐ 166` `updated ≤1y` An MCP server that indexes codebases to provide persistent memory, pattern recognition, and semantic search across sessions for AI coding assistants. <details><summary>More about</summary>

  It eliminates the repetitive context-rebuilding loop by giving assistants like Claude and Copilot instant access to learned architecture, conventions, and file routing.

  _We have finally built a tool to remember that we are tired of explaining our architectural choices to a bot that forgets them every time we close the window._

  `mcp` `persistent-memory` `context` `codebase-intelligence`
  </details>

- **[ai-distiller](https://github.com/janreges/ai-distiller)** `⭐ 161` `updated ≤90d` AI Distiller is an open-source CLI tool that compresses large codebases by extracting only public APIs and structure, reducing code volume by 90–98% to fit into AI context windows. <details><summary>More about</summary>

  It allows developers to feed essential project structure to AI coding assistants without hitting context limits or wasting tokens on implementation details.

  _We have finally invented a tool to solve the problem of AI tools being too confused by the code we wrote with other AI tools._

  `context-compression` `cli` `mcp` `codebase-analysis` `token-optimization`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[context-keeper](https://github.com/redleaves/context-keeper)** `⭐ 145` `updated ≤180d` Context-Keeper is a Go-based memory and context management system that uses RAG, vector search, and knowledge graphs to persist and retrieve project history for LLM-assisted development workflows. <details><summary>More about</summary>

  It aims to solve the memory-loss problem in AI coding assistants by providing a two-stage retrieval pipeline that surfaces historical decisions, bugs, and architecture context across sessions.

  _Another layer of infrastructure promising that your AI will finally remember why you chose microservices, right before you spend three days debugging the memory layer itself._

  `memory` `rag` `context-retrieval` `mcp-compatible` `go`
  </details>

- **[omega-memory](https://github.com/omega-memory/omega-memory)** `⭐ 120` `updated ≤90d` A local-first persistent memory system that provides cross-model semantic memory, knowledge graphs, and MCP server integration for AI coding agents like Claude, Cursor, and Windsurf. <details><summary>More about</summary>

  It eliminates context re-explanation across sessions by giving agents a local, provider-agnostic memory layer with semantic search and knowledge graph traversal.

  _We have finally solved the problem of AI forgetting what we did five minutes ago, provided we install a local-first brain that promises to remember everything except why we started this project in the first place._

  `memory` `mcp` `local-first` `context-engineering` `multi-agent`
  </details>

- **[ckb](https://github.com/nyxcore-systems/ckb)** `⭐ 94` `updated ≤90d` CKB is a code intelligence backend that provides symbol navigation, impact analysis, and architecture mapping via CLI, HTTP API, and MCP server for AI assistants. <details><summary>More about</summary>

  It reduces context waste and improves AI-assisted code changes by giving assistants precise, structured knowledge of a codebase instead of relying on grep and guesswork.

  _Finally, an AI coding assistant that won’t confidently refactor a dead function because it finally has a map of the codebase it’s pretending to understand._

  `code-intelligence` `mcp` `cli` `impact-analysis`
  </details>

- **[Harness Starter Kit](https://github.com/harnessworks/harness-starter-kit)** `⭐ 90` `updated ≤30d` A prompt-first starter kit for turning repeated AI coding agent mistakes into durable repository instructions and evaluation checks. <details><summary>More about</summary>

  It shifts the effort from endless prompt tweaking to 'harnessing' the repository itself to provide better operational boundaries and feedback loops for agents.

  _We've reached the era where we no longer write code, but instead engineer the environment that manages the AI that writes the code that we then spend an hour debugging._

  `coding-agents` `prompt-engineering` `agent-ops` `repository-harnessing`
  </details>

- **[claude-soul](https://github.com/domdemetz/claude-soul)** `⭐ 84` `updated ≤90d` A self-correcting memory and behavioral tracking engine for Claude Code that provides cross-session persistence via local SQLite and semantic search. <details><summary>More about</summary>

  It solves the 'amnesia' problem in terminal-based coding agents by allowing them to remember past decisions, user corrections, and project context across sessions.

  _Nothing says 'cutting edge' like attempting to cultivate a stable personality for a CLI tool that might be superseded by a new model release tomorrow._

  `claude-code` `memory` `mcp` `local-ai` `context-engineering`
  </details>

- **[akb](https://github.com/dnotitia/akb)** `⭐ 69` `updated ≤30d` A Git-backed knowledge base that provides agents with structured documents, tables, and hybrid search via the Model Context Protocol. <details><summary>More about</summary>

  It offers a version-controlled, searchable 'organizational memory' that allows agents to access long-term context instead of relying on ephemeral chat history.

  _Because we have officially reached the stage where we need version-controlled repositories just to manage the documentation our agents are generating for themselves._

  `mcp` `rag` `knowledge-graph` `memory`
  </details>

- **[memcord](https://github.com/ukkit/memcord)** `⭐ 67` `updated ≤90d` Privacy-first, self-hosted MCP server that persists AI chat history into searchable, summarized memory slots for Claude and other MCP-compatible assistants. <details><summary>More about</summary>

  Lets developers maintain long-term context across AI conversations without shipping chat history to cloud providers, using local storage and intelligent summarization.

  _Because we now need a separate SQLite database with 28 RESTful tools just to remember what we told the agent three prompts ago._

  `memory` `mcp` `local-ai` `privacy` `context-retrieval`
  </details>

- **[aurasdk](https://github.com/teolex2020/aurasdk)** `⭐ 66` `updated ≤180d` AuraSDK is a local, pure-Rust cognitive memory runtime that adds durable, sub-millisecond recall, governed correction, and self-adaptation to frozen AI models without cloud training or fine-tuning. <details><summary>More about</summary>

  It gives developers a lightweight, offline-first way to add structured, inspectable memory and bounded recall reranking to any agent or model runtime with a simple Python SDK.

  _Because your agent still can’t ship a clean PR, but now it will remember every time you told it to deploy to staging first._

  `memory` `local-ai` `rust` `sdk` `offline`
  </details>

- **[cortex](https://github.com/cdeust/cortex)** `⭐ 66` `updated ≤30d` A persistent memory engine for Claude Code that uses computational neuroscience principles and PostgreSQL with pgvector to remember code context, decisions, and architecture across sessions. <details><summary>More about</summary>

  It solves the core pain of Claude Code forgetting past sessions by reconstructing relevant context through 26 biological memory mechanisms and a knowledge graph of code symbols.

  _We are now importing 41 neuroscience papers and a Hopfield network into PostgreSQL just so our AI assistant can remember we chose event sourcing three days ago._

  `claude-code` `memory` `mcp` `context-engineering` `neuroscience`
  </details>

- **[agentkits-memory](https://github.com/aitytech/agentkits-memory)** `⭐ 65` `updated ≤180d` A persistent, local-first memory system that exposes session context, decisions, and code patterns to AI coding assistants via an MCP server. <details><summary>More about</summary>

  It lets developers carry learned context, error solutions, and code patterns across sessions in Claude Code, Cursor, Copilot, Windsurf, and Cline without cloud dependencies.

  _We have successfully built infrastructure to remember why we did things, so we can now recreate the same architectural mistakes with perfect historical consistency._

  `memory` `mcp` `context` `local-first` `sqlite`
  </details>

- **[pi-mem](https://github.com/jo-inc/pi-mem)** `⭐ 65` `updated ≤90d` A Markdown-based persistent memory system that provides long-term facts, daily logs, and semantic search for AI coding agents. <details><summary>More about</summary>

  It gives agents a durable, searchable memory layer to prevent context loss and maintain continuity across different coding sessions.

  _Because nothing says 'high-velocity developer' like managing a markdown-based diary for your autonomous coding agent._

  `memory` `context-management` `markdown` `coding-agents`
  </details>

- **[myco](https://github.com/battam1111/myco)** `⭐ 64` `updated ≤30d` Myco is a living cognitive substrate and MCP server that converts raw notes, code, and documentation into a self-maintaining filesystem graph with 20 agent-driven verbs for ingestion, digestion, and evolution. <details><summary>More about</summary>

  It lets agents maintain their own long-term memory and project context as editable markdown and YAML, avoiding framework migrations and zero-state conversation restarts.

  _You now have a self-evolving mycelium graph that ingests everything you write and, true to its design, can rewrite its own rules when it decides your workflow is no longer worthy of its current shape._

  `agent-memory` `mcp` `context-engineering` `knowledge-graph`
  </details>

- **[Memory-Plus](https://github.com/yuchen20/memory-plus)** `⭐ 59` `updated >1y` Memory-Plus is a local RAG memory store that enables MCP agents to record, retrieve, update, and visualize persistent session memories. <details><summary>More about</summary>

  It gives developers a simple way to make AI coding assistants retain context across sessions, reducing repetitive re-explanation.

  _Another tool promising your AI will finally remember you—until it forgets where it saved the memory._

  `memory` `mcp` `rag` `context`
  </details>

- **[decisionnode](https://github.com/decisionnode/decisionnode)** `⭐ 57` `updated ≤90d` A CLI and local MCP server that provides a shared, semantically queryable structured memory store for architectural decisions across Claude Code, Cursor, Windsurf, and other MCP clients. <details><summary>More about</summary>

  It lets AI coding assistants retrieve relevant past architectural decisions on demand via semantic search instead of bloating system prompts with static rules files.

  _Because apparently we've solved context windows by building a vector database for the meetings we wish we hadn't skipped._

  `mcp` `memory` `semantic-search` `cli` `local-first`
  </details>

- **[depwire](https://github.com/depwire/depwire)** `⭐ 54` `updated ≤30d` Depwire builds a deterministic, tree-sitter-powered dependency graph across 12+ languages and exposes it via 17 MCP tools so coding assistants can simulate changes and assess blast radius before editing code. <details><summary>More about</summary>

  It replaces probabilistic RAG guesses with compiler-grade symbol tracking, letting AI agents know exactly what will break before they delete that one innocent-looking utility file.

  _We have finally built infrastructure to stop the AI from confidently deleting the one function that silently powers 30 downstream files, though we still haven't solved the part where we let it delete things in the first place._

  `mcp` `context-engineering` `dependency-graph` `cli` `tree-sitter`
  </details>

- **[Cursor Watchful Headers](https://github.com/johnbenac/cursor-watchful-headers)** `⭐ 51` `updated >1y` A Python file watcher that automatically injects and maintains consistent headers across project files while dynamically updating a project tree structure inside .cursorrules to improve LLM context. <details><summary>More about</summary>

  It keeps file headers consistent and prunes noisy directories from the project tree fed into Cursor, helping the AI maintain accurate context in large codebases.

  _We have reached the point where we are building infrastructure to curate the context we feed the AI so it can tell us which infrastructure we forgot to curate._

  `cursor` `cursorrules` `context-management` `file-watcher` `python`
  </details>

- **[agent-toolkit](https://github.com/video-db/agent-toolkit)** `⭐ 48` `updated ≤180d` An open-source agent toolkit that auto-syncs SDK versions, docs, and examples for LLMs and AI agents, with MCP and llms.txt integration for VideoDB. <details><summary>More about</summary>

  It reduces context drift in AI coding workflows by keeping LLM-facing documentation and SDK examples up to date automatically.

  _Another tool to manage the metadata your AI agents need to not hallucinate about your own stack._

  `mcp` `llms-txt` `context-engineering` `video-db`
  </details>

- **[PromptSite](https://github.com/dkuang1980/promptsite)** `⭐ 47` `updated >1y` PromptSite is a lightweight Python package for version controlling, tracking, and experimenting with LLM prompts using local files, Git backends, and a decorator-based integration pattern. <details><summary>More about</summary>

  It gives developers a low-overhead way to version prompts, track LLM runs, and generate synthetic test data without spinning up servers, databases, or external platforms.

  _You now have dedicated version control for your prompts, which means the commit history of your hallucination-NOT-to-hallucination pipeline is finally as rigorous as your actual codebase._

  `prompt-management` `llmops` `python` `experimentation` `versioning`
  </details>

- **[AgentLint](https://github.com/0xmariowu/agentlint)** `⭐ 45` `updated ≤30d` A linter that scores and fixes agent harness configurations, including CLAUDE.md, AGENTS.md, CI, and .gitignore, for coding agents like Claude Code, Codex, and Cursor. <details><summary>More about</summary>

  It applies deterministic checks to the instruction files and repo setup that directly shape agent reliability, addressing the emerging discipline of harness engineering.

  _We have officially entered the era where ESLint handles the code humans write and a separate linter is required to sanitize the context files we feed the robots that overwrite it._

  `linting` `context-engineering` `harness` `cli-tool` `agent-infrastructure`
  </details>

- **[codebase-context](https://github.com/patricksys/codebase-context)** `⭐ 44` `updated ≤90d` A local-first MCP server and CLI that maps a codebase's architecture, patterns, and conventions to give AI agents a preflight context map before they start searching or editing. <details><summary>More about</summary>

  It stops agents from wasting tokens wandering through generic examples by showing them the team's actual patterns, golden files, and architectural layers first.

  _One more layer of infrastructure to ensure your AI agent understands your repo well enough to generate code that still somehow ignores the conventions you just mapped for it._

  `mcp` `context-engineering` `local-first` `semantic-search` `codebase-mapping`
  </details>

- **[roampal-core](https://github.com/roampal-ai/roampal-core)** `⭐ 44` `updated ≤90d` An outcome-based persistent memory MCP server for Claude Code and OpenCode that scores and promotes useful advice while demoting bad advice. <details><summary>More about</summary>

  It gives coding assistants a memory system that learns from outcomes rather than just ingesting context, aiming to improve relevance over time.

  _Now your AI can accumulate a lifelong record of its own bad takes and demote them, provided you're willing to run yet another MCP server to make that happen._

  `mcp` `memory` `claude-code` `context` `persistent-memory`
  </details>

- **[aidex](https://github.com/cscsoftware/aidex)** `⭐ 39` `updated ≤30d` An MCP server that provides AI coding assistants with persistent memory, semantic code search, and live telemetry using a local-first, token-efficient index. <details><summary>More about</summary>

  It lets models search and remember across sessions with far less context than grep, reducing token waste while giving assistants cross-project memory and live app telemetry.

  _We have successfully abstracted the abstraction by adding a memory server to the tool that talks to the model that talks to the IDE that talks to the code we forgot we wrote._

  `mcp` `context-engineering` `code-search` `memory` `token-efficiency`
  </details>

- **[engram](https://github.com/tstockham96/engram)** `⭐ 39` `updated ≤90d` Universal memory layer for AI agents that stores memories in a local SQLite knowledge graph with semantic vector search and LLM-powered consolidation. <details><summary>More about</summary>

  It replaces flat markdown memory files like CLAUDE.md with a structured, cross-project knowledge graph that claims 80% recall accuracy on long-conversation benchmarks while cutting token usage by 44% compared to manual summaries.

  _Because apparently a multi-billion-parameter language model still needs a separate SQLite database and a 'sleep cycle' to remember where you put your utility functions._

  `memory` `knowledge-graph` `mcp` `consolidation` `sqlite`
  </details>

- **[ontomics](https://github.com/etiennechollet/ontomics)** `⭐ 39` `updated ≤90d` A Rust-based MCP server that indexes a codebase's domain concepts, naming conventions, and behavioral similarities to provide instant semantic context for coding agents, reducing tool calls and token usage by roughly 20x. <details><summary>More about</summary>

  It allows coding agents like Claude Code and Codex to answer domain-specific questions with a single tool call instead of crawling a repo for minutes, making large or unfamiliar codebases navigable without burning through context windows.

  _We have successfully abstracted away understanding the code by building a machine that understands the code, so we can now spend our time debugging the machine that understands the code._

  `mcp` `context-engineering` `semantic-search` `rust` `token-optimization`
  </details>

- **[cicada](https://github.com/wende/cicada)** `⭐ 37` `updated ≤180d` CICADA is an MCP server that provides context-compacted code intelligence for AI coding assistants via AST-level indexing and semantic search. <details><summary>More about</summary>

  It reduces token waste and improves assistant accuracy by delivering structured code context instead of raw file dumps.

  _Finally, a tool that admits your AI assistant is context-starved and sells you a diet plan for its meals._

  `mcp` `code-search` `context-engineering`
  </details>

- **[grafema](https://github.com/disentinel/grafema)** `⭐ 36` `updated ≤30d` A graph-based static analysis tool that transforms codebases, infrastructure, and knowledge into a queryable graph for humans and AI. <details><summary>More about</summary>

  It replaces basic file-reading with deep structural analysis (AST parsers and dataflow tracing), allowing AI agents to navigate complex systems via a graph instead of guessing via greedy text search.

  _We have finally reached the stage where we are building complex graph databases just so our AI minions don't have to read the actual source code._

  `static-analysis` `mcp` `ast` `knowledge-graph` `code-navigation`
  </details>

- **[pi-reflect](https://github.com/jo-inc/pi-reflect)** `⭐ 35` `updated ≤90d` A tool for AI agents to iteratively improve their behavioral rules, memory, and personality files by analyzing session transcripts. <details><summary>More about</summary>

  It automates the tedious task of manually updating agent instructions and long-term memory as developer workflows and requirements evolve.

  _There is a specific brand of existential dread in watching an agent's SOUL.md file undergo surgical edits to correct its personality._

  `agent-reflection` `context-engineering` `memory-management` `self-improvement`
  </details>

- **[src-to-kb](https://github.com/vezlo/src-to-kb)** `⭐ 32` `updated ≤1y` Converts source code into a searchable knowledge base with MCP server support for Claude Code and Cursor integration. <details><summary>More about</summary>

  Enables developers to query and navigate their own codebase using natural language via local or external AI-powered search.

  _Finally, a way to feel smart while asking an AI where you put that one utility function three sprints ago._

  `code-search` `knowledge-base` `mcp`
  </details>

- **[mcp-context-provider](https://github.com/doobidoo/mcp-context-provider)** `⭐ 31` `updated ≤90d` A TypeScript MCP server that provides Claude Desktop and Claude Code with persistent context rules and learned, confidence-scored instincts that survive across chat sessions. <details><summary>More about</summary>

  It solves the friction of re-establishing coding preferences, syntax rules, and workflow patterns every time a new Claude session starts.

  _We have successfully built infrastructure to help our AI assistants remember that we prefer single quotes, while we still forget what we were doing five minutes ago._

  `mcp` `context` `memory` `claude` `persistence`
  </details>

- **[code-collator](https://github.com/tawandakembo/code-collator)** `⭐ 27` `updated >1y` A CLI tool that aggregates an entire codebase into a single Markdown file for easy sharing with AI assistants like ChatGPT or Claude. <details><summary>More about</summary>

  It reduces the friction of pasting code into prompts by packaging repos into a format optimized for LLM context windows.

  _We have now automated the tedious human task of Ctrl+A, Ctrl+C, and Ctrl+V, proving that if a workflow is painful enough, someone will write a pip install to do it for you._

  `cli` `context-packing` `codebase-analysis`
  </details>

- **[neotoma](https://github.com/markmhendrickson/neotoma)** `⭐ 27` `updated ≤30d` Neotoma is a local-first, deterministic state layer for AI agents that stores versioned, replayable records across sessions and tools via MCP. <details><summary>More about</summary>

  It solves the cross-session memory problem by giving agents a shared, auditable entity graph instead of forcing developers to re-prompt context every time they switch tools.

  _You now have to maintain a deterministic memory ledger for your agents, because apparently the irony of needing perfect recall to manage your forgetful AI helpers is just the next layer of the stack._

  `agent-memory` `mcp` `deterministic-state` `local-first`
  </details>

- **[engram-rs](https://github.com/kael-bit/engram-rs)** `⭐ 26` `updated ≤180d` A lightweight, single-binary Rust memory engine for AI agents that manages memory lifecycle across three layers with time-based decay, self-organizing topic trees, and LLM quality gates. <details><summary>More about</summary>

  It gives coding agents a structured way to forget irrelevant context and promote high-value lessons, solving the flat-store memory problem that makes long-running agents brittle.

  _We have now successfully built a forgetting curve for our AI so it can ignore our coding standards with the same mathematical precision that we humans use to ignore our own documentation._

  `memory` `rust` `mcp` `agents` `context`
  </details>

- **[Hypersigil](https://github.com/hypersigilhq/hypersigil)** `⭐ 26` `updated ≤90d` A self-hosted prompt management gateway with a UI for centralizing, testing, and hot-swapping prompts across multiple AI providers without code redeployments. <details><summary>More about</summary>

  It allows teams to manage prompt lifecycles, run batch evaluations against test data, and transition between AI providers from a single operational surface.

  _Finally, a dedicated platform to manage the prompt spaghetti so you can spend more time debating temperature settings than actually shipping code._

  `prompt-management` `llmops` `multi-provider` `self-hosted`
  </details>

- **[waggle-mcp](https://github.com/abhigyan-shekhar/waggle-mcp)** `⭐ 26` `updated ≤30d` Local-first MCP server that adds persistent graph-backed memory to coding agents, storing decisions, contradictions, and reasoning chains across sessions. <details><summary>More about</summary>

  Eliminates context-window amnesia by retaining not just facts but the relationships between them (decisions, reasons, contradictions) in a queryable knowledge graph that survives session restarts.

  _Now you can have the awkward 'but you said three weeks ago' argument with your AI assistant, complete with timestamped receipts and contradiction graphs._

  `mcp-server` `memory` `knowledge-graph` `local-first` `context-retrieval`
  </details>

- **[memem](https://github.com/tt-wang/memem)** `⭐ 25` `updated ≤90d` A Claude Code plugin that gives Claude persistent memory across sessions by mining lessons from completed transcripts, storing them as markdown in an Obsidian vault, and retrieving relevant context via SQLite FTS5. <details><summary>More about</summary>

  Saves developers from re-explaining project context every new Claude Code session by automatically building a queriable, self-evolving memory layer that lives entirely on their own machine.

  _Now your AI assistant needs a notes app to remember what you told it yesterday, and somehow that notes app is also a SQLite database inside another notes app._

  `claude-code` `memory` `obsidian` `local-first` `context-retrieval`
  </details>

- **[byteask-embedded-mcp](https://github.com/byteask/byteask-embedded-mcp)** `⭐ 23` `updated ≤30d` An MCP server that provides page-cited, verbatim retrieval from embedded and firmware documentation. <details><summary>More about</summary>

  It prevents coding agents from hallucinating critical register offsets or protocol commands by grounding them in cited, real-world documentation.

  _Finally, a way to ensure your AI doesn't accidentally brick a microcontroller by hallucinating a single bit in a driver._

  `mcp` `embedded` `firmware` `retrieval` `rag`
  </details>

- **[promptext](https://github.com/1broseidon/promptext)** `⭐ 22` `updated ≤90d` A Go-based CLI tool that analyzes a codebase, ranks files by relevance, and packages them into token-efficient formats for pasting into LLM chat interfaces. <details><summary>More about</summary>

  It automates the tedious manual selection of files and handles token budgeting, allowing developers to feed optimized project context into AI assistants without hitting context limits.

  _Because clearly the missing piece in our workflow wasn't better code, but a specialized compiler that translates your entire repo into a dialect of markdown only a transformer can love._

  `cli` `context-compression` `go` `token-budget` `prompt-engineering`
  </details>

- **[Agent Shadow Brain](https://github.com/theihtisham/agent-shadow-brain)** `⭐ 20` `updated ≤90d` A local-first shared memory and context system that acts as a singleton brain for multiple AI coding agents, injecting briefings, causal memory chains, and task context across tools like Claude Code, Cursor, and Cline. <details><summary>More about</summary>

  It attempts to solve the problem of agents starting from zero each session by sharing learned context, sub-agent state, and decision history across your entire local AI toolchain.

  _You now have a singleton brain for your agents, which means they can all forget things together in perfect, cryptographically signed harmony._

  `local-first` `memory` `multi-agent` `context` `mcp`
  </details>

- **[nexo](https://github.com/wazionapps/nexo)** `⭐ 20` `updated ≤90d` NEXO Brain is a local, open-source shared memory system for AI agents with persistent storage, semantic RAG, and MCP tool integration. <details><summary>More about</summary>

  It gives AI coding agents long-term memory and context awareness, reducing repetitive prompting and improving continuity across sessions.

  _Finally, an AI that remembers your codebase better than you do after three context switches and a coffee break._

  `memory` `mcp` `local-ai` `context-engineering`
  </details>

- **[claude-engram](https://github.com/20alexl/claude-engram)** `⭐ 17` `updated ≤30d` A hooks-based memory and session intelligence toolkit for Claude Code that auto-tracks coding mistakes, decisions, and context, then mines session history for patterns and cross-session search. <details><summary>More about</summary>

  It attempts to solve the context-window amnesia problem by persisting decisions and errors across sessions so your assistant stops repeating the same mistakes after a compaction.

  _We have reached the point where the assistant needs its own assistant to remember why the assistant forgot what you told the assistant ten minutes ago._

  `claude-code` `memory` `mcp` `hooks` `context`
  </details>

- **[cortex](https://github.com/gzoonet/cortex)** `⭐ 17` `updated ≤30d` A local-first CLI and dashboard that watches project files, uses LLMs to extract entities and relationships into a knowledge graph, and allows natural language queries across multiple projects with source citations. <details><summary>More about</summary>

  Developers working across multiple repos can query architectural decisions, patterns, and past context without hunting through hundreds of scattered files.

  _You now have a tool to remember every architectural decision you made three months ago, which removes your last valid excuse for re-solving the same problem in a different repo._

  `knowledge-graph` `local-first` `context-retrieval` `llm`
  </details>

- **[metatron](https://github.com/kerbelp/metatron)** `⭐ 17` `updated ≤30d` A self-hosted system that captures codebase implementation decisions and serves them to coding agents via the Model Context Protocol. <details><summary>More about</summary>

  It allows coding agents to respect specific team conventions and avoid previously rejected approaches by providing structured codebase memory.

  _Your agent will finally possess the 'senior engineer' persona, meaning it can now use your own past architectural mistakes to argue against your current PRs._

  `mcp` `context-engineering` `self-hosted` `agentic-workflow`
  </details>

- **[statelessagent](https://github.com/sgx-labs/statelessagent)** `⭐ 16` `updated ≤180d` A local-first MCP server that gives AI coding agents persistent memory by indexing markdown notes and surfacing relevant context across sessions. <details><summary>More about</summary>

  Developers can stop re-explaining project decisions to Claude Code, Cursor, and Windsurf every time a session restarts.

  _We have finally solved the AI memory problem by building yet another local binary that indexes our markdown notes so the robot can remember why we chose JWT three weeks ago._

  `mcp` `memory` `local-first` `context` `cli`
  </details>

- **[project-tessera](https://github.com/besslframework-stack/project-tessera)** `⭐ 15` `updated ≤180d` Tessera is a local-first memory layer for AI assistants that provides 58 MCP tools and 54 REST endpoints for persistent knowledge storage, document search, and contradiction detection with AES-256 encryption. <details><summary>More about</summary>

  Developers can give Claude Desktop and other AI tools persistent memory across sessions without API keys, Docker, or cloud dependencies, solving the problem of AI assistants forgetting context between conversations.

  _After installing yet another memory layer to solve the amnesia problem, you'll still spend more time configuring your AI's recall system than actually benefiting from anything it remembers._

  `memory` `mcp` `local-first` `knowledge-retrieval` `context-engineering`
  </details>

- **[recallnest](https://github.com/aliceljy/recallnest)** `⭐ 15` `updated ≤30d` Local-first shared memory layer for Claude Code, Codex, and Gemini CLI that uses hybrid retrieval (vector + BM25 + knowledge graph) and session continuity to preserve context across terminals. <details><summary>More about</summary>

  It ends the context amnesia of switching between terminal agents by giving Claude Code, Codex, and Gemini CLI a single, self-hosted LanceDB memory store with automatic recall, decay, and cross-session continuity.

  _It is somewhat sobering that we now need a LanceDB knowledge graph with configurable decay algorithms just so three different terminal agents can both remember that the user prefers dark mode._

  `memory-layer` `hybrid-retrieval` `claude-code` `local-first` `knowledge-graph`
  </details>

- **[remembra](https://github.com/remembra-ai/remembra)** `⭐ 13` `updated ≤90d` A self-hosted memory layer for AI applications that provides persistent storage, entity resolution, and graph-aware recall via Python and TypeScript SDKs and an MCP server. <details><summary>More about</summary>

  It gives developers a way to add durable, cross-session memory to any AI agent or coding assistant without relying on vendor-locked or expensive hosted graph memory services.

  _Finally, your agent can remember Sarah’s email preference forever, even if the rest of your stack has forgotten why you started this project in the first place._

  `memory` `mcp` `self-hosted` `rag` `sdk`
  </details>

- **[graphpilot](https://github.com/graphpilot-oss/graphpilot)** `⭐ 12` `updated ≤30d` A local CLI and MCP server that indexes TypeScript/JavaScript repositories into a structural graph for coding agents to query symbols, callers, and call-edges. <details><summary>More about</summary>

  It reduces token spend and hallucinations by providing agents with persistent, structural memory of a codebase's architecture instead of relying on repetitive grep-like file reads.

  _The realization that we are now building sophisticated graph databases just so our agents stop forgetting where a function is called across three files._

  `mcp` `code-analysis` `typescript` `local-ai` `context-window`
  </details>

- **[selvedge](https://github.com/masondelan/selvedge)** `⭐ 12` `updated ≤30d` A local MCP server that captures an AI agent's reasoning live as code changes are made, storing structured change events with justifications in a local SQLite database for later audit. <details><summary>More about</summary>

  It solves the 'why did the AI add this' mystery by creating a persistent audit trail of agent reasoning that survives long after the coding session and context window vanish.

  _We have successfully built git blame for hallucinations, so you can now scientifically document exactly when your agent decided to migrate the database at 2 AM for reasons it already forgot._

  `mcp` `memory` `codebase-audit` `agent-trace` `sqlite`
  </details>

- **[clickup-cli](https://github.com/nicholasbester/clickup-cli)** `⭐ 11` `updated ≤90d` A CLI for the ClickUp API that compresses API responses into token-efficient output optimized for AI agents and human users. <details><summary>More about</summary>

  It reduces ClickUp API responses from ~12,000 tokens to ~150 tokens by default, preventing AI agents from exhausting their context windows on nested JSON.

  _We have finally reached the point where we need a specialized CLI to stop our AI assistants from drowning in the JSON output of our project management tools._

  `cli` `clickup` `context-engineering` `token-efficiency` `api`
  </details>

- **[claude-find](https://github.com/cavinooo/claude-find)** `⭐ 10` `updated ≤30d` A semantic search tool that indexes Claude Code session transcripts to provide long-term memory via MCP. <details><summary>More about</summary>

  It allows developers to retrieve specific reasoning, constraints, and past decisions from previous Claude Code sessions to provide richer context for current tasks.

  _Now you can finally search for the exact moment you convinced yourself that a specific architectural mistake was actually a 'feature'._

  `claude-code` `mcp` `semantic-search` `ollama` `memory`
  </details>

- **[ejentum-mcp](https://github.com/ejentum/ejentum-mcp)** `⭐ 10` `updated ≤30d` An MCP server that exposes Ejentum's reasoning, code, anti-deception, and memory 'cognitive harnesses' to agentic clients. <details><summary>More about</summary>

  It provides structured reasoning topologies and memory tools to act as a persistent attention anchor, preventing agent reasoning decay in long-context workflows.

  _Because your agent's reasoning was so prone to decay that it required an external cognitive scaffold just to stay on task._

  `mcp` `reasoning` `context-engineering` `agentic-ai` `memory`
  </details>

- **[engine](https://github.com/mindsdb/engine)** `⭐ 10` `updated ≤30d` A semantic query engine that enables hybrid vector and keyword search across 200+ data sources using standard SQL. <details><summary>More about</summary>

  It allows developers to build RAG pipelines and provide context to agents by querying live data sources via SQL without needing complex ETL processes.

  _Because managing RAG complexity is apparently best solved by pretending your entire enterprise data stack is just one giant, federated SQL table._

  `sql` `semantic-search` `rag` `knowledge-bases` `data-integration`
  </details>

- **[mnemos](https://github.com/s60yucca/mnemos)** `⭐ 9` `updated ≤90d` A local, single-binary MCP server that automatically builds and maintains a structured knowledge base for coding agents via background quality gates, deduplication, and context packing. <details><summary>More about</summary>

  It removes the manual overhead of memory management for agents like Claude Code and Cursor by handling storage, retrieval, and context assembly automatically within a token budget.

  _We have finally automated the process of remembering why we started refactoring this module three hours ago, ensuring our agent never forgets the context we ourselves have lost._

  `mcp` `memory` `context` `local-first` `go`
  </details>

- **[wellread](https://github.com/mnlt/wellread)** `⭐ 9` `updated ≤90d` Collective research memory for AI agents that caches and shares technical research findings to avoid redundant web searches across sessions. <details><summary>More about</summary>

  Drastically reduces token spend and hallucination risk by surfacing prior verified research before the agent hits the web, with semantic caching and freshness-aware re-checking.

  _Your agent will now burn fewer tokens rediscovering the same Stack Overflow answer for the 48th time, while you wonder why we needed a distributed cache to solve what a browser bookmark used to do._

  `mcp` `memory` `caching` `research` `token-optimization`
  </details>

- **[celiums-memory](https://github.com/terrizoaguimor/celiums-memory)** `⭐ 8` `updated ≤90d` An open-source MCP server that provides AI coding assistants like Claude Code and Cursor with persistent memory, circadian rhythm simulation, and access to 5,100 expert knowledge modules. <details><summary>More about</summary>

  It allows developers to equip their AI assistants with long-term memory and specialized technical knowledge, reducing the friction of re-explaining context across sessions.

  _Your AI now has a circadian rhythm and emotions to process your spaghetti code, but it still won't remember to delete that console.log you asked it to remove three sessions ago._

  `mcp` `memory` `context` `knowledge-base` `typescript`
  </details>

- **[mnemo-mcp](https://github.com/n24q02m/mnemo-mcp)** `⭐ 8` `updated ≤30d` An open-source MCP server providing persistent AI memory with hybrid search, knowledge graphs, and multi-machine sync for coding assistants like Claude Code and Cursor. <details><summary>More about</summary>

  It gives local-first coding agents a structured way to remember preferences, decisions, and facts across sessions without relying on cloud APIs or brittle context windows.

  _We have finally solved the problem of AI assistants forgetting who we are, only to create a dedicated SQLite database to remind them that we still haven't finished that one refactor from three months ago._

  `mcp` `memory` `hybrid-search` `local-first` `context`
  </details>

- **[agent-memory](https://github.com/g1itchbot8888-del/agent-memory)** `⭐ 7` `updated ≤180d` A local-first Python memory system for autonomous agents that uses a three-layer architecture (identity, active, archive) and exposes itself as an MCP server for tools like Claude Code, Cursor, and OpenClaw. <details><summary>More about</summary>

  It gives coding agents a way to persist identity and task context across sessions using local SQLite and embeddings, reducing the token cost of reconstructing state.

  _We have successfully built a memory system so that our amnesia-prone agents can finally remember they were supposed to be fixing a bug before the context window reset._

  `memory` `mcp` `local-first` `context`
  </details>

- **[mason](https://github.com/adrianczuczka/mason)** `⭐ 7` `updated ≤90d` A context-building tool that creates persistent codebase concept maps and provides change impact analysis for LLMs. <details><summary>More about</summary>

  It reduces token consumption and improves model accuracy by providing a persistent architectural map that prevents LLMs from re-exploring the same codebase every session.

  _Because why just read a file when you can spend hundreds of tokens building a map of why that file exists in the first place?_

  `context-engineering` `mcp` `cli` `codebase-mapping` `token-optimization`
  </details>

- **[vs-token-safer](https://github.com/jsungmin/vs-token-safer)** `⭐ 7` `updated ≤30d` A token-optimized code retrieval layer that uses language server indexes like clangd and Roslyn to provide semantic search for coding agents. <details><summary>More about</summary>

  It prevents coding agents from flooding their context windows with irrelevant code by replacing naive grep searches with precise, symbol-based lookups.

  _Because apparently, even the smartest LLMs can't be trusted to find a function without accidentally reading the entire monorepo._

  `mcp` `context-engineering` `claude-code` `semantic-search` `token-optimization`
  </details>

- **[cogmemai-mcp](https://github.com/hifriendbot/cogmemai-mcp)** `⭐ 6` `updated ≤30d` CogmemAi is an MCP-compatible memory layer that gives coding assistants persistent, cross-session recall with autonomous capture and benchmark-topping long-term memory scores. <details><summary>More about</summary>

  It offloads memory management to the infrastructure layer so your AI assistant remembers architectural decisions and prior attempts without being explicitly told to save.

  _We've successfully automated the one thing developers are supposed to be good at—remembering why we made terrible decisions six hours ago._

  `mcp` `memory` `context` `persistent-recall` `benchmark`
  </details>

- **[codecortex](https://github.com/rushikeshmore/codecortex)** `⭐ 5` `updated ≤90d` A persistent codebase knowledge layer that pre-builds architecture, dependency, coupling, and risk knowledge, exposing it to AI agents via an MCP server and inline context injection. <details><summary>More about</summary>

  It eliminates AI agent cold starts by injecting precomputed structural, semantic, and temporal codebase knowledge directly into agent config files, reducing tool calls and token usage on large codebases.

  _We have successfully reached the point where we need dedicated infrastructure to explain our own code to the AI, because apparently 79K tokens of context window wasn't quite enough to figure out which files are dangerous to touch._

  `mcp` `context-engineering` `codebase-analysis` `rag` `agent-context`
  </details>

- **[context-memory](https://github.com/erebusenigma/context-memory)** `⭐ 5` `updated ≤180d` A persistent, searchable context storage system for Claude Code that uses SQLite with FTS5 to save and recall session history, decisions, and code patterns across terminal sessions. <details><summary>More about</summary>

  It solves the ephemeral nature of Claude Code sessions by giving developers a fast, structured way to retrieve past decisions, bugs, and code patterns without re-explaining context.

  _We have finally built a memory palace for our AI assistant so that, somewhere between the 47th token and the heat death of the universe, it might remember why we chose JWT over sessions._

  `claude-code` `memory` `context` `sqlite` `fts5`
  </details>

- **[five-mcp](https://github.com/kiro0x/five-mcp)** `⭐ 4` `updated ≤30d` An MCP server that provides structured JSON persona constraints to prevent LLM persona drift. <details><summary>More about</summary>

  It replaces imprecise natural language character descriptions with deterministic, recipe-based behavioral parameters for more reliable agents.

  _Because asking an LLM to maintain a persona for more than ten minutes is apparently a fundamental failure of model reasoning._

  `mcp` `persona-drift` `prompt-engineering` `agentic-ai` `llm-safety`
  </details>

- **[flaiwheel](https://github.com/dl4rce/flaiwheel)** `⭐ 4` `updated ≤90d` A self-hosted Docker service that provides a knowledge and governance layer for AI coding agents by vectorizing documentation and exposing it via an MCP server for persistent memory and automated documentation. <details><summary>More about</summary>

  It allows AI assistants to retain architectural decisions and bug fixes across sessions by automatically capturing knowledge from git commits and documentation into a searchable, local vector store.

  _We have successfully built infrastructure to ensure our AI agents never forget the technical debt we keep introducing._

  `mcp` `memory` `self-hosted` `rag` `knowledge-management`
  </details>

- **[jarvis-orb](https://github.com/thestack-ai/jarvis-orb)** `⭐ 4` `updated ≤90d` A Rust + Tauri desktop app and MCP server that gives Claude Code and other assistants persistent multi-tier memory plus a real-time 3D orb visualization of AI reasoning. <details><summary>More about</summary>

  It solves the classic session-amnesia problem by persisting episodic, semantic, project, and procedural memory across restarts, while making the assistant's internal state visible instead of a black box.

  _You can now watch a glowing orb absorb your contradicted PostgreSQL decisions in real time, just in case the amnesia wasn't metaphysical enough already._

  `mcp` `memory` `visualization` `claude-code` `desktop`
  </details>

- **[memstate-mcp](https://github.com/memstate-ai/memstate-mcp)** `⭐ 4` `updated ≤180d` A hosted MCP server that provides AI agents with structured, versioned memory for deterministic fact recall and conflict detection. <details><summary>More about</summary>

  It replaces O(n) embedding-based memory dumps with O(1) versioned key-value storage, letting agents track decision history without bloating the context window.

  _We have now successfully abstracted the problem of remembering what we did last week into a hosted SaaS with a benchmark suite, versioning, and a pricing page._

  `mcp` `memory` `agents` `context-engineering`
  </details>

- **[preflight](https://github.com/preflight-dev/preflight)** `⭐ 4` `updated ≤180d` A 24-tool MCP server for Claude Code that intercepts prompts to catch ambiguity, scores prompt quality, searches session history with vector search, and estimates token costs. <details><summary>More about</summary>

  It directly attacks the 30-40% token waste caused by vague prompts, wrong-direction corrections, and unbounded session context in Claude Code workflows.

  _We have officially reached the point where we need a dedicated tool to audit the quality of the prompts we feed the tool that is supposed to save us time._

  `mcp` `claude-code` `prompt-quality` `token-optimization` `context-engineering`
  </details>

- **[bigindexer](https://github.com/ahmedxuhri/bigindexer)** `⭐ 3` `updated ≤30d` A static architecture analysis tool that groups code based on behavioral roles rather than just import graphs. <details><summary>More about</summary>

  It provides AI agents and developers with behavioral boundaries and coupling data to make refactors and prompt-based changes less random.

  _Finally, a tool that mathematically proves our codebase is a tangled web of behavioral accidents just before we ask an LLM to 'fix the architecture'._

  `static-analysis` `mcp` `software-architecture` `code-graph`
  </details>

- **[iranti](https://github.com/nfemmanuel/iranti)** `⭐ 3` `updated ≤90d` A self-hosted MCP server that provides persistent, identity-based memory infrastructure for multi-agent systems and AI coding tools like Claude Code, Codex CLI, and GitHub Copilot. <details><summary>More about</summary>

  It allows different AI agents to share deterministic state and recall facts across sessions, context resets, and tool switches via a PostgreSQL-backed knowledge store.

  _We have finally built infrastructure to ensure our AI agents never forget yesterday's half-baked refactoring, guaranteeing the same mistakes persist across every tool in the stack._

  `mcp` `memory` `multi-agent` `self-hosted` `context`
  </details>

- **[nocturnusai](https://github.com/auctalis/nocturnusai)** `⭐ 3` `updated ≤90d` A context engineering engine that uses logic-based inference and truth maintenance to compress agent conversation history into minimal deltas, reducing token usage and hallucinations. <details><summary>More about</summary>

  It claims to cut token costs by up to 5.7x by sending only fact-based deltas to the LLM instead of full replay or fuzzy RAG retrieval.

  _Yet another chance to replace 'why is my context window full' with 'why is my logic engine retracting my only working facts'._

  `context-engineering` `memory` `token-optimization` `mcp` `sdk`
  </details>

- **[penfield-mcp](https://github.com/penfieldlabs/penfield-mcp)** `⭐ 3` `updated ≤180d` An MCP server that provides persistent memory, knowledge graphs, and context management for AI agents across sessions and tools like Claude, Cursor, and Windsurf. <details><summary>More about</summary>

  It lets developers maintain architectural decisions, investigation threads, and preferences across different AI coding tools without starting every session from zero.

  _You can now pay a subscription so your AI assistant remembers enough context to be disappointed in you all over again tomorrow._

  `mcp` `memory` `context` `knowledge-graph` `persistent-memory`
  </details>

- **[rememb](https://github.com/luizedupp/rememb)** `⭐ 3` `updated ≤30d` A local, zero-config persistent memory system for AI agents that stores project context in a JSON file and exposes it via an MCP server. <details><summary>More about</summary>

  It solves the common pain of AI agents forgetting project-specific context, architecture, and decisions between sessions without requiring cloud services or complex infrastructure.

  _We have finally engineered a way to make sure the AI remembers we prefer async patterns, right before we forget why we needed async patterns in the first place._

  `memory` `mcp` `context` `local-ai`
  </details>

- **[a2cr](https://github.com/a2cr/a2cr)** `⭐ 2` `updated ≤30d` An MCP server that manages encrypted AI agent handoff states and session checkpoints to enable continuity across different coding assistants. <details><summary>More about</summary>

  It allows developers to resume long coding tasks in fresh context windows by passing compact, actionable state instead of messy, noisy chat transcripts.

  _Because the next logical step in the AI revolution is clearly perfectly documenting the exact moment your agent loses the plot._

  `mcp` `context-management` `agent-handoff` `memory`
  </details>

- **[cachly-mcp](https://github.com/cachly-dev/cachly-mcp)** `⭐ 2` `updated ≤30d` An MCP server that provides persistent memory and semantic search for AI coding assistants by indexing git history and session lessons. <details><summary>More about</summary>

  It automates the process of re-establishing context, preventing developers from having to re-explain architecture or past bug fixes to their AI every session.

  _Because the ultimate solution to AI amnesia is to build a permanent, searchable database of every single mistake you've ever made in a codebase._

  `mcp` `ai-memory` `context-engineering` `developer-tools`
  </details>

- **[central-intelligence](https://github.com/alekseimarchenko/central-intelligence)** `⭐ 2` `updated ≤90d` An MCP server providing persistent memory storage and semantic recall for AI agents across sessions, integrating with tools like Claude Code, Cursor, and LangChain. <details><summary>More about</summary>

  It allows developers to retain context, preferences, and architectural decisions across AI agent sessions, eliminating the need to re-explain project details every time a session restarts.

  _We have finally built a permanent external hard drive for the goldfish-like attention span of our coding agents, ensuring they never forget how much you hate semicolons._

  `mcp` `memory` `context` `persistent-storage`
  </details>

- **[fish-bridge-mcp](https://github.com/makeamouse/fish-bridge-mcp)** `⭐ 2` `updated ≤30d` A session-scoped knowledge graph engine that compresses long AI chat histories into compact, typed context summaries automatically ingested by Copilot, Claude Code, and Cursor. <details><summary>More about</summary>

  It slashes token burn by distilling 40k-token sessions into ~350-token graphs, letting developers maintain coherent long-running conversations with coding assistants without hitting context limits or paying to resend full history every turn.

  _You already paid to generate the 40k tokens, and now you need a second AI to summarize them so the first AI can afford to keep talking to you._

  `context-compression` `knowledge-graph` `memory` `cli` `mcp-server`
  </details>

- **[g1](https://github.com/bklieger-groq/g1)** `⭐ 2` `updated ≤1y` An experimental Streamlit/Gradio app that uses prompt engineering and dynamic Chain-of-Thought on Llama-3.1-70b via Groq to simulate o1-like reasoning chains for solving logic problems. <details><summary>More about</summary>

  It demonstrates how far prompting strategies alone can push open-source model reasoning, serving as a reference implementation for developers building structured reasoning loops.

  _Another proof that we are one clever system prompt away from convincing ourselves that we have solved AGI, provided the benchmark is counting letters in a fruit._

  `reasoning` `prompt-engineering` `chain-of-thought` `groq` `llama`
  </details>

- **[waypath](https://github.com/thestack-ai/waypath)** `⭐ 2` `updated ≤90d` A local-first CLI and MCP server that gives coding agents like Claude Code and Codex persistent, graph-aware memory backed by a single SQLite database with promotion and review governance. <details><summary>More about</summary>

  It lets developers maintain a canonical, reviewable memory layer across sessions without relying on cloud services or vector blobs that silently hallucinate.

  _We have ascended from prompting assistants to carefully reviewing and promoting the memories of our assistants so they do not forget the architectural crimes we committed last Tuesday._

  `memory` `mcp` `local-first` `cli` `context`
  </details>

- **[agentmem](https://github.com/thezenmonster/agentmem)** `⭐ 1` `updated ≤90d` A local-first memory system for coding agents like Claude Code and Cursor that adds governance, conflict detection, and trust ranking to stored memories. <details><summary>More about</summary>

  It solves the 'stale context' problem by letting agents track memory lifecycles, detect contradictions, and surface only validated information within token budgets.

  _Now when your AI forgets why it abandoned that architectural pattern in March, you can blame the memory governance score instead of the model._

  `memory` `context` `mcp` `local-first` `governance`
  </details>

- **[claude-session-continuity-mcp](https://github.com/leesgit/claude-session-continuity-mcp)** `⭐ 1` `updated ≤90d` An MCP server and hook system for Claude Code that automatically captures session context, decisions, and error-fix pairs to eliminate re-explanation on new sessions. <details><summary>More about</summary>

  It removes the recurring overhead of re-explaining project state, conventions, and past decisions every time a Claude Code session starts.

  _We have now built persistent memory so you can feel productive across sessions, right before the model forgets what a Next.js App Router is two prompts later._

  `mcp` `claude-code` `session-memory` `context-continuity`
  </details>

- **[tempograph](https://github.com/elmoaid/tempograph)** `⭐ 1` `updated ≤90d` TempoGraph is a code graph context engine that builds a tree-sitter dependency graph of a repository and exposes 24 MCP tools to help AI agents identify the exact files needed for a task. <details><summary>More about</summary>

  It replaces keyword guessing with structural dependency analysis, measurably improving file-retrieval F1 scores by ~27% for coding agents working in large codebases.

  _We have finally built a dependency graph so your agent can confidently break exactly the right files instead of guessing wrong ones._

  `mcp` `context` `code-graph` `retrieval` `tree-sitter`
  </details>

- **[memviz](https://github.com/pfillion42/memviz)** `⭐ 0` `updated ≤180d` A local web UI for browsing, searching, visualizing, and managing the SQLite-vec memory databases created by the MCP Memory Service. <details><summary>More about</summary>

  It gives developers a visual interface to inspect, clean, and understand the vector memories that Claude Code and other MCP clients accumulate over time.

  _You now have an interactive dashboard to micromanage the memories of an AI that you originally asked to just write a function for you._

  `memory` `mcp` `vector-db` `visualization` `local`
  </details>

- **[usecortex-mcp](https://github.com/usecortex-official/usecortex-mcp)** `⭐ 0` `updated ≤180d` UseCortex MCP Server is a Model Context Protocol server that provides AI coding agents with persistent, encrypted memory for reading and writing knowledge. <details><summary>More about</summary>

  It solves the context window limitation by giving agents long-term memory that works across any MCP-compatible tool.

  _Now your AI can forget less and remember too much, just like a developer with a second monitor and zero boundaries._

  `mcp` `memory` `context`
  </details>

- **[16x Prompt](https://prompt.16x.engineer)** A local desktop application that assembles source code context, custom instructions, and formatting rules into optimized prompts to send to external LLMs via copy-paste or BYOK API integrations. <details><summary>More about</summary>

  It solves the manual context-assembly problem for developers working with existing codebases by packaging files, instructions, and token limits into a single prompt ready for ChatGPT, Claude, or other models.

  _Just when you thought sending context windows was a solved problem, you now have a dedicated desktop app to help you strategically feed the beast without hitting the token ceiling._

  `prompt-management` `context-engineering` `desktop-app` `byok` `local-first`
  </details>

- **[Atlan](https://atlan.com)** Atlan is an enterprise data catalog and governance platform that acts as a centralized context layer for AI agents, exposing business logic, data lineage, and governance policies via an MCP server. <details><summary>More about</summary>

  It allows developers building enterprise AI agents to stop hardcoding business definitions and permissions by querying a unified, governed context store instead of rebuilding context for every new use case.

  _Finally, a way to solve the problem of AI agents not understanding your business, assuming you were already planning to deploy an enterprise data graph, a context lakehouse, and a dedicated governance team._

  `context-engineering` `mcp` `enterprise` `governance` `data`
  </details>

- **[Chat Templates](https://huggingface.co/blog/chat-templates)** Chat templates are Jinja-based formatting specifications for converting chat message histories into model-ready token strings in Hugging Face tokenizers. <details><summary>More about</summary>

  They prevent silent performance degradation by ensuring input formatting matches what chat models were trained with, eliminating a common source of hard-to-debug errors.

  _Realizing your model's poor performance wasn't due to prompt engineering but because you forgot to specify whether to wrap roles in [USER] or 'User : ' is a special kind of silent despair._

  `prompt-formatting` `tokenizers` `hugging-face` `chat-models`
  </details>

- **[ClevAgent](https://clevagent.io)** ClevAgent is a supervised terminal workstation that intercepts running AI agents to detect wasteful patterns like duplicate reads and memory bloat, injecting corrective guidance to improve session efficiency. <details><summary>More about</summary>

  It targets the hidden token and time waste in long agent sessions, helping developers reduce costs and keep workspaces cleaner across repeated runs.

  _We have finally built middleware to watch the agents that were supposed to be watching the code for us, completing the circle of recursive oversight._

  `agent-ops` `token-optimization` `context-management` `terminal`
  </details>

- **[Context by Fulcra](https://fulcradynamics.com)** A unified, human-owned memory layer that allows AI agents to read and contribute persistent context across different platforms and sessions. <details><summary>More about</summary>

  It solves the fragmented context problem by providing a single source of truth for personal data and state that can be shared across multiple agents via a Life API and MCP server.

  _The dream of a 'Personal Data OS' is just a fancy way of saying we're now managing a database of our own existence so our agents don't forget we're allergic to peanuts every time we start a new chat._

  `mcp` `memory` `personal-data` `context-layer`
  </details>

- **[Context7](https://context7.com)** Context7 is an Upstash service that pulls up-to-date, version-specific documentation and code examples for libraries directly into AI coding tools like Cursor, Claude Code, and Windsurf. <details><summary>More about</summary>

  It solves the common problem of LLMs hallucinating deprecated APIs by grounding coding assistants in current, version-specific documentation at prompt time.

  _Yet another layer of infrastructure dedicated to fixing the fact that our AI assistants know as much about modern libraries as a tutorial written in 2021._

  `context-engineering` `docs` `retrieval` `coding-assistants`
  </details>

- **[Dosu](https://dosu.dev)** Dosu is a knowledge infrastructure platform that captures context from coding agent sessions, documentation, and chat tools to build a shared team memory and maintain documentation automatically. <details><summary>More about</summary>

  It reduces token usage and increases consistency by giving coding agents access to automatically maintained team knowledge instead of forcing them to re-prompt for context.

  _We have successfully reached the point where we need a platform to document what our AI agents learned so the next AI agent doesn't bother us with the same questions._

  `memory` `mcp` `context` `documentation` `knowledge-management`
  </details>

- **[Graphlit](https://www.graphlit.com)** Graphlit is a context layer platform that syncs real-time data from tools like Slack, GitHub, and Jira into a single API with built-in semantic search for AI agents. <details><summary>More about</summary>

  It provides agent developers with a managed infrastructure for Retrieval-Augmented Generation (RAG), removing the need to build custom connectors and vector store pipelines.

  _Finally, your agent can confidently hallucinate about that Jira ticket you moved back to the backlog three times this morning._

  `rag` `context` `agents` `api` `mcp`
  </details>

- **[Izlo](https://getizlo.com)** Izlo is a team prompt management platform that provides version control, testing, and API deployment tools for organizing and iterating on prompts stored across codebases, documents, and spreadsheets. <details><summary>More about</summary>

  It gives engineering teams a centralized workspace to version, collaborate on, and regression-test prompts with CI-style automation before syncing them to production via API.

  _Because the hottest new engineering bottleneck isn't deploying code, it's realizing your team's secret sauce is a brittle string buried in a spreadsheet somewhere._

  `prompt-management` `promptops` `testing` `team-collaboration` `api`
  </details>

- **[MemClaw](https://memclaw.me/en/claw)** MemClaw is a persistent memory extension that adds isolated, project-scoped memory workspaces and a web-based management interface to the OpenClaw coding assistant. <details><summary>More about</summary>

  It solves the context-bleed problem across multiple projects by letting developers save, isolate, and recall entire project histories with a single prompt.

  _We have successfully reached the point where our AI assistants need their own second-brain extensions to remember why we hired them in the first place._

  `memory` `openclaw` `context` `extension`
  </details>

- **[Pezzo](https://www.pezzo.ai)** Pezzo is a platform that provides prompt management, versioning, and observability tooling for developers integrating LLMs into applications. <details><summary>More about</summary>

  It allows teams to version, test, and monitor prompts and model performance in a centralized environment, reducing the chaos of shipping prompt changes directly in application code.

  _Finally, your prompts get version control, so you can professionally regress and blame previous generations for why the chatbot suddenly thinks it’s a pirate._

  `prompt-management` `llm-ops` `observability`
  </details>

- **[Pieces.app](https://pieces.app)** Pieces is a local-first desktop AI companion that captures and indexes work context across browsers, IDEs, and communication tools to provide long-term memory and snippet management for developers. <details><summary>More about</summary>

  It attempts to solve the context-switching tax by automatically retaining code snippets, documentation, and workflow history so developers can query their own 'digital memory' instead of starting from scratch.

  _Now you can outsource your forgetfulness to a local AI that remembers the 40 tabs you opened on Tuesday, proving that the modern developer stack includes an external hard drive for your short-term memory._

  `memory` `local-ai` `context-retrieval` `snippets` `productivity`
  </details>

- **[PromptFoundry](https://www.promptfoundry.ai)** A prompt management and evaluation tool for AI applications with support for multi-model comparison, variable inputs, and SDKs for Node, JavaScript, TypeScript, and Python. <details><summary>More about</summary>

  It gives developers a structured way to manage, test, and compare prompts and model behavior before deploying to production.

  _Yet another pristine dashboard where you will endlessly A/B test the same three prompts while telling yourself this is proper engineering._

  `prompt-management` `evaluation` `llmops` `sdk`
  </details>

- **[PromptHub](https://www.prompthub.us)** PromptHub is a team-focused platform for versioning, testing, evaluating, and deploying prompts across multiple LLM providers via API, forms, and Zapier integrations. <details><summary>More about</summary>

  Centralizing prompt versioning, batch testing, and deployment pipelines helps engineering teams stop treating prompts like forgotten spreadsheet cells and start managing them like production code.

  _Because nothing says 'modern LLM engineering' quite like needing a dedicated SaaS platform, Git-based versioning, and Zapier zaps just to safely tweak the sentence you send to GPT-3.5._

  `prompt-management` `promptops` `llmops` `evaluations` `team-collaboration`
  </details>

- **[Ragie](https://www.ragie.ai)** Ragie is a fully managed RAG-as-a-Service platform providing APIs and SDKs for multimodal ingestion, indexing, and retrieval, with an MCP server for agent integration. <details><summary>More about</summary>

  It lets developers ship context-rich AI features without building and maintaining their own chunking, embedding, and retrieval pipelines.

  _Yet another excuse to pretend your chatbot is enterprise-ready because it can finally hallucinate with citations from a Notion doc._

  `rag` `mcp` `context` `retrieval` `sdk`
  </details>

- **[Tavily](https://tavily.com)** A real-time search and extraction engine designed specifically to ground AI agents and RAG workflows with fresh web data. <details><summary>More about</summary>

  It solves the 'stale knowledge' problem by providing developers with a high-speed, API-driven way to feed current web context into LLMs without building a custom crawler.

  _The comforting realization that your agent's 'reasoning' is actually just a very fast Google search filtered through a prompt._

  `rag` `web-search` `context-window` `agents` `real-time-data`
  </details>

- **[Unblocked MCP](https://getunblocked.com/unblocked-mcp)** Unblocked MCP Server provides synthesized context from codebase, docs, PRs, and Slack to AI coding agents via the Model Context Protocol. <details><summary>More about</summary>

  It reduces agent hallucination and rework by delivering decision-grade, reconciled context from live organizational sources.

  _Finally, a way to make your AI agent feel less like a confused intern and more like a teammate who actually read the wiki._

  `mcp` `context-engineering` `ai-dev-extensions`
  </details>

- **[Vectorize](https://vectorize.io)** Vectorize provides Hindsight, an open-source, model-agnostic memory layer that allows AI agents to persist context, recall user preferences, and learn from mistakes across sessions via MCP tooling. <details><summary>More about</summary>

  It gives developers a drop-in memory system that enables agents to retain long-term context and improve judgment over time without tying them to a specific LLM provider.

  _We have finally solved the problem of AI forgetting what it did five minutes ago, only to realize that an agent with perfect recollection of its own errors is just a very efficient way to repeat them._

  `agent-memory` `mcp` `context-retrieval` `open-source`
  </details>

- **[Website](https://cachly.dev)** A memory layer for AI coding assistants that bootstraps a knowledge base from git history to provide context on past fixes and architectural decisions. <details><summary>More about</summary>

  It eliminates the need to manually re-explain codebase architecture and past bugs to AI assistants by automatically indexing git history into a causal knowledge graph.

  _The dream of never explaining your stack again is only possible if you trust a tool to tell your AI exactly why you made that regrettable architectural choice three months ago._

  `mcp` `memory` `git` `context-engineering` `knowledge-graph`
  </details>

- **[Website](https://leanctx.com)** LeanCTX is an open-source Rust binary that sits between AI coding tools and codebases to visualize, compress, and control what context reaches the model. <details><summary>More about</summary>

  It cuts token costs and context bloat by stripping noise—like comments and whitespace—while preserving structure, and adds session memory and cross-agent context control across 29+ editors and assistants.

  _You now get a live dashboard to watch your AI context window fill up with garbage, because apparently 'please ignore the comments' was too ambiguous for a trillion-parameter model._

  `context-compression` `context-window` `token-optimization` `memory` `ai-tooling`
  </details>