import { BorderBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBottomProps<T> {
  /**
   * The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  style$BorderBottom: T;
}

export const borderBottom = <
  T = BorderBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBottomProps<T>, Theme>> = {}) =>
  style<BorderBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottom',
    prop: 'style$BorderBottom',
    themeProp,
  });
