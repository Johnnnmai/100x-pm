---
title: Storage
summary: Local disk vs S3-compatible storage
---

100X PM stores uploaded files (issue attachments, images) using a configurable storage provider.

## Local Disk (Default)

Files are stored at:

```
~/.100x-pm/instances/default/data/storage
```

No configuration required. Suitable for local development and single-machine deployments.

## S3-Compatible Storage

For production or multi-node deployments, use S3-compatible object storage (AWS S3, MinIO, Cloudflare R2, etc.).

Configure via CLI:

```sh
pnpm 100x-pmai configure --section storage
```

## Configuration

| Provider | Best For |
|----------|----------|
| `local_disk` | Local development, single-machine deployments |
| `s3` | Production, multi-node, cloud deployments |

Storage configuration is stored in the instance config file:

```
~/.100x-pm/instances/default/config.json
```
