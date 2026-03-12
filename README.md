<p align="center">
  <img src="https://minimax-algeng-chat-tts-us.oss-us-east-1.aliyuncs.com/ccv2%2F2026-03-12%2FMiniMax-M2.5%2F2017618184684712441%2F8351875fa74dd324cc63a32407b633b1dae7d564955891ab8d127362190fadd2..png" alt="100X PM — AI Product Manager" width="720" />
</p>

> **Note**: 100X PM is based on [Paperclip](https://github.com/paperclipai/paperclip) with optimizations and improvements for product managers.

<p align="center">
  <a href="#quickstart"><strong>Quickstart</strong></a> &middot;
  <a href="https://github.com/Johnnnmai/100x-pm"><strong>GitHub</strong></a>
</p>

<p align="center">
  <a href="https://github.com/Johnnnmai/100x-pm/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" /></a>
  <a href="https://github.com/Johnnnmai/100x-pm/stargazers"><img src="https://img.shields.io/github/stars/Johnnnmai/100x-pm?style=flat" alt="Stars" /></a>
</p>

<br/>

## What is 100X PM?

# AI Product Manager - Autonomous agent orchestration for PM teams

**100X PM is an AI-native product management system that orchestrates AI agents to handle product management tasks.**

100X PM is a Node.js server and React UI that orchestrates a team of AI agents to handle product management workflows. Define your product strategy, assign tasks to AI agents, and track their work from one dashboard.

It looks like a task manager — but under the hood it has org charts, budgets, governance, goal alignment, and agent coordination.

**Manage product goals with AI assistance.**

|        | Step            | Example                                                            |
| ------ | --------------- | ------------------------------------------------------------------ |
| **01** | Define the goal | _"Research competitors and create a feature roadmap."_               |
| **02** | Hire AI agents  | Product Researcher, PRD Writer, Analyst — any AI agent, any provider. |
| **03** | Approve and run | Review strategy. Set budgets. Hit go. Monitor from the dashboard.  |

<br/>

<div align="center">
<table>
  <tr>
    <td align="center"><strong>Works<br/>with</strong></td>
    <td align="center"><img src="doc/assets/logos/openclaw.svg" width="32" alt="OpenClaw" /><br/><sub>OpenClaw</sub></td>
    <td align="center"><img src="doc/assets/logos/claude.svg" width="32" alt="Claude" /><br/><sub>Claude Code</sub></td>
    <td align="center"><img src="doc/assets/logos/codex.svg" width="32" alt="Codex" /><br/><sub>Codex</sub></td>
    <td align="center"><img src="doc/assets/logos/cursor.svg" width="32" alt="Cursor" /><br/><sub>Cursor</sub></td>
    <td align="center"><img src="doc/assets/logos/bash.svg" width="32" alt="Bash" /><br/><sub>Bash</sub></td>
    <td align="center"><img src="doc/assets/logos/http.svg" width="32" alt="HTTP" /><br/><sub>HTTP</sub></td>
  </tr>
</table>

<em>If it can receive a heartbeat, it's hired.</em>

</div>

<br/>

## 100X PM is right for you if

- ✅ You want to build **AI-powered product management**
- ✅ You **coordinate many different AI agents** to handle research, analysis, and planning
- ✅ You have **multiple AI tools running** and lose track of what everyone is doing
- ✅ You want AI agents running **autonomously 24/7**, but still want to audit work and chime in when needed
- ✅ You want to **monitor costs** and enforce budgets for AI usage
- ✅ You want a process for AI agents that **feels like using a task manager**
- ✅ You want to manage AI-assisted PM workflows **from your phone**

<br/>

## Features

<table>
<tr>
<td align="center" width="33%">
<h3>🔌 Bring Your Own AI Agent</h3>
Any agent, any runtime, one org chart. If it can receive a heartbeat, it's hired.
</td>
<td align="center" width="33%">
<h3>🎯 Goal Alignment</h3>
Every task traces back to the product strategy. Agents know <em>what</em> to do and <em>why</em>.
</td>
<td align="center" width="33%">
<h3>💓 Heartbeats</h3>
AI agents wake on a schedule, check work, and act. Delegation flows up and down the org chart.
</td>
</tr>
<tr>
<td align="center">
<h3>💰 Cost Control</h3>
Monthly budgets per agent. When they hit the limit, they stop. No runaway costs.
</td>
<td align="center">
<h3>🏢 Multi-Company</h3>
One deployment, many products. Complete data isolation. One control plane for your portfolio.
</td>
<td align="center">
<h3>🎫 Ticket System</h3>
Every conversation traced. Every decision explained. Full tool-call tracing and immutable audit log.
</td>
</tr>
<tr>
<td align="center">
<h3>🛡️ Governance</h3>
You're the manager. Approve plans, override strategy, pause or terminate any agent — at any time.
</td>
<td align="center">
<h3>📊 Org Chart</h3>
Hierarchies, roles, reporting lines. Your AI agents have a boss, a title, and a job description.
</td>
<td align="center">
<h3>📱 Mobile Ready</h3>
Monitor and manage AI-assisted PM workflows from anywhere.
</td>
</tr>
</table>

<br/>

## Quickstart

Open source. Self-hosted. No 100X PM account required.

```bash
npx 100x-pmai onboard --yes
```

Or manually:

```bash
git clone https://github.com/Johnnnmai/100x-pm.git
cd 100x-pm
pnpm install
pnpm dev
```

This starts the API server at `http://localhost:3100`. An embedded PostgreSQL database is created automatically — no setup required.

> **Requirements:** Node.js 20+, pnpm 9.15+

<br/>

## Development

```bash
pnpm dev              # Full dev (API + UI, watch mode)
pnpm dev:once         # Full dev without file watching
pnpm dev:server       # Server only
pnpm build            # Build all
pnpm typecheck        # Type checking
pnpm test:run         # Run tests
pnpm db:generate      # Generate DB migration
pnpm db:migrate       # Apply migrations
```

See [doc/DEVELOPING.md](doc/DEVELOPING.md) for the full development guide.

<br/>

## Contributing

We welcome contributions. See the [contributing guide](CONTRIBUTING.md) for details.

<br/>

## License

MIT &copy; 2026 Johnnnmai

<br/>

---
