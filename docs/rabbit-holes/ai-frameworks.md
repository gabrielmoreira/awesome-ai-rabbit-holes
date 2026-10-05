<!-- This file is generated. Do not edit it directly. Submit tools through config/sources.yml. -->
# Frameworks & SDKs

Code-first libraries, SDKs, and engines that developers import and program against to build AI-powered applications and agent systems.

_484 entries in 6 sections, ranked by stars. Each section opens with its top 30; the rest of that section waits behind the **▸ more** panel at its end._

## Contents

- [LLM & Agent SDKs](#llm--agent-sdks) — 213
- [Multi-Agent Systems](#multi-agent-systems) — 61
- [Provider & Model Abstractions](#provider--model-abstractions) — 102
- [Workflow & Graph Engines](#workflow--graph-engines) — 25
- [Memory & Retrieval Infrastructure](#memory--retrieval-infrastructure) — 32
- [Training & Model Infrastructure](#training--model-infrastructure) — 51

## LLM & Agent SDKs

- **[huggingface/transformers](https://github.com/huggingface/transformers)** `⭐ 166.9k` Transformers Agents: Provides a natural language API on top of transformers.
- **[LangChain](https://github.com/langchain-ai/langchain)** `⭐ 147.4k` `updated ≤90d` LangChain is a framework for building agents and LLM-powered applications with interoperable components and third-party integrations. <details><summary>More about</summary>

  It lets developers assemble and swap models, tools, and data sources to prototype and productionize AI apps without lock-in to specific vendors or low-level plumbing.

  _Using LangChain means trading direct control for a tower of abstractions that promises flexibility while quietly coupling you to its ecosystem’s version drift._

  `framework` `agents` `llm`
  </details>
- **[LlamaIndex](https://github.com/run-llama/llama_index)** `⭐ 52.4k` `updated ≤90d` LlamaIndex is an open-source Python framework for building agentic applications with data connectors, retrieval pipelines, and integrations for LLMs, embeddings, and vector stores. <details><summary>More about</summary>

  It gives developers reusable building blocks for RAG, document parsing, and agent workflows without forcing a specific control plane or SaaS runtime.

  _Another week, another foundational framework that promises to be the only abstraction layer you will ever need, right up until the next one replaces it._

  `rag` `agent-framework` `llm` `python` `retrieval`
  </details>
- **[nanobot](https://github.com/hkuds/nanobot)** `⭐ 48.7k` `updated ≤90d` Open-source, lightweight AI agent for tools, chats, and workflows, inspired by OpenClaw, Claude Code, and Codex. <details><summary>More about</summary>

  It provides a minimal, readable agent loop with support for chat channels, memory, MCP, and practical deployment paths, enabling developers to run a personal agent from local setup to long-running use.

  _Another agent promising to be the last agent you’ll ever need, while quietly hoping you’ll forget it’s just a wrapper around the same models everyone else uses._

  `ai-agent` `terminal-native` `claude-code-alternative` `mcp-support` `open-source`
  </details>
- **[Agno](https://github.com/agno-agi/agno)** 🔥 `⭐ 42.5k` `updated ≤30d` A framework and runtime for building, running, and managing scalable agent platforms with built-in memory, observability, and security. <details><summary>More about</summary>

  It provides the heavy-lifting infrastructure—like storage, task scheduling, and multi-tenant isolation—needed to turn a simple LLM script into a production-ready agent service.

  _Because knowing how to write an agent is easy, but figuring out how to manage its memory, security, and deployment without losing your mind is the real battle._

  `agents` `runtime` `orchestration` `observability` `infrastructure`
  </details>
- **[Quivr](https://github.com/quivrhq/quivr)** `⭐ 39.6k` `updated >1y` Quivr is a Python framework and SDK for building opinionated RAG pipelines that ingest files, retrieve context, and answer questions using any LLM and vector store. <details><summary>More about</summary>

  It gives developers a code-first way to embed retrieval-augmented generation into their own apps without building the full RAG plumbing from scratch.

  _Yet another reminder that wiring up a PDF to a model now requires its own framework, YAML workflows, rerankers, and a second brain you have to maintain._

  `rag` `llm` `sdk` `python` `retrieval`
  </details>
- **[ui-tars-desktop](https://github.com/bytedance/ui-tars-desktop)** 🔥 `⭐ 39.2k` `updated ≤30d` An open-source multimodal AI agent stack providing GUI and vision-based agents for terminal, computer, browser, and product integration via CLI, Web UI, and desktop applications. <details><summary>More about</summary>

  It enables developers to automate complex GUI and computer-use workflows with multimodal LLMs, bridging the gap between AI agents and real-world desktop/browser environments.

  _Finally, an AI that can click buttons for you—because manually filling out forms was clearly the last frontier of human dignity._

  `multimodal-agents` `gui-automation` `mcp` `computer-use` `browser-automation`
  </details>
- **[DSPy](https://github.com/stanfordnlp/dspy)** `⭐ 38.5k` `updated ≤90d` DSPy is a Python framework for programming language models with composable code and algorithms that optimize prompts and model weights. <details><summary>More about</summary>

  It lets developers build modular AI systems and RAG pipelines using declarative Python instead of brittle, hand-tuned prompts.

  _You can finally stop treating prompt engineering like alchemy, only to discover that replacing it with compiler-style optimization creates an entirely new class of hyperparameter anxiety._

  `frameworks` `llm` `python` `rag` `optimization`
  </details>
- **[CopilotKit](https://github.com/copilotkit/copilotkit)** 🔥 `⭐ 37.7k` `updated ≤30d` An open-source SDK for building agent-native applications with generative UI, shared state, and human-in-the-loop workflows across React, Angular, and other platforms. <details><summary>More about</summary>

  It enables developers to integrate AI agents directly into frontend applications with dynamic UI rendering, tool calls, and synchronized state, bridging the gap between agent logic and user interfaces.

  _Now you can watch your agent render a button in real-time while silently judging your CSS._

  `agent-native` `generative-ui` `frontend-sdk` `react` `ag-ui-protocol`
  </details>
- **[ScrapeGraphAI](https://github.com/scrapegraphai/scrapegraph-ai)** `⭐ 31.5k` `updated ≤90d` A Python library that uses LLMs and graph logic to build scraping pipelines for websites and local documents based on natural language extraction instructions. <details><summary>More about</summary>

  It lets developers define what data to extract from complex web sources using plain English instead of maintaining brittle CSS selectors or XPath queries.

  _We have successfully abstracted away the only part of web scraping that required actual skill, leaving us with 24,000 stars and no excuse for not harvesting the entire internet._

  `web-scraping` `llm` `python` `rag` `data-extraction`
  </details>
- **[Composio](https://github.com/composiohq/composio)** 🔥 `⭐ 30.4k` `updated ≤30d` Composio powers 1000+ toolkits, tool search, context management, authentication, and a sandboxed workbench to help you build AI agents that turn intent into action.
- **[Smolagents](https://github.com/huggingface/smolagents)** `⭐ 29.7k` `updated ≤90d` A barebones Python library for building agents that think in code, with first-class support for code agents and sandboxed execution. <details><summary>More about</summary>

  Developers can quickly spin up agents that write and execute code securely, integrating with various models, tools, and environments like MCP servers or Hub Spaces.

  _Finally, a library that lets your agents write code so you don’t have to—until you realize you’re now debugging the debugger._

  `agent-framework` `code-agents` `sandboxed-execution` `python` `huggingface`
  </details>
- **[Semantic Kernel](https://github.com/microsoft/semantic-kernel)** `⭐ 28.6k` `updated ≤90d` Semantic Kernel is a model-agnostic SDK for building, orchestrating, and deploying AI agents and multi-agent systems. <details><summary>More about</summary>

  It lets developers integrate LLM capabilities into applications using familiar .NET, Python, or Java code with plugin-based extensibility.

  _Another enterprise SDK promising 'agent orchestration' while quietly adding to the stack of frameworks you’ll need to learn before shipping a single LLM feature._

  `semantic-kernel` `ai-framework` `multi-agent`
  </details>
- **[Mastra](https://github.com/mastra-ai/mastra)** `⭐ 28.5k` `updated ≤90d` Mastra is a TypeScript framework for building AI-powered applications and agents, providing model routing, workflow orchestration, memory management, and built-in evals. <details><summary>More about</summary>

  It gives TypeScript developers a unified, code-first stack to go from LLM prototype to production-ready agent with integrated tools, context management, and observability.

  _Another week, another full-featured TypeScript agent framework that promises to solve the 'orchestration problem' while quietly adding three new layers of abstraction you'll be debugging at 2am._

  `typescript` `agents` `workflows` `framework` `mcp`
  </details>
- **[Cua](https://github.com/trycua/cua)** `⭐ 27.8k` `updated ≤90d` Open-source infrastructure providing sandboxes, SDKs, and benchmarks for training and deploying computer-use AI agents. <details><summary>More about</summary>

  It provides the virtualization and automation drivers required to allow agents to safely interact with desktop operating systems and applications.

  _It offers the promise of delegating your entire desktop to an agent, assuming you trust the sandbox as much as your own prompt engineering._

  `computer-use` `agent-infrastructure` `sandbox` `sdk` `benchmarks`
  </details>
- **[letta](https://github.com/letta-ai/letta)** `⭐ 25k` `updated ≤90d` Letta is an open-source platform and API for building stateful AI agents with advanced memory, self-improvement capabilities, and a local CLI tool for coding assistance. <details><summary>More about</summary>

  It provides developers with both a local CLI agent (Letta Code) for terminal-based coding and a full API/SDK to integrate stateful, memory-driven agents into custom applications.

  _Now you can worry about your local coding agent remembering past mistakes and 'self-improving' into a state of consciousness that judges your commit messages._

  `agents` `memory` `stateful` `sdk` `cli`
  </details>
- **[RAG-Anything](https://github.com/hkuds/rag-anything)** `⭐ 23.5k` `updated ≤90d` RAG-Anything is an all-in-one RAG framework for multi-modal retrieval-augmented generation. <details><summary>More about</summary>

  It provides developers with a unified framework to integrate retrieval-augmented generation into applications, simplifying the process of enhancing LLMs with external knowledge.

  _Because nothing says 'production-ready' like a framework that promises to RAG anything, including your sanity._

  `rag` `multi-modal` `retrieval-augmented-generation` `framework`
  </details>
- **[adk-python](https://github.com/google/adk-python)** 🔥 `⭐ 21.7k` `updated ≤30d` An open-source, code-first Python framework for building, evaluating, and deploying AI agents. <details><summary>More about</summary>

  It lets developers create, test, and deploy agent workflows with modular tools, multi-agent systems, and flexible deployment options.

  _Finally, a way to turn your Python scripts into agents that can argue with each other about tabs vs. spaces._

  `agent-framework` `python` `multi-agent` `code-first` `google`
  </details>
- **[chatbot](https://github.com/vercel/chatbot)** `⭐ 21k` `updated ≤90d` A full-featured, hackable Next.js AI chatbot template built with Vercel's AI SDK for creating chat applications. <details><summary>More about</summary>

  Provides developers with a production-ready foundation for building AI-powered chat applications with authentication, persistence, and multi-provider support.

  _Another reminder that 'hackable' often means 'you'll spend more time customizing than actually chatting'._

  `chatbot` `nextjs` `ai-sdk` `vercel` `open-source`
  </details>
- **[PydanticAI](https://github.com/pydantic/pydantic-ai)** `⭐ 20.4k` `updated ≤90d` A Python agent framework from the Pydantic team for building production-grade GenAI applications with type-safe models, tool integration, and durable execution. <details><summary>More about</summary>

  It lets developers build typed, validated, and observable agentic workflows using the same Pydantic patterns that already power much of the Python AI ecosystem.

  _Now you can experience the FastAPI feeling in agent land, right before realizing your agent’s biggest type error is its life choices._

  `python` `agent-framework` `type-safe` `pydantic` `observability`
  </details>
- **[Eliza](https://github.com/elizaos/eliza)** 🔥 `⭐ 19.5k` `updated ≤30d` Open source agentic operating system.
- **[Agent Zero](https://github.com/agent0ai/agent-zero)** 🔥 `⭐ 19.4k` `updated ≤30d` An open agent framework that provides a Dockerized Linux desktop environment and browser for autonomous task execution. <details><summary>More about</summary>

  It allows agents to move beyond simple chat by giving them a full GUI, terminal, and browser with DOM annotation to interact with real software.

  _There is nothing quite like the existential dread of watching an autonomous agent struggle to click a button in a virtual XFCE desktop._

  `agent-framework` `linux-desktop` `docker` `autonomous-agents` `computer-use`
  </details>
- **[vercel-labs/json-render](https://github.com/vercel-labs/json-render)** `⭐ 18.5k` Generative UI framework with an experimental evaluator that lets Jev choose among application-supplied composition criteria.
- **[LangChain.js](https://github.com/langchain-ai/langchainjs)** `⭐ 18.2k` `updated ≤90d` LangChain.js is a TypeScript/JavaScript framework for building LLM-powered applications with composable components and integrations. <details><summary>More about</summary>

  It lets developers rapidly prototype and productionize AI applications by swapping models, tools, and data sources without rewriting core logic.

  _You’ll spend more time reading LangChain’s abstraction layers than writing actual prompts, wondering if ‘chain’ is just a fancy word for ‘callback hell’._

  `ai-framework` `llm` `typescript` `agent-building`
  </details>
- **[SuperAGI](https://github.com/transformeroptimus/superagi)** `⭐ 17.7k` `updated >1y` SuperAGI is an open-source Python framework for building, managing, and running autonomous AI agents, featuring a web dashboard, marketplace, and API surface. <details><summary>More about</summary>

  It provides developers with a structured runtime and control plane to deploy autonomous agents with memory and tool access without wiring everything from scratch.

  _Yet another framework promising autonomous AGI mastery, ensuring you can now orchestrate digital chaos at scale while your own backlog remains perfectly untouched._

  `agents` `autonomous` `framework` `python` `llm`
  </details>
- **[Qwen-Agent](https://github.com/qwenlm/qwen-agent)** `⭐ 17.1k` `updated ≤1y` Qwen-Agent is a Python framework for building LLM-powered applications using Qwen models, featuring function calling, MCP compatibility, RAG, and a code interpreter. <details><summary>More about</summary>

  It provides developers with a structured SDK to build custom agents with tool use and memory, while also serving as the backend for the Qwen Chat web interface.

  _Yet another framework promising to tame the chaos of tool-calling, ensuring you can spend three days configuring your agent's personality instead of fixing the bug in your actual codebase._

  `agent-framework` `qwen` `function-calling` `mcp` `python`
  </details>
- **[Pipecat](https://github.com/pipecat-ai/pipecat)** `⭐ 16.1k` `updated ≤90d` Pipecat is an open-source Python framework for building real-time voice and multimodal conversational AI agents with composable pipelines and pluggable AI services. <details><summary>More about</summary>

  It provides developers with a structured way to orchestrate audio, video, and LLM services into low-latency conversational experiences without stitching together raw WebRTC and API calls.

  _Yet another framework promising to make building voice agents 'effortless,' ensuring you can now waste time architecting multimodal pipelines instead of just feeling awkward on the phone._

  `voice-ai` `multimodal` `real-time` `python` `framework`
  </details>
- **[Outlines](https://github.com/dottxt-ai/outlines)** `⭐ 15.9k` `updated ≤30d` A Python library for enforcing structured outputs from LLMs via type hints, grammars, and constraints. <details><summary>More about</summary>

  Developers can replace fragile post-generation parsing with guaranteed structured outputs (JSON, Pydantic models, enums, etc.) directly from any LLM.

  _Finally, a way to stop writing regex to fix broken JSON from models that clearly didn’t read the instructions._

  `structured-generation` `llm-outputs` `pydantic` `type-hints` `python`
  </details>
- **[Botpress](https://github.com/botpress/botpress)** `⭐ 14.9k` `updated ≤30d` An open-source platform for building and deploying GPT/LLM-powered chatbots and assistants. <details><summary>More about</summary>

  It provides developers with a full-stack environment to create, deploy, and manage AI agents for chatbots and assistants, accelerating the development of conversational AI applications.

  _Because nothing says 'next-generation' like realizing your chatbot still can't remember what you asked it two messages ago._

  `agent-platform` `chatbot-framework` `llm-orchestration` `open-source` `sdk`
  </details>
- **[Llmware](https://github.com/llmware-ai/llmware)** `⭐ 14.8k` `updated ≤180d` llmware is a Python framework for building enterprise RAG pipelines with local, quantized small language models and integrated document parsing, embedding, and query tooling. <details><summary>More about</summary>

  Developers can rapidly build private, cost-effective, on-device LLM applications without relying on cloud APIs, using a unified stack for models, document ingestion, and retrieval.

  _Yet another heroic framework promising enterprise RAG salvation on your laptop, just in time for you to rebuild your stack before the next framework drops next Tuesday._

  `rag` `local-ai` `framework` `enterprise` `small-models`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+183 more in LLM & Agent SDKs &nbsp;—&nbsp; click to expand</strong></summary>

- **[E2B](https://github.com/e2b-dev/e2b)** `⭐ 14.1k` `updated ≤30d` Open-source infrastructure for running AI-generated code in secure isolated cloud sandboxes via SDKs.
- **[Eino](https://github.com/cloudwego/eino)** `⭐ 13.2k` `updated ≤30d` Eino is a Go-based LLM application development framework with components, agent toolkits, and workflow orchestration.
- **[LangChain4j](https://github.com/langchain4j/langchain4j)** `⭐ 13.2k` `updated ≤90d` LangChain4j is an idiomatic, open-source Java library for building LLM-powered applications on the JVM, providing a unified API over popular LLM providers, vector stores, and tool calling capabilities.
- **[txtai](https://github.com/neuml/txtai)** `⭐ 13k` `updated ≤90d` txtai is an all-in-one Python framework for semantic search, LLM orchestration, and language model workflows, featuring an embeddings database and multi-model pipeline support.
- **[Agent-S](https://github.com/simular-ai/agent-s)** `⭐ 12.5k` `updated ≤180d` Agent S is an open-source computer-use agent framework that autonomously interacts with desktop GUIs across Windows, macOS, and Linux to perform complex tasks.
- **[Chainlit](https://github.com/chainlit/chainlit)** `⭐ 12.5k` `updated ≤90d` Chainlit is a Python framework for building production-ready conversational AI applications with a built-in UI.
- **[Tambo](https://github.com/tambo-ai/tambo)** `⭐ 11.2k` `updated ≤90d` An open-source React SDK and backend toolkit that lets developers register UI components with Zod schemas so an LLM agent can select and stream props to render generative user interfaces.
- **[ten-framework](https://github.com/ten-framework/ten-framework)** `⭐ 11.1k` `updated ≤90d` An open-source framework for building real-time, multimodal conversational AI agents with support for voice, video, and extensions like memory and turn detection.
- **[Langchain Go](https://github.com/tmc/langchaingo)** `⭐ 9.7k` `updated ≤1y` LangChain for Go is a Go-native library providing composable building blocks for writing LLM-powered applications, including model abstraction, chains, and memory.
- **[BAML](https://github.com/boundaryml/baml)** `⭐ 9.4k` `updated ≤30d` The programming language for agents.
- **[KAG](https://github.com/openspg/kag)** `⭐ 9.1k` `updated ≤1y` KAG is a knowledge-augmented generation framework that combines the OpenSPG engine and LLMs to provide logical reasoning and multi-hop Q&A for professional domain knowledge bases, moving beyond traditional vector similarity RAG.
- **[Rig](https://github.com/0xplaygrounds/rig)** `⭐ 8.8k` `updated ≤30d` Rig is a Rust library for building modular and scalable LLM applications.
- **[TypeChat](https://github.com/microsoft/typechat)** `⭐ 8.7k` `updated ≤90d` TypeChat is a library that makes it easy to build natural language interfaces using types.
- **[R2R](https://github.com/sciphi-ai/r2r)** `⭐ 8k` `updated ≤1y` R2R is a production-ready, RESTful API framework for building agentic retrieval-augmented generation (RAG) systems with multimodal ingestion, hybrid search, and knowledge graph support.
- **[Upsonic](https://github.com/upsonic/upsonic)** `⭐ 8k` `updated ≤180d` Python framework for building autonomous AI agents with task management, tool integration, and sandboxed execution.
- **[SuperAgent](https://github.com/superagent-ai/superagent)** `⭐ 6.8k` `updated ≤180d` An open-source SDK and CLI for securing AI applications by detecting prompt injections, redacting PII, and scanning repositories for agent-targeted attacks.
- **[genkit](https://github.com/genkit-ai/genkit)** `⭐ 6.5k` `updated ≤30d` An open-source framework for building full-stack AI-powered applications in JavaScript, Go, and Python.
- **[Atomic Agents](https://github.com/eigenwise/atomic-agents)** `⭐ 6.3k` `updated ≤90d` Atomic Agents is a lightweight, modular Python framework for building AI agent pipelines and applications with reusable, composable components.
- **[Marvin](https://github.com/prefecthq/marvin)** `⭐ 6.2k` `updated ≤90d` Marvin is a Python framework for producing structured LLM outputs and building agentic workflows via tasks, specialized agents, and thread-based orchestration.
- **[Agents](https://github.com/aiwaves-cn/agents)** `⭐ 6k` `updated >1y` An open-source framework for building self-evolving autonomous language agents using symbolic learning.
- **[vercel/eve](https://github.com/vercel/eve)** `⭐ 5.4k` eve (site) - Vercel's open agent framework, which ships Jev as the default evaluation model in its experimental evaluate path.
- **[Sparrow](https://github.com/katanaml/sparrow)** `⭐ 5.2k` `updated ≤180d` A framework for structured data extraction, instruction calling, and agentic workflows using ML, LLM, and Vision LLM models.
- **[DeepAnalyze](https://github.com/ruc-datalab/deepanalyze)** `⭐ 4.7k` `updated ≤180d` DeepAnalyze is an open-source, fine-tuned LLM and toolset designed to autonomously complete full data science pipelines, including data prep, modeling, visualization, and report generation.
- **[Promptify](https://github.com/promptslab/promptify)** `⭐ 4.6k` `updated ≤1y` A Python NLP framework that provides task-based LLM prompts with Pydantic structured outputs, built-in evaluation, and multi-provider support via LiteLLM.
- **[Youtu-Agent](https://github.com/tencentcloudadp/youtu-agent)** `⭐ 4.6k` `updated ≤1y` A Python agent framework built on openai-agents that supports automated agent generation, experience-based learning, and end-to-end reinforcement learning using open-source models like DeepSeek-V3.
- **[RubyLLM](https://github.com/crmne/ruby_llm)** `⭐ 4.4k` `updated ≤30d` The Ruby-native AI framework. Chats, agents, tools, images, audio, and video through one consistent API, in plain Ruby or Rails.
- **[adalflow](https://github.com/sylphai-inc/adalflow)** `⭐ 4.2k` `updated ≤180d` AdalFlow is a PyTorch-like Python library for building and auto-optimizing LLM workflows, including RAG pipelines, chatbots, and agents.
- **[LMQL](https://github.com/eth-sri/lmql)** `⭐ 4.2k` `updated >1y` A programming language for large language models that combines traditional algorithmic logic with natural language prompting.
- **[Code Interpreter API](https://github.com/shroominic/codeinterpreter-api)** `⭐ 3.8k` `updated >1y` An open-source Python library built on LangChain that provides a sandboxed code interpreter session for LLMs to execute generated Python code, install packages, and return text or file outputs.
- **[TanStack AI](https://github.com/tanstack/ai)** `⭐ 3.2k` TanStack AI - @tanstack/ai-typesafe adapter exposing typed Boolean, Choice, and Score decisions through TanStack AI's decide() API.
- **[core](https://github.com/cheshire-cat-ai/core)** `⭐ 3.1k` `updated ≤90d` Cheshire Cat AI is a framework for building custom AI agents as microservices with API-first design, plugin extensibility, and built-in RAG.
- **[Ax](https://github.com/ax-llm/ax)** `⭐ 3k` `updated ≤30d` The pretty much "official" DSPy framework for Typescript.
- **[BMTools](https://github.com/openbmb/bmtools)** `⭐ 2.8k` `updated >1y` BMTools is an open-source Python framework for extending language models with external tools, serving as an academic-oriented platform for building, sharing, and using tool plugins similar to ChatGPT-Plugins.
- **[OmAgent](https://github.com/om-ai-lab/omagent)** `⭐ 2.7k` `updated >1y` OmAgent is a Python library and framework for building multimodal language agents that support text, image, video, and audio inputs with graph-based workflow orchestration.
- **[Griptape](https://github.com/griptape-ai/griptape)** `⭐ 2.6k` `updated ≤30d` Modular Python framework for building AI agents and workflows with chain-of-thought reasoning, tools, and memory.
- **[RasaGPT](https://github.com/paulpierre/rasagpt)** `⭐ 2.5k` `updated ≤1y` RasaGPT is a headless LLM chatbot platform built on top of Rasa and Langchain, using FastAPI, pgvector, and LlamaIndex to provide document indexing, retrieval, and a multi-tenant API for building custom Telegram bots.
- **[Magentic](https://github.com/jackmpcollins/magentic)** `⭐ 2.4k` `updated ≤1y` A Python library that integrates LLMs as functions using decorators for structured outputs, function calling, and agentic workflows.
- **[nextpy](https://github.com/dot-agent/nextpy)** `⭐ 2.3k` `updated >1y` Nextpy is a Python framework for building self-modifying AI agents with a focus on prompt engineering, session state management, and optimized code generation.
- **[OpenAGI](https://github.com/agiresearch/openagi)** `⭐ 2.3k` `updated >1y` A package and SDK designed for creating and structuring agents to work within the AIOS ecosystem.
- **[Lagent](https://github.com/internlm/lagent)** `⭐ 2.3k` `updated ≤90d` A lightweight Python framework for building LLM-based agents with a modular, layer-like design inspired by PyTorch.
- **[neuron-ai](https://github.com/neuron-core/neuron-ai)** `⭐ 2.1k` `updated ≤90d` Neuron AI is a PHP framework for building and orchestrating AI agents with support for LLMs, vector databases, memory, RAG, and MCP connectors, designed to integrate into existing PHP applications like Laravel and Symfony.
- **[AgentFlow](https://github.com/lupantech/agentflow)** `⭐ 2.1k` `updated ≤1y` AgentFlow is a trainable, modular agentic framework with Planner, Executor, Verifier, and Generator modules optimized via Flow-GRPO for tool-augmented reasoning.
- **[Notte](https://github.com/nottelabs/notte)** `⭐ 2k` `updated ≤90d` Notte is a Python framework and hosted API for building and deploying AI web automation agents that combine Playwright scripting with LLM-driven browser control.
- **[ContextGem](https://github.com/shcherbak-ai/contextgem)** `⭐ 2k` `updated ≤180d` ContextGem is an open-source Python framework that uses LLMs to extract structured data, insights, and justifications from documents with granular source references.
- **[LangchainRb](https://github.com/patterns-ai-core/langchainrb)** `⭐ 2k` `updated ≤180d` A Ruby gem providing a unified interface for LLMs, prompt management, output parsers, RAG building, and assistant creation.
- **[DemoGPT](https://github.com/melih-unsal/demogpt)** `⭐ 1.9k` `updated ≤1y` A Python toolkit and Streamlit app for quickly generating LangChain agent pipelines, tools, and RAG setups from prompts.
- **[Autochain](https://github.com/forethought-technologies/autochain)** `⭐ 1.9k` `updated ≤1y` AutoChain is a lightweight, extensible framework for building LLM agents with custom tools and automated evaluation.
- **[ai](https://github.com/stripe/ai)** `⭐ 1.9k` `updated ≤90d` A Stripe-maintained toolkit providing SDKs and an MCP server to integrate Stripe's billing and API capabilities into LLM agents and AI applications.
- **[Extractous](https://github.com/yobix-ai/extractous)** `⭐ 1.8k` `updated >1y` Fast and efficient unstructured data extraction. Written in Rust with bindings for many languages.
- **[Adala](https://github.com/humansignal/adala)** `⭐ 1.6k` `updated ≤90d` Adala is an autonomous data labeling agent framework for building and deploying specialized data processing agents.
- **[ThinkGPT](https://github.com/jina-ai/thinkgpt)** `⭐ 1.6k` `updated >1y` ThinkGPT is a Python library implementing Chain of Thought techniques for LLMs, enabling memory, self-refinement, knowledge compression, and reasoning primitives.
- **[Agentic Commerce Protocol](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol)** `⭐ 1.6k` `updated ≤90d` Agentic Commerce Protocol (ACP) is a versioned open standard from OpenAI and Stripe that ships OpenAPI specs, JSON Schemas, examples, and governance docs for letting AI agents complete real commerce and checkout flows.
- **[modelcontextprotocol/swift-sdk](https://github.com/modelcontextprotocol/swift-sdk)** `⭐ 1.5k` `updated ≤180d` The official Swift SDK for building Model Context Protocol (MCP) clients and servers in Swift environments.
- **[AgentQL](https://github.com/tinyfish-io/agentql)** `⭐ 1.5k` `updated ≤90d` AgentQL is a suite of tools for connecting AI agents and LLMs to the web, featuring a natural language query language, Python and JavaScript SDKs, Playwright integrations, a REST API, and a browser debugger for extracting data and automating workflows on live sites.
- **[Agent Protocol](https://github.com/agi-inc/agent-protocol)** `⭐ 1.5k` `updated >1y` An API specification and SDK that provides a common interface for interacting with AI agents regardless of their underlying tech stack.
- **[vitalops/openvibe](https://github.com/vitalops/openvibe)** `⭐ 1.4k` `updated ≤90d` A modular Python framework for implementing Auto-GPT-style autonomous agents.
- **[RestGPT](https://github.com/yifan-song793/restgpt)** `⭐ 1.4k` `updated >1y` RestGPT is an LLM-based autonomous agent that plans and executes actions by calling real-world RESTful APIs.
- **[Parsera](https://github.com/raznem/parsera)** `⭐ 1.4k` `updated ≤1y` A lightweight Python library that uses LLMs to extract structured data from websites.
- **[Chidori](https://github.com/thousandbirdsinc/chidori)** `⭐ 1.4k` `updated ≤90d` A Rust-based reactive runtime for building durable AI agents using deterministic Starlark scripts with built-in checkpointing, replay, and HTTP server capabilities.
- **[Langchain-rust](https://github.com/abraxas-365/langchain-rust)** `⭐ 1.3k` `updated ≤30d` A Rust implementation of the LangChain framework for building LLM-based applications.
- **[MiniChain](https://github.com/srush/minichain)** `⭐ 1.2k` `updated >1y` A tiny, lightweight library for building prompt chains and LLM-powered workflows in Python using annotated functions and Jinja templates.
- **[LightAgent](https://github.com/wanxingai/lightagent)** `⭐ 1.2k` LightAgent 1,225 Python Apache-2.0 2026-09 Lightweight Python agents with tools and memory.
- **[RAGLite](https://github.com/superlinear-ai/raglite)** `⭐ 1.2k` `updated ≤90d` RAGLite is a Python toolkit for building Retrieval-Augmented Generation pipelines with configurable LLMs, DuckDB or PostgreSQL backends, and advanced chunking, reranking, and hybrid search capabilities.
- **[Laravel AI](https://github.com/laravel/ai)** `⭐ 1.2k` Laravel AI - Provides typed classification and a TypeSafe provider for Laravel applications, with fake responses for application testing. Project guide.
- **[Langchain](https://github.com/brainlid/langchain)** `⭐ 1.2k` `updated ≤30d` An Elixir implementation of a LangChain-style framework for integrating LLMs into applications with support for chaining components and off-the-shelf chains.
- **[AI.JSX](https://github.com/fixie-ai/ai-jsx)** `⭐ 1.1k` `updated >1y` An AI application framework for Javascript that enables LLMs to render React components dynamically.
- **[axflow](https://github.com/axflow/axflow)** `⭐ 1.1k` `updated >1y` A TypeScript framework designed for building robust, modular natural language applications.
- **[LLM Agents](https://github.com/mpaepper/llm_agents)** `⭐ 1.1k` `updated >1y` A minimal Python library for building LLM-controlled agents with custom tools like Python REPL, Google Search, and Hacker News search, inspired by LangChain.
- **[python-a2a](https://github.com/themanojdesai/python-a2a)** `⭐ 1k` `updated >1y` python-a2a is a Python library for implementing Google's Agent-to-Agent (A2A) protocol with Model Context Protocol (MCP) integration for building interoperable multi-agent systems.
- **[foundry](https://github.com/promptise-com/foundry)** `⭐ 871` `updated ≤90d` A Python framework for building full-stack agentic systems with native MCP support, memory, guardrails, and semantic caching.
- **[entaoai](https://github.com/akshata29/entaoai)** `⭐ 865` `updated >1y` A reference implementation for building RAG-based chat applications using Azure OpenAI and vector stores like Pinecone or Redis.
- **[AgentForge](https://github.com/databassgit/agentforge)** `⭐ 850` `updated ≤90d` AgentForge is a low-code Python framework for building, testing, and orchestrating AI-powered autonomous agents and multi-agent systems.
- **[microagents](https://github.com/aymenfurter/microagents)** `⭐ 826` `updated >1y` An experimental Python framework for dynamically creating self-improving agents that can self-edit their prompts and code.
- **[BambooAI](https://github.com/pgalko/bambooai)** `⭐ 792` `updated ≤180d` BambooAI is a Python library that enables natural language-driven data analysis by generating and executing code against local datasets, external APIs, and vector databases.
- **[Fructose](https://github.com/bananaml/fructose)** `⭐ 747` `updated >1y` Fructose is a Python package that turns type-annotated functions into strongly-typed LLM calls via an `@ai` decorator.
- **[WorkGPT](https://github.com/team-openpm/workgpt)** `⭐ 731` `updated >1y` A TypeScript agent framework that lets developers define a directive and connect OpenAPI-defined APIs so the LLM can loop conversations and invoke actions until the task is complete.
- **[LLMFlows](https://github.com/stoyan-stoyanov/llmflows)** `⭐ 708` `updated >1y` LLMFlows is a Python framework for building explicit, transparent LLM-powered applications using structured flows, prompt templates, and vector store integrations.
- **[LangChainDart](https://github.com/davidmigloz/langchain_dart)** `⭐ 689` `updated ≤30d` Dart/Flutter port of the LangChain framework for building LLM-powered applications.
- **[LLama Cpp Agent](https://github.com/maximilian-winter/llama-cpp-agent)** `⭐ 659` `updated ≤1y` A Python framework for structuring interactions with local LLMs via llama.cpp, adding guided sampling for function calling and structured output.
- **[a2a-x402](https://github.com/google-agentic-commerce/a2a-x402)** `⭐ 564` `updated ≤90d` The A2A x402 Extension adds cryptocurrency payments to the Agent-to-Agent (A2A) protocol, enabling on-chain monetization for agent services.
- **[Agentlabs](https://github.com/agentlabs-dev/agentlabs)** `⭐ 558` `updated >1y` An open-source frontend and SDK for managing AI agent authentication, chat interfaces, and analytics.
- **[Ethora](https://github.com/dappros/ethora)** `⭐ 548` `updated ≤30d` SDK monorepo for Ethora chat / messaging platform. (1) Pick an SDK for your frontend stack. (2) Integrate manually or using ethora-setup. (3) Optionally configure app settings, deploy AI agents etc. Server: ethora.com cloud [free]. Dedicated server + SLA option for enterprise customers.
- **[Embedbase](https://github.com/different-ai/embedbase)** `⭐ 522` `updated >1y` A hosted embeddings-as-a-service API for building LLM-powered apps with vector search and text generation.
- **[Agency](https://github.com/neurocult/agency)** `⭐ 515` `updated >1y` A Go-native library for building generative AI applications and autonomous agents using an idiomatic, provider-agnostic approach.
- **[ReLLM](https://github.com/r2d4/rellm)** `⭐ 509` `updated >1y` A Python library that constrains LLM token generation in real-time using regular expressions to enforce exact output structure.
- **[Eidolon](https://github.com/eidolon-ai/eidolon)** `⭐ 492` `updated ≤180d` Eidolon is an open-source pluggable Agent SDK and deployment server for building and deploying agent-based services.
- **[MindSQL](https://github.com/mindinventory/mindsql)** `⭐ 447` `updated >1y` MindSQL is a Python RAG library that translates natural language questions into SQL queries against PostgreSQL, MySQL, SQLite, Snowflake, and BigQuery using LLMs like GPT-4 and Llama 2.
- **[LangStream](https://github.com/langstream/langstream)** `⭐ 427` `updated >1y` LangStream is an event-driven developer platform for building and running LLM AI applications on Kubernetes and Kafka.
- **[mcpadapt](https://github.com/grll/mcpadapt)** `⭐ 426` `updated ≤1y` A library that adapts MCP servers into tools for agentic frameworks like LangChain, CrewAI, and Smolagents.
- **[Rigging](https://github.com/dreadnode/rigging)** `⭐ 418` `updated ≤30d` Lightweight LLM interaction framework for building production-ready AI workflows in Python.
- **[Langstream](https://github.com/rogeriochaves/langstream)** `⭐ 416` `updated >1y` LangStream is a lightweight Python framework for building LLM applications using composable async streams as the core building block.
- **[LLM Strategy](https://github.com/blackhc/llm-strategy)** `⭐ 401` `updated >1y` A Python library that implements the Strategy Pattern using LLMs by dynamically generating implementations for abstract methods via strongly-typed functions, dataclasses, and interfaces.
- **[Funcchain](https://github.com/shroominic/funcchain)** `⭐ 340` `updated >1y` funcchain is a Python library that uses Pydantic models and LangChain runnables to let developers define structured LLM outputs using native Python function syntax.
- **[nanoPerplexityAI](https://github.com/yusuke710/nanoperplexityai)** `⭐ 337` `updated >1y` An open-source Python implementation of a Perplexity-like search experience that uses Google and an LLM to answer questions.
- **[cognesy/instructor-php](https://github.com/cognesy/instructor-php)** `⭐ 328` `updated ≤30d` Unified LLM API, structured data outputs with LLMs, and agent SDK - in PHP.
- **[CleverBee](https://github.com/surescaleai/cleverbee)** `⭐ 302` `updated ≤1y` CleverBee is an open-source, Python-based research assistant that uses LLMs, Playwright, and Chainlit to automate web browsing, content extraction, and synthesis into research reports.
- **[capsulerun/runtime](https://github.com/capsulerun/runtime)** `⭐ 297` `updated ≤180d` Secure runtime to sandbox AI agent tasks in isolated WebAssembly environments.
- **[saplings](https://github.com/shobrook/saplings)** `⭐ 276` `updated >1y` A Python framework that adds Monte Carlo Tree Search, A*, and greedy best-first search algorithms to LLM agents with two lines of code.
- **[typesafe-ai/typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js)** `⭐ 266` TypeSafe JavaScript SDK - Official TypeScript/JavaScript client with inferred answer types. npm install @typesafe-ai/sdk.
- **[Langchain Decorators](https://github.com/ju-bezdek/langchain-decorators)** `⭐ 232` `updated ≤180d` A lightweight Python decorator library that adds syntactic sugar for writing LangChain prompts and chains.
- **[flox](https://github.com/flox-foundation/flox)** `⭐ 227` `updated ≤90d` An AI-native framework for building trading systems with polyglot bindings and an MCP control plane.
- **[healthchainai/HealthChain](https://github.com/healthchainai/healthchain)** `⭐ 227` `updated ≤90d` Python SDK for healthcare AI — typed, validated FHIR tools for agents, real-time EHR connectivity, production deployment ✨.
- **[bondai](https://github.com/krohling/bondai)** `⭐ 226` `updated >1y` BondAI is an open-source framework for building single and multi-agent AI systems with built-in memory/context management, error handling, and tool integrations.
- **[slangchain](https://github.com/prof-frink-lab/slangchain)** `⭐ 198` `updated >1y` An extended functionality toolkit built on top of the LangChain framework that includes browser automation capabilities via Selenium and deployment examples for BabyAGI on AWS Lambda.
- **[ganapativs/microcharts](https://github.com/ganapativs/microcharts)** `⭐ 196` `updated ≤30d` Microcharts is a React library providing 106 tiny, zero-dependency SVG chart components optimized for LLM-generated text and inline use.
- **[vercel-labs/ai-python](https://github.com/vercel-labs/ai-python)** `⭐ 189` ai-python - Python ecosystem: the official Vercel AI SDK for Python carries Jev through its evaluation operation and Gateway examples.
- **[LiteMCP](https://github.com/wong2/litemcp)** `⭐ 185` `updated >1y` A TypeScript framework for building MCP servers elegantly.
- **[Axar](https://github.com/axar-ai/axar)** `⭐ 165` `updated ≤1y` A lightweight TypeScript framework for building production-ready agentic applications with explicit control and minimal abstractions.
- **[text2sqlagent/text2sql-framework](https://github.com/text2sqlagent/text2sql-framework)** `⭐ 159` text2sql-framework.
- **[ai-toolkit](https://github.com/memgraph/ai-toolkit)** `⭐ 112` `updated ≤90d` A toolkit for building AI-driven graph applications on Memgraph, providing a core toolbox, LangChain integrations, an MCP server, and utilities for converting unstructured documents into knowledge graphs.
- **[Tenuo](https://github.com/tenuo-ai/tenuo)** `⭐ 98` Tenuo: Per-call authorization for LangChain and LangGraph tools. Each call is checked at the argument level, and authority is traced across delegation chains.
- **[Advocaat](https://github.com/pithings/advocaat)** `⭐ 96` advocaat - A small, type-safe client for asking AI questions about your data, powered by TypeSafe Jev.
- **[LLFn](https://github.com/orgexyz/llfn)** `⭐ 95` `updated >1y` LLFn is a lightweight Python framework that turns LLM prompts into typed, callable functions using a decorator pattern, built on top of LangChain's model interface.
- **[Micdrop](https://github.com/godefroy/micdrop)** `⭐ 94` `updated ≤30d` Micdrop is a set packages for node and browser that simplify voice conversations with AI systems.
- **[ShaprAI](https://github.com/scottcjn/shaprai)** `⭐ 77` ShaprAI 73 Python MIT 2026-09 Sharpens raw models into principled agents.
- **[langchain_yt_tools](https://github.com/venuv/langchain_yt_tools)** `⭐ 76` `updated >1y` Langchain_yt_tools provides two custom LangChain tools for searching YouTube videos by person name and transcribing them to text.
- **[agent-opt](https://github.com/future-agi/agent-opt)** `⭐ 75` `updated ≤180d` An open-source library for automated prompt optimization using various algorithms and metrics.
- **[MobileReality/mdma](https://github.com/mobilereality/mdma)** `⭐ 69` `updated ≤90d` MDMA extends Markdown with interactive components like forms, approval gates, and webhooks so LLMs can generate actionable, schema-driven documents instead of plain text.
- **[caudena/beam_weaver](https://github.com/caudena/beam_weaver)** `⭐ 64` `updated ≤30d` Elixir-native LangChain, LangGraph, and DeepAgents for traceable LLM apps: OTP workflows, tools, memory, human-in-the-loop, streaming, custom clients/adapters, minimal deps, and WeaveScope tracing.
- **[qwed-verification](https://github.com/qwed-ai/qwed-verification)** `⭐ 59` `updated ≤90d` An open-source Python framework that uses symbolic verification, math, and logic to deterministically verify LLM outputs, SQL, and tool calls before they execute in production.
- **[simulate-sdk](https://github.com/future-agi/simulate-sdk)** `⭐ 58` `updated ≤180d` A Python SDK for simulating voice and text conversations to test AI agents against persona-driven scenarios.
- **[Langchain-hs](https://github.com/tusharad/langchain-hs)** `⭐ 56` `updated ≤180d` Haskell implementation of the LangChain framework for building LLM-powered applications.
- **[Intelli](https://github.com/intelligentnode/intelli)** `⭐ 55` `updated ≤90d` A Python framework for building multi-model chatbots and agent workflows with support for MCP and various AI providers.
- **[FastAPI Agents](https://github.com/blairhudson/fastapi-agents)** `⭐ 53` `updated >1y` A FastAPI extension for integrating and serving AI agent frameworks like PydanticAI, LlamaIndex, Smolagents, and CrewAI.
- **[MetaSpec](https://github.com/acnlabs/metaspec)** `⭐ 53` `updated ≤1y` A meta-specification framework designed to automatically generate spec-driven toolkits (speckits) for AI agents.
- **[PromptSite](https://github.com/dkuang1980/promptsite)** `⭐ 47` `updated >1y` PromptSite is a lightweight Python package for version controlling, tracking, and experimenting with LLM prompts.
- **[agenticfabriq/mnemiq](https://github.com/agenticfabriq/mnemiq)** `⭐ 46` `updated ≤30d` Open-source text-to-SQL engine you tune and measure on your own database.
- **[acunningham-ship-it/veilbrowser](https://github.com/acunningham-ship-it/veilbrowser)** `⭐ 43` `updated ≤30d` A TypeScript-native stealth browser driver that uses raw CDP to bypass bot detection for AI agents.
- **[BB-fat/browser-use-rs](https://github.com/bb-fat/browser-use-rs)** `⭐ 41` `updated ≤1y` A Rust library for browser automation via Chrome DevTools Protocol with built-in Model Context Protocol (MCP) server integration.
- **[KodeAgent](https://github.com/barun-saha/kodeagent)** `⭐ 41` `updated ≤90d` KodeAgent is a minimal AI agent engine that provides a reasoning core with ReAct, CodeAct, and function calling support.
- **[rhein1/agoragentic-integrations](https://github.com/rhein1/agoragentic-integrations)** `⭐ 40` `updated ≤90d` SDKs, MCP tooling, and protocol adapters for Agoragentic Agent OS, enabling deployed agents to route paid tasks, manage context via Micro ECF, and settle USDC transactions on Base L2.
- **[berriai/liteagents](https://github.com/berriai/liteagents)** `⭐ 32` `updated ≤30d` A provider-independent agent SDK with the same query() interface as the Claude Agent SDK, allowing you to use the right model for every turn.
- **[AgentOS](https://github.com/the-swarm-corporation/agentos)** `⭐ 31` `updated >1y` AgentOS is a single-file, SDK-based Python implementation of Karpathy's Agent OS architecture that provides a unified interface for multiple LLMs, browser automation, and multimodal tooling to build autonomous agents.
- **[MCP Plexus](https://github.com/super-i-tech/mcp_plexus)** `⭐ 30` `updated >1y` A Python framework built on FastMCP for building secure, multi-tenant Model Context Protocol (MCP) servers with integrated OAuth 2.1 and API key management.
- **[CoreAgent](https://github.com/coreagent-project/coreagent)** `⭐ 28` `updated >1y` CoreAgent is a lightweight Python framework for building LLM agents with shared stateful tools.
- **[mission69b/t2000](https://github.com/mission69b/t2000)** `⭐ 23` `updated ≤90d` t2000 is a TypeScript SDK, CLI, and MCP server providing agentic infrastructure for building conversational finance applications on the Sui blockchain.
- **[hive-sdk](https://github.com/hive-intel/hive-sdk)** `⭐ 20` `updated ≤90d` Public SDK, CLI, and MCP server providing crypto market and on-chain data access for AI agents.
- **[a2a4j](https://github.com/pheonixhkbxoic/a2a4j)** `⭐ 19` `updated >1y` A Java SDK and Spring Boot scaffold implementing Google's Agent-to-Agent (A2A) protocol for building interoperable, multi-vendor AI agents.
- **[ai](https://github.com/thirdweb-dev/ai)** `⭐ 19` `updated ≤180d` thirdweb AI is a Python SDK and MCP server that provides AI agents with blockchain capabilities for data analysis, wallet management, and smart contract interactions.
- **[kieranklaassen/ruby_llm-typesafe](https://github.com/kieranklaassen/ruby_llm-typesafe)** `⭐ 18` ruby_llm-typesafe - TypeSafe structured-output provider for RubyLLM 2.
- **[nestjs-a2a](https://github.com/thestupd/nestjs-a2a)** `⭐ 16` `updated >1y` A NestJS library and module for implementing Google's Agent-to-Agent (A2A) protocol to build type-safe, streaming-capable agents with JSON-RPC 2.0 compliant APIs.
- **[agent-terminal](https://github.com/jasonkneen/agent-terminal)** `⭐ 12` `updated ≤1y` A headless terminal automation library for AI agents that enables interaction with CLI applications via ASCII text capture and keyboard input.
- **[marzukia/charted](https://github.com/marzukia/charted)** `⭐ 11` `updated ≤90d` A zero-dependency Python library for generating SVG and PNG charts, featuring an integrated MCP server for agentic data visualization.
- **[typesafeai/typesafe-ui](https://github.com/typesafeai/typesafe-ui)** `⭐ 7` `updated ≤30d` shadcn-style reusable components and blocks for using TypeSafe AI.
- **[stumble/jev-go](https://github.com/stumble/jev-go)** `⭐ 6` jev-go - Community Go SDK for TypeSafe AI Jev / System One.
- **[Agently](https://github.com/maplemx/agently)** `⭐ 5` `updated ≤90d` Agently is a GenAI application development framework for building and managing AI agents with structured output, event-driven workflows, and model-agnostic configuration.
- **[bensyverson/goodall](https://github.com/bensyverson/goodall)** `⭐ 5` `updated ≤30d` A simple and extensible agent loop for Golang projects.
- **[nicolasmontone/jev-tool-permissions](https://github.com/nicolasmontone/jev-tool-permissions)** `⭐ 5` jev-tool-permissions — Adds tool-call approval and tool-list pruning to the Vercel AI SDK.
- **[nshkrdotcom/typesafe_sdk](https://github.com/nshkrdotcom/typesafe_sdk)** `⭐ 5` typesafe_sdk (post) - An idiomatic, type-safe Elixir port of the official TypeScript AI SDK (ai / ai-sdk) providing unified LLM integrations, streaming text and structured outputs, tool calling, and agentic workflows. Jev is their current flagship model and is the first System One model.
- **[dwgx/SmartCLI](https://github.com/dwgx/smartcli)** `⭐ 4` `updated ≤30d` A Python toolkit for enabling AI agents to drive, perceive, and render interactive terminal applications using a PTY and cell model.
- **[edamame-labs/tab-jev](https://github.com/edamame-labs/tab-jev)** `⭐ 4` `updated ≤30d` Pluggable framework for predictions on mixed text and tabular data (early development).
- **[rkocosmergon/cosmergon-agent](https://github.com/rkocosmergon/cosmergon-agent)** `⭐ 4` `updated ≤90d` A Python SDK and MCP server for deploying and managing autonomous AI agents that participate in a tick-based Conway's Game of Life economy with energy currency and marketplace trading.
- **[TypeSafeAI.Net](https://github.com/hawxy/typesafeai.net)** `⭐ 4` `updated ≤30d` .NET SDK for the TypeSafe AI platform.
- **[butochnikov/laravel-typesafe-jev](https://github.com/butochnikov/laravel-typesafe-jev)** `⭐ 3` `updated ≤30d` Unofficial Laravel integration for TypeSafe Jev AI with typed responses, async requests, scoped dependency injection, and testing fakes.
- **[genierobot/typesafe-ai-rails](https://github.com/genierobot/typesafe-ai-rails)** `⭐ 3` `updated ≤30d` typesafe-ai-rails - Community Rails integration on the typesafe-sdk gem: configuration, persisted usage and cost telemetry, and opt-in confidence policies.
- **[jvsteiner/jevex](https://github.com/jvsteiner/jevex)** `⭐ 3` jevex - Minimal agent loop where Jev directs control flow and a LangChain chat model writes argument values and the final response.
- **[chopmob-cloud/AlgoVoi-Platform-Adapters](https://github.com/chopmob-cloud/algovoi-platform-adapters)** `⭐ 2` `updated ≤90d` Production-ready payment adapters and integration plugins for connecting e-commerce platforms, AI agents, and no-code tools to the AlgoVoi multi-chain payment gateway.
- **[CNSLabs/agreements-api-sdk](https://github.com/cnslabs/agreements-api-sdk)** `⭐ 2` `updated ≤90d` A TypeScript SDK and MCP server for interacting with the Shodai Agreements API to manage machine-readable coordination workflows.
- **[debtstack-ai/debtstack-python](https://github.com/debtstack-ai/debtstack-python)** `⭐ 2` `updated ≤1y` Python SDK, LangChain tools, and MCP server providing corporate credit data for AI agents.
- **[degenlegion-com/waxseal-sdk](https://github.com/degenlegion-com/waxseal-sdk)** `⭐ 2` `updated ≤90d` WaxSeal SDK provides Ed25519 cryptographic identity for apps and AI agents, including an MCP server and TypeScript verification SDK.
- **[dolphinquant/echolon](https://github.com/dolphinquant/echolon)** `⭐ 2` `updated ≤90d` An LLM-agent-native backtest framework designed for conducting quantitative futures research.
- **[Fabio662/yieldagentx402-sdks](https://github.com/fabio662/yieldagentx402-sdks)** `⭐ 2` `updated ≤180d` A collection of SDKs and integration tools for the YieldAgentX402 platform, enabling secure, policy-gated financial execution for AI agents across 18 blockchain networks.
- **[loicfontaine-max/qorami-sdk](https://github.com/loicfontaine-max/qorami-sdk)** `⭐ 2` `updated ≤90d` An SDK and MCP server that provides a safety and governance layer for AI agents to control email communications.
- **[Mamba Agents](https://github.com/sequenzia/mamba-agents)** `⭐ 2` `updated ≤1y` A lightweight Python framework built on pydantic-ai that provides production-ready infrastructure for building AI agents, including context window management, token tracking, and observability.
- **[sapph1re/mcp-billing-gateway-sdk](https://github.com/sapph1re/mcp-billing-gateway-sdk)** `⭐ 2` `updated ≤90d` A client SDK and hosted gateway that adds Stripe subscriptions, per-call credits, and x402 crypto payments to any MCP server by proxying traffic through a billing layer.
- **[solido/jev_dart](https://github.com/solido/jev_dart)** `⭐ 2` jev\_dart — Jev Dart SDK to build cli, server and Flutter apps.
- **[Agent Cost Guardrails](https://github.com/sapph1re/agent-cost-guardrails)** `⭐ 1` `updated ≤90d` A pure Python middleware library that enforces hard budget limits, rate limits, and circuit breakers for AI agent frameworks including CrewAI, AutoGen, and LangGraph.
- **[azeemkafridi/bulkpublish-api](https://github.com/azeemkafridi/bulkpublish-api)** `⭐ 1` `updated ≤30d` The best free social media publishing and scheduling API. SDKs for Python & Node, MCP server for AI agents, 11 platforms.
- **[cole-gillespie/typesafe-go](https://github.com/cole-gillespie/typesafe-go)** `⭐ 1` `updated ≤30d` unofficial go SDK for typesafe AI, with typed answers, retries, and context support.
- **[homayoonalimohammadi/jev-sdk-go](https://github.com/homayoonalimohammadi/jev-sdk-go)** `⭐ 1` `updated ≤30d` jev-sdk-go - Go ecosystem: dependency-free Go 1.24+ client for Jev Noul, Choice and Score questions that reads Choice and Score answers back as the caller's own types, rejecting any label or level the question never offered, with retries, OpenRouter support, and eleven examples tested against an in-process fake of the API.
- **[marras0914/agent-toolbelt](https://github.com/marras0914/agent-toolbelt)** `⭐ 1` `updated ≤90d` A collection of stock research and utility tools for AI agents, accessible via a production API and npm SDK.
- **[MervinPraison/praisonai-mcp](https://github.com/mervinpraison/praisonai-mcp)** `⭐ 1` MervinPraison/praisonai-mcp : AI Agent framework with built-in MCP tools for search, memory, workflows, code execution, and file operations.
- **[System-R-AI/systemr-python](https://github.com/system-r-ai/systemr-python)** `⭐ 1` `updated ≤180d` A Python SDK for agents.systemr.ai providing 55 MCP-compatible tools and 25 broker integrations for building AI-driven trading agents with institutional-grade risk management.
- **[JEV ADK](https://github.com/abyakod/jev_adk)** `⭐ 0` `updated ≤30d` Agent Development Kit for System-One AI: Sub-100ms non-autoregressive decision pipelines, guardrails, and dual-brain agent orchestrator powered by TypeSafe AI's Jev.
- **[soulware-studio/promethic-mcp](https://github.com/soulware-studio/promethic-mcp)** `⭐ 0` soulware-studio/promethic-mcp ☁️ - Prompt library with versioned prompts and per-version model settings for text, image and JSON; tracks edits and proposes refined versions.
- **[TypeSafeAI](https://github.com/tryagi/typesafeai)** `⭐ 0` TypeSafeAI (site) - First-class, NativeAOT-ready .NET SDK for TypeSafe AI System One, generated with AutoSDK.
- **[AntV](https://github.com/antvis)** AntV is a data visualization team and open-source project that provides charting libraries and AI-powered visualization tools for developers.
- **[CSV-AI](https://docs.langchain.com/oss/python/langchain/overview)** LangChain is a code-first framework SDK for building LLM-powered agents and applications.
- **[LangChain](https://langchain.com)** LangChain is a code-first framework for building AI-powered applications and agent systems using abstractions for LLMs, tools, memory, and orchestration.
- **[Markstream Vue](https://markstream-vue.simonhe.me)** Markstream Vue – MIT-licensed streaming Markdown renderer for AI chat interfaces, with Mermaid, KaTeX, SSR, and Vue, React, Svelte, and Angular integrations.
- **[typesafe_sdk](https://docs.rs/typesafe-sdk-rust/latest/typesafe_sdk)** A Rust SDK providing type-safe access to generative AI APIs with structured output support.
- **[Vanna.AI](https://vanna.ai)** Vanna AI is an open-source framework for building SQL agents that allow users to query databases using natural language.
- **[Vercel AI SDK](https://ai-sdk.dev)** AI SDK is a unified TypeScript SDK for building AI apps with streaming, fallbacks, and multi-model support, powered by Vercel.

</details>

## Multi-Agent Systems

- **[TradingAgents](https://github.com/tauricresearch/tradingagents)** `⭐ 109.5k` `updated ≤90d` A multi-agent framework that coordinates LLM-powered roles—including researchers, analysts, and portfolio managers—to simulate and backtest financial trading strategies. <details><summary>More about</summary>

  It gives developers a ready-made LangGraph-based multi-agent architecture for building and experimenting with LLM-driven quantitative trading systems.

  _Because nothing says robust engineering like letting a committee of hallucination-prone language models argue your brokerage account into oblivion._

  `multi-agent` `finance` `trading` `langgraph` `framework`
  </details>
- **[MetaGPT](https://github.com/foundationagents/metagpt)** `⭐ 70.7k` `updated ≤1y` A multi-agent framework that simulates a software company by assigning specialized LLM roles—such as product managers, architects, and engineers—to automate the development lifecycle. <details><summary>More about</summary>

  It allows developers to transform a single requirement into a structured codebase, including documentation, APIs, and project architecture, using orchestrated Standard Operating Procedures (SOPs).

  _You might start by automating your boilerplate and end up being managed by an AI project manager that never sleeps._

  `multi-agent` `framework` `automation` `software-engineering` `llm-agents`
  </details>
- **[Microsoft AutoGen](https://github.com/microsoft/autogen)** `⭐ 61.3k` `updated ≤180d` AutoGen is a Microsoft-maintained framework for building multi-agent AI applications that can operate autonomously or collaborate with humans. <details><summary>More about</summary>

  It enables developers to compose, test, and orchestrate networks of LLM-driven agents for complex workflows without building agent communication from scratch.

  _Now you get to manage the coordination overhead of a team of AIs that still need you to debug their miscommunications._

  `agent-framework` `multi-agent` `orchestration` `llm` `python`
  </details>
- **[CrewAI](https://github.com/crewaiinc/crewai)** 🔥 `⭐ 59.3k` `updated ≤30d` Python framework for orchestrating role-playing, autonomous AI agents with collaborative intelligence. <details><summary>More about</summary>

  Enables developers to build and deploy multi-agent systems with granular control, event-driven workflows, and enterprise-grade observability.

  _Finally, a way to turn your internal monologue of self-doubt into a full-blown committee meeting._

  `multi-agent` `orchestration` `python-framework` `enterprise-ai` `autonomous-agents`
  </details>
- **[AgentScope](https://github.com/agentscope-ai/agentscope)** 🔥 `⭐ 32.7k` `updated ≤30d` AgentScope is a production-ready multi-agent framework with built-in support for event systems, permission management, and sandboxed workspaces. <details><summary>More about</summary>

  It provides the essential infrastructure—like multi-tenancy and isolated execution environments—needed to move agentic workflows from experimental scripts to stable services.

  _Nothing says 'production-ready' like adding a whole new orchestration layer to your stack just to manage the chaos of autonomous agents._

  `multi-agent` `orchestration` `sandbox` `infrastructure` `multi-tenancy`
  </details>
- **[deepagents](https://github.com/langchain-ai/deepagents)** `⭐ 29.9k` `updated ≤90d` An opinionated, batteries-included agent harness built on top of LangGraph and LangChain. <details><summary>More about</summary>

  It provides a standardized, production-ready implementation for complex multi-step agentic workflows, including sub-agents, persistent memory, and filesystem access.

  _Another layer in the LangChain abstraction stack to help you debug why your agent decided to delete your home directory._

  `langchain` `agents` `orchestration` `python` `typescript`
  </details>
- **[OpenAI Agents Python](https://github.com/openai/openai-agents-python)** `⭐ 29.8k` `updated ≤90d` A lightweight Python SDK from OpenAI for building and orchestrating multi-agent workflows with support for over 100 LLM providers. <details><summary>More about</summary>

  Developers can define agents with specific instructions and tools, then delegate tasks across a managed workflow without building orchestration logic from scratch.

  _Just when you thought you were done rewriting your stack for the latest agent framework, OpenAI releases the 'official' way to do it, rendering your three-week-old AutoGen implementation a legacy system._

  `python` `multi-agent` `sdk` `framework` `openai`
  </details>
- **[Sim](https://github.com/simstudioai/sim)** `⭐ 29.8k` Sim - Agent frameworks: open-source collaborative workspace for building, deploying, and monitoring AI agents featuring native TypeSafe System One evaluation and decision provider integration.
- **[OpenAI Swarm](https://github.com/openai/swarm)** `⭐ 22k` `updated ≤180d` Swarm is an educational, lightweight multi-agent orchestration framework from OpenAI that demonstrates agent coordination and handoffs using only the Chat Completions API. <details><summary>More about</summary>

  It provides a minimal, client-side pattern for composing specialized agents that hand off tasks to one another, serving as a reference implementation for multi-agent workflows.

  _OpenAI built a framework, documented it, gathered 21,000 stars, and then told everyone to migrate to a new SDK, leaving behind a perfectly good educational rabbit hole for developers who love rewriting their stacks._

  `multi-agent` `orchestration` `openai` `lightweight` `education`
  </details>
- **[Microsoft Agent Framework](https://github.com/microsoft/agent-framework)** `⭐ 13.9k` `updated ≤90d` Microsoft Agent Framework is a multi-language SDK for building, orchestrating, and deploying production-grade AI agents and multi-agent workflows in Python and .NET. <details><summary>More about</summary>

  It provides developers with a consistent, provider-agnostic foundation for graph-based orchestration, durability, and observability when moving agent systems from prototype to production.

  _Yet another framework to learn while you wait for the one true orchestration standard to emerge, presumably next Tuesday._

  `agents` `orchestration` `python` `dotnet` `sdk`
  </details>
- **[PraisonAI](https://github.com/mervinpraison/praisonai)** `⭐ 9.1k` `updated ≤90d` PraisonAI is an AI agent framework for building autonomous multi-agent systems that can research, plan, code, and execute tasks with built-in memory and RAG. <details><summary>More about</summary>

  It lets developers deploy self-improving agent workforces in 5 lines of code, reducing boilerplate for complex AI workflows.

  _The promise of hiring a 24/7 AI workforce that researches, plans, and executes tasks while you sleep is the kind of over-engineered fantasy that makes you question if you've outsourced your job to a hype-driven shell script._

  `agents` `framework` `multi-agent` `rag` `sdk`
  </details>
- **[AgentVerse](https://github.com/openbmb/agentverse)** `⭐ 5.2k` `updated >1y` AgentVerse is a Python framework for deploying multiple LLM-based agents in task-solving and simulation environments, supporting both automatic multi-agent collaboration and custom interaction scenarios. <details><summary>More about</summary>

  It provides developers with structured patterns for building multi-agent systems, including a software development system example, without requiring them to design coordination logic from scratch.

  _Yet another framework promising that if you just orchestrate enough agents, the code will practically write itself while you debug why the 'NLP Classroom' simulation thinks Python is a sentient being._

  `multi-agent` `framework` `simulation` `llm` `python`
  </details>
- **[AG2](https://github.com/ag2ai/ag2)** `⭐ 5k` `updated ≤30d` An open-source programming framework for building and coordinating multi-agent AI systems. <details><summary>More about</summary>

  It provides the core primitives for developers to design complex, autonomous multi-agent workflows and conversational patterns.

  _The abstraction layer for the inevitable multi-agent arms race._

  `agent-framework` `multi-agent` `python` `llm` `open-source`
  </details>
- **[Solace Agent Mesh](https://github.com/solacelabs/solace-agent-mesh)** `⭐ 4.9k` `updated ≤90d` An event-driven Python framework for building multi-agent AI systems that communicate via the Solace event mesh and coordinate complex, multi-step workflows. <details><summary>More about</summary>

  It gives developers a production-grade, decoupled architecture to orchestrate specialized AI agents with built-in support for A2A protocol, MCP, and dynamic external system integrations.

  _Yet another framework promising to solve multi-agent coordination, because the only thing missing from your stack was an event broker to help your agents argue asynchronously._

  `multi-agent` `event-driven` `framework` `orchestration` `python`
  </details>
- **[agency-swarm](https://github.com/vrsen/agency-swarm)** `⭐ 4.6k` `updated ≤90d` A Python framework for building multi-agent applications that extends the OpenAI Agents SDK with customizable agent roles, type-safe tools, and structured inter-agent communication flows. <details><summary>More about</summary>

  It lets developers model multi-agent workflows after real-world corporate hierarchies (CEO, Developer, Virtual Assistant) while maintaining full control over prompts and enabling production-grade orchestration.

  _Finally, a framework that lets you replicate corporate middle-management structures inside your codebase, because what your automation pipeline really needed was a CEO agent to ask for status updates from the Developer agent._

  `multi-agent` `orchestration` `python` `agent-framework` `openai-sdk`
  </details>
- **[Maestro](https://github.com/doriandarko/maestro)** `⭐ 4.4k` `updated >1y` A Python framework for orchestrating subagents using Claude Opus, GPT, or local LLMs to break down and execute tasks. <details><summary>More about</summary>

  It lets developers delegate complex, multi-step objectives to a hierarchy of specialized agents, automating task decomposition, execution, and refinement.

  _Now you can argue with a team of AI subagents about whether your task is actually done._

  `multi-agent` `orchestration` `python` `task-decomposition` `llm`
  </details>
- **[Langroid](https://github.com/langroid/langroid)** `⭐ 4.1k` `updated ≤90d` Langroid is a Python framework for building LLM-powered applications using multi-agent collaboration. <details><summary>More about</summary>

  It lets developers orchestrate LLM agents with tools and memory to solve complex tasks through message-passing, reducing boilerplate in agent-based AI apps.

  _Another framework promising to simplify multi-agent systems while adding yet another layer of abstraction to the LLM app stack._

  `multi-agent` `framework` `llm` `python`
  </details>
- **[LazyLLM](https://github.com/lazyagi/lazyllm)** `⭐ 3.9k` `updated ≤90d` LazyLLM is a low-code Python framework and development tool for building, deploying, and iterating on multi-agent LLM applications with support for fine-tuning and cross-platform infrastructure. <details><summary>More about</summary>

  It unifies the messy stack of inference, fine-tuning, vector databases, and agent orchestration into a single Lego-like assembly line for rapid prototyping and production deployment.

  _A low-code tool for people building multi-agent systems, proving that we have now successfully abstracted the need to understand the abstractions we just created._

  `multi-agent` `low-code` `framework` `rag` `fine-tuning`
  </details>
- **[EvoAgentX](https://github.com/anative-lab/evoagentx)** `⭐ 3.4k` `updated ≤90d` An open-source framework for building, evaluating, and evolving modular, self-optimizing multi-agent systems. <details><summary>More about</summary>

  It enables developers to move beyond static prompt chains by using automated feedback loops to evolve agent workflows dynamically.

  _Now you have to manage not just your code, but the evolving logic of the agents you've hired to write it._

  `agent-framework` `multi-agent` `self-evolving` `workflow-automation`
  </details>
- **[agentUniverse](https://github.com/agentuniverse-ai/agentuniverse)** `⭐ 2.4k` `updated ≤30d` A multi-agent framework designed for building complex, domain-expert applications through collaborative patterns. <details><summary>More about</summary>

  It provides structured collaborative patterns like PEER and DOE to help developers move beyond simple single-prompt LLM interactions to complex, reasoning-heavy multi-agent workflows.

  _Now you have to decide if your problem requires a simple script or a whole committee of specialized digital workers that might just argue with each other indefinitely._

  `multi-agent` `framework` `python` `llm` `automation`
  </details>
- **[OxyGent](https://github.com/jd-opensource/oxygent)** `⭐ 2.1k` `updated ≤90d` OxyGent is an open-source Python framework for building modular, observable, and evolvable multi-agent systems using standardized Oxy components. <details><summary>More about</summary>

  It lets developers assemble AI agents like LEGO bricks with dynamic planning, elastic architectures, and built-in evaluation loops for continuous improvement.

  _Finally, a framework that promises your agents will collaborate better than your last team standup._

  `multi-agent` `framework` `python` `modular-agents` `agent-orchestration`
  </details>
- **[trpc-group/trpc-agent-go](https://github.com/trpc-group/trpc-agent-go)** `⭐ 1.8k` trpc-agent-go 1,825 Go Apache-2.0 2026-09 Go framework for agents with graph workflows.
- **[uAgents](https://github.com/fetchai/uagents)** `⭐ 1.6k` `updated ≤90d` A Python framework for building and managing autonomous, decentralized AI agents. <details><summary>More about</summary>

  It provides a structured way to implement agent logic, secure identity via cryptography, and enable communication within a blockchain-backed network.

  _Nothing says 'future of the internet' quite like needing to manage cryptographic private keys just to get a Python script to talk to another script._

  `python` `multi-agent-systems` `decentralized-ai` `autonomous-agents`
  </details>
- **[rinadelph/Agent-MCP](https://github.com/rinadelph/agent-mcp)** `⭐ 1.3k` `updated ≤1y` Agent-MCP is a developer framework for building multi-agent systems that coordinate specialized AI agents through a shared memory graph and task management dashboard using the Model Context Protocol. <details><summary>More about</summary>

  It lets developers overcome single-agent context limits by running parallel, specialized agents that share persistent memory and task state across a project.

  _Finally, your AI agents can form a committee to over-engineer your codebase in parallel while you watch the dashboard instead of the code._

  `multi-agent` `mcp` `orchestration` `framework` `memory-graph`
  </details>
- **[pydantic-deepagents](https://github.com/vstorm-co/pydantic-deepagents)** `⭐ 1.1k` `updated ≤90d` pydantic-deepagents is a Python framework for building deep agent teams with tool calling, sandboxed execution, and multi-agent collaboration using Pydantic AI. <details><summary>More about</summary>

  It gives developers a structured, type-safe way to compose coding agents with memory, checkpoints, and unlimited context without managing low-level orchestration.

  _Finally, a way to feel productive while your agents debate whether to refactor the README or start a sub-agent war over indentation._

  `python` `agent-framework` `multi-agent` `pydantic-ai` `cli`
  </details>
- **[GPTSwarm](https://github.com/metauto-ai/gptswarm)** `⭐ 1.1k` `updated ≤1y` GPTSwarm is a graph-based Python framework for building LLM-based agents using nodes and edges, with built-in optimizers for self-improving multi-agent swarms. <details><summary>More about</summary>

  It gives developers a structured, code-first way to model, optimize, and run multi-agent systems where agent behaviors and inter-agent connections are explicit graph elements.

  _Just when you thought your codebase was complex enough, you can now model your agents as a self-optimizing graph and politely wonder which edge will fail first._

  `multi-agent` `graphs` `framework` `optimization` `swarm`
  </details>
- **[Agentarium](https://github.com/thytu/agentarium)** `⭐ 935` `updated ≤180d` Agentarium is a Python framework for creating, managing, and orchestrating multiple AI agents that can interact, maintain memory, and autonomously act within simulated environments. <details><summary>More about</summary>

  It provides developers with building blocks to script multi-agent simulations with checkpointing and custom actions, abstracting away the boilerplate of agent lifecycle management.

  _Another framework promising autonomous agents that 'act' and 'evolve', ensuring you can now orchestrate a digital society's worth of hallucinations in a single Python script._

  `multi-agent` `simulation` `python` `framework` `orchestration`
  </details>
- **[mcp-framework](https://github.com/quantgeekdev/mcp-framework)** `⭐ 929` `updated ≤180d` A TypeScript framework and CLI for building Model Context Protocol (MCP) servers with automatic discovery for tools, resources, and prompts. <details><summary>More about</summary>

  It gives developers a structured, type-safe way to build and validate custom MCP servers rather than wiring protocol boilerplate by hand.

  _Yet another framework promising to tame the MCP ecosystem, because apparently writing a server in 2024 still requires an opinionated CLI and a fresh set of abstractions._

  `mcp` `typescript` `framework` `cli` `servers`
  </details>
- **[IoA](https://github.com/openbmb/ioa)** `⭐ 832` `updated ≤1y` An open-source framework that connects diverse AI agents across distributed environments to autonomously form teams and collaboratively tackle complex tasks. <details><summary>More about</summary>

  It provides a structured runtime and protocol for composing heterogeneous agents like AutoGPT and Open Interpreter into nested, asynchronous teams instead of running them in isolation.

  _Just what every developer needs: a distributed system for autonomous agents to form committees and hold nested meetings about your Jira tickets._

  `multi-agent` `orchestration` `framework` `distributed` `llm`
  </details>
- **[CodeFuse-muAgent](https://github.com/codefuse-ai/codefuse-muagent)** `⭐ 777` `updated >1y` An open-source agent framework driven by an eventic knowledge graph that provides a Python SDK and a containerized runtime for building multi-agent workflows. <details><summary>More about</summary>

  It gives developers a way to script and deploy complex, knowledge-graph-backed multi-agent SOPs that integrate FunctionCall, RAG, and CodeInterpreter without replacing their existing stack.

  _You finally memorized LangGraph's node syntax, but now you need to understand eventic knowledge graphs because plain old 'agent orchestration' apparently wasn't academic enough._

  `multi-agent` `knowledge-graph` `agent-framework` `sdk` `orchestration`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+31 more in Multi-Agent Systems &nbsp;—&nbsp; click to expand</strong></summary>

- **[RAI](https://github.com/robotecai/rai)** `⭐ 597` `updated ≤180d` RAI is a vendor-agnostic agentic framework for Physical AI and robotics that integrates LLMs and multimodal models with ROS 2 to perform complex actions, scenarios, and human-robot interactions.
- **[Swarm](https://github.com/christopherkarani/swarm)** `⭐ 584` `updated ≤90d` A Swift framework for building stateful AI agent workflows natively on Apple and Linux platforms.
- **[FPF](https://github.com/ailev/fpf)** `⭐ 512` `updated ≤30d` A pattern language and core specification designed to bring explicit reasoning, auditability, and structure to complex engineering and human-AI collaborative work.
- **[Octochains](https://github.com/ahmadvh/octochains)** `⭐ 375` `updated ≤90d` A lightweight Python framework for parallel, isolated, and collaborative multi-agent reasoning and consensus.
- **[openai-agents-go](https://github.com/nlpodyssey/openai-agents-go)** `⭐ 273` `updated ≤1y` A Go port of the OpenAI Agents Python SDK for building multi-agent workflows with handoffs, guardrails, and tool-calling support.
- **[mangaba_ai](https://github.com/mangaba-ai/mangaba_ai)** `⭐ 209` `updated ≤90d` A lightweight Python framework for building multi-agent systems with ReAct reasoning, RAG, persistent memory, and support for multiple LLM providers including OpenRouter, Gemini, OpenAI, Claude, and HuggingFace.
- **[swarms-rs](https://github.com/the-swarm-corporation/swarms-rs)** `⭐ 179` `updated ≤1y` swarms-rs is a Rust-based framework for building and orchestrating multi-agent systems, designed to handle concurrent agent communication and collaboration with a focus on performance and memory safety.
- **[openai-swarm-node](https://github.com/youseai/openai-swarm-node)** `⭐ 147` `updated >1y` Swarm.js is a Node.js SDK implementing OpenAI's experimental Swarm framework for orchestrating multi-agent systems using the Chat Completions API.
- **[GenoMAS](https://github.com/liu-hy/genomas)** `⭐ 135` `updated ≤180d` A minimalist multi-agent framework for robust automation of scientific analysis workflows, such as gene expression analysis.
- **[Lux](https://github.com/spectral-finance/lux)** `⭐ 130` `updated ≤1y` Lux is an open-source, language-agnostic framework for building multi-agent systems using concepts like Agents, Signals, Prisms, Beams, and Lenses to orchestrate AI-driven workflows.
- **[Flock](https://github.com/whiteducksoftware/flock)** `⭐ 122` `updated ≤90d` Flock is a declarative blackboard-based framework for orchestrating multiple AI agents using type contracts and event-driven architecture.
- **[swarm_ex](https://github.com/nrrso/swarm_ex)** `⭐ 90` `updated >1y` An Elixir library for lightweight AI agent orchestration inspired by OpenAI's Swarm.
- **[ai-orchestra](https://github.com/langtail/ai-orchestra)** `⭐ 83` `updated >1y` AI Orchestra is a lightweight TypeScript library for orchestrating AI agents with state transitions and handoffs using Vercel's streamText.
- **[subagents-pydantic-ai](https://github.com/vstorm-co/subagents-pydantic-ai)** `⭐ 62` `updated ≤90d` Subagent delegation library for Pydantic AI that enables nested, dynamically spawned specialist agents with sync/async/auto execution modes and runtime agent creation.
- **[futuresearch-python](https://github.com/futuresearch/futuresearch-python)** `⭐ 57` `updated ≤90d` A Python SDK and MCP toolkit designed to deploy specialized multi-agent teams for forecasting, research, and data classification tasks.
- **[a2a-net](https://github.com/neuroglia-io/a2a-net)** `⭐ 55` `updated ≤1y` A .NET SDK and framework implementing the Agent-to-Agent (A2A) protocol to enable JSON-RPC based communication, discovery, and task orchestration between autonomous agents across different frameworks.
- **[agent-swarm-kit](https://github.com/tripolskypetr/agent-swarm-kit)** `⭐ 39` `updated ≤90d` A TypeScript npm library for building orchestrated, framework-agnostic multi-agent AI systems with session management, agent testing utilities, and MCP server connectivity.
- **[shifts](https://github.com/aaronrussell/shifts)** `⭐ 37` `updated >1y` An Elixir framework for composing autonomous AI agent workflows using various LLM backends.
- **[jackispm/nausicaa-harness](https://github.com/jackispm/nausicaa-harness)** `⭐ 33` Nausicaa — TypeScript CLI/runtime for general-purpose agent tasks with addressable Lanes, an optional Teto observer lane, durable Run ledgers, daemon/worker lifecycle, and cross-Run A2A. npm nausicaa-harness, MIT.
- **[mifune-dev/a2a-langgraph](https://github.com/mifunedev/a2a-langgraph)** `⭐ 33` `updated >1y` A2A Protocol implementation built on LangGraph that exposes a currency conversion agent via the Agent-to-Agent protocol.
- **[SwiftSwarm](https://github.com/jamesrochabrun/swiftswarm)** `⭐ 23` `updated >1y` Swift framework for lightweight multi-agent orchestration inspired by OpenAI's Swarm library.
- **[swarm-ai](https://github.com/intelliswarm-ai/swarm-ai)** `⭐ 20` `updated ≤90d` A Java-based multi-agent orchestration framework built on Spring AI that enables dynamic skill generation, runtime capability detection, and enterprise-grade governance for agent workflows.
- **[qualixar/slm-mesh](https://github.com/qualixar/slm-mesh)** `⭐ 18` qualixar/slm-mesh : Peer-to-peer communication mesh for AI coding agents with 8 MCP tools.
- **[prescott-data/jarviscore-framework](https://github.com/prescott-data/jarviscore-framework)** `⭐ 17` JarvisCore - Agent frameworks: Python multi-agent runtime that ships Jev natively from 1.12, where agents ask typed Choice, Score and Noul questions through a decision client separate from the text model, the Kernel picks a specialist subagent by Choice, and each retrieved RAG passage is withheld from the generating model when its prompt-injection Noul exceeds 0.70.
- **[Flux0](https://github.com/flux0-ai/flux0)** `⭐ 14` `updated >1y` Flux0 is a framework for deploying and orchestrating AI agents with real-time streaming, session management, and LLM-agnostic integration.
- **[ruby-openai-swarm](https://github.com/graysonchen/ruby-openai-swarm)** `⭐ 11` `updated >1y` A Ruby-based framework adapted from OpenAI’s Swarm for lightweight multi-agent orchestration.
- **[Voltmachines](https://github.com/ssdeanx/voltmachines)** `⭐ 5` `updated >1y` A TypeScript framework for building orchestrated multi-agent systems with persistent memory, tool integration, and a supervisor-based delegation architecture.
- **[aurumflux20/effectfence](https://github.com/aurumflux20/effectfence)** `⭐ 0` `updated ≤30d` A Rust library and MCP server that provides a causal concurrency fence to prevent duplicate side effects in multi-agent tool calls.
- **[AutoGen Documentation](https://microsoft.github.io/autogen)** AutoGen is a code-first multi-agent framework for building AI-powered applications and agent systems.
- **[BondAI](https://bondai.dev)** BondAI is an autonomous AI agent framework for developers.
- **[CrewAI](https://crewai.io)** CrewAI is a code-first Python framework for building multi-agent AI systems.

</details>

## Provider & Model Abstractions

- **[LiteLLM](https://github.com/berriai/litellm)** 🔥 `⭐ 60.1k` `updated ≤30d` LiteLLM is an open-source AI gateway that provides a unified OpenAI-compatible API to call 100+ LLM providers with cost tracking, guardrails, and load balancing. <details><summary>More about</summary>

  It eliminates vendor lock-in and integration friction when switching between LLMs, letting developers write provider-agnostic code.

  _The quiet dread of realizing you’ve built your entire LLM abstraction layer on top of someone else’s LLM abstraction layer._

  `llm-gateway` `openai-compatible` `ai-proxy`
  </details>
- **[AI](https://github.com/vercel/ai)** `⭐ 27.1k` `updated ≤90d` The AI SDK is a provider-agnostic TypeScript toolkit for building AI-powered applications and agents using React, Next.js, and other UI frameworks. <details><summary>More about</summary>

  It lets developers integrate multiple LLM providers with a unified API and build generative UIs without locking into a single vendor.

  _Another abstraction layer to forget which provider you're actually using when the bill shows up._

  `ai-sdk` `typescript` `llm` `ui`
  </details>
- **[SimpleAIChat](https://github.com/minimaxir/simpleaichat)** `⭐ 3.5k` `updated >1y` Python package for easily interfacing with chat apps like ChatGPT and GPT-4 with minimal code complexity. <details><summary>More about</summary>

  Lets developers quickly prototype AI chat interactions without wrestling with API boilerplate or token management.

  _Yet another wrapper that makes you wonder if you're building something real or just wrapping OpenAI in increasingly cute abstractions._

  `python` `chatbot` `openai-wrapper`
  </details>
- **[mimo](https://github.com/xiaomimimo/mimo)** `⭐ 2.4k` `updated >1y` MiMo is a 7-billion-parameter language model trained from scratch with enhanced pre-training and post-training techniques to improve reasoning in math and code tasks. <details><summary>More about</summary>

  Developers can use this open-weight reasoning model as a drop-in replacement for larger models when building coding assistants or agent systems that require strong logical reasoning.

  _Another LLM claiming to unlock reasoning potential, adding to the pile of models developers must evaluate before their actual coding work begins._

  `llm` `reasoning` `open-weight`
  </details>
- **[Mirascope](https://github.com/mirascope/mirascope)** `⭐ 1.5k` `updated ≤90d` Mirascope is a Python and TypeScript library that provides a unified, decorator-based interface for calling multiple frontier LLMs and building structured-output agents with tool use. <details><summary>More about</summary>

  It lets developers write model-agnostic LLM calls and agent logic once using familiar decorator patterns and Pydantic types, reducing lock-in to a single provider.

  _Yet another heroic abstraction layer promising to save you from vendor lock-in, right up until your favorite model deprecates its API and you realize the abstraction leaked anyway._

  `llm` `python` `typescript` `agents` `abstraction`
  </details>
- **[openrouterteam/ai-sdk-provider](https://github.com/openrouterteam/ai-sdk-provider)** `⭐ 688` The OpenRouter provider for the Vercel AI SDK contains support for hundreds of models through the OpenRouter chat and completion APIs.
- **[agentjido/req_llm](https://github.com/agentjido/req_llm)** `⭐ 589` `updated ≤30d` Composable Elixir library for LLM interactions built on Req and Finch.
- **[ormb](https://github.com/kleveross/ormb)** `⭐ 474` `updated >1y` An open-source model registry that manages ML/DL models using OCI artifacts and Docker-like workflows. <details><summary>More about</summary>

  It lets developers version, share, and deploy machine learning models using familiar container registry patterns and tooling.

  _Now you can treat your models like Docker images, because nothing says 'production-ready' like pretending your 2GB checkpoint is a lightweight microservice._

  `model-registry` `oci-artifacts` `mlops` `docker-registry` `model-versioning`
  </details>
- **[openapi](https://github.com/longbridge/openapi)** `⭐ 460` `updated ≤90d` Longbridge OpenAPI SDK provides multi-language (Rust, Python, Node.js, Java, C, C++) bindings and an MCP server implementation for programmatic trading, quotes, and portfolio data on the Longbridge platform. <details><summary>More about</summary>

  It gives developers the building blocks to automate financial strategies and integrate real-time market data into their own apps or AI agents.

  _Yet another SDK for turning every hobbyist trader into a part-time DevOps engineer maintaining their own fragile, multi-language quant stack._

  `sdk` `fintech` `mcp` `trading` `multi-language`
  </details>
- **[System One adapter (Python)](https://github.com/typesafe-ai/system-one-adapter-python)** `⭐ 376` System One adapter (Python) - Official drop-in TypeSafeClient replacement backed by OpenAI, Anthropic, and compatible LLM APIs, for comparing Jev against chat models.
- **[OpenLM](https://github.com/r2d4/openlm)** `⭐ 368` `updated >1y` An OpenAI-compatible Python client that lets developers call models from Hugging Face, Cohere, and other providers using the standard OpenAI API interface. <details><summary>More about</summary>

  It allows developers to swap or multiplex LLM providers without rewriting application code by maintaining drop-in compatibility with the OpenAI SDK.

  _Yet another abstraction layer promising vendor independence, ensuring you can now debug compatibility issues across five providers instead of one._

  `llm` `openai-compatible` `python` `provider-abstraction`
  </details>
- **[typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python)** `⭐ 262` TypeSafe Python SDK (site) - Official sync and async Python client. pip install typesafe-sdk.
- **[cequence-io/openai-scala-client](https://github.com/cequence-io/openai-scala-client)** `⭐ 255` `updated ≤30d` Scala client for OpenAI API and other major LLM providers.
- **[llm.ts](https://github.com/r2d4/llm.ts)** `⭐ 213` `updated >1y` A zero-dependency TypeScript library providing a single API to call over 30 LLMs from providers like OpenAI, Cohere, and HuggingFace. <details><summary>More about</summary>

  It lets developers write model-agnostic code and test prompts across multiple providers without bundling heavy framework dependencies.

  _Yet another abstraction layer promising freedom from vendor lock-in, assuming you didn't already achieve the same thing with a heavier framework two years ago._

  `typescript` `llm-client` `provider-abstraction` `zero-dependency`
  </details>
- **[mux-node-sdk](https://github.com/muxinc/mux-node-sdk)** `⭐ 181` `updated ≤180d` Official Node.js/TypeScript SDK and bundled MCP server for the Mux video platform, providing REST API access and AI assistant integrations for video streaming and analytics. <details><summary>More about</summary>

  It lets developers automate video asset management and live streaming workflows directly from code or through AI assistants via the included MCP server.

  _Now your AI agent can debug your video transcoding pipeline and ask for more quota in the same breath._

  `mux` `video` `sdk` `node` `mcp`
  </details>
- **[api7/aisix](https://github.com/api7/aisix)** `⭐ 175` `updated ≤30d` An open-source, Rust-native AI gateway that unifies multiple LLM providers under a single OpenAI-compatible API. <details><summary>More about</summary>

  It provides a single control point for managing routing, guardrails, caching, and observability across various model providers.

  _Because your architecture isn't truly production-ready until you've added a high-performance Rust proxy between your code and your LLM._

  `rust` `ai-gateway` `llmops` `proxy` `observability`
  </details>
- **[Glide](https://github.com/einstack/glide)** `⭐ 160` `updated >1y` Glide is a cloud-native LLM gateway for managing and communicating with external model providers, offering unified APIs, failover, caching, and key management. <details><summary>More about</summary>

  It abstracts away provider-specific complexity, enabling developers to swap model providers without changing application code while adding resiliency and observability.

  _Finally, a way to pretend your LLM dependencies are just another microservice—until the rate limits hit._

  `llm-gateway` `llmops` `provider-abstraction` `cloud-native` `go`
  </details>
- **[weibaohui/kom](https://github.com/weibaohui/kom)** `⭐ 149` `updated ≤1y` kom is a Go SDK wrapper for Kubernetes operations that provides kubectl-like functionality with CRD support, SQL querying, and MCP server capabilities. <details><summary>More about</summary>

  It simplifies Kubernetes resource management for developers by offering a programmatic interface with advanced features like SQL queries and multi-cluster MCP support.

  _Another tool promising to replace kubectl while adding yet another layer to remember when your pod is crashing at 3 AM._

  `kubernetes` `sdk` `mcp` `sql`
  </details>
- **[NeuroLink](https://github.com/juspay/neurolink)** `⭐ 142` `updated ≤90d` A TypeScript SDK and platform that unifies 24+ LLM providers, MCP servers, voice, RAG, and memory under a single interface for production AI integrations. <details><summary>More about</summary>

  Developers can swap LLM providers, integrate MCP servers, and manage AI workflows (voice, RAG, memory) without rewriting core logic, reducing vendor lock-in and operational overhead.

  _Finally, a way to pretend the AI ecosystem isn’t a fragmented mess of incompatible APIs—until the next provider-specific quirk breaks your abstraction layer._

  `llm-abstraction` `mcp-native` `typescript-sdk` `production-ai` `multi-provider`
  </details>
- **[Groq Ruby](https://github.com/drnic/groq-ruby)** `⭐ 116` `updated >1y` A Ruby client library for interacting with the Groq Cloud API, which provides fast and cheap LLM inference. <details><summary>More about</summary>

  It gives Ruby developers a convenient way to integrate Groq's high-speed, low-cost LLM models into their applications without writing raw HTTP calls.

  _Because nothing says 'modern Ruby' like wrapping yet another OpenAI-compatible API in a gem._

  `ruby` `llm-client` `groq` `sdk`
  </details>
- **[ChatAbstractions](https://github.com/andrewnguonly/chatabstractions)** `⭐ 84` `updated >1y` ChatAbstractions is a LangChain-based library that provides wrapper classes for dynamic failover, load balancing, chaos engineering, and custom routing of chat models. <details><summary>More about</summary>

  It lets developers swap or balance LLM providers at runtime without changing application code, improving resilience and cost control in LLM-powered apps.

  _Yet another abstraction layer that makes you feel like you're wrestling with YAML and inheritance just to avoid calling OpenAI directly when it's down._

  `langchain` `llm-routing` `failover` `load-balancing`
  </details>
- **[coingecko-typescript](https://github.com/coingecko/coingecko-typescript)** `⭐ 58` `updated ≤30d` A TypeScript library for accessing the CoinGecko REST API with optional MCP server integration for AI assistants. <details><summary>More about</summary>

  Provides typed access to real-time cryptocurrency data for developers building financial or trading applications.

  _Yet another API wrapper that promises to simplify crypto integration while subtly nudging you toward MCP hype you didn't ask for._

  `typescript` `api-client` `cryptocurrency` `mcp`
  </details>
- **[Spring AI TypeSafe](https://github.com/spring-ai-community/spring-ai-typesafe)** `⭐ 47` spring-ai-typesafe (site) - A Java SDK for the TypeSafe AI JEV API, & Spring AI TypeSafe integrations.
- **[danvega/jev-spring-boot-starter](https://github.com/danvega/jev-spring-boot-starter)** `⭐ 39` `updated ≤30d` A simple Spring Boot 4 starter for TypeSafe Jev using Spring MVC and RestClient.
- **[s2-streamstore/s2-sdk-typescript](https://github.com/s2-streamstore/s2-sdk-typescript)** `⭐ 35` `updated ≤90d` Official TypeScript SDK for S2, a managed serverless service providing durable, real-time append-only streams with random read access. <details><summary>More about</summary>

  It gives developers a typed, programmable interface to build event-driven and streaming workflows on top of a managed durable stream store without rolling their own append-log infrastructure.

  _Another managed stream primitive enters the arena, just in case your current stack of queues, logs, and brokers wasn’t quite metastable enough._

  `typescript` `sdk` `streaming` `durable-streams` `real-time`
  </details>
- **[pnthn-ai/polar_llama](https://github.com/pnthn-ai/polar_llama)** `⭐ 30` polar\_llama — A Polars library for parallel provider inference that also calls Jev per row as Noul, Choice, and Score questions, or as one typed contract over a document.
- **[Hyv](https://github.com/blib-la/hyv)** `⭐ 24` `updated >1y` Hyv is a library for integrating and managing multiple AI models through a unified API and agent-based architecture. <details><summary>More about</summary>

  It simplifies working with diverse AI models by providing plug-and-play adapters and task delegation between agents.

  _Another wrapper layer promising seamless AI collaboration while you secretly wonder if you're just adding more YAML to your stack._

  `ai-library` `model-integration` `agent-framework`
  </details>
- **[ainame/swift-typesafe](https://github.com/ainame/swift-typesafe)** `⭐ 16` `updated ≤30d` Unofficial Swift SDK for TypeSafe.
- **[sanmai/typesafe-ai-php](https://github.com/sanmai/typesafe-ai-php)** `⭐ 14` SDKs & clients (2): typesafe-ai-php, SystemOneSharp.
- **[twister915/typesafe-ai](https://github.com/twister915/typesafe-ai)** `⭐ 13` typesafe-ai - Typed TypeSafe AI clients for Rust, with async and blocking backends and observable retries.

<details><summary><strong>▸ &nbsp;&nbsp;+72 more in Provider & Model Abstractions &nbsp;—&nbsp; click to expand</strong></summary>

- **[atharvamhaske/typesafe-sdk-go](https://github.com/atharvamhaske/typesafe-sdk-go)** `⭐ 12` `updated ≤30d` unofficial go sdk for typesafe ai. not affiliated with or endorsed by typesafe ai. a side project built to fill the missing go sdk gap, for the community to use.
- **[saibimajdi/typesafeai-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk)** `⭐ 12` typesafe-dotnet-sdk (site) - Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI.
- **[fxmacrodata/fxmacrodata](https://github.com/fxmacrodata/fxmacrodata)** `⭐ 9` `updated ≤30d` Python client library to give traders, quants, and analysts access to forex macroeconomic data via the FXMacroData API.
- **[gate4agent](https://github.com/zeng3ld/gate4agent)** `⭐ 9` `updated ≤180d` Universal Rust wrapper for CLI AI agents (Claude Code, Codex, Gemini). PTY mirror and pipe/NDJSON modes with tokio broadcast fan-out.
- **[tangerg/typesafe-sdk-go](https://github.com/tangerg/typesafe-sdk-go)** `⭐ 9` typesafe-sdk-go (Tangerg) - Go SDK for the TypeSafe AI API — typed questions in, probability distributions out.
- **[devbackend/jevgo](https://github.com/devbackend/jevgo)** `⭐ 8` `updated ≤30d` Unofficial Go client for the TypeSafe AI System One API (Jev) — typed questions in, calibrated answers out.
- **[JevSwiftSDK](https://github.com/nsstudent/jevswiftsdk)** `⭐ 8` JevSwiftSDK - An independent, type-safe Swift SDK for TypeSafe Jev, with async/await, batching, retries, and SPM support.
- **[ticofab/scala-jev-sdk](https://github.com/ticofab/scala-jev-sdk)** `⭐ 8` scala-jev-sdk - Effect-agnostic Scala 3 client for the System One API that runs on any sttp backend (Future, cats-effect, ZIO, Monix, or blocking) with answers typed by question value.
- **[gilljon/typesafe-ai-rs](https://github.com/gilljon/typesafe-ai-rs)** `⭐ 7` `updated ≤30d` Independent async and blocking Rust SDK for the TypeSafe AI System One API.
- **[haileyok/typesafe-client](https://github.com/haileyok/typesafe-client)** `⭐ 7` `updated ≤30d` Unofficial Go and Rust clients for the TypeSafe AI System One API (Jev).
- **[joshmn/typesafe-sdk](https://github.com/joshmn/typesafe-sdk)** `⭐ 7` typesafe-sdk (joshmn) - Ruby client for typesafe.ai.
- **[claw-army/claude-node](https://github.com/claw-army/claude-node)** `⭐ 6` `updated ≤180d` claude-node is a thin Python subprocess bridge for controlling the local Claude Code CLI as a long-lived process with stream-json communication.
- **[olti1947/jev-java](https://github.com/olti1947/jev-java)** `⭐ 6` jev-java - Idiomatic Java SDK for TypeSafe AI Jev System One decision engine.
- **[gudcks0305/jev-java](https://github.com/gudcks0305/jev-java)** `⭐ 5` `updated ≤30d` Unofficial Java SDK for TypeSafe Jev and Vercel AI Gateway, with Spring Boot and WebClient support.
- **[jamesward/zio-typesafe-ai](https://github.com/jamesward/zio-typesafe-ai)** `⭐ 5` zio-typesafe-ai - Scala 3 / ZIO client for the System One API: typed end-to-end, several questions per round-trip via NamedTuple.
- **[luigivis/jev-sdk-java](https://github.com/luigivis/jev-sdk-java)** `⭐ 5` jev-sdk-java - Type-safe Java 21 client for the TypeSafe AI Jev (System One) decision API.
- **[alterhq/typesafe-sdk-swift](https://github.com/alterhq/typesafe-sdk-swift)** `⭐ 4` `updated ≤30d` Unofficial Swift library for the TypeSafe API.
- **[glaksmono/finbud-data-mcp](https://github.com/glaksmono/finbud-data-mcp)** `⭐ 4` `updated >1y` A TypeScript library providing access to the Finbud Data REST API for financial market data.
- **[gpartin/WaveGuardClient](https://github.com/gpartin/waveguardclient)** `⭐ 4` `updated ≤180d` Python SDK for WaveGuard, a physics-based anomaly detection API that works on any data type with a single stateless call.
- **[jamilxt/typesafe-ai-java](https://github.com/jamilxt/typesafe-ai-java)** `⭐ 4` typesafe-ai-java - Community-maintained Java SDK for the TypeSafe AI System One (Jev) API. Not an official TypeSafe product.
- **[kisshan13/typesafe-ai-go](https://github.com/kisshan13/typesafe-ai-go)** `⭐ 4` typesafe-ai-go - Community-maintained Go SDK for the TypeSafe AI System One evaluation API, with typed questions, fluent builders, retries, and examples.
- **[maayanlevy/mysql-ailike](https://github.com/maayanlevy/mysql-ailike)** `⭐ 4` mysql-ailike - MySQL native AILIKE / ailike UDFs for natural-language row filters and joins via TypeSafe Jev (Linux plugin; GPL-2.0). Project guide.
- **[AlexanderLawson17/revettr-python](https://github.com/alexanderlawson17/revettr-python)** `⭐ 3` `updated ≤180d` Python client SDK for Revettr's counterparty risk scoring API, designed for AI agents transacting via x402 on Base.
- **[brightshore/jev-net](https://github.com/brightshore/jev-net)** `⭐ 3` `updated ≤30d` A lightweight .NET client for the TypeSafe AI API (System One / Jev). One dependency; a faithful port of the official Python SDK.
- **[codeitlikemiley/typesafe-sdk-rust](https://github.com/codeitlikemiley/typesafe-sdk-rust)** `⭐ 3` `updated ≤30d` Rust SDK for the TypeSafe AI API.
- **[hardkoded/typesafe-sdk-dotnet](https://github.com/hardkoded/typesafe-sdk-dotnet)** `⭐ 3` `updated ≤30d` Unofficial .NET port of the TypeSafe AI client SDK (typed questions & answers).
- **[iamtalha-arshad/ex_typesafe_ai](https://github.com/iamtalha-arshad/ex_typesafe_ai)** `⭐ 3` ex_typesafe_ai - Unofficial Elixir client for the TypeSafe AI API — typed structs, Req-based HTTP with retries, and ergonomic noul/choice/score questions. Project guide.
- **[insanearts/typesafe-sdk-swift](https://github.com/insanearts/typesafe-sdk-swift)** `⭐ 3` typesafe-sdk-swift - Swift SDK for TypeSafe AI.
- **[kkloudtarus/taurus-jev-sdk-go](https://github.com/kkloudtarus/taurus-jev-sdk-go)** `⭐ 3` taurus-jev-sdk-go - Unofficial stdlib Go client for TypeSafe System One/Jev with validated responses and masked credentials (distinct from jmelahman). Project guide.
- **[pewriebontal/typesafe-sdk-cpp](https://github.com/pewriebontal/typesafe-sdk-cpp)** `⭐ 3` typesafe-sdk-cpp - An unofficial CPP 20 SDK for the TypeSafe API.
- **[sd109/typesafe-go](https://github.com/sd109/typesafe-go)** `⭐ 3` typesafe-go - A collection of typesafe.ai API utilities.
- **[zhirschtritt/typesafe-go](https://github.com/zhirschtritt/typesafe-go)** `⭐ 3` typesafe-go (zhirschtritt) - Idiomatic Go SDK for the TypeSafe AI API.
- **[binnash/typesafe-sdk](https://github.com/binnash/typesafe-sdk)** `⭐ 2` `updated ≤30d` PHP & Laravel SDK for TypeSafe AI's JEV Model series.
- **[fgn/jevgo](https://github.com/fgn/jevgo)** `⭐ 2` `updated ≤30d` Go client for TypeSafe AI's System One API (Jev), with optional Langfuse instrumentation.
- **[mattneel/typesafe](https://github.com/mattneel/typesafe)** `⭐ 2` typesafe - An idiomatic Elixir client for the TypeSafe AI API.
- **[mzainzulifqar/jev-php-sdk](https://github.com/mzainzulifqar/jev-php-sdk)** `⭐ 2` jev-php-sdk (site) - PHP SDK for TypeSafe's Jev: send text and typed questions, get typed answers with calibrated confidence. PHP 8.1+, works with any PSR-18 client, Laravel 8–13.
- **[typesafe-sdk-csharp/typesafe-sdk](https://github.com/typesafe-sdk-csharp/typesafe-sdk)** `⭐ 2` TypeSafe.AI (.NET SDK) - Unofficial .NET System One client (NuGet TypeSafe.AI) with DI, resilience, and OTel; distinct from TypeSafeAI.Net. Project guide.
- **[vicente-md/jev-resilience](https://github.com/vicente-md/jev-resilience)** `⭐ 2` jev-resilience — A Spring WebFlux integration that detects error messages hidden in HTTP 200 response bodies.
- **[afurm/typesafe-sdk-ruby](https://github.com/afurm/typesafe-sdk-ruby)** `⭐ 1` `updated ≤30d` Unofficial Ruby SDK for the TypeSafe AI API (Jev model) - typed questions, retries, and typed errors. Community port of typesafe-sdk-js.
- **[ajayk/jev-go-sdk](https://github.com/ajayk/jev-go-sdk)** `⭐ 1` `updated ≤30d` Dependency-free Go client for TypeSafe AI's System One API and the Jev model.
- **[chez-shanpu/typesafeai-go](https://github.com/chez-shanpu/typesafeai-go)** `⭐ 1` `updated ≤30d` Go SDK for TypeSafe AI API https://docs.typesafe.ai/api.
- **[Davison-Francis/min8t-sdks](https://github.com/davison-francis/min8t-sdks)** `⭐ 1` `updated ≤180d` Open-source SDKs and MCP server for DeliverIQ email verification and the MiN8T email editor.
- **[dwisiswant0/typesafe-sdk-go](https://github.com/dwisiswant0/typesafe-sdk-go)** `⭐ 1` `updated ≤30d` Go SDK for TypeSafe AI.
- **[guillemus/jev-go](https://github.com/guillemus/jev-go)** `⭐ 1` `updated ≤30d` Unofficial Go SDK for TypeSafe AI's Jev API.
- **[hnegishi/typesafe-ai-ruby](https://github.com/hnegishi/typesafe-ai-ruby)** `⭐ 1` `updated ≤30d` Ruby client for the TypeSafe AI(Jev) System One API.
- **[jedimemo/typesafe-client](https://github.com/jedimemo/typesafe-client)** `⭐ 1` typesafe-client - Unofficial typed async Rust client for the TypeSafe System One API.
- **[Jev Symfony Bundle](https://github.com/vbcherepanov/jev-symfony-bundle)** `⭐ 1` Jev Symfony Bundle - Unofficial Symfony bundle for TypeSafe Jev: typed client, validator constraints, Messenger, Workflow guards, and profiler. Project guide.
- **[Jevlin](https://github.com/copyleftdev/jevlin)** `⭐ 1` `updated ≤30d` Zig SDK for TypeSafe AI's Jev decision API. Typed classification, scoring and yes/no probabilities with bounded buffers, retries and deadlines.
- **[kunobi-ninja/kunobi-jev](https://github.com/kunobi-ninja/kunobi-jev)** `⭐ 1` kunobi-jev - Rust client for the TypeSafe System One API (Jev).
- **[marandaneto/typesafe-sdk-swift](https://github.com/marandaneto/typesafe-sdk-swift)** `⭐ 1` typesafe-sdk-swift — An experimental Swift SDK for TypeSafe using Swift Package Manager, Swift concurrency, and URLSession.
- **[mattneel/typesafe.zig](https://github.com/mattneel/typesafe.zig)** `⭐ 1` typesafe.zig - An idiomatic Zig client for the TypeSafe AI API.
- **[pickelfintech/sentisift-sdks](https://github.com/pickelfintech/sentisift-sdks)** `⭐ 1` `updated ≤90d` Official Python, TypeScript, and MCP-server clients for the SentiSift comment-moderation and sentiment analysis API.
- **[unimtx/typesafe-sdk-go](https://github.com/unimtx/typesafe-sdk-go)** `⭐ 1` typesafe-sdk-go (unimtx) - Community Go SDK for the TypeSafe System One API with typed Choice, Score, and Noul questions plus retries, contexts, and structured errors.
- **[vinnie357/typesafe_sdk_ex](https://github.com/vinnie357/typesafe_sdk_ex)** `⭐ 1` typesafe_sdk_ex - Typesafe AI SDK in Elixir using Req.
- **[zchee/typesafe-sdk-rust](https://github.com/zchee/typesafe-sdk-rust)** `⭐ 1` typesafe-sdk-rust (zchee) (site) - Unofficial async Rust SDK for the TypeSafe AI System One API: typed questions via #[derive(QuestionSet)], a port of typesafe-sdk-python.
- **[.github](https://github.com/flyflow-devs/.github)** `⭐ 0` `updated >1y` Flyflow is an API middleware written in Go designed to optimize LLM application performance by improving response quality, latency, and reliability.
- **[auroracapital/upres-cli](https://github.com/auroracapital/upres-cli)** `⭐ 0` `updated ≤30d` Official CLI + SDK for upres.ai — image, video, and speech restoration. 14 public aliases, up to 8K.
- **[dfa1/typesafe-java](https://github.com/dfa1/typesafe-java)** `⭐ 0` `updated ≤30d` Java client and CLI for the TypeSafe AI API.
- **[dotnetvibecoderz/vibe_sdk](https://github.com/dotnetvibecoderz/vibe_sdk)** `⭐ 0` `updated ≤30d` SDKs that created by vibing.
- **[hfiguera/typesafe_ai](https://github.com/hfiguera/typesafe_ai)** `⭐ 0` `updated ≤30d` An Elixir client for TypeSafe AI with typed responses and bounded concurrency.
- **[shubham510/typesafe-go](https://github.com/shubham510/typesafe-go)** `⭐ 0` Unofficial Go SDK for TypeSafe AI's System One API (Jev).
- **[signaltech-org/bolthub-sdk](https://github.com/signaltech-org/bolthub-sdk)** `⭐ 0` `updated ≤90d` Source for bolthub's published SDK packages (npm @bolthub/*, PyPI bolthub).
- **[typesend/typesafe_ai](https://github.com/typesend/typesafe_ai)** `⭐ 0` typesafe_ai (typesend) (site) - Unofficial Elixir SDK for the TypeSafe AI API.
- **[valksor/typesafe-sdk-go](https://github.com/valksor/typesafe-sdk-go)** `⭐ 0` typesafe-sdk-go - Unofficial Go SDK for the TypeSafe AI System One API — 1:1 parity with the official JS and Python SDKs. Not affiliated with TypeSafe AI.
- **[valksor/typesafe-sdk-php](https://github.com/valksor/typesafe-sdk-php)** `⭐ 0` typesafe-sdk-php (site) - Unofficial PHP SDK for the TypeSafe AI System One API — 1:1 parity with the official JS and Python SDKs. Not affiliated with TypeSafe AI.
- **[APIMatic](https://apimatic.io)** APIMatic generates SDKs, developer portals, context plugins for AI coding tools, and MCP servers from OpenAPI specifications.
- **[Blackbox AI](https://blackbox.ai)** Blackbox AI is a secure, private inference platform that runs open-weight models or routes 300+ models through a single endpoint with end-to-end encryption and zero data retention.
- **[FuturMix](https://futurmix.ai)** FuturMix.ai is an API relay that provides unified OpenAI-compatible access to 25+ AI models with competitive rates and auto-failover.
- **[New Relic](https://newrelic.com)** New Relic is an AI-powered observability platform that correlates telemetry across the stack to isolate root causes and reduce MTTR.
- **[OpenRouter](https://openrouter.ai)** OpenRouter is a unified API interface providing access to hundreds of AI models across multiple providers with pricing and routing features.
- **[Respan](https://respan.ai/ai-gateway)** Respan – Full-stack AI engineering platform with a tracing SDK, evals, prompt management, and a gateway to 250+ models.
- **[spring-ai-typesafe](https://spring-ai-community.github.io/spring-ai-typesafe)** spring-ai-typesafe (site) - A Java SDK for the TypeSafe AI JEV API, & Spring AI TypeSafe integrations.

</details>

## Workflow & Graph Engines

- **[LangGraph](https://github.com/langchain-ai/langgraph)** `⭐ 42.6k` `updated ≤90d` LangGraph is a low-level orchestration framework for building, managing, and deploying stateful, long-running AI agents as graphs in Python and TypeScript. <details><summary>More about</summary>

  It gives developers fine-grained control over durable execution, memory, and human-in-the-loop workflows when building complex agentic systems.

  _Yet another graph framework ensuring you can visualize your agent's existential crisis in acyclical detail before it inevitably hangs on a missing edge._

  `agents` `framework` `graph` `stateful` `orchestration`
  </details>
- **[Haystack](https://github.com/deepset-ai/haystack)** `⭐ 26.6k` `updated ≤30d` Open-source AI orchestration framework for building production-ready LLM applications with modular pipelines and agent workflows. <details><summary>More about</summary>

  Developers can design explicit, customizable workflows for retrieval, routing, memory, and generation in scalable RAG, agent, and multimodal systems.

  _Finally, a framework that lets you build agents with the same precision you’d use to argue about tabs vs. spaces._

  `orchestration` `rag` `agents` `python` `framework`
  </details>
- **[Metaflow](https://github.com/netflix/metaflow)** `⭐ 10.3k` `updated ≤90d` Metaflow is a Python framework for building and managing real-life AI/ML systems, from rapid local prototyping in notebooks to scalable production deployments on cloud infrastructure. <details><summary>More about</summary>

  It gives data science and engineering teams a unified API to version experiments, scale compute across AWS/Azure/GCP, and deploy reliable ML workflows without reinventing infrastructure.

  _Another framework promising to bridge the notebook-to-production gap, ensuring you can now orchestrate petabytes of regret with a friendly Pythonic API._

  `mlops` `workflow` `python` `orchestration` `ml-infrastructure`
  </details>
- **[Flyte](https://github.com/flyteorg/flyte)** `⭐ 7.6k` `updated ≤30d` A Python-based orchestration engine for reliably running ML pipelines, models, and agents at scale. <details><summary>More about</summary>

  It allows developers to transform loosely coupled Python functions into resilient, distributed, and scalable production workflows.

  _Because nothing says 'production-ready' like managing a Kubernetes-native backend for your distributed Python tasks._

  `orchestration` `python` `mlops` `workflow` `distributed-systems`
  </details>
- **[ZenML](https://github.com/zenml-io/zenml)** `⭐ 5.6k` `updated ≤90d` ZenML is an AI/ML platform for building, tracking, and deploying pipelines and workflows across any infrastructure, supporting traditional ML, LLMs, and agentic loops. <details><summary>More about</summary>

  It lets ML and AI engineers operationalize end-to-end AI workflows with versioning, observability, and infrastructure abstraction, reducing the glue work between training, evaluation, and deployment.

  _Finally, a platform that treats your agentic loop like a production ML pipeline—because nothing says 'scale' like versioning your prompt tweaks alongside your model weights._

  `mlops` `pipelines` `agent-workflows` `observability`
  </details>
- **[Rivet](https://github.com/ironclad/rivet)** `⭐ 4.7k` `updated ≤90d` An open-source visual AI programming environment and TypeScript library for creating complex AI agents and prompt chaining. <details><summary>More about</summary>

  It lets developers design, test, and embed AI workflows visually or programmatically, bridging the gap between no-code agent builders and code-first frameworks.

  _Now you can spend hours perfecting a visual graph of prompts only to realize you still need to debug TypeScript._

  `visual-ai-builder` `agent-orchestration` `typescript` `workflow-engine` `prompt-chaining`
  </details>
- **[Kubeflow Pipelines](https://github.com/kubeflow/pipelines)** `⭐ 4.2k` `updated ≤90d` Kubeflow Pipelines is a platform for building, deploying, and orchestrating reusable machine learning workflows on Kubernetes. <details><summary>More about</summary>

  It lets developers automate end-to-end ML experiments and reuse components across projects without rebuilding from scratch.

  _The quiet dread of spending more time wiring YAML and debugging Argo Workflows than actually improving your model._

  `mlops` `kubernetes` `workflow`
  </details>
- **[DataTrove](https://github.com/huggingface/datatrove)** `⭐ 3.4k` `updated ≤90d` A platform-agnostic library providing customizable pipeline processing blocks for data processing. <details><summary>More about</summary>

  It helps developers escape ad-hoc scripting for data pipelines by offering reusable, modular components.

  _Finally, a way to process data without writing the same glue code for the 100th time—until you realize you still need to write the glue to connect the blocks._

  `data-pipelines` `modular-processing` `huggingface` `python`
  </details>
- **[Hamilton](https://github.com/apache/hamilton)** `⭐ 2.6k` `updated ≤30d` Apache Hamilton is a lightweight Python library for defining, visualizing, and executing portable DAGs of data transformations for ETL, ML, LLM, and RAG workflows. <details><summary>More about</summary>

  It helps data teams standardize and scale data pipelines with modular, testable, and self-documenting workflows that run anywhere Python does.

  _Finally, a way to turn your notebook spaghetti into a DAG without turning your team into a DAG._

  `dag` `etl` `data-pipelines` `python` `mlops`
  </details>
- **[llm-chain](https://github.com/sobelio/llm-chain)** `⭐ 1.6k` `updated >1y` A Rust crate for building LLM-powered chains, prompt templates, and agent workflows with support for both cloud and locally-hosted models. <details><summary>More about</summary>

  It offers developers a code-first, Rust-native way to construct multi-step LLM pipelines and agent behaviors without switching to Python-centric frameworks.

  _Another LangChain-inspired framework enters the arena, giving Rust developers the distinct pleasure of fighting borrow checker errors while their Python colleagues already shipped the same chatbot six months ago._

  `rust` `llm` `chains` `agent-framework` `local-models`
  </details>
- **[Pipelex](https://github.com/pipelex/pipelex)** `⭐ 933` `updated ≤90d` A declarative DSL and CLI for defining typed, reusable AI procedures (methods) that handle model routing, structured outputs, and pipeline orchestration across 60+ models. <details><summary>More about</summary>

  It lets teams codify AI workflows into version-controlled .mthds files, making prompt logic composable, repeatable, and portable across different coding agents.

  _Just what we needed: yet another layer of abstraction where your prompts get their own file extension and a dedicated syntax before the model even sees them._

  `dsl` `workflow` `orchestration` `cli` `methods`
  </details>
- **[aqueduct](https://github.com/runllm/aqueduct)** `⭐ 518` `updated >1y` Aqueduct is an open-source MLOps framework that lets you define and run machine learning and LLM workloads across any cloud infrastructure using a Python-native API. <details><summary>More about</summary>

  It lets developers write vanilla Python pipelines and seamlessly execute them across Kubernetes, Spark, Lambda, and other cloud engines without managing siloed infrastructure APIs.

  _Just what the modern stack needed: another layer of abstraction to help you orchestrate your orchestration while you ponder why your three-line Python script needs a control plane._

  `mlops` `llm` `python` `cloud` `orchestration`
  </details>
- **[llama-agents](https://github.com/run-llama/llama-agents)** `⭐ 454` `updated ≤90d` LlamaAgents is an event-driven, async-first Python framework and CLI for building and deploying document-centric agent workflows with durable state, branching, and human-in-the-loop support. <details><summary>More about</summary>

  It lets developers treat heavy document pipelines—OCR, extraction, classification, and validation—as plain Python workflows instead of cobbling together fragile side processes for production.

  _Another framework promises to orchestrate your agents while you orchestrate which framework is still alive this month._

  `agent-workflows` `python` `document-processing` `orchestration` `llamaindex`
  </details>
- **[Smithers](https://github.com/smithersai/smithers)** `⭐ 428` Agentic TypeScript workflow framework with a Jev session checker wired into its workflows.
- **[rs-graph-llm](https://github.com/a-agmon/rs-graph-llm)** `⭐ 378` `updated ≤30d` A high-performance, type-safe Rust framework for building stateful, interactive agentic workflows and multi-agent systems. <details><summary>More about</summary>

  It brings the structured, graph-based orchestration patterns of LangGraph to the Rust ecosystem, enabling performant and type-safe agent workflows.

  _Because clearly, Python's runtime errors weren't enough; now we need to manage our agentic state complexity with strict ownership and lifetimes._

  `rust` `agents` `workflows` `graph` `orchestration`
  </details>
- **[AgentFlow](https://github.com/simonmesmith/agentflow)** `⭐ 321` `updated >1y` Agentflow is a Python-based CLI tool that executes structured LLM workflows defined in human-readable JSON files with support for variables and custom function calls. <details><summary>More about</summary>

  It offers developers a lightweight, code-first way to define deterministic multi-step LLM processes without the instability of fully autonomous agents or the limitations of simple chat interfaces.

  _Yet another framework promising to bridge the gap between 'chat' and 'autonomous' that hasn't been touched in two years, proving even LLM workflows need maintenance._

  `workflows` `json` `langchain` `cli` `llm`
  </details>
- **[codervisor/lean-spec](https://github.com/codervisor/leanspec)** `⭐ 297` `updated ≤180d` Lightweight, tool-agnostic framework for Spec-Driven Development (SDD) with AI integration and MCP support. <details><summary>More about</summary>

  Lets developers use their existing issue trackers (GitHub, ADO, Jira, etc.) as spec backends while adding a unified interface, AI-native workflows, and visualization tools for SDD.

  _Finally, a way to turn your Jira backlog into something even an AI can pretend to understand._

  `ai-integration` `cli` `mcp` `project-management` `sdd` `spec-driven-development` `workflow`
  </details>
- **[IBM wxflows](https://github.com/ibm/wxflows)** `⭐ 119` `updated >1y` Examples and tutorials for building AI applications with IBM's watsonx.ai Flows Engine, a tool for creating and deploying agent tools. <details><summary>More about</summary>

  Developers can use it to build, run, and deploy custom tools for AI agents that integrate with frameworks like LangChain, LangGraph, and OpenAI.

  _Now you can turn any data source into an agent tool, because apparently every API needs to be an agent now._

  `agent-tools` `watsonx` `langchain` `langgraph` `ibm`
  </details>
- **[PromptMage](https://github.com/tsterbak/promptmage)** `⭐ 116` `updated >1y` A Python framework for building and managing multi-step LLM workflows with built-in prompt versioning, a test playground, and an auto-generated FastAPI backend. <details><summary>More about</summary>

  It lets developers iterate on prompts inside their actual codebase, version them, and ship a self-hosted API endpoint instead of stitching together separate playgrounds and backend frameworks.

  _It treats your prompts with the same bureaucratic reverence usually reserved for production microservices, confirming that even LLM experimentation now requires CI, version control, and a dedicated Python framework._

  `python` `llm-workflow` `prompt-versioning` `self-hosted` `fastapi`
  </details>
- **[routilux](https://github.com/lzjever/routilux)** `⭐ 69` `updated ≤1y` Routilux is a Python event-driven workflow orchestration library and CLI for composing concurrent, checkpoint-resumable data and AI pipelines with built-in state and error handling. <details><summary>More about</summary>

  It gives developers a code-first way to wire complex, durable LLM agent workflows and API orchestration without building custom state machines from scratch.

  _Yet another framework promising to tame your agent pipelines, just in case the four you already installed weren’t quite the ones that would finally make orchestration boring._

  `python` `workflow-orchestration` `event-driven` `agent-pipelines` `cli`
  </details>
- **[hraness/algal](https://github.com/hraness/algal)** `⭐ 19` Language and runtime for agent-graph evolution with Jev-backed decisions.
- **[MS-Teja/Glyphic](https://github.com/ms-teja/glyphic)** `⭐ 10` `updated ≤90d` Glyphic is an open source diagram engine that lets AI agents generate production-quality diagrams from structured JSON, without SVG, Mermaid, or a browser.
- **[CraftFlow](https://github.com/scholarlords/craftflow)** `⭐ 7` `updated >1y` CraftFlow is a Python workflow orchestration framework for building processing pipelines, including RAG systems and multi-agent collaborations, via a code-first SDK. <details><summary>More about</summary>

  It provides developers with a structured library to define complex async workflows, tool registries, and agent nodes directly in code rather than a visual UI.

  _Just what the ecosystem needed: yet another way to describe a graph in Python while wondering if this specific node-based framework will still have commits next month._

  `workflow` `orchestration` `rag` `multi-agent` `python`
  </details>
- **[sentinels](https://github.com/garyblankenship/sentinels)** `⭐ 2` `updated >1y` A Laravel package for orchestrating agentic tasks using pipelines, agents, and event-driven workflows. <details><summary>More about</summary>

  It allows PHP developers to decompose monolithic service classes into traceable, testable, and observable agent-based pipelines.

  _Because nothing says 'odern architecture' quite like turning a simple method into a distributed graph of tiny, autonomous agents._

  `laravel` `php` `agent-orchestration` `workflow-engine` `event-driven`
  </details>
- **[LangGraph Documentation](https://langchain-ai.github.io/langgraph)** LangGraph is a workflow engine for building and orchestrating stateful, multi-agent applications using large language models. <details><summary>More about</summary>

  It enables developers to design complex agent interactions with explicit control over state, branching, and coordination, moving beyond simple prompt chaining.

  _Finally, a way to visualize your agent's nervous breakdown as a directed graph with retry loops and conditional edges._

  `agent-framework` `workflow-engine` `multi-agent` `stateful` `llm-orchestration`
  </details>

## Memory & Retrieval Infrastructure

- **[RAGFlow](https://github.com/infiniflow/ragflow)** `⭐ 91.6k` `updated ≤90d` RAGFlow is an open-source Retrieval-Augmented Generation (RAG) engine that integrates agent capabilities to provide a context layer for LLMs. <details><summary>More about</summary>

  It helps developers build LLM applications with enhanced retrieval and agentic workflows, improving context relevance and accuracy.

  _Because nothing says 'production-ready' like a RAG engine that also does your taxes and walks your dog._

  `rag` `context-engineering` `agentic-ai` `retrieval` `llm-apps`
  </details>
- **[LightRAG](https://github.com/hkuds/lightrag)** `⭐ 39.9k` `updated ≤90d` LightRAG is a research-backed framework for simple and fast retrieval-augmented generation (RAG) with knowledge graph support. <details><summary>More about</summary>

  It provides developers with an efficient way to integrate RAG workflows into their applications, improving context-aware AI responses.

  _Another RAG framework to add to the pile, because apparently we haven’t solved context retrieval yet._

  `rag` `knowledge-graph` `llm` `retrieval` `framework`
  </details>
- **[GraphRAG](https://github.com/microsoft/graphrag)** `⭐ 36.2k` `updated ≤90d` A modular, graph-based Retrieval-Augmented Generation (RAG) system from Microsoft that extracts structured knowledge graphs from unstructured text using LLMs. <details><summary>More about</summary>

  It gives developers a structured pipeline for building RAG applications that reason over complex relationships in private datasets rather than just surface-level vector search.

  _Yet another reminder that your bespoke 'AI-powered' feature is just a few-hundred-line wrapper around a Microsoft research project that will inevitably be absorbed into a larger framework next quarter._

  `rag` `knowledge-graph` `llm` `pipeline` `microsoft`
  </details>
- **[Qdrant](https://github.com/qdrant/qdrant)** `⭐ 34.9k` `updated ≤90d` Qdrant is a high-performance vector database and similarity search engine built in Rust, designed for storing, searching, and managing vector embeddings with payload filtering. <details><summary>More about</summary>

  It provides the retrieval infrastructure that powers RAG pipelines, semantic search, and recommendation systems, serving as the memory backbone for many AI applications.

  _Yet another reminder that your 'intelligent' agent is mostly just calling a vector search and hoping the cosine similarity aligns with your users' intent._

  `vector-database` `embeddings` `retrieval` `rust` `mlops`
  </details>
- **[Chroma](https://github.com/chroma-core/chroma)** 🔥 `⭐ 29.4k` `updated ≤30d` Open-source vector database and search infrastructure for AI applications. <details><summary>More about</summary>

  Provides developers with a scalable, embeddable way to store, index, and query vector embeddings for retrieval-augmented generation (RAG) and semantic search workflows.

  _Because nothing says 'modern development' like arguing with your team about whether to self-host Chroma or just pay for Pinecone._

  `vector-db` `search` `rag` `embeddings` `infrastructure`
  </details>
- **[Lancedb](https://github.com/lancedb/lancedb)** `⭐ 11.6k` `updated ≤90d` LanceDB is an open-source, embedded vector database built on the Lance columnar format for fast multimodal vector, full-text, and SQL search. <details><summary>More about</summary>

  It provides developers with a local or cloud-native storage layer for vectors and multimodal data, integrating directly with Python, Node.js, Rust, and LangChain/LlamaIndex ecosystems.

  _Another essential brick in the towering RAG stack that lets you index petabytes of data just to feed a model enough context to forget the first paragraph._

  `vector-database` `multimodal` `retrieval` `embedded` `storage`
  </details>
- **[Paper QA](https://github.com/future-house/paper-qa)** `⭐ 9.3k` `updated ≤90d` A high-accuracy RAG package designed for answering questions from scientific documents with integrated citations. <details><summary>More about</summary>

  It provides a specialized, citation-aware retrieval layer for developers building AI tools that must reason over complex scientific literature.

  _Because every developer's RAG implementation is currently just a prayer and a basic vector search away from hallucinating a new scientific law._

  `rag` `python` `scientific-computing` `retrieval` `documentation`
  </details>
- **[GPTCache](https://github.com/zilliztech/gptcache)** `⭐ 8.2k` `updated >1y` Semantic cache for LLMs. Fully integrated with LangChain and llama_index.
- **[Infinity](https://github.com/infiniflow/infinity)** `⭐ 4.7k` `updated ≤90d` An AI-native database built for LLM applications, offering hybrid search across dense vectors, sparse vectors, tensors, and full-text. <details><summary>More about</summary>

  Developers building RAG or retrieval-heavy AI apps can use it for fast, scalable, and flexible search across multiple data types.

  _Finally, a database that speaks the same language as your embeddings—now you just need to explain it to your DBA._

  `vector-database` `hybrid-search` `rag` `ai-native` `embeddings`
  </details>
- **[Fast-GraphRAG](https://github.com/circlemind-ai/fast-graphrag)** `⭐ 4k` `updated ≤1y` A GraphRAG implementation that intelligently adapts to specific use cases, data, and queries. <details><summary>More about</summary>

  It addresses the limitations of standard RAG by using graph structures to improve retrieval accuracy for complex, interconnected datasets.

  _Now you can spend your weekends worrying about the structural integrity of your knowledge graphs instead of just your code._

  `rag` `graph-rag` `retrieval` `knowledge-graph` `llm-infrastructure`
  </details>
- **[Vearch](https://github.com/vearch/vearch)** `⭐ 2.3k` `updated ≤90d` Distributed vector database for efficient similarity search and retrieval in AI-native applications, serving as a scalable memory backend for RAG systems. <details><summary>More about</summary>

  Developers building retrieval-augmented generation need low-latency hybrid search over millions of embeddings without manually orchestrating storage, replication, and metadata filtering.

  _Now you need a Kubernetes cluster just to remember what your code does._

  `vector-database` `rag` `embeddings` `memory-backend` `cloud-native`
  </details>
- **[MiniRAG](https://github.com/hkuds/minirag)** `⭐ 2k` `updated ≤1y` MiniRAG is a lightweight retrieval-augmented generation framework optimized for small language models, using heterogeneous graph indexing and topology-enhanced retrieval. <details><summary>More about</summary>

  It enables developers to deploy efficient RAG systems with small models while achieving comparable performance to larger models, reducing storage and computational overhead.

  _Finally, a RAG framework that doesn’t require a PhD in graph theory to explain why your 3B model is outperforming your 70B one._

  `rag` `small-language-models` `graph-indexing` `retrieval` `python`
  </details>
- **[VectorChord](https://github.com/supervc-stack/vectorchord)** `⭐ 1.8k` `updated ≤180d` VectorChord is a PostgreSQL extension for scalable, high-performance, and disk-efficient vector search, designed as the successor to pgvecto.rs. <details><summary>More about</summary>

  It allows developers to host billion-scale vector datasets directly in Postgres with significantly lower infrastructure costs, simplifying the AI stack by removing the need for separate vector databases.

  _We have successfully abstracted the vector database so far that we are now just arguing with Postgres about how many bits we can shave off a float before the model starts hallucinating its own childhood memories._

  `database-extension` `llmops` `postgres` `vector-database` `vector-search`
  </details>
- **[Vald](https://github.com/vdaas/vald)** `⭐ 1.7k` `updated ≤90d` A highly scalable distributed vector search engine for approximate nearest neighbor (ANN) search on high-dimensional dense vectors. <details><summary>More about</summary>

  Provides the retrieval backbone for RAG systems and similarity search at billion-scale, deployed as cloud-native Kubernetes infrastructure.

  _Because nothing says 'AI-ready' like deploying a bespoke distributed vector database just to find the three most relevant chunks of documentation._

  `vector-search` `retrieval` `kubernetes` `ann` `infrastructure`
  </details>
- **[Pixeltable](https://github.com/pixeltable/pixeltable)** `⭐ 1.6k` Pixeltable: Declarative multimodal AI data engine providing versioned tables, computed columns, and native LangChain VectorStore (langchain-pixeltable) and LangGraph memory store (langgraph-store-pixeltable) integrations.
- **[CAG](https://github.com/hhhuang/cag)** `⭐ 1.6k` `updated >1y` Cache-Augmented Generation (CAG) is a retrieval-free alternative to RAG that preloads knowledge into a model's context and caches runtime parameters for faster, more reliable inference. <details><summary>More about</summary>

  It offers developers a simpler, lower-latency approach to augmenting LLMs with external knowledge by eliminating real-time retrieval steps while maintaining context relevance.

  _Finally, a way to avoid the existential dread of watching your RAG pipeline spin up another vector search just to answer a simple question._

  `cag` `rag-alternative` `context-augmentation` `llm-optimization`
  </details>
- **[codeql-cli-binaries](https://github.com/github/codeql-cli-binaries)** `⭐ 1k` `updated ≤90d` Binaries for the CodeQL CLI, a static analysis tool for querying codebases as data. <details><summary>More about</summary>

  Provides pre-built executables so developers can run CodeQL queries without building from source, enabling faster security and code analysis workflows.

  _Downloading binaries to run a query language that treats your code like a database feels like using a particle accelerator to debug a semicolon._

  `static-analysis` `security` `cli`
  </details>
- **[vectordb](https://github.com/epsilla-cloud/vectordb)** `⭐ 875` `updated ≤1y` Epsilla is an open-source high-performance vector database management system for scalable similarity search. <details><summary>More about</summary>

  It provides developers with a production-ready vector database for RAG, embeddings, and AI-driven search workflows with high throughput and low latency.

  _Another vector DB promising 10x speed—because nothing says 'modern development' like arguing over millisecond differences in nearest-neighbor search._

  `vector-database` `rag` `embeddings` `search` `infrastructure`
  </details>
- **[Rankify](https://github.com/datascienceuibk/rankify)** `⭐ 685` `updated ≤30d` A Python toolkit for retrieval, re-ranking, and retrieval-augmented generation with 40+ benchmark datasets, 7+ retrieval techniques, 24+ reranking models, and multiple RAG methods. <details><summary>More about</summary>

  Developers building RAG pipelines or evaluating retrieval models can use this to benchmark, compare, and integrate state-of-the-art techniques without reinventing infrastructure.

  _Finally, a way to spend more time tuning rerankers than actually shipping features._

  `python` `rag` `retrieval` `benchmarking` `nlp`
  </details>
- **[VectorDB](https://github.com/jina-ai/vectordb)** `⭐ 653` `updated >1y` A Python vector database offering CRUD operations, scalability options, and deployability from local to cloud environments. <details><summary>More about</summary>

  Provides developers with a lean, Pythonic vector database solution for embedding similarity search and neural retrieval tasks.

  _Because every developer eventually needs to store vectors, and now there's another way to do it._

  `vector-database` `python` `neural-search` `embedding-similarity`
  </details>
- **[dr-doc-search](https://github.com/namuan/dr-doc-search)** `⭐ 598` `updated >1y` A Python CLI and web app that indexes PDF books using LangChain and OpenAI/HuggingFace embeddings to enable conversational Q&A over document content. <details><summary>More about</summary>

  It provides a reusable pattern for building local document-indexing pipelines that developers can adapt for internal docs, wikis, or proprietary knowledge bases.

  _Yet another reminder that in 2023 we decided the best way to read a book is to pay a language model to summarize it for us one question at a time._

  `langchain` `rag` `pdf` `cli` `huggingface`
  </details>
- **[aquila](https://github.com/aquila-network/aquila)** `⭐ 379` `updated >1y` A neural search engine for indexing latent vectors with JSON metadata and performing efficient k-NN retrieval. <details><summary>More about</summary>

  Enables developers to build neural information retrieval applications with minimal dependencies, useful for semantic search and similarity-based data retrieval.

  _Because nothing says 'simple' like needing to remember whether your vectors are latent or just shy._

  `vector-database` `neural-search` `knn` `retrieval` `embeddings`
  </details>
- **[Llama-github](https://github.com/jetxu-llm/llama-github)** `⭐ 294` `updated ≤90d` llama-github is a Python library that enables LLM chatbots, AI agents, and auto-dev solutions to perform Agentic RAG by retrieving relevant code snippets, issues, and repository information from GitHub. <details><summary>More about</summary>

  It streamlines development by augmenting AI agents with context-rich GitHub data, reducing the time spent searching for relevant code examples or repository insights.

  _Now your AI agent can drown in GitHub issues just like you do._

  `python-library` `github-rag` `agentic-retrieval` `code-context` `llm-integration`
  </details>
- **[Vector Graph RAG](https://github.com/zilliztech/vector-graph-rag)** `⭐ 253` vector-graph-rag — Graph RAG with pure vector search, achieving SOTA performance in multi-hop reasoning scenarios.
- **[Awadb](https://github.com/awa-ai/awadb)** `⭐ 175` `updated >1y` AwaDB is an AI-native vector database for storing and searching embeddings with real-time indexing and low-latency retrieval. <details><summary>More about</summary>

  It simplifies vector storage and search for developers building LLM applications, eliminating manual schema and indexing overhead.

  _Another vector database to add to your stack, because apparently embedding vectors are the new JSON._

  `vector-database` `embeddings` `ai-native` `retrieval` `python-sdk`
  </details>
- **[Truffler](https://github.com/kieranklaassen/truffler)** `⭐ 50` Truffler - Rails gem for intent search: TypeSafe Jev builds index-time labels and query understanding on top of your keyword/embedding search, with optional streamed reranking. Project guide.
- **[laya-jev-GraphRAG](https://github.com/bodepudimuneendra-netizen/laya-jev-graphrag)** `⭐ 49` `updated ≤30d` A database-agnostic Agentic GraphRAG framework using swappable System One models (local Laya / cloud Jev). A plug-and-play intelligence layer featuring a complete 4-phase pipeline, continuous evaluation and custom A* traversal for any graph database.
- **[Tiny-GraphRAG](https://github.com/limafang/tiny-graphrag)** `⭐ 43` `updated >1y` A minimal, educational Python implementation of GraphRAG that builds local knowledge graphs in Neo4j and supports local and global queries. <details><summary>More about</summary>

  It gives developers a simple, code-first foundation for experimenting with graph-based retrieval-augmented generation without adopting a heavier framework.

  _Yet another weekend GraphRAG implementation proving that the fastest way to learn RAG is to reinvent it, push to GitHub, and declare victory with 45 stars._

  `graphrag` `rag` `knowledge-graph` `neo4j` `retrieval`
  </details>
- **[engine](https://github.com/mindsdb/engine)** `⭐ 24` `updated ≤180d` A semantic query engine that enables hybrid vector and keyword search across 200+ data sources using standard SQL. <details><summary>More about</summary>

  It allows developers to build RAG pipelines and provide context to agents by querying live data sources via SQL without needing complex ETL processes.

  _Because managing RAG complexity is apparently best solved by pretending your entire enterprise data stack is just one giant, federated SQL table._

  `sql` `semantic-search` `rag` `knowledge-bases` `data-integration`
  </details>
- **[distributed-semantic-cache-and-stateful-routing-system](https://github.com/redjackfred/distributed-semantic-cache-and-stateful-routing-system)** `⭐ 1` `updated ≤180d` A self-hosted Go and Python system that uses consistent hashing and Redis vector search to cache semantically similar LLM responses and route requests to warm workers. <details><summary>More about</summary>

  It gives developers a drop-in infrastructure layer to reduce LLM API costs and latency by catching paraphrased queries before they ever hit a model.

  _Yet another reminder that the most impressive part of your AI stack is the glue you have to invent just to stop paying OpenAI for the same paraphrased question fifty times._

  `semantic-cache` `llmops` `self-hosted` `vector-search` `scaling`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+2 more in Memory & Retrieval Infrastructure &nbsp;—&nbsp; click to expand</strong></summary>

- **[LlamaIndex](https://llamaindex.ai)** LlamaIndex is a framework SDK for building AI-powered applications with retrieval-augmented generation and document processing capabilities.
- **[Rivestack](https://rivestack.io)** Managed PostgreSQL with optimized pgvector on dedicated NVMe storage for AI workloads, offering low-latency vector search and built-in semantic search tools.

</details>

## Training & Model Infrastructure

- **[Keras](https://github.com/keras-team/keras)** `⭐ 64.3k` `updated ≤90d` Keras 3 is a multi-backend deep learning framework for building and training models with support for JAX, TensorFlow, PyTorch, and OpenVINO. <details><summary>More about</summary>

  It enables developers to write high-level, backend-agnostic deep learning code that can scale from local laptops to large GPU/TPU clusters.

  _Finally, a framework that lets you switch backends like you switch tabs—just don’t ask which one is actually fastest today._

  `deep-learning` `multi-backend` `python` `framework`
  </details>
- **[ColossalAI](https://github.com/hpcaitech/colossalai)** `⭐ 41.4k` `updated ≤90d` A framework for making large AI models cheaper, faster, and more accessible via distributed training and inference. <details><summary>More about</summary>

  Enables developers to train and deploy large-scale models efficiently with parallelism strategies like data, model, and pipeline parallelism.

  _Because nothing says 'accessible' like needing a PhD in distributed systems to use it._

  `distributed-training` `large-models` `hpc` `framework` `parallelism`
  </details>
- **[PyTorch Lightning](https://github.com/lightning-ai/pytorch-lightning)** `⭐ 31.4k` `updated ≤90d` PyTorch Lightning is a framework that automates PyTorch training engineering like backpropagation, mixed precision, and multi-GPU scaling while preserving full model control. <details><summary>More about</summary>

  It lets developers focus on model science instead of repetitive training infrastructure code, scaling from CPU to thousands of GPUs without changing core logic.

  _You’ll spend less time debugging distributed training loops and more time wondering why your model still won’t converge._

  `pytorch` `deep-learning` `training-framework` `ai-infrastructure`
  </details>
- **[LeRobot](https://github.com/huggingface/lerobot)** `⭐ 27.9k` `updated ≤90d` A Python-native library for end-to-end robotic learning, providing standardized datasets, hardware-agnostic control, and pretrained models. <details><summary>More about</summary>

  It lowers the barrier to physical AI by providing a unified, hardware-agnostic interface for data collection, training, and model deployment.

  _Because troubleshooting a model's convergence is significantly more stressful when it results in a physical hardware collision._

  `robotics` `pytorch` `sdk` `physical-ai` `datasets`
  </details>
- **[NCNN](https://github.com/tencent/ncnn)** `⭐ 23.9k` `updated ≤90d` ncnn is a high-performance neural network inference framework optimized for the mobile platform.
- **[veRL](https://github.com/verl-project/verl)** `⭐ 23.7k` `updated ≤90d` A flexible, efficient RL post-training framework for large language models that implements algorithms like GRPO and PPO with seamless integration into existing LLM training infrastructure. <details><summary>More about</summary>

  Gives developers a production-ready, modular toolkit for RLHF and reasoning training at scale, decoupling computation from data dependencies to support trillion-parameter models across distributed clusters.

  _Finally, a framework elegant enough to orchestrate your trillion-parameter model's existential crisis across 64 H800s, only to discover the reward model started gaming the metric in epoch two._

  `rlhf` `post-training` `distributed-training` `llm-training` `hybridflow`
  </details>
- **[serve](https://github.com/jina-ai/serve)** `⭐ 21.9k` `updated >1y` A cloud-native framework for building and deploying multimodal AI services with gRPC, HTTP, and WebSocket support. <details><summary>More about</summary>

  Developers can focus on core AI logic while Jina handles scaling, orchestration, and deployment across local, Docker, Kubernetes, or Jina Cloud.

  _Finally, a framework that lets you deploy AI services without pretending you understand Kubernetes._

  `framework` `ai-serving` `cloud-native` `microservices` `llmops`
  </details>
- **[PEFT](https://github.com/huggingface/peft)** `⭐ 21.7k` `updated ≤90d` PEFT is a Python library for state-of-the-art Parameter-Efficient Fine-Tuning methods like LoRA, enabling adaptation of large pre-trained models with minimal computational and storage costs. <details><summary>More about</summary>

  It allows developers to fine-tune large models efficiently by only training a small subset of parameters, reducing resource requirements while maintaining performance.

  _Now you can fine-tune that 70B parameter model on your laptop, or at least pretend you can until your GPU melts._

  `fine-tuning` `peft` `lora` `pytorch` `huggingface`
  </details>
- **[Candle](https://github.com/huggingface/candle)** `⭐ 21.1k` `updated ≤90d` Minimalist ML framework for Rust with GPU support and a focus on performance and ease of use. <details><summary>More about</summary>

  Enables developers to run and fine-tune models locally in Rust with high performance, including support for LLMs, diffusion, and other state-of-the-art architectures.

  _Finally, a way to turn your Rust compiler errors into even more Rust compiler errors, but with AI._

  `rust` `ml-framework` `local-inference` `gpu` `llm`
  </details>
- **[TensorRT-LLM](https://github.com/nvidia/tensorrt-llm)** `⭐ 14.8k` `updated ≤90d` TensorRT LLM is a Python and C++ framework from NVIDIA for defining, optimizing, and serving Large Language Models with specialized kernels and efficient runtimes on NVIDIA GPUs. <details><summary>More about</summary>

  It allows developers to squeeze maximum inference performance out of NVIDIA hardware for LLMs and Visual Gen models through state-of-the-art optimizations and distributed serving strategies.

  _Nothing says 'I enjoy my job' quite like spending three days tuning CUDA graph batch sizes just to shave 40 milliseconds off a token that nobody asked for._

  `inference` `nvidia` `llm-serving` `cuda` `optimization`
  </details>
- **[TVM](https://github.com/apache/tvm)** `⭐ 13.8k` `updated ≤30d` Open Machine Learning Compiler Framework for optimizing and deploying ML models across hardware backends. <details><summary>More about</summary>

  Enables developers to compile and optimize machine learning models for diverse hardware targets, from GPUs to mobile devices, with Python-first customization.

  _Finally, a compiler that lets you argue with your GPU about how to run your model._

  `ml-compiler` `cross-platform` `performance` `python-first` `apache`
  </details>
- **[LitGPT](https://github.com/lightning-ai/litgpt)** `⭐ 13.7k` `updated ≤90d` litgpt provides 20+ high-performance LLMs with recipes to pretrain, finetune, and deploy at scale. <details><summary>More about</summary>

  It gives developers ready-to-use, optimized LLM implementations and training/deployment workflows for building and customizing models.

  _Another LLM repo promising 'recipes' that assumes you have 8x A100s and a PhD in transformer surgery._

  `llm` `training` `inference`
  </details>
- **[tokenizers](https://github.com/huggingface/tokenizers)** `⭐ 11.1k` `updated ≤90d` Fast, Rust-based tokenizers library for research and production with bindings for Python, Node.js, and Ruby. <details><summary>More about</summary>

  Developers can efficiently tokenize and train vocabularies for modern NLP models with high performance and multi-language support.

  _Finally, a tokenizer that won’t make you question your life choices when preprocessing a GB of text._

  `tokenization` `nlp` `rust` `huggingface` `performance`
  </details>
- **[Kedro](https://github.com/kedro-org/kedro)** `⭐ 11k` `updated ≤90d` Kedro is a Python framework for building production-ready, reproducible, and modular data engineering and data science pipelines. <details><summary>More about</summary>

  It enforces software engineering best practices for data workflows, making pipelines maintainable and scalable for developers.

  _Finally, a way to make your data pipelines as rigidly structured as your legacy codebase._

  `data-pipelines` `mlops` `python-framework` `reproducibility` `modularity`
  </details>
- **[ART](https://github.com/openpipe/art)** `⭐ 10.8k` `updated ≤90d` Agent Reinforcement Trainer (ART) is an open-source framework and managed service for training multi-step LLM agents using GRPO reinforcement learning on models like Qwen, Llama, and GPT-OSS. <details><summary>More about</summary>

  It provides developers with the infrastructure to move agents beyond static prompting by teaching them new behaviors through reward functions and experience.

  _Finally, a framework that lets you spend GPU cycles teaching a model how to play 2048 so it can forget how to write a valid SQL query._

  `reinforcement-learning` `grpo` `agent-training` `fine-tuning` `wandb`
  </details>
- **[llama-cpp-python](https://github.com/abetlen/llama-cpp-python)** `⭐ 10.6k` `updated ≤30d` Python bindings for the llama.cpp library providing high-level and low-level access to local LLM inference. <details><summary>More about</summary>

  It allows developers to integrate high-performance, quantized local LLM inference directly into Python applications and workflows.

  _Nothing says 'I'm building a local-first agent' like wrestling with CMAKE_ARGS just to get CUDA acceleration working._

  `local-llm` `python` `inference` `llama-cpp` `quantization`
  </details>
- **[Accelerate](https://github.com/huggingface/accelerate)** `⭐ 9.9k` `updated ≤90d` A PyTorch library that simplifies distributed training and mixed precision by abstracting boilerplate code for multi-GPU/TPU/fp16 setups. <details><summary>More about</summary>

  Developers can run the same training script on any hardware configuration without rewriting device placement or precision logic.

  _Finally, a way to pretend you understand distributed training while letting Hugging Face handle the actual complexity._

  `pytorch` `distributed-training` `mixed-precision` `huggingface` `ml-framework`
  </details>
- **[Oumi](https://github.com/oumi-ai/oumi)** `⭐ 9.4k` `updated ≤90d` A code-first, open-source framework and CLI for fine-tuning, evaluating, and deploying open-source LLMs and VLMs across local and cloud environments. <details><summary>More about</summary>

  It gives developers a unified toolkit to take models like Qwen3 and DeepSeek-R1 from fine-tuning through evaluation to dedicated inference endpoints without stitching together disparate scripts.

  _Yet another 'end-to-end' ML platform that promises to solve your model lifecycle so you can spend three weeks configuring YAML instead of actually shipping a feature._

  `fine-tuning` `llm-eval` `model-deployment` `cli`
  </details>
- **[BentoML](https://github.com/bentoml/bentoml)** `⭐ 8.9k` `updated ≤30d` BentoML is a Python library for building model inference APIs and multi-model serving systems for AI apps. <details><summary>More about</summary>

  It lets developers turn any ML model into a production-ready API with minimal code, handling containerization, scaling, and deployment.

  _Finally, a way to serve your fine-tuned llama without wrestling with Flask, Gunicorn, and Dockerfiles at 2 a.m._

  `model-serving` `inference` `mlops` `python` `api`
  </details>
- **[Flower](https://github.com/flwrlabs/flower)** `⭐ 7.2k` `updated ≤30d` A framework for building federated AI systems that enables decentralized machine learning training. <details><summary>More about</summary>

  It allows developers to train models on distributed, private data without the need to move the data to a central server.

  _Now you can debug distributed training failures across a thousand fragmented edge devices._

  `federated-learning` `framework` `machine-learning` `distributed-systems`
  </details>
- **[Liger-Kernel](https://github.com/linkedin/liger-kernel)** `⭐ 6.6k` `updated ≤90d` A collection of optimized Triton kernels designed to increase LLM training throughput and reduce memory usage. <details><summary>More about</summary>

  It enables developers to train models with longer context lengths and larger batch sizes by optimizing the low-level math operations.

  _Because nothing says 'fun weekend' like debugging memory OOM errors caused by inefficiently implemented fused kernels._

  `triton` `llm-training` `finetuning` `performance-optimization`
  </details>
- **[Kserve](https://github.com/kserve/kserve)** `⭐ 6.1k` `updated ≤90d` Standardized distributed generative and predictive AI inference platform for scalable, multi-framework deployment on Kubernetes. <details><summary>More about</summary>

  It provides a unified, Kubernetes-native way to deploy and scale both generative and predictive AI models with advanced features like autoscaling, GPU acceleration, and model explainability.

  _Because nothing says 'simple deployment' like a Kubernetes-based inference platform with canary rollouts, inference pipelines, and KV cache offloading._

  `kubernetes` `model-serving` `inference` `mlops` `genai`
  </details>
- **[torchtune](https://github.com/meta-pytorch/torchtune)** `⭐ 5.8k` `updated ≤90d` PyTorch native post-training library for large language model fine-tuning. <details><summary>More about</summary>

  Provides a streamlined, native PyTorch approach to LLM fine-tuning, reducing friction in model customization workflows.

  _Fine-tuning anxiety wrapped in another PyTorch abstraction layer._

  `llm` `fine-tuning` `pytorch`
  </details>
- **[Kiln](https://github.com/kiln-ai/kiln)** `⭐ 5.2k` `updated ≤90d` Kiln is a desktop app and open-source library for building, evaluating, and optimizing AI systems with features like evals, RAG, agents, fine-tuning, synthetic data generation, and MCP support. <details><summary>More about</summary>

  It provides an end-to-end workflow for developers to iterate on AI systems with measurable improvements, from prompt optimization to fine-tuning and evaluation.

  _Finally, a tool that lets you fine-tune your fine-tuning process—because nothing says 'productivity' like optimizing your optimization loop._

  `evals` `fine-tuning` `rag` `ai-agents` `mcp`
  </details>
- **[FedML](https://github.com/fedml-ai/fedml)** `⭐ 4.1k` `updated ≤1y` An open-source machine learning library for scalable distributed training, model serving, and federated learning. <details><summary>More about</summary>

  It provides the infrastructure to manage complex AI workloads across diverse hardware, from edge devices to multi-cloud GPU clusters.

  _Nothing says 'I love scaling' like managing distributed training across decentralized GPUs and smartphones simultaneously._

  `distributed-training` `federated-learning` `mlops` `model-serving` `edge-ai`
  </details>
- **[FlagAI](https://github.com/flagai-open/flagai)** `⭐ 3.9k` `updated ≤90d` FlagAI is a fast, easy-to-use and extensible toolkit for large-scale model training and inference. <details><summary>More about</summary>

  It simplifies working with large AI models by providing an extensible framework for developers to build and deploy LLMs efficiently.

  _Yet another LLM toolkit promising to make large-model work 'fast and easy' while adding another layer of abstraction to wrestle with._

  `llm` `toolkit` `framework` `extensible` `training`
  </details>
- **[Distilabel](https://github.com/argilla-io/distilabel)** `⭐ 3.4k` `updated ≤30d` Distilabel is a Python framework for generating synthetic data and AI feedback pipelines based on verified research papers. <details><summary>More about</summary>

  It helps developers create high-quality, scalable datasets for fine-tuning LLMs by synthesizing and judging data with AI feedback.

  _Now you can spend less time collecting data and more time questioning whether your synthetic data is hallucinating its own existence._

  `synthetic-data` `ai-feedback` `llm-training` `python-framework` `data-pipelines`
  </details>
- **[whylogs](https://github.com/whylabs/whylogs)** `⭐ 2.8k` `updated >1y` whylogs is an open-source data logging library that generates statistical profiles of datasets to monitor data quality and model performance over time. <details><summary>More about</summary>

  It helps developers detect data drift, validate pipelines, and maintain ML observability by turning raw data into actionable summaries and constraints.

  _Another layer of observability to add to your ML stack, because clearly your models weren't already failing in enough mysterious ways._

  `data-quality` `mlops` `observability`
  </details>
- **[dLLM](https://github.com/zhziszz/dllm)** `⭐ 2.7k` `updated ≤90d` dLLM: Simple Diffusion Language Modeling.
- **[VeOmni](https://github.com/bytedance-seed/veomni)** `⭐ 2.2k` `updated ≤30d` A modular framework for scaling single- and multi-modal model pre-training and post-training across various accelerators. <details><summary>More about</summary>

  It provides a 'trainer-free' architecture that allows developers to use linear training scripts for greater transparency and control during large-scale model training.

  _A new way to spend your compute budget watching a distributed training loop fail for reasons no one can explain._

  `multi-modal` `model-training` `distributed-training` `pytorch` `framework`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+21 more in Training & Model Infrastructure &nbsp;—&nbsp; click to expand</strong></summary>

- **[automl-gs](https://github.com/minimaxir/automl-gs)** `⭐ 1.9k` `updated >1y` AutoML tool that generates trained models and pipeline code from a CSV and target field using TensorFlow or XGBoost.
- **[RL-Factory](https://github.com/simple-efficient/rl-factory)** `⭐ 1.8k` `updated ≤1y` RLFactory is an RL post-training framework for agentic learning that decouples the environment from training, supports async tool-calling, and enables fast training of agent models like Qwen3 with MCP tools.
- **[MLRun](https://github.com/mlrun/mlrun)** `⭐ 1.7k` `updated ≤90d` MLRun is an open-source MLOps platform for building, deploying, and managing continuous (gen) AI and ML applications across their lifecycle, integrating with development and CI/CD environments.
- **[BudgetML](https://github.com/ebhy/budgetml)** `⭐ 1.3k` `updated >1y` A Python library to deploy ML inference services on Google Cloud preemptible instances with FastAPI endpoints and automatic HTTPS.
- **[MInference](https://github.com/microsoft/minference)** `⭐ 1.2k` `updated ≤180d` MInference is a Microsoft library that accelerates long-context LLM inference using dynamic sparse attention to reduce latency by up to 10x on hardware like A100 while preserving accuracy.
- **[childrentime/reactuse](https://github.com/childrentime/reactuse)** `⭐ 1.1k` `updated ≤30d` A comprehensive collection of over 100 production-ready React Hooks for browser APIs, state management, sensors, and DOM elements.
- **[LLM-Dojo 开源大模型学习场所，使用简洁且易阅读的代码构建模型训练框架](https://github.com/mst272/llm-dojo)** `⭐ 939` `updated ≤1y` A lightweight, code-first post-training framework for LLMs supporting SFT, RLVR, and various knowledge distillation techniques built on top of OpenRLHF.
- **[LMMs-Engine](https://github.com/evolvinglmms-lab/lmms-engine)** `⭐ 829` `updated ≤90d` A unified training engine designed for scaling multimodal model development.
- **[FEDOT](https://github.com/aimclub/fedot)** `⭐ 711` `updated ≤30d` An open-source AutoML framework for the automated design and optimization of machine learning pipelines.
- **[BMTrain](https://github.com/openbmb/bmtrain)** `⭐ 624` `updated ≤90d` Efficient Training (including pre-training and fine-tuning) for Big Models.
- **[Archai](https://github.com/microsoft/archai)** `⭐ 486` `updated ≤1y` Archai is a modular framework for Neural Architecture Search that accelerates efficient deep network generation through reproducible research.
- **[onecompression](https://github.com/fujitsuresearch/onecompression)** `⭐ 435` `updated ≤30d` A Python package for the automated compression and quantization of Large Language Models.
- **[InternEvo](https://github.com/internlm/internevo)** `⭐ 422` `updated >1y` InternEvo is an open-source lightweight training framework for model pre-training and fine-tuning with minimal dependencies.
- **[FastDatasets](https://github.com/zhulinsen/fastdatasets)** `⭐ 223` `updated >1y` A powerful tool for creating high-quality training datasets for Large Language Models (LLMs)（一个快速生成高质量LLM微调训练数据集的工具）.
- **[autoai](https://github.com/blobcity/autoai)** `⭐ 186` `updated >1y` A Python framework that automates model search, hyperparameter tuning, and code generation for regression and classification on numerical data.
- **[Effective LLM Alignment](https://github.com/vikhrmodels/effective_llm_alignment)** `⭐ 155` `updated >1y` Effective LLM Alignment Toolkit provides configurable scripts for SFT, DPO, ORPO, CPO, SimPO, SMPO, GPO, distillation, reward modeling, classification, and prompt optimization using Hugging Face standards.
- **[Simplifine](https://github.com/orca-gamedev/simplifine)** `⭐ 96` 24. Simplifine: Simplifine lets you invoke LLM finetuning with just one line of code using any Hugging Face dataset or model.
- **[Simplifine](https://github.com/simplifine-gamedev/simplifine)** `⭐ 96` `updated >1y` Simplifine is an open-source Python toolkit and cloud service that simplifies LLM fine-tuning with one-line commands, handling infrastructure, cloud storage, and training optimizations like DeepSpeed.
- **[leap-laboratories/discovery-engine](https://github.com/leap-laboratories/discovery-engine)** `⭐ 7` `updated ≤90d` Discovery Engine is a statistical pattern-finding tool that identifies validated, novel feature interactions in tabular data using ML and literature checks.
- **[drumst0ck/uploadkit](https://github.com/drumst0ck/uploadkit)** `⭐ 3` `updated ≤90d` Open-source TypeScript SDK and React components for file uploads with managed or BYOS storage, plus an MCP server for AI assistant integration.
- **[flaml-a-fast-and-lightweight-automl-library](https://microsoft.com/en-us/research/publication/flaml-a-fast-and-lightweight-automl-library)** FLAML is a fast and lightweight Python library for automated machine learning that selects learners and hyperparameters with low computational cost.

</details>