import { BorderBlockColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockColorProps<T> {
  /**
   * The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-color
   */
  style$BorderBlockColor: T;
}

export const borderBlockColor = <
  T = BorderBlockColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockColorProps<T>, Theme>> = {}) =>
  style<BorderBlockColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockColor',
    prop: 'style$BorderBlockColor',
    themeProp,
  });
