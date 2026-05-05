# Spec-Driven Development

Environments and tooling where specifications are the primary artifact that drives planning, generation, validation, or repair.

## Tools & Resources

- **[spec-kit](https://github.com/github/spec-kit)** `⭐ 92.7k` `updated ≤30d` An open-source CLI and slash-command toolkit from GitHub that implements Spec-Driven Development by treating specifications as executable artifacts to guide AI coding agents. <details><summary>More about</summary>

  It shifts the developer workflow from writing code to writing structured specs that drive Copilot and other agents to generate and validate implementations.

  _We have successfully abstracted away the 'vibe coding' only to replace it with 'vibe specifying', where you now debug your PRD instead of your codebase._

  `spec-driven` `cli` `github` `copilot` `slash-commands`
  </details>

- **[get-shit-done](https://github.com/gsd-build/get-shit-done)** `⭐ 60.2k` `updated ≤30d` A meta-prompting and spec-driven development system that adds context engineering and subagent orchestration to Claude Code and other AI coding assistants via slash commands. <details><summary>More about</summary>

  It addresses context window degradation by breaking projects into spec-driven phases with parallel subagents, allowing developers to automate planning, execution, and verification while maintaining a clean git history.

  _We have officially reached the point where the 'solo developer' badge now means 'I don't write code, my subagents do,' and we call a 60,000-star npm package 'light-weight.'._

  `spec-driven` `context-engineering` `claude-code` `meta-prompting` `subagents`
  </details>

- **[openspec](https://github.com/fission-ai/openspec)** `⭐ 45.4k` `updated ≤30d` A spec-driven development framework that uses slash commands to generate and manage proposal, spec, design, and task artifacts for AI coding assistants. <details><summary>More about</summary>

  It introduces a structured spec layer that forces alignment on requirements and implementation steps before AI assistants generate code, reducing unpredictable outputs in existing codebases.

  _We have successfully abstracted the waterfall method into markdown files so your LLM can ignore the requirements with perfect documentation._

  `spec-driven` `context-engineering` `ai-workflow` `cli`
  </details>

- **[agents.md](https://github.com/agentsmd/agents.md)** `⭐ 21k` `updated ≤90d` AGENTS.md is an open format specification for creating dedicated markdown files that provide context, instructions, and rules to guide AI coding agents within a project. <details><summary>More about</summary>

  It offers a standardized, predictable way to teach coding agents about your repo's environment, testing, and PR conventions without relying on ad-hoc prompt injection.

  _We have officially progressed from writing code to writing README files for the robots that write our code, and somehow this feels like progress._

  `spec-driven` `context-engineering` `coding-agents` `standards`
  </details>

- **[quint-code](https://github.com/m0n0x41d/quint-code)** `⭐ 1.3k` `updated ≤30d` A CLI and MCP server that enforces structured engineering decisions, spec governance, and evidence decay for AI coding agents like Claude Code and Codex. <details><summary>More about</summary>

  It forces AI-assisted workflows to frame problems, compare options under parity, and track decision staleness before agents blindly ship code.

  _You now have a governance layer for your governance layer, because apparently the only thing more comforting than an AI agent is a tool that tells you when the AI agent's assumptions have rotted._

  `spec-driven` `mcp` `governance` `cli` `agents`
  </details>

- **[mcp-server-spec-driven-development](https://github.com/formulahendry/mcp-server-spec-driven-development)** `⭐ 430` `updated ≤1y` An MCP server that provides structured prompts to guide developers through a spec-driven workflow, generating EARS-formatted requirements, design documents, and implementation code in sequence. <details><summary>More about</summary>

  It operationalizes the 'specs first' philosophy directly inside MCP-compatible editors, replacing vibe-based prompting with a traceable requirements → design → code pipeline.

  _We have successfully automated the bureaucracy of software development so that the AI can now generate the very paperwork we will ignore before shipping the code anyway._

  `mcp` `spec-driven` `requirements` `workflow`
  </details>

- **[vibedoc](https://github.com/calderbuild/vibedoc)** `⭐ 377` `updated ≤180d` An AI tool that transforms product ideas into structured development plans, architecture diagrams, and ready-to-use coding prompts for assistants like Claude, Cursor, and Copilot. <details><summary>More about</summary>

  It operationalizes the 'vibe coding' workflow by bridging the gap between a raw concept and the specific prompts needed to drive modern AI coding agents.

  _We have officially reached the point where we need an AI to generate the prompts required to ask another AI to write the code for the app we haven't fully imagined yet._

  `product-management` `planning` `prompts` `architecture` `spec-driven`
  </details>

- **[vibedoc](https://github.com/jasonrobertdestiny/vibedoc)** `⭐ 377` `updated ≤180d` An AI tool that transforms product ideas into detailed development plans, architecture diagrams, and ready-to-use coding prompts for tools like Claude, Cursor, and Copilot. <details><summary>More about</summary>

  It automates the spec and planning phase by generating actionable technical documentation and tailored prompts, bridging the gap between product concepts and AI-assisted coding workflows.

  _We have successfully automated the part of software development where you stare at a blank page wondering where to start, just so you can spend the saved time debugging the AI-generated prompts instead._

  `spec-driven` `planning` `prompt-generation` `architecture`
  </details>

- **[fpf](https://github.com/ailev/fpf)** `⭐ 346` `updated ≤30d` First Principles Framework (FPF) is a conceptual specification and reasoning system for structuring open-ended engineering and research work across human and AI teams using bounded contexts, decision records, and auditable reasoning. <details><summary>More about</summary>

  It provides a structured, spec-driven methodology for teams to align vocabulary, responsibilities, and decision criteria when collaborating with AI agents on complex, long-running problems.

  _Because the missing piece in your AI-assisted workflow was definitely a 30-pattern ontological framework to prevent your LLM from forgetting what 'boundary' means._

  `spec-driven` `agent-orchestration` `human-ai-collab` `decision-records`
  </details>

- **[lean-spec](https://github.com/codervisor/lean-spec)** `⭐ 237` `updated ≤30d` A tool-agnostic spec framework that unifies project specifications across backends like GitHub Issues, Jira, or markdown, providing a CLI, MCP server, and UI for AI-powered spec-driven development workflows. <details><summary>More about</summary>

  It lets developers keep their existing project management tools while adding a structured spec layer that AI coding assistants can consume via MCP or CLI to stay grounded in project context.

  _The dream of 'AI writes the code if the spec is perfect' meets the reality of 'now you have two problems: the code and the spec it was supposed to make obsolete'._

  `spec-driven` `mcp` `cli` `ai-workflow`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[metaspec](https://github.com/acnet-ai/metaspec)** `⭐ 45` `updated ≤180d` MetaSpec is a Python meta-specification framework that generates domain-specific 'speckits'—complete with CLI, parsers, validators, and templates—to drive spec-first development workflows for AI agents. <details><summary>More about</summary>

  It lets developers define a domain specification once and automatically generate the surrounding tooling and validation environment, reducing the token overhead required for agents to navigate large spec files by up to 99%.

  _We have officially entered the era of building frameworks to build the frameworks that tell the agents how to read the frameworks._

  `spec-driven` `meta-specification` `cli` `token-optimization` `python`
  </details>

- **[metaspec](https://github.com/acnlabs/metaspec)** `⭐ 45` `updated ≤180d` A meta-specification framework that generates domain-specific, spec-driven development toolkits (speckits) complete with CLI, parsers, and validators for AI agents. <details><summary>More about</summary>

  It enables developers to define a specification once and automatically generate a full toolkit that allows AI agents to navigate and execute workflows with drastically reduced token usage.

  _We have now successfully abstracted the abstraction layer, meaning you can finally generate the YAML that generates the bot that writes the code you don't have time to read._

  `spec-driven` `meta-specification` `cli` `token-optimization` `ai-agents`
  </details>

- **[spec-driver](https://github.com/davidlee/spec-driver)** `⭐ 23` `updated ≤30d` A CLI and TUI toolkit that provides a specification-driven workflow and project-local skills to help Claude Code, Codex, and similar agents build and maintain evergreen specs inside a repo. <details><summary>More about</summary>

  It gives developers a structured spec-first loop and lightweight tooling so coding agents can collaborate on sustainable system design instead of generating disposable code.

  _You install a framework to tell your agent how to read the framework that tells the agent how to build the thing you could have just described to it._

  `spec-driven` `cli` `claude-code` `agent-workflow` `tui`
  </details>

- **[tnl](https://github.com/janaraj/tnl)** `⭐ 7` `updated ≤30d` TNL provides a structured, file-based Markdown schema for defining typed natural language contracts that AI coding agents propose, developers approve, and sessions persistently read. <details><summary>More about</summary>

  It replaces ephemeral chat plans with persistent, enforceable feature contracts that bound agent edits to specific paths and require self-attestation against explicit MUST clauses.

  _We have successfully formalized the process of arguing with a chatbot until it writes a YAML file that it will then mostly ignore._

  `contracts` `mcp` `spec-driven` `cli` `context`
  </details>

- **[colign](https://github.com/colign/colign)** `⭐ 2` `updated ≤30d` An open-source spec-driven development platform that enables teams to collaboratively write and review software specifications, featuring real-time co-editing and an MCP server for integration with AI coding tools like Claude Code and Cursor. <details><summary>More about</summary>

  It shifts the bottleneck of AI-assisted development from code generation to team alignment by providing structured specs that downstream AI agents can reliably implement.

  _We have successfully automated the code writing, so naturally we need a specialized platform to ensure the ten humans involved can agree on what the code is supposed to do._

  `spec-driven-development` `mcp` `team-collaboration` `ai-workflow`
  </details>

- **[osop-spec](https://github.com/archie0125/osop-spec)** `⭐ 0` `updated ≤30d` OSOP is an open specification that defines a JSON/YAML schema for describing AI agent workflows (.osop) and their execution logs (.osoplog). <details><summary>More about</summary>

  It offers a vendor-neutral way to define, validate, and visualize multi-step agent workflows—including API calls, CLI commands, and human checkpoints—directly within a developer's stack.

  _Just what we needed: another standard to describe the chaos, because trying to read the raw agent logs was apparently too informative._

  `spec` `agent-workflow` `schema` `yaml` `logging`
  </details>

- **[how-to-write-a-good-spec-for-ai-agents](https://www.oreilly.com/radar/how-to-write-a-good-spec-for-ai-agents)** A written guide by Addy Osmani on how to write effective specifications for AI coding agents, covering structure, task breakdown, and context management. <details><summary>More about</summary>

  It provides a structured framework for developers to move from vague prompts to spec-driven workflows that keep agents like Claude Code and Gemini CLI focused and productive.

  _We now need a formal specification document just to explain to the AI what we want, turning every feature request into a miniature bureaucracy before the first line of code is even generated._

  `spec-driven` `prompt-engineering` `ai-guide` `workflow`
  </details>

- **[prode.ai](https://prode.ai)** A code-grounded workspace that generates PRDs, specs, and system context for engineering teams, exposing planning artifacts to coding agents via an MCP server. <details><summary>More about</summary>

  It anchors product planning in an actual codebase knowledge graph so specs stay aligned with reality and coding agents like Cursor and Claude Code can pull approved context instead of guessing.

  _Just what the modern workflow needed: another layer of ceremony promising that if we plan perfectly enough, the agents will finally stop refactoring our authentication stack at 2 a.m._

  `product-management` `mcp` `specs` `codebase-intelligence` `agent-context`
  </details>

- **[www.braingrid.ai](https://www.braingrid.ai)** BrainGrid is a web-based AI product planner that structures app ideas into specs, tasks, and prompts designed to be executed by external coding agents like Cursor or Claude Code. <details><summary>More about</summary>

  It attempts to solve the 'planning gap' by generating architecture and acceptance criteria that coding agents can consume, aiming to reduce regressions and prototype staleness.

  _We’ve now reached the point where we need an AI tool to organize the prompts for the AI tool that writes the code, adding a middle manager to a workflow that was supposed to eliminate middle managers._

  `planning` `specs` `mcp` `workflow`
  </details>