# Local AI

Local runtimes, desktop apps, and tooling for running AI on your own hardware.

## Tools & Resources

- **[Ollama](https://github.com/ollama/ollama)** `⭐ 170.9k` `updated ≤90d` Ollama is a local runtime and serving stack for downloading, running, and managing open-weight LLMs via a simple CLI and REST API on macOS, Windows, Linux, and Docker. <details><summary>More about</summary>

  It gives developers a one-command way to run private, local models and wire them into coding agents like Claude Code, Codex, and Copilot CLI without sending code to external APIs.

  _You now have 170,000 stars worth of justification to run a 70B model locally, immediately discovering that your laptop was never the bottleneck, your prompts were._

  `local-ai` `llm` `cli` `self-hosted` `inference`
  </details>

- **[stable-diffusion-webui](https://github.com/automatic1111/stable-diffusion-webui)** `⭐ 163.9k` `updated ≤180d` A locally run Gradio web interface for Stable Diffusion that provides txt2img, img2img, inpainting, and model training capabilities. <details><summary>More about</summary>

  It allows developers to run, customize, and extend state-of-the-art image generation models entirely on their own hardware with a feature-rich UI and API.

  _A rite of passage where developers convince themselves they are 'doing ML engineering' while spending four hours tweaking 'txt2img' parameters to generate anime tuxedos._

  `stable-diffusion` `local-ai` `image-generation` `gradio` `web-ui`
  </details>

- **[Open WebUI](https://github.com/open-webui/open-webui)** `⭐ 135.8k` `updated ≤90d` Open WebUI is a self-hosted, extensible web interface for interacting with local LLMs via Ollama or OpenAI-compatible APIs, featuring built-in RAG, Python function calling, and multi-model chat. <details><summary>More about</summary>

  It provides developers with a private, full-featured local chat UI and tooling surface that supports custom model creation, document ingestion, and extensible Python functions without relying on external cloud services.

  _One more self-hosted UI to maintain, secure, and explain to your team, just in case you needed another yak to shave before you actually write code._

  `self-hosted` `local-ai` `webui` `rag` `ollama`
  </details>

- **[ComfyUI](https://github.com/comfy-org/comfyui)** `⭐ 118.7k` `updated ≤30d` A modular, node-based GUI and API for running and chaining diffusion models locally to generate images, video, 3D assets, and audio. <details><summary>More about</summary>

  It gives developers a programmable, API-driven local runtime to build generative media pipelines without relying on hosted image or video services.

  _You will spend three hours building the perfect node graph to generate a single profile picture and tell yourself this is definitely faster than writing code._

  `local-ai` `diffusion` `node-graph` `media-pipelines` `comfyui`
  </details>

- **[llama.cpp](https://github.com/ggml-org/llama.cpp)** `⭐ 118k` `updated ≤30d` A C/C++ implementation for running LLM inference locally, focused on enabling efficient execution of models on consumer hardware. <details><summary>More about</summary>

  It provides the foundational runtime that allows developers to run powerful language models privately on their own machines without relying on cloud APIs.

  _You will spend an evening quantizing a model down to 3 bits just to watch it hallucinate at 12 tokens per second while convincing yourself this is definitely 'production ready'._

  `local-ai` `inference` `cpp` `gguf` `llm`
  </details>

- **[vLLM](https://github.com/vllm-project/vllm)** `⭐ 79.8k` `updated ≤90d` vLLM is a high-throughput, memory-efficient inference and serving engine for large language models with PagedAttention and CUDA/HIP graph optimizations. <details><summary>More about</summary>

  It enables fast, scalable, and cost-effective deployment of LLMs for developers building AI-powered applications and services.

  _Finally, a serving layer that doesn't make you choose between bankrupting your cloud bill or waiting 30 seconds for a single token._

  `llm-serving` `inference` `pagedattention`
  </details>

- **[gpt4all](https://github.com/nomic-ai/gpt4all)** `⭐ 77.4k` `updated >1y` GPT4All is an open-source desktop application and Python client for running local LLMs privately on everyday laptops and desktops without API calls or GPUs. <details><summary>More about</summary>

  It provides developers with a straightforward way to run and experiment with local models via a desktop UI or an OpenAI-compatible API endpoint for local-first development.

  _Yet another 'run LLMs locally' marvel that will sit installed on your machine, quietly consuming 5GB of disk space while you continue to burn tokens on a hosted API because the RAM crunch is too real._

  `local-ai` `llm-inference` `offline` `desktop`
  </details>

- **[unsloth (`🔥`)](https://github.com/unslothai/unsloth)** `⭐ 64.1k` `updated ≤90d` Unsloth Studio is a self-hosted web UI for running and fine-tuning open LLMs locally with optimized training performance. <details><summary>More about</summary>

  It lets developers train and deploy models on their own hardware with significantly reduced VRAM usage and faster iteration cycles.

  _Another local AI UI promising to make model training feel less like begging for GPU time on a shared cluster._

  `local-ai` `fine-tuning` `llm` `self-hosted`
  </details>

- **[Anything LLM](https://github.com/mintplex-labs/anything-llm)** `⭐ 59.6k` `updated ≤90d` AnythingLLM is a self-hosted, privacy-focused desktop and server application that lets developers chat with local or cloud LLMs over their own documents using built-in RAG pipelines, vector databases, and configurable AI agents. <details><summary>More about</summary>

  It gives developers a private, all-in-one local workspace for document-grounded chat and lightweight agent workflows without wiring together separate LLM, embedding, and vector stores.

  _Yet another miracle app promising to be your private ChatGPT, assuming you have miraculously solved the local model, RAM, and prompt-wrangling treadmill already._

  `local-ai` `rag` `llm` `self-hosted` `agents`
  </details>

- **[whisper.cpp](https://github.com/ggml-org/whisper.cpp)** `⭐ 51k` `updated ≤30d` A plain C/C++ port of OpenAI's Whisper speech recognition model optimized for high-performance, cross-platform, and on-device inference. <details><summary>More about</summary>

  It provides developers with a lightweight, dependency-free runtime to integrate offline speech-to-text capabilities into applications across platforms like iOS, Android, and WebAssembly.

  _Yet another reminder that while your coding agent struggles to center a div, a 75 MiB model on a Raspberry Pi can transcribe human speech faster than you can dictate a Jira ticket._

  `speech-to-text` `local-inference` `cpp` `offline` `whisper`
  </details>

- **[Cherry Studio (`🔥`)](https://github.com/cherryhq/cherry-studio)** `⭐ 47.9k` `updated ≤30d` Cherry Studio is a cross-platform desktop client that provides a unified interface for chatting with and managing multiple LLM providers, local models, and pre-configured AI assistants. <details><summary>More about</summary>

  It allows developers to centralize access to frontier APIs, local runtimes like Ollama, and 300+ assistants within a single desktop environment.

  _Yet another Electron wrapper promising to unify the AI ecosystem, ensuring you can now context-switch between twelve different LLMs without ever leaving your desktop._

  `desktop-client` `multi-llm` `local-models` `chat-interface`
  </details>

- **[textgen](https://github.com/oobabooga/textgen)** `⭐ 46.9k` `updated ≤90d` An open-source desktop application for running local LLMs with support for text, vision, tool-calling, and OpenAI/Anthropic-compatible APIs. <details><summary>More about</summary>

  It provides developers with a private, drop-in API server and UI to run and test models locally without telemetry or cloud dependencies.

  _Nothing says 'I am optimizing my token spend' quite like downloading 40GB of weights just to see if a 7B model can debug a missing semicolon._

  `local-ai` `llm` `self-hosted` `desktop-app` `api`
  </details>

- **[LocalAI](https://github.com/mudler/localai)** `⭐ 46.1k` `updated ≤90d` LocalAI is an open-source local inference engine that runs LLMs, vision, voice, and image models on any hardware with drop-in OpenAI and Anthropic API compatibility. <details><summary>More about</summary>

  It lets developers run a private, local AI stack that behaves like OpenAI or Anthropic APIs, making it easy to test, build, and deploy without sending data to external providers.

  _Now you can spend your evening debugging llama.cpp backends and GPU layers just to replicate the same API you were already paying for._

  `local-ai` `inference` `self-hosted` `api-compatible` `open-source`
  </details>

- **[Jan](https://github.com/janhq/jan)** `⭐ 43.3k` `updated ≤30d` Jan is an open-source, desktop-based alternative to ChatGPT that runs local LLMs entirely offline on your computer. <details><summary>More about</summary>

  Developers can run, test, and integrate local models via an OpenAI-compatible API and MCP support without sending code or data to the cloud.

  _Another pristine sanctuary of local privacy where you can hoard 70B parameter models that your laptop fans will audibly protest the moment you try to load them._

  `local-ai` `offline` `llm` `desktop` `privacy`
  </details>

- **[chatglm-6b](https://github.com/zai-org/chatglm-6b)** `⭐ 41.1k` `updated >1y` ChatGLM-6B is an open-source bilingual dialogue language model with 6.2B parameters for local deployment and fine-tuning. <details><summary>More about</summary>

  It lets developers run and customize a capable LLM locally on modest hardware for research or application building.

  _Another model repo that makes you feel guilty for not quantizing it and running llama.cpp instead._

  `local-ai` `llm` `open-source`
  </details>

- **[LibreChat](https://github.com/danny-avila/librechat)** `⭐ 40.1k` `updated ≤30d` LibreChat is a self-hosted, open-source AI chat platform that unifies access to models from OpenAI, Anthropic, Google, and local providers, featuring built-in agents, MCP support, code interpretation, and artifact generation. <details><summary>More about</summary>

  It gives developers a single, private interface to experiment with diverse AI backends and build custom no-code agents without being locked into a single vendor's ecosystem.

  _Yet another heroic open-source effort to unify every AI provider into one chat UI, ensuring you can now write Python, generate React components, and hallucinate at scale without ever leaving the browser tab you're hosting on Railway._

  `self-hosted` `chat-ui` `multi-model` `mcp` `agents`
  </details>

- **[FastChat](https://github.com/lm-sys/fastchat)** `⭐ 39.5k` `updated ≤90d` An open-source platform for training, serving, and evaluating large language models, including the infrastructure behind the Vicuna model and Chatbot Arena. <details><summary>More about</summary>

  It provides the core serving infrastructure and evaluation harnesses (like MT-Bench) needed to self-host LLMs or benchmark model performance locally.

  _Finally, a robust platform to train your own open-source chatbot that will definitely outperform GPT-4, assuming you enjoy debugging distributed serving systems more than writing actual application code._

  `llm-serving` `eval-harness` `local-models` `training`
  </details>

- **[Langchain-Chatchat](https://github.com/chatchat-space/langchain-chatchat)** `⭐ 38.2k` `updated ≤1y` Langchain-Chatchat is an open-source, locally deployable RAG and Agent application built on Langchain and local LLMs like ChatGLM, Qwen, and Llama. <details><summary>More about</summary>

  It provides a complete, offline-first solution for Chinese-language developers to build private knowledge bases and agent workflows without relying on external APIs.

  _Yet another 'local ChatGPT' stack proving that while we can run the model offline, the real hallucination is thinking we've solved context management with a vector store and a Streamlit UI._

  `rag` `local-llm` `langchain` `agent` `knowledge-base`
  </details>

- **[SGLang (`🔥`)](https://github.com/sgl-project/sglang)** `⭐ 27.1k` `updated ≤90d` SGLang is a high-performance serving framework for running and scaling large language models and multimodal models locally or in infrastructure. <details><summary>More about</summary>

  It lets developers self-host and serve modern LLMs and VLMs with optimized inference performance across CUDA, TPU, and Blackwell hardware.

  _Yet another carefully tuned inference stack to master while you wait for the one model that finally makes your local GPU stop sounding like a jet engine._

  `llm` `inference` `local-ai` `serving` `multimodal`
  </details>

- **[llamafile](https://github.com/mozilla-ai/llamafile)** `⭐ 24.4k` `updated ≤90d` llamafile packages LLMs and the llama.cpp runtime into a single, dependency-free executable that runs locally on most operating systems and CPU architectures. <details><summary>More about</summary>

  It enables developers to run open-weight models locally with zero setup, making private, offline AI inference trivial to distribute and test against.

  _You now have no excuse not to run a local model, yet somehow still find yourself pasting secrets into a web UI while a 4GB executable sits chmod +x on your desktop._

  `local-ai` `llm` `single-binary` `offline` `inference`
  </details>

- **[Local GPT](https://github.com/promtengineer/localgpt)** `⭐ 22.2k` `updated ≤180d` A local, privacy-focused document intelligence platform that lets you chat with your files using on-device LLMs and a modular RAG pipeline with hybrid search. <details><summary>More about</summary>

  It gives developers a self-contained way to index, retrieve, and query private documents via API or UI without sending data to external inference providers.

  _Now you can run a full hybrid-search RAG stack on your laptop and still find a way to blame the context window when the answer is mediocre._

  `local-ai` `rag` `private` `documents` `ollama`
  </details>

- **[ktransformers](https://github.com/kvcache-ai/ktransformers)** `⭐ 17.4k` `updated ≤30d` A flexible framework for optimizing large language model inference and fine-tuning through CPU-GPU heterogeneous computing. <details><summary>More about</summary>

  It enables running and fine-tuning cutting-edge models like DeepSeek-V3 and Kimi-K2 on consumer-grade hardware by drastically reducing VRAM requirements.

  _You now have the framework to run a 671B parameter model on your 24GB GPU, which is the perfect excuse to avoid actually writing any application code._

  `local-ai` `llm-inference` `fine-tuning` `optimization`
  </details>

- **[AirLLM](https://github.com/lyogavin/airllm)** `⭐ 17.2k` `updated ≤180d` AirLLM is a Python library that optimizes LLM inference memory usage, enabling large models like 70B or 405B Llama to run on low-VRAM hardware (4GB–8GB) without quantization. <details><summary>More about</summary>

  It lets developers experiment with and serve state-of-the-art open-weight models locally on commodity GPUs that would otherwise be unable to load them.

  _Because apparently the only thing standing between you and running a 405B model was a clever memory trick, not your career’s worth of unresolved technical debt._

  `local-ai` `llm-inference` `memory-optimization` `open-models`
  </details>

- **[qwen3-coder](https://github.com/qwenlm/qwen3-coder)** `⭐ 16.5k` `updated ≤180d` Qwen3-Coder is an open-weight language model series from Alibaba's Qwen team, specifically fine-tuned for coding tasks and agentic workflows with support for long contexts up to 1M tokens. <details><summary>More about</summary>

  It offers a powerful, locally-runnable alternative to closed-source models like Claude Sonnet for developers building coding agents or running agentic workflows on their own hardware.

  _Yet another open-weight model drops that inevitably triggers the 'download 480B parameters or settle for the tiny one' existential crisis we all know too well._

  `llm` `coding-model` `local-ai` `qwen` `open-weight`
  </details>

- **[fauxpilot](https://github.com/fauxpilot/fauxpilot)** `⭐ 14.7k` `updated >1y` FauxPilot is a self-hosted inference server that runs local code generation models (like Salesforce CodeGen) behind an API compatible with GitHub Copilot clients. <details><summary>More about</summary>

  It allows developers to run AI code completion locally using their own hardware, offering a privacy-focused alternative to cloud-hosted Copilot without sending code to external servers.

  _Trade your proprietary SaaS subscription for the privilege of debugging Docker containers, CUDA versions, and VRAM constraints just to get the same autocomplete suggestions._

  `local-ai` `self-hosted` `codegen` `copilot-alternative` `nvidia`
  </details>

- **[OpenLLM](https://github.com/bentoml/openllm)** `⭐ 12.4k` `updated ≤30d` OpenLLM is a Python toolkit that runs open-source LLMs like Llama and DeepSeek locally or in the cloud as OpenAI-compatible API endpoints. <details><summary>More about</summary>

  It lets developers self-host and swap between models while keeping an OpenAI-compatible interface that works with existing LlamaIndex, LangChain, and client code.

  _Because nothing says 'focused coding session' like debugging a local llama3.1:8b inference stack in Kubernetes when you just wanted autocomplete._

  `local-ai` `llm-serving` `openai-compatible` `self-hosted`
  </details>

- **[koboldcpp](https://github.com/lostruins/koboldcpp)** `⭐ 10.9k` `updated ≤30d` A self-contained executable that runs GGUF and GGML models locally with an integrated web UI, supporting text, image, video, and audio generation with multiple API compatibility layers. <details><summary>More about</summary>

  It provides a zero-install, cross-platform way for developers to run local LLMs and multimodal models with OpenAI-compatible APIs for testing and integration.

  _Yet another reason to believe your coding assistant's soul lives in a single file on your desktop, provided you can navigate the 10,000 configuration flags first._

  `local-ai` `llm` `gguf` `inference` `openai-api`
  </details>

- **[ChatUI](https://github.com/huggingface/chat-ui)** `⭐ 10.8k` `updated ≤30d` A SvelteKit-based chat interface for LLMs that powers HuggingChat and connects to any OpenAI-compatible API, including local runtimes like Ollama and llama.cpp. <details><summary>More about</summary>

  Developers can self-host a full-featured chat UI to interact with local or cloud models without relying on closed proprietary frontends.

  _Another beautifully engineered excuse to spin up a local model, watch it hallucinate about dependency versions, and call it a productive afternoon._

  `chat-ui` `local-ai` `sveltekit` `self-hosted` `llm-interface`
  </details>

- **[llama-cpp-python](https://github.com/abetlen/llama-cpp-python)** `⭐ 10.5k` `updated ≤30d` Python bindings for llama.cpp that provide low-level C API access, a high-level Python API for text completion, and an OpenAI-compatible local web server. <details><summary>More about</summary>

  It lets developers run GGUF models locally with hardware acceleration and drop-in OpenAI API compatibility for building offline-capable AI workflows.

  _You will spend three hours tuning CMake flags for the perfect BLAS backend so you can run a 7B model locally and feel productive while avoiding actual code review._

  `local-ai` `python` `llama-cpp` `inference` `bindings`
  </details>

- **[petals](https://github.com/bigscience-workshop/petals)** `⭐ 10.3k` `updated >1y` Petals is a PyTorch-based distributed system that runs large language model inference and fine-tuning by splitting model layers across a BitTorrent-style volunteer swarm of GPUs. <details><summary>More about</summary>

  It lets developers run massive models like Llama 3.1 (405B) or Mixtral on consumer hardware by distributing the inference load across a community network with a familiar Transformers API.

  _You can now host a fraction of a 405B model on your RTX 3060 to help a stranger generate three tokens per second, which feels exactly like the distributed computing projects we swore we were done with in 2010._

  `distributed-inference` `local-ai` `volunteer-computing` `pytorch` `llm-serving`
  </details>

- **[inference](https://github.com/xorbitsai/inference)** `⭐ 9.3k` `updated ≤90d` Xorbits Inference (Xinference) is a unified model serving library that enables deploying and serving open-source LLMs, speech, and multimodal models via a single API across cloud, on-prem, or local environments. <details><summary>More about</summary>

  It simplifies model deployment by abstracting infrastructure complexity, letting developers swap LLMs with a single line of code while supporting advanced serving features like auto-batching and distributed inference.

  _Yet another 'one line to rule them all' serving layer that promises portability but still leaves you wrestling with GPU memory, quantization trade-offs, and the quiet dread of cold-start latency in production._

  `model-serving` `llm-inference` `open-source` `api` `deployment`
  </details>

- **[LmDeploy](https://github.com/internlm/lmdeploy)** `⭐ 7.9k` `updated ≤30d` LMDeploy is a toolkit for compressing, deploying, and serving LLMs with optimized inference engines like TurboMind and PyTorch. <details><summary>More about</summary>

  It provides developers with high-performance local inference acceleration, quantization, and serving capabilities for running models like Llama, InternLM, and DeepSeek on their own hardware.

  _Just what the ecosystem needed: another high-performance inference engine to add to the 'which local stack do I cry about today' rotation alongside vLLM and llama.cpp._

  `llm-inference` `local-ai` `quantization` `cuda` `serving`
  </details>

- **[enchanted](https://github.com/gluonfield/enchanted)** `⭐ 6k` `updated ≤30d` Enchanted is an open-source iOS, macOS, and visionOS app that provides a ChatGPT-like interface for interacting with privately hosted Ollama-compatible language models. <details><summary>More about</summary>

  It allows developers in the Apple ecosystem to run inference locally across all their devices with a polished UI, multimodal support, and custom prompt templates without sending data to external clouds.

  _Finally, a way to feel productive while running 7B parameter models on your iPad and wondering why your battery is draining while your laptop fans are screaming in the other room._

  `local-ai` `ollama` `ios` `macos` `swift`
  </details>

- **[LLocalSearch](https://github.com/nilsherzig/llocalsearch)** `⭐ 6k` `updated ≤180d` LLocalSearch is a self-hosted, local-first search assistant that chains local LLMs with web search tools to answer questions without external API keys. <details><summary>More about</summary>

  It lets developers run a privacy-respecting, ad-free research agent entirely on local hardware, avoiding cloud API dependencies and manipulated search rankings.

  _Another locally hosted agent you'll spend three hours setting up, only to realize you still have to chaperone it while it recursively searches the internet on a 300€ GPU._

  `local-ai` `search-agent` `self-hosted` `privacy`
  </details>

- **[GPUStack](https://github.com/gpustack/gpustack)** `⭐ 5.2k` `updated ≤30d` gpustack is a GPU cluster manager that configures and orchestrates inference engines like vLLM and SGLang for high-performance AI model deployment. <details><summary>More about</summary>

  It simplifies scaling LLM serving across heterogeneous GPU hardware, reducing operational overhead for developers deploying production AI workloads.

  _Finally, a way to feel in control of your GPU farm while secretly hoping vLLM doesn't OOM during peak traffic._

  `llm-serving` `gpu-orchestration` `inference`
  </details>

- **[MLX-VLM](https://github.com/blaizzy/mlx-vlm)** `⭐ 5.1k` `updated ≤30d` A Python package for running inference and fine-tuning of vision-language models locally on Apple Silicon Macs using the MLX framework. <details><summary>More about</summary>

  It allows developers on Apple hardware to experiment with and deploy multimodal capabilities, like OCR and image understanding, without leaving their local machine.

  _Finally, the power to run a 70 billion parameter model that hallucinates about your vacation photos is optimized for your laptop's cooling fan._

  `local-ai` `vision` `mlx` `apple-silicon` `fine-tuning`
  </details>

- **[Shimmy](https://github.com/michael-a-kuykendall/shimmy)** `⭐ 4.8k` `updated ≤180d` A single-binary, OpenAI API-compatible local inference server written in Rust that runs GGUF and SafeTensors models with hot-swapping and auto-discovery. <details><summary>More about</summary>

  It lets developers run large local models behind a familiar API endpoint, making it easy to power IDE extensions, coding agents, and scripts without cloud costs or external dependencies.

  _Another rusty binary promising to make your 70B model fit on a GPU that is somehow still too small, if only you believe hard enough in CPU offloading._

  `local-ai` `inference-server` `openai-compatible` `rust` `gguf`
  </details>

- **[LoRAX](https://github.com/predibase/lorax)** `⭐ 3.8k` `updated >1y` A multi-LoRA inference server that dynamically serves thousands of fine-tuned LLMs on a single GPU using dynamic adapter loading and continuous batching. <details><summary>More about</summary>

  It allows developers to run a massive fleet of specialized fine-tuned models in production with drastically lower infrastructure costs by sharing a single base model.

  _Because nothing says 'streamlined developer experience' like managing a single GPU that is theoretically juggling thousands of adapters and their heterogeneous batching schedules._

  `llm-inference` `lora` `model-serving` `local-ai` `llmops`
  </details>

- **[Chat-ollama](https://github.com/sugarforever/chat-ollama)** `⭐ 3.5k` `updated ≤180d` ChatOllama is a self-hosted, Nuxt 3-based AI chatbot platform that supports local models via Ollama as well as major providers, featuring RAG knowledge bases, realtime voice chat, and MCP integration for agent tooling. <details><summary>More about</summary>

  It gives developers a private, Docker-deployable chat surface to run local and cloud models with RAG, voice, and agent workflows without sending data to hosted SaaS.

  _Yet another local chat UI so you can run a private LLM stack that you will mostly use to ask why your private LLM stack is so complicated._

  `local-ai` `chatbot` `self-hosted` `mcp` `rag`
  </details>

- **[llm-as-chatbot](https://github.com/deep-diver/llm-as-chatbot)** `⭐ 3.3k` `updated >1y` A Gradio-based web UI and Discord bot for serving local, instruction-tuned open-source LLMs as chatbots with model-agnostic conversation management. <details><summary>More about</summary>

  It lets developers quickly spin up a local chat interface for a wide variety of Hugging Face models without writing custom serving or UI code.

  _Yet another local chatbot UI from the era when everyone realized they could wrap a Gradio app around a model and call it infrastructure._

  `local-ai` `gradio` `chatbot` `open-source` `huggingface`
  </details>

- **[text-extract-api](https://github.com/catchthetornado/text-extract-api)** `⭐ 3.1k` `updated ≤1y` A self-hosted FastAPI service that converts documents and images into Markdown or structured JSON using local OCR and Ollama LLMs, with built-in PII removal and distributed task processing. <details><summary>More about</summary>

  It gives developers a private, local pipeline to extract structured data from messy documents using their own hardware, removing cloud dependencies and simplifying compliance-heavy workflows.

  _Yet another local stack promising to replace your SaaS subscriptions, as long as you enjoy debugging Docker, Redis, Celery workers, and Ollama model downloads just to parse a PDF._

  `ocr` `local-ai` `document-extraction` `pii-removal` `self-hosted`
  </details>

- **[ExLlama](https://github.com/turboderp/exllama)** `⭐ 2.9k` `updated >1y` ExLlama is a memory-efficient CUDA-based implementation of Llama for running 4-bit quantized weights on modern NVIDIA GPUs. <details><summary>More about</summary>

  It enables developers to run large language models locally with lower VRAM usage, making on-device inference more accessible.

  _The quiet relief of fitting a 7B model in 12GB VRAM, followed by the dread of realizing you still need to fine-tune it._

  `local-ai` `inference` `cuda` `quantization`
  </details>

- **[Infinity](https://github.com/michaelfeil/infinity)** `⭐ 2.8k` `updated ≤180d` Infinity is a high-throughput, low-latency REST API server for running text-embedding, reranking, CLIP, CLAP, and ColPali models locally or in self-hosted environments. <details><summary>More about</summary>

  Developers building RAG pipelines or semantic search can deploy any HuggingFace embedding model with OpenAI-compatible APIs and hardware acceleration without managing raw inference code.

  _Yet another opportunity to spend three days tuning a self-hosted embedding stack just to discover that your 'high-throughput' setup is still slower than the vendor API you were trying to replace._

  `embeddings` `self-hosted` `inference` `rest-api` `local-ai`
  </details>

- **[graphrag-local-ui](https://github.com/severian42/graphrag-local-ui)** `⭐ 2.3k` `updated >1y` A local-first GraphRAG suite combining a FastAPI backend with Gradio UIs for indexing, prompt tuning, querying, and visualizing knowledge graphs using local LLMs like Ollama. <details><summary>More about</summary>

  Enables developers to experiment with Microsoft's GraphRAG patterns on self-hosted hardware without incurring cloud API costs or compromising data privacy.

  _You can now visualize your local knowledge graph in 3D while spending forty-five minutes configuring an embedding proxy that you definitely won't remember how to restart next week._

  `graphrag` `local-llm` `rag` `knowledge-graph` `ollama`
  </details>

- **[LLMFarm](https://github.com/guinmoon/llmfarm)** `⭐ 2k` `updated ≤180d` LLMFarm is an iOS and macOS app that runs large language models locally on-device using the GGML library, supporting models like LLaMA, Starcoder, and Gemma. <details><summary>More about</summary>

  It lets developers benchmark, test RAG setups, and run coding models like Starcoder directly on Apple hardware without cloud dependencies.

  _Now you can spend your afternoon tweaking sampling parameters on your iPhone to see if Mixtral can finally debug your CI pipeline offline._

  `local-ai` `ios` `macos` `offline` `ggml`
  </details>

- **[opendan-personal-ai-os](https://github.com/fiatrete/opendan-personal-ai-os)** `⭐ 2k` `updated ≤180d` OpenDAN is an open-source Personal AI Operating System that consolidates various AI modules, supports local model execution via Docker, and enables users to build and run multi-agent workflows for personal tasks. <details><summary>More about</summary>

  It provides a self-hosted, Docker-based environment for developers to experiment with local LLMs and multi-agent collaboration without relying solely on external APIs.

  _Now you can self-host an operating system to manage your smart toaster and English tutor, ensuring your local hardware is as overwhelmed as your production Kubernetes cluster._

  `local-ai` `multi-agent` `self-hosted` `personal-os`
  </details>

- **[Rapid-MLX](https://github.com/raullenchai/rapid-mlx)** `⭐ 1.7k` `updated ≤90d` A local inference engine for Apple Silicon that serves models via an OpenAI-compatible API, optimized for speed and tool calling to work with coding assistants like Claude Code and Cursor. <details><summary>More about</summary>

  It allows developers on Mac to run frontier-sized models locally with minimal latency, enabling private, cost-free usage of tool-calling workflows inside their existing editors.

  _Another Tuesday, another drop-in replacement for OpenAI that turns your Mac into a space heater so you can debug a 4B parameter model's failure to close a div._

  `local-ai` `apple-silicon` `mlx` `openai-api` `tool-calling`
  </details>

- **[HunyuanOCR](https://github.com/tencent-hunyuan/hunyuanocr)** `⭐ 1.6k` `updated ≤90d` HunyuanOCR is a 1B parameter vision-language model from Tencent for end-to-end OCR, supporting document parsing, multilingual text extraction, and image-to-text translation. <details><summary>More about</summary>

  Developers can self-host a lightweight, state-of-the-art OCR model that handles complex documents and over 100 languages with a single inference call via vLLM.

  _Just what the ecosystem needed: another 1B-parameter 'lightweight' model that still requires a 20GB CUDA 12.9 GPU and a very specific compat package to actually run._

  `ocr` `multimodal` `vlm` `local-ai` `tencent`
  </details>

- **[chat-with-mlx](https://github.com/qnguyen3/chat-with-mlx)** `⭐ 1.6k` `updated >1y` A Python-based local chat UI for running and interacting with open-source LLMs directly on Apple Silicon Macs using the MLX framework. <details><summary>More about</summary>

  Developers on Apple Silicon can test and iterate against models like Llama 3 and Codestral locally without cloud costs or privacy compromises.

  _Now you can run a model that writes code slower than you do, but at least it’s failing privately on your own hardware._

  `local-ai` `apple-silicon` `mlx` `chat-ui` `privacy`
  </details>

- **[TokenSpeed](https://github.com/lightseekorg/tokenspeed)** `⭐ 1.5k` `updated ≤30d` TokenSpeed is a TensorRT-LLM-level performance LLM inference engine with vLLM-like usability, targeting agentic workloads via a local-SPMD design and static compiler. <details><summary>More about</summary>

  It offers high-throughput inference optimized for agentic workloads, reducing latency and cost for developers running LLM agents in production.

  _Another 'speed-of-light' inference engine promising to finally make your agents not feel like they're wading through molasses._

  `llm-inference` `agentic-workloads` `performance`
  </details>

- **[LlamaChat](https://github.com/alexrozanski/llamachat)** `⭐ 1.5k` `updated ≤30d` LlamaChat is a native macOS desktop app for chatting with locally running LLaMA, Alpaca, and GPT4All models via llama.cpp. <details><summary>More about</summary>

  It gives developers a polished SwiftUI interface to run and convert local LLMs without touching the command line, making local inference more accessible on Apple hardware.

  _Because nothing says productive engineering like installing a desktop chat app just to talk to a model that runs slower in Debug builds than your CI pipeline._

  `local-ai` `macos` `llama` `swiftui` `desktop`
  </details>

- **[llama-macos](https://github.com/ggml-org/llama-macos)** `⭐ 1.3k` `updated ≤30d` A macOS menu bar application for running local LLMs via a background server. <details><summary>More about</summary>

  It provides a zero-config way to host an OpenAI-compatible API locally, enabling developers to plug local models into VS Code, Zed, and CLI agents without managing manual server setups.

  _The joy of discovering that your 'lightweight' menu bar app is actually just a very polite wrapper for the 12GB of RAM your local model is currently eating._

  `macos` `local-llm` `llama-cpp` `openai-api` `self-hosted`
  </details>

- **[LlamaBarn](https://github.com/ggml-org/llamabarn)** `⭐ 1.3k` `updated ≤30d` A lightweight macOS menu bar app that runs local LLMs via llama.cpp and exposes them through a standard OpenAI-compatible API server. <details><summary>More about</summary>

  It gives developers a zero-config, native way to run and manage local models that slot directly into editors, CLI tools, and coding agents they already use.

  _Yet another cozy local-LLM launcher so you can pretend your Mac is a private GPT factory while your fan spins like a jet engine._

  `local-ai` `llama-cpp` `macos` `openai-compatible` `menu-bar`
  </details>

- **[KubeAI](https://github.com/kubeai-project/kubeai)** `⭐ 1.2k` `updated ≤30d` KubeAI is a Kubernetes operator that deploys, scales, and manages ML model inference servers like vLLM and Ollama with OpenAI-compatible APIs and intelligent load balancing. <details><summary>More about</summary>

  It lets developers run production-grade LLM, embedding, and speech-to-text inference on their own clusters with zero-to-N scaling and prefix-aware routing without needing Istio or Knative.

  _Yet another reason to feel like you haven't truly 'shipped AI' until you've debugged a custom resource definition at 2am while your KV cache silently weeps._

  `kubernetes` `inference` `llm-serving` `self-hosted` `openai-api`
  </details>

- **[llama2.rs](https://github.com/srush/llama2.rs)** `⭐ 1.1k` `updated >1y` A fast, pure-Rust implementation of the Llama 2 inference decoder for running quantized models locally on CPU. <details><summary>More about</summary>

  It gives developers a lightweight, Python-callable way to run 70B models locally with SIMD and memory mapping without touching a GPU or a heavy framework.

  _Yet another reason to convince yourself that spending three hours compiling Rust nightly toolchains is a normal part of your AI inference stack._

  `rust` `local-inference` `cpu` `llama2` `quantized`
  </details>

- **[swiss_army_llama](https://github.com/dicklesworthstone/swiss_army_llama)** `⭐ 1.1k` `updated >1y` A FastAPI service that provides REST endpoints for local LLM completions, document and audio ingestion, text embeddings, and semantic search using FAISS and advanced similarity measures. <details><summary>More about</summary>

  It gives developers a self-contained local API to ingest mixed media, compute and cache embeddings, and run semantic search without relying on external model providers.

  _Yet another local LLM side project promising to be your all-in-one Swiss Army knife, because apparently what the ecosystem really needed was more ways to run embeddings on a RAM disk._

  `local-ai` `embeddings` `semantic-search` `fastapi` `llama-cpp`
  </details>

- **[Minima](https://github.com/dmayboroda/minima)** `⭐ 1k` `updated ≤180d` Minima is an open-source, on-premises RAG (Retrieval-Augmented Generation) system that runs as configurable Docker containers, allowing developers to query local documents using local LLMs, ChatGPT, or Claude via MCP integration. <details><summary>More about</summary>

  It offers a self-contained, privacy-first infrastructure for indexing and querying local codebases or documentation using your choice of local models or external APIs.

  _Yet another 'run it locally with Docker' RAG setup that forces you to choose between debugging docker-compose errors or just pasting the file into ChatGPT like a civilized animal._

  `rag` `local-ai` `mcp` `docker` `on-premises`
  </details>

- **[ZhiLight](https://github.com/zhihu/zhilight)** `⭐ 906` `updated ≤180d` ZhiLight is a highly optimized LLM inference acceleration engine for Llama and its variants, focused on performance improvements for PCIe-based GPUs. <details><summary>More about</summary>

  It provides measurable QPS and latency gains over vLLM and SGLang on consumer and data-center GPUs, serving as a high-performance local inference runtime.

  _Another inference engine promising 2x speedup while you wait for model downloads to finish, adding to the paradox of choice in local LLM serving._

  `llm-inference` `local-ai` `performance` `cuda` `optimization`
  </details>

- **[llmcord](https://github.com/jakobdylanc/llmcord)** `⭐ 810` `updated ≤180d` A lightweight Python Discord bot that turns Discord into a shared frontend for any OpenAI-compatible LLM, supporting remote APIs and local runtimes like Ollama with reply-based branching conversations. <details><summary>More about</summary>

  It gives teams a zero-friction way to collaborate around LLMs directly inside Discord, with easy model switching and support for both cloud and local inference.

  _Finally, a way to escalate your team’s AI prompting habits into a shared Discord channel where everyone can branch, reply, and collectively wonder why the bot is using gpt-5 to debug a CSS margin._

  `discord` `llm-frontend` `local-ai` `chatbot` `openai-compatible`
  </details>

- **[aikit](https://github.com/kaito-project/aikit)** `⭐ 530` `updated ≤30d` AIKit is a Docker-first platform for running, fine-tuning, and packaging open-source LLMs as OCI artifacts with an OpenAI-compatible API. <details><summary>More about</summary>

  It lets developers self-host and ship local LLM inference and fine-tuning workloads using familiar container workflows and Kubernetes, without relying on external API providers.

  _Now you can add 'OCI-compliant LLM packaging' to the list of things you’ll automate at 2 a.m. while telling yourself it’s definitely cheaper than an OpenAI bill._

  `local-llm` `fine-tuning` `docker` `kubernetes` `openai-api`
  </details>

- **[QA-Pilot](https://github.com/reid41/qa-pilot)** `⭐ 321` `updated ≤1y` QA-Pilot is a self-hosted, interactive chat interface that lets developers converse with and navigate local or remote GitHub code repositories using a variety of online and local LLMs. <details><summary>More about</summary>

  It offers a local-first workflow for rapidly understanding unfamiliar codebases via conversation, supporting a wide range of LLM providers without sending proprietary code to hosted services.

  _Yet another local chat app promising deep code understanding, which is ironic given the author explicitly warns users not to use it on private or production codebases._

  `local-ai` `code-navigation` `chat-interface` `repo-analysis` `self-hosted`
  </details>

- **[Repochat](https://github.com/pnkvalavala/repochat)** `⭐ 315` `updated >1y` A local-first Streamlit chatbot that clones GitHub repositories, embeds code with Sentence Transformers, and answers questions about the codebase using a local LLM via Retrieval Augmented Generation. <details><summary>More about</summary>

  It lets developers run a private, offline Q&A interface over any GitHub repo without sending proprietary code to external APIs.

  _Yet another reminder that while agents are learning to write entire repos, we are still building bespoke chat interfaces to simply ask them what the code we just cloned actually does._

  `rag` `local-llm` `repo-chat` `streamlit` `langchain`
  </details>

- **[Modelz-LLM](https://github.com/tensorchord/modelz-llm)** `⭐ 277` `updated >1y` An OpenAI-compatible API server for running self-hosted open-source LLMs like LLaMA and ChatGLM locally or in the cloud. <details><summary>More about</summary>

  It lets developers swap OpenAI's hosted API for a local or self-managed inference endpoint without changing their existing SDK or LangChain code.

  _Another valiant attempt to let you host your own 'private' GPT while quietly praying your inference latency doesn't make the terminal feel like it's running on a potato._

  `local-ai` `inference` `openai-compatible` `self-hosted` `llm-serving`
  </details>

- **[DashInfer](https://github.com/modelscope/dash-infer)** `⭐ 273` `updated ≤1y` DashInfer is a high-performance, C++-based LLM inference engine with C++ and Python APIs, optimized for CUDA, x86, and ARMv9 hardware architectures. <details><summary>More about</summary>

  It allows developers to deploy optimized local LLM inference with features like continuous batching and quantized caching across diverse hardware without heavy dependencies.

  _Just what the ecosystem needed: another highly optimized inference engine to evaluate while your existing vLLM setup is already quietly burning through your GPU budget._

  `llm-inference` `local-ai` `cpp` `cuda` `performance`
  </details>

- **[LLMKube](https://github.com/defilantech/llmkube)** `⭐ 156` `updated ≤30d` Kubernetes operator for self-hosted LLM inference that manages llama.cpp, vLLM, TGI, and mlx-server runtimes across NVIDIA and Apple Silicon hardware with autoscaling and an OpenAI-compatible API. <details><summary>More about</summary>

  It lets developers run private, air-gapped inference on existing Kubernetes clusters without building a custom model-serving platform, using standard YAML to handle GPU scheduling, caching, and routing to external providers when needed.

  _Because what started as 'I don't want to send data to OpenAI' inevitably becomes 'I now operate a mini OpenAI-compatible platform on Kubernetes with circuit breakers for PII and a metal-agent binary running on my MacBook.'._

  `kubernetes` `local-inference` `self-hosted` `gpu-serving` `llm-operator`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[LoLLMS](https://github.com/parisneo/lollms)** `⭐ 72` `updated ≤90d` A self-hosted, multi-user chat platform with a Vue frontend and FastAPI backend that integrates with various LLM backends and includes built-in RAG, personality management, and user collaboration features. <details><summary>More about</summary>

  It provides a local-first, privacy-preserving alternative to hosted chat platforms with deep integration into multiple LLM services and extensible document retrieval.

  _Yet another 'one tool to rule them all' that promises to unify the AI ecosystem while adding a friend system to the one place developers go to avoid notifications._

  `local-ai` `self-hosted` `chat-interface` `rag` `multi-user`
  </details>

- **[YuanChat](https://github.com/ieit-yuan/yuanchat)** `⭐ 44` `updated >1y` YuanChat is a self-hosted, Vue and FastAPI-based chat interface and desktop client for interacting with locally or remotely deployed Yuan-2.0 large language models. <details><summary>More about</summary>

  It provides developers with a ready-made web UI and Windows executable to test, evaluate, and integrate Yuan-2.0 inference endpoints without building a custom frontend.

  _Just when you thought the ecosystem had enough generic chat wrappers, we now have a fully Dockerized Vue app dedicated to making one specific family of models feel like ChatGPT._

  `local-ai` `llm` `self-hosted` `chat-interface` `yuan-2`
  </details>

- **[AI-Mask](https://github.com/pacwoodson/ai-mask)** `⭐ 31` `updated >1y` A Chrome extension that acts as a local AI inference provider, caching models once in the browser and serving them to compatible web apps via an SDK. <details><summary>More about</summary>

  It lets developers build web apps with free, private, on-device inference while avoiding repeated multi-gigabyte model downloads per domain.

  _We've successfully reinvented the GPU driver layer as a Chrome extension so we can argue about model cache partitions instead of just running Ollama._

  `local-ai` `chrome-extension` `webgpu` `inference` `sdk`
  </details>

- **[LLMHub](https://github.com/jmather/llmhub)** `⭐ 9` `updated >1y` LLMHub is a lightweight CLI and REST API for managing, starting, stopping, and interacting with self-hosted language models locally. <details><summary>More about</summary>

  It gives developers a single control surface to run multiple local LLMs with OpenAI-compatible endpoints, simplifying local inference testing and integration.

  _Yet another wrapper promising to tame local model chaos, because clearly what the ecosystem needed was more YAML files to manage the tools managing the models._

  `local-ai` `cli` `llm-management` `self-hosted`
  </details>

- **[4da](https://github.com/runyourempire/4da)** `⭐ 0` `updated ≤90d` A local-first desktop app and MCP server that scans a developer's codebase and dependency tree to filter developer news, advisories, and releases using on-device LLM verification. <details><summary>More about</summary>

  It aims to solve the problem of information overload by scoring ecosystem content against your actual stack and filtering out noise before it reaches your AI assistant.

  _We now need a local AI agent to filter the firehose of AI-generated content so our AI coding agents don't hallucinate based on the latest AI blog posts._

  `local-ai` `mcp` `developer-intelligence` `privacy` `context-filtering`
  </details>

- **[FuLLMetalAi](https://www.fullmetal.ai)** FullMetal AI is a local AI inference UI for running models on your own hardware. <details><summary>More about</summary>

  It provides developers with a graphical interface to manage and interact with local models without relying on hosted APIs.

  _Another desktop wrapper to manage the growing pile of local models that we swear we will get around to benchmarking properly._

  `local-ai` `inference` `desktop`
  </details>

- **[GPT4All](https://www.nomic.ai/gpt4all)** A desktop application and runtime for running open-source large language models locally on Windows, macOS, and Linux with support for local document chat. <details><summary>More about</summary>

  Developers can run, test, and build against LLMs entirely on their own hardware without cloud dependencies or data privacy trade-offs.

  _You can now host a full AI stack on your laptop, provided you enjoy the familiar ritual of waiting for open-source models to tokenize at the speed of a caffeinated snail._

  `local-ai` `llm` `offline` `desktop` `privacy`
  </details>

- **[HammerAI](https://www.hammerai.com/desktop)** A desktop application for Windows, macOS, and Linux that runs AI character chats locally using bundled Ollama and Llama.cpp with no configuration required. <details><summary>More about</summary>

  It provides a zero-setup, private local environment for running LLMs offline, appealing to developers exploring local inference without touching the command line.

  _Another desktop wrapper that proudly promises privacy while quietly reminding you that your GPU drivers are still the real gatekeeper to local AI._

  `local-ai` `desktop` `offline` `ollama` `privacy`
  </details>

- **[Jan](https://jan.ai)** Jan is a desktop application for running large language models locally on your own hardware. <details><summary>More about</summary>

  It provides developers with a privacy-focused, offline-capable interface to run and interact with open-source LLMs without relying on external APIs.

  _Yet another desktop wrapper promising to wrangle local models, ensuring you can max out your GPU fans while wondering if you should have just used Ollama._

  `local-ai` `desktop` `llm` `offline`
  </details>

- **[LibreChat](https://www.librechat.ai)** LibreChat is a customizable open-source chat UI supporting multiple AI providers and features like file upload, image generation, and agent support. <details><summary>More about</summary>

  It gives developers a self-hostable, extensible interface to experiment with and compare various LLMs and AI workflows in a unified chat environment.

  _Another chat UI to self-host, because apparently one Open WebUI wasn't enough to satisfy our need for prompt fatigue in triplicate._

  `chat-ui` `local-ai` `self-hosted`
  </details>

- **[LM Studio](https://lmstudio.ai)** A desktop application and local runtime for running open-weight LLMs such as Llama, Gemma, and DeepSeek privately on your own hardware. <details><summary>More about</summary>

  Developers can test, iterate on, and serve models locally with an OpenAI-compatible API and SDKs without sending code or data to external providers.

  _You now have a compelling reason to hoard GPUs, run 70B parameter models on a laptop that sounds like a jet engine, and explain to your team why local inference is more reliable than the cloud—until you run out of VRAM._

  `local-ai` `llm` `inference` `desktop` `openai-compatible`
  </details>