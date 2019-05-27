import { BorderRightStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderRightStyleProps<T> {
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  style$BorderRightStyle: T;
}

export const borderRightStyle = <
  T = BorderRightStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderRightStyleProps<T>, Theme>> = {}) =>
  style<BorderRightStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRightStyle',
    prop: 'style$BorderRightStyle',
    themeProp,
  });
