import { LeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface LeftProps<T> {
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  style$Left: T;
}

export const left = <
  T = LeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<LeftProps<T>, Theme>> = {}) =>
  style<LeftProps<T>, Theme, Breakpoints>({
    cssProp: 'left',
    prop: 'style$Left',
    themeProp,
  });
