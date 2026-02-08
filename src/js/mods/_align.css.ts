import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_align.scss

// .gr-align-*
export const _alignCss = css`
    :host([gr-align-start]) { align-items: start; }
    :host([gr-align-center]) { align-items: center; }
    :host([gr-align-end]) { align-items: end; }
    :host([gr-align-stretch]) { align-items: stretch; }
`;