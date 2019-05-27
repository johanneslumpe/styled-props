import { BorderInlineEndWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderInlineEndWidthProps<T> {
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  style$BorderInlineEndWidth: T;
}

export const borderInlineEndWidth = <
  T = BorderInlineEndWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderInlineEndWidthProps<T>, Theme>> = {}) =>
  style<BorderInlineEndWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineEndWidth',
    prop: 'style$BorderInlineEndWidth',
    themeProp,
  });
