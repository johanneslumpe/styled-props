import { BorderInlineEndColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineEndColorProps<T> {
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor: T;
}

export const borderInlineEndColor = <
  T = BorderInlineEndColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineEndColorProps<T>, Theme>> = {}) =>
  style<IBorderInlineEndColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineEndColor',
    prop: 'borderInlineEndColor',
    themeProp,
  });
