import { BorderBlockEndStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockEndStyleProps<T> {
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  style$BorderBlockEndStyle: T;
}

export const borderBlockEndStyle = <
  T = BorderBlockEndStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockEndStyleProps<T>, Theme>> = {}) =>
  style<BorderBlockEndStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEndStyle',
    prop: 'style$BorderBlockEndStyle',
    themeProp,
  });
