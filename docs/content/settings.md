---
id: settings
title: Settings
sidebar_label: Settings
sidebar_position: 9
---

The Settings section covers three areas: **OpenShell** (sandbox runtime), **CLI Tools**, and general preferences.

---

## OpenShell

OpenShell is a primary section in the settings left nav — at the same level as Connections and Preferences — with five sub-sections covering every aspect of the runtime.

### Gateway

OpenShell supports multiple registered gateways. You can switch between a local gateway (running on your machine) and one or more remote gateways (team or enterprise deployments). The **active gateway** handles all sandbox operations.

#### Registered gateways

A list of all registered gateways with their endpoint URL, type, and connection status:

- **Active** (green) — the gateway currently in use. All sandbox create/stop/policy operations go here.
- **Connected** — reachable, not currently selected. Click **Select** to make it active.
- **Disconnected** — unreachable. Click **Connect** to retry.

Click **+ Add gateway** to register a new one. You'll provide a name, endpoint URL, and authentication method:
- **Local** — same machine, no auth needed
- **Remote** — network gateway, can use OIDC (team SSO) or mTLS (machine-to-machine)

#### Active gateway status

Shows the live state of the currently selected gateway: Running/Stopped, uptime, version, active sandbox count, and a link to view security logs.

**Restart / Stop** — lifecycle controls for the active gateway. For remote gateways these trigger the remote process; for local, they control the background service on your machine.

#### Driver

How sandboxes are isolated on the active gateway. Applies to all new sandboxes — existing sandboxes keep their driver until recreated.

- **Podman** (recommended) — container-based isolation. Faster startup, lower overhead.
- **MicroVM** — VM-based isolation. Hardware-level separation, slower startup. For regulated environments or untrusted code.

#### Startup

**Auto-start gateway** — when on (default), Kaiden starts the local gateway automatically at launch. Remote gateways are always-on and unaffected by this setting.

**Gateway port** — the local port the gateway listens on (default 17670). Change only if there is a conflict.

### Sandboxes

Default behaviour applied to every new sandbox, overridable at project or sandbox level.

**Default network mode** — toggle between "Allow known services" (credentials determine reachable hosts) and strict mode (explicit allowlist only).

**Filesystem isolation mode** — `Best effort` (degrades gracefully on older kernels) or `Strict` (fails if isolation cannot be guaranteed).

**Keep sandbox after session ends** — when on, sandboxes persist after an agent session completes so you can reconnect or start a new session without recreating the environment.

**Process identity** — the Unix user the agent runs as inside the sandbox (default: `sandbox`).

### Providers

Shows all credentials from the Secret Vault mirrored as OpenShell providers (`kdn-<name>`). Status column: Synced, Pending, or Expired. Credentials are injected as environment variables at sandbox start — the agent never touches API keys directly.

**Auto-attach providers** — when on, providers matching the project's credentials are attached automatically at sandbox creation.

### Inference

Controls where agent model calls go. The agent calls `inference.local`; OpenShell intercepts and routes to the configured backend.

Options:
- **Direct** — straight to a cloud provider (Anthropic API, etc.) using the synced credential
- **Semantic router** — routes through a configured router for cost optimisation or data residency

The intercepted paths (`POST /v1/chat/completions`, `POST /v1/messages`, `POST /v1/responses`) are shown for reference.

### Logs

Security event stream from all sandboxes in OCSF v1.7.0 format.

**Recent events table** — shows Time, Action (ALLOW/DENY), Event description, and Sandbox. Filterable by sandbox.

**Minimum severity** — filter from Informational (all events) up to Critical (only process kills and security violations).

**OCSF export sink** — stream events to an external URL (SIEM, log aggregator). Leave blank to disable.

---

## CLI Tools

The CLI Tools tab shows the backend command-line tools Kaiden uses and their current versions:

```
kdn         v0.9.2   [Update]
OpenShell   v2.1.0   [Update]
```

**kdn** — Kaiden's own CLI that orchestrates workspace creation, configuration merging, and agent lifecycle. It's the intermediary between the Kaiden UI and the OpenShell runtime.

**OpenShell** — NVIDIA's sandbox runtime CLI. OpenShell manages the actual secured containers, network policies, provider credentials, and security event logging.

Both tools are downloaded and managed by Kaiden. The **Update** button checks for a newer version and installs it. Updates to OpenShell may add new sandbox capabilities (new isolation modes, new policy options, new provider types) that become available in the UI automatically.

You shouldn't need to interact with these CLIs directly. They're shown here for transparency — you can see exactly which version of each tool is in use, which matters when reporting bugs or following security advisories.
