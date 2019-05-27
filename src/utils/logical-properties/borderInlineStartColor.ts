import { BorderInlineStartColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderInlineStartColorProps<T> {
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  style$BorderInlineStartColor: T;
}

export const borderInlineStartColor = <
  T = BorderInlineStartColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderInlineStartColorProps<T>, Theme>> = {}) =>
  style<BorderInlineStartColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStartColor',
    prop: 'style$BorderInlineStartColor',
    themeProp,
  });
