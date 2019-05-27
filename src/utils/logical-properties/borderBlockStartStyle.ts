import { BorderBlockStartStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockStartStyleProps<T> {
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  style$BorderBlockStartStyle: T;
}

export const borderBlockStartStyle = <
  T = BorderBlockStartStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockStartStyleProps<T>, Theme>> = {}) =>
  style<BorderBlockStartStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockStartStyle',
    prop: 'style$BorderBlockStartStyle',
    themeProp,
  });
