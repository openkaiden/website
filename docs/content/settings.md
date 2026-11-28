---
id: settings
title: Settings
sidebar_label: Settings
sidebar_position: 9
---

Settings is accessible from the gear icon at the bottom of the left navigation bar. It has four sections: **Resources**, **Proxy**, **CLI Tools**, and **Preferences**.

---

## Resources

The Resources page lists every AI provider extension that is installed. Each provider appears as a card. The right column of each card shows the named connections that have already been configured for that provider, or a **Create new ...** button to configure it for the first time.

Provider extensions available:

| Provider | What it connects to |
|---|---|
| **Vertex AI** | Google Cloud Vertex AI |
| **RamaLama** | Local RamaLama inference server |
| **Podman AI Lab** | Local Podman AI Lab inference server |
| **OpenShift AI** | Red Hat OpenShift AI cluster |
| **OpenAI** | OpenAI API (or any OpenAI-compatible endpoint) |
| **Ollama** | Local Ollama inference server |
| **Mistral** | Mistral AI API |
| **Milvus** | Milvus / Zilliz vector database (used by Knowledges) |
| **Gemini** | Google Gemini API |
| **Docling** | Docling document parser (used by Knowledges) |
| **Cursor** | Cursor API |
| **Container** | Container registry for sandbox images |
| **Claude** | Anthropic Claude API |

Configured connections appear alongside the provider card with a delete icon. To manage the full detail of an extension — including API keys, base URLs, and model selection — click through to **Extensions** in the main navigation.

---

## Proxy

Proxy settings apply to outbound traffic from Kaiden itself (not from sandboxes — sandbox network policy is set per project).

- **Proxy configuration** — shows the current proxy source. The default value is `System`, meaning Kaiden reads the OS proxy settings.
- **Web Proxy (HTTP)** — override the HTTP proxy URL (e.g. `http://myproxy.domain.com:8080`). Leave blank to use the system value.
- **Secure Web Proxy (HTTPS)** — override the HTTPS proxy URL. Leave blank to use the system value.
- **Bypass proxy settings for these hosts and domains** — comma-separated hostnames and CIDR ranges that skip the proxy (default: `local,169.254/16`).

Click **Update** to apply changes.

---

## CLI Tools

Shows the OpenShell binaries bundled with Kaiden and their versions.

| Binary | Description |
|---|---|
| **openshell** | OpenShell CLI for managing sandboxed workspaces |
| **openshell-image-builder** | CLI for building custom container images for OpenShell sandboxes |
| **openshell-gateway** | OpenShell Gateway server for managing sandbox connections |

Each entry shows the detected version and a delete icon. The bundled binaries are updated with Kaiden releases. To use a custom build, configure a custom path under **Preferences → Extension: OpenShell**.

---

## Preferences

Preferences has a search field and a set of sub-sections accessible from the left sub-navigation:

### ACP Sessions

Settings for ACP sessions.

### Agent Workspace

- **Runtime** — override the container runtime used when creating agent workspaces.
- **Default Base Image** — default sandbox image used when the agent does not request a specific one.

### Appearance

- **Appearance** — choose between light mode, dark mode, or system setting.
- **Zoom Level** — adjust UI zoom. Positive values zoom in (e.g. `1` = 20% larger), negative values zoom out. Accepts decimals for fine control.
- **Navigation Bar Layout** — show icon and label, or icon only, in the navigation bar.

### Chat

- **Show Chat Window** — show or hide the chat panel.
- **Max Attachment File Size** — maximum size in MB for file attachments in chat.

### Docker Compatibility

Settings for Docker compatibility.

### Editor

Settings for the built-in code editor.

### Exit On Close

Controls whether Kaiden quits or minimises when the window is closed.

### Extension: OpenShell

Custom binary paths for the OpenShell toolchain. Leave blank to use the bundled versions shown in CLI Tools.

- **Path** — custom path to the `openshell` binary (default is blank).
- **Path** — custom path to the `openshell-image-builder` binary (default is blank).
- **Path** — custom path to the `openshell-gateway` binary (default is blank).
- **Path** — custom path to the MXC `wxc-exec` binary (default is blank). Windows only.
- **Resolution** — binary resolution priority order (default: `bundled,storage,system`). Custom config path is always checked first regardless of this setting.
- **Poll Interval** — interval in seconds between OpenShell gateway state checks (default: `5`, range `1`–`3600`).

### Extensions

Settings that apply across all installed extensions.

### Feedback reminder

- **Dialog** — whether to show the feedback dialog when using experimental features.

### Kubernetes

Kubernetes cluster connection settings.

### Local API server

Settings for Kaiden's local API server.

### MCP

Model Context Protocol (MCP) settings.

### Minimize on login / Start on login

Controls whether Kaiden launches at login and whether it starts minimised.

### Onboarding

Re-run or reset the onboarding flow.

### Open Dev Tools

Settings for opening the developer tools.

### Registries

Registry settings.

### Skills

Agent skills settings.

### Tasks

Background task settings.

### Telemetry

Telemetry settings.

### Terminal

Settings for the built-in terminal.

### Tray Icon Color

Sets the color of the Kaiden tray icon.

### User Confirmation

Settings for user confirmation prompts.

### Welcome

Settings for the welcome screen.

### Window

Window settings, such as saving the window position.
