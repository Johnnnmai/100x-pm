---
title: Tailscale Private Access
summary: Run 100X PM with Tailscale-friendly host binding and connect from other devices
---

Use this when you want to access 100X PM over Tailscale (or a private LAN/VPN) instead of only `localhost`.

## 1. Start 100X PM in private authenticated mode

```sh
pnpm dev --tailscale-auth
```

This configures:

- `PAPERCLIP_DEPLOYMENT_MODE=authenticated`
- `PAPERCLIP_DEPLOYMENT_EXPOSURE=private`
- `PAPERCLIP_AUTH_BASE_URL_MODE=auto`
- `HOST=0.0.0.0` (bind on all interfaces)

Equivalent flag:

```sh
pnpm dev --authenticated-private
```

## 2. Find your reachable Tailscale address

From the machine running 100X PM:

```sh
tailscale ip -4
```

You can also use your Tailscale MagicDNS hostname (for example `my-macbook.tailnet.ts.net`).

## 3. Open 100X PM from another device

Use the Tailscale IP or MagicDNS host with the 100X PM port:

```txt
http://<tailscale-host-or-ip>:3100
```

Example:

```txt
http://my-macbook.tailnet.ts.net:3100
```

## 4. Allow custom private hostnames when needed

If you access 100X PM with a custom private hostname, add it to the allowlist:

```sh
pnpm 100x-pmai allowed-hostname my-macbook.tailnet.ts.net
```

## 5. Verify the server is reachable

From a remote Tailscale-connected device:

```sh
curl http://<tailscale-host-or-ip>:3100/api/health
```

Expected result:

```json
{"status":"ok"}
```

## Troubleshooting

- Login or redirect errors on a private hostname: add it with `100x-pmai allowed-hostname`.
- App only works on `localhost`: make sure you started with `--tailscale-auth` (or set `HOST=0.0.0.0` in private mode).
- Can connect locally but not remotely: verify both devices are on the same Tailscale network and port `3100` is reachable.
