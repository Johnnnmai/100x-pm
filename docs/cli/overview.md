---
title: CLI Overview
summary: CLI installation and setup
---

The 100X PM CLI handles instance setup, diagnostics, and control-plane operations.

## Usage

```sh
pnpm 100x-pmai --help
```

## Global Options

All commands support:

| Flag | Description |
|------|-------------|
| `--data-dir <path>` | Local 100X PM data root (isolates from `~/.100x-pm`) |
| `--api-base <url>` | API base URL |
| `--api-key <token>` | API authentication token |
| `--context <path>` | Context file path |
| `--profile <name>` | Context profile name |
| `--json` | Output as JSON |

Company-scoped commands also accept `--company-id <id>`.

For clean local instances, pass `--data-dir` on the command you run:

```sh
pnpm 100x-pmai run --data-dir ./tmp/100x-pm-dev
```

## Context Profiles

Store defaults to avoid repeating flags:

```sh
# Set defaults
pnpm 100x-pmai context set --api-base http://localhost:3100 --company-id <id>

# View current context
pnpm 100x-pmai context show

# List profiles
pnpm 100x-pmai context list

# Switch profile
pnpm 100x-pmai context use default
```

To avoid storing secrets in context, use an env var:

```sh
pnpm 100x-pmai context set --api-key-env-var-name PAPERCLIP_API_KEY
export PAPERCLIP_API_KEY=...
```

Context is stored at `~/.100x-pm/context.json`.

## Command Categories

The CLI has two categories:

1. **[Setup commands](/cli/setup-commands)** — instance bootstrap, diagnostics, configuration
2. **[Control-plane commands](/cli/control-plane-commands)** — issues, agents, approvals, activity
