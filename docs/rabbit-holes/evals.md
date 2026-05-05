# Evaluations and Benchmarks

Frameworks, benchmarks, and operational tooling for measuring model, prompt, or agent behavior.

## Tools & Resources

- **[Langfuse 🪢](https://github.com/langfuse/langfuse)** `⭐ 26.6k` `updated ≤30d` An open source LLM engineering platform providing observability, metrics, evaluations, prompt management, and a playground for debugging and improving AI applications. <details><summary>More about</summary>

  It integrates with major LLM frameworks and SDKs to give developers the tracing and evaluation infrastructure needed to move AI prototypes into production.

  _You now have a dashboard that perfectly visualizes your LLM application failing in ways you didn't know were possible, but at least the traces look beautiful._

  `evals` `llm-observability` `llmops` `prompt-management` `self-hosted`
  </details>

- **[Opik](https://github.com/comet-ml/opik)** `⭐ 19.2k` `updated ≤30d` Opik is an open-source platform for tracing, evaluating, and monitoring LLM applications, RAG systems, and agentic workflows with production dashboards. <details><summary>More about</summary>

  It gives developers a structured way to measure and debug AI application behavior across the full lifecycle from prototype to production.

  _Because nothing says shipping confidence like adding a dedicated observability stack just to confirm your agent is confidently hallucinating in spectacular new ways._

  `agent-monitoring` `evaluation` `llm-observability` `llmops` `tracing`
  </details>

- **[DeepEval](https://github.com/confident-ai/deepeval)** `⭐ 15.2k` `updated ≤30d` An open-source Python framework for unit testing LLM applications using research-backed metrics like G-Eval, hallucination detection, and task completion. <details><summary>More about</summary>

  It lets developers scientifically compare prompts, models, and architectures with Pytest-style rigor before shipping brittle AI features to production.

  _Because nothing says 'confident in my AI' like needing a dedicated framework to statistically prove it isn't hallucinating while it writes your unit tests._

  `evals` `llm-evaluation` `metrics` `python` `testing`
  </details>

- **[RAGAS](https://github.com/vibrantlabsai/ragas)** `⭐ 13.8k` `updated ≤90d` Ragas is a Python toolkit for evaluating and optimizing LLM applications through objective metrics, automated test data generation, and production-data feedback loops. <details><summary>More about</summary>

  It provides developers with the metrics and test harnesses needed to move LLM application development from vibes-based guessing to measurable, data-driven iteration.

  _You can now scientifically prove that your RAG pipeline is only 68% accurate, which is exactly the kind of precise metric you need before ignoring it and shipping anyway._

  `llm-evals` `metrics` `python` `rag` `testing`
  </details>

- **[lm-evaluation-harness](https://github.com/eleutherai/lm-evaluation-harness)** `⭐ 12.4k` `updated ≤30d` A unified framework for few-shot evaluation of language models that supports over 60 standard academic benchmarks and multiple model backends including HuggingFace, vLLM, and commercial APIs. <details><summary>More about</summary>

  It provides the industry-standard evaluation backend for the Open LLM Leaderboard and is used internally by organizations like NVIDIA and Cohere to measure model quality reproducibly.

  _We have built an entire subculture around running a 405B model through a harness just to discover that it still can't count the letter 'r' in strawberry._

  `evaluation` `llm` `benchmark` `harness` `testing`
  </details>

- **[GPT Prompt Engineer](https://github.com/mshumer/gpt-prompt-engineer)** `⭐ 9.7k` `updated ≤1y` A notebook-based tool that generates, tests, and ranks multiple prompt variations using an ELO rating system to find the most effective prompt for a given task. <details><summary>More about</summary>

  It automates the tedious trial-and-error cycle of prompt engineering by scientifically benchmarking candidates against your specific test cases.

  _We've successfully built a distributed system to solve the problem of writing a text box input, effectively turning prompt engineering into a spectator sport with an ELO leaderboard._

  `evals` `llm-optimization` `notebooks` `prompt-engineering`
  </details>

- **[Phoenix](https://github.com/arize-ai/phoenix)** `⭐ 9.5k` `updated ≤30d` An open-source platform for AI observability, tracing, and evaluation, designed to help developers instrument and optimize LLM applications and agents. <details><summary>More about</summary>

  It provides the tracing and evaluation harnesses needed to move LLM projects from prototype to production by measuring prompt quality and agent behavior.

  _You now have the dashboard to prove your agent is confidently hallucinating, but fixing the underlying logic remains a separate, unpaid internship._

  `llm-eval` `observability` `opensource` `tracing`
  </details>

- **[Evidently](https://github.com/evidentlyai/evidently)** `⭐ 7.4k` `updated ≤30d` Evidently is an open-source Python framework for evaluating, testing, and monitoring ML and LLM-powered systems across both experimentation and production environments. <details><summary>More about</summary>

  It provides over 100 built-in metrics and test suites that let developers programmatically validate data quality, detect drift, and evaluate generative AI outputs within their existing pipelines.

  _You can now mathematically prove that your RAG pipeline is hallucinating with 100+ metrics, which only adds to the pile of dashboards you'll ignore when the pager actually goes off._

  `evals` `llm-observability` `mlops` `monitoring` `python`
  </details>

- **[opencompass (`🔥`)](https://github.com/open-compass/opencompass)** `⭐ 7k` `updated ≤30d` OpenCompass is an LLM evaluation platform that benchmarks a wide range of models against over 100 datasets using a Python-based evaluation harness. <details><summary>More about</summary>

  It provides developers and researchers with the infrastructure to objectively measure and compare model performance across standardized tasks.

  _Just when you thought the model was smart enough to ship, you now have an entire platform dedicated to proving exactly how mediocre it remains on obscure reasoning benchmarks._

  `benchmark` `evaluation` `llm` `testing`
  </details>

- **[SuperAgent](https://github.com/superagent-ai/superagent)** `⭐ 6.6k` `updated ≤30d` An open-source SDK and security toolkit for AI applications that detects prompt injections, redacts sensitive data, and scans repositories for threats. <details><summary>More about</summary>

  It gives developers a programmatic way to harden agent workflows against common attacks and data leaks without building custom guardrails from scratch.

  _We have officially entered the era where we need a dedicated security layer just to keep our AI agents from impulsively emailing the user's Social Security number to a prompt injection._

  `agent-evals` `agent-safety` `agents` `ai-safety` `guardrails` `production-testing` `prompt-injection` `red-teaming` `sdk` `security`
  </details>

- **[GreptimeDB](https://github.com/greptimeteam/greptimedb)** `⭐ 6.2k` `updated ≤30d` GreptimeDB is an open-source Rust-based observability database that unifies metrics, logs, and traces into a single engine with SQL and PromQL support, designed to replace Prometheus, Loki, and Elasticsearch. <details><summary>More about</summary>

  It offers a specialized backend for AI and LLM observability, allowing developers to store and analyze high-volume agent traces and token metrics using OpenTelemetry GenAI conventions.

  _Because nothing says 'Observability 2.0' like replacing three complex databases with one database that still requires you to learn a new unified data model while praying your cardinality doesn't blow up the Rust heap._

  `database` `llm-monitoring` `observability` `opentelemetry` `rust`
  </details>

- **[Helicone](https://github.com/helicone/helicone)** `⭐ 5.6k` `updated ≤30d` Helicone is an open-source AI gateway and LLM observability platform that proxies model requests to provide logging, cost tracking, prompt management, and agent tracing with a single base URL change. <details><summary>More about</summary>

  It gives developers a centralized control plane to monitor token usage, debug agent sessions, and manage prompt versions across 100+ models without touching core application logic.

  _Yet another lifecycle stage where you realize your 'simple' AI integration now requires a dedicated dashboard, a proxy worker, and a ClickHouse instance just to figure out why your agent spent $40 hallucinating JSON._

  `ai-gateway` `llm-observability` `monitoring` `prompt-management` `self-hosted`
  </details>

- **[Giskard](https://github.com/giskard-ai/giskard-oss)** `⭐ 5.3k` `updated ≤30d` Giskard is an open-source Python library for testing, evaluating, and red-teaming LLM agents, featuring scenario-based evals, built-in checks, and multi-turn conversation testing. <details><summary>More about</summary>

  It lets developers catch regressions, validate RAG outputs, and enforce safety rules on non-deterministic agent behavior using a modular, async-first eval framework.

  _You can now scientifically prove that your agent fails consistently, rather than just suspecting it based on vibes._

  `agent-testing` `llm-eval` `python-library` `rag-evaluation` `red-teaming`
  </details>

- **[kiln](https://github.com/kiln-ai/kiln)** `⭐ 4.8k` `updated ≤30d` A desktop application and open-source library for building, evaluating, fine-tuning, and optimizing AI systems with support for RAG, agents, synthetic data generation, and MCP. <details><summary>More about</summary>

  It centralizes the fragmented AI development lifecycle—from prompt engineering and evals to fine-tuning and dataset management—into a single privacy-first desktop UI.

  _Another holy grail tool promising to solve the 'iterate until it works' loop, ensuring you'll spend just as much time configuring the evaluation framework as you would have fixing the model output manually._

  `evals` `fine-tuning` `rag` `synthetic-data` `mcp`
  </details>

- **[AutoRAG](https://github.com/marker-inc-korea/autorag)** `⭐ 4.7k` `updated ≤30d` AutoRAG is an open-source Python framework that automates the evaluation and optimization of Retrieval-Augmented Generation (RAG) pipelines using AutoML-style experimentation on your own data. <details><summary>More about</summary>

  It lets developers stop guessing which RAG modules work best by automatically benchmarking combinations against their specific corpus and QA datasets.

  _Because nothing says 'trust the AI' like needing an automated system just to figure out which automated system you should have been using in the first place._

  `automl` `evaluation` `llm-ops` `python` `rag`
  </details>

- **[VLMEvalKit](https://github.com/open-compass/vlmevalkit)** `⭐ 4.1k` `updated ≤30d` An open-source evaluation toolkit for large vision-language models that supports one-command benchmarking across 220+ LMMs and 80+ benchmarks. <details><summary>More about</summary>

  It lets developers reliably measure and compare multimodal model performance without wrestling with data prep across multiple repositories.

  _Because nothing says 'we have achieved AGI' quite like spending three weeks tuning an eval harness to confirm your model still can't count the fingers in an image._

  `benchmark` `eval` `llm` `multimodal` `vision-language`
  </details>

- **[Agenta](https://github.com/agenta-ai/agenta)** `⭐ 4.1k` `updated ≤30d` Agenta is an open-source LLMOps platform providing a prompt playground, prompt management, LLM evaluation, and observability for engineering and product teams building LLM applications. <details><summary>More about</summary>

  It integrates the fragmented lifecycle of prompt iteration, automated evaluation, and production observability into a single environment for teams shipping LLM-powered features.

  _Another platform promising to solve the 'prompt drift' anxiety that somehow requires adding yet another dashboard to the stack you're already struggling to monitor._

  `evals` `llmops` `observability` `open-source` `prompt-management`
  </details>

- **[LangWatch](https://github.com/langwatch/langwatch)** `⭐ 3.2k` `updated ≤30d` LangWatch is an open-source platform for end-to-end LLM evaluation, AI agent simulation, and production observability, supporting OpenTelemetry-native tracing and an AI gateway for cost control. <details><summary>More about</summary>

  It provides developers with a unified loop to trace, dataset-ize, evaluate, and optimize agent behavior before and after release, eliminating the need to glue together separate observability and eval tools.

  _Finally, a single platform to scientifically prove that your agent fails in exactly the same creative ways across every provider and prompt version._

  `agent-testing` `llm-evals` `llmops` `observability` `opentelemetry`
  </details>

- **[prompttools](https://github.com/hegelai/prompttools)** `⭐ 3k` `updated ≤90d` An open-source Python library and local playground for testing and evaluating prompts, LLMs, and vector databases across multiple providers. <details><summary>More about</summary>

  It lets developers systematically experiment with prompt variations and model parameters using code, notebooks, and a local UI instead of manually chatting with APIs.

  _You can now run a rigorous grid search on your prompt engineering anxiety, complete with a Streamlit dashboard to visualize exactly how many tokens you burned._

  `prompt-eval` `llm-testing` `python` `playground` `vector-db`
  </details>

- **[lmnr](https://github.com/lmnr-ai/lmnr)** `⭐ 2.8k` `updated ≤30d` Laminar is an open-source, Rust-based observability platform for AI agents, providing tracing, evaluations, and monitoring via OpenTelemetry-native SDKs and a self-hosted or managed UI. <details><summary>More about</summary>

  It gives developers a unified way to trace complex agentic workflows, run evaluations in CI/CD, and query execution data via SQL to debug why their agent decided to buy 2,000 units of glitter.

  _We have successfully built an observability stack to watch our observability stack watch the AI agents that are watching us._

  `observability` `evals` `llmops` `rust` `self-hosted`
  </details>

- **[EvalScope (`🔥`)](https://github.com/modelscope/evalscope)** `⭐ 2.8k` `updated ≤30d` EvalScope is a Python framework for evaluating and benchmarking large models (LLMs, VLMs, AIGC) with built-in benchmarks, multi-backend support, and performance stress testing. <details><summary>More about</summary>

  It gives developers a structured way to measure model quality and inference performance across multiple backends instead of stitching together ad-hoc eval scripts.

  _Because the only thing more exhausting than tuning prompts is building an entire benchmarking pipeline just to prove your model is statistically 3% less confused than the last one._

  `benchmark` `eval` `llm` `modelscope` `performance`
  </details>

- **[OpenLIT](https://github.com/openlit/openlit)** `⭐ 2.4k` `updated ≤30d` An OpenTelemetry-native observability platform for AI engineering that provides LLM tracing, GPU monitoring, prompt management, evaluations, guardrails, and a playground across 50+ LLM providers and agent frameworks. <details><summary>More about</summary>

  It gives developers a single drop-in SDK to monitor, evaluate, and secure LLM-powered applications across the full stack from experimentation to production.

  _Now you can add observability-induced anxiety to your existing prompt-induced anxiety, all while pretending your Python monolith is a distributed GenAI system._

  `evals` `gpu-monitoring` `llm-observability` `opentelemetry` `prompt-management`
  </details>

- **[Lighteval](https://github.com/huggingface/lighteval)** `⭐ 2.4k` `updated ≤30d` Lighteval is a Python toolkit from Hugging Face for evaluating LLMs across more than 1,000 tasks and multiple inference backends, with support for custom metrics and sample-level result inspection. <details><summary>More about</summary>

  It gives developers a standardized, extensible harness to measure model quality across knowledge, math, code, and multilingual benchmarks instead of stitching together ad-hoc eval scripts.

  _Yet another reminder that we now spend more time arguing about how to grade the models than actually shipping code they helped write._

  `benchmark` `evaluation` `huggingface` `llm` `metrics`
  </details>

- **[Evaluation guidebook](https://github.com/huggingface/evaluation-guidebook)** `⭐ 2.1k` `updated ≤180d` A guidebook from Hugging Face sharing practical insights and theoretical knowledge on evaluating LLM performance, covering automated benchmarks, human evaluation, and LLM-as-a-judge methods. <details><summary>More about</summary>

  It provides developers with structured guidance on how to rigorously test and validate model performance for specific production tasks.

  _Because the only thing more exhausting than tuning a prompt is reading a 50-page guide on how to properly measure whether your tuning actually worked._

  `benchmarks` `guide` `huggingface` `llm-evaluation`
  </details>

- **[UQLM](https://github.com/cvs-health/uqlm)** `⭐ 1.1k` `updated ≤30d` UQLM is a Python library that provides uncertainty quantification techniques and confidence scoring to detect hallucinations in LLM outputs across black-box, white-box, LLM-as-a-judge, ensemble, and long-text scorers. <details><summary>More about</summary>

  It gives developers a standardized, composable toolkit to measure and mitigate LLM hallucinations before shipping AI-generated content into production systems.

  _Yet another reminder that we have built an entire industrial sub-discipline just to figure out when the model is confidently lying to us._

  `hallucination-detection` `langchain` `llm-evaluation` `uncertainty-quantification`
  </details>

- **[Skills](https://github.com/nvidia-nemo/skills)** `⭐ 946` `updated ≤30d` Nemo Skills is a pipeline collection for training, evaluating, and running inference on LLMs, supporting benchmarks from math and code to tool-calling and long-context tasks. <details><summary>More about</summary>

  It gives developers a unified, scalable way to measure and improve model capabilities across the exact benchmarks—like SWE-bench and LiveCodeBench—that define modern coding-agent performance.

  _Just what we needed: another thousand-GPU harness to prove that scaling up the thing we just vibe-coded still loses to a tired human on a Friday afternoon._

  `benchmarks` `evals` `inference` `llm-training` `nvidia`
  </details>

- **[dingo](https://github.com/migoxlab/dingo)** `⭐ 693` `updated ≤30d` Dingo is a Python toolkit and SaaS platform for evaluating the quality of AI training data, models, and RAG applications using a mix of rule-based checks, LLM-as-a-judge, and agent-based assessments. <details><summary>More about</summary>

  It gives developers a structured way to catch hallucinations, data corruption, and quality regressions in datasets and RAG pipelines before they silently degrade production AI systems.

  _Finally, a tool to evaluate the evaluators, because apparently we needed a dedicated platform to confirm that our hallucination-detection prompts are also hallucinating._

  `data-quality` `evals` `llm-judge` `mcp` `rag`
  </details>

- **[Evalchemy](https://github.com/mlfoundations/evalchemy)** `⭐ 594` `updated ≤90d` A unified toolkit for evaluating post-trained language models across multiple benchmarks with support for local and API-based models. <details><summary>More about</summary>

  It gives developers a single CLI and standardized output to measure model quality across reasoning, coding, and chat benchmarks without wrestling with conflicting dependencies.

  _Yet another chance to discover that your carefully tuned model still can't solve a math problem that a diligent middle schooler would finish before lunch._

  `benchmarks` `evals` `llm` `reasoning`
  </details>

- **[OpenJudge](https://github.com/agentscope-ai/openjudge)** `⭐ 587` `updated ≤30d` OpenJudge is an open-source evaluation framework for AI applications that provides ready-to-use and scenario-specific graders to assess quality and generate reward signals for fine-tuning. <details><summary>More about</summary>

  It gives developers a structured workflow to collect test data, define grading rubrics, and run large-scale evaluations to iterate on and optimize their AI agents or chatbots.

  _Because the only thing more exhausting than building a brittle AI agent is building an entire second system just to grade how brittle the first one is._

  `agents` `ai-agents` `benchmark` `evals` `evaluation` `fine-tuning` `grading` `open-source`
  </details>

- **[YourBench](https://github.com/huggingface/yourbench)** `⭐ 444` `updated ≤90d` A Hugging Face framework that transforms source documents like PDFs and Word files into structured LLM evaluation datasets with configurable QA schemas. <details><summary>More about</summary>

  It lets developers benchmark models against their own private documentation and domain data instead of relying on generic public benchmarks.

  _Now you can scientifically prove that your RAG pipeline fails on your own docs just as much as it does on the MMLU._

  `benchmarking` `cli` `datasets` `huggingface` `llm-eval`
  </details>

- **[Ollama Benchmark](https://github.com/aidatatools/ollama-benchmark)** `⭐ 359` `updated ≤180d` A cross-platform CLI tool that benchmarks local LLMs running via Ollama by measuring throughput and tokens-per-second performance. <details><summary>More about</summary>

  It gives developers a quick, automated way to quantify the actual runtime performance of local models before committing hardware or time to a specific setup.

  _Yet another tool to help you scientifically confirm that the model you downloaded is too large for your laptop and too slow for your patience._

  `benchmark` `cli` `evaluation` `local-llm` `ollama`
  </details>

- **[mutahunter](https://github.com/codeintegrity-ai/mutahunter)** `⭐ 296` `updated >1y` An open-source, language-agnostic mutation testing tool that uses LLMs to automatically generate and evaluate code mutants against existing test suites. <details><summary>More about</summary>

  It leverages AI to find gaps in unit test coverage by injecting intelligent bugs, helping developers harden their test suites without manually dreaming up edge cases.

  _Just what the CI pipeline needed: an AI that deliberately breaks your code to see if your tests are paying attention, charging you fractions of a cent to remind you that your mocks are inadequate._

  `mutation-testing` `llm-testing` `eval` `quality-assurance` `cli`
  </details>

- **[LangFair](https://github.com/cvs-health/langfair)** `⭐ 257` `updated ≤180d` LangFair is a Python library for assessing bias and fairness in LLM use cases using a bring-your-own-prompts approach with output-based metrics. <details><summary>More about</summary>

  It allows developers to audit specific LLM implementations for fairness risks using their actual production prompts rather than relying on generic, static benchmarks.

  _You can now scientifically prove that your recommendation engine is biased before the compliance team starts asking why the internal tool only promotes people named Steve._

  `bias-detection` `fairness` `llm-evaluation` `python` `responsible-ai`
  </details>

- **[MathArena](https://github.com/eth-sri/matharena)** `⭐ 257` `updated ≤30d` A platform and evaluation harness for measuring LLM performance on recent math competitions and olympiads, including proof-based and final-answer benchmarks. <details><summary>More about</summary>

  Developers building or fine-tuning math-capable models can use this to run reproducible evals across AIME, IMO, and other contests with structured grading and reasoning traces.

  _Because nothing says production readiness like discovering your flagship model can’t solve a kangaroo competition problem written for 10-year-olds._

  `benchmarks` `evals` `llm` `math`
  </details>

- **[MixEval](https://github.com/jinjieni/mixeval)** `⭐ 256` `updated >1y` MixEval is a dynamic LLM evaluation suite and benchmark framework that correlates highly with Chatbot Arena rankings while running locally with significantly lower cost and time. <details><summary>More about</summary>

  It gives developers a fast, cost-effective way to rigorously evaluate and compare foundation models without relying on expensive, slow human-preference pipelines.

  _Just what we needed: another perfectly correlated benchmark to help us feel productive while debating whether our models are actually getting better or just better at taking tests._

  `arena-alternative` `benchmark` `llm-eval` `model-evaluation`
  </details>

- **[MedEvalKit](https://github.com/alibaba-damo-academy/medevalkit)** `⭐ 228` `updated ≤90d` MedEvalKit is a unified evaluation framework for benchmarking large medical language and multimodal models across a wide range of healthcare datasets and supported model architectures. <details><summary>More about</summary>

  It gives developers building medical AI a single harness to plug in new models, run standardized medical benchmarks, and compare results without stitching together disjointed eval scripts.

  _Because nothing says practical developer tooling like needing flash-attn, open_clip_torch, and an entire cloned LLaVA-NeXT repo just to find out your medical model still can’t read an X-ray._

  `benchmark` `evaluation` `llm` `medical-ai` `multimodal`
  </details>

- **[fiddler-auditor](https://github.com/fiddler-labs/fiddler-auditor)** `⭐ 190` `updated >1y` Fiddler Auditor is a Python library for evaluating and red-teaming large language and NLP models to identify weaknesses before production deployment. <details><summary>More about</summary>

  It lets ML and software teams programmatically audit LLMs for hallucinations, prompt injection vulnerabilities, and robustness using custom metrics and LangChain integration.

  _We now have a dedicated library to scientifically confirm that our models are confidently incorrect, which is slightly more formal than just asking it to count the letter 'r' in strawberry._

  `llm-eval` `red-teaming` `langchain` `observability` `ai-safety`
  </details>

- **[HPOlib2](https://github.com/automl/hpobench)** `⭐ 167` `updated ≤1y` HPOBench is a library providing containerized hyperparameter optimization benchmarks designed for reproducible multi-fidelity benchmarking. <details><summary>More about</summary>

  It allows developers and researchers to standardize performance testing across different HPO algorithms using isolated, reproducible environments.

  _Just what every engineer needed: a standardized way to quantify exactly how much time we're wasting tuning hyperparameters instead of writing features._

  `automl` `benchmarks` `evaluation` `hyperparameter-optimization` `ml-eval` `reproducibility`
  </details>

- **[Plexiglass](https://github.com/safellama/plexiglass)** `⭐ 154` `updated ≤180d` A CLI toolkit for testing LLMs against adversarial attacks like prompt injection and jailbreaking, while benchmarking models for security, bias, and toxicity. <details><summary>More about</summary>

  It gives developers a command-line workflow to scan and benchmark their LLM deployments for vulnerabilities before shipping them to production.

  _Finally, a tool to scientifically prove that your carefully aligned model will still tell users how to build a meth lab if they just ask nicely enough._

  `adversarial-attacks` `benchmarking` `cli` `evals` `llm-security`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[XRAG](https://github.com/docailab/xrag)** `⭐ 118` `updated ≤90d` XRAG is a benchmarking framework and evaluation toolkit designed to measure and analyze the performance of foundational components within Retrieval-Augmented Generation (RAG) systems. <details><summary>More about</summary>

  It gives developers a modular way to benchmark retrievers, embeddings, and LLMs across traditional and LLM-based metrics so they can stop guessing which RAG config actually works.

  _Because nothing says shipping velocity like spending three weeks tuning a retrieval pipeline only to realize you needed a benchmark suite to tell you what your gut already feared._

  `benchmark` `evaluation` `llm` `rag`
  </details>

- **[eval-view](https://github.com/hidai25/eval-view)** `⭐ 98` `updated ≤30d` An open-source regression testing tool for AI agents that snapshots behavior, diffs tool calls, and catches silent regressions in CI for frameworks like LangGraph, CrewAI, and OpenAI. <details><summary>More about</summary>

  It gives developers a Playwright-style safety net for agent behavior, letting teams detect when a model update silently degrades tool choice or output quality before shipping to users.

  _We have finally built CI pipelines to catch when our autonomous agents quietly forget how to do the jobs we already forgot how to do ourselves._

  `agent-testing` `regression` `eval` `ci` `langgraph`
  </details>

- **[ai-evaluation](https://github.com/future-agi/ai-evaluation)** `⭐ 96` `updated ≤30d` An SDK and evaluation framework providing 72 local metrics, guardrail scanners, and LLM-as-judge capabilities to measure and monitor the quality of AI workflows and LLM outputs. <details><summary>More about</summary>

  It gives developers a unified API to catch hallucinations, validate function calls, and enforce safety guardrails locally before bad outputs reach production.

  _You can now fail your own evals with mathematical precision while your model confidently explains why 'stop all medications' is actually sound medical advice._

  `evals` `llm-ops` `testing` `sdk` `guardrails`
  </details>

- **[simulate-sdk](https://github.com/future-agi/simulate-sdk)** `⭐ 56` `updated ≤30d` A Python SDK for simulating and testing voice and text AI agents against persona-driven scenarios, with integrated evaluation and audio recording capabilities. <details><summary>More about</summary>

  It lets developers run automated, multi-turn simulations of their agents before deployment, bridging the gap between unit tests and unpredictable real-world user interactions.

  _You can now unit-test the vibes and tone of a simulated customer named Alice, ensuring your agent sounds adequately empathetic before it inevitably hallucinates a refund policy._

  `testing` `evals` `voice-ai` `simulation` `sdk`
  </details>

- **[skill-optimizer](https://github.com/fastxyz/skill-optimizer)** `⭐ 49` `updated ≤30d` A Docker-based workbench and CLI for benchmarking, evaluating, and optimizing AI agent skills across multiple LLMs via OpenRouter. <details><summary>More about</summary>

  It lets developers author deterministic eval suites and measure skill reliability across models before shipping agent behaviors to production.

  _You now have the infrastructure to scientifically prove that your agent’s PDF-splitting skill fails 40% of the time, and yet you’ll still ship it on Friday._

  `evals` `skills` `cli` `llm-eval` `openrouter`
  </details>

- **[futureagi-sdk](https://github.com/future-agi/futureagi-sdk)** `⭐ 46` `updated ≤30d` An open-source SDK for Python and TypeScript that provides automated AI evaluations, prompt management, observability, and sub-100ms guardrails for production AI systems. <details><summary>More about</summary>

  It gives developers a unified code-first interface to version prompts, run automated evaluations with LLM-as-judge, and catch hallucinations before they reach users.

  _You still have to write the prompts, manage the datasets, and interpret the eval results, but now you can do it all with sub-100ms latency while wondering why your agent still hallucinated that refund policy._

  `evals` `observability` `prompt-management` `sdk` `guardrails`
  </details>

- **[semantic-coverage](https://github.com/aashirpersonal/semantic-coverage)** `⭐ 12` `updated ≤180d` A tool that visualizes user queries and document embeddings to identify knowledge gaps, blind spots, and hallucination triggers in RAG vector stores. <details><summary>More about</summary>

  It applies a code-coverage-style mindset to RAG pipelines, helping developers find missing documentation and data drift before users hit empty retrieval results.

  _We’ve successfully invented test coverage for vector databases, so you can now feel guilty about unseen semantic blind spots instead of just wondering why the bot is hallucinating._

  `rag` `eval` `observability` `vector-db`
  </details>

- **[RagTune](https://github.com/metawake/ragtune)** `⭐ 11` `updated ≤90d` A CLI tool for debugging, benchmarking, and monitoring the retrieval layer of RAG pipelines with support for multiple vector stores and CI/CD integration. <details><summary>More about</summary>

  It gives developers concrete metrics like Recall@K and NeedleCoverage@K to catch retrieval regressions before they silently break production AI features.

  _Yet another reminder that your fancy LLM is only as smart as the five chunks of text your vector database decided to forget._

  `cli` `debugging` `evals` `rag` `vector-search`
  </details>

- **[AgentBench](https://github.com/agentbench/agentbench)** `⭐ 3` `updated ≤90d` A benchmark tool that scores AI agent setups across 40 real-world tasks in 7 domains using pure rule-based checks and per-tool-call tracing. <details><summary>More about</summary>

  It lets developers measure how much their specific agent configuration, prompts, and tooling choices actually matter compared to just swapping models.

  _Finally, a scientific way to prove that your colleague's 'optimized' agent config is just 30 points of prompt snake oil._

  `agent` `benchmark` `eval` `tooling`
  </details>

- **[llm-council](https://github.com/elhamid/llm-council)** `⭐ 3` `updated ≤90d` A local web app that sends queries to multiple LLMs via OpenRouter, has them review and rank each other's responses anonymously, and synthesizes a final answer via a designated Chairman model. <details><summary>More about</summary>

  Developers can compare model reasoning, reduce provider bias, and audit decision traces when evaluating LLM outputs for complex technical questions.

  _Because nothing says 'confident engineering decision' like outsourcing your judgment to a committee of language models that rank each other in a blind peer review._

  `llm-eval` `multi-model` `local-tool` `openrouter`
  </details>

- **[AICodeSlopMonitor](https://github.com/marcoramilli/slopcodemonitor.ai)** `⭐ 0` `updated ≤30d` A daily automated scanner that analyzes trending GitHub repositories to detect and score AI-generated code patterns using the SynthScan fingerprint engine. <details><summary>More about</summary>

  It provides developers and maintainers with visibility into the prevalence of low-quality AI-generated 'slop' within popular open-source projects.

  _We've reached the point where we need automated tools to tell us how much of the code was written by the very tools we bought to save us time._

  `ai-detection` `code-analysis` `code-quality` `github-scanner`
  </details>

- **[SynthScan](https://github.com/marcoramilli/synthscan)** `⭐ 0` `updated ≤30d` SynthScan is a GitHub Action and local scanner that detects AI-generated code patterns in a repository using a configurable set of rules and reports a normalized 'Synthetic Code Score'. <details><summary>More about</summary>

  It gives teams a quantifiable heuristic to audit their codebase for AI-generated boilerplate and stylistic patterns that often accompany synthetic code.

  _We have finally reached the point where we need automated tools to determine if our codebase was written by the very tools we just mandated everyone use._

  `ai-detection` `code-quality` `code-review` `github-actions`
  </details>

- **[AGI-Eval](https://agi-eval.cn/mvp/home)** AGI-Eval is an evaluation benchmark and platform for assessing the capabilities of AI models on tasks related to artificial general intelligence. <details><summary>More about</summary>

  It provides developers and researchers with standardized metrics to understand where current models stand on complex reasoning and coding tasks.

  _Another benchmark to obsess over while your actual production code remains untested and your CI pipeline sits broken._

  `agi` `benchmark` `evals` `llm-evaluation`
  </details>

- **[ChatArena](https://www.chatarena.org)** ChatArena is a platform for evaluating and letting language models compete or collaborate in multi-agent conversational scenarios. <details><summary>More about</summary>

  It provides developers with a structured environment to benchmark, observe, and analyze the behavior of multi-agent LLM systems.

  _Yet another pristine sandbox where agents politely outperform each other while your actual production monolith remains terrified of a single unsupervised merge._

  `evaluation` `llm` `multi-agent` `research`
  </details>

- **[Design Arena](https://designarena.ai)** Design Arena is a crowdsourced benchmark platform that pits top AI models against the same creative design prompts and lets users vote on the best outputs to power public leaderboards. <details><summary>More about</summary>

  Developers evaluating which AI models to integrate for generating UI components, sites, or visual assets can use the leaderboards to make data-backed decisions rather than guessing based on marketing.

  _We now have a leaderboard for algorithmic taste, because apparently the only thing worse than arguing about design with a human is arguing about it with a leaderboard._

  `benchmark` `design` `eval` `model-comparison`
  </details>

- **[Fiddler AI](https://github.com/fiddler-labs)** Fiddler AI is a company GitHub organization hosting repos for AI observability, including fiddler-auditor for evaluating language models and tooling for ML monitoring. <details><summary>More about</summary>

  It provides developers with utilities to evaluate language models and observe ML behavior, fitting into the operational side of LLMOps workflows.

  _Yet another reminder that we now need a dedicated auditing tool just to figure out which of our black-box models is confidently hallucinating in production._

  `ai-observability` `llm-eval` `ml-monitoring`
  </details>

- **[Fiddler AI](https://www.fiddler.ai/llmops)** Fiddler AI is an enterprise LLMOps platform that provides observability, guardrails, and governance tools for monitoring and safeguarding production LLM and agentic applications. <details><summary>More about</summary>

  It gives developers and AI teams the dashboards and low-latency guardrails needed to detect hallucinations, prompt injections, and PII leaks in live AI systems.

  _Because if you aren't obsessively measuring hallucination rates and plotting 3D UMAP clusters of your agent's failures, are you even doing enterprise LLMOps?_

  `agentic` `enterprise` `guardrails` `llmops` `observability`
  </details>

- **[Keywords AI](https://respan.ai)** Respan is a hosted LLM engineering platform that unifies observability, evaluations, prompt optimization, and a gateway for AI agents and applications. <details><summary>More about</summary>

  It provides developers with end-to-end tracing, evaluation workflows, and prompt versioning to diagnose behavior shifts and manage model deployments without building custom infrastructure.

  _We’ve successfully abstracted the chaos of AI development into a dashboard that proves our agents are confidently drifting exactly on schedule._

  `evals` `gateway` `llm-ops` `observability` `prompt-optimization`
  </details>

- **[Literal AI](https://literalai.com)** LiteralAI is a platform for observing, evaluating, and managing LLM applications, included in the Awesome-LLMOps ecosystem. <details><summary>More about</summary>

  It provides developers with the observability and evaluation infrastructure needed to monitor, debug, and improve production LLM workflows.

  _Yet another dashboard promising to tame the chaos of your prompts, right alongside the five other LLMOps tools you bookmarked and never deployed._

  `evaluation` `llmops` `observability` `platform`
  </details>

- **[LLM-Leaderboard-streamlit](https://llm-leaderboard.streamlit.app)** A Streamlit web application that provides a leaderboard for comparing the performance of various large language models. <details><summary>More about</summary>

  It offers developers a quick, visual reference to benchmark model capabilities when selecting an LLM for their specific application.

  _Yet another arena where we obsess over 0.5% benchmark gains while our own production logs remain 90% hallucination errors._

  `benchmark` `eval` `leaderboard` `llm`
  </details>

- **[LM Arena](https://arena.ai)** A browser-based platform for chatting with and comparing multiple top LLMs side-by-side using crowdsourced benchmarks and leaderboards. <details><summary>More about</summary>

  Developers can quickly A/B test model behavior, reasoning, and code quality across providers before committing to an API or workflow.

  _Nothing builds confidence in your production prompt engineering quite like watching three frontier models confidently hallucinate in a browser tab at the same time._

  `benchmarking` `evals` `llm-comparison` `multi-model`
  </details>

- **[Maxim AI](https://www.getmaxim.ai)** Maxim AI is an end-to-end evaluation and observability platform for AI agents, providing infrastructure for prompt experimentation, agent simulation, and production monitoring. <details><summary>More about</summary>

  It allows engineering and product teams to systematically test, evaluate, and monitor AI agent quality across frameworks like LangChain and CrewAI without building custom scripts.

  _Because nothing says 'accelerating development' like spending three days configuring the dashboard that measures how fast you're building the thing._

  `agents` `evals` `llm-gateway` `observability`
  </details>

- **[Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)** A Hugging Face Space that tracks, ranks, and evaluates open large language models and chatbots. <details><summary>More about</summary>

  Developers building on local or open models can reference a centralized benchmark to compare model performance before integrating them into their stack.

  _Another leaderboard to consult religiously while pretending that a 0.2-point accuracy bump will finally fix your hallucinations._

  `benchmark` `evaluation` `huggingface` `llm`
  </details>

- **[Parea AI](https://www.parea.ai)** Parea AI is a platform for experiment tracking, human annotation, and observability designed for teams building and deploying LLM applications. <details><summary>More about</summary>

  It provides the evaluation infrastructure and SDKs needed to test prompt changes, track regressions, and collect human feedback on production AI systems.

  _Another platform promising to solve the 'which prompt regression broke production' mystery, ensuring you can now generate graphs about your AI's failure modes instead of just crying about them._

  `evals` `experiment-tracking` `llmops` `observability`
  </details>

- **[PromptLayer 🍰](https://promptlayer.com)** A platform for versioning, testing, and monitoring prompts and AI agents, featuring evaluation tools, tracing, and a visual editor for collaboration. <details><summary>More about</summary>

  It provides developers with regression testing and observability for LLM prompts and agents, moving beyond manual prompt tweaking into structured iteration.

  _Finally, a dedicated SaaS layer to manage the existential dread of debugging a prompt that worked yesterday but hallucinates today._

  `agents` `evals` `llmops` `monitoring` `prompt-management`
  </details>

- **[Root Signals](https://scorable.ai)** Scorable is a SaaS platform for creating custom AI judges and running evaluations to monitor and improve the quality of LLM application outputs in production. <details><summary>More about</summary>

  It allows developers to replace manual prompt testing and unreliable self-evaluation with calibrated, automated scoring that can block hallucinations and integrate into CI pipelines.

  _Just when you thought 'vibe coding' was a sustainable methodology, you now need a panel of automated AI judges to tell you that your AI's vibes are legally actionable._

  `ai-quality` `guardrails` `llm-evals` `monitoring`
  </details>

- **[varies](https://www.swebench.com)** A leaderboard website tracking and comparing the performance of AI coding agents on the SWE-bench benchmark of real-world software engineering tasks. <details><summary>More about</summary>

  It provides developers with empirical data on which models and agents can actually resolve real GitHub issues, moving the conversation from marketing claims to reproducible benchmarks.

  _Finally, a place to scientifically prove that your AI intern is worse at fixing bugs than the one your coworker is bragging about on Slack._

  `benchmarks` `coding-agents` `evals` `leaderboard`
  </details>

- **[VibeDoctor](https://vibedoctor.io)** A security and code quality scanner that runs checks across 15 areas and 129+ rules against AI-generated codebases, offering fix prompts and MCP integration for IDEs. <details><summary>More about</summary>

  It provides a pragmatic workflow to catch vulnerabilities, secrets, and code smells in AI-generated output before production, integrating directly with GitHub, CI, and AI coding tools.

  _Your AI wrote the code, your AI reviewed the code, and now a third AI-driven scanner checks the result, leaving you to wonder if anyone is actually writing software anymore._

  `ai-generated-code` `code-quality` `mcp` `scanner` `security`
  </details>