import { BorderBlockStartColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockStartColorProps<T> {
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor: T;
}

export const borderBlockStartColor = <
  T = BorderBlockStartColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockStartColorProps<T>, Theme>> = {}) =>
  style<IBorderBlockStartColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockStartColor',
    prop: 'borderBlockStartColor',
    themeProp,
  });
