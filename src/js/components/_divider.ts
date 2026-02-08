import { SlotElement } from '../base/slot-element';
import { customElement } from 'lit/decorators.js';
import { _dividerCss } from '../layouts/_divider.css';

@customElement('gr-divider')
export class GraalDivider extends SlotElement

{
    static styles = [
        _dividerCss,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        'gr-divider': GraalDivider;
    }
}