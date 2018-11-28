import { BottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBottomProps<T> {
  /**
   * The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom: T;
}

export const bottom = <
  T = BottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBottomProps<T>, Theme>> = {}) =>
  style<IBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'bottom',
    prop: 'bottom',
    themeProp,
  });
