import { BorderBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomProps<T> {
  /**
   * The **`border-bottom`** CSS property sets an element's bottom border. It's a shorthand for `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom: T;
}

export const borderBottom = <
  T = BorderBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomProps<T>, Theme>> = {}) =>
  style<IBorderBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottom',
    prop: 'borderBottom',
    themeProp,
  });
