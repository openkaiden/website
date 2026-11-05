<script lang="ts">
  /**
   * "Kaiden configures. OpenShell enforces."
   *
   * Explains the division of labour: Kaiden is the workspace, OpenShell is the
   * runtime underneath, and Podman / Docker / MicroVM / Kubernetes are the
   * compute drivers below that. The layering matters — elsewhere on the site
   * we credit Podman and libkrun, and this section is what keeps those claims
   * consistent with where the security boundary actually lives.
   *
   * Sits after <Capabilities /> — once the page has shown what Kaiden does,
   * this explains what it stands on.
   */
  import Wordmark from './Wordmark.svelte';
  import {
    OPENSHELL_URL,
    OPENSHELL_DOCS_URL,
    KAIDEN_DOCS_URL,
    OPENSHELL_STATS
  } from './openshell';

  const layers = [
    {
      key: 'you',
      tag: 'You',
      title: 'Your project, your agent, your model',
      items: ['Claude Code · Codex · Goose · OpenCode', 'Local, self-hosted or frontier models'],
      tone: 'muted'
    },
    {
      key: 'kaiden',
      tag: 'Kaiden',
      verb: 'configures',
      title: 'The workspace',
      items: [
        'Installs and wires OpenShell, drivers and a local gateway',
        'Builds a sandbox image from your project’s own image',
        'Declares mounts, secrets, skills, MCP and network in workspace.json'
      ],
      tone: 'accent'
    },
    {
      key: 'openshell',
      tag: 'OpenShell',
      verb: 'enforces',
      title: 'The runtime',
      items: [
        'Gateway — identity, sandbox lifecycle, policy and the prover',
        'Supervisor — Landlock, seccomp, egress proxy, credential injection',
        'The agent never holds a secret and never decides policy'
      ],
      tone: 'nvidia'
    },
    {
      key: 'compute',
      tag: 'Compute',
      title: 'Podman · Docker · MicroVM · Kubernetes',
      items: [],
      tone: 'muted'
    }
  ];
</script>

<section class="py-24 px-6 border-t" style="background: var(--bg-card); border-color: var(--border)">
  <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    <!-- left: the story -->
    <div>
      <p class="text-[11px] font-mono uppercase tracking-widest mb-4" style="color: var(--accent-text)">
        Built on OpenShell
      </p>

      <h2 class="text-3xl lg:text-4xl font-bold tracking-tight mb-6" style="color: var(--text-primary)">
        Kaiden configures.<br />
        <span class="nvidia-green">OpenShell</span> enforces.
      </h2>

      <p class="leading-relaxed mb-4" style="color: var(--text-secondary)">
        Kaiden is not a new sandbox technology. The runtime underneath is
        <a href={OPENSHELL_URL} target="_blank" rel="noopener noreferrer" class="os-link">OpenShell</a>,
        NVIDIA's open-source runtime for safe, private execution of autonomous AI agents &mdash;
        kernel-level enforcement, deny-by-default egress, credentials the agent never sees,
        and formally verified policy changes.
      </p>

      <p class="leading-relaxed mb-4" style="color: var(--text-secondary)">
        What Kaiden adds is everything between downloading an app and a running sandbox:
        the toolchain, the gateway, the image, the policy, and a desktop that keeps every
        workspace in one place. Features we build &mdash; provider management, image tooling,
        policy primitives &mdash; flow back upstream.
      </p>

      <ul class="grid grid-cols-2 gap-x-6 gap-y-3 mt-8 mb-8" role="list">
        {#each OPENSHELL_STATS as stat}
          <li class="flex flex-col leading-tight">
            <span class="text-base font-semibold font-mono" style="color: var(--text-primary)">{stat.value}</span>
            <span class="text-xs" style="color: var(--text-muted)">{stat.label}</span>
          </li>
        {/each}
      </ul>

      <div class="flex flex-wrap gap-3">
        <a
          href={OPENSHELL_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-sm transition-colors hover:opacity-80"
          style="border-color: var(--border); color: var(--text-primary); background: var(--bg-subtle)"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style="color: var(--text-muted)" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          NVIDIA/OpenShell
        </a>
        <a
          href={OPENSHELL_DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-sm transition-colors hover:opacity-80"
          style="border-color: var(--border); color: var(--text-primary); background: var(--bg-card)"
        >OpenShell docs</a>
        <a
          href={KAIDEN_DOCS_URL}
          class="inline-flex items-center gap-2 px-4 py-2 rounded-md border text-sm transition-colors hover:opacity-80"
          style="border-color: var(--border); color: var(--text-primary); background: var(--bg-card)"
        >How Kaiden uses it</a>
      </div>
    </div>

    <!-- right: the stack -->
    <div class="flex flex-col gap-2" aria-label="How Kaiden and OpenShell stack up">
      {#each layers as layer, i}
        <div
          class="rounded-xl border px-5 py-4 layer"
          class:layer-accent={layer.tone === 'accent'}
          class:layer-nvidia={layer.tone === 'nvidia'}
          style="border-color: var(--border); background: var(--bg-subtle)"
        >
          <div class="flex items-baseline gap-2.5 flex-wrap">
            {#if layer.key === 'openshell'}
              <Wordmark size="md" />
            {:else}
              <span class="text-sm font-semibold" style="color: var(--text-primary)">{layer.tag}</span>
            {/if}
            {#if layer.verb}
              <span
                class="text-[10px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded"
                style="color: var(--text-muted); background: var(--bg-card)"
              >{layer.verb}</span>
            {/if}
            <span class="text-xs" style="color: var(--text-muted)">{layer.title}</span>
          </div>

          {#if layer.items.length}
            <ul class="mt-2.5 flex flex-col gap-1.5" role="list">
              {#each layer.items as item}
                <li class="text-[13px] leading-snug flex gap-2" style="color: var(--text-secondary)">
                  <span class="mt-[7px] w-1 h-1 rounded-full shrink-0 bullet" aria-hidden="true"></span>
                  {item}
                </li>
              {/each}
            </ul>
          {/if}
        </div>

        {#if i < layers.length - 1}
          <div class="flex justify-center" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 style="color: var(--border)">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        {/if}
      {/each}
    </div>

  </div>
</section>

<style>
  .os-link {
    color: var(--accent-text);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .os-link:hover {
    opacity: 0.8;
  }

  .layer .bullet {
    background: var(--text-muted);
  }

  .layer-accent {
    border-color: color-mix(in srgb, var(--accent) 45%, var(--border)) !important;
    background: color-mix(in srgb, var(--accent) 7%, var(--bg-card)) !important;
  }
  .layer-accent .bullet {
    background: var(--accent);
  }

  .layer-nvidia {
    border-color: color-mix(in srgb, #76b900 45%, var(--border)) !important;
    background: color-mix(in srgb, #76b900 7%, var(--bg-card)) !important;
  }
  .layer-nvidia .bullet {
    background: #76b900;
  }
</style>
