---
title: Docker
summary: Docker Compose quickstart
---

Run 100X PM in Docker without installing Node or pnpm locally.

## Compose Quickstart (Recommended)

```sh
docker compose -f docker-compose.quickstart.yml up --build
```

Open [http://localhost:3100](http://localhost:3100).

Defaults:

- Host port: `3100`
- Data directory: `./data/docker-100x-pm`

Override with environment variables:

```sh
PAPERCLIP_PORT=3200 PAPERCLIP_DATA_DIR=./data/pc \
  docker compose -f docker-compose.quickstart.yml up --build
```

## Manual Docker Build

```sh
docker build -t 100x-pm-local .
docker run --name 100x-pm \
  -p 3100:3100 \
  -e HOST=0.0.0.0 \
  -e 100XPM_HOME=/100x-pm \
  -v "$(pwd)/data/docker-100x-pm:/100x-pm" \
  100x-pm-local
```

## Data Persistence

All data is persisted under the bind mount (`./data/docker-100x-pm`):

- Embedded PostgreSQL data
- Uploaded assets
- Local secrets key
- Agent workspace data

## Claude and Codex Adapters in Docker

The Docker image pre-installs:

- `claude` (Anthropic Claude Code CLI)
- `codex` (OpenAI Codex CLI)

Pass API keys to enable local adapter runs inside the container:

```sh
docker run --name 100x-pm \
  -p 3100:3100 \
  -e HOST=0.0.0.0 \
  -e 100XPM_HOME=/100x-pm \
  -e OPENAI_API_KEY=sk-... \
  -e ANTHROPIC_API_KEY=sk-... \
  -v "$(pwd)/data/docker-100x-pm:/100x-pm" \
  100x-pm-local
```

Without API keys, the app runs normally — adapter environment checks will surface missing prerequisites.
