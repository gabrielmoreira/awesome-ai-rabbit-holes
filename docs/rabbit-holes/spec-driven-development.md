# Spec-Driven Development

Tooling where specifications are the primary artifact for planning, validation, repair, or governance.

## Tools & Resources

- **[spec-kit](https://github.com/github/spec-kit)** `⭐ 92.9k` `updated ≤30d` An open-source CLI toolkit and methodology from GitHub that formalizes spec-driven development, allowing developers to create executable specifications that guide AI coding agents. <details><summary>More about</summary>

  It provides a structured workflow and CLI ('specify') to define project constitutions and specs, aiming to replace 'vibe coding' with predictable, outcome-focused development when used alongside agents like Copilot.

  _We have officially circled back to writing requirements documents, except now we call them 'executable specs' and the compiler is a large language model with an attitude._

  `spec-driven` `cli` `github` `methodology` `copilot`
  </details>

- **[get-shit-done](https://github.com/gsd-build/get-shit-done)** `⭐ 60.5k` `updated ≤30d` A meta-prompting and spec-driven development system that adds context engineering, planning, and execution loops to Claude Code and other AI coding assistants. <details><summary>More about</summary>

  It solves context rot by decomposing projects into phases, running plans through fresh subagent contexts, and maintaining a structured spec loop so the assistant doesn't degrade as the window fills.

  _You installed a 60k-star system to manage the context window of the tool you installed to avoid writing code yourself, and you still feel behind on the roadmap._

  `spec-driven` `context-engineering` `claude-code` `meta-prompting` `subagents`
  </details>

- **[BMAD-METHOD](https://github.com/bmad-code-org/bmad-method)** `⭐ 48.4k` `updated ≤30d` A structured, open-source framework that provides specialized AI agents and scale-adaptive agile workflows to guide developers through the full lifecycle of software projects. <details><summary>More about</summary>

  It replaces ad-hoc prompting with a disciplined, spec-driven process featuring domain expert agents (PM, Architect, Developer) that adapt to project complexity from bug fixes to enterprise systems.

  _You now have 12 specialized AI personas to argue with about your architecture, ensuring you achieve agile enlightenment provided you can still remember how to write the code yourself._

  `spec-driven` `ai-agents` `agile` `workflow`
  </details>

- **[OpenSpec](https://github.com/fission-ai/openspec)** `⭐ 45.7k` `updated ≤30d` OpenSpec is a spec-driven development tool that adds a lightweight artifact layer (proposals, specs, design, tasks) for planning and validating features before delegating implementation to AI coding assistants. <details><summary>More about</summary>

  It forces human and AI to agree on structured specs and task checklists before code is written, reducing unpredictable results when using assistants across existing repos.

  _You now have a pristine folder of proposal.md, specs, and tasks.md documenting the feature that your AI assistant will still confidently misinterpret on the first three tries._

  `spec-driven` `planning` `context-engineering` `ai-workflow`
  </details>

- **[agents.md](https://github.com/agentsmd/agents.md)** `⭐ 21.8k` `updated ≤90d` AGENTS.md is a simple, open format defining a predictable file for providing context and instructions to coding agents within a repository. <details><summary>More about</summary>

  It standardizes how developers provide project-specific instructions to AI agents, acting as a README specifically designed for automated coding workflows.

  _We have officially reached the point where our AI agents require their own standardized documentation format just to navigate the chaotic instructions we wrote for ourselves._

  `agents` `spec` `context` `standards`
  </details>

- **[cc-sdd](https://github.com/gotalab/cc-sdd)** `⭐ 3.3k` `updated ≤90d` A spec-driven development harness that installs portable Agent Skills into Claude Code, Cursor, Copilot, and other AI coding agents to turn approved specs into long-running autonomous implementation. <details><summary>More about</summary>

  It gives teams a structured SDLC loop—discovery, requirements, design, tasks, and per-task review—that runs across eight different coding agents with the same 17-skill set.

  _You can now run an autonomous TDD loop with feature flags and root-cause auto-debug across eight different AI agents, which means your primary new job is deciding which agent's autonomous implementation you're going to regret approving._

  `sdd` `agent-skills` `spec-driven` `multi-agent` `autonomous-impl`
  </details>

- **[pilot-shell](https://github.com/maxritter/pilot-shell)** `⭐ 1.7k` `updated ≤30d` A CLI shell that layers spec-driven planning, enforced TDD, persistent memory, and quality gates on top of Claude Code to make AI-generated code production-ready. <details><summary>More about</summary>

  It gives developers a structured workflow to enforce testing, context retention, and quality gates when delegating implementation to Claude Code.

  _Yet another tool to manage the tool that is supposed to manage your codebase, because apparently the future of engineering is installing wrappers around your wrappers._

  `claude-code` `spec-driven` `tdd` `cli` `quality-gates`
  </details>

- **[haft](https://github.com/m0n0x41d/haft)** `⭐ 1.3k` `updated ≤30d` Haft is a spec-driven engineering governor that integrates with AI coding agents like Claude Code and Codex via MCP and CLI to enforce structured decision-making, evidence tracking, and stale-assumption detection. <details><summary>More about</summary>

  It shifts AI-assisted development from prompt-and-pray to governed execution by treating specs, decisions, and evidence as falsifiable contracts rather than ephemeral chat context.

  _You now have a tool to govern the engineering decisions of the agents writing your code, which mostly means you'll spend your afternoon YAML-linting the spec that describes the bug the agent introduced in record time._

  `spec-driven` `governance` `mcp` `cli` `decision-engineering`
  </details>

- **[Spec Kitty](https://github.com/priivacy-ai/spec-kitty)** `⭐ 1.2k` `updated ≤30d` An open-source CLI that wraps AI coding agents in a spec-driven workflow with git worktrees, task lifecycle management, and a local kanban dashboard. <details><summary>More about</summary>

  It imposes structure on AI-generated code by keeping specs, plans, and tasks in the repo, preventing requirements from vanishing into the void during long agent sessions.

  _Finally, a tool to manage the chaos of five different AI agents editing your repo, just in case you were worried your workflow didn't have enough YAML and worktrees yet._

  `spec-driven` `cli` `multi-agent` `git-worktrees` `kanban`
  </details>

- **[MoAI-ADK](https://github.com/modu-ai/moai-adk)** `⭐ 982` `updated ≤30d` A Go-based CLI development kit for Claude Code that provides 24 specialized AI agents and 52 skills to enforce TDD/DDD quality gates and spec-driven workflows. <details><summary>More about</summary>

  It shifts the developer role from writing code to designing the 'harness'—specs, quality gates, and feedback loops—while a team of agents handles implementation and self-verification.

  _You've successfully automated yourself out of writing code, only to spend your day debugging why the 24-agent team decided to refactor your architecture into a 38,700-line Go binary you didn't write._

  `claude-code` `spec-driven` `multi-agent` `tdd` `cli`
  </details>

- **[Shotgun](https://github.com/shotgun-sh/shotgun)** `⭐ 664` `updated ≤90d` A CLI tool that indexes codebases and generates staged, file-by-file specifications to guide AI coding agents through large feature implementations without losing context. <details><summary>More about</summary>

  It breaks down complex features into manageable, staged PRs with precise instructions, preventing AI agents from derailing or generating unmanageable monolithic changes.

  _We have successfully abstracted the art of programming into writing specifications for the thing that writes the code, ensuring we can now micromanage the AI with the same rigor we once applied to interns._

  `spec-driven` `cli` `codebase-indexing` `prd` `multi-agent`
  </details>

- **[mcp-server-spec-driven-development](https://github.com/formulahendry/mcp-server-spec-driven-development)** `⭐ 431` `updated ≤1y` An MCP server that provides structured prompts to guide developers through a spec-driven workflow of generating EARS-format requirements, design documents, and implementation code. <details><summary>More about</summary>

  It offers a structured alternative to vibe coding by enforcing a requirements-to-design-to-code pipeline directly within MCP-compatible editors and agents.

  _We have successfully abstracted the job of writing code into writing specifications for an AI to write code, which we will then pretend we engineered._

  `mcp` `spec-driven` `requirements` `workflow`
  </details>

- **[VibeDoc](https://github.com/calderbuild/vibedoc)** `⭐ 375` `updated ≤1y` VibeDoc is an AI tool that transforms product ideas into complete development plans, architecture diagrams, and ready-to-use coding prompts for assistants like Claude and Cursor in under three minutes. <details><summary>More about</summary>

  It automates the tedious early-stage planning and prompt engineering work, letting developers move from a vague idea to actionable, assistant-ready specs and architecture docs almost instantly.

  _We have successfully optimized the time between 'having an idea' and 'having a 10,000-word document the AI will ignore' down to under three minutes._

  `spec-driven` `planning` `prompt-generation` `architecture`
  </details>

- **[FPF](https://github.com/ailev/fpf)** `⭐ 374` `updated ≤30d` First Principles Framework (FPF) is a conceptual specification and methodology for structuring, documenting, and auditing complex reasoning processes in mixed human/AI engineering and research teams. <details><summary>More about</summary>

  It provides a disciplined, spec-driven vocabulary and pattern set for teams that need auditable decision records, bounded contexts, and stable shared reasoning across specialists and AI agents.

  _Just when you thought your stack was modern enough, you now need a full operating system for thought just to justify why you chose Postgres over Mongo._

  `spec-driven` `decision-records` `human-ai-collab` `auditability` `systems-engineering`
  </details>

- **[English Compiler](https://github.com/uilicious/english-compiler)** `⭐ 296` `updated >1y` English Compiler is a proof-of-concept CLI tool that compiles English-language Markdown specifications into functional code via chained AI prompts. <details><summary>More about</summary>

  It demonstrates a speculative workflow where developers delegate full code generation to AI based solely on natural-language specs, skipping manual coding.

  _It highlights the absurdity of trading readable, version-controlled code for brittle, slow, and opaque AI-generated output that requires re-prompting to fix._

  `spec-driven` `code-generation` `proof-of-concept`
  </details>

- **[lean-spec](https://github.com/codervisor/lean-spec)** `⭐ 255` `updated ≤30d` A tool-agnostic CLI and MCP framework for managing software specifications across backends like GitHub Issues, ADO, or markdown, designed to feed structured context into AI coding assistants. <details><summary>More about</summary>

  It enforces a spec-first loop where structured plans and task states act as the controlling artifact for AI implementation, rather than relying on ad-hoc prompts.

  _Just what we needed: another layer of infrastructure to manage the YAML files that tell our AI agents how to manage the code that used to just be code._

  `spec-driven` `sdd` `cli` `mcp` `context`
  </details>

- **[leanspec](https://github.com/codervisor/leanspec)** `⭐ 255` `updated ≤30d` A lightweight, tool-agnostic spec framework that unifies markdown, issue trackers, and work items into a Spec-Driven Development workflow for AI-assisted coding. <details><summary>More about</summary>

  It turns scattered planning artifacts into structured, AI-readable specs that any assistant can consume via MCP or CLI, letting teams keep existing backends while enforcing a spec-first loop.

  _Because nothing says 'lightweight spec-driven development' like adding a YAML adapter layer between your AI agent and the Jira instance you already hate._

  `spec-driven-development` `sdd` `cli` `mcp` `project-management`
  </details>

- **[spec-kit-command-cursor](https://github.com/madebyaris/spec-kit-command-cursor)** `⭐ 177` `updated ≤90d` A command pack for Cursor IDE that provides spec-driven development workflows via slash commands like /specify, /plan, and /execute-parallel to turn ideas into structured specs, tasks, and code. <details><summary>More about</summary>

  It forces a spec-first discipline directly inside Cursor, giving developers a structured planning and execution loop instead of relying on improvisational prompting.

  _Now you can feel properly guilty about skipping the /specify phase while your subagents politely spawn child subagents to document exactly how little architecture you actually did._

  `cursor` `sdd` `spec-driven` `slash-commands` `task-orchestration`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[fspec](https://github.com/sengac/fspec)** `⭐ 64` `updated ≤90d` fspec is a CLI and interactive kanban system that enforces spec-driven development, Gherkin scenarios, and TDD guardrails for AI coding agents. <details><summary>More about</summary>

  It shifts AI coding from reactive babysitting to a structured loop where specifications, tests, and checkpoints control the implementation lifecycle.

  _We have successfully built the middle management layer for AI agents, complete with Kanban boards and checkpoints, so the robots can now experience the soul-crushing weight of process compliance before they inevitably replace us._

  `spec-driven` `tdd` `gherkin` `cli` `multi-agent`
  </details>

- **[MetaSpec](https://github.com/acnlabs/metaspec)** `⭐ 47` `updated ≤1y` MetaSpec is a meta-specification framework that generates domain-specific, spec-driven development toolkits (speckits) with built-in CLI, validation, and AI agent support. <details><summary>More about</summary>

  It provides a structured way to define specifications that drive entire development workflows, explicitly optimizing token usage by up to 99% for AI agents.

  _Just what we needed: another meta-layer to manage the meta-layers, ensuring our agents can now efficiently parse the very specs we wrote to stop them from rewriting our codebase._

  `spec-driven` `meta-specification` `cli` `token-optimization` `ai-agents`
  </details>

- **[spec-driver](https://github.com/davidlee/spec-driver)** `⭐ 25` `updated ≤30d` A CLI and TUI toolkit that drives Claude Code or Codex using evergreen markdown and YAML specifications to manage the lifecycle of code changes. <details><summary>More about</summary>

  It creates a structured spec-first loop that treats living documentation as the authoritative source of truth for agent-driven development workflows.

  _You finally solved the problem of keeping documentation in sync by making the stochastic agent responsible for maintaining the very specs that keep it in check._

  `spec-driven` `cli` `tui` `claude-code`
  </details>

- **[Wiggum CLI](https://github.com/federiconeri/wiggum-cli)** `⭐ 10` `updated ≤30d` A terminal CLI that scans your codebase, runs AI-guided interviews to generate feature specs, and delegates autonomous implement-test-fix loops to Claude Code or Codex CLI. <details><summary>More about</summary>

  It structures the messy gap between a backlog idea and running code by automating spec generation and handing off execution to installed coding agents.

  _You can now outsource the interview phase of feature planning to an AI, leaving you free to stare at a terminal while two AIs argue about your stack until a PR appears._

  `cli` `spec-driven` `autonomous-loops` `claude-code` `codex`
  </details>

- **[tnl](https://github.com/janaraj/tnl)** `⭐ 7` `updated ≤90d` TNL (Typed Natural Language) is a spec-first workflow tool that uses structured English contracts with fixed schemas to plan, approve, and persist feature scope for AI coding agents across sessions. <details><summary>More about</summary>

  It replaces ephemeral chat plans with persistent, machine-checkable contracts that enforce scope, bind tests to behaviors, and prevent agents from silently drifting between sessions.

  _You now have a seven-field YAML-adjacent contract to review before the agent is allowed to touch your repo, which officially makes you the bureaucrat your CI pipeline always wanted._

  `spec-driven` `contracts` `context-engineering` `mcp`
  </details>

- **[pmpt-cli](https://github.com/pmptwiki/pmpt-cli)** `⭐ 5` `updated ≤90d` A CLI tool that guides developers through five questions to generate structured AI prompts, then tracks, versions, and publishes the resulting product development journey. <details><summary>More about</summary>

  It standardizes the fragile transition from vague idea to actionable prompt and adds version control for the AI-driven build process itself.

  _We have now achieved version control for the hallucinations that build our apps, ensuring we can forever reproduce exactly how we lost three days to a misunderstood requirements prompt._

  `cli` `prompt-engineering` `version-control` `mcp`
  </details>

- **[colign](https://github.com/colign/colign)** `⭐ 4` `updated ≤90d` An open-source spec-driven development platform where teams collaboratively write, review, and manage structured software specifications with AI assistance, featuring an MCP server for integration with coding agents like Claude Code and Cursor. <details><summary>More about</summary>

  It shifts the AI workflow bottleneck from code generation to team alignment by enforcing a structured spec-first loop before autonomous implementation begins.

  _Finally, a platform to ensure the entire team agrees on the 30-page document that the AI will inevitably ignore when it writes the code anyway._

  `spec-driven` `team-collaboration` `mcp` `sdd` `planning`
  </details>

- **[ClaudeCode-DevPlanBuilder](https://github.com/mmorris35/claudecode-devplanbuilder)** `⭐ 3` `updated ≤90d` A reusable methodology and template pack for Claude Code that interviews users to generate structured project briefs, detailed development plans, and executor/verifier agent definitions. <details><summary>More about</summary>

  It gives Claude Code a repeatable spec-first workflow for turning product ideas into phased, testable development plans with built-in git discipline.

  _We have officially reached the point where your coding agent needs its own project manager, onboarding questionnaire, and middleware to avoid recursively inventing agile ceremonies._

  `claude-code` `spec-driven` `planning` `agent-skills`
  </details>

- **[devplan-mcp-server](https://github.com/mmorris35/devplan-mcp-server)** `⭐ 3` `updated ≤90d` An MCP server that generates detailed, agent-executable development plans, roadmaps, and task breakdowns specifically for Claude Code. <details><summary>More about</summary>

  It enforces a structured spec-first workflow by turning vague project ideas into validated, copy-pasteable implementation plans with built-in progress tracking.

  _We have successfully abstracted software engineering into generating enough bureaucracy that even a large language model can follow the instructions without thinking._

  `mcp` `claude-code` `planning` `spec-driven` `task-management`
  </details>

- **[server](https://github.com/aidemd-mcp/server)** `⭐ 2` `updated ≤30d` An MCP server that enables AI agents to discover, validate, and scaffold intent-driven .aide specification files alongside existing codebases. <details><summary>More about</summary>

  It gives coding agents a structured spec-first workflow, letting teams govern implementation and QA through progressive-disclosure methodology files rather than ad-hoc prompts.

  _We’ve successfully reached the point where your AI agent now needs its own methodology server to tell it how to read the methodology files you wrote for it._

  `mcp` `spec-driven` `context-engineering` `developer-tools`
  </details>

- **[osop-spec](https://github.com/archie0125/osop-spec)** `⭐ 0` `updated ≤30d` OSOP is an open JSON/YAML specification and schema for defining AI agent workflows as directed graphs and logging their execution results. <details><summary>More about</summary>

  It gives developers a vendor-neutral way to describe multi-step agent processes (agents, APIs, CLIs, humans) and record exactly what happened during execution.

  _We have successfully standardized the chaos of AI workflows into YAML, meaning you can now version-control your agent’s existential crises just like any other deprecated config file._

  `agent-workflow` `spec` `yaml` `logging` `standard`
  </details>

- **[BrainGrid](https://www.braingrid.ai)** BrainGrid is a web-based AI product planner that generates structured specs, feature plans, and task breakdowns designed to be consumed by coding agents like Claude Code and Cursor. <details><summary>More about</summary>

  It attempts to solve the 'planning gap' by turning vague ideas into scoped tasks and acceptance criteria, reducing the back-and-forth friction when delegating work to AI coding tools.

  _We have officially entered the era of needing AI to plan the work so that other AI can build it, ensuring the human's primary job is now managing the project management agent._

  `spec-driven` `planning` `ai-workflow` `product-management`
  </details>

- **[Kiro](https://kiro.dev)** Kiro is an agentic AI development environment (IDE and CLI) that uses spec-driven development to turn natural language prompts into structured requirements, architecture designs, and executable code. <details><summary>More about</summary>

  It introduces a spec-first loop (requirements, architecture, task decomposition) to help developers manage intent and automate long-running tasks across large codebases rather than relying on unstructured 'vibe coding'.

  _Finally, an agent that can write EARS-compliant requirements and architecture docs before ignoring them during implementation, saving you the trouble of pretending to do it yourself._

  `spec-driven` `ai-ide` `cli-agent` `agentic-dev`
  </details>

- **[pmptwiki.com](https://pmptwiki.com)** A platform and CLI for recording, sharing, and cloning structured AI product development journeys, including prompts and project history. <details><summary>More about</summary>

  It lets developers share and reproduce full vibe-coding workflows with structured prompts instead of just dumping finished code.

  _Because what the world definitely needed is yet another way to package, version, and flex about how many times you rewrote the same prompt before the AI stopped hallucinating._

  `prompt-sharing` `cli` `workflow` `reproducibility`
  </details>

- **[Prode.ai](https://prode.ai)** A planning and codebase-intelligence platform that maps multi-repo systems into a knowledge graph to generate living specs and expose them to coding agents via an MCP server. <details><summary>More about</summary>

  It turns weeks of product planning and codebase archaeology into specs that Cursor, Claude Code, and Copilot can actually consume with architectural context.

  _Finally, a tool that promises to fix the fact that your AI agent writes code 10x faster than your team can decide what to build._

  `mcp` `spec-driven` `planning` `codebase-intelligence` `multi-repo`
  </details>