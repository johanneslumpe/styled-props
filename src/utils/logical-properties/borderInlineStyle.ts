import { BorderInlineStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderInlineStyleProps<T> {
  /**
   * The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-style
   */
  style$BorderInlineStyle: T;
}

export const borderInlineStyle = <
  T = BorderInlineStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderInlineStyleProps<T>, Theme>> = {}) =>
  style<BorderInlineStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStyle',
    prop: 'style$BorderInlineStyle',
    themeProp,
  });
