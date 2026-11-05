/** Shared facts about OpenShell, so the three variants never drift apart. */
export const OPENSHELL_URL = 'https://github.com/NVIDIA/OpenShell';
export const OPENSHELL_DOCS_URL = 'https://docs.nvidia.com/openshell';
export const KAIDEN_DOCS_URL = '/docs/openshell-gateways';

/**
 * NVIDIA brand green. For text, use the `.nvidia-green` class from app.css
 * instead — it darkens the green in light mode to stay legible. This constant
 * is the raw brand value, kept for non-text uses (tints, borders).
 */
export const NVIDIA_GREEN = '#76b900';

export const OPENSHELL_TAGLINE =
  'the safe, private runtime for autonomous AI agents';

export const OPENSHELL_STATS = [
  { value: 'Apache-2.0', label: 'open source' },
  { value: '20k+', label: 'GitHub stars' },
  { value: '4 SDKs', label: 'Python · TS · Go · Rust' },
  { value: 'NVIDIA', label: 'maintained upstream' }
];
