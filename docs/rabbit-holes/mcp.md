# MCP Servers and Tooling

Model Context Protocol servers, clients, and tooling for giving AI agents access to the world without handing them the keys.


## Tools & Resources

- **[mcp-playwright](https://github.com/executeautomation/mcp-playwright)** `⭐ 5.5k` An MCP server that exposes Playwright-powered browser automation (and some API automation) to LLM clients like Claude Desktop and IDE agents. <details><summary>More about</summary>

  It lets developer-facing agents drive a real browser to reproduce bugs, take screenshots, scrape pages, and generate Playwright test code as part of an automated workflow.

  _You’ll start describing “test on iPhone 13” in natural language to an agent and then spend the afternoon debugging whether the failing step is your app, the prompt, or the browser sandbox._

  `mcp` `playwright` `browser-automation` `testing` `devtools`
  </details>

- **[magic-mcp](https://github.com/21st-dev/magic-mcp)** `⭐ 4.8k` An MCP server that plugs into Cursor/Windsurf/VS Code (including Cline) to generate and enhance frontend UI components from natural-language prompts. <details><summary>More about</summary>

  It turns “build me a polished nav/hero/modal” into an IDE-native workflow that drops TypeScript UI components straight into your repo, cutting down the time between idea and shippable UI.

  _Your frontend backlog becomes a chat prompt queue, and suddenly you’re doing design reviews on code you didn’t write but somehow now “own.”._

  `mcp` `ui-generation` `cursor` `vscode` `frontend`
  </details>

- **[excel-mcp-server](https://github.com/haris-musa/excel-mcp-server)** `⭐ 3.8k` An MCP server that lets AI agents create, read, and modify Excel files programmatically without requiring Microsoft Excel. <details><summary>More about</summary>

  It turns spreadsheets into a tool-callable interface so developers can automate report generation, data cleanup, and analysis workflows through MCP-enabled agents.

  _Now your build pipeline can fail because an agent “helpfully” rewrote a pivot table and called it deterministic._

  `mcp` `excel` `automation` `tool-calling` `developer-tools`
  </details>

- **[mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)** `⭐ 3.7k` A set of Cloudflare-hosted Model Context Protocol (MCP) servers that let MCP clients connect to Cloudflare services and perform account-level tasks via typed tools and APIs. <details><summary>More about</summary>

  It turns Cloudflare operations (Workers, observability, DNS analytics, audit logs, AI Gateway, etc.) into natural-language workflows inside MCP clients like Cursor or Claude, reducing context-switching and glue-code.

  _You’ll start treating production configuration as a conversational interface, and then spend the afternoon debating whether the AI “suggested changes” counts as IaC or just vibes-driven DevOps._

  `mcp` `cloudflare` `workers` `devops` `observability`
  </details>

- **[godot-mcp](https://github.com/coding-solo/godot-mcp)** `⭐ 3.4k` An MCP server that lets AI agents interface with the Godot game engine to launch the editor, run projects, and capture debug output. <details><summary>More about</summary>

  It gives coding agents a tight “edit → run → observe errors/logs” loop inside real Godot projects, which makes generated fixes and debugging less blind.

  _You’ll start treating the Godot editor like a headless test runner for an LLM that insists it can “just verify” the scene tree, and somehow that becomes your new CI._

  `mcp` `godot` `game-dev` `agent-tools` `debugging`
  </details>

- **[mcp-unity](https://github.com/codergamester/mcp-unity)** `⭐ 1.6k` An MCP (Model Context Protocol) plugin that bridges AI assistants to the Unity Editor via a Unity package and a Node.js MCP server. <details><summary>More about</summary>

  It lets developers use MCP-capable coding agents (Cursor, Windsurf, Claude Code, Codex CLI, Copilot, etc.) to run project operations inside the Unity Editor instead of copy-pasting context and commands by hand.

  _Your IDE can now “talk to Unity,” which is great until you realize you’ve added a second runtime, a protocol, and an agent mood swing to the simplest “can you press Play?” request._

  `mcp` `unity` `game-development` `ide-integration` `developer-tools`
  </details>

- **[mysql_mcp_server](https://github.com/designcomputer/mysql_mcp_server)** `⭐ 1.2k` An MCP server that provides a controlled interface for AI clients to interact with MySQL databases (list tables, read data, run queries). <details><summary>More about</summary>

  It lets developers safely wire tools like Claude Desktop or VS Code into a MySQL database for exploration and analysis without giving the model raw, unrestricted DB access.

  _You finally got “AI can query prod” into a least-privilege box, and now your new hobby is explaining why the box still needs a threat model._

  `mcp` `mysql` `database-tools` `agent-tooling` `developer-workflow`
  </details>

- **[mcp-neo4j](https://github.com/neo4j-contrib/mcp-neo4j)** `⭐ 941` A set of Neo4j Labs Model Context Protocol (MCP) servers that let MCP clients talk to Neo4j via STDIO, SSE, or HTTP. <details><summary>More about</summary>

  It gives developers a ready-made way to let assistants (Claude Desktop, VS Code, Cursor, Windsurf, Gemini CLI) query Neo4j with Cypher, persist “memory” as a knowledge graph, and even manage Aura instances from chat.

  _Now your graph database has an agent interface, which is great until you realize you need a schema, an APOC plugin, transport flags, and a threat model just to ask “what’s in this graph?”._

  `mcp` `neo4j` `database` `cypher` `knowledge-graph`
  </details>

- **[mcp-clickhouse](https://github.com/clickhouse/mcp-clickhouse)** `⭐ 766` An MCP server that lets AI assistants run queries and browse schema in a ClickHouse cluster (and optionally query via chDB). <details><summary>More about</summary>

  It turns ClickHouse into a first-class “tool” for agents, enabling natural-language-to-SQL exploration, diagnostics, and data-aware workflows without building a bespoke integration.

  _Now your assistant can confidently ship a “quick” read-only query that somehow still requires three auth modes, a health probe, and one more environment variable than your actual database._

  `mcp` `clickhouse` `database` `sql` `observability`
  </details>

- **[llm-context.py](https://github.com/cyberchitta/llm-context.py)** `⭐ 299` A Python CLI and MCP server that selects, filters, outlines, and shares project code context with LLMs via clipboard or the Model Context Protocol. <details><summary>More about</summary>

  It reduces the manual “find files, paste chunks, hit token limits” loop by letting developers generate task-specific context and let chat-based agents fetch additional files on demand via MCP.

  _Finally, a tool that turns “please paste the relevant files” into a configurable rules engine—so you can spend your afternoon debugging YAML instead of auth._

  `mcp` `context-engineering` `cli` `python` `developer-workflow`
  </details>

- **[opik-mcp](https://github.com/comet-ml/opik-mcp)** `⭐ 203` An MCP server that connects MCP-compatible IDE/agent clients to Opik for accessing prompts, projects, traces, and metrics. <details><summary>More about</summary>

  It lets developers pull observability artifacts (traces/metrics) and prompt/project context into an IDE or agent workflow through a single MCP interface instead of bespoke integrations.

  _Now your code review can be interrupted by an agent asking for “just one more trace” as if that won’t turn into a full observability migration by lunch._

  `mcp` `mcp-server` `opik` `ide-integration` `observability`
  </details>

## Incubating

_These are new or low-traffic entries being watched._

- **[chronulus-mcp](https://github.com/chronulusai/chronulus-mcp)** `⭐ 108` An MCP server that connects Claude (and other MCP clients) to Chronulus AI forecasting and prediction agents via the Chronulus API. <details><summary>More about</summary>

  It lets developers pull time-series forecasting/prediction workflows into their chat/agent tooling (Claude Desktop) without building a bespoke integration, using a single API key and standard MCP config.

  _You finally get “forecasting in chat,” and immediately spend 30 minutes debugging whether the problem is your data, the model, or the fact that your MCP server is now part of your personality._

  `mcp` `forecasting` `data-science` `claude-desktop` `agent-tools`
  </details>

- **[onchain-mcp](https://github.com/bankless/onchain-mcp)** `⭐ 78` An MCP (Model Context Protocol) server that exposes the Bankless Onchain API so AI tools can query blockchain contract state, events, and transactions. <details><summary>More about</summary>

  If you’re building agents that need on-chain context, this turns common chain lookups (ABI/source/events/tx history) into structured MCP tools instead of custom glue code.

  _Now your agent can confidently fetch contract state at 3am and still hallucinate what it means, but with much better citations._

  `mcp` `blockchain` `onchain-data` `fintech` `developer-tools`
  </details>