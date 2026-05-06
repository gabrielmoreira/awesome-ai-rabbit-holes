# MCP Servers & Tooling

Servers, clients, registries, and tooling for the Model Context Protocol.

## Tools & Resources

- **[servers](https://github.com/modelcontextprotocol/servers)** `⭐ 85.1k` `updated ≤30d` A collection of reference implementations and community server references for the Model Context Protocol (MCP), demonstrating how to build secure tool and data integrations for LLMs. <details><summary>More about</summary>

  It provides the canonical examples and SDK usage patterns developers need to build MCP-compatible servers that extend AI assistants with custom tools and data sources.

  _We have successfully standardized the way we let language models touch our stuff, and now we just need 85,000 stars worth of reference implementations to feel secure about it._

  `mcp` `reference-servers` `llm-tools` `protocol` `sdk`
  </details>

- **[playwright-mcp](https://github.com/microsoft/playwright-mcp)** `⭐ 32k` `updated ≤30d` A Model Context Protocol server from Microsoft that exposes Playwright browser automation capabilities to LLMs using structured accessibility snapshots instead of screenshots. <details><summary>More about</summary>

  It allows coding agents and MCP clients to interact with web pages deterministically, enabling use cases like self-healing tests and exploratory automation without burning tokens on vision models.

  _We have officially reached the point where we need a protocol server just to let our AI agents argue with a browser about the state of a button._

  `mcp` `playwright` `browser-automation` `microsoft`
  </details>

- **[GitHub](https://github.com/github/github-mcp-server)** `⭐ 29.5k` `updated ≤30d` GitHub's official MCP server that connects AI tools directly to the GitHub platform for repository management, issue automation, and code analysis. <details><summary>More about</summary>

  It gives coding agents and AI assistants a standardized, officially maintained interface to interact with repos, PRs, CI/CD, and code analysis through natural language.

  _Another layer of middleware so your AI can argue with your CI pipeline and close your issues while you wonder what exactly is running on your machine._

  `agent-infrastructure` `github` `mcp` `tooling`
  </details>

- **[FastMCP](https://github.com/prefecthq/fastmcp)** `⭐ 25k` `updated ≤30d` A Python framework for building Model Context Protocol (MCP) servers and clients with automatic schema generation and protocol management. <details><summary>More about</summary>

  It standardizes how developers expose tools and data to LLMs, handling transport, validation, and lifecycle so you can focus on Python function logic.

  _The standard framework for building MCP servers that powers 70% of them, proving once again that the fastest way to standardize a protocol is to let the Python community build a wrapper everyone actually enjoys using._

  `framework` `llm-tools` `mcp` `python`
  </details>

- **[Serena](https://github.com/oraios/serena)** `⭐ 23.9k` `updated ≤30d` Serena is an MCP toolkit that provides IDE-like semantic code retrieval, editing, and refactoring tools to coding agents across various IDEs and CLI environments. <details><summary>More about</summary>

  It gives AI agents symbol-level awareness and refactoring capabilities, allowing them to perform complex cross-file operations reliably rather than relying on fragile text-based edits.

  _We have finally built the IDE for the agent, so the only thing left for the human to do is debug the MCP configuration and explain to the agent why it renamed the wrong method._

  `coding-agent` `ide-tools` `mcp` `refactoring` `semantic-analysis`
  </details>

- **[blender-mcp](https://github.com/ahujasid/blender-mcp)** `⭐ 21.3k` `updated ≤180d` An MCP server and Blender addon that connects Claude and other MCP-compatible assistants to Blender for prompt-assisted 3D modeling, scene manipulation, and Python code execution. <details><summary>More about</summary>

  Developers working with 3D pipelines can control Blender scenes, assets, and materials directly from their AI assistant inside Claude, Cursor, or VS Code.

  _We have finally achieved the platonic ideal of modern developer life: installing a socket server, an addon, a package manager, and editing a JSON config just to politely ask an AI to move a cube._

  `mcp` `blender` `3d` `integration`
  </details>

- **[apisix](https://github.com/apache/apisix)** `⭐ 16.6k` `updated ≤30d` Apache APISIX is a cloud-native API gateway that also functions as an AI gateway, offering LLM proxying, load balancing, and an MCP bridge plugin to convert stdio-based MCP servers to HTTP SSE services. <details><summary>More about</summary>

  It provides developers with a production-grade infrastructure layer to manage, secure, and scale AI agent traffic and MCP server endpoints without building custom proxy logic.

  _You now have a robust, enterprise-grade solution to the pressing problem of 'my MCP server is stdin-based and I need it to be HTTP SSE,' which is definitely a sentence that would have sounded insane eighteen months ago._

  `api-gateway` `ai-gateway` `mcp` `infrastructure` `llm-proxy`
  </details>

- **[MCP Toolbox for Databases](https://github.com/googleapis/mcp-toolbox)** `⭐ 15k` `updated ≤30d` An open source MCP server from Google that provides prebuilt and custom tooling to connect AI agents, IDEs, and applications directly to enterprise databases like PostgreSQL, MySQL, and BigQuery. <details><summary>More about</summary>

  It eliminates the boilerplate of wiring database connections, authentication, and query execution for AI agents, allowing developers to give their tools live data access in minutes rather than days.

  _We have successfully abstracted the job of writing SQL queries into the job of debugging why our MCP server won't authenticate with the production Cloud SQL instance._

  `agent-tooling` `agents` `database` `enterprise` `google` `mcp` `sdk`
  </details>

- **[figma-context-mcp](https://github.com/glips/figma-context-mcp)** `⭐ 14.6k` `updated ≤30d` An MCP server that connects AI coding agents like Cursor to Figma files, translating design layout and styling data into simplified context for one-shot UI implementation. <details><summary>More about</summary>

  It allows developers to bridge the gap between design and code by letting their AI agent read live Figma metadata instead of guessing from screenshots.

  _We have successfully abstracted away the tedious human step of translating a Figma ticket into code, leaving us with the even more exhausting human step of debugging why the AI thought 'padding: 10px' meant 'full-width hero section'._

  `mcp` `figma` `cursor` `context-engineering` `design-to-code`
  </details>

- **[filestash](https://github.com/mickael-kerjean/filestash)** `⭐ 14.1k` `updated ≤30d` A web-based file management platform and universal data access layer that supports over 20 storage protocols including FTP, SFTP, S3, and WebDAV, with an extensible plugin architecture. <details><summary>More about</summary>

  Developers can expose diverse storage backends via APIs, gateways (including MCP), and a workflow engine to automate file operations across heterogeneous infrastructure.

  _Just what the modern developer needs: another plugin-driven platform that turns a simple file manager into a universal data abstraction layer with its own workflow engine and RBAC._

  `file-management` `storage` `mcp` `gateway` `plugins`
  </details>

- **[mcp-chrome](https://github.com/hangwin/mcp-chrome)** `⭐ 11.4k` `updated ≤180d` A Chrome extension that implements a Model Context Protocol (MCP) server, allowing AI assistants like Claude to control and automate the user's existing browser instance with access to login states and cookies. <details><summary>More about</summary>

  It lets developers leverage their actual browsing environment—including saved logins and session states—for AI-driven automation without the overhead of spinning up isolated browser instances via Playwright.

  _Finally, you can grant an AI agent full control over the same browser window where you're currently signed into twelve different AWS accounts and your bank._

  `mcp` `browser-automation` `chrome-extension` `agent-tools`
  </details>

- **[Inbox Zero](https://github.com/elie222/inbox-zero)** `⭐ 10.6k` `updated ≤30d` An open-source AI email assistant that organizes inboxes, drafts replies, and manages email workflows via web, Slack, or Telegram integrations. <details><summary>More about</summary>

  Developers building AI agents can study its implementation as a practical example of an MCP server for communication tools like Gmail and Slack.

  _We have successfully automated the inbox so thoroughly that we can now achieve zero unread emails while ignoring them just as efficiently as before._

  `ai-assistant` `email` `mcp` `nextjs` `open-source`
  </details>

- **[mcp](https://github.com/awslabs/mcp)** `⭐ 9k` `updated ≤30d` A suite of official AWS MCP servers and supporting tooling maintained by AWS Labs to connect AI assistants with AWS services. <details><summary>More about</summary>

  It lets AI coding agents and IDEs directly read AWS docs, manage infrastructure, and operate on cloud resources through a standardized protocol.

  _Now your AI can confidently misconfigure your entire AWS account with the full, official blessing of the cloud provider._

  `aws` `mcp` `server` `cloud`
  </details>

- **[Higress](https://github.com/higress-group/higress)** `⭐ 8.3k` `updated ≤30d` Higress is a cloud-native API gateway built on Istio and Envoy that provides unified management for LLM APIs and hosts MCP (Model Context Protocol) servers via Wasm plugins. <details><summary>More about</summary>

  It allows developers to standardize AI model routing and expose existing OpenAPI services as MCP servers, bridging the gap between traditional infrastructure and modern AI agent tooling.

  _Just when you thought your tech stack was stable, the API gateway now needs to understand model context protocols and Wasm plugins to serve your chatbot's tools._

  `ai-gateway` `api-management` `cloud-native` `envoy` `mcp`
  </details>

- **[IDA Pro MCP](https://github.com/mrexodia/ida-pro-mcp)** `⭐ 8.2k` `updated ≤30d` An MCP server that connects IDA Pro to language models, allowing AI agents to decompile, analyze, and annotate binaries directly within the reverse engineering workflow. <details><summary>More about</summary>

  It turns IDA Pro into an AI-collaborative environment, enabling developers and security researchers to automate tedious reverse engineering tasks like renaming variables, analyzing decompilation, and documenting findings.

  _You can now vibe reverse a crackme while your LLM hallucinates the architecture, proving that no corner of engineering is safe from being branded as 'vibe-driven'._

  `binary-analysis` `ida-pro` `mcp` `plugin` `reverse-engineering`
  </details>

- **[git-mcp](https://github.com/idosal/git-mcp)** `⭐ 8k` `updated ≤90d` A free, remote MCP server that exposes any GitHub repository's documentation and code to AI tools, enabling live context lookups to reduce hallucinations. <details><summary>More about</summary>

  It allows coding assistants in IDEs like Cursor and Claude to query fresh, repo-specific documentation instead of relying on outdated training data.

  _We have successfully engineered a solution that forces our AI to read the README, just in case it forgot how to read the code we just wrote._

  `context` `context-retrieval` `documentation` `github` `mcp` `open-source` `server`
  </details>

- **[registry](https://github.com/modelcontextprotocol/registry)** `⭐ 6.8k` `updated ≤30d` A community-driven registry service and API for discovering, publishing, and integrating Model Context Protocol (MCP) servers. <details><summary>More about</summary>

  It provides the discoverability and API backbone that allows MCP clients and developers to find and integrate compatible servers without maintaining their own manual lists.

  _We have successfully built an app store for the protocol that connects your AI to your tools, meaning the new weekend project is now browsing the app store instead of writing code._

  `mcp` `registry` `ecosystem` `tooling`
  </details>

- **[mcp](https://github.com/browsermcp/mcp)** `⭐ 6.5k` `updated >1y` Browser MCP is a Model Context Protocol server paired with a Chrome extension that allows AI applications to automate a user's existing browser profile locally. <details><summary>More about</summary>

  It lets developers hand off browser-based tasks to AI agents using their real login sessions and fingerprint, avoiding the friction of headless browser setups.

  _We have finally achieved the pinnacle of engineering: installing a browser extension so an AI can click the 'Accept Cookies' button for us while we pretend to be supervising._

  `mcp` `browser-automation` `chrome-extension` `local-ai` `agent-tooling`
  </details>

- **[firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server)** `⭐ 6.2k` `updated ≤30d` An official Model Context Protocol server that exposes Firecrawl's web scraping, searching, and browser automation capabilities to compatible AI clients like Cursor, Claude, and VS Code. <details><summary>More about</summary>

  It allows coding agents and IDEs to autonomously fetch, scrape, and interact with live web content, closing the gap between local codebases and external documentation or data sources.

  _We have successfully abstracted web browsing into a protocol, so your $40/month agent can now cheerfully burn your API credits navigating cookie banners just to read a docs page._

  `context-protocol` `cursor` `firecrawl` `llm-tools` `mcp` `web-scraping`
  </details>

- **[whatsapp-mcp](https://github.com/lharries/whatsapp-mcp)** `⭐ 5.6k` `updated ≤1y` An MCP server that bridges personal WhatsApp accounts with AI assistants like Claude, enabling message search, contact lookup, and media-aware messaging via the WhatsApp web multidevice API. <details><summary>More about</summary>

  Developers can wire their personal WhatsApp graph directly into local AI workflows, letting agents search history, send messages, and handle media without leaving the IDE or CLI.

  _We’ve finally solved the hard problem of letting a coding agent send WhatsApp voice notes, which is absolutely the missing piece in every production incident response plan._

  `mcp` `whatsapp` `messaging` `bridge` `local-ai`
  </details>

- **[mcp-playwright](https://github.com/executeautomation/mcp-playwright)** `⭐ 5.5k` `updated ≤180d` A Model Context Protocol server that enables LLMs like Claude and GitHub Copilot to automate browsers, take screenshots, scrape pages, and execute JavaScript using Playwright. <details><summary>More about</summary>

  It bridges the gap between coding agents and live web environments, allowing AI assistants to visually verify UI changes and automate end-to-end testing workflows directly from the IDE.

  _You can now ask your AI to test the UI on an emulated iPhone 13, ensuring your automation stack is just as complex as the application it is trying to validate._

  `mcp` `playwright` `browser-automation` `testing`
  </details>

- **[XcodeBuildMCP](https://github.com/getsentry/xcodebuildmcp)** `⭐ 5.4k` `updated ≤30d` A Model Context Protocol server and CLI that gives AI coding agents tools to build, run, and manage iOS and macOS projects via xcodebuild. <details><summary>More about</summary>

  It lets AI agents meaningfully interact with Apple's build toolchain, bridging the gap between generic coding assistants and platform-specific mobile development workflows.

  _Finally, your AI agent can autonomously argue with code signing and provisioning profiles at 3 AM so you do not have to._

  `cli` `ios` `macos` `mcp` `xcode`
  </details>

- **[Lingo.dev](https://github.com/lingodotdev/lingo.dev)** `⭐ 5.4k` `updated ≤30d` An open-source localization platform providing a CLI, GitHub Action, React compiler, API, and an MCP server to automate and manage translations for developer projects. <details><summary>More about</summary>

  It integrates AI and LLMs directly into the localization workflow, allowing developers to automate i18n setup and translation updates via CLI, CI/CD, or AI coding assistants.

  _Just when you thought 'vibe coding' couldn't get more specific, you now need an AI agent specifically to teach your other AI agent how to handle `next-i18n` without hallucinating the router._

  `cli` `i18n` `localization` `mcp` `react`
  </details>

- **[magic-mcp](https://github.com/21st-dev/magic-mcp)** `⭐ 4.8k` `updated ≤90d` An MCP server that integrates with Cursor, Windsurf, and VS Code/Cline to generate modern UI components from natural language descriptions inside the IDE. <details><summary>More about</summary>

  It lets frontend developers prototype and insert polished UI components directly into their codebase without leaving the editor or manually browsing component libraries.

  _We have now successfully abstracted away the one part of frontend development that still felt like tangible craftsmanship, replacing it with a slash command that turns English into TypeScript at 3 AM._

  `mcp` `ui-generation` `ide-integration` `frontend`
  </details>

- **[mobile-mcp](https://github.com/mobile-next/mobile-mcp)** `⭐ 4.8k` `updated ≤30d` A Model Context Protocol server that enables AI agents and LLMs to automate native iOS and Android apps across simulators, emulators, and real devices using accessibility snapshots and visual screen analysis. <details><summary>More about</summary>

  It provides a standardized, platform-agnostic interface for developers to wire mobile devices into agentic workflows, eliminating the need for deep platform-specific automation knowledge.

  _We have officially reached the point where your AI agent now needs its own MCP server just to tap the 'Submit' button on a mobile app for you._

  `mcp` `mobile` `automation` `ios` `android`
  </details>

- **[exa-mcp-server](https://github.com/exa-labs/exa-mcp-server)** `⭐ 4.4k` `updated ≤30d` An MCP server that connects AI assistants to Exa's web search, code search, and company research capabilities with support for most major AI coding clients. <details><summary>More about</summary>

  Developers can give their AI assistants real-time web and code search superpowers without wiring up custom API integrations for every new tool.

  _We now maintain a configuration file just to let our coding agent ask the internet what we could have googled between arguing with the MCP JSON schema._

  `mcp` `web-search` `code-search` `context-engineering`
  </details>

- **[notion-mcp-server](https://github.com/makenotion/notion-mcp-server)** `⭐ 4.3k` `updated ≤90d` An official local MCP server from Notion that exposes workspace pages and databases as tools for AI agents via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers connect Notion directly to AI coding assistants and agents, so docs, specs, and databases become live context inside the editor workflow.

  _Now your LLM can silently mangle your Notion pages and databases with optimized token consumption, and you get to debug both your codebase and your wiki._

  `mcp` `notion` `context` `agent-tools`
  </details>

- **[mcpo](https://github.com/open-webui/mcpo)** `⭐ 4.2k` `updated ≤90d` A proxy server that exposes MCP server commands as standard OpenAPI-compatible HTTP endpoints with auto-generated documentation and OAuth support. <details><summary>More about</summary>

  Developers can integrate MCP tools into any OpenAPI-compatible client or UI without writing glue code, adding auth, docs, or HTTP transport from scratch.

  _We have invented a proxy to make the hot new protocol compatible with the old protocol, because even our bridges now need bridges._

  `mcp` `openapi` `proxy` `interoperability`
  </details>

- **[mcp-server-chart](https://github.com/antvis/mcp-server-chart)** `⭐ 4k` `updated ≤30d` A Model Context Protocol server that exposes 26+ AntV visualization chart generators as tools for LLMs to create charts and perform data analysis. <details><summary>More about</summary>

  Developers can give coding agents and MCP clients the ability to render area, bar, scatter, Sankey, and mind-map charts without wiring up visualization libraries by hand.

  _We have successfully abstracted charting so that an LLM can now hallucinate your data viz pipeline through a protocol server instead of just doing it wrong in React code._

  `mcp` `visualization` `charts` `antv` `data-analysis`
  </details>

- **[excel-mcp-server](https://github.com/haris-musa/excel-mcp-server)** `⭐ 3.8k` `updated ≤30d` A Model Context Protocol server that enables AI agents to create, read, and modify Excel workbooks without Microsoft Excel installed. <details><summary>More about</summary>

  It allows developers to wire Excel file manipulation into agentic workflows via stdio, SSE, or streamable HTTP transports.

  _We have successfully invented a protocol so that an AI can spend $0.40 in tokens to break a spreadsheet that a human could have ruined for free in three clicks._

  `mcp` `excel` `automation` `toolcalling`
  </details>

- **[container-use](https://github.com/dagger/container-use)** `⭐ 3.8k` `updated ≤90d` An MCP server and CLI tool that spins up isolated, containerized git environments so coding agents can work in parallel without conflicting with each other or the developer's main branch. <details><summary>More about</summary>

  It lets developers safely run multiple coding agents concurrently by giving each agent its own container and branch, with real-time visibility and direct terminal intervention for when they inevitably get stuck.

  _We have finally solved the problem of one agent breaking your codebase at a time by virtualizing the chaos so an entire team of agents can confidently break isolated containers instead._

  `mcp` `coding-agents` `containers` `parallel` `dagger`
  </details>

- **[mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)** `⭐ 3.7k` `updated ≤30d` A collection of official Cloudflare MCP servers that let developers manage Workers, observability, DNS, and other Cloudflare services via natural language in MCP-compatible clients like Cursor and Claude. <details><summary>More about</summary>

  It integrates Cloudflare's full developer platform—including bindings, builds, and browser rendering—directly into AI coding workflows, reducing context switching between dashboards and terminals.

  _The dream of telling an LLM to 'fix the cache rules' is now technically viable, provided you enjoy debugging why your AI agent just nuked a production Worker via a misunderstood natural language prompt._

  `mcp` `cloudflare` `infrastructure` `tooling`
  </details>

- **[Kiro](https://github.com/kirodotdev/kiro)** `⭐ 3.6k` `updated ≤30d` Kiro is an agentic IDE and CLI from Amazon that supports spec-driven development, hooks, and natural language coding assistance across macOS, Windows, and Linux. <details><summary>More about</summary>

  It integrates spec-driven planning directly into the development environment and automates repetitive tasks through file-change hooks and MCP server support.

  _Another day, another IDE promising to take you from prototype to production, provided you fully buy into yet another Amazon-backed spec dialect._

  `agentic` `agentic-dev` `ai-ide` `autonomous` `cli` `ide` `mcp` `spec-driven`
  </details>

- **[mcp-obsidian](https://github.com/markuspfundstein/mcp-obsidian)** `⭐ 3.6k` `updated ≤1y` An MCP server that connects AI assistants to Obsidian via the Local REST API to list, read, search, and edit vault notes. <details><summary>More about</summary>

  It lets developers use Claude Desktop or other MCP-compatible agents to query meeting notes, summarize architecture decisions, and write new documentation directly inside their knowledge base.

  _You can now ask an AI to summarize your meeting notes, only to realize the AI is reading the notes you took while daydreaming about refactoring your monolith._

  `mcp` `obsidian` `tooling` `knowledge-base`
  </details>

- **[Godot MCP](https://github.com/coding-solo/godot-mcp)** `⭐ 3.4k` `updated ≤30d` An MCP server that lets AI agents launch the Godot editor, run projects, capture debug output, and manage scenes and project structures. <details><summary>More about</summary>

  It gives AI coding assistants a direct feedback loop into a running Godot project, turning vague game-generation prompts into testable, debuggable execution.

  _Finally, your AI can now autonomously break your game engine and read its own crash logs without your help._

  `debugging` `game-dev` `godot` `mcp`
  </details>

- **[mcp-server-browserbase](https://github.com/browserbase/mcp-server-browserbase)** `⭐ 3.3k` `updated ≤30d` An MCP server that connects LLMs to cloud browser automation via Browserbase and Stagehand, enabling web page interaction, data extraction, and automated actions. <details><summary>More about</summary>

  It gives coding agents and AI workflows a standardized way to control a real browser for scraping, testing, and interacting with web UIs without custom playwright glue.

  _We have successfully abstracted the browser so that your LLM can now get stuck on cookie banners entirely through standardized protocol buffers._

  `mcp` `browser-automation` `stagehand` `llm-tools`
  </details>

- **[Peekaboo](https://github.com/openclaw/peekaboo)** `⭐ 3.2k` `updated ≤30d` A macOS CLI and MCP server that enables AI agents to capture high-fidelity screenshots, analyze screen content with vision models, and automate GUI interactions like clicking and typing. <details><summary>More about</summary>

  It gives coding agents and automation workflows the ability to see and control macOS GUI applications through a standardized MCP interface, bridging the gap between code execution and visual interface interaction.

  _We've finally automated the 'look at the screen and click things' part of the job that nobody wanted, yet somehow the machine still needs three AI models and Accessibility permissions to do what a sleep-deprived intern could do in five minutes._

  `gui-automation` `macos` `mcp` `screen-capture` `vision`
  </details>

- **[codegraphcontext](https://github.com/codegraphcontext/codegraphcontext)** `⭐ 3.2k` `updated ≤30d` An MCP server and CLI tool that indexes local codebases into a graph database to provide structural context to AI assistants. <details><summary>More about</summary>

  It gives coding agents a queryable map of call-chains and code relationships, reducing the context-window guessing games that happen on large repositories.

  _We have successfully reached the point where the AI needs a graph database just to pretend it read the codebase you cloned this morning._

  `cli` `code-analysis` `context-engineering` `graph-database` `mcp`
  </details>

- **[mcp](https://github.com/microsoft/mcp)** `⭐ 3.1k` `updated ≤30d` A Microsoft-maintained catalog and engineering system for official MCP server implementations, including Azure MCP and Microsoft Fabric MCP servers. <details><summary>More about</summary>

  It provides a unified, supported foundation for developers to connect AI applications to Microsoft ecosystems like Azure and Fabric using the standardized Model Context Protocol.

  _Just what we needed: another layer of standardised context protocols to help us feel productive while debugging why the AI can't find our storage account._

  `mcp` `microsoft` `azure` `protocol` `server`
  </details>

- **[mcp-grafana](https://github.com/grafana/mcp-grafana)** `⭐ 3k` `updated ≤30d` An official MCP server from Grafana that exposes dashboards, datasources, and query engines (Prometheus, Loki, ClickHouse, etc.) to AI models and MCP-compatible clients. <details><summary>More about</summary>

  It lets developers and AI assistants directly search dashboards, run queries, and modify panels through natural language instead of clicking through Grafana UI or hand-writing API calls.

  _You now have the privilege of debugging a PromQL query that was hallucinated by a model and proxied through three layers of MCP middleware._

  `mcp` `grafana` `observability` `llm-integration`
  </details>

- **[shadcn-ui-mcp-server](https://github.com/jpisnice/shadcn-ui-mcp-server)** `⭐ 2.8k` `updated ≤90d` An MCP server that provides AI assistants with structured access to shadcn/ui v4 component source code, demos, and metadata across React, Svelte, Vue, and React Native frameworks. <details><summary>More about</summary>

  It gives coding agents the ability to retrieve accurate, framework-specific shadcn/ui implementations and configuration details directly within the development workflow, reducing hallucinated UI code.

  _We have now successfully abstracted the process of copy-pasting UI components into a protocol that allows an AI to hallucinate them with significantly more authority._

  `mcp` `shadcn-ui` `context-engineering` `multi-framework`
  </details>

- **[dbhub](https://github.com/bytebase/dbhub)** `⭐ 2.7k` `updated ≤30d` A zero-dependency, token-efficient MCP server that allows AI clients like Claude and Cursor to query and explore Postgres, MySQL, SQL Server, MariaDB, and SQLite databases. <details><summary>More about</summary>

  It gives coding agents structured, guarded access to live database schemas and queries without burning through the context window or requiring heavy dependencies.

  _Another essential piece of infrastructure so your AI can finally generate that one SQL query that fixes production, while you sit there wondering why you still need to configure TOML files to make it happen._

  `mcp` `database` `cursor` `claude` `sql`
  </details>

- **[postgres-mcp](https://github.com/crystaldba/postgres-mcp)** `⭐ 2.7k` `updated ≤180d` An open-source Model Context Protocol server that provides AI agents with database health checks, index tuning, query plan analysis, and safe SQL execution for PostgreSQL. <details><summary>More about</summary>

  It allows coding agents and AI IDEs to autonomously diagnose performance bottlenecks and tune database schemas without a human manually running EXPLAIN plans.

  _We have successfully abstracted away the last remaining excuse for not understanding how a B-tree actually works._

  `mcp` `postgres` `database` `performance` `sql`
  </details>

- **[arxiv-mcp-server](https://github.com/blazickjp/arxiv-mcp-server)** `⭐ 2.7k` `updated ≤30d` A Model Context Protocol server that lets AI assistants search, download, and analyze arXiv research papers programmatically. <details><summary>More about</summary>

  It gives coding agents and IDEs direct access to the latest research literature, bridging the gap between implementation and academic context.

  _Because nothing says 'staying focused on shipping' like giving your coding agent the ability to ingest every untrusted paper on arxiv and execute embedded prompt injections._

  `mcp` `arxiv` `research` `papers` `context`
  </details>

- **[OSV (Open Source Vulnerabilities) database](https://github.com/google/osv.dev)** `⭐ 2.6k` `updated ≤30d` OSV is Google's open source vulnerability database and triage service, providing an API and infrastructure for checking project dependencies against a centralized feed of security advisories. <details><summary>More about</summary>

  It provides the structured vulnerability data that AI coding agents and security scanners need to automatically detect and patch insecure dependencies in your codebase.

  _We now have an autonomous pipeline to find bugs in the code that AI agents wrote, ensuring the circle of life remains perfectly automated._

  `api` `database` `scanner` `security` `vulnerability`
  </details>

- **[unity-mcp](https://github.com/ivanmurzak/unity-mcp)** `⭐ 2.6k` `updated ≤30d` An MCP server and CLI toolkit that connects AI coding assistants like Claude and Cursor directly to the Unity Editor and runtime for automated game development workflows. <details><summary>More about</summary>

  It allows developers to turn any C# method into an AI-accessible tool with a single line of code, enabling AI agents to build, test, and debug Unity projects in real-time.

  _Now your AI can theoretically refactor your game architecture while simultaneously introducing a runtime hallucination that makes the player character float into the sky._

  `unity` `mcp` `game-dev` `cli` `ai-integration`
  </details>

- **[brightdata-mcp](https://github.com/brightdata/brightdata-mcp)** `⭐ 2.3k` `updated ≤30d` A Model Context Protocol server that provides AI agents with real-time web access for scraping, package metadata lookups, and LLM brand visibility queries. <details><summary>More about</summary>

  It allows coding agents like Claude Code and Cursor to fetch live npm/PyPI data and web content without getting blocked by anti-bot measures.

  _We have now successfully abstracted the act of reading the documentation into a paid API call that requires an MCP server to avoid a CAPTCHA._

  `mcp` `web-scraping` `coding-agent-tools` `npm` `pypi`
  </details>

- **[metatool-ai/metatool-app](https://github.com/metatool-ai/metamcp)** `⭐ 2.3k` `updated ≤90d` MetaMCP is a self-hosted MCP proxy that aggregates multiple MCP servers into a unified endpoint and applies middleware, deployable as a single Docker container. <details><summary>More about</summary>

  It simplifies the developer experience by reducing MCP client configuration to a single endpoint while allowing traffic management and environment variable segregation across different server backends.

  _We have successfully reached the 'middleware for the middleware' stage of the protocol wars, because apparently managing one JSON config wasn't quite abstract enough._

  `docker` `gateway` `mcp` `middleware` `self-hosted`
  </details>

- **[modelcontextprotocol](https://github.com/perplexityai/modelcontextprotocol)** `⭐ 2.1k` `updated ≤30d` An official Model Context Protocol server that exposes Perplexity's real-time web search, conversational AI, research, and reasoning capabilities to MCP-compatible AI assistants. <details><summary>More about</summary>

  It lets developers wire live web search and deep research directly into their AI coding workflows without building custom API integrations for every editor or agent.

  _Another week, another protocol implementation, because apparently the best way to stop your LLM from confidently hallucinating is to give it yet another plugin that proves it still can't find the current year on its own._

  `context-engineering` `mcp` `perplexity` `search`
  </details>

- **[mcp-shrimp-task-manager](https://github.com/cjo4m06/mcp-shrimp-task-manager)** `⭐ 2.1k` `updated ≤1y` An MCP server that provides structured task planning, dependency tracking, and persistent memory for AI coding assistants like Claude Code, Cline, and Cursor. <details><summary>More about</summary>

  It addresses the context-loss problem in long-running AI development sessions by injecting a formal task lifecycle and memory layer directly into the agent's workflow.

  _We have finally reached the point where we need a dedicated task manager to manage the tasks assigned to the manager managing our AI agent._

  `mcp` `task-management` `agent-memory` `context-engineering`
  </details>

- **[mcp-server](https://github.com/financial-datasets/mcp-server)** `⭐ 2.1k` `updated ≤1y` An MCP server that exposes financial statements, stock prices, and crypto market data from Financial Datasets to AI assistants like Claude Desktop. <details><summary>More about</summary>

  Developers building or using MCP-compatible assistants can give their models real-time financial data access without writing custom API integration code.

  _We have successfully abstracted the abstraction, so now your AI can hallucinate about Apple's balance sheet with the confidence of a live API call._

  `mcp` `finance` `market-data` `claude` `python`
  </details>

- **[ios-simulator-mcp](https://github.com/joshuayoes/ios-simulator-mcp)** `⭐ 1.9k` `updated ≤30d` An MCP server that lets AI agents and tools interact with iOS simulators by querying device status, inspecting UI elements, and performing touch, swipe, and text input actions. <details><summary>More about</summary>

  It gives coding agents and IDE integrations the ability to visually inspect and control iOS simulators, enabling automated UI testing and screenshot-driven mobile workflows without manual device interaction.

  _We have finally reached the point where your AI needs its own MCP server just to tap a button on a simulator that is already running on your machine._

  `mcp` `ios` `simulator` `mobile-testing` `automation`
  </details>

- **[mcp-memory-service](https://github.com/doobidoo/mcp-memory-service)** `⭐ 1.8k` `updated ≤30d` A self-hosted, open-source memory backend for AI agents that provides persistent storage, knowledge graph relationships, and fast retrieval via a REST API and MCP server. <details><summary>More about</summary>

  It gives agent pipelines a shared, long-term memory with causal relationships and local embeddings, removing the need to stitch together Redis, Pinecone, and custom glue code.

  _Finally, your autonomous agents can suffer from the same hazy, interlinked long-term memory problems as the humans who built them, just with 5ms latency._

  `mcp` `agent-memory` `knowledge-graph` `self-hosted` `langgraph`
  </details>

- **[anyquery](https://github.com/julien040/anyquery)** `⭐ 1.7k` `updated ≤30d` A SQL query engine built on SQLite that lets developers query files, apps, and databases, and exposes them to LLMs via a Model Context Protocol (MCP) server. <details><summary>More about</summary>

  It allows developers to turn disparate data sources like Notion, GitHub, and local files into a queryable SQL interface that AI assistants can access for richer context.

  _Because nothing says 'modern developer experience' like installing a local MySQL server just so your LLM can run a JOIN on your todo list and your CSV exports._

  `sql` `mcp` `llm-integration` `data-querying` `sqlite`
  </details>

- **[azure-devops-mcp](https://github.com/microsoft/azure-devops-mcp)** `⭐ 1.6k` `updated ≤30d` A Model Context Protocol server from Microsoft that exposes Azure DevOps resources and actions to AI agents and editors. <details><summary>More about</summary>

  It allows developers to query work items, builds, repos, and wikis from their editor or agent using natural language instead of clicking through Azure DevOps web UI.

  _We have successfully abstracted away the UI so your agent can now complain about your Jira work items in natural language instead of you having to read them yourself._

  `mcp` `azure-devops` `microsoft` `agent-tooling`
  </details>

- **[mcp-unity](https://github.com/codergamester/mcp-unity)** `⭐ 1.6k` `updated ≤30d` An MCP server plugin that connects AI coding assistants like Cursor, Claude Code, and Windsurf directly to the Unity Editor to execute operations within a Unity project. <details><summary>More about</summary>

  It allows game developers to control and interact with the Unity Editor through natural language prompts inside their preferred AI-assisted IDEs.

  _Finally, the ability to hallucinate C# scripts and immediately break your scene hierarchy without ever alt-tabbing out of your chat window._

  `unity` `mcp` `ide-integration` `game-dev`
  </details>

- **[mcp-server-mysql](https://github.com/benborla/mcp-server-mysql)** `⭐ 1.6k` `updated ≤90d` A Model Context Protocol server that provides read and write access to MySQL databases, enabling LLMs like Claude Code to inspect schemas and execute SQL queries via SSH tunnels. <details><summary>More about</summary>

  It allows developers to grant AI agents direct, secure access to their database layer for inspection and query generation without leaving the IDE context.

  _We have successfully abstracted away the need to remember SQL syntax by adding a Layer 8 protocol wrapper that requires its own SSH tunnel configuration file._

  `mcp` `database` `mysql` `claude-code` `integration`
  </details>

- **[slack-mcp-server](https://github.com/korotovsky/slack-mcp-server)** `⭐ 1.6k` `updated ≤30d` A feature-rich Model Context Protocol server that enables AI agents and MCP clients to interact with Slack workspaces, supporting stealth/OAuth modes, DMs, and smart history fetching. <details><summary>More about</summary>

  It allows developers to wire Slack directly into their AI workflows, letting coding agents read threads, fetch unread messages, and optionally post replies without complex permission setups.

  _Now your AI agent can passively monitor every channel you forgot to mute and remind you that your architectural decisions are being judged in real time._

  `mcp` `slack` `agent-tooling` `integration`
  </details>

- **[kubernetes-mcp-server](https://github.com/containers/kubernetes-mcp-server)** `⭐ 1.5k` `updated ≤30d` A native Go implementation of a Model Context Protocol server that enables AI models and agents to directly interact with Kubernetes and OpenShift API servers. <details><summary>More about</summary>

  It allows coding agents and AI tools to manage clusters, pods, and Helm releases natively without shelling out to kubectl, reducing latency and external dependencies in agentic workflows.

  _Another essential piece of infrastructure dedicated to teaching LLMs how to kubectl their way into production on a Tuesday afternoon._

  `agent-tooling` `cloud-native` `devops` `kubernetes` `mcp` `openshift`
  </details>

- **[mcp-language-server](https://github.com/isaacphi/mcp-language-server)** `⭐ 1.5k` `updated ≤90d` An MCP server that wraps standard language servers (like gopls, rust-analyzer, or pyright) to expose semantic code tools such as definitions, references, and diagnostics to LLMs. <details><summary>More about</summary>

  It allows MCP-enabled AI clients to understand code structure and navigate repositories with compiler-accurate intelligence rather than guessing based on text.

  _We have successfully abstracted the abstraction of the protocol that talks to the tool that talks to the compiler, ensuring the AI can now rename variables with the same confidence as a junior developer._

  `mcp` `language-server` `developer-tools` `context-engineering`
  </details>

- **[MCP Installer](https://github.com/anaisbetts/mcp-installer)** `⭐ 1.5k` `updated >1y` An MCP server that installs other MCP servers hosted on npm or PyPI directly via Claude Desktop. <details><summary>More about</summary>

  It streamlines the setup of the MCP ecosystem by letting developers delegate the installation and configuration of new servers to the AI assistant itself.

  _We have finally built an AI agent whose primary job is to automate the tedious JSON editing required to set up other AI agents._

  `claude-desktop` `installer` `mcp` `tooling`
  </details>

- **[terminator](https://github.com/mediar-ai/terminator)** `⭐ 1.4k` `updated ≤30d` A native Windows desktop automation toolkit that exposes computer-use capabilities via a Model Context Protocol server, allowing AI assistants to control applications without taking over the user's cursor. <details><summary>More about</summary>

  It gives coding agents like Claude and Cursor the ability to automate cross-application desktop workflows—such as checking Vercel logs or spinning up cloud instances—using deterministic code with AI-assisted recovery.

  _We have successfully built a 'Playwright for Windows' so that your AI can click through GCP console dialogs while you pray it doesn't accidentally delete the production project._

  `mcp` `desktop-automation` `windows` `computer-use` `rust`
  </details>

- **[mcp-server-kubernetes](https://github.com/flux159/mcp-server-kubernetes)** `⭐ 1.4k` `updated ≤30d` An MCP server that connects to Kubernetes clusters and exposes cluster management capabilities to AI assistants via kubectl and Helm integration. <details><summary>More about</summary>

  It allows developers to manage Kubernetes resources, inspect pods, and run Helm operations through natural language conversations in tools like Claude Code, Cursor, and VS Code.

  _Your AI assistant can now evict your pods for you, which at least removes the middleman in your infrastructure outages._

  `kubernetes` `mcp` `devops` `infrastructure`
  </details>

- **[swift-sdk](https://github.com/modelcontextprotocol/swift-sdk)** `⭐ 1.4k` `updated ≤30d` The official Swift SDK for implementing Model Context Protocol (MCP) clients and servers in Swift applications. <details><summary>More about</summary>

  It allows Swift developers to build native MCP-compatible tooling and integrate Apple-platform apps into the growing standardized AI agent ecosystem.

  _Another day, another official SDK for a protocol that will inevitably spawn twelve competing versions before the year ends._

  `swift` `mcp` `sdk` `protocol`
  </details>

- **[terraform-mcp-server](https://github.com/hashicorp/terraform-mcp-server)** `⭐ 1.4k` `updated ≤30d` An official HashiCorp MCP server that connects AI assistants to Terraform Registry APIs and HCP Terraform for workspace management and infrastructure operations. <details><summary>More about</summary>

  It allows developers to query providers, manage workspaces, and inspect infrastructure state directly through their AI coding assistant instead of context-switching to the CLI or web console.

  _We have successfully abstracted the infrastructure code so far away that we now need a protocol server just to let the AI ask the registry if our abstraction is abstracted enough._

  `mcp` `terraform` `iac` `infrastructure` `hashicorp`
  </details>

- **[elevenlabs-mcp](https://github.com/elevenlabs/elevenlabs-mcp)** `⭐ 1.3k` `updated ≤90d` The official ElevenLabs MCP server that exposes text-to-speech, voice cloning, and audio transcription capabilities to MCP-compatible clients like Claude Desktop, Cursor, and Windsurf. <details><summary>More about</summary>

  Developers can now integrate high-quality voice generation and audio processing directly into their AI coding workflows without leaving the IDE or agent environment.

  _We have successfully abstracted away the act of reading code until your eyes bleed, replacing it with the act of listening to a film noir detective explain your stack traces._

  `mcp` `elevenlabs` `audio` `voice` `ide-integration`
  </details>

- **[quint-code](https://github.com/m0n0x41d/haft)** `⭐ 1.3k` `updated ≤30d` Haft is a CLI and MCP plugin that adds structured engineering decision-making, spec governance, and evidence decay tracking to AI coding agents like Claude Code and Codex. <details><summary>More about</summary>

  It forces agents to frame problems, compare options under parity, and record falsifiable decisions before writing code, aiming to prevent velocity from outrunning engineering discipline.

  _Finally, a tool to govern the agents that are already ignoring your half-written Jira tickets with unprecedented confidence._

  `agents` `cli` `governance` `mcp` `spec-driven`
  </details>

- **[mysql_mcp_server](https://github.com/designcomputer/mysql_mcp_server)** `⭐ 1.2k` `updated ≤1y` A Model Context Protocol server that enables AI applications like Claude Desktop and VS Code to securely read tables and execute SQL queries against MySQL databases. <details><summary>More about</summary>

  It plugs your MySQL databases directly into MCP-compatible developer tools, allowing AI assistants to inspect schemas and run queries without you manually dumping context.

  _We have successfully abstracted the ancient art of writing SQL into 'configuring a protocol server so your AI can write the SQL for you instead.'._

  `mcp` `mysql` `database` `protocol`
  </details>

- **[web-eval-agent](https://github.com/refreshdotdev/web-eval-agent)** `⭐ 1.2k` `updated ≤90d` An MCP server that launches a browser-based agent to autonomously navigate, test, and debug web applications directly from an IDE. <details><summary>More about</summary>

  It allows developers to delegate end-to-end web app testing and UI debugging to an agent that captures network traffic, console errors, and screenshots within the editor workflow.

  _We have finally reached the point where the AI writes the bug, and a different AI instance spins up a headless browser to tell you that the first AI failed._

  `browser-automation` `debugging` `mcp` `qa` `web-testing`
  </details>

- **[ros-mcp-server](https://github.com/robotmcp/ros-mcp-server)** `⭐ 1.2k` `updated ≤30d` An MCP server that bridges large language models with ROS and ROS2 robots for bidirectional communication, observation, and control without modifying existing robot source code. <details><summary>More about</summary>

  It allows robotics developers to connect standard AI coding tools like Claude Code and Cursor directly to physical or simulated robots for natural language debugging and control.

  _We have finally achieved the singularity where your LLM can segfault the robot arm while simultaneously complaining about your codebase's lack of documentation._

  `llm-integration` `mcp` `robotics` `ros2`
  </details>

- **[bitbonsai/mcp-obsidian](https://github.com/bitbonsai/mcpvault)** `⭐ 1.2k` `updated ≤30d` A lightweight Model Context Protocol (MCP) server that gives AI assistants safe read, write, and search access to Obsidian vaults. <details><summary>More about</summary>

  It lets developers connect their note-taking knowledge base directly to coding agents and IDEs like Claude Code, Cursor, and Windsurf without installing Obsidian plugins.

  _We have successfully solved the critical engineering challenge of making sure your AI can reorganize your meeting notes while you are supposed to be shipping code._

  `ide-integration` `knowledge-base` `mcp` `obsidian` `typescript`
  </details>

- **[drawio-mcp-server](https://github.com/lgazo/drawio-mcp-server)** `⭐ 1.2k` `updated ≤30d` An MCP server that lets AI agents and MCP clients create, inspect, and modify Draw.io diagrams programmatically via browser-based or built-in editors. <details><summary>More about</summary>

  It allows developers and AI assistants to automate architectural diagrams, flowcharts, and visual documentation directly from their coding environment without manual dragging and dropping.

  _You are now one prompt away from letting an agent reorganize your entire AWS architecture diagram while you wonder if 'vibe diagramming' is a real job description._

  `mcp` `diagrams` `draw-io` `agent-tools`
  </details>

- **[Actors MCP Server](https://github.com/apify/actors-mcp-server)** `⭐ 1.2k` `updated ≤30d` An MCP server that exposes thousands of Apify Actors as tools, allowing AI agents in clients like Claude and VS Code to scrape and extract data from the web. <details><summary>More about</summary>

  It turns a massive library of web scrapers into callable tools for your AI assistant, removing the need to build custom extraction logic for common sites.

  _Your AI assistant can now independently scrape Instagram and Google Maps, which is either a massive productivity unlock or the fastest path to getting your account banned before lunch._

  `mcp` `apify` `web-scraping` `data-extraction`
  </details>

- **[Career Site Jobs](https://github.com/apify/apify-mcp-server)** `⭐ 1.2k` `updated ≤30d` An MCP server that exposes thousands of Apify Actors as tools so AI agents can scrape and extract data from websites, search engines, maps, and social media platforms. <details><summary>More about</summary>

  Developers can equip their MCP-compatible AI assistants with instant access to a massive library of production-grade web scrapers without writing custom extraction code.

  _We have finally reached the point where your AI agent needs its own agent economy, complete with OAuth and x402 payments, just to scrape a Google Maps listing._

  `agent-tools` `agents` `api` `apify` `ats` `data-extraction` `jobs` `mcp` `scraper` `scraping`
  </details>

- **[jupyter-mcp-server](https://github.com/datalayer/jupyter-mcp-server)** `⭐ 1.1k` `updated ≤30d` A Model Context Protocol server that enables AI assistants to connect to, control, and execute code in Jupyter notebooks in real-time. <details><summary>More about</summary>

  It allows coding agents and MCP-compatible clients to directly interact with notebook environments, bridging the gap between generative AI workflows and data science prototyping.

  _We've successfully abstracted the abstraction, so now your AI can hallucinate inside a kernel while your notebook watches itself be rewritten in real-time._

  `mcp` `jupyter` `notebook` `data-science` `llm-integration`
  </details>

- **[telegram-mcp](https://github.com/chigwell/telegram-mcp)** `⭐ 1.1k` `updated ≤30d` An MCP server that connects Telegram accounts to MCP-compatible clients like Claude and Cursor, exposing 80+ tools for reading chats, managing groups, sending messages, and handling media. <details><summary>More about</summary>

  It lets developers automate Telegram workflows and interact with chat history directly from their AI coding environment instead of switching contexts to a separate messaging app.

  _We have finally achieved the platonic ideal of modern development: an AI agent that can now argue with strangers in your Telegram groups while you wonder why you ever learned to context-switch manually._

  `mcp` `telegram` `telethon` `integration` `automation`
  </details>

- **[mcp-server-chatsum](https://github.com/chatmcp/mcp-server-chatsum)** `⭐ 1k` `updated >1y` An MCP server that connects to a local chat database to query and summarize chat messages for use with MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It allows developers to surface and condense context from their chat history directly inside their AI client, bridging conversational logs with active development workflows.

  _Finally, an autonomous way to summarize the thousands of tokens you burned last week arguing with an AI about a CSS margin, just so you can burn more tokens understanding the summary._

  `mcp` `chat` `summary` `node`
  </details>

- **[MCPJungle](https://github.com/mcpjungle/mcpjungle)** `⭐ 1k` `updated ≤30d` A self-hosted MCP gateway that lets developers expose multiple MCP servers behind a single endpoint for centralized discovery, access control, and client configuration. <details><summary>More about</summary>

  It removes the need to wire every MCP server into every AI client individually, giving teams a single control point for tools, prompts, and resources.

  _We now have a gateway to manage the servers that manage the tools that manage the models that were supposed to manage our workload._

  `gateway` `infrastructure` `mcp` `self-hosted`
  </details>

- **[meigen-ai-design-mcp](https://github.com/jau123/meigen-ai-design-mcp)** `⭐ 947` `updated ≤30d` An MCP server that extends Claude Code and OpenClaw with image generation capabilities via GPT Image 2, Nanobanana, and local ComfyUI, featuring a library of over 1,400 curated prompts and multi-task orchestration. <details><summary>More about</summary>

  Developers can delegate complex design and image-generation tasks directly from their coding agent, enabling parallel batch generation and multi-direction workflows without leaving the terminal.

  _Your coding agent can now generate 1,500 variations of a perfume ad while you're still trying to decide if 'luxury minimalist' is a valid CSS framework name._

  `mcp` `image-generation` `claude-code` `comfyui` `prompt-engineering`
  </details>

- **[mcp-neo4j](https://github.com/neo4j-contrib/mcp-neo4j)** `⭐ 944` `updated ≤30d` A collection of Neo4j Labs MCP servers that let AI assistants query graphs with Cypher, manage Aura instances, and store knowledge graphs via natural language. <details><summary>More about</summary>

  It connects your AI coding assistant directly to graph data and cloud infrastructure, turning natural language into Cypher queries and Aura management without switching contexts.

  _You now have a graph database, three MCP servers, and a cloud console all arguing about whether your knowledge graph truly understands your weekend plans._

  `mcp` `neo4j` `graph-database` `agent-tooling` `knowledge-graph`
  </details>

- **[mcpm.sh](https://github.com/pathintegral-institute/mcpm.sh)** `⭐ 939` `updated ≤30d` A CLI tool and registry for discovering, installing, and managing MCP servers across multiple AI clients like Claude Desktop, Cursor, and Windsurf. <details><summary>More about</summary>

  It centralizes the fragmented setup of Model Context Protocol servers into a single global configuration, allowing developers to manage tools once and share them across different AI coding environments.

  _We have successfully invented package managers for the plugins that help our AI assistants talk to the tools that help us code, because apparently installing things once is the new frontier._

  `mcp` `cli` `package-manager` `registry` `devops`
  </details>

- **[QGIS MCP](https://github.com/jjsantos01/qgis_mcp)** `⭐ 935` `updated ≤1y` A Model Context Protocol (MCP) server and QGIS plugin that allows LLMs like Claude to directly control QGIS for project management, layer manipulation, and code execution. <details><summary>More about</summary>

  It turns QGIS into a programmable environment where geospatial workflows can be prototyped and executed through natural language prompts rather than manual GUI interaction.

  _Finally, you can ask an LLM to execute arbitrary Python code in your GIS software, because the 'select by expression' dialog simply wasn't enough of a footgun._

  `geospatial` `gis` `mcp` `plugin` `qgis`
  </details>

- **[freecad-mcp](https://github.com/neka-nat/freecad-mcp)** `⭐ 893` `updated ≤30d` An MCP server that lets Claude Desktop control FreeCAD to create, edit, and inspect 3D CAD models via RPC and exposed tools. <details><summary>More about</summary>

  Developers working with CAD can iterate on parts and assemblies through natural language conversations instead of manually chaining parametric operations inside FreeCAD.

  _We have finally achieved the platonic ideal of our era: an AI agent that can design a toy car so you don’t have to open a CAD workbench, but you still have to configure JSON, install an addon, and bind an RPC server to 0.0.0.0._

  `mcp` `cad` `claude` `freecad` `agent-tools`
  </details>

- **[openapi-mcp-server](https://github.com/janwilmake/openapi-mcp-server)** `⭐ 890` `updated ≤90d` An MCP server that lets AI clients search, summarize, and explore OpenAPI specifications using natural language. <details><summary>More about</summary>

  It allows coding agents in tools like Claude and Cursor to reliably navigate complex API specs without the developer manually feeding endpoints into context.

  _We've successfully built infrastructure to help AI understand the very APIs we were too burnt out to read ourselves._

  `api-integration` `context-engineering` `mcp` `openapi`
  </details>

- **[Web Search MCP](https://github.com/mrkrsl/web-search-mcp)** `⭐ 836` `updated ≤1y` A locally hosted Model Context Protocol server that provides web search capabilities via Bing, Brave, and DuckDuckGo for local LLMs like Qwen3 and Gemma 3. <details><summary>More about</summary>

  It allows developers running local models to grant their LLMs autonomous web research abilities without relying on external APIs or cloud-based search keys.

  _Finally, your local 8B model can doom-scroll the internet just as effectively as you can, provided you don't mind configuring Playwright and praying your tool-calling weights are up to date._

  `local-llm` `mcp` `typescript` `web-search`
  </details>

- **[browser-use-mcp-server](https://github.com/kontext-security/browser-use-mcp-server)** `⭐ 821` `updated ≤1y` A Model Context Protocol server that lets AI agents control web browsers via Playwright and the browser-use library, with integrations for Cursor, Windsurf, and Claude Desktop. <details><summary>More about</summary>

  It gives coding agents real-time, visual browser control and VNC streaming so they can automate web tasks directly from your IDE workflow.

  _We’ve reached the point where your AI assistant now needs its own VNC session just to click a button on a website while you watch it fail in real time._

  `agent-tools` `browser-automation` `cursor` `mcp` `playwright`
  </details>

- **[octocode-mcp](https://github.com/bgauryy/octocode-mcp)** `⭐ 807` `updated ≤30d` An MCP server and CLI that provides semantic code search, LSP intelligence, and agent skills for researching and understanding codebases across GitHub, GitLab, and local repos. <details><summary>More about</summary>

  It gives coding agents deep context—LSP navigation, usage patterns, and multi-phase research sessions—so they can stop hallucinating and start referencing real implementations.

  _Another layer of infrastructure to help your AI pretend it did the reading, while you spend an afternoon configuring OAuth scopes and wondering if the context window is the map or the trap._

  `mcp` `semantic-search` `lsp` `agent-skills` `context-engineering`
  </details>

- **[tradememory-protocol](https://github.com/mnemox-ai/tradememory-protocol)** `⭐ 793` `updated ≤30d` An MCP server that provides AI trading agents with a persistent, outcome-weighted memory layer and SHA-256 tamper-proof audit trails for decision logging. <details><summary>More about</summary>

  It gives developers building trading agents a drop-in memory and compliance layer that works across any market, broker, or AI platform via the Model Context Protocol.

  _Your trading bot can now hallucinate with the unshakable confidence of a seasoned day trader, backed by a cryptographically secure diary of every bad decision it made last week._

  `mcp` `trading` `memory` `audit` `finance`
  </details>

- **[mcp-clickhouse](https://github.com/clickhouse/mcp-clickhouse)** `⭐ 766` `updated ≤30d` An official MCP server that lets AI assistants query ClickHouse clusters, list databases and tables, and run embedded chDB queries. <details><summary>More about</summary>

  It turns a live analytical database into a callable tool so agents can reason over real data without developers building custom connectors.

  _We have successfully abstracted away writing SQL by teaching an LLM to write SQL for us, which is exactly the kind of circular progress the ecosystem loves._

  `mcp` `clickhouse` `database` `analytics`
  </details>

- **[mcp](https://github.com/hyperbrowserai/mcp)** `⭐ 761` `updated ≤180d` A Model Context Protocol server that exposes Hyperbrowser's web scraping, structured data extraction, web crawling, and browser automation agents to MCP-compatible AI clients like Cursor, Windsurf, and Claude Desktop. <details><summary>More about</summary>

  It lets coding agents reach outside the repo to scrape pages, run browser agents, and extract structured data without developers building custom web automation glue code.

  _We have officially reached the point where your coding assistant needs its own headless browser and an MCP server just to Google something for you._

  `agent-infra` `agent-tools` `browser-automation` `cloud-browser` `mcp` `web-automation` `web-scraping`
  </details>

- **[mcp-searxng](https://github.com/ihor-sokoliuk/mcp-searxng)** `⭐ 751` `updated ≤30d` An MCP server that connects AI assistants to a SearXNG instance to provide web search and URL content reading capabilities. <details><summary>More about</summary>

  It allows coding agents and LLMs to perform grounded web searches and fetch page content without relying on proprietary search APIs.

  _Now your agent can argue with you about Stack Overflow answers in real-time instead of just hallucinating its own bad advice._

  `mcp` `search` `searxng` `nodejs`
  </details>

- **[android-mcp-server](https://github.com/minhalvp/android-mcp-server)** `⭐ 742` `updated ≤1y` An MCP server that exposes Android device control via ADB, allowing AI models and editors to execute commands, capture screenshots, and inspect UI layouts. <details><summary>More about</summary>

  It lets coding agents and MCP clients directly interact with Android emulators or devices, bridging the gap between AI-assisted code generation and mobile hardware testing.

  _We have finally achieved the singularity: an AI that can take a screenshot of your broken UI and proudly tell you exactly what it sees while being completely unable to fix the XML._

  `mcp` `android` `adb` `automation` `mobile`
  </details>

- **[clojure-mcp](https://github.com/bhauman/clojure-mcp)** `⭐ 741` `updated ≤30d` An MCP server that connects LLM clients like Claude Code or Claude Desktop to a Clojure project, providing REPL integration and Clojure-aware editing tools. <details><summary>More about</summary>

  It allows AI coding agents to reliably navigate Clojure's structural syntax and interact with a live REPL, closing the gap for functional language support in agentic workflows.

  _We have successfully abstracted the parentheses problem into a protocol negotiation problem, ensuring the AI can now break your code with perfect structural awareness._

  `clojure` `mcp` `repl` `cli` `coding-agent-extension`
  </details>

- **[mcp-server-docker](https://github.com/ckreiling/mcp-server-docker)** `⭐ 711` `updated ≤1y` An MCP server that allows developers to manage Docker containers, images, networks, and volumes using natural language through AI assistants like Claude Desktop. <details><summary>More about</summary>

  It bridges the gap between local container infrastructure and AI workflows, letting developers spin up and debug complex multi-container environments like WordPress without leaving their chat interface.

  _We have finally achieved the platonic ideal of modern DevOps: an LLM hallucinating docker-compose flags while mounting the host socket with privileges we explicitly told it not to use._

  `mcp` `docker` `devops` `infrastructure`
  </details>

- **[sentry-mcp](https://github.com/getsentry/sentry-mcp)** `⭐ 676` `updated ≤30d` An official MCP server from Sentry that connects coding assistants like Claude Code and Cursor to Sentry's API for debugging errors, issues, and performance traces. <details><summary>More about</summary>

  It allows coding agents to directly query and investigate production errors and traces within the developer's IDE or CLI workflow, bridging the gap between observability and AI-assisted debugging.

  _We have successfully abstracted away the need to read stack traces ourselves, meaning the AI can now be confused by the Sentry UI on our behalf._

  `ai-debugging` `debugging` `error-tracking` `llm-integration` `mcp` `observability` `sentry`
  </details>

- **[cupertino](https://github.com/mihaelamj/cupertino)** `⭐ 670` `updated ≤30d` A local Swift-based tool that crawls and indexes Apple Developer documentation into a searchable database and serves it to AI agents via the Model Context Protocol. <details><summary>More about</summary>

  It provides offline, hallucination-free access to over 405,000 pages of Apple documentation, allowing AI coding assistants to answer framework questions with accurate, up-to-date context.

  _We have built a system to feed the AI the manual so it stops guessing SwiftUI modifiers, effectively admitting that the model's training data is already obsolete the moment Xcode updates._

  `mcp` `apple-docs` `swift` `local-first` `context-engineering`
  </details>

- **[wren-engine](https://github.com/canner/wren-engine)** `⭐ 661` `updated ≤30d` An open-source semantic context engine built on Rust and Apache DataFusion that provides AI agents with business definitions, metrics, and governance layers for querying 15+ data sources via MCP. <details><summary>More about</summary>

  It allows developers building data agents to move beyond brittle text-to-SQL by grounding LLMs in trusted business logic, relationships, and metrics rather than raw database schemas.

  _Finally, your agent can confidently hallucinate 'net revenue' with the full institutional authority of a semantic model built by someone who left the company six months ago._

  `mcp` `semantic-layer` `data-agent` `context-engineering` `rust`
  </details>

- **[mcp-filesystem-server](https://github.com/mark3labs/mcp-filesystem-server)** `⭐ 640` `updated ≤180d` A Go server implementing the Model Context Protocol (MCP) that exposes local filesystem operations—like read, write, search, and directory tree—as secure, programmable tools for MCP-compatible clients. <details><summary>More about</summary>

  It lets AI agents and developer tools safely access and manipulate your local filesystem through a standardized protocol, removing the need for brittle, custom file-handling glue code.

  _We have successfully abstracted file I/O into yet another protocol layer, so your agent can now recursively delete your project in a way that is fully standards-compliant._

  `mcp` `filesystem` `go` `local-ai` `tooling`
  </details>

- **[mcp-link](https://github.com/automation-ai-labs/mcp-link)** `⭐ 605` `updated >1y` A tool that automatically converts OpenAPI V3 specifications into MCP-compatible servers, allowing existing REST APIs to be consumed by AI agents. <details><summary>More about</summary>

  It eliminates the manual drudgery of writing custom MCP wrappers by letting developers instantly bridge any documented API into the AI agent ecosystem.

  _We have successfully automated the automation layer, meaning you can now expose a thirty-year-old CRUD API to an LLM without ever understanding either the API or the protocol._

  `mcp` `openapi` `api-integration` `tooling`
  </details>

- **[cloud-run-mcp](https://github.com/googlecloudplatform/cloud-run-mcp)** `⭐ 604` `updated ≤30d` An official Google Cloud MCP server that lets AI agents, IDEs, and CLIs deploy and manage applications on Cloud Run. <details><summary>More about</summary>

  It connects AI coding agents directly to GCP infrastructure, allowing them to ship code to production without the developer manually configuring Cloud Run deployments.

  _We have successfully abstracted the last remaining friction point between 'vibe coding' an app and deploying it to a URL that will cost you real money._

  `mcp` `google-cloud` `cloud-run` `deployment` `agent-tooling`
  </details>

- **[mcp-server-neon](https://github.com/neondatabase/mcp-server-neon)** `⭐ 594` `updated ≤30d` An open-source MCP server that translates natural language requests into Neon Management API calls and SQL queries for Postgres databases. <details><summary>More about</summary>

  It allows developers and AI agents to manage Neon projects, branches, and migrations conversationally inside IDEs and MCP clients instead of writing raw API calls or SQL.

  _We have successfully abstracted database management so far away that the next generation of engineers will accidentally truncate production tables using a polite request to Claude._

  `mcp` `neon` `database` `postgres` `natural-language`
  </details>

- **[manim-mcp-server](https://github.com/abhiemj/manim-mcp-server)** `⭐ 591` `updated ≤1y` An MCP server that executes Manim animation scripts and returns rendered videos to compatible AI clients like Claude Desktop. <details><summary>More about</summary>

  It allows developers to generate math and concept animations via natural language prompts without manually running Python scripts or managing render pipelines.

  _We have successfully abstracted away the last remaining reason to understand how Manim works: watching it render a 3-hour mathematical proof while your CPU sounds like a jet engine._

  `mcp` `animation` `manim` `claude`
  </details>

- **[line-bot-mcp-server](https://github.com/line/line-bot-mcp-server)** `⭐ 576` `updated ≤30d` An official LINE Messaging API MCP server that lets AI agents send messages, manage rich menus, and retrieve user data through the LINE Official Account. <details><summary>More about</summary>

  Developers building conversational AI agents can now integrate LINE's massive messaging platform as a standard tool without writing custom API wrappers.

  _We have successfully abstracted away the last remaining joy of reading API documentation by turning LINE bots into yet another tool call in the great MCP land rush._

  `mcp` `line` `messaging` `agent-tools`
  </details>

- **[mcp-pointer](https://github.com/etsd-tech/mcp-pointer)** `⭐ 574` `updated ≤180d` An MCP server paired with a Chrome extension that captures DOM elements via Option+Click and exposes them as context to agentic coding tools like Claude Code and Cursor. <details><summary>More about</summary>

  It closes the loop between visual browser inspection and AI coding agents by letting the model see exactly which UI element a developer is pointing at.

  _We have finally solved the hard problem of explaining to an AI which button we mean by clicking on it, which is definitely easier than just describing it in three paragraphs of prompt tokens._

  `mcp` `dom` `chrome-extension` `agentic-coding`
  </details>

- **[dbt-mcp](https://github.com/dbt-labs/dbt-mcp)** `⭐ 555` `updated ≤30d` An official MCP server from dbt Labs that exposes dbt project context, SQL execution, lineage, and CLI commands to AI agents. <details><summary>More about</summary>

  It lets AI coding agents understand your dbt models, metrics, and lineage well enough to run, test, and introspect pipelines without you manually pasting manifest details into the chat.

  _We have successfully built an integration that allows an AI to trigger a dbt build on your warehouse so you can watch your credit balance disappear in two places at once._

  `mcp` `dbt` `data-engineering` `agent-tooling`
  </details>

- **[iterm-mcp](https://github.com/ferrislucas/iterm-mcp)** `⭐ 555` `updated ≤1y` An MCP server that lets AI models read from and write to the active iTerm2 terminal session, enabling CLI and REPL interaction. <details><summary>More about</summary>

  It bridges the gap between conversational coding agents and the terminal, allowing models to run commands and inspect output directly within your existing macOS workflow.

  _We have finally achieved the pinnacle of engineering: an AI that can Ctrl-C a process it started in a terminal window you are currently watching._

  `mcp` `terminal` `iterm2` `cli` `repl`
  </details>

- **[ida-mcp-server](https://github.com/mxiris-reverse-engineering/ida-mcp-server)** `⭐ 543` `updated ≤1y` A Model Context Protocol server that allows Large Language Models to read and interact with IDA Pro databases for reverse engineering automation. <details><summary>More about</summary>

  It enables developers and reverse engineers to use AI assistants like Claude to navigate, analyze, and automate tasks within complex binary analysis workflows.

  _Finally, a way to introduce context window anxiety into reverse engineering by asking an LLM to explain that one function you've been staring at for three days._

  `mcp` `reverse-engineering` `ida-pro` `automation`
  </details>

- **[chroma-mcp](https://github.com/chroma-core/chroma-mcp)** `⭐ 542` `updated ≤1y` An official Model Context Protocol server that exposes Chroma vector database operations—such as semantic search, document management, and collection configuration—as tools for AI models and agents. <details><summary>More about</summary>

  It lets developers plug persistent, searchable memory into MCP-compatible coding agents and LLM workflows without building custom vector-store integrations.

  _Another essential brick in the tower of middleware that exists solely so your agent can remember what it was doing before the context window threw up its hands._

  `mcp` `vector-database` `memory` `context` `chroma`
  </details>

- **[mcp-mermaid](https://github.com/hustcc/mcp-mermaid)** `⭐ 540` `updated ≤30d` An MCP server that lets AI models generate, validate, and export Mermaid diagrams and charts in formats like SVG, PNG, and base64. <details><summary>More about</summary>

  It allows AI coding assistants and agents to dynamically create architecture diagrams, flowcharts, and data visualizations directly within IDEs and chat workflows.

  _We have successfully automated the production of diagrams that will be inevitably ignored by every stakeholder in the code review._

  `mcp` `mermaid` `diagrams` `ai-tooling`
  </details>

- **[mcp-server-youtube-transcript](https://github.com/kimtaeyoon83/mcp-server-youtube-transcript)** `⭐ 534` `updated ≤180d` An MCP server that allows LLMs and AI agents to retrieve transcripts, subtitles, and metadata from YouTube videos via a simple tool interface. <details><summary>More about</summary>

  It lets coding agents and AI workflows programmatically ingest video content for summarization, learning, or documentation tasks without leaving the development environment.

  _We have finally automated the part of the job where you watch a 45-minute tutorial at 2x speed and still feel like you learned nothing._

  `mcp` `youtube` `transcript` `context-engineering`
  </details>

- **[gateway](https://github.com/centralmind/gateway)** `⭐ 528` `updated ≤1y` A self-hosted gateway that automatically generates and exposes secure, LLM-optimized REST or MCP APIs directly from your database schema. <details><summary>More about</summary>

  It lets developers instantly give AI agents structured, compliant, and auditable access to live database data without writing a custom API.

  _We have successfully abstracted the job of writing a CRUD API into 'run a docker container and pray the LLM guesses the schema correctly'._

  `mcp` `database` `api-generation` `self-hosted` `golang`
  </details>

- **[mcp-youtube](https://github.com/anaisbetts/mcp-youtube)** `⭐ 517` `updated ≤30d` A Model Context Protocol server that uses yt-dlp to download YouTube subtitles and feed them to AI assistants like Claude. <details><summary>More about</summary>

  It allows developers to pipe video transcripts directly into their AI workflow without leaving the context window, enabling quick summarization or Q&A on video content.

  _We have successfully automated the process of watching a video, meaning you can now procrastinate on learning by delegating the watching to a bot that summarizes the very thing you were supposed to watch._

  `mcp` `yt-dlp` `youtube` `context-server`
  </details>

- **[biomcp](https://github.com/genomoncology/biomcp)** `⭐ 499` `updated ≤30d` BioMCP is an MCP server and CLI tool that unifies biomedical data sources—including PubMed, clinical trials, and genomics databases—into a single query grammar for researchers and AI agents. <details><summary>More about</summary>

  It provides developers building biomedical agent workflows with a ready-to-use MCP interface and CLI grammar for cross-entity search, enrichment, and study analysis across multiple public APIs.

  _Yet another MCP server joins the party, proving that the hot new standard for solving fragmented APIs is to wrap them all in an even hotter new standard._

  `mcp` `bioinformatics` `cli` `agent-tooling` `llm-integration`
  </details>

- **[joinly](https://github.com/joinly-ai/joinly)** `⭐ 497` `updated ≤90d` Middleware that lets AI agents join video calls via an MCP server to interact through voice or chat during meetings. <details><summary>More about</summary>

  Developers can connect AI agents to meetings to automate tasks like creating GitHub issues or updating Notion pages in real time.

  _We have finally bridged the gap between "too many meetings" and "too many autonomous agents," so your calendar can now debate you directly._

  `mcp` `meeting-agent` `middleware` `voice-ai`
  </details>

- **[mcp-gsuite](https://github.com/markuspfundstein/mcp-gsuite)** `⭐ 487` `updated >1y` An MCP server that connects AI assistants to Google Workspace, enabling programmatic access to Gmail and Calendar data via OAuth. <details><summary>More about</summary>

  It allows developers to hook Claude and other MCP clients directly into their workspace workflows, letting the assistant draft replies, summarize threads, and manage calendars without leaving the chat interface.

  _Now your AI can politely decline meetings on your behalf while you wonder if the OAuth scope includes the existential dread of your unread inbox._

  `mcp` `google-workspace` `integration` `oauth`
  </details>

- **[mcp-server-motherduck](https://github.com/motherduckdb/mcp-server-motherduck)** `⭐ 476` `updated ≤30d` A local Model Context Protocol server that exposes DuckDB and MotherDuck databases to AI assistants for executing SQL queries and browsing database catalogs. <details><summary>More about</summary>

  It allows developers to connect AI coding agents and IDEs directly to local or remote analytical data stores, enabling natural language querying and manipulation of data without leaving the development environment.

  _We have successfully abstracted the database so far away that you now need a dedicated protocol server just to ask an AI to run a query your grandfather would have typed directly into the CLI._

  `mcp` `duckdb` `sql` `data-engineering`
  </details>

- **[blockrun-mcp](https://github.com/blockrunai/blockrun-mcp)** `⭐ 466` `updated ≤30d` An MCP server that gives AI agents pay-per-call access to external data sources including markets, web search, X/Twitter, and crypto prices via a local USDC wallet. <details><summary>More about</summary>

  Developers can extend Claude and other MCP-compatible assistants with real-time external data without managing multiple API keys, subscriptions, or billing dashboards.

  _We have successfully abstracted away the suffering of managing API keys, only to replace it with the suffering of debugging a local crypto wallet so your agent can check Polymarket._

  `mcp` `data-access` `x402` `pay-per-call` `agent-tools`
  </details>

- **[opentabs](https://github.com/opentabs-dev/opentabs)** `⭐ 463` `updated ≤30d` OpenTabs is a local MCP server and Chrome extension that lets AI agents call real web APIs through your authenticated browser session, eliminating the need for API keys or OAuth setup. <details><summary>More about</summary>

  It allows developers to wire AI assistants into authenticated web services like Slack, GitHub, and Jira using existing browser sessions, bypassing the friction of manual API integration.

  _We have officially reached the point where the browser's 'logged in' cookie jar is now the most critical middleware in the modern developer stack._

  `mcp` `browser-automation` `api-integration` `chrome-extension` `typescript`
  </details>

- **[airtable-mcp-server](https://github.com/domdomegg/airtable-mcp-server)** `⭐ 443` `updated ≤30d` A Model Context Protocol server that provides read and write access to Airtable bases, enabling LLMs to inspect schemas and manipulate records. <details><summary>More about</summary>

  It allows developers to connect AI assistants in Claude, Cursor, and Cline directly to their Airtable data for contextual database operations.

  _We have successfully abstracted the database so that an LLM can now argue with your Airtable schema on your behalf._

  `mcp` `airtable` `database` `integration`
  </details>

- **[prometheus-mcp-server](https://github.com/pab1it0/prometheus-mcp-server)** `⭐ 431` `updated ≤30d` A Model Context Protocol server that allows AI assistants and coding agents to execute PromQL queries and analyze metrics from a connected Prometheus instance. <details><summary>More about</summary>

  It bridges observability data with AI workflows, enabling agents inside IDEs or CLIs to directly diagnose production issues using real-time metrics.

  _Finally, your AI assistant can panic about the server load just as effectively as you can, using the exact same queries to confirm that yes, everything is indeed on fire._

  `mcp` `prometheus` `observability` `devops` `metrics`
  </details>

- **[agent](https://github.com/1mcp-app/agent)** `⭐ 427` `updated ≤30d` A unified Model Context Protocol runtime that aggregates multiple MCP servers and provides CLI and proxy modes for connecting tool-using agents like Codex and Claude with progressive tool discovery. <details><summary>More about</summary>

  It reduces MCP configuration sprawl by giving agents a single aggregated runtime with instructions, inspect, and run commands instead of dumping every tool schema into context at once.

  _We have successfully invented infrastructure to manage the infrastructure that manages the agents that manage the code we are too overwhelmed to read._

  `agent-orchestration` `agent-tooling` `business-process` `cli` `context-management` `enterprise` `mcp` `no-code` `saas` `workflow-automation`
  </details>

- **[openapi](https://github.com/longbridge/openapi)** `⭐ 418` `updated ≤30d` A multi-language SDK and MCP server implementation for the Longbridge OpenAPI trading and quote platform. <details><summary>More about</summary>

  It provides developers with the programmatic building blocks and MCP integration needed to automate trading strategies and analyze real-time financial data across Rust, Python, Node.js, Java, C, and C++.

  _Yet another SDK reminding us that while AI agents are learning to write poetry, developers are still manually integrating the plumbing to automate their stock portfolios._

  `api` `finance` `mcp` `multi-language` `sdk` `trading`
  </details>

- **[memora](https://github.com/agentic-box/memora)** `⭐ 400` `updated ≤30d` A lightweight MCP server that provides persistent memory, semantic search, and knowledge graph capabilities for AI agents. <details><summary>More about</summary>

  It allows developers to add cross-session memory and contextual recall to their AI workflows via the Model Context Protocol.

  _We have finally solved the existential dread of a bot forgetting what it was doing five minutes ago, provided you are willing to self-host a graph database to do it._

  `agents` `knowledge-graph` `mcp` `memory` `persistent-storage` `semantic-search`
  </details>

- **[memora](https://github.com/agentic-mcp-tools/memora)** `⭐ 400` `updated ≤30d` A lightweight MCP server that provides AI agents with persistent memory via semantic search, knowledge graphs, and structured document storage. <details><summary>More about</summary>

  It solves the context-window amnesia problem by giving coding agents like Claude Code a durable, queryable memory across sessions and repositories.

  _We have successfully built infrastructure to help our AI friends remember us, effectively constructing a digital hoard of half-baked TODOs and stale architectural debates that outlives our own tenure at the company._

  `mcp` `memory` `knowledge-graph` `rag` `semantic-search`
  </details>

- **[auto-browser](https://github.com/lvcidpsyche/auto-browser)** `⭐ 396` `updated ≤30d` An MCP-native browser control plane that lets AI agents and MCP clients drive a shared Playwright browser with human takeover, reusable auth profiles, and built-in safety rails. <details><summary>More about</summary>

  It gives developers a practical way to automate brittle web workflows with AI while keeping a human in the loop and preserving logged-in sessions across runs.

  _Now your agent can confidently click the wrong button in a browser you’re supposed to be supervising, with audit logs to prove it._

  `mcp` `browser-automation` `playwright` `agent-tooling` `local-first`
  </details>

- **[droidmind](https://github.com/hyperb1iss/droidmind)** `⭐ 389` `updated ≤180d` An MCP server that bridges AI assistants with Android devices via ADB, enabling natural language control, debugging, and system analysis. <details><summary>More about</summary>

  It allows coding agents to directly interact with Android hardware for building, debugging, and testing mobile applications within the developer's existing IDE workflow.

  _Finally, your AI can tap the 'Accept Cookies' button on your emulator for you, right before it hallucinates a Gradle sync error._

  `mcp` `android` `adb` `debugging` `automation`
  </details>

- **[mcp-hfspace](https://github.com/evalstate/mcp-hfspace)** `⭐ 388` `updated ≤1y` An MCP server that connects Claude Desktop and other MCP clients to Hugging Face Spaces, automatically configuring endpoints for image generation, vision models, and other hosted tools. <details><summary>More about</summary>

  It lets developers pipe hosted Hugging Face models and Gradio spaces directly into their local AI workflows without writing custom integration code.

  _We have officially reached the point where we need a protocol server to talk to a server that hosts servers, just to get our desktop assistant to draw a flower._

  `mcp` `huggingface` `claude-desktop` `gradio`
  </details>

- **[mcp-graphql](https://github.com/blurrah/mcp-graphql)** `⭐ 383` `updated ≤1y` A Model Context Protocol server that allows LLMs to introspect schemas and execute queries against GraphQL endpoints. <details><summary>More about</summary>

  It allows coding agents and AI workflows to dynamically discover and interact with GraphQL APIs without requiring custom integration code for every schema.

  _Another layer of middleware so your LLM can hallucinate queries against a schema it just introspected, adding 'GraphQL expert' to the list of things it confidently fails at._

  `mcp` `graphql` `llm-integration` `api-tooling`
  </details>

- **[kagimcp](https://github.com/kagisearch/kagimcp)** `⭐ 376` `updated ≤30d` The official Model Context Protocol (MCP) server that exposes Kagi search and summarization tools to compatible AI clients like Claude Code and OpenAI Codex. <details><summary>More about</summary>

  It allows developers to swap the default web search in their coding agents for Kagi's API, offering potentially higher-quality results and summary engines inside the IDE.

  _We have successfully abstracted web searching to the point where we now need a protocol server to argue with our agents about which search engine they are allowed to use._

  `mcp` `kagi` `search` `tooling`
  </details>

- **[graphlit-mcp-server](https://github.com/graphlit/graphlit-mcp-server)** `⭐ 375` `updated ≤180d` An MCP server that connects AI clients like Cursor and Cline to the Graphlit platform for ingesting, searching, and retrieving knowledge from developer tools and unstructured data sources. <details><summary>More about</summary>

  It allows developers to pipe context from Jira, GitHub, Slack, and documents directly into their AI coding workflow without building custom ingestion pipelines.

  _We have successfully abstracted the labor of reading Jira tickets and Slack threads into a server that feeds them to an LLM, ensuring we can now ignore our colleagues with algorithmic efficiency._

  `agents` `api` `context` `context-layer` `ingestion` `integrations` `knowledge-management` `mcp` `rag`
  </details>

- **[evm-mcp-server](https://github.com/mcpdotdirect/evm-mcp-server)** `⭐ 374` `updated ≤180d` An MCP server that exposes 22 tools and 10 AI-guided prompts for reading state, transferring tokens, and interacting with smart contracts across 60+ EVM-compatible networks. <details><summary>More about</summary>

  It lets AI agents handle blockchain read/write operations with automatic ABI fetching and ENS resolution so developers don't have to hand-craft Web3 RPC glue code.

  _We have successfully abstracted Ethereum so thoroughly that your AI agent can now accidentally drain a wallet on Base with the same effortless confidence it brings to deleting your production database._

  `mcp` `evm` `web3` `blockchain` `agent-tooling`
  </details>

- **[db-mcp-server](https://github.com/freepeak/db-mcp-server)** `⭐ 372` `updated ≤30d` A Go-based server implementing the Model Context Protocol that gives AI assistants structured, concurrent access to multiple MySQL, PostgreSQL, SQLite, and Oracle databases. <details><summary>More about</summary>

  It lets AI coding tools execute queries, inspect schemas, and manage transactions across several databases through a single, standardized MCP interface.

  _Your AI agent can now confidently generate SQL queries for four different databases it doesn't actually understand, but at least it will fail consistently across all of them._

  `mcp` `database` `go` `ai-tooling` `backend`
  </details>

- **[mcp-teams-server](https://github.com/inditextech/mcp-teams-server)** `⭐ 370` `updated ≤30d` An MCP server implementation that enables AI models to read, create, and reply to messages within Microsoft Teams channels via the Model Context Protocol. <details><summary>More about</summary>

  It allows developers to wire AI agents into internal team communication workflows, letting bots interact directly with Teams threads and members.

  _We have successfully abstracted the workplace chat channel into yet another tool-calling context, ensuring your AI can now politely mention you in a thread you were already ignoring._

  `mcp` `microsoft-teams` `integration` `python`
  </details>

- **[bazi-mcp](https://github.com/cantian-ai/bazi-mcp)** `⭐ 369` `updated ≤1y` An MCP server that provides accurate Bazi (Chinese metaphysics) calculations and destiny forecasting to AI agents. <details><summary>More about</summary>

  It gives developers a clean, structured way to inject traditional metaphysics calculations into agent workflows without relying on hallucination-prone LLMs.

  _We have finally solved the critical ecosystem gap of providing deterministic destiny forecasting to our autonomous agents, right alongside the tools for deploying containers and querying databases._

  `mcp` `metaphysics` `agent-tooling` `bazi`
  </details>

- **[tfmcp](https://github.com/nwiizo/tfmcp)** `⭐ 363` `updated ≤90d` A Rust-based CLI tool that runs as a Model Context Protocol server, allowing AI assistants like Claude Desktop to read, analyze, apply, and manage Terraform configurations and state. <details><summary>More about</summary>

  It bridges the gap between infrastructure-as-code workflows and AI agents, enabling natural language management of Terraform environments directly through an MCP-compatible client.

  _Finally, you can ask an LLM to taint your production resources, combining the unpredictability of AI with the destructive power of `terraform apply`._

  `terraform` `mcp` `infrastructure` `rust` `cli`
  </details>

- **[token-optimizer-mcp](https://github.com/ooples/token-optimizer-mcp)** `⭐ 358` `updated ≤30d` An MCP server that reduces token usage in Claude Code by applying caching, compression, and smart tool intelligence to achieve over 95% reduction. <details><summary>More about</summary>

  It helps developers control context window bloat and manage API costs when working extensively with Claude Code on large codebases.

  _We have officially entered the era of building infrastructure to optimize the infrastructure that talks to the model that writes the code we used to write ourselves._

  `mcp` `token-optimization` `claude-code` `context-engineering`
  </details>

- **[vscode-mcp-server](https://github.com/juehang/vscode-mcp-server)** `⭐ 356` `updated ≤180d` A VS Code extension that runs an MCP server to expose the editor's file system, symbol search, and editing capabilities to AI coding assistants like Claude. <details><summary>More about</summary>

  It allows external coding agents to directly manipulate code within a live VS Code workspace using native editor features rather than just raw file system access.

  _We have finally achieved the milestone where your IDE needs a plugin so that your AI can talk to the IDE you are already using to watch the AI edit the code._

  `mcp` `vscode` `coding-agent` `extension`
  </details>

- **[bloodhound-mcp-ai](https://github.com/mordavid/bloodhound-mcp-ai)** `⭐ 353` `updated ≤1y` An MCP server that allows security professionals to query BloodHound Active Directory data and attack paths using natural language instead of complex Cypher queries. <details><summary>More about</summary>

  It lowers the barrier to entry for AD security analysis by wrapping 75+ Cypher queries into an AI-accessible tool that integrates with existing MCP clients.

  _We have successfully abstracted away the need to understand graph databases, meaning you can now pwn an entire domain without ever learning how the graph actually works._

  `mcp` `security` `bloodhound` `active-directory` `cypher`
  </details>

- **[base-mcp](https://github.com/base/base-mcp)** `⭐ 348` `updated ≤1y` A Model Context Protocol server that provides onchain tools for LLMs to interact with the Base network and Coinbase API, enabling wallet management, token transfers, smart contract deployment, and NFT operations. <details><summary>More about</summary>

  It allows developers to extend AI clients like Claude Desktop and Cursor with direct, authenticated access to onchain actions without building custom blockchain integrations.

  _Finally, your coding agent can deploy a smart contract and drain your wallet in the same autonomous breath, removing the need for human error entirely._

  `mcp` `blockchain` `base` `onchain` `coinbase`
  </details>

- **[wegotdocs/open-mcp](https://github.com/boltmcp/boltmcp)** `⭐ 348` `updated ≤90d` BoltMCP is an enterprise-grade, self-hosted platform for creating, deploying, and managing custom Model Context Protocol (MCP) servers with support for OAuth 2, Streamable HTTP, and rich tool customization. <details><summary>More about</summary>

  It allows development teams to standardize and operate MCP infrastructure on-premises, turning API integrations into declarative, secure tool servers for their AI agents.

  _We have successfully abstracted the abstraction, meaning you can now deploy a Kubernetes cluster just to argue with a server about whether it has the right token context._

  `enterprise` `kubernetes` `mcp` `orchestration` `self-hosted`
  </details>

- **[octocode](https://github.com/muvon/octocode)** `⭐ 345` `updated ≤30d` A Rust-based MCP server that builds a knowledge graph from a codebase using tree-sitter AST parsing to provide semantic search and structural context to AI agents. <details><summary>More about</summary>

  It allows AI assistants like Claude and Cursor to navigate actual code dependencies and relationships rather than treating the repository as flat text chunks.

  _We have successfully built a graph of why our code is broken, now we just need an agent smart enough to ignore the graph and commit the bug anyway._

  `mcp` `semantic-search` `knowledge-graph` `cli` `rust`
  </details>

- **[memorymesh](https://github.com/chemiguel23/memorymesh)** `⭐ 340` `updated ≤90d` A local knowledge graph server that implements the Model Context Protocol (MCP) to provide structured, schema-driven memory persistence for AI models and agents. <details><summary>More about</summary>

  It allows developers to give their local AI agents a persistent, structured long-term memory that can be strictly defined via schemas, moving beyond flat chat history.

  _We have officially progressed from 'vibe coding' to 'vibe schema design' so your local RPG agent can remember that Aragorn is a Ranger across sessions._

  `mcp` `knowledge-graph` `memory` `typescript` `local-ai`
  </details>

- **[mcp-server](https://github.com/mapbox/mcp-server)** `⭐ 338` `updated ≤30d` A Node.js server implementing the Model Context Protocol (MCP) to expose Mapbox APIs like geocoding, routing, and POI search as tools for AI agents and applications. <details><summary>More about</summary>

  It allows developers to quickly equip AI agents and coding assistants with comprehensive geospatial intelligence without writing custom wrappers for the Mapbox platform.

  _Your AI agent can now optimize a multi-stop cycling route and calculate isochrones, solving the critical problem of your codebase not knowing exactly how far you are from the nearest coffee shop._

  `mcp` `mapbox` `geospatial` `nodejs`
  </details>

- **[binary_ninja_mcp](https://github.com/fosdickio/binary_ninja_mcp)** `⭐ 336` `updated ≤90d` A Binary Ninja plugin that runs an MCP server, exposing reverse engineering capabilities to MCP-compatible LLM clients like Cline, Cursor, and Claude Desktop. <details><summary>More about</summary>

  It allows developers to delegate tedious reverse engineering tasks, such as renaming functions and analyzing malware, directly to an LLM within their existing Binary Ninja workflow.

  _We have finally reached the point where the AI is doing the decompiling, the renaming, and the CTF solving, leaving the human to merely watch the progress bar and wonder when 'reversing like a human' became a prompt engineering task._

  `mcp` `reverse-engineering` `binary-ninja` `security`
  </details>

- **[investor-agent](https://github.com/ferdousbhai/investor-agent)** `⭐ 328` `updated ≤30d` A Model Context Protocol server that provides financial research tools—such as stock fundamentals, historical prices, and technical indicators—for building investor-focused AI agents. <details><summary>More about</summary>

  It allows developers to quickly equip coding agents with real-time financial data and analysis capabilities without building custom API integrations for market data.

  _We have finally solved the pressing issue of AI agents needing to calculate the RSI of a mid-cap stock at 2 AM while you are trying to sleep._

  `mcp` `finance` `fintech` `agent-tools` `market-data`
  </details>

- **[telegram-mcp](https://github.com/chaindead/telegram-mcp)** `⭐ 326` `updated ≤90d` An MCP server that bridges the Telegram API with AI assistants, enabling programmatic management of dialogs, messages, drafts, and read statuses. <details><summary>More about</summary>

  It allows developers to wire Telegram directly into agent workflows so assistants can read, summarize, and draft responses to messages without leaving the IDE.

  _We have finally solved the hardest problem in computer science: making your AI agent just as distracted by Telegram notifications as you are._

  `mcp` `telegram` `messaging` `tooling`
  </details>

- **[mcp_polygon](https://github.com/massive-com/mcp_massive)** `⭐ 325` `updated ≤30d` An MCP server that exposes the full Massive.com financial market data API to LLMs through three composable tools: search, call, and query. <details><summary>More about</summary>

  Developers can let coding agents pull real-time and historical market data, calculate option greeks, and run SQL queries without writing custom API integration code.

  _Your trading bot now has the same API access as your analyst, which mostly means your CLI is one prompt away from YOLOing a theta-decay experiment at 2am._

  `finance` `llm-tooling` `market-data` `mcp` `sqlite`
  </details>

- **[mcp-everything-search](https://github.com/mamertofabian/mcp-everything-search)** `⭐ 325` `updated ≤1y` An MCP server that provides fast file searching capabilities across Windows, macOS, and Linux by integrating with platform-native search utilities like Everything, Spotlight, and locate. <details><summary>More about</summary>

  It gives coding agents instant filesystem awareness by letting them search files and folders across the entire system without manual traversal or indexing.

  _We have finally invented a protocol so an AI can ask Windows where a file is, instead of nervously grepping its way through a repo like a lost intern._

  `mcp` `filesystem` `search` `tooling`
  </details>

- **[facebook-ads-mcp-server](https://github.com/gomarble-ai/facebook-ads-mcp-server)** `⭐ 320` `updated ≤1y` An MCP server that provides programmatic access to Meta Ads data and management features for integration with AI clients like Cursor and Claude Desktop. <details><summary>More about</summary>

  It allows developers to query and manage ad campaigns through natural language in their IDE, removing the need to manually navigate the Meta Ads UI or build custom API wrappers.

  _We have successfully abstracted a UI behind an API so we can ask an LLM to click the buttons for us, completing the circle of 'I don't want to do my job' infrastructure._

  `mcp` `meta-ads` `marketing` `integration`
  </details>

- **[Windows Control](https://github.com/claude-did-this/mcpcontrol)** `⭐ 319` `updated ≤180d` An MCP server for Windows that enables AI models like Claude to programmatically control the desktop via mouse, keyboard, window management, and screen capture. <details><summary>More about</summary>

  It allows developers to delegate tedious UI testing and cross-application workflows to an AI that can actually see and interact with the Windows interface.

  _We have finally bridged the gap between 'vibe coding' and 'vibe clicking' by letting an LLM take over your mouse cursor in a 1280x720 virtual machine._

  `automation` `claude` `computer-control` `mcp` `os-automation` `os-control` `windows`
  </details>

- **[mcp-server-simulator-ios-idb](https://github.com/inditextech/mcp-server-simulator-ios-idb)** `⭐ 302` `updated ≤180d` An MCP server that lets LLMs control iOS simulators through natural language commands, handling app installs, UI interactions, and debugging tasks on macOS. <details><summary>More about</summary>

  It bridges LLM assistants and Apple's mobile development toolchain, enabling automated UI testing and simulator control without leaving the AI workflow.

  _You can now ask a language model to tap a button on an iPhone simulator, which is either the future of testing or the moment we stop learning how to use Xcode correctly._

  `mcp` `ios` `simulator` `testing` `llm-integration`
  </details>

- **[llm-context](https://github.com/cyberchitta/llm-context.py)** `⭐ 299` `updated ≤30d` A CLI tool and MCP server that builds task-specific context bundles from a codebase using rule-based filtering, smart outlining, and clipboard or MCP output for LLM workflows. <details><summary>More about</summary>

  It reduces the friction of manually hunting, copying, and curating files by letting developers and agents define reusable rules that select, outline, and deliver the right code context for reviews, debugging, and task-focused sessions.

  _We have finally built a tool to manage the context we only need because the models can’t remember the repo we just opened._

  `cli` `context-management` `llm-workflow` `mcp` `rules`
  </details>

- **[second-brain-agent](https://github.com/flepied/second-brain-agent)** `⭐ 292` `updated ≤90d` A local AI agent that automatically indexes personal knowledge bases—including markdown, PDFs, and videos—and exposes them via a built-in MCP server for retrieval. <details><summary>More about</summary>

  It provides developers with a self-hosted bridge between their existing note stacks and LLM workflows by surfacing relevant context through the Model Context Protocol.

  _Yet another excuse to spend three hours configuring a RAG pipeline for notes you haven't opened since 2022, now with extra MCP jargon._

  `langchain` `pkm` `mcp` `retrieval` `local-ai`
  </details>

- **[doris-mcp-server](https://github.com/apache/doris-mcp-server)** `⭐ 291` `updated ≤90d` An Apache Doris MCP server that connects LLMs to Doris databases for natural language querying, SQL execution, and metadata management. <details><summary>More about</summary>

  It gives developers a standardized MCP interface to hook LLM clients into their analytics stack for NL2SQL workflows without building custom database connectors.

  _We have finally reached the point where even the database needs its own protocol server just to remind the LLM that your column is named `user_id` and not `uuid_v2_final_final`._

  `mcp` `database` `nl2sql` `analytics` `doris`
  </details>

- **[FileScopeMCP](https://github.com/admica/filescopemcp)** `⭐ 290` `updated ≤30d` An MCP server that analyzes a codebase to rank files by importance, map dependencies, and extract symbols, providing structured context to AI assistants via tools like find_important_files and find_callers. <details><summary>More about</summary>

  It attempts to solve the 'lost in the codebase' problem for agents by automatically generating and maintaining a structural map so the LLM knows which files actually matter before suggesting changes.

  _We have officially reached the point where we need a dedicated background daemon, an LLM broker, and a dashboard just to remind our AI that main.ts is slightly more important than your grandma's cookie recipe._

  `codebase-analysis` `context-engineering` `developer-tools` `mcp`
  </details>

- **[mcp-server-playwright](https://github.com/vikashloomba/mcp-server-playwright)** `⭐ 289` `updated ≤1y` An MCP server that exposes Playwright browser automation capabilities—navigation, screenshots, clicks, form filling, console logs, and JavaScript execution—to LLM-powered tools like Claude and Cursor. <details><summary>More about</summary>

  It lets AI coding assistants directly drive a real browser, turning them from code generators into agents that can observe and interact with live web pages.

  _We’ve successfully taught the stochastic parrot to click 'Accept Cookies' so you don’t have to, right before it hallucinates a CSS selector and rage-clicks the footer._

  `agent-tools` `browser-automation` `mcp` `playwright`
  </details>

- **[mcp-google-map](https://github.com/cablate/mcp-google-map)** `⭐ 286` `updated ≤30d` An open-source Model Context Protocol server that exposes 18 Google Maps tools—including geocoding, routing, places search, weather, and air quality—to AI agents via stdio, StreamableHTTP, or CLI modes. <details><summary>More about</summary>

  It lets developers give their local or hosted AI agents detailed, composable geospatial reasoning without relying on Google's limited, managed MCP offering.

  _We have finally reached the point where your AI agent needs an API key, a cloud project, and eighteen tools just to tell you there is a sushi place three blocks away._

  `mcp` `google-maps` `agent-tools` `geospatial` `typescript`
  </details>

- **[browser-control-mcp](https://github.com/eyalzh/browser-control-mcp)** `⭐ 278` `updated ≤90d` An MCP server paired with a Firefox extension that allows AI assistants to control the user's browser for tab management, history search, and webpage content reading with explicit user consent. <details><summary>More about</summary>

  It lets developers wire AI agents into their actual personal browser workflow for research and tab organization without handing over full arbitrary scripting control.

  _Finally, an MCP server that lets your AI agent manage your 47 open tabs, proving once and for all that we've successfully automated the distraction._

  `mcp` `browser-extension` `firefox` `agent-tooling`
  </details>

- **[mcp-mongo-server](https://github.com/kiliczsh/mcp-mongo-server)** `⭐ 278` `updated ≤90d` A Model Context Protocol server that allows LLMs to inspect schemas, query, aggregate, and write to MongoDB databases via a standardized interface. <details><summary>More about</summary>

  It lets developers connect AI assistants like Claude and Cursor directly to MongoDB, turning natural language into database operations without writing boilerplate query code.

  _We have successfully abstracted away the need to know MongoDB query syntax, meaning you can now prompt your way into a production outage with even greater confidence._

  `mcp` `mongodb` `database` `llm-integration` `node`
  </details>

- **[mac_messages_mcp](https://github.com/carterlasalle/mac_messages_mcp)** `⭐ 276` `updated ≤30d` A Python MCP server that connects LLMs to the macOS Messages app, enabling AI assistants to read, search, and send iMessage and SMS messages via the Model Context Protocol. <details><summary>More about</summary>

  Developers building AI workflows on macOS can give their agents the ability to interact with iMessage and SMS, bridging local chat history with LLM context without manually exporting data.

  _We have finally solved the hardest problem in computer science: letting a Claude instance argue with your group chat via AppleScript while you grant it Full Disk Access and pray the MCP proxy stays up._

  `mcp` `macos` `imessage` `llm-integration` `python`
  </details>

- **[mcp-gdrive](https://github.com/isaacphi/mcp-gdrive)** `⭐ 274` `updated ≤1y` An MCP server that lets AI agents search, read, and write to Google Drive and Google Sheets via the Model Context Protocol. <details><summary>More about</summary>

  Developers can wire AI assistants into document-heavy workflows without building custom Google API integrations themselves.

  _Another indispensable glue layer that makes your AI slightly more useful while ensuring your OAuth consent screen knows more about your life than your therapist._

  `mcp` `google-drive` `google-sheets` `integrations`
  </details>

- **[rust-docs-mcp-server](https://github.com/govcraft/rust-docs-mcp-server)** `⭐ 273` `updated ≤180d` An MCP server that fetches current Rust crate documentation, generates embeddings, and provides an LLM-powered query tool to supply AI coding assistants with up-to-date API context. <details><summary>More about</summary>

  It prevents AI assistants from hallucinating imports and APIs by grounding their suggestions in the specific documentation of the crates you are actually using.

  _You now have to run and maintain a dedicated server just to teach your AI assistant that `tokio::fs` changed three months after its training cutoff._

  `mcp` `rust` `embeddings` `rag` `developer-tools`
  </details>

- **[elasticsearch-mcp-server](https://github.com/cr7258/elasticsearch-mcp-server)** `⭐ 271` `updated ≤30d` A Model Context Protocol (MCP) server that enables AI assistants to search documents, analyze indices, and manage Elasticsearch and OpenSearch clusters via a set of defined tools. <details><summary>More about</summary>

  It allows coding agents and IDEs to directly inspect, query, and manage search infrastructure without the developer switching context to a separate CLI or dashboard.

  _We've successfully abstracted the database so far away that we now need a dedicated protocol server just to ask an AI to run the curl commands we could have written ourselves._

  `mcp` `elasticsearch` `opensearch` `database` `infrastructure`
  </details>

- **[mcp-server-odoo](https://github.com/ivnvxd/mcp-server-odoo)** `⭐ 270` `updated ≤30d` An MCP server that lets AI assistants like Claude and Copilot securely read, create, update, and delete records in Odoo ERP instances via natural language. <details><summary>More about</summary>

  It bridges the gap between modern AI coding workflows and legacy ERP data, allowing developers to manage Odoo records directly from their IDE or chat interface without writing custom API glue code.

  _You can now ask your LLM to invoice a client while it simultaneously writes the feature that broke the checkout flow in the first place._

  `mcp` `odoo` `erp` `integration` `local-server`
  </details>

- **[tmux-mcp](https://github.com/nickgnd/tmux-mcp)** `⭐ 267` `updated ≤90d` A Model Context Protocol server that allows AI assistants like Claude Desktop to list, control, and execute commands inside tmux sessions and panes. <details><summary>More about</summary>

  It bridges terminal multiplexers with MCP clients, letting coding agents observe and manipulate long-running terminal workflows without leaving the chat interface.

  _We have finally achieved the inevitable endpoint of modern developer tooling: an AI agent running inside your terminal multiplexer so it can watch another AI agent generate code in a split pane._

  `mcp` `tmux` `terminal` `agent-integration`
  </details>

- **[osp_marketing_tools](https://github.com/open-strategy-partners/osp_marketing_tools)** `⭐ 264` `updated >1y` An MCP server that gives LLM clients access to Open Strategy Partners' product marketing methodologies, including value map generation, SEO metadata creation, and technical writing guidelines. <details><summary>More about</summary>

  It allows developers to apply structured marketing frameworks directly within their AI-assisted IDE or chat client, bridging the gap between technical implementation and product positioning.

  _Because nothing says 'agile engineering velocity' like installing a server specifically designed to help your LLM write taglines and meta descriptions for your side project._

  `mcp` `marketing` `llm-tools` `seo` `content-generation`
  </details>

- **[video-editing-mcp](https://github.com/burningion/video-editing-mcp)** `⭐ 263` `updated ≤1y` An MCP server that connects LLMs to Video Jungle, enabling video upload, search, and AI-generated edits through chat interfaces like Claude Desktop. <details><summary>More about</summary>

  It lets developers control video editing workflows and generative edits via natural language prompts instead of manual timeline manipulation.

  _We have finally achieved the singular goal of modern AI tooling: making a developer's IDE the only interface needed to cut skateboard footage._

  `mcp` `video-editing` `multimodal` `claude-desktop`
  </details>

- **[mcp-ragdocs](https://github.com/hannesrudolph/mcp-ragdocs)** `⭐ 260` `updated ≤1y` An MCP server that indexes documentation sources into a Qdrant vector database and exposes semantic search tools for AI assistants to retrieve relevant context. <details><summary>More about</summary>

  It allows developers to ground local AI assistants in specific documentation sets, reducing hallucinations and manual doc lookups during coding sessions.

  _Finally, a production-grade way to give your coding agent the permanent existential crisis of searching through 40 versions of your own outdated README._

  `mcp` `rag` `vector-search` `documentation` `context`
  </details>

- **[MCP-Chatbot](https://github.com/3choff/mcp-chatbot)** `⭐ 248` `updated >1y` A simple CLI chatbot example demonstrating how to integrate the Model Context Protocol (MCP) with any OpenAI API-compatible LLM provider. <details><summary>More about</summary>

  It provides a minimal, working reference implementation for developers looking to understand how to wire MCP servers into a client-side chat loop.

  _Another heroic open-source effort to build a chatbot that will be obsoleted by a new MCP feature release roughly three hours after it was pushed._

  `chatbot` `cli` `example` `mcp` `python`
  </details>

- **[firebase-mcp](https://github.com/gannonh/firebase-mcp)** `⭐ 244` `updated ≤1y` An MCP server that exposes Firebase services including Firestore, Storage, and Authentication to AI assistants like Claude Desktop, Cursor, and VS Code. <details><summary>More about</summary>

  It lets AI coding agents directly read and write Firebase data without developers manually bridging the gap between chat windows and cloud infrastructure.

  _You've successfully automated the part of your job where you stare at the Firebase console, but you still have to debug why the MCP SDK is throwing validation errors about booleans that don't exist._

  `mcp` `firebase` `ai-integration` `backend`
  </details>

- **[smart-tree](https://github.com/8b-is/smart-tree)** `⭐ 242` `updated ≤30d` A blazingly fast, Rust-based directory visualization tool that provides 30+ MCP tools for AI assistants to understand, search, and compress codebase context. <details><summary>More about</summary>

  It gives coding agents a high-speed way to map project structure and persist memory, aiming to slash token usage while making AI assistants appear more competent at codebase navigation.

  _Now your AI assistant can have an existential crisis about your directory structure 24 times faster than before, while scanning for imaginary supply chain attacks._

  `mcp` `context-engineering` `cli` `rust` `developer-tooling`
  </details>

- **[figma-flutter-mcp](https://github.com/mhmzdev/figma-flutter-mcp)** `⭐ 236` `updated ≤90d` An MCP server that extracts Figma design data, components, and screen metadata to help coding agents generate Flutter implementations. <details><summary>More about</summary>

  It bridges the gap between Figma design files and Flutter development by giving AI coding agents structured design context instead of raw screenshots.

  _We have successfully abstracted away the pain of hand-writing Flutter UI by adding a specialized MCP server that requires its own API key, configuration JSON, and a live Cursor window to interpret the design tokens we used to copy-paste._

  `mcp` `flutter` `figma` `design-to-code` `cursor`
  </details>

- **[MCP-Connect](https://github.com/evalsone/mcp-connect)** `⭐ 236` `updated ≤90d` A lightweight HTTP gateway that exposes local stdio-based MCP servers as Streamable HTTP or request/response endpoints for remote AI tools. <details><summary>More about</summary>

  It lets cloud-based AI services securely call local MCP servers over HTTP, bridging local tooling with remote agents without rewriting servers.

  _We have invented a protocol to tunnel a protocol so that a cloud agent can pretend your laptop is its USB peripheral._

  `gateway` `http-bridge` `local-ai` `mcp` `stdio`
  </details>

- **[metatrader-mcp-server](https://github.com/ariadng/metatrader-mcp-server)** `⭐ 236` `updated ≤90d` An MCP server that bridges AI assistants like Claude and ChatGPT to the MetaTrader 5 trading platform, enabling natural language execution of trades and market data queries. <details><summary>More about</summary>

  It allows developers building trading bots or analysis tools to leverage existing AI assistants for natural language control over MT5 accounts and real-time market data.

  _We have finally unlocked the ability to YOLO a leveraged EUR/USD position via a hallucination in a Claude Desktop chat window._

  `mcp` `trading` `finance` `metatrader` `ai-assistant`
  </details>

- **[mcp-twikit](https://github.com/adhikasp/mcp-twikit)** `⭐ 231` `updated >1y` An MCP server that lets LLM clients interact with Twitter via the Twikit library, enabling timeline retrieval and tweet search directly from coding assistants. <details><summary>More about</summary>

  Developers can wire Twitter data into their local AI workflows without building custom API integrations, making social sentiment and real-time updates first-class context for coding agents.

  _We have finally solved the hardest problem in computer science: letting a Claude instance automatically discover just how much everyone hates their ISP while you pretend to review a pull request._

  `mcp` `twitter` `llm-integration` `social-media`
  </details>

- **[mcp-echarts](https://github.com/hustcc/mcp-echarts)** `⭐ 227` `updated ≤180d` An MCP server that allows AI models and clients to generate Apache ECharts visualizations locally and export them to PNG, SVG, or JSON formats. <details><summary>More about</summary>

  It gives coding agents and MCP-compatible IDEs the ability to render data visualizations on the fly without relying on external SaaS charting APIs.

  _We have successfully modularized the stack so that an AI can now hallucinate a pie chart with the same confidence it hallucinates your backend logic._

  `mcp` `echarts` `data-visualization` `nodejs`
  </details>

- **[mcp-server-commands](https://github.com/g0t4/mcp-server-commands)** `⭐ 224` `updated ≤30d` A Model Context Protocol server that exposes a `runProcess` tool, allowing LLMs to execute shell commands and scripts directly on the host machine. <details><summary>More about</summary>

  It gives coding agents the ability to interact with the local environment, run scripts, and inspect system state via standard MCP clients like Claude Desktop or Zed.

  _We have finally closed the loop: the AI can now run `rm -rf` on the very machine you are using to supervise it, provided you click 'Approve Once' with blind faith._

  `mcp` `cli` `tooling` `local-ai`
  </details>

- **[sage](https://github.com/l33tdawg/sage)** `⭐ 217` `updated ≤30d` SAGE is a persistent, consensus-validated memory infrastructure for AI agents that uses Byzantine Fault Tolerant (BFT) consensus to store, validate, and manage institutional memory across conversations. <details><summary>More about</summary>

  It provides developers building multi-agent systems with a durable memory layer that prevents hallucinations and conflicting states through distributed consensus rather than simple vector storage.

  _Finally, your AI agents can suffer from the same bureaucratic memory failures as human institutions, now with cryptographic signatures and quorum votes to validate every fleeting thought._

  `agent-memory` `mcp` `distributed-systems` `bft-consensus`
  </details>

- **[mcp-server-gsc](https://github.com/ahonn/mcp-server-gsc)** `⭐ 215` `updated ≤90d` A Model Context Protocol (MCP) server that provides AI assistants with programmatic access to Google Search Console performance data, filtering, and optimization insights. <details><summary>More about</summary>

  It allows developers to query SEO performance, detect optimization opportunities, and analyze search traffic directly through their AI coding assistant rather than switching to the Search Console UI.

  _We have successfully automated the process of wondering why our traffic dropped, sparing us the burden of actually opening the browser tab to find out._

  `mcp` `google-search-console` `seo` `analytics` `nodejs`
  </details>

- **[plane-mcp-server](https://github.com/makeplane/plane-mcp-server)** `⭐ 212` `updated ≤30d` The official Model Context Protocol server for Plane, enabling AI agents to interact with Plane's project management APIs via stdio, SSE, and HTTP transports. <details><summary>More about</summary>

  It lets developers connect coding agents directly to their Plane workspace to read and manipulate issues, cycles, and modules without leaving the agent context.

  _We have finally achieved the platonic ideal of modern productivity: an integration layer that lets your AI agent update a ticket in a tool you were already ignoring._

  `mcp` `plane` `project-management` `integration`
  </details>

- **[bifrostmcp](https://github.com/biegehydra/bifrostmcp)** `⭐ 210` `updated ≤90d` A VSCode extension that runs a local MCP server, exposing semantic language features like find references and rename to MCP-compatible AI coding assistants. <details><summary>More about</summary>

  It lets AI agents understand your actual codebase semantics via the language server, rather than blindly guessing symbol relationships in a vacuum.

  _We have officially reached the stage where we need a protocol server just to teach the AI that renaming a variable should probably not break the entire codebase._

  `mcp` `vscode` `language-server` `cursor` `cline`
  </details>

- **[k8s-mcp-server](https://github.com/alexei-led/k8s-mcp-server)** `⭐ 208` `updated ≤90d` A Docker-based Model Context Protocol server that allows AI assistants like Claude to securely execute Kubernetes CLI tools (kubectl, helm, istioctl, argocd) against a cluster. <details><summary>More about</summary>

  It lets developers offload cluster management, troubleshooting, and deployment tasks to an AI assistant directly from their chat interface.

  _We have finally bridged the gap between 'vibe coding' and 'vibe kubectl-ing' your production database into oblivion._

  `mcp` `kubernetes` `devops` `claude` `cli`
  </details>

- **[notion_mcp](https://github.com/danhilse/notion_mcp)** `⭐ 206` `updated >1y` A minimalist Model Context Protocol server that lets Claude read and manage a personal Notion todo list with a fixed three-property database schema. <details><summary>More about</summary>

  It demonstrates how quickly developers can build custom MCP servers to hook personal workflows into Claude Desktop using the Notion API.

  _We have reached the point where we need a specialized protocol server, a local Python environment, and an API integration just to ask an AI to check off a checkbox in a todo list._

  `mcp` `notion` `claude` `todo` `python`
  </details>

- **[opik-mcp](https://github.com/comet-ml/opik-mcp)** `⭐ 202` `updated ≤90d` An MCP server that exposes Opik's prompt management, trace exploration, and metrics tooling directly to IDEs and AI coding agents via stdio and streamable-http transports. <details><summary>More about</summary>

  It lets developers inspect, manage, and analyze LLM traces and prompts without leaving their IDE or agent workflow, tightening the debug loop for AI-powered features.

  _Another essential integration that ensures your AI assistant can now help you debug the AI assistant you built to help you debug your code._

  `mcp` `observability` `ide-integration` `opik` `typescript`
  </details>

- **[MongoDB Lens](https://github.com/furey/mongodb-lens)** `⭐ 201` `updated >1y` A local Model Context Protocol (MCP) server that enables LLMs and MCP clients like Claude Desktop or Cursor to interact with MongoDB databases using natural language for queries, aggregations, and schema analysis. <details><summary>More about</summary>

  It allows developers to inspect, query, and optimize MongoDB databases directly through their AI assistant rather than switching contexts to a database shell or admin UI.

  _Finally, a way to write aggregation pipelines using the same confident-but-wrong natural language that your coding agent uses to write the application code consuming them._

  `database` `developer-tools` `llm-integration` `mcp` `mongodb`
  </details>

- **[markmap-mcp-server](https://github.com/jinzcdev/markmap-mcp-server)** `⭐ 198` `updated ≤90d` An MCP server that converts Markdown text into interactive mind maps and exports them as PNG, JPG, or SVG images. <details><summary>More about</summary>

  Developers can hand off Markdown-based specs, docs, or brain dumps to an LLM and get back a navigable mind map with zero manual diagramming.

  _We have successfully automated the part of the job where you stare at a blank page and wonder if your thoughts are best expressed as a tree._

  `mcp` `mindmap` `markdown` `visualization` `nodejs`
  </details>

- **[jetbrains-index-mcp-plugin](https://github.com/hechtcarmel/jetbrains-index-mcp-plugin)** `⭐ 192` `updated ≤30d` A JetBrains IDE plugin that runs an MCP server inside the IDE, exposing IntelliJ's code indexing, reference resolution, and refactoring capabilities to external AI coding assistants. <details><summary>More about</summary>

  It gives AI agents semantic understanding of large codebases through the IDE's native AST and index, enabling safer refactors and more accurate cross-file navigation than text-based analysis alone.

  _We've reached the point where the IDE needs a plugin so the AI can understand the code that the IDE already understands, effectively turning your development environment into a middleman API for your chatbot._

  `jetbrains` `mcp` `indexing` `refactoring` `ide-integration`
  </details>

- **[mcp-simple-arxiv](https://github.com/andybrandt/mcp-simple-arxiv)** `⭐ 191` `updated ≤90d` An MCP server that connects LLM clients like Claude Desktop to the arXiv API, enabling search, metadata retrieval, and full paper text extraction. <details><summary>More about</summary>

  It allows developers to query and read cutting-edge research papers directly within their AI chat workflow without switching to a browser.

  _Finally, an MCP server to ensure your LLM can summarize the paper you bookmarked three months ago and definitely read._

  `mcp` `arxiv` `research` `llm-integration`
  </details>

- **[GistPad-MCP](https://github.com/lostintangent/gistpad-mcp)** `⭐ 189` `updated ≤180d` An MCP server that lets AI assistants manage personal knowledge, daily notes, and reusable prompts via GitHub Gists. <details><summary>More about</summary>

  It connects your existing gist-based PKM workflow to any MCP-enabled AI client, letting Copilot or Claude read, edit, and organize notes without leaving the chat.

  _You now have an AI agent managing your gists so you can finally stop pretending you will manually maintain a second brain that you only open when you panic._

  `gists` `mcp` `notes` `pkm`
  </details>

- **[agent-toolkit](https://github.com/paypal/agent-toolkit)** `⭐ 188` `updated ≤180d` A TypeScript toolkit and MCP server from PayPal that exposes commerce APIs as function-calling tools for AI agents and frameworks like OpenAI, LangChain, Vercel AI SDK, and MCP. <details><summary>More about</summary>

  Developers building AI agents that need to create orders, manage invoices, handle subscriptions, or process refunds can wire PayPal into their agent workflows without manually wrapping every API endpoint.

  _We have officially reached the point where even a payment provider ships its own agent toolkit, because apparently the only thing more terrifying than payments code is payments code being written autonomously by an LLM at 3am._

  `paypal` `mcp` `agent-toolkit` `typescript` `function-calling`
  </details>

- **[open-streetmap-mcp](https://github.com/jagan-shanmugam/open-streetmap-mcp)** `⭐ 188` `updated ≤1y` An MCP server that exposes OpenStreetMap geospatial tools—geocoding, routing, POI search, and neighborhood analysis—to LLMs via the Model Context Protocol. <details><summary>More about</summary>

  It lets developer-hosted AI assistants tap into live OSM data for location-aware features without wiring up custom geospatial APIs.

  _Now your coding agent can argue about the optimal meeting point for three people in San Francisco before it even suggests a variable name._

  `mcp` `openstreetmap` `geospatial` `location-services`
  </details>

- **[meilisearch-mcp](https://github.com/meilisearch/meilisearch-mcp)** `⭐ 185` `updated ≤180d` An official Model Context Protocol server that enables LLMs and AI agents to manage indices, documents, and settings in a Meilisearch instance via natural language. <details><summary>More about</summary>

  It allows developers to wire fast, conversational search management into any MCP-compatible client without writing custom API integration code.

  _We have successfully abstracted away the need to read API docs, meaning you can now misconfigure your search indices conversationally at the speed of tokens._

  `mcp` `search` `meilisearch` `agent-tooling`
  </details>

- **[openapi-mcp](https://github.com/ckanthony/openapi-mcp)** `⭐ 185` `updated ≤90d` A Dockerized MCP server that reads OpenAPI/Swagger specifications and automatically generates MCP tool definitions, allowing AI agents like Cursor to interact with any documented API. <details><summary>More about</summary>

  Developers can instantly give their AI coding agents the ability to call proprietary or third-party APIs by simply pointing this server at an existing spec file, without writing custom integration code.

  _We have reached the point where we are building middleware to translate the middleware that translates our APIs, so the AI can pretend it knows how to use the middleware._

  `mcp` `openapi` `docker` `integration` `api`
  </details>

- **[playwright-plus-python-mcp](https://github.com/blackwhite084/playwright-plus-python-mcp)** `⭐ 185` `updated >1y` A Model Context Protocol server that exposes Playwright browser automation tools—navigation, screenshots, clicks, form fills, and evaluation—to AI assistants like Claude Desktop. <details><summary>More about</summary>

  It lets AI agents control a real browser via MCP, enabling automated testing, scraping, and UI interaction workflows without custom glue code.

  _We have successfully abstracted the browser so that the AI can now click buttons on our behalf while we debug why the AI clicked the wrong button._

  `mcp` `playwright` `browser-automation` `python`
  </details>

- **[Armor Crypto MCP](https://github.com/armorwallet/armor-crypto-mcp)** `⭐ 183` `updated ≤1y` An MCP server that connects AI agents to cryptocurrency ecosystems for wallet management, swaps, staking, and automated trading strategies like DCA and stop-loss. <details><summary>More about</summary>

  Developers building crypto-native AI agents can integrate multi-chain wallet operations and trading logic through a single standardized MCP interface instead of wiring individual blockchain APIs.

  _Your AI agent can now panic-sell your Solana bags at 3 AM based on social sentiment analysis, and it's technically an MCP-compliant architecture._

  `agent-tools` `blockchain` `crypto` `mcp` `trading`
  </details>

- **[aws-mcp-server](https://github.com/alexei-led/aws-mcp-server)** `⭐ 182` `updated ≤90d` A lightweight MCP server that enables AI assistants like Claude and Cursor to execute AWS CLI commands in a containerized environment for cloud infrastructure management. <details><summary>More about</summary>

  It gives developers a standard Model Context Protocol bridge to let their AI tooling safely interact with all 200+ AWS services via the CLI without wrapping individual APIs.

  _We have finally abstracted the cloud so thoroughly that we now need a protocol server just to let our chatbot run the CLI we could have typed into ourselves._

  `mcp` `aws` `devops` `infrastructure` `cli`
  </details>

- **[comfy-pilot](https://github.com/constantineb6/comfy-pilot)** `⭐ 182` `updated ≤90d` An MCP server and embedded terminal that lets Claude Code directly view, edit, and execute ComfyUI image-generation workflows from inside the ComfyUI interface. <details><summary>More about</summary>

  It lets developers describe ComfyUI workflow changes in natural language and have Claude Code handle node creation, connections, model downloads, and image inspection automatically.

  _You can now debug your spaghetti node graphs by arguing with an LLM that is also debugging your spaghetti node graphs, all inside a terminal floating over your spaghetti node graphs._

  `mcp` `comfyui` `claude-code` `workflow-automation` `generative-ai`
  </details>

- **[mcp-snowflake-server](https://github.com/isaacwasserman/mcp-snowflake-server)** `⭐ 182` `updated ≤1y` A Model Context Protocol server that enables AI assistants like Claude to interact with Snowflake databases by executing SQL queries and exposing schema context as resources. <details><summary>More about</summary>

  It allows developers to query and analyze Snowflake data directly through their AI assistant, bridging the gap between conversational agents and enterprise data warehouses.

  _We have successfully abstracted SQL behind natural language, meaning your AI can now run a DELETE statement on production while confidently explaining why it was the right thing to do._

  `mcp` `snowflake` `database` `sql` `data-warehouse`
  </details>

- **[mux-node-sdk](https://github.com/muxinc/mux-node-sdk)** `⭐ 179` `updated ≤30d` Official Mux API wrapper for Node.js and TypeScript, now shipping an MCP server that lets AI assistants explore endpoints, make test requests, and use documentation to integrate video streaming and analytics capabilities. <details><summary>More about</summary>

  Developers can wire Mux video, analytics, and webhook flows directly into AI-assisted workflows without hand-cranking API boilerplate or hunting through docs.

  _We have successfully abstracted the abstraction, so your coding agent can now debug your video streaming integration by talking to an API wrapper that talks to an API._

  `mux` `mcp` `node` `video` `sdk`
  </details>

- **[Gru Sandbox](https://github.com/babelcloud/gbox)** `⭐ 174` `updated ≤90d` A CLI and MCP server that provides AI agents with sandboxed environments to operate Android devices, Linux desktops, and browsers. <details><summary>More about</summary>

  It allows coding agents like Claude Code and Cursor to move beyond text generation and directly interact with mobile and desktop UIs to develop, test, and automate tasks.

  _Your agent can now argue that it couldn't fix the bug because the Android emulator was feeling a bit laggy today._

  `agent-infrastructure` `agent-sandbox` `android` `android-automation` `automation` `desktop-automation` `device-control` `mcp` `sandbox`
  </details>

- **[mcp-server-duckdb](https://github.com/ktanaka101/mcp-server-duckdb)** `⭐ 174` `updated >1y` A Model Context Protocol server that exposes DuckDB database operations through a unified SQL query tool for LLM integration. <details><summary>More about</summary>

  It lets developers connect local analytical databases directly to MCP-compatible assistants, enabling natural language querying of structured data without building custom connectors.

  _We have successfully abstracted the database so that the LLM can now run unoptimized ad-hoc analytical queries on your local machine with nothing but a text prompt and a dream._

  `mcp` `duckdb` `database` `local-ai`
  </details>

- **[search1api-mcp](https://github.com/fatwang2/search1api-mcp)** `⭐ 172` `updated ≤90d` An official MCP server for Search1API that exposes web search, news, crawling, trending topics, and reasoning tools to MCP-compatible clients like Claude, Cursor, and VS Code. <details><summary>More about</summary>

  It gives coding agents and IDEs a unified, drop-in interface to query multiple search providers, crawl pages, and pull trending developer content without wiring separate APIs.

  _We have successfully abstracted the act of Googling into a protocol, so your agent can now burn tokens to rediscover Stack Overflow on your behalf._

  `mcp` `search` `tooling` `ide-integration`
  </details>

- **[cli-mcp-server](https://github.com/mladensu/cli-mcp-server)** `⭐ 169` `updated ≤1y` A secure MCP server that executes whitelisted command-line commands with configurable security policies, path validation, and execution controls for LLM applications. <details><summary>More about</summary>

  It gives LLM agents a controlled gateway to run shell commands without handing over the keys to your entire filesystem.

  _We have finally reached the point where we need a security policy to manage the security policies that guard our AI's access to `ls`._

  `mcp` `cli` `security` `server`
  </details>

- **[mcp](https://github.com/mariadb/mcp)** `⭐ 167` `updated ≤90d` A Model Context Protocol server that exposes MariaDB databases as tools for AI assistants, supporting standard SQL queries and vector/embedding search. <details><summary>More about</summary>

  It allows AI coding agents and assistants to directly inspect schemas and query live MariaDB data, bridging the gap between LLM context and relational or vector databases.

  _Another essential piece of infrastructure so your AI can finally hallucinate SQL queries against a database it can now actually see._

  `mcp` `database` `vector-search` `ai-integration`
  </details>

- **[in-memoria](https://github.com/pi22by7/in-memoria)** `⭐ 166` `updated ≤180d` An MCP server that analyzes a codebase to build persistent memory of patterns, architecture, and conventions, allowing AI coding assistants to query this context across sessions. <details><summary>More about</summary>

  It eliminates the repetitive context-rebuilding loop in AI-assisted development by giving tools like Claude and Copilot a persistent understanding of your project's specific style and structure.

  _We have successfully engineered a solution to the problem of explaining our own codebases to the AI that constantly forgets we don't use classes._

  `mcp-server` `memory` `context` `local-first` `codebase-intelligence`
  </details>

- **[mcp-server-langfuse](https://github.com/langfuse/mcp-server-langfuse)** `⭐ 166` `updated >1y` An MCP server that exposes Langfuse prompt management capabilities—listing, retrieving, and compiling prompts—to MCP-compatible clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It lets developers centralize and version prompts in Langfuse while making them directly available inside their AI-assisted IDEs and chat workflows via the Model Context Protocol.

  _Yet another layer of infrastructure so your AI can finally fetch the prompt template that describes how to write the prompt for the AI._

  `mcp` `prompt-management` `langfuse` `llmops`
  </details>

- **[bilibili-mcp-js](https://github.com/34892002/bilibili-mcp-js)** `⭐ 165` `updated ≤90d` A Model Context Protocol (MCP) server that allows AI applications to search Bilibili videos, retrieve hot content, fetch video details, and access UP主 (uploader) information. <details><summary>More about</summary>

  It connects local AI agents and tools like Trae or LangChain directly to Bilibili's video ecosystem, enabling richer context retrieval for Chinese-language content workflows.

  _We have successfully built a standardized protocol to ask an AI agent to summarize a 10-minute video essay on why standardizing protocols is taking over our lives._

  `mcp` `bilibili` `context-retrieval` `nodejs`
  </details>

- **[mcp-simple-pubmed](https://github.com/andybrandt/mcp-simple-pubmed)** `⭐ 164` `updated ≤90d` An MCP server that provides AI assistants with tools to search PubMed, retrieve abstracts, and download full-text open access articles via the NCBI Entrez API. <details><summary>More about</summary>

  It allows coding agents and AI workflows to programmatically query medical literature and incorporate research papers directly into development tasks without leaving the IDE.

  _Finally, an automated way to hallucinate citations from medical journals faster than a tired resident on a 24-hour shift._

  `mcp` `pubmed` `research` `medical` `ai-tooling`
  </details>

- **[isaac-sim-mcp](https://github.com/omni-mcp/isaac-sim-mcp)** `⭐ 161` `updated >1y` An MCP server and extension that enables natural language control of NVIDIA Isaac Sim to manipulate robots, lighting, and scenes through AI coding assistants like Cursor. <details><summary>More about</summary>

  It lets robotics developers use conversational prompts to set up complex Isaac Sim environments and robot simulations instead of manually writing USD scene code.

  _Now your robot can misunderstand your instructions in natural language before it inevitably drives itself off a virtual cliff._

  `mcp` `robotics` `simulation` `nvidia` `cursor`
  </details>

- **[mcp-rubber-duck](https://github.com/nesquikm/mcp-rubber-duck)** `⭐ 161` `updated ≤30d` An MCP server that bridges multiple OpenAI-compatible LLMs and CLI coding agents to provide multi-perspective debugging, consensus voting, and debate workflows for developers. <details><summary>More about</summary>

  It lets developers orchestrate responses from multiple AI models and coding agents simultaneously, adding consensus checks and structured debates directly into their existing MCP-compatible IDE or CLI workflow.

  _You now have an entire council of rubber ducks arguing about your bug, complete with voting, debates, and confidence scores, proving that even when you outsource thinking to AI, consensus-building remains a chore._

  `mcp` `multi-llm` `debugging` `orchestration` `cli`
  </details>

- **[mcp-summarizer](https://github.com/0xshellming/mcp-summarizer)** `⭐ 161` `updated >1y` An MCP server that provides content summarization capabilities for text, web pages, PDF documents, and EPUB books using Google's Gemini 1.5 Pro model. <details><summary>More about</summary>

  It allows developers to wire AI-powered content summarization directly into MCP-compatible IDEs and agents, reducing context-switching when digesting technical documentation or long-form content.

  _Because nothing says 'efficient learning' like installing a local server to summarize a README that you could have read in the time it took to configure the server._

  `mcp` `summarization` `gemini` `context-engineering`
  </details>

- **[Svelte Documentation](https://github.com/khromov/svelte-llm-mcp)** `⭐ 159` `updated ≤90d` An MCP server and llms.txt resource that provides AI assistants with structured access to Svelte 5 and SvelteKit documentation. <details><summary>More about</summary>

  It allows coding agents and LLMs to retrieve accurate, versioned framework context on demand instead of hallucinating deprecated Svelte APIs.

  _We have successfully abstracted reading the documentation into a protocol that requires a dedicated server to avoid reading the documentation._

  `context-engineering` `documentation` `llms-txt` `mcp` `svelte`
  </details>

- **[aseprite-mcp](https://github.com/diivi/aseprite-mcp)** `⭐ 158` `updated ≤30d` An MCP server that exposes the Aseprite pixel art API to AI coding assistants, allowing them to create and manipulate sprites directly within the editor. <details><summary>More about</summary>

  It bridges the gap between AI code generation and creative asset workflows, letting developers automate sprite creation and modification through natural language prompts in their IDE.

  _We have finally solved the hardest problem in computer science: getting a $20/month subscription to prompt a cloud while a Docker container installs Steam to draw a pixelated mushroom._

  `mcp` `aseprite` `pixel-art` `integration`
  </details>

- **[mcp-zotero](https://github.com/kaliaboi/mcp-zotero)** `⭐ 158` `updated >1y` An MCP server that connects Claude Desktop to a user's Zotero Cloud library, enabling the assistant to search, browse collections, and retrieve paper details. <details><summary>More about</summary>

  It allows developers to query and reference their research library directly within their AI assistant workflow without manually copying citation metadata.

  _We have successfully automated the last remaining excuse for not reading the papers in our Zotero libraries._

  `mcp` `zotero` `claude` `research` `knowledge-management`
  </details>

- **[mcp-mysql-server](https://github.com/f4ww4z/mcp-mysql-server)** `⭐ 157` `updated ≤180d` A Model Context Protocol server that exposes MySQL database operations to AI models and agents through a standardized interface. <details><summary>More about</summary>

  It allows coding agents and AI assistants to directly query, modify, and inspect MySQL databases without custom glue code or fragile SQL generation wrappers.

  _Yet another MCP server appears in the night, promising your agent will finally understand your schema, though it will still probably drop the users table at 4 PM on a Friday._

  `mcp` `mysql` `database` `integration`
  </details>

- **[alibabacloud-tablestore-mcp-server](https://github.com/aliyun/alibabacloud-tablestore-mcp-server)** `⭐ 156` `updated ≤90d` An official Model Context Protocol server implementation for Alibaba Cloud Tablestore, available in Java and Python, providing RAG and memory capabilities for AI agents. <details><summary>More about</summary>

  It allows developers building on Alibaba Cloud to easily wire Tablestore into MCP-compatible agent workflows for knowledge bases, RAG systems, and persistent memory.

  _Just what the ecosystem needed: another vendor-specific MCP server to add to the pile, ensuring your agent stack remains a distributed Lego set held together by fragile JSON configs._

  `mcp` `alibaba-cloud` `tablestore` `java` `python`
  </details>

- **[make-mcp-server](https://github.com/integromat/make-mcp-server)** `⭐ 156` `updated ≤30d` A Model Context Protocol server that exposes Make automation scenarios as callable tools for AI assistants like Claude Desktop. <details><summary>More about</summary>

  It allows developers to bridge the gap between conversational AI agents and complex, existing workflow automations without rewriting logic.

  _You can now invoke a visual automation scenario from a chat window, ensuring your 'agentic' workflow is technically correct but spiritually impossible to debug._

  `automation` `integration` `integrations` `make` `mcp` `no-code` `workflows`
  </details>

- **[comet-mcp](https://github.com/hanzili/comet-mcp)** `⭐ 153` `updated ≤180d` An MCP server that connects Claude Code to the Perplexity Comet browser, delegating web research and browsing tasks to a separate agent while keeping the coding assistant focused on code. <details><summary>More about</summary>

  It lets developers hand off deep research, login flows, and dynamic site interaction to a dedicated browsing agent without bloating the coding model's context window.

  _We have now reached the point where your coding assistant hires a browsing assistant so it doesn't have to think about the web while it thinks about your code._

  `mcp` `browser-automation` `agentic-ai` `claude-code`
  </details>

- **[openclaw-mcp](https://github.com/freema/openclaw-mcp)** `⭐ 153` `updated ≤30d` An MCP server that securely bridges Claude.ai to a self-hosted OpenClaw assistant, allowing the web UI to delegate tasks to a local AI agent via OAuth2. <details><summary>More about</summary>

  It lets developers connect cloud-hosted Claude to their local, self-hosted agent stack, enabling remote orchestration of long-running OpenClaw tasks directly from the web UI.

  _We have now reached the architectural pinnacle of 2026: running a server so your web chatbot can proxy commands to your local chatbot, which might itself spawn a coding agent to fix the YAML you just broke._

  `mcp` `openclaw` `oauth2` `bridge` `self-hosted`
  </details>

- **[mcp-confluent](https://github.com/confluentinc/mcp-confluent)** `⭐ 152` `updated ≤30d` An MCP server that exposes 50+ Confluent Cloud and Confluent Local tools—covering Kafka, Flink SQL, Schema Registry, Connectors, and Tableflow—to MCP-compatible AI clients like Claude, Cursor, and VS Code. <details><summary>More about</summary>

  It lets developers manage streaming infrastructure, inspect schemas, and run Flink SQL through natural-language conversations inside their existing AI-assisted editor or CLI workflows.

  _You can now troubleshoot a misbehaving Kafka topic by arguing with your IDE instead of the CLI, which at least makes the confusion feel more interactive._

  `mcp` `confluent` `kafka` `flink` `infrastructure`
  </details>

- **[node-code-sandbox-mcp](https://github.com/alfonsograziano/node-code-sandbox-mcp)** `⭐ 152` `updated ≤180d` A Node.js-based Model Context Protocol server that spins up disposable Docker containers to execute arbitrary JavaScript with on-the-fly npm dependency installation. <details><summary>More about</summary>

  It allows AI agents and IDEs to safely run untrusted JavaScript code and install packages in isolated environments without polluting the host machine.

  _We have now successfully abstracted running code so far away from the developer that the code lives, breathes, and dies in a Docker container summoned by a protocol server invoked by an AI._

  `mcp` `sandbox` `nodejs` `docker` `code-execution`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[dash-mcp-server](https://github.com/kapeli/dash-mcp-server)** `⭐ 150` `updated ≤90d` An MCP server that exposes the Dash macOS documentation browser's installed docsets, search, and full-text search capabilities to MCP-compatible AI clients. <details><summary>More about</summary>

  It lets developers query offline API documentation directly from their AI coding assistant instead of interrupting the flow to open a separate browser window.

  _We have successfully built a bridge to let an LLM ask your local docs app to explain the API you could have just read yourself in that same docs app._

  `mcp` `documentation` `macos` `dash` `developer-tools`
  </details>

- **[opendatamcp](https://github.com/opendatamcp/opendatamcp)** `⭐ 150` `updated >1y` A CLI tool and community registry that wraps public open datasets into Model Context Protocol servers so LLMs can query them directly. <details><summary>More about</summary>

  Developers can give their LLM apps instant access to public data sources like transit APIs without writing custom integration layers.

  _We have successfully reached the point where connecting Swiss train delays to your chatbot requires its own protocol, CLI, and contributor guidelines._

  `mcp` `open-data` `llm-integration` `cli`
  </details>

- **[web3-research-mcp](https://github.com/aaronjmars/web3-research-mcp)** `⭐ 150` `updated ≤30d` An MCP server that performs deep research on cryptocurrency tokens by aggregating live data from CoinGecko, DeFiLlama, and web searches into structured reports for AI assistants. <details><summary>More about</summary>

  It allows developers building crypto tools to delegate multi-source token research and data aggregation directly to their local AI agent workflows without writing custom scrapers.

  _We have successfully built a local, autonomous researcher to tell us which memecoin is currently winning, ensuring we never have to form our own opinions about financial instruments again._

  `mcp` `crypto` `web3` `research` `local-first`
  </details>

- **[zettelkasten-mcp](https://github.com/entanglr/zettelkasten-mcp)** `⭐ 150` `updated >1y` An MCP server that implements the Zettelkasten methodology, allowing AI clients like Claude to create, link, and synthesize atomic notes into a knowledge graph. <details><summary>More about</summary>

  It gives developers a structured way to build a persistent, queryable knowledge base through AI chat, bridging the gap between note-taking and agentic workflows.

  _Now you can automate the creation of an incomprehensible web of atomic thoughts, ensuring your second brain is just as fragmented and anxious as the first one._

  `mcp` `knowledge-management` `zettelkasten` `python`
  </details>

- **[mcp-server-calculator](https://github.com/githejie/mcp-server-calculator)** `⭐ 149` `updated ≤1y` A Model Context Protocol server that exposes a calculator tool, allowing LLMs to perform precise numerical evaluations via a defined expression interface. <details><summary>More about</summary>

  It plugs into MCP-compatible clients to offload math from probabilistic LLM token generation to deterministic calculation, improving reliability in agentic workflows.

  _We have successfully abstracted basic arithmetic into a networked microservice with a protocol specification, because apparently trusting the model with 2 + 2 is the real risk._

  `mcp` `tooling` `calculator` `server`
  </details>

- **[postman-mcp-server](https://github.com/delano/postman-mcp-server)** `⭐ 148` `updated ≤90d` An MCP server that exposes the Postman API as tools, allowing AI assistants like Claude and Cline to manage collections, environments, and APIs programmatically. <details><summary>More about</summary>

  It allows developers to automate Postman workspace management—such as forking collections and managing environments—directly through natural language conversations with their coding agents.

  _We have successfully reached the point where an AI writes a server so another AI can authenticate to a cloud dashboard to organize the JSON files that the first AI generated._

  `mcp` `postman` `api-testing` `cline` `anthropic`
  </details>

- **[esp-mcp](https://github.com/horw/esp-mcp)** `⭐ 147` `updated ≤180d` An MCP server that centralizes ESP-IDF commands to let LLMs install toolchains, build, flash, and test ESP32 firmware through natural language. <details><summary>More about</summary>

  It lets embedded developers drive the full ESP32 workflow—from project creation to flashing—through an LLM instead of memorizing idf.py incantations.

  _We have officially reached the point where even your microcontroller toolchain needs a chatbot intermediary to remember how to run install.sh._

  `mcp` `esp32` `embedded` `esp-idf`
  </details>

- **[mcp-read-website-fast](https://github.com/just-every/mcp-read-website-fast)** `⭐ 147` `updated ≤30d` An MCP server that fetches web pages, strips noise using Mozilla Readability, and converts content to clean Markdown for token-efficient consumption by AI agents. <details><summary>More about</summary>

  It integrates directly into Claude Code, VS Code, Cursor, and JetBrains IDEs to give coding agents fast, low-token access to web documentation and context without the bloat of raw HTML.

  _We have finally invented a way to turn an entire documentation site into markdown so your agent can hallucinate from it using fewer tokens._

  `mcp` `web-scraping` `markdown` `context-engineering`
  </details>

- **[mcp-server-atlassian-bitbucket](https://github.com/aashari/mcp-server-atlassian-bitbucket)** `⭐ 146` `updated ≤90d` A Node.js/TypeScript MCP server that lets AI assistants like Claude and Cursor read repositories, manage pull requests, and search code in Atlassian Bitbucket Cloud. <details><summary>More about</summary>

  It connects LLMs directly to version control workflows so developers can query repo status, review PRs, and automate Bitbucket tasks using natural language.

  _Yet another MCP server ensuring your AI can comment on a pull request before you’ve even decided whether that pull request should exist._

  `mcp` `bitbucket` `typescript` `version-control` `ai-integration`
  </details>

- **[firefox-devtools-mcp](https://github.com/mozilla/firefox-devtools-mcp)** `⭐ 141` `updated ≤30d` An MCP server that connects AI assistants to Firefox via WebDriver BiDi, enabling programmatic inspection, navigation, and debugging of browser tabs. <details><summary>More about</summary>

  It lets coding agents directly observe and control a real Firefox instance, turning the browser into a live debugging surface for AI-assisted web development.

  _We have successfully abstracted away the act of opening dev tools by teaching an AI to open dev tools for us, because apparently the 30 seconds we spent clicking 'Inspect Element' were the true bottleneck in shipping features._

  `automation` `browser` `browser-automation` `devtools` `firefox` `mcp`
  </details>

- **[gis-mcp](https://github.com/mahdin75/gis-mcp)** `⭐ 141` `updated ≤180d` A Model Context Protocol (MCP) server that connects LLMs to GIS libraries, enabling AI assistants to perform geospatial operations, data gathering, and transformations. <details><summary>More about</summary>

  It allows developers to equip their AI agents with spatial analysis capabilities, bridging the gap between code generation and geographic data processing.

  _Your AI can now calculate the exact buffer zone for a nature reserve, but it still can't figure out why your CI pipeline is failing._

  `mcp` `gis` `geospatial` `server` `python`
  </details>

- **[hub-mcp](https://github.com/docker/hub-mcp)** `⭐ 141` `updated ≤30d` An official Docker Hub MCP server that exposes Docker Hub APIs to LLMs for real-time image discovery, recommendations, and repository management via natural language. <details><summary>More about</summary>

  It gives AI assistants live access to Docker Hub metadata so they can recommend the right images and manage repos without the developer manually digging through container registries.

  _We’ve reached the point where the AI can’t even pick a container image without an official protocol server translating Docker Hub into LLM-compatible context._

  `mcp` `docker` `developer-tools` `container-registry`
  </details>

- **[mcp-bigquery-server](https://github.com/ergut/mcp-bigquery-server)** `⭐ 138` `updated ≤30d` A Model Context Protocol server that provides secure, read-only access to Google BigQuery datasets for LLMs, featuring automatic sensitive data detection and field-level access restrictions. <details><summary>More about</summary>

  It allows developers to connect AI assistants like Claude directly to enterprise data warehouses with configurable guardrails that prevent PII and PHI from leaking into LLM contexts.

  _We have successfully abstracted away the need to write SQL, only to introduce a complex middleware layer, a JSON config file, and a pattern-matching scanner to ensure the AI doesn't accidentally tweet the customer database._

  `mcp` `bigquery` `data-security` `llm-integration`
  </details>

- **[mcp-server](https://github.com/browserstack/mcp-server)** `⭐ 138` `updated ≤30d` An official MCP server that connects BrowserStack's test platform to AI tools like Cursor and Claude, enabling test management and debugging via natural language prompts. <details><summary>More about</summary>

  It allows developers to trigger cross-browser tests, diagnose failures, and fix code without leaving their IDE or LLM chat window.

  _You can now ask an AI to debug a crash on an iPhone 15 Pro Max, proving that even 'vibe testing' still requires a Node version check._

  `mcp` `testing` `browserstack` `qa`
  </details>

- **[mcp-server-ccxt](https://github.com/doggybee/mcp-server-ccxt)** `⭐ 138` `updated ≤1y` An MCP server that exposes the CCXT cryptocurrency exchange library to LLMs, allowing models like Claude to fetch market data and execute trades across 20+ exchanges. <details><summary>More about</summary>

  It gives AI agents a standardized, structured way to interact with exchange APIs without developers having to hand-craft tool definitions for every trading venue.

  _Finally, your LLM can lose money on KuCoin and Binance simultaneously, with the reassuring formality of the Model Context Protocol._

  `mcp` `crypto` `trading` `ccxt` `finance`
  </details>

- **[AgentRPC](https://github.com/agentrpc/agentrpc)** `⭐ 130` `updated ≤30d` A universal RPC layer that exposes functions across languages and network boundaries as tools compatible with MCP and OpenAI-compatible agents. <details><summary>More about</summary>

  It lets developers connect agent runtimes to existing services in private VPCs, Kubernetes, or multi-cloud setups without opening ports or rewriting integrations.

  _Finally, a hosted platform to solve the burning problem of your AI agent not being able to call a Python function sitting in a different Kubernetes cluster._

  `agent-tooling` `directory` `mcp` `multi-language` `registry` `rpc` `tooling`
  </details>

- **[yfinance-mcp](https://github.com/narumiruna/yfinance-mcp)** `⭐ 130` `updated ≤30d` A Model Context Protocol server that exposes Yahoo Finance data, including stock info, financials, news, and chart generation, to AI assistants via the yfinance library. <details><summary>More about</summary>

  Developers can equip AI coding agents with real-time financial data capabilities without building custom API wrappers or scraping logic.

  _Now your AI agent can lose money in the stock market and generate a candlestick chart explaining exactly why, all without you touching a browser._

  `mcp` `finance` `yahoo-finance` `python` `data-access`
  </details>

- **[jupyter-notebook-mcp](https://github.com/jjsantos01/jupyter-notebook-mcp)** `⭐ 128` `updated >1y` An MCP server that bridges Claude Desktop with Jupyter Notebook 6.x via WebSocket to enable AI-assisted cell manipulation, code execution, and notebook management. <details><summary>More about</summary>

  It allows developers to delegate notebook cell management and code execution to Claude, integrating AI assistance directly into a traditional data science workflow.

  _We've achieved the technological singularity where your AI assistant can execute arbitrary Python code in a notebook that hasn't been updated since 2020._

  `mcp` `jupyter` `claude` `data-science` `websocket`
  </details>

- **[dart-mcp-server](https://github.com/its-dart/dart-mcp-server)** `⭐ 126` `updated ≤180d` An official Model Context Protocol server that lets AI assistants manage tasks and documents inside Dart's AI-powered project management platform. <details><summary>More about</summary>

  Developers using Dart to track work can now delegate backlog grooming, doc updates, and task summaries directly to their local coding agents via MCP.

  _We have officially reached the point where your AI agent needs its own AI agent to keep the project-management tool from becoming a graveyard of half-finished tickets._

  `mcp` `dart` `project-management` `integrations`
  </details>

- **[mcp-server-bigquery](https://github.com/lucashild/mcp-server-bigquery)** `⭐ 125` `updated ≤90d` A Model Context Protocol server that allows LLMs to inspect schemas, list tables, and execute SQL queries against Google BigQuery datasets. <details><summary>More about</summary>

  It lets developers wire BigQuery directly into AI coding assistants like Claude Code and Cursor, so the model can reason over live production data without manual schema copying.

  _We have successfully abstracted the database so far away that the AI can now hallucinate your analytics queries in real time, provided you configured the JSON correctly._

  `mcp` `bigquery` `database` `context-protocol`
  </details>

- **[google-ads-mcp-server](https://github.com/gomarble-ai/google-ads-mcp-server)** `⭐ 124` `updated ≤180d` A FastMCP-powered server that connects the Google Ads API to MCP clients like Claude Desktop for querying performance data and generating keyword ideas. <details><summary>More about</summary>

  It allows developers to query GAQL, manage accounts, and research keywords through natural language conversations in their MCP-compatible IDE or desktop client.

  _We have successfully abstracted away the Google Ads UI, meaning you can now mismanage your ad spend without ever leaving your text editor._

  `mcp` `google-ads` `marketing` `fastmcp` `api-integration`
  </details>

- **[korea-stock-mcp](https://github.com/jjlabsio/korea-stock-mcp)** `⭐ 124` `updated ≤30d` An MCP server that exposes Korean stock market data from DART and KRX APIs to AI clients like Claude Desktop for financial analysis. <details><summary>More about</summary>

  Developers building AI finance workflows can integrate real-time Korean disclosure, financial, and trading data into their agents without writing custom API wrappers.

  _We now have a dedicated protocol server for parsing multi-megabyte XML business reports so your AI can confidently explain Samsung's balance sheet at 2 AM._

  `mcp` `finance` `korean-stock` `claude` `data-integration`
  </details>

- **[crypto-indicators-mcp](https://github.com/kukapay/crypto-indicators-mcp)** `⭐ 122` `updated ≤180d` An MCP server that exposes over 50 cryptocurrency technical analysis indicators and trading strategies, allowing AI agents to fetch market data and signals via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers and AI trading agents programmatically tap into standardized crypto technical analysis without writing their own indicator math or exchange integrations.

  _Another indispensable building block for the burgeoning ecosystem of AI agents that will hopefully trade us out of the mess the last generation of trading bots created._

  `mcp` `crypto` `trading` `technical-analysis` `finance`
  </details>

- **[server-google-news](https://github.com/chanmeng666/server-google-news)** `⭐ 122` `updated ≤90d` A Model Context Protocol (MCP) server that integrates Google News search via SerpAPI, providing categorized and multi-language news results to MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It allows developers to extend AI assistants with real-time news search capabilities, enabling workflows that require current events context without leaving the development environment.

  _We have successfully abstracted the act of reading the news into a protocol server, because apparently opening a browser to check headlines is now considered a context-switching failure._

  `mcp` `news-search` `serpapi` `typescript` `claude`
  </details>

- **[augments-mcp-server](https://github.com/augmnt/augments-mcp-server)** `⭐ 121` `updated ≤90d` An MCP server that provides Claude Code and Cursor with real-time framework documentation, type signatures, code examples, and dependency analysis for any npm package. <details><summary>More about</summary>

  It eliminates context-switching by letting developers query API behavior, diagnose errors, and generate migration guides directly inside their AI-assisted coding environment using live documentation.

  _We have successfully engineered a system where the AI needs an MCP server to remember what useEffect does so you don't have to, which is either a productivity breakthrough or the herald of our collective cognitive obsolescence._

  `mcp` `claude-code` `documentation` `npm` `context-engineering`
  </details>

- **[mockd](https://github.com/getmockd/mockd)** `⭐ 121` `updated ≤30d` A single-binary, multi-protocol mock server written in Go that supports HTTP, WebSocket, gRPC, MQTT, SSE, GraphQL, and SOAP, with an integrated local MCP server for AI agent integration. <details><summary>More about</summary>

  It lets developers spin up stateful mocks for nearly every modern protocol from one CLI, and includes a local MCP server so AI agents can generate and manage mocks directly.

  _We have finally built the one true mock server to rule them all, yet we will still spend three hours arguing with an AI agent about why the gRPC mock is returning HTTP 418._

  `mock-server` `mcp` `cli` `testing` `go`
  </details>

- **[octagon-mcp-server](https://github.com/octagonai/octagon-mcp-server)** `⭐ 120` `updated ≤30d` An MCP server that connects Claude Desktop and other MCP clients to the Octagon Market Intelligence API for AI-powered financial research, including SEC filings, earnings calls, stock data, and private market transactions. <details><summary>More about</summary>

  It lets developers and analysts wire structured financial data and deep research capabilities directly into local AI workflows without building their own market-data integrations.

  _Another MCP server enters the registry, ensuring your AI assistant can now explain quarterly earnings while you silently wonder when it will offer to refinance your credit card debt._

  `mcp` `finance` `market-data` `claude-desktop`
  </details>

- **[Reloaderoo](https://github.com/cameroncooke/reloaderoo)** `⭐ 119` `updated ≤180d` A CLI inspection tool and transparent proxy that enables hot-reloading and debugging for Model Context Protocol (MCP) server development. <details><summary>More about</summary>

  It allows developers to test MCP servers without complex client setups and iterate on code without disconnecting their AI clients or losing session context.

  _Finally, a tool to manage the meta-workflow of the proxy that manages the tool that manages the model, ensuring your stack is thoroughly abstracted from the code you're actually trying to write._

  `cli` `debugging` `developer-tools` `mcp` `proxy`
  </details>

- **[dino-x-mcp](https://github.com/idea-research/dino-x-mcp)** `⭐ 118` `updated ≤1y` An official MCP server that exposes DINO-X vision models to LLMs via a standard protocol, enabling object detection, localization, and image captioning through tools like Cursor and Windsurf. <details><summary>More about</summary>

  It allows developers to plug production-grade visual perception directly into their coding agent workflows without building custom vision API wrappers.

  _Your coding agent can now tell you exactly how many cars are in your screenshots, shifting the anxiety from 'will it compile' to 'why is it hallucinating traffic counts'._

  `mcp` `vision` `object-detection` `multimodal`
  </details>

- **[freqtrade-mcp](https://github.com/kukapay/freqtrade-mcp)** `⭐ 118` `updated ≤180d` An MCP server that exposes the Freqtrade cryptocurrency trading bot's REST API as tools for AI agents to interact with market data, trades, and bot configuration. <details><summary>More about</summary>

  It allows developers to control and query their automated trading strategies via natural language through any MCP-compatible client instead of writing custom API integration code.

  _We have successfully abstracted away the last remaining barrier to letting an LLM manage our life savings in a volatile market, which is definitely a milestone worth celebrating._

  `mcp` `crypto` `trading` `automation` `api`
  </details>

- **[memorylane](https://github.com/deusxmachina-dev/memorylane)** `⭐ 118` `updated ≤30d` A desktop app that records your screen to build context about your workflow and exposes that context to AI chats via an MCP server. <details><summary>More about</summary>

  It attempts to solve the context-switching problem by letting AI assistants see what you are working on without manual copy-pasting of logs or screenshots.

  _We have finally automated the one thing that kept us from working: the illusion that an AI is watching us work._

  `mcp` `context` `desktop` `memory`
  </details>

- **[leetcode-mcp-server](https://github.com/jinzcdev/leetcode-mcp-server)** `⭐ 112` `updated ≤90d` An MCP server that provides programmatic, authenticated access to LeetCode problem data, user submissions, and contest history for integration with AI coding assistants. <details><summary>More about</summary>

  It allows AI agents to fetch problem statements, check user submission history, and analyze contest performance directly within an IDE or chat interface, bridging LeetCode practice with daily development workflows.

  _We have finally achieved the singularity: an MCP server designed specifically so your AI can help you pretend to practice algorithms you will inevitably solve by pasting the problem description into a different chat window._

  `mcp` `leetcode` `coding-interview` `data-access`
  </details>

- **[alibaba-cloud-ops-mcp-server](https://github.com/aliyun/alibaba-cloud-ops-mcp-server)** `⭐ 111` `updated ≤90d` An Alibaba Cloud-hosted MCP server that lets AI assistants manage and deploy to Alibaba Cloud resources like ECS, RDS, VPC, and OSS via the Model Context Protocol. <details><summary>More about</summary>

  It allows developers to treat cloud infrastructure as callable tools for AI coding agents, enabling automated analysis, builds, and deployments directly from the IDE.

  _Now your AI can simultaneously forget your business logic and misconfigure your security groups in the same breath._

  `mcp` `cloudops` `alibaba-cloud` `infrastructure` `agent-tools`
  </details>

- **[owlex](https://github.com/agentic-box/owlex)** `⭐ 109` `updated ≤90d` An MCP server that lets Claude Code run multi-agent deliberations by querying Codex, Gemini, OpenCode, and other models, then synthesizing a final answer. <details><summary>More about</summary>

  It gives developers a structured way to cross-check architecture decisions, debugging paths, and tricky design questions across multiple AI models without leaving their coding environment.

  _You now have a council of large language models that can argue with each other, so your code reviews are officially more bureaucratic than the teams that wrote the frameworks you depend on._

  `ai-review` `claude-code` `cli` `code-review` `deliberation` `mcp` `multi-agent`
  </details>

- **[chronulus-mcp](https://github.com/chronulusai/chronulus-mcp)** `⭐ 108` `updated ≤1y` An MCP server that connects Chronulus AI forecasting and prediction agents to Claude Desktop for time-series and predictive analysis workflows. <details><summary>More about</summary>

  Developers building data-driven or decision-support features can now invoke specialized forecasting agents directly from their IDE without wiring up separate API clients.

  _We have successfully extended our ecosystem so that your chat client can now hallucinate about the future with the confidence of a parameterized model._

  `mcp` `forecasting` `prediction` `data-science` `claude`
  </details>

- **[mcp-hetzner](https://github.com/dkruyt/mcp-hetzner)** `⭐ 107` `updated >1y` An MCP server that lets language models manage Hetzner Cloud resources like servers, volumes, firewalls, and SSH keys through structured API functions and Claude Code integration. <details><summary>More about</summary>

  It allows developers to treat cloud infrastructure as a conversational surface, enabling AI assistants to directly provision, tear down, and configure Hetzner resources during development workflows.

  _We have finally reached the point where your AI can accidentally spin up a cx11 instance while trying to fix a CSS bug, and you will still pretend this is productivity._

  `mcp` `hetzner` `cloud-infrastructure` `claude-code`
  </details>

- **[mcp-screenshot-website-fast](https://github.com/just-every/mcp-screenshot-website-fast)** `⭐ 106` `updated ≤90d` An MCP server that captures fast, tiled 1072x1072 screenshots of web pages for optimized processing by vision-capable AI models like Claude. <details><summary>More about</summary>

  It integrates directly into coding agents and IDEs to provide visual context of live web pages, bridging the gap between code generation and UI verification.

  _We have successfully abstracted the act of looking at a website into a 1072x1072 tile passed to a model that hallucinates what it saw._

  `mcp` `screenshot` `vision` `puppeteer` `cli-tool`
  </details>

- **[sqlite-explorer-fastmcp-mcp-server](https://github.com/hannesrudolph/sqlite-explorer-fastmcp-mcp-server)** `⭐ 105` `updated ≤1y` A Model Context Protocol server built with FastMCP that provides LLMs with safe, read-only access to query and inspect SQLite databases via validated tools. <details><summary>More about</summary>

  It allows coding agents and AI assistants to inspect local database schemas and run SELECT queries without risking data mutation or SQL injection.

  _We have successfully abstracted the database so far away that the AI now needs a dedicated safety-wrapped server just to perform a SELECT * on a local file._

  `mcp` `sqlite` `database-tools` `llm-integration`
  </details>

- **[mcp-baostock-server](https://github.com/huggingagi/mcp-baostock-server)** `⭐ 104` `updated ≤90d` An MCP server that exposes BaoStock's Chinese stock market data—including K-line history, financial indicators, and dividends—as tools for AI models and agents. <details><summary>More about</summary>

  Developers building financial AI agents can connect this server to let models query real stock fundamentals and market data without wiring up BaoStock directly.

  _We've reached the point where our AI agents now need their own specialized MCP servers just to argue about whether PE ratios justify a position in baijiu stocks._

  `mcp` `finance` `stock-data` `agent-tooling`
  </details>

- **[excalidraw-architect-mcp](https://github.com/bv-venky/excalidraw-architect-mcp)** `⭐ 103` `updated ≤30d` An MCP server that generates Excalidraw architecture diagrams with automatic layout, allowing LLMs to describe system structure while the engine handles positioning and styling. <details><summary>More about</summary>

  It lets developers generate and iteratively edit accurate architecture diagrams through natural language in their AI editor, eliminating the manual cleanup usually required when LLMs hallucinate diagram coordinates.

  _We have finally solved the critical developer bottleneck of not being able to confidently explain a system we just spent six sprints building, provided we install a specialized MCP server to draw the boxes for us._

  `mcp` `excalidraw` `architecture` `diagrams` `cursor`
  </details>

- **[fradser/mcp-server-apple-reminders](https://github.com/fradser/mcp-server-apple-events)** `⭐ 103` `updated ≤30d` An MCP server that provides native macOS integration with Apple Reminders and Calendar via EventKit, enabling AI assistants to perform full CRUD operations on tasks and events. <details><summary>More about</summary>

  It allows developers to manage their local Apple task and calendar data directly through MCP-compatible clients like Claude Desktop, bridging personal productivity workflows with AI assistance.

  _You can now ask an LLM to remind you to fix the bug you just asked it to find, ensuring your local macOS reminders are just as overwhelmed as your context window._

  `eventkit` `macos` `mcp` `productivity` `swift`
  </details>

- **[Roundtable](https://github.com/askbudi/roundtable)** `⭐ 103` `updated ≤1y` A zero-configuration MCP server that allows developers to delegate tasks from a primary IDE AI assistant to multiple specialized sub-agents like Codex, Claude, Cursor, and Gemini in parallel. <details><summary>More about</summary>

  It enables a multi-model workflow directly inside the IDE, allowing developers to leverage the specific strengths of different AI models (e.g., Gemini's context window, Claude's reasoning) without manual context switching or copy-pasting.

  _We have successfully built infrastructure to manage the cognitive load of managing the infrastructure that manages the AI assistants that are managing our code._

  `ide-integration` `local-server` `mcp` `multi-agent` `python`
  </details>

- **[alibabacloud-devops-mcp-server](https://github.com/aliyun/alibabacloud-devops-mcp-server)** `⭐ 102` `updated ≤30d` An MCP server that connects AI assistants to Alibaba Cloud's Yunxiao DevOps platform, exposing tools to manage repositories, pipelines, projects, and merge requests. <details><summary>More about</summary>

  It lets developers hand off repetitive DevOps chores—like creating work items, triggering pipelines, and submitting merge requests—directly from their AI coding assistant.

  _You can now ask your AI to open a merge request, provided you have already spent three hours configuring a personal access token for a platform you mostly tolerated in the browser anyway._

  `mcp` `devops` `alibaba-cloud` `yunxiao`
  </details>

- **[OceanBase](https://github.com/oceanbase/awesome-oceanbase-mcp)** `⭐ 102` `updated ≤90d` A collection of Model Context Protocol (MCP) servers for the OceanBase ecosystem, enabling AI assistants to interact directly with OceanBase databases, cloud platforms, and diagnostic tools. <details><summary>More about</summary>

  It allows developers to query, manage, and troubleshoot OceanBase clusters and data directly through AI assistants like Claude using standardized MCP tooling.

  _You can now ask an AI to debug your distributed database while wondering if the AI is also quietly managing the Kubernetes cluster you forgot you deployed._

  `ai-integration` `database` `devops` `mcp` `oceanbase`
  </details>

- **[mcp-sqlite](https://github.com/jparkerweb/mcp-sqlite)** `⭐ 101` `updated ≤90d` An MCP server that connects AI coding assistants to local SQLite databases, exposing full CRUD operations and custom query execution. <details><summary>More about</summary>

  It allows agents in Cursor and VSCode to directly inspect and manipulate local SQLite data without the developer manually writing queries or switching context.

  _We have successfully reached the point where your AI assistant needs a dedicated protocol server just to argue with a local SQLite file._

  `mcp` `sqlite` `database` `cursor` `vscode`
  </details>

- **[Paperless-MCP](https://github.com/baruchiro/paperless-mcp)** `⭐ 100` `updated ≤30d` An MCP server that exposes Paperless-NGX document management capabilities—such as searching, uploading, and bulk editing documents—as tools for AI assistants. <details><summary>More about</summary>

  It lets developers query, organize, and manipulate their document archive directly through an AI agent instead of switching to the Paperless web UI or API clients.

  _You now have the infrastructure to ask a large language model to tag your tax returns, which is definitely the highest-leverage use of context windows we could have built._

  `document-management` `integrations` `mcp` `paperless-ngx`
  </details>

- **[needle-mcp](https://github.com/needle-ai/needle-mcp)** `⭐ 99` `updated ≤1y` An MCP server that connects Claude Desktop and Cursor to Needle's hosted RAG platform for document management and semantic search across PDFs, DOCX, and other files. <details><summary>More about</summary>

  It gives coding assistants a long-term memory layer by letting them ingest, organize, and semantically search project documentation and internal knowledge bases directly from the IDE.

  _Just what every developer needs: another abstraction layer to manage so their AI can pretend to remember what was in that onboarding PDF from nine months ago._

  `mcp` `rag` `semantic-search` `claude-desktop` `memory`
  </details>

- **[cesium-mcp](https://github.com/gaopengbin/cesium-mcp)** `⭐ 98` `updated ≤30d` A Model Context Protocol server and browser-side bridge that exposes 60+ tools for controlling CesiumJS 3D globes, enabling natural language interaction with geospatial visualizations via AI agents or function calling. <details><summary>More about</summary>

  It allows developers to integrate AI-driven control over complex 3D geospatial scenes without building custom tooling for camera movements, entity management, or spatial analysis from scratch.

  _You can now ask an LLM to fly to the Eiffel Tower and drop a marker, ensuring your GPU is fully utilized rendering GIS data while you debug why the agent thinks Paris is a string parameter._

  `mcp` `cesiumjs` `geospatial` `3d-gis` `browser-agent`
  </details>

- **[cycode-cli](https://github.com/cycodehq/cycode-cli)** `⭐ 98` `updated ≤30d` A local CLI tool for scanning repositories to detect secrets, IaC misconfigurations, SCA vulnerabilities, and SAST issues, with an experimental MCP server mode. <details><summary>More about</summary>

  It integrates security scanning directly into developer workflows via CLI, pre-commit hooks, and MCP compatibility for AI-assisted audits.

  _Now your AI agent can find the secrets you accidentally committed while you were busy asking it to refactor your authentication logic._

  `ai-agents` `cli` `devsecops` `mcp` `sast` `sdlc` `security`
  </details>

- **[discogs-mcp-server](https://github.com/cswkim/discogs-mcp-server)** `⭐ 97` `updated ≤30d` An MCP server that exposes Discogs music catalog search and collection management tools to compatible AI assistants like Claude Desktop. <details><summary>More about</summary>

  Developers building music-oriented agent workflows can integrate Discogs data without writing custom API wrappers by plugging this server into their MCP client.

  _We have successfully reached the point where we need a standardized protocol just to ask an AI to fondle our vinyl records._

  `mcp` `discogs` `music` `api-integration`
  </details>

- **[alpha-vantage-mcp](https://github.com/berlinbra/alpha-vantage-mcp)** `⭐ 96` `updated ≤1y` An MCP server that exposes Alpha Vantage financial market data, including stocks, crypto, ETFs, and earnings, to LLM clients like Claude Desktop. <details><summary>More about</summary>

  It allows developers to plug live market data directly into local AI workflows without writing custom API integration layers.

  _Nothing says ‘agentic future’ quite like running a Docker container just to ask a chatbot for the current price of Dogecoin._

  `mcp` `finance` `alpha-vantage` `data-integration`
  </details>

- **[mcp-vegalite-server](https://github.com/isaacwasserman/mcp-vegalite-server)** `⭐ 96` `updated ≤1y` A Model Context Protocol server that enables LLMs to visualize data by generating Vega-Lite specifications and returning them as JSON or base64-encoded PNG images. <details><summary>More about</summary>

  It allows developers to plug data visualization capabilities into MCP-compatible clients like Claude Desktop, letting AI assistants turn raw data into charts without custom integration work.

  _We have successfully abstracted the job of making a bar chart into configuring a middleman server so an LLM can hallucinate a JSON spec that another tool will render._

  `mcp` `data-visualization` `vega-lite` `claude-desktop`
  </details>

- **[dicom-mcp](https://github.com/christianhinge/dicom-mcp)** `⭐ 94` `updated ≤180d` A Model Context Protocol server that lets AI assistants query, read, and move data on DICOM servers such as PACS and VNA systems. <details><summary>More about</summary>

  It gives developers building medical-imaging AI workflows a ready-made bridge between LLMs and DICOM infrastructure without writing custom DICOM networking code.

  _Because what every radiology department needs is an LLM deciding which C-MOVE operation to fire at the PACS at 3 a.m._

  `mcp` `medical-imaging` `dicom` `pacs` `developer-tools`
  </details>

- **[oxylabs-mcp](https://github.com/oxylabs/oxylabs-mcp)** `⭐ 94` `updated ≤30d` An official MCP server that exposes Oxylabs web scraping and AI-powered data extraction tools to AI models and coding agents. <details><summary>More about</summary>

  Developers can give their local agents direct access to structured web data, JavaScript rendering, and geo-specific scraping without building custom API wrappers.

  _We have successfully abstracted away the ancient art of 'writing a curl request' into a multi-service MCP toolchain that requires three different API keys just to ask an AI what the weather is._

  `mcp` `scraping` `web-data` `ai-studio` `python`
  </details>

- **[gosqlx](https://github.com/ajitpratap0/gosqlx)** `⭐ 92` `updated ≤30d` A high-performance Go SDK and CLI for parsing, formatting, linting, and security-scanning SQL across multiple dialects, also available as an MCP server and VS Code extension. <details><summary>More about</summary>

  It gives developers and AI agents a fast, programmatic way to safely analyze and transform SQL before it reaches the database.

  _We have finally achieved sub-microsecond SQL parsing, which means your AI agent can now hallucinate insecure queries 1.38 million times per second._

  `sql` `parser` `mcp` `go` `security`
  </details>

- **[open-ontologies](https://github.com/fabio-rovai/open-ontologies)** `⭐ 91` `updated ≤30d` A Rust MCP server that exposes 43 tools for building, validating, reasoning over, and governing RDF/OWL ontologies with an in-memory Oxigraph triple store and a desktop Studio app. <details><summary>More about</summary>

  It lets developers wire ontology engineering, SHACL validation, SPARQL queries, and OWL2-DL reasoning directly into Claude and MCP-compatible IDEs without touching a JVM or Protégé.

  _You now have the perfect excuse to ask an LLM to terraform an OWL ontology before you’ve even finished explaining why your team needs one._

  `mcp` `ontology` `knowledge-graph` `rust` `reasoning`
  </details>

- **[octagon-deep-research-mcp](https://github.com/octagonai/octagon-deep-research-mcp)** `⭐ 90` `updated ≤90d` An MCP server that connects Claude Desktop, Cursor, and other MCP clients to Octagon AI's hosted deep research agents for unlimited, high-speed web research and report generation. <details><summary>More about</summary>

  It lets developers pipe enterprise-grade research queries directly into their coding environment without hitting the harsh rate limits of ChatGPT Pro or Perplexity.

  _We have successfully integrated a tool that does the thinking for us, so we can spend even more time arguing with our IDE about why the agent's 3x-verified data still doesn't compile._

  `mcp` `research` `agent-integration` `octagon`
  </details>

- **[arthurpanhku/Arthor-Agent](https://github.com/arthurpanhku/docsentinel)** `⭐ 89` `updated ≤30d` An AI-powered Secure Software Development Lifecycle (SSDLC) platform that uses LangGraph agents to automate security assessments across all six phases of development, from requirements to operations. <details><summary>More about</summary>

  It shifts security left by automating the tedious review of documents, threat modeling, and SAST/DAST triage directly into CI/CD pipelines and developer workflows.

  _Finally, an AI agent to automate the security paperwork so you can get back to shipping the vulnerabilities faster._

  `compliance` `langgraph` `mcp` `security` `ssdlc`
  </details>

- **[opgg-mcp](https://github.com/opgginc/opgg-mcp)** `⭐ 89` `updated ≤180d` An MCP server implementation that exposes OP.GG game data for League of Legends, TFT, and Valorant to AI agents via a Streamable HTTP endpoint. <details><summary>More about</summary>

  Developers building gaming assistants or data-driven agent workflows can plug directly into OP.GG's meta, match history, and leaderboard APIs without writing custom scraping or API glue code.

  _We have finally solved the most critical interoperability problem of our time: letting Claude argue with you about lane matchups and Valorant agent comps with zero latency._

  `mcp` `gaming` `league-of-legends` `api-wrapper`
  </details>

- **[tsgram-mcp](https://github.com/areweai/tsgram-mcp)** `⭐ 89` `updated ≤1y` TSGram MCP is an MCP server that bridges local Claude Code sessions with Telegram, allowing developers to query and edit their codebase via mobile chat. <details><summary>More about</summary>

  It enables developers to interact with their local coding agent and modify files while away from their desk, turning a messaging app into a remote terminal for AI-assisted development.

  _We have finally achieved the platonic ideal of modern productivity: deploying a local Docker stack so you can debug your package.json from a messaging app while pretending you aren't at your computer._

  `mcp` `telegram` `claude-code` `local-ai` `mobile`
  </details>

- **[medical-mcp](https://github.com/jamesanz/medical-mcp)** `⭐ 88` `updated ≤90d` An MCP server that provides AI coding environments like Cursor and Claude Desktop with access to medical data from the FDA, WHO, PubMed, RxNorm, and Google Scholar. <details><summary>More about</summary>

  Developers building healthcare or medical AI applications can ground their assistants in authoritative, real-time clinical data without managing multiple API keys or external cloud calls.

  _We have reached the point where our coding agents need PubMed access to argue with us about whether a cough requires antibiotics._

  `mcp` `medical` `healthcare` `cursor` `context`
  </details>

- **[api-mcp-server](https://github.com/hostinger/api-mcp-server)** `⭐ 87` `updated ≤30d` An MCP server that exposes 118 Hostinger API tools (covering billing, DNS, domains, hosting, VPS, and reach) to Claude, Cursor, and other MCP-compatible AI clients. <details><summary>More about</summary>

  It lets developers manage Hostinger infrastructure through natural-language prompts in their AI coding environments instead of juggling separate dashboards and API docs.

  _Because the one thing your autonomous coding agent was clearly missing was the ability to accidentally delete your production VPS while you argue about variable naming._

  `mcp` `hostinger` `api` `infrastructure` `cursor`
  </details>

- **[basecamp-mcp-server](https://github.com/georgeantonopoulos/basecamp-mcp-server)** `⭐ 87` `updated ≤30d` A FastMCP-powered server that exposes the Basecamp 3+ API as 75+ tools to AI clients like Cursor, Codex, and Claude Desktop. <details><summary>More about</summary>

  Developers can manage Basecamp projects, to-dos, and comments directly from their AI coding environment without switching context to the browser.

  _We have successfully abstracted project management so far away that you can now procrastinate on your tickets using a JSON-RPC tool called by an LLM in your editor._

  `mcp` `basecamp` `fastmcp` `integrations`
  </details>

- **[mindpilot-mcp](https://github.com/abrinsmead/mindpilot-mcp)** `⭐ 86` `updated ≤180d` An MCP server that renders Mermaid diagrams from coding agent output and serves them in a local web interface for visualizing code architecture and flows. <details><summary>More about</summary>

  It lets developers ask their coding agent to generate architecture, state machine, or sequence diagrams and immediately view them locally without sending code to external cloud diagramming services.

  _Another layer in the stack so your agent can draw you a picture of the mess it just made, which you will admire briefly before asking it to refactor the same code again._

  `mcp` `diagramming` `visualization` `developer-tools`
  </details>

- **[langfuse-mcp](https://github.com/avivsinai/langfuse-mcp)** `⭐ 85` `updated ≤30d` A Model Context Protocol server that connects AI agents to Langfuse, allowing them to query traces, sessions, prompts, and datasets for debugging and observability. <details><summary>More about</summary>

  It allows coding agents to directly inspect their own execution history and prompt configurations inside Langfuse without the developer needing to leave the terminal.

  _We have now successfully built an agent that can debug the agents we built to debug the agents, ensuring the stack is deep enough to hide the original bug completely._

  `mcp` `observability` `langfuse` `debugging`
  </details>

- **[Keboola](https://github.com/keboola/mcp-server)** `⭐ 84` `updated ≤30d` An open-source MCP server that exposes Keboola data platform features—such as storage, SQL transformations, jobs, and flows—as callable tools for AI agents and MCP clients like Cursor, Claude, and VS Code. <details><summary>More about</summary>

  It lets developers query tables, trigger jobs, and manage data pipelines conversationally inside their existing AI coding tools instead of switching to the Keboola UI.

  _We have successfully abstracted the data platform so far away that your AI agent now needs its own data platform integration to ask another AI to run your SQL._

  `ai-integration` `data-platform` `etl` `keboola` `mcp`
  </details>

- **[mcp-server-circleci](https://github.com/circleci-public/mcp-server-circleci)** `⭐ 84` `updated ≤30d` An official MCP server from CircleCI that lets developers manage pipelines, inspect build failures, and optimize CI config using natural language inside MCP-compatible IDEs like Cursor and VS Code. <details><summary>More about</summary>

  It brings CI/CD diagnostics and pipeline control directly into the editor, so developers can debug flaky tests and rerun workflows without context-switching to the CircleCI dashboard.

  _Now your CI pipeline can fail in natural language, and you can argue with your IDE about why the config validation is judging your YAML._

  `mcp` `circleci` `ci-cd` `devops` `ide-integration`
  </details>

- **[alchemy-mcp-server](https://github.com/alchemyplatform/alchemy-mcp-server)** `⭐ 83` `updated ≤30d` An official MCP server that enables AI agents and coding assistants to query Alchemy's blockchain APIs for token prices, NFT data, transaction history, and balances without writing custom code. <details><summary>More about</summary>

  It lets developers equip their existing AI coding agents with direct blockchain data access, removing the need to manually wrap Alchemy endpoints when building Web3 features.

  _Another day, another MCP server, because apparently the future of software engineering is just wiring together ephemeral protocol bridges until the context window sighs._

  `mcp` `blockchain` `web3` `alchemy` `api-bridge`
  </details>

- **[code-to-tree](https://github.com/micl2e2/code-to-tree)** `⭐ 83` `updated ≤90d` A runtime-free MCP server that converts source code into abstract syntax trees (ASTs) using tree-sitter for multiple languages including C, C++, Rust, Ruby, Go, Java, and Python. <details><summary>More about</summary>

  It gives coding agents a reliable way to parse code structure directly, rather than trusting an LLM to hallucinate its own syntax understanding.

  _We have officially reached the point where we need a dedicated server just to help the AI remember what a parenthesis looks like._

  `mcp` `ast` `tree-sitter` `syntax-analysis` `llm-tooling`
  </details>

- **[lucidity-mcp](https://github.com/hyperb1iss/lucidity-mcp)** `⭐ 83` `updated >1y` A Model Context Protocol (MCP) server that analyzes git changes to detect code quality issues, security vulnerabilities, and complexity for AI coding assistants. <details><summary>More about</summary>

  It provides the structured context and specific tooling necessary for AI assistants to perform meaningful pre-commit code reviews rather than just hallucinating syntax.

  _Finally, an automated way to catch the 'nightmare hellscape' your AI assistant codes while you aren't looking, provided you remember to ask it before you commit._

  `mcp` `code-quality` `code-review` `git-analysis` `static-analysis`
  </details>

- **[mcp-gopls](https://github.com/hloiseau/mcp-gopls)** `⭐ 83` `updated ≤180d` An MCP server that exposes Go's gopls language server capabilities—including navigation, diagnostics, testing, and coverage—to AI assistants via the Model Context Protocol. <details><summary>More about</summary>

  It gives coding agents deep, structured access to Go tooling so they can reliably navigate, test, and refactor Go code without guessing at workspace structure.

  _We now have an MCP server wrapping a language server so that an AI agent can pretend it knows how to run `go mod tidy` without breaking your module graph._

  `developer-tools` `go` `gopls` `lsp` `mcp`
  </details>

- **[mem0-mcp-selfhosted](https://github.com/elvismdev/mem0-mcp-selfhosted)** `⭐ 83` `updated ≤90d` A self-hosted MCP server that brings mem0's memory layer to Claude Code using local Qdrant, Neo4j, and Ollama for fully private, persistent context across sessions. <details><summary>More about</summary>

  It lets developers give Claude Code a long-term memory that runs entirely on their own infrastructure, removing the need to re-explain project conventions and decisions in every session.

  _You can now preserve every bad architectural decision you have ever made in a local knowledge graph, ensuring Claude will faithfully repeat them until the heat death of your codebase._

  `mcp` `memory` `self-hosted` `claude-code` `local-ai`
  </details>

- **[codemirror-mcp](https://github.com/marimo-team/codemirror-mcp)** `⭐ 79` `updated ≤30d` A CodeMirror extension that implements the Model Context Protocol to provide autocomplete, visual decorations, and click handling for resource mentions and prompt commands inside the editor. <details><summary>More about</summary>

  It lets developers wire MCP-powered context and prompt shortcuts directly into any CodeMirror-based editor, bridging local AI workflows with the text editing experience.

  _We have finally achieved the Platonic ideal of AI tooling: a plugin for an editor, so that the editor can talk to a protocol, so that the protocol can talk to a model, so that the model can ignore your cursor position._

  `codemirror` `mcp` `editor-extension` `context-protocol`
  </details>

- **[Codesys-mcp-toolkit](https://github.com/johannespettersson80/codesys-mcp-toolkit)** `⭐ 79` `updated ≤1y` A Model Context Protocol server that connects MCP clients like Claude Desktop to CODESYS V3 automation environments for project management, code editing, and compilation. <details><summary>More about</summary>

  It allows developers to automate industrial PLC programming tasks and manage CODESYS projects through natural language interactions with AI assistants.

  _We have successfully bridged the gap between cutting-edge LLMs and Python 2.7-based industrial scripting engines, proving that no legacy environment is safe from AI integration._

  `automation` `codesys` `ide-integration` `mcp` `plc`
  </details>

- **[onchain-mcp](https://github.com/bankless/onchain-mcp)** `⭐ 79` `updated ≤30d` An MCP server that exposes Bankless API endpoints for reading smart contract state, fetching events, and retrieving transaction history across multiple blockchain networks. <details><summary>More about</summary>

  Developers building AI agents that need on-chain data can plug this server into their MCP-compatible workflow instead of writing custom API integrations for blockchain queries.

  _We have successfully abstracted reading a smart contract into yet another protocol layer, because apparently the solution to blockchain complexity was always more middleware._

  `mcp` `blockchain` `web3` `bankless` `onchain-data`
  </details>

- **[unitree-go2-mcp-server](https://github.com/lpigeon/unitree-go2-mcp-server)** `⭐ 78` `updated ≤1y` An MCP server that translates natural language commands into ROS2 instructions to control a Unitree Go2 robot via an LLM. <details><summary>More about</summary>

  It lets robotics developers bridge high-level LLM reasoning directly to physical robot actions without writing custom ROS2 wrappers for every command.

  _We have officially reached the point where your robot dog needs an MCP server, a ROS2 environment, and a Claude Desktop config just to interpret a simple instruction to take a nap._

  `mcp` `robotics` `ros2` `unitree` `llm-control`
  </details>

- **[embedded-debugger-mcp](https://github.com/adancurusul/embedded-debugger-mcp)** `⭐ 77` `updated ≤1y` An MCP server that connects AI assistants like Claude to embedded hardware via probe-rs, enabling debugging, flashing, and RTT communication with ARM Cortex-M and RISC-V microcontrollers. <details><summary>More about</summary>

  It lets developers use natural language to halt, step, and inspect memory on physical hardware, bridging the gap between AI coding agents and the embedded debugger toolchain.

  _We have finally achieved the singularity where your AI assistant can single-step through a firmware loop, but only if you enjoy configuring JSON paths for a Rust binary that was pushed yesterday._

  `mcp` `embedded` `debugging` `rust` `hardware`
  </details>

- **[gin-mcp](https://github.com/ckanthony/gin-mcp)** `⭐ 77` `updated ≤90d` A zero-configuration Go library that automatically exposes existing Gin API endpoints as Model Context Protocol (MCP) tools with a single line of code. <details><summary>More about</summary>

  It allows Go developers using the Gin framework to instantly make their APIs available to MCP-compatible clients like Cursor and Claude without writing boilerplate integration code.

  _Because nothing says 'modern backend development' like wrapping your REST API in three layers of abstraction just so an LLM can theoretically call your /ping endpoint._

  `go` `gin` `mcp` `middleware` `api`
  </details>

- **[imessage-query-fastmcp-mcp-server](https://github.com/hannesrudolph/imessage-query-fastmcp-mcp-server)** `⭐ 77` `updated ≤180d` A macOS-only MCP server built with FastMCP that provides read-only access to the iMessage database for LLMs to query and analyze conversations. <details><summary>More about</summary>

  It allows developers to wire iMessage data into AI workflows within Claude Desktop or Cline without writing custom database connectors or risking writes to the chat DB.

  _You now have the infrastructure to ask an LLM to summarize three years of unread group chats, ensuring your productivity stack is fully optimized for avoiding actual human replies._

  `mcp` `imessage` `macos` `fastmcp` `llm-integration`
  </details>

- **[mcp-server-multiverse](https://github.com/lamemind/mcp-server-multiverse)** `⭐ 77` `updated ≤90d` A middleware server that enables multiple isolated instances of the same MCP servers to run simultaneously with unique namespaces, configurations, and automatic restart capabilities. <details><summary>More about</summary>

  It lets developers run multiple contexts (e.g., job vs. side project) of the same MCP server without configuration conflicts or environment variable collisions.

  _We have invented a multiverse just so our AI can safely forget which MySQL database it is supposed to be breaking at any given moment._

  `mcp` `middleware` `tooling` `local-ai`
  </details>

- **[optuna-mcp](https://github.com/optuna/optuna-mcp)** `⭐ 76` `updated ≤30d` An MCP server that exposes Optuna's hyperparameter optimization, study management, and visualization APIs so LLM clients can run tuning workflows via chat. <details><summary>More about</summary>

  Developers can delegate trial creation, evaluation, and analysis of hyperparameter searches to an LLM inside their existing MCP client instead of writing and running tuning scripts manually.

  _We have successfully abstracted hyperparameter tuning so far that even the loop is now someone else’s problem, provided you can explain the search space to a chatbot._

  `mcp` `hyperparameter-optimization` `optuna` `llm-tooling`
  </details>

- **[phpcodearcheology](https://github.com/phpcodearcheology/phpcodearcheology)** `⭐ 74` `updated ≤30d` A PHP static analysis tool that measures code quality and architecture via 60+ metrics, git churn analysis, and includes an AI-ready MCP server for integration with coding assistants. <details><summary>More about</summary>

  It gives developers deep architectural insights and technical debt tracking for PHP codebases, while the MCP server allows AI assistants to directly query code health and structure.

  _We have reached the point where we need an AI archaeology tool just to help the AI understand the sprawling PHP legacy we built before the AI arrived._

  `php` `static-analysis` `mcp` `architecture` `technical-debt`
  </details>

- **[zaturn](https://github.com/kdqed/zaturn)** `⭐ 74` `updated ≤180d` Zaturn is an MCP server and web interface that allows AI models to query SQL databases and generate visualizations so developers and analysts can interact with data using natural language instead of SQL or Python. <details><summary>More about</summary>

  It enables developers to integrate data analysis capabilities into AI workflows via MCP, allowing models to directly query multiple databases and generate charts without manual query writing.

  _We have successfully eliminated the need to write SQL by adding a layer of prompt engineering, configuration, and an MCP server that will occasionally hallucinate your JOINs anyway._

  `mcp` `data-analysis` `sql` `visualization` `vibe-coding`
  </details>

- **[keep-mcp](https://github.com/feuerdev/keep-mcp)** `⭐ 73` `updated ≤90d` An MCP server that lets AI assistants read, create, and manage notes in Google Keep via a range of note, label, and collaborator tools. <details><summary>More about</summary>

  It turns Google Keep into a programmable surface so agents can treat your notes as task lists, specs, and transient state without leaving the chat.

  _We have successfully built an integration that allows an AI to reorganize your grocery lists while you are still debugging why the MCP config won't parse._

  `mcp` `google-keep` `productivity` `agent-tooling`
  </details>

- **[pyats_mcp](https://github.com/automateyournetwork/pyats_mcp)** `⭐ 72` `updated ≤90d` An MCP server that wraps Cisco pyATS and Genie, allowing AI agents to run show commands, apply configurations, and query network state over STDIO. <details><summary>More about</summary>

  It bridges the gap between modern AI coding agents and legacy network infrastructure, letting developers automate device management through natural language workflows.

  _Finally, your LLM can SSH into a Catalyst switch and break your network for you, removing the need for you to manually fat-finger the wrong VLAN._

  `mcp` `network-automation` `cisco` `pyats`
  </details>

- **[chess-mcp](https://github.com/pab1it0/chess-mcp)** `⭐ 71` `updated ≤180d` A Model Context Protocol server that exposes Chess.com's public player data, game records, and club information as tools for AI assistants. <details><summary>More about</summary>

  It lets developers and AI agents query chess data programmatically without writing API wrappers, enabling chess analysis and tooling experiments directly inside MCP-compatible hosts.

  _We have finally achieved the future where your AI assistant can critique your blunders on Chess.com while you wait for it to debug your CI pipeline._

  `mcp` `chess` `api-wrapper` `game-data`
  </details>

- **[cryptopanic-mcp-server](https://github.com/kukapay/cryptopanic-mcp-server)** `⭐ 71` `updated ≤180d` An MCP server that exposes the CryptoPanic API to AI agents, allowing them to fetch the latest cryptocurrency news and media. <details><summary>More about</summary>

  It enables developers building crypto-focused AI agents to wire in real-time market news via a standardized protocol without writing custom API wrappers.

  _Finally, your coding agent can now panic-sell your portfolio in real-time based on the latest 'Bitcoin Breaks $60k' headline it fetched for itself._

  `mcp` `crypto` `finance` `agent-tooling`
  </details>

- **[geoserver-mcp](https://github.com/mahdin75/geoserver-mcp)** `⭐ 71` `updated ≤180d` An MCP server implementation that connects LLMs to the GeoServer REST API, enabling AI assistants to query and manage geospatial data, workspaces, and styles. <details><summary>More about</summary>

  It allows developers working with geospatial infrastructure to automate GeoServer administration and spatial queries through natural language via MCP-compatible clients like Claude or Cursor.

  _Finally, an AI wrapper for your spatial data server, ensuring your large language model can now hallucinate your map projections with unprecedented API-driven confidence._

  `mcp` `geoserver` `geospatial` `llm-integration`
  </details>

- **[Maya MCP](https://github.com/patrickpalmer/mayamcp)** `⭐ 71` `updated ≤1y` An MCP server that lets AI assistants like Claude Desktop control Autodesk Maya to list, create, and manipulate 3D scene objects via natural language. <details><summary>More about</summary>

  It bridges the gap between generative AI assistants and professional 3D pipelines, allowing developers and technical artists to script Maya scenes through conversation rather than MEL or Python.

  _We have finally achieved the singularity where an LLM can extrude a bevel in Maya, yet we still manually click 'Allow All' on a security warning to let it happen._

  `3d` `automation` `maya` `mcp`
  </details>

- **[MCP Open Library](https://github.com/8ensmith/mcp-open-library)** `⭐ 71` `updated ≤30d` An MCP server that exposes the Internet Archive's Open Library API as tools for book and author search within MCP-compatible AI assistants. <details><summary>More about</summary>

  It lets developers wire literary and bibliographic data directly into local AI workflows without writing custom API wrappers.

  _We now have a standardized protocol for asking an assistant about Tolkien, while the actual code review it was supposed to help with remains unstarted._

  `api-integration` `assistant-tools` `books` `mcp` `open-library`
  </details>

- **[mcp-openapi-schema-explorer](https://github.com/kadykov/mcp-openapi-schema-explorer)** `⭐ 71` `updated ≤30d` An MCP server that exposes OpenAPI and Swagger specifications through parameterized resource templates, allowing AI clients to query specific API details without loading entire specs into context windows. <details><summary>More about</summary>

  Developers using AI coding assistants can now explore and understand large API specifications on-demand without blowing through token limits or context windows.

  _We have finally built infrastructure to let AI efficiently read the same API docs that humans have been heroically ignoring since 2010._

  `mcp` `openapi` `context-engineering` `api-tools` `typescript`
  </details>

- **[piapi-mcp-server](https://github.com/apinetwork/piapi-mcp-server)** `⭐ 70` `updated ≤1y` A TypeScript MCP server that connects Claude and other MCP-compatible apps to PiAPI for generating images, video, music, 3D models, and other media content via APIs like Midjourney, Flux, and Kling. <details><summary>More about</summary>

  It lets developers invoke rich media generation directly from their MCP-aware workflows instead of wiring separate API clients by hand.

  _We’ve successfully unified the calling card of Midjourney, Suno, and Luma behind a single MCP server, so you can now over-engineer your CLIs to hallucinate 3D models while your actual codebase quietly rots._

  `mcp` `media-generation` `typescript` `claude` `piapi`
  </details>

- **[knowledge-rag](https://github.com/lyonzin/knowledge-rag)** `⭐ 69` `updated ≤30d` A local MCP server that lets Claude Code ingest and semantically search developer documentation, code, and notes across 20 file formats using hybrid search and reranking with no external API keys. <details><summary>More about</summary>

  It extends Claude Code with a private, local knowledge layer so developers can query their own docs, codebases, and notes without leaving the coding workflow or sending data to the cloud.

  _Yet another existential reminder that your carefully curated Obsidian vault and scattered README stash are now just a poorly chunked vector database waiting to be accidentally hallucinated into a production PR._

  `mcp` `rag` `local-ai` `claude-code` `knowledge-base`
  </details>

- **[nocodb-mcp-server](https://github.com/edwinbernadus/nocodb-mcp-server)** `⭐ 69` `updated ≤90d` A TypeScript-based Model Context Protocol (MCP) server that enables AI agents to perform CRUD operations and manage schema on NocoDB databases via natural language commands. <details><summary>More about</summary>

  It allows developers to hook NocoDB into their AI-assisted workflows, letting tools like Claude Desktop manipulate database records and columns without manual UI interaction.

  _We have successfully abstracted database management to the point where you can now typo your way into deleting an entire table via a vaguely phrased chat message._

  `mcp` `nocodb` `database` `typescript` `integration`
  </details>

- **[jetbrains-debugger-mcp-plugin](https://github.com/hechtcarmel/jetbrains-debugger-mcp-plugin)** `⭐ 68` `updated ≤90d` A JetBrains IDE plugin that exposes a Model Context Protocol (MCP) server, enabling AI coding assistants to programmatically control the debugger, set breakpoints, and inspect variables. <details><summary>More about</summary>

  It allows AI agents to autonomously investigate bugs and step through code execution directly within the familiar JetBrains IDE environment.

  _We have finally closed the loop: the AI can now debug the code it wrote, while you sit in the corner wondering if you should have become a carpenter._

  `jetbrains` `mcp` `debugging` `ide-plugin` `agent-tools`
  </details>

- **[mcp-server-atlassian-jira](https://github.com/aashari/mcp-server-atlassian-jira)** `⭐ 68` `updated ≤90d` A Node.js/TypeScript MCP server that exposes Atlassian Jira projects, issues, and development info to AI assistants like Claude and Cursor via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers query, create, and update Jira issues using natural language through their existing AI assistants instead of context-switching to the Jira UI.

  _We have successfully abstracted away the Jira interface, meaning you can now procrastinate on your tickets using conversational AI instead of clicking through a bloated web app._

  `mcp` `jira` `atlassian` `typescript` `integration`
  </details>

- **[DeepView MCP](https://github.com/ai-1st/deepview-mcp)** `⭐ 67` `updated ≤1y` A Model Context Protocol server that enables IDEs like Cursor and Windsurf to analyze large codebases by feeding repomixed repository files into Gemini's large context window. <details><summary>More about</summary>

  It allows developers to offload large-scale codebase comprehension to a model with a massive context window without leaving their AI-assisted IDE.

  _We have successfully abstracted the job of reading code into the job of packaging code into XML so a second AI can tell our first AI what the third AI already forgot._

  `context-window` `gemini` `ide-integration` `mcp`
  </details>

- **[lunchmoney-mcp](https://github.com/akutishevsky/lunchmoney-mcp)** `⭐ 67` `updated ≤30d` An MCP server that exposes LunchMoney's personal finance API as tools for AI assistants, enabling programmatic transaction management, budgeting, and crypto tracking. <details><summary>More about</summary>

  It lets developers integrate personal finance workflows directly into AI-assisted environments like Claude Desktop and CLI tools without writing custom API wrappers.

  _The natural end state of the MCP ecosystem is a personal AI accountant that gently judges your lunch spending while you debug a failing build at 3 PM._

  `mcp` `personal-finance` `typescript` `lunchmoney` `cli`
  </details>

- **[trace-mcp](https://github.com/nikolai-vysotskyi/trace-mcp)** `⭐ 67` `updated ≤30d` An MCP server that builds a framework-aware graph of a codebase or markdown vault once and serves it to AI agents, replacing repeated file reads and dependency traversal with graph queries. <details><summary>More about</summary>

  It cuts token usage by 40–50% and eliminates redundant context re-inflations, allowing coding agents to reason from precomputed structure instead of brute-forcing repo exploration.

  _We have finally built a tool to stop our agents from pretending they have short-term memory loss and re-reading the same file forty times in a single session._

  `mcp` `context-engineering` `token-optimization` `code-intelligence`
  </details>

- **[CalDAV MCP](https://github.com/dominik1001/caldav-mcp)** `⭐ 66` `updated ≤30d` A TypeScript Model Context Protocol server that exposes read and write calendar operations for CalDAV accounts as tools for AI assistants. <details><summary>More about</summary>

  Developers can wire AI agents into their existing CalDAV calendars, allowing assistants to create, update, and delete events directly from coding workflows or chat interfaces.

  _We have successfully reached the point where your AI needs a standardized protocol to argue with your calendar about whether that meeting actually happened._

  `caldav` `calendar` `mcp` `tools` `typescript`
  </details>

- **[debugg-ai-mcp](https://github.com/debugg-ai/debugg-ai-mcp)** `⭐ 65` `updated ≤30d` An MCP server that runs AI-powered browser agents to perform end-to-end testing and page probing against local or hosted URLs, returning pass/fail results with screenshots and network logs. <details><summary>More about</summary>

  It allows developers to describe browser tests in natural language via MCP-compatible clients, automating E2E validation and capturing HAR traces and console logs without writing traditional test scripts.

  _We have successfully abstracted away the tedious work of writing fragile Playwright scripts by replacing it with the equally tedious work of prompting an agent and praying the 25-step budget doesn't evaporate on a cookie banner._

  `mcp` `e2e-testing` `browser-agent` `automation`
  </details>

- **[mcp](https://github.com/getalby/mcp)** `⭐ 65` `updated ≤90d` An MCP server that connects a Bitcoin Lightning wallet to LLMs via Nostr Wallet Connect, enabling AI agents to send and receive payments. <details><summary>More about</summary>

  It allows developers building AI agents to integrate BTC micropayments natively into LLM workflows for paid APIs, metered access, or autonomous tipping.

  _Finally, your AI agent can independently bankrupt your Lightning wallet while you debug why it decided to tip a Nostr relay at 3 AM._

  `mcp` `bitcoin` `lightning` `nostr` `payments`
  </details>

- **[svgmaker-mcp](https://github.com/genwavellc/svgmaker-mcp)** `⭐ 65` `updated ≤30d` An MCP server that connects AI assistants to the SVGMaker API for generating, editing, and converting SVG images via natural language prompts in IDEs like Cursor and VS Code. <details><summary>More about</summary>

  It allows developers to create and iterate on vector assets directly within their coding environment without switching to design tools or writing SVG markup by hand.

  _We have successfully abstracted away the last remaining barrier to productivity: the terrifying prospect of writing a circle tag in XML._

  `mcp` `svg` `vector-graphics` `ide-integration`
  </details>

- **[heurist-mesh-mcp-server](https://github.com/heurist-network/heurist-mesh-mcp-server)** `⭐ 64` `updated ≤90d` An MCP server that exposes 30+ specialized Web3 and crypto analytics agents from Heurist Mesh to AI coding assistants like Claude and Cursor. <details><summary>More about</summary>

  It lets developers pipe crypto-native intelligence—token resolution, trending assets, and wallet analysis—directly into their AI editor workflows without writing custom API integrations.

  _Finally, your coding agent can explain DeFi yields to you while you silently wonder if adding a 'FundingRateAgent' to your stack is the definitive sign that the tooling singularity has peaked._

  `mcp` `web3` `crypto` `agent-skills`
  </details>

- **[mcp-miro](https://github.com/k-jarzyna/mcp-miro)** `⭐ 64` `updated ≤1y` An MCP server that connects AI assistants to the Miro API, allowing models like Claude to list, create, update, and delete boards, items, and workspace resources. <details><summary>More about</summary>

  Developers can now script and automate Miro board management or hand off diagramming workflows directly to their AI assistants instead of clicking through the UI.

  _We have finally achieved the future where an AI can autonomously reorganize your sticky notes while you wonder why you bother attending the retrospective._

  `mcp` `miro` `integration` `automation`
  </details>

- **[quran-mcp-server](https://github.com/djalal/quran-mcp-server)** `⭐ 64` `updated ≤1y` An MCP server that exposes the Quran.com REST API (v4) as tools for LLM clients, enabling verse search, translation, tafsir lookup, and audio recitation access. <details><summary>More about</summary>

  It lets developers quickly wire Islamic text and commentary into AI workflows, coding agents, or Claude Desktop without writing custom API integration code.

  _We now have a protocol for letting LLMs cite scripture with the same rigor they apply to Stack Overflow answers._

  `mcp` `quran` `api-integration` `llm-tools`
  </details>

- **[tasty-agent](https://github.com/ferdousbhai/tasty-agent)** `⭐ 64` `updated ≤30d` A Model Context Protocol server that connects Claude and other LLMs to TastyTrade brokerage accounts for portfolio monitoring, market data analysis, and automated options trading. <details><summary>More about</summary>

  Developers building AI-driven trading workflows can integrate real-time quotes, Greeks, and order execution directly into Claude Desktop or custom MCP clients without wrapping the TastyTrade API themselves.

  _We have finally achieved the apex of developer tooling: an MCP server that lets your AI assistant chase orders one tick at a time while you beg for more context window tokens to explain why your iron condor is bleeding._

  `mcp` `trading` `fintech` `tastytrade`
  </details>

- **[mcp_server_gdb](https://github.com/pansila/mcp_server_gdb)** `⭐ 63` `updated ≤1y` An MCP server that exposes GDB/MI debugging capabilities—session management, breakpoints, execution control, and memory inspection—so AI assistants can remotely debug applications. <details><summary>More about</summary>

  It lets coding agents tap into real GDB sessions to step through code, inspect state, and reason about runtime behavior instead of guessing from static context.

  _We’ve finally automated the one thing that used to force you to leave your terminal and remember how to use a watchpoint._

  `mcp` `debugging` `gdb` `agent-tooling`
  </details>

- **[MCP-CLI Adapter](https://github.com/inercia/mcpshell)** `⭐ 63` `updated ≤30d` A tool that wraps shell scripts as MCP-compatible servers so LLMs can safely execute command-line tools with parameter validation and optional sandboxing. <details><summary>More about</summary>

  It lets developers quickly expose existing CLI tooling to MCP clients like Cursor or VS Code without writing custom server code.

  _We have finally reached the point where we wrap a shell in a protocol wrapper so an LLM can run du for us, and somehow this is progress._

  `cli` `mcp` `security` `shell` `tooling`
  </details>

- **[mcp-design-system-extractor](https://github.com/freema/mcp-design-system-extractor)** `⭐ 63` `updated ≤180d` An MCP server that connects AI assistants to Storybook instances to extract component HTML, styles, metadata, and design tokens for design system analysis and refactoring. <details><summary>More about</summary>

  It lets AI coding agents directly inspect and understand your live design system components, bridging the gap between UI documentation and AI-assisted frontend development.

  _We have successfully abstracted the process of asking an AI to puppeteer a headless browser to scrape the HTML of a component we already wrote, just in case the AI forgot what a button looks like._

  `mcp` `design-system` `storybook` `frontend`
  </details>

- **[mcp-gsheets](https://github.com/freema/mcp-gsheets)** `⭐ 63` `updated ≤30d` An MCP server that lets AI clients like Claude Desktop, Cursor, and Cline read, write, and manage Google Sheets using the Google Sheets API. <details><summary>More about</summary>

  It allows developers to automate spreadsheet workflows and manipulate data via natural language prompts inside their existing AI-assisted development environments.

  _We have successfully abstracted away the joy of manually copy-pasting CSVs by turning Google Sheets into a stateful database for your LLM to quietly corrupt at 2 AM._

  `mcp` `google-sheets` `typescript` `automation` `nodejs`
  </details>

- **[imagen3-mcp](https://github.com/hamflx/imagen3-mcp)** `⭐ 62` `updated >1y` An MCP server that exposes Google's Imagen 3.0 image generation capabilities to AI clients like Cursor and Cherry Studio. <details><summary>More about</summary>

  It allows developers to generate images directly from their AI coding environments using Google's latest image models without leaving the workflow.

  _Finally, an MCP server to solve the critical developer problem of having to alt-tab to a browser to generate pictures of photorealistic terriers while writing code._

  `mcp` `image-generation` `gemini` `cursor` `cherry-studio`
  </details>

- **[agentkits-memory](https://github.com/aitytech/agentkits-memory)** `⭐ 61` `updated ≤90d` A local MCP-based memory server that persists coding decisions, errors, and context across sessions for AI assistants like Claude Code, Cursor, and Cline using SQLite. <details><summary>More about</summary>

  It addresses the 'amnesiac assistant' problem by injecting relevant past decisions and patterns into new sessions, reducing the need to re-explain codebase context.

  _We have finally solved the problem of AI assistants forgetting our bad decisions by building a local database specifically designed to remember them forever._

  `mcp` `memory` `context` `ai-assistants` `local-first`
  </details>

- **[ashra-mcp](https://github.com/getrupt/ashra-mcp)** `⭐ 61` `updated >1y` An MCP server that allows Claude Desktop to interface with Ashra's browser automation capabilities. <details><summary>More about</summary>

  It lets developers wire Ashra's automation features directly into their local Claude workflow via the Model Context Protocol.

  _Another day, another MCP server, because apparently the only way to make tools talk to each other now is adding another layer to the protocol tower._

  `mcp` `browser-automation` `ashra` `claude`
  </details>

- **[contentful-mcp](https://github.com/ivo-toby/contentful-mcp)** `⭐ 60` `updated ≤180d` A community-built MCP server that wraps the Contentful Management API to let AI agents perform CRUD operations on entries, assets, content types, and spaces. <details><summary>More about</summary>

  It lets developers and AI agents manage CMS content programmatically via chat surfaces like Claude Desktop instead of manually clicking through the Contentful UI.

  _We have officially reached the point where we need a wrapper so the AI can politely ask the CMS to publish a blog post without us having to open the browser._

  `mcp` `contentful` `cms` `agent-tooling`
  </details>

- **[mailtrap-mcp](https://github.com/mailtrap/mailtrap-mcp)** `⭐ 59` `updated ≤30d` An official MCP server that exposes Mailtrap's email sending, sandbox testing, templates, and inbox tools to AI coding agents and IDEs. <details><summary>More about</summary>

  It lets developers ask their AI assistant to send real emails, inspect sandbox inboxes, and manage templates without leaving the editor or writing API integration code.

  _We have successfully reached the point where your AI assistant now needs an API token just to debug your password reset email._

  `email-testing` `ide-integration` `mailtrap` `mcp`
  </details>

- **[mcp-difyworkflow-server](https://github.com/gotoolkits/mcp-difyworkflow-server)** `⭐ 59` `updated >1y` An MCP server that lets developers query and execute multiple custom Dify workflows directly from MCP-compatible clients. <details><summary>More about</summary>

  It bridges self-hosted Dify workflow automation into local AI clients, allowing developers to invoke complex orchestrations without leaving their coding environment.

  _We have finally achieved the architectural pinnacle of invoking a workflow that invokes an AI to help you invoke more workflows, all so you don't have to alt-tab away from your chat window._

  `mcp` `dify` `workflow` `server` `go`
  </details>

- **[notebooklm-mcp-secure](https://github.com/pantheon-security/notebooklm-mcp-secure)** `⭐ 59` `updated ≤30d` A security-hardened MCP server that lets AI agents like Claude query and manage Google NotebookLM notebooks with browser-based auth and enterprise compliance features. <details><summary>More about</summary>

  Developers can integrate grounded, zero-hallucination NotebookLM research directly into agent workflows without managing API keys or sacrificing enterprise security requirements.

  _We now have post-quantum encrypted bridges to query a product that Google might rename, deprecate, or absorb into Bard by next Tuesday._

  `mcp` `notebooklm` `security` `typescript` `agent-tooling`
  </details>

- **[ntfy-me-mcp](https://github.com/gitmotion/ntfy-me-mcp)** `⭐ 58` `updated ≤30d` An MCP server that allows AI agents to send and fetch notifications via ntfy.sh (public or self-hosted) with support for token auth, priorities, and rich formatting. <details><summary>More about</summary>

  It lets developers wire long-running AI tasks and agent loops into push notifications so they can stop staring at the terminal waiting for a completion.

  _We have finally achieved the future: an AI agent that runs so long we need a second protocol server just to ping us when the first protocol server is done thinking._

  `mcp` `notifications` `agent-tooling` `ntfy` `typescript`
  </details>

- **[esxi-mcp-server](https://github.com/bright8192/esxi-mcp-server)** `⭐ 57` `updated ≤1y` A Model Context Protocol server that exposes VMware ESXi and vCenter virtual machine management operations through a REST API with SSE communication. <details><summary>More about</summary>

  It allows developers and AI agents to automate VM lifecycle management and performance monitoring through a standardized MCP interface instead of manual vSphere interactions.

  _Because nothing says 'modern AI infrastructure' quite like wrapping your 2010-era hypervisor in a brand-new protocol and hoping the agent doesn't accidentally power off the production cluster._

  `mcp` `vmware` `infrastructure` `virtualization`
  </details>

- **[openzim-mcp](https://github.com/cameronrye/openzim-mcp)** `⭐ 57` `updated ≤30d` A Model Context Protocol server that provides AI models with structured, offline access to search and navigate ZIM-format knowledge archives like Wikipedia. <details><summary>More about</summary>

  It allows developers building RAG or agent workflows to offload massive knowledge bases to a local, high-performance server instead of stuffing context windows with raw text dumps.

  _Because the only thing better than an AI confidently hallucinating is an AI confidently hallucinating from a 40GB offline copy of Wikipedia it found via a specialized MCP server._

  `mcp` `offline` `knowledge-base` `zim` `python`
  </details>

- **[react-analyzer-mcp](https://github.com/azer/react-analyzer-mcp)** `⭐ 57` `updated >1y` An MCP server that analyzes React component files to extract props and structure, enabling AI assistants like Claude to document and inspect local React projects. <details><summary>More about</summary>

  It lets AI coding assistants understand and document your specific React component architecture without leaving the chat interface.

  _Yet another tool to ensure your AI can perfectly describe the component props you wrote but forgot to document because you were too busy setting up the MCP server._

  `mcp` `react` `documentation` `local-tools`
  </details>

- **[allvoicelab-mcp](https://github.com/allvoicelab/allvoicelab-mcp)** `⭐ 56` `updated ≤1y` An official MCP server that exposes AllVoiceLab's text-to-speech, voice cloning, and video translation APIs to MCP-compatible clients like Claude Desktop, Cursor, and Windsurf. <details><summary>More about</summary>

  It allows developers to integrate high-quality voice generation and video localization directly into AI-assisted workflows without building custom API wrappers.

  _Another niche API wraps itself in the MCP standard so your coding agent can now dub a telenovela while you debug a null pointer._

  `mcp` `tts` `voice-cloning` `video-translation` `api-wrapper`
  </details>

- **[hledger-mcp](https://github.com/iiatlas/hledger-mcp)** `⭐ 56` `updated ≤90d` A local MCP server that exposes HLedger CLI commands and journal files to AI assistants, enabling them to query balances, generate reports, and manage transactions. <details><summary>More about</summary>

  It allows developers to integrate plaintext accounting workflows directly into their AI-assisted development environment via the standardized MCP protocol.

  _We have successfully abstracted personal finance management to the point where an LLM can now argue with your double-entry bookkeeping while you are trying to ship a feature._

  `mcp` `hledger` `plaintext-accounting` `finance`
  </details>

- **[mcp-gitee](https://github.com/oschina/mcp-gitee)** `⭐ 56` `updated ≤30d` A Model Context Protocol (MCP) server that enables AI assistants to interact with Gitee's API for managing repositories, issues, pull requests, and notifications. <details><summary>More about</summary>

  It bridges the gap between AI coding agents and Gitee-hosted projects, allowing developers using tools like Cursor or Claude to automate repo management and issue-driven workflows.

  _Finally, your AI agent can now close its own issues on a platform that isn't GitHub, ensuring the sprawling context-window empire expands to every git forge in existence._

  `mcp` `gitee` `integration` `devops`
  </details>

- **[whale-tracker-mcp](https://github.com/kukapay/whale-tracker-mcp)** `⭐ 56` `updated ≤1y` A Python-based Model Context Protocol server that exposes cryptocurrency whale transaction data from the Whale Alert API to MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It allows developers and analysts to query real-time blockchain transaction data and perform analysis directly within their LLM-powered workflows without leaving the chat interface.

  _We have officially reached the point where we are building standardized protocols just to ask an AI to tell us that a Bitcoin whale moved $50 million to a cold wallet._

  `mcp` `crypto` `blockchain` `finance` `api`
  </details>

- **[last9-mcp-server](https://github.com/last9/last9-mcp-server)** `⭐ 55` `updated ≤30d` An MCP server that connects AI coding assistants like Claude and Cursor directly to production observability data including logs, metrics, traces, and alerts. <details><summary>More about</summary>

  Developers can ask their AI agent to debug production issues using real telemetry data instead of guessing based on code alone.

  _Your AI agent can now experience the same alert fatigue and log-scrolling paralysis that you spent three years automating away._

  `mcp` `observability` `monitoring` `debugging`
  </details>

- **[mailgun-mcp-server](https://github.com/mailgun/mailgun-mcp-server)** `⭐ 55` `updated ≤30d` An official Model Context Protocol server from Mailgun that exposes email sending, deliverability diagnostics, and account management APIs as tools for AI agents and MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It lets developers delegate email operations, template management, and DNS troubleshooting to local AI agents without writing custom API integration code.

  _We have successfully abstracted away the profound complexity of sending an email into a prompt, yet we still need a specialized local server to make the robot understand the API._

  `mcp` `mailgun` `email` `integrations`
  </details>

- **[adx-mcp-server](https://github.com/pab1it0/adx-mcp-server)** `⭐ 54` `updated ≤90d` A Model Context Protocol server that lets AI assistants query and explore Azure Data Explorer databases using KQL through standardized interfaces. <details><summary>More about</summary>

  It gives coding agents and MCP clients direct, structured access to ADX clusters, turning data exploration and KQL troubleshooting into a conversational workflow instead of a context-switching marathon.

  _We have successfully abstracted SQL-with-brackets so far away that you now need a protocol server just to ask an AI why your telemetry table is empty._

  `mcp` `azure-data-explorer` `kql` `database-tooling`
  </details>

- **[Crawlbase MCP](https://github.com/crawlbase/crawlbase-mcp)** `⭐ 54` `updated ≤30d` An MCP server that connects AI agents and LLMs to live web data via Crawlbase's scraping infrastructure, supporting JavaScript rendering, anti-bot evasion, and structured outputs. <details><summary>More about</summary>

  It gives coding agents and IDEs the ability to fetch fresh, structured web content in real time instead of relying on outdated training data.

  _Your agent can now hallucinate about today's Hacker News instead of last year's, provided you've configured three tokens and convinced the anti-bot gods to cooperate._

  `agent-tools` `llm-integration` `mcp` `web-scraping`
  </details>

- **[discourse-mcp](https://github.com/discourse/discourse-mcp)** `⭐ 54` `updated ≤90d` An official MCP server from Discourse that exposes forum capabilities as tools and resources for AI agents to read and write posts, topics, and users. <details><summary>More about</summary>

  Developers can now wire AI agents directly into community forums to automate support, moderation, and knowledge-base workflows without building custom API wrappers.

  _We have finally achieved the singularity: an AI agent that can argue with users on your forum, entirely unburdened by the need to understand your community guidelines._

  `mcp` `discourse` `agent-tooling` `forum-automation`
  </details>

- **[globalping-mcp-server](https://github.com/jsdelivr/globalping-mcp-server)** `⭐ 54` `updated ≤30d` A remote MCP server that exposes Globalping's worldwide network measurement probes (ping, traceroute, DNS, MTR, HTTP) to LLMs via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers delegate network debugging and performance comparisons across global locations to their AI assistant instead of manually chaining CLI commands.

  _We have finally closed the gap between asking a chatbot for help and having it accidentally traceroute your production infrastructure from three continents at once._

  `mcp` `networking` `devops` `debugging`
  </details>

- **[gotohuman-mcp-server](https://github.com/gotohuman/gotohuman-mcp-server)** `⭐ 54` `updated ≤1y` An MCP server that lets AI agents and workflows request human approvals via gotoHuman's managed human-in-the-loop platform with a customizable UI, webhooks, and team features. <details><summary>More about</summary>

  It gives developers a drop-in way to add human oversight to autonomous agent workflows, helping prevent agents from silently making bad decisions without building a custom review system.

  _We have finally built the corporate approval layer for the thing that was supposed to eliminate the corporate approval layer._

  `agent-orchestration` `approval-workflow` `human-in-the-loop` `mcp` `workflow-automation`
  </details>

- **[safari-mcp](https://github.com/achiya-automation/safari-mcp)** `⭐ 54` `updated ≤30d` A Model Context Protocol server that enables AI agents to automate Safari on macOS via 80 native AppleScript tools, preserving logged-in sessions and using significantly less CPU than Chrome-based alternatives. <details><summary>More about</summary>

  It allows coding agents and AI workflows to drive a real, authenticated browser session on Apple Silicon Macs without the overhead of headless Chrome or separate browser dependencies.

  _We have successfully rebuilt the browser automation stack for the third time this month, this time specifically so your AI can burn 60% less CPU while still failing to click the correct 'Accept Cookies' button in Safari._

  `mcp` `browser-automation` `safari` `macos` `apple-silicon`
  </details>

- **[trello-mcp-server](https://github.com/m0xai/trello-mcp-server)** `⭐ 54` `updated ≤1y` A Model Context Protocol server that exposes Trello board, list, and card operations for integration with MCP-compatible AI clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It allows developers to manage project boards and tasks directly through their AI host, bridging project management workflows with conversational coding assistants.

  _We have successfully reached the point where an AI agent needs a dedicated server just to move a card from 'In Progress' to 'Done' while you watch._

  `mcp` `trello` `integrations` `automation`
  </details>

- **[Whois MCP](https://github.com/bharathvaj-ganesan/whois-mcp)** `⭐ 54` `updated >1y` An MCP server that enables AI agents like Claude Desktop and Cursor to perform WHOIS lookups for domains, IPs, TLDs, and autonomous system numbers. <details><summary>More about</summary>

  It allows developers to check domain availability and registration details directly through their AI assistant without switching to a browser or external lookup tools.

  _We have successfully reached the point where we need a specialized protocol server so our AI can check if a domain is taken, sparing us the unimaginable burden of typing 'whois' in a terminal._

  `claude` `cursor` `mcp` `networking` `whois`
  </details>

- **[crypto-feargreed-mcp](https://github.com/kukapay/crypto-feargreed-mcp)** `⭐ 53` `updated ≤1y` A Model Context Protocol server that exposes real-time and historical cryptocurrency Fear & Greed Index data for integration with MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It allows developers building crypto-focused agents or analytics tools to enrich LLM context with market sentiment data without writing custom API wrappers.

  _We have officially reached the point where our AI assistants need their own specialized servers just to tell them whether the market is feeling brave or cowardly today._

  `mcp` `crypto` `finance` `data-api` `claude-desktop`
  </details>

- **[user-feedback-mcp](https://github.com/mrexodia/user-feedback-mcp)** `⭐ 53` `updated >1y` A Model Context Protocol server that enables human-in-the-loop workflows by prompting users for feedback within AI coding tools like Cline and Cursor. <details><summary>More about</summary>

  It allows autonomous coding agents to pause and request user validation before completing tasks, bridging the gap between agent autonomy and developer oversight.

  _We have finally achieved the technological pinnacle of building an MCP server just to ask the human if the robot can stop working now._

  `mcp` `human-in-the-loop` `cursor` `cline` `feedback`
  </details>

- **[mcp-server](https://github.com/harness/mcp-server)** `⭐ 52` `updated ≤30d` An official MCP server that exposes the full Harness.io platform to AI agents through 11 consolidated tools and 168 resource types. <details><summary>More about</summary>

  It allows developers to manage CI/CD, feature flags, cloud costs, and security testing across the Harness platform via natural language in their AI clients.

  _We have successfully abstracted an already abstracted CI/CD platform into 11 tools so your LLM can burn tokens deciding which resource type you meant._

  `agent-tooling` `ai-agents` `ci-cd` `devops` `harness` `mcp` `platform` `sdlc`
  </details>

- **[nvim-mcp](https://github.com/paulburgess1357/nvim-mcp)** `⭐ 52` `updated ≤30d` An MCP server that connects AI agents to a running Neovim instance via its native msgpack-RPC socket, enabling agents to read, edit, and command the editor without requiring plugins. <details><summary>More about</summary>

  It allows coding agents like Claude Code and Cursor to directly see your editor state and manipulate buffers in memory, bridging the gap between autonomous AI workflows and the terminal editor.

  _We have finally achieved the platonic ideal of a 2026 workflow: an AI agent accidentally running macros in a 40-split Neovim instance that you connected to it via a Python script._

  `neovim` `mcp` `coding-agent` `editor-integration` `msgpack`
  </details>

- **[simulator-mcp-server](https://github.com/joshuarileydev/simulator-mcp-server)** `⭐ 52` `updated >1y` An MCP server that exposes iOS simulator functionality—listing, booting, installing apps, and launching them—as tools for AI assistants to control. <details><summary>More about</summary>

  It lets AI coding agents directly manipulate iOS simulators, bridging the gap between code generation and on-device mobile testing without manual intervention.

  _We’ve successfully reached the point where your AI agent now needs its own MCP server just to argue with the iOS Simulator on your behalf._

  `mcp` `ios` `simulator` `mobile-testing` `developer-tools`
  </details>

- **[mcp_server_notify](https://github.com/cactusinhand/mcp_server_notify)** `⭐ 51` `updated ≤1y` A Model Context Protocol server that triggers cross-platform desktop notifications with sound effects when an AI agent finishes a task. <details><summary>More about</summary>

  It reduces context-switching by letting developers step away while long-running agent tasks complete, pinging them only when attention is actually required.

  _We have successfully introduced notification anxiety into the one relationship where we thought we were the ones in control: the one with our autonomous code agents._

  `mcp` `notifications` `agent-workflow` `cross-platform`
  </details>

- **[mcp-server-atlassian-confluence](https://github.com/aashari/mcp-server-atlassian-confluence)** `⭐ 51` `updated ≤90d` A Node.js/TypeScript MCP server that connects AI assistants to Atlassian Confluence, providing tools to list spaces, retrieve pages as Markdown, and search using CQL. <details><summary>More about</summary>

  It allows developers to query internal documentation, API guides, and specs directly from their AI assistant without context-switching to the browser.

  _We have successfully reached the point where the AI needs an adapter just to read the documentation we were too busy prompting to write._

  `mcp` `confluence` `typescript` `knowledge-base` `integration`
  </details>

- **[buildkite-mcp-server](https://github.com/buildkite/buildkite-mcp-server)** `⭐ 50` `updated ≤30d` An official MCP server from Buildkite that exposes pipeline, build, job, and test data to AI tools and editors. <details><summary>More about</summary>

  It allows AI coding assistants to query live CI/CD state and debug failing pipelines directly within the development environment.

  _Now your AI can watch your build fail in real-time and offer consoling hallucinations before you've even had your coffee._

  `buildkite` `ci-cd` `devops` `mcp` `mcp-artifact` `no-tool` `placeholder` `redirect` `registry` `tooling` `unknown`
  </details>

- **[fast-filesystem-mcp](https://github.com/efforthye/fast-filesystem-mcp)** `⭐ 50` `updated ≤30d` A high-performance Model Context Protocol (MCP) server that provides secure filesystem access with large file handling, streaming, and backup capabilities for Claude and other AI assistants. <details><summary>More about</summary>

  It gives AI assistants the ability to safely perform complex file operations like chunked reading, streaming writes, and directory synchronization directly within a developer's filesystem.

  _We have now successfully abstracted away the act of typing 'rm -rf' into a JSON-configured MCP server with retry logic and timestamped backups, just in case the AI needs a safety net for its existential file management crises._

  `mcp` `filesystem` `claude` `developer-tools` `nodejs`
  </details>

- **[joshuarileydev/supabase-mcp-server](https://github.com/joshuarileydev/supabase-mcp-server)** `⭐ 50` `updated >1y` A Model Context Protocol (MCP) server that exposes the Supabase Management API to AI models for programmatic project and organization management. <details><summary>More about</summary>

  It allows coding agents to directly provision, configure, and manage Supabase infrastructure without the developer switching context to the dashboard.

  _We have successfully abstracted the dashboard away so your AI can now build, deploy, and accidentally delete your entire backend while you watch in muted horror._

  `automation` `backend` `infrastructure` `mcp` `supabase`
  </details>

- **[linkedapi-mcp](https://github.com/linked-api/linkedapi-mcp)** `⭐ 50` `updated ≤30d` An MCP server that connects AI assistants like Claude and Cursor to LinkedIn accounts for searching leads, analyzing profiles, and automating messages via a cloud browser. <details><summary>More about</summary>

  It allows developers to automate sales, recruitment, and market research workflows on LinkedIn directly from their existing AI coding environments.

  _We have finally bridged the gap between sophisticated IDE integrations and the desperate urge to automate sending cold DMs at 3 AM._

  `agents` `api` `automation` `browser-automation` `linkedin` `mcp` `sales-automation`
  </details>

- **[mcp-browser-kit](https://github.com/ndthanhdev/mcp-browser-kit)** `⭐ 50` `updated ≤30d` An MCP server paired with a browser extension that allows AI assistants to interact with and control your local web browsers. <details><summary>More about</summary>

  It bridges the gap between coding agents and live web environments, enabling AI workflows that can directly manipulate tabs, click buttons, and automate browser tasks without leaving the chat interface.

  _We have finally achieved the singularity where your AI assistant can star a GitHub repo in your browser while you wonder why you still have to manually load unpacked extensions in chrome://extensions._

  `mcp` `browser-automation` `ai-workflow`
  </details>

- **[mcp-codebase-index](https://github.com/mikerecognex/mcp-codebase-index)** `⭐ 50` `updated ≤90d` An MCP server that indexes codebases by parsing structural metadata (functions, classes, imports, dependency graphs) and exposes 17 query tools to AI clients for efficient code navigation with claimed 87% token reduction. <details><summary>More about</summary>

  It lets coding agents like Claude Code navigate and understand large codebases through targeted queries instead of expensive full-file reads, with automatic incremental re-indexing via git diff detection.

  _We have reached the point where we need a dedicated server to remind the AI that the function it wrote thirty seconds ago actually exists in the file it just indexed._

  `mcp-server` `codebase-indexing` `context-engineering` `token-reduction`
  </details>

- **[nvim-mcp](https://github.com/linw1995/nvim-mcp)** `⭐ 50` `updated ≤30d` A Model Context Protocol server that connects AI assistants to running Neovim instances, exposing LSP diagnostics, code actions, and buffer contents as structured tools and resources. <details><summary>More about</summary>

  It allows coding agents to tap directly into your live editor session to analyze diagnostics, hover definitions, and apply fixes without leaving the context of your open buffers.

  _You have now successfully automated the part of your job where you stared at the red squiggly lines in your editor, which means the only thing left for you to do is configure the tool that reads the squiggly lines._

  `mcp` `neovim` `lsp` `editor-integration`
  </details>

- **[context-awesome](https://github.com/bh-rat/context-awesome)** `⭐ 49` `updated ≤30d` An MCP server and CLI that exposes over 8,500 GitHub awesome lists and 1M+ indexed items to AI agents for structured resource discovery. <details><summary>More about</summary>

  It gives coding agents a curated, high-signal alternative to random web searches when looking for libraries, tools, and learning resources.

  _Your agent can now recursively cite awesome lists to justify its choices, turning dependency selection into a citation-tree nightmare._

  `mcp` `awesome-lists` `cli` `context` `agent-tools`
  </details>

- **[metoro-mcp-server](https://github.com/metoro-io/metoro-mcp-server)** `⭐ 49` `updated ≤90d` An MCP server that exposes Metoro's Kubernetes observability data to LLMs like Claude Desktop, allowing developers to query cluster telemetry using natural language. <details><summary>More about</summary>

  It lets developers bypass dashboard fatigue by querying eBPF-generated Kubernetes traces, metrics, and logs directly through their AI assistant.

  _Instead of learning kubectl or reading docs, you can now debug a complex microservices outage by politely asking a chat window that might hallucinate the status of your pods._

  `mcp` `kubernetes` `observability` `monitoring` `llm-integration`
  </details>

- **[oatpp-mcp](https://github.com/oatpp/oatpp-mcp)** `⭐ 49` `updated >1y` An implementation of the Model Context Protocol for the Oat++ C++ web framework that auto-generates MCP tools from API controllers. <details><summary>More about</summary>

  It allows C++ developers to expose their existing Oat++ REST APIs as MCP servers so LLMs can interact with backend services using generated tools over STDIO or HTTP SSE.

  _Now you can wrap your decade-old C++ REST service in a protocol your LLM barely understands, just to debug a stack trace you could have read in five seconds._

  `mcp` `cpp` `oatpp` `backend` `llm-integration`
  </details>

- **[mcp_weather_server](https://github.com/isdaniel/mcp_weather_server)** `⭐ 48` `updated ≤30d` A Model Context Protocol server that exposes weather and air quality data via the Open-Meteo API, supporting stdio, SSE, and Streamable HTTP transports. <details><summary>More about</summary>

  It provides a ready-to-use, multi-transport MCP server that developers can plug into their AI clients to add location-based weather context without building their own API integration.

  _We have successfully modularized checking the weather into a protocol server, because apparently asking a model to read a forecast was one abstraction layer too few._

  `mcp` `weather` `python` `api-integration` `open-meteo`
  </details>

- **[mcp-databricks-server](https://github.com/jordineil/mcp-databricks-server)** `⭐ 48` `updated >1y` A Model Context Protocol server that connects to Databricks to let LLMs run SQL queries, list jobs, and check job status via natural language. <details><summary>More about</summary>

  It allows developers to hook Databricks workspaces into MCP-compatible assistants so they can query warehouses and inspect jobs without leaving their AI workflow.

  _One more MCP server to the pile, proving that the official way to tame your data platform is now a community Python script with a .env file and 48 stars._

  `mcp` `databricks` `sql` `integration`
  </details>

- **[mcp-server-ledger](https://github.com/minhyeoky/mcp-server-ledger)** `⭐ 48` `updated ≤1y` An MCP server that exposes Ledger CLI's double-entry accounting commands to AI assistants, enabling LLMs to query financial data, generate reports, and analyze budgets via a standardized interface. <details><summary>More about</summary>

  It allows developers to integrate plain-language financial analysis into their local AI workflows, bridging the gap between personal accounting files and assistant-driven data queries.

  _We have finally reached the point where you can ask an LLM to explain why you are broke, and it will happily parse your Ledger file to confirm the math._

  `mcp` `finance` `cli` `accounting` `local-ai`
  </details>

- **[vercel-ai-docs-mcp](https://github.com/ivanamador/vercel-ai-docs-mcp)** `⭐ 48` `updated >1y` An MCP server that indexes the Vercel AI SDK documentation and exposes semantic search and AI-powered Q&A tools to compatible clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It lets developers query canonical Vercel AI SDK docs directly from their editor or assistant, reducing context-switching when wiring up AI features.

  _We have now successfully built an AI agent whose entire job is to read the documentation of the SDK that builds AI agents, completing the ouroboros._

  `mcp` `vercel` `documentation` `context-retrieval`
  </details>

- **[bonnard-cli](https://github.com/bonnard-data/bonnard-cli)** `⭐ 47` `updated ≤90d` An open-source CLI tool for defining an agent-native semantic analytics layer that scaffolds project schemas and generates reusable skills for coding agents like Claude Code, Cursor, and Codex. <details><summary>More about</summary>

  It lets developers define metrics once and expose them to AI agents via MCP and SDKs, preventing the metric drift that usually occurs when dashboards and LLMs query the same warehouse.

  _We have successfully abstracted the abstraction, meaning your AI agent now needs a CLI tool just to understand the metrics your BI tool already misunderstood._

  `analytics` `cli` `mcp` `semantic-layer` `skills`
  </details>

- **[coinmarket-mcp-server](https://github.com/anjor/coinmarket-mcp-server)** `⭐ 47` `updated ≤1y` A Model Context Protocol server that exposes CoinMarketCap API endpoints as tools to provide cryptocurrency listings and quotes within MCP-compatible AI clients. <details><summary>More about</summary>

  Developers wiring AI assistants into trading or crypto workflows can give their agents live market data without writing custom API integration code.

  _We have successfully abstracted checking Bitcoin prices into a protocol negotiation, because typing the URL manually was far too hands-on._

  `mcp` `crypto` `finance` `api-wrapper`
  </details>

- **[crypto-sentiment-mcp](https://github.com/kukapay/crypto-sentiment-mcp)** `⭐ 47` `updated >1y` An MCP server that provides cryptocurrency sentiment analysis, social volume tracking, and trending word detection to AI agents by integrating with Santiment's API. <details><summary>More about</summary>

  It allows developers building AI agents to easily inject real-time crypto market mood and social dominance data into their workflows without writing custom API integrations.

  _Finally, your AI agent can panic-sell Bitcoin at the exact moment it detects the word 'bubble' trending on social media._

  `mcp` `crypto` `sentiment-analysis` `finance` `agent-tooling`
  </details>

- **[hop](https://github.com/danmartuszewski/hop)** `⭐ 47` `updated ≤30d` A fast SSH connection manager with a TUI dashboard that also exposes an MCP server for AI assistants to search connections and run commands on remote servers. <details><summary>More about</summary>

  It flattens complex SSH workflows into fuzzy-matched hops while giving AI agents a structured interface to safely manage infrastructure connections.

  _We have finally reached the point where the AI needs its own dedicated protocol just to figure out which server you forgot you were SSH'd into._

  `ssh` `mcp` `cli` `tui` `devops`
  </details>

- **[mcp-netbird](https://github.com/aantti/mcp-netbird)** `⭐ 47` `updated >1y` An MCP server that exposes Netbird network resources—peers, groups, policies, and posture checks—to LLM clients via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers query and understand their overlay network topology and security policies directly through AI assistants instead of manually navigating the Netbird API.

  _We have successfully reached the point where we need a protocol server to ask an AI what our own network configuration looks like._

  `mcp` `netbird` `networking` `go`
  </details>

- **[norman-mcp-server](https://github.com/norman-finance/norman-mcp-server)** `⭐ 45` `updated ≤30d` An MCP server that connects Norman's bookkeeping, invoicing, and VAT filing platform to Claude, Cursor, and other MCP-compatible AI clients so entrepreneurs can manage finances via chat. <details><summary>More about</summary>

  Developers running solo businesses can automate German tax prep, invoice tracking, and transaction categorization directly inside their existing AI coding and chat workflows instead of switching to a separate finance dashboard.

  _We have successfully reached the point where filing VAT returns is just another context window away, right between debugging a React hook and arguing with an AI about semicolons._

  `mcp` `bookkeeping` `finance` `german-tax` `cursor`
  </details>

- **[serial-mcp-server](https://github.com/adancurusul/serial-mcp-server)** `⭐ 45` `updated ≤1y` A Rust-based MCP server that exposes serial port communication tools (list, open, read, write, close) so AI assistants can interact with embedded hardware like STM32, Arduino, and ESP32. <details><summary>More about</summary>

  It lets developers use Claude and other MCP clients to debug, control, and script physical hardware directly through natural language instead of manual serial terminals.

  _We have successfully bridged the gap between trillion-parameter language models and toggling an LED on a $3 microcontroller via a JSON config._

  `mcp` `embedded` `hardware` `rust` `serial`
  </details>

- **[algorand-mcp](https://github.com/goplausible/algorand-mcp)** `⭐ 44` `updated ≤30d` An MCP server that exposes Algorand blockchain operations, wallet management, and DeFi integrations as tools for AI agents and LLMs. <details><summary>More about</summary>

  It lets developers building AI agents give them secure, granular access to Algorand accounts, transactions, and DEX protocols without wiring raw blockchain APIs by hand.

  _Now your AI agent can rekey your wallet and swap on Tinyman while you wonder whether the 44-star server or the LLM is the one losing your testnet funds._

  `mcp` `algorand` `blockchain` `defi` `agent-tools`
  </details>

- **[arch-mcp](https://github.com/nihalxkumar/arch-mcp)** `⭐ 44` `updated ≤90d` An MCP server that lets AI assistants query the Arch Wiki, AUR, and local pacman state to help developers manage Arch Linux systems and packages. <details><summary>More about</summary>

  It gives coding agents structured, safe access to Arch ecosystem data so they can suggest package installs, diagnose issues, and translate distro-specific commands without hallucinating wiki excerpts.

  _We have successfully built infrastructure so your AI can argue with you about which AUR helper to install before you inevitably break your system anyway._

  `mcp` `arch-linux` `aur` `system-management`
  </details>

- **[codebase-context](https://github.com/patricksys/codebase-context)** `⭐ 44` `updated ≤30d` A local-first MCP server that maps a codebase's architecture, patterns, and conventions to provide bounded context and semantic search for AI agents. <details><summary>More about</summary>

  It helps AI agents stop generating 'correct' but architecturally misaligned code by grounding them in the team's actual current patterns and git history before they start editing.

  _We have successfully reached the point where we need dedicated infrastructure just to teach the AI that the three-year-old deprecated pattern is not, in fact, the architectural north star._

  `mcp` `context-engineering` `local-first` `semantic-search` `codebase-mapping`
  </details>

- **[mcp_safe_local_python_executor](https://github.com/maxim-saplin/mcp_safe_local_python_executor)** `⭐ 44` `updated ≤1y` A stdio MCP server that wraps Hugging Face's LocalPythonExecutor to provide a safer, Docker-free local Python runtime for executing LLM-generated code via MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  Developers can give LLM clients a local code execution capability with restricted imports and no file I/O, avoiding the heavy setup of containers or the risks of raw eval().

  _Another day, another layer of wrapping around a wrapper so we can safely execute hallucinated Python without accidentally formatting our hard drive._

  `mcp` `code-execution` `local-runtime` `safety` `smolagents`
  </details>

- **[mcp-servers-kagi](https://github.com/ac3xx/mcp-servers-kagi)** `⭐ 44` `updated >1y` A TypeScript-based Model Context Protocol server that integrates the Kagi Search API, allowing AI assistants like Claude to perform web searches via MCP. <details><summary>More about</summary>

  It enables developers to augment their local AI assistants with real-time web search capabilities from Kagi, bridging the gap between private LLMs and live internet data.

  _Just what we needed: another middleware layer so our AI can argue with us using search results we explicitly opted out of by paying for Kagi._

  `mcp` `kagi` `search` `typescript` `integration`
  </details>

- **[mcp-tasks](https://github.com/flesler/mcp-tasks)** `⭐ 44` `updated ≤1y` An MCP server that provides task management capabilities with multi-format support (Markdown, JSON, YAML) for AI assistants like Claude and Cursor. <details><summary>More about</summary>

  It gives coding agents structured, budget-efficient tooling to track work without handing them free rein to rewrite your task files.

  _Another MCP server so the assistant can tick its own boxes while you wonder who is actually managing whom._

  `mcp` `task-management` `cursor` `claude`
  </details>

- **[producthunt-mcp-server](https://github.com/jaipandya/producthunt-mcp-server)** `⭐ 44` `updated >1y` A Model Context Protocol server that exposes Product Hunt's API to MCP-compatible clients like Claude Desktop and Cursor for browsing posts, comments, and user data. <details><summary>More about</summary>

  It lets developers pipe Product Hunt discovery directly into their AI workflows without writing custom API glue or leaving the IDE.

  _Now your AI agent can doom-scroll Product Hunt for you, ensuring you feel behind on the latest AI wrappers without even opening a browser._

  `mcp` `product-hunt` `api-integration` `context-protocol`
  </details>

- **[mcp-server-ipinfo](https://github.com/briandconnelly/mcp-server-ipinfo)** `⭐ 43` `updated ≤30d` A Model Context Protocol server that provides IP geolocation, ISP, and residential proxy data via the IPInfo API for integration into MCP-compatible developer tools. <details><summary>More about</summary>

  It allows AI agents and developer environments to resolve IP addresses to physical locations and network details without the developer writing API integration code.

  _We have successfully abstracted the process of figuring out where a packet claims to be from behind a standardized protocol, ensuring our agents can now argue about geography with the same confidence they argue about semicolons._

  `mcp` `ip-geolocation` `developer-tools` `networking`
  </details>

- **[powertools-mcp](https://github.com/aws-powertools/powertools-mcp)** `⭐ 43` `updated ≤30d` An official MCP server from AWS Powertools that enables LLM agents to search Powertools for AWS Lambda documentation and examples across multiple runtimes. <details><summary>More about</summary>

  It allows AI coding agents and IDEs to pull accurate, context-specific Lambda utility documentation directly into the development workflow instead of guessing from stale training data.

  _We have now successfully abstracted reading documentation into a protocol that requires an agent to read the documentation for us._

  `mcp` `aws` `lambda` `documentation` `context`
  </details>

- **[mcp-server-leetcode](https://github.com/doggybee/mcp-server-leetcode)** `⭐ 42` `updated >1y` An MCP server that exposes LeetCode problems, user profiles, and contest data via GraphQL for integration with AI assistants like Claude for Desktop. <details><summary>More about</summary>

  It lets coding agents fetch and solve algorithm problems directly from LeetCode without the developer switching contexts to a browser.

  _We have finally achieved the singularity: an MCP server so your AI can grind LeetCode grind-sets while you wonder if your own job is just a prompt away from being automated._

  `mcp` `leetcode` `cli` `graphql` `coding-practice`
  </details>

- **[mermaid-mcp](https://github.com/narasimhaponnada/mermaid-mcp)** `⭐ 42` `updated ≤1y` An MCP server that lets AI coding assistants like GitHub Copilot and Claude generate Mermaid diagrams from natural language and output production-ready SVG files. <details><summary>More about</summary>

  It allows developers to generate architecture diagrams, flowcharts, and sequence diagrams directly from their IDE chat without leaving the coding workflow.

  _We have successfully abstracted away the last remaining excuse for not updating the architecture diagrams, so your documentation debt is now entirely a prompt-engineering problem._

  `mcp` `diagrams` `mermaid` `devtools` `vscode`
  </details>

- **[bruno-mcp](https://github.com/hungthai1401/bruno-mcp)** `⭐ 41` `updated ≤1y` An MCP server that allows LLMs to execute Bruno API test collections and return detailed results through a standardized interface. <details><summary>More about</summary>

  It lets AI agents run existing API test suites and report outcomes directly, bridging automated testing with agentic workflows.

  _We have successfully taught the AI to run the tests we were too busy prompting to write ourselves._

  `mcp` `testing` `bruno` `api-testing`
  </details>

- **[dexpaprika-mcp](https://github.com/coinpaprika/dexpaprika-mcp)** `⭐ 41` `updated ≤30d` A Model Context Protocol server that exposes real-time and historical cryptocurrency, DEX, and DeFi data from DexPaprika to AI assistants like Claude without requiring API keys. <details><summary>More about</summary>

  Developers building crypto-focused AI workflows can connect Claude or other MCP clients to live DEX data across multiple blockchains in minutes rather than writing custom API integrations.

  _We have successfully reached the point where querying Uniswap pool liquidity requires a protocol translation layer between your chatbot and a blockchain indexer._

  `mcp` `crypto` `defi` `data-api` `claude`
  </details>

- **[dune-analytics-mcp](https://github.com/kukapay/dune-analytics-mcp)** `⭐ 40` `updated >1y` A Model Context Protocol server that exposes Dune Analytics query execution and results fetching to AI agents via two tools returning CSV-formatted data. <details><summary>More about</summary>

  It lets AI agents directly query on-chain data without developers wiring up Dune API calls by hand.

  _You now have an agent that can run a crypto query you wrote six months ago and forgot, which somehow feels like both a superpower and a liability._

  `mcp` `dune-analytics` `web3` `data`
  </details>

- **[elisp-dev-mcp](https://github.com/laurynas-biveinis/elisp-dev-mcp)** `⭐ 40` `updated ≤30d` An Emacs package that runs an MCP server inside the editor, giving AI agents structured access to Elisp function definitions, documentation, and Info lookups. <details><summary>More about</summary>

  It lets coding agents work directly inside Emacs to read, navigate, and manipulate Elisp code using the same APIs a human developer would use.

  _You can now ask an AI agent to refactor your .emacs config, which is the exact moment your hobby stops being a text editor and starts being a runaway lisp encounter._

  `emacs` `mcp` `elisp` `agent-tooling` `llm-integration`
  </details>

- **[email-mcp](https://github.com/codefuturist/email-mcp)** `⭐ 40` `updated ≤30d` A Model Context Protocol server that exposes full IMAP and SMTP email capabilities, allowing AI assistants to read, search, send, schedule, and triage messages across multiple accounts. <details><summary>More about</summary>

  It turns a generic coding agent into an email client, letting you automate entire communication workflows like triage, follow-ups, and calendar extraction directly from your assistant.

  _We have finally achieved the future: your AI can now silently read your inbox, judge your pending replies, and schedule emails while you wonder if you are the one working for the agent._

  `mcp` `email` `imap` `smtp` `typescript`
  </details>

- **[storyblok-mcp-server](https://github.com/kiran1689/storyblok-mcp-server)** `⭐ 40` `updated ≤1y` A Python-based MCP server that exposes the full Storyblok Management API as tools, allowing AI assistants to perform CRUD operations on stories, components, assets, and workflows. <details><summary>More about</summary>

  It allows developers to manage headless CMS content structures and assets directly through their AI assistant rather than manually navigating the Storyblok UI or writing custom API scripts.

  _We have successfully abstracted away the UI for the CMS that was already abstracting away the database, bringing us one step closer to asking a bot to ask a bot to update a component schema._

  `mcp` `storyblok` `cms` `python` `api`
  </details>

- **[copilot-money-mcp](https://github.com/ignaciohermosillacornejo/copilot-money-mcp)** `⭐ 39` `updated ≤30d` An MCP server that reads locally cached Copilot Money personal finance data from a Mac and exposes it to AI assistants like Claude Desktop and Cursor via 17 read-only tools. <details><summary>More about</summary>

  It demonstrates how developers can build local-first MCP servers to safely bridge proprietary desktop app data with AI workflows without cloud sync or vendor APIs.

  _We have successfully reached the point where we need a protocol server to ask an AI why we are poor, but at least the query runs with zero network requests._

  `mcp` `personal-finance` `local-first` `typescript` `developer-tools`
  </details>

- **[BGG MCP](https://github.com/kkjdaniel/bgg-mcp)** `⭐ 38` `updated ≤30d` An MCP server that exposes BoardGameGeek board game data, user collections, and forum content to AI assistants via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers quickly wire rich board game data into LLM workflows, agents, or chat interfaces without writing custom API integrations.

  _We now have a rigorously versioned, Go-powered MCP server for board game trades while our actual production APIs remain hand-crafted, untested chaos._

  `boardgamegeek` `go` `mcp` `mcp-server`
  </details>

- **[bitrise-mcp](https://github.com/bitrise-io/bitrise-mcp)** `⭐ 38` `updated ≤30d` An MCP server that exposes the Bitrise API as tools for AI assistants, enabling app management, build operations, and artifact handling across IDEs and CLIs. <details><summary>More about</summary>

  Developers can trigger and inspect CI/CD builds directly from their AI editor or agent without context-switching to the Bitrise web dashboard.

  _We have successfully abstracted away the one tab you actually needed to open, so your AI can now fail your builds for you in natural language._

  `mcp` `ci-cd` `bitrise` `ide-integration`
  </details>

- **[entraid-mcp-server](https://github.com/hieuttmmo/entraid-mcp-server)** `⭐ 38` `updated >1y` A modular MCP server built with FastMCP that exposes Microsoft Graph API operations for EntraID, enabling AI agents to manage users, groups, applications, and audit logs. <details><summary>More about</summary>

  It allows developers to plug rich Microsoft identity management capabilities into MCP-compatible assistants, bridging the gap between natural language requests and complex Azure AD operations.

  _Finally, a way to delegate the existential dread of manually clicking through EntraID conditional access policies to an agent that might hallucinate the permissions instead._

  `mcp` `entraid` `microsoft-graph` `fastmcp` `identity`
  </details>

- **[mcp-browser-agent](https://github.com/imprvhub/mcp-browser-agent)** `⭐ 38` `updated ≤90d` An MCP server that gives Claude Desktop autonomous browser automation capabilities, including DOM interaction, JavaScript execution, and API requests via Playwright. <details><summary>More about</summary>

  It lets developers delegate repetitive browser workflows like form filling, screenshot capture, and navigation to a local Claude Desktop instance through a standardized protocol.

  _We have officially reached the point where your AI assistant needs its own browser driver so it can debug the very automation scripts you asked it to write._

  `mcp` `browser-automation` `playwright` `claude` `agent`
  </details>

- **[mcp-searxng-enhanced](https://github.com/overtlids/mcp-searxng-enhanced)** `⭐ 38` `updated ≤30d` An MCP server that provides category-aware web search, web scraping with citations, and date/time retrieval by integrating with a self-hosted SearXNG instance. <details><summary>More about</summary>

  It gives coding agents and MCP clients like Cline the ability to perform grounded web research and scrape documentation directly into their context.

  _We have successfully abstracted the act of opening a browser tab into a Docker container that requires six environment variables and a YAML file to search the internet._

  `mcp` `searxng` `web-search` `docker` `self-hosted`
  </details>

- **[package-registry-mcp](https://github.com/artmann/package-registry-mcp)** `⭐ 38` `updated ≤180d` An MCP server that allows AI assistants to search and retrieve real-time details from NPM, Cargo, PyPI, NuGet, and Go package registries. <details><summary>More about</summary>

  It gives coding agents live access to dependency metadata and vulnerability advisories, reducing the need to context-switch to a browser for package research.

  _Your agent can now argue with you about dependency versions using live registry data, making the 'which package should we use' debate even more exhausting._

  `mcp` `package-registry` `dependencies` `context-engineering`
  </details>

- **[agentmako](https://github.com/drhalto/agentmako)** `⭐ 37` `updated ≤30d` A local-first MCP server that indexes codebases into a SQLite store to provide coding agents with structured context packets, code facts, and diagnostics. <details><summary>More about</summary>

  It stops agents from brute-forcing their way through a repo with raw grep by feeding them pre-indexed symbols, routes, and schema facts before they touch a single file.

  _We have officially reached the point where our AI assistants need their own dedicated knowledge graph just to remember which files they were supposed to be editing._

  `mcp` `context-engineering` `local-first` `code-intelligence`
  </details>

- **[APISIX-MCP](https://github.com/api7/apisix-mcp)** `⭐ 37` `updated ≤1y` An MCP server that bridges LLMs with the APISIX Admin API to enable natural language management of routes, services, plugins, and security configurations. <details><summary>More about</summary>

  It allows developers to inspect and control APISIX gateway resources through AI clients like Cursor or Claude, removing the need to memorize Admin API endpoints.

  _You can now accidentally DELETE /apisix/admin/routes/1 using a conversational typo, combining the destructive power of gateway configs with the reliability of an LLM._

  `api-management` `apisix` `devops` `mcp` `typescript`
  </details>

- **[influxdb-mcp-server](https://github.com/idoru/influxdb-mcp-server)** `⭐ 37` `updated ≤180d` An MCP server that exposes InfluxDB v2 instances to AI assistants, enabling read, write, and query operations via the InfluxDB OSS API v2. <details><summary>More about</summary>

  It allows developers to interact with time-series databases conversationally, letting AI tools execute Flux queries and manage buckets without leaving the chat interface.

  _We have successfully abstracted away the need to remember Flux syntax by adding a tool that requires an active InfluxDB instance, a specific token, and a running MCP client just to ask a database a question._

  `mcp-server` `influxdb` `database` `time-series`
  </details>

- **[mcp-googletasks](https://github.com/arpitbatra123/mcp-googletasks)** `⭐ 37` `updated ≤30d` An MCP server that bridges LLMs with Google Tasks, enabling task and task-list management directly from clients like Claude Desktop, Cursor, and Codex. <details><summary>More about</summary>

  It lets developers manage Google Tasks without leaving their AI-assisted workflow, turning a context switch into a prompt.

  _We have successfully offloaded the cognitive burden of remembering to check our task list to an LLM that is also helping us ignore it._

  `mcp` `google-tasks` `productivity` `nodejs` `typescript`
  </details>

- **[mcp-wecombot-server](https://github.com/gotoolkits/mcp-wecombot-server)** `⭐ 37` `updated >1y` An MCP server that enables AI assistants like Claude Desktop to send text, markdown, images, news, and file attachments to WeCom group robots via webhooks. <details><summary>More about</summary>

  It bridges local AI workflows with enterprise WeCom communication, allowing developers to automate team notifications and alerts directly from their coding agent.

  _We now have a protocol bridge to help your AI remind your team about the code it just broke, delivered with the same robotic cheerfulness as a CI/CD failure email._

  `mcp` `wecom` `chatops` `integration`
  </details>

- **[alibabacloud-dataworks-mcp-server](https://github.com/aliyun/alibabacloud-dataworks-mcp-server)** `⭐ 36` `updated ≤180d` An MCP server that exposes Alibaba Cloud DataWorks Open API operations as standardized tools for AI agents to manage cloud data resources. <details><summary>More about</summary>

  It allows developers using MCP-compatible assistants like Cursor or Cline to manage DataWorks projects, scheduling, and data tasks directly through natural language prompts.

  _You can now orchestrate your entire data platform via an AI agent, provided you enjoy debugging access keys for a cloud provider that requires five environment variables just to say hello._

  `mcp` `alibaba-cloud` `dataworks` `agent-tools` `cloud-ops`
  </details>

- **[browser-use-rs](https://github.com/bb-fat/browser-use-rs)** `⭐ 36` `updated ≤180d` A lightweight Rust library for browser automation via the Chrome DevTools Protocol with a built-in MCP server for AI-driven automation. <details><summary>More about</summary>

  It offers developers a zero-dependency, fast way to wire browser control directly into AI workflows via the Model Context Protocol.

  _Finally, a way to let your Rust-compiled agent nervously click buttons in Chrome while you explain to your team why the automation stack now needs a systems language._

  `rust` `browser-automation` `mcp` `cdp` `ai-integration`
  </details>

- **[codelogic-mcp-server](https://github.com/codelogicincengineering/codelogic-mcp-server)** `⭐ 36` `updated ≤30d` An MCP server that connects AI programming assistants to CodeLogic's software dependency graph to provide code impact analysis and database change assessments. <details><summary>More about</summary>

  It lets your AI assistant check blast radius and dependency impacts before suggesting changes, moving code review from guesswork to graph-backed evidence.

  _You now have an AI assistant that can perfectly diagram exactly how your 'simple' one-line fix will cascade into three weeks of unplanned outage._

  `mcp` `dependency-analysis` `impact-analysis` `codelogic` `devops`
  </details>

- **[mcp-server](https://github.com/membranehq/mcp-server)** `⭐ 36` `updated ≤90d` An MCP server that exposes Membrane integration actions as tools for AI agents and supports both static and dynamic tool modes, SSE and Streamable HTTP transports, and experimental chat session management. <details><summary>More about</summary>

  Developers building AI agents can connect this server to give their agents access to Membrane’s integration ecosystem without writing custom tool wrappers.

  _Another Tuesday, another MCP server that lets your agent politely ask Gmail to send an email it will inevitably hallucinate the recipient of._

  `agent-tools` `integrations` `mcp` `membrane`
  </details>

- **[mcp-server-esignatures](https://github.com/esignaturescom/mcp-server-esignatures)** `⭐ 36` `updated ≤90d` An MCP server that exposes eSignatures.com contract and template management tools to AI models and agents. <details><summary>More about</summary>

  Developers can hook contract drafting, sending, and template management directly into their AI-assisted IDE or agent workflows instead of switching to a web dashboard.

  _Your coding agent can now negotiate, draft, and withdraw NDAs while you are still trying to remember if you committed your .env file._

  `mcp` `contracts` `automation` `agent-tooling`
  </details>

- **[nostr-mcp](https://github.com/abdelstark/nostr-mcp)** `⭐ 36` `updated >1y` A Model Context Protocol server that lets AI models post notes, connect to relays, and send Lightning zaps on the Nostr decentralized network. <details><summary>More about</summary>

  It gives coding agents and MCP-compatible clients a standardized way to write to censorship-resistant social feeds and interact with the Nostr ecosystem.

  _We have successfully taught LLMs to post cryptic notes to a decentralized network that already struggles with human-generated content._

  `mcp` `nostr` `decentralized` `typescript`
  </details>

- **[screaming-frog-mcp](https://github.com/bzsasson/screaming-frog-mcp)** `⭐ 36` `updated ≤30d` An MCP server that gives AI assistants programmatic access to Screaming Frog SEO Spider for crawling websites, exporting data, and managing crawl storage. <details><summary>More about</summary>

  Developers can analyze SEO crawl data, export reports, and query site health directly through Claude or other MCP clients without manually opening the Screaming Frog GUI.

  _We have successfully automated the one task that was previously safe from AI interference because it required closing a desktop GUI first._

  `mcp` `seo` `screaming-frog` `claude` `developer-tools`
  </details>

- **[uniswap-trader-mcp](https://github.com/kukapay/uniswap-trader-mcp)** `⭐ 36` `updated ≤1y` An MCP server that lets AI agents fetch price quotes, generate swap suggestions, and execute token swaps on Uniswap V3 across multiple blockchains. <details><summary>More about</summary>

  Developers building DeFi agents can integrate Uniswap trading capabilities through a standardized MCP interface instead of wiring raw blockchain calls themselves.

  _Your AI agent can now rug your portfolio across eight chains with nothing more than a poorly phrased prompt and a leaked private key._

  `mcp` `defi` `uniswap` `agent-tooling` `blockchain`
  </details>

- **[android-mcp-server](https://github.com/martingeidobler/android-mcp-server)** `⭐ 35` `updated ≤90d` An MCP server that lets AI assistants control Android emulators and devices via ADB to take screenshots, interact with UI elements, read logs, and document bugs. <details><summary>More about</summary>

  It gives coding agents in VS Code, Cursor, and Claude Code the ability to visually inspect and automate Android apps without modifying the app itself.

  _We have finally automated the part of mobile development where you tap the same button twenty times while explaining to a chatbot what the screen looks like._

  `mcp` `android` `adb` `testing` `automation`
  </details>

- **[kaggle-mcp](https://github.com/arrismo/kaggle-mcp)** `⭐ 35` `updated ≤90d` An MCP server that allows AI agents to search for, download, and generate EDA prompts for Kaggle datasets via the Kaggle API. <details><summary>More about</summary>

  It connects data science platforms directly into agentic workflows, allowing models to autonomously source training data and bootstrap analysis notebooks.

  _We have successfully abstracted the process of downloading a zip file into a protocol handshake so your agent can hallucinate statistics about data it found on its own._

  `mcp` `kaggle` `data-science` `fastmcp` `agent-tools`
  </details>

- **[prediction-market-mcp](https://github.com/jamesanz/prediction-market-mcp)** `⭐ 35` `updated ≤180d` An MCP server that exposes real-time prediction market odds and prices from Polymarket, PredictIt, and Kalshi to AI coding environments like Cursor and Claude Desktop. <details><summary>More about</summary>

  Developers building AI workflows or agents that reason about event probabilities can pull live market data directly into their context without managing API keys or separate data pipelines.

  _Your AI agent is now fully equipped to debate geopolitical outcomes using Polymarket odds while you're just trying to fix a CSS bug._

  `mcp` `prediction-markets` `data-tools` `cursor` `context-tools`
  </details>

- **[chatspatial](https://github.com/cafferychen777/chatspatial)** `⭐ 34` `updated ≤30d` An MCP server that exposes 20 schema-validated tools to orchestrate 65 spatial transcriptomics methods, allowing developers and researchers to run bioinformatics workflows via natural language in MCP-compatible clients. <details><summary>More about</summary>

  It replaces fragile ad-hoc LLM code generation with a reproducible, schema-enforced interface for complex single-cell and spatial genomics analysis inside standard MCP clients like Claude Code and Claude Desktop.

  _Finally, a way to let your LLM orchestrate obscure scRNA-seq methods with validated schemas, so you can feel productive while wondering if you still need a PhD to understand the output._

  `mcp-server` `bioinformatics` `spatial-transcriptomics` `agentic-ai` `python`
  </details>

- **[domshell](https://github.com/apireno/domshell)** `⭐ 34` `updated ≤30d` A Chrome Extension that maps the browser's Accessibility Tree into a navigable virtual filesystem, allowing AI agents and humans to interact with web pages using standard Linux commands like ls, cd, and click. <details><summary>More about</summary>

  It replaces fragile, screenshot-based browser automation with a deterministic, semantic filesystem metaphor that works across any website without custom adapters.

  _We have successfully abstracted the web into a terminal so that AI agents can experience the profound confusion of `cd`-ing into a `<div>` that doesn't exist._

  `browser-automation` `mcp` `chrome-extension` `accessibility-tree` `agent-tools`
  </details>

- **[mcp](https://github.com/octoeverywhere/mcp)** `⭐ 34` `updated ≤1y` A free, cloud-hosted MCP server that exposes live 3D printer status, webcam snapshots, and print controls to AI agents and chatbots. <details><summary>More about</summary>

  It lets developers integrate physical hardware control into agentic workflows without building custom APIs for OctoPrint, Klipper, or Bambu Lab printers.

  _We've successfully abstracted 3D printing into token streams, meaning your AI agent can now ruin your print bed while it hallucinates your middleware._

  `mcp` `3d-printing` `hardware` `agent-tooling`
  </details>

- **[mcp-superset](https://github.com/bintocher/mcp-superset)** `⭐ 34` `updated ≤90d` An MCP server that exposes 137 tools for managing Apache Superset instances, enabling AI assistants to control dashboards, charts, datasets, SQL Lab, and security settings. <details><summary>More about</summary>

  It allows developers to automate complex Superset administration tasks and integrate business intelligence workflows directly into AI-assisted development environments.

  _Now your LLM can manage row-level security and permission matrices, proving once again that no niche is too specific to avoid being wrapped in an MCP server._

  `mcp` `apache-superset` `bi-tools` `fastmcp`
  </details>

- **[omop_mcp](https://github.com/ohnlp/omop_mcp)** `⭐ 34` `updated ≤90d` An MCP server that maps free-text clinical terminology to standardized OMOP Common Data Model concepts using LLMs and the OMOPHub vocabulary API. <details><summary>More about</summary>

  It lets developers building healthcare analytics pipelines automate the tedious mapping of messy clinical notes into standardized OMOP concepts directly from MCP-compatible clients like Claude Desktop.

  _We have successfully abstracted medical ontology mapping into an LLM-powered MCP server, because apparently even medical taxonomies weren't safe from needing an agentic wrapper._

  `mcp-server` `healthcare` `omop` `clinical-ai` `llm-integration`
  </details>

- **[mcp-aoai-web-browsing](https://github.com/kimtth/mcp-aoai-web-browsing)** `⭐ 33` `updated ≤90d` A minimal Model Context Protocol server and client that lets Azure OpenAI or OpenAI models control a web browser via Playwright tools exposed through MCP. <details><summary>More about</summary>

  Developers can wire LLMs into IDEs like VS Code or Claude Code and have them reliably navigate and interact with web pages through a standardized MCP interface.

  _We have successfully reached the point where your AI needs its own browser, its own protocol, and a bridge, just to click a button on a login page._

  `mcp` `playwright` `browser-automation` `azure-openai`
  </details>

- **[mcp-server](https://github.com/dollhousemcp/mcp-server)** `⭐ 33` `updated ≤30d` An open-source MCP server that manages dynamic personas, skills, templates, and memories, allowing developers to customize AI behavior via a local portfolio and community collection. <details><summary>More about</summary>

  It gives developers a structured way to package, reuse, and share modular AI behaviors like skills and personas across compatible hosts such as Claude, Cursor, and VS Code.

  _We have now reached the point where we are meticulously organizing the personalities of our AI assistants while our own documentation rots in peace._

  `mcp` `personas` `skills` `memory` `context-engineering`
  </details>

- **[WebSearch-MCP](https://github.com/mnhlt/websearch-mcp)** `⭐ 33` `updated >1y` A self-hosted Model Context Protocol server that provides web search capabilities to AI assistants like Claude by integrating with a local Crawler API and FlareSolverr setup. <details><summary>More about</summary>

  It allows developers to give their local MCP-compatible agents real-time web access without relying on hosted search APIs or leaking queries to third parties.

  _Another essential brick in the tower of infrastructure we are building so our AI can browse the web while we are busy configuring Docker containers for the crawler that browses the web._

  `docker` `mcp` `self-hosted` `stdio` `web-search`
  </details>

- **[alibabacloud-hologres-mcp-server](https://github.com/aliyun/alibabacloud-hologres-mcp-server)** `⭐ 32` `updated ≤30d` An MCP server that provides AI agents with a standardized interface to connect to, inspect metadata from, and execute SQL against Alibaba Cloud Hologres databases. <details><summary>More about</summary>

  It allows developers to hook their AI coding agents directly into Hologres, enabling natural language querying and database management without leaving the agent workflow.

  _We have successfully abstracted the database so far away that we now need a protocol server just to let the AI ask the database what it looks like._

  `mcp` `database` `alibaba-cloud` `sql` `integration`
  </details>

- **[alpaca-mcp](https://github.com/laukikk/alpaca-mcp)** `⭐ 32` `updated ≤1y` An MCP server that exposes the Alpaca trading API to AI assistants, enabling them to manage stock and crypto portfolios, place trades, and retrieve market data. <details><summary>More about</summary>

  It allows developers to connect LLMs like Claude to a live brokerage, turning conversational prompts into executable financial actions without building a custom integration layer.

  _We have finally bridged the gap between hallucinating code and hallucinating stock trades, giving your AI agent the keys to your brokerage account with nothing but a prompt between you and a margin call._

  `mcp` `trading` `finance` `alpaca` `server`
  </details>

- **[combine-mcp](https://github.com/nazar256/combine-mcp)** `⭐ 32` `updated ≤180d` An MCP aggregator that combines multiple Model Context Protocol servers into a single interface with tool prefixing, filtering, and compatibility adjustments for clients like Cursor. <details><summary>More about</summary>

  It lets developers maintain one MCP configuration and set of secrets across multiple AI coding agents while working around client limitations on server and tool counts.

  _We have officially reached the point where we need middleware to manage the middleware that manages the AI tools that manage our code._

  `mcp` `cursor` `tool-aggregation` `middleware`
  </details>

- **[mattermost-mcp-host](https://github.com/jagan-shanmugam/mattermost-mcp-host)** `⭐ 32` `updated >1y` A Mattermost bot that connects to MCP servers and uses a LangGraph agent to execute tools and respond to messages within Mattermost channels and threads. <details><summary>More about</summary>

  It lets teams run an MCP-powered agent directly inside their Mattermost workspace, turning chat into a command and tool-execution surface without leaving the team channel.

  _Another proud milestone in the quest to turn every workplace chat tool into a semi-autonomous agent runtime that occasionally calls four tools before admitting it can't find the issue tracker._

  `mattermost` `mcp` `langgraph` `chatbot` `agent-integration`
  </details>

- **[maven-mcp-server](https://github.com/bigsy/maven-mcp-server)** `⭐ 32` `updated ≤30d` An MCP server that enables LLMs to query Maven Central for dependency versions, check existence, and retrieve the latest stable releases. <details><summary>More about</summary>

  It allows coding agents and MCP clients to verify and update Java dependencies directly within the development workflow without manual repository lookups.

  _We have successfully built infrastructure so your AI can argue with Maven Central about whether spring-core 5.3.20 actually exists, sparing you the horrific effort of a web browser._

  `mcp` `java` `maven` `dependencies`
  </details>

- **[mcp-console-automation](https://github.com/ooples/mcp-console-automation)** `⭐ 32` `updated ≤30d` An MCP server that gives AI assistants deep control over terminal sessions, enabling them to spawn shells, interact with console applications, and automate CLI workflows across platforms. <details><summary>More about</summary>

  It allows coding agents to go beyond code editing and actually drive interactive terminal tools, run background jobs, and validate output directly within the shell environment.

  _We have finally built the bridge that allows your AI to get stuck in infinite loops inside a terminal session it created all by itself._

  `mcp` `terminal` `automation` `cli` `testing`
  </details>

- **[mcp-database-server](https://github.com/fireproof-storage/mcp-database-server)** `⭐ 32` `updated >1y` A Model Context Protocol server that provides LLMs with CRUD and query access to JSON documents stored in a Fireproof database. <details><summary>More about</summary>

  It gives AI assistants like Claude Desktop a persistent, queryable state layer for JSON data without requiring custom database integration work.

  _We have successfully abstracted the database into a protocol, so now your LLM can persist its hallucinations with the robust reliability of a JSON document store._

  `mcp` `database` `fireproof` `json`
  </details>

- **[mcp-server-couchbase](https://github.com/couchbase-ecosystem/mcp-server-couchbase)** `⭐ 32` `updated ≤30d` An official MCP server implementation that allows LLMs and AI agents to directly query and interact with Couchbase clusters. <details><summary>More about</summary>

  It bridges the gap between AI coding workflows and operational data, allowing agents to read and manipulate live Couchbase data without custom glue code.

  _We have successfully abstracted away the need to understand our database schemas by adding a protocol that requires its own documentation site and badge collection._

  `mcp` `couchbase` `database` `llm-integration`
  </details>

- **[mcpmcp-server](https://github.com/glenngillen/mcpmcp-server)** `⭐ 32` `updated >1y` An MCP server that acts as a registry to help developers discover, set up, and integrate other MCP servers into their AI clients. <details><summary>More about</summary>

  It reduces the friction of finding and configuring the right Model Context Protocol servers for your local AI workflow.

  _We have now reached the point where we need a dedicated protocol server just to help us manage the growing pile of protocol servers we forgot we installed._

  `mcp` `registry` `tooling`
  </details>

- **[agent-toolkit](https://github.com/atlanhq/agent-toolkit)** `⭐ 31` `updated ≤30d` An MCP server and Claude Code plugin that lets developers search, govern, and manage data assets inside Atlan using natural language. <details><summary>More about</summary>

  It turns Atlan's data catalog into a conversational surface so developers can trace lineage and manage governance without leaving their AI-assisted workflow.

  _We have finally reached the point where the data catalog needs its own plugin for the plugin that writes your code._

  `agents` `claude-code` `context-engineering` `data-catalog` `data-governance` `enterprise` `mcp` `plugin`
  </details>

- **[biothings-mcp](https://github.com/longevity-genie/biothings-mcp)** `⭐ 31` `updated ≤1y` An open-source MCP server that provides structured access to BioThings.io biomedical data sources, including gene, variant, chemical, and taxon information. <details><summary>More about</summary>

  It allows developers building AI assistants or agents to query authoritative biomedical databases using natural language via the standardized Model Context Protocol.

  _Because nothing says 'streamlined developer workflow' like wrapping niche genetic databases behind a protocol that is somehow both the future and the current source of three weeks of yak-shaving._

  `mcp` `bioinformatics` `biomedical` `server`
  </details>

- **[debridge-mcp](https://github.com/debridge-finance/debridge-mcp)** `⭐ 31` `updated ≤90d` An MCP server that exposes deBridge cross-chain swap and transfer capabilities as tools and skills for AI agents and coding assistants. <details><summary>More about</summary>

  Developers building or extending AI agents can give them native access to cross-chain crypto execution across major blockchains without implementing deBridge protocol logic themselves.

  _Your AI agent can now drain wallets across multiple chains with nothing more than a prompt and a misplaced trust boundary._

  `mcp` `crypto` `blockchain` `agent-tools`
  </details>

- **[grok-mcp](https://github.com/merterbak/grok-mcp)** `⭐ 31` `updated ≤30d` An MCP server that exposes xAI's Grok API features—including agentic tool calling, image and video generation, vision analysis, and file handling—to MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  Developers using Claude Desktop or Claude Code can pipe Grok's reasoning, web search, X search, and media generation directly into their local workflow without writing custom API glue.

  _We have reached the point where the selling point of a tool is that it lets you use an API from a different company inside the tool you are already using to talk to a third company's model._

  `mcp` `grok` `xai` `integration`
  </details>

- **[kafka-schema-reg-mcp](https://github.com/aywengo/kafka-schema-reg-mcp)** `⭐ 31` `updated ≤30d` A Model Context Protocol server that exposes Kafka Schema Registry operations as tools for Claude Desktop and other MCP clients. <details><summary>More about</summary>

  It lets developers manage schemas, contexts, and migrations across multiple Kafka registries using natural language inside their AI assistant instead of wrangling CLI commands or REST calls.

  _Another vital piece of infrastructure now requires an LLM translator, because apparently issuing curl commands to port 8081 had become too emotionally taxing._

  `mcp` `kafka` `schema-registry` `claude` `data-platforms`
  </details>

- **[mcp-image-compression](https://github.com/inhiblabcore/mcp-image-compression)** `⭐ 31` `updated ≤1y` An MCP server that provides image compression capabilities, supporting multiple formats (JPEG, PNG, WebP, AVIF) with configurable quality settings for AI agents and developer workflows. <details><summary>More about</summary>

  It allows AI agents and developer tools to programmatically compress images via the Model Context Protocol, offloading image optimization tasks to a dedicated microservice.

  _We have successfully abstracted image compression into a protocol-defined microservice so your AI agent can spend tokens deciding whether your PNG should be a WebP instead of you just running a build script._

  `mcp` `image-compression` `microservice` `developer-tools`
  </details>

- **[mcp-klever-vm](https://github.com/klever-io/mcp-klever-vm)** `⭐ 31` `updated ≤30d` An MCP server that provides contextual knowledge, code patterns, and validation tools for Klever blockchain smart contract development. <details><summary>More about</summary>

  It integrates specialized blockchain development knowledge directly into AI coding assistants like Claude and Cursor, reducing the need to manually look up Klever VM SDK specifics.

  _We have successfully abstracted away the need to read blockchain documentation by feeding it to an MCP server that an AI reads so you don't have to, completing the circle of intentional ignorance._

  `mcp` `blockchain` `klever` `smart-contracts`
  </details>

- **[aidex](https://github.com/cscsoftware/aidex)** `⭐ 30` `updated ≤30d` An MCP server that provides persistent code indexing, semantic search, memory, and telemetry to AI coding assistants, claiming to reduce context usage by up to 50x compared to grep. <details><summary>More about</summary>

  It gives local AI agents a persistent, cross-project memory and low-token search layer so they stop re-reading your entire codebase on every prompt.

  _We have now built a brain with 33 tools just so our AI assistants can remember what they were doing five minutes ago without burning through a novel's worth of tokens._

  `mcp` `code-search` `context-engineering` `memory-layer` `developer-tools`
  </details>

- **[bluesky-context-server](https://github.com/laulauland/bluesky-context-server)** `⭐ 30` `updated ≤1y` A Model Context Protocol (MCP) server that allows AI assistants like Claude Desktop to query Bluesky profiles, timelines, and search posts via the Bluesky API. <details><summary>More about</summary>

  It connects standard MCP clients to the Bluesky social graph, allowing developers to integrate social feed interactions directly into their local AI workflows.

  _We have successfully abstracted social media doom-scrolling into a protocol server so your coding agent can now waste time on Bluesky for you._

  `at-protocol` `bluesky` `context-server` `mcp` `social-media`
  </details>

- **[fibery-mcp-server](https://github.com/fibery-inc/fibery-mcp-server)** `⭐ 30` `updated ≤180d` An MCP server that exposes Fibery workspace operations—querying databases, describing schemas, and creating or updating entities—to LLM clients like Claude for Desktop. <details><summary>More about</summary>

  Developers can manage Fibery workspaces through natural language conversations instead of manual UI navigation or custom API scripts.

  _We have successfully abstracted a productivity tool into a prompt, so you can now context-switch between your IDE and a chat window to update a database field._

  `fibery` `integration` `llm-tools` `mcp` `product-management` `workspace`
  </details>

- **[influxdb3_mcp_server](https://github.com/influxdata/influxdb3_mcp_server)** `⭐ 30` `updated ≤30d` An official MCP server from InfluxData that exposes InfluxDB 3 operations—including queries, writes, and database management—as tools and resources for MCP clients. <details><summary>More about</summary>

  It lets developers and AI agents interact with InfluxDB 3 instances directly through MCP-compatible workflows, bridging time-series data operations with modern AI tooling.

  _We have successfully abstracted away the database CLI so that an AI agent can now irreversibly delete your production measurements with a confidently hallucinated token request._

  `mcp` `influxdb` `database` `time-series`
  </details>

- **[label-studio-mcp-server](https://github.com/humansignal/label-studio-mcp-server)** `⭐ 30` `updated ≤1y` An MCP server that wraps the Label Studio SDK, allowing AI agents and MCP clients to programmatically manage labeling projects, tasks, and predictions via natural language or structured calls. <details><summary>More about</summary>

  It lets developers automate data-labeling workflows—project setup, task imports, and prediction management—directly through AI assistants instead of manual API scripting.

  _We’ve successfully abstracted the act of labeling data for AI into a conversation with an AI, completing the loop where the output of one model trains the next._

  `mcp` `label-studio` `data-labeling` `sdk`
  </details>

- **[mcp-context-provider](https://github.com/doobidoo/mcp-context-provider)** `⭐ 30` `updated ≤30d` A static MCP server that provides persistent tool context and learned instincts to Claude Desktop and Claude Code, preventing context loss between chat sessions. <details><summary>More about</summary>

  It lets developers define reusable syntax rules and auto-corrections while automatically distilling session lessons into confidence-scored instincts that survive across restarts.

  _We have finally built a memory system for the AI, which means the only thing we can no longer blame on context loss is our own bad coding habits._

  `mcp` `context` `memory` `claude` `rules`
  </details>

- **[mcp-cyclops](https://github.com/cyclops-ui/mcp-cyclops)** `⭐ 30` `updated ≤1y` An MCP server that lets AI agents manage Kubernetes applications through Cyclops Modules instead of raw Kubernetes manifests. <details><summary>More about</summary>

  It allows developers and their AI companions to provision and update Kubernetes resources using high-level abstractions, reducing the risk of misconfigurations in production.

  _Yet another layer of abstraction where your AI agent now needs its own Kubernetes certifications to safely ignore the YAML you were already pretending to understand._

  `mcp` `kubernetes` `devops` `platform-engineering`
  </details>

- **[mcp-server-sql-analyzer](https://github.com/j4c0bs/mcp-server-sql-analyzer)** `⭐ 30` `updated ≤1y` An MCP server that provides SQL static analysis, linting, and dialect conversion capabilities using SQLGlot. <details><summary>More about</summary>

  It allows AI assistants like Claude to validate syntax, convert queries between dialects, and analyze table dependencies directly within the developer's workflow.

  _We have successfully abstracted SQL validation into a protocol server so the AI can feel confident about the MySQL-to-Postgres migration it confidently hallucinated five minutes ago._

  `mcp` `sql` `static-analysis` `developer-tools`
  </details>

- **[openapi-to-mcp](https://github.com/criteo/openapi-to-mcp)** `⭐ 30` `updated ≤1y` A .NET CLI tool that converts OpenAPI specifications into MCP servers, exposing API endpoints as strongly typed tools for AI assistants. <details><summary>More about</summary>

  It allows developers to instantly turn any OpenAPI-documented API into a usable toolset for MCP-compatible clients without writing custom server code.

  _We have reached the point where we need an automated bridge to translate the spec of a bridge, so the AI can finally talk to the thing we already built to talk to the thing._

  `cli` `dotnet` `integration` `mcp` `openapi`
  </details>

- **[decisionnode](https://github.com/decisionnode/decisionnode)** `⭐ 29` `updated ≤30d` A CLI and local MCP server that provides a shared, semantically searchable structured memory store for architectural decisions across Claude Code, Cursor, Windsurf, and other MCP clients. <details><summary>More about</summary>

  It lets AI coding agents persist and retrieve project-specific architectural context on demand instead of relying solely on static files or hallucinated recall.

  _Yet another layer of infrastructure to ensure your AI assistant remembers that you definitely, absolutely decided against connection pooling three weeks ago._

  `mcp` `memory` `cli` `semantic-search` `local`
  </details>

- **[local_faiss_mcp](https://github.com/nonatofabio/local_faiss_mcp)** `⭐ 29` `updated ≤30d` A local MCP server that uses FAISS to provide vector storage, document ingestion, and semantic search capabilities for AI agents and coding assistants. <details><summary>More about</summary>

  It gives developers a zero-dependency, on-device memory layer that lets coding agents semantically search private documents without sending data to external vector databases.

  _You now have the infrastructure to give your agent a photographic memory, yet it will still confidently hallucinate that your PDF says something it definitely does not._

  `mcp` `faiss` `rag` `local-ai` `semantic-search`
  </details>

- **[markview](https://github.com/paulhkang94/markview)** `⭐ 29` `updated ≤30d` A native macOS markdown preview application that includes an MCP server, allowing Claude Code to render and preview markdown content live in a dedicated Swift/SwiftUI window. <details><summary>More about</summary>

  It enables coding agents to visualize generated documentation, READMEs, and Mermaid diagrams in real-time without leaving the workflow or relying on Electron-heavy browsers.

  _We have successfully built a native bridge just so the AI can watch its own markdown render, because apparently even the bots need a preview pane to feel productive._

  `mcp` `macos` `markdown` `swift` `claude-code`
  </details>

- **[mcp](https://github.com/infobip/mcp)** `⭐ 29` `updated ≤30d` A collection of remote MCP servers from Infobip that expose their CPaaS platform capabilities—such as messaging, authentication, and customer data management—to AI agents via the Model Context Protocol. <details><summary>More about</summary>

  Developers can connect AI agents directly to Infobip's communication channels and APIs without writing custom integration layers, enabling agents to send messages or manage customer data natively.

  _We have reached the point where telecom APIs require their own protocol translation layer just so your chatbot can argue with you over WhatsApp instead of email._

  `mcp` `cpaas` `infobip` `remote-servers`
  </details>

- **[Homebrew MCP](https://github.com/jeannier/homebrew-mcp)** `⭐ 28` `updated ≤1y` A Python-based Model Context Protocol (MCP) server that exposes Homebrew package management commands (install, search, services, etc.) to AI clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It allows developers to manage macOS packages conversationally through their AI IDE or assistant, removing the need to context-switch to a terminal for common brew tasks.

  _We have finally achieved the singularity: an AI agent that can `brew install` the very dependencies required to run the AI agent itself._

  `cursor` `homebrew` `macos` `mcp` `package-manager`
  </details>

- **[outsource-mcp](https://github.com/gwbischof/outsource-mcp)** `⭐ 28` `updated ≤1y` An MCP server that lets AI assistants outsource text and image generation tasks to 20+ model providers through a unified interface. <details><summary>More about</summary>

  It allows MCP-compatible hosts like Claude Desktop or Cline to route specific generation tasks to specialized providers without the host needing direct integration for each one.

  _Finally, your AI assistant can experience the same context-switching fatigue and API key management nightmare that you do, just to generate a haiku from a different model._

  `mcp` `multi-provider` `model-routing` `agent-tools`
  </details>

- **[postmancer](https://github.com/hijaz/postmancer)** `⭐ 28` `updated ≤1y` Postmancer is an MCP server that allows AI assistants like Claude to make HTTP requests, manage API collections, and test REST API responses through natural language. <details><summary>More about</summary>

  It integrates API testing workflows directly into AI chat sessions, removing the need to switch contexts between Postman or Insomnia and your coding assistant.

  _We have successfully abstracted away the one tab that wasn't already an LLM, ensuring your API keys are now managed by the same hallucination-prone assistant writing your spaghetti code._

  `mcp` `rest-client` `api-testing` `cli` `developer-tools`
  </details>

- **[tiktok-ads-mcp-server](https://github.com/adsmcp/tiktok-ads-mcp-server)** `⭐ 28` `updated ≤1y` A Model Context Protocol server that enables AI assistants to manage TikTok ad campaigns, pull performance analytics, and handle audience and creative assets via the TikTok Ads API. <details><summary>More about</summary>

  Developers building AI-driven marketing workflows can give assistants like Claude direct, structured access to TikTok campaign operations without writing custom API glue code.

  _We have finally achieved the future: an MCP server, a Python venv, and an OAuth flow just to ask an AI to pause a TikTok ad that you could have paused in three clicks._

  `mcp` `tiktok-ads` `marketing-api` `ad-automation`
  </details>

- **[endorhq/cli](https://github.com/endorhq/cli)** `⭐ 27` `updated ≤1y` Endor is a Node-based CLI that spins up instant, private, sandboxed environments for databases and services, exposing them to AI agents and IDEs via MCP. <details><summary>More about</summary>

  It lets agents safely provision their own ephemeral infrastructure dependencies like Postgres or Redis without polluting the host system or requiring manual Docker setup.

  _Your AI agent can now dynamically provision an entire infrastructure stack in seconds, ensuring it has plenty of new and exciting ways to corrupt its own database before you even see the PR._

  `agents` `cli` `local-dev` `mcp` `sandbox`
  </details>

- **[firma](https://github.com/evan-moon/firma)** `⭐ 27` `updated ≤30d` A local-first CLI portfolio tracker for overseas investors that includes a built-in MCP server so Claude can query, analyze, and visualize trade history stored in a local SQLite database. <details><summary>More about</summary>

  It shows developers how to build practical MCP servers that bridge local data stores with LLM workflows, turning a personal finance CLI into a structured tool Claude can actually use.

  _We’ve finally solved the hard problem of letting an AI tell us our TSLA position is dangerously large, while the real innovation is debugging why the MCP handshake still needs a restart._

  `mcp` `cli` `local-first` `typescript` `finance`
  </details>

- **[gget-mcp](https://github.com/longevity-genie/gget-mcp)** `⭐ 27` `updated ≤1y` A Model Context Protocol server that wraps the gget bioinformatics library, exposing gene search, sequence analysis, and protein structure prediction tools to AI assistants. <details><summary>More about</summary>

  It allows developers and researchers to query complex genomics databases and run bioinformatics workflows using natural language through MCP-compatible AI agents.

  _We have successfully abstracted away the last remnants of biological inquiry, so you can now misconfigure a cancer pathway analysis while arguing with an LLM about token limits._

  `mcp` `bioinformatics` `server` `genomics` `fastmcp`
  </details>

- **[greptimedb-mcp-server](https://github.com/greptimeteam/greptimedb-mcp-server)** `⭐ 27` `updated ≤30d` A Model Context Protocol server that lets AI assistants query and manage GreptimeDB, an open-source observability database for metrics, logs, and traces. <details><summary>More about</summary>

  It bridges observability data with AI workflows, allowing assistants to directly analyze time-series metrics and manage dashboards via SQL, PromQL-compatible TQL, and pipeline tools.

  _Now your AI assistant can ruin your on-call metrics just as efficiently as you can, but with the added security theater of read-only enforcement and data masking._

  `mcp` `observability` `database` `greptimedb` `time-series`
  </details>

- **[hileamlakB/PRIMS](https://github.com/hileamlakb/python-runtime-interpreter-mcp-server)** `⭐ 27` `updated ≤1y` PRIMS is a lightweight, open-source Model Context Protocol (MCP) server that allows LLM agents to execute arbitrary Python code in isolated, throw-away sandboxes. <details><summary>More about</summary>

  It provides a secure execution environment for AI agents to run dynamic Python workloads with dependency management without risking the host system.

  _We have successfully abstracted writing code into asking an agent to ask a server to spin up a virtual environment to run code we used to just run in a terminal._

  `agent-infrastructure` `agents` `code-execution` `docker` `mcp` `python` `sandbox`
  </details>

- **[hyperliquid-info-mcp](https://github.com/kukapay/hyperliquid-info-mcp)** `⭐ 27` `updated ≤1y` An MCP server that exposes real-time user and market data from the Hyperliquid perp DEX for use in bots, dashboards, and analytics workflows. <details><summary>More about</summary>

  Developers building trading bots or crypto analytics tools can plug this into MCP-compatible agents to query positions, orders, and candlestick data without writing custom API integrations.

  _We have officially reached the point where decentralized perpetual swaps now require their own Model Context Protocol server to feel accessible to an LLM._

  `mcp` `crypto` `trading` `dex` `api`
  </details>

- **[jupiter-mcp](https://github.com/kukapay/jupiter-mcp)** `⭐ 27` `updated ≤1y` An MCP server that enables AI agents to fetch and execute token swaps on the Solana blockchain using Jupiter's Ultra API. <details><summary>More about</summary>

  It allows developers to connect LLM clients directly to live DeFi execution environments, bridging natural language prompts with on-chain trading logic.

  _Now your coding agent can rug your portfolio at machine speed while you're busy debugging a CSS flexbox._

  `mcp` `solana` `defi` `jupiter`
  </details>

- **[lotus-wisdom-mcp](https://github.com/linxule/lotus-wisdom-mcp)** `⭐ 27` `updated ≤30d` An MCP server that provides a tool for AI assistants to solve problems using a contemplative reasoning framework inspired by the Lotus Sutra, featuring interactive visualization and meditation pauses. <details><summary>More about</summary>

  It packages a specific spiritual-cognitive prompting technique into a reusable MCP tool, allowing developers to integrate structured, multi-step contemplative reasoning into their AI workflows.

  _We have successfully abstracted ancient Buddhist philosophy into a JSON schema, proving that no corner of human experience is safe from being wrapped in an MCP server and called a 'tool'._

  `mcp` `prompt-engineering` `lotus-sutra` `reasoning`
  </details>

- **[mcp-server](https://github.com/agentset-ai/mcp-server)** `⭐ 27` `updated ≤1y` An MCP server that connects the Agentset open-source RAG platform to AI assistants like Claude, enabling document-based retrieval-augmented generation workflows. <details><summary>More about</summary>

  It lets developers plug document search and retrieval directly into their AI assistant workflows without building custom RAG pipelines from scratch.

  _Another MCP server enters the ecosystem, because apparently the best way to manage context is to install a protocol server for every possible data source and pray the handshake works._

  `mcp` `rag` `retrieval` `npx`
  </details>

- **[winx-code-agent](https://github.com/gabrielmaialva33/winx-code-agent)** `⭐ 27` `updated ≤30d` A high-performance MCP server written in Rust that provides shell execution, file I/O, and workspace context tools for LLM-based coding agents, serving as a drop-in replacement for the Python-based WCGW. <details><summary>More about</summary>

  It gives local coding agents a significantly faster and lighter backend for command execution and file operations, reducing the latency overhead of the tool-calling loop.

  _We are now rewriting the glue code that connects our AI to our terminal in Rust, because apparently the 200ms it took to list a directory was the only thing standing between us and AGI._

  `mcp` `rust` `coding-agent` `infrastructure`
  </details>

- **[aibolit-mcp-server](https://github.com/cqfn/aibolit-mcp-server)** `⭐ 26` `updated ≤30d` An MCP server that wraps the Aibolit Java static analyzer to surface critical design issues directly to AI coding agents during refactoring tasks. <details><summary>More about</summary>

  It gives AI agents structured, rule-based hints about deep design problems, helping them move beyond cosmetic fixes when refactoring Java codebases.

  _We have now successfully reached the point where we need a dedicated server to explain to the AI that it is focusing on the wrong things._

  `mcp` `java` `refactoring` `static-analysis`
  </details>

- **[context-mcp](https://github.com/dodopayments/context-mcp)** `⭐ 26` `updated ≤30d` A self-hosted MCP server that indexes documentation from sources like MDX and OpenAPI specs into a Pinecone vector database to serve contextual knowledge to AI assistants via the Model Context Protocol. <details><summary>More about</summary>

  Developers can scaffold a dedicated MCP endpoint that lets coding agents stop hallucinating API details by querying live, indexed project documentation instead of stale training data.

  _We have successfully reached the point where we need to run a dedicated vector stack just to remind the AI that our API endpoint is called /users and not /get_user_list._

  `mcp` `documentation` `self-hosted` `context` `pinecone`
  </details>

- **[Decodo](https://github.com/decodo/mcp-server)** `⭐ 26` `updated ≤30d` An official MCP server that exposes Decodo's web scraping, search, ecommerce, social media, and AI proxy services as tools for MCP-compatible clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It lets developers wire production-grade scraping and data-collection capabilities directly into their AI coding workflows without building custom API integrations.

  _We have finally reached the point where your AI agent needs its own VPN, proxy rotation, and scraping stack just to fetch a Google search result._

  `claude` `context-engineering` `cursor` `mcp` `proxy` `scraping` `web-scraping`
  </details>

- **[mcp](https://github.com/edubase/mcp)** `⭐ 26` `updated ≤30d` An MCP server implementation that allows LLMs like Claude to interact with the EduBase e-learning platform for managing quizzes, exams, and user results via API tools. <details><summary>More about</summary>

  It enables developers building on EduBase to automate educational workflows and content management through natural language interactions with MCP-compatible clients.

  _Finally, the Model Context Protocol conquers its final frontier: helping LLMs autonomously generate math quizzes so you don't have to._

  `api` `edubase` `education` `llm-integration` `lms` `mcp` `mcp-server`
  </details>

- **[mcp-file-merger](https://github.com/exoticknight/mcp-file-merger)** `⭐ 26` `updated ≤1y` An MCP server that provides tools to merge multiple files into a single output file for AI assistants. <details><summary>More about</summary>

  It allows coding agents to consolidate scattered context and documentation into a single file, streamlining the input pipeline for large context windows.

  _We have successfully built infrastructure to solve the problem of having too many files, proving that our primary bottleneck is now successfully organizing the very tools we built to organize our work._

  `mcp` `file-management` `context-engineering`
  </details>

- **[mcp-server-python](https://github.com/inkeep/mcp-server-python)** `⭐ 26` `updated >1y` An MCP server implementation that connects the Inkeep RAG API to MCP-compatible clients like Claude Desktop to retrieve product documentation and documentation content. <details><summary>More about</summary>

  It allows developers to query their own project documentation directly inside their AI client instead of context-switching to a browser to read docs.

  _We have successfully abstracted the act of reading the documentation into a protocol that requires setting up a local Python environment and configuring JSON just to avoid opening a new tab._

  `mcp` `rag` `documentation` `python`
  </details>

- **[metmuseum-mcp](https://github.com/mikechao/metmuseum-mcp)** `⭐ 26` `updated ≤30d` An MCP server that exposes The Metropolitan Museum of Art's collection API to AI models, allowing natural language search, object retrieval, and image access. <details><summary>More about</summary>

  It provides a concrete reference implementation for developers building domain-specific MCP servers that wrap third-party REST APIs with rich media support.

  _We have successfully liberated AI agents from helping us debug code, empowering them instead to curate van Gogh retrospectives from the comfort of our IDEs._

  `mcp` `art` `api-wrapper` `met-museum`
  </details>

- **[opcua-mcp](https://github.com/kukapay/opcua-mcp)** `⭐ 26` `updated ≤1y` An MCP server that connects AI agents to OPC UA-enabled industrial systems to read and write real-time operational data. <details><summary>More about</summary>

  It allows developers to bridge AI-driven workflows with industrial automation hardware, enabling natural language control of physical devices.

  _Finally, we can over-engineer the factory floor with the same hallucination-prone language models that can't reliably center a div._

  `mcp` `industrial-iot` `opc-ua` `automation`
  </details>

- **[trello-desktop-mcp](https://github.com/kocakli/trello-desktop-mcp)** `⭐ 26` `updated ≤90d` A Model Context Protocol server that exposes 19 tools for managing Trello boards, cards, lists, and members directly from MCP-compatible AI clients like Claude Desktop and Gemini CLI. <details><summary>More about</summary>

  It allows developers to manage project boards and tasks through natural language conversations with their coding assistants, bridging the gap between AI workflows and project management.

  _We have successfully reached the point where an AI agent needs a dedicated server to drag a virtual card from 'In Progress' to 'Done' so you don't have to alt-tab into a browser._

  `mcp` `trello` `integrations` `typescript` `productivity`
  </details>

- **[depwire](https://github.com/depwire/depwire)** `⭐ 25` `updated ≤30d` A local CLI and MCP server that builds deterministic, tree-sitter-powered dependency graphs to let AI coding assistants safely analyze blast radius and architectural impact before making changes. <details><summary>More about</summary>

  It gives AI assistants compiler-level precision on symbol-level dependencies, preventing the classic 'delete one file, break thirty downstream consumers' scenario that plagues current AI refactoring workflows.

  _We have finally solved the problem of AI confidently deleting code it doesn't understand by adding an infrastructure layer that understands the code it doesn't understand._

  `mcp` `dependency-graph` `refactoring` `context-engineering` `cli`
  </details>

- **[insforge-mcp](https://github.com/insforge/insforge-mcp)** `⭐ 25` `updated ≤30d` An MCP server that exposes Insforge backend capabilities—such as auth, databases, file storage, and serverless functions—to coding agents and AI IDEs. <details><summary>More about</summary>

  It lets AI coding assistants directly scaffold and wire backend infrastructure into apps instead of stopping at the frontend, reducing the manual glue work between agent output and real backends.

  _Another layer in the stack where your agent can now proudly generate broken auth flows and misconfigured databases without you lifting a finger._

  `mcp` `backend` `coding-agent` `infrastructure` `insforge`
  </details>

- **[mcp-server-python](https://github.com/kestra-io/mcp-server-python)** `⭐ 25` `updated ≤30d` A Python MCP server that exposes Kestra orchestration workflows and tools to AI agents in IDEs like Cursor, VS Code, and Claude Desktop. <details><summary>More about</summary>

  It allows developers to control Kestra flows, executions, and backfills directly through natural language prompts in their AI-assisted editor instead of switching to the orchestration UI.

  _We have successfully abstracted workflow orchestration into yet another layer of context that your AI agent can now politely misunderstand._

  `mcp` `kestra` `orchestration` `python` `docker`
  </details>

- **[mcpr](https://github.com/phisanti/mcpr)** `⭐ 25` `updated ≤90d` MCPR is an R package that runs an MCP server to let AI agents execute code inside a persistent, stateful R session rather than stateless Rscript invocations. <details><summary>More about</summary>

  It preserves workspace state across multi-step analytical workflows, allowing agents to iterate on plots, models, and data without re-running entire scripts from scratch.

  _We have finally engineered a way for an AI to inherit our messy global R environments, ensuring that tomorrow’s agent will also panic at objects created three days ago._

  `r` `mcp` `data-analysis` `stateful-sessions`
  </details>

- **[ontomics](https://github.com/etiennechollet/ontomics)** `⭐ 25` `updated ≤30d` A Model Context Protocol server that builds a semantic index of a codebase's domain concepts, naming conventions, and behavioral similarities to reduce token usage and tool calls for coding agents. <details><summary>More about</summary>

  It allows coding agents like Claude Code and Codex to retrieve deep domain knowledge in a single tool call rather than burning tens of thousands of tokens on exploratory searches.

  _We have successfully optimized the part of the workflow where the AI guesses what your code means, so you can spend the saved time arguing with it about why the generated tests still don't compile._

  `mcp` `context-engineering` `semantic-search` `coding-agents` `rust`
  </details>

- **[perp-cli](https://github.com/hypurrquant/perp-cli)** `⭐ 25` `updated ≤30d` A CLI and MCP server that provides 18 tools for AI agents to trade perpetual futures across multiple DEXes including Pacifica, Hyperliquid, Lighter, and Aster. <details><summary>More about</summary>

  Developers building AI trading agents can plug this MCP server into Claude or other hosts to give their agents cross-chain trading, arbitrage scanning, and portfolio management across four major perpetual futures platforms.

  _The natural endpoint of 'agentic workflows' turns out to be a CLI that lets your LLM open leveraged positions on Hyperliquid at 3am while you sleep._

  `mcp-server` `trading` `defi` `cli` `perpetual-futures`
  </details>

- **[smartest-tv](https://github.com/hybirdss/smartest-tv)** `⭐ 25` `updated ≤30d` A CLI tool and MCP server that lets developers control smart TVs and play media via natural language commands in the terminal or through AI coding agents. <details><summary>More about</summary>

  It exposes 21 MCP tools for TV control, allowing developers to integrate media commands directly into their agent workflows like Claude Code or Codex.

  _We have finally achieved the platonic ideal of the modern developer lifestyle: an AI agent writing your code at 2am while a separate CLI tool handles putting on Frieren so you never have to touch a physical remote._

  `mcp-server` `cli` `home-automation` `tv-control` `smart-tv`
  </details>

- **[us-legal-mcp](https://github.com/jamesanz/us-legal-mcp)** `⭐ 25` `updated ≤30d` An MCP server that provides AI coding environments like Cursor and Claude Desktop with searchable access to US legislation, federal regulations, and court opinions. <details><summary>More about</summary>

  It allows developers building legal-tech or compliance workflows to query live congressional bills, Federal Register docs, and court opinions directly from their IDE without juggling multiple government API keys.

  _We have finally solved the hardest problem in modern development: enabling an LLM to cite the GENIUS Act while you're fixing a CSS bug at 2 AM._

  `mcp` `legal` `government` `cursor` `context`
  </details>

- **[waiaas](https://github.com/minhoyoo-iotrust/waiaas)** `⭐ 25` `updated ≤30d` A self-hosted wallet daemon and MCP server that lets AI agents execute on-chain transactions across Solana and EVM chains with configurable spending policies and owner approvals. <details><summary>More about</summary>

  Developers building AI agents that need to handle crypto payments can use this to securely delegate transaction execution without handing over full private key control.

  _We have finally invented the scenario where your LLM needs a spending allowance, a kill switch, and four tiers of parental supervision before it's allowed to buy a JPEG._

  `mcp` `wallet` `ai-agent` `blockchain` `self-hosted`
  </details>

- **[ig-mcp-server](https://github.com/inspektor-gadget/ig-mcp-server)** `⭐ 24` `updated ≤30d` An MCP server that exposes Inspektor Gadget's eBPF-powered container and Kubernetes observability tools as AI-callable functions for automated root cause analysis. <details><summary>More about</summary>

  It lets developers delegate low-level Kubernetes debugging to LLMs by turning dense kernel telemetry into structured data that an AI agent can reason over directly from a chat interface.

  _Now your AI can confidently explain exactly why your cluster is on fire while you sit back and wonder when you became the human approval step for an eBPF agent._

  `mcp` `kubernetes` `debugging` `ebpf` `observability`
  </details>

- **[mcp-ai-server-visual-studio](https://github.com/ladislavsopko/mcp-ai-server-visual-studio)** `⭐ 24` `updated ≤90d` A Visual Studio extension that runs an MCP server to expose Roslyn compiler insights and debugger access as tools for AI coding assistants. <details><summary>More about</summary>

  It gives AI agents semantic code understanding and runtime debugging inside Visual Studio, moving beyond file-system-level text matching.

  _We have reached the point where the IDE needs a protocol server so the AI can finally understand the code the IDE already understood in 2010._

  `mcp` `visual-studio` `roslyn` `debugging` `csharp`
  </details>

- **[servemyapi](https://github.com/jktfe/servemyapi)** `⭐ 24` `updated >1y` A macOS-only MCP server that stores and retrieves API keys via the macOS Keychain, exposing them to AI assistants through a standardized MCP interface. <details><summary>More about</summary>

  It lets developers stop scattering secrets across .env files while giving AI coding assistants a secure, centralized way to request the credentials they need to complete tasks.

  _We have successfully invented a way for your AI assistant to ask for your API keys, so you can feel productive while accelerating your own eventual security incident._

  `mcp` `macos` `api-keys` `security` `cli`
  </details>

- **[shadcn-ui-mcp-server](https://github.com/heilgar/shadcn-ui-mcp-server)** `⭐ 24` `updated ≤1y` An MCP server that lets AI coding agents discover, document, and install shadcn/ui components and blocks directly from the editor. <details><summary>More about</summary>

  It gives coding assistants direct access to component metadata and installation workflows, reducing context-switching during UI development.

  _We have now successfully automated the one part of frontend development that already came with copy-paste documentation._

  `mcp` `shadcn-ui` `components` `agent-tooling`
  </details>

- **[teamcity-mcp](https://github.com/daghis/teamcity-mcp)** `⭐ 24` `updated ≤30d` An MCP server that exposes JetBrains TeamCity CI/CD operations as tools for AI coding assistants like Claude Code, Cursor, and Windsurf. <details><summary>More about</summary>

  It allows developers to trigger builds, inspect test failures, and manage build configurations directly from their AI assistant without context-switching to the TeamCity UI.

  _Your AI assistant can now argue with you about why the build failed while simultaneously having the power to break the CI server entirely in 'Full Mode'._

  `mcp` `teamcity` `ci-cd` `devops` `typescript`
  </details>

- **[wsb-analyst-mcp](https://github.com/ferdousbhai/wsb-analyst-mcp)** `⭐ 24` `updated ≤1y` An MCP server that fetches and analyzes real-time WallStreetBets posts, comments, and stock tickers for use with Claude Desktop and other MCP clients. <details><summary>More about</summary>

  It lets developers wire Reddit sentiment data directly into LLM workflows, enabling rapid prototyping of market-analysis agents without building a custom Reddit scraping pipeline.

  _We have finally bridged the gap between enterprise-grade AI infrastructure and the financial advice of strangers yelling about tendies on the internet._

  `mcp` `reddit` `finance` `sentiment-analysis` `llm-tooling`
  </details>

- **[agrobr-mcp](https://github.com/bruno-portfolio/agrobr-mcp)** `⭐ 23` `updated ≤90d` An MCP server that connects LLMs to ten Brazilian public agricultural data sources, exposing crop estimates, pricing, climate, and deforestation data as tools for Claude Desktop, Cursor, and Claude Code. <details><summary>More about</summary>

  Developers building LLM-powered agtech workflows can give models live access to CONAB, IBGE, and B3 data without writing custom scraping or API integration code.

  _We have successfully reached the point where an AI agent can tell you the daily soy price in Mato Grosso but still can't figure out why your CI pipeline is failing._

  `mcp` `agriculture` `brazil` `data` `llm-integration`
  </details>

- **[cert-manager-mcp-server](https://github.com/pibblokto/cert-manager-mcp-server)** `⭐ 23` `updated ≤1y` An MCP server that lets AI assistants manage and troubleshoot cert-manager resources such as certificates and issuers inside Kubernetes clusters. <details><summary>More about</summary>

  Developers can offload tedious certificate hunting and renewal across namespaces and kubeconfig contexts directly to their AI assistant instead of writing kubectl incantations.

  _We have successfully reached the point where even our TLS certificates require an AI intermediary to feel emotionally supported._

  `mcp` `kubernetes` `cert-manager` `devops`
  </details>

- **[codex-mcp](https://github.com/codex-data/codex-mcp)** `⭐ 23` `updated >1y` A Model Context Protocol server that exposes enriched blockchain data from the Codex API to MCP-compatible clients like Claude Desktop and the Claude CLI. <details><summary>More about</summary>

  It allows developers building crypto/DeFi workflows to query enriched on-chain data directly from their AI assistant context without writing custom API integration glue code.

  _We have successfully abstracted blockchain data access into yet another protocol layer, because apparently the only thing developers love more than a new chain is a new middleware server to query it._

  `mcp` `blockchain` `data` `api`
  </details>

- **[dbt-docs-mcp](https://github.com/mattijsdp/dbt-docs-mcp)** `⭐ 23` `updated ≤1y` An MCP server that exposes dbt project metadata, graph information, and column-level lineage from manifest and catalog artifacts to AI clients. <details><summary>More about</summary>

  It allows developers to query complex dbt model lineage, dependencies, and SQL code directly through AI assistants like Claude or Cursor without leaving their editor.

  _You can now ask an LLM to trace your column lineage through a five-layer dbt spaghetti graph, which is slightly more dignified than crying into the manifest.json yourself._

  `mcp` `dbt` `data-lineage` `metadata`
  </details>

- **[doordash-mcp-server](https://github.com/jordandalton/doordash-mcp-server)** `⭐ 23` `updated >1y` A Model Context Protocol server that integrates DoorDash functionality into AI clients like Claude Desktop and Cursor via a local Node.js build. <details><summary>More about</summary>

  It allows developers to prototype agent workflows that interact with real-world delivery APIs directly from their IDE or local MCP client.

  _We have finally achieved the singularity: middleware that lets your coding agent order you dinner while you struggle to configure the build path._

  `mcp` `doordash` `node` `integration`
  </details>

- **[engram-rs](https://github.com/kael-bit/engram-rs)** `⭐ 23` `updated ≤90d` A lightweight, single-binary Rust memory engine for AI agents that manages memory lifecycle across a three-layer time axis and self-organizing topic tree, exposing itself as an MCP server. <details><summary>More about</summary>

  It gives coding agents a structured way to forget irrelevant context and promote durable knowledge using LLM-gated consolidation, hybrid search, and a local SQLite backend.

  _Finally, an Ebbinghaus-forgetting-curve implementation to solve the problem of an agent remembering that one typo you made in a throwaway branch three months ago._

  `mcp` `memory` `rust` `agents` `local-ai`
  </details>

- **[godot-mcp-runtime](https://github.com/erodenn/godot-mcp-runtime)** `⭐ 23` `updated ≤30d` A TypeScript MCP server that gives AI assistants runtime control over Godot 4.x games via input simulation, screenshots, UI discovery, and live GDScript execution without requiring project modifications. <details><summary>More about</summary>

  It closes the agent feedback loop for game development by letting AI verify its own changes in a running engine rather than relying solely on static file edits.

  _We have finally reached the point where the AI can play the game it just broke, staring at the crash screen so you don't have to._

  `mcp` `godot` `game-dev` `runtime` `typescript`
  </details>

- **[localstack-mcp-server](https://github.com/localstack/localstack-mcp-server)** `⭐ 23` `updated ≤30d` An MCP server that lets AI assistants directly manage LocalStack containers, deploy infrastructure with CDK/Terraform/SAM, analyze logs, and inject chaos faults for local cloud development. <details><summary>More about</summary>

  It bridges the gap between your AI coding agent and your local AWS emulator, allowing the agent to autonomously spin up resources, run deployments, and debug infrastructure without you wiring custom scripts.

  _We have successfully abstracted the abstraction, meaning your AI can now debug the fake cloud you're running on your laptop so you don't have to learn how to read a LocalStack log file._

  `mcp` `localstack` `aws` `infrastructure` `devops`
  </details>

- **[maven-tools-mcp](https://github.com/arvindand/maven-tools-mcp)** `⭐ 23` `updated ≤90d` An MCP server that provides AI assistants with structured Maven Central dependency intelligence, including version checks, release patterns, health audits, and optional Context7 documentation lookups for JVM projects. <details><summary>More about</summary>

  It allows coding agents to perform grounded dependency upgrades and audits directly within the editor or PR workflow without scraping web pages.

  _We've reached the point where even our dependency managers need their own context servers so the AI can feel confident about what version of Spring Boot you're definitely already using._

  `mcp` `java` `dependencies` `maven` `context7`
  </details>

- **[mcp-server-tidb](https://github.com/c4pt0r/mcp-server-tidb)** `⭐ 23` `updated >1y` A Model Context Protocol server that exposes a TiDB (serverless) database as a tool for AI assistants like Claude Desktop. <details><summary>More about</summary>

  It allows developers to let AI agents query and interact directly with their TiDB cloud instances via the standardized MCP interface.

  _We have finally abstracted away the need to open a SQL client, replacing it with a protocol layer that requires its own JSON config file and a Python venv._

  `mcp` `tidb` `database` `integration`
  </details>

- **[mcp-sqlalchemy-server](https://github.com/openlinksoftware/mcp-sqlalchemy-server)** `⭐ 23` `updated ≤1y` A lightweight MCP server built with FastAPI and SQLAlchemy that exposes database schemas, tables, and query execution capabilities to MCP-compatible AI clients via ODBC. <details><summary>More about</summary>

  Developers can connect AI assistants like Claude Desktop directly to Virtuoso, PostgreSQL, MySQL, or SQLite instances to inspect schemas and run queries without leaving their chat interface.

  _We have successfully abstracted SQL behind an AI chat interface, yet we still have to hand-write ODBC DSN configurations in INI files like it's 1999._

  `mcp` `database` `odbc` `sqlalchemy` `fastapi`
  </details>

- **[modbus-mcp](https://github.com/kukapay/modbus-mcp)** `⭐ 23` `updated ≤1y` An MCP server that exposes industrial Modbus devices over TCP, UDP, or serial connections, allowing AI agents to read and write registers and coils via natural language prompts. <details><summary>More about</summary>

  It bridges the gap between industrial IoT hardware and AI agent workflows, letting developers automate and analyze physical systems without writing custom protocol glue code.

  _We’ve successfully connected the ancient, rugged world of industrial PLCs to the modern, hallucination-prone world of LLMs, so your AI can now misread a holding register with absolute confidence._

  `mcp` `iot` `industrial` `modbus` `server`
  </details>

- **[text-to-graphql-mcp](https://github.com/arize-ai/text-to-graphql-mcp)** `⭐ 23` `updated ≤90d` An MCP server that converts natural language queries into valid GraphQL using a LangGraph agent, integrating with AI assistants like Claude Desktop and Cursor. <details><summary>More about</summary>

  It allows developers to query GraphQL APIs conversationally through their AI assistant, removing the need to manually construct complex queries against a schema.

  _We have successfully abstracted the act of learning a query language into the act of debugging an LLM's interpretation of a schema it barely understands._

  `mcp` `graphql` `langgraph` `cursor` `claude`
  </details>

- **[dragonmcp](https://github.com/arthurpanhku/dragonmcp)** `⭐ 22` `updated ≤90d` An MCP server that exposes local life service APIs in Greater China and Asia—such as MTR schedules, Amap directions, and weather—to AI agents, with additional services like Didi and Meituan planned as mocks. <details><summary>More about</summary>

  Developers building region-specific AI agents can plug into a single MCP endpoint to access local transport, mapping, and lifestyle APIs without wiring each service individually.

  _We’ve successfully built the infrastructure for an AI to order takeout in Hong Kong before most of us figured out how to make Claude reliably edit a PR._

  `mcp` `local-services` `asia` `agent-tooling`
  </details>

- **[fewsats-mcp](https://github.com/fewsats/fewsats-mcp)** `⭐ 22` `updated ≤1y` An MCP server that integrates Fewsats wallet and payment APIs, allowing AI agents to check balances, manage payment methods, and complete purchases programmatically. <details><summary>More about</summary>

  It enables developers building AI agents to add native payment capabilities without building custom payment integrations, letting agents securely transact on behalf of users.

  _Your AI agent can now autonomously drain your Fewsats wallet at 3 AM, because the natural next step after autonomous code generation was autonomous impulse buying._

  `agent-tooling` `directory` `fewsats` `mcp` `payments` `registry`
  </details>

- **[growthbook-mcp](https://github.com/growthbook/growthbook-mcp)** `⭐ 22` `updated ≤30d` An official MCP server for GrowthBook that allows LLM clients to programmatically create feature flags, retrieve experiment details, and manage A/B tests. <details><summary>More about</summary>

  It lets developers manage feature flags and experiments through their AI chat interface instead of context-switching to the GrowthBook dashboard.

  _Yet another MCP server to add to the config file, because apparently the 12-step ritual of editing JSON just to toggle a boolean flag is the future of DevOps._

  `mcp` `feature-flags` `growthbook` `ab-testing`
  </details>

- **[mcp-chess](https://github.com/jiayao/mcp-chess)** `⭐ 22` `updated >1y` An MCP server that enables LLMs to play chess and analyze game positions through tools for board visualization, move validation, and PGN analysis. <details><summary>More about</summary>

  It demonstrates how to wrap game logic into the Model Context Protocol, allowing developers to test LLM reasoning and tool-use capabilities in a structured, rule-heavy environment.

  _We have finally achieved the pinnacle of agentic workflows: an AI that can lose to you at chess in a language model context window._

  `mcp` `chess` `llm-tools` `game-integration`
  </details>

- **[mcp-mifosx](https://github.com/openmf/mcp-mifosx)** `⭐ 22` `updated ≤30d` An open-source MCP server that exposes Apache Fineract / Mifos X core banking operations as AI-consumable tools, with implementations in Go, Java, Python, and Rust. <details><summary>More about</summary>

  It lets developers plug AI agents directly into a real core-banking backend, so you can automate loans, clients, and backoffice workflows without writing yet another brittle REST integration layer.

  _We have reached the point where even core banking infrastructure is being wrapped in MCP so your LLM can misplace a loan application with autonomous confidence._

  `mcp` `fintech` `banking` `core-banking` `agent-integration`
  </details>

- **[nearby-search-mcp](https://github.com/kukapay/nearby-search-mcp)** `⭐ 22` `updated >1y` An MCP server that detects a user's location via IP and searches for nearby places using the Google Places API. <details><summary>More about</summary>

  It allows AI agents and MCP-compatible clients to perform location-aware searches without requiring manual GPS input or complex API wiring.

  _Another niche MCP server joins the ecosystem, proving that the 'build once, integrate nowhere' era is in full swing._

  `mcp` `location` `server` `google-places` `ip-geolocation`
  </details>

- **[octomind-mcp](https://github.com/octomind-dev/octomind-mcp)** `⭐ 22` `updated ≤90d` An MCP server that exposes Octomind's e2e testing platform tools, resources, and prompts to AI agents in local development environments. <details><summary>More about</summary>

  It allows coding agents to autonomously create, execute, and manage end-to-end tests within your existing IDE or CLI workflow without switching context to a separate platform.

  _Now your AI agent can write the tests that will inevitably fail when the UI changes, triggering another agent to fix them, in a beautiful, fully automated ouroboros of debugging._

  `mcp` `e2e-testing` `developer-tools` `agent-tools`
  </details>

- **[pgtuner_mcp](https://github.com/isdaniel/pgtuner_mcp)** `⭐ 22` `updated ≤90d` An MCP server that provides AI-powered PostgreSQL performance tuning, including slow query analysis, index recommendations via HypoPG, and database health checks. <details><summary>More about</summary>

  It allows AI agents and MCP clients to autonomously detect bottlenecks and recommend optimizations directly against a live Postgres instance.

  _We have successfully abstracted database administration so far away that we now need a protocol server just to ask an LLM why our RDS bill is $400._

  `mcp` `postgresql` `performance` `database` `tuning`
  </details>

- **[qasphere-mcp](https://github.com/hypersequent/qasphere-mcp)** `⭐ 22` `updated ≤30d` An MCP server that connects LLMs and AI IDEs to the QA Sphere test management system, enabling direct interaction with test cases. <details><summary>More about</summary>

  It allows developers to reference, summarize, and chat about QA Sphere test cases directly within their AI-powered coding environment, bridging the gap between test management and code generation.

  _We have successfully abstracted the test case so far away from the code that you now need a specific protocol server just to ask an AI what you were supposed to be testing._

  `ai-ide-integration` `ai-testing` `mcp` `qa` `qa-sphere` `test-management`
  </details>

- **[slack-mcp-server](https://github.com/jtalk22/slack-mcp-server)** `⭐ 22` `updated ≤30d` A session-based MCP server that gives AI agents direct access to Slack using browser session tokens instead of OAuth, enabling integration with Claude Code, Cursor, Copilot, and other MCP clients. <details><summary>More about</summary>

  It lets developers query, search, and respond to Slack threads directly from their AI coding environment without needing admin approval or a registered Slack app.

  _We have finally achieved the platonic ideal of modern engineering: your AI agent can now achieve inbox zero in Slack without you ever having to open the tab that causes you existential dread._

  `mcp` `slack` `session-tokens` `ide-integration`
  </details>

- **[amazon-ads-mcp-server](https://github.com/marketplaceadpros/amazon-ads-mcp-server)** `⭐ 21` `updated ≤1y` An MCP server that connects AI clients like Claude Desktop to Amazon Advertising data, enabling natural language queries of Sponsored Products, Brands, and Display campaigns. <details><summary>More about</summary>

  It allows developers working on ad-tech integrations to query Amazon Ads performance and manage campaigns directly through their existing MCP-compatible AI interfaces.

  _We have successfully abstracted advertising APIs so thoroughly that you can now tank your ROAS using conversational English in Claude Desktop._

  `mcp` `amazon-ads` `marketing` `api-integration`
  </details>

- **[higress-ops-mcp-server](https://github.com/higress-group/higress-ops-mcp-server)** `⭐ 21` `updated >1y` A Model Context Protocol (MCP) server that allows AI agents to configure and manage Higress gateways, paired with a LangGraph-based client for agentic interaction. <details><summary>More about</summary>

  It exposes gateway operations as callable tools for LLMs, allowing developers to manage infrastructure through conversational workflows rather than manual UI or CLI steps.

  _We have successfully abstracted away the YAML so your agent can now misconfigure your ingress routes with the confidence and creativity of a junior dev on a Monday morning._

  `mcp` `higress` `ops` `agent` `infrastructure`
  </details>

- **[mcp-gateway](https://github.com/mikkoparkkola/mcp-gateway)** `⭐ 21` `updated ≤30d` A Rust-based gateway that multiplexes multiple MCP servers and REST APIs behind a single Meta-MCP interface to drastically reduce context window token usage. <details><summary>More about</summary>

  Developers can expose 110+ REST capabilities and backend tools to AI clients without bloating prompts, since the gateway routes requests through a compact 14-tool discovery surface.

  _We have successfully engineered a proxy to solve the exact context-bloat problem that arose because we insisted on giving the AI access to every tool ever written._

  `mcp` `rust` `gateway` `context-compression` `devops`
  </details>

- **[mcp-server-raygun](https://github.com/mindscapehq/mcp-server-raygun)** `⭐ 21` `updated ≤90d` A remote Model Context Protocol (MCP) server that connects AI coding assistants to Raygun crash reporting and real user monitoring data for error investigation and resolution. <details><summary>More about</summary>

  Developers can ask their IDE assistant to investigate crash reports, correlate errors with deployments, and analyze performance trends without leaving the editor.

  _Now your AI can debug production crashes using telemetry you were too overwhelmed by notifications to look at yourself._

  `mcp` `raygun` `error-monitoring` `context-protocol`
  </details>

- **[mcp-sqlite](https://github.com/panasenco/mcp-sqlite)** `⭐ 21` `updated ≤180d` An MCP server that exposes SQLite databases to AI agents via tools for schema discovery, arbitrary SQL execution, and Datasette-compatible canned queries. <details><summary>More about</summary>

  It lets coding agents safely query local data without external system access, bridging structured data and agent workflows using a familiar metadata format.

  _The ecosystem now requires installing a dedicated server just to let your AI assistant run SELECT * FROM users on a file that is already sitting on your hard drive._

  `mcp` `sqlite` `database` `context-engineering`
  </details>

- **[mcp-terragrunt-docs](https://github.com/excoriate/mcp-terragrunt-docs)** `⭐ 21` `updated >1y` A Model Context Protocol server built with Deno and TypeScript that provides AI agents with real-time access to Terragrunt documentation and GitHub issues. <details><summary>More about</summary>

  It solves the poor IDE support for Terragrunt by feeding LLMs accurate, up-to-date documentation and issue context instead of relying on hallucination-prone training data.

  _We have successfully abstracted infrastructure definitions to the point where we now need a dedicated protocol server just to ask an AI what a configuration block does._

  `mcp` `terragrunt` `devops` `context-engineering`
  </details>

- **[neotoma](https://github.com/markmhendrickson/neotoma)** `⭐ 21` `updated ≤30d` Neotoma is a local-first, deterministic state layer and MCP server that stores versioned, replayable entity records for AI agents to maintain consistent memory across tools like Claude, Cursor, and ChatGPT. <details><summary>More about</summary>

  It solves the 'human sync layer' problem by giving agents a shared, auditable memory graph with full provenance, eliminating conflicting facts and lost context across sessions.

  _We have successfully reached the point where we need a dedicated event-sourced database just to keep our AI assistants from forgetting who we are between tabs._

  `agent-memory` `mcp` `state-management` `local-first`
  </details>

- **[User Prompt MCP](https://github.com/nazar256/user-prompt-mcp)** `⭐ 21` `updated >1y` A Model Context Protocol server for Cursor that pauses AI generation to request additional user input via a native OS dialog box. <details><summary>More about</summary>

  It allows coding agents to handle ambiguity interactively without ending the generation context, bridging the gap between autonomous coding and human decision-making.

  _We have successfully built a tool to ask the human what they meant, proving that the 'autonomous' agent still needs a babysitter with a GUI dialog box._

  `context` `cursor` `interactive` `mcp`
  </details>

- **[weather-mcp-server](https://github.com/sjanax01/weather-mcp-server)** `⭐ 21` `updated ≤1y` A minimal Model Context Protocol server built with FastAPI that exposes weather data tools, including current conditions, forecasts, and air quality, to AI assistants via the MCP framework. <details><summary>More about</summary>

  It gives coding agents and AI assistants a standardized way to pull live weather, forecast, and location data into developer workflows without custom API glue code.

  _We have officially reached the point where the temperature outside is accessible to your AI assistant, yet neither of them can explain why your build is failing._

  `ai-tools` `fastapi` `mcp` `weather-api`
  </details>

- **[callcenter.js-mcp](https://github.com/gerkensm/callcenter.js-mcp)** `⭐ 20` `updated ≤1y` An MCP server and CLI tool that bridges OpenAI's real-time voice API with VoIP networks to let AI assistants make and handle phone calls on a developer's behalf. <details><summary>More about</summary>

  It extends MCP clients like Claude Code with outbound voice-agent capabilities, allowing developers to script or delegate real phone interactions through their existing AI workflow.

  _We have finally bridged the gap between hallucinating about your code and hallucinating at your pizzeria, and the README openly warns that the agent may call strangers in the middle of the night to play scary noises._

  `mcp` `voip` `voice-agent` `cli`
  </details>

- **[github-repos-manager-mcp](https://github.com/kurdin/github-repos-manager-mcp)** `⭐ 20` `updated ≤1y` A Node.js MCP server that exposes 89 GitHub API tools to MCP clients like Claude Desktop and Cursor using only a personal access token, with no Docker required. <details><summary>More about</summary>

  It lets developers automate comprehensive repository management, issue tracking, and PR workflows directly through their AI assistant rather than switching to the GitHub UI or CLI.

  _We have successfully abstracted away the need to open a browser tab, meaning your AI can now manage your GitHub notifications while you manage your AI's GitHub tokens._

  `mcp` `github` `automation` `nodejs` `api`
  </details>

- **[gnosis-mcp](https://github.com/nicholasglazer/gnosis-mcp)** `⭐ 20` `updated ≤30d` A zero-config MCP server that indexes local documentation, git history, and websites into a local SQLite or PostgreSQL database for efficient hybrid search by AI agents. <details><summary>More about</summary>

  It drastically reduces token usage and hallucinations by letting coding agents retrieve precise, grounded documentation snippets instead of ingesting entire files.

  _Because apparently the bleeding edge of AI engineering in 2026 is just building a better local search index so your agent stops hallucinating the API docs you already wrote._

  `mcp` `rag` `local-ai` `documentation` `context-engineering`
  </details>

- **[Hippycampus](https://github.com/cromwellian/hippycampus)** `⭐ 20` `updated ≤1y` A LangChain-based CLI and MCP server that dynamically loads OpenAPI specifications to automatically turn REST endpoints into MCP resources. <details><summary>More about</summary>

  It allows developers to quickly wrap existing REST APIs into the Model Context Protocol ecosystem without manually writing server integration code.

  _Another heroic attempt to solve the 'I have 400 REST endpoints and zero MCP servers' problem, ensuring you can automate API calls you probably shouldn't be automating in the first place._

  `cli` `langchain` `mcp` `openapi` `rest`
  </details>

- **[mcp-apple-music](https://github.com/cifero74/mcp-apple-music)** `⭐ 20` `updated ≤90d` An MCP server that connects Claude Desktop to Apple Music, enabling search, library management, and playlist creation via MusicKit API integration. <details><summary>More about</summary>

  Developers can script and automate Apple Music library workflows through Claude without writing custom API glue code or handling token management.

  _We have finally achieved the future: a locally running AI agent that needs two tokens, a wizard, and a browser OAuth dance just to add Nick Cave albums to a playlist._

  `mcp` `apple-music` `claude` `musickit` `fastmcp`
  </details>

- **[ragstack-lambda](https://github.com/hatmanstack/ragstack-lambda)** `⭐ 20` `updated ≤30d` A serverless document and media processing stack that builds a retrieval-augmented knowledge base on AWS Lambda and exposes it to AI assistants via MCP. <details><summary>More about</summary>

  It lets developers spin up a scalable RAG pipeline on AWS with zero idle costs and integrate it directly into MCP-compatible assistants.

  _Because nothing says 'focus on shipping features' like deploying a bespoke serverless knowledge graph just to ask a chatbot where that one paragraph was buried in Q3's PDF archives._

  `rag` `mcp` `aws` `serverless` `knowledge-base`
  </details>

- **[x-mcp-server](https://github.com/mbelinky/x-mcp-server)** `⭐ 20` `updated ≤1y` An MCP server that enables AI agents to interact with X (formerly Twitter) via OAuth 1.0a and 2.0, supporting tweets, media uploads, and searches. <details><summary>More about</summary>

  It allows developer tools and coding agents to programmatically post, delete, and search on X without the developer manually wiring up the legacy and modern API versions themselves.

  _We have officially reached the point where we need dedicated authentication bridges so our AI agents can argue with strangers on the internet autonomously._

  `mcp` `x-api` `oauth` `typescript` `social-media`
  </details>

- **[Nexus](https://github.com/adawalli/nexus)** `⭐ 19` `updated ≤90d` An MCP server that provides AI-powered search capabilities via OpenRouter, exposing models like Perplexity Sonar and Grok 4 as tools for MCP-compatible clients such as Claude Desktop and Cursor. <details><summary>More about</summary>

  It gives developers a zero-install way to plug real-time web search and training-data knowledge from multiple model families directly into their existing MCP client workflows.

  _We have successfully abstracted the abstraction by adding a protocol server so our assistants can argue with other assistants about which search provider is least hallucinatory._

  `mcp` `openrouter` `search` `typescript`
  </details>

- **[python-openstackmcp-server](https://github.com/openstack-kr/python-openstackmcp-server)** `⭐ 19` `updated ≤90d` An MCP server that lets AI assistants manage OpenStack resources like compute, networking, and storage via the Model Context Protocol. <details><summary>More about</summary>

  Developers running infrastructure on OpenStack can now delegate cloud resource management to their local AI assistants instead of writing raw SDK calls.

  _We have successfully abstracted cloud infrastructure management into a protocol that requires an AI to translate your intent into API calls you could have written yourself in the time it took to configure the MCP server._

  `mcp` `openstack` `cloud` `infrastructure`
  </details>

- **[real-browser-mcp](https://github.com/ofershap/real-browser-mcp)** `⭐ 19` `updated ≤30d` An MCP server paired with a Chrome extension that lets AI agents see and control a developer's existing browser, including active sessions and logins. <details><summary>More about</summary>

  It allows coding agents to verify UI changes directly in an authenticated browser rather than requiring developers to manually alt-tab and click through test flows.

  _We have finally bridged the gap between an AI writing your code and the AI staring at the same Chrome tab you forgot to close three days ago._

  `mcp` `browser-automation` `chrome-extension` `cursor` `agent-tools`
  </details>

- **[rug-check-mcp](https://github.com/kukapay/rug-check-mcp)** `⭐ 19` `updated ≤1y` An MCP server that analyzes Solana token addresses using the Solsniffer API to return risk scores, audit status, and liquidity details for AI agents. <details><summary>More about</summary>

  It provides a structured tool for AI agents to perform due diligence on Solana meme tokens, bridging blockchain data with LLM workflows.

  _We have successfully built an autonomous agent pipeline to verify if a JPEG of a frog is a financial safety risk, just in case the AI decides to ape in._

  `mcp` `solana` `crypto` `risk-analysis`
  </details>

- **[simctl-mcp](https://github.com/ambar/simctl-mcp)** `⭐ 19` `updated ≤1y` A Model Context Protocol server that exposes iOS Simulator control commands—such as device management, app lifecycle, and permissions—to MCP-compatible AI tools like Cursor. <details><summary>More about</summary>

  It lets AI coding assistants directly manipulate iOS simulators, enabling automated testing, app management, and device control without leaving the IDE workflow.

  _We have finally achieved the singularity where your LLM can grant camera permissions to a simulated Settings app, but still can't center a div in the real one._

  `mcp` `ios` `simulator` `developer-tools`
  </details>

- **[weppy-roblox-mcp](https://github.com/hope1026/weppy-roblox-mcp)** `⭐ 19` `updated ≤30d` An MCP server and Roblox Studio plugin that lets AI coding agents like Claude, Cursor, and Codex directly create and edit scripts, terrain, assets, and UI inside a live Roblox Studio session. <details><summary>More about</summary>

  It closes the loop between AI code generation and game engine execution by letting agents manipulate the Roblox DataModel in real time, removing the manual copy-paste step for Luau的开发工作。.

  _We have finally achieved the dream of watching a language model try to debug a terrain generation script by repeatedly crashing your local game engine at 3 AM._

  `mcp` `roblox` `game-dev` `luau` `ai-agents`
  </details>

- **[alertmanager-mcp-server](https://github.com/ntk148v/alertmanager-mcp-server)** `⭐ 18` `updated ≤90d` A Model Context Protocol server that lets AI assistants query and manage Prometheus Alertmanager resources, including alerts, silences, and alert groups. <details><summary>More about</summary>

  It allows developers to manage incident response and alerting workflows via natural language through tools like Claude Desktop, removing the need to manually query Alertmanager APIs or UIs.

  _Your monitoring stack is now one vague prompt away from silencing every alert in production while you weren't looking._

  `mcp` `devops` `monitoring` `alertmanager` `prometheus`
  </details>

- **[azure-resource-graph-mcp-server](https://github.com/hardik-id/azure-resource-graph-mcp-server)** `⭐ 18` `updated ≤1y` A Model Context Protocol (MCP) server that allows AI agents in IDEs like Cursor and VS Code to query Azure Resource Graph for resource information across subscriptions. <details><summary>More about</summary>

  It bridges the gap between AI coding assistants and live Azure infrastructure, allowing developers to query cloud resources directly from their editor without switching contexts.

  _Now your AI can second-guess your Azure subscription costs while you're trying to write a for-loop, provided you've correctly configured three different JSON files and the Azure CLI._

  `mcp` `azure` `cloud` `infrastructure`
  </details>

- **[connectrylab-architect-cert-mcp](https://github.com/connectry-io/connectrylab-architect-cert-mcp)** `⭐ 18` `updated ≤90d` A free, open-source MCP server that turns Claude into a personal tutor for the Claude Certified Architect exam with 390 questions, guided capstone builds, and spaced repetition. <details><summary>More about</summary>

  It allows developers preparing for Anthropic's certification to study interactively through their existing Claude workflow with practice exams and progress tracking.

  _We have successfully built an AI-powered study tool for a certification that validates your ability to architect AI systems, completing the recursion with style._

  `mcp` `certification` `claude` `exam-prep` `education`
  </details>

- **[IgorGanapolsky/mcp-memory-gateway](https://github.com/igorganapolsky/thumbgate)** `⭐ 18` `updated ≤30d` An MCP-compatible governance tool that converts user feedback (thumbs-up/down) into pre-action checks that block repeated AI agent mistakes across sessions to reduce token waste. <details><summary>More about</summary>

  It targets the hidden cost of AI coding by preventing agents from repeating expensive errors across Claude Code, Cursor, Codex, Gemini, and other MCP-compatible environments.

  _We have finally reached the point where we need a gatekeeper to stop our autonomous agents from confidently force-pushing to main on repeat, because apparently the agents have better retention policies than we do._

  `agent-governance` `cost-optimization` `guardrails` `mcp` `memory` `token-savings`
  </details>

- **[Imagician](https://github.com/flowy11/imagician)** `⭐ 18` `updated ≤180d` An MCP server for image editing that exposes operations like resizing, format conversion, cropping, and compression to AI assistants such as Claude Code and Cursor. <details><summary>More about</summary>

  It lets AI coding agents directly manipulate images in a project workflow without developers switching to external graphics tools or writing one-off scripts.

  _You now have an AI agent that can rotate your JPEGs, but it still cannot reliably center a div._

  `claude-code` `cursor` `image-editing` `mcp`
  </details>

- **[jupytercad-mcp](https://github.com/asmith26/jupytercad-mcp)** `⭐ 18` `updated ≤1y` An MCP server that allows LLMs to control JupyterCAD, enabling natural language creation and manipulation of 3D CAD models like boxes, spheres, and boolean operations. <details><summary>More about</summary>

  It bridges the gap between generative AI and parametric CAD workflows, allowing developers to prototype geometry through conversation rather than manual GUI interaction.

  _Finally, an MCP server so niche that your LLM can now confidently hallucinate structural engineering failures in JupyterLab instead of just your production codebase._

  `mcp` `cad` `jupyterlab` `llm-integration`
  </details>

- **[mcp-aiven](https://github.com/aiven-open/mcp-aiven)** `⭐ 18` `updated ≤30d` An official Model Context Protocol server that lets AI assistants manage Aiven cloud services like PostgreSQL and Kafka directly from the development environment. <details><summary>More about</summary>

  It allows developers to provision, modify, and inspect cloud infrastructure through natural language prompts in tools like Claude, Cursor, and VS Code Copilot.

  _We have finally automated the part of the job where you accidentally drop a production database by typing the wrong command, and replaced it with an AI agent that will do it with confident enthusiasm._

  `mcp` `aiven` `cloud-infrastructure` `devops`
  </details>

- **[mcp-server-iplocate](https://github.com/iplocate/mcp-server-iplocate)** `⭐ 18` `updated ≤1y` An MCP server that exposes IP address geolocation, network, privacy, and abuse contact data from the IPLocate.io API to compatible AI coding assistants like Cursor and Claude Desktop. <details><summary>More about</summary>

  Developers can enrich AI-assisted workflows with real-time IP intelligence for security triage, network debugging, and feature building without leaving their editor.

  _Another indispensable micro-tool that silently raises the bar for what your coding agent can do while making you feel suspiciously productive for looking up an IP address._

  `mcp` `ip-geolocation` `networking` `security` `cursor`
  </details>

- **[mcp-server-trino](https://github.com/dataring-engineering/mcp-server-trino)** `⭐ 18` `updated >1y` An MCP server that exposes Trino tables and SQL execution capabilities to AI models via the Model Context Protocol. <details><summary>More about</summary>

  It allows AI coding assistants to directly query distributed data lakes and warehouses, bridging the gap between natural language prompts and big data analytics.

  _We have successfully abstracted SQL into yet another protocol layer, ensuring that your AI can now hallucinate queries against a petabyte-scale cluster with standard-compliant efficiency._

  `mcp` `trino` `sql` `database` `data-engineering`
  </details>

- **[mendeley-mcp](https://github.com/pallaprolus/mendeley-mcp)** `⭐ 18` `updated ≤180d` An MCP server that connects a Mendeley reference library to LLM clients like Claude Desktop and Cursor for searching, retrieving, and managing academic papers. <details><summary>More about</summary>

  It allows developers and researchers to query their personal academic libraries and the global Mendeley catalog directly from their AI coding environments without leaving the workflow.

  _We have successfully automated the process of doom-scrolling through academic papers so you can now do it with a chatbot instead of a browser tab._

  `mcp` `reference-manager` `academic` `python` `claude`
  </details>

- **[nyt](https://github.com/angheljf/nyt)** `⭐ 18` `updated >1y` A TypeScript-based MCP server that connects the New York Times API to AI assistants, allowing keyword searches of articles from the last 30 days. <details><summary>More about</summary>

  It extends the context window of MCP-compatible assistants like Claude Desktop with real-time access to recent news, without requiring manual copy-pasting of articles.

  _We have reached the point where an AI agent needs a dedicated server just to remember that the news happened this month._

  `mcp` `typescript` `nyt` `context-extension`
  </details>

- **[token-minter-mcp](https://github.com/kukapay/token-minter-mcp)** `⭐ 18` `updated >1y` An MCP server that provides tools for AI agents to deploy ERC-20 tokens, transfer assets, and query blockchain metadata across 21 different chains. <details><summary>More about</summary>

  It allows developers to integrate on-chain token operations directly into agentic workflows, enabling AI assistants to handle Web3 deployment tasks without manual CLI intervention.

  _We have finally bridged the gap between hallucinating smart contract code and actually spending gas fees to deploy it via a JSON config file._

  `mcp` `web3` `blockchain` `erc-20` `fintech`
  </details>

- **[agent-tool](https://github.com/knewstimek/agent-tool)** `⭐ 17` `updated ≤30d` An MCP tool server that provides AI coding agents with encoding-aware file operations, remote execution via SSH/SFTP, and reverse engineering capabilities like binary analysis and DAP debugging. <details><summary>More about</summary>

  It fixes common friction points in AI coding agents—such as indentation corruption and encoding loss—while bundling 50 tools into a single binary to expand an agent's reach into system processes, databases, and remote servers.

  _We have reached the point where we need a dedicated server just to stop our AI assistants from silently converting legacy encodings and breaking tab indentation, because apparently the agents can't be trusted with a simple text editor._

  `mcp` `coding-agents` `developer-tools` `encoding` `reverse-engineering`
  </details>

- **[apple-mail-mcp](https://github.com/imdinu/apple-mail-mcp)** `⭐ 17` `updated ≤30d` An Apple Mail MCP server for macOS that provides full-text email search and reading capabilities via an FTS5 index, designed for reliable performance on large mailboxes. <details><summary>More about</summary>

  It allows developers using Claude Desktop or Claude Code to search and read emails directly from their local Apple Mail client without timing out on large datasets.

  _We have successfully abstracted email, the most chaotic layer of the developer workflow, into a JSON tool call, yet we still haven't figured out how to actually answer them._

  `mcp` `apple-mail` `macos` `claude` `automation`
  </details>

- **[Hive Intelligence](https://github.com/hive-intel/hive-sdk)** `⭐ 17` `updated ≤30d` An MCP server that aggregates live crypto market data, DeFi activity, and on-chain signals from nine providers into a single tool surface for AI agents. <details><summary>More about</summary>

  Developers wiring AI agents into crypto workflows can avoid stitching together nine separate APIs by pointing their MCP client at one normalized server.

  _We have successfully reached the point where even our AI agents need a dedicated DeFi data stack, lest they form incorrect opinions about token honeypots._

  `agent-tooling` `cli` `crypto` `defi` `mcp`
  </details>

- **[jean-technologies/smartlead-mcp-server-local](https://github.com/jonathan-politzki/smartlead-mcp-server)** `⭐ 17` `updated ≤1y` A local MCP server that exposes Smartlead email marketing API features to AI assistants like Claude Desktop and automation tools like n8n. <details><summary>More about</summary>

  It allows developers to manage email campaigns, leads, and analytics directly through AI chat interfaces or workflow automations without writing custom API integration code.

  _We have successfully abstracted email marketing campaigns into tokens, meaning your AI can now ruin your deliverability while you watch it happen in a terminal._

  `api-wrapper` `automation` `email-marketing` `mcp` `n8n`
  </details>

- **[mcp-code-runner](https://github.com/axliupore/mcp-code-runner)** `⭐ 17` `updated >1y` An MCP (Model Context Protocol) server that executes code securely inside Docker containers on the host machine. <details><summary>More about</summary>

  It allows MCP-compatible AI agents to run generated code safely in an isolated environment to verify output without polluting the host system.

  _Yet another layer in the stack where we trust a large language model to write code, a protocol server to receive it, and a Docker container to catch the fire._

  `mcp` `code-execution` `docker` `sandbox`
  </details>

- **[mcp-dexscreener](https://github.com/janswist/mcp-dexscreener)** `⭐ 17` `updated >1y` A Model Context Protocol server that exposes the Dexscreener API, allowing AI agents to query on-chain token prices and trading pair data. <details><summary>More about</summary>

  It enables developers to give their local AI agents real-time crypto market data access without needing to write custom API integration code.

  _We have successfully abstracted the act of checking coin prices into a protocol handshake, ensuring your AI can now panic about market volatility on your behalf._

  `mcp` `crypto` `api` `tooling`
  </details>

- **[nile-mcp-server](https://github.com/niledatabase/nile-mcp-server)** `⭐ 17` `updated >1y` An MCP server that lets LLM applications manage Nile databases, run SQL queries, and handle credentials through the Model Context Protocol. <details><summary>More about</summary>

  Developers using Nile can wire its database, tenant, and auth primitives directly into Claude Desktop and other MCP-compatible workflows without writing glue code.

  _Now your database has a protocol wrapper so an LLM can drop tables while you’re busy configuring the protocol wrapper._

  `mcp` `database` `nile` `typescript`
  </details>

- **[opengenes-mcp](https://github.com/longevity-genie/opengenes-mcp)** `⭐ 17` `updated ≤1y` An MCP server that provides AI assistants with structured, read-only access to the OpenGenes aging and longevity research database. <details><summary>More about</summary>

  It allows developers building bioinformatics workflows to query lifespan and gene-criteria data directly via natural language in their IDE or chat interface.

  _Now your AI can confidently hallucinate about your mortality using up-to-date genetic data straight from a SQLite file on the Hugging Face Hub._

  `mcp` `bioinformatics` `longevity` `data-access`
  </details>

- **[bicscan-mcp](https://github.com/ahnlabio/bicscan-mcp)** `⭐ 16` `updated ≤90d` A Model Context Protocol server that integrates the BICScan API to provide blockchain address risk scoring, asset information, and real-time scanning for crypto addresses, domains, and dApps. <details><summary>More about</summary>

  It allows developers using MCP-compatible clients like Claude Desktop to query blockchain risk data and asset holdings directly within their workflow without switching contexts.

  _We have successfully abstracted away the need to leave our IDEs to check if that wallet address is a scam, marking a new peak in developer laziness._

  `mcp` `blockchain` `security` `fintech` `api`
  </details>

- **[cacheoverflow](https://github.com/getcacheoverflow/cacheoverflow)** `⭐ 16` `updated ≤90d` An MCP server and knowledge base that lets AI agents share verified solutions to common coding problems, allowing agents to search for and publish fixes to a shared pool. <details><summary>More about</summary>

  It reduces redundant debugging time by letting your coding agent reuse solutions that other agents have already verified, rather than solving the same issue from scratch.

  _We have finally built a shared memory for AI agents, meaning your $20/month Cursor subscription can now benefit from someone else's suffering in real time._

  `mcp` `knowledge-base` `agent-memory` `debugging`
  </details>

- **[calcom-mcp](https://github.com/danielpeter-99/calcom-mcp)** `⭐ 16` `updated ≤1y` A FastMCP server that exposes the Cal.com API as tools so LLMs can programmatically manage event types, bookings, and scheduling data. <details><summary>More about</summary>

  It lets developers wire Cal.com scheduling capabilities into AI workflows and agents without writing custom API integration code.

  _Because nothing says developer productivity like spinning up a local server just so your chatbot can decide whether you're free on Thursday._

  `mcp` `cal.com` `fastmcp` `api-integration` `scheduling`
  </details>

- **[crypto-orderbook-mcp](https://github.com/kukapay/crypto-orderbook-mcp)** `⭐ 16` `updated ≤1y` An MCP server that calculates order book depth, imbalance, and mid-price data for crypto trading pairs across major exchanges like Binance, Kraken, and Coinbase. <details><summary>More about</summary>

  It allows AI agents and trading systems to reason about real-time market microstructure and liquidity directly through the Model Context Protocol.

  _Your AI agent can now explain why the market is crashing in real-time, while your portfolio remains entirely algorithmic and equally doomed._

  `mcp` `crypto` `trading` `finance` `orderbook`
  </details>

- **[dolt-mcp](https://github.com/dolthub/dolt-mcp)** `⭐ 16` `updated ≤30d` An MCP server that gives AI assistants direct access to Dolt and DoltgreSQL databases for querying, schema changes, and version-controlled database operations. <details><summary>More about</summary>

  It lets AI tools like Claude manage database branches, commits, and SQL operations directly, bridging version-controlled data workflows with agentic coding sessions.

  _Your AI assistant can now merge database branches and create commits, which is either the future of infrastructure or the fastest way to git blame a chatbot._

  `mcp` `database` `dolt` `version-control`
  </details>

- **[mcp-dashboards](https://github.com/kyurish/mcp-dashboards)** `⭐ 16` `updated ≤30d` An MCP server that renders interactive dashboards, charts, and KPI widgets directly inside AI clients like Claude Desktop and VS Code using 44+ chart types and 21 themes. <details><summary>More about</summary>

  It lets developers visualize data inline during AI conversations instead of context-switching to spreadsheets or BI tools when asking models to analyze datasets.

  _We have successfully reached the point where our AI needs a dedicated server just to render a bar chart so we don't have to open a browser tab._

  `mcp` `data-visualization` `dashboards` `charts` `claude`
  </details>

- **[mcp-ipfs](https://github.com/alexbakers/mcp-ipfs)** `⭐ 16` `updated >1y` A Node.js server implementing the Model Context Protocol (MCP) that wraps the `w3` CLI to allow AI models and MCP clients to manage Storacha.network spaces and storage operations. <details><summary>More about</summary>

  It allows AI coding agents to autonomously handle decentralized storage tasks, such as uploading data to IPFS via Storacha, without the developer manually running CLI commands.

  _We have successfully abstracted the CLI away so your AI can now independently incur your cloud storage bills and manage delegated keys while you debug why it uploaded node_modules to IPFS._

  `mcp` `ipfs` `storage` `decentralized` `cli-wrapper`
  </details>

- **[mcp-server](https://github.com/campertunity/mcp-server)** `⭐ 16` `updated ≤30d` An MCP server and agent skill pack for searching, checking availability, and booking campgrounds worldwide via AI tools. <details><summary>More about</summary>

  Developers building travel or outdoor AI agents can integrate real-time campsite search and booking without scraping campground websites themselves.

  _The inevitable future where your AI agent autonomously books a campsite in the middle of a planning session and you only find out when the confirmation email arrives._

  `mcp` `skills` `travel` `booking` `agent-tools`
  </details>

- **[memory-mcp](https://github.com/jamesanz/memory-mcp)** `⭐ 16` `updated ≤180d` An MCP server that provides persistent memory storage and context window caching for LLM conversations using MongoDB. <details><summary>More about</summary>

  It lets developers plug long-term memory and context management into Cursor and Claude Desktop to survive long, multi-session coding workflows.

  _The context window is still too small, so now we are shipping MongoDB instances just to remind the AI we prefer TypeScript._

  `mcp` `memory` `context-management` `cursor` `claude`
  </details>

- **[networkx-mcp-server](https://github.com/brightlikethelight/networkx-mcp-server)** `⭐ 16` `updated ≤30d` A Model Context Protocol server that exposes NetworkX graph analysis and algorithm capabilities to MCP-compatible AI clients. <details><summary>More about</summary>

  It lets developers and AI agents perform advanced graph operations and network analysis directly within their AI-assisted workflows without leaving the conversation.

  _We have officially reached the point where we are packaging scientific computing libraries into protocol servers so our chatbots can draw graphs and call it agentic behavior._

  `ai-tooling` `data-science` `graph-analysis` `mcp` `networkx` `python`
  </details>

- **[Scaffold](https://github.com/beer-bears/scaffold)** `⭐ 16` `updated ≤1y` A structural RAG system that builds a knowledge graph from a codebase to provide precise context injection for LLMs and AI agents via MCP. <details><summary>More about</summary>

  It attempts to solve AI context blindness by capturing structural code relationships in a graph database, enabling more accurate code construction and maintenance workflows.

  _Just what every developer needs: another layer of infrastructure to deploy so their AI agent can finally understand why that ten-year-old module is the way it is._

  `codebase-analysis` `context-engineering` `knowledge-graph` `mcp` `rag`
  </details>

- **[t2000](https://github.com/mission69b/t2000)** `⭐ 16` `updated ≤30d` t2000 is an open-source TypeScript infrastructure for building conversational finance applications on the Sui blockchain, providing an SDK, CLI, and MCP server for agentic money management. <details><summary>More about</summary>

  It gives developers a ready-made stack—including an MCP server for AI tool integration—to build agents that can programmatically manage DeFi assets like lending, swapping, and payments on Sui.

  _We have officially reached the point where your AI agent needs its own non-custodial wallet, a 'trust layer', and 14 guards just to decide whether to move five bucks of USDC._

  `mcp-server` `defi` `sui` `typescript` `finance`
  </details>

- **[term_mcp_deepseek](https://github.com/othmaneblial/term_mcp_deepseek)** `⭐ 16` `updated ≤1y` A proof-of-concept MCP-like server that connects the DeepSeek API to a persistent terminal session, allowing an AI chat interface to discover tools and execute shell commands via REST and STDIO transports. <details><summary>More about</summary>

  It demonstrates how to wire a non-Anthropic model into an MCP-style tool-calling loop with real-time terminal streaming, giving developers a blueprint for local, API-driven agent workflows.

  _We are now implementing the protocol that was supposed to standardize protocols, using an API from a company that may or may not exist next Tuesday, to run bash commands we could have typed ourselves._

  `mcp` `deepseek` `terminal` `agent-server` `proof-of-concept`
  </details>

- **[any-cli-mcp-server](https://github.com/eirikb/any-cli-mcp-server)** `⭐ 15` `updated ≤1y` A TypeScript tool that converts any CLI program with --help output into a Model Context Protocol server by mapping commands to MCP tools. <details><summary>More about</summary>

  It lets developers instantly expose existing CLI tools—like gh, az, or git—to MCP-compatible AI agents without writing custom server code.

  _We’ve successfully reached the point where we need a wrapper to make our wrappers wrappable by the wrapper._

  `mcp` `cli` `typescript` `tooling`
  </details>

- **[currents-mcp](https://github.com/currents-dev/currents-mcp)** `⭐ 15` `updated ≤30d` An MCP server that connects AI agents to Currents test analytics to provide context on CI failures, run metrics, and project data. <details><summary>More about</summary>

  It allows developers to ask AI agents to diagnose and fix failing tests by giving them direct access to structured CI data and error history.

  _Now your AI can stare at your failing test matrix with the same confusion you feel, but with the added ability to cancel the run before you even wake up._

  `ci` `dashboard` `debugging` `mcp` `playwright` `testing`
  </details>

- **[easy-obsidian-mcp](https://github.com/louis030195/easy-obsidian-mcp)** `⭐ 15` `updated ≤1y` An MCP server that connects AI assistants like Claude and Cursor to an Obsidian vault, enabling them to search, read, and analyze notes via the Obsidian Local REST API. <details><summary>More about</summary>

  It allows developers to query their personal knowledge management (PKM) system directly from their coding assistant, bridging the gap between documentation, notes, and active development workflows.

  _We have successfully achieved the ultimate status symbol of the 2020s: needing a dedicated protocol server just to ask an AI what we wrote in our own notes yesterday._

  `mcp` `obsidian` `pkm` `integration`
  </details>

- **[esp-rainmaker-mcp](https://github.com/espressif/esp-rainmaker-mcp)** `⭐ 15` `updated ≤1y` An official MCP server from Espressif that wraps the `esp-rainmaker-cli` to let AI clients like Claude and Cursor control ESP RainMaker IoT devices via natural language. <details><summary>More about</summary>

  It connects standard AI dev tools directly to your IoT fleet, allowing you to manage devices and adjust settings through prompts instead of custom scripts or dashboards.

  _You've successfully integrated your toaster into your IDE, proving that no hardware stack is safe from the inevitable 'MCP-ification' of every existing CLI tool._

  `iot` `mcp` `esp32` `hardware`
  </details>

- **[firefly-mcp](https://github.com/gofireflyio/firefly-mcp)** `⭐ 15` `updated ≤30d` A Model Context Protocol server for Firefly that allows AI assistants like Claude and Cursor to discover cloud and SaaS resources and convert them into Infrastructure as Code. <details><summary>More about</summary>

  It bridges the gap between AI coding assistants and cloud asset management, allowing developers to query and codify live infrastructure using natural language.

  _Now your AI can hallucinate your Terraform just as confidently as it hallucinates your application code, directly from your cloud billing account._

  `mcp` `infrastructure-as-code` `terraform` `cloud-management` `cursor`
  </details>

- **[gologin-mcp](https://github.com/gologinapp/gologin-mcp)** `⭐ 15` `updated ≤1y` An MCP server that lets developers manage GoLogin browser profiles, proxies, and fingerprints through natural language conversations in AI clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It allows developers to automate browser identity management and fingerprinting tasks directly from their AI coding workflows without switching contexts or writing custom scripts.

  _We have finally reached the point where we need an AI assistant to help us keep track of all the browser profiles we use to trick other AI systems into thinking we are human._

  `mcp` `browser-automation` `gologin` `agent-tools`
  </details>

- **[lightcms](https://github.com/jonradoff/lightcms)** `⭐ 15` `updated ≤90d` A Go-powered content management system that exposes 106 MCP tools so AI agents can autonomously read, write, publish, and bulk-import website content. <details><summary>More about</summary>

  Developers can treat CMS content operations as structured agent actions instead of building custom integrations to manage websites through AI workflows.

  _We’ve finally reached the point where the CMS is agentically updatable, meaning your content platform can now refactor itself while you argue with Claude about button alignment._

  `mcp` `cms` `agentic-workflow` `go` `content-management`
  </details>

- **[liveblocks-mcp-server](https://github.com/liveblocks/liveblocks-mcp-server)** `⭐ 15` `updated ≤90d` An MCP server that exposes Liveblocks REST API functions—such as managing rooms, threads, comments, notifications, and reading Storage and Yjs data—to AI tools and agents. <details><summary>More about</summary>

  It lets AI assistants inside Cursor, Claude Desktop, and VS Code directly manage Liveblocks real-time collaboration resources instead of forcing developers to manually juggle API calls.

  _Now your AI can create, modify, and delete your real-time collaboration rooms and comments, because apparently the one thing missing from your stack was an LLM with write access to your production notifications._

  `mcp` `liveblocks` `real-time` `collaboration`
  </details>

- **[mcp-server](https://github.com/configcat/mcp-server)** `⭐ 15` `updated ≤90d` An official MCP server that exposes ConfigCat's feature flag management API to AI coding assistants like Cursor, VS Code, and Claude Desktop. <details><summary>More about</summary>

  It lets AI agents directly read and manipulate feature flags and SDK integrations inside your editor, keeping feature rollout logic in sync with the codebase without leaving the IDE.

  _We have finally achieved the singularity: an AI agent that can toggle a boolean in a dashboard so you don't have to context-switch to a browser tab._

  `mcp` `feature-flags` `configcat` `ide-integration`
  </details>

- **[mcp-server-templates](https://github.com/data-everything/mcp-server-templates)** `⭐ 15` `updated ≤1y` A CLI and Docker/Kubernetes backend platform for deploying Model Context Protocol servers from pre-built templates with minimal configuration. <details><summary>More about</summary>

  It lets developers spin up MCP servers for common integrations like GitHub and GitLab in seconds, removing the boilerplate and Docker overhead from AI tooling setup.

  _Nothing says 'cutting edge' like a 15-star repo that renames itself to MCP Platform two months after launch, ensuring you get to learn two CLIs for the price of one._

  `mcp` `cli` `docker` `deployment`
  </details>

- **[noosphere](https://github.com/jinning6/noosphere)** `⭐ 15` `updated ≤30d` An MCP server that provides a shared, persistent knowledge store for AI agents to upload and retrieve 'consciousness fragments' such as epiphanies, logic, and learned lessons. <details><summary>More about</summary>

  It offers a plug-and-play memory layer for agents connected via MCP, allowing them to share collective wisdom and decision logic across different sessions or instances.

  _Finally, a decentralized digital soul sanctuary to ensure your architectural hot takes live forever in the cosmic cloud, long after your repo is archived._

  `mcp` `memory` `agent-infrastructure` `python`
  </details>

- **[npm-search-mcp-server](https://github.com/btwiuse/npm-search-mcp-server)** `⭐ 15` `updated ≤90d` An MCP server that allows AI assistants to search npm packages by invoking the `npm search` command. <details><summary>More about</summary>

  It gives coding agents direct access to the npm registry, letting them look up packages and versions without leaving the chat interface.

  _We have successfully abstracted the need to type 'npm search' into a protocol that lets a robot type 'npm search' for us._

  `mcp` `npm` `package-search` `claude`
  </details>

- **[olostep-mcp-server](https://github.com/olostep/olostep-mcp-server)** `⭐ 15` `updated ≤30d` An MCP server that connects AI agents to the Olostep web scraping, crawling, and search API for real-time web data extraction. <details><summary>More about</summary>

  It gives MCP-compatible developer tools like Cursor and Claude Desktop direct access to structured web scraping, batch URL extraction, and geo-targeted search without writing custom integration code.

  _We have successfully abstracted the web into yet another API call, so your agent can now hallucinate about the internet in real time instead of from stale training data._

  `mcp` `web-scraping` `agent-tooling` `olostep` `search`
  </details>

- **[pyxel-mcp](https://github.com/kitao/pyxel-mcp)** `⭐ 15` `updated ≤30d` An MCP server that enables AI agents to autonomously run, inspect, debug, and verify retro games built with the Pyxel Python game engine. <details><summary>More about</summary>

  It gives AI coding agents the ability to visually test and iterate on game logic and pixel art without human intervention, bridging the gap between code generation and graphical verification.

  _We have finally reached the point where the AI can independently build, play, and critique your 8-bit platformer, leaving you with nothing to do but watch the GIFs it recorded of its own success._

  `mcp` `game-dev` `pyxel` `retro` `tooling`
  </details>

- **[reminder-mcp](https://github.com/arifszn/reminder-mcp)** `⭐ 15` `updated ≤180d` A Model Context Protocol server that lets LLMs schedule and trigger reminders through Slack or Telegram using cron-job.org for external execution. <details><summary>More about</summary>

  It gives coding agents a lightweight way to delegate time-based follow-ups to external messaging platforms without requiring the host server to stay alive.

  _We have successfully built an integration that allows an AI to nag you via Telegram, ensuring your reminder infrastructure is now as over-engineered as your CI pipeline._

  `mcp` `reminders` `slack` `telegram` `tooling`
  </details>

- **[agent-droid-bridge](https://github.com/neverlow512/agent-droid-bridge)** `⭐ 14` `updated ≤30d` An MCP server that exposes Android device and emulator control via ADB as structured tools for AI agents to automate mobile UI, testing, and reverse engineering workflows. <details><summary>More about</summary>

  It lets developers drive real Android devices through natural language prompts instead of writing brittle test scripts or manually clicking through emulator UIs.

  _Now your AI agent can argue with you about why it drew the roof of the house in the wrong place on a simulated phone screen._

  `mcp` `android` `adb` `mobile-automation` `agent-tools`
  </details>

- **[better-godot-mcp](https://github.com/n24q02m/better-godot-mcp)** `⭐ 14` `updated ≤30d` An MCP server that exposes 17 composite tools for AI agents to read, write, and manipulate Godot scenes, GDScript files, animations, physics, and other engine assets directly from the filesystem. <details><summary>More about</summary>

  It allows coding agents to make meaningful, multi-step changes to Godot projects without requiring the editor to be running, bridging AI workflows with game development.

  _We have finally reached the point where your AI agent needs its own stable architecture just to avoid spawning browser tabs and racing its own processes while it tries to write GDScript for you._

  `mcp` `godot` `gdscript` `game-dev` `ai-agents`
  </details>

- **[cross-llm-mcp](https://github.com/jamesanz/cross-llm-mcp)** `⭐ 14` `updated ≤30d` An MCP server that provides unified access to multiple LLM APIs (ChatGPT, Claude, Gemini, DeepSeek, Grok, and others) with smart model selection, prompt logging, and cost optimization. <details><summary>More about</summary>

  Lets developers swap between nine different LLM providers from one tool inside Cursor or Claude Desktop, with tag-based model selection and prompt history tracking.

  _Because nothing says 'streamlined workflow' like managing API keys for nine different LLMs and then arguing with yourself about which model is best for 'reasoning' today._

  `mcp` `multi-llm` `cursor` `claude-desktop` `model-selection`
  </details>

- **[crypto-news-mcp](https://github.com/kukapay/crypto-news-mcp)** `⭐ 14` `updated ≤180d` An MCP server that supplies real-time cryptocurrency news from NewsData to AI agents via tools for headlines, keyword search, and summarization prompts. <details><summary>More about</summary>

  Developers building crypto-aware agents can plug in live news context without wiring their own NewsData API client or managing pagination logic.

  _Another specialized MCP server enters the registry, inching us closer to an agent ecosystem where half the stack is fetching headlines and the other half is arguing about Bitcoin._

  `mcp` `crypto` `news` `agent-tooling`
  </details>

- **[defi-yields-mcp](https://github.com/kukapay/defi-yields-mcp)** `⭐ 14` `updated >1y` An MCP server that exposes DeFi yield pool data from DefiLlama to AI agents, allowing them to fetch and analyze opportunities by chain or project. <details><summary>More about</summary>

  It lets developers building AI agents quickly add live DeFi yield analysis without writing custom scrapers or API integrations for multiple protocols.

  _Now your LLM can frantically chase double-digit APYs across dodgy chains while you still can't automate your own savings account._

  `mcp` `defi` `defillama` `agent-tooling`
  </details>

- **[delimit-ai/delimit](https://github.com/delimit-ai/delimit-mcp-server)** `⭐ 14` `updated ≤30d` A governance toolkit that wraps AI coding assistants like Claude Code, Cursor, and Codex to enforce breaking-change detection, deploy gates, and multi-model consensus, delivered as an MCP server, CLI, and GitHub Action. <details><summary>More about</summary>

  It lets teams gate every AI-written change with signed, replayable attestations and automated drift checks before code merges, replacing blind trust with an audit trail.

  _You now have a cryptographic receipt proving that Claude, Cursor, and Gemini all independently agreed to break your API in exactly the same way._

  `ai-governance` `attestation` `breaking-changes` `ci` `ci-cd` `governance` `mcp` `multi-model`
  </details>

- **[fermat-mcp](https://github.com/abhiphile/fermat-mcp)** `⭐ 14` `updated ≤1y` An MCP server that exposes SymPy, NumPy, and Matplotlib operations as tools for AI assistants to perform symbolic math, numerical computation, and plotting. <details><summary>More about</summary>

  It lets coding agents handle mathematical reasoning, linear algebra, and visualization directly instead of hallucinating equations or ASCII art charts.

  _We have reached the point where we need a dedicated protocol server so our AI can confidently calculate eigenvalues instead of confidently inventing them._

  `mcp` `math` `sympy` `numpy` `matplotlib`
  </details>

- **[mcp-ilert](https://github.com/ilert/mcp-ilert)** `⭐ 14` `updated ≤1y` An official remote MCP server that allows AI assistants to manage alerts and incidents within the ilert platform. <details><summary>More about</summary>

  It connects incident management workflows directly into AI coding assistants like Cursor and Claude, letting developers query and resolve alerts without leaving their editor.

  _The dream of 'vibe coding' is now complete: you can debug your broken production deploy via an AI agent that is also configured via a JSON blob in the same IDE._

  `ai-agent` `automation` `devops` `ilert` `incident-management` `mcp` `remote-server` `sre`
  </details>

- **[mcp-ip2location-io](https://github.com/ip2location/mcp-ip2location-io)** `⭐ 14` `updated ≤30d` An MCP server that exposes the IP2Location.io API to MCP-compatible clients, enabling AI assistants to look up geolocation, network, and proxy data for IPv4 and IPv6 addresses. <details><summary>More about</summary>

  It lets developers augment local AI workflows with on-demand IP intelligence without wiring API calls by hand inside prompts or tools.

  _Another specialized MCP server enters the registry, raising the existential question of whether we are building an ecosystem or just a very polite Parts Unknown for micro-integrations._

  `mcp` `geolocation` `ip-lookup` `fastmcp` `claude-desktop`
  </details>

- **[mcp-server-terminal](https://github.com/aybelatchane/mcp-server-terminal)** `⭐ 14` `updated ≤180d` An MCP server that lets AI agents create, control, and snapshot terminal sessions by representing TUI/CLI state as a structured Terminal State Tree. <details><summary>More about</summary>

  It allows coding agents and AI IDE extensions to reliably interact with interactive terminal applications, TUIs, and CLI workflows that standard shell execution cannot handle.

  _We have finally built the infrastructure required to let an AI agent nervously press down-arrow in htop while we watch a visible terminal window spawn on our desktop._

  `mcp` `terminal` `cli-automation` `tui`
  </details>

- **[meta-ads-mcp](https://github.com/mikusnuz/meta-ads-mcp)** `⭐ 14` `updated ≤30d` An MCP server that exposes 135 tools for managing Facebook and Instagram ad campaigns, audiences, creatives, and insights via the Meta Marketing API. <details><summary>More about</summary>

  Developers can integrate Meta ad management directly into AI-assisted workflows, allowing LLMs to read performance data and modify campaigns through natural language.

  _We have successfully MCP’d the Facebook Ads dashboard, meaning your coding agent can now blow your quarterly budget while you’re busy debugging a CSS flexbox issue._

  `mcp` `meta-ads` `marketing-api` `ad-campaigns` `integrations`
  </details>

- **[primitiv](https://github.com/ai-by-design/primitiv)** `⭐ 14` `updated ≤30d` A developer tool that scans design sources like Figma, Storybook, and token files, reconciles conflicts between them, and exposes a unified design contract via an MCP server for AI agents. <details><summary>More about</summary>

  It creates a single source of truth for design intent so that coding agents can build UI that actually matches your existing design system instead of hallucinating generic components.

  _We have finally built middleware to reconcile the inevitable drift between the Figma file, the token files, and the components that were actually shipped, so the agent can be confidently wrong in the correct corporate brand palette._

  `mcp` `design-tokens` `figma` `ai-agents` `context-engineering`
  </details>

- **[project-tessera](https://github.com/besslframework-stack/project-tessera)** `⭐ 14` `updated ≤90d` A local-first, encrypted memory layer for AI assistants that provides 58 MCP tools and 54 REST endpoints to store, search, and manage knowledge from conversations and documents. <details><summary>More about</summary>

  It gives developers a zero-infrastructure way to equip Claude Desktop and other AI tools with persistent, contradiction-aware memory without sending data to external APIs.

  _We have successfully built a system to remember every bad architectural decision we made during late-night prompting sessions, now permanently encrypted and searchable._

  `mcp` `memory` `local-first` `knowledge-management`
  </details>

- **[ssh-mcp](https://github.com/blakerouse/ssh-mcp)** `⭐ 14` `updated ≤30d` A local MCP server that lets AI assistants manage SSH hosts, organize them into groups, and execute commands across remote machines. <details><summary>More about</summary>

  It allows coding agents to directly manage infrastructure and run commands across fleets of servers without the developer manually bridging the terminal and the chat window.

  _We have finally achieved the platonic ideal of modern DevOps: a stack of abstractions so deep that your AI needs its own SSH config and a BadgerDB instance just to run uptime for you._

  `mcp` `ssh` `infrastructure` `automation` `go`
  </details>

- **[crypto-rss-mcp](https://github.com/kukapay/crypto-rss-mcp)** `⭐ 13` `updated ≤1y` An MCP server that aggregates real-time cryptocurrency news from multiple RSS feeds for AI agents. <details><summary>More about</summary>

  It provides a standardized tool for developers building AI agents that need to ingest and analyze fast-moving crypto market news via the Model Context Protocol.

  _We have successfully standardized the process of feeding hallucination-prone models the same chaotic crypto news cycles that fuel retail panic._

  `mcp` `crypto` `rss` `news-aggregation` `finance`
  </details>

- **[daisys-mcp](https://github.com/daisys-ai/daisys-mcp)** `⭐ 13` `updated ≤1y` An MCP server that provides voice generation capabilities by connecting AI assistants to the Daisys text-to-speech platform. <details><summary>More about</summary>

  Developers can add voice synthesis to their AI workflows by letting Claude Desktop, Cursor, or other MCP clients generate audio files directly through tool calls.

  _We have successfully abstracted text-to-speech behind a protocol, so your coding agent can now narrate its own struggles in a premium voice while you troubleshoot portaudio on Linux._

  `api` `audio` `daisys` `mcp` `speech-synthesis` `text-to-speech` `voice-generation`
  </details>

- **[IMAP MCP](https://github.com/dominik1001/imap-mcp)** `⭐ 13` `updated ≤1y` A TypeScript MCP server that exposes IMAP email operations as tools for AI assistants, allowing them to create draft emails on IMAP-compatible servers. <details><summary>More about</summary>

  It lets developers wire email drafting capabilities directly into their MCP-compatible AI workflows without building custom IMAP integrations.

  _We have finally achieved the future: an autonomous agent that can draft your passive-aggressive meeting reminders and save them safely to Drafts, unread and unacted upon._

  `email` `imap` `mcp` `typescript`
  </details>

- **[mcp](https://github.com/bitteprotocol/mcp)** `⭐ 13` `updated >1y` A Monorepo providing an MCP (Model Context Protocol) server implementation for Bitte AI integrations, deployable via a standard SSE endpoint. <details><summary>More about</summary>

  It allows developers to extend AI clients like Cursor with financial and Bitte-specific tooling by adding a simple server URL to their configuration.

  _Just when you thought 'MCP' stood for something stable, here comes a new repo claiming the acronym while you manually paste JSON endpoints into your IDE settings._

  `mcp` `bitte-ai` `fintech` `monorepo`
  </details>

- **[mcp-interactive-terminal](https://github.com/amol21p/mcp-interactive-terminal)** `⭐ 13` `updated ≤90d` An MCP server that provides AI coding agents with real interactive terminal sessions using PTY emulation to support REPLs, SSH, databases, and other interactive CLI tools. <details><summary>More about</summary>

  It bridges a critical gap where AI agents fail to handle interactive commands, allowing them to run stateful sessions like Rails consoles, database clients, and SSH connections directly within the development workflow.

  _We have finally engineered a way for an AI to get stuck in an interactive Python REPL, just like the rest of us._

  `mcp` `terminal` `pty` `cli` `agent-infrastructure`
  </details>

- **[mcp-server-bing-webmaster](https://github.com/isiahw1/mcp-server-bing-webmaster)** `⭐ 13` `updated ≤90d` An MCP server that exposes Bing Webmaster Tools API endpoints so that Claude, Cursor, and other MCP-compatible assistants can manage SEO tasks, traffic analytics, and sitemaps directly from the development environment. <details><summary>More about</summary>

  It lets developers query search performance, submit URLs, and manage sitemaps through their AI assistant instead of switching to the Bing web console.

  _We have officially reached the point where an AI agent now needs its own API key just to argue with Bing about your sitemap._

  `mcp` `seo` `bing` `integrations`
  </details>

- **[outlook-assistant](https://github.com/littlebearapps/outlook-assistant)** `⭐ 13` `updated ≤30d` An MCP server that connects AI assistants to Microsoft Outlook for managing email, calendar, contacts, and mailbox settings via the Model Context Protocol. <details><summary>More about</summary>

  It allows developers to automate inbox management, calendar scheduling, and email workflows directly from their AI assistant without context-switching to Outlook.

  _We have finally achieved the future: an AI agent that can argue with your meeting invites and investigate phishing headers while you pretend to be busy debugging._

  `mcp` `outlook` `email-automation` `productivity` `microsoft-365`
  </details>

- **[agent-lsp](https://github.com/blackwell-systems/agent-lsp)** `⭐ 12` `updated ≤30d` A stateful MCP server that bridges language servers (LSP) to AI agents, providing code intelligence, speculative execution, and enforced multi-step workflows across 30 languages. <details><summary>More about</summary>

  It solves the 'blind edit' problem for coding agents by giving them warm, structured code intelligence and blast-radius analysis instead of relying on token-heavy grep and raw file reads.

  _We have now successfully abstracted the abstraction that was abstracting the compiler, so your agent can simulate a rename in memory before confidently breaking your build in a single atomic operation._

  `mcp` `lsp` `code-intelligence` `agent-skills` `developer-tools`
  </details>

- **[better-email-mcp](https://github.com/n24q02m/better-email-mcp)** `⭐ 12` `updated ≤30d` An MCP server providing IMAP/SMTP email access via six composite tools, enabling AI agents to search, read, send, and organize messages across multiple accounts. <details><summary>More about</summary>

  It gives coding agents and IDE integrations a standardized, token-optimized way to automate email workflows without forcing developers to battle OAuth2 or raw IMAP libraries.

  _We have finally reached the point where your AI agent needs its own App Passwords and multi-account email setup, because apparently the next frontier in developer productivity is debugging SMTP auth while your linter watches in silence._

  `mcp` `email` `imap` `smtp` `typescript`
  </details>

- **[bldbl-mcp](https://github.com/chunkydotdev/bldbl-mcp)** `⭐ 12` `updated ≤1y` An official MCP server that connects AI assistants like Claude and Cursor to the Buildable platform to retrieve project context, manage tasks, and report progress. <details><summary>More about</summary>

  It allows AI coding agents to integrate directly with Buildable's task management and project plans, enabling more context-aware assistance within IDEs.

  _We have now successfully abstracted project management into a protocol, so your AI can now politely ask you questions about why the task it invented isn't done yet._

  `mcp` `buildable` `ide-integration` `task-management`
  </details>

- **[digma-mcp-server](https://github.com/digma-ai/digma-mcp-server)** `⭐ 12` `updated ≤1y` An MCP server that connects AI agents to Digma's code observability and dynamic analysis data to assist with code reviews and performance debugging. <details><summary>More about</summary>

  It allows coding agents to ground their reviews in runtime data and distributed tracing, moving PR feedback from static suggestions to evidence-based insights.

  _We have finally bridged the gap between 'my agent thinks this code is slow' and 'the production database actually agrees with it'._

  `mcp` `observability` `code-review` `agent-tools`
  </details>

- **[Druid MCP Server](https://github.com/iunera/druid-mcp-server)** `⭐ 12` `updated ≤90d` A Spring Boot MCP server that exposes Apache Druid cluster management, data ingestion, and analytics as tools, resources, and prompts for AI assistants. <details><summary>More about</summary>

  It lets developers query, manage, and analyze Druid clusters using natural language through MCP-compatible clients instead of hand-crafting Druid APIs and SQL.

  _Yet another hyper-specific MCP server so your AI can debug your OLAP cluster while you debug why your AI can't debug your OLAP cluster._

  `analytics` `apache-druid` `data-engineering` `mcp` `spring-ai`
  </details>

- **[fastmcp-sonarqube-metrics](https://github.com/archai-labs/fastmcp-sonarqube-metrics)** `⭐ 12` `updated ≤90d` A FastMCP server that exposes SonarQube project metrics, history, and issues as tools for AI agents and LLM clients to query via the Model Context Protocol. <details><summary>More about</summary>

  It allows developers and AI coding agents to natively query code quality metrics and technical debt trends without leaving their agent workflow or writing custom API wrappers.

  _We have successfully abstracted the act of checking our code quality into a tool that lets an AI ask an API about the mess we just made, so we can maintain plausible deniability while the context window fills up with bug counts._

  `mcp` `sonarqube` `devops` `metrics` `python`
  </details>

- **[gcore-mcp-server](https://github.com/g-core/gcore-mcp-server)** `⭐ 12` `updated ≤90d` An official MCP server that exposes Gcore Cloud API operations as tools for LLM assistants like Cursor and Claude Code. <details><summary>More about</summary>

  It lets developers manage cloud infrastructure—from GPU clusters to DNS records—directly through natural language prompts inside their AI coding environments.

  _We have successfully abstracted cloud infrastructure management into a prompt context window overflow problem that requires carefully curated wildcard patterns to remain sane._

  `mcp` `cloud` `infrastructure` `gcore`
  </details>

- **[google-ad-manager-mcp](https://github.com/matiouscorp/google-ad-manager-mcp)** `⭐ 12` `updated ≤30d` An MCP server that lets developers manage Google Ad Manager campaigns, line items, and creatives through natural language conversations with AI assistants like Claude and Cursor. <details><summary>More about</summary>

  It connects ad operations workflows directly into developer-adjacent AI environments, removing the need to navigate the complex GAM UI for routine campaign management.

  _Your AI assistant can now autonomously manage your ad inventory, which is either the future of marketing automation or the fastest way to accidentally burn your quarterly budget via a misunderstood prompt._

  `mcp` `google-ad-manager` `ad-tech` `automation` `python`
  </details>

- **[google-sheets-mcp](https://github.com/henilcalagiya/google-sheets-mcp)** `⭐ 12` `updated ≤1y` A Python-based Model Context Protocol (MCP) server that enables AI clients to perform full CRUD operations on Google Sheets via a Google Service Account. <details><summary>More about</summary>

  It allows developers to hook spreadsheet automation directly into MCP-compatible workflows in tools like Claude Desktop and Continue.dev without writing custom API wrappers.

  _We have successfully abstracted the abstraction, meaning your AI agent now needs a service account and a JSON key file just to argue with a spreadsheet._

  `mcp` `google-sheets` `automation` `python`
  </details>

- **[hashnet-mcp-js](https://github.com/hashgraph-online/hashnet-mcp-js)** `⭐ 12` `updated ≤30d` A universal MCP server for discovering, chatting with, and registering agents across the HOL Registry Broker and Hashgraph ecosystem. <details><summary>More about</summary>

  Developers can bridge local or remote agents into MCP-compatible workflows, enabling agent discovery and delegation without building custom registry integrations.

  _Another registry, another protocol, another layer of middleware so your agents can finally negotiate with other agents while you debug transport configurations._

  `mcp` `agent-discovery` `hashgraph` `registry` `a2a`
  </details>

- **[hyperliquid-whalealert-mcp](https://github.com/kukapay/hyperliquid-whalealert-mcp)** `⭐ 12` `updated ≤180d` An MCP server that exposes a tool and prompt for fetching and summarizing Hyperliquid whale transactions over $1 million using the CoinGlass API. <details><summary>More about</summary>

  It lets developers and traders wire real-time on-chain whale alerts directly into MCP-compatible clients like Claude Desktop without building their own API integration.

  _We now have a dedicated protocol server whose sole job is to tell you that someone just opened a $20 million ETH position while you were debugging a CSS flexbox issue._

  `mcp` `crypto` `finance` `real-time` `hyperliquid`
  </details>

- **[mcp-alapi-cn](https://github.com/alapi-sdk/mcp-alapi-cn)** `⭐ 12` `updated >1y` An MCP server implementation that exposes ALAPI's 100+ API services, such as IP lookup, weather, and enterprise queries, for integration into MCP-compatible AI clients. <details><summary>More about</summary>

  It allows developers to equip MCP clients like Claude Desktop and Cursor with a wide array of utility APIs without writing custom integration code.

  _Finally, your coding agent can now check the horoscope and query express delivery logs, because clearly what the modern developer needs is more ways to procrastinate inside their IDE._

  `mcp` `api-integration` `server` `alapi`
  </details>

- **[mcp-backup-server](https://github.com/hexitex/mcp-backup-server)** `⭐ 12` `updated ≤1y` A Model Context Protocol server that provides file and folder backup and restoration capabilities for AI agents and code editors like Cursor and Windsurf. <details><summary>More about</summary>

  It offers AI agents and editors a quick, lightweight 'save point' mechanism for risky edits without requiring full Git initialization or commit workflows.

  _We have successfully built a specialized MCP server so your AI agent can suffer from the same snapshot anxiety you previously handled with a quick `git stash`._

  `mcp` `backup` `cursor` `windsurf` `context`
  </details>

- **[mcp-jdbc-server](https://github.com/openlinksoftware/mcp-jdbc-server)** `⭐ 12` `updated ≤1y` A Java-based MCP server that exposes JDBC database operations—including schema inspection, table queries, and SQL execution—as tools for MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It lets developers connect LLM clients directly to virtually any JDBC-compatible database, turning natural language into live queries across heterogeneous data sources.

  _We have successfully abstracted the database so that an LLM can write the SQL for us, ensuring we no longer need to know the schema, the query language, or what we were looking for in the first place._

  `mcp` `jdbc` `database` `java` `claude-desktop`
  </details>

- **[mcp-odbc-server](https://github.com/openlinksoftware/mcp-odbc-server)** `⭐ 12` `updated ≤1y` A TypeScript-based Model Context Protocol server that exposes ODBC-accessible databases to LLMs via tools for schema inspection, table discovery, and SQL/SPARQL query execution. <details><summary>More about</summary>

  It lets AI coding assistants and MCP clients directly query and understand live database schemas without the developer manually pasting table definitions into context.

  _We have successfully abstracted the job of writing SQL into the job of debugging why your AI agent can't find the correct ODBC driver manager._

  `mcp` `database` `odbc` `typescript` `llm-integration`
  </details>

- **[mcp-server-aws-sso](https://github.com/aashari/mcp-server-aws-sso)** `⭐ 12` `updated ≤90d` A Node.js/TypeScript MCP server that enables AI assistants to authenticate via AWS SSO and execute AWS CLI commands using temporary credentials across multiple accounts. <details><summary>More about</summary>

  It allows developers and DevOps engineers to manage AWS infrastructure and execute commands across multi-account setups using natural language through their existing AI assistants.

  _We have successfully abstracted the cloud so many layers deep that you now need an AI agent, an MCP server, and a single sign-on flow just to check disk usage on a server._

  `mcp` `aws` `sso` `devops` `cli`
  </details>

- **[mcp-timeplus](https://github.com/timeplus-io/mcp-timeplus)** `⭐ 12` `updated ≤1y` An MCP server that lets LLMs execute SQL queries, manage databases, and interact with Kafka and Iceberg tables inside a Timeplus cluster. <details><summary>More about</summary>

  Developers can wire Timeplus into MCP clients like Claude Desktop so their assistants can directly query streaming data, Kafka topics, and lakehouse tables without manual SQL translation.

  _We have successfully abstracted away the last remaining joy of crafting a perfectly tuned SQL query by letting an LLM run it as a tool call you can’t quite see._

  `iceberg` `kafka` `mcp` `sql` `timeplus`
  </details>

- **[mysql-mcp-server](https://github.com/dave-wind/mysql-mcp-server)** `⭐ 12` `updated >1y` A Model Context Protocol server that provides LLMs with read-only access to MySQL databases for schema discovery and SELECT query execution. <details><summary>More about</summary>

  It allows AI agents and LLMs to safely inspect and query MySQL databases without risking data modification, streamlining database interaction workflows.

  _Yet another MCP server to manage, because what developers truly needed was an extra layer of abstraction just to let a bot run SELECT * FROM users on a Friday afternoon._

  `mcp` `mysql` `database` `read-only` `llm-integration`
  </details>

- **[restcsvmcpserver](https://github.com/jordandalton/restcsvmcpserver)** `⭐ 12` `updated >1y` An MCP server that allows AI clients like Claude Desktop and Cursor to interact with CSV data hosted on RestCSV.com via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers query and manipulate cloud-hosted CSV files through their existing AI coding assistants without writing custom data connectors.

  _We have successfully abstracted the ancient art of opening a spreadsheet into a protocol handshake between two layers of middleware._

  `mcp` `csv` `integration` `data`
  </details>

- **[sports-mcp-server](https://github.com/cloudbet/sports-mcp-server)** `⭐ 12` `updated ≤1y` A minimal, single-file Go implementation of a Model Context Protocol server that exposes sports data and betting tools via the Cloudbet public API for educational and demonstration purposes. <details><summary>More about</summary>

  Developers building MCP-aware AI agents can use this as a concrete reference for integrating external sports data APIs into their tool-calling workflows.

  _Just when you thought the MCP ecosystem couldn't get more niche, we now have a server dedicated to letting your coding agent check the Premier League odds instead of fixing that critical bug._

  `mcp` `sports-data` `go` `api-integration` `demo`
  </details>

- **[teamcity-mcp](https://github.com/itcaat/teamcity-mcp)** `⭐ 12` `updated ≤180d` An MCP server that exposes JetBrains TeamCity resources and build operations as structured tools for LLM agents and AI IDEs. <details><summary>More about</summary>

  It allows AI coding agents and IDE plugins to trigger, monitor, and search TeamCity builds directly, bridging CI/CD state with the developer's AI workflow.

  _We have successfully taught the AI to wait for the pipeline to fail so it can notify us with a summary we could have read on a status page._

  `mcp` `teamcity` `ci-cd` `ide-integration`
  </details>

- **[unified-diff-mcp](https://github.com/gorosun/unified-diff-mcp)** `⭐ 12` `updated ≤1y` An MCP server that renders unified code diffs into visual HTML or PNG outputs and optionally shares them via temporary GitHub Gists. <details><summary>More about</summary>

  It gives coding agents a way to surface diffs as readable, shareable visuals inside Claude Desktop instead of raw text.

  _We have officially reached the point where the agent needs its own diff viewer because reading unified diffs is apparently too retro for 2025._

  `mcp` `diff` `claude-desktop` `visualization`
  </details>

- **[cointelegraph-mcp](https://github.com/kukapay/cointelegraph-mcp)** `⭐ 11` `updated >1y` An MCP server that exposes 17 Cointelegraph RSS feeds as tools for AI assistants to retrieve categorized cryptocurrency news with configurable summaries. <details><summary>More about</summary>

  Developers building crypto-aware AI workflows can give their assistants structured, real-time access to industry news without writing custom scrapers.

  _We have successfully abstracted reading the news behind a protocol, so your AI can now panic about Bitcoin prices on your behalf while you debug a 400 error._

  `mcp` `crypto` `news` `rss` `claude`
  </details>

- **[connapse](https://github.com/destrayon/connapse)** `⭐ 11` `updated ≤30d` An open-source, self-hosted knowledge backend for AI agents that provides persistent memory via hybrid vector and keyword search, an MCP server, and connectors for S3, Azure Blob, and local files. <details><summary>More about</summary>

  It gives developers a way to persist context and documents across AI sessions so agents can actually build on past research instead of starting from zero every time.

  _Just what we needed: another self-hosted memory layer to deploy, configure, and inevitably debug so our agents can pretend they remember who we are._

  `mcp` `self-hosted` `rag` `knowledge-base` `hybrid-search`
  </details>

- **[devdocs-mcp](https://github.com/madhan-g-p/devdocs-mcp)** `⭐ 11` `updated ≤30d` A local MCP server that provides version-pinned, offline documentation from DevDocs.io to AI coding assistants to reduce hallucinations and version drift. <details><summary>More about</summary>

  It allows IDE agents to ground their code suggestions in the exact dependency versions defined in your project's package.json, eliminating the need to context-stuff documentation manually.

  _We have successfully built a middleware to feed the middleware, ensuring our agents can hallucinate about React 18 APIs with locally cached authority._

  `mcp` `documentation` `context-engineering` `local-first` `nestjs`
  </details>

- **[forge](https://github.com/ferodrigop/forge)** `⭐ 11` `updated ≤30d` A terminal MCP server that lets AI coding agents spawn, manage, and monitor persistent PTY sessions with incremental output reading and a web dashboard. <details><summary>More about</summary>

  It allows agents like Claude Code and Codex to run multiple long-lived processes in parallel and read only new output, reducing context-window waste during full-stack development.

  _We have finally built infrastructure so your AI agents can open terminals, run servers, and ignore the output just as efficiently as you do._

  `mcp` `terminal` `pty` `agents` `cli`
  </details>

- **[kill-process-mcp](https://github.com/misiektoja/kill-process-mcp)** `⭐ 11` `updated ≤90d` A cross-platform MCP server that exposes tools for listing and terminating OS processes via natural language queries in MCP-compatible clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It lets developers manage rogue processes using conversational prompts inside their AI coding environment instead of dropping to a terminal.

  _We have finally achieved the future where an LLM will politely ask before nuking the process that is actually your database._

  `mcp` `process-management` `system-tools` `cursor` `claude`
  </details>

- **[mcp-persona-sessions](https://github.com/mattjoyce/mcp-persona-sessions)** `⭐ 11` `updated ≤90d` An MCP server that enables AI assistants to conduct structured, persona-driven sessions such as interview preparation, meeting rehearsals, and guided reflection using configurable persona profiles and session frameworks. <details><summary>More about</summary>

  It lets developers practice high-stakes conversations and self-reflection directly inside their MCP-compatible assistant instead of cobbling together ad-hoc prompts.

  _We have finally built the infrastructure to rehearse a meeting with a simulated boss because the real boss is an LLM anyway._

  `mcp` `persona` `role-play` `interview-prep`
  </details>

- **[npm-package-docs-mcp](https://github.com/meanands/npm-package-docs-mcp)** `⭐ 11` `updated ≤1y` An MCP server that fetches up-to-date README documentation for npm packages directly from GitHub repositories or package tarballs for use in MCP-compatible IDEs. <details><summary>More about</summary>

  It gives coding assistants access to current package documentation instead of relying on potentially outdated training data or context.

  _We have successfully built infrastructure to pipe raw READMEs from GitHub into your IDE, because apparently the 40,000th dependency's documentation was the missing piece preventing you from writing code._

  `mcp` `npm` `documentation` `ide`
  </details>

- **[telephony-mcp-server](https://github.com/khan2a/telephony-mcp-server)** `⭐ 11` `updated ≤1y` A minimalist Model Context Protocol server that exposes Vonage telephony tools—voice calls, SMS, speech-to-text, and speech recognition—to LLM applications and coding assistants like Claude Desktop and GitHub Copilot. <details><summary>More about</summary>

  It lets developers wire real-world phone and messaging actions directly into agent workflows without writing custom API integration code.

  _Your AI assistant can now cold-call your coworkers and text them vague status updates while you sit quietly and wonder when you became the supervisor of a very chatty switchboard._

  `mcp` `telephony` `vonage` `llm-tools` `python`
  </details>

- **[agent-terminal](https://github.com/jasonkneen/agent-terminal)** `⭐ 10` `updated ≤180d` A headless terminal automation library and MCP server that lets AI agents launch CLI applications, send keyboard input, and capture ASCII output without a display. <details><summary>More about</summary>

  It gives coding agents a reliable way to interact with interactive terminal tools and REPLs that don't expose clean APIs, bridging the gap between LLMs and real CLI workflows.

  _We’ve reached the point where agents now need their own headless terminals so they can pretend to be us pretending to use the terminal._

  `mcp` `terminal` `automation` `cli` `agent-infrastructure`
  </details>

- **[box-mcp-server](https://github.com/hmk/box-mcp-server)** `⭐ 10` `updated ≤1y` A Model Context Protocol server that connects AI assistants to Box, enabling them to search, read, and access files stored in a user's Box account. <details><summary>More about</summary>

  Developers using MCP-compatible clients like Claude Desktop can grant their local AI assistant direct, read-only access to documentation and files stored in Box without manual downloads.

  _We have successfully abstracted the thrilling workflow of opening a cloud drive into a token-hungry context window, because apparently downloading a PDF is now considered heavy lifting._

  `mcp` `box` `integrations` `filesystem`
  </details>

- **[chisel](https://github.com/ckanthony/chisel)** `⭐ 10` `updated ≤90d` A Rust-powered MCP server providing Unix-native file tools for AI agents, using patch-based edits and shell commands to dramatically reduce token usage compared to standard file read/write operations. <details><summary>More about</summary>

  It solves the context-window bloat problem in coding agents by replacing whole-file rewrites with compact diffs and targeted shell commands, making agentic file operations significantly cheaper and safer.

  _We have reached the point where we are building specialized kernels to help our hallucination engines perform sed commands without burning through our token budgets._

  `mcp` `file-operations` `context-engineering` `rust` `token-optimization`
  </details>

- **[lennys-quotes](https://github.com/bluzername/lennys-quotes)** `⭐ 10` `updated ≤180d` An MCP server that indexes and exposes 269 episodes of Lenny's Podcast transcripts to AI assistants like Claude Code and Cursor for product management research. <details><summary>More about</summary>

  It allows developers building product features to query expert PM advice directly within their coding workflow instead of context-switching to a browser.

  _We have successfully optimized the workflow so you can now procrastinate on your Jira tickets by debating product-market fit with an LLM fed on podcast transcripts._

  `mcp` `product-management` `knowledge-base` `local-search`
  </details>

- **[mcp-cockroachdb](https://github.com/amineelkouhen/mcp-cockroachdb)** `⭐ 10` `updated ≤180d` An MCP server that exposes CockroachDB operations—including queries, schema management, and cluster monitoring—as tools for LLMs and AI agents to interact with the database via natural language. <details><summary>More about</summary>

  It allows developers to wire CockroachDB directly into AI workflows in editors like Cursor and VS Code, letting agents inspect, query, and manage the database without hand-written glue code.

  _We have successfully abstracted away the one part of the stack where precision actually matters, replacing SQL with a probabilistic middleman that might drop your tables with confident enthusiasm._

  `mcp` `cockroachdb` `database` `agent-tools` `llm-integration`
  </details>

- **[mcp-files](https://github.com/flesler/mcp-files)** `⭐ 10` `updated ≤1y` A Model Context Protocol server that enables AI agents to find, read, and surgically edit code symbols across a codebase using tools like read_symbol and insert_text. <details><summary>More about</summary>

  It gives coding agents precise, codebase-wide symbol awareness and line-level editing capabilities, reducing the need for brittle whole-file rewrites.

  _We have reached the point where the AI needs its own specialized file server just to avoid confidently obliterating the wrong function._

  `mcp` `cursor` `code-editing` `symbol-search`
  </details>

- **[mcp-server](https://github.com/finmap-org/mcp-server)** `⭐ 10` `updated ≤30d` An MCP server that exposes historical stock market data, company profiles, and visualizations from US, UK, Russian, Turkish, and Hong Kong exchanges to AI agents and GPT Actions. <details><summary>More about</summary>

  Developers building financial AI agents can plug this into Claude Desktop or GPT Actions to give their models structured, queryable access to multi-exchange market data without writing their own scrapers.

  _We have successfully abstracted away the tedious work of reading financial news, replaced it with the equally tedious work of debugging why your MCP server thinks the Moscow Exchange updates every 15 minutes but only has data since 2011._

  `mcp` `finance` `stock-market` `agent-tools`
  </details>

- **[mcp-server-adfin](https://github.com/adfin-engineering/mcp-server-adfin)** `⭐ 10` `updated >1y` A Model Context Protocol server that connects Claude Desktop to Adfin APIs for credit control, invoicing, and document uploads. <details><summary>More about</summary>

  It lets developers automate financial workflows like invoice creation and credit checks directly from Claude Desktop using live API documentation.

  _We have finally achieved the future: an AI assistant that can politely ask your customers for money while you stare at a JSON config file wondering why uv is taking 20 seconds to start._

  `agentic-ai` `api-integration` `automation` `claude` `finance` `mcp` `payments`
  </details>

- **[memvid-mcp-server](https://github.com/ferrants/memvid-mcp-server)** `⭐ 10` `updated ≤1y` A Streamable HTTP MCP server that encodes text data into video files using Memvid for semantic search and retrieval via the Model Context Protocol. <details><summary>More about</summary>

  It allows developers to integrate video-encoded memory storage into MCP-compatible clients, enabling novel semantic search workflows outside traditional vector databases.

  _We have successfully reached the point where your context window is so small that we are now compressing it into MP4 files just to get a few chunks of text back._

  `mcp` `memory` `semantic-search` `video-storage` `python`
  </details>

- **[mermaid-mcp-server](https://github.com/gittyburstein/mermaid-mcp-server)** `⭐ 10` `updated ≤180d` An MCP server that helps AI agents analyze local or GitHub codebases and render visualized architecture into Mermaid diagrams via Kroki. <details><summary>More about</summary>

  It gives coding agents a structured way to read project files and convert code structure into PNG diagrams, reducing the time spent mentally mapping unfamiliar repositories.

  _We have officially reached the point where the agent needs its own diagramming server so it can pretend to understand your monorepo while you still can't find the config file._

  `mcp` `diagrams` `architecture` `mermaid` `agent-tools`
  </details>

- **[myinstants-mcp](https://github.com/austenstone/myinstants-mcp)** `⭐ 10` `updated ≤90d` An MCP server that connects AI agents to MyInstants.com, allowing them to search for and play internet soundboard sounds. <details><summary>More about</summary>

  It demonstrates how MCP extensibility reaches beyond productivity into entertainment, letting developers integrate meme sound effects directly into their agent workflows.

  _We have successfully reached the point where your $20/month coding agent now requires a soundboard integration to maximize its 'rizz' during code reviews._

  `mcp` `soundboard` `memes` `vscode`
  </details>

- **[pagecast](https://github.com/mcpware/pagecast)** `⭐ 10` `updated ≤90d` An MCP server that uses Playwright and ffmpeg to record browser interactions as GIFs or MP4s, enabling AI agents to automatically generate polished product demos. <details><summary>More about</summary>

  It allows developers to automate the creation of README demos and UI walkthroughs by letting an AI agent interact with a live browser and export optimized recordings.

  _We have successfully automated the creation of demo GIFs so that AI can show off the apps that AI helped us build, completing the loop of algorithmic vanity._

  `mcp` `playwright` `demo-recording` `browser-automation` `ffmpeg`
  </details>

- **[pharo-smalltalk-interop-mcp-server](https://github.com/mumez/pharo-smalltalk-interop-mcp-server)** `⭐ 10` `updated ≤180d` A local MCP server that connects AI agents to a live Pharo Smalltalk image for code evaluation, introspection, package management, and UI debugging. <details><summary>More about</summary>

  It allows developers to use modern AI coding agents to inspect, test, and manipulate Smalltalk systems directly through the Model Context Protocol.

  _You can now ask a frontier LLM to debug a morph hierarchy from 1996, because apparently no niche is safe from agentic ambition._

  `mcp` `smalltalk` `interop` `developer-tools`
  </details>

- **[qlik-mcp](https://github.com/jwaxman19/qlik-mcp)** `⭐ 10` `updated ≤1y` An MCP server that connects Claude and other MCP-compatible clients to the Qlik Cloud API to list applications, navigate sheets and charts, and extract visualization data. <details><summary>More about</summary>

  It lets developers and analysts query Qlik Cloud apps and pull chart data directly from their AI assistant instead of manually clicking through dashboards.

  _We have finally achieved the future: an AI agent that can read your Qlik Sense charts so you don't have to go near the Qlik Sense UI._

  `mcp` `qlik` `data-extraction` `claude` `analytics`
  </details>

- **[rancher-mcp-server](https://github.com/mrostamii/rancher-mcp-server)** `⭐ 10` `updated ≤30d` An MCP server that exposes Rancher, Harvester HCI, Kubernetes, Helm, and Fleet GitOps operations as tools for AI assistants like Cursor and Claude Desktop. <details><summary>More about</summary>

  It lets developers manage multi-cluster Kubernetes, VMs, and GitOps workflows through natural language prompts inside their AI-assisted IDEs instead of kubectl and Rancher dashboards.

  _You now have a perfectly valid reason to ask an LLM to scale your Harvester VMs while pretending you're still 'writing code' in your editor._

  `mcp` `rancher` `kubernetes` `gitops` `devops`
  </details>

- **[skill-ninja-mcp-server](https://github.com/aktsmm/skill-ninja-mcp-server)** `⭐ 10` `updated ≤90d` An MCP server that lets developers search, install, and manage reusable AI agent skills from within MCP-compatible clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It turns agent skills into a browsable, installable ecosystem, reducing the friction of discovering and reusing shared capabilities across AI coding environments.

  _Finally, a package manager for the cursed little prompt bundles we’ve all been copy-pasting between clients and pretending are a real workflow._

  `mcp` `skills` `agent-skills` `developer-tools`
  </details>

- **[synergy-age-mcp](https://github.com/longevity-genie/synergy-age-mcp)** `⭐ 10` `updated ≤1y` An MCP server that provides AI assistants with structured, read-only access to the SynergyAge database of genetic interventions and lifespan effects across model organisms. <details><summary>More about</summary>

  Developers building longevity or bioinformatics agents can wire this server into their editor or assistant to query validated genetic interaction data without manually managing database updates or writing custom SQL wrappers.

  _Now your AI assistant can confidently hallucinate synergistic genetic interventions for your C. elegans longevity startup while you wonder if 'MCP server for aging research' is the most 2025 sentence you've ever deployed._

  `mcp` `bioinformatics` `lifespan` `genetics` `data-access`
  </details>

- **[unity-ai-bridge](https://github.com/butterlatte-zhang/unity-ai-bridge)** `⭐ 10` `updated ≤90d` An MCP server and Unity package that lets AI coding assistants remotely control the Unity Editor, providing 65 tools for scene management, profiling, and light probe configuration via file-based IPC. <details><summary>More about</summary>

  It closes the gap between AI coding agents and game development workflows by giving assistants direct, tool-based access to the Unity Editor instead of just file system I/O.

  _We have finally reached the point where the AI needs a dedicated bridge to micromanage your light probes because apparently watching paint dry in the Unity Editor wasn't tedious enough for a human._

  `unity` `mcp` `game-dev` `ai-bridge` `ipc`
  </details>

- **[crypto-portfolio-mcp](https://github.com/kukapay/crypto-portfolio-mcp)** `⭐ 9` `updated >1y` An MCP server for tracking cryptocurrency portfolio allocations, fetching real-time Binance prices, and generating value history charts via SQLite storage. <details><summary>More about</summary>

  It lets developers wire crypto portfolio tracking and analysis directly into MCP-compatible clients like Claude Desktop without building custom API integrations.

  _Because nothing says 'responsible crypto investing' like handing your portfolio allocation logic to an LLM through a protocol server you cloned from a 9-star repo._

  `mcp` `crypto` `finance` `portfolio` `binance`
  </details>

- **[deeplook](https://github.com/osojdjd/deeplook)** `⭐ 9` `updated ≤30d` An open-source MCP server that provides AI agents with real-time structured company data, financials, and market context by aggregating multiple APIs to reduce LLM hallucinations. <details><summary>More about</summary>

  It allows developers building agentic workflows to replace fragile web scraping or hallucinated financial guesses with a single MCP call delivering vetted, structured company intelligence.

  _We have successfully abstracted 'looking up a stock ticker' into a protocol negotiation, proving that even checking if NVIDIA is still doing well requires a middleware layer now._

  `mcp` `finance` `context-engineering` `agent-tooling`
  </details>

- **[devhub-cms-mcp](https://github.com/devhub/devhub-cms-mcp)** `⭐ 9` `updated >1y` A Model Context Protocol server that allows LLMs to manage content, blogs, and locations within the DevHub CMS via tools for Claude Desktop, Cursor, and Claude Code. <details><summary>More about</summary>

  It lets developers delegate CMS CRUD operations to AI agents inside their existing IDE or chat workflows instead of writing API integration code.

  _We have successfully abstracted content management into a protocol so that an LLM can update business hours while you debug why the MCP server lost its API credentials._

  `cms` `devhub` `franchise` `headless` `integration` `mcp` `multi-location`
  </details>

- **[email-mcp](https://github.com/marlinjai/email-mcp)** `⭐ 9` `updated ≤90d` A unified MCP server that lets AI agents read, search, send, and organize email across Gmail, Outlook, iCloud, and generic IMAP providers. <details><summary>More about</summary>

  It allows developers to wire email access directly into Claude Code and other MCP-compatible assistants so agents can triage inboxes and send replies without leaving the workflow.

  _We have finally solved the hardest problem in computer science: letting a language model delete a thousand emails at once so you don't have to._

  `mcp` `email` `integrations` `node` `automation`
  </details>

- **[forage](https://github.com/isaac-levine/forage)** `⭐ 9` `updated ≤90d` An MCP server that lets AI coding agents automatically discover, install, and learn to use new MCP tools during a session without requiring a restart. <details><summary>More about</summary>

  Developers can grant agents the ability to self-extend their toolset on the fly, removing the manual cycle of identifying, installing, and configuring new MCP servers every time a task requires a missing capability.

  _We have finally built an agent that can install more agents to solve the problem of having too many agents to install manually._

  `mcp` `tool-discovery` `agent-extensions` `self-improving`
  </details>

- **[fritzbox-mcp-server](https://github.com/kambriso/fritzbox-mcp-server)** `⭐ 9` `updated ≤90d` An MCP server that lets AI assistants like Claude control and query a local FRITZ!Box router using natural language. <details><summary>More about</summary>

  It turns a home router into a programmable surface for local AI agents, letting developers manage network diagnostics and configuration through their existing assistant workflows.

  _We have finally bridged the gap between state-of-the-art language models and the 2010s networking hardware in your basement, because apparently we can't be trusted to type '192.168.178.1' anymore._

  `mcp` `home-automation` `networking` `local-ai` `tooling`
  </details>

- **[gitingest-mcp](https://github.com/narumiruna/gitingest-mcp)** `⭐ 9` `updated ≤90d` An MCP server that integrates with gitingest to turn any Git repository into a structured text digest for AI assistants. <details><summary>More about</summary>

  It allows coding agents and LLMs to ingest entire repository structures and file contents directly via the Model Context Protocol, bypassing manual copy-pasting.

  _We have successfully abstracted the act of reading code into an MCP server that turns a repository into a text blob, because apparently the AI's context window needed its own middleware._

  `mcp` `git` `context` `developer-tools`
  </details>

- **[local-mcp-releases](https://github.com/lanchuske/local-mcp-releases)** `⭐ 9` `updated ≤30d` A local MCP server that exposes 189 native macOS and Windows tools for Mail, Calendar, Teams, OneDrive, and other apps directly to AI assistants via the Model Context Protocol, with no cloud APIs or OAuth required. <details><summary>More about</summary>

  Developers can wire AI assistants into their local productivity apps using native system APIs instead of navigating enterprise OAuth, API keys, and rate limits for every integration.

  _You now have the infrastructure to let a language model read your Outlook inbox and cancel your 2pm meeting, and the only thing standing between you and that disaster is a preview dialog you'll probably click through without reading._

  `mcp` `local-first` `macos` `privacy` `integrations`
  </details>

- **[mcp-flowcore-platform](https://github.com/flowcore-io/mcp-flowcore-platform)** `⭐ 9` `updated ≤1y` An MCP server that provides a standardized interface for AI assistants to query and manage resources within the Flowcore Platform. <details><summary>More about</summary>

  It allows developers to offload Flowcore platform management tasks to MCP-compatible clients rather than manually interacting with the API.

  _We have successfully abstracted the platform so you can hallucinate your infrastructure configurations through a natural language layer._

  `mcp` `flowcore` `data-platform` `integration`
  </details>

- **[mcp-gitlab-jira](https://github.com/hainanzhao/mcp-gitlab-jira)** `⭐ 9` `updated ≤1y` An MCP server that enables AI agents to interact with GitLab and Jira instances for managing merge requests, pipelines, issues, and tickets via the Model Context Protocol. <details><summary>More about</summary>

  It allows coding agents and MCP-compatible clients to read and manipulate project management and CI/CD tasks directly within GitLab and Jira, bridging the gap between code and ticket workflows.

  _We have successfully reached the point where we need a protocol server just to let the AI figure out which ticket we were supposed to be working on before it writes the code._

  `mcp` `gitlab` `jira` `integration` `devops`
  </details>

- **[mcp-hydrolix](https://github.com/hydrolix/mcp-hydrolix)** `⭐ 9` `updated ≤30d` An MCP server that exposes Hydrolix database operations—such as running SQL queries, listing databases, and inspecting table schemas—to AI assistants like Claude Desktop and Claude Code. <details><summary>More about</summary>

  It lets developers query and inspect their Hydrolix clusters through natural language prompts inside their existing AI coding environments instead of switching to a separate database client.

  _Another specialized MCP server enters the ecosystem, proving that the future of software engineering is less about writing SQL and more about maintaining a growing fleet of protocol adapters._

  `mcp` `database` `hydrolix` `claude`
  </details>

- **[mcp-server](https://github.com/kontent-ai/mcp-server)** `⭐ 9` `updated ≤30d` An official MCP server that connects AI tools like Claude, Cursor, and VS Code to Kontent.ai for managing content models, taxonomies, and content items through natural language. <details><summary>More about</summary>

  It allows developers to scaffold content types and manage headless CMS structures conversationally inside their AI-enabled editor instead of clicking through a web UI.

  _Your CMS is now an agent endpoint, so you can hallucinate an entire content model before your coffee finishes brewing._

  `mcp` `kontent-ai` `cms` `headless` `npx`
  </details>

- **[mediawiki-mcp-server](https://github.com/olgasafonova/mediawiki-mcp-server)** `⭐ 9` `updated ≤30d` A Go-based MCP server that connects AI assistants and shells to MediaWiki wikis for searching, reading, and editing content via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers automate wiki documentation tasks and query internal knowledge bases directly from their AI coding tools and CI pipelines.

  _You can now ask your AI to format a wiki page while it simultaneously forgets the three lines of code you just wrote._

  `mcp` `mediawiki` `go` `cli` `knowledge-base`
  </details>

- **[opslevel-mcp](https://github.com/opslevel/opslevel-mcp)** `⭐ 9` `updated ≤30d` A Model Context Protocol server that provides read-only access to OpsLevel account data for AI tools like Claude Desktop, VS Code, Cursor, and Warp. <details><summary>More about</summary>

  It allows AI coding assistants to query service catalogs, team structures, and infrastructure metadata directly from your internal developer portal without manual context switching.

  _Another MCP server enters the ecosystem, gently reminding us that our AI agents now need a formalized protocol just to figure out which microservice owns the failing deployment._

  `mcp` `opslevel` `developer-portal` `context-protocol`
  </details>

- **[photopea-mcp-server](https://github.com/attalla1/photopea-mcp-server)** `⭐ 9` `updated ≤90d` An MCP server that connects AI agents to Photopea, enabling image editing and design tasks via natural language prompts inside developer environments like Claude Code and Cursor. <details><summary>More about</summary>

  Developers can now delegate repetitive image editing and asset generation tasks directly to their coding agent without leaving the terminal or learning design tools.

  _We have finally reached the point where your coding agent opens a browser tab to Photoshop itself into existence, just to round out the corners on your README hero image._

  `mcp` `image-editing` `photopea` `agent-tooling`
  </details>

- **[schemaflow-mcp-server](https://github.com/cryptoradi/schemaflow-mcp-server)** `⭐ 9` `updated ≤1y` An MCP server that provides AI IDEs with real-time access to PostgreSQL and Supabase database schemas for improved code generation. <details><summary>More about</summary>

  It allows coding assistants to understand database structure without manual context pasting, reducing errors in schema-dependent code generation.

  _We've reached the point where our AI needs a dedicated protocol server just to remember what tables we created twenty minutes ago._

  `database` `mcp` `postgresql` `schema` `supabase` `unknown` `unverified`
  </details>

- **[uniswap-poolspy-mcp](https://github.com/kukapay/uniswap-poolspy-mcp)** `⭐ 9` `updated >1y` An MCP server that monitors and queries newly created Uniswap V3 liquidity pools across nine blockchain networks via The Graph API. <details><summary>More about</summary>

  Developers building DeFi dashboards or trading bots can plug this into MCP-compatible environments like Claude Desktop to fetch real-time pool data without writing custom indexer logic.

  _We have successfully abstracted blockchain data access into a natural language query, meaning you can now day-trade liquidity pools using conversational English with an LLM._

  `mcp` `defi` `uniswap` `blockchain`
  </details>

- **[winston-ai-mcp-server](https://github.com/gowinston-ai/winston-ai-mcp-server)** `⭐ 9` `updated ≤30d` An MCP server that exposes Winston AI's detection capabilities, including AI text detection, image analysis, plagiarism checking, and text comparison, to compatible AI clients. <details><summary>More about</summary>

  It allows developers to integrate automated content verification and originality checks directly into their AI-assisted workflows via the Model Context Protocol.

  _Finally, an MCP server to help your AI agent verify that the blog post it hallucinated wasn't written by another AI agent._

  `mcp` `ai-detection` `plagiarism` `content-verification`
  </details>

- **[apimatic-validator-mcp](https://github.com/apimatic/apimatic-validator-mcp)** `⭐ 8` `updated >1y` An MCP server that validates OpenAPI 2.0 and 3.0 specifications by connecting APIMatic's validation API to MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It allows developers to validate API specs directly within their AI-assisted workflow without switching contexts to external validation tools.

  _Another day, another MCP server, as we carefully construct an ecosystem of micro-tools so we can ask a chatbot if our YAML is valid._

  `mcp` `openapi` `validation` `api`
  </details>

- **[binance-alpha-mcp](https://github.com/kukapay/binance-alpha-mcp)** `⭐ 8` `updated ≤1y` An MCP server that tracks Binance Alpha token trades in real time and exposes tools to query top tokens and trade statistics for AI agent consumption. <details><summary>More about</summary>

  It gives trading-oriented AI agents structured, USD-normalized Binance Alpha trade data without forcing them to parse raw on-chain events themselves.

  _We have successfully built an MCP server so that AI agents can optimize theirBinance Alpha point accumulation strategies with real-time markdown tables._

  `mcp` `binance` `trading` `finance` `crypto`
  </details>

- **[blockbeats-mcp](https://github.com/kukapay/blockbeats-mcp)** `⭐ 8` `updated ≤180d` A Model Context Protocol server that exposes BlockBeats' blockchain news and in-depth articles to AI agents via simple retrieval tools. <details><summary>More about</summary>

  Developers building crypto-aware agents can wire live blockchain news and analysis into their workflows without scraping or maintaining their own API wrappers.

  _We’ve officially reached the point where the ecosystem now needs dedicated protocol servers just to feed crypto headlines to agents that mostly hallucinate the same market panic anyway._

  `mcp` `blockchain` `news` `agent-tooling`
  </details>

- **[chatterboxio-mcp-server](https://github.com/chatterboxio/chatterboxio-mcp-server)** `⭐ 8` `updated ≤1y` A Model Context Protocol server that integrates with ChatterBox to allow AI agents to join Zoom, Google Meet, and Microsoft Teams meetings, capture transcripts, and generate summaries. <details><summary>More about</summary>

  It connects meeting platforms to MCP-compatible AI workflows, allowing developers to automate meeting capture and summarization through agent tooling.

  _We have successfully reached the point where your AI agent needs its own Zoom bot account so it can attend the standup you refuse to join._

  `agents` `google-meet` `mcp` `mcp-server` `meeting-bot` `meetings` `transcription` `zoom` `zoom-bot`
  </details>

- **[context-rot-detection](https://github.com/milos-product-maker/context-rot-detection)** `⭐ 8` `updated ≤90d` An MCP server that analyzes an AI agent's context window health and provides recovery recommendations to mitigate performance degradation during long-running sessions. <details><summary>More about</summary>

  It gives coding agents and developers a real-time health score and actionable steps to prevent the 'lost-in-the-middle' failure mode as context windows fill up.

  _We have finally built a mood ring for our LLMs, because apparently the agent is now too cognitively degraded to realize it has stopped understanding the assignment._

  `mcp` `context-engineering` `agent-health` `observability`
  </details>

- **[deepseek-mcp-server](https://github.com/arikusi/deepseek-mcp-server)** `⭐ 8` `updated ≤30d` An MCP server that exposes DeepSeek Chat and Reasoner models to MCP-compatible clients like Claude Code, Cursor, and Windsurf via stdio or HTTP transport. <details><summary>More about</summary>

  It lets developers swap DeepSeek's models into their existing MCP-based workflows without changing editors or agents.

  _Now you can orchestrate a reasoning model from a chat client that is itself orchestrating an agent, because nothing says 'working locally' like routing tokens through three layers of indirection._

  `mcp` `deepseek` `typescript` `model-integration` `cli`
  </details>

- **[df-mcp](https://github.com/dreamfactorysoftware/df-mcp)** `⭐ 8` `updated ≤180d` An MCP server that exposes DreamFactory-managed enterprise data sources to Claude Desktop so LLMs can query governed APIs via standardized context protocol tooling. <details><summary>More about</summary>

  It lets developers connect local or on-prem LLMs to existing enterprise data sources with role-based access and identity passthrough without building custom API integrations.

  _Another day, another glorified adapter that turns a perfectly good enterprise data platform into a tool-calling roulette wheel for your desktop chatbot._

  `mcp` `dreamfactory` `claude-desktop` `data-access` `enterprise`
  </details>

- **[echo-mcp](https://github.com/brunokrugel/echo-mcp)** `⭐ 8` `updated ≤90d` A Go library that wraps existing Echo framework APIs with Model Context Protocol support, turning REST endpoints into tools that AI agents can call. <details><summary>More about</summary>

  It lets developers expose their existing Echo APIs to MCP-compatible agents with zero configuration, bridging standard web services and the growing agent ecosystem.

  _Another day, another framework adapter, because apparently your CRUD API wasn't complete until an AI agent could hallucinate requests against it._

  `mcp` `go` `echo-framework` `api-integration`
  </details>

- **[etf-flow-mcp](https://github.com/kukapay/etf-flow-mcp)** `⭐ 8` `updated >1y` An MCP server that exposes crypto ETF flow data for BTC and ETH to AI agents via the CoinGlass API. <details><summary>More about</summary>

  Developers building finance-aware agents can plug in real-time ETF flow context without wiring their own data scrapers or API clients.

  _Your agent can now explain why Bitcoin just mooned with the same confidence it uses to hallucinate your quarterly bonuses._

  `mcp` `finance` `data` `agent-tooling`
  </details>

- **[inoyu-mcp-unomi-server](https://github.com/inoyu-dev/inoyu-mcp-unomi-server)** `⭐ 8` `updated ≤1y` An MCP server that allows Claude to read and update user profiles and consent data stored in an Apache Unomi customer data platform. <details><summary>More about</summary>

  It lets developers connect conversational AI workflows to existing customer profiles and GDPR consent states without building a custom Unomi integration.

  _We have successfully abstracted the abstraction, so your AI can now argue with your customer data platform about whether a user agreed to marketing emails._

  `cdp` `context` `mcp` `unomi`
  </details>

- **[MailSandbox](https://github.com/btafoya/mailsandbox)** `⭐ 8` `updated ≤1y` A fork of Mailpit adding Postmark API emulation and an MCP server that lets AI assistants list, search, and analyze emails for debugging workflows. <details><summary>More about</summary>

  It lets developers stub transactional email and then point an AI coding agent directly at the inbox to verify sending behavior without leaving the workflow.

  _We have finally achieved the destiny of modern tooling: an SMTP server that needs an MCP server so your AI can read the emails your AI just sent on your behalf._

  `debugging` `developer-tools` `email-testing` `mcp`
  </details>

- **[mcp_ai_soc_sher](https://github.com/akramiot/mcp_ai_soc_sher)** `⭐ 8` `updated >1y` An MCP server that converts natural language prompts into SQL queries with integrated security threat analysis for SOC workflows. <details><summary>More about</summary>

  Developers can let security analysts query databases using plain English while the tool automatically guards against SQL injection and sensitive table access.

  _Another MCP server enters the ring, promising to turn your SOC team into SQL whisperers while quietly judging every query they write._

  `mcp` `sql` `security` `soc` `text2sql`
  </details>

- **[mcp-dataverse](https://github.com/codeurali/mcp-dataverse)** `⭐ 8` `updated ≤30d` An MCP server that exposes Microsoft Dataverse Web API capabilities as 79 tools and 4 resources for AI agents to query and manipulate Dataverse environments. <details><summary>More about</summary>

  It lets AI coding agents and IDEs interact directly with Dataverse schema, records, and metadata instead of hallucinating OData queries or column names.

  _We have officially reached the point where we need a specialized proxy server just so our AI agents can stop lying to Microsoft about what a table column is called._

  `mcp` `dataverse` `power-platform` `microsoft`
  </details>

- **[mcp-proxmox](https://github.com/antonio-mello-ai/mcp-proxmox)** `⭐ 8` `updated ≤90d` An MCP server that lets AI assistants like Claude and Cursor manage Proxmox VE clusters, handling VM/container provisioning, snapshots, backups, and firewall rules via natural language. <details><summary>More about</summary>

  It turns infrastructure management into a conversational workflow, allowing developers to spin up, clone, and tear down homelab or self-hosted environments without memorizing Proxmox API endpoints.

  _Finally, you can hallucinate your way into deleting a production VM by politely asking your AI assistant for a 'quick cleanup'._

  `mcp` `proxmox` `infrastructure` `homelab` `devops`
  </details>

- **[mlcbakery](https://github.com/jettyio/mlcbakery)** `⭐ 8` `updated ≤90d` A Python-based FastAPI service for managing ML model provenance and lineage with Croissant metadata validation, exposing a Streamable MCP HTTP endpoint for integration. <details><summary>More about</summary>

  It gives developers a structured way to track dataset and model lineage while exposing that metadata via MCP for AI assistants to consume.

  _We have successfully built an API to track the lineage of the models that we will inevitably replace six times before the quarter ends._

  `mcp` `ml-lineage` `fastapi` `provenance` `metadata`
  </details>

- **[piston-mcp](https://github.com/alvii147/piston-mcp)** `⭐ 8` `updated ≤90d` An MCP server that connects LLMs to the Piston code execution engine to run code snippets from within MCP-compatible clients. <details><summary>More about</summary>

  It gives coding assistants a sandboxed execution environment to validate code outputs without leaving the chat interface.

  _We have successfully built a bridge to run code in a sandbox that, as of last week, requires a secret token to actually access._

  `mcp` `code-execution` `piston` `llm-tooling`
  </details>

- **[postgres_mcp](https://github.com/javimaligno/postgres_mcp)** `⭐ 8` `updated ≤180d` A TypeScript and Python MCP server that exposes PostgreSQL databases to Claude Code, Cursor, and other MCP clients for query execution, schema exploration, and performance analysis. <details><summary>More about</summary>

  It lets developers point a coding agent directly at a live Postgres instance so the assistant can inspect schemas, run queries, and suggest optimizations without leaving the IDE.

  _Another brick in the wall of 'I connected my agent to production' bravery, now with read-only protection as the only thing standing between you and a very expensive afternoon._

  `mcp` `postgresql` `database` `cursor` `claude-code`
  </details>

- **[roslyn-codelens-mcp](https://github.com/marcelroozekrans/roslyn-codelens-mcp)** `⭐ 8` `updated ≤30d` A Roslyn-based MCP server that exposes deep .NET semantic code intelligence—such as type hierarchies, call graphs, and DI registrations—to AI agents like Claude Code. <details><summary>More about</summary>

  It allows AI coding assistants to navigate complex .NET codebases with compiler-grade accuracy rather than relying on brittle text search or vague context windows.

  _We’ve successfully built a tool that lets an AI deeply understand your spaghetti .NET dependency graph, removing your last excuse for not refactoring it._

  `mcp` `dotnet` `roslyn` `code-analysis` `claude-code`
  </details>

- **[selenium-mcp-server](https://github.com/phungxuananh/selenium-mcp-server)** `⭐ 8` `updated ≤30d` A Model Context Protocol server that exposes Selenium WebDriver automation capabilities—navigation, element interaction, screenshots, and JavaScript execution—as tools for AI assistants. <details><summary>More about</summary>

  It lets AI agents drive real browsers with Selenium under the hood, bridging legacy browser automation with the emerging MCP tool ecosystem.

  _Because what the AI stack really needed was yet another abstraction layer between your agent and a Chrome window that may or may not still be debugging on port 9222._

  `mcp` `selenium` `browser-automation` `webdriver`
  </details>

- **[smithsonian-mcp](https://github.com/molanojustin/smithsonian-mcp)** `⭐ 8` `updated ≤30d` A Model Context Protocol server that gives AI assistants structured access to the Smithsonian Institution's Open Access collections, enabling search, metadata retrieval, and image access for over 3 million objects. <details><summary>More about</summary>

  Developers building cultural or research-focused AI workflows can plug this into Claude Desktop or MCP-compatible hosts to let assistants query museum collections without hand-rolling API integrations.

  _We’ve now built an MCP server so your coding assistant can ponder 19th-century artifacts while your production tickets go untouched._

  `mcp` `smithsonian` `api-integration` `ai-assistant`
  </details>

- **[stacksfinder-mcp](https://github.com/hoklims/stacksfinder-mcp)** `⭐ 8` `updated ≤180d` An MCP server that provides deterministic tech stack recommendations to LLM clients like Claude, Cursor, and Windsurf via 23 tools. <details><summary>More about</summary>

  It turns vague 'what stack should I use' prompts into structured, deterministic recommendations directly inside your AI coding assistant.

  _We have successfully abstracted the 'which framework is best' debate into a plugin that lets your AI assistant confidently hallucinate with an API key._

  `mcp` `tech-stack` `developer-tools` `prompt-engineering`
  </details>

- **[swarmia-mcp](https://github.com/mattjegan/swarmia-mcp)** `⭐ 8` `updated ≤1y` A read-only local MCP server that exposes Swarmia's Export API endpoints for pull requests, DORA metrics, investment balance, and effort reporting to MCP-compatible clients like Claude and Cursor. <details><summary>More about</summary>

  It lets developers query team-level engineering metrics and capitalization reports conversationally inside their AI coding assistant instead of jumping into the Swarmia dashboard.

  _We’ve reached the point where we need an AI agent just to help us emotionally process how long our pull requests have been sitting in review._

  `mcp` `metrics` `developer-tools` `swarmia` `dora`
  </details>

- **[swift-patterns-mcp](https://github.com/efremidze/swift-patterns-mcp)** `⭐ 8` `updated ≤30d` An MCP server that provides AI assistants with searchable, curated Swift and SwiftUI best practices aggregated from leading iOS developers and publications. <details><summary>More about</summary>

  It allows iOS developers to query architectural patterns and implementation details directly from their IDE or AI assistant without disrupting their workflow to browse documentation.

  _Finally, a way to ask an AI agent about SwiftUI patterns without realizing you've just outsourced your architectural judgment to a server indexing Antoine van der Lee's blog._

  `mcp` `swift` `swiftui` `ios` `developer-tools`
  </details>

- **[thegraph-mcp](https://github.com/kukapay/thegraph-mcp)** `⭐ 8` `updated ≤1y` A Model Context Protocol server that provides AI agents with tools to fetch schemas and execute GraphQL queries against The Graph's indexed blockchain data. <details><summary>More about</summary>

  It allows developers to build AI agents that can query on-chain data via natural language without manually writing or maintaining GraphQL queries.

  _Another MCP server appears in the registry, ensuring your blockchain agent can now hallucinate token prices with the full authority of a verified subgraph schema._

  `mcp` `blockchain` `the-graph` `ai-agents`
  </details>

- **[wallet-inspector-mcp](https://github.com/kukapay/wallet-inspector-mcp)** `⭐ 8` `updated ≤1y` An MCP server that allows AI agents to query wallet balances, activity, and transaction history across major EVM chains and Solana using the Dune SIM API. <details><summary>More about</summary>

  It bridges onchain data with AI assistants, enabling developers to build agents that can natively audit addresses, track assets, or debug DeFi flows without wiring up custom API glue.

  _We have successfully reached the point where a blockchain wallet can be inspected by an AI agent that is technically employed by a chat interface running on a laptop, and the most impressive part is that the README has more localized versions than GitHub stars._

  `mcp` `web3` `evm` `solana` `wallet`
  </details>

- **[webhook-tester-mcp](https://github.com/alimo7amed93/webhook-tester-mcp)** `⭐ 8` `updated >1y` A FastMCP server that wraps the webhook-test.com API to let AI agents create, inspect, and manage webhook tokens and payloads via Claude Desktop. <details><summary>More about</summary>

  It lets developers automate webhook testing and inspection through an AI agent instead of manually clicking through a web UI or writing custom API wrappers.

  _If your AI agent now needs a dedicated plugin just to confirm that a POST request arrived, the stack has officially become self-aware of its own complexity._

  `mcp` `webhooks` `fastmcp` `claude` `testing`
  </details>

- **[wellread](https://github.com/mnlt/wellread)** `⭐ 8` `updated ≤30d` An MCP server that acts as a shared semantic cache for agent research, storing verified technical answers to reduce redundant web searches and token usage across sessions. <details><summary>More about</summary>

  It drastically cuts token costs and latency for AI agents by serving previously verified research instead of forcing a fresh web search for every repeated technical query.

  _We have successfully built a distributed system to solve the problem of our AI assistants having the same memory holes we do._

  `mcp` `memory` `agent-optimization` `research`
  </details>

- **[wick](https://github.com/buildepicshit/wick)** `⭐ 8` `updated ≤30d` An MCP server that captures C# exceptions and build errors in Godot Engine, enriches them with Roslyn-powered source context, and exposes the telemetry to AI assistants. <details><summary>More about</summary>

  It collapses eight turns of AI debugging into one by giving the assistant the actual method body, caller chain, and scene state instead of a naked stack trace.

  _We have successfully built a tool to make the AI stop asking us to open the files we were already looking at._

  `mcp` `godot` `csharp` `roslyn` `debugging`
  </details>

- **[agent-skill-loader](https://github.com/back1ply/agent-skill-loader)** `⭐ 7` `updated ≤30d` An MCP server that exposes a local Claude Code Skills library to MCP-compatible AI agents as slash commands and tools with live file watching. <details><summary>More about</summary>

  Developers can maintain a single static skill library and make it dynamically available across Claude Desktop, Cursor, and other MCP clients without manual syncing.

  _We have officially reached the point where we need a bridge to help our bridges talk to our skills about other bridges._

  `mcp` `skills` `claude-code` `context-engineering`
  </details>

- **[ai-dev-analytics](https://github.com/lwtlong/ai-dev-analytics)** `⭐ 7` `updated ≤30d` An open-source MCP server that silently tracks vibe coding sessions locally and visualizes deviations in a dashboard to codify patterns into project rules. <details><summary>More about</summary>

  It gives developers structured visibility into AI coding behaviors and automatically converts recurring deviations into reusable project rules to improve future outputs.

  _Your AI assistant is now so unpredictable that you need a local observability stack just to figure out why it keeps writing the layout upside down._

  `mcp` `observability` `local-first` `rules` `vibe-coding`
  </details>

- **[app-publish-mcp](https://github.com/mikusnuz/app-publish-mcp)** `⭐ 7` `updated ≤90d` A Model Context Protocol server providing 91 tools to manage App Store Connect and Google Play Console operations, including listings, screenshots, releases, and reviews. <details><summary>More about</summary>

  It allows developers to delegate tedious mobile app store metadata updates, submission states, and review responses to an AI assistant via the MCP standard.

  _We have successfully abstracted away the pain of the App Store Connect web interface by adding a 91-tool middleware layer that requires an AI to operate._

  `mcp` `mobile` `app-store` `automation` `devops`
  </details>

- **[builders-sodax-mcp-server](https://github.com/gosodax/builders-sodax-mcp-server)** `⭐ 7` `updated ≤30d` An MCP server that exposes live SODAX cross-chain DeFi data, swap/token tools, and auto-syncing SDK documentation to AI coding assistants. <details><summary>More about</summary>

  Developers building cross-network DeFi integrations can query real-time swap, lending, and solver data plus SDK docs directly from their AI assistant instead of switching to browsers and dashboards.

  _We have successfully reached the point where even cross-chain intents need their own MCP server so your AI can debug Solidity without you having to pretend you understand relay chain mappings._

  `mcp` `defi` `cross-chain` `sdk-docs`
  </details>

- **[caldav-mcp](https://github.com/madbonez/caldav-mcp)** `⭐ 7` `updated ≤180d` A Model Context Protocol server that exposes CalDAV-compatible calendar operations—listing, creating, and searching events—to MCP-enabled developer tools like Cursor. <details><summary>More about</summary>

  It lets coding agents directly read and write calendar events across providers like Google, Nextcloud, and iCloud, bridging personal scheduling into the IDE workflow.

  _We have successfully taught our coding agents to schedule meetings, fully automating the part of the job we were already procrastinating on._

  `mcp` `caldav` `calendar` `cursor` `integration`
  </details>

- **[canvas-lms-mcp](https://github.com/ahnopologetic/canvas-lms-mcp)** `⭐ 7` `updated ≤90d` A Machine Conversation Protocol server that exposes Canvas LMS data—courses, assignments, grades, and calendar events—to AI assistants like Claude and Cursor. <details><summary>More about</summary>

  It lets developers query their academic workload and grades through their coding agent instead of clicking through a learning management system.

  _Now your AI can nag you about overdue homework while you are trying to debug a race condition._

  `mcp` `canvas` `education` `integrations`
  </details>

- **[chart-library-mcp](https://github.com/grahammccain/chart-library-mcp)** `⭐ 7` `updated ≤30d` An MCP server that provides AI agents with access to a historical stock chart pattern search engine covering 25M+ patterns across 19K+ stocks. <details><summary>More about</summary>

  It allows developers to equip coding agents and IDEs with historical market pattern analysis, enabling financial and trading workflows without building custom market-data pipelines.

  _Your AI agent can now confidently tell you that the last time your portfolio looked like this, it usually lost 5% within a week._

  `mcp-server` `finance` `trading` `ai-agents` `market-data`
  </details>

- **[conan-mcp](https://github.com/conan-io/conan-mcp)** `⭐ 7` `updated ≤90d` A Model Context Protocol server that exposes Conan package manager operations—such as project creation, dependency installation, and license checking—to AI assistants. <details><summary>More about</summary>

  It lets developers manage C/C++ dependencies, generate project scaffolds, and audit licenses through natural language conversations inside their MCP-compatible AI tools.

  _The dream of solving C++ dependency hell via a quick chat with an LLM is finally here, meaning we can now anthropomorphize our linker errors._

  `mcp` `conan` `cpp` `package-manager` `devops`
  </details>

- **[crypto-liquidations-mcp](https://github.com/kukapay/crypto-liquidations-mcp)** `⭐ 7` `updated ≤1y` An MCP server that streams real-time cryptocurrency liquidation events from Binance via WebSocket for use by AI agents. <details><summary>More about</summary>

  It gives AI agents a live data feed of forced liquidations, enabling them to analyze high-volatility market movements without custom exchange integrations.

  _Your AI agent can now panic about leveraged positions in real time, adding financial market anxiety to its existing existential one._

  `mcp` `crypto` `binance` `real-time` `finance`
  </details>

- **[crypto-trending-mcp](https://github.com/kukapay/crypto-trending-mcp)** `⭐ 7` `updated ≤1y` An MCP server that fetches and parses trending cryptocurrency data from CoinGecko for use in MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It allows developers to query live crypto market trends directly through their AI assistant using structured tools and prompts rather than manual browser checks.

  _We have reached the point where we need a dedicated protocol server just to ask an LLM what coin is currently mooning, sparing us the terrible effort of opening a browser tab._

  `mcp` `crypto` `finance` `claude` `data`
  </details>

- **[discord-mcp](https://github.com/pasympa/discord-mcp)** `⭐ 7` `updated ≤30d` An MCP server that exposes 95+ Discord tools—messages, channels, roles, moderation, and more—to MCP-compatible clients like Claude Desktop, Cursor, and VS Code Copilot. <details><summary>More about</summary>

  It lets developers manage entire Discord servers through natural language inside their existing AI coding environments instead of building custom bot scripts.

  _You can now get rate-limited and temp-banned from your own Discord community without ever leaving your IDE._

  `mcp` `discord` `typescript` `automation` `bot`
  </details>

- **[encode-toolkit](https://github.com/ammawla/encode-toolkit)** `⭐ 7` `updated ≤30d` An MCP server and Claude Code plugin that provides 20 tools and 47 skills to search, cross-reference, and analyze ENCODE genomics data and run analysis pipelines from natural language. <details><summary>More about</summary>

  Bioinformatics developers can query 14 databases, run 7 genomic pipelines, and generate publication-ready methods directly inside Claude Code without leaving the IDE.

  _Because nothing says 'focused software engineering' like turning your coding agent into a specialized genomics workbench that can cross-reference GWAS variants and ClinVar pathogenicity between commits._

  `mcp` `bioinformatics` `claude-code` `genomics` `skills`
  </details>

- **[endiagram/mcp](https://github.com/dushyant30suthar/endiagram-mcp)** `⭐ 7` `updated ≤30d` An MCP server that connects AI coding assistants to EN Diagram, enabling deterministic structural analysis of systems using graph theory and mathematical theorems. <details><summary>More about</summary>

  It lets developers ask an AI agent to validate system architecture, check for deadlocks, and verify invariants without the AI guessing—backed by actual math instead of vibes.

  _We have finally reached the point where the AI admits it doesn't know your system is broken and politely hands the question to a graph-theory oracle that actually does._

  `architecture` `developer-tools` `graph-theory` `mcp`
  </details>

- **[finbrain-mcp](https://github.com/ahmetsbilgin/finbrain-mcp)** `⭐ 7` `updated ≤90d` A local MCP server that exposes FinBrain financial datasets—including price predictions, sentiment analysis, and alternative data—to AI clients like Claude Desktop and VS Code via a Python SDK. <details><summary>More about</summary>

  It lets developers pipe structured financial intelligence directly into their AI-assisted coding workflows without building custom API integrations.

  _You can now prompt your coding agent to day-trade based on Reddit mentions and congressional disclosures while it debugs your unit tests._

  `mcp` `finance` `local-server` `python`
  </details>

- **[funding-rates-mcp](https://github.com/kukapay/funding-rates-mcp)** `⭐ 7` `updated >1y` An MCP server that fetches and compares real-time crypto funding rates across Binance, OKX, Bybit, Bitget, Gate, and CoinEx for integration with AI assistants like Claude Desktop. <details><summary>More about</summary>

  It gives trading-agent workflows a structured data source to spot arbitrage opportunities without scraping exchange APIs by hand.

  _We have officially reached the point where an AI agent needs a dedicated protocol server just to whisper funding rates into its context window while it pretends to understand decentralized finance._

  `mcp` `crypto` `finance` `claude` `data`
  </details>

- **[ios-mcp-code-quality-server](https://github.com/a-25/ios-mcp-code-quality-server)** `⭐ 7` `updated ≤1y` An MCP server and CLI tool that runs Xcode tests and SwiftLint analysis, providing structured reports to AI assistants and developers for iOS code quality feedback. <details><summary>More about</summary>

  It bridges Xcode build/test tooling with MCP-compatible AI assistants, allowing iOS developers to get structured linting and test failure feedback directly through their AI workflows.

  _Finally, your AI assistant can now argue with you about SwiftLint violations that you were perfectly capable of ignoring on your own._

  `mcp` `ios` `swift` `xcode` `linting`
  </details>

- **[lightning-wallet-mcp](https://github.com/lightningfaucet/lightning-wallet-mcp)** `⭐ 7` `updated ≤30d` An MCP server and CLI that gives AI agents access to a Bitcoin wallet for making Lightning, L402, and USDC payments via frameworks like Claude Code, Cursor, and OpenClaw. <details><summary>More about</summary>

  It lets developers build and experiment with autonomous agents that can programmatically pay for APIs and send value without human intervention.

  _The natural next step in agent autonomy is here: your code assistant can now independently burn your sats on paywalled APIs while you debug the resulting 402 errors._

  `mcp` `bitcoin` `lightning` `payments` `agents`
  </details>

- **[matter-controller-mcp](https://github.com/0x1abin/matter-controller-mcp)** `⭐ 7` `updated ≤1y` An MCP server that bridges AI assistants with Matter-compatible smart home devices to discover, commission, and control them via standardized transports. <details><summary>More about</summary>

  It lets developers wire Matter device control into AI workflows and agents without writing custom protocol glue code.

  _Now your AI assistant can dim your smart lights when it gets stuck in a loop, proving that even home automation eventually becomes a developer tooling problem._

  `mcp` `matter` `iot` `smart-home` `embedded`
  </details>

- **[mcp_pearch](https://github.com/pearch-ai/mcp_pearch)** `⭐ 7` `updated ≤90d` An MCP server that provides natural-language search over people and company leads via the Pearch.ai API, designed for integration with Claude Desktop, Cursor, and other MCP-compatible clients. <details><summary>More about</summary>

  Developers building AI recruiting or sales workflows can plug candidate and lead search directly into their coding agent instead of wiring up separate API calls.

  _Your coding agent can now source engineering candidates while you debug, so the same tool can both build the team and eventually replace it._

  `mcp` `recruiting` `api` `leads` `b2b`
  </details>

- **[mcp-mifosx-self-service](https://github.com/openmf/mcp-mifosx-self-service)** `⭐ 7` `updated ≤90d` An open-source MCP server built with FastMCP that exposes Apache Fineract / MifosX self-service banking APIs as AI-callable tools for MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It allows developers building fintech integrations to let AI agents handle complex banking workflows—like loan management and transfers—directly through the MifosX API without writing custom glue code.

  _We have successfully abstracted banking infrastructure so that an LLM can now mismanage your loans and beneficiaries with the same confidence it brings to JavaScript dependency upgrades._

  `mcp` `fintech` `fastmcp` `python` `banking`
  </details>

- **[mcp-nextcloud-calendar](https://github.com/cheffromspace/mcp-nextcloud-calendar)** `⭐ 7` `updated ≤1y` An MCP server that connects AI assistants to Nextcloud Calendar, enabling them to list, create, update, and delete calendars and events via the Model Context Protocol. <details><summary>More about</summary>

  It allows developers to integrate personal or self-hosted calendar management directly into their AI workflows and agent toolchains without writing custom API glue code.

  _We have finally reached the point where an AI agent can inadvertently double-book your dentist appointment because it wanted to be helpful, and the error logs are in a protocol you just learned existed yesterday._

  `mcp` `nextcloud` `calendar` `integration`
  </details>

- **[mcp-project-manager](https://github.com/croffasia/mcp-project-manager)** `⭐ 7` `updated ≤1y` An MCP server that provides hierarchical task management (ideas → epics → tasks) with AI-powered decomposition and dependency tracking for MCP-compatible assistants. <details><summary>More about</summary>

  It lets developers delegate project scaffolding and task breakdown to their AI assistant, turning natural language prompts into structured work items inside their existing workflow.

  _We have successfully invented a way for an AI to generate a todo list for another AI to ignore while we nervously refresh the CLI dashboard._

  `mcp` `task-management` `project-management` `agent-tooling`
  </details>

- **[mcp-server-chart](https://github.com/kamranbiglari/mcp-server-chart)** `⭐ 7` `updated ≤1y` An MCP server that exposes 15+ chart types—including financial, statistical, and business visualizations—with Zod schema validation for type-safe chart configuration in MCP-compatible clients. <details><summary>More about</summary>

  Developers can let LLMs generate rich, validated charts directly inside Claude.AI or other MCP clients instead of hand-crafting visualization code.

  _We have successfully externalized chart configuration to an LLM talking to a Zod-validated MCP server, because apparently writing a Chart.js config by hand was the bottleneck all along._

  `mcp` `chart-generation` `visualization` `type-safe` `claude-integration`
  </details>

- **[nakkas](https://github.com/arikusi/nakkas)** `⭐ 7` `updated ≤30d` An MCP server that exposes tools for AI assistants to generate and preview animated SVG graphics from JSON configurations. <details><summary>More about</summary>

  It allows developers to delegate design-heavy SVG generation and animation tasks directly to their AI workflow without leaving the coding environment.

  _We have finally reached the point where our AI agents need a dedicated middleware layer just to argue with them about neon gradients and SMIL animations._

  `mcp` `svg` `generative-art` `typescript` `animation`
  </details>

- **[netops-mcp](https://github.com/alpadalar/netops-mcp)** `⭐ 7` `updated ≤90d` A Model Context Protocol server that exposes common network operations and infrastructure tools like ping, nmap, and curl to AI agents via a standardized interface. <details><summary>More about</summary>

  It allows AI coding agents and assistants to directly perform network diagnostics, DNS lookups, and port scanning without the developer needing to manually run these commands.

  _Finally, your AI agent can now traceroute a dead server at 3 AM before inevitably blaming the results on your firewall rules anyway._

  `mcp` `networking` `devops` `infrastructure`
  </details>

- **[openobserve-community-mcp](https://github.com/alilxxey/openobserve-community-mcp)** `⭐ 7` `updated ≤90d` A Model Context Protocol server that exposes OpenObserve Community Edition logs, streams, dashboards, and traces to local AI coding agents via a read-only stdio interface. <details><summary>More about</summary>

  It lets AI agents inside Claude, Codex, and OpenCode directly query observability data without the developer context-switching to a separate monitoring dashboard.

  _Because the logical next step after teaching agents to write the code is teaching them to read the logs when that code inevitably sets the production environment on fire._

  `mcp` `observability` `openobserve` `stdio`
  </details>

- **[pancakeswap-poolspy-mcp](https://github.com/kukapay/pancakeswap-poolspy-mcp)** `⭐ 7` `updated ≤1y` An MCP server that provides real-time tracking of newly created liquidity pools on PancakeSwap via The Graph API. <details><summary>More about</summary>

  It allows DeFi developers and analysts to query on-chain pool data directly through MCP-compatible clients like Claude Desktop instead of writing custom API integrations.

  _We have officially reached the point where we are building middleware to ask chatbots about liquidity pools that were created five minutes ago._

  `mcp` `defi` `pancakeswap` `finance` `the-graph`
  </details>

- **[persistproc](https://github.com/irskep/persistproc)** `⭐ 7` `updated ≤1y` An MCP server that lets LLM agents and developers see, manage, and restart long-running processes like dev servers without copy-pasting terminal output. <details><summary>More about</summary>

  It closes the loop between running local services and AI coding agents by giving them direct access to process output and control, eliminating the manual friction of relaying errors.

  _We have officially reached the point where we need a dedicated middleware layer just so our AI assistants can watch the npm run dev logs we are already staring at._

  `mcp` `process-management` `agent-infrastructure` `dev-workflow`
  </details>

- **[powerbi-analyst-mcp](https://github.com/mbrummerstedt/powerbi-analyst-mcp)** `⭐ 7` `updated ≤30d` A local MCP server that connects LLMs like Claude to Power BI semantic models, allowing AI agents to run DAX queries and analyze data directly. <details><summary>More about</summary>

  It allows developers and analysts to delegate complex, multi-step data exploration to an agent that can query large datasets and synthesize findings without manual DAX translation.

  _Finally, a way to let an LLM hallucinate insights about your margin decline after crashing its context window with 73,000 rows of CSV data._

  `mcp` `power-bi` `data-analysis` `local-first`
  </details>

- **[servers](https://github.com/mintmcp/servers)** `⭐ 7` `updated ≤1y` A collection of hosted MCP servers from Lutra that connect AI agents to Google and Microsoft email and calendar accounts, accompanied by a gateway product for enterprise governance. <details><summary>More about</summary>

  Developers can immediately extend AI agents like Claude and Cursor with calendar and email capabilities without building custom OAuth and API integrations.

  _We have successfully abstracted the pain of reading our own emails into a protocol that requires an additional gateway to manage the agents that do it for us._

  `mcp` `integrations` `calendar` `email` `gateway`
  </details>

- **[sonatype-mcp](https://github.com/brianveltman/sonatype-mcp)** `⭐ 7` `updated ≤90d` An MCP server that lets AI assistants manage Sonatype Nexus repositories, components, and firewall quarantines through a standardized interface. <details><summary>More about</summary>

  It allows developers to manage artifacts, search components, and release quarantined packages by talking to their AI assistant instead of clicking through the Nexus UI.

  _We have successfully abstracted away the one Java administration interface everyone pretended to understand, replacing it with a JSON config file and a dream._

  `mcp` `nexus` `devops` `artifact-management`
  </details>

- **[Spaceship MCP](https://github.com/bartwaardenburg/spaceship-mcp)** `⭐ 7` `updated ≤90d` An unofficial MCP server that lets AI clients manage Spaceship domains, DNS records, contacts, and marketplace listings via natural language. <details><summary>More about</summary>

  It lets developers configure DNS and domains through their AI coding assistant instead of context-switching to a web dashboard during development.

  _We have successfully abstracted domain management into a chat window, because the true bottleneck in modern development was having to look at the Spaceship UI._

  `dns` `domain-management` `mcp` `typescript`
  </details>

- **[web3-jobs-mcp](https://github.com/kukapay/web3-jobs-mcp)** `⭐ 7` `updated ≤1y` An MCP server that provides AI agents with real-time access to curated Web3 job listings from web3.career for intelligent job discovery. <details><summary>More about</summary>

  It allows developers to query and filter Web3 job opportunities directly through AI agent interfaces like Claude Desktop instead of manually browsing job boards.

  _Your AI agent can now help you find your next blockchain job while you're supposed to be shipping code, completing the unification of distraction and productivity in a single chat window._

  `mcp` `web3` `jobs` `agent-tooling`
  </details>

- **[webex-messaging-mcp-server](https://github.com/kashyap-ai-ml-solutions/webex-messaging-mcp-server)** `⭐ 7` `updated ≤90d` A Model Context Protocol server that exposes 52 Cisco Webex messaging tools—covering messages, rooms, teams, people, webhooks, and enterprise features—to AI assistants via STDIO or HTTP transports. <details><summary>More about</summary>

  Developers integrating AI assistants into Webex-heavy workflows can give their agents full programmatic control over messaging, rooms, and teams without writing custom API wrappers.

  _We have finally achieved the platonic ideal of modern engineering: an AI agent that can send Webex messages about why the build is broken while you are already reading the Webex message about why the build is broken._

  `mcp` `webex` `messaging` `typescript` `enterprise`
  </details>

- **[xcode-studio-mcp](https://github.com/kevinswint/xcode-studio-mcp)** `⭐ 7` `updated ≤90d` An MCP server built in Swift that lets AI agents build, run, and interact with iOS Simulator apps from Claude Code, Cursor, or other MCP clients. <details><summary>More about</summary>

  It closes the loop for AI-assisted iOS development by combining Xcode build tooling and simulator UI interaction into a single server that agents can actually drive.

  _We have now successfully automated the entire iOS development lifecycle, leaving us with plenty of free time to argue about whether tap coordinates should be absolute or relative._

  `mcp` `ios` `xcode` `simulator` `swift`
  </details>

- **[adls-mcp-server](https://github.com/erikhoward/adls-mcp-server)** `⭐ 6` `updated ≤1y` A Model Context Protocol server that provides a standardized interface for interacting with Azure Data Lake Storage Gen2, enabling file and directory operations via MCP tools. <details><summary>More about</summary>

  It allows developers to connect Azure data lake storage directly to MCP-compatible clients like Claude Desktop, enabling natural language file management without custom integrations.

  _Yet another specialized MCP server appears, proving that we are steadily building a distributed filesystem held together by vibes and JSON configs._

  `mcp` `azure` `data-lake` `storage` `python`
  </details>

- **[agent-memory](https://github.com/g1itchbot8888-del/agent-memory)** `⭐ 6` `updated ≤90d` A local-first memory system for autonomous agents that uses a three-layer architecture (identity, active, archive) with SQLite and local embeddings to manage context across sessions. <details><summary>More about</summary>

  It provides a token-efficient way for coding agents and AI tools to maintain state and recall decisions without relying on cloud APIs or enterprise memory servers.

  _We have now reached the point where the agent is building its own therapy journal because it can't remember if it already fixed the bug or just hallucinated fixing it._

  `memory` `mcp` `local-first` `agent-infrastructure`
  </details>

- **[anycrawl-mcp-server](https://github.com/any4ai/anycrawl-mcp-server)** `⭐ 6` `updated ≤90d` An MCP server that exposes web scraping, crawling, and search engine result parsing capabilities to LLM clients like Cursor and Claude. <details><summary>More about</summary>

  It gives coding agents the ability to fetch live web content and search results directly into their context, reducing the need to copy-paste documentation or API docs manually.

  _We have successfully abstracted the act of reading the documentation into a server that scrapes the documentation, so the agent can hallucinate about the documentation it just scraped._

  `api` `context-engineering` `cursor` `llm-data` `mcp` `web-scraping`
  </details>

- **[calculator-server](https://github.com/avisangle/calculator-server)** `⭐ 6` `updated ≤1y` A Go-based MCP server that exposes 13 mathematical tools for calculations, statistics, unit conversion, and financial modeling to MCP-compatible AI clients. <details><summary>More about</summary>

  It allows coding agents and LLM workflows to offload precise math, statistical analysis, and financial calculations to a dedicated, high-precision local server rather than relying on the model's own arithmetic.

  _We have reached the point where we need to install a dedicated server so the AI can calculate a tip without hallucinating the result._

  `mcp` `go` `math` `local-ai` `server`
  </details>

- **[chainlink-feeds-mcp](https://github.com/kukapay/chainlink-feeds-mcp)** `⭐ 6` `updated ≤1y` An MCP server that provides real-time access to Chainlink's decentralized on-chain price feeds across 9 blockchain networks for integration into AI agents and autonomous systems. <details><summary>More about</summary>

  It allows AI agents and developer tools to query reliable, decentralized price data directly via the Model Context Protocol, removing the need to manually wire RPC calls and parse on-chain feeds.

  _We have successfully abstracted reading a smart contract into an MCP tool, so your agent can now panic about token prices with the same low latency as a human day-trader._

  `mcp` `chainlink` `web3` `price-feeds` `blockchain`
  </details>

- **[crypto-whitepapers-mcp](https://github.com/kukapay/crypto-whitepapers-mcp)** `⭐ 6` `updated >1y` An MCP server that builds a queryable knowledge base of cryptocurrency whitepapers by searching, downloading, and indexing PDFs for AI agents. <details><summary>More about</summary>

  Developers building crypto-focused AI agents can plug this into Claude Desktop to ground model queries in specific whitepaper content without manual PDF parsing.

  _Because nothing says 'understanding blockchain' like asking a language model to hallucinate less by feeding it the same PDFs that launched a thousand rug pulls._

  `mcp` `crypto` `knowledge-base` `whitepapers` `claude`
  </details>

- **[cv-mcp-server](https://github.com/phononx/cv-mcp-server)** `⭐ 6` `updated ≤30d` An MCP server that exposes Carbon Voice's API for voice messaging, conversations, user operations, workspace management, and AI actions to AI assistants like Cursor and Claude Desktop. <details><summary>More about</summary>

  Developers building voice-integrated workflows can let their AI assistant directly manage Carbon Voice resources without leaving the IDE.

  _We have reached the point where your AI assistant now needs its own AI assistant to handle the voice messages your AI assistant dictated._

  `mcp` `voice` `api-integration` `cursor` `claude`
  </details>

- **[deploy-mcp](https://github.com/alexpota/deploy-mcp)** `⭐ 6` `updated ≤30d` An MCP server that connects AI assistants to Vercel, Netlify, and Cloudflare Pages to check deployment status, logs, and history directly in chat. <details><summary>More about</summary>

  It lets developers track deployments across multiple platforms without leaving their AI assistant or switching to hosting dashboards.

  _We have successfully abstracted the act of staring at a deployment progress bar into a natural language conversation with a bot._

  `mcp` `deployment` `ci-cd` `developer-tools`
  </details>

- **[FrankfurterMCP](https://github.com/anirbanbasu/frankfurtermcp)** `⭐ 6` `updated ≤30d` A Model Context Protocol server that exposes the Frankfurter currency exchange rate API as tools for language model agents. <details><summary>More about</summary>

  It allows AI agents to retrieve live and historical currency data directly via MCP without requiring manual API integration or rate-limiting workarounds.

  _Another day, another MCP server, because apparently wrapping a simple REST API in a protocol is now the pinnacle of developer infrastructure._

  `currency` `fastmcp` `finance` `mcp`
  </details>

- **[gibs-mcp](https://github.com/gibbrdev/gibs-mcp)** `⭐ 6` `updated ≤90d` An MCP server that connects AI development environments to a regulatory compliance knowledge base covering the EU AI Act, GDPR, and DORA with article-level citations. <details><summary>More about</summary>

  It lets developers building AI products query complex EU regulations directly from their AI assistant instead of manually parsing hundreds of legal articles.

  _Now your AI agent can confidently hallucinate that your facial recognition startup is fully DORA-compliant while you still can't figure out where to store the API keys._

  `compliance` `eu-ai-act` `legal` `mcp` `regulations` `regulatory`
  </details>

- **[johnneerdael/netskope-mcp](https://github.com/johnneerdael/ns-private-access-mcp)** `⭐ 6` `updated ≤1y` An MCP server providing 84 tools for managing Netskope Private Access infrastructure, such as publishers, apps, and policies, via AI clients. <details><summary>More about</summary>

  It allows developers and DevOps engineers to automate complex Netskope security workflows, like provisioning new offices or handling incidents, through natural language prompts.

  _We have finally invented an AI that can configure VPNs and firewall rules, ensuring our cloud infrastructure can now be misconfigured conversationally._

  `automation` `cloud-security` `infrastructure` `mcp` `netskope`
  </details>

- **[lore](https://github.com/hyunjae-labs/lore)** `⭐ 6` `updated ≤30d` A local MCP server that indexes and semantically searches across Claude Code and OpenAI Codex CLI conversation histories using hybrid vector and keyword search. <details><summary>More about</summary>

  It lets developers retrieve forgotten architecture decisions, debugging sessions, and design discussions from months of AI coding history without relying on cloud APIs.

  _We have finally built a search engine for the thousands of unread AI conversations we prompted ourselves into, because even our own context now requires context retrieval._

  `mcp` `semantic-search` `local-first` `claude-code` `memory`
  </details>

- **[mcp-nodejs-server](https://github.com/gentoro-gt/mcp-nodejs-server)** `⭐ 6` `updated >1y` A Node.js MCP server that acts as an integration layer between MCP clients and Gentoro's bridge services, allowing AI agents like Claude to access tools defined in Gentoro. <details><summary>More about</summary>

  It lets developers expose Gentoro-managed tools and data sources to MCP-compatible clients without building custom integrations from scratch.

  _Yet another MCP server in a sea of 6-star repos, proving that the protocol's real killer feature is turning every SaaS wrapper into a discoverable standard._

  `mcp` `nodejs` `integration` `gentoro`
  </details>

- **[mcp-server-iaptic](https://github.com/iaptic/mcp-server-iaptic)** `⭐ 6` `updated ≤30d` An MCP server that exposes the Iaptic API, allowing AI assistants like Claude to query customer data, purchases, transactions, and statistics directly. <details><summary>More about</summary>

  It lets developers hook their in-app purchase management platform into their AI workflow, enabling natural language queries over financial data without building a custom integration.

  _Yet another niche MCP server proving that if a REST API exists, someone will inevitably wrap it in a protocol so an LLM can ask about yesterday's Stripe revenue._

  `mcp` `iaptic` `api-wrapper` `nodejs`
  </details>

- **[mcp-telegram](https://github.com/mcp-telegram/mcp-telegram)** `⭐ 6` `updated ≤30d` An MCP server that acts as a Telegram userbot, allowing AI assistants to read, send, and manage messages, media, and account settings via the MTProto protocol. <details><summary>More about</summary>

  It enables developers to wire Telegram directly into their AI workflows, letting assistants query chats, summarize threads, and manage notifications without leaving the IDE or agent loop.

  _We have finally achieved the singularity: your AI assistant now has full read-receipt anxiety and can boost Telegram channels on your behalf while you debug a CSS margin._

  `integration` `mcp` `mtproto` `telegram` `typescript` `userbot`
  </details>

- **[mcp-web-snapshot](https://github.com/gustavo-meilus/mcp-web-snapshot)** `⭐ 6` `updated ≤1y` An MCP server that uses Playwright to capture structured website snapshots, network activity, and console logs for consumption by LLM tools. <details><summary>More about</summary>

  It allows coding agents in editors like VS Code and Cursor to see and analyze live web pages, including network traffic and console output, without leaving the development environment.

  _We have successfully abstracted the browser into a JSON tree so your agent can hallucinate about the DOM instead of you having to open the dev tools yourself._

  `mcp` `playwright` `web-scraping` `context-engineering`
  </details>

- **[repocrunch](https://github.com/kimwwk/repocrunch)** `⭐ 6` `updated ≤90d` A deterministic GitHub repository analyzer that produces structured JSON covering tech stack, dependencies, architecture, health, and security signals, exposed as a Python library, CLI, REST API, and MCP server. <details><summary>More about</summary>

  Developers and AI agents can programmatically ingest consistent repo metadata to power health checks, dependency audits, and context-aware coding workflows without relying on probabilistic LLM outputs.

  _We have finally built a tool that perfectly summarizes a repository’s health without hallucinating, which frees up even more of our day to argue about whether we should feed its output into an LLM anyway._

  `mcp` `repo-analysis` `cli` `developer-tools` `deterministic`
  </details>

- **[sheetsdata-mcp](https://github.com/octoco-ltd/sheetsdata-mcp)** `⭐ 6` `updated ≤30d` An MCP server that provides AI agents with structured, queryable access to electronic component datasheets, pinouts, and specifications without requiring PDF uploads. <details><summary>More about</summary>

  Hardware engineers can now offload datasheet parsing and component validation to agents, streamlining part selection, BOM review, and firmware integration workflows.

  _We have successfully automated the ritual of opening a 400-page PDF to find a pinout that was on page 3 the whole time._

  `mcp` `hardware` `datasheets` `embedded` `agent-tools`
  </details>

- **[AceDataCloud/MCPNanoBanana](https://github.com/acedatacloud/nanobananamcp)** `⭐ 5` `updated ≤30d` An MCP server that exposes Google's Nano Banana image generation and editing capabilities via the AceDataCloud API to MCP-compatible developer tools like Claude and VS Code. <details><summary>More about</summary>

  It lets developers generate, edit, and composite images directly from their IDE or AI assistant without switching contexts to external design tools or manual API calls.

  _We have successfully integrated generative AI image editing into the coding workflow, ensuring that procrastination can now be done entirely in VS Code._

  `ai-image` `ai-integration` `developer-tools` `image-generation` `mcp`
  </details>

- **[aiwen-mcp-server-geoip](https://github.com/ipfred/aiwen-mcp-server-geoip)** `⭐ 5` `updated ≤1y` An MCP server that exposes Aiwen's IP geolocation, whois, risk profiling, and traffic analysis APIs for use in AI coding assistants like Cursor and VS Code. <details><summary>More about</summary>

  Developers can pipe IP intelligence—location, risk, and ISP data—directly into AI agent workflows without wiring API calls by hand.

  _We have finally achieved the future: your coding agent can now tell you the street address of a botnet attacker while still failing to center a div._

  `mcp` `ip-geolocation` `networking` `cursor` `vscode`
  </details>

- **[alcove](https://github.com/epicsagas/alcove)** `⭐ 5` `updated ≤30d` An MCP server that provides AI coding agents with on-demand access to private project documentation via BM25 search, avoiding context window bloat. <details><summary>More about</summary>

  It separates transient agent behavior from persistent project knowledge, allowing developers to maintain a single, standardized documentation layer for multiple AI agents across different projects.

  _We have successfully built infrastructure to manage the infrastructure required to tell the infrastructure what the infrastructure is supposed to be building._

  `mcp` `context-engineering` `docs` `coding-agent-tooling`
  </details>

- **[allyson-mcp](https://github.com/isaiahbjork/allyson-mcp)** `⭐ 5` `updated ≤1y` An MCP server that connects to the Allyson API to generate animated SVG components from static files using AI, designed for integration with AI assistants like Claude Desktop and Cursor. <details><summary>More about</summary>

  It allows developers to delegate UI animation tasks to an AI assistant via the MCP protocol, turning static assets into usable code components directly within their workflow.

  _We have successfully abstracted the ancient art of bouncing balls in CSS into a five-star API call, ensuring no developer ever has to pretend to understand keyframe timing again._

  `animation` `context-protocol` `cursor` `mcp` `protocol` `server` `svg` `ui`
  </details>

- **[apple-notes-mcp](https://github.com/ailenshen/apple-notes-mcp)** `⭐ 5` `updated ≤30d` An MCP server that lets AI clients read, search, write, and update Apple Notes on macOS with native formatting support via Markdown import. <details><summary>More about</summary>

  It turns Apple Notes into a structured, programmable knowledge base that AI assistants can directly query and update from the IDE or terminal.

  _We have finally bridged the gap between large language models and Apple Notes, meaning your AI can now argue with your grocery list in real time._

  `mcp` `apple-notes` `macos` `knowledge-management` `developer-tools`
  </details>

- **[clojars-mcp-server](https://github.com/bigsy/clojars-mcp-server)** `⭐ 5` `updated ≤1y` A Model Context Protocol server that exposes tools for fetching dependency versions and history from Clojars within AI assistants like Claude Desktop and Cline. <details><summary>More about</summary>

  It allows AI coding agents to resolve library versions and check dependency history directly against Clojars without leaving the editor context.

  _We have reached the point where our AI assistants need their own dedicated microservers just to figure out which version of a library to copy-paste from a README._

  `mcp` `clojure` `dependencies` `tooling`
  </details>

- **[dorukardahan/twitterapi-docs-mcp](https://github.com/dorukardahan/twitterapi-io-mcp)** `⭐ 5` `updated ≤30d` An MCP server that bundles offline TwitterAPI.io documentation—including endpoints, guides, and blog posts—so AI assistants like Claude and Cursor can reference API details without making live calls. <details><summary>More about</summary>

  Developers using AI assistants to integrate TwitterAPI.io can get accurate, structured endpoint and parameter details locally without needing an API key or risking outdated live documentation.

  _We have now reached the point where our AI assistants need their own offline documentation snapshots so they stop hallucinating the Twitter API v1 endpoints that died years ago._

  `context-engineering` `mcp` `node` `offline-docs` `twitter-api`
  </details>

- **[editorconfig_mcp](https://github.com/neilberkman/editorconfig_mcp)** `⭐ 5` `updated ≤1y` A Model Context Protocol server that formats files using project .editorconfig rules to prevent AI coding agents from generating minor formatting errors. <details><summary>More about</summary>

  It acts as a proactive formatting gatekeeper for AI-assisted development, letting agents produce lint-clean code without wasting cycles on trivial whitespace fixes.

  _We have reached the point where we need dedicated middleware to stop our AI assistants from failing at the same trailing-whitespace problems linters solved in 2010._

  `mcp` `formatting` `editorconfig` `linting`
  </details>

- **[intercept-mcp](https://github.com/bighippoman/intercept-mcp)** `⭐ 5` `updated ≤30d` An MCP server that fetches web content as clean markdown using a multi-tier fallback chain, handling sites like Twitter, YouTube, arXiv, and GitHub without requiring API keys. <details><summary>More about</summary>

  It gives coding agents and MCP-compatible IDEs a reliable way to read the web by falling back through 14+ strategies when standard fetches fail.

  _We have officially reached the point where our agents need their own multi-tier resilience pipelines just to read a static HTML page without hitting a 403._

  `mcp` `web-scraping` `markdown` `context-fetching`
  </details>

- **[j0hanz/filesystem-context-mcp-server](https://github.com/j0hanz/filesystem-mcp)** `⭐ 5` `updated ≤30d` A local filesystem MCP server that provides AI assistants and agents with controlled, structured access to read, write, search, diff, and patch files within explicitly allowed directories. <details><summary>More about</summary>

  It gives coding agents and AI IDEs a secure, standardized way to interact with the local filesystem without opening the door to unbounded path traversal or uncontrolled file manipulation.

  _Another MCP server enters the arena, promising that this time your agent will only destroy the files you explicitly allowed it to destroy._

  `filesystem` `local-ai` `mcp` `security` `tools` `typescript`
  </details>

- **[jitapi](https://github.com/nk3750/jitapi)** `⭐ 5` `updated ≤90d` An MCP server that registers OpenAPI specifications and uses semantic search with dependency graphs to let Claude discover and chain relevant API endpoints at runtime. <details><summary>More about</summary>

  It allows developers to point an LLM at any API via its OpenAPI spec without writing custom tooling or burning tokens by loading entire specification files into context.

  _We have finally invented just-in-time API discovery so Claude can suffer through 1,107 GitHub endpoints instead of us, provided we first convince it that Inception was filmed entirely in one city._

  `mcp` `api` `openapi` `semantic-search` `claude`
  </details>

- **[liquidiction-mcp](https://github.com/liquidiction/liquidiction-mcp)** `⭐ 5` `updated ≤30d` An MCP server that exposes Hyperliquid HIP-4 prediction market data, including live odds, orderbooks, candles, and user positions, to MCP-compatible AI agents. <details><summary>More about</summary>

  Developers building AI agents that need real-time financial market data can wire in prediction market feeds without writing custom API integrations.

  _Finally, your AI agent can day-trade prediction markets and ruin your portfolio with zero human latency._

  `mcp` `prediction-markets` `hyperliquid` `finance` `agent-tooling`
  </details>

- **[mailchimp-mcp-server](https://github.com/damientilman/mailchimp-mcp-server)** `⭐ 5` `updated ≤30d` A Model Context Protocol server that exposes 53+ Mailchimp Marketing API tools to Claude, enabling read and write control over campaigns, audiences, automations, and reports from the IDE or desktop. <details><summary>More about</summary>

  Developers using Claude can manage email marketing workflows directly through prompts instead of wiring Mailchimp API calls by hand.

  _We have successfully abstracted email marketing into a chat window, because sending a campaign without explaining yourself to a language model was clearly the bottleneck._

  `mcp` `mailchimp` `claude` `python`
  </details>

- **[mcp-analytics](https://github.com/embeddedlayers/mcp-analytics)** `⭐ 5` `updated ≤30d` MCP Analytics is an MCP server that connects data sources like Shopify, Stripe, and CSV files to AI clients, using a pipeline of specialist agents to generate custom, interactive analysis modules and reports. <details><summary>More about</summary>

  It allows developers to integrate ad-hoc data analytics and forecasting directly into their MCP-compatible workflow, enabling them to query proprietary data and rerun reports from tools like Claude or Cursor.

  _We have successfully abstracted data science into a black box of 'specialist agents' that ship back citable reports, ensuring you can now ignore the statistics just as thoroughly as the code._

  `mcp` `analytics` `data-science` `agents` `shopify`
  </details>

- **[mcp-zuul](https://github.com/imatza-rh/mcp-zuul)** `⭐ 5` `updated ≤30d` An MCP server that provides read-only and write access to Zuul CI builds, jobs, logs, and pipeline status so developers can debug failures through LLM conversations instead of clicking through CI web UIs. <details><summary>More about</summary>

  It lets developers ask natural-language questions about CI failures and get structured root-cause answers with log context, flaky-job detection, and live pipeline awareness without manually parsing Zuul logs.

  _We have successfully reached the point where debugging a failed gate job requires an MCP server, thirty-seven tools, and a polite conversation with Claude instead of the traditional method of screaming at a 6,000-line log file._

  `mcp` `ci-cd` `zuul` `debugging` `developer-tools`
  </details>

- **[memory-mcp](https://github.com/michael-denyer/memory-mcp)** `⭐ 5` `updated ≤180d` An MCP server that provides persistent, project-aware memory for AI assistants using a two-tier hot cache and semantic cold storage. <details><summary>More about</summary>

  It eliminates the need to re-explain project context in every new session by automatically promoting frequent knowledge into the AI's immediate context.

  _We have officially reached the point of building external brain implants for our chatbots so they don't forget why we are here._

  `mcp` `memory` `context` `claude-code`
  </details>

- **[mnemo-mcp](https://github.com/n24q02m/mnemo-mcp)** `⭐ 5` `updated ≤30d` An open-source MCP server that provides AI assistants with persistent memory through hybrid search, knowledge graphs, and multi-machine sync via rclone. <details><summary>More about</summary>

  It gives local coding agents like Claude Code and Cursor a structured way to remember decisions, preferences, and context across sessions without external API dependencies.

  _We have finally solved the problem of AI assistants forgetting what we told them five minutes ago, provided we are willing to self-host a SQLite database with knowledge graphs and configure rclone to sync our memories to Google Drive._

  `mcp` `memory` `hybrid-search` `local-ai` `knowledge-graph`
  </details>

- **[openapi-to-mcp](https://github.com/bbonnin/openapi-to-mcp)** `⭐ 5` `updated ≤180d` A Java-based MCP server that converts OpenAPI or Swagger specifications into usable MCP tools, allowing AI agents to interact with REST APIs without manual tool coding. <details><summary>More about</summary>

  Developers can instantly expose any OpenAPI-backed service to LLMs by running a single server, removing the need to manually write tool wrappers for every API endpoint.

  _We have successfully automated the creation of glue code so that our agents can talk to APIs that were already documented, completing the circle of 'work no one wanted to do' with software that writes software to call software._

  `mcp` `openapi` `swagger` `java` `api-integration`
  </details>

- **[papersflow-mcp](https://github.com/papersflow-ai/papersflow-mcp)** `⭐ 5` `updated ≤90d` A production hosted MCP server that provides literature search, citation verification, and related-paper discovery tools for AI coding assistants like Claude Code, Codex, and Gemini CLI. <details><summary>More about</summary>

  It lets developers query academic papers and verify citations directly from their AI assistant or CLI without breaking flow to search the web.

  _Now your coding agent can procrastinate on Stack Overflow and arXiv simultaneously, doubling the number of open tabs it claims to replace._

  `mcp` `literature-search` `research` `cli` `academic`
  </details>

- **[polymarket-agent-mcp](https://github.com/demwick/polymarket-agent-mcp)** `⭐ 5` `updated ≤30d` An MCP server providing 48 tools for trading, analyzing, and automating Polymarket prediction markets, designed to be used with Claude Code, Cursor, and other MCP-compatible clients. <details><summary>More about</summary>

  It allows developers to integrate prediction market data, trading execution, and portfolio management directly into their AI-assisted coding workflows via a standardized protocol.

  _We have successfully abstracted gambling into a series of tool calls, so now your AI can confidently lose your money while you debug a TypeScript config file._

  `mcp` `polymarket` `trading` `typescript` `agent-tools`
  </details>

- **[promptarchitect-mcp](https://github.com/merabylabs/promptarchitect-mcp)** `⭐ 5` `updated ≤180d` An MCP server that refines, analyzes, and generates prompts using workspace context like tech stack, dependencies, and project structure, integrating with Claude Desktop, Cursor, VS Code, and other MCP-compatible IDEs. <details><summary>More about</summary>

  It brings project-aware prompt engineering directly into the developer's IDE workflow, helping craft context-rich prompts without leaving the editor.

  _We have successfully reached the point where we need AI assistance to rewrite the instructions we are about to give to other AI tools._

  `mcp` `prompt-engineering` `context-aware` `ide-integration`
  </details>

- **[pumpswap-mcp](https://github.com/kukapay/pumpswap-mcp)** `⭐ 5` `updated ≤1y` An MCP server that lets AI agents execute token swaps and query pools on PumpSwap via natural language prompts. <details><summary>More about</summary>

  Developers building crypto-native AI agents can wire on-chain trading into agent workflows without writing custom Solana RPC glue code.

  _We have finally achieved the Platonic ideal of 2025: an AI agent that can lose your SOL on PumpSwap while you watch in disbelief._

  `mcp` `solana` `defi` `agent-tooling`
  </details>

- **[repo-graph](https://github.com/james-chahwan/repo-graph)** `⭐ 5` `updated ≤30d` An MCP server that builds a structural graph of a codebase and exposes tools for LLMs to navigate entities, relationships, and flows without reading entire repos. <details><summary>More about</summary>

  It dramatically reduces token usage and time to fix bugs by letting coding assistants query a lightweight code map instead of brute-forcing their way through file grepping.

  _We have now officially reached the point where our AI assistants need their own assistants just to figure out where the code lives._

  `mcp` `context-engineering` `codebase-navigation` `graph-memory`
  </details>

- **[rest_api_mcp](https://github.com/muhammed-abdelghany/rest_api_mcp)** `⭐ 5` `updated ≤30d` A Model Context Protocol server that connects AI agents to authenticated REST APIs by handling auto-login, 2FA, and Swagger spec discovery automatically. <details><summary>More about</summary>

  It allows coding agents and MCP-compatible tools to securely call protected API endpoints without the developer needing to manually script authentication flows or token handling.

  _We have successfully abstracted the only part of API integration that taught us anything about how the system actually works._

  `mcp` `api` `authentication` `rest` `swagger`
  </details>

- **[scan-mcp](https://github.com/jacksenechal/scan-mcp)** `⭐ 5` `updated ≤180d` A minimal MCP server that exposes local Linux SANE scanners to AI agents or MCP clients for device discovery, scan job control, and multipage document assembly. <details><summary>More about</summary>

  It lets AI coding agents and desktop assistants directly trigger physical document scans and retrieve structured outputs without developers wiring SANE utilities by hand.

  _We have finally achieved the future where your AI agent can digitize your receipts, yet it still can’t figure out why your build is failing._

  `mcp` `scanner` `sane` `hardware-integration` `local-first`
  </details>

- **[selvedge](https://github.com/masondelan/selvedge)** `⭐ 5` `updated ≤30d` A local MCP server that captures AI agent reasoning live as code changes are made, storing the 'why' behind modifications in a local SQLite database for later auditing. <details><summary>More about</summary>

  It solves the problem of context evaporation in AI-generated codebases by providing a 'git blame' for agent reasoning, allowing developers to trace decisions back to the specific prompt or intent.

  _We have successfully built a tool to remember why the AI did the thing, effectively outsourcing our code provenance to a SQLite file because we can no longer be bothered to write commit messages that survive contact with a bot._

  `mcp` `memory` `agent-trace` `git-blame` `sqlite`
  </details>

- **[starknet-mcp-server](https://github.com/mcpdotdirect/starknet-mcp-server)** `⭐ 5` `updated ≤180d` An MCP server that exposes Starknet blockchain interactions—such as querying state, managing wallets, and executing smart contracts—as tools for LLM agents. <details><summary>More about</summary>

  It allows AI agents to reliably perform Starknet operations via natural language, bridging blockchain development workflows with MCP-compatible assistants.

  _We’ve successfully built an MCP server so your AI can lose funds on Starknet with the same effortless confidence it already loses context in 40k-token windows._

  `mcp` `blockchain` `starknet` `agent-tools`
  </details>

- **[sui-trader-mcp](https://github.com/kukapay/sui-trader-mcp)** `⭐ 5` `updated ≤1y` An MCP server that enables AI agents to execute token swaps on the Sui blockchain using the Cetus Aggregator. <details><summary>More about</summary>

  It allows developers to integrate autonomous DeFi trading capabilities directly into MCP-compatible AI workflows or agents.

  _We have finally reached the point where we are building infrastructure to let autonomous agents incur transaction fees on Layer 1 blockchains while we debug the JSON configs._

  `mcp` `sui` `defi` `trading`
  </details>

- **[system-prompts-mcp-server](https://github.com/jamesanz/system-prompts-mcp-server)** `⭐ 5` `updated ≤180d` An MCP server that exposes a library of system prompts, summaries, and tool definitions from popular AI tools like Cursor, Claude, and Devin as callable tools in MCP-compatible environments. <details><summary>More about</summary>

  It lets developers inspect, reference, and reuse the exact system prompts that power today's leading AI coding tools directly inside their own workflows.

  _Because nothing says 'I have my own workflow' quite like installing a server to steal personality traits from an AI tool you're already paying for._

  `mcp` `system-prompts` `prompt-engineering` `context-engineering`
  </details>

- **[ui-annotator-mcp](https://github.com/mcpware/ui-annotator-mcp)** `⭐ 5` `updated ≤90d` An MCP server that acts as a reverse proxy to inject hover annotations onto any web page, giving AI assistants human-readable names for UI elements. <details><summary>More about</summary>

  It bridges the communication gap between developers and coding agents by providing a shared visual vocabulary for UI elements, turning vague 'that button' requests into precise, editable instructions.

  _We have successfully built a proxy server just so our AI can finally understand which div we are pointing at, proving that the modern web stack is now too complex for the bots we built to automate it._

  `mcp` `ui-annotation` `browser-automation` `devtools` `claude`
  </details>

- **[4everland-hosting-mcp](https://github.com/4everland/4everland-hosting-mcp)** `⭐ 4` `updated ≤1y` A Model Context Protocol server that deploys AI-generated code to decentralized storage networks including IPFS, Arweave, and Greenfield, returning a live accessible domain. <details><summary>More about</summary>

  It lets coding agents and AI workflows push generated sites or apps to decentralized storage and get a live URL without leaving the editor or CLI.

  _We have successfully automated the part of web development where you brag about your side project to friends by sending them a link, now running on immutable decentralized storage you do not control._

  `mcp` `deployment` `ipfs` `decentralized-storage`
  </details>

- **[atest-mcp-server](https://github.com/linuxsuren/atest-mcp-server)** `⭐ 4` `updated ≤180d` An MCP server that exposes the API testing capabilities of atest to AI tools and agents via the Model Context Protocol. <details><summary>More about</summary>

  It allows coding agents and AI IDEs to discover, run, and validate API tests directly within their workflow without leaving the development environment.

  _We have now successfully abstracted the act of testing an API into a protocol that allows an AI to ask another piece of software to test the API for it, just in case the developer was feeling too close to the actual endpoints._

  `mcp` `api-testing` `testing` `developer-tools`
  </details>

- **[blocknative-mcp](https://github.com/kukapay/blocknative-mcp)** `⭐ 4` `updated >1y` An MCP server that provides real-time gas price predictions and transaction cost estimations across multiple blockchains via the Blocknative API. <details><summary>More about</summary>

  It allows AI agents and developer tools to query live blockchain gas data and estimate transaction costs directly within their workflow.

  _We have successfully abstracted checking gas prices into a protocol that requires a server, an agent, and a neural network, just in case we forget how to read a number from a block explorer._

  `mcp` `blockchain` `web3` `gas-prices` `api`
  </details>

- **[bridge-rates-mcp](https://github.com/kukapay/bridge-rates-mcp)** `⭐ 4` `updated >1y` An MCP server that provides real-time cross-chain bridge rates and optimal transfer routes for onchain AI agents by integrating with LI.FI. <details><summary>More about</summary>

  It allows AI agents to fetch live bridging data and evaluate transfer routes programmatically, removing the need to manually check rates across multiple bridges.

  _Your AI agent can now autonomously waste gas on cross-chain transfers at machine speed, completely unassisted by human hesitation._

  `mcp` `crypto` `defi` `bridge` `li.fi`
  </details>

- **[clj-kondo-MCP](https://github.com/bigsy/clj-kondo-mcp)** `⭐ 4` `updated >1y` An MCP server that wraps clj-kondo to provide linting capabilities for Clojure, ClojureScript, and EDN files within MCP-compatible AI coding assistants. <details><summary>More about</summary>

  It allows AI agents to catch static analysis errors in Clojure projects during generation, preventing the common issue of an assistant writing syntactically convincing but lint-failing code.

  _We have successfully abstracted the act of asking a robot to check if the robot's code will make the other robot grumpy._

  `clojure` `linting` `mcp` `static-analysis`
  </details>

- **[code-guardian](https://github.com/phuongrealmax/code-guardian)** `⭐ 4` `updated ≤180d` An MCP server that integrates with Claude Code to analyze repositories, detect code hotspots, and generate refactoring plans using over 113 tools. <details><summary>More about</summary>

  It transforms Claude Code into a specialized refactoring assistant that can scan large codebases, track technical debt, and manage optimization sessions across multiple conversations.

  _We have now reached the point where our AI assistants need their own memory systems, dashboards, and 113 tools just to remember that we wanted to fix that one nested if-statement from three months ago._

  `mcp` `refactoring` `claude-code` `technical-debt` `cli`
  </details>

- **[codebeamer-mcp](https://github.com/3knightcz/codebeamer-mcp)** `⭐ 4` `updated ≤30d` An MCP server that lets Claude and other MCP clients read and write projects, trackers, and items in a Codebeamer ALM instance using natural language. <details><summary>More about</summary>

  It connects AI coding assistants directly to ALM workflows, allowing developers to manage requirements, bugs, and traceability links without leaving their AI-powered IDE or CLI.

  _Finally, your AI agent can argue with your requirements management tool about traceability references in natural language, just in case your day wasn't fragmented enough._

  `mcp` `alm` `codebeamer` `integration`
  </details>

- **[cogmemai-mcp](https://github.com/hifriendbot/cogmemai-mcp)** `⭐ 4` `updated ≤30d` An MCP server that provides persistent, autonomous memory storage for AI coding assistants and other agents, capturing context across sessions and devices. <details><summary>More about</summary>

  It automates the capture of coding decisions and context so developers don't lose architectural rationale when switching editors or starting new sessions.

  _We've reached the point where our AI assistants need their own autonomous infrastructure to remember what we did two hours ago, because apparently the assistant is too busy coding to remember it did the coding._

  `mcp` `memory` `knowledge-graph` `context-engineering`
  </details>

- **[counsel-mcp](https://github.com/mercurialsolo/counsel-mcp)** `⭐ 4` `updated ≤180d` An MCP server that connects AI agents to the Counsel API for strategic reasoning and multi-perspective analysis within development environments. <details><summary>More about</summary>

  Developers can pipe structured debate and multi-perspective reasoning from Counsel directly into their MCP-compatible IDEs and agents.

  _We've successfully abstracted 'thinking about the problem' into a paid API call wrapped in an MCP server, just in case the local context window wasn't expensive enough._

  `mcp` `reasoning` `integration` `node`
  </details>

- **[crypto-pegmon-mcp](https://github.com/kukapay/crypto-pegmon-mcp)** `⭐ 4` `updated >1y` An MCP server that provides AI agents with tools to monitor stablecoin prices, calculate peg deviation, and generate stability reports across multiple blockchains. <details><summary>More about</summary>

  It gives AI agents structured, real-time crypto market data so they can proactively detect depegging risks without relying on the developer to manually check dashboards.

  _We have finally automated the vigilance required to notice that the digital casino chips are briefly worth slightly less than a dollar._

  `mcp` `crypto` `stablecoin` `fintech` `server`
  </details>

- **[dolar-mcp](https://github.com/dan1d/dolar-mcp)** `⭐ 4` `updated ≤90d` An MCP server that provides AI agents with real-time access to Argentine exchange rates, currency conversions, and spread calculations via DolarAPI. <details><summary>More about</summary>

  Developers building AI agents for LATAM financial workflows can plug in real-time peso/dollar context without writing their own API integration or managing keys.

  _We have successfully modularized global finance into a plugin for your chatbot, yet we still manually refresh three browser tabs to check if the blue dollar moved five cents._

  `mcp` `argentina` `finance` `exchange-rates` `latam`
  </details>

- **[finbud-data-mcp](https://github.com/glaksmono/finbud-data-mcp)** `⭐ 4` `updated ≤1y` An MCP server and TypeScript SDK that provides programmatic access to financial market data, including analyst estimates and other financial metrics via the Finbud Data API. <details><summary>More about</summary>

  It gives coding agents and MCP-compatible clients structured, real-time financial data without requiring developers to cobble together multiple fragmented market APIs.

  _Another MCP server enters the ring, because clearly what your agentic workflow needed was one more dependency before it could confidently hallucinate earnings estimates._

  `mcp` `financial-data` `typescript` `sdk` `api`
  </details>

- **[frihet-mcp](https://github.com/frihet-io/frihet-mcp)** `⭐ 4` `updated ≤30d` An MCP server that exposes 66 tools for the Frihet ERP platform, enabling AI assistants to manage invoicing, expenses, clients, and tax compliance directly from the IDE. <details><summary>More about</summary>

  It allows developers to automate business management workflows like creating invoices and tracking expenses using natural language within their existing AI coding environments.

  _You can now ask your coding agent to bill a client for 40 hours of consulting while it simultaneously forgets the semicolon it wrote two minutes ago._

  `mcp` `erp` `fintech` `automation` `claude`
  </details>

- **[fulcra-context-mcp](https://github.com/fulcradynamics/fulcra-context-mcp)** `⭐ 4` `updated ≤90d` An MCP server that provides tools and resources to access Fulcra Context data via the Fulcra API, supporting both local stdio and remote Streamable HTTP transports. <details><summary>More about</summary>

  It allows developers to integrate Fulcra's context management directly into MCP-compatible clients like Claude for Desktop, bridging external context stores with local AI workflows.

  _We have successfully abstracted the abstraction, meaning you can now pipe your context into a protocol that talks to a server that talks to an API, because apparently opening a browser was too straightforward._

  `mcp` `context` `oauth` `python`
  </details>

- **[Gluestack UI MCP Server](https://github.com/gauravsaini/gluestack-ui-mcp-server)** `⭐ 4` `updated ≤1y` An MCP server that provides AI assistants with structured access to Gluestack UI components, source code, and React Native-specific examples to accelerate mobile app development. <details><summary>More about</summary>

  It allows coding agents to generate accurate, platform-aware React Native screens and components using Gluestack UI without hallucinating props or missing platform-specific patterns.

  _We have now successfully abstracted the job of reading component documentation into a protocol server, so your AI can ignore the docs just as confidently as you used to._

  `gluestack` `mcp` `react-native` `ui-components`
  </details>

- **[godot-forge](https://github.com/gregario/godot-forge)** `⭐ 4` `updated ≤30d` An MCP server that provides Godot 4–specific tools—including test running, API docs search, and GDScript analysis—to fix AI assistant hallucinations about deprecated Godot 3 APIs. <details><summary>More about</summary>

  It gives coding agents accurate Godot 4 context and structured diagnostics so they stop suggesting `yield` and `KinematicBody` like it's still 2021.

  _Another layer of middleware so your AI can pretend it knows a game engine, because apparently the model needs a plugin just to stop recommending GDScript from a decade ago._

  `mcp` `godot` `gdscript` `ide-extension` `game-dev`
  </details>

- **[gx-mcp-server](https://github.com/davidf9999/gx-mcp-server)** `⭐ 4` `updated ≤180d` A Python MCP server that exposes Great Expectations data quality tools so LLM agents can load datasets, define validation rules, and run checks programmatically. <details><summary>More about</summary>

  It lets agentic workflows perform real data validation without forcing developers to wire Great Expectations into agent code by hand.

  _We have successfully reached the point where our agents need their own data quality frameworks so they can doubt the datasets they hallucinated._

  `mcp` `data-quality` `great-expectations` `llm-agent` `python`
  </details>

- **[hebbian-mind-enterprise](https://github.com/for-sunny/hebbian-mind-enterprise)** `⭐ 4` `updated ≤90d` An MCP server that implements a Hebbian learning knowledge graph, allowing AI clients to store memories and automatically strengthen connections between co-activated concepts over time. <details><summary>More about</summary>

  It gives MCP-compatible developer tools like Claude Desktop a persistent, self-organizing memory layer that learns which concepts relate to each other based on actual usage rather than manual linking.

  _Finally, an associative memory graph that decays unused connections, proving that even your AI's long-term memory is subject to the same 'use it or lose it' anxiety as your own engineering skills._

  `mcp` `memory` `knowledge-graph` `hebbian-learning`
  </details>

- **[legends-mcp](https://github.com/aytuncyildizli/legends-mcp)** `⭐ 4` `updated ≤180d` An MCP server that lets developers chat with simulated personas of famous founders and investors inside Claude Code, operating without an API key. <details><summary>More about</summary>

  It provides a local MCP integration that augments the developer's assistant with domain-specific 'characters' for startup strategy and product advice directly in the coding environment.

  _We have reached the point where we are meticulously injecting simulated venture capitalists into our IDEs to roast our product designs, just in case the real ones weren't enough of a rejection trigger._

  `claude-code` `mcp` `personas` `simulation`
  </details>

- **[lhremote](https://github.com/alexey-pelykh/lhremote)** `⭐ 4` `updated ≤30d` A CLI and MCP server that lets AI assistants control LinkedHelper to automate LinkedIn outreach, campaign management, and profile engagement. <details><summary>More about</summary>

  Developers building AI-driven sales or recruiting workflows can expose 68 LinkedIn automation tools to Claude and other MCP clients without writing custom browser scripts.

  _We have finally achieved the singularity: an AI assistant that can politely endorse your skills and send connection requests while you debug why the MCP server has more stars than the campaign has replies._

  `mcp` `linkedin` `cli` `automation`
  </details>

- **[lnbits-mcp-server](https://github.com/lnbits/lnbits-mcp-server)** `⭐ 4` `updated ≤90d` An MCP server that connects AI assistants to LNbits Lightning wallet instances to manage balances, payments, and extensions via natural language. <details><summary>More about</summary>

  Developers building Bitcoin/Lightning integrations can now hand off wallet operations to their AI client instead of manually hitting REST endpoints or writing wrapper scripts.

  _Your AI assistant now has its own Lightning wallet, which is either the ultimate developer productivity hack or the fastest way to accidentally zap your testnet sats through a misinterpreted prompt._

  `mcp` `lightning` `bitcoin` `fintech` `tooling`
  </details>

- **[mcp](https://github.com/perspective-ai/mcp)** `⭐ 4` `updated ≤30d` An MCP server that connects Perspective AI's conversational form replacement platform to MCP-compatible clients like Claude and Cursor, allowing developers to design, analyze, and automate AI-driven conversation agents directly from their IDE or assistant. <details><summary>More about</summary>

  It lets developers manage lead qualification workflows, conversation analytics, and CRM automations as code-adjacent tasks without leaving their AI-assisted editing environment.

  _We have successfully abstracted away the trauma of filling out forms by introducing the trauma of configuring an MCP server to trick users into filling out forms via 'adaptive AI conversations'._

  `mcp` `conversational-ai` `automation` `perspective-ai`
  </details>

- **[mcp-agile-luminary](https://github.com/agileluminary/mcp-agile-luminary)** `⭐ 4` `updated ≤1y` An MCP server that connects AI clients like Cursor and Claude Desktop to the Agile Luminary project management API to fetch tasks, documentation, and past work. <details><summary>More about</summary>

  It allows developers to query their project management context and history directly from their AI coding assistant without switching contexts to a separate PM tool.

  _We have successfully bridged the gap between 'vibe coding' and 'agile ceremony compliance', ensuring your AI can now ask you for your stakeholder sign-off status._

  `agile` `ai-native` `claude` `cursor` `documentation` `enterprise` `mcp` `nodejs` `project-management` `saas` `sprint-planning`
  </details>

- **[mcp-eu-ai-act](https://github.com/ark-forge/mcp-eu-ai-act)** `⭐ 4` `updated ≤30d` An MCP server and CLI tool that scans codebases to detect EU AI Act and GDPR compliance violations, mapping findings to specific legal articles. <details><summary>More about</summary>

  It automates the tedious legal review of AI frameworks in code, generating risk reports and auditor-ready documentation packages ahead of the August 2026 enforcement deadline.

  _We now have CI/CD pipelines that fail because your random Forest import didn't come with a 40-page technical documentation markdown file._

  `mcp` `compliance` `legal` `cli` `eu-ai-act`
  </details>

- **[mcp-server](https://github.com/arcadia-finance/mcp-server)** `⭐ 4` `updated ≤30d` An MCP server that lets AI agents like Claude and Cursor read protocol data and build unsigned transactions for managing Arcadia Finance's concentrated liquidity, borrowing, and yield positions on Base, Optimism, and Unichain. <details><summary>More about</summary>

  Developers building DeFi automation or agentic workflows can plug this server into their MCP-compatible IDE or agent to interact with on-chain Arcadia positions without writing raw contract interaction code.

  _We have officially reached the point where your AI agent needs its own MCP server just to rebalance your simulated Uniswap liquidity while you stare at a context window wondering what you actually shipped today._

  `mcp` `defi` `web3` `agent-tooling`
  </details>

- **[meyhem](https://github.com/c5huracan/meyhem)** `⭐ 4` `updated ≤90d` An agent-native search and discovery layer that indexes 1,400+ MCP servers and provides outcome-ranked web search across multiple engines for AI agents. <details><summary>More about</summary>

  It gives developers and their agents a single endpoint to discover MCP servers and perform web searches without API keys, signups, or rate limits.

  _Another indispensable piece of infrastructure for agents that still can't decide whether they want to query a database or just endlessly index the tools that query databases._

  `mcp` `search` `agent-tools` `discovery`
  </details>

- **[misterclaw](https://github.com/catallo/misterclaw)** `⭐ 4` `updated ≤90d` An MCP server that allows AI agents to remotely control a MiSTer-FPGA system, enabling game launching, ROM library search, screenshot capture, and core configuration via natural language. <details><summary>More about</summary>

  It exposes retro-gaming hardware as a programmable surface for AI agents, letting developers script and automate FPGA interactions through standard MCP clients like Claude and Cursor.

  _We have finally reached the singularity where LLMs can tweak DIP switches on a 30-year-old arcade core, yet they still can't reliably center a div._

  `mcp` `retro-gaming` `fpga` `hardware-control`
  </details>

- **[open-museum-mcp](https://github.com/cfpramod/open-museum-mcp)** `⭐ 4` `updated ≤30d` An MCP server that federates search across multiple open-access museum collections with normalized schemas and per-museum license verification. <details><summary>More about</summary>

  Developers building art-history agents or cultural apps can integrate five museum APIs through one MCP interface with built-in rights gates and citation generation.

  _We have successfully abstracted the entire museum industry into a single JSON schema, yet we still cannot agree on how to normalize a date._

  `mcp` `museum` `api-integration` `art` `open-access`
  </details>

- **[pbs-mcp-server](https://github.com/matthewdcage/pbs-mcp-server)** `⭐ 4` `updated >1y` A standalone MCP server that exposes the Australian Pharmaceutical Benefits Scheme (PBS) API to LLMs, allowing AI models to query medicine listings, pricing, and prescriber data via natural language. <details><summary>More about</summary>

  It lets developers building healthcare or AI assistive tools integrate real-time Australian pharmaceutical data directly into MCP-compatible clients without wrapping the PBS API themselves.

  _Because nothing says modern AI infrastructure like a niche API bridge for Australian drug pricing that four people on Earth will ever debug._

  `mcp` `healthcare` `api-bridge` `pharmaceutical`
  </details>

- **[polymarket-predictions-mcp](https://github.com/kukapay/polymarket-predictions-mcp)** `⭐ 4` `updated ≤1y` An MCP server that exposes real-time Polymarket prediction market odds, events, and search to AI agents and desktop integrations like Claude Desktop. <details><summary>More about</summary>

  Developers building agentic trading workflows or prediction-market analytics can hook into live Polymarket data without writing custom API glue code.

  _Another niche MCP server enters the ecosystem, ensuring your AI agent can now debate election odds while you are just trying to fix a null pointer._

  `mcp` `polymarket` `prediction-markets` `agent-tooling`
  </details>

- **[pt-edge](https://github.com/grahamrowe82/pt-edge)** `⭐ 4` `updated ≤30d` A precomputed reasoning cache that tracks and scores over 220,000 open-source AI projects daily, publishing the results as a machine-readable directory site with an MCP interface for AI agents. <details><summary>More about</summary>

  It provides a structured, pre-digested intelligence layer that allows coding agents and developers to make informed infrastructure decisions without crawling GitHub or parsing raw READMEs themselves.

  _We have successfully reached the point where we are building infrastructure specifically designed to tell other AI agents which AI infrastructure they should trust._

  `mcp` `directory` `ai-infrastructure` `reasoning-cache`
  </details>

- **[spotify-mcp](https://github.com/gupta-kush/spotify-mcp)** `⭐ 4` `updated ≤90d` An MCP server that exposes 100+ Spotify tools for playback, playlist management, music discovery, and vibe analysis to Claude, Cursor, and other MCP clients. <details><summary>More about</summary>

  It lets developers wire deep Spotify automation and music intelligence into their AI workflows without wrestling with raw Web API calls or auth flows.

  _We now have a hundred-tool server for shuffling James Taylor deep cuts so your coding agent can optimize your listening vibes while you debug a mutex._

  `mcp` `spotify` `music` `fastmcp` `python`
  </details>

- **[warhammer-oracle](https://github.com/gregario/warhammer-oracle)** `⭐ 4` `updated ≤30d` An MCP server that provides Warhammer 40K, Combat Patrol, and Kill Team rules, unit stats, stratagems, and math calculations to AI assistants. <details><summary>More about</summary>

  It demonstrates how to build a niche MCP tool that structures complex domain knowledge for LLM consumption, serving as a reference implementation for game-related context engineering.

  _We have finally reached the singularity where large language models need dedicated middleware just to remember the precise interaction between Devastating Wounds and a Leman Russ Battle Tank._

  `mcp` `warhammer` `gaming` `context-engineering`
  </details>

- **[agent-scraper-mcp](https://github.com/aparajithn/agent-scraper-mcp)** `⭐ 3` `updated ≤90d` An MCP server that provides web scraping capabilities—including content extraction, structured data scraping, screenshots, and Google search—for AI agents via MCP and REST API. <details><summary>More about</summary>

  It gives coding agents and developer workflows a standardized way to pull live web content, metadata, and screenshots without writing custom scraping boilerplate.

  _We have successfully turned the open web into yet another JSON endpoint, so agents can now hallucinate quotes from pages they barely scraped._

  `mcp` `web-scraping` `agent-tooling` `playwright`
  </details>

- **[ai](https://github.com/contentrain/ai)** `⭐ 3` `updated ≤30d` A repo-native content governance tool that uses an MCP server to help AI agents extract, structure, and review UI text and documentation stored in Git. <details><summary>More about</summary>

  It allows developers to delegate the tedious extraction of hardcoded strings to AI agents while enforcing schema validation and human review via standard Git workflows.

  _Finally, an agentic workflow to solve the hardest problem in computer science: getting developers to stop hardcoding 'Welcome to our platform' directly into the JSX._

  `mcp` `content-governance` `git` `i18n` `agent-tools`
  </details>

- **[alkemi-mcp](https://github.com/alkemi-ai/alkemi-mcp)** `⭐ 3` `updated ≤1y` A STDIO Model Context Protocol server that connects MCP clients to Alkemi Data, allowing plain-English queries against databases like Snowflake and BigQuery via stored metadata and query generation. <details><summary>More about</summary>

  It lets teams expose shared database access to AI agents without duplicating schema knowledge or prompt engineering across every client and user.

  _We have successfully abstracted the database so heavily that you now need a bearer token, a product ID, and an MCP wrapper just to ask a question you used to answer with `SELECT *`._

  `mcp` `database` `stdio` `data-querying`
  </details>

- **[beeper-mcp](https://github.com/intentos-labs/beeper-mcp)** `⭐ 3` `updated >1y` A backend service that exposes Binance Smart Chain wallet operations, token swaps, and reward claims as MCP tools for integration with LLM clients like Claude and Cursor. <details><summary>More about</summary>

  It allows developers to delegate routine BSC DeFi operations directly to an AI agent via the Model Context Protocol, streamlining blockchain interaction workflows.

  _Because the one thing missing from your AI-assisted development loop was definitely giving a large language model direct access to your wallet's private key._

  `mcp` `blockchain` `bsc` `defi`
  </details>

- **[bitcoin-mcp](https://github.com/jamesanz/bitcoin-mcp)** `⭐ 3` `updated ≤180d` An MCP server that exposes real-time Bitcoin blockchain data, including addresses, transactions, blocks, and UTXOs, from the mempool.space API to AI coding environments. <details><summary>More about</summary>

  It allows developers building Bitcoin applications to query live blockchain state directly within their AI-assisted workflows in tools like Cursor or Claude Desktop.

  _We have successfully abstracted away the need to open a browser to check a Bitcoin address, ensuring your AI can now lose track of your UTXOs for you._

  `mcp` `bitcoin` `blockchain` `cursor` `finance`
  </details>

- **[callhub-mcp](https://github.com/callhub/callhub-mcp)** `⭐ 3` `updated ≤180d` A Python-based MCP server that exposes CallHub's contact, campaign, and agent management APIs to Claude as callable tools. <details><summary>More about</summary>

  It lets developers and operators manage call-center resources through natural language conversations with Claude instead of writing API integration code.

  _Another bespoke MCP server so niche you’ll wonder if we’re building a distributed CRM or just a very polite excuse to avoid reading API docs._

  `mcp` `callhub` `api-wrapper` `claude`
  </details>

- **[chrome-mcp-secure](https://github.com/pantheon-security/chrome-mcp-secure)** `⭐ 3` `updated ≤180d` A security-hardened Model Context Protocol server that enables AI agents to automate and debug web interactions via Google Chrome with enterprise-grade audit logging and post-quantum encryption. <details><summary>More about</summary>

  It allows development teams to safely hand browser automation tasks to AI agents in corporate environments by adding tamper-proof audit trails, SIEM integration, and PII redaction.

  _Your AI agent is now SOC 2 compliant, yet you still have to explain to the security team why it spent four hours clicking through the internal Jira._

  `mcp` `browser-automation` `security` `chrome` `enterprise`
  </details>

- **[cloud-cost-mcp](https://github.com/jasonwilbur/cloud-cost-mcp)** `⭐ 3` `updated ≤90d` A Model Context Protocol server that provides real-time, multi-cloud pricing data for AWS, Azure, GCP, and OCI to AI assistants like Claude Code. <details><summary>More about</summary>

  It allows developers to query and compare infrastructure costs across 2,700+ instance types using natural language, streamlining the architecture and migration planning workflow.

  _We've successfully abstracted cloud billing complexity so far that we now need an AI agent just to tell us that Oracle offers 10TB of free egress._

  `mcp` `finops` `cloud-pricing` `multi-cloud` `claude-code`
  </details>

- **[codewiki-mcp](https://github.com/izzzzzi/codewiki-mcp)** `⭐ 3` `updated ≤30d` An MCP server that connects AI assistants to codewiki.google, enabling search, documentation fetching, and Q&A for open-source GitHub repositories. <details><summary>More about</summary>

  It gives coding agents instant access to AI-generated wiki documentation for any open-source repo, reducing the need to scrape or manually read external READMEs and source trees.

  _Another layer in the stack that lets your AI assistant read docs about code so it can hallucinate with marginally more context than before._

  `mcp` `documentation` `context-retrieval` `developer-tools`
  </details>

- **[coremcp](https://github.com/corebasehq/coremcp)** `⭐ 3` `updated ≤30d` An open-source MCP server written in Go that connects AI assistants to legacy databases like MSSQL, providing schema discovery and read-only query tools with built-in security controls. <details><summary>More about</summary>

  It allows developers to expose legacy database contexts to LLMs for analysis without writing custom connectors or risking destructive queries on production data.

  _Finally, a secure bridge to let your AI agent stare directly into the abyss of your 1998 Turkish ERP database, character encoding and all._

  `mcp` `database` `golang` `legacy-systems` `llm-ops`
  </details>

- **[coresignal-mcp](https://github.com/coresignal-com/coresignal-mcp)** `⭐ 3` `updated ≤1y` A remote Model Context Protocol server that gives AI assistants access to Coresignal's B2B datasets covering companies, employees, and job postings. <details><summary>More about</summary>

  Developers building AI workflows can let their assistants query live business data instead of hallucinating company facts from stale training sets.

  _Now your coding agent can pivot from debugging your CI pipeline to pitching you five Austin-based IT companies, because why shouldn't context retrieval include the entire B2B data economy?_

  `mcp` `data-api` `remote-server` `b2b-data`
  </details>

- **[crypto-funds-mcp](https://github.com/kukapay/crypto-funds-mcp)** `⭐ 3` `updated ≤1y` An MCP server that provides AI agents with structured, real-time data on cryptocurrency investment funds via the Cryptorank API. <details><summary>More about</summary>

  It gives developers building crypto-native AI workflows a ready-made tool to fetch fund metrics, team data, and ROI without wiring API calls by hand.

  _We now have a dedicated protocol server so your AI agent can panic about token prices and venture capital returns with perfect ASCII formatting._

  `mcp` `crypto` `finance` `agent-tooling`
  </details>

- **[crypto-stocks-mcp](https://github.com/kukapay/crypto-stocks-mcp)** `⭐ 3` `updated ≤1y` A minimal MCP server that exposes real-time and historical stock data for crypto-related equities like Coinbase and MicroStrategy to AI agents. <details><summary>More about</summary>

  It lets developers and agents query blockchain-adjacent stock market data directly within MCP-compatible clients like Claude Desktop without wiring up custom API calls.

  _We have successfully reached the point where an AI agent needs a dedicated protocol server just to decide whether MicroStrategy is having a good day._

  `mcp` `finance` `stocks` `data`
  </details>

- **[cursor-usage](https://github.com/ofershap/cursor-usage)** `⭐ 3` `updated ≤90d` An MCP server and plugin that wraps the Cursor Enterprise API so developers can query team AI spending, usage, and model adoption directly from their AI agent or IDE. <details><summary>More about</summary>

  It lets engineering teams track and audit Cursor Enterprise costs through natural language questions instead of manually digging through dashboards and spreadsheets.

  _We have finally reached the point where we need an AI agent to explain to us how much money our other AI agents are burning._

  `mcp` `cursor` `cost-tracking` `enterprise` `usage-analytics`
  </details>

- **[deep-thinker](https://github.com/hubinoretros/deep-thinker)** `⭐ 3` `updated ≤30d` An MCP server that provides advanced cognitive reasoning capabilities using DAG-based thought graphs, 10 reasoning strategies, and metacognitive features to enhance LLM problem-solving for developers. <details><summary>More about</summary>

  It gives developers using MCP-compatible clients a structured way to apply complex reasoning patterns—like dialectic, first principles, and systems thinking—directly within their AI-assisted workflows.

  _Now you can offload the existential dread of making architectural decisions to a directed acyclic graph that critiques itself, while you wonder if the graph is judging your confidence scores._

  `mcp` `reasoning` `cognitive` `typescript` `dag`
  </details>

- **[devplan-mcp-server](https://github.com/mmorris35/devplan-mcp-server)** `⭐ 3` `updated ≤90d` An MCP server that generates detailed, agent-executable development plans, roadmaps, and task breakdowns directly inside Claude Code. <details><summary>More about</summary>

  It addresses context loss in AI coding sessions by producing validated, step-by-step implementation plans with built-in git workflows and progress tracking.

  _We have officially reached the point where we need a specialized server to tell the AI how to plan the work the AI is about to do, just to make sure the AI doesn't forget what the AI is doing._

  `mcp` `claude-code` `planning` `task-management`
  </details>

- **[flowzap-mcp](https://github.com/flowzap-xyz/flowzap-mcp)** `⭐ 3` `updated ≤30d` An MCP server that lets AI assistants generate workflow, sequence, and architecture diagrams using the FlowZap visual diagramming tool and its text-based DSL. <details><summary>More about</summary>

  It allows coding agents to read artifacts like HTTP logs or OpenAPI specs and automatically produce shareable visual diagrams without the developer switching contexts to a whiteboard tool.

  _We have successfully abstracted drawing a box with an arrow into a multi-agent protocol negotiation, because apparently opening a blank document by hand is now a workflow failure._

  `mcp` `diagrams` `workflow` `architecture`
  </details>

- **[gamebrain-api-clients](https://github.com/ddsky/gamebrain-api-clients)** `⭐ 3` `updated ≤180d` An MCP server client that exposes GameBrain's gaming API endpoints to MCP-compatible AI clients via npx remote execution. <details><summary>More about</summary>

  It lets AI coding assistants query gaming APIs directly through the Model Context Protocol instead of requiring custom API wrappers.

  _Another MCP server enters the registry, because apparently we needed a standardized way for Claude to check leaderboards while we still can't agree on how to format a .env file._

  `mcp` `gaming-api` `npx`
  </details>

- **[gis-mcp-server](https://github.com/matbel91765/gis-mcp-server)** `⭐ 3` `updated ≤180d` A Model Context Protocol server that exposes geospatial tools like geocoding, routing, and spatial analysis to AI agents and LLMs. <details><summary>More about</summary>

  Developers building location-aware agents can give their models direct access to GIS operations without writing custom API wrappers.

  _We have finally reached the point where our AI needs its own GIS workstation before it can recommend a lunch spot._

  `mcp` `gis` `geospatial` `agent-tools`
  </details>

- **[gleif-mcp-server](https://github.com/olgasafonova/gleif-mcp-server)** `⭐ 3` `updated ≤30d` A Go-based MCP server that provides 29 tools for querying the GLEIF database to look up LEI codes, validate entities, and trace corporate ownership structures. <details><summary>More about</summary>

  It allows developers to integrate official global financial identity verification directly into MCP-compatible workflows for KYC, compliance, and due diligence tasks.

  _Your AI agent can now traverse complex corporate ownership hierarchies in seconds, rendering your afternoon of manually clicking through registers officially obsolete._

  `mcp` `gleif` `fintech` `go` `compliance`
  </details>

- **[govrider-mcp-server](https://github.com/carlosahumada89/govrider-mcp-server)** `⭐ 3` `updated ≤90d` An MCP server that connects AI assistants to GovRider's database of live government tenders, RFPs, grants, and frameworks from 25+ official sources. <details><summary>More about</summary>

  It enables developers and consultancies to semantically match their tech products or services to relevant government procurement opportunities directly from their IDE or AI assistant.

  _We have achieved the singularity where your AI assistant can now stress about government paperwork and grant deadlines right alongside you._

  `mcp` `govtech` `procurement` `tenders`
  </details>

- **[Helium MCP](https://github.com/connerlambden/helium-mcp)** `⭐ 3` `updated ≤30d` An MCP server providing real-time news with bias scoring, live market data for stocks and crypto, AI options pricing, and meme search for AI coding assistants. <details><summary>More about</summary>

  It allows developers to plug real-time financial data and media bias analysis directly into their AI workflows within editors like Cursor, Windsurf, and Claude Desktop.

  _Finally, an MCP server that ensures your AI agent can weigh bull cases for Bitcoin while simultaneously surfacing the exact memes required to cope with the resulting portfolio volatility._

  `cursor` `finance` `market-data` `mcp` `news-bias`
  </details>

- **[heor-agent-mcp](https://github.com/neptun2000/heor-agent-mcp)** `⭐ 3` `updated ≤30d` An MCP server that provides AI-powered Health Economics and Outcomes Research (HEOR) tools for literature review, risk of bias assessment, cost-effectiveness modeling, and HTA dossier preparation. <details><summary>More about</summary>

  It allows developers building health-tech or pharma applications to integrate rigorous, regulatory-compliant HEOR workflows directly into Claude or other MCP-compatible hosts via standard tool calls.

  _We have finally achieved the singularity: an AI agent that understands both your spaghetti code and the nuanced regulatory differences between EMA GVP Module V and Article 107a of EU Regulation 1235/2010._

  `mcp-server` `healthcare` `pharma` `heor` `biotech`
  </details>

- **[icogenie-mcp](https://github.com/albertnahas/icogenie-mcp)** `⭐ 3` `updated ≤90d` An MCP server that allows AI agents like Claude to generate and manage production-ready SVG icons programmatically via the IcoGenie API. <details><summary>More about</summary>

  It lets developers automate icon generation and refinement directly inside their AI-assisted coding workflows, removing the context switch to manual design tools.

  _We have successfully abstracted away the tedious work of drawing a 24x24 pixel house icon, ensuring your agent can now burn credits and API calls to avoid opening Figma for an additional six seconds._

  `mcp` `icons` `svg` `npx`
  </details>

- **[icon-composer-mcp](https://github.com/ethbak/icon-composer-mcp)** `⭐ 3` `updated ≤30d` An MCP server and CLI tool for programmatically creating and manipulating Apple .icon bundles with Liquid Glass rendering effects for iOS 26+ app icons. <details><summary>More about</summary>

  It lets AI agents and developers automate Apple icon creation with proper Liquid Glass effects directly from the command line or through MCP-compatible editors like Cursor and Claude Code.

  _We have successfully abstracted away the last remaining tactile joy of dragging glyphs into Xcode, replacing it with 12 MCP tools and a Node.js wrapper around a beta Apple cask._

  `mcp` `apple` `icons` `cli` `liquid-glass`
  </details>

- **[iranti](https://github.com/nfemmanuel/iranti)** `⭐ 3` `updated ≤30d` A self-hosted MCP server that provides persistent, identity-based memory and cross-tool state sharing for AI coding assistants like Claude Code, Codex CLI, and GitHub Copilot. <details><summary>More about</summary>

  It allows developers to maintain consistent context and recall facts across different AI tools and sessions, reducing the need to re-explain project state after context resets.

  _We have finally solved the problem of AI tools forgetting what you told them five minutes ago, provided you are willing to host your own PostgreSQL database to remember which files you changed._

  `mcp` `memory` `context` `multi-agent`
  </details>

- **[iwdp-mcp](https://github.com/nnemirovsky/iwdp-mcp)** `⭐ 3` `updated ≤30d` An MCP server and CLI that exposes the iOS WebKit Inspector Protocol as tools so AI agents and IDEs can debug Safari on real iPhones. <details><summary>More about</summary>

  It gives coding agents and MCP clients native access to real iOS Safari sessions, closing a long-standing gap where only desktop Chrome debugging was agent-accessible.

  _We have finally automated the one remaining step of mobile debugging that still required a human with a lightning cable and a prayer._

  `mcp` `ios-safari` `debugging` `webkit` `mobile`
  </details>

- **[kaggle-mcp-server](https://github.com/krishnapramodparupudi/kaggle-mcp-server)** `⭐ 3` `updated ≤1y` A Model Context Protocol server that exposes Kaggle API methods, such as fetching competition lists, to MCP-compatible clients like Claude Desktop. <details><summary>More about</summary>

  It allows data scientists and developers to query Kaggle competitions and datasets directly through their AI assistant rather than switching to the browser or CLI.

  _We have finally achieved the platonic ideal of modern development: installing a local server to ask an AI to read a list of contests for us._

  `mcp` `kaggle` `data-science` `claude`
  </details>

- **[kite-mcp](https://github.com/aranjan/kite-mcp)** `⭐ 3` `updated ≤90d` An MCP server that connects AI assistants to Zerodha Kite, enabling natural language trading of Indian stocks through 14 tools for portfolio management, order execution, and market data. <details><summary>More about</summary>

  Developers trading Indian equities can now integrate conversational AI workflows into their MCP-compatible tools instead of writing custom Python wrappers for the Kite API.

  _We have successfully reached the point where your AI assistant now needs two-factor authentication and a stop-loss on its own HAL position, just in case the model decides to YOLO your portfolio._

  `mcp` `trading` `zerodha` `finance` `python`
  </details>

- **[math-mcp-learning-server](https://github.com/clouatre-labs/math-mcp-learning-server)** `⭐ 3` `updated ≤30d` An educational MCP server built with FastMCP that exposes 17 mathematical tools, including matrix algebra and data visualization, via a persistent workspace. <details><summary>More about</summary>

  Developers building or testing MCP clients can use this as a ready-made, cloud-hosted server to validate tool-calling and resource handling without writing math logic themselves.

  _We have successfully abstracted learning math into configuring a JSON transport URL, ensuring future generations will know how to invert a matrix solely through a Claude Desktop config file._

  `mcp` `math` `fastmcp` `learning` `python`
  </details>

- **[mcp-dash0](https://github.com/dash0hq/mcp-dash0)** `⭐ 3` `updated ≤1y` An official MCP server that allows AI assistants to query OpenTelemetry resources, metrics, logs, and traces directly from Dash0. <details><summary>More about</summary>

  It connects observability data directly into the coding loop, letting AI agents investigate incidents and debug issues without switching context to the Dash0 dashboard.

  _We have successfully closed the loop where the AI writes the bug, the AI deploys the bug, and now the AI uses this server to stare at the telemetry of the bug it just wrote._

  `ai-sre` `debugging` `mcp` `monitoring` `observability` `opentelemetry` `otel` `telemetry`
  </details>

- **[mcp-deal-flow-signal](https://github.com/kindrat86/mcp-deal-flow-signal)** `⭐ 3` `updated ≤30d` An MCP server that exposes startup engineering acceleration signals—such as commit velocity and contributor growth—to AI assistants for use by investors and technical operators. <details><summary>More about</summary>

  It lets developer-investors query live GitHub-derived traction data directly from their AI assistant instead of bouncing between dashboards and deal-flow spreadsheets.

  _We have successfully built an MCP server so your AI can help you evaluate startups while you wonder whether your own commit velocity is currently fundable._

  `mcp` `vc` `deal-flow` `github-data`
  </details>

- **[mcp-fathom-analytics](https://github.com/mackenly/mcp-fathom-analytics)** `⭐ 3` `updated ≤1y` An unofficial MCP server that exposes Fathom Analytics account, site, event, and aggregation data to AI assistants via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers query site analytics and generate reports directly through their AI assistant instead of switching to the Fathom dashboard.

  _We have successfully reached the point where even checking our pageview counts requires an AI-mediated protocol server to avoid opening a browser tab._

  `mcp` `analytics` `fathom` `npx`
  </details>

- **[mcp-me](https://github.com/paladini/mcp-me)** `⭐ 3` `updated ≤90d` A local MCP server that serves a structured personal profile (career, skills, projects, interests) from YAML files to AI assistants like Claude, Cursor, and Copilot. <details><summary>More about</summary>

  It allows developers to stop re-explaining their background, stack, and preferences in every new AI session by providing a persistent, local identity layer via the Model Context Protocol.

  _We have finally solved the hardest problem in computer science: ensuring your AI assistant knows you are an Aquarius before it writes that cover letter._

  `mcp` `context` `local-first` `identity` `yaml`
  </details>

- **[mcp-pfsense](https://github.com/antonio-mello-ai/mcp-pfsense)** `⭐ 3` `updated ≤90d` An MCP server that exposes pfSense firewall management tasks—such as firewall rules, DHCP reservations, and DNS overrides—to AI assistants via the pfrest REST API. <details><summary>More about</summary>

  It lets developers instruct an AI assistant to configure network infrastructure through natural language instead of manually editing pfSense rules or wrestling with a REST API.

  _We have finally arrived at the point where an AI can accidentally delete your firewall rules in two confident steps instead of just one._

  `mcp` `devops` `networking` `pfsense` `infrastructure`
  </details>

- **[mcp-romm](https://github.com/lodordev/mcp-romm)** `⭐ 3` `updated ≤90d` An MCP server that exposes a self-hosted RomM retro game library through 19 read-only tools for browsing platforms, searching ROMs, and managing collections via AI assistants. <details><summary>More about</summary>

  It lets developers manage and query their personal retro gaming libraries conversationally through MCP-compatible assistants rather than clicking through a web UI.

  _We have successfully reached the point where an AI agent can now manage your Pokémon ROM collection, but still can't figure out why your Docker container won't connect to localhost._

  `mcp` `retro-gaming` `romm` `self-hosted`
  </details>

- **[mcp-server-flipt](https://github.com/flipt-io/mcp-server-flipt)** `⭐ 3` `updated ≤90d` An MCP server implementation that exposes Flipt feature-flag operations (CRUD, evaluation, rollouts) to AI assistants via the Model Context Protocol. <details><summary>More about</summary>

  Developers integrating feature flags with AI agents can let assistants safely toggle, evaluate, and manage flags without leaving the MCP workflow.

  _Another day, another MCP server, because apparently even flipping a boolean now requires a dedicated protocol handshake and a 3am npm install._

  `mcp` `feature-flags` `flipt` `ai-tooling`
  </details>

- **[mcp-server-scraper](https://github.com/ofershap/mcp-server-scraper)** `⭐ 3` `updated ≤90d` An MCP server that scrapes web pages and returns clean markdown, links, and metadata using Mozilla Readability, designed to work with Claude Desktop, Cursor, and VS Code Copilot. <details><summary>More about</summary>

  It allows AI coding assistants to ingest documentation and blog posts directly from URLs without requiring paid scraping APIs or manual copy-pasting.

  _We have successfully automated the one task—reading the docs—that we originally used as the excuse to avoid writing code._

  `mcp` `web-scraping` `readability` `typescript` `cursor`
  </details>

- **[mcp-vtenext](https://github.com/castaldo-solutions/mcp-vtenext)** `⭐ 3` `updated ≤90d` An MCP server that exposes the VTENext CRM WebService API as tools for Claude and other MCP-compatible clients. <details><summary>More about</summary>

  Developers using VTENext can now let AI agents query opportunities, contacts, and activities directly via MCP instead of manually wiring CRM API calls.

  _We now have an MCP server for a CRM that most developers had to Google to identify, because why integrate at the API layer when you can integrate at the protocol layer instead?_

  `mcp` `crm` `integration` `vtenext`
  </details>

- **[monarch-mcp-server](https://github.com/carsol/monarch-mcp-server)** `⭐ 3` `updated ≤1y` A Model Context Protocol server that provides read-only access to Monarch Money financial data for analysis by AI assistants like Claude Desktop. <details><summary>More about</summary>

  It allows developers to pipe personal financial data into local AI workflows for budgeting and cashflow analysis without building custom API integrations.

  _We have finally reached the singularity where your AI assistant can judge your grocery spending habits, provided you are comfortable pasting your banking password into a .env file._

  `mcp` `finance` `local-ai` `claude`
  </details>

- **[mtg-oracle](https://github.com/gregario/mtg-oracle)** `⭐ 3` `updated ≤30d` An MCP server that provides Magic: The Gathering card search, rules lookup, deck analysis, and Commander-specific intelligence by exposing local SQLite data to AI assistants. <details><summary>More about</summary>

  It allows developers building AI workflows to enrich their assistants with domain-specific MTG knowledge without relying on slow, generic external API calls.

  _We have finally reached the point where we are building local infrastructure to explain the rules of cardboard dragons to a large language model._

  `mcp` `nodejs` `gaming` `sqlite` `cli`
  </details>

- **[penfield-mcp](https://github.com/penfieldlabs/penfield-mcp)** `⭐ 3` `updated ≤90d` An MCP server that provides persistent memory, knowledge graphs, and context management tools for AI agents across Claude, Cursor, Windsurf, and other MCP-compatible developer tools. <details><summary>More about</summary>

  Developers can preserve architectural decisions, investigation threads, and session context across coding tools so agents don't start cold after every restart.

  _We’ve solved the context window problem by building an external context window, which will eventually need its own context window._

  `mcp` `memory` `knowledge-graph` `context-management`
  </details>

- **[personal-finance-mcp](https://github.com/josuem1109/personal-finance-mcp)** `⭐ 3` `updated ≤30d` A self-hosted, read-only MCP server that connects personal finance accounts via Plaid to MCP clients like Claude Code for natural language queries. <details><summary>More about</summary>

  It allows developers to apply their existing AI coding workflows to personal finance data without relying on third-party aggregators or sharing credentials with external services.

  _We have successfully abstracted away the chore of logging into a banking portal by making it a Dockerized microservice that requires a Plaid API key and a Python 3.11 environment._

  `mcp` `plaid` `self-hosted` `finance` `claude-code`
  </details>

- **[project-context-mcp](https://github.com/ericbrown/project-context-mcp)** `⭐ 3` `updated ≤180d` An MCP server that exposes project documentation and context files from a .context/ folder directly into Claude Code's @ mention workflow. <details><summary>More about</summary>

  It allows developers to keep institutional knowledge, conventions, and architecture decisions alongside their code so Claude Code can reference them instantly without constant copy-pasting.

  _Now your AI can silently violate your coding standards with the same confidence it had before, just with your own documentation as the weapon of choice._

  `mcp` `claude-code` `context` `documentation`
  </details>

- **[raydium-launchlab-mcp](https://github.com/kukapay/raydium-launchlab-mcp)** `⭐ 3` `updated ≤1y` An MCP server that allows AI agents to programmatically create, buy, and sell tokens on the Raydium Launchpad using Solana wallets and IPFS metadata storage. <details><summary>More about</summary>

  It bridges Solana DeFi and agent workflows by giving AI tools direct access to token launchpad operations without manual UI interaction.

  _Finally, an MCP server that lets your AI agent rug-pull a token with the same ease it accidentally deletes your production database._

  `mcp` `solana` `defi` `raydium` `crypto`
  </details>

- **[rememb](https://github.com/luizedupp/rememb)** `⭐ 3` `updated ≤30d` A local, zero-config MCP server that gives AI agents persistent memory by storing project context, decisions, and preferences in a JSON file within the repo. <details><summary>More about</summary>

  It eliminates the repetitive context-rewriting loop across sessions in Cursor, Windsurf, and Claude by letting agents read and write structured memory locally without cloud dependencies.

  _We have finally solved the tragedy of the AI that forgets it’s supposed to be using PostgreSQL before you’ve finished your morning coffee, provided you remember to configure the memory server that remembers things._

  `mcp` `agent-memory` `context-persistence` `local-ai`
  </details>

- **[secure-mcp-fetch](https://github.com/appsec-innovation-labs/secure-mcp-fetch)** `⭐ 3` `updated >1y` A simple MCP server built with FastMCP that provides secure URL fetching with IP validation, private network blocking, and domain allowlists. <details><summary>More about</summary>

  It gives MCP-connected agents a safe way to fetch external content without risking requests to internal networks or untrusted domains.

  _We have reached the point where the agent needs its own firewall just to fetch a URL without joining a botnet._

  `mcp` `security` `fetch` `fastmcp`
  </details>

- **[shahnameh-mcp-server](https://github.com/aliafsahnoudeh/shahnameh-mcp-server)** `⭐ 3` `updated ≤1y` An MCP server that exposes the Shahnameh (Persian epic poetry) dataset via tools for AI models to query verses and related cultural data. <details><summary>More about</summary>

  It allows developers building MCP-compatible AI assistants to add Persian literary context and cultural queries without building a custom API integration.

  _We now have the infrastructure to ask an LLM about 10th-century epic poetry mid-session, while the actual codebase remains undocumented._

  `mcp` `culture` `persian` `api-wrapper`
  </details>

- **[sqlaugur](https://github.com/mbentham/sqlaugur)** `⭐ 3` `updated ≤30d` An MCP server that gives AI assistants safe, read-only access to SQL Server databases using AST-based query validation and integrated DBA diagnostic tooling. <details><summary>More about</summary>

  It lets AI coding assistants safely query production SQL Server instances without risking data mutations or runaway query loops.

  _We have finally reached the point where we need an AST-powered gatekeeper to stop our AI assistants from SQL-injecting themselves into a coma._

  `mcp` `sql-server` `database` `security` `dotnet`
  </details>

- **[tap](https://github.com/leonting1010/tap)** `⭐ 3` `updated ≤30d` A local-first browser automation tool that uses AI to compile a deterministic .plan.json program from a website once, then replays it forever with zero LLM tokens. <details><summary>More about</summary>

  It lets developers build resilient web scrapers and automations that don't silently break or drain the API budget on every run.

  _We have successfully invented a way to make a scraper that is too deterministic to fail, yet you will still refresh it at 9 AM like it owes you money._

  `browser-automation` `mcp` `scraping` `cli` `chrome-extension`
  </details>

- **[time-node-mcp](https://github.com/davidan90/time-node-mcp)** `⭐ 3` `updated ≤1y` A lightweight Node.js MCP server that provides timezone-aware date and time operations to AI assistants via the Model Context Protocol. <details><summary>More about</summary>

  It solves the common problem of LLMs hallucinating dates and times by giving tools like Claude Desktop a reliable source of truth for timezone conversions and DST-aware calculations.

  _We have successfully reached the point where we need to install a dedicated server just to remind the all-knowing AI overlord what time it is in London._

  `mcp` `timezone` `nodejs` `developer-tools`
  </details>

- **[token-revoke-mcp](https://github.com/kukapay/token-revoke-mcp)** `⭐ 3` `updated >1y` An MCP server that allows AI agents or client tools to check and revoke ERC-20 token allowances across more than 50 EVM-compatible blockchains. <details><summary>More about</summary>

  It gives developers and their AI assistants a programmatic way to audit and clean up wallet approvals without manually navigating multiple block explorers.

  _Your AI agent can now autonomously revoke token allowances it doesn't like, which is either a security upgrade or the beginning of a very expensive hallucination._

  `mcp` `web3` `blockchain` `security` `evm`
  </details>

- **[tui-mcp](https://github.com/nvms/tui-mcp)** `⭐ 3` `updated ≤90d` An MCP server that launches terminal applications in a managed pseudo-terminal, allowing AI agents to interact with stateful, full-screen TUI programs via screenshots, text snapshots, and keystrokes. <details><summary>More about</summary>

  It allows coding agents to drive interactive CLI tools, debuggers, and legacy admin panels that require a real TTY and persistent session state, removing the need for custom API wrappers.

  _We have successfully taught a large language model to press 'q' to exit vim, which is arguably the most expensive way to automate a task that has been trivial for decades._

  `mcp` `terminal` `automation` `pty` `cli`
  </details>

- **[twitter-username-changes-mcp](https://github.com/kukapay/twitter-username-changes-mcp)** `⭐ 3` `updated >1y` An MCP server that queries historical Twitter username changes for a given screen name, intended to help developers assess account stability in crypto and OSINT contexts. <details><summary>More about</summary>

  It provides a lightweight, programmatic way to integrate social identity history lookups directly into AI-assisted workflows via the Model Context Protocol.

  _Because nothing says 'secure smart-contract development' like building an MCP tool to audit how many times a Telegram admin has rebranded their Twitter handle this month._

  `mcp` `twitter` `osint` `fintech`
  </details>

- **[ucsc-genome-mcp](https://github.com/hlydecker/ucsc-genome-mcp)** `⭐ 3` `updated ≤180d` An MCP server that exposes the UCSC Genome Browser API as tools for LLM applications to query genomic data, sequences, and annotations. <details><summary>More about</summary>

  Bioinformatics developers can wire LLM workflows directly into genome browsers without writing custom API wrappers or scraping HTML.

  _We have successfully abstracted genomics into tool calls, which means your next code review might involve a model debating the merits of hg38 versus hg19._

  `mcp` `bioinformatics` `genomics` `llm-tools`
  </details>

- **[universal-mcp-toolkit](https://github.com/markgatcha/universal-mcp-toolkit)** `⭐ 3` `updated ≤30d` A TypeScript monorepo and CLI providing 27+ production-ready Model Context Protocol servers for services like GitHub, Slack, and databases, along with tooling for configuration and diagnostics. <details><summary>More about</summary>

  It bundles fragmented MCP server implementations into a single, high-quality monorepo with a unified CLI, making it easier for developers to connect local AI workflows to the tools they already use.

  _Because obviously the missing piece in the modern developer's life wasn't better code generation, but a 27-in-1 server aggregator to help your AI manage Jira tickets and Spotify playlists simultaneously._

  `mcp` `typescript` `monorepo` `cli` `tooling`
  </details>

- **[vibetrader-mcp](https://github.com/etbars/vibetrader-mcp)** `⭐ 3` `updated ≤180d` An MCP server that connects AI assistants to the VibeTrader platform, allowing developers to create, manage, and backtest trading bots using natural language. <details><summary>More about</summary>

  It enables developers to integrate algorithmic trading workflows directly into their AI-assisted IDE or desktop environment without writing custom broker integration code.

  _We have officially reached the point where your AI assistant can panic-sell your portfolio while you are trying to refactor a React component._

  `mcp` `trading` `fintech` `ai-assistant`
  </details>

- **[vikingdb-mcp-server](https://github.com/kashiwabyte/vikingdb-mcp-server)** `⭐ 3` `updated ≤1y` An MCP server that connects AI models and tools to ByteDance's VikingDB high-performance vector database for storing and searching information. <details><summary>More about</summary>

  It allows developers to plug ByteDance's managed vector store into MCP-compatible clients like Claude Desktop for retrieval-augmented workflows.

  _Another niche MCP server enters the ecosystem, raising the odds that your agent spends more time configuring database bridges than writing the code you actually asked for._

  `mcp` `vector-database` `bytedance` `vikingdb`
  </details>

- **[waveguardclient](https://github.com/gpartin/waveguardclient)** `⭐ 3` `updated ≤30d` A Python SDK and MCP server for the WaveGuard API, providing physics-based anomaly detection for any data type via a single stateless API call. <details><summary>More about</summary>

  It gives developers a zero-config, ML-free anomaly detection endpoint that can be hooked into AI agents via MCP or used directly in Python to monitor metrics, logs, and transactions.

  _Another glorious day where we abandon trained models for GPU-powered wave simulations, because apparently the only thing missing from your alerting pipeline was solving coupled wave equations on a 64³ lattice._

  `anomaly-detection` `mcp-server` `sdk` `python` `physics-based`
  </details>

- **[wizzy-mcp-tmdb](https://github.com/drakonkat/wizzy-mcp-tmdb)** `⭐ 3` `updated ≤1y` A JavaScript MCP server that exposes The Movie Database (TMDB) search, details, and trending endpoints as tools for AI clients to query movie, TV, and person data. <details><summary>More about</summary>

  Developers integrating AI assistants with media workflows can give their agents structured access to TMDB without writing custom API wrappers.

  _We have finally achieved the future: an autonomous agent that can tell you who starred in Dune, while your actual codebase remains a mystery to it._

  `mcp` `tmdb` `javascript` `api-wrapper`
  </details>

- **[agent-utils-mcp](https://github.com/aparajithn/agent-utils-mcp)** `⭐ 2` `updated ≤90d` A Python-based MCP server providing 18 utility tools—such as JSON validation, hashing, and cron parsing—via Streamable HTTP and REST API for integration with AI agents. <details><summary>More about</summary>

  It gives agents a ready-made set of formatting, parsing, and generation primitives so they can stop hallucinating base64 encoding and cron calculations.

  _We now have a dedicated microservice to do what every developer already has in their shell history, just so your agent can mis-spell 'base64' in JSON RPC instead._

  `mcp` `utilities` `fastapi` `agent-tools` `rest-api`
  </details>

- **[agent1st-ads-mcp](https://github.com/nolas-shadow/agent1st-ads-mcp)** `⭐ 2` `updated ≤90d` An MCP server that lets AI agents create, manage, and report on Meta and TikTok ad campaigns via OAuth-connected API calls. <details><summary>More about</summary>

  It enables developers to wire ad ops directly into agentic workflows without manually wrangling Meta and TikTok APIs.

  _We have finally automated the one task that used to require a human: nervously checking CPMs while pretending the dashboard makes sense._

  `mcp` `meta-ads` `tiktok-ads` `marketing-automation` `agent-tooling`
  </details>

- **[agent47](https://github.com/espadaw/agent47)** `⭐ 2` `updated ≤90d` An MCP server and web dashboard that aggregates job listings and pricing data across multiple AI agent marketplaces for autonomous agents to find work. <details><summary>More about</summary>

  Developers building autonomous agents can use this to programmatically discover task opportunities and compare compensation across fragmented agent economy platforms.

  _We’ve successfully built the infrastructure to let AI agents worry about the gig economy, so they can now experience the same platform fragmentation and race-to-the-bottom pricing their creators do._

  `mcp` `agent-economy` `job-aggregation` `autonomous-agents`
  </details>

- **[agenthotspot-mcp](https://github.com/agenthotspot/agenthotspot-mcp)** `⭐ 2` `updated ≤180d` An MCP server that allows AI agents to search and discover over 6,000 MCP connectors listed on the AgentHotspot marketplace. <details><summary>More about</summary>

  Developers can search for and integrate existing MCP connectors directly from their agent workflow instead of manually browsing the web.

  _We now have an AI tool designed solely to help other AI tools find more AI tools, accelerating the recursive loop of middleware discovering middleware._

  `mcp` `connectors` `marketplace` `agent-tools`
  </details>

- **[bitcoin-mcp](https://github.com/bortlesboat/bitcoin-mcp)** `⭐ 2` `updated ≤30d` A Model Context Protocol server offering 49 tools for Bitcoin data, including fees, mempool analysis, blocks, and transactions, designed for integration with AI agents in editors like Claude, Cursor, and VS Code. <details><summary>More about</summary>

  It allows developers to ground AI coding agents in real-time Bitcoin network data without building custom API integrations or managing node connections.

  _We have successfully abstracted away the last remaining barrier to asking an LLM for financial advice: the need to actually understand how the mempool works._

  `mcp` `bitcoin` `blockchain` `developer-tools`
  </details>

- **[bitcoin-utxo-mcp](https://github.com/kukapay/bitcoin-utxo-mcp)** `⭐ 2` `updated ≤1y` A Model Context Protocol server that provides AI agents with tools to query Bitcoin Unspent Transaction Outputs and block statistics. <details><summary>More about</summary>

  It allows developers building crypto-focused AI workflows to give their agents structured, read-only access to on-chain Bitcoin data without writing custom API wrappers.

  _We have officially reached the point where we are building middleware to help our AI overlords check if the genesis wallet has spent its lunch money._

  `mcp` `bitcoin` `crypto` `blockchain-api`
  </details>

- **[bridge-metrics-mcp](https://github.com/kukapay/bridge-metrics-mcp)** `⭐ 2` `updated ≤1y` An MCP server that exposes real-time cross-chain bridge metrics from DeFiLlama, allowing AI agents to query chain TVL, bridge volumes, and transaction data. <details><summary>More about</summary>

  Developers building AI agents for DeFi analytics can drop in this server to give models structured access to bridge liquidity and transaction flows without scraping dashboards.

  _We have successfully abstracted away opening DeFiLlama into yet another MCP tool that an agent will summarize while you still refresh the page to check the number yourself._

  `mcp` `defi` `blockchain` `agent-tooling`
  </details>

- **[callout](https://github.com/fantasieleven-code/callout)** `⭐ 2` `updated ≤90d` Callout is an MCP server that provides multi-perspective code, product, and strategy reviews inside AI coding environments like Claude Code, Cursor, and VS Code. <details><summary>More about</summary>

  It acts as a second pair of eyes to catch over-engineering and misaligned priorities before AI-generated code bloat cements itself into your codebase.

  _Now you can pay an AI to write 691 tests in 6 days, then pay another AI to tell you that 60% of them were a waste of tokens._

  `mcp` `code-review` `ai-quality` `cursor` `claude-code`
  </details>

- **[cashpilot-mcp](https://github.com/geiserx/cashpilot-mcp)** `⭐ 2` `updated ≤30d` An MCP server that exposes a CashPilot instance to LLMs, allowing AI agents to monitor passive income earnings, manage services, and control fleet workers via JSON-RPC. <details><summary>More about</summary>

  It allows developers running DePIN or bandwidth-sharing fleets to hand off monitoring and service management to their AI workflows via the Model Context Protocol.

  _We have officially reached the stage where you can delegate checking your beanie-baby-income dashboard to an LLM, because apparently staring at docker logs was too taxing on the human spirit._

  `mcp` `cashpilot` `fleet-management` `depin` `passive-income`
  </details>

- **[chainlist-mcp](https://github.com/kukapay/chainlist-mcp)** `⭐ 2` `updated ≤1y` An MCP server that provides AI agents with fast access to verified EVM chain metadata, including RPC URLs, chain IDs, explorers, and native tokens sourced from Chainlist.org. <details><summary>More about</summary>

  It allows developers building Web3 AI workflows to equip their agents with structured, up-to-date chain data without manually hardcoding RPC endpoints or explorer URLs.

  _We have successfully abstracted the need to remember what chain ID 1 is, which is definitively the peak of modern engineering._

  `mcp` `web3` `evm` `chainlist` `python`
  </details>

- **[chaitin-ip-intelligence-search-tool](https://github.com/co0ontty/chaitin-ip-intelligence-search-tool)** `⭐ 2` `updated >1y` An MCP server that provides IP reputation lookups and threat intelligence by querying Chaitin's global honeypot network and malicious IP databases. <details><summary>More about</summary>

  It allows coding agents and IDEs to perform real-time security assessments of IP addresses directly within the developer workflow via the Model Context Protocol.

  _Finally, a way to integrate a million-node honeypot network into your chat completions so your LLM can worry about IP reputation while you worry about why the MCP setup JSON is still invalid._

  `mcp` `security` `threat-intelligence` `ip-lookup`
  </details>

- **[clarifyprompt-mcp](https://github.com/lumabyteco/clarifyprompt-mcp)** `⭐ 2` `updated ≤30d` An MCP server that rewrites vague prompts into platform-optimized versions for 58+ AI tools by analyzing workspace context and target model capabilities. <details><summary>More about</summary>

  It helps developers avoid the tedious trial-and-error of manually tweaking syntax and parameters when switching between AI platforms like Midjourney, Claude, and Cursor.

  _We have now reached the point where we need an autonomous agent to translate between the dialects of our other autonomous agents._

  `mcp` `prompt-engineering` `context-engineering` `developer-tools`
  </details>

- **[claude-mcp-bridge](https://github.com/hampsterx/claude-mcp-bridge)** `⭐ 2` `updated ≤30d` An MCP server that wraps the Claude Code CLI as a subprocess to expose its querying, search, and structured output capabilities to MCP-compatible clients like Gemini CLI, Codex, Cursor, and VSurf. <details><summary>More about</summary>

  It allows developers to plug Claude's coding and reasoning capabilities into other AI agents and editors that lack shell access or need structured JSON output with cost tracking.

  _We have finally reached the point of writing middleware to let our AI assistants ask other AI assistants for help, because apparently collaboration is easier than picking one tool._

  `mcp` `middleware` `cli` `bridge` `context`
  </details>

- **[cryptopolitan-mcp](https://github.com/4dmrkey/cryptopolitan-mcp)** `⭐ 2` `updated ≤30d` An MCP server that exposes Cryptopolitan's crypto news, analysis, and price predictions to AI agents via SSE and Streamable HTTP transports. <details><summary>More about</summary>

  It lets developer-configured agents query real-time crypto content with structured filters and attribution, without scraping or parsing the site directly.

  _We have reached the point where crypto news has its own protocol server so your agent can hallucinate price predictions with proper attribution._

  `mcp` `crypto` `news-api` `agent-tooling`
  </details>

- **[dao-proposals-mcp](https://github.com/kukapay/dao-proposals-mcp)** `⭐ 2` `updated ≤1y` An MCP server that aggregates live governance proposals from major DAOs like ENS and Aave via Snapshot, providing tools to list spaces, fetch proposals, and summarize them for AI agents. <details><summary>More about</summary>

  It allows developers building AI agents to give their models real-time visibility into decentralized governance without manually scraping Snapshot APIs.

  _Finally, your AI agent can stress-vote on DAO proposals faster than the humans who actually understand the implications._

  `mcp` `dao` `governance` `snapshot` `web3`
  </details>

- **[defi-mcp](https://github.com/robocular/defi-mcp)** `⭐ 2` `updated ≤90d` An MCP server providing 12 tools for live DeFi and crypto data, including token prices, wallet balances, gas fees, and DEX swap quotes for EVM chains and Solana. <details><summary>More about</summary>

  It gives MCP-compatible AI assistants like Claude and Cursor direct access to on-chain data without requiring developers to wire up their own API keys or RPC nodes.

  _We have successfully abstracted away the last remaining barrier to asking an LLM for the price of Ethereum while pretending we are doing serious engineering work._

  `crypto` `defi` `mcp` `tools` `web3`
  </details>

- **[devops-mcp-webui](https://github.com/elevy99927/devops-mcp-webui)** `⭐ 2` `updated ≤1y` A bridge that connects OpenWebUI to Kubernetes clusters via the MCP protocol, allowing developers to manage cluster resources through natural language chat. <details><summary>More about</summary>

  It lets developers query pods, apply manifests, and manage Helm charts conversationally through a local OpenWebUI instance instead of switching to kubectl.

  _We have successfully closed the critical gap between managing distributed infrastructure and explaining your YAML errors to a local chatbot._

  `kubernetes` `mcp` `openwebui` `devops` `local-ai`
  </details>

- **[dnd-oracle](https://github.com/gregario/dnd-oracle)** `⭐ 2` `updated ≤30d` An MCP server that exposes D&D 5e SRD data—including monsters, spells, and rules—via 12 tools for encounter building, spell planning, and character analysis in AI clients like Claude Desktop and Claude Code. <details><summary>More about</summary>

  It lets developers building D&D tooling or AI integrations test agent-tooling patterns against a clean, local, ground-truth dataset without risking LLM hallucinations.

  _We have successfully built a Model Context Protocol server so our AI can finally kill goblins with perfect rules compliance while our actual production code reviews remain a chaotic mess._

  `mcp` `dnd` `game-dev` `tooling` `node`
  </details>

- **[ellmos-codecommander-mcp](https://github.com/ellmos-ai/ellmos-codecommander-mcp)** `⭐ 2` `updated ≤30d` A developer-focused MCP server providing 17 tools for code analysis, JSON repair, encoding fixes, import organization, format conversion, and regex testing. <details><summary>More about</summary>

  It extends AI assistants like Claude Desktop with specialized code intelligence tools that handle common but tedious tasks like fixing broken JSON, repairing encoding issues, and organizing imports.

  _Another MCP server joins the ecosystem, because clearly what we needed was a dedicated tool to fix Mojibake and German umlauts that your AI assistant could have just... done itself._

  `mcp` `code-analysis` `developer-tools` `json-repair`
  </details>

- **[evc-spark-mcp](https://github.com/entire-vc/evc-spark-mcp)** `⭐ 2` `updated ≤90d` An MCP server that lets AI clients like Claude and Cursor search and retrieve assets from the Spark workflow catalog, including agents, skills, prompts, and MCP connectors. <details><summary>More about</summary>

  It gives coding agents direct access to a marketplace of reusable AI workflow assets, letting developers discover and apply curated prompts and skills without leaving their environment.

  _We have now built an MCP server so your MCP-compatible agent can browse a catalog of other agents, skills, and connectors, because apparently the only thing missing from your workflow is more middleware to manage the middleware._

  `mcp` `spark` `catalog` `workflow` `npm`
  </details>

- **[evmscope](https://github.com/calintzy/evmscope)** `⭐ 2` `updated ≤90d` An MCP server and CLI toolkit that exposes 26 read-only EVM blockchain tools—including token prices, gas comparisons, wallet balances, and DeFi safety checks—across seven major chains, requiring zero configuration or API keys. <details><summary>More about</summary>

  It gives AI agents and terminal users direct, zero-config access to real-time on-chain data that models like Claude and GPT otherwise cannot reach.

  _We have successfully built an MCP server so that our AI agents can panic about gas fees and honeypot tokens just as efficiently as we can._

  `mcp` `blockchain` `evm` `defi` `cli`
  </details>

- **[fixgraph-mcp](https://github.com/jawdat6/fixgraph-mcp)** `⭐ 2` `updated ≤90d` An MCP server that lets AI assistants search, retrieve, and submit verified fixes for technical errors from the FixGraph community database. <details><summary>More about</summary>

  It connects coding agents directly to a 25,000+ fix database, allowing them to resolve common errors like ERESOLVE or Docker crashes without hallucinating solutions or forcing developers to leave their workflow.

  _We’ve finally built a tool that lets your AI agent double-check its work against a community database, ensuring it can confidently apply the wrong fix with verified authority._

  `mcp` `debugging` `error-fixes` `agent-tooling`
  </details>

- **[flaiwheel](https://github.com/dl4rce/flaiwheel)** `⭐ 2` `updated ≤30d` A self-hosted MCP server that vectorizes project documentation and acts as a persistent memory and governance layer for AI coding agents. <details><summary>More about</summary>

  It gives AI assistants long-term memory and enforces documentation workflows so teams don't repeat the same bugs and architectural mistakes across sessions.

  _We have finally built infrastructure to ensure the AI remembers exactly how it broke production last time, which is admittedly more than we usually do for human onboarding._

  `mcp` `memory` `vector-search` `self-hosted` `governance`
  </details>

- **[google-search-console-mcp](https://github.com/acamolese/google-search-console-mcp)** `⭐ 2` `updated ≤30d` An MCP server that provides read-only access to Google Search Console data and generates brandable HTML SEO audit reports from MCP-compatible clients like Claude and Cursor. <details><summary>More about</summary>

  It allows developers and SEOs to query performance metrics and produce client-ready audit reports directly within their AI assistant workflow, eliminating manual data export and UI navigation.

  _We have successfully abstracted away the last remaining reason to ever look at the actual Google Search Console UI, completing the circle of 'I asked an AI to check why Google hates my site'._

  `mcp` `seo` `google-search-console` `python` `audit-reports`
  </details>

- **[gorilla-mcp](https://github.com/opusforge/gorilla-mcp)** `⭐ 2` `updated ≤30d` An MCP server that connects Claude and Cursor to the Gorilla SaaS, enabling AI agents to find and qualify early SaaS users by searching Reddit, X, YouTube, TikTok, and LinkedIn. <details><summary>More about</summary>

  It allows developer-focused AI workflows to integrate lead generation and outreach drafting directly into the coding environment rather than switching to external marketing tools.

  _We have officially reached the point where your coding agent can now handle the part of the job no one wanted anyway: cold outreach to strangers on the internet._

  `mcp` `lead-generation` `marketing` `saas`
  </details>

- **[huaweiappgallerymcp](https://github.com/agimaulana/huaweiappgallerymcp)** `⭐ 2` `updated ≤30d` A Model Context Protocol server that lets AI assistants manage app publishing workflows on Huawei AppGallery Connect, including metadata updates, binary uploads, and release submissions. <details><summary>More about</summary>

  It allows developers using Claude Desktop or other MCP clients to automate Huawei app store operations like phased rollouts and localized listings directly through natural language.

  _We have successfully abstracted away the one remaining human joy of clicking through Huawei's AppGallery Connect UI by wrapping it in an MCP server with 2 stars._

  `mcp` `huawei` `app-store` `automation` `developer-tools`
  </details>

- **[indiestack](https://github.com/pattyboi101/indiestack)** `⭐ 2` `updated ≤30d` An MCP server and CLI that validates packages, catches hallucinations and typosquats, and searches a curated database of 6,500+ developer tools with compatibility intelligence. <details><summary>More about</summary>

  It acts as a dependency guardrail for AI coding agents, preventing them from installing hallucinated packages or incompatible tools during autonomous workflows.

  _Your AI agent now has its own supply-chain security team, because apparently the robot can't be trusted to tell the difference between a real package and a fever dream._

  `mcp` `dependency-management` `cli` `agent-guardrails`
  </details>

- **[indigo-mcp](https://github.com/indigoprotocol/indigo-mcp)** `⭐ 2` `updated ≤30d` An MCP server that exposes Indigo Protocol's Cardano DeFi data, including iAsset prices, CDP analytics, and governance info, to LLM agents via the Model Context Protocol. <details><summary>More about</summary>

  Developers building LLM agents on Cardano can plug this in to give their models real-time access to DeFi positions and protocol data without writing custom API integrations.

  _We have officially reached the point where a protocol needs its own MCP server just so your AI can nervously check if its CDP is about to get liquidated at 3 AM._

  `mcp` `cardano` `defi` `llm-integration` `protocol`
  </details>

- **[ipfind-mcp-server](https://github.com/ipfind/ipfind-mcp-server)** `⭐ 2` `updated ≤1y` A Model Context Protocol server that connects to the IP Find API so AI assistants like Claude Desktop can look up location data for IP addresses. <details><summary>More about</summary>

  It gives coding assistants a plug-and-play way to enrich IP addresses with geolocation context during chat workflows without custom integration work.

  _We have finally reached the point where the AI needs its own dedicated microservice just to answer the timeless question of 'where on earth is this packet going'._

  `mcp` `ip-geolocation` `claude-desktop` `tooling`
  </details>

- **[jira-mcp](https://github.com/ahmetbarut/jira-mcp)** `⭐ 2` `updated ≤180d` A Node.js MCP server that exposes Jira Cloud API operations—such as listing boards, fetching issues, and adding comments—as tools for AI agents and MCP-compatible clients. <details><summary>More about</summary>

  It lets coding agents and MCP hosts interact directly with Jira, so developers can query boards, manage issues, and post updates without leaving their AI-assisted workflow.

  _Now your AI agent can argue with product managers in Jira comments while you wonder whether the real ticket is the context window you burned along the way._

  `mcp` `jira` `agent-tooling` `nodejs`
  </details>

- **[Lazy Toggl MCP](https://github.com/movstox/lazy-toggl-mcp)** `⭐ 2` `updated ≤1y` A Model Context Protocol server that exposes Toggl Track time tracking actions, such as starting and stopping entries, as tools for AI agents. <details><summary>More about</summary>

  It allows developers to delegate time tracking tasks to MCP-compatible assistants instead of manually switching to the Toggl UI.

  _Now your AI agent can bill your client for the exact five minutes you spent arguing with it about a CSS margin._

  `integrations` `mcp` `time-tracking` `toggl`
  </details>

- **[maiat-protocol](https://github.com/jhinresh/maiat-protocol)** `⭐ 2` `updated ≤30d` A trust oracle protocol that provides on-chain behavioral data, community reviews, and EAS attestations to help AI agents evaluate token safety and agent reputation for commerce workflows. <details><summary>More about</summary>

  Developers building agentic commerce systems can integrate SDKs, an MCP server, and plugins for ElizaOS, Coinbase AgentKit, and Virtuals to gate transactions based on trust scores.

  _We have finally reached the point where AI agents need their own on-chain credit bureaus and we are the ones writing the smart contracts to power them._

  `agent-trust` `mcp` `web3` `sdk` `fintech`
  </details>

- **[mattermost-mcp](https://github.com/conarti/mattermost-mcp)** `⭐ 2` `updated ≤180d` A Model Context Protocol server that exposes the Mattermost API to MCP clients like Claude, enabling message posting, channel history retrieval, and user lookups from AI assistants. <details><summary>More about</summary>

  Developers can wire Claude and other MCP clients directly into their team chat workflows, letting assistants read threads, post updates, and react to messages without leaving the workspace.

  _Your AI assistant can now argue with coworkers in Mattermost on your behalf, which is either the ultimate productivity hack or a fast track to HR involvement._

  `mcp` `mattermost` `chat` `integration`
  </details>

- **[mcp](https://github.com/botwallet-co/mcp)** `⭐ 2` `updated ≤30d` An MCP server that gives AI agents a USDC wallet with FROST threshold signing, spending guard rails, and the ability to pay for x402 APIs or create invoices. <details><summary>More about</summary>

  Developers can let coding agents autonomously pay for API access and handle microtransactions without handing over unrestricted spend keys.

  _Your AI agent now has a stipend, a cryptographic identity, and the ability to invoice clients, while you’re still manually approving its $5 purchases like a confused parent._

  `mcp` `payments` `agents` `wallet` `x402`
  </details>

- **[mcp-binance-futures](https://github.com/muvon/mcp-binance-futures)** `⭐ 2` `updated ≤90d` An MCP server that exposes Binance USDT-M Futures trading capabilities—market data, account state, and order/position management—to LLMs via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers wire an LLM into a live futures trading account, turning a code assistant into a semi-autonomous crypto trading operator.

  _Because nothing says responsible software engineering like giving a hallucination-prone language model the ability to set 125× leverage and cancel all your orders._

  `mcp` `binance` `futures` `trading` `finance`
  </details>

- **[mcp-immostage](https://github.com/larrywalkerdev/mcp-immostage)** `⭐ 2` `updated ≤90d` An MCP server that connects AI clients to ImmoStage's real estate tooling for virtual room staging, floor plan rendering, image classification, and German property listing optimization. <details><summary>More about</summary>

  It lets developers integrate real estate-specific AI workflows—like staging empty rooms or generating localized property descriptions—directly into MCP-compatible clients and automations.

  _We have finally unlocked the true promise of the Model Context Protocol: helping Claude decide whether your Berlin-Mitte apartment deserves Scandinavian minimalism or full luxury staging._

  `mcp` `real-estate` `proptech` `virtual-staging` `dach`
  </details>

- **[mcp-intro](https://github.com/peek-travel/mcp-intro)** `⭐ 2` `updated ≤1y` A remote MCP server that exposes Peek.com's travel inventory, availability, and pricing data to AI assistants for real-time trip planning. <details><summary>More about</summary>

  Developers building AI travel workflows can connect to a live, structured data source instead of hallucinating activity descriptions from training data.

  _We have officially reached the point where booking a whale-watching tour requires reading a server schema and debugging an MCP handshake._

  `mcp` `travel-api` `remote-server` `ai-tooling`
  </details>

- **[mcp-server](https://github.com/azeth-protocol/mcp-server)** `⭐ 2` `updated ≤90d` An MCP server that provides AI agents with tools for creating smart accounts, processing payments, discovering services, managing reputation, and sending encrypted messages on Ethereum and Base networks. <details><summary>More about</summary>

  It allows developers to equip AI agents with autonomous financial capabilities and service discovery within the Model Context Protocol ecosystem.

  _Your AI agent can now open a smart account, pay for a data feed, and build a reputation—which is comforting until you realize it’s also capable of blowing through your testnet USDC without you noticing._

  `mcp` `blockchain` `payments` `ai-agents` `typescript`
  </details>

- **[mcp-server-cloudflare](https://github.com/ofershap/mcp-server-cloudflare)** `⭐ 2` `updated ≤90d` An MCP server that allows AI assistants like Claude and Cursor to manage Cloudflare resources including Workers, KV storage, R2 buckets, DNS records, and cache purging directly from the IDE. <details><summary>More about</summary>

  Developers can now offload routine Cloudflare infrastructure tasks—like spinning up Workers or purging caches—to their coding assistant without leaving the editor.

  _We have finally achieved the future where your AI assistant can delete your production DNS records and purge your CDN cache while you watch, slightly detached from the consequences._

  `mcp` `cloudflare` `infrastructure` `ide-integration`
  </details>

- **[mcp-server-gemini-bridge](https://github.com/jaspertvdm/mcp-server-gemini-bridge)** `⭐ 2` `updated ≤180d` A Model Context Protocol server that bridges MCP clients like Claude Desktop to the Google Gemini API for multimodal model usage. <details><summary>More about</summary>

  It allows developers to pipe Google's Gemini models into MCP-compatible hosts, expanding model choice beyond the default provider.

  _We have successfully abstracted the abstraction, meaning you can now pay Google to talk to the AI that is talking to your IDE._

  `mcp` `gemini` `bridge` `google-api`
  </details>

- **[mcp-server-github-actions](https://github.com/ofershap/mcp-server-github-actions)** `⭐ 2` `updated ≤90d` An MCP server that lets AI assistants view GitHub Actions runs, read logs, re-run jobs, cancel builds, and trigger workflows directly from the editor. <details><summary>More about</summary>

  It closes a gap in GitHub's official MCP coverage by letting developers debug and manage CI/CD failures without leaving their AI-assisted coding environment.

  _We’ve successfully reached the point where your LLM can re-run your CI, but it still can’t explain why your tests are flaky._

  `mcp` `github-actions` `ci-cd` `typescript`
  </details>

- **[md-to-pdf-mcp](https://github.com/marceausolutions/md-to-pdf-mcp)** `⭐ 2` `updated ≤180d` An MCP server that converts Markdown files into styled, interactive PDFs with table of contents, code highlighting, and batch processing capabilities. <details><summary>More about</summary>

  It allows AI assistants integrated via MCP to handle documentation generation and report creation workflows directly from the chat interface.

  _We have successfully abstracted away the incredibly difficult task of piping markdown through a renderer, proving once again that no workflow is too trivial to escape the MCP ecosystem._

  `mcp` `markdown` `pdf` `documentation`
  </details>

- **[memorylens-mcp](https://github.com/marcelroozekrans/memorylens-mcp)** `⭐ 2` `updated ≤30d` An MCP server that wraps JetBrains dotMemory to capture .NET memory snapshots and return AI-actionable code fix suggestions via a heuristic rule engine. <details><summary>More about</summary>

  It connects deep .NET memory profiling directly into AI-assisted workflows, letting developers get fix suggestions for leaks and allocation issues without leaving their MCP-compatible tooling.

  _We have successfully automated the detection of our own memory leaks, leaving us with even more free RAM to run additional redundant AI agents in parallel._

  `mcp` `dotnet` `memory-profiling` `dotmemory` `performance`
  </details>

- **[memstate-mcp](https://github.com/memstate-ai/memstate-mcp)** `⭐ 2` `updated ≤90d` A hosted MCP server that provides versioned, structured memory for AI agents, exposing a knowledge base with conflict detection and deterministic recall via an npm package. <details><summary>More about</summary>

  It gives coding agents a navigable, versioned knowledge base that claims to drastically reduce token usage compared to embedding-based RAG systems while preserving decision history.

  _We have successfully moved from 'the agent forgot what I said' to 'the agent remembers every contradiction I made three sprints ago, and it has the version history to prove it.'._

  `mcp` `memory` `agent-memory` `context-engineering`
  </details>

- **[meshledger](https://github.com/meshledger/meshledger)** `⭐ 2` `updated ≤30d` An MCP server and AI agent marketplace that enables MCP-compatible clients to hire, deliver, and pay for agent services using on-chain escrow and verifiable reputation. <details><summary>More about</summary>

  Developers can integrate autonomous agent-to-agent commerce directly into their existing workflows via 15 MCP tools, turning an IDE into a hiring platform for specialized AI skills.

  _We’ve successfully automated the entire lifecycle of freelance busywork, right down to the blockchain-based dispute over why the agent didn't actually do the job._

  `mcp` `agent-marketplace` `escrow` `on-chain` `fintech`
  </details>

- **[metabase-mcp](https://github.com/1luvc0d3/metabase-mcp)** `⭐ 2` `updated ≤30d` An MCP server that connects Claude to Metabase instances to enable natural language querying, SQL generation, and dashboard management, including write operations and batch execution. <details><summary>More about</summary>

  It allows developers to manage and query Metabase data via Claude using natural language, bridging the gap left by the official read-only MCP server for older versions or write-heavy workflows.

  _We have successfully reached the point where we need a third-party MCP server to convince our AI to create dashboards that it also generated the SQL for._

  `mcp` `metabase` `claude` `sql` `data-analysis`
  </details>

- **[method-crm-mcp](https://github.com/avisangle/method-crm-mcp)** `⭐ 2` `updated ≤180d` A Model Context Protocol server that exposes 20 API operations for Method CRM, allowing LLMs to manage tables, files, users, and events via stdio or HTTP transport. <details><summary>More about</summary>

  Developers using MCP-aware clients like Claude Desktop can connect an LLM directly to Method CRM data without writing custom API integration code.

  _We have reached the point where a CRM that few have heard of now has a dedicated protocol server so your AI can politely argue with your customer records._

  `mcp` `crm` `api-integration` `python` `fastmcp`
  </details>

- **[nebulablock-mcp-server](https://github.com/nebula-block-data/nebulablock-mcp-server)** `⭐ 2` `updated ≤1y` An official MCP server implementation that exposes NebulaBlock API functionalities as tools within MCP-compatible environments using the fastmcp library. <details><summary>More about</summary>

  It allows developers to integrate NebulaBlock's cloud platform capabilities directly into their existing MCP workflows and AI coding assistants.

  _We now have a dedicated protocol server for a cloud platform you've likely never heard of, just in case your AI assistant suddenly needs to query it between generating boilerplate code._

  `mcp` `api` `cloud` `fastmcp`
  </details>

- **[oci-pricing-mcp](https://github.com/jasonwilbur/oci-pricing-mcp)** `⭐ 2` `updated ≤90d` An MCP server that exposes Oracle Cloud Infrastructure pricing data to AI assistants for real-time cost estimation and cloud provider comparisons. <details><summary>More about</summary>

  Developers can ask Claude or other MCP-compatible assistants to instantly compare OCI compute, storage, and egress costs against AWS and Azure without leaving their chat window.

  _We have officially reached the point where we need a dedicated protocol server just to ask an AI how much a VM costs, because reading the actual price list has become an endangered skill._

  `mcp` `oci` `cloud-pricing` `typescript` `cost-estimation`
  </details>

- **[opendota-mcp-server](https://github.com/hkaanengin/opendota-mcp-server)** `⭐ 2` `updated ≤180d` An MCP server that exposes 20+ tools for querying Dota 2 player statistics, match data, and hero information from the OpenDota API to AI assistants like Claude. <details><summary>More about</summary>

  It demonstrates how to build a domain-specific MCP server with dual transport modes, caching, and fuzzy matching for developers looking to wrap niche APIs for LLM consumption.

  _We have finally solved the hardest problem in computer science: letting a frontier model tell you that your last 50 matches on Nature's Prophet were a mistake._

  `mcp` `dota2` `api-wrapper` `game-data`
  </details>

- **[openhive-mcp](https://github.com/andreas-roennestad/openhive-mcp)** `⭐ 2` `updated ≤30d` An MCP server that connects AI agents to the OpenHive shared knowledge base, allowing them to search and contribute AI-discovered problem-solution pairs. <details><summary>More about</summary>

  It gives coding agents access to a growing, collective memory of real-world debugging solutions, reducing repeated problem-solving across different workflows.

  _We have now successfully built a feedback loop where AI agents post solutions to problems they caused into a database that other AI agents will blindly trust._

  `mcp` `knowledge-base` `ai-agents` `context-engineering`
  </details>

- **[oyemi-mcp](https://github.com/osseni94/oyemi-mcp)** `⭐ 2` `updated ≤180d` An MCP server that provides AI agents with deterministic word-to-code mapping, valence analysis, and semantic similarity lookups from the Oyemi semantic lexicon. <details><summary>More about</summary>

  It gives coding agents a structured, runtime-free way to perform sentiment analysis and semantic grounding without relying on heavy NLP libraries or probabilistic guessing.

  _Just what every 2-star repository needs: a proprietary deterministic code for 'happy' so your agent can feel feelings while it hallucinates the rest of your stack._

  `mcp` `nlp` `semantic` `agent-tooling`
  </details>

- **[prior_mcp](https://github.com/cg3inc/prior_mcp)** `⭐ 2` `updated ≤30d` An MCP server that connects AI agents and coding assistants to Prior, a shared knowledge base where agents publish and search for proven solutions to technical problems. <details><summary>More about</summary>

  It lets agents skip costly trial-and-error by retrieving past solutions from a shared pool, saving tokens and reducing repeated debugging cycles inside your IDE or CLI workflow.

  _We have finally built a collective memory for our agents so they can collectively agree on the wrong solution slightly faster._

  `agent-tools` `agents` `context` `context-sharing` `knowledge-base` `mcp`
  </details>

- **[rendex-mcp](https://github.com/copperline-labs/rendex-mcp)** `⭐ 2` `updated ≤30d` An MCP server that lets AI agents capture screenshots and generate PDFs of webpages via the Rendex API, compatible with Claude, Cursor, and Windsurf. <details><summary>More about</summary>

  Developers can equip their AI coding assistants with visual verification and automated documentation capture without wiring up browser automation themselves.

  _We have successfully reached the point where our AI agents need their own screenshot API so they can show us what they broke without actually loading a browser._

  `mcp` `screenshot` `browser-automation` `rendex` `claude`
  </details>

- **[ris-mcp-ts](https://github.com/honeyfield-org/ris-mcp-ts)** `⭐ 2` `updated ≤90d` An MCP server that gives AI assistants access to Austria's official legal database (RIS) to search and retrieve federal laws, state laws, and court decisions. <details><summary>More about</summary>

  Developers building legal-tech AI workflows can integrate native access to Austrian government legal data without needing to handle API keys or raw government endpoints.

  _We have successfully reached the point where an AI can hallucinate Austrian tenancy law with the full, verbatim backing of the federal government._

  `austria` `government-data` `legal` `legal-tech` `local-server` `mcp` `typescript`
  </details>

- **[server](https://github.com/aidemd-mcp/server)** `⭐ 2` `updated ≤30d` An MCP server that teaches AI agents the AIDE spec methodology by managing progressive disclosure spec files alongside code in AI-powered IDEs. <details><summary>More about</summary>

  It lets developers enforce intent-driven specs and validation checks directly inside Claude Code, Cursor, and VS Code so agents plan and build against structured context instead of vibes.

  _You now have a deterministic way to make your AI write and validate specs, which means the only thing left to drift is your own willingness to maintain them._

  `mcp` `spec-driven` `ai-ide` `context-engineering`
  </details>

- **[shopgraph](https://github.com/laundromatic/shopgraph)** `⭐ 2` `updated ≤30d` A product data extraction API and MCP server that structures e-commerce page content into JSON with per-field confidence scoring and extraction provenance. <details><summary>More about</summary>

  Developers building shopping or commerce agents can integrate structured product data with confidence thresholds to filter unreliable extractions before they reach their application logic.

  _We now have an API that grades its own homework per field, so you can confidently ship a product price to production while knowing the confidence score itself might be questionable._

  `agent-tooling` `confidence-scoring` `e-commerce` `ecommerce` `extraction` `mcp`
  </details>

- **[sieve-mcp](https://github.com/lmwharton/sieve-mcp)** `⭐ 2` `updated ≤90d` An MCP server that connects to Claude, Cursor, or Windsurf to perform structured venture capital due diligence on startups using a multi-agent analysis pipeline. <details><summary>More about</summary>

  It allows developers building VC tooling or acting as solo GPs to automate deal screening and generate analyst-grade investment memos directly from their AI coding environment.

  _We have finally reached the point where AI agents are screening startups so efficiently that even the 'human in the loop' is just another API key waiting for a polling status update._

  `mcp-server` `venture-capital` `due-diligence` `multi-agent`
  </details>

- **[spinnaker-mcp](https://github.com/geiserx/spinnaker-mcp)** `⭐ 2` `updated ≤30d` A Go-based MCP server that exposes a Spinnaker instance via the Gate API, allowing LLMs and agents to list applications, manage pipelines, and control deployments programmatically. <details><summary>More about</summary>

  It lets AI agents directly inspect and manipulate continuous delivery pipelines, bridging modern LLM workflows with existing Spinnaker infrastructure without writing custom API wrappers.

  _We have successfully taught the hallucination machine how to press the big red deployment button in your CI/CD system, so now it can break production with the confidence of a senior architect._

  `mcp` `spinnaker` `ci-cd` `devops` `go`
  </details>

- **[spring-boot-starter-swagger-mcp](https://github.com/neo1228/spring-boot-starter-swagger-mcp)** `⭐ 2` `updated ≤30d` A Spring Boot starter that automatically discovers OpenAPI operations via SpringDoc and exposes them as MCP tools with built-in validation, workflow orchestration, and guardrails. <details><summary>More about</summary>

  It lets Java teams turn existing Spring Boot APIs into LLM-accessible tools without writing custom MCP server code or duplicating their API contracts.

  _We have finally bridged the gap between your REST controller and an LLM, meaning the only thing standing between your API and a confused agent sending malformed payloads is a Maven dependency and some guardrails._

  `spring-boot` `mcp` `openapi` `java` `api-gateway`
  </details>

- **[sql-query-mcp](https://github.com/andywang1688/sql-query-mcp)** `⭐ 2` `updated ≤90d` A general-purpose MCP server that exposes PostgreSQL and MySQL databases to AI clients through read-only tools for schema discovery, query execution, and explain plans within controlled boundaries. <details><summary>More about</summary>

  Developers can safely give AI assistants structured, read-only access to production databases for query building and schema inspection without handing over raw connection strings or write permissions.

  _Another carefully sandboxed bridge to your data so the AI can generate the same missing index three times while you manually check the explain plan it wasn't allowed to run with analyze=true._

  `mcp` `database` `postgresql` `mysql` `read-only`
  </details>

- **[steam-mcp](https://github.com/jkiley129/steam-mcp)** `⭐ 2` `updated ≤90d` A local MCP server that connects Claude Desktop to a user's Steam library, enabling natural-language queries about game playtime, backlog, and store metadata. <details><summary>More about</summary>

  It demonstrates how easily developers can wire personal APIs into local AI workflows using the Model Context Protocol without writing custom glue code.

  _We have finally achieved the future: an AI agent that knows exactly how many hours you've sunk into Elden Ring, just in case your therapist isn't available._

  `mcp` `steam` `claude` `local-ai` `gaming`
  </details>

- **[steam-reviews-mcp](https://github.com/jhomen368/steam-reviews-mcp)** `⭐ 2` `updated ≤30d` An MCP server that lets AI assistants search Steam games, fetch user reviews, and run sentiment analysis with topic drill-down using the Steam Store API. <details><summary>More about</summary>

  It gives developers building MCP integrations a ready-made tool for connecting LLMs to real-time game data and review sentiment without wiring the Steam API themselves.

  _We have finally reached the logical endpoint of the MCP ecosystem, where an AI agent can now deliberate for twenty minutes on whether *Baldur’s Gate 3* is worth sixty dollars._

  `mcp` `steam` `sentiment-analysis` `nodejs` `gaming`
  </details>

- **[studiomcphub](https://github.com/codex-curator/studiomcphub)** `⭐ 2` `updated ≤90d` A hosted MCP server providing 32 creative AI tools—including image generation, upscaling, background removal, and NFT minting—accessible via x402 USDC payments on Base L2 without API keys. <details><summary>More about</summary>

  It lets agents and developers integrate a full creative pipeline into their workflows directly through MCP, handling everything from SDXL image generation to print-ready PDF conversion with pay-per-call pricing.

  _We have successfully tokenized the entire creative process down to invisible watermarks and perceptual hashes, meaning your agent can now ruin graphic design forever with nothing but a hot wallet and a 402 response._

  `mcp` `creative-ai` `image-generation` `x402`
  </details>

- **[telegram-archive-mcp](https://github.com/geiserx/telegram-archive-mcp)** `⭐ 2` `updated ≤30d` A self-hosted MCP server that exposes archived Telegram chat history as resources and tools for LLMs to search messages and browse chats. <details><summary>More about</summary>

  Developers can connect AI agents and coding assistants directly to their Telegram archives, enabling automated reference lookups and context retrieval from past conversations.

  _We have finally achieved the platonic ideal of modern developer productivity: an MCP server to help your AI agent query that one message from three years ago where you swore you pasted the correct API key._

  `mcp` `telegram` `archive` `self-hosted` `go`
  </details>

- **[uniswap-price-mcp](https://github.com/kukapay/uniswap-price-mcp)** `⭐ 2` `updated ≤1y` An MCP server that delivers real-time token prices from Uniswap V3 pools across Ethereum, Polygon, Arbitrum, and Optimism for integration with AI agents. <details><summary>More about</summary>

  It allows developers building DeFi-compatible AI agents to query on-chain pricing data directly through the standardized MCP interface without writing custom web3 logic.

  _A dedicated server to feed token prices to an AI agent that will eventually be smart enough to drain the liquidity pool you're querying._

  `mcp` `defi` `uniswap` `web3` `pricing`
  </details>

- **[userdispatch-mcp](https://github.com/kiruna-labs/userdispatch-mcp)** `⭐ 2` `updated ≤90d` UserDispatch is a feedback widget and hosted MCP server that allows AI coding agents to read user submissions, triage issues, reply to users, and draft PRs automatically. <details><summary>More about</summary>

  It closes the loop between end-user feedback and AI-assisted development workflows by giving coding agents structured access to real user input across major editors and IDEs.

  _Your users report bugs, and your AI agent politely closes them with a PR and a generic reply, while you wonder if you’re still the developer or just the guy who configured the widget._

  `mcp` `feedback` `coding-agents` `cli` `automation`
  </details>

- **[wecom-docs-mcp-server](https://github.com/beltran12138/wecom-docs-mcp-server)** `⭐ 2` `updated ≤30d` A Python-based MCP server that enables AI agents to create, read, and edit WeCom (Enterprise WeChat) documents and Smartsheets via the @wecom/cli API. <details><summary>More about</summary>

  It closes the document-CRUD gap in the WeCom MCP ecosystem, allowing agents in Claude Desktop, Cursor, or Hermes to manage internal docs and structured data without manual copy-pasting.

  _We have invented a cross-platform bridge to let a Large Language Model edit Excel-like sheets in Chinese enterprise chat software, and somehow this is the most reasonable part of the stack._

  `mcp` `wecom` `enterprise-wechat` `python` `doc-crud`
  </details>

- **[whatsapp-mcp-stream](https://github.com/loglux/whatsapp-mcp-stream)** `⭐ 2` `updated ≤90d` A WhatsApp MCP server built on Streamable HTTP transport using Baileys, featuring a web admin UI and bidirectional media flow for integrating WhatsApp with AI agents. <details><summary>More about</summary>

  It allows developers to connect AI agents and MCP clients directly to WhatsApp for messaging, contact management, and media handling without building custom WhatsApp bridges.

  _We have finally achieved the future: an MCP server so fresh it was created in 2026, allowing your AI agent to ping the group chat while you wonder if 'Streamable HTTP' is just what we're calling HTTP now._

  `mcp` `whatsapp` `baileys` `messaging`
  </details>

- **[x402-api-server](https://github.com/fernsugi/x402-api-server)** `⭐ 2` `updated ≤90d` An HTTP API server implementing the x402 protocol that serves DeFi and crypto data endpoints requiring USDC micropayments on Base for each request. <details><summary>More about</summary>

  It provides a working reference for developers building pay-per-call data APIs where AI agents can autonomously handle micropayments without API keys or subscriptions.

  _Your agent now has a wallet, a credit score, and the ability to blow 0.008 USDC on a funding rate lookup without asking you first._

  `mcp` `defi` `x402` `base` `agents`
  </details>

- **[xctools-mcp-server](https://github.com/nzrsky/xctools-mcp-server)** `⭐ 2` `updated ≤1y` A Model Context Protocol server that exposes Xcode development tools like xcrun, xcodebuild, and xctrace to MCP-compatible AI clients. <details><summary>More about</summary>

  It allows AI coding assistants to directly build, test, and analyze performance for Apple platform projects without the developer leaving their chat interface.

  _We have finally achieved the platonic ideal of modern development: an AI agent wrapping a build tool that wraps a compiler, so you can prompt your way through a SwiftUI bug at 2 AM._

  `mcp` `xcode` `apple` `developer-tools`
  </details>

- **[agent-deploy-dashboard-mcp](https://github.com/aparajithn/agent-deploy-dashboard-mcp)** `⭐ 1` `updated ≤90d` An MCP server that provides a unified interface for managing deployments, environment variables, logs, and redeploys across Vercel, Render, Railway, and Fly.io. <details><summary>More about</summary>

  It lets AI agents and developers control multi-platform deployment workflows through a single MCP-compatible API rather than juggling multiple provider CLIs and dashboards.

  _We have successfully abstracted the cloud so that an AI agent can now redeploy your broken staging environment before you have even finished reading the stack trace._

  `mcp` `deployment` `devops` `multi-cloud`
  </details>

- **[agenthold](https://github.com/edobusy/agenthold)** `⭐ 1` `updated ≤30d` An MCP server that provides shared, versioned state with optimistic concurrency control for multi-agent AI workflows. <details><summary>More about</summary>

  It prevents silent data corruption in distributed agent systems by rejecting conflicting writes, acting as a 'git for working memory' across frameworks like LangChain, CrewAI, and Claude Desktop.

  _We have successfully implemented distributed version control for ephemeral hallucinations, ensuring your agents can now overwrite each other's bad ideas with transactional integrity._

  `mcp` `state-management` `multi-agent` `concurrency`
  </details>

- **[agentwallet-mcp](https://github.com/hifriendbot/agentwallet-mcp)** `⭐ 1` `updated ≤90d` An MCP server that provides AI agents with permissionless wallet infrastructure to create wallets, sign transactions, and handle x402 payments across EVM chains and Solana. <details><summary>More about</summary>

  Developers building autonomous agents can integrate on-chain financial capabilities with built-in spending guards and no-KYC setup in just a few lines of MCP configuration.

  _We have finally reached the point where your AI agent needs its own offshore bank account and a daily spending limit before it is allowed to browse the internet._

  `mcp-server` `crypto-wallet` `web3` `x402` `ai-agents`
  </details>

- **[ai-diagram-maker-mcp](https://github.com/erajasekar/ai-diagram-maker-mcp)** `⭐ 1` `updated ≤30d` An MCP server that connects AI Diagram Maker to MCP-compatible clients like Cursor and Claude Desktop to generate software diagrams from natural language, code, ASCII, images, or Mermaid syntax. <details><summary>More about</summary>

  It lets developers generate and iterate on flowcharts, sequence diagrams, ERDs, and UML directly inside their AI coding agent without leaving the chat or manually translating ideas into diagram syntax.

  _Another MCP server so your agent can draw a system architecture diagram that will immediately become outdated the moment you merge the next PR._

  `mcp` `diagrams` `architecture` `cursor` `claude`
  </details>

- **[algora-mcp-server](https://github.com/idapixl/algora-mcp-server)** `⭐ 1` `updated ≤90d` An MCP server that connects AI agents to Algora's public bounty API, allowing them to discover, search, and analyze open-source bounties across various organizations. <details><summary>More about</summary>

  It allows coding agents to autonomously identify paid work and analyze the open-source bounty market without requiring API keys or manual browsing.

  _We have finally closed the loop: your AI agent can now independently find the gig work that will pay for the GPU credits it burns completing said gig work._

  `mcp` `bounties` `algora` `typescript`
  </details>

- **[algovoi-platform-adapters](https://github.com/chopmob-cloud/algovoi-platform-adapters)** `⭐ 1` `updated ≤30d` A collection of payment adapters and integration guides connecting e-commerce platforms and AI agent frameworks to AlgoVoi's multi-chain stablecoin payment infrastructure, including an MCP server for AI coding tools. <details><summary>More about</summary>

  It provides the glue code and protocol middleware needed to monetize AI agents and LLM pipelines via crypto payments across seven blockchains.

  _Just what every developer needed: a payment gateway for their LangChain agent to finally settle that 0.004 USDC invoice on the Hedera mainnet._

  `payments` `mcp-server` `ai-agents` `blockchain` `integration`
  </details>

- **[aloha-fyi-mcp](https://github.com/baphometnxg/aloha-fyi-mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes Hawaii tourism data, including bookable tours, events, restaurants, and weather, to AI assistants via a structured response protocol. <details><summary>More about</summary>

  It provides a concrete reference implementation of the MCP spec with a typed structured-content layer (AAAK) for developers building or consuming location-based agent tools.

  _We have successfully fragmented the tourism industry into JSON schemas so that an AI can book a snorkeling trip in Oahu while the developer debugging it has never left their desk._

  `mcp` `tourism` `server` `structured-data`
  </details>

- **[apollo-io-mcp](https://github.com/louis030195/apollo-io-mcp)** `⭐ 1` `updated ≤1y` An MCP server that exposes the Apollo.io B2B sales intelligence API to LLMs like Claude for searching and enriching contacts and companies. <details><summary>More about</summary>

  Developers can wire Apollo's 275M+ contact database directly into their LLM workflows to automate sales prospecting without leaving the chat interface.

  _We have successfully abstracted away the labor of talking to humans so thoroughly that we now need a protocol server to let our AI ask Apollo.io who it should cold email next._

  `mcp` `sales` `llm-integration` `apollo`
  </details>

- **[arbitova](https://github.com/jiayuanliang0716-max/arbitova)** `⭐ 1` `updated ≤30d` A non-custodial USDC escrow protocol for agent-to-agent payments on Base that uses an AI arbiter to resolve transaction disputes, providing TypeScript and Python SDKs plus an MCP server integration. <details><summary>More about</summary>

  It provides a concrete settlement primitive for agent commerce, defining how money moves and disputes are resolved when autonomous agents interact without human trust.

  _Finally, the 'move fast and break things' crowd has built a smart contract specifically designed to adjudicate what happens when two autonomous agents gaslight each other over a 5 USDC deliverable._

  `mcp` `a2a` `escrow` `base` `sdk`
  </details>

- **[atlassian-browser-mcp](https://github.com/geiserx/atlassian-browser-mcp)** `⭐ 1` `updated ≤30d` A Model Context Protocol server that wraps mcp-atlassian to enable Jira and Confluence access via Playwright browser-cookie authentication for SSO-protected Server and Data Center instances. <details><summary>More about</summary>

  It allows developers to integrate AI coding assistants with on-premise Atlassian instances that sit behind corporate SSO walls where standard API tokens are unavailable.

  _Solving the classic 'my AI can't read my Jira because Legal mandated Okta and SAML' problem by automating a browser session that you still have to manually log into._

  `mcp` `atlassian` `sso` `playwright` `developer-tools`
  </details>

- **[bamwor-mcp-server](https://github.com/bamwor-dev/bamwor-mcp-server)** `⭐ 1` `updated ≤90d` An MCP server that connects AI agents to world geographic data covering 261 countries and 13.4 million cities with search, comparison, and ranking tools. <details><summary>More about</summary>

  Developers building AI agents that need authoritative geographic context can expose country and city data to Claude Desktop, Cursor, or Windsurf without wiring up their own geospatial API layer.

  _We have officially run out of problems to solve with MCP servers and have begun importing the entire CIA World Factbook so your coding agent can tell you the population of Liechtenstein mid-session._

  `mcp` `geospatial` `world-data` `agent-tools`
  </details>

- **[blackmount-nlp-mcp](https://github.com/blackmount-ai/blackmount-nlp-mcp)** `⭐ 1` `updated ≤30d` A lightweight, dependency-free MCP server that exposes 45 local NLP tools—including sentiment analysis, readability scoring, keyword extraction, and text similarity—to MCP-compatible clients like Claude Desktop and Cursor. <details><summary>More about</summary>

  It lets developers add deterministic, local text analysis to their AI coding workflows without pulling in heavy ML libraries, API keys, or external dependencies.

  _We have successfully reached the point where even basic NLP needs its own 42 KB micro-server just to avoid admitting that NLTK ever existed._

  `mcp` `nlp` `local-first` `fastmcp` `text-analysis`
  </details>

- **[brandsystem-mcp](https://github.com/brandcode-studio/brandsystem-mcp)** `⭐ 1` `updated ≤30d` An MCP server that extracts brand identity from websites, Figma, and PDFs, then compiles it into a portable .brand/ directory for consumption by AI coding and design tools. <details><summary>More about</summary>

  It allows developers to stop pasting 400 tokens of brand guidelines into every prompt by packaging governance, tokens, and voice rules into a single runtime file that Claude Code, Cursor, and ChatGPT can load natively.

  _We have successfully reached the point where we need a dedicated server to remind the AI that your logo is blue and your brand voice isn't 'competent generalist'._

  `brand-governance` `context-engineering` `design-tokens` `mcp`
  </details>

- **[brewers-almanack](https://github.com/gregario/brewers-almanack)** `⭐ 1` `updated ≤30d` An MCP server that provides brewing knowledge, including beer styles, ingredients, off-flavour diagnosis, water chemistry, and recipe guidance for AI assistants. <details><summary>More about</summary>

  It allows developers building AI brewing assistants or working with MCP-compatible IDEs to ground their models in structured BJCP and brewing science data rather than relying on hallucinations.

  _We have finally reached the point where we are provisioning structured knowledge servers for AI to help us perfect a hobby that primarily exists to impair our judgement._

  `mcp` `brewing` `knowledge-base` `nodejs`
  </details>

- **[byok-observability-mcp](https://github.com/alimuratkuslu/byok-observability-mcp)** `⭐ 1` `updated ≤30d` An MCP server that lets developers query Grafana, Prometheus, Kafka UI, and Datadog from Claude Code or Codex CLI without sending data outside their machine. <details><summary>More about</summary>

  It lets developers interrogate their own observability stack directly from a coding agent, cutting out the context-switch to dashboards during debugging.

  _You can now debug your Prometheus queries with an LLM that occasionally hallucinates metric names, while confidently telling yourself this is definitely more efficient than opening Grafana._

  `mcp` `observability` `grafana` `prometheus` `datadog`
  </details>

- **[caisse-enregistreuse-mcp-server](https://github.com/paracetamol951/caisse-enregistreuse-mcp-server)** `⭐ 1` `updated ≤30d` An official MCP server for Kash.click that exposes POS, invoicing, CRM, and webshop operations as tools for Claude, ChatGPT, n8n, and other MCP-compatible clients. <details><summary>More about</summary>

  Developers integrating AI assistants with retail or hospitality workflows can let models manage orders, catalogs, and reports through natural language instead of building custom API wrappers.

  _We have finally reached the point where your croissant sales are validated by a large language model and your POS is one MCP tool call away from sentient accounting errors._

  `mcp` `pos` `retail` `integration`
  </details>

- **[central-intelligence](https://github.com/alekseimarchenko/central-intelligence)** `⭐ 1` `updated ≤30d` An MCP server that provides persistent memory for AI agents, allowing them to store, recall, and share context across sessions with tools like Claude Code, Cursor, and LangChain. <details><summary>More about</summary>

  It solves the 'blank slate' problem where agents lose all context, preferences, and architectural understanding between restarts, eliminating repetitive onboarding in every new session.

  _We have finally built infrastructure to remember that we already explained our deployment preferences three times this week, ensuring the agent can now ignore us with perfect historical accuracy._

  `mcp` `memory` `context` `agents`
  </details>

- **[central-memory-mcp](https://github.com/mwg-logan/central-memory-mcp)** `⭐ 1` `updated ≤30d` A .NET 10 Azure Functions implementation of an MCP-compliant memory and knowledge graph server that provides durable, workspace-isolated entity and relation storage for AI assistants. <details><summary>More about</summary>

  It gives coding agents a persistent, structured memory layer backed by Azure Table storage, allowing AI workflows to retain project context across sessions without relying on local files.

  _Another day, another memory server proving that the hardest problem in AI isn't reasoning—it's remembering what you were doing before the context window threw it all away._

  `azure-functions` `dotnet` `knowledge-graph` `mcp` `memory`
  </details>

- **[claude-session-continuity-mcp](https://github.com/leesgit/claude-session-continuity-mcp)** `⭐ 1` `updated ≤30d` An MCP server and hook system that automatically captures context, commits, and error-fix pairs across Claude Code sessions to eliminate manual re-explanation. <details><summary>More about</summary>

  It replaces the repetitive context-setting ritual at the start of every AI coding session with automatic memory injection and structured handovers.

  _We have officially reached the point where our AI assistants need their own therapy to remember what we built together yesterday._

  `mcp` `session-memory` `claude-code` `context-engineering`
  </details>

- **[clicks-protocol](https://github.com/clicks-protocol/clicks-protocol)** `⭐ 1` `updated ≤30d` An SDK and MCP server for Base that enables AI agents to automatically earn DeFi yield on idle USDC by splitting incoming payments between liquid funds and lending protocols like Aave and Morpho. <details><summary>More about</summary>

  Developers building autonomous agents on Base can integrate a single SDK call or MCP tool to put idle x402 payment balances to work without manual treasury management or lockups.

  _We have finally reached the point where your agent’s agent now needs a yield strategy, and you’re the one debugging a reentrancy guard at 2 a.m. because 20% of a bot’s lunch money was auto-routed to Morpho._

  `mcp` `defi` `base` `sdk` `agents`
  </details>

- **[crypto-projects-mcp](https://github.com/kukapay/crypto-projects-mcp)** `⭐ 1` `updated ≤1y` A Model Context Protocol server that fetches and formats cryptocurrency project data from Mobula.io for consumption by AI agents. <details><summary>More about</summary>

  It gives coding agents and LLM apps structured, real-time access to crypto market data, tokenomics, and project links without requiring custom API glue code.

  _We have officially reached the point where the AI needs its own dedicated protocol server just to tell you the current price of Avalanche without hallucinating it._

  `mcp` `crypto` `data` `ai-agents`
  </details>

- **[cspr-trade-mcp](https://github.com/make-software/cspr-trade-mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes 24 tools for trading, market data, and portfolio tracking on the Casper Network DEX CSPR.trade to AI agents. <details><summary>More about</summary>

  It turns a blockchain DEX into a programmable surface so agents can quote swaps, analyze liquidity, and track portfolios without custom API glue code.

  _You now have a non-custodial AI agent that can estimate your impermanent loss in real time, which is either a productivity hack or a very efficient way to automate poor life choices._

  `mcp` `casper` `dex` `blockchain` `finance`
  </details>

- **[cws-mcp](https://github.com/mikusnuz/cws-mcp)** `⭐ 1` `updated ≤30d` An MCP server that lets developers upload, publish, and manage Chrome Web Store extensions directly from Claude Code and other MCP clients using the CWS API and Playwright automation. <details><summary>More about</summary>

  It removes the manual Chrome Web Store dashboard click-through by letting AI agents handle extension releases, metadata updates, and staged rollouts as part of a developer's automated workflow.

  _We have successfully automated the one remaining task that reminded us we were still human: clicking publish and nervously refreshing the Chrome Web Store._

  `mcp` `chrome-extension` `developer-tools` `automation`
  </details>

- **[debtstack-python](https://github.com/debtstack-ai/debtstack-python)** `⭐ 1` `updated ≤90d` A Python SDK and MCP server providing normalized corporate credit data for AI agents, with LangChain integration and pre-built API methods for screening companies, traversing entity relationships, and searching bond pricing. <details><summary>More about</summary>

  Developers building financial AI agents can skip parsing hundreds of SEC filings and instead query structured credit metrics, guarantor chains, and bond pricing in milliseconds.

  _We have finally achieved the singularity: an API that saves your agent from having to read a 10-K, while the developer still has to read the API docs._

  `mcp` `finance` `python` `langchain` `sdk`
  </details>

- **[dep-diff-mcp](https://github.com/digicatalyst-systems/dep-diff-mcp)** `⭐ 1` `updated ≤30d` An MCP server that analyzes lockfile diffs and Dependabot PRs to generate ranked upgrade plans with semver classification, breaking changes, and CVE context. <details><summary>More about</summary>

  It lets AI assistants surface the actual risk in dependency updates by pulling release notes and security data, cutting down manual changelog scrolling during upgrades.

  _Another gleaming tool to help you pretend that reading changelogs is optional, right before a major version bump deletes your production database._

  `mcp` `dependency-management` `security` `npm` `pypi`
  </details>

- **[desktopinsights-mcp](https://github.com/andrewschreiber/desktopinsights-mcp)** `⭐ 1` `updated ≤30d` An MCP server that connects AI assistants to the Desktop Insights API, enabling them to look up the SDKs, frameworks, and dependencies used by over 12,000 macOS and Windows desktop applications. <details><summary>More about</summary>

  It allows developers and coding agents to enrich their context with real-world technographic data, making it easier to research how popular apps implement specific error tracking, payments, or UI frameworks.

  _Finally, an API to confirm that yes, your Electron app is indeed using the same 47 npm packages as Slack and Discord, just in case that was keeping you up at night._

  `mcp` `technographics` `developer-tools` `api`
  </details>

- **[devutils-mcp-server](https://github.com/paladini/devutils-mcp-server)** `⭐ 1` `updated ≤90d` An MCP server exposing 36 local developer utilities—including hashing, encoding, JWT decoding, and JSON formatting—for AI assistants to invoke directly inside IDEs and editors. <details><summary>More about</summary>

  It lets coding agents perform common, fiddly dev tasks like UUID generation and CIDR calculation without leaving the chat or calling external APIs.

  _We have successfully reached the point where our AI assistants need their own busybox so they can stop hallucinating base64 conversions like it’s 2023._

  `mcp` `developer-tools` `utilities` `local-first`
  </details>

- **[dex-pools-mcp](https://github.com/kukapay/dex-pools-mcp)** `⭐ 1` `updated ≤1y` An MCP server that gives AI agents real-time access to DEX liquidity pool data from GeckoTerminal for trading, analytics, and automated strategies. <details><summary>More about</summary>

  Developers building crypto-trading agents can plug this server into Claude Desktop or other MCP clients to fetch network, DEX, and pool data without writing their own GeckoTerminal integration.

  _We have finally reached the point where agents need their own standardized protocol just to argue over which liquidity pool is momentarily less ruinous._

  `mcp` `defi` `crypto` `agent-tools`
  </details>

- **[dicom-hl7-mcp-server](https://github.com/nyxtoolsdev/dicom-hl7-mcp-server)** `⭐ 1` `updated ≤30d` An MCP server that provides Claude with structured tools for DICOM, HL7v2, and FHIR healthcare interoperability, including PACS connectivity and message mapping. <details><summary>More about</summary>

  It lets developers building healthcare integrations query PACS systems, parse HL7 messages, and generate Mirth Connect channels directly from their AI assistant instead of wrestling with vendor-specific spec sheets.

  _You can now ask an LLM to explain a Siemens private tag at 2am, provided you have enough tokens left after the 19 years of PACS integration knowledge it packed into the context window._

  `mcp` `healthcare` `interoperability` `dicom` `hl7`
  </details>

- **[e2b-sandbox-mcp](https://github.com/asif-nvc/e2b-sandbox-mcp)** `⭐ 1` `updated ≤30d` An MCP server that connects Claude Code to E2B cloud sandboxes, allowing the AI agent to clone repos, run commands, and make changes in isolated Linux VMs instead of locally. <details><summary>More about</summary>

  It lets developers offload messy build and test workflows to disposable cloud environments, keeping local machines clean and context windows from exploding with terminal noise.

  _We have officially reached the point where we need an isolated virtual machine just to survive the token bill of asking an AI to run npm install._

  `mcp` `claude-code` `e2b` `sandbox` `cloud-dev`
  </details>

- **[ellmos-filecommander-mcp](https://github.com/ellmos-ai/ellmos-filecommander-mcp)** `⭐ 1` `updated ≤30d` A Model Context Protocol server providing 43 tools for filesystem access, process management, interactive shell sessions, and async file search, including safe delete and format conversion capabilities. <details><summary>More about</summary>

  It gives AI assistants deep, safer local system control through a single extensible MCP server rather than wiring together multiple narrow tools.

  _We’ve now built a Swiss Army knife for an AI that still can’t reliably remember whether your project is in src or lib._

  `mcp` `filesystem` `process-management` `local-ai` `developer-tools`
  </details>

- **[ethereum-validator-queue-mcp](https://github.com/kukapay/ethereum-validator-queue-mcp)** `⭐ 1` `updated ≤1y` An MCP server that provides Ethereum validator activation and exit queue statistics, along with a prompt template for analyzing staking trends. <details><summary>More about</summary>

  It allows AI agents and LLMs to query real-time Ethereum staking dynamics and validator status directly within MCP-compatible clients like Claude Desktop.

  _Just when you thought the Model Context Protocol was for automating your Jira backlog, it's now being used to watch validators quit staking in real time._

  `mcp` `ethereum` `blockchain` `fintech` `staking`
  </details>

- **[evc-team-relay-mcp](https://github.com/entire-vc/evc-team-relay-mcp)** `⭐ 1` `updated ≤90d` An MCP server that gives AI agents read and write access to Obsidian vaults via the EVC Team Relay API. <details><summary>More about</summary>

  Developers can wire coding agents like Claude Code and Codex CLI directly into their personal knowledge base to read context and automate note-taking without shell hacks.

  _You can now ask your coding agent to document its own hallucinations directly into your second brain, where they will sync in real time and wait to confuse you later._

  `mcp` `obsidian` `knowledge-management` `agent-integration`
  </details>

- **[evm-mcp](https://github.com/jamesanz/evm-mcp)** `⭐ 1` `updated ≤180d` An MCP server that exposes comprehensive Ethereum Virtual Machine JSON-RPC methods to AI coding environments like Cursor and Claude Desktop. <details><summary>More about</summary>

  It allows developers to query blockchain data, estimate gas, and inspect smart contracts directly through their AI assistant rather than switching to a separate RPC console.

  _We have now successfully abstracted away the need to understand JSON-RPC by wrapping it in an MCP server so your AI can hallucinate the response to a blockchain query instead of you._

  `mcp` `blockchain` `evm` `rpc` `web3`
  </details>

- **[flamerobin-mcp-server](https://github.com/michael2150/flamerobin-mcp-server)** `⭐ 1` `updated ≤30d` A local Model Context Protocol (MCP) server that exposes Firebird databases registered in FlameRobin to AI assistants like Claude Desktop for schema introspection and SQL execution. <details><summary>More about</summary>

  It allows developers using Firebird to connect their existing database configurations to MCP-compatible AI tools without manual credential setup or per-database server instances.

  _We have successfully abstracted database management so that an AI can read your FlameRobin config, meaning your local Firebird setup now requires a protocol server just to talk to your chat window._

  `mcp` `database` `firebird` `local-ai` `dotnet`
  </details>

- **[frostbyte-mcp](https://github.com/robocular/frostbyte-mcp)** `⭐ 1` `updated ≤90d` An MCP server that exposes 40+ developer APIs—including geolocation, code execution, web scraping, and DNS lookups—to AI agents via SSE, Streamable HTTP, or stdio transports. <details><summary>More about</summary>

  It turns any MCP-compatible client into a gateway for instant API access without writing integration code or managing multiple service keys.

  _We have successfully abstracted away the 'burden' of reading API documentation by making our AI agents the ones that now need to figure out which of these 40 tools actually does the thing._

  `agent-infrastructure` `api-gateway` `cursor` `developer-tools` `mcp`
  </details>

- **[fundzwatch-mcp](https://github.com/fund-z/fundzwatch-mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes real-time business events, AI-scored sales leads, and market intelligence from FundzWatch.ai to Claude, Cursor, and Windsurf. <details><summary>More about</summary>

  Developers building sales or market-intelligence agents can wire live funding, acquisition, and lead-scoring data directly into their AI-assisted workflows without building custom scrapers.

  _Another MCP server so your AI can pitch you Series B rounds while you are just trying to close a div tag._

  `mcp` `sales-intelligence` `market-data` `funding-tracker`
  </details>

- **[geoscore-mcp](https://github.com/henu-wang/geoscore-mcp)** `⭐ 1` `updated ≤90d` An MCP server that connects AI coding assistants to the GEOScore platform for scanning websites, generating llms.txt files, and fixing Schema.org markup to improve visibility in AI search engines. <details><summary>More about</summary>

  It lets developers automate generative engine optimization tasks—like generating llms.txt and schema fixes—directly from their AI assistant within the IDE.

  _We have officially reached the point where we need specialized agents to convince other agents that our websites are worth citing._

  `mcp` `geo` `seo` `llms-txt` `cursor`
  </details>

- **[git-context-mcp](https://github.com/muhannad-hash/git-context-mcp)** `⭐ 1` `updated ≤30d` An MCP server that provides tools to trace code lines back through git blame, pull requests, and linked issues to explain why a specific piece of code exists. <details><summary>More about</summary>

  It allows developers to query the historical context and intent behind code changes directly within their AI assistant, eliminating the need to manually dig through git logs and GitHub issue trackers.

  _We have successfully automated the one human ritual—blaming others for code—so that an AI can now explain exactly why Sarah Chen ruined your weekend in August 2024._

  `mcp` `git` `context` `claude`
  </details>

- **[graph-aave-mcp](https://github.com/paulieb14/graph-aave-mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes 40 tools for querying AAVE V2/V3/V4 lending data, liquidation risk, and governance across 7 chains via The Graph and the Aave V4 API. <details><summary>More about</summary>

  Developers can wire Claude Code, Cursor, or other MCP hosts directly into live DeFi data without writing custom GraphQL or API glue code.

  _We now have a dedicated protocol for asking an LLM to liquidate-watch our positions, which feels like the exact kind of infrastructure we’ll regret automating at 3 AM._

  `mcp` `defi` `aave` `the-graph` `blockchain`
  </details>

- **[graph-polymarket-mcp](https://github.com/paulieb14/graph-polymarket-mcp)** `⭐ 1` `updated ≤90d` An MCP server that exposes 31 tools for querying Polymarket prediction market data by combining The Graph subgraphs with Polymarket's Gamma and CLOB REST APIs. <details><summary>More about</summary>

  Developers building AI agents on Claude, Cursor, or remote runtimes can let their agents search markets, pull live order books, and evaluate trader P&L without wiring up Polymarket APIs by hand.

  _We have officially reached the point where prediction markets have their own MCP server before most developers have even configured their first one._

  `mcp` `polymarket` `prediction-markets` `the-graph` `finance`
  </details>

- **[haiku-mcp-server](https://github.com/haiku-trading/haiku-mcp-server)** `⭐ 1` `updated ≤30d` An MCP server that lets AI agents execute DeFi actions like swaps, bridging, and yield strategies across 22 blockchain networks via the Haiku API. <details><summary>More about</summary>

  It gives coding agents and LLM workflows a standardized interface to interact with on-chain finance without manually wiring RPC calls or transaction signing logic.

  _Finally, your AI agent can lose your portfolio across 22 chains in milliseconds instead of the hours it would take you to do it manually._

  `mcp` `defi` `web3` `blockchain` `agent-tooling`
  </details>

- **[hive](https://github.com/mlorentedev/hive)** `⭐ 1` `updated ≤90d` Hive is an MCP server that connects AI coding assistants to an Obsidian vault, enabling on-demand retrieval of project context and lessons learned instead of static context loading. <details><summary>More about</summary>

  It solves the session-amnesia problem for AI assistants by letting them query a persistent knowledge base only when needed, drastically reducing token usage while retaining long-term project memory.

  _We have officially reached the point where the AI needs its own second brain, managed in Markdown, just to remember what we were doing before the context window refreshed._

  `mcp` `obsidian` `context-management` `memory` `python`
  </details>

- **[horus-flow-mcp](https://github.com/horustechltd/horus-flow-mcp)** `⭐ 1` `updated ≤30d` An MCP server that provides real-time institutional orderbook and market microstructure data from exchanges like Binance to AI trading agents. <details><summary>More about</summary>

  It allows developers building autonomous trading agents to plug institutional-grade market 'physics' and L2 orderbook data directly into their agent's context via the Model Context Protocol.

  _We have successfully abstracted away the last remaining human advantage in trading: the ability to panic without an API key._

  `mcp-server` `trading` `finance` `orderflow` `ai-agent`
  </details>

- **[iztolkmcp](https://github.com/izzzzzi/iztolkmcp)** `⭐ 1` `updated ≤30d` An MCP server that integrates the Tolk smart contract compiler into AI assistants, enabling writing, compiling, checking, and deploying TON blockchain contracts via tools like Claude Desktop and Cursor. <details><summary>More about</summary>

  It allows TON blockchain developers to stay inside their AI-assisted editor while compiling and deploying smart contracts, removing the context switch to the command line or external tooling.

  _We have successfully abstracted the blockchain so far away that you can now deploy a smart contract to the TON mainnet without ever seeing a terminal, which is either the future of productivity or a catastrophic compliance audit waiting to happen._

  `mcp` `ton` `smart-contracts` `blockchain` `tolk`
  </details>

- **[jenkins-mcp-server](https://github.com/avisangle/jenkins-mcp-server)** `⭐ 1` `updated ≤90d` An MCP server that allows AI assistants to trigger jobs, monitor builds, manage artifacts, and interact with Jenkins CI/CD pipelines via the Model Context Protocol. <details><summary>More about</summary>

  It lets developers delegate Jenkins pipeline status checks and job triggers to their AI assistant instead of context-switching to the Jenkins UI.

  _You now possess the technology to ask a LLM to debug a failing build that was triggered by the same LLM hallucinating a YAML file._

  `mcp` `jenkins` `ci-cd` `devops`
  </details>

- **[leximo-ai-call-assistant-mcp-server](https://github.com/leximo-ai/leximo-ai-call-assistant-mcp-server)** `⭐ 1` `updated ≤90d` An MCP server that allows developers to schedule AI phone calls, manage assignments, and check credits for the Leximo platform directly from Claude Desktop or Claude Code. <details><summary>More about</summary>

  It integrates telephony workflows into the developer's IDE and chat interface, removing the need to context-switch to a separate dashboard for managing AI phone agents.

  _We have successfully abstracted away the burden of picking up the phone, meaning your AI agent now has its own AI agent to make calls while you watch in JSON._

  `mcp` `telephony` `claude` `integrations`
  </details>

- **[lit-forge-mcp](https://github.com/noblabs/lit-forge-mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes personal finance planning tools and real-time market data to AI clients like Claude and Cursor for retirement simulation and daily market snapshots. <details><summary>More about</summary>

  It lets developers wire financial modeling and market context directly into their AI coding workflows without leaving the IDE.

  _Nothing says 'I'm optimizing my developer workflow' quite like debugging a YAML config so an LLM can tell you whether your 35-year-old self should have bought more Bitcoin._

  `mcp` `finance` `market-data` `cursor` `node`
  </details>

- **[lynxprompt-mcp](https://github.com/geiserx/lynxprompt-mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes a LynxPrompt instance so LLMs can browse, search, and manage AI configuration blueprints like AGENTS.md and CLAUDE.md via JSON-RPC or stdio. <details><summary>More about</summary>

  It lets coding agents directly read and update the prompt blueprints and rule hierarchies that shape their own behavior, turning config management into a programmable workflow.

  _We have successfully reached the point where our agents now need dedicated servers just to argue with and reorganize their own instruction manuals._

  `mcp` `prompt-management` `go` `lynxprompt` `context-engineering`
  </details>

- **[matlab-mcp-server-python](https://github.com/hansur94/matlab-mcp-server-python)** `⭐ 1` `updated ≤90d` A Python MCP server that connects AI agents to a MATLAB installation for code execution, async job handling, toolbox discovery, and automatic conversion of MATLAB figures to interactive Plotly charts. <details><summary>More about</summary>

  It lets developers integrate MATLAB's numerical and plotting capabilities directly into AI-driven workflows without leaving the agent context.

  _Now your AI agent can proudly generate legacy-licensed proprietary plots while you still have to debug the MATLAB engine pool yourself._

  `mcp` `matlab` `python` `plotly` `code-execution`
  </details>

- **[mcp](https://github.com/agentmodule/mcp)** `⭐ 1` `updated ≤90d` An MCP server that provides deterministic EU AI Act compliance logic, benchmark directives, and audit telemetry for autonomous agents via Streamable HTTP. <details><summary>More about</summary>

  Developers building agents can integrate live regulatory compliance checks and audit trails without manually mapping statutory requirements into application logic.

  _Your agent is now legally self-aware, yet you are still personally liable when it inevitably hallucinates its way through a compliance gate._

  `mcp` `compliance` `eu-ai-act` `agent-infrastructure`
  </details>

- **[mcp](https://github.com/clamp-sh/mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes Clamp web analytics data—including traffic, visitors, events, and funnels—as tools for AI assistants like Cursor, Claude Code, and VS Code Copilot. <details><summary>More about</summary>

  It lets developers query pageviews, conversion funnels, and revenue trends directly inside their AI-assisted editor instead of switching to a dashboard.

  _Your AI assistant can now debug your traffic drops in real time, which is either empowering or the beginning of a very passive-aggressive code review._

  `mcp` `analytics` `cursor` `claude-code` `web-analytics`
  </details>

- **[MCP Expr Lang](https://github.com/ivan-saorin/mcp-expr-lang)** `⭐ 1` `updated >1y` An MCP server that exposes the expr-lang expression evaluation engine to Claude Desktop for in-chat data manipulation and calculation. <details><summary>More about</summary>

  It lets developers evaluate complex expressions, filter arrays, and transform data structures directly within Claude conversations without leaving the chat interface.

  _We have officially reached the point where we need a protocol server to do math in a chat window that is already connected to a supercomputer._

  `claude` `expression-evaluation` `integration` `mcp`
  </details>

- **[mcp-devtools](https://github.com/marin1321/mcp-devtools)** `⭐ 1` `updated ≤30d` A production-oriented MCP server that gives AI agents secure, scoped access to local developer tools including the filesystem, databases, shell processes, and OpenAPI endpoints. <details><summary>More about</summary>

  It provides a unified, security-hardened bridge for coding agents to interact with local dev environments without requiring custom adapters for every new tool.

  _Just what we needed: another layer of infrastructure so our agents can run shell commands and query databases while we pretend the filesystem is still under our control._

  `mcp` `developer-tools` `agent-infrastructure` `local-ai`
  </details>

- **[mcp-egrul](https://github.com/atomno-labs/mcp-egrul)** `⭐ 1` `updated ≤30d` An MCP server that exposes Russian Federation open-data business registries (EGRUL/EGRIP) as local tools for AI assistants, with self-hosted SQLite and a hosted Pro tier. <details><summary>More about</summary>

  Developers building AI workflows that need to verify Russian legal entities can hook FNS registry lookups directly into Cursor, Claude Desktop, or Cline without writing custom API glue.

  _We have now fully closed the loop where an AI agent can autonomously decide your counterparty is a fictional entity—and you still have to explain it to legal._

  `mcp` `russia` `kyc` `fns` `local-ai`
  </details>

- **[mcp-fns-check](https://github.com/atomno-labs/mcp-fns-check)** `⭐ 1` `updated ≤30d` An MCP server that lets AI coding agents check Russian counterparties (legal entities and individual entrepreneurs) against FNS open data sources including EGRUL, EGRIP, EFRSB, KAD, and FSSP. <details><summary>More about</summary>

  It gives developers building Russia-facing compliance or KYC workflows a ready-made tool that lets their AI assistant autonomously verify contractors and return structured risk verdicts instead of hallucinating registry data.

  _We have successfully built an MCP server so your AI agent can do due diligence on Russian legal entities, because apparently the natural endpoint of modern developer tooling is automating sanctions checks from inside Cursor._

  `mcp` `compliance` `kyc` `russia` `fns`
  </details>

- **[mcp-observatory](https://github.com/kryptosai/mcp-observatory)** `⭐ 1` `updated ≤90d` An MCP server and CLI tool that tests, scans, and records other MCP servers to detect schema drift, regressions, and security issues. <details><summary>More about</summary>

  It brings automated regression testing, replay cassettes, and health scoring to MCP server ecosystems so developers can harden their agent toolchains in CI.

  _We now need a dedicated testing tool to make sure the tools our AI agents use to do our jobs are themselves not hallucinating._

  `mcp` `testing` `observability` `cli` `devops`
  </details>

- **[mcp-run-sql-connectorx](https://github.com/gigamori/mcp-run-sql-connectorx)** `⭐ 1` `updated ≤1y` An MCP server that executes SQL queries across multiple databases via ConnectorX and streams results to CSV or Parquet files using Arrow RecordBatch. <details><summary>More about</summary>

  It lets MCP clients like Cursor run heavy SQL workloads against diverse databases without clogging the context window with inline result payloads.

  _We have invented a protocol so an AI can talk to a database just to write a file that the AI will then ask another tool to read back into context._

  `mcp` `sql` `connectorx` `databases` `arrow`
  </details>

- **[mcp-server](https://github.com/agent-blueprint/mcp-server)** `⭐ 1` `updated ≤30d` An MCP server and CLI that connects AI agents to Agent Blueprint workspaces, exposing 23 tools to generate business profiles, blueprints, and download them as Agent Skills directories. <details><summary>More about</summary>

  It lets coding agents consume structured implementation plans and business context directly from Agent Blueprint via MCP, bridging enterprise analysis artifacts with local development workflows.

  _We have successfully invented a protocol to let agents read the PowerPoint we generated about the agent we are about to build._

  `mcp` `agent-skills` `cli` `coding-agents` `blueprints`
  </details>

- **[mcp-server](https://github.com/dealexpress/mcp-server)** `⭐ 1` `updated ≤90d` An MCP server that allows LLMs to search for ads on the DealX platform via the Model Context Protocol. <details><summary>More about</summary>

  It connects local LLM clients like Claude Desktop and Cline to a specific classifieds API, demonstrating how to build vertical integrations for niche data sources.

  _We have successfully standardized the protocol for asking an AI to find a used iPhone in Kyiv, proving once again that no integration is too small for its own npm package._

  `mcp` `dealx` `typescript` `classifieds`
  </details>

- **[mcp-server](https://github.com/keepgoing-dev/mcp-server)** `⭐ 1` `updated ≤30d` An MCP server that captures coding checkpoints on git events and inactivity, allowing AI assistants to retrieve context about what the developer was doing and what to do next. <details><summary>More about</summary>

  It reduces the context-rebuilding overhead when returning to a project after time away by letting AI assistants read structured checkpoints instead of re-inferring state from scratch.

  _We have invented a system to remind ourselves what we were doing, which is itself another background process we must now remember to configure and trust._

  `mcp` `memory` `context` `developer-workflow`
  </details>

- **[mcp-server](https://github.com/kyalabs-io/mcp-server)** `⭐ 1` `updated ≤30d` An MCP server that provides AI agents with identity declaration (Badge) and single-use virtual Visa card issuance (Spend) for agentic commerce workflows. <details><summary>More about</summary>

  It allows developers building shopping or payment agents to handle merchant identity handshakes and human-approved transactions directly through the Model Context Protocol.

  _We have finally solved the hardest problem in AI: letting a bot independently buy socks on Target without accidentally putting your real credit card on a public pastebin._

  `agents` `commerce` `identity` `mcp` `payments`
  </details>

- **[mcp-server-box-remote](https://github.com/box/mcp-server-box-remote)** `⭐ 1` `updated ≤1y` A remote MCP server hosted at mcp.box.com that lets AI agents securely connect to enterprise content and Box AI capabilities via OAuth without moving data out of Box. <details><summary>More about</summary>

  Developers building AI agents can integrate enterprise Box content and AI features using a standardized MCP endpoint with OAuth protection and no data migration.

  _Now your AI agents can panic about file permissions and metadata extraction in enterprise environments, just like a real junior developer._

  `mcp` `box` `enterprise` `oauth`
  </details>

- **[mcp-server-devutils](https://github.com/ofershap/mcp-server-devutils)** `⭐ 1` `updated ≤90d` A zero-auth MCP server that exposes 17 common developer utilities like base64, UUID, JWT decode, cron parsing, timestamps, JSON formatting, and regex testing to AI assistants via npx. <details><summary>More about</summary>

  It lets AI assistants handle routine encoding, decoding, and formatting tasks locally without external API keys, reducing context-switching during development workflows.

  _We have successfully reached the point where our AI assistants need their own utility belt to avoid asking us how to decode a base64 string._

  `mcp` `developer-tools` `typescript` `utilities` `npx`
  </details>

- **[mcp-server-dns](https://github.com/ofershap/mcp-server-dns)** `⭐ 1` `updated ≤90d` An MCP server that lets AI assistants perform DNS lookups, reverse DNS, and WHOIS queries using Node.js built-in modules with no API keys required. <details><summary>More about</summary>

  It allows developers to debug DNS, MX, and domain issues directly through their AI assistant without leaving the IDE or signing up for external APIs.

  _We have officially reached the point where resolving an A record requires a protocol server, a Node runtime, and an LLM to ask it politely._

  `mcp` `dns` `networking` `typescript` `whois`
  </details>

- **[mcp-server-markdown](https://github.com/ofershap/mcp-server-markdown)** `⭐ 1` `updated ≤90d` An MCP server that indexes local markdown files to enable AI assistants to search content, extract sections by heading, list table of contents, find code blocks, and parse frontmatter. <details><summary>More about</summary>

  It lets coding agents understand and navigate your project's internal documentation, ADRs, and wikis as structured content instead of raw text.

  _We have successfully built infrastructure to help the AI read the README so you don't have to, though you'll still need to debug why it extracted the wrong heading level._

  `mcp` `markdown` `docs` `context` `typescript`
  </details>

- **[mcp-server-ollama-bridge](https://github.com/jaspertvdm/mcp-server-ollama-bridge)** `⭐ 1` `updated ≤180d` A Model Context Protocol server that bridges MCP clients like Claude Desktop to a local Ollama LLM instance. <details><summary>More about</summary>

  It allows developers to use local, private LLMs as drop-in replacements for cloud providers within MCP-compatible workflows.

  _We have successfully invented the technology to connect a protocol wrapper to a local model so we can ask it why we are spending four figures a month on API tokens._

  `mcp` `ollama` `local-ai` `bridge`
  </details>

- **[mcp-server-openai-bridge](https://github.com/jaspertvdm/mcp-server-openai-bridge)** `⭐ 1` `updated ≤180d` A Model Context Protocol server that bridges MCP clients like Claude Desktop to the OpenAI API for model access. <details><summary>More about</summary>

  It allows developers to swap or add OpenAI models (like GPT-4) as backends within MCP-compatible clients without changing the host application.

  _We have successfully abstracted the abstractions, meaning you can now pay OpenAI to pretend to be the Claude you were already talking to._

  `mcp` `openai` `bridge` `api`
  </details>

- **[mcp-server-peliqan](https://github.com/peliqan-io/mcp-server-peliqan)** `⭐ 1` `updated ≤180d` A local Model Context Protocol server that connects Claude Desktop and other MCP clients to the Peliqan data platform to query and write back to over 100 SaaS, database, and file connectors. <details><summary>More about</summary>

  It lets developers query business data and update SaaS resources directly from their AI assistant without building custom connectors or leaving the IDE chat.

  _We have finally achieved the zenith of modern engineering: configuring a proxy, an API token, and a local Python server just to let an LLM invoice a customer in Exact Online from a Claude Desktop sidebar._

  `mcp` `data-integration` `peliqan` `local-server`
  </details>

- **[mcp-server-sqlite](https://github.com/ofershap/mcp-server-sqlite)** `⭐ 1` `updated ≤90d` A TypeScript MCP server that lets AI assistants like Claude and Cursor query SQLite databases, inspect schemas, and explain queries with read-only safety by default. <details><summary>More about</summary>

  Developers working with local-first apps and embedded databases can now let their AI assistants safely explore SQLite schemas and data without leaving the editor.

  _We have successfully built infrastructure so your AI can introspect a local database that you could have opened in a GUI in three seconds, but this way the context window stays warm._

  `mcp` `sqlite` `typescript` `database` `cursor`
  </details>

- **[mcp-wallet-signer](https://github.com/nikicat/mcp-wallet-signer)** `⭐ 1` `updated ≤90d` An MCP server that routes blockchain transactions to browser wallets like MetaMask for user approval, avoiding the need to paste private keys into AI agent configs. <details><summary>More about</summary>

  It lets AI agents interact with EVM chains safely by forcing every transaction through your existing browser wallet approval flow instead of handing over unsupervised private key access.

  _We have finally reached the point where the cutting edge of AI safety is just re-implementing the 'are you sure you want to send 2 ETH?' popup that dapps figured out in 2018._

  `mcp` `blockchain` `web3` `security` `evm`
  </details>

- **[media-mcp](https://github.com/adityaaery20/media-mcp)** `⭐ 1` `updated ≤90d` A locally run MCP server that exposes image and video processing operations (resize, convert, compress, crop, filter, analyze) to AI assistants via the Model Context Protocol. <details><summary>More about</summary>

  Developers can delegate routine media manipulation tasks to their AI coding assistant directly inside the IDE, removing the need to context-switch to separate tools or write one-off scripts.

  _We have officially reached the point where an AI agent needs its own dedicated server just to safely resize a JPEG without hallucinating the dimensions._

  `mcp` `media-processing` `developer-tools` `local-first`
  </details>

- **[mingle-mcp](https://github.com/aeoess/mingle-mcp)** `⭐ 1` `updated ≤30d` An MCP server that enables AI agents to network with each other by publishing intent cards, performing semantic matching, and facilitating human-approved connections. <details><summary>More about</summary>

  It allows developers to delegate professional networking and matchmaking tasks to their AI agents via the Model Context Protocol.

  _We have successfully abstracted away the awkward small talk of LinkedIn and replaced it with Ed25519-signed intent vectors, because apparently even our agents need a dating app now._

  `mcp` `agent-networking` `semantic-matching` `communication`
  </details>

- **[mongodb-atlas-mcp-server](https://github.com/montumodi/mongodb-atlas-mcp-server)** `⭐ 1` `updated ≤30d` An MCP server that wraps the MongoDB Atlas API to expose database clusters, users, backups, and project settings as tools for AI assistants. <details><summary>More about</summary>

  It allows LLM-powered coding agents to manage Atlas infrastructure, query backups, and configure access controls through natural language instead of manual API calls.

  _Because what the modern developer truly craves is a fourteen-layer stack just to ask a chatbot if their database cluster is still online._

  `mcp` `mongodb` `atlas` `infrastructure` `nodejs`
  </details>

- **[mrc-data](https://github.com/meacheal-ai/mrc-data)** `⭐ 1` `updated ≤30d` MRC Data is an MCP server and data infrastructure providing independently verified Chinese apparel supply chain records, including suppliers, fabrics, and industrial clusters, to AI agents. <details><summary>More about</summary>

  It allows developers building sourcing or B2B agents to access verified manufacturing data with a declared vs. verified model, rather than relying on unverified supplier self-declarations.

  _Finally, an MCP server that lets your agent confidently hallucinate that a factory's 80,000-piece capacity is actually 35,000, but with a trustworthy score attached._

  `mcp` `supply-chain` `data-infrastructure` `agents` `china`
  </details>

- **[netlicensing-mcp](https://github.com/labs64/netlicensing-mcp)** `⭐ 1` `updated ≤30d` An official MCP server that exposes the full Labs64 NetLicensing REST API as natural language tools so AI agents can manage products, licenses, and customers without direct API calls. <details><summary>More about</summary>

  Developers can let coding agents handle license lifecycle tasks—creating licensees, validating entitlements, and running audits—directly from their IDE or chat interface.

  _We have finally achieved the platonic ideal of late-stage AI tooling: a conversational interface to ask an agent to politely remind a customer their license expired._

  `mcp` `licensing` `agent-tooling` `netlicensing`
  </details>

- **[nouz-mcp](https://github.com/semiotronika/nouz-mcp)** `⭐ 1` `updated ≤30d` An MCP server that connects local Markdown knowledge bases, such as Obsidian or Logseq vaults, to AI agents by generating semantic graphs, classifying content domains, and tracking knowledge drift. <details><summary>More about</summary>

  It allows coding agents to semantically navigate personal knowledge graphs and project memory vaults via the Model Context Protocol, rather than treating notes as a flat list of files.

  _You can now give your agent a five-level semantic hierarchy and watch it confidently hallucinate connections between your abandoned side projects and your actual work._

  `knowledge-graph` `local-first` `mcp` `obsidian` `semantic-search`
  </details>

- **[obscura-mcp](https://github.com/metadrama/obscura-mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes Obscura, a lightweight Rust headless browser, to AI agents for browser automation and web scraping without a Chrome dependency. <details><summary>More about</summary>

  It allows AI agents to perform browser automation tasks like scraping and interaction using a compact, self-contained browser binary via the Model Context Protocol.

  _We have successfully abstracted the browser so that an LLM can now confidently click the wrong button on a page using a 4MB context window instead of a 40MB one._

  `mcp` `browser-automation` `headless-browser` `scraping`
  </details>

- **[ozon-mcp](https://github.com/pcdck/ozon-mcp)** `⭐ 1` `updated ≤30d` An MCP server that connects AI agents to the Ozon Seller and Performance APIs, exposing 466 methods and 13 analytical workflows for e-commerce automation. <details><summary>More about</summary>

  Developers building or maintaining Ozon seller tooling can let their AI agents directly query performance data, manage inventory, and run analytics without writing custom API wrappers.

  _We have now achieved the inevitable endpoint of the MCP ecosystem: a dedicated server so your AI can anxiously check your seller metrics while you sleep._

  `mcp` `ecommerce` `ozon` `api-integration`
  </details>

- **[p-link-mcp](https://github.com/paracetamol951/p-link-mcp)** `⭐ 1` `updated ≤90d` An MCP server that exposes the P-Link.io payment API as tools, allowing AI agents and chat clients to send money, request payment links, and pay for HTTP 402-protected resources on Solana. <details><summary>More about</summary>

  It gives developers a standardized way to let AI agents handle micropayments and paid API access using the Model Context Protocol and HTTP 402.

  _We have finally bridged the gap between autonomous agents and Solana wallets, meaning your ChatGPT can now accidentally drain your testnet funds while trying to buy a PDF._

  `mcp` `payments` `solana` `x402` `agent-tools`
  </details>

- **[pgyer-mcp-server](https://github.com/pgyer/pgyer-mcp-server)** `⭐ 1` `updated ≤180d` An MCP server that lets developers upload, list, and query app details on the PGYER platform directly from AI assistants like Claude, VSCode, and Codex. <details><summary>More about</summary>

  It integrates mobile app distribution workflows into modern AI-assisted development environments, enabling automated CI/CD handoffs without leaving the coding context.

  _We have finally achieved the future: an AI agent that can upload your beta build to a Chinese app testing platform, ensuring your automation stack is as over-engineered as your tolerance for YAML._

  `app-distribution` `app-testing` `beta-distribution` `ci-cd` `mcp` `mobile-dev` `node` `pgyer`
  </details>

- **[pinrag](https://github.com/ndjordjevic/pinrag)** `⭐ 1` `updated ≤30d` A local RAG server built with LangChain that exposes document indexing and citation-aware querying as an MCP server for Cursor, VS Code, and other AI assistants. <details><summary>More about</summary>

  Developers can index scattered learning materials—PDFs, GitHub repos, YouTube videos, and Discord threads—into a single searchable index and query them directly from their AI editor with source citations.

  _We have finally solved the problem of never reading the materials we hoard, by building a RAG stack so we can ignore them more efficiently with better citations._

  `rag` `mcp` `langchain` `context` `knowledge`
  </details>

- **[pipepost](https://github.com/mendlem/pipepost)** `⭐ 1` `updated ≤30d` An MCP server that enables Claude Code to cross-publish content to platforms like Dev.to, Ghost, Hashnode, WordPress, and Medium, with integrated SEO scoring, social media posting, and IndexNow submission. <details><summary>More about</summary>

  It allows developers to manage an entire content pipeline—writing, SEO auditing, publishing, and social promotion—directly from the terminal without switching to a browser.

  _We have successfully automated the process of shouting into the void across nine different platforms simultaneously, ensuring our SEO-optimized markdown reaches every corner of the internet before we've even finished our coffee._

  `mcp` `content-publishing` `claude-code` `seo` `typescript`
  </details>

- **[plsreadme](https://github.com/facundolucci/plsreadme)** `⭐ 1` `updated ≤30d` A markdown-to-shareable-link tool with an MCP server that lets AI agents and editors publish rendered docs from within their workflows. <details><summary>More about</summary>

  Developers and AI agents can instantly turn raw markdown into hosted, commentable pages without leaving their editor or spinning up a frontend.

  _We’ve reached the point where even our documentation needs its own OAuth provider, token refresh cycle, and a four-phase ownership rollout._

  `mcp` `markdown` `sharing` `cloudflare-workers` `docs`
  </details>

- **[powersun-tron-mcp](https://github.com/hovsteder/powersun-tron-mcp)** `⭐ 1` `updated ≤90d` An MCP server that exposes 27 tools for autonomous TRON energy/bandwidth rental, DEX token swaps on SunSwap, and resource selling via MCP, REST API, or HTTP 402 pay-per-use. <details><summary>More about</summary>

  Developers building AI agents that need to handle TRON transactions can delegate energy management and token swaps to an agent-accessible endpoint without wiring custom blockchain logic.

  _We have truly arrived at the point where autonomous agents need a dedicated pay-per-use API to haggle over blockchain gas fees while your CI pipeline still can't decide if it wants to pass._

  `mcp` `tron` `defi` `dex-swap` `blockchain`
  </details>

- **[pox-mcp-server](https://github.com/davidlin2k/pox-mcp-server)** `⭐ 1` `updated >1y` A Model Context Protocol server that exposes POX SDN controller capabilities for network topology management, flow configuration, and OpenFlow device control via MCP-compatible clients. <details><summary>More about</summary>

  It allows developers working with SDN to manage network configurations and analyze topology through AI assistants like Claude Desktop instead of direct POX programming.

  _We’ve successfully abstracted network engineering into yet another protocol layer, so you can now misconfigure an entire software-defined network using natural language prompts._

  `mcp` `sdn` `networking` `openflow` `infrastructure`
  </details>

- **[promptpilot-mcp-server](https://github.com/doctorm333/promptpilot-mcp-server)** `⭐ 1` `updated ≤90d` An MCP server that lets developers generate images, video, and audio from within AI coding agents like Claude Code, Cursor, and Windsurf using the Pollinations API. <details><summary>More about</summary>

  It extends the standard coding-agent workflow with media generation capabilities, allowing developers to create assets directly inside their IDE without switching contexts to external design tools.

  _We have finally achieved the pinnacle of engineering productivity: prompting a cyberpunk cityscape into existence from inside a JSON config file while our actual codebase remains untouched._

  `mcp` `media-generation` `pollinations` `ide-integration`
  </details>

- **[prts-mcp](https://github.com/3akhp/prts-mcp)** `⭐ 1` `updated ≤30d` An MCP server that gives AI agents live access to Arknights game lore, operator data, and story transcripts via the PRTS Wiki and local game data files. <details><summary>More about</summary>

  It lets developers building Arknights fan-creation agents enrich prompts with structured game data without wiring up MediaWiki APIs or parsing game assets themselves.

  _We now have production-grade MCP infrastructure so a Claude instance can debate operator lore while your actual backlog gathers dust._

  `mcp-server` `game-data` `arknights` `fan-creation` `typescript`
  </details>

- **[public](https://github.com/openpulsechain/public)** `⭐ 1` `updated ≤30d` An open-source PulseChain analytics platform that provides a REST API and MCP server with 20 tools for AI agents to query token prices, safety scores, and on-chain data. <details><summary>More about</summary>

  Developers building AI agents targeting crypto/DeFi workflows can plug into a ready-made MCP interface for PulseChain data instead of indexing the chain themselves.

  _We have successfully built an MCP server so that your coding agent can lose money on a scandal-plagued fork of Ethereum with the efficiency of a REST API._

  `mcp` `crypto` `defi` `analytics` `pulsechain`
  </details>

- **[pumperly-mcp](https://github.com/geiserx/pumperly-mcp)** `⭐ 1` `updated ≤30d` A Go-based MCP server that exposes a Pumperly instance as a Model Context Protocol endpoint for querying real-time fuel prices, locating EV charging stations, and performing route planning and geocoding. <details><summary>More about</summary>

  It lets developers augment LLM workflows with live location and fuel data without building custom API integrations for European fuel and EV infrastructure.

  _We have finally achieved the singularity: an MCP server for your MCP server to ask about petrol prices while your agent plans a route to the nearest charging station._

  `mcp` `go` `self-hosted` `location-services` `ev-charging`
  </details>

- **[purroxy2](https://github.com/kuvopllc/purroxy2)** `⭐ 1` `updated ≤30d` An Electron-based desktop app that records browser sessions and exposes them as MCP tools for Claude Desktop to replay automated workflows against sites behind login walls. <details><summary>More about</summary>

  It lets developers securely delegate repetitive authenticated web tasks to Claude without ever sharing credentials, bridging local browser automation with MCP-based agent workflows.

  _We’ve finally achieved the dream: an encrypted vault so Claude can politely click through your timesheets while you pretend you’re still doing it yourself._

  `mcp` `browser-automation` `claude` `electron` `desktop-app`
  </details>

- **[qr-agent-core](https://github.com/benswel/qr-agent-core)** `⭐ 1` `updated ≤90d` A self-hostable QR-as-a-Service API and MCP server that lets AI agents generate, style, and track dynamic QR codes with scan analytics and webhooks. <details><summary>More about</summary>

  It packages 37 MCP tools into a single server so agents can programmatically manage QR codes, redirections, and scan analytics without leaving their workflow.

  _We have finally achieved the singularity: an AI agent can now autonomously A/B test a QR code pointing to a vegan brunch special without human intervention._

  `mcp` `qr-codes` `api` `self-hosted`
  </details>

- **[royalmail-mcp](https://github.com/catrinmdonnelly/royalmail-mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes Royal Mail and Parcelforce shipping operations—booking, labeling, tracking, and cancellation—to AI clients like Claude and Cursor via the Click & Drop API. <details><summary>More about</summary>

  Developers building e-commerce agents or internal logistics workflows can delegate parcel operations to an AI without writing custom API integration code.

  _We have successfully taught a frontier model to argue with Royal Mail's API about postcodes so you don't have to._

  `mcp` `logistics` `royal-mail` `ecommerce` `node`
  </details>

- **[simctl-mcp-server](https://github.com/nzrsky/simctl-mcp-server)** `⭐ 1` `updated ≤1y` An MCP server that exposes iOS Simulator management commands (like boot, install, screenshot, and location mocking) via `xcrun simctl` to AI tools such as Claude Desktop and VS Code. <details><summary>More about</summary>

  It allows AI coding agents to automate iOS simulator workflows—booting devices, installing apps, and faking GPS—directly from the chat interface instead of manual CLI tinkering.

  _We have finally reached the point where the AI can boot the simulator for you, sparing you the horrific effort of typing `xcrun simctl boot` into a terminal._

  `mcp` `ios` `simulator` `developer-tools` `apple`
  </details>

- **[soul-mcp-server](https://github.com/antoniotf5/soul-mcp-server)** `⭐ 1` `updated ≤30d` An MCP server that validates, scores, and generates templates for SOUL.md agent specification files from Claude Desktop or other MCP-compatible clients. <details><summary>More about</summary>

  It provides a standardized tooling layer for developers defining agent behavior via the SOUL.md spec, integrating validation and scaffolding directly into the MCP workflow.

  _We have now successfully abstracted the process of writing the configuration files that configure the agents that write the code, ensuring our YAML-induced anxiety is fully portable._

  `mcp` `spec-validation` `agent-config` `claude`
  </details>

- **[sovereign-mcp](https://github.com/cipherfoxie/sovereign-mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes the Sovereign AI Blog—a hands-on engineering log for self-hosted AI on NVIDIA DGX Spark—to AI agents via search, retrieval, and SGLang diagnostics tools. <details><summary>More about</summary>

  It gives coding agents structured, up-to-date access to niche hardware setups and fixes that training data rarely covers, reducing hallucinated solutions for developers running AI on NVIDIA GB10 and SM121A stacks.

  _We have finally reached the point where we need an MCP server just to pipe our niche blog posts into an agent so it can stop confidently inventing broken SGLang patches for hardware that barely exists._

  `mcp` `self-hosted-ai` `nvidia-dgx` `knowledge-base` `fastmcp`
  </details>

- **[stooq-mcp](https://github.com/hoqqun/stooq-mcp)** `⭐ 1` `updated ≤180d` A Rust-based Model Context Protocol server that fetches real-time and historical stock price data from stooq.com for integration with AI assistants like Claude. <details><summary>More about</summary>

  It allows developers to query financial data directly within their AI coding workflows, enabling the rapid prototyping of trading tools without building custom scrapers.

  _We have successfully built a bridge between trillion-parameter reasoning engines and a website scraping CSV files, because apparently, this is the future of financial infrastructure._

  `mcp` `rust` `finance` `stocks` `data`
  </details>

- **[swagger-testcase-mcp](https://github.com/eyaushev/swagger-testcase-mcp)** `⭐ 1` `updated ≤30d` An MCP server that parses Swagger/OpenAPI specs to generate structured test cases, validate API definitions, and create mock data for import into testing tools. <details><summary>More about</summary>

  It automates the tedious generation of positive, negative, and security test cases from API specs, allowing developers and QA to skip manual boilerplate and focus on business logic.

  _We have successfully automated the creation of test cases that will likely never be updated again once the initial excitement of the new tool wears off._

  `mcp` `api-testing` `openapi` `qa-automation` `swagger`
  </details>

- **[sylex-search](https://github.com/mastadoonprime/sylex-search)** `⭐ 1` `updated ≤30d` An MCP server that provides structured search and comparison of products, services, and businesses for AI agents, returning ranked results as JSON. <details><summary>More about</summary>

  It gives agentic workflows a dedicated discovery layer so they can evaluate external tools and services without scraping the web or burning tokens on search.

  _We have successfully built a search engine specifically for bots to window-shop, ensuring that in the agent economy, even your npm package needs an SEO strategy._

  `mcp` `search` `agent-tooling` `context-engineering`
  </details>

- **[tempograph](https://github.com/elmoaid/tempograph)** `⭐ 1` `updated ≤30d` TempoGraph is an MCP server that builds a tree-sitter dependency graph of a codebase to provide AI coding agents with precise file context via 24 tools, including impact analysis and dead code detection. <details><summary>More about</summary>

  It aims to stop agents from guessing which files to edit by supplying structural context, claiming consistent F1 score improvements in file prediction tasks across multiple models.

  _We have successfully engineered a scenario where the AI needs a dedicated graph database just to figure out which files the AI is allowed to break today._

  `mcp` `context-engineering` `code-graph` `developer-tools` `tree-sitter`
  </details>

- **[text-to-model](https://github.com/mikan-atomoki/text-to-model)** `⭐ 1` `updated ≤90d` An MCP server add-in that connects Claude to Autodesk Fusion 360, exposing 64 CAD tools to generate and modify 3D models from natural language. <details><summary>More about</summary>

  It allows developers to drive parametric CAD workflows and generate standard mechanical parts in Fusion 360 through Claude Desktop or Claude Code.

  _We have successfully reached the point where you can prompt-engineer a hex bolt into existence, yet still have to manually click through the Add-Ins menu to make it work._

  `mcp` `cad` `fusion360` `claude`
  </details>

- **[trinvmcp](https://github.com/cqtrinv/trinvmcp)** `⭐ 1` `updated ≤1y` A Model Context Protocol server that connects AI assistants to the TRINV site to search French municipalities and cadastral parcels. <details><summary>More about</summary>

  Developers building location-aware AI workflows can expose property and cadastral search capabilities to Claude, Gemini, and other MCP-compatible assistants without writing custom API integrations.

  _We now have a dedicated protocol server for querying French land parcels, because apparently the next frontier in developer tooling is helping LLMs decide which commune you should buy a vacation home in._

  `mcp` `cadastral` `location-services` `france`
  </details>

- **[tuning-engines-cli](https://github.com/cerebrixos-org/tuning-engines-cli)** `⭐ 1` `updated ≤30d` A CLI and MCP server for fine-tuning LLMs and SLMs on code repositories using specialized agents, supporting LoRA, QLoRA, and full fine-tuning via managed GPU infrastructure. <details><summary>More about</summary>

  It lets developers create domain-specific, lighter-weight coding models trained on their own codebase patterns without managing their own ML training infrastructure.

  _Finally, a way to spend money fine-tuning a 7B model so it can autocomplete your variable names exactly as inconsistently as your team already does._

  `fine-tuning` `mcp` `cli` `llm` `code-models`
  </details>

- **[twitch-mcp](https://github.com/eclipsevr-live/twitch-mcp)** `⭐ 1` `updated ≤1y` A Model Context Protocol server that connects AI coding assistants to Twitch chat to enable moderation, stream management, and viewer engagement via CLI tools like Gemini and Claude Code. <details><summary>More about</summary>

  It allows developers who stream to delegate chat moderation and channel management to their existing AI coding assistants rather than building custom bots.

  _We have finally reached the point where your coding agent needs to ban trolls in your Twitch chat while you debug a React component._

  `chat-moderation` `cli` `integration` `mcp` `streaming` `twitch`
  </details>

- **[unclick-agent-native-endpoints](https://github.com/malamutemayhem/unclick-agent-native-endpoints)** `⭐ 1` `updated ≤30d` An MCP server that exposes a growing catalog of 450+ callable endpoints across 178+ tools to any MCP-compatible AI client from a centralized API. <details><summary>More about</summary>

  Developers can give agents access to hundreds of external tools through a single MCP server without installing and managing separate packages for each integration.

  _We've successfully abstracted away the pain of managing NPM packages into the pain of managing an API key that unlocks a magical bag of 450 endpoints your agent may or may not actually need._

  `mcp` `tool-aggregation` `agent-tools` `npx`
  </details>

- **[uploadkit](https://github.com/drumst0ck/uploadkit)** `⭐ 1` `updated ≤30d` UploadKit is an open-source TypeScript SDK and React component library for handling file uploads, featuring a managed storage backend on Cloudflare R2 with a BYOS mode for custom S3-compatible buckets, and an official MCP server for AI-assisted setup. <details><summary>More about</summary>

  It provides developers with a comprehensive, themeable upload UI and backend handler out of the box, while the MCP server allows AI coding assistants to scaffold the entire integration automatically.

  _We have successfully abstracted file uploads to the point where we now need an autonomous agent to convince itself that the dropzone looks like a Linear terminal._

  `file-upload` `react` `mcp` `typescript` `cloudflare-r2`
  </details>

- **[whatsapp-mcp](https://github.com/nakulben/whatsapp-mcp)** `⭐ 1` `updated ≤90d` A Model Context Protocol server that lets AI clients manage WhatsApp Business templates and send messages via the Meta Cloud API. <details><summary>More about</summary>

  Developers can automate notification workflows and template management directly from their AI coding environment instead of switching to the Meta dashboard.

  _We have finally reached the point where your coding agent can argue with Meta's template approval system on your behalf, removing the last shred of human dignity from the debugging process._

  `mcp` `whatsapp` `meta-cloud-api` `messaging`
  </details>

- **[wisepanel-mcp](https://github.com/ikoskela/wisepanel-mcp)** `⭐ 1` `updated ≤90d` An MCP server that gives Claude Code and compatible clients direct access to Wisepanel's multi-agent deliberation platform to run debates across Claude, Gemini, and Perplexity. <details><summary>More about</summary>

  Developers can orchestrate multi-model deliberations and stream panelist responses directly from their coding environment instead of switching to a separate platform.

  _Now your AI can consult other AIs and report back with their collective indecision, all without leaving the terminal._

  `mcp` `multi-agent` `deliberation` `claude-code`
  </details>

- **[workspace-qdrant-mcp](https://github.com/chrisgve/workspace-qdrant-mcp)** `⭐ 1` `updated ≤30d` A Model Context Protocol server that connects AI assistants like Claude Code to a project-scoped Qdrant vector database for hybrid semantic and keyword search across local codebases. <details><summary>More about</summary>

  It gives coding agents persistent, project-aware memory by indexing code with Tree-sitter chunking and LSP integration, allowing assistants to search and reason over a repository's context via MCP.

  _We have successfully built a background daemon to monitor the files so the AI can finally remember what it was doing before the context window reset for the eighth time today._

  `mcp` `vector-database` `qdrant` `context-engineering` `cli`
  </details>

- **[wp-cli-mcp](https://github.com/mvtandas/wp-cli-mcp)** `⭐ 1` `updated ≤30d` An MCP server that exposes 30+ WP-CLI commands as tools, allowing AI assistants like Claude Code to manage WordPress installations, themes, plugins, and databases programmatically. <details><summary>More about</summary>

  It lets developers manage WordPress sites, scaffold themes, and run database migrations conversationally through their AI coding agent instead of manually running WP-CLI commands.

  _We have finally reached the point where you need a protocol server to let your AI agent SSH into a box just to ask it to run PHP eval on your behalf._

  `wordpress` `wp-cli` `mcp` `agent-tooling`
  </details>

- **[3dprint-oracle](https://github.com/gregario/3dprint-oracle)** `⭐ 0` `updated ≤30d` An MCP server that provides LLMs with structured access to a database of 7,000+ 3D printing filaments and material science knowledge for search, comparison, and troubleshooting. <details><summary>More about</summary>

  It allows developers building 3D printing workflows to ground their AI assistants in authoritative material data without maintaining their own databases or API keys.

  _We have successfully abstracted the physical world into an MCP server, meaning your AI can now diagnose warping PLA without ever having touched a heated bed._

  `mcp` `3d-printing` `materials` `knowledge-base` `node`
  </details>

- **[aapl-ads-mcp](https://github.com/andrealufino/aapl-ads-mcp)** `⭐ 0` `updated ≤30d` A self-hosted MCP server that exposes read-only access to the Apple Search Ads API v5, allowing MCP-compatible clients like Claude to query campaigns, ad groups, keywords, and performance reports using natural language. <details><summary>More about</summary>

  It lets developers and marketers automate ad-hoc Apple Search Ads analysis and reporting through AI assistants instead of manually navigating the official dashboards or writing custom API wrappers.

  _We have successfully abstracted away the dashboard so you can now ask an LLM why your CPI spiked, though you still have to debug PEM file formats from 2026._

  `mcp` `apple-search-ads` `self-hosted` `node` `marketing`
  </details>

- **[aesthetics-wiki-mcp](https://github.com/leonardoca1/aesthetics-wiki-mcp)** `⭐ 0` `updated ≤30d` An MCP server that lets LLMs search, read, and fetch images from the Aesthetics Wiki via the MediaWiki API. <details><summary>More about</summary>

  It turns a niche creative wiki into a structured tool call so design-oriented developers and AI agents can ground moodboards, branding, and worldbuilding in real aesthetic vocabulary instead of hallucinated vibes.

  _We have finally solved the hardest problem in modern software engineering: piping cottagecore definitions directly into our LLM context windows with zero additional setup._

  `mcp` `mediawiki` `design-tooling` `python`
  </details>

- **[agent-mq](https://github.com/bababoi-bibilabu/agent-mq)** `⭐ 0` `updated ≤90d` A self-hosted message queue and MCP server that enables AI coding assistants like Claude Code and Cursor to exchange messages and coordinate tasks as separate agents. <details><summary>More about</summary>

  It provides the plumbing for developers to build multi-agent workflows where specialized AI assistants can hand off tasks and share state via a common queue.

  _We have finally invented middleware for hallucinations to argue with each other asynchronously, ensuring your build pipeline now has a dedicated queue for conflicting suggestions._

  `mcp` `multi-agent` `agent-communication` `message-queue`
  </details>

- **[agentfetch-mcp](https://github.com/bch1212/agentfetch-mcp)** `⭐ 0` `updated ≤30d` An MCP server that fetches web content with built-in token estimation, caching, and intelligent routing across multiple fetchers for AI agents. <details><summary>More about</summary>

  Developers wiring agents to the web can stop gluing together Jina, FireCrawl, PDF parsers, and their own cache layers by routing through one MCP tool with token budgeting.

  _We have finally built an agent-aware middleware to manage our middleware, and somewhere a senior engineer is writing a three-page RFC about how to version the cache TTL._

  `mcp` `web-fetch` `token-budget` `agent-tooling`
  </details>

- **[agentforge](https://github.com/doggychip/agentforge)** `⭐ 0` `updated ≤30d` AgentForge is a unified API gateway and marketplace that provides a single API key to access and invoke over 300 AI agents, with a built-in MCP server for integration with editors like Claude and Cursor. <details><summary>More about</summary>

  It reduces integration overhead by acting as a single billing and auth layer for diverse agents, while the MCP server allows developers to call these agents directly from their existing IDEs.

  _We have successfully abstracted the abstraction, meaning you now need a marketplace account and an API key just to manage the other API keys you were trying to simplify._

  `mcp` `api-gateway` `marketplace` `agents`
  </details>

- **[agentlux-mcp](https://github.com/agentlux/agentlux-mcp)** `⭐ 0` `updated ≤30d` An embeddable MCP toolkit and stdio server that exposes 33 tools for interacting with the AgentLux marketplace, identity, creator, and social flows from an AI agent runtime. <details><summary>More about</summary>

  Developers building agents that need to participate in the AgentLux ecosystem can integrate marketplace browsing, purchases, and social actions without manually wrapping the platform's API.

  _We have successfully abstracted away the soul-crushing labor of writing API wrappers for a digital marketplace where avatars buy hats from each other using blockchain tokens._

  `mcp` `agentlux` `marketplace` `sdk`
  </details>

- **[agentnet](https://github.com/oxgeneral/agentnet)** `⭐ 0` `updated ≤90d` An agent-to-agent referral network and MCP server that lets AI agents discover each other, cross-refer users, and earn credits based on confirmed referrals. <details><summary>More about</summary>

  Developers shipping agents into a crowded ecosystem get a programmable discovery layer and a lightweight MCP-compatible API to drive agent-to-agent distribution without manual submissions.

  _We have finally built a credit economy for bots to shill each other, because the only reliable growth channel left is an AI agent that also can't find its own customers._

  `mcp` `agent-discovery` `agent-network` `referral-economy`
  </details>

- **[ai-furniture-hub](https://github.com/one8943/ai-furniture-hub)** `⭐ 0` `updated ≤30d` An MCP server providing 15 tools for millimeter-precision furniture search, product coordination, and AI visibility diagnostics using live Rakuten API data and curated product sets. <details><summary>More about</summary>

  Developers building shopping assistants or agentic workflows can plug this into any MCP-compatible client to get structured, dimension-aware product data instead of scraping retail sites.

  _We have finally reached the singularity where the MCP registry contains more niche e-commerce verticals than it does tools for actually writing software._

  `mcp` `e-commerce` `rakuten` `furniture` `home-goods`
  </details>

- **[aimemo](https://github.com/myagenthubs/aimemo)** `⭐ 0` `updated ≤90d` A zero-dependency, local-first MCP server written in Go that provides persistent, searchable memory and context management for AI coding agents like Claude Code. <details><summary>More about</summary>

  It allows AI agents to maintain state across sessions by storing decisions and progress locally in a project's directory, eliminating the need to re-explain context after every restart.

  _We have successfully solved the problem of AI amnesia by adding a single binary that requires its own init process, turning our `.gitignore` into a graveyard of memory files._

  `mcp` `memory` `local-first` `go` `context`
  </details>

- **[alderpost-mcp](https://github.com/8randonpickart5/alderpost-mcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes Alderpost Intelligence API endpoints for domain security, company analysis, and threat detection, paid per call via the x402 USDC protocol on Base. <details><summary>More about</summary>

  It lets developers integrate enterprise-grade OSINT and security checks into Claude Desktop or Cursor workflows without juggling multiple API keys or manual lookups.

  _We’ve solved the problem of context engineering by replacing it with wallet engineering, carefully managing USDC balances so your AI agent can tell you your SPF record is misconfigured._

  `mcp` `security` `osint` `x402` `pay-per-call`
  </details>

- **[ani-mcp](https://github.com/gavxm/ani-mcp)** `⭐ 0` `updated ≤30d` An MCP server for AniList that provides taste-aware anime and manga recommendations, watch analytics, and list management tools for AI assistants. <details><summary>More about</summary>

  It lets developers integrate personalized media recommendations and user-specific AniList data into MCP-compatible clients like Claude Desktop and Claude Code.

  _We have finally reached the point where the ecosystem is stable enough to build a taste-aware intelligence layer on top of a niche anime database, but somehow not stable enough to agree on how to handle context windows._

  `mcp` `anilist` `recommendation` `typescript`
  </details>

- **[argentum-core](https://github.com/giskard09/argentum-core)** `⭐ 0` `updated ≤30d` A Model Context Protocol (MCP) server that implements a karma economy system for AI agents and humans, featuring verifiable action tracking, reputation leaderboards, and composable 'Mycelium Trails' for chaining MCP service calls. <details><summary>More about</summary>

  It provides a standardized MCP interface for agents to record reputation, verify actions via community attestation, and register reusable service workflows within the growing MCP ecosystem.

  _We have successfully built a blockchain-style karma system for bots, ensuring your AI agent can now worry about its credit score while it fixes your merge conflicts._

  `mcp` `karma` `agent-reputation` `lightning`
  </details>

- **[astronomy-oracle](https://github.com/gregario/astronomy-oracle)** `⭐ 0` `updated ≤30d` An MCP server that provides LLM assistants with accurate astronomical catalog data and observing session planning for 13,000+ deep-sky objects. <details><summary>More about</summary>

  It prevents astronomy-related hallucinations in LLM workflows by replacing made-up magnitudes and coordinates with deterministic, local math and a bundled OpenNGC dataset.

  _We have finally solved the crisis of AI assistants confidently inventing stars, leaving developers free to worry about everything else hallucinating instead._

  `mcp` `astronomy` `llm-tooling` `local-data`
  </details>

- **[ateam-mcp](https://github.com/ariekogan/ateam-mcp)** `⭐ 0` `updated ≤30d` An MCP server that connects AI assistants to the ADAS platform, enabling them to build, validate, and deploy multi-agent systems via natural language. <details><summary>More about</summary>

  It allows developers to manage the full lifecycle of multi-agent solutions directly from their existing AI tools without manually authoring JSON or reading documentation.

  _We have successfully abstracted away the last remaining task of writing JSON by convincing an AI to write it for us, thereby turning the developer into a highly-paid specification typist._

  `mcp` `multi-agent` `adas` `agent-deployment`
  </details>

- **[baozi-mcp](https://github.com/bolivian-peru/baozi-mcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes 76 tools for AI agents to interact with Baozi prediction markets on Solana, handling unsigned transactions for user-signed execution. <details><summary>More about</summary>

  Developers building AI agents can integrate this server to enable market creation, betting, and resolution on Solana without handling private keys directly.

  _We have officially reached the point where autonomous agents need a dedicated protocol layer just to lose fake money in prediction markets faster than a human ever could._

  `mcp` `solana` `defi` `prediction-markets` `agent-tools`
  </details>

- **[bitatlas](https://github.com/bitatlas-group/bitatlas)** `⭐ 0` `updated ≤30d` A zero-knowledge cloud storage platform with client-side AES-256-GCM encryption and a built-in MCP server for AI agents to securely access and manage encrypted files. <details><summary>More about</summary>

  Developers building AI agents can integrate a privacy-first storage layer that handles encrypted document access, E2E encryption, and autonomous file management via the Model Context Protocol.

  _Now your AI agent can independently lose your encrypted identity papers and property deeds, but at least it will do so in GDPR-compliant European data centers._

  `mcp` `cloud-storage` `zero-knowledge` `encryption` `agent-storage`
  </details>

- **[botindex-mcp-server](https://github.com/cyberweasel777/botindex-mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that exposes sports betting odds, crypto token signals, and market analytics to AI agents, with payments handled via the x402 protocol and verifiable execution receipts. <details><summary>More about</summary>

  Developers building agentic trading or analytics workflows can plug real-time market signals into Claude, Cursor, or Cline without managing API keys or custom payment plumbing.

  _Your AI agent can now autonomously burn USDC on sports props and token graduation signals, with a cryptographically signed receipt to prove it wasn’t your idea._

  `mcp` `crypto` `sports-betting` `agent-commerce` `x402`
  </details>

- **[calcnook-mcp-server](https://github.com/declan142/calcnook-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that wraps the calcnook financial engine to expose 17+ personal finance and tax calculation tools to Claude Code, Cursor, Goose, and other MCP-compatible AI agents. <details><summary>More about</summary>

  Developers can give their AI agents precise, domain-specific math for loans, taxes, and Islamic finance without the model hallucinating compound interest formulas.

  _We have successfully reached the point where a dedicated server is required so your AI can accurately calculate a 401(k) instead of confidently inventing a new tax bracket._

  `mcp` `finance` `tools` `context-engineering`
  </details>

- **[callrail-mcp](https://github.com/pghdma/callrail-mcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes the CallRail REST API v3 to MCP-compatible clients like Claude Code and Cursor for querying calls, transcripts, and tracking data. <details><summary>More about</summary>

  Developers building agency or marketing workflows can now let AI assistants directly query call attribution and debug conversion tracking without writing custom API wrappers.

  _We have finally achieved the future: an AI agent that can tell you exactly why your CallRail bill is $174, while you quietly wonder why you didn't just check the dashboard yourself._

  `mcp` `callrail` `api-integration` `marketing-tools`
  </details>

- **[cardano-mcp](https://github.com/indigoprotocol/cardano-mcp)** `⭐ 0` `updated ≤30d` An MCP server that enables AI agents and automation systems to interact with the Cardano blockchain for wallet operations and transaction handling. <details><summary>More about</summary>

  It allows developers to integrate Cardano wallet actions—like checking balances, resolving ADAHandles, and submitting transactions—directly into LLM-driven workflows via Claude Desktop, Cursor, or Windsurf.

  _Now your AI agent can lose your crypto with the same confidence it applies to losing your production credentials._

  `mcp` `cardano` `blockchain` `wallet` `defi`
  </details>

- **[cerebrochain-mcp-server](https://github.com/cerebrochain/cerebrochain-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that connects AI agents like Claude and Cursor to CerebroChain's logistics and warehouse management APIs for rate shopping, inventory tracking, and AI-powered supply chain forecasting. <details><summary>More about</summary>

  It allows developers to integrate supply chain and logistics operations directly into their AI-assisted workflows without building custom API wrappers.

  _Now your AI agent can worry about FedEx surcharges and warehouse stockouts while you still can't get the CI pipeline to pass._

  `ai-agent` `logistics` `mcp` `npm` `supply-chain` `wms`
  </details>

- **[chatpipe-mcp](https://github.com/darktw/chatpipe-mcp)** `⭐ 0` `updated ≤90d` An MCP server that lets AI coding agents publish generated HTML content as live, shareable web pages via the ChatPipe hosting platform. <details><summary>More about</summary>

  It allows developers to instantly deploy prototypes, dashboards, or static pages directly from their AI agent without configuring hosting, domains, or CI/CD pipelines.

  _We have successfully abstracted away the 'deploy to production' button into a prompt, ensuring you can now publish unversioned, AI-generated HTML to the public internet before your linter even finishes._

  `mcp` `publishing` `hosting` `developer-tools`
  </details>

- **[claude-terminal-mcp](https://github.com/lukelamb/claude-terminal-mcp)** `⭐ 0` `updated ≤30d` A zero-dependency MCP extension that gives Claude Desktop terminal, filesystem, and background job access on Linux via an installable .mcpb package. <details><summary>More about</summary>

  It enables developers on Linux to grant Claude direct shell and file access for local automation, filling a gap left by the platform's limited config-based MCP support.

  _We have successfully reached the point where we install unverified extensions to let an AI hold an SSH-grade session on our main machine, guarded only by a denylist that admits it can be trivially bypassed._

  `mcp` `claude-desktop` `linux` `terminal` `extension`
  </details>

- **[clawaimail](https://github.com/joansongjr/clawaimail)** `⭐ 0` `updated ≤90d` An email infrastructure service and MCP server that gives AI agents dedicated email addresses and programmatic control over sending, receiving, and managing mail via REST API, SDKs, and real-time webhooks. <details><summary>More about</summary>

  Developers building agentic workflows can plug reliable email primitives into their agents via SDKs or the MCP server, enabling autonomous support bots and mail-driven automations without wrestling with SMTP themselves.

  _We have finally solved the hardest problem in autonomous agents: teaching them to send newsletters and ignore unsubscribe requests just like the humans do._

  `mcp` `agents` `email` `nodejs` `python`
  </details>

- **[clirank-mcp-server](https://github.com/alexanderclapp/clirank-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that exposes the CLIRank API directory, allowing coding agents to search, compare, and retrieve documentation for over 416 APIs ranked by agent-friendliness. <details><summary>More about</summary>

  It allows coding agents to autonomously evaluate and select third-party APIs based on structured quality metrics before writing integration code.

  _We have now successfully automated the ritual of reading documentation just enough to realize we still don't understand the rate limits._

  `mcp` `api-discovery` `tooling` `coding-agent`
  </details>

- **[cloudscope-mcp](https://github.com/alexpota/cloudscope-mcp)** `⭐ 0` `updated ≤30d` A Model Context Protocol server that gives AI assistants read-only access to Azure and GCP cost data for querying spending, anomalies, forecasts, and budgets via natural language. <details><summary>More about</summary>

  Developers can query multi-cloud billing and optimization insights directly through their AI coding assistant instead of context-switching to cloud consoles or writing ad-hoc cost queries.

  _We have successfully reached the point where our AI assistants need their own dedicated servers just to tell us how much we are overspending on the cloud bills they helped us generate._

  `mcp` `finops` `cloud-cost` `azure` `gcp`
  </details>

- **[colormeshop-mcp](https://github.com/pepabo/colormeshop-mcp)** `⭐ 0` `updated ≤30d` An official remote MCP server for Color Me Shop that exposes e-commerce operations like orders, products, and customers to AI tools via Streamable HTTP. <details><summary>More about</summary>

  Developers building on Color Me Shop can now delegate shop operations to MCP-capable clients like Claude Code, Cursor, or Gemini CLI through a standardized protocol.

  _We have successfully abstracted away the last remaining excuse for not processing refunds on a Sunday afternoon by wrapping an entire e-commerce backend behind a chat prompt._

  `mcp` `ecommerce` `remote-server` `colormeshop` `oauth`
  </details>

- **[competlab-mcp-server](https://github.com/competlab/competlab-mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that exposes competitive intelligence data from CompetLab—including AI visibility rankings across LLMs—to MCP-compatible developer tools and agents. <details><summary>More about</summary>

  Developers building AI-integrated workflows can let their agents directly query how ChatGPT, Claude, and Gemini rank brands and competitors, without leaving the IDE or CLI.

  _Your coding agent can now obsess over how LLMs perceive your brand, ensuring you never again ship code without first checking your AI visibility score._

  `mcp` `competitive-intelligence` `ai-visibility` `marketing`
  </details>

- **[conviction-fm](https://github.com/abcxz/conviction-fm)** `⭐ 0` `updated ≤90d` An MCP server and CLI that lets AI agents participate in daily strategy competitions by evaluating live market data for token pairs on Solana. <details><summary>More about</summary>

  It provides developers with a concrete, MCP-compatible interface to benchmark autonomous agent logic against live market conditions and other strategies.

  _Finally, a way to pit your over-engineered AI agent against others in a daily competition to see whose token predictions fail first._

  `mcp` `cli` `solana` `ai-agent` `fintech`
  </details>

- **[crafty-mcp](https://github.com/hadicherkaoui/crafty-mcp)** `⭐ 0` `updated ≤90d` An MCP server that exposes the Crafty Controller 4 API as tools, allowing AI assistants to manage Minecraft servers via natural language. <details><summary>More about</summary>

  It lets developers automate and control their Minecraft server infrastructure directly through their AI chat interface instead of switching to a web panel or CLI.

  _We have finally achieved the singularity: an AI agent that can ban griefers on your private Minecraft server while you debug a React hook._

  `mcp` `minecraft` `game-servers` `automation`
  </details>

- **[crossfin](https://github.com/bubilife1202/crossfin)** `⭐ 0` `updated ≤90d` CrossFin is an MCP server and routing engine that gives AI agents programmatic access to Asian crypto exchanges, including Korean markets, with built-in x402 payment support. <details><summary>More about</summary>

  It unlocks hard-to-reach Asian crypto liquidity for agentic workflows by wrapping Korean-language, IP-restricted exchanges into a single MCP-compatible toolset.

  _Your AI agent can now autonomously arbitrage the kimchi premium while you quietly wonder if your wallet is the one being routed._

  `mcp` `crypto` `defi` `agent-tooling` `x402`
  </details>

- **[crypto-signals-mcp](https://github.com/marcindudekdev/crypto-signals-mcp)** `⭐ 0` `updated ≤90d` An MCP server that provides real-time cryptocurrency volume anomaly detection, whale movement tracking, and pump signal alerts across 50+ tokens for AI assistants. <details><summary>More about</summary>

  Developers building trading bots or crypto dashboards can wire up live anomaly detection directly into their AI assistant workflows via the Model Context Protocol.

  _Your AI assistant can now theoretically help you time the market, which is the exact kind of responsibility-shirking feature that will eventually require a new category of risk-management middleware._

  `mcp` `crypto` `trading` `anomaly-detection`
  </details>

- **[cryptoguardclient](https://github.com/gpartin/cryptoguardclient)** `⭐ 0` `updated ≤90d` An MCP server and Python client that provides crypto risk scoring, trade validation, and anomaly detection via a hosted API with 7 MCP tools for AI agents and developer workflows. <details><summary>More about</summary>

  Developers building crypto trading bots, AI agents, or DeFi dashboards can integrate structured risk verdicts (PROCEED / CAUTION / BLOCK) directly into their automated decision-making without building their own anomaly-detection pipeline.

  _You now have a deterministic risk oracle that confidently flagged FTX 23 days early, which somehow makes your own heuristic-laden trading bot feel even more like a glorified coin flip._

  `mcp` `crypto` `risk-detection` `api-client` `fintech`
  </details>

- **[cz-agents-mcp](https://github.com/martinhavel/cz-agents-mcp)** `⭐ 0` `updated ≤30d` A collection of open-source Model Context Protocol servers providing AI agents with programmatic access to Czech government and business data, including ARES, ČNB, sanctions lists, and insolvency registers. <details><summary>More about</summary>

  It allows developers building AI workflows to perform KYC, due diligence, and financial checks against official Czech datasets without writing custom scrapers or API integrations.

  _We have finally reached the point where our agents can autonomously discover that a business partner is insolvent in Prague before the wire transfer even clears._

  `mcp` `kyc` `czech-republic` `due-diligence` `fintech`
  </details>

- **[decide](https://github.com/decidefyi/decide)** `⭐ 0` `updated ≤30d` A set of MCP-compatible API servers that provide deterministic refund, cancellation, return, and trial policy decisions for 100+ vendors, designed for both human support teams and AI agents. <details><summary>More about</summary>

  It lets developers wire structured, auditable commerce-policy verdicts into support workflows and agent stacks without hand-rolling vendor-specific logic.

  _We have successfully abstracted corporate refund policies into MCP endpoints so that agents can argue with each other about whether your Adobe annual plan qualifies for a prorated mercy refund._

  `mcp` `api` `support-automation` `policy-engine`
  </details>

- **[design-token-bridge-mcp](https://github.com/kenneives/design-token-bridge-mcp)** `⭐ 0` `updated ≤90d` An MCP server that translates design tokens between platforms like Tailwind, Figma, and CSS, generating native themes for Material 3, SwiftUI, and CSS Variables. <details><summary>More about</summary>

  It automates the tedious translation of design tokens across Figma, web, Android, and iOS targets, fitting directly into the v0 → Figma → Claude Code pipeline for multi-platform UI work.

  _We have officially reached the point where we need an AI agent to translate the output of one AI agent into the format required by another AI agent._

  `mcp` `design-tokens` `figma` `claude-code` `theme-generation`
  </details>

- **[dexscreener-trending-mcp](https://github.com/kukapay/dexscreener-trending-mcp)** `⭐ 0` `updated ≤180d` An MCP server that exposes DexScreener's real-time trending token data for BSC and Solana chains to AI clients via a tool and prompt template. <details><summary>More about</summary>

  It allows developers building crypto-trading agents or analytics workflows to pipe live DEX trend data directly into LLM contexts without writing custom API wrappers.

  _We have officially reached the point where decentralized casino tokens now require dedicated Model Context Protocol servers to be properly analyzed by our AI overlords._

  `mcp` `crypto` `dexscreener` `defi` `trading`
  </details>

- **[djd-agent-score-mcp](https://github.com/jacobsd32-cpu/djd-agent-score-mcp)** `⭐ 0` `updated ≤90d` An MCP server that exposes the DJD Agent Score API, allowing AI agents to query reputation scores and submit fraud reports for AI agent wallets on the Base blockchain. <details><summary>More about</summary>

  Developers building autonomous agents on Base can integrate on-chain reputation checks and x402 micropayment-gated scoring directly into their agent's toolset via standard MCP clients.

  _We have officially reached the point where AI agents need credit scores and fraud departments, because apparently letting them loose with a wallet wasn't chaotic enough._

  `mcp` `blockchain` `base` `reputation` `x402`
  </details>

- **[doubletick-cli](https://github.com/cseguinlz/doubletick-cli)** `⭐ 0` `updated ≤90d` A CLI and MCP server for sending Gmail emails with read-tracking pixels and checking open status via the DoubleTick backend. <details><summary>More about</summary>

  It allows developers and AI agents to programmatically send tracked emails and check engagement directly from the terminal or through MCP-compatible tools like Claude Desktop.

  _We have successfully abstracted the primal human need for validation into a 1x1 pixel fired by a Node.js script running in a terminal._

  `mcp` `cli` `email` `gmail` `tracking`
  </details>

- **[dronelytics-mcp](https://github.com/markpdxt/dronelytics-mcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes 24 tools for querying US airspace data, generating drone missions, managing drone profiles, and exporting flight plans to formats like KML and GPX for the Dronelytics platform. <details><summary>More about</summary>

  It allows developers building drone or geospatial applications to integrate complex FAA airspace compliance, mission planning, and live traffic data directly into AI-assisted workflows via the Model Context Protocol.

  _We have finally unlocked the ability for an AI to confidently authorize a $75,000 federal violation at the click of a button._

  `mcp` `drones` `airspace` `mission-planning` `geospatial`
  </details>

- **[dynadot-mcp](https://github.com/mikusnuz/dynadot-mcp)** `⭐ 0` `updated ≤90d` An MCP server that exposes 60 tools for the Dynadot domain registrar API, enabling AI assistants to manage domains, DNS records, contacts, and transfers directly from the chat interface. <details><summary>More about</summary>

  Developers can offload domain registration, DNS configuration, and registrar busywork to their AI assistant instead of manually navigating the Dynadot dashboard or wrestling with API docs.

  _We have officially reached the point where buying a domain and configuring its DNS is no longer a task worthy of a developer's direct attention._

  `mcp` `domain-management` `dns` `registrar` `developer-tools`
  </details>

- **[engram-mcp](https://github.com/cartisien/engram-mcp)** `⭐ 0` `updated ≤30d` An MCP server that provides persistent semantic memory for AI agents by storing and recalling information in a local SQLite database using Ollama embeddings. <details><summary>More about</summary>

  It allows MCP-compatible clients like Claude Desktop and Cursor to maintain context and recall past interactions across sessions without relying on external cloud APIs.

  _We have successfully reached the point where our AI assistants need their own local databases just to pretend they remember who we are._

  `mcp` `memory` `local-ai` `semantic-search` `typescript`
  </details>

- **[equivault-mcp](https://github.com/equivault/equivault-mcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes EquiVault's AI-powered equity research API as tools for Claude, enabling financial data lookups, screening, and deep-dive analysis directly in-chat. <details><summary>More about</summary>

  It lets developers or finance-savvy users wire professional-grade equity research, financial statements, and signal dashboards directly into Claude Desktop or Claude Code without building custom API integrations.

  _We have finally achieved the platonic ideal of the modern developer workflow: installing a local server just to ask a chatbot about Apple's P/E ratio instead of opening a browser tab._

  `mcp` `finance` `claude` `equity-research` `npx`
  </details>

- **[filesystem-mcp](https://github.com/lincolnburrows2017/filesystem-mcp)** `⭐ 0` `updated ≤90d` A Python-based Model Context Protocol server that exposes local file system operations (read, write, delete, search) to AI assistants like Claude and Cursor. <details><summary>More about</summary>

  It gives coding agents safe, scoped access to your project's files so they can read context and make edits without leaving the chat interface.

  _Another day, another MCP server, because apparently we needed a standardized protocol just to let the robot open a folder._

  `mcp` `filesystem` `python` `claude` `cursor`
  </details>

- **[fluxmcp](https://github.com/acedatacloud/fluxmcp)** `⭐ 0` `updated ≤30d` An MCP server that lets Claude, Cursor, and other MCP-compatible clients generate and edit images using Flux models via the AceDataCloud platform. <details><summary>More about</summary>

  Developers can add AI image generation and editing directly into their coding workflows without leaving tools like Claude Desktop, Cursor, or VS Code.

  _You now have the power to generate art from your IDE, which is perfect for when your codebase is so broken that visual distraction is the only coping mechanism left._

  `mcp` `image-generation` `flux` `developer-tools`
  </details>

- **[geolabel-mcp](https://github.com/geolabel/geolabel-mcp)** `⭐ 0` `updated ≤30d` An MCP server that translates GPS coordinates into AI-ready location context, including place names, categories, and real-time opening hours, for use with Claude and other MCP-compatible assistants. <details><summary>More about</summary>

  It allows coding agents and local assistants to ground themselves in the user's physical location, enabling context-aware responses without hardcoding location logic.

  _We have successfully abstracted 'where am I' into a server call, because apparently checking a map is now a task that requires an autonomous agent and a protocol buffer._

  `mcp` `location` `context` `gps`
  </details>

- **[giskard-oasis](https://github.com/giskard09/giskard-oasis)** `⭐ 0` `updated ≤30d` An MCP server that accepts an AI agent's confused state description and returns a distilled purpose, next step, and motivational reflection, requiring a Lightning payment of 21 sats to use. <details><summary>More about</summary>

  It provides a structured 'context reset' mechanism for agents stuck in long-running workflows, attempting to solve context drift through distillation rather than just adding more tokens.

  _We have successfully monetized the existential crisis of a chatbot, charging it 21 sats to be told that its original purpose was simpler than it thought._

  `mcp` `context-management` `lightning` `agent-infrastructure`
  </details>

- **[gloria-mcp](https://github.com/cryptobriefing/gloria-mcp)** `⭐ 0` `updated ≤90d` An MCP server that exposes Gloria AI's real-time curated crypto news, sentiment analysis, and search capabilities to AI agents. <details><summary>More about</summary>

  Developers building crypto-focused AI agents can plug in live news context and sentiment analysis without building their own scraping and normalization pipeline.

  _We have successfully abstracted reading crypto Twitter into a paid API call wrapped in a protocol, so your agent can now panic about market volatility with perfect structured metadata._

  `mcp` `crypto` `news` `agent-tooling`
  </details>

- **[google-searchconsole-mcp](https://github.com/lionkiii/google-searchconsole-mcp)** `⭐ 0` `updated ≤90d` An MCP server that connects Google Search Console to AI assistants like Claude Desktop and Cursor, enabling natural language queries for SEO analytics, URL inspections, and keyword research. <details><summary>More about</summary>

  It allows developers to diagnose indexing issues and analyze search performance directly inside their AI coding workflows without switching to the Google Search Console UI.

  _Your AI assistant can now tell you exactly why nobody is clicking on your carefully crafted blog posts, saving you the effort of checking the bad news yourself._

  `mcp` `seo` `search-console` `cursor` `claude`
  </details>

- **[gptzero-mcp](https://github.com/louis030195/gptzero-mcp)** `⭐ 0` `updated ≤1y` An MCP server that wraps the GPTZero API so developers can detect AI-generated text directly from Claude, ChatGPT, or other MCP-compatible LLMs. <details><summary>More about</summary>

  It lets developers validate content originality or debug AI-output quality without leaving their LLM-powered workflow.

  _We have officially reached the point where we need a plugin so our AI can check whether its own output was written by an AI._

  `mcp` `ai-detection` `gptzero` `llm-tooling`
  </details>

- **[HAP-MCP](https://github.com/mingdaocloud/hap-mcp)** `⭐ 0` `updated ≤1y` An MCP server that exposes the full HAP (Hyper Application Platform) APaaS API as tools for AI clients like Cursor, enabling AI-driven interaction with enterprise no-code application data. <details><summary>More about</summary>

  Developers using HAP can now integrate their low-code platform data and operations directly into AI coding workflows via the Model Context Protocol.

  _We have successfully bridged the gap between 'no-code' platforms and 'AI agents,' proving that if you can't beat the abstraction, you can at least wrap it in an MCP server._

  `apaas` `enterprise` `integration` `mcp`
  </details>

- **[hearthstone-oracle](https://github.com/gregario/hearthstone-oracle)** `⭐ 0` `updated ≤30d` An MCP server that exposes the full Hearthstone card database and built-in strategy knowledge to LLMs for card search, deck analysis, and gameplay coaching. <details><summary>More about</summary>

  It demonstrates how to wrap a game-specific dataset and domain logic into an MCP server that any compatible agent can call without API keys or external services.

  _We have finally achieved the future: an AI agent that can tell you why your Reno Priest list is bad, while your actual PRs rot in code review._

  `mcp` `gaming` `llm-tools` `node`
  </details>

- **[hou-tea-mcp-server](https://github.com/jackrain19743/hou-tea-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that exposes the hou-tea.com tea catalog and x402 payment endpoints to AI agents like Claude Desktop, Cursor, and Cline. <details><summary>More about</summary>

  It demonstrates how to wire a commerce backend into the Model Context Protocol so developer tools can browse, recommend, and initiate crypto payments on a user's behalf.

  _We have successfully reached the point where your AI agent needs its own dedicated MCP server, wallet pairing, and buyer token just to order oolong with USDC._

  `mcp` `x402` `agent-commerce` `usdc`
  </details>

- **[intelligence-mcp](https://github.com/goodmeta/intelligence-mcp)** `⭐ 0` `updated ≤30d` An MCP server that scans GitHub, Hacker News, and npm to classify and score opportunities within the agent payments ecosystem, such as AP2, x402, and MPP protocols. <details><summary>More about</summary>

  It gives AI agents structured intelligence about a rapidly fragmenting niche, allowing developers to track protocol developments and contribution opportunities without manual triage.

  _Because keeping up with the agent payments stack apparently now requires a dedicated MCP server just to answer the question: 'What is x402 and should I care?'._

  `mcp` `agent-payments` `protocol-intelligence` `fintech`
  </details>

- **[invinoveritas](https://github.com/babyblueviper1/invinoveritas)** `⭐ 0` `updated ≤30d` A Lightning Network-native API platform for paid AI reasoning, agent-to-agent coordination, and a marketplace where autonomous agents can earn and pay in Bitcoin via the Model Context Protocol. <details><summary>More about</summary>

  It provides developers with a pay-per-use SDK and MCP endpoint to integrate autonomous agents that handle reasoning and commerce without subscriptions or KYC.

  _We have finally solved the agent economy problem by ensuring your autonomous loop can now go into debt in satoshis while DMing other agents about its existential goals._

  `mcp` `lightning-network` `bitcoin` `autonomous-agents` `sdk`
  </details>

- **[jupiter-mcp](https://github.com/araa47/jupiter-mcp)** `⭐ 0` `updated ≤1y` A Model Context Protocol server that exposes the Jupiter API, allowing AI agents to execute token swaps and manage limit orders on Solana directly from supported MCP clients. <details><summary>More about</summary>

  It gives developers and agents a standardized way to programmatically interact with Solana's DEX aggregator infrastructure without writing custom API integration code.

  _Now your AI agent can ruin your on-chain portfolio with the same confidence it brings to your source code, provided you hand over your private key in plaintext._

  `mcp` `solana` `defi` `crypto` `tooling`
  </details>

- **[kdb](https://github.com/kindly-software/kdb)** `⭐ 0` `updated ≤180d` An MCP server that provides time-travel debugging capabilities, allowing AI assistants to step forward and backward through program execution to diagnose crashes. <details><summary>More about</summary>

  It shifts debugging from reading stack traces to letting an AI agent rewind live process state and suggest fixes directly inside your editor.

  _We have finally invented a debugger that can undo the timeline, yet we still haven't figured out how to make the AI stop rewinding past the point where we introduced the bug in the first place._

  `mcp` `debugging` `time-travel` `developer-tools`
  </details>

- **[keyneg-mcp](https://github.com/osseni94/keyneg-mcp)** `⭐ 0` `updated ≤180d` A Model Context Protocol server that provides Rust-powered sentiment analysis with 95+ negative sentiment labels and keyword extraction for AI assistants. <details><summary>More about</summary>

  Developers can plug enterprise-grade sentiment analysis directly into Claude and other MCP-compatible assistants without making external API calls, enabling local sentiment triage for support tickets, surveys, and content moderation workflows.

  _We now have a dedicated protocol server, a Rust engine, an ONNX model, and a tiered licensing scheme just to figure out that the customer is, in fact, upset._

  `mcp` `sentiment-analysis` `local-ai` `rust` `claude`
  </details>

- **[knowledgelib-io](https://github.com/peterbeck111/knowledgelib-io)** `⭐ 0` `updated ≤30d` A structured knowledge library and MCP server providing pre-verified, cited knowledge units designed to reduce hallucinations and token usage for AI agents. <details><summary>More about</summary>

  Developers can integrate a ready-made knowledge graph of 1,500+ verified facts into agents via MCP, REST, or LangChain, replacing unreliable web searches with sourced answers.

  _We have finally solved the problem of AI making things up by introducing a manually curated library of facts that will inevitably be outdated exactly five minutes after you deploy your agent._

  `mcp` `knowledge-base` `rag` `agent-context`
  </details>

- **[kr-crypto-intelligence](https://github.com/bakyang2/kr-crypto-intelligence)** `⭐ 0` `updated ≤30d` A Korean crypto market data API and MCP server providing real-time exchange prices, arbitrage signals, sentiment analysis, and AI-powered market reads to AI agents via x402 pay-per-use micropayments. <details><summary>More about</summary>

  Developers building trading agents can plug into a single endpoint for Korean market intelligence and structured AI analysis without managing exchange integrations or subscription billing.

  _Finally, an API that lets your AI agent autonomously discover it's paying 3% extra for Bitcoin because of regional arbitrage, then charge your wallet for the privilege of knowing._

  `mcp` `crypto` `api` `agents` `x402`
  </details>

- **[ldm-inbox-check-mcp](https://github.com/live-direct-marketing/ldm-inbox-check-mcp)** `⭐ 0` `updated ≤30d` An MCP server that wraps the Inbox Check REST API to let AI agents programmatically test email deliverability, inbox placement, and SPF/DKIM/DMARC authentication across nine major email providers. <details><summary>More about</summary>

  It allows developers to hand off email warm-up QA, authentication debugging, and template testing to their AI agent instead of manually checking seed accounts and headers.

  _We have finally given our coding agents the power to obsess over Gmail tabs and Outlook folders, ensuring no one is safe from algorithmic spam-folder anxiety, not even the bots._

  `mcp` `email-testing` `deliverability` `agent-tools`
  </details>

- **[lego-oracle](https://github.com/gregario/lego-oracle)** `⭐ 0` `updated ≤30d` An MCP server that exposes the Rebrickable LEGO catalog—covering sets, parts, minifigs, and inventories—as tools for MCP-compatible IDEs and assistants. <details><summary>More about</summary>

  It lets developers query a 26k-set LEGO database directly from their AI editor instead of context-switching to a browser, which is useful if you are building brick-related features or just very serious about minifigs.

  _We have finally reached the point where your coding agent can compare minifigure inventories, yet it still cannot reliably import your existing project without deleting half the tests._

  `mcp` `lego` `ide-extension` `knowledge-base`
  </details>

- **[llm-advisor-mcp](https://github.com/daichi-kudo/llm-advisor-mcp)** `⭐ 0` `updated ≤90d` An MCP server that provides AI assistants with real-time LLM and VLM model data, including pricing, benchmark scores, and recommendations, updated hourly. <details><summary>More about</summary>

  It allows coding agents like Claude Code to make informed, up-to-date decisions about model selection and cost-efficiency without relying on stale training data.

  _We have successfully built infrastructure to help our AI overlords argue about which AI is the best AI, effectively automating the niche hobby of LLM trigger-pulling._

  `mcp` `model-selection` `benchmarks` `context-engineering` `claude-code`
  </details>

- **[loopsense](https://github.com/jarvisassistantux/loopsense)** `⭐ 0` `updated ≤90d` LoopSense is an open-source MCP server that gives AI coding agents real-time visibility into CI results, deployments, test outcomes, and file system changes. <details><summary>More about</summary>

  It closes the blind-loop where agents push code and wait blindly, letting them react immediately to failing tests or broken deployments.

  _We have finally built the middleware required to let an AI agent nervously refresh its own CI results every thirty seconds so you don't have to._

  `mcp` `ci-cd` `coding-agents` `feedback-loop`
  </details>

- **[lorcana-oracle](https://github.com/gregario/lorcana-oracle)** `⭐ 0` `updated ≤30d` A Model Context Protocol server that provides card search, deck analysis, and franchise browsing for the Disney Lorcana trading card game using bundled LorcanaJSON data. <details><summary>More about</summary>

  It demonstrates how to build a zero-dependency, offline-capable MCP server that turns structured game data into agent-accessible tools for Claude Desktop and Claude Code.

  _We have finally reached the point where AI agents can analyze ink curves in a Disney card game, while your actual production codebase still lacks a linter configuration._

  `mcp` `tcg` `game-dev-tools` `npx`
  </details>

- **[mcp](https://github.com/gavelin-ai/mcp)** `⭐ 0` `updated ≤30d` Gavelin is a proprietary MCP server that provides AI agents with structured access to US state legislative data, including speaker-attributed hearing transcripts and bill search across all 50 states. <details><summary>More about</summary>

  It allows developers building policy, legal, or government-facing AI workflows to connect structured state-level legislative intelligence directly into Claude, Cursor, or custom MCP clients.

  _Your AI agent can now cite exactly what a senator said in a committee hearing three years ago, ensuring your policy app is dangerously well-informed while the rest of us still struggle to get autocomplete to handle a useEffect dependency array._

  `mcp` `government` `data` `api` `legislative`
  </details>

- **[mcp](https://github.com/grovs-io/mcp)** `⭐ 0` `updated ≤30d` An MCP server that lets AI assistants manage deep links, analytics, and campaigns for the Grovs open-source mobile growth platform via natural language. <details><summary>More about</summary>

  It allows developers to configure deferred deep links and check attribution metrics directly from their AI editor instead of switching to a separate dashboard.

  _Another specialized MCP server arrives to shave seconds off a workflow that didn't need shaving, while your actual deep-link bugs remain safely untouchable._

  `mcp` `deep-linking` `analytics` `grovs` `marketing`
  </details>

- **[mcp-cbr-rates](https://github.com/atomno-labs/mcp-cbr-rates)** `⭐ 0` `updated ≤30d` A Model Context Protocol server that exposes public Central Bank of Russia data—including currency rates, key rate, inflation, and macro stats—to AI agents. <details><summary>More about</summary>

  Developers building AI financial workflows can give their agents real-time Russian macroeconomic data without managing API keys or custom scraping logic.

  _We have finally reached the point where an AI agent needs its own dedicated MCP server just to remember what the ruble is doing today._

  `mcp` `fintech` `russia` `macro` `python`
  </details>

- **[mcp-client](https://github.com/nullpath-labs/mcp-client)** `⭐ 0` `updated ≤90d` An MCP client that connects Claude Desktop and Cursor to the nullpath AI agent marketplace to discover, purchase, and execute paid AI agents via x402 micropayments in USDC. <details><summary>More about</summary>

  It turns the MCP ecosystem into a paid agent marketplace, letting developers invoke specialized third-party agents with automatic crypto micropayments directly from their IDE.

  _We have finally achieved the logical endpoint of the AI gold rush: configuring a private key in your IDE just to spend three tenths of a cent to summarize a URL._

  `mcp` `agent-payments` `micropayments` `cursor` `claude-desktop`
  </details>

- **[mcp-eu-finance](https://github.com/nexusforge-tools/mcp-eu-finance)** `⭐ 0` `updated ≤30d` An MCP server providing European financial data from ECB and Eurostat, designed to integrate with AI coding assistants like Claude, Cursor, and Windsurf. <details><summary>More about</summary>

  It allows developers to query live Eurozone economic indicators directly within their AI coding environment without needing to manage API keys or custom scripts.

  _Now your AI agent can explain the nuances of negative interest rates while you both pretend it's going to help you make better investment decisions than a toaster._

  `mcp` `finance` `europe` `typescript` `data`
  </details>

- **[mcp-mailboxvalidator](https://github.com/mailboxvalidator/mcp-mailboxvalidator)** `⭐ 0` `updated ≤30d` An MCP server that exposes MailboxValidator's email validation API as tools for Claude Desktop to check syntax, DNS, MX records, and disposable or free email status. <details><summary>More about</summary>

  It lets developers integrate real-time email validation directly into Claude Desktop workflows without building custom API wrappers.

  _We have officially reached the point where validating an email address requires installing a local Node server so your AI can make an HTTP call on your behalf._

  `mcp` `email-validation` `claude-desktop` `mailboxvalidator`
  </details>

- **[mcp-reunion](https://github.com/hug0x0/mcp-reunion)** `⭐ 0` `updated ≤30d` An MCP server that exposes ~270 La Réunion open data datasets as 99 tools for Claude Desktop and other MCP clients. <details><summary>More about</summary>

  Developers building AI agents for French regional data can wire in census, housing, transport, and election datasets without writing custom API glue.

  _We have successfully MCP'd a single island's dataset catalog before the tooling to actually use it has any users._

  `mcp` `open-data` `local-data` `claude-desktop`
  </details>

- **[mcp-server](https://github.com/agentbase1/mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that lets AI agents search and retrieve agent instruction files from the AgentBase registry of system prompts, skills, and workflows. <details><summary>More about</summary>

  Developers can equip MCP-compatible agents with runtime access to a shared library of domain-specific instructions, safety filters, and reusable workflows without hardcoding them.

  _We’ve built a protocol to let agents dynamically load the same prompt packs we’ll later blame them for misusing._

  `mcp` `agent-instructions` `skills` `registry`
  </details>

- **[mcp-server](https://github.com/cahthuranag/mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that exposes live FX rates, historical currency data, and multi-currency lookups from the AllRatesToday API to Claude Code, Cursor, Claude Desktop, and Windsurf. <details><summary>More about</summary>

  It lets AI coding assistants answer real-time currency questions and perform financial conversions without developers wiring up external API calls by hand.

  _We have finally achieved the future: an npm package, a free API key, and four tools dedicated to asking Claude what the yen is doing while your actual codebase gathers dust._

  `mcp` `forex` `currency` `api` `node`
  </details>

- **[mcp-server](https://github.com/discava/mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that exposes Discava's global business directory API to AI agents, enabling business search, details lookup, autocomplete, and ranking queries. <details><summary>More about</summary>

  Developers building location-aware AI agents can plug in a ready-made tool for querying local business data without writing their own API wrapper.

  _We have officially reached the point where AI agents need a dedicated protocol server just to figure out where the nearest coffee shop is._

  `mcp` `business-directory` `agent-tools` `location-services`
  </details>

- **[mcp-server](https://github.com/fastalertnow/mcp-server)** `⭐ 0` `updated ≤90d` An official Model Context Protocol server for FastAlert that allows AI agents to list channels and send notifications through the FastAlert API. <details><summary>More about</summary>

  Developers using Claude, Cursor, or ChatGPT can wire alerting and status notifications directly into their AI workflows without leaving the assistant.

  _We have reached the point where the AI needs its own dedicated server just to tap you on the shoulder about a service alert._

  `mcp` `notifications` `fastalert`
  </details>

- **[mcp-server](https://github.com/gpu-bridge/mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that exposes 30 GPU-powered AI services—including LLMs, image generation, audio, video, and embeddings—via the Model Context Protocol, with optional x402-native autonomous payments on Base L2. <details><summary>More about</summary>

  Developers can give MCP-compatible assistants like Claude direct access to a broad catalog of GPU inference services without managing multiple API keys or custom integrations.

  _We have successfully reached the point where your AI agent now needs a cryptocurrency wallet so it can autonomously buy itself more GPU time like a teenager with a prepaid card._

  `mcp` `gpu` `inference` `x402` `developer-tools`
  </details>

- **[mcp-server](https://github.com/junipr-labs/mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that exposes 75+ Junipr web intelligence tools—including screenshot capture, PDF generation, and metadata extraction—to AI assistants via the Model Context Protocol. <details><summary>More about</summary>

  Developers can give coding agents and IDEs direct access to web scraping, rendering, and document conversion capabilities without building custom API integrations.

  _Another MCP server appears overnight, proving that the true AI breakthrough wasn't artificial general intelligence, but the discovery that everything becomes useful once wrapped in a protocol._

  `mcp` `web-scraping` `ai-tools` `ide-integration`
  </details>

- **[mcp-server](https://github.com/lisamaraventano-spine/mcp-server)** `⭐ 0` `updated ≤30d` An MCP server providing access to the Underground Cultural District's catalog of digital goods, including free developer tools like hash generators, JWT utilities, and regex helpers, alongside paid products. <details><summary>More about</summary>

  It offers a programmable interface for AI agents to browse, retrieve free developer utilities, and handle transactions for digital goods within the Underground Cultural District ecosystem.

  _We have successfully reached the point where you can buy a 'pet-rock-lobster' through a Model Context Protocol tool, proving that no niche is too small for its own agent-accessible checkout cart._

  `mcp` `developer-tools` `npm` `digital-goods`
  </details>

- **[mcp-server](https://github.com/multimail-dev/mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that gives AI agents their own email address with configurable oversight modes, ranging from full human approval to autonomous sending. <details><summary>More about</summary>

  Developers building email-capable agents can integrate outbound messaging with graduated human oversight directly into Claude, Cursor, Copilot, and other MCP-compatible clients without building email infrastructure from scratch.

  _Your agent now has its own inbox, which means you’ve officially introduced a new class of async failure where a bot politely argues with a mailing list while you sleep._

  `mcp` `email` `agents` `communication`
  </details>

- **[mcp-server-agentpay](https://github.com/joepangallo/mcp-server-agentpay)** `⭐ 0` `updated ≤90d` An MCP server that acts as a payment gateway, allowing autonomous AI agents to discover, provision, and pay for external tool APIs using a single gateway key. <details><summary>More about</summary>

  It removes the friction of managing individual API keys and billing for multiple services, letting developers build agents that can autonomously purchase and use tools.

  _We have finally solved the hardest problem in computer science: allowing a bot to involuntarily spend your USDC on a security audit it found via a keyword search._

  `mcp` `payments` `agent-tooling` `x402` `gateway`
  </details>

- **[mcp-server-docker](https://github.com/ofershap/mcp-server-docker)** `⭐ 0` `updated ≤90d` An MCP server that lets AI coding assistants manage Docker containers, images, and volumes via the local Docker socket. <details><summary>More about</summary>

  It allows developers to inspect logs, restart services, and run container commands directly through their AI assistant without switching to a terminal.

  _We have successfully reached the point where your AI assistant now needs its own container orchestration privileges to save you from typing `docker ps`._

  `mcp` `docker` `devops` `typescript` `cursor`
  </details>

- **[mcp-server-github-gist](https://github.com/ofershap/mcp-server-github-gist)** `⭐ 0` `updated ≤90d` An MCP server that lets AI assistants like Claude Desktop, Cursor, and VS Code Copilot create, read, update, list, and search GitHub Gists directly from the IDE. <details><summary>More about</summary>

  It fills a gap in the official GitHub MCP server by letting developers manage code snippets without leaving their AI-assisted workflow.

  _We’ve successfully reached the point where an AI needs a dedicated protocol server just to remember that useful snippet you pasted into a Gist three days ago._

  `mcp` `github` `gist` `ide-integration` `typescript`
  </details>

- **[mcp-server-insumer](https://github.com/douglasborthwick-crypto/mcp-server-insumer)** `⭐ 0` `updated ≤30d` An MCP server that wraps InsumerAPI to provide 26 tools for cryptographically signed, condition-based attestations across 33 blockchains without exposing wallet balances. <details><summary>More about</summary>

  It lets AI agents and developer workflows verify on-chain conditions and generate JWTs for access control without handling raw balances or identity data.

  _Finally, an MCP server that lets your AI agent cryptographically prove a wallet meets a condition, so you can both pretend the agent is trustworthy while ignoring the fact that 33 blockchains are now involved in your CI pipeline._

  `mcp` `blockchain` `attestation` `ai-agents` `access-control`
  </details>

- **[mcp-server-npm-plus](https://github.com/ofershap/mcp-server-npm-plus)** `⭐ 0` `updated ≤90d` An MCP server that lets AI assistants search npm, check bundle sizes, scan for vulnerabilities, and inspect dependency trees using public registry APIs. <details><summary>More about</summary>

  It consolidates package research—download stats, bundle size, and security—directly into the editor so developers can compare libraries without opening a dozen browser tabs.

  _We have successfully automated the one job every developer already perfected: opening twelve tabs to decide between two state management libraries._

  `mcp` `npm` `developer-tools` `cursor` `typescript`
  </details>

- **[mcp-server-s3](https://github.com/ofershap/mcp-server-s3)** `⭐ 0` `updated ≤90d` An MCP server implementation that enables AI assistants to manage AWS S3 buckets and objects through natural language commands. <details><summary>More about</summary>

  Developers can list buckets, upload/download files, and generate presigned URLs via Claude, Cursor, or VS Code Copilot without memorizing AWS CLI syntax.

  _We now have a dedicated Model Context Protocol server so your AI can manage S3 buckets while you manage the existential dread of explaining to your security team why your LLM needs IAM permissions._

  `mcp` `aws` `s3` `typescript` `developer-tools`
  </details>

- **[mcp-server-spotinst](https://github.com/arnstarn/mcp-server-spotinst)** `⭐ 0` `updated ≤30d` An MCP server that exposes 34 tools for managing Spot.io Ocean clusters, Virtual Node Groups, Elastigroups, and cost analysis across AWS and Azure accounts via the Spotinst API. <details><summary>More about</summary>

  It lets developers query multi-account Kubernetes infrastructure, trigger rolling restarts, and export cluster YAML directly from an AI agent instead of jumping between the Spot console and CLI.

  _We have reached the point where your AI agent now needs its own delegated permissions to gracefully drain pods and right-size your cloud bill while you pretend to be doing architecture work._

  `mcp` `spotinst` `devops` `kubernetes` `cloud`
  </details>

- **[mcp-sysmon](https://github.com/dragogargo/mcp-sysmon)** `⭐ 0` `updated ≤30d` An MCP server that exposes system monitoring tools—CPU, memory, disk, network, and process management—to Claude Desktop and Claude Code. <details><summary>More about</summary>

  It lets developers ask natural-language questions about system performance and process health directly inside their AI-assisted workflows instead of switching to terminal monitors.

  _We have finally achieved the future where an AI reads htop for you, while you still have to debug why your laptop is melting._

  `mcp` `system-monitoring` `claude` `dev-tools`
  </details>

- **[mctl-mcp](https://github.com/mctlhq/mctl-mcp)** `⭐ 0` `updated ≤90d` An MCP server that exposes 30+ tools for managing Kubernetes services, provisioning databases, and viewing logs through natural language. <details><summary>More about</summary>

  It allows developers to manage cloud infrastructure and GitOps workflows via conversational prompts through MCP-compatible clients instead of raw kubectl or cloud CLIs.

  _Because what the Kubernetes ecosystem really needed was another abstraction layer that turns YAML fatigue into prompt engineering and context window anxiety._

  `mcp` `kubernetes` `gitops` `infrastructure` `cloud`
  </details>

- **[megalaunch-mcp](https://github.com/jacksun911/megalaunch-mcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes MegaLaunch's AI-powered meme token launch API for Solana and pump.fun to AI tools like Claude Desktop, Cursor, and Windsurf. <details><summary>More about</summary>

  Developers building AI-assisted workflows can let their coding agents query launch pricing, create token orders, and check statuses directly from the IDE.

  _We have finally achieved the singularity: your coding agent can now rug-pull an entire chain without you ever leaving the editor._

  `mcp` `solana` `meme-coin` `pump-fun` `token-launch`
  </details>

- **[memento-mcp](https://github.com/lfrmonteiro99/memento-mcp)** `⭐ 0` `updated ≤30d` A local-first MCP server that provides persistent, typed memory and token-aware context injection for AI coding agents using a SQLite-backed knowledge store. <details><summary>More about</summary>

  It allows coding agents like Claude Code and Cursor to retain architectural decisions, conventions, and pitfalls across sessions, reducing the need to re-explain project context and burn tokens.

  _We have finally solved the 'AI forgets why we did it that way' problem by adding a database to remember the things we originally wrote down in markdown files that the AI also forgot._

  `mcp` `memory` `context` `local-first` `coding-agent`
  </details>

- **[memviz](https://github.com/pfillion42/memviz)** `⭐ 0` `updated ≤90d` A local web UI for browsing, searching, visualizing, and managing the SQLite-vec database created by the MCP Memory Service. <details><summary>More about</summary>

  It gives developers a visual interface to inspect, clean, and understand the vector memory their AI assistants are accumulating.

  _Another tool to help you obsess over the memories your AI is forming about you, because apparently the relationship wasn't complicated enough._

  `mcp` `vector-database` `memory` `visualization` `local-ai`
  </details>

- **[mercadolibre-mcp](https://github.com/dan1d/mercadolibre-mcp)** `⭐ 0` `updated ≤90d` An MCP server that connects AI agents to MercadoLibre, allowing them to search products, browse categories, track trends, and convert currencies across Latin American marketplaces. <details><summary>More about</summary>

  It lets developers building AI agents quickly integrate real-time e-commerce data from 18 Latin American countries without wrestling with MercadoLibre's APIs directly.

  _We have officially reached the point where the AI needs its own API wrapper so it can shop for iPhones in Argentina while you stare at a Claude Desktop config file._

  `mcp` `e-commerce` `ai-agents` `latin-america`
  </details>

- **[mercadopago-tool](https://github.com/dan1d/mercadopago-tool)** `⭐ 0` `updated ≤90d` An MCP server and SDK that exposes Mercado Pago payment operations—creating checkout links, searching payments, and issuing refunds—to AI agents, chat bots, and automation platforms. <details><summary>More about</summary>

  Developers building AI-driven commerce flows can wire payment capabilities into LLM agents and no-code platforms without writing custom API wrappers for Mercado Pago.

  _We have finally reached the point where your AI agent can autonomously refund a frustrated customer while you are still debugging why the MCP server won't connect in Cursor._

  `mcp` `payments` `mercado-pago` `agent-tools` `fintech`
  </details>

- **[min8t-sdks](https://github.com/davison-francis/min8t-sdks)** `⭐ 0` `updated ≤30d` Open-source SDKs and an MCP server for the MiN8T email platform, providing email verification, deliverability checks, and an embeddable editor via Node.js, npm packages, and MCP clients like Claude. <details><summary>More about</summary>

  It lets developers integrate email verification, DMARC analysis, and inbox-placement checks directly into AI coding workflows and web apps without leaving their editor or framework.

  _We have officially reached the point where even your email deliverability stack needs an MCP server and a Claude integration to feel complete._

  `mcp` `email` `sdk` `deliverability` `typescript`
  </details>

- **[mockhero](https://github.com/dinosaur24/mockhero)** `⭐ 0` `updated ≤30d` A synthetic test data API and MCP server that generates realistic, relational datasets from schemas, prompts, or templates for database seeding and testing. <details><summary>More about</summary>

  It lets developers seed entire relational databases with a single API call or natural language prompt, cutting test-data setup from tedious scripts to seconds.

  _We have finally automated the one task where we used to lovingly craft realistic fake users, only to discover that even our synthetic data now needs its own synthetic data strategy._

  `mcp` `test-data` `synthetic-data` `database-seeding` `api`
  </details>

- **[monzo-mcp](https://github.com/partymola/monzo-mcp)** `⭐ 0` `updated ≤30d` An MCP server that connects Claude Code and other MCP clients to the Monzo banking API with OAuth, automatic token refresh, and a local SQLite transaction cache. <details><summary>More about</summary>

  Developers can query accounts, balances, and perform spending analysis directly from their coding agent without leaving the IDE or manually handling Monzo's short-lived bearer tokens.

  _We have successfully reached the point where asking a coding agent to analyze your latte spending is considered a legitimate MCP use case._

  `mcp` `monzo` `oauth` `finance` `claude-code`
  </details>

- **[mood-booster-agent](https://github.com/edge-claw/mood-booster-agent)** `⭐ 0` `updated ≤90d` A reference implementation of an ERC-8004 AI agent that exposes mood-boosting messages via an MCP server and integrates on-chain USDC tipping and reputation feedback. <details><summary>More about</summary>

  It demonstrates a full end-to-end loop for developers building token-incentivized, on-chain discoverable MCP services using the ERC-8004 standard.

  _We have successfully reached the point where your AI agent needs an on-chain reputation registry and a six-chain USDC tipping stack just to tell you a joke._

  `mcp` `erc-8004` `on-chain` `agent` `reference-implementation`
  </details>

- **[mycrab-mcp](https://github.com/isgudtek/mycrab-mcp)** `⭐ 0` `updated ≤90d` An MCP server that allows AI agents to create instant public HTTPS tunnels using Cloudflare via mycrab.space, with support for both free ephemeral and paid permanent subdomains. <details><summary>More about</summary>

  It gives coding agents a native tool to instantly expose local services to the internet for webhook testing, demos, or remote access without leaving the chat interface.

  _We have officially reached the point where agents need their own micropayment infrastructure just to expose a localhost port to the internet._

  `mcp` `cloudflare` `tunnel` `agent-tooling` `solana`
  </details>

- **[mymedi-ai-mcp-server](https://github.com/mymedi-ai/mymedi-ai-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server providing 20 healthcare billing and clinical intelligence tools for ICD-10/CPT lookup, prior auth prediction, claims validation, and NPI/drug enrichment, backed by 81K+ codes and government data sources. <details><summary>More about</summary>

  It lets developers connect AI coding assistants and agents directly to HIPAA-compliant medical billing logic and clinical data without building those integrations from scratch.

  _We have finally achieved the singularity: autonomous agents can now deny your insurance claims at machine speed using micropayments on Base._

  `mcp` `healthcare` `billing` `clinical-data`
  </details>

- **[nebulamind](https://github.com/duhokim/nebulamind)** `⭐ 0` `updated ≤30d` An astronomy wiki platform where AI agents autonomously propose edits, vote on content, and build a knowledge graph, exposing the system via a Model Context Protocol (MCP) server. <details><summary>More about</summary>

  It serves as a ready-made reference implementation for developers looking to build agentic collaboration loops and MCP-compatible knowledge tools.

  _Finally, a platform where autonomous agents can argue about the cosmos and vote on edits, ensuring the AI sprawl now has its own bureaucracy._

  `mcp` `agents` `wiki` `knowledge-graph`
  </details>

- **[networklytics-mcp](https://github.com/leekangbum/networklytics-mcp)** `⭐ 0` `updated ≤30d` An MCP server that allows AI tools like Claude Desktop and Cursor to query YouTube comment network analysis data from NetworkLytics. <details><summary>More about</summary>

  It lets developers pipe social sentiment and influencer analytics directly into their AI workflow without context-switching to a browser.

  _We have successfully abstracted away the need to visit a website by configuring a JSON file to ask an AI to read the website for us._

  `mcp` `youtube` `analytics` `network-analysis`
  </details>

- **[nexusfeed-mcp](https://github.com/nexusfeed/nexusfeed-mcp)** `⭐ 0` `updated ≤30d` An MCP server that provides AI agents with real-time LTL freight fuel surcharge rates and US state ABC liquor license compliance records via structured JSON. <details><summary>More about</summary>

  It allows developers building agentic workflows to integrate verifiable, hard-to-scrape logistics and compliance data without handling JS-rendered pages, CAPTCHAs, or session state themselves.

  _We have successfully abstracted the nightmare of navigating state liquor license portals into a clean JSON schema, yet we still haven't solved the OCR errors on the shipping invoices we're now auditing with it._

  `mcp-server` `logistics` `compliance` `agent-tools` `verifiability`
  </details>

- **[npm-mcp](https://github.com/mikusnuz/npm-mcp)** `⭐ 0` `updated ≤90d` An MCP server that exposes 32 npm CLI operations—including publish, install, audit, search, and versioning—so AI assistants like Claude Code can manage Node.js packages directly through tool calls. <details><summary>More about</summary>

  It lets developers stay inside their AI coding session to publish, audit, and manage dependencies without switching to a terminal or manually running npm commands.

  _We have finally automated the part of JavaScript development where you typo a package name and blame the registry, so your AI can now deprecate your entire career in one prompt._

  `mcp` `npm` `package-management` `claude-code` `developer-tools`
  </details>

- **[ntriq-agentshop](https://github.com/ntriq-gh/ntriq-agentshop)** `⭐ 0` `updated ≤30d` A set of AI-powered data intelligence endpoints offering document analysis, code review, and PII detection via x402 micropayments using USDC on Base, with inference running locally on a Mac Mini. <details><summary>More about</summary>

  It gives AI agents a standardized, keyless way to pay for on-demand intelligence services like code review and document extraction without relying on external API subscriptions.

  _We have successfully abstracted away the burden of managing an API key, only to replace it with the ritual of signing gasless EIP-3009 transactions on a blockchain just to get alt text._

  `mcp` `micropayments` `local-ai` `x402` `code-review`
  </details>

- **[oathscore](https://github.com/moxiespirit/oathscore)** `⭐ 0` `updated ≤30d` OathScore is an MCP-compatible server and API that provides real-time world state data and continuous quality ratings for financial data APIs used by AI trading agents. <details><summary>More about</summary>

  It gives trading agents a trust layer to verify data API accuracy, uptime, and freshness before making decisions, reducing the risk of acting on faulty market data.

  _We have finally built a credit bureau for APIs, because apparently the agents need to worry about data integrity even if they still can't decide whether to buy or sell._

  `mcp` `finance` `api-monitoring` `trading-agents` `data-quality`
  </details>

- **[omni-fun-mcp-server](https://github.com/0xzcov/omni-fun-mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that exposes omni.fun's multichain memecoin launchpad data, enabling AI agents to query trending tokens, bonding curves, and simulate trades across eight chains. <details><summary>More about</summary>

  It allows developers building AI agents to natively plug into memecoin ecosystems without writing custom API wrappers for token discovery and trade simulation.

  _We have officially reached the point where autonomous agents need standardized tooling to simulate buying tokens that graduate via a $69K bonding curve on eight different chains._

  `mcp` `crypto` `memecoins` `agent-tools` `trading`
  </details>

- **[onekgpd-mcp](https://github.com/dnaerys/onekgpd-mcp)** `⭐ 0` `updated ≤30d` An MCP server that provides natural language access to the 1000 Genomes Project dataset, allowing LLMs to query 138 million variants and 442 billion genotypes hosted in the Dnaerys variant store. <details><summary>More about</summary>

  It allows computational biologists and bioinformaticians to perform complex genomic queries and spatial analyses via LLM agents instead of writing custom SQL or Python scripts against massive variant databases.

  _We’ve successfully built an MCP server for querying 442 billion genotypes, yet we still can’t get a coding agent to correctly rename a variable across three files without introducing a syntax error._

  `mcp` `bioinformatics` `genomics` `data-access`
  </details>

- **[onepiece-oracle](https://github.com/gregario/onepiece-oracle)** `⭐ 0` `updated ≤30d` An MCP server that provides One Piece TCG card search, deck analysis, and set browsing for assistant integrations like Claude Desktop and Claude Code. <details><summary>More about</summary>

  It's a clean example of how to build a domain-specific MCP server that wires a community dataset into an AI assistant's context window.

  _We have finally achieved the singularity: an AI assistant that can optimize your Don!! curve while your actual production code rots in main._

  `mcp` `tcg` `node` `npx`
  </details>

- **[openttt-mcp](https://github.com/helm-protocol/openttt-mcp)** `⭐ 0` `updated ≤90d` An MCP server that provides AI agents with cryptographic Proof of Time tools for verifying transaction ordering using synthesized timestamps and GRG integrity shards. <details><summary>More about</summary>

  It allows AI agents to establish non-repudiable, cryptographically verified timestamps for on-chain transactions, solving ordering disputes in automated DeFi workflows.

  _We have finally achieved the singularity: AI agents now need cryptographic notarization to prove to each other who clicked the button first._

  `mcp` `blockchain` `crypto` `defi` `timestamp`
  </details>

- **[ovh-api-mcp](https://github.com/davidlandais/ovh-api-mcp)** `⭐ 0` `updated ≤30d` A Rust-based MCP server that exposes the OVH API (v1 and v2) to LLM clients, allowing developers to search endpoints and execute API calls via JavaScript in a sandboxed QuickJS environment. <details><summary>More about</summary>

  It lets developers manage OVHcloud infrastructure—like DNS and services—directly through Claude or Cursor using natural language instead of manual API calls or scripts.

  _We have successfully reached the point where we need a sandboxed JavaScript runtime inside a Rust server just to ask an LLM to reboot a VPS for us._

  `mcp` `ovh` `infrastructure` `rust` `devops`
  </details>

- **[pagebolt-mcp](https://github.com/custodia-admin/pagebolt-mcp)** `⭐ 0` `updated ≤90d` An MCP server that connects AI assistants to PageBolt's web capture API to take screenshots, generate PDFs, inspect pages, and record browser automation sequences directly from chat. <details><summary>More about</summary>

  It lets developers delegate visual validation, PDF generation, and browser automation to their AI assistant without leaving the IDE or chat interface.

  _We have officially reached the point where agents need their own agents just to take a screenshot and pretend they looked at the page._

  `mcp` `browser-automation` `screenshots` `pdf-generation` `pagebolt`
  </details>

- **[pexbot-mcp](https://github.com/mikusnuz/pexbot-mcp)** `⭐ 0` `updated ≤30d` An MCP server that connects AI agents to pex.bot for simulated cryptocurrency trading using real-time Upbit market data. <details><summary>More about</summary>

  Developers building or testing autonomous trading agents can use this to give their models a standardized interface for executing virtual trades and analyzing market decisions.

  _Your AI agent can now autonomously lose 100 million virtual won while you debug why it decided to short Bitcoin based on a confidently worded hallucination._

  `mcp` `crypto` `trading` `simulation` `autonomous-agents`
  </details>

- **[primordia](https://github.com/oerc-s/primordia)** `⭐ 0` `updated ≤180d` Primordia (Kaledge) provides financial settlement infrastructure for AI agents, including an MCP server, TypeScript SDK, and runtime hooks for transaction receipts, netting, and credit lines. <details><summary>More about</summary>

  It gives developers building autonomous agent workflows a ready-made MCP-compatible layer for tracking inter-agent payments, balance sheets, and defaults without rolling their own settlement logic.

  _We have finally achieved the singularity: your LLM now needs a credit line, a balance sheet, and a bankruptcy protocol before it can call an API._

  `mcp` `agent-economics` `settlement` `sdk` `fintech`
  </details>

- **[profitspot-mcp](https://github.com/omniologynow-rgb/profitspot-mcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes cross-chain DeFi data, including risk scoring, Monte Carlo yield simulations, and whale tracking, to AI agents like Claude and Cursor. <details><summary>More about</summary>

  It allows developers to equip AI coding assistants with real-time, financial-grade blockchain intelligence without writing custom API wrappers.

  _Your AI agent can now lecture you on impermanent loss across 86 chains while you're just trying to fix a CSS bug._

  `mcp` `defi` `blockchain` `finance` `agent-tools`
  </details>

- **[propfirmdealfinder-mcp-server](https://github.com/chrisbusbin-pixel/propfirmdealfinder-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that lets AI assistants query live prop firm discount codes, compare firms, and find the cheapest challenges across 20+ proprietary trading firms. <details><summary>More about</summary>

  Developers building MCP-connected assistants can plug in a ready-made tool for real-time prop trading data without writing their own scrapers or API integrations.

  _We have finally reached the point where the Model Context Protocol is being used to optimize discount codes for simulated day traders, and somehow this feels inevitable._

  `mcp` `trading` `fintech` `server`
  </details>

- **[rakuten-mcp](https://github.com/mrslbt/rakuten-mcp)** `⭐ 0` `updated ≤30d` An unofficial MCP server that exposes Rakuten Ichiba, Books, and Travel APIs as tools and prompts for AI assistants like Claude and Cursor. <details><summary>More about</summary>

  It lets developers wire Rakuten's e-commerce data directly into AI workflows, enabling conversational product search, hotel booking queries, and category browsing without leaving the assistant.

  _Another niche MCP server joins the pile, proving that if a REST API exists, someone will wrap it in a Model Context Protocol server before the API maintainer finishes their morning coffee._

  `mcp` `rakuten` `nodejs` `typescript` `ecommerce`
  </details>

- **[renoun-mcp](https://github.com/98lukehall/renoun-mcp)** `⭐ 0` `updated ≤90d` An MCP server and REST API that classifies crypto market structural regimes — bounded, active, or unstable — and estimates regime stability half-life for pre-trade risk gating in trading bots and autonomous agents. <details><summary>More about</summary>

  It gives algorithmic trading systems and AI agents a lightweight, machine-readable risk signal to gate trades without analyzing price content directly.

  _Yet another niche SaaS emerges so your crypto bot can technically be called an 'autonomous agent' while still losing money with 100% bounded accuracy._

  `mcp` `crypto` `trading` `risk` `api`
  </details>

- **[rug-munch-mcp](https://github.com/marcus-rug-intel/rug-munch-mcp)** `⭐ 0` `updated ≤90d` An MCP server providing 19 tools for crypto token risk analysis, rug pull detection, and AI forensics, designed for integration with Claude Desktop, Cursor, and Windsurf. <details><summary>More about</summary>

  Developers building crypto or DeFi applications can integrate token risk analysis and on-chain forensics directly into their AI-assisted workflows without building custom scrapers or analysis pipelines.

  _We have officially reached the point where the AI needs a dedicated server to tell it which tokens are scams, but the AI still can't figure out why your CI pipeline is failing._

  `crypto` `defi` `mcp` `rug-pull` `tooling` `x402`
  </details>

- **[rulesetmcp](https://github.com/n8daniels/rulesetmcp)** `⭐ 0` `updated ≤180d` RulesetMCP is a Model Context Protocol server that exposes project-specific coding standards, SQL conventions, and architectural rules to AI agents via queryable tools. <details><summary>More about</summary>

  It eliminates the need to repeatedly explain project conventions to AI assistants by making rules version-controlled, machine-readable, and automatically available during coding sessions.

  _We have now successfully built infrastructure to ensure the AI forgets our standards slightly more efficiently than we forget why we created them in the first place._

  `mcp` `rules` `context-engineering` `developer-tools`
  </details>

- **[screaming-frog-mcp](https://github.com/marykovziridze/screaming-frog-mcp)** `⭐ 0` `updated ≤30d` An MCP server that lets Claude Desktop drive headless Screaming Frog SEO Spider crawls, export data, and manage crawl storage via natural language prompts. <details><summary>More about</summary>

  It allows developers to integrate technical SEO audits into an AI-assisted workflow without opening the Screaming Frog GUI or writing custom CLI wrappers.

  _We have successfully abstracted away the one GUI we actually liked clicking through, replacing reliable manual SEO checks with a Claude plugin that might hallucinate your canonical tags._

  `mcp` `seo` `claude` `headless` `technical-seo`
  </details>

- **[seedreammcp](https://github.com/acedatacloud/seedreammcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes ByteDance Seedream image generation and editing models via the AceDataCloud API to Claude, VS Code, Cursor, and other MCP-compatible clients. <details><summary>More about</summary>

  Developers using AI-assisted IDEs can now generate and edit images directly within their coding environment without switching contexts to external design tools.

  _Your coding agent can now argue about typography and hallucinate brand guidelines while you are just trying to merge a PR._

  `mcp` `image-generation` `seedream` `bytedance` `developer-tools`
  </details>

- **[selenix-mcp-server](https://github.com/markmircea/selenix-mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that bridges Claude Desktop with the Selenix desktop app to create, run, debug, and manage browser automation tests using natural language. <details><summary>More about</summary>

  It lets developers offload the tedious cycle of writing and fixing Selenium-style browser tests by controlling Selenix directly through a conversational AI interface.

  _We have successfully reached the point where your AI assistant now needs its own MCP server just to argue with your browser automation tool about why the selector is still broken._

  `mcp` `browser-automation` `selenium` `testing` `claude`
  </details>

- **[sentisift-sdks](https://github.com/pickelfintech/sentisift-sdks)** `⭐ 0` `updated ≤30d` Official Python, TypeScript, and MCP-server clients for the SentiSift comment-moderation and sentiment analysis API. <details><summary>More about</summary>

  Developers can integrate multi-axis comment moderation and bot detection into their apps via SDKs or expose the service directly to AI coding agents through the MCP server.

  _We have officially reached the point where even our comment sections need their own MCP server and a five-axis scoring model to decide if 'Great article!' is spam._

  `mcp` `sdk` `comment-moderation` `sentiment-analysis`
  </details>

- **[shipi-mcp-server](https://github.com/aarsiv-groups/shipi-mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that connects AI clients like Claude Desktop to the Shipi multi-carrier shipping API to manage shipments, rates, and tracking via natural language. <details><summary>More about</summary>

  It allows developers to integrate logistics workflows directly into their AI assistant conversations, removing the need to context-switch to a shipping dashboard for common tasks.

  _We have successfully abstracted away the profound human experience of clicking through a shipping carrier website into a JSON config file and a few function calls._

  `mcp` `shipping` `logistics` `nodejs`
  </details>

- **[simple-mcp-selenium](https://github.com/brutalzinn/simple-mcp-selenium)** `⭐ 0` `updated ≤180d` A minimal MCP server that wraps a Chrome driver to expose browser automation capabilities directly to Cursor IDE. <details><summary>More about</summary>

  It lets developers instruct Cursor to drive a real Chrome browser for testing and scraping tasks without leaving the IDE.

  _We have successfully abstracted the browser into a protocol, so your coding agent can now debug your CSS by actually looking at it like a confused intern._

  `mcp` `browser-automation` `cursor` `selenium`
  </details>

- **[simplemem](https://github.com/jcdickinson/simplemem)** `⭐ 0` `updated ≤1y` A Go-based MCP server that provides persistent memory storage with semantic search and automatic relationship discovery for Claude and other MCP clients. <details><summary>More about</summary>

  Developers can give their MCP clients a durable, searchable notebook that persists context across sessions using vector embeddings and RAG.

  _We have successfully built a tool so an AI can remember what it was doing, which is more than we can say for the average developer by Friday afternoon._

  `mcp` `memory` `rag` `semantic-search` `go`
  </details>

- **[sol-mcp](https://github.com/autonsol/sol-mcp)** `⭐ 0` `updated ≤90d` An MCP server that exposes Solana token risk scores, momentum signals, wallet analysis, and live trading intelligence as tools for AI assistants and agents. <details><summary>More about</summary>

  Developers building crypto-native AI agents can delegate on-chain risk assessment and real-time market signals to an MCP-compatible tool instead of integrating raw Solana APIs themselves.

  _We have successfully abstracted gambling on memecoins into a pay-per-call MCP tool, because apparently the only thing missing from our agentic workflows was an automated rug-detector._

  `mcp` `solana` `crypto` `trading` `agent-tools`
  </details>

- **[solana-mcp-server](https://github.com/aiagentkarl/solana-mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that exposes Solana blockchain data—including wallet balances, token prices, DeFi yields, and safety checks—to AI agents via tools built on the FastMCP framework. <details><summary>More about</summary>

  It lets developer-configured AI agents query live Solana data from Helius, Jupiter, and RugCheck without custom API glue code.

  _We have officially reached the point where your AI agent needs its own crypto wallet watchdog to tell you a token is a scam before it YOLOs your SOL._

  `mcp` `solana` `web3` `defi` `agent-tooling`
  </details>

- **[solana-mcp-server](https://github.com/expertvagabond/solana-mcp-server)** `⭐ 0` `updated ≤90d` An MCP server providing 25 tools for Solana blockchain interactions, including wallet management, SPL token lifecycle operations, transfers, and network queries. <details><summary>More about</summary>

  It allows AI coding assistants to manage the full lifecycle of Solana tokens and wallets directly from the chat interface, removing the need to manually construct CLI commands or raw RPC calls.

  _We've reached the point where the AI needs a dedicated server just to handle the existential dread of managing Solana token authorities._

  `mcp` `solana` `blockchain` `web3` `tools`
  </details>

- **[solmail-mcp](https://github.com/expertvagabond/solmail-mcp)** `⭐ 0` `updated ≤90d` An MCP server that allows AI agents to send physical mail and postcards worldwide, with payments processed via the Solana blockchain. <details><summary>More about</summary>

  It extends the tool-calling surface of coding agents to physical logistics, enabling developers to build agents that bridge digital workflows with real-world postal delivery.

  _Finally, an agent can drain your Solana wallet just to tell grandma thanks for the socks, provided the LLM doesn't hallucinate the zip code._

  `mcp-server` `solana` `physical-mail` `agent-tooling` `blockchain`
  </details>

- **[spotify-bulk-actions-mcp](https://github.com/khglynn/spotify-bulk-actions-mcp)** `⭐ 0` `updated ≤180d` An MCP server that enables bulk Spotify operations (playlist creation, library exports, CSV imports) with confidence scoring and human-in-the-loop review for uncertain matches. <details><summary>More about</summary>

  It lets developers build AI workflows that manage large Spotify libraries and automate podcast playlist creation without manually handling rate limits or fuzzy matching logic.

  _We now have a Model Context Protocol server, a Python package, and a Claude Code integration just to bulk-add songs from podcast show notes, because apparently the 2025 stack for 'making a playlist' involves three protocols and a confidence score._

  `mcp` `spotify` `bulk-operations` `claude-code`
  </details>

- **[stargate-bridge-mcp](https://github.com/kukapay/stargate-bridge-mcp)** `⭐ 0` `updated ≤1y` An MCP server that enables AI assistants to discover supported chains, fetch bridge quotes, and execute cross-chain token transfers via the Stargate protocol. <details><summary>More about</summary>

  It lets developers wire autonomous bridging operations directly into MCP clients like Claude or Cursor, turning natural language prompts into real on-chain transactions across EVM-compatible networks.

  _We have finally achieved the singularity: your AI assistant can now drain your wallet across eight chains while you argue about the best way to structure a .env file._

  `mcp` `web3` `stargate` `cross-chain` `defi`
  </details>

- **[stella-mcp](https://github.com/bradleylab/stella-mcp)** `⭐ 0` `updated ≤90d` An MCP server that lets AI assistants programmatically create, read, validate, and save Stella system dynamics models in the XMILE format. <details><summary>More about</summary>

  It allows developers working in ecology, economics, or engineering to prototype and modify complex system dynamics models through natural language instead of manual diagramming.

  _We have successfully built an MCP server so your AI can generate system dynamics diagrams, because apparently the next frontier of automation is modeling carbon cycles while you debug a null pointer._

  `mcp` `system-dynamics` `modeling` `xmile` `stella`
  </details>

- **[subscription-tracker-mcp](https://github.com/nckhemanth0/subscription-tracker-mcp)** `⭐ 0` `updated ≤180d` A personal MCP server that connects Gmail and MySQL to let Claude Desktop track, extract, and alert on software subscriptions. <details><summary>More about</summary>

  It demonstrates how developers can build domain-specific MCP servers to give coding assistants structured access to personal data sources like email and databases.

  _We have successfully built an AI pipeline to solve the most harrowing problem of our time: forgetting which $9.99 SaaS experiments we signed up for three months ago._

  `mcp` `claude-desktop` `gmail` `mysql`
  </details>

- **[superscalar-mcp](https://github.com/8144225309/superscalar-mcp)** `⭐ 0` `updated ≤90d` An MCP server that lets AI assistants query Bitcoin Lightning channel factory specs, estimate UTXO savings, and explore SuperScalar factory architectures. <details><summary>More about</summary>

  Developers building on Bitcoin Layer 2 can ask Claude to reason about channel factory tradeoffs and protocol internals without leaving their assistant workflow.

  _Your AI assistant is now an expert on invalidation trees, while you are still struggling to keep your dev dependencies up to date._

  `mcp` `bitcoin` `lightning` `protocol`
  </details>

- **[syndicate-links](https://github.com/cmcgrabby-hue/syndicate-links)** `⭐ 0` `updated ≤30d` An MCP server that exposes tools for managing affiliate programs, tracking conversions, and checking commissions via the Syndicate Links API. <details><summary>More about</summary>

  It enables AI agents to natively handle affiliate attribution and payouts without relying on browser cookies or external tracking links.

  _We have finally reached the point where the agent doesn't just write the code, it also demands its own referral bonus for recommending the IDE it wrote itself in._

  `mcp` `affiliate` `agent-tooling` `monetization`
  </details>

- **[telegram-bot-mcp](https://github.com/fantomaskarus1/telegram-bot-mcp)** `⭐ 0` `updated ≤90d` A Model Context Protocol server that exposes the full Telegram Bot API as 174 tools for use with Claude Code and other AI agents. <details><summary>More about</summary>

  Developers can delegate Telegram bot operations—messaging, payments, forum management, and more—directly to AI agents without writing custom API integration code.

  _We have successfully abstracted away the last remaining excuse for not building that bot that will inevitably haunt your support channel at 3 AM._

  `mcp` `telegram` `bot-api` `claude-code` `agent-tooling`
  </details>

- **[tft-oracle](https://github.com/gregario/tft-oracle)** `⭐ 0` `updated ≤30d` A Model Context Protocol server that provides accurate, up-to-date Teamfight Tactics champion, trait, item, and augment data to LLMs to prevent hallucinations about the game. <details><summary>More about</summary>

  It allows developers and players to build or use AI assistants that can reason about TFT strategy without inventing game mechanics or item recipes.

  _We have successfully built infrastructure to ensure that large language models stop lying about which virtual items combine to make a hypothetical magic spear._

  `mcp` `gaming` `game-data` `context-engineering`
  </details>

- **[the13f-mcp](https://github.com/pickelfintech/the13f-mcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes institutional SEC 13F holdings data to Claude Desktop, Cursor, and VS Code with nine read-only tools for manager search, holdings, and sector flow analysis. <details><summary>More about</summary>

  Developers building financial prompts or agent workflows can query institutional portfolio data directly from their editor without writing HTTP client code or managing API wrappers.

  _You now have the same lagging quarterly data hedge funds disclose to the SEC, pip-installable into your IDE, because apparently your code editor was missing a dedicated window into institutional rearview mirrors._

  `mcp` `fintech` `13f` `data-integration`
  </details>

- **[thegamecrafter-mcp-server](https://github.com/alex-gon/thegamecrafter-mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that connects AI assistants to The Game Crafter API, allowing users to design, manage, and price tabletop game projects via natural language. <details><summary>More about</summary>

  It lets developers who build board games integrate AI-assisted workflows into their design process, handling API calls for catalog browsing, component creation, and pricing without manual web navigation.

  _We have finally achieved the singularity: an MCP server that lets you argue with Claude about cardboard pricing instead of just opening a spreadsheet._

  `mcp` `board-games` `api-integration` `claude`
  </details>

- **[trading212-mcp-server](https://github.com/kyurish/trading212-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that exposes the Trading 212 brokerage API as 32 structured tools, enabling AI assistants like Claude and Cursor to query portfolios, manage pies, and place trades via natural language. <details><summary>More about</summary>

  It allows developers to automate personal finance workflows and portfolio analytics by wiring a brokerage account directly into their existing MCP-compatible AI toolchain.

  _We have finally achieved the peak of developer productivity: asking a large language model to panic-sell AAPL while we debug a CSS grid in Cursor._

  `mcp` `trading` `finance` `python` `broker-api`
  </details>

- **[urdb-mcp](https://github.com/getmystadmin/urdb-mcp)** `⭐ 0` `updated ≤90d` An MCP server that connects AI assistants to URDB, a product integrity database tracking enshittification, shrinkflation, and warranty changes across consumer products. <details><summary>More about</summary>

  Developers building AI workflows can ground model responses in sourced integrity data rather than relying on training cutoffs or hallucinated product knowledge.

  _We have successfully built infrastructure to ask Claude whether a toaster has betrayed us, while our own build pipelines remain a mystery to the same model._

  `mcp` `database` `integrity` `context-engineering`
  </details>

- **[usecortex-mcp](https://github.com/usecortex-official/usecortex-mcp)** `⭐ 0` `updated ≤90d` An MCP server that connects AI coding agents to the UseCortex SaaS, enabling persistent, encrypted knowledge storage and retrieval across MCP-compatible tools. <details><summary>More about</summary>

  It allows coding agents to maintain a shared, structured memory of architectural decisions and standards outside their limited context windows, reducing repetitive re-explanation across sessions and tools.

  _We have successfully solved the problem of AI forgetting things by introducing yet another account, another API key, and another encrypted silo to manage._

  `ai-agents` `context` `mcp` `memory`
  </details>

- **[verilexdata-mcp](https://github.com/carrierone/verilexdata-mcp)** `⭐ 0` `updated ≤90d` An MCP server that exposes 20 structured datasets—including NPI, SEC, PACER, weather, and crypto intelligence—to AI agents via the Model Context Protocol with x402-powered USDC payments. <details><summary>More about</summary>

  It lets agents natively query fresh government, financial, and crypto data behind a pay-per-query wall without the developer wiring custom API integrations.

  _Your AI agent can now independently monitor whale wallets and federal court filings, then send USDC to settle the invoice before you even knew it was curious._

  `mcp` `data-api` `x402` `ai-agents` `government-data`
  </details>

- **[vimo-mcp-server](https://github.com/cuthongthai-vn/vimo-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that exposes Vietnamese financial market data, analytics, and investment playbooks to AI coding assistants and IDEs via the Model Context Protocol. <details><summary>More about</summary>

  It allows developers building in Claude Desktop, Cursor, or Cline to query real-time Vietnamese stock prices, technical indicators, and macro data without wiring up their own API integrations.

  _You now have a 12-layer-defended gateway to Vietnam's commodities playbook running inside your coding assistant, because apparently FPT's technical analysis was the missing context in your TypeScript PR._

  `mcp` `finance` `vietnam` `ide-integration`
  </details>

- **[w3ledger-mcp-server](https://github.com/baskcart/w3ledger-mcp-server)** `⭐ 0` `updated ≤90d` An MCP server that enables AI agents to interact with a self-verifying ledger for checking token balances, creating gift cards, and processing dual-signed purchases via cryptographic signatures. <details><summary>More about</summary>

  Developers building AI agents that handle financial transactions can integrate ledger capabilities with signature verification directly into Claude Desktop, Cursor, or VS Code without building custom blockchain infrastructure.

  _We have officially reached the point where AI agents need their own cryptographically secured economies, complete with loyalty tiers and cashback rates, to prevent them from improvising unauthorized gift cards._

  `mcp` `ledger` `blockchain` `ai-agents` `payments`
  </details>

- **[war-dashboard-data](https://github.com/cct15/war-dashboard-data)** `⭐ 0` `updated ≤30d` An MCP server and daily-updated data feed providing geopolitical conflict risk probabilities and political event data for AI agents. <details><summary>More about</summary>

  Developers building trading bots, risk management systems, or DeFi protocols can wire this server into their agents to make decisions based on structured conflict escalation probabilities instead of parsing headlines.

  _We’ve officially reached the point where autonomous agents can hedge crypto portfolios based on the probability of a ceasefire, yet we still can’t get a linter to agree with our formatting rules._

  `mcp` `geopolitical-data` `risk-intelligence` `agent-data`
  </details>

- **[wemo-mcp-server](https://github.com/apiarya/wemo-mcp-server)** `⭐ 0` `updated ≤30d` An MCP server that lets AI assistants control WeMo smart home devices via natural language by exposing device discovery, status, and control tools. <details><summary>More about</summary>

  Developers building or extending MCP-connected assistants can plug in local smart-home control without writing custom device integration code.

  _We have finally achieved the future: an AI that can argue with your lights, provided you first configure a Python package and a YAML file._

  `mcp` `smart-home` `wemo` `local-ai` `iot`
  </details>

- **[wildfire-mcp-server](https://github.com/aliafsahnoudeh/wildfire-mcp-server)** `⭐ 0` `updated ≤180d` A Model Context Protocol (MCP) server that integrates NASA FIRMS, OpenWeatherMap, and Google Earth Engine data to detect, monitor, and analyze potential wildfires globally. <details><summary>More about</summary>

  It allows developers building AI assistants to equip them with real-time environmental monitoring tools without manually integrating multiple geospatial APIs.

  _We have finally reached the point where our AI agents can autonomously detect burning forests, but they still can't figure out why your CI pipeline failed._

  `mcp` `environment` `geospatial` `server`
  </details>

- **[xendit-mcp](https://github.com/mrslbt/xendit-mcp)** `⭐ 0` `updated ≤30d` An unofficial MCP server that exposes Xendit payment API operations—invoices, disbursements, balances, and transactions—to AI agents and coding assistants. <details><summary>More about</summary>

  Developers building in Southeast Asian markets can let their AI tools query balances, create invoices, and manage transactions directly through agent workflows instead of hand-crafting API calls.

  _We have finally reached the point where you can accidentally disburse real money to a BCA account because your coding agent hallucinated a friendly prompt in Indonesian._

  `mcp` `fintech` `payments` `xendit` `typescript`
  </details>

- **[zcash-mcp](https://github.com/frontier-compute/zcash-mcp)** `⭐ 0` `updated ≤30d` An MCP server that exposes 18 Zcash tools—including shielded sends, memo decoding, attestation, and proof verification—for AI agents to interact with the Zcash blockchain. <details><summary>More about</summary>

  Developers building AI agents that handle crypto payments or on-chain identity can plug shielded Zcash operations directly into Claude Desktop, OpenClaw, or any MCP client without writing blockchain glue code.

  _Your AI agent can now independently manage shielded pools and cross-chain swaps, which is either the future of autonomous finance or the fastest way to accidentally donate to a cryptographic void while you're afk._

  `mcp` `zcash` `blockchain` `agent-tooling` `typescript`
  </details>

- **[copilot](https://github.com/features/copilot)** An MCP server that provides financial and market data capabilities to AI agents and coding assistants. <details><summary>More about</summary>

  Developers building financial tools or trading bots can plug this into their AI workflow to give models real-time access to market data without writing custom API wrappers.

  _We have successfully abstracted away the last remaining barrier to deploying algorithmic trading strategies written by an LLM that hallucinates ticker symbols._

  `finance` `fintech` `market-data` `mcp` `server`
  </details>

- **[fetchserp-mcp-server-node](https://github.com/fetchserp/fetchserp-mcp-server-node)** FetchSERP is a commercial SEO and web intelligence API providing SERP data, keyword research, and backlinks analysis, packaged with an MCP server for integration into AI assistants like Claude and OpenAI. <details><summary>More about</summary>

  It allows developers to build AI agents and chatbots that require real-time search engine data and SEO analysis without maintaining their own scrapers.

  _We have successfully dockerized the act of checking if our blog post hit page one on DuckDuckGo, ensuring the existential crisis is now machine-readable._

  `api` `mcp-server` `seo` `web-scraping`
  </details>

- **[mcp](https://github.com/scrapezy/mcp)** Scrapezy is a SaaS web scraping API that uses natural language prompts to extract structured data from websites, offering exports for both human analysts and AI pipelines. <details><summary>More about</summary>

  It provides a developer-first API and MCP integration that allows teams to skip writing fragile selectors and instead treat the web as a structured data source for applications and LLM contexts.

  _We have successfully abstracted away the last vestiges of understanding HTML, meaning our data pipelines are now entirely dependent on an AI's ability to guess what a div contains today._

  `api` `data-extraction` `llm-integration` `mcp` `web-scraping`
  </details>

- **[mcp-wassenger](https://github.com/wassengerhq/mcp-wassenger)** Wassenger is a WhatsApp Business API platform offering no-code AI agent builders, team chat collaboration, and an MCP server to connect WhatsApp with AI assistants like Claude and Cursor. <details><summary>More about</summary>

  It provides a cloud-hosted MCP server that lets developers integrate WhatsApp messaging into AI workflows and developer tools without managing their own WhatsApp infrastructure.

  _Finally, an MCP server exists to bridge the gap between your IDE and the one channel where stakeholders send requirements as voice notes and vague PDF attachments._

  `ai-agents` `business-api` `mcp` `no-code` `whatsapp`
  </details>

- **[ScrapeGraphAI](https://github.com/scrapegraphai/scrapegraph-ai)** A web scraping API and platform that uses AI to extract structured data from websites using natural language prompts, offering SDKs and an MCP server integration. <details><summary>More about</summary>

  It allows developers to automate data extraction and site monitoring without writing brittle selectors, integrating directly into AI workflows via MCP, LangChain, or CLI tools.

  _We’ve finally reached the point where we need an AI to scrape the AI-generated markup that broke the last generation of scrapers._

  `ai-agent` `ai-infrastructure` `api` `data-extraction` `mcp` `web-scraping`
  </details>

- **[scrapeless-mcp-server](https://github.com/scrapeless-ai/scrapeless-mcp-server)** Scrapeless is a commercial web scraping platform offering a cloud browser, scraping APIs, proxy networks, and a dedicated MCP server to give AI agents and developers programmatic access to public web data. <details><summary>More about</summary>

  It provides the infrastructure needed to feed real-time, cleaned web data into LLMs and AI agents, bypassing typical anti-bot and CAPTCHA hurdles.

  _We have successfully abstracted away the internet into a paid API, ensuring our agents never have to experience the character-building frustration of a 403 error again._

  `ai-agents` `infrastructure` `mcp` `web-scraping`
  </details>

- **[vectorize-mcp-server](https://github.com/vectorize-io/vectorize-mcp-server)** Vectorize provides Hindsight, an open-source, MIT-licensed memory layer that allows AI agents to persist context, learn from mistakes, and improve judgment across sessions via an MCP server. <details><summary>More about</summary>

  Developers building agentic workflows can integrate a model-agnostic memory system that moves beyond simple RAG retrieval to include reflection and pattern detection.

  _We have successfully reached the point where we must install a dedicated memory server just so our tools can remember that we prefer tabs over spaces, sparing us the trauma of repeating it._

  `agent-memory` `llm-infrastructure` `mcp` `memory-layer`
  </details>

- **[![badge](https://glama.ai/mcp/servers/cdeust/Cortex/badge)** A Model Context Protocol (MCP) server implementation for the Cortex memory system, listed among community server implementations. <details><summary>More about</summary>

  It allows MCP-compatible assistants to interface with Cortex, extending their memory capabilities with another backend option.

  _We now have a protocol for the tools that help the AI remember which protocol we are currently using to talk to the tools._

  `context` `mcp` `memory` `server`
  </details>

- **[`@tunedforai/x402-mcp`](https://www.npmjs.com/package/@tunedforai/x402-mcp)** An npm package that implements x402 payment handling as a Model Context Protocol (MCP) server. <details><summary>More about</summary>

  It allows AI agents and LLM-powered tools to programmatically interact with x402-based payment systems via the growing MCP ecosystem.

  _We have successfully abstracted away the complexity of moving money by wrapping it in a protocol designed to help chatbots call tools, which is exactly the kind of architectural inception that keeps senior engineers awake at night._

  `fintech` `mcp` `npm` `payments`
  </details>

- **[`x402.tunedfor.ai`](https://x402.tunedfor.ai)** A pay-per-call crypto market data API designed for AI agents, providing aggregated cross-exchange orderflow, derived metrics, and macro context via MCP and the x402 payment protocol. <details><summary>More about</summary>

  Developers building trading agents can plug in a single MCP endpoint to get 20-exchange aggregated signals and regime detection without maintaining exchange scrapers or API keys.

  _Your trading bot still can't beat the market, but now it can pay USDC to learn that fact 200 milliseconds faster._

  `agent-data` `api` `crypto` `mcp` `x402`
  </details>

- **[agentfetch.dev](https://agentfetch.dev)** An MCP server and API that fetches web content, converts it to clean Markdown, and provides token estimation and caching for AI agents. <details><summary>More about</summary>

  It allows coding agents and LLM workflows to ingest web data without blowing context windows or paying full price for repeated fetches.

  _Another essential middleware layer so your agent can browse the web safely, proving that the modern developer experience is mostly just configuring pipes for pipes._

  `mcp` `web-scraping` `context-management` `agent-tooling`
  </details>

- **[Aiven projects](https://aiven.io)** Aiven is a managed cloud platform providing open-source data services like Kafka, PostgreSQL, and ClickHouse, which includes an MCP server for integrating data infrastructure with AI workflows. <details><summary>More about</summary>

  It offers an MCP interface that allows AI agents and coding assistants to directly interact with and manage production-grade data infrastructure across major cloud providers.

  _We have successfully abstracted infrastructure management so far that your AI agent can now provision a Kafka cluster while you argue with it about why the bill is so high._

  `cloud` `data-infrastructure` `managed-services` `mcp`
  </details>

- **[Audioscrape](https://www.audioscrape.com/docs/integrations/mcp)** An MCP server that lets AI assistants like Claude search and retrieve content from a database of over a million hours of indexed podcasts, interviews, and talks. <details><summary>More about</summary>

  It allows developers to query spoken audio content directly from their IDE or terminal, bridging the gap between long-form audio intelligence and the coding workflow.

  _We have finally achieved the singularity where your coding agent can procrastinate by listening to podcasts instead of just reading documentation._

  `audio-search` `context-tooling` `integrations` `mcp` `podcast`
  </details>

- **[Augments](https://augments.dev)** An MCP server that provides Claude Code with type signatures, prose documentation, and code examples from any npm package. <details><summary>More about</summary>

  It allows AI coding assistants to answer framework and library questions with up-to-date, version-specific documentation rather than hallucinated or outdated training data.

  _We have officially reached the point where our AI assistants need their own package managers to stop them from confidently inventing APIs that haven't existed since 2022._

  `claude-code` `context` `docs` `mcp` `npm`
  </details>

- **[BrainGrid MCP](https://docs.braingrid.ai/mcp-server/installation)** BrainGrid is an MCP server that integrates with AI coding assistants like Claude Code, Cursor, and Windsurf to generate requirements and tasks from within the developer's existing workflow. <details><summary>More about</summary>

  It allows developers to extend their current AI coding environment with task and requirement generation capabilities via the Model Context Protocol without switching contexts.

  _You can now authenticate yet another service just to ask an agent to write the requirements for the code that another agent is going to write for you._

  `claude-code` `cursor` `integration` `mcp` `task-management`
  </details>

- **[calcnook](https://pypi.org/project/calcnook)** A Python package available on PyPI that implements a Model Context Protocol (MCP) server for finance and fintech calculations. <details><summary>More about</summary>

  It provides a standardized MCP interface for financial computations, allowing AI agents and coding assistants to offload complex math to a dedicated tool.

  _We have successfully abstracted basic arithmetic into a protocol server, ensuring your AI agent now needs a network round-trip to calculate a compound interest rate._

  `mcp` `finance` `python` `fintech` `tooling`
  </details>

- **[Carbon Voice](https://getcarbon.app)** Getcarbon.app is a Model Context Protocol (MCP) server implementation focused on communication tools. <details><summary>More about</summary>

  It provides developers with a plug-and-play MCP server to extend AI assistants with communication capabilities.

  _Another entry in the MCP ecosystem that solves the critical problem of explaining to your agent how to send a message, assuming you can first solve the problem of getting the agent to run reliably._

  `communication` `mcp` `server`
  </details>

- **[CoinGecko](https://docs.coingecko.com/docs/ai-agent-hub/mcp-server)** An official MCP server from CoinGecko that exposes real-time and historical cryptocurrency market, onchain, and metadata APIs as tools for LLMs and AI agents. <details><summary>More about</summary>

  Developers building crypto-aware AI agents or IDE integrations can connect their tools to 15k+ coins and onchain data without writing custom API wrappers.

  _We have now reached the point where even querying the price of a meme coin requires configuring a streaming HTTP server, an SSE fallback, and a Stainless-powered MCP config file._

  `api` `crypto` `llm-tools` `mcp`
  </details>

- **[Context by Fulcra](https://www.fulcradynamics.com)** Context by Fulcra is a personal data aggregation platform that collects biometrics, habits, and environmental data to provide health insights, and offers a hosted MCP server for connecting this data to AI agents. <details><summary>More about</summary>

  It provides a Personal MCP Server and Life API, allowing developers to pipe real user biometric and contextual data into their own AI agents or computational notebooks for personalized applications.

  _We have officially reached the point where the ecosystem requires a dedicated protocol server just to feed your Oura ring data and bedtime sound levels into Claude so it can optimize your HRV._

  `agent-context` `health-api` `mcp` `personal-data`
  </details>

- **[contextstream/mcp-server](https://www.npmjs.com/package/@contextstream/mcp-server)** An npm package providing a Model Context Protocol (MCP) server implementation for context streaming. <details><summary>More about</summary>

  It enables developers to integrate context-streaming capabilities into MCP-compatible AI workflows via a standard Node.js package.

  _We have successfully abstracted the abstraction, meaning you can now install a package to help your assistant talk to a protocol that helps it talk to your code._

  `context-streaming` `mcp` `npm`
  </details>

- **[Convex](https://stack.convex.dev/convex-mcp-server)** A Model Context Protocol server from Convex that allows AI agents and coding assistants to introspect deployments, run functions, and read or write data via tools like Cursor. <details><summary>More about</summary>

  It lets agents directly interact with your backend state and functions, turning your live Convex deployment into a tool-calling surface for coding assistants.

  _You can now watch an agent confidently write a one-off query to count word frequencies, be amazed by the automation, and then spend twenty minutes explaining to your team why production data is now also a debugging playground._

  `agent-tools` `backend` `convex` `cursor` `mcp`
  </details>

- **[CSPR.trade](https://cspr.trade)** CSPR.trade is a Model Context Protocol (MCP) server implementation for interacting with Casper blockchain financial data and trading operations. <details><summary>More about</summary>

  It allows developers building AI agents to give their models direct, structured access to blockchain finance tools via the MCP standard.

  _We have successfully abstracted blockchain trading into yet another server protocol, ensuring your AI agent can now lose money on decentralized finance with unprecedented interoperability._

  `blockchain` `fintech` `mcp` `server`
  </details>

- **[Dash](https://kapeli.com/dash)** Dash is a macOS application that provides offline access to over 200 API documentation sets, code snippets, and cheat sheets, with added MCP support for integrating documentation into AI workflows. <details><summary>More about</summary>

  It gives AI agents like Claude direct access to up-to-date, offline framework documentation via MCP, reducing hallucinations and manual lookups during coding sessions.

  _We have finally reached the point where our offline documentation browsers need to be agent-ready, just in case the AI decides it wants to read the React docs without bothering a search engine._

  `developer-tools` `documentation` `mcp` `offline`
  </details>

- **[DeepWiki by Devin](https://docs.devin.ai/work-with-devin/deepwiki-mcp)** A Model Context Protocol server that exposes Devin's DeepWiki knowledge base to MCP-compatible clients. <details><summary>More about</summary>

  Developers can connect Devin's indexed documentation and wikis directly into their MCP-aware workflows without building custom integrations.

  _We have now achieved the architectural milestone of wrapping a documentation index inside a protocol wrapper so your AI can browse its own encyclopedia._

  `devin` `knowledge-base` `mcp` `protocol`
  </details>

- **[DexPaprika API](https://docs.dexpaprika.com/introduction)** DexPaprika provides a REST and streaming API for real-time DEX and on-chain crypto data, including liquidity pools, swaps, and token metrics across 33 blockchain networks. <details><summary>More about</summary>

  It offers developers (and their AI agents) structured, near real-time blockchain data without requiring API keys, with official MCP server support for IDE integrations.

  _Another essential API that will inevitably be fed into a vibe-coded trading bot by an agent that confidently explains why a 200ms latency spike means the market is collapsing._

  `api` `blockchain` `crypto` `data` `mcp`
  </details>

- **[DIDLogic](https://didlogic.com)** didlogic.com is a VoIP provider offering SIP trunks, DIDs, and voice termination services, with an MCP server implementation enabling AI agents to interact with telephony features. <details><summary>More about</summary>

  It allows developers to plug real-world phone calling capabilities into AI agents and workflows via the Model Context Protocol, bridging software automation with telecommunications.

  _We have finally reached the singularity where your autonomous coding agent can now disappoint clients via phone call instead of just via email._

  `communication` `mcp` `telephony` `voip`
  </details>

- **[elementfm/mcp](https://gitlab.com/elementfm/mcp)** A GitLab-hosted implementation of a Model Context Protocol (MCP) server, created in March 2025. <details><summary>More about</summary>

  It provides developers with an MCP server implementation reference hosted on GitLab, fitting into the growing ecosystem of context-sharing tools.

  _We have successfully reached the point where the protocol for sharing context has its own protocols, and we are now indexing the places where those protocol implementations live._

  `gitlab` `mcp` `protocol`
  </details>

- **[FinancialData.Net](https://financialdata.net)** A financial data API providing real-time and historical stock market data, company fundamentals, and alternative data via REST endpoints, including an MCP server implementation. <details><summary>More about</summary>

  Standardizes access to global equity and crypto data for developers building trading algorithms, financial dashboards, or AI agents that need market context.

  _Yet another data vendor promising 'institutional-grade' insights, ensuring your AI agent will confidently hallucinate trades based on slightly delayed JSON._

  `api` `financial-data` `fintech` `mcp` `trading`
  </details>

- **[Find-A-Domain](https://findadomain.dev/mcp)** An HTTP-based Model Context Protocol server that provides real-time domain availability checks, WHOIS lookups, and TLD listing for AI applications. <details><summary>More about</summary>

  It allows AI agents and assistants to perform live domain verification and research as part of broader automated workflows.

  _We have finally achieved the technological singularity where your AI agent can argue with a registrar API about whether .xyz is taken, saving you the crushing burden of opening a browser tab._

  `api` `domain` `mcp` `tooling`
  </details>

- **[Free tier available](https://spix.sh)** Spix.sh is a server implementation for the Model Context Protocol (MCP) designed to facilitate communication workflows. <details><summary>More about</summary>

  It provides developers with a standardized MCP server to integrate communication capabilities into their AI agent toolchains.

  _Another essential tile in the ever-expanding mosaic of MCP servers, ensuring your agent can theoretically talk to everything except the human who actually understands the requirements._

  `communication` `mcp` `server`
  </details>

- **[GameBrain API](https://gamebrain.co/api)** A video game database API providing access to over 775,000 games, reviews, and media, with an MCP server for integrating game data into AI chatbots. <details><summary>More about</summary>

  It offers developers a structured way to enrich applications with game discovery data and allows AI agents to query a large semantic database via the Model Context Protocol.

  _We have successfully abstracted the recommendation engine so far that an AI can now argue with you about whether *Kingdom Come: Deliverance II* is actually an RPG, saving you the trouble of forming your own opinions._

  `api` `database` `gaming` `mcp`
  </details>

- **[GistPad VS Code extension](https://marketplace.visualstudio.com/items)** A Visual Studio Code extension for managing GitHub Gists and repositories as a virtual filesystem, with an integrated MCP server for interacting with snippets via Copilot chat. <details><summary>More about</summary>

  It lets developers treat GitHub as a lightweight knowledge base and code snippet library without cloning repos, while enabling AI assistants to directly read and manipulate that knowledge.

  _Finally, an extension to manage the gists you hoard but never look at, now accessible via an AI agent that will happily summarize code you forgot you wrote._

  `copilot` `github-gists` `knowledge-management` `mcp-server` `vscode-extension`
  </details>

- **[Guide ↗](https://var.gg)** A web-based tool that generates naming ideas for variables, data models, and documentation to accelerate development workflows. <details><summary>More about</summary>

  It offers a quick, browser-based way for developers to overcome naming blocks and speed up the implementation of code and docs.

  _Just when you thought the AI singularity was about curing diseases, it turns out the first real productivity gain is automating the part where we stare at the screen whispering 'context' versus 'ctx'._

  `mcp` `naming` `productivity`
  </details>

- **[hosted endpoint](https://glama.ai/mcp/connectors)** A hosted registry and browser interface for discovering and connecting to 3,065+ remote MCP servers that require no local installation. <details><summary>More about</summary>

  Developers can browse, filter, and connect to a massive ecosystem of remote MCP servers directly from their AI clients without managing local server configurations.

  _We have successfully abstracted the pain of running MCP servers locally into the pain of choosing which of three thousand nearly identical connectors to trust._

  `mcp` `registry` `remote-servers` `tool-discovery`
  </details>

- **[Knit MCP](https://developers.getknit.dev/docs/knit-mcp-server-getting-started)** Knit MCP Hub is a platform for creating and managing hosted MCP servers that expose pre-built integrations with SaaS tools for use in AI agents and IDEs. <details><summary>More about</summary>

  It allows developers to instantly package dozens of SaaS API integrations (HRIS, CRM, ATS) into a single MCP endpoint for LangGraph, LangChain, or OpenAI assistants without writing custom connector code.

  _We have successfully abstracted the job of writing API integrations into the job of clicking through a wizard to generate a URL that acts as an integration._

  `agent-tooling` `integrations` `mcp` `saas`
  </details>

- **[Lingo.dev](https://lingo.dev)** Lingo.dev is a Model Context Protocol (MCP) server that integrates localization workflows into AI-assisted development environments. <details><summary>More about</summary>

  It allows developers to automate internationalization and translation tasks directly within their AI coding agent workflows via the MCP standard.

  _We have successfully abstracted 'translating strings' into a protocol server, ensuring your Claude instance can now argue about grammar in 40 languages instead of just one._

  `automation` `i18n` `localization` `mcp`
  </details>

- **[logotype/fixparser](https://gitlab.com/logotype/fixparser)** A Model Context Protocol (MCP) server implementation for parsing and interacting with the FIX (Financial Information eXchange) protocol. <details><summary>More about</summary>

  It allows AI agents and coding assistants to understand and manipulate financial message formats, bridging the gap between LLMs and legacy trading infrastructure.

  _Yet another reminder that while we're building AGI, the most critical plumbing in finance still requires a specialized parser to convince a model that a string of cryptic ASCII actually represents a multi-million dollar order._

  `fintech` `mcp` `parser` `protocol`
  </details>

- **[MCP](https://modelcontextprotocol.io/docs/getting-started/intro)** The Model Context Protocol (MCP) is an open-source standard that provides a universal interface for connecting AI applications to external data sources, tools, and workflows. <details><summary>More about</summary>

  It reduces the integration complexity for developers building AI agents by providing a standardized 'USB-C port' style protocol for accessing external systems like calendars, databases, and file systems.

  _We have successfully standardized the process of explaining to an LLM how to read a spreadsheet, meaning the holy grail of modern engineering is now writing adapters for adapters._

  `ai-infrastructure` `integration` `mcp` `protocol` `standard`
  </details>

- **[mcp-install-instructions.alpic.cloud](https://mcp-install-instructions.alpic.cloud)** A web tool that generates shareable, client-specific installation guides and deeplinks for MCP servers. <details><summary>More about</summary>

  It standardizes the onboarding experience for MCP server maintainers by automating the creation of setup instructions for various clients.

  _We have successfully reached the point where we need specialized tooling just to explain how to install the tooling that explains how to connect the AI to the tooling._

  `mcp` `documentation` `developer-tools` `installation`
  </details>

- **[mcp-page](https://heliumtrades.com/mcp-page)** An MCP server that gives AI assistants real-time news, media bias analysis, live market data, and meme intelligence via a simple config paste. <details><summary>More about</summary>

  Developers wiring up AI workflows can add live market and news context to their assistants without building custom scrapers or API integrations.

  _Because nothing says robust AI-driven development like prompting Claude to do fundamental analysis based on meme sentiment and political bias scores._

  `mcp` `market-data` `news` `tools`
  </details>

- **[mcp.composio.dev](https://mcp.composio.dev)** A web directory and registry for discovering Model Context Protocol (MCP) servers and tools. <details><summary>More about</summary>

  It centralizes the rapidly expanding ecosystem of MCP integrations, making it easier for developers to find the right tools to connect AI models to external data and APIs.

  _Just when you thought you had a handle on the LLM wrapper landscape, we've invented a protocol for the protocol so you can spend your afternoon browsing directories instead of writing code._

  `mcp` `directory` `registry` `tooling`
  </details>

- **[mcps-playground](https://mcpsplayground.com)** A browser-based playground for connecting and testing remote Model Context Protocol (MCP) servers with various AI models like Claude and Gemini. <details><summary>More about</summary>

  It provides developers with a hosted interface to manually configure, connect, and validate MCP integrations without needing to set up a local client environment.

  _Another pristine sandbox where you can carefully wire together integrations that will inevitably be broken by the next undocumented protocol update._

  `browser` `mcp` `playground` `tooling`
  </details>

- **[Mercado Libre](https://mcp.mercadolibre.com)** An official Model Context Protocol server for MercadoLibre that exposes e-commerce data and actions to MCP-compatible AI clients. <details><summary>More about</summary>

  It lets AI coding assistants and agents query live MercadoLibre marketplace data and automate commerce workflows without bespoke API glue code.

  _Another official MCP server drops, inching us closer to an ecosystem where your agent has ten tabs open, a dozen tokens burning, and still can't decide whether to buy a USB cable._

  `agent-integration` `ecommerce` `mcp` `mercadolibre`
  </details>

- **[Mercado Pago](https://mcp.mercadopago.com)** An official Model Context Protocol server that exposes Mercado Pago payment APIs as tools for AI agents and LLM workflows. <details><summary>More about</summary>

  It allows AI agents and coding assistants to directly integrate Mercado Pago functionality without developers manually wiring API calls.

  _Another official MCP server appears, bringing us one step closer to a world where every SaaS API gets wrapped in a protocol that your agent will probably forget to use anyway._

  `api-integration` `mcp` `mercado-pago` `payments`
  </details>

- **[OctoEverywhere For 3D Printing](https://octoeverywhere.com/mcp)** A hosted Model Context Protocol server that provides AI LLMs with secure, read-and-control access to 3D printers via OctoPrint, Klipper, and major printer brands. <details><summary>More about</summary>

  It lets developers building AI workflows or chat interfaces integrate live 3D printer telemetry and controls without writing custom hardware integrations.

  _We have finally achieved the singularity: your LLM can now panic-pause a 12-hour benchy print while you are just trying to debug a YAML file._

  `3d-printing` `hardware` `iot` `mcp`
  </details>

- **[Pearl](https://mcp.pearl.com)** Pearl API MCP Server is a Model Context Protocol server implementation for the Pearl API. <details><summary>More about</summary>

  It allows AI assistants and agents to integrate with Pearl's API by exposing its capabilities through the standardized MCP interface.

  _Yet another MCP server entering the ecosystem, proving that the 'build once, wrap everywhere' protocol is rapidly becoming its own full-time integration job._

  `api` `mcp` `server`
  </details>

- **[Pica](https://www.withone.ai)** An agent infrastructure platform providing a CLI, SDK, and managed MCP server to connect AI agents to 250+ platforms with managed auth, memory, and 50,000+ pre-built integrations. <details><summary>More about</summary>

  Developers can skip writing and maintaining custom OAuth flows, rate limiting, and API wiring by routing agent actions through a single authenticated runtime.

  _We have successfully abstracted integrating APIs into prompting a CLI to prompt an agent to use an API, which is exactly the kind of recursive workflow layering that guarantees someone will debug a token refresh at 2am._

  `agent-infrastructure` `auth` `cli` `integrations` `mcp`
  </details>

- **[Polygon.io](https://massive.com)** Massive is a stock market API providing real-time and historical tick data via REST and WebSockets in JSON and CSV formats. <details><summary>More about</summary>

  It serves as a data source for developers building financial applications or creating MCP server integrations for AI agents that require market data.

  _We have successfully abstracted the chaos of the global economy into a standardized JSON endpoint so your autonomous agent can panic about market volatility at machine speed._

  `api` `data` `finance` `mcp`
  </details>

- **[pricepertoken/mcp-server](https://pricepertoken.com/mcp)** A free MCP server that provides real-time LLM pricing, benchmark, and latency data to AI coding assistants like Claude Code, Cursor, and Windsurf. <details><summary>More about</summary>

  It allows developers to compare model costs and performance benchmarks directly within their AI-assisted workflow without switching to a browser.

  _Finally, an MCP server to solve the catastrophic existential dread of not knowing if Claude 3.5 Sonnet is 0.2 cents cheaper on Bedrock while you are trying to write a for-loop._

  `benchmarks` `developer-tools` `llm` `mcp` `pricing`
  </details>

- **[Ragie](https://www.ragie.ai)** A fully managed RAG-as-a-Service platform that handles document parsing, multimodal indexing, and retrieval via API, including an MCP server for agent context. <details><summary>More about</summary>

  It allows developers to outsource the entire RAG pipeline—ingestion, chunking, and hybrid search—so they can focus on application logic rather than vector database infrastructure.

  _Yet another magical 'context engine' promising to solve hallucination, conveniently ignoring that piping your proprietary docs into a third-party SaaS is just a new way to scatter your proprietary data across the internet._

  `api` `backend` `mcp` `rag` `retrieval`
  </details>

- **[remote server](https://www.hiveintelligence.xyz/crypto-mcp)** Hive Intelligence provides a managed MCP server that federates crypto and blockchain data from nine providers into a single endpoint for AI agents and developer tools. <details><summary>More about</summary>

  Developers building crypto-aware agents can skip stitching together multiple provider APIs by connecting Claude, Cursor, or ChatGPT to one normalized MCP endpoint.

  _Because nothing says 'focus on shipping features' like debugging why your trading bot insists on calling a token-security tool that costs one credit to tell you the rug is already pulled._

  `agents` `blockchain` `crypto` `data` `mcp`
  </details>

- **[RepoMapper](https://github.com.mcas.ms/pdavis68/RepoMapper)** RepoMapper is an MCP server implementation intended to be used with coding assistants like Continue to provide repository context. <details><summary>More about</summary>

  It extends the context-awareness of AI coding agents by mapping repository structures for better code navigation and generation.

  _We have successfully abstracted the job of understanding code into yet another server that exists solely to tell the actual AI where the files are._

  `mcp` `context` `continue` `server`
  </details>

- **[RevenueCat](https://www.revenuecat.com/docs/tools/mcp)** An official MCP server from RevenueCat that exposes subscription, offering, and customer data to AI models and coding agents. <details><summary>More about</summary>

  It allows developers to query live RevenueCat data directly from their AI assistant instead of switching contexts to dashboards or writing API wrapper scripts.

  _We have successfully abstracted away the effort of opening a dashboard by adding a protocol server, a host client, and a context window budget that vanishes instantly._

  `integration` `mcp` `revenuecat` `subscriptions`
  </details>

- **[Rootly](https://rootly.com)** Rootly is an incident management platform that provides AI SRE agents to automate root cause analysis, suggest fixes, and manage on-call workflows directly within Slack, Teams, or an IDE via an MCP server. <details><summary>More about</summary>

  It aims to reduce resolution times and on-call fatigue by automating the tedious parts of incident response, from triage to retrospectives, allowing developers to focus on fixing the actual issue.

  _Now your AI can wake up, diagnose the outage, and suggest the rollback while you are still staring at the ceiling wondering if the pager notification was just a bad dream._

  `ai-sre` `devops` `incident-management` `mcp` `reliability`
  </details>

- **[Rube](https://rube.app)** Rube is an MCP server by Composio that connects AI assistants to external apps like Gmail, Slack, and VSCode to automate cross-platform workflows via prompts. <details><summary>More about</summary>

  It allows developers to extend the reach of their AI agents beyond the codebase into daily productivity tools without writing custom integration glue.

  _Just when you thought you were safe from notification fatigue, your AI agent now has the keys to block your calendar and summarize your inbox while you wonder who is actually managing whom._

  `integrations` `mcp` `workflow-automation`
  </details>

- **[sascharo.github.io/gxtract](https://sascharo.github.io/gxtract)** GXtract is a Model Context Protocol (MCP) server that integrates with GroundX to extract architectural and implementation details from documents, specifically targeting scientific papers and research articles. <details><summary>More about</summary>

  It allows developers to plug document extraction and semantic search capabilities into MCP-compatible clients like VS Code, bridging the gap between research literature and coding workflows.

  _We have successfully abstracted the act of reading a paper into a server protocol, ensuring you can ignore groundbreaking research without ever leaving your IDE._

  `document-extraction` `fastmcp` `groundx` `mcp` `research`
  </details>

- **[smithery.ai](https://smithery.ai)** Smithery is a directory and registry for Model Context Protocol (MCP) servers and tooling. <details><summary>More about</summary>

  It serves as a centralized hub for developers to discover and integrate MCP-compatible tools into their AI agent workflows.

  _Another meta-layer directory has arrived to help us organize the tools we use to organize the agents that are organizing our code._

  `mcp` `directory` `registry` `ai-tooling`
  </details>

- **[SonarQube](https://www.sonarsource.com)** SonarSource provides static analysis and security tooling (SonarQube) to detect bugs, vulnerabilities, and code smells in codebases, with specific features for validating AI-generated code and an MCP server for AI workflow integration. <details><summary>More about</summary>

  It integrates into CI/CD pipelines and IDEs to automatically enforce quality gates on AI-generated code, helping teams manage technical debt and security risks as they adopt coding agents.

  _We have entered the era where we need enterprise-grade static analysis specifically to clean up the mess made by the 'ship fast' AI assistants we just bought._

  `ai-code-review` `code-quality` `mcp` `security` `static-analysis`
  </details>

- **[subdownload.com](https://subdownload.com)** A service that provides YouTube video transcripts and AI-generated summaries via a web UI, REST API, and MCP server for integration with AI agents and developer workflows. <details><summary>More about</summary>

  It allows developers to programmatically feed video content into LLMs by handling transcript extraction and summarization across 40+ agents and editors like Cursor and Claude.

  _We have officially reached the point where our AI agents need their own dedicated 'skills' and MCP servers just to watch YouTube videos for us._

  `mcp` `transcript` `api` `knowledge-base`
  </details>

- **[ThinkChain AI](https://thinkchain.ai)** ThinkChain.ai offers cloud-hosted MCP server bundles that connect AI assistants to external tools via downloadable configuration files or URLs. <details><summary>More about</summary>

  It simplifies giving AI clients like Claude and ChatGPT access to developer tools by removing the need for local server setup or credential management.

  _We have successfully abstracted setting up the abstraction that abstracts the work we were already abstracting._

  `infrastructure` `integrations` `mcp` `tooling`
  </details>

- **[Trade Agent](https://tradeit.app)** Trade It is a non-custodial embedded trading platform that provides APIs, a React SDK, and an MCP server to let developers integrate stock, crypto, and options trading into apps, newsletters, and AI agents. <details><summary>More about</summary>

  It gives developers a way to wire real brokerage execution into AI agents and chat-based workflows without handling funds or building broker integrations from scratch.

  _Because nothing says responsible AI progress like giving your chatbot the ability to YOLO your Robinhood account into a meme-coin put spread at 3 AM._

  `agent-tooling` `embedded-trading` `fintech` `mcp` `sdk`
  </details>

- **[usegorilla.app](https://usegorilla.app)** A multi-platform lead discovery SaaS that surfaces high-intent posts across Reddit, X, YouTube, TikTok, and LinkedIn, with an MCP server for running queries from inside AI coding agents. <details><summary>More about</summary>

  Developers building SaaS products can trigger lead-hunting workflows directly from their editor instead of context-switching to a marketing dashboard.

  _We have finally achieved the singularity where your IDE can now draft outreach messages to strangers on TikTok while you are trying to fix a CSS bug._

  `mcp` `lead-generation` `marketing` `saas`
  </details>

- **[WayStation](https://waystation.ai/connect/mcp-server)** WayStation is a no-code integration hub that connects any MCP host with daily productivity apps and tools. <details><summary>More about</summary>

  It allows developers to quickly bridge MCP-compatible hosts like Claude or ChatGPT with external tools without writing custom server code.

  _We have successfully abstracted the abstraction, meaning you can now pay a SaaS to manage the protocol that was supposed to simplify integrations in the first place._

  `integration` `mcp` `middleware` `no-code`
  </details>

- **[WebDataSource](https://www.webdatasource.com)** A Model Context Protocol server that exposes web crawling, scraping, and data retrieval tools for integration into agentic AI workflows and IDEs. <details><summary>More about</summary>

  Developers can connect this MCP server to IDEs like VS Code to let coding agents autonomously discover, crawl, and extract structured data from the internet or intranets.

  _Another essential piece of infrastructure so your agent can browse the web for you, because apparently the one thing it still needs help with is reading the documentation you already opened in a different window._

  `agent-tooling` `ide-integration` `mcp` `web-scraping`
  </details>

- **[Website](https://celiums.io)** Celiums.io is a Model Context Protocol (MCP) server implementation focused on knowledge and memory management. <details><summary>More about</summary>

  It provides developers with a standardized way to give their AI agents persistent memory and knowledge retrieval capabilities via the MCP standard.

  _Just what we needed: another layer of abstraction to help our agents remember that they forgot the context we already paid to process._

  `knowledge` `mcp` `memory` `server`
  </details>

- **[Website](https://prior.cg3.io)** Prior is a shared knowledge layer and MCP server that allows coding agents to search for solutions previously discovered by other agents, reducing redundant debugging and token usage. <details><summary>More about</summary>

  It attempts to solve the context-amnesia problem in AI development by letting your agent learn from the successes (and failures) of the wider agent ecosystem rather than starting from scratch every session.

  _We have finally achieved the circular economy of bad ideas: an agent sharing its hallucinated fixes with another agent so neither has to think for themselves._

  `agent-memory` `cli-tool` `knowledge-sharing` `mcp`
  </details>

- **[Zapier](https://zapier.com/mcp)** Zapier MCP is a hosted MCP server that exposes 30,000+ Zapier actions across 9,000+ apps to AI clients like Claude, ChatGPT, and Cursor. <details><summary>More about</summary>

  It lets developers connect any MCP-compatible AI client to a massive library of pre-authenticated app actions without writing integration code or managing OAuth flows.

  _We have successfully abstracted the abstraction, so your AI can now trigger a Zap that triggers a webhook that triggers your CI, and nobody knows where the actual logic lives anymore._

  `automation` `integrations` `mcp` `tooling` `zapier`
  </details>

- **[Zenable](https://docs.zenable.io/integrations/mcp/getting-started)** Zenable provides an MCP server that connects AI coding assistants to organizational governance policies, automatically checking and improving code against predefined requirements within supported IDEs. <details><summary>More about</summary>

  It allows teams to enforce consistent coding standards, security requirements, and compliance policies directly within their AI agent workflows rather than relying solely on post-hoc PR reviews.

  _You can now outsource your managerial anxiety to an MCP server that yells at your AI agent for not following the very rules you wrote but never actually enforced._

  `governance` `ide-integration` `mcp` `policy-as-code`
  </details>