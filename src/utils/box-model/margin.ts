import { MarginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MarginProps<T> {
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  style$Margin: T;
}

export const margin = <
  T = MarginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MarginProps<T>, Theme>> = {}) =>
  style<MarginProps<T>, Theme, Breakpoints>({
    cssProp: 'margin',
    prop: 'style$Margin',
    themeProp,
  });
