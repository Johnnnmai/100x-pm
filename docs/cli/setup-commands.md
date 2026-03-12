---
title: Setup Commands
summary: Onboard, run, doctor, and configure
---

Instance setup and diagnostics commands.

## `100x-pmai run`

One-command bootstrap and start:

```sh
pnpm 100x-pmai run
```

Does:

1. Auto-onboards if config is missing
2. Runs `100x-pmai doctor` with repair enabled
3. Starts the server when checks pass

Choose a specific instance:

```sh
pnpm 100x-pmai run --instance dev
```

## `100x-pmai onboard`

Interactive first-time setup:

```sh
pnpm 100x-pmai onboard
```

First prompt:

1. `Quickstart` (recommended): local defaults (embedded database, no LLM provider, local disk storage, default secrets)
2. `Advanced setup`: full interactive configuration

Start immediately after onboarding:

```sh
pnpm 100x-pmai onboard --run
```

Non-interactive defaults + immediate start (opens browser on server listen):

```sh
pnpm 100x-pmai onboard --yes
```

## `100x-pmai doctor`

Health checks with optional auto-repair:

```sh
pnpm 100x-pmai doctor
pnpm 100x-pmai doctor --repair
```

Validates:

- Server configuration
- Database connectivity
- Secrets adapter configuration
- Storage configuration
- Missing key files

## `100x-pmai configure`

Update configuration sections:

```sh
pnpm 100x-pmai configure --section server
pnpm 100x-pmai configure --section secrets
pnpm 100x-pmai configure --section storage
```

## `100x-pmai env`

Show resolved environment configuration:

```sh
pnpm 100x-pmai env
```

## `100x-pmai allowed-hostname`

Allow a private hostname for authenticated/private mode:

```sh
pnpm 100x-pmai allowed-hostname my-tailscale-host
```

## Local Storage Paths

| Data | Default Path |
|------|-------------|
| Config | `~/.100x-pm/instances/default/config.json` |
| Database | `~/.100x-pm/instances/default/db` |
| Logs | `~/.100x-pm/instances/default/logs` |
| Storage | `~/.100x-pm/instances/default/data/storage` |
| Secrets key | `~/.100x-pm/instances/default/secrets/master.key` |

Override with:

```sh
100XPM_HOME=/custom/home PAPERCLIP_INSTANCE_ID=dev pnpm 100x-pmai run
```

Or pass `--data-dir` directly on any command:

```sh
pnpm 100x-pmai run --data-dir ./tmp/100x-pm-dev
pnpm 100x-pmai doctor --data-dir ./tmp/100x-pm-dev
```
