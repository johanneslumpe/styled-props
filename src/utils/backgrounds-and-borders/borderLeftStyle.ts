import { BorderLeftStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderLeftStyleProps<T> {
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  style$BorderLeftStyle: T;
}

export const borderLeftStyle = <
  T = BorderLeftStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderLeftStyleProps<T>, Theme>> = {}) =>
  style<BorderLeftStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeftStyle',
    prop: 'style$BorderLeftStyle',
    themeProp,
  });
