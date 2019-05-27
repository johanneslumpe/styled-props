import { BorderInlineEndStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderInlineEndStyleProps<T> {
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  style$BorderInlineEndStyle: T;
}

export const borderInlineEndStyle = <
  T = BorderInlineEndStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderInlineEndStyleProps<T>, Theme>> = {}) =>
  style<BorderInlineEndStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineEndStyle',
    prop: 'style$BorderInlineEndStyle',
    themeProp,
  });
