import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_width.scss

// .gr-width-*
export const _widthCss = css`
    :host([gr-width-xs]) { max-width: var(--gr-width-xs); margin: 0 auto; }
    :host([gr-width-s]) { max-width: var(--gr-width-s); margin: 0 auto; }
    :host([gr-width-m]) { max-width: var(--gr-width-m); margin: 0 auto; }
    :host([gr-width-l]) { max-width: var(--gr-width-l); margin: 0 auto; }
    :host([gr-width-xl]) { max-width: var(--gr-width-xl); margin: 0 auto; }
    :host([gr-width-2xl]) { max-width: var(--gr-width-2xl); margin: 0 auto; }
`;