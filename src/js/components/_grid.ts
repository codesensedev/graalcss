import { SlotElement } from '../base/slot-element';
import { customElement } from 'lit/decorators.js';
import { _gridCss } from '../layouts/_grid.css';
import { _alignCss } from '../mods/_align.css';
import { _borderCss } from '../mods/_border.css';
import { _gapCss } from '../mods/_gap.css';
import { _heightCss } from '../mods/_height.css';
import { _justifyCss } from '../mods/_justify.css';
import { _paddingCss } from '../mods/_padding.css';
import { _radiusCss } from '../mods/_radius.css';
import { _widthCss } from '../mods/_width.css';

@customElement('gr-grid')
export class GraalGrid extends SlotElement 
{
    static styles = [
        _gridCss,
        // applicable mods
        _alignCss,
        _borderCss,
        _gapCss,
        _heightCss,
        _justifyCss,
        _paddingCss,
        _radiusCss,
        _widthCss,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        'gr-grid': GraalGrid;
    }
}