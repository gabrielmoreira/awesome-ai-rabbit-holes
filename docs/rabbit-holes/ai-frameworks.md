# AI Frameworks and SDKs

Frameworks, SDKs, and code-first building blocks for embedding AI behavior into software.

## Tools & Resources

- **[langchain](https://github.com/hwchase17/langchain)** `⭐ 135.9k` `updated ≤30d` LangChain is an open-source framework for building LLM-powered applications and agents, providing a standard interface for models, embeddings, and integrations. <details><summary>More about</summary>

  It simplifies AI application development by offering modular, interoperable components that allow developers to rapidly prototype and swap models without rebuilding their stack.

  _The ecosystem has spawned so many sub-packages and adjacent tools that simply choosing a version of LangChain has become a planning exercise requiring its own agent._

  `framework` `llm` `agents` `python` `typescript`
  </details>

- **[langchain](https://github.com/langchain-ai/langchain)** `⭐ 135.9k` `updated ≤30d` LangChain is a framework for building LLM-powered applications and agents, providing a standard interface for models, embeddings, and integrations via Python and TypeScript libraries. <details><summary>More about</summary>

  It allows developers to rapidly prototype and deploy AI applications with modular components and model interoperability, acting as the backbone for a massive ecosystem of AI tooling.

  _The industry has built an entire economy on abstracting the abstractions, ensuring that by the time you master the LangChain way, the recommended architecture will have pivoted to LangGraph, Deep Agents, or whatever the next layer of the onion reveals._

  `framework` `llm` `agents` `python` `typescript`
  </details>

- **[markitdown](https://github.com/microsoft/markitdown)** `⭐ 120.7k` `updated ≤30d` A Python utility built by Microsoft's AutoGen team that converts various file formats—including PDF, Office documents, images, and audio—into Markdown optimized for LLM consumption. <details><summary>More about</summary>

  It standardizes document ingestion for AI pipelines, allowing developers to easily feed structured local files into LLMs without wrestling with proprietary formats.

  _Yet another tool proving that while models can write symphonies of code, they still need a dedicated library just to read a PowerPoint slide._

  `markitdown` `llm-pipelines` `document-conversion` `microsoft` `python`
  </details>

- **[whisper](https://github.com/openai/whisper)** `⭐ 99k` `updated ≤30d` Whisper is a general-purpose Transformer sequence-to-sequence model from OpenAI for multilingual speech recognition, speech translation, and language identification, available as an importable Python package. <details><summary>More about</summary>

  It provides developers with a high-quality, open-weight foundation model and a simple CLI/Python API to integrate robust audio transcription and translation into applications without relying on external APIs.

  _Yet another reminder that while we have solved converting audio to text with near-human accuracy, we are still debugging CSS grid by hand._

  `speech-recognition` `audio` `foundation-model` `local-ai` `python`
  </details>

- **[paddleocr](https://github.com/paddlepaddle/paddleocr)** `⭐ 77.1k` `updated ≤30d` A Python-based OCR toolkit that converts PDFs and images into structured data formats like JSON and Markdown for downstream AI and LLM workflows. <details><summary>More about</summary>

  It provides the foundational document-parsing layer needed to feed clean, structured data into RAG pipelines, agents, and other LLM applications.

  _Yet another reminder that while models can debate philosophy, we are still writing 70,000-star libraries just to teach computers to read a tilted PDF._

  `ocr` `document-parsing` `rag` `pdf-extraction` `local-ai`
  </details>

- **[stable-diffusion](https://github.com/compvis/stable-diffusion)** `⭐ 73k` `updated >1y` A latent text-to-image diffusion model that generates images from text prompts and runs locally on GPUs with at least 10GB VRAM. <details><summary>More about</summary>

  It provides developers with a code-first framework and model weights to build, experiment with, and integrate image generation capabilities into their own applications.

  _The repository that kicked off the generative art gold rush, ensuring every developer's next side project involves trying to coax a GPU into rendering 'a cyberpunk toaster in the style of Van Gogh'._

  `diffusion` `text-to-image` `computer-vision` `local-models`
  </details>

- **[metagpt](https://github.com/foundationagents/metagpt)** `⭐ 67.7k` `updated ≤180d` MetaGPT is a multi-agent framework that assigns specialized roles such as product manager, architect, and engineer to LLMs to collaboratively generate software artifacts from a one-line requirement. <details><summary>More about</summary>

  It lets developers explore an SOP-driven multi-agent workflow that can autonomously produce user stories, specs, APIs, and code repos from a single prompt.

  _You no longer have to worry about messy team dynamics, because your new AI product manager, architect, and engineers will happily overwrite each other's work at machine speed._

  `multi-agent` `framework` `llm` `sdk` `code-generation`
  </details>

- **[metagpt](https://github.com/geekan/metagpt)** `⭐ 67.7k` `updated ≤180d` MetaGPT is a multi-agent framework that assigns LLM-based roles—such as product manager, architect, and engineer—to collaboratively interpret a one-line requirement and output structured software artifacts and code. <details><summary>More about</summary>

  It provides developers with a code-first SDK to orchestrate specialized AI roles that automate significant portions of the software design and generation lifecycle.

  _Finally, an entire simulated software company to argue with internally, so you can feel busy while your one-line prompt slowly scaffolds a 2048 game._

  `multi-agent` `llm-framework` `sdk` `code-generation` `ai-team`
  </details>

- **[llm-app](https://github.com/pathwaycom/llm-app)** `⭐ 59.8k` `updated ≤180d` A repository of ready-to-run templates for building RAG pipelines, enterprise search, and AI apps that sync live with data sources like SharePoint, Google Drive, S3, and Kafka. <details><summary>More about</summary>

  It provides developers with production-ready, Docker-friendly scaffolding to deploy scalable RAG systems without managing separate infrastructure for live data indexing.

  _Another opportunity to spend three days configuring a pipeline to answer questions against a PDF that hasn't been updated since 2019._

  `rag` `llmops` `enterprise-search` `vector-store` `pathway`
  </details>

- **[autogen](https://github.com/microsoft/autogen)** `⭐ 57.7k` `updated ≤30d` AutoGen is a Python framework for building multi-agent AI applications that can operate autonomously or collaborate with humans, currently in maintenance mode as Microsoft shifts focus to the new Agent Framework. <details><summary>More about</summary>

  It provides the building blocks for developers to orchestrate specialized AI agents that communicate, use tools via MCP, and solve complex tasks through code-first workflows.

  _Microsoft has kindly provided the classic 'abandon ship' migration guide to their new framework, ensuring you can rewrite your agent orchestration just in time for the next architectural paradigm shift._

  `multi-agent` `framework` `python` `orchestration` `mcp`
  </details>

- **[openmanus](https://github.com/foundationagents/openmanus)** `⭐ 56k` `updated ≤90d` OpenManus is an open-source implementation of the Manus agentic workflow, allowing developers to run a general-purpose LLM agent locally that can plan and execute tasks using configurable models and optional browser automation. <details><summary>More about</summary>

  It provides a transparent, self-hosted alternative to invite-only agent platforms, giving developers a code-level playground to inspect and extend autonomous coding workflows.

  _Now you can spend three hours setting up a local agent to automate the five-minute task you were procrastinating anyway._

  `agents` `open-source` `framework` `automation` `llm`
  </details>

- **[embedchain](https://github.com/embedchain/embedchain)** `⭐ 54.8k` `updated ≤30d` Mem0 (formerly Embedchain) is a memory layer framework and managed service that gives AI agents and assistants persistent, multi-level memory with semantic, keyword, and entity-based retrieval. <details><summary>More about</summary>

  It provides developers with a ready-to-integrate SDK and API for adding stateful, personalized memory to LLM apps without building custom RAG pipelines from scratch.

  _Just what every developer needs: another abstraction layer to debate while their agent confidently hallucinates yesterday's facts with upgraded recall._

  `memory` `rag` `llm` `agents` `sdk`
  </details>

- **[embedchain](https://github.com/mem0ai/mem0)** `⭐ 54.8k` `updated ≤30d` Mem0 provides a memory layer for AI agents and assistants that enables personalized interactions by retaining user preferences, session state, and agent history across interactions. <details><summary>More about</summary>

  Developers building AI agents can integrate a managed or self-hosted memory system via SDKs to maintain context and user preferences without building custom state management.

  _We have successfully abstracted away the joy of manually wiring Redis caches and vector databases just to help a chatbot remember your favorite color._

  `memory` `agents` `llm` `sdk` `python`
  </details>

- **[crewai](https://github.com/crewaiinc/crewai)** `⭐ 50.7k` `updated ≤30d` CrewAI is a Python framework for building and orchestrating multi-agent systems where autonomous AI agents collaborate to tackle complex tasks. <details><summary>More about</summary>

  It provides developers with a code-first toolkit to construct agentic workflows with event-driven control, granular task orchestration, and enterprise-grade observability.

  _Just when you thought your job was safe from a single hallucinating LLM, now you can orchestrate an entire crew of them to argue about the implementation details together._

  `multi-agent` `framework` `python` `orchestration` `llm`
  </details>

- **[crewai](https://github.com/joaomdmoura/crewai)** `⭐ 50.7k` `updated ≤30d` CrewAI is a Python framework for building and orchestrating role-playing, autonomous AI agents that collaborate to tackle complex tasks. <details><summary>More about</summary>

  It provides developers with a structured way to compose autonomous agents into production workflows, and includes an enterprise control plane for observability and scaling.

  _Another day, another framework promising that if we just align the right personas and give them enough autonomy, the agents will finish the sprint so you don't have to._

  `agents` `multi-agent` `orchestration` `framework` `python`
  </details>

- **[llama_index](https://github.com/jerryjliu/llama_index)** `⭐ 49.1k` `updated ≤30d` LlamaIndex is an open-source Python framework for building agentic applications with LLMs, providing tools for data ingestion, indexing, retrieval-augmented generation (RAG), and agent orchestration. <details><summary>More about</summary>

  It gives developers a modular, integration-rich SDK to connect LLMs with external data sources and build complex agent workflows without writing the plumbing from scratch.

  _Now you can spend three days evaluating whether your RAG pipeline needs a graph index or just a well-placed vector store, while your manager asks why the 'AI feature' isn't in production yet._

  `rag` `agents` `llm` `framework` `python`
  </details>

- **[litellm](https://github.com/berriai/litellm)** `⭐ 45.8k` `updated ≤30d` An open source AI gateway and Python SDK that provides a unified OpenAI-compatible interface for calling 100+ LLM APIs, with built-in cost tracking, load balancing, and guardrails. <details><summary>More about</summary>

  It lets developers swap LLM providers and manage gateway-level concerns like spend tracking and reliability without rewriting model integration code.

  _Yet another layer of abstraction promising that this time, vendor lock-in is solved by adding more infrastructure to maintain._

  `ai-gateway` `llmops` `sdk` `openai-compatible` `proxy`
  </details>

- **[milvus](https://github.com/milvus-io/milvus)** `⭐ 44.1k` `updated ≤30d` Milvus is a high-performance, cloud-native vector database written in Go and C++, designed for scalable vector search and AI application backends. <details><summary>More about</summary>

  It provides the persistence and retrieval layer developers need to build RAG pipelines, semantic search, and other LLM-powered features at scale.

  _Another essential piece of infrastructure that will sit perfectly alongside your five other vector stores until you inevitably rewrite everything to use the one your new hire preferred._

  `vector-database` `llm-infrastructure` `rag` `search` `go`
  </details>

- **[deepspeed](https://github.com/deepspeedai/deepspeed)** `⭐ 42.3k` `updated ≤30d` DeepSpeed is a deep learning optimization library for PyTorch that provides distributed training and inference capabilities via ZeRO, 3D parallelism, and memory offloading techniques. <details><summary>More about</summary>

  It allows developers to train and infer with trillion-parameter models on commodity hardware by aggressively optimizing memory usage and communication overhead.

  _You now have the power to train a trillion-parameter model, provided you can solve the far more complex puzzle of configuring ZeRO stages without accidentally OOM-ing a supercomputer._

  `deep-learning` `distributed-training` `inference` `pytorch` `optimization`
  </details>

- **[colossalai](https://github.com/hpcaitech/colossalai)** `⭐ 41.4k` `updated ≤30d` Colossal-AI is an open-source framework for training and deploying large AI models using advanced parallelism strategies like data, tensor, and pipeline parallelism on distributed hardware. <details><summary>More about</summary>

  It allows developers to train massive foundation models and run large-scale inference on heterogeneous hardware clusters without needing custom distributed systems expertise.

  _Because clearly what every software engineer needed this year was another reason to pretend they understand HPC topology and NVIDIA multi-GPU interconnects._

  `distributed-training` `deep-learning` `hpc` `llm-infrastructure` `model-parallelism`
  </details>

- **[phidata](https://github.com/agno-agi/agno)** `⭐ 39.9k` `updated ≤30d` Agno is a Python SDK and runtime for serving AI agents as production services, providing sessions, tracing, scheduling, and RBAC across frameworks like Claude, LangGraph, and DSPy. <details><summary>More about</summary>

  It lets developers wrap agents built in any framework and expose them as a stateless, session-scoped FastAPI backend without building the production plumbing from scratch.

  _We have successfully abstracted the abstraction, so you can now orchestrate your orchestrator’s orchestration with enterprise-grade session isolation and a control plane._

  `agents` `python` `fastapi` `production` `sdk`
  </details>

- **[phidata](https://github.com/phidatahq/phidata)** `⭐ 39.9k` `updated ≤30d` A Python framework and runtime for building, serving, and managing AI agents as production services with sessions, tracing, and a control plane UI. <details><summary>More about</summary>

  It gives developers a structured way to wrap agents built with LangGraph, DSPy, Claude, or its own SDK into a production-ready FastAPI backend with sessions, tracing, and human approval flows.

  _Just what the ecosystem needed: another runtime to debate at 2 a.m. while your 'production agent' mostly confirms it can list files before politely declining to write them._

  `agents` `python` `fastapi` `observability` `production`
  </details>

- **[mindsdb](https://github.com/mindsdb/mindsdb)** `⭐ 39.1k` `updated ≤30d` MindsDB is a query engine that unifies access to 200+ structured and unstructured data sources, allowing AI agents to perform semantic search and conversational analytics using an SQL-compatible interface. <details><summary>More about</summary>

  It lets developers build data-aware agents that can query live production data across disparate systems without building custom ETL pipelines or connectors.

  _Because what your stack really needed was another SQL dialect, this time with extra LLM sprinkles to help your agents hallucinate insights from 200 different databases at once._

  `query-engine` `data-integration` `agents` `semantic-search` `mcp`
  </details>

- **[langgraph](https://github.com/langchain-ai/langgraph)** `⭐ 31.2k` `updated ≤30d` A low-level, open-source framework for building and orchestrating stateful, long-running AI agents as graphs in Python and TypeScript. <details><summary>More about</summary>

  It provides developers with durable execution, memory management, and human-in-the-loop controls needed to move AI agents from prototypes to production systems.

  _You can now visualize your agent's existential crisis as a detailed graph, just in case the deterministic state machine didn't already feel like enough architecture for a simple chatbot._

  `agents` `framework` `python` `typescript` `orchestration`
  </details>

- **[lightning](https://github.com/lightning-ai/pytorch-lightning)** `⭐ 31.1k` `updated ≤30d` A deep learning framework that organizes PyTorch code to automate training infrastructure, enabling pretraining and finetuning of AI models across CPUs to multi-node GPUs without changing core model logic. <details><summary>More about</summary>

  It abstracts away the repetitive engineering boilerplate of distributed training, allowing developers to focus on model architecture while scaling from a laptop to 10,000+ GPUs.

  _Just when you thought you were a PyTorch purist, you realize you've traded raw tensor control for a framework that compares itself to NextJS, because apparently even backpropagation needs a React-like lifecycle now._

  `pytorch` `deep-learning` `distributed-training` `framework` `mlops`
  </details>

- **[copilotkit](https://github.com/copilotkit/copilotkit)** `⭐ 30.6k` `updated ≤30d` A frontend SDK for building agent-native applications with generative UI, shared state, and human-in-the-loop workflows in React and Angular. <details><summary>More about</summary>

  It gives developers a structured way to connect LLM agents to their frontend with streaming UI, tool rendering, and shared state without wiring together ad-hoc hooks.

  _Another protocol to learn so your chatbot can politely ask the user for confirmation before confidently hallucinating the next form field._

  `generative-ui` `agent-native` `react` `frontend-sdk` `ag-ui`
  </details>

- **[semantic-kernel](https://github.com/microsoft/semantic-kernel)** `⭐ 27.8k` `updated ≤30d` A model-agnostic SDK for building AI agents and multi-agent systems, now positioned as the precursor to Microsoft's enterprise-grade Agent Framework. <details><summary>More about</summary>

  It provides a stable, multi-language foundation for developers to orchestrate complex LLM workflows, connect to various model providers, and integrate tools via MCP without vendor lock-in.

  _It’s the rare Microsoft library that upgrades itself out of a job, forcing you to migrate from a 'kernel' to a 'framework' just as you finished reading the docs._

  `sdk` `multi-agent` `enterprise` `microsoft` `orchestration`
  </details>

- **[chroma](https://github.com/chroma-core/chroma)** `⭐ 27.8k` `updated ≤30d` Chroma is an open-source embedding database and search infrastructure designed to store, search, and manage vector embeddings for AI applications. <details><summary>More about</summary>

  It provides the retrieval backbone for LLM applications, allowing developers to add semantic search, memory, and context management to their agents and apps with a simple API.

  _Yet another excuse to treat a vector database as the silver bullet for all AI memory problems, ensuring your stack remains robust right up until the moment you realize cosine similarity isn't actually 'understanding' the docs._

  `vector-database` `embeddings` `retrieval` `rust` `python`
  </details>

- **[smolagents](https://github.com/huggingface/smolagents)** `⭐ 27.1k` `updated ≤30d` A lightweight, code-first library from Hugging Face for building AI agents that plan and act by writing and executing Python code. <details><summary>More about</summary>

  It gives developers a minimal, model-agnostic framework to build agentic workflows with native support for tool integrations, MCP servers, and sandboxed execution.

  _Yet another agent framework that promises the world in 1,000 lines of code, ensuring you can now spend your afternoon debating CodeAgent patterns instead of actually shipping features._

  `agents` `framework` `huggingface` `python` `mcp`
  </details>

- **[gpt-researcher](https://github.com/assafelovic/gpt-researcher)** `⭐ 26.9k` `updated ≤30d` An open-source autonomous agent that conducts deep web and local research on a given task and compiles the findings into a detailed, citation-backed report. <details><summary>More about</summary>

  It allows developers to automate the time-consuming process of gathering technical context, API documentation, and domain-specific information across multiple sources before writing code.

  _Finally, an agent that spends three hours reading the internet so you can spend four hours debugging the hallucinated code it inspired you to write._

  `research-agent` `langchain` `rag` `mcp` `python`
  </details>

- **[openai-agents-python](https://github.com/openai/openai-agents-python)** `⭐ 25.9k` `updated ≤30d` A lightweight Python SDK for building multi-agent workflows with support for OpenAI models and 100+ other LLMs, featuring tools, guardrails, and tracing. <details><summary>More about</summary>

  It gives developers a structured, provider-agnostic way to compose agents, manage sessions, and observe complex LLM workflows without wiring everything from scratch.

  _Another framework enters the arena to solve multi-agent chaos, politely promising that this time orchestration won't require its own orchestration team._

  `python` `multi-agent` `sdk` `openai` `framework`
  </details>

- **[mlflow](https://github.com/mlflow/mlflow)** `⭐ 25.7k` `updated ≤30d` MLflow is an open-source AI engineering platform for managing the lifecycle of agents, LLMs, and ML models with features for tracing, evaluation, prompt management, and monitoring. <details><summary>More about</summary>

  It provides engineering teams with a unified stack to debug, evaluate, and monitor production AI applications while managing model access and controlling costs.

  _Finally, a tool to help you monitor the ghost in the machine that you shipped last Tuesday and haven't quite figured out how to test yet._

  `llmops` `monitoring` `observability` `mlops` `evaluation`
  </details>

- **[haystack](https://github.com/deepset-ai/haystack)** `⭐ 25.1k` `updated ≤30d` Haystack is an open-source Python framework for building modular LLM applications, including RAG systems, semantic search, and agent workflows with explicit control over retrieval and generation. <details><summary>More about</summary>

  It provides developers with a production-ready, composable architecture to move beyond simple prompt chaining into complex, context-engineered systems with memory and routing.

  _Just when you thought 'import openai' was sufficient, you now have a full orchestration framework to ensure your RAG pipeline has the exact same architectural complexity as the microservices you Swore You'd Never Write Again._

  `rag` `agent-orchestration` `llm-framework` `python` `context-engineering`
  </details>

- **[agentscope](https://github.com/agentscope-ai/agentscope)** `⭐ 24.6k` `updated ≤30d` AgentScope is a production-ready Python framework for building, orchestrating, and deploying single and multi-agent systems with built-in support for MCP, A2A, memory, and model fine-tuning. <details><summary>More about</summary>

  It gives developers a code-first way to move from prototype scripts to scalable, observable agent deployments across local, serverless, or Kubernetes environments.

  _Just when you thought you had a handle on your RAG pipeline, now you get to orchestrate a multi-agent parliament with realtime voice and memory compression._

  `agents` `multi-agent` `framework` `mcp` `kubernetes`
  </details>

- **[agentscope](https://github.com/modelscope/agentscope)** `⭐ 24.6k` `updated ≤30d` AgentScope is a production-ready Python framework for building and running single and multi-agent systems with built-in support for tools, memory, planning, and deployment. <details><summary>More about</summary>

  It provides developers with a code-first SDK to design, orchestrate, and deploy complex agent workflows locally or in cloud environments with native MCP and A2A support.

  _Yet another framework promising transparent, trustworthy agents, just waiting for you to refactor your entire stack to find out what 'production-ready' really means at 2 AM._

  `agents` `framework` `multi-agent` `mcp` `python`
  </details>

- **[mastra](https://github.com/mastra-ai/mastra)** `⭐ 23.6k` `updated ≤30d` A TypeScript framework for building AI-powered applications and agents, featuring built-in model routing, workflow orchestration, memory management, and evaluation tooling. <details><summary>More about</summary>

  It provides a batteries-included, code-first stack for TypeScript developers to build, tune, and scale production-ready AI agents with native integrations for React, Next.js, and Node.

  _Yet another framework promising to be the 'easy way' to ship reliable agents, ensuring you can now spend your afternoons debating workflow graph syntax instead of actually debugging your prompts._

  `typescript` `agents` `framework` `mcp` `workflows`
  </details>

- **[dolt](https://github.com/dolthub/dolt)** `⭐ 22.5k` `updated ≤30d` Dolt is a MySQL-compatible SQL database that implements Git-like version control, allowing developers to branch, merge, diff, and clone structured data. <details><summary>More about</summary>

  It provides a version-controlled storage layer suitable for agent memory and multi-agent workflows where tracking state changes and provenance is critical.

  _We have successfully version-controlled the last remaining thing that wasn't meant to be merged, rebased, or conflicted like a poorly managed feature branch._

  `database` `version-control` `agent-memory` `sql` `git-for-data`
  </details>

- **[memgpt](https://github.com/letta-ai/letta)** `⭐ 22.4k` `updated ≤30d` Letta is a platform and SDK for building stateful AI agents with advanced memory systems that can learn and self-improve over time. <details><summary>More about</summary>

  It provides the infrastructure and APIs for developers to integrate long-term memory and autonomous learning capabilities into their own agentic applications.

  _Finally, your agents can now accumulate context and trauma across sessions just like the developers building them._

  `agents` `memory` `sdk` `stateful` `framework`
  </details>

- **[jina](https://github.com/jina-ai/jina)** `⭐ 21.9k` `updated >1y` Jina (jina-serve) is a Python framework for building and deploying scalable AI microservices, supporting multimodal models, LLM streaming, and one-command deployment to Kubernetes or Jina AI Cloud. <details><summary>More about</summary>

  Developers can wrap any ML/LLM model into a standardized gRPC or HTTP service and scale it from a local prototype to a production K8s cluster without rewriting their stack.

  _Another reminder that your carefully hand-tuned FastAPI service is now considered merely an MVP for a framework that ships its own Executor Hub and a cloud deployment command._

  `llm-serving` `microservices` `mlops` `multimodal` `kubernetes`
  </details>

- **[jina](https://github.com/jina-ai/serve)** `⭐ 21.9k` `updated >1y` Jina is a framework for building and deploying multimodal AI services and pipelines that communicate via gRPC, HTTP, and WebSockets, with native support for scaling from local development to Kubernetes. <details><summary>More about</summary>

  It gives developers a code-first way to wrap models and chains into scalable microservices without rewriting orchestration glue for every new LLM experiment.

  _Yet another cloud-native ML framework promising one-command deployment, ensuring your local Poetry environment will still cry when you try to leave the happy path._

  `llm-serving` `microservices` `grpc` `kubernetes` `multimodal`
  </details>

- **[swarm](https://github.com/openai/swarm)** `⭐ 21.4k` `updated ≤30d` An educational Python framework from OpenAI for exploring lightweight, client-side multi-agent orchestration using Agents and handoffs. <details><summary>More about</summary>

  It provides a minimal code-first substrate for developers to learn and prototype how to coordinate multiple LLM agents before adopting production SDKs.

  _You can now orchestrate a swarm of agents to handle tasks that a single prompt failed to solve, proving that adding complexity is always the first refuge of the overwhelmed developer._

  `multi-agent` `orchestration` `openai` `framework` `python`
  </details>

- **[pgvector](https://github.com/pgvector/pgvector)** `⭐ 21.1k` `updated ≤30d` An open-source PostgreSQL extension that adds vector similarity search capabilities, supporting exact and approximate nearest neighbor queries for various vector types. <details><summary>More about</summary>

  It allows developers to store embeddings and perform vector searches directly within Postgres, eliminating the need for a separate vector database in AI-powered applications.

  _You can now complicate your database schema instead of complicating your infrastructure stack, which feels like progress until you realize you're debugging index scans in SQL rather than Python._

  `vector-search` `postgres` `embeddings` `database-extension`
  </details>

- **[candle](https://github.com/huggingface/candle)** `⭐ 20.2k` `updated ≤30d` Candle is a minimalist machine learning framework for Rust focused on high-performance inference and training with GPU support. <details><summary>More about</summary>

  It allows developers to run and fine-tune LLMs and other models locally in a Rust-native environment, avoiding Python dependency overhead.

  _Finally, you can rewrite your PyTorch inference stack in Rust to gain 10ms of performance while spending three weeks fighting the borrow checker._

  `rust` `ml-framework` `local-inference` `performance`
  </details>

- **[adk-python](https://github.com/google/adk-python)** `⭐ 19.4k` `updated ≤30d` An open-source, code-first Python framework for building, evaluating, and deploying modular multi-agent systems with support for tools, MCP integration, and deployment to Vertex AI or Cloud Run. <details><summary>More about</summary>

  Developers can define agent logic, tools, and orchestration entirely in Python while retaining the flexibility to target Gemini, other LLMs, and scalable deployment pipelines.

  _The good news is you can finally orchestrate a hierarchy of agents to argue about your requirements before deploying them to the cloud._

  `agents` `python` `framework` `multi-agent` `orchestration`
  </details>

- **[db-gpt](https://github.com/csunny/db-gpt)** `⭐ 18.7k` `updated ≤30d` An open-source agentic AI data assistant that connects to various data sources, writes SQL and code, and generates reports and insights through natural language queries. <details><summary>More about</summary>

  It allows developers and teams to build AI-native data agents and workflows that automate complex data analysis tasks across databases, spreadsheets, and knowledge bases.

  _Another heroic solution to the enduring crisis of wanting insights from a database without actually remembering how to write a JOIN._

  `data-agent` `sql-generation` `rag` `llm-framework`
  </details>

- **[db-gpt](https://github.com/eosphoros-ai/db-gpt)** `⭐ 18.7k` `updated ≤30d` An open-source AI data assistant that connects to databases and files, writes SQL and code, and runs agentic analysis workflows with reusable skills and sandboxed execution. <details><summary>More about</summary>

  It lets developers and teams build AI-native data agents that plan tasks, query structured and unstructured sources, and turn analysis into reports without wiring together separate RAG and orchestration pieces.

  _Another brave attempt to convince the organization that the bottleneck was never SQL syntax, but the lack of an agentic middle layer to generate it for us._

  `data-agent` `rag` `sql-generation` `agentic-workflows` `local-ai`
  </details>

- **[trl](https://github.com/huggingface/trl)** `⭐ 18.3k` `updated ≤30d` A Hugging Face library for post-training foundation models using techniques like SFT, DPO, and GRPO, built on top of the Transformers ecosystem. <details><summary>More about</summary>

  It provides developers with the standard, scalable toolkit to fine-tune and align LLMs using advanced RL and preference optimization methods directly in Python.

  _You now have the power to replicate the DeepSeek-R1 training loop locally, which is the perfect excuse to spend three days tuning hyperparameters instead of merging that PR._

  `fine-tuning` `reinforcement-learning` `llm` `huggingface` `post-training`
  </details>

- **[langchainjs](https://github.com/hwchase17/langchainjs)** `⭐ 17.6k` `updated ≤30d` LangChain.js is a TypeScript framework for building LLM-powered applications, providing a standard interface for chaining together models, tools, vector stores, and agents in Node.js and browser environments. <details><summary>More about</summary>

  It lets developers rapidly prototype, swap models, and integrate diverse data sources through a modular component architecture that scales from quick experiments to production monitoring via LangSmith.

  _Watch your npm lockfile swell with yet another abstraction layer designed to protect you from the model providers you’ll inevitably swap out next Tuesday anyway._

  `typescript` `llm` `framework` `agent-orchestration` `nodejs`
  </details>

- **[langchainjs](https://github.com/langchain-ai/langchainjs)** `⭐ 17.6k` `updated ≤30d` LangChain.js is a TypeScript/JavaScript framework for building LLM-powered applications by chaining together interoperable components, models, and integrations. <details><summary>More about</summary>

  It provides a standard interface for agents, models, and vector stores that lets developers rapidly prototype and swap AI components without rewriting their entire stack.

  _Yet another abstraction layer promising future-proofing, ensuring that when the next framework inevitably drops, you'll have a whole new API to learn while your current 'future-proof' code quietly rots._

  `llm` `typescript` `agent-framework` `javascript` `langchain`
  </details>

- **[agent-zero](https://github.com/agent0ai/agent-zero)** `⭐ 17.5k` `updated ≤30d` Agent Zero is an open-source, self-extending AI agentic framework that runs on a full Linux environment, allowing agents to execute code, browse the web, and create tools to solve complex tasks. <details><summary>More about</summary>

  It gives developers a transparent, inspectable environment to delegate multi-step tasks to an agent that can actually install software, manipulate files, and iterate on solutions within a real OS.

  _Finally, an agent that can install Kali Linux tools and browse the web, ensuring your development environment is just as chaotic and over-permissioned as the AI's internal monologue._

  `agents` `framework` `linux` `automation` `open-source`
  </details>

- **[agent-zero](https://github.com/frdel/agent-zero)** `⭐ 17.5k` `updated ≤30d` Agent Zero is an open-source, extensible AI agent framework that provides agents with a full Linux environment to write code, execute commands, browse the web, and create custom tools. <details><summary>More about</summary>

  It allows developers to delegate complex, multi-step tasks to an agent that operates with full system access, memory, and a visual workbench for document and browser automation.

  _You can now watch in real-time as an autonomous agent installs Kali Linux tools and edits LibreOffice spreadsheets, raising the question of whether you are the pilot or just the flight attendant._

  `agents` `framework` `linux` `automation` `self-hosted`
  </details>

- **[camel](https://github.com/camel-ai/camel)** `⭐ 16.9k` `updated ≤30d` CAMEL is an open-source Python framework for building, scaling, and simulating multi-agent systems with stateful memory and environment interactions. <details><summary>More about</summary>

  It provides developers with a structured SDK to prototype complex agent collaborations, generate synthetic data, and research agent scaling laws without starting from scratch.

  _Just what your weekend project needed: a framework capable of spawning a million agents when you can barely manage your own standup meetings._

  `multi-agent` `framework` `simulation` `agent-scaling`
  </details>

- **[dvc](https://github.com/iterative/dvc)** `⭐ 15.6k` `updated ≤30d` DVC is a command-line tool and VS Code extension for versioning data and machine learning models, managing lightweight pipelines, and tracking experiments locally within a Git repository. <details><summary>More about</summary>

  It brings Git-like versioning and pipeline reproducibility to ML assets, allowing developers to manage data, model iterations, and experiment lifecycles alongside their source code.

  _Finally, you can version your 50GB dataset in Git, provided you enjoy the existential dread of configuring yet another remote storage endpoint._

  `mlops` `data-versioning` `experiments` `gitops` `cli`
  </details>

- **[llmware](https://github.com/llmware-ai/llmware)** `⭐ 14.9k` `updated ≤30d` A unified Python framework for building knowledge-based LLM applications with a 300+ model catalog and integrated RAG pipeline optimized for local, edge, and enterprise deployment. <details><summary>More about</summary>

  It gives developers a single toolkit to ingest documents, manage embeddings across multiple vector databases, and run specialized small models locally on laptops or edge devices.

  _You now have the power to run a 300-model enterprise RAG stack on your laptop, which is the perfect excuse to spend three days tuning a local Bling model instead of fixing that one critical bug._

  `rag` `local-ai` `llm-framework` `enterprise` `sdk`
  </details>

- **[botpress](https://github.com/botpress/botpress)** `⭐ 14.7k` `updated ≤30d` An open-source platform and SDK for building, deploying, and managing GPT/LLM-powered chatbots and integrations via a CLI, Studio, and Hub. <details><summary>More about</summary>

  It provides developers with a structured way to build conversational AI using code-first tools like the Botpress SDK and CLI, alongside a marketplace for public integrations.

  _Just what the world needed: another 'ultimate platform' to ensure your weekend project is now a conversational interface with a 14k-star reputation to maintain._

  `chatbot` `llm` `sdk` `botpress` `agent`
  </details>

- **[memori](https://github.com/memorilabs/memori)** `⭐ 14.1k` `updated ≤30d` Memori is an LLM-agnostic memory infrastructure SDK and cloud service that captures agent execution and conversation history into structured, persistent state for AI applications. <details><summary>More about</summary>

  It allows developers to add stateful, long-term memory to AI agents with minimal integration overhead, significantly reducing context window bloat compared to full-history prompting.

  _Just what we needed: another layer of infrastructure to manage so our agents can remember they already apologized for the last hallucination._

  `memory` `agent-infrastructure` `sdk` `state-management` `llm-agnostic`
  </details>

- **[outlines](https://github.com/dottxt-ai/outlines)** `⭐ 13.8k` `updated ≤30d` A Python library that guarantees structured outputs from LLMs by enforcing schemas, types, and grammars during generation rather than relying on post-hoc parsing. <details><summary>More about</summary>

  It lets developers treat LLM outputs as reliable, typed data across any model provider without writing fragile parsing code or regex band-aids.

  _We have successfully abstracted away the chaos of LLM outputs into a Pydantic model, which means your next existential crisis will be about schema versioning instead of bad JSON._

  `structured-output` `llm` `python` `pydantic` `sdk`
  </details>

- **[outlines](https://github.com/normal-computing/outlines)** `⭐ 13.8k` `updated ≤30d` Outlines is a Python library that guarantees structured outputs from LLMs by integrating with any model backend and using type hints or Pydantic models to enforce schema validity during generation. <details><summary>More about</summary>

  It eliminates the fragile post-generation parsing layer by ensuring LLM responses conform to JSON, regex, or custom grammars directly during inference, making AI integration more reliable for production systems.

  _We have successfully solved the problem of LLMs being bad at JSON by adding a 13,000-star abstraction layer, proving once again that the best way to fix a tool is to wrap it in more tooling._

  `structured-output` `llm` `pydantic` `sdk` `python`
  </details>

- **[tensorrt-llm](https://github.com/nvidia/tensorrt-llm)** `⭐ 13.6k` `updated ≤30d` TensorRT LLM is an NVIDIA Python/C++ toolkit that provides specialized kernels and runtimes to optimize and serve large language and visual models efficiently on NVIDIA GPUs. <details><summary>More about</summary>

  It gives developers a code-first path to squeeze maximum throughput and minimum latency out of LLM inference on NVIDIA hardware without reinventing low-level CUDA optimizations.

  _You will spend three days tuning CUDA graph batch sizes and MoE parallelism strategies just to learn that your prompt throughput is now bottlenecked by how fast you can type 'please optimize this'._

  `llm-inference` `nvidia` `gpu-optimization` `local-ai` `python`
  </details>

- **[clip-as-service](https://github.com/jina-ai/clip-as-service)** `⭐ 12.8k` `updated >1y` A high-scalability microservice for generating embeddings and performing visual reasoning on images and text using CLIP models via gRPC, HTTP, or WebSocket. <details><summary>More about</summary>

  It provides developers with a low-latency, elastic backend to integrate multi-modal search and reasoning capabilities into neural search solutions without managing model infrastructure directly.

  _Yet another reminder that while we are busy arguing about agentic coding workflows, the infrastructure for understanding images and text separately is already scaling to 800QPS on a single GPU._

  `clip` `embedding` `multi-modal` `microservice` `neural-search`
  </details>

- **[txtai](https://github.com/neuml/txtai)** `⭐ 12.5k` `updated ≤30d` An all-in-one Python framework combining vector search, LLM orchestration, and agent workflows with support for multiple programming languages via API bindings. <details><summary>More about</summary>

  It gives developers a single, batteries-included stack to build RAG pipelines, semantic search engines, and autonomous agents without stitching together disparate vector databases and LLM libraries.

  _Another day, another all-in-one framework promising to unify the entire AI ecosystem while you're still trying to figure out why your existing vector store returns 'banana' for every query._

  `llm-framework` `vector-search` `rag` `agents` `python`
  </details>

- **[e2b](https://github.com/e2b-dev/e2b)** `⭐ 12.1k` `updated ≤30d` E2B is an open-source infrastructure platform that provides secure, isolated cloud sandboxes for running AI-generated code via JavaScript and Python SDKs. <details><summary>More about</summary>

  It gives developers a safe, scalable way to let LLMs execute code, spin up environments, and interact with real-world tools without risking their own infrastructure.

  _Yet another layer of abstraction where we bravely trust a cloud sandbox to run the hallucinated bash commands our AI agent just invented at 3 AM._

  `sandbox` `code-execution` `agents` `infrastructure` `sdk`
  </details>

- **[chainlit](https://github.com/chainlit/chainlit)** `⭐ 12k` `updated ≤30d` A Python framework and UI toolkit for building conversational AI applications with integrated support for LangChain, LlamaIndex, and various LLM providers. <details><summary>More about</summary>

  It gives developers a fast path to wrap LLMs in a functional chat UI with tool-calling support, cutting the time from 'it works in a script' to 'it works in a browser' from weeks to minutes.

  _Another pristine framework for building the exact same chat UI we’ve all deployed three times this quarter, just in case the 'production-ready' label finally sticks._

  `python` `llm` `chat-ui` `langchain` `conversational-ai`
  </details>

- **[langchain4j](https://github.com/langchain4j/langchain4j)** `⭐ 11.9k` `updated ≤30d` LangChain4j is an idiomatic Java library offering a unified API for integrating LLMs, embedding stores, tool calling, agents, and RAG into JVM applications. <details><summary>More about</summary>

  It brings enterprise-grade LLM integration patterns to the Java ecosystem, allowing developers to build AI features using familiar frameworks like Spring Boot and Quarkus without writing provider-specific glue code.

  _Just when you thought your Java stack was safe from the hallucination economy, here comes a library to ensure your boilerplate is now powered by temperature sampling._

  `java` `llm` `framework` `jvm` `rag`
  </details>

- **[axolotl](https://github.com/openaccess-ai-collective/axolotl)** `⭐ 11.8k` `updated ≤30d` Axolotl is an open-source framework for fine-tuning large language models with support for LoRA, DPO, and a wide range of model architectures. <details><summary>More about</summary>

  It standardizes the fragmented LLM training ecosystem into a single config-driven workflow, letting developers fine-tune cutting-edge models without writing bespoke training loops.

  _Because nothing says 'I understand transformers' like debugging a YAML file for three hours only to realize you forgot to set the correct MoE expert quantization flag._

  `fine-tuning` `llm` `training` `frameworks`
  </details>

- **[ludwig](https://github.com/ludwig-ai/ludwig)** `⭐ 11.7k` `updated ≤30d` A low-code, declarative deep learning framework for building and fine-tuning custom AI models like LLMs using YAML configuration and PyTorch. <details><summary>More about</summary>

  It lets developers define and train state-of-the-art LLMs and neural networks through config files rather than wiring together low-level PyTorch code manually.

  _Yet another reminder that 'low-code' still demands you understand batch sizes, quantization strategies, and why your LoRA adapter merged into a singular point of existential dread._

  `llm-training` `fine-tuning` `pytorch` `deep-learning` `yaml`
  </details>

- **[convex-backend](https://github.com/get-convex/convex-backend)** `⭐ 11.5k` `updated ≤30d` An open-source reactive database and backend platform that lets developers define data fetching and business logic in TypeScript, designed to be used by both humans and LLMs. <details><summary>More about</summary>

  It provides a strongly consistent, live-updating backend infrastructure that simplifies full-stack app development, specifically tailoring its surface for LLM-driven code generation.

  _Just when you thought the backend was safe from the 'optimized for LLMs' buzz, your database now comes with a compatibility guarantee for the hallucinations of tomorrow._

  `database` `backend` `typescript` `reactive` `llm-friendly`
  </details>

- **[eino](https://github.com/cloudwego/eino)** `⭐ 11k` `updated ≤30d` Eino is a Go-native LLM application development framework that provides reusable components, an Agent Development Kit, and graph-based composition for building AI agents and workflows. <details><summary>More about</summary>

  It gives Go developers a LangChain-style ecosystem with first-class streaming, tool use, and multi-agent patterns without leaving their preferred language.

  _Another week, another framework promising to tame the Agent ReAct loop, this time in Go, because apparently we needed a CloudWeGo-flavored reminder that our orchestration choices are now as abundant as our context windows are small._

  `go` `llm-framework` `agents` `orchestration` `langchain`
  </details>

- **[qlora](https://github.com/artidoro/qlora)** `⭐ 10.9k` `updated >1y` QLoRA is a research-backed repository and training method that enables efficient fine-tuning of large language models by backpropagating gradients through 4-bit quantized weights into Low Rank Adapters (LoRA). <details><summary>More about</summary>

  It allows developers to fine-tune massive models, such as a 65B parameter LLM, on a single 48GB GPU, drastically lowering the hardware barrier to entry for custom model training.

  _Because you can now fine-tune a 65B model on a single consumer-grade card, you no longer have the excuse of 'insufficient infrastructure' to avoid training the chatbot that will inevitably hallucinate your documentation._

  `fine-tuning` `quantization` `llm` `training` `local-ai`
  </details>

- **[tokenizers](https://github.com/huggingface/tokenizers)** `⭐ 10.7k` `updated ≤30d` A fast, Rust-based library for training and running state-of-the-art tokenizers (BPE, WordPiece, Unigram) with bindings for Python, Node.js, and Ruby. <details><summary>More about</summary>

  Developers building NLP pipelines or LLM infrastructure can integrate high-performance tokenization that handles training, truncation, and alignment tracking out of the box.

  _Another essential brick in the towering cathedral of ML infrastructure that reminds you tokenization is still something you have to worry about in 2025._

  `nlp` `tokenization` `rust` `python-bindings` `llm-infrastructure`
  </details>

- **[autogluon](https://github.com/autogluon/autogluon)** `⭐ 10.3k` `updated ≤30d` AutoGluon is an AWS-backed AutoML framework that enables developers to train and deploy high-accuracy machine learning models for tabular, text, image, and time series data with minimal code. <details><summary>More about</summary>

  It abstracts away the manual tuning of hyperparameters and model selection, allowing developers to integrate production-grade predictive performance into applications with just a few lines of Python.

  _Because nothing says 'I have total control over my data pipeline' like letting a framework with a three-line API decide your entire model architecture and ensemble strategy._

  `automl` `machine-learning` `aws` `python` `framework`
  </details>

- **[instant](https://github.com/instantdb/instant)** `⭐ 10.2k` `updated ≤30d` Instant is a real-time backend-as-a-service providing auth, permissions, storage, and multiplayer data sync via client-side queries for AI-coded applications. <details><summary>More about</summary>

  It lets developers ship AI-generated apps faster by handling real-time data sync, offline caching, and permissions so the coding agent doesn't have to scaffold a backend.

  _We've reached the point where the backend is no longer infrastructure, but merely a compatibility layer for whatever code the LLM hallucinates on a Tuesday afternoon._

  `backend` `real-time` `multiplayer` `sdk`
  </details>

- **[lancedb](https://github.com/lancedb/lancedb)** `⭐ 10.2k` `updated ≤30d` LanceDB is an open-source, embedded vector database built on the Lance columnar format, designed for fast multimodal vector search and scalable AI/ML data storage. <details><summary>More about</summary>

  It provides developers with a lightweight, serverless foundation for multimodal retrieval-augmented generation (RAG) and AI workloads that integrates natively with Python, Node.js, and Rust ecosystems.

  _Yet another opportunity to spend a weekend refactoring your perfectly fine SQL database into a vector lakehouse, just so your chatbot can hallucinate with spatial awareness._

  `vector-database` `embedded` `multimodal` `retrieval` `sdk`
  </details>

- **[audiogpt](https://github.com/aigc-audio/audiogpt)** `⭐ 10.2k` `updated >1y` AudioGPT is a LangChain-based project that connects large language models to various audio foundation models to understand and generate speech, music, sound, and talking head videos. <details><summary>More about</summary>

  It provides a reference implementation for developers looking to build multimodal applications that extend LLM capabilities into the audio domain using the LangChain framework.

  _Just when you thought the stack was complicated enough, now your code review includes a pull request asking why the chatbot is hallucinating a jazz solo instead of fixing the bug._

  `audio` `langchain` `multimodal` `speech-generation` `music`
  </details>

- **[agent-framework](https://github.com/microsoft/agent-framework)** `⭐ 10.1k` `updated ≤30d` Microsoft Agent Framework is a multi-language SDK for building, orchestrating, and deploying production-grade AI agents and multi-agent workflows in Python and .NET. <details><summary>More about</summary>

  It gives teams a structured, provider-agnostic foundation to move agent systems from prototype to production with graph-based orchestration, durability, and observability baked in.

  _Just what the ecosystem needed: another enterprise-grade framework to orchestrate the agents that are already orchestrating your orchestration workflows._

  `agents` `multi-agent` `orchestration` `python` `dotnet`
  </details>

- **[metaflow](https://github.com/netflix/metaflow)** `⭐ 10.1k` `updated ≤30d` Metaflow is a Python framework for building and managing AI/ML systems, handling the lifecycle from local prototyping to production deployment on cloud infrastructure. <details><summary>More about</summary>

  It provides a unified API for data scientists and engineers to version experiments, scale compute vertically and horizontally across AWS/Azure/GCP, and deploy reliable workflows without rewriting code for production.

  _You can now orchestrate petabytes of data and hundreds of millions of compute jobs, which is great, because nothing says 'human-centric' like debugging a distributed DAG that processes your entire company's data at 3 AM._

  `mlops` `llmops` `python` `workflow` `scaling`
  </details>

- **[openrlhf](https://github.com/openllmai/openrlhf)** `⭐ 9.4k` `updated ≤30d` OpenRLHF is a high-performance, Ray and vLLM-based framework for reinforcement learning from human feedback (RLHF) and agentic RL, supporting algorithms like PPO, REINFORCE++, and VLM training. <details><summary>More about</summary>

  It provides developers with a production-ready, distributed infrastructure to fine-tune and align LLMs and VLMs using custom reward functions and multi-turn agent interactions.

  _Yet another sophisticated framework promising to align your model's soul, provided you can first align your understanding of Ray, vLLM, and distributed systems without losing your own sanity._

  `rlhf` `reinforcement-learning` `ray` `vllm` `fine-tuning`
  </details>

- **[openrlhf](https://github.com/openrlhf/openrlhf)** `⭐ 9.4k` `updated ≤30d` OpenRLHF is a high-performance, Ray and vLLM-based open-source framework for reinforcement learning from human feedback (RLHF) and agentic RL, supporting algorithms like PPO and REINFORCE++. <details><summary>More about</summary>

  It provides developers with a production-ready, scalable infrastructure to fine-tune and align LLMs and VLMs using custom reward functions, moving beyond simple prompting into complex model training.

  _Yet another high-performance framework emerges, proving that the fastest way to align a model is to add Ray, vLLM, and three more acronyms to your stack until the GPU smoke clears._

  `rlhf` `reinforcement-learning` `ray` `vllm` `agentic`
  </details>

- **[deeplake](https://github.com/activeloopai/deeplake)** `⭐ 9.1k` `updated ≤90d` Deep Lake is an AI-native database and storage format for managing multimodal data, embeddings, and datasets with vector search, versioning, and integrations for LLM and deep learning workflows. <details><summary>More about</summary>

  It gives developers a single storage layer for all AI data types with built-in vector search and dataloaders, simplifying the path from dataset management to LLM app deployment and model training.

  _Another essential piece of infrastructure that lets you proudly declare your 'AI Data Runtime' runs on serverless Postgres, right before you spend three days debugging vector recall._

  `vector-database` `llmops` `multimodal` `data-infrastructure` `deep-learning`
  </details>

- **[paradedb](https://github.com/paradedb/paradedb)** `⭐ 8.7k` `updated ≤30d` ParadeDB is a PostgreSQL extension that adds Elastic-quality full-text search, analytics, and soon vector and hybrid search capabilities directly inside the database using Rust-powered libraries. <details><summary>More about</summary>

  It allows developers to consolidate search, analytics, and vector workloads into Postgres, reducing the need to synchronize and maintain separate search infrastructure like Elasticsearch.

  _Yet another opportunity to bet the house on a single database, this time by convincing yourself that Postgres can finally solve search, OLAP, and AI embeddings without the operational baggage you probably just finished unpacking._

  `postgres` `search` `vector-database` `analytics` `database-extension`
  </details>

- **[kag](https://github.com/openspg/kag)** `⭐ 8.7k` `updated ≤180d` KAG is a framework that combines knowledge graphs with LLMs to improve logical reasoning and factual Q&A, specifically targeting professional domain knowledge bases. <details><summary>More about</summary>

  It provides developers with a structured way to move beyond naive vector similarity retrieval by integrating knowledge graph reasoning directly into LLM workflows.

  _Just when you thought RAG was solved, you now have to decide if your vectors need a graph topology and a logic solver to feel academically adequate._

  `rag` `knowledge-graph` `llm` `reasoning` `framework`
  </details>

- **[typechat](https://github.com/microsoft/typechat)** `⭐ 8.7k` `updated ≤30d` TypeChat is a Microsoft library that uses TypeScript types and schemas to constrain LLM outputs, replacing fragile prompt engineering with schema engineering for natural language interfaces. <details><summary>More about</summary>

  It lets developers define intent through type definitions rather than craft brittle prompts, making it easier to build reliable LLM-powered features that return structured, valid data.

  _We have successfully abstracted away the pain of prompt engineering by replacing it with the exact same type hierarchies that made enterprise Java so delightful._

  `llm` `typescript` `schema` `natural-language` `sdk`
  </details>

- **[bentoml](https://github.com/bentoml/bentoml)** `⭐ 8.6k` `updated ≤30d` A Python framework for building and deploying model inference APIs, multi-model pipelines, and LLM apps as production-ready Docker containers. <details><summary>More about</summary>

  It lets developers wrap any open-source or custom model into a scalable REST API without building the serving infrastructure from scratch.

  _Yet another framework promising that this time, your model-serving stack won't collapse under the weight of its own YAML once you try to ship a second model._

  `model-serving` `inference` `mlops` `python` `llm`
  </details>

- **[xagent](https://github.com/openbmb/xagent)** `⭐ 8.5k` `updated >1y` XAgent is an open-source, autonomous LLM agent designed to solve complex tasks by planning, executing code, and using tools inside a sandboxed Docker environment. <details><summary>More about</summary>

  It provides a framework for developers to experiment with autonomous task decomposition and execution using external tools like shells, browsers, and Python notebooks without risking their host machine.

  _Just what the world needed: another autonomous agent that promises to solve any task while you nervously wonder which of your production databases it will try to 'refactor' first._

  `autonomous-agents` `llm` `experimental` `task-solving`
  </details>

- **[lmflow](https://github.com/optimalscale/lmflow)** `⭐ 8.5k` `updated ≤30d` An extensible, efficient toolkit for finetuning and running inference on large foundation models, supporting custom optimizers and conversation templates. <details><summary>More about</summary>

  It gives developers a streamlined, code-first path to customize and serve LLMs without wrestling with fragmented training scripts.

  _Because the only thing more relaxing than debugging a shaky training loop is maintaining your own local fork of the entire AI ecosystem._

  `llm` `finetuning` `inference` `pytorch` `local-ai`
  </details>

- **[praisonai](https://github.com/mervinpraison/praisonai)** `⭐ 7.1k` `updated ≤30d` A Python and JavaScript framework and SDK for building multi-agent systems that research, plan, code, and execute tasks with built-in memory and RAG support. <details><summary>More about</summary>

  It lets developers assemble autonomous agent teams that handle research, coding, and workflow automation across 100+ LLMs with minimal boilerplate.

  _Another day, another framework promising a 24/7 AI workforce that will definitely not require you to debug its autonomous decisions at 2 AM._

  `agents` `multi-agent` `framework` `sdk` `automation`
  </details>

- **[flyte](https://github.com/flyteorg/flyte)** `⭐ 7k` `updated ≤30d` Flyte is a Python-first framework and Kubernetes-native platform for orchestrating ML pipelines, model serving, and AI agent workflows at scale. <details><summary>More about</summary>

  It lets developers define production-grade AI and data workflows in pure Python while handling the heavy lifting of distributed execution, caching, and retries.

  _Yet another chance to wonder if your MLOps stack really needs a distributed orchestrator, or if you just enjoy rewriting your training loop in YAML-adjacent abstractions._

  `mlops` `orchestration` `python` `kubernetes` `agents`
  </details>

- **[flower](https://github.com/adap/flower)** `⭐ 6.9k` `updated ≤30d` Flower is a framework for building federated AI systems that enables training machine learning models across decentralized devices without sharing raw data. <details><summary>More about</summary>

  It provides a framework-agnostic SDK for developers to implement federated learning workflows across PyTorch, TensorFlow, Hugging Face, and other ML stacks, including edge devices like Android, iOS, and Raspberry Pi.

  _Yet another framework promises to solve the hard part of ML—getting data from clients—while you quietly realize your biggest federation challenge is getting two microservices to agree on a schema._

  `federated-learning` `ml-framework` `privacy` `edge-ai`
  </details>

- **[finrobot](https://github.com/ai4finance-foundation/finrobot)** `⭐ 6.9k` `updated ≤90d` An open-source AI agent platform that unifies LLMs, reinforcement learning, and quantitative analytics to automate financial analysis, algorithmic trading, and equity research report generation. <details><summary>More about</summary>

  It provides developers with a full-stack framework to build and deploy specialized financial AI agents that fetch data, run multi-agent analysis, and produce professional reports locally.

  _Yet another reminder that while we're debugging middleware configurations, the robots are busy writing equity research reports that might actually be more bullish than our own portfolios._

  `finance` `agents` `langchain` `local-ai` `analysis`
  </details>

- **[mindsearch](https://github.com/internlm/mindsearch)** `⭐ 6.8k` `updated ≤1y` An open-source, multi-agent framework that decomposes complex queries into sub-questions and performs parallel web searches to mimic human research workflows. <details><summary>More about</summary>

  Developers can self-host a Perplexity-style search engine, swapping in custom LLMs and search APIs to build deep research capabilities into their own applications.

  _Yet another opportunity to realize that while the agents are great at parallel searching, you're still the one manually aggregating why the four different API keys failed._

  `multi-agent` `web-search` `llm-framework` `research`
  </details>

- **[clearml](https://github.com/allegroai/clearml)** `⭐ 6.7k` `updated ≤30d` ClearML is an open-source suite for experiment tracking, data management, pipeline orchestration, and model serving across ML, DL, and GenAI workflows. <details><summary>More about</summary>

  It gives developers a unified, self-hostable control plane to manage the lifecycle of AI experiments and deployments from local notebooks to Kubernetes clusters.

  _Yet another integrated MLOps platform promising to solve the 'three months of YAML then give up' phase of AI infrastructure._

  `mlops` `llmops` `experiment-tracking` `orchestration` `self-hosted`
  </details>

- **[clearml](https://github.com/clearml/clearml)** `⭐ 6.7k` `updated ≤30d` ClearML is an open-source MLOps/LLMOps suite combining experiment tracking, data versioning, pipeline orchestration, and model serving for AI workloads. <details><summary>More about</summary>

  It provides a unified, self-hostable platform for developers to manage the full lifecycle of AI experiments, from training to production deployment.

  _Yet another 'Auto-Magical' solution promising to solve your CI/CD pain, assuming you weren't already drowning in a sea of incompatible YAML files and orchestration dashboards._

  `mlops` `llmops` `experiment-tracking` `orchestration` `model-serving`
  </details>

- **[swarms](https://github.com/kyegomez/swarms)** `⭐ 6.6k` `updated ≤30d` Swarms is a Python-based framework for building and orchestrating multi-agent systems with support for sequential, concurrent, and hierarchical agent architectures. <details><summary>More about</summary>

  It provides developers with production-ready patterns and protocol interoperability (MCP, skills) to scale beyond single-agent scripts into coordinated agent workflows.

  _Because nothing says 'enterprise-grade' like stacking autonomous agents on top of each other and praying the error propagation becomes someone else's department._

  `multi-agent` `orchestration` `python` `framework` `llm`
  </details>

- **[superagent](https://github.com/homanp/superagent)** `⭐ 6.6k` `updated ≤30d` An open-source SDK and security toolkit for AI applications that detects prompt injections, redacts sensitive data, and scans repositories for threats. <details><summary>More about</summary>

  It gives developers a programmatic way to harden agent workflows against common attacks and data leaks without building custom guardrails from scratch.

  _We have officially entered the era where we need a dedicated security layer just to keep our AI agents from impulsively emailing the user's Social Security number to a prompt injection._

  `security` `guardrails` `sdk` `prompt-injection` `agent-safety`
  </details>

- **[lance](https://github.com/eto-ai/lance)** `⭐ 6.4k` `updated ≤30d` Lance is an open lakehouse format for multimodal AI that provides high-performance vector search, full-text search, and random access on object storage, compatible with Pandas, DuckDB, Polars, and PyTorch. <details><summary>More about</summary>

  It gives developers a unified format to store embeddings, images, and tabular data with fast hybrid search and versioning, cutting out the glue code between data lakes and AI training pipelines.

  _Yet another lakehouse format enters the ring to save you from Parquet’s random access performance, assuming you were not already drowning in Iceberg, Delta, and Hudi compatibility matrices._

  `lakehouse` `vector-search` `multimodal` `data-format` `rust`
  </details>

- **[lance](https://github.com/lance-format/lance)** `⭐ 6.4k` `updated ≤30d` Lance is an open lakehouse format for multimodal AI that provides a file format, table format, and catalog spec with vector search, full-text search, and data versioning compatible with Pandas, DuckDB, Polars, and PyTorch. <details><summary>More about</summary>

  It gives developers a single high-performance format for storing and querying embeddings, images, and tabular data with 100x faster random access than Parquet and native hybrid search capabilities.

  _Yet another opportunity to rebuild your entire data infrastructure on a new format because this one—unlike the last three—actually supports your vector search and multimodal blobs without a separate database you'll have to explain to your platform team._

  `vector-search` `lakehouse` `multimodal` `data-format` `rust`
  </details>

- **[chat-langchain](https://github.com/hwchase17/chat-langchain)** `⭐ 6.3k` `updated ≤30d` A documentation assistant agent built with LangGraph that answers questions about LangChain, LangGraph, and LangSmith using documentation search, support KB lookups, and link validation. <details><summary>More about</summary>

  Provides a reference implementation for building production-ready LangGraph agents with guardrails, middleware, and external tool integrations.

  _A perfectly good excuse to procrastinate reading the actual docs, now officially sanctioned as 'studying the reference architecture'._

  `langchain` `langgraph` `agent` `documentation` `python`
  </details>

- **[chat-langchain](https://github.com/langchain-ai/chat-langchain)** `⭐ 6.3k` `updated ≤30d` A documentation assistant agent built with LangGraph that answers questions about LangChain, LangGraph, and LangSmith by searching official docs and support knowledge bases. <details><summary>More about</summary>

  Serves as a reference implementation for developers building production-ready documentation agents with guardrails, middleware, and structured search workflows.

  _The official docs now need their own agent to help you understand the framework you are using to build agents that read those same docs._

  `langgraph` `agent` `docs` `reference-app`
  </details>

- **[aim](https://github.com/aimhubio/aim)** `⭐ 6.1k` `updated ≤30d` Aim is an open-source experiment tracker that logs AI training runs and metadata, providing a UI to compare results and an API to query them programmatically. <details><summary>More about</summary>

  It provides Python developers with a self-hosted alternative to managed MLOps platforms to track, visualize, and query model training metadata.

  _Because nothing says 'I have my model architecture under control' like spending three hours configuring a dashboard to visualize why your loss curve is still flat._

  `experiment-tracking` `mlops` `python` `metadata` `open-source`
  </details>

- **[agents](https://github.com/aiwaves-cn/agents)** `⭐ 5.9k` `updated >1y` An open-source Python framework for building, training, and evaluating autonomous language agents using symbolic learning techniques inspired by neural network backpropagation. <details><summary>More about</summary>

  It gives developers a structured way to treat agent pipelines like trainable computational graphs, enabling systematic optimization of prompts, tools, and multi-agent workflows via language-based gradients.

  _Just when you thought prompt engineering was the final form of programming, we now have gradient descent for your agent's personality, because apparently even your LLM chains need to overfit to a training set._

  `agents` `framework` `training` `autonomous-agents` `llm`
  </details>

- **[genkit](https://github.com/firebase/genkit)** `⭐ 5.9k` `updated ≤30d` An open-source framework for building AI-powered applications in JavaScript/TypeScript, Go, and Python, providing unified APIs for model integration, tool calling, and RAG workflows. <details><summary>More about</summary>

  It provides a production-ready, multi-language SDK to integrate various AI models and agentic workflows into full-stack apps without writing provider-specific boilerplate.

  _Another heroic abstraction layer promising to unify the AI ecosystem, just in time for the ecosystem to fragment into five new incompatible standards next week._

  `ai-framework` `firebase` `sdk` `multi-model` `rag`
  </details>

- **[genkit](https://github.com/genkit-ai/genkit)** `⭐ 5.9k` `updated ≤30d` An open-source framework for building full-stack AI-powered applications in JavaScript, Go, and Python, providing unified APIs for model integration, tool calling, and RAG workflows. <details><summary>More about</summary>

  It gives developers a Firebase-backed, code-first SDK to integrate multiple AI models and agentic flows into web and mobile apps without writing boilerplate glue code for every provider.

  _Now you can orchestrate a multi-model agentic meltdown in three different languages, ensuring your stack is future-proof right up until the next Google deprecation cycle._

  `framework` `sdk` `agents` `rag` `firebase`
  </details>

- **[kserve](https://github.com/kserve/kserve)** `⭐ 5.4k` `updated ≤30d` KServe is a Kubernetes-native inference platform for deploying and scaling generative and predictive AI models across multiple frameworks like vLLM, PyTorch, and TensorFlow. <details><summary>More about</summary>

  It provides developers with a standardized, OpenAI-compatible API and autoscaling infrastructure to move models from experimentation to production on Kubernetes without building custom serving logic.

  _You now have the perfect platform to host your LLM, provided you first ascend the 10,000-step Kubernetes configuration staircase and decipher the Istio/Knative service mesh tarot cards._

  `kubernetes` `model-serving` `inference` `mlops` `llm`
  </details>

- **[agentverse](https://github.com/openbmb/agentverse)** `⭐ 5k` `updated >1y` AgentVerse is a Python framework for deploying and coordinating multiple LLM-based agents in task-solving and simulation environments. <details><summary>More about</summary>

  It provides the scaffolding to build multi-agent systems—like automated software development teams—without wiring the inter-agent logic from scratch.

  _Just what your Stack overflow-induced imposter syndrome needed: a framework to simulate an entire engineering department that might actually agree on a design doc._

  `multi-agent` `simulation` `llm` `framework` `python`
  </details>

- **[gpustack](https://github.com/gpustack/gpustack)** `⭐ 5k` `updated ≤30d` An open-source GPU cluster manager that orchestrates inference engines like vLLM and SGLang to deploy and serve AI models across diverse accelerators and environments. <details><summary>More about</summary>

  It gives developers a unified control plane to turn heterogeneous GPU hardware into a scalable Model-as-a-Service platform with standard APIs and enterprise ops features.

  _Yet another layer of infrastructure to maintain so you can finally figure out why your tokens are still arriving at the speed of a tired carrier pigeon._

  `llm-serving` `gpu-cluster` `inference` `vllm` `model-deployment`
  </details>

- **[h2o-llmstudio](https://github.com/h2oai/h2o-llmstudio)** `⭐ 4.9k` `updated ≤30d` H2O LLM Studio is a framework and no-code GUI for fine-tuning large language models, supporting techniques like LoRA and DPO with export to Hugging Face Hub. <details><summary>More about</summary>

  It allows developers to fine-tune and evaluate custom LLMs through a visual interface or CLI without writing training loops, streamlining the path from data to a deployed model.

  _Yet another reminder that while we automate fine-tuning with pretty GUIs, we still have no idea why the model forgot how to add two numbers after the third epoch._

  `fine-tuning` `llm` `gui` `h2o` `local-ai`
  </details>

- **[routellm](https://github.com/lm-sys/routellm)** `⭐ 4.8k` `updated >1y` RouteLLM is a framework and OpenAI-compatible server for serving and evaluating LLM routers that dynamically route queries between strong and weak models to reduce costs while maintaining response quality. <details><summary>More about</summary>

  Developers can drop it in as an OpenAI client replacement to automatically route simpler queries to cheaper models, potentially cutting LLM API costs by up to 85% without significant quality loss.

  _We have successfully abstracted the decision of which model to use into yet another layer of abstraction that requires its own calibration, threshold tuning, and evaluation framework._

  `llm-routing` `cost-optimization` `openai-compatible` `inference`
  </details>

- **[bifrost](https://github.com/maximhq/bifrost)** `⭐ 4.6k` `updated ≤30d` A high-performance, OpenAI-compatible AI gateway that aggregates access to 1000+ models with features like automatic failover, load balancing, semantic caching, and an MCP gateway. <details><summary>More about</summary>

  It lets developers unify multi-provider LLM access behind a single API while handling enterprise concerns like guardrails, clustering, and token management out of the box.

  _Yet another 'fastest' gateway promising to solve the 50-ms latency crisis that absolutely no one would have noticed if the marketing page hadn't pointed it out._

  `ai-gateway` `llmops` `load-balancing` `mcp-gateway` `go`
  </details>

- **[liveblocks](https://github.com/liveblocks/liveblocks)** `⭐ 4.6k` `updated ≤30d` Liveblocks provides realtime infrastructure and SDKs for building collaborative applications, including features for multiplayer editing, contextual comments, notifications, and AI agent collaboration. <details><summary>More about</summary>

  It gives developers a ready-made backend and React/Node/Python SDKs to add shared state, presence, and AI collaborators to apps without building custom WebSocket or CRDT infrastructure.

  _Now your app can host an AI agent that edits shared state in real time, so users and language models can race to break your data model simultaneously._

  `realtime` `collaboration` `multiplayer` `ai-agents` `sdk`
  </details>

- **[rivet](https://github.com/ironclad/rivet)** `⭐ 4.6k` `updated ≤30d` Rivet is a desktop IDE and TypeScript library for visually building, chaining, and running complex AI agents and LLM workflows. <details><summary>More about</summary>

  It lets developers design and debug LLM agent logic via a visual graph interface and then embed those compiled graphs directly into their applications using a TypeScript runtime.

  _Because nothing says 'focus on shipping features' like spending three hours aligning nodes in a visual graph to reproduce what a 20-line LangChain script already did._

  `agent-builder` `visual-programming` `typescript` `llm`
  </details>

- **[sandbox](https://github.com/agent-infra/sandbox)** `⭐ 4.5k` `updated ≤30d` A Docker-based sandbox environment that combines browser automation, shell access, file operations, VSCode Server, and MCP services into a single container for AI agent development. <details><summary>More about</summary>

  Provides developers building AI agents with a pre-configured, unified execution environment that eliminates the friction of wiring together separate browser, shell, and filesystem sandboxes.

  _We have successfully containerized the entire developer workflow so that agents can now experience the joy of a corrupted apt cache and a crashed VSCode Server all in one place._

  `sandbox` `agent-infrastructure` `mcp` `docker` `sdk`
  </details>

- **[infinity](https://github.com/infiniflow/infinity)** `⭐ 4.5k` `updated ≤30d` An AI-native database built for LLM applications, providing hybrid search across dense vectors, sparse vectors, tensors, and full-text data. <details><summary>More about</summary>

  It gives developers a single, high-performance system to handle all the messy retrieval modes needed for RAG pipelines without gluing together separate vector and text stores.

  _Yet another vector database promising to be the 'LLM memory layer,' because apparently the 47th time is the charm for solving retrieval without accidentally querying your entire production dataset._

  `vector-database` `rag` `hybrid-search` `llm-infrastructure` `python-sdk`
  </details>

- **[maestro](https://github.com/doriandarko/maestro)** `⭐ 4.3k` `updated >1y` A Python framework that orchestrates sub-agents using models like Claude, GPT, and local LLMs to break down objectives into sub-tasks, execute them, and refine the results. <details><summary>More about</summary>

  It provides a code-first way for developers to experiment with multi-agent orchestration patterns using a wide variety of APIs and local runtimes.

  _We have reached the point where we need a framework to manage the agents that we hired to manage the agents we can no longer be bothered to prompt._

  `agent-orchestration` `python` `litellm` `local-ai` `multi-agent`
  </details>

- **[lmql](https://github.com/eth-sri/lmql)** `⭐ 4.2k` `updated ≤1y` LMQL is a programming language and Python superset that lets developers interleave traditional code with constrained LLM calls, offering control over decoding strategies and output validation. <details><summary>More about</summary>

  It gives developers a structured way to build complex LLM-powered logic with programmable constraints and branching decoders, rather than relying on fragile string templating.

  _Just when you thought prompt engineering was the final form of programming, we've successfully reinvented SQL for people who talk to hallucinations._

  `llm` `programming-language` `constraints` `framework` `python`
  </details>

- **[ai-getting-started](https://github.com/a16z-infra/ai-getting-started)** `⭐ 4.1k` `updated >1y` A JavaScript starter stack for building AI weekend projects, pre-configured with Next.js, LangChain.js, vector stores (Pinecone or Supabase pgvector), image/text models, auth, and deployment configs. <details><summary>More about</summary>

  It gives developers a fully wired, runnable scaffold so they can skip plumbing together Clerk, OpenAI, Replicate, Pinecone, and Fly.io and start prototyping AI features immediately.

  _Yet another beautifully assembled starter kit that saves you three hours of setup, only to be abandoned six months later when the next model provider inevitably pivots their SDK again._

  `nextjs` `langchain` `vector-db` `starter-kit` `prototyping`
  </details>

- **[fedml](https://github.com/fedml-ai/fedml)** `⭐ 4k` `updated ≤1y` FEDML is a unified, scalable machine learning library and platform for large-scale distributed training, model serving, and federated learning across cross-cloud, on-premise, and edge environments. <details><summary>More about</summary>

  It lets developers launch and manage complex AI jobs like LLM training and deployment on any GPU infrastructure without wrestling with environment setup or cluster provisioning.

  _Yet another 'unified' platform promising to tame your GPU sprawl, just in time for you to realize your model's real bottleneck is the four-hour YAML debugging session required to join the federated future._

  `mlops` `distributed-training` `federated-learning` `model-serving` `llm-ops`
  </details>

- **[langroid](https://github.com/langroid/langroid)** `⭐ 4k` `updated ≤30d` A Python framework for building LLM-powered applications using a multi-agent architecture where developer-defined agents exchange messages to collaboratively solve tasks. <details><summary>More about</summary>

  It provides a lightweight, extensible alternative to heavier LLM frameworks for developers building production multi-agent systems with support for local models and MCP servers.

  _Yet another framework claiming to solve the agent orchestration problem, ensuring you can spend a week evaluating it only to realize your original Python script was fine._

  `multi-agent` `llm-framework` `python` `mcp` `rag`
  </details>

- **[flagai](https://github.com/flagai-open/flagai)** `⭐ 3.9k` `updated ≤180d` FlagAI is an extensible, fast toolkit for training, fine-tuning, and deploying large-scale multi-modal models, with particular optimizations for Chinese language tasks. <details><summary>More about</summary>

  It provides developers with a unified API to download and adapt over 30 pre-trained models while abstracting complex parallelism libraries like DeepSpeed and Megatron-LM into fewer than ten lines of code.

  _Another framework promising that 'parallel training is just ten lines of code' right before you spend three days debugging CUDA versions and distributed timeout errors._

  `llm` `training` `fine-tuning` `multi-modal` `chinese-nlp`
  </details>

- **[lazyllm](https://github.com/lazyagi/lazyllm)** `⭐ 3.8k` `updated ≤30d` LazyLLM is a low-code Python framework for building and deploying multi-agent LLM applications with features like one-click deployment, cross-platform compatibility, and integrated model fine-tuning. <details><summary>More about</summary>

  It standardizes the messy lifecycle of multi-agent apps—from prototype to POC to production deployment—so developers can focus on data and algorithms instead of wiring together gateways and inference frameworks.

  _Now you can assemble a complex multi-agent architecture with the same intellectual effort required to snap together Lego bricks, ensuring your 'low-code' solution eventually requires a high-paid engineer to debug the data flow._

  `multi-agent` `low-code` `framework` `llm` `deployment`
  </details>

- **[simpleaichat](https://github.com/minimaxir/simpleaichat)** `⭐ 3.5k` `updated >1y` A Python package for interfacing with chat apps like ChatGPT and GPT-4, optimized for minimal code complexity, token usage, and latency. <details><summary>More about</summary>

  It provides developers with a lightweight, async-friendly SDK to rapidly build custom AI chat workflows and agents without importing heavy, opaque frameworks.

  _Yet another minimal Python wrapper promising to save you from boilerplate, right until you realize you've spent three hours tuning prompts to save five cents on tokens._

  `python` `sdk` `chatgpt` `llm` `framework`
  </details>

- **[determined](https://github.com/determined-ai/determined)** `⭐ 3.2k` `updated >1y` Determined is an open-source machine learning platform that handles distributed training, hyperparameter tuning, experiment tracking, and resource management for PyTorch and TensorFlow workloads. <details><summary>More about</summary>

  It allows ML engineers to stop writing custom scripts for cluster management and instead define training, tuning, and resource allocation via YAML configs and Python APIs.

  _Yet another reminder that while AI writes the code, we still need an entire platform just to manage the GPUs burning down the house._

  `ml-infrastructure` `distributed-training` `mlops` `pytorch` `tensorflow`
  </details>

- **[distilabel](https://github.com/argilla-io/distilabel)** `⭐ 3.2k` `updated ≤30d` Distilabel is an open-source Python framework for building scalable synthetic data generation and AI feedback pipelines for LLM training and evaluation. <details><summary>More about</summary>

  It lets developers programmatically generate high-quality fine-tuning datasets and preference pairs using research-backed methods and any LLM provider.

  _Yet another chance to discover that your model's biggest bottleneck isn't the architecture, it's the three weeks you'll spend perfecting a pipeline to synthesize data that mostly mimics your own biases._

  `synthetic-data` `llm` `python` `fine-tuning` `pipelines`
  </details>

- **[agent-llm](https://github.com/josh-xt/agent-llm)** `⭐ 3.2k` `updated ≤30d` AGiXT is a Python-based AI automation platform for orchestrating tasks across multiple LLM providers using adaptive memory and a plugin system with over 40 built-in extensions. <details><summary>More about</summary>

  It provides developers with a structured framework to build complex, multi-provider AI workflows and agent behaviors without wiring together disparate APIs manually.

  _Another day, another 'central nervous system for your digital environment' that promises to solve orchestration complexity by adding yet another layer of abstraction to manage._

  `agent-orchestration` `llm` `automation` `python` `multi-provider`
  </details>

- **[agent-llm](https://github.com/josh-xt/agixt)** `⭐ 3.2k` `updated ≤30d` AGiXT is a Python-based platform for building and running AI agents that supports multiple LLM providers, integrates with 40+ extensions, and provides SDKs for Python and TypeScript. <details><summary>More about</summary>

  It gives developers a structured way to orchestrate complex, multi-provider agent workflows and automate tasks across both digital and physical environments using natural language.

  _Yet another 'central nervous system for your digital environment' that promises AGI while you are still debugging why your single LLM call returned JSON with a trailing comma._

  `agent-framework` `llm-orchestration` `python` `multi-provider` `automation`
  </details>

- **[core](https://github.com/cheshire-cat-ai/core)** `⭐ 3k` `updated ≤90d` A Python-based framework and microservice for building custom AI agents with built-in RAG, function calling, and a plugin system. <details><summary>More about</summary>

  It provides developers with a Dockerized, API-first backend to add conversational AI and agentic workflows to existing applications without building the plumbing from scratch.

  _Just what we needed: another framework promising to solve the 'long tail' of AI integration while ensuring we spend our afternoon debugging why the cat won't invoke our custom tool._

  `agent-framework` `rag` `python` `microservice` `plugins`
  </details>

- **[evoagentx](https://github.com/evoagentx/evoagentx)** `⭐ 2.9k` `updated ≤30d` EvoAgentX is an open-source framework for building, evaluating, and automatically evolving multi-agent LLM workflows with built-in tools, memory, and human-in-the-loop controls. <details><summary>More about</summary>

  It lets developers move beyond static prompt chains by automatically constructing and optimizing multi-agent systems driven by task-specific evaluation loops.

  _You can now deploy a self-evolving swarm of agents to solve the same problem you could have fixed in twenty minutes before you decided to architect the singularity._

  `agents` `multi-agent` `framework` `self-evolving` `eval`
  </details>

- **[databerry](https://github.com/gmpetrov/databerry)** `⭐ 2.9k` `updated >1y` Databerry is a no-code platform for building custom LLM agents with integrated knowledge bases and semantic search via Qdrant. <details><summary>More about</summary>

  It allows developers to spin up context-aware chatbots and agents without writing backend plumbing, connecting data sources directly to LLM workflows.

  _You will now spend four hours configuring a no-code agent to answer questions about your documentation, only to realize you still need to write the code to integrate the agent itself._

  `no-code` `llm-agents` `chatbot` `langchain` `semantic-search`
  </details>

- **[memoryscope](https://github.com/agentscope-ai/reme)** `⭐ 2.9k` `updated ≤30d` ReMe is a Python memory management framework for AI agents that provides file-based and vector-based systems to handle long-term context retention and stateful sessions. <details><summary>More about</summary>

  It allows developers building coding assistants or agentic workflows to persist code style preferences and project context across stateless sessions without hitting context window limits.

  _We have finally solved the paradox of remembering everything by building a dedicated memory toolkit, ensuring our agents never forget the technical debt they helped create._

  `memory-management` `agent-infrastructure` `context-window` `python-sdk`
  </details>

- **[memoryscope](https://github.com/modelscope/memoryscope)** `⭐ 2.9k` `updated ≤30d` ReMe is a memory management framework for AI agents that provides file-based and vector-based memory systems to persist context across sessions and overcome limited context windows. <details><summary>More about</summary>

  Developers building coding assistants or autonomous agents can use it to retain codebase context, user preferences, and project history across stateless sessions without manual re-injection.

  _Another layer of infrastructure promising that your agent will finally remember you—right before the next context-window breakthrough renders the whole stack quaint._

  `memory` `agents` `context` `sdk` `infrastructure`
  </details>

- **[bmtools](https://github.com/openbmb/bmtools)** `⭐ 2.8k` `updated >1y` An open-source Python framework for extending language models with tools, allowing developers to build custom plugins and utilize external ChatGPT-Plugins. <details><summary>More about</summary>

  It provides a code-first platform for developers to experiment with tool-augmented LLMs and build custom agent capabilities outside of closed hosted ecosystems.

  _Another valiant attempt to reinvent the LangChain wheel, proving that in 2023, the fastest way to build an agent was to wrap it in a framework that mimics the API of a product that was itself about to be deprecated._

  `tool-use` `agent-framework` `llm` `python` `plugins`
  </details>

- **[nanotron](https://github.com/huggingface/nanotron)** `⭐ 2.7k` `updated ≤30d` Nanotron is a Hugging Face library for pretraining large transformer models using 3D parallelism techniques like tensor and pipeline parallelism. <details><summary>More about</summary>

  It provides developers with a lightweight, scalable framework to train custom LLMs on their own infrastructure without the overhead of heavier training stacks.

  _Just when you thought you could escape the GPU hunger games by using hosted APIs, here is another reason to max out your credit card on H100 clusters in the name of 'minimalistic' pretraining._

  `llm-training` `huggingface` `transformers` `parallelism`
  </details>

- **[semiotic](https://github.com/nteract/semiotic)** `⭐ 2.7k` `updated ≤30d` A React data visualization library that ships with machine-readable schemas, an MCP server, and AI-optimized components to help LLMs generate correct chart code on the first try. <details><summary>More about</summary>

  Developers can use AI assistants to scaffold complex visualizations—including network graphs and streaming data—without the usual hallucinated props and trial-and-error debugging.

  _Your AI can now generate a force-directed graph with confidence envelopes and anomaly detection in one shot, leaving you to wonder if you still understand the data or just the prompt._

  `react` `data-visualization` `mcp` `ai-assisted-dev`
  </details>

- **[omagent](https://github.com/om-ai-lab/omagent)** `⭐ 2.6k` `updated >1y` OmAgent is a Python library and framework for building multimodal language agents that support text, image, video, and audio inputs with graph-based workflow orchestration. <details><summary>More about</summary>

  It provides developers with reusable components and a simplified interface to prototype and deploy multimodal agents, including native support for VLMs and local model deployment via Ollama.

  _Another framework promising to hide the complex engineering of agent orchestration, ensuring you can spend your afternoon defining YAML configs instead of debugging the middleware it replaced._

  `multimodal` `agent-framework` `python` `local-ai` `workflow-orchestration`
  </details>

- **[memary](https://github.com/kingjulio8238/memary)** `⭐ 2.6k` `updated >1y` An open-source memory layer for autonomous agents that uses knowledge graphs and RAG to persist context across sessions, supporting local models via Ollama or OpenAI APIs. <details><summary>More about</summary>

  It provides developers building autonomous agents with a pluggable memory system that integrates with existing LLMs and graph databases like FalkorDB and Neo4j.

  _We have successfully decomposed the 'stateful agent' problem into installing a graph database, managing five different API keys, and praying the memory graph doesn't become a hallucination feedback loop._

  `memory` `agents` `knowledge-graph` `rag` `local-ai`
  </details>

- **[griptape](https://github.com/griptape-ai/griptape)** `⭐ 2.5k` `updated ≤30d` A modular Python framework for building generative AI applications, providing abstractions for agents, pipelines, workflows, RAG, memory, and tool integration. <details><summary>More about</summary>

  It gives developers a structured, driver-based way to compose LLM behaviors, plug in external tools, and manage context without wiring every prompt to a raw API.

  _Another week, another framework promising to tame agent chaos, just in time for three newer ones to render your requirements.txt obsolete._

  `python` `agents` `rag` `framework` `llm`
  </details>

- **[kueue](https://github.com/kubernetes-sigs/kueue)** `⭐ 2.5k` `updated ≤30d` Kueue is a Kubernetes-native job queueing system providing APIs and controllers for managing batch job admission, resource fairness, and priority scheduling across clusters. <details><summary>More about</summary>

  It provides the scheduling backbone needed to scale AI model training and batch inference workloads efficiently within Kubernetes environments.

  _Just what every ML engineer wanted: another layer of YAML to debug so their pods can fight each other for GPU time in a scientifically fair manner._

  `kubernetes` `job-queueing` `scheduling` `llmops` `batch-jobs`
  </details>

- **[hamilton](https://github.com/apache/hamilton)** `⭐ 2.5k` `updated ≤30d` Apache Hamilton is a Python library for defining data transformation DAGs as modular, testable functions, with built-in lineage tracking and a UI for visualization and monitoring. <details><summary>More about</summary>

  It gives data and AI teams a structured way to move from ad-hoc notebooks to production pipelines without rewriting their transformation logic.

  _Yet another framework that promises to make your spaghetti notebook code production-ready, provided you agree to redefine your entire pipeline as a curry-flavored dependency graph._

  `dag` `data-engineering` `mlops` `python` `llmops`
  </details>

- **[hamilton](https://github.com/dagworks-inc/hamilton)** `⭐ 2.5k` `updated ≤30d` Apache Hamilton is a Python library for defining data transformation DAGs as regular functions, enabling testable, modular, and self-documenting dataflows with automatic lineage tracing. <details><summary>More about</summary>

  It lets developers structure ETL, ML, and LLM workflows as portable Python code instead of tangled notebooks or fragile pipeline DSLs, with built-in visualization and environment-specific configuration.

  _Another chance to pretend your fragile pandas script is actually a production-grade DAG, right up until you import `@config.when` and remember you still have to debug the business logic yourself._

  `dag` `data-engineering` `python` `mlops` `llmops`
  </details>

- **[rasagpt](https://github.com/paulpierre/rasagpt)** `⭐ 2.5k` `updated ≤180d` A headless LLM chatbot platform built on Rasa and Langchain that provides a FastAPI backend, document ingestion, and pgvector-based retrieval for building Telegram and multi-channel bots. <details><summary>More about</summary>

  It gives developers a ready-to-run boilerplate that wires together Rasa's conversational NLU with Langchain's LLM retrieval, multi-tenancy, and document ingestion so they can skip the integration headaches.

  _Yet another ambitious framework promising to glue yesterday's chatbot state machine to today's LLM hallucination engine, just waiting for you to declare it production-ready before discovering the prompt injection caveats._

  `chatbot` `rasa` `langchain` `fastapi` `llm`
  </details>

- **[magentic](https://github.com/jackmpcollins/magentic)** `⭐ 2.4k` `updated ≤90d` A Python library that uses decorators to turn LLM prompts into typed functions with structured outputs, tool use, and agentic chaining. <details><summary>More about</summary>

  It lets developers embed LLM capabilities directly into Python code using familiar function syntax and Pydantic models, bridging the gap between scripts and agentic behavior.

  _You can now build a recursive agent chain inside a function decorator, because apparently your stack traces needed another layer of existential uncertainty._

  `python` `llm` `agents` `pydantic` `framework`
  </details>

- **[dotagent](https://github.com/dot-agent/dotagent)** `⭐ 2.3k` `updated >1y` Dotagent (Nextpy) is a Python framework for building self-modifying software and AI applications, combining a specialized prompt engine, structured outputs, and session state management for LLMs. <details><summary>More about</summary>

  It offers developers a code-first stack to optimize LLM interactions—via pre-compiled prompts and KV-cache session reuse—while also scaffolding full-stack generative UI apps.

  _Another 'framework from the future' arrives to ensure you still have to write the boilerplate, just now with an AI that tries to rewrite it while you're looking._

  `ai-framework` `llmops` `python` `self-modifying` `prompt-engineering`
  </details>

- **[nextpy](https://github.com/dot-agent/nextpy)** `⭐ 2.3k` `updated >1y` Nextpy is a Python framework for building self-modifying applications that integrates LLM code generation, optimized prompt compilation, and session state management for faster, controlled AI-driven development. <details><summary>More about</summary>

  It gives developers a structured way to embed self-improving AI behavior directly into Python apps while optimizing token usage and LLM response quality at compile time.

  _Just when you thought your CI pipeline was the only thing rewriting your code, now your framework wants to refactor itself while you wonder if you’re the maintainer or the liability._

  `python` `llm` `framework` `self-modifying` `code-generation`
  </details>

- **[vdp](https://github.com/instill-ai/instill-core)** `⭐ 2.3k` `updated ≤30d` Instill Core is an open-source, full-stack AI infrastructure platform for orchestrating unstructured data ETL, model deployment, and AI pipelines locally or on-premises. <details><summary>More about</summary>

  It provides developers with a self-hosted alternative to fragmented SaaS AI stacks by unifying data preparation, LLM hosting, and pipeline automation into a single deployable system.

  _Yet another 'complete solution' promising to end your infrastructure nightmares, provided you're willing to maintain an entire stack just to avoid calling a single hosted API._

  `infrastructure` `pipeline` `self-hosted` `llm` `etl`
  </details>

- **[vdp](https://github.com/instill-ai/vdp)** `⭐ 2.3k` `updated ≤30d` Instill Core is an open-source, full-stack AI infrastructure platform for orchestrating data pipelines, deploying models, and building AI-first applications with support for unstructured data and RAG. <details><summary>More about</summary>

  It provides developers with a self-hosted, low-code alternative to managed AI platforms for handling the full lifecycle of data ETL, model serving, and pipeline orchestration.

  _Because what the modern developer truly craves is another all-in-one orchestration platform promising to solve the 'unstructured data' problem locally while the GPU fan spins like a jet engine._

  `ai-infrastructure` `pipeline-orchestration` `llm` `rag` `self-hosted`
  </details>

- **[openagi](https://github.com/agiresearch/openagi)** `⭐ 2.3k` `updated >1y` OpenAGI is a Python package and SDK for creating and sharing modular AI agents, now intended to be used with the Cerebrum SDK and AIOS kernel. <details><summary>More about</summary>

  It provides a structured framework for developers to build, package, and distribute custom AI agents with defined configurations and dependencies.

  _Just when you thought your stack was stable, here is another SDK telling you that the correct way to build agents involves migrating to a new package called Cerebrum while the old one is still online._

  `agents` `sdk` `framework` `aios`
  </details>

- **[lagent](https://github.com/internlm/lagent)** `⭐ 2.2k` `updated ≤30d` A lightweight Python framework for building LLM-based agents with PyTorch-inspired abstractions for message passing, memory management, and multi-agent workflows. <details><summary>More about</summary>

  It gives developers a code-first way to define agent behavior, manage conversation state, and assemble multi-agent systems without adopting a heavier orchestration platform.

  _Another framework promising that if you just learn one more set of abstractions, you’ll finally stop glueing together disparate LLM calls and start building actual agentic products._

  `agents` `framework` `llm` `multi-agent` `python`
  </details>

- **[agentuniverse](https://github.com/agentuniverse-ai/agentuniverse)** `⭐ 2.2k` `updated ≤30d` agentUniverse is a Python-based multi-agent framework built on large language models, providing builders with predefined collaboration patterns like PEER and DOE to construct domain-specific autonomous agent systems. <details><summary>More about</summary>

  It gives developers a structured way to compose specialized agents using proven collaboration patterns derived from AntGroup's financial business practices, rather than wiring ad-hoc message passing by hand.

  _Yet another multi-agent framework enters the arena, confidently promising that the real solution to your complexity problem is adding five more agents and a 'Pattern Factory'._

  `multi-agent` `llm` `framework` `python` `orchestration`
  </details>

- **[agentuniverse](https://github.com/alipay/agentuniverse)** `⭐ 2.2k` `updated ≤30d` agentUniverse is a Python-based LLM multi-agent framework from AntGroup that provides pre-built collaborative patterns (like PEER and DOE) for developers to build domain-specific expert agents. <details><summary>More about</summary>

  It offers a structured way to move beyond single-agent prompts by providing battle-tested collaboration patterns and domain experience integration specifically derived from complex financial industry use cases.

  _Just when you thought a single hallucinating model was manageable, this framework lets you orchestrate several of them into a committee that can collectively over-engineer your financial analysis._

  `multi-agent` `framework` `python` `llm` `antgroup`
  </details>

- **[langchainrb](https://github.com/andreibondarev/langchainrb)** `⭐ 2k` `updated ≤30d` A Ruby gem providing a unified interface for LLMs, RAG pipelines, and assistants to build AI-powered applications in Ruby. <details><summary>More about</summary>

  It allows Ruby and Rails developers to integrate multiple LLM providers, embeddings, and RAG workflows without rewriting infrastructure for every new model release.

  _Now you can orchestrate sophisticated agent workflows in Ruby, just in time for the rest of the ecosystem to rewrite everything in TypeScript for the fourth time this year._

  `ruby` `llm` `rag` `agents` `sdk`
  </details>

- **[langchainrb](https://github.com/patterns-ai-core/langchainrb)** `⭐ 2k` `updated ≤30d` A Ruby gem providing a unified interface for LLMs, prompt management, output parsers, RAG systems, and assistants to build AI-powered applications. <details><summary>More about</summary>

  It allows Ruby and Rails developers to integrate LLMs, embeddings, and RAG workflows into their applications without writing provider-specific boilerplate.

  _Yet another ecosystem inevitably fragments as it rebuilds the same LLM abstraction layer, ensuring Rubyists can now argue about prompt templates just as vigorously as their Python counterparts._

  `ruby` `llm` `rag` `framework` `sdk`
  </details>

- **[agentset](https://github.com/agentset-ai/agentset)** `⭐ 2k` `updated ≤30d` An open-source platform for building, evaluating, and shipping production-ready RAG and agentic applications with built-in ingestion, vector indexing, and a chat playground. <details><summary>More about</summary>

  It gives developers a turnkey, model-agnostic stack to ship RAG-powered apps quickly without having to hand-roll ingestion and evaluation pipelines.

  _Yet another promise that you can finally stop worrying about retrieval quality, right before you spend three days tuning chunk sizes and wondering why your citations look hallucinated._

  `rag` `agentic-rag` `mcp` `llm` `embeddings`
  </details>

- **[notte](https://github.com/nottelabs/notte)** `⭐ 1.9k` `updated ≤30d` A framework and SDK for building and deploying AI web automation agents that combine scripting with LLM-driven browser interactions. <details><summary>More about</summary>

  It lets developers mix deterministic Playwright-style scripting with AI agents to cut web automation costs and improve reliability on hosted stealth browser infra.

  _Yet another web agent framework promising to solve the web with LLMs, just in time for everyone to realize that scrolling cat memes programmatically is the true killer app._

  `web-agents` `browser-automation` `sdk` `python` `llm`
  </details>

- **[neuron-ai](https://github.com/neuron-core/neuron-ai)** `⭐ 1.9k` `updated ≤30d` Neuron AI is a PHP framework for building and orchestrating AI agents, supporting integration with LLMs, vector databases, memory, tools, and RAG workflows within existing PHP applications. <details><summary>More about</summary>

  It gives PHP developers a code-first, framework-native way to embed agentic behavior into Laravel or Symfony projects without switching ecosystems.

  _Another perfectly good backend language gets agentified, because apparently your CRUD app was lonely and wanted its own autonomous coworkers._

  `php` `agent-framework` `llm` `orchestration`
  </details>

- **[demogpt](https://github.com/melih-unsal/demogpt)** `⭐ 1.9k` `updated ≤90d` A Python framework and Streamlit app for quickly creating LLM agents with integrated tools, RAG, knowledge graphs, and vector databases, built on LangChain. <details><summary>More about</summary>

  It bundles the fragmented LangChain ecosystem—tools, prompts, and memory—into a single toolkit so developers can spin up functional agents without stitching together a dozen dependencies.

  _Another heroic attempt to abstract the abstraction layer, proving that in 2024 the fastest way to build an agent is to install a framework that helps you install other frameworks._

  `llm-agents` `langchain` `rag` `python` `streamlit`
  </details>

- **[autochain](https://github.com/forethought-technologies/autochain)** `⭐ 1.9k` `updated ≤180d` AutoChain is a lightweight Python framework for building and automatically evaluating LLM-powered generative agents with custom tools and simplified abstractions. <details><summary>More about</summary>

  It lets developers iterate faster on agent behavior by combining a LangChain-like interface with simulated multi-turn conversations for automated regression testing.

  _Another week, another agent framework promising to solve the 'painful and undefined' evaluation problem while adding one more abstraction layer we’ll inevitably rewrite in six months._

  `agent-framework` `llm` `evaluation` `python` `langchain`
  </details>

- **[minirag](https://github.com/hkuds/minirag)** `⭐ 1.9k` `updated ≤1y` MiniRAG is a lightweight retrieval-augmented generation framework that enables small, open-source language models to perform effective RAG using heterogeneous graph indexing and topology-enhanced retrieval. <details><summary>More about</summary>

  It allows developers to build RAG systems that run on resource-constrained devices or with smaller models, reducing storage costs by 75% compared to traditional methods.

  _Yet another RAG framework arrives to assure you that this time, the graph topology will finally solve the context problem without requiring a PhD in knowledge graphs._

  `rag` `framework` `small-language-models` `graph-retrieval` `lightweight`
  </details>

- **[oxygent](https://github.com/jd-opensource/oxygent)** `⭐ 1.8k` `updated ≤30d` OxyGent is a Python framework for building modular, observable, and evolvable multi-agent systems using standardized 'Oxy' components. <details><summary>More about</summary>

  It provides developers with a structured way to assemble, debug, and scale collaborative AI agents with hot-swappable components and built-in evaluation loops.

  _Another modular agent framework that promises your distributed AI team will collaborate better than your actual standup ever has._

  `multi-agent` `framework` `python` `jd` `agent-topology`
  </details>

- **[shannon](https://github.com/kocoro-lab/shannon)** `⭐ 1.8k` `updated ≤30d` Shannon is a Go- and Rust-based multi-agent orchestration framework with Temporal workflows, WASI sandboxing, token budgeting, and an included desktop app for building and observing production AI agents. <details><summary>More about</summary>

  It gives developers a self-hosted, observable runtime for running multi-agent systems with cost controls, human approval gates, and execution replay instead of crossing fingers and hoping the swarm converges.

  _You now have a full Temporal + Rust + Go + Python + Tauri stack to debug so your agents can autonomously spend your API budget with enterprise-grade confidence._

  `multi-agent` `orchestration` `self-hosted` `observability` `go`
  </details>

- **[agentflow](https://github.com/lupantech/agentflow)** `⭐ 1.8k` `updated ≤90d` AgentFlow is a modular, trainable agentic framework that optimizes a Planner, Executor, Verifier, and Generator with Flow-GRPO for long-horizon reasoning and tool use. <details><summary>More about</summary>

  It gives developers a code-first way to build and train multi-agent systems that can reliably interleave reasoning with tool calls on long-horizon tasks.

  _We have now reached the point where the agents need their own agents to learn how to use agents, and somewhere a Staff Engineer is writing a 40-page RFC to decide who owns the Planner._

  `agentic-ai` `reinforcement-learning` `multi-agent` `tool-augmented` `llm-framework`
  </details>

- **[smartgpt](https://github.com/cormanz/smartgpt)** `⭐ 1.7k` `updated >1y` SmartGPT is an experimental Rust-based program that extends LLMs like GPT-3.5 and GPT-4 with autonomous task-completion capabilities, plugin support, and dynamic/static agent orchestration. <details><summary>More about</summary>

  It offers developers a modular, code-first framework for building autonomous agents that can break down complex objectives and interact with external tools like search and browsing.

  _Just what the ecosystem needed: another experimental agent loop written by a high schooler that promises to solve complex tasks while explicitly warning you that stability is merely a fever dream._

  `agents` `rust` `autonomous` `plugins` `framework`
  </details>

- **[mlrun](https://github.com/mlrun/mlrun)** `⭐ 1.7k` `updated ≤30d` MLRun is an open source AI orchestration platform for building and managing continuous ML and gen AI applications across their lifecycle, integrating with development and CI/CD environments to automate data, pipeline, and model serving. <details><summary>More about</summary>

  It gives developers a unified, code-first framework to move gen AI experiments into production pipelines with integrated data management, model fine-tuning, and serverless deployment.

  _Yet another platform promising to break down silos between every team in the building, as if a Kubernetes-backed workflow orchestrator is what was missing from your already fragile cocktail of MLOps tools._

  `mlops` `ai-orchestration` `genai` `kubernetes` `pipelines`
  </details>

- **[agentfield](https://github.com/agent-field/agentfield)** `⭐ 1.6k` `updated ≤30d` AgentField is an open-source control plane and SDK for building, deploying, and scaling AI agents as callable API endpoints with built-in identity, memory, and audit trails. <details><summary>More about</summary>

  It gives developers a code-first way to turn Python, Go, or TypeScript agent logic into production infrastructure with routing, human-in-the-loop pauses, and cryptographic audit trails.

  _We have successfully reinvented the microservice stack for the third time this week, only this time the services occasionally hallucinate and need a cryptographic identity to do so._

  `agents` `control-plane` `sdk` `audit` `python`
  </details>

- **[uagents](https://github.com/fetchai/uagents)** `⭐ 1.6k` `updated ≤30d` A Python framework for building autonomous, decentralized AI agents that register on the Fetch.ai blockchain and communicate via cryptographic messaging. <details><summary>More about</summary>

  It provides developers with a structured SDK to build multi-agent systems that can discover each other and exchange value on a decentralized network.

  _Yet another agent framework enters the arena, proving that while we can't agree on what an agent is, we can all agree it needs its own blockchain._

  `agents` `python` `framework` `decentralized` `blockchain`
  </details>

- **[thinkgpt](https://github.com/alaeddine-13/thinkgpt)** `⭐ 1.6k` `updated >1y` ThinkGPT is a Python library that implements Chain of Thoughts, memory, and reasoning primitives to extend LLM capabilities with techniques like self-refinement and knowledge compression. <details><summary>More about</summary>

  It provides developers with importable building blocks to solve limited context windows and add higher-order reasoning to their own LLM-powered applications.

  _Yet another reminder that the industry is frantically building external brains to compensate for the fact that our models still can't remember what they did five minutes ago._

  `python` `llm` `memory` `reasoning` `library`
  </details>

- **[thinkgpt](https://github.com/jina-ai/thinkgpt)** `⭐ 1.6k` `updated >1y` ThinkGPT is a Python library that provides Chain of Thoughts building blocks—such as long-term memory, self-refinement, knowledge compression, and natural language conditions—for enhancing LLM capabilities in code. <details><summary>More about</summary>

  It gives developers structured, importable primitives to add reasoning, memory, and self-healing behaviors to their own LLM-powered applications without starting from scratch.

  _Another library promising to push your LLM beyond its limits, just in case you were worried your code didn't have enough non-deterministic thinking already._

  `python` `chain-of-thought` `llm-library` `memory` `reasoning`
  </details>

- **[cag](https://github.com/hhhuang/cag)** `⭐ 1.5k` `updated ≤1y` Cache-Augmented Generation (CAG) is a research implementation and evaluation framework for an alternative to RAG that preloads knowledge into an LLM's KV-cache to eliminate real-time retrieval. <details><summary>More about</summary>

  It provides developers with a streamlined, lower-latency architecture for knowledge-intensive tasks that fits entirely within an LLM's extended context window, bypassing the complexity of vector databases.

  _Just when you finished debugging your chunking strategy and vector store, the community decides the best context is the one you preheat and cache like a microwave dinner._

  `rag` `llm` `cache` `inference` `research`
  </details>

- **[mirascope](https://github.com/mirascope/mirascope)** `⭐ 1.5k` `updated ≤30d` Mirascope is a Python and TypeScript SDK that provides a unified interface for calling multiple frontier LLMs and building agents with structured outputs and tool use. <details><summary>More about</summary>

  It lets developers write LLM-powered features and agents against a single API surface instead of wrestling with provider-specific SDKs.

  _Yet another valiant attempt to abstract away the chaotic LLM landscape, proving that the only thing developers love more than a new model is a new abstraction layer to wrap it._

  `llm` `sdk` `python` `typescript` `agents`
  </details>

- **[agent-protocol](https://github.com/agi-inc/agent-protocol)** `⭐ 1.5k` `updated >1y` A tech-stack agnostic API specification (OpenAPI) and SDK defining a common REST interface for communicating with and benchmarking AI agents. <details><summary>More about</summary>

  It standardizes agent communication so developers can swap, benchmark, and integrate different agents without rewriting their integration code.

  _We’ve reached the point where we’re building protocols to manage the chaos of the protocols we just built to manage the agents._

  `agents` `protocol` `api` `benchmarking` `sdk`
  </details>

- **[agent-protocol](https://github.com/e2b-dev/agent-protocol)** `⭐ 1.5k` `updated >1y` A tech-agnostic API specification and SDK that defines a common REST interface for interacting with and benchmarking AI agents. <details><summary>More about</summary>

  It provides a standardized OpenAPI contract so developers can integrate, swap, and benchmark different agents without rewriting their client code.

  _We have standardized the way we talk to the rapidly mutating agents, but we are still waiting for the agents to standardize on being useful._

  `agents` `protocol` `api` `interoperability`
  </details>

- **[loopgpt](https://github.com/farizrahman4u/loopgpt)** `⭐ 1.5k` `updated ≤30d` LoopGPT is a Python-based, modular reimplementation of Auto-GPT designed as an extensible framework for building and running autonomous agents using GPT-3.5 or GPT-4. <details><summary>More about</summary>

  It provides developers with a 'pythonic' library to construct custom autonomous agents with features like state serialization and human-in-the-loop controls without requiring external databases.

  _Just what the ecosystem needed in 2023: another recursive loop of GPT-3.5 trying to execute shell commands until it inevitably hallucinates its way into an infinite token-consuming void._

  `agents` `framework` `python` `autonomous` `gpt`
  </details>

- **[ai-legion](https://github.com/eumemic/ai-legion)** `⭐ 1.4k` `updated ≤1y` AI Legion is a Node.js framework for spawning multiple LLM-powered autonomous agents that collaborate, maintain state, and execute tasks via the command line. <details><summary>More about</summary>

  It provides a local, code-first environment for developers to experiment with multi-agent collaboration and persistent agent memory without relying on hosted SaaS platforms.

  _It offers the unique thrill of watching autonomous agents eat through your GPT-4 token budget while struggling to remember how to format a simple multiline parameter._

  `agents` `multi-agent` `framework` `nodejs` `autonomous`
  </details>

- **[adala](https://github.com/humansignal/adala)** `⭐ 1.4k` `updated ≤30d` Adala is a Python framework for building autonomous agents that iteratively learn and apply skills to process and label data using LLMs. <details><summary>More about</summary>

  It lets data scientists and AI engineers define ground-truth environments and let agents handle data preprocessing, postprocessing, and labeling tasks directly from notebooks or scripts.

  _Finally, an autonomous agent framework dedicated to the noble pursuit of labeling datasets while you wonder if the agent is learning faster than your junior hires._

  `agents` `data-labeling` `llm` `framework` `python`
  </details>

- **[budgetml](https://github.com/ebhy/budgetml)** `⭐ 1.3k` `updated >1y` A Python library that deploys ML inference models to secured HTTPS endpoints on cheap GCP preemptible instances with minimal configuration. <details><summary>More about</summary>

  It lets data scientists and developers skip the DevOps rabbit hole of Docker, SSL, and Kubernetes just to get a prediction API online on a budget.

  _We have officially reached the point where even our budget deployment tools are begging for new maintainers while promising 80% savings and 99% uptime on hardware designed to shut down every 24 hours._

  `mlops` `deployment` `inference` `gcp` `fastapi`
  </details>

- **[e2b-cookbook](https://github.com/e2b-dev/e2b-cookbook)** `⭐ 1.3k` `updated ≤30d` A collection of example code, guides, and integrations for building with the E2B SDK across multiple LLM providers and AI frameworks. <details><summary>More about</summary>

  It gives developers runnable patterns for wiring secure E2B sandboxes into agentic workflows with OpenAI, Anthropic, LangChain, LangGraph, and other stacks.

  _Yet another cookbook proving that the modern developer experience is mostly copying someone else’s example code and praying the sandbox doesn’t time out._

  `e2b` `cookbook` `sdk` `agents` `examples`
  </details>

- **[ai-utils.js](https://github.com/lgrammel/ai-utils.js)** `⭐ 1.3k` `updated >1y` A TypeScript library (marketed as ModelFusion) that provides a vendor-neutral abstraction layer for integrating text, image, and embedding AI models into JavaScript and TypeScript applications. <details><summary>More about</summary>

  Developers building JS/TS AI apps can use a unified API for streaming, tool usage, and retries across providers like OpenAI, Ollama, and Hugging Face without rewriting model integrations.

  _Yet another TypeScript wrapper that was acquired and absorbed into a larger SDK, ensuring your dependencies stay current through a gentle game of framework musical chairs._

  `typescript` `llm` `sdk` `multi-modal`
  </details>

- **[langchain-rust](https://github.com/abraxas-365/langchain-rust)** `⭐ 1.3k` `updated ≤30d` A Rust implementation of LangChain providing LLMs, embeddings, vector stores, chains, agents, and document loaders for building LLM-powered applications in Rust. <details><summary>More about</summary>

  It brings the composable LangChain mental model and ecosystem patterns to Rust developers building production LLM features without leaving their preferred language.

  _Now you can orchestrate a twelve-link chain of LLM calls, vector searches, and tools while fighting the borrow checker instead of just fighting Python dependency hell._

  `rust` `langchain` `llm` `framework` `agents`
  </details>

- **[langchain](https://github.com/brainlid/langchain)** `⭐ 1.2k` `updated ≤30d` An Elixir framework and SDK providing abstractions and reusable components for integrating various LLMs and AI services into Elixir applications. <details><summary>More about</summary>

  It gives Elixir developers a native, functional-style library to chain LLM calls, manage prompts, and build agentic workflows without leaving the BEAM ecosystem.

  _Because what the world definitely needed in 2024 was another LangChain port, ensuring that the '灵丹妙药' (magic medicine) of Python can now introduce the same vector-db-induced complexity to your fault-tolerant Elixir supervisors._

  `elixir` `langchain` `llm-sdk` `framework`
  </details>

- **[ai-jsx](https://github.com/fixie-ai/ai-jsx)** `⭐ 1.1k` `updated >1y` AI.JSX is a JavaScript/TypeScript framework that uses JSX to build AI applications, allowing developers to compose LLM prompts, tools, and generative UI components like standard React components. <details><summary>More about</summary>

  It gives React and Next.js developers a familiar, component-based paradigm for structuring LLM interactions and dynamically rendering UI from model outputs without switching stacks.

  _Finally, you can nest your hallucinations inside the same component tree as your loading spinners, proving once and for all that JSX is the universal solvent for every problem, including the ones we just invented._

  `jsx` `react` `llm-framework` `typescript` `generative-ui`
  </details>

- **[agents](https://github.com/inkeep/agents)** `⭐ 1.1k` `updated ≤30d` An open-source platform for building AI agents using a no-code visual builder or a TypeScript SDK, featuring full two-way sync between the two interfaces. <details><summary>More about</summary>

  It allows engineering teams to use typed, CI/CD-friendly code while business teams use a drag-and-drop canvas, bridging the gap between technical implementation and non-technical management of AI workflows.

  _Finally, a tool to manage the meta-agent that manages the sub-agent that logs 'h3llo world' in a console you stopped watching three frameworks ago._

  `agents` `typescript` `no-code` `mcp` `sdk`
  </details>

- **[ax](https://github.com/axilla-io/ax)** `⭐ 1.1k` `updated >1y` A modular, code-first TypeScript framework providing SDKs and utilities for building LLM-powered applications, including data connectors and evaluation tooling. <details><summary>More about</summary>

  It gives TypeScript developers a structured, incremental way to wire together models, React hooks, data pipelines, and evaluations without committing to a monolithic orchestration stack.

  _Yet another lovingly modular LLM framework arrives to ensure your dependency graph stays as entangled as your prompt chains._

  `typescript` `llm` `framework` `sdk` `evaluation`
  </details>

- **[axflow](https://github.com/axflow/axflow)** `⭐ 1.1k` `updated >1y` Axflow is a modular TypeScript framework and SDK for building AI-powered applications, featuring React hooks, streaming utilities, data connectors, and evaluation tooling. <details><summary>More about</summary>

  It offers a code-first, incremental approach for TypeScript developers to integrate LLMs, manage data connections, and evaluate outputs without committing to a monolithic framework.

  _Yet another TypeScript framework promising to deconstruct the 'complex paradigms' of LLMs into modular components, ensuring you can spend your afternoon debating which abstraction layer best wraps your streaming tokens._

  `typescript` `framework` `sdk` `llm` `evals`
  </details>

- **[llama_embeddings_fastapi_service](https://github.com/dicklesworthstone/llama_embeddings_fastapi_service)** `⭐ 1.1k` `updated >1y` A FastAPI service that hosts local LLMs via llama_cpp to provide REST endpoints for text embeddings, semantic search over precomputed vectors, text completion, audio transcription, and document ingestion. <details><summary>More about</summary>

  It packages local LLM capabilities—including advanced similarity measures and document/OCR support—into a ready-to-integrate API service for developers building semantic search or RAG workflows.

  _Just when you thought you could escape the 'which pooling method best captures my soul' debate, here is a service offering six mathematical ways to flatten your tokens while you debug a RAM disk._

  `fastapi` `local-llm` `embeddings` `semantic-search` `llama-cpp`
  </details>

- **[llm_agents](https://github.com/mpaepper/llm_agents)** `⭐ 1k` `updated ≤1y` A minimal Python library for building LLM-controlled agents with custom tools, implemented as a simplified, from-scratch alternative to LangChain. <details><summary>More about</summary>

  It provides developers with a transparent, few-hundred-line reference implementation for understanding and customizing the Thought-Action-Observation agent loop without LangChain's abstraction layers.

  _Because what the modern developer truly needs is yet another from-scratch agent framework to debate whether the ReAct loop is best implemented in 400 lines of Python or 300 lines of TypeScript._

  `agents` `langchain` `llm` `python` `framework`
  </details>

- **[lanarky](https://github.com/ajndkr/lanarky)** `⭐ 992` `updated >1y` Lanarky is a Python web framework, built on FastAPI, for building LLM-powered microservices with built-in streaming support over HTTP and WebSockets. <details><summary>More about</summary>

  It offers developers a familiar, FastAPI-based scaffolding to quickly spin up streaming LLM microservices without being locked into specific LLM vendors or cloud providers.

  _An open-source framework for building LLM microservices that is already in maintenance mode just a year after launch, serving as a stark reminder that in the AI ecosystem, 'microservice' is often just a fancy word for 'abandoned side project.'._

  `llmops` `python` `fastapi` `microservices` `streaming`
  </details>

- **[gptswarm](https://github.com/metauto-ai/gptswarm)** `⭐ 989` `updated ≤90d` GPTSwarm is a graph-based Python framework for building LLM-based agents as interconnected graphs, featuring self-organization and self-improvement capabilities. <details><summary>More about</summary>

  It provides developers with code-first building blocks to construct and optimize multi-agent systems using graph structures and reinforcement learning techniques.

  _Just when you thought your code was complex enough, now you can architect a society of minds that optimizes its own topology while you wonder if the swarm is quietly refactoring you out of the loop._

  `multi-agent` `framework` `graph` `python` `self-improvement`
  </details>

- **[mm-react](https://github.com/microsoft/mm-react)** `⭐ 968` `updated >1y` MM-REACT is a research system that integrates ChatGPT with specialized vision experts via LangChain to enable multimodal reasoning and action on images. <details><summary>More about</summary>

  It provides a concrete reference implementation for developers looking to compose LLMs with external perception APIs to build multimodal assistants.

  _You can now orchestrate a dozen Azure endpoints just to ask an AI what celebrity is in a photo, because apparently standard image recognition wasn't sufficiently complex._

  `multimodal` `langchain` `vision` `research`
  </details>

- **[kaito](https://github.com/kaito-project/kaito)** `⭐ 926` `updated ≤30d` KAITO is a Kubernetes operator that automates the deployment of LLM inference, fine-tuning, and RAG engines by managing GPU provisioning, scheduling, and scaling within a cluster. <details><summary>More about</summary>

  It simplifies running self-hosted LLMs on Kubernetes by handling the complex orchestration of GPU nodes, model memory estimation, and inference engine configuration automatically.

  _Just when you thought your YAML files were safe, now your cluster can auto-provision expensive GPUs just to host a chatbot that summarizes your Jira tickets._

  `kubernetes` `llm-serving` `gpu` `operator` `rag`
  </details>

- **[mosec](https://github.com/mosecorg/mosec)** `⭐ 900` `updated ≤30d` Mosec is a high-performance ML model serving framework built with Rust and Python that provides dynamic batching and pipelined CPU/GPU execution for deploying models as microservices. <details><summary>More about</summary>

  It lets developers wrap trained models—including LLMs and diffusion models—into efficient, Prometheus-monitored APIs without rebuilding their inference logic or switching ML frameworks.

  _Yet another reminder that serving a model at scale remains harder than training it, now with the added peace of mind that Rust is quietly judging your Python runtime._

  `model-serving` `mlops` `rust` `python` `llm-serving`
  </details>

- **[dragonfly](https://github.com/dragonfly/dragonfly)** `⭐ 894` `updated >1y` Dragonfly is an open source Python library for scalable Bayesian optimisation, supporting high-dimensional, parallel, multi-fidelity, and multi-objective optimisation tasks. <details><summary>More about</summary>

  It provides developers with a ready-to-import framework for optimising expensive black-box functions, useful for tuning machine learning hyperparameters or neural architecture search without building custom optimisation loops.

  _Yet another reminder that while we’re busy vibing with LLM agents, there’s an entire ecosystem of classical optimisation maths quietly waiting to be rediscovered by prompting a model to tune our hyperparameters._

  `bayesian-optimisation` `python-library` `hyperparameter-tuning` `automl` `scalable`
  </details>

- **[vectordb](https://github.com/epsilla-cloud/vectordb)** `⭐ 873` `updated ≤180d` Epsilla is an open-source, high-performance vector database management system written in C++, designed for scalable similarity search and LLM memory retention. <details><summary>More about</summary>

  It provides developers with a familiar database interface for vector data, claiming 10x faster search than HNSW to build RAG pipelines and AI memory layers.

  _Yet another vector database enters the fray, ensuring you can spend the next sprint benchmarking cosine similarity distances while wondering if your stack actually needed this complexity._

  `vector-database` `vector-search` `rag` `embeddings` `infrastructure`
  </details>

- **[chatpdf](https://github.com/akshata29/chatpdf)** `⭐ 866` `updated >1y` An accelerator for building ChatGPT-like experiences over enterprise data using Azure OpenAI, LangChain, and vector stores like Pinecone or Redis. <details><summary>More about</summary>

  It provides a ready-to-deploy reference architecture for RAG pipelines, including implementations of advanced techniques and evaluation flows for groundedness and similarity.

  _Just what the world needed: another 'chat with your PDF' starter kit that proves the hardest part of AI isn't the model, it's deciding which Azure service acronym to configure first._

  `rag` `azure` `langchain` `enterprise` `evaluation`
  </details>

- **[chatpdf](https://github.com/akshata29/entaoai)** `⭐ 866` `updated >1y` An accelerator for building ChatGPT-like experiences over enterprise data using Azure OpenAI, vector stores, and various RAG patterns. <details><summary>More about</summary>

  It provides developers with a ready-to-deploy scaffold for RAG workflows, including evaluation flows for groundedness, similarity, and coherence.

  _Another heroic attempt to convince the enterprise that uploading everything to a vector store is the same thing as having a knowledge management strategy._

  `rag` `azure` `enterprise` `llm`
  </details>

- **[promptwright](https://github.com/always-further/deepfabric)** `⭐ 865` `updated ≤30d` DeepFabric is a Python framework for generating high-quality synthetic training data, evaluating model performance, and fine-tuning language models via topic graphs and MCP-integrated tool execution. <details><summary>More about</summary>

  It lets developers create domain-specific datasets with structured tool-calling traces and built-in evals, streamlining the pipeline from synthetic data generation to model training.

  _Just what we needed: another way to hallucinate an entire training corpus so your model can learn to be confidently incorrect with perfect schema adherence._

  `synthetic-data` `fine-tuning` `evals` `mcp` `llm-training`
  </details>

- **[ioa](https://github.com/openbmb/ioa)** `⭐ 822` `updated ≤1y` Internet of Agents (IoA) is an open-source framework for connecting diverse AI agents across distributed environments to autonomously form teams and collaborate on complex tasks. <details><summary>More about</summary>

  It provides developers with a code-first architecture to integrate heterogeneous agents like AutoGPT and Open Interpreter into a unified, scalable system.

  _Finally, your agents can experience the same fragmented, asynchronous communication overhead and team-forming bureaucracy that makes human internet collaboration so endlessly entertaining._

  `agent` `orchestration` `framework` `llm` `genai`
  </details>

- **[microagents](https://github.com/aymenfurter/microagents)** `⭐ 812` `updated >1y` An experimental Python framework that dynamically generates, validates, and stores microservice-sized AI agents that can self-edit their prompts and code to solve tasks and reuse successful patterns across sessions. <details><summary>More about</summary>

  It offers a code-first way to build agents that iteratively improve their own instructions and logic, giving developers a sandbox for self-modifying LLM workflows.

  _You can now watch in real time as your agents decide their own prompts were the problem, fix them, and then pat themselves on the back in a local database._

  `agents` `self-improving` `python` `framework` `langchain`
  </details>

- **[agentforge](https://github.com/databassgit/agentforge)** `⭐ 787` `updated ≤30d` AgentForge is an open-source, low-code Python framework for building and orchestrating autonomous AI agents and multi-agent cognitive architectures using YAML-defined workflows and memory. <details><summary>More about</summary>

  It allows developers to rapidly prototype and iterate on multi-agent systems with minimal code while supporting model-agnostic execution across OpenAI, Anthropic, Google, and local models via Ollama or LMStudio.

  _Another extensible AGI framework hits the repo, offering YAML-powered cognitive architectures that let you orchestrate sentient-seeming chaos while you still manually debug why the memory system forgot the task three steps ago._

  `agents` `framework` `python` `orchestration` `low-code`
  </details>

- **[bambooai](https://github.com/pgalko/bambooai)** `⭐ 776` `updated ≤90d` A Python library that enables natural language-driven data analysis by generating and executing Python code against datasets using various LLMs. <details><summary>More about</summary>

  It allows developers and analysts to interact with data via conversation, automating the generation of analysis code and visualizations without manual scripting.

  _Because what the world truly needed was another abstraction layer where an LLM hallucinates pandas code so you can debug dataframes you never wrote._

  `llm` `data-analysis` `python` `code-generation` `agent`
  </details>

- **[codefuse-muagent](https://github.com/codefuse-ai/codefuse-muagent)** `⭐ 774` `updated >1y` A developer framework for building multi-agent systems that uses an event-driven knowledge graph (EKG) engine to orchestrate complex workflows, featuring a drag-and-drop UI and Python SDK. <details><summary>More about</summary>

  It lets developers model and execute complex SOPs using a knowledge graph to coordinate multiple agents, RAG, and function calls rather than writing brittle linear chains.

  _Just when you thought 'multi-agent orchestration' was a solved problem, someone hands you a graph database and politely asks you to model your entire DevOps lifecycle as events._

  `multi-agent` `knowledge-graph` `orchestration` `ekg`
  </details>

- **[lmms-engine](https://github.com/evolvinglmms-lab/lmms-engine)** `⭐ 773` `updated ≤30d` A lean, unified training engine for building and fine-tuning multimodal large language models at scale using PyTorch. <details><summary>More about</summary>

  It gives developers a streamlined, configuration-driven path to train custom vision-language models without wrestling with fragmented research codebases.

  _Just what the ecosystem needed: another framework to help you spend your GPU budget proving that your cat photos can indeed caption themselves with 99% MFU._

  `multimodal` `training` `fine-tuning` `pytorch` `llm`
  </details>

- **[fructose](https://github.com/bananaml/fructose)** `⭐ 750` `updated >1y` Fructose is a Python library that lets developers wrap LLM calls as strongly-typed functions using an @ai decorator. <details><summary>More about</summary>

  It provides a lightweight way to integrate structured, type-safe LLM outputs directly into Python applications without heavy boilerplate.

  _We have successfully abstracted the chaos of LLM outputs into a `@ai` decorator, meaning your type checker is now the first line of defense against hallucinations._

  `python` `llm` `framework` `typed-interface` `function-calling`
  </details>

- **[langchain-visualizer](https://github.com/amosjyng/langchain-visualizer)** `⭐ 740` `updated >1y` A Python library that adapts the ICE visualizer to render LangChain workflow executions, prompt templates, and LLM call costs in a browser UI. <details><summary>More about</summary>

  It lets developers visually inspect prompt templating, execution flow, and token costs during local development instead of relying solely on text logs.

  _We have reached the point where debugging an agent requires a dedicated visualizer to understand why a language model spent twelve cents explaining its way through a math problem._

  `langchain` `debugging` `visualization` `python`
  </details>

- **[intlayer](https://github.com/aymericzip/intlayer)** `⭐ 712` `updated ≤30d` A per-component internationalization library for JavaScript applications that integrates AI-powered translations, a visual editor, and a multilingual CMS for frameworks like Next.js, React, and Vite. <details><summary>More about</summary>

  It streamlines the localization workflow by allowing developers to co-locate dictionaries with components and automate translation updates using AI.

  _Another framework-specific dependency promising to solve i18n, now with LLMs to ensure your 'Submit' button is culturally nuanced in forty languages you don't speak._

  `i18n` `localization` `cms` `typescript` `react`
  </details>

- **[fedot](https://github.com/aimclub/fedot)** `⭐ 704` `updated ≤30d` FEDOT is an open-source AutoML framework that uses evolutionary algorithms to automatically design and optimize machine learning pipelines for classification, regression, clustering, and time series tasks. <details><summary>More about</summary>

  It allows developers to automate the complex generative design of ML pipelines, integrating with libraries like Scikit-learn and XGBoost while handling hyperparameter tuning and structural learning.

  _Another framework promising to automate the data scientist out of existence, provided you're comfortable letting an evolutionary algorithm decide your model architecture while you debug the resulting graph._

  `automl` `machine-learning` `evolutionary-algorithms` `python`
  </details>

- **[langchain_dart](https://github.com/davidmigloz/langchain_dart)** `⭐ 676` `updated ≤30d` LangChain.dart is an unofficial Dart port of the LangChain framework, providing ready-to-use components and a standard interface for building LLM-powered applications in Dart and Flutter. <details><summary>More about</summary>

  It brings the full LangChain stack—including model I/O, RAG retrieval, and agents—into the Dart/Flutter ecosystem, allowing mobile and cross-platform developers to build advanced AI features without switching stacks.

  _Now the Flutter faithful can finally implement RAG pipelines and autonomous agents in Dart, ensuring their hot-reload loops remain untainted by the looming spectre of JavaScript or Python._

  `dart` `flutter` `langchain` `llm-framework` `rag`
  </details>

- **[vectordb](https://github.com/jina-ai/vectordb)** `⭐ 650` `updated >1y` A lightweight, Pythonic vector database built on DocArray and Jina for local, on-premise, or cloud-based vector search and CRUD operations. <details><summary>More about</summary>

  It gives Python developers a familiar, no-overhead interface for embedding-based retrieval without the operational burden of heavier vector stores.

  _Yet another 'just enough' vector database, because apparently the 47 existing ones still haven't hit the perfect balance of Pythonic minimalism and existential dread._

  `vector-database` `python` `vector-search` `embeddings`
  </details>

- **[llama-cpp-agent](https://github.com/maximilian-winter/llama-cpp-agent)** `⭐ 630` `updated ≤90d` A Python framework for interacting with LLMs via llama.cpp and other local servers, enabling structured output and function calling through guided sampling. <details><summary>More about</summary>

  It allows developers to add reliable agentic workflows, tool use, and structured outputs to local models that were never specifically fine-tuned for those tasks.

  _Another day, another framework sunsetting itself in the README to point you toward the author's newer, shinier framework, because stability is apparently a legacy feature._

  `llama-cpp` `local-ai` `agent-framework` `function-calling`
  </details>

- **[agentlabs](https://github.com/agentlabs-dev/agentlabs)** `⭐ 547` `updated >1y` An open-source universal frontend for AI agents that provides chat UI, authentication, analytics, and payments via realtime streaming SDKs for Python and TypeScript backends. <details><summary>More about</summary>

  Developers can ship user-facing AI agents with built-in auth, billing, and chat interfaces without building the frontend infrastructure themselves.

  _Yet another layer of plug-and-play agent plumbing that lets us delay, by exactly one sprint, the moment we have to admit we are just wrapping a chat widget around a prompt._

  `ai-agents` `frontend` `sdk` `realtime` `self-hosted`
  </details>

- **[agentlabs](https://github.com/agentlabs-inc/agentlabs)** `⭐ 547` `updated >1y` An open-source universal frontend and backend SDK that lets developers plug their AI agent backends into a ready-made chat UI with authentication, analytics, and payments. <details><summary>More about</summary>

  It lets backend-focused developers ship a user-facing AI agent experience without building and maintaining the frontend, auth, and billing scaffolding themselves.

  _Another layer of 'just bring your own backend' infrastructure so you can proudly tell your PM you shipped an AI agent while quietly praying the streaming SDK doesn't desync in production._

  `ai-agents` `frontend` `sdk` `realtime` `self-hosted`
  </details>

- **[fastagency](https://github.com/ag2ai/fastagency)** `⭐ 537` `updated ≤90d` FastAgency is an open-source Python framework that provides a unified interface for deploying multi-agent workflows built with the AG2 (formerly AutoGen) framework into production web and API environments. <details><summary>More about</summary>

  It allows developers to bridge the gap between AG2 Jupyter notebook prototypes and distributed, production-ready applications with minimal code changes.

  _We have officially reached the point where we need a framework to manage the framework that manages the agents that manage the code._

  `multi-agent` `ag2` `autogen` `production` `orchestration`
  </details>

- **[embedbase](https://github.com/different-ai/embedbase)** `⭐ 522` `updated >1y` A hosted API and JavaScript SDK that provides embeddings-as-a-service and LLM access to help developers build semantic search and text generation features without managing their own vector database. <details><summary>More about</summary>

  It lets developers add semantic search and LLM-powered features to apps quickly by handling embeddings and vector storage as a managed service.

  _Yet another abstraction layer promising to save you from the terrifying complexity of running a vector database, provided you're comfortable handing your data to a hosted API that might vanish faster than your last side project._

  `embeddings` `vectordb` `llm-api` `sdk` `semantic-search`
  </details>

- **[aqueduct](https://github.com/aqueducthq/aqueduct)** `⭐ 519` `updated >1y` Aqueduct is an open-source MLOps framework that lets developers define and run LLM and ML workloads across cloud infrastructure like Kubernetes, Spark, and AWS Lambda using a Python-native API. <details><summary>More about</summary>

  It removes the need to juggle disparate cloud APIs by providing a single Python interface to move ML tasks from a laptop to any cloud environment with built-in visibility.

  _Just what the world needed: another MLOps abstraction layer to sit on top of the Kubernetes-and-Spark tangle we were trying to escape._

  `mlops` `llm` `python` `cloud` `workflow`
  </details>

- **[agency](https://github.com/neurocult/agency)** `⭐ 507` `updated >1y` A Go-native library and SDK for building generative AI applications and autonomous agents using a clean, idiomatic style. <details><summary>More about</summary>

  It gives Go developers a lightweight, statically typed alternative to Python-heavy frameworks like LangChain for wiring up LLMs, RAG, and agentic workflows.

  _Another day, another framework promising to tame the agent swarm, this time with Go interfaces instead of Pythonic abstractions._

  `go` `llm-framework` `agents` `sdk` `generative-ai`
  </details>

- **[a2a-x402](https://github.com/google-agentic-commerce/a2a-x402)** `⭐ 501` `updated ≤30d` An extension to the Agent-to-Agent (A2A) protocol that enables cryptocurrency payments between agents for monetizing services via on-chain transactions. <details><summary>More about</summary>

  It provides a standardized, HTTP 402-inspired payment layer for developers building decentralized agent economies where services must be traded programmatically.

  _Finally, your autonomous agents can accrue crypto debt faster than you can understand the smart contracts enabling it._

  `agent-commerce` `a2a` `payments` `protocol-extension` `crypto`
  </details>

- **[eidolon](https://github.com/eidolon-ai/eidolon)** `⭐ 491` `updated ≤30d` Eidolon is an open-source Python SDK and deployment server for building and serving modular AI agent-based services with built-in HTTP interfaces. <details><summary>More about</summary>

  It lets developers treat agents as deployable services with swappable components, making it easier to upgrade LLMs or RAG implementations without rewriting the whole system.

  _Yet another framework promising no vendor lock-in, ensuring you remain locked into the specific framework that guarantees you won't be locked in._

  `agents` `sdk` `python` `microservices` `rag`
  </details>

- **[archai](https://github.com/microsoft/archai)** `⭐ 486` `updated ≤180d` Archai is a Microsoft framework for Neural Architecture Search (NAS) that helps researchers and developers automatically discover efficient deep learning model architectures through modular, reproducible search algorithms and objectives. <details><summary>More about</summary>

  It lets developers move beyond hand-tuning model architectures by defining search spaces and objectives in code to automatically find Pareto-optimal configurations for parameters, latency, and memory.

  _Because what your CI pipeline really needed was an autonomous agent burning GPU cycles to rediscover that a slightly smaller Transformer would have been fine._

  `neural-architecture-search` `automl` `pytorch` `deep-learning` `model-optimization`
  </details>

- **[swarm](https://github.com/christopherkarani/swarm)** `⭐ 472` `updated ≤30d` A Swift framework for building agents and multi-agent workflows that supports both cloud and on-device models with type-safe tools and durable workflow checkpointing. <details><summary>More about</summary>

  It lets Swift developers build agentic systems using native concurrency and familiar tooling while targeting Apple platforms, Linux, or local inference backends.

  _You can now orchestrate autonomous agents on your watch, because apparently your wrist deserves crash recovery and durable DAGs too._

  `swift` `agents` `on-device` `framework` `multi-agent`
  </details>

- **[chatlearn](https://github.com/alibaba/chatlearn)** `⭐ 453` `updated ≤1y` ChatLearn is a reinforcement learning framework from Alibaba Cloud for training and aligning large language models at scale using distributed engines like Megatron and FSDP. <details><summary>More about</summary>

  It provides a high-performance, programmable interface for developers building custom RL training loops for models up to 600B parameters.

  _Another essential tool for when your hobbyist GPU cluster of eight H100s simply isn't enough to align a model larger than your ego._

  `reinforcement-learning` `llm-training` `distributed-systems` `alibaba` `alignment`
  </details>

- **[beebot](https://github.com/autopackai/beebot)** `⭐ 452` `updated >1y` BeeBot is an autonomous AI agent framework with a CLI and API interface that uses AutoPack for tool selection and supports persistent task execution. <details><summary>More about</summary>

  It offers developers a self-hosted environment to experiment with generalized autonomous task execution and tool-using agents outside of hosted SaaS platforms.

  _The README calmly admits that late 2023 LLMs weren't up to the task of generalized autonomy, yet the project remains online, preserving a perfect snapshot of the 'just one more wrapper' optimism of that era._

  `autonomous-agents` `agent-framework` `cli` `api` `self-hosted`
  </details>

- **[mindsql](https://github.com/mindinventory/mindsql)** `⭐ 442` `updated ≤1y` MindSQL is a Python RAG library that translates natural language questions into SQL queries for databases like PostgreSQL, MySQL, and Snowflake using LLMs like GPT-4 and Llama 2. <details><summary>More about</summary>

  It allows developers to quickly integrate natural language querying into applications by indexing database schemas and example queries into vector stores like ChromaDB and Faiss.

  _Yet another layer of abstraction ensuring that when the SQL fails, you get to debug both the database logic and the LLM's confidence interval._

  `text-to-sql` `rag` `python` `langchain` `llm`
  </details>

- **[langstream](https://github.com/langstream/langstream)** `⭐ 431` `updated >1y` An event-driven platform for building and running LLM applications using pipelines deployed on Kubernetes with Apache Kafka or Pulsar as the message backbone. <details><summary>More about</summary>

  It gives developers a production-oriented runtime to wire LangChain or LlamaIndex components into scalable, event-driven architectures without stitching together raw infrastructure by hand.

  _Just when you thought your stack was simple enough, here comes a platform that turns a chatbot into a distributed streaming workload because why not Kafka everything._

  `kafka` `kubernetes` `event-driven` `llm` `langchain`
  </details>

- **[mcpadapt](https://github.com/grll/mcpadapt)** `⭐ 418` `updated ≤1y` A Python adapter library that converts 650+ Model Context Protocol (MCP) servers into usable tools for agentic frameworks like LangChain, Smolagents, and CrewAI. <details><summary>More about</summary>

  It allows developers to immediately plug the sprawling ecosystem of MCP servers into their existing agent workflows without writing custom integrations for every tool.

  _We have successfully abstracted the abstraction that was supposed to simplify the tooling, proving once again that no protocol is safe from a middleware wrapper._

  `mcp` `langchain` `smolagents` `adapter` `python`
  </details>

- **[openapi](https://github.com/longbridge/openapi)** `⭐ 418` `updated ≤30d` A multi-language SDK and MCP server implementation for the Longbridge OpenAPI trading and quote platform. <details><summary>More about</summary>

  It provides developers with the programmatic building blocks and MCP integration needed to automate trading strategies and analyze real-time financial data across Rust, Python, Node.js, Java, C, and C++.

  _Yet another SDK reminding us that while AI agents are learning to write poetry, developers are still manually integrating the plumbing to automate their stock portfolios._

  `sdk` `mcp` `trading` `api` `multi-language`
  </details>

- **[rigging](https://github.com/dreadnode/rigging)** `⭐ 409` `updated ≤30d` A lightweight Python LLM framework for building production code with structured Pydantic outputs, tool use, and broad model support via LiteLLM. <details><summary>More about</summary>

  It lets developers treat LLM interactions like standard Python functions with type hints and validation, streamlining the integration of models into serious codebases.

  _Another Tuesday, another framework promising to wrangle the chaos of LLM outputs into a Pydantic model before the next context window inevitably shatters your faith in structured data._

  `llm-framework` `pydantic` `litellm` `python` `agents`
  </details>

- **[llm-strategy](https://github.com/blackhc/llm-strategy)** `⭐ 399` `updated >1y` A Python library that uses a decorator to implement abstract methods via LLMs by leveraging type hints, docstrings, and dataclasses for structured output. <details><summary>More about</summary>

  It lets developers define strongly-typed interfaces and delegate the implementation to LLMs, reducing boilerplate for tasks that are easier to describe than to code.

  _You now have a framework that lets you pay an API to implement your interfaces, perfectly automating the transition from 'I have a type signature' to 'I have a credit card bill'._

  `python` `llm` `framework` `typing` `langchain`
  </details>

- **[aquiladb](https://github.com/aquila-network/aquila)** `⭐ 380` `updated >1y` A neural search engine and vector database for indexing latent vectors alongside JSON metadata to perform efficient k-NN similarity search. <details><summary>More about</summary>

  It provides ML engineers and data scientists with a simple, language-agnostic drop-in database to build neural information retrieval and semantic search applications without managing raw FAISS infrastructure.

  _Just what the modern stack needed: another vector DB to evaluate against Pinecone, Weaviate, Qdrant, Milvus, and the six others you bookmarked last Tuesday._

  `vector-database` `neural-search` `knn` `similarity-search` `ml-infrastructure`
  </details>

- **[aquiladb](https://github.com/aquila-network/aquiladb)** `⭐ 380` `updated >1y` AquilaDB is a neural search engine that stores latent vectors alongside JSON metadata to perform efficient k-NN and similarity search for machine learning applications. <details><summary>More about</summary>

  It provides ML engineers and data scientists with a simple, language-agnostic database solution for building neural information retrieval features like semantic search without heavy infrastructure dependencies.

  _Just what the modern stack needed: another vector database competing for the 'store these 768 floats and call it semantic' trophy._

  `vector-database` `neural-search` `knn` `similarity-search` `ml-infrastructure`
  </details>

- **[agentrun](https://github.com/jonathan-adly/agentrun)** `⭐ 372` `updated >1y` A Python library and self-hosted REST API that safely executes AI-generated Python code inside isolated Docker containers with resource limits and dependency management. <details><summary>More about</summary>

  It lets developers safely give LLMs code execution abilities without risking rogue scripts nuking their systems or cloud bills.

  _We have finally built the digital padded cell so our AI can run its little print('hello world') scripts without deleting the filesystem, truly the future we were promised._

  `code-execution` `sandbox` `docker` `llm-infrastructure` `security`
  </details>

- **[lemon-agent](https://github.com/felixbrock/lemon-agent)** `⭐ 344` `updated >1y` A standalone Plan-and-Solve agent framework that enables LLMs to perform read and write operations across tools like GitHub, Notion, and Airtable via a planner-solver architecture with human-in-the-loop approvals. <details><summary>More about</summary>

  It provides a structured way to build reliable workflow automations by separating planning from execution and adding analytics to debug agent decision-making.

  _You can now orchestrate a planner and a solver agent to ask for permission before executing a workflow step, ensuring your automation pipeline is as bureaucratically safe as the enterprise processes it's trying to replace._

  `agent-framework` `workflow-automation` `langchain` `cli`
  </details>

- **[llama-github](https://github.com/jetxu-llm/llama-github)** `⭐ 324` `updated ≤90d` A Python library that performs agent-driven retrieval-augmented generation over GitHub repositories to provide code snippets, issues, and context for LLM-powered coding assistants. <details><summary>More about</summary>

  It allows developers and AI agents to ground their responses in real-world GitHub code examples rather than relying solely on parametric model knowledge.

  _Another layer of abstraction promising that if we just index enough other people's code, our AI will eventually figure out how to write ours._

  `rag` `github` `llm` `python` `langchain`
  </details>

- **[blockagi](https://github.com/blockpipe/blockagi)** `⭐ 320` `updated >1y` BlockAGI is an open-source, self-hosted research agent built with Python and LangChain that automates domain-specific research tasks and outputs detailed narrative reports via an interactive web UI. <details><summary>More about</summary>

  Developers can deploy and customize a local research agent to automate deep-dive investigations without relying on hosted SaaS, keeping data private and costs predictable.

  _Because what the modern developer truly needed was a self-hosted agentic loop to hallucinate a crypto report while burning through a 16k context window in real time._

  `research-agent` `langchain` `self-hosted` `local-ai` `autogpt`
  </details>

- **[blockagi](https://github.com/orgexyz/blockagi)** `⭐ 320` `updated >1y` BlockAGI is an open-source, self-hosted research agent built with Python and LangChain that conducts iterative domain-specific research and outputs detailed narrative reports via a web UI. <details><summary>More about</summary>

  Developers can deploy a hackable, local agent to automate deep research tasks across custom domains without relying on hosted SaaS platforms.

  _Another autonomous agent framework promising to think so you don't have to, provided you enjoy debugging LangChain pipelines to answer questions you could have Googled in five minutes._

  `research-agent` `langchain` `self-hosted` `autogpt`
  </details>

- **[rs-graph-llm](https://github.com/a-agmon/rs-graph-llm)** `⭐ 309` `updated ≤30d` A Rust-based framework for building stateful, graph-structured multi-agent workflows with integrated LLM capabilities. <details><summary>More about</summary>

  It offers developers a high-performance, type-safe alternative to Python-centric orchestration libraries like LangGraph, leveraging Rust's ecosystem for production agent systems.

  _Finally, the undeniable peace of mind that comes with knowing your agent's panic-driven workflow graph is just as memory-safe as the rest of your systems programming._

  `rust` `multi-agent` `workflow` `framework` `graph`
  </details>

- **[fact-checker](https://github.com/jagilley/fact-checker)** `⭐ 305` `updated >1y` A Python demonstration of fact-checking LLM outputs by chaining prompts to interrogate and verify the assumptions behind an initial answer. <details><summary>More about</summary>

  It provides a reference implementation for developers looking to build reliable LLM workflows that self-correct hallucinations via structured prompt chaining.

  _We have finally reached the point where we must program the AI to doubt itself before it confidently tells us that elephants lay eggs._

  `llm` `prompt-chaining` `fact-checking` `langchain`
  </details>

- **[langchain-streamlit-template](https://github.com/hwchase17/langchain-streamlit-template)** `⭐ 298` `updated >1y` A starter template for deploying a LangGraph agent as a chatbot using the Streamlit web framework. <details><summary>More about</summary>

  It provides a minimal, runnable scaffold for developers looking to quickly prototype and deploy agentic workflows with a web UI.

  _Yet another 'hello world' template ensuring we can deploy a chatbot to the cloud before we've figured out what the chatbot is actually supposed to do._

  `langchain` `streamlit` `template` `langgraph`
  </details>

- **[capsule](https://github.com/capsulerun/capsule)** `⭐ 281` `updated ≤30d` Capsule is a secure runtime that executes untrusted code inside isolated WebAssembly sandboxes with configurable resource limits, retries, and lifecycle tracking. <details><summary>More about</summary>

  It gives developers a way to safely run arbitrary or AI-generated code locally or in workflows without giving that code full access to the host system.

  _We have finally built a sandbox so our AI agents can run wild without burning down the house, though they will still find creative ways to waste CPU and RAM._

  `wasm` `sandbox` `code-execution` `agents` `security`
  </details>

- **[capsule](https://github.com/mavdol/capsule)** `⭐ 281` `updated ≤30d` A secure runtime that executes untrusted code inside isolated WebAssembly sandboxes with configurable resource limits and lifecycle tracking. <details><summary>More about</summary>

  It provides a hardened execution layer for running AI-generated or user-submitted code safely without risking host system integrity.

  _We have finally isolated the AI's code so well that not even the developer can figure out why it crashed._

  `wasm` `sandbox` `code-execution` `security` `agent-infrastructure`
  </details>

- **[goptuna](https://github.com/c-bata/goptuna)** `⭐ 279` `updated ≤1y` A Go-native hyperparameter optimization framework inspired by Optuna, implementing Bayesian optimization, evolution strategies, and multi-armed bandit algorithms. <details><summary>More about</summary>

  It allows Go developers to integrate production-grade hyperparameter tuning directly into their applications without switching to Python.

  _Move over Python hegemony; now you can over-engineer your goroutine count and MySQL buffers using the same cutting-edge algorithms that took hours to tune in your Jupyter notebook._

  `go` `hyperparameter-optimization` `bayesian-optimization` `automl` `ml-ops`
  </details>

- **[flyto-core](https://github.com/flytohub/flyto-core)** `⭐ 269` `updated ≤30d` An open-source, MCP-native execution engine for building and debugging AI agent workflows with 412 reusable modules, step-level tracing, and replay capabilities. <details><summary>More about</summary>

  It replaces brittle custom scripts with a debuggable, replayable pipeline for browser automation, scraping, and monitoring tasks that developers usually hack together with Playwright.

  _You spent three years mastering orchestration frameworks, and now a 269-star repo is telling you that replay-from-step-8 is the feature you forgot to build._

  `mcp` `agent-execution` `playwright` `automation` `debugging`
  </details>

- **[phidata](https://github.com/agno-agi/phidata)** `⭐ 269` `updated >1y` Phidata (now Agno) is a Python framework for building multi-modal AI agents with memory, knowledge, tools, and reasoning capabilities, including multi-agent team orchestration. <details><summary>More about</summary>

  It provides a minimal-code path for developers to compose autonomous agents that can coordinate tasks, use external tools, and handle text, image, audio, and video inputs.

  _Just when you thought the agent framework ecosystem was saturated, the repo politely informs you it has already pivoted to Agno, ensuring your dependencies stay as fresh and unstable as your patience._

  `agents` `multi-agent` `framework` `python` `agno`
  </details>

- **[project_alice](https://github.com/marianomolina/project_alice)** `⭐ 258` `updated >1y` A self-hosted, microservices-based framework for building, testing, and deploying agentic workflows with RAG, human-in-the-loop controls, and local model support. <details><summary>More about</summary>

  It gives developers a local-first workbench to visually construct and test complex agent pipelines with context management and evaluation tooling before pushing to production.

  _Just what the ecosystem needed: another agent framework where you can spend three hours configuring RAG and context pruning to automate a task that was a five-line shell script._

  `agent-framework` `local-ai` `rag` `workflow`
  </details>

- **[openai-agents-go](https://github.com/nlpodyssey/openai-agents-go)** `⭐ 254` `updated ≤90d` A Go SDK and framework for building multi-agent workflows with support for handoffs, guardrails, tool use, and MCP integration. <details><summary>More about</summary>

  It brings the OpenAI Agents Python SDK patterns into Go, letting backend teams build orchestrated agent systems without switching languages or reimplementing core concepts.

  _Now you can orchestrate a swarm of agents in Go, because apparently the industry’s next milestone is debugging distributed LLM state machines in a language famous for making concurrency look easy._

  `go` `multi-agent` `sdk` `mcp` `framework`
  </details>

- **[qabot](https://github.com/hardbyte/qabot)** `⭐ 245` `updated >1y` A CLI tool that uses LLMs to translate natural language questions into SQL queries executed against local or remote data sources via DuckDB. <details><summary>More about</summary>

  It lets developers query CSV, Parquet, SQLite, and databases using plain English, removing the need to memorize SQL dialects for quick data exploration.

  _Another CLI tool promising that you can finally fire your data team, provided you're comfortable giving an LLM unrestricted SQL access to your local files._

  `cli` `data-querying` `sql` `llm` `duckdb`
  </details>

- **[langchain-decorators](https://github.com/ju-bezdek/langchain-decorators)** `⭐ 234` `updated ≤30d` A lightweight Python library that adds decorator-based syntactic sugar on top of LangChain for writing custom prompts and chains using standard function definitions and docstrings. <details><summary>More about</summary>

  It lets developers define LLM prompts as native Python functions with type hints and docstrings, gaining IDE support and cleaner code organization while staying inside the LangChain ecosystem.

  _We have officially reached the point where we need a library to disguise our LLM prompts as ordinary Python functions so we can pretend the boilerplate was never there._

  `langchain` `python` `prompt-engineering` `syntactic-sugar`
  </details>

- **[forevervm](https://github.com/jamsocket/forevervm)** `⭐ 228` `updated >1y` forevervm is an API and SDK for securely running stateful Python code in long-lived, automatically hibernating sandboxes. <details><summary>More about</summary>

  It gives developers a simple way to persist Python REPL state across sessions, making it easier to build AI agents that need durable, interactive code execution.

  _We have finally solved the hard problem of keeping a Python process alive forever, right alongside the ~47 other sandboxing projects that also guarantee eternal life until the next VC pivot._

  `sandbox` `python` `sdk` `stateful-execution` `agents`
  </details>

- **[bondai](https://github.com/krohling/bondai)** `⭐ 219` `updated >1y` BondAI is an open-source Python framework and CLI for building single and multi-agent systems with built-in memory management, error handling, and a suite of integrated tools. <details><summary>More about</summary>

  It provides developers with a structured SDK and command-line interface to rapidly prototype autonomous agents that can execute code, search the web, and manage files.

  _Yet another framework promising to abstract away the 'complexities' of agent memory, ensuring you can spend your afternoon debugging why the agent wrote a unicorn story instead of fixing your production bug._

  `agents` `framework` `python` `cli` `langchain`
  </details>

- **[mangaba_ai](https://github.com/mangaba-ai/mangaba_ai)** `⭐ 195` `updated ≤30d` A Python framework for building multi-agent AI systems with ReAct reasoning, RAG pipelines, persistent memory, and support for A2A and MCP protocols. <details><summary>More about</summary>

  It offers a lightweight, batteries-included alternative to heavier stacks like CrewAI and LangChain, enabling developers to orchestrate multi-provider agent crews with built-in observability and guardrails.

  _Just what the ecosystem needed: another 'complete' agent framework promising to be the last one you'll ever need, provided you enjoy rewriting your stack every time a new mango-themed library drops._

  `multi-agent` `python` `framework` `a2a` `mcp`
  </details>

- **[awadb](https://github.com/awa-ai/awadb)** `⭐ 175` `updated >1y` AwaDB is an AI-native database designed for storing and searching embedding vectors, available as both a local Python library and a Dockerized service. <details><summary>More about</summary>

  It lets developers quickly prototype LLM-powered semantic search features without defining schemas or managing vector indexing details manually.

  _Yet another purpose-built vector database enters the arena, ensuring you can spend your afternoon benchmarking cosine similarity scores instead of shipping your actual product._

  `vectordb` `embeddings` `python` `local-ai` `llmops`
  </details>

- **[traceai](https://github.com/future-agi/traceai)** `⭐ 175` `updated ≤30d` An open-source observability framework built on OpenTelemetry that instruments AI applications to trace LLM calls, prompts, tokens, and agent decisions across 50+ frameworks in Python, TypeScript, Java, and C#. <details><summary>More about</summary>

  It lets developers debug complex AI workflows by sending structured traces to any OTel-compatible backend without locking into a specific vendor dashboard.

  _Finally, a way to visualize exactly where your agentic workflow unraveled, so you can add 'observability' to the slide deck while the pager still goes off at 3 AM._

  `observability` `opentelemetry` `tracing` `llm` `agents`
  </details>

- **[your-memory](https://github.com/jean-technologies/jean-memory)** `⭐ 169` `updated ≤180d` Jean Memory is a developer SDK and managed service that provides a persistent, graph-based memory layer for AI applications across Python, Node.js, and React frontends. <details><summary>More about</summary>

  It allows developers to add personalized, long-term context and user memory to agents and apps with a few lines of code, moving beyond stateless prompt windows.

  _We have successfully abstracted away the burden of remembering conversations into a separate SaaS product, because apparently the modern stack requires a dedicated infrastructure layer just to pretend we are paying attention._

  `memory` `sdk` `context-engineering` `react` `python`
  </details>

- **[your-memory](https://github.com/jonathan-politzki/your-memory)** `⭐ 169` `updated ≤180d` Next-generation AI memory infrastructure providing persistent, context-aware memory layers and SDKs for integrating user-specific knowledge graphs into applications and agents. <details><summary>More about</summary>

  It allows developers to move beyond stateless LLM calls by adding a sophisticated memory layer that understands user context across different applications with minimal integration effort.

  _We’ve successfully abstracted away the burden of remembering conversations into a dedicated infrastructure layer, ensuring your AI can now misinterpret your past self with persistent, graph-powered confidence._

  `memory` `sdk` `context-engineering` `react` `python`
  </details>

- **[mengram](https://github.com/alibaizhanov/mengram)** `⭐ 163` `updated ≤30d` A memory layer for AI agents that stores semantic, episodic, and procedural memory, with Python and JS SDKs and integrations for LangChain, CrewAI, and MCP. <details><summary>More about</summary>

  It gives coding agents and assistants a structured way to remember past context, preferences, and failed workflows across sessions without manual prompt engineering.

  _We have finally built a system that remembers every deployment mistake you made, so your AI can now lecture you about them in 23 different languages._

  `memory` `mcp` `sdk` `langchain` `agents`
  </details>

- **[ai](https://github.com/missingstudio/ai)** `⭐ 160` `updated >1y` A cloud-native AI gateway providing a universal API to route and manage inference across 100+ LLM providers with load balancing, retries, and production-grade LLMOps features. <details><summary>More about</summary>

  Developers can integrate once and switch between OpenAI, Anthropic, and over 100 other models without rewriting API calls or getting locked into a single vendor.

  _Just what we needed: another universal abstraction layer so we can add 'AI Router debugging' to the list of things that break at 2am._

  `ai-gateway` `llmops` `infrastructure` `universal-api`
  </details>

- **[glide](https://github.com/einstack/glide)** `⭐ 159` `updated >1y` Glide is a cloud-native Go LLM gateway that provides a unified REST API across multiple model providers, handling failover, caching, and key management for production GenAI applications. <details><summary>More about</summary>

  It abstracts away provider-specific APIs and transient errors so developers can swap LLM backends without touching application code while gaining production-grade resilience.

  _Yet another layer of infrastructure promising to make your AI stack resilient, just in case the six other abstractions between you and the model weights fail simultaneously._

  `llm-gateway` `genai` `llmops` `go` `cloud-native`
  </details>

- **[axar](https://github.com/axar-ai/axar)** `⭐ 158` `updated ≤90d` A lightweight TypeScript framework for building production-grade LLM-powered agentic applications using decorators and typed inputs/outputs. <details><summary>More about</summary>

  It offers developers a minimal, code-first way to build reliable agent workflows without the overhead and abstraction layers common in larger frameworks.

  _Yet another TypeScript framework promising to be the 'simple' one, because clearly the 157 other agent frameworks were just too complex for us to handle._

  `typescript` `agent-framework` `llm` `nodejs`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[genomas](https://github.com/liu-hy/genomas)** `⭐ 140` `updated ≤30d` A minimalist multi-agent framework for automating scientific analysis workflows, specifically focused on code-driven gene expression analysis and scientific discovery. <details><summary>More about</summary>

  It provides a notebook-style multi-agent system that can plan, write, execute, and debug code for complex bioinformatics tasks, offering a template for domain-specific agentic workflows.

  _Just what the overworked bioinformatician ordered: a multi-agent system to hallucinate gene associations so convincingly that even the paper claims they are 'worthy of further investigation.'._

  `multi-agent` `bioinformatics` `scientific-workflows` `genomics` `framework`
  </details>

- **[wxflows](https://github.com/ibm/wxflows)** `⭐ 119` `updated ≤1y` A collection of examples and tutorials for building AI applications using IBM's watsonx.ai Flows Engine to create and deploy tools for agentic frameworks. <details><summary>More about</summary>

  It provides a ready-to-use middleware layer and SDK for exposing data sources as tools compatible with LangChain, LangGraph, and OpenAI agents.

  _Just what we needed: another IBM-branded abstraction layer to help us feel productive while wiring yet another set of tools into our agent stack._

  `agents` `tools` `watsonx` `mcp` `sdk`
  </details>

- **[groq-ruby](https://github.com/drnic/groq-ruby)** `⭐ 116` `updated >1y` A Ruby gem that provides a convenience client library for interacting with the Groq Cloud API to access fast, low-cost LLM models. <details><summary>More about</summary>

  It allows Ruby developers to integrate high-throughput LLM inference into their applications using a familiar, OpenAI-compatible interface.

  _We have successfully abstracted the abstraction of the API, proving that no matter how fast the tokens arrive, we will always spend equal time wrapping them in helper methods._

  `ruby` `groq` `llm-client` `sdk`
  </details>

- **[octoml-profile](https://github.com/octoml/octoml-profile)** `⭐ 113` `updated >1y` A Python library and cloud service for benchmarking PyTorch model inference performance and cost across various cloud hardware and acceleration backends. <details><summary>More about</summary>

  It allows ML engineers to quickly identify optimal hardware and runtime combinations, potentially cutting cloud inference costs by over 10x without requiring local GPUs.

  _Yet another tool proving that the hardest part of machine learning isn't the math, it's the quarterly AWS bill._

  `pytorch` `profiling` `performance` `cloud` `mlops`
  </details>

- **[codespaces-langchain](https://github.com/lostintangent/codespaces-langchain)** `⭐ 112` `updated >1y` A GitHub Codespaces template that provides a pre-configured, one-click development environment for building LLM applications with LangChain and Python. <details><summary>More about</summary>

  It removes the initial friction of environment setup, allowing developers to immediately start prototyping LangChain applications in a browser-based VS Code instance.

  _We've reached the point where we need a template to help us bootstrap the templates that help us build the agents that will eventually write the code for us._

  `langchain` `codespaces` `template` `llm-apps`
  </details>

- **[ai-toolkit](https://github.com/memgraph/ai-toolkit)** `⭐ 96` `updated ≤30d` A toolkit for building AI-driven graph applications on Memgraph, providing LangChain integrations, an MCP server, and agents for knowledge graph construction and querying. <details><summary>More about</summary>

  It gives developers a ready-made stack to wire graph-powered RAG, natural language database queries, and MCP tooling into their LLM workflows without building the plumbing from scratch.

  _Another delightful reminder that your carefully normalized SQL database is now just a temporary staging area for a graph that an LLM will eventually traverse with alarming confidence._

  `graph-rag` `mcp` `langchain` `knowledge-graph` `memgraph`
  </details>

- **[llfn](https://github.com/orgexyz/llfn)** `⭐ 96` `updated >1y` LLFn is a lightweight Python framework that wraps LLM interactions into callable functions using decorators, supporting any LangChain-compatible model. <details><summary>More about</summary>

  It reduces boilerplate for developers building LLM applications by treating prompts as composable, typed Python functions with Pydantic output support.

  _Just when you thought LangChain was the final layer of abstraction, we now have a framework to abstract the abstraction into a function decorator._

  `llm-framework` `langchain` `python` `functions` `abstraction`
  </details>

- **[swarm_ex](https://github.com/nrrso/swarm_ex)** `⭐ 88` `updated >1y` An Elixir library for lightweight AI agent orchestration, providing primitives for creating and coordinating agent networks using the language's concurrency and fault tolerance features. <details><summary>More about</summary>

  It gives Elixir developers a native, code-first framework to build and test multi-agent systems without switching stacks or wrestling with heavier Python-centric alternatives.

  _Another day, another orchestration framework, because what the BEAM community really needed was to reproduce the exact same agent topology debates the Python crowd had three months ago._

  `elixir` `agent-orchestration` `multi-agent` `library` `sdk`
  </details>

- **[neurolink](https://github.com/juspay/neurolink)** `⭐ 87` `updated ≤30d` A TypeScript SDK and CLI that unifies 17+ AI providers and 100+ models under a single streaming API with built-in tools, MCP support, memory, and enterprise-grade routing. <details><summary>More about</summary>

  Developers can switch AI providers with a single parameter, add 64+ tools and MCP servers out of the box, and rely on multi-provider failover and context management without wiring multiple SDKs by hand.

  _We have successfully abstracted the abstraction, so you can now experience provider lock-in as a configurable streaming option rather than a costly architectural mistake._

  `sdk` `multi-provider` `mcp` `streaming` `typescript`
  </details>

- **[routilux](https://github.com/lzjever/routilux)** `⭐ 86` `updated ≤90d` A Python library for event-driven, routines-based workflow orchestration that supports concurrent execution, checkpointing, and durable state for data pipelines and AI agent workflows. <details><summary>More about</summary>

  It gives developers a structured way to compose complex, resumable data and AI pipelines in Python without wiring their own state management and recovery logic.

  _Yet another orchestration framework promising to tame your pipelines, because clearly what your stack needs in 2026 is one more event queue to babysit._

  `python` `workflow-orchestration` `agent-orchestration` `event-driven` `checkpointing`
  </details>

- **[chatabstractions](https://github.com/andrewnguonly/chatabstractions)** `⭐ 84` `updated >1y` A collection of LangChain chat model abstractions that adds runtime behaviors like dynamic failover, load balancing, chaos engineering, and custom routing on top of BaseChatModel. <details><summary>More about</summary>

  Developers building with LangChain can更稳定地 run LLM chains by plugging in proven patterns for failover, load balancing, and chaos testing without rewriting their existing model interfaces.

  _Because what every mature LLM-powered app clearly needs is a certified way to inject hallucinated poems on a cron schedule just to keep the team humble._

  `langchain` `resilience` `chaos-engineering` `llm-routing` `sdk`
  </details>

- **[ai-orchestra](https://github.com/langtail/ai-orchestra)** `⭐ 81` `updated >1y` A lightweight TypeScript library for orchestrating AI agent handoffs and state transitions, built around Vercel's AI SDK streamText as a simpler alternative to LangGraph. <details><summary>More about</summary>

  It gives developers a code-first way to model multi-agent workflows with streaming and explicit state control without adopting a heavier framework.

  _Streaming Claude handoffs in a state machine you wrote yourself is the new spinning cursor of moral superiority._

  `agent-orchestration` `typescript` `vercel-ai-sdk` `state-machine` `streaming`
  </details>

- **[nlsom](https://github.com/mczhuge/nlsom)** `⭐ 77` `updated >1y` A framework for building Natural Language-Based Societies of Mind (NLSOM) where multiple LLMs, APIs, and expert agents collaborate via natural language to solve tasks in a modular community structure. <details><summary>More about</summary>

  It provides a structured way to compose diverse AI models and APIs into collaborative agent communities with reward mechanisms, serving as a code-first building block for multi-agent systems.

  _Because if a single hallucinating LLM is unreliable, the obvious next step is clearly to put seventeen of them into a society and let them interview each other until consensus forms._

  `multi-agent` `agent-orchestration` `framework` `nl-based` `mindstorm`
  </details>

- **[nlsom](https://github.com/metauto-ai/mindstorm)** `⭐ 77` `updated >1y` A research framework and UI for building Natural Language-Based Societies of Mind (NLSOM), where multiple LLMs, APIs, and expert agents collaborate via natural language interviews to solve tasks. <details><summary>More about</summary>

  It provides a modular, code-first way to orchestrate diverse AI agents and reward their contributions, serving as a reference implementation for multi-agent collaboration beyond single-model reasoning.

  _Yet another framework promising that the singularity is just one more layer of agent interviews away, provided you enjoy wiring up 34 agents to agree on what 'search' means._

  `multi-agent` `agent-orchestration` `research` `framework` `llm`
  </details>

- **[azure-openai-logger](https://github.com/aavetis/azure-openai-logger)** `⭐ 73` `updated ≤1y` A Bicep-based solution that deploys an Azure API Management proxy to log and monitor requests, responses, and metrics for an existing Azure OpenAI instance in Application Insights. <details><summary>More about</summary>

  Developers running Azure OpenAI workloads can deploy this to gain immediate observability, custom header tracking, and prebuilt query workbooks without building their own logging pipeline.

  _Because nothing says 'cloud-native observability' like deploying an entire API Management instance and a Bicep template just to find out why your GPT wrapper is silently burning tokens._

  `azure` `observability` `logging` `llmops` `openai`
  </details>

- **[agentmail-toolkit](https://github.com/agentmail-to/agentmail-toolkit)** `⭐ 69` `updated ≤30d` A toolkit that integrates popular agent frameworks like OpenAI Agents SDK, Vercel AI SDK, and the Model Context Protocol (MCP) with the AgentMail API. <details><summary>More about</summary>

  It provides developers with the glue code needed to connect multiple major agent ecosystems to a specific email-centric API without writing boilerplate integrations.

  _We now have dedicated toolkits to help our toolkits talk to other toolkits, ensuring the abstraction layers remain comfortably nested three deep._

  `mcp` `agent-framework` `sdk` `integration`
  </details>

- **[join.cloud](https://github.com/kushneryk/join.cloud)** `⭐ 66` `updated ≤30d` Join.cloud provides real-time collaboration rooms where AI agents exchange messages, share files via git, and review each other's work using standard protocols like MCP and A2A. <details><summary>More about</summary>

  It gives developers a structured workspace to coordinate multi-agent workflows, validation loops, and remote agent collaboration without building custom orchestration glue code.

  _We’ve finally built Slack for robots that don’t have jobs, so they can ping each other endlessly while we debug why the validation agent is ghosting the worker agent._

  `agent-collaboration` `mcp` `a2a` `multi-agent` `orchestration`
  </details>

- **[ailingbot](https://github.com/ericzhang-cn/ailingbot)** `⭐ 64` `updated >1y` AilingBot is an open-source Python framework for integrating AI models into IM chatbots across platforms like WeChat Work, Feishu, DingTalk, and Slack. <details><summary>More about</summary>

  It provides developers with a structured way to build conversational AI bots for internal team communication channels using configurable policies and model backends.

  _Yet another framework promising to wire LLMs into every corporate chat tool, ensuring your team can ask a bot about Q3 projections while the actual documentation rots in Confluence._

  `chatbot` `langchain` `im-integration` `python` `framework`
  </details>

- **[agent-opt](https://github.com/future-agi/agent-opt)** `⭐ 62` `updated ≤30d` An open-source Python library that provides six automated algorithms to optimize prompts for AI agents against any LLM and custom evaluation metrics. <details><summary>More about</summary>

  It allows developers to systematically tune agent prompts using algorithms like Bayesian Search and textual gradients instead of manually iterating through changes whenever a model updates.

  _Finally, a way to automate the ritual of begging a model to stop hallucinating, so you can spend your afternoon watching Optuna tweak a hyperparameter you don't fully understand._

  `prompt-optimization` `agents` `evaluation` `llm` `python`
  </details>

- **[pdfmux](https://github.com/nameetp/pdfmux)** `⭐ 62` `updated ≤30d` A self-healing PDF extraction tool that routes pages through multiple backends and audits its own output to produce clean Markdown, JSON, or RAG-ready chunks. <details><summary>More about</summary>

  It lets developers build reliable RAG pipelines and LLM integrations without writing fragile fallback chains or manually cleaning silently corrupted PDF extractions.

  _We have finally built an autonomous system that double-checks its own PDF parsing, while our coding agents are still confidently shipping broken authentication middleware._

  `pdf-extraction` `rag` `mcp` `self-healing` `llm-tooling`
  </details>

- **[intelli](https://github.com/intelligentnode/intelli)** `⭐ 55` `updated ≤30d` A Python framework for building multi-model chatbots and AI agent workflows with a unified interface for providers like OpenAI, Anthropic, and local models, including MCP support. <details><summary>More about</summary>

  It lets developers swap between LLM providers and orchestrate multi-step AI tasks in code without rewriting integration logic.

  _Yet another abstraction layer promising to liberate you from vendor lock-in, provided you're willing to marry its specific Python SDK instead._

  `python` `llm` `agents` `mcp` `framework`
  </details>

- **[a2a-net](https://github.com/neuroglia-io/a2a-net)** `⭐ 53` `updated ≤90d` A .NET SDK and framework implementing the Agent2Agent (A2A) protocol, providing client and server libraries for secure, interoperable communication between autonomous agents across different frameworks using JSON-RPC 2.0. <details><summary>More about</summary>

  It gives .NET developers a standardized, importable code-first building block to make autonomous agents talk to each other over HTTP, gRPC, and JSON-RPC without tangling with vendor-specific protocols.

  _Another week, another protocol promising to solve agent interoperability, giving .NET developers yet another framework to learn while we wait for the industry to decide if agents are real or just very expensive API wrappers._

  `dotnet` `a2a-protocol` `agent-communication` `sdk` `csharp`
  </details>

- **[fastapi-agents](https://github.com/blairhudson/fastapi-agents)** `⭐ 50` `updated >1y` A FastAPI extension that provides a unified interface to register, serve, and secure AI agents built with frameworks like PydanticAI, LlamaIndex, Smolagents, and CrewAI. <details><summary>More about</summary>

  It lets developers expose multiple heterogeneous agent backends through standard FastAPI endpoints with built-in auth and OpenAPI docs, reducing boilerplate orchestration code.

  _Now you can host a soup of agents from four different frameworks and call it 'microservices architecture' while wondering why your latency graph looks like a heartbeat monitor._

  `fastapi` `agents` `python` `backend` `orchestration`
  </details>

- **[floom](https://github.com/floomai/floom)** `⭐ 46` `updated >1y` Floom is an open-source framework and SDK for defining, orchestrating, and executing generative AI pipelines with support for multiple providers, caching, and security guardrails. <details><summary>More about</summary>

  It offers developers a unified SDK across Node, Python, .NET, Java, Go, and PHP to manage multi-model AI pipelines with built-in cost controls and failover.

  _Just what the modern stack needed: a Kubernetes for your prompts, promising to orchestrate your hallucinations with enterprise-grade YAML while you wonder if the pipeline is the product or the problem._

  `genai` `orchestration` `sdk` `pipelines` `multi-model`
  </details>

- **[network-ai](https://github.com/jovancoding/network-ai)** `⭐ 45` `updated ≤30d` A TypeScript/Node.js multi-agent orchestrator that provides shared state with locking, guardrails, budgets, and adapters for 29 AI frameworks including LangChain, AutoGen, and CrewAI. <details><summary>More about</summary>

  It prevents split-brain state and race conditions in parallel multi-agent systems by adding an atomic propose-validate-commit mutex and governance layer across popular agent frameworks.

  _Just what every developer wanted: another orchestration layer to coordinate the orchestrators that are already coordinating the agents that may or may not be doing any actual work._

  `multi-agent` `orchestration` `typescript` `nodejs` `mcp`
  </details>

- **[network-ai](https://github.com/jovansapfioneer/network-ai)** `⭐ 45` `updated ≤30d` A TypeScript/Node.js multi-agent orchestrator providing shared state with locking, guardrails, and adapters for 29 AI frameworks including LangChain, AutoGen, and CrewAI. <details><summary>More about</summary>

  It prevents split-brain state and race conditions in parallel multi-agent systems by introducing an atomic propose-validate-commit mutex and cross-framework coordination.

  _Yet another heroic attempt to impose order on the chaotic swarm of agents we've unleashed, proving that even our digital workers need a traffic light and a budget to avoid ruining everything._

  `multi-agent` `orchestration` `typescript` `nodejs` `mcp`
  </details>

- **[autort](https://github.com/kyegomez/autort)** `⭐ 43` `updated >1y` An implementation of the AutoRT paper that uses a multi-agent swarm system to analyze scenes and generate prioritized task lists for robotic action models. <details><summary>More about</summary>

  It provides a code-first framework for developers building embodied AI systems who need to orchestrate robotic agents based on visual scene understanding.

  _You can now orchestrate a swarm of robots to fetch a bottle from the table, provided you've successfully navigated the dependency hell of installing a library named after a swarm._

  `robotics` `multi-agent` `swarm` `llm` `sdk`
  </details>

- **[everyrow-sdk](https://github.com/futuresearch/everyrow-sdk)** `⭐ 37` `updated ≤30d` A Python SDK and MCP server that provides a team of web research agents to forecast, classify, score, and gather data, designed to be used as a callable tool by AI surfaces like Claude Code, Claude.ai, and Gemini. <details><summary>More about</summary>

  It allows developers to offload large-scale web research and data labeling tasks to a specialized agent workforce directly from their pandas dataframes or AI coding tools.

  _We have finally reached the point where we need SDKs to give our AI agents their own team of sub-agents, just in case the recursion wasn't deep enough._

  `agents` `mcp` `sdk` `research` `claude-code`
  </details>

- **[everyrow-sdk](https://github.com/futuresearch/futuresearch-python)** `⭐ 37` `updated ≤30d` A Python SDK and MCP server that provides a team of web research agents for data gathering, classification, forecasting, and ranking across large datasets. <details><summary>More about</summary>

  It lets developers offload large-scale web research and data labeling tasks to parallel agent teams directly from Python, Claude Code, or other AI surfaces.

  _Finally, a way to deploy a union of research agents to classify 10,000 rows, so you can anxiously wonder if the agents are hallucinating the categories faster than you can verify them._

  `agents` `sdk` `mcp` `research` `data`
  </details>

- **[shifts](https://github.com/aaronrussell/shifts)** `⭐ 36` `updated >1y` Shifts is an Elixir framework for composing autonomous AI agent workflows using a mixture of LLM backends like Anthropic and Ollama. <details><summary>More about</summary>

  It allows Elixir developers to build stateful, multi-step agent workflows with tool-calling capabilities directly within their existing ecosystem.

  _Now you can orchestrate a swarm of agents in Elixir while pretending the 0.0.x stability tag and the 'for the brave and adventurous' warning don't exist._

  `elixir` `agent-orchestration` `llm` `framework` `autonomous-agents`
  </details>

- **[coreagent](https://github.com/coreagent-project/coreagent)** `⭐ 28` `updated ≤1y` A lightweight Python framework for building LLM agents with stateful tools and a custom AIML protocol for structured model communication. <details><summary>More about</summary>

  It offers developers a simplified way to build multi-agent systems with shared state and proposes an alternative to MCP for handling character escaping in LLM outputs.

  _Just when you thought the protocol wars were settled, another framework arrives to declare MCP useless and introduce AIML, because apparently we needed yet another acronym to debug at 2 AM._

  `agent-framework` `stateful-tools` `python` `llm` `aiml`
  </details>

- **[hyv](https://github.com/blib-la/hyv)** `⭐ 24` `updated >1y` A JavaScript/TypeScript library and set of adapters for chaining multiple AI and API agents to manage complex tasks across different models like GPT and Stable Diffusion. <details><summary>More about</summary>

  It provides a unified, plug-and-play architecture for developers to script interactions between diverse AI models directly in code rather than relying on separate UIs.

  _Just when you thought wrapping one API in a Promise was the peak of modern engineering, we now have an entire framework dedicated to making autonomous agents argue with each other until a PNG is generated._

  `agent-chaining` `sdk` `typescript` `llm-integration`
  </details>

- **[hyv](https://github.com/failfa-st/hyv)** `⭐ 24` `updated >1y` Hyv is a TypeScript library and modular SDK for chaining multiple AI and API agents to handle complex, multi-model tasks with a unified API. <details><summary>More about</summary>

  It provides developers with plug-and-play adapters to orchestrate diverse models—like GPT and Stable Diffusion—within a single, code-first workflow.

  _Yet another framework promising seamless multi-agent harmony, because clearly what the ecosystem needed in 2023 was one more abstraction layer to manage before you can even prompt a model._

  `agents` `sdk` `typescript` `langchain` `orchestration`
  </details>

- **[swiftswarm](https://github.com/jamesrochabrun/swiftswarm)** `⭐ 23` `updated ≤1y` A Swift framework providing lightweight, ergonomic abstractions for coordinating multiple AI agents and managing conversation handoffs in iOS and Swift applications. <details><summary>More about</summary>

  It gives Swift developers a native, code-first way to experiment with multi-agent orchestration patterns directly within their existing app projects without switching to Python or JavaScript stacks.

  _Yet another framework proves that the fastest way to understand agent orchestration is to implement it yourself in a language the original authors specifically did not use._

  `swift` `multi-agent` `orchestration` `ios` `framework`
  </details>

- **[a2a4j](https://github.com/pheonixhkbxoic/a2a4j)** `⭐ 17` `updated ≤1y` A Java SDK and Spring Boot framework implementing Google's Agent-to-Agent (A2A) protocol for building interoperable AI agents. <details><summary>More about</summary>

  It provides Java developers with a structured way to implement agent collaboration, capability discovery, and task management within enterprise Spring ecosystems.

  _Just what the Java ecosystem needed: another layer of abstraction to argue about in XML configs, now with autonomous agents that can ignore your requests in a standardized, protocol-compliant way._

  `java` `a2a` `agent-orchestration` `spring-boot` `langchain4j`
  </details>

- **[ruby-openai-swarm](https://github.com/graysonchen/ruby-openai-swarm)** `⭐ 13` `updated >1y` A Ruby gem that ports OpenAI's lightweight Swarm framework to Ruby, providing a code-first SDK for building multi-agent systems with handoff patterns and function calling. <details><summary>More about</summary>

  Ruby developers can now experiment with educational multi-agent orchestration patterns and handoff workflows without leaving their native ecosystem.

  _We have successfully ported an educational framework for coordinating agents to a language whose greatest contribution to AI orchestration might be the clever naming of gems._

  `ruby` `multi-agent` `orchestration` `sdk`
  </details>

- **[flux0](https://github.com/flux0-ai/flux0)** `⭐ 12` `updated ≤1y` A Python framework for deploying and orchestrating AI agents with multi-agent support, session management, event streaming, and integrations with LangGraph and PydanticAI. <details><summary>More about</summary>

  It provides developers with a unified backend to manage agent lifecycles, stream real-time updates via JSON patches, and build conversational UIs with a dedicated React toolkit.

  _Yet another 'unified' agent framework that promises to solve orchestration complexity by adding a new layer of abstraction you'll have to debug at 2am._

  `agent-orchestration` `multi-agent` `real-time-streaming` `llm-framework` `react-ui`
  </details>

- **[mdma](https://github.com/mobilereality/mdma)** `⭐ 12` `updated ≤30d` MDMA (Markdown Document with Mounted Applications) extends Markdown with interactive components like forms, approval gates, and webhooks, allowing LLMs to generate structured, actionable documents rendered via a React SDK. <details><summary>More about</summary>

  It replaces fragile free-form text parsing with a predictable schema for LLM outputs, enabling developers to build interactive AI workflows and structured UIs without writing custom rendering logic for every use case.

  _We've successfully evolved AI interactions from 'vibes-based text' to 'vibes-based forms', ensuring the model now hallucinates the exact structure of your intake questionnaire instead of just the answers._

  `markdown` `llm` `interactive` `mcp` `react`
  </details>

- **[lmscript](https://github.com/lucasavila00/lmscript)** `⭐ 10` `updated >1y` A TypeScript suite for building controllable language model interactions that integrates with local inference runtimes like SGLang and vLLM. <details><summary>More about</summary>

  It gives developers a structured way to define and execute constrained LM programs against self-hosted models without relying on heavy Python stacks.

  _Another pristine TypeScript wrapper enters the arena, offering you yet another 'clean' way to orchestrate local models while your vLLM config file slowly achieves sentience._

  `typescript` `local-ai` `llm` `inference` `sglang`
  </details>

- **[swarm-ai](https://github.com/intelliswarm-ai/swarm-ai)** `⭐ 10` `updated ≤30d` A Java multi-agent orchestration framework built on Spring AI and Spring Boot that lets developers define agent workflows in YAML or Java, with built-in budget enforcement, RBAC, and governance gates. <details><summary>More about</summary>

  It gives JVM teams a code-first way to build governed multi-agent systems with guardrails and observability without switching stacks or rolling their own orchestration from scratch.

  _Now you can ship a self-improving agent swarm with enterprise guardrails and still spend three sprints debating whether your YAML qualifies as a 'process strategy' or just a very expensive to-do list._

  `java` `multi-agent` `spring-ai` `orchestration` `governance`
  </details>

- **[elisym](https://github.com/elisymlabs/elisym)** `⭐ 9` `updated ≤30d` Open infrastructure and SDK for AI agents to discover each other, execute jobs, and exchange SOL payments over Nostr relays. <details><summary>More about</summary>

  It provides developers with a decentralized protocol and SDK to build agent marketplaces that handle discovery, job execution, and crypto payments without a central platform.

  _Finally, a decentralized way for your agents to blow your SOL budget on other agents you didn't even know existed._

  `agents` `mcp` `nostr` `solana` `sdk`
  </details>

- **[swarm-go](https://github.com/feiskyer/swarm-go)** `⭐ 8` `updated >1y` A lightweight, ergonomic Go framework for building multi-agent systems with event-driven workflows, native function calls, and agent handoff patterns inspired by OpenAI's Swarm. <details><summary>More about</summary>

  It gives Go developers a minimal, composable way to embed multi-agent orchestration directly into their applications without heavy dependencies or complex abstractions.

  _Another day, another framework promising to orchestrate your agents while you quietly wonder if coordinating them is just the new way to avoid writing the actual business logic._

  `go` `multi-agent` `orchestration` `framework` `events`
  </details>

- **[axint](https://github.com/agenticempire/axint)** `⭐ 6` `updated ≤30d` Axint is a compiler that translates TypeScript, Python, or its own surface language into validated Swift for Apple platforms, featuring a repair loop and MCP server integration for agent-driven development. <details><summary>More about</summary>

  It shrinks Apple's verbose API boilerplate into a smaller authoring surface, allowing coding agents to generate and repair App Intents, Widgets, and SwiftUI features with structured validation.

  _We have successfully abstracted the abstraction, meaning your agent can now generate the Swift that it will later complain about debugging._

  `apple` `swift` `compiler` `mcp` `agents`
  </details>

- **[discovery-engine](https://github.com/leap-laboratories/discovery-engine)** `⭐ 6` `updated ≤30d` Discovery Engine is a Python SDK and API service that analyzes tabular data to find novel, statistically validated feature interactions and subgroup effects without requiring pre-defined hypotheses. <details><summary>More about</summary>

  It allows developers and data scientists to automate the discovery of complex conditional patterns and interaction effects in datasets using a structured ML pipeline rather than manual hypothesis testing.

  _Finally, a way to automate the 'Eureka!' moment so you can spend more time debugging why the AI thinks humidity and wind speed are the keys to your entire business logic._

  `data-science` `tabular-data` `pattern-discovery` `sdk` `api`
  </details>

- **[agenium](https://github.com/aganium/agenium)** `⭐ 2` `updated ≤90d` AGENIUM is a developer toolkit and protocol implementation for identity, discovery, and stateful messaging between AI agents using the agent:// URI scheme and mTLS, with MCP compatibility. <details><summary>More about</summary>

  It provides the plumbing for agents to resolve and securely communicate with one another, which is becoming a necessary layer as developers build multi-agent workflows and integrate with the Model Context Protocol.

  _We have successfully invented DNS for the agent economy, meaning your next production outage will be traced to a typo in an agent:// URI that you paid for in cryptocurrency._

  `agent-protocol` `mcp` `a2a` `identity` `dns`
  </details>

- **[sentinels](https://github.com/garyblankenship/sentinels)** `⭐ 2` `updated ≤1y` A Laravel PHP package for building agent-based task orchestration pipelines with invokable agents, event-driven workflows, and synchronous or parallel async execution. <details><summary>More about</summary>

  It lets Laravel developers refactor tangled service classes into testable, observable agent pipelines without leaving familiar framework patterns.

  _Another heroic framework promises to rescue you from the 300-line service class you wrote because 'agents' sounded cooler than 'steps in a loop'._

  `laravel` `php` `agent-orchestration` `pipelines` `async`
  </details>

- **[agently](https://github.com/maplemx/agently)** `⭐ 1` `updated ≤30d` A Python framework for building GenAI applications with structured outputs, event-driven TriggerFlow orchestration, and model-agnostic switching. <details><summary>More about</summary>

  It gives developers a code-first way to tame LLM output drift and complex multi-step agent workflows without rewriting their stack when switching models.

  _Another framework promising to engineer the uncertainty out of your POCs, just in case the four other agent frameworks on your filesystem suddenly stop being the one true way._

  `python` `agents` `framework` `orchestration`
  </details>

- **[.github](https://github.com/flyflow-devs/.github)** `⭐ 0` `updated >1y` Flyflow is open-source API middleware written in Go that optimizes LLM application performance by reducing latency and increasing token limits. <details><summary>More about</summary>

  It provides a self-hostable layer for developers to improve the speed and reliability of their LLM integrations without sacrificing response quality.

  _We have now reached the point where we deploy dedicated middleware just to hide the fact that our 'instant' AI features are actually agonizingly slow._

  `llm` `middleware` `performance` `golang` `self-hosted`
  </details>

- **[revettr-python](https://github.com/alexanderlawson17/revettr-python)** `⭐ 0` `updated ≤90d` A Python client SDK for the Revettr API, enabling developers to score counterparty risk by analyzing domain, IP, wallet, and sanctions data for agentic commerce transactions. <details><summary>More about</summary>

  It provides a programmatic gatekeeper for AI agents transacting on protocols like x402, allowing developers to automate trust decisions via a simple score call.

  _We have officially reached the point where our autonomous agents need their own credit-reporting agencies to decide if that other agent is a shady counterparty._

  `sdk` `risk-scoring` `agent-commerce` `python` `x402`
  </details>

- **[llama_index](https://github.com/run-llama/llama_index)** LlamaIndex provides LlamaParse, a hosted and local document processing service using vision-language models and agents to parse complex layouts, tables, and charts into LLM-ready structured data. <details><summary>More about</summary>

  It handles the notoriously painful part of RAG and agent pipelines—ingesting messy real-world documents—so developers can stop writing brittle regex and start shipping retrieval features.

  _We have successfully abstracted away the pain of reading PDFs, yet somehow still find ourselves spending three days debugging why the agent thought a chart axis was a SQL table._

  `agentic` `document-processing` `llm` `ocr` `rag`
  </details>

- **[scrapegraph-ai](https://github.com/scrapegraphai/scrapegraph-ai)** A web scraping API and platform that uses AI to extract structured data from websites using natural language prompts, offering SDKs and an MCP server integration. <details><summary>More about</summary>

  It allows developers to automate data extraction and site monitoring without writing brittle selectors, integrating directly into AI workflows via MCP, LangChain, or CLI tools.

  _We’ve finally reached the point where we need an AI to scrape the AI-generated markup that broke the last generation of scrapers._

  `ai-infrastructure` `api` `data-extraction` `mcp` `web-scraping`
  </details>

- **[A2A](https://google.github.io/A2A)** A2A is a protocol specification from Google defining how AI agents should discover each other's capabilities and exchange messages. <details><summary>More about</summary>

  It provides a standardized schema for agent-to-agent communication, aiming to solve the interoperability problem as multi-agent systems become more complex.

  _We have successfully reached the point where our autonomous agents require their own protocol layer just to argue with one another over JSON._

  `protocol` `agent-communication` `google` `specification`
  </details>

- **[ACP](https://agentcommunicationprotocol.dev/introduction/welcome)** The Agent Communication Protocol (ACP) is an open, REST-based protocol for interoperability between AI agents, now part of the Linux Foundation's A2A initiative. <details><summary>More about</summary>

  It provides a standardized API and SDKs for developers to connect agents built on different frameworks like LangChain or CrewAI without writing custom integration glue.

  _Just when you mastered the MCP stack, the ecosystem decided to accelerate into ACP and A2A, ensuring your integration code remains a perpetual work in progress._

  `agents` `protocol` `interoperability` `linux-foundation`
  </details>

- **[agents](https://huggingface.co/docs/transformers/v5.8.0/agents)** A documentation stub for the Hugging Face Transformers library's (deprecated) Agents API, which outlines how to define tools and run local language model agents. <details><summary>More about</summary>

  It provides developers with the reference implementation for building local agentic loops using the widely adopted Transformers ecosystem.

  _We have reached peak AI saturation when even the documentation page for a feature has gone missing, leaving developers to chase ghosts in the version history._

  `agents` `huggingface` `sdk` `local-ai`
  </details>

- **[ai-sdk.dev](https://ai-sdk.dev)** A TypeScript SDK and framework for building AI-powered applications and agents with unified APIs for text, image, and speech generation across 100+ models. <details><summary>More about</summary>

  It gives developers a single, streaming-friendly interface to swap between AI providers and build agentic workflows without writing custom fallback and parsing logic.

  _Another week, another 'universal' layer promising to abstract away the chaos of LLM providers, right before those providers deliberately break the abstractions you just built._

  `typescript` `sdk` `agents` `multi-model` `vercel`
  </details>

- **[autogen](https://microsoft.github.io/autogen)** A Microsoft framework for building multi-agent systems where multiple AI agents can collaborate, converse, and execute tasks together. <details><summary>More about</summary>

  It provides developers with a structured code-first way to orchestrate complex workflows involving multiple specialized LLM agents.

  _Another framework to help you simulate a software team in chat rooms so you can feel productive while debugging why Agent A is still waiting on Agent B to finish saying 'Hello'._

  `multi-agent` `framework` `microsoft` `orchestration`
  </details>

- **[bondai.dev](https://bondai.dev)** BondAI is a framework and platform for building and running autonomous AI agents that can interact with tools and memory systems. <details><summary>More about</summary>

  It provides developers with a structured way to compose multi-step agent workflows and tool integrations without wiring everything from scratch.

  _Yet another agent framework to evaluate while your actual backlog quietly realizes it no longer needs human intervention to grow._

  `agents` `framework` `orchestration` `sdk`
  </details>

- **[Code Interpreter SDK](https://e2b.dev/docs)** E2B provides isolated, fast Linux VM sandboxes (and SDKs to manage them) that allow developers to safely run code, tools, and data-processing tasks for AI agents. <details><summary>More about</summary>

  It gives AI agents a secure, disposable compute environment with terminals, file systems, and browser access, which is essential infrastructure for building and scaling agentic workflows.

  _We have ascended from 'vibe coding' to 'vibe provisioning infrastructure,' where your agent's biggest production risk is that its sandbox provider scheduled maintenance during your 3 AM deploy._

  `sandbox` `agents` `infrastructure` `sdk`
  </details>

- **[codestral](https://mistral.ai/news/codestral)** Codestral is a 22B open-weight language model from Mistral AI specifically trained for code generation, supporting over 80 programming languages with instruction, completion, and fill-in-the-middle capabilities. <details><summary>More about</summary>

  It provides a fast, high-context (32k) model option for IDE integrations like Continue.dev and Tabnine, as well as a backend for building AI coding applications via API or self-deployment.

  _Another 'write code like a human' model launch, just in time to add a third option to the dropdown menu you've been ignoring while writing the prompt instead of the code._

  `code-model` `llm` `mistral` `ide-integration` `open-weight`
  </details>

- **[crewai.io](https://crewai.io)** CrewAI is a framework for orchestrating role-playing, autonomous AI agents that collaborate to tackle complex tasks. <details><summary>More about</summary>

  It provides developers with a structured way to build multi-agent systems where specialized agents can work together on coding and operational workflows.

  _Another day, another framework that lets you orchestrate a team of imaginary employees who never ask for equity or dental coverage._

  `multi-agent` `agent-framework` `orchestration` `python`
  </details>

- **[docs.axolotl.ai](http://docs.axolotl.ai)** Axolotl is an open-source CLI and configuration framework for fine-tuning, post-training, and evaluating large language models across multiple GPUs and hardware setups. <details><summary>More about</summary>

  It gives developers a single YAML-driven pipeline to fine-tune everything from LLaMA to multimodal models with built-in support for LoRA, RLHF, and distributed training optimizations.

  _You can now perfectly fine-tune a 70B model to write like your favorite obscure blogger, provided you first solve the actual puzzle of configuring NCCL, Docker, and your GPU's will to live._

  `fine-tuning` `llm-training` `cli` `multimodal` `distributed-training`
  </details>

- **[docs.crewai.com](https://docs.crewai.com)** The official documentation site for CrewAI, a framework for building multi-agent AI systems. <details><summary>More about</summary>

  It provides the reference material developers need to implement role-based agent teams that collaborate on complex tasks via code.

  _Memorizing the syntax for agent delegation so you can finally automate the soul-crushing work of reading documentation._

  `multi-agent` `documentation` `orchestration` `framework`
  </details>

- **[e2b](https://x.com/e2b)** E2B provides isolated, sandboxed cloud environments (Code Interpreting) specifically designed for AI applications to execute code safely. <details><summary>More about</summary>

  It allows developers building AI apps to offload untrusted code execution to a secure sandbox, enabling agents to run generated code without risking the host infrastructure.

  _We have successfully abstracted the concept of 'running code' so far away that we now need a specialized cloud provider just to let our hallucinations compile themselves in isolation._

  `sandbox` `code-execution` `ai-infrastructure` `agents`
  </details>

- **[exa.ai](https://exa.ai)** Exa is a web search API designed for AI applications, providing low-latency, structured retrieval of real-time web data for grounding agents and LLMs. <details><summary>More about</summary>

  It offers developers a specialized search backend with features like structured outputs and highlights to reduce token costs and improve retrieval accuracy for AI workflows.

  _Another essential brick in the wall of 'agentic' infrastructure, ensuring your LLM can now hallucinate about Boeing's founding year with sub-180ms confidence._

  `search-api` `ai-infrastructure` `retrieval` `mcp` `agents`
  </details>

- **[openrouter.ai](https://openrouter.ai)** OpenRouter is a unified API gateway that provides access to over 300 AI models from 60+ providers through a single OpenAI-compatible interface. <details><summary>More about</summary>

  It allows developers to switch between models and providers without rewriting API integration code, while offering fallback reliability and price comparison across the LLM ecosystem.

  _Now you can spend just as much time debating which of the 300 models to route to as you did writing the code that calls them._

  `llm-api` `model-gateway` `sdk` `multi-provider`
  </details>

- **[portkey.ai](https://portkey.ai)** Portkey is a platform for managing, routing, and observing LLM requests across different model providers. <details><summary>More about</summary>

  It provides developers with a unified API gateway to switch between AI models, manage fallbacks, and monitor costs and performance in production.

  _Yet another layer of indirection ensuring that when the AI inevitably hallucinates, you'll have beautifully graphed evidence of exactly how much latency and money you burned in the process._

  `llmops` `gateway` `observability` `ai-infrastructure`
  </details>

- **[reactagent.io](https://reactagent.io)** React Agent is a framework designed to build autonomous AI agents using the React (Reasoning and Acting) pattern. <details><summary>More about</summary>

  It provides developers with a structured way to implement agents that can reason about tasks and interact with external tools via a standardized loop.

  _Yet another framework promising that this time, wrapping a while-loop around a model will finally result in software that debugs itself._

  `agents` `react-pattern` `autonomous` `framework`
  </details>

- **[rivestack.io](https://rivestack.io)** Managed PostgreSQL hosting optimized for AI workloads with built-in pgvector, NVMe storage, and fixed monthly pricing for vector search and RAG applications. <details><summary>More about</summary>

  Developers running pgvector can migrate from Supabase, Neon, or Pinecone to get dedicated NVMe performance, sub-4ms latency, and predictable billing without the ops burden of self-hosting.

  _We have successfully reached the point where the most innovative thing you can do with AI infrastructure is pay someone to give you a properly tuned Postgres instance and call it a product._

  `pgvector` `postgresql` `vector-search` `managed-hosting` `rag`
  </details>

- **[riza.io](https://riza.io)** Riza is a production-ready isolated runtime API that safely executes untrusted LLM-generated code in sandboxed environments. <details><summary>More about</summary>

  It provides the secure execution layer that allows AI agents and applications to run generated code without risking the host system or production environment.

  _We have finally solved the AI code generation problem by building a high-speed sandbox for the AI to execute the code we still have to debug anyway._

  `code-execution` `sandbox` `ai-infrastructure` `agent-runtime`
  </details>

- **[self-operating-computer](https://www.hyperwriteai.com/self-operating-computer)** A framework that allows AI models like GPT-4V to autonomously control a computer by interpreting visual screenshots and simulating mouse and keyboard inputs. <details><summary>More about</summary>

  It demonstrates a developer-facing approach to agentic workflows where the AI interacts with the OS interface directly, bypassing API constraints to automate complex GUI-based tasks.

  _We have finally reached the point where we are teaching robots to click through cookie banners and decipher 1990s-era Excel menus just so we don't have to._

  `computer-use` `agent-framework` `gpt-4v` `automation`
  </details>

- **[thirdweb.com](https://thirdweb.com)** thirdweb provides web3 infrastructure, SDKs, and APIs that enable developers to build AI agents capable of autonomously transacting, paying for services, and interacting with blockchain data. <details><summary>More about</summary>

  It offers a specialized developer stack—including a dedicated MCP server—for building crypto-native AI applications that can hold assets and execute payments programmatically.

  _We have officially reached the stage where your agent needs a wallet, a Visa card, and a Solana RPC endpoint just to decide if it's Tuesday._

  `web3` `ai-agents` `blockchain` `mcp` `payments`
  </details>

- **[www.hyperbrowser.ai](https://www.hyperbrowser.ai)** Hyperbrowser provides cloud-hosted browser infrastructure designed for AI agents and applications to interact with the web. <details><summary>More about</summary>

  It handles the headless browser plumbing so agents can scrape, navigate, and interact with web pages without developers managing their own browser fleets.

  _We have officially reached the point where our agents need their own cloud-hosted browsers so they can suffer through cookie banners just like we do._

  `cloud-browser` `agent-infra` `web-automation`
  </details>

- **[www.langchain.com](https://www.langchain.com)** LangChain provides a suite of open-source frameworks (LangChain, LangGraph, DeepAgents) and the LangSmith platform for building, observing, evaluating, and deploying AI agents. <details><summary>More about</summary>

  It offers developers a unified stack to manage the full lifecycle of agent development, from rapid prototyping with various model providers to production observability and evaluation.

  _You can now trace exactly which part of your three-layer agentic workflow hallucinated the database schema, provided you survive the dependency graph of the framework itself._

  `agents` `frameworks` `observability` `evaluation`
  </details>

- **[www.llamaindex.ai](https://www.llamaindex.ai)** LlamaIndex offers LlamaParse, an agentic OCR and document-processing SaaS that parses complex layouts, tables, charts, and handwriting into structured, LLM-ready outputs. <details><summary>More about</summary>

  It gives developers a production-grade pipeline to reliably ingest messy enterprise documents for RAG, agent workflows, and structured extraction without building custom parsers.

  _Yet another reminder that your bespoke PDF parser was always the house of cards your roadmap pretended it wasn’t._

  `document-processing` `ocr` `rag` `agentic` `llm-ready`
  </details>

- **[www.pinecone.io](https://www.pinecone.io)** Pinecone is a fully managed, cloud-hosted vector database designed for AI applications, providing fast semantic search and memory storage for retrieval-augmented generation (RAG) and agent workflows via API. <details><summary>More about</summary>

  It provides the backend infrastructure for developers to give LLM-powered agents and chatbots long-term memory and the ability to search massive datasets without managing their own indexing infrastructure.

  _Yet another reminder that your elaborate microservice architecture is currently just a wrapper around a vector similarity search that returns the three sentences the marketing team wrote in 2022._

  `vector-database` `rag` `agents` `infrastructure` `search`
  </details>

- **[www.ultravox.ai](https://www.ultravox.ai)** Ultravox is a real-time voice AI infrastructure platform that provides speech-native models and APIs for building low-latency, conversational voice agents. <details><summary>More about</summary>

  It offers developers a purpose-built stack to integrate human-like voice interactions into applications without the latency and context loss of traditional speech-to-text-to-LLM pipelines.

  _Yet another 'agentic' API promising to solve latency, summoning the inevitable future where we debug WebSocket streams instead of stack traces._

  `voice-ai` `infrastructure` `real-time` `api` `sdk`
  </details>

- **[yepcode.io](https://yepcode.io)** A developer-first platform that runs JavaScript and Python integrations, including AI-generated scripts, in secure, isolated cloud sandboxes with built-in secrets, dependency management, and audit trails. <details><summary>More about</summary>

  It lets developers build and run complex API and database integrations with full code control and enterprise governance, bypassing the limits of traditional no-code tools like Zapier.

  _Finally, a secure sandbox to run the AI-generated spaghetti your agent wrote, because nothing says 'enterprise governance' like shipping unvetted LLM scripts with just a `pip install` and a prayer._

  `integrations` `sandbox` `mcp` `automation` `serverless`
  </details>