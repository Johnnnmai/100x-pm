# CLI Reference

100X PM CLI now supports both:

- instance setup/diagnostics (`onboard`, `doctor`, `configure`, `env`, `allowed-hostname`)
- control-plane client operations (issues, approvals, agents, activity, dashboard)

## Base Usage

Use repo script in development:

```sh
pnpm 100x-pmai --help
```

First-time local bootstrap + run:

```sh
pnpm 100x-pmai run
```

Choose local instance:

```sh
pnpm 100x-pmai run --instance dev
```

## Deployment Modes

Mode taxonomy and design intent are documented in `doc/DEPLOYMENT-MODES.md`.

Current CLI behavior:

- `100x-pmai onboard` and `100x-pmai configure --section server` set deployment mode in config
- runtime can override mode with `PAPERCLIP_DEPLOYMENT_MODE`
- `100x-pmai run` and `100x-pmai doctor` do not yet expose a direct `--mode` flag

Target behavior (planned) is documented in `doc/DEPLOYMENT-MODES.md` section 5.

Allow an authenticated/private hostname (for example custom Tailscale DNS):

```sh
pnpm 100x-pmai allowed-hostname dotta-macbook-pro
```

All client commands support:

- `--data-dir <path>`
- `--api-base <url>`
- `--api-key <token>`
- `--context <path>`
- `--profile <name>`
- `--json`

Company-scoped commands also support `--company-id <id>`.

Use `--data-dir` on any CLI command to isolate all default local state (config/context/db/logs/storage/secrets) away from `~/.100x-pm`:

```sh
pnpm 100x-pmai run --data-dir ./tmp/100x-pm-dev
pnpm 100x-pmai issue list --data-dir ./tmp/100x-pm-dev
```

## Context Profiles

Store local defaults in `~/.100x-pm/context.json`:

```sh
pnpm 100x-pmai context set --api-base http://localhost:3100 --company-id <company-id>
pnpm 100x-pmai context show
pnpm 100x-pmai context list
pnpm 100x-pmai context use default
```

To avoid storing secrets in context, set `apiKeyEnvVarName` and keep the key in env:

```sh
pnpm 100x-pmai context set --api-key-env-var-name PAPERCLIP_API_KEY
export PAPERCLIP_API_KEY=...
```

## Company Commands

```sh
pnpm 100x-pmai company list
pnpm 100x-pmai company get <company-id>
pnpm 100x-pmai company delete <company-id-or-prefix> --yes --confirm <same-id-or-prefix>
```

Examples:

```sh
pnpm 100x-pmai company delete PAP --yes --confirm PAP
pnpm 100x-pmai company delete 5cbe79ee-acb3-4597-896e-7662742593cd --yes --confirm 5cbe79ee-acb3-4597-896e-7662742593cd
```

Notes:

- Deletion is server-gated by `PAPERCLIP_ENABLE_COMPANY_DELETION`.
- With agent authentication, company deletion is company-scoped. Use the current company ID/prefix (for example via `--company-id` or `PAPERCLIP_COMPANY_ID`), not another company.

## Issue Commands

```sh
pnpm 100x-pmai issue list --company-id <company-id> [--status todo,in_progress] [--assignee-agent-id <agent-id>] [--match text]
pnpm 100x-pmai issue get <issue-id-or-identifier>
pnpm 100x-pmai issue create --company-id <company-id> --title "..." [--description "..."] [--status todo] [--priority high]
pnpm 100x-pmai issue update <issue-id> [--status in_progress] [--comment "..."]
pnpm 100x-pmai issue comment <issue-id> --body "..." [--reopen]
pnpm 100x-pmai issue checkout <issue-id> --agent-id <agent-id> [--expected-statuses todo,backlog,blocked]
pnpm 100x-pmai issue release <issue-id>
```

## Agent Commands

```sh
pnpm 100x-pmai agent list --company-id <company-id>
pnpm 100x-pmai agent get <agent-id>
pnpm 100x-pmai agent local-cli <agent-id-or-shortname> --company-id <company-id>
```

`agent local-cli` is the quickest way to run local Claude/Codex manually as a 100X PM agent:

- creates a new long-lived agent API key
- installs missing 100X PM skills into `~/.codex/skills` and `~/.claude/skills`
- prints `export ...` lines for `PAPERCLIP_API_URL`, `PAPERCLIP_COMPANY_ID`, `PAPERCLIP_AGENT_ID`, and `PAPERCLIP_API_KEY`

Example for shortname-based local setup:

```sh
pnpm 100x-pmai agent local-cli codexcoder --company-id <company-id>
pnpm 100x-pmai agent local-cli claudecoder --company-id <company-id>
```

## Approval Commands

```sh
pnpm 100x-pmai approval list --company-id <company-id> [--status pending]
pnpm 100x-pmai approval get <approval-id>
pnpm 100x-pmai approval create --company-id <company-id> --type hire_agent --payload '{"name":"..."}' [--issue-ids <id1,id2>]
pnpm 100x-pmai approval approve <approval-id> [--decision-note "..."]
pnpm 100x-pmai approval reject <approval-id> [--decision-note "..."]
pnpm 100x-pmai approval request-revision <approval-id> [--decision-note "..."]
pnpm 100x-pmai approval resubmit <approval-id> [--payload '{"...":"..."}']
pnpm 100x-pmai approval comment <approval-id> --body "..."
```

## Activity Commands

```sh
pnpm 100x-pmai activity list --company-id <company-id> [--agent-id <agent-id>] [--entity-type issue] [--entity-id <id>]
```

## Dashboard Commands

```sh
pnpm 100x-pmai dashboard get --company-id <company-id>
```

## Heartbeat Command

`heartbeat run` now also supports context/api-key options and uses the shared client stack:

```sh
pnpm 100x-pmai heartbeat run --agent-id <agent-id> [--api-base http://localhost:3100] [--api-key <token>]
```

## Local Storage Defaults

Default local instance root is `~/.100x-pm/instances/default`:

- config: `~/.100x-pm/instances/default/config.json`
- embedded db: `~/.100x-pm/instances/default/db`
- logs: `~/.100x-pm/instances/default/logs`
- storage: `~/.100x-pm/instances/default/data/storage`
- secrets key: `~/.100x-pm/instances/default/secrets/master.key`

Override base home or instance with env vars:

```sh
100XPM_HOME=/custom/home PAPERCLIP_INSTANCE_ID=dev pnpm 100x-pmai run
```

## Storage Configuration

Configure storage provider and settings:

```sh
pnpm 100x-pmai configure --section storage
```

Supported providers:

- `local_disk` (default; local single-user installs)
- `s3` (S3-compatible object storage)
