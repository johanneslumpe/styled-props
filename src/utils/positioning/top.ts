import { TopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TopProps<T> {
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  style$Top: T;
}

export const top = <
  T = TopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TopProps<T>, Theme>> = {}) =>
  style<TopProps<T>, Theme, Breakpoints>({
    cssProp: 'top',
    prop: 'style$Top',
    themeProp,
  });
