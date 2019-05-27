import { BorderInlineStartStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderInlineStartStyleProps<T> {
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  style$BorderInlineStartStyle: T;
}

export const borderInlineStartStyle = <
  T = BorderInlineStartStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderInlineStartStyleProps<T>, Theme>> = {}) =>
  style<BorderInlineStartStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStartStyle',
    prop: 'style$BorderInlineStartStyle',
    themeProp,
  });
