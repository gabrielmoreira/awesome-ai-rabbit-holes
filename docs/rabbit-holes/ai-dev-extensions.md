# AI Developer Extensions

Memory layers, testing add-ons, UI/workflow boosters, and host-side integrations that extend another AI developer tool rather than being the primary assistant themselves.

## Tools & Resources

- **[claude-task-master](https://github.com/eyaltoledano/claude-task-master)** `⭐ 27k` `updated ≤30d` An AI-powered task management system that integrates as an MCP server or CLI to break down requirements, manage dependencies, and orchestrate development tasks within AI coding environments like Cursor, Claude Code, and Windsurf. <details><summary>More about</summary>

  It gives AI coding assistants structured memory and project-level context, helping them handle multi-step features without losing track of the plan.

  _You now have a dedicated task manager to organize the hallucinations of the AI assistant that is supposedly organizing your own work._

  `task-management` `mcp` `cursor` `cli` `context-engineering`
  </details>

- **[Claudia](https://github.com/winfunc/opcode)** `⭐ 21.7k` `updated ≤1y` A Tauri-based desktop GUI for Claude Code that adds project/session management, custom agent creation, MCP server configuration, usage analytics, and session checkpoints. <details><summary>More about</summary>

  It gives developers a visual control center for Claude Code sessions, agents, and context files without living entirely in the terminal.

  _We’ve successfully built a desktop wrapper so we can agonize over our token spend and agent runs in 4K instead of just reading the CLI output._

  `agents` `claude-code` `gui` `mcp` `tauri`
  </details>

- **[cmux](https://github.com/manaflow-ai/cmux)** `⭐ 16.2k` `updated ≤30d` A macOS terminal built on Ghostty that adds vertical tabs, notification rings, and an in-app browser specifically designed for managing multiple AI coding agent sessions. <details><summary>More about</summary>

  It provides a dedicated UI for developers running concurrent CLI agents like Claude Code and OpenCode, surfacing notifications and status updates so you don't have to poll background processes manually.

  _We have officially entered the era of needing a specialized terminal emulator just to manage the overwhelming vortex of autonomous agents we've spawned across our desktops._

  `terminal` `macos` `ghostty` `cli` `coding-agents`
  </details>

- **[Infracost](https://github.com/infracost/infracost)** `⭐ 12.3k` `updated ≤30d` Infracost is a CLI and CI/CD integration that generates cloud cost estimates and FinOps best practices for Terraform resources directly in pull requests and the terminal. <details><summary>More about</summary>

  It allows engineers to see the financial impact of infrastructure changes before they merge, integrating cost awareness directly into the standard code review workflow.

  _We have successfully shifted the existential dread of unexpected cloud bills leftward, ensuring you now watch your budget die in a pull request comment instead of a monthly invoice._

  `ci-cd` `cloud-cost` `devops` `finops` `terraform`
  </details>

- **[OneCLI](https://github.com/onecli/onecli)** `⭐ 2.1k` `updated ≤30d` An open-source gateway that stores API credentials securely and transparently injects them into outbound HTTP requests made by AI agents. <details><summary>More about</summary>

  It centralizes secret management for AI workflows, letting developers avoid hardcoding API keys across multiple agents and providing a single place to rotate credentials and audit usage.

  _Finally, a dedicated vault to manage the rapidly multiplying API keys required to keep your twelve concurrent coding agents from accidentally exfiltrating your entire cloud infrastructure._

  `agents` `infrastructure` `mcp` `secrets` `security`
  </details>

- **[Claude Code Tools](https://github.com/pchalasani/claude-code-tools)** `⭐ 1.8k` `updated ≤30d` A CLI toolkit and plugin suite that provides productivity tools, skills, hooks, and integrations for Claude Code and other terminal-based coding agents. <details><summary>More about</summary>

  It extends the capabilities of CLI coding agents with session management, voice control, Google Workspace integrations, and safety hooks to streamline the terminal-based AI development workflow.

  _We have now reached the point where we need a dedicated toolkit to organize the plugins, hooks, and skills we use to manage the agent that writes our code._

  `claude-code` `cli` `plugins` `skills` `tmux`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[Cursor Watchful Headers](https://github.com/johnbenac/cursor-watchful-headers)** `⭐ 51` `updated ≤1y` A Python file watcher that automatically injects and maintains consistent headers across project files while keeping a .cursorrules project tree clean for LLM context. <details><summary>More about</summary>

  It automates the grunt work of header consistency and shapes project context so Cursor's AI sees a focused tree instead of a noisy dump of build artifacts.

  _We have officially reached the point where we need background scripts to curate the context window for the AI that is already writing the code we no longer read._

  `context-engineering` `cursor` `cursorrules` `file-watcher`
  </details>

- **[OpenCastle](https://github.com/monkilabs/opencastle)** `⭐ 43` `updated ≤30d` A CLI tool that sets up multi-agent orchestration, specialist agents, and reusable skills for AI coding assistants including GitHub Copilot, Cursor, Claude Code, and Windsurf. <details><summary>More about</summary>

  It lets developers decompose tasks across specialist agents and run them interactively in the IDE or as batch jobs via the Convoy Engine, with cost-aware model routing and built-in quality gates.

  _You now have a panel of AI agents that can review, dispute, and vote on each other’s output, turning your solo repo into a corporate committee that never goes home._

  `cli` `copilot` `multi-agent` `orchestration` `skills`
  </details>

- **[cortex](https://github.com/cdeust/cortex)** `⭐ 26` `updated ≤30d` A persistent memory engine and MCP server for Claude Code that uses neuroscience-inspired mechanisms to store, consolidate, and retrieve long-term project context using PostgreSQL and pgvector. <details><summary>More about</summary>

  It solves the session-amnesia problem in Claude Code by automatically capturing architecture decisions, debugging sessions, and code context so developers don't have to re-explain their entire project every time they open a new tab.

  _We have now reached the point where we are reverse-engineering the human hippocampus and wiring it into pgvector just so our coding assistant can remember that we decided against event sourcing three weeks ago._

  `claude-code` `memory` `mcp` `neuroscience` `context-retrieval`
  </details>

- **[EchoCoding](https://github.com/launsion-boop/echocoding)** `⭐ 25` `updated ≤30d` EchoCoding adds sound effects, ambient audio, TTS, and voice input to AI coding agents like Claude Code, Cursor, and Windsurf via CLI hooks and MCP tools. <details><summary>More about</summary>

  It gives developers audio-based spatial awareness of their agent's state and enables hands-free voice interaction during coding sessions.

  _Your AI agent now has a sonic personality and expects spoken answers, turning quiet debugging into a fully voice-acted theatre production._

  `agent-extension` `audio` `cli` `mcp` `voice`
  </details>

- **[claude-engram](https://github.com/20alexl/claude-engram)** `⭐ 15` `updated ≤30d` A persistent memory and session intelligence system for Claude Code that hooks into the CLI lifecycle to automatically capture decisions, errors, and context, then surfaces relevant memories across sessions via an MCP server. <details><summary>More about</summary>

  It aims to solve the context-window amnesia problem by automatically injecting past mistakes and decisions into current coding sessions, reducing repeated errors and improving continuity.

  _We have finally built a tool that remembers every time you tried to fix the same bug three different ways, just in case you wanted to feel bad about it 10 sessions later._

  `claude-code` `memory` `mcp` `hooks` `context`
  </details>

- **[mureo](https://github.com/logly/mureo)** `⭐ 6` `updated ≤30d` A local-first Python framework that lets AI agents like Claude Code and Cursor autonomously analyze and operate Google Ads, Meta Ads, Search Console, and GA4 accounts using a strategy file and a persistent knowledge base. <details><summary>More about</summary>

  It allows developers to hand off tedious ad-account diagnostics and optimizations to local agents while keeping credentials on their own machine and enforcing business logic via a STRATEGY.md file.

  _Yet another breakthrough proving that the singularity will be spent debugging OAuth flows so an agent can tell us we wasted ¥31,800 on our own brand terms._

  `ad-ops` `mcp` `local-first` `marketing-automation` `cli`
  </details>

- **[Agentic Engineering Framework](https://github.com/dimitrigeelen/agentic-engineering-framework)** `⭐ 5` `updated ≤30d` A governance framework that enforces task traceability, structural gates, and audit trails for AI coding agents like Claude Code, Cursor, and Copilot via CLI tooling and hooks. <details><summary>More about</summary>

  It replaces prompt-based 'please be careful' instructions with structural enforcement to prevent agents from making untraced edits, destructive git commands, or context-exhausting runs.

  _We have finally built the bureaucratic approval layer for our AI agents, proving that no matter how advanced the intelligence, it still eventually reports to a middle manager named fw._

  `agent-infrastructure` `audit-trail` `cli` `governance`
  </details>

- **[playwright-praman](https://github.com/mrkanitkar/playwright-praman)** `⭐ 5` `updated ≤30d` A Playwright plugin that adds SAP UI5 runtime awareness and AI agent-driven test generation for enterprise SAP and S/4HANA applications. <details><summary>More about</summary>

  It lets SAP QA and developer teams describe business processes in plain language and get resilient, self-healing Playwright tests that survive UI5 upgrades and theme changes.

  _Finally, a tool that automates the part of enterprise SAP testing where you pretend AI agents are writing your tests while you manually fix the selectors they break._

  `playwright` `sap` `ui5` `test-automation` `ai-agent`
  </details>

- **[context-memory](https://github.com/erebusenigma/context-memory)** `⭐ 4` `updated ≤90d` A SQLite-backed memory plugin for Claude Code that persists session context, decisions, and code snippets across terminal sessions with full-text search. <details><summary>More about</summary>

  It eliminates the ephemeral nature of Claude Code sessions by allowing developers to recall past debugging sessions, architectural decisions, and code patterns months after they happened.

  _We have finally solved the problem of Claude forgetting everything by building a database to remember everything, which means we can now spend even more time debugging the same auth bug across an infinite timeline._

  `claude-code` `memory` `plugin` `sqlite` `context`
  </details>

- **[tailtest-cline](https://github.com/avansaber/tailtest-cline)** `⭐ 0` `updated ≤30d` A Cline plugin that combines an MCP server, .clinerules pack, and Memory Bank integration to automatically generate and run tests whenever the AI agent edits source code across 8+ supported editors. <details><summary>More about</summary>

  It bakes automated testing and adversarial checks directly into the Cline agent workflow, reducing the friction of manually verifying AI-generated changes in supported IDEs.

  _We have now reached the point where we need a dedicated test framework to verify the work of the thing that just overwrote our code, and it comes with an R1-R15 rule layer to keep the chaos organized._

  `cline` `testing` `mcp` `automation` `rules`
  </details>

- **[`llms.txt`](https://awesome-copilot.github.com/llms.txt)** A community-driven hub of custom agents, instructions, skills, and learning resources designed to extend and customize GitHub Copilot across various domains and workflows. <details><summary>More about</summary>

  It provides developers with reusable configurations and specialized personas that allow Copilot to handle specific tasks like Azure IaC, accessibility testing, and .NET upgrades without starting from scratch.

  _You can now procrastinate on actual coding by spending three hours selecting the perfect combination of agents, skills, and instructions to automate a five-minute task._

  `agents` `extensions` `github-copilot` `mcp` `skills`
  </details>

- **[Applitools](https://applitools.com)** Applitools is an AI-powered end-to-end testing platform that uses visual AI to automate functional, visual, accessibility, and cross-browser testing for web, mobile, and PDF interfaces. <details><summary>More about</summary>

  It allows developers and QA teams to validate UI changes and catch visual regressions across complex applications without writing or maintaining brittle pixel-based assertions.

  _Because nothing says 'confident deployment' like praying a proprietary AI model trained on four billion screens agrees with your designer's latest 2px margin tweak._

  `e2e` `enterprise` `qa` `testing` `visual-ai`
  </details>

- **[Codacy](https://www.codacy.com)** A SaaS platform that enforces code quality, security, and AI-specific coding policies across IDEs, Git workflows, and coding agents with automated reviews and guardrails. <details><summary>More about</summary>

  It lets teams standardize coding standards and security policies across human and AI-generated code, aiming to reduce the manual overhead of reviewing agent output.

  _Your AI agent can now generate insecure code at machine speed, while Codacy stands by to politely explain why you shouldn't merge it._

  `ai-policies` `code-quality` `code-review` `guardrails` `security`
  </details>

- **[ContextQA](https://contextqa.com)** ContextQA is an enterprise-focused AI testing platform that auto-generates UI, API, and backend tests, heals broken selectors, and validates AI agent behavior including hallucination detection. <details><summary>More about</summary>

  It integrates directly with developer workflows via MCP in Cursor and Claude Code, allowing teams to generate and run test suites in plain English without leaving their IDE.

  _We have finally automated the automation, meaning the only thing left for developers to do is argue with an AI about whether the AI testing the other AI is hallucinating._

  `ai-agents` `enterprise` `mcp` `qa` `testing`
  </details>

- **[dbForge AI Assistant](https://www.devart.com/dbforge/ai-assistant)** dbForge AI Assistant is a commercial AI add-on integrated into the dbForge database IDE suite that converts natural language to SQL, optimizes queries, and troubleshoots code across SQL Server, MySQL, Oracle, and PostgreSQL. <details><summary>More about</summary>

  It allows database developers and administrators to generate context-aware SQL queries and optimize performance directly within their existing dbForge IDE workflow without switching tools.

  _Yet another opportunity to watch a $9.95/month chatbot wrap your schema metadata in a polite conversation while you wonder if you still need to know what a JOIN actually does._

  `ai-assistant` `database` `ide-extension` `sql`
  </details>

- **[DeployRamp](https://www.deployramp.com)** An AI-powered feature flag management platform that scans pull requests for risky code changes, wraps them in feature flags, monitors rollouts, and automates cleanup. <details><summary>More about</summary>

  It automates the risky parts of shipping code by detecting dangerous changes in PRs and managing the flag lifecycle, reducing the need for manual deployment oversight.

  _We've successfully automated the fear of deploying code so thoroughly that 'manual flag cleanup' is now considered a tragic career setback._

  `automation` `ci-cd` `devops` `feature-flags`
  </details>

- **[Dosu](https://dosu.dev)** Dosu is a knowledge infrastructure product that captures context from coding agent sessions and tool integrations to automatically maintain documentation and improve agent performance. <details><summary>More about</summary>

  It provides a shared memory layer and MCP server that allows coding agents to access consistent team context, reducing token usage and improving implementation consistency across sessions.

  _We have finally solved the problem of stale documentation by ensuring our agents quietly document their own hallucinations directly into the repo's permanent record._

  `agent-memory` `context-engineering` `knowledge-management` `mcp`
  </details>

- **[Katalon Studio](https://katalon.com)** Katalon True Platform is an AI-augmented testing platform that uses a suite of agents to analyze requirements, generate and execute test cases, and report on software quality across web, mobile, API, and desktop applications. <details><summary>More about</summary>

  It offers developers and QA teams an agentic workflow to automate the full testing lifecycle—from requirement analysis to production monitoring—without requiring deep automation scripting.

  _Yet another 'agentic' platform promising to automate the boring testing work, ensuring you can spend 100% of your time arguing with the AI about why the test it just wrote doesn't actually cover the edge case you whispered about three days ago._

  `agents` `automation` `ci-cd` `qa` `testing`
  </details>

- **[Launchable](https://www.cloudbees.com/capabilities/cloudbees-smart-tests)** CloudBees Smart Tests is an AI-powered CI/CD add-on that analyzes test behavior to run only the most relevant tests for a given code change, reducing flaky failures and cutting CI execution time. <details><summary>More about</summary>

  It integrates with existing pipelines to prioritize tests that are likely to fail, helping developers get faster feedback without rewriting their test suites or replacing their current CI tools.

  _Now your CI pipeline is powered by an AI that confidently skips the one test that would have caught the bug you are about to ship._

  `ai-test-intelligence` `ci-cd` `devops` `testing`
  </details>

- **[Mabl](https://www.mabl.com)** mabl is an AI-native, enterprise-focused test automation platform that uses agentic AI to build, run, and auto-heal end-to-end, mobile, API, and AI application tests. <details><summary>More about</summary>

  It positions itself as the quality safety net for teams shipping code at the speed of modern AI coding agents, aiming to eliminate test maintenance debt.

  _Just when you thought you could finally sprint at AI-agent velocity, you realize you now need an 'agentic testing' platform to verify that your autonomous code agents aren't hallucinating regressions faster than you can review them._

  `agentic-ai` `automation` `enterprise` `qa` `testing`
  </details>

- **[MemClaw](https://memclaw.me/en/claw)** MemClaw is a memory extension for the OpenClaw assistant that adds persistent, project-scoped memory, isolated workspaces, and team collaboration features. <details><summary>More about</summary>

  It allows developers juggling multiple projects to maintain clean, separated context in OpenClaw and recall entire project histories with a single prompt instead of re-explaining requirements.

  _We have now reached the point where our AI assistants need their own external memory modules to remember what they were doing five minutes ago._

  `context` `memory` `openclaw` `productivity`
  </details>

- **[Meticulous](https://www.meticulous.ai)** Meticulous is a frontend testing platform that records user interactions in development and staging environments to auto-generate and maintain visual end-to-end browser tests. <details><summary>More about</summary>

  It promises exhaustive regression coverage without the maintenance burden of manually written tests, fitting naturally into CI workflows for React, Vue, Angular, and SvelteKit applications.

  _We have successfully automated the creation of the tests we were too burnt out to write, meaning we can now ship AI-generated code at machine speed with a safety net we never have to look at._

  `ci-cd` `frontend` `qa` `testing` `visual-regression`
  </details>

- **[Pieces.app](https://pieces.app)** Pieces is a local-first AI companion that captures and indexes context across browsers, IDEs, and collaboration tools to provide persistent memory for developers and LLM integrations. <details><summary>More about</summary>

  It builds an OS-level long-term memory layer that lets developers and their AI tools recall code snippets, docs, and context across different apps without manual organization.

  _We have finally achieved the nightmare scenario where your operating system remembers everything you did in the browser, IDE, and Slack, but you still cannot remember why you wrote that function six months ago._

  `context` `local-ai` `memory` `productivity`
  </details>

- **[Rainforest QA](https://www.rainforestqa.com)** A no-code, AI-powered platform for automating end-to-end UI tests that uses visual checks and self-healing to reduce maintenance overhead. <details><summary>More about</summary>

  It integrates directly into CI/CD pipelines and CLIs to let developers offload brittle UI test maintenance to AI, aiming to increase release confidence without specialized QA hiring.

  _Now you can outsource your test fragility to an AI that confidently 'self-heals' your suite right before it deploys a broken modal to production._

  `ai-qa` `ci-cd` `no-code` `qa` `testing`
  </details>

- **[Reflag](https://reflag.com)** A TypeScript-first feature flag platform with SDKs for React, Vue, Next, and Node, offering Linear and Slack integrations alongside a self-cleaning agent for flag removal. <details><summary>More about</summary>

  It streamlines feature rollouts and cleanup for SaaS teams while claiming to integrate directly with agentic workflows and IDEs like Cursor.

  _We have finally reached the point where the flags themselves are unionized and demand an agent to negotiate their retirement._

  `agent-ready` `developer-tools` `feature-flags` `mcp` `typescript`
  </details>

- **[SpecStory](https://specstory.com)** A tool that automatically captures, stores, and searches AI coding conversations from IDEs and CLIs like Cursor, Copilot, Claude Code, and Codex. <details><summary>More about</summary>

  It preserves the decision-making context and rationale behind code changes, allowing developers to search their history and onboard teammates faster.

  _We have successfully solved the problem of losing context with our AI assistants by creating yet another subscription to manage the context of our context-generating assistants._

  `ai-history` `context-management` `cursor` `developer-productivity` `memory`
  </details>

- **[Supercode.sh](https://supercode.sh)** A browser extension designed to enhance the capabilities of the Cursor IDE with full-cycle AI coding features. <details><summary>More about</summary>

  It promises to layer additional automation and workflow enhancements onto an existing AI coding environment.

  _We have reached the point where we need extensions to turbocharge the tool that was already turbocharging our coding workflow._

  `ai-coding` `cursor` `extension` `ide`
  </details>

- **[TestRigor](https://testrigor.com)** A SaaS test automation platform that uses generative AI to translate plain English instructions into end-to-end UI, mobile, and API tests. <details><summary>More about</summary>

  It allows developers and QA teams to reduce test maintenance overhead by replacing fragile XPath-based scripts with natural language specs that are less likely to break on UI changes.

  _Your QA team no longer needs to pretend they enjoy debugging Selenium timeouts, but now they have to explain to the AI why 'click the thingy' didn't result in a passing build._

  `end-to-end` `generative-ai` `no-code` `qa` `testing`
  </details>

- **[Theneo.io](https://www.theneo.io)** An AI-native platform for generating and maintaining API documentation, portals, and changelogs by importing OpenAPI specs or Markdown. <details><summary>More about</summary>

  It automates the tedious cycle of writing and updating API docs, letting developers generate interactive references and changelogs from existing specs in seconds.

  _Another brilliant tool to solve the ancient problem of developers refusing to write documentation, this time by convincing an AI to do it instead._

  `ai-native` `api-docs` `developer-portal` `documentation`
  </details>