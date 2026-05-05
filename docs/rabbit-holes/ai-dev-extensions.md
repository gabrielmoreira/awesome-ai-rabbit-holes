# AI Developer Extensions

Memory layers, testing add-ons, UI/workflow boosters, and host-side integrations that extend another AI developer tool rather than being the primary assistant themselves.

## Tools & Resources

- **[claude-task-master](https://github.com/eyaltoledano/claude-task-master)** `⭐ 27k` `updated ≤30d` An AI-powered task management system that integrates as an MCP server or CLI to break down requirements, manage dependencies, and orchestrate development tasks within AI coding environments like Cursor, Claude Code, and Windsurf. <details><summary>More about</summary>

  It gives AI coding assistants structured memory and project-level context, helping them handle multi-step features without losing track of the plan.

  _You now have a dedicated task manager to organize the hallucinations of the AI assistant that is supposedly organizing your own work._

  `task-management` `mcp` `cursor` `cli` `context-engineering`
  </details>

- **[claudia](https://github.com/getasterisk/claudia)** `⭐ 21.7k` `updated ≤1y` A Tauri-based desktop GUI for Claude Code that adds project/session management, custom agent creation, MCP server configuration, usage analytics, and session checkpoints. <details><summary>More about</summary>

  It gives developers a visual control center for Claude Code sessions, agents, and context files without living entirely in the terminal.

  _We’ve successfully built a desktop wrapper so we can agonize over our token spend and agent runs in 4K instead of just reading the CLI output._

  `claude-code` `gui` `tauri` `agents` `mcp`
  </details>

- **[cmux](https://github.com/manaflow-ai/cmux)** `⭐ 16.2k` `updated ≤30d` A macOS terminal built on Ghostty that adds vertical tabs, notification rings, and an in-app browser specifically designed for managing multiple AI coding agent sessions. <details><summary>More about</summary>

  It provides a dedicated UI for developers running concurrent CLI agents like Claude Code and OpenCode, surfacing notifications and status updates so you don't have to poll background processes manually.

  _We have officially entered the era of needing a specialized terminal emulator just to manage the overwhelming vortex of autonomous agents we've spawned across our desktops._

  `terminal` `macos` `ghostty` `cli` `coding-agents`
  </details>

- **[infracost](https://github.com/infracost/infracost)** `⭐ 12.3k` `updated ≤30d` Infracost is a CLI and CI/CD integration that generates cloud cost estimates and FinOps best practices for Terraform resources directly in pull requests and the terminal. <details><summary>More about</summary>

  It allows engineers to see the financial impact of infrastructure changes before they merge, integrating cost awareness directly into the standard code review workflow.

  _We have successfully shifted the existential dread of unexpected cloud bills leftward, ensuring you now watch your budget die in a pull request comment instead of a monthly invoice._

  `terraform` `finops` `cloud-cost` `devops` `ci-cd`
  </details>

- **[onecli](https://github.com/onecli/onecli)** `⭐ 2.1k` `updated ≤30d` An open-source gateway that stores API credentials securely and transparently injects them into outbound HTTP requests made by AI agents. <details><summary>More about</summary>

  It centralizes secret management for AI workflows, letting developers avoid hardcoding API keys across multiple agents and providing a single place to rotate credentials and audit usage.

  _Finally, a dedicated vault to manage the rapidly multiplying API keys required to keep your twelve concurrent coding agents from accidentally exfiltrating your entire cloud infrastructure._

  `security` `secrets` `mcp` `infrastructure` `agents`
  </details>

- **[git-ai](https://github.com/acunniffe/git-ai)** `⭐ 1.8k` `updated ≤30d` A Git extension that automatically tracks and attributes AI-generated code lines to the specific agent, model, and session used to create them. <details><summary>More about</summary>

  It restores provenance and accountability to repositories polluted by agent-generated code, allowing developers to audit *why* a line was written, not just *who* committed it.

  _Finally, you can run git blame not to find the human who ruined the build, but to discover which specific hallucination-prone model you need to yell at in the logs._

  `git` `ai-attribution` `cli` `code-tracking` `blame`
  </details>

- **[claude-code-tools](https://github.com/pchalasani/claude-code-tools)** `⭐ 1.8k` `updated ≤30d` A CLI toolkit and plugin suite that provides productivity tools, skills, hooks, and integrations for Claude Code and other terminal-based coding agents. <details><summary>More about</summary>

  It extends the capabilities of CLI coding agents with session management, voice control, Google Workspace integrations, and safety hooks to streamline the terminal-based AI development workflow.

  _We have now reached the point where we need a dedicated toolkit to organize the plugins, hooks, and skills we use to manage the agent that writes our code._

  `cli` `claude-code` `plugins` `skills` `tmux`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[owlex](https://github.com/agentic-box/owlex)** `⭐ 109` `updated ≤90d` An MCP server that lets Claude Code run multi-agent deliberations by querying Codex, Gemini, OpenCode, and other models, then synthesizing a final answer. <details><summary>More about</summary>

  It gives developers a structured way to cross-check architecture decisions, debugging paths, and tricky design questions across multiple AI models without leaving their coding environment.

  _You now have a council of large language models that can argue with each other, so your code reviews are officially more bureaucratic than the teams that wrote the frameworks you depend on._

  `mcp` `multi-agent` `claude-code` `deliberation` `ai-review`
  </details>

- **[cursor-watchful-headers](https://github.com/johnbenac/cursor-watchful-headers)** `⭐ 51` `updated ≤1y` A Python file watcher that automatically injects and maintains consistent headers across project files while keeping a .cursorrules project tree clean for LLM context. <details><summary>More about</summary>

  It automates the grunt work of header consistency and shapes project context so Cursor's AI sees a focused tree instead of a noisy dump of build artifacts.

  _We have officially reached the point where we need background scripts to curate the context window for the AI that is already writing the code we no longer read._

  `cursor` `context-engineering` `file-watcher` `cursorrules`
  </details>

- **[opencastle](https://github.com/monkilabs/opencastle)** `⭐ 43` `updated ≤30d` A CLI tool that sets up multi-agent orchestration, specialist agents, and reusable skills for AI coding assistants including GitHub Copilot, Cursor, Claude Code, and Windsurf. <details><summary>More about</summary>

  It lets developers decompose tasks across specialist agents and run them interactively in the IDE or as batch jobs via the Convoy Engine, with cost-aware model routing and built-in quality gates.

  _You now have a panel of AI agents that can review, dispute, and vote on each other’s output, turning your solo repo into a corporate committee that never goes home._

  `multi-agent` `orchestration` `cli` `skills` `copilot`
  </details>

- **[cortex](https://github.com/cdeust/cortex)** `⭐ 26` `updated ≤30d` A persistent memory engine and MCP server for Claude Code that uses neuroscience-inspired mechanisms to store, consolidate, and retrieve long-term project context using PostgreSQL and pgvector. <details><summary>More about</summary>

  It solves the session-amnesia problem in Claude Code by automatically capturing architecture decisions, debugging sessions, and code context so developers don't have to re-explain their entire project every time they open a new tab.

  _We have now reached the point where we are reverse-engineering the human hippocampus and wiring it into pgvector just so our coding assistant can remember that we decided against event sourcing three weeks ago._

  `claude-code` `memory` `mcp` `neuroscience` `context-retrieval`
  </details>

- **[echocoding](https://github.com/launsion-boop/echocoding)** `⭐ 25` `updated ≤30d` EchoCoding adds sound effects, ambient audio, TTS, and voice input to AI coding agents like Claude Code, Cursor, and Windsurf via CLI hooks and MCP tools. <details><summary>More about</summary>

  It gives developers audio-based spatial awareness of their agent's state and enables hands-free voice interaction during coding sessions.

  _Your AI agent now has a sonic personality and expects spoken answers, turning quiet debugging into a fully voice-acted theatre production._

  `audio` `voice` `mcp` `cli` `agent-extension`
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

- **[agentic-engineering-framework](https://github.com/dimitrigeelen/agentic-engineering-framework)** `⭐ 5` `updated ≤30d` A governance framework that enforces task traceability, structural gates, and audit trails for AI coding agents like Claude Code, Cursor, and Copilot via CLI tooling and hooks. <details><summary>More about</summary>

  It replaces prompt-based 'please be careful' instructions with structural enforcement to prevent agents from making untraced edits, destructive git commands, or context-exhausting runs.

  _We have finally built the bureaucratic approval layer for our AI agents, proving that no matter how advanced the intelligence, it still eventually reports to a middle manager named fw._

  `governance` `cli` `agent-infrastructure` `audit-trail`
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

- **[context7](https://github.com/upstash/context7)** Context7 provides up-to-date, version-specific library documentation and code examples directly into AI coding tools like Cursor, Claude Code, and Windsurf. <details><summary>More about</summary>

  It reduces hallucinations and outdated code suggestions by supplying large language models with current, version-specific context for external libraries.

  _We have successfully engineered a system to feed documentation to the AI because apparently the human's job is now verifying if the bot read the changelog._

  `ai-coding-assistant` `context-retrieval` `documentation` `upstash`
  </details>

- **[ai-assistant](https://www.devart.com/dbforge/ai-assistant)** dbForge AI Assistant is a commercial AI add-on integrated into the dbForge database IDE suite that converts natural language to SQL, optimizes queries, and troubleshoots code across SQL Server, MySQL, Oracle, and PostgreSQL. <details><summary>More about</summary>

  It allows database developers and administrators to generate context-aware SQL queries and optimize performance directly within their existing dbForge IDE workflow without switching tools.

  _Yet another opportunity to watch a $9.95/month chatbot wrap your schema metadata in a polite conversation while you wonder if you still need to know what a JOIN actually does._

  `sql` `database` `ai-assistant` `ide-extension`
  </details>

- **[applitools.com](https://applitools.com)** Applitools is an AI-powered end-to-end testing platform that uses visual AI to automate functional, visual, accessibility, and cross-browser testing for web, mobile, and PDF interfaces. <details><summary>More about</summary>

  It allows developers and QA teams to validate UI changes and catch visual regressions across complex applications without writing or maintaining brittle pixel-based assertions.

  _Because nothing says 'confident deployment' like praying a proprietary AI model trained on four billion screens agrees with your designer's latest 2px margin tweak._

  `testing` `visual-ai` `qa` `e2e` `enterprise`
  </details>

- **[claw](https://memclaw.me/en/claw)** MemClaw is a memory extension for the OpenClaw assistant that adds persistent, project-scoped memory, isolated workspaces, and team collaboration features. <details><summary>More about</summary>

  It allows developers juggling multiple projects to maintain clean, separated context in OpenClaw and recall entire project histories with a single prompt instead of re-explaining requirements.

  _We have now reached the point where our AI assistants need their own external memory modules to remember what they were doing five minutes ago._

  `memory` `openclaw` `context` `productivity`
  </details>

- **[cloudbees-smart-tests](https://www.cloudbees.com/capabilities/cloudbees-smart-tests)** CloudBees Smart Tests is an AI-powered CI/CD add-on that analyzes test behavior to run only the most relevant tests for a given code change, reducing flaky failures and cutting CI execution time. <details><summary>More about</summary>

  It integrates with existing pipelines to prioritize tests that are likely to fail, helping developers get faster feedback without rewriting their test suites or replacing their current CI tools.

  _Now your CI pipeline is powered by an AI that confidently skips the one test that would have caught the bug you are about to ship._

  `ci-cd` `testing` `ai-test-intelligence` `devops`
  </details>

- **[contextqa.com](https://contextqa.com)** ContextQA is an enterprise-focused AI testing platform that auto-generates UI, API, and backend tests, heals broken selectors, and validates AI agent behavior including hallucination detection. <details><summary>More about</summary>

  It integrates directly with developer workflows via MCP in Cursor and Claude Code, allowing teams to generate and run test suites in plain English without leaving their IDE.

  _We have finally automated the automation, meaning the only thing left for developers to do is argue with an AI about whether the AI testing the other AI is hallucinating._

  `testing` `qa` `ai-agents` `mcp` `enterprise`
  </details>

- **[dosu.dev](https://dosu.dev)** Dosu is a knowledge infrastructure product that captures context from coding agent sessions and tool integrations to automatically maintain documentation and improve agent performance. <details><summary>More about</summary>

  It provides a shared memory layer and MCP server that allows coding agents to access consistent team context, reducing token usage and improving implementation consistency across sessions.

  _We have finally solved the problem of stale documentation by ensuring our agents quietly document their own hallucinations directly into the repo's permanent record._

  `knowledge-management` `mcp` `context-engineering` `agent-memory`
  </details>

- **[katalon.com](https://katalon.com)** Katalon True Platform is an AI-augmented testing platform that uses a suite of agents to analyze requirements, generate and execute test cases, and report on software quality across web, mobile, API, and desktop applications. <details><summary>More about</summary>

  It offers developers and QA teams an agentic workflow to automate the full testing lifecycle—from requirement analysis to production monitoring—without requiring deep automation scripting.

  _Yet another 'agentic' platform promising to automate the boring testing work, ensuring you can spend 100% of your time arguing with the AI about why the test it just wrote doesn't actually cover the edge case you whispered about three days ago._

  `qa` `testing` `agents` `automation` `ci-cd`
  </details>

- **[llms.txt](https://awesome-copilot.github.com/llms.txt)** A community-driven hub of custom agents, instructions, skills, and learning resources designed to extend and customize GitHub Copilot across various domains and workflows. <details><summary>More about</summary>

  It provides developers with reusable configurations and specialized personas that allow Copilot to handle specific tasks like Azure IaC, accessibility testing, and .NET upgrades without starting from scratch.

  _You can now procrastinate on actual coding by spending three hours selecting the perfect combination of agents, skills, and instructions to automate a five-minute task._

  `github-copilot` `agents` `skills` `mcp` `extensions`
  </details>

- **[pieces.app](https://pieces.app)** Pieces is a local-first AI companion that captures and indexes context across browsers, IDEs, and collaboration tools to provide persistent memory for developers and LLM integrations. <details><summary>More about</summary>

  It builds an OS-level long-term memory layer that lets developers and their AI tools recall code snippets, docs, and context across different apps without manual organization.

  _We have finally achieved the nightmare scenario where your operating system remembers everything you did in the browser, IDE, and Slack, but you still cannot remember why you wrote that function six months ago._

  `memory` `local-ai` `context` `productivity`
  </details>

- **[reflag.com](https://reflag.com)** A TypeScript-first feature flag platform with SDKs for React, Vue, Next, and Node, offering Linear and Slack integrations alongside a self-cleaning agent for flag removal. <details><summary>More about</summary>

  It streamlines feature rollouts and cleanup for SaaS teams while claiming to integrate directly with agentic workflows and IDEs like Cursor.

  _We have finally reached the point where the flags themselves are unionized and demand an agent to negotiate their retirement._

  `feature-flags` `typescript` `agent-ready` `mcp` `developer-tools`
  </details>

- **[specstory.com](https://specstory.com)** A tool that automatically captures, stores, and searches AI coding conversations from IDEs and CLIs like Cursor, Copilot, Claude Code, and Codex. <details><summary>More about</summary>

  It preserves the decision-making context and rationale behind code changes, allowing developers to search their history and onboard teammates faster.

  _We have successfully solved the problem of losing context with our AI assistants by creating yet another subscription to manage the context of our context-generating assistants._

  `context-management` `ai-history` `developer-productivity` `cursor` `memory`
  </details>

- **[supercode.sh](https://supercode.sh)** A browser extension designed to enhance the capabilities of the Cursor IDE with full-cycle AI coding features. <details><summary>More about</summary>

  It promises to layer additional automation and workflow enhancements onto an existing AI coding environment.

  _We have reached the point where we need extensions to turbocharge the tool that was already turbocharging our coding workflow._

  `cursor` `extension` `ide` `ai-coding`
  </details>

- **[testrigor.com](https://testrigor.com)** A SaaS test automation platform that uses generative AI to translate plain English instructions into end-to-end UI, mobile, and API tests. <details><summary>More about</summary>

  It allows developers and QA teams to reduce test maintenance overhead by replacing fragile XPath-based scripts with natural language specs that are less likely to break on UI changes.

  _Your QA team no longer needs to pretend they enjoy debugging Selenium timeouts, but now they have to explain to the AI why 'click the thingy' didn't result in a passing build._

  `testing` `qa` `generative-ai` `no-code` `end-to-end`
  </details>

- **[www.codacy.com](https://www.codacy.com)** A SaaS platform that enforces code quality, security, and AI-specific coding policies across IDEs, Git workflows, and coding agents with automated reviews and guardrails. <details><summary>More about</summary>

  It lets teams standardize coding standards and security policies across human and AI-generated code, aiming to reduce the manual overhead of reviewing agent output.

  _Your AI agent can now generate insecure code at machine speed, while Codacy stands by to politely explain why you shouldn't merge it._

  `code-quality` `ai-policies` `code-review` `security` `guardrails`
  </details>

- **[www.deployramp.com](https://www.deployramp.com)** An AI-powered feature flag management platform that scans pull requests for risky code changes, wraps them in feature flags, monitors rollouts, and automates cleanup. <details><summary>More about</summary>

  It automates the risky parts of shipping code by detecting dangerous changes in PRs and managing the flag lifecycle, reducing the need for manual deployment oversight.

  _We've successfully automated the fear of deploying code so thoroughly that 'manual flag cleanup' is now considered a tragic career setback._

  `feature-flags` `devops` `ci-cd` `automation`
  </details>

- **[www.mabl.com](https://www.mabl.com)** mabl is an AI-native, enterprise-focused test automation platform that uses agentic AI to build, run, and auto-heal end-to-end, mobile, API, and AI application tests. <details><summary>More about</summary>

  It positions itself as the quality safety net for teams shipping code at the speed of modern AI coding agents, aiming to eliminate test maintenance debt.

  _Just when you thought you could finally sprint at AI-agent velocity, you realize you now need an 'agentic testing' platform to verify that your autonomous code agents aren't hallucinating regressions faster than you can review them._

  `testing` `qa` `enterprise` `agentic-ai` `automation`
  </details>

- **[www.meticulous.ai](https://www.meticulous.ai)** Meticulous is a frontend testing platform that records user interactions in development and staging environments to auto-generate and maintain visual end-to-end browser tests. <details><summary>More about</summary>

  It promises exhaustive regression coverage without the maintenance burden of manually written tests, fitting naturally into CI workflows for React, Vue, Angular, and SvelteKit applications.

  _We have successfully automated the creation of the tests we were too burnt out to write, meaning we can now ship AI-generated code at machine speed with a safety net we never have to look at._

  `testing` `frontend` `visual-regression` `qa` `ci-cd`
  </details>

- **[www.rainforestqa.com](https://www.rainforestqa.com)** A no-code, AI-powered platform for automating end-to-end UI tests that uses visual checks and self-healing to reduce maintenance overhead. <details><summary>More about</summary>

  It integrates directly into CI/CD pipelines and CLIs to let developers offload brittle UI test maintenance to AI, aiming to increase release confidence without specialized QA hiring.

  _Now you can outsource your test fragility to an AI that confidently 'self-heals' your suite right before it deploys a broken modal to production._

  `qa` `testing` `ai-qa` `ci-cd` `no-code`
  </details>

- **[www.theneo.io](https://www.theneo.io)** An AI-native platform for generating and maintaining API documentation, portals, and changelogs by importing OpenAPI specs or Markdown. <details><summary>More about</summary>

  It automates the tedious cycle of writing and updating API docs, letting developers generate interactive references and changelogs from existing specs in seconds.

  _Another brilliant tool to solve the ancient problem of developers refusing to write documentation, this time by convincing an AI to do it instead._

  `api-docs` `documentation` `ai-native` `developer-portal`
  </details>