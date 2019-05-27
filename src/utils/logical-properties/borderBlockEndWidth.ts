import { BorderBlockEndWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockEndWidthProps<T> {
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  style$BorderBlockEndWidth: T;
}

export const borderBlockEndWidth = <
  T = BorderBlockEndWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockEndWidthProps<T>, Theme>> = {}) =>
  style<BorderBlockEndWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEndWidth',
    prop: 'style$BorderBlockEndWidth',
    themeProp,
  });
