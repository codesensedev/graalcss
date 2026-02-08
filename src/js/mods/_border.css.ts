import { css } from 'lit';

// Keep in sync with: src/scss/partials/mods/_border.scss

// .gr-border
export const _borderCss = css`
    :host([gr-border]) {
        border: var(--gr-border-default);
        border-radius: var(--gr-radius-default);
    }
`;