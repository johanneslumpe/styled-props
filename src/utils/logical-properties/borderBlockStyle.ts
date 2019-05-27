import { BorderBlockStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockStyleProps<T> {
  /**
   * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-style
   */
  style$BorderBlockStyle: T;
}

export const borderBlockStyle = <
  T = BorderBlockStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockStyleProps<T>, Theme>> = {}) =>
  style<BorderBlockStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockStyle',
    prop: 'style$BorderBlockStyle',
    themeProp,
  });
