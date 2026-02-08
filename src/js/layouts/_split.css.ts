import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_split.scss

// .gr-split
export const _splitCss = css`
    :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: var(--gr-gap-default);
    }

    :host([gr-split-equal]) ::slotted(*) {
        flex: 1 1 0px;
        min-width: 0;
    }
`;