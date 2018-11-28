import { TopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITopProps<T> {
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top: T;
}

export const top = <
  T = TopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITopProps<T>, Theme>> = {}) =>
  style<ITopProps<T>, Theme, Breakpoints>({
    cssProp: 'top',
    prop: 'top',
    themeProp,
  });
