import { BorderBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomProps<T> {
  /**
   * The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`. These properties set an element's bottom border.
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
