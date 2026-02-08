import { LitElement, html } from 'lit';

export class SlotElement extends LitElement 
{
    render() {
        return html`<slot></slot>`;
    }
}