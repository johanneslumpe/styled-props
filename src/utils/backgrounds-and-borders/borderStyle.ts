import { BorderStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderStyleProps<T> {
  /**
   * The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  style$BorderStyle: T;
}

export const borderStyle = <
  T = BorderStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderStyleProps<T>, Theme>> = {}) =>
  style<BorderStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderStyle',
    prop: 'style$BorderStyle',
    themeProp,
  });
