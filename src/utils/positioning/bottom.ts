import { BottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BottomProps<T> {
  /**
   * The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  style$Bottom: T;
}

export const bottom = <
  T = BottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BottomProps<T>, Theme>> = {}) =>
  style<BottomProps<T>, Theme, Breakpoints>({
    cssProp: 'bottom',
    prop: 'style$Bottom',
    themeProp,
  });
