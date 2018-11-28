import { BorderBlockEndStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockEndStyleProps<T> {
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle: T;
}

export const borderBlockEndStyle = <
  T = BorderBlockEndStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockEndStyleProps<T>, Theme>> = {}) =>
  style<IBorderBlockEndStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEndStyle',
    prop: 'borderBlockEndStyle',
    themeProp,
  });
