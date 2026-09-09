/**
 * Chroma — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 *
 * Psychedelic chroma. RGB bleed on black.
 */

const TOKENS = {
  '--bg-base': '#08080c',
  '--bg-surface': '#101018',
  '--bg-elevated': '#1a1a28',
  '--bg-inset': '#040408',
  '--bg-hover': 'rgba(232, 251, 255, 0.06)',
  '--bg-active': 'rgba(232, 251, 255, 0.1)',
  '--text-primary': '#e8fbff',
  '--text-secondary': 'rgba(232, 251, 255, 0.74)',
  '--text-muted': 'rgba(232, 251, 255, 0.52)',
  '--text-faint': 'rgba(232, 251, 255, 0.34)',
  '--border': 'rgba(232, 251, 255, 0.12)',
  '--border-subtle': 'rgba(232, 251, 255, 0.07)',
  '--border-strong': 'rgba(232, 251, 255, 0.18)',
  '--accent': '#00e5ff',
  '--accent-hover': '#5ff0ff',
  '--accent-muted': 'rgba(0, 229, 255, 0.2)',
  '--accent-subtle': 'rgba(0, 229, 255, 0.1)',
  '--glass-bg': 'rgba(8, 8, 12, 0.92)',
  '--glass-border': 'rgba(232, 251, 255, 0.1)',
  '--glass-bg-menu': 'rgba(26, 26, 40, 0.96)',
  '--glass-border-menu': 'rgba(232, 251, 255, 0.1)',
  '--status-active': '#00e5ff',
  '--status-on-hold': '#ff4fd8',
  '--status-completed': '#7cff6a',
  '--status-dropped': '#ff5f7a',
};

module.exports = {
  id: 'theme-chroma',
  name: 'Chroma',
  version: '0.1.0',
  description: "Psychedelic chroma. RGB bleed on black.",

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-chroma',
      name: 'Chroma',
      description: "Psychedelic chroma. RGB bleed on black.",
      author: 'Dripnex',
      colorScheme: 'dark',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
