import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_height.scss

// .gr-height-*
export const _heightCss = css`
    :host([height-full]) {
        height: 100%;
        overflow-y: auto;
    }

    :host([height-fill]) {
        flex: 1 1 0;
        min-height: 0;
        height: auto;
        overflow-y: auto;
    }
`;