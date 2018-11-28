import { FontSynthesisPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontSynthesisProps<T> {
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  fontSynthesis: T;
}

export const fontSynthesis = <
  T = FontSynthesisPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontSynthesisProps<T>, Theme>> = {}) =>
  style<IFontSynthesisProps<T>, Theme, Breakpoints>({
    cssProp: 'fontSynthesis',
    prop: 'fontSynthesis',
    themeProp,
  });
