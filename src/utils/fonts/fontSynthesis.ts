import { FontSynthesisPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontSynthesisProps<T> {
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  style$FontSynthesis: T;
}

export const fontSynthesis = <
  T = FontSynthesisPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontSynthesisProps<T>, Theme>> = {}) =>
  style<FontSynthesisProps<T>, Theme, Breakpoints>({
    cssProp: 'fontSynthesis',
    prop: 'style$FontSynthesis',
    themeProp,
  });
