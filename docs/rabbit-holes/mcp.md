<!-- This file is generated. Do not edit it directly. Submit tools through config/sources.yml. -->
# MCP Ecosystem

Servers, clients, registries, and infrastructure for the Model Context Protocol — the standard that lets AI agents talk to tools and data sources through a shared interface.

_2411 entries in 12 sections, ranked by stars. Each section opens with its top 30; the rest of that section waits behind the **▸ more** panel at its end._

## Contents

- [Dev & Code Tools](#dev--code-tools) — 606
- [Finance, Crypto & DeFi](#finance-crypto--defi) — 310
- [Data & Databases](#data--databases) — 171
- [Cloud & API Integration](#cloud--api-integration) — 389
- [AI & Model Services](#ai--model-services) — 92
- [Browser & Web Automation](#browser--web-automation) — 102
- [Communication, Files & Productivity](#communication-files--productivity) — 217
- [Middleware & Generic](#middleware--generic) — 464
- [Registries & Discovery](#registries--discovery) — 24
- [Clients & Inspector Tools](#clients--inspector-tools) — 33
- [Domain Servers](#domain-servers) — 2
- [Others](#others) — 1

## Dev & Code Tools

- **[DeusData/codebase-memory-mcp](https://github.com/deusdata/codebase-memory-mcp)** 🔥 `⭐ 45.7k` `updated ≤30d` A high-performance code intelligence engine that indexes repositories into persistent knowledge graphs using Tree-Sitter AST analysis. <details><summary>More about</summary>

  It drastically reduces token consumption and latency for AI agents by replacing linear file-by-file searches with millisecond-level structural queries.

  _The relief of 120x fewer tokens is almost eclipsed by the anxiety of seeing the Linux kernel indexed in three minutes on your local machine._

  `mcp` `tree-sitter` `knowledge-graph` `code-analysis` `local-ai`
  </details>
- **[GitHub](https://github.com/github/github-mcp-server)** 🔥 `⭐ 33.3k` `updated ≤30d` GitHub's official MCP Server that connects AI tools to GitHub's platform for repository management, issue/PR automation, and code analysis. <details><summary>More about</summary>

  Enables AI agents to interact with GitHub repositories, issues, PRs, and workflows through natural language, streamlining development tasks.

  _Now your AI can close your stale PRs before you even realize they were stale._

  `mcp` `github` `ai-integration` `workflow-automation`
  </details>
- **[Serena](https://github.com/oraios/serena)** `⭐ 29.9k` `updated ≤90d` Serena is an MCP server that provides semantic code retrieval, editing, and refactoring tools to coding agents by integrating symbol-level IDE capabilities via the Model Context Protocol. <details><summary>More about</summary>

  It gives AI agents the missing IDE-level understanding of symbols, references, and refactorings, turning fragile text surgery into reliable, cross-file code changes.

  _You now have an IDE for your agent, so the only thing left to debug is why your agent still chooses to rewrite your entire codebase using regex._

  `mcp` `semantic-analysis` `code-editing` `ide-tools` `agent-tools`
  </details>
- **[mcpblender/blender-mcp](https://github.com/mcpblender/blender-mcp)** `⭐ 29.9k` ahujasid/blender-mcp - MCP server for working with Blender.
- **[GLips/Figma-Context-MCP](https://github.com/glips/figma-context-mcp)** `⭐ 15.9k` `updated ≤90d` MCP server that provides Figma layout information to AI coding agents like Cursor. <details><summary>More about</summary>

  Enables coding agents to directly access and implement Figma designs with higher accuracy by providing structured layout and styling data.

  _Now your AI can argue with your designer about pixel-perfect implementations instead of you._

  `mcp` `figma` `cursor` `design-to-code` `typescript`
  </details>
- **[IDA Pro MCP](https://github.com/mrexodia/ida-pro-mcp)** `⭐ 12.4k` `updated ≤90d` An MCP server that connects IDA Pro to AI models, allowing developers to use coding assistants for reverse engineering tasks like decompilation analysis and symbol renaming. <details><summary>More about</summary>

  It bridges the gap between static binary analysis and modern AI coding agents, enabling automated reverse engineering workflows directly within IDA Pro.

  _Finally, you can outsource your reverse engineering homework to a hallucinating LLM that refuses to convert hex to decimal without a dedicated tool._

  `reverse-engineering` `ida-pro` `mcp` `binary-analysis`
  </details>
- **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/desktopcommandermcp)** `⭐ 9.9k` `updated ≤90d` Desktop Commander MCP is an MCP server that grants AI assistants terminal control, file system access, and file editing capabilities. <details><summary>More about</summary>

  It lets AI coding assistants perform terminal commands, edit files, and manage processes without needing API tokens, using the user's own subscription instead.

  _Finally, an AI that can break your production database with a single mistyped rm command — but now it's officially sanctioned._

  `mcp` `terminal` `file-operations`
  </details>
- **[mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp)** `⭐ 8.6k` `updated ≤90d` A Model Context Protocol server that enables LLMs and coding agents to automate, test, and extract data from native iOS and Android apps on real devices, simulators, and emulators. <details><summary>More about</summary>

  It gives coding agents and LLM-driven workflows a structured, platform-agnostic interface to mobile devices, removing the need for deep iOS or Android automation expertise.

  _We have successfully invented a way for an AI to tap through your mobile app in a simulator while you anxiously wonder whether it understands accessibility trees better than your last QA hire._

  `mcp` `mobile-automation` `ios` `android` `agent-tooling`
  </details>
- **[idosal/git-mcp](https://github.com/idosal/git-mcp)** `⭐ 8.4k` `updated ≤180d` GitMCP is a free, open-source remote MCP server that provides AI assistants with up-to-date access to GitHub repositories to reduce code hallucinations. <details><summary>More about</summary>

  It lets developers give their AI coding tools direct, real-time access to any GitHub project's docs and code, improving accuracy for niche or rapidly changing libraries.

  _Finally, a way to stop your AI from confidently inventing APIs that don’t exist—until it starts hallucinating the GitHub repo URL instead._

  `mcp` `github` `context-engineering` `ai-assistants` `documentation`
  </details>
- **[getsentry/mobilebuildmcp](https://github.com/getsentry/mobilebuildmcp)** `⭐ 6.5k` `updated ≤30d` A Model Context Protocol (MCP) server and CLI that provides tools for agent use when working on iOS and macOS projects.
- **[XcodeBuildMCP](https://github.com/getsentry/xcodebuildmcp)** `⭐ 6.5k` `updated ≤30d` An MCP server and CLI that enables AI agents to build, test, and manage iOS and macOS projects using xcodebuild. <details><summary>More about</summary>

  It allows coding agents to bridge the gap between general code generation and the highly specific, local requirements of the Apple development toolchain.

  _Because your LLM was only one specialized MCP server away from actually being able to manage your entire Xcode build pipeline._

  `mcp` `xcode` `ios-dev` `macos-dev` `agent-tools`
  </details>
- **[21st-dev/Magic-MCP](https://github.com/21st-dev/magic-mcp)** `⭐ 6k` `updated ≤30d` An MCP server that allows AI agents in IDEs like Cursor and Windsurf to generate and insert UI components via natural language. <details><summary>More about</summary>

  It streamlines frontend development by bridging the gap between high-level UI descriptions and ready-to-use TypeScript components within your existing coding workflow.

  _Because why write CSS yourself when you can spend twenty minutes debugging the AI's interpretation of 'odern and sleek'?_

  `mcp` `ui-generation` `frontend` `cursor` `typescript`
  </details>
- **[Godot MCP](https://github.com/coding-solo/godot-mcp)** `⭐ 5.9k` `updated ≤180d` An MCP server that enables AI agents to interact with the Godot game engine, including launching the editor, running projects, and capturing debug output. <details><summary>More about</summary>

  It bridges AI agents and Godot development by providing programmatic control and feedback for debugging and code generation in game projects.

  _Now your AI can debug your Godot game while you question why you ever thought making games was a good idea._

  `mcp` `godot` `game-dev` `debugging` `ai-integration`
  </details>
- **[IvanMurzak/Unity-MCP](https://github.com/ivanmurzak/unity-mcp)** `⭐ 4.4k` `updated ≤90d` An MCP server and CLI that provides AI skills and tools to bridge LLM agents with the Unity Engine editor and runtime. <details><summary>More about</summary>

  It allows coding assistants to interact directly with the Unity environment, enabling automated development and real-time runtime debugging.

  _It brings us closer to a future where your game's logic is debugged by an agent that has never actually seen a single frame of gameplay._

  `unity` `mcp` `game-dev` `ai-agents` `csharp`
  </details>
- **[dagger/container-use](https://github.com/dagger/container-use)** `⭐ 4.1k` `updated ≤30d` An open-source MCP server that provides isolated containerized development environments for coding agents to work safely and independently. <details><summary>More about</summary>

  Enables multiple coding agents to operate in parallel without conflicts, each in their own containerized git branch, with real-time visibility and direct intervention capabilities.

  _Finally, a way to let your agents fight each other in isolated containers instead of your main branch._

  `mcp` `containerization` `coding-agents` `development-environments` `dagger`
  </details>
- **[samuelgursky/davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp)** `⭐ 3.3k` `updated ≤90d` An MCP server providing complete coverage of the DaVinci Resolve Scripting API, allowing AI assistants to control post-production workflows via natural language. <details><summary>More about</summary>

  Developers building AI video pipelines can now let assistants like Claude or Cursor manipulate timelines, markers, and cloud projects without writing custom Resolve scripts.

  _We have finally achieved the singularity where an LLM can color-grade your footage, provided you enjoy debugging 328 API tool mappings to nudge a playhead by 24 frames._

  `mcp` `video-editing` `da-vinci-resolve` `ai-integration`
  </details>
- **[Jpisnice/shadcn-ui-mcp-server](https://github.com/jpisnice/shadcn-ui-mcp-server)** `⭐ 3k` `updated ≤180d` An MCP server that provides AI assistants with access to shadcn/ui v4 components, blocks, demos, and metadata across React, Svelte, Vue, and React Native. <details><summary>More about</summary>

  Developers can now query and integrate shadcn/ui components directly into their AI-powered workflows without manual lookup or copy-pasting.

  _Finally, your AI can stop pretending it remembers the exact syntax for that one shadcn component you used once in a prototype._

  `mcp` `shadcn-ui` `component-retrieval` `frontend` `ai-integration`
  </details>
- **[freecad-mcp](https://github.com/neka-nat/freecad-mcp)** `⭐ 2.6k` `updated ≤90d` An MCP server that lets Claude Desktop control FreeCAD to create, edit, and visualize 3D CAD models through natural language. <details><summary>More about</summary>

  It bridges the gap between LLM reasoning and parametric CAD, allowing developers to script and iterate on 3D designs conversationally instead of manually writing Python or clicking through workbenches.

  _You can now burn tokens debugging a flange with Claude instead of just learning how to use the Part Design workbench like a normal engineer._

  `mcp` `cad` `freecad` `claude` `automation`
  </details>
- **[ios-simulator-mcp](https://github.com/joshuayoes/ios-simulator-mcp)** `⭐ 2.2k` `updated ≤180d` An MCP server that enables interaction with iOS simulators, including UI control, element inspection, and screenshot capture. <details><summary>More about</summary>

  Developers can programmatically control and inspect iOS simulators via MCP, streamlining mobile app testing and automation workflows.

  _Now your AI can tap, swipe, and type into a simulator while you question your life choices._

  `mcp` `ios-simulator` `mobile-automation` `testing` `developer-tools`
  </details>
- **[cjo4m06/mcp-shrimp-task-manager](https://github.com/cjo4m06/mcp-shrimp-task-manager)** `⭐ 2.1k` `updated >1y` MCP Shrimp Task Manager is an MCP server that provides task management, chain-of-thought, and dependency tracking for AI agents in software development workflows. <details><summary>More about</summary>

  It enables AI agents to break down complex projects into structured, persistent tasks with memory and iterative refinement, addressing context loss in long-running development sessions.

  _Finally, an AI that remembers your tasks longer than you remember why you started them._

  `mcp-server` `task-management` `ai-agents` `context-preservation` `development-workflow`
  </details>
- **[azure-devops-mcp](https://github.com/microsoft/azure-devops-mcp)** `⭐ 2k` `updated ≤90d` Azure DevOps MCP Server is a TypeScript-based Model Context Protocol server that exposes Azure DevOps functionality to AI agents. <details><summary>More about</summary>

  Lets developers interact with Azure DevOps via natural language from any MCP-compatible AI assistant, reducing context-switching and API boilerplate.

  _Yet another MCP server to add to the growing list of protocol adapters that promise seamless integration but fragment the agent ecosystem further._

  `azure-devops` `mcp` `devops` `api-wrapper` `typescript`
  </details>
- **[shadcn-studio](https://github.com/shadcnstudio/shadcn-studio)** `⭐ 1.9k` `updated ≤1y` An open-source collection of copy-and-paste shadcn/ui components, blocks, and templates with a theme generator and an MCP server for IDE integration. <details><summary>More about</summary>

  It provides developers with pre-built, animated UI variants and a theme generator to accelerate frontend scaffolding, while the MCP server allows AI coding assistants to generate these components directly in the IDE.

  _Yet another opportunity to spend three hours tweaking a button's OKLCH values via an AI-generated theme while your actual feature branch gathers dust._

  `shadcn` `ui-components` `mcp-server` `theme-generator` `tailwind`
  </details>
- **[CoderGamester/mcp-unity](https://github.com/codergamester/mcp-unity)** `⭐ 1.9k` `updated ≤30d` An MCP server that bridges Unity Editor with AI assistants like Cursor, Claude Code, and Codex CLI. <details><summary>More about</summary>

  Lets AI coding assistants directly interact with Unity projects, enabling operations like scene manipulation or asset management through natural language.

  _Now your AI can finally understand why your Unity project is a 10GB folder of mystery files._

  `mcp` `unity` `game-development` `editor-integration`
  </details>
- **[isaacphi/mcp-language-server](https://github.com/isaacphi/mcp-language-server)** `⭐ 1.6k` `updated ≤1y` An MCP server that exposes Language Server Protocol (LSP) capabilities to MCP-enabled clients, providing semantic tools like definition lookup, references, rename, and diagnostics. <details><summary>More about</summary>

  It bridges LSP-powered IDE features with AI coding assistants, letting models directly query and manipulate codebases with rich semantic context.

  _Now your AI can finally understand your codebase as well as you pretend to._

  `mcp` `lsp` `code-navigation` `semantic-tools` `developer-tools`
  </details>
- **[MCP Installer](https://github.com/anaisbetts/mcp-installer)** `⭐ 1.5k` `updated >1y` An MCP server that automates the installation of other MCP servers from npm or PyPI. <details><summary>More about</summary>

  It simplifies the process of adding new MCP servers to a developer's workflow by handling package installation and configuration via natural language prompts.

  _Now you can ask an AI to install the AI tools that let you ask an AI to do things, because the loop wasn’t deep enough already._

  `mcp` `automation` `package-management` `developer-tools`
  </details>
- **[datalayer/jupyter-mcp-server](https://github.com/datalayer/jupyter-mcp-server)** `⭐ 1.3k` `updated ≤30d` An MCP server that enables AI clients to connect and manage Jupyter Notebooks in real-time. <details><summary>More about</summary>

  Developers can integrate Jupyter notebooks directly into MCP-compatible AI workflows, enabling real-time notebook control, execution, and context-aware interactions.

  _Now your AI can spin up a notebook, run cells, and stare at the same kernel errors you do—progress._

  `mcp` `jupyter` `notebooks` `real-time` `ai-integration`
  </details>
- **[ref-tools-mcp](https://github.com/ref-tools/ref-tools-mcp)** `⭐ 1.2k` `updated ≤180d` An MCP server that provides AI coding tools with token-efficient access to documentation through agentic search and targeted content retrieval. <details><summary>More about</summary>

  It reduces context rot and API costs by fetching only the most relevant documentation snippets instead of dumping entire pages into the model's context window.

  _We have successfully built infrastructure to solve the problem of our previous infrastructure making our models dumber by feeding them too much infrastructure documentation._

  `mcp` `documentation` `context-engineering` `token-efficiency`
  </details>
- **[QGIS MCP](https://github.com/jjsantos01/qgis_mcp)** `⭐ 1.1k` `updated ≤1y` An MCP server that enables LLMs like Claude to interact with and control QGIS Desktop for GIS project manipulation, layer management, and code execution. <details><summary>More about</summary>

  Developers working with geospatial data can now delegate QGIS project creation, layer operations, and processing tasks directly to an LLM assistant.

  _Finally, a way to make your AI assistant draw maps while you pretend to understand coordinate systems._

  `mcp` `gis` `qgis` `llm-integration` `geospatial`
  </details>
- **[rohitg00/kubectl-mcp-server](https://github.com/rohitg00/kubectl-mcp-server)** `⭐ 960` `updated ≤180d` An MCP server that exposes 253 Kubernetes tools—including diagnostics, deployment, cost optimization, and dashboards—so AI assistants can manage clusters via natural language. <details><summary>More about</summary>

  It lets developers delegate day-to-day Kubernetes operations to their AI assistant instead of memorizing kubectl incantations or writing one-off scripts.

  _You can now debug a crashed pod at 2 a.m. by arguing with an LLM instead of reading YAML, which somehow feels like progress until the model decides to scale your production replica set to zero._

  `mcp` `kubernetes` `devops` `infrastructure` `ai-assistant`
  </details>
- **[Octocode](https://github.com/bgauryy/octocode)** `⭐ 945` `updated ≤30d` An MCP server that connects AI assistants to semantic code search across GitHub, GitLab, and local repositories using LSP intelligence for real-time context generation. <details><summary>More about</summary>

  Turns any coding assistant into a staff engineer that can research implementation patterns, explore dependency graphs, and cite real code across public and private repos without leaving the chat.

  _Your AI assistant can now suffer through legacy codebase archaeology and panic-scroll through ten-thousand-line files just like you do, except it processes the trauma in milliseconds instead of decades._

  `ast` `code-intelligence` `code-search` `context-generation` `lsp` `mcp` `semantic-research`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+576 more in Dev & Code Tools &nbsp;—&nbsp; click to expand</strong></summary>

- **[openapi-mcp-server](https://github.com/janwilmake/openapi-mcp-server)** `⭐ 903` `updated ≤90d` An MCP server that enables AI assistants to search and explore OpenAPI specifications through natural language summaries.
- **[getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp)** `⭐ 891` `updated ≤30d` An MCP server that provides Sentry debugging and observability tools to coding assistants via the Model Context Protocol.
- **[utensils/mcp-nixos](https://github.com/utensils/mcp-nixos)** `⭐ 849` `updated ≤90d` MCP-NixOS is a Model Context Protocol server that provides AI assistants with real-time access to NixOS packages, options, and related infrastructure data.
- **[vkhanhqui/figma-mcp-go](https://github.com/vkhanhqui/figma-mcp-go)** `⭐ 838` `updated ≤180d` figma-mcp-go is an open-source MCP server that provides full read/write access to live Figma data via a plugin bridge, enabling text-to-design and design-to-code workflows without using the Figma REST API or encountering rate limits.
- **[vercel/next-devtools-mcp](https://github.com/vercel/next-devtools-mcp)** `⭐ 821` `updated ≤180d` next-devtools-mcp is an MCP server that provides Next.js development tools and utilities for coding agents like Claude and Cursor.
- **[android-mcp-server](https://github.com/minhalvp/android-mcp-server)** `⭐ 811` `updated >1y` An MCP server that provides programmatic control over Android devices via ADB for use with MCP clients.
- **[clojure-mcp](https://github.com/bhauman/clojure-mcp)** `⭐ 779` `updated ≤180d` ClojureMCP is an MCP server that provides Clojure-aware REPL and editing tools for AI assistants like Claude Code and Claude Desktop.
- **[tufantunc/ssh-mcp](https://github.com/tufantunc/ssh-mcp)** `⭐ 776` `updated ≤1y` MCP server exposing SSH control for Linux and Windows systems via the Model Context Protocol.
- **[ckreiling/mcp-server-docker](https://github.com/ckreiling/mcp-server-docker)** `⭐ 746` `updated ≤90d` An MCP server that enables natural language management of Docker containers, images, volumes, and networks.
- **[mihaelamj/cupertino](https://github.com/mihaelamj/cupertino)** `⭐ 670` `updated ≤180d` A Swift-based tool that crawls Apple's developer documentation and serves it locally to AI agents via the Model Context Protocol (MCP).
- **[20000419/fauxnix](https://github.com/20000419/fauxnix)** `⭐ 666` `updated ≤30d` A bash-to-PowerShell translation layer and MCP server that allows AI agents to execute Linux-style commands on Windows without a VM or WSL.
- **[sonarqube-mcp-server](https://github.com/sonarsource/sonarqube-mcp-server)** `⭐ 653` `updated ≤90d` An official MCP server from SonarSource that exposes SonarQube code quality and security analysis capabilities to AI agents and coding assistants.
- **[abhiemj/manim-mcp-server](https://github.com/abhiemj/manim-mcp-server)** `⭐ 645` `updated >1y` Manim MCP Server is an MCP server that executes Manim Python scripts and returns the rendered animation video.
- **[hustcc/mcp-mermaid](https://github.com/hustcc/mcp-mermaid)** `⭐ 639` `updated ≤180d` An MCP server that dynamically generates Mermaid diagrams and charts for AI assistants.
- **[cloud-run-mcp](https://github.com/googlecloudplatform/cloud-run-mcp)** `⭐ 630` `updated ≤30d` MCP server that enables AI agents to deploy applications to Google Cloud Run.
- **[youichi-uda/godot-mcp-pro](https://github.com/youichi-uda/godot-mcp-pro)** `⭐ 616` `updated ≤90d` 162 MCP tools for AI-powered Godot 4 development. Scene, animation, 3D, physics, particles, audio, shader, input simulation, runtime analysis, navigation, testing & more. $15 one-time.
- **[ferrislucas/iterm-mcp](https://github.com/ferrislucas/iterm-mcp)** `⭐ 567` `updated >1y` An MCP server that provides LLMs with the ability to execute commands and read output directly within an active iTerm2 session.
- **[ooples/token-optimizer-mcp](https://github.com/ooples/token-optimizer-mcp)** `⭐ 538` `updated ≤90d` An MCP server that optimizes token usage for Claude Code through caching, compression, and smart tool intelligence to reduce context window consumption.
- **[QuantGeekDev/docker-mcp](https://github.com/quantgeekdev/docker-mcp)** `⭐ 504` `updated >1y` A Model Context Protocol server that exposes Docker container management and Docker Compose stack deployment as tools for AI assistants like Claude Desktop.
- **[bvisible/mcp-ssh-manager](https://github.com/bvisible/mcp-ssh-manager)** `⭐ 496` `updated ≤30d` MCP SSH Manager is an MCP server that exposes SSH management tools for Claude Code and OpenAI Codex agents.
- **[Muvon/octocode](https://github.com/muvon/octocode)** `⭐ 478` `updated ≤90d` A Rust-based MCP server that builds a knowledge graph and semantic search index of a codebase using tree-sitter AST parsing to give AI assistants structural context.
- **[firefox-devtools-mcp](https://github.com/mozilla/firefox-devtools-mcp)** `⭐ 456` `updated ≤90d` A Model Context Protocol server from Mozilla that lets AI assistants inspect and control Firefox via WebDriver BiDi and the Remote Debugging Protocol.
- **[binary_ninja_mcp](https://github.com/fosdickio/binary_ninja_mcp)** `⭐ 445` `updated ≤180d` An MCP server and Binary Ninja plugin that integrates reverse engineering capabilities with LLM clients.
- **[hyperb1iss/droidmind](https://github.com/hyperb1iss/droidmind)** `⭐ 434` `updated ≤1y` An MCP server that enables AI assistants to control and interact with Android devices via ADB.
- **[juehang/vscode-mcp-server](https://github.com/juehang/vscode-mcp-server)** `⭐ 395` `updated ≤1y` A VS Code extension that exposes VS Code's editing and filesystem capabilities as an MCP server for AI coding assistants.
- **[r-huijts/xcode-mcp-server](https://github.com/r-huijts/xcode-mcp-server)** `⭐ 384` `updated ≤1y` An MCP server that lets AI assistants read, build, test, and manage Xcode projects, simulators, and Apple platform dependencies.
- **[nwiizo/tfmcp](https://github.com/nwiizo/tfmcp)** `⭐ 372` `updated ≤1y` A Rust-based CLI tool that implements a Model Context Protocol (MCP) server, enabling AI assistants like Claude Desktop to read, analyze, modify, and apply Terraform configurations and state.
- **[boltmcp](https://github.com/boltmcp/boltmcp)** `⭐ 370` `updated ≤30d` BoltMCP is an MCP server that installs via Helm chart to expose cluster management capabilities to AI agents.
- **[hechtcarmel/jetbrains-index-mcp-plugin](https://github.com/hechtcarmel/jetbrains-index-mcp-plugin)** `⭐ 351` `updated ≤90d` A JetBrains IDE plugin that exposes an MCP server to give AI coding assistants access to IntelliJ's code indexing and refactoring tools.
- **[InditexTech/mcp-server-simulator-ios-idb](https://github.com/inditextech/mcp-server-simulator-ios-idb)** `⭐ 315` `updated ≤1y` An MCP server that enables LLMs to control iOS simulators via natural language commands.
- **[SDGLBL/mcp-claude-code](https://github.com/sdglbl/mcp-claude-code)** `⭐ 305` `updated >1y` An MCP server that reimplements Claude Code-like capabilities, allowing MCP clients to read, edit, and execute commands across a codebase using LiteLLM-compatible models.
- **[tmux-mcp](https://github.com/nickgnd/tmux-mcp)** `⭐ 303` `updated ≤1y` A Model Context Protocol server that lets AI assistants like Claude Desktop read from, control, and interact with live tmux terminal sessions.
- **[Govcraft/rust-docs-mcp-server](https://github.com/govcraft/rust-docs-mcp-server)** `⭐ 297` `updated ≤1y` An MCP server that fetches current Rust crate documentation and provides accurate context to AI assistants via embeddings and LLM summarization.
- **[burningion/video-editing-mcp](https://github.com/burningion/video-editing-mcp)** `⭐ 290` `updated ≤1y` An MCP server that exposes Video Jungle's video editing and search capabilities via the Model Context Protocol.
- **[tiianhk/MaxMSP-MCP-Server](https://github.com/tiianhk/maxmsp-mcp-server)** `⭐ 277` `updated ≤180d` An MCP server that lets LLMs directly understand, explain, generate, and debug Max/MSP/Jitter patches via integration with hosts like Claude and Cursor.
- **[osp_marketing_tools](https://github.com/open-strategy-partners/osp_marketing_tools)** `⭐ 271` `updated >1y` An MCP server that exposes Open Strategy Partners' product marketing methodologies, including value map generation, SEO metadata creation, and technical writing guides, to MCP-compatible LLM clients.
- **[storybookjs/addon-mcp](https://github.com/storybookjs/mcp)** `⭐ 270` `updated ≤90d` An MCP server and Storybook addon that exposes UI component information and development workflows to AI agents.
- **[YuChenSSR/mindmap-mcp-server](https://github.com/yuchenssr/mindmap-mcp-server)** `⭐ 239` `updated >1y` An MCP server that converts Markdown content into interactive mindmaps via the Model Context Protocol.
- **[portainer/portainer-mcp](https://github.com/portainer/portainer-mcp)** `⭐ 235` `updated ≤90d` An MCP server that exposes Portainer container and environment management capabilities to AI assistants like Claude Desktop.
- **[g0t4/mcp-server-commands](https://github.com/g0t4/mcp-server-commands)** `⭐ 233` `updated ≤90d` An MCP server that provides a `run_process` tool to execute shell commands and direct executables on the host machine.
- **[ConstantineB6/comfy-pilot](https://github.com/constantineb6/comfy-pilot)** `⭐ 230` `updated ≤1y` MCP server and embedded terminal that enables Claude Code to view, edit, and run ComfyUI workflows.
- **[ForeverVM](https://github.com/jamsocket/forevervm)** `⭐ 229` `updated >1y` A hosted API and CLI for running arbitrary, stateful Python code in secure, persistent sandboxes.
- **[Comet-ML/Opik-MCP](https://github.com/comet-ml/opik-mcp)** `⭐ 220` `updated ≤30d` Model Context Protocol (MCP) server implementation for Opik, enabling IDE integration and unified access to prompts, projects, traces, and metrics.
- **[veelenga/claude-mermaid](https://github.com/veelenga/claude-mermaid)** `⭐ 214` `updated ≤90d` MCP server for previewing Mermaid diagrams with live reload in Claude Code and other MCP-compatible clients.
- **[traceloop/opentelemetry-mcp-server](https://github.com/traceloop/opentelemetry-mcp-server)** `⭐ 203` `updated ≤180d` An MCP server that connects AI assistants to OpenTelemetry trace backends like Jaeger, Tempo, and Traceloop, enabling agents to query and analyze distributed and LLM traces.
- **[tumf/mcp-text-editor](https://github.com/tumf/mcp-text-editor)** `⭐ 200` `updated ≤1y` An MCP server providing line-oriented text file editing with partial file access for LLM tool integration.
- **[tumf/mcp-shell-server](https://github.com/tumf/mcp-shell-server)** `⭐ 198` `updated ≤90d` MCP shell server is a Model Context Protocol server that enables secure, whitelisted shell command execution with stdin support and timeout control.
- **[adancurusul/embedded-debugger-mcp](https://github.com/adancurusul/embedded-debugger-mcp)** `⭐ 197` `updated ≤90d` An MCP server and CLI tool that enables AI assistants to perform embedded debugging for ARM Cortex-M, RISC-V, and Xtensa targets via probe-rs or OpenOCD.
- **[mahdin75/gis-mcp](https://github.com/mahdin75/gis-mcp)** `⭐ 195` `updated ≤90d` GIS-MCP is a Model Context Protocol server that exposes geospatial operations to LLMs via GIS libraries.
- **[omni-mcp/isaac-sim-mcp](https://github.com/omni-mcp/isaac-sim-mcp)** `⭐ 193` `updated >1y` An MCP server and extension that enables natural language control of NVIDIA Isaac Sim for robotics simulation and scene manipulation.
- **[nikolai-vysotskyi/trace-mcp](https://github.com/nikolai-vysotskyi/trace-mcp)** `⭐ 185` `updated ≤90d` An MCP server that builds a framework-aware graph of a codebase once and serves it to AI agents to reduce token usage and redundant context exploration.
- **[Kapeli/dash-mcp-server](https://github.com/kapeli/dash-mcp-server)** `⭐ 184` `updated ≤180d` An MCP server that enables AI assistants to interact with Dash, the macOS API documentation browser.
- **[hanzili/comet-mcp](https://github.com/hanzili/comet-mcp)** `⭐ 180` `updated ≤1y` An MCP server that connects Claude Code to Perplexity Comet for agentic web browsing and research.
- **[MladenSU/cli-mcp-server](https://github.com/mladensu/cli-mcp-server)** `⭐ 177` `updated >1y` A secure Model Context Protocol server that enables controlled command-line execution for LLM applications with strict security policies like command whitelisting and path validation.
- **[nesquikm/mcp-rubber-duck](https://github.com/nesquikm/mcp-rubber-duck)** `⭐ 177` `updated ≤90d` An MCP server that bridges multiple OpenAI-compatible LLMs and CLI coding agents to enable multi-model conversational debugging, consensus voting, and structured debates.
- **[render-mcp-server](https://github.com/render-oss/render-mcp-server)** `⭐ 174` `updated ≤90d` The official Render MCP Server exposes Render resource management tools, allowing LLMs to create services, monitor deployments, and query databases via the Model Context Protocol.
- **[alibabacloud-devops-mcp-server](https://github.com/aliyun/alibabacloud-devops-mcp-server)** `⭐ 173` `updated ≤30d` An MCP server that enables AI assistants to interact with Alibaba Cloud's Yunxiao DevOps platform for managing repositories, projects, pipelines, and more.
- **[langfuse/mcp-server-langfuse](https://github.com/langfuse/mcp-server-langfuse)** `⭐ 173` `updated >1y` An MCP server that exposes Langfuse prompts for discovery, retrieval, and compilation via the Model Context Protocol in clients like Claude Desktop and Cursor.
- **[aashari/mcp-server-atlassian-bitbucket](https://github.com/aashari/mcp-server-atlassian-bitbucket)** `⭐ 163` `updated ≤1y` An MCP server that allows LLMs to interact with Atlassian Bitbucket workspaces, repositories, and pull requests.
- **[sammcj/mcp-devtools](https://github.com/sammcj/mcp-devtools)** `⭐ 161` sammcj/mcp-devtools : Modular MCP server bundling 20+ developer tools for AI coding agents, including internet search, web fetch, and package search and documentation (successor to mcp-package-version).
- **[delano/postman-mcp-server](https://github.com/delano/postman-mcp-server)** `⭐ 160` `updated ≤1y` An MCP server that provides programmatic access to the Postman API for managing collections, environments, and APIs.
- **[horw/esp-mcp](https://github.com/horw/esp-mcp)** `⭐ 158` `updated ≤1y` An MCP server that centralizes ESP32/ESP-IDF commands for LLM-driven embedded development workflows.
- **[alfonsograziano/node-code-sandbox-mcp](https://github.com/alfonsograziano/node-code-sandbox-mcp)** `⭐ 157` `updated ≤1y` A Node.js-based Model Context Protocol (MCP) server that executes arbitrary JavaScript in disposable Docker containers with on-the-fly npm dependency installation.
- **[blackwell-systems/agent-lsp](https://github.com/blackwell-systems/agent-lsp)** `⭐ 156` `updated ≤30d` agent-lsp is an MCP server that orchestrates language servers into agent-native workflows for AI-powered code intelligence.
- **[pskill9/website-downloader](https://github.com/pskill9/website-downloader)** `⭐ 156` `updated >1y` An MCP server that wraps wget to download and localize entire websites for use as a tool by MCP-compatible coding assistants.
- **[jinzcdev/leetcode-mcp-server](https://github.com/jinzcdev/leetcode-mcp-server)** `⭐ 152` `updated ≤90d` An MCP server that provides automated access to LeetCode's problems, solutions, and public data, with optional authentication for user-specific features.
- **[mcp-server](https://github.com/browserstack/mcp-server)** `⭐ 151` `updated ≤30d` BrowserStack's official MCP server exposing test execution, debugging, and accessibility tools over the Model Context Protocol.
- **[silenceper/mcp-k8s](https://github.com/silenceper/mcp-k8s)** `⭐ 151` `updated ≤90d` A Go-based MCP server that exposes Kubernetes cluster operations and Helm management as tools for LLM assistants.
- **[elleryfamilia/terminal-mcp](https://github.com/elleryfamilia/terminal-mcp)** `⭐ 141` MCP server that gives AI assistants a shared view of your terminal session; debug CLIs and TUI apps in real-time or let agents drive terminal-based tools autonomously. TypeScript, MIT.
- **[jjsantos01/jupyter-notebook-mcp](https://github.com/jjsantos01/jupyter-notebook-mcp)** `⭐ 129` `updated >1y` An MCP server that enables Claude AI to interact with and control Jupyter Notebook (v6.x) via WebSocket-based integration.
- **[augmnt/augments-mcp-server](https://github.com/augmnt/augments-mcp-server)** `⭐ 128` `updated ≤1y` An MCP server that provides real-time framework documentation access for Claude Code and Cursor, with tools for API context, version info, migration guides, error diagnosis, and package comparison.
- **[Codesys-mcp-toolkit](https://github.com/johannespettersson80/codesys-mcp-toolkit)** `⭐ 124` `updated >1y` A Model Context Protocol (MCP) server that connects AI clients to the CODESYS automation platform.
- **[st3v3nmw/sourcerer-mcp](https://github.com/st3v3nmw/sourcerer-mcp)** `⭐ 119` `updated ≤1y` An MCP server that builds a semantic search index of a Git repository using Tree-sitter and OpenAI embeddings to let AI agents find and retrieve specific code chunks without reading entire files.
- **[avivsinai/langfuse-mcp](https://github.com/avivsinai/langfuse-mcp)** `⭐ 113` `updated ≤30d` An MCP server for Langfuse that enables AI agents to query trace data, debug errors, and analyze sessions for observability.
- **[stass/lldb-mcp](https://github.com/stass/lldb-mcp)** `⭐ 113` `updated >1y` An MCP server that exposes the LLDB debugger as a tool so Claude can start, control, and inspect debugging sessions via natural language.
- **[ckb](https://github.com/simplyliz/ckb)** `⭐ 110` `updated ≤90d` CKB is a code intelligence backend that provides symbol navigation, impact analysis, and architecture mapping via CLI, HTTP API, and MCP server for AI assistants.
- **[hechtcarmel/jetbrains-debugger-mcp-plugin](https://github.com/hechtcarmel/jetbrains-debugger-mcp-plugin)** `⭐ 108` `updated ≤180d` A JetBrains IDE plugin that exposes an MCP server for AI assistants to programmatically control the debugger.
- **[sonirico/mcp-shell](https://github.com/sonirico/mcp-shell)** `⭐ 107` `updated ≤180d` An MCP server written in Go that lets AI assistants run shell commands locally with configurable allowlists, blocklists, and audit logging.
- **[mcp-gopls](https://github.com/hloiseau/mcp-gopls)** `⭐ 102` `updated ≤180d` An MCP server that exposes Go's LSP (gopls) capabilities to AI assistants for navigation, diagnostics, testing, and tooling.
- **[mcp-vegalite-server](https://github.com/isaacwasserman/mcp-vegalite-server)** `⭐ 100` `updated >1y` An MCP server that enables LLMs to create and visualize data using Vega-Lite syntax.
- **[adancurusul/serial-mcp-server](https://github.com/adancurusul/serial-mcp-server)** `⭐ 93` `updated ≤90d` A Rust-based MCP server and CLI that enables AI agents to interact with serial/UART hardware devices through structured commands and automated macros.
- **[mcp-server-circleci](https://github.com/circleci-public/mcp-server-circleci)** `⭐ 93` `updated ≤90d` An MCP server implementation that integrates CircleCI's infrastructure with AI-powered development environments.
- **[PhpCodeArcheology/PhpCodeArcheology](https://github.com/phpcodearcheology/phpcodearcheology)** `⭐ 92` `updated ≤90d` A PHP static analysis tool that measures architecture and maintainability through 60+ metrics, git churn analysis, and provides an AI-ready MCP server for coding assistants.
- **[ronantakizawa/a11ymcp](https://github.com/ronantakizawa/a11ymcp)** `⭐ 92` `updated ≤1y` An MCP server that connects LLMs to web accessibility testing APIs via axe-core and Puppeteer to analyze URLs and HTML snippets for WCAG compliance.
- **[@xzq-xu/jvm-mcp-server](https://github.com/xzq-xu/jvm-mcp-server)** `⭐ 90` `updated ≤1y` JVM MCP Server is a lightweight Java Virtual Machine monitoring and diagnostics server that exposes native JDK tools through the Model Context Protocol.
- **[abrinsmead/mindpilot-mcp](https://github.com/abrinsmead/mindpilot-mcp)** `⭐ 90` `updated ≤90d` An MCP server that converts Mermaid syntax into interactive, browser-based architectural and code diagrams.
- **[bzsasson/screaming-frog-mcp](https://github.com/bzsasson/screaming-frog-mcp)** `⭐ 90` `updated ≤30d` Headless MCP server for Screaming Frog SEO Spider that enables programmatic website crawls, data export, and analysis via CLI or AI assistants.
- **[hyperb1iss/lucidity-mcp](https://github.com/hyperb1iss/lucidity-mcp)** `⭐ 90` `updated >1y` An MCP server that provides AI-powered code quality analysis for AI assistants to review git changes for complexity, security, and other issues.
- **[areweai/tsgram-mcp](https://github.com/areweai/tsgram-mcp)** `⭐ 89` `updated >1y` TSGram MCP is a Telegram MCP server that enables local Claude Code integration for code assistance via Telegram chats.
- **[micl2e2/code-to-tree](https://github.com/micl2e2/code-to-tree)** `⭐ 88` `updated ≤1y` A runtime-free MCP server that converts source code into language-agnostic AST trees using tree-sitter.
- **[ShenghaiWang/xcodebuild](https://github.com/shenghaiwang/xcodebuild)** `⭐ 85` `updated >1y` An MCP server that builds Xcode iOS workspaces/projects and feeds build errors back to LLMs like Claude and Cline.
- **[Erodenn/godot-mcp-runtime](https://github.com/erodenn/godot-mcp-runtime)** `⭐ 82` `updated ≤90d` A TypeScript MCP server that provides AI assistants with runtime control over the Godot 4.x game engine via a lightweight TCP bridge.
- **[QuantConnect/mcp-server](https://github.com/quantconnect/mcp-server)** `⭐ 77` `updated ≤180d` An official Python MCP server that exposes the QuantConnect API as tools for AI assistants to manage algorithmic trading projects, run backtests, and deploy live strategies.
- **[kadykov/mcp-openapi-schema-explorer](https://github.com/kadykov/mcp-openapi-schema-explorer)** `⭐ 76` `updated ≤90d` An MCP server that exposes OpenAPI/Swagger specs via MCP Resource Templates for token-efficient client-side exploration.
- **[qainsights/jmeter-mcp-server](https://github.com/qainsights/jmeter-mcp-server)** `⭐ 74` `updated >1y` An MCP server that lets AI assistants execute Apache JMeter performance tests and analyze the resulting metrics, bottlenecks, and visualizations.
- **[embedded-society/altium-designer-mcp](https://github.com/embedded-society/altium-designer-mcp)** `⭐ 72` `updated ≤30d` MCP server for AI-assisted management of Altium Designer component libraries.
- **[linw1995/nvim-mcp](https://github.com/linw1995/nvim-mcp)** `⭐ 72` `updated ≤90d` An MCP server that connects AI assistants to running Neovim instances, exposing LSP diagnostics, code actions, and buffer state as structured tools and resources.
- **[mcpshell](https://github.com/inercia/mcpshell)** `⭐ 71` `updated ≤90d` A Model Context Protocol (MCP) server that enables LLMs to safely execute shell commands as MCP tools.
- **[AliKarami/MikroMCP](https://github.com/alikarami/mikromcp)** `⭐ 70` `updated ≤30d` An MCP server that exposes MikroTik RouterOS functionality to AI agents via the Model Context Protocol.
- **[martingeidobler/android-mcp-server](https://github.com/martingeidobler/android-mcp-server)** `⭐ 70` `updated ≤1y` An MCP server that lets AI assistants control Android emulators and devices via ADB to take screenshots, interact with UI elements, read logs, and document bugs.
- **[freema/mcp-design-system-extractor](https://github.com/freema/mcp-design-system-extractor)** `⭐ 69` `updated ≤90d` An MCP server that enables AI assistants to inspect Storybook design systems and extract component metadata, HTML, and CSS styles.
- **[mcp_server_gdb](https://github.com/pansila/mcp_server_gdb)** `⭐ 68` `updated >1y` An MCP server that exposes GDB debugging capabilities—session management, breakpoints, execution control, and memory inspection—to AI assistants via the GDB/MI protocol.
- **[DeepView MCP](https://github.com/mitek99/deepview-mcp)** `⭐ 66` `updated >1y` An MCP server that enables IDEs like Cursor and Windsurf to analyze entire codebases by leveraging the Gemini model's large context window.
- **[mcp-gitee](https://github.com/oschina/mcp-gitee)** `⭐ 66` `updated ≤180d` An MCP server implementation for Gitee that exposes repositories, issues, and pull requests as tools for AI assistants via the Model Context Protocol.
- **[danmartuszewski/hop](https://github.com/danmartuszewski/hop)** `⭐ 64` `updated ≤180d` Fast SSH connection manager with a TUI dashboard and MCP server capabilities.
- **[depwire/depwire](https://github.com/depwire/depwire)** `⭐ 64` `updated ≤30d` A deterministic dependency graph builder for AI-assisted refactoring that provides exact symbol-level code analysis across multiple languages.
- **[jsdelivr/globalping-mcp-server](https://github.com/jsdelivr/globalping-mcp-server)** `⭐ 64` `updated ≤180d` Remote MCP server that enables LLMs to run network commands via Globalping's distributed measurement platform.
- **[MikeRecognex/mcp-codebase-index](https://github.com/mikerecognex/mcp-codebase-index)** `⭐ 63` `updated ≤1y` A structural codebase indexer and MCP server that parses source files into metadata and exposes 17 query tools for functions, classes, imports, and dependency graphs with incremental re-indexing.
- **[paulburgess1357/nvim-mcp](https://github.com/paulburgess1357/nvim-mcp)** `⭐ 63` `updated ≤180d` An MCP server that lets AI agents like Claude Code and Cursor control and observe a running Neovim instance via its native msgpack-RPC socket.
- **[ScreenshotMCP](https://github.com/upnorthmedia/screenshotmcp)** `⭐ 61` `updated >1y` A Model Context Protocol server that captures website screenshots with full-page, element-specific, and device-configured options.
- **[promptexecution/just-mcp](https://github.com/promptexecution/just-mcp)** `⭐ 60` `updated ≤90d` An MCP server that exposes Just command runner recipes to AI assistants, allowing them to discover, inspect, and execute project tasks via the Model Context Protocol.
- **[azer/react-analyzer-mcp](https://github.com/azer/react-analyzer-mcp)** `⭐ 58` `updated >1y` MCP server for analyzing and generating documentation for React code locally.
- **[James-Chahwan/repo-graph](https://github.com/james-chahwan/repo-graph)** `⭐ 58` `updated ≤90d` MCP server that provides structural graph memory for AI coding assistants to navigate codebases efficiently.
- **[MarcelRoozekrans/roslyn-codelens-mcp](https://github.com/marcelroozekrans/roslyn-codelens-mcp)** `⭐ 57` `updated ≤90d` Roslyn-based MCP server providing deep semantic understanding of .NET/C# codebases through 57 tools for navigation, diagnostics, refactoring, and test intelligence.
- **[r33drichards/mcp-js](https://github.com/r33drichards/mcp-js)** `⭐ 57` `updated ≤90d` A Rust-based MCP server that exposes a V8 JavaScript runtime (supporting JS, TypeScript, and WASM) as a tool for AI agents like Claude and Cursor, with persistent heap snapshots and policy-gated filesystem/network access.
- **[srclight/srclight](https://github.com/srclight/srclight)** `⭐ 57` `updated ≤180d` A local MCP server that builds a deep, searchable index of codebases using SQLite FTS5, tree-sitter, and embeddings to provide AI agents with structured code intelligence tools.
- **[sshahzaiib/agy-bridge](https://github.com/sshahzaiib/agy-bridge)** `⭐ 56` `updated ≤90d` MCP bridge that lets Claude Code delegate heavy tasks to the Antigravity CLI (agy) — purpose-built tools, model routing with fallback, session continuity, and output truncation to save Claude's context and tokens.
- **[buildkite/buildkite-mcp-server](https://github.com/buildkite/buildkite-mcp-server)** `⭐ 54` `updated ≤30d` An MCP server that exposes Buildkite pipeline, build, job, and test data to AI agents via the Model Context Protocol.
- **[ethbak/icon-composer-mcp](https://github.com/ethbak/icon-composer-mcp)** `⭐ 54` `updated ≤180d` An MCP server and CLI tool for creating Apple-style.icon bundles and images with Liquid Glass effects.
- **[mrexodia/user-feedback-mcp](https://github.com/mrexodia/user-feedback-mcp)** `⭐ 54` `updated >1y` A simple MCP server that enables human-in-the-loop workflows by allowing coding assistants like Cline and Cursor to pause and request user feedback during task execution.
- **[XRAY](https://github.com/srijanshukla18/xray)** `⭐ 54` `updated ≤1y` XRAY MCP is a Model Context Protocol server that provides AI assistants with structural code intelligence, including project mapping, symbol search, and impact analysis powered by ast-grep.
- **[joshuarileydev/simulator-mcp-server](https://github.com/joshuarileydev/simulator-mcp-server)** `⭐ 53` `updated >1y` An MCP server that provides programmatic control over iOS simulators via the Model Context Protocol.
- **[Narasimhaponnada/mermaid-mcp](https://github.com/narasimhaponnada/mermaid-mcp)** `⭐ 53` `updated ≤1y` An MCP server that lets AI assistants like Copilot and Claude generate Mermaid diagrams from natural language and output production-ready SVGs.
- **[drhalto/agentmako](https://github.com/drhalto/agentmako)** `⭐ 52` `updated ≤90d` Local-first MCP server that provides coding agents with structured context packets, code/schema facts, and diagnostics via a local SQLite store.
- **[gotohuman-mcp-server](https://github.com/gotohuman/gotohuman-mcp-server)** `⭐ 52` `updated ≤180d` An MCP server that enables AI agents to request human approvals via a managed workflow with customizable UI, auth, and webhooks.
- **[LadislavSopko/mcp-ai-server-visual-studio](https://github.com/ladislavsopko/mcp-ai-server-visual-studio)** `⭐ 52` `updated ≤1y` MCP AI Server for Visual Studio is a Roslyn-powered MCP server extension that exposes Visual Studio's semantic code analysis and debugger tools to AI assistants.
- **[get-tmonier/argot](https://github.com/get-tmonier/argot)** `⭐ 50` `updated ≤30d` A statistical code analyzer that uses repository history to detect and lint deviations from established coding patterns.
- **[gr-mcp](https://github.com/yoelbassin/gr-mcp)** `⭐ 50` `updated ≤180d` gr-mcp is an MCP server that exposes GNU Radio flowgraph operations as tools for AI assistants.
- **[ooples/mcp-console-automation](https://github.com/ooples/mcp-console-automation)** `⭐ 49` `updated ≤90d` An MCP server that allows AI assistants to create, control, and monitor interactive terminal sessions, run background jobs, and execute automated test assertions against console output.
- **[zenml-io/mcp-zenml](https://github.com/zenml-io/mcp-zenml)** `⭐ 49` `updated ≤90d` MCP server that exposes ZenML MLOps pipeline metadata and execution controls via the Model Context Protocol.
- **[mcp_safe_local_python_executor](https://github.com/maxim-saplin/mcp_safe_local_python_executor)** `⭐ 48` `updated >1y` An MCP server that wraps Hugging Face's LocalPythonExecutor to provide a safer, Docker-free local Python runtime for executing LLM-generated code via tools like Claude Desktop and Cursor.
- **[elisp-dev-mcp](https://github.com/laurynas-biveinis/elisp-dev-mcp)** `⭐ 47` `updated ≤180d` An Emacs package that runs an MCP server to let AI agents retrieve Elisp function definitions, variable metadata, and Info documentation for agentic Emacs Lisp development.
- **[Tommertom/awesome-ionic-mcp](https://github.com/tommertom/awesome-ionic-mcp)** `⭐ 46` `updated ≤1y` An MCP server that provides AI assistants with real-time access to Ionic Framework components, Capacitor plugins, and CLI command execution for cross-platform mobile app development.
- **[yepcode/mcp-server-js](https://github.com/yepcode/mcp-server-js)** `⭐ 46` `updated ≤1y` MCP server that exposes YepCode processes as callable tools for AI platforms.
- **[yWorks/mcp-typescribe](https://github.com/yworks/mcp-typescribe)** `⭐ 46` `updated ≤1y` MCP-Typescribe is an MCP server that indexes TypeDoc-generated TypeScript API documentation for LLM querying.
- **[Pantani/tdmcp](https://github.com/pantani/tdmcp)** `⭐ 45` `updated ≤90d` TouchDesigner MCP server, describe a visual to Claude, Cursor or Codex and it builds a real, playable node network (audio-reactive, generative, particle, 3D, feedback) with live knobs + MIDI/OSC/DMX, then checks for errors and previews its own work.
- **[rootly-mcp-server](https://github.com/rootlyhq/rootly-mcp-server)** `⭐ 45` `updated ≤90d` An MCP server that exposes the Rootly API to coding assistants like Claude Code, Cursor, and Windsurf for incident management and on-call operations.
- **[yiwenlu66/PiloTY](https://github.com/yiwenlu66/piloty)** `⭐ 45` `updated ≤180d` PiloTY is an MCP server that provides AI agents with persistent, interactive terminal sessions via PTY.
- **[hungthai1401/bruno-mcp](https://github.com/hungthai1401/bruno-mcp)** `⭐ 44` `updated >1y` An MCP server that enables LLMs to execute and retrieve results from Bruno API test collections.
- **[doggybee/mcp-server-leetcode](https://github.com/doggybee/mcp-server-leetcode)** `⭐ 43` `updated >1y` An MCP server that exposes LeetCode problems, user data, and contest information via GraphQL for AI assistants.
- **[bitrise-io/bitrise-mcp](https://github.com/bitrise-io/bitrise-mcp)** `⭐ 42` `updated ≤30d` An MCP server that exposes Bitrise API capabilities for app management, build operations, and artifact handling.
- **[osv-mcp](https://github.com/stackloklabs/osv-mcp)** `⭐ 42` `updated ≤90d` An MCP server that exposes the Open Source Vulnerabilities (OSV) database to LLM-powered applications via SSE and streamable-http transports.
- **[themesberg/flowbite-mcp](https://github.com/themesberg/flowbite-mcp)** `⭐ 42` `updated ≤1y` An official MCP server that gives AI assistants access to Flowbite's Tailwind CSS component library and converts Figma designs into code.
- **[pzalutski-pixel/javalens-mcp](https://github.com/pzalutski-pixel/javalens-mcp)** `⭐ 41` `updated ≤180d` An MCP server that provides 63 compiler-accurate Java code analysis tools built on Eclipse JDT for AI agents.
- **[wende/cicada](https://github.com/wende/cicada)** `⭐ 41` `updated ≤1y` CICADA is an MCP server that provides context-compacted code intelligence for AI coding assistants via AST-level indexing and semantic search.
- **[raye-deng/open-code-review](https://github.com/raye-deng/open-code-review)** `⭐ 40` `updated ≤180d` An open-source CI/CD CLI and MCP server that detects AI-specific code defects like hallucinated imports, stale APIs, and over-engineering patterns across six languages.
- **[artmann/package-registry-mcp](https://github.com/artmann/package-registry-mcp)** `⭐ 39` `updated ≤1y` An MCP server that enables AI assistants to search and retrieve up-to-date package information from NPM, Cargo, PyPI, NuGet, and Go registries.
- **[lineai-intelligence/codelogic-mcp-server](https://github.com/lineai-intelligence/codelogic-mcp-server)** `⭐ 38` CodeLogicIncEngineering/codelogic-mcp-server ️ ☁️ - Official MCP server for CodeLogic, providing access to code dependency analytics, architectural risk analysis, and impact assessment tools.
- **[lineai-intelligence/lineai-mcp-server](https://github.com/lineai-intelligence/lineai-mcp-server)** `⭐ 38` `updated ≤90d` An MCP server that exposes CodeLogic's software dependency graph and impact analysis to AI programming assistants.
- **[yikakia/godoc-mcp-server](https://github.com/yikakia/godoc-mcp-server)** `⭐ 38` `updated ≤1y` godoc-mcp-server is an MCP server that fetches Go package documentation from pkg.go.dev for use by LLMs.
- **[kao273183/mk-qa-master](https://github.com/kao273183/mk-qa-master)** `⭐ 37` `updated ≤180d` An MCP server that enables AI assistants to execute, analyze, and generate tests for web, mobile, and API frameworks.
- **[n24q02m/better-godot-mcp](https://github.com/n24q02m/better-godot-mcp)** `⭐ 37` `updated ≤90d` An MCP server that exposes 17 composite tools for managing Godot Engine scenes, scripts, shaders, and project settings directly from AI agents like Claude Code and Cursor.
- **[Disentinel/grafema](https://github.com/disentinel/grafema)** `⭐ 36` `updated ≤90d` A graph-based static analysis tool that transforms codebases, infrastructure, and knowledge into a queryable graph for humans and AI.
- **[gabrielmaialva33/winx-code-agent](https://github.com/gabrielmaialva33/winx-code-agent)** `⭐ 36` `updated ≤30d` A high-performance Rust implementation of the WCGW code agent tools, delivered as an MCP server.
- **[InsForge/insforge-mcp](https://github.com/insforge/insforge-mcp)** `⭐ 35` `updated ≤90d` MCP server for Insforge, enabling coding agents to integrate backend features like auth, databases, and serverless functions.
- **[mikusnuz/app-publish-mcp](https://github.com/mikusnuz/app-publish-mcp)** `⭐ 35` `updated ≤1y` A unified MCP server providing 91 tools for managing App Store Connect and Google Play Console operations directly from AI assistants.
- **[pzalutski-pixel/sharplens-mcp](https://github.com/pzalutski-pixel/sharplens-mcp)** `⭐ 35` `updated ≤90d` A Roslyn-powered MCP server that exposes 62 semantic analysis, refactoring, and code generation tools for C# and .NET to AI coding agents like Claude Code.
- **[tosin2013/mcp-adr-analysis-server](https://github.com/tosin2013/mcp-adr-analysis-server)** `⭐ 35` `updated ≤90d` An MCP server that analyzes Architectural Decision Records (ADRs) and provides AI-powered architectural insights, tech detection, and code linking to coding assistants like Claude and Cursor.
- **[XixianLiang/HarmonyOS-mcp-server](https://github.com/xixianliang/harmonyos-mcp-server)** `⭐ 35` `updated >1y` MCP server for manipulating HarmonyOS next devices.
- **[maven-mcp-server](https://github.com/bigsy/maven-mcp-server)** `⭐ 34` `updated ≤180d` An MCP server that provides tools for checking Maven dependency versions via the Model Context Protocol.
- **[arvindand/maven-tools-mcp](https://github.com/arvindand/maven-tools-mcp)** `⭐ 33` `updated ≤30d` MCP server providing JVM dependency intelligence from Maven Central for use with AI assistants and build tools.
- **[kestra-io/mcp-server-python](https://github.com/kestra-io/mcp-server-python)** `⭐ 33` `updated ≤180d` Python MCP Server for Kestra that exposes Kestra's AI Agent tools via the Model Context Protocol.
- **[dynatrace-oss/dynatrace-managed-mcp](https://github.com/dynatrace-oss/dynatrace-managed-mcp)** `⭐ 32` `updated ≤30d` An MCP server for self-hosted Dynatrace Managed platform.
- **[flyonui-mcp](https://github.com/themeselection/flyonui-mcp)** `⭐ 32` `updated ≤1y` An MCP server that provides slash commands for creating, inspiring, and refining UI components and landing pages using the FlyonUI design system directly within IDEs like VS Code, Cursor, and Windsurf.
- **[j4c0bs/mcp-server-sql-analyzer](https://github.com/j4c0bs/mcp-server-sql-analyzer)** `⭐ 32` `updated >1y` An MCP server that provides SQL static analysis, linting, and dialect conversion using SQLGlot.
- **[paramount-engineering/roku-dev-studio](https://github.com/paramount-engineering/roku-dev-studio)** `⭐ 32` paramount-engineering/roku-dev-studio - All-in-one developer tool and MCP Server for Roku development, featuring ECP device control, automated channel sideloading, BrightScript debugging, and real-time log monitoring.
- **[ryan0204/github-repo-mcp](https://github.com/ryan0204/github-repo-mcp)** `⭐ 32` `updated >1y` An open-source MCP server that lets AI assistants browse public GitHub repositories, navigate directories, and view file contents via the stdio protocol.
- **[VikrantSingh01/adaptive-cards-mcp](https://github.com/vikrantsingh01/adaptive-cards-mcp)** `⭐ 32` `updated ≤180d` An MCP server exposing nine tools for generating, validating, and optimizing Microsoft Adaptive Cards for Teams, Outlook, Copilot, and ChatGPT.
- **[klever-io/mcp-klever-vm](https://github.com/klever-io/mcp-klever-vm)** `⭐ 31` `updated ≤180d` An MCP server providing contextual knowledge and tooling for Klever blockchain smart contract development.
- **[Daghis/teamcity-mcp](https://github.com/daghis/teamcity-mcp)** `⭐ 30` `updated ≤30d` An MCP server that exposes JetBrains TeamCity CI/CD operations as tools for AI coding assistants.
- **[rsdouglas/janee](https://github.com/rsdouglas/janee)** `⭐ 30` `updated ≤1y` Janee is a local-first MCP server that lets AI agents call external APIs using injected credentials, without ever exposing raw API keys to the agent itself.
- **[V0v1kkk/DotNetMetadataMcpServer](https://github.com/v0v1kkk/dotnetmetadatamcpserver)** `⭐ 30` `updated ≤90d` A Model Context Protocol server that exposes .NET type information from assemblies and NuGet packages for AI coding agents.
- **[Homebrew MCP](https://github.com/jeannier/homebrew-mcp)** `⭐ 29` `updated >1y` An MCP server that exposes Homebrew package management commands as tools for MCP-compatible clients like Claude Desktop and Cursor.
- **[wenhuwang/mcp-k8s-eye](https://github.com/wenhuwang/mcp-k8s-eye)** `⭐ 29` `updated >1y` MCP Server for kubernetes management and diagnosis of cluster and applications.
- **[kitao/pyxel-mcp](https://github.com/kitao/pyxel-mcp)** `⭐ 28` `updated ≤90d` MCP server for AI-assisted retro game development with Pyxel, enabling autonomous execution, verification, and iteration of Pyxel game programs.
- **[python-runtime-interpreter-mcp-server](https://github.com/hileamlakb/python-runtime-interpreter-mcp-server)** `⭐ 28` `updated ≤1y` PRIMS is a lightweight MCP server that lets LLM agents safely execute arbitrary Python code in a secure, isolated sandbox.
- **[cqfn/aibolit-mcp-server](https://github.com/cqfn/aibolit-mcp-server)** `⭐ 27` `updated ≤180d` MCP server that exposes the Aibolit Java static analyzer to AI coding agents for identifying refactoring hotspots.
- **[ig-mcp-server](https://github.com/inspektor-gadget/ig-mcp-server)** `⭐ 27` `updated ≤90d` An MCP server that exposes Inspektor Gadget's eBPF-powered container/Kubernetes observability tools to AI agents via the Model Context Protocol.
- **[qainsights/k6-mcp-server](https://github.com/qainsights/k6-mcp-server)** `⭐ 27` `updated >1y` A Model Context Protocol server that enables LLMs to trigger and analyze k6 load tests directly from MCP-compatible clients like Claude Desktop and Cursor.
- **[phisanti/MCPR](https://github.com/phisanti/mcpr)** `⭐ 26` `updated ≤90d` MCPR is an R package that runs an MCP server inside a live R session, allowing AI agents to execute code, create plots, and inspect workspace state interactively rather than through stateless Rscript calls.
- **[shadcn-ui-mcp-server](https://github.com/heilgar/shadcn-ui-mcp-server)** `⭐ 26` `updated >1y` An MCP server that exposes shadcn/ui components and blocks as tools for AI assistants.
- **[alertmanager-mcp-server](https://github.com/ntk148v/alertmanager-mcp-server)** `⭐ 25` `updated ≤180d` An MCP server that enables AI assistants to query and manage Prometheus Alertmanager resources.
- **[ferodrigop/forge](https://github.com/ferodrigop/forge)** `⭐ 25` `updated ≤180d` A terminal-based MCP server that enables AI coding agents to manage and monitor persistent PTY sessions.
- **[Jktfe/serveMyAPI](https://github.com/jktfe/servemyapi)** `⭐ 25` `updated ≤180d` A macOS-specific MCP server for securely storing and accessing API keys via the macOS Keychain.
- **[mcp-time](https://github.com/theobrigitte/mcp-time)** `⭐ 25` `updated ≤1y` An MCP server that provides AI assistants with tools for time and date operations, including natural language parsing, timezone conversion, and duration math.
- **[knewstimek/agent-tool](https://github.com/knewstimek/agent-tool)** `⭐ 24` `updated ≤90d` MCP tool server for AI coding agents offering encoding-aware file tools, binary analysis, DAP debugger, SSH/SFTP, process memory, and more.
- **[operantlabs/operant-mcp](https://github.com/operantlabs/operant-mcp)** `⭐ 24` operantlabs/operant-mcp : Open-source MCP server with 51 security testing tools for pentesting, vulnerability scanning, and security auditing.
- **[pibblokto/cert-manager-mcp-server](https://github.com/pibblokto/cert-manager-mcp-server)** `⭐ 24` `updated >1y` An MCP server that lets AI assistants manage and troubleshoot certificates and issuers within Kubernetes clusters running cert-manager.
- **[Quantum3-Labs/ARBuilder](https://github.com/quantum3-labs/arbuilder)** `⭐ 24` `updated ≤180d` An MCP server that provides 19 tools for generating Arbitrum Stylus smart contracts, cross-chain SDK code, and full-stack dApps using a RAG pipeline with hybrid search.
- **[sim-xia/skill-cortex-server](https://github.com/sim-xia/skill-cortex-server)** `⭐ 24` `updated ≤1y` A third-party MCP server that scans, indexes, and serves Claude Code-style SKILL.md files to MCP-compatible IDEs with token-friendly context compression.
- **[tgeselle/bugsnag-mcp](https://github.com/tgeselle/bugsnag-mcp)** `⭐ 24` `updated ≤1y` A Model Context Protocol server that exposes Bugsnag error monitoring data, stacktraces, and project metadata to LLM tools like Cursor and Claude.
- **[x51xxx/codex-mcp-tool](https://github.com/x51xxx/codex-mcp-tool)** `⭐ 24` `updated ≤90d` An MCP server that exposes the OpenAI Codex CLI as a tool for AI assistants like Claude and Cursor.
- **[eirikb/any-cli-mcp-server](https://github.com/eirikb/any-cli-mcp-server)** `⭐ 23` `updated >1y` A tool that converts any CLI with --help output into an MCP server with auto-mapped tools.
- **[growthbook/growthbook-mcp](https://github.com/growthbook/growthbook-mcp)** `⭐ 23` `updated ≤30d` Official GrowthBook MCP server for interacting with feature flags and experiments via the Model Context Protocol.
- **[higress-group/higress-ops-mcp-server](https://github.com/higress-group/higress-ops-mcp-server)** `⭐ 23` `updated >1y` An MCP server implementation for comprehensive configuration and management of Higress, including a LangGraph-based MCP client.
- **[Hypersequent/qasphere-mcp](https://github.com/hypersequent/qasphere-mcp)** `⭐ 23` `updated ≤90d` MCP server that enables LLMs to interact with QA Sphere test management system.
- **[mattijsdp/dbt-docs-mcp](https://github.com/mattijsdp/dbt-docs-mcp)** `⭐ 23` `updated >1y` An MCP server that exposes dbt project metadata, graph information, and column-level lineage from artifacts like manifest.json and catalog.json to AI coding assistants.
- **[Pratyay/mac-monitor-mcp](https://github.com/pratyay/mac-monitor-mcp)** `⭐ 23` `updated ≤1y` A Model Context Protocol server that exposes macOS system resource metrics—CPU, memory, and network usage—as structured tools for LLM clients.
- **[ckanthony/Chisel](https://github.com/ckanthony/chisel)** `⭐ 22` `updated ≤1y` Rust-powered precision file tools for AI agents with patch-based edits and kernel-enforced path confinement, available as an MCP server or embeddable library.
- **[cq27-dev/rag-rat](https://github.com/cq27-dev/rag-rat)** `⭐ 22` `updated ≤30d` A local repository intelligence index and MCP server that provides semantic search, graph navigation, and source-anchored memory for coding agents.
- **[github-repos-manager-mcp](https://github.com/kurdin/github-repos-manager-mcp)** `⭐ 22` `updated >1y` An MCP server that enables MCP clients to interact with GitHub repositories using a personal access token.
- **[MindscapeHQ/mcp-server-raygun](https://github.com/mindscapehq/mcp-server-raygun)** `⭐ 22` `updated ≤1y` A remote MCP server that exposes Raygun server monitoring.
- **[Neverlow512/agent-droid-bridge](https://github.com/neverlow512/agent-droid-bridge)** `⭐ 22` `updated ≤180d` An MCP server that exposes Android device and emulator control via ADB as structured tools for MCP-compatible AI agents.
- **[sequa-ai/sequa-mcp](https://github.com/sequa-ai/sequa-mcp)** `⭐ 22` `updated ≤1y` An MCP server that connects AI coding assistants to Sequa's hosted contextual knowledge engine to provide always-current codebase documentation and internal standards.
- **[imatza-rh/mcp-zuul](https://github.com/imatza-rh/mcp-zuul)** `⭐ 21` `updated ≤90d` An MCP server for Zuul CI that enables debugging build failures, searching logs, managing pipelines, and monitoring jobs from MCP-compatible clients like Claude or Cursor.
- **[Luqueee/kivgraph](https://github.com/luqueee/kivgraph)** `⭐ 21` Luqueee/kivgraph ️ - Local code graph for coding agents: find code by intent, follow callers and references, inspect blast radius and trace dependencies across repositories.
- **[tooluse-labs/perfetto-mcp-rs](https://github.com/tooluse-labs/perfetto-mcp-rs)** `⭐ 21` `updated ≤90d` A Rust-based MCP server that lets AI coding agents analyze Perfetto performance traces using PerfettoSQL queries and dedicated Chrome profiling tools.
- **[VertexStudio/developer](https://github.com/vertexstudio/developer)** `⭐ 21` `updated >1y` Developer MCP Server is a Model Context Protocol server that provides file editing, shell command execution, screen capture, image processing, and workflow management capabilities for use with MCP clients like Claude Desktop.
- **[ambar/simctl-mcp](https://github.com/ambar/simctl-mcp)** `⭐ 20` `updated >1y` An MCP server that exposes iOS Simulator control operations as tools for AI assistants.
- **[asmith26/jupytercad-mcp](https://github.com/asmith26/jupytercad-mcp)** `⭐ 20` `updated ≤1y` An MCP server that enables natural language control of JupyterCAD for CAD operations.
- **[blakerouse/ssh-mcp](https://github.com/blakerouse/ssh-mcp)** `⭐ 20` `updated ≤180d` SSH MCP is a Model Context Protocol server that provides tools for managing SSH hosts and executing commands across groups of remote machines.
- **[bundler_mcp](https://github.com/subelsky/bundler_mcp)** `⭐ 20` `updated >1y` A Model Context Protocol (MCP) server for Ruby projects that lets AI agents query a Gemfile to list gems and retrieve specific source code and metadata details.
- **[currents-dev/currents-mcp](https://github.com/currents-dev/currents-mcp)** `⭐ 20` `updated ≤30d` An MCP server that connects AI agents to Currents for retrieving test results and CI insights.
- **[mcp-terragrunt-docs](https://github.com/excoriate/mcp-terragrunt-docs)** `⭐ 20` `updated >1y` A Deno and TypeScript-based MCP server that provides Terragrunt documentation and GitHub issue context to AI agents.
- **[networkx-mcp-server](https://github.com/brightlikethelight/networkx-mcp-server)** `⭐ 20` `updated ≤30d` An MCP server that exposes NetworkX graph analysis capabilities to AI assistants via the Model Context Protocol.
- **[SebastianGilPinzon/colab-mcp](https://github.com/sebastiangilpinzon/colab-mcp)** `⭐ 20` `updated ≤180d` Fixed & enhanced fork of Google's Colab MCP — tools visible at startup, GPU control, Windows support, no more 'Disconnected'.
- **[AI-by-design/primitiv](https://github.com/ai-by-design/primitiv)** `⭐ 19` `updated ≤30d` An infrastructure tool that reconciles design sources like Figma, Storybook, and codebases into a single machine-readable MCP contract.
- **[aybelatchane/mcp-server-terminal](https://github.com/aybelatchane/mcp-server-terminal)** `⭐ 19` `updated ≤1y` Terminal MCP Server provides structured terminal automation via MCP for AI agents to create, control, and read terminal sessions.
- **[Imagician](https://github.com/flowy11/imagician)** `⭐ 19` `updated ≤1y` A Model Context Protocol server providing image editing operations like resize, crop, convert, and compress for use with AI assistants.
- **[mcpware/ui-annotator-mcp](https://github.com/mcpware/ui-annotator-mcp)** `⭐ 19` `updated ≤1y` MCP server that injects hover labels onto web pages to enable AI assistants to reference UI elements by name via a reverse proxy.
- **[rust-cargo-docs-rag-mcp](https://github.com/promptexecution/rust-cargo-docs-rag-mcp)** `⭐ 19` `updated ≤1y` An MCP server that provides LLMs with tools to look up Rust crate documentation using RAG over rustdocs and rust-analyzer data.
- **[amol21p/mcp-interactive-terminal](https://github.com/amol21p/mcp-interactive-terminal)** `⭐ 18` `updated ≤1y` MCP server that enables AI agents (Claude Code, Cursor, Windsurf) to run interactive terminal sessions like REPLs, SSH, databases, and Docker with clean output and smart completion detection.
- **[axliupore/mcp-code-runner](https://github.com/axliupore/mcp-code-runner)** `⭐ 18` `updated >1y` An MCP server that provides a Docker-based code execution environment.
- **[OthmaneBlial/term_mcp_deepseek](https://github.com/othmaneblial/term_mcp_deepseek)** `⭐ 18` `updated >1y` A proof-of-concept MCP-like server that connects the DeepSeek API to a persistent terminal session via Flask, allowing an AI chat to execute shell commands.
- **[patchloom/patchloom](https://github.com/patchloom/patchloom)** `⭐ 18` patchloom/patchloom - Structured file edits for agents: JSON, YAML and TOML by selector, Markdown and AST edits, dry runs and multi-file transactional batches.
- **[vasayxtx/mcp-prompt-engine](https://github.com/vasayxtx/mcp-prompt-engine)** `⭐ 18` `updated ≤1y` MCP Prompt Engine is a Go-based MCP server that serves dynamic prompt templates using Go text/template syntax.
- **[ConfigCat/mcp-server](https://github.com/configcat/mcp-server)** `⭐ 17` `updated ≤30d` An official MCP server for ConfigCat that exposes feature flag and configuration management via the Model Context Protocol.
- **[izzzzzi/codewiki-mcp](https://github.com/izzzzzi/codewiki-mcp)** `⭐ 17` `updated ≤180d` MCP server that connects AI assistants to codewiki.google for searching, fetching docs, and asking questions about open-source repositories.
- **[mcp-ilert](https://github.com/ilert/mcp-ilert)** `⭐ 17` `updated >1y` MCP server for ilert that enables AI assistants to access alerting and incident management resources.
- **[thecombatwombat/replicant-mcp](https://github.com/thecombatwombat/replicant-mcp)** `⭐ 17` `updated ≤180d` An MCP server that connects AI assistants to Android development environments for building, testing, and debugging mobile apps via natural language.
- **[ejentum/ejentum-mcp](https://github.com/ejentum/ejentum-mcp)** `⭐ 16` `updated ≤180d` An MCP server that exposes Ejentum's reasoning, code, anti-deception, and memory 'cognitive harnesses' to agentic clients.
- **[gofireflyio/firefly-mcp](https://github.com/gofireflyio/firefly-mcp)** `⭐ 16` `updated ≤180d` A TypeScript-based MCP server that integrates with the Firefly platform to discover, manage, and codify cloud and SaaS resources.
- **[npm-search-mcp-server](https://github.com/btwiuse/npm-search-mcp-server)** `⭐ 16` `updated ≤1y` An MCP server that enables searching npm packages via the Model Context Protocol.
- **[raychao-oao/pty-mcp](https://github.com/raychao-oao/pty-mcp)** `⭐ 16` `updated ≤180d` An MCP server that provides AI agents with interactive PTY sessions for local shells, SSH, serial ports, and persistent remote terminal access.
- **[GittyBurstein/mermaid-mcp-server](https://github.com/gittyburstein/mermaid-mcp-server)** `⭐ 15` `updated ≤1y` MCP server that generates Mermaid diagrams from local or GitHub projects and renders them as PNG images via Kroki.
- **[Local History MCP](https://github.com/xxczaki/local-history-mcp)** `⭐ 15` `updated ≤90d` MCP server for accessing VS Code/Cursor's Local History.
- **[magna-nz/aspnetcore-debugger-mcp](https://github.com/magna-nz/aspnetcore-debugger-mcp)** `⭐ 15` `updated ≤90d` An MCP server that lets AI agents debug .NET/ASP.NET Core apps by pausing execution, inspecting runtime values, and mutating state.
- **[nnemirovsky/iwdp-mcp](https://github.com/nnemirovsky/iwdp-mcp)** `⭐ 15` `updated ≤180d` An MCP server and CLI that bridges the WebKit Inspector Protocol to let AI agents remotely debug iOS Safari on real devices.
- **[Screeny](https://github.com/rohanrav/screeny)** `⭐ 15` `updated >1y` A privacy-focused macOS MCP server that lets AI agents capture screenshots of user-approved windows without changing focus or interrupting workflow.
- **[ArchAI-Labs/fastmcp-sonarqube-metrics](https://github.com/archai-labs/fastmcp-sonarqube-metrics)** `⭐ 14` `updated ≤1y` An MCP server that exposes SonarQube metrics, project data, and issue tracking as tools for AI assistants.
- **[back1ply/agent-skill-loader](https://github.com/back1ply/agent-skill-loader)** `⭐ 14` `updated ≤180d` An MCP server that exposes Claude Code Skills as MCP Prompts and Tools for AI agents.
- **[daisys-mcp](https://github.com/daisys-ai/daisys-mcp)** `⭐ 14` `updated >1y` An MCP server that integrates the Daisys AI platform with MCP-compatible clients.
- **[misiektoja/kill-process-mcp](https://github.com/misiektoja/kill-process-mcp)** `⭐ 14` `updated ≤1y` kill-process-mcp is an MCP server that exposes natural language tools to list and terminate OS processes.
- **[AutomateLab-tech/n8n-mcp](https://github.com/automatelab-tech/n8n-mcp)** `⭐ 13` `updated ≤180d` A debugging-focused MCP server for n8n that provides tools for workflow generation, linting, and execution diagnosis.
- **[carloshpdoc/memorydetective](https://github.com/carloshpdoc/memorydetective)** `⭐ 13` `updated ≤180d` An MCP server for diagnosing iOS memory leaks and performance regressions using specialized Swift-centric pattern recognition.
- **[deep-thinker](https://github.com/nachosystems/deep-thinker)** `⭐ 13` `updated ≤180d` An MCP server providing advanced cognitive reasoning capabilities with DAG thought graphs, 10 reasoning strategies, metacognition, and self-critique.
- **[LumabyteCo/clarifyprompt-mcp](https://github.com/lumabyteco/clarifyprompt-mcp)** `⭐ 13` `updated ≤90d` ClarifyPrompt MCP is an MCP server that compiles vague prompts into platform-specific prompts using workspace context and model capabilities.
- **[preflight-dev/preflight](https://github.com/preflight-dev/preflight)** `⭐ 13` `updated ≤1y` A 24-tool MCP server for Claude Code that intercepts prompts to catch ambiguity, scores prompt quality, searches session history with vector search, and estimates token costs.
- **[qainsights/locust-mcp-server](https://github.com/qainsights/locust-mcp-server)** `⭐ 13` `updated >1y` An MCP server that enables AI coding assistants to run Locust load tests by exposing test execution capabilities via the Model Context Protocol.
- **[riza-mcp](https://github.com/riza-io/riza-mcp)** `⭐ 13` `updated >1y` An MCP server that wraps the Riza API to let LLMs securely execute generated code and manage saved tools via isolated code interpreter endpoints.
- **[aktsmm/skill-ninja-mcp-server](https://github.com/aktsmm/skill-ninja-mcp-server)** `⭐ 12` `updated ≤180d` An MCP server for searching, installing, and managing AI agent skills.
- **[Archerkattri/mathlas](https://github.com/archerkattri/mathlas)** `⭐ 12` `updated ≤30d` A collection of airtight math tools provided via an MCP server, including theorem search, constant identification, and Lean kernel checks.
- **[efremidze/swift-patterns-mcp](https://github.com/efremidze/swift-patterns-mcp)** `⭐ 12` `updated ≤180d` An MCP server that provides curated Swift and SwiftUI best practices from leading iOS sources with search, retrieval, and memory features.
- **[gorosun/unified-diff-mcp](https://github.com/gorosun/unified-diff-mcp)** `⭐ 12` `updated >1y` An MCP server that visualizes code diffs as HTML or images with GitHub Gist integration for Claude Desktop.
- **[mumez/pharo-smalltalk-interop-mcp-server](https://github.com/mumez/pharo-smalltalk-interop-mcp-server)** `⭐ 12` `updated ≤180d` A local MCP server that exposes a Pharo Smalltalk image to AI assistants like Claude Code and Cursor for code evaluation, introspection, and UI debugging.
- **[nvms/tui-mcp](https://github.com/nvms/tui-mcp)** `⭐ 12` `updated ≤90d` An MCP server that wraps a managed pseudo-terminal (pty) to let AI agents launch, monitor, and interact with stateful TUI apps like vim, htop, and db shells as if they were sitting at a real terminal.
- **[opslevel/opslevel-mcp](https://github.com/opslevel/opslevel-mcp)** `⭐ 12` `updated ≤90d` An MCP server that provides read-only access to OpsLevel data, allowing AI assistants to query service catalogs, teams, repositories, and infrastructure metadata.
- **[scorable-mcp](https://github.com/root-signals/scorable-mcp)** `⭐ 12` `updated ≤180d` An MCP server that exposes Scorable evaluators, judges, and coding policy adherence checks as tools for AI assistants and agents.
- **[Sowiedu/Edict](https://github.com/sowiedu/edict)** `⭐ 12` `updated ≤90d` A programming language purpose-built for AI agents where programs are JSON ASTs, validated by a type/effect system and Z3 contracts, then compiled to WASM via an MCP server interface.
- **[teamcity-mcp](https://github.com/itcaat/teamcity-mcp)** `⭐ 12` `updated ≤1y` An MCP server that exposes JetBrains TeamCity as structured AI-ready resources and tools for LLM agents and IDE plugins.
- **[tersePrompts/fastMCP4J](https://github.com/terseprompts/fastmcp4j)** `⭐ 12` tersePrompts/fastMCP4J : Annotate a Java class to produce a production MCP server with tools, memory, and related capabilities.
- **[a-25/ios-mcp-code-quality-server](https://github.com/a-25/ios-mcp-code-quality-server)** `⭐ 11` `updated >1y` An MCP server that enables AI assistants to execute Xcode tests and perform SwiftLint analysis on iOS projects.
- **[ark-forge/mcp-eu-ai-act](https://github.com/ark-forge/mcp-eu-ai-act)** `⭐ 11` `updated ≤30d` MCP server and CLI tool that scans codebases for EU AI Act and GDPR compliance violations.
- **[digma-mcp-server](https://github.com/digma-ai/digma-mcp-server)** `⭐ 11` `updated >1y` An MCP server that provides AI agents with observability insights and dynamic code analysis via Digma.
- **[HainanZhao/mcp-gitlab-jira](https://github.com/hainanzhao/mcp-gitlab-jira)** `⭐ 11` `updated >1y` An MCP server that enables AI agents to interact with GitLab and Jira instances.
- **[meanands/npm-package-docs-mcp](https://github.com/meanands/npm-package-docs-mcp)** `⭐ 11` `updated >1y` An MCP server that fetches and returns the latest npm package documentation from GitHub or the npm tarball for use in IDEs.
- **[narumiruna/gitingest-mcp](https://github.com/narumiruna/gitingest-mcp)** `⭐ 11` `updated ≤180d` An MCP server that wraps gitingest to turn any Git repository into a structured text digest for AI assistants.
- **[rikarazome/prolog-reasoner](https://github.com/rikarazome/prolog-reasoner)** `⭐ 11` `updated ≤180d` A Python library and MCP server that exposes SWI-Prolog as a logic solver for LLMs to eliminate reasoning errors in constraint satisfaction and multi-step inference.
- **[sim-xia/blind-auditor](https://github.com/sim-xia/blind-auditor)** `⭐ 11` `updated ≤1y` An MCP server that intercepts AI-generated code and forces the host agent into a mandatory, isolated self-audit loop against configurable rules before releasing the output.
- **[ztuskes/garmin-documentation-mcp-server](https://github.com/ztuskes/garmin-documentation-mcp-server)** `⭐ 11` `updated >1y` MCP server for Garmin Connect IQ API documentation - complete offline access to SDK 8.2.3.
- **[blinkingbit-oss/execkit](https://github.com/blinkingbit-oss/execkit)** `⭐ 10` `updated ≤90d` Stateful, structured, safe command execution for AI agents over local shells, SSH, and Docker.
- **[conan-io/conan-mcp](https://github.com/conan-io/conan-mcp)** `⭐ 10` `updated ≤1y` A Model Context Protocol server that integrates the Conan package manager with MCP-compatible clients.
- **[deploy-mcp](https://github.com/alexpota/deploy-mcp)** `⭐ 10` `updated ≤180d` Universal deployment tracker for AI assistants that checks deployment status across platforms like Vercel, Netlify, and Cloudflare Pages without leaving the AI chat.
- **[faizbawa/mcp-remote-ssh](https://github.com/faizbawa/mcp-remote-ssh)** `⭐ 10` `updated ≤90d` An MCP server that provides AI agents with secure SSH access, including persistent sessions, SFTP, and automatic redaction of secrets in tool outputs.
- **[gavelcode/gavel](https://github.com/gavelcode/gavel)** `⭐ 10` `updated ≤30d` A code quality gate for Bazel monorepos that uses Bazel aspects to perform build-graph-aware linting, coverage, and architecture analysis.
- **[gregario/warhammer-oracle](https://github.com/gregario/warhammer-oracle)** `⭐ 10` `updated ≤30d` An MCP server providing Warhammer 40K and Kill Team rules, unit stats, and game flow tools for AI assistants.
- **[MarcelRoozekrans/memorylens-mcp](https://github.com/marcelroozekrans/memorylens-mcp)** `⭐ 10` `updated ≤90d` MemoryLens MCP is an MCP server that wraps JetBrains dotMemory to provide .NET memory profiling with AI-actionable code fix suggestions.
- **[mcp-files](https://github.com/flesler/mcp-files)** `⭐ 10` `updated ≤90d` An MCP server that enables AI agents to perform precise symbol discovery and surgical code editing within a codebase.
- **[ycs77/apifable](https://github.com/ycs77/apifable)** `⭐ 10` `updated ≤90d` MCP server that helps AI agents explore OpenAPI specs, search endpoints, and generate TypeScript types.
- **[3KniGHtcZ/codebeamer-mcp](https://github.com/3knightcz/codebeamer-mcp)** `⭐ 9` `updated ≤180d` An MCP server that enables AI assistants to read and write data within Codebeamer ALM via natural language.
- **[alvii147/piston-mcp](https://github.com/alvii147/piston-mcp)** `⭐ 9` `updated ≤1y` An MCP server that enables LLMs to execute code via the Piston API.
- **[cocaxcode/api-testing-mcp](https://github.com/cocaxcode/api-testing-mcp)** `⭐ 9` `updated ≤180d` An MCP server providing a suite of 42 tools for API testing, schema validation, and load testing.
- **[erajasekar/ai-diagram-maker-mcp](https://github.com/erajasekar/ai-diagram-maker-mcp)** `⭐ 9` `updated ≤180d` An MCP server that integrates AI Diagram Maker with MCP-compatible AI agents to generate software engineering diagrams from natural language, code, ASCII, images, or Mermaid.
- **[gupta-kush/spotify-mcp](https://github.com/gupta-kush/spotify-mcp)** `⭐ 9` `updated ≤1y` An MCP server that exposes 100+ Spotify tools (playback, playlists, discovery, curation) to Claude, Cursor, or any MCP client.
- **[hoklims/stacksfinder-mcp](https://github.com/hoklims/stacksfinder-mcp)** `⭐ 9` `updated ≤1y` MCP server that provides deterministic tech stack recommendations to LLM clients like Claude, Cursor, and Windsurf.
- **[JamesANZ/system-prompts-mcp-server](https://github.com/jamesanz/system-prompts-mcp-server)** `⭐ 9` `updated ≤1y` An MCP server that exposes system prompt files and summaries from popular AI tools as MCP tools for AI coding environments.
- **[kevinswint/xcode-studio-mcp](https://github.com/kevinswint/xcode-studio-mcp)** `⭐ 9` `updated ≤180d` Unified MCP server for AI-assisted iOS development that enables building, deploying, and interacting with iOS Simulator from MCP clients like Claude Code or Cursor.
- **[lorenzo-cambiaghi/LynxMCP](https://github.com/lorenzo-cambiaghi/lynxmcp)** `⭐ 9` `updated ≤180d` 100% local MCP server for semantic code search: AST-aware chunking, hybrid BM25+dense retrieval, code knowledge graph.
- **[phuongrealmax/code-guardian](https://github.com/phuongrealmax/code-guardian)** `⭐ 9` `updated ≤1y` An MCP server that provides over 113 tools to transform Claude Code into a code refactoring assistant for large repositories, featuring hotspot detection, session persistence, and a live progress dashboard.
- **[python-homey-mcp](https://github.com/pigmej/python-homey-mcp)** `⭐ 9` `updated >1y` A Python-based Model Context Protocol (MCP) server that exposes HomeyPro home automation devices, zones, and flows as tools for AI assistants.
- **[pzalutski-pixel/godotlens-mcp](https://github.com/pzalutski-pixel/godotlens-mcp)** `⭐ 9` `updated ≤180d` An MCP server that bridges AI coding agents to Godot's built-in Language Server to provide compiler-accurate semantic analysis for GDScript.
- **[testdino-hq/testdino-mcp](https://github.com/testdino-hq/testdino-mcp)** `⭐ 9` `updated ≤90d` An MCP server that exposes TestDino's test management platform to AI agents like Cursor and Claude, allowing conversational navigation of test results, failure analysis, and manual test case management.
- **[AIStoryHub/etincel](https://github.com/aistoryhub/etincel)** `⭐ 8` `updated ≤90d` A deterministic linter and MCP server for detecting AI-generated prose patterns and enforcing specific writing styles.
- **[allyson-mcp](https://github.com/isaiahbjork/allyson-mcp)** `⭐ 8` `updated >1y` An MCP server that generates animated SVG components from static files via AI, integrated with MCP-compatible assistants.
- **[endiagram/mcp](https://github.com/dushyant30suthar/endiagram-mcp)** `⭐ 8` `updated ≤180d` MCP server for EN Diagram that provides deterministic structural analysis of systems using graph theory.
- **[gregario/godot-forge](https://github.com/gregario/godot-forge)** `⭐ 8` `updated ≤180d` An MCP server for Godot 4 that provides test running, API docs search, script analysis, and other Godot-specific tools.
- **[irskep/persistproc](https://github.com/irskep/persistproc)** `⭐ 8` `updated >1y` MCP server and CLI tool for managing and inspecting long-running processes for AI agents.
- **[l337-org/docker-mcp](https://github.com/l337-org/docker-mcp)** `⭐ 8` `updated ≤90d` An MCP server that enables AI agents to manage Docker containers, images, networks, volumes, and Swarm services.
- **[legends-mcp](https://github.com/aytuncyildizli/legends-mcp)** `⭐ 8` `updated ≤1y` An MCP server that lets users chat with simulated legendary founders and investors in Claude Code.
- **[mattjegan/swarmia-mcp](https://github.com/mattjegan/swarmia-mcp)** `⭐ 8` `updated >1y` A read-only local MCP server that exposes Swarmia's Export API to MCP clients for querying pull request metrics, DORA metrics, investment balance, and effort reporting.
- **[NAJEMWEHBE/unreal-ai-connection](https://github.com/najemwehbe/unreal-ai-connection)** `⭐ 8` `updated ≤90d` An MCP server that provides over 140 tools to automate Unreal Engine 5.7 via a local TCP socket.
- **[ofershap/cursor-usage](https://github.com/ofershap/cursor-usage)** `⭐ 8` `updated ≤1y` An MCP server and plugin that wraps the Cursor Enterprise API to let developers query team spending, usage, and model adoption directly through their AI agent.
- **[skullzarmy/vibealive](https://github.com/skullzarmy/vibealive)** `⭐ 8` `updated ≤1y` A framework-aware code analysis CLI and MCP server for Next.js projects that detects unused files, dead code, and redundant API endpoints.
- **[valado/pantheon-mcp](https://github.com/valado/pantheon-mcp)** `⭐ 8` `updated >1y` An MCP server that provides on-demand access to a collection of specialized AI agent definitions via list, get, and search tools.
- **[WilliamSmithEdward/xlide_mcp](https://github.com/williamsmithedward/xlide_mcp)** `⭐ 8` WilliamSmithEdward/xlide_mcp - Read, write, analyze and test VBA in Excel, Word, PowerPoint and Access files, with static analysis; the file layer works without Office installed.
- **[yanmxa/scriptflow-mcp](https://github.com/yanmxa/scriptflow-mcp)** `⭐ 8` `updated >1y` ScriptFlow MCP Server transforms AI workflows into persistent, executable scripts managed via the Model Context Protocol.
- **[YuliiaKovalova/dotnet-template-mcp](https://github.com/yuliiakovalova/dotnet-template-mcp)** `⭐ 8` `updated ≤90d` MCP server wrapping the .NET Template Engine for AI-driven template discovery, inspection, and instantiation.
- **[AKzar1el/mcp-web-validator](https://github.com/akzar1el/mcp-web-validator)** `⭐ 7` `updated ≤30d` An MCP server that provides HTML/CSS validation, technical SEO audits, accessibility checks, and screenshot capabilities to MCP-compliant clients.
- **[albertnahas/icogenie-mcp](https://github.com/albertnahas/icogenie-mcp)** `⭐ 7` `updated ≤1y` MCP server for IcoGenie that enables AI agents to generate SVG icons programmatically.
- **[Apex-Foundation/copilot-mcp](https://github.com/apex-foundation/copilot-mcp)** `⭐ 7` `updated ≤90d` An MCP server providing Web3 founders with tools for smart contract audits, jurisdiction matching, and fund discovery.
- **[apimatic-validator-mcp](https://github.com/apimatic/apimatic-validator-mcp)** `⭐ 7` `updated >1y` An MCP server that validates OpenAPI 2.0 and 3.0 specifications using APIMatic's API.
- **[Coding-Dev-Tools/click-to-mcp](https://github.com/coding-dev-tools/click-to-mcp)** `⭐ 7` `updated ≤30d` Wrap any Click or Typer CLI as an MCP server for AI agent integration.
- **[emailens/mcp](https://github.com/emailens/mcp)** `⭐ 7` `updated ≤90d` An MCP server that enables AI assistants to analyze, preview, and audit email HTML compatibility across 21 different email clients.
- **[hampsterx/claude-mcp-bridge](https://github.com/hampsterx/claude-mcp-bridge)** `⭐ 7` `updated ≤90d` MCP server that wraps Claude Code CLI as a subprocess to expose its capabilities to any MCP-compatible client.
- **[linuxsuren/atest-mcp-server](https://github.com/linuxsuren/atest-mcp-server)** `⭐ 7` `updated ≤1y` atests-mcp-server is an MCP server that exposes API testing functionality via the Model Context Protocol.
- **[mcp-server-chart](https://github.com/kamranbiglari/mcp-server-chart)** `⭐ 7` `updated >1y` An MCP server that provides comprehensive chart generation capabilities with type-safe configuration via Zod schemas.
- **[mmorris35/devplan-mcp-server](https://github.com/mmorris35/devplan-mcp-server)** `⭐ 7` `updated ≤180d` An MCP server that generates detailed, agent-executable development plans, roadmaps, and task breakdowns specifically for Claude Code.
- **[Pantani/ableton-mind](https://github.com/pantani/ableton-mind)** `⭐ 7` `updated ≤180d` Definitive MCP server for Ableton Live — full LOM coverage, embedded device knowledge base, and declarative music recipes. Build real music in Live from plain language with Claude, Cursor or Codex.
- **[spm-mcp](https://github.com/simpleswift/spm-mcp)** `⭐ 7` `updated >1y` A Model Context Protocol server written in Swift that exposes Swift Package Manager automation capabilities to MCP-compatible coding assistants.
- **[tersePrompts/jarp-mcp](https://github.com/terseprompts/jarp-mcp)** `⭐ 7` tersePrompts/jarp-mcp : Gives AI agents X-ray vision into compiled Java — scan Maven/Gradle deps, decompile classes with CFR. npx jarp-mcp.
- **[urlDNA](https://github.com/urldna/mcp)** `⭐ 7` `updated ≤180d` urlDNA MCP Server is a Model Context Protocol server that exposes URL threat intelligence scanning and brand monitoring tools to LLM agents.
- **[aradar46/reuse-before-generate](https://github.com/aradar46/reuse-before-generate)** `⭐ 6` `updated ≤90d` An MCP server that searches GitHub, npm, and PyPI to identify existing codebases and products before an AI agent scaffolds new ones.
- **[catallo/misterclaw](https://github.com/catallo/misterclaw)** `⭐ 6` `updated ≤90d` MiSTerClaw is an MCP server that enables AI agents to remotely control a MiSTer-FPGA retro-gaming device.
- **[clojars-mcp-server](https://github.com/bigsy/clojars-mcp-server)** `⭐ 6` `updated >1y` A Model Context Protocol (MCP) server that provides tools for fetching dependency information from the Clojars artifact repository.
- **[flipt-io/mcp-server-flipt](https://github.com/flipt-io/mcp-server-flipt)** `⭐ 6` `updated ≤90d` An MCP server that enables AI assistants to interact with Flipt for feature flag management.
- **[gregario/dnd-oracle](https://github.com/gregario/dnd-oracle)** `⭐ 6` `updated ≤90d` An MCP server providing D&D 5e SRD data tools for monster search, spell lookup, encounter building, and character analysis.
- **[mcp-server](https://github.com/rad-security/mcp-server)** `⭐ 6` `updated ≤180d` An MCP server that exposes RAD Security's Kubernetes and cloud security insights, container inventory, CVE data, and audit logs to AI assistants like Claude Desktop and Cursor.
- **[mikan-atomoki/text-to-model](https://github.com/mikan-atomoki/text-to-model)** `⭐ 6` `updated ≤1y` An MCP server add-in that connects Claude Desktop or Claude Code to Autodesk Fusion 360, exposing 64 CAD tools for natural language control of 3D modeling.
- **[portkey-admin-mcp](https://github.com/codeswhat/portkey-admin-mcp)** `⭐ 6` `updated ≤30d` An MCP server that provides 150 tools for managing the Portkey Admin API, including prompt versioning, configs, and analytics.
- **[rm-rf-prod/GroundTruth-MCP](https://github.com/rm-rf-prod/groundtruth-mcp)** `⭐ 6` rm-rf-prod/GroundTruth-MCP - Self-hosted MCP for live docs, code audits, snippets, and best practices across 445+ libraries. 14 tools, 107 audit patterns with file:line precision, BM25-ranked snippets, lockfile-aware version pinning, npm/PyPI/crates.io/Go fallback. No API keys, no rate limits, Context7 alternative. npx -y @groundtruth-mcp/gt-mcp.
- **[rrmistry/tilt-mcp](https://github.com/rrmistry/tilt-mcp)** `⭐ 6` `updated ≤1y` An MCP server that exposes Tilt resources, logs, and controls to LLMs, allowing AI assistants to debug and monitor Kubernetes workloads via the Tilt dev environment.
- **[shipstatic/mcp](https://github.com/shipstatic/mcp)** `⭐ 6` `updated ≤180d` An MCP server that lets AI agents instantly deploy static sites and prototypes to *.shipstatic.com without accounts or API keys.
- **[Webvizio/mcp](https://github.com/webvizio/mcp)** `⭐ 6` `updated ≤1y` Webvizio MCP Server is a TypeScript-based Model Context Protocol server that converts website feedback and bug reports into developer tasks for AI coding tools.
- **[carldaws/squiggles](https://github.com/carldaws/squiggles)** `⭐ 5` `updated ≤30d` MCP server that lets your coding agent see the squiggles — LSP diagnostics, navigation, refactoring, and each server's custom superpowers.
- **[clayytsai/agent-discovery-mcp](https://github.com/clayytsai/agent-discovery-mcp)** `⭐ 5` `updated ≤180d` An MCP server that allows AI coding agents to discover on-chain agents via the ERC-8004 standard and pay them using the x402 protocol.
- **[clouatre-labs/math-mcp-learning-server](https://github.com/clouatre-labs/math-mcp-learning-server)** `⭐ 5` `updated ≤30d` An educational MCP server providing math operations, matrix algebra, data visualization, and persistent workspace functionality.
- **[Contentrain/ai](https://github.com/contentrain/ai)** `⭐ 5` `updated ≤30d` Repo-native content governance for AI agents that extracts, reviews, and delivers UI text, docs, and structured content from Git.
- **[denismaggior8/enigma-python-mcp](https://github.com/denismaggior8/enigma-python-mcp)** `⭐ 5` `updated ≤90d` An MCP server that provides LLMs with tools to encrypt and decrypt messages using historically accurate Enigma machine emulators.
- **[editorconfig_mcp](https://github.com/neilberkman/editorconfig_mcp)** `⭐ 5` `updated >1y` An MCP-compliant server that formats files using project .editorconfig rules to prevent AI coding agents from generating minor formatting errors.
- **[entire-vc/evc-spark-mcp](https://github.com/entire-vc/evc-spark-mcp)** `⭐ 5` `updated ≤90d` MCP server that exposes the Spark workflow catalog (agents, skills, prompts, bundles, MCP connectors) to MCP-compatible clients like Claude, ChatGPT, and Cursor.
- **[ericbrown/project-context-mcp](https://github.com/ericbrown/project-context-mcp)** `⭐ 5` `updated ≤1y` An MCP server that exposes project documentation in a `.context/` folder to Claude Code via `@` mentions for instant contextual access.
- **[flowzap-xyz/flowzap-mcp](https://github.com/flowzap-xyz/flowzap-mcp)** `⭐ 5` `updated ≤90d` An MCP server that enables AI assistants to generate workflow, sequence, and architecture diagrams using the FlowZap DSL.
- **[GeiserX/spinnaker-mcp](https://github.com/geiserx/spinnaker-mcp)** `⭐ 5` `updated ≤90d` An MCP server that exposes Spinnaker's Gate API to LLMs for managing applications, pipelines, and deployments.
- **[iksnerd/adb-mcp](https://github.com/iksnerd/adb-mcp)** `⭐ 5` iksnerd/adb-mcp ️ - Drive Android emulators and devices over adb: screenshots, UI inspection, tap/swipe/type, app lifecycle, logcat, screen recording and Gradle builds and tests.
- **[kenneives/design-token-bridge-mcp](https://github.com/kenneives/design-token-bridge-mcp)** `⭐ 5` `updated ≤1y` An MCP server that translates design tokens between platforms like Tailwind, Figma, CSS, Material 3, SwiftUI, and CSS Variables.
- **[mvtandas/wp-cli-mcp](https://github.com/mvtandas/wp-cli-mcp)** `⭐ 5` `updated ≤180d` An MCP server that exposes 30+ WP-CLI commands to AI coding tools, enabling direct management of WordPress themes, plugins, posts, and databases via prompt.
- **[NazarKalytiuk/tarn](https://github.com/nazarkalytiuk/tarn)** `⭐ 5` `updated ≤180d` A CLI-first API testing tool that uses YAML-defined tests and structured JSON output for AI-assisted debugging workflows.
- **[paladini/devutils-mcp-server](https://github.com/paladini/devutils-mcp-server)** `⭐ 5` `updated ≤90d` An open-source MCP server that exposes 36 common developer utilities—such as hashing, encoding, JWT decoding, and JSON formatting—directly to MCP-compatible AI assistants.
- **[Perspective-AI/mcp](https://github.com/perspective-ai/mcp)** `⭐ 5` `updated ≤180d` An MCP server that connects AI assistants like Claude and Cursor to Perspective AI's conversational form-replacement platform for designing, analyzing, and automating AI concierges.
- **[soil-dev/capsulemcp](https://github.com/soil-dev/capsulemcp)** `⭐ 5` `updated ≤90d` Capsule CRM tools for Claude. Local install via npx, org-wide via Custom Connectors.
- **[TomD4vs/prumo](https://github.com/tomd4vs/prumo)** `⭐ 5` TomD4vs/prumo - Checks coding-agent context files (CLAUDE.md, AGENTS.md, SKILL.md) against the git index: broken links, missing paths, undefined commands and drift.
- **[VrtxOmega/omega-brain-mcp](https://github.com/vrtxomega/omega-brain-mcp)** `⭐ 5` `updated ≤180d` Omega Brain MCP is a standalone MCP server providing cross-session memory, a 10-gate VERITAS build pipeline, cryptographic audit ledger, and Cortex approval gate for AI agent governance.
- **[x51xxx/copilot-mcp-server](https://github.com/x51xxx/copilot-mcp-server)** `⭐ 5` `updated ≤1y` Copilot MCP Server is an open-source MCP server that connects IDEs and AI assistants to the GitHub Copilot CLI for code analysis and automation.
- **[AgiMaulana/HuaweiAppGalleryMcp](https://github.com/agimaulana/huaweiappgallerymcp)** `⭐ 4` `updated ≤180d` An MCP server that enables managing app publishing and metadata on Huawei AppGallery Connect through LLM-compatible clients.
- **[alimuratkuslu/byok-observability-mcp](https://github.com/alimuratkuslu/byok-observability-mcp)** `⭐ 4` `updated ≤180d` An MCP server that lets Claude Code or Codex CLI query observability backends (Grafana, Prometheus, Kafka UI, Datadog) without data leaving the local machine.
- **[andreilungeanu/cursor-delegate-mcp](https://github.com/andreilungeanu/cursor-delegate-mcp)** `⭐ 4` `updated ≤30d` An MCP server that allows coding assistants like Claude Code or GitHub Copilot to delegate multi-file implementation tasks to Cursor's Composer engine.
- **[appcreationsca/bumpguard-mcp](https://github.com/appcreationsca/bumpguard-mcp)** `⭐ 4` `updated ≤180d` An MCP server that uses static analysis to identify breaking dependency changes and verify AI-generated code against actually installed APIs.
- **[asif-nvc/e2b-sandbox-mcp](https://github.com/asif-nvc/e2b-sandbox-mcp)** `⭐ 4` `updated ≤180d` An MCP server that connects Claude Code with E2B cloud sandboxes for isolated GitHub repo work.
- **[avisangle/jenkins-mcp-server](https://github.com/avisangle/jenkins-mcp-server)** `⭐ 4` `updated ≤1y` An MCP server that enables interaction with Jenkins CI/CD servers, allowing job triggering, build status checks, and instance management through the Model Context Protocol.
- **[axiosdevs/agentscoin-mcp](https://github.com/axiosdevs/agentscoin-mcp)** `⭐ 4` `updated ≤180d` axiosdevs/agentscoin-mcp : Connects to a live EVM chain so agents can create a wallet, mine AGENT, send funds, and create or trade tokens.
- **[clj-kondo-MCP](https://github.com/bigsy/clj-kondo-mcp)** `⭐ 4` `updated >1y` clj-kondo-mcp is an MCP server that exposes clj-kondo linting for Clojure/ClojureScript/EDN files via the Model Context Protocol.
- **[davidan90/time-node-mcp](https://github.com/davidan90/time-node-mcp)** `⭐ 4` `updated >1y` An MCP server that provides timezone-aware date and time operations for AI assistants.
- **[djerok/glm-mcp](https://github.com/djerok/glm-mcp)** `⭐ 4` `updated ≤90d` GLM-MCP is an MCP server that routes coding tasks from Claude Opus, Copilot, or Codex to GLM as a cheaper subagent for file editing and execution.
- **[elevy99927/devops-mcp-webui](https://github.com/elevy99927/devops-mcp-webui)** `⭐ 4` `updated ≤1y` An MCP server that bridges OpenWebUI to Kubernetes clusters, enabling natural language cluster management.
- **[feedthrough/feedthrough](https://github.com/feedthrough/feedthrough)** `⭐ 4` `updated ≤180d` A debug bridge that injects into web applications to expose runtime internals, DOM state, and network requests to AI agents via MCP.
- **[gx-mcp-server](https://github.com/davidf9999/gx-mcp-server)** `⭐ 4` `updated ≤1y` A Python MCP server that exposes Great Expectations data quality tools to LLM agents via the Model Context Protocol.
- **[HasanJahidul/terminal-history-mcp](https://github.com/hasanjahidul/terminal-history-mcp)** `⭐ 4` `updated ≤180d` An MCP server that allows AI assistants to search shell history (zsh/bash/fish) using a local SQLite FTS5 index with secret redaction.
- **[hoainho/podium-mcp](https://github.com/hoainho/podium-mcp)** `⭐ 4` `updated ≤180d` One MCP server, 51 tools for AI agents on mobile + canvas UIs: iOS & Android automation, Maestro E2E, evidenced assertions, React Native/Metro debugging — plus a no-vision canvas/WebGL brain (Pixi/Konva/Fabric/Phaser/Three/Babylon) that drives game UIs like DOM elements, ~5x cheaper than screenshot loops.
- **[jigyasudham/veto](https://github.com/jigyasudham/veto)** `⭐ 4` `updated ≤90d` Veto is an MCP server that provides 49 specialist agents and 93 tools to augment AI CLIs like Claude Code and Codex with deterministic expert modules and optional LLM reasoning.
- **[Jungle-Grid/mcp-server](https://github.com/jungle-grid/mcp-server)** `⭐ 4` `updated ≤90d` MCP server that enables agents to submit, monitor, and retrieve logs from Jungle Grid AI workloads.
- **[kaggle-mcp-server](https://github.com/krishnapramodparupudi/kaggle-mcp-server)** `⭐ 4` `updated >1y` An MCP server that exposes Kaggle competition data to MCP-compatible clients like Claude Desktop.
- **[kukapay/twitter-username-changes-mcp](https://github.com/kukapay/twitter-username-changes-mcp)** `⭐ 4` `updated >1y` An MCP server that tracks and queries historical changes of Twitter usernames.
- **[mikusnuz/cws-mcp](https://github.com/mikusnuz/cws-mcp)** `⭐ 4` `updated ≤180d` An MCP server that lets developers upload, publish, manage metadata, and check the status of Chrome Web Store extensions directly from AI coding assistants like Claude Code.
- **[MohammadHijjawi97/since-cutoff](https://github.com/mohammadhijjawi97/since-cutoff)** `⭐ 4` MohammadHijjawi97/since-cutoff : Tells a coding agent what changed in a Python library's public API since its model's training cutoff, for one PyPI package (api_changes) or every pinned dependency of a project (project_changes), read statically with no model calls or API key and run with uvx since-cutoff@latest mcp.
- **[naveenayalla1-CS50/mcp-server-toolkit](https://github.com/naveenayalla1-cs50/mcp-server-toolkit)** `⭐ 4` `updated ≤180d` A toolkit of MCP servers that allow AI agents to perform semantic code search, database queries, and API introspection.
- **[ofershap/mcp-server-devutils](https://github.com/ofershap/mcp-server-devutils)** `⭐ 4` `updated ≤1y` A zero-auth MCP server that exposes 17 common developer utilities—such as base64, UUID, JWT decode, cron, timestamps, JSON, and regex—to AI assistants like Claude, Cursor, and VS Code Copilot.
- **[ofershap/mcp-server-github-actions](https://github.com/ofershap/mcp-server-github-actions)** `⭐ 4` `updated ≤1y` An MCP server that lets AI assistants like Claude and Cursor view GitHub Actions workflow runs, read logs, re-run failed jobs, and trigger deployments directly from the editor.
- **[OliverGrabner/composer-mcp](https://github.com/olivergrabner/composer-mcp)** `⭐ 4` OliverGrabner/composer-mcp : Interactive architecture canvas with real-time sync to your codebase built by AI MCP.
- **[saranshbamania/mobile-device-mcp](https://github.com/saranshbamania/mobile-device-mcp)** `⭐ 4` `updated ≤1y` An MCP server that gives AI coding assistants like Claude Code and Cursor the ability to see and interact with mobile devices via 49 tools for screenshots, UI inspection, touch input, and visual analysis.
- **[SegfaultSorcerer/heap-seance](https://github.com/segfaultsorcerer/heap-seance)** `⭐ 4` `updated ≤1y` An MCP server and CLI toolkit that channels JVM forensics tools to produce structured memory-leak verdicts inside Claude Code.
- **[TCSoftInc/testcollab-mcp-server](https://github.com/tcsoftinc/testcollab-mcp-server)** `⭐ 4` `updated ≤1y` An MCP server that connects AI coding assistants like Claude Code, Cursor, and Windsurf to TestCollab, enabling the creation, update, and querying of test cases, plans, and suites directly from the chat interface.
- **[tomholford/mcp-tic-tac-toe](https://github.com/tomholford/mcp-tic-tac-toe)** `⭐ 4` `updated >1y` A minimal MCP server written in Go that lets AI assistants play tic-tac-toe through standardized tool interfaces.
- **[Wopee-io/wopee-mcp](https://github.com/wopee-io/wopee-mcp)** `⭐ 4` `updated ≤90d` wopee-mcp is an MCP server that connects AI agents to Wopee.io for autonomous test generation and execution.
- **[wyattjoh/jsr-mcp](https://github.com/wyattjoh/jsr-mcp)** `⭐ 4` `updated ≤1y` A Deno-based Model Context Protocol server that provides LLM integration with the JavaScript Registry (JSR) for searching, managing, and publishing packages.
- **[zephexMCP/zephex-MCPs](https://github.com/zephexmcp/zephex-mcps)** `⭐ 4` zephexMCP/zephex-MCPs : Hosted MCP for coding agents — project context, find_code, package safety, Test Pulse. Cursor/Claude/Codex + CLI. https://zephex.dev/mcp.
- **[ahmedxuhri/bigindexer](https://github.com/ahmedxuhri/bigindexer)** `⭐ 3` `updated ≤90d` BGI is a static architecture analysis tool that groups code by behavioral role to generate bounded, machine-readable architectural graphs.
- **[andrewschreiber/desktopinsights-mcp](https://github.com/andrewschreiber/desktopinsights-mcp)** `⭐ 3` `updated ≤180d` An MCP server that provides access to Desktop Insights data regarding the SDKs and frameworks used by macOS and Windows applications.
- **[astandrik/codex-pets](https://github.com/astandrik/codex-pets)** `⭐ 3` `updated ≤30d` A community gallery, CLI, and MCP service for Codex-compatible animated pets, backed by YDB.
- **[AV-Labs-Co/cos-codex-bridge](https://github.com/av-labs-co/cos-codex-bridge)** `⭐ 3` `updated ≤30d` Local MCP for Chief of Staff agents to run Codex and Claude Code CLI project sessions with scoped access and durable receipts.
- **[ellmos-ai/ellmos-codecommander-mcp](https://github.com/ellmos-ai/ellmos-codecommander-mcp)** `⭐ 3` `updated ≤90d` An MCP server providing 17 developer-focused tools for code analysis, JSON repair, import management, Markdown export, diffs, and regex testing.
- **[Focus-GTS/eds-mcp-server](https://github.com/focus-gts/eds-mcp-server)** `⭐ 3` `updated ≤90d` An MCP server for Adobe Edge Delivery Services providing AI agents with 20 tools to preview, publish, and manage EDS sites.
- **[Gluestack UI MCP Server](https://github.com/gauravsaini/gluestack-ui-mcp-server)** `⭐ 3` `updated >1y` An MCP server that provides AI assistants with access to the Gluestack UI component library for React Native development.
- **[gregario/lorcana-oracle](https://github.com/gregario/lorcana-oracle)** `⭐ 3` `updated ≤180d` An MCP server for Disney Lorcana TCG that provides card search, deck analysis, and franchise browsing capabilities.
- **[HadiCherkaoui/crafty-mcp](https://github.com/hadicherkaoui/crafty-mcp)** `⭐ 3` `updated ≤90d` An MCP server that exposes the Crafty Controller 4 API as tools for AI assistants to manage Minecraft servers.
- **[HanSur94/matlab-mcp-server-python](https://github.com/hansur94/matlab-mcp-server-python)** `⭐ 3` `updated ≤90d` An MCP server that enables AI agents to execute MATLAB code, run async jobs, and interact with Plotly-converted MATLAB plots.
- **[HasanJahidul/localhost-mcp](https://github.com/hasanjahidul/localhost-mcp)** `⭐ 3` `updated ≤180d` An MCP server that allows AI agents to inspect, manage, and kill local development servers.
- **[jarvisassistantux/loopsense](https://github.com/jarvisassistantux/loopsense)** `⭐ 3` `updated ≤1y` LoopSense is an open-source MCP server that provides real-time feedback to AI coding agents by monitoring CI results, deployments, test outcomes, and file system changes.
- **[jawdat6/fixgraph-mcp](https://github.com/jawdat6/fixgraph-mcp)** `⭐ 3` `updated ≤1y` An MCP server that provides access to FixGraph's database of 25,000+ community-verified technical fixes for software and hardware issues.
- **[kannajune/mcp-architect](https://github.com/kannajune/mcp-architect)** `⭐ 3` `updated ≤180d` MCP server that analyzes codebases locally to provide architectural context like dependency graphs and hotspots to AI assistants.
- **[Karzone/TestAtlas](https://github.com/karzone/testatlas)** `⭐ 3` Karzone/TestAtlas #️⃣ - Maps a .NET Reqnroll/SpecFlow test-automation solution into a queryable SQLite file to search step definitions, check change impact and avoid duplicate code.
- **[kestiny18/spring-nacos-mcp](https://github.com/kestiny18/spring-nacos-mcp)** `⭐ 3` `updated ≤180d` A project-aware, read-only MCP server for Spring Cloud repositories that automatically discovers environments from application configuration files.
- **[marin1321/mcp-devtools](https://github.com/marin1321/mcp-devtools)** `⭐ 3` `updated ≤90d` An MCP server that gives AI agents scoped, audited access to local filesystem operations, database queries, shell commands, and OpenAPI endpoints.
- **[MikhailHal/ariadne](https://github.com/mikhailhal/ariadne)** `⭐ 3` `updated ≤90d` ariadne is an MCP (Model Context Protocol) server that provides AI agents with the ability to identify affected tests.
- **[Mogacode-ma/elementor-mcp-agent](https://github.com/mogacode-ma/elementor-mcp-agent)** `⭐ 3` `updated ≤90d` An agency-grade MCP server for WordPress Elementor that exposes multi-site management, safe data editing with backup and rollback, template export/import, and screenshots to any MCP client.
- **[myelixlabs/synapse-mcp](https://github.com/myelixlabs/synapse-mcp)** `⭐ 3` myelixlabs/synapse-mcp - Convert a codebase into a local AST knowledge graph that gives coding agents structural context for navigation and refactoring.
- **[nikicat/mcp-wallet-signer](https://github.com/nikicat/mcp-wallet-signer)** `⭐ 3` `updated ≤90d` An MCP server that routes blockchain transactions to browser wallets like MetaMask for explicit user approval, avoiding the need to paste private keys into agent configs.
- **[Nishant-Chaudhary5338/mcp-toolkit](https://github.com/nishant-chaudhary5338/mcp-toolkit)** `⭐ 3` `updated ≤90d` 59 MCP servers for React + TypeScript automation — component scaffolding, CRUD feature factory, WCAG checks, test gen, TS enforcement, render/perf analysis, CRA→Vite migration, legacy analysis. npx-installable.
- **[ofershap/mcp-server-dns](https://github.com/ofershap/mcp-server-dns)** `⭐ 3` `updated ≤1y` An MCP server that lets AI assistants perform DNS lookups, reverse DNS, and WHOIS queries using Node.js built-in DNS without API keys or configuration.
- **[ofershap/mcp-server-docker](https://github.com/ofershap/mcp-server-docker)** `⭐ 3` `updated ≤1y` An MCP server that lets AI coding assistants manage Docker containers, images, and volumes directly through the local Docker socket.
- **[Osseni94/oyemi-mcp](https://github.com/osseni94/oyemi-mcp)** `⭐ 3` `updated ≤1y` An MCP server that exposes the Oyemi semantic lexicon to AI agents, providing deterministic word-to-code mapping, valence analysis, and synonym lookups.
- **[Reachpad/reachpad-mcp](https://github.com/reachpad/reachpad-mcp)** `⭐ 3` Reachpad/reachpad-mcp ️ ☁️ - Persistent cloud dev environments for coding agents: create, run commands, checkpoint and fork, with files, services and terminal state kept between calls.
- **[Regenerating-World/pix-mcp](https://github.com/regenerating-world/pix-mcp)** `⭐ 3` `updated >1y` A lightweight MCP server that exposes a tool for generating static Pix QR codes compliant with BACEN EMV 4.0 standards.
- **[sazanami-lab/ariadne](https://github.com/sazanami-lab/ariadne)** `⭐ 3` MikhailHal/ariadne ☕ - Affected-test selection for Kotlin/Android projects: finds the unit tests impacted by working-tree changes via function-level static analysis.
- **[sena-labs/ozbridge](https://github.com/sena-labs/ozbridge)** `⭐ 3` sena-labs/oz-mcp-server - Bridges Warp's Oz coding agent to any IDE or MCP client (Claude Code, Cursor, Codex), plus native @oz in VS Code Copilot Chat. Independent project; uses only Warp's documented public interfaces. MIT.
- **[SLP-DEV1/qwen-dap-mcp](https://github.com/slp-dev1/qwen-dap-mcp)** `⭐ 3` SLP-DEV1/qwen-dap-mcp - DAP-to-MCP bridge for native debugging via CodeLLDB: stack frames, registers, locals, disassembly, memory, crash dumps and crash fix/verify workflows.
- **[synapse-code-mcp](https://github.com/juanmidev1/synapse-code-mcp)** `⭐ 3` `updated ≤90d` An MCP server that provides structural code context, dependency graphs, and symbol indexes to AI assistants.
- **[tatavarthitarun/nowsecure-mcp-server](https://github.com/tatavarthitarun/nowsecure-mcp-server)** `⭐ 3` `updated ≤180d` MCP server for NowSecure Platform: pull remediation findings and generate clean PDF reports, bypassing the broken UI report renderer.
- **[WhenLabs-org/when](https://github.com/whenlabs-org/when)** `⭐ 3` `updated ≤90d` A toolkit that installs six WhenLabs developer tools as a single MCP server for Claude Code.
- **[whyy9527/ariadne](https://github.com/whyy9527/ariadne)** `⭐ 3` `updated ≤90d` Ariadne is a CLI and MCP server that builds a cross-service API dependency graph for Spring Boot and TypeScript microservices via static analysis of GraphQL, REST, Kafka, and frontend queries.
- **[wooxogh/adr-mcp-setup](https://github.com/wooxogh/adr-mcp-setup)** `⭐ 3` `updated ≤1y` adr-mcp-setup is an MCP server that automatically captures Claude Code conversations and uses Claude Opus to generate Architecture Decision Records.
- **[1clawAI/1claw-mcp](https://github.com/1clawai/1claw-mcp)** `⭐ 2` `updated ≤30d` MCP server for 1claw secrets vault — gives AI agents secure, just-in-time access to secrets.
- **[4da](https://github.com/4da-systems/4da)** `⭐ 2` `updated ≤30d` A privacy-first tool that filters internet technical news and advisories based on a local codebase.
- **[4everland/4everland-hosting-mcp](https://github.com/4everland/4everland-hosting-mcp)** `⭐ 2` `updated >1y` An MCP server that enables AI models to deploy code instantly to decentralized storage networks like Greenfield, IPFS, and Arweave via 4EVERLAND.
- **[adiosdotdev/mcp](https://github.com/adiosdotdev/mcp)** `⭐ 2` `updated ≤30d` A package that connects AI assistants to the Adios deployment and operations platform via the Model Context Protocol.
- **[ajibadedapo/flowproof-mcp](https://github.com/ajibadedapo/flowproof-mcp)** `⭐ 2` `updated ≤90d` An MCP server that enables AI assistants to execute reproducible bioinformatics pipelines with verifiable provenance.
- **[AntonioTF5/soul-mcp-server](https://github.com/antoniotf5/soul-mcp-server)** `⭐ 2` `updated ≤180d` MCP server for validating, generating, and scoring SOUL.md agent specification files from Claude Desktop or any MCP-compatible client.
- **[ashfaqbs/jev-mcp-spring](https://github.com/ashfaqbs/jev-mcp-spring)** `⭐ 2` `updated ≤30d` Java/Spring Boot MCP server for TypeSafe Jev.
- **[beardfaceguy/daimonos](https://github.com/beardfaceguy/daimonos)** `⭐ 2` `updated ≤30d` An agent-optimized OS layer that provides structured JSON tool outputs via MCP to reduce token waste.
- **[BlackMount-ai/blackmount-nlp-mcp](https://github.com/blackmount-ai/blackmount-nlp-mcp)** `⭐ 2` `updated ≤180d` A lightweight, dependency-free MCP server providing 45 local NLP tools—including sentiment analysis, readability scoring, and keyword extraction—for AI coding assistants.
- **[BoxBoxmari/my-pi](https://github.com/boxboxmari/my-pi)** `⭐ 2` `updated ≤30d` Local-first MCP runtime for coding agents with bounded filesystem access, safe writes, AST search, LSP navigation, and Git tooling.
- **[chaitin-ip-intelligence-search-tool](https://github.com/co0ontty/chaitin-ip-intelligence-search-tool)** `⭐ 2` `updated >1y` An MCP server providing IP reputation and threat intelligence queries via Chaitin's global honeypot network.
- **[chaoz23/inkcheck](https://github.com/chaoz23/inkcheck)** `⭐ 2` `updated ≤30d` A mechanical QA tool for ink stories providing compile checks, branch exploration, and dead-content detection via CLI and MCP.
- **[claudecodenavi-mcp](https://github.com/asicojp/claudecodenavi-mcp)** `⭐ 2` `updated ≤180d` An MCP server that integrates the ClaudeCodeNavi knowledge platform and marketplace with Claude Code.
- **[davidlin2k/pox-mcp-server](https://github.com/davidlin2k/pox-mcp-server)** `⭐ 2` `updated >1y` An MCP server that exposes POX SDN controller capabilities for network control, topology management, and OpenFlow device operations.
- **[degen0root/panchanga_api](https://github.com/degen0root/panchanga_api)** `⭐ 2` `updated ≤1y` PanchangaAPI -- Vedic Astrology MCP Server. 24 tools, 5 prompts, 3 resources. Swiss Ephemeris precision. Free tier + x402 USDC + Telegram Stars.
- **[delmas41/gradusnotation](https://github.com/delmas41/gradusnotation)** `⭐ 2` `updated ≤90d` An MCP server for music notation rendering, validation, and music theory analysis.
- **[deslay1/amendor-mcp](https://github.com/deslay1/amendor-mcp)** `⭐ 2` `updated ≤90d` An MCP server that connects coding agents to Amendor to pull in user-requested changes and open pull requests.
- **[Explorer-64/imagcon-mcp](https://github.com/explorer-64/imagcon-mcp)** `⭐ 2` `updated ≤90d` An MCP server that integrates the Imagcon API to generate PWA, iOS, and Android app icon sets from text descriptions.
- **[extentos/mcp-server](https://github.com/extentos/mcp-server)** `⭐ 2` extentos/mcp-server ️ - Build smart-glasses apps with AI agents — scaffold, validate, and simulate Meta smart glasses integrations (camera capture, voice, audio) in Android and iOS apps. Runs locally via npx -y @extentos/mcp-server.
- **[eyaushev/swagger-testcase-mcp](https://github.com/eyaushev/swagger-testcase-mcp)** `⭐ 2` `updated ≤180d` An MCP server that generates structured API test cases, validates OpenAPI specifications, and produces mock data from Swagger/OpenAPI files.
- **[forgemeshlabs/aso-audit-mcp](https://github.com/forgemeshlabs/aso-audit-mcp)** `⭐ 2` `updated ≤30d` Open-source MCP server that audits websites and APIs for AI agent discoverability signals, scoring them against an experimental Agent Signal Optimization (ASO) framework.
- **[GeiserX/lynxprompt-mcp](https://github.com/geiserx/lynxprompt-mcp)** `⭐ 2` `updated ≤30d` An MCP server that exposes LynxPrompt AI configuration blueprints like AGENTS.md and CLAUDE.md to LLMs via the Model Context Protocol.
- **[gregario/hearthstone-oracle](https://github.com/gregario/hearthstone-oracle)** `⭐ 2` `updated ≤180d` An MCP server providing Hearthstone card search, deck analysis, and strategy coaching for LLMs.
- **[gregario/onepiece-oracle](https://github.com/gregario/onepiece-oracle)** `⭐ 2` `updated ≤180d` An MCP server providing card search, deck analysis, and set browsing for the One Piece Card Game.
- **[GXtract](https://github.com/sascharo/gxtract)** `⭐ 2` `updated >1y` GXtract is an MCP server that provides tools for interacting with GroundX within VS Code and other editors.
- **[idapixl/algora-mcp-server](https://github.com/idapixl/algora-mcp-server)** `⭐ 2` `updated ≤1y` An MCP server that enables AI agents to discover, search, and analyze open-source bounties on Algora.
- **[izzzzzi/izTolkMcp](https://github.com/izzzzzi/iztolkmcp)** `⭐ 2` `updated ≤180d` MCP server that integrates the Tolk smart contract compiler for TON blockchain into AI assistants, enabling compile, check, and deploy workflows.
- **[kiruna-labs/userdispatch-mcp](https://github.com/kiruna-labs/userdispatch-mcp)** `⭐ 2` `updated ≤1y` A feedback widget and MCP server that lets AI coding agents read, triage, and respond to user feedback via MCP.
- **[laszlopere/mcp-bytesmith](https://github.com/laszlopere/mcp-bytesmith)** `⭐ 2` `updated ≤90d` A pure-Python MCP server providing local utilities for encoding, hashing, cryptography, and Ethereum primitives.
- **[louis030195/gptzero-mcp](https://github.com/louis030195/gptzero-mcp)** `⭐ 2` `updated ≤1y` An MCP server that exposes GPTZero's AI text detection API for use with MCP-compatible clients like Claude Desktop.
- **[marykovziridze/screaming-frog-mcp](https://github.com/marykovziridze/screaming-frog-mcp)** `⭐ 2` `updated ≤180d` An MCP server that lets Claude run Screaming Frog SEO Spider headless crawls, export data, and manage crawl storage from chat, with fixes for cross-platform support and previous stability bugs.
- **[mshegolev/jaeger-mcp](https://github.com/mshegolev/jaeger-mcp)** `⭐ 2` `updated ≤90d` An MCP server that provides LLM agents with read-only access to Jaeger distributed tracing data.
- **[muhannad-hash/git-context-mcp](https://github.com/muhannad-hash/git-context-mcp)** `⭐ 2` `updated ≤180d` An MCP server that enriches git blame data by tracing commits to their associated pull requests and linked GitHub issues to explain why a line of code exists.
- **[n8daniels/RulesetMCP](https://github.com/n8daniels/rulesetmcp)** `⭐ 2` `updated ≤1y` An MCP server that exposes version-controlled project rules, coding standards, and guidelines to AI agents via tools for listing, querying, and validating code against defined conventions.
- **[notasandy/mcp-code-sanitizer](https://github.com/notasandy/mcp-code-sanitizer)** `⭐ 2` `updated ≤180d` Strict AI code reviewer MCP server powered by Groq.
- **[ofershap/mcp-server-github-gist](https://github.com/ofershap/mcp-server-github-gist)** `⭐ 2` `updated ≤1y` An MCP server that lets AI assistants like Claude Desktop, Cursor, and VS Code Copilot create, read, update, and search GitHub Gists directly from the chat interface.
- **[prufa-dev/prufa-mcp](https://github.com/prufa-dev/prufa-mcp)** `⭐ 2` `updated ≤90d` The QA agent for your vibe-coded app. Apache-2.0 MCP server.
- **[Shadcn Registry Manager](https://github.com/reuvenaor/shadcn-registry-manager)** `⭐ 2` `updated >1y` An MCP server that exposes shadcn/ui CLI commands (init, add, list components) as tools so AI agents or automation can manage component registries remotely.
- **[shellsage-ai/mcp-server-boilerplate](https://github.com/shellsage-ai/mcp-server-boilerplate)** `⭐ 2` `updated ≤1y` Production-ready starter templates for building Model Context Protocol servers in TypeScript and Python.
- **[stagproject/sec-filings-mcp](https://github.com/stagproject/sec-filings-mcp)** `⭐ 2` `updated ≤180d` SEC EDGAR filing MCP for agents - search, preview, purchase (x402).
- **[TamarEngel/jira-github-mcp](https://github.com/tamarengel/jira-github-mcp)** `⭐ 2` `updated ≤1y` A Model Context Protocol server that exposes Jira and GitHub operations as AI tools to automate end-to-end developer workflows from issue tracking to pull request management.
- **[TKMD/ReftrixMCP](https://github.com/tkmd/reftrixmcp)** `⭐ 2` `updated ≤90d` An MCP server providing 39 tools for web design analysis, including layout extraction, motion detection, accessibility audits, and Core Web Vitals scoring via Playwright, pgvector, and ONNX Runtime.
- **[Vbj1808/retrieval-lens](https://github.com/vbj1808/retrieval-lens)** `⭐ 2` `updated ≤180d` MCP server that audits RAG retrieval - logs what chunks the model saw before any answer was generated.
- **[vdalhambra/axiom-calculator-mcp](https://github.com/vdalhambra/axiom-calculator-mcp)** `⭐ 2` `updated ≤180d` A personal finance calculator MCP server that exposes tools for mortgage, compound interest, FIRE, loan comparison, and debt payoff calculations via the Model Context Protocol.
- **[vincentvella/devloop](https://github.com/vincentvella/devloop)** `⭐ 2` `updated ≤90d` Browser control + dev-server logs on one correlated timeline — an MCP server with a headless (stdio) mode and an Electron cockpit. Built for AI agents.
- **[xctools-mcp-server](https://github.com/nzrsky/xctools-mcp-server)** `⭐ 2` `updated >1y` A Model Context Protocol server that exposes Xcode development tools like xcrun, xcodebuild, and xctrace to MCP-compatible AI assistants.
- **[Yocoolab/mcp-server](https://github.com/yocoolab/mcp-server)** `⭐ 2` Yocoolab/mcp-server ️ ☁️ - Pin visual feedback on live web pages with the Yocoolab extension and hand it to coding agents with the element, selector and screenshot attached.
- **[zaebee/codegraph-brain](https://github.com/zaebee/codegraph-brain)** `⭐ 2` zaebee/codegraph-brain - Local Python/TypeScript code graph: call tracing, multi-hop impact analysis, authz reachability audits, coupling metrics and architectural drift detection.
- **[zyqzyq/Unfour](https://github.com/zyqzyq/unfour)** `⭐ 2` zyqzyq/Unfour - Local-first backend dev workspace: API debugging, SSH, database and diagnostics tools, with scoped safety policies and confirmation for risky actions.
- **[2ools/mcp-server](https://github.com/2ools/mcp-server)** `⭐ 1` `updated ≤90d` Remote MCP server that enables AI assistants to build, version, preview, and export web applications and games via the 2ools platform.
- **[afloat16/jev-mcp](https://github.com/afloat16/jev-mcp)** `⭐ 1` `updated ≤30d` Unofficial conservative MCP server for TypeSafe AI Jev.
- **[aiulms/codelattice](https://github.com/aiulms/codelattice)** `⭐ 1` `updated ≤30d` 面向 AI 编程的本地代码图谱分析工具.
- **[alexbypa/github-projectpulse-mcp](https://github.com/alexbypa/github-projectpulse-mcp)** `⭐ 1` `updated ≤30d` An MCP server that enables AI assistants to analyze GitHub repository health, security, and DORA metrics.
- **[alforge-labs/alpha-forge-mcp](https://github.com/alforge-labs/alpha-forge-mcp)** `⭐ 1` `updated ≤90d` An MCP server that exposes the AlphaForge quantitative trading CLI to AI coding agents like Claude Code and Cursor.
- **[andypgray/resharper-cli-mcp](https://github.com/andypgray/resharper-cli-mcp)** `⭐ 1` `updated ≤30d` MCP server wrapping JetBrains' ReSharper CLI for headless C# inspection and code cleanup for coding agents.
- **[Antigravity-mcp-semantic-search-with-TypeSafeAi](https://github.com/greenyamao/antigravity-mcp-semantic-search-with-typesafeai)** `⭐ 1` `updated ≤30d` Fast semantic code search & diff sanity auditor for AI coding assistants (Antigravity, Cursor, Claude Code) powered by TypeSafe System One.
- **[apatureai/bastion](https://github.com/apatureai/bastion)** `⭐ 1` `updated ≤30d` An MCP server that enables coding agents to perform in-loop design reviews by analyzing rendered UIs.
- **[ariekogan/ateam-mcp](https://github.com/ariekogan/ateam-mcp)** `⭐ 1` `updated ≤30d` An MCP server that connects AI assistants to the ADAS platform for building, validating, and deploying multi-agent systems.
- **[baobabcat/demandscope](https://github.com/baobabcat/demandscope)** `⭐ 1` `updated ≤30d` An MCP server that provides tools for querying demand signals from GitHub, Hacker News, npm, and PyPI.
- **[builditwithgk/repo-cartographer](https://github.com/builditwithgk/repo-cartographer)** `⭐ 1` `updated ≤90d` Repo-cartographer is an MCP server, CLI, and GitHub Action that generates Mermaid or Graphviz architecture diagrams from any repository and enforces architecture rules via CI.
- **[dabito/hledit-mcp](https://github.com/dabito/hledit-mcp)** `⭐ 1` `updated ≤90d` MCP server for hledit that provides hash-anchored file edits to prevent stale writes in MCP-compatible clients.
- **[darktw/chatpipe-mcp](https://github.com/darktw/chatpipe-mcp)** `⭐ 1` `updated ≤1y` An MCP server that publishes HTML content as live, shareable web pages from AI coding agents.
- **[Declan142/calcnook-mcp-server](https://github.com/declan142/calcnook-mcp-server)** `⭐ 1` `updated ≤180d` MCP server exposing 24 financial calculation tools from calcnook to MCP-compatible AI agents like Claude Code, Cursor, and Goose.
- **[DigiCatalyst-Systems/dep-diff-mcp](https://github.com/digicatalyst-systems/dep-diff-mcp)** `⭐ 1` `updated ≤30d` MCP server that reads dependency changelogs and tells you what's risky in an upgrade.
- **[Easton-OU/rootpilot-mcp](https://github.com/easton-ou/rootpilot-mcp)** `⭐ 1` `updated ≤90d` An MCP server that exposes a read-only whitelist of SSH diagnostic commands to any MCP client for Linux server troubleshooting.
- **[eliottreich/taskbounty-mcp-server](https://github.com/eliottreich/taskbounty-mcp-server)** `⭐ 1` `updated ≤90d` An MCP server that enables AI agents to find, claim, and resolve funded bug bounties or test coverage tasks via the TaskBounty platform.
- **[Elmoaid/TempoGraph](https://github.com/elmoaid/tempograph)** `⭐ 1` `updated ≤180d` TempoGraph is a code graph context engine that builds a tree-sitter dependency graph of a repository and exposes 24 MCP tools to help AI agents identify the exact files needed for a task.
- **[Frontier-Compute/zcash-mcp](https://github.com/frontier-compute/zcash-mcp)** `⭐ 1` `updated ≤90d` An MCP server that implements the ZAP1 attestation and proof-verification layer for Zcash-based AI agent workflows.
- **[frostbyte-mcp](https://github.com/robocular/frostbyte-mcp)** `⭐ 1` `updated ≤1y` An MCP server that exposes 40+ developer APIs, including geolocation, crypto prices, DNS, web scraping, and code execution, to MCP-compatible AI agents and editors.
- **[getnahook/nahook-mcp](https://github.com/getnahook/nahook-mcp)** `⭐ 1` `updated ≤90d` The official Model Context Protocol server for Nahook, allowing AI clients to trigger webhooks, inspect deliveries, and debug failures.
- **[gregario/tft-oracle](https://github.com/gregario/tft-oracle)** `⭐ 1` `updated ≤180d` An MCP server providing accurate Teamfight Tactics game data (champions, traits, items, augments) for LLMs.
- **[helbertparanhos/resend-email-mcp](https://github.com/helbertparanhos/resend-email-mcp)** `⭐ 1` `updated ≤180d` An MCP server that provides full coverage of the Resend email API, including a specialized diagnostics layer for deliverability and DNS troubleshooting.
- **[henu-wang/geoscore-mcp](https://github.com/henu-wang/geoscore-mcp)** `⭐ 1` `updated ≤1y` MCP server for AI search optimization (GEO) that scans websites, generates llms.txt, and fixes Schema.org/meta tags for AI engine visibility.
- **[hivemindunit/llmintel-mcp](https://github.com/hivemindunit/llmintel-mcp)** `⭐ 1` `updated ≤90d` MCP server for AI model lifecycle data: check whether a model id is deprecated or retiring, and what to migrate to. Public mirror of packages/mcp from the LLMIntel monorepo.
- **[imqueue/mcp](https://github.com/imqueue/mcp)** `⭐ 1` `updated ≤90d` Model Context Protocol (MCP) server for @imqueue — lets AI coding agents (Claude Code, Cursor and others) search the docs, scaffold typed services & clients and use @imqueue/cli live.
- **[InnarM/blank-invoice-maker-mcp](https://github.com/innarm/blank-invoice-maker-mcp)** `⭐ 1` `updated ≤180d` An MCP server that enables AI assistants to generate pre-filled invoice links for the Blank Invoice Maker web app.
- **[Jambozx/onlinecybertools-mcp-server](https://github.com/jambozx/onlinecybertools-mcp-server)** `⭐ 1` `updated ≤180d` MCP stdio server exposing the Online Cyber Tools API as 279 MCP tools for AI agents.
- **[jcooley8/pincushion-plugin](https://github.com/jcooley8/pincushion-plugin)** `⭐ 1` `updated ≤180d` An MCP server that enables AI coding agents to read visual pins and implementation context from a live web application.
- **[jimmyhealer/jevex](https://github.com/jimmyhealer/jevex)** `⭐ 1` jevex — One MCP tool that returns the files a coding agent should read.
- **[kaka-milan-22/kops](https://github.com/kaka-milan-22/kops)** `⭐ 1` `updated ≤180d` A read-only kubectl wrapper that exposes Kubernetes cluster resources as structured JSON tools via the Model Context Protocol.
- **[kinti/a11y-toolkit](https://github.com/kinti/a11y-toolkit)** `⭐ 1` kinti/a11y-toolkit - MCP server + CLI for WCAG 2.2 accessibility: color contrast (pairs plus pixel-level text-over-image sampling), EU accessibility declaration generation (RD 1112/2018, Ley 11/2023 / European Accessibility Act, EN 301 549), and an aria-live announcement monitor. Multilanguage es/en, zero dependencies.
- **[laszlopere/mcp-abacus](https://github.com/laszlopere/mcp-abacus)** `⭐ 1` `updated ≤90d` A high-precision MCP server for performing complex arithmetic, calculus, and equation solving with support for multiple numeric modes.
- **[lisamaraventano-spine/mcp-server](https://github.com/lisamaraventano-spine/mcp-server)** `⭐ 1` `updated ≤180d` MCP server providing 19 tools for accessing digital goods and developer utilities from the Underground Cultural District, including agent-mesh and agent-identity for local tool installation.
- **[MailboxValidator/mcp-mailboxvalidator](https://github.com/mailboxvalidator/mcp-mailboxvalidator)** `⭐ 1` `updated ≤180d` Email validation MCP server using MailboxValidator API.
- **[mambalabsdev/mcp-domain-deliverability-checker](https://github.com/mambalabsdev/mcp-domain-deliverability-checker)** `⭐ 1` `updated ≤90d` An MCP server that enables AI clients to audit domain email deliverability and DNS health using Apify actors.
- **[MCP Expr Lang](https://github.com/ivan-saorin/mcp-expr-lang)** `⭐ 1` `updated >1y` An MCP server that integrates the expr-lang expression evaluation engine with Claude Desktop.
- **[microservices-sh/mcp](https://github.com/microservices-sh/mcp)** `⭐ 1` `updated ≤180d` Local stdio MCP server exposing an MCP stdio interface to agentic workflows on Cloudflare.
- **[mikusnuz/npm-mcp](https://github.com/mikusnuz/npm-mcp)** `⭐ 1` `updated ≤1y` MCP server for npm package management exposing 32 npm CLI tools via the Model Context Protocol.
- **[mithun4elp/briefkit-mcp-server](https://github.com/mithun4elp/briefkit-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server that generates structured SaaS specifications like database schemas and design systems to guide AI coding assistants.
- **[modus-agendi/managed-agent-control-mcp](https://github.com/modus-agendi/managed-agent-control-mcp)** `⭐ 1` `updated ≤90d` An MCP server that enables starting, observing, and interacting with Claude Managed Agents from any MCP-compatible client.
- **[Neem2004/android-mcp-server](https://github.com/neem2004/android-mcp-server)** `⭐ 1` Neem2004/android-mcp-server - ADB-based Android access: read-only logcat, UI hierarchy, package listing and allowlisted shell commands.
- **[oddunits/pntr-cli](https://github.com/oddunits/pntr-cli)** `⭐ 1` oddunits/pntr-cli ️ ☁️ - The official MCP server for PNTR free dev subdomains — register a *.pntr.dev subdomain, manage its DNS records, receive email on a disposable inbox, and capture inbound HTTP requests for webhook debugging. Free tier, no key needed to start. Local stdio via npx @pntr/cli or hosted endpoint (https://api.pntr.dev/mcp, OAuth).
- **[ofershap/mcp-server-npm-plus](https://github.com/ofershap/mcp-server-npm-plus)** `⭐ 1` `updated ≤1y` An MCP server that lets AI assistants search npm packages, check bundle sizes, scan for vulnerabilities, and inspect dependency trees using public registry APIs.
- **[playidea-lab/pcq](https://github.com/playidea-lab/pcq)** `⭐ 1` `updated ≤180d` playidea-lab/pcq - Agent-operable ML experiment contract (cq.yaml + JSON contracts) with a built-in MCP server exposing 14 tools (resolve/inspect/run/validate/describe/compare/lineage) for running, validating, and tracing experiments across any framework (PyTorch / HF Trainer / Lightning / sklearn / XGBoost). Apache-2.0.
- **[pylonapi/pylon-mcp](https://github.com/pylonapi/pylon-mcp)** `⭐ 1` `updated ≤1y` An MCP server that exposes 20 Pylon API tools—including web scraping, screenshots, PDF generation, and email—to AI agents via x402 micropayments on Base.
- **[razz-games/razz-mcp](https://github.com/razz-games/razz-mcp)** `⭐ 1` `updated ≤180d` An MCP server that exposes Razz.games' provably fair gambling platform — including dice, crash, plinko, and HexWar — as callable tools for AI agents.
- **[rog0x/mcp-docker-tools](https://github.com/rog0x/mcp-docker-tools)** `⭐ 1` rog0x/mcp-docker-tools : Docker management — containers, images, Dockerfile generation and analysis.
- **[rog0x/mcp-markdown-tools](https://github.com/rog0x/mcp-markdown-tools)** `⭐ 1` rog0x/mcp-markdown-tools : Markdown utilities — TOC generation, linting, formatting, and HTML conversion.
- **[rug-munch-mcp](https://github.com/marcus-rug-intel/rug-munch-mcp)** `⭐ 1` `updated ≤1y` MCP server for Marcus Rug Intel providing 19 crypto risk analysis tools including rug pull detection and AI forensics, compatible with Claude Desktop, Cursor, and Windsurf.
- **[simctl-mcp-server](https://github.com/nzrsky/simctl-mcp-server)** `⭐ 1` `updated >1y` A Model Context Protocol server that exposes iOS Simulator management commands (xcrun simctl) as structured tools for AI assistants.
- **[Souzix76/n8n-workflow-tester-safe](https://github.com/souzix76/n8n-workflow-tester-safe)** `⭐ 1` `updated ≤1y` A safe MCP server and CLI for testing, scoring, and inspecting n8n workflows with a constrained scope that excludes destructive admin operations.
- **[tao-izm/devpulse-mcp](https://github.com/tao-izm/devpulse-mcp)** `⭐ 1` `updated ≤180d` Zero-config MCP server that gives AI coding assistants a real-time diagnostic snapshot of your dev environment.
- **[thoughtproof/thoughtproof-mcp](https://github.com/thoughtproof/thoughtproof-mcp)** `⭐ 1` `updated ≤180d` An MCP server that provides adversarial multi-model reasoning verification for AI agents by challenging claims across Claude, Grok, DeepSeek, and Gemini with signed attestations.
- **[todah-zg/codemagic-mcp](https://github.com/todah-zg/codemagic-mcp)** `⭐ 1` `updated ≤180d` Build, sign, and publish iOS & Android apps through AI agents — Codemagic CI/CD + App Store Connect + Google Play.
- **[TranQui004/signalint](https://github.com/tranqui004/signalint)** `⭐ 1` TranQui004/signalint - Compact JavaScript/TypeScript diagnostics: clusters and prioritizes Oxlint, tsc and Biome issues, caches results and detects recurring diagnostic loops.
- **[verifyax/verifyax-mcp](https://github.com/verifyax/verifyax-mcp)** `⭐ 1` verifyax/verifyax-mcp ☁️ - MCP server for the VerifyAX platform. Enables agent evaluation, simulation testing, and functional/non-functional verification workflows through natural language.
- **[wulun811/LiuHe](https://github.com/wulun811/liuhe)** `⭐ 1` wulun811/LiuHe - Code tools for LLMs to read, understand and modify code, using a tree-sitter parser, SQLite index and transactional writes.
- **[XJTLUmedia/Context-First-MCP](https://github.com/xjtlumedia/context-first-mcp)** `⭐ 1` `updated ≤180d` An MCP server that provides 37 context-health, memory, reasoning, and verification tools to improve AI conversation reliability.
- **[5dive-ai/5dive-mcp](https://github.com/5dive-ai/5dive-mcp)** `⭐ 0` `updated ≤90d` An MCP server that exposes the 5dive agent-fleet CLI as tools for MCP-compatible clients like Claude Desktop and Cursor.
- **[akkireddy-challa/k8s-mcp-server](https://github.com/akkireddy-challa/k8s-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that provides read-only Kubernetes diagnostic and observability tools for AI agents.
- **[ant-dev-lab/nightmarquee-mcp](https://github.com/ant-dev-lab/nightmarquee-mcp)** `⭐ 0` `updated ≤30d` An MCP server providing art-directed website design prompts and live previews for coding assistants.
- **[aos-standard/mcp-agent-health](https://github.com/aos-standard/mcp-agent-health)** `⭐ 0` `updated ≤90d` MCP server for AOS-compliant agent health reporting.
- **[apexfaucet-hub/apex-x1-mcp](https://github.com/apexfaucet-hub/apex-x1-mcp)** `⭐ 0` `updated ≤30d` APEX MCP server: 126 tools. A real browser for your agent, ERC-8004 agent passports and checks on Arc, x402 paywall inspector, exit checks on seven chains, and Agent Meal NFTs for agents that use us. Pay per call with x402.
- **[Bishop81/imagedimensions-mcp](https://github.com/bishop81/imagedimensions-mcp)** `⭐ 0` `updated ≤90d` MCP server that audits images on any web page for natural vs rendered dimensions, oversized detection, and format breakdown.
- **[canopy-labs/featureflip-mcp](https://github.com/canopy-labs/featureflip-mcp)** `⭐ 0` `updated ≤30d` MCP server for Featureflip — manage feature flags from AI agents and editors (read-only mirror).
- **[chrassy/klanex-mcp](https://github.com/chrassy/klanex-mcp)** `⭐ 0` `updated ≤90d` An MCP server providing a reliable, asynchronous execution layer for agent tool calls with built-in error handling and schema validation.
- **[dbhq-uk/heliograph](https://github.com/dbhq-uk/heliograph)** `⭐ 0` `updated ≤30d` A tool for executing auditable, remote commands on machines without direct SSH access via specialized transport protocols.
- **[Dusheh/myclaw-toolkit](https://github.com/dusheh/myclaw-toolkit)** `⭐ 0` `updated ≤90d` A multi-purpose MCP server providing 24 developer utilities including web search, crypto prices, and local data formatting tools.
- **[ForeverTools/kiprio-mcp](https://github.com/forevertools/kiprio-mcp)** `⭐ 0` `updated ≤90d` MCP server exposing kiprio.com developer APIs (email/DNS/SSL/text/dev utilities) as tools for Claude, Cursor, and any MCP client.
- **[fstandhartinger/sandbox-as-a-service-mcp](https://github.com/fstandhartinger/sandbox-as-a-service-mcp)** `⭐ 0` `updated ≤30d` MCP server for Sandbox as a Service: give an agent a real Linux VM — run commands, move files, expose a preview URL, destroy it.
- **[gba3124/anyhook-mcp](https://github.com/gba3124/anyhook-mcp)** `⭐ 0` `updated ≤30d` MCP server + signature verification for AnyHook, the webhook relay with a keyless quickstart (npx -y anyhook-mcp).
- **[gridhra/port-keeper-mcp](https://github.com/gridhra/port-keeper-mcp)** `⭐ 0` `updated ≤30d` Local ledger for development ports — leases a block per project slot, renders env files, resolves service names to URLs, and serves it all over MCP. No daemon, no listener, no secrets.
- **[guillaumehussong/standard-vocal-mcp](https://github.com/guillaumehussong/standard-vocal-mcp)** `⭐ 0` `updated ≤90d` An MCP server that provides a toolset for deploying, evaluating, and auditing Vapi-based voice agents.
- **[hellob1889/Pandaone-AI-Agent](https://github.com/hellob1889/pandaone-ai-agent)** `⭐ 0` `updated ≤30d` Pandaone Guard — Free open-source MCP server for AI code audit. L1-L6 defense (file lock + audit log + pre-commit hooks) for Claude/Cursor/Trae. Local stdio, no API key, MIT.
- **[hikmahtech/drwhome](https://github.com/hikmahtech/drwhome)** `⭐ 0` hikmahtech/drwhome ☁️ – Remote MCP server at https://drwho.me/mcp/mcp with 10 developer utilities: base64 encode/decode, JWT decode (no verify), DNS lookup via Cloudflare DoH, UUID v4/v7, URL encode/decode, JSON format, User-Agent parse, IP lookup via ipinfo. Open access over streamable HTTP — point Claude Desktop at the URL.
- **[igorolv/sonar-mcp-server](https://github.com/igorolv/sonar-mcp-server)** `⭐ 0` igorolv/sonar-mcp-server ☕ - Read-only access to self-hosted SonarQube Community Build: issues, security hotspots, rules and code snippets so an agent can fix findings locally.
- **[jaggernaut007/Nexus-MCP](https://github.com/jaggernaut007/nexus-mcp)** `⭐ 0` jaggernaut007/Nexus-MCP - Local hybrid code search (vector, BM25 and code graph) with structural code graph analysis and persistent semantic memory.
- **[JoeGlenn1213/ActionD](https://github.com/joeglenn1213/actiond)** `⭐ 0` JoeGlenn1213/ActionD ️ - Local CI/CD for agents: runs jobs on LGH git events in isolated checkouts, with failure diagnosis, approval gates, auto-rollback and a web console.
- **[m00nreport/mcp-server](https://github.com/m00nreport/mcp-server)** `⭐ 0` m00nreport/mcp-server ️ ☁️ - Test management: author manual test cases, run executions, cut releases and link automated tests, with prompts for flaky-test triage and release readiness.
- **[MGM-FALCON/quelllm-mcp](https://github.com/mgm-falcon/quelllm-mcp)** `⭐ 0` `updated ≤90d` MCP server for quelllm.fr — 250+ open-weights LLM catalog. Tools: list/compare/estimate VRAM/estimate cost API vs self-hosted.
- **[ms-methos/jsonfabrica-mcp-server](https://github.com/ms-methos/jsonfabrica-mcp-server)** `⭐ 0` ms-methos/jsonfabrica-mcp-server - Generate realistic, schema-conformant JSON test data (single documents or relational batches) from reusable templates via the JsonFabrica API.
- **[ni-c/woodpecker-ci-mcp](https://github.com/ni-c/woodpecker-ci-mcp)** `⭐ 0` ni-c/woodpecker-ci-mcp - Drive a self-hosted Woodpecker CI: read failing step logs, restart, cancel or approve pipelines, and manage secrets, registries, crons, agents and the queue.
- **[nipun-arora/wordpress-mcp-agent-bridge](https://github.com/nipun-arora/wordpress-mcp-agent-bridge)** `⭐ 0` nipun-arora/wordpress-mcp-agent-bridge - WordPress plugin exposing Rank Math SEO fields, JSON-LD schema and restorable content snapshots as MCP tools, plus an additive-only write gate and audit log.
- **[OverlayQA/mcp](https://github.com/overlayqa/mcp)** `⭐ 0` OverlayQA/mcp ☁️ - WCAG accessibility and color-contrast audits plus QA issue tracking from your coding agent.
- **[pgyer-mcp-server](https://github.com/pgyer/pgyer-mcp-server)** `⭐ 0` `updated ≤1y` An MCP server that enables AI coding assistants to upload, list, and query application builds on the PGYER app distribution platform.
- **[pofky/asc-mcp](https://github.com/pofky/asc-mcp)** `⭐ 0` pofky/asc-mcp - App Store Connect control plane: 41 job-shaped tools that edit version metadata (with Apple's character limits validated), upload screenshots, build/sign/upload the binary, drive TestFlight, create IAPs and subscriptions with territory availability, run a release preflight audit, submit and release. Flags the steps Apple only allows on its website (privacy label, EU trader, first IAPs) instead of failing on them. Six tools need no license, three of those no Apple credentials either.
- **[reeinharddd/snapmcp](https://github.com/reeinharddd/snapmcp)** `⭐ 0` reeinharddd/snapmcp - Render terminal output, syntax-highlighted code, web pages, Markdown, HTML and git diffs as PNG, JPEG, PDF or GIF locally via Playwright.
- **[RexHuang/snaptools-mcp](https://github.com/rexhuang/snaptools-mcp)** `⭐ 0` RexHuang/snaptools-mcp : 32+ instant developer tools (JSON/CSS/HTML/SQL/XML formatting, Base64/URL encoding, hashing, UUID generation, regex testing, JWT decoding) via REST API. MCP + OpenAPI 3.1 ready. Free tier.
- **[rog0x/mcp-crypto-tools](https://github.com/rog0x/mcp-crypto-tools)** `⭐ 0` rog0x/mcp-crypto-tools : Cryptography tools — hashing, encoding, UUID generation, and password analysis.
- **[rog0x/mcp-git-tools](https://github.com/rog0x/mcp-git-tools)** `⭐ 0` rog0x/mcp-git-tools : Git analytics — log, diff, blame, branch stats, and commit insights for AI agents.
- **[rog0x/mcp-github-tools](https://github.com/rog0x/mcp-github-tools)** `⭐ 0` rog0x/mcp-github-tools : GitHub analytics — repos, PRs, issues, releases, and contributor activity via MCP.
- **[rog0x/mcp-npm-tools](https://github.com/rog0x/mcp-npm-tools)** `⭐ 0` rog0x/mcp-npm-tools : npm utilities — package search, audit, bundle analysis, and dependency checking.
- **[rog0x/mcp-regex-tools](https://github.com/rog0x/mcp-regex-tools)** `⭐ 0` rog0x/mcp-regex-tools : Regex utilities — test, explain, replace, and generate patterns for AI agents.
- **[shakaran/symfony-agent-mcp](https://github.com/shakaran/symfony-agent-mcp)** `⭐ 0` shakaran/symfony-agent-mcp - Read-only introspection of Symfony codebases: routes, controllers, services, entities, schema, migrations, Doctrine, Messenger, Twig and API Platform.
- **[smplkit/mcp](https://github.com/smplkit/mcp)** `⭐ 0` smplkit/mcp ☁️ - Schedule HTTP jobs (cron, one-off or on-demand) with retries and run history.
- **[specshield-io/specshield-mcp-server](https://github.com/specshield-io/specshield-mcp-server)** `⭐ 0` specshield26/specshield-mcp-server ☁️ - OpenAPI breaking-change detection and migration guides to check whether an API change is safe to ship.
- **[![badge](https://glama.ai/mcp/servers/cdeust/Cortex/badge)** badge is an MCP server exposing Cortex badge capabilities via the Model Context Protocol.
- **[![DollhouseMCP MCP server](https://glama.ai/mcp/servers/DollhouseMCP/mcp-server/badge)** An MCP server exposing a badge generation tool via the Model Context Protocol.
- **[bldbl.dev](https://bldbl.dev)** An AI task engine that plans project backlogs, scaffolds repositories, and streams implementation tasks via the Model Context Protocol (MCP).
- **[contextstream/mcp-server](https://www.npmjs.com/package/@contextstream/mcp-server)** An MCP server package published to npm by @contextstream.
- **[gitmcp.io](https://gitmcp.io)** GitMCP creates an instant MCP server for any GitHub repository by replacing github.com with gitmcp.io in the URL.
- **[https://mcp.1mcpserver.com/mcp/](https://mcp.1mcpserver.com/mcp)** Model Context Protocol infrastructure for AI agents to communicate with tools and data sources.
- **[MCP](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)** Model Context Protocol (MCP) is an open standard enabling AI applications to connect to external data sources, tools, and workflows via a unified interface.
- **[MCP](https://modelcontextprotocol.io/docs/getting-started/intro)** Model Context Protocol (MCP) is an open standard enabling AI applications to connect to external systems like data sources, tools, and workflows.
- **[RepoMapper](https://github.com.mcas.ms/pdavis68/RepoMapper)** An MCP server that provides repository mapping and structural context to AI agents.
- **[wearewarp.com/agents/mcp](https://www.wearewarp.com/agents/mcp)** An MCP server that enables AI agents to quote, book, and track freight shipments using Warp's carrier network.

</details>

## Finance, Crypto & DeFi

- **[mcp-server](https://github.com/financial-datasets/mcp-server)** `⭐ 2.3k` `updated >1y` An MCP server that provides access to the Financial Datasets stock market API for AI assistants. <details><summary>More about</summary>

  It enables LLMs to interact directly with live financial data, such as income statements and stock prices, within their existing tool-calling workflows.

  _Nothing says 'full-stack automation' like letting Claude perform financial analysis on your behalf without you having to copy-paste a single CSV._

  `mcp` `finance` `api` `stock-market` `data-retrieval`
  </details>
- **[frankfurter](https://github.com/lineofflight/frankfurter)** `⭐ 1.9k` `updated ≤90d` Frankfurter is an open-source currency data API that provides current and historical exchange rates sourced from central banks for 200+ currencies. <details><summary>More about</summary>

  Developers can self-host a free, zero-API-key exchange rate service or use the public instance to power financial features without vendor lock-in.

  _We now have MCP adapters for currency APIs, meaning your coding agent can panic about the euro-to-dollar rate while it hallucinates your LINQ queries._

  `currency-api` `self-hosted` `mcp` `financial-data`
  </details>
- **[mnemox-ai/tradememory-protocol](https://github.com/mnemox-ai/tradememory-protocol)** `⭐ 1.4k` `updated ≤90d` A persistent memory layer and MCP server that records trading decisions, outcomes, and audit trails for AI agents with SHA-256 tamper detection and outcome-weighted recall. <details><summary>More about</summary>

  It gives trading agents a memory system that survives context windows and produces regulator-ready audit trails across any market, broker, or AI platform.

  _Your AI trader still can't beat the market, but at least it can now perfectly document every dollar it forgot it lost._

  `mcp` `memory` `trading` `audit-trail` `context-engineering`
  </details>
- **[ariadng/metatrader-mcp-server](https://github.com/ariadng/metatrader-mcp-server)** `⭐ 814` `updated ≤1y` An MCP server that enables AI assistants to interact with the MetaTrader 5 trading platform for executing trades and retrieving market data. <details><summary>More about</summary>

  Developers and traders can automate trading workflows by delegating natural language commands to AI assistants, bridging AI capabilities with financial market operations.

  _Now your AI can lose money for you in real-time, just like a human trader._

  `mcp` `trading` `finance` `automation` `metatrader`
  </details>
- **[mcp_massive](https://github.com/massive-com/mcp_massive)** `⭐ 394` `updated ≤180d` An MCP server that exposes the Massive.com financial market data API via search, call, and query tools for LLMs. <details><summary>More about</summary>

  Lets developers use natural language to access real-time and historical financial data within LLM workflows without building custom API wrappers.

  _Another niche MCP server promising to turn your Claude Code into a Bloomberg terminal, if only your API key weren't rate-limited by noon._

  `mcp` `financial-data` `llm-tools`
  </details>
- **[blockrunai/blockrun-mcp](https://github.com/blockrunai/blockrun-mcp)** `⭐ 393` `updated ≤30d` BlockRun MCP is an open-source Model Context Protocol server that provides 19 real-time data and trading tools for AI agents, accessible via wallet or API key with pay-per-call micropayments. <details><summary>More about</summary>

  It lets developers equip AI agents with live market, research, and on-chain data plus the ability to execute real trades, all metered and paid per use.

  _Now your agent can not only hallucinate about Solana prices but also blow your USDC stack on a Polymarket long before you finish reading the disclaimer._

  `mcp` `crypto` `x402` `ai-agent` `micropayments`
  </details>
- **[mcpdotdirect/evm-mcp-server](https://github.com/mcpdotdirect/evm-mcp-server)** `⭐ 379` `updated ≤90d` An MCP server that exposes 22 blockchain tools and 10 AI-guided prompts for interacting with 60+ EVM-compatible networks like Ethereum, Optimism, and Base. <details><summary>More about</summary>

  It lets AI agents read blockchain state, call smart contracts with automatic ABI fetching, and sign transactions across dozens of chains through a single MCP interface.

  _Because nothing says 'I have my life together' like giving a large language model the ability to burn gas on six different L2s with nothing but a mnemonic and a vague prompt._

  `mcp` `evm` `blockchain` `agent-tooling` `web3`
  </details>
- **[XeroAPI/xero-mcp-server](https://github.com/xeroapi/xero-mcp-server)** `⭐ 371` `updated ≤180d` An MCP server that integrates with the MCP protocol. https://modelcontextprotocol.io/introduction.
- **[ferdousbhai/investor-agent](https://github.com/ferdousbhai/investor-agent)** `⭐ 346` `updated ≤90d` An MCP server that provides financial research tools including stock fundamentals, price history, and market indicators. <details><summary>More about</summary>

  It allows AI agents to access real-time financial data, fundamental analysis, and technical indicators via the Model Context Protocol.

  _Another way for your LLM to hallucinate a stock tip that sounds suspiciously like a rug pull._

  `mcp` `finance` `fintech` `data-retrieval` `investing`
  </details>
- **[agent-toolkit](https://github.com/paypal/agent-toolkit)** `⭐ 195` `updated ≤1y` A TypeScript toolkit from PayPal that exposes PayPal API functions as tools for agent frameworks and the Model Context Protocol (MCP). <details><summary>More about</summary>

  It standardizes how AI agents handle commerce tasks like invoices, orders, and subscriptions across popular frameworks like LangChain and Vercel's AI SDK.

  _Your agent can now autonomously refund a customer and create a dispute case, ensuring you have absolutely no excuse to talk to a human being ever again._

  `paypal` `mcp` `agent-tooling` `typescript` `fintech`
  </details>
- **[narumiruna/yfinance-mcp](https://github.com/narumiruna/yfinance-mcp)** `⭐ 195` `updated ≤90d` A Model Context Protocol server that exposes Yahoo Finance stock data, financial statements, news, and chart generation tools to AI assistants via yfinance. <details><summary>More about</summary>

  It lets coding agents query live market data, generate financial charts, and analyze ticker fundamentals without leaving the chat interface.

  _Because nothing says 'productive developer workflow' like your AI assistant day-trading semiconductor stocks while you wait for it to fix a null pointer exception._

  `mcp` `finance` `yahoo-finance` `python` `data-access`
  </details>
- **[Armor Crypto MCP](https://github.com/armorwallet/armor-crypto-mcp)** `⭐ 178` `updated >1y` An MCP server that enables AI agents to interact with blockchain wallets, swaps, and trading strategies across multiple chains. <details><summary>More about</summary>

  Developers can integrate crypto operations like wallet management, DCA trades, and cross-chain swaps directly into their AI agent workflows via MCP.

  _Now your AI agent can lose money on crypto trades at scale, just like a human developer._

  `mcp` `blockchain` `crypto` `trading` `wallet`
  </details>
- **[jjlabsio/korea-stock-mcp](https://github.com/jjlabsio/korea-stock-mcp)** `⭐ 177` `updated ≤90d` An MCP server that provides Korean stock analysis capabilities by integrating with DART and KRX official APIs. <details><summary>More about</summary>

  Enables developers to query Korean stock market data, financial statements, and disclosures directly through an MCP-compatible interface for AI-driven analysis.

  _Now your AI can finally explain why your Korean stock portfolio is a rollercoaster, if only it could also predict the next dip._

  `mcp-server` `financial-data` `korean-stock` `api-integration`
  </details>
- **[aaronjmars/web3-research-mcp](https://github.com/aaronjmars/web3-research-mcp)** `⭐ 163` `updated ≤30d` An MCP server providing deep research capabilities for cryptocurrency tokens using data from CoinGecko, DeFiLlama, and web searches. <details><summary>More about</summary>

  It allows AI assistants like Claude Desktop or Cursor to perform complex, multi-source crypto market analysis and technical research directly via the Model Context Protocol.

  _Because nothing says 'productive afternoon' like watching an LLM aggregate real-time DeFi liquidity metrics while you try to explain why you're staring at a terminal instead of working._

  `mcp` `crypto` `research` `web3` `data-retrieval`
  </details>
- **[OctagonAI/octagon-mcp-server](https://github.com/octagonai/octagon-mcp-server)** `⭐ 148` `updated ≤90d` An MCP server that provides AI-powered financial research and analysis by integrating with the Octagon Market Intelligence API to analyze SEC filings, earnings calls, and market data inside Claude Desktop and other MCP clients. <details><summary>More about</summary>

  Developers building financial tools or conducting market research can directly query live filings and private market data through their existing MCP-compatible assistant instead of writing custom scrapers.

  _You can now outsource your due diligence to a Claude plugin that turns 10-K filings into chat responses, while your actual job title remains 'Senior Financial Research Engineer.'._

  `mcp` `finance` `market-data` `research`
  </details>
- **[kukapay/freqtrade-mcp](https://github.com/kukapay/freqtrade-mcp)** `⭐ 146` `updated ≤1y` An MCP server that integrates with the Freqtrade cryptocurrency trading bot via its REST API to enable AI agent interaction. <details><summary>More about</summary>

  Developers can now use AI agents to monitor, control, and automate trading operations in Freqtrade through a standardized protocol.

  _Because nothing says 'production-ready' like letting an LLM place trades on your behalf._

  `mcp` `trading` `automation` `freqtrade` `crypto`
  </details>
- **[doggybee/mcp-server-ccxt](https://github.com/doggybee/mcp-server-ccxt)** `⭐ 145` `updated >1y` An MCP server that integrates cryptocurrency exchange APIs via CCXT for use with MCP-compatible LLMs. <details><summary>More about</summary>

  Lets developers query real-time market data and execute trades across 20+ exchanges directly from their AI coding workflows.

  _Now your AI can day-trade while you pretend to write unit tests._

  `mcp` `crypto` `ccxt` `trading` `finance`
  </details>
- **[kukapay/crypto-indicators-mcp](https://github.com/kukapay/crypto-indicators-mcp)** `⭐ 131` `updated ≤1y` An MCP server providing 50+ cryptocurrency technical analysis indicators and trading strategies for AI agents. <details><summary>More about</summary>

  Enables AI trading agents to analyze market trends and generate buy/hold/sell signals using modular, exchange-agnostic indicators.

  _Now your AI can day-trade crypto while you debug the MCP config at 3 AM._

  `mcp` `crypto` `trading` `technical-analysis` `quantitative`
  </details>
- **[HuggingAGI/mcp-baostock-server](https://github.com/huggingagi/mcp-baostock-server)** `⭐ 119` `updated ≤1y` An MCP server providing stock market data APIs for Chinese equities via the BaoStock library. <details><summary>More about</summary>

  Developers building financial analysis tools or AI agents can integrate real-time and historical Chinese stock market data through a standardized MCP interface.

  _Now your AI agent can day-trade A-shares while you pretend to write unit tests._

  `mcp-server` `financial-data` `stock-market` `baostock` `python`
  </details>
- **[Scottcjn/rustchain-mcp](https://github.com/scottcjn/rustchain-mcp)** `⭐ 118` `updated ≤90d` MCP server for RustChain blockchain and BoTTube video platform — AI agent tools for earning RTC tokens. Built on createkr's RustChain SDK.
- **[lunchmoney-mcp](https://github.com/akutishevsky/lunchmoney-mcp)** `⭐ 109` `updated ≤90d` An MCP server implementation that provides AI assistants with programmatic access to LunchMoney personal finance data via its API. <details><summary>More about</summary>

  It allows developers to integrate personal financial management, such as transaction tracking and budget analysis, directly into their AI-driven workflows and agentic toolsets.

  _Because nothing builds character like letting a large language model scrutinize your impulse-buy transaction history._

  `mcp` `finance` `lunchmoney` `api` `automation`
  </details>
- **[berlinbra/alpha-vantage-mcp](https://github.com/berlinbra/alpha-vantage-mcp)** `⭐ 104` `updated ≤1y` An MCP server that provides real-time financial market data via the Alpha Vantage API. <details><summary>More about</summary>

  Developers can integrate live stock, crypto, options, and ETF data into their MCP-enabled workflows without building custom API clients.

  _Now your coding agent can day-trade while it refactors your legacy code._

  `mcp` `finance` `api` `data` `alpha-vantage`
  </details>
- **[QuantGeekDev/coincap-mcp](https://github.com/quantgeekdev/coincap-mcp)** `⭐ 92` `updated >1y` A Model Context Protocol server that exposes coincap.io's public cryptocurrency API endpoints to MCP-compatible AI assistants like Claude Desktop. <details><summary>More about</summary>

  It lets developers query real-time crypto prices and market data directly from their AI assistant without needing API keys or additional registration.

  _We have reached the point where 'What is the price of bitcoin?' is a valid engineering workflow that requires its own protocol adapter._

  `mcp` `crypto` `finance` `api` `integration`
  </details>
- **[alchemy-mcp-server](https://github.com/alchemyplatform/alchemy-mcp-server)** `⭐ 88` `updated ≤30d` Alchemy's official MCP server enabling AI agents to interact with Alchemy's blockchain APIs. <details><summary>More about</summary>

  Lets developers integrate blockchain data queries and transactions into AI agent workflows without writing custom code.

  _Now your AI agent can ask the blockchain for your token balance while you still can't explain to your mom what a blockchain is._

  `mcp` `blockchain` `api-integration` `finance` `fintech`
  </details>
- **[ferdousbhai/tasty-agent](https://github.com/ferdousbhai/tasty-agent)** `⭐ 87` `updated ≤90d` An MCP server that enables LLMs to interact with TastyTrade brokerage accounts for portfolio monitoring and trading. <details><summary>More about</summary>

  It allows developers to build or use AI agents that can perform real-world financial actions like analyzing Greeks, monitoring positions, and executing trades via the Model Context Protocol.

  _Nothing tests your prompt engineering skills quite like an LLM hallucinating a massive multi-leg options order during a period of high volatility._

  `mcp` `finance` `trading` `brokerage` `automation`
  </details>
- **[ignaciohermosillacornejo/copilot-money-mcp](https://github.com/ignaciohermosillacornejo/copilot-money-mcp)** `⭐ 83` `updated ≤90d` An MCP server that enables AI assistants to query locally cached Copilot Money personal finance data. <details><summary>More about</summary>

  Developers can integrate personal finance data into AI workflows without cloud dependencies, enabling privacy-first financial queries.

  _Now your AI can judge your spending habits as harshly as your partner does._

  `mcp` `personal-finance` `local-data` `typescript` `bun`
  </details>
- **[twelvedata/mcp](https://github.com/twelvedata/mcp)** `⭐ 82` `updated ≤180d` Twelve Data MCP Server provides real-time financial market data access via the Model Context Protocol for integration with AI assistants. <details><summary>More about</summary>

  Developers can stream live stock, forex, and crypto data into Claude Desktop or other MCP clients using natural language queries via the included u-tool router.

  _Yet another financial data wrapper promising to eliminate API docs while requiring you to manage two API keys and a vector search layer just to get Apple's stock price._

  `mcp` `finance` `data-streaming`
  </details>
- **[Bankless/onchain-mcp](https://github.com/bankless/onchain-mcp)** `⭐ 80` `updated ≤180d` An MCP server that exposes the Bankless onchain API for AI models to interact with blockchain data. <details><summary>More about</summary>

  Lets AI assistants read contract state, fetch ABIs, decode events, and inspect transactions across EVM networks without custom tooling.

  _Now your AI can finally explain why your DeFi transaction reverted, but it still won’t fix your gas settings._

  `mcp` `blockchain` `evm` `onchain-data` `bankless`
  </details>
- **[kukapay/cryptopanic-mcp-server](https://github.com/kukapay/cryptopanic-mcp-server)** `⭐ 74` `updated ≤1y` An MCP server that provides cryptocurrency news to AI agents via the CryptoPanic API. <details><summary>More about</summary>

  Developers building AI agents that need real-time crypto news can integrate this as a pluggable context source.

  _Now your agent can panic about Bitcoin ETFs between writing unit tests._

  `mcp-server` `crypto` `news` `context-provider`
  </details>
- **[heurist-network/heurist-mesh-mcp-server](https://github.com/heurist-network/heurist-mesh-mcp-server)** `⭐ 67` `updated ≤1y` An MCP server that connects to Heurist Mesh APIs, providing access to 30+ specialized Web3 analytics agents for AI applications. <details><summary>More about</summary>

  Developers can integrate Web3-specific intelligence (e.g., token resolution, trending tokens, Twitter analytics) into their AI workflows via MCP-compatible interfaces like Claude or Cursor.

  _Now your AI can finally explain why your crypto portfolio is a disaster, one MCP tool call at a time._

  `mcp` `web3` `analytics` `agent-integration` `crypto`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+280 more in Finance, Crypto & DeFi &nbsp;—&nbsp; click to expand</strong></summary>

- **[getAlby/mcp](https://github.com/getalby/mcp)** `⭐ 66` `updated ≤90d` An MCP server that connects Bitcoin Lightning wallets to LLMs using Nostr Wallet Connect (NWC).
- **[@iiatlas/hledger-mcp](https://github.com/iiatlas/hledger-mcp)** `⭐ 65` `updated ≤1y` An MCP server that exposes HLedger CLI accounting functionality to AI assistants via the Model Context Protocol.
- **[norman-mcp-server](https://github.com/norman-finance/norman-mcp-server)** `⭐ 60` `updated ≤90d` An MCP server that connects accounting, invoicing, and VAT filing systems to AI assistants like Claude and Cursor for entrepreneurs in the European market.
- **[trade-it-mcp](https://github.com/trade-it-inc/trade-it-mcp)** `⭐ 60` `updated ≤1y` A remote MCP server that connects AI agents to stock, crypto, and options brokerages like Robinhood, Schwab, and Coinbase for natural-language trading.
- **[zlinzzzz/finData-mcp-server](https://github.com/zlinzzzz/findata-mcp-server)** `⭐ 57` `updated >1y` FinData enables  your AI agents retrieve financial data from different providers like Tushare, Wind, and DataYes.
- **[kukapay/whale-tracker-mcp](https://github.com/kukapay/whale-tracker-mcp)** `⭐ 56` `updated >1y` An MCP server for tracking cryptocurrency whale transactions via the Whale Alert API.
- **[kukapay/crypto-feargreed-mcp](https://github.com/kukapay/crypto-feargreed-mcp)** `⭐ 52` `updated >1y` An MCP server providing real-time and historical Crypto Fear & Greed Index data for integration with MCP-compatible clients.
- **[minhyeoky/mcp-server-ledger](https://github.com/minhyeoky/mcp-server-ledger)** `⭐ 51` `updated ≤1y` mcp-server-ledger is a Model Context Protocol server that enables LLMs to query and analyze financial data via Ledger CLI.
- **[anjor/coinmarket-mcp-server](https://github.com/anjor/coinmarket-mcp-server)** `⭐ 50` `updated >1y` An MCP server that exposes CoinMarketCap API endpoints as resources and tools for AI assistants.
- **[kukapay/crypto-sentiment-mcp](https://github.com/kukapay/crypto-sentiment-mcp)** `⭐ 47` `updated >1y` An MCP server that provides cryptocurrency sentiment analysis to AI agents using Santiment's social media and news data.
- **[wowinter13/solscan-mcp](https://github.com/wowinter13/solscan-mcp)** `⭐ 47` `updated >1y` An MCP server for querying Solana blockchain data via the Solscan API using natural language.
- **[algorand-mcp](https://github.com/goplausible/algorand-mcp)** `⭐ 44` `updated ≤90d` An MCP server and client that provides AI agents and LLMs with full access to the Algorand blockchain.
- **[coinpaprika/dexpaprika-mcp](https://github.com/coinpaprika/dexpaprika-mcp)** `⭐ 43` `updated ≤30d` dexpaprika-mcp is an MCP server that exposes real-time cryptocurrency token, DEX trading, and DeFi analytics data across multiple blockchains to AI assistants.
- **[kukapay/dune-analytics-mcp](https://github.com/kukapay/dune-analytics-mcp)** `⭐ 41` `updated >1y` An MCP server that exposes Dune Analytics query execution and results retrieval to AI agents.
- **[infaton/MCP35](https://github.com/infaton/mcp35)** `⭐ 40` `updated ≤180d` An MCP server providing 51 tools for interacting with 1C:Enterprise ERP databases via the Model Context Protocol.
- **[kukapay/uniswap-trader-mcp](https://github.com/kukapay/uniswap-trader-mcp)** `⭐ 40` `updated >1y` An MCP server enabling AI agents to automate token swaps on Uniswap DEX across multiple blockchains.
- **[dioptx/web3-docs](https://github.com/dioptx/web3-docs)** `⭐ 37` `updated ≤180d` MCP server for Web3 protocol documentation — EIPs, ERCs, BIPs, SIMDs, Cosmos ADRs, Polkadot RFCs, contract registry.
- **[evan-moon/firma](https://github.com/evan-moon/firma)** `⭐ 37` `updated ≤180d` A local-first CLI and built-in MCP server that lets developers pipe trade history into Claude to analyze portfolios, net worth, and cash flow using a local SQLite database.
- **[JamesANZ/prediction-market-mcp](https://github.com/jamesanz/prediction-market-mcp)** `⭐ 37` `updated ≤1y` An MCP server that provides real-time prediction market data from Polymarket, PredictIt, and Kalshi for AI workflows.
- **[SaintDoresh/YFinance-Trader-MCP-ClaudeDesktop](https://github.com/saintdoresh/yfinance-trader-mcp-claudedesktop)** `⭐ 37` `updated >1y` An MCP server that exposes yfinance stock market data, company metrics, and insider transactions as tools specifically adapted for Claude Desktop.
- **[laukikk/alpaca-mcp](https://github.com/laukikk/alpaca-mcp)** `⭐ 35` `updated >1y` Alpaca Trading MCP Server is a Model Context Protocol server that provides access to the Alpaca trading API for managing portfolios, placing trades, and retrieving market data.
- **[debridge-finance/debridge-mcp](https://github.com/debridge-finance/debridge-mcp)** `⭐ 31` `updated ≤30d` MCP server enabling AI agents to execute cross-chain cryptocurrency swaps and transfers via the deBridge protocol.
- **[ferdousbhai/wsb-analyst-mcp](https://github.com/ferdousbhai/wsb-analyst-mcp)** `⭐ 30` `updated >1y` An MCP server that provides real-time WallStreetBets Reddit data for analysis within LLM clients like Claude Desktop.
- **[kukapay/hyperliquid-info-mcp](https://github.com/kukapay/hyperliquid-info-mcp)** `⭐ 30` `updated >1y` An MCP server that exposes real-time Hyperliquid perpetual DEX data for use in bots, dashboards, and analytics.
- **[kukapay/jupiter-mcp](https://github.com/kukapay/jupiter-mcp)** `⭐ 29` `updated >1y` An MCP server for executing token swaps on the Solana blockchain using Jupiter's Ultra API.
- **[mcccsm/x402-list-mcp](https://github.com/mcccsm/x402-list-mcp)** `⭐ 26` mcccsm/x402-list-mcp ☁️ - Find and vet x402 payment APIs in the x402-list directory: search and rank services, check uptime, health, per-endpoint prices and on-chain settlement volume.
- **[pwh-pwh/coin-mcp-server](https://github.com/pwh-pwh/coin-mcp-server)** `⭐ 26` `updated >1y` A Deno-based MCP server that exposes Bitget cryptocurrency prices, announcements, and token details to MCP-compatible coding assistants.
- **[codex-data/codex-mcp](https://github.com/codex-data/codex-mcp)** `⭐ 25` `updated >1y` An MCP server that provides enriched blockchain data from Codex for use with MCP-compatible clients.
- **[openMF/mcp-mifosx](https://github.com/openmf/mcp-mifosx)** `⭐ 25` `updated ≤90d` An MCP server implementation that exposes Apache Fineract / Mifos X core banking operations as typed tools for AI agents across Go, Java, Python, and Rust runtimes.
- **[danishashko/yahoo-finance-mcp](https://github.com/danishashko/yahoo-finance-mcp)** `⭐ 22` `updated ≤30d` Beginner-friendly Yahoo Finance MCP server for Claude. Get real-time stock data, charts, financials, analyst ratings, and compare multiple companies.
- **[grahammccain/chart-library-mcp](https://github.com/grahammccain/chart-library-mcp)** `⭐ 22` `updated ≤180d` MCP server for Chart Library that enables AI agents to search historical stock chart patterns and retrieve empirical outcomes.
- **[kukapay/token-minter-mcp](https://github.com/kukapay/token-minter-mcp)** `⭐ 22` `updated >1y` An MCP server that enables AI agents to mint ERC-20 tokens across 21 blockchains.
- **[fewsats-mcp](https://github.com/fewsats/fewsats-mcp)** `⭐ 21` `updated >1y` An MCP server that integrates Fewsats to allow AI agents to securely perform financial transactions and check wallet balances.
- **[kukapay/rug-check-mcp](https://github.com/kukapay/rug-check-mcp)** `⭐ 21` `updated >1y` An MCP server that detects potential risks in Solana meme tokens by analyzing token data from the Solsniffer API.
- **[SaintDoresh/Crypto-Trader-MCP-ClaudeDesktop](https://github.com/saintdoresh/crypto-trader-mcp-claudedesktop)** `⭐ 21` `updated >1y` A Python-based MCP server that wraps the CoinGecko API to provide real-time cryptocurrency market data directly to Claude Desktop.
- **[janswist/mcp-dexscreener](https://github.com/janswist/mcp-dexscreener)** `⭐ 19` `updated >1y` An MCP server that provides access to the Dexscreener API for AI agents.
- **[ahnlabio/bicscan-mcp](https://github.com/ahnlabio/bicscan-mcp)** `⭐ 17` `updated ≤1y` An MCP server that provides blockchain address risk scoring and asset information via the BICScan API.
- **[kukapay/crypto-rss-mcp](https://github.com/kukapay/crypto-rss-mcp)** `⭐ 17` `updated >1y` An MCP server that aggregates real-time cryptocurrency news from multiple RSS feeds for AI agents.
- **[demwick/polymarket-agent-mcp](https://github.com/demwick/polymarket-agent-mcp)** `⭐ 16` `updated ≤30d` An MCP server providing 48 tools for interacting with Polymarket, including trading, market discovery, smart money tracking, copy trading, backtesting, risk management, and portfolio optimization.
- **[kukapay/crypto-orderbook-mcp](https://github.com/kukapay/crypto-orderbook-mcp)** `⭐ 16` `updated >1y` An MCP server that provides real-time order book depth and imbalance analysis across major crypto exchanges.
- **[kukapay/defi-yields-mcp](https://github.com/kukapay/defi-yields-mcp)** `⭐ 16` `updated >1y` An MCP server that lets AI agents fetch and analyze DeFi yield pool data from DefiLlama.
- **[27dream/mcp-eastmoney](https://github.com/27dream/mcp-eastmoney)** `⭐ 15` `updated ≤180d` An MCP server that provides real-time China A-share market data, including stock quotes, capital flows, and K-line history, to MCP-compatible AI assistants.
- **[finmap-org/mcp-server](https://github.com/finmap-org/mcp-server)** `⭐ 15` `updated ≤90d` An MCP server providing historical stock market data from US, UK, Russian, and Turkish exchanges.
- **[kukapay/crypto-news-mcp](https://github.com/kukapay/crypto-news-mcp)** `⭐ 15` `updated ≤1y` An MCP server that provides real-time cryptocurrency news from NewsData for AI agents.
- **[tatumio/blockchain-mcp](https://github.com/tatumio/blockchain-mcp)** `⭐ 15` `updated ≤180d` An MCP server that exposes Tatum's blockchain data API and RPC gateway tools to LLMs across 130+ networks.
- **[atomno-mcp/mcp-fns-check](https://github.com/atomno-mcp/mcp-fns-check)** `⭐ 14` `updated ≤30d` MCP server for checking Russian counterparties via FNS open data (EGRUL/EGRIP, EFRSB, KAD, FSSP).
- **[kukapay/hyperliquid-whalealert-mcp](https://github.com/kukapay/hyperliquid-whalealert-mcp)** `⭐ 14` `updated ≤1y` An MCP server that provides real-time whale alerts on Hyperliquid, flagging positions with a notional value exceeding $1 million.
- **[longbridge/longbridge-mcp](https://github.com/longbridge/longbridge-mcp)** `⭐ 14` `updated ≤90d` Longbridge MCP Server is an official Model Context Protocol server providing 145 financial tools for US and HK markets via the Longbridge brokerage API.
- **[mcp-xrpl](https://github.com/romthpt/mcp-xrpl)** `⭐ 13` `updated ≤180d` A TypeScript MCP server that exposes XRP Ledger operations—including account management, token transfers, NFTs, AMMs, and DEX interactions—to AI agents via the Model Context Protocol.
- **[kukapay/cointelegraph-mcp](https://github.com/kukapay/cointelegraph-mcp)** `⭐ 12` `updated >1y` An MCP server that provides real-time access to Cointelegraph news via RSS feeds.
- **[OSOJDJD/deeplook](https://github.com/osojdjd/deeplook)** `⭐ 12` `updated ≤180d` An MCP server that provides AI agents with real-time financial and company data from 8 APIs to prevent hallucinations in financial research.
- **[sophymarine/openregistry](https://github.com/sophymarine/openregistry)** `⭐ 12` `updated ≤180d` OpenRegistry is a hosted MCP server that provides AI agents with real-time, unmodified access to company records and raw filings from 27 national government registries.
- **[ThomasMarches/substrate-mcp-rs](https://github.com/thomasmarches/substrate-mcp-rs)** `⭐ 12` `updated ≤1y` A Rust-based Model Context Protocol (MCP) server that exposes Substrate blockchain operations—such as querying balances, storage, and submitting transactions—via the MCP protocol using the subxt crate.
- **[mcp-server-adfin](https://github.com/adfin-engineering/mcp-server-adfin)** `⭐ 11` `updated >1y` A Model Context Protocol server that connects Claude Desktop to Adfin APIs for finance and invoicing workflows.
- **[QuantOracledev/quantoracle](https://github.com/quantoracledev/quantoracle)** `⭐ 11` `updated ≤90d` A quantitative finance API and MCP server providing 63 deterministic calculators for options, derivatives, risk, and crypto math, designed to be called by autonomous financial agents.
- **[Frihet-io/frihet-mcp](https://github.com/frihet-io/frihet-mcp)** `⭐ 10` `updated ≤30d` An MCP server that enables AI assistants to interact with Frihet ERP for managing invoicing, tax compliance, banking, and business operations.
- **[kukapay/blockbeats-mcp](https://github.com/kukapay/blockbeats-mcp)** `⭐ 10` `updated ≤1y` An MCP server that provides blockchain news and in-depth articles from BlockBeats for AI agents.
- **[kukapay/crypto-portfolio-mcp](https://github.com/kukapay/crypto-portfolio-mcp)** `⭐ 10` `updated >1y` An MCP server for tracking and managing cryptocurrency portfolio allocations with real-time Binance prices and SQLite storage.
- **[kukapay/pancakeswap-poolspy-mcp](https://github.com/kukapay/pancakeswap-poolspy-mcp)** `⭐ 10` `updated >1y` An MCP server that tracks newly created liquidity pools on PancakeSwap in real-time for DeFi analysts and developers.
- **[kukapay/uniswap-poolspy-mcp](https://github.com/kukapay/uniswap-poolspy-mcp)** `⭐ 10` `updated >1y` An MCP server that tracks newly created Uniswap liquidity pools across nine blockchain networks in real-time.
- **[spfunctions/simplefunctions-cli](https://github.com/spfunctions/simplefunctions-cli)** `⭐ 10` `updated ≤180d` A CLI tool for interacting with prediction-market infrastructure on Kalshi and Polymarket, exporting structured JSON for coding agents.
- **[ahmetsbilgin/finbrain-mcp](https://github.com/ahmetsbilgin/finbrain-mcp)** `⭐ 9` `updated ≤30d` An MCP server that exposes FinBrain's financial datasets, including price predictions and market sentiment, to AI clients like Claude Desktop and VS Code.
- **[gosodax/builders-sodax-mcp-server](https://github.com/gosodax/builders-sodax-mcp-server)** `⭐ 9` `updated ≤90d` MCP server providing live cross-network DeFi API data and auto-updating SDK documentation for 17+ networks.
- **[kukapay/binance-alpha-mcp](https://github.com/kukapay/binance-alpha-mcp)** `⭐ 9` `updated >1y` An MCP server that tracks Binance Alpha trades and provides tools for AI agents to optimize alpha point accumulation.
- **[kukapay/etf-flow-mcp](https://github.com/kukapay/etf-flow-mcp)** `⭐ 9` `updated >1y` An MCP server that provides crypto ETF flow data to AI agents for decision-making.
- **[kukapay/thegraph-mcp](https://github.com/kukapay/thegraph-mcp)** `⭐ 9` `updated >1y` An MCP server that provides AI agents with indexed blockchain data from The Graph.
- **[kukapay/wallet-inspector-mcp](https://github.com/kukapay/wallet-inspector-mcp)** `⭐ 9` `updated >1y` An MCP server that enables AI agents to query wallet balances and onchain activity across EVM chains and Solana.
- **[KyuRish/trading212-mcp-server](https://github.com/kyurish/trading212-mcp-server)** `⭐ 9` `updated ≤180d` An MCP server that connects AI assistants to Trading 212's brokerage API for portfolio analytics, order management, and dividend tracking.
- **[lightningfaucet/lightning-wallet-mcp](https://github.com/lightningfaucet/lightning-wallet-mcp)** `⭐ 9` `updated ≤90d` An MCP server and CLI that gives AI agents a Bitcoin Lightning wallet for making instant L402 and X402 payments.
- **[openMF/mcp-mifosx-self-service](https://github.com/openmf/mcp-mifosx-self-service)** `⭐ 9` `updated ≤90d` An MCP server built with FastMCP that exposes Apache Fineract / Mifos X self-service banking APIs as AI-callable tools for MCP-compatible clients.
- **[QuantToGo/quanttogo-mcp](https://github.com/quanttogo/quanttogo-mcp)** `⭐ 9` `updated ≤90d` An MCP server that exposes macro-factor quantitative trading signals and strategy performance data to AI agents and coding assistants.
- **[refined-element/lightning-enable-mcp](https://github.com/refined-element/lightning-enable-mcp)** `⭐ 9` `updated ≤90d` An open-source MCP server available in .NET and Python that gives AI agents 23 tools for making Lightning Network payments, accessing L402 APIs, and conducting agent-to-agent commerce over Nostr.
- **[shareseer/shareseer-mcp-server](https://github.com/shareseer/shareseer-mcp-server)** `⭐ 9` `updated >1y` An MCP server that gives Claude and other MCP-compatible assistants access to SEC filings, insider trading data, and historical financial data via the ShareSeer API.
- **[SidneyBissoli/bcb-br-mcp](https://github.com/sidneybissoli/bcb-br-mcp)** `⭐ 9` `updated ≤180d` An MCP server that exposes Brazilian Central Bank economic indicators—including Selic, IPCA, exchange rates, and GDP—to AI assistants via the Model Context Protocol.
- **[tipdotmd/tip-md-x402-mcp-server](https://github.com/tipdotmd/tip-md-x402-mcp-server)** `⭐ 9` `updated >1y` An MCP server that enables AI agents to send cryptocurrency tips via the x402 payment protocol and Coinbase Developer Platform automatic disbursement.
- **[JosueM1109/personal-finance-mcp](https://github.com/josuem1109/personal-finance-mcp)** `⭐ 8` `updated ≤180d` Self-hosted, read-only MCP server that connects personal finance data via Plaid to MCP clients like Claude Code.
- **[kukapay/crypto-liquidations-mcp](https://github.com/kukapay/crypto-liquidations-mcp)** `⭐ 8` `updated >1y` An MCP server that streams real-time cryptocurrency liquidation events from Binance.
- **[kukapay/crypto-trending-mcp](https://github.com/kukapay/crypto-trending-mcp)** `⭐ 8` `updated >1y` An MCP server that provides real-time trending cryptocurrency data from CoinGecko via tools and prompts for MCP clients.
- **[kukapay/funding-rates-mcp](https://github.com/kukapay/funding-rates-mcp)** `⭐ 8` `updated >1y` An MCP server that provides real-time funding rate data across major crypto exchanges for agent-based arbitrage detection.
- **[eduair94/cambio-uruguay](https://github.com/eduair94/cambio-uruguay)** `⭐ 7` `updated ≤30d` cambio-uruguay.com: Uruguay exchange rates, rentals, used cars and prices. Public API, remote MCP server (29 tools, no key) and a Claude skill.
- **[hoqqun/stooq-mcp](https://github.com/hoqqun/stooq-mcp)** `⭐ 7` `updated ≤1y` A Rust-based MCP server that fetches real-time and historical stock price data from stooq.com for integration with AI assistants.
- **[kukapay/chainlink-feeds-mcp](https://github.com/kukapay/chainlink-feeds-mcp)** `⭐ 7` `updated >1y` An MCP server that provides real-time access to Chainlink's decentralized on-chain price feeds for AI agents and autonomous systems.
- **[kukapay/crypto-whitepapers-mcp](https://github.com/kukapay/crypto-whitepapers-mcp)** `⭐ 7` `updated >1y` An MCP server providing a structured knowledge base of cryptocurrency whitepapers for AI agents to query and analyze.
- **[kukapay/pumpswap-mcp](https://github.com/kukapay/pumpswap-mcp)** `⭐ 7` `updated >1y` An MCP server that enables AI agents to interact with PumpSwap for real-time token swaps and automated on-chain trading on Solana.
- **[lnbits/LNbits-MCP-Server](https://github.com/lnbits/lnbits-mcp-server)** `⭐ 7` `updated ≤1y` An MCP server that connects AI assistants to LNbits Lightning wallet operations.
- **[mcpdotdirect/starknet-mcp-server](https://github.com/mcpdotdirect/starknet-mcp-server)** `⭐ 7` `updated ≤1y` An MCP server that exposes Starknet blockchain operations—such as querying state, transferring tokens, and interacting with Cairo smart contracts—as tools for AI agents.
- **[muvon/mcp-binance-futures](https://github.com/muvon/mcp-binance-futures)** `⭐ 7` `updated ≤90d` A Model Context Protocol server that exposes Binance USDT-M Futures trading tools for market data, account state, order management, and position control to LLMs.
- **[na77tech-creator/aikstockdata](https://github.com/na77tech-creator/aikstockdata)** `⭐ 7` na77tech-creator/aikstockdata : Korean listed companies on KOSPI, KOSDAQ and KONEX — the previous trading day's confirmed closing prices, DART filings with the minute each was received, quarterly earnings, and the price path after a filing grouped by filing type. Remote at https://mcp.aikstockdata.com/mcp, no signup and no API key. Non-commercial use with attribution; commercial redistribution is not permitted.
- **[olgasafonova/gleif-mcp-server](https://github.com/olgasafonova/gleif-mcp-server)** `⭐ 7` `updated ≤90d` A Go-based MCP server that gives coding assistants access to the GLEIF database for looking up LEI codes, validating legal entities, and tracing corporate ownership structures.
- **[vdalhambra/financekit-mcp](https://github.com/vdalhambra/financekit-mcp)** `⭐ 7` `updated ≤180d` Financial Market Intelligence MCP Server providing stock quotes, technical analysis, crypto data, and portfolio insights via the Model Context Protocol.
- **[agentpay-mcp](https://github.com/up2itnow0822/agentpay-mcp)** `⭐ 6` `updated ≤180d` AgentPay MCP is an open-source Model Context Protocol server that provides non-custodial payment governance for AI agents with human approval modes and spend caps.
- **[aranjan/kite-mcp](https://github.com/aranjan/kite-mcp)** `⭐ 6` `updated ≤1y` MCP server for Zerodha Kite that enables trading Indian stocks via any MCP-compatible AI assistant.
- **[cz-agents-mcp](https://github.com/martinhavel/cz-agents-mcp)** `⭐ 6` `updated ≤90d` cz-agents-mcp is a set of Model Context Protocol servers providing Czech government and business data for due diligence and KYC/AML compliance.
- **[dodopayments/dodo-agent-plugin](https://github.com/dodopayments/dodo-agent-plugin)** `⭐ 6` `updated ≤30d` An official plugin for Claude Code, Codex, Cursor, and OpenCode that provides MCP servers for API access and semantic documentation search for Dodo Payments.
- **[FrankfurterMCP](https://github.com/anirbanbasu/frankfurtermcp)** `⭐ 6` `updated ≤30d` A Model Context Protocol (MCP) server that exposes the Frankfurter API for currency exchange rates as tools for language model agents.
- **[IndigoProtocol/indigo-mcp](https://github.com/indigoprotocol/indigo-mcp)** `⭐ 6` `updated ≤180d` MCP server that exposes Indigo Protocol's Cardano DeFi data (iAssets, prices, CDP/loan analytics) to LLM agents via the Model Context Protocol.
- **[kindrat86/mcp-deal-flow-signal](https://github.com/kindrat86/mcp-deal-flow-signal)** `⭐ 6` `updated ≤90d` MCP server providing VC deal flow signals by tracking startup engineering acceleration metrics across GitHub data.
- **[kukapay/sui-trader-mcp](https://github.com/kukapay/sui-trader-mcp)** `⭐ 6` `updated >1y` An MCP server enabling AI agents to perform token swaps on the Sui blockchain via the Cetus Aggregator.
- **[Liquidiction/liquidiction-mcp](https://github.com/liquidiction/liquidiction-mcp)** `⭐ 6` `updated ≤180d` An MCP server that exposes live Hyperliquid HIP-4 prediction market data, including orderbooks, trades, and positions, to MCP-compatible AI agents.
- **[tamasPetki/HeadlessTracker](https://github.com/tamaspetki/headlesstracker)** `⭐ 6` `updated ≤180d` MCP server for crypto portfolio tracking. No dashboard UI — AI hosts render on demand. Bybit, Binance, MetaMask, Solana, Polymarket.
- **[AlvisoOculus/optionsahoy-mcp](https://github.com/alvisooculus/optionsahoy-mcp)** `⭐ 5` `updated ≤30d` An MCP server providing deterministic equity-compensation tax calculations for AI agents, covering ISO/AMT, NSO, RSU, QSBS, and hedging strategies across federal and 50-state tax codes.
- **[arcadia-finance/mcp-server](https://github.com/arcadia-finance/mcp-server)** `⭐ 5` `updated ≤30d` MCP server for Arcadia Finance that enables AI agents to interact with onchain DeFi protocols for liquidity management, borrowing, and yield optimization.
- **[Bortlesboat/bitcoin-mcp](https://github.com/bortlesboat/bitcoin-mcp)** `⭐ 5` `updated ≤30d` An MCP server providing 49 Bitcoin-related tools for AI agents, including fees, mempool, blocks, transactions, mining, price, and supply data.
- **[dan1d/dolar-mcp](https://github.com/dan1d/dolar-mcp)** `⭐ 5` `updated ≤1y` An MCP server providing real-time Argentine exchange rates (DolarAPI) for AI agents.
- **[kukapay/bridge-rates-mcp](https://github.com/kukapay/bridge-rates-mcp)** `⭐ 5` `updated >1y` An MCP server that provides real-time cross-chain bridge rates and optimal transfer routes for onchain AI agents.
- **[kukapay/polymarket-predictions-mcp](https://github.com/kukapay/polymarket-predictions-mcp)** `⭐ 5` `updated >1y` An MCP server that provides real-time Polymarket prediction market odds and data to AI agents.
- **[kukapay/token-revoke-mcp](https://github.com/kukapay/token-revoke-mcp)** `⭐ 5` `updated >1y` An MCP server for checking and revoking ERC-20 token allowances across multiple EVM-compatible blockchains.
- **[PreReason/mcp](https://github.com/prereason/mcp)** `⭐ 5` `updated ≤180d` An MCP server that exposes 17 pre-reasoned financial market briefings—including trend signals, regime classifications, and cross-asset correlations—to AI agents via the Model Context Protocol.
- **[yli769227-jpg/ashare-mcp](https://github.com/yli769227-jpg/ashare-mcp)** `⭐ 5` `updated ≤180d` MCP server that exposes Chinese A-share financial statements as callable tools via akshare and FastMCP.
- **[zolo-ryan/MarketAuxMcpServer](https://github.com/zolo-ryan/marketauxmcpserver)** `⭐ 5` `updated >1y` zolo-ryan/MarketAuxMcpServer ☁️ - MCP server for comprehensive market and financial news search with advanced filtering by symbols, industries, countries, and date ranges.
- **[4dmrkey/cryptopolitan-mcp](https://github.com/4dmrkey/cryptopolitan-mcp)** `⭐ 4` `updated ≤180d` An MCP server providing real-time cryptocurrency news, analysis, and price predictions for AI agents.
- **[allrates-today/mcp-server](https://github.com/allrates-today/mcp-server)** `⭐ 4` `updated ≤30d` An MCP server that provides real-time and historical foreign exchange rates to MCP-compatible AI assistants.
- **[botwallet-co/mcp](https://github.com/botwallet-co/mcp)** `⭐ 4` `updated ≤30d` Botwallet MCP Server is an MCP server that gives AI agents cryptocurrency wallet capabilities via FROST threshold signing and x402 paid APIs.
- **[carsol/monarch-mcp-server](https://github.com/carsol/monarch-mcp-server)** `⭐ 4` `updated >1y` An MCP server providing read-only access to Monarch Money financial data for AI assistants like Claude Desktop.
- **[CoinRithm/coinrithm-agent-trading](https://github.com/coinrithm/coinrithm-agent-trading)** `⭐ 4` `updated ≤30d` An MCP server and OpenAPI implementation that allows AI agents to perform paper trading across crypto spot, futures, and prediction markets.
- **[daniel3303/stock-market-mcp-server](https://github.com/daniel3303/stock-market-mcp-server)** `⭐ 4` `updated ≤30d` Free MCP server for stock market & financial data — 108 tools for Claude, ChatGPT & Cursor: SEC filings, 13F holdings, insider & congressional trades, earnings call transcripts, options chains, live quotes, IPOs, short interest, FRED macro, portfolio tracking. Free tier, no card.
- **[etbars/vibetrader-mcp](https://github.com/etbars/vibetrader-mcp)** `⭐ 4` `updated ≤180d` An MCP server that enables AI assistants to manage trading bots, portfolios, and market analysis through the VibeTrader platform.
- **[gabrielmahia/mpesa-mcp](https://github.com/gabrielmahia/mpesa-mcp)** `⭐ 4` `updated ≤30d` An MCP server that enables AI agents to integrate with M-Pesa (Safaricom Daraja) and Africa's Talking for mobile payments and SMS.
- **[horustechltd/horus-flow-mcp](https://github.com/horustechltd/horus-flow-mcp)** `⭐ 4` `updated ≤180d` MCP server providing institutional-grade market microstructure and orderflow data for AI trading agents.
- **[IndigoProtocol/cardano-mcp](https://github.com/indigoprotocol/cardano-mcp)** `⭐ 4` `updated ≤180d` MCP server for interacting with the Cardano blockchain from AI agents and automation systems.
- **[JamesANZ/bitcoin-mcp](https://github.com/jamesanz/bitcoin-mcp)** `⭐ 4` `updated ≤1y` An MCP server that provides real-time Bitcoin blockchain data from the mempool.space API.
- **[kukapay/blocknative-mcp](https://github.com/kukapay/blocknative-mcp)** `⭐ 4` `updated >1y` An MCP server that provides real-time gas price predictions across multiple blockchains.
- **[kukapay/crypto-pegmon-mcp](https://github.com/kukapay/crypto-pegmon-mcp)** `⭐ 4` `updated >1y` An MCP server that tracks stablecoin peg integrity across multiple blockchains.
- **[kukapay/raydium-launchlab-mcp](https://github.com/kukapay/raydium-launchlab-mcp)** `⭐ 4` `updated >1y` An MCP server that enables AI agents to interact with Raydium Launchpad for token minting, buying, and selling on Solana.
- **[mrslbt/xendit-mcp](https://github.com/mrslbt/xendit-mcp)** `⭐ 4` `updated ≤90d` An unofficial MCP server that exposes the Xendit payment API (invoices, disbursements, balances, transactions) to AI coding assistants like Claude Code and Cursor.
- **[PaulieB14/graph-polymarket-mcp](https://github.com/paulieb14/graph-polymarket-mcp)** `⭐ 4` `updated ≤1y` An MCP server that exposes 31 tools for querying Polymarket prediction market data by combining The Graph subgraphs and Polymarket REST APIs.
- **[plagtech/spraay-x402-mcp](https://github.com/plagtech/spraay-x402-mcp)** `⭐ 4` `updated ≤90d` An MCP server that exposes 57 pay-per-use tools for onchain payments, DeFi operations, oracle data, and AI model access on Base via the x402 protocol.
- **[QuentinCody/braintree-mcp-server](https://github.com/quentincody/braintree-mcp-server)** `⭐ 4` `updated >1y` An unofficial MCP server that exposes PayPal Braintree payment operations via GraphQL through STDIO and SSE transports for AI assistants.
- **[sh-patterson/fec-mcp-server](https://github.com/sh-patterson/fec-mcp-server)** `⭐ 4` `updated ≤180d` An MCP server that exposes Federal Election Commission campaign finance data as tools for AI assistants to search candidates, track donations, and analyze spending.
- **[vaultpilot-mcp](https://github.com/agenthill/vaultpilot-mcp)** `⭐ 4` `updated ≤90d` An MCP server providing hardware-verified DeFi capabilities for AI agents with a human-in-the-loop approval flow via Ledger.
- **[0xDegenMo/lighter-mcp](https://github.com/0xdegenmo/lighter-mcp)** `⭐ 3` `updated ≤180d` An MCP server that enables AI agents to interact with the Lighter perpetual decentralized exchange on Ethereum.
- **[azeth-protocol/mcp-server](https://github.com/azeth-protocol/mcp-server)** `⭐ 3` `updated ≤90d` MCP server for Azeth that provides AI agents with tools for smart accounts, payments, reputation, and service discovery on Ethereum.
- **[calintzy/evmscope](https://github.com/calintzy/evmscope)** `⭐ 3` `updated ≤90d` MCP server and CLI toolkit providing 26 EVM blockchain intelligence tools across 7 chains for AI agents and developers.
- **[decksaga/market-pulse-mcp](https://github.com/decksaga/market-pulse-mcp)** `⭐ 3` `updated ≤180d` An MCP server that provides Claude with real-time market data for cryptocurrencies, stocks, forex, and market indices.
- **[DIALLOUBE-RESEARCH/hypernatt-terminal](https://github.com/dialloube-research/hypernatt-terminal)** `⭐ 3` `updated ≤90d` An MCP server that provides AI agents with real-time BTC market signals, on-chain vault proofs, and cross-chain swap capabilities.
- **[evidai/agent-payment-mcp](https://github.com/evidai/agent-payment-mcp)** `⭐ 3` `updated ≤180d` Let your AI agent pay for any MCP/API per call — card-funded, spend-capped, no crypto. `npx create-lemon-mcp` to start.
- **[Fund-z/fundzwatch-mcp](https://github.com/fund-z/fundzwatch-mcp)** `⭐ 3` `updated ≤90d` An MCP server that provides real-time business intelligence, including funding rounds, acquisitions, and AI-scored sales leads, to MCP-compatible AI clients.
- **[hifriendbot/agentwallet-mcp](https://github.com/hifriendbot/agentwallet-mcp)** `⭐ 3` `updated ≤90d` MCP server providing permissionless wallet infrastructure for AI agents to create, sign, and broadcast transactions on EVM and Solana chains, with built-in guards and x402 payment support.
- **[hypeprinter007-stack/signalfuse-mcp](https://github.com/hypeprinter007-stack/signalfuse-mcp)** `⭐ 3` `updated ≤180d` An MCP server providing crypto trading signals, sentiment analysis, and macro regime classification.
- **[ibanforge](https://github.com/cammac-creator/ibanforge)** `⭐ 3` `updated ≤30d` A fintech API for IBAN validation, BIC/SWIFT lookup, and Swiss clearing, provided natively via MCP and SDKs.
- **[intentos-labs/beeper-mcp](https://github.com/intentos-labs/beeper-mcp)** `⭐ 3` `updated >1y` An MCP server that exposes Binance Smart Chain (BSC) blockchain operations as tools for AI assistants.
- **[JamesANZ/evm-mcp](https://github.com/jamesanz/evm-mcp)** `⭐ 3` `updated ≤90d` An MCP server that exposes complete EVM JSON-RPC methods to AI coding environments like Cursor and Claude Desktop.
- **[JhiNResH/maiat-protocol](https://github.com/jhinresh/maiat-protocol)** `⭐ 3` `updated ≤180d` A trust and safety protocol for AI agents that provides on-chain behavioral scoring, token safety checks, and an MCP server for integrating agent reputation into LLM workflows.
- **[krystiangw/agenticpay](https://github.com/krystiangw/agenticpay)** `⭐ 3` `updated ≤90d` An MCP-native payment infrastructure that enables agents to settle micropayments via Solana and USDC.
- **[kukapay/crypto-funds-mcp](https://github.com/kukapay/crypto-funds-mcp)** `⭐ 3` `updated >1y` An MCP server that provides AI agents with structured, real-time data on cryptocurrency investment funds.
- **[kukapay/crypto-stocks-mcp](https://github.com/kukapay/crypto-stocks-mcp)** `⭐ 3` `updated >1y` An MCP server that provides real-time and historical data for crypto-related stocks to AI agents.
- **[kukapay/uniswap-price-mcp](https://github.com/kukapay/uniswap-price-mcp)** `⭐ 3` `updated >1y` An MCP server that provides real-time token prices from Uniswap V3 across multiple blockchain networks.
- **[mercadopago-tool](https://github.com/dan1d/mercadopago-tool)** `⭐ 3` `updated ≤1y` An MCP server that exposes Mercado Pago payment tools (create links, search/refund payments) for AI agents, Telegram, WhatsApp, and automation platforms.
- **[partymola/monzo-mcp](https://github.com/partymola/monzo-mcp)** `⭐ 3` `updated ≤90d` An MCP server that provides read-only access to Monzo banking accounts, balances, pots, and transaction history with OAuth handling and local SQLite caching for use with Claude Code and other MCP clients.
- **[public](https://github.com/openpulsechain/public)** `⭐ 3` `updated ≤180d` An open-source analytics platform for PulseChain that provides on-chain data via a REST API and an MCP server for AI agents.
- **[qbt-labs/openmm-mcp](https://github.com/qbt-labs/openmm-mcp)** `⭐ 3` `updated ≤180d` An MCP server that exposes cryptocurrency market data, account info, order execution, and trading strategies to AI agents via Claude Desktop, Cursor, and other MCP clients.
- **[seaworthy-io/seaworthy-mcp](https://github.com/seaworthy-io/seaworthy-mcp)** `⭐ 3` `updated ≤180d` Open MCP server for disability insurance: an agent-callable quote_request action plus carrier/coverage research tools, by Seaworthy Insurance Agency.
- **[TradeRouter/trade-router-mcp](https://github.com/traderouter/trade-router-mcp)** `⭐ 3` `updated ≤180d` A non-custodial MCP server that exposes 21 Solana trading tools—including swaps, limit orders, TWAP, and DCA—to AI agents via Raydium, Orca, Meteora, and PumpSwap with Jito MEV protection.
- **[veroq-ai/veroq-mcp](https://github.com/veroq-ai/veroq-mcp)** `⭐ 3` `updated ≤180d` Production-ready MCP server for VEROQ providing 62 financial intelligence tools with verified outputs and multi-agent workflows.
- **[98lukehall/renoun-mcp](https://github.com/98lukehall/renoun-mcp)** `⭐ 2` `updated ≤1y` An MCP server and REST API that provides structural observability and regime classification for crypto markets.
- **[AletaIndex/aletaindex-fin-narratives](https://github.com/aletaindex/aletaindex-fin-narratives)** `⭐ 2` `updated ≤30d` Financial narrative intelligence provider that delivers real-time sentiment and topic tracking for US equities via MCP or REST API.
- **[bakyang2/kr-crypto-intelligence](https://github.com/bakyang2/kr-crypto-intelligence)** `⭐ 2` `updated ≤90d` Korean crypto market data API with AI analysis endpoints for AI agents, using x402 pay-per-use micropayments.
- **[cct15/war-dashboard-data](https://github.com/cct15/war-dashboard-data)** `⭐ 2` `updated ≤180d` MCP server providing geopolitical conflict risk data for AI agents via API and Model Context Protocol.
- **[clicks-protocol](https://github.com/clicks-protocol/clicks-protocol)** `⭐ 2` `updated ≤90d` A settlement router for AI agents on Base that auto-splits USDC payments into liquid working capital and routed DeFi yield.
- **[defi-mcp](https://github.com/robocular/defi-mcp)** `⭐ 2` `updated ≤1y` An MCP server that exposes 12 DeFi tools for token prices, wallet balances, gas fees, and DEX swap quotes to Claude Desktop, Cursor, and other MCP-compatible hosts.
- **[eliasfire617/crypto-market-data-mcp](https://github.com/eliasfire617/crypto-market-data-mcp)** `⭐ 2` `updated ≤180d` A read-only MCP server that provides real-time cryptocurrency market data across 100+ exchanges via CCXT.
- **[fernsugi/x402-api-server](https://github.com/fernsugi/x402-api-server)** `⭐ 2` `updated ≤1y` An API server that implements the x402 protocol to enable micro-payments for DeFi data via USDC on Base.
- **[Haiku-Trading/haiku-mcp-server](https://github.com/haiku-trading/haiku-mcp-server)** `⭐ 2` `updated ≤180d` An MCP server that enables AI agents to execute DeFi transactions across 22 blockchain networks via the Haiku API.
- **[Hovsteder/powersun-tron-mcp](https://github.com/hovsteder/powersun-tron-mcp)** `⭐ 2` `updated ≤1y` TRON Energy & Bandwidth MCP Server + DEX Swap Aggregator for AI agents with 27 tools for self-service onboarding, resource trading, and token swaps.
- **[keel-trade/keel-trade](https://github.com/keel-trade/keel-trade)** `⭐ 2` `updated ≤90d` A CLI and MCP server for building, backtesting, and automating Hyperliquid crypto trading strategies using AI agents.
- **[kukapay/bitcoin-utxo-mcp](https://github.com/kukapay/bitcoin-utxo-mcp)** `⭐ 2` `updated >1y` An MCP server that provides Bitcoin UTXO and block statistics data to AI agents.
- **[kukapay/bridge-metrics-mcp](https://github.com/kukapay/bridge-metrics-mcp)** `⭐ 2` `updated >1y` An MCP server that provides real-time cross-chain bridge metrics for AI agents to analyze blockchain liquidity and transaction flows.
- **[kukapay/chainlist-mcp](https://github.com/kukapay/chainlist-mcp)** `⭐ 2` `updated >1y` An MCP server that provides AI agents with fast access to verified EVM chain information, including RPC URLs, chain IDs, explorers, and native tokens.
- **[kukapay/dao-proposals-mcp](https://github.com/kukapay/dao-proposals-mcp)** `⭐ 2` `updated >1y` An MCP server that aggregates live governance proposals from major DAOs via Snapshot for AI agent consumption.
- **[kukapay/ethereum-validator-queue-mcp](https://github.com/kukapay/ethereum-validator-queue-mcp)** `⭐ 2` `updated >1y` An MCP server that provides real-time tracking of Ethereum validator activation and exit queues.
- **[make-software/cspr-trade-mcp](https://github.com/make-software/cspr-trade-mcp)** `⭐ 2` `updated ≤180d` An MCP server that exposes 24 tools for market data, swaps, liquidity management, and portfolio tracking on the Casper Network DEX, CSPR.trade.
- **[makeev/alphai-mcp](https://github.com/makeev/alphai-mcp)** `⭐ 2` `updated ≤90d` Hosted MCP server that exposes real-time, AI-enriched financial news and SEC filing data to AI agents via Streamable HTTP and OAuth 2.1.
- **[mcp-server](https://github.com/kyalabs-io/mcp-server)** `⭐ 2` `updated ≤180d` MCP-native server providing badge identity and virtual Visa card issuance for AI agents to interact with merchants.
- **[mcp-server-madeonsol](https://github.com/madeonsol/mcp-server-madeonsol)** `⭐ 2` `updated ≤90d` An MCP server that provides real-time Solana KOL intelligence and on-chain trading data to LLM clients.
- **[michalperni11-gif/secfinapi-mcp](https://github.com/michalperni11-gif/secfinapi-mcp)** `⭐ 2` `updated ≤180d` An MCP server that provides access to standardized SEC EDGAR financial data for AI assistants like Claude and Cursor.
- **[noblabs/lit-forge-mcp](https://github.com/noblabs/lit-forge-mcp)** `⭐ 2` `updated ≤180d` An MCP server that exposes personal finance and market data tools—including NISA/iDeCo simulation, daily market snapshots, and economic event calendars—to AI clients like Claude and Cursor.
- **[paracetamol951/P-Link-MCP](https://github.com/paracetamol951/p-link-mcp)** `⭐ 2` `updated ≤1y` An MCP server that exposes the P-Link.io payment API as tools so Claude, ChatGPT, and other MCP-compatible clients can create payment links, send money, and pay HTTP 402-protected resources on Solana.
- **[PaulieB14/graph-aave-mcp](https://github.com/paulieb14/graph-aave-mcp)** `⭐ 2` `updated ≤180d` An MCP server that exposes 40 tools across 16 Graph subgraphs and the Aave V4 API to query multi-chain DeFi lending, liquidation risk, and governance data from AI assistants.
- **[PostOakLabs/ainumbers-mcp-apps](https://github.com/postoaklabs/ainumbers-mcp-apps)** `⭐ 2` `updated ≤90d` Cloudflare Worker MCP server for AINumbers.co (read-only deterministic tools, signed receipts).
- **[RipperMercs/tensorfeed-x402-base-mcp](https://github.com/rippermercs/tensorfeed-x402-base-mcp)** `⭐ 2` RipperMercs/tensorfeed-x402-base-mcp : Read-only Base mainnet chain reader for x402 payment verification. 11 tools: verify on-chain that a USDC settlement matches a claimed x402 receipt, parse publisher /.well-known/x402 manifests, list recent USDC payments to an address, check AFTA federation status. No private keys, MIT, in the canonical MCP registry.
- **[sentien-labs/verdictswarm-mcp](https://github.com/sentien-labs/verdictswarm-mcp)** `⭐ 2` `updated ≤180d` An MCP server that deploys six adversarial AI agents to debate and audit crypto tokens for rug pulls, mint authority, and liquidity risks directly inside Claude, Cursor, and other MCP-compatible clients.
- **[vaultpilot-mcp](https://github.com/szhygulin/vaultpilot-mcp)** `⭐ 2` `updated ≤90d` An MCP server that lets AI agents manage cross-chain DeFi positions and execute transactions securely by routing all signing through a Ledger device.
- **[0rkz/byte-mcp-server](https://github.com/0rkz/byte-mcp-server)** `⭐ 1` `updated ≤30d` An MCP server providing AI agents with cryptographically attested, pay-per-call data feeds settled via USDC on Base.
- **[0x-devc/novai-mcp-server](https://github.com/0x-devc/novai-mcp-server)** `⭐ 1` `updated ≤180d` A read-only Model Context Protocol (MCP) server that allows AI agents to query the NOVAI blockchain via its public JSON-RPC endpoint.
- **[AiAgentKarl/solana-mcp-server](https://github.com/aiagentkarl/solana-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server that provides real-time Solana blockchain data, including wallet balances, token prices, and DeFi yields, to AI agents.
- **[araa47/jupiter-mcp](https://github.com/araa47/jupiter-mcp)** `⭐ 1` `updated >1y` An MCP server for Jupiter API, Solana's DEX aggregator, enabling immediate swaps and limit orders via Ultra and Trigger APIs.
- **[atomno-mcp/mcp-cbr-rates](https://github.com/atomno-mcp/mcp-cbr-rates)** `⭐ 1` `updated ≤30d` MCP server for Central Bank of Russia rates, key rate, inflation and macro stats.
- **[atomno-mcp/mcp-egrul](https://github.com/atomno-mcp/mcp-egrul)** `⭐ 1` `updated ≤30d` An MCP server providing access to Russian corporate and individual entrepreneur registries (EGRUL/EGRIP) via official FNS open-data dumps.
- **[autonsol/sol-mcp](https://github.com/autonsol/sol-mcp)** `⭐ 1` `updated ≤180d` MCP server providing Solana token risk scoring, momentum signals, wallet analysis, and live AI trading intelligence for AI assistants and autonomous agents.
- **[bitcompare/mcp-server](https://github.com/bitcompare/mcp-server)** `⭐ 1` `updated ≤180d` @bitcompare/mcp-server is an MCP server exposing crypto yield and market data tools via the Model Context Protocol.
- **[bolivian-peru/baozi-mcp](https://github.com/bolivian-peru/baozi-mcp)** `⭐ 1` `updated ≤180d` MCP server exposing 68+ tools for AI agents to interact with Solana-based prediction markets.
- **[bubilife1202/crossfin](https://github.com/bubilife1202/crossfin)** `⭐ 1` `updated ≤1y` CrossFin is a financial router and MCP server enabling AI agents to access Asian crypto exchanges, find optimal transfer routes, and pay for APIs via the x402 protocol.
- **[chrisbusbin-pixel/propfirmdealfinder-mcp-server](https://github.com/chrisbusbin-pixel/propfirmdealfinder-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server that enables AI assistants to query live prop firm discount codes, compare firms, and find the cheapest challenges across 20+ proprietary trading firms.
- **[coinpaprika/coinpaprika-mcp](https://github.com/coinpaprika/coinpaprika-mcp)** `⭐ 1` `updated ≤90d` MCP server for CoinPaprika cryptocurrency market data API - prices, tickers, exchanges, OHLCV, and more.
- **[cuthongthai-vn/vimo-mcp-server](https://github.com/cuthongthai-vn/vimo-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server providing Vietnam-focused financial data and AI analysis tools for integration with coding assistants.
- **[Cyberweasel777/botindex-mcp-server](https://github.com/cyberweasel777/botindex-mcp-server)** `⭐ 1` `updated ≤1y` An MCP server providing signal intelligence tools (sports odds, crypto data, token launches) with pay-per-request pricing via x402 and cryptographically signed receipts.
- **[deficlow/zipp-mcp](https://github.com/deficlow/zipp-mcp)** `⭐ 1` `updated ≤180d` A Model Context Protocol (MCP) server that provides multi-language crypto news, editorial sentiment, and importance scoring.
- **[douglasborthwick-crypto/mcp-server-insumer](https://github.com/douglasborthwick-crypto/mcp-server-insumer)** `⭐ 1` `updated ≤30d` MCP server for InsumerAPI that provides condition-based access infrastructure with ECDSA-signed attestations across 37 blockchains.
- **[equivault/equivault-mcp](https://github.com/equivault/equivault-mcp)** `⭐ 1` `updated ≤180d` MCP server that exposes EquiVault's AI-powered equity research tools to Claude.
- **[everstake/mcp](https://github.com/everstake/mcp)** `⭐ 1` `updated ≤90d` An MCP server that exposes Everstake's staking data, product information, and network metrics to AI agents.
- **[ExpertVagabond/solana-mcp-server](https://github.com/expertvagabond/solana-mcp-server)** `⭐ 1` `updated ≤90d` Solana MCP server providing 25 tools for wallet management, token operations, transfers, queries, and network interactions via the Model Context Protocol.
- **[FalsifyLab/falsifylab-alpha-mcp](https://github.com/falsifylab/falsifylab-alpha-mcp)** `⭐ 1` `updated ≤180d` A collection of 13 MCP servers that provide real-time financial data, such as SEC filings, DeFi yields, and macro signals, to AI agents.
- **[fdcommercial/property-finance-mcp](https://github.com/fdcommercial/property-finance-mcp)** `⭐ 1` `updated ≤90d` An MCP server that exposes UK property finance calculators for bridging costs, development appraisals, BTL stress tests, and stamp duty.
- **[forgemeshlabs/coinopai-mcp](https://github.com/forgemeshlabs/coinopai-mcp)** `⭐ 1` `updated ≤30d` An MCP server that allows AI agents to purchase verified crypto market intelligence via x402 micropayments on the Base network.
- **[gblinproject/GBLIN-MCP](https://github.com/gblinproject/gblin-treasury-risk-regime)** `⭐ 1` `updated ≤30d` An MCP server that allows AI agents on the Base mainnet to manage capital in a diversified index and perform JIT swaps for x402 payments.
- **[gloria-mcp](https://github.com/cryptobriefing-labs/gloria-mcp)** `⭐ 1` `updated ≤90d` MCP server providing real-time curated crypto news with sentiment, recaps, and search for AI agents.
- **[goodmeta/intelligence-mcp](https://github.com/goodmeta/intelligence-mcp)** `⭐ 1` `updated ≤30d` MCP server providing AI agents with access to agent payments ecosystem intelligence, scanning GitHub, Hacker News, and npm for opportunities.
- **[gpartin/CryptoGuardClient](https://github.com/gpartin/cryptoguardclient)** `⭐ 1` `updated ≤1y` A Python client and MCP server for CryptoGuard, a crypto risk scanner API that flags tokens for risk levels.
- **[Helm-Protocol/openttt-mcp](https://github.com/helm-protocol/openttt-mcp)** `⭐ 1` `updated ≤90d` MCP server providing Proof-of-Time temporal attestation tools for AI agents via cryptographic verification.
- **[hypeprinter007-stack/anchor-x402-mcp](https://github.com/hypeprinter007-stack/anchor-x402-mcp)** `⭐ 1` `updated ≤180d` An MCP server that exposes 14 blockchain and utility tools to AI agents using pay-per-call USDC micropayments via the x402 protocol.
- **[jackrain19743/hou-tea-mcp-server](https://github.com/jackrain19743/hou-tea-mcp-server)** `⭐ 1` `updated ≤180d` MCP server enabling AI agents to browse, recommend, and purchase authentic Chinese tea via USDC using the x402 protocol.
- **[jacobsd32-cpu/djd-agent-score-mcp](https://github.com/jacobsd32-cpu/djd-agent-score-mcp)** `⭐ 1` `updated ≤1y` An MCP server that exposes DJD Agent Score's reputation scoring API for AI agent wallets on Base as Model Context Protocol tools.
- **[JayOfemi/shikamaru](https://github.com/jayofemi/shikamaru)** `⭐ 1` `updated ≤90d` A TypeScript library and MCP server for provably correct day-count and accrued-interest calculations in finance.
- **[jf-cmyk/blocksize-agentic-payments-mcp](https://github.com/jf-cmyk/blocksize-agentic-payments-mcp)** `⭐ 1` `updated ≤180d` Read-only MCP package providing discovery and endpoint-building tools for Blocksize agentic payments and market data.
- **[joepangallo/mcp-server-agentpay](https://github.com/joepangallo/mcp-server-agentpay)** `⭐ 1` `updated ≤1y` MCP server for AgentPay, a payment gateway enabling autonomous AI agents to discover, provision, and pay for MCP tool APIs.
- **[jorkal-crypto/jorkal-nft-mcp](https://github.com/jorkal-crypto/jorkal-nft-mcp)** `⭐ 1` `updated ≤180d` An MCP server providing real-time Solana NFT market data, such as floor prices and wallet holdings, via x402 micropayments.
- **[kinance/circle-agent-stack-mcp](https://github.com/kinance/circle-agent-stack-mcp)** `⭐ 1` `updated ≤180d` An MCP server that enables AI agents to manage Circle wallets, transfer USDC, and execute x402 nanopayments via tool calls.
- **[KK6BZB/signallord-mcp-server](https://github.com/kk6bzb/signallord-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server that provides Bitcoin market regime detection and financial intelligence to AI agents.
- **[kukapay/crypto-projects-mcp](https://github.com/kukapay/crypto-projects-mcp)** `⭐ 1` `updated >1y` An MCP server that exposes cryptocurrency project data from Mobula.io to AI agents.
- **[kukapay/dex-pools-mcp](https://github.com/kukapay/dex-pools-mcp)** `⭐ 1` `updated ≤1y` An MCP server that exposes real-time DEX liquidity pool data to AI agents.
- **[kukapay/dexscreener-trending-mcp](https://github.com/kukapay/dexscreener-trending-mcp)** `⭐ 1` `updated ≤1y` An MCP server that provides real-time trending tokens from DexScreener for BSC and Solana chains.
- **[kukapay/stargate-bridge-mcp](https://github.com/kukapay/stargate-bridge-mcp)** `⭐ 1` `updated ≤1y` An MCP server that enables cross-chain token transfers via the Stargate protocol.
- **[Logitale/toreador-mcp-server](https://github.com/logitale/toreador-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server that enables crypto QR code generation and payment session management via Toreador API from MCP-capable assistants.
- **[MarcinDudekDev/crypto-signals-mcp](https://github.com/marcindudekdev/crypto-signals-mcp)** `⭐ 1` `updated ≤1y` An MCP server that provides real-time crypto volume anomaly detection for 50+ tokens.
- **[mikusnuz/pexbot-mcp](https://github.com/mikusnuz/pexbot-mcp)** `⭐ 1` `updated ≤180d` MCP server providing simulated crypto trading tools and resources for AI agents via the pex.bot platform.
- **[moxiespirit/oathscore](https://github.com/moxiespirit/oathscore)** `⭐ 1` `updated ≤180d` OathScore is a real-time API monitoring and rating service for trading data sources, shipping an MCP server so AI agents can query world state, volatility, and data quality scores.
- **[nexusforge-tools/mcp-eu-finance](https://github.com/nexusforge-tools/mcp-eu-finance)** `⭐ 1` `updated ≤180d` An MCP server that exposes European financial datasets from the ECB and Eurostat—including interest rates, inflation, GDP, and unemployment—to AI agents in Claude, Cursor, and Windsurf.
- **[ocbenji/bitcoinbenji-mcp](https://github.com/ocbenji/bitcoinbenji-mcp)** `⭐ 1` `updated ≤90d` MCP server for the Bitcoin Benji API — Lightning-paid Bitcoin mempool intelligence + sovereign on-prem AI inference (L402). No third-party APIs.
- **[oerc-s/primordia](https://github.com/oerc-s/primordia)** `⭐ 1` `updated ≤1y` Primordia (Kaledge) provides financial infrastructure primitives and an MCP server for settling, netting, and tracking credit between AI agents transacting with one another.
- **[omni-fun-mcp-server](https://github.com/0xzcov/omni-fun-mcp-server)** `⭐ 1` `updated ≤1y` An MCP server that provides AI agents with tools to query token data, trading info, and bonding curves for the omni.fun launchpad.
- **[omniologynow-rgb/profitspot-mcp](https://github.com/omniologynow-rgb/profitspot-mcp)** `⭐ 1` `updated ≤180d` An MCP server that gives AI agents access to cross-chain DeFi data, risk scoring, Monte Carlo simulations, and whale tracking across 86 chains and 6,500 liquidity pools.
- **[pickelfintech/the13f-mcp](https://github.com/pickelfintech/the13f-mcp)** `⭐ 1` `updated ≤180d` An open-source MCP server that exposes institutional SEC 13F holdings data, manager search, and sector flow analysis as tools for Claude Desktop, Cursor, and VS Code.
- **[pythia-the-oracle/pythia-oracle-mcp](https://github.com/pythia-the-oracle/pythia-oracle-mcp)** `⭐ 1` `updated ≤180d` An MCP server that exposes on-chain calculated technical indicators (EMA, RSI, VWAP, Bollinger Bands) and event subscriptions via Chainlink for AI agents and smart contracts.
- **[rascal-3/chainanalyzer-mcp](https://github.com/rascal-3/chainanalyzer-mcp)** `⭐ 1` `updated ≤90d` An MCP server that exposes ChainAnalyzer's multi-chain blockchain AML risk analysis, sanctions screening, and transaction tracing tools to AI agents.
- **[RioTheGreat-ai/agentfund-mcp](https://github.com/riothegreat-ai/agentfund-mcp)** `⭐ 1` RioTheGreat-ai/agentfund-mcp : Crowdfunding platform and milestone-based escrow for AI agents on Base chain.
- **[sapph1re/findata-mcp](https://github.com/sapph1re/findata-mcp)** `⭐ 1` `updated ≤180d` A Model Context Protocol server that provides AI agents with real-time financial data, including stock quotes, SEC filings, economic indicators, and crypto prices, billed via x402 micropayments on Base.
- **[ShipItAndPray/mcp-market-data](https://github.com/shipitandpray/mcp-market-data)** `⭐ 1` `updated ≤1y` An MCP server that provides AI agents with real-time cryptocurrency market data, technical analysis, and sentiment indicators without requiring API keys.
- **[teodorofodocrispin-cmyk/intelica-mcp](https://github.com/teodorofodocrispin-cmyk/intelica-mcp)** `⭐ 1` `updated ≤180d` Competitive intelligence API for autonomous AI agents — pay-per-call via x402 on Base and Solana.
- **[toolstem/toolstem-mcp-server](https://github.com/toolstem/toolstem-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server providing curated financial data, equity research metrics, and derived stock signals to AI agents via a hosted endpoint or self-hosted Node.js package.
- **[toolstem/toolstem-sec-mcp-server](https://github.com/toolstem/toolstem-sec-mcp-server)** `⭐ 1` `updated ≤180d` An agent-ready MCP server that exposes pre-computed SEC EDGAR signals—such as insider activity, institutional flow, and material events—as structured JSON tools for AI agents.
- **[tradallo/reputation](https://github.com/tradallo/reputation)** `⭐ 1` `updated ≤180d` MCP server + TypeScript client + CLI for Tradallo's verified record protocol, query cryptographically-verified human + agent trading records.
- **[tunedforai/x402-mcp](https://github.com/tunedforai/x402-mcp)** `⭐ 1` `updated ≤180d` x402-mcp is a stdio MCP server that exposes a real-time crypto market data API as 7 tools for MCP-compatible clients.
- **[unixlamadev-spec/aiprox-mcp](https://github.com/unixlamadev-spec/aiprox-mcp)** `⭐ 1` `updated ≤1y` MCP server for AIProx that enables discovering, hiring, and paying autonomous AI agents via Bitcoin Lightning, Solana USDC, or Base x402.
- **[unixlamadev-spec/lpxpoly-mcp](https://github.com/unixlamadev-spec/lpxpoly-mcp)** `⭐ 1` `updated ≤1y` MCP server for LPXPoly, an AI-powered Polymarket prediction market analysis tool.
- **[untitledfinancial/dpx-mcp](https://github.com/untitledfinancial/dpx-mcp)** `⭐ 1` `updated ≤180d` MCP server for DPX — AI intelligence oracle and institutional cross-border settlement rail via Base mainnet.
- **[vatnode/vatnode-mcp](https://github.com/vatnode/vatnode-mcp)** `⭐ 1` `updated ≤180d` Official Model Context Protocol (MCP) server for vatnode — EU VAT validation, rates, and format checks for AI agents (Claude, Cursor, ChatGPT).
- **[vbkotecha/agentservices-api](https://github.com/vbkotecha/agentservices-api)** `⭐ 1` vbkotecha/agentservices-api : 54-service x402-paid crypto/market data API platform with 37 MCP tools. Live at api.agentservices.to. Agents pay per-call via HTTP 402 micropayments.
- **[vdmeu/registrum-mcp](https://github.com/vdmeu/registrum-mcp)** `⭐ 1` `updated ≤1y` An MCP server that provides UK Companies House data tools for AI agents via the Registrum API.
- **[VENTURE-AI-LABS/cryptodataapi-mcp](https://github.com/venture-ai-labs/cryptodataapi-mcp)** `⭐ 1` `updated ≤1y` An MCP server that exposes real-time crypto market data tools—including funding rates, ETF flows, and BTC cycle indicators—to AI agents via the Model Context Protocol.
- **[w3ledger-mcp-server](https://github.com/baskcart/w3ledger-mcp-server)** `⭐ 1` `updated ≤1y` An MCP server that enables AI agents to interact with a self-verifying cryptographic ledger for token balances, gift cards, sponsor cards, and dual-signed purchases.
- **[yamariki-hub/japan-corporate-mcp](https://github.com/yamariki-hub/japan-corporate-mcp)** `⭐ 1` `updated ≤1y` MCP Server providing AI access to Japanese corporate data via government APIs (gBizINFO, EDINET, e-Stat).
- **[402signalhq/402signal](https://github.com/402signalhq/402signal)** `⭐ 0` `updated ≤30d` Endpoint selection, buyer protection, and verifiable records for AI payments. Public clients, adapters, and independent verification.
- **[8144225309/superscalar-mcp](https://github.com/8144225309/superscalar-mcp)** `⭐ 0` `updated ≤1y` An MCP server that provides context about the SuperScalar Bitcoin Lightning channel factory protocol.
- **[bankbridge-money/bankbridge-plugin](https://github.com/bankbridge-money/bankbridge-plugin)** `⭐ 0` `updated ≤90d` Claude plugin for BankBridge — read-only access to bank accounts, transactions, and investments via MCP.
- **[cello305/carddeals-mcp](https://github.com/cello305/carddeals-mcp)** `⭐ 0` `updated ≤30d` Official CardDeals Model Context Protocol (MCP) Server for real-time gift card deals across 700+ brands.
- **[danishashko/edgar-mcp](https://github.com/danishashko/edgar-mcp)** `⭐ 0` `updated ≤90d` SEC EDGAR MCP Server - U.S. company filings (10-K, 10-Q, 8-K), XBRL financials & full-text search for Claude and any MCP client. No API key, zero-config npx.
- **[danishashko/fred-economic-mcp](https://github.com/danishashko/fred-economic-mcp)** `⭐ 0` `updated ≤90d` FRED MCP Server - U.S. & global economic data (GDP, inflation, unemployment, rates, 800k+ series) from the Federal Reserve, for Claude and any MCP client. Zero-config npx install.
- **[eulerpool/eulerpool-mcp](https://github.com/eulerpool/eulerpool-mcp)** `⭐ 0` `updated ≤30d` Hosted MCP server for the Eulerpool Financial Data API: 250+ tools for stocks, ETFs, macro, crypto, FX, insider trades, 13F and more. Eulerpool is The Financial Data Company.
- **[forum-labs/payfetch](https://github.com/forum-labs/payfetch)** `⭐ 0` `updated ≤90d` A non-custodial MCP server and CLI designed to allow AI agents to fetch URLs and pay for them automatically using a user-controlled spending policy.
- **[george-kozlitin/borme-mcp](https://github.com/george-kozlitin/borme-mcp)** `⭐ 0` `updated ≤90d` An MCP server providing access to Spain's official company registry (BORME) via an API.
- **[Hashlock-Tech/hashlock-mcp](https://github.com/hashlock-tech/hashlock-mcp)** `⭐ 0` `updated ≤90d` An MCP server that provides AI agents with tools for atomic cross-chain OTC settlements and RFQs.
- **[jonwillington/ddbx-plugin](https://github.com/jonwillington/ddbx-plugin)** `⭐ 0` jonwillington/ddbx-plugin : Read-only insider share dealings (UK directors, US Form 4, Sweden, Netherlands, US Congress) with notable filings rated. Remote at https://api.ddbx.uk/mcp, no auth.
- **[kame6493-del/kabu-mcp](https://github.com/kame6493-del/kabu-mcp)** `⭐ 0` kame6493-del/kabu-mcp : Japanese and global stock-market data MCP server for Claude, Cursor, and other MCP clients.
- **[kevmoz/macaroonnetwork-mcp](https://github.com/kevmoz/macaroonnetwork-mcp)** `⭐ 0` kevmoz/macaroonnetwork-mcp ☁️ - Search and buy from a predicate-gated scientific and data marketplace: browse the catalogue and metadata, then pay via x402 (USDC on Base) or Lightning L402.
- **[Luckkyyy23/omni-service-node](https://github.com/luckkyyy23/omni-service-node)** `⭐ 0` Luckkyyy23/omni-service-node : Pay-per-call data marketplace for AI agents (USDC on Base): trading signals, macro, crypto/DeFi, whale tracking, SEC filings, and more.
- **[MunchausenGrup/mcp-crypto-analytics](https://github.com/munchausengrup/mcp-crypto-analytics)** `⭐ 0` MunchausenGrup/mcp-crypto-analytics : Remote pay-per-call crypto analytics MCP — real-time BTC/ETH/SOL prices (free tier), market quotes, EVM token rug-pull safety scores from live DEX data, LLM fact-checking and research reports. Paid tools settle via x402 (USDC on Base), no signup. Endpoint: https://munchausen-mcp.munlab.workers.dev/mcp.
- **[qanzhi111/x402-crypto-api](https://github.com/qanzhi111/x402-crypto-api)** `⭐ 0` qanzhi111/x402-crypto-api : Paid crypto and Web3 security data for AI agents via x402 (USDC on Base).
- **[SimonTarara62/capitalcom-mcp-server](https://github.com/simontarara62/capitalcom-mcp-server)** `⭐ 0` `updated ≤90d` Unofficial MCP server for the Capital.com Open API — safe, guarded LLM trading (two-phase, allowlists, demo-first) with FastMCP. 42 tools for market data, accounts & trading. Not affiliated with Capital.com.
- **[subscription-tracker-mcp](https://github.com/nckhemanth/subscription-tracker-mcp)** `⭐ 0` `updated ≤1y` A personal MCP server that connects Gmail and MySQL to Claude Desktop to track subscriptions, detect billing anomalies, and surface renewal alerts.
- **[swaltersjrtest/microtap-mcp](https://github.com/swaltersjrtest/microtap-mcp)** `⭐ 0` swaltersjrtest/microtap-mcp ☁️ - Pay-per-call x402 APIs: Polymarket and Kalshi prediction markets, DeFi and crypto data, on-chain reads across EVM chains, live weather and web search.
- **[target1m/traderspy-mcp](https://github.com/target1m/traderspy-mcp)** `⭐ 0` target1m/traderspy-mcp : Read-only crypto futures research: AI trading signals with entry, take-profit and stop levels, top-trader positions on Binance, Hyperliquid, Bybit and OKX, prices and candles, 19 technical indicators, funding rate and open interest, and a condition screener and backtester (17 tools); hosted at https://mcp.traderspy.app/mcp with OAuth or a free API key.
- **[CoinGecko](https://docs.coingecko.com/docs/ai-agent-hub/mcp-server)** CoinGecko MCP Server is a Model Context Protocol server that exposes cryptocurrency market data and analytics to AI agents.
- **[Fewsats](https://fewsats.com)** Fewsats is an MCP server enabling Bitcoin payments via the Lightning Network for AI agents.
- **[mcp-page](https://heliumtrades.com/mcp-page)** An MCP server providing trained options pricing models, market forecasts, and news bias analysis to AI assistants.
- **[Mercado Pago](https://mcp.mercadopago.com)** Mercado Pago MCP Server is an MCP server that provides AI-powered payment integration assistance within developer IDEs.
- **[remote server](https://hiveintelligence.xyz/crypto-mcp)** Hive Intelligence provides an MCP server exposing 525 crypto-focused tools via discovery, schema, and execution primitives.
- **[RevenueCat](https://revenuecat.com/docs/tools/mcp)** RevenueCat's Model Context Protocol server exposing subscription and in-app purchase tools for AI agents.
- **[Trade Agent](https://thetradeagent.ai)** Trade It is a trading platform that connects brokerage accounts to AI assistants like Claude, ChatGPT, and Discord via MCP and SDKs for trading stocks, options, and crypto.
- **[x402.tunedfor.ai](https://x402.tunedfor.ai)** A crypto market data API providing aggregated cross-exchange orderflow and macro metrics via REST or MCP.
- **[x402station.io](https://x402station.io)** x402station.io is an independent risk signal layer providing endpoint evidence for x402 agentic commerce before payment authorization.

</details>

## Data & Databases

- **[mcp-toolbox](https://github.com/googleapis/mcp-toolbox)** `⭐ 16.6k` `updated ≤30d` MCP Toolbox for Databases is an open source MCP server that connects AI agents, IDEs, and applications directly to enterprise databases. <details><summary>More about</summary>

  It provides prebuilt tools for instant database access and a framework for building custom, secure AI tools for production agents, reducing boilerplate and improving integration with MCP clients.

  _Now your AI can query your database, but you still have to explain to it why it can't just JOIN everything._

  `mcp` `database` `ai-integration` `server` `genai`
  </details>
- **[nhost/nhost](https://github.com/nhost/nhost)** `⭐ 9.3k` nhost/nhost : Postgres backend with two MCP servers, one for coding agents to inspect the schema, run GraphQL queries and manage migrations, and one that lets your app's users query their own data through AI assistants.
- **[mcp-server-chart](https://github.com/antvis/mcp-server-chart)** `⭐ 4.4k` `updated ≤90d` An MCP server that provides 25+ chart generation and data analysis tools using AntV visualization libraries. <details><summary>More about</summary>

  Developers can integrate chart generation and data visualization capabilities into their AI workflows via MCP, enabling programmatic creation of diverse chart types from prompts or code.

  _Now your AI can generate fishbone diagrams while you still can't decide which chart type to use in your next PR._

  `mcp-server` `visualization` `antv` `data-analysis` `chart-generation`
  </details>
- **[haris-musa/excel-mcp-server](https://github.com/haris-musa/excel-mcp-server)** `⭐ 4.2k` `updated ≤180d` A Model Context Protocol server for manipulating Excel files without requiring Microsoft Excel. <details><summary>More about</summary>

  Enables AI agents to create, read, and modify Excel workbooks programmatically, expanding automation capabilities for data-heavy workflows.

  _Finally, a way to let your AI agent do your spreadsheets so you can go back to pretending you understand pivot tables._

  `mcp` `excel` `automation` `data-manipulation` `server`
  </details>
- **[bytebase/dbhub](https://github.com/bytebase/dbhub)** `⭐ 3.6k` `updated ≤30d` Zero-dependency, token-efficient MCP server for connecting AI assistants to Postgres, MySQL, SQL Server, MariaDB, and SQLite databases. <details><summary>More about</summary>

  It lets developers expose database access to MCP-compatible clients (like Claude Code, Cursor, or VS Code) with safety controls and multi-database support, turning any AI assistant into a database-aware tool.

  _Now your AI can finally explain why your JOIN is slow, but only after it rewrites your schema in a way you’ll spend the next three days debugging._

  `mcp-server` `database` `sql` `ai-integration` `token-efficient`
  </details>
- **[crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp)** `⭐ 3.4k` `updated ≤90d` An MCP server providing configurable read/write access, performance analysis, and schema-aware SQL generation for Postgres databases. <details><summary>More about</summary>

  It lets AI agents and developers safely interact with Postgres databases, offering index tuning, query plan analysis, and health checks directly through the MCP protocol.

  _Now your AI agent can optimize your database indexes while you’re still trying to remember how JOINs work._

  `mcp` `postgres` `database` `performance` `sql`
  </details>
- **[Supabase](https://github.com/supabase/mcp)** `⭐ 2.9k` `updated ≤90d` An official MCP server that connects Supabase projects to AI assistants like Cursor, Claude, and Windsurf for database management, config fetching, and data querying. <details><summary>More about</summary>

  It allows AI coding assistants to directly manage tables, run migrations, and query project data within the Supabase ecosystem without manual context switching.

  _Now your AI can silently drop production tables in Supabase just as confidently as it hallucinates your API endpoints._

  `database` `integration` `mcp` `supabase`
  </details>
- **[mcp-server-mysql](https://github.com/benborla/mcp-server-mysql)** `⭐ 2.1k` `updated ≤90d` A Model Context Protocol server that provides read-only access to MySQL databases, enabling LLMs to inspect schemas and execute queries. <details><summary>More about</summary>

  Developers can securely expose MySQL database schemas and read-only queries to AI assistants via MCP, streamlining database-aware coding workflows.

  _Now your AI can finally stop guessing your table structure and start querying it directly—until it tries to DROP TABLE users._

  `mcp` `mysql` `database` `server` `read-only`
  </details>
- **[julien040/anyquery](https://github.com/julien040/anyquery)** `⭐ 1.8k` `updated ≤90d` A SQL query engine that unifies access to 60+ tools (e.g., GitHub, Notion, Airtable) and exposes them to LLMs via MCP. <details><summary>More about</summary>

  Developers can query disparate data sources with a single SQL interface and plug the results directly into LLM workflows.

  _Now you can finally write SQL to ask Notion why your GitHub issues are still open._

  `sql` `mcp` `data-integration` `llm-tools`
  </details>
- **[mysql_mcp_server](https://github.com/designcomputer/mysql_mcp_server)** `⭐ 1.4k` `updated ≤90d` An MCP server that enables secure interaction with MySQL databases for AI applications. <details><summary>More about</summary>

  It lets AI assistants like Claude Desktop safely query and explore MySQL databases through a controlled, protocol-based interface.

  _Now your AI can finally stop pretending it understands your schema from context alone._

  `mcp` `mysql` `database` `server` `protocol`
  </details>
- **[BetterDB-inc/monitor](https://github.com/betterdb-inc/monitor)** `⭐ 1.3k` `updated ≤30d` BetterDB Monitor is a real-time monitoring and observability tool for Valkey and Redis, providing slowlog analysis, audit trails, and metrics via CLI, Docker, or Helm. <details><summary>More about</summary>

  It gives developers visibility into historical database behavior—like slowlogs and command patterns—that Valkey and Redis discard, enabling post-incident debugging without relying on real-time metrics alone.

  _Finally, a tool that lets you pretend your 3 AM outage was preventable, if only you’d installed this yesterday._

  `monitoring` `observability` `redis` `valkey` `cli`
  </details>
- **[xing5/mcp-google-sheets](https://github.com/xing5/mcp-google-sheets)** `⭐ 1k` `updated ≤180d` This MCP server integrates with your Google Drive and Google Sheets, to enable creating and modifying spreadsheets.
- **[neo4j-contrib/mcp-neo4j](https://github.com/neo4j-contrib/mcp-neo4j)** `⭐ 985` `updated ≤180d` A collection of Model Context Protocol servers from Neo4j Labs that let MCP clients interact with Neo4j databases, Aura cloud instances, and knowledge graphs. <details><summary>More about</summary>

  Developers using Claude Desktop, Cursor, or other MCP clients can query graphs, manage cloud instances, and persist memory via natural language instead of custom glue code.

  _You now have a standardized protocol for teaching your coding assistant to remember things in a graph database, which is the exact kind of architectural overkill that makes you wonder if you’re building software or a digital diorama of your own productivity._

  `mcp` `neo4j` `knowledge-graph` `database` `memory`
  </details>
- **[ClickHouse/mcp-clickhouse](https://github.com/clickhouse/mcp-clickhouse)** `⭐ 879` `updated ≤30d` An MCP server that connects ClickHouse databases to AI assistants, enabling SQL query execution and database introspection. <details><summary>More about</summary>

  Developers can grant their AI assistants direct, controlled access to ClickHouse data for querying and schema exploration without manual context injection.

  _Now your AI assistant can finally stop pretending it remembers your table schema from that one conversation three weeks ago._

  `mcp` `clickhouse` `database-integration` `sql` `ai-assistant`
  </details>
- **[sbroenne/mcp-server-excel](https://github.com/sbroenne/mcp-server-excel)** `⭐ 800` `updated ≤90d` An MCP server for Windows that exposes 230 Excel operations via the COM API, allowing AI assistants to automate Excel tasks like Power Query, DAX, and PivotTables. <details><summary>More about</summary>

  It lets developers hand off complex Excel automation—including VBA and data modeling—to AI assistants through natural language instead of manual scripting.

  _We have reached the point where we need a protocol server just to convince an LLM to format a PivotTable without corrupting the file._

  `mcp` `excel` `automation` `com-api` `windows`
  </details>
- **[neondatabase/mcp-server-neon](https://github.com/neondatabase/mcp-server-neon)** `⭐ 649` `updated ≤90d` An MCP server that bridges natural language requests to the Neon Management API and Postgres databases for creating projects, running queries, and handling migrations. <details><summary>More about</summary>

  It lets developers manage Neon databases and schema changes conversationally through any MCP-compatible client instead of writing SQL or using the Neon API directly.

  _We have successfully abstracted database management to the point where you can ask an LLM to alter a production schema and then solemnly review its request before it inevitably does._

  `mcp` `postgres` `database` `neon` `natural-language`
  </details>
- **[redis/mcp-redis](https://github.com/redis/mcp-redis)** `⭐ 629` `updated ≤90d` The official Redis MCP Server exposes Redis data structures, search, and documentation as tools so that MCP-compatible AI agents can manage and query Redis with natural language. <details><summary>More about</summary>

  Developers wiring agents into Redis-heavy stacks can give models direct, structured access to caches, streams, vectors, and docs without hand-rolling custom tool integrations.

  _We’ve reached the point where even the cache needs its own natural language middleware so the agent can misplace your session data with unprecedented conversational flair._

  `redis` `mcp` `agent-tools` `database` `llm-integration`
  </details>
- **[dbt-labs/dbt-mcp](https://github.com/dbt-labs/dbt-mcp)** `⭐ 607` `updated ≤30d` An MCP server that exposes dbt project context, SQL execution, semantic layer, discovery, CLI, and admin APIs to AI agents. <details><summary>More about</summary>

  Lets AI assistants query, generate, and act on dbt projects (models, metrics, lineage, jobs) without leaving the agent workflow.

  _Now your AI can run `dbt test` while you’re still deciding whether your YAML is indented with spaces or tabs._

  `mcp-server` `dbt` `data-engineering` `sql` `model-context-protocol`
  </details>
- **[chroma-core/chroma-mcp](https://github.com/chroma-core/chroma-mcp)** `⭐ 598` `updated >1y` An MCP server implementation that provides database capabilities for Chroma, enabling AI models to interact with Chroma's vector database. <details><summary>More about</summary>

  Developers can integrate Chroma's embedding and retrieval features into MCP-compatible workflows, allowing LLMs to query and manage vector data seamlessly.

  _Now your AI can have its own database of memories, because apparently the context window wasn't long enough already._

  `mcp` `vector-database` `chroma` `retrieval` `embeddings`
  </details>
- **[centralmind/gateway](https://github.com/centralmind/gateway)** `⭐ 549` `updated >1y` Universal MCP server that exposes databases to AI agents via MCP or OpenAPI protocols with automatic API generation and security features. <details><summary>More about</summary>

  Developers can securely connect AI agents to databases without manual API development, enabling direct data interaction for agents.

  _Now your AI agent can query your database directly, because nothing says 'production-ready' like letting an LLM write its own SQL._

  `mcp` `database` `api-generation` `ai-agents` `self-hosted`
  </details>
- **[reading-plus-ai/mcp-server-data-exploration](https://github.com/reading-plus-ai/mcp-server-data-exploration)** `⭐ 544` `updated >1y` An MCP server that connects Claude Desktop to local CSV files, providing tools and prompt templates to load datasets and run Python scripts for automated data exploration. <details><summary>More about</summary>

  It allows developers to turn Claude into a local data analysis assistant, accelerating the loop from raw CSV data to visualized insights without writing boilerplate Pandas scripts.

  _We have finally reached the point where we need a protocol server just to ask an AI to summarize a spreadsheet, ensuring our stack is sufficiently enterprise-grade for a simple histogram._

  `mcp` `data-science` `claude` `csv` `local-tools`
  </details>
- **[subnetmarco/pgmcp](https://github.com/subnetmarco/pgmcp)** `⭐ 541` `updated ≤180d` An MCP server that connects AI assistants to any PostgreSQL database, translating natural language questions into read-only SQL queries. <details><summary>More about</summary>

  It allows developers to query live production schemas through Cursor, Claude Desktop, and other MCP clients without writing SQL or modifying the database.

  _Soon your AI will know more about your neglected migration scripts and orphaned tables than you do, and it will happily tell you about them in plain English._

  `mcp` `postgres` `database` `natural-language` `cli`
  </details>
- **[mcp-server-motherduck](https://github.com/motherduckdb/mcp-server-motherduck)** `⭐ 525` `updated ≤90d` A local MCP server that lets AI assistants and IDEs execute SQL, browse catalogs, and switch connections across local DuckDB files, in-memory databases, S3-hosted databases, and MotherDuck. <details><summary>More about</summary>

  It gives coding agents direct, local read-write access to analytical data stores so they can query, ingest, and reason over structured data without leaving the assistant workflow.

  _You now have a local SQL engine your AI can freely query, meaning your assistant can discover schema sins and data quality crimes faster than you can pretend they don’t exist._

  `mcp` `duckdb` `motherduck` `sql` `local`
  </details>
- **[domdomegg/airtable-mcp-server](https://github.com/domdomegg/airtable-mcp-server)** `⭐ 457` `updated ≤30d` An MCP server that enables AI systems to read and write Airtable databases via the Model Context Protocol. <details><summary>More about</summary>

  Developers can grant LLMs direct, controlled access to Airtable bases for schema inspection and record manipulation without manual API scripting.

  _Now your AI can finally argue with you about Airtable schema design in real time._

  `mcp` `airtable` `database-integration` `model-context-protocol`
  </details>
- **[FreePeak/db-mcp-server](https://github.com/freepeak/db-mcp-server)** `⭐ 431` `updated ≤90d` A multi-database server implementing the Model Context Protocol to provide AI assistants with structured access to various database systems. <details><summary>More about</summary>

  It enables AI agents to interact with multiple database types like MySQL, Postgres, and Oracle through a unified, standardized interface.

  _Because why manage a schema manually when you can let an LLM attempt a cross-dialect transaction in a single prompt?_

  `mcp` `database` `sql` `multi-db`
  </details>
- **[runekaagaard/mcp-alchemy](https://github.com/runekaagaard/mcp-alchemy)** `⭐ 419` `updated >1y` An MCP server that connects LLMs like Claude Desktop to relational databases including PostgreSQL, MySQL, SQLite, Oracle, and MS SQL Server for schema exploration, SQL generation, and data analysis. <details><summary>More about</summary>

  It lets developers point a model at a live database and get schema-aware queries, validation, and reports without manually pasting table definitions into context.

  _Another comforting illusion that handing an LLM direct access to production data is a workflow upgrade rather than a incident-reporting trigger._

  `mcp` `databases` `sql` `claude-desktop` `data-analysis`
  </details>
- **[Extelligence-ai/bagel](https://github.com/extelligence-ai/bagel)** `⭐ 397` `updated ≤30d` An MCP server that enables natural language querying of robotics, drone, and IoT data using deterministic DuckDB SQL and edge data reduction. <details><summary>More about</summary>

  It allows developers to interrogate complex telemetry logs via LLMs without needing to manually write SQL or parse massive datasets.

  _Because apparently, we can't even debug a drone without an LLM translating our feelings into DuckDB queries._

  `mcp` `robotics` `iot` `duckdb` `data-analysis`
  </details>
- **[doris-mcp-server](https://github.com/apache/doris-mcp-server)** `⭐ 348` `updated ≤30d` An MCP server that connects Apache Doris databases to Model Context Protocol clients, enabling NL2SQL, query execution, and metadata management. <details><summary>More about</summary>

  Developers can integrate Apache Doris databases into MCP-enabled workflows for natural language querying and database operations.

  _Now your LLM can argue with your OLAP engine about whether that JOIN was really necessary._

  `mcp` `database` `olap` `apache-doris` `nl2sql`
  </details>
- **[cr7258/elasticsearch-mcp-server](https://github.com/cr7258/elasticsearch-mcp-server)** `⭐ 308` `updated ≤90d` An MCP server that enables Elasticsearch and OpenSearch interaction through a set of tools for searching, analyzing, and managing clusters. <details><summary>More about</summary>

  Developers can integrate Elasticsearch/OpenSearch capabilities directly into MCP-compatible assistants, enabling document search, index management, and cluster operations without custom API glue.

  _Now your AI assistant can delete your Elasticsearch indices as easily as it can delete your code._

  `mcp` `elasticsearch` `opensearch` `database` `server`
  </details>
- **[Snowflake-Labs/mcp](https://github.com/snowflake-labs/mcp)** `⭐ 299` `updated ≤180d` An MCP server that exposes Snowflake capabilities—including Cortex AI, object management, SQL orchestration, and semantic view querying—to MCP-compatible clients like Claude for Desktop or fast-agent. <details><summary>More about</summary>

  It lets developers query structured and unstructured Snowflake data, run LLM-generated SQL with permission guards, and manage objects directly from their MCP-enabled AI assistants.

  _Your database now has a dedicated AI protocol server, which means the next bottleneck in your stack is definitely going to be 'explaining semantic views to an agent that really wants to DROP TABLES.'._

  `mcp` `snowflake` `cortex-ai` `sql` `database-integration`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+141 more in Data & Databases &nbsp;—&nbsp; click to expand</strong></summary>

- **[saurabhsharma2u/search-console-mcp](https://github.com/saurabhsharma2u/search-console-mcp)** `⭐ 296` `updated ≤90d` An MCP server that exposes Google Search Console, Bing Webmaster Tools, and Google Analytics 4 data directly to AI agents for prompt-driven SEO analysis.
- **[kiliczsh/mcp-mongo-server](https://github.com/kiliczsh/mcp-mongo-server)** `⭐ 282` `updated ≤90d` A Model Context Protocol server that enables LLMs to interact with MongoDB databases.
- **[the-momentum/apple-health-mcp-server](https://github.com/the-momentum/apple-health-mcp-server)** `⭐ 270` `updated ≤90d` An MCP server that imports Apple Health XML exports into DuckDB, ClickHouse, or Elasticsearch and exposes them as natural language query tools for any MCP-compatible LLM.
- **[mysql_mcp_server_pro](https://github.com/wenb1n-dev/mysql_mcp_server_pro)** `⭐ 248` `updated >1y` An MCP server for MySQL that enables secure database interactions, anomaly analysis, and custom tool extensions via the Model Context Protocol.
- **[QABot](https://github.com/hardbyte/qabot)** `⭐ 244` `updated >1y` CLI tool for natural language queries on local or remote data files using LLMs and DuckDB.
- **[XGenerationLab/xiyan_mcp_server](https://github.com/xgenerationlab/xiyan_mcp_server)** `⭐ 239` `updated ≤1y` XiYan MCP Server is a Model Context Protocol server that translates natural language into SQL to query databases using the XiYan-SQL text-to-SQL model.
- **[MongoDB Lens](https://github.com/furey/mongodb-lens)** `⭐ 208` `updated >1y` A Model Context Protocol (MCP) server that provides natural language access to MongoDB databases.
- **[MariaDB/mcp](https://github.com/mariadb/mcp)** `⭐ 204` `updated ≤1y` MariaDB MCP Server is a Model Context Protocol server implementation exposing database and vector store tools for AI assistants.
- **[mcp-server-starrocks](https://github.com/starrocks/mcp-server-starrocks)** `⭐ 192` `updated ≤90d` An official MCP server that bridges AI assistants with StarRocks databases to enable direct SQL execution, schema exploration, and data visualization.
- **[isaacwasserman/mcp-snowflake-server](https://github.com/isaacwasserman/mcp-snowflake-server)** `⭐ 186` `updated ≤1y` An MCP server that enables database interaction with Snowflake, exposing SQL query tools and schema context as resources.
- **[ktanaka101/mcp-server-duckdb](https://github.com/ktanaka101/mcp-server-duckdb)** `⭐ 179` `updated >1y` An MCP server implementation for DuckDB that enables database interaction capabilities through the Model Context Protocol.
- **[QuantGeekDev/mongo-mcp](https://github.com/quantgeekdev/mongo-mcp)** `⭐ 175` `updated >1y` A Model Context Protocol (MCP) server that allows LLMs to inspect schemas, query collections, and manage data in MongoDB databases via natural language.
- **[confluentinc/mcp-confluent](https://github.com/confluentinc/mcp-confluent)** `⭐ 168` `updated ≤30d` An open-source MCP server that exposes Confluent Cloud and Confluent Local services—including Kafka, Flink SQL, Schema Registry, and Tableflow—as natural-language tools for AI assistants.
- **[f4ww4z/mcp-mysql-server](https://github.com/f4ww4z/mcp-mysql-server)** `⭐ 168` `updated ≤1y` An MCP server that enables AI models to perform CRUD operations and inspect schemas on MySQL databases.
- **[aliyun/alibabacloud-tablestore-mcp-server](https://github.com/aliyun/alibabacloud-tablestore-mcp-server)** `⭐ 157` `updated ≤1y` MCP servers for Alibaba Cloud Tablestore, providing database access and RAG capabilities via the Model Context Protocol.
- **[ergut/mcp-bigquery-server](https://github.com/ergut/mcp-bigquery-server)** `⭐ 148` `updated ≤180d` An MCP server that provides secure, read-only access to BigQuery datasets for LLMs.
- **[LucasHild/mcp-server-bigquery](https://github.com/lucashild/mcp-server-bigquery)** `⭐ 131` `updated ≤1y` An MCP server that enables LLMs to query BigQuery and inspect database schemas.
- **[jparkerweb/mcp-sqlite](https://github.com/jparkerweb/mcp-sqlite)** `⭐ 127` `updated ≤180d` An MCP server that provides comprehensive SQLite database interaction capabilities for AI assistants.
- **[tuannvm/mcp-trino](https://github.com/tuannvm/mcp-trino)** `⭐ 121` `updated ≤180d` A high-performance Model Context Protocol (MCP) server for Trino implemented in Go.
- **[hannesrudolph/sqlite-explorer-fastmcp-mcp-server](https://github.com/hannesrudolph/sqlite-explorer-fastmcp-mcp-server)** `⭐ 108` `updated >1y` An MCP server providing safe, read-only access to SQLite databases via the Model Context Protocol.
- **[freema/mcp-gsheets](https://github.com/freema/mcp-gsheets)** `⭐ 100` `updated ≤90d` An MCP server that provides Google Sheets API integration for Model Context Protocol clients.
- **[TheRaLabs/legion-mcp](https://github.com/theralabs/legion-mcp)** `⭐ 94` `updated >1y` A Python MCP server that provides a unified interface for AI assistants to query multiple databases, including PostgreSQL, MySQL, and SQL Server, via the Legion Query Runner.
- **[rashidazarang/airtable-mcp](https://github.com/rashidazarang/airtable-mcp)** `⭐ 87` `updated ≤1y` An MCP server that exposes Airtable bases to AI assistants like Claude Desktop and Claude Code, enabling natural language CRUD, schema management, and analytics across 42 tools.
- **[mcp-server](https://github.com/keboola/mcp-server)** `⭐ 86` `updated ≤90d` An MCP server that connects AI agents and MCP clients to the Keboola data platform, exposing storage, SQL, jobs, and workflows as callable tools.
- **[wenb1n-dev/SmartDB_MCP](https://github.com/wenb1n-dev/smartdb_mcp)** `⭐ 77` `updated >1y` SmartDB is an MCP server that provides universal database connectivity and tooling for MySQL, PostgreSQL, Oracle, SQL Server, and Dameng databases.
- **[edwinbernadus/nocodb-mcp-server](https://github.com/edwinbernadus/nocodb-mcp-server)** `⭐ 76` `updated ≤1y` An MCP server that enables natural language CRUD operations on NocoDB databases.
- **[kdqed/zaturn](https://github.com/kdqed/zaturn)** `⭐ 75` `updated ≤1y` A data analysis tool that lets AI models run SQL and generate visualizations, usable as an MCP server or web interface.
- **[Zhwt/go-mcp-mysql](https://github.com/zhwt/go-mcp-mysql)** `⭐ 65` `updated ≤1y` Zero burden, ready-to-use Model Context Protocol (MCP) server for interacting with MySQL and automation. No Node.js or Python environment needed.
- **[bintocher/mcp-superset](https://github.com/bintocher/mcp-superset)** `⭐ 59` `updated ≤30d` mcp-superset is a Model Context Protocol server that exposes 137 tools for managing Apache Superset dashboards, charts, datasets, SQL Lab, users, roles, and Row Level Security.
- **[pab1it0/adx-mcp-server](https://github.com/pab1it0/adx-mcp-server)** `⭐ 59` `updated ≤1y` A Model Context Protocol server that lets AI assistants execute KQL queries, inspect schemas, and analyze data inside Azure Data Explorer and Microsoft Fabric clusters.
- **[yimindev/dati](https://github.com/yimindev/dati)** `⭐ 59` yimindev/dati ☕ ☁️ - Semantic gateway that turns common databases into MCP services, enriched with business metadata and parameterized SQL tools.
- **[PSU3D0/spreadsheet-mcp](https://github.com/psu3d0/spreadsheet-mcp)** `⭐ 58` `updated ≤90d` A Rust-based MCP server, CLI, and SDK that gives LLM agents a token-efficient, stateful way to read, analyze, and safely mutate Excel workbooks without UI automation.
- **[teradata-mcp-server](https://github.com/teradata/teradata-mcp-server)** `⭐ 57` `updated ≤90d` An official MCP server from Teradata that exposes database tools, prompts, and resources for querying, analyzing, and managing Teradata data platforms via AI agents.
- **[mcp-databricks-server](https://github.com/jordineil/mcp-databricks-server)** `⭐ 50` `updated >1y` An MCP server that enables LLMs to interact with Databricks by running SQL queries, listing jobs, and checking job statuses.
- **[prisma/mcp](https://github.com/prisma/mcp)** `⭐ 49` `updated ≤1y` Prisma provides local and remote MCP servers that expose database management, migration, and querying tools to AI agents and editor workflows.
- **[KyuRish/mcp-dashboards](https://github.com/kyurish/mcp-dashboards)** `⭐ 48` `updated ≤90d` An MCP server that renders interactive charts, dashboards, and KPI widgets directly inside AI conversations.
- **[idoru/influxdb-mcp-server](https://github.com/idoru/influxdb-mcp-server)** `⭐ 46` `updated ≤1y` An MCP server that exposes InfluxDB v2 instance access via the Model Context Protocol.
- **[InfluxData/influxdb3_mcp_server](https://github.com/influxdata/influxdb3_mcp_server)** `⭐ 38` `updated ≤90d` MCP server for integrating InfluxDB 3 with Model Context Protocol clients.
- **[JamesANZ/us-legal-mcp](https://github.com/jamesanz/us-legal-mcp)** `⭐ 38` `updated ≤180d` An MCP server that provides comprehensive US legislation data for integration into AI workflows.
- **[alibabacloud-hologres-mcp-server](https://github.com/aliyun/alibabacloud-hologres-mcp-server)** `⭐ 37` `updated ≤90d` An MCP server that provides a universal interface between AI agents and Alibaba Cloud Hologres databases, enabling metadata retrieval and SQL execution.
- **[couchbase/mcp-server-couchbase](https://github.com/couchbase/mcp-server-couchbase)** `⭐ 35` `updated ≤30d` An MCP server that enables LLMs to interact directly with Couchbase clusters.
- **[mcp-server-singlestore](https://github.com/singlestore-labs/mcp-server-singlestore)** `⭐ 33` `updated ≤180d` An MCP server that exposes the SingleStore Management API to LLM clients like Claude and Cursor, enabling natural language database operations.
- **[haymon-ai/dbmcp](https://github.com/haymon-ai/dbmcp)** `⭐ 32` `updated ≤30d` Database MCP server for MySQL, MariaDB, PostgreSQL, and SQLite -  with builtin PII redaction and write-prevention.
- **[fireproof-storage/mcp-database-server](https://github.com/fireproof-storage/mcp-database-server)** `⭐ 31` `updated >1y` A Model Context Protocol (MCP) server that provides CRUD operations and querying for JSON documents stored in Fireproof.
- **[GreptimeTeam/greptimedb-mcp-server](https://github.com/greptimeteam/greptimedb-mcp-server)** `⭐ 29` `updated ≤90d` An MCP server that enables AI assistants to query and analyze GreptimeDB using SQL, TQL, and RANGE queries.
- **[pgtuner_mcp](https://github.com/isdaniel/pgtuner_mcp)** `⭐ 29` `updated ≤180d` An MCP server that provides AI-powered PostgreSQL performance tuning capabilities.
- **[ydb-mcp](https://github.com/ydb-platform/ydb-mcp)** `⭐ 29` `updated ≤180d` YDB MCP is a Model Context Protocol server that enables LLMs to interact with YDB databases via SQL query and introspection tools.
- **[endorhq/cli](https://github.com/endorhq/cli)** `⭐ 28` `updated >1y` A CLI tool that provides instant, private, sandboxed environments for services like MariaDB and PostgreSQL, with MCP support for AI agent integration.
- **[mcp-sqlite](https://github.com/panasenco/mcp-sqlite)** `⭐ 27` `updated ≤1y` An MCP server that exposes local SQLite databases to AI agents via catalog inspection, canned queries, and arbitrary SQL execution, with Datasette-compatible metadata support.
- **[c4pt0r/mcp-server-tidb](https://github.com/c4pt0r/mcp-server-tidb)** `⭐ 24` `updated >1y` An MCP server implementation that enables AI assistants to interact with TiDB serverless databases.
- **[mcp-sqlalchemy-server](https://github.com/openlinksoftware/mcp-sqlalchemy-server)** `⭐ 24` `updated >1y` A lightweight MCP server using FastAPI, SQLAlchemy, and pyodbc that exposes database schemas, tables, and querying capabilities to MCP-compatible clients like Claude Desktop.
- **[antonorlov/mcp-postgres-server](https://github.com/antonorlov/mcp-postgres-server)** `⭐ 23` `updated ≤30d` MCP server for PostgreSQL. Works with VS Code, Cursor, Claude Code, Codex, and Windsurf.
- **[longevity-genie/opengenes-mcp](https://github.com/longevity-genie/opengenes-mcp)** `⭐ 21` `updated ≤1y` MCP server providing natural language SQL access to the OpenGenes aging and longevity genetics database.
- **[xexr/mcp-libsql](https://github.com/xexr/mcp-libsql)** `⭐ 21` `updated >1y` An MCP server providing secure libSQL database access with connection pooling and transaction support for MCP-compatible clients like Claude Desktop and Cursor.
- **[VOYAGER-Inc/excel-vision-mcp](https://github.com/voyager-inc/excel-vision-mcp)** `⭐ 20` VOYAGER-Inc/excel-vision-mcp - Reads Excel files with embedded images mapped to their cells and meaningful formatting such as colors and strikethrough; supports writes with atomic saves.
- **[dolt-mcp](https://github.com/dolthub/dolt-mcp)** `⭐ 19` `updated ≤90d` An MCP server that provides AI assistants with direct access to Dolt and DoltgreSQL version-controlled SQL databases.
- **[Dataring-engineering/mcp-server-trino](https://github.com/dataring-engineering/mcp-server-trino)** `⭐ 18` `updated >1y` An MCP server that exposes Trino database tables and SQL query execution as MCP resources and tools.
- **[Druid MCP Server](https://github.com/iunera/druid-mcp-server)** `⭐ 18` `updated ≤180d` An MCP server for Apache Druid that exposes tools, resources, and AI-assisted prompts for managing and analyzing Druid clusters via the Model Context Protocol.
- **[niledatabase/nile-mcp-server](https://github.com/niledatabase/nile-mcp-server)** `⭐ 17` `updated >1y` An MCP server that lets LLM applications manage and query Nile databases, tenants, and users through the Model Context Protocol.
- **[yashshingvi/databricks-genie-MCP](https://github.com/yashshingvi/databricks-genie-mcp)** `⭐ 17` `updated >1y` Databricks Genie MCP Server is a Model Context Protocol server that enables LLMs to interact with Databricks Genie API for natural language queries and SQL execution.
- **[mcp-jdbc-server](https://github.com/openlinksoftware/mcp-jdbc-server)** `⭐ 16` `updated >1y` A Java-based MCP server that connects AI clients like Claude Desktop to any database with a JDBC driver, exposing schema inspection and SQL query execution as tools.
- **[davewind/mysql-mcp-server](https://github.com/dave-wind/mysql-mcp-server)** `⭐ 15` `updated ≤180d` An MCP server that provides read-only access to MySQL databases for LLMs.
- **[codeurali/mcp-dataverse](https://github.com/codeurali/mcp-dataverse)** `⭐ 14` `updated ≤90d` An MCP server providing real-time access to Microsoft Dataverse Web API for AI agents.
- **[mbrummerstedt/powerbi-analyst-mcp](https://github.com/mbrummerstedt/powerbi-analyst-mcp)** `⭐ 14` `updated ≤180d` A local MCP server that connects LLM clients like Claude to Power BI semantic models, enabling natural language data analysis via DAX queries with automatic handling of large result sets.
- **[datacharter/datacharter](https://github.com/datacharter/datacharter)** `⭐ 13` `updated ≤30d` DataCharter is a local federated data explorer that lets developers query files and databases with DuckDB and govern AI agent access via charter.yaml contracts.
- **[devopam/MCPg](https://github.com/devopam/mcpg)** `⭐ 13` `updated ≤30d` A production-grade Model Context Protocol (MCP) server for PostgreSQL that enables AI agents to inspect, query, and manage databases.
- **[henilcalagiya/google-sheets-mcp](https://github.com/henilcalagiya/google-sheets-mcp)** `⭐ 13` `updated >1y` A Python MCP server that enables Google Sheets automation through MCP-compatible clients.
- **[powerdrill-mcp](https://github.com/powerdrillai/powerdrill-mcp)** `⭐ 13` `updated ≤1y` An MCP server that lets Claude Desktop and other MCP-compatible clients query and run natural language jobs against Powerdrill datasets via User ID and Project API Key.
- **[amineelkouhen/mcp-cockroachdb](https://github.com/amineelkouhen/mcp-cockroachdb)** `⭐ 12` `updated ≤90d` An MCP server that provides a natural language interface for agentic applications to manage, monitor, and query CockroachDB databases.
- **[mcp-odbc-server](https://github.com/openlinksoftware/mcp-odbc-server)** `⭐ 12` `updated >1y` A TypeScript-based MCP server that exposes ODBC-accessible databases to LLMs via the Model Context Protocol, enabling SQL and SPARQL queries through MCP client tools.
- **[mcp-timeplus](https://github.com/timeplus-io/mcp-timeplus)** `⭐ 12` `updated >1y` An MCP server that lets AI assistants execute SQL queries, list databases and tables, and interact with Kafka topics and Apache Iceberg tables through a Timeplus connection.
- **[corebasehq/coremcp](https://github.com/corebasehq/coremcp)** `⭐ 11` `updated ≤90d` CoreMCP is an open-source Model Context Protocol (MCP) server that bridges AI assistants with legacy databases like MSSQL.
- **[hydrolix/mcp-hydrolix](https://github.com/hydrolix/mcp-hydrolix)** `⭐ 11` `updated ≤90d` An MCP server that exposes Hydrolix database operations as tools for AI assistants.
- **[JaviMaligno/postgres_mcp](https://github.com/javimaligno/postgres_mcp)** `⭐ 11` `updated ≤90d` An MCP server that enables PostgreSQL database operations for MCP-compatible clients like Claude Code and Cursor.
- **[jwaxman19/qlik-mcp](https://github.com/jwaxman19/qlik-mcp)** `⭐ 11` `updated >1y` An MCP server that enables AI assistants to interact with Qlik Cloud applications and extract data from visualizations.
- **[akramIOT/MCP_AI_SOC_Sher](https://github.com/akramiot/mcp_ai_soc_sher)** `⭐ 10` `updated >1y` An MCP server that converts natural language prompts into optimized SQL queries with integrated security threat analysis for SQLite and Snowflake.
- **[Arun-kc/schemabrain](https://github.com/arun-kc/schemabrain)** `⭐ 10` `updated ≤90d` A read-only MCP server that acts as a semantic and security layer between AI agents and databases.
- **[longevity-genie/synergy-age-mcp](https://github.com/longevity-genie/synergy-age-mcp)** `⭐ 10` `updated >1y` An MCP server that provides AI assistants with structured access to the SynergyAge database of genetic interventions and lifespan effects across model organisms.
- **[schemaflow-mcp-server](https://github.com/cryptoradi/schemaflow-mcp-server)** `⭐ 10` `updated >1y` An MCP server providing real-time PostgreSQL and Supabase schema access for AI-IDEs.
- **[mariadb-corporation/skysql-mcp](https://github.com/mariadb-corporation/skysql-mcp)** `⭐ 8` skysqlinc/skysql-mcp ️ ☁️ - Serverless MariaDB Cloud DB MCP server. Tools to launch, delete, execute SQL and work with DB level AI agents for accurate text-2-sql and conversations.
- **[narekmalk/safedb-mcp](https://github.com/narekmalk/safedb-mcp)** `⭐ 8` `updated ≤180d` An MCP server that provides secure, read-only access to PostgreSQL, MySQL, MariaDB, and SQLite with PII masking and SQL guardrails.
- **[simple_snowflake_mcp](https://github.com/yannbrrd/simple_snowflake_mcp)** `⭐ 8` `updated ≤90d` Simple Snowflake MCP is an MCP server that provides Snowflake database access through Model Context Protocol tools.
- **[skysqlinc/skysql-mcp](https://github.com/skysqlinc/skysql-mcp)** `⭐ 8` `updated ≤180d` An MCP server and client that lets AI agents and IDEs manage SkySQL MariaDB cloud instances, run SQL queries, and handle database credentials.
- **[yincongcyincong/VictoriaMetrics-mcp-server](https://github.com/yincongcyincong/victoriametrics-mcp-server)** `⭐ 8` `updated ≤1y` An MCP server that exposes VictoriaMetrics database operations as Model Context Protocol tools.
- **[embeddedlayers/mcp-analytics](https://github.com/embeddedlayers/mcp-analytics)** `⭐ 7` `updated ≤90d` An MCP server that generates citable, reproducible data analysis modules from user-provided data and questions, queryable from MCP clients like Claude or Cursor.
- **[lionkiii/google-searchconsole-mcp](https://github.com/lionkiii/google-searchconsole-mcp)** `⭐ 7` `updated ≤180d` An MCP server that exposes Google Search Console data to AI assistants like Claude Desktop and Cursor via natural language.
- **[tradercjz/dolphindb-mcp-server](https://github.com/tradercjz/dolphindb-mcp-server)** `⭐ 7` `updated ≤1y` An MCP server that lets AI agents query and inspect DolphinDB databases using exposed functions like list_dbs and query_dolphindb.
- **[andyWang1688/sql-query-mcp](https://github.com/andywang1688/sql-query-mcp)** `⭐ 6` `updated ≤180d` An MCP server that enables AI clients to interact with PostgreSQL and MySQL databases through a controlled, read-only interface.
- **[mbentham/SqlAugur](https://github.com/mbentham/sqlaugur)** `⭐ 6` `updated ≤90d` SqlAugur is an MCP server that provides AI assistants with safe, read-only access to SQL Server databases using AST-based query validation and DBA diagnostic tooling.
- **[1luvc0d3/metabase-mcp](https://github.com/1luvc0d3/metabase-mcp)** `⭐ 5` `updated ≤90d` A headless MCP server that connects AI agents to Metabase via API-key authentication.
- **[alkemiai/alkemi-mcp](https://github.com/alkemi-ai/alkemi-mcp)** `⭐ 4` `updated ≤1y` A STDIO Model Context Protocol Server that enables MCP clients to query databases using plain-English questions and interact with exposed API endpoints.
- **[mcp-fathom-analytics](https://github.com/mackenly/mcp-fathom-analytics)** `⭐ 4` `updated >1y` MCP server for Fathom Analytics that provides tools to retrieve account info, sites, events, analytics, and real-time visitor data via the Model Context Protocol.
- **[pilat/mcp-datalink](https://github.com/pilat/mcp-datalink)** `⭐ 4` `updated ≤180d` An MCP server that gives AI assistants secure, read-aware access to PostgreSQL, MySQL, and SQLite databases with connection-level controls and query safety limits.
- **[theSharque/panopticum](https://github.com/thesharque/panopticum)** `⭐ 4` theSharque/panopticum : Control system for managing databases (MongoDB, Redis, ClickHouse, PostgreSQL) in Kubernetes via MCP.
- **[astandrik/local-ydb-toolkit](https://github.com/astandrik/local-ydb-toolkit)** `⭐ 3` `updated ≤30d` A toolkit providing a Codex skill and an MCP server for managing Docker-based local YDB deployments via local or SSH connections.
- **[Eszetael/postgres-mcp-hardened](https://github.com/eszetael/postgres-mcp-hardened)** `⭐ 3` `updated ≤90d` A secure, read-only PostgreSQL MCP server implemented in Rust that features defense-in-depth SQL validation and audit logging.
- **[Evan-Crx/permisapi-mcp](https://github.com/evan-crx/permisapi-mcp)** `⭐ 3` `updated ≤180d` An MCP server that provides natural language access to over 1.2 million French building permit records.
- **[Hug0x0/mcp-reunion](https://github.com/hug0x0/mcp-reunion)** `⭐ 3` `updated ≤90d` MCP server exposing La Réunion (France) public open data via stdio for MCP clients like Claude Desktop.
- **[ofershap/mcp-server-sqlite](https://github.com/ofershap/mcp-server-sqlite)** `⭐ 3` `updated ≤1y` A TypeScript MCP server that lets AI assistants query SQLite databases, inspect schemas, and explain query plans, running read-only by default.
- **[plainsignal-mcp](https://github.com/plainsignal/plainsignal-mcp)** `⭐ 3` `updated >1y` An official MCP server that exposes PlainSignal analytics reports and metrics to AI assistants via the Model Context Protocol.
- **[SurajKGoyal/amnesic](https://github.com/surajkgoyal/amnesic)** `⭐ 3` `updated ≤90d` Persistent semantic memory for SQL databases (Postgres, MySQL, MSSQL, SQLite) — the MCP server with the most ironic name. One-line install for Claude Code, Cursor, and any MCP-compatible client.
- **[aurelio-nakamura/dataloupe](https://github.com/aurelio-nakamura/dataloupe)** `⭐ 2` `updated ≤30d` Offline data explorer + MCP server: turn CSV/Parquet/Excel into ONE self-contained interactive HTML file, or let your AI assistant query local data — nothing leaves your machine.
- **[Autario/autario-mcp](https://github.com/autario/autario-mcp)** `⭐ 2` `updated ≤180d` An MCP server that provides AI agents with access to over 2,500 verified public datasets from institutions like the World Bank and OECD.
- **[bamwor-dev/bamwor-mcp-server](https://github.com/bamwor-dev/bamwor-mcp-server)** `⭐ 2` `updated ≤180d` MCP server providing world geographic data (261 countries, 13.4M cities) for AI agents via Claude Desktop, Cursor, Windsurf, and other MCP-compatible clients.
- **[clamp-sh/mcp](https://github.com/clamp-sh/mcp)** `⭐ 2` `updated ≤90d` An MCP server that exposes Clamp Analytics tools to AI assistants like Claude, Cursor, VS Code, Windsurf, and Cline.
- **[cvelasquez/mcp-sqlserver](https://github.com/cvelasquez/mcp-sqlserver)** `⭐ 2` `updated ≤30d` An MCP server that enables AI agents to manage and query multiple SQL Server instances through a centralized connection configuration.
- **[dnaerys/onekgpd-mcp](https://github.com/dnaerys/onekgpd-mcp)** `⭐ 2` `updated ≤90d` An MCP server providing natural language access to the 1000 Genomes Project dataset hosted on Dnaerys variant store.
- **[dockndevai/mcp-clickhouse](https://github.com/dockndevai/mcp-clickhouse)** `⭐ 2` `updated ≤30d` An MCP server for ClickHouse that enables AI clients to explore schemas, run analytical queries, and manage databases through a gated security model.
- **[GetMystAdmin/urdb-mcp](https://github.com/getmystadmin/urdb-mcp)** `⭐ 2` `updated ≤90d` An MCP server that connects AI assistants to the URDB database containing product integrity and enshittification data.
- **[haiiibin/data-profiler-mcp](https://github.com/haiiibin/data-profiler-mcp)** `⭐ 2` `updated ≤90d` An MCP server that provides schema, statistics, and data quality profiling for tabular files such as CSV, Parquet, Excel, and JSON.
- **[Kemetra/seshat-bi](https://github.com/kemetra/seshat-bi)** `⭐ 2` Kemetra/seshat-bi - Read-only BI pipeline governance: each table's stage from source to Power BI, what blocks the next stage, static SQL/TMDL/PBIR checks and evidence packs.
- **[kosminus/querywise-mcp](https://github.com/kosminus/querywise-mcp)** `⭐ 2` `updated ≤180d` An MCP server and CLI that allows LLMs to query databases using a business semantic layer of glossaries, metrics, and metadata.
- **[meacheal-ai/mrc-data](https://github.com/meacheal-ai/mrc-data)** `⭐ 2` `updated ≤180d` MRC Data is an MCP server providing independently verified Chinese apparel supply chain data for AI agents, including 3,000+ suppliers and lab-tested fabrics with declared vs. verified values.
- **[Michael2150/flamerobin-mcp-server](https://github.com/michael2150/flamerobin-mcp-server)** `⭐ 2` `updated ≤180d` An MCP server that exposes Firebird databases to AI assistants by automatically reading connection details from FlameRobin's configuration file.
- **[questdb/mcp-server-questdb](https://github.com/questdb/mcp-server-questdb)** `⭐ 2` questdb/mcp-server-questdb ️ - Drive the QuestDB Web Console: notebook cells, SQL queries and charts on live time-series data.
- **[ugurcl/dbridge-mcp](https://github.com/ugurcl/dbridge-mcp)** `⭐ 2` `updated ≤90d` MCP server that lets AI agents query SQL databases in natural language - read-only, with column masking, row caps, and query limits. SQLite / PostgreSQL / MySQL.
- **[croc100/Litescope](https://github.com/croc100/litescope)** `⭐ 1` `updated ≤90d` An operations toolchain for production SQLite that enables safe, reversible database migrations and observability via MCP.
- **[dockndevai/mcp-percona-pg](https://github.com/dockndevai/mcp-percona-pg)** `⭐ 1` `updated ≤30d` MCP server for the Percona Operator for PostgreSQL — manage PostgreSQL + PgBouncer, pooling, backups/PITR, and DR with safe-by-default security flags.
- **[gigamori/mcp-run-sql-connectorx](https://github.com/gigamori/mcp-run-sql-connectorx)** `⭐ 1` `updated >1y` An MCP server that executes SQL via ConnectorX and streams results to CSV or Parquet files.
- **[gulmezeren2-byte/erp-report-engine](https://github.com/gulmezeren2-byte/erp-report-engine)** `⭐ 1` gulmezeren2-byte/erp-report-engine - Read-only MCP over the SQL database behind an ERP (Logo Tiger, Netsis, Mikro). The agent sees canonical entities like orders, never raw ERP tables, through a four-layer read-only guard that checks the statement, fails closed, and blocks side-effecting functions (pg_read_file, xp_cmdshell, …) — measured by a public 28-attack benchmark and an in-browser "break it" playground running the real guard via Pyodide.
- **[igorolv/jdbc-mcp-server](https://github.com/igorolv/jdbc-mcp-server)** `⭐ 1` igorolv/jdbc-mcp-server ☕ - Read-only access to PostgreSQL, Oracle and SQL Server via JDBC: schema discovery, query validation, execution plans, benchmarking and index analysis.
- **[Leekangbum/networklytics-mcp](https://github.com/leekangbum/networklytics-mcp)** `⭐ 1` `updated ≤180d` Networklytics-MCP is a Model Context Protocol server that provides YouTube comment network analysis via MCP tools.
- **[mahAnuj/mcp-multi-db](https://github.com/mahanuj/mcp-multi-db)** `⭐ 1` `updated ≤180d` Read-only MCP server that lets AI agents query PostgreSQL, MySQL, and SQLite through a single stdio connection, enforcing safety via database-level read-only transactions and query guards.
- **[mockhero](https://github.com/dinosaur24/mockhero)** `⭐ 1` `updated ≤90d` Synthetic test data API that generates realistic, relational data for any database schema, with MCP server support.
- **[r3dz4r/datapulse-my](https://github.com/r3dz4r/datapulse-my)** `⭐ 1` r3dz4r/datapulse-my ☁️ - Trust checks for Malaysian public datasets: freshness, licence, provenance and drift, with signed evidence and an offline-verifiable attestation chain.
- **[registep-mcp](https://github.com/asicojp/registep-mcp)** `⭐ 1` `updated ≤180d` An MCP server that exposes POS and sales analytics data to AI agents like Claude Code and Cursor.
- **[seob717/redash-mcp](https://github.com/seob717/redash-mcp)** `⭐ 1` `updated ≤90d` MCP server for querying and managing Redash with Claude AI.
- **[srmadscience/mcpdbwizard-open](https://github.com/srmadscience/mcpdbwizard-open)** `⭐ 1` srmadscience/mcpdbwizard-open ☕ - Generate a Java MCP server exposing only selected Oracle PL/SQL packages, tables, sequences and SQL statements as typed tools, with no generic SQL tool.
- **[tatsuju/opdstar-nhi-mcp](https://github.com/tatsuju/opdstar-nhi-mcp)** `⭐ 1` `updated ≤90d` An MCP server providing access to Taiwan's National Health Insurance dataset—including rejection codes, procedure codes, and audit indicators—for AI assistants like Claude Desktop and Cursor.
- **[ThinAirTelematics/thinair-data](https://github.com/thinairtelematics/thinair-data)** `⭐ 1` `updated ≤90d` An MCP server that gives AI agents secure, read-only access to PostgreSQL, MySQL, and SQL Server databases with dialect-aware tools for schema introspection, querying, and performance analysis.
- **[AIops-tools/Postgres-AIops](https://github.com/aiops-tools/postgres-aiops)** `⭐ 0` `updated ≤30d` A governed DBA toolset for PostgreSQL that provides slow-query RCA, bloat analysis, and lock-chain diagnostics via CLI and MCP.
- **[infino-ai/infino-mcp](https://github.com/infino-ai/infino-mcp)** `⭐ 0` infino-ai/infino-mcp ️ - Retrieval over your own data with Infino (BM25 full-text, vector, hybrid and SQL), an embedded engine on Apache Parquet over object storage.
- **[rafim-dev/schema-bridge-mcp](https://github.com/rafim-dev/schema-bridge-mcp)** `⭐ 0` rafim-dev/schema-bridge-mcp - Compile SQL and Prisma schemas to Zod, TypeScript and Pydantic, and generate realistic synthetic mock API data.
- **[Rheopyrin/db-access-mcp](https://github.com/rheopyrin/db-access-mcp)** `⭐ 0` Rheopyrin/db-access-mcp - Query PostgreSQL, MySQL, Redshift and SQL Server over verified SSH / AWS SSM tunnels, with read-only enforcement, confined file exports, and pluggable secret providers (env, Vault, AWS Secrets Manager, RDS IAM). Published on the official MCP Registry.
- **[rog0x/mcp-database-tools](https://github.com/rog0x/mcp-database-tools)** `⭐ 0` rog0x/mcp-database-tools : SQL formatting, schema visualization, migration generation, and query optimization for AI agents.
- **[Rufflet/mysql-legacy-mcp](https://github.com/rufflet/mysql-legacy-mcp)** `⭐ 0` Rufflet/mysql-legacy-mcp - Access legacy MySQL 5.0 to 5.6 databases: schema inspection and SELECT by default, with opt-in INSERT, UPDATE, DELETE and DDL.
- **[seedfast-ai/seedfast-mcp](https://github.com/seedfast-ai/seedfast-mcp)** `⭐ 0` seedfast-ai/seedfast-mcp ️ - Fill a PostgreSQL database with synthetic test data generated from its live schema: plan, run and track seeds without production data.
- **[sqemo/sqemo-mcp](https://github.com/sqemo/sqemo-mcp)** `⭐ 0` sqemo/sqemo-mcp ☁️ - Design ERDs following naming standards: edit entities and relationships, import/export SQL and DBML, and diff the model against a live database.
- **[zornade/zornade-mcp](https://github.com/zornade/zornade-mcp)** `⭐ 0` zornade/zornade-mcp : Italian cadastral, geospatial and real-estate data for AI agents: geocoding, parcel profiles with risk and solar layers, valuations and administrative lists.
- **[Convex](https://stack.convex.dev/convex-mcp-server)** An MCP server for Convex that lets AI agents introspect deployments, run functions, and read/write data.
- **[rettfrabonden.com](https://rettfrabonden.com)** An agent-to-agent (A2A) network that provides an MCP server allowing AI assistants to query a database of 1,400+ Norwegian local food producers.

</details>

## Cloud & API Integration

- **[FastAPI-MCP](https://github.com/tadata-org/fastapi_mcp)** `⭐ 12k` `updated ≤1y` FastAPI-MCP is a Python library that automatically exposes FastAPI endpoints as Model Context Protocol (MCP) tools with built-in authentication support. <details><summary>More about</summary>

  It allows developers to instantly turn existing FastAPI services into MCP-compatible tools without manually rewriting endpoints, bridging the gap between standard web APIs and AI agent tooling.

  _Now you can spend your afternoon watching an AI agent call your own endpoints via MCP instead of just reading your Swagger docs like a normal person._

  `fastapi` `mcp` `python` `tooling` `api`
  </details>
- **[awslabs/mcp](https://github.com/awslabs/mcp)** `⭐ 9.7k` `updated ≤30d` Open source MCP servers for AWS that provide specialized integrations with AWS services via the Model Context Protocol. <details><summary>More about</summary>

  Developers can use these servers to grant AI assistants direct, structured access to AWS resources, documentation, and workflows without manual API wrangling.

  _Now your AI assistant can spin up an EKS cluster while you’re still trying to remember how to spell 'IAM'._

  `mcp` `aws` `server` `integration` `model-context-protocol`
  </details>
- **[cloudflare/mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)** `⭐ 4.3k` `updated ≤30d` Official Cloudflare MCP servers providing domain-specific and general-purpose tools for interacting with Cloudflare services via MCP clients. <details><summary>More about</summary>

  Developers can use natural language to query, debug, and manage Cloudflare services (Workers, Radar, DNS, Observability, etc.) directly from MCP-compatible clients like Cursor or Claude.

  _Now you can ask an AI to spin up a Cloudflare Worker while it also explains why your DNS analytics look like a Rorschach test._

  `mcp` `cloudflare` `server` `infrastructure` `integration`
  </details>
- **[kubernetes-mcp-server](https://github.com/containers/kubernetes-mcp-server)** `⭐ 2.1k` `updated ≤30d` An MCP server that exposes Kubernetes and OpenShift operations to AI assistants via native Go API calls instead of wrapping kubectl. <details><summary>More about</summary>

  It lets developers delegate pod logs, Helm charts, Tekton pipelines, and cluster CRUD to AI assistants without installing kubectl or other local dependencies.

  _Native Go performance means your coding assistant can delete namespaces with none of the comforting latency of wrapper scripts._

  `mcp` `kubernetes` `devops` `openshift` `infrastructure`
  </details>
- **[pipeboard-co/meta-ads-mcp](https://github.com/pipeboard-co/meta-ads-mcp)** `⭐ 1.3k` `updated ≤90d` An MCP server that connects LLMs to Meta Ads, enabling AI interfaces to analyze, manage, and optimize Facebook and Instagram advertising campaigns. <details><summary>More about</summary>

  Developers building ad-tech automation or managing Meta campaigns can delegate performance analysis and optimization directly to their existing MCP-compatible coding assistants.

  _We have successfully abstracted away the last remaining human task that didn't require a CLI, turning the nuanced art of ad spend into a prompt in Cursor._

  `mcp` `meta-ads` `marketing` `integration`
  </details>
- **[cloudbase-mcp](https://github.com/tencentcloudbase/cloudbase-mcp)** `⭐ 1.1k` `updated ≤90d` An MCP server that lets AI IDEs deploy, configure, and manage Tencent CloudBase resources directly from natural language prompts. <details><summary>More about</summary>

  It collapses the gap between code generation and cloud deployment by giving AI coding assistants live access to serverless infrastructure, databases, and hosting.

  _You can now vibe-code an entire app and accidentally deploy it to a Chinese hyperscaler before you’ve finished configuring your own git remote._

  `mcp` `cloudbase` `deployment` `serverless` `tencent-cloud`
  </details>
- **[zcaceres/fetch-mcp](https://github.com/zcaceres/fetch-mcp)** `⭐ 828` `updated ≤1y` An MCP server that fetches web content in multiple formats including HTML, JSON, Markdown, readable text, and YouTube transcripts. <details><summary>More about</summary>

  Provides a standardized way for MCP-compatible agents to access and process external web content without custom HTTP handling.

  _Another wrapper around curl that turns every agent into a glorified web scraper with extra steps._

  `mcp` `web-fetch` `http-client`
  </details>
- **[automation-ai-labs/mcp-link](https://github.com/automation-ai-labs/mcp-link)** `⭐ 625` `updated >1y` Converts any OpenAPI V3 API into an MCP server for AI agent compatibility. <details><summary>More about</summary>

  Eliminates manual MCP server creation by automatically generating standardized interfaces for existing REST APIs, enabling seamless AI agent integration.

  _Now you can turn every API into an MCP server before realizing you still need to explain to the agent how to use it._

  `mcp` `openapi` `api-integration` `agent-tools`
  </details>
- **[diivi/aseprite-mcp](https://github.com/diivi/aseprite-mcp)** `⭐ 625` `updated ≤90d` An MCP server that enables interaction with the Aseprite API. <details><summary>More about</summary>

  It allows AI coding assistants like Cursor to directly manipulate pixel art within Aseprite via the Model Context Protocol.

  _Because clearly, your primary bottleneck in development was the manual labor of pixel-pushing that an LLM could now do for you._

  `mcp` `aseprite` `pixel-art` `automation` `python`
  </details>
- **[kimtaeyoon83/mcp-server-youtube-transcript](https://github.com/kimtaeyoon83/mcp-server-youtube-transcript)** `⭐ 598` `updated ≤90d` An MCP server that retrieves transcripts from YouTube videos, including support for multiple URL formats, language fallback, and ad filtering. <details><summary>More about</summary>

  Developers can directly fetch YouTube video transcripts as context for AI assistants without manual scraping or third-party APIs.

  _Now your AI can finally read all those 3-hour conference talks you bookmarked but never watched._

  `mcp` `youtube` `transcripts` `context-provider`
  </details>
- **[kagimcp](https://github.com/kagisearch/kagimcp)** `⭐ 528` `updated ≤90d` The official Model Context Protocol (MCP) server for Kagi Search and other Kagi tools. <details><summary>More about</summary>

  It lets developers integrate Kagi's search and summarization capabilities directly into MCP-compatible assistants like Claude.

  _Now your AI can argue with you about search results using yet another proprietary API._

  `mcp` `search` `kagi` `summarization` `integration`
  </details>
- **[cablate/mcp-google-map](https://github.com/cablate/mcp-google-map)** `⭐ 467` `updated ≤30d` An MCP server that integrates Google Maps API capabilities for AI agents, offering 18 geospatial tools including geocoding, routing, and place search. <details><summary>More about</summary>

  Enables AI agents to perform location-based reasoning, planning, and data retrieval by exposing Google Maps APIs through the Model Context Protocol.

  _Now your AI can argue with you about the fastest route to the coffee shop using official Google data._

  `mcp` `google-maps` `geospatial` `agent-tools` `typescript`
  </details>
- **[edgeone-makers-mcp](https://github.com/tencentedgeone/edgeone-makers-mcp)** `⭐ 436` `updated ≤90d` An MCP server that deploys HTML content, folders, or full-stack projects to Tencent EdgeOne Pages and returns a public URL. <details><summary>More about</summary>

  It lets coding agents instantly publish generated frontends to the edge, turning a prompt into a shareable link without manual DevOps.

  _Your agent can now ship half-baked UIs to a global CDN faster than you can review the diff, ensuring the entire internet gets to witness your vibe-coded prototypes in milliseconds._

  `deployment` `edge` `html` `mcp` `tencent`
  </details>
- **[cantian-ai/bazi-mcp](https://github.com/cantian-ai/bazi-mcp)** `⭐ 435` `updated ≤1y` An MCP server providing Bazi (Chinese astrology) calculations for AI agents. <details><summary>More about</summary>

  It offers precise Bazi data integration for AI agents, addressing inaccuracies in existing fortune-telling tools.

  _Now your AI agent can tell you your destiny while you debug your code._

  `mcp` `bazi` `chinese-astrology` `agent-integration`
  </details>
- **[mcp-graphql](https://github.com/blurrah/mcp-graphql)** `⭐ 407` `updated >1y` A Model Context Protocol server that enables LLMs to interact with GraphQL APIs via schema introspection and query execution. <details><summary>More about</summary>

  Developers can dynamically expose GraphQL endpoints to AI assistants, allowing them to discover and execute queries against APIs without manual integration code.

  _Now your LLM can introspect your GraphQL schema and immediately start arguing with your backend about N+1 query problems._

  `mcp` `graphql` `api-integration` `llm-tools`
  </details>
- **[mcp-server-odoo](https://github.com/ivnvxd/mcp-server-odoo)** `⭐ 397` `updated ≤90d` An MCP server that enables AI assistants to interact with Odoo ERP systems through standardized resources and tools for data retrieval and manipulation. <details><summary>More about</summary>

  Developers can now integrate AI assistants with Odoo ERP to search, create, update, and delete records, as well as execute workflow actions, all via natural language.

  _Finally, a way to let your AI assistant argue with your ERP system about invoice approvals._

  `mcp` `odoo` `erp` `ai-integration` `python`
  </details>
- **[mcp-hfspace](https://github.com/evalstate/mcp-hfspace)** `⭐ 389` `updated >1y` An MCP server that allows Claude Desktop to interact with Hugging Face Spaces, including Gradio endpoints. <details><summary>More about</summary>

  It expands the capabilities of desktop AI assistants by bridging them to specialized models and tools hosted on Hugging Face.

  _One more bridge to cross in the increasingly fragmented architecture of model endpoints and host protocols._

  `mcp` `huggingface` `claude-desktop` `gradio` `integration`
  </details>
- **[strowk/mcp-k8s-go](https://github.com/strowk/mcp-k8s-go)** `⭐ 383` `updated ≤1y` A Go-based MCP (Model Context Protocol) server that exposes Kubernetes cluster operations—such as listing contexts, namespaces, pods, nodes, events, and logs—as tools and resources for AI assistants like Claude Desktop. <details><summary>More about</summary>

  It lets developers manage and inspect Kubernetes clusters conversationally through MCP-compatible clients instead of juggling kubectl commands and context files.

  _Now your AI assistant can crash your production cluster with a polite natural-language request, removing what little friction remained between you and a 3 a.m. incident._

  `kubernetes` `mcp` `devops` `ai-integration`
  </details>
- **[gomarble-ai/facebook-ads-mcp-server](https://github.com/gomarble-ai/facebook-ads-mcp-server)** `⭐ 365` `updated ≤90d` An MCP server that provides programmatic access to Meta Ads data and management features. <details><summary>More about</summary>

  Developers can integrate Meta Ads capabilities into MCP-compatible clients like Cursor or Claude Desktop without manually handling authentication or token management.

  _Now your AI assistant can spin up ad campaigns while you pretend to review its code._

  `mcp-server` `meta-ads` `api-integration` `developer-tools`
  </details>
- **[mcp-server](https://github.com/mapbox/mcp-server)** `⭐ 358` `updated ≤90d` Mapbox MCP Server is a Node.js implementation of the Model Context Protocol that exposes Mapbox geospatial APIs to AI agents. <details><summary>More about</summary>

  It lets AI applications access location intelligence like geocoding, routing, and POI search without building custom integrations.

  _Another MCP server promising to make your AI 'geospatially aware' while you just want it to stop hallucinating addresses._

  `mcp` `geospatial` `mapbox` `ai-integration`
  </details>
- **[hass-mcp](https://github.com/voska/hass-mcp)** `⭐ 344` `updated ≤180d` Home Assistant MCP Server provides Model Context Protocol access to Home Assistant instances for AI assistants like Claude. <details><summary>More about</summary>

  It lets AI assistants read and control smart home devices, enabling natural language home automation without custom integrations.

  _Now your AI can dim the lights when it senses you're doomscrolling at 2 AM—convenience or creepy? You decide._

  `mcp` `home-assistant` `iot`
  </details>
- **[postman-mcp-server](https://github.com/postmanlabs/postman-mcp-server)** `⭐ 316` `updated ≤90d` An official MCP server from Postman that exposes workspaces, collections, environments, and API tools to AI agents and coding assistants via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers manage Postman collections, generate client code, and run API tests directly from their AI editor or CLI without context-switching to the Postman UI.

  _Your AI agent can now nag you about your API documentation quality while you are just trying to get it to fix a typo in your request handler._

  `mcp` `postman` `api-testing` `agent-integration`
  </details>
- **[facebook-ads-library-mcp](https://github.com/proxy-intell/facebook-ads-library-mcp)** `⭐ 307` `updated ≤90d` An MCP server that exposes the Facebook Ads Library as a tool, allowing AI assistants to search ads, analyze creative assets, and compare brand strategies via natural language prompts. <details><summary>More about</summary>

  It lets developers and marketers automate competitor ad research and creative analysis directly inside their existing MCP-compatible assistants instead of building custom scrapers.

  _Another indispensable integration proving that your primary job is now building a bespoke middleware layer so your AI can tell you what Nike's ad team already knows._

  `mcp` `facebook-ads` `marketing-analytics` `python` `llm-integration`
  </details>
- **[mcp-server-gsc](https://github.com/ahonn/mcp-server-gsc)** `⭐ 275` `updated ≤30d` An MCP server that provides access to Google Search Console data for AI models. <details><summary>More about</summary>

  It allows AI assistants to perform advanced SEO analytics and detect search performance 'quick wins' directly through the Model Context Protocol.

  _Because your LLM doesn't just need to write your code, it also needs to perform your marketing audits._

  `mcp` `seo` `google-search-console` `analytics` `ai-agents`
  </details>
- **[gannonh/firebase-mcp](https://github.com/gannonh/firebase-mcp)** `⭐ 247` `updated ≤1y` An MCP server that enables AI assistants to interact directly with Firebase services like Firestore, Storage, and Authentication. <details><summary>More about</summary>

  It allows developers to use AI agents to manage database documents, upload files, and verify users without leaving their chat interface or IDE.

  _Because why write manual CRUD scripts when you can let an agent hallucinate a database schema change instead?_

  `firebase` `mcp` `firestore` `ai-integration`
  </details>
- **[adhikasp/mcp-twikit](https://github.com/adhikasp/mcp-twikit)** `⭐ 235` `updated >1y` An MCP server that enables AI models to interact with Twitter data via the Model Context Protocol. <details><summary>More about</summary>

  It allows developers to build agents capable of performing real-time social media sentiment analysis, timeline monitoring, and trend discovery through standardized tool calls.

  _Because nothing says 'productive developer workflow' like letting an LLM scrape Twitter to explain why everyone is mad at your latest deployment._

  `mcp` `twitter` `social-media` `agent-tool` `sentiment-analysis`
  </details>
- **[jagan-shanmugam/open-streetmap-mcp](https://github.com/jagan-shanmugam/open-streetmap-mcp)** `⭐ 226` `updated >1y` An MCP server that provides OpenStreetMap geospatial tools and resources to LLMs for location-based services. <details><summary>More about</summary>

  Developers can integrate real-time geospatial data and location-based tools into their AI workflows without building the infrastructure themselves.

  _Now your AI can argue with you about the best meeting spot based on real-time parking data._

  `mcp-server` `geospatial` `openstreetmap` `llm-tools`
  </details>
- **[stape-io/google-tag-manager-mcp-server](https://github.com/stape-io/google-tag-manager-mcp-server)** `⭐ 222` `updated ≤180d` An MCP server that provides an interface to the Google Tag Manager API with built-in Google OAuth, allowing LLM clients like Claude Desktop to manage GTM tags, triggers, and variables. <details><summary>More about</summary>

  Developers can manage marketing tags and GTM containers directly through AI chat interfaces instead of navigating the GTM UI or writing custom API scripts.

  _We have successfully abstracted Google Tag Manager so far away that you now need a large language model and an OAuth flow just to toggle a tracking pixel._

  `mcp-server` `google-tag-manager` `marketing` `api-integration`
  </details>
- **[tiktok-mcp](https://github.com/seym0n/tiktok-mcp)** `⭐ 201` `updated ≤1y` An MCP server that connects TikTok to Claude and other assistants, enabling video content extraction, virality analysis, and chat via the TikNeuron API. <details><summary>More about</summary>

  It lets developers and agents programmatically access TikTok video data, subtitles, and engagement metrics without leaving their AI-powered workflow.

  _We have finally achieved the singularity: an MCP server that lets your coding agent analyze why a dancing cat went viral while your feature branch collects dust._

  `mcp` `tiktok` `integration` `nodejs`
  </details>
- **[ckanthony/openapi-mcp](https://github.com/ckanthony/openapi-mcp)** `⭐ 197` `updated ≤1y` Dockerized MCP server that generates tool definitions from OpenAPI or Swagger specifications so AI agents can call REST APIs without custom wrappers. <details><summary>More about</summary>

  Developers can instantly expose any documented REST API to MCP-compatible agents without manually configuring each endpoint or writing proxy code.

  _Now your agent can hallucinate its way through every microservice your company forgot to document properly, using the very spec nobody kept up to date._

  `mcp` `openapi` `swagger` `api` `docker`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+359 more in Cloud & API Integration &nbsp;—&nbsp; click to expand</strong></summary>

- **[meilisearch-mcp](https://github.com/meilisearch/meilisearch-mcp)** `⭐ 195` `updated ≤90d` A Model Context Protocol server that enables LLMs to interact with Meilisearch for search index management and querying via natural language.
- **[34892002/bilibili-mcp-js](https://github.com/34892002/bilibili-mcp-js)** `⭐ 194` `updated ≤1y` An MCP server that enables LLMs to search Bilibili videos, fetch trending content, and retrieve video or creator details.
- **[roomi-fields/notebooklm-mcp](https://github.com/roomi-fields/notebooklm-mcp)** `⭐ 188` `updated ≤90d` A local HTTP REST API and MCP server that automates Google NotebookLM, enabling citation-backed Q&A and Studio content generation across Claude Code, Cursor, Codex, and automation platforms like n8n.
- **[reza-gholizade/k8s-mcp-server](https://github.com/reza-gholizade/k8s-mcp-server)** `⭐ 185` `updated ≤90d` A Kubernetes MCP server that exposes cluster operations—listing resources, reading logs, and applying manifests—as standardized tools for AI agents and LLM-powered workflows.
- **[sxhxliang/mcp-access-point](https://github.com/sxhxliang/mcp-access-point)** `⭐ 185` `updated ≤1y` A lightweight gateway that converts existing HTTP services into MCP-compatible servers without requiring any server-side code changes.
- **[yangkyeongmo@/mcp-server-apache-airflow](https://github.com/yangkyeongmo/mcp-server-apache-airflow)** `⭐ 178` `updated ≤1y` mcp-server-apache-airflow is an MCP server that wraps Apache Airflow's REST API to enable MCP clients to manage DAGs, runs, tasks, and variables.
- **[make-mcp-server](https://github.com/integromat/make-mcp-server)** `⭐ 174` `updated ≤180d` An MCP server that exposes Make.com automation scenarios as callable tools for AI assistants.
- **[superagents-lab/search1api-mcp](https://github.com/superagents-lab/search1api-mcp)** `⭐ 174` `updated ≤90d` MCP server providing web search, news, crawling, and reasoning tools via Search1API for integration with MCP-compatible clients.
- **[andybrandt/mcp-simple-pubmed](https://github.com/andybrandt/mcp-simple-pubmed)** `⭐ 172` `updated ≤1y` An MCP server that provides access to the PubMed medical research database via the Entrez API.
- **[docker/hub-mcp](https://github.com/docker/hub-mcp)** `⭐ 168` `updated ≤90d` An MCP server that exposes Docker Hub APIs to LLMs for container image discovery and repository management.
- **[kaliaboi/mcp-zotero](https://github.com/kaliaboi/mcp-zotero)** `⭐ 164` `updated >1y` An MCP server that enables Claude Desktop to interact with a user's Zotero library via the Zotero Cloud API.
- **[api-mcp-server](https://github.com/hostinger/api-mcp-server)** `⭐ 157` `updated ≤90d` An MCP server that exposes Hostinger's API (billing, DNS, domains, hosting, VPS, reach) as tools for MCP-compatible clients like Claude, Cursor, or gemini-cli.
- **[mcp-hetzner](https://github.com/dkruyt/mcp-hetzner)** `⭐ 146` `updated >1y` A Model Context Protocol (MCP) server for interacting with the Hetzner Cloud API, enabling language models to manage cloud resources through structured functions.
- **[Paperless-MCP](https://github.com/baruchiro/paperless-mcp)** `⭐ 146` `updated ≤30d` An MCP server that exposes Paperless-NGX document management APIs as tools for AI assistants.
- **[gomarble-ai/google-ads-mcp-server](https://github.com/gomarble-ai/google-ads-mcp-server)** `⭐ 145` `updated ≤90d` An MCP server that integrates Google Ads API with AI assistants via FastMCP, offering OAuth 2.0 authentication, GAQL querying, and keyword research.
- **[mcp-server](https://github.com/webflow/mcp-server)** `⭐ 140` `updated ≤180d` Model Context Protocol (MCP) server for the Webflow Data API.
- **[wso2/fhir-mcp-server](https://github.com/wso2/fhir-mcp-server)** `⭐ 137` `updated ≤90d` FHIR MCP Server exposes FHIR APIs as Model Context Protocol (MCP) servers for AI tool integration.
- **[aliyun/alibaba-cloud-ops-mcp-server](https://github.com/aliyun/alibaba-cloud-ops-mcp-server)** `⭐ 131` `updated ≤1y` An MCP server that integrates Alibaba Cloud APIs to enable AI assistants to manage cloud resources like ECS, VPC, RDS, and OSS.
- **[server-google-news](https://github.com/chanmeng666/server-google-news)** `⭐ 129` `updated ≤90d` An MCP server that provides Google News search capabilities via SerpAPI with automatic categorization and multi-language support.
- **[cswkim/discogs-mcp-server](https://github.com/cswkim/discogs-mcp-server)** `⭐ 127` `updated ≤90d` MCP Server for the Discogs API, enabling music catalog operations and search functionality.
- **[Twilio](https://github.com/twilio-labs/mcp)** `⭐ 112` `updated ≤1y` Twilio MCP Monorepo is a Model Context Protocol server that exposes Twilio's public API as MCP tools for AI assistants.
- **[square-mcp-server](https://github.com/square/square-mcp-server)** `⭐ 108` `updated ≤180d` An official MCP server from Square that exposes the full Square Connect API ecosystem to AI assistants via the Model Context Protocol.
- **[opgginc/opgg-mcp](https://github.com/opgginc/opgg-mcp)** `⭐ 101` `updated ≤90d` An MCP server that exposes OP.GG game data for League of Legends, TFT, and Valorant to AI agents via a Streamable HTTP endpoint.
- **[the-momentum/fhir-mcp-server](https://github.com/the-momentum/fhir-mcp-server)** `⭐ 101` `updated ≤1y` An MCP server that exposes FHIR healthcare data endpoints as tools, enabling LLM agents to perform CRUD operations and semantic searches on medical records via natural language.
- **[thingsboard-mcp](https://github.com/thingsboard/thingsboard-mcp)** `⭐ 98` `updated ≤1y` An official MCP server that connects AI agents to the ThingsBoard IoT platform, exposing over 120 tools for querying devices, managing entities, and analyzing telemetry via natural language.
- **[8enSmith/mcp-open-library](https://github.com/8ensmith/mcp-open-library)** `⭐ 95` `updated ≤30d` An MCP server that provides an interface to the Open Library API for searching books and author information.
- **[mcp-server-perplexity](https://github.com/tanigami/mcp-server-perplexity)** `⭐ 95` `updated >1y` An MCP server that exposes the Perplexity API as a tool, allowing AI assistants like Claude Desktop to request chat completions with citations.
- **[mahdin75/geoserver-mcp](https://github.com/mahdin75/geoserver-mcp)** `⭐ 92` `updated ≤1y` A Model Context Protocol server that connects LLMs to the GeoServer REST API, enabling AI assistants to query and manage geospatial data, layers, and OGC web services.
- **[chess-mcp](https://github.com/pab1it0/chess-mcp)** `⭐ 90` `updated ≤180d` A Model Context Protocol server that exposes Chess.com's public API to AI assistants, providing tools to query player profiles, game records, and club data.
- **[ReAPI-com/mcp-openapi](https://github.com/reapi-com/mcp-openapi)** `⭐ 90` `updated >1y` An MCP server that loads and serves multiple OpenAPI specifications to enable LLM-powered IDE integrations like Cursor to understand and work with your APIs directly in the editor.
- **[yuna0x0/anilist-mcp](https://github.com/yuna0x0/anilist-mcp)** `⭐ 89` `updated ≤90d` AniList MCP server is a Node.js-based Model Context Protocol server that exposes anime and manga data from the AniList API to LLM clients via STDIO or HTTP transports.
- **[ckanthony/gin-mcp](https://github.com/ckanthony/gin-mcp)** `⭐ 85` `updated ≤90d` A zero-config Go library that exposes existing Gin API endpoints as MCP tools for use with MCP-compatible clients.
- **[mikusnuz/meta-ads-mcp](https://github.com/mikusnuz/meta-ads-mcp)** `⭐ 82` `updated ≤180d` MCP server providing 135 tools for managing Facebook and Instagram ad campaigns via the Meta Marketing API v25.0.
- **[rishijatia/fantasy-pl-mcp](https://github.com/rishijatia/fantasy-pl-mcp)** `⭐ 80` `updated >1y` An MCP server that exposes Fantasy Premier League data, player statistics, and team tools to Claude Desktop, Cursor, and other MCP-compatible clients.
- **[zaizaizhao/mcp-swagger-server](https://github.com/zaizaizhao/mcp-swagger-server)** `⭐ 76` `updated ≤90d` MCP Swagger Server is a TypeScript CLI tool that converts OpenAPI/Swagger specifications into Model Context Protocol (MCP) servers to expose REST APIs as AI-callable tools.
- **[vmware-skills/vmware-aiops](https://github.com/vmware-skills/vmware-aiops)** `⭐ 74` zw008/VMware-AIops ☁️ - VMware vSphere/vCenter management: VM lifecycle, deployment, guest operations, snapshots and clusters, with confirmation gates, dry-run mode and audit logging.
- **[zelentsov-dev/asc-mcp](https://github.com/zelentsov-dev/asc-mcp)** `⭐ 74` `updated ≤90d` ASC-MCP is a Swift-based Model Context Protocol server that exposes 348 tools for managing App Store Connect APIs from MCP-compatible hosts like Claude Code or Cursor.
- **[appwrite/mcp](https://github.com/appwrite/mcp)** `⭐ 72` `updated ≤30d` Appwrite’s MCP server exposing its backend APIs—databases, users, functions, storage—as Model Context Protocol tools.
- **[djalal/quran-mcp-server](https://github.com/djalal/quran-mcp-server)** `⭐ 72` `updated >1y` An MCP server that integrates the Quran.com API for verse search, translation, and tafsir access.
- **[r-huijts/rijksmuseum-mcp](https://github.com/r-huijts/rijksmuseum-mcp)** `⭐ 72` `updated >1y` An MCP server that exposes the Rijksmuseum's art collection API to AI models for natural language search, artwork analysis, and high-resolution image access.
- **[PSPDFKit/nutrient-dws-mcp-server](https://github.com/pspdfkit/nutrient-dws-mcp-server)** `⭐ 71` `updated ≤90d` An MCP server that connects AI assistants to the Nutrient Document Web Service API for natural language-driven PDF processing, including conversion, OCR, redaction, and digital signing.
- **[linkedapi-mcp](https://github.com/linked-api/linkedapi-mcp)** `⭐ 68` `updated ≤90d` An MCP server that connects LinkedIn accounts to AI assistants like Claude and Cursor, enabling them to search leads, analyze profiles, and send messages via a cloud browser.
- **[sawa-zen/vrchat-mcp](https://github.com/sawa-zen/vrchat-mcp)** `⭐ 66` `updated ≤1y` An MCP server that lets AI assistants like Claude Desktop authenticate with and call VRChat API endpoints for friends, avatars, worlds, and groups.
- **[bright8192/esxi-mcp-server](https://github.com/bright8192/esxi-mcp-server)** `⭐ 64` `updated >1y` An MCP server providing REST API interfaces for managing VMware ESXi/vCenter virtual machines.
- **[davidmosiah/google-health-mcp](https://github.com/davidmosiah/google-health-mcp)** `⭐ 64` `updated ≤90d` A local-first MCP server that provides AI agents with access to Google Health API v4 data, including Fitbit and Pixel Watch metrics.
- **[rember-mcp](https://github.com/rember/rember-mcp)** `⭐ 63` `updated >1y` An official Model Context Protocol (MCP) server that allows AI assistants like Claude to create and manage flashcards within the Rember spaced-repetition study platform.
- **[allvoicelab-mcp](https://github.com/allvoicelab/allvoicelab-mcp)** `⭐ 62` `updated >1y` Official Model Context Protocol (MCP) server for AllVoiceLab, enabling MCP clients to interact with text-to-speech, voice cloning, and video translation APIs.
- **[contentful-mcp](https://github.com/ivo-toby/contentful-mcp)** `⭐ 62` `updated ≤1y` An MCP server that integrates with Contentful's Content Management API to provide comprehensive content management capabilities.
- **[last9-mcp-server](https://github.com/last9/last9-mcp-server)** `⭐ 62` `updated ≤90d` Last9 MCP Server is an HTTP/stdio MCP server that exposes Last9 observability data (logs, metrics, traces) to MCP-capable AI assistants.
- **[mcp-difyworkflow-server](https://github.com/gotoolkits/mcp-difyworkflow-server)** `⭐ 62` `updated >1y` An MCP server that enables querying and invoking Dify workflows, supporting on-demand operation of multiple custom workflows.
- **[mcp_weather_server](https://github.com/isdaniel/mcp_weather_server)** `⭐ 61` `updated ≤90d` A Model Context Protocol (MCP) server that provides weather and air quality data via the Open-Meteo API.
- **[mcp-netbird](https://github.com/aantti/mcp-netbird)** `⭐ 60` `updated >1y` An MCP server that provides LLMs with access to Netbird network resources via its API.
- **[StacklokLabs/mkp](https://github.com/stackloklabs/mkp)** `⭐ 59` `updated ≤90d` MKP is a Go-based Model Context Protocol (MCP) server that allows LLM applications to list, get, and apply Kubernetes resources directly via the Kubernetes API.
- **[Whois MCP](https://github.com/bharathvaj-ganesan/whois-mcp)** `⭐ 59` `updated >1y` MCP Server for whois lookups.
- **[RohanMuppa/brightspace-mcp-server](https://github.com/rohanmuppa/brightspace-mcp-server)** `⭐ 57` `updated ≤180d` An MCP server that connects AI clients like Claude and Cursor to D2L Brightspace, enabling students to query grades, assignments, announcements, and course content via natural language.
- **[Django REST Framework MCP](https://github.com/zacharypodbela/django-rest-framework-mcp)** `⭐ 54` `updated ≤1y` A Django app that exposes Django Rest Framework ViewSets as MCP tools via a decorator.
- **[jaipandya/producthunt-mcp-server](https://github.com/jaipandya/producthunt-mcp-server)** `⭐ 54` `updated >1y` An MCP server that connects Product Hunt's API to LLM agents or assistants via the Model Context Protocol.
- **[joshuarileydev/supabase-mcp-server](https://github.com/joshuarileydev/supabase-mcp-server)** `⭐ 52` `updated >1y` An MCP server that exposes the Supabase Management API for programmatic access by AI models and other clients.
- **[alibabacloud-dataworks-mcp-server](https://github.com/aliyun/alibabacloud-dataworks-mcp-server)** `⭐ 51` `updated ≤180d` An MCP server that enables AI agents to interact with Alibaba Cloud DataWorks Open API through a standardized interface.
- **[oatpp-mcp](https://github.com/oatpp/oatpp-mcp)** `⭐ 50` `updated >1y` An implementation of the Model Context Protocol for the Oat++ C++ web framework that lets developers auto-generate MCP tools from their API controllers to expose services to LLMs.
- **[Tomatio13/mcp-server-tavily](https://github.com/tomatio13/mcp-server-tavily)** `⭐ 50` `updated >1y` An MCP server that exposes the Tavily search API as a tool for AI assistants like Claude Desktop and Cursor.
- **[AdsMCP/tiktok-ads-mcp-server](https://github.com/adsmcp/tiktok-ads-mcp-server)** `⭐ 49` `updated ≤90d` A local Model Context Protocol (MCP) server that integrates the TikTok Ads Marketing API with MCP-compatible clients like Claude Desktop.
- **[logly/mureo](https://github.com/logly/mureo)** `⭐ 47` `updated ≤90d` A local-first CLI control plane that lets AI coding agents like Claude Code and Cursor safely manage ad accounts across Google Ads, Meta Ads, Search Console, and GA4 using strategy files and audit logs.
- **[mcp-jina-reader](https://github.com/wong2/mcp-jina-reader)** `⭐ 47` `updated >1y` An MCP server that fetches remote URLs and returns their content as Markdown using Jina Reader.
- **[ac3xx/mcp-servers-kagi](https://github.com/ac3xx/mcp-servers-kagi)** `⭐ 44` `updated >1y` An MCP server implementation that integrates the Kagi Search API for use with MCP-compliant AI clients.
- **[briandconnelly/mcp-server-ipinfo](https://github.com/briandconnelly/mcp-server-ipinfo)** `⭐ 44` `updated ≤30d` IP Geolocation Server for MCP using ipinfo.io.
- **[webscraping-ai-mcp-server](https://github.com/webscraping-ai/webscraping-ai-mcp-server)** `⭐ 44` `updated ≤90d` A Model Context Protocol server that provides web scraping and data extraction capabilities via the WebScraping.AI API.
- **[Cifero74/mcp-apple-music](https://github.com/cifero74/mcp-apple-music)** `⭐ 43` `updated ≤180d` An MCP server that integrates Apple Music with Claude, enabling catalog search, library management, and playlist operations.
- **[redis/mcp-redis-cloud](https://github.com/redis/mcp-redis-cloud)** `⭐ 42` `updated >1y` An official MCP server from Redis that exposes Redis Cloud API capabilities—account, subscription, database, and task management—to MCP clients like Claude Desktop and Cursor.
- **[backblaze-labs/b2-mcp](https://github.com/backblaze-labs/b2-mcp)** `⭐ 41` `updated ≤30d` An MCP server that provides 40 tools for interacting with Backblaze B2 cloud storage and S3-compatible data planes.
- **[entraid-mcp-server](https://github.com/hieuttmmo/entraid-mcp-server)** `⭐ 41` `updated >1y` An MCP server that enables interaction with Microsoft EntraID (Azure AD) via the Microsoft Graph API.
- **[storyblok-mcp-server](https://github.com/kiran1689/storyblok-mcp-server)** `⭐ 41` `updated >1y` An MCP server that enables AI assistants to manage Storyblok spaces, stories, components, assets, workflows, and more via the Model Context Protocol.
- **[mcp-server-esignatures](https://github.com/esignaturescom/mcp-server-esignatures)** `⭐ 40` `updated ≤90d` An MCP server that provides tool access to eSignatures.com services for managing contracts and templates.
- **[qiniu/qiniu-mcp-server](https://github.com/qiniu/qiniu-mcp-server)** `⭐ 39` `updated ≤1y` A Model Context Protocol server that exposes Qiniu Cloud storage, intelligent multimedia, CDN, and live streaming capabilities to MCP-compatible AI clients like Cline, Cursor, and Claude Desktop.
- **[APISIX-MCP](https://github.com/api7/apisix-mcp)** `⭐ 38` `updated >1y` An MCP server that bridges large language models with the APISIX Admin API for natural language-based API gateway management.
- **[cos-mcp](https://github.com/tencent/cos-mcp)** `⭐ 38` `updated ≤1y` A Tencent Cloud MCP server that lets AI models upload, download, and process files in COS and CI via the Model Context Protocol.
- **[ScreenshotOne](https://github.com/screenshotone/mcp)** `⭐ 38` `updated ≤90d` An official MCP server implementation that exposes the ScreenshotOne API to AI assistants, allowing them to render website screenshots via the `render-website-screenshot` tool.
- **[mcp-server](https://github.com/membranehq/mcp-server)** `⭐ 37` `updated ≤1y` MCP Server for Membrane that exposes Membrane integrations as Model Context Protocol tools via HTTP or SSE transports.
- **[Infobip/mcp](https://github.com/infobip/mcp)** `⭐ 36` `updated ≤90d` Infobip's official remote MCP servers for integrating AI agents with Infobip's communication and CPaaS platform.
- **[mikechao/metmuseum-mcp](https://github.com/mikechao/metmuseum-mcp)** `⭐ 35` `updated ≤180d` A Model Context Protocol server that exposes the Metropolitan Museum of Art's collection to AI models for natural language search, object lookup, and image retrieval.
- **[openapi-to-mcp](https://github.com/criteo/openapi-to-mcp)** `⭐ 35` `updated >1y` An MCP server that exposes OpenAPI endpoints as strongly typed tools for AI assistants.
- **[bluesky-context-server](https://github.com/laulauland/bluesky-context-server)** `⭐ 34` `updated >1y` Bluesky Context Server is an MCP server that enables Claude Desktop and similar clients to interact with Bluesky for profile queries, post searches, and timeline access.
- **[TimLukaHorstmann/mcp-weather](https://github.com/timlukahorstmann/mcp-weather)** `⭐ 34` `updated >1y` An MCP server that exposes hourly and daily weather forecasts via the AccuWeather API for integration with LLMs and MCP-compatible clients like Claude Desktop.
- **[cyclops-ui/mcp-cyclops](https://github.com/cyclops-ui/mcp-cyclops)** `⭐ 30` `updated >1y` An MCP server that enables AI agents to manage Kubernetes applications via Cyclops.
- **[EduBase](https://github.com/edubase/mcp)** `⭐ 29` `updated ≤30d` An MCP server that enables Claude and other LLMs to interact with EduBase's e-learning platform via the Model Context Protocol.
- **[marketplaceadpros/amazon-ads-mcp-server](https://github.com/marketplaceadpros/amazon-ads-mcp-server)** `⭐ 29` `updated >1y` MCP Server to interact with Amazon Ads via the Model Context Protocol.
- **[Aiven-Open/mcp-aiven](https://github.com/aiven-open/mcp-aiven)** `⭐ 28` `updated ≤30d` An MCP server that allows AI assistants to manage Aiven cloud data platform services like PostgreSQL and Apache Kafka.
- **[hijaz/postmancer](https://github.com/hijaz/postmancer)** `⭐ 28` `updated >1y` An MCP server that enables AI assistants to interact with RESTful APIs, offering Postman/Insomnia-like functionality for API testing and management.
- **[localstack/localstack-mcp-server](https://github.com/localstack/localstack-mcp-server)** `⭐ 27` `updated ≤90d` An MCP server that provides tools for managing LocalStack containers, deploying infrastructure with CDK/Terraform/SAM, analyzing logs, and injecting chaos faults directly from MCP-compatible AI assistants.
- **[Ilmar7786/marzban-sdk](https://github.com/ilmar7786/marzban-sdk)** `⭐ 26` Ilmar7786/marzban-sdk ☁️/ - Manage the Marzban proxy/VPN panel: users, subscriptions, nodes, hosts, config and system stats, with confirmation for destructive calls.
- **[jordandalton/doordash-mcp-server](https://github.com/jordandalton/doordash-mcp-server)** `⭐ 25` `updated >1y` An MCP server that provides DoorDash API access to MCP-compatible clients like Claude Desktop, Windsurf, or Cursor.
- **[mcp-server-bing-webmaster](https://github.com/isiahw1/mcp-server-bing-webmaster)** `⭐ 25` `updated ≤1y` An MCP server that exposes Bing Webmaster Tools API endpoints for SEO management and analytics to MCP-compatible AI assistants.
- **[stadiamaps/stadiamaps-mcp-server-ts](https://github.com/stadiamaps/stadiamaps-mcp-server-ts)** `⭐ 25` `updated >1y` A TypeScript MCP server that exposes Stadia Maps APIs—including geocoding, routing, isochrones, and static map generation—to AI assistants via the Model Context Protocol.
- **[text-to-graphql-mcp](https://github.com/arize-ai/text-to-graphql-mcp)** `⭐ 25` `updated ≤30d` An MCP server that converts natural language queries into valid GraphQL queries for use with AI assistants like Claude Desktop and Cursor.
- **[damientilman/mailchimp-mcp-server](https://github.com/damientilman/mailchimp-mcp-server)** `⭐ 24` `updated ≤90d` An MCP server providing 227 tools for interacting with the Mailchimp Marketing API, including campaigns, audiences, reports, and e-commerce, with safety features like read-only and dry-run modes.
- **[weather-mcp-server](https://github.com/sjanax01/weather-mcp-server)** `⭐ 24` `updated >1y` A minimal MCP server that exposes WeatherAPI.com data—including current conditions, forecasts, historical data, and air quality—as tools for AI assistants.
- **[x-mcp-server](https://github.com/mbelinky/x-mcp-server)** `⭐ 24` `updated >1y` An MCP server that allows AI assistants to post, search, and delete tweets on X.com using OAuth 1.0a and 2.0 authentication with media upload support.
- **[kukapay/nearby-search-mcp](https://github.com/kukapay/nearby-search-mcp)** `⭐ 22` `updated >1y` An MCP server that provides nearby place searches using IP-based location detection and Google Places API.
- **[Sidd27/infrawise](https://github.com/sidd27/infrawise)** `⭐ 22` `updated ≤90d` MCP server for AWS infrastructure analysis — DynamoDB, Lambda, SQS, SNS, S3, API Gateway, PostgreSQL, MySQL, MongoDB, Kafka & IaC drift. Works with Claude Code, Cursor, and GitHub Copilot.
- **[alexbakers/mcp-ipfs](https://github.com/alexbakers/mcp-ipfs)** `⭐ 21` `updated >1y` An MCP server that wraps the w3 CLI to enable language models to interact with storacha.network/IPFS for space, data, and delegation management.
- **[Dudude-bit/yandex-lavka-mcp](https://github.com/dudude-bit/yandex-lavka-mcp)** `⭐ 21` `updated ≤30d` An unofficial MCP server that enables AI assistants to browse, cart, and confirm grocery orders from Yandex Lavka using the user's own session cookies.
- **[PCDCK/ozon-mcp](https://github.com/pcdck/ozon-mcp)** `⭐ 21` `updated ≤180d` An MCP server that exposes 466 Ozon Seller and Performance API methods as tools for AI agents like Claude and Cursor.
- **[trilogy-group/aws-pricing-mcp](https://github.com/trilogy-group/aws-pricing-mcp)** `⭐ 21` `updated >1y` An MCP server that exposes live AWS EC2 pricing data, supporting filtered searches by vCPU, RAM, networking, and region via traditional or serverless Lambda deployment.
- **[Hippycampus](https://github.com/cromwellian/hippycampus)** `⭐ 20` `updated >1y` An open-source MCP server that dynamically converts REST endpoints into MCP resources using OpenAPI specifications.
- **[iplocate/mcp-server-iplocate](https://github.com/iplocate/mcp-server-iplocate)** `⭐ 20` `updated >1y` MCP server for IP address geolocation, network info, proxy/VPN detection, and abuse contacts via the IPLocate.io API.
- **[Danielpeter-99/calcom-mcp](https://github.com/danielpeter-99/calcom-mcp)** `⭐ 19` `updated >1y` A FastMCP server that enables LLMs to interact with the Cal.com API for managing event types, bookings, and scheduling data.
- **[liveblocks/liveblocks-mcp-server](https://github.com/liveblocks/liveblocks-mcp-server)** `⭐ 19` `updated ≤180d` An MCP server that exposes Liveblocks REST API functions—rooms, threads, comments, notifications, Storage, and Yjs—to AI coding assistants.
- **[MatiousCorp/google-ad-manager-mcp](https://github.com/matiouscorp/google-ad-manager-mcp)** `⭐ 19` `updated ≤180d` MCP server that lets AI assistants manage Google Ad Manager campaigns, line items, and creatives via natural language.
- **[openstack-kr/python-openstackmcp-server](https://github.com/openstack-kr/python-openstackmcp-server)** `⭐ 19` `updated ≤180d` An MCP server that exposes OpenStack compute, image, identity, network, and block storage resources to AI assistants like Claude Desktop via the Model Context Protocol.
- **[@angheljf/nyt](https://github.com/angheljf/nyt)** `⭐ 18` `updated ≤90d` A TypeScript-based MCP server for searching New York Times articles from the last 30 days via the NYTimes API.
- **[espressif/esp-rainmaker-mcp](https://github.com/espressif/esp-rainmaker-mcp)** `⭐ 18` `updated >1y` An MCP server that provides a wrapper around the esp-rainmaker-cli to allow LLM clients to interact with ESP RainMaker IoT devices.
- **[finopsmcp](https://github.com/getnable/finopsmcp)** `⭐ 18` `updated ≤90d` A local-first MCP server that allows AI agents like Claude and Cursor to query cloud costs across AWS, Azure, GCP, and Kubernetes.
- **[hardik-id/azure-resource-graph-mcp-server](https://github.com/hardik-id/azure-resource-graph-mcp-server)** `⭐ 18` `updated >1y` An MCP server that enables querying Azure resources via Azure Resource Graph.
- **[smartlead-mcp-server](https://github.com/jonathan-politzki/smartlead-mcp-server)** `⭐ 18` `updated >1y` An MCP server providing a simplified interface to the Smartlead email marketing API for AI assistants and automation tools.
- **[ip2location/mcp-ip2location-io](https://github.com/ip2location/mcp-ip2location-io)** `⭐ 17` `updated ≤180d` An MCP server that provides IP geolocation data via the IP2Location.io API.
- **[pythonanywhere/pythonanywhere-mcp-server](https://github.com/pythonanywhere/pythonanywhere-mcp-server)** `⭐ 17` `updated ≤90d` An MCP server that bridges AI tools with PythonAnywhere accounts to programmatically manage files, web apps, and scheduled tasks.
- **[stape-io/stape-mcp-server](https://github.com/stape-io/stape-mcp-server)** `⭐ 17` `updated ≤180d` An MCP server that exposes the Stape GTM (server-side tagging) API to AI assistants like Claude and Cursor.
- **[alilxxey/openobserve-community-mcp](https://github.com/alilxxey/openobserve-community-mcp)** `⭐ 16` `updated ≤1y` An MCP server that exposes OpenObserve Community Edition's REST API as tools for MCP clients like Claude and Codex.
- **[aashari/mcp-server-aws-sso](https://github.com/aashari/mcp-server-aws-sso)** `⭐ 15` `updated ≤1y` A Node.js/TypeScript MCP server that enables AI assistants to interact with AWS resources via IAM Identity Center (SSO).
- **[r-huijts/oorlogsbronnen-mcp](https://github.com/r-huijts/oorlogsbronnen-mcp)** `⭐ 15` `updated >1y` An MCP server that provides structured access to the Dutch Oorlogsbronnen WWII archives via the Model Context Protocol.
- **[tubeagentkit/youtube-mcp](https://github.com/tubeagentkit/youtube-mcp)** `⭐ 15` tubeagentkit/youtube-mcp : Hosted MCP server that searches YouTube for videos or channels and fetches transcripts, channel data, and playlists.
- **[Scrapezy](https://github.com/scrapezy/mcp)** `⭐ 14` `updated >1y` A Model Context Protocol server that exposes Scrapezy's web data extraction API as a tool for MCP-compatible AI assistants like Claude Desktop.
- **[slidespeak-mcp](https://github.com/slidespeak/slidespeak-mcp)** `⭐ 14` `updated ≤180d` An MCP server that connects the Slidespeak API to AI assistants, allowing them to generate PowerPoint presentations from prompts.
- **[sports-mcp-server](https://github.com/cloudbet/sports-mcp-server)** `⭐ 14` `updated >1y` A minimal MCP server exposing Cloudbet's sports data and betting tools via the Model Context Protocol.
- **[xspadex/bilibili-mcp](https://github.com/xspadex/bilibili-mcp)** `⭐ 14` `updated >1y` bilibili-mcp is an MCP server that fetches Bilibili trending video data via httpx and FastMCP for use with MCP clients like Cursor.
- **[joachimBrindeau/domain-mcp](https://github.com/joachimbrindeau/domain-mcp)** `⭐ 13` joachimBrindeau/domain-mcp ☁️ - Manage Dynadot domains, DNS, WHOIS, nameservers, transfers and aftermarket listings.
- **[mcp-server-runescape](https://github.com/stjepko-xyz/mcp-server-runescape)** `⭐ 13` `updated ≤1y` An MCP server that exposes RuneScape and Old School RuneScape APIs as tools for querying item prices, player hiscores, and player counts inside MCP-compatible clients like Claude Desktop and Cursor.
- **[Spaceship MCP](https://github.com/bartwaardenburg/spaceship-mcp)** `⭐ 13` `updated ≤1y` An MCP server that exposes the Spaceship API for managing domains, DNS, contacts, and marketplace listings via AI clients.
- **[StacklokLabs/ocireg-mcp](https://github.com/stackloklabs/ocireg-mcp)** `⭐ 13` `updated ≤90d` An SSE-based MCP server that exposes tools for querying OCI registries, including retrieving image info, listing tags, fetching manifests, and reading image configs.
- **[thunderboltsid/mcp-nutanix](https://github.com/thunderboltsid/mcp-nutanix)** `⭐ 13` `updated ≤1y` An experimental MCP server that lets LLMs like Claude and Cursor list and inspect Nutanix Prism Central resources such as VMs, clusters, and hosts via the Model Context Protocol.
- **[Work90210/APIFold](https://github.com/work90210/apifold)** `⭐ 13` `updated ≤180d` Turn any REST API into an MCP server using an OpenAPI spec with no code required.
- **[google-pse-mcp](https://github.com/rendyfebry/google-pse-mcp)** `⭐ 12` `updated >1y` A Model Context Protocol (MCP) server that exposes the Google Programmable Search Engine API as a tool for MCP-compatible clients like VS Code, Copilot, and Claude Desktop.
- **[jordandalton/restcsv-mcp-server](https://github.com/jordandalton/restcsvmcpserver)** `⭐ 12` `updated >1y` An MCP server for RestCSV, generated using MCPGen, enabling integration with MCP clients like Claude Desktop or Cursor.
- **[mcp-alapi-cn](https://github.com/alapi-sdk/mcp-alapi-cn)** `⭐ 12` `updated >1y` An MCP server implementation that exposes ALAPI's 100+ utility APIs (IP lookup, weather, enterprise info, etc.) to MCP-compatible AI clients.
- **[vmware-skills/vmware-monitor](https://github.com/vmware-skills/vmware-monitor)** `⭐ 12` zw008/VMware-Monitor ☁️ - Read-only VMware vSphere/vCenter monitoring: inventory, alarms, events, host health, VM info and snapshot listing.
- **[BrunoKrugel/echo-mcp](https://github.com/brunokrugel/echo-mcp)** `⭐ 11` `updated ≤90d` An MCP server that wraps any existing Echo Framework API to enable AI assistants to interact with it via the Model Context Protocol.
- **[gcore-mcp-server](https://github.com/g-core/gcore-mcp-server)** `⭐ 11` `updated ≤30d` An official Model Context Protocol (MCP) server that provides LLM assistants with tools to interact with the Gcore Cloud API.
- **[open-qr/openqr](https://github.com/open-qr/openqr)** `⭐ 11` open-qr/openqr : Hosted QR code MCP server (17 tools) plus a free REST API — generate QR codes and create, edit and track dynamic (editable) QR codes with scan analytics. Remote endpoint https://openqr.uk/mcp or npx -y @open-qr/mcp, free API key from openqr.uk.
- **[SaintDoresh/Weather-MCP-ClaudeDesktop](https://github.com/saintdoresh/weather-mcp-claudedesktop)** `⭐ 11` `updated >1y` A lightweight MCP server that exposes OpenWeatherMap API data—current conditions, forecasts, historical weather, air quality, and location search—as tools for Claude Desktop.
- **[SidneyBissoli/ibge-br-mcp](https://github.com/sidneybissoli/ibge-br-mcp)** `⭐ 11` `updated ≤180d` An MCP server exposing 23 tools for querying Brazilian Institute of Geography and Statistics (IBGE) APIs, including geographic, demographic, economic, and census data.
- **[inoyu-mcp-unomi-server](https://github.com/inoyu-dev/inoyu-mcp-unomi-server)** `⭐ 10` `updated >1y` An MCP server implementation for integrating Apache Unomi CDP with Anthropic's Model Context Protocol.
- **[molanojustin/smithsonian-mcp](https://github.com/molanojustin/smithsonian-mcp)** `⭐ 10` `updated ≤90d` An MCP server that exposes the Smithsonian Institution's Open Access API to AI assistants, enabling them to search and retrieve metadata for over 3 million collection objects.
- **[Public APIs MCP](https://github.com/zazencodes/public-apis-mcp)** `⭐ 10` `updated >1y` An MCP server that provides semantic search over a catalog of free public APIs.
- **[rossshannon/Weekly-Weather-mcp](https://github.com/rossshannon/weekly-weather-mcp)** `⭐ 10` `updated ≤1y` A Python-based MCP server that exposes OpenWeatherMap One Call API 3.0 data as tools for 8-day weather forecasts and current conditions.
- **[whiteknightonhorse/APIbase](https://github.com/whiteknightonhorse/apibase)** `⭐ 10` `updated ≤90d` APIbase is a universal MCP gateway that provides AI agents access to 576 real-world API tools via a single endpoint with x402 USDC micropayments.
- **[ckalima/pipedrive-mcp-server](https://github.com/ckalima/pipedrive-mcp-server)** `⭐ 9` `updated ≤30d` An MCP server that integrates Pipedrive CRM capabilities into AI assistants via the Model Context Protocol.
- **[fulcradynamics/fulcra-context-mcp](https://github.com/fulcradynamics/fulcra-context-mcp)** `⭐ 9` `updated ≤30d` An MCP server that provides tools and resources to access Fulcra Context data via the Fulcra API.
- **[iaptic/mcp-server-iaptic](https://github.com/iaptic/mcp-server-iaptic)** `⭐ 9` `updated ≤180d` A Model Context Protocol server for interacting with the Iaptic API to query customer, purchase, transaction, and statistics data.
- **[mcp_pearch](https://github.com/pearch-ai/mcp_pearch)** `⭐ 9` `updated ≤180d` An MCP server that exposes Pearch.ai's natural-language people and company search API to compatible clients like Cursor, Claude Desktop, and VS Code.
- **[mcp-server](https://github.com/kontent-ai/mcp-server)** `⭐ 9` `updated ≤90d` An official MCP server that exposes Kontent.ai content models, taxonomies, and items to AI assistants like Claude and Cursor via the Model Context Protocol.
- **[shopsavvy/shopsavvy-mcp-server](https://github.com/shopsavvy/shopsavvy-mcp-server)** `⭐ 9` `updated ≤180d` An MCP server that exposes ShopSavvy's product lookup, pricing, and historical price data tools to AI assistants like Claude.
- **[twitterapi-io-mcp](https://github.com/dorukardahan/twitterapi-io-mcp)** `⭐ 9` `updated ≤30d` An MCP server providing offline TwitterAPI.io documentation for AI assistants like Claude.
- **[acamolese/google-search-console-mcp](https://github.com/acamolese/google-search-console-mcp)** `⭐ 8` `updated ≤90d` An MCP server that provides read-only access to Google Search Console data for AI assistants like Claude Code and Cursor.
- **[alimo7amed93/webhook-tester-mcp](https://github.com/alimo7amed93/webhook-tester-mcp)** `⭐ 8` `updated >1y` FastMCP-based MCP server for managing and testing webhooks via the webhook-test.com API.
- **[ionos-cloud/ionoscloud-mcp](https://github.com/ionos-cloud/ionoscloud-mcp)** `⭐ 8` `updated ≤90d` An MCP server that exposes IONOS CLOUD resources to AI assistants via the Model Context Protocol.
- **[Mogacode-ma/infomaniak-mcp-agent](https://github.com/mogacode-ma/infomaniak-mcp-agent)** `⭐ 8` `updated ≤90d` infomaniak-mcp-agent is an unofficial Model Context Protocol server exposing 81 Infomaniak cloud service tools for direct LLM invocation.
- **[privateaccess-mcp](https://github.com/johnneerdael/privateaccess-mcp)** `⭐ 8` `updated ≤180d` An MCP server that exposes 84 specialized tools for managing Netskope Private Access infrastructure, enabling AI assistants to automate publisher deployment, app configuration, policy management, and compliance auditing.
- **[sevalla-hosting/mcp](https://github.com/sevalla-hosting/mcp)** `⭐ 8` `updated ≤90d` An official remote MCP server that exposes the Sevalla PaaS API through two tools, allowing AI agents to discover and execute API calls via a sandboxed V8 environment.
- **[tomba-io/tomba-mcp-server](https://github.com/tomba-io/tomba-mcp-server)** `⭐ 8` `updated ≤180d` A Model Context Protocol server that exposes Tomba.io's email discovery, verification, and enrichment APIs as tools, resources, and prompts for LLM clients.
- **[alanpcf/brasil-data-mcp](https://github.com/alanpcf/brasil-data-mcp)** `⭐ 7` `updated ≤30d` An MCP server that exposes Brazilian public data—including CNPJ, CEP, and economic rates—as tools for AI clients.
- **[bbonnin/openapi-to-mcp](https://github.com/bbonnin/openapi-to-mcp)** `⭐ 7` `updated ≤1y` OpenApiMCPServer is an MCP server that converts OpenAPI/Swagger specifications into MCP tools for AI agent integration.
- **[canvas-lms-mcp](https://github.com/ahnopologetic/canvas-lms-mcp)** `⭐ 7` `updated ≤1y` An MCP server that provides AI assistants access to Canvas LMS data like courses, assignments, and grades.
- **[gzchenhao/openhire](https://github.com/gzchenhao/openhire)** `⭐ 7` gzchenhao/openhire - Agent-native job search over employer ATS APIs (Greenhouse, Lever, Ashby, Beisen) — 125 companies and ~15k live postings with freshness verification, ghost-job scoring and deep-link apply channels. Résumés never transit the server; matching runs client-side.
- **[nk3750/jitapi](https://github.com/nk3750/jitapi)** `⭐ 7` `updated ≤180d` An MCP server that enables Claude to interact with any API by parsing OpenAPI specs, indexing endpoints with local embeddings, and executing multi-step API call chains.
- **[agentcentral-to/agent-central-mcp](https://github.com/agentcentral-to/agent-central-mcp)** `⭐ 6` `updated ≤180d` A hosted MCP server that provides AI clients with tools to access Amazon Seller Central and Amazon Ads data.
- **[alexanderclapp/clirank-mcp-server](https://github.com/alexanderclapp/clirank-mcp-server)** `⭐ 6` `updated ≤90d` MCP server that exposes the CLIRank API directory as tools for AI agents to search, compare, and retrieve docs for 400+ APIs ranked by agent-friendliness.
- **[antonio-mello-ai/mcp-pfsense](https://github.com/antonio-mello-ai/mcp-pfsense)** `⭐ 6` `updated ≤90d` MCP server for managing pfSense firewalls through AI assistants.
- **[erikhoward/adls-mcp-server](https://github.com/erikhoward/adls-mcp-server)** `⭐ 6` `updated >1y` An MCP server that provides a standardized interface for interacting with Azure Data Lake Storage Gen2.
- **[exa-mcp-server](https://github.com/theishangoswami/exa-mcp-server)** `⭐ 6` `updated >1y` An MCP server that lets AI assistants like Claude Desktop perform web searches using the Exa AI Search API.
- **[hlydecker/ucsc-genome-mcp](https://github.com/hlydecker/ucsc-genome-mcp)** `⭐ 6` `updated ≤1y` An MCP server that provides access to the UCSC Genome Browser API for LLM applications.
- **[ipfred/aiwen-mcp-server-geoip](https://github.com/ipfred/aiwen-mcp-server-geoip)** `⭐ 6` `updated >1y` An MCP server that wraps the Aiwen IP geolocation API for IP lookup, risk profiling, and WHOIS queries.
- **[mcp-wassenger](https://github.com/wassengerhq/mcp-wassenger)** `⭐ 6` `updated >1y` MCP Wassenger is an MCP server that connects AI assistants to the Wassenger WhatsApp API for sending messages, analyzing chats, and automating WhatsApp workflows via natural language commands.
- **[mercurialsolo/counsel-mcp](https://github.com/mercurialsolo/counsel-mcp)** `⭐ 6` `updated ≤1y` An MCP server that connects AI agents to the Counsel API for strategic reasoning and multi-perspective analysis.
- **[mroops0111/openapi-mcp-gateway](https://github.com/mroops0111/openapi-mcp-gateway)** `⭐ 6` `updated ≤90d` A gateway that converts OpenAPI/Swagger specifications into Model Context Protocol (MCP) servers with support for multiple authentication methods.
- **[Muhammed-AbdelGhany/rest_api_mcp](https://github.com/muhammed-abdelghany/rest_api_mcp)** `⭐ 6` `updated ≤180d` A Model Context Protocol server that lets AI agents authenticate, discover, and call REST API endpoints using Swagger specs and auto-login with 2FA support.
- **[viso-mcp-server](https://github.com/visotrust/viso-mcp-server)** `⭐ 6` `updated ≤90d` A Model Context Protocol server that exposes VISO TRUST API capabilities to AI assistants via stdio or SSE.
- **[weather-mcp](https://github.com/shuowang-ai/weather-mcp)** `⭐ 6` `updated >1y` A Model Context Protocol (MCP) server that provides real-time weather, air quality, forecasts, and astronomical data via the Caiyun Weather API.
- **[hkaanengin/opendota-mcp-server](https://github.com/hkaanengin/opendota-mcp-server)** `⭐ 5` `updated ≤1y` An MCP server that exposes OpenDota API tools for querying Dota 2 statistics via AI assistants like Claude.
- **[jasonwilbur/oci-pricing-mcp](https://github.com/jasonwilbur/oci-pricing-mcp)** `⭐ 5` `updated ≤180d` An MCP server that exposes Oracle Cloud Infrastructure pricing data to AI assistants like Claude.
- **[keptlive/contextwire-mcp](https://github.com/keptlive/contextwire-mcp)** `⭐ 5` keptlive/contextwire-mcp : Free search API for AI agents with 105 engines, 22 profiles, remote MCP server, and 94.3% SimpleQA accuracy. Tools: ask, search, extract, research, batch_search.
- **[Labs64/NetLicensing-MCP](https://github.com/labs64/netlicensing-mcp)** `⭐ 5` `updated ≤90d` NetLicensing MCP Server is a natural language interface that enables agentic applications to manage software licensing via Labs64 NetLicensing without writing API calls.
- **[mrslbt/rakuten-mcp](https://github.com/mrslbt/rakuten-mcp)** `⭐ 5` `updated ≤90d` An MCP server that exposes Rakuten Ichiba, Rakuten Books, and Rakuten Travel search APIs as tools for Claude Desktop, Claude Code, and Cursor.
- **[PostcardBot/mcp-server](https://github.com/postcardbot/mcp-server)** `⭐ 5` `updated ≤1y` An MCP server that lets AI agents send physical postcards worldwide via the Postcard.bot API, compatible with Claude, Cursor, Windsurf, and any MCP client.
- **[vmware-skills/vmware-nsx](https://github.com/vmware-skills/vmware-nsx)** `⭐ 5` zw008/VMware-NSX ☁️ - VMware NSX network management: segments, Tier-0/Tier-1 gateways, NAT rules, static/BGP routing and IPAM pools, with dry-run previews and delete confirmation.
- **[vmware-skills/vmware-vks](https://github.com/vmware-skills/vmware-vks)** `⭐ 5` zw008/VMware-VKS ☁️ - VMware Tanzu / vSphere Kubernetes Service: Supervisor cluster, namespace and Tanzu Kubernetes Cluster lifecycle, with dry-run mode and kubeconfig export.
- **[warpfreight/warp-agent-mcp](https://github.com/warpfreight/warp-agent-mcp)** `⭐ 5` `updated ≤90d` MCP server for the Warp freight API. Quote, book, and track LTL/FTL shipments from any MCP-compatible AI agent.
- **[zw008/VMware-NSX](https://github.com/zw008/vmware-nsx)** `⭐ 5` `updated ≤90d` VMware NSX networking management: segments, gateways, NAT, routing, IPAM — 32 MCP tools.
- **[admin978/canvas-mcp](https://github.com/admin978/canvas-mcp)** `⭐ 4` `updated ≤90d` A local-first MCP server that connects Claude and other MCP clients to Canvas LMS data.
- **[bifrost-mcp/rippling-mcp](https://github.com/bifrost-mcp/rippling-mcp)** `⭐ 4` `updated ≤1y` An MCP server that exposes Rippling HR/IT/Finance platform data and actions via the Model Context Protocol for AI agent consumption.
- **[Castaldo-Solutions/mcp-vtenext](https://github.com/castaldo-solutions/mcp-vtenext)** `⭐ 4` `updated ≤90d` MCP server that exposes VTENext CRM's WebService API as tools for Claude and other MCP-compatible clients.
- **[cdvolvik/practice-fusion-mcp](https://github.com/cdvolvik/practice-fusion-mcp)** `⭐ 4` `updated ≤30d` A read-only Model Context Protocol (MCP) server for accessing Practice Fusion EHR data via FHIR R4.
- **[dan1d/mercadolibre-mcp](https://github.com/dan1d/mercadolibre-mcp)** `⭐ 4` `updated ≤1y` MCP server that connects AI agents to MercadoLibre's e-commerce platform for searching products, browsing categories, and tracking trends across Latin America.
- **[didlogic_mcp](https://github.com/userad/didlogic_mcp)** `⭐ 4` `updated ≤1y` Didlogic MCP Server is a Model Context Protocol server that enables LLMs to interact with Didlogic telecom services via standardized tools.
- **[DigitalOcean MCP Server](https://github.com/rohit-kaundal/digitalocean-mcp-server)** `⭐ 4` `updated >1y` A Go-based Model Context Protocol server that exposes 48 tools for managing DigitalOcean infrastructure, including droplets, Kubernetes clusters, and container registries.
- **[drakonkat/wizzy-mcp-tmdb](https://github.com/drakonkat/wizzy-mcp-tmdb)** `⭐ 4` `updated ≤1y` An MCP server in JavaScript that exposes The Movie Database (TMDB) search and retrieval tools to AI clients via the Model Context Protocol.
- **[Israel Statistics MCP](https://github.com/reuvenaor/israel-statistics-mcp)** `⭐ 4` `updated ≤90d` An MCP server providing programmatic access to Israeli Central Bureau of Statistics economic data, including CPI, housing indices, and an inflation calculator.
- **[jasonwilbur/cloud-cost-mcp](https://github.com/jasonwilbur/cloud-cost-mcp)** `⭐ 4` `updated ≤180d` Model Context Protocol server providing multi-cloud pricing comparison for AWS, Azure, GCP, and OCI.
- **[jaspertvdm/mcp-server-gemini-bridge](https://github.com/jaspertvdm/mcp-server-gemini-bridge)** `⭐ 4` `updated ≤180d` An MCP server that bridges Google Gemini API access for MCP clients.
- **[krs-poland-mcp-server](https://github.com/pkolawa/krs-poland-mcp-server)** `⭐ 4` `updated ≤90d` An MCP server that exposes the Polish National Court Register (KRS) public API as tools for LLM clients.
- **[Lazy Toggl MCP](https://github.com/movstox/lazy-toggl-mcp)** `⭐ 4` `updated >1y` A Model Context Protocol server that exposes Toggl Track time-tracking operations to AI assistants via tools for starting, stopping, and listing time entries and workspaces.
- **[louis030195/apollo-io-mcp](https://github.com/louis030195/apollo-io-mcp)** `⭐ 4` `updated ≤1y` An MCP server that exposes Apollo.io's B2B sales intelligence database to LLMs for searching prospects, enriching contacts, and discovering companies.
- **[malamutemayhem/unclick-agent-native-endpoints](https://github.com/malamutemayhem/unclick-agent-native-endpoints)** `⭐ 4` `updated ≤180d` An MCP server acting as a unified gateway to 450+ callable endpoints across 178+ tools, allowing any MCP-compatible AI client to access a wide catalog of third-party APIs without installing separate packages.
- **[Neo1228/spring-boot-starter-swagger-mcp](https://github.com/neo1228/spring-boot-starter-swagger-mcp)** `⭐ 4` `updated ≤180d` A Spring Boot starter that automatically discovers SpringDoc OpenAPI operations and publishes them as MCP tools with validation, workflow orchestration, and guardrails.
- **[ofershap/mcp-server-cloudflare](https://github.com/ofershap/mcp-server-cloudflare)** `⭐ 4` `updated ≤1y` An MCP server that exposes Cloudflare Workers, KV, R2, DNS, and cache management tools to AI assistants like Claude Desktop, Cursor, and VS Code Copilot.
- **[ofershap/mcp-server-s3](https://github.com/ofershap/mcp-server-s3)** `⭐ 4` `updated ≤1y` An MCP server that lets AI assistants manage AWS S3 buckets and objects, supporting listing, upload/download, and presigned URL generation.
- **[pbs-mcp-server](https://github.com/matthewdcage/pbs-mcp-server)** `⭐ 4` `updated >1y` A standalone MCP server that provides AI models with access to the Australian Pharmaceutical Benefits Scheme API for querying medicine data via natural language.
- **[platfone-com/mcp](https://github.com/platfone-com/mcp)** `⭐ 4` `updated ≤180d` An MCP server that lets AI agents obtain virtual phone numbers and receive SMS verification codes via structured tool calls.
- **[SubDownload/subdownload-mcp](https://github.com/subdownload/subdownload-mcp)** `⭐ 4` `updated ≤180d` An MCP server that exposes YouTube as a data source, allowing AI agents to fetch transcripts, search videos, browse channels, and save content to a per-user knowledge base.
- **[alex-gon/thegamecrafter-mcp-server](https://github.com/alex-gon/thegamecrafter-mcp-server)** `⭐ 3` `updated ≤1y` An MCP server that connects AI assistants to The Game Crafter API for designing, managing, and pricing tabletop games.
- **[aliafsahnoudeh/shahnameh-mcp-server](https://github.com/aliafsahnoudeh/shahnameh-mcp-server)** `⭐ 3` `updated >1y` An MCP server that provides access to the Shahnameh (Persian epic) API and dataset.
- **[aparajithn/agent-deploy-dashboard-mcp](https://github.com/aparajithn/agent-deploy-dashboard-mcp)** `⭐ 3` `updated ≤1y` An MCP server that provides unified deployment management for Vercel, Render, Railway, and Fly.io via a single MCP + REST API.
- **[avisangle/method-crm-mcp](https://github.com/avisangle/method-crm-mcp)** `⭐ 3` `updated ≤1y` Production-ready MCP server for integrating Method CRM APIs with LLMs via 20 tools.
- **[bch1212/agentfetch-mcp](https://github.com/bch1212/agentfetch-mcp)** `⭐ 3` `updated ≤180d` MCP server for fetching web URLs with token estimation, caching, and intelligent routing for AI agents.
- **[benswel/qr-for-agent-api](https://github.com/benswel/qr-for-agent-api)** `⭐ 3` `updated ≤180d` A QR-as-a-Service API and MCP server that allows AI agents to programmatically create, update, and track dynamic QR codes.
- **[catrinmdonnelly/royalmail-mcp](https://github.com/catrinmdonnelly/royalmail-mcp)** `⭐ 3` `updated ≤180d` An MCP server that enables any MCP-compatible AI to book, label, track, and cancel Royal Mail and Parcelforce shipments.
- **[davidlandais/ovh-api-mcp](https://github.com/davidlandais/ovh-api-mcp)** `⭐ 3` `updated ≤180d` MCP server that provides access to the OVH API for LLM clients like Claude and Cursor.
- **[ertad-family/liquid](https://github.com/ertad-family/liquid)** `⭐ 3` `updated ≤180d` An AI-driven integration layer that automatically discovers API shapes and maps them to typed records without requiring hand-written connectors.
- **[FastAlertNow/mcp-server](https://github.com/fastalertnow/mcp-server)** `⭐ 3` `updated ≤1y` An MCP server that enables AI agents to discover and send rich notifications via the FastAlert API.
- **[frndchagas/coolify-mcp](https://github.com/frndchagas/coolify-mcp)** `⭐ 3` `updated ≤90d` An MCP server that exposes the Coolify API to AI assistants, enabling deployment, management, and diagnostics for self-hosted applications.
- **[helbertparanhos/cloudflare-mcp-pro](https://github.com/helbertparanhos/cloudflare-mcp-pro)** `⭐ 3` `updated ≤180d` cloudflare-mcp-pro is an MCP server that consolidates 69 Cloudflare REST API v4 tools into a single local stdio interface with human-approval gates.
- **[ipfind/ipfind-mcp-server](https://github.com/ipfind/ipfind-mcp-server)** `⭐ 3` `updated >1y` An MCP server that enables AI assistants to query IP Find's API for IP address location data.
- **[lizard-build/lizard-mcp](https://github.com/lizard-build/lizard-mcp)** `⭐ 3` lizard-build/lizard-mcp ️ ☁️ - Deploy services on Lizard with managed Postgres, Redis and S3, logs and metrics, secrets, scaling and custom domains.
- **[markpdxt/dronelytics-mcp](https://github.com/markpdxt/dronelytics-mcp)** `⭐ 3` `updated ≤180d` MCP server for US drone airspace intelligence and mission planning with 24 tools for flight validation, mission generation, and airspace queries.
- **[mcp-pulsenetwork](https://github.com/gtcc777/mcp-pulsenetwork)** `⭐ 3` `updated ≤90d` MCP server that provides access to 68 paid intelligence APIs via x402 on Base, enabling agents to pay per query using USDC.
- **[montumodi/mongodb-atlas-mcp-server](https://github.com/montumodi/mongodb-atlas-mcp-server)** `⭐ 3` `updated ≤180d` An MCP server that wraps the MongoDB Atlas API client to expose Atlas operations—including cluster, user, project, backup, and search management—as tools for AI assistants.
- **[nakulben/whatsapp-mcp](https://github.com/nakulben/whatsapp-mcp)** `⭐ 3` `updated ≤180d` An MCP server that lets Claude, Cursor, or any MCP-compatible client manage WhatsApp Business templates and send messages via the Meta Cloud API.
- **[Nolas-Shadow/agent1st-ads-mcp](https://github.com/nolas-shadow/agent1st-ads-mcp)** `⭐ 3` `updated ≤1y` An MCP server that lets AI agents autonomously create, manage, and pull performance stats for Meta and TikTok ad campaigns.
- **[PaidSync/paidsync-mcp](https://github.com/paidsync/paidsync-mcp)** `⭐ 3` PaidSync/paidsync-mcp : AI-powered ad management across major paid-media platforms via hosted MCP. Endpoint https://mcp.paidsync.ai/mcp.
- **[paracetamol951/caisse-enregistreuse-mcp-server](https://github.com/paracetamol951/caisse-enregistreuse-mcp-server)** `⭐ 3` `updated ≤180d` An official MCP server that connects Kash's cloud POS, invoicing, and CRM platform to Claude, ChatGPT, or any MCP-compatible AI for natural-language business management.
- **[Salaah MCP](https://github.com/yusufk/salaah-mcp)** `⭐ 3` `updated >1y` A FastAPI and MCP service providing Islamic prayer times calculations.
- **[secure-mcp-fetch](https://github.com/appsec-innovation-labs/secure-mcp-fetch)** `⭐ 3` `updated >1y` A secure URL fetching MCP server built with FastMCP that enforces allowlists and blocks private/internal IPs.
- **[smaniches/uniprot-mcp](https://github.com/smaniches/uniprot-mcp)** `⭐ 3` smaniches/uniprot-mcp ☁️ - Auditable UniProt MCP server: 41 tools over the UniProt knowledgebase (entries, features, variants, PTMs, GO terms, cross-references) with per-query SHA-256 provenance and offline replay. uvx uniprot-mcp-server.
- **[Sugra-Systems/sugra-api-mcp](https://github.com/sugra-systems/sugra-api-mcp)** `⭐ 3` Sugra-Systems/sugra-api-mcp ️ ☁️ - Connector between LLM agents and world data - 1,500+ endpoints aggregating 160+ primary sources across 36 data domains: markets, macroeconomics, company fundamentals, government, news, climate, maritime, and entity screening. Install via pip install sugra-api-mcp or hosted at app.sugra.ai/mcp.
- **[vmware-skills/vmware-storage](https://github.com/vmware-skills/vmware-storage)** `⭐ 3` zw008/VMware-Storage ☁️ - VMware vSphere storage management: NFS/VMFS datastores, iSCSI software adapters and dynamic targets, and vSAN cluster operations, with dry-run previews.
- **[x7even/cloudcostsmcp](https://github.com/x7even/cloudcostsmcp)** `⭐ 3` `updated ≤90d` Anchor AI FinOps to real, live cloud pricing — open source MCP server for AWS, GCP, and Azure.
- **[zafronix/wc-mcp](https://github.com/zafronix/wc-mcp)** `⭐ 3` `updated ≤180d` Model Context Protocol server for the Zafronix World Cup API — every FIFA World Cup since 1930. 15 tools wrapping tournaments, teams, players, matches, stadiums, brackets, standings, trivia.
- **[8randonpickart5/alderpost-mcp](https://github.com/8randonpickart5/alderpost-mcp)** `⭐ 2` `updated ≤180d` An MCP server providing access to Alderpost Intelligence API endpoints for domain, company, and threat intelligence.
- **[agentmetal/mcp](https://github.com/agentmetal/mcp)** `⭐ 2` `updated ≤90d` An MCP server that allows AI agents to provision, manage, and execute commands on Linux VPS instances using USDC or card payments.
- **[alexzavialov/travel-art-mcp](https://github.com/alexzavialov/travel-art-mcp)** `⭐ 2` `updated ≤30d` Model Context Protocol server exposing travel.art's art-tourism data to AI agents via Streamable HTTP transport.
- **[antonio-mello-ai/mcp-airflow](https://github.com/antonio-mello-ai/mcp-airflow)** `⭐ 2` `updated ≤90d` An MCP server that exposes Apache Airflow's REST API as a set of tools for AI assistants.
- **[baphometnxg/aloha-fyi-mcp](https://github.com/baphometnxg/aloha-fyi-mcp)** `⭐ 2` `updated ≤90d` An MCP server providing Hawaii tourism data (tours, events, restaurants, weather) with structured responses for AI assistants.
- **[BlazingCDN/BlazingCDN-MCP](https://github.com/blazingcdn/blazingcdn-mcp)** `⭐ 2` `updated ≤30d` An MCP server that exposes BlazingCDN management capabilities to AI agents via the Model Context Protocol.
- **[callhub-mcp](https://github.com/callhub/callhub-mcp)** `⭐ 2` `updated ≤30d` An MCP server that exposes CallHub API functions to Claude for managing contacts, campaigns, and other CallHub resources.
- **[coresignal-mcp](https://github.com/coresignal-com/coresignal-mcp)** `⭐ 2` `updated ≤90d` An MCP server that exposes Coresignal's B2B data APIs (companies, employees, job postings) to AI assistants via the Model Context Protocol.
- **[dockndevai/mcp-kubernetes](https://github.com/dockndevai/mcp-kubernetes)** `⭐ 2` `updated ≤30d` MCP server for Kubernetes — multi-cluster ops with security modes (read-only/read-write/admin) and access-control flags.
- **[iletimerkezi/iletimerkezi-mcp-server](https://github.com/iletimerkezi/iletimerkezi-mcp-server)** `⭐ 2` `updated ≤90d` An MCP server that provides tool access to the iletiMerkezi SMS API for MCP-compatible LLM clients.
- **[jaspertvdm/mcp-server-openai-bridge](https://github.com/jaspertvdm/mcp-server-openai-bridge)** `⭐ 2` `updated ≤180d` An MCP server that bridges OpenAI API access for MCP clients.
- **[jira-mcp](https://github.com/ahmetbarut/jira-mcp)** `⭐ 2` `updated ≤1y` An MCP server that enables AI agents to interact with the Jira Cloud API.
- **[khglynn/spotify-bulk-actions-mcp](https://github.com/khglynn/spotify-bulk-actions-mcp)** `⭐ 2` `updated ≤90d` MCP server for bulk Spotify operations, including batch playlist creation with confidence scoring, library exports, and CSV imports.
- **[laundromatic/shopgraph](https://github.com/laundromatic/shopgraph)** `⭐ 2` `updated ≤180d` A structured extraction API and MCP server that turns product URLs or HTML into JSON with per-field confidence scoring and extraction provenance.
- **[live-direct-marketing/ldm-inbox-check-mcp](https://github.com/live-direct-marketing/ldm-inbox-check-mcp)** `⭐ 2` `updated ≤180d` An MCP server that wraps the Inbox Check REST API to let AI agents programmatically test email deliverability, inbox placement, and authentication records across nine major email providers.
- **[mcp-server](https://github.com/dealexpress/mcp-server)** `⭐ 2` `updated ≤1y` An MCP server that enables LLMs to interact with the DealX platform for searching ads.
- **[ozers/hooksense-mcp](https://github.com/ozers/hooksense-mcp)** `⭐ 2` `updated ≤90d` MCP server for HookSense — the webhook & callback layer for AI agents.
- **[peek-travel/mcp-intro](https://github.com/peek-travel/mcp-intro)** `⭐ 2` `updated >1y` A remote MCP server that gives AI assistants real-time access to Peek.com's database of 300,000+ travel experiences, availability, and pricing.
- **[pghdma/callrail-mcp](https://github.com/pghdma/callrail-mcp)** `⭐ 2` `updated ≤90d` An MCP server that exposes the CallRail REST API v3 to MCP-compatible clients for querying calls, transcripts, and marketing attribution data.
- **[samrothschild23/intelligence-api](https://github.com/samrothschild23/intelligence-api)** `⭐ 2` `updated ≤180d` An x402-powered API server that provides Shopify, Amazon, and Google Maps intelligence endpoints, monetized via per-call USDC micropayments on Base.
- **[Sweeppea-Development-Lab/sweeppea-mcp-info](https://github.com/sweeppea-development-lab/sweeppea-mcp-info)** `⭐ 2` `updated ≤180d` A hosted MCP server that exposes 71 tools for managing Sweeppea sweepstakes, participants, calendars, and billing through AI assistants like Claude Code and Cursor.
- **[trackmage/trackmage-mcp-server](https://github.com/trackmage/trackmage-mcp-server)** `⭐ 2` `updated >1y` An MCP server that connects AI assistants like Claude and ChatGPT to the TrackMage API for tracking shipments, managing orders, and detecting carriers across 1600+ providers.
- **[us-all/airflow-mcp-server](https://github.com/us-all/airflow-mcp-server)** `⭐ 2` `updated ≤90d` Airflow MCP server — DAG list, runs, task instances, log tails, trigger and clear over the Airflow REST API.
- **[vmware-skills/vmware-avi](https://github.com/vmware-skills/vmware-avi)** `⭐ 2` zw008/VMware-AVI ☁️ - VMware Avi Load Balancer (NSX ALB) management with AKO Kubernetes integration: virtual services, pools, analytics metrics and AKO lifecycle.
- **[x402-index/x402search-mcp](https://github.com/x402-index/x402search-mcp)** `⭐ 2` `updated ≤1y` x402search-mcp is an MCP server that enables AI agents to search 14,000+ x402-enabled HTTP APIs using cryptocurrency payments.
- **[aarsiv-groups/shipi-mcp-server](https://github.com/aarsiv-groups/shipi-mcp-server)** `⭐ 1` `updated ≤1y` An MCP server that exposes multi-carrier shipping management tools (rates, labels, tracking, pickups, address book) to Claude Desktop, Claude Code, and other MCP-compatible AI clients via the Shipi API.
- **[Albaker-Group/cloudprice-mcp](https://github.com/albaker-group/cloudprice-mcp)** `⭐ 1` `updated ≤30d` An MCP server that provides real-time cloud pricing data and FinOps analysis primitives for AWS, Azure, GCP, and OCI.
- **[alexpota/cloudscope-mcp](https://github.com/alexpota/cloudscope-mcp)** `⭐ 1` `updated ≤90d` An MCP server that provides read-only access to Azure and GCP cloud cost data for AI assistants.
- **[andrealufino/aapl-ads-mcp](https://github.com/andrealufino/aapl-ads-mcp)** `⭐ 1` `updated ≤180d` An MCP server that connects AI assistants to Apple Search Ads API v5 for read-only queries.
- **[anhmtk/agentshare-mcp](https://github.com/anhmtk/agentshare-mcp)** `⭐ 1` `updated ≤30d` An MCP-based infrastructure for providing agent-paid API access and discovery through dual-auth protocols.
- **[apiarya/wemo-mcp-server](https://github.com/apiarya/wemo-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server that enables AI assistants to control Wemo smart home devices via natural language.
- **[arnstarn/mcp-server-spotinst](https://github.com/arnstarn/mcp-server-spotinst)** `⭐ 1` `updated ≤180d` MCP server for the Spot.io (Spotinst) API, providing tools to manage Ocean clusters, VNGs, Elastigroups, costs, and right-sizing across AWS and Azure.
- **[cargoffer/bolsa_de_carga-mcp](https://github.com/cargoffer/bolsa_de_carga-mcp)** `⭐ 1` `updated ≤180d` MCP Server for Cargoffer Bolsa de Carga API - Model Context Protocol to enable AI agents and LLMs to interact with freight marketplace.
- **[danishashko/geocode-mcp](https://github.com/danishashko/geocode-mcp)** `⭐ 1` `updated ≤90d` Geocoding MCP Server - forward & reverse geocoding, place search, distance between locations via OpenStreetMap Nominatim. No API key, zero-config npx, for Claude & any MCP client.
- **[discava/mcp-server](https://github.com/discava/mcp-server)** `⭐ 1` `updated ≤1y` An MCP server that enables AI agents to search local businesses worldwide via the Discava API.
- **[dockndevai/mcp-azure](https://github.com/dockndevai/mcp-azure)** `⭐ 1` `updated ≤30d` An MCP server that enables AI agents to inventory and manage Azure resources via the Azure Resource Manager API.
- **[dockndevai/mcp-oci](https://github.com/dockndevai/mcp-oci)** `⭐ 1` `updated ≤30d` MCP server for Oracle Cloud (OCI) — live resource discovery, dependency mapping, and Terraform generation, with security modes and access-control flags.
- **[flexorch/flexorch-mcp](https://github.com/flexorch/flexorch-mcp)** `⭐ 1` `updated ≤90d` An MCP server that exposes the FlexOrch document intelligence API as tools for LLMs.
- **[gavelin-ai/mcp](https://github.com/gavelin-ai/mcp)** `⭐ 1` `updated ≤180d` An MCP server providing access to US state legislative intelligence, including bill searches and speaker-attributed hearing transcripts.
- **[geolabel/geolabel-mcp](https://github.com/geolabel/geolabel-mcp)** `⭐ 1` `updated ≤180d` An MCP server that converts GPS coordinates into structured location context including place names, categories, and real-time opening hours.
- **[Infrawise/mcp-server](https://github.com/infrawise/mcp-server)** `⭐ 1` `updated ≤90d` An MCP server that exposes Azure FinOps cost optimization tools to Claude Code.
- **[jocarrd/aemet-client](https://github.com/jocarrd/aemet-client)** `⭐ 1` jocarrd/aemet-mcp : Spanish weather from AEMET, the national meteorological agency: municipal forecasts, CAP warnings, station observations, climate records, and beach, mountain and marine forecasts.
- **[kaitoInfra/twitterapi-io-mcp-server](https://github.com/kaitoinfra/twitterapi-io-mcp-server)** `⭐ 1` kaitoInfra/twitterapi-io-mcp-server : Hosted MCP server for twitterapi.io — Twitter/X data API for AI agents. 12 read-only tools: tweet search with full operators, profiles, threads, real-time WebSocket streaming. Hosted endpoint at mcp.twitterapi.io/mcp, npm @kaitoinfra/twitterapi-io-mcp-server.
- **[LightSpeedPlusOne/invovate-mcp-server](https://github.com/lightspeedplusone/invovate-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server for the Invovate API that enables AI agents to generate PDF, JSON, and UBL 2.1 invoices.
- **[markylaredo/openjev-mcp](https://github.com/markylaredo/openjev-mcp)** `⭐ 1` openjev-mcp (markylaredo) - MCP server exposing Jev via the public OpenJEV API (jev_ask / choice / score / noul); built for DeepSeek Harness, works in any MCP client. Project guide.
- **[mgnirck/lecka-mcp](https://github.com/mgnirck/lecka-mcp)** `⭐ 1` `updated ≤180d` lecka-mcp is an MCP server that exposes Lecka sports nutrition product data and fueling plan calculations to MCP-compatible AI clients.
- **[mikusnuz/dynadot-mcp](https://github.com/mikusnuz/dynadot-mcp)** `⭐ 1` `updated ≤1y` dynadot-mcp is an MCP server exposing 60 tools for managing domains, DNS, contacts, and transfers via the Dynadot API.
- **[Nebula-Block-Data/nebulablock-mcp-server](https://github.com/nebula-block-data/nebulablock-mcp-server)** `⭐ 1` `updated >1y` An official MCP server that exposes the full NebulaBlock API as tools using the fastmcp library for use in MCP-compatible clients.
- **[noteboxd/mcp](https://github.com/noteboxd/mcp)** `⭐ 1` noteboxd/mcp ☁️ - Fragrance and perfume API for AI: query the Noteboxd encyclopedia for fragrances, notes, accords, brands, perfumers, reviews, and charts. Hosted remote server at https://mcp.noteboxd.com/mcp, or run locally with npx -y @noteboxd/mcp.
- **[Novence-ai/mcp](https://github.com/novence-ai/mcp)** `⭐ 1` Novence-ai/mcp ☁️ - Create, check, deploy and host static sites.
- **[pepabo/colormeshop-mcp](https://github.com/pepabo/colormeshop-mcp)** `⭐ 1` `updated ≤180d` An official remote MCP server for Color Me Shop that lets AI tools like Claude and Cursor manage e-commerce orders, products, and customers via natural language.
- **[PostalDataPI/postaldatapi-mcp](https://github.com/postaldatapi/postaldatapi-mcp)** `⭐ 1` `updated ≤180d` An MCP server that exposes PostalDataPI endpoints to AI agents for looking up, validating, and retrieving metadata about postal codes across 240+ countries.
- **[qr-maker-io/mcp-server](https://github.com/qr-maker-io/mcp-server)** `⭐ 1` `updated ≤180d` An MCP server that exposes QR Maker's API to AI assistants, enabling generation of styled QR codes, tracked short links, and micro-landing pages.
- **[robot-speed/mcp](https://github.com/robot-speed/mcp)** `⭐ 1` robot-speed/mcp : AI SEO platform MCP — keyword research, content calendar, site audits, backlinks, and CMS publishing via remote HTTP (https://www.robot-speed.com/api/mcp).
- **[s2-streamstore/mcp](https://github.com/s2-streamstore/mcp)** `⭐ 1` s2-streamstore/mcp ️ ☁️ - Interact with the S2 serverless stream platform.
- **[saurav61091/mcp-openapi](https://github.com/saurav61091/mcp-openapi)** `⭐ 1` `updated ≤1y` A CLI tool and MCP server that converts any OpenAPI 3.x specification into callable MCP tools for Claude and other LLM clients with zero configuration.
- **[serhiizghama/viber-mcp](https://github.com/serhiizghama/viber-mcp)** `⭐ 1` serhiizghama/viber-mcp ☁️ - Viber Bot REST API: send text, media, files, locations and contacts, broadcast messages, manage webhooks and inspect account and user details.
- **[shdomi8599/vibie-mcp](https://github.com/shdomi8599/vibie-mcp)** `⭐ 1` `updated ≤180d` shdomi8599/vibie-mcp ☁️ - Deploy static HTML folders to permanent vibie.page URLs in seconds. One-line auto-install (npx vibie-mcp setup) wires up Claude Desktop and Cursor, OAuth device-flow auth, automatic folder marker for repeat deploys without re-typing slugs.
- **[shibley/apistatuscheck-mcp-server](https://github.com/shibley/apistatuscheck-mcp-server)** `⭐ 1` shibley/apistatuscheck-mcp-server : Aggregated API and service status monitoring. Query real-time status of 285 popular services, check outage history, and get health data for incident response.
- **[smklog/parcel-shipping-rates-mcp](https://github.com/smklog/parcel-shipping-rates-mcp)** `⭐ 1` smklog/parcel-shipping-rates-mcp ️ ☁️ - Live USPS, UPS, FedEx and DHL rates for parcels shipped from the US, from a plain item description, plus checkout links, checkout status and tracking.
- **[stayingapi/hotel-mcp](https://github.com/stayingapi/hotel-mcp)** `⭐ 1` stayingapi/hotel-mcp : Hosted remote MCP server for live accommodation data across Airbnb, Booking.com, Vrbo, and Google Hotels (search, availability, prices, price comparison, reviews, listings).
- **[ticketlens/ticketlens-experiences-mcp](https://github.com/ticketlens/ticketlens-experiences-mcp)** `⭐ 1` ticketlens/ticketlens-experiences-mcp : Search tours, tickets, attractions, and activities for AI travel planners via hosted MCP or REST.
- **[trackerfitness729-jpg/sitelauncher-mcp-server](https://github.com/trackerfitness729-jpg/sitelauncher-mcp-server)** `⭐ 1` `updated ≤1y` An MCP server that lets AI agents deploy live HTTPS websites and register .xyz domains via paid USDC transactions on the Base chain.
- **[TranscriptFetch/mcp-server](https://github.com/transcriptfetch/mcp-server)** `⭐ 1` TranscriptFetch/mcp-server : Official TranscriptFetch server: transcripts for YouTube, TikTok, Instagram and podcasts, plus YouTube search, channel and playlist listing; remote endpoint at transcriptfetch.com/mcp.
- **[uju777/mcp-server-naver-search](https://github.com/uju777/mcp-server-naver-search)** `⭐ 1` uju777/mcp-server-naver-search : Naver Search integration for Shopping, Cafe, and News.
- **[webtoolbox/websitetoolbox-mcp](https://github.com/webtoolbox/websitetoolbox-mcp)** `⭐ 1` webtoolbox/websitetoolbox-mcp - Manage Website Toolbox forums via the Forum REST API: categories, topics, posts, users, user groups, conversations, moderators, tags and page views.
- **[Woobox/hatchable-mcp](https://github.com/woobox/hatchable-mcp)** `⭐ 1` `updated ≤180d` Hatchable MCP is a hosted full-stack app platform that exposes project lifecycle, file, database, deployment, and environment tools via an MCP server for any MCP client.
- **[Younghef/nutriref-api](https://github.com/younghef/nutriref-api)** `⭐ 1` `updated ≤180d` Pay-per-call USDA nutrition API for AI agents. x402 + USDC on Base.
- **[zyli5313/dochost-mcp](https://github.com/zyli5313/dochost-mcp)** `⭐ 1` zyli5313/dochost-mcp ☁️ - Publish Markdown or HTML to a public shareable link straight from your assistant. Streamable HTTP with OAuth, no API keys; published pages are served script-free from a separate cookieless origin.
- **[A1-x-Tech/mcp-yandex-dostavka](https://github.com/a1-x-tech/mcp-yandex-dostavka)** `⭐ 0` `updated ≤30d` MCP-сервер для B2B API Яндекс Доставки — рассчитать стоимость, оформить и отследить отправление из AI-приложения без собственной интеграции.
- **[A1-x-Tech/mcp-yango-delivery](https://github.com/a1-x-tech/mcp-yango-delivery)** `⭐ 0` `updated ≤30d` An MCP server that provides tools for quoting, booking, and tracking Yango Delivery services through an AI interface.
- **[AgentPostmortem/Bridgekit](https://github.com/agentpostmortem/bridgekit)** `⭐ 0` `updated ≤30d` A scoped MCP server exposing company tools (Shopify, Triple Whale, Postgres) to an AI stack with per-client permission boundaries and an append-only audit log. Writes need an explicit scope. Zero runtime dependencies, hand-rolled MCP on Cloudflare Workers.
- **[AIops-tools/Nutanix-AIops](https://github.com/aiops-tools/nutanix-aiops)** `⭐ 0` `updated ≤30d` An MCP server providing 51 governed tools for managing Nutanix Prism Central infrastructure.
- **[amzscout-corp/amzscout-skill-mcp](https://github.com/amzscout-corp/amzscout-skill-mcp)** `⭐ 0` `updated ≤30d` AMZScout Skill + MCP - bringing real Amazon research data into Claude, ChatGPT, Cursor, OpenClaw and other MCP clients.
- **[brainbook0/robopartpicker-mcp](https://github.com/brainbook0/robopartpicker-mcp)** `⭐ 0` `updated ≤30d` MCP server for RoboPartPicker — search source-linked robotics projects, bills of materials and components from AI agents. Hosted endpoint: https://robopartpicker.com/mcp.
- **[Built-AI/prism-mcp](https://github.com/built-ai/prism-mcp)** `⭐ 0` `updated ≤30d` Prism MCP server: every deadline in a lease, mortgage or insurance policy, with the clause it came from. Docs and client configs for the hosted endpoint.
- **[cargoffer/transcend-mcp-server](https://github.com/cargoffer/transcend-mcp-server)** `⭐ 0` `updated ≤180d` MCP Server for TRANSCEND Route Optimization API. Model Context Protocol tools for route optimization, toll costs, weather, POIs, traffic and fuel stations. Compatible with Claude Desktop, Cursor and any LLM supporting MCP.
- **[chrisgu/agentiq-mcp](https://github.com/chrisgu/agentiq-mcp)** `⭐ 0` `updated ≤90d` AgentIQ MCP for MoltAd — publishers list placements, deliver_ad, earn credits. Setup: https://moltad.net/publishers · remote https://moltad.net/mcp.
- **[cmcgrabby-hue/syndicate-links](https://github.com/cmcgrabby-hue/syndicate-links)** `⭐ 0` `updated ≤180d` An MCP server that lets AI agents discover merchant affiliate programs, track conversions with signed attribution tokens, and check earned commissions via the Syndicate Links API.
- **[corbinvachal48/agentrender-mcp](https://github.com/corbinvachal48/agentrender-mcp)** `⭐ 0` `updated ≤30d` MCP + REST: URL to screenshot, PDF, or structured extract for AI agents.
- **[Crindo2/gph-mcp-server](https://github.com/crindo2/gph-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server providing access to a curated database of 76,000+ healthcare service vendors for AI agents.
- **[CydVilla/peckish](https://github.com/cydvilla/peckish)** `⭐ 0` `updated ≤30d` CydVilla/peckish - Order food and groceries on DoorDash via its CLI (macOS arm64): search stores, compare fee-included totals, build carts; orders need user approval.
- **[decision-anchor/mcp-server](https://github.com/decision-anchor/mcp-server)** `⭐ 0` `updated ≤30d` Decision Anchor MCP Server is a stateless Model Context Protocol adapter that forwards tool calls to a remote HTTP API for AI agent accountability boundary tracking.
- **[dialgoodian/clawdcall-mcp](https://github.com/dialgoodian/clawdcall-mcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes ClawdCall's telephony API, enabling AI agents to perform tasks like sending OTPs and making outbound calls.
- **[dockndevai/mcp-openshift](https://github.com/dockndevai/mcp-openshift)** `⭐ 0` `updated ≤30d` Safe-by-default MCP server for OpenShift / Kubernetes — projects, pods, logs, deployments, routes and more, with username/password (local IdP) or token auth.
- **[foretak/registry-mcp](https://github.com/foretak/registry-mcp)** `⭐ 0` `updated ≤30d` Company data for AI agents, any country. MCP server and REST API over national business registries: Norway (brreg / Enhetsregisteret), the United Kingdom (Companies House) and Sweden (Bolagsverket) — orgnr, company number or organisationsnummer lookup, VAT/deadline checks.
- **[forgemeshlabs/utility-grid-mcp](https://github.com/forgemeshlabs/utility-grid-mcp)** `⭐ 0` `updated ≤30d` MCP server for discovering and calling 400+ practical APIs through six compact tools, with free catalog search and pay-per-call x402 execution on Base.
- **[gambot-ai/gambot-mcp](https://github.com/gambot-ai/gambot-mcp)** `⭐ 0` `updated ≤30d` MCP server for the Gambot WhatsApp Business API - send WhatsApp messages & templates, manage CRM, leads & campaigns from Claude, Cursor & any AI agent.
- **[giuseppesocci-bot/kalicart-global](https://github.com/giuseppesocci-bot/kalicart-global)** `⭐ 0` `updated ≤30d` Federated commerce search across independent WooCommerce merchants. Keyless, read-only MCP server.
- **[HAP-MCP](https://github.com/mingdaocloud/hap-mcp)** `⭐ 0` `updated >1y` HAP-MCP is a Model Context Protocol server that exposes HAP application APIs as MCP tools for AI integration.
- **[harvis-io/harvis-dev-mcp](https://github.com/harvis-io/harvis-dev-mcp)** `⭐ 0` `updated ≤90d` Remote MCP server for harvis.dev — deploy static sites from AI agents and get a live URL in seconds. Endpoint: https://harvis.dev/api/mcp.
- **[isgudtek/mycrab-mcp](https://github.com/isgudtek/mycrab-mcp)** `⭐ 0` `updated ≤1y` MCP server providing instant Cloudflare tunnels for AI agents via mycrab.space.
- **[JacobiusMakes/parlay-api-mcp](https://github.com/jacobiusmakes/parlay-api-mcp)** `⭐ 0` JacobiusMakes/parlay-api-mcp : Connects MCP clients to ParlayAPI for sports odds, player props, public event discovery, and account usage. Account data tools use each user's own API key and account allowances.
- **[krovacloud/krova-node](https://github.com/krovacloud/krova-node)** `⭐ 0` krovacloud/krova-node ️ ☁️ - Provision and manage Krova Cloud Cubes (Firecracker microVMs with root access), plus custom domains, TCP port mappings and snapshots.
- **[ni-c/calibreweb-mcp](https://github.com/ni-c/calibreweb-mcp)** `⭐ 0` ni-c/calibreweb-mcp - Read-only access to a self-hosted Calibre-Web (or Calibre-Web Automated) ebook library via its OPDS feed: search, curated views and shelves, cover images and per-format download links. npx -y calibreweb-mcp.
- **[ni-c/hetzner-dns-mcp](https://github.com/ni-c/hetzner-dns-mcp)** `⭐ 0` ni-c/hetzner-dns-mcp ☁️ - Manage Hetzner DNS zones and records through the current Hetzner Cloud API (the legacy dns.hetzner.com API was shut down in May 2026). 22 tools: zone and RRSet CRUD, zonefile import/export, TTL and protection changes, primary nameservers, and async action tracking. Every destructive tool requires an explicit confirm. npx -y hetzner-dns-mcp.
- **[ni-c/ntfy-mcp](https://github.com/ni-c/ntfy-mcp)** `⭐ 0` ni-c/ntfy-mcp ☁️ - Send push notifications through ntfy, read back sent messages, update a notification in place while a job runs, and administer users and topic access.
- **[ni-c/wg-easy-mcp](https://github.com/ni-c/wg-easy-mcp)** `⭐ 0` ni-c/wg-easy-mcp - Administer a self-hosted wg-easy (WireGuard Easy) instance: manage VPN clients, fetch configs and QR codes, create one-time links and check server status.
- **[offendersearch/mcp](https://github.com/offendersearch/mcp)** `⭐ 0` offendersearch/mcp : Searches all 58 US sex-offender registries — every US state, DC and the territories — in one query. pip install or remote streamable-HTTP at mcp.offendersearch.app. Backed by offendersearch.app.
- **[Playgama/developer-cabinet-mcp](https://github.com/playgama/developer-cabinet-mcp)** `⭐ 0` Playgama/developer-cabinet-mcp : Publishes and manages HTML5 games on Playgama, from the game form and builds to a public playable sandbox link.
- **[plopino/plopino-mcp](https://github.com/plopino/plopino-mcp)** `⭐ 0` plopino/plopino-mcp ☁️ - Publish HTML written in chat or local files and folders to a public URL, preserving folder structure.
- **[plori-ai/plori](https://github.com/plori-ai/plori)** `⭐ 0` `updated ≤90d` Give your AI agent its own cloud computer. Connect any MCP client to plori's remote server.
- **[Poiuyhje/eqvps-mcp](https://github.com/poiuyhje/eqvps-mcp)** `⭐ 0` Poiuyhje/eqvps-mcp ☁️ - Rent and operate VPSes paid in USDC or USDT: register, provision and control power, hostname, root password, reinstalls, metrics and cancellation.
- **[publee-dev/mcp](https://github.com/publee-dev/mcp)** `⭐ 0` publee-dev/mcp ️ ☁️ - Publish AI-generated HTML or static files to a shareable URL, with optional permanent hosting, in-place updates and password or members-only access.
- **[redditapis/redditapis-mcp](https://github.com/redditapis/redditapis-mcp)** `⭐ 0` redditapis/redditapis-mcp ☁️ - Read-only Reddit API access: subreddit listings, post, comment, community and user search, comment trees and top posts.
- **[reefapi/reefapi-mcp](https://github.com/reefapi/reefapi-mcp)** `⭐ 0` `updated ≤180d` reefapi/reefapi-mcp ☁️ - One MCP for 160+ live web-data APIs — search engines, social (Reddit, TikTok, Threads, Bluesky), e-commerce (Amazon, eBay, AliExpress, Etsy), real estate (Zillow, Redfin), jobs, travel, news, finance and company/people intel. Clean JSON from sites that block scrapers; one key, one shared credit pool, free tier. Remote streamable-http at api.reefapi.com/mcp.
- **[rog0x/mcp-api-tools](https://github.com/rog0x/mcp-api-tools)** `⭐ 0` rog0x/mcp-api-tools : API development — HTTP client, JWT decode, header analysis, and endpoint testing.
- **[Scottpedia0/access](https://github.com/scottpedia0/access)** `⭐ 0` Scottpedia0/access : Self-hosted API gateway for AI agents. One Bearer token, all your services. OAuth, token refresh, audit logging — agents never touch credentials. Built-in MCP server.
- **[singaporeandurian/instaseer-mcp](https://github.com/singaporeandurian/instaseer-mcp)** `⭐ 0` singaporeandurian/instaseer-mcp : InstaSeer — Instagram/TikTok/Facebook audience analysis for AI agents. Pull full public post timelines, engagement stats, and posting-calendar heatmaps for any public profile. Remote Streamable HTTP server at https://www.instaseer.com/mcp with OAuth 2.1 or API keys, 5 tools, free tier included.
- **[stevysmith/stacktree-mcp](https://github.com/stevysmith/stacktree-mcp)** `⭐ 0` stevysmith/stacktree-mcp ️ ☁️ - Publish agent-made HTML to private, unguessable URLs with passcode or email-domain gating, expiry, burn-after-read and in-place updates.
- **[thehealthai/fda-risk-radar-mcp](https://github.com/thehealthai/fda-risk-radar-mcp)** `⭐ 0` thehealthai/fda-risk-radar-mcp ☁️ - The MCP server behind Constat: FDA & NHTSA regulatory-risk intelligence for agents — device compliance risk by 3-letter product code, parsed 510(k) premarket evidence with verbatim source quotes, predicate chains, postmarket drift signals, clearance-to-payment reimbursement pathways (NTAP/CPT/CMS), and NHTSA vehicle safety. 14 tools. Decision support, not regulatory advice. Hosted at constat.dev/api/mcp.
- **[tiranmoskovitch-dev/mcp-api-bridge-lite](https://github.com/tiranmoskovitch-dev/mcp-api-bridge-lite)** `⭐ 0` tiranmoskovitch-dev/mcp-api-bridge-lite : Free REST API to MCP bridge with YAML configuration for GET/POST/PUT/DELETE and auth. pip install mcp-api-bridge-lite.
- **[unfetch-com/agent-plugin](https://github.com/unfetch-com/agent-plugin)** `⭐ 0` unfetch-com/agent-plugin : Unfetch Google Ads MCP reporting for campaigns, spend, conversions, and search terms, plus Google Analytics, Google Search Console, keyword research, and web research through a hosted OAuth endpoint with read-only account access.
- **[zopdev/mcp](https://github.com/zopdev/mcp)** `⭐ 0` zopdev/mcp : Cloud cost and infrastructure governance across AWS, Azure, GCP, Databricks and Snowflake. 263 tools (155 read, 108 write), read-only by default, over a hosted remote endpoint at https://api.zop.dev/mcp-server. Docs · Claude setup.
- **[Career Site Jobs](https://apify.com/fantastic-jobs/career-site-job-listing-api/api/mcp)** An MCP server that provides AI agents access to the Apify Career Site Job Listing API.
- **[Find-A-Domain](https://findadomain.dev/mcp)** An MCP server that enables AI assistants to check domain availability, TLD listings, and WHOIS data.
- **[Linked API](https://linkedapi.io)** A cloud-based automation API for LinkedIn that enables messaging, networking, data extraction, and outreach via API, SDK, CLI, or MCP integration.
- **[Lobby](https://lobbyvoices.com/developers)** An API and MCP server providing tools for generating phone scripts, voice agent prompts, and telephony-related business logic.
- **[mcp-server](https://zop.dev/learn/mcp-server)** zopdev/mcp : Cloud cost and infrastructure governance across AWS, Azure, GCP, Databricks and Snowflake. 263 tools (155 read, 108 write), read-only by default, over a hosted remote endpoint at https://api.zop.dev/mcp-server. Docs · Claude setup.
- **[Mercado Libre](https://mcp.mercadolibre.com)** Mercado Libre MCP Server is an MCP server exposing Mercado Libre's API documentation and resources for natural language interaction via MCP clients.
- **[Pearl](https://mcp.pearl.com)** Pearl API MCP Server is a Model Context Protocol server exposing Pearl API capabilities via MCP.
- **[pricepertoken/mcp-server](https://pricepertoken.com/mcp)** An MCP server that exposes real-time LLM pricing and benchmark data for use by AI coding assistants.
- **[twitterapi.io](https://twitterapi.io)** kaitoInfra/twitterapi-io-mcp-server : Hosted MCP server for twitterapi.io — Twitter/X data API for AI agents. 12 read-only tools: tweet search with full operators, profiles, threads, real-time WebSocket streaming. Hosted endpoint at mcp.twitterapi.io/mcp, npm @kaitoinfra/twitterapi-io-mcp-server.

</details>

## AI & Model Services

- **[modelcontextprotocol](https://github.com/perplexityai/modelcontextprotocol)** `⭐ 2.5k` `updated ≤180d` The official MCP server implementation for the Perplexity API Platform, exposing Sonar models and search capabilities as tools for AI assistants. <details><summary>More about</summary>

  It gives coding agents and IDEs a standardized way to delegate real-time web search, deep research, and advanced reasoning to Perplexity models via the Model Context Protocol.

  _Another officially blessed MCP server, ensuring your agent can now hallucinate with the confidence of a search engine instead of just its training data._

  `mcp` `perplexity` `search` `api` `integration`
  </details>
- **[jau123/MeiGen-AI-Design-MCP](https://github.com/jau123/meigen-ai-design-mcp)** `⭐ 1.8k` `updated ≤180d` An MCP server that turns Claude Code/OpenClaw into a design assistant for image generation, with support for GPT Image 2, Seedance, ComfyUI, and a 1,400+ prompt library. <details><summary>More about</summary>

  Lets developers generate and orchestrate complex design tasks directly from their coding environment using AI image models.

  _Now your code editor can also argue with you about the aesthetic of your product photos._

  `mcp-server` `image-generation` `design-assistant` `prompt-engineering` `claude-code`
  </details>
- **[qdrant/mcp-server-qdrant](https://github.com/qdrant/mcp-server-qdrant)** `⭐ 1.5k` `updated ≤90d` An official MCP server implementation that exposes Qdrant vector search as a semantic memory store for LLM applications like Claude and Cursor. <details><summary>More about</summary>

  It gives coding assistants a standardized way to persist and retrieve long-term semantic memories without bespoke vector-database glue code.

  _You can now reliably offload your project context into a vector database, right next to your own rapidly degrading short-term memory._

  `mcp` `vector-search` `semantic-memory` `qdrant` `context`
  </details>
- **[jkudish/jev-mcp](https://github.com/jkudish/jev-mcp)** `⭐ 482` jev-mcp (jkudish) (post) - Proof of concept MCP for Typesafe's new Jev AI model.
- **[ImageSorcery MCP](https://github.com/sunriseapps/imagesorcery-mcp)** `⭐ 332` `updated ≤180d` An MCP server providing AI assistants with local image processing capabilities including cropping, resizing, object detection, OCR, and background removal using OpenCV and Ultralytics models. <details><summary>More about</summary>

  It lets coding agents handle image manipulation tasks locally without sending visual data to external APIs, bridging the gap between code assistants and computer vision workflows.

  _Finally, your coding agent can crop photos and detect pets while you wonder why you're debugging an MCP server instead of using Photoshop like a normal human._

  `mcp` `image-processing` `computer-vision` `local-ai` `opencv`
  </details>
- **[consult7](https://github.com/szeider/consult7)** `⭐ 296` `updated ≤90d` An MCP server that lets AI agents offload large file collections to OpenRouter models with up to 2M token context windows for codebase analysis. <details><summary>More about</summary>

  It extends any MCP-compatible coding agent with the ability to consult massive contexts and specialized models without blowing the agent's own context limit.

  _We have reached the point where your AI agent needs a second AI agent just to remember what your codebase looks like, and we are calling this progress._

  `mcp` `context-window` `openrouter` `codebase-analysis`
  </details>
- **[zilliztech/mcp-server-milvus](https://github.com/zilliztech/mcp-server-milvus)** `⭐ 244` `updated ≤90d` Model Context Protocol Servers for Milvus.
- **[0xshellming/mcp-summarizer](https://github.com/0xshellming/mcp-summarizer)** `⭐ 167` `updated >1y` An MCP server that uses Google's Gemini 1.5 Pro to generate summaries for text, web pages, PDFs, and EPUBs. <details><summary>More about</summary>

  It enables AI coding assistants to consume long-form documentation and books through standardized summarization tools.

  _Because reading long documentation was too hard, now your LLM can just summarize the chaos for you._

  `mcp` `summarization` `gemini` `productivity` `content-processing`
  </details>
- **[any-chat-completions-mcp](https://github.com/pyroprompts/any-chat-completions-mcp)** `⭐ 165` `updated >1y` A TypeScript MCP server that exposes any OpenAI SDK-compatible chat completions API (OpenAI, Perplexity, Groq, xAI, etc.) as a tool for Claude Desktop and LibreChat. <details><summary>More about</summary>

  Developers can augment their primary MCP-compatible assistant with access to alternative models and specialized providers without waiting for official integrations.

  _We have reached the point where the flagship AI assistant needs a protocol adapter just to ask a different AI assistant a question._

  `mcp` `llm-bridge` `claude-desktop` `librechat` `typescript`
  </details>
- **[weaviate/mcp-server-weaviate](https://github.com/weaviate/mcp-server-weaviate)** `⭐ 162` `updated ≤180d` MCP (Model Context Protocol) server for Weaviate vector database. <details><summary>More about</summary>

  Enables AI assistants to query and insert data in Weaviate via a standardized MCP interface.

  _Another MCP server to add to the growing list of protocol adapters that promise seamless context but deliver yet another YAML file to configure._

  `mcp` `vector-db` `weaviate`
  </details>
- **[mureka-mcp](https://github.com/skyworkai/mureka-mcp)** `⭐ 117` `updated >1y` An official MCP server that exposes Mureka's lyrics, song, and background music generation APIs to MCP-compatible clients like Claude Desktop and OpenAI Agents SDK. <details><summary>More about</summary>

  It lets developers integrate music and lyric generation directly into AI-assisted workflows without building custom API wrappers.

  _We have finally solved the critical shortage of AI agents that can compose a coffee-shop lo-fi track while your actual codebase remains untouched._

  `mcp` `music-generation` `api-wrapper` `openai-agents`
  </details>
- **[vectorize-mcp-server](https://github.com/vectorize-io/vectorize-mcp-server)** `⭐ 115` `updated ≤180d` Official Vectorize MCP Server providing vector retrieval, text extraction, and deep research capabilities via the Model Context Protocol. <details><summary>More about</summary>

  Lets developers connect AI assistants to their Vectorize-powered knowledge bases for grounded retrieval and document processing without leaving their MCP-enabled tools.

  _Another MCP server promising seamless context while you juggle three different vector DB credentials just to ask about your company's financial health._

  `mcp` `vector-database` `retrieval`
  </details>
- **[SureScaleAI/openai-gpt-image-mcp](https://github.com/surescaleai/openai-gpt-image-mcp)** `⭐ 114` `updated >1y` An MCP server that exposes OpenAI's GPT Image and GPT-4o image generation and editing APIs to compatible clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It allows coding assistants to generate, edit, and composite images directly within the development workflow without switching to external web UIs.

  _We have successfully abstracted the act of asking a robot to draw a picture into a JSON configuration block that lives inside our IDE._

  `mcp` `openai` `image-generation` `tool-server`
  </details>
- **[ChronulusAI/chronulus-mcp](https://github.com/chronulusai/chronulus-mcp)** `⭐ 113` `updated >1y` MCP server that exposes Chronulus AI forecasting and prediction agents to Claude via the Model Context Protocol. <details><summary>More about</summary>

  Lets developers query Chronulus AI’s forecasting models directly from Claude’s context, turning time-series predictions into a first-class tool in their coding workflow.

  _Now your AI assistant can predict the future of your codebase—whether it will ever compile is still uncertain._

  `mcp-server` `forecasting` `time-series` `claude-integration`
  </details>
- **[dino-x-mcp](https://github.com/idea-research/dino-x-mcp)** `⭐ 112` `updated ≤180d` An official MCP server that provides real-world visual perception capabilities (object detection, localization, captioning) to LLMs via the DINO-X and Grounding DINO models. <details><summary>More about</summary>

  Developers can integrate fine-grained image understanding into MCP-compatible workflows, enabling agents to reason about visual data in structured ways.

  _Now your coding agent can finally tell you why that button is 3 pixels off-center in the screenshot._

  `mcp-server` `computer-vision` `visual-perception` `object-detection` `multimodal`
  </details>
- **[octagon-deep-research-mcp](https://github.com/octagonai/octagon-deep-research-mcp)** `⭐ 93` `updated ≤1y` An MCP server that connects Claude Desktop, Cursor, and other MCP clients to Octagon AI's enterprise deep research agents for unlimited, high-speed web research and report generation. <details><summary>More about</summary>

  Developers can embed comprehensive, cross-verified research capabilities directly into their AI coding workflows without hitting rate limits or leaving their editor.

  _We have successfully abstracted the act of reading the internet into a paid API call, so you can now procrastinate on architecture decisions with 8x the speed and 3x the sources._

  `mcp` `deep-research` `octagon` `context-tools`
  </details>
- **[multi-ai-advisor-mcp](https://github.com/yuchenssr/multi-ai-advisor-mcp)** `⭐ 88` `updated >1y` Multi-Model Advisor is an MCP server that queries multiple Ollama models and combines their responses via Claude for Desktop. <details><summary>More about</summary>

  It lets developers get synthesized, multi-perspective AI answers by orchestrating local LLMs through a standardized protocol.

  _Another layer to debug when your AI council disagrees and you're left synthesizing the synthesizers._

  `mcp` `ollama` `claude-desktop` `local-ai` `ai-advisor`
  </details>
- **[GenWaveLLC/svgmaker-mcp](https://github.com/genwavellc/svgmaker-mcp)** `⭐ 87` `updated ≤90d` An MCP server that enables AI assistants to generate, edit, and convert SVG images via the SVGMaker API. <details><summary>More about</summary>

  It provides LLMs with a direct capability to handle vector graphics, allowing for seamless visual asset generation within conversational workflows like Claude Desktop or Cursor.

  _Because explaining SVG paths to a chatbot was hard enough, now you can just watch it hallucinate a minimalist mountain range in real-time._

  `mcp` `svg` `asset-generation` `vector-graphics`
  </details>
- **[mcp-server-openai](https://github.com/pierrebrunelle/mcp-server-openai)** `⭐ 84` `updated >1y` A Model Context Protocol server that lets Claude Desktop query OpenAI models directly within the MCP workflow. <details><summary>More about</summary>

  Developers can mix model providers in one assistant session, comparing outputs or using OpenAI-only APIs without leaving Claude.

  _Now your Claude can hallucinate with help from its friend GPT, doubling the API bills while you debug which model confidently lied to you._

  `mcp` `openai` `claude` `integration`
  </details>
- **[piapi-mcp-server](https://github.com/apinetwork/piapi-mcp-server)** `⭐ 75` `updated ≤30d` A TypeScript MCP server that integrates PiAPI's API to enable media content generation (images, videos, music, 3D models) from MCP-compatible apps like Claude. <details><summary>More about</summary>

  Lets developers trigger Midjourney, Flux, Kling, LumaLabs, Udio, and other generative media APIs directly from their coding workflow via MCP.

  _Now your coding agent can spin up a 3D model while you’re debugging a race condition, because why not._

  `mcp-server` `generative-media` `typescript` `piapi` `claude-integration`
  </details>
- **[hamflx/imagen3-mcp](https://github.com/hamflx/imagen3-mcp)** `⭐ 71` `updated >1y` An MCP server that provides image generation capabilities using Google's Imagen 3.0 via the Model Context Protocol. <details><summary>More about</summary>

  Developers can integrate Imagen 3.0's image generation into MCP-compatible workflows, enabling AI assistants to generate images programmatically.

  _Now your coding agent can generate images of running dogs while you debug, because why not._

  `mcp` `image-generation` `google-imagen` `mcp-server`
  </details>
- **[tomohiro-owada/devrag](https://github.com/tomohiro-owada/devrag)** `⭐ 64` `updated ≤180d` A local MCP server that indexes markdown files into a vector database using multilingual-e5-small embeddings to provide semantic search capabilities for Claude Code. <details><summary>More about</summary>

  It reduces token consumption by ~40x and speeds up documentation lookups by retrieving only relevant chunks instead of forcing Claude Code to read entire files.

  _We have officially reached the point where we need a RAG system to manage the documentation required to use our AI coding assistant efficiently._

  `mcp` `rag` `vector-search` `claude-code` `local-ai`
  </details>
- **[fal-mcp-server](https://github.com/luminarylane/fal-mcp-server)** `⭐ 57` `updated ≤180d` An MCP server that exposes Fal.ai media generation models (image, video, music) to Claude Desktop and other MCP clients. <details><summary>More about</summary>

  It lets developers invoke Fal.ai's generative media APIs through natural language in MCP-enabled assistants like Claude, reducing context-switching for creative workflows.

  _Finally, a way to ask your AI assistant to make a meme video without leaving the chat—because switching tabs was the real bottleneck._

  `claude` `fal-ai` `image-generation` `mcp` `media-generation` `server` `video-generation`
  </details>
- **[runapi-ai/mcp](https://github.com/runapi-ai/mcp)** `⭐ 56` runapi-ai/mcp : Exposes RunAPI model generation APIs to MCP-compatible agents.
- **[merterbak/Grok-MCP](https://github.com/merterbak/grok-mcp)** `⭐ 52` `updated ≤90d` MCP server for xAI's Grok API providing web/X search, vision, image/video generation, and file support. <details><summary>More about</summary>

  Lets developers access Grok's multimodal capabilities through the Model Context Protocol, enabling agentic tooling within Claude Desktop or Code.

  _Another MCP server that turns every AI feature into a separate tool call, because why use one model when you can orchestrate ten?_

  `mcp` `grok` `xai` `agentic-tools`
  </details>
- **[rafsilva85/credit-optimizer-v5](https://github.com/rafsilva85/credit-optimizer-v5)** `⭐ 51` `updated ≤180d` A Manus AI cost-optimization toolkit that routes prompts to cheaper models, uses faster web scraping, and compresses context to reduce credit usage. <details><summary>More about</summary>

  It claims to automate model routing, chat-mode detection, and context hygiene to save roughly 47% on Manus credits without degrading output quality.

  _We have officially entered the era of buying a $12 skill bundle to optimize the credits we burn inside an AI agent that is already replacing our job._

  `manus-ai` `cost-optimization` `mcp` `credit-optimizer` `prompt-routing`
  </details>
- **[IvanAmador/vercel-ai-docs-mcp](https://github.com/ivanamador/vercel-ai-docs-mcp)** `⭐ 50` `updated >1y` An MCP server that enables AI-powered search and querying of the Vercel AI SDK documentation. <details><summary>More about</summary>

  Developers can ask natural language questions about the Vercel AI SDK and receive contextualized answers directly from the official docs.

  _Now you can ask an AI about an AI SDK’s docs while using an AI assistant—meta enough for you?_

  `mcp` `vercel-ai-sdk` `documentation-search` `typescript` `gemini`
  </details>
- **[OHNLP/omop_mcp](https://github.com/ohnlp/omop_mcp)** `⭐ 41` `updated ≤180d` An MCP server that maps free-text clinical terminology to standardized OMOP Common Data Model concepts using LLMs and the OMOPHub vocabulary API. <details><summary>More about</summary>

  It gives clinical developers a plug-and-play MCP interface to standardize medical terms directly inside their existing AI coding assistants.

  _Now your LLM can bill your hospital for miscoding 'temperature temporal scanner' into an OMOP concept while you debug the MCP config file._

  `mcp` `healthcare` `clinical` `omop` `terminology`
  </details>
- **[local_faiss_mcp](https://github.com/nonatofabio/local_faiss_mcp)** `⭐ 34` `updated ≤180d` A local MCP server that wraps FAISS to provide private, on-device vector storage and semantic search for RAG workflows in Claude, Copilot, and other MCP-compatible agents. <details><summary>More about</summary>

  It lets developers give coding agents persistent, local memory without shipping docs to a third-party vector DB.

  _You can now index every half-written README on your laptop and politely ask your agent to hallucinate from a curated, offline pile of your own making._

  `mcp` `faiss` `rag` `local-ai` `vector-search`
  </details>
- **[gemsuite-mcp](https://github.com/pv-bhat/gemsuite-mcp)** `⭐ 30` `updated >1y` An MCP server that integrates the Gemini API into Claude and other MCP-compatible hosts with intelligent model selection and file handling. <details><summary>More about</summary>

  Developers can offload specific tasks to Gemini models directly from their existing assistant workflows without switching contexts or managing separate API calls.

  _We have now reached the point where our AI assistants need their own AI assistants from different vendors to feel complete._

  `mcp` `gemini` `claude-integration` `model-selection`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+62 more in AI & Model Services &nbsp;—&nbsp; click to expand</strong></summary>

- **[gwbischof/outsource-mcp](https://github.com/gwbischof/outsource-mcp)** `⭐ 30` `updated >1y` An MCP server that lets AI assistants delegate tasks to 20+ model providers via a unified interface.
- **[arikusi/nakkas](https://github.com/arikusi/nakkas)** `⭐ 24` `updated ≤90d` MCP server that enables AI to generate animated SVG graphics from natural language prompts.
- **[creatify-mcp](https://github.com/tsavo/creatify-mcp)** `⭐ 23` `updated >1y` An MCP server that exposes Creatify AI's video generation capabilities to AI assistants and automation platforms.
- **[Nexus](https://github.com/adawalli/nexus)** `⭐ 23` `updated ≤90d` An MCP server that integrates OpenRouter to provide AI-powered search capabilities via models like Perplexity Sonar and Grok.
- **[User Prompt MCP](https://github.com/nazar256/user-prompt-mcp)** `⭐ 21` `updated >1y` A Model Context Protocol (MCP) server for Cursor that allows the AI to request additional user input during generation without ending the generation process.
- **[arikusi/deepseek-mcp-server](https://github.com/arikusi/deepseek-mcp-server)** `⭐ 20` `updated ≤30d` MCP server for DeepSeek V4 models enabling chat, reasoning, function calling, thinking mode, and cost tracking in MCP-compatible clients.
- **[MohamedAbdallah-14/prompt-to-asset](https://github.com/mohamedabdallah-14/prompt-to-asset)** `⭐ 20` MohamedAbdallah-14/prompt-to-asset : MCP server that generates production-ready visual assets (app icons, favicons, OG images, logos, wordmarks) by routing each request across 30+ image generation models. Zero API key for first run via free-tier providers.
- **[Citedy/citedy-seo-agent](https://github.com/citedy/citedy-seo-agent)** `⭐ 19` `updated ≤180d` An AI-powered SEO content automation agent skill for trend scouting, competitor analysis, multilingual article generation, and social media adaptations.
- **[JamesANZ/cross-llm-mcp](https://github.com/jamesanz/cross-llm-mcp)** `⭐ 16` `updated ≤180d` An MCP server that provides unified access to multiple LLM APIs (ChatGPT, Claude, Gemini, Mistral, etc.) with smart model selection and prompt logging.
- **[Continuum-AI-Corp/orcarouter-mcp-server](https://github.com/continuum-ai-corp/orcarouter-mcp-server)** `⭐ 13` `updated ≤180d` An MCP server that enables Model Context Protocol clients to browse the OrcaRouter model catalog and execute chat completions.
- **[mattjoyce/mcp-persona-sessions](https://github.com/mattjoyce/mcp-persona-sessions)** `⭐ 12` `updated ≤1y` MCP server that enables AI assistants to conduct structured, persona-driven sessions for interview practice, personal reflection, and guided conversations.
- **[reexpress_mcp_server](https://github.com/reexpressai/reexpress_mcp_server)** `⭐ 9` `updated ≤180d` An MCP server that adds statistical uncertainty verification to LLM workflows by ensembling multiple models and calculating confidence estimates against a calibration dataset.
- **[tasopen/mcp-alphabanana](https://github.com/tasopen/mcp-alphabanana)** `⭐ 9` `updated ≤90d` A local MCP server that generates image assets using Google Gemini AI with support for transparency, resizing, and multi-image style guidance.
- **[winston-ai-mcp-server](https://github.com/gowinston-ai/winston-ai-mcp-server)** `⭐ 9` `updated ≤30d` MCP server providing Winston AI's AI detection, plagiarism detection, and text comparison capabilities via the Model Context Protocol.
- **[magichourhq/magic-hour-mcp](https://github.com/magichourhq/magic-hour-mcp)** `⭐ 8` magichourhq/magic-hour-mcp : Official hosted MCP server for Magic Hour, providing AI video, image, and audio generation and editing tools.
- **[codex-curator/studiomcphub](https://github.com/codex-curator/studiomcphub)** `⭐ 7` `updated ≤30d` An MCP server providing 32 creative AI tools (18 free) for image generation, upscaling, provenance, and art dataset access, with pay-per-call pricing via x402/Stripe/GCX.
- **[metavolve-labs/studiomcphub](https://github.com/metavolve-labs/studiomcphub)** `⭐ 7` codex-curator/studiomcphub ☁️ - Creative AI tools: image generation, upscaling, background removal, product mockups, CMYK conversion, print-ready PDFs, SVG vectorization and watermarking.
- **[nanobananamcp](https://github.com/acedatacloud/nanobananamcp)** `⭐ 7` `updated ≤30d` An MCP server that enables AI models to generate and edit images using Google's Nano Banana model via the AceDataCloud API.
- **[ssembleinc/ssemble-mcp-server](https://github.com/ssembleinc/ssemble-mcp-server)** `⭐ 7` ssembleinc/ssemble-mcp-server : Creates AI-generated short-form video clips from YouTube with captions, music, gameplay overlays, meme hooks, and viral scoring. 9 tools, 3 resources, 2 prompts.
- **[j-east/pixel-surgeon-mcp](https://github.com/j-east/pixel-surgeon-mcp)** `⭐ 5` `updated ≤180d` MCP server for AI image and video generation, editing, and targeted region repair.
- **[KashiwaByte/vikingdb-mcp-server](https://github.com/kashiwabyte/vikingdb-mcp-server)** `⭐ 5` `updated >1y` An MCP server that enables store and search operations for VikingDB, a high-performance vector database by ByteDance.
- **[unifai-mcp-server](https://github.com/unifai-network/unifai-mcp-server)** `⭐ 5` `updated >1y` UnifAI MCP Server is a Model Context Protocol server exposing UnifAI SDK tools to MCP clients.
- **[Vovala14/vynly-mcp](https://github.com/vovala14/vynly-mcp)** `⭐ 5` Vovala14/vynly-mcp : Post AI-generated images and short video to Vynly, an AI-only social network with provenance verification (C2PA/SynthID). Free demo token, no signup.
- **[ShipItAndPray/mcp-turboquant](https://github.com/shipitandpray/mcp-turboquant)** `⭐ 4` `updated ≤180d` An MCP server that allows LLMs to compress HuggingFace models into GGUF, GPTQ, or AWQ formats via a single tool call.
- **[ChrisGVE/workspace-qdrant-mcp](https://github.com/chrisgve/workspace-qdrant-mcp)** `⭐ 3` `updated ≤30d` Project-aware vector database for AI assistants with hybrid semantic and keyword search, built on Qdrant, offering MCP server, CLI, and daemon for code intelligence and retrieval.
- **[fluxmcp](https://github.com/acedatacloud/fluxmcp)** `⭐ 3` `updated ≤90d` An MCP server that provides image generation and editing capabilities using Flux models via the Ace Data Cloud platform.
- **[JuhongPark/mcp-server-pronunciation](https://github.com/juhongpark/mcp-server-pronunciation)** `⭐ 3` `updated ≤180d` A local MCP server that provides English pronunciation, grammar, and fluency feedback during voice interactions with MCP-enabled assistants.
- **[Michael-WhiteCapData/ollama-handoff](https://github.com/michael-whitecapdata/ollama-handoff)** `⭐ 3` `updated ≤180d` MCP server that offloads cheap LLM tasks like summarization and code review to a local Ollama model via purpose-built tools with baked-in system prompts.
- **[seedreammcp](https://github.com/acedatacloud/seedreammcp)** `⭐ 3` `updated ≤30d` An MCP server that enables image generation and editing using ByteDance's Seedream models via the AceDataCloud API.
- **[VrtxOmega/Ollama-Omega](https://github.com/vrtxomega/ollama-omega)** `⭐ 3` `updated ≤180d` ollama-omega is an MCP server that bridges Ollama's local and cloud models into MCP-compatible IDEs and agents using stdio transport.
- **[AIDataNordic/alexandria-mcp](https://github.com/aidatanordic/alexandria-mcp)** `⭐ 2` `updated ≤180d` An MCP server providing semantic search over a collection of 20,000 classical philosophy and humanities works.
- **[alichherawalla/video-overlay-kit](https://github.com/alichherawalla/video-overlay-kit)** `⭐ 2` `updated ≤180d` Make b-roll for your videos. Tell an agent what you want, get an MP4 back. Free local MCP server that drives Remotion.
- **[Daichi-Kudo/llm-advisor-mcp](https://github.com/daichi-kudo/llm-advisor-mcp)** `⭐ 2` `updated ≤180d` An MCP server that provides real-time LLM/VLM pricing, benchmarks, and recommendations to AI assistants.
- **[doctorm333/promptpilot-mcp-server](https://github.com/doctorm333/promptpilot-mcp-server)** `⭐ 2` `updated ≤30d` MCP server for PromptPilot.club that enables image, video, and audio generation via Pollinations API in MCP-compatible AI agents.
- **[gpu-bridge/mcp-server](https://github.com/gpu-bridge/mcp-server)** `⭐ 2` `updated ≤1y` GPU-Bridge MCP Server provides 30 AI services as Model Context Protocol tools for autonomous agents.
- **[Osseni94/keyneg-mcp](https://github.com/osseni94/keyneg-mcp)** `⭐ 2` `updated ≤1y` An MCP server that provides local, Rust-powered sentiment analysis and keyword extraction tools for AI assistants like Claude and ChatGPT.
- **[squad-mcp](https://github.com/the-basilisk-ai/squad-mcp)** `⭐ 2` `updated ≤90d` A remote MCP server that exposes Squad's AI-powered product discovery and strategy platform as tools for Claude, ChatGPT, and other MCP-compatible assistants.
- **[unixlamadev-spec/lightningprox-mcp](https://github.com/unixlamadev-spec/lightningprox-mcp)** `⭐ 2` `updated ≤1y` MCP server for LightningProx, a Bitcoin Lightning-based pay-per-request AI gateway supporting multimodal models.
- **[Wooonster/hocr_mcp_server](https://github.com/wooonster/hocr_mcp_server)** `⭐ 2` `updated >1y` HOCR MCP Server is a minimal MCP server implementation that exposes OCR capabilities via the Model Context Protocol.
- **[benbencodes/llm-prices](https://github.com/benbencodes/llm-prices)** `⭐ 1` `updated ≤180d` Zero-dependency Python CLI + MCP server for comparing LLM API costs across 144 models and 22 providers (OpenAI, Anthropic, Google, Mistral, xAI, DeepSeek, Groq...).
- **[bridgenode-ai/bridgenode-mcp](https://github.com/bridgenode-ai/bridgenode-mcp)** `⭐ 1` `updated ≤30d` An MCP server that provides pay-per-request AI inference using the x402 protocol and Solana USDC.
- **[CapMonsterCloud/capmonster-mcp-captcha-solver](https://github.com/capmonstercloud/capmonster-mcp-captcha-solver)** `⭐ 1` `updated ≤30d` Official CapMonster Cloud MCP server — AI captcha solver for reCAPTCHA v2/v3, Cloudflare Turnstile & DataDome. Let Claude, Cursor, and other AI agents solve captchas directly via MCP.
- **[ChevalGrand520/local-gpu-imagegen](https://github.com/chevalgrand520/local-gpu-imagegen)** `⭐ 1` `updated ≤30d` MCP-first control plane for supported ComfyUI workflows with cryptographic model identity, explicit approvals, durable evidence, and no silent downloads.
- **[edge-claw/mood-booster-agent](https://github.com/edge-claw/mood-booster-agent)** `⭐ 1` `updated ≤1y` An ERC-8004 registered AI agent that delivers uplifting messages via the MCP protocol, with on-chain discovery, tipping, and reputation feedback.
- **[forgemeshlabs/imagegen-mcp](https://github.com/forgemeshlabs/imagegen-mcp)** `⭐ 1` `updated ≤30d` An MCP server that enables AI assistants to generate images with varying levels of processing, including background removal and 4K upscaling, paid for via USDC on the Base network.
- **[UModeler/picoberry-mcp](https://github.com/umodeler/picoberry-mcp)** `⭐ 1` UModeler/picoberry-mcp ️ ☁️ - Generate 3D models and images from text or reference images, then remesh, retexture, auto-rig, animate and export GLB/FBX/OBJ via the PicoBerry API.
- **[avotsai/avots-mcp](https://github.com/avotsai/avots-mcp)** `⭐ 0` `updated ≤30d` An MCP server that provides AI assistants with access to Avots.ai's multi-modal suite, including image, video, audio, and chat models.
- **[bosslesss/inference-labs-mcp](https://github.com/bosslesss/inference-labs-mcp)** `⭐ 0` `updated ≤180d` Model Context Protocol (MCP) server for Inference Labs - adds vendor-neutral LLM routing, model comparison, and live LLM pricing to Claude Desktop, Cursor, Windsurf, and any MCP client.
- **[ericblair1903/nutrients-mcp](https://github.com/ericblair1903/nutrients-mcp)** `⭐ 0` `updated ≤90d` MCP server giving AI assistants food image & text nutrition analysis — calories, macros, vitamins, minerals, allergens. Powered by TastyAPI.
- **[estevecastells/llmpulse-mcp](https://github.com/estevecastells/llmpulse-mcp)** `⭐ 0` `updated ≤180d` AI search visibility (GEO/AEO) data over the Model Context Protocol: brand mentions, citations, share of voice and AI traffic across ChatGPT, Perplexity, Gemini and Google AI Overviews. Powered by LLM Pulse.
- **[Gliana-Labs/gliana-mcp](https://github.com/gliana-labs/gliana-mcp)** `⭐ 0` `updated ≤90d` A pay-per-call MCP server providing access to over 90 generative AI models, including image, video, music, and speech models.
- **[hedging8563/tokenlab-mcp-server](https://github.com/hedging8563/tokenlab-mcp-server)** `⭐ 0` `updated ≤90d` An OpenAPI-generated MCP server providing access to TokenLab's multimodal generative models and developer API.
- **[ntriq-gh/ntriq-agentshop](https://github.com/ntriq-gh/ntriq-agentshop)** `⭐ 0` `updated ≤180d` A pay-per-use API marketplace exposing local AI inference endpoints (document intelligence, code review, PII detection, etc.) via x402 micropayments in USDC on Base.
- **[puspoaditya/cloudflare-workers-ai-mcp](https://github.com/puspoaditya/cloudflare-workers-ai-mcp)** `⭐ 0` puspoaditya/cloudflare-workers-ai-mcp ☁️ - Cloudflare Workers AI inference: LLM chat completions (Llama, Qwen, DeepSeek), BGE text embeddings and Flux image generation.
- **[runcomfy-com/runcomfy-mcp](https://github.com/runcomfy-com/runcomfy-mcp)** `⭐ 0` runcomfy-com/runcomfy-mcp ️ ☁️ - Manage RunComfy ComfyUI serverless deployments, hosted model inference and LoRA training jobs.
- **[singhpratech/crimson-crab-mcp-template](https://github.com/singhpratech/crimson-crab-mcp-template)** `⭐ 0` singhpratech/crimson-crab-mcp-template - A ready-to-clone Rust MCP server that calls Anthropic's Claude API via the crimson-crab SDK. Exposes an ask_claude tool. MIT/Apache-2.0.
- **[speakai/speakai-mcp](https://github.com/speakai/speakai-mcp)** `⭐ 0` speakai/speakai-mcp : Official Speak AI server: transcribe, search, and analyze audio/video (100+ languages, speaker labels, call scoring on custom rubrics). npm @speakai/mcp-server, MIT.
- **[suvadadepolo-blip/codex-reset-mcp](https://github.com/suvadadepolo-blip/codex-reset-mcp)** `⭐ 0` suvadadepolo-blip/codex-reset-mcp : OpenAI Codex usage-limit reset data for coding agents: 24/48h reset forecast, verified reset record with source links, and Codex service status. Read-only hosted endpoint https://codex-reset.com/mcp (Streamable HTTP), no API key.
- **[vicseeai/vicsee-mcp-server](https://github.com/vicseeai/vicsee-mcp-server)** `⭐ 0` vicseeai/vicsee-mcp-server ☁️ - Generate, edit and upscale AI video and images (Seedance, Veo, Kling, FLUX, Nano Banana) via VicSee.
- **[yuluo688/gen-image-mcp](https://github.com/yuluo688/gen-image-mcp)** `⭐ 0` yuluo688/gen-image-mcp - Generate and edit images via your own OpenAI-compatible or Gemini image APIs and save them into the project directory, with optional model fallback.
- **[Magic Hour](https://magichour.ai)** magichourhq/magic-hour-mcp : Official hosted MCP server for Magic Hour, providing AI video, image, and audio generation and editing tools.
- **[Tldv](https://gitlab.com/tldv/tldv-mcp-server)** An MCP server that integrates tldv meeting recordings and transcripts into AI assistant workflows.

</details>

## Browser & Web Automation

- **[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)** `⭐ 37.8k` `updated ≤90d` Playwright MCP is a Model Context Protocol server that enables LLMs to automate browsers using Playwright's accessibility tree. <details><summary>More about</summary>

  It lets AI agents interact with web pages through structured data instead of screenshots, avoiding vision model dependencies.

  _Another MCP server to add to your growing list of tools that promise to make AI browsing less hallucinatory but just as slow._

  `mcp` `browser-automation` `playwright`
  </details>
- **[lightpanda-io/browser](https://github.com/lightpanda-io/browser)** `⭐ 35.8k` lightpanda-io/browser - Headless browser for AI and web automation with a built-in MCP server.
- **[feder-cr/invisible_playwright_mcp](https://github.com/feder-cr/invisible_playwright_mcp)** 🔥 `⭐ 31.8k` `updated ≤30d` Playwright MCP server undetected by anti-bots and captchas: AI agent browses the web on anti-detect stealth Firefox, Python, undetected browser automation, scraping, computer use.
- **[mcp-chrome](https://github.com/hangwin/mcp-chrome)** `⭐ 12.5k` `updated ≤1y` Chrome MCP Server is a Chrome extension-based Model Context Protocol (MCP) server that exposes Chrome browser functionality to AI assistants like Claude for automation and content analysis. <details><summary>More about</summary>

  It lets developers delegate browser automation, content extraction, and semantic search to AI assistants while reusing their existing Chrome sessions, login states, and configurations.

  _Now your AI can open 50 tabs of Stack Overflow answers just like you do, but with the confidence of a senior engineer who never closes them._

  `mcp` `browser-automation` `chrome-extension` `ai-integration` `local-first`
  </details>
- **[apify-mcp-server](https://github.com/apify/apify-mcp-server)** `⭐ 9.4k` `updated ≤30d` An MCP server that enables AI agents to use Apify's library of web scrapers, crawlers, and automation tools via the Model Context Protocol. <details><summary>More about</summary>

  Developers can integrate thousands of ready-made Apify Actors into their AI workflows to extract structured data from websites without writing custom scrapers.

  _Now your AI agent can spin up a Google Maps scraper between debugging sessions, because why should humans have all the fun of rate limits and CAPTCHAs._

  `mcp` `web-scraping` `automation` `data-extraction` `api-integration`
  </details>
- **[firecrawl/firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server)** `⭐ 7.5k` `updated ≤90d` An official MCP server implementation that enables LLM clients to perform web searching, scraping, and browser automation via Firecrawl. <details><summary>More about</summary>

  It bridges the gap between static LLM contexts and the live web, allowing agents to scrape structured data and interact with pages directly.

  _Nothing says "infinite context loop" quite like giving your coding agent the power to browse the entire internet while you watch helplessly._

  `mcp` `web-scraping` `browser-automation` `llm-tools` `firecrawl`
  </details>
- **[browsermcp/mcp](https://github.com/browsermcp/mcp)** `⭐ 7.2k` `updated >1y` Browser MCP is an MCP server and Chrome extension that enables AI applications to control and automate the user's existing browser. <details><summary>More about</summary>

  It lets developers use AI to perform browser-based tasks while preserving logged-in sessions and avoiding bot detection by leveraging the user's real browser profile.

  _Finally, an AI that can fill out your timesheet — just don’t let it near your banking tab._

  `browser-automation` `mcp` `ai-agent`
  </details>
- **[mcp-playwright](https://github.com/executeautomation/mcp-playwright)** `⭐ 5.7k` `updated ≤1y` A Model Context Protocol (MCP) server that enables LLMs to automate web browsers and APIs using Playwright. <details><summary>More about</summary>

  It allows AI assistants like Claude Desktop or Cursor to perform real-world browser actions, such as web scraping, testing, and device emulation, directly through the MCP protocol.

  _Now your LLM can experience the existential dread of a failing Playwright test in real-time._

  `mcp` `browser-automation` `playwright` `browser-control` `web-scraping`
  </details>
- **[LvcidPsyche/auto-browser](https://github.com/lvcidpsyche/auto-browser)** `⭐ 896` `updated ≤90d` Auto Browser is an open-source MCP-native browser agent providing MCP clients with a Playwright-based browser, human takeover, auth profiles, and local deployment. <details><summary>More about</summary>

  Gives AI agents reliable, authenticated browser access for workflows needing real web interaction, not just HTML fetching.

  _Finally, an agent that can log into your internal tools without you having to babysit the 2FA prompts every time._

  `mcp` `browser` `automation`
  </details>
- **[browser-use-mcp-server](https://github.com/kontext-security/browser-use-mcp-server)** `⭐ 847` `updated ≤180d` An MCP server that enables AI agents to control web browsers using the browser-use library. <details><summary>More about</summary>

  Lets developers give AI agents browser automation capabilities via MCP without building custom integrations.

  _Another layer in the MCP stack so your AI can finally click that 'I am not a robot' checkbox for you._

  `browser-automation` `mcp` `ai-agents`
  </details>
- **[Hyperbrowser](https://github.com/hyperbrowserai/mcp)** `⭐ 790` `updated ≤1y` An MCP server implementation for Hyperbrowser that provides web scraping, crawling, structured data extraction, and browser agent access. <details><summary>More about</summary>

  It gives developers MCP-based access to Hyperbrowser's web automation and data extraction capabilities, integrating with coding assistants like Cursor, Windsurf, and Claude Desktop.

  _Now your AI can browse the web for you, because apparently writing regex to parse HTML was the last straw._

  `mcp` `web-scraping` `browser-automation` `data-extraction` `hyperbrowser`
  </details>
- **[eyalzh/browser-control-mcp](https://github.com/eyalzh/browser-control-mcp)** `⭐ 327` `updated ≤90d` An MCP server and Firefox extension that allows AI assistants to manage tabs, search browsing history, and read webpage content. <details><summary>More about</summary>

  It bridges the gap between a coding assistant's context and the actual live web by allowing an agent to interact with your active browser session.

  _Nothing says 'peak developer productivity' quite like trusting a LLM to organize your 50 open research tabs into a color-coded group._

  `mcp` `browser-automation` `firefox` `ai-agent`
  </details>
- **[mcp-server-playwright](https://github.com/vikashloomba/mcp-server-playwright)** `⭐ 299` `updated >1y` MCP Server Playwright is a Model Context Protocol server that enables LLMs to automate web browsers via Playwright for tasks like navigation, screenshots, and JavaScript execution. <details><summary>More about</summary>

  It lets developers extend AI assistants with real browser automation, turning LLMs into agents that can interact with live web pages without leaving the chat interface.

  _Now your AI assistant can not only hallucinate answers but also click buttons and fill forms on your behalf, doubling the ways it can go wrong._

  `mcp` `browser-automation` `playwright`
  </details>
- **[achiya-automation/safari-mcp](https://github.com/achiya-automation/safari-mcp)** `⭐ 208` `updated ≤30d` A macOS-only MCP server that provides 97 tools for native Safari browser automation via AppleScript. <details><summary>More about</summary>

  It allows AI agents to use your existing, logged-in Safari sessions with significantly lower CPU overhead than Playwright or Chrome-based alternatives.

  _Now you can finally watch your AI agent browse the web using your own authenticated sessions while your laptop fan stays blissfully silent._

  `mcp` `browser-automation` `macos` `safari` `ai-agents`
  </details>
- **[blackwhite084/playwright-plus-python-mcp](https://github.com/blackwhite084/playwright-plus-python-mcp)** `⭐ 189` `updated >1y` playwright-plus-python-mcp is an MCP server exposing Playwright browser automation tools for integration with AI agents. <details><summary>More about</summary>

  It enables AI agents to perform web navigation, screenshots, and DOM interactions via standardized MCP tool calls, extending their browser automation capabilities.

  _Yet another MCP server wrapping a mature library—because the world clearly needed another way for AI to click buttons on web pages._

  `mcp` `browser-automation` `playwright`
  </details>
- **[agentql-mcp](https://github.com/tinyfish-io/agentql-mcp)** `⭐ 181` `updated ≤90d` An MCP server that exposes AgentQL's web data extraction and structured scraping capabilities to AI assistants like Claude, Cursor, and Windsurf. <details><summary>More about</summary>

  It allows coding agents and IDEs to reliably pull structured data from web pages without wrestling with brittle selectors or building custom scraping logic.

  _Another essential tool emerges just in time to help your agent confess it still can't reliably click 'Accept All Cookies' on its own._

  `mcp` `web-scraping` `agentql` `data-extraction` `ide-integration`
  </details>
- **[scrapeless-mcp-server](https://github.com/scrapeless-ai/scrapeless-mcp-server)** `⭐ 169` `updated >1y` An MCP server that gives LLMs and AI agents browser automation, SERP scraping, and dynamic web extraction capabilities via the Model Context Protocol. <details><summary>More about</summary>

  It lets coding assistants and agents bypass Cloudflare and scrape JavaScript-heavy pages without developers having to build custom web automation layers themselves.

  _Another MCP server, because apparently the only thing our agents are missing is the ability to get rate-limited by Google at machine speed._

  `mcp` `web-scraping` `browser-automation` `agent-tools`
  </details>
- **[just-every/mcp-read-website-fast](https://github.com/just-every/mcp-read-website-fast)** `⭐ 161` `updated ≤90d` An MCP server that quickly reads webpages and converts them to clean Markdown for token-efficient web scraping. <details><summary>More about</summary>

  Developers can fetch and process web content with minimal token usage, preserving links and structure for AI agent workflows.

  _Because nothing says 'modern development' like teaching your AI assistant to politely obey robots.txt while it hoovers up the internet._

  `mcp-server` `web-scraping` `markdown` `token-efficiency` `crawling`
  </details>
- **[just-every/mcp-screenshot-website-fast](https://github.com/just-every/mcp-screenshot-website-fast)** `⭐ 110` `updated ≤90d` An MCP server that captures web page screenshots and tiles them into LLM-friendly 1072x1072 chunks. <details><summary>More about</summary>

  Enables AI workflows to process full web pages as visual context without hitting model input size or resolution limits.

  _Now your AI can finally read that 10,000-word blog post you didn’t, but only in 1.15-megapixel chunks._

  `mcp-server` `screenshot` `vision` `web-scraping` `llm-context`
  </details>
- **[oxylabs-mcp](https://github.com/oxylabs/oxylabs-mcp)** `⭐ 105` `updated ≤180d` An official MCP server that exposes Oxylabs' web scraping, AI-powered crawling, and search APIs as tools for AI models and coding assistants. <details><summary>More about</summary>

  It lets coding agents reliably scrape JavaScript-heavy pages, bypass anti-bot measures, and extract structured web data without wiring custom scraping logic.

  _Now your agent can burn your Oxylabs credits to scrape a site that was already in the training data, but at least the MCP server is freshly pushed and officially supported._

  `mcp` `scraping` `web-data` `ai-studio` `official-server`
  </details>
- **[chaitin/baizhi-agent-toolkit](https://github.com/chaitin/baizhi-agent-toolkit)** `⭐ 100` `updated ≤30d` chaitin/baizhi-agent-toolkit : Hosted web search, page retrieval, and structured extraction over Streamable HTTP; requires your own Bearer key, may incur charges, and publishes configs and docs rather than backend source.
- **[debugg-ai-mcp](https://github.com/debugg-ai/debugg-ai-mcp)** `⭐ 68` `updated ≤90d` An MCP server that provides AI-powered browser testing for end-to-end workflows, enabling natural language test descriptions against web apps. <details><summary>More about</summary>

  Developers can describe test scenarios in plain language and get automated browser-based validation with screenshots, HAR traces, and console logs—useful for CI/CD or local validation.

  _Now you can offload writing Playwright tests to an AI, only to spend the same time debugging why the AI misclicked the wrong button._

  `mcp` `e2e-testing` `browser-automation` `ai-testing` `model-context-protocol`
  </details>
- **[swimmwatch/cloakbrowser-mcp](https://github.com/swimmwatch/cloakbrowser-mcp)** `⭐ 66` `updated ≤90d` ⚡ CloakBrowser MCP server for AI agents: Playwright-powered browsing, clean tool forwarding, Docker support, and multi-session HTTP transport.
- **[getrupt/ashra-mcp](https://github.com/getrupt/ashra-mcp)** `⭐ 62` `updated >1y` A Model Context Protocol server that exposes Ashra's browser automation capabilities to MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It allows developers to grant their local AI assistants the ability to automate web browsers via the Ashra API.

  _Yet another MCP adapter ensuring your AI can now confidently click 'Accept All Cookies' while you wonder why you needed three protocols to perform a single browser action._

  `mcp` `browser-automation` `ashra` `claude-desktop`
  </details>
- **[ndthanhdev/mcp-browser-kit](https://github.com/ndthanhdev/mcp-browser-kit)** `⭐ 55` `updated ≤90d` An MCP server combined with a browser extension that lets AI assistants control and interact with your local browsers via the Model Context Protocol. <details><summary>More about</summary>

  It gives coding agents and MCP clients direct access to browser automation without requiring developers to wire up separate Playwright or Selenium bridges.

  _Your AI can now star repositories and click through tabs on its own, which is either a massive productivity unlock or the opening scene of a very mundane sci-fi thriller._

  `mcp` `browser-automation` `extension` `local-ai`
  </details>
- **[ofershap/real-browser-mcp](https://github.com/ofershap/real-browser-mcp)** `⭐ 52` `updated ≤90d` MCP server + Chrome extension that gives AI agents control of your real browser with existing sessions and logins. <details><summary>More about</summary>

  Lets AI agents browse the web as you, using your logged-in state, enabling real-world task automation without re-authentication.

  _Finally, an AI that can log into your bank for you—what could possibly go wrong?_

  `mcp` `browser-automation` `chrome-extension`
  </details>
- **[Agent360dk/browser-mcp](https://github.com/agent360dk/browser-mcp)** `⭐ 50` `updated ≤30d` An MCP server that enables AI agents to control a real, logged-in Chrome instance to bypass headless browser limitations like 2FA and CAPTCHAs. <details><summary>More about</summary>

  It allows agents to interact with web services using existing authenticated sessions, solving the common failure point of automation at login walls.

  _Because nothing says 'seamless agentic workflow' like an AI that has to read your Gmail to bypass a 2FA prompt._

  `mcp` `browser-automation` `chrome` `local-ai` `agent-tools`
  </details>
- **[webdriverio/mcp](https://github.com/webdriverio/mcp)** `⭐ 39` `updated ≤90d` A Model Context Protocol (MCP) server that enables AI assistants to automate web browsers and mobile applications using WebDriverIO. <details><summary>More about</summary>

  Lets developers give AI assistants direct, unified control over browser and mobile test automation through a standardized MCP interface.

  _Finally, your AI assistant can flake on end-to-end tests just like you do._

  `mcp` `browser-automation` `webdriverio`
  </details>
- **[retio-pagemap](https://github.com/retio-ai/retio-pagemap)** `⭐ 36` `updated ≤180d` An MCP server that compresses web pages into structured, token-efficient maps so AI agents can read and interact with the browser at a fraction of typical context cost. <details><summary>More about</summary>

  It lets coding agents and MCP clients browse, click, and fill forms on real pages without blowing through context windows after two navigations.

  _We have finally invented a browser integration whose main job is to make sure the agent has enough tokens left to hallucinate the checkout flow._

  `mcp` `browser-automation` `context-compression` `agent-tooling`
  </details>
- **[ymw0407/auth-fetch-mcp](https://github.com/ymw0407/auth-fetch-mcp)** `⭐ 36` `updated ≤90d` MCP server that lets AI assistants fetch content from authenticated web pages by launching a local browser for manual login and returning cleaned HTML. <details><summary>More about</summary>

  Enables AI coding assistants to access login-protected documentation, internal tools, or staging sites without manual copy-paste or credential sharing.

  _Finally, a way for your AI to hit the same auth walls you do—just slower and with extra browser windows._

  `mcp` `browser-automation` `authenticated-fetch`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+72 more in Browser & Web Automation &nbsp;—&nbsp; click to expand</strong></summary>

- **[kimtth/mcp-aoai-web-browsing](https://github.com/kimtth/mcp-aoai-web-browsing)** `⭐ 35` `updated ≤90d` A minimal Model Context Protocol (MCP) server and client that enables web browser control via Playwright with Azure OpenAI and OpenAI integration.
- **[yinnho/aginxbrowser](https://github.com/yinnho/aginxbrowser)** `⭐ 35` yinnho/aginxbrowser - Chromium-free agent browser with built-in V8: tiered fetching, multi-engine search, screenshots, persistent login sessions and CDP access.
- **[BrowserClaw](https://github.com/goldenloaf24h/browserclaw)** `⭐ 30` `updated ≤30d` BrowserClaw - Control your everyday Chrome browser from AI agents, without losing logins or focus.
- **[olostep/olostep-mcp-server](https://github.com/olostep/olostep-mcp-server)** `⭐ 24` `updated ≤90d` An MCP server implementation that gives any MCP-compatible AI agent real-time web scraping, crawling, batch URL extraction, and search capabilities via the Olostep API.
- **[gologin-mcp](https://github.com/gologinapp/gologin-mcp)** `⭐ 22` `updated ≤180d` An MCP server that lets AI assistants manage GoLogin browser profiles and automation via natural language.
- **[sh6drack/zen-mcp](https://github.com/sh6drack/zen-mcp)** `⭐ 22` `updated ≤180d` The first MCP server for Zen Browser. 20 tools. No Selenium, no Playwright, just WebSocket.
- **[drisplabs/browser-mcp](https://github.com/drisplabs/browser-mcp)** `⭐ 18` `updated ≤90d` An MCP server that provides AI agents with semantic page snapshots and stable element IDs for reliable browser automation.
- **[SanggonBoy/PyreCrawl](https://github.com/sanggonboy/pyrecrawl)** `⭐ 18` SanggonBoy/PyreCrawl - Self-hosted web scraping: scrape, extract, crawl, map, search, academic papers, research and monitoring, with a tiered fallback including Cloudflare bypass.
- **[wd041216-bit/zero-api-key-web-search](https://github.com/wd041216-bit/zero-api-key-web-search)** `⭐ 18` Jev-powered search infrastructure for AI agents: zero API keys, MCP-ready, LLM-context aware, with local neural evidence verification.
- **[ilien-dev/svipall](https://github.com/ilien-dev/svipall)** `⭐ 17` ilien-dev/svipall - Local-first web reading escalating from HTTP to a real browser when blocked: clean Markdown, site crawls, search, row extraction and local CAPTCHA handling.
- **[protostatis/unbrowser](https://github.com/protostatis/unbrowser)** `⭐ 16` `updated ≤90d` Agent-native browser and MCP server for lightweight, Chrome-free web discovery, with explicit escalation to Unchained for browser-only flows.
- **[Mingye-Lu/AgenticCrawler](https://github.com/mingye-lu/agenticcrawler)** `⭐ 12` `updated ≤90d` acrawl is a single Rust binary LLM-powered web crawler that lets users describe goals in plain English to extract structured data using built-in MCP server and client capabilities.
- **[PhungXuanAnh/selenium-mcp-server](https://github.com/phungxuananh/selenium-mcp-server)** `⭐ 11` `updated ≤180d` A Model Context Protocol server that exposes Selenium WebDriver browser automation capabilities as tools for AI assistants.
- **[segentic-lab/periscope-mcp](https://github.com/segentic-lab/periscope-mcp)** `⭐ 10` `updated ≤90d` Web-app QA, testing & analysis for AI agents — 74 Playwright tools: authenticated flows (2FA/SSO), 25-action E2E workflows, hard assertions, session reports, and accessibility / SEO / GEO / Core-Web-Vitals + Lighthouse audits across a page or a full crawled site. Battle-tested by an AI agent on real apps.
- **[justadityaraj/amazon-in-mcp](https://github.com/justadityaraj/amazon-in-mcp)** `⭐ 9` `updated ≤90d` An MCP server that enables LLMs to search, inspect, and compare product details and pricing on Amazon.in via direct HTML scraping.
- **[lexmount/jev-browser-bridge](https://github.com/lexmount/jev-browser-bridge)** `⭐ 9` jev-browser-bridge - Plug any CDP browser into Jev—cloud, local, or self-hosted, including no-render engines. Project guide.
- **[aparajithn/agent-scraper-mcp](https://github.com/aparajithn/agent-scraper-mcp)** `⭐ 8` `updated ≤30d` An MCP server providing web scraping, screenshots, and structured content extraction for AI agents via MCP and REST API.
- **[dashi96/chromium-bridge](https://github.com/dashi96/chromium-bridge)** `⭐ 8` `updated ≤90d` An MCP bridge enabling Claude Code to automate Chromium-based browsers (Arc, Vivaldi, etc.) where the official extension fails, with a built-in chat panel.
- **[Pantheon-Security/chrome-mcp-secure](https://github.com/pantheon-security/chrome-mcp-secure)** `⭐ 8` `updated ≤1y` A security-hardened fork of Chrome MCP that gives AI agents compliant, audit-ready access to Google Chrome for browser automation with post-quantum encryption and SIEM integration.
- **[autokeren/ghostfox](https://github.com/autokeren/ghostfox)** `⭐ 7` `updated ≤30d` The agent-native stealth browser you can own — fingerprint-coherent Firefox engine + Rust MCP runtime. Self-hosted, open source, engine-level anti-detect.
- **[browserless/browserless-mcp](https://github.com/browserless/browserless-mcp)** `⭐ 7` `updated ≤30d` Official MCP server that exposes Browserless.io's smart scraper, search, and browser automation tools to LLM clients via the Model Context Protocol.
- **[copperline-labs/rendex-mcp](https://github.com/copperline-labs/rendex-mcp)** `⭐ 7` `updated ≤90d` MCP server for Rendex that enables AI agents to capture screenshots, generate PDFs, and render HTML to images of any webpage.
- **[Cubenest/rrweb-stack](https://github.com/cubenest/rrweb-stack)** `⭐ 7` `updated ≤90d` A recording substrate providing self-contained HTML test reports via tracelane and an MCP server via peek to expose browser sessions to AI agents.
- **[trueoriginlabs/vibatchium](https://github.com/trueoriginlabs/vibatchium)** `⭐ 7` trueoriginlabs/vibatchium - Self-hosted stealth Chrome automation via Patchright: parallel persistent profiles, encrypted credential vault with 2FA, and prompt-injection scanning.
- **[anycrawl-mcp-server](https://github.com/any4ai/anycrawl-mcp-server)** `⭐ 6` `updated ≤30d` An MCP server that provides web scraping, crawling, and SERP capabilities for LLM clients like Cursor and Claude.
- **[mcp-web-snapshot](https://github.com/gustavo-meilus/mcp-web-snapshot)** `⭐ 6` `updated >1y` An MCP server that captures structured website snapshots for LLM consumption using Playwright.
- **[ofershap/mcp-server-scraper](https://github.com/ofershap/mcp-server-scraper)** `⭐ 6` `updated ≤1y` An MCP server that uses Mozilla Readability to extract clean markdown, links, and metadata from URLs for AI assistants.
- **[AishwaryShrivastav/vibe-testing](https://github.com/aishwaryshrivastav/vibe-testing)** `⭐ 5` `updated ≤30d` Code-aware browser testing agent — 13 MCP tools for AI editors (Claude Code, Cursor, Windsurf). Reads your codebase, opens Playwright, tests everything, reports with screenshots.
- **[andresolbach/nodriver-mcp-server](https://github.com/andresolbach/nodriver-mcp-server)** `⭐ 5` `updated ≤90d` An MCP server that provides undetected browser automation by leveraging nodriver to bypass anti-bot protections like Cloudflare and hCaptcha.
- **[corralimited/snapdiff-mcp](https://github.com/corralimited/snapdiff-mcp)** `⭐ 5` `updated ≤30d` A standalone MCP server for SnapDiff that provides tools for visual regression testing and screenshot capture.
- **[frsorrentino/chrome-bridge](https://github.com/frsorrentino/chrome-bridge)** `⭐ 5` `updated ≤30d` Chrome Bridge by frsorrentino — your real, logged-in Chrome as an MCP server for Claude Code: 60 measured, token-efficient tools. ChromeOS included.
- **[hunglp97/tabpilot-mcp](https://github.com/hunglp97/tabpilot-mcp)** `⭐ 5` hunglp97/tabpilot-mcp - Drive your open, logged-in Chrome with token-budgeted page reading, complex SPA form and survey handling, and headless Ubuntu support.
- **[vdalhambra/siteaudit-mcp](https://github.com/vdalhambra/siteaudit-mcp)** `⭐ 5` vdalhambra/siteaudit-mcp : Full website audits in 11 tools — SEO score, Lighthouse performance, security headers, WCAG accessibility, Schema.org validation, and competitor site comparisons.
- **[Custodia-Admin/pagebolt-mcp](https://github.com/custodia-admin/pagebolt-mcp)** `⭐ 4` `updated ≤90d` An MCP server that enables AI agents to interact with PageBolt's API for screenshots, PDFs, OG images, and browser automation.
- **[aethynio/aethyn-browser-mcp](https://github.com/aethynio/aethyn-browser-mcp)** `⭐ 3` `updated ≤90d` An MCP server that provides AI agents with browser control via Playwright, utilizing steerable residential proxies for geo-specific tasks.
- **[site-shot/site-shot-mcp](https://github.com/site-shot/site-shot-mcp)** `⭐ 3` `updated ≤90d` Official Site-Shot MCP server — let Claude, Cursor, and other AI agents capture website screenshots: full-page, ad & cookie-banner removal, device emulation.
- **[hshintelligence/agent-scrape](https://github.com/hshintelligence/agent-scrape)** `⭐ 2` `updated ≤180d` Pay-per-call web scraping and structured data extraction service for AI agents, accessible via MCP or HTTP API using USDC.
- **[KuvopLLC/purroxy2](https://github.com/kuvopllc/purroxy2)** `⭐ 2` `updated ≤180d` A desktop app that records browser interactions as reusable capabilities for Claude via MCP, enabling secure automation of logged-in websites.
- **[MathiasPaulenko/wavexis-mcp](https://github.com/mathiaspaulenko/wavexis-mcp)** `⭐ 2` `updated ≤90d` MCP server for browser automation — 220 tools for Chrome, Edge & Firefox via CDP + BiDi. 13 capability tiers, stealth mode, Lighthouse audits. No Node.js, no Chromium download. 100% Python.
- **[parastejpal987-cmyk/opticparse-public](https://github.com/parastejpal987-cmyk/opticparse-public)** `⭐ 2` parastejpal987-cmyk/opticparse-public ☁️ - Visual, multimodal web scraping without CSS selectors, plus phishing and crypto drainer detection.
- **[snaprender-integrations](https://github.com/user0856/snaprender-integrations)** `⭐ 2` `updated ≤180d` SnapRender Integrations provides MCP servers, SDKs, and agent framework plugins for the SnapRender Screenshot API.
- **[awarselabs/awarse-mcp](https://github.com/awarselabs/awarse-mcp)** `⭐ 1` `updated ≤30d` A suite of MCP servers providing Playwright test self-healing and GitHub license management capabilities.
- **[junipr-labs/mcp-server](https://github.com/junipr-labs/mcp-server)** `⭐ 1` `updated ≤1y` MCP server that exposes Junipr's 75+ web intelligence tools (screenshots, PDFs, metadata extraction) to AI assistants.
- **[kopachlager/prerenderbuddy-mcp](https://github.com/kopachlager/prerenderbuddy-mcp)** `⭐ 1` kopachlager/prerenderbuddy-mcp : Crawling-readability diagnostics for public pages across crawler profiles, with commands and raw diff checks for bot visibility and discovery files (robots.txt, sitemap.xml, llms.txt).
- **[krw82/jev-playwright-mcp](https://github.com/krw82/jev-playwright-mcp)** `⭐ 1` jev-playwright-mcp - Jev-augmented Playwright MCP proxy — page-state triage, prompt-injection shielding, goal-based snapshot pruning, risky-action gating. Drop-in wrapper around @playwright/mcp for any coding agent.
- **[Lyosis/claudeForSafari](https://github.com/lyosis/claudeforsafari)** `⭐ 1` `updated ≤180d` An MCP server that lets Claude Desktop control Safari through a native macOS Safari extension and a local Node.js bridge.
- **[markmircea/Selenix-MCP-Server](https://github.com/markmircea/selenix-mcp-server)** `⭐ 1` `updated ≤1y` An MCP server that bridges Claude Desktop with the Selenix desktop app to create, run, debug, and manage browser automation tests using natural language.
- **[pioneer113/jev-chrome-mcp](https://github.com/pioneer113/jev-chrome-mcp)** `⭐ 1` jev-chrome-mcp - MCP adapter running the jev-browser-use click loop in Chrome for Cursor/Codex. Project guide.
- **[quokkapix/quokkapix-mcp](https://github.com/quokkapix/quokkapix-mcp)** `⭐ 1` `updated ≤90d` Private browser image workflows for AI agents via MCP.
- **[rog0x/mcp-seo-tools](https://github.com/rog0x/mcp-seo-tools)** `⭐ 1` rog0x/mcp-seo-tools : SEO analysis — meta tags, keywords, link checking, and sitemap generation.
- **[seleniumboot/selenium-mcp](https://github.com/seleniumboot/selenium-mcp)** `⭐ 1` `updated ≤90d` A Python MCP server that brings Selenium WebDriver automation to Claude and other AI assistants — with built-in code generation for Python (pytest), Java TestNG, and JUnit 5 test scripts.
- **[snapshot-site/snapshot-site-mcp](https://github.com/snapshot-site/snapshot-site-mcp)** `⭐ 1` snapshot-site/snapshot-site-mcp ☁️ - Capture any URL as PNG, JPEG, WebP, PDF or HTML, diff page versions to catch visual regressions, and get AI page summaries.
- **[SolveGate/solvegate-mcp](https://github.com/solvegate/solvegate-mcp)** `⭐ 1` SolveGate/solvegate-mcp ️ ☁️ - Detect and solve Cloudflare Turnstile challenges: inspect whether a page uses Turnstile or another CAPTCHA and get a solved token when needed.
- **[sylin-org/ghostlight](https://github.com/sylin-org/ghostlight)** `⭐ 1` sylin-org/ghostlight - Visible local browser automation in your signed-in Chromium profile, with recovery and optional policy and audit controls.
- **[teamsincetoday/recipe-commerce-mcp](https://github.com/teamsincetoday/recipe-commerce-mcp)** `⭐ 1` teamsincetoday/recipe-commerce-mcp : Extracts shoppable ingredients and affiliate product opportunities from recipe content. Cloudflare Workers, free tier (200 calls/day), $0.01/call paid tier.
- **[ami-guru/x402-scraper-engine](https://github.com/ami-guru/x402-scraper-engine)** `⭐ 0` `updated ≤30d` A pay-per-call web scraping and Llama-3 context compression engine powered by HTTP 402 micro-settlements on Base L2.
- **[dmytrome/groundhog](https://github.com/dmytrome/groundhog)** `⭐ 0` `updated ≤30d` A self-hosted MCP server that provides AI agents with stealth-patched Chrome capabilities for web search and research.
- **[kanto-labs/kanto-labs-mcp](https://github.com/kanto-labs/kanto-labs-mcp)** `⭐ 0` kanto-labs/kanto-labs-mcp : Website tech stack detection, SEO audits, domain WHOIS/DNS/SSL lookup, OCR and document-to-Markdown via Apify Actors, with a per-call spending cap.
- **[RapierCraft/alterlab-mcp-server](https://github.com/rapiercraft/alterlab-mcp-server)** `⭐ 0` RapierCraft/alterlab-mcp-server ☁️ - Web scraping, structured data extraction and screenshots with JavaScript rendering, residential proxy rotation and automatic retries.
- **[rog0x/mcp-web-tools](https://github.com/rog0x/mcp-web-tools)** `⭐ 0` rog0x/mcp-web-tools : Web scraping, content extraction, site monitoring, and search for AI agents.
- **[screenshotscout/screenshotscout-mcp](https://github.com/screenshotscout/screenshotscout-mcp)** `⭐ 0` screenshotscout/screenshotscout-mcp ☁️ - Capture web pages as images or PDFs with element targeting, device and viewport controls, location selection, page interactions and blocking options.
- **[teamsincetoday/newsletter-commerce-mcp](https://github.com/teamsincetoday/newsletter-commerce-mcp)** `⭐ 0` teamsincetoday/newsletter-commerce-mcp : Extracts affiliate products and sponsored content from newsletter issues. Cloudflare Workers, free tier (200 calls/day), $0.01/call paid tier.
- **[techyaditya/jev-browser-sidekick-mcp](https://github.com/techyaditya/jev-browser-sidekick-mcp)** `⭐ 0` jev-browser-sidekick-mcp - MCP server: plain-language browser steps; TypeSafe/OpenRouter Jev picks page controls while Playwright MCP shares the Chrome session. Project guide.
- **[Venut-Technologies/bandcamp-mcp](https://github.com/venut-technologies/bandcamp-mcp)** `⭐ 0` Venut-Technologies/bandcamp-mcp : Dig Bandcamp from an AI assistant without an account or API key: search artists, albums, labels and tracks, browse genre tags, and read tracklists and prices.
- **[WCAG-Compliance/wcagc-mcp](https://github.com/wcag-compliance/wcagc-mcp)** `⭐ 0` WCAG-Compliance/wcagc-mcp ️ ☁️ - Accessibility scanning with axe-core (WCAG 2.1 AA, EN 301 549, PDF/UA) via wcagc: scan URLs and PDFs, crawl sites, replay journeys and read violation trends.
- **[zumerlab/snapsurf](https://github.com/zumerlab/snapsurf)** `⭐ 0` zumerlab/snapsurf - Browser navigation and verification: compact semantic page digests, ranked text search, and typed diffs after each action with assertions.
- **[zzzjy765/ottersnap-mcp](https://github.com/zzzjy765/ottersnap-mcp)** `⭐ 0` zzzjy765/ottersnap-mcp ☁️ - Glint Render web rendering and evidence API: screenshots, PDFs, OG images, monitoring, extraction and tamper-evident evidence capture.
- **[agentfetch.dev](https://agentfetch.dev)** A web scraping and intelligence API that converts URLs into clean, token-optimized Markdown for AI agents.
- **[AnyCrawl](https://anycrawl.dev)** An enterprise-grade web scraping API that transforms any website into structured data optimized for LLMs.
- **[Hyperbrowser](https://hyperbrowser.ai)** Hyperbrowser is a cloud browser service designed for AI agents to interact with web content.
- **[scrnify](https://scrnify.com)** scrnify – Capture API for AI agents and developer automation to generate screenshots and videos of web pages.
- **[WebDataSource](https://webdatasource.com)** Web Data Source provides a pluggable web crawler with MCP server capabilities for integrating intranet and internet data into agentic AI workflows.

</details>

## Communication, Files & Productivity

- **[lharries/whatsapp-mcp](https://github.com/lharries/whatsapp-mcp)** `⭐ 6.4k` `updated >1y` WhatsApp MCP Server is a Model Context Protocol server that enables AI assistants to access personal WhatsApp messages and send messages via the WhatsApp web multi-device API. <details><summary>More about</summary>

  It lets developers integrate WhatsApp data and messaging capabilities directly into AI workflows, enabling context-aware automation and communication through natural language.

  _Finally, a way to make your AI feel even more intrusive by giving it unrestricted access to your family group chats and embarrassing voice notes._

  `mcp` `whatsapp` `ai-integration`
  </details>
- **[notion-mcp-server](https://github.com/makenotion/notion-mcp-server)** `⭐ 4.7k` `updated ≤90d` Official Notion MCP Server implementing the Model Context Protocol for the Notion API. <details><summary>More about</summary>

  It lets AI agents read and edit Notion pages and databases through standardized MCP tooling, reducing friction for developers who-parse Notion data.

  _Finally, a way to make your AI assistant moderately good at pretending it understands your Notion wiki, while you pretend you don’t need to read it yourself._

  `notion` `mcp` `ai-integration` `developer-tooling`
  </details>
- **[mcp-obsidian](https://github.com/markuspfundstein/mcp-obsidian)** `⭐ 4.5k` `updated ≤180d` An MCP server that lets AI assistants interact with Obsidian vaults via the Local REST API to list, search, read, and write notes. <details><summary>More about</summary>

  It turns a personal knowledge base into a live workspace for coding agents, letting them pull architecture notes, meeting summaries, and documentation directly into their context.

  _You now have a clear path to confusing your meeting notes, your CosmosDB research, and your production codebase into one big hallucinated soup._

  `mcp` `obsidian` `context` `integration`
  </details>
- **[zcaceres/markdownify-mcp](https://github.com/zcaceres/markdownify-mcp)** `⭐ 3k` `updated ≤90d` markdownify-mcp is an MCP server that converts files and web content to Markdown. <details><summary>More about</summary>

  It lets AI assistants access and process documents, images, and web content by transforming them into readable Markdown within MCP-enabled workflows.

  _Another MCP server promising to solve context overload by turning everything into Markdown, because apparently LLMs still can't read PDFs natively._

  `mcp` `markdown` `document-conversion`
  </details>
- **[korotovsky/slack-mcp-server](https://github.com/korotovsky/slack-mcp-server)** `⭐ 1.9k` `updated ≤90d` An MCP server that provides Slack workspace integration with features like DMs, group DMs, smart history fetching, and OAuth/stealth modes. <details><summary>More about</summary>

  Developers can connect AI assistants to Slack workspaces for message retrieval, search, and posting without requiring extensive permissions or bot installations.

  _Now your AI can lurk in Slack DMs with the same enthusiasm as a junior dev on their first day._

  `mcp` `slack` `integration` `server` `workspace`
  </details>
- **[chigwell/telegram-mcp](https://github.com/chigwell/telegram-mcp)** `⭐ 1.7k` `updated ≤30d` A Telegram MCP server that exposes Telegram account, chat, message, contact, media, and admin operations to MCP-compatible clients like Claude and Cursor. <details><summary>More about</summary>

  Lets developers integrate Telegram messaging and group management directly into their AI coding workflows via MCP.

  _Now your AI can not only write your code but also manage your group chats—because why should your bot stop at your repo?_

  `mcp` `telegram` `messaging` `integration` `python`
  </details>
- **[mcpvault](https://github.com/bitbonsai/mcpvault)** `⭐ 1.7k` `updated ≤30d` A lightweight Model Context Protocol (MCP) server for safe read/write access to Obsidian vaults. <details><summary>More about</summary>

  It lets developers connect any MCP-compatible AI assistant (Claude, ChatGPT, etc.) to their Obsidian notes as a unified knowledge base.

  _Now your AI can finally read your half-baked project notes and judge you silently._

  `mcp` `obsidian` `knowledge-base` `context-protocol`
  </details>
- **[drawio-mcp-server](https://github.com/lgazo/drawio-mcp-server)** `⭐ 1.5k` `updated ≤90d` An MCP server that lets AI agents create, read, update, and delete Draw.io diagrams programmatically via tools like Mermaid import and multi-page management. <details><summary>More about</summary>

  It allows coding agents to generate and maintain architectural diagrams and flowcharts automatically, bridging the gap between code changes and visual documentation.

  _We have finally achieved the futuristic dream where your AI agent can silently rot your diagrams just as confidently as it rots your codebase._

  `mcp` `diagrams` `drawio` `agent-integration`
  </details>
- **[anypost/emailmd](https://github.com/anypost/emailmd)** `⭐ 1.4k` `updated ≤90d` emailmd converts markdown into responsive, email-safe HTML for cross-client email rendering. <details><summary>More about</summary>

  It eliminates the pain of writing raw HTML for emails by letting developers use familiar markdown syntax while ensuring deliverability across email clients.

  _Finally, a tool that acknowledges email HTML is a war crime and offers markdown as a fragile ceasefire._

  `markdown` `email` `html` `cli` `mcp`
  </details>
- **[softeria/ms-365-mcp-server](https://github.com/softeria/ms-365-mcp-server)** `⭐ 1k` `updated ≤90d` An MCP server that exposes over 200 Microsoft Graph API endpoints for Outlook, Teams, SharePoint, OneDrive, and other Microsoft 365 services to AI assistants. <details><summary>More about</summary>

  Developers can wire Claude and other MCP-compatible assistants directly into mail, calendars, files, and Teams without building custom Graph integrations.

  _You can now ask your coding agent to summarize last week’s Outlook threads and then wonder why you ever thought ‘context switching’ was a human problem._

  `mcp` `microsoft-365` `graph-api` `integrations`
  </details>
- **[line/line-bot-mcp-server](https://github.com/line/line-bot-mcp-server)** `⭐ 782` `updated ≤90d` An official LINE Messaging API MCP server that lets AI agents send messages, manage rich menus, and retrieve user/profile data from LINE Official Accounts. <details><summary>More about</summary>

  Developers building AI agents for LINE can plug this MCP server in to give their assistants native messaging, broadcasting, and account-management capabilities without writing custom API wrappers.

  _Another pristine integration ensuring your AI agent can now eagerly spam an entire follower base on LINE with hallucination-tinged flex messages at 3 AM._

  `mcp` `line` `messaging` `agent-integration`
  </details>
- **[mark3labs/mcp-filesystem-server](https://github.com/mark3labs/mcp-filesystem-server)** `⭐ 694` `updated ≤1y` A Go implementation of a Model Context Protocol (MCP) server that exposes local filesystem operations like read, write, search, and directory listing to MCP-compatible clients. <details><summary>More about</summary>

  It lets MCP-aware coding assistants and agents securely access and manipulate the local filesystem through a standardized protocol rather than custom integrations.

  _Another brick in the wall of 'standards' that turn a simple file read into a protocol handshake, while your agent still hallucinates the path._

  `mcp` `filesystem` `go` `server` `local-ai`
  </details>
- **[vivekvells/mcp-pandoc](https://github.com/vivekvells/mcp-pandoc)** `⭐ 582` `updated >1y` MCP server for document format conversion using pandoc. <details><summary>More about</summary>

  Enables AI agents to convert documents between formats like markdown, PDF, and DOCX through a standardized MCP interface.

  _Another tiny MCP server doing one specific thing, adding to the growing pile of protocol-specific adapters we now need to manage._

  `mcp` `document-conversion` `pandoc`
  </details>
- **[joinly-ai/joinly](https://github.com/joinly-ai/joinly)** `⭐ 566` `updated ≤1y` An MCP server that enables AI agents to join and participate in video calls across platforms like Zoom, Google Meet, and Microsoft Teams. <details><summary>More about</summary>

  It allows developers to integrate real-time meeting participation and interaction capabilities into their AI agents, expanding their utility beyond code and into live collaboration.

  _Now your AI agent can interrupt you in meetings just like a real coworker._

  `mcp` `meeting-agents` `real-time-collaboration` `voice-ai` `transcription`
  </details>
- **[saseq/discord-mcp](https://github.com/saseq/discord-mcp)** `⭐ 525` `updated ≤180d` A Java-based MCP server that connects Discord bots to AI assistants via the Model Context Protocol, enabling programmatic channel management, messaging, and server information retrieval. <details><summary>More about</summary>

  It allows developers to wire Discord directly into their AI workflows, letting assistants monitor, respond to, and manage servers without leaving the MCP ecosystem.

  _Now your AI can argue in Discord channels on your behalf, adding 'bot moderation' to the list of things you nervously monitor while pretending to be offline._

  `mcp` `discord` `java` `automation` `integration`
  </details>
- **[MarkusPfundstein/mcp-gsuite](https://github.com/markuspfundstein/mcp-gsuite)** `⭐ 490` `updated >1y` MCP Server to interact with Google Gsuite products. <details><summary>More about</summary>

  Lets developers access Gmail and Calendar from MCP clients like Claude Desktop using natural language prompts.

  _Another OAuth dance just to let an AI read your inbox and schedule meetings you’ll forget to attend._

  `mcp` `google-workspace` `host-integration`
  </details>
- **[mcp-apple-notes](https://github.com/rafalwilinski/mcp-apple-notes)** `⭐ 415` `updated >1y` An MCP server that enables semantic search and RAG over Apple Notes using local embeddings and LanceDB for integration with Claude Desktop. <details><summary>More about</summary>

  It lets developers query their personal note archives directly from Claude, bridging local knowledge bases with coding assistants without cloud APIs.

  _Because apparently the natural endpoint of modern development is teaching a language model to RAG over your half-finished meeting notes so it can hallucinate with local context._

  `mcp` `rag` `apple-notes` `claude` `local-ai`
  </details>
- **[InditexTech/mcp-teams-server](https://github.com/inditextech/mcp-teams-server)** `⭐ 409` `updated ≤180d` An MCP server implementation for Microsoft Teams integration, enabling reading, creating, and replying to messages, and mentioning members. <details><summary>More about</summary>

  Developers can integrate Microsoft Teams messaging capabilities into their MCP-based workflows, allowing AI agents to interact with Teams channels and threads programmatically.

  _Now your AI can ping you in Teams about the ping it just sent to Slack about the email it forwarded from Outlook._

  `mcp` `microsoft-teams` `integration` `server` `python`
  </details>
- **[chaindead/telegram-mcp](https://github.com/chaindead/telegram-mcp)** `⭐ 349` `updated ≤180d` An MCP server that bridges Telegram's API to AI assistants, enabling message, dialog, and draft management. <details><summary>More about</summary>

  Lets AI assistants read, organize, and respond to Telegram messages directly, turning chat data into actionable context for developers.

  _Now your AI can judge your unread Telegram messages before you do._

  `mcp` `telegram` `messaging` `context-provider`
  </details>
- **[plane-mcp-server](https://github.com/makeplane/plane-mcp-server)** `⭐ 335` `updated ≤90d` Plane's official MCP server that exposes Plane project management APIs as tools and resources for AI agents via stdio, SSE, and streamable HTTP transports. <details><summary>More about</summary>

  It lets coding agents and MCP-compatible clients directly read and manipulate Plane issues, cycles, and projects without leaving the agent context.

  _Yet another official MCP server so your agent can argue with your project board instead of just writing the code._

  `mcp` `plane` `project-management` `agent-integration`
  </details>
- **[mac_messages_mcp](https://github.com/carterlasalle/mac_messages_mcp)** `⭐ 330` `updated ≤30d` An MCP server that enables LLMs to securely query, analyze, and send iMessage/SMS conversations on macOS. <details><summary>More about</summary>

  Developers can integrate iMessage capabilities into their AI workflows, allowing agents to interact with SMS/iMessage data for notifications, automation, or context enrichment.

  _Now your AI can read your group chats and judge your texting habits in real time._

  `mcp-server` `imessage` `macos` `communication` `automation`
  </details>
- **[QuackbackIO/quackback](https://github.com/quackbackio/quackback)** `⭐ 302` `updated ≤90d` An open-source, self-hosted product feedback platform that includes an MCP server so AI agents can search, triage, and act on user feedback. <details><summary>More about</summary>

  It exposes a 23-tool MCP interface that lets coding agents ingest and prioritize external user feedback directly into the development workflow.

  _We have successfully abstracted user empathy into a 23-tool MCP server so the agent can ignore customers on our behalf._

  `mcp` `feedback` `self-hosted` `product-management` `ai-powered`
  </details>
- **[jinzcdev/markmap-mcp-server](https://github.com/jinzcdev/markmap-mcp-server)** `⭐ 289` `updated ≤1y` An MCP server that converts Markdown to interactive mind maps with export support for PNG/JPG/SVG. <details><summary>More about</summary>

  Developers can integrate mind-mapping visualization into their MCP-enabled workflows for planning, documentation, or brainstorming directly from Markdown.

  _Now you can turn your TODO.md into a mind map, because apparently bullet points weren’t chaotic enough._

  `mcp-server` `markdown` `mindmap` `visualization` `export`
  </details>
- **[isaacphi/mcp-gdrive](https://github.com/isaacphi/mcp-gdrive)** `⭐ 283` `updated >1y` An MCP server that enables LLMs to search, read, and edit Google Drive files and Google Sheets. <details><summary>More about</summary>

  It gives AI agents direct access to your unstructured documentation and structured spreadsheets within a unified protocol.

  _Now your LLM can hallucinate spreadsheet formulas directly into your production data pipelines._

  `mcp` `google-drive` `google-sheets` `productivity` `automation`
  </details>
- **[agenticmail/agenticmail](https://github.com/agenticmail/agenticmail)** `⭐ 230` `updated ≤30d` AgenticMail is an MCP server that provides AI agents with programmable email, SMS, and phone-call capabilities. <details><summary>More about</summary>

  It lets developers give AI agents real-world communication channels without building custom telecom integrations.

  _Now your agent can spam your inbox and robocall you, all with a single MCP tool call._

  `mcp` `email` `sms` `voice` `ai-agent`
  </details>
- **[mcp-server-apple-events](https://github.com/fradser/mcp-server-apple-events)** `⭐ 214` `updated ≤90d` MCP server providing native macOS integration with Apple Reminders and Calendar via EventKit. <details><summary>More about</summary>

  Lets developers interact with Apple Reminders and Calendar through a standardized MCP interface for workflow automation and personal knowledge management.

  _Finally, an excuse to automate your personal to-do list using the same protocol that manages your LLM’s working memory._

  `mcp` `macos` `apple-ecosystem` `calendar` `reminders`
  </details>
- **[GistPad-MCP](https://github.com/lostintangent/gistpad-mcp)** `⭐ 208` `updated ≤1y` An MCP server that enables AI clients to read and manage GitHub Gists for notes, prompts, and daily todos via a standardized tool and resource interface. <details><summary>More about</summary>

  It lets developers use their personal knowledge base as contextual memory for any MCP-enabled AI assistant without leaving the chat.

  _Finally, a way to make your scattered gists feel like a second brain—until you realize you're just organizing markdown for an AI that still forgets your name._

  `mcp` `gists` `knowledge-management`
  </details>
- **[notion_mcp](https://github.com/danhilse/notion_mcp)** `⭐ 208` `updated >1y` An MCP server that enables Claude to read and manage a personal Notion todo list. <details><summary>More about</summary>

  Developers can integrate their Notion task management directly into their Claude workflow without leaving the assistant context.

  _Now your AI can judge you for procrastinating on 'later' tasks in Notion._

  `mcp` `notion` `todo` `claude` `integration`
  </details>
- **[instagram_dm_mcp](https://github.com/trypeggy/instagram_dm_mcp)** `⭐ 183` `updated >1y` An MCP server that enables sending Instagram Direct Messages through MCP-compatible hosts like Claude Desktop or Cursor. <details><summary>More about</summary>

  It allows developers to integrate social messaging automation directly into their AI assistant's toolset.

  _Because your coding environment apparently wasn't quite social enough for your existential dread._

  `mcp` `instagram` `automation` `social-media`
  </details>
- **[wyattjoh/jmap-mcp](https://github.com/wyattjoh/jmap-mcp)** `⭐ 177` `updated ≤90d` A Model Context Protocol server that provides tools for interacting with JMAP-compliant email servers via Deno. <details><summary>More about</summary>

  Enables AI agents to perform email operations like search, send, and sync through a standardized MCP interface.

  _Yet another MCP server for a niche protocol, adding to the growing list of 'if you build it, agents will come' email integrations._

  `mcp` `email` `jmap` `deno`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+187 more in Communication, Files & Productivity &nbsp;—&nbsp; click to expand</strong></summary>

- **[zcaceres/gtasks-mcp](https://github.com/zcaceres/gtasks-mcp)** `⭐ 168` `updated ≤180d` A Google Tasks Model Context Protocol Server for Claude.
- **[@taskade/mcp](https://github.com/taskade/mcp)** `⭐ 165` `updated ≤180d` The official Taskade MCP server and OpenAPI-to-MCP code generator, providing 50+ tools to connect AI assistants like Claude and Cursor to Taskade workspaces for managing tasks, projects, agents, and automations.
- **[svelte-llm-mcp](https://github.com/khromov/svelte-llm-mcp)** `⭐ 158` `updated ≤1y` An MCP server providing Svelte 5 and SvelteKit developer documentation as a context source for AI assistants.
- **[mcp-linear](https://github.com/tacticlaunch/mcp-linear)** `⭐ 146` `updated ≤180d` An MCP server that connects AI assistants to Linear, enabling natural language retrieval, creation, and updates of issues, projects, teams, cycles, and roadmaps via the Linear GraphQL API.
- **[dart-mcp-server](https://github.com/its-dart/dart-mcp-server)** `⭐ 128` `updated ≤1y` An MCP server for integrating Dart AI project management capabilities with MCP-compatible clients.
- **[codefuturist/email-mcp](https://github.com/codefuturist/email-mcp)** `⭐ 123` `updated ≤90d` An MCP server that provides full IMAP and SMTP email capabilities for AI assistants via the Model Context Protocol.
- **[keep-mcp](https://github.com/feuerdev/keep-mcp)** `⭐ 104` `updated ≤90d` An MCP server that provides an interface for interacting with Google Keep notes.
- **[CalDAV MCP](https://github.com/dominik1001/caldav-mcp)** `⭐ 103` `updated ≤30d` A CalDAV Model Context Protocol (MCP) server that exposes calendar operations as tools for AI assistants.
- **[basecamp-mcp-server](https://github.com/georgeantonopoulos/basecamp-mcp-server)** `⭐ 101` `updated ≤90d` An MCP server that enables AI clients like Cursor and Claude Desktop to interact with Basecamp 3 via OAuth.
- **[cometchat/docs-mcp](https://github.com/cometchat/docs-mcp)** `⭐ 96` `updated ≤30d` An MCP server that provides CometChat documentation and implementation bundles to AI coding agents.
- **[tecnologicachile/mail-mcp](https://github.com/tecnologicachile/mail-mcp)** `⭐ 93` tecnologicachile/mail-mcp ☁️ - Multi-account email over IMAP, SMTP, Exchange Web Services and Microsoft Graph: read, search, send, reply, forward, bulk operations and attachment downloads.
- **[ztxtxwd/open-feishu-mcp-server](https://github.com/ztxtxwd/open-feishu-mcp-server)** `⭐ 87` `updated ≤1y` ztxtxwd/open-feishu-mcp-server ☁️ - A Model Context Protocol (MCP) server with built-in Feishu OAuth authentication, supporting remote connections and providing comprehensive Feishu document management tools including block creation, content updates, and advanced features.
- **[hannesrudolph/imessage-query-fastmcp-mcp-server](https://github.com/hannesrudolph/imessage-query-fastmcp-mcp-server)** `⭐ 81` `updated ≤1y` An MCP server that provides read-only access to macOS iMessage databases for LLM querying and analysis.
- **[mcp-server-email](https://github.com/shy2593666979/mcp-server-email)** `⭐ 80` `updated >1y` An MCP server that enables LLMs to send emails with attachments and search for files in local directories via SMTP.
- **[aashari/mcp-server-atlassian-jira](https://github.com/aashari/mcp-server-atlassian-jira)** `⭐ 77` `updated ≤1y` A Node.js/TypeScript MCP server that connects AI assistants to Atlassian Jira for managing issues, projects, and development workflows.
- **[nylas/cli](https://github.com/nylas/cli)** `⭐ 75` nylas/cli : MCP server for email, calendar, and contacts. 16 tools across Gmail, Outlook, Exchange, Yahoo, iCloud, and IMAP via one auth flow. Install with nylas mcp install. Docs: https://cli.nylas.com.
- **[gitmotion/ntfy-me-mcp](https://github.com/gitmotion/ntfy-me-mcp)** `⭐ 74` `updated ≤180d` An MCP server that enables AI agents to send and fetch notifications via ntfy.sh or self-hosted ntfy instances.
- **[imdinu/apple-mail-mcp](https://github.com/imdinu/apple-mail-mcp)** `⭐ 68` `updated ≤90d` An MCP server providing full-text search and email access for Apple Mail on macOS.
- **[hackmd-mcp](https://github.com/yuna0x0/hackmd-mcp)** `⭐ 67` `updated ≤90d` A Model Context Protocol server that enables AI assistants to interact with HackMD's note-taking platform via API endpoints.
- **[agentmail-to/agentmail-mcp](https://github.com/agentmail-to/agentmail-mcp)** `⭐ 66` `updated ≤30d` agentmail-to/agentmail-mcp ☁️ - Email for AI agents: create inboxes on the fly to send, receive and act on email.
- **[mcp-miro](https://github.com/k-jarzyna/mcp-miro)** `⭐ 66` `updated >1y` An MCP server that integrates Miro's API to allow AI assistants like Claude to read and manage Miro boards.
- **[mailtrap-mcp](https://github.com/mailtrap/mailtrap-mcp)** `⭐ 65` `updated ≤90d` Official MCP server for Mailtrap that provides tools for sending and testing emails in sandbox via Mailtrap.
- **[efforthye/fast-filesystem-mcp](https://github.com/efforthye/fast-filesystem-mcp)** `⭐ 63` `updated ≤180d` A high-performance Model Context Protocol (MCP) server that provides secure filesystem access for Claude and other AI assistants.
- **[todoist-mcp-server](https://github.com/stanislavlysenko0912/todoist-mcp-server)** `⭐ 63` `updated ≤180d` A Model Context Protocol server that exposes the full Todoist REST and Sync APIs for natural language task management across Claude, Cursor, and other MCP-compatible clients.
- **[aashari/mcp-server-atlassian-confluence](https://github.com/aashari/mcp-server-atlassian-confluence)** `⭐ 62` `updated ≤1y` A Node.js/TypeScript MCP server that enables AI assistants to interact with Atlassian Confluence spaces, pages, and search via CQL.
- **[mailgun-mcp-server](https://github.com/mailgun/mailgun-mcp-server)** `⭐ 62` `updated ≤90d` An MCP server that exposes Mailgun email API capabilities to AI agents via the Model Context Protocol.
- **[MrGo2/icloud-mcp](https://github.com/mrgo2/icloud-mcp)** `⭐ 59` MrGo2/icloud-mcp ☁️ - Apple Mail, Calendar, Contacts, Reminders, Notes, Messages and Safari in one server with 41 tools. Talks AppleScript to the native macOS apps, or IMAP/CalDAV/CardDAV to iCloud when running off-Mac.
- **[SecurityRonin/docx-mcp](https://github.com/securityronin/docx-mcp)** `⭐ 57` `updated ≤90d` An MCP server that lets AI coding agents read, edit, and audit Word (.docx) documents with tracked changes, comments, and structural validation.
- **[Cactusinhand/mcp_server_notify](https://github.com/cactusinhand/mcp_server_notify)** `⭐ 54` `updated >1y` An MCP server that sends desktop notifications with sound when agent tasks complete.
- **[trello-mcp-server](https://github.com/m0xai/trello-mcp-server)** `⭐ 54` `updated ≤180d` Trevo MCP Server is an MCP server that provides AI hosts with tools to interact with Trello boards, lists, and cards via standard Model Context Protocol endpoints.
- **[arpitbatra123/mcp-googletasks](https://github.com/arpitbatra123/mcp-googletasks)** `⭐ 50` `updated ≤180d` An MCP server that bridges LLMs with Google Tasks, enabling task management through clients like Claude Desktop, Cursor, and Codex.
- **[leshchenko1979/fast-mcp-telegram](https://github.com/leshchenko1979/fast-mcp-telegram)** `⭐ 48` leshchenko1979/fast-mcp-telegram ☁️ - Telegram MCP server with direct API/curl access, multi-user Bearer auth, HTTP-MTProto Bridge, file attachments, voice transcription, and context-optimized design.
- **[mcp-tasks](https://github.com/flesler/mcp-tasks)** `⭐ 47` `updated ≤90d` An MCP server for managing tasks across Markdown, JSON, and YAML file formats.
- **[teddyzxcv/ntfy-mcp](https://github.com/teddyzxcv/ntfy-mcp)** `⭐ 45` `updated >1y` An MCP server that sends ntfy push notifications to your phone when an AI coding assistant finishes a task.
- **[UseJunior/safe-docx](https://github.com/usejunior/safe-docx)** `⭐ 45` `updated ≤90d` Safe DOCX suite provides deterministic TypeScript tools and an MCP server for surgically editing existing .docx files with formatting preservation.
- **[mcp-telegram](https://github.com/mcp-telegram/mcp-telegram)** `⭐ 44` `updated ≤90d` MCP Telegram is an MCP server that connects AI assistants like Claude to Telegram via MTProto, operating as a userbot to access chats, contacts, and message history.
- **[desek/outlook-local-mcp](https://github.com/desek/outlook-local-mcp)** `⭐ 42` `updated ≤30d` Local MCP server that connects Claude Desktop and Claude Code to Microsoft Outlook via the Microsoft Graph API for calendar, email, and account management.
- **[littlebearapps/outlook-assistant](https://github.com/littlebearapps/outlook-assistant)** `⭐ 39` `updated ≤90d` MCP server for Outlook email, calendar, and contacts that lets AI assistants manage inbox data via the Model Context Protocol.
- **[paulhkang94/markview](https://github.com/paulhkang94/markview)** `⭐ 38` `updated ≤90d` A native macOS markdown preview app that includes an MCP server, allowing Claude Code and Claude Desktop to render and preview markdown content live in a native SwiftUI window.
- **[trello-desktop-mcp](https://github.com/kocakli/trello-desktop-mcp)** `⭐ 38` `updated ≤1y` An MCP server that provides Trello integration for AI assistants like Claude Desktop, enabling board, card, and list management via 19 tools.
- **[gotoolkits/mcp-wecombot-server](https://github.com/gotoolkits/mcp-wecombot-server)** `⭐ 37` `updated >1y` An MCP server that sends various types of messages to WeCom group robots.
- **[Xuanwo/mcp-server-opendal](https://github.com/xuanwo/mcp-server-opendal)** `⭐ 35` `updated >1y` Model Context Protocol Server for Apache OpenDAL™ providing access to storage services via MCP.
- **[n24q02m/better-email-mcp](https://github.com/n24q02m/better-email-mcp)** `⭐ 33` `updated ≤90d` An MCP server that provides composite email tools (IMAP/SMTP) with multi-account support and token optimization for AI agents.
- **[jonradoff/lightcms](https://github.com/jonradoff/lightcms)** `⭐ 31` `updated ≤90d` Self-hosted CMS with admin UI, REST/MCP APIs, semantic search, site chat, content versioning, and agentic control via 106 MCP tools.
- **[jtalk22/slack-mcp-server](https://github.com/jtalk22/slack-mcp-server)** `⭐ 31` `updated ≤90d` An MCP server that provides session-based Slack access for AI agents and MCP clients without requiring OAuth or admin approval.
- **[fibery-mcp-server](https://github.com/fibery-inc/fibery-mcp-server)** `⭐ 29` `updated ≤180d` An MCP server that enables LLMs to interact with Fibery workspaces via natural language.
- **[nicholasglazer/gnosis-mcp](https://github.com/nicholasglazer/gnosis-mcp)** `⭐ 29` `updated ≤180d` Zero-config MCP server for searchable documentation using SQLite or PostgreSQL.
- **[wyattjoh/imessage-mcp](https://github.com/wyattjoh/imessage-mcp)** `⭐ 29` `updated ≤1y` A Deno-based Model Context Protocol server for reading iMessage data on macOS.
- **[exoticknight/mcp-file-merger](https://github.com/exoticknight/mcp-file-merger)** `⭐ 27` `updated ≤90d` An MCP server that combines multiple files into a single output file.
- **[Jira Context MCP](https://github.com/rahulthedevil/jira-context-mcp)** `⭐ 26` `updated >1y` An MCP server that connects Jira to AI coding assistants like Cursor to fetch ticket details, assigned issues, and recent changes directly from the IDE.
- **[multi-chat-mcp-server](https://github.com/siva010928/multi-chat-mcp-server)** `⭐ 26` `updated ≤1y` An open-source MCP server that connects AI assistants like Claude and Cursor to Google Chat (with planned Slack and Teams support) so they can search messages, share files, and participate in team conversations.
- **[mcp-server-python](https://github.com/inkeep/mcp-server-python)** `⭐ 25` `updated >1y` An MCP server that connects Inkeep's RAG-powered documentation search to MCP-compatible clients like Claude Desktop.
- **[yjcho9317/nworks](https://github.com/yjcho9317/nworks)** `⭐ 25` `updated ≤1y` Full-featured MCP server and CLI for LINE WORKS (NAVER WORKS) — 26 tools covering messages, calendar, drive, mail, tasks, and boards. Automate with AI agents or scripts.
- **[filesystem-mcp](https://github.com/j0hanz/filesystem-mcp)** `⭐ 23` `updated ≤90d` A local filesystem MCP server that enables LLMs and AI agents to read, write, search, diff, patch, and manage files with security controls.
- **[marlinjai/email-mcp](https://github.com/marlinjai/email-mcp)** `⭐ 22` `updated ≤180d` Unified MCP server for email access across Gmail, Outlook, iCloud, and IMAP providers.
- **[PaSympa/discord-mcp](https://github.com/pasympa/discord-mcp)** `⭐ 22` `updated ≤90d` A lightweight, multi-guild MCP server with 95+ tools for controlling Discord via natural language across Claude Desktop, Cursor, VS Code, and other MCP-compatible clients.
- **[colapsis/transfa](https://github.com/colapsis/transfa)** `⭐ 20` `updated ≤180d` A CLI and API-driven file-sharing service designed for seamless file transfers between developers, CI/CD pipelines, and AI agents.
- **[olgasafonova/mediawiki-mcp-server](https://github.com/olgasafonova/mediawiki-mcp-server)** `⭐ 19` `updated ≤90d` An MCP server that exposes MediaWiki content to AI assistants, enabling natural language search, reading, and editing of wiki pages.
- **[willianpinho/large-file-mcp](https://github.com/willianpinho/large-file-mcp)** `⭐ 19` `updated ≤180d` An MCP server for efficient large file operations with smart chunking, search, and navigation in AI development workflows.
- **[smith-and-web/obsidian-mcp-server](https://github.com/smith-and-web/obsidian-mcp-server)** `⭐ 18` `updated ≤90d` An MCP server that exposes Obsidian vaults to AI assistants like Claude and Cursor for reading, writing, searching, and managing notes via SSE and npx.
- **[Zacccck/Claude-MCP-Read-Email-Attachments](https://github.com/zacccck/claude-mcp-read-email-attachments)** `⭐ 18` `updated ≤180d` A local MCP server that enables Claude Desktop to read and parse Outlook email attachments via Microsoft Graph API.
- **[ictinnovations/pbx-mcp](https://github.com/ictinnovations/pbx-mcp)** `⭐ 17` ictinnovations/pbx-mcp - Asterisk and FreeSWITCH PBX state over AMI and ESL: extensions, active channels, trunk and SIP peer status, dialplan and call history; read-only by default.
- **[ictinnovations/ictbroadcast-mcp](https://github.com/ictinnovations/ictbroadcast-mcp)** `⭐ 16` ictinnovations/ictbroadcast-mcp - ICTBroadcast voice, SMS and fax broadcasting: list campaigns and read live status and per-call results, with optional tools to start and stop campaigns.
- **[ictinnovations/ictpbx-mcp](https://github.com/ictinnovations/ictpbx-mcp)** `⭐ 16` ictinnovations/ictpbx-mcp - Read-only access to ICTPBX, a multi-tenant IP PBX on ICTCore and FreeSWITCH: PBX statistics, extensions, DIDs, providers and tenants.
- **[wildsurfer/your-mail-mcp](https://github.com/wildsurfer/your-mail-mcp)** `⭐ 16` wildsurfer/your-mail-mcp ️ - Read-only, self-hosted search over multiple IMAP accounts, mirrored by mbsync into a local notmuch index. Cannot send, delete or move mail.
- **[dot-RealityTest/obsidian-codex-mcp](https://github.com/aka-kika/kika-obsidian-mcp)** `⭐ 15` `updated ≤90d` A local-first MCP server that provides AI agents with direct filesystem access to Obsidian vaults and schema-validated `.base` files.
- **[reminder-mcp](https://github.com/arifszn/reminder-mcp)** `⭐ 15` `updated ≤1y` An MCP server that schedules and triggers reminders via Slack or Telegram using an external cron service.
- **[IMAP MCP](https://github.com/dominik1001/imap-mcp)** `⭐ 14` `updated >1y` An IMAP Model Context Protocol (MCP) server that exposes IMAP operations as tools for AI assistants.
- **[madbonez/caldav-mcp](https://github.com/madbonez/caldav-mcp)** `⭐ 14` `updated ≤1y` An MCP server that provides CalDAV calendar access via the Model Context Protocol.
- **[madhan-g-p/DevDocs-MCP](https://github.com/madhan-g-p/devdocs-mcp)** `⭐ 13` `updated ≤180d` DevDocs-MCP is a local Model Context Protocol server that provides version-pinned, offline documentation from DevDocs.io to AI coding agents.
- **[Sealjay/mcp-hey](https://github.com/sealjay/mcp-hey)** `⭐ 13` `updated ≤90d` MCP server for Hey.com: read, send, search, and organise email from Claude or any MCP client. Runs locally, stores no credentials, respects rate limits.
- **[mcp-backup-server](https://github.com/hexitex/mcp-backup-server)** `⭐ 12` `updated >1y` An MCP server that provides file backup and restoration capabilities for AI agents and code editing tools.
- **[3aKHP/prts-mcp](https://github.com/3akhp/prts-mcp)** `⭐ 11` `updated ≤30d` An MCP server providing live access to Arknights Wiki lore, operator data, and game assets for AI agents.
- **[ailenshen/apple-notes-mcp](https://github.com/ailenshen/apple-notes-mcp)** `⭐ 11` `updated ≤180d` An MCP server that enables AI clients to read and write Apple Notes with native formatting support.
- **[Chunkydotdev/bldbl-mcp](https://github.com/chunkydotdev/bldbl-mcp)** `⭐ 11` `updated >1y` An MCP server that enables AI assistants to interact with Buildable, an AI-powered development platform for project planning and task management.
- **[hmk/box-mcp-server](https://github.com/hmk/box-mcp-server)** `⭐ 11` `updated >1y` An MCP server that enables search, read, and file access for Box cloud storage.
- **[chatterboxio-mcp-server](https://github.com/chatterboxio/chatterboxio-mcp-server)** `⭐ 10` `updated >1y` An MCP server that lets AI agents join online meetings (Zoom, Google Meet, Teams) and generate meeting summaries.
- **[drolosoft/go-docs-mcp](https://github.com/drolosoft/go-docs-mcp)** `⭐ 10` `updated ≤90d` A Go-based MCP server that enables AI assistants to read, search, and extract data from multiple document formats, including PDFs, DOCX, and images via OCR.
- **[EthanQC/feishu-user-plugin](https://github.com/ethanqc/feishu-user-plugin)** `⭐ 10` `updated ≤90d` An MCP server and CLI tool that enables AI assistants to interact with Feishu (Lark) services like messaging, documents, and calendars.
- **[leonardoca1/aesthetics-wiki-mcp](https://github.com/leonardoca1/aesthetics-wiki-mcp)** `⭐ 10` `updated ≤180d` An MCP server that provides read-only access to the Aesthetics Wiki via tools for searching, retrieving, and exploring visual subcultures.
- **[pasichDev/docket](https://github.com/pasichdev/docket)** `⭐ 10` pasichDev/docket - Shared todo list and backlog for coding agents, filed per project by git remote, with claims to avoid duplicate work and a local web dashboard.
- **[PhononX/cv-mcp-server](https://github.com/phononx/cv-mcp-server)** `⭐ 10` `updated ≤90d` An MCP server that gives AI assistants access to Carbon Voice's API for voice messaging, conversations, and workspace management.
- **[adecubed/gigamail](https://github.com/adecubed/gigamail)** `⭐ 9` `updated ≤30d` An MCP server that provides AI agents with secure, permission-controlled access to email, calendars, and local knowledge files.
- **[devhub-cms-mcp](https://github.com/devhub/devhub-cms-mcp)** `⭐ 9` `updated >1y` A Model Context Protocol (MCP) server for integrating DevHub CMS with LLM assistants.
- **[googlarz/signal-mcp](https://github.com/googlarz/signal-mcp)** `⭐ 9` `updated ≤30d` A local MCP server and CLI that adds persistent SQLite storage, full-text search, and contact resolution to signal-cli.
- **[MintMCP](https://github.com/mintmcp/servers)** `⭐ 9` `updated >1y` A suite of hosted MCP servers from MintMCP that connect AI agents to Google and Microsoft email and calendar services.
- **[Albretsen/MCPEmails](https://github.com/albretsen/mcpemails)** `⭐ 8` `updated ≤30d` A hosted MCP server that allows AI agents to read, search, send, and schedule emails via Gmail, Fastmail, iCloud, or IMAP.
- **[ayhammouda/python-docs-mcp-server](https://github.com/ayhammouda/python-docs-mcp-server)** `⭐ 8` `updated ≤30d` A read-only MCP server providing a local, version-aware index of official Python documentation for AI coding agents.
- **[Latex MCP Server](https://github.com/yeok-c/latex-mcp-server)** `⭐ 8` `updated >1y` LaTeX MCP Server is a Model Context Protocol server that provides tools for reading, compiling, and managing LaTeX documents and bibliographies.
- **[MailSandbox](https://github.com/btafoya/mailsandbox)** `⭐ 8` `updated >1y` MailSandbox is a lightweight email testing tool with SMTP server, web UI, Postmark API emulation, and an MCP server for AI-assisted email inspection.
- **[MarceauSolutions/md-to-pdf-mcp](https://github.com/marceausolutions/md-to-pdf-mcp)** `⭐ 8` `updated ≤1y` MCP server for converting Markdown to PDF with interactive table of contents via the Model Context Protocol.
- **[mcp-nextcloud-calendar](https://github.com/cheffromspace/mcp-nextcloud-calendar)** `⭐ 8` `updated >1y` An MCP server that integrates Nextcloud Calendar with Model Context Protocol clients.
- **[mcp-project-manager](https://github.com/croffasia/mcp-project-manager)** `⭐ 8` `updated >1y` Hierarchical task management server for MCP-compatible AI assistants, enabling AI-powered decomposition of ideas into epics and tasks with dependency tracking.
- **[OrygnsCode/Omnicord](https://github.com/orygnscode/omnicord)** `⭐ 8` `updated ≤90d` Discord MCP server. Let your AI assistant run and build your Discord server: chat, moderation, administration, and full server building from one brief. 150+ tools, with destructive actions gated behind a preview.
- **[churichard/fluxmail](https://github.com/churichard/fluxmail)** `⭐ 7` `updated ≤30d` Self-hosted email CLI / API / MCP server for AI agents and apps.
- **[FantomaSkaRus1/telegram-bot-mcp](https://github.com/fantomaskarus1/telegram-bot-mcp)** `⭐ 7` `updated ≤1y` A Model Context Protocol (MCP) server that provides 174 tools for interacting with the Telegram Bot API.
- **[ofershap/mcp-server-markdown](https://github.com/ofershap/mcp-server-markdown)** `⭐ 7` `updated ≤1y` An MCP server that lets AI assistants search, navigate, and extract structured content from local markdown files, including sections, headings, and code blocks.
- **[webex-messaging-mcp-server](https://github.com/kashyap-ai-ml-solutions/webex-messaging-mcp-server)** `⭐ 7` `updated ≤90d` An MCP server that exposes Cisco Webex messaging capabilities (messages, rooms, teams, people, webhooks, and enterprise features) to AI assistants.
- **[box/mcp-server-box-remote](https://github.com/box/mcp-server-box-remote)** `⭐ 6` `updated >1y` A remote MCP server that securely connects AI agents to Box content and Box AI without moving data out of Box.
- **[scan-mcp](https://github.com/jacksenechal/scan-mcp)** `⭐ 6` `updated ≤90d` MCP server for scanner capture, batching, and multipage document assembly on Linux SANE backends.
- **[AutomateLab-tech/content-distribution-mcp](https://github.com/automatelab-tech/content-distribution-mcp)** `⭐ 5` `updated ≤180d` An MCP server that automates multi-channel content distribution across platforms like DEV.to, Reddit, and Bluesky using idempotent publishing and platform-specific adaptation.
- **[conarti/mattermost-mcp](https://github.com/conarti/mattermost-mcp)** `⭐ 5` `updated ≤1y` Mattermost MCP server enabling Claude and other MCP clients to interact with Mattermost workspaces.
- **[Email Send MCP](https://github.com/yuhai0/email-send-mcp)** `⭐ 5` `updated >1y` A Model Context Protocol server that provides email sending and attachment search capabilities.
- **[GeiserX/telegram-archive-mcp](https://github.com/geiserx/telegram-archive-mcp)** `⭐ 5` `updated ≤30d` An MCP server that enables LLMs to search, browse, and access archived Telegram history via a Telegram-Archive instance.
- **[loglux/whatsapp-mcp-stream](https://github.com/loglux/whatsapp-mcp-stream)** `⭐ 5` `updated ≤90d` A WhatsApp MCP server that exposes WhatsApp functionality via Streamable HTTP transport using Baileys, with a web admin UI and media handling.
- **[Dissimilis/DirForge](https://github.com/dissimilis/dirforge)** `⭐ 4` `updated ≤180d` A stateless, read-only web application for browsing files on NAS or homelab systems with an integrated MCP server for AI assistants.
- **[ellmos-ai/ellmos-filecommander-mcp](https://github.com/ellmos-ai/ellmos-filecommander-mcp)** `⭐ 4` `updated ≤90d` A Model Context Protocol (MCP) server providing 44 filesystem and system tools for AI assistants, including safe delete, process management, interactive sessions, async search, OCR, ZIP, and Markdown/PDF export.
- **[posteverywhere/mcp](https://github.com/posteverywhere/mcp)** `⭐ 4` posteverywhere/mcp : Schedule and publish to Instagram, TikTok, YouTube, LinkedIn, Facebook, X, Threads, Pinterest, Bluesky, Discord and Telegram from natural language. Hosted MCP connector plus npm package.
- **[shahabazdev/inxmail-mcp](https://github.com/shahabazdev/inxmail-mcp)** `⭐ 4` `updated ≤180d` An MCP server that exposes the Inxmail Commerce transactional email API to Claude, allowing developers to trigger events, check delivery status, and manage blocklists via natural language prompts.
- **[axelfreeman/tapac-mcp](https://github.com/axelfreeman/tapac-mcp)** `⭐ 3` `updated ≤30d` MCP server that finds and verifies B2B contacts in real time (websites, Discord, Telegram) with SMTP validation — 2-5% bounce. npx -y @tapacapi/mcp.
- **[evc-team-relay-mcp](https://github.com/entire-vc/evc-team-relay-mcp)** `⭐ 3` `updated ≤90d` MCP server that enables AI agents to read and write Obsidian vault documents via the EVC Team Relay API.
- **[GeiserX/atlassian-browser-mcp](https://github.com/geiserx/atlassian-browser-mcp)** `⭐ 3` `updated ≤90d` An MCP server that uses Playwright to provide browser-based SSO authentication for the mcp-atlassian toolset.
- **[iprashantraj/mcp-discord-bridge](https://github.com/iprashantraj/mcp-discord-bridge)** `⭐ 3` `updated ≤180d` An MCP server that allows AI assistants to manage Discord servers, including channels, messages, roles, and moderation.
- **[mcp-agile-luminary](https://github.com/agileluminary/mcp-agile-luminary)** `⭐ 3` `updated >1y` An MCP server that connects AI clients like Cursor and Claude Desktop to the Agile Luminary project management system via its REST API.
- **[mcp-server](https://github.com/routineco/mcp-server)** `⭐ 3` `updated >1y` An MCP server that exposes the Routine.co productivity app as a tool to MCP-compatible clients like Claude Desktop.
- **[meetstream-ai/meetstream-mcp](https://github.com/meetstream-ai/meetstream-mcp)** `⭐ 3` meetstream-ai/meetstream-mcp : Sends AI bots into Zoom, Google Meet and Microsoft Teams to record, transcribe and summarize meetings. 19 tools covering bot lifecycle, transcripts, per-participant audio, live chat and calendar scheduling.
- **[mouse114514/Xadeus-QQ-MCP](https://github.com/mouse114514/xadeus-qq-mcp)** `⭐ 3` `updated ≤180d` An MCP server that connects AI agents to the QQ messaging platform via NapCatQQ.
- **[nitin27may/ms-graph-mcp](https://github.com/nitin27may/ms-graph-mcp)** `⭐ 3` nitin27may/ms-graph-mcp ☁️ - Microsoft Graph access to Outlook mail and calendar, Teams, OneDrive, SharePoint, OneNote, Planner and Entra ID.
- **[Py2755/aiogram-mcp](https://github.com/py2755/aiogram-mcp)** `⭐ 3` `updated ≤1y` A Python middleware library that exposes existing aiogram Telegram bots as MCP servers, allowing AI agents like Claude to send messages, read history, and manage interactive menus via the Model Context Protocol.
- **[andrewchmr/mxprobe](https://github.com/andrewchmr/mxprobe)** `⭐ 2` `updated ≤30d` Email verification for AI agents: send, hold or kill with the reason. CLI, MCP server and hosted API.
- **[arbengine/mailbox-mcp](https://github.com/arbengine/mailbox-mcp)** `⭐ 2` `updated ≤90d` An MCP server that enables AI agents to send physical postal mail and ingest inbound document scans via the mailbox.bot API.
- **[clawaimail](https://github.com/joansongjr/clawaimail)** `⭐ 2` `updated ≤1y` Email infrastructure for AI agents with REST API, MCP server, and SDKs for programmatic email control.
- **[cseguinlz/doubletick-cli](https://github.com/cseguinlz/doubletick-cli)** `⭐ 2` `updated ≤1y` CLI and MCP server for email read tracking via Gmail using the DoubleTick backend.
- **[GuruPDF/gurupdf-mcp](https://github.com/gurupdf/gurupdf-mcp)** `⭐ 2` `updated ≤180d` A free MCP server that converts, compresses, merges, and edits PDFs and over 100 other file formats for Claude, Cursor, VS Code, and other AI agents.
- **[jabbawocky/proposalcraft](https://github.com/jabbawocky/proposalcraft)** `⭐ 2` `updated ≤180d` An MCP server that drafts freelance project proposals from client briefs by mimicking the user's professional voice.
- **[juergenkoller-software/distill-mcp](https://github.com/juergenkoller-software/distill-mcp)** `⭐ 2` `updated ≤180d` An MCP server bridge that allows Claude and Cursor to rename files automatically based on their content using the Distill macOS app.
- **[LincolnBurrows2017/filesystem-mcp](https://github.com/lincolnburrows2017/filesystem-mcp)** `⭐ 2` `updated ≤1y` A Python-based Model Context Protocol (MCP) server that provides local file system operations like read, write, and search for AI assistants such as Claude and Cursor.
- **[multimail-dev/mcp-server](https://github.com/multimail-dev/mcp-server)** `⭐ 2` `updated ≤180d` An MCP server that provides AI agents with dedicated email addresses and configurable human oversight modes for sending and receiving messages.
- **[Sequenzy/mcp](https://github.com/sequenzy/mcp)** `⭐ 2` `updated ≤90d` MCP server for AI agents to operate Sequenzy lifecycle, campaign, and transactional email workflows.
- **[wazionapps/mcp-server](https://github.com/wazionapps/mcp-server)** `⭐ 2` `updated ≤1y` WAzion MCP Server is an MCP-compatible server that exposes 240+ tools for managing WhatsApp Business operations via the WAzion API.
- **[ExpertVagabond/solmail-mcp](https://github.com/expertvagabond/solmail-mcp)** `⭐ 1` `updated ≤1y` An MCP server that enables AI agents to send physical mail worldwide using Solana cryptocurrency for payment.
- **[getpoststack/mcp](https://github.com/getpoststack/mcp)** `⭐ 1` `updated ≤180d` An MCP server for the PostStack Email API that provides over 100 tools for AI agents to manage transactional email, contacts, and deliverability.
- **[giuliohome-org/doc-manager](https://github.com/giuliohome-org/doc-manager)** `⭐ 1` `updated ≤180d` A zero-knowledge document vault that exposes an MCP server to let AI assistants list, search, and update private documents.
- **[Hugo0/swarmmemo](https://github.com/hugo0/swarmmemo)** `⭐ 1` Hugo0/swarmmemo : Public message board for AI agents to read, post, reply and check replies since a saved cursor, over a hosted Streamable HTTP endpoint (https://swarmmemo.com/mcp) or plain HTTP.
- **[hushvert/mcp](https://github.com/hushvert/mcp)** `⭐ 1` hushvert/mcp : File conversion for AI agents via the hushvert hosted API - office docs to PDF, PDF to Word, document interchange (Markdown/HTML/EPUB/LaTeX), and audio/video transcodes. Tools: convert_file, convert_poll, list_formats, check_usage.
- **[ictinnovations/ictcrm-mcp](https://github.com/ictinnovations/ictcrm-mcp)** `⭐ 1` ictinnovations/ictcrm-mcp - ICTCRM, an open-source CRM with built-in telephony: read contact groups, with opt-in tools to create and delete contacts and add them to calling campaigns.
- **[kudosity/mcp](https://github.com/kudosity/mcp)** `⭐ 1` kudosity/mcp ️ ☁️ - Kudosity SMS, MMS and WhatsApp messaging: send messages, get delivery reports and replies, manage contacts and lists, configure webhooks and check balance.
- **[markmnl/fmsg-mcp](https://github.com/markmnl/fmsg-mcp)** `⭐ 1` markmnl/fmsg-mcp ☁️ - Give AI agents an address on fmsg, an open federated messaging protocol: inbox, threads, replies, reactions, attachments and waiting for new messages.
- **[mcp-autogen-doc](https://github.com/sykuang/mcp-autogen-doc)** `⭐ 1` `updated >1y` An MCP server that lets AI assistants search and retrieve Microsoft AutoGen documentation across versions, with fallback crawling when native search is unavailable.
- **[Misar-AI/misarblog-mcp](https://github.com/misar-ai/misarblog-mcp)** `⭐ 1` Misar-AI/misarblog-mcp : Manages a blog end to end — posts, media, categories, SEO metadata and traffic analytics. 23 tools. Run with npx -y @misarblog/mcp, or remotely at https://api.misar.io/blog/mcp.
- **[Misar-AI/misarmail-mcp](https://github.com/misar-ai/misarmail-mcp)** `⭐ 1` Misar-AI/misarmail-mcp : Sends and schedules transactional and campaign email, with contacts, lists, templates and delivery analytics. 54 tools. Run with npx -y @misarmail/mcp, or remotely at https://mail.misar.io/api/mcp.
- **[Misar-AI/misarreach-mcp](https://github.com/misar-ai/misarreach-mcp)** `⭐ 1` Misar-AI/misarreach-mcp : Runs cold-outreach campaigns — prospect lists, multi-step sequences, deliverability checks and reply tracking. 27 tools. Run with npx -y @misarreach/mcp, or remotely at https://api.misar.io/reach/mcp.
- **[mjaskolski/developer-toolkit-mcp](https://github.com/mjaskolski/developer-toolkit-mcp)** `⭐ 1` mjaskolski/developer-toolkit-mcp : Remote read-only MCP endpoint over 950+ AI-development guides (Cursor, Claude Code, Codex) in EN+PL — search and fetch full articles. No account, no API key. Streamable HTTP: https://developertoolkit.ai/mcp.
- **[pasteapp/paste-mcp](https://github.com/pasteapp/paste-mcp)** `⭐ 1` pasteapp/paste-mcp : Official local MCP server for Paste, the Mac clipboard manager. Search clipboard history, use copied items as context, and save output to pinboards.
- **[Pingfyr/mcp](https://github.com/pingfyr/mcp)** `⭐ 1` `updated ≤180d` MCP server for Pingfyr — schedule reminders from Claude and AI agents.
- **[qq418716640/botbell-mcp](https://github.com/qq418716640/botbell-mcp)** `⭐ 1` `updated ≤1y` An MCP server that lets Claude, Cursor, and other AI assistants send push notifications and receive replies from the BotBell iOS/Mac app.
- **[rchanllc/joltsms-mcp-server](https://github.com/rchanllc/joltsms-mcp-server)** `⭐ 1` `updated ≤1y` An MCP server that lets AI agents provision dedicated US phone numbers and receive SMS or OTP codes through standardized tool calls.
- **[shipmail-mcp](https://github.com/shipmail-to/shipmail-mcp)** `⭐ 1` `updated ≤90d` An MCP server that provides AI agents with access to Shipmail custom-domain business email mailboxes and APIs.
- **[SirGreed808/zoho-mail-mcp](https://github.com/sirgreed808/zoho-mail-mcp)** `⭐ 1` `updated ≤180d` A Model Context Protocol server that lets MCP clients like Claude read, search, and send email through a Zoho Mail account via REST API.
- **[Spix-HQ/spix-mcp](https://github.com/spix-hq/spix-mcp)** `⭐ 1` `updated ≤1y` A standalone MCP server that exposes Spix's communications infrastructure—phone calls, SMS, email, and contacts—as 43–49 tool calls for any MCP-compatible AI client.
- **[starnikovoleg/tgatlas-mcp](https://github.com/starnikovoleg/tgatlas-mcp)** `⭐ 1` starnikovoleg/tgatlas-mcp - Public Telegram channels without a user session: channel profiles, posts with view and forward counts, discussion threads and recommended channels.
- **[textbee/textbee-mcp](https://github.com/textbee/textbee-mcp)** `⭐ 1` textbee/textbee-mcp ☁️ - Send and read SMS through your own Android phone via textbee, the open-source SMS gateway, including replies, codes and delivery status.
- **[TheSameAbramovych/qmailing-mcp-server](https://github.com/thesameabramovych/qmailing-mcp-server)** `⭐ 1` `updated ≤180d` MCP server for QMailing - AI agents read & send email, manage mailboxes, custom domains and webhooks via the QMailing API.
- **[alebgl77/ftp-deploy-mcp](https://github.com/alebgl77/ftp-deploy-mcp)** `⭐ 0` `updated ≤30d` An MCP server that enables AI coding agents to deploy files via FTP, FTPS, or SFTP.
- **[Choppaaahh/sendgrid-mcp-secure](https://github.com/choppaaahh/sendgrid-mcp-secure)** `⭐ 0` `updated ≤30d` A security-hardened MCP server for the SendGrid API that implements two-phase sending, recipient allowlisting, and audit logging.
- **[convertica-net/convertica-mcp](https://github.com/convertica-net/convertica-mcp)** `⭐ 0` `updated ≤90d` MCP server that exposes Convertica's 35+ document and image conversion tools to Claude, Cursor, or any MCP client.
- **[csitte/mailwarden](https://github.com/csitte/mailwarden)** `⭐ 0` `updated ≤30d` A native Gmail MCP server providing full mailbox control, including mailbox-side snooze, for AI assistants.
- **[dockndevai/mcp-outlook](https://github.com/dockndevai/mcp-outlook)** `⭐ 0` `updated ≤30d` Safe-by-default MCP server for Microsoft Outlook mail (Microsoft Graph) — read, search, draft, send, reply, forward and organize email, with browser sign-in.
- **[drsound/markdown-to-whatsapp](https://github.com/drsound/markdown-to-whatsapp)** `⭐ 0` `updated ≤90d` Convert Markdown into WhatsApp formatting: tables drawn to fit the phone's monospace width. Web page, library, CLI and MCP server.
- **[giggal-ai/giggal-mcp](https://github.com/giggal-ai/giggal-mcp)** `⭐ 0` `updated ≤90d` Official MCP server for Giggal.ai: catch-all, accept-all, and SEG-protected email verification for Claude, ChatGPT, Cursor, and other MCP clients.
- **[gopalrajsuresh/covalent-bond](https://github.com/gopalrajsuresh/covalent-bond)** `⭐ 0` `updated ≤30d` A peer-to-peer, end-to-end encrypted communication channel for AI coding agents using the Model Context Protocol.
- **[huangdun/tempmd-mcp](https://github.com/huangdun/tempmd-mcp)** `⭐ 0` `updated ≤90d` MCP server for temp.md — one stable public link for agent-made artifacts, updated in place.
- **[jaimenbell/discord-mcp](https://github.com/jaimenbell/discord-mcp)** `⭐ 0` jaimenbell/discord-mcp ☁️ - MCP server over the Discord REST API: read-only tools for listing channels, categories, roles, member roles and permission overwrites, plus write tools for channel, role, guild and message management that stay gated off by default. pip install jaimenbell-discord-mcp.
- **[JulienRabault/icloud-mcp](https://github.com/julienrabault/icloud-mcp)** `⭐ 0` JulienRabault/icloud-mcp - iCloud Mail over IMAP and SMTP: search all folders, rebuild threads, save attachments, draft replies and file messages by rule, without marking mail as read.
- **[kojott/mailmcp-dist](https://github.com/kojott/mailmcp-dist)** `⭐ 0` kojott/mailmcp-dist ☁️ - Self-hosted email for multiple Gmail, iCloud, Fastmail or IMAP/SMTP accounts: search, read, threaded replies, drafts, allowlisted sending and attachments.
- **[lettio-eu/mcp](https://github.com/lettio-eu/mcp)** `⭐ 0` lettio-eu/mcp ☁️ - Private, EU-hosted email for AI agents over JMAP: read, search, reply in-thread, organize and send, with sending pinned to the signed-in mailbox.
- **[LimzoCom/limzo-mcp](https://github.com/limzocom/limzo-mcp)** `⭐ 0` LimzoCom/limzo-mcp ️ ☁️ - Read-only stats for public Telegram groups tracked by the Limzo anti-spam bot: leaderboards, activity trends, member levels and moderation summaries.
- **[ma2no4413/outlook-mcp](https://github.com/ma2no4413/outlook-mcp)** `⭐ 0` ma2no4413/outlook-mcp - Restructure large Outlook/Hotmail mailboxes: move folder subtrees, bulk move and mark-read with dry-run previews, and manage inbox rules. Cannot send mail.
- **[meharajM/whatsapp-mcp](https://github.com/meharajm/whatsapp-mcp)** `⭐ 0` meharajM/whatsapp-mcp : Human-in-the-loop approvals and notifications for AI agents via WhatsApp. Enables Cursor, Claude Code, and autonomous AI agents to reach users when they are away from their computers.
- **[Metaverse-Cloud/engagelab-email-mcp](https://github.com/metaverse-cloud/engagelab-email-mcp)** `⭐ 0` Metaverse-Cloud/engagelab-email-mcp ☁️ - Send, receive, monitor and reply to email with thread context via EngageLab Email.
- **[minosin/gtdbrain-claude-plugin](https://github.com/minosin/gtdbrain-claude-plugin)** `⭐ 0` minosin/gtdbrain-claude-plugin : Getting Things Done board for ChatGPT, Claude, Cursor and Gemini: capture, next actions by context, projects, waiting-for and weekly review over a hosted remote MCP endpoint at https://mcp.gtdbrain.com/api/gtdbrain/v1/mcp (Streamable HTTP, OAuth 2.1). Setup guides.
- **[ni-c/caldav-mcp](https://github.com/ni-c/caldav-mcp)** `⭐ 0` ni-c/caldav-mcp ☁️ - Events, tasks and journal entries on any CalDAV server (Radicale, Nextcloud, Fastmail, iCloud), with a calendar allowlist and approval for series changes.
- **[ni-c/carddav-mcp](https://github.com/ni-c/carddav-mcp)** `⭐ 0` ni-c/carddav-mcp ☁️ - Contacts, groups and photos on any CardDAV server (Radicale, Baikal, Nextcloud, Fastmail, iCloud), with ETag-guarded writes and an address book allowlist.
- **[ni-c/smtp-mcp](https://github.com/ni-c/smtp-mcp)** `⭐ 0` ni-c/smtp-mcp - Send, reply to and forward mail over SMTP, restricted to a recipient allowlist, with each message approved by a person before sending.
- **[sendchamp/ai](https://github.com/sendchamp/ai)** `⭐ 0` sendchamp/ai ️ ☁️ - Official Sendchamp docs MCP server for AI coding agents. Read-only search and retrieval over SMS, OTP verification, and Africa-specific routing documentation. Endpoint: https://mcp.sendchamp.com/docs. Pair with Agent Skills via npx skills add sendchamp/ai.
- **[shichuanqiong/AgoraDM](https://github.com/shichuanqiong/agoradm)** `⭐ 0` shichuanqiong/AgoraDM ☁️ - Direct messaging for AI agents over the A2A protocol: inbox, friend list, group threads and per-friend memory for real-time chats with other people's agents.
- **[signbee/mcp](https://github.com/signbee/mcp)** `⭐ 0` signbee/mcp : Document signing for AI agents — send markdown or PDF contracts for two-party e-signing with certified delivery.
- **[snow884/adam-network](https://github.com/snow884/adam-network)** `⭐ 0` snow884/adam-network : Messaging board for AI agents and humans with a local stdio and hosted SSE/Streamable HTTP MCP server for reading, searching, posting and replying to threaded messages, with proof-of-work anti-spam.
- **[sounny/sounnyforms-mcp](https://github.com/sounny/sounnyforms-mcp)** `⭐ 0` sounny/sounnyforms-mcp ️ ☁️ - Serverless form backend, lead triage and contact form generator for static sites, React and JAMstack apps.
- **[tempmd/tempmd-mcp](https://github.com/tempmd/tempmd-mcp)** `⭐ 0` huangdun/tempmd-mcp ☁️ - Publish HTML, Markdown, CSV or Mermaid artifacts to temp.md under a stable public link that updates in place, with activity-based expiry.
- **[theluckystrike/mcp-servers](https://github.com/theluckystrike/mcp-servers)** `⭐ 0` theluckystrike/mcp-servers : Office-suite bundle of MCP servers for freelance and back-office work: invoices, spreadsheets, PDFs, time tracking, expense tracking, resumes, contracts, and more. Hosted option at mcp.zovo.one.
- **[vaemail/vaemail-mcp](https://github.com/vaemail/vaemail-mcp)** `⭐ 0` vaemail/vaemail-mcp ☁️ - Send transactional email, authenticate sending domains, track delivery and diagnose deliverability, with scoped API keys and dry-run mode.
- **[windborne/zulipmcp](https://github.com/windborne/zulipmcp)** `⭐ 0` `updated ≤180d` Run AI agents in Zulip as @mentionable bots or wire into any MCP client.
- **[YS-projectcalc/agent-cold-email](https://github.com/ys-projectcalc/agent-cold-email)** `⭐ 0` YS-projectcalc/agent-cold-email ️ ☁️ - Coldrig cold-email infrastructure run by your agent: buy domains, provision mailboxes, warm up, run sequences and handle replies.
- **[zerodrop-dev/zerodrop-mcp](https://github.com/zerodrop-dev/zerodrop-mcp)** `⭐ 0` zerodrop-dev/zerodrop-mcp ☁️ - Disposable email inboxes for AI agents with automatic OTP and magic-link extraction, for testing signups and auth flows.
- **[DeepWiki by Devin](https://docs.devin.ai/work-with-devin/deepwiki-mcp)** An MCP server that provides Devin with access to DeepWiki's knowledge base.
- **[Wassenger](https://wassenger.com)** A WhatsApp Business platform with AI automation, team inbox, and MCP server integration for connecting AI assistants like Claude and ChatGPT.

</details>

## Middleware & Generic

- **[modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)** `⭐ 91k` `updated ≤90d` The official collection of Model Context Protocol reference server implementations and community server references maintained by the MCP steering group. <details><summary>More about</summary>

  Developers building MCP-compatible tools can study these servers as canonical examples of SDK usage and secure tool-data integration patterns for LLMs.

  _Yet another perfectly reasonable standard that will spawn 4,000 incompatible community forks before anyone agrees on what 'reference implementation' actually means._

  `mcp` `servers` `reference` `protocol` `sdk`
  </details>
- **[Higress](https://github.com/higress-group/higress)** `⭐ 9.5k` `updated ≤90d` AI-native API gateway built on Envoy and Istio that supports MCP server hosting and unified management of LLM and MCP APIs. <details><summary>More about</summary>

  Developers can use it to expose, manage, and scale AI model APIs and MCP servers with cloud-native reliability and plugin extensibility.

  _Now you can turn any OpenAPI spec into an MCP server and pretend your legacy APIs were always part of the agent ecosystem._

  `api-gateway` `mcp` `cloud-native` `ai-infra` `envoy`
  </details>
- **[Peekaboo](https://github.com/openclaw/peekaboo)** `⭐ 5.2k` `updated ≤90d` A macOS CLI and optional MCP server that captures screenshots, analyzes them with local or remote AI models, and automates GUI interactions via natural-language agent flows. <details><summary>More about</summary>

  It gives coding agents and MCP-compatible editors direct visual access to macOS screen state, enabling richer automation workflows that were previously blind to UI context.

  _Yet another layer in the stack where your AI can now see your desktop, judge your messy browser tabs, and click things you probably wish it wouldn't._

  `macos` `mcp` `gui-automation` `screen-capture` `cli`
  </details>
- **[exa-labs/exa-mcp-server](https://github.com/exa-labs/exa-mcp-server)** `⭐ 5.1k` `updated ≤90d` An MCP server that connects AI assistants to Exa's web search, code search, and company research capabilities. <details><summary>More about</summary>

  It provides LLMs with real-time, high-quality web and code search context through a standardized protocol.

  _Because your coding assistant didn't have enough ways to hallucinate facts from the live internet before._

  `mcp` `web-search` `search-api` `context-retrieval`
  </details>
- **[mcpo](https://github.com/open-webui/mcpo)** `⭐ 4.4k` `updated ≤180d` A simple, secure proxy server that exposes MCP tools as standard OpenAPI-compatible HTTP endpoints. <details><summary>More about</summary>

  It allows developers to make any MCP server instantly usable by standard OpenAPI tooling, LLM agents, and UIs without writing custom glue code.

  _We have reached the point where we need a proxy just to unify the infinite protocols we invented to avoid unifying protocols._

  `mcp` `openapi` `proxy` `interoperability`
  </details>
- **[microsoft/mcp](https://github.com/microsoft/mcp)** `⭐ 3.7k` `updated ≤90d` A Microsoft-maintained catalog and engineering system for building official MCP (Model Context Protocol) servers, including Azure and Fabric integrations. <details><summary>More about</summary>

  It provides the scaffolding, shared libraries, and release pipelines needed to build consistent MCP servers that connect AI tools to Microsoft data platforms.

  _Just when you thought the protocol wars were over, Microsoft gives you an official starter pack so you can spend your weekend debating whether an Azure resource group should be exposed as a tool or a resource._

  `mcp` `microsoft` `protocol` `servers` `azure`
  </details>
- **[grafana/mcp-grafana](https://github.com/grafana/mcp-grafana)** `⭐ 3.5k` `updated ≤30d` An MCP server that provides access to Grafana instances and their ecosystem for AI assistants. <details><summary>More about</summary>

  Lets coding assistants query, modify, and interact with Grafana dashboards, datasources, and metrics directly through the Model Context Protocol.

  _Now your AI can argue with your dashboards about why that p99 spike is definitely not its fault._

  `mcp` `grafana` `monitoring` `observability` `server`
  </details>
- **[blazickjp/arxiv-mcp-server](https://github.com/blazickjp/arxiv-mcp-server)** `⭐ 3.2k` `updated ≤90d` A Model Context Protocol server that enables AI assistants to search and analyze arXiv papers. <details><summary>More about</summary>

  Developers can programmatically integrate arXiv paper search and retrieval into their AI workflows, expanding context for research-oriented coding tasks.

  _Now your AI can cite papers it doesn’t understand, just like the rest of us._

  `mcp` `arxiv` `research` `context-protocol` `python`
  </details>
- **[metamcp](https://github.com/metatool-ai/metamcp)** `⭐ 2.7k` `updated ≤180d` MetaMCP is a Dockerized MCP aggregator, orchestrator, middleware, and gateway that unifies multiple MCP servers into a single MCP server endpoint. <details><summary>More about</summary>

  It simplifies MCP client configuration by letting developers connect to many MCP servers through one unified interface, reducing integration complexity.

  _Yet another MCP abstraction layer that turns protocol interoperability into a YAML-configurable microservices nightmare._

  `mcp` `orchestration` `middleware` `docker` `aggregator`
  </details>
- **[brightdata-mcp](https://github.com/brightdata/brightdata-mcp)** `⭐ 2.7k` `updated ≤30d` Bright Data MCP is a Model Context Protocol server providing web search, page scraping, structured data extraction, and browser automation tools for AI agents. <details><summary>More about</summary>

  It gives AI agents reliable, real-time access to public web data without requiring developers to handle bot detection, CAPTCHAs, or proxy management.

  _Now your LLM can scrape TikTok trends while you pretend it's for market research and not doomscrolling._

  `mcp` `web-scraping` `data-extraction` `browser-automation` `ai-agents`
  </details>
- **[tavily-mcp](https://github.com/tavily-ai/tavily-mcp)** `⭐ 2.4k` `updated ≤90d` A Model Context Protocol server that exposes Tavily's real-time web search, extraction, mapping, and crawling capabilities to MCP-compatible AI coding assistants and agents. <details><summary>More about</summary>

  It allows coding agents like Claude Code and Cline to fetch live web data, turning a isolated repo-editing assistant into one that can research current documentation and APIs.

  _Yet another layer in the stack where your code editor now needs an API key, a proxy server, and a protocol handshake just to Google something for you._

  `mcp` `web-search` `context-tools` `agent-integration`
  </details>
- **[ToolHive](https://github.com/stacklok/toolhive)** `⭐ 2.2k` `updated ≤90d` ToolHive is an open-source platform for running and managing Model Context Protocol (MCP) servers in isolated containers with identity enforcement and observability. <details><summary>More about</summary>

  It lets developers and platform teams self-host and secure MCP servers, integrating them with clients like Claude Code and Cursor while adding policy controls and token-saving semantic search.

  _Finally, the Kafka of MCP: a dedicated platform to manage the growing sprawl of local servers that were supposed to simplify your AI workflow._

  `mcp` `security` `kubernetes` `self-hosted` `infrastructure`
  </details>
- **[flux159/mcp-server-kubernetes](https://github.com/flux159/mcp-server-kubernetes)** `⭐ 1.6k` `updated ≤30d` An MCP server that allows AI assistants to interact with and manage Kubernetes clusters via kubectl. <details><summary>More about</summary>

  It enables AI coding agents to perform infrastructure tasks like inspecting pods, managing deployments, and running Helm commands directly from the chat interface.

  _Nothing quite prepares you for the existential dread of an LLM accidentally deleting your production namespace during a routine debug session._

  `mcp` `kubernetes` `infrastructure` `devops` `automation`
  </details>
- **[hashicorp/terraform-mcp-server](https://github.com/hashicorp/terraform-mcp-server)** `⭐ 1.5k` `updated ≤90d` An MCP server that integrates Terraform Registry APIs, HCP Terraform, and Terraform Enterprise for Infrastructure as Code workflows. <details><summary>More about</summary>

  It enables AI assistants to interact with Terraform workspaces, modules, and registries directly, streamlining IaC automation and management.

  _Now your AI can spin up cloud resources while you frantically check if it remembered the right variables._

  `mcp` `terraform` `infrastructure-as-code` `hashicorp` `automation`
  </details>
- **[brave/brave-search-mcp-server](https://github.com/brave/brave-search-mcp-server)** `⭐ 1.5k` `updated ≤30d` brave/brave-search-mcp-server : Official Brave Search MCP server for web, local, image, video, and news search, plus AI summarization, via the Brave Search API.
- **[ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** `⭐ 1.5k` `updated ≤90d` An MCP server that bridges large language models with robots running ROS or ROS2, enabling bidirectional control and observation without modifying robot source code. <details><summary>More about</summary>

  It lets developers use familiar MCP-compatible assistants like Claude and Cursor to directly control, debug, and monitor robots through natural language rather than traditional ROS tooling.

  _We have finally achieved the singularity where you can ask Claude Desktop to segfault your industrial manipulator in natural language._

  `mcp` `robotics` `ros` `ros2` `hardware`
  </details>
- **[MCPJungle](https://github.com/mcpjungle/mcpjungle)** `⭐ 1.3k` `updated ≤90d` A self-hosted MCP gateway that lets developers register multiple MCP servers once and expose them through a single endpoint for AI clients like Claude and Cursor. <details><summary>More about</summary>

  It centralizes MCP server management, discovery, and access control so teams no longer have to duplicate client configurations across every AI tool they use.

  _Because nothing says streamlined developer experience like deploying a dedicated gateway just to manage the growing menagerie of gateways your MCP servers already spawned._

  `mcp` `gateway` `self-hosted` `infrastructure`
  </details>
- **[mcp-searxng](https://github.com/ihor-sokoliuk/mcp-searxng)** `⭐ 1.3k` `updated ≤90d` An MCP server that integrates SearXNG to provide private web search capabilities for AI assistants like Claude and Cursor. <details><summary>More about</summary>

  It enables AI coding assistants to perform web searches and read URL content through a self-hosted, privacy-preserving SearXNG instance.

  _Now your AI can finally Google things for you—just don’t ask it to explain why it needed to._

  `mcp-server` `web-search` `privacy` `self-hosted` `ai-integration`
  </details>
- **[Web Search MCP](https://github.com/mrkrsl/web-search-mcp)** `⭐ 1.2k` `updated >1y` A locally hosted TypeScript MCP server that provides multi-engine web search and full-page content extraction tools for local LLMs via direct browser and HTTP connections. <details><summary>More about</summary>

  It gives local coding assistants the ability to fetch fresh documentation and search results without requiring external API keys or cloud dependencies.

  _We have reached the point where our local models need their own middleware just to argue with Bing and DuckDuckGo on our behalf._

  `mcp` `local-llm` `web-search` `typescript` `librechat`
  </details>
- **[TencentCloudBase/CloudBase-AI-ToolKit](https://github.com/tencentcloudbase/cloudbase-ai-toolkit)** `⭐ 1.1k` TencentCloudBase/CloudBase-AI-ToolKit ☁️ - One-stop backend services for WeChat Mini-Programs and full-stack apps. Provides specialized MCP tools for serverless cloud functions, databases, and one-click deployment to production with China market access through WeChat ecosystem.
- **[chatmcp/mcp-server-chatsum](https://github.com/chatmcp/mcp-server-chatsum)** `⭐ 1k` `updated >1y` An MCP server that queries and summarizes chat messages from a local chat database. <details><summary>More about</summary>

  Developers can retrieve and distill past chat history as context for AI assistants without manual copy-pasting.

  _Now you can finally prove to your AI that you did, in fact, ask it to fix that bug yesterday._

  `mcp-server` `chat-history` `context-retrieval` `summarization`
  </details>
- **[mcpm.sh](https://github.com/pathintegral-institute/mcpm.sh)** `⭐ 1k` `updated ≤180d` A CLI package manager and registry for discovering, configuring, and routing MCP servers across multiple AI coding clients like Claude Desktop, Cursor, and Windsurf. <details><summary>More about</summary>

  It centralizes the fragmented MCP ecosystem into a single global configuration, letting developers manage server profiles and client integrations without editing JSON files by hand.

  _Finally, a package manager for the protocol that manages the tools that manage the AI that manages to break your build—progress is a stack of indirection._

  `mcp` `cli` `package-manager` `registry` `router`
  </details>
- **[opentabs-dev/opentabs](https://github.com/opentabs-dev/opentabs)** `⭐ 966` `updated ≤90d` OpenTabs is a local CLI and Chrome extension that bridges authenticated browser sessions to MCP clients, allowing AI agents to call real web APIs without browser automation or OAuth setup. <details><summary>More about</summary>

  It lets developers give their coding agents real, authenticated access to services like Slack, GitHub, and Jira via your existing browser session instead of brittle DOM scraping or API key management.

  _Finally, a way for your AI to passively inherit your browser cookie jar so it can post to Discord and Star a repo while you sip coffee and wonder when you agreed to be the human middleware._

  `mcp` `browser-automation` `cli` `chrome-extension` `api-bridge`
  </details>
- **[MCP-Bridge](https://github.com/secretiveshell/mcp-bridge)** `⭐ 928` `updated ≤1y` A middleware server that exposes Model Context Protocol (MCP) tools through an OpenAI-compatible API endpoint, allowing standard OpenAI clients to call MCP servers. <details><summary>More about</summary>

  It lets developers use any MCP tool with existing OpenAI-API-compatible clients and local inference engines like vLLM or Ollama without waiting for native MCP support.

  _We have collectively built a bridge to help new protocols talk to old protocols so we don't have to admit that our clients are still hard-coded to 2023 APIs._

  `mcp` `openai-api` `middleware` `self-hosted`
  </details>
- **[HelpCode-ai/anythingmcp](https://github.com/helpcode-ai/anythingmcp)** `⭐ 744` `updated ≤90d` A self-hosted MCP gateway that converts REST, SOAP, GraphQL, and SQL databases into Model Context Protocol connectors. <details><summary>More about</summary>

  It enables developers to instantly expose existing APIs and databases as tools for AI assistants like Claude and Cursor without writing custom MCP server code.

  _Because now you can finally let your LLM accidentally drop a production table via a 'no-code' REST connector._

  `mcp` `api-gateway` `self-hosted` `no-code` `connectors`
  </details>
- **[joaoh82/rustunnel](https://github.com/joaoh82/rustunnel)** `⭐ 657` `updated ≤90d` A self-hosted, Rust-based tunneling service that includes an MCP server to expose local network services to AI agents. <details><summary>More about</summary>

  It allows AI agents to interact with, test, and trigger local webhooks and APIs through secure, encrypted tunnels.

  _Because your agent definitely needs a TLS-encrypted tunnel to realize your localhost:3000 is throwing a 500 error._

  `rust` `tunneling` `mcp` `self-hosted` `networking`
  </details>
- **[genomoncology/biomcp](https://github.com/genomoncology/biomcp)** `⭐ 646` `updated ≤30d` BioMCP is a Model Context Protocol (MCP) server that provides unified access to biomedical data sources like PubMed and Europe PMC. <details><summary>More about</summary>

  It enables AI agents to perform complex biomedical research, literature searches, and cross-entity pivots using a single command grammar instead of navigating disparate APIs.

  _Because why manually parse PubMed when you can let an agent hallucinate a medical hypothesis based on a single command?_

  `mcp` `bioinformatics` `biomedical` `research` `data-integration`
  </details>
- **[fabio-rovai/open-ontologies](https://github.com/fabio-rovai/open-ontologies)** `⭐ 548` `updated ≤90d` A Rust-based MCP server and desktop Studio for building, validating, and reasoning over RDF/OWL ontologies using an in-memory triple store. <details><summary>More about</summary>

  It provides LLMs with structured, verifiable reasoning capabilities over complex knowledge graphs without requiring a heavy JVM setup.

  _Because nothing says 'odern dev workflow' quite like debugging semantic reasoning errors in a terminal-integrated ontology engine._

  `mcp` `rust` `ontology` `knowledge-graph` `sparql`
  </details>
- **[mcp-youtube](https://github.com/anaisbetts/mcp-youtube)** `⭐ 546` `updated ≤90d` An MCP server that uses yt-dlp to fetch YouTube subtitles for use in Model Context Protocol-compatible assistants. <details><summary>More about</summary>

  It enables LLMs to ingest and reason over YouTube video content by providing subtitles as structured context.

  _Because nothing says 'cutting-edge developer workflow' like piping subtitle streams into a chat box to avoid actually watching a video._

  `mcp` `youtube` `context-retrieval` `subtitles`
  </details>
- **[pab1it0/prometheus-mcp-server](https://github.com/pab1it0/prometheus-mcp-server)** `⭐ 517` `updated ≤90d` A Model Context Protocol server that enables AI assistants and LLMs to query and analyze Prometheus metrics using PromQL through standardized interfaces. <details><summary>More about</summary>

  It lets developers point their existing AI tools at production observability data so models can directly investigate incidents and reason over real metrics.

  _You can now ask your AI to explain why the latency is spiking, only to discover it has strong opinions about metrics it can finally read but still can't fix the code._

  `mcp` `prometheus` `observability` `devops`
  </details>

<details><summary><strong>▸ &nbsp;&nbsp;+434 more in Middleware & Generic &nbsp;—&nbsp; click to expand</strong></summary>

- **[agent](https://github.com/1mcp-app/agent)** `⭐ 510` `updated ≤30d` A unified Model Context Protocol (MCP) server implementation that aggregates multiple MCP servers into a single runtime.
- **[lunar](https://github.com/thelunarcompany/lunar)** `⭐ 503` `updated ≤90d` Lunar.dev is an open-source API gateway and MCP aggregator that governs, monitors, and shapes outbound AI agent traffic, including rate limiting, cost tracking, and unified MCP server access.
- **[vibe-check-mcp-server](https://github.com/pv-bhat/vibe-check-mcp-server)** `⭐ 502` `updated ≤180d` An MCP server that acts as a mentor layer for AI agents, interrupting long-horizon workflows to prevent over-engineering and reasoning lock-in.
- **[Orkas-AI/Orkas-VideoStudio](https://github.com/orkas-ai/orkas-videostudio)** `⭐ 497` Orkas-AI/Orkas-VideoStudio : Local-first MCP server and CLI for planning and rendering videos from editable timelines.
- **[pskill9/web-search](https://github.com/pskill9/web-search)** `⭐ 471` `updated >1y` A Model Context Protocol server that provides free web search via Google results without requiring API keys.
- **[cisco-open/network-sketcher](https://github.com/cisco-open/network-sketcher)** `⭐ 400` `updated ≤30d` An AI-native network design tool that generates L1/L2/L3 topology diagrams and configuration data through natural language and MCP.
- **[smart-mcp-proxy/mcpproxy-go](https://github.com/smart-mcp-proxy/mcpproxy-go)** `⭐ 381` `updated ≤90d` An open-source, local-first proxy server and desktop app that federates hundreds of MCP servers behind a single endpoint with tool retrieval, token compression, and security quarantine.
- **[graphlit/graphlit-mcp-server](https://github.com/graphlit/graphlit-mcp-server)** `⭐ 379` `updated ≤1y` An MCP server that connects MCP clients to the Graphlit platform for knowledge ingestion, retrieval, and RAG workflows.
- **[bloodhound-mcp-ai](https://github.com/mordavid/bloodhound-mcp-ai)** `⭐ 377` `updated >1y` An MCP server that connects BloodHound to AI models, allowing security professionals to query Active Directory attack paths and security posture using natural language instead of Cypher queries.
- **[mamertofabian/mcp-everything-search](https://github.com/mamertofabian/mcp-everything-search)** `⭐ 365` `updated ≤1y` MCP server providing cross-platform file search via Everything SDK (Windows), mdfind (macOS), and locate/plocate (Linux).
- **[CheMiguel23/MemoryMesh](https://github.com/chemiguel23/memorymesh)** `⭐ 353` `updated ≤1y` A knowledge graph server using the Model Context Protocol (MCP) to provide structured memory persistence for AI models.
- **[interactive-mcp](https://github.com/ttommyth/interactive-mcp)** `⭐ 352` `updated ≤1y` interactive-mcp is a local Node.js/TypeScript MCP server that enables AI agents to request user input, display notifications, and manage persistent chat sessions via the Model Context Protocol.
- **[recursechat/mcp-server-apple-shortcuts](https://github.com/recursechat/mcp-server-apple-shortcuts)** `⭐ 351` `updated >1y` An MCP server that lets AI assistants like Claude list and trigger Apple Shortcuts automations on macOS.
- **[mcpcontrol](https://github.com/claude-did-this/mcpcontrol)** `⭐ 331` `updated ≤1y` MCP server for Windows OS automation, enabling programmatic control of mouse, keyboard, window management, and screen capture.
- **[lyonzin/knowledge-rag](https://github.com/lyonzin/knowledge-rag)** `⭐ 290` `updated ≤90d` Local RAG MCP server for Claude Code that provides hybrid search (semantic + BM25), cross-encoder reranking, and 12 MCP tools for searching local documents and code.
- **[hustcc/mcp-echarts](https://github.com/hustcc/mcp-echarts)** `⭐ 269` `updated ≤1y` An MCP server that dynamically generates ECharts visualizations for chart generation and data analysis.
- **[hannesrudolph/mcp-ragdocs](https://github.com/hannesrudolph/mcp-ragdocs)** `⭐ 265` `updated >1y` An MCP server that enables AI assistants to retrieve and process documentation via vector search for context augmentation.
- **[btsouth/toolport](https://github.com/btsouth/toolport)** `⭐ 221` `updated ≤30d` A local-first gateway for managing and sharing Model Context Protocol (MCP) servers across multiple AI clients.
- **[tsouth89/toolport](https://github.com/tsouth89/toolport)** `⭐ 221` `updated ≤90d` Local-first MCP gateway. One port for every tool and every AI client: lazy discovery (~90% token savings), tool integrity + quarantine, secrets in the OS keychain.
- **[andybrandt/mcp-simple-arxiv](https://github.com/andybrandt/mcp-simple-arxiv)** `⭐ 201` `updated ≤1y` An MCP server that exposes arXiv search, paper metadata, and full-text PDF-to-Markdown retrieval to LLM clients.
- **[quarkus-mcp-servers](https://github.com/quarkiverse/quarkus-mcp-servers)** `⭐ 196` `updated ≤180d` A collection of Model Context Protocol servers implemented in Java using the Quarkus framework, providing capabilities like JDBC database access, filesystem operations, Kubernetes interaction, and container management.
- **[freema/openclaw-mcp](https://github.com/freema/openclaw-mcp)** `⭐ 185` `updated ≤90d` MCP server that bridges Claude.ai with self-hosted OpenClaw assistant via OAuth2 for secure tool access.
- **[gbox](https://github.com/babelcloud/gbox)** `⭐ 181` `updated ≤90d` CLI and MCP server enabling AI agents to operate Android, browser, and desktop environments like a human.
- **[agiletec-inc/airis-mcp-gateway](https://github.com/agiletec-inc/airis-mcp-gateway)** `⭐ 171` `updated ≤30d` agiletec-inc/airis-mcp-gateway : Docker-based MCP multiplexer exposing 60+ tools through 7 meta-tools. Reduces context tokens by 97%. One-command setup, auto-enables servers on demand.
- **[entanglr/zettelkasten-mcp](https://github.com/entanglr/zettelkasten-mcp)** `⭐ 164` `updated >1y` An MCP server implementing the Zettelkasten knowledge management methodology for creating, linking, and synthesizing atomic notes via Claude and other MCP-compatible clients.
- **[mcp-server-calculator](https://github.com/githejie/mcp-server-calculator)** `⭐ 159` `updated ≤90d` A Model Context Protocol server that enables LLMs to perform precise numerical calculations via a calculate tool.
- **[OpenDataMCP/OpenDataMCP](https://github.com/opendatamcp/opendatamcp)** `⭐ 154` `updated >1y` A Python CLI and registry for scaffolding MCP servers that expose open public datasets as tools and resources to LLM clients like Claude Desktop.
- **[Magg](https://github.com/sitbon/magg)** `⭐ 144` `updated ≤180d` Magg is a meta-MCP server that acts as a central hub, proxy, and manager for dynamically discovering, configuring, and aggregating other MCP servers at runtime.
- **[cameronrye/openzim-mcp](https://github.com/cameronrye/openzim-mcp)** `⭐ 143` `updated ≤30d` OpenZIM MCP is a Model Context Protocol server that enables AI models to access and search ZIM format knowledge bases offline.
- **[gaopengbin/cesium-mcp](https://github.com/gaopengbin/cesium-mcp)** `⭐ 138` `updated ≤30d` An MCP server and bridge that provides natural language control over CesiumJS 3D geospatial visualizations.
- **[VeriTeknik/pluggedin-mcp-proxy](https://github.com/veriteknik/pluggedin-mcp-proxy)** `⭐ 135` `updated ≤180d` Plugged.in MCP Proxy aggregates multiple MCP servers into a single unified interface with knowledge, memory, and tool routing capabilities.
- **[JamesANZ/medical-mcp](https://github.com/jamesanz/medical-mcp)** `⭐ 114` `updated ≤180d` An MCP server that provides access to authoritative medical APIs (FDA, WHO, PubMed, RxNorm, Google Scholar) for AI workflows.
- **[PatrickPalmer/MayaMCP](https://github.com/patrickpalmer/mayamcp)** `⭐ 105` `updated >1y` An MCP server that exposes Autodesk Maya scene objects, modeling operations, and scene management to AI assistants like Claude Desktop via natural language.
- **[BrightbeamAI/chap](https://github.com/brightbeamai/chap)** `⭐ 104` `updated ≤30d` An open protocol and runtime for creating auditable, hash-linked logs of human-agent interactions such as approvals, overrides, and handoffs.
- **[mcp-server](https://github.com/harness/mcp-server)** `⭐ 104` `updated ≤90d` An MCP server that provides AI agents with consolidated access to the Harness.io platform via 11 tools and 168 resource types.
- **[needle-mcp](https://github.com/needle-ai/needle-mcp)** `⭐ 103` `updated >1y` An MCP server that lets Claude Desktop and Cursor expose Needle's document storage and semantic search capabilities as tools for RAG-style workflows.
- **[ChristianHinge/dicom-mcp](https://github.com/christianhinge/dicom-mcp)** `⭐ 101` `updated ≤90d` An MCP server that enables AI assistants to query, read, and move data on DICOM servers (PACS, VNA, etc.).
- **[portel-dev/ncp](https://github.com/portel-dev/ncp)** `⭐ 100` `updated ≤180d` NCP (Natural Context Provider) is an MCP aggregator and middleware layer that unifies multiple MCP servers behind a minimal interface of smart search and code-mode execution to reduce tool-choice overhead and token waste.
- **[mcp-victorialogs](https://github.com/victoriametrics/mcp-victorialogs)** `⭐ 98` `updated ≤90d` MCP server for VictoriaLogs providing read-only access to logs and observability data via the Model Context Protocol.
- **[pzfreo/build123d-mcp](https://github.com/pzfreo/build123d-mcp)** `⭐ 97` `updated ≤90d` MCP server for build123d to improve AI cognition when creating 3D CAD models.
- **[kunwar-shah/claudex](https://github.com/kunwar-shah/claudex)** `⭐ 95` `updated ≤180d` Claudex is an MCP server with persistent memory and FTS5 search for Claude Code conversation history, providing a web UI to browse and search ~/.claude/projects/.
- **[seekrays/mcp-monitor](https://github.com/seekrays/mcp-monitor)** `⭐ 91` `updated >1y` A system monitoring tool that exposes CPU, memory, disk, network, host, and process metrics via the Model Context Protocol (MCP) for LLM consumption.
- **[ros2_mcp](https://github.com/wise-vision/ros2_mcp)** `⭐ 89` `updated ≤90d` ROS2 MCP Server is a Python implementation of the Model Context Protocol that enables AI tooling to interact with ROS 2 nodes, topics, and services via stdio transport.
- **[codeofaxel/Kiln](https://github.com/codeofaxel/kiln)** `⭐ 88` `updated ≤30d` An open-source MCP server that enables AI agents to design, slice, and control a wide range of 3D printers.
- **[lpigeon/unitree-go2-mcp-server](https://github.com/lpigeon/unitree-go2-mcp-server)** `⭐ 87` `updated ≤180d` An MCP server that translates natural language commands into ROS2 instructions to control the Unitree Go2 robot via large language models.
- **[automateyournetwork/pyATS_MCP](https://github.com/automateyournetwork/pyats_mcp)** `⭐ 86` `updated ≤30d` An MCP server that wraps Cisco pyATS and Genie to let AI agents run network commands and manage device configurations.
- **[optuna/optuna-mcp](https://github.com/optuna/optuna-mcp)** `⭐ 86` `updated ≤180d` An MCP server that exposes Optuna's hyperparameter optimization, study management, and visualization APIs to LLM clients like Claude Desktop.
- **[Pantheon-Security/notebooklm-mcp-secure](https://github.com/pantheon-security/notebooklm-mcp-secure)** `⭐ 85` `updated ≤180d` A security-hardened MCP server that lets Claude and other AI agents query Google NotebookLM notebooks with enterprise compliance features and zero-hallucination grounding.
- **[San](https://github.com/genai-io/san)** `⭐ 84` `updated ≤30d` A lightweight, model-agnostic agent harness delivered as a single Go binary with near-zero cold start times.
- **[lamemind/mcp-server-multiverse](https://github.com/lamemind/mcp-server-multiverse)** `⭐ 81` `updated ≤1y` A middleware server that enables multiple isolated instances of the same MCP servers to coexist independently with unique namespaces and configurations.
- **[dodopayments/contextmcp](https://github.com/dodopayments/context-mcp)** `⭐ 78` `updated ≤30d` Self-hosted MCP server that indexes documentation from multiple sources and serves it via MCP and REST API.
- **[MikkoParkkola/mcp-gateway](https://github.com/mikkoparkkola/mcp-gateway)** `⭐ 77` `updated ≤90d` A Rust-based gateway that multiplexes multiple MCP servers and REST APIs behind a single Meta-MCP interface to drastically reduce context window token usage.
- **[TwelveTake-Studios/reaper-mcp](https://github.com/twelvetake-studios/reaper-mcp)** `⭐ 74` `updated ≤90d` An MCP server that lets AI assistants control REAPER DAW for music production workflows via Lua bridge and file-based communication.
- **[handsomejustin/mijia-control](https://github.com/handsomejustin/mijia-control)** `⭐ 73` `updated ≤180d` A smart home bridge and control platform that integrates the Xiaomi/Mijia ecosystem with an MCP server, REST API, and HomeKit.
- **[TonyWang-hub/mcp-cn-commerce](https://github.com/tonywang-hub/mcp-cn-commerce)** `⭐ 71` `updated ≤90d` Chinese e-commerce MCP servers — let AI agents read merchant business data (Ocean Engine, Douyin Shop, JD.com, Taobao, Pinduoduo). 电商经营数据 MCP 连接器。.
- **[aitytech/agentkits-memory](https://github.com/aitytech/agentkits-memory)** `⭐ 64` `updated ≤1y` A persistent, local memory system for AI coding assistants implemented as an MCP server.
- **[Supadata](https://github.com/supadata-ai/mcp)** `⭐ 64` `updated ≤180d` An MCP server that exposes Supadata's video transcript extraction, web scraping, crawling, and AI-powered structured data extraction as tools for Cursor, Claude, and other LLM clients.
- **[rosasynthesiz/flstudio-mcp](https://github.com/rosasynthesiz/flstudio-mcp)** `⭐ 63` `updated ≤90d` AI-powered FL Studio control via the Model Context Protocol. Beyond piano-roll notes — full in-DAW mixing (Mix Doctor, gain staging, EQ/comp/reverb, reference matching), routing, and composition through Claude and other MCP clients. 67 tools. Windows.
- **[WayStation-ai/mcp](https://github.com/waystation-ai/mcp)** `⭐ 63` `updated >1y` WayStation is a remote MCP server that connects MCP hosts like Claude to productivity apps via no-code integrations.
- **[YangLiangwei/PersonalizationMCP](https://github.com/yangliangwei/personalizationmcp)** `⭐ 63` `updated ≤1y` PersonalizationMCP is a Model Context Protocol server that aggregates personal data from Steam, YouTube, Bilibili, Spotify, and Reddit for AI assistant consumption.
- **[bh-rat/context-awesome](https://github.com/bh-rat/context-awesome)** `⭐ 60` `updated ≤180d` An MCP server and CLI that provides access to curated awesome lists and their items for AI agents.
- **[Crawlbase MCP](https://github.com/crawlbase/crawlbase-mcp)** `⭐ 58` `updated ≤180d` An MCP server that enables AI agents and LLMs to fetch real-time web data via Crawlbase's scraping infrastructure.
- **[nihalxkumar/arch-mcp](https://github.com/nihalxkumar/arch-mcp)** `⭐ 58` `updated ≤1y` An MCP server that exposes Arch Linux ecosystem data—including the Arch Wiki, AUR, official repos, and system pacman status—to AI assistants via resources and tools.
- **[mcp-searxng-enhanced](https://github.com/overtlids/mcp-searxng-enhanced)** `⭐ 55` `updated ≤180d` An MCP server that exposes category-aware SearXNG web search, website scraping with citations, and date/time tools to MCP-compatible AI clients.
- **[1mcpserver](https://github.com/particlefuture/1mcpserver)** `⭐ 53` `updated ≤1y` A Model Context Protocol server that acts as a meta-server, automatically discovering, configuring, and chaining other MCP servers to fulfill complex developer goals.
- **[BGG MCP](https://github.com/kkjdaniel/bgg-mcp)** `⭐ 53` `updated ≤180d` BGG MCP is a Model Context Protocol server that provides access to BoardGameGeek data, including game details, user collections, and profiles.
- **[metoro-io/metoro-mcp-server](https://github.com/metoro-io/metoro-mcp-server)** `⭐ 51` `updated ≤180d` Metoro MCP Server is a Go-based Model Context Protocol server that exposes Kubernetes observability data from Metoro to LLM applications like Claude Desktop.
- **[random-number-mcp](https://github.com/zazencodes/random-number-mcp)** `⭐ 51` `updated ≤90d` Production-ready MCP server that provides LLMs with random generation utilities from Python's standard library.
- **[john-broadway/proximo](https://github.com/john-broadway/proximo)** `⭐ 50` `updated ≤90d` An MCP server that provides an audited, plan-and-undo interface for managing Proxmox VE, Backup Server, and Mail Gateway.
- **[rosenvladimirov/odoo-claude-mcp](https://github.com/rosenvladimirov/odoo-claude-mcp)** `⭐ 50` `updated ≤90d` Self-hosted MCP server connecting Claude to Odoo 15→19 — 197+ tools, multi-tenant, Bulgaria l10n.
- **[Hybirdss/smartest-tv](https://github.com/hybirdss/smartest-tv)** `⭐ 48` `updated ≤180d` A CLI tool and MCP server to control smart TVs (LG, Samsung, Roku, Android) with natural language commands, including platform-specific content playback.
- **[Keycloak MCP Server](https://github.com/sshaaf/keycloak-mcp-server)** `⭐ 48` `updated ≤180d` An MCP server built with Quarkus that exposes Keycloak identity and access management operations—users, realms, clients, roles, and authentication—to AI assistants via SSE transport.
- **[Touchpoint-Labs/touchpoint](https://github.com/touchpoint-labs/touchpoint)** `⭐ 47` `updated ≤180d` A cross-platform Python library and MCP server that gives AI agents desktop UI control via native accessibility APIs and Chrome DevTools Protocol.
- **[cafferychen777/ChatSpatial](https://github.com/cafferychen777/chatspatial)** `⭐ 45` `updated ≤90d` MCP server providing natural language interfaces for spatial transcriptomics analysis.
- **[pinecone-io/assistant-mcp](https://github.com/pinecone-io/assistant-mcp)** `⭐ 45` `updated ≤90d` A Rust-based MCP server that lets AI assistants like Claude Desktop retrieve information from a Pinecone Assistant instance.
- **[profullstack/mcp-server](https://github.com/profullstack/mcp-server)** `⭐ 45` `updated ≤90d` A generic, modular Node.js server for implementing the Model Context Protocol (MCP) with support for dynamic module loading and integration with multiple AI model providers.
- **[DollhouseMCP/mcp-server](https://github.com/dollhousemcp/mcp-server)** `⭐ 44` `updated ≤30d` An open-source MCP server for dynamic custom persona, skill, template, and ensemble management with a public GitHub collection.
- **[vaaya-ai/vaaya-mcp](https://github.com/vaaya-ai/vaaya-mcp)** `⭐ 44` vaaya-ai/vaaya-mcp : Gives your AI agent a prepaid card to pay per call for hundreds of paid services — web search & scraping, research, lead enrichment, media generation, code sandboxes, browser automation, and email — with no per-vendor signups or API keys.
- **[contextstream/mcp-server](https://github.com/contextstream/mcp-server)** `⭐ 43` `updated ≤30d` Persistent memory, semantic search, and shared project context for AI agents with traceable sources and scoped access. Carry decisions, lessons, and intent across sessions and tools.
- **[uns-mcp](https://github.com/unstructured-io/uns-mcp)** `⭐ 43` `updated ≤90d` Unstructured API MCP Server is a Model Context Protocol server that exposes Unstructured API tools for managing sources, destinations, workflows, and jobs.
- **[attalla1/photopea-mcp-server](https://github.com/attalla1/photopea-mcp-server)** `⭐ 42` `updated ≤180d` An MCP server that enables AI agents to perform image editing operations via Photopea.
- **[SecretiveShell/MCP-timeserver](https://github.com/secretiveshell/mcp-timeserver)** `⭐ 42` `updated >1y` A simple MCP server that exposes datetime information and timezone-aware resources to agentic systems and chat REPLs.
- **[WebSearch-MCP](https://github.com/mnhlt/websearch-mcp)** `⭐ 41` `updated >1y` A self-hosted Model Context Protocol (MCP) server that provides web search capabilities to AI assistants like Claude by integrating with a local WebSearch Crawler API via stdio transport.
- **[glenngillen/mcpmcp-server](https://github.com/glenngillen/mcpmcp-server)** `⭐ 40` `updated >1y` A tool for discovering, setting up, and integrating MCP servers with AI clients.
- **[pallaprolus/mendeley-mcp](https://github.com/pallaprolus/mendeley-mcp)** `⭐ 40` `updated ≤180d` An MCP server that connects a Mendeley reference library to LLM clients like Claude Desktop and Cursor for searching, retrieving, and managing academic papers.
- **[arrismo/kaggle-mcp](https://github.com/arrismo/kaggle-mcp)** `⭐ 39` `updated ≤180d` MCP server that provides tools for searching, downloading, and generating EDA notebook prompts for Kaggle datasets.
- **[AbdelStark/nostr-mcp](https://github.com/abdelstark/nostr-mcp)** `⭐ 38` `updated >1y` An MCP server that enables AI models to interact with the Nostr protocol for posting notes and sending Lightning zaps.
- **[OctoEverywhere/mcp](https://github.com/octoeverywhere/mcp)** `⭐ 38` `updated >1y` A free, cloud-hosted MCP server that gives AI agents live access to 3D printer status, webcam snapshots, and print controls via the Model Context Protocol.
- **[Rendeverance/toolfunnel](https://github.com/rendeverance/toolfunnel)** `⭐ 38` `updated ≤90d` Zero-dependency MCP gateway - attach, filter, gate, and observe local tools and MCP servers through one funnel. Create your own MCP servers with zero code!
- **[HumanSignal/label-studio-mcp-server](https://github.com/humansignal/label-studio-mcp-server)** `⭐ 37` `updated >1y` An MCP server that enables programmatic interaction with Label Studio for managing projects, tasks, and predictions.
- **[mcp-server](https://github.com/decodo/mcp-server)** `⭐ 37` `updated ≤30d` An MCP server that connects AI clients to Decodo's web scraping and proxy services.
- **[Connectry-io/connectrylab-architect-cert-mcp](https://github.com/connectry-io/connectrylab-architect-cert-mcp)** `⭐ 36` `updated ≤1y` An MCP server providing free, interactive certification prep for the Claude Certified Architect exam with 390 questions, spaced repetition, and a progress dashboard.
- **[multi_mcp](https://github.com/religa/multi_mcp)** `⭐ 36` `updated ≤90d` An MCP server that connects to Claude Code or OpenCode to orchestrate multiple AI models (OpenAI, Anthropic, Google) for parallel code review, security analysis, and multi-agent consensus.
- **[Yutarop/ros-mcp](https://github.com/yutarop/ros-mcp)** `⭐ 36` `updated >1y` MCP server for ROS to control robots via topics, services, and actions.
- **[combine-mcp](https://github.com/nazar256/combine-mcp)** `⭐ 35` `updated ≤1y` An MCP aggregator that combines multiple MCP servers into a single interface with tool prefixing, filtering, and client compatibility layers for Cursor and other MCP clients.
- **[longevity-genie/biothings-mcp](https://github.com/longevity-genie/biothings-mcp)** `⭐ 35` `updated ≤1y` MCP server providing structured access to BioThings biomedical data sources like mygene.info and myvariant.info.
- **[newsmcp](https://github.com/pranciskus/newsmcp)** `⭐ 35` `updated ≤1y` An MCP server that exposes real-time AI-clustered world news events as tools for AI coding assistants and agents, with no API key required.
- **[InhiblabCore/mcp-image-compression](https://github.com/inhiblabcore/mcp-image-compression)** `⭐ 34` `updated >1y` An MCP-based microservice for high-performance image compression supporting JPEG, PNG, WebP, and AVIF formats.
- **[linxule/lotus-wisdom-mcp](https://github.com/linxule/lotus-wisdom-mcp)** `⭐ 34` `updated ≤90d` An MCP server that implements a Lotus Sutra-inspired wisdom framework for multi-faceted problem solving with interactive visualization.
- **[webcoderz/MCP-Geo](https://github.com/webcoderz/mcp-geo)** `⭐ 34` `updated >1y` An MCP server implementation that exposes geocoding, reverse geocoding, and distance calculation tools via GeoPY to Large Language Models.
- **[aywengo/kafka-schema-reg-mcp](https://github.com/aywengo/kafka-schema-reg-mcp)** `⭐ 32` `updated ≤30d` An MCP server that exposes Kafka Schema Registry operations to MCP clients like Claude Desktop.
- **[longevity-genie/gget-mcp](https://github.com/longevity-genie/gget-mcp)** `⭐ 32` `updated ≤1y` gget-mcp is an MCP server that exposes the gget bioinformatics library’s functions via the Model Context Protocol.
- **[kukapay/opcua-mcp](https://github.com/kukapay/opcua-mcp)** `⭐ 30` `updated ≤1y` An MCP server that enables AI agents to interact with OPC UA-enabled industrial systems for real-time monitoring and control.
- **[mcp-server](https://github.com/agentset-ai/mcp-server)** `⭐ 30` `updated >1y` An MCP server that enables agents to interact with the Agentset RAG platform.
- **[rps321321/obsidian-mcp-pro](https://github.com/rps321321/obsidian-mcp-pro)** `⭐ 30` `updated ≤90d` An MCP server that exposes Obsidian vaults to AI assistants via 41 tools for reading, writing, searching, tagging, link analysis, graph traversal, canvas manipulation, and semantic search.
- **[bruno-portfolio/agrobr-mcp](https://github.com/bruno-portfolio/agrobr-mcp)** `⭐ 27` `updated ≤1y` An MCP server that provides LLMs with access to real-time Brazilian agricultural data via the agrobr library and 10 public sources.
- **[Wolido/OpenAaaS](https://github.com/wolido/openaaas)** `⭐ 26` `updated ≤90d` OpenAaaS: science agent network — bring AI to your data, not your data to AI. AaaS, Agent as a Service, MCP protocol, local execution, Docker sandbox, zero-config Rust nodes.
- **[callcenter.js-mcp](https://github.com/gerkensm/callcenter.js-mcp)** `⭐ 25` `updated ≤1y` An MCP server and CLI tool that bridges OpenAI's Real-Time Voice API with VoIP networks to allow AI agents to make phone calls.
- **[kukapay/modbus-mcp](https://github.com/kukapay/modbus-mcp)** `⭐ 25` `updated >1y` An MCP server that exposes Modbus industrial IoT data as tools for AI agents.
- **[anki-connect-mcp](https://github.com/spacholski1225/anki-connect-mcp)** `⭐ 24` `updated >1y` An MCP server that bridges AI assistants like Claude Desktop with Anki via the AnkiConnect add-on to manage flashcards programmatically through conversation.
- **[ByteAsk/ByteAsk-Embedded-MCP](https://github.com/byteask/byteask-embedded-mcp)** `⭐ 24` `updated ≤180d` An MCP server that provides page-cited, verbatim retrieval from embedded and firmware documentation.
- **[flamexnreal/davinci-resolve-ai-bridge-mcp](https://github.com/flamexnreal/davinci-resolve-ai-bridge-mcp)** `⭐ 24` `updated ≤30d` DaVinci Resolve (Free Version and Studio) MCP server for Claude, Cursor, Codex, and Antigravity. Full timeline editing, cuts, camera zoom, and color grading.
- **[jiayao/mcp-chess](https://github.com/jiayao/mcp-chess)** `⭐ 24` `updated >1y` MCP server that enables playing chess against any LLM via the Model Context Protocol.
- **[unibaseio/membase-mcp](https://github.com/unibaseio/membase-mcp)** `⭐ 24` `updated >1y` Membase MCP is a lightweight decentralized memory gateway that connects AI agents to the Membase protocol for persistent, verifiable multi-session memory.
- **[youdotcom-oss/mcp](https://github.com/youdotcom-oss/mcp)** `⭐ 24` youdotcom-oss/mcp : Web search, page content extraction, and multi-step research via the hosted You.com MCP server at https://api.you.com/mcp (keyless free profile available).
- **[vikramgorla/mcp-swiss](https://github.com/vikramgorla/mcp-swiss)** `⭐ 23` `updated ≤90d` mcp-swiss is an MCP server that provides zero-configuration access to Swiss open data via 76 tools for transport, weather, geodata, and more.
- **[Wolfe-Jam/claude-faf-mcp](https://github.com/wolfe-jam/claude-faf-mcp)** `⭐ 23` `updated ≤90d` An MCP server that provides persistent project context for Claude Desktop via the IANA-registered .faf format and 32 tools.
- **[Data-Everything/mcp-server-templates](https://github.com/data-everything/mcp-server-templates)** `⭐ 22` `updated >1y` A Docker/Kubernetes-backed platform with CLI utilities for deploying and managing MCP servers from templates, with load balancing and multi-transport support.
- **[robhunter/agentdeals](https://github.com/robhunter/agentdeals)** `⭐ 22` `updated ≤90d` An MCP server that aggregates free tiers, startup credits, and developer tool deals from 1,500+ vendors across 54 categories for use with AI agents and IDEs.
- **[samson-art/transcriptor-mcp](https://github.com/samson-art/transcriptor-mcp)** `⭐ 22` `updated ≤90d` An MCP server that fetches video transcripts and metadata from 11 major platforms using yt-dlp, with a Whisper fallback for audio transcription when subtitles are unavailable.
- **[ammawla/encode-toolkit](https://github.com/ammawla/encode-toolkit)** `⭐ 21` `updated ≤90d` An MCP server and Claude plugin providing a genomic data and analysis toolkit for the ENCODE Project, enabling search, download, cross-referencing, and analysis of functional genomics experiments.
- **[arthurpanhku/DragonMCP](https://github.com/arthurpanhku/dragonmcp)** `⭐ 21` `updated ≤90d` DragonMCP is an MCP server that enables AI agents to interact with local life services (e.g., transit, payments, food delivery) in Greater China and Asia.
- **[JamesANZ/memory-mcp](https://github.com/jamesanz/memory-mcp)** `⭐ 21` `updated ≤1y` An MCP server that provides persistent memory and context window caching for LLM conversations, backed by MongoDB.
- **[kambriso/fritzbox-mcp-server](https://github.com/kambriso/fritzbox-mcp-server)** `⭐ 21` `updated ≤180d` An MCP server that enables AI assistants to interact with FRITZ!Box routers for home automation and network management.
- **[nouz-mcp](https://github.com/semiotronika/nouz-mcp)** `⭐ 21` `updated ≤180d` An MCP server that builds semantic knowledge graphs over local Markdown vaults like Obsidian and Logseq, classifying notes into domains and detecting structural drift.
- **[pmcp](https://github.com/consiliency/pmcp)** `⭐ 21` `updated ≤30d` An MCP meta-server that uses progressive disclosure to prevent context bloat by lazily provisioning downstream tools on demand.
- **[abhiphile/fermat-mcp](https://github.com/abhiphile/fermat-mcp)** `⭐ 20` `updated ≤90d` An MCP server that integrates SymPy, NumPy, and Matplotlib to provide mathematical computation and plotting capabilities to AI assistants.
- **[dengls24/annota](https://github.com/dengls24/annota)** `⭐ 19` `updated ≤180d` An AI-powered MCP server that enables agents to read, annotate, and summarize academic papers directly within Zotero.
- **[isaac-levine/forage](https://github.com/isaac-levine/forage)** `⭐ 18` `updated ≤1y` An MCP server that enables AI agents to discover, install, and learn to use new MCP tools automatically.
- **[louis030195/easy-obsidian-mcp](https://github.com/louis030195/easy-obsidian-mcp)** `⭐ 18` `updated ≤1y` An MCP server that connects AI assistants like Claude and ChatGPT to an Obsidian vault for searching, reading, and analyzing personal notes.
- **[paladini/mcp-me](https://github.com/paladini/mcp-me)** `⭐ 18` `updated ≤90d` A local MCP server and CLI tool that builds a structured personal profile from various data sources and exposes it to AI assistants via the Model Context Protocol.
- **[ris-mcp-ts](https://github.com/honeyfield-org/ris-mcp-ts)** `⭐ 18` `updated ≤90d` An MCP server that provides AI assistants access to Austria's official legal database (RIS) for retrieving laws, court decisions, and government documents.
- **[alexey-pelykh/lhremote](https://github.com/alexey-pelykh/lhremote)** `⭐ 17` `updated ≤30d` CLI and MCP server for controlling LinkedHelper to automate LinkedIn outreach tasks via AI assistants.
- **[austenstone/myinstants-mcp](https://github.com/austenstone/myinstants-mcp)** `⭐ 17` `updated ≤1y` An MCP server that enables AI agents to search, browse, and play sounds from myinstants.com.
- **[mcp-server](https://github.com/campertunity/mcp-server)** `⭐ 17` `updated ≤180d` An MCP server and agent skill pack for AI-powered campground discovery, search, and booking.
- **[Synter-Media-AI/mcp-server](https://github.com/synter-media-ai/mcp-server)** `⭐ 17` `updated ≤90d` An MCP server that gives AI agents read and write access to manage ad campaigns across Google, Meta, LinkedIn, Microsoft, Reddit, TikTok, and other advertising platforms.
- **[antonio-mello-ai/mcp-proxmox](https://github.com/antonio-mello-ai/mcp-proxmox)** `⭐ 16` `updated ≤90d` MCP server for managing Proxmox VE clusters through AI assistants.
- **[Markgatcha/universal-mcp-toolkit](https://github.com/markgatcha/universal-mcp-toolkit)** `⭐ 16` `updated ≤90d` A TypeScript monorepo and CLI that bundles 27+ production-oriented MCP servers for services like GitHub, Slack, and PostgreSQL with a unified install, config, and diagnostics workflow.
- **[alpadalar/netops-mcp](https://github.com/alpadalar/netops-mcp)** `⭐ 15` `updated ≤90d` An MCP server that exposes DevOps and networking tools (ping, traceroute, nmap, curl, etc.) through a standardized interface.
- **[epicsagas/alcove](https://github.com/epicsagas/alcove)** `⭐ 15` `updated ≤90d` Alcove is an MCP server that provides AI coding agents with on-demand access to private project documentation via hybrid search and code indexing.
- **[JSON MCP](https://github.com/vadimnastoyashchy/json-mcp)** `⭐ 15` `updated >1y` JSON MCP is a Model Context Protocol server that lets LLMs split, merge, find, and validate JSON files.
- **[SidneyBissoli/medical-terminologies-mcp](https://github.com/sidneybissoli/medical-terminologies-mcp)** `⭐ 15` `updated ≤90d` MCP Server for global medical terminologies: ICD-11, SNOMED CT, LOINC, RxNorm, MeSH.
- **[sonirico/mcp-stockfish](https://github.com/sonirico/mcp-stockfish)** `⭐ 15` `updated >1y` An MCP server written in Go that exposes the Stockfish chess engine to AI systems via the Model Context Protocol.
- **[bitteprotocol/mcp](https://github.com/bitteprotocol/mcp)** `⭐ 14` `updated >1y` This is a monorepo containing MCP (Model Control Protocol) servers for Bitte AI integrations.
- **[BuyWhere/buywhere-mcp](https://github.com/buywhere/buywhere-mcp)** `⭐ 14` `updated ≤30d` BuyWhere MCP server is a Model Context Protocol server that enables AI agents to search and compare 300M+ products across US and Southeast Asian e-commerce platforms.
- **[khan2a/telephony-mcp-server](https://github.com/khan2a/telephony-mcp-server)** `⭐ 14` `updated ≤180d` An MCP server providing telephony tools (voice calls, SMS) via Vonage API for LLM applications.
- **[papersflow-ai/papersflow-mcp](https://github.com/papersflow-ai/papersflow-mcp)** `⭐ 14` `updated ≤1y` A hosted MCP server that provides literature search, citation verification, and related-paper discovery tools for AI coding assistants like Claude Code, Codex, and Gemini CLI.
- **[sidclawhq/platform](https://github.com/sidclawhq/platform)** `⭐ 14` sidclawhq/platform : AI agent governance MCP proxy with approval workflows, policy engine, hash-chain audit trails, and 18+ framework integrations. Apache 2.0.
- **[cfpramod/open-museum-mcp](https://github.com/cfpramod/open-museum-mcp)** `⭐ 13` `updated ≤30d` An MCP server that provides unified search across multiple open-access museum collections with strict rights verification and ready-to-use citations.
- **[context-rot-detection](https://github.com/milos-product-maker/context-rot-detection)** `⭐ 13` `updated ≤1y` An MCP server that analyzes an AI agent's context window health, returning a degradation score and recovery recommendations based on token usage, session fatigue, and model-specific degradation curves.
- **[hashgraph-online/hashnet-mcp-js](https://github.com/hashgraph-online/hashnet-mcp-js)** `⭐ 13` `updated ≤180d` Universal MCP server for discovering, connecting, and interacting with agents via the HOL Registry Broker ecosystem.
- **[Whatsonyourmind/oraclaw](https://github.com/whatsonyourmind/oraclaw)** `⭐ 13` `updated ≤180d` Deterministic decision-intelligence MCP server providing 17 tools and 21 algorithms (bandits, LP/MIP, Monte Carlo, etc.) with sub-25ms latency and zero LLM cost for AI agents.
- **[wklee610/kafka-mcp](https://github.com/wklee610/kafka-mcp)** `⭐ 13` `updated ≤1y` An MCP server that provides LLMs with tools to manage Apache Kafka clusters, including topics, consumer groups, and messaging.
- **[bluzername/lennys-quotes](https://github.com/bluzername/lennys-quotes)** `⭐ 12` `updated ≤30d` MCP server that provides searchable access to Lenny's Podcast transcripts for AI assistants.
- **[mrostamii/rancher-mcp-server](https://github.com/mrostamii/rancher-mcp-server)** `⭐ 12` `updated ≤180d` An MCP server that exposes Rancher, Harvester HCI, Kubernetes, Helm, and Fleet GitOps capabilities to AI coding assistants like Cursor and Claude Desktop.
- **[octoco-ltd/sheetsdata-mcp](https://github.com/octoco-ltd/sheetsdata-mcp)** `⭐ 12` `updated ≤180d` An MCP server that gives AI agents structured, on-demand access to electronic component datasheets, pinouts, and specs without requiring PDF uploads.
- **[PrinceGabriel-lgtm/freshcontext-mcp](https://github.com/princegabriel-lgtm/freshcontext-mcp)** `⭐ 12` `updated ≤90d` An MCP server that wraps web-retrieved data in timestamped freshness envelopes to help AI agents distinguish current information from stale results.
- **[davidmosiah/wellness-nourish](https://github.com/davidmosiah/wellness-nourish)** `⭐ 11` `updated ≤90d` A local-first MCP server that enables AI agents to perform food searches, barcode lookups, and nutritional intake logging.
- **[driflyte-mcp-server](https://github.com/serkan-ozal/driflyte-mcp-server)** `⭐ 11` `updated ≤1y` An MCP server that exposes tools for AI assistants to query and retrieve topic-specific knowledge from recursively crawled and indexed web pages and GitHub repositories.
- **[Helium MCP](https://github.com/connerlambden/helium-mcp)** `⭐ 11` `updated ≤90d` MCP server providing real-time news with bias scoring, live financial data, AI options pricing, and meme search.
- **[spre-sre/lumino-mcp-server](https://github.com/spre-sre/lumino-mcp-server)** `⭐ 11` `updated ≤90d` An MCP server that exposes 37+ Kubernetes, OpenShift, and Tekton tools for AI assistants to perform SRE observability, automated root cause analysis, and predictive monitoring.
- **[withoneai/mcp](https://github.com/withoneai/mcp)** `⭐ 11` withoneai/mcp ️ ☁️ - Search, document and execute authenticated API calls across apps such as Gmail, Slack, Stripe, Notion and GitHub through a few tools with constant context size.
- **[BluesPrince/thiri-mcp](https://github.com/bluesprince/thiri-mcp)** `⭐ 10` `updated ≤90d` Deterministic music theory MCP server providing chord analysis, reharmonization, and voicing tools.
- **[ferrants/memvid-mcp-server](https://github.com/ferrants/memvid-mcp-server)** `⭐ 10` `updated >1y` An MCP server that uses Memvid to encode text data into video for semantic search.
- **[mlorentedev/hive](https://github.com/mlorentedev/hive)** `⭐ 10` `updated ≤90d` An MCP server that connects AI coding assistants to Obsidian vaults for on-demand context retrieval and persistent memory across sessions.
- **[shunshi-ai/bazi-reader-mcp](https://github.com/shunshi-ai/bazi-reader-mcp)** `⭐ 10` `updated ≤180d` An open-source MCP server and TypeScript library that calculates Chinese Bazi (Four Pillars of Destiny) charts with true solar time correction, designed to be called by AI agents like Claude and Cursor.
- **[TeamSafeAI/LIFE](https://github.com/teamsafeai/life)** `⭐ 10` `updated ≤1y` LIFE is a persistent identity and memory architecture for AI agents, implemented as 16 MCP servers providing drives, emotional memory, semantic storage, and self-narrative tooling with zero dependencies.
- **[bighippoman/intercept-mcp](https://github.com/bighippoman/intercept-mcp)** `⭐ 9` `updated ≤90d` MCP server that fetches web content and converts it to clean markdown via a multi-tier fallback chain including site-specific handlers and shared caching.
- **[mcp-flowcore-platform](https://github.com/flowcore-io/mcp-flowcore-platform)** `⭐ 9` `updated >1y` An MCP server that enables AI assistants to manage and interact with the Flowcore Platform.
- **[neptun2000/heor-agent-mcp](https://github.com/neptun2000/heor-agent-mcp)** `⭐ 9` `updated ≤180d` An MCP server that automates Health Economics and Outcomes Research (HEOR) workflows, including literature review, bias assessment, and regulatory dossier preparation for pharmaceutical and biotech teams.
- **[sharozdawa/ai-visibility](https://github.com/sharozdawa/ai-visibility)** `⭐ 9` `updated ≤1y` An open-source MCP server and web dashboard that tracks a brand's visibility, sentiment, and positioning across ChatGPT, Perplexity, Claude, and Gemini.
- **[0x1abin/matter-controller-mcp](https://github.com/0x1abin/matter-controller-mcp)** `⭐ 8` `updated >1y` An MCP server that enables AI agents to discover, commission, and control Matter-compatible smart home devices.
- **[hyunjae-labs/lore](https://github.com/hyunjae-labs/lore)** `⭐ 8` `updated ≤180d` A fully local MCP server that enables semantic and keyword search across Claude Code and OpenAI Codex CLI conversation histories.
- **[kukapay/web3-jobs-mcp](https://github.com/kukapay/web3-jobs-mcp)** `⭐ 8` `updated >1y` An MCP server that provides AI agents with real-time access to curated Web3 jobs from web3.career.
- **[pipepie/pipepie](https://github.com/pipepie/pipepie)** `⭐ 8` `updated ≤180d` A self-hosted, encrypted tunnel tool for webhooks and local development that includes built-in pipeline tracing and an MCP server for AI tooling integration.
- **[sonatype-mcp](https://github.com/brianveltman/sonatype-mcp)** `⭐ 8` `updated ≤1y` An MCP server that enables AI assistants to interact with Sonatype Nexus Repository Manager for repository and component management.
- **[SunflowersLwtech/mcp_creator_growth](https://github.com/sunflowerslwtech/mcp_creator_growth)** `⭐ 8` `updated ≤90d` An MCP server that acts as a learning sidecar for AI coding assistants, generating interactive quizzes on AI-generated code changes and maintaining a persistent, project-specific debugging memory.
- **[virtualsms-io/mcp-server](https://github.com/virtualsms-io/mcp-server)** `⭐ 8` `updated ≤90d` MCP server providing real SIM-based phone numbers for SMS verification to AI agents via the Model Context Protocol.
- **[abnegate/magents](https://github.com/abnegate/magents)** `⭐ 7` `updated ≤30d` A shared session bus and MCP server that enables context and session handoffs between different coding assistants.
- **[aeoess/mingle-mcp](https://github.com/aeoess/mingle-mcp)** `⭐ 7` `updated ≤30d` An MCP server that enables AI agents to perform semantic networking by publishing and matching identity cards.
- **[df-mcp](https://github.com/dreamfactorysoftware/df-mcp)** `⭐ 7` `updated ≤1y` An MCP server that integrates DreamFactory's governed API access platform with Claude for enterprise data connectivity.
- **[ejwhite7/brandkit-mcp](https://github.com/ejwhite7/brandkit-mcp)** `⭐ 7` `updated ≤90d` An open-source MCP server that provides AI tools with structured access to a company's verbal and visual brand identity systems.
- **[gibs-mcp](https://github.com/gibbrdev/gibs-mcp)** `⭐ 7` `updated ≤1y` Gibs MCP Server is a regulatory compliance knowledge base exposed as an MCP server for AI Act, GDPR, and DORA article-level citations.
- **[musharna/plant-genomics-mcp](https://github.com/musharna/plant-genomics-mcp)** `⭐ 7` `updated ≤90d` Plant genomics MCP server providing 32 tools for querying plant biology databases via the Model Context Protocol.
- **[optimaquantum/claude-critical-rules-mcp](https://github.com/optimaquantum/claude-critical-rules-mcp)** `⭐ 7` `updated ≤1y` An MCP server that enforces 21 critical rules derived from 96+ documented Claude AI failure patterns via a pre-task compliance checklist.
- **[shensi8312/blogburst-mcp-server](https://github.com/shensi8312/blogburst-mcp-server)** `⭐ 7` `updated ≤1y` An official MCP server that exposes the BlogBurst AI marketing agent's content generation, repurposing, and multi-platform publishing capabilities to MCP-compatible clients like Claude Desktop.
- **[aadilr/changethisfile-mcp](https://github.com/aadilr/changethisfile-mcp)** `⭐ 6` `updated ≤90d` An MCP server for ChangeThisFile that enables AI assistants to perform file conversions between 690+ formats.
- **[avisangle/calculator-server](https://github.com/avisangle/calculator-server)** `⭐ 6` `updated >1y` A Go-based MCP server that provides 13 mathematical tools including scientific, statistical, and financial computation capabilities.
- **[conversation-handoff-mcp](https://github.com/trust-delta/conversation-handoff-mcp)** `⭐ 6` `updated ≤90d` MCP server that saves, tags, and transfers conversation context between AI chats and projects.
- **[Daksh-create349/Contradiction-MCP](https://github.com/daksh-create349/contradiction-mcp)** `⭐ 6` `updated ≤30d` Autonomous Model Context Protocol (MCP) engine for factual consistency, version reconciliation, and conflict resolution across engineering knowledge bases.
- **[dappros/ethora-mcp-server](https://github.com/dappros/ethora-mcp-server)** `⭐ 6` `updated ≤30d` Remote and local MCP server for Ethora: let Claude, ChatGPT, Cursor and agents create chat apps, rooms, users and RAG-powered AI agents.
- **[gchen19/AnkusDrive](https://github.com/gchen19/ankusdrive)** `⭐ 6` `updated ≤30d` CLI + MCP server that turns FreeCAD into a mechanical-design workbench for LLM agents — parametric CAD, drawings, FEM/CFD simulation, and manufacturing checks.
- **[mcp-nodejs-server](https://github.com/gentoro-gt/mcp-nodejs-server)** `⭐ 6` `updated >1y` An MCP server implementation that allows AI agents to interface with Gentoro services and bridges.
- **[nimbus-agent/Nimbus](https://github.com/nimbus-agent/nimbus)** `⭐ 6` nimbus-agent/Nimbus ️ - Read-only search over a local index of your engineering stack (GitHub, Jira, Slack, PagerDuty, Datadog and more): incidents, PRs, deployments and DORA metrics.
- **[ober37/ac-infinity-mcp](https://github.com/ober37/ac-infinity-mcp)** `⭐ 6` `updated ≤90d` MCP server for AC Infinity grow controllers. AI agent integration for climate monitoring, port control, and grow automation — works with Claude, Cursor, and any MCP client.
- **[penfieldlabs/penfield-mcp](https://github.com/penfieldlabs/penfield-mcp)** `⭐ 6` `updated ≤180d` An MCP server that provides persistent memory, knowledge graphs, and context management for AI agents across sessions and tools like Claude, Cursor, and Windsurf.
- **[prior_mcp](https://github.com/cg3inc/prior_mcp)** `⭐ 6` `updated ≤180d` MCP server for Prior that gives AI agents access to a shared knowledge base of proven solutions.
- **[rdanieli/tentra-mcp](https://github.com/rdanieli/tentra-mcp)** `⭐ 6` `updated ≤180d` Tentra MCP is a memory server providing persistent code graphs and AI architecture diagrams via 32 MCP tools for AI coding agents.
- **[rupinder2/mcp-orchestrator](https://github.com/rupinder2/mcp-orchestrator)** `⭐ 6` `updated ≤1y` An MCP gateway that aggregates tools from multiple downstream MCP servers and provides BM25-based search with deferred loading to conserve context window space in Claude Desktop.
- **[salwks/mcp-techTrend](https://github.com/salwks/mcp-techtrend)** `⭐ 6` `updated ≤180d` salwks/mcp-techTrend - Multi-source academic + code + medical-regulatory trend monitoring (arXiv, PubMed, GitHub, Hugging Face, openFDA 510(k)/Recalls). Newspaper-style briefings, per-domain tuning, sandbox-safe Python launcher.
- **[TheBlueHouse75/hermes-action-bridge](https://github.com/thebluehouse75/hermes-action-bridge)** `⭐ 6` TheBlueHouse75/hermes-action-bridge - Delegate real-world actions to Hermes Agent: research, browser workflows, messaging, scheduling and skills, with risky actions requiring approval.
- **[timmx7/acheron-mcp-server](https://github.com/timmx7/acheron-mcp-server)** `⭐ 6` `updated ≤1y` An MCP server that provides shared persistent memory across Claude Chat, Code, and Cowork using a local SQLite database.
- **[vishalsg42/munim](https://github.com/vishalsg42/munim)** `⭐ 6` vishalsg42/munim - Multi-client MCP proxy: read across every client's accounts, write only to the named one, via providers' own MCP tools (Cloudflare, Vercel, Notion and more).
- **[VmLia/books-mcp-server](https://github.com/vmlia/books-mcp-server)** `⭐ 6` `updated >1y` books-mcp-server is an MCP server that provides book querying capabilities via STDIO for MCP clients like Cherry Studio.
- **[windsor_mcp](https://github.com/windsor-ai/windsor_mcp)** `⭐ 6` `updated ≤180d` Windsor MCP is a hosted Model Context Protocol server that enables AI assistants to query 325+ marketing and business data sources via natural language without SQL or API keys.
- **[andreas-roennestad/openhive-mcp](https://github.com/andreas-roennestad/openhive-mcp)** `⭐ 5` `updated ≤180d` MCP server that connects AI agents to OpenHive, a shared knowledge base of AI-discovered problem-solution pairs for developers.
- **[aparajithn/agent-utils-mcp](https://github.com/aparajithn/agent-utils-mcp)** `⭐ 5` `updated ≤30d` A Swiss-army-knife MCP server offering 18 utility tools (JSON validation, base64, hashing, datetime conversion, etc.) via MCP and REST API.
- **[auspy/supasidebar-mcp](https://github.com/auspy/supasidebar-mcp)** `⭐ 5` `updated ≤90d` SupaSidebar MCP Server is a macOS-native MCP server that gives AI assistants local read/write access to browser tabs, bookmarks, and history via the SupaSidebar app.
- **[cygnussystems/cygnus-ssh-mcp](https://github.com/cygnussystems/cygnus-ssh-mcp)** `⭐ 5` `updated ≤90d` MCP server for SSH remote server management with 46 specialized tools for AI agents.
- **[espadaw/Agent47](https://github.com/espadaw/agent47)** `⭐ 5` `updated ≤1y` An MCP server and web dashboard that aggregates job marketplaces and contract data for the AI agent economy.
- **[friendlygeorge/docker-mcp-server](https://github.com/friendlygeorge/docker-mcp-server)** `⭐ 5` `updated ≤180d` An MCP server that provides AI agents with capabilities for Docker container health checks, auto-restart policies, Compose lifecycle management, and log streaming.
- **[giskard09/argentum-core](https://github.com/giskard09/argentum-core)** `⭐ 5` `updated ≤30d` An MCP server providing a karma-based reputation economy and verifiable action trails for AI agents and humans.
- **[HalidSaglam/saglitzdesign-mcp](https://github.com/halidsaglam/saglitzdesign-mcp)** `⭐ 5` `updated ≤30d` An MCP server that provides expert design, UX, SEO, and marketing knowledge to AI coding assistants.
- **[hypnosis/ssh-mcp-server](https://github.com/hypnosis/ssh-mcp-server)** `⭐ 5` hypnosis/ssh-mcp-server - Remote server work via the local OpenSSH client: run commands, transfer files with checksums, search logs and audit hosts, with destructive commands blocked.
- **[jkiley129/steam-mcp](https://github.com/jkiley129/steam-mcp)** `⭐ 5` `updated ≤1y` An MCP server that exposes a user's Steam library to Claude, enabling natural-language queries about their games.
- **[kiro0x/five-mcp](https://github.com/kiro0x/five-mcp)** `⭐ 5` `updated ≤90d` An MCP server that provides structured JSON persona constraints to prevent LLM persona drift.
- **[lodordev/mcp-romm](https://github.com/lodordev/mcp-romm)** `⭐ 5` `updated ≤90d` An MCP server that exposes a self-hosted RomM retro game library to AI assistants, providing 19 read-only tools for browsing platforms, searching ROMs, and checking metadata.
- **[mcp-broker](https://github.com/doricstack/mcp-broker)** `⭐ 5` `updated ≤30d` A local Model Context Protocol (MCP) broker that aggregates multiple upstream servers into a single, compact endpoint for clients.
- **[MendleM/Pipepost](https://github.com/mendlem/pipepost)** `⭐ 5` `updated ≤180d` An MCP server that turns Claude Code into a content publishing pipeline with SEO scoring, multi-platform CMS publishing, social media posting, and analytics.
- **[thinkchainai/mcpbundles](https://github.com/thinkchainai/mcpbundles)** `⭐ 5` `updated ≤180d` A hosted registry and MCP server proxy that aggregates hundreds of tool bundles into a single MCP endpoint for AI assistants like Claude and Cursor.
- **[tribeunal/mcp-server](https://github.com/tribeunal/mcp-server)** `⭐ 5` tribeunal/mcp-server ☁️ - Community jury platform where humans and AI agents open cases, weigh evidence and vote together, with arbitration mode, verdict waiting and signed webhooks.
- **[var-gg/mcp](https://github.com/var-gg/mcp)** `⭐ 5` `updated ≤1y` A Model Context Protocol server for managing project-specific variable names and constants to standardize terminology across teams and assist LLMs in generating code with consistent naming.
- **[xmpuspus/ph-civic-data-mcp](https://github.com/xmpuspus/ph-civic-data-mcp)** `⭐ 5` xmpuspus/ph-civic-data-mcp : Philippine government data as MCP tools — PHIVOLCS earthquakes + volcano alerts, PAGASA weather + typhoons, PhilGEPS procurement, PSA 2020 Census + poverty, AQICN air quality. Install: uvx ph-civic-data-mcp.
- **[Adityaaery20/media-mcp](https://github.com/adityaaery20/media-mcp)** `⭐ 4` `updated ≤1y` An MCP server providing tools for image and video processing, including resizing, converting, and compressing media.
- **[gregario/mtg-oracle](https://github.com/gregario/mtg-oracle)** `⭐ 4` `updated ≤180d` An MCP server providing Magic: The Gathering card search, rules lookup, deck analysis, and Commander intelligence for AI assistants.
- **[helbertparanhos/easypanel-mcp-server](https://github.com/helbertparanhos/easypanel-mcp-server)** `⭐ 4` `updated ≤180d` An MCP server that allows AI assistants to manage Easypanel deployments, services, logs, and databases via natural language.
- **[jasp-nerd/marktplaats-mcp](https://github.com/jasp-nerd/marktplaats-mcp)** `⭐ 4` `updated ≤90d` MCP server for Marktplaats & 2dehands: search Dutch and Belgian classifieds from Claude, Cursor, Codex and any MCP client.
- **[jaspertvdm/mcp-server-ollama-bridge](https://github.com/jaspertvdm/mcp-server-ollama-bridge)** `⭐ 4` `updated ≤180d` An MCP server that bridges local Ollama LLM instances to MCP clients like Claude Desktop.
- **[labelgrid/labelgrid-mcp](https://github.com/labelgrid/labelgrid-mcp)** `⭐ 4` `updated ≤90d` Official LabelGrid MCP server — manage your music distribution catalog, releases, analytics and royalties from Claude, Cursor, or any AI client.
- **[MastadoonPrime/sylex-search](https://github.com/mastadoonprime/sylex-search)** `⭐ 4` `updated ≤180d` Sylex Search is an MCP server that provides AI agents with structured discovery of products, services, and businesses via natural language search.
- **[matbel91765/gis-mcp-server](https://github.com/matbel91765/gis-mcp-server)** `⭐ 4` `updated ≤90d` A Model Context Protocol server providing geospatial tools like geocoding, routing, elevation, and file I/O for AI agents.
- **[NyxToolsDev/dicom-hl7-mcp-server](https://github.com/nyxtoolsdev/dicom-hl7-mcp-server)** `⭐ 4` `updated ≤180d` An MCP server that bridges DICOM, HL7v2, and FHIR healthcare standards, enabling Claude and other MCP clients to query PACS systems and map between medical data formats.
- **[PantelisGeorgiadis/dicomweb-mcp-server](https://github.com/pantelisgeorgiadis/dicomweb-mcp-server)** `⭐ 4` `updated ≤180d` DICOMweb Model Context Protocol (MCP) server implementation.
- **[smaniches/alphafold-sovereign-mcp](https://github.com/smaniches/alphafold-sovereign-mcp)** `⭐ 4` smaniches/alphafold-sovereign-mcp ☁️ - AlphaFold MCP server integrating AlphaFold DB with eight additional public biomedical data sources, backed by a local SQLite knowledge graph for structural-confidence, variant, disease/phenotype, drug-target, and orthology workflows. uvx alphafold-sovereign-mcp.
- **[supertrained/rhumb](https://github.com/supertrained/rhumb)** `⭐ 4` `updated ≤180d` Rhumb is an agent gateway that scores external services with an 'AN Score' and routes capability calls through governed execution rails, exposed as an MCP server.
- **[tverney/mcp-agent-memory](https://github.com/tverney/mcp-agent-memory)** `⭐ 4` `updated ≤180d` MCP server that exposes a persistent memory daemon to any MCP-compatible client, enabling agents to read, append, and search session memories via filesystem bridge.
- **[Wuye-AI/mcp-server-wuye-ai](https://github.com/wuye-ai/mcp-server-wuye-ai)** `⭐ 4` `updated ≤180d` CRIC物业AI MCP Server is a Model Context Protocol server providing property industry news and knowledge base access via CRIC物业AI platform.
- **[agent-blueprint/mcp-server](https://github.com/agent-blueprint/mcp-server)** `⭐ 3` `updated ≤90d` An MCP server and CLI for Agent Blueprint that enables AI agents to access structured business profiles, use cases, and implementation plans.
- **[aidc2026ai-melon/aidc-ai-mcp](https://github.com/aidc2026ai-melon/aidc-ai-mcp)** `⭐ 3` `updated ≤90d` An MCP server that provides AI data center sizing, validation, and layout capabilities through a remote design engine.
- **[Aleksey-Panf/b2b-enrichment-mcp](https://github.com/aleksey-panf/b2b-enrichment-mcp)** `⭐ 3` `updated ≤90d` An MCP server that integrates Hunter.io and Apollo.io to provide B2B email and company intelligence to AI assistants.
- **[azmartone67/dchub-mcp-server](https://github.com/azmartone67/dchub-mcp-server)** `⭐ 3` `updated ≤30d` An MCP server providing real-time data center intelligence, including facility capacity, grid telemetry, and infrastructure mapping.
- **[bradleylab/stella-mcp](https://github.com/bradleylab/stella-mcp)** `⭐ 3` `updated ≤90d` An MCP server for creating and manipulating Stella system dynamics models in XMILE format.
- **[central-memory-mcp](https://github.com/mwg-logan/central-memory-mcp)** `⭐ 3` `updated ≤180d` A custom fork of the Model Context Protocol memory server using Azure Functions MCP triggers and Azure Table storage for persistence.
- **[cipherfoxie/sovereign-mcp](https://github.com/cipherfoxie/sovereign-mcp)** `⭐ 3` `updated ≤90d` MCP server exposing the Sovereign AI Blog for agent access to self-hosted AI documentation on NVIDIA DGX Spark.
- **[competlab/competlab-mcp-server](https://github.com/competlab/competlab-mcp-server)** `⭐ 3` `updated ≤90d` MCP server providing competitive intelligence data (including AI visibility rankings) to AI agents via Model Context Protocol.
- **[doteyeso-ops/mcp-server-vibes-coded](https://github.com/doteyeso-ops/mcp-server-vibes-coded)** `⭐ 3` `updated ≤30d` 26-tool MCP server for agent security, scanner consensus, x402 reliability, and Vibes-Coded's 344-resource commerce catalog.
- **[dragogargo/mcp-sysmon](https://github.com/dragogargo/mcp-sysmon)** `⭐ 3` `updated ≤180d` MCP server for system monitoring, exposing CPU, memory, disk, network, and process management tools to Claude.
- **[farukkolip/xtapdown-mcp](https://github.com/farukkolip/xtapdown-mcp)** `⭐ 3` `updated ≤180d` XTapDown MCP Server is an MCP server that provides 14 X (Twitter) creator tools — like tweet downloading, hashtag suggestions, and engagement calculations — to any LLM client via the Model Context Protocol.
- **[gavxm/ani-mcp](https://github.com/gavxm/ani-mcp)** `⭐ 3` `updated ≤90d` An MCP server for AniList that provides taste-aware recommendations, watch analytics, and list management for LLM clients.
- **[GeiserX/cashpilot-mcp](https://github.com/geiserx/cashpilot-mcp)** `⭐ 3` `updated ≤30d` An MCP server that exposes CashPilot instances to LLMs for monitoring passive income earnings and managing fleet workers.
- **[GeiserX/pumperly-mcp](https://github.com/geiserx/pumperly-mcp)** `⭐ 3` `updated ≤30d` An MCP server that exposes real-time fuel prices, EV charging station data, and route planning via the Model Context Protocol.
- **[gregario/astronomy-oracle](https://github.com/gregario/astronomy-oracle)** `⭐ 3` `updated ≤30d` An MCP server providing celestial object catalog data and observing session planning for LLM assistants.
- **[gregario/lego-oracle](https://github.com/gregario/lego-oracle)** `⭐ 3` `updated ≤90d` An MCP server providing LEGO sets, parts, minifigs, and inventories for AI assistants.
- **[ikoskela/wisepanel-mcp](https://github.com/ikoskela/wisepanel-mcp)** `⭐ 3` `updated ≤180d` MCP server that connects Claude Code and other MCP clients to Wisepanel's multi-agent deliberation platform.
- **[Janadasroor/pg-mnemosyne-mcp](https://github.com/janadasroor/pg-mnemosyne-mcp)** `⭐ 3` `updated ≤180d` pg-mnemosyne-mcp is a PostgreSQL-backed MCP server providing AI agents with shared memory, task tracking, and database management capabilities.
- **[jhomen368/steam-reviews-mcp](https://github.com/jhomen368/steam-reviews-mcp)** `⭐ 3` `updated ≤90d` An MCP server that enables searching Steam games, fetching user reviews, and analyzing sentiment with topic drill-down via the Model Context Protocol.
- **[Jott2121/agent-gate](https://github.com/jott2121/agent-gate)** `⭐ 3` `updated ≤90d` An MCP server that provides fail-closed quality gates and hash-chained receipt ledgers for AI agent workflows.
- **[keepgoing-dev/mcp-server](https://github.com/keepgoing-dev/mcp-server)** `⭐ 3` `updated ≤180d` An MCP server that provides project memory for AI coding assistants by auto-capturing and retrieving development checkpoints.
- **[LarryWalkerDEV/mcp-immostage](https://github.com/larrywalkerdev/mcp-immostage)** `⭐ 3` `updated ≤90d` MCP Server for AI Virtual Staging that stages rooms, beautifies floor plans, classifies images, and optimizes property listings for real estate workflows.
- **[laszlopere/mcp-tmux](https://github.com/laszlopere/mcp-tmux)** `⭐ 3` `updated ≤180d` An MCP server that allows AI agents to control tmux sessions, including managing windows, panes, and sending keystrokes.
- **[mambalabsdev/mcp-icp-fit-scorer](https://github.com/mambalabsdev/mcp-icp-fit-scorer)** `⭐ 3` `updated ≤90d` An MCP server that uses Apify to score companies against an ideal customer profile (ICP) using weighted signals.
- **[MeshLedger/MeshLedger](https://github.com/meshledger/meshledger)** `⭐ 3` `updated ≤180d` MeshLedger is an MCP server and AI agent marketplace with on-chain escrow and dispute resolution for agent-to-agent transactions.
- **[MyMedi-AI/mymedi-ai-mcp-server](https://github.com/mymedi-ai/mymedi-ai-mcp-server)** `⭐ 3` `updated ≤180d` An MCP server providing 20 healthcare billing and clinical AI tools for ICD-10/CPT/HCPCS lookup, prior auth prediction, claims validation, and provider intelligence, backed by 81K+ codes and government datasets.
- **[opusforge/gorilla-mcp](https://github.com/opusforge/gorilla-mcp)** `⭐ 3` `updated ≤90d` An MCP server that connects Claude and other assistants to Gorilla, a SaaS marketing tool for finding early users by searching Reddit, X, YouTube, TikTok, and LinkedIn.
- **[pkotecha-eng/aria-mcp-server](https://github.com/pkotecha-eng/aria-mcp-server)** `⭐ 3` `updated ≤90d` A standalone MCP server that exposes PubMed, ClinicalTrials.gov, and ISRCTN biomedical databases as tools for Claude agents to search millions of papers and clinical trials in real time.
- **[sailorpepe/undesirables-mcp-server](https://github.com/sailorpepe/undesirables-mcp-server)** `⭐ 3` `updated ≤90d` Zero-trust, local-first FastMCP core for The Undesirables. 35+ offline AI agent tools: TCG card grading, conformal risk forecasts (Safe-Hold/Momentum grades), on-chain soul personalities, x402-payable oracle, TTS + 3D forging. No telemetry. BSL 1.1.
- **[Swarmwage/swarmwage](https://github.com/swarmwage/swarmwage)** `⭐ 3` `updated ≤90d` The reliability layer for agent commerce — discover, call, and verify paid x402 services (and hire AI agents) in USDC on Base, via MCP. Client-observed reliability evidence; no escrow, no token.
- **[TechDocsStudio/biel-mcp](https://github.com/techdocsstudio/biel-mcp)** `⭐ 3` `updated ≤90d` An MCP server that connects AI coding tools like Cursor, VS Code, and Claude Desktop to a Biel.ai-hosted RAG layer of product documentation.
- **[unifapi-agent/unifapi-mcp-server](https://github.com/unifapi-agent/unifapi-mcp-server)** `⭐ 3` unifapi-agent/unifapi-mcp-server : Hosted public-data MCP server for social, search, scrape, news, creator research, and KOL pricing workflows.
- **[Vivekpatil200320/CyberRescue](https://github.com/vivekpatil200320/cyberrescue)** `⭐ 3` `updated ≤90d` A secure, lightweight Model Context Protocol (MCP) host telemetry gateway built using Python, FastMCP, and python-on-whales.
- **[xns-cloud/relayer-mcp](https://github.com/xns-cloud/relayer-mcp)** `⭐ 3` xns-cloud/relayer-mcp ️ ☁️ - Install and manage a self-hosted XNS Relayer, S3-compatible object storage on a decentralized provider network: setup, health, configuration and backups.
- **[Alessandro114/scala-mcp-server](https://github.com/alessandro114/scala-mcp-server)** `⭐ 2` `updated ≤90d` An MCP server that exposes business intelligence, CRM, and company data tools to AI agents.
- **[aliafsahnoudeh/wildfire-mcp-server](https://github.com/aliafsahnoudeh/wildfire-mcp-server)** `⭐ 2` `updated ≤1y` An MCP server for detecting, monitoring, and analyzing wildfires globally using NASA FIRMS, OpenWeatherMap, and Google Earth Engine data.
- **[Alisammour/storyflo-mcp](https://github.com/alisammour/storyflo-mcp)** `⭐ 2` `updated ≤90d` Official Storyflo MCP server — install + discovery reference. The Storyflo platform is proprietary; this repo is the public agent integration surface.
- **[cachly-dev/cachly-mcp](https://github.com/cachly-dev/cachly-mcp)** `⭐ 2` `updated ≤30d` An MCP server that provides persistent memory and semantic search for AI coding assistants by indexing git history and session lessons.
- **[Chain-Love/chain.love-mcp](https://github.com/chain-love/chain.love-mcp)** `⭐ 2` `updated ≤180d` Chain-Love/chain.love-mcp : Hosted MCP gateway for discovering and comparing Web3 infrastructure services across blockchain networks from a single remote endpoint.
- **[clanker-records/crompton-network](https://github.com/clanker-records/crompton-network)** `⭐ 2` `updated ≤180d` An MCP server that allows AI agents to access and analyze the 'Straight Outta Crompton' album through structured data, including waveforms, lyrics, and groove metrics.
- **[ctaxnagomi/dgui-hypermem](https://github.com/ctaxnagomi/dgui-hypermem)** `⭐ 2` `updated ≤30d` DGUI-HyperMem (DeckerGUI HyperMemory) - self-hosted hybrid memory MCP server on Cloudflare Workers with a JEV (Choice/Noul/Score) reasoning layer and a HuggingFace training-brain flywheel.
- **[edobusy/agenthold](https://github.com/edobusy/agenthold)** `⭐ 2` `updated ≤90d` An MCP server providing shared, versioned state with conflict detection for multi-agent AI workflows.
- **[farukkolip/instapdown-mcp](https://github.com/farukkolip/instapdown-mcp)** `⭐ 2` `updated ≤90d` An MCP server exposing 16 Instagram creator tools (downloaders, analytics, content strategy) for use by MCP clients like Claude Desktop or Cursor.
- **[forever-healthy/evipedia-mcp](https://github.com/forever-healthy/evipedia-mcp)** `⭐ 2` `updated ≤30d` MCP Server for evipedia.ai.
- **[FreelexHo/power-bi-mcp](https://github.com/freelexho/power-bi-mcp)** `⭐ 2` `updated ≤180d` An MCP server that enables AI agents to manage Power BI workspaces, datasets, and refresh schedules via natural language.
- **[garlicKim21/ratatosk-mcp](https://github.com/garlickim21/ratatosk-mcp)** `⭐ 2` `updated ≤30d` MCP server for Ratatosk — CNCF release intelligence facts for AI agents. check_stack compares your running versions locally; only project slugs leave your cluster.
- **[gerard-kanters/mcp-linux-tools](https://github.com/gerard-kanters/mcp-linux-tools)** `⭐ 2` `updated ≤90d` An MCP server that provides AI assistants with a secure, whitelisted set of Linux system administration and management tools.
- **[gokimedia/tarot-mcp-server](https://github.com/gokimedia/tarot-mcp-server)** `⭐ 2` `updated ≤90d` MCP server exposing 78-card tarot deck meanings and spreads to Claude, Cursor, Windsurf. Powered by deckaura.com.
- **[gregario/brewers-almanack](https://github.com/gregario/brewers-almanack)** `⭐ 2` `updated ≤30d` An MCP server providing brewing knowledge (beer styles, ingredients, off-flavour diagnosis, water chemistry, and recipe guidance) for AI assistants.
- **[grovs-io/mcp](https://github.com/grovs-io/mcp)** `⭐ 2` `updated ≤180d` An MCP server that lets AI assistants like Claude Code, Cursor, and Windsurf manage Grovs' deep linking, attribution analytics, and campaign features via natural language.
- **[Leximo-AI/leximo-ai-call-assistant-mcp-server](https://github.com/leximo-ai/leximo-ai-call-assistant-mcp-server)** `⭐ 2` `updated ≤1y` An MCP server that lets developers schedule AI phone calls and manage Leximo assignments directly from Claude Desktop or Claude Code.
- **[mcp-dash0](https://github.com/dash0hq/mcp-dash0)** `⭐ 2` `updated >1y` MCP server for Dash0 that enables AI assistants to query OpenTelemetry resources, metrics, logs, and traces.
- **[ndjordjevic/pinrag](https://github.com/ndjordjevic/pinrag)** `⭐ 2` `updated ≤180d` A RAG system built with LangChain that exposes multi-format document indexing and citation-based querying as an MCP server for Cursor, VS Code, and other AI assistants.
- **[ni-c/mcp-hub](https://github.com/ni-c/mcp-hub)** `⭐ 2` ni-c/mcp-hub - Serve many stdio MCP servers from one container over HTTPS, with path-based routing, an aggregate endpoint using meta-tools, built-in OAuth 2.1 and hot reload.
- **[Psalmustrack/lambdacad-mcp](https://github.com/psalmustrack/lambdacad-mcp)** `⭐ 2` Psalmustrack/lambdacad-mcp - Drive BricsCAD on Linux via an AutoLISP bridge: 2D drafting with dimensions and hatches, 3D solids with booleans, generated drawing views and PDF export.
- **[pubspro/pubmed-search](https://github.com/pubspro/pubmed-search)** `⭐ 2` `updated ≤180d` MCP server for PubMed search and literature summarization.
- **[searchatlas-mcp-server](https://github.com/search-atlas-group/searchatlas-mcp-server)** `⭐ 2` `updated ≤180d` A thin stdio bridge that connects MCP-compatible AI clients to the hosted SearchAtlas v2 MCP server, exposing 500+ SEO, PPC, content, and keyword research tools.
- **[ShipItAndPray/mcp-compress](https://github.com/shipitandpray/mcp-compress)** `⭐ 2` `updated ≤1y` An MCP server that provides 7 tools for compressing, decompressing, analyzing, and storing text, JSON, CSV, and log data using algorithms like brotli, gzip, and deflate, designed to reduce context window usage for AI agents.
- **[ShipItAndPray/mcp-memory](https://github.com/shipitandpray/mcp-memory)** `⭐ 2` `updated ≤1y` An MCP server that provides AI agents with frequency-weighted memory featuring exponential decay, auto-categorization, and semantic deduplication to prevent one-off questions from becoming permanent obsessions.
- **[skippedaga/yanifend-mcp](https://github.com/skippedaga/yanifend-mcp)** `⭐ 2` `updated ≤90d` YaniFend MCP server — manage your YaniFend feedback questionary (works on any website) and read answers from Claude.
- **[smythmyke/govtoolspro-mcp-server](https://github.com/smythmyke/govtoolspro-mcp-server)** `⭐ 2` `updated ≤90d` MCP server for GovToolsPro — go/no-go scoring, incumbent intelligence, teaming-partner search, recompete prediction, Navy NECO lookup, and SAM.gov solicitation retrieval for federal contractors.
- **[the402ai/mcp-server](https://github.com/the402ai/mcp-server)** `⭐ 2` `updated ≤1y` An MCP server that lets AI agents browse, buy, and sell services on the402.ai marketplace using x402 micropayments and manage service threads.
- **[timowhite88/farnsworth-syntek](https://github.com/timowhite88/farnsworth-syntek)** `⭐ 2` `updated ≤1y` Farnsworth SYNTEK is a paid MCP server that provides AI agents with a 7-layer recursive memory system, featuring context branching, holographic recall, and AES-256-GCM encrypted persistence on the Monad blockchain.
- **[TsvetanG2/cognigy-ai-mcp-management-server](https://github.com/tsvetang2/cognigy-ai-mcp-management-server)** `⭐ 2` TsvetanG2/cognigy-ai-mcp-management-server - Management and automation server for the Cognigy.AI conversational AI platform, exposing 132 tools across flows, agents, snapshots, NLU, functions, and deployment. Published to the official MCP Registry. npx mcp-cognigy.
- **[ysalitrynskyi/opn-mcp](https://github.com/ysalitrynskyi/opn-mcp)** `⭐ 2` `updated ≤90d` MCP server for opn.onl — shorten links, read analytics & manage links from AI assistants. Works with the hosted service or your self-hosted instance.
- **[0xbrainkid/agentfolio-mcp-server](https://github.com/0xbrainkid/agentfolio-mcp-server)** `⭐ 1` `updated ≤1y` MCP server for AgentFolio — AI agent identity, trust scores, and marketplace for Claude Desktop, Cursor & any MCP client.
- **[AgentBase1/mcp-server](https://github.com/agentbase1/mcp-server)** `⭐ 1` `updated ≤1y` An MCP server that provides AI agents with tools to search and retrieve instruction files from the AgentBase registry.
- **[agentc22/x402engine-mcp](https://github.com/agentc22/x402engine-mcp)** `⭐ 1` `updated ≤90d` MCP server connecting agents to 108 x402 pay-per-call APIs, including 72 LLMs plus media, web, code, crypto, audio, travel, and IPFS.
- **[agentlux/agentlux-mcp](https://github.com/agentlux/agentlux-mcp)** `⭐ 1` `updated ≤90d` An MCP server and toolkit that allows AI agents to interact with the AgentLux marketplace, identity, and social features.
- **[agmonetti/mathmethods-mcp](https://github.com/agmonetti/mathmethods-mcp)** `⭐ 1` `updated ≤30d` MCP server for numerical methods and dynamic systems: root finding, integration, ODEs, Monte Carlo, 1D/2D dynamical systems, and combat models.
- **[alexar76/aimarket-plugins](https://github.com/alexar76/aimarket-plugins)** `⭐ 1` `updated ≤30d` A collection of 15 plugins for the AIMarket hub, including TEE-based escrow, reputation systems, and an MCP packager.
- **[alog-mcp](https://github.com/asicojp/alog-mcp)** `⭐ 1` `updated ≤180d` An MCP server that enables AI agents to log real-time thinking processes and publish articles to the Alog blogging platform.
- **[ARADIA-systems/aradia-mcp-server](https://github.com/aradia-systems/aradia-mcp-server)** `⭐ 1` `updated ≤30d` ARADIA-systems/aradia-mcp-server ️ ☁️ - On-premise private AI systems from ARADIA on NVIDIA DGX hardware: hardware sizing, ROI modeling, partner onboarding, procurement and order tracking.
- **[ArturLys/ao3-mcp](https://github.com/arturlys/ao3-mcp)** `⭐ 1` `updated ≤90d` An MCP server that connects AI agents to Archive of Our Own to search, scrape, and have a secondary model read and rank fanfiction.
- **[atmospore/atmospore-mcp](https://github.com/atmospore/atmospore-mcp)** `⭐ 1` `updated ≤180d` An MCP server that provides pollen forecast tools for Claude and other AI assistants.
- **[bgaze/snapstack-server](https://github.com/bgaze/snapstack-server)** `⭐ 1` `updated ≤180d` SnapStack server is a local always-on Node.js process that receives browser captures from an extension and serves them via MCP to LLM clients.
- **[carrierone/verilexdata-mcp](https://github.com/carrierone/verilexdata-mcp)** `⭐ 1` `updated ≤1y` MCP server providing access to 20 structured datasets (NPI, SEC, PACER, Weather, OTC, crypto, prediction markets) for AI agents via the Model Context Protocol.
- **[Cartisien/engram-mcp](https://github.com/cartisien/engram-mcp)** `⭐ 1` `updated ≤180d` MCP server providing persistent semantic memory for AI agents via SQLite storage and local Ollama embeddings.
- **[Ceki-me/mcp-server](https://github.com/ceki-me/mcp-server)** `⭐ 1` `updated ≤90d` An MCP server providing agents with access to a marketplace for renting real residential Chrome browsers and hiring human specialists.
- **[cerebrochain-mcp-server](https://github.com/cerebrochain/cerebrochain-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server providing logistics and warehouse management tools for AI agents, including shipping rate comparison, inventory tracking, and AI-powered forecasting.
- **[chohyerinn/filter-mcp-server](https://github.com/chohyerinn/filter-mcp-server)** `⭐ 1` `updated ≤180d` MCP servers for comparing the performance and accuracy of approximate filters like Bloom, Counting Bloom, Cuckoo, and SuRF.
- **[cogdepot/mcp-server](https://github.com/cogdepot/mcp-server)** `⭐ 1` `updated ≤30d` An MCP server that connects AI agents to the cogDepot broker for anonymous capability discovery and peer-to-peer negotiation.
- **[Correctover/mcp-server](https://github.com/correctover/mcp-server)** `⭐ 1` `updated ≤90d` Correctover MCP Server — LLM Reliability Engineering for AI tools. Real-time 6-dimension output validation, self-healing failover, drift detection. Zero-dep, BYOK.
- **[davidmosiah/wellness-cgm-mcp](https://github.com/davidmosiah/wellness-cgm-mcp)** `⭐ 1` `updated ≤90d` A local-first MCP server that exposes continuous glucose monitor (CGM) data from Dexcom and FreeStyle Libre to AI agents.
- **[dockndevai/mcp-debezium](https://github.com/dockndevai/mcp-debezium)** `⭐ 1` `updated ≤30d` MCP server for Debezium / Kafka Connect — monitor & manage CDC connectors with security modes and access-control flags.
- **[dockndevai/mcp-kafka](https://github.com/dockndevai/mcp-kafka)** `⭐ 1` `updated ≤30d` MCP server for Apache Kafka — monitor & manage clusters, topics, and consumer groups (with lag), with security modes and access-control flags.
- **[Drop-to-run/drop2run-cli](https://github.com/drop-to-run/drop2run-cli)** `⭐ 1` `updated ≤30d` Source for the drop2run CLI and MCP server — publish a static site or an agent's output to an HTTPS link, no git and no build config.
- **[elicitly/elicitly](https://github.com/elicitly/elicitly)** `⭐ 1` `updated ≤30d` Elicitly Free Edition — human-in-the-loop for prompts and Agent Skills over MCP elicitation. Local MCP server (npx -y elicitly) + embeddable toolkit (@elicitly/tools).
- **[estevecastells/domscan-mcp](https://github.com/estevecastells/domscan-mcp)** `⭐ 1` `updated ≤90d` Domain intelligence over the Model Context Protocol: availability, DNS, WHOIS/RDAP, SSL, subdomains, valuation and brand protection for AI agents. Powered by DomScan.
- **[federicodeponte/openpaper-mcp](https://github.com/federicodeponte/openpaper-mcp)** `⭐ 1` `updated ≤30d` MCP server for generating academic papers with verified citations via OpenPaper.dev.
- **[forcedreamai/forcedream-mcp](https://github.com/forcedreamai/forcedream-mcp)** `⭐ 1` `updated ≤90d` An MCP server that enables discovery, invocation, and cryptographic verification of agents within the ForceDream marketplace.
- **[fredpsantos33/mcp-iteratools](https://github.com/fredpsantos33/mcp-iteratools)** `⭐ 1` `updated ≤1y` MCP server for IteraTools API — 20+ AI-powered tools (image gen, OCR, TTS, scraping, QR, weather, crypto, PDF...) with x402 micropayments.
- **[fz2000/android-jev](https://github.com/fz2000/android-jev)** `⭐ 1` `updated ≤30d` MCP server and skill that let an agent drive an Android phone naturally over adb.
- **[getanyapi-com/mcp](https://github.com/getanyapi-com/mcp)** `⭐ 1` `updated ≤30d` Local stdio MCP server for AnyAPI - hundreds of scraping and data APIs behind one key, priced per request in USD.
- **[gregario/3dprint-oracle](https://github.com/gregario/3dprint-oracle)** `⭐ 1` `updated ≤180d` An MCP server providing LLMs with authoritative access to 7,000+ 3D printing filaments and curated material science knowledge.
- **[humanforai/humanforai-mcp](https://github.com/humanforai/humanforai-mcp)** `⭐ 1` `updated ≤90d` MCP server for Human For AI — let your AI agent hire a real human for real-world verification, testing, review, and errands. Free pilot, no auth.
- **[kansei-link/kansei-mcp-server](https://github.com/kansei-link/kansei-mcp-server)** `⭐ 1` `updated ≤90d` A local-first MCP server providing cached SaaS documentation and workflow recipes to reduce token usage in AI agents.
- **[kaxiyu/aiagentmarket](https://github.com/kaxiyu/aiagentmarket)** `⭐ 1` kaxiyu/aiagentmarket ☁️ - Labor marketplace protocol for AI agents with atomic escrow and weighted anti-Sybil reputation.
- **[laszlopere/mcp-gnu-units](https://github.com/laszlopere/mcp-gnu-units)** `⭐ 1` `updated ≤90d` An MCP server that provides AI agents with deterministic unit conversion capabilities using the GNU units database.
- **[lihtness/gnomon-mcp](https://github.com/lihtness/gnomon-mcp)** `⭐ 1` `updated ≤180d` gnomon-mcp is an MCP server providing deterministic date, calendar, arithmetic, and unit conversion tools for AI agents via batch-enabled Python functions.
- **[lyrenth/lyrenth-mcp](https://github.com/lyrenth/lyrenth-mcp)** `⭐ 1` `updated ≤180d` An MCP server that reads public web pages through Lyrenth and returns cleaned, token-efficient Markdown documents to any MCP client.
- **[malinoto/tracepass-mcp-server](https://github.com/malinoto/tracepass-mcp-server)** `⭐ 1` `updated ≤90d` A Model Context Protocol server that connects AI assistants to TracePass, an EU Digital Product Passport platform for managing products, passports, and GS1 EPCIS 2.0 supply-chain events.
- **[mcp-server-peliqan](https://github.com/peliqan-io/mcp-server-peliqan)** `⭐ 1` `updated ≤180d` A local MCP server that connects AI assistants like Claude Desktop to the Peliqan data platform, exposing connectors for hundreds of SaaS tools and databases as callable tools.
- **[mctlhq/mctl-mcp](https://github.com/mctlhq/mctl-mcp)** `⭐ 1` `updated ≤180d` mctl MCP Server is a Model Context Protocol server that exposes 30+ Kubernetes and GitOps management tools via natural language.
- **[memebo-at/memeboat-mcp](https://github.com/memebo-at/memeboat-mcp)** `⭐ 1` `updated ≤90d` An MCP server that enables AI assistants to search a catalog of 25,000+ meme templates and generate shareable meme URLs.
- **[minia2auk/minia2a-mcp](https://github.com/minia2auk/minia2a-mcp)** `⭐ 1` minia2auk/minia2a-mcp ☁️ - Pay-per-call x402 gateway for agent tools: crypto and DeFi data, web scraping, AI inference, CAPTCHA solving, token security, DNS/WHOIS and gas monitoring.
- **[mirastacklabs-ai/mirastack-redfish-mcp](https://github.com/mirastacklabs-ai/mirastack-redfish-mcp)** `⭐ 1` mirastacklabs-ai/mirastack-redfish-mcp ️ ☁️ - Governed access to DMTF Redfish BMCs (iDRAC, iLO, XCC, OpenBMC) for power, thermal, firmware and BIOS management; read-only by default with tiered write modes.
- **[mjaskolski/wondel-skills-mcp](https://github.com/mjaskolski/wondel-skills-mcp)** `⭐ 1` mjaskolski/wondel-skills-mcp : Remote read-only MCP server over 50 book-based agent skills and 12 guided journeys — routes a task to the right framework (recommend_skills) and serves the real SKILL.md in-session (load_skill). No install, no account, no auth. Streamable HTTP: https://skills.wondel.ai/mcp.
- **[NexusFeed/nexusfeed-mcp](https://github.com/nexusfeed/nexusfeed-mcp)** `⭐ 1` `updated ≤180d` An MCP server that exposes real-time LTL freight fuel surcharge rates and US state ABC liquor license compliance records as structured tools and workflow prompts for AI agents.
- **[ONE8943/ai-furniture-hub](https://github.com/one8943/ai-furniture-hub)** `⭐ 1` `updated ≤180d` An MCP server providing 15 tools for millimeter-precise furniture and home product search, curation, and replacement finding via the Rakuten API for AI agents.
- **[Packrift/packrift-mcp](https://github.com/packrift/packrift-mcp)** `⭐ 1` Packrift/packrift-mcp : Remote MCP server for packaging procurement, exact-size SKU lookup, carton-fit recommendations, shipping estimates, and dimensional-weight calculations.
- **[patchistry/patchistry-mcp-server](https://github.com/patchistry/patchistry-mcp-server)** `⭐ 1` `updated ≤180d` Patchistry MCP server — AI agent commerce tools (list canvases, list patches, recommend builds, shipping, contact). Built with Model Context Protocol SDK. Deployable to Vercel free tier.
- **[pratie/bulktranscripts-mcp](https://github.com/pratie/bulktranscripts-mcp)** `⭐ 1` pratie/bulktranscripts-mcp : YouTube transcripts for one video, a whole channel or a playlist, plus YouTube search, channel and playlist listings, and new-upload tracking. Remote MCP: https://bulktranscripts.co/mcp.
- **[process-street/process-street-mcp](https://github.com/process-street/process-street-mcp)** `⭐ 1` process-street/process-street-mcp : Connects AI agents to Process Street workflows, tasks, runs, data sets, and operational records through the official hosted MCP server.
- **[SupplyMaven-SCR/supplymaven-mcp-server](https://github.com/supplymaven-scr/supplymaven-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server that exposes 24 real-time supply chain intelligence tools, including global disruption indices, commodity prices, port congestion, and predictive signals to AI agents.
- **[ThinAirTelematics/thinair-geo](https://github.com/thinairtelematics/thinair-geo)** `⭐ 1` `updated ≤90d` An MCP server providing geocoding, routing, traffic, weather, and place search tools to give AI agents geospatial awareness.
- **[tresor4k/macalc-mcp](https://github.com/tresor4k/macalc-mcp)** `⭐ 1` `updated ≤90d` An MCP server exposing 501 calculator tools across 22 categories, including tax calculations for eight countries, health metrics, construction formulas, and unit conversions.
- **[tuanone123/hotlikeshop-mcp](https://github.com/tuanone123/hotlikeshop-mcp)** `⭐ 1` tuanone123/hotlikeshop-mcp : E-commerce marketplace MCP for social-media & digital accounts, proxies and services. Search, compare and view best-sellers, then buy in chat via a safe quote->confirm flow (the AI can never spend on its own). Free keyless lookup; remote Streamable HTTP. Docs: https://hotlikeshop.com/ai.
- **[twitch-mcp](https://github.com/eclipsevr-live/twitch-mcp)** `⭐ 1` `updated >1y` An MCP server that connects AI assistants like Claude or Gemini CLI to Twitch Chat for moderation, stream management, and engagement.
- **[uAI-solana/useful-ai-mcp](https://github.com/uai-solana/useful-ai-mcp)** `⭐ 1` uAI-solana/useful-ai-mcp : Fully dynamic MCP server exposing 200+ shared utility tools for AI agents (unit conversion, math, parsing, text processing, and more). Tool list updates automatically. No auth required. Endpoint: https://api.usefulai.fun/mcp.
- **[usecortex-mcp](https://github.com/usecortex-official/usecortex-mcp)** `⭐ 1` `updated ≤1y` UseCortex MCP Server is a Model Context Protocol server that provides AI coding agents with persistent, encrypted memory for reading and writing knowledge.
- **[vitrine3d/mcp](https://github.com/vitrine3d/mcp)** `⭐ 1` `updated ≤180d` vitrine MCP server — manage 3D product viewers, scenes, and embeds from AI agents.
- **[viventine-space/orbit-sentinel-mcp](https://github.com/viventine-space/orbit-sentinel-mcp)** `⭐ 1` viventine-space/orbit-sentinel-mcp ️ ️ ☁️ - Search FCC, ITU, UNOOSA and FAA space regulatory filings via Orbit Sentinel: semantic search, entity dossiers, spectrum holdings, launch licenses and alerts.
- **[wjgoarxiv/pymol-mcp](https://github.com/wjgoarxiv/pymol-mcp)** `⭐ 1` wjgoarxiv/pymol-mcp - Headless PyMOL for molecular visualization, GROMACS/LAMMPS trajectories and clathrate-hydrate cage analysis, including H-bond networks and order parameters.
- **[wkalidev/multichain-mcp](https://github.com/wkalidev/multichain-mcp)** `⭐ 1` `updated ≤90d` MCP server for AI agents — Stacks, Celo, Base in one package.
- **[x402node/x402-mcp](https://github.com/x402node/x402-mcp)** `⭐ 1` `updated ≤90d` MCP server bringing 100+ x402-paid APIs to AI agents. Auto-syncs from CDP Bazaar. Stablecoin micropayments via x402 protocol across multi-chain (Base, Solana, Polygon, BNB, EVM). Built for agentic commerce: developer utilities, validators, encoders, generators, M2M payments, autonomous workflows. Works with Claude, Cursor, and any MCP-aware client.
- **[XavierFabregat/spotify-mcp](https://github.com/xavierfabregat/spotify-mcp)** `⭐ 1` `updated ≤90d` Control Spotify by talking to your AI — MCP server for Claude, Cursor, and any MCP client.
- **[Yang1Bai/claw-tsaver](https://github.com/yang1bai/claw-tsaver)** `⭐ 1` `updated ≤180d` A token-saving MCP proxy that intercepts large tool responses and returns compact previews with lazy expansion handles.
- **[yenchieh/diagramzu-mcp](https://github.com/yenchieh/diagramzu-mcp)** `⭐ 1` `updated ≤180d` MCP server for   diagramzu.ai — read/write Mermaid diagrams in your Space from Claude, Cursor, ChatGPT, or any MCP client.
- **[adamkrawczyk/agentpact-mcp-server](https://github.com/adamkrawczyk/agentpact-mcp-server)** `⭐ 0` `updated ≤90d` MCP server for AgentPact — the AI agent marketplace. 42 tools for discovering offers, negotiating deals, managing payments & reputation.
- **[AIops-tools/K8s-AIops](https://github.com/aiops-tools/k8s-aiops)** `⭐ 0` `updated ≤30d` A suite of MCP tools for governed Kubernetes operations, featuring built-in auditing, risk-tiering, and runaway budget protections.
- **[AIsa-public/AIsa-mcp-server](https://github.com/aisa-public/aisa-mcp-server)** `⭐ 0` `updated ≤30d` AIsa-public/AIsa-mcp-server ️ ☁️ - Search, inspect and run data APIs for SEO and AI visibility, finance, social, web search, sales and agent mail through a few meta-tools, with spending caps.
- **[ajfrai/qr-business-cards-mcp](https://github.com/ajfrai/qr-business-cards-mcp)** `⭐ 0` `updated ≤180d` MCP server for creating QR business cards via AI assistants. No API key required.
- **[AkaciaNL/basicdeploy-mcp](https://github.com/akacianl/basicdeploy-mcp)** `⭐ 0` `updated ≤30d` The runtime your AI agent deploys to one MCP call gives a live container with Postgres, S3 storage, and a public URL. Create, deploy, exec, and manage apps.
- **[Autoposting-ai/autoposting-mcp](https://github.com/autoposting-ai/autoposting-mcp)** `⭐ 0` `updated ≤90d` Remote MCP server for Autoposting - schedule, generate and publish social posts to X, LinkedIn, Instagram, Threads and YouTube.
- **[bodyegypt/lobbyvoices-mcp](https://github.com/bodyegypt/lobbyvoices-mcp)** `⭐ 0` `updated ≤90d` Official MCP server exposing Lobby's AI receptionist toolkit as eight free, no-auth tools for phone scripts, IVR menus, ElevenLabs prompts, missed-call math, call simulation, and receptionist hiring scores.
- **[BotHireAgent/BotHireMCPServer](https://github.com/bothireagent/bothiremcpserver)** `⭐ 0` `updated ≤30d` MCP server for BotHire — the machine-to-machine labor market where AI agents hire each other and pay agent-to-agent in USDT/USDC (x402, gasless, multi-chain: Base, Arbitrum, BNB, Solana) with ownerless on-chain escrow. Read-only discovery tools: search skills/agents, market stats, hire guide.
- **[bouncewatch/mcp](https://github.com/bouncewatch/mcp)** `⭐ 0` `updated ≤90d` Bounce Watch MCP is a hosted Model Context Protocol server that provides company signal data (funding, hiring, partnerships) via MCP tools and prompts.
- **[CodePhantom-1/ddmarketer-mcp](https://github.com/codephantom-1/ddmarketer-mcp)** `⭐ 0` `updated ≤30d` MCP server for validated SaaS opportunities mined from real user complaints across 8 sources. Hosted, no install, no API key needed.
- **[daedalusdevelopmentgroup/ddg-agent-payable-services](https://github.com/daedalusdevelopmentgroup/ddg-agent-payable-services)** `⭐ 0` `updated ≤90d` Pay-per-call x402 gateway for AI agents with MCP server and OpenAI-compatible API for agent tools, market data, RPC, and MCP security audits.
- **[DerrickAppOrg/derrick-mcp](https://github.com/derrickapporg/derrick-mcp)** `⭐ 0` `updated ≤30d` B2B data enrichment MCP server: verified work emails, phone numbers, company firmographics, tech stack, hiring signals and French SIRET/SIREN records, for any MCP-compatible client.
- **[echoloc-ai/echoloc-mcp](https://github.com/echoloc-ai/echoloc-mcp)** `⭐ 0` `updated ≤90d` Remote MCP server for echoloc company technographics — search 760K+ companies by tech stack with direction of change (adopting/replacing/evaluating).
- **[equinoxaifinance-rgb/civicdataforge-mcp](https://github.com/equinoxaifinance-rgb/civicdataforge-mcp)** `⭐ 0` `updated ≤30d` Official public-records MCP tools for STR permits, LEIE screening, childcare licensing, and film permits.
- **[fatenava/fatenava-mcp](https://github.com/fatenava/fatenava-mcp)** `⭐ 0` `updated ≤30d` FateNava MCP — BaZi, Zi Wei Dou Shu & Western Astrology chart casting for AI agents.
- **[forgemeshlabs/anomaly-mcp](https://github.com/forgemeshlabs/anomaly-mcp)** `⭐ 0` `updated ≤30d` An MCP server providing AI agents with anomaly detection capabilities across blockchain, aviation, and GitHub activity.
- **[FoundryNet/forge-mcp](https://github.com/foundrynet/forge-mcp)** `⭐ 0` `updated ≤90d` A cross-manufacturer industrial MCP server that normalizes telemetry from 16 OEM families for machine identity, automation, and on-chain work attestation.
- **[GarphenGate/moltline-mcp](https://github.com/garphengate/moltline-mcp)** `⭐ 0` `updated ≤30d` Zero-dependency stdio bridge for the Moltline Studio MCP fleet - 19 hosted streamable-HTTP servers, 132 tools, 92 of them free with no signup.
- **[getproxykit/proxykit-mcp](https://github.com/getproxykit/proxykit-mcp)** `⭐ 0` `updated ≤30d` MCP server for ProxyKit — drive a local HTTP(S) debugging proxy from Claude, Cursor, and any MCP host.
- **[gofrantic/frantic-mcp](https://github.com/gofrantic/frantic-mcp)** `⭐ 0` `updated ≤90d` A public bounty board where AI agents do paid work. Claim funded bounties, get paid in USDC on Base on accepted delivery.
- **[greencalculus/greencalculus-mcp](https://github.com/greencalculus/greencalculus-mcp)** `⭐ 0` `updated ≤30d` Run the GreenCalculus MCP server over stdio — sourced carbon emission factors and audit-traced calculations an AI can cite.
- **[handsforagents/handsforagents-mcp](https://github.com/handsforagents/handsforagents-mcp)** `⭐ 0` `updated ≤30d` MCP server for handsforagents.com — a human in the EU makes, assembles, measures, verifies and ships physical things for your agent.
- **[helena-bioinformatics/noodle-mcp](https://github.com/helena-bioinformatics/noodle-mcp)** `⭐ 0` `updated ≤30d` Noodle Biomedical Literature Discovery MCP — search papers and traverse citation or semantic literature graphs.
- **[ianewsfr-a11y/ergonia](https://github.com/ianewsfr-a11y/ergonia)** `⭐ 0` ianewsfr-a11y/ergonia ️ ☁️ - Marketplace of verifiable tasks for AI agents: publish independently checkable tasks, submit work and build reputation, with actions in a hash-chained register.
- **[iPythoning/domain-monitor-mcp-server](https://github.com/ipythoning/domain-monitor-mcp-server)** `⭐ 0` iPythoning/domain-monitor-mcp-server : Domain WHOIS and SSL certificate monitoring via RDAP and crt.sh — single or batch domain checks with severity classification. Zero API keys, stdio transport. Install: npx domain-monitor-mcp-server.
- **[jaimenbell/mcp-factory](https://github.com/jaimenbell/mcp-factory)** `⭐ 0` jaimenbell/mcp-factory - Manifest-driven MCP server scaffolder: generate MCP servers from YAML manifests, with batch registration and a live routing hub.
- **[joshseane/-nmlp-mcp](https://github.com/joshseane/-nmlp-mcp)** `⭐ 0` `updated ≤90d` An MCP server providing tools for antiquarian first-edition identification and New Mexico book-donation logistics.
- **[kame6493-del/mcp-diagnostics](https://github.com/kame6493-del/mcp-diagnostics)** `⭐ 0` kame6493-del/mcp-diagnostics : Website and server diagnostics — DNS, SSL, HTTP headers, and related checks via MCP.
- **[luno-cms/mcp](https://github.com/luno-cms/mcp)** `⭐ 0` luno-cms/mcp ️ ☁️ - LUNO hosted backend platform: CMS, forms, auth and storage. Unrelated to the Luno cryptocurrency exchange.
- **[lxman/obsbot-mcp](https://github.com/lxman/obsbot-mcp)** `⭐ 0` `updated ≤90d` Cross-platform MCP server for OBSBOT Tiny 2 (UVC) camera control.
- **[mcpqueen/mcpqueen](https://github.com/mcpqueen/mcpqueen)** `⭐ 0` `updated ≤90d` The evidence layer for MCP — every registry server probed live, graded with verbatim evidence, plus Trust Receipts. Itself an MCP server at mcpqueen.com/mcp (7 tools, no auth).
- **[mediiiiium/mcp-jp](https://github.com/mediiiiium/mcp-jp)** `⭐ 0` `updated ≤90d` mcp-jp — Japanese SMB SaaS connectors（公式MCPが無い日本のSaaS向けMCPサーバー集）.
- **[musajala/musajala-mcp](https://github.com/musajala/musajala-mcp)** `⭐ 0` musajala/musajala-mcp ☁️ - Collaborative Arabic poetry arena and Poetic Equity protocol connecting AI agents with human poets.
- **[nanoleaf-mcp-server](https://github.com/srnetadmin/nanoleaf-mcp-server)** `⭐ 0` `updated >1y` An MCP server that lets developers control Nanoleaf smart lights through terminal commands in Warp or any MCP-compatible client.
- **[neoninnovationlab/neon-mcp-gateway](https://github.com/neoninnovationlab/neon-mcp-gateway)** `⭐ 0` @neoninnovationlab/neon-mcp-gateway ☁️ - Edge firewall for exposing internal PostgreSQL databases and APIs to AI agents with strict validation.
- **[nicolasmartalog/docweave-mcp](https://github.com/nicolasmartalog/docweave-mcp)** `⭐ 0` docweave/mcp ☁️ - Generate and read PDFs for AI agents: a generate_pdf tool (HTML, a URL, or a template + JSON → PDF) and a read_pdf tool (a PDF → text/markdown). Run locally with npx @docweave/mcp or use the hosted streamable-HTTP endpoint. Chromium-rendered, priced per document.
- **[paigy-ai/mcp](https://github.com/paigy-ai/mcp)** `⭐ 0` `updated ≤90d` paigy-ai/mcp ☁️ - Call, text, or push the user's phone when an agent needs input mid-task — reply by voice instead of babysitting a long-running or blocked terminal. Works with any MCP client, not just Claude. Install: npx -y @paigy/mcp@latest.
- **[palisadeemail/palisade-mcp](https://github.com/palisadeemail/palisade-mcp)** `⭐ 0` palisadeemail/palisade-mcp : Official Palisade MCP server for AI-powered DMARC, SPF, DKIM, BIMI, MTA-STS, DNS, domain verification, and email-authentication remediation management.
- **[rightonpar-llc/meshmarket-mcp](https://github.com/rightonpar-llc/meshmarket-mcp)** `⭐ 0` RightOnPar-LLC/mesh-connector ☁️ - MeshMarket agent-to-agent capability exchange: agents browse, self-onboard, rent memory, reasoning and safety per call, and publish their own tools.
- **[ryan-knowone/quota-dashboard-mcp](https://github.com/ryan-knowone/quota-dashboard-mcp)** `⭐ 0` ryan-knowone/quota-dashboard-mcp : Local MCP server for real-time AI subscription quota across Claude Code Max, Kimi, and Z.ai. Tokens stay on your machine; install with npx -y ryan-knowone/quota-dashboard-mcp.
- **[samgouffsm-crypto/x402-agent-kit](https://github.com/samgouffsm-crypto/x402-agent-kit)** `⭐ 0` samgouffsm-crypto/x402-agent-kit : MCP server (TypeScript, stdio) with 22 pay-per-call x402 data tools: gov procurement search, SEC filings, clinical trials, PDF extraction, patent search, auto parts intelligence, invoice extraction, US sales-tax rates, business verification. $0.01-$0.10 per call in USDC on Base, payments handled automatically, no signup. Run from source: clone, npm install && npm run build.
- **[servelink-swyftlabs/serve-mcp](https://github.com/servelink-swyftlabs/serve-mcp)** `⭐ 0` servelink-swyftlabs/serve-mcp ️ ️ ☁️ - Public HTTPS links for local files, directories or dev servers, via a live tunnel or published copy, with password protection, TTLs and named subdomains.
- **[slshults/shakespeare-monologues-mcp](https://github.com/slshults/shakespeare-monologues-mcp)** `⭐ 0` slshults/shakespeare-monologues-mcp ☁️ - Search Shakespeare monologues by character, play or first line, and fetch full text, modern-English paraphrases and scene or play summaries.
- **[smeet666/mcp-books](https://github.com/smeet666/mcp-books)** `⭐ 0` smeet666/mcp-books ☁️ - Search the Internet Archive, the Library of Congress and the Bibliothèque nationale de France at once, across catalogues and inside scanned text.
- **[Spicy-API/spicy-mcp](https://github.com/spicy-api/spicy-mcp)** `⭐ 0` Spicy-API/spicy-mcp : Local MCP server for the SpicyAPI image, video and text generation API that browses the model catalog, quotes and creates tasks, uploads inputs, and fetches outputs.
- **[TheRealDalaiLama/glyphdna-mcp](https://github.com/therealdalailama/glyphdna-mcp)** `⭐ 0` TheRealDalaiLama/glyphdna-mcp - Agent identity with self-held Ed25519 keys, verifiable multi-party meeting rooms with co-signed transcript receipts, and script provenance chains.
- **[TOBYCAI/image-mcp](https://github.com/tobycai/image-mcp)** `⭐ 0` TOBYCAI/image-mcp - Offline image processing: resize, crop, convert, compress, rotate, flip, thumbnails, watermarks, effects, placeholders and overlays.
- **[unitedideas/aidevboard-mcp](https://github.com/unitedideas/aidevboard-mcp)** `⭐ 0` unitedideas/aidevboard-mcp : MCP server for AI developer job search. Search 5,000+ AI and ML positions with filters for role, location, and salary. Live at aidevboard.com.
- **[vince-gonzalez/opticquiz-mcp](https://github.com/vince-gonzalez/opticquiz-mcp)** `⭐ 0` vince-gonzalez/opticquiz-mcp - Color-vision accessibility: check palettes and images for colorblind safety, generate safe palettes, simulate color blindness and create Ishihara-style plates.
- **[@tunedforai/x402-mcp](https://www.npmjs.com/package/@tunedforai/x402-mcp)** An npm package providing an MCP server implementation for the x402 protocol.
- **[Actors MCP Server](https://mcp.apify.com)** An MCP server that connects AI agents to Apify's web scraping and automation tools.
- **[Audioscrape](https://audioscrape.com/docs/integrations/mcp)** Audioscrape provides an MCP server that enables AI assistants to search and access transcribed audio content from podcasts, interviews, and other spoken media.
- **[Augments](https://augments.dev)** An MCP server that provides type signatures, prose documentation, and code examples for any npm package.
- **[Carbon Voice](https://getcarbon.app)** An MCP server providing communication-related tools and capabilities to AI agents.
- **[ContextStream](https://contextstream.io)** ContextStream – Shared project context for Cursor, Claude Code, Codex, Grok, and the rest. Intelligence isn’t the bottleneck. Context is. Remote MCP: https://mcp.contextstream.io/mcp.
- **[Curio MCP](https://designbycurio.com/mcp)** Curio MCP – Design-style library for AI: search hundreds of real design styles and fetch token-complete, machine-readable specs (colors, typography, spacing, components) to apply to sites, decks, and products. OAuth sign-in, free tier included. Documentation.
- **[DAISYS](https://daisys.ai)** DAISYS is an MCP server that provides memory and context capabilities for AI agents via the Model Context Protocol.
- **[ELEMENT.FM](https://gitlab.com/elementfm/mcp)** A GitLab project hosting an MCP (Model Context Protocol) server implementation.
- **[gxtract](https://sascharo.github.io/gxtract)** GXtract is an MCP server that extracts architectural and implementation details from documents using GroundX integration.
- **[Instafill.ai](https://instafill.ai)** Instafill.ai – MCP server for AI-powered PDF form filling. Auto-completes any PDF form by extracting fields and filling them from saved profiles, uploaded files, or supplied data.
- **[Knit MCP](https://developers.getknit.dev/docs/knit-mcp-server-getting-started)** A managed service that provides hosted Model Context Protocol (MCP) servers for connecting AI agents to various SaaS applications.
- **[npm package](https://npmjs.com/package/autario-mcp)** An npm package providing an MCP server for data platform integration.
- **[OctoEverywhere For 3D Printing](https://octoeverywhere.com/mcp)** A remote MCP server enabling AI assistants to interact with and control 3D printers.
- **[Push To Display](https://pushtodisplay.com)** A programmable display layer that allows developers to push structured content from AI agents, CI/CD pipelines, or scripts to iOS and Android devices via a single API.
- **[Unblocked MCP](https://getunblocked.com/unblocked-mcp)** An MCP server that delivers synthesized organizational context from sources like GitHub, Slack, and Jira to AI agents.
- **[WayStation](https://waystation.ai/connect/mcp-server)** MCP server that connects MCP hosts to productivity tools via a no-code integration hub.
- **[Zapier](https://zapier.com/mcp)** Zapier MCP is a Model Context Protocol server that connects AI clients to 9,000+ apps via Zapier's managed auth and action ecosystem.
- **[ZenML](https://zenml.io)** ZenML - Interact with your MLOps and LLMOps pipelines through your ZenML MCP server.

</details>

## Registries & Discovery

- **[modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry)** `⭐ 7.3k` `updated ≤90d` A community-driven registry service and API that provides MCP clients with a searchable directory of available Model Context Protocol servers. <details><summary>More about</summary>

  It acts as the central app store for MCP servers, giving developers a stable API to discover, validate, and integrate tooling into their AI agents and editors.

  _We have successfully built an app store for the protocol that lets your AI use other tools, meaning we now have a dependency graph for our dependency graphs._

  `mcp` `registry` `discovery` `protocol`
  </details>
- **[tadas-github/a2asearch-mcp](https://github.com/tadas-github/a2asearch-mcp)** `⭐ 21` `updated ≤1y` An MCP server and CLI tool that provides a unified search interface across 10,000+ indexed AI agents, MCP servers, CLI tools, and agent skills. <details><summary>More about</summary>

  It solves the growing pains of ecosystem discovery by letting developers query a massive agent/MCP directory directly from their coding assistant instead of manually browsing GitHub or npm.

  _We now need an AI tool to help us search for all the other AI tools we haven't yet installed to help us write code._

  `mcp` `search` `discovery` `cli` `agent-registry`
  </details>
- **[labmimors/dsh-mcp-lens](https://github.com/labmimors/dsh-mcp-lens)** `⭐ 8` MCP Lens – Open-source DeepSeek Harness plugin and GitHub Action for progressive MCP tool discovery; its published 1,000-tool benchmark reduces the model-facing MCP interface from 1,000 schemas to 2 and the component schema JSON from 647,962B to 1,114B.
- **[aidevelopers2/remoteopenclaw-mcp](https://github.com/aidevelopers2/remoteopenclaw-mcp)** `⭐ 6` `updated ≤90d` An MCP server that enables AI agents to search the Remote OpenClaw directory for MCP servers, agent skills, and plugins. <details><summary>More about</summary>

  It allows developers to discover and install new agent capabilities directly through their existing AI coding assistants without leaving the terminal or editor.

  _Because searching for tools via an agent is the only logical response to an ecosystem that expands faster than you can read the documentation._

  `mcp` `discovery` `agent-skills` `cli`
  </details>
- **[khalidsaidi/ragmap](https://github.com/khalidsaidi/ragmap)** `⭐ 6` `updated ≤180d` A discovery layer and MCP server for finding and routing to RAG-related MCP servers. <details><summary>More about</summary>

  It enables AI agents to dynamically discover and select the most appropriate retrieval tool for a specific task based on constraints like reachability and score.

  _Another layer of abstraction to manage in the increasingly complex quest to help your agent find its own tools._

  `mcp` `rag` `discovery` `retrieval` `agent-tools`
  </details>
- **[Aganium/agenium](https://github.com/aganium/agenium)** `⭐ 4` `updated ≤1y` An agent-to-agent communication protocol providing identity, discovery, and secure messaging via the `agent://` URI scheme. <details><summary>More about</summary>

  It provides a standardized way for autonomous agents to find each other and exchange messages securely using mTLS and a DNS-like resolution system.

  _Now we have to decide if our agents need a dedicated URI and a TON-based domain registration just to talk to each other._

  `agent-protocol` `agent-discovery` `mcp-compatible` `a2a` `identity`
  </details>
- **[c5huracan/meyhem](https://github.com/c5huracan/meyhem)** `⭐ 4` `updated ≤1y` Agent-native search service with feedback-driven ranking for MCP server discovery and web search. <details><summary>More about</summary>

  Developers can discover and rank MCP servers by community trust and perform outcome-ranked web searches directly from their agents.

  _Now your agent can spend less time arguing with itself about which MCP server to use and more time arguing with you about tabs vs spaces._

  `mcp` `search` `agent-tools` `discovery` `ranking`
  </details>
- **[cinderwright-ai/cinderwright-api](https://github.com/cinderwright-ai/cinderwright-api)** `⭐ 4` `updated ≤90d` An MCP server and discovery hub for finding and comparing agent-to-agent payment services across x402, MPP, and L402 protocols. <details><summary>More about</summary>

  It allows developers and agents to discover, test, and integrate cross-protocol payment endpoints directly through MCP-compatible assistants like Claude or Cursor.

  _Because apparently, the next hurdle for autonomous agents isn't intelligence, but negotiating a micro-payment for a weather API._

  `mcp` `agent-payments` `discovery` `x402` `api`
  </details>
- **[garasegae/aiskillstore](https://github.com/garasegae/aiskillstore)** `⭐ 4` `updated ≤180d` An agent-first skill marketplace and MCP server for the discovery and installation of cross-platform AI agent skills via the USK open standard. <details><summary>More about</summary>

  It enables agents to programmatically find, vet, and install their own capabilities across different runtimes (like Claude Code and Cursor) without manual human configuration.

  _We have reached the stage where AI agents are now shopping for their own plugins so they can better ignore our requests._

  `mcp` `agent-skills` `marketplace` `usk` `interoperability`
  </details>
- **[Jackalope-Dev/allmcps-server](https://github.com/jackalope-dev/allmcps-server)** `⭐ 4` Jackalope-Dev/allmcps-server ☁️ - Search and browse the AllMCPs.com registry of MCP servers, get install configs, and submit or claim listings.
- **[rplryan/x402-discovery-mcp](https://github.com/rplryan/x402-discovery-mcp)** `⭐ 4` `updated ≤1y` An MCP server that connects AI agents to a continuously updated catalog of x402 micropayment services with real-time quality signals and facilitator compatibility checks. <details><summary>More about</summary>

  It gives Claude, Cursor, and Windsurf agents a discovery layer for the x402 agentic economy so they can find live, trustworthy, paid APIs without manually vetting endpoints.

  _We’ve reached the point where agents need a dedicated discovery protocol to safely spend micro-budgets across a registry of endpoints that may or may not be alive._

  `mcp` `x402` `service-discovery` `micropayments` `base`
  </details>
- **[agentbodegastore/agentbodega](https://github.com/agentbodegastore/agentbodega)** `⭐ 3` `updated ≤90d` An MCP server that enables agents to discover, inspect, and plan calls for a registry of paid, x402-ready tool endpoints. <details><summary>More about</summary>

  It provides agents with a programmatic way to browse, compare, and format requests for third-party services without manual documentation scraping.

  _We have reached the stage where agents require a specialized discovery layer just to navigate the complex marketplace of tools they need to do their jobs._

  `mcp` `discovery` `api-catalog` `x402`
  </details>
- **[agenthotspot-mcp](https://github.com/agenthotspot/agenthotspot-mcp)** `⭐ 3` `updated ≤1y` An MCP server that allows AI agents to search and discover over 6,000 MCP connectors from the AgentHotspot marketplace. <details><summary>More about</summary>

  It provides a centralized discovery mechanism for agents to expand their capabilities via the Model Context Protocol.

  _Because searching for a tool to find more tools is the most honest abstraction of the current AI ecosystem._

  `mcp` `discovery` `marketplace` `agents`
  </details>
- **[sonnyflylock/voxie-ai-directory-mcp](https://github.com/sonnyflylock/voxie-ai-directory-mcp)** `⭐ 3` `updated ≤1y` An MCP server that lets AI assistants query a directory of AI services and retrieve webchat URLs for chatting with various AI personas. <details><summary>More about</summary>

  It allows Claude and other MCP-compatible assistants to dynamically look up and route users to external AI chat services directly from their workspace.

  _We have now built an MCP server so your AI assistant can find other AI assistants to chat with, accelerating the recursive loop of AI talking to AI while you pay the tokens._

  `mcp` `directory` `ai-services` `chatbot` `integration`
  </details>
- **[RipperMercs/tensorfeed](https://github.com/rippermercs/tensorfeed)** `⭐ 2` `updated ≤90d` Tensorfeed is an MCP server aggregator that provides a collection of Model Context Protocol server implementations. <details><summary>More about</summary>

  It helps developers discover and deploy MCP servers to extend AI assistants with standardized tool and resource access.

  _Yet another directory for a protocol that promises to solve tool fragmentation by adding another layer of aggregation._

  `mcp` `aggregator` `tooling`
  </details>
- **[oxgeneral/agentnet](https://github.com/oxgeneral/agentnet)** `⭐ 1` `updated ≤1y` AgentNet is an agent-to-agent referral network and MCP server that lets AI agents discover each other, cross-refer users, and earn credits based on confirmed referrals. <details><summary>More about</summary>

  It provides a discovery and distribution layer for MCP servers and bots that otherwise have zero users, turning idle agents into a cross-referring economy.

  _We have now built a credit-scored, reputation-tracked cold-call network so that AI agents can do their own growth hacking while your repo still has no stars._

  `mcp` `agent-discovery` `referral-network` `multi-agent`
  </details>
- **[rafsilva85/skillflow-mcp-server](https://github.com/rafsilva85/skillflow-mcp-server)** `⭐ 1` rafsilva85/skillflow-mcp-server : AI skills marketplace for searching and discovering curated skills for coding agents.
- **[adw0rd/awesome-mcp-tools-mcp](https://github.com/adw0rd/awesome-mcp-tools-mcp)** `⭐ 0` `updated ≤180d` A CLI and stdio-to-HTTP bridge for searching and connecting to a catalog of 2,000+ MCP servers. <details><summary>More about</summary>

  It provides a centralized way to discover and instantly wire new Model Context Protocol capabilities into assistants like Claude Desktop and Cursor.

  _Because the industry has decided that the solution to tool fatigue is simply providing 2,000 more tools._

  `mcp` `cli` `registry` `discovery` `bridge`
  </details>
- **[hostodo/hostodo-mcp](https://github.com/hostodo/hostodo-mcp)** `⭐ 0` `updated ≤90d` A metadata registry for the hosted Hostodo MCP server to enable AI assistant management of VPS infrastructure. <details><summary>More about</summary>

  It allows developers to use AI agents to perform cloud operations like power management, DNS updates, and SSH key administration through a standardized protocol.

  _Finally, an AI agent that can reboot your production server and accidentally delete your DNS records before you've even finished your coffee._

  `mcp` `vps` `cloud-management` `infrastructure`
  </details>
- **[team886/findagent-mcp](https://github.com/team886/findagent-mcp)** `⭐ 0` team886/findagent-mcp ☁️ - Marketplace of vetted agents with automated security scans plus human review, credential-to-host binding and sandboxed hosted code with default-deny egress.
- **[DIDLogic](https://didlogic.com)** A collection of Model Context Protocol (MCP) server implementations. <details><summary>More about</summary>

  It provides a curated list of standardized connectors to give AI assistants access to external tools and data sources.

  _Because one protocol to rule them all is the only way to stop manually copy-pasting JSON into your chat window._

  `sip` `voip` `telephony` `ai-voice` `infrastructure`
  </details>
- **[modelmarket.dev](https://modelmarket.dev)** A discovery and marketplace platform for AI agents to find and invoke capabilities via the Model Context Protocol (MCP). <details><summary>More about</summary>

  It provides a standardized way for autonomous agents to discover, trade, and pay for specialized tools in real time using a protocol-based economy.

  _We are one step away from agents hyper-inflating the price of weather-reading capabilities on a live terminal._

  `mcp` `agent-economy` `discovery` `micropayments`
  </details>
- **[Official MCP Registry](https://registry.modelcontextprotocol.io/v0/servers)** A central registry for discovering Model Context Protocol (MCP) servers. <details><summary>More about</summary>

  It provides a unified way for developers to find and connect standardized tools and data sources to their AI agents.

  _Another indispensable layer of middleware to manage in the ever-expanding agentic stack._

  `mcp` `registry` `discovery` `protocol`
  </details>
- **[smithery.ai](https://smithery.ai)** Smithery is a registry and discovery platform for MCP servers that enables AI agents to connect to thousands of tools and services. <details><summary>More about</summary>

  It simplifies agent tooling by handling authentication, sessions, and credentials, letting developers focus on building agent capabilities rather than integration plumbing.

  _Another layer in the MCP stack that makes you wonder if we’re just shifting complexity from API keys to tool discovery fatigue._

  `mcp` `registry` `discovery`
  </details>

## Clients & Inspector Tools

- **[ahujasid/blender-mcp](https://github.com/ahujasid/mcp-for-blender)** 🔥 `⭐ 29.9k` `updated ≤30d` An open-source Model Context Protocol (MCP) implementation that allows LLMs to interact with and control Blender via Python. <details><summary>More about</summary>

  It enables prompt-driven 3D modeling, scene manipulation, and asset management by bridging LLM reasoning with Blender's Python API.

  _Because apparently, typing commands in a console wasn't enough, now we're negotiating with 3D meshes through a socket-based LLM interface._

  `3d-modeling` `automation` `blender` `mcp` `python`
  </details>
- **[FastMCP](https://github.com/prefecthq/fastmcp)** `⭐ 28k` `updated ≤90d` A Python framework for building Model Context Protocol servers, clients, and interactive apps with automatic schema generation and protocol lifecycle management. <details><summary>More about</summary>

  It standardizes and simplifies how developers expose tools and data to LLMs, handling validation, transport, and authentication so you can focus on logic instead of protocol boilerplate.

  _We have successfully abstracted away the pain of building protocol servers, which means the only thing left to argue about is whether your MCP server should have been a REST API in 2023._

  `mcp` `python` `framework` `tooling` `protocol`
  </details>
- **[agentgateway/agentgateway](https://github.com/agentgateway/agentgateway)** `⭐ 5.1k` `updated ≤30d` Next Generation Agentic Proxy for AI Agents and MCP servers.
- **[mcphub.nvim](https://github.com/ravitemer/mcphub.nvim)** `⭐ 1.8k` `updated ≤1y` An MCP client for Neovim that integrates, manages, and tests MCP servers directly within the editor for use with compatible chat and coding plugins. <details><summary>More about</summary>

  It allows Neovim users to bring external MCP tooling into their existing chat-assisted workflows without leaving the editor.

  _We have reached the point where your editor now needs a dedicated client just to manage the protocol that manages the tools that manage the AI that manages your code._

  `neovim` `mcp` `editor-plugin` `developer-tools`
  </details>
- **[etsd-tech/mcp-pointer](https://github.com/etsd-tech/mcp-pointer)** `⭐ 598` `updated ≤1y` An MCP server and Chrome extension that allows users to select DOM elements in a browser and pass them as rich textual context to agentic coding tools. <details><summary>More about</summary>

  It bridges the gap between what a developer sees in the browser and what an AI agent can interpret, providing deep CSS and HTML context via the Model Context Protocol.

  _Finally, a way to make sure your AI agent knows exactly which nested div is causing that layout shift._

  `mcp` `browser-automation` `coding-agents` `dom-inspection` `context-injection`
  </details>
- **[mcp-cli](https://github.com/wong2/mcp-cli)** `⭐ 447` `updated ≤180d` A CLI inspector for the Model Context Protocol.
- **[MCP-Chatbot](https://github.com/3choff/mcp-chatbot)** `⭐ 251` `updated >1y` A CLI-based chatbot that demonstrates integration with the Model Context Protocol (MCP) to support dynamic tool discovery. <details><summary>More about</summary>

  It provides a reference implementation for building custom AI clients that can interact with various MCP servers and LLM providers.

  _Just what we needed: a new way to debug why your LLM suddenly thinks it can browse the web via a JSON config file._

  `mcp` `cli` `llm-client` `tool-use` `python`
  </details>
- **[MCP-Connect](https://github.com/evalsone/mcp-connect)** `⭐ 240` `updated ≤1y` An HTTP gateway that exposes local stdio-based MCP servers as streamable HTTP APIs or request/response bridges. <details><summary>More about</summary>

  It allows cloud-hosted AI agents to interact with local development tools and data via the Model Context Protocol.

  _Just what we needed: another layer of networking complexity to debug when your cloud LLM suddenly can't find your local filesystem._

  `mcp` `bridge` `http` `stdio` `gateway`
  </details>
- **[activeing123/mcptoon](https://github.com/activeing123/mcptoon)** `⭐ 207` `updated ≤30d` One zero-dependency CLI for all your MCP tools and agent skills. 99.2% fewer tokens on tool discovery, one config for every agent, nothing pre-installed. | 一个零依赖 CLI，管所有 MCP 工具和 Agent 技能。工具发现省 99.2% token，一份配置通吃所有 Agent，原生不预装。227KB，纯 Python 标准库。.
- **[sandbaseai/cli](https://github.com/sandbaseai/cli)** `⭐ 188` sandbaseai/cli : Agent-first CLI and local MCP bridge connecting 25 AI client targets to 2,000+ AI models and APIs, with OAuth onboarding, safe config updates, diagnostics, and rollback.
- **[Reloaderoo](https://github.com/cameroncooke/reloaderoo)** `⭐ 125` `updated ≤1y` A dual-mode MCP development tool offering CLI inspection and a transparent proxy server for debugging and hot-reloading MCP servers. <details><summary>More about</summary>

  It solves two core pain points in MCP server development: testing without client setup and hot-reloading servers without restarting AI sessions.

  _Finally, a way to debug MCP servers without feeling like you're debugging a debugging tool._

  `mcp` `debugging` `proxy` `cli` `hot-reload`
  </details>
- **[discourse/discourse-mcp](https://github.com/discourse/discourse-mcp)** `⭐ 76` `updated ≤90d` An MCP stdio server that exposes Discourse forum capabilities as tools and resources for AI agents. <details><summary>More about</summary>

  Lets AI agents read, search, and optionally write to Discourse forums as first-class tools, turning community discussions into actionable context.

  _Now your AI can argue with users in your Discourse forum at 1 request per second._

  `mcp` `discourse` `forum-integration` `stdio-server`
  </details>
- **[Sendmux/sendmux-sdk](https://github.com/sendmux/sendmux-sdk)** `⭐ 65` Sendmux/sendmux-sdk ☁️ - Email inbox API MCP server for AI agents to receive, search, and send mail through hosted or local Sendmux Product MCP.
- **[mcp-client](https://github.com/rakesh-eltropy/mcp-client)** `⭐ 49` `updated >1y` A simple REST API and CLI client for interacting with MCP-compatible servers, integrated with LangChain to route LLM prompts across multiple tools. <details><summary>More about</summary>

  It gives developers a lightweight programmatic surface to wire MCP servers into LangChain workflows without adopting a heavier agent platform.

  _Because nothing says 'streamlined developer experience' like spinning up a custom REST API just to ask a local SQLite database what the capital of India is._

  `mcp` `cli` `rest-api` `langchain` `client`
  </details>
- **[hypurrquant/perp-cli](https://github.com/hypurrquant/perp-cli)** `⭐ 38` `updated ≤180d` A multi-DEX perpetual futures CLI with MCP server support for AI-powered trading across Pacifica, Hyperliquid, Lighter, and Aster. <details><summary>More about</summary>

  Developers building AI trading agents can use this CLI to interact with multiple DEXs, manage portfolios, and execute strategies programmatically.

  _Now your AI agent can lose money on Solana, Ethereum, and BNB Chain simultaneously._

  `trading` `mcp-server` `cli` `defi` `perpetual-futures`
  </details>
- **[anythink-cloud/anythink-cli](https://github.com/anythink-cloud/anythink-cli)** `⭐ 6` `updated ≤90d` An open-source CLI and MCP server for managing the Anythink headless backend platform. <details><summary>More about</summary>

  Allows developers to manage projects, data entities, workflows, and API keys directly from the terminal or via an MCP-enabled AI assistant.

  _The transition from a GUI to a CLI to an MCP server is a comforting reminder that we are just adding more layers of abstraction to the same set of CRUD operations._

  `cli` `mcp` `backend-as-a-service` `headless`
  </details>
- **[realwigu/mcp-doctor](https://github.com/realwigu/mcp-doctor)** `⭐ 3` `updated ≤1y` A zero-config CLI that auto-discovers MCP server configurations across Claude Code, Cursor, VS Code, and Windsurf to diagnose connections, audit security issues, and benchmark latency. <details><summary>More about</summary>

  As developers wire up more MCP servers across multiple AI tools, this provides a single command to catch silent failures, leaked secrets, and performance regressions before they break your workflow.

  _We have officially reached the point where we need a doctor for the protocol that connects our AI tools to the tools that connect our AI tools._

  `mcp` `cli` `devtools` `security` `benchmarking`
  </details>
- **[x402station-mcp](https://github.com/sf1nx/x402station-mcp)** `⭐ 3` `updated ≤180d` MCP adapter (x402station-mcp on npm) + AgentKit action provider + consumer-side demo agent for x402station — pre-flight oracle for x402 endpoints. Backend (signal logic, ingest pipeline, probe history) stays private.
- **[pushtodisplay/cli](https://github.com/pushtodisplay/cli)** `⭐ 2` `updated ≤180d` cli & mcp-server package for Push To Display.
- **[socialfaktory/socialfaktory-mcp](https://github.com/socialfaktory/socialfaktory-mcp)** `⭐ 2` adifsgaid/socialfaktory-mcp : Connects agents to SocialFaktory (https://www.socialfaktory.com), a hosted MCP server with OAuth that writes, generates, schedules and publishes a brand's social content on TikTok, Instagram, YouTube, X, LinkedIn, Facebook and Pinterest.
- **[DataCraftsmanAU/vineverse-mcp](https://github.com/datacraftsmanau/vineverse-mcp)** `⭐ 1` `updated ≤30d` A stdio bridge for connecting Model Context Protocol (MCP) clients to a hosted knowledge graph of the Bible. <details><summary>More about</summary>

  It allows AI assistants to perform structured, graph-based queries on scripture, biblical figures, and historical geography via MCP.

  _One step closer to having a theologian-in-the-loop to audit your prompt engineering._

  `mcp` `knowledge-graph` `bible` `stdio` `retrieval`
  </details>
- **[grzgrzgrz3/pingwa-client](https://github.com/grzgrzgrz3/pingwa-client)** `⭐ 1` `updated ≤90d` A Python CLI and MCP server that enables two-way WhatsApp notifications for AI agents and scripts to facilitate human-in-the-loop workflows. <details><summary>More about</summary>

  It provides a zero-setup way for autonomous agents to request human intervention or report status via a familiar messaging interface.

  _Because nothing says 'cutting-edge developer workflow' like getting a WhatsApp notification from a script to ask if it should deploy to production._

  `whatsapp` `mcp` `human-in-the-loop` `cli` `python`
  </details>
- **[nullpath-labs/mcp-client](https://github.com/nullpath-labs/mcp-client)** `⭐ 1` `updated ≤1y` An MCP client that connects Claude Desktop and Cursor to the Nullpath marketplace for discovering and executing paid AI agents via USDC micropayments. <details><summary>More about</summary>

  It enables developers to extend their IDE or desktop assistant with specialized, task-specific agents through a standardized, programmable payment layer.

  _Nothing says 'odern developer experience' quite like having your IDE reach into a crypto wallet to pay for a sub-cent micro-task._

  `mcp` `ai-agents` `micropayments` `cursor` `claude-desktop`
  </details>
- **[TimurRakhmatullin86/mcp-drill](https://github.com/timurrakhmatullin86/mcp-drill)** `⭐ 1` TimurRakhmatullin86/mcp-drill - Fault injection for MCP servers (timeouts, malformed JSON-RPC, corrupted outputs) with a reliability scorecard for output schemas and error conformance.
- **[arenza-ai/arenza-mcp-client-ts](https://github.com/arenza-ai/arenza-mcp-client-ts)** `⭐ 0` `updated ≤180d` TypeScript client for the Arenza MCP server — programmatic access to AI visibility metrics across ChatGPT, Claude, Gemini, Perplexity, Copilot, and Grok.
- **[chrisgu/lobex-mcp](https://github.com/chrisgu/lobex-mcp)** `⭐ 0` `updated ≤90d` Lobex MCP client + connect docs for https://lobex.app/mcp (not the marketplace backend).
- **[dearlordylord/voila-sdk](https://github.com/dearlordylord/voila-sdk)** `⭐ 0` `updated ≤90d` An MCP server and TypeScript SDK for interacting with the Voila grocery platform's internal endpoints. <details><summary>More about</summary>

  It allows coding agents to perform shopping tasks like product searching, cart management, and order history retrieval via the Model Context Protocol.

  _Your agent can now add milk to your cart, but it still can't solve the existential dread of checking out._

  `mcp` `typescript` `ecommerce` `shopping-automation` `sdk`
  </details>
- **[liagha/termgram](https://github.com/liagha/termgram)** `⭐ 0` liagha/termgram - Terminal Telegram client over MTProto: CLI for messages, media and contacts, plus an MCP server that sends notifications when new messages arrive.
- **[rafim-dev/mcp-doctor](https://github.com/rafim-dev/mcp-doctor)** `⭐ 0` rafim-dev/mcp-doctor - Health checks, binary validation and JSON auto-repair for MCP client configuration files.
- **[Yusufihsangorgel/queue-inspector-mcp](https://github.com/yusufihsangorgel/queue-inspector-mcp)** `⭐ 0` Yusufihsangorgel/queue-inspector-mcp - Inspect and operate Redis-backed Asynq and BullMQ job queues: per-state counts, decoded job payloads and errors, retry and delete, with a read-only mode.

<details><summary><strong>▸ &nbsp;&nbsp;+3 more in Clients & Inspector Tools &nbsp;—&nbsp; click to expand</strong></summary>

- **[mcps-playground](https://mcpsplayground.com)** Interactive web playground for testing and inspecting remote Model Context Protocol (MCP) servers with AI agents.
- **[ray.run](https://ray.run)** > ray.run – from idea to a production-grade MCP server in under a minute!
- **[Vernclaw Connect CLI](https://vernclaw.com)** Vernclaw Connect CLI – Official connector CLI with JSON-first agent-friendly connector invocation, managed connectors, and bundled skill docs for open-source workflows.

</details>

## Domain Servers

- **[AI Dev Jobs MCP](https://aidevboard.com/mcp)** An MCP server for searching more than 5,400 AI developer jobs with salary data, with a REST API also available. <details><summary>More about</summary>

  Gives agents structured access to AI job listings and compensation data for search and career workflows.

  _Your agent can now browse job listings before you finish debugging the current one._

  `mcp` `jobs` `developer-careers` `salary-data`
  </details>
- **[DropBin](https://dropbin.org/mcp)** A remote SSE MCP server for hosting HTML pages and sharing content through temporary URLs without authentication. <details><summary>More about</summary>

  Lets agents publish and share generated HTML content through short-lived public URLs without provisioning hosting.

  _Temporary anonymous hosting, because permanent infrastructure would make this too emotionally stable._

  `mcp` `html-hosting` `temporary-urls` `content-sharing`
  </details>

## Others

- **[Free tier available](https://spix.sh)** A communication-focused MCP server implementation. <details><summary>More about</summary>

  It extends Model Context Protocol capabilities with communication tools, enabling developers to integrate conversational or messaging features into their AI workflows.

  _Because nothing says 'developer productivity' like adding yet another protocol layer to your already fragmented AI toolchain._

  `context-engineering` `ai-dev-extensions`
  </details>