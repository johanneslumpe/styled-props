import { BorderBlockStartWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockStartWidthProps<T> {
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  style$BorderBlockStartWidth: T;
}

export const borderBlockStartWidth = <
  T = BorderBlockStartWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockStartWidthProps<T>, Theme>> = {}) =>
  style<BorderBlockStartWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockStartWidth',
    prop: 'style$BorderBlockStartWidth',
    themeProp,
  });
