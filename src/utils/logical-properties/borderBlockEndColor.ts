import { BorderBlockEndColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockEndColorProps<T> {
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor: T;
}

export const borderBlockEndColor = <
  T = BorderBlockEndColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockEndColorProps<T>, Theme>> = {}) =>
  style<IBorderBlockEndColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEndColor',
    prop: 'borderBlockEndColor',
    themeProp,
  });
