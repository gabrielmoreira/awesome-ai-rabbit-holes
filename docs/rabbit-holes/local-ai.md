<!-- This file is generated. Do not edit it directly. Submit tools through config/sources.yml. -->
# Local & Self-hosted AI

Runtimes, serving stacks, desktop apps, and tooling for running AI models on your own hardware or self-hosted infrastructure.

_105 entries in 4 sections, ranked by stars. Each section opens with its top 30; the rest of that section waits behind the **▸ more** panel at its end._

## Contents

- [Inference Engines](#inference-engines) — 38
- [Local API Servers](#local-api-servers) — 18
- [Desktop Chat & UIs](#desktop-chat--uis) — 36
- [Fine-tuning & Training](#fine-tuning--training) — 13

## Inference Engines

- **[llama.cpp](https://github.com/ggml-org/llama.cpp)** 🔥 `⭐ 130.1k` `updated ≤30d` High-performance LLM inference engine written in C/C++ designed for local execution. <details><summary>More about</summary>

  It enables developers to run large language models on consumer-grade hardware with high efficiency through quantization.

  _Now you can suffer through massive model downloads on your own GPU instead of paying OpenAI for every token._

  `inference` `local-ai` `cpp` `quantization` `gguf`
  </details>
- **[vLLM](https://github.com/vllm-project/vllm)** `⭐ 86.8k` `updated ≤90d` vLLM is a high-throughput, memory-efficient inference and serving engine for large language models with PagedAttention and CUDA/HIP graph optimizations. <details><summary>More about</summary>

  It enables fast, scalable, and cost-effective deployment of LLMs for developers building AI-powered applications and services.

  _Finally, a serving layer that doesn't make you choose between bankrupting your cloud bill or waiting 30 seconds for a single token._

  `llm-serving` `inference` `pagedattention`
  </details>
- **[whisper.cpp](https://github.com/ggml-org/whisper.cpp)** 🔥 `⭐ 54.1k` `updated ≤30d` High-performance C/C++ implementation of OpenAI's Whisper automatic speech recognition model. <details><summary>More about</summary>

  Enables efficient, low-latency, and offline audio transcription directly on diverse hardware like Apple Silicon, Linux, and mobile devices.

  _Now you have one more way to turn your voice memos into perfectly transcribed text that you'll still never actually read._

  `speech-to-text` `inference` `whisper` `c-cpp` `local-ai`
  </details>
- **[SGLang](https://github.com/sgl-project/sglang)** `⭐ 36.7k` `updated ≤90d` SGLang is a high-performance serving framework for running and scaling large language models and multimodal models locally or in infrastructure. <details><summary>More about</summary>

  It lets developers self-host and serve modern LLMs and VLMs with optimized inference performance across CUDA, TPU, and Blackwell hardware.

  _Yet another carefully tuned inference stack to master while you wait for the one model that finally makes your local GPU stop sounding like a jet engine._

  `llm` `inference` `local-ai` `serving` `multimodal`
  </details>
- **[AirLLM](https://github.com/lyogavin/airllm)** `⭐ 35.3k` `updated ≤90d` AirLLM enables running 70B parameter large language models on a single 4GB GPU using memory optimization techniques. <details><summary>More about</summary>

  It lowers hardware barriers for developers to run and experiment with large models locally, enabling accessible LLM inference without expensive infrastructure.

  _The quiet realization that your laptop can now host a model larger than your life choices._

  `local-ai` `inference` `memory-optimization`
  </details>
- **[ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)** `⭐ 32.9k` `updated ≤90d` ZeroClaw is a Rust-based autonomous AI personal assistant runtime that runs locally, connects to multiple LLM providers and communication channels, and executes actions via tools including shell, browser, hardware, and MCP servers. <details><summary>More about</summary>

  It gives developers a fully self-hosted, extensible agent they can own and customize for automating workflows across desktop, terminal, and hardware without relying on hosted assistants.

  _Another 'own your agent' pitch that makes you wonder if you're escaping vendor lock-in just to become your own DevOps team._

  `ai-agent` `local-ai` `autonomous` `cli-tool` `rust`
  </details>
- **[NanoClaw](https://github.com/nanocoai/nanoclaw)** `⭐ 30.9k` `updated ≤90d` Nanoclaw is a lightweight, container-isolated AI assistant that connects to messaging apps and runs on Anthropic's Agents SDK for secure personal automation. <details><summary>More about</summary>

  It gives developers a secure, understandable AI agent they can self-host and customize to interact with personal messaging platforms without trusting large opaque systems.

  _Finally, an AI assistant that runs in Docker so you can blame the container when it messages your boss instead of you._

  `ai-agent` `claude-code` `cli` `containerized` `containers` `messaging` `messaging-bridge` `personal-automation` `self-hosted`
  </details>
- **[PicoClaw](https://github.com/sipeed/picoclaw)** `⭐ 30k` `updated ≤90d` PicoClaw is an ultra-lightweight, self-bootstrapping AI assistant written in Go that runs on $10 hardware with less than 10MB of RAM. <details><summary>More about</summary>

  It enables developers to run a self-hosted, multi-provider AI agent on edge devices or low-spec servers, supporting CLI, Android, and multiple messaging channels.

  _Just when you thought your MacBook Pro was the minimum viable hardware for an AI agent, a 10MB Go binary arrives to make your cooling fans feel personally insulted._

  `go` `edge-ai` `low-resource` `self-hosted` `cli-agent`
  </details>
- **[llamafile](https://github.com/mozilla-ai/llamafile)** `⭐ 26.2k` `updated ≤90d` llamafile packages LLMs and the llama.cpp runtime into a single, dependency-free executable that runs locally on most operating systems and CPU architectures. <details><summary>More about</summary>

  It enables developers to run open-weight models locally with zero setup, making private, offline AI inference trivial to distribute and test against.

  _You now have no excuse not to run a local model, yet somehow still find yourself pasting secrets into a web UI while a 4GB executable sits chmod +x on your desktop._

  `local-ai` `llm` `single-binary` `offline` `inference`
  </details>
- **[qwen3-coder](https://github.com/qwenlm/qwen3-coder)** `⭐ 16.8k` `updated ≤1y` Qwen3-Coder is an open-weight language model series from Alibaba's Qwen team, specifically fine-tuned for coding tasks and agentic workflows with support for long contexts up to 1M tokens. <details><summary>More about</summary>

  It offers a powerful, locally-runnable alternative to closed-source models like Claude Sonnet for developers building coding agents or running agentic workflows on their own hardware.

  _Yet another open-weight model drops that inevitably triggers the 'download 480B parameters or settle for the tiny one' existential crisis we all know too well._

  `llm` `coding-model` `local-ai` `qwen` `open-weight`
  </details>
- **[FreeToken](https://github.com/flashml-org/freetoken)** `⭐ 14.1k` `updated ≤90d` FreeToken is an edge-native Mixture-of-Experts serving engine for running large frontier models locally on consumer hardware. <details><summary>More about</summary>

  It lets developers run 290B+ MoE models on gaming PCs with bandwidth-adaptive execution and elastic memory management, enabling local experimentation with frontier-scale open-weight models.

  _Finally, a way to pretend your RTX 4090 is a datacenter while your fan sounds like a jet taking off._

  `local-ai` `inference` `moe`
  </details>
- **[IronClaw](https://github.com/nearai/ironclaw)** `⭐ 12.6k` `updated ≤90d` IronClaw is an open-source, Rust-based personal AI agent OS that runs locally with WASM sandboxing, persistent memory, and multi-channel interfaces for secure task automation. <details><summary>More about</summary>

  It offers developers a self-hosted alternative to cloud-bound assistants with strong security guarantees, dynamic tool building, and local data control.

  _Yet another local AI agent promising you the moon, so you can happily spend your weekend tweaking PostgreSQL pgvector indexes instead of actually shipping code._

  `local-ai` `agent-os` `security` `rust` `wasm`
  </details>
- **[koboldcpp](https://github.com/lostruins/koboldcpp)** `⭐ 11.9k` `updated ≤90d` KoboldCpp is a single-file executable for running GGUF models with a KoboldAI-inspired UI and multi-modal capabilities. <details><summary>More about</summary>

  It lets developers run local LLMs and multimodal models without setup, enabling private inference for experimentation or integration.

  _Another local inference tool that makes you feel guilty for not quantizing your own 70B model on a Raspberry Pi._

  `local-ai` `inference` `gguf`
  </details>
- **[petals](https://github.com/bigscience-workshop/petals)** `⭐ 10.6k` `updated >1y` Petals is a distributed inference and fine-tuning system that runs large language models across a peer-to-peer network of volunteer GPUs. <details><summary>More about</summary>

  It enables developers to run and fine-tune massive models like Llama 3.1 405B on consumer hardware by splitting model layers across a swarm of contributors.

  _You trade privacy and latency for the thrill of running a model that could buy a small island, all while hoping strangers don’t crash the swarm mid-generation._

  `local-ai` `inference` `distributed-systems`
  </details>
- **[GPUStack](https://github.com/gpustack/gpustack)** `⭐ 5.8k` `updated ≤30d` gpustack is a GPU cluster manager that configures and orchestrates inference engines like vLLM and SGLang for high-performance AI model deployment. <details><summary>More about</summary>

  It simplifies scaling LLM serving across heterogeneous GPU hardware, reducing operational overhead for developers deploying production AI workloads.

  _Finally, a way to feel in control of your GPU farm while secretly hoping vLLM doesn't OOM during peak traffic._

  `llm-serving` `gpu-orchestration` `inference`
  </details>
- **[text-embeddings-inference](https://github.com/huggingface/text-embeddings-inference)** `⭐ 5.1k` `updated ≤90d` A high-performance inference solution for deploying and serving open-source text embedding and sequence classification models. <details><summary>More about</summary>

  Enables developers to efficiently serve and scale embedding models with optimized performance, supporting production-grade deployments with features like dynamic batching and distributed tracing.

  _Because nothing says 'modern development' like spending an afternoon tuning Flash Attention for your embedding pipeline._

  `embeddings` `serving` `inference` `huggingface` `performance`
  </details>
- **[ExLlamaV2](https://github.com/turboderp-org/exllamav2)** `⭐ 4.6k` `updated ≤1y` ExLlamaV2 is a fast inference library for running LLMs locally on modern consumer GPUs. <details><summary>More about</summary>

  It lets developers run large language models efficiently on accessible hardware, enabling local experimentation and deployment without relying on cloud APIs.

  _Another optimization tweak to make your 4090 feel slightly less inadequate when running 70B models locally._

  `local-inference` `gpu` `llm` `pytorch`
  </details>
- **[LoRAX](https://github.com/predibase/lorax)** `⭐ 3.8k` `updated ≤180d` A multi-LoRA inference server that dynamically serves thousands of fine-tuned LLMs on a single GPU using dynamic adapter loading and continuous batching. <details><summary>More about</summary>

  It allows developers to run a massive fleet of specialized fine-tuned models in production with drastically lower infrastructure costs by sharing a single base model.

  _Because nothing says 'streamlined developer experience' like managing a single GPU that is theoretically juggling thousands of adapters and their heterogeneous batching schedules._

  `llm-inference` `lora` `model-serving` `local-ai` `llmops`
  </details>
- **[luotuo-chinese-llm](https://github.com/lc1332/luotuo-chinese-llm)** `⭐ 3.6k` `updated >1y` Luotuo is an open-source Chinese large language model project that includes base models, embeddings, QA, and derivative applications. <details><summary>More about</summary>

  Provides developers with Chinese-language LLMs and related tooling for building or adapting Chinese AI applications.

  _Yet another Chinese LLM project where the real challenge is explaining why this isn’t just another Llama fork with a camel theme._

  `chinese-llm` `open-source-model` `local-ai`
  </details>
- **[ExLlama](https://github.com/turboderp/exllama)** `⭐ 2.9k` `updated >1y` ExLlama is a memory-efficient CUDA-based implementation of Llama for running 4-bit quantized weights on modern NVIDIA GPUs. <details><summary>More about</summary>

  It enables developers to run large language models locally with lower VRAM usage, making on-device inference more accessible.

  _The quiet relief of fitting a 7B model in 12GB VRAM, followed by the dread of realizing you still need to fine-tune it._

  `local-ai` `inference` `cuda` `quantization`
  </details>
- **[Moltis](https://github.com/moltis-org/moltis)** `⭐ 2.9k` `updated ≤90d` A secure, persistent personal agent server written in Rust that runs as a single binary with sandboxed execution, multi-provider LLM support, voice capabilities, memory, messaging integrations, and MCP tooling. <details><summary>More about</summary>

  Developers can run a self-contained, auditable AI agent on their own hardware with built-in memory, sandboxing, and messaging integrations without relying on Node.js or complex plugin ecosystems.

  _Yet another personal agent runtime promising you'll finally self-host your way out of context-window anxiety, this time in Rust, because apparently the 47th agent server was missing memory and a Telegram bridge._

  `rust` `self-hosted` `personal-agent` `mcp` `sandbox`
  </details>
- **[TokenSpeed](https://github.com/lightseekorg/tokenspeed)** `⭐ 2.2k` `updated ≤90d` TokenSpeed is a TensorRT-LLM-level performance LLM inference engine with vLLM-like usability, targeting agentic workloads via a local-SPMD design and static compiler. <details><summary>More about</summary>

  It offers high-throughput inference optimized for agentic workloads, reducing latency and cost for developers running LLM agents in production.

  _Another 'speed-of-light' inference engine promising to finally make your agents not feel like they're wading through molasses._

  `llm-inference` `agentic-workloads` `performance`
  </details>
- **[HunyuanOCR](https://github.com/tencent-hunyuan/hunyuanocr)** `⭐ 2k` `updated ≤90d` HunyuanOCR is a 1B parameter vision-language model from Tencent for end-to-end OCR, supporting document parsing, multilingual text extraction, and image-to-text translation. <details><summary>More about</summary>

  Developers can self-host a lightweight, state-of-the-art OCR model that handles complex documents and over 100 languages with a single inference call via vLLM.

  _Just what the ecosystem needed: another 1B-parameter 'lightweight' model that still requires a 20GB CUDA 12.9 GPU and a very specific compat package to actually run._

  `ocr` `multimodal` `vlm` `local-ai` `tencent`
  </details>
- **[xLLM](https://github.com/xllm-ai/xllm)** `⭐ 1.6k` `updated ≤90d` A high-performance inference engine for LLM, VLM, DiT, and REC models optimized for diverse AI accelerators, hosted under the OpenAtom Foundation. <details><summary>More about</summary>

  Developers can run and optimize large model inference locally or on custom hardware without vendor lock-in.

  _Finally, an inference engine that doesn’t treat your GPU like a suggestion._

  `inference-engine` `llm` `performance` `openatom` `accelerators`
  </details>
- **[Parallax](https://github.com/gradienthq/parallax)** `⭐ 1.4k` `updated ≤180d` Parallax is a distributed model serving framework for building AI clusters across heterogeneous nodes. <details><summary>More about</summary>

  It enables developers to host and serve LLMs on personal devices with cross-platform support and pipeline parallelism, reducing dependency on centralized inference APIs.

  _Finally, a way to turn your old MacBook, your friend’s gaming PC, and that one server you forgot about into a single, slightly chaotic AI supercomputer._

  `distributed-inference` `llm-serving` `p2p` `gpu-cluster` `self-hosted`
  </details>
- **[whisper-ctranslate2](https://github.com/softcatala/whisper-ctranslate2)** `⭐ 1.4k` `updated ≤1y` Whisper command line client compatible with original OpenAI client based on CTranslate2.
- **[llama2.rs](https://github.com/srush/llama2.rs)** `⭐ 1.1k` `updated >1y` A fast, pure-Rust implementation of the Llama 2 inference decoder for running quantized models locally on CPU. <details><summary>More about</summary>

  It gives developers a lightweight, Python-callable way to run 70B models locally with SIMD and memory mapping without touching a GPU or a heavy framework.

  _Yet another reason to convince yourself that spending three hours compiling Rust nightly toolchains is a normal part of your AI inference stack._

  `rust` `local-inference` `cpu` `llama2` `quantized`
  </details>
- **[Kaito](https://github.com/kaito-project/kaito)** `⭐ 1k` `updated ≤90d` Kubernetes AI Toolchain Operator that automates LLM model inference, fine-tuning, and RAG engine deployment in Kubernetes clusters. <details><summary>More about</summary>

  It simplifies deploying and scaling LLM workloads in Kubernetes by abstracting GPU provisioning, model storage, and inference engine configuration.

  _Finally, a way to make Kubernetes do the heavy lifting for your AI workloads, because manually tuning tensor parallelism was clearly the highlight of your week._

  `kubernetes` `llm-serving` `gpu` `operator` `rag`
  </details>
- **[ZhiLight](https://github.com/zhihu/zhilight)** `⭐ 908` `updated ≤1y` ZhiLight is a highly optimized LLM inference acceleration engine for Llama and its variants, focused on performance improvements for PCIe-based GPUs. <details><summary>More about</summary>

  It provides measurable QPS and latency gains over vLLM and SGLang on consumer and data-center GPUs, serving as a high-performance local inference runtime.

  _Another inference engine promising 2x speedup while you wait for model downloads to finish, adding to the paradox of choice in local LLM serving._

  `llm-inference` `local-ai` `performance` `cuda` `optimization`
  </details>
- **[BlockAGI](https://github.com/orgexyz/blockagi)** `⭐ 325` `updated >1y` blockagi is a self-hosted, hackable research agent inspired by AutoGPT, designed for autonomous task execution using LLMs. <details><summary>More about</summary>

  It offers developers a customizable foundation for building autonomous agents that can plan, browse, and act on goals without constant supervision.

  _Another AutoGPT clone promising full autonomy while quietly requiring constant prompt engineering and API key management._

  `ai-agent` `autogpt` `self-hosted`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+8 more in Inference Engines &nbsp;—&nbsp; click to expand</strong></summary>

- **[DashInfer](https://github.com/modelscope/dash-infer)** `⭐ 272` `updated >1y` DashInfer is a high-performance, C++-based LLM inference engine with C++ and Python APIs, optimized for CUDA, x86, and ARMv9 hardware architectures.
- **[LLMKube](https://github.com/defilantech/llmkube)** `⭐ 227` `updated ≤30d` Kubernetes operator for self-hosted LLM inference that manages llama.cpp, vLLM, TGI, and mlx-server runtimes across NVIDIA and Apple Silicon hardware with autoscaling and an OpenAI-compatible API.
- **[ClawFleet](https://github.com/clawfleet/clawfleet)** `⭐ 173` `updated ≤180d` ClawFleet is a self-hosted Docker-based fleet manager for running isolated instances of AI agents like OpenClaw and Hermes with a browser dashboard.
- **[How Much VRAM](https://github.com/alexbodner/how_much_vram)** `⭐ 101` `updated >1y` A web tool that estimates VRAM requirements for running local LLMs based on model parameters and configuration.
- **[LLMHub](https://github.com/jmather/llmhub)** `⭐ 9` `updated >1y` LLMHub is a lightweight CLI and REST API platform for managing, starting, stopping, and interacting with multiple language models.
- **[musharna/jobd](https://github.com/musharna/jobd)** `⭐ 4` `updated ≤90d` Self-hostable GPU-aware job broker for personal machines with native MCP/agent integration.
- **[FireworksAI](https://fireworks.ai)** Fireworks.ai provides fast inference for generative AI models, including open-source LLMs and image models, with optional fine-tuning and deployment capabilities.
- **[H2OAI](https://h2o.ai)** An end-to-end generative and predictive AI platform designed for air-gapped, on-premises, and private cloud environments.

</details>

## Local API Servers

- **[Ollama](https://github.com/ollama/ollama)** `⭐ 182.1k` `updated ≤90d` Ollama is a local runtime and serving stack for downloading, running, and managing open-weight LLMs via a simple CLI and REST API on macOS, Windows, Linux, and Docker. <details><summary>More about</summary>

  It gives developers a one-command way to run private, local models and wire them into coding agents like Claude Code, Codex, and Copilot CLI without sending code to external APIs.

  _You now have 170,000 stars worth of justification to run a 70B model locally, immediately discovering that your laptop was never the bottleneck, your prompts were._

  `local-ai` `llm` `cli` `self-hosted` `inference`
  </details>
- **[Private GPT](https://github.com/zylon-ai/private-gpt)** `⭐ 57.6k` `updated ≤90d` Complete API layer for private AI applications on local models: RAG, skills, tools, MCP, text-to-sql, and more. Works with any OpenAI-compatible inference server.
- **[LocalAI](https://github.com/mudler/localai)** `⭐ 49.4k` `updated ≤90d` LocalAI is an open-source local inference engine that runs LLMs, vision, voice, and image models on any hardware with drop-in OpenAI and Anthropic API compatibility. <details><summary>More about</summary>

  It lets developers run a private, local AI stack that behaves like OpenAI or Anthropic APIs, making it easy to test, build, and deploy without sending data to external providers.

  _Now you can spend your evening debugging llama.cpp backends and GPU layers just to replicate the same API you were already paying for._

  `local-ai` `inference` `self-hosted` `api-compatible` `open-source`
  </details>
- **[Tabby](https://github.com/tabbyml/tabby)** `⭐ 33.9k` `updated ≤180d` Tabby is a self-hosted, open-source AI coding assistant that runs locally or on-premises to provide code completion and chat capabilities similar to GitHub Copilot. <details><summary>More about</summary>

  It allows teams to run AI-assisted coding entirely within their own infrastructure, supporting consumer-grade GPUs and integrating directly into IDEs without relying on third-party cloud services.

  _Finally, you can spend three days configuring a self-hosted inference stack just to recreate the experience of typing half a line of code before the model suggests the other half._

  `self-hosted` `coding-assistant` `local-ai` `ide-integration` `on-premises`
  </details>
- **[clip-as-service](https://github.com/jina-ai/clip-as-service)** `⭐ 12.8k` `updated >1y` clip-as-service is a scalable inference service for generating multimodal embeddings using the CLIP model for images and text. <details><summary>More about</summary>

  It enables developers to perform cross-modal retrieval, image-to-text search, and semantic similarity at scale without managing model serving infrastructure.

  _Yet another embedding microservice to Docker-compose into your stack, promising vector search utopia while silently adding latency and ops tax._

  `embeddings` `clip` `multimodal` `serving` `search`
  </details>
- **[OpenLLM](https://github.com/bentoml/openllm)** `⭐ 12.6k` `updated ≤30d` A tool to run any open-source LLM as an OpenAI-compatible API endpoint, with support for cloud deployment. <details><summary>More about</summary>

  Developers can self-host and serve state-of-the-art open models (Llama, Mistral, Qwen, etc.) with a single command, enabling local or cloud-based inference without vendor lock-in.

  _Finally, a way to spin up a Llama server without pretending you understand CUDA memory allocation._

  `llm-serving` `openai-compatible` `self-hosting` `bentoml` `inference`
  </details>
- **[inference](https://github.com/xorbitsai/inference)** `⭐ 9.6k` `updated ≤90d` Xorbits Inference (Xinference) is a unified model serving library that enables deploying and serving open-source LLMs, speech, and multimodal models via a single API across cloud, on-prem, or local environments. <details><summary>More about</summary>

  It simplifies model deployment by abstracting infrastructure complexity, letting developers swap LLMs with a single line of code while supporting advanced serving features like auto-batching and distributed inference.

  _Yet another 'one line to rule them all' serving layer that promises portability but still leaves you wrestling with GPU memory, quantization trade-offs, and the quiet dread of cold-start latency in production._

  `model-serving` `llm-inference` `open-source` `api` `deployment`
  </details>
- **[Shimmy](https://github.com/michael-a-kuykendall/shimmy)** `⭐ 5.9k` `updated ≤90d` Shimmy is a single-binary OpenAI-compatible inference server for GGUF models running on WebGPU with no Python or llama.cpp dependencies. <details><summary>More about</summary>

  It lets developers run local LLMs with zero configuration using existing OpenAI SDKs and tools, preserving privacy and avoiding API costs.

  _Yet another locally-hosted inference server that promises drop-in compatibility, adding to the ever-growing list of 'just point your client here' tools that all require slightly different model formats._

  `local-ai` `inference-server` `openai-compatible` `gguf` `webgpu`
  </details>
- **[Rapid-MLX](https://github.com/raullenchai/rapid-mlx)** `⭐ 3.9k` `updated ≤90d` A local inference engine for Apple Silicon that serves models via an OpenAI-compatible API, optimized for speed and tool calling to work with coding assistants like Claude Code and Cursor. <details><summary>More about</summary>

  It allows developers on Mac to run frontier-sized models locally with minimal latency, enabling private, cost-free usage of tool-calling workflows inside their existing editors.

  _Another Tuesday, another drop-in replacement for OpenAI that turns your Mac into a space heater so you can debug a 4B parameter model's failure to close a div._

  `local-ai` `apple-silicon` `mlx` `openai-api` `tool-calling`
  </details>
- **[Infinity](https://github.com/michaelfeil/infinity)** `⭐ 2.9k` `updated ≤1y` Infinity is a high-throughput, low-latency REST API for serving text-embeddings, reranking, and multimodal models from HuggingFace. <details><summary>More about</summary>

  It lets developers deploy embedding and reranking models with minimal setup, enabling fast semantic search and retrieval in AI applications.

  _Yet another model serving API that makes you wonder if we really needed yet another way to serve BERT variants over HTTP._

  `model-serving` `embeddings` `inference-api`
  </details>
- **[ggml-org/llama-macos](https://github.com/ggml-org/llama-macos)** `⭐ 1.5k` `updated ≤30d` A macOS menu bar application for running local LLMs via a background server. <details><summary>More about</summary>

  It provides a zero-config way to host an OpenAI-compatible API locally, enabling developers to plug local models into VS Code, Zed, and CLI agents without managing manual server setups.

  _The joy of discovering that your 'lightweight' menu bar app is actually just a very polite wrapper for the 12GB of RAM your local model is currently eating._

  `inference-server` `llama-cpp` `local-llm` `macos` `openai-api` `openai-compatible` `self-hosted`
  </details>
- **[OpenModelZ](https://github.com/tensorchord/openmodelz)** `⭐ 284` `updated >1y` Autoscale LLM (vLLM, SGLang, LMDeploy) inferences on Kubernetes (and others).
- **[Modelz-LLM](https://github.com/tensorchord/modelz-llm)** `⭐ 274` `updated >1y` An OpenAI-compatible API server for running self-hosted open-source LLMs like LLaMA and ChatGLM locally or in the cloud. <details><summary>More about</summary>

  It lets developers swap OpenAI's hosted API for a local or self-managed inference endpoint without changing their existing SDK or LangChain code.

  _Another valiant attempt to let you host your own 'private' GPT while quietly praying your inference latency doesn't make the terminal feel like it's running on a potato._

  `local-ai` `inference` `openai-compatible` `self-hosted` `llm-serving`
  </details>
- **[donvito/ai-backends](https://github.com/donvito/ai-backends)** `⭐ 146` `updated ≤30d` API server runtime for common AI use cases — supports multiple models and providers. Run locally with Ollama or LM Studio, or in the cloud via OpenRouter, OpenAI, Anthropic, or Google.
- **[Shell-Pilot](https://github.com/reid41/shell-pilot)** `⭐ 118` `updated >1y` A pure shell script that lets developers interact with OpenAI, Ollama, Mistral, Anthropic, and other LLMs directly from the terminal to generate and run commands, manage system tasks, and maintain chat context without external dependencies. <details><summary>More about</summary>

  It gives developers a zero-dependency, local-first CLI bridge to multiple LLM providers for on-terminal command generation, system management, and interactive coding chat.

  _Another proud monument to the modern developer condition: writing a 200-line shell script with jq just to avoid leaving the terminal to ask an AI what the grep flags do._

  `cli` `local-ai` `shell` `llm` `terminal`
  </details>
- **[openagentemail/openagentemail](https://github.com/openagentemail/openagentemail)** `⭐ 47` openagentemail/openagentemail - Self-hosted email for AI agents: unlimited mailboxes on your own domain with a single docker compose up. OTP and verification-link extraction built in, long-poll mail_wait_for, read/unread state, plus a web dashboard for humans. Install with npx -y @openagentemail/mcp.
- **[AI-Mask](https://github.com/pacwoodson/ai-mask)** `⭐ 32` `updated >1y` A Chrome extension that acts as a local AI inference provider, caching models once in the browser and serving them to compatible web apps via an SDK. <details><summary>More about</summary>

  It lets developers build web apps with free, private, on-device inference while avoiding repeated multi-gigabyte model downloads per domain.

  _We've successfully reinvented the GPU driver layer as a Chrome extension so we can argue about model cache partitions instead of just running Ollama._

  `local-ai` `chrome-extension` `webgpu` `inference` `sdk`
  </details>
- **[OpenCSG](https://opencsg.com)** OpenCSG is a hybrid Hugging Face–style platform offering CSGHub for enterprise open-source model hosting and CSGShip for AgenticOps intelligent agent construction. <details><summary>More about</summary>

  It provides infrastructure for developers to self-host model ecosystems and build agent workflows without relying on proprietary cloud platforms.

  _Another ‘open alternative’ to Hugging Face that forces you to evaluate whether yet another platform lock-in is worth avoiding the original lock-in._

  `agent-ops` `model-hosting` `enterprise-ai`
  </details>

## Desktop Chat & UIs

- **[Open WebUI](https://github.com/open-webui/open-webui)** `⭐ 153.8k` `updated ≤90d` Open WebUI is a self-hosted, extensible web interface for interacting with local LLMs via Ollama or OpenAI-compatible APIs, featuring built-in RAG, Python function calling, and multi-model chat. <details><summary>More about</summary>

  It provides developers with a private, full-featured local chat UI and tooling surface that supports custom model creation, document ingestion, and extensible Python functions without relying on external cloud services.

  _One more self-hosted UI to maintain, secure, and explain to your team, just in case you needed another yak to shave before you actually write code._

  `self-hosted` `local-ai` `webui` `rag` `ollama`
  </details>
- **[gpt4all](https://github.com/nomic-ai/gpt4all)** `⭐ 77.4k` `updated >1y` GPT4All is an open-source desktop application and Python client for running local LLMs privately on everyday laptops and desktops without API calls or GPUs. <details><summary>More about</summary>

  It provides developers with a straightforward way to run and experiment with local models via a desktop UI or an OpenAI-compatible API endpoint for local-first development.

  _Yet another 'run LLMs locally' marvel that will sit installed on your machine, quietly consuming 5GB of disk space while you continue to burn tokens on a hosted API because the RAM crunch is too real._

  `local-ai` `llm-inference` `offline` `desktop`
  </details>
- **[Anything LLM](https://github.com/mintplex-labs/anything-llm)** `⭐ 66.7k` `updated ≤90d` AnythingLLM is an all-in-one local-first AI application for private document chatting, agent workflows, and multi-user LLM interaction with minimal setup. <details><summary>More about</summary>

  It lets developers run a self-hosted, privacy-preserving AI stack for document RAG and agent automation without managing infrastructure complexity.

  _Yet another 'private ChatGPT' wrapper that quietly hopes you don’t notice it’s just LangChain + a nice Electron shell._

  `local-ai` `rag` `ai-agents` `self-hosted`
  </details>
- **[NanoChat](https://github.com/karpathy/nanochat)** `⭐ 58.4k` `updated ≤90d` A local, lightweight chatbot implementation described as 'The best ChatGPT that $100 can buy.'. <details><summary>More about</summary>

  Offers developers a cost-effective, self-contained alternative to cloud-based chat assistants for experimentation or local use.

  _Now you can argue with your own GPU instead of OpenAI’s servers._

  `local-ai` `chatbot` `cost-effective` `self-hosted`
  </details>
- **[textgen](https://github.com/oobabooga/textgen)** `⭐ 47.7k` `updated ≤180d` An open-source desktop application for running local LLMs with support for text, vision, tool-calling, and OpenAI/Anthropic-compatible APIs. <details><summary>More about</summary>

  It provides developers with a private, drop-in API server and UI to run and test models locally without telemetry or cloud dependencies.

  _Nothing says 'I am optimizing my token spend' quite like downloading 40GB of weights just to see if a 7B model can debug a missing semicolon._

  `local-ai` `llm` `self-hosted` `desktop-app` `api`
  </details>
- **[LibreChat](https://github.com/librechat-ai/librechat)** `⭐ 45.2k` LibreChat Open-source AI Web UI, supporting multiple providers including OpenAI, Anthropic, Google, Ollama, and local models. Includes MCP support for Agents.
- **[Jan](https://github.com/janhq/jan)** `⭐ 44.8k` `updated ≤90d` Jan is an open-source, offline-first desktop application for running and interacting with LLMs locally or via cloud providers. <details><summary>More about</summary>

  Developers can run, fine-tune, and deploy LLMs on their own hardware with full privacy control, or integrate with cloud models via a unified interface.

  _Finally, a way to run LLMs locally without your laptop sounding like a jet engine—until you actually try it._

  `local-ai` `desktop-app` `llm-runtime` `offline-first` `open-source`
  </details>
- **[Local GPT](https://github.com/promtengineer/localgpt)** `⭐ 22.2k` `updated ≤90d` A local, privacy-focused document intelligence platform that lets you chat with your files using on-device LLMs and a modular RAG pipeline with hybrid search. <details><summary>More about</summary>

  It gives developers a self-contained way to index, retrieve, and query private documents via API or UI without sending data to external inference providers.

  _Now you can run a full hybrid-search RAG stack on your laptop and still find a way to blame the context window when the answer is mediocre._

  `local-ai` `rag` `private` `documents` `ollama`
  </details>
- **[QAnything](https://github.com/netease-youdao/qanything)** `⭐ 14.2k` `updated >1y` QAnything is a local, self-hosted knowledge base question-answering system that ingests files and web links to provide offline document retrieval and Q&A. <details><summary>More about</summary>

  Developers can deploy it locally to index technical documentation, codebases, and internal knowledge without sending data to external LLM APIs.

  _Finally, a way to ask your 400-page PDF specifications questions, while quietly wondering if the real RAG was the context tokens we burned along the way._

  `rag` `local-ai` `knowledge-base` `document-qa`
  </details>
- **[enchanted](https://github.com/gluonfield/enchanted)** `⭐ 6k` `updated ≤90d` Enchanted is an open-source iOS/macOS/visionOS app for chatting with private, self-hosted language models via Ollama. <details><summary>More about</summary>

  It provides a native, privacy-first chat interface for developers running local LLMs, bridging the gap between on-device inference and a polished user experience.

  _Finally, a way to talk to your locally hosted Llama without feeling like you're debugging a terminal in 2012._

  `local-ai` `ios` `macos` `ollama` `chat-interface`
  </details>
- **[Chat-ollama](https://github.com/sugarforever/chat-ollama)** `⭐ 3.5k` `updated ≤180d` ChatOllama is a self-hosted, Nuxt 3-based AI chatbot platform that supports local models via Ollama as well as major providers, featuring RAG knowledge bases, realtime voice chat, and MCP integration for agent tooling. <details><summary>More about</summary>

  It gives developers a private, Docker-deployable chat surface to run local and cloud models with RAG, voice, and agent workflows without sending data to hosted SaaS.

  _Yet another local chat UI so you can run a private LLM stack that you will mostly use to ask why your private LLM stack is so complicated._

  `local-ai` `chatbot` `self-hosted` `mcp` `rag`
  </details>
- **[llm-as-chatbot](https://github.com/deep-diver/llm-as-chatbot)** `⭐ 3.3k` `updated >1y` A service framework for running open-source instruction-following LLMs as chatbots via Gradio or Discord. <details><summary>More about</summary>

  Lets developers quickly spin up interactive chatbot UIs for any supported open-source LLM without building the serving layer from scratch.

  _Because nothing says 'production-ready' like a Gradio app with a Serper API key taped to the side._

  `llm-serving` `gradio` `discord-bot` `local-ai`
  </details>
- **[graphrag-local-ui](https://github.com/severian42/graphrag-local-ui)** `⭐ 2.3k` `updated >1y` A local-first GraphRAG suite combining a FastAPI backend with Gradio UIs for indexing, prompt tuning, querying, and visualizing knowledge graphs using local LLMs like Ollama. <details><summary>More about</summary>

  Enables developers to experiment with Microsoft's GraphRAG patterns on self-hosted hardware without incurring cloud API costs or compromising data privacy.

  _You can now visualize your local knowledge graph in 3D while spending forty-five minutes configuring an embedding proxy that you definitely won't remember how to restart next week._

  `graphrag` `local-llm` `rag` `knowledge-graph` `ollama`
  </details>
- **[LLMFarm](https://github.com/guinmoon/llmfarm)** `⭐ 2.1k` `updated ≤1y` An iOS and macOS app for running and testing various large language models offline using the GGML library. <details><summary>More about</summary>

  Developers can locally test and compare multiple LLMs on Apple devices without relying on cloud APIs.

  _Finally, a way to run LLMs on your MacBook Pro—just in time for your battery to last 15 minutes._

  `local-ai` `ios` `macos` `ggml` `offline-inference`
  </details>
- **[chat-with-mlx](https://github.com/qnguyen3/chat-with-mlx)** `⭐ 1.6k` `updated >1y` A Python-based local chat UI for running and interacting with open-source LLMs directly on Apple Silicon Macs using the MLX framework. <details><summary>More about</summary>

  Developers on Apple Silicon can test and iterate against models like Llama 3 and Codestral locally without cloud costs or privacy compromises.

  _Now you can run a model that writes code slower than you do, but at least it’s failing privately on your own hardware._

  `local-ai` `apple-silicon` `mlx` `chat-ui` `privacy`
  </details>
- **[LlamaChat](https://github.com/alexrozanski/llamachat)** `⭐ 1.5k` `updated ≤180d` A native macOS app for chatting with LLaMA, Alpaca, and GPT4All models locally on your Mac. <details><summary>More about</summary>

  Lets developers run and interact with local LLMs without cloud dependencies or browser overhead.

  _Because nothing says 'productivity' like waiting for a 13B model to finish a sentence on your M1._

  `macos` `local-ai` `llama` `desktop-chat` `llama-cpp`
  </details>
- **[akshayaggarwal99/jarvis-ai-assistant](https://github.com/akshayaggarwal99/jarvis-ai-assistant)** `⭐ 642` `updated ≤90d` A voice-powered macOS assistant that enables local-first dictation and text manipulation using Whisper and Ollama. <details><summary>More about</summary>

  It provides a privacy-focused, subscription-free alternative to commercial dictation tools by allowing developers to run transcription and LLM processing entirely on their own hardware.

  _Because typing is now apparently a legacy workflow that needs to be replaced by the friction of speaking to your machine._

  `macos` `voice-ai` `local-llm` `dictation` `open-source`
  </details>
- **[QA-Pilot](https://github.com/reid41/qa-pilot)** `⭐ 328` `updated >1y` QA-Pilot is a self-hosted, interactive chat interface that lets developers converse with and navigate local or remote GitHub code repositories using a variety of online and local LLMs. <details><summary>More about</summary>

  It offers a local-first workflow for rapidly understanding unfamiliar codebases via conversation, supporting a wide range of LLM providers without sending proprietary code to hosted services.

  _Yet another local chat app promising deep code understanding, which is ironic given the author explicitly warns users not to use it on private or production codebases._

  `local-ai` `code-navigation` `chat-interface` `repo-analysis` `self-hosted`
  </details>
- **[Repochat](https://github.com/pnkvalavala/repochat)** `⭐ 318` `updated >1y` A local-first Streamlit chatbot that clones GitHub repositories, embeds code with Sentence Transformers, and answers questions about the codebase using a local LLM via Retrieval Augmented Generation. <details><summary>More about</summary>

  It lets developers run a private, offline Q&A interface over any GitHub repo without sending proprietary code to external APIs.

  _Yet another reminder that while agents are learning to write entire repos, we are still building bespoke chat interfaces to simply ask them what the code we just cloned actually does._

  `rag` `local-llm` `repo-chat` `streamlit` `langchain`
  </details>
- **[Jev Voice](https://github.com/kevinbadi/jev-voice)** `⭐ 107` jev-voice - Talk to your Mac. Local whisper.cpp + one Jev (TypeSafe) call per command + macOS automation.
- **[LoLLMS](https://github.com/parisneo/lollms)** `⭐ 98` `updated ≤90d` A self-hosted, multi-user chat platform with a Vue frontend and FastAPI backend that integrates with various LLM backends and includes built-in RAG, personality management, and user collaboration features. <details><summary>More about</summary>

  It provides a local-first, privacy-preserving alternative to hosted chat platforms with deep integration into multiple LLM services and extensible document retrieval.

  _Yet another 'one tool to rule them all' that promises to unify the AI ecosystem while adding a friend system to the one place developers go to avoid notifications._

  `local-ai` `self-hosted` `chat-interface` `rag` `multi-user`
  </details>
- **[miaowunya/rikkahub-sillytavern-android](https://github.com/miaowunya/rikkahub-sillytavern-android)** `⭐ 66` RikkaHub Plus Huadeng Edition - Android AI chat client & SillyTavern Android tavern compatibility. Connected to API instant chat: prefix cache to save token, semantic memory RAG, Jev intelligent decision-making, QuickJS plug-in, voice call, WeChat QQ Bot; character card, world book Lorebook, default, regular, QR, beautification theme can be imported with one click according to the official semantics of the tavern, without Termux/Node.js.
- **[DSH Studio](https://github.com/moresyl/dsh-studio)** `⭐ 60` DSH Studio – Open-source cross-platform desktop host for installing, running, health-checking, and supervising DeepSeek Harness locally.
- **[Taskyon](https://github.com/xyntopia/taskyon)** `⭐ 56` `updated ≤90d` Taskyon is a browser-based chat and agent interface that organizes AI interactions into dynamic task trees with local-first execution and tool extensibility. <details><summary>More about</summary>

  It offers developers a flexible, local-first workflow for building personalized AI agents that can write their own tools and integrate with web apps via a simple snippet.

  _Finally, an AI tool that promises to replace apps with task trees—because we definitely needed another way to over-engineer our to-do lists._

  `local-first` `task-management` `ai-agent` `browser-based` `mcp`
  </details>
- **[OpenQuack](https://github.com/larryxiao/openquack)** `⭐ 51` OpenQuack – Local voice dictation menu bar app for macOS that pairs with Cursor, Claude Code, Codex, and Aider; long contextual prompts via WhisperKit on Apple Silicon, pastes at the cursor, all on-device.
- **[baiyuscc13724-max/deepseek-harness-desktop](https://github.com/baiyuscc13724-max/deepseek-harness-desktop)** `⭐ 11` `updated ≤30d` DeepSeek Harness 中文 Windows 桌面版：女仆鲸桌宠、主题、插件市场、模型路由与安全更新。.
- **[amanadhav/traderai](https://github.com/amanadhav/traderai)** `⭐ 4` `updated ≤30d` Self-hosted AI trading intelligence platform - scoring engine, two-model AI analyst (Claude + TypeSafe Jev), risk engine, discipline guardian, backtester, React dashboard.
- **[ollama_agent_roll_cage](https://github.com/leoleojames1/ollama_agent_roll_cage)** `⭐ 0` 35. OARC: ollama_agent_roll_cage (OARC) is a local python agent fusing ollama llm's with Coqui-TTS speech models, Keras classifiers, Llava vision, Whisper recognition, and more to create a unified chatbot agent for local, custom automation.
- **[Bodega One Code](https://bodegaone.ai)** Bodega One Code – Free, local-first AI IDE with a built-in coding agent, bring-your-own-LLM, and full offline/air-gap support.
- **[FuLLMetalAi](https://fullmetal.ai)** FuLLMetalAi is a local AI inference UI listed in the awesome-local-ai directory under Inference UI. <details><summary>More about</summary>

  It provides a desktop interface for running local AI models, helping developers experiment with offline LLMs without relying on cloud APIs.

  _Another local chat UI promising privacy while silently hoping you’ll actually quantize your 70B model on a laptop._

  `local-ai` `desktop-ui` `inference`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+6 more in Desktop Chat & UIs &nbsp;—&nbsp; click to expand</strong></summary>

- **[GPT4All](https://nomic.ai/gpt4all)** GPT4All is a desktop application that runs open-source language models locally on Windows, macOS, and Linux for private, offline AI chat and document interaction.
- **[LibreChat](https://www.librechat.ai)** An open-source, self-hostable platform that provides a unified interface for multiple AI models, agents, and tools.
- **[Naut](https://ruliad.co)** Ruliad Chat is a self-sovereign intelligence chat interface.
- **[NVIDIA ChatRTX](https://nvidia.com/en-us/ai-on-rtx)** NVIDIA ChatRTX is a desktop AI assistant that runs locally on RTX PCs to answer questions using personal documents and data.
- **[Try app](https://ai.quantdinger.com)** QuantDinger - Open source · Free source build · BYOK. Self-hosted AI trading OS with optional TypeSafe Jev pre-trade entry gates; hosted app also available. Product · Try app · Project guide.
- **[Whisper by Remskill](https://whisper.remskill.com)** Whisper by Remskill – Local-first desktop voice-to-text (Windows & macOS) for hands-free dictation of code comments, commit messages, docs, and AI prompts into any editor; runs fully offline with local Whisper/Parakeet models or via OpenAI cloud. Free local tier.

</details>

## Fine-tuning & Training

- **[unsloth](https://github.com/unslothai/unsloth)** `⭐ 77.1k` `updated ≤90d` Unsloth Studio is a self-hosted web UI for running and fine-tuning open LLMs locally with optimized training performance. <details><summary>More about</summary>

  It lets developers train and deploy models on their own hardware with significantly reduced VRAM usage and faster iteration cycles.

  _Another local AI UI promising to make model training feel less like begging for GPU time on a shared cluster._

  `local-ai` `fine-tuning` `llm` `self-hosted`
  </details>
- **[chatglm-6b](https://github.com/zai-org/chatglm-6b)** `⭐ 40.9k` `updated >1y` ChatGLM-6B is an open-source bilingual dialogue language model with 6.2B parameters for local deployment and fine-tuning. <details><summary>More about</summary>

  It lets developers run and customize a capable LLM locally on modest hardware for research or application building.

  _Another model repo that makes you feel guilty for not quantizing it and running llama.cpp instead._

  `local-ai` `llm` `open-source`
  </details>
- **[axolotl](https://github.com/axolotl-ai-cloud/axolotl)** `⭐ 12.5k` `updated ≤30d` An open-source framework designed for fine-tuning large language models. <details><summary>More about</summary>

  It provides a standardized, highly configurable way for developers to train custom model weights using various optimization techniques like LoRA and DPO.

  _Another layer of abstraction to manage before you realize your GPU VRAM is still crying._

  `fine-tuning` `llm` `training` `open-source` `lora`
  </details>
- **[Soup](https://github.com/makazhanalpamys/soup)** `⭐ 8k` 53. Soup: One-config CLI for LLM post-training (SFT/DPO/GRPO/KTO/ORPO). Layer streaming trains an 8B model on a 4 GB laptop GPU by streaming the frozen base from host RAM one decoder layer at a time.
- **[MLX-VLM](https://github.com/blaizzy/mlx-vlm)** `⭐ 5.6k` `updated ≤30d` MLX-VLM is a package for inference and fine-tuning of Vision Language Models on Mac using MLX. <details><summary>More about</summary>

  It enables developers to run and customize multimodal models locally on Apple Silicon without cloud dependencies.

  _Another local AI tool promising privacy while you wrestle with quantization scripts and batch size tuning._

  `local-ai` `vision-language-model` `fine-tuning`
  </details>
- **[H2O-LLMStudio](https://github.com/h2oai/h2o-llmstudio)** `⭐ 5.2k` `updated ≤30d` A framework and no-code GUI for fine-tuning large language models using techniques like LoRA, DPO, and 8-bit training. <details><summary>More about</summary>

  It democratizes the fine-tuning process by providing a visual interface to manage hyperparameters and evaluate model performance without writing custom training loops.

  _The dream of 'no-code' fine-tuning just means you can now break your model's weights via a slider instead of a misplaced comma in a Python script._

  `fine-tuning` `lora` `no-code` `llm-ops` `dpo`
  </details>
- **[xTuring](https://github.com/stochasticai/xturing)** `⭐ 2.7k` `updated ≤1y` A Python library and CLI for fine-tuning, evaluating, and running open-source LLMs locally or in a private cloud using techniques like LoRA and INT4/INT8 quantization. <details><summary>More about</summary>

  It provides a simplified API to personalize models like LLaMA and GPT-OSS on private infrastructure, abstracting away the boilerplate of PEFT and mixed-precision training.

  _Just when you thought you escaped cloud API costs, you now have a 120B model running locally that demands a mortgage-level investment in GPUs to fine-tune._

  `llm` `fine-tuning` `local-ai` `lora` `quantization`
  </details>
- **[Smol Vision](https://github.com/merveenoyan/smol-vision)** `⭐ 2k` `updated ≤180d` Recipes for shrinking, optimizing, customizing cutting edge vision models. <details><summary>More about</summary>

  Helps developers deploy vision models more efficiently by reducing size and improving performance.

  _Another model optimization guide that promises 'cutting edge' results while you wait for your GPU to finish quantization._

  `vision` `optimization` `model-compression`
  </details>
- **[Skills](https://github.com/nvidia-nemo/skills)** `⭐ 1k` `updated ≤90d` Nemo Skills is a pipeline toolkit for improving LLM capabilities via synthetic data generation, model training, and large-scale benchmark evaluation. <details><summary>More about</summary>

  It gives developers a unified, scalable path from local workstation experiments to Slurm clusters for fine-tuning and evaluating models on benchmarks like SWE-bench and AIME.

  _Nothing says 'improving LLM skills' quite like needing a ten-thousand-GPU cluster to prove your model can still fail at high-school math._

  `llm-training` `evaluation` `synthetic-data` `nvidia` `benchmarks`
  </details>
- **[finetune-Qwen2-VL](https://github.com/zhangfaen/finetune-qwen2-vl)** `⭐ 395` `updated >1y` A GitHub repository providing fine-tuning scripts for Qwen2-VL vision-language models with single and multi-GPU support. <details><summary>More about</summary>

  It lowers the barrier for developers to adapt Qwen2-VL models to custom data without relying on heavy frameworks like LLaMA-Factory.

  _Another fine-tuning script that makes you feel productive until you realize you still need to curate your own dataset and wait for convergence._

  `fine-tuning` `vision-language` `qwen2-vl` `pytorch` `multi-gpu`
  </details>
- **[lmms-finetune](https://github.com/zjysteven/lmms-finetune)** `⭐ 376` `updated ≤1y` A minimal codebase for finetuning large multimodal models, supporting llava-1.5/1.6, llava-interleave, llava-next-video, llava-onevision, llama-3.2-vision, qwen-vl, qwen2-vl, phi3-v etc.
- **[Axolotl](http://docs.axolotl.ai)** Axolotl is a free and open-source framework for post-training and fine-tuning large language models. <details><summary>More about</summary>

  It enables developers to customize and optimize LLMs for specific tasks using flexible configuration and advanced training methods.

  _The promise of fine-tuning state-of-the-art models in minutes clashes with the reality of GPU requirements, complex YAML configs, and the constant churn of new model support._

  `llm` `fine-tuning` `open-source`
  </details>
- **[Gemma](https://kaggle.com/models/google/gemma)** Gemma is a family of lightweight, open language models released by Google via Kaggle Models. <details><summary>More about</summary>

  Provides developers with accessible, compact models for local fine-tuning and inference without relying on proprietary APIs.

  _Another model drop that promises efficiency but still requires you to wrestle with quantization and VRAM limits to run locally._

  `open-model` `local-ai` `google`
  </details>