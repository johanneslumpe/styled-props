import { RightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IRightProps<T> {
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right: T;
}

export const right = <
  T = RightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IRightProps<T>, Theme>> = {}) =>
  style<IRightProps<T>, Theme, Breakpoints>({
    cssProp: 'right',
    prop: 'right',
    themeProp,
  });
