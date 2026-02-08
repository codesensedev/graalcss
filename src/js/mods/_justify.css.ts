import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_justify.scss

// .gr-justify-*
export const _justifyCss = css`
    :host([gr-justify-start]) { justify-content: start; }
    :host([gr-justify-center]) { justify-content: center; }
    :host([gr-justify-end]) { justify-content: end; }
`;