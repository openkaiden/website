<script lang="ts">
  let { size = 'sm' }: { size?: 'sm' | 'md' | 'lg' } = $props();

  const sizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  } as const;
</script>

<span class="inline-flex items-baseline gap-1.5 font-semibold {sizes[size]}">
  <span class="font-mono tracking-tight nvidia-green">NVIDIA</span>
  <span style="color: var(--text-primary)">OpenShell</span>
</span>
