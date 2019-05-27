import { BorderInlineColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderInlineColorProps<T> {
  /**
   * The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-color
   */
  style$BorderInlineColor: T;
}

export const borderInlineColor = <
  T = BorderInlineColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderInlineColorProps<T>, Theme>> = {}) =>
  style<BorderInlineColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineColor',
    prop: 'style$BorderInlineColor',
    themeProp,
  });
