import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_stack.scss

// .gr-stack
export const _stackCss = css`
    :host {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: start;
        gap: var(--gr-gap-default);
    }

    /* Stack specific text alignment */
    :host([gr-align-start]) { text-align: start; }
    :host([gr-align-center]) { text-align: center; }
    :host([gr-align-end]) { text-align: end; }
`;