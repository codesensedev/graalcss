import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_radius.scss

// .gr-radius-*
export const _radiusCss = css`
    :host([gr-radius-0]) { border-radius: var(--gr-space-0); }
    :host([gr-radius-xs]) { border-radius: var(--gr-space-xs); }
    :host([gr-radius-s]) { border-radius: var(--gr-space-s); }
    :host([gr-radius-m]) { border-radius: var(--gr-space-m); }
    :host([gr-radius-l]) { border-radius: var(--gr-space-l); }
    :host([gr-radius-xl]) { border-radius: var(--gr-space-xl); }
    :host([gr-radius-2xl]) { border-radius: var(--gr-space-2xl); }
`;