import { BorderBlockWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockWidthProps<T> {
  /**
   * The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-width
   */
  style$BorderBlockWidth: T;
}

export const borderBlockWidth = <
  T = BorderBlockWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockWidthProps<T>, Theme>> = {}) =>
  style<BorderBlockWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockWidth',
    prop: 'style$BorderBlockWidth',
    themeProp,
  });
