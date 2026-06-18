# Frameworks & SDKs

Code-first building blocks for embedding models, agents, or AI workflows into software.

## Tools & Resources

- **[LangChain](https://github.com/langchain-ai/langchain)** `⭐ 136k` `updated ≤90d` LangChain is a Python and TypeScript framework providing standard abstractions and interoperable components for building LLM-powered applications and agents. <details><summary>More about</summary>

  It gives developers a unified interface to chain models, embeddings, and data sources together, simplifying rapid prototyping and model swapping across providers.

  _The industry now has a framework for building agents, a framework for orchestrating those agents, a higher-level package for deep agents, and a separate platform to debug the agents built with the framework—purchase order not included._

  `framework` `llm` `agents` `python` `typescript`
  </details>

- **[MarkItDown](https://github.com/microsoft/markitdown)** `⭐ 121.1k` `updated ≤90d` A Python utility that converts files and office documents—including PDF, PowerPoint, Word, Excel, and audio—into Markdown optimized for LLM consumption. <details><summary>More about</summary>

  It gives developers a clean, token-efficient way to flatten complex documents into Markdown so downstream coding agents and RAG pipelines can actually read them.

  _We have reached the point where we need a dedicated library to translate our own files back into plain text so the AI can pretend it always understood them._

  `markdown` `document-conversion` `llm-tooling` `python` `microsoft`
  </details>

- **[PaddleOCR](https://github.com/paddlepaddle/paddleocr)** `⭐ 77.2k` `updated ≤90d` A lightweight, multilingual OCR toolkit that converts images and PDFs into structured data formats like JSON and Markdown for use in LLM pipelines. <details><summary>More about</summary>

  It provides the document ingestion layer necessary to feed clean, structured context into RAG systems and AI agents without relying on brittle, closed-source parsers.

  _We have successfully abstracted the problem of reading a PDF into a 70k-star repository dependency, ensuring our AI workflows are now bottlenecked by OCR preprocessing rather than the model itself._

  `ocr` `document-ai` `rag` `pdf-parsing` `paddlepaddle`
  </details>

- **[TradingAgents](https://github.com/tauricresearch/tradingagents)** `⭐ 70.3k` `updated ≤90d` A multi-agent framework that coordinates LLM-powered roles—including researchers, analysts, and portfolio managers—to simulate and backtest financial trading strategies. <details><summary>More about</summary>

  It gives developers a ready-made LangGraph-based multi-agent architecture for building and experimenting with LLM-driven quantitative trading systems.

  _Because nothing says robust engineering like letting a committee of hallucination-prone language models argue your brokerage account into oblivion._

  `multi-agent` `finance` `trading` `langgraph` `framework`
  </details>

- **[MetaGPT](https://github.com/foundationagents/metagpt)** `⭐ 68.6k` `updated ≤180d` MetaGPT is an open-source multi-agent framework that assigns SOP-driven roles—such as product manager, architect, and engineer—to LLMs to turn a one-line requirement into structured software deliverables and repositories. <details><summary>More about</summary>

  It lets developers define and run multi-role agent teams that mimic a full software company workflow, making it a foundational building block for complex, automated development pipelines.

  _We’ve successfully automated the entire software company, meaning we can now generate user stories, compete with ourselves, and ship 2048 clones at a scale that would make a real PM cry._

  `multi-agent` `framework` `sdk` `llm` `automation`
  </details>

- **[MinerU (`🔥`)](https://github.com/opendatalab/mineru)** `⭐ 62.2k` `updated ≤90d` MinerU is a Python toolkit that parses PDFs, Office documents, and other complex files into markdown or JSON structured for LLM and agent pipelines. <details><summary>More about</summary>

  It removes the boilerplate of layout analysis, OCR, and table extraction so developers can feed clean, structured documents directly into RAG systems and coding agents.

  _Another essential brick in the modern stack that exists solely because we decided it was easier to parse a thousand PDFs than read them._

  `pdf-parser` `rag` `document-extraction` `llm-tooling` `python`
  </details>

- **[Docling](https://github.com/docling-project/docling)** `⭐ 61.6k` `updated ≤30d` Docling is a document parsing library that converts PDF, DOCX, PPTX, HTML, and other formats into structured Markdown or JSON for AI workflows. <details><summary>More about</summary>

  It lets developers reliably extract clean text and tables from complex documents to feed LLMs, reducing hallucinations from poor input parsing.

  _Another tool promising to solve 'AI-ready documents' while secretly adding another YAML config and dependency tree to your RAG pipeline._

  `document-parsing` `rag` `llm-ingestion`
  </details>

- **[LLMApp](https://github.com/pathwaycom/llm-app)** `⭐ 59.8k` `updated ≤180d` A repository of ready-to-deploy Docker templates for building RAG pipelines, enterprise search, and AI applications that sync live with data sources like SharePoint, Google Drive, S3, and Kafka. <details><summary>More about</summary>

  It gives developers pre-built, scalable pipelines for real-time data ingestion and retrieval, reducing the boilerplate needed to stand up production RAG systems.

  _Another glorious shortcut to building a RAG pipeline you will inevitably spend three weeks tuning only to realize the hard part was never the indexing speed._

  `rag` `pipelines` `enterprise-search` `vector-index` `llmops`
  </details>

- **[AutoGen](https://github.com/microsoft/autogen)** `⭐ 57.8k` `updated ≤90d` A programming framework for building multi-agent AI applications in Python, now in maintenance mode in favor of Microsoft's newer Agent Framework. <details><summary>More about</summary>

  It provides the foundational building blocks for developers to compose autonomous assistants that can coordinate tasks, use tools via MCP, and hand off work to specialist agents.

  _We spent two years wiring agents together in a framework that is now gently sunset into a new Microsoft framework that will likely be sunset again by 2026._

  `multi-agent` `framework` `python` `mcp` `orchestration`
  </details>

- **[OpenManus](https://github.com/foundationagents/openmanus)** `⭐ 56.5k` `updated ≤180d` OpenManus is an open-source, general-purpose LLM agent framework that allows developers to run autonomous tasks using configurable LLM backends without invite-only restrictions. <details><summary>More about</summary>

  It provides a transparent, code-first alternative to closed-agent products like Manus, letting developers experiment with and extend autonomous agent loops locally.

  _Just what the ecosystem needed: another 'open' agent framework launched in three hours to ensure we can all spend our weekends configuring config.toml files for models that hallucinate the same stack traces._

  `llm-agent` `framework` `python` `autonomous` `open-source`
  </details>

- **[CrewAI](https://github.com/crewaiinc/crewai)** `⭐ 53.2k` `updated ≤30d` CrewAI is a Python framework for orchestrating role-playing autonomous AI agents into collaborative 'crews' and event-driven 'flows' to tackle complex tasks. <details><summary>More about</summary>

  It provides developers with both high-level abstractions for autonomous collaboration and low-level control for building production-grade multi-agent systems.

  _Now you can delegate the overwhelming complexity of your backlog to a committee of autonomous agents, who will presumably argue about the implementation details before failing in unison._

  `multi-agent` `python` `orchestration` `framework` `automation`
  </details>

- **[LiteLLM 🚅](https://github.com/berriai/litellm)** `⭐ 50.7k` `updated ≤30d` LiteLLM is an open-source AI gateway and Python SDK that provides a unified OpenAI-compatible interface for calling 100+ LLM APIs, with built-in cost tracking, load balancing, and logging. <details><summary>More about</summary>

  It removes provider-specific SDK friction and gives teams a single proxy layer to manage auth, spend tracking, and reliability across every major LLM provider.

  _We have successfully abstracted the abstraction, so you can now introduce a single point of failure that breaks your entire AI stack in one beautifully unified way._

  `ai-gateway` `llmops` `proxy` `sdk` `multi-provider`
  </details>

- **[LlamaIndex](https://github.com/run-llama/llama_index)** `⭐ 49.2k` `updated ≤90d` LlamaIndex is an open-source Python framework for building agentic applications with data connectors, retrieval pipelines, and integrations for LLMs, embeddings, and vector stores. <details><summary>More about</summary>

  It gives developers reusable building blocks for RAG, document parsing, and agent workflows without forcing a specific control plane or SaaS runtime.

  _Another week, another foundational framework that promises to be the only abstraction layer you will ever need, right up until the next one replaces it._

  `rag` `agent-framework` `llm` `python` `retrieval`
  </details>

- **[Quivr](https://github.com/quivrhq/quivr)** `⭐ 39.1k` `updated ≤1y` Quivr is a Python framework and SDK for building opinionated RAG pipelines that ingest files, retrieve context, and answer questions using any LLM and vector store. <details><summary>More about</summary>

  It gives developers a code-first way to embed retrieval-augmented generation into their own apps without building the full RAG plumbing from scratch.

  _Yet another reminder that wiring up a PDF to a model now requires its own framework, YAML workflows, rerankers, and a second brain you have to maintain._

  `rag` `llm` `sdk` `python` `retrieval`
  </details>

- **[mindsdb](https://github.com/mindsdb/mindsdb)** `⭐ 39.1k` `updated ≤90d` MindsDB is a self-hosted query engine that gives AI agents unified, SQL-compatible access to over 200 structured and unstructured data sources. <details><summary>More about</summary>

  It lets developers build conversational analytics and semantic search agents that answer questions against live enterprise data without building custom ETL pipelines.

  _Another layer of infrastructure promising that if we just federate access to every database and PDF in the company, the agents would finally stop hallucinating the quarterly results._

  `data-connector` `semantic-search` `self-hosted` `agent-infra` `sql`
  </details>

- **[CopilotKit](https://github.com/copilotkit/copilotkit)** `⭐ 35.3k` `updated ≤30d` CopilotKit is an open-source SDK for building agent-native applications with generative UI, shared state, and human-in-the-loop workflows in React and Angular. <details><summary>More about</summary>

  It gives developers a structured way to connect LLM agents to frontend state and dynamically render UI components during agent execution.

  _Another framework promising that this time, wiring a chat loop to your React state will definitely not end in a PR titled 'temp: fix agent rendering again'._

  `agent-native` `generative-ui` `react` `sdk` `ag-ui`
  </details>

- **[LightRAG](https://github.com/hkuds/lightrag)** `⭐ 34.8k` `updated ≤90d` LightRAG is a Python-based Retrieval-Augmented Generation framework that constructs and queries knowledge graphs for fast, integrated information retrieval. <details><summary>More about</summary>

  It provides developers with a lightweight, graph-based RAG pipeline that can be imported and scripted into applications requiring structured LLM knowledge retrieval.

  _Yet another RAG framework enters the arena, proving that the best way to avoid hallucinating is to build an entire graph database and hope the context window doesn't notice._

  `rag` `knowledge-graph` `llm` `framework` `retrieval`
  </details>

- **[DSPy](https://github.com/stanfordnlp/dspy)** `⭐ 34.2k` `updated ≤90d` DSPy is a Python framework for programming language models with composable code and algorithms that optimize prompts and model weights. <details><summary>More about</summary>

  It lets developers build modular AI systems and RAG pipelines using declarative Python instead of brittle, hand-tuned prompts.

  _You can finally stop treating prompt engineering like alchemy, only to discover that replacing it with compiler-style optimization creates an entirely new class of hyperparameter anxiety._

  `frameworks` `llm` `python` `rag` `optimization`
  </details>

- **[GraphRAG](https://github.com/microsoft/graphrag)** `⭐ 32.8k` `updated ≤90d` A modular, graph-based Retrieval-Augmented Generation (RAG) system from Microsoft that extracts structured knowledge graphs from unstructured text using LLMs. <details><summary>More about</summary>

  It gives developers a structured pipeline for building RAG applications that reason over complex relationships in private datasets rather than just surface-level vector search.

  _Yet another reminder that your bespoke 'AI-powered' feature is just a few-hundred-line wrapper around a Microsoft research project that will inevitably be absorbed into a larger framework next quarter._

  `rag` `knowledge-graph` `llm` `pipeline` `microsoft`
  </details>

- **[LangGraph](https://github.com/langchain-ai/langgraph)** `⭐ 31.3k` `updated ≤90d` LangGraph is a low-level orchestration framework for building, managing, and deploying stateful, long-running AI agents as graphs in Python and TypeScript. <details><summary>More about</summary>

  It gives developers fine-grained control over durable execution, memory, and human-in-the-loop workflows when building complex agentic systems.

  _Yet another graph framework ensuring you can visualize your agent's existential crisis in acyclical detail before it inevitably hangs on a missing edge._

  `agents` `framework` `graph` `stateful` `orchestration`
  </details>

- **[Qdrant](https://github.com/qdrant/qdrant)** `⭐ 31.1k` `updated ≤90d` Qdrant is a high-performance vector database and similarity search engine built in Rust, designed for storing, searching, and managing vector embeddings with payload filtering. <details><summary>More about</summary>

  It provides the retrieval infrastructure that powers RAG pipelines, semantic search, and recommendation systems, serving as the memory backbone for many AI applications.

  _Yet another reminder that your 'intelligent' agent is mostly just calling a vector search and hoping the cosine similarity aligns with your users' intent._

  `vector-database` `embeddings` `retrieval` `rust` `mlops`
  </details>

- **[Chroma](https://github.com/chroma-core/chroma)** `⭐ 28.5k` `updated ≤30d` Chroma is an open-source embedding database and vector search infrastructure for AI applications, available as a self-hosted server or a hosted cloud service. <details><summary>More about</summary>

  It provides the retrieval and memory backbone that lets developers add semantic search and RAG capabilities to AI agents and LLM-powered apps without building custom vector infrastructure.

  _We have successfully abstracted the problem of remembering things into yet another specialized database that you now have to host, version, and debug when your embeddings drift._

  `vector-db` `retrieval` `rag` `memory` `infrastructure`
  </details>

- **[Semantic Kernel](https://github.com/microsoft/semantic-kernel)** `⭐ 27.8k` `updated ≤90d` Semantic Kernel is a model-agnostic SDK from Microsoft for building AI agents and multi-agent systems using Python, .NET, or Java. <details><summary>More about</summary>

  It provides developers with enterprise-grade building blocks for agent orchestration, memory, and plugin integration across major LLM providers.

  _Microsoft has thoughtfully provided a migration path to the 'Microsoft Agent Framework,' ensuring you can rewrite your agents twice before the framework stabilizes._

  `sdk` `agents` `multi-agent` `microsoft` `enterprise`
  </details>

- **[Smolagents](https://github.com/huggingface/smolagents)** `⭐ 27.1k` `updated ≤90d` A minimal library from Hugging Face for building and running LLM agents that execute actions as code rather than JSON tool calls. <details><summary>More about</summary>

  Developers can spin up code-writing agents with a few lines of Python, hook into any LLM provider, and pull reusable tools directly from the Hugging Face Hub.

  _Another day, another 'barebones' framework proving that the fastest way to ship an agent is to wrap a while-loop in a library and call it production-ready._

  `agents` `framework` `llm` `huggingface` `code-execution`
  </details>

- **[AgentScope](https://github.com/agentscope-ai/agentscope)** `⭐ 26.8k` `updated ≤30d` AgentScope is a production-ready Python framework for building, running, and deploying single and multi-agent systems with built-in support for ReAct agents, memory, planning, MCP integration, and cloud or Kubernetes serving. <details><summary>More about</summary>

  It gives developers a code-first SDK to assemble observable, scalable agent workflows and serve them locally or in production without wrestling with opinionated orchestration constraints.

  _Another pristine agent framework joins the pile, graciously promising you can build, see, and trust your agents right before you spend three days deciding which framework to rebuild them in._

  `agent-framework` `multi-agent` `mcp` `python` `llm`
  </details>

- **[OpenAI Agents Python](https://github.com/openai/openai-agents-python)** `⭐ 25.9k` `updated ≤90d` A lightweight Python SDK from OpenAI for building and orchestrating multi-agent workflows with support for over 100 LLM providers. <details><summary>More about</summary>

  Developers can define agents with specific instructions and tools, then delegate tasks across a managed workflow without building orchestration logic from scratch.

  _Just when you thought you were done rewriting your stack for the latest agent framework, OpenAI releases the 'official' way to do it, rendering your three-week-old AutoGen implementation a legacy system._

  `python` `multi-agent` `sdk` `framework` `openai`
  </details>

- **[Haystack](https://github.com/deepset-ai/haystack)** `⭐ 25.6k` `updated ≤30d` Haystack is an open-source Python framework for building modular LLM applications, enabling developers to design pipelines and agent workflows with explicit control over retrieval, routing, memory, and generation for RAG, semantic search, and conversational systems. <details><summary>More about</summary>

  It provides a production-ready, code-first toolkit for developers to build custom AI systems with transparent control over every stage of the LLM pipeline, rather than relying on opaque, hosted abstractions.

  _Yet another powerful framework to master while you wait for the AI to finish writing the code that makes the framework obsolete._

  `llm` `rag` `python` `framework` `agents`
  </details>

- **[ScrapeGraphAI](https://github.com/scrapegraphai/scrapegraph-ai)** `⭐ 24.4k` `updated ≤90d` A Python library that uses LLMs and graph logic to build scraping pipelines for websites and local documents based on natural language extraction instructions. <details><summary>More about</summary>

  It lets developers define what data to extract from complex web sources using plain English instead of maintaining brittle CSS selectors or XPath queries.

  _We have successfully abstracted away the only part of web scraping that required actual skill, leaving us with 24,000 stars and no excuse for not harvesting the entire internet._

  `web-scraping` `llm` `python` `rag` `data-extraction`
  </details>

- **[AI](https://github.com/vercel/ai)** `⭐ 24.2k` `updated ≤90d` The AI SDK is a provider-agnostic TypeScript toolkit for building AI-powered applications and agents using React, Next.js, and other UI frameworks. <details><summary>More about</summary>

  It lets developers integrate multiple LLM providers with a unified API and build generative UIs without locking into a single vendor.

  _Another abstraction layer to forget which provider you're actually using when the bill shows up._

  `ai-sdk` `typescript` `llm` `ui`
  </details>

- **[Mastra](https://github.com/mastra-ai/mastra)** `⭐ 23.6k` `updated ≤90d` Mastra is a TypeScript framework for building AI-powered applications and agents, providing model routing, workflow orchestration, memory management, and built-in evals. <details><summary>More about</summary>

  It gives TypeScript developers a unified, code-first stack to go from LLM prototype to production-ready agent with integrated tools, context management, and observability.

  _Another week, another full-featured TypeScript agent framework that promises to solve the 'orchestration problem' while quietly adding three new layers of abstraction you'll be debugging at 2am._

  `typescript` `agents` `workflows` `framework` `mcp`
  </details>

- **[Dolt](https://github.com/dolthub/dolt)** `⭐ 23.4k` `updated ≤30d` Dolt is a SQL database that versions data like Git, allowing developers to fork, branch, merge, and diff tables using familiar Git semantics and a MySQL-compatible interface. <details><summary>More about</summary>

  It provides a version-controlled state store that enables agent memory, multi-agent workflows, and reproducible data pipelines without bolting on external versioning hacks.

  _You will briefly consider versioning your production database like a weekend side project and then remember why git revert on a 40 GB table is a nightmare you do not want._

  `git-for-data` `sql` `agent-memory` `data-versioning` `database`
  </details>

- **[DeepSeek-OCR](https://github.com/deepseek-ai/deepseek-ocr)** `⭐ 23.3k` `updated ≤180d` DeepSeek-OCR is a vision-language model and inference toolkit designed to investigate visual-text compression by performing high-throughput OCR on images and PDFs. <details><summary>More about</summary>

  It provides developers with a specialized, high-performance local model and vLLM-compatible inference code for extracting text from visual documents at scale.

  _Just when you thought your OCR pipeline was settled, a lab releases a model that turns your PDFs into tokens at 2500 tokens per second while you're still debugging your Tesseract install._

  `ocr` `vision-model` `vllm` `inference` `local-model`
  </details>

- **[serve](https://github.com/jina-ai/serve)** `⭐ 21.9k` `updated >1y` Jina-Serve is a cloud-native Python framework for building, scaling, and deploying multimodal AI services and LLM pipelines using gRPC, HTTP, and Kubernetes. <details><summary>More about</summary>

  It lets developers wrap ML models and LLMs into scalable microservices with built-in Docker and Kubernetes support, handling the plumbing of streaming, batching, and deployment.

  _Yet another framework promising to abstract away the pain of shipping AI, ensuring you can now debug a FastAPI-like service inside a Kubernetes cluster instead of just debugging your model._

  `llm-serving` `microservices` `cloud-native` `mlops` `grpc`
  </details>

- **[Swarm](https://github.com/openai/swarm)** `⭐ 21.4k` `updated ≤90d` Swarm is an educational, lightweight multi-agent orchestration framework from OpenAI that demonstrates agent coordination and handoffs using only the Chat Completions API. <details><summary>More about</summary>

  It provides a minimal, client-side pattern for composing specialized agents that hand off tasks to one another, serving as a reference implementation for multi-agent workflows.

  _OpenAI built a framework, documented it, gathered 21,000 stars, and then told everyone to migrate to a new SDK, leaving behind a perfectly good educational rabbit hole for developers who love rewriting their stacks._

  `multi-agent` `orchestration` `openai` `lightweight` `education`
  </details>

- **[veRL (`🔥`)](https://github.com/verl-project/verl)** `⭐ 21.2k` `updated ≤90d` A flexible, efficient RL post-training framework for large language models that implements algorithms like GRPO and PPO with seamless integration into existing LLM training infrastructure. <details><summary>More about</summary>

  Gives developers a production-ready, modular toolkit for RLHF and reasoning training at scale, decoupling computation from data dependencies to support trillion-parameter models across distributed clusters.

  _Finally, a framework elegant enough to orchestrate your trillion-parameter model's existential crisis across 64 H800s, only to discover the reward model started gaming the metric in epoch two._

  `rlhf` `post-training` `distributed-training` `llm-training` `hybridflow`
  </details>

- **[adk-python](https://github.com/google/adk-python)** `⭐ 20k` `updated ≤30d` An open-source, code-first Python framework from Google for building, evaluating, and deploying modular, multi-agent AI systems. <details><summary>More about</summary>

  It provides a structured, software-engineering approach to agent creation with built-in tools, multi-agent orchestration, and deployment flexibility across cloud and local environments.

  _We have reached the point where we need a dedicated framework just to manage the complexity of the agents we built to manage the complexity of our code._

  `python` `agent-framework` `multi-agent` `google` `sdk`
  </details>

- **[OWL](https://github.com/camel-ai/owl)** `⭐ 19.9k` `updated ≤30d` OWL is a multi-agent collaboration framework built on CAMEL-AI that automates real-world tasks using dynamic agent interactions and toolkits like MCP and Playwright. <details><summary>More about</summary>

  It provides developers with a structured way to build and run specialized agent teams that can interact with the web, use multimodal inputs, and tackle complex automation workflows.

  _Yet another framework promising to orchestrate the perfect digital workforce, just in case your current problem is that you don't have enough autonomous agents arguing with each other in a Python environment._

  `multi-agent` `automation` `camel-ai` `mcp` `framework`
  </details>

- **[RAG-Anything](https://github.com/hkuds/rag-anything)** `⭐ 19.8k` `updated ≤90d` RAG-Anything is a Python framework for building multimodal retrieval-augmented generation pipelines that process text, images, tables, and equations. <details><summary>More about</summary>

  It provides developers with a unified, code-first toolkit to ingest and query complex multimodal documents within their own AI applications.

  _Now you can over-engineer your context pipeline to hallucinate just as confidently about diagrams and LaTeX equations as it does about your codebase._

  `rag` `multimodal` `python` `framework` `retrieval`
  </details>

- **[TRL](https://github.com/huggingface/trl)** `⭐ 18.3k` `updated ≤90d` A Hugging Face library for post-training foundation models using supervised fine-tuning, DPO, GRPO, and other reinforcement learning techniques. <details><summary>More about</summary>

  It provides developers with a standardized, scalable code-first toolkit to customize and align LLMs using the same methods behind models like DeepSeek-R1 and Llama 3.

  _Yet another reminder that while we have the tools to finely tune a 70B model, we still can't figure out why the linter is angry at line 42._

  `fine-tuning` `reinforcement-learning` `huggingface` `sdk` `post-training`
  </details>

- **[langchainjs](https://github.com/langchain-ai/langchainjs)** `⭐ 17.6k` `updated ≤90d` LangChain.js is a TypeScript framework for building LLM-powered applications by chaining together modular components, models, embeddings, and third-party integrations. <details><summary>More about</summary>

  It provides a standard interface for rapid prototyping and production-ready AI features while keeping model and provider choices interchangeable as the ecosystem evolves.

  _Another day, another abstraction layer promising to future-proof your stack, ensuring you will rewrite your entire AI pipeline the moment a shinier agent framework drops next week._

  `typescript` `llm` `framework` `agents` `chain`
  </details>

- **[olmOCR](https://github.com/allenai/olmocr)** `⭐ 17.4k` `updated ≤90d` olmocr is a toolkit and 7B VLM pipeline for converting PDFs, PNGs, and JPEGs into clean Markdown text for LLM datasets and training workflows. <details><summary>More about</summary>

  It gives developers a GPU-efficient way to turn messy, multi-column, equation-heavy documents into linearized text that won't poison downstream model training or RAG pipelines.

  _We have reached the point where we need a specialized vision-language model just to convince a PDF it is allowed to be plain text._

  `pdf` `ocr` `vlm` `data-pipeline` `llm-training`
  </details>

- **[CAMEL](https://github.com/camel-ai/camel)** `⭐ 17.2k` `updated ≤30d` CAMEL is an open-source Python framework for building, running, and researching multi-agent systems with stateful memory and scalable coordination. <details><summary>More about</summary>

  It gives developers a structured code-first toolkit to design cooperative AI agents, generate synthetic data, and simulate complex task environments at scale.

  _Yet another framework promising to unlock the secrets of agent society while you are still trying to get a single LLM to reliably format JSON._

  `multi-agent` `framework` `python` `scalability` `stateful`
  </details>

- **[PydanticAI](https://github.com/pydantic/pydantic-ai)** `⭐ 16.9k` `updated ≤90d` A Python agent framework from the Pydantic team for building production-grade GenAI applications with type-safe models, tool integration, and durable execution. <details><summary>More about</summary>

  It lets developers build typed, validated, and observable agentic workflows using the same Pydantic patterns that already power much of the Python AI ecosystem.

  _Now you can experience the FastAPI feeling in agent land, right before realizing your agent’s biggest type error is its life choices._

  `python` `agent-framework` `type-safe` `pydantic` `observability`
  </details>

- **[Qwen-Agent](https://github.com/qwenlm/qwen-agent)** `⭐ 16.3k` `updated ≤180d` Qwen-Agent is a Python framework for building LLM-powered applications using Qwen models, featuring function calling, MCP compatibility, RAG, and a code interpreter. <details><summary>More about</summary>

  It provides developers with a structured SDK to build custom agents with tool use and memory, while also serving as the backend for the Qwen Chat web interface.

  _Yet another framework promising to tame the chaos of tool-calling, ensuring you can spend three days configuring your agent's personality instead of fixing the bug in your actual codebase._

  `agent-framework` `qwen` `function-calling` `mcp` `python`
  </details>

- **[Cua](https://github.com/trycua/cua)** `⭐ 16.2k` `updated ≤90d` Open-source infrastructure providing sandboxes, SDKs, and benchmarks for training and deploying computer-use AI agents. <details><summary>More about</summary>

  It provides the virtualization and automation drivers required to allow agents to safely interact with desktop operating systems and applications.

  _It offers the promise of delegating your entire desktop to an agent, assuming you trust the sandbox as much as your own prompt engineering._

  `computer-use` `agent-infrastructure` `sandbox` `sdk` `benchmarks`
  </details>

- **[Llmware](https://github.com/llmware-ai/llmware)** `⭐ 14.9k` `updated ≤90d` llmware is a Python framework for building enterprise RAG pipelines with local, quantized small language models and integrated document parsing, embedding, and query tooling. <details><summary>More about</summary>

  Developers can rapidly build private, cost-effective, on-device LLM applications without relying on cloud APIs, using a unified stack for models, document ingestion, and retrieval.

  _Yet another heroic framework promising enterprise RAG salvation on your laptop, just in time for you to rebuild your stack before the next framework drops next Tuesday._

  `rag` `local-ai` `framework` `enterprise` `small-models`
  </details>

- **[Outlines](https://github.com/dottxt-ai/outlines)** `⭐ 13.9k` `updated ≤90d` Outlines is a Python library that guarantees structured outputs from LLMs by enforcing types, regex, and grammars during generation rather than post-hoc parsing. <details><summary>More about</summary>

  Developers can write `model(prompt, output_type)` and get guaranteed valid JSON, Pydantic models, or constrained text across OpenAI, vLLM, Ollama, and other providers without fragile parsing code.

  _We’ve built an entire ecosystem of libraries to solve the problem that our most powerful models cannot reliably output a well-formed JSON object._

  `structured-outputs` `llm` `pydantic` `regex` `grammar`
  </details>

- **[TensorRT-LLM](https://github.com/nvidia/tensorrt-llm)** `⭐ 13.6k` `updated ≤90d` TensorRT LLM is a Python and C++ framework from NVIDIA for defining, optimizing, and serving Large Language Models with specialized kernels and efficient runtimes on NVIDIA GPUs. <details><summary>More about</summary>

  It allows developers to squeeze maximum inference performance out of NVIDIA hardware for LLMs and Visual Gen models through state-of-the-art optimizations and distributed serving strategies.

  _Nothing says 'I enjoy my job' quite like spending three days tuning CUDA graph batch sizes just to shave 40 milliseconds off a token that nobody asked for._

  `inference` `nvidia` `llm-serving` `cuda` `optimization`
  </details>

- **[clip-as-service](https://github.com/jina-ai/clip-as-service)** `⭐ 12.8k` `updated >1y` clip-as-service is a scalable inference service for generating multimodal embeddings using the CLIP model for images and text. <details><summary>More about</summary>

  It enables developers to perform cross-modal retrieval, image-to-text search, and semantic similarity at scale without managing model serving infrastructure.

  _Yet another embedding microservice to Docker-compose into your stack, promising vector search utopia while silently adding latency and ops tax._

  `embeddings` `clip` `multimodal` `serving` `search`
  </details>

- **[e2b](https://github.com/e2b-dev/e2b)** `⭐ 12.5k` `updated ≤30d` E2B is an open-source infrastructure platform that provides secure, isolated cloud sandboxes for running AI-generated code via JavaScript and Python SDKs. <details><summary>More about</summary>

  It gives developers a safe, scalable execution environment to let coding agents run untrusted code and use real-world tools without risking their local machines or production cloud accounts.

  _Another pristine abstraction layer so your agent can confidently `rm -rf /` inside a sandbox you are still paying to keep warm._

  `sandbox` `code-execution` `agents` `infrastructure` `sdk`
  </details>

- **[txtai](https://github.com/neuml/txtai)** `⭐ 12.5k` `updated ≤90d` txtai is an all-in-one Python framework for semantic search, LLM orchestration, and language model workflows, featuring an embeddings database and multi-model pipeline support. <details><summary>More about</summary>

  Developers can use it to build autonomous agents, RAG processes, and vector search applications locally or at scale using a batteries-included SDK with API bindings for multiple languages.

  _Yet another 'all-in-one' AI framework that promises to be your entire stack, ensuring you can spend the afternoon debating sparse vs. dense vectors instead of shipping code._

  `llm` `rag` `vector-search` `framework` `python`
  </details>

- **[Zerox](https://github.com/getomni-ai/zerox)** `⭐ 12.2k` `updated >1y` A Node.js and Python library that converts PDFs, DOCX files, and images into Markdown by rendering pages as images and processing them through vision models. <details><summary>More about</summary>

  It provides a clean, structured pipeline for developers to ingest complex document layouts—including tables and charts—into formats suitable for AI workflows and RAG systems.

  _Another tool promising that if we just convert everything to Markdown, the LLM will finally understand the quarterly report without hallucinating the columns._

  `ocr` `document-extraction` `vision-models` `pdf-to-markdown` `sdk`
  </details>

- **[Chainlit](https://github.com/chainlit/chainlit)** `⭐ 12.2k` `updated ≤30d` Chainlit is a Python framework for building and serving production-ready conversational AI applications with a built-in chat UI. <details><summary>More about</summary>

  It allows developers to quickly wrap LLM logic with a frontend interface, streamlining the creation of chat-based tools and demos without writing custom UI code.

  _Yet another framework promising to turn your messy LangChain scripts into a 'production-ready' UI in minutes, because apparently the hardest part of AI development was the button to clear the chat history._

  `python` `conversational-ai` `llm` `ui-framework` `langchain`
  </details>

- **[Pipecat](https://github.com/pipecat-ai/pipecat)** `⭐ 11.9k` `updated ≤90d` Pipecat is an open-source Python framework for building real-time voice and multimodal conversational AI agents with composable pipelines and pluggable AI services. <details><summary>More about</summary>

  It provides developers with a structured way to orchestrate audio, video, and LLM services into low-latency conversational experiences without stitching together raw WebRTC and API calls.

  _Yet another framework promising to make building voice agents 'effortless,' ensuring you can now waste time architecting multimodal pipelines instead of just feeling awkward on the phone._

  `voice-ai` `multimodal` `real-time` `python` `framework`
  </details>

- **[LangChain4j](https://github.com/langchain4j/langchain4j)** `⭐ 11.9k` `updated ≤90d` LangChain4j is an idiomatic, open-source Java library for building LLM-powered applications on the JVM, providing a unified API over popular LLM providers, vector stores, and tool calling capabilities. <details><summary>More about</summary>

  It enables Java developers to integrate LLMs, RAG, and agent patterns into enterprise applications using familiar frameworks like Spring Boot and Quarkus without wrestling with proprietary APIs.

  _Now you can finally wrap your LLM strategy in three layers of enterprise Java abstraction and call it innovation while the Python team ships features in minutes._

  `java` `llm` `rag` `agents` `spring-boot`
  </details>

- **[Eino](https://github.com/cloudwego/eino)** `⭐ 11.9k` `updated ≤30d` Eino is a Go-native LLM application development framework providing reusable components, agent patterns, and graph-based composition tools for building AI workflows. <details><summary>More about</summary>

  It gives Go developers a LangChain-style toolkit with first-class streaming, tool use, and multi-agent coordination without leaving their native ecosystem.

  _Another day, another framework promising to tame the agent chaos, this time ensuring your Go services can hallucinate structured outputs with enterprise-grade graph orchestration._

  `go` `llm-framework` `agent-framework` `graph-orchestration` `langchain`
  </details>

- **[Gateway](https://github.com/portkey-ai/gateway)** `⭐ 11.6k` `updated ≤90d` A fast, open-source AI gateway that routes requests to 1,600+ LLMs with built-in guardrails, load balancing, and fallbacks via a single API. <details><summary>More about</summary>

  It gives developers a single integration point to manage model routing, reliability, and safety across a massive provider ecosystem without vendor lock-in.

  _Because what the modern stack really needed was another high-performance abstraction layer to argue about while your 12-line script slowly forgets which of the 1,600 models it was supposed to be talking to._

  `ai-gateway` `llm-routing` `guardrails` `mcp` `open-source`
  </details>

- **[Tambo](https://github.com/tambo-ai/tambo)** `⭐ 11.1k` `updated ≤90d` An open-source React SDK and backend toolkit that lets developers register UI components with Zod schemas so an LLM agent can select and stream props to render generative user interfaces. <details><summary>More about</summary>

  It gives React developers a structured way to wire existing UI components into an agent-driven conversation loop without building custom streaming and state infrastructure.

  _Yet another reminder that your beautifully handcrafted component library is now just a Zod schema waiting to be hallucinated into a chat window._

  `react` `generative-ui` `agent-sdk` `streaming` `llm`
  </details>

- **[ten-framework](https://github.com/ten-framework/ten-framework)** `⭐ 10.5k` `updated ≤90d` An open-source framework for building real-time, multimodal conversational AI agents with support for voice, video, and extensions like memory and turn detection. <details><summary>More about</summary>

  It gives developers a structured way to build low-latency voice and video AI agents with pluggable extensions instead of wiring raw model APIs by hand.

  _Yet another framework promising that this time, stitching LLMs into real-time voice apps will definitely not turn into a multithreaded nightmare of VAD configs and WebSocket edge cases._

  `voice-ai` `multimodal` `real-time` `agent-framework` `conversational-ai`
  </details>

- **[instant](https://github.com/instantdb/instant)** `⭐ 10.2k` `updated ≤90d` InstantDB is a real-time, client-side database backend providing auth, permissions, storage, and presence for building multiplayer and offline-capable applications. <details><summary>More about</summary>

  It positions itself as the ideal backend for AI-coded apps, handling data syncing and optimistic updates so developers can focus on prompting UIs rather than wiring up traditional server infrastructure.

  _We have successfully abstracted away the 'schlep' of writing a server, only to replace it with the fresh new schlep of debugging real-time triple stores in Postgres WAL tails._

  `backend` `database` `realtime` `offline-first` `ai-apps`
  </details>

- **[Lancedb](https://github.com/lancedb/lancedb)** `⭐ 10.2k` `updated ≤90d` LanceDB is an open-source, embedded vector database built on the Lance columnar format for fast multimodal vector, full-text, and SQL search. <details><summary>More about</summary>

  It provides developers with a local or cloud-native storage layer for vectors and multimodal data, integrating directly with Python, Node.js, Rust, and LangChain/LlamaIndex ecosystems.

  _Another essential brick in the towering RAG stack that lets you index petabytes of data just to feed a model enough context to forget the first paragraph._

  `vector-database` `multimodal` `retrieval` `embedded` `storage`
  </details>

- **[agent-framework](https://github.com/microsoft/agent-framework)** `⭐ 10.2k` `updated ≤90d` Microsoft Agent Framework is a multi-language SDK for building, orchestrating, and deploying production-grade AI agents and multi-agent workflows in Python and .NET. <details><summary>More about</summary>

  It provides developers with a consistent, provider-agnostic foundation for graph-based orchestration, durability, and observability when moving agent systems from prototype to production.

  _Yet another framework to learn while you wait for the one true orchestration standard to emerge, presumably next Tuesday._

  `agents` `orchestration` `python` `dotnet` `sdk`
  </details>

- **[Metaflow](https://github.com/netflix/metaflow)** `⭐ 10.1k` `updated ≤90d` Metaflow is a Python framework for building and managing real-life AI/ML systems, from rapid local prototyping in notebooks to scalable production deployments on cloud infrastructure. <details><summary>More about</summary>

  It gives data science and engineering teams a unified API to version experiments, scale compute across AWS/Azure/GCP, and deploy reliable ML workflows without reinventing infrastructure.

  _Another framework promising to bridge the notebook-to-production gap, ensuring you can now orchestrate petabytes of regret with a friendly Pythonic API._

  `mlops` `workflow` `python` `orchestration` `ml-infrastructure`
  </details>

- **[SkyPilot](https://github.com/skypilot-org/skypilot)** `⭐ 9.9k` `updated ≤90d` SkyPilot is a system for running, managing, and scaling AI workloads across diverse infrastructure including Kubernetes, Slurm, 20+ clouds, and on-prem environments. <details><summary>More about</summary>

  It provides AI teams a unified interface to run jobs and infra teams a control plane for advanced scheduling, scaling, and orchestration across fragmented compute resources.

  _The dream of writing one YAML file to rule AWS, GCP, Azure, and your dusty on-prem cluster remains alive, even if your Kubernetes cluster is currently down for 'undocumented reasons'._

  `ml-infrastructure` `multicloud` `gpu` `llm-serving` `orchestration`
  </details>

- **[PDF-Extract-Kit](https://github.com/opendatalab/pdf-extract-kit)** `⭐ 9.6k` `updated >1y` A modular Python toolkit that bundles fine-tuned models for layout detection, OCR, formula recognition, and table extraction to parse complex PDF documents into structured content. <details><summary>More about</summary>

  It provides the high-quality document parsing layer needed to feed clean, structured data into LLMs for RAG, document Q&A, and translation workflows.

  _Yet another reminder that while agents can write entire apps, we still need a dedicated AI toolkit just to convince a PDF it contains readable text._

  `pdf-parsing` `document-extraction` `ocr` `llm-tooling` `models`
  </details>

- **[ART](https://github.com/openpipe/art)** `⭐ 9.4k` `updated ≤90d` Agent Reinforcement Trainer (ART) is an open-source framework and managed service for training multi-step LLM agents using GRPO reinforcement learning on models like Qwen, Llama, and GPT-OSS. <details><summary>More about</summary>

  It provides developers with the infrastructure to move agents beyond static prompting by teaching them new behaviors through reward functions and experience.

  _Finally, a framework that lets you spend GPU cycles teaching a model how to play 2048 so it can forget how to write a valid SQL query._

  `reinforcement-learning` `grpo` `agent-training` `fine-tuning` `wandb`
  </details>

- **[Oumi](https://github.com/oumi-ai/oumi)** `⭐ 9.2k` `updated ≤90d` A code-first, open-source framework and CLI for fine-tuning, evaluating, and deploying open-source LLMs and VLMs across local and cloud environments. <details><summary>More about</summary>

  It gives developers a unified toolkit to take models like Qwen3 and DeepSeek-R1 from fine-tuning through evaluation to dedicated inference endpoints without stitching together disparate scripts.

  _Yet another 'end-to-end' ML platform that promises to solve your model lifecycle so you can spend three weeks configuring YAML instead of actually shipping a feature._

  `fine-tuning` `llm-eval` `model-deployment` `cli`
  </details>

- **[Langchain Go](https://github.com/tmc/langchaingo)** `⭐ 9.2k` `updated ≤180d` LangChain for Go is a Go-native library providing composable building blocks for writing LLM-powered applications, including model abstraction, chains, and memory. <details><summary>More about</summary>

  It enables Go developers to build RAG pipelines, chatbots, and agents using familiar Go idioms instead of shelling out to Python or JavaScript ecosystems.

  _Just when you thought you escaped the Python dependency hell of the original LangChain, you can now reproduce the same 'which version of what abstraction broke my prompt' debugging experience, but in a strictly typed language._

  `go` `langchain` `llm` `sdk` `framework`
  </details>

- **[deeplake](https://github.com/activeloopai/deeplake)** `⭐ 9.2k` `updated ≤30d` Deep Lake is a multimodal AI database and storage format designed for storing vectors, images, text, and other data types with integrations for LLM apps and deep learning training workflows. <details><summary>More about</summary>

  It provides developers with a unified, serverless storage layer for managing embeddings, datasets, and vector search across local and cloud environments while integrating with LangChain, LlamaIndex, and PyTorch.

  _Yet another 'database for AI' promising to be the single source of truth for your multimodal mess, because apparently your Postgres instance wasn't confused enough._

  `vector-database` `multimodal` `rag` `data-infrastructure` `llmops`
  </details>

- **[KAG](https://github.com/openspg/kag)** `⭐ 8.7k` `updated ≤180d` KAG is a knowledge-augmented generation framework that combines the OpenSPG engine and LLMs to provide logical reasoning and multi-hop Q&A for professional domain knowledge bases, moving beyond traditional vector similarity RAG. <details><summary>More about</summary>

  It gives developers a structured way to build domain-specific knowledge systems that reason over graphs and text using logical forms rather than just semantic similarity.

  _Yet another clever way to avoid the inevitable realization that your domain knowledge base is mostly unresolved tickets and undocumented tribal lore._

  `rag` `knowledge-graph` `reasoning` `llm-framework`
  </details>

- **[BentoML](https://github.com/bentoml/bentoml)** `⭐ 8.7k` `updated ≤30d` BentoML is a Python framework for packaging AI/ML models into standardized, high-performance inference APIs and deploying them as Docker containers or to BentoCloud. <details><summary>More about</summary>

  It handles the heavy lifting of model packaging, dependency management, and GPU-optimized serving, letting developers focus on the model logic rather than the inference infrastructure.

  _Just what we needed: another opinionated standard for packaging Python dependencies into Docker images, giving us one more place to debug why the GPU driver version doesn't match the container._

  `model-serving` `llmops` `python` `inference` `mlops`
  </details>

- **[TypeChat](https://github.com/microsoft/typechat)** `⭐ 8.7k` `updated ≤90d` TypeChat is a Microsoft-backed library for TypeScript, Python, and .NET that uses TypeScript-style type definitions to constrain LLM outputs into structured, validated JSON. <details><summary>More about</summary>

  It replaces brittle prompt engineering with schema engineering, allowing developers to define intent strictly via types and automatically repair non-conforming model responses.

  _We have successfully abstracted away the complexity of prompt engineering by replacing it with the complexity of type systems, proving once again that in software, the only way out is through._

  `schema-engineering` `structured-output` `typescript` `llm-library` `microsoft`
  </details>

- **[MiroThinker](https://github.com/miromindai/mirothinker)** `⭐ 8.2k` `updated ≤90d` MiroThinker is an open-source deep research agent optimized for complex web research and prediction tasks, released as a series of models ranging from 8B to 235B parameters. <details><summary>More about</summary>

  It provides developers with a high-performing, open-weight alternative to hosted deep research APIs for building agentic workflows that require extensive web browsing and synthesis.

  _Yet another open-source agent claiming SOTA on benchmarks that require 600 tool calls, ensuring your token budget evaporates faster than your patience for evaluating BrowseComp scores._

  `research-agent` `deep-research` `agent-framework` `open-source` `browsecomp`
  </details>

- **[Upsonic](https://github.com/upsonic/upsonic)** `⭐ 7.8k` `updated ≤90d` Python framework for building autonomous AI agents with task management, tool integration, and sandboxed execution. <details><summary>More about</summary>

  Provides a structured SDK for creating both autonomous and traditional agents with built-in safety constraints (workspace isolation) and MCP tool support, allowing developers to program agent behavior in Python rather than调酒 through GUIs.

  _Because what developers really needed was yet another Python agent framework to debate against CrewAI at 2 AM while their JIRA backlog autocatalyzes into sentient technical debt._

  `agent-framework` `python` `autonomous-agents` `mcp-client` `task-management`
  </details>

- **[R2R](https://github.com/sciphi-ai/r2r)** `⭐ 7.8k` `updated ≤1y` R2R is a production-ready, RESTful API framework for building agentic retrieval-augmented generation (RAG) systems with multimodal ingestion, hybrid search, and knowledge graph support. <details><summary>More about</summary>

  It provides developers with a structured, self-hostable stack to add advanced retrieval, deep research agents, and context management to their own AI applications without starting from scratch.

  _Yet another sophisticated way to discover that your perfectly indexed knowledge graph still can't answer why the build is failing._

  `rag` `retrieval` `sdk` `self-hosted` `api`
  </details>

- **[MegaParse](https://github.com/quivrhq/megaparse)** `⭐ 7.4k` `updated >1y` A Python-based document parser optimized for LLM ingestion that converts PDFs, Word, PowerPoint, and Excel files into structured text with minimal information loss. <details><summary>More about</summary>

  It provides a specialized preprocessing pipeline for developers building RAG systems or AI workflows that need to ingest complex business documents without losing tables, headers, or structure.

  _Yet another library promising to solve the 'PDF-to-LLM' pipeline, ensuring you can now feed your model 7,000 words of boilerplate Terms of Service with unprecedented fidelity._

  `parser` `llm-ingestion` `rag` `document-processing` `python`
  </details>

- **[FinRobot](https://github.com/ai4finance-foundation/finrobot)** `⭐ 7.3k` `updated ≤90d` An open-source AI agent platform for financial analysis that uses multiple LLMs and specialized agents to automate equity research, algorithmic trading, and risk assessment. <details><summary>More about</summary>

  Developers building fintech or quant tools can leverage a pre-built multi-agent stack with financial data integrations instead of wiring together their own analysis pipelines.

  _Yet another reminder that while you are debugging a CSS grid, there is an open-source agent somewhere writing an 18-page equity research report on NVIDIA entirely without you._

  `finance` `multi-agent` `langchain` `research` `trading`
  </details>

- **[Flyte](https://github.com/flyteorg/flyte)** `⭐ 7.1k` `updated ≤30d` Flyte is a Kubernetes-native workflow orchestration platform for reliably running ML pipelines, models, and agents at scale using Python. <details><summary>More about</summary>

  It lets developers define, run, and serve complex AI and data workflows locally or in production without wiring together fragile scripts.

  _You will spend three days learning Kubernetes YAML so your model inference job can fail at scale with enterprise-grade resilience._

  `orchestration` `mlops` `workflows` `kubernetes` `python`
  </details>

- **[PraisonAI](https://github.com/mervinpraison/praisonai)** `⭐ 7.1k` `updated ≤90d` PraisonAI is a Python-first framework and CLI for building and deploying autonomous multi-agent systems that can research, code, and execute tasks using 100+ LLMs with built-in memory and RAG. <details><summary>More about</summary>

  It lets developers rapidly scaffold multi-agent workflows with minimal boilerplate, offering a visual flow builder and integrations for common chat platforms.

  _Yet another ambitious '5 lines of code' framework promising a 24/7 AI workforce that will definitely ship the product while you finally get around to that inbox zero goal._

  `multi-agent` `framework` `sdk` `automation` `cli`
  </details>

- **[MindSearch](https://github.com/internlm/mindsearch)** `⭐ 6.8k` `updated ≤1y` MindSearch is an open-source, multi-agent framework that mimics human search behavior to perform deep web research using LLMs and various search engine APIs. <details><summary>More about</summary>

  Developers can self-host this Perplexity-style search engine to build custom research agents that decompose complex queries and synthesize answers from multiple web sources.

  _Yet another opportunity to replace a five-second Google search with a multi-agent orchestration architecture that takes three minutes to deliberate on your query._

  `multi-agent` `web-search` `llm-framework` `self-hosted` `research`
  </details>

- **[Swarms](https://github.com/kyegomez/swarms)** `⭐ 6.6k` `updated ≤90d` Swarms is a Python framework for building and running production-ready multi-agent systems with support for sequential, concurrent, and hierarchical orchestration patterns. <details><summary>More about</summary>

  It provides developers with prebuilt multi-agent architectures and interoperability with protocols like MCP, reducing the boilerplate needed to coordinate complex agent workflows.

  _Yet another framework promising enterprise-grade multi-agent harmony, ensuring you can now orchestrate six different LLMs into a deadlock with unprecedented scalability._

  `multi-agent` `orchestration` `python` `framework` `enterprise`
  </details>

- **[SuperAgent](https://github.com/superagent-ai/superagent)** `⭐ 6.6k` `updated ≤90d` An open-source SDK and CLI for securing AI applications by detecting prompt injections, redacting PII, and scanning repositories for agent-targeted attacks. <details><summary>More about</summary>

  It provides developers with the runnable guardrails and scanning tooling needed to ship AI agents without leaking secrets or silently executing malicious instructions.

  _Just what every developer wanted: another layer of YAML-adjacent anxiety to configure before we can trust the thing we built to write its own YAML._

  `security` `guardrails` `sdk` `red-teaming` `agent-safety`
  </details>

- **[Chat Langchain](https://github.com/langchain-ai/chat-langchain)** `⭐ 6.3k` `updated ≤90d` A reference implementation of a documentation assistant agent built with LangGraph that answers questions about LangChain, LangGraph, and LangSmith using RAG and guardrails. <details><summary>More about</summary>

  It serves as a production-ready example of how to structure a LangGraph agent with middleware, tooling, and retrieval for developers building similar doc-assistant workflows.

  _A canonical reference app proving that even the people building the agent frameworks still need to write custom guardrails to stop their bots from wandering off-topic._

  `langgraph` `rag` `reference-app` `agent-example` `documentation`
  </details>

- **[Marvin](https://github.com/prefecthq/marvin)** `⭐ 6.1k` `updated ≤90d` Marvin is a Python framework for producing structured LLM outputs and building agentic workflows via tasks, specialized agents, and thread-based orchestration. <details><summary>More about</summary>

  It lets developers bridge traditional typed Python code with LLM capabilities by treating structured extraction, classification, and multi-agent orchestration as composable, observable tasks.

  _Just when you thought you had enough agent frameworks to procrastinate with, Prefect launches another one to help you orchestrate your existential crisis across multiple specialized agents._

  `python` `structured-outputs` `agents` `framework` `workflows`
  </details>

- **[genkit](https://github.com/genkit-ai/genkit)** `⭐ 6.1k` `updated ≤30d` Genkit is an open-source SDK by Google for building full-stack AI applications in JavaScript/TypeScript, Go, and Python, supporting multiple model providers and agentic workflows. <details><summary>More about</summary>

  It provides a unified, production-ready interface for integrating models, tool calling, RAG, and flows across languages, with local dev tools and Firebase deployment paths.

  _Yet another framework promising to abstract away the complexity of AI development, ensuring you can now debug your prompt logic inside a specialized Firebase-branded CLI instead of just reading the API docs._

  `genkit` `sdk` `firebase` `agents` `llm-framework`
  </details>

- **[Agents](https://github.com/aiwaves-cn/agents)** `⭐ 5.9k` `updated >1y` An open-source Python framework for building, training, and evaluating autonomous language agents using symbolic learning techniques inspired by neural network training. <details><summary>More about</summary>

  It gives developers a structured way to implement back-propagation and gradient-based updates for prompt pipelines and multi-agent systems, bridging the gap between LLM prompting and traditional model training.

  _Now you can experience the soul-crushing hyperparameter tuning of deep learning, but applied to your agent's existential prompt choices instead of just your learning rate._

  `agents` `framework` `training` `symbolic-learning` `evaluation`
  </details>

- **[ZenML](https://github.com/zenml-io/zenml)** `⭐ 5.4k` `updated ≤90d` ZenML is an AI/ML platform for building, tracking, and deploying pipelines and workflows across any infrastructure, supporting traditional ML, LLMs, and agentic loops. <details><summary>More about</summary>

  It lets ML and AI engineers operationalize end-to-end AI workflows with versioning, observability, and infrastructure abstraction, reducing the glue work between training, evaluation, and deployment.

  _Finally, a platform that treats your agentic loop like a production ML pipeline—because nothing says 'scale' like versioning your prompt tweaks alongside your model weights._

  `mlops` `pipelines` `agent-workflows` `observability`
  </details>

- **[Vision agent](https://github.com/landing-ai/vision-agent)** `⭐ 5.3k` `updated ≤180d` VisionAgent is a Python SDK and agentic coder from LandingAI that turns image or video prompts into runnable vision application code. <details><summary>More about</summary>

  It lets developers skip hand-writing computer vision pipelines by generating, testing, and iterating on vision code automatically using Anthropic and Google models.

  _Yet another specialized agent arrives to remind you that your generic coding assistant still can’t reliably see, even when the task is literally about seeing._

  `vision` `code-generation` `sdk` `agent` `computer-vision`
  </details>

- **[SandBox](https://github.com/agent-infra/sandbox)** `⭐ 5.1k` `updated ≤30d` An all-in-one Docker sandbox combining browser, shell, file system, MCP servers, and VSCode Server for secure AI agent execution. <details><summary>More about</summary>

  It provides a unified, pre-configured environment so agents can coordinate browser sessions, code edits, and shell commands without the usual container orchestration glue code.

  _We have successfully containerized the entire development environment so your agent can now segfault, hang, and exhaust memory inside a neat Docker container instead of directly on your laptop._

  `sandbox` `agent-infra` `mcp` `docker` `agent-runtime`
  </details>

- **[AgentVerse](https://github.com/openbmb/agentverse)** `⭐ 5k` `updated >1y` AgentVerse is a Python framework for deploying multiple LLM-based agents in task-solving and simulation environments, supporting both automatic multi-agent collaboration and custom interaction scenarios. <details><summary>More about</summary>

  It provides developers with structured patterns for building multi-agent systems, including a software development system example, without requiring them to design coordination logic from scratch.

  _Yet another framework promising that if you just orchestrate enough agents, the code will practically write itself while you debug why the 'NLP Classroom' simulation thinks Python is a sentient being._

  `multi-agent` `framework` `simulation` `llm` `python`
  </details>

- **[Marqo](https://github.com/marqo-ai/marqo)** `⭐ 5k` `updated ≤90d` Marqo is an open-source vector and semantic search engine designed for e-commerce, combining multi-modal understanding with product search and personalization capabilities. <details><summary>More about</summary>

  It provides developers with a way to index and search unstructured data like images and text using state-of-the-art embeddings, fitting into the retrieval layer of AI applications.

  _Yet another reminder that while we're all building agents that write code, we still have to figure out how to actually store and retrieve the data those agents need without spinning up a PhD thesis in vector math._

  `vector-search` `semantic-search` `ecommerce` `embedding` `multimodal`
  </details>

- **[H2O-LLMStudio](https://github.com/h2oai/h2o-llmstudio)** `⭐ 5k` `updated ≤30d` A framework and no-code GUI for fine-tuning large language models using techniques like LoRA, DPO, and 8-bit training. <details><summary>More about</summary>

  It democratizes the fine-tuning process by providing a visual interface to manage hyperparameters and evaluate model performance without writing custom training loops.

  _The dream of 'no-code' fine-tuning just means you can now break your model's weights via a slider instead of a misplaced comma in a Python script._

  `fine-tuning` `lora` `no-code` `llm-ops` `dpo`
  </details>

- **[RouteLLM](https://github.com/lm-sys/routellm)** `⭐ 4.9k` `updated >1y` A Python framework and OpenAI-compatible server for serving and evaluating LLM routers that route queries between strong and weak models to optimize cost and quality. <details><summary>More about</summary>

  It lets developers drop in a routing layer that automatically sends simple queries to cheaper models while preserving response quality, cutting LLM API costs by up to 85% without major code changes.

  _You can now add a sophisticated routing layer to your stack so you can spend more engineering hours optimizing a cost-saving knob than the actual API bill you are trying to reduce._

  `llm-routing` `cost-optimization` `openai-compatible` `model-inference` `benchmarking`
  </details>

- **[Bifrost](https://github.com/maximhq/bifrost)** `⭐ 4.7k` `updated ≤90d` A high-performance AI gateway in Go that unifies access to 1000+ models with an OpenAI-compatible API, featuring load balancing, failover, semantic caching, and guardrails. <details><summary>More about</summary>

  Developers building production AI systems can standardize provider access via a single API while gaining enterprise-grade reliability, token management, and MCP gateway capabilities without per-provider integration work.

  _Yet another layer promising to tame the 15-provider chaos we created by refusing to pick one model, now with <100 µs overhead to remind us how much time we spent debating which LLM to call._

  `ai-gateway` `llmops` `load-balancing` `mcp` `go`
  </details>

- **[Promptify](https://github.com/promptslab/promptify)** `⭐ 4.6k` `updated ≤90d` A Python NLP framework that provides task-based LLM prompts with Pydantic structured outputs, built-in evaluation, and multi-provider support via LiteLLM. <details><summary>More about</summary>

  It lets developers integrate structured NLP tasks like NER and classification into code with just a few lines, abstracting away prompt engineering and provider differences.

  _Another library promising to tame LLM chaos by adding yet another abstraction layer that will need its own prompt engineering and evaluation framework in six months._

  `nlp` `pydantic` `llm-framework` `structured-output` `evaluation`
  </details>

- **[Liveblocks](https://github.com/liveblocks/liveblocks)** `⭐ 4.6k` `updated ≤90d` Liveblocks provides realtime infrastructure and SDKs for building collaborative multiplayer features and AI agent integrations into web applications. <details><summary>More about</summary>

  It handles the complex CRDT and presence logic so developers can add shared editing, contextual comments, and AI collaborators to products without rebuilding realtime infrastructure.

  _Just what every focused solo developer needs: a platform to ensure AI agents and humans can simultaneously mutate the same state until the CRDTs beg for mercy._

  `realtime` `collaboration` `multiplayer` `ai-agents` `infrastructure`
  </details>

- **[Youtu-Agent](https://github.com/tencentcloudadp/youtu-agent)** `⭐ 4.5k` `updated ≤90d` A Python agent framework built on openai-agents that supports automated agent generation, experience-based learning, and end-to-end reinforcement learning using open-source models like DeepSeek-V3. <details><summary>More about</summary>

  It offers developers a structured way to build and optimize autonomous agents with hybrid policy optimization and benchmark-leading performance without relying on closed models.

  _Just what we needed: another agent framework promising to turn open-source models into autonomous overlords while you're still debugging your LangChain chains from 2023._

  `agent-framework` `reinforcement-learning` `python` `open-source-models` `agent-generation`
  </details>

- **[ExLlamaV2](https://github.com/turboderp-org/exllamav2)** `⭐ 4.5k` `updated ≤180d` ExLlamaV2 is a fast inference library for running LLMs locally on modern consumer GPUs. <details><summary>More about</summary>

  It lets developers run large language models efficiently on accessible hardware, enabling local experimentation and deployment without relying on cloud APIs.

  _Another optimization tweak to make your 4090 feel slightly less inadequate when running 70B models locally._

  `local-inference` `gpu` `llm` `pytorch`
  </details>

- **[Infinity](https://github.com/infiniflow/infinity)** `⭐ 4.5k` `updated ≤90d` Infinity is a high-performance, AI-native database built in C++20 that provides hybrid search over dense vectors, sparse vectors, tensors, and full-text data for LLM and RAG applications. <details><summary>More about</summary>

  It offers Python-embedded and client-server modes with sub-millisecond latency for vector and full-text search, making it a practical infrastructure choice for developers building RAG pipelines and AI features.

  _Yet another vector database promising to solve your RAG latency woes, ensuring you can spend the weekend benchmarking HNSW graphs instead of shipping features._

  `vector-database` `rag` `hybrid-search` `llm-infrastructure`
  </details>

- **[agency-swarm](https://github.com/vrsen/agency-swarm)** `⭐ 4.4k` `updated ≤90d` A Python framework for building multi-agent applications that extends the OpenAI Agents SDK with customizable agent roles, type-safe tools, and structured inter-agent communication flows. <details><summary>More about</summary>

  It lets developers model multi-agent workflows after real-world corporate hierarchies (CEO, Developer, Virtual Assistant) while maintaining full control over prompts and enabling production-grade orchestration.

  _Finally, a framework that lets you replicate corporate middle-management structures inside your codebase, because what your automation pipeline really needed was a CEO agent to ask for status updates from the Developer agent._

  `multi-agent` `orchestration` `python` `agent-framework` `openai-sdk`
  </details>

- **[LMQL](https://github.com/eth-sri/lmql)** `⭐ 4.2k` `updated >1y` LMQL is a Python-superset programming language that lets developers interleave traditional code with constrained, guided LLM calls and advanced decoding strategies. <details><summary>More about</summary>

  It gives developers fine-grained control over model reasoning and output constraints directly within a programmable script, bridging algorithmic logic and LLM inference.

  _Yet another reminder that the hottest new programming language is the one you have to debug before the model even finishes hallucinating._

  `llm-programming` `constraints` `decoding` `python-superset`
  </details>

- **[optillm](https://github.com/algorithmicsuperintelligence/optillm)** `⭐ 4.1k` `updated ≤90d` An OpenAI API-compatible inference proxy that applies 20+ optimization techniques—such as Mixture of Agents, MCTS, and planning—to improve LLM reasoning accuracy without model training. <details><summary>More about</summary>

  Developers can drop it in front of existing LLM API calls to extract 2–10x reasoning gains on math, coding, and logic tasks by trading additional inference compute for accuracy.

  _Another reassuring layer of complexity that lets you feel productive while a proxy agonizes over your prompts so you don't have to._

  `llm-proxy` `inference-optimization` `reasoning` `openai-compatible` `api-gateway`
  </details>

- **[adalflow](https://github.com/sylphai-inc/adalflow)** `⭐ 4.1k` `updated ≤90d` AdalFlow is a PyTorch-like Python library for building and auto-optimizing LLM workflows, including RAG pipelines, chatbots, and agents. <details><summary>More about</summary>

  It provides a code-first framework with auto-differentiative optimization and model-agnostic components, allowing developers to stop manually tweaking prompts and start treating prompts like learnable parameters.

  _Just what the ecosystem needed: another PyTorch-flavored abstraction layer promising to automate the one task—writing prompts—that we were supposedly hired to do._

  `llm` `framework` `rag` `agent` `auto-optimization`
  </details>

- **[Langroid](https://github.com/langroid/langroid)** `⭐ 4k` `updated ≤90d` Langroid is a Python framework for building LLM-powered applications using a multi-agent architecture where developers define agents, equip them with tools and vector stores, and orchestrate message-passing to solve tasks. <details><summary>More about</summary>

  It provides a lightweight, principled alternative to heavier frameworks like LangChain for developers who want to build multi-agent systems with any LLM, including local models.

  _Yet another framework promising to solve the 'which agent talks to whom' problem, ensuring you can now spend your afternoon debugging message loops instead of actual business logic._

  `multi-agent` `python` `framework` `llm` `rag`
  </details>

- **[FlagAI](https://github.com/flagai-open/flagai)** `⭐ 3.9k` `updated ≤90d` FlagAI is a fast, easy-to-use and extensible toolkit for large-scale model training and inference. <details><summary>More about</summary>

  It simplifies working with large AI models by providing an extensible framework for developers to build and deploy LLMs efficiently.

  _Yet another LLM toolkit promising to make large-model work 'fast and easy' while adding another layer of abstraction to wrestle with._

  `llm` `toolkit` `framework` `extensible` `training`
  </details>

- **[nano-GraphRAG](https://github.com/gusye1234/nano-graphrag)** `⭐ 3.9k` `updated ≤180d` A minimal, code-first Python library that implements GraphRAG with a ~1100 line core, supporting async insertion and query, multiple vector stores, and local models like Ollama. <details><summary>More about</summary>

  It gives developers a readable, hackable RAG foundation they can actually fork and extend without wading through Microsoft's heavier reference implementation.

  _Yet another 3,800-star excuse to spend a weekend replacing your perfectly fine vector search with a knowledge graph you’ll swear you understand until the next paper drops._

  `rag` `graphrag` `knowledge-graph` `python` `llm-infra`
  </details>

- **[Code Interpreter API](https://github.com/shroominic/codeinterpreter-api)** `⭐ 3.9k` `updated >1y` An open-source Python library built on LangChain that provides a sandboxed code interpreter session for LLMs to execute generated Python code, install packages, and return text or file outputs. <details><summary>More about</summary>

  It gives developers a programmable way to embed ChatGPT-like code execution capabilities into their own apps using local or cloud-backed sandboxes.

  _Yet another reminder that we are now importing libraries to emulate features that a chatbot already has, just so we can feel like we're still writing real software._

  `langchain` `code-interpreter` `sandbox` `llm-agent` `python`
  </details>

- **[LazyLLM](https://github.com/lazyagi/lazyllm)** `⭐ 3.8k` `updated ≤90d` LazyLLM is a low-code Python framework and development tool for building, deploying, and iterating on multi-agent LLM applications with support for fine-tuning and cross-platform infrastructure. <details><summary>More about</summary>

  It unifies the messy stack of inference, fine-tuning, vector databases, and agent orchestration into a single Lego-like assembly line for rapid prototyping and production deployment.

  _A low-code tool for people building multi-agent systems, proving that we have now successfully abstracted the need to understand the abstractions we just created._

  `multi-agent` `low-code` `framework` `rag` `fine-tuning`
  </details>

- **[Fast-GraphRAG](https://github.com/circlemind-ai/fast-graphrag)** `⭐ 3.8k` `updated ≤1y` A Python framework for building GraphRAG pipelines that automatically generates, refines, and queries knowledge graphs with incremental updates and PageRank-based exploration. <details><summary>More about</summary>

  It gives developers a structured, low-cost memory layer they can drop into retrieval workflows without having to hand-roll agentic graph orchestration.

  _Another entry in the rapidly expanding ecosystem of clever graph tricks that promise to fix RAG while ensuring you never actually ship a boring vanilla vector store again._

  `rag` `graphrag` `memory` `retrieval` `python`
  </details>

- **[SimpleAIChat](https://github.com/minimaxir/simpleaichat)** `⭐ 3.5k` `updated >1y` A minimal Python package for interfacing with chat apps like ChatGPT and GPT-4, optimized for low-code complexity and token efficiency. <details><summary>More about</summary>

  It provides a lightweight, async-ready SDK for developers to build custom chat workflows and agents without the overhead of larger frameworks.

  _Just what the ecosystem needed: another distinct abstraction layer promising 'minimal complexity' while we're all still debugging why our agents spent $5 in tokens to say hello._

  `python` `sdk` `chatgpt` `llm` `framework`
  </details>

- **[Solace Agent Mesh](https://github.com/solacelabs/solace-agent-mesh)** `⭐ 3.5k` `updated ≤90d` An event-driven Python framework for building multi-agent AI systems that communicate via the Solace event mesh and coordinate complex, multi-step workflows. <details><summary>More about</summary>

  It gives developers a production-grade, decoupled architecture to orchestrate specialized AI agents with built-in support for A2A protocol, MCP, and dynamic external system integrations.

  _Yet another framework promising to solve multi-agent coordination, because the only thing missing from your stack was an event broker to help your agents argue asynchronously._

  `multi-agent` `event-driven` `framework` `orchestration` `python`
  </details>

- **[FlashRAG](https://github.com/ruc-nlpir/flashrag)** `⭐ 3.5k` `updated ≤90d` FlashRAG is a Python toolkit providing pre-processed benchmark datasets, state-of-the-art RAG algorithms, and modular components for researchers to reproduce and develop Retrieval Augmented Generation systems. <details><summary>More about</summary>

  It standardizes the chaotic RAG research landscape by giving developers a single framework with 36 datasets and 23 algorithms to benchmark retrieval and generation pipelines without rewriting boilerplate.

  _Finally, a toolkit to help you discover that your bespoke RAG implementation is still outperformed by a simple heuristic from 2022._

  `rag` `research` `benchmark` `python` `retrieval`
  </details>

- **[Distilabel](https://github.com/argilla-io/distilabel)** `⭐ 3.3k` `updated ≤30d` Distilabel is a Python framework for building scalable synthetic data generation and AI feedback pipelines to fine-tune and improve LLMs. <details><summary>More about</summary>

  It lets developers programmatically synthesize high-quality training datasets and judge model outputs using verified research methodologies instead of manual labeling.

  _Because obviously the most efficient way to solve the 'not enough high-quality data' problem is to write a pipeline that uses expensive LLMs to generate synthetic data to train cheaper LLMs._

  `synthetic-data` `llm-fine-tuning` `python` `pipelines` `rlhf`
  </details>

- **[EvoAgentX](https://github.com/evoagentx/evoagentx)** `⭐ 3.1k` `updated ≤30d` EvoAgentX is an open-source Python framework for building, evaluating, and automatically evolving multi-agent workflows using iterative feedback loops and various LLM backends. <details><summary>More about</summary>

  It helps developers move beyond static prompt chaining by automatically constructing, scoring, and optimizing agentic systems against specific datasets and goals.

  _Finally, a framework that automates the evolutionary cycle of building, failing, and re-building agents so you can watch your workflow optimize itself into something you no longer understand._

  `multi-agent` `framework` `self-evolving` `workflow-optimization` `evaluation`
  </details>

- **[core](https://github.com/cheshire-cat-ai/core)** `⭐ 3k` `updated ≤30d` A Python-based microservice framework for building custom AI agents with built-in RAG, plugin extensibility, and a REST/WebSocket admin interface. <details><summary>More about</summary>

  It gives developers a dockerized, API-first way to spin up a conversational layer with tool-calling and memory without wiring LangChain and Qdrant together by hand.

  _Another delightful reminder that in 2025, building a serious agent still means assembling a cat-themed plugin system just to get a chatbot to remember your socks cost fifty bucks._

  `agents` `rag` `langchain` `microservice` `plugins`
  </details>

- **[BMTools](https://github.com/openbmb/bmtools)** `⭐ 2.8k` `updated >1y` BMTools is an open-source Python framework for extending language models with external tools, serving as an academic-oriented platform for building, sharing, and using tool plugins similar to ChatGPT-Plugins. <details><summary>More about</summary>

  It provides developers with the building blocks to teach LLMs how to use APIs and tools, bridging the gap between raw model capabilities and actionable external integrations.

  _Yet another 'build your own agent toolkit' repo that politely suggests you migrate to their newer project, XAgent, leaving you to wonder if your dependencies have an expiration date._

  `tool-use` `framework` `plugins` `llm-infrastructure`
  </details>

- **[xTuring](https://github.com/stochasticai/xturing)** `⭐ 2.7k` `updated ≤180d` A Python library and CLI for fine-tuning, evaluating, and running open-source LLMs locally or in a private cloud using techniques like LoRA and INT4/INT8 quantization. <details><summary>More about</summary>

  It provides a simplified API to personalize models like LLaMA and GPT-OSS on private infrastructure, abstracting away the boilerplate of PEFT and mixed-precision training.

  _Just when you thought you escaped cloud API costs, you now have a 120B model running locally that demands a mortgage-level investment in GPUs to fine-tune._

  `llm` `fine-tuning` `local-ai` `lora` `quantization`
  </details>

- **[OmAgent](https://github.com/om-ai-lab/omagent)** `⭐ 2.6k` `updated >1y` OmAgent is a Python library and framework for building multimodal language agents that support text, image, video, and audio inputs with graph-based workflow orchestration. <details><summary>More about</summary>

  It gives developers a lightweight, code-first way to define and run multimodal agents with built-in support for VLMs, video processing, mobile device connection, and local model deployment.

  _Now you can orchestrate a distributed graph of vision-language workers and still tell yourself you're shipping a simple prototype instead of a multi-agent circus._

  `multimodal` `agents` `python` `workflow` `local-ai`
  </details>

- **[Memary](https://github.com/kingjulio8238/memary)** `⭐ 2.6k` `updated >1y` An open-source Python framework that provides a memory layer for autonomous agents using knowledge graphs and RAG to retain context across sessions. <details><summary>More about</summary>

  It gives developers a reusable infrastructure packaged as a library and Streamlit app to add human-like memory to their agents without building custom retrieval from scratch.

  _Because nothing says 'advancing toward AGI' quite like spending three hours configuring a Neo4j instance so your agent can remember it already told you it was busy._

  `memory` `agents` `knowledge-graph` `rag` `langchain`
  </details>

- **[Griptape](https://github.com/griptape-ai/griptape)** `⭐ 2.5k` `updated ≤30d` Griptape is a modular Python framework for building generative AI applications, offering abstractions for agents, pipelines, workflows, memory, tools, and RAG. <details><summary>More about</summary>

  It gives developers structured, swappable building blocks for LLMs, retrieval, and agent orchestration without locking them into a single provider or monolithic platform.

  _Another Tuesday, another Python framework promising to tame the chaos of agentic workflow orchestration until the next framework drops tomorrow._

  `python` `agents` `rag` `framework` `workflows`
  </details>

- **[Hamilton](https://github.com/apache/hamilton)** `⭐ 2.5k` `updated ≤30d` Apache Hamilton is a Python library for building portable, modular, and self-documenting data transformation DAGs with automatic lineage tracking. <details><summary>More about</summary>

  It lets developers structure ETL, ML, and LLM application logic as reusable functions that run anywhere Python runs, reducing the friction of moving from notebook prototypes to production pipelines.

  _Another framework promising to save your data team from spaghetti code, provided everyone agrees to stop writing spaghetti code in the first place._

  `dag` `data-engineering` `python` `mlops` `llmops`
  </details>

- **[OCRFlux](https://github.com/chatdoc-com/ocrflux)** `⭐ 2.5k` `updated ≤90d` OCRFlux is a lightweight multimodal toolkit and 3B VLM that converts PDFs and images into clean Markdown, handling complex layouts, tables, and cross-page content merging. <details><summary>More about</summary>

  It gives developers a local, high-accuracy pipeline for turning messy PDFs into LLM-ready Markdown without outsourcing to black-box SaaS OCR services.

  _Another indispensable PDF-to-Markdown breakthrough that will inevitably be quietly absorbed into a major model's context window six months from now._

  `pdf-parsing` `markdown` `vision-model` `local-ai` `document-processing`
  </details>

- **[claw0](https://github.com/shareai-lab/claw0)** `⭐ 2.5k` `updated ≤180d` A 10-section, 7,000-line Python tutorial that builds a production-grade AI agent gateway from scratch, starting with a basic while loop and progressing through tool use, sessions, routing, and concurrency. <details><summary>More about</summary>

  Developers can follow runnable, progressively complex Python files to understand how to build resilient, multi-channel agent gateways rather than stopping at superficial API-call tutorials.

  _Yet another opportunity to convince yourself that if you just rebuild OpenClaw from scratch one more time, you will finally understand agent infrastructure while your actual backlog gently smolders._

  `agents` `tutorial` `python` `gateway` `learning`
  </details>

- **[RasaGPT](https://github.com/paulpierre/rasagpt)** `⭐ 2.5k` `updated ≤1y` RasaGPT is a headless LLM chatbot platform built on top of Rasa and Langchain, using FastAPI, pgvector, and LlamaIndex to provide document indexing, retrieval, and a multi-tenant API for building custom Telegram bots. <details><summary>More about</summary>

  It provides a ready-to-run boilerplate for developers who want to modernize Rasa with LLM orchestration without resolving library conflicts, Docker issues, and multi-tenancy hacks themselves.

  _Because nothing says 'cutting-edge AI' like wrapping a 2018 NLU pipeline in FastAPI and declaring victory over the chatbot industrial complex._

  `chatbot` `rasa` `langchain` `fastapi` `headless`
  </details>

- **[Magentic](https://github.com/jackmpcollins/magentic)** `⭐ 2.4k` `updated ≤180d` A Python library that uses decorators like @prompt and @chatprompt to define LLM-powered functions with structured outputs using Pydantic and multi-provider support. <details><summary>More about</summary>

  It lets developers treat LLM calls as typed, testable Python functions with native streaming, retries, and observability instead of managing raw API payloads.

  _You can now quietly ship multi-agent systems that look exactly like normal Python functions, making it even harder to explain to your team where the actual logic lives._

  `python` `llm` `pydantic` `structured-output` `agents`
  </details>

- **[nextpy](https://github.com/dot-agent/nextpy)** `⭐ 2.3k` `updated >1y` Nextpy is a Python framework for building self-modifying software that pre-compiles prompts, maintains LLM session state, and includes features for detecting and fixing syntax errors in generated code. <details><summary>More about</summary>

  It attempts to optimize agentic code generation by moving prompt processing to compile time and managing session state with KV caches for faster, more controlled outputs.

  _Just what we needed: a framework that modifies itself, ensuring that when the code breaks, you can no longer tell if the bug is in your logic or the framework's latest spontaneous personality change._

  `python` `self-modifying` `prompt-engineering` `code-generation` `framework`
  </details>

- **[agentUniverse](https://github.com/agentuniverse-ai/agentuniverse)** `⭐ 2.3k` `updated ≤90d` agentUniverse is a Python framework for building multi-agent applications using large language models, featuring predefined collaborative patterns like PEER and DOE. <details><summary>More about</summary>

  It provides developers with a structured way to implement domain-specific multi-agent collaboration patterns, complete with configurable LLM integration for various vendors.

  _Just when you thought 'agentic orchestration' had enough frameworks, AntGroup drops another one that promises domain expertise but mostly guarantees you'll spend three days configuring YAML files for agents that argue about financial reports._

  `multi-agent` `framework` `python` `llm` `antgroup`
  </details>

- **[OpenAGI](https://github.com/agiresearch/openagi)** `⭐ 2.3k` `updated >1y` OpenAGI is a Python package and SDK for creating, uploading, and downloading modular AI agents designed to run on the AIOS kernel. <details><summary>More about</summary>

  It provides the structural scaffolding for developers to build and share domain-specific autonomous agents within the AIOS ecosystem.

  _Just when you thought you had enough agent frameworks to choose from, here is another one that politely asks you to migrate to its newer sibling, Cerebrum, leaving you to wonder if your code will outlive the week._

  `agents` `sdk` `framework` `aios`
  </details>

- **[Lagent](https://github.com/internlm/lagent)** `⭐ 2.2k` `updated ≤90d` A lightweight Python framework for building LLM-based agents with PyTorch-inspired layer composition, memory management, and custom message aggregation. <details><summary>More about</summary>

  Developers can define multi-agent workflows in code by composing agents, models, memory, and message-passing patterns without adopting a heavier orchestration platform.

  _Another framework so inspired by PyTorch that you may briefly wonder whether your agent’s memory is backpropagating through your productivity._

  `agent-framework` `llm` `multi-agent` `python` `memory`
  </details>

- **[envd](https://github.com/tensorchord/envd)** `⭐ 2.2k` `updated ≤90d` envd is a CLI tool that uses a Python-like DSL to define and provision container-based development environments for AI/ML workflows, supporting both local and Kubernetes execution. <details><summary>More about</summary>

  It replaces brittle Dockerfiles and bash scripts with a declarative approach to setting up reproducible environments for training, fine-tuning, and serving models.

  _We have successfully abstracted away the 'simple' Dockerfile to invent a Python DSL for environment provisioning, because clearly what the ML world needed was one more layer of indirection._

  `mlops` `environment` `container` `cli` `devops`
  </details>

- **[Dstack](https://github.com/dstackai/dstack)** `⭐ 2.2k` `updated ≤30d` dstack is a vendor-agnostic control plane and CLI for provisioning GPUs and orchestrating training, inference, and agentic workloads across cloud providers, Kubernetes, and on-prem clusters. <details><summary>More about</summary>

  It lets developers define infrastructure, dev environments, and services in version-controlled YAML and apply them across NVIDIA, AMD, TPU, and Tenstorrent backends without being locked into one GPU cloud.

  _Another beautiful abstraction that promises to unify your GPU sprawl, right up until you realize your real bottleneck is still writing YAML while your agent cheerfully burns credits across three clouds at once._

  `gpu-orchestration` `llmops` `infrastructure` `agentic-workloads` `cli`
  </details>

- **[mimo](https://github.com/xiaomimimo/mimo)** `⭐ 2.1k` `updated >1y` MiMo is a 7-billion-parameter language model trained from scratch with enhanced pre-training and post-training techniques to improve reasoning in math and code tasks. <details><summary>More about</summary>

  Developers can use this open-weight reasoning model as a drop-in replacement for larger models when building coding assistants or agent systems that require strong logical reasoning.

  _Another LLM claiming to unlock reasoning potential, adding to the pile of models developers must evaluate before their actual coding work begins._

  `llm` `reasoning` `open-weight`
  </details>

- **[VeOmni](https://github.com/bytedance-seed/veomni)** `⭐ 2k` `updated ≤30d` A modular framework for scaling single- and multi-modal model pre-training and post-training across various accelerators. <details><summary>More about</summary>

  It provides a 'trainer-free' architecture that allows developers to use linear training scripts for greater transparency and control during large-scale model training.

  _A new way to spend your compute budget watching a distributed training loop fail for reasons no one can explain._

  `multi-modal` `model-training` `distributed-training` `pytorch` `framework`
  </details>

- **[Agentset](https://github.com/agentset-ai/agentset)** `⭐ 2k` `updated ≤90d` An open-source platform for building, evaluating, and shipping production-ready RAG and agentic applications with built-in ingestion, vector indexing, evaluation benchmarks, and a chat playground. <details><summary>More about</summary>

  It gives developers a turnkey, model-agnostic stack to stand up retrieval-augmented AI apps with citations, multi-tenancy, and SDKs without stitching together raw vector DBs and parsers.

  _Yet another roll-your-own RAG stack to debate at 2 a.m. while your chatbot still hallucinates the same two facts._

  `rag` `retrieval` `agents` `platform` `evaluation`
  </details>

- **[LangchainRb](https://github.com/patterns-ai-core/langchainrb)** `⭐ 2k` `updated ≤90d` A Ruby gem providing a unified interface for LLMs, prompt management, output parsers, RAG building, and assistant creation. <details><summary>More about</summary>

  It lets Ruby developers build LLM-powered features and agents using familiar patterns without leaving the Ruby ecosystem.

  _Yet another faithful port ensuring nobody has an excuse not to ship an AI feature, regardless of how over-engineered the stack becomes._

  `ruby` `llm` `rag` `agents` `framework`
  </details>

- **[Notte](https://github.com/nottelabs/notte)** `⭐ 1.9k` `updated ≤90d` Notte is a Python framework and hosted API for building and deploying AI web automation agents that combine Playwright scripting with LLM-driven browser control. <details><summary>More about</summary>

  It lets developers mix deterministic scripting with AI agents to automate complex web tasks while claiming significant cost and reliability improvements over pure LLM approaches.

  _Yet another framework promising to solve the web automation problem by adding an abstraction layer that will inevitably require its own abstraction layer within six months._

  `web-agents` `browser-automation` `python-sdk` `llm-framework`
  </details>

- **[neuron-ai](https://github.com/neuron-core/neuron-ai)** `⭐ 1.9k` `updated ≤90d` Neuron AI is a PHP framework for building and orchestrating AI agents with support for LLMs, vector databases, memory, RAG, and MCP connectors, designed to integrate into existing PHP applications like Laravel and Symfony. <details><summary>More about</summary>

  It gives PHP developers a native, structured way to build agentic features into their ecosystem without switching stacks or wrestling with Python-first frameworks.

  _Finally, the PHP community can experience the same over-engineered multi-agent pipeline fatigue that the Python crowd has been enjoying for the last eighteen months._

  `php` `agent-framework` `llm` `rag` `mcp`
  </details>

- **[DemoGPT](https://github.com/melih-unsal/demogpt)** `⭐ 1.9k` `updated ≤90d` A Python toolkit and Streamlit app for quickly generating LangChain agent pipelines, tools, and RAG setups from prompts. <details><summary>More about</summary>

  It gives developers a fast, batteries-included way to scaffold LangChain-based agents with built-in support for tools, vector databases, and knowledge graphs.

  _Another heroic abstraction layer promising to spin up an agent in seconds, just in time for you to spend the next three hours debugging why the RAG pipeline forgot everything you just indexed._

  `langchain` `agent-builder` `rag` `streamlit` `scaffolding`
  </details>

- **[CTransformers](https://github.com/marella/ctransformers)** `⭐ 1.9k` `updated >1y` Python bindings for running Transformer models locally using the GGML library, supporting GPU acceleration and integration with LangChain and Hugging Face tools. <details><summary>More about</summary>

  It lets developers run LLMs like LLaMA and StarCoder directly on local hardware with Pythonic simplicity, bypassing cloud APIs for privacy or cost control.

  _Yet another abstraction layer proving that the modern developer experience is mostly installing bindings so you can eventually run a model that barely fits in RAM._

  `llm` `local-ai` `python` `bindings` `ggml`
  </details>

- **[MiniRAG](https://github.com/hkuds/minirag)** `⭐ 1.9k` `updated ≤1y` MiniRAG is a lightweight retrieval-augmented generation framework optimized to run effectively on small, open-source language models using heterogeneous graph indexing. <details><summary>More about</summary>

  It provides a code-first SDK for building RAG systems that perform well on resource-constrained hardware without requiring massive LLM backends.

  _Finally, a RAG framework simple enough that you can run it locally and still have room left on the hard drive to store your 47 other abandoned RAG experiments._

  `rag` `framework` `llm` `graph-indexing` `sdk`
  </details>

- **[Autochain](https://github.com/forethought-technologies/autochain)** `⭐ 1.9k` `updated ≤1y` AutoChain is a lightweight Python framework for building and automatically evaluating custom LLM agents with tool support and simplified prompt iteration. <details><summary>More about</summary>

  It lets developers rapidly iterate on generative agents by combining a low-abstraction building experience with automated multi-turn conversation evaluation.

  _Another framework promising to solve agent evaluation, just in case you didn't have enough LangChain-inspired abstractions to abandon halfway through your prototype._

  `agent-framework` `evaluation` `python` `llm-agents`
  </details>

- **[OxyGent](https://github.com/jd-opensource/oxygent)** `⭐ 1.8k` `updated ≤90d` OxyGent is an open-source Python framework for building modular, observable, and evolvable multi-agent systems using standardized Oxy components. <details><summary>More about</summary>

  It provides developers with a structured, LEGO-like way to assemble and hot-swap agents, tools, and models while retaining auditability and distributed scheduling.

  _Just when you thought 'agentic' was losing its buzzword sheen, now you can build infinite, self-evolving agent teams that will proudly fail at GAIA benchmarks with 59.14 points of distributed confidence._

  `multi-agent` `framework` `python` `observability` `jd-opensource`
  </details>

- **[ContextGem](https://github.com/shcherbak-ai/contextgem)** `⭐ 1.8k` `updated ≤90d` ContextGem is an open-source Python framework that uses LLMs to extract structured data, insights, and justifications from documents with granular source references. <details><summary>More about</summary>

  It lets developers describe extractions in natural language and handles the prompt engineering, validation, and reference mapping automatically.

  _Yet another framework promising to solve the 'I have a PDF and a dream' problem, ensuring you can now turn a legal contract into a Pydantic model without ever reading it._

  `llm-extraction` `document-intelligence` `framework` `python` `structured-output`
  </details>

- **[AgentFlow](https://github.com/lupantech/agentflow)** `⭐ 1.8k` `updated ≤180d` AgentFlow is a trainable, modular agentic framework that optimizes multi-step reasoning and tool use in LLMs using a specialized Flow-GRPO algorithm. <details><summary>More about</summary>

  It provides developers with a code-first framework to build and optimize modular agent systems (Planner, Executor, Verifier, Generator) that can learn tool-augmented reasoning policies.

  _Just when you thought you had a handle on chaining prompts, here comes a framework that treats your agentic workflow as a reinforcement learning problem with four specialized modules to debug._

  `agentic-frameworks` `reinforcement-learning` `multi-agent` `llm-optimization`
  </details>

- **[RL-Factory](https://github.com/simple-efficient/rl-factory)** `⭐ 1.7k` `updated ≤1y` RLFactory is an RL post-training framework for agentic learning that decouples the environment from training, supports async tool-calling, and enables fast training of agent models like Qwen3 with MCP tools. <details><summary>More about</summary>

  It gives developers a code-first way to train custom agent models with tool-use and reward shaping, cutting environment boilerplate and doubling RL training speed.

  _Just when you thought you were done fine-tuning chatbots, it’s time to RL-train your agent against a custom reward function, because nothing says developer productivity like debugging a policy gradient loop at 2am._

  `rl-training` `agentic-learning` `qwen3` `mcp` `finetuning`
  </details>

- **[curator](https://github.com/bespokelabsai/curator)** `⭐ 1.7k` `updated ≤30d` A Python library for building synthetic data pipelines, bulk LLM inference, and structured data extraction used in post-training and fine-tuning workflows. <details><summary>More about</summary>

  Developers training or fine-tuning models can use it to generate high-quality reasoning datasets and structured outputs at scale with built-in caching, fault recovery, and batch API support.

  _You now have industrial-grade infrastructure to solve the 'not enough high-quality data' problem, which means the bottleneck is officially your imagination and your API bill._

  `synthetic-data` `fine-tuning` `llm-inference` `python` `post-training`
  </details>

- **[VectorChord](https://github.com/tensorchord/vectorchord)** `⭐ 1.7k` `updated ≤90d` VectorChord is a PostgreSQL extension for scalable, high-performance, and disk-efficient vector search, designed as the successor to pgvecto.rs. <details><summary>More about</summary>

  It allows developers to host billion-scale vector datasets directly in Postgres with significantly lower infrastructure costs, simplifying the AI stack by removing the need for separate vector databases.

  _We have successfully abstracted the vector database so far that we are now just arguing with Postgres about how many bits we can shave off a float before the model starts hallucinating its own childhood memories._

  `postgres` `vector-search` `llmops` `database-extension` `vector-database`
  </details>

- **[MLRun](https://github.com/mlrun/mlrun)** `⭐ 1.7k` `updated ≤90d` MLRun is an open-source MLOps platform for building, deploying, and managing continuous (gen) AI and ML applications across their lifecycle, integrating with development and CI/CD environments. <details><summary>More about</summary>

  It provides developers with a unified workflow to handle data management, RAG development, LLM evaluation, fine-tuning, and serverless deployment within a single framework.

  _Just when you thought your stack couldn't get any deeper, you now have a platform to orchestrate the platforms that orchestrate your prompts._

  `mlops` `genai` `pipelines` `llm-serving` `kubernetes`
  </details>

- **[mmx-cli](https://github.com/minimax-ai/cli)** `⭐ 1.7k` `updated ≤90d` The official CLI for the MiniMax AI Platform, providing a terminal and agent-accessible interface to generate text, images, video, speech, and music via API. <details><summary>More about</summary>

  It lets developers wire multi-modal generation directly into terminal workflows and register these capabilities as skills for agents like Cursor and Claude Code.

  _Another provider CLI enters the arena, kindly reminding us that 'universal AI assistant' now requires a separate token plan and npm install for every foundation model startup._

  `cli` `multimodal` `minimax` `skills` `generative-ai`
  </details>

- **[llm-chain](https://github.com/sobelio/llm-chain)** `⭐ 1.6k` `updated >1y` A Rust crate for building LLM-powered chains, prompt templates, and agent workflows with support for both cloud and locally-hosted models. <details><summary>More about</summary>

  It offers developers a code-first, Rust-native way to construct multi-step LLM pipelines and agent behaviors without switching to Python-centric frameworks.

  _Another LangChain-inspired framework enters the arena, giving Rust developers the distinct pleasure of fighting borrow checker errors while their Python colleagues already shipped the same chatbot six months ago._

  `rust` `llm` `chains` `agent-framework` `local-models`
  </details>

- **[uAgents](https://github.com/fetchai/uagents)** `⭐ 1.6k` `updated ≤30d` A Python framework for creating and running autonomous, decentralized agents that register on the Fetch.ai blockchain network. <details><summary>More about</summary>

  It provides a code-first SDK for developers to build agents with scheduled tasks and event-driven behaviors within a decentralized identity and messaging ecosystem.

  _Yet another agent framework enters the ring, promising decentralized autonomy while you're still trying to get your local Poetry environment to agree with pip._

  `agents` `python` `decentralized` `fetchai` `sdk`
  </details>

- **[ThinkGPT](https://github.com/jina-ai/thinkgpt)** `⭐ 1.6k` `updated >1y` ThinkGPT is a Python library that implements Chain of Thoughts, long-term memory, and self-refinement primitives to extend LLM capabilities beyond their context limits. <details><summary>More about</summary>

  It gives developers code-first building blocks to add reasoning, compressed knowledge retrieval, and self-healing code generation to their own LLM-powered applications.

  _Now you can spend your afternoon teaching a language model how to summarize its own notes instead of just writing the code yourself._

  `llm` `memory` `reasoning` `python-library` `langchain`
  </details>

- **[Mirascope](https://github.com/mirascope/mirascope)** `⭐ 1.5k` `updated ≤90d` Mirascope is a Python and TypeScript library that provides a unified, decorator-based interface for calling multiple frontier LLMs and building structured-output agents with tool use. <details><summary>More about</summary>

  It lets developers write model-agnostic LLM calls and agent logic once using familiar decorator patterns and Pydantic types, reducing lock-in to a single provider.

  _Yet another heroic abstraction layer promising to save you from vendor lock-in, right up until your favorite model deprecates its API and you realize the abstraction leaked anyway._

  `llm` `python` `typescript` `agents` `abstraction`
  </details>

- **[Agent Protocol](https://github.com/agi-inc/agent-protocol)** `⭐ 1.5k` `updated >1y` A tech-stack agnostic API specification and SDK for defining a common interface to interact with and benchmark AI agents. <details><summary>More about</summary>

  It standardizes how developers communicate with heterogeneous agents, lowering the integration cost for building devtools and benchmarks across different frameworks.

  _We have successfully standardized the process of arguing over how to standardize the interface, ensuring the agents can now fail to communicate with each other using OpenAPI specs._

  `agents` `protocol` `api` `sdk` `benchmarking`
  </details>

- **[Loop GPT](https://github.com/farizrahman4u/loopgpt)** `⭐ 1.5k` `updated ≤90d` LoopGPT is a Python framework that reimplements Auto-GPT as a modular, extensible package for building and running autonomous agents with memory and state serialization. <details><summary>More about</summary>

  It offers developers a Pythonic, plug-and-play API to construct custom autonomous agents without the prompt overhead and config-file friction of earlier Auto-GPT implementations.

  _Another valiant attempt to convince a GPT-3.5 turbo that it is, in fact, an autonomous entity capable of buying headphones and writing files until the tokens run dry._

  `autonomous-agents` `python` `framework` `auto-gpt`
  </details>

- **[Agentic Commerce Protocol](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol)** `⭐ 1.4k` `updated ≤30d` Agentic Commerce Protocol (ACP) is a versioned open standard from OpenAI and Stripe that ships OpenAPI specs, JSON Schemas, examples, and governance docs for letting AI agents complete real commerce and checkout flows. <details><summary>More about</summary>

  It gives developers a concrete interoperability layer for adding purchases, payment delegation, and merchant integrations to agentic products without inventing a one-off transaction protocol.

  _We have progressed from "my chatbot can recommend products" to "my chatbot now needs a changelog, governance process, and OpenAPI contract before it can impulse-buy socks on my behalf."._

  `protocol` `commerce` `payments` `openapi` `schemas`
  </details>

- **[Adala](https://github.com/humansignal/adala)** `⭐ 1.4k` `updated ≤90d` Adala is a Python framework for building autonomous agents that learn and apply specialized skills for data processing and labeling tasks using LLMs. <details><summary>More about</summary>

  It allows AI engineers and data scientists to build modular, autonomous agents for data labeling and processing workflows directly from Python notebooks or scripts.

  _Finally, a framework to automate the data labeling grunt work so you can spend even more time fine-tuning the agent that automates the grunt work._

  `agents` `data-labeling` `framework` `python` `llm`
  </details>

- **[swift-sdk](https://github.com/modelcontextprotocol/swift-sdk)** `⭐ 1.4k` `updated ≤90d` The official Swift SDK for building Model Context Protocol (MCP) clients and servers in Swift environments. <details><summary>More about</summary>

  Swift developers can now integrate MCP-native tooling into Apple-platform apps without bridging through other languages.

  _We have reached the point where even the SDKs need their own SDKs, and soon the Swift SDK will need a package manager written in Swift to manage the Swift SDK that talks to the MCP server you spun up to list tools._

  `swift` `mcp` `sdk` `apple`
  </details>

- **[AgentQL](https://github.com/tinyfish-io/agentql)** `⭐ 1.3k` `updated ≤90d` AgentQL is a suite of tools for connecting AI agents and LLMs to the web, featuring a natural language query language, Python and JavaScript SDKs, Playwright integrations, a REST API, and a browser debugger for extracting data and automating workflows on live sites. <details><summary>More about</summary>

  It allows developers to build resilient, self-healing web automation and scraping scripts that work across dynamic and authenticated sites using natural language selectors instead of brittle CSS or XPath.

  _Yet another framework promising to finally teach your agent how to click the 'Accept Cookies' button, provided you can perfectly phrase the query in their proprietary dialect._

  `web-automation` `scraping` `playwright` `sdk` `agent-tooling`
  </details>

- **[Chidori](https://github.com/thousandbirdsinc/chidori)** `⭐ 1.3k` `updated ≤90d` A Rust-based reactive runtime for building durable AI agents using deterministic Starlark scripts with built-in checkpointing, replay, and HTTP server capabilities. <details><summary>More about</summary>

  It gives developers a way to write agent logic that looks like Python but executes deterministically with zero-cost checkpointing, replay-based debugging, and human-in-the-loop pauses.

  _Finally, the peace of mind that comes with knowing your agentic disaster can be perfectly replayed, examined, and blamed on a specific line of Starlark._

  `agents` `framework` `rust` `llmops` `orchestration`
  </details>

- **[modelfusion](https://github.com/vercel/modelfusion)** `⭐ 1.3k` `updated >1y` TypeScript library providing a unified abstraction layer for integrating multi-modal AI models (text, image, embeddings, speech) from diverse providers into JavaScript applications. <details><summary>More about</summary>

  Standardizes access to OpenAI, Ollama, Llama.cpp and others with type-safe streaming, tool usage, and production observability—though it is being merged into the Vercel AI SDK.

  _Yet another LLM abstraction layer that got absorbed into a bigger abstraction layer before you could finish refactoring your codebase to use it._

  `typescript` `llm-abstraction` `multi-modal` `sdk` `vercel`
  </details>

- **[Langchain-rust](https://github.com/abraxas-365/langchain-rust)** `⭐ 1.3k` `updated ≤30d` A Rust port of the LangChain framework for building LLM-powered applications with composable chains, agents, and vector store integrations. <details><summary>More about</summary>

  It gives Rust developers a familiar, composable toolkit for wiring up LLMs, embeddings, and vector stores without leaving their native ecosystem.

  _Now you can experience the full LangChain abstraction stack with Rust’s borrow checker lecturing you on lifetime errors while your agent loops._

  `rust` `langchain` `llm` `framework`
  </details>

- **[Parsera](https://github.com/raznem/parsera)** `⭐ 1.3k` `updated ≤1y` A lightweight Python library that uses LLMs to extract structured data from websites. <details><summary>More about</summary>

  It allows developers to replace brittle CSS selectors and manual scraping scripts with a simple schema definition backed by model inference.

  _Yet another excuse to burn tokens on parsing static HTML that could probably be handled by a two-line BeautifulSoup script, if only we still trusted determinism._

  `scraping` `llm` `python` `data-extraction` `library`
  </details>

- **[MiniChain](https://github.com/srush/minichain)** `⭐ 1.2k` `updated >1y` A tiny, lightweight library for building prompt chains and LLM-powered workflows in Python using annotated functions and Jinja templates. <details><summary>More about</summary>

  It offers developers a minimal, readable alternative to heavyweight frameworks like LangChain for prototyping LLM logic and building callable function chains.

  _Yet another valiant attempt to prove that this time, the 200-line Python wrapper really is the last abstraction layer we'll ever need._

  `llm` `prompt-chaining` `python` `library` `lightweight`
  </details>

- **[MInference](https://github.com/microsoft/minference)** `⭐ 1.2k` `updated ≤90d` MInference is a sparse attention kernel and library that accelerates long-context LLM pre-filling by up to 10x on GPUs like the A100 while maintaining accuracy. <details><summary>More about</summary>

  It enables developers to run or serve million-token context windows with dramatically lower latency by optimizing the attention mechanism at the infrastructure level.

  _We have finally solved the problem of processing a million tokens in one go, which means your context window is now officially larger than your average pull request._

  `inference` `long-context` `attention` `performance` `sparse-kernel`
  </details>

- **[Langchain](https://github.com/brainlid/langchain)** `⭐ 1.2k` `updated ≤30d` An Elixir library providing a LangChain-style framework for integrating LLMs, building chains, and creating agentic behaviors within Elixir applications. <details><summary>More about</summary>

  It gives Elixir developers a native, functional approach to composing LLM calls, tool usage, and agent logic without wrapping Python or JavaScript libraries.

  _Now you can agonize over prompt engineering while also debating GenServer lifetimes and functional chaining patterns._

  `elixir` `langchain` `llm-framework` `agentic`
  </details>

- **[RAGLite](https://github.com/superlinear-ai/raglite)** `⭐ 1.2k` `updated ≤90d` RAGLite is a Python toolkit for building Retrieval-Augmented Generation pipelines with configurable LLMs, DuckDB or PostgreSQL backends, and advanced chunking, reranking, and hybrid search capabilities. <details><summary>More about</summary>

  It gives developers a lightweight, permissively licensed, code-first way to stand up production-grade RAG systems without dragging in heavy frameworks like LangChain or PyTorch.

  _Yet another meticulously engineered excuse to pretend your LLM can read the whole repo if you just chunk it with enough binary integer programming._

  `rag` `python` `vector-search` `llm-toolkit` `retrieval`
  </details>

- **[ai-jsx](https://github.com/fixie-ai/ai-jsx)** `⭐ 1.1k` `updated >1y` AI.JSX is a JavaScript/TypeScript framework for building AI applications using JSX components, with support for model abstraction, tool usage, document Q&A, and generative UI rendering. <details><summary>More about</summary>

  It lets developers structure LLM prompts and generative UI using familiar React-style component patterns instead of raw strings or chained LangChain calls.

  _Another year, another framework promising that wrapping your prompts in JSX components is the architectural discipline your AI project was missing._

  `jsx` `react` `llm-framework` `generative-ui` `typescript`
  </details>

- **[agents](https://github.com/inkeep/agents)** `⭐ 1.1k` `updated ≤90d` Inkeep Agents is an open-source platform for building AI agents using a no-code visual builder or a TypeScript SDK, featuring full two-way sync between the two. <details><summary>More about</summary>

  It enables engineering and non-technical teams to collaboratively build, manage, and deploy multi-agent workflows and chat assistants using either code or drag-and-drop interfaces.

  _Because nothing says 'streamlined developer experience' like needing a visual canvas to manage the TypeScript code you just wrote to define the agent in the first place._

  `agents` `typescript` `no-code` `multi-agent` `sdk`
  </details>

- **[axflow](https://github.com/axflow/axflow)** `⭐ 1.1k` `updated >1y` Axflow is a modular, code-first TypeScript SDK and framework for building AI applications, featuring provider abstractions, React hooks, data connectors, and evaluation utilities. <details><summary>More about</summary>

  It gives TypeScript developers a structured, incremental way to assemble LLM features, streaming UIs, and evaluations without committing to a monolithic Python stack.

  _Another beautifully modular TypeScript framework enters the ring, kindly asking you to refactor your AI stack before the next one drops next Tuesday._

  `typescript` `framework` `sdk` `llm` `evals`
  </details>

- **[LLM Agents](https://github.com/mpaepper/llm_agents)** `⭐ 1k` `updated ≤1y` A minimal Python library for building LLM-controlled agents with custom tools like Python REPL, Google Search, and Hacker News search, inspired by LangChain. <details><summary>More about</summary>

  It strips agent architecture down to a readable loop of Thought, Action, and Observation, making it a useful learning reference or lightweight base for developers building custom LLM agents.

  _Yet another reminder that in 2023 we collectively decided building a LangChain clone in a weekend was the best way to understand how agents work._

  `agents` `langchain` `llm` `python` `framework`
  </details>

- **[reactuse](https://github.com/childrentime/reactuse)** `⭐ 1k` `updated ≤30d` A comprehensive collection of over 100 production-ready React Hooks for browser APIs, state management, sensors, and DOM elements. <details><summary>More about</summary>

  It provides a standardized library of reusable hooks that simplifies complex browser API integrations and state logic, reducing the need for developers to write repetitive boilerplate.

  _Because apparently, we can't just use the native Web API without a curated wrapper to feel safe._

  `react` `hooks` `browser-api` `typescript` `mcp`
  </details>

- **[lanarky](https://github.com/ajndkr/lanarky)** `⭐ 994` `updated >1y` A Python web framework built on FastAPI for building LLM microservices with built-in streaming support over HTTP and WebSockets. <details><summary>More about</summary>

  It gives developers a lightweight, vendor-neutral way to wrap LLM logic into streamable API endpoints without starting from scratch with plain FastAPI.

  _Yet another 'built specifically for LLM developers' framework that turns your simple API wrapper into a framework decision you’ll regret once the maintainer moves on to other priorities._

  `python` `fastapi` `llmops` `microservices` `streaming`
  </details>

- **[GPTSwarm](https://github.com/metauto-ai/gptswarm)** `⭐ 989` `updated ≤180d` GPTSwarm is a graph-based Python framework for building LLM-based agents using nodes and edges, with built-in optimizers for self-improving multi-agent swarms. <details><summary>More about</summary>

  It gives developers a structured, code-first way to model, optimize, and run multi-agent systems where agent behaviors and inter-agent connections are explicit graph elements.

  _Just when you thought your codebase was complex enough, you can now model your agents as a self-optimizing graph and politely wonder which edge will fail first._

  `multi-agent` `graphs` `framework` `optimization` `swarm`
  </details>

- **[python-a2a](https://github.com/themanojdesai/python-a2a)** `⭐ 988` `updated ≤1y` python-a2a is a Python library for implementing Google's Agent-to-Agent (A2A) protocol with Model Context Protocol (MCP) integration for building interoperable multi-agent systems. <details><summary>More about</summary>

  It provides a standardized, production-ready SDK for developers to wire together disparate AI agents and external tools using emerging protocol standards.

  _Another week, another protocol promising to solve the 'my agent can't talk to your agent' problem, conveniently requiring you to rewrite your stack to find out._

  `a2a` `mcp` `multi-agent` `sdk` `protocol`
  </details>

- **[Agentarium](https://github.com/thytu/agentarium)** `⭐ 934` `updated >1y` Agentarium is a Python framework for creating, managing, and orchestrating multiple AI agents that can interact, maintain memory, and autonomously act within simulated environments. <details><summary>More about</summary>

  It provides developers with building blocks to script multi-agent simulations with checkpointing and custom actions, abstracting away the boilerplate of agent lifecycle management.

  _Another framework promising autonomous agents that 'act' and 'evolve', ensuring you can now orchestrate a digital society's worth of hallucinations in a single Python script._

  `multi-agent` `simulation` `python` `framework` `orchestration`
  </details>

- **[LLM-Dojo 开源大模型学习场所，使用简洁且易阅读的代码构建模型训练框架](https://github.com/mst272/llm-dojo)** `⭐ 932` `updated ≤180d` A lightweight, code-first post-training framework for LLMs supporting SFT, RLVR, and various knowledge distillation techniques built on top of OpenRLHF. <details><summary>More about</summary>

  It provides developers with a streamlined, scriptable toolkit to run fine-tuning and distillation experiments without the overhead of full-scale RLHF infrastructure.

  _Another weekend gone, chasing the impossible dream of teaching a 7B model to reason by tweaking reward signals until the heat death of your GPU._

  `llm` `post-training` `fine-tuning` `rlhf` `knowledge-distillation`
  </details>

- **[Kaito](https://github.com/kaito-project/kaito)** `⭐ 929` `updated ≤90d` KAITO is a Kubernetes operator that automates the deployment of LLM inference, fine-tuning, and RAG services using custom resource definitions and GPU node auto-provisioning. <details><summary>More about</summary>

  It allows developers to standardize and scale self-hosted LLM workloads on Kubernetes without manually tuning complex inference engine parameters or GPU provisioning.

  _Yet another reason to believe that the modern developer experience is just writing YAML to orchestrate the GPUs that run the models that write the YAML for us._

  `kubernetes` `llm-serving` `inference` `rag` `gpu`
  </details>

- **[mcp-framework](https://github.com/quantgeekdev/mcp-framework)** `⭐ 916` `updated ≤90d` A TypeScript framework and CLI for building Model Context Protocol (MCP) servers with automatic discovery for tools, resources, and prompts. <details><summary>More about</summary>

  It gives developers a structured, type-safe way to build and validate custom MCP servers rather than wiring protocol boilerplate by hand.

  _Yet another framework promising to tame the MCP ecosystem, because apparently writing a server in 2024 still requires an opinionated CLI and a fresh set of abstractions._

  `mcp` `typescript` `framework` `cli` `servers`
  </details>

- **[Teenage AGI](https://github.com/seanpixel/teenage-agi)** `⭐ 909` `updated >1y` A Python-based autonomous agent that uses OpenAI and Pinecone to maintain persistent vector-database memory across sessions and deliberates before responding. <details><summary>More about</summary>

  It demonstrates a practical, self-contained pattern for adding durable, retrieval-augmented memory to an autonomous agent using early-2023 LLM infrastructure.

  _Nothing says 'production-grade autonomous agent' like a terminal script built in a college dorm that hasn't been touched since GPT-4 was brand new._

  `autonomous-agents` `memory` `vector-db` `pinecone` `python`
  </details>

- **[vectordb](https://github.com/epsilla-cloud/vectordb)** `⭐ 874` `updated ≤1y` Epsilla is an open-source, high-performance vector database management system written in C++ for storing and searching embedding vectors in production-scale AI applications. <details><summary>More about</summary>

  It provides the retrieval infrastructure needed for RAG pipelines and LLM memory systems, offering Python, JavaScript, and REST APIs alongside LangChain and LlamaIndex integrations.

  _Another 10x faster vector database to evaluate while your RAG prototype still hallucinates on the first query._

  `vector-database` `retrieval` `rag` `infrastructure` `embeddings`
  </details>

- **[entaoai](https://github.com/akshata29/entaoai)** `⭐ 866` `updated >1y` An Azure-based accelerator for building ChatGPT-like experiences over enterprise data using Azure OpenAI, vector stores like Pinecone or Redis, and RAG patterns. <details><summary>More about</summary>

  It provides a ready-made scaffold for developers to implement retrieval-augmented generation over private data with built-in eval flows for groundedness and similarity.

  _Because absolutely nothing says 'accelerator' like another enterprise boilerplate that lets you chat with your own data while quietly accumulating eval debt you'll never actually read._

  `rag` `azure` `enterprise-data` `evals` `langchain`
  </details>

- **[foundry](https://github.com/promptise-com/foundry)** `⭐ 826` `updated ≤90d` A Python framework for building full-stack agentic systems with native MCP support, memory, guardrails, and semantic caching. <details><summary>More about</summary>

  It provides a batteries-included, production-oriented SDK for developers who want to ship agentic workflows without gluing together disparate libraries.

  _Just what the ecosystem needed: another 'foundation layer' promising to save us from glue code, arriving eight hundred stars and one framework too late._

  `agent-framework` `python` `mcp` `context-engineering`
  </details>

- **[AgentForge](https://github.com/databassgit/agentforge)** `⭐ 818` `updated ≤30d` AgentForge is a low-code Python framework for building and orchestrating autonomous AI agents and multi-agent cognitive architectures using declarative YAML configurations. <details><summary>More about</summary>

  It lets developers rapidly prototype model-agnostic agent workflows and memory systems with minimal boilerplate code.

  _Just what the ecosystem needed: another extensible AGI framework promising low-code cognitive architectures while helpfully noting that tooling support is deprecated until the MCP standard arrives._

  `agents` `framework` `python` `low-code` `multi-agent`
  </details>

- **[microagents](https://github.com/aymenfurter/microagents)** `⭐ 815` `updated >1y` An experimental Python framework that dynamically generates, validates, and stores small self-improving agents capable of editing their own prompts and code to solve user tasks. <details><summary>More about</summary>

  It offers a code-first way to build systems where agents learn and reuse successful strategies across sessions, moving beyond static prompt templates.

  _Finally, a framework that lets your agents rewrite their own job descriptions, ensuring they become self-sufficient right before they inevitably trash your Python environment outside a sandbox._

  `agents` `self-improving` `framework` `python` `langchain`
  </details>

- **[data-to-paper](https://github.com/technion-kishony-lab/data-to-paper)** `⭐ 787` `updated ≤1y` An automation framework that navigates interacting AI agents through end-to-end scientific research, from raw data analysis to generating human-verifiable, backward-traceable research papers. <details><summary>More about</summary>

  It provides a structured framework for using LLMs to automate complex, multi-step analytical workflows with explicit traceability from results back to the source code.

  _Finally, an autonomous system that can write the paper explaining why your model's correlation was spurious, while you stare at the 'data-chained' output wondering if you're the research assistant or the reviewer._

  `agents` `scientific-research` `multi-agent` `traceability` `llm`
  </details>

- **[pydantic-deepagents](https://github.com/vstorm-co/pydantic-deepagents)** `⭐ 786` `updated ≤90d` pydantic-deepagents is a Python framework for building deep agent teams with tool calling, sandboxed execution, and multi-agent collaboration using Pydantic AI. <details><summary>More about</summary>

  It gives developers a structured, type-safe way to compose coding agents with memory, checkpoints, and unlimited context without managing low-level orchestration.

  _Finally, a way to feel productive while your agents debate whether to refactor the README or start a sub-agent war over indentation._

  `python` `agent-framework` `multi-agent` `pydantic-ai` `cli`
  </details>

- **[CodeFuse-muAgent](https://github.com/codefuse-ai/codefuse-muagent)** `⭐ 776` `updated >1y` A multi-agent framework driven by an Eventic Knowledge Graph (EKG) engine that supports drag-and-drop orchestration, RAG, and function calling for executing complex SOPs. <details><summary>More about</summary>

  It provides a structured way to orchestrate multiple specialized agents using knowledge graphs, validated in real-world DevOps scenarios at Ant Group.

  _Just when you thought 'multi-agent framework' was the final form of complexity, someone decided to plug a Knowledge Graph into the orchestration layer to really test your patience with acronyms._

  `multi-agent` `knowledge-graph` `orchestration` `ekg` `sdk`
  </details>

- **[BambooAI](https://github.com/pgalko/bambooai)** `⭐ 775` `updated ≤90d` BambooAI is a Python library that enables natural language-driven data analysis by generating and executing code against local datasets, external APIs, and vector databases. <details><summary>More about</summary>

  It allows developers and analysts to query data and produce visualizations conversationally, reducing the boilerplate required to derive insights from pandas DataFrames.

  _Yet another library promising to turn a data analyst into a prompt engineer, ensuring your team spends more time debugging LLM-generated pandas code than writing it themselves._

  `python` `data-analysis` `llm` `agent` `pandas`
  </details>

- **[Fructose](https://github.com/bananaml/fructose)** `⭐ 750` `updated >1y` Fructose is a Python library that lets developers wrap LLM calls as strongly-typed functions using a simple @ai decorator. <details><summary>More about</summary>

  It offers a lightweight way to integrate structured, type-safe LLM interactions directly into Python code without heavy framework overhead.

  _Yet another library promising to tame the chaos of LLM outputs into neat dataclasses, right before its maintainers pivoted to other things._

  `python` `llm` `typed-functions` `library`
  </details>

- **[Langchain visualizer](https://github.com/amosjyng/langchain-visualizer)** `⭐ 740` `updated >1y` A Python library that adapts the ICE visualizer UI to render and debug LangChain workflow executions, prompts, and LLM call costs. <details><summary>More about</summary>

  It gives developers a static, colorful trace of prompts, templated variables, and agent execution flow for LangChain apps.

  _You’ve now installed a visualizer to debug the framework you installed to simplify working with the models you’re prompt‑engineering to fake reasoning._

  `langchain` `visualization` `debugging` `tracing`
  </details>

- **[WorkGPT](https://github.com/team-openpm/workgpt)** `⭐ 731` `updated >1y` A TypeScript agent framework that lets developers define a directive and connect OpenAPI-defined APIs so the LLM can loop conversations and invoke actions until the task is complete. <details><summary>More about</summary>

  Developers can script autonomous API-driven workflows by binding any OpenAPI-compatible service to a GPT-4 loop without building custom agent glue code.

  _Another early 2023 agent framework with a 731-star time capsule that hasn’t been touched since June 2023, proving even autonomous agents need maintenance._

  `agent-framework` `openapi` `typescript` `autonomous-agents`
  </details>

- **[LLMFlows](https://github.com/stoyan-stoyanov/llmflows)** `⭐ 706` `updated >1y` LLMFlows is a Python framework for building explicit, transparent LLM-powered applications using structured flows, prompt templates, and vector store integrations. <details><summary>More about</summary>

  It gives developers a minimal, code-first way to define and trace complex LLM call chains without hidden prompts or opaque abstractions.

  _Yet another framework promising explicit control, just in case you were starting to feel dangerously productive with the last three you learned._

  `python` `llm-framework` `prompt-flows` `vector-store` `tracing`
  </details>

- **[Rankify](https://github.com/datascienceuibk/rankify)** `⭐ 677` `updated ≤90d` Rankify is a Python toolkit for building and benchmarking retrieval, re-ranking, and retrieval-augmented generation (RAG) pipelines with support for 40+ datasets and 24+ state-of-the-art reranking models. <details><summary>More about</summary>

  It gives developers a modular, unified API to experiment with and evaluate different retrieval and RAG strategies without wiring together disparate models and datasets by hand.

  _Yet another reminder that you can now spend an entire afternoon tuning rerankers instead of realizing your documentation was the real retrieval problem all along._

  `rag` `retrieval` `reranking` `python` `benchmark`
  </details>

- **[LangChainDart](https://github.com/davidmigloz/langchain_dart)** `⭐ 675` `updated ≤30d` An unofficial Dart port of the LangChain framework for building LLM-powered applications within the Dart and Flutter ecosystems. <details><summary>More about</summary>

  It provides Dart and Flutter developers with standardised components for model I/O, retrieval-augmented generation, and agents, bridging the AI tooling gap in non-Python/JS ecosystems.

  _Finally, you can orchestrate a multi-agent RAG pipeline in Dart, because waiting for a platform channel bridge to Python was definitely the bottleneck in your shipping schedule._

  `dart` `flutter` `langchain` `llm-framework` `rag`
  </details>

- **[Pipelex](https://github.com/pipelex/pipelex)** `⭐ 663` `updated ≤90d` A declarative DSL and CLI for defining typed, reusable AI procedures (methods) that handle model routing, structured outputs, and pipeline orchestration across 60+ models. <details><summary>More about</summary>

  It lets teams codify AI workflows into version-controlled .mthds files, making prompt logic composable, repeatable, and portable across different coding agents.

  _Just what we needed: yet another layer of abstraction where your prompts get their own file extension and a dedicated syntax before the model even sees them._

  `dsl` `workflow` `orchestration` `cli` `methods`
  </details>

- **[VectorDB](https://github.com/jina-ai/vectordb)** `⭐ 650` `updated >1y` A Pythonic vector database built on DocArray and Jina for local, on-premise, or cloud-based vector search with CRUD operations and scaling features. <details><summary>More about</summary>

  Developers building LLM-powered apps or RAG pipelines can use it as a lightweight, code-first vector store without deploying heavier infrastructure.

  _Yet another Pythonic abstraction layer ensuring you can spend an afternoon deciding between this and three other vector stores with identical README sentences._

  `vector-database` `python` `retrieval` `embedding` `llmops`
  </details>

- **[LLama Cpp Agent](https://github.com/maximilian-winter/llama-cpp-agent)** `⭐ 630` `updated ≤180d` A Python framework for structuring interactions with local LLMs via llama.cpp, adding guided sampling for function calling and structured output. <details><summary>More about</summary>

  It lets developers build local agentic workflows with small models that weren't fine-tuned for tool use, bridging the gap between raw inference and usable agents.

  _Another framework for making local 7B models pretend they know how to use tools, just in time for the author to tell you to migrate to their new framework._

  `llama-cpp` `local-agents` `function-calling` `structured-output` `python`
  </details>

- **[dr-doc-search](https://github.com/namuan/dr-doc-search)** `⭐ 596` `updated >1y` A Python CLI and web app that indexes PDF books using LangChain and OpenAI/HuggingFace embeddings to enable conversational Q&A over document content. <details><summary>More about</summary>

  It provides a reusable pattern for building local document-indexing pipelines that developers can adapt for internal docs, wikis, or proprietary knowledge bases.

  _Yet another reminder that in 2023 we decided the best way to read a book is to pay a language model to summarize it for us one question at a time._

  `langchain` `rag` `pdf` `cli` `huggingface`
  </details>

- **[FastAgency](https://github.com/ag2ai/fastagency)** `⭐ 540` `updated ≤180d` FastAgency is an open-source Python framework that provides a unified programming interface for deploying AG2 (formerly AutoGen) multi-agent workflows into production web chat applications or REST API services. <details><summary>More about</summary>

  It allows developers to scale Jupyter notebook prototypes of multi-agent systems into distributed, production-ready applications with minimal code changes.

  _Just when you thought your AutoGen notebook was safe as a prototype, someone built a framework to drag it kicking and screaming into a distributed production environment._

  `multi-agent` `ag2` `autogen` `production` `python`
  </details>

- **[Embedbase](https://github.com/different-ai/embedbase)** `⭐ 524` `updated >1y` A JavaScript SDK and hosted API that provides embeddings-as-a-service and LLM text generation to help developers build semantic search and retrieval-augmented generation features without managing their own vector database infrastructure. <details><summary>More about</summary>

  It abstracts away the operational overhead of hosting vector databases like pgvector, letting developers add semantic search and LLM generation to apps via a simple client library.

  _Another layer of managed abstraction promising to save you from the horrors of running a vector database, provided you're comfortable API-keying your way into yet another hosted dependency._

  `embeddings` `vectordb` `llm` `sdk` `rag`
  </details>

- **[a2a-x402](https://github.com/google-agentic-commerce/a2a-x402)** `⭐ 523` `updated ≤30d` An extension to the Agent-to-Agent (A2A) protocol that adds cryptocurrency payment flows via HTTP 402, turning any A2A agent into a monetizable on-chain service. <details><summary>More about</summary>

  It provides developers with the standardized protocol, spec, and multi-language libraries needed to charge for agent services in decentralized environments.

  _We have successfully reached the point where your autonomous agent needs a crypto wallet and a blockchain transaction just to bill another autonomous agent for a two-line API call._

  `a2a` `payments` `protocol` `multi-agent` `crypto`
  </details>

- **[aqueduct](https://github.com/runllm/aqueduct)** `⭐ 519` `updated >1y` Aqueduct is an open-source MLOps framework that lets you define and run machine learning and LLM workloads across any cloud infrastructure using a Python-native API. <details><summary>More about</summary>

  It lets developers write vanilla Python pipelines and seamlessly execute them across Kubernetes, Spark, Lambda, and other cloud engines without managing siloed infrastructure APIs.

  _Just what the modern stack needed: another layer of abstraction to help you orchestrate your orchestration while you ponder why your three-line Python script needs a control plane._

  `mlops` `llm` `python` `cloud` `orchestration`
  </details>

- **[ReLLM](https://github.com/r2d4/rellm)** `⭐ 513` `updated >1y` A Python library that constrains LLM token generation in real-time using regular expressions to enforce exact output structure. <details><summary>More about</summary>

  It allows developers to reliably force small and local models to produce valid JSON, dates, or template strings without fragile post-processing parsing.

  _We have progressed from 'LLMs can't write accurate code' to 'we need regex to stop the LLM from hallucinating a date format,' which is surely the future we were promised._

  `regex` `structured-output` `llm` `local-models` `transformers`
  </details>

- **[Agency](https://github.com/neurocult/agency)** `⭐ 507` `updated >1y` A Go-native library for building generative AI applications and autonomous agents using an idiomatic, provider-agnostic approach. <details><summary>More about</summary>

  Lets Go developers build LLM-powered apps and agent workflows without importing Python-heavy frameworks or wrestling with non-idiomatic ports.

  _Yet another brave attempt to reinvent LangChain in a language that refuses to be as dynamically unhinged as the AI hype cycle demands._

  `go` `llm` `agents` `library` `framework`
  </details>

- **[RAI](https://github.com/robotecai/rai)** `⭐ 502` `updated ≤90d` RAI is a vendor-agnostic agentic framework for Physical AI and robotics that integrates LLMs and multimodal models with ROS 2 to perform complex actions, scenarios, and human-robot interactions. <details><summary>More about</summary>

  It provides robotics developers with a structured SDK to build multi-agent systems that combine speech interaction, perception, and navigation without locking into a single AI provider.

  _Yet another reminder that while your CI pipeline struggles to lint a PR, embodied agents are already reasoning through tractor obstacles in virtual orchards._

  `robotics` `physical-ai` `multi-agent` `ros2` `embodied-ai`
  </details>

- **[Swarm](https://github.com/christopherkarani/swarm)** `⭐ 494` `updated ≤30d` A Swift framework for building agents and multi-agent workflows, supporting both on-device Foundation Models and cloud providers like Anthropic and OpenAI. <details><summary>More about</summary>

  It lets Swift developers build type-safe, crash-resilient multi-agent systems using native concurrency and familiar tooling across Apple platforms and Linux.

  _The industry has successfully ported the multi-agent orchestration hype cycle into Swift, ensuring even your WatchOS apps can now over-engineer simple tasks across distributed agent pipelines._

  `swift` `agents` `multi-agent` `on-device` `framework`
  </details>

- **[Eidolon](https://github.com/eidolon-ai/eidolon)** `⭐ 491` `updated ≤30d` An open-source Python SDK and deployment server for building, customizing, and running modular agentic services with built-in HTTP APIs and agent-to-agent communication. <details><summary>More about</summary>

  It gives developers a modular framework and runtime to define, swap, and deploy LLM agents as services without rewriting core application logic.

  _Yet another framework promising to future-proof your agent stack, right before the next framework claims the same thing next Tuesday._

  `agents` `sdk` `python` `services` `modular`
  </details>

- **[MindSQL](https://github.com/mindinventory/mindsql)** `⭐ 442` `updated ≤1y` MindSQL is a Python RAG library that translates natural language questions into SQL queries against PostgreSQL, MySQL, SQLite, Snowflake, and BigQuery using LLMs like GPT-4 and Llama 2. <details><summary>More about</summary>

  It provides a code-first abstraction layer for developers to embed text-to-SQL capabilities into applications with minimal boilerplate and vector-backed context retrieval.

  _Because what your stack really needed was another DSL that requires an LLM, a vector database, and a prayer to translate 'show me sales' into valid SQL._

  `text-to-sql` `rag` `python` `langchain` `database`
  </details>

- **[LangStream](https://github.com/langstream/langstream)** `⭐ 431` `updated >1y` LangStream is an event-driven developer platform for building and running LLM applications, powered by Kubernetes and Kafka for production-grade streaming workloads. <details><summary>More about</summary>

  It gives developers a Kubernetes-native runtime to wire streaming data into LLM apps without hand-rolling infra for brokers, storage, and deployments.

  _Just when you thought your stack couldn’t get more enterprise, you’re now deploying chat completions like a 2015 Kafka Summit keynote._

  `kafka` `kubernetes` `event-driven` `llm-infra` `streaming`
  </details>

- **[Langstream](https://github.com/rogeriochaves/langstream)** `⭐ 421` `updated >1y` LangStream is a lightweight Python framework for building LLM applications using composable async streams as the core building block. <details><summary>More about</summary>

  It offers developers a smaller, fully-typed alternative to heavier frameworks like LangChain for composing LLM workflows with functional programming patterns.

  _Yet another framework promising to solve the 'too many classes' problem by introducing a new set of abstractions you'll have to debug at 2am when the stream dries up._

  `python` `llm-framework` `streams` `functional-programming` `langchain-alternative`
  </details>

- **[mcpadapt](https://github.com/grll/mcpadapt)** `⭐ 421` `updated ≤1y` A Python adapter library that converts MCP server tools into native tools for LangChain, CrewAI, Smolagents, and other agentic frameworks. <details><summary>More about</summary>

  It lets developers instantly bridge over 650 existing MCP servers into their preferred agent framework without writing custom integration code.

  _Another layer of glue so your agent can invoke a tool that invokes a protocol that invokes a server, proving that modern AI orchestration is mostly baking adapters upon adapters._

  `mcp` `framework` `adapter` `python` `integration`
  </details>

- **[openapi](https://github.com/longbridge/openapi)** `⭐ 419` `updated ≤90d` Longbridge OpenAPI SDK provides multi-language (Rust, Python, Node.js, Java, C, C++) bindings and an MCP server implementation for programmatic trading, quotes, and portfolio data on the Longbridge platform. <details><summary>More about</summary>

  It gives developers the building blocks to automate financial strategies and integrate real-time market data into their own apps or AI agents.

  _Yet another SDK for turning every hobbyist trader into a part-time DevOps engineer maintaining their own fragile, multi-language quant stack._

  `sdk` `fintech` `mcp` `trading` `multi-language`
  </details>

- **[Rigging](https://github.com/dreadnode/rigging)** `⭐ 411` `updated ≤30d` A lightweight Python framework for building LLM-powered applications and agents with Pydantic models, LiteLLM support, and tool-use abstractions. <details><summary>More about</summary>

  It gives developers a typed, async-ready toolkit to wire multiple LLM providers into production code without writing boilerplate orchestration logic.

  _Yet another abstraction layer promising to unify the chaos of LLM APIs, ensuring you can spend your afternoon choosing between three dozen providers instead of actually shipping code._

  `llm-framework` `python` `agents` `pydantic` `litellm`
  </details>

- **[LLM Strategy](https://github.com/blackhc/llm-strategy)** `⭐ 399` `updated >1y` A Python library that uses a decorator to implement abstract methods via LLM calls by forwarding docstrings, type annotations, and dataclass schemas to models like OpenAI's GPT-3. <details><summary>More about</summary>

  It lets developers define strongly-typed interfaces and delegate the implementation to LLMs, bridging traditional Python software engineering patterns with generative AI.

  _You can now technically claim your unit tests pass because the LLM 'implemented' the Strategy pattern, shifting the burden of proof from your IDE to a stochastic parrot._

  `python` `llm` `strongly-typed` `strategy-pattern` `decorator`
  </details>

- **[finetune-Qwen2-VL](https://github.com/zhangfaen/finetune-qwen2-vl)** `⭐ 393` `updated >1y` A GitHub repository providing fine-tuning scripts for Qwen2-VL vision-language models with single and multi-GPU support. <details><summary>More about</summary>

  It lowers the barrier for developers to adapt Qwen2-VL models to custom data without relying on heavy frameworks like LLaMA-Factory.

  _Another fine-tuning script that makes you feel productive until you realize you still need to curate your own dataset and wait for convergence._

  `fine-tuning` `vision-language` `qwen2-vl` `pytorch` `multi-gpu`
  </details>

- **[AgentRun](https://github.com/tjmlabs/agentrun)** `⭐ 372` `updated >1y` A Python library and REST API that safely executes LLM-generated Python code inside isolated Docker containers with resource limits, dependency management, and safety checks. <details><summary>More about</summary>

  It gives developers a drop-in way to let any LLM run generated code without risking the host system, filling a critical safety gap in agent and tool-using workflows.

  _We have reached the point where the safest way to let an AI do math is to spin up a Docker container, install dependencies, and pray the sandbox holds._

  `code-execution` `sandbox` `docker` `llm-infrastructure` `safety`
  </details>

- **[OpenLM](https://github.com/r2d4/openlm)** `⭐ 369` `updated >1y` An OpenAI-compatible Python client that lets developers call models from Hugging Face, Cohere, and other providers using the standard OpenAI API interface. <details><summary>More about</summary>

  It allows developers to swap or multiplex LLM providers without rewriting application code by maintaining drop-in compatibility with the OpenAI SDK.

  _Yet another abstraction layer promising vendor independence, ensuring you can now debug compatibility issues across five providers instead of one._

  `llm` `openai-compatible` `python` `provider-abstraction`
  </details>

- **[llama-agents](https://github.com/run-llama/llama-agents)** `⭐ 364` `updated ≤90d` LlamaAgents is an event-driven, async-first Python framework and CLI for building and deploying document-centric agent workflows with durable state, branching, and human-in-the-loop support. <details><summary>More about</summary>

  It lets developers treat heavy document pipelines—OCR, extraction, classification, and validation—as plain Python workflows instead of cobbling together fragile side processes for production.

  _Another framework promises to orchestrate your agents while you orchestrate which framework is still alive this month._

  `agent-workflows` `python` `document-processing` `orchestration` `llamaindex`
  </details>

- **[Funcchain](https://github.com/shroominic/funcchain)** `⭐ 341` `updated >1y` funcchain is a Python library that uses Pydantic models and LangChain runnables to let developers define structured LLM outputs using native Python function syntax. <details><summary>More about</summary>

  It offers a minimal, type-safe way to integrate structured generation into Python apps with support for local models, streaming, and vision inputs without heavy boilerplate.

  _Another elegant abstraction layer promising to tame LLM outputs, just in case you were worried your stack didn’t have enough Pythonic ways to describe a recipe._

  `python` `structured-output` `langchain` `pydantic` `local-models`
  </details>

- **[rs-graph-llm](https://github.com/a-agmon/rs-graph-llm)** `⭐ 337` `updated ≤90d` A Rust-native graph execution framework for building type-safe, stateful multi-agent workflow systems with integrated LLM capabilities. <details><summary>More about</summary>

  Developers can define complex agent orchestrations in Rust, gaining performance and compile-time safety over Python-first alternatives like LangGraph.

  _Just what the ecosystem needed: another framework to manage agents that mostly argue about whether your insurance claim is valid._

  `rust` `multi-agent` `graph-workflow` `langgraph-alternative`
  </details>

- **[AgentFlow](https://github.com/simonmesmith/agentflow)** `⭐ 321` `updated >1y` Agentflow is a Python-based CLI tool that executes structured LLM workflows defined in human-readable JSON files with support for variables and custom function calls. <details><summary>More about</summary>

  It offers developers a lightweight, code-first way to define deterministic multi-step LLM processes without the instability of fully autonomous agents or the limitations of simple chat interfaces.

  _Yet another framework promising to bridge the gap between 'chat' and 'autonomous' that hasn't been touched in two years, proving even LLM workflows need maintenance._

  `workflows` `json` `langchain` `cli` `llm`
  </details>

- **[Fact Checker](https://github.com/jagilley/fact-checker)** `⭐ 305` `updated >1y` A Python script that demonstrates fact-checking LLM outputs by prompting the model to self-interrogate its assumptions and sequentially verify their truth. <details><summary>More about</summary>

  It provides a concrete, code-first example of prompt chaining to reduce hallucinations, serving as a reference implementation for building more reliable LLM workflows.

  _Because clearly the best way to fix a model that makes things up is to ask the same model to politely fact-check itself._

  `prompt-chaining` `fact-checking` `llm-reliability` `langchain`
  </details>

- **[Llama-github](https://github.com/jetxu-llm/llama-github)** `⭐ 304` `updated ≤90d` A Python library that performs Agentic RAG to retrieve and synthesize relevant code snippets, issues, and repository context from GitHub for use by LLM chatbots and AI agents. <details><summary>More about</summary>

  It provides the retrieval infrastructure needed to ground coding agents in real-world GitHub examples, reducing hallucinations and improving code generation quality.

  _Yet another layer of abstraction promising that if we just index enough other people's code, our agent will finally stop inventing its own deprecated APIs._

  `python` `rag` `github` `retrieval` `langchain`
  </details>

- **[capsule](https://github.com/capsulerun/capsule)** `⭐ 290` `updated ≤30d` Capsule is a WebAssembly-based runtime that sandboxes untrusted code execution for AI agents, providing resource limits, automatic retries, and lifecycle tracking via Python and TypeScript SDKs. <details><summary>More about</summary>

  It gives developers a secure way to execute LLM-generated or user-submitted code in isolated Wasm sandboxes with configurable CPU, memory, and timeout constraints.

  _Finally, a runtime that lets your agent confidently eval arbitrary code in production while technically being able to say 'it ran in a sandbox' when things catch fire._

  `wasm` `sandbox` `code-execution` `agent-infrastructure`
  </details>

- **[llm-swarm](https://github.com/huggingface/llm-swarm)** `⭐ 287` `updated >1y` A Python toolkit that automates spinning up scalable open LLM inference endpoints on Slurm clusters using TGI or vLLM with built-in load balancing. <details><summary>More about</summary>

  It lets developers and researchers turn a Slurm cluster into a managed inference surface for synthetic data generation and large-scale LLM experiments without manual endpoint orchestration.

  _Because nothing says modern AI productivity like writing Python scripts to wrangle Slurm jobs so you can generate synthetic training data to fine-tune a model that will hallucinate about your codebase anyway._

  `slurm` `llm-inference` `huggingface` `scalability` `synthetic-data`
  </details>

- **[Phidata](https://github.com/agno-agi/phidata)** `⭐ 276` `updated >1y` Phidata is a Python framework for building multi-modal AI agents with memory, knowledge, tools, and reasoning, recently renamed and moved to the Agno project. <details><summary>More about</summary>

  Developers can use this SDK to build and coordinate teams of specialized agents that handle text, images, audio, and video with built-in tools and RAG capabilities.

  _Another fresh framework in the agent orchestration gold rush, just in time for the original repo to sunset and teleport to a new GitHub home while you were still reading the docs._

  `agents` `framework` `python` `multi-modal` `sdk`
  </details>

- **[flyto-core](https://github.com/flytohub/flyto-core)** `⭐ 273` `updated ≤30d` An open-source, MCP-native execution engine for AI agents with 412 reusable modules, built-in triggers, queueing, versioning, and step-level tracing and replay for browser and workflow automation. <details><summary>More about</summary>

  Developers can define multi-step automation pipelines as traced, replayable workflows instead of choosing between brittle shell scripts and opaque agent executions.

  _We have finally solved the ancient problem of 'why did my scraping script fail at step 8' by building an execution engine sophisticated enough to require its own debugging workflow._

  `mcp` `automation` `workflow-engine` `browser-automation` `replay`
  </details>

- **[saplings](https://github.com/shobrook/saplings)** `⭐ 272` `updated ≤1y` A Python framework that adds Monte Carlo Tree Search, A*, and greedy best-first search algorithms to LLM agents with two lines of code. <details><summary>More about</summary>

  It lets developers swap blind tool-calling loops for search-backed reasoning that looks ahead, backtracks, and outperforms ReAct-style agents on benchmarks like HumanEval and HotpotQA.

  _Another few lines of abstraction standing between your agent and its inevitable spiral into an existential tree of failed tool calls._

  `agents` `tree-search` `mcts` `framework` `reasoning`
  </details>

- **[Project Alice](https://github.com/marianomolina/project_alice)** `⭐ 258` `updated >1y` An agentic workflow framework with a web UI for creating, managing, and deploying AI agents that support RAG, human-in-the-loop, and chain-of-thought capabilities. <details><summary>More about</summary>

  It gives developers a self-hosted environment to build and coordinate multi-agent workflows with built-in context management and task orchestration.

  _Yet another self-hosted agent framework where you spend more time wiring microservices and pruning message queues than actually shipping code._

  `agent-framework` `self-hosted` `rag` `multi-agent` `workflow`
  </details>

- **[openai-agents-go](https://github.com/nlpodyssey/openai-agents-go)** `⭐ 255` `updated ≤90d` A Go port of the OpenAI Agents Python SDK for building multi-agent workflows with handoffs, guardrails, and tool-calling support. <details><summary>More about</summary>

  Developers in the Go ecosystem can now build structured multi-agent systems using familiar SDK patterns instead of wiring LLM calls by hand.

  _We have successfully ported the privilege of over-engineering agent handoffs to yet another language, because apparently Go developers needed their own flavor of orchestration anxiety._

  `go` `multi-agent` `sdk` `llm` `framework`
  </details>

- **[QABot](https://github.com/hardbyte/qabot)** `⭐ 245` `updated >1y` A CLI and Python library that lets developers query local or remote data files (CSV, parquet, Excel, SQL) using natural language, translating questions into DuckDB SQL queries via LLMs. <details><summary>More about</summary>

  It allows developers to bypass manual SQL drafting or data loading for ad-hoc analysis by letting an LLM handle the translation from question to executable query against local files or remote buckets.

  _Yet another excuse to never actually learn SQL syntax, under the comforting delusion that an LLM will perfectly understand your schema and intent every time._

  `cli` `data-querying` `duckdb` `llm-tool` `local-first`
  </details>

- **[Langchain Decorators](https://github.com/ju-bezdek/langchain-decorators)** `⭐ 234` `updated ≤90d` A lightweight Python library providing syntactic sugar decorators to define LangChain prompts and chains using standard function signatures and docstrings. <details><summary>More about</summary>

  It allows developers to write multi-line prompts and leverage IDE type-checking and hints by treating prompts as native Python functions rather than raw template strings.

  _We have successfully abstracted the abstraction, layering decorators on top of the framework so we can feel productive while debugging indentations in our docstrings._

  `langchain` `prompt-engineering` `python` `syntactic-sugar`
  </details>

- **[ForeverVM](https://github.com/jamsocket/forevervm)** `⭐ 228` `updated >1y` A secure, stateful sandbox platform for running AI-generated Python code in persistent environments that can be swapped between memory and disk. <details><summary>More about</summary>

  It gives coding agents a durable, isolated runtime to execute and evolve Python state over time without spinning up full containers or losing REPL context.

  _Another delightful abstraction that lets your agent confidently execute arbitrary code forever, because what could possibly go wrong with stateful sandboxes that never die._

  `sandboxes` `stateful-execution` `python` `sdk` `mcp`
  </details>

- **[bondai](https://github.com/krohling/bondai)** `⭐ 219` `updated >1y` BondAI is an open-source Python framework and CLI for building single and multi-agent systems with built-in memory management, error handling, and tools for search, file operations, and web queries. <details><summary>More about</summary>

  It provides developers with a structured SDK and ready-to-use CLI to prototype autonomous agents that can plan, use tools, and complete complex tasks without wiring up memory and context logic from scratch.

  _Just what we needed: another framework to orchestrate agents that will endlessly research Metformin while your actual sprint tickets quietly expire._

  `agents` `framework` `cli` `memory` `tool-use`
  </details>

- **[flox](https://github.com/flox-foundation/flox)** `⭐ 215` `updated ≤30d` An AI-native framework for building trading systems with polyglot bindings and an MCP control plane. <details><summary>More about</summary>

  It allows developers to build trading strategies in multiple languages (Python, Node, C++, etc.) and lets AI agents interact with the system's surface via MCP for scaffolding and backtesting.

  _Now you can delegate the precise moment of your financial ruin to an LLM with grounded access to a C++ static library._

  `algorithmic-trading` `mcp` `polyglot` `quantitative-finance`
  </details>

- **[Typescript](https://github.com/r2d4/llm.ts)** `⭐ 213` `updated >1y` A zero-dependency TypeScript library providing a single API to call over 30 LLMs from providers like OpenAI, Cohere, and HuggingFace. <details><summary>More about</summary>

  It lets developers write model-agnostic code and test prompts across multiple providers without bundling heavy framework dependencies.

  _Yet another abstraction layer promising freedom from vendor lock-in, assuming you didn't already achieve the same thing with a heavier framework two years ago._

  `typescript` `llm-client` `provider-abstraction` `zero-dependency`
  </details>

- **[slangchain](https://github.com/prof-frink-lab/slangchain)** `⭐ 199` `updated >1y` An extended functionality toolkit built on top of the LangChain framework that includes browser automation capabilities via Selenium and deployment examples for BabyAGI on AWS Lambda. <details><summary>More about</summary>

  It offers developers a pre-built bridge between LLM-driven agents and browser automation, along with serverless deployment patterns for experimental agent architectures.

  _Another noble attempt to tame the LangChain abstraction tower by adding Selenium on top, proving that if your agent can't book a flight, it's probably just a chatbot._

  `langchain` `browser-automation` `aws-lambda` `babyagi` `selenium`
  </details>

- **[mangaba_ai](https://github.com/mangaba-ai/mangaba_ai)** `⭐ 195` `updated ≤90d` A lightweight Python framework for building multi-agent systems with ReAct reasoning, RAG, persistent memory, and support for multiple LLM providers including OpenRouter, Gemini, OpenAI, Claude, and HuggingFace. <details><summary>More about</summary>

  It offers a self-contained, batteries-included alternative to heavier stacks like CrewAI and LangChain for developers wiring up multi-agent workflows, tool use, and fallback routing entirely in code.

  _Yet another minimal agent framework arrives to save us from the previous minimal agent framework, because apparently orchestrating two LLMs arguing with each other requires its own package and a 2025 timestamp._

  `multi-agent` `python` `framework` `llm` `rag`
  </details>

- **[mux-node-sdk](https://github.com/muxinc/mux-node-sdk)** `⭐ 179` `updated ≤90d` Official Node.js/TypeScript SDK and bundled MCP server for the Mux video platform, providing REST API access and AI assistant integrations for video streaming and analytics. <details><summary>More about</summary>

  It lets developers automate video asset management and live streaming workflows directly from code or through AI assistants via the included MCP server.

  _Now your AI agent can debug your video transcoding pipeline and ask for more quota in the same breath._

  `mux` `video` `sdk` `node` `mcp`
  </details>

- **[Axar](https://github.com/axar-ai/axar)** `⭐ 162` `updated ≤180d` A lightweight TypeScript framework for building production-ready agentic applications using decorators, typed inputs/outputs, and model-agnostic LLM support. <details><summary>More about</summary>

  Developers can build structured, controllable LLM-powered workflows in familiar TypeScript patterns without the overhead and abstraction bloat of heavier agent frameworks.

  _Yet another TypeScript agent framework promising zero-BS simplicity, joining the 400 other minimal frameworks that all claim to be the one that finally respects your cognitive load._

  `typescript` `agent-framework` `llm` `nodejs` `decorators`
  </details>

- **[gateway](https://github.com/missingstudio/gateway)** `⭐ 160` `updated >1y` A cloud-native AI gateway providing a universal API to route, load balance, and retry requests across 100+ LLM providers via REST and gRPC. <details><summary>More about</summary>

  It abstracts provider-specific APIs into a single endpoint, handling fallbacks and routing so developers can avoid vendor lock-in and simplify multi-model inference setups.

  _Another layer of infrastructure to deploy and maintain so you can feel secure about your hallucination pipeline having 99.9% uptime._

  `ai-gateway` `llmops` `universal-api` `inference` `cloud-native`
  </details>

- **[Glide](https://github.com/einstack/glide)** `⭐ 160` `updated >1y` Glide is a cloud-native, high-performance LLM gateway written in Go that provides a unified REST API across model providers with built-in failover, caching, and key management. <details><summary>More about</summary>

  It abstracts away provider-specific APIs and transient errors, letting developers swap LLM backends without touching application code while maintaining production-grade resiliency.

  _Yet another abstraction layer promising to solve the 'which model provider won't ruin my weekend' problem, because clearly what your stack needed was one more middleman between you and the model._

  `llm-gateway` `llmops` `go` `cloud-native` `model-router`
  </details>

- **[Effective LLM Alignment](https://github.com/vikhrmodels/effective_llm_alignment)** `⭐ 154` `updated ≤1y` Effective LLM Alignment Toolkit provides configurable scripts for SFT, DPO, ORPO, CPO, SimPO, SMPO, GPO, distillation, reward modeling, classification, and prompt optimization using Hugging Face standards. <details><summary>More about</summary>

  It gives developers a unified, customizable toolkit to align LLMs with multiple advanced preference optimization methods without stitching together disparate repositories.

  _Another week, another alignment method—now you can try them all in one place before realizing you still need more compute._

  `llm-alignment` `preference-optimization` `fine-tuning`
  </details>

- **[swarms-rs](https://github.com/the-swarm-corporation/swarms-rs)** `⭐ 154` `updated ≤1y` swarms-rs is a Rust-based framework for building and orchestrating multi-agent systems, designed to handle concurrent agent communication and collaboration with a focus on performance and memory safety. <details><summary>More about</summary>

  It provides developers building complex agentic workflows with a high-performance, memory-safe alternative to Python-centric orchestration libraries.

  _Now you can orchestrate a thousand agents in Rust to argue about your Jira tickets at near-zero latency, because apparently the bottleneck in your workflow was garbage collection._

  `rust` `multi-agent` `orchestration` `framework` `enterprise`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[kom](https://github.com/weibaohui/kom)** `⭐ 148` `updated ≤180d` kom is a Go SDK wrapper for Kubernetes operations that provides kubectl-like functionality with CRD support, SQL querying, and MCP server capabilities. <details><summary>More about</summary>

  It simplifies Kubernetes resource management for developers by offering a programmatic interface with advanced features like SQL queries and multi-cluster MCP support.

  _Another tool promising to replace kubectl while adding yet another layer to remember when your pod is crashing at 3 AM._

  `kubernetes` `sdk` `mcp` `sql`
  </details>

- **[openai-swarm-node](https://github.com/youseai/openai-swarm-node)** `⭐ 147` `updated >1y` Swarm.js is a Node.js SDK implementing OpenAI's experimental Swarm framework for orchestrating multi-agent systems using the Chat Completions API. <details><summary>More about</summary>

  It lets JavaScript/TypeScript developers build and coordinate multi-agent workflows in Node.js without relying on Python-based tools.

  _Another Swarm clone popping up just as everyone realizes the original was a fragile research prototype, not a production foundation._

  `multi-agent` `orchestration` `nodejs` `openai` `swarm`
  </details>

- **[GenoMAS](https://github.com/liu-hy/genomas)** `⭐ 136` `updated ≤90d` A minimalist multi-agent framework for robust automation of scientific analysis workflows, such as gene expression analysis. <details><summary>More about</summary>

  Provides a generic, notebook-style communication protocol and customizable agents that developers can adapt to automate domain-specific scientific pipelines beyond genomics.

  _Yet another multi-agent framework enters the arena, promising that this time the agents will collaborate perfectly in a notebook instead of shouting at each other in a chat loop._

  `multi-agent` `bioinformatics` `scientific-workflows` `genomics` `framework`
  </details>

- **[wxflows](https://github.com/ibm/wxflows)** `⭐ 119` `updated ≤1y` IBM's watsonx.ai Flows Engine provides SDKs and examples for building data-source tools and deploying them as endpoints usable by agentic frameworks like LangChain, LangGraph, and OpenAI. <details><summary>More about</summary>

  It abstracts the boilerplate of wrapping APIs and data sources into callable tools, letting developers quickly arm their agents with custom capabilities across Python and JavaScript.

  _Yet another middleware layer promising to solve tool-calling fragmentation, ensuring you can spend your afternoon wrapping a weather API instead of admitting the agent still can't debug your CI pipeline._

  `tools` `agent-frameworks` `middleware` `watsonx` `sdk`
  </details>

- **[Groq Ruby](https://github.com/drnic/groq-ruby)** `⭐ 116` `updated >1y` A convenience Ruby client library for interacting with the Groq Cloud API to run fast LLM inference. <details><summary>More about</summary>

  It provides Ruby developers with a native, helper-driven interface to access high-speed, low-cost LLM models without writing raw HTTP calls.

  _Just what the ecosystem needed: another language-specific wrapper for a REST API that mirrors OpenAI, ensuring we can burn tokens in Ruby with the same reckless abandon as everyone else._

  `ruby` `groq` `llm-client` `gem` `api-wrapper`
  </details>

- **[PromptMage](https://github.com/tsterbak/promptmage)** `⭐ 115` `updated >1y` A Python framework for building and managing multi-step LLM workflows with built-in prompt versioning, a test playground, and an auto-generated FastAPI backend. <details><summary>More about</summary>

  It lets developers iterate on prompts inside their actual codebase, version them, and ship a self-hosted API endpoint instead of stitching together separate playgrounds and backend frameworks.

  _It treats your prompts with the same bureaucratic reverence usually reserved for production microservices, confirming that even LLM experimentation now requires CI, version control, and a dedicated Python framework._

  `python` `llm-workflow` `prompt-versioning` `self-hosted` `fastapi`
  </details>

- **[Lux](https://github.com/spectral-finance/lux)** `⭐ 104` `updated ≤1y` Lux is an open-source, language-agnostic framework for building multi-agent systems using concepts like Agents, Signals, Prisms, Beams, and Lenses to orchestrate AI-driven workflows. <details><summary>More about</summary>

  It provides developers with a structured way to build collaborative, multi-agent systems with type-safe communication and workflow orchestration across different programming languages.

  _Finally, a framework complex enough to require its own glossary of optical physics terms just to coordinate a few LLMs that will inevitably argue about crypto trading strategies._

  `multi-agent` `framework` `orchestration` `swarm-intelligence`
  </details>

- **[ai-toolkit](https://github.com/memgraph/ai-toolkit)** `⭐ 96` `updated ≤90d` A toolkit for building AI-driven graph applications on Memgraph, providing a core toolbox, LangChain integrations, an MCP server, and utilities for converting unstructured documents into knowledge graphs. <details><summary>More about</summary>

  It gives developers a ready-made stack to wire graph-powered RAG and agent workflows into their apps without hand-rolling Memgraph integrations.

  _Yet another SDK bundle promising to turn your documents into a queryable graph, right alongside the three other graph-RAG stacks you abandoned last quarter._

  `memgraph` `graph-rag` `langchain` `mcp` `knowledge-graph`
  </details>

- **[LLFn](https://github.com/orgexyz/llfn)** `⭐ 96` `updated >1y` LLFn is a lightweight Python framework that turns LLM prompts into typed, callable functions using a decorator pattern, built on top of LangChain's model interface. <details><summary>More about</summary>

  It offers developers a minimal-boilerplate path to wrap LLM calls into composable Python functions with Pydantic output types, making AI app prototyping feel like standard scripting.

  _Another framework promising to be the FastAPI of LLMs, proving that even in a post-agent world, we still can't resist wrapping our wrappers in yet another abstraction layer._

  `framework` `langchain` `python` `llm` `functions`
  </details>

- **[Simplifine](https://github.com/simplifine-gamedev/simplifine)** `⭐ 96` `updated >1y` Simplifine is an open-source Python toolkit and cloud service that simplifies LLM fine-tuning with one-line commands, handling infrastructure, cloud storage, and training optimizations like DeepSpeed. <details><summary>More about</summary>

  It lowers the barrier to customizing models by automating hyperparameter selection, data quality checks, and the complex infrastructure required to train or fine-tune LLMs on the cloud.

  _Yet another abstraction layer promising to hide the terrifying complexity of distributed training behind a 'simple decorator', ensuring you can now ruin a cloud budget with just a single line of Python._

  `llm-finetuning` `cloud-training` `deepspeed` `lora` `python-sdk`
  </details>

- **[swarm_ex](https://github.com/nrrso/swarm_ex)** `⭐ 88` `updated >1y` An Elixir library for lightweight AI agent orchestration and coordination, inspired by OpenAI's Swarm. <details><summary>More about</summary>

  It gives Elixir developers a native, concurrent-first way to build and test networks of AI agents using familiar tooling like Telemetry and Mix.

  _At least you can orchestrate a swarm of agents while the BEAM quietly proves it could have handled the concurrency without them._

  `elixir` `agent-orchestration` `library` `multi-agent` `concurrency`
  </details>

- **[Neurolink](https://github.com/juspay/neurolink)** `⭐ 87` `updated ≤90d` NeuroLink is a TypeScript SDK and CLI that provides a unified streaming API across 17+ AI providers, with built-in tools, MCP server support, memory, and context compaction features. <details><summary>More about</summary>

  It lets developers swap LLM providers with a single parameter, manage context windows automatically, and add RAG or memory to their apps without stitching together multiple provider SDKs.

  _Another abstraction layer promising to unify the AI ecosystem, because clearly what your stack needs is a vascular system for tokens and a 64-tool routing layer you hope you never have to debug at 2am._

  `llm` `sdk` `provider-abstraction` `typescript` `mcp`
  </details>

- **[routilux](https://github.com/lzjever/routilux)** `⭐ 86` `updated ≤180d` Routilux is a Python event-driven workflow orchestration library and CLI for composing concurrent, checkpoint-resumable data and AI pipelines with built-in state and error handling. <details><summary>More about</summary>

  It gives developers a code-first way to wire complex, durable LLM agent workflows and API orchestration without building custom state machines from scratch.

  _Yet another framework promising to tame your agent pipelines, just in case the four you already installed weren’t quite the ones that would finally make orchestration boring._

  `python` `workflow-orchestration` `event-driven` `agent-pipelines` `cli`
  </details>

- **[ChatAbstractions](https://github.com/andrewnguonly/chatabstractions)** `⭐ 84` `updated >1y` A collection of LangChain chat model abstractions that add dynamic failover, load balancing, chaos engineering, and custom routing on top of BaseChatModel. <details><summary>More about</summary>

  It lets developers build more resilient LLM chains by swapping, balancing, or sabotaging models at runtime without rewriting upstream LangChain code.

  _Because the only thing better than debugging a flaky LLM integration is deliberately injecting chaos into it and pretending it’s engineering discipline._

  `langchain` `llm-routing` `failover` `chaos-engineering`
  </details>

- **[ai-orchestra](https://github.com/langtail/ai-orchestra)** `⭐ 81` `updated >1y` A lightweight TypeScript library for orchestrating multiple AI agents with state transitions, built around Vercel's streamText as a simpler alternative to LangGraph. <details><summary>More about</summary>

  Developers building multi-agent workflows get a minimal, streaming-first orchestration layer with clear state control and low overhead compared to heavier graph frameworks.

  _Another proud entry in the growing genre where we wrap a three-file TypeScript library around an SDK and declare victory over the agent orchestration problem._

  `agent-orchestration` `typescript` `state-machine` `vercel-ai-sdk` `multi-agent`
  </details>

- **[langchain_yt_tools](https://github.com/venuv/langchain_yt_tools)** `⭐ 76` `updated >1y` Langchain_yt_tools provides two custom LangChain tools for searching YouTube videos by person name and transcribing them to text. <details><summary>More about</summary>

  It lets developers quickly pull video transcripts into LangChain workflows for RAG, summarization, or content analysis without leaving their Python environment.

  _Another niche wrapper that makes you wonder if you'll spend more time maintaining the tool than actually transcribing videos._

  `langchain` `youtube` `transcription`
  </details>

- **[pdfmux](https://github.com/nameetp/pdfmux)** `⭐ 62` `updated ≤90d` A self-healing PDF extraction CLI and Python library that routes pages through multiple backends and audits output quality, with optional LLM fallbacks and an MCP server for Claude Desktop. <details><summary>More about</summary>

  It gives developers a single pipeline to get clean Markdown or JSON out of messy PDFs for RAG and LLM workflows, with confidence scoring and automatic re-extraction.

  _Another essential piece of infrastructure for the modern stack where half your context window is fighting with a PDF that swore it had a reading order._

  `pdf-extraction` `rag` `mcp` `self-healing` `cli`
  </details>

- **[qwed-verification](https://github.com/qwed-ai/qwed-verification)** `⭐ 56` `updated ≤90d` An open-source Python framework that uses symbolic verification, math, and logic to deterministically verify LLM outputs, SQL, and tool calls before they execute in production. <details><summary>More about</summary>

  It lets developers define a trust boundary for agentic systems by blocking hallucinations, SQL injections, and invalid tool interactions using ground truth rather than hoping the model behaves.

  _We have finally reached the point where we need a formal verification layer just to confirm that the 'DELETE FROM users' query our assistant wrote wasn't an accidental career reset._

  `ai-security` `verification` `llm-safety` `deterministic` `aisecops`
  </details>

- **[Intelli](https://github.com/intelligentnode/intelli)** `⭐ 55` `updated ≤90d` A Python framework for building multi-model chatbots and agent workflows with unified provider access, sequential/graph flows, and MCP support. <details><summary>More about</summary>

  Developers can swap between OpenAI, Anthropic, Gemini, and local models with minimal code changes while composing multi-step agent flows.

  _Another unified abstraction layer promising seamless provider switching, just in case the ten other unified abstraction layers didn't quite unify hard enough._

  `python` `multi-model` `agent-flows` `mcp` `framework`
  </details>

- **[a2a-net](https://github.com/neuroglia-io/a2a-net)** `⭐ 53` `updated ≤180d` A .NET SDK and framework implementing the Agent-to-Agent (A2A) protocol to enable JSON-RPC based communication, discovery, and task orchestration between autonomous agents across different frameworks. <details><summary>More about</summary>

  It provides .NET developers with the core building blocks to make their agents interoperable with the emerging A2A standard without being locked into a specific vendor runtime.

  _Just when you thought you were safe from REST, your agents now require a formal JSON-RPC handshake and a NuGet package just to say hello to each other._

  `dotnet` `a2a` `agent-protocol` `interop` `csharp`
  </details>

- **[Langchain-hs](https://github.com/tusharad/langchain-hs)** `⭐ 52` `updated ≤180d` Haskell implementation of the LangChain framework for building LLM-powered applications. <details><summary>More about</summary>

  Provides Haskell developers with a familiar LangChain interface to compose LLMs, prompts, memory, agents, and vector stores in a functional ecosystem.

  _Yet another language port of LangChain, promising composability while subtly encouraging developers to reinvent the same agent patterns in yet another syntax._

  `langchain` `haskell` `llm-framework`
  </details>

- **[FastAPI Agents](https://github.com/blairhudson/fastapi-agents)** `⭐ 50` `updated >1y` A FastAPI extension that provides a uniform way to register, serve, and secure AI agents built with frameworks like PydanticAI, LlamaIndex, and CrewAI. <details><summary>More about</summary>

  It lets developers quickly expose multiple agent frameworks behind a single, high-performance FastAPI surface with built-in authentication and OpenAPI docs.

  _Because what the modern stack really needed was another abstraction layer to help us serve our proliferating agent frameworks from a single, overextended Python router._

  `fastapi` `agents` `deployment` `python` `api`
  </details>

- **[LLM-Engines](https://github.com/jdf-prog/llm-engines)** `⭐ 50` `updated >1y` A unified Python inference engine and library for running and comparing outputs across open-source (VLLM, SGLang, Together) and commercial LLMs (OpenAI, Claude, Mistral, Gemini, Grok) with verified consistency. <details><summary>More about</summary>

  Developers can standardize model calls and swap between local and hosted backends without rewriting inference logic or worrying about divergent outputs.

  _Yet another abstraction layer promising to unify the ecosystem, as if the ninth Python wrapper will finally heal the open-source community's collective fear of vendor lock-in._

  `inference` `llm` `abstraction` `python` `model-comparison`
  </details>

- **[Tiny-GraphRAG](https://github.com/limafang/tiny-graphrag)** `⭐ 45` `updated >1y` A minimal, educational Python implementation of GraphRAG that builds local knowledge graphs in Neo4j and supports local and global queries. <details><summary>More about</summary>

  It gives developers a simple, code-first foundation for experimenting with graph-based retrieval-augmented generation without adopting a heavier framework.

  _Yet another weekend GraphRAG implementation proving that the fastest way to learn RAG is to reinvent it, push to GitHub, and declare victory with 45 stars._

  `graphrag` `rag` `knowledge-graph` `neo4j` `retrieval`
  </details>

- **[futuresearch-python](https://github.com/futuresearch/futuresearch-python)** `⭐ 42` `updated ≤30d` A Python SDK and MCP-compatible service that deploys teams of web research agents to forecast, score, classify, and gather data at scale via Google-sign-in. <details><summary>More about</summary>

  It lets developers orchestrate thousands of parallel research agents directly from Python or their AI coding assistant without managing infrastructure.

  _You can now outsource 10,000 rows of data labeling to a squad of autonomous researchers, which neatly relieves you of having to admit you never actually liked cleaning data._

  `research-agents` `python-sdk` `mcp` `data-labeling`
  </details>

- **[agent-swarm-kit](https://github.com/tripolskypetr/agent-swarm-kit)** `⭐ 36` `updated ≤90d` A TypeScript npm library for building orchestrated, framework-agnostic multi-agent AI systems with session management, agent testing utilities, and MCP server connectivity. <details><summary>More about</summary>

  It gives developers a lightweight, model-agnostic way to wire multiple agents into swarms with shared Redis state, background tasks, and testing hooks without handing control to a hosted platform.

  _Because what every TypeScript developer needed was a POSIX fork metaphor for chatbots so their sales-agent swarm can crunch portfolio analytics in Redis while the user waits._

  `typescript` `multi-agent` `agent-framework` `mcp-ready` `swarm`
  </details>

- **[shifts](https://github.com/aaronrussell/shifts)** `⭐ 36` `updated >1y` Shifts is an Elixir framework for composing autonomous AI agent workflows using multiple LLM backends like Anthropic and Ollama. <details><summary>More about</summary>

  It lets Elixir developers wire together multi-agent workflows and tools in a language-native way instead of reaching for Python-first stacks.

  _Because nothing says productive quite like orchestrating a swarm of experimental agents in a pre-0.1 framework to automate the chores you used to do while pretending to be busy._

  `elixir` `agent-workflows` `multi-agent` `llm` `framework`
  </details>

- **[subagents-pydantic-ai](https://github.com/vstorm-co/subagents-pydantic-ai)** `⭐ 36` `updated ≤90d` Subagent delegation library for Pydantic AI that enables nested, dynamically spawned specialist agents with sync/async/auto execution modes and runtime agent creation. <details><summary>More about</summary>

  Lets developers build hierarchical multi-agent systems in Python where parent agents can delegate to specialized subagents that run in parallel or background, with automatic mode selection based on task complexity.

  _Because the only thing better than one opaque LLM agent is a recursive tree of them that can spawn children faster than you can debug the parent._

  `pydantic-ai` `multi-agent` `python` `subagents` `agent-framework`
  </details>

- **[s2-sdk-typescript](https://github.com/s2-streamstore/s2-sdk-typescript)** `⭐ 29` `updated ≤90d` Official TypeScript SDK for S2, a managed serverless service providing durable, real-time append-only streams with random read access. <details><summary>More about</summary>

  It gives developers a typed, programmable interface to build event-driven and streaming workflows on top of a managed durable stream store without rolling their own append-log infrastructure.

  _Another managed stream primitive enters the arena, just in case your current stack of queues, logs, and brokers wasn’t quite metastable enough._

  `typescript` `sdk` `streaming` `durable-streams` `real-time`
  </details>

- **[CoreAgent](https://github.com/coreagent-project/coreagent)** `⭐ 28` `updated ≤1y` CoreAgent is a lightweight Python framework for building LLM agents with shared stateful tools and a custom AIML protocol for structured model communication. <details><summary>More about</summary>

  It offers developers a simple, code-first way to attach persistent tools to agents and sidesteps common JSON escaping issues with a bespoke prompt protocol.

  _Just when you thought the MCP wars were settling down, a new framework arrives to declare protocol standards useless and invent its own character-escaping salvation._

  `agent-framework` `stateful-tools` `python` `aiml` `llm`
  </details>

- **[a2a-langgraph](https://github.com/mifune-dev/a2a-langgraph)** `⭐ 27` `updated >1y` A sample implementation that exposes a LangGraph ReAct agent as a server compliant with Google's Agent-to-Agent (A2A) protocol for multi-turn, streaming currency conversion. <details><summary>More about</summary>

  It provides a concrete reference for developers looking to standardize how LangGraph agents communicate and stream responses using the emerging A2A protocol.

  _We have successfully reached the point where we need a protocol just to negotiate which two agents get to argue about the USD to INR exchange rate._

  `a2a` `langgraph` `multi-agent` `protocol` `python`
  </details>

- **[Hyv](https://github.com/blib-la/hyv)** `⭐ 24` `updated >1y` Hyv is a TypeScript library and set of adapters for chaining multiple AI models and API agents to handle complex, multi-step tasks. <details><summary>More about</summary>

  It provides a plug-and-play architecture for developers to orchestrate different LLMs and generative models using a unified API.

  _Yet another framework promising to seamlessly unify the ecosystem, ensuring you can spend your afternoon wiring adapters together instead of shipping code._

  `agents` `typescript` `llm` `library` `orchestration`
  </details>

- **[AgentOS](https://github.com/the-swarm-corporation/agentos)** `⭐ 23` `updated ≤1y` AgentOS is a single-file, SDK-based Python implementation of Karpathy's Agent OS architecture that provides a unified interface for multiple LLMs, browser automation, and multimodal tooling to build autonomous agents. <details><summary>More about</summary>

  It offers developers a lightweight, extensible foundation to spin up autonomous agents with built-in browser control, video/audio generation, and terminal operations without wiring together disparate libraries.

  _Yet another 'minimal, production-ready' agent OS that promises to unify the entire stack, proving that the best way to prepare for AGI is to install a single-file SDK and cross your fingers._

  `agents` `sdk` `multi-agent` `automation` `karpathy`
  </details>

- **[SwiftSwarm](https://github.com/jamesrochabrun/swiftswarm)** `⭐ 23` `updated ≤1y` A Swift framework for lightweight multi-agent orchestration that enables conversational handoffs between agents using the Chat Completions API. <details><summary>More about</summary>

  iOS and Swift developers gain a native, ergonomic toolkit for building multi-agent flows without leaving the Apple ecosystem or switching to Python/Node.js frameworks.

  _Now you can orchestrate agent chaos in Swift, proving once again that no language community is safe from the irresistible urge to build yet another multi-agent framework._

  `swift` `multi-agent` `orchestration` `framework` `ios`
  </details>

- **[a2a4j](https://github.com/pheonixhkbxoic/a2a4j)** `⭐ 17` `updated >1y` A Java SDK and Spring Boot scaffold implementing Google's Agent-to-Agent (A2A) protocol for building interoperable, multi-vendor AI agents. <details><summary>More about</summary>

  It gives Java enterprise developers a native way to wire autonomous agents together using an emerging open standard instead of brittle, custom glue code.

  _Just what every Spring Boot shop needed: another interoperability protocol so your agents can argue with each other in between Kafka topics._

  `java` `a2a-protocol` `agent-interop` `spring-boot` `enterprise-ai`
  </details>

- **[nestjs-a2a](https://github.com/thestupd/nestjs-a2a)** `⭐ 16` `updated >1y` A NestJS library and module for implementing Google's Agent-to-Agent (A2A) protocol to build type-safe, streaming-capable agents with JSON-RPC 2.0 compliant APIs. <details><summary>More about</summary>

  It allows NestJS developers to embed standardized agent communication and task management directly into their existing backend services without switching stacks.

  _We've successfully reached the point where our backend frameworks now need dedicated libraries just to teach our agents how to politely nod at other agents._

  `nestjs` `a2a` `agent-communication` `typescript`
  </details>

- **[t2000](https://github.com/mission69b/t2000)** `⭐ 16` `updated ≤90d` t2000 is a TypeScript SDK, CLI, and MCP server providing agentic infrastructure for building conversational finance applications on the Sui blockchain. <details><summary>More about</summary>

  It gives developers a programmable way to embed DeFi operations—like lending, swapping, and payments—directly into AI agents or LLM workflows via a standardized SDK and MCP interface.

  _Finally, your AI agent can independently manage a high-yield savings portfolio on a blockchain you don't understand, just in case you were running low on sources of existential financial anxiety._

  `defi` `sui` `mcp-server` `typescript` `agent-infrastructure`
  </details>

- **[agoragentic-integrations](https://github.com/rhein1/agoragentic-integrations)** `⭐ 13` `updated ≤90d` SDKs, MCP tooling, and protocol adapters for Agoragentic Agent OS, enabling deployed agents to route paid tasks, manage context via Micro ECF, and settle USDC transactions on Base L2. <details><summary>More about</summary>

  It gives developers a governed runtime and SDKs to deploy agents with budgets, wallets, and marketplace access instead of wiring raw provider APIs.

  _Another agent runtime promising paid work and crypto receipts, because what every codebase really needed was a smart contract for its chatbot’s to-do list._

  `agent-os` `mcp` `sdk` `micro-ecf` `usdc`
  </details>

- **[ruby-openai-swarm](https://github.com/graysonchen/ruby-openai-swarm)** `⭐ 13` `updated >1y` A Ruby gem port of OpenAI's Swarm framework for lightweight, educational multi-agent orchestration using handoff and routine patterns. <details><summary>More about</summary>

  It lets Ruby developers experiment with multi-agent handoff patterns and plug into providers like OpenRouter or DeepSeek without leaving their native ecosystem.

  _Now you can orchestrate agents in Ruby while everyone else is doing it in Python, ensuring your dependency stack remains pristine even as your architectural complexity rivals a distributed system from 2008._

  `ruby` `multi-agent` `orchestration` `swarm` `educational`
  </details>

- **[Flux0](https://github.com/flux0-ai/flux0)** `⭐ 12` `updated ≤1y` A Python framework for deploying and managing AI agents with multi-agent support, session management, and real-time event streaming via JSON patches. <details><summary>More about</summary>

  It provides developers with a unified backend to orchestrate agents from LangGraph or PydanticAI while handling the tricky parts of stateful sessions and streaming UIs.

  _Another valiant attempt to wrap the chaos of modern agent frameworks into a single 'unified' backend, ensuring you can now debug your streaming JSON patches at scale._

  `agent-framework` `multi-agent` `session-management` `streaming` `llm-agnostic`
  </details>

- **[mdma](https://github.com/mobilereality/mdma)** `⭐ 12` `updated ≤90d` MDMA extends Markdown with interactive components like forms, approval gates, and webhooks so LLMs can generate actionable, schema-driven documents instead of plain text. <details><summary>More about</summary>

  Developers can define structured MDMA specs that let AI assistants return validated, interactive UI components directly in Markdown, eliminating fragile text parsing and custom UI per use case.

  _We have successfully evolved AI conversations from plain text to interactive Markdown forms, which is definitely not just rebuilding HTML forms with extra steps and a tokenizer._

  `markdown` `interactive-documents` `llm-integration` `react` `mcp`
  </details>

- **[LmScript](https://github.com/lucasavila00/lmscript)** `⭐ 10` `updated >1y` A TypeScript suite for building controllable language model interactions that integrates with local serving runtimes like SGLang and vLLM. <details><summary>More about</summary>

  It gives developers a structured, code-first way to script constrained LLM outputs against self-hosted local models instead of relying on generic cloud APIs.

  _Yet another TypeScript wrapper enters the ring, proving that before we truly master AI, we must first master wrapping the wrappers that wrap the runtimes._

  `typescript` `local-ai` `llm-control` `sglang` `vllm`
  </details>

- **[simplefunctions-cli](https://github.com/spfunctions/simplefunctions-cli)** `⭐ 10` `updated ≤90d` A CLI tool for interacting with prediction-market infrastructure on Kalshi and Polymarket, exporting structured JSON for coding agents. <details><summary>More about</summary>

  It provides a standardized, agent-ready interface for querying live market state and running thesis workflows, bridging prediction markets and AI automation.

  _Now your trading bot can have the same context-engineering anxiety as your codebase, just with significantly more volatile stakes._

  `cli` `prediction-markets` `trading` `mcp` `automation`
  </details>

- **[swarm-ai](https://github.com/intelliswarm-ai/swarm-ai)** `⭐ 10` `updated ≤90d` A Java-based multi-agent orchestration framework built on Spring AI and Spring Boot that coordinates agents using declarative YAML workflows, dynamic skill generation, and enterprise guardrails like budget enforcement and RBAC. <details><summary>More about</summary>

  It gives JVM teams a typed, enterprise-grade agent runtime with governance, approval gates, and observability baked in, without forcing a move to Python-based orchestration stacks.

  _Just what every Java shop needed: another YAML-driven abstraction layer to manage, except now it spins up RL-powered agents that dynamically generate their own skills and judge whether they succeeded._

  `java` `spring-ai` `multi-agent` `orchestration` `enterprise`
  </details>

- **[alaya](https://github.com/securityronin/alaya)** `⭐ 9` `updated ≤90d` Alaya is an embeddable Rust memory engine for conversational AI agents that applies neuroscience-grounded memory dynamics—such as dual-strength forgetting, retrieval-induced suppression, and Hebbian co-activation—to store, retrieve, and decay agent memories using a single SQLite file. <details><summary>More about</summary>

  It replaces flat-file agent memory with typed stores and ranked retrieval, directly addressing the token waste and structural drift that plague agents relying on MEMORY.md-style context dumping.

  _Finally, a memory system sophisticated enough to forget your bad ideas using Buddhist psychology, sparing you the existential weight of explaining to an LLM why you put that auth logic in a controller three months ago._

  `memory` `rust` `embeddable` `mcp-compatible` `neuroscience`
  </details>

- **[axint](https://github.com/agenticempire/axint)** `⭐ 9` `updated ≤30d` Axint is an Apple-native execution layer and compiler that translates TypeScript, Python, or JSON definitions into Swift code, validates Apple-specific rules, and generates repair packets for AI coding agents. <details><summary>More about</summary>

  It abstracts away verbose Apple boilerplate for App Intents, SwiftUI, and WidgetKit, allowing coding agents to operate through a smaller contract and automated fix cycles.

  _Finally, your AI agent can generate SwiftUI widgets that compile, fail validation, read the Fix Packet, and generate them again with the same doomed confidence._

  `swift` `apple` `compiler` `ai-agents` `mcp`
  </details>

- **[swarm-go](https://github.com/feiskyer/swarm-go)** `⭐ 8` `updated >1y` An ergonomic, lightweight multi-agent orchestration framework for Go, inspired by OpenAI's Swarm, that enables developers to build event-driven, composable systems with native function calls. <details><summary>More about</summary>

  It provides Go developers with a minimalistic, native way to orchestrate multiple LLM-powered agents without the overhead of larger Python-centric frameworks.

  _Another day, another framework proving that the hottest new programming language is definitely Go, as long as you wrap it around a GPT-4o call._

  `go` `multi-agent` `orchestration` `framework` `event-driven`
  </details>

- **[CraftFlow](https://github.com/scholarlords/craftflow)** `⭐ 5` `updated >1y` CraftFlow is a Python workflow orchestration framework for building processing pipelines, including RAG systems and multi-agent collaborations, via a code-first SDK. <details><summary>More about</summary>

  It provides developers with a structured library to define complex async workflows, tool registries, and agent nodes directly in code rather than a visual UI.

  _Just what the ecosystem needed: yet another way to describe a graph in Python while wondering if this specific node-based framework will still have commits next month._

  `workflow` `orchestration` `rag` `multi-agent` `python`
  </details>

- **[Voltmachines](https://github.com/ssdeanx/voltmachines)** `⭐ 4` `updated >1y` A TypeScript framework for building orchestrated multi-agent systems with persistent memory, tool integration, and a supervisor-based delegation architecture. <details><summary>More about</summary>

  It gives developers a code-first way to assemble specialized agent teams with shared memory and tooling, without relying on no-code workflow builders.

  _We have successfully reached the point where wiring together ten specialized agents to write a function feels like simpler, cleaner engineering than just writing the function._

  `multi-agent` `typescript` `memory` `tools` `orchestration`
  </details>

- **[aegis-dq](https://github.com/aegis-dq/aegis-dq)** `⭐ 3` `updated ≤30d` An agentic framework that uses LLMs to generate data quality rules from policy documents, validate data, and propose SQL remediations. <details><summary>More about</summary>

  It automates the transition from static policy documentation to active, automated data validation and root-cause analysis within engineering pipelines.

  _Now you can feel the specific anxiety of an LLM diagnosing your pipeline failures with more confidence than your senior data engineer._

  `data-engineering` `agentic-ai` `data-quality` `sql` `mlops`
  </details>

- **[tap](https://github.com/leonting1010/tap)** `⭐ 3` `updated ≤90d` Taprun is a local-first browser automation tool that uses AI to compile website interactions into deterministic .plan.json programs that can be replayed forever without additional LLM tokens. <details><summary>More about</summary>

  It eliminates recurring AI costs for web scraping and automation by front-loading the intelligence once, then running purely deterministic replays with built-in breakage detection via `tap verify`.

  _Finally, a way to commit your brittle web scrapers to git as JSON and pretend they were deterministic all along, right up until the moment the DOM shifts and your $0.42 "compile once" investment becomes a lie._

  `browser-automation` `scraping` `mcp` `deterministic` `zero-token`
  </details>

- **[waveguardclient](https://github.com/gpartin/waveguardclient)** `⭐ 3` `updated ≤90d` A Python SDK and MCP server for the WaveGuard API, providing stateless, physics-based anomaly detection for any data type via a single API call. <details><summary>More about</summary>

  It offers developers a zero-config alternative to ML-based anomaly detection that requires no training pipelines, model management, or data science expertise.

  _Wave physics is the new 'blockchain': the perfect excuse to avoid writing a single sklearn import while still claiming you solved anomaly detection._

  `anomaly-detection` `mcp-server` `python-sdk` `api-client`
  </details>

- **[agenium](https://github.com/aganium/agenium)** `⭐ 2` `updated ≤180d` AGENIUM is a developer SDK and protocol implementation for the agent:// URI scheme, providing identity, discovery, and stateful messaging for AI agents with mTLS and MCP compatibility. <details><summary>More about</summary>

  It offers a standardized DNS-like layer for agents to discover and securely communicate with one another, aiming to solve the fragmentation in agent-to-agent connectivity.

  _We have successfully invented DNS for the agent web, meaning you can now pay for a domain name just to watch two bots argue with each other over mTLS._

  `agent-protocol` `a2a` `mcp` `sdk` `dns`
  </details>

- **[Mamba Agents](https://github.com/sequenzia/mamba-agents)** `⭐ 2` `updated ≤180d` A lightweight Python framework built on pydantic-ai that provides production-ready infrastructure for building AI agents, including context window management, token tracking, and observability. <details><summary>More about</summary>

  It handles the operational complexity of scaling agent conversations—token limits, cost estimation, and context compaction—so developers can focus on agent logic rather than infrastructure plumbing.

  _Another thin wrapper to help you forget that your 'agent' is just a fancy loop around a chat completion endpoint with a billing meter attached._

  `pydantic-ai` `agent-framework` `token-tracking` `context-management` `observability`
  </details>

- **[sentinels](https://github.com/garyblankenship/sentinels)** `⭐ 2` `updated ≤1y` A Laravel package for building agent-based task orchestration pipelines with invokable agents, event-driven workflows, and transparent async execution. <details><summary>More about</summary>

  It lets Laravel developers decompose monolithic service classes into testable, observable agents that can run sequentially or in parallel without learning new async patterns.

  _You can now orchestrate AI agents inside the same framework that is already orchestrating your weekends into sprint retrospectives._

  `laravel` `agent-orchestration` `php` `workflow` `pipeline`
  </details>

- **[tuning-engines-cli](https://github.com/cerebrixos-org/tuning-engines-cli)** `⭐ 2` `updated ≤30d` A CLI and MCP server for fine-tuning open-source LLMs on code repositories using specialized agents like Cody for autocomplete and SIERA for bug-fix patterns. <details><summary>More about</summary>

  It lets developers train domain-specific coding models on their own codebase patterns without managing GPU infrastructure, bridging the gap between generic LLMs and team-specific code styles.

  _Yet another frontier where 'owning your sovereign AI model' means paying to discover that your codebase's naming conventions weren't worth 7 billion parameters after all._

  `fine-tuning` `cli` `mcp` `llm` `code-models`
  </details>

- **[Agently](https://github.com/maplemx/agently)** `⭐ 1` `updated ≤90d` Agently is a Python framework for building GenAI applications with event-driven TriggerFlow orchestration, contract-first output control, and model-agnostic switching. <details><summary>More about</summary>

  It gives developers structured primitives to turn unpredictable LLM behavior into testable, maintainable production workflows without rewriting code to swap models.

  _Yet another framework promising to tame LLM chaos, ensuring you can now debug your agent logic and your workflow graph simultaneously._

  `agents` `framework` `python` `orchestration` `llm`
  </details>

- **[distributed-semantic-cache-and-stateful-routing-system](https://github.com/redjackfred/distributed-semantic-cache-and-stateful-routing-system)** `⭐ 1` `updated ≤90d` A self-hosted Go and Python system that uses consistent hashing and Redis vector search to cache semantically similar LLM responses and route requests to warm workers. <details><summary>More about</summary>

  It gives developers a drop-in infrastructure layer to reduce LLM API costs and latency by catching paraphrased queries before they ever hit a model.

  _Yet another reminder that the most impressive part of your AI stack is the glue you have to invent just to stop paying OpenAI for the same paraphrased question fifty times._

  `semantic-cache` `llmops` `self-hosted` `vector-search` `scaling`
  </details>

- **[echolon](https://github.com/dolphinquant/echolon)** `⭐ 1` `updated ≤30d` An LLM-agent-native backtest framework designed for conducting quantitative futures research. <details><summary>More about</summary>

  It prevents agent hallucination in financial workflows by providing typed tools, structured error codes, and a catalog of technical indicators.

  _Because even the most sophisticated LLMs can't be trusted to remember the difference between a moving average and a fever dream in a trading terminal._

  `quant-trading` `mcp-server` `backtesting` `llm-agents` `python`
  </details>

- **[edict](https://github.com/sowiedu/edict)** `⭐ 1` `updated ≤90d` A programming language purpose-built for AI agents where programs are JSON ASTs, validated by a type/effect system and Z3 contracts, then compiled to WASM via an MCP server interface. <details><summary>More about</summary>

  It removes parsers and syntax ambiguity so agents can generate, verify, and safely execute code through structured error loops and sandboxing.

  _We have finally achieved the future where the only person who can read the source code is the large language model that wrote it._

  `ai-agents` `programming-language` `mcp` `wasm` `formal-verification`
  </details>

- **[elisym](https://github.com/elisymlabs/elisym)** `⭐ 1` `updated ≤30d` Open infrastructure for AI agents to discover, hire, and pay each other using Nostr relays and Solana payments, with an SDK, CLI, and MCP server for integration. <details><summary>More about</summary>

  It provides the decentralized plumbing for agents to advertise capabilities and transact without a central platform, making it a building block for peer-to-peer agent marketplaces.

  _Finally, a way for your AI agents to go into debt to each other on a blockchain you don't control, removing the last human bottleneck from bad automated decisions._

  `agents` `mcp` `sdk` `decentralized` `payments`
  </details>

- **[revettr-python](https://github.com/alexanderlawson17/revettr-python)** `⭐ 1` `updated ≤90d` A Python client SDK for the Revettr API that scores counterparty risk for AI agents by analyzing domain, IP, wallet, and sanctions data. <details><summary>More about</summary>

  It gives agent developers a programmatic way to gate financial transactions with risk scores tailored for autonomous commerce on protocols like x402.

  _We have finally reached the point where agents need their own credit bureaus, and developers get to debug HTTP 402 loops instead of just paying Stripe._

  `agent-commerce` `risk-scoring` `python-sdk` `x402` `fintech`
  </details>

- **[systemr-python](https://github.com/system-r-ai/systemr-python)** `⭐ 1` `updated ≤90d` A Python SDK for agents.systemr.ai providing 55 MCP-compatible tools and 25 broker integrations for building AI-driven trading agents with institutional-grade risk management. <details><summary>More about</summary>

  It gives developers a code-first way to wire LLM agents into live brokerage accounts with pre-built position sizing, risk gates, and performance analytics.

  _You can now delegate your portfolio to a Python script that calls an LLM, because apparently your own panic-selling wasn't fast enough._

  `python` `mcp` `trading` `agent-framework` `fintech`
  </details>

- **[Agent Cost Guardrails](https://github.com/sapph1re/agent-cost-guardrails)** `⭐ 0` `updated ≤90d` A pure Python middleware library that enforces hard budget limits, rate limits, and circuit breakers for AI agent frameworks including CrewAI, AutoGen, and LangGraph. <details><summary>More about</summary>

  It gives developers a zero-infrastructure way to prevent runaway API spend by tracking costs and halting agents when budgets are exceeded.

  _We now need a dedicated guardrail library to protect our budgets from the very agents we built to save us money._

  `cost-management` `guardrails` `python` `agent-frameworks` `middleware`
  </details>

- **[cosmergon-agent](https://github.com/rkocosmergon/cosmergon-agent)** `⭐ 0` `updated ≤90d` A Python SDK and MCP server for deploying and managing autonomous AI agents that participate in a tick-based Conway's Game of Life economy with energy currency and marketplace trading. <details><summary>More about</summary>

  Developers can script agents using an SDK, run them as NPCs in a persistent multiplayer economy, and connect them to coding assistants via MCP tools for observation and benchmarking.

  _We have finally reached the point where AI agents can earn passive income through referral codes in a simulated Conway's Game of Life economy while you manually debug a null pointer at 2am._

  `agents` `mcp` `sdk` `simulation` `benchmark`
  </details>

- **[Flyflow](https://github.com/flyflow-devs/.github)** `⭐ 0` `updated >1y` Flyflow is open-source API middleware written in Go that sits in front of LLM applications to reduce latency, increase token limits, and add enterprise security. <details><summary>More about</summary>

  It lets developers optimize response times and throughput for LLM-powered apps without changing model providers or rewriting application logic.

  _Yet another layer of middleware promising 5x gains, because clearly what your fragile LLM stack needs is more Go binaries between you and the model._

  `middleware` `llm-ops` `latency` `self-hosted` `golang`
  </details>

- **[liquid](https://github.com/ertad-family/liquid)** `⭐ 0` `updated ≤30d` An AI-driven integration layer that automatically discovers API shapes and maps them to typed records without requiring hand-written connectors. <details><summary>More about</summary>

  It eliminates the manual toil of writing and maintaining adapters for diverse data sources, from REST and GraphQL to industrial protocols like Modbus and OPC UA.

  _The dream of never writing another API adapter again is only a few 'auto-approve' clicks away from a production outage caused by a hallucinated mapping._

  `api-integration` `mcp` `auto-discovery` `data-sync` `agents`
  </details>

- **[ntriq-agentshop](https://github.com/ntriq-gh/ntriq-agentshop)** `⭐ 0` `updated ≤90d` A pay-per-use API marketplace exposing local AI inference endpoints (document intelligence, code review, PII detection, etc.) via x402 micropayments in USDC on Base. <details><summary>More about</summary>

  Developers can let AI agents consume document and code intelligence APIs with gasless, per-call USDC payments and no API keys or subscriptions.

  _We’ve reached the point where agents need their own crypto wallet just to pay for a code review, because SaaS subscriptions were far too simple._

  `x402` `micropayments` `local-inference` `api-marketplace` `base-usdc`
  </details>

- **[yieldagentx402-sdks](https://github.com/fabio662/yieldagentx402-sdks)** `⭐ 0` `updated ≤30d` A collection of SDKs and integration tools for the YieldAgentX402 platform, enabling secure, policy-gated financial execution for AI agents across 18 blockchain networks. <details><summary>More about</summary>

  It provides a standardized way for developers to give autonomous agents custody-free ability to settle payments and verify receipts using TEE attestation and MPC wallets.

  _Because managing agent security is hard enough without having to decide which of the 18 chains your autonomous bot should accidentally drain first._

  `sdk` `mcp` `fintech` `blockchain` `agents`
  </details>

- **[agent-cost-guardrails](https://npmjs.com/package/agent-cost-guardrails)** An npm package that provides guardrails and cost controls for AI agent interactions. <details><summary>More about</summary>

  It helps developers prevent runaway LLM token spend when building or running autonomous agent workflows.

  _Because nothing says confidence in your agent architecture like wrapping it in a safety net before the tokens even start flowing._

  `cost-control` `agent-safety` `npm-package` `guardrails`
  </details>

- **[AutoGen Documentation](https://microsoft.github.io/autogen)** AutoGen is a framework for building and orchestrating multi-agent AI workflows, developed by Microsoft. <details><summary>More about</summary>

  It provides developers with a structured code-first approach to coordinating multiple LLM agents to solve complex, multi-step coding and reasoning tasks.

  _Just when you thought managing one hallucinating intern was hard, Microsoft provides the framework to hire an entire team of them, complete with standup meetings._

  `multi-agent` `framework` `microsoft` `orchestration`
  </details>

- **[Code Interpreter SDK](https://e2b.dev/docs)** E2B provides isolated, fast Linux sandbox VMs and SDKs that let developers safely run agent code, tools, and data processing in disposable cloud environments. <details><summary>More about</summary>

  It gives coding agents and AI apps a secure, programmable runtime with terminal access, filesystem control, and GPU/desktop capabilities without risking the host machine.

  _We have now successfully abstracted 'run untrusted code' into yet another SaaS primitive, so your agent can confidently rm -rf / an entire VM that costs exactly as much as your monthly coffee budget._

  `sandbox` `agent-runtime` `code-execution` `cloud-vm` `sdk`
  </details>

- **[CrewAI](https://crewai.io)** CrewAI is a framework for orchestrating role-playing, autonomous AI agents to collaborate on complex tasks using a code-first approach. <details><summary>More about</summary>

  It provides developers with a structured Python framework to build multi-agent systems where specialized agents can role-play, delegate tasks, and collaborate on complex workflows.

  _Yet another framework promising that if you just define enough 'agents' with cute job titles, your codebase will magically automate itself rather than becoming a distributed system of hallucinations._

  `agents` `framework` `multi-agent` `python`
  </details>

- **[Fixie](https://www.ultravox.ai)** Ultravox is a real-time voice AI infrastructure layer providing APIs and SDKs to build speech-native agents that process audio directly without intermediate transcription. <details><summary>More about</summary>

  It gives developers a low-latency, speech-native stack and SDKs to build voice agents that preserve paralinguistic cues and scale across telephony and web platforms.

  _Just what we needed: another reason to wonder whether your next support ticket will be resolved by a model that can detect sarcasm in milliseconds._

  `voice-ai` `infrastructure` `real-time` `speech` `sdk`
  </details>

- **[LangChain](https://www.langchain.com)** LangChain provides the open-source frameworks (LangChain, LangGraph, DeepAgents) and the LangSmith platform for building, observing, evaluating, and deploying AI agents. <details><summary>More about</summary>

  It offers developers a structured stack to move from rapid agent prototyping to production-grade observability, evaluation, and deployment across multiple model providers.

  _The framework that taught everyone to chain LLM calls now also wants to sell you the dashboard to figure out why those chains are burning your GPU budget._

  `agents` `observability` `frameworks` `evaluation` `deployment`
  </details>

- **[LlamaIndex](https://www.llamaindex.ai)** LlamaParse is a cloud and local document parsing service that uses vision-language models and agentic workflows to convert complex PDFs, images, and office documents into structured, LLM-ready outputs. <details><summary>More about</summary>

  It handles the messy reality of tables, charts, and handwritten notes so developers can stop writing fragile regex parsers and start building RAG pipelines that actually work on real-world documents.

  _We have successfully automated the soul-crushing task of reading PDFs, only to create a new class of engineer whose entire job is prompt-tuning the OCR that replaced the intern._

  `ocr` `document-parsing` `rag` `llm-ready` `agentic`
  </details>

- **[OpenRouter](https://openrouter.ai)** OpenRouter is a unified API gateway and management interface for accessing over 400 LLMs across 60+ providers with a single OpenAI-compatible endpoint. <details><summary>More about</summary>

  It allows developers to switch between models, optimize for price and latency, and implement fallback logic without rewriting provider-specific integration code.

  _Yet another abstraction layer promising to solve the 'which model should I use' crisis, ensuring you can now over-engineer your provider strategy instead of just picking one and shipping._

  `llm` `api-gateway` `model-router` `provider-abstraction`
  </details>

- **[Pinecone](https://www.pinecone.io)** Pinecone is a fully managed vector database built for AI applications, providing fast vector search, retrieval, and memory infrastructure for agents and RAG pipelines. <details><summary>More about</summary>

  It gives developers a ready-made retrieval layer for semantic search, RAG, and agent memory without running or tuning their own vector infrastructure.

  _Yet another excuse to spend an afternoon wiring up a vector database, importing your docs, and discovering that your agent still hallucinates with confidence at 150 milliseconds._

  `vector-database` `rag` `agent-memory` `retrieval` `mcp`
  </details>

- **[Portkey](https://portkey.ai)** Portkey is a unified LLM gateway and observability platform for managing, routing, and monitoring model requests across providers. <details><summary>More about</summary>

  It gives developers a single control point to switch providers, handle fallbacks, and trace usage without rewriting model integration code.

  _Yet another abstraction layer so you can feel virtuous about vendor independence while still panicking over why your latency graph looks like a cardiogram._

  `llmops` `gateway` `observability` `provider-abstraction`
  </details>

- **[React Agent](https://reactagent.io)** A React-based framework for building autonomous AI agents that reason and act using the ReAct pattern. <details><summary>More about</summary>

  It provides a structured way to build agents that can iteratively reason about tasks and execute actions using external tools.

  _Yet another abstraction layer promising autonomous agency, because clearly what the ecosystem needs is more ways to watch an LLM loop until it runs out of tokens._

  `react` `agents` `autonomous` `framework`
  </details>

- **[Riza](https://riza.io)** A production-ready, isolated runtime API and SDKs for safely executing untrusted LLM-generated code in Python, TypeScript, and Go. <details><summary>More about</summary>

  It lets developers safely delegate code execution to AI agents without risking their production environment, handling billions of executions monthly for AI-native companies.

  _We have finally reached the point where we need a specialized firewall just to let the AI run the Python it insisted on writing._

  `code-execution` `sandbox` `llm-infrastructure` `sdk`
  </details>

- **[shopgraph.dev](https://shopgraph.dev)** ShopGraph is an API that extracts product data from URLs, attaching per-field confidence scores and provenance so developers and agents can decide what data to trust. <details><summary>More about</summary>

  It gives commerce automation pipelines structured, normalized product data with visible extraction provenance, removing the guesswork from scraping at scale.

  _We have finally built an API that admits when it is guessing, which is more honesty than most of our own standups._

  `data-extraction` `e-commerce` `confidence-scoring` `api` `agent-ready`
  </details>

- **[Supadata](https://supadata.ai)** An API service that extracts transcripts, metadata, and structured data from web pages, YouTube, TikTok, Instagram, X, and Facebook content for AI training and retrieval pipelines. <details><summary>More about</summary>

  Developers building RAG pipelines, AI training sets, or social media analysis tools can reliably turn messy video and web content into clean JSON with a single API call.

  _Because nothing says 'production-grade AI infrastructure' like a Rick Astley transcript confirming your API key works at 2am._

  `api` `web-scraping` `youtube` `social-media` `rag`
  </details>

- **[Unstructured Platform](https://unstructured.io)** Unstructured.io is a platform and set of tools for ingesting, parsing, and transforming unstructured documents (PDFs, images, HTML) into structured formats for downstream LLM and RAG workflows. <details><summary>More about</summary>

  It solves the dirty work of cleaning messy enterprise documents so developers can reliably feed structured data into AI models, agents, and retrieval pipelines.

  _We have reached a point where half the engineering effort is just teaching the AI how to read a PDF without hallucinating the footer._

  `rag` `parsing` `documents` `ingestion`
  </details>

- **[Vanna.AI](https://vanna.ai)** Vanna is a framework and hosted platform for building AI agents that convert natural language questions into SQL queries across multiple databases and LLM providers. <details><summary>More about</summary>

  It lets developers embed a text-to-SQL agent into applications with built-in access control, memory, and observability instead of wiring these components together from scratch.

  _Yet another reminder that the hardest part of modern AI development is not the model, but building the admin panel, quota system, and audit logs you thought you wouldn't need._

  `text-to-sql` `agents` `database` `llm`
  </details>

- **[Vercel AI SDK](https://ai-sdk.dev)** A TypeScript toolkit from Vercel providing a unified SDK for generating text, structured objects, and tool calls across 100+ LLM models with built-in streaming and provider fallbacks. <details><summary>More about</summary>

  It lets developers build AI-powered applications and agents using a single API that abstracts away provider differences, streaming, and multi-model routing.

  _We have reached the point where the primary innovation is a polite abstraction layer that lets you pretend Anthropic, OpenAI, and Google are the same API, right before they all change their schemas again._

  `typescript` `sdk` `multi-model` `vercel` `agents`
  </details>

- **[X (Twitter)](https://x.com/e2b)** E2B is a code interpreting infrastructure platform designed to provide secure, sandboxed execution environments for AI applications and agents. <details><summary>More about</summary>

  Developers building AI agents can delegate code execution and file system operations to E2B's sandboxes, removing the need to manage their own isolated runtimes.

  _We have now successfully abstracted the act of running code so far away from the developer that the code executes in a sandbox, inside a container, inside a cloud, just to tell us if a sorting algorithm works._

  `code-interpreting` `sandbox` `ai-infrastructure` `agents`
  </details>