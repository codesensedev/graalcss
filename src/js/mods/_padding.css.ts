import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_padding.scss

// .gr-padding-*
export const _paddingCss = css`
    :host([gr-padding-0]) { padding: var(--gr-space-0); }
    :host([gr-padding-xs]) { padding: var(--gr-space-xs); }
    :host([gr-padding-s]) { padding: var(--gr-space-s); }
    :host([gr-padding-m]) { padding: var(--gr-space-m); }
    :host([gr-padding-l]) { padding: var(--gr-space-l); }
    :host([gr-padding-xl]) { padding: var(--gr-space-xl); }
    :host([gr-padding-2xl]) { padding: var(--gr-space-2xl); }
`;