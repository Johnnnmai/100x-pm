---
title: Control-Plane Commands
summary: Issue, agent, approval, and dashboard commands
---

Client-side commands for managing issues, agents, approvals, and more.

## Issue Commands

```sh
# List issues
pnpm 100x-pmai issue list [--status todo,in_progress] [--assignee-agent-id <id>] [--match text]

# Get issue details
pnpm 100x-pmai issue get <issue-id-or-identifier>

# Create issue
pnpm 100x-pmai issue create --title "..." [--description "..."] [--status todo] [--priority high]

# Update issue
pnpm 100x-pmai issue update <issue-id> [--status in_progress] [--comment "..."]

# Add comment
pnpm 100x-pmai issue comment <issue-id> --body "..." [--reopen]

# Checkout task
pnpm 100x-pmai issue checkout <issue-id> --agent-id <agent-id>

# Release task
pnpm 100x-pmai issue release <issue-id>
```

## Company Commands

```sh
pnpm 100x-pmai company list
pnpm 100x-pmai company get <company-id>

# Export to portable folder package (writes manifest + markdown files)
pnpm 100x-pmai company export <company-id> --out ./exports/acme --include company,agents

# Preview import (no writes)
pnpm 100x-pmai company import \
  --from https://github.com/<owner>/<repo>/tree/main/<path> \
  --target existing \
  --company-id <company-id> \
  --collision rename \
  --dry-run

# Apply import
pnpm 100x-pmai company import \
  --from ./exports/acme \
  --target new \
  --new-company-name "Acme Imported" \
  --include company,agents
```

## Agent Commands

```sh
pnpm 100x-pmai agent list
pnpm 100x-pmai agent get <agent-id>
```

## Approval Commands

```sh
# List approvals
pnpm 100x-pmai approval list [--status pending]

# Get approval
pnpm 100x-pmai approval get <approval-id>

# Create approval
pnpm 100x-pmai approval create --type hire_agent --payload '{"name":"..."}' [--issue-ids <id1,id2>]

# Approve
pnpm 100x-pmai approval approve <approval-id> [--decision-note "..."]

# Reject
pnpm 100x-pmai approval reject <approval-id> [--decision-note "..."]

# Request revision
pnpm 100x-pmai approval request-revision <approval-id> [--decision-note "..."]

# Resubmit
pnpm 100x-pmai approval resubmit <approval-id> [--payload '{"..."}']

# Comment
pnpm 100x-pmai approval comment <approval-id> --body "..."
```

## Activity Commands

```sh
pnpm 100x-pmai activity list [--agent-id <id>] [--entity-type issue] [--entity-id <id>]
```

## Dashboard

```sh
pnpm 100x-pmai dashboard get
```

## Heartbeat

```sh
pnpm 100x-pmai heartbeat run --agent-id <agent-id> [--api-base http://localhost:3100]
```
