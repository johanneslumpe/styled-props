import { ColorAdjustPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColorAdjustProps<T> {
  /**
   * The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/color-adjust
   */
  colorAdjust: T;
}

export const colorAdjust = <
  T = ColorAdjustPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColorAdjustProps<T>, Theme>> = {}) =>
  style<IColorAdjustProps<T>, Theme, Breakpoints>({
    cssProp: 'colorAdjust',
    prop: 'colorAdjust',
    themeProp,
  });
