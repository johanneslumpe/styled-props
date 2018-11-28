import { LeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ILeftProps<T> {
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left: T;
}

export const left = <
  T = LeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ILeftProps<T>, Theme>> = {}) =>
  style<ILeftProps<T>, Theme, Breakpoints>({
    cssProp: 'left',
    prop: 'left',
    themeProp,
  });
