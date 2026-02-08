import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_grid.scss

// .gr-grid
export const _gridCss = css`
    :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--gr-grid-s), 1fr));
        gap: var(--gr-gap-default);
    }

    /* fit */
    :host([gr-grid-fit-xs]) { grid-template-columns: repeat(auto-fit, minmax(var(--gr-grid-xs), 1fr)); }
    :host([gr-grid-fit-s]) { grid-template-columns: repeat(auto-fit, minmax(var(--gr-grid-s), 1fr)); }
    :host([gr-grid-fit-m]) { grid-template-columns: repeat(auto-fit, minmax(var(--gr-grid-m), 1fr)); }
    :host([gr-grid-fit-l]) { grid-template-columns: repeat(auto-fit, minmax(var(--gr-grid-l), 1fr)); }
    :host([gr-grid-fit-xl]) { grid-template-columns: repeat(auto-fit, minmax(var(--gr-grid-xl), 1fr)); }
    :host([gr-grid-fit-2xl]) { grid-template-columns: repeat(auto-fit, minmax(var(--gr-grid-2xl), 1fr)); }

    /* fill */
    :host([gr-grid-fill-xs]) { grid-template-columns: repeat(auto-fill, minmax(var(--gr-grid-xs), 1fr)); }
    :host([gr-grid-fill-s]) { grid-template-columns: repeat(auto-fill, minmax(var(--gr-grid-s), 1fr)); }
    :host([gr-grid-fill-m]) { grid-template-columns: repeat(auto-fill, minmax(var(--gr-grid-m), 1fr)); }
    :host([gr-grid-fill-l]) { grid-template-columns: repeat(auto-fill, minmax(var(--gr-grid-l), 1fr)); }
    :host([gr-grid-fill-xl]) { grid-template-columns: repeat(auto-fill, minmax(var(--gr-grid-xl), 1fr)); }
    :host([gr-grid-fill-2xl]) { grid-template-columns: repeat(auto-fill, minmax(var(--gr-grid-2xl), 1fr)); }
`;