import { ColorAdjustPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ColorAdjustProps<T> {
  /**
   * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/color-adjust
   */
  style$ColorAdjust: T;
}

export const colorAdjust = <
  T = ColorAdjustPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ColorAdjustProps<T>, Theme>> = {}) =>
  style<ColorAdjustProps<T>, Theme, Breakpoints>({
    cssProp: 'colorAdjust',
    prop: 'style$ColorAdjust',
    themeProp,
  });
