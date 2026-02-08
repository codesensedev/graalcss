import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_wrapping.scss

// .gr-nowrap-*, .gr-wrap-reverse
export const _wrappingCss = css`
    :host([gr-nowrap]) {
        flex-wrap: nowrap;
    }

    :host([gr-nowrap-scroll]) {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        /* scrollbar-gutter: stable; */
    }

    :host([gr-nowrap-scroll]) > ::slotted(*) {
        flex: 0 0 auto;
    }

    :host([gr-wrap-reverse]) {
        flex-wrap: wrap-reverse;
    }
`;