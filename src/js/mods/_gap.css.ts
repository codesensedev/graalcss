import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_gap.scss

// .gr-gap-*
export const _gapCss = css`
    :host([gr-gap-0]) { gap: var(--gr-space-0); }
    :host([gr-gap-xs]) { gap: var(--gr-space-xs); }
    :host([gr-gap-s]) { gap: var(--gr-space-s); }
    :host([gr-gap-m]) { gap: var(--gr-space-m); }
    :host([gr-gap-l]) { gap: var(--gr-space-l); }
    :host([gr-gap-xl]) { gap: var(--gr-space-xl); }
    :host([gr-gap-2xl]) { gap: var(--gr-space-2xl); }
`;