import { MarginInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginInlineStartProps<T> {
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart: T;
}

export const marginInlineStart = <
  T = MarginInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginInlineStartProps<T>, Theme>> = {}) =>
  style<IMarginInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'marginInlineStart',
    prop: 'marginInlineStart',
    themeProp,
  });
