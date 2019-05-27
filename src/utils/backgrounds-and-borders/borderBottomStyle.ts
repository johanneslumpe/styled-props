import { BorderBottomStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBottomStyleProps<T> {
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  style$BorderBottomStyle: T;
}

export const borderBottomStyle = <
  T = BorderBottomStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBottomStyleProps<T>, Theme>> = {}) =>
  style<BorderBottomStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomStyle',
    prop: 'style$BorderBottomStyle',
    themeProp,
  });
