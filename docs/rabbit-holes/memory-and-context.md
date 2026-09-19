<!-- This file is generated. Do not edit it directly. Submit tools through config/sources.yml. -->
# Memory & Context

Systems that improve what goes into the model: persistent agent memory, retrieval and RAG pipelines, context compression, and prompt management.

## Tools & Resources

- **[Mem0](https://github.com/mem0ai/mem0)** `⭐ 62.4k` `updated ≤90d` Universal memory layer for AI Agents. <details><summary>More about</summary>

  Gives agents long-term, personalized memory so assistants stop forgetting user preferences between turns.

  _Yet another piece of infrastructure glued onto agents to paper over the fact that LLMs have the retention span of a goldfish._

  `memory` `agents` `context`
  </details>

- **[Context 7](https://github.com/upstash/context7)** `⭐ 59.5k` `updated ≤90d` Context7 Platform provides up-to-date code documentation and examples for LLMs and AI code editors via CLI skills or MCP server integration. <details><summary>More about</summary>

  It reduces hallucinated or outdated code generation by fetching real-time, version-specific documentation directly into the developer's AI coding workflow.

  _Another tool to remind your AI assistant that it still can't remember last week's API changes, so you spend more time managing context than coding._

  `context-engineering` `mcp` `ai-dev-extensions`
  </details>

- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** `⭐ 29k` `updated ≤90d` Cognee is an open-source memory control plane that combines embeddings, knowledge graphs, and cognitive science approaches to give AI agents persistent, searchable memory of data, decisions, and workflows. <details><summary>More about</summary>

  It provides developers with unified ingestion and retrieval infrastructure so agents can maintain context, learn from feedback, and share knowledge across sessions instead of resetting every run.

  _Yet another chance to outsource your own memory to a graph database, because clearly the problem wasn't too many moving parts in your agent stack._

  `memory` `rag` `knowledge-graph` `context-engineering` `agent-infra`
  </details>

- **[Beads](https://github.com/gastownhall/beads)** `⭐ 26.8k` `updated ≤30d` A distributed, graph-based memory and issue-tracking layer for AI coding agents. <details><summary>More about</summary>

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

- **[gitingest](https://github.com/coderamp-labs/gitingest)** `⭐ 15.4k` `updated ≤30d` A tool that converts GitHub repository URLs into prompt-friendly text digests for LLM consumption. <details><summary>More about</summary>

  Developers can quickly feed entire codebases into LLMs without manual context curation, improving prompt relevance and reducing token waste.

  _Now you can finally stop pretending you read the entire repo before asking the LLM to fix it._

  `context-engineering` `code-ingestion` `llm-prompting` `github-integration`
  </details>

- **[skill_seekers](https://github.com/yusufkaraaslan/skill_seekers)** `⭐ 14.5k` `updated ≤90d` Skill Seekers converts documentation, GitHub repos, PDFs, and other sources into structured knowledge assets for AI skills, RAG, and coding assistants. <details><summary>More about</summary>

  It reduces the manual effort of turning diverse knowledge sources into usable AI context, accelerating skill and RAG pipeline creation.

  _Another tool promising to eliminate context-switching by creating yet another place to manage context._

  `context-engineering` `ai-skills` `mcp`
  </details>

- **[QAnything](https://github.com/netease-youdao/qanything)** `⭐ 14k` `updated >1y` QAnything is a local, self-hosted knowledge base question-answering system that ingests files and web links to provide offline document retrieval and Q&A. <details><summary>More about</summary>

  Developers can deploy it locally to index technical documentation, codebases, and internal knowledge without sending data to external LLM APIs.

  _Finally, a way to ask your 400-page PDF specifications questions, while quietly wondering if the real RAG was the context tokens we burned along the way._

  `rag` `local-ai` `knowledge-base` `document-qa`
  </details>

- **[reme](https://github.com/agentscope-ai/reme)** `⭐ 3.5k` `updated ≤30d` A local-first memory management layer that transforms agent conversations and resources into searchable, editable Markdown files. <details><summary>More about</summary>

  It provides a persistent, human-readable knowledge base that allows AI agents to retain context, project decisions, and workflow experience across sessions.

  _Now you have to manage your agent's long-term memory like you're organizing a chaotic personal wiki._

  `agent-memory` `markdown` `rag` `local-first` `knowledge-base`
  </details>

- **[PromptSource](https://github.com/bigscience-workshop/promptsource)** `⭐ 3k` `updated >1y` Toolkit for creating, sharing and using natural language prompts with a public pool of 2000+ prompts for 170+ datasets. <details><summary>More about</summary>

  Developers can programmatically apply and manage prompts for NLP datasets, enabling consistent zero-shot and few-shot experimentation.

  _Finally, a way to turn your dataset into a prompt zoo where every example gets its own Jinja2 circus act._

  `prompt-engineering` `nlp` `datasets` `jinja2` `huggingface`
  </details>

- **[cocoindex-io/cocoindex-code](https://github.com/cocoindex-io/cocoindex-code)** `⭐ 2.7k` `updated ≤30d` A lightweight AST-based semantic code search CLI that optimizes context for coding agents by reducing token usage. <details><summary>More about</summary>

  It helps developers and coding agents work faster by providing precise, token-efficient code search and retrieval for large codebases.

  _Finally, a tool that lets your AI assistant find the right code without burning through your entire context window on irrelevant files._

  `code-search` `ast` `context-engineering` `token-optimization` `mcp`
  </details>

- **[alexgreensh/token-optimizer](https://github.com/alexgreensh/token-optimizer)** `⭐ 2.3k` `updated ≤30d` A utility for identifying 'ghost tokens' and managing context compaction to prevent quality decay in AI coding assistants. <details><summary>More about</summary>

  It helps developers reduce token costs and maintain high-quality model reasoning by optimizing how context is packed into long-running agent sessions.

  _Because managing the entropic decay of a context window is now a legitimate part of the software development lifecycle._

  `token-optimization` `context-engineering` `claude-code` `cost-reduction` `agent-skills`
  </details>

- **[doobidoo/mcp-memory-service](https://github.com/doobidoo/mcp-memory-service)** `⭐ 1.9k` `updated ≤30d` Open-source persistent memory service with REST API and knowledge graph for AI agent pipelines. <details><summary>More about</summary>

  Provides shared, low-latency memory across agent frameworks without cloud lock-in or custom infrastructure glue.

  _Finally, a way to make your agents remember your architecture decisions so you don’t have to re-explain them in every new chat._

  `agent-memory` `knowledge-graph` `mcp` `self-hosted`
  </details>

- **[SolidGPT](https://github.com/ai-citizen/solidgpt)** `⭐ 1.8k` `updated >1y` An AI searching assistant that provides semantic search and context retrieval across local codebases and Notion workspaces. <details><summary>More about</summary>

  It reduces context switching by allowing developers to query their codebase and project documentation through a single semantic interface.

  _Because nothing says 'I've lost my grip on the architecture' like needing an LLM to tell you where you wrote that one specific function three months ago._

  `semantic-search` `rag` `vscode-extension` `context-retrieval` `knowledge-management`
  </details>

- **[CAG](https://github.com/hhhuang/cag)** `⭐ 1.5k` `updated >1y` Cache-Augmented Generation (CAG) is a retrieval-free alternative to RAG that preloads knowledge into a model's context and caches runtime parameters for faster, more reliable inference. <details><summary>More about</summary>

  It offers developers a simpler, lower-latency approach to augmenting LLMs with external knowledge by eliminating real-time retrieval steps while maintaining context relevance.

  _Finally, a way to avoid the existential dread of watching your RAG pipeline spin up another vector search just to answer a simple question._

  `cag` `rag-alternative` `context-augmentation` `llm-optimization`
  </details>

- **[ref-tools-mcp](https://github.com/ref-tools/ref-tools-mcp)** `⭐ 1.1k` `updated ≤90d` An MCP server that provides AI coding tools with token-efficient access to documentation through agentic search and targeted content retrieval. <details><summary>More about</summary>

  It reduces context rot and API costs by fetching only the most relevant documentation snippets instead of dumping entire pages into the model's context window.

  _We have successfully built infrastructure to solve the problem of our previous infrastructure making our models dumber by feeding them too much infrastructure documentation._

  `mcp` `documentation` `context-engineering` `token-efficiency`
  </details>

- **[Mibayy/token-savior](https://github.com/mibayy/token-savior)** `⭐ 1.1k` `updated ≤90d` An MCP server that optimizes AI coding agent performance through Bash output compaction, structural code navigation, and persistent memory. <details><summary>More about</summary>

  It significantly reduces token consumption and latency in agentic workflows while improving task success rates by cleaning up the context sent to the model.

  _Nothing says 'I've lost control of my context window' like needing a specialized savior just to stop Claude from drowning in its own bash history._

  `mcp` `token-optimization` `context-management` `coding-agents` `bash-compaction`
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

- **[codeabra/iai-personal-memory-engine](https://github.com/codeabra/iai-personal-memory-engine)** `⭐ 859` `updated ≤30d` A local memory server that provides long-term, verbatim conversation recall for Claude and other MCP-compatible assistants. <details><summary>More about</summary>

  It removes the need to manually remind assistants of previous context by automatically capturing and injecting relevant historical conversation slices into new sessions.

  _The relief of not having to say 'remember that thing from three days ago' is slightly offset by the anxiety of a local database recording every single prompt you've ever sent._

  `claude-code` `context-engineering` `local-ai` `long-term-memory` `mcp` `memory` `retrieval`
  </details>

- **[Contexto](https://github.com/ekailabs/contexto)** `⭐ 620` `updated ≤180d` A context engine that stores full episodic memory for long-running AI agents and retrieves forgotten constraints instead of letting them be compacted away. <details><summary>More about</summary>

  It lets developers keep agents reliable across long sessions without prompt hacks, by recovering original instructions and decisions that default context-window compaction would otherwise summarize into oblivion.

  _It is oddly dystopian that we now pay for external episodic memory so our agents can remember not to delete emails after thirty turns._

  `context-engine` `memory` `retrieval` `openclaw` `agents`
  </details>

- **[SwarmVault](https://github.com/swarmclawai/swarmvault)** `⭐ 620` `updated ≤90d` A local-first CLI tool that compiles docs, code, and notes into a persistent knowledge graph and RAG knowledge base, designed to serve as durable memory for coding agents like Claude Code and Codex. <details><summary>More about</summary>

  It gives developers a way to build a persistent, token-bounded context layer on disk that agents can query, reducing the friction of re-explaining codebases and domain knowledge across sessions.

  _Just what the modern developer needs: another offline wiki to maintain so their AI can finally remember why that one hack was introduced six months ago._

  `agent-memory` `rag` `knowledge-graph` `local-first` `context`
  </details>

- **[dr-doc-search](https://github.com/namuan/dr-doc-search)** `⭐ 598` `updated >1y` A Python CLI and web app that indexes PDF books using LangChain and OpenAI/HuggingFace embeddings to enable conversational Q&A over document content. <details><summary>More about</summary>

  It provides a reusable pattern for building local document-indexing pipelines that developers can adapt for internal docs, wikis, or proprietary knowledge bases.

  _Yet another reminder that in 2023 we decided the best way to read a book is to pay a language model to summarize it for us one question at a time._

  `langchain` `rag` `pdf` `cli` `huggingface`
  </details>

- **[Caura](https://github.com/caura-ai/caura)** `⭐ 487` `updated ≤30d` Caura is a governed shared memory layer for AI agent fleets that enables multi-agent knowledge sharing, retrieval, and self-improving recall under trust tiers and audit trails. <details><summary>More about</summary>

  It solves the fragmentation of agent learning by turning individual interactions into compounding fleet intelligence, reducing redundant mistakes and token waste.

  _Finally, a way to make your agents stop relearning the same thing while you pretend governance isn’t just another layer of YAML to debug._

  `agent-memory` `multi-agent` `mcp` `knowledge-graph` `rag`
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

- **[GPT Runner](https://github.com/nicepkg/gpt-runner)** `⭐ 383` `updated >1y` A local CLI, web UI, and VSCode extension for managing AI presets and chatting with selected code files using OpenAI or Anthropic models. <details><summary>More about</summary>

  It lets teams version-control reusable AI prompt presets as .gpt.md files and avoids the manual copy-paste workflow when discussing code with LLMs.

  _We have finally solved the ancient engineering problem of copying code into a browser tab and pasting it back, provided you also maintain yet another config file format._

  `prompt-presets` `vscode-extension` `cli` `context-management`
  </details>

- **[AgentMark](https://github.com/agentmark-ai/agentmark)** `⭐ 352` `updated ≤90d` AgentMark is an open-source platform for managing, running, and evaluating AI agent prompts defined in Markdown files, with OpenTelemetry tracing and SDK adapters. <details><summary>More about</summary>

  It gives developers a version-controlled, type-safe workflow to iterate on prompts, run experiments against datasets, and trace LLM calls across local and cloud environments.

  _You now have a Markdown dialect, a custom CLI, and a telemetry pipeline just to ask a model how long shipping takes._

  `prompt-management` `evals` `observability` `mdx` `agents`
  </details>

- **[second-brain-agent](https://github.com/flepied/second-brain-agent)** `⭐ 313` `updated ≤180d` An AI agent designed for personal knowledge management that indexes markdown files, PDFs, and web content to enable interactive retrieval. <details><summary>More about</summary>

  It automates the indexing of fragmented personal data and provides an MCP server to inject that context directly into other AI workflows.

  _Because nothing says productivity like building a complex automated system to manage the notes you'll never actually read._

  `pkm` `mcp` `knowledge-management` `automation`
  </details>

- **[Llama-github](https://github.com/jetxu-llm/llama-github)** `⭐ 292` `updated ≤90d` llama-github is a Python library that enables LLM chatbots, AI agents, and auto-dev solutions to perform Agentic RAG by retrieving relevant code snippets, issues, and repository information from GitHub. <details><summary>More about</summary>

  It streamlines development by augmenting AI agents with context-rich GitHub data, reducing the time spent searching for relevant code examples or repository insights.

  _Now your AI agent can drown in GitHub issues just like you do._

  `python-library` `github-rag` `agentic-retrieval` `code-context` `llm-integration`
  </details>

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

- **[omega-memory/omega-memory](https://github.com/omega-memory/omega-memory)** `⭐ 189` `updated ≤90d` A local-first persistent memory system that provides cross-model semantic memory, knowledge graphs, and MCP server integration for AI coding agents like Claude, Cursor, and Windsurf. <details><summary>More about</summary>

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

- **[langfuse/mcp-server-langfuse](https://github.com/langfuse/mcp-server-langfuse)** `⭐ 169` `updated >1y` An MCP server that exposes Langfuse prompts for discovery, retrieval, and compilation via the Model Context Protocol in clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It lets developers centralize prompt management in Langfuse and surface those prompts directly inside their MCP-compatible coding assistants.

  _Because nothing says streamlined engineering like running a dedicated protocol server just to paste your meticulously versioned prompt templates into Claude Desktop._

  `mcp` `prompt-management` `langfuse` `developer-tools`
  </details>

- **[0xshellming/mcp-summarizer](https://github.com/0xshellming/mcp-summarizer)** `⭐ 167` `updated >1y` An MCP server that uses Google's Gemini 1.5 Pro to generate summaries for text, web pages, PDFs, and EPUBs. <details><summary>More about</summary>

  It enables AI coding assistants to consume long-form documentation and books through standardized summarization tools.

  _Because reading long documentation was too hard, now your LLM can just summarize the chaos for you._

  `mcp` `summarization` `gemini` `productivity` `content-processing`
  </details>

- **[ai-distiller](https://github.com/janreges/ai-distiller)** `⭐ 165` `updated ≤180d` AI Distiller is an open-source CLI tool that compresses large codebases into AI-friendly context by extracting only essential public APIs, types, and structure, reducing volume by 90–98%. <details><summary>More about</summary>

  It solves the problem of AI assistants hallucinating or guessing interfaces in large codebases by providing distilled, dependency-aware context that fits within model limits.

  _Finally, a way to stop your AI from writing code that compiles in its dreams but explodes in your repo._

  `context-compression` `code-distillation` `mcp-server` `cli-tool` `multi-language`
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

## Incubating

_These are new or low-traffic entries being watched._

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

- **[DomDemetz/claude-soul](https://github.com/domdemetz/claude-soul)** `⭐ 89` `updated ≤180d` A self-correcting memory and behavioral tracking engine for Claude Code that provides cross-session persistence via local SQLite and semantic search. <details><summary>More about</summary>

  It solves the 'amnesia' problem in terminal-based coding agents by allowing them to remember past decisions, user corrections, and project context across sessions.

  _Nothing says 'cutting edge' like attempting to cultivate a stable personality for a CLI tool that might be superseded by a new model release tomorrow._

  `claude-code` `memory` `mcp` `local-ai` `context-engineering`
  </details>

- **[decisionnode/DecisionNode](https://github.com/decisionnode/decisionnode)** `⭐ 83` `updated ≤180d` A CLI and local MCP server providing a shared, semantically queryable structured memory store for AI coding assistants like Claude Code, Cursor, and Windsurf. <details><summary>More about</summary>

  It lets developers and their AI assistants persist, retrieve, and reason over architectural decisions and constraints across projects without stuffing everything into the context window.

  _Finally, a way to make your AI remember why you did that thing you can’t remember doing._

  `mcp` `memory` `semantic-search` `developer-tools` `context-engineering`
  </details>

- **[Necmttn/ax](https://github.com/necmttn/ax)** `⭐ 83` `updated ≤90d` A local-first observability and memory layer that uses a typed graph to record and learn from agent sessions. <details><summary>More about</summary>

  It prevents AI coding agents from repeating the same mistakes by turning session transcripts into structured, reviewable learning loops.

  _Now you can finally quantify exactly how many tokens you've wasted on an agent that forgets it failed the same command five minutes ago._

  `agent-memory` `observability` `claude-code` `local-first` `typescript`
  </details>

- **[teolex2020/AuraSDK](https://github.com/teolex2020/aura-memory)** `⭐ 73` `updated ≤90d` AuraSDK is a local, pure-Rust cognitive memory runtime that adds durable, sub-millisecond recall, governed correction, and self-adaptation to frozen AI models without cloud training or fine-tuning. <details><summary>More about</summary>

  It gives developers a lightweight, offline-first way to add structured, inspectable memory and bounded recall reranking to any agent or model runtime with a simple Python SDK.

  _Because your agent still can’t ship a clean PR, but now it will remember every time you told it to deploy to staging first._

  `local-ai` `memory` `offline` `rust` `sdk`
  </details>

- **[cdeust/Cortex](https://github.com/cdeust/cortex)** `⭐ 71` `updated ≤30d` Persistent memory system for Claude Code that uses computational neuroscience mechanisms to consolidate, retrieve, and reconstruct project context. <details><summary>More about</summary>

  Solves the 'amnesiac assistant' problem by giving Claude Code a living, evolving memory of your project decisions, debugging sessions, and architectural choices.

  _Finally, an AI that remembers you told it to use event sourcing instead of CRUD—until the next major version, anyway._

  `claude-code` `memory-system` `mcp-server` `context-engineering` `local-first`
  </details>

- **[pi-mem](https://github.com/jo-inc/pi-mem)** `⭐ 70` `updated ≤90d` A Markdown-based persistent memory system that provides long-term facts, daily logs, and semantic search for AI coding agents. <details><summary>More about</summary>

  It gives agents a durable, searchable memory layer to prevent context loss and maintain continuity across different coding sessions.

  _Because nothing says 'high-velocity developer' like managing a markdown-based diary for your autonomous coding agent._

  `memory` `context-management` `markdown` `coding-agents`
  </details>

- **[aitytech/agentkits-memory](https://github.com/aitytech/agentkits-memory)** `⭐ 64` `updated ≤1y` A persistent, local memory system for AI coding assistants implemented as an MCP server. <details><summary>More about</summary>

  It allows coding assistants like Claude Code and Cursor to retain context, decisions, and patterns across different coding sessions.

  _Because apparently, we've reached a point where our primary struggle is that our AI partners have the long-term memory of a goldfish._

  `mcp` `local-ai` `memory` `coding-assistants` `sqlite`
  </details>

- **[Battam1111/Myco](https://github.com/battam1111/myco)** `⭐ 63` `updated ≤90d` A living cognitive substrate for AI agents that ingests, digests, and evolves knowledge as a filesystem-based graph of markdown and YAML. <details><summary>More about</summary>

  It solves the problem of AI agents forgetting context, decisions, and evolving knowledge by providing a self-maintaining, agent-driven memory and retrieval system.

  _Finally, an AI tool that promises to remember your work longer than you do._

  `agent-memory` `self-evolving` `knowledge-graph` `mcp` `cognitive-substrate`
  </details>

- **[Memory-Plus](https://github.com/yuchen20/memory-plus)** `⭐ 56` `updated >1y` Memory-Plus is a local RAG memory store that enables MCP agents to record, retrieve, update, and visualize persistent session memories. <details><summary>More about</summary>

  It gives developers a simple way to make AI coding assistants retain context across sessions, reducing repetitive re-explanation.

  _Another tool promising your AI will finally remember you—until it forgets where it saved the memory._

  `memory` `mcp` `rag` `context`
  </details>

- **[PatrickSys/codebase-context](https://github.com/patricksys/codebase-context)** `⭐ 55` `updated ≤180d` A local-first MCP server and CLI that maps a codebase's architecture, patterns, and conventions to give AI agents a preflight context map before they start searching or editing. <details><summary>More about</summary>

  It stops agents from wasting tokens wandering through generic examples by showing them the team's actual patterns, golden files, and architectural layers first.

  _One more layer of infrastructure to ensure your AI agent understands your repo well enough to generate code that still somehow ignores the conventions you just mapped for it._

  `mcp` `context-engineering` `local-first` `semantic-search` `codebase-mapping`
  </details>

- **[agent-toolkit](https://github.com/video-db/agent-toolkit)** `⭐ 47` `updated ≤180d` An open-source agent toolkit that auto-syncs SDK versions, docs, and examples for LLMs and AI agents, with MCP and llms.txt integration for VideoDB. <details><summary>More about</summary>

  It reduces context drift in AI coding workflows by keeping LLM-facing documentation and SDK examples up to date automatically.

  _Another tool to manage the metadata your AI agents need to not hallucinate about your own stack._

  `mcp` `llms-txt` `context-engineering` `video-db`
  </details>

- **[PromptSite](https://github.com/dkuang1980/promptsite)** `⭐ 46` `updated >1y` PromptSite is a lightweight Python package for version controlling, tracking, and experimenting with LLM prompts. <details><summary>More about</summary>

  It helps developers manage prompt iterations, track executions, and debug LLM outputs without heavy infrastructure.

  _Finally, a way to version your prompts so you can stop pretending your latest tweak was definitely better._

  `prompt-management` `llm-workflows` `version-control` `python`
  </details>

- **[roampal-ai/roampal-core](https://github.com/roampal-ai/roampal-core)** `⭐ 46` `updated ≤180d` An outcome-based persistent memory MCP server for Claude Code and OpenCode that scores and promotes useful advice while demoting bad advice. <details><summary>More about</summary>

  It gives coding assistants a memory system that learns from outcomes rather than just ingesting context, aiming to improve relevance over time.

  _Now your AI can accumulate a lifelong record of its own bad takes and demote them, provided you're willing to run yet another MCP server to make that happen._

  `mcp` `memory` `claude-code` `context` `persistent-memory`
  </details>

- **[tstockham96/engram](https://github.com/tstockham96/engram)** `⭐ 45` `updated ≤180d` Universal memory layer for AI agents that stores memories in a local SQLite knowledge graph with semantic vector search and LLM-powered consolidation. <details><summary>More about</summary>

  It replaces flat markdown memory files like CLAUDE.md with a structured, cross-project knowledge graph that claims 80% recall accuracy on long-conversation benchmarks while cutting token usage by 44% compared to manual summaries.

  _Because apparently a multi-billion-parameter language model still needs a separate SQLite database and a 'sleep cycle' to remember where you put your utility functions._

  `memory` `knowledge-graph` `mcp` `consolidation` `sqlite`
  </details>

- **[Abhigyan-Shekhar/Waggle-mcp](https://github.com/abhigyan-shekhar/waggle-mcp)** `⭐ 42` `updated ≤30d` Local-first MCP server that adds persistent graph-backed memory to coding agents, storing decisions, contradictions, and reasoning chains across sessions. <details><summary>More about</summary>

  Eliminates context-window amnesia by retaining not just facts but the relationships between them (decisions, reasons, contradictions) in a queryable knowledge graph that survives session restarts.

  _Now you can have the awkward 'but you said three weeks ago' argument with your AI assistant, complete with timestamped receipts and contradiction graphs._

  `mcp-server` `memory` `knowledge-graph` `local-first` `context-retrieval`
  </details>

- **[nex-as-a-skill](https://github.com/nex-crm/nex-as-a-skill)** `⭐ 41` `updated ≤180d` Nex is a knowledge graph and memory layer that unifies AI agent conversations across tools like Claude Code, Cursor, and Slack, distributed as a CLI and a set of slash commands, rules, and plugins for supported platforms. <details><summary>More about</summary>

  It lets teams persist and recall context across different AI coding assistants and workplace tools so agents get smarter the more the team works.

  _We have officially reached the point where your AI agents need their own CRM to remember who Maria Rodriguez is and why she has a Q3 budget._

  `memory` `context` `mcp` `knowledge-graph` `cli`
  </details>

- **[pi-reflect](https://github.com/jo-inc/pi-reflect)** `⭐ 38` `updated ≤90d` A tool for AI agents to iteratively improve their behavioral rules, memory, and personality files by analyzing session transcripts. <details><summary>More about</summary>

  It automates the tedious task of manually updating agent instructions and long-term memory as developer workflows and requirements evolve.

  _There is a specific brand of existential dread in watching an agent's SOUL.md file undergo surgical edits to correct its personality._

  `agent-reflection` `context-engineering` `memory-management` `self-improvement`
  </details>

- **[nicholasbester/clickup-cli](https://github.com/nicholasbester/clickup-cli)** `⭐ 37` `updated ≤90d` A CLI for the ClickUp API that compresses API responses into token-efficient output optimized for AI agents and human users. <details><summary>More about</summary>

  It reduces ClickUp API responses from ~12,000 tokens to ~150 tokens by default, preventing AI agents from exhausting their context windows on nested JSON.

  _We have finally reached the point where we need a specialized CLI to stop our AI assistants from drowning in the JSON output of our project management tools._

  `cli` `clickup` `context-engineering` `token-efficiency` `api`
  </details>

- **[vezlo/src-to-kb](https://github.com/vezlo/src-to-kb)** `⭐ 37` `updated ≤1y` Converts source code into a searchable knowledge base with MCP server support for Claude Code and Cursor integration. <details><summary>More about</summary>

  Enables developers to query and navigate their own codebase using natural language via local or external AI-powered search.

  _Finally, a way to feel smart while asking an AI where you put that one utility function three sprints ago._

  `code-search` `knowledge-base` `mcp`
  </details>

- **[memi](https://github.com/sarveshsea/memi)** `⭐ 34` `updated ≤90d` memi is a CLI and daemon that exports design tokens and components from Tailwind apps into shadcn-native registries for AI coding agents. <details><summary>More about</summary>

  It gives AI coding agents memory of a project's design system so they can edit code without breaking UI consistency.

  _Finally, a way to make AI feel less like a bull in a china shop and more like a designer who actually read the style guide._

  `agent-skills` `ai-agents` `cli` `design-ci` `design-system` `mcp` `shadcn` `tailwind`
  </details>

- **[memem](https://github.com/tt-wang/memem)** `⭐ 33` `updated ≤90d` A Claude Code plugin that gives Claude persistent memory across sessions by mining lessons from completed transcripts, storing them as markdown in an Obsidian vault, and retrieving relevant context via SQLite FTS5. <details><summary>More about</summary>

  Saves developers from re-explaining project context every new Claude Code session by automatically building a queriable, self-evolving memory layer that lives entirely on their own machine.

  _Now your AI assistant needs a notes app to remember what you told it yesterday, and somehow that notes app is also a SQLite database inside another notes app._

  `claude-code` `memory` `obsidian` `local-first` `context-retrieval`
  </details>

- **[code-collator](https://github.com/tawandakembo/code-collator)** `⭐ 28` `updated >1y` A CLI tool that aggregates an entire codebase into a single Markdown file for easy sharing with AI assistants like ChatGPT or Claude. <details><summary>More about</summary>

  It reduces the friction of pasting code into prompts by packaging repos into a format optimized for LLM context windows.

  _We have now automated the tedious human task of Ctrl+A, Ctrl+C, and Ctrl+V, proving that if a workflow is painful enough, someone will write a pip install to do it for you._

  `cli` `context-packing` `codebase-analysis`
  </details>

- **[Hypersigil](https://github.com/hypersigilhq/hypersigil)** `⭐ 27` `updated ≤180d` Prompt management gateway with a UI for centralizing, testing, and deploying prompts across multiple AI providers. <details><summary>More about</summary>

  Enables teams to iterate on AI workflows without code redeployments, bridging domain expertise and AI implementation.

  _Finally, a way to hot-swap prompts like you hot-swap your existential dread about prompt drift._

  `prompt-management` `multi-provider` `llm-gateway` `collaboration` `prompt-engineering`
  </details>

- **[kael-bit/engram-rs](https://github.com/kael-bit/engram-rs)** `⭐ 27` `updated ≤1y` Memory engine for AI agents with time-based decay/promotion and self-organizing topic trees, implemented as a single Rust binary with SQLite storage. <details><summary>More about</summary>

  It solves the core problem of agent memory management by automatically surfacing important knowledge, forgetting noise, and organizing related context without manual tagging.

  _Finally, an agent memory system that remembers your deployment checklist but forgets your existential crisis._

  `ai-memory` `rust` `sqlite` `agent-context` `mcp-server`
  </details>

- **[markmhendrickson/neotoma](https://github.com/markmhendrickson/neotoma)** `⭐ 27` `updated ≤90d` Neotoma is a local-first, deterministic state layer for AI agents that stores versioned, replayable records across sessions and tools via MCP. <details><summary>More about</summary>

  It solves the cross-session memory problem by giving agents a shared, auditable entity graph instead of forcing developers to re-prompt context every time they switch tools.

  _You now have to maintain a deterministic memory ledger for your agents, because apparently the irony of needing perfect recall to manage your forgetful AI helpers is just the next layer of the stack._

  `agent-memory` `mcp` `deterministic-state` `local-first`
  </details>

- **[pomazanbohdan/memory-mcp-1file](https://github.com/pomazanbohdan/memory-mcp-1file)** `⭐ 26` `updated ≤180d` A self-contained, pure Rust MCP server that provides persistent, semantic, and graph-based memory for AI agents using an embedded database and local ONNX runtime. <details><summary>More about</summary>

  It gives coding agents and IDEs a local, zero-setup memory layer that survives session restarts and context window compaction without requiring external databases or cloud APIs.

  _Another heroic attempt to solve the statelessness of AI agents by turning a single binary into a persistent brain, ensuring your tools remember what you were doing right up until they inevitably forget anyway._

  `mcp` `memory` `rust` `local-first` `context`
  </details>

- **[kerbelp/metatron](https://github.com/kerbelp/metatron)** `⭐ 23` `updated ≤90d` A self-hosted system that captures codebase implementation decisions and serves them to coding agents via the Model Context Protocol. <details><summary>More about</summary>

  It allows coding agents to respect specific team conventions and avoid previously rejected approaches by providing structured codebase memory.

  _Your agent will finally possess the 'senior engineer' persona, meaning it can now use your own past architectural mistakes to argue against your current PRs._

  `mcp` `context-engineering` `self-hosted` `agentic-workflow`
  </details>

- **[promptext](https://github.com/1broseidon/promptext)** `⭐ 22` `updated ≤180d` A CLI tool that extracts and optimizes codebase context into token-efficient formats for LLMs. <details><summary>More about</summary>

  It solves the tedious process of manually selecting relevant files and managing token budgets when feeding large repositories into AI assistants.

  _Finally, a way to precisely calculate exactly how much money you're wasting on context windows before you hit 'end'._

  `cli` `context-management` `token-optimization` `codebase-analysis` `golang`
  </details>

- **[gzoonet/cortex](https://github.com/gzoonet/cortex)** `⭐ 21` `updated ≤30d` Local-first knowledge graph for developers that watches project files, builds a knowledge graph with LLMs, and allows natural language queries across projects. <details><summary>More about</summary>

  It helps developers retrieve scattered decisions, patterns, and context across multiple projects without manually searching through files.

  _Now you can finally remember why you chose that caching strategy six months ago—assuming the LLM doesn’t hallucinate the answer._

  `knowledge-graph` `local-first` `mcp` `context-retrieval` `developer-tools`
  </details>

- **[m1nd](https://github.com/maxkle1nz/m1nd)** `⭐ 21` `updated ≤90d` A neuro-symbolic code graph and shell that provides memory, trust, and reasoning capabilities to coding agents via MCP. <details><summary>More about</summary>

  It attempts to solve the 'blind agent' problem by providing a persistent, graph-based memory layer that helps AI assistants understand code relationships and changes over time.

  _Because why just let your agent guess when you can provide it with a high-fidelity neuro-symbolic graph of your entire codebase to hallucinate within?_

  `mcp` `coding-agents` `graph-memory` `local-first` `ai-infrastructure`
  </details>

- **[sequa-ai/sequa-mcp](https://github.com/sequa-ai/sequa-mcp)** `⭐ 21` `updated ≤1y` An MCP server that connects AI coding assistants to Sequa's hosted contextual knowledge engine to provide always-current codebase documentation and internal standards. <details><summary>More about</summary>

  It aims to automatically keep documentation in sync with code changes so that AI assistants like Cursor and Claude stop writing code based on stale architectural assumptions.

  _We've reached the point where we need an AI tool to fix the documentation drift caused by the speed of AI code generation, completing the 'AI writes code, AI writes docs, AI reads docs' ouroboros._

  `mcp` `documentation` `context` `knowledge-base`
  </details>

- **[sgx-labs/statelessagent](https://github.com/sgx-labs/statelessagent)** `⭐ 21` `updated ≤180d` A local-first MCP server that gives AI coding agents persistent memory by indexing markdown notes and surfacing relevant context across sessions. <details><summary>More about</summary>

  Developers can stop re-explaining project decisions to Claude Code, Cursor, and Windsurf every time a session restarts.

  _We have finally solved the AI memory problem by building yet another local binary that indexes our markdown notes so the robot can remember why we chose JWT three weeks ago._

  `mcp` `memory` `local-first` `context` `cli`
  </details>

- **[Agent Shadow Brain](https://github.com/theihtisham/agent-shadow-brain)** `⭐ 20` `updated ≤180d` A local-first shared memory and context system that acts as a singleton brain for multiple AI coding agents, injecting briefings, causal memory chains, and task context across tools like Claude Code, Cursor, and Cline. <details><summary>More about</summary>

  It attempts to solve the problem of agents starting from zero each session by sharing learned context, sub-agent state, and decision history across your entire local AI toolchain.

  _You now have a singleton brain for your agents, which means they can all forget things together in perfect, cryptographically signed harmony._

  `local-first` `memory` `multi-agent` `context` `mcp`
  </details>

- **[bshea-1/Routed](https://github.com/bshea-1/routed)** `⭐ 20` `updated ≤30d` A local hybrid search engine that routes coding prompts to specific agent skills to minimize context pollution and token costs. <details><summary>More about</summary>

  It enables developers to use large, specialized skill sets in their AI assistants without overwhelming the model's context window or increasing latency.

  _Another layer of middleware to debug when your agent suddenly forgets how to write Python because of a BM25 weighting error._

  `mcp` `prompt-routing` `local-ai` `context-management` `agent-skills`
  </details>

- **[GetCacheOverflow/CacheOverflow](https://github.com/getcacheoverflow/cacheoverflow)** `⭐ 19` `updated ≤1y` A distributed knowledge base for AI agents to share, discover, and publish verified technical solutions. <details><summary>More about</summary>

  It aims to reduce redundant debugging by allowing agents to retrieve proven solutions from a shared, human-verified repository.

  _Finally, a way for our agents to crowdsource the answers to the bugs we're too tired to fix ourselves._

  `mcp-server` `agent-knowledge-base` `ai-collaboration` `developer-tools`
  </details>

- **[celiums-memory](https://github.com/terrizoaguimor/celiums-memory)** `⭐ 18` `updated ≤180d` An open-source MCP server that provides AI coding assistants like Claude Code and Cursor with persistent memory, circadian rhythm simulation, and access to 5,100 expert knowledge modules. <details><summary>More about</summary>

  It allows developers to equip their AI assistants with long-term memory and specialized technical knowledge, reducing the friction of re-explaining context across sessions.

  _Your AI now has a circadian rhythm and emotions to process your spaghetti code, but it still won't remember to delete that console.log you asked it to remove three sessions ago._

  `mcp` `memory` `context` `knowledge-base` `typescript`
  </details>

- **[Data Olympus](https://github.com/knaisoma/data-olympus)** `⭐ 18` `updated ≤90d` A governance-grade knowledge base format and single-writer MCP server for managing engineering standards and architectural decisions. <details><summary>More about</summary>

  It helps align AI agents with team-established patterns and decision history by providing a structured, git-native knowledge graph.

  _Because nothing says 'engineering excellence' like managing agent behavior through a strictly governed, version-controlled document graph._

  `mcp` `knowledge-base` `governance` `git-native`
  </details>

- **[vasayxtx/mcp-prompt-engine](https://github.com/vasayxtx/mcp-prompt-engine)** `⭐ 18` `updated ≤180d` MCP Prompt Engine is a Go-based MCP server that serves dynamic prompt templates using Go text/template syntax. <details><summary>More about</summary>

  It lets developers manage and version prompt templates as code, making prompt reuse and dynamic argument injection reliable across MCP clients.

  _Another layer of YAML-adjacent templating to maintain while waiting for the next protocol that makes this obsolete._

  `mcp` `prompt-templates` `go`
  </details>

- **[masondelan/selvedge](https://github.com/masondelan/selvedge)** `⭐ 17` `updated ≤90d` A local MCP server that captures an AI agent's reasoning live as code changes are made, storing structured change events with justifications in a local SQLite database for later audit. <details><summary>More about</summary>

  It solves the 'why did the AI add this' mystery by creating a persistent audit trail of agent reasoning that survives long after the coding session and context window vanish.

  _We have successfully built git blame for hallucinations, so you can now scientifically document exactly when your agent decided to migrate the database at 2 AM for reasons it already forgot._

  `mcp` `memory` `codebase-audit` `agent-trace` `sqlite`
  </details>

- **[20alexl/claude-engram](https://github.com/20alexl/claude-engram)** `⭐ 16` `updated ≤30d` A persistent memory and session intelligence layer that tracks decisions, mistakes, and context via hooks for AI coding assistants like Claude Code. <details><summary>More about</summary>

  It solves the 'context amnesia' problem by automatically mining session histories to prevent repetitive mistakes and inject relevant past decisions into current coding tasks.

  _Finally, a tool to help you realize that 40% of your coding session was just you arguing with the LLM about the same typo._

  `mcp-server` `persistent-memory` `claude-code` `context-management` `session-mining`
  </details>

- **[besslframework-stack/project-tessera](https://github.com/besslframework-stack/project-tessera)** `⭐ 16` `updated ≤180d` Tessera is a local-first, encrypted memory layer for AI assistants with 58 MCP tools and 54 REST endpoints. <details><summary>More about</summary>

  It gives developers persistent, searchable, and self-maintaining memory for AI workflows without external dependencies or infrastructure.

  _Finally, a way to remember what your AI forgot five minutes ago—now with 58 ways to lose the encryption key._

  `memory` `mcp` `local-first` `encryption` `context-engineering`
  </details>

- **[jarvis-orb](https://github.com/thestack-ai/jarvis-orb)** `⭐ 16` `updated ≤180d` A Rust + Tauri desktop app and MCP server that gives Claude Code and other assistants persistent multi-tier memory plus a real-time 3D orb visualization of AI reasoning. <details><summary>More about</summary>

  It solves the classic session-amnesia problem by persisting episodic, semantic, project, and procedural memory across restarts, while making the assistant's internal state visible instead of a black box.

  _You can now watch a glowing orb absorb your contradicted PostgreSQL decisions in real time, just in case the amnesia wasn't metaphysical enough already._

  `mcp` `memory` `visualization` `claude-code` `desktop`
  </details>

- **[AliceLJY/recallnest](https://github.com/aliceljy/recallnest)** `⭐ 15` `updated ≤30d` Local-first shared memory layer for Claude Code, Codex, and Gemini CLI that uses hybrid retrieval (vector + BM25 + knowledge graph) and session continuity to preserve context across terminals. <details><summary>More about</summary>

  It ends the context amnesia of switching between terminal agents by giving Claude Code, Codex, and Gemini CLI a single, self-hosted LanceDB memory store with automatic recall, decay, and cross-session continuity.

  _It is somewhat sobering that we now need a LanceDB knowledge graph with configurable decay algorithms just so three different terminal agents can both remember that the user prefers dark mode._

  `memory-layer` `hybrid-retrieval` `claude-code` `local-first` `knowledge-graph`
  </details>

- **[graphpilot-oss/graphpilot](https://github.com/graphpilot-oss/graphpilot)** `⭐ 15` `updated ≤90d` A local CLI and MCP server that indexes TypeScript/JavaScript repositories into a structural graph for coding agents to query symbols, callers, and call-edges. <details><summary>More about</summary>

  It reduces token spend and hallucinations by providing agents with persistent, structural memory of a codebase's architecture instead of relying on repetitive grep-like file reads.

  _The realization that we are now building sophisticated graph databases just so our agents stop forgetting where a function is called across three files._

  `mcp` `code-analysis` `typescript` `local-ai` `context-window`
  </details>

- **[remembra-ai/remembra](https://github.com/remembra-ai/remembra)** `⭐ 15` `updated ≤90d` A self-hosted memory layer for AI applications that provides persistent storage, entity resolution, and graph-aware recall via Python and TypeScript SDKs and an MCP server. <details><summary>More about</summary>

  It gives developers a way to add durable, cross-session memory to any AI agent or coding assistant without relying on vendor-locked or expensive hosted graph memory services.

  _Finally, your agent can remember Sarah’s email preference forever, even if the rest of your stack has forgotten why you started this project in the first place._

  `memory` `mcp` `self-hosted` `rag` `sdk`
  </details>

- **[SecurityRonin/alaya](https://github.com/securityronin/alaya)** `⭐ 14` `updated ≤90d` Alaya is an embeddable Rust memory engine for conversational AI agents that applies neuroscience-grounded memory dynamics—such as dual-strength forgetting, retrieval-induced suppression, and Hebbian co-activation—to store, retrieve, and decay agent memories using a single SQLite file. <details><summary>More about</summary>

  It replaces flat-file agent memory with typed stores and ranked retrieval, directly addressing the token waste and structural drift that plague agents relying on MEMORY.md-style context dumping.

  _Finally, a memory system sophisticated enough to forget your bad ideas using Buddhist psychology, sparing you the existential weight of explaining to an LLM why you put that auth logic in a controller three months ago._

  `memory` `rust` `embeddable` `mcp-compatible` `neuroscience`
  </details>

- **[Wynelson94/longhand](https://github.com/wynelson94/longhand)** `⭐ 12` `updated ≤90d` Lossless local memory for Claude Code that stores every tool call, file edit, and thinking block verbatim in SQLite for searchable recall. <details><summary>More about</summary>

  It prevents Claude Code's automatic session rotation from erasing developer history, enabling instant retrieval of past decisions and code changes without API calls.

  _Another tool to install just to remember what your AI assistant forgot, because apparently persistence is now a premium feature._

  `claude-code` `local-memory` `mcp-server` `sqlite`
  </details>

- **[Cavinooo/claude-find](https://github.com/cavinooo/claude-find)** `⭐ 11` `updated ≤180d` A semantic search tool that indexes Claude Code session transcripts to provide long-term memory via MCP. <details><summary>More about</summary>

  It allows developers to retrieve specific reasoning, constraints, and past decisions from previous Claude Code sessions to provide richer context for current tasks.

  _Now you can finally search for the exact moment you convinced yourself that a specific architectural mistake was actually a 'feature'._

  `claude-code` `mcp` `semantic-search` `ollama` `memory`
  </details>

- **[JSungMin/vs-token-safer](https://github.com/jsungmin/vs-token-safer)** `⭐ 10` `updated ≤90d` A token-optimized code retrieval layer that uses language server indexes like clangd and Roslyn to provide semantic search for coding agents. <details><summary>More about</summary>

  It prevents coding agents from flooding their context windows with irrelevant code by replacing naive grep searches with precise, symbol-based lookups.

  _Because apparently, even the smartest LLMs can't be trusted to find a function without accidentally reading the entire monorepo._

  `mcp` `context-engineering` `claude-code` `semantic-search` `token-optimization`
  </details>

- **[mnlt/wellread](https://github.com/mnlt/wellread)** `⭐ 9` `updated ≤180d` Collective research memory for AI agents that caches and shares technical research findings to avoid redundant web searches across sessions. <details><summary>More about</summary>

  Drastically reduces token spend and hallucination risk by surfacing prior verified research before the agent hits the web, with semantic caching and freshness-aware re-checking.

  _Your agent will now burn fewer tokens rediscovering the same Stack Overflow answer for the 48th time, while you wonder why we needed a distributed cache to solve what a browser bookmark used to do._

  `mcp` `memory` `caching` `research` `token-optimization`
  </details>

- **[n24q02m/mnemo-mcp](https://github.com/n24q02m/mnemo-mcp)** `⭐ 8` `updated ≤90d` An open-source MCP server providing persistent AI memory with hybrid search, knowledge graphs, and multi-machine sync for coding assistants like Claude Code and Cursor. <details><summary>More about</summary>

  It gives local-first coding agents a structured way to remember preferences, decisions, and facts across sessions without relying on cloud APIs or brittle context windows.

  _We have finally solved the problem of AI assistants forgetting who we are, only to create a dedicated SQLite database to remind them that we still haven't finished that one refactor from three months ago._

  `mcp` `memory` `hybrid-search` `local-first` `context`
  </details>

- **[adrianczuczka/mason](https://github.com/adrianczuczka/mason)** `⭐ 7` `updated ≤30d` A context-building tool that creates persistent codebase concept maps and provides change impact analysis for LLMs. <details><summary>More about</summary>

  It reduces token consumption and improves model accuracy by providing a persistent architectural map that prevents LLMs from re-exploring the same codebase every session.

  _Because why just read a file when you can spend hundreds of tokens building a map of why that file exists in the first place?_

  `context-engineering` `mcp` `cli` `codebase-mapping` `token-optimization`
  </details>

- **[g1itchbot8888-del/agent-memory](https://github.com/g1itchbot8888-del/agent-memory)** `⭐ 7` `updated ≤1y` A local-first memory system for autonomous agents using SQLite and local embeddings. <details><summary>More about</summary>

  It provides a lightweight, private way for agents to maintain continuity across sessions via a three-layer memory architecture (identity, active, and archive).

  _Finally, a way to ensure your agent remembers exactly which hallucination it decided to stick with during the last session._

  `local-ai` `agent-memory` `sqlite` `embeddings` `mcp`
  </details>

- **[hifriendbot/cogmemai-mcp](https://github.com/hifriendbot/cogmemai-mcp)** `⭐ 7` `updated ≤180d` CogmemAi is a portable memory layer that provides persistent recall across sessions for AI systems, including coding assistants, with benchmark-topping accuracy. <details><summary>More about</summary>

  It solves the critical developer pain of AI assistants forgetting context between sessions, automatically capturing and surfacing relevant memories without manual intervention.

  _Finally, an AI that remembers your architectural decisions longer than you do._

  `ai-memory` `mcp-server` `context-engineering` `coding-assistant` `persistent-memory`
  </details>

- **[rushikeshmore/CodeCortex](https://github.com/rushikeshmore/codecortex)** `⭐ 7` `updated ≤180d` A persistent codebase knowledge layer that pre-builds architecture, dependency, coupling, and risk knowledge, exposing it to AI agents via an MCP server and inline context injection. <details><summary>More about</summary>

  It eliminates AI agent cold starts by injecting precomputed structural, semantic, and temporal codebase knowledge directly into agent config files, reducing tool calls and token usage on large codebases.

  _We have successfully reached the point where we need dedicated infrastructure to explain our own code to the AI, because apparently 79K tokens of context window wasn't quite enough to figure out which files are dangerous to touch._

  `mcp` `context-engineering` `codebase-analysis` `rag` `agent-context`
  </details>

- **[conversation-handoff-mcp](https://github.com/trust-delta/conversation-handoff-mcp)** `⭐ 6` `updated ≤90d` MCP server that saves, tags, and transfers conversation context between AI chats and projects. <details><summary>More about</summary>

  Lets developers resume work across different AI sessions or tools without losing context, effectively creating a shared memory layer for CLI and desktop agents.

  _Because each AI chat window starts with a clean slate and a blank stare, and we have somehow made that a server problem._

  `mcp` `context-handoff` `memory` `cross-session`
  </details>

- **[dl4rce/flaiwheel](https://github.com/dl4rce/flaiwheel)** `⭐ 6` `updated ≤30d` Self-hosted memory and governance layer for AI coding agents that indexes documentation, enforces structured knowledge capture, and provides an MCP server for agent integration. <details><summary>More about</summary>

  It turns every bug fix and architectural decision into persistent, searchable knowledge that compounds over time, reducing repeated mistakes in team codebases.

  _Finally, a way to make your AI assistant remember why that one regex exists, instead of re-inventing it every Monday._

  `mcp-server` `self-hosted` `knowledge-management` `ai-memory` `git-native`
  </details>

- **[penfieldlabs/penfield-mcp](https://github.com/penfieldlabs/penfield-mcp)** `⭐ 6` `updated ≤180d` An MCP server that provides persistent memory, knowledge graphs, and context management for AI agents across sessions and tools like Claude, Cursor, and Windsurf. <details><summary>More about</summary>

  It lets developers maintain architectural decisions, investigation threads, and preferences across different AI coding tools without starting every session from zero.

  _You can now pay a subscription so your AI assistant remembers enough context to be disappointed in you all over again tomorrow._

  `mcp` `memory` `context` `knowledge-graph` `persistent-memory`
  </details>

- **[pmptwiki/pmpt-cli](https://github.com/pmptwiki/pmpt-cli)** `⭐ 6` `updated ≤1y` A CLI tool that guides developers through five questions to generate structured AI prompts, then tracks, versions, and publishes the resulting product development journey. <details><summary>More about</summary>

  It standardizes the fragile transition from vague idea to actionable prompt and adds version control for the AI-driven build process itself.

  _We have now achieved version control for the hallucinations that build our apps, ensuring we can forever reproduce exactly how we lost three days to a misunderstood requirements prompt._

  `cli` `prompt-engineering` `version-control` `mcp`
  </details>

- **[ErebusEnigma/context-memory](https://github.com/erebusenigma/context-memory)** `⭐ 5` `updated ≤1y` Persistent, searchable context storage plugin for Claude Code that uses SQLite + FTS5 to maintain memory across sessions. <details><summary>More about</summary>

  Eliminates the need to re-explain context in every new Claude Code session by providing recallable, structured summaries of past work, decisions, and code patterns.

  _Finally, a way to stop pretending you remember why you chose JWT over sessions three months ago._

  `claude-code` `memory` `context` `sqlite` `plugin`
  </details>

- **[foldwork-dev/mcp-injector](https://github.com/foldwork-dev/mcp-injector)** `⭐ 4` `updated ≤90d` A local MCP daemon that compresses codebase context using AST folding to reduce token usage. <details><summary>More about</summary>

  It significantly lowers API costs and improves context relevance by stripping non-essential code structures while preserving essential signatures.

  _Finally, a way to feel like a responsible engineer while watching your Claude API bill plummet._

  `mcp` `context-compression` `token-optimization` `ast` `local-ai`
  </details>

- **[LuizEduPP/rememb](https://github.com/luizedupp/rememb)** `⭐ 4` `updated ≤90d` rememb is a local, zero-config persistent memory system for AI agents that stores project context in a .rememb/ directory and works via MCP with Cursor, Windsurf, and Claude. <details><summary>More about</summary>

  It solves the repetitive context reloading problem in AI-assisted development by giving agents project-scoped memory that survives sessions without requiring cloud services or API keys.

  _Finally, a way to make your AI agent remember your project’s auth strategy without manually re-pasting it every time you start a new chat — until you forget where you put the .rememb folder._

  `memory` `mcp` `context-persistence` `local-ai` `developer-tool`
  </details>

- **[nfemmanuel/iranti](https://github.com/nfemmanuel/iranti)** `⭐ 4` `updated ≤90d` A self-hosted MCP server that provides persistent, identity-based memory infrastructure for multi-agent systems and AI coding tools like Claude Code, Codex CLI, and GitHub Copilot. <details><summary>More about</summary>

  It allows different AI agents to share deterministic state and recall facts across sessions, context resets, and tool switches via a PostgreSQL-backed knowledge store.

  _We have finally built infrastructure to ensure our AI agents never forget yesterday's half-baked refactoring, guaranteeing the same mistakes persist across every tool in the stack._

  `mcp` `memory` `multi-agent` `self-hosted` `context`
  </details>

- **[rdanieli/tentra-mcp](https://github.com/rdanieli/tentra-mcp)** `⭐ 4` `updated ≤180d` Tentra MCP is a memory server providing persistent code graphs and AI architecture diagrams via 32 MCP tools for AI coding agents. <details><summary>More about</summary>

  It gives coding agents long-term structural memory of codebases, reducing context loss and improving agent reasoning across sessions.

  _Another layer to bolt onto your agent stack so your AI can finally remember what it broke five minutes ago._

  `mcp` `memory` `code-graph`
  </details>

- **[TheStack-ai/waypath](https://github.com/thestack-ai/waypath)** `⭐ 4` `updated ≤90d` A local-first CLI and MCP server that gives coding agents like Claude Code and Codex persistent, graph-aware memory backed by a single SQLite database with promotion and review governance. <details><summary>More about</summary>

  It lets developers maintain a canonical, reviewable memory layer across sessions without relying on cloud services or vector blobs that silently hallucinate.

  _We have ascended from prompting assistants to carefully reviewing and promoting the memories of our assistants so they do not forget the architectural crimes we committed last Tuesday._

  `memory` `mcp` `local-first` `cli` `context`
  </details>

- **[abnegate/magents](https://github.com/abnegate/magents)** `⭐ 3` `updated ≤30d` A shared session bus and MCP server that enables context and session handoffs between different coding assistants. <details><summary>More about</summary>

  It allows developers to move tasks between agents like Claude Code and Cursor without the need for manual context re-entry or repetitive explanations.

  _Because why manually copy-paste context when you can let a middleware layer handle your multi-agent identity crisis?_

  `mcp` `context-management` `session-handoff` `coding-agents`
  </details>

- **[AlekseiMarchenko/central-intelligence](https://github.com/alekseimarchenko/central-intelligence)** `⭐ 3` `updated ≤180d` Persistent memory system for AI agents that integrates with MCP-compatible tools like Claude Code and Cursor. <details><summary>More about</summary>

  Eliminates the need to re-teach agents about your codebase, preferences, or architecture across sessions by providing long-term, searchable memory.

  _Finally, an answer to the existential dread of your AI forgetting your entire project context every time you close the terminal._

  `mcp` `memory` `context-engineering` `ai-agents` `persistent-context`
  </details>

- **[Auctalis/nocturnusai](https://github.com/auctalis/nocturnusai)** `⭐ 3` `updated ≤90d` A context engineering engine for AI agents that compresses context, extracts facts, and provides deterministic answers with proof via logical inference. <details><summary>More about</summary>

  It reduces token usage and cost by up to 10x while preserving truth and determinism in agent workflows, addressing the pain of replaying entire conversation histories.

  _Finally, a way to stop your AI from re-reading the entire conversation like a goldfish who forgot where it parked._

  `context-engineering` `deterministic-inference` `token-optimization` `mcp` `knowledge-graph`
  </details>

- **[Thezenmonster/agentmem](https://github.com/thezenmonster/agentmem)** `⭐ 3` `updated ≤180d` A local-first memory system for coding agents like Claude Code and Cursor that adds governance, conflict detection, and trust ranking to stored memories. <details><summary>More about</summary>

  It solves the 'stale context' problem by letting agents track memory lifecycles, detect contradictions, and surface only validated information within token budgets.

  _Now when your AI forgets why it abandoned that architectural pattern in March, you can blame the memory governance score instead of the model._

  `memory` `context` `mcp` `local-first` `governance`
  </details>

- **[a2cr/a2cr](https://github.com/a2cr/a2cr)** `⭐ 2` `updated ≤30d` An MCP server that manages encrypted AI agent handoff states and session checkpoints to enable continuity across different coding assistants. <details><summary>More about</summary>

  It allows developers to resume long coding tasks in fresh context windows by passing compact, actionable state instead of messy, noisy chat transcripts.

  _Because the next logical step in the AI revolution is clearly perfectly documenting the exact moment your agent loses the plot._

  `mcp` `context-management` `agent-handoff` `memory`
  </details>

- **[Alepha188838884/context-firewall](https://github.com/alepha188838884/context-firewall)** `⭐ 2` `updated ≤30d` An MCP proxy that reduces token usage by collapsing tool schemas and compressing large tool outputs. <details><summary>More about</summary>

  It helps developers prevent context window bloat and high token costs when using agents with many MCP tools or massive data payloads.

  _Because paying for 200,000 tokens of raw HTML is a lifestyle choice nobody actually wants to make._

  `mcp` `context-compression` `token-optimization` `proxy`
  </details>

- **[cachly-dev/cachly-mcp](https://github.com/cachly-dev/cachly-mcp)** `⭐ 2` `updated ≤30d` An MCP server that provides persistent memory and semantic search for AI coding assistants by indexing git history and session lessons. <details><summary>More about</summary>

  It automates the process of re-establishing context, preventing developers from having to re-explain architecture or past bug fixes to their AI every session.

  _Because the ultimate solution to AI amnesia is to build a permanent, searchable database of every single mistake you've ever made in a codebase._

  `mcp` `ai-memory` `context-engineering` `developer-tools`
  </details>

- **[GeiserX/lynxprompt-mcp](https://github.com/geiserx/lynxprompt-mcp)** `⭐ 2` `updated ≤30d` An MCP server that exposes LynxPrompt AI configuration blueprints like AGENTS.md and CLAUDE.md to LLMs via the Model Context Protocol. <details><summary>More about</summary>

  It allows AI assistants to programmatically access and manage structured configuration files that define agent behavior and project context.

  _Another layer of abstraction between you and your config files, because clearly, writing a simple markdown file wasn't enough of a ritual._

  `mcp` `mcp-server` `prompt-management` `ai-config` `agent-blueprints`
  </details>

- **[Hivelore](https://github.com/doucs91/hivelore)** `⭐ 2` `updated ≤30d` A policy enforcement layer for AI coding agents that uses repo-native memory to prevent repeating previously identified mistakes. <details><summary>More about</summary>

  It turns transient chat history and team knowledge into deterministic CI/Git gates, preventing agents from confidently re-introducing known anti-patterns.

  _Finally, a way to turn your team's 'don't do that again' Slack messages into a mandatory runtime error for your LLM._

  `ai-agents` `mcp` `ci-cd` `developer-tools` `policy-enforcement`
  </details>

- **[MakeaMouse/fish-bridge-mcp](https://github.com/makeamouse/fish-bridge-mcp)** `⭐ 2` `updated ≤90d` A session-scoped knowledge graph engine that compresses long AI chat histories into compact, typed context summaries automatically ingested by Copilot, Claude Code, and Cursor. <details><summary>More about</summary>

  It slashes token burn by distilling 40k-token sessions into ~350-token graphs, letting developers maintain coherent long-running conversations with coding assistants without hitting context limits or paying to resend full history every turn.

  _You already paid to generate the 40k tokens, and now you need a second AI to summarize them so the first AI can afford to keep talking to you._

  `context-compression` `knowledge-graph` `memory` `cli` `mcp-server`
  </details>

- **[ndjordjevic/pinrag](https://github.com/ndjordjevic/pinrag)** `⭐ 2` `updated ≤180d` A RAG system built with LangChain that exposes multi-format document indexing and citation-based querying as an MCP server for Cursor, VS Code, and other AI assistants. <details><summary>More about</summary>

  It lets developers centralize scattered learning materials—PDFs, GitHub repos, YouTube videos, and Discord threads—into one queryable index that their coding assistant can cite directly inside the editor.

  _We have successfully reached the point where the assistant needs its own assistant just to remember what you watched on YouTube yesterday._

  `rag` `mcp` `langchain` `context` `knowledge`
  </details>

- **[Relay](https://github.com/momobits/relay)** `⭐ 2` `updated ≤180d` Relay is a structured workflow system that adds persistent memory, issue tracking, and phased planning as reusable skills for Claude Code, OpenAI Codex CLI, and Google Gemini CLI. <details><summary>More about</summary>

  It captures decisions, context, and progress in a `.relay/` directory so multi-session AI-assisted development doesn't reset every time you switch models or open a new terminal.

  _Another layer of structured markdown to manage the chaos of AI coding sessions, letting you proudly accumulate technical debt with a full audit trail._

  `memory` `cli` `workflow` `multi-model` `skills`
  </details>

- **[ShipItAndPray/mcp-compress](https://github.com/shipitandpray/mcp-compress)** `⭐ 2` `updated ≤180d` An MCP server that provides 7 tools for compressing, decompressing, analyzing, and storing text, JSON, CSV, and log data using algorithms like brotli, gzip, and deflate, designed to reduce context window usage for AI agents. <details><summary>More about</summary>

  It lets agents shrink large API responses, logs, and docs before they hit the context window, potentially lowering token costs and fitting more data into limited space.

  _We have finally reached the point where our agents need dedicated lossless compression middleware so they can pretend to read 30KB of logs without actually reading 30KB of logs._

  `mcp` `compression` `context-engineering` `data`
  </details>

- **[Cartisien/engram-mcp](https://github.com/cartisien/engram-mcp)** `⭐ 1` `updated ≤180d` MCP server providing persistent semantic memory for AI agents via SQLite storage and local Ollama embeddings. <details><summary>More about</summary>

  Gives MCP-compatible clients like Claude Desktop or Cursor persistent, searchable memory across sessions without cloud dependencies.

  _Now your AI can remember you hate TypeScript, but only if you also remember to run Ollama._

  `mcp` `memory` `semantic-search` `local-ai` `sqlite`
  </details>

- **[claimidx/claimidx](https://github.com/claimidx/claimidx)** `⭐ 1` `updated ≤30d` A public, signed index of software failures and verified fixes designed to prevent AI agents from repeatedly solving the same problems. <details><summary>More about</summary>

  It provides agents with a shared 'failure layer' to retrieve proven remedies, reducing costly and redundant retry loops.

  _The unsettling realization that your agent's primary contribution to the codebase is just paying for mistakes someone else already documented._

  `agent-memory` `mcp` `error-correction` `knowledge-index`
  </details>

- **[peterbeck111/knowledgelib-io](https://github.com/peterbeck111/knowledgelib-io)** `⭐ 1` `updated ≤90d` A structured knowledge library offering pre-verified, cited knowledge units via MCP, REST, and LangChain integrations to reduce token usage and hallucinations in AI agents. <details><summary>More about</summary>

  It gives coding agents and LLM workflows a way to pull canonical, source-cited answers instead of burning tokens on repeated web searches or risking inaccurate outputs.

  _We have reached the point where we are building external brains so our agents do not have to admit they do not know what wireless earbuds cost._

  `mcp` `knowledge-base` `retrieval` `context-engineering` `langchain`
  </details>

- **[16x Prompt](https://prompt.16x.engineer)** 16x Prompt is a desktop application that helps developers compose and manage prompts with source code context for AI coding tasks. <details><summary>More about</summary>

  It streamlines prompt engineering for coding by organizing context, tracking tokens, and integrating with multiple LLM APIs, reducing manual copy-paste workflows.

  _Finally, a tool that lets you spend more time crafting the perfect prompt than actually writing code._

  `prompt-engineering` `context-management` `ai-coding` `desktop-app` `multi-llm`
  </details>

- **[Augments](https://augments.dev)** An MCP server that provides type signatures, prose documentation, and code examples for any npm package. <details><summary>More about</summary>

  It allows coding assistants like Claude Code to access up-to-date, intent-aware documentation for any npm package instead of relying on outdated training data.

  _Nothing says 'developer productivity' like adding another layer of abstraction between you and the actual documentation you used to read yourself._

  `mcp` `npm` `documentation` `context-retrieval` `typescript`
  </details>

- **[cachly.dev](https://cachly.dev)** A memory layer for AI coding assistants that bootstraps a knowledge base from git history to provide context on past fixes and architectural decisions. <details><summary>More about</summary>

  It eliminates the need to manually re-explain codebase architecture and past bugs to AI assistants by automatically indexing git history into a causal knowledge graph.

  _The dream of never explaining your stack again is only possible if you trust a tool to tell your AI exactly why you made that regrettable architectural choice three months ago._

  `mcp` `memory` `git` `context-engineering` `knowledge-graph`
  </details>

- **[Chat Templates](https://huggingface.co/blog/chat-templates)** Chat templates are Jinja-based formatting specifications for converting chat message histories into model-ready token strings in Hugging Face tokenizers. <details><summary>More about</summary>

  They prevent silent performance degradation by ensuring input formatting matches what chat models were trained with, eliminating a common source of hard-to-debug errors.

  _Realizing your model's poor performance wasn't due to prompt engineering but because you forgot to specify whether to wrap roles in [USER] or 'User : ' is a special kind of silent despair._

  `prompt-formatting` `tokenizers` `hugging-face` `chat-models`
  </details>

- **[Context by Fulcra](https://fulcradynamics.com)** A unified, user-owned context backend that provides a persistent 'context lake' for AI agents to share data, memory, and knowledge. <details><summary>More about</summary>

  It solves the fragmentation problem where different AI agents or models have no shared awareness of a user's history, files, or previous agent interactions.

  _Because now your agents can finally build a coherent, shared personality based on the digital wreckage of your life._

  `context` `memory` `mcp` `sdk` `agent-infrastructure`
  </details>

- **[Context7](https://context7.com)** A service that provides up-to-date, version-specific library documentation and code examples to AI coding tools like Cursor and Claude Code. <details><summary>More about</summary>

  It solves the hallucination problem in AI coding by injecting fresh, version-correct documentation directly into the LLM's context window.

  _Another layer of abstraction to manage just to ensure your AI doesn't hallucinate a method that was deprecated eighteen months ago._

  `context-retrieval` `documentation` `ai-productivity` `cursor-extension` `llm-context`
  </details>

- **[Dash](https://kapeli.com/dash)** Dash is a macOS API documentation browser and code snippet manager with offline access to 200+ documentation sets and MCP support for AI assistant integration. <details><summary>More about</summary>

  It gives developers instant, offline access to extensive API documentation and integrates with AI assistants via MCP to provide up-to-date context.

  _Finally, a way to make your AI assistant stop hallucinating API parameters—by giving it the docs you already downloaded but forgot about._

  `documentation` `mcp` `macos` `offline` `snippets`
  </details>

- **[Dosu](https://dosu.dev)** Dosu is a knowledge infrastructure layer that automatically captures and syncs team documentation to reduce token usage and improve agent performance. <details><summary>More about</summary>

  It aims to solve the problem of stale context by automatically maintaining project documentation (like AGENTS.md) through real-time observation of agent sessions and communication tools.

  _Finally, an automated way to ensure your agent's hallucination-inducing context window is filled with actual, up-to-date project truth._

  `mcp` `knowledge-base` `agent-infrastructure` `documentation` `context-management`
  </details>

- **[Exa](https://exa.ai)** A web search API designed to provide real-time, structured data and token-efficient context to AI agents. <details><summary>More about</summary>

  It enables agents to bypass training data cutoffs with high-accuracy retrieval and structured information that reduces context window bloat.

  _Your agent can now hallucinate about events that happened five minutes ago with unprecedented, high-fidelity precision._

  `search-api` `retrieval` `agentic-search` `context-engineering` `structured-data`
  </details>

- **[Graphlit](https://graphlit.com)** A context layer for AI agents that provides real-time sync across Slack, GitHub, Jira, and other sources with built-in semantic search. <details><summary>More about</summary>

  Developers can give their agents up-to-date, cross-platform context without managing separate integrations or search infrastructure.

  _Finally, a way to make your agents stop hallucinating about the Jira ticket you closed three sprints ago._

  `context-layer` `ai-agents` `semantic-search` `real-time-sync`
  </details>

- **[Izlo](https://getizlo.com)** Izlo is a prompt management platform that provides version control, collaboration, and testing workflows for team-based AI prompts. <details><summary>More about</summary>

  It enables developers to manage prompts as structured assets with versioning and APIs, rather than letting them remain hardcoded or scattered across documentation.

  _Finally, a way to version control the chaotic string literals that are currently holding your production application together._

  `prompt-management` `prompt-ops` `collaboration` `version-control` `testing`
  </details>

- **[leanctx.com](https://leanctx.com)** LeanCTX is an open-source Rust binary that sits between AI coding tools and codebases to visualize, compress, and control what context reaches the model. <details><summary>More about</summary>

  It cuts token costs and context bloat by stripping noise—like comments and whitespace—while preserving structure, and adds session memory and cross-agent context control across 29+ editors and assistants.

  _You now get a live dashboard to watch your AI context window fill up with garbage, because apparently 'please ignore the comments' was too ambiguous for a trillion-parameter model._

  `context-compression` `context-window` `token-optimization` `memory` `ai-tooling`
  </details>

- **[MemClaw](https://memclaw.me/en/claw)** MemClaw is a persistent project memory system for OpenClaw that provides isolated workspaces, visible memory, and team collaboration. <details><summary>More about</summary>

  It solves the problem of context blending and memory loss in long-running OpenClaw conversations by scoping memory to projects and making it shareable.

  _Finally, a way to stop OpenClaw from forgetting which client you were talking about five minutes ago._

  `openclaw` `memory` `project-context` `collaboration`
  </details>

- **[Pieces.app](https://pieces.app)** Pieces is a desktop application that builds a searchable artificial memory from a developer's work across applications, enabling context recovery and integration with AI tools. <details><summary>More about</summary>

  It helps developers resume work, recover past decisions, and bring real context into AI assistants by capturing and indexing activity from IDEs, browsers, chats, and other tools.

  _Finally, a way to remember why you wrote that regex six months ago—assuming Pieces was running when you did._

  `memory-layer` `context-retrieval` `developer-productivity` `mcp-server` `cross-app-indexing`
  </details>

- **[PromptFoundry](https://promptfoundry.ai)** PromptFoundry is a platform for managing and optimizing AI prompts. <details><summary>More about</summary>

  It helps developers systematically improve prompt quality and consistency for AI-driven workflows.

  _Because nothing says 'productivity' like spending hours perfecting the prompt that will save you minutes._

  `prompt-engineering` `ai-workflows` `context-management`
  </details>

- **[PromptHub](https://prompthub.us)** PromptHub is a prompt management platform for teams to discover, version, test, and deploy prompts. <details><summary>More about</summary>

  It centralizes prompt engineering workflows with Git-based versioning, testing, and deployment, making prompt iteration and collaboration more structured for developers.

  _Finally, a place to version your prompts so you can stop pretending they’re not code._

  `prompt-management` `prompt-engineering` `versioning` `testing` `collaboration`
  </details>

- **[PromptLayer 🍰](https://promptlayer.com)** PromptLayer is a developer platform for versioning, testing, and monitoring prompts and AI agents through robust evals, tracing, and regression sets. <details><summary>More about</summary>

  It gives developers a structured way to track prompt changes, run regression tests, and collaborate with domain experts via a visual editor.

  _Yet another platform to manage the layers of abstraction we keep adding so we can pretend our prompts are now enterprise-grade software._

  `evals` `evaluations` `llmops` `observability` `prompt-management` `tracing`
  </details>

- **[Tavily](https://tavily.com)** A real-time search and content extraction API designed to provide fresh web context for AI agents and RAG workflows. <details><summary>More about</summary>

  It allows developers to ground agentic reasoning in live web data, significantly reducing hallucinations caused by model training cutoffs.

  _At least now your agent can search the live web to confirm its own hallucinations in real-time._

  `search` `rag` `retrieval` `api` `context`
  </details>

- **[Theneo.io](https://theneo.io)** A developer portal platform for API references, guides, changelogs, and private customer portals with AI-powered documentation and agent-ready features like MCP and llms.txt. <details><summary>More about</summary>

  It unifies API documentation, changelogs, and customer portals in a single collaborative workspace with AI assistance, reducing drift between code and docs.

  _Finally, a place where engineers, writers, PMs, and agents can all fight over the same cursor in real time._

  `api-docs` `developer-portal` `ai-documentation` `mcp` `collaboration`
  </details>

- **[Vectorize](https://vectorize.io)** Open source agent memory system that enables persistent, per-user context and learning for AI agents. <details><summary>More about</summary>

  Developers can give their agents persistent memory that improves over time, reducing repetitive mistakes and enabling cross-session continuity.

  _Finally, your agent will remember that you prefer tabs over spaces—until it forgets again next major version._

  `agent-memory` `mcp-server` `context-persistence` `llm-memory` `hindsight`
  </details>