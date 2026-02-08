import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_divider.scss

// .gr-divider
export const _dividerCss = css`
    :host {
        align-self: stretch;
        border: none;
        margin: 0;
        
        /* horizontal */
        width: 100%;
        height: 0;
        border-top: var(--gr-border-default);
    }

    :host([vertical]) {
        /* vertical */
        width: 0;
        height: 100%;
        border-top: none;
        border-left: var(--gr-border-default);
    }
`;