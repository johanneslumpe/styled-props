import { BorderTopStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderTopStyleProps<T> {
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  style$BorderTopStyle: T;
}

export const borderTopStyle = <
  T = BorderTopStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderTopStyleProps<T>, Theme>> = {}) =>
  style<BorderTopStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopStyle',
    prop: 'style$BorderTopStyle',
    themeProp,
  });
