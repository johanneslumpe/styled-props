import { MarginInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MarginInlineStartProps<T> {
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  style$MarginInlineStart: T;
}

export const marginInlineStart = <
  T = MarginInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MarginInlineStartProps<T>, Theme>> = {}) =>
  style<MarginInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'marginInlineStart',
    prop: 'style$MarginInlineStart',
    themeProp,
  });
