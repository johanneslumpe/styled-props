import { BorderBlockEndColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockEndColorProps<T> {
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  style$BorderBlockEndColor: T;
}

export const borderBlockEndColor = <
  T = BorderBlockEndColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockEndColorProps<T>, Theme>> = {}) =>
  style<BorderBlockEndColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEndColor',
    prop: 'style$BorderBlockEndColor',
    themeProp,
  });
