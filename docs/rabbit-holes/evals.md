<!-- This file is generated. Do not edit it directly. Submit tools through config/sources.yml. -->
# Evals & Benchmarks

Frameworks, platforms, and tooling for measuring, tracing, comparing, and improving model, prompt, and agent behavior.

_154 entries in 4 sections, ranked by stars. Each section opens with its top 30; the rest of that section waits behind the **▸ more** panel at its end._

## Contents

- [Agent & LLM Benchmarks](#agent--llm-benchmarks) — 72
- [Observability & Tracing](#observability--tracing) — 60
- [Prompt Regression & Testing](#prompt-regression--testing) — 11
- [Safety, Fairness & Red-teaming](#safety-fairness--red-teaming) — 11

## Agent & LLM Benchmarks

- **[DeepEval](https://github.com/confident-ai/deepeval)** `⭐ 18.3k` `updated ≤30d` An open-source LLM evaluation framework for testing and benchmarking AI agents, RAG pipelines, and chatbots. <details><summary>More about</summary>

  It lets developers measure and compare model quality, prompt effectiveness, and architecture choices with research-backed metrics like G-Eval and task completion.

  _Finally, a way to prove your LLM app is bad before your users do._

  `evaluation` `llm-testing` `benchmarking` `python` `metrics`
  </details>
- **[RAGAS](https://github.com/vibrantlabsai/ragas)** `⭐ 14.9k` `updated ≤1y` Ragas is a Python library for evaluating LLM applications with objective metrics and test data generation. <details><summary>More about</summary>

  It gives developers a programmatic, data-driven way to measure and improve LLM app quality without relying on subjective assessments.

  _Finally, a way to quantify the vague guilt of shipping LLM features you can't actually verify._

  `evals` `llm` `testing` `python` `framework`
  </details>
- **[lm-evaluation-harness](https://github.com/eleutherai/lm-evaluation-harness)** `⭐ 14k` `updated ≤30d` A framework for few-shot evaluation of language models with support for 60+ benchmarks and multiple model backends. <details><summary>More about</summary>

  It provides a standardized, reproducible way to test and compare LLM performance across academic benchmarks and custom tasks, powering leaderboards like Hugging Face's Open LLM Leaderboard.

  _Now you can spend hours tuning prompts only to realize your model was just bad at the benchmark all along._

  `evaluation` `llm-benchmarks` `framework` `reproducibility`
  </details>
- **[Gorilla](https://github.com/shishirpatil/gorilla)** `⭐ 13k` `updated ≤180d` Gorilla is a research project and benchmark suite focused on training and evaluating LLMs for accurate function and API calling, featuring the Berkeley Function-Calling Leaderboard (BFCL). <details><summary>More about</summary>

  It provides the industry-standard benchmarks (BFCL) and datasets developers need to rigorously evaluate and select models based on their ability to interact with external tools and APIs.

  _We have evolved from 'can the model write a for-loop?' to 'can the model correctly invoke a nested API call without hallucinating a parameter?', and we now need a leaderboard just to track the existential dread of tool integration._

  `function-calling` `benchmarks` `llm-eval` `api-integration` `research`
  </details>
- **[opencompass](https://github.com/open-compass/opencompass)** `⭐ 7.2k` `updated ≤90d` OpenCompass is an LLM evaluation platform supporting over 100+ datasets and a wide range of models to benchmark and compare model performance. <details><summary>More about</summary>

  It provides developers and researchers with a standardized CLI and configuration framework to objectively measure and compare LLM capabilities across custom or standard benchmarks.

  _Because nothing says 'I am shipping features' quite like spending three days configuring a YAML file to confirm that GPT-4 is, in fact, better at math than a random open-source checkpoint._

  `evals` `benchmarking` `llm` `testing` `cli`
  </details>
- **[giskard-oss](https://github.com/giskard-ai/giskard-oss)** `⭐ 5.8k` `updated ≤30d` An open-source Python library for testing and evaluating agentic systems and LLM applications. <details><summary>More about</summary>

  It provides automated testing, red-teaming, and RAG evaluation to catch regressions and safety issues in non-deterministic agentic workflows.

  _Nothing humbles a developer quite like realizing their carefully crafted agentic loop is one prompt injection away from a security disaster._

  `llm-evaluation` `agent-testing` `red-teaming` `rag-eval` `llmops`
  </details>
- **[VLMEvalKit](https://github.com/open-compass/vlmevalkit)** `⭐ 4.3k` `updated ≤90d` An open-source Python toolkit for evaluating large vision-language models (LVLMs) across 220+ models and 80+ benchmarks via one-command generation-based testing. <details><summary>More about</summary>

  It gives developers a standardized, reproducible way to benchmark multimodal model performance without manually wrangling data across disparate repositories.

  _We now have a dedicated framework to scientifically confirm that your shiny new multimodal model still can't tell a knitting needle from a breadstick._

  `evaluation` `vision-language` `benchmarking` `multimodal` `llm`
  </details>
- **[FlashRAG](https://github.com/ruc-nlpir/flashrag)** `⭐ 3.5k` `updated ≤90d` FlashRAG is a Python toolkit providing pre-processed benchmark datasets, state-of-the-art RAG algorithms, and modular components for researchers to reproduce and develop Retrieval Augmented Generation systems. <details><summary>More about</summary>

  It standardizes the chaotic RAG research landscape by giving developers a single framework with 36 datasets and 23 algorithms to benchmark retrieval and generation pipelines without rewriting boilerplate.

  _Finally, a toolkit to help you discover that your bespoke RAG implementation is still outperformed by a simple heuristic from 2022._

  `rag` `research` `benchmark` `python` `retrieval`
  </details>
- **[EvalScope](https://github.com/modelscope/evalscope)** `⭐ 3.2k` `updated ≤90d` EvalScope is a framework for evaluating and benchmarking large models (LLMs, VLMs, AIGC) with built-in benchmarks, multi-backend support, and performance stress testing. <details><summary>More about</summary>

  It provides developers with a one-stop solution to measure model quality and inference performance across multiple backends and modalities.

  _Yet another reason to spend three hours tuning your benchmark suite instead of actually shipping the feature you promised last sprint._

  `eval` `benchmark` `llm` `performance` `modelscope`
  </details>
- **[Lighteval](https://github.com/huggingface/lighteval)** `⭐ 2.5k` `updated ≤180d` Lighteval is an all-in-one toolkit for evaluating LLMs across multiple backends, supporting 1000+ tasks and custom metrics. <details><summary>More about</summary>

  Developers can rigorously benchmark and debug model performance with detailed, sample-by-sample results across diverse domains and languages.

  _Finally, a way to prove your model is bad at math without having to argue with it._

  `evaluation` `benchmarking` `llm` `huggingface` `metrics`
  </details>
- **[alpaca_eval](https://github.com/tatsu-lab/alpaca_eval)** `⭐ 2k` `updated >1y` An automatic evaluator for instruction-following language models that uses a powerful LLM to score outputs against a reference model, validated against 20K human annotations. <details><summary>More about</summary>

  It enables developers to quickly benchmark model quality during development for under $10 and in under 3 minutes, replacing slow and expensive human evaluation loops.

  _You now have a 0.98 correlated excuse to avoid reading your model's outputs entirely while you chase leaderboard positions that correlate perfectly with being verbose._

  `evals` `benchmarking` `llm` `leaderboard`
  </details>
- **[future-agi](https://github.com/future-agi/future-agi)** `⭐ 1.9k` `updated ≤30d` An open-source platform for evaluating, tracing, and optimizing AI agents to reduce hallucinations. <details><summary>More about</summary>

  It provides a unified loop for simulating edge cases and monitoring production traces to turn agent failures into actual improvement signal.

  _The realization that your 'autonomous' agent is just a fragile series of hallucinations that requires a Go-based gateway and a full observability stack to keep from crashing._

  `llm-evals` `observability` `agent-ops` `tracing` `open-source`
  </details>
- **[GuideLLM](https://github.com/vllm-project/guidellm)** `⭐ 1.4k` `updated ≤90d` GuideLLM is a benchmarking platform that evaluates LLM inference performance under real-world workloads using OpenAI-compatible and vLLM-native servers. <details><summary>More about</summary>

  It gives engineering teams SLO-aware, reproducible metrics to optimize deployments and avoid guesswork in production LLM serving.

  _Another layer of observability for the ever-growing stack of tools needed just to serve a model without melting your GPU cluster._

  `benchmarking` `llm-inference` `observability`
  </details>
- **[Auto-evaluator](https://github.com/rlancemartin/auto-evaluator)** `⭐ 1.1k` `updated >1y` A lightweight Streamlit evaluation tool that auto-generates QA pairs from documents and scores LLM question-answering chains across various retrieval and prompt configurations. <details><summary>More about</summary>

  It gives developers a quick, UI-driven way to measure and compare how different retrieval and prompting setups affect QA accuracy before shipping a LangChain pipeline.

  _Because nothing says confidence in your retrieval stack like outsourcing the grading of your AI’s answers to another AI and calling it a dashboard._

  `evals` `langchain` `qa` `streamlit`
  </details>
- **[nolabs-ai/deepfabric](https://github.com/nolabs-ai/deepfabric)** `⭐ 878` `updated ≤90d` A pipeline for generating high-quality synthetic data, training models, and evaluating agent behavior with topic-graph guided sampling and schema-constrained outputs. <details><summary>More about</summary>

  It lets developers create domain-specific, tool-aware datasets for training and evaluating agentic systems with strict schema adherence and built-in validation.

  _Now you can spend more time curating synthetic data pipelines than writing the code that actually uses them._

  `agent-evaluation` `dataset-generation` `fine-tuning` `mcp-compatible` `synthetic-data`
  </details>
- **[openjudge](https://github.com/agentscope-ai/openjudge)** `⭐ 837` `updated ≤30d` OpenJudge is an open-source evaluation framework designed to assess the quality of AI applications through automated graders and rubrics. <details><summary>More about</summary>

  It provides a structured way to move from 'vibes-based' testing to reproducible evaluation, allowing developers to turn grading results into reward signals for fine-tuning.

  _Nothing says professional development like moving from 'it feels like it works' to 'the automated grader says it's 72% compliant.'._

  `evaluation` `benchmarking` `agent-evaluation` `reward-modeling`
  </details>
- **[dingo](https://github.com/migoxlab/dingo)** `⭐ 731` `updated ≤90d` Dingo is an open-source Python tool for evaluating AI data quality, model performance, and application reliability using LLM-as-a-judge and rule-based validation. <details><summary>More about</summary>

  It helps developers systematically detect hallucinations, validate training data, and assess RAG system quality before deployment.

  _Finally, a tool to quantify how much your AI is lying—now you can argue with stakeholders using metrics instead of gut feelings._

  `data-quality` `llm-as-judge` `hallucination-detection` `rag-evaluation` `model-validation`
  </details>
- **[Evalchemy](https://github.com/mlfoundations/evalchemy)** `⭐ 602` `updated ≤1y` A unified CLI toolkit for evaluating post-trained language models across multiple benchmarks with support for local, vLLM, and API-based models. <details><summary>More about</summary>

  It gives developers a single command-line interface to run standardized reasoning, coding, and chat benchmarks across different model backends without dependency conflicts.

  _Yet another evaluation harness enters the arena, giving model trainers a fresh way to discover that their clever fine-tune still fails AIME24._

  `evals` `llm` `benchmarking` `cli` `reasoning`
  </details>
- **[YourBench](https://github.com/huggingface/yourbench)** `⭐ 452` `updated ≤180d` A dynamic benchmark generation framework that transforms documents into structured QA datasets for evaluating LLMs. <details><summary>More about</summary>

  Developers can generate custom evaluation datasets from their own documents to reliably benchmark model performance on domain-specific tasks.

  _Now you can spend less time arguing about model quality and more time generating benchmarks to argue about your benchmarks._

  `benchmarking` `evaluation` `llm-testing` `dataset-generation` `huggingface`
  </details>
- **[Ollama Benchmark](https://github.com/aidatatools/ollama-benchmark)** `⭐ 389` `updated ≤30d` A CLI tool for benchmarking the throughput and tokens-per-second performance of local LLMs running via Ollama. <details><summary>More about</summary>

  It allows developers to quantitatively measure the hardware performance and inference speed of local models across different RAM configurations.

  _Nothing personal like watching your precious GPU cycles turn into a measurable sequence of tokens-per-second._

  `ollama` `benchmarking` `local-llm` `performance` `cli`
  </details>
- **[LLM Decontaminator](https://github.com/lm-sys/llm-decontaminator)** `⭐ 325` `updated >1y` A research toolkit for detecting and removing rephrased benchmark samples from LLM training datasets to prevent data contamination. <details><summary>More about</summary>

  It gives LLM developers and researchers a concrete way to measure and scrub benchmark contamination, helping keep model eval results honest.

  _Because nothing says modern ML engineering like spending more time sanitizing your training set than actually training the model._

  `benchmark` `contamination` `training-data` `eval` `research`
  </details>
- **[XRAG](https://github.com/docailab/xrag)** `⭐ 319` `updated ≤30d` XRAG is a benchmarking framework for evaluating foundational components of advanced Retrieval-Augmented Generation (RAG) systems. <details><summary>More about</summary>

  It helps developers and researchers measure and compare the performance of different RAG configurations, components, and workflows.

  _Finally, a way to quantify whether your RAG pipeline is just hallucinating with confidence._

  `rag` `benchmarking` `evaluation` `llm` `retrieval`
  </details>
- **[MathArena](https://github.com/eth-sri/matharena)** `⭐ 278` `updated ≤180d` An evaluation platform for testing LLM performance on recent mathematical competitions and olympiads. <details><summary>More about</summary>

  It provides standardized benchmarks and reasoning traces to measure how well models handle complex, multi-step mathematical reasoning.

  _Nothing says 'tate of the art' like watching a trillion-parameter model struggle with high school math problems._

  `llm-evaluation` `mathematical-reasoning` `benchmarking` `reasoning-traces`
  </details>
- **[MixEval](https://github.com/jinjieni/mixeval)** `⭐ 254` `updated >1y` An evaluation suite and dynamic benchmark for measuring LLM performance with high correlation to Chatbot Arena at low cost. <details><summary>More about</summary>

  Developers can cheaply and locally validate model quality against a frequently updated benchmark that avoids contamination.

  _Now you can spend less time arguing about model quality and more time arguing about benchmark design._

  `llm-evaluation` `benchmark` `dynamic-data` `neurips-2024`
  </details>
- **[future-agi/agent-learning-kit](https://github.com/future-agi/agent-learning-kit)** `⭐ 120` `updated ≤30d` An evaluation framework and SDK for scoring AI workflows using a mix of 72 local metrics and LLM-as-judge refinement. <details><summary>More about</summary>

  It provides a unified `evaluate()` API to catch hallucinations and safety violations before they hit production, with support for RAG, function calling, and agent trajectories.

  _The peace of mind knowing your LLM passed 72 local metrics right before it manages to hallucinate a new way to delete your production database._

  `ai-observability` `benchmarking` `evals` `guardrails` `llm-evaluation` `llmops` `rag` `sdks` `testing`
  </details>
- **[skill-optimizer](https://github.com/fastxyz/skill-optimizer)** `⭐ 77` `updated ≤180d` skill-optimizer is a Docker-based CLI and agent skill for running deterministic evaluations of agent skills against LLM models via OpenRouter. <details><summary>More about</summary>

  It lets developers benchmark and refine agent behavior with reproducible, file-graded evals in isolated environments.

  _Another eval framework that turns skill validation into a Dockerized ritual, because trusting your agent’s word just isn’t enough anymore._

  `evals` `cli` `docker` `agent-skills` `openrouter`
  </details>
- **[tool-definition-quality-score](https://github.com/glama-ai/tool-definition-quality-score)** `⭐ 28` `updated ≤30d` An open framework and rubric for scoring the quality of Model Context Protocol (MCP) tool definitions to ensure they are clearly communicable to AI agents. <details><summary>More about</summary>

  It provides a standardized way for developers to audit and improve their MCP server descriptions to increase the likelihood that an agent actually selects and uses the tool correctly.

  _We have now reached the era of writing meticulously crafted prompts just to convince an LLM that our other prompts are written well enough to be understood._

  `mcp` `evals` `prompt-engineering` `tooling`
  </details>
- **[bunsdev/typesafe-ai-playground](https://github.com/bunsdev/typesafe-ai-playground)** `⭐ 21` `updated ≤30d` Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.
- **[erendikmenn/jev-rag-benchmark](https://github.com/erendikmenn/jev-rag-benchmark)** `⭐ 16` `updated ≤30d` Reproducible benchmark for measuring Jev reranking quality, latency, and cost in RAG.
- **[PDF Race](https://github.com/goodrahstar/pdf-race)** `⭐ 13` `updated ≤30d` Docling → Jev vs Docling → Gemini 3.8 Flash vs Gemini reading the PDF: same documents, one clock, scored against arXiv's own metadata.

<details><summary><strong>▸ &nbsp;&nbsp;+42 more in Agent & LLM Benchmarks &nbsp;—&nbsp; click to expand</strong></summary>

- **[scorable-mcp](https://github.com/root-signals/scorable-mcp)** `⭐ 12` `updated ≤180d` An MCP server that exposes Scorable evaluators, judges, and coding policy adherence checks as tools for AI assistants and agents.
- **[AgentBench](https://github.com/agentbench/agentbench)** `⭐ 10` `updated ≤1y` A benchmarking framework designed to evaluate AI agent configurations across 40 real-world tasks and 7 domains using rule-based scoring.
- **[anessbelbati/jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench)** `⭐ 9` `updated ≤30d` Can a decision model beat dedicated rerankers? TypeSafe Jev vs Cohere Rerank 4 vs ZeroEntropy zerank-2 vs a chat-model baseline: 14 datasets, every raw API response, bootstrap ranges on every gap.
- **[dhruvmehra/jevbench](https://github.com/dhruvmehra/jevbench)** `⭐ 8` `updated ≤30d` Benchmark TypeSafe JEV against LLMs, fine-tuned BERT, Laya and zero-shot NLI on text classification: accuracy, calibration, latency, throughput, cost.
- **[Eikos Arena](https://github.com/caiovicentino/eikos-arena)** `⭐ 7` `updated ≤30d` Eikos-27B vs Jev: live paper trading on Hyperliquid. Real prices, simulated money, rules hashed before the start.
- **[brida-ai/reflexbench](https://github.com/brida-ai/reflexbench)** `⭐ 5` `updated ≤30d` ReflexBench — open benchmark and evaluation harness for System One models and typed decision engines.
- **[chenmingtang830/jevarena](https://github.com/chenmingtang830/jevarena)** `⭐ 4` `updated ≤30d` Open-source BYOK arena for Jev and other AI judges. Find failures, compare quality, cost, and latency.
- **[swarms-evals](https://github.com/the-swarm-corporation/swarms-evals)** `⭐ 4` `updated ≤1y` A Python package providing evaluation harnesses for comparing multi-agent collaboration performance against individual agents across benchmarks like HumanEval, MMLU, and SWE-BENCH.
- **[adambkovacs/candidate-experience-benchmark](https://github.com/adambkovacs/candidate-experience-benchmark)** `⭐ 3` `updated ≤30d` Compare TypeSafe Jev and LLMs on 60 synthetic candidate-experience reviews: four classification tasks, prompt variants, costs, tokens, and reproducible evidence.
- **[dchristopoulos/jev-aita](https://github.com/dchristopoulos/jev-aita)** `⭐ 3` `updated ≤30d` Benchmark of TypeSafe's Jev against Sonnet 5, GPT-5 nano and local LLMs on 770 Reddit AITA verdicts: Brier scores, latency and cost.
- **[deepansh-saxena/jev-guardrails](https://github.com/deepansh-saxena/jev-guardrails)** `⭐ 3` `updated ≤30d` Comparing LLM-as-judge vs TypeSafe Jev for agent guardrails: same rules, same agent, measured on cost, latency, calibration and coverage.
- **[duberblock/jevals](https://github.com/duberblock/jevals)** `⭐ 2` `updated ≤30d` Open-source playground for evaluating System One and JEV-compatible models with deterministic fidelity, semantic judging, and independent verification.
- **[4esv/jev-eval](https://github.com/4esv/jev-eval)** `⭐ 1` `updated ≤30d` Benchmark TypeSafe Jev against any OpenRouter model on your own data.
- **[adkid-zephyr/chinese-workflow-decision-bench](https://github.com/adkid-zephyr/chinese-workflow-decision-bench)** `⭐ 1` `updated ≤30d` Feishu message classification benchmark: 64 synthetic scenarios, reusable classifier adapters, and audited Jev vs Laya results.
- **[blas0/jev-shadcn-lint-eval](https://github.com/blas0/jev-shadcn-lint-eval)** `⭐ 1` `updated ≤30d` A small second eval for shadcn-ui/lint that uses TypeSafe's Jev to judge the linter's own output.
- **[clduab11/jev-test](https://github.com/clduab11/jev-test)** `⭐ 1` `updated ≤30d` Pre-registered benchmark: can a 2B local model (Gemma 4 E2B) answer web questions without making things up when a decision model (TypeSafe Jev) makes every call? SearXNG for search, MemPalace for verbatim memory, seven arms including open local judges. Spec and thresholds fixed before any run.
- **[denser-org/rerank-bench-jev](https://github.com/denser-org/rerank-bench-jev)** `⭐ 1` `updated ≤30d` Production reranker benchmark: TypeSafe Jev vs Qwen3-Reranker-0.6B on BEIR SciFact and NFCorpus — nDCG@10, cost/query and p50/p95 latency. Quality is indistinguishable; Jev is ~2x faster, Qwen ~4x cheaper. From the team at denser.ai.
- **[Agent Operator Score](https://github.com/monglong0214/agent-operator-score)** Agent Operator Score – Local-first CLI (aos) that scores how well you operate Claude Code, Codex, and Grok CLI from your own session transcripts, plus a controlled-run assessment suite with a hidden verifier. No model calls in review mode; nothing leaves your disk.
- **[idovmamane/dejevu](https://github.com/idovmamane/dejevu)** Browser-agent comparison that benchmarks a one-look open-model policy against the Jev demo.
- **[iotexproject/sidegrade](https://github.com/iotexproject/sidegrade)** sidegrade – Reads your local coding-agent usage (Claude Code, Codex, Hermes, OpenCode) and shows which model gives you the same intelligence for less — scoring every model on the Artificial Analysis Intelligence Index and re-pricing your own token mix. 100% local, no account, MIT-licensed. Run with npx sidegrade; on npm.
- **[jimmyliao/jev-storyboard-lab](https://github.com/jimmyliao/jev-storyboard-lab)** jev-storyboard-lab - Google ADK vs Microsoft Agent Framework for structured-output agents, with TypeSafe Jev as a vendor-neutral QC gate.
- **[LegalForecastBench](https://github.com/johnhughes3/legalforecastbench)** LegalForecastBench - LegalForecast-MTD benchmark alpha and official evaluation workflows.
- **[marianoberton/agent-evals](https://github.com/marianoberton/agent-evals)** agent-evals - Deterministic LLM-agent eval harness with optional calibrated TypeSafe Jev judge for CI deploy gates. Project guide.
- **[musharna/llm-panel](https://github.com/musharna/llm-panel)** llm-panel ⭐ 1 — Put one question or diff to several LLM CLIs in parallel (codex, claude, opencode/OpenRouter, ollama); every answer shown in full, an anonymized rebuttal round, cost accounting, a GitHub Action, and a measured miss rate on AACR-Bench. Python, PyPI llm-panel. MIT.
- **[mychaelangelo/tempo-jev-demo](https://github.com/mychaelangelo/tempo-jev-demo)** tempo-jev-demo - A natural-language task workspace comparing performance across AI models (TypeSafe's Jev, GPT-5.6 Luna, and Gemini 3.8 Flash).
- **[opaielsheikh/ai-elo-ranker](https://github.com/opaielsheikh/ai-elo-ranker)** ai-elo-ranker - High-speed recursive AI Elo tournament engine powered by Jev and Swiss matchmaking.
- **[RapidFire AI](https://github.com/rapidfireai/rapidfireai)** RapidFire AI 170 JavaScript Apache-2.0 2026-09 Experiment harness for RAG and fine-tuning runs.
- **[WindTunnel](https://github.com/nekuda-ai/windtunnel)** WebMCP benchmark comparing browser-agent interfaces, with Jev included as one of the evaluated configurations.
- **[AGI-Eval](https://agi-eval.cn/mvp/home)** A benchmarking platform for measuring AI and AGI model performance.
- **[BenchGen](https://benchgen.com)** BenchGen – AI agent benchmarking and evaluation platform. Score agent runs across tool-call accuracy, goal completion, and skill coverage, then export filtered trajectories for fine-tuning.
- **[Chatbot Arena Leaderboard](https://huggingface.co/spaces/lmarena-ai/arena-leaderboard)** Arena Leaderboard is a Hugging Face Space that displays the current LMArena leaderboard showing how language models rank against each other.
- **[ContextQA](https://contextqa.com)** An AI-native testing platform that automates end-to-end QA for enterprise applications and AI agents through self-healing tests and MCP integration.
- **[LM Arena](https://arena.ai)** An interactive platform for chatting with, comparing, and voting on various AI models.
- **[Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)** A Hugging Face Space that tracks, ranks, and evaluates the performance of open-source large language models.
- **[per-answer explorer](https://convex-evals.netlify.app)** Convex Decision Evals - Model evaluation: asks Jev a Choice on 108 verified four-option questions about the Convex backend platform (no docs or tools in the prompt, each asked 3 times with shuffled options, random guessing 25%) alongside 14 LLMs, where jev-1.13 scores 84.6% at a 199 ms median and $0.0088 per full run against 98.0% at 2.12 s and $1.59 for the top model, with every answer, probability and raw request/response in a public explorer and the runner in get-convex/convex-evals.
- **[Root Signals](https://scorable.ai)** Scorable is an LLM evaluation platform for building and monitoring custom LLM-as-a-judge evaluators.
- **[sidegrade](https://npmjs.com/package/sidegrade)** sidegrade – Reads your local coding-agent usage (Claude Code, Codex, Hermes, OpenCode) and shows which model gives you the same intelligence for less — scoring every model on the Artificial Analysis Intelligence Index and re-pricing your own token mix. 100% local, no account, MIT-licensed. Run with npx sidegrade; on npm.
- **[swebench.com](https://swebench.com)** SWE-Bench.com is a public leaderboard for evaluating coding agents on software engineering tasks using the SWE-bench benchmark.
- **[Vals AI](https://vals.ai)** A benchmarking platform providing independent evaluations of AI models across specialized domains such as finance, law, and software engineering.
- **[Weave](https://docs.wandb.ai/weave/guides/core-types/evaluations)** 5. Weave: A lightweight toolkit for tracking and evaluating LLM applications.
- **[Weave](https://weave-docs.wandb.ai/guides/core-types/evaluations)** Weave's evaluation framework for measuring LLM application performance against curated test cases and scoring functions.
- **[Workflow evals](https://evals.typesafe.ai)** Workflow evals - Published eval methodology and per-model results for System One workflows.

</details>

## Observability & Tracing

- **[Langfuse](https://github.com/langfuse/langfuse)** `⭐ 32.1k` `updated ≤90d` Langfuse is an open source LLM engineering platform for observability, evaluation, prompt management, and debugging of AI applications. <details><summary>More about</summary>

  It gives developers a unified way to monitor, evaluate, and improve LLM-powered applications in production using real usage data.

  _Now you can obsess over token-level latency in production while pretending it’s engineering rigor._

  `observability` `evals` `llmops` `prompt-management`
  </details>
- **[MLflow](https://github.com/mlflow/mlflow)** `⭐ 27.3k` `updated ≤90d` MLflow is an open-source AI engineering platform for managing the lifecycle of agents, LLMs, and ML models, providing tools for tracing, evaluation, prompt management, and monitoring. <details><summary>More about</summary>

  It provides a unified platform for developers to debug, evaluate, and monitor AI applications in production while managing model access and controlling costs.

  _Yet another platform promising to wrangle your LLM chaos into a dashboard, ensuring you can now generate 60 million monthly reports on why your prompts are still hallucinating._

  `llmops` `observability` `evaluation` `prompt-management` `mlops`
  </details>
- **[Opik](https://github.com/comet-ml/opik)** `⭐ 21.8k` `updated ≤30d` Open-source observability, evaluation, and optimization platform for LLM applications, RAG systems, and agentic workflows. <details><summary>More about</summary>

  It provides comprehensive tracing, automated evaluations, and production-ready dashboards to debug and improve AI applications from prototype to production.

  _Finally, a way to see why your LLM is hallucinating—just in time to realize it was your prompt all along._

  `llm-observability` `evaluation` `tracing` `llmops` `rag`
  </details>
- **[Phoenix](https://github.com/arize-ai/phoenix)** `⭐ 11.6k` `updated ≤30d` Open-source AI observability and evaluation platform for tracing, experimenting, and optimizing AI applications. <details><summary>More about</summary>

  Developers can instrument, debug, and compare LLM behavior in production or staging without vendor lock-in.

  _Finally, a way to know why your AI did that thing—just in time to realize you have no idea how to fix it._

  `observability` `evals` `tracing` `llmops` `framework-agnostic`
  </details>
- **[Evidently](https://github.com/evidentlyai/evidently)** `⭐ 7.8k` `updated ≤90d` An open-source observability framework for evaluating, testing, and monitoring machine learning and LLM-powered systems. <details><summary>More about</summary>

  It provides developers with the metrics and visualization needed to track model drift, data quality, and LLM performance from experimentation through production.

  _Nothing says 'peace of mind' like a dashboard confirming your LLM is hallucinating at a statistically significant rate._

  `mlops` `llmops` `observability` `evaluation` `monitoring`
  </details>
- **[Traceloop OpenLLMetry](https://github.com/traceloop/openllmetry)** `⭐ 7.3k` `updated ≤90d` OpenLLMetry is a set of OpenTelemetry-based instrumentations and an SDK for adding observability, tracing, and metrics to LLM applications and vector databases. <details><summary>More about</summary>

  It allows developers to monitor token usage, latency, and prompt flow in their GenAI stacks using standard OTel pipelines connected to existing tools like Datadog or Honeycomb.

  _You now have perfect visibility into just how many tokens your 'simple' RAG app burns while returning the wrong answer with deterministic latency._

  `observability` `llmops` `opentelemetry` `python` `tracing`
  </details>
- **[Aim](https://github.com/aimhubio/aim)** `⭐ 6.3k` `updated ≤30d` An open-source experiment tracker for logging training runs and AI metadata with a visual UI and programmatic API. <details><summary>More about</summary>

  It provides a structured way to observe, compare, and query machine learning experiments and metadata to improve model development workflows.

  _Nothing quite prepares you for the existential dread of watching a perfect hyperparameter curve crash during a live visualization._

  `experiment-tracking` `mlops` `visualization` `open-source` `metadata`
  </details>
- **[Helicone](https://github.com/helicone/helicone)** `⭐ 6k` `updated ≤90d` Open source LLM observability platform for monitoring, evaluating, and experimenting with AI models via a single API gateway. <details><summary>More about</summary>

  Developers can track costs, latency, and quality across 100+ models, debug agent traces, and manage prompts without vendor lock-in.

  _Finally, a way to see which of your 17 LLM experiments actually cost money instead of just hope._

  `llm-observability` `ai-gateway` `prompt-management` `evals` `open-source`
  </details>
- **[Logfire](https://github.com/pydantic/logfire)** `⭐ 4.4k` `updated ≤90d` An observability platform and SDK built on OpenTelemetry for tracing, logging, and measuring production LLM and agent systems. <details><summary>More about</summary>

  It gives developers deep visibility into Python and LLM workflows with SQL querying, Pydantic integration, and standard OTel signals so they can actually debug agent behavior in production.

  _Because nothing says 'we have reached AGI' like needing a dedicated observability platform just to figure out why your agent spent $4.20 and three minutes deciding to call a weather API._

  `observability` `llm-tracing` `opentelemetry` `python` `agent-infra`
  </details>
- **[Deepchecks](https://github.com/deepchecks/deepchecks)** `⭐ 4.1k` `updated ≤1y` Deepchecks is an open-source solution for continuous validation of ML models and data, covering testing, CI, and monitoring. <details><summary>More about</summary>

  It helps developers validate AI/ML models and data pipelines from research to production, ensuring reliability and performance.

  _Because nothing says 'production-ready' like a model that passes all its tests until it doesn’t._

  `ml-validation` `model-testing` `data-drift` `mlops` `ci-cd`
  </details>
- **[LangWatch](https://github.com/langwatch/langwatch)** `⭐ 3.4k` `updated ≤90d` LangWatch is a platform for LLM evaluations, AI agent testing, and observability with simulation, tracing, prompt optimization, and an AI gateway for governance. <details><summary>More about</summary>

  It gives developers end-to-end visibility and control over agent behavior, enabling regression testing and production monitoring without custom tooling.

  _Another observability platform promising to eliminate tool sprawl while adding yet another layer to your AI stack._

  `evals` `observability` `llmops`
  </details>
- **[Pezzo](https://github.com/pezzolabs/pezzo)** `⭐ 3.3k` `updated ≤1y` Pezzo is an open-source LLMOps platform for managing prompts, monitoring AI operations, and tracking costs across Node.js, Python, and LangChain clients. <details><summary>More about</summary>

  It gives developers a centralized control plane to version prompts, observe LLM calls, and cut costs without wiring custom instrumentation into every app.

  _Yet another platform promising to solve the chaos of your prompt strings, as if the real problem was version control and not the fact that your carefully tuned system message breaks on the next model update._

  `llmops` `prompt-management` `observability` `open-source` `platform`
  </details>
- **[lmnr](https://github.com/lmnr-ai/lmnr)** `⭐ 3.1k` `updated ≤90d` Laminar is an open-source observability platform purpose-built for AI agents, offering tracing, evals, monitoring, SQL access, dashboards, and dataset tooling. <details><summary>More about</summary>

  It gives developers end-to-end observability and evaluation tooling for AI agents in one self-hostable or managed platform.

  _Finally, a single pane of glass to watch your agents hallucinate in real time—because distributed tracing wasn’t painful enough._

  `observability` `evals` `ai-agents` `monitoring` `tracing`
  </details>
- **[whylogs](https://github.com/whylabs/whylogs)** `⭐ 2.8k` `updated >1y` whylogs is an open-source data logging library that generates statistical profiles of datasets to monitor data quality and model performance over time. <details><summary>More about</summary>

  It helps developers detect data drift, validate pipelines, and maintain ML observability by turning raw data into actionable summaries and constraints.

  _Another layer of observability to add to your ML stack, because clearly your models weren't already failing in enough mysterious ways._

  `data-quality` `mlops` `observability`
  </details>
- **[OpenLIT](https://github.com/openlit/openlit)** `⭐ 2.6k` `updated ≤90d` Open-source LLM observability platform providing OpenTelemetry-native tracing, evaluations, prompt management, guardrails, and GPU monitoring for AI applications. <details><summary>More about</summary>

  It gives developers a single drop-in SDK to trace, evaluate, and govern LLM calls across 50+ providers without wiring together half a dozen observability tools.

  _Because nothing says 'shipping confidently' like needing a dashboard, rule engine, vault, playground, and fleet hub just to find out why your chatbot recommended a toaster as a therapist._

  `llm-observability` `opentelemetry` `evals` `prompt-management` `gpu-monitoring`
  </details>
- **[Git AI](https://github.com/git-ai-project/git-ai)** `⭐ 2.5k` `updated ≤30d` An open-source Git extension that tracks and attributes AI-generated code to specific agents, models, and sessions. <details><summary>More about</summary>

  It provides a way to audit AI contributions by linking specific lines of code back to the original model and the session transcript that produced them.

  _Finally, you can pinpoint exactly which LLM hallucinated that critical logic error in your pull request._

  `git-extension` `ai-attribution` `auditability` `developer-productivity`
  </details>
- **[Zetane Viewer](https://github.com/zetane/viewer)** `⭐ 1.8k` `updated >1y` Zetane Viewer is a 3D visualizer for ML models and internal tensors, supporting ONNX and ZTN formats. <details><summary>More about</summary>

  It helps developers debug and understand model behavior by visualizing architecture, weights, and activations in an interactive 3D interface.

  _Another tool to convince yourself you understand your black box while the real issue is still your learning rate._

  `ml-visualization` `model-inspection` `debugging`
  </details>
- **[MLRun](https://github.com/mlrun/mlrun)** `⭐ 1.7k` `updated ≤90d` MLRun is an open-source MLOps platform for building, deploying, and managing continuous (gen) AI and ML applications across their lifecycle, integrating with development and CI/CD environments. <details><summary>More about</summary>

  It provides developers with a unified workflow to handle data management, RAG development, LLM evaluation, fine-tuning, and serverless deployment within a single framework.

  _Just when you thought your stack couldn't get any deeper, you now have a platform to orchestrate the platforms that orchestrate your prompts._

  `mlops` `genai` `pipelines` `llm-serving` `kubernetes`
  </details>
- **[Langtrace](https://github.com/scale3-labs/langtrace)** `⭐ 1.2k` `updated ≤1y` Langtrace is an open-source observability platform built on OpenTelemetry that provides real-time tracing, metrics, and evaluations for LLM applications, APIs, vector databases, and popular LLM frameworks via TypeScript and Python SDKs. <details><summary>More about</summary>

  It gives developers instrumented visibility into LLM latency, cost, and workflow behavior, making it easier to debug and optimize AI-powered applications.

  _You can now trace exactly how many tokens and dollars your agent burned while confidently explaining to your team that observability was the missing piece all along._

  `observability` `tracing` `llmops` `opentelemetry` `evals`
  </details>
- **[LangKit](https://github.com/whylabs/langkit)** `⭐ 993` `updated >1y` LangKit is an open-source toolkit for monitoring LLMs by extracting signals from prompts and responses to assess quality, security, and sentiment. <details><summary>More about</summary>

  It gives developers observability into LLM behavior in production, helping detect issues like prompt injection or hallucinations before they cause harm.

  _Finally, a way to quantify the existential dread of deploying non-deterministic text generators into critical systems._

  `llm-observability` `ai-safety` `mlops`
  </details>
- **[AgentSight](https://github.com/eunomia-bpf/agentsight)** `⭐ 606` `updated ≤90d` A system-level profiling and tracing tool for AI agents using eBPF to monitor system calls and network traffic. <details><summary>More about</summary>

  It allows developers to observe exactly what a closed-source or autonomous agent is doing to their local machine without needing an SDK or proxy integration.

  _The peace of mind that comes from knowing exactly which directory your agent is currently recursively deleting in real-time._

  `ebpf` `observability` `tracing` `agent-monitoring` `system-level`
  </details>
- **[delexw/claude-code-trace](https://github.com/delexw/claude-code-trace)** `⭐ 373` `updated ≤30d` Claude Code session log viewer for JSONL files in ~/.claude/projects. Browse conversations, tool calls, tokens, and live tail sessions on desktop, web, and TUI.
- **[OrcaReplay](https://github.com/continuum-ai-corp/orcareplay)** `⭐ 243` `updated ≤30d` A debugging tool that records, replays, and forks AI agent runs to facilitate model comparison and failure reproduction. <details><summary>More about</summary>

  It allows developers to reproduce agentic failures byte-for-byte and test different models at specific execution checkpoints without re-running the entire process.

  _It transforms the frantic 'why did the agent delete my database?' panic into a calm, offline, repeatable science experiment._

  `agent-debugging` `observability` `tracing` `llm-ops` `replay`
  </details>
- **[traceAI](https://github.com/future-agi/traceai)** `⭐ 221` `updated ≤90d` An open-source observability framework built on OpenTelemetry for tracing LLM calls, prompts, and agentic workflows. <details><summary>More about</summary>

  It allows developers to debug complex AI failures by tracing every step of an agent's decision-making process across any OTel-compatible backend.

  _Because knowing exactly which retrieval step failed just makes the inevitable 'hallucination debugging' loop feel much more clinical._

  `observability` `tracing` `opentelemetry` `llmops` `agents`
  </details>
- **[agenttrace](https://github.com/luoyuctl/agenttrace)** `⭐ 111` `updated ≤90d` AgentTrace is a local-first terminal TUI and report generator that analyzes session logs from AI coding agents to track cost, tokens, time, tool failures, and performance. <details><summary>More about</summary>

  It gives developers visibility into AI agent spend and latency so they can optimize usage and diagnose slow or expensive runs without relying on external observability.

  _Finally, a tool to quantify the guilt of letting your AI coding agent loop on a typo for 47 minutes while burning through your token budget._

  `observability` `tui` `ai-agents` `cost-tracking` `local-first`
  </details>
- **[Azure OpenAI Logger](https://github.com/aavetis/azure-openai-logger)** `⭐ 73` `updated >1y` A deployment solution that uses Azure API Management to proxy and log Azure OpenAI requests to Application Insights. <details><summary>More about</summary>

  It allows developers to maintain full control over LLM observability, traces, and usage metrics within their own Azure subscription.

  _Because nothing says 'production ready' like adding another layer of Azure infrastructure just to see why your prompts are failing._

  `azure` `observability` `llmops` `logging` `tracing`
  </details>
- **[Jeview](https://github.com/andududu/jeview)** `⭐ 62` `updated ≤30d` An unofficial local visualizer for Jev (TypeSafe): a live view of every call your code makes. Not affiliated with TypeSafe AI.
- **[futureagi-sdk](https://github.com/future-agi/futureagi-sdk)** `⭐ 50` `updated ≤90d` An open-source SDK for AI evaluation, prompt management, and observability, supporting Python and TypeScript. <details><summary>More about</summary>

  It provides the necessary infrastructure to measure model performance, manage prompt versioning, and implement real-time guardrails in production agent workflows.

  _Because nothing says 'table production deployment' like running 50+ metrics and sub-100ms guardrails to catch the agent's inevitable hallucinations._

  `evals` `observability` `prompt-management` `guardrails` `mlops`
  </details>
- **[AgentDiff](https://github.com/codeprakhar25/agentdiff)** `⭐ 43` `updated ≤180d` A git-native tool for AI code provenance that records and cryptographically signs which AI agent wrote specific lines of code. <details><summary>More about</summary>

  It provides a durable, signed audit trail for AI-generated code, moving from probabilistic detection to verifiable authorship for governance and security.

  _We have finally reached the era where we need cryptographic proof to determine which LLM is actually responsible for the bug in production._

  `provenance` `git` `governance` `sbom` `security`
  </details>
- **[RagTune](https://github.com/metawake/ragtune)** `⭐ 13` `updated ≤1y` RagTune is a CLI tool for debugging, benchmarking, and evaluating RAG retrieval layers across vector stores. <details><summary>More about</summary>

  It helps developers diagnose and improve retrieval quality in RAG systems by exposing recall, latency, and needle-level coverage metrics.

  _Finally, a way to quantify how often your RAG retrieves the right doc but still misses the answer buried in the third paragraph._

  `rag` `evaluation` `cli` `vector-search` `observability`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+30 more in Observability & Tracing &nbsp;—&nbsp; click to expand</strong></summary>

- **[semantic-coverage](https://github.com/aashirpersonal/semantic-coverage)** `⭐ 13` `updated ≤1y` An automated tool for detecting knowledge gaps, hallucination triggers, and representation bias in RAG vector databases.
- **[agent-trace](https://github.com/ertygiq/agent-trace)** `⭐ 3` `updated ≤90d` A CLI tool for filtering and printing text transcripts from agentic sessions such as Claude Code, Codex, and Pi.
- **[ashutoshvjti/progressgate](https://github.com/ashutoshvjti/progressgate)** `⭐ 1` `updated ≤30d` Detect semantic stagnation in AI agent loops.
- **[brandonbryant12/transcript-scorecard](https://github.com/brandonbryant12/transcript-scorecard)** `⭐ 1` `updated ≤30d` ACME live support-call scoring demo with TypeSafe AI, Effect, SQLite, React, Vite, and Turborepo.
- **[Monitor Token](https://github.com/a596480606/monitor_token)** `⭐ 1` `updated ≤90d` Lightweight Codex token monitor for Windows and macOS: local usage stats, weekly quota, reset time, and compact desktop widgets.
- **[bricelancasterwcp-sudo/sensorium](https://github.com/bricelancasterwcp-sudo/sensorium)** `⭐ 0` `updated ≤30d` Record what a program actually did and ask it questions afterward — Python, Rust and TypeScript recorders writing one trace format, read by one LLM-native query CLI that refuses rather than guesses.
- **[ClawMetry](https://github.com/vivekchand/clawmetry)** ClawMetry – Self-hosted dashboard that reads the session logs coding agents already write on disk (Claude Code, Codex, Cursor, Aider, Goose, OpenClaw and others), so there is no SDK and nothing sits in the request path. Shows sessions, tool calls, tokens and cache-aware cost per session and per model. MIT core, pip install clawmetry. Website.
- **[ishantanu/jevtraces](https://github.com/ishantanu/jevtraces)** jevtraces - OpenTelemetry Collector processor that uses Jev to assess span operation metadata and annotate spans with diagnostic value, business criticality, and retention probabilities without dropping traces.
- **[iyashjayesh/tokenchit](https://github.com/iyashjayesh/tokenchit)** iyashjayesh/tokenchit - Reads local Claude Code, Codex and OpenCode usage logs: token totals, daily and hourly activity, per-agent and per-model breakdowns and a year-in-review recap.
- **[JoeyBrar/agentseal-mcp](https://github.com/joeybrar/agentseal-mcp)** JoeyBrar/agentseal-mcp : Action logs for AI agents, recording every action in a SHA-256 hash chain for verifiable audit trails.
- **[lob-labs/cc-cost](https://github.com/lob-labs/cc-cost)** cc-cost – Single-file Python CLI that parses Claude Code transcript JSONL and reports cost, prompt-cache hit rate, tool-call distribution, top expensive turns, and actionable optimization recommendations (--diagnose).
- **[mishanefedov/agentwatch](https://github.com/mishanefedov/agentwatch)** agentwatch – Local-only TUI + web dashboard observing every AI coding agent on your machine (Claude Code, Codex, Gemini CLI, Cursor, Hermes, OpenClaw) on one unified timeline. Per-turn token + cost accounting with cache-hit weighting, MAD z-score anomaly detection, context compaction visualizer, hybrid semantic search, MCP server mode, and OpenTelemetry exporter. No cloud, no telemetry. Free and MIT.
- **[Receipt](https://github.com/noah-thing/receipt)** Receipt – Posts an itemized AI cost comment (tokens and dollars by model) on every pull request; tracks Claude Code, Cursor, Copilot, Aider, and any OpenAI/Anthropic API. Local ledger, never stores prompts. Open-source (MIT).
- **[sahil87/tu](https://github.com/sahil87/tu)** tu ⭐ 4 — Cost-tracking CLI for AI coding assistants: token usage and spend across Claude Code, Codex, and OpenCode sessions. TypeScript, MIT.
- **[serennity007/agent-trace](https://github.com/serennity007/agent-trace)** agent-trace – Post-session analysis for AI coding agents. Track costs, tokens, tool health, and every conversation. Supports Kimi Code, Claude Code, Codex, OpenCode.
- **[typesafe-ai/overwatch](https://github.com/typesafe-ai/overwatch)** Official tooling for observing and evaluating System One workflows.
- **[Atla API](https://docs.atla-ai.com/overview)** Atla is an observability platform designed to monitor, trace, and debug the behavior of AI agents.
- **[CloudByte PMS](https://getpms.cloudbyte.ai)** CloudByte PMS – Team analytics for AI coding assistants: tracks Claude Code, GitHub Copilot, and Cursor sessions, prompts, and commits to surface adoption, ROI, ghost seats, and prompt governance in one dashboard with role-based access.
- **[CostGoat](https://costgoat.com)** CostGoat – Privacy-first menubar app tracking AI agent quotas (Claude Code, Codex, Kimi, Z.ai), LLM API costs (OpenAI, OpenRouter, Anthropic, ElevenLabs), cloud spend, and SaaS subscriptions in real-time.
- **[Dash0](https://dash0.com)** Dash0 is an OpenTelemetry-native observability platform for monitoring AI agents and applications in production.
- **[DownForAI](https://downforai.com)** DownForAI – Real-time status monitoring for 800+ AI services including ChatGPT, Claude, Gemini, Midjourney, and Groq. Tracks uptime, latency, and community outage reports.
- **[Fiddler AI](https://fiddler.ai/llmops)** Fiddler AI provides LLM observability and monitoring tools to track, analyze, and safeguard large language model applications in production.
- **[Keywords AI](https://respan.ai)** An LLM engineering platform that unifies observability, evaluations, and model gateway routing.
- **[Literal AI](https://literalai.com)** Literal AI is an LLMOps platform for logging, tracing, and evaluating LLM applications in development and production.
- **[LLM Evaluation: A Complete Course](https://comet.com/site/llm-course)** A free self-paced course on LLM evaluation techniques using Opik and open source tools, aimed at AI developers and data scientists.
- **[Parea AI](https://parea.ai)** Parea AI is an experimentation and human annotation platform for evaluating, testing, and observing LLM applications in development and production.
- **[Predibase](https://predibase.com)** Enterprise control layer for monitoring, governing, and remediating AI agent behavior across deployments.
- **[Vellum](https://vellum.ai)** An AI product development platform to experiment with, evaluate, and deploy advanced LLM apps.
- **[Vibe Coding Profiler](https://bolokonon.vercel.app)** Vibe Coding Profiler – Profiles git history to show how a developer's coding rhythm, commit habits, and craftsmanship patterns carry over or change when working with AI coding agents.
- **[Weco Observe](https://weco.ai)** An autonomous agentic platform that iteratively optimizes code and machine learning pipelines by testing candidate solutions against specific performance metrics.

</details>

## Prompt Regression & Testing

- **[Promptfoo](https://github.com/promptfoo/promptfoo)** `⭐ 23.4k` `updated ≤90d` A CLI and library for evaluating, red-teaming, and vulnerability scanning LLM applications, supporting side-by-side model comparison and CI/CD integration. <details><summary>More about</summary>

  It moves prompt and agent testing from vibes-based trial-and-error to measurable, automated regression checks that can gate real deployments.

  _Now you have CI pipelines failing because your prompt has an attitude problem, adding a whole new layer of anxiety to Friday afternoon deploys._

  `eval` `red-teaming` `cli` `llm-testing` `ci-cd`
  </details>
- **[GPT Prompt Engineer](https://github.com/mshumer/gpt-prompt-engineer)** `⭐ 9.7k` `updated ≤1y` A notebook-based tool that generates, tests, and ELO-ranks multiple prompt candidates against provided test cases to find the most effective prompt for a given task. <details><summary>More about</summary>

  It automates the trial-and-error loop of prompt engineering by systematically evaluating variations so developers can optimize LLM performance without manual guesswork.

  _You now have a rigorous ranking system to prove that your prompts are suboptimal, adding a new layer of performance anxiety to the alchemy of prompt engineering._

  `prompt-engineering` `evals` `notebooks` `llm-optimization`
  </details>
- **[prompttools](https://github.com/hegelai/prompttools)** `⭐ 3k` `updated ≤1y` Open-source Python library for testing, experimenting with, and evaluating prompts, LLMs, and vector databases. <details><summary>More about</summary>

  Developers can programmatically compare model outputs, parameters, and retrieval accuracy across providers like OpenAI, Anthropic, and LLaMA via a unified code interface.

  _Finally, a way to A/B test your prompts without pretending you know what you're doing._

  `prompt-testing` `llm-evaluation` `vector-db-testing` `python` `experimentation`
  </details>
- **[AgentMark](https://github.com/agentmark-ai/agentmark)** `⭐ 352` `updated ≤90d` AgentMark is an open-source platform for managing, running, and evaluating AI agent prompts defined in Markdown files, with OpenTelemetry tracing and SDK adapters. <details><summary>More about</summary>

  It gives developers a version-controlled, type-safe workflow to iterate on prompts, run experiments against datasets, and trace LLM calls across local and cloud environments.

  _You now have a Markdown dialect, a custom CLI, and a telemetry pipeline just to ask a model how long shipping takes._

  `prompt-management` `evals` `observability` `mdx` `agents`
  </details>
- **[EvalView](https://github.com/hidai25/eval-view)** `⭐ 126` `updated ≤90d` Open-source regression testing tool for AI agents that snapshots behavior, diffs tool calls, and catches regressions in CI. <details><summary>More about</summary>

  It gives developers a way to detect silent regressions in agent behavior (e.g., tool choice changes, output drift) before they reach users, with deterministic replay and CI integration.

  _Finally, a way to know if your agent broke because you changed it or because the model provider changed it under you._

  `agent-testing` `regression-detection` `ci-integration` `evals` `python`
  </details>
- **[CodeVetter](https://github.com/codevetter/codevetter)** `⭐ 1` `updated ≤30d` Verify AI-generated code with execution evidence — deterministic, local-first verification for coding-agent changes via a macOS app, CLI, and MCP server.
- **[SDKProof](https://github.com/kalpitrathore/sdkproof)** SDKProof – Type-checks how well AI writes your SDK's current API by compiling model output against the real installed package (no LLM judge).
- **[sean-sunagaku/promptlint-mcp](https://github.com/sean-sunagaku/promptlint-mcp)** sean-sunagaku/promptlint-mcp : Static linter for AI prompts. Catches contradictions, redundancy, ambiguity, long examples, and politeness fluff in system prompts and agent instructions. CLI + MCP server. Zero network, MIT.
- **[AIFast Model Check](https://docs.aifast.hk/model-check)** AIFast Model Check – Free browser-based diagnostics for public HTTPS OpenAI-compatible API endpoints, including metadata, token handling, dynamic responses, SSE streaming, and tool-call checks.
- **[Prompt Evaluator](https://prompt-evaluator.vercel.app)** Prompt Evaluator – Web-based prompt and workflow QA tool. Evaluate, compare, and audit AI prompt outputs and workflow quality.
- **[Testsigma](https://testsigma.com)** Testsigma is a SaaS platform that uses AI agents to generate, run, self-heal, and diagnose automated tests for web, mobile, API, and Salesforce applications, providing release confidence scoring. <details><summary>More about</summary>

  It reduces manual test maintenance and gives developers and QA teams an evidence-based confidence score before deployment, integrating with CI/CD and AI coding tools.

  _Finally, a tool that tells you not just if your tests pass, but whether you’re allowed to feel safe about shipping — because passing tests and actual confidence were never the same thing._

  `testing` `qa` `ai-agents` `cicd` `release-confidence`
  </details>

## Safety, Fairness & Red-teaming

- **[SuperAgent](https://github.com/superagent-ai/superagent)** `⭐ 6.7k` `updated ≤180d` An open-source SDK and CLI for securing AI applications by detecting prompt injections, redacting PII, and scanning repositories for agent-targeted attacks. <details><summary>More about</summary>

  It provides developers with the runnable guardrails and scanning tooling needed to ship AI agents without leaking secrets or silently executing malicious instructions.

  _Just what every developer wanted: another layer of YAML-adjacent anxiety to configure before we can trust the thing we built to write its own YAML._

  `security` `guardrails` `sdk` `red-teaming` `agent-safety`
  </details>
- **[UQLM](https://github.com/cvs-health/uqlm)** `⭐ 1.2k` `updated ≤30d` UQLM is a Python library for detecting LLM hallucinations using uncertainty quantification techniques. <details><summary>More about</summary>

  It provides developers with a suite of scorers to quantify uncertainty in LLM outputs, helping identify and mitigate hallucinations in AI applications.

  _Now you can finally put a number on how confident your LLM is about its own lies._

  `llm-evaluation` `hallucination-detection` `uncertainty-quantification` `python-library`
  </details>
- **[LangFair](https://github.com/cvs-health/langfair)** `⭐ 262` `updated ≤30d` LangFair is a Python library for conducting use-case level LLM bias and fairness assessments. <details><summary>More about</summary>

  It enables developers to tailor bias and fairness evaluations to specific LLM use cases with a BYOP (Bring Your Own Prompts) approach, ensuring real-world relevance.

  _Finally, a way to quantify the bias in your AI that you were too polite to ask about._

  `llm-evaluation` `bias-detection` `fairness` `python` `responsible-ai`
  </details>
- **[fiddler-auditor](https://github.com/fiddler-labs/fiddler-auditor)** `⭐ 196` `updated >1y` Fiddler Auditor is a tool designed to evaluate and audit the performance and safety of large language models. <details><summary>More about</summary>

  It helps developers identify hallucinations, adversarial vulnerabilities, and private data leaks before deploying models into production.

  _Nothing prepares you for the existential dread of running a red-teaming script against your own production-ready agent._

  `evaluation` `llm-observability` `red-teaming` `nlp-auditing`
  </details>
- **[Plexiglass](https://github.com/w4-advisory/plexiglass)** `⭐ 153` `updated ≤1y` A CLI toolkit for detecting and protecting against LLM vulnerabilities by testing models against adversarial attacks like prompt injection and jailbreaking. <details><summary>More about</summary>

  It lets developers benchmark and harden their LLM integrations against security, bias, and toxicity risks using real-world adversarial datasets.

  _Because what your pipeline really needed at 4 PM on a Friday was a dedicated scanner to confirm that your 'secure' model can indeed be jailbroken by a teenager on Reddit._

  `adversarial-testing` `benchmarking` `cli-tool` `llm-security`
  </details>
- **[aak204/MCP-Scorecard](https://github.com/aak204/mcp-scorecard)** `⭐ 21` `updated ≤180d` Deterministic CI scanner and surface-risk scoring for MCP (Model Context Protocol) servers.
- **[thoughtproof/thoughtproof-mcp](https://github.com/thoughtproof/thoughtproof-mcp)** `⭐ 1` `updated ≤180d` An MCP server that provides adversarial multi-model reasoning verification for AI agents by challenging claims across Claude, Grok, DeepSeek, and Gemini with signed attestations. <details><summary>More about</summary>

  It lets developers add a verification layer to agent workflows so that high-stakes claims can be challenged and attested before the agent acts.

  _We have successfully reached the point where AI agents now need their own panel of peer reviewers, complete with cryptographic signatures and micropayments._

  `mcp` `verification` `multi-model` `agent-safety`
  </details>
- **[hernaninverso/eleata-verify-mcp](https://github.com/hernaninverso/eleata-verify-mcp)** `⭐ 0` `updated ≤180d` An MCP server that provides grounding and hallucination guardrails by verifying claims against provided evidence. <details><summary>More about</summary>

  It provides a standardized way for AI agents to perform natural language inference to check if their generated claims are actually supported by source documents.

  _Another layer of validation to remind you that your RAG pipeline is likely making things up._

  `mcp` `hallucination-guardrails` `grounding` `nli` `agent-tools`
  </details>
- **[Responsible AI Harness](https://github.com/syabdulr/responsible-ai-harness)** Responsible AI Harness - Model-agnostic safety assessment harness: hard rules plus optional TypeSafe Jev judge for injection, leakage, unsafe tools, and policy bypass; checksummed evidence + report UI. Project guide.
- **[zavocc/ground-zero](https://github.com/zavocc/ground-zero)** Evaluation framework for detecting AI hallucinations and instruction-following failures with Jev.
- **[Crowdcheck](https://crowdcheck-ai.vercel.app)** Crowdcheck - Test a post against 10,000 synthetic personas before you publish it.