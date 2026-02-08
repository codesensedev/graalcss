import { SlotElement } from '../base/slot-element';
import { customElement } from 'lit/decorators.js';
import { _splitCss } from '../layouts/_split.css';
import { _alignCss } from '../mods/_align.css';
import { _borderCss } from '../mods/_border.css';
import { _gapCss } from '../mods/_gap.css';
import { _heightCss } from '../mods/_height.css';
import { _justifyCss } from '../mods/_justify.css';
import { _paddingCss } from '../mods/_padding.css';
import { _radiusCss } from '../mods/_radius.css';
import { _widthCss } from '../mods/_width.css';
import { _wrappingCss } from '../mods/_wrapping.css';

@customElement('gr-split')
export class GraalSplit extends SlotElement 
{
    static styles = [
        _splitCss,
        // applicable mods
        _alignCss,
        _borderCss,
        _gapCss,
        _heightCss,
        _justifyCss,
        _paddingCss,
        _radiusCss,
        _widthCss,
        _wrappingCss,
    ];
}

declare global {
    interface HTMLElementTagNameMap {
        'gr-split': GraalSplit;
    }
}