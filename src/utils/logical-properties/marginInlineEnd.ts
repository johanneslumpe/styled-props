import { MarginInlineEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginInlineEndProps<T> {
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd: T;
}

export const marginInlineEnd = <
  T = MarginInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginInlineEndProps<T>, Theme>> = {}) =>
  style<IMarginInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: 'marginInlineEnd',
    prop: 'marginInlineEnd',
    themeProp,
  });
