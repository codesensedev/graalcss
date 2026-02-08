import { css } from 'lit';

// Keep in sync with: src/scss/partials/layouts/_cluster.scss

// .gr-cluster
export const _clusterCss = css`
    :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        flex-wrap: wrap;
        gap: var(--gr-gap-default);
    }
`;