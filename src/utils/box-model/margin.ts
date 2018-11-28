import { MarginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginProps<T> {
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin: T;
}

export const margin = <
  T = MarginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginProps<T>, Theme>> = {}) =>
  style<IMarginProps<T>, Theme, Breakpoints>({
    cssProp: 'margin',
    prop: 'margin',
    themeProp,
  });
