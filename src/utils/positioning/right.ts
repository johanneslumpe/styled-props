import { RightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface RightProps<T> {
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  style$Right: T;
}

export const right = <
  T = RightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<RightProps<T>, Theme>> = {}) =>
  style<RightProps<T>, Theme, Breakpoints>({
    cssProp: 'right',
    prop: 'style$Right',
    themeProp,
  });
