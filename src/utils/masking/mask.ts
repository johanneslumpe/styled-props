import { MaskProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskProps<T> {
  /**
   * The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask: T;
}

export const mask = <
  T = MaskProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskProps<T>, Theme>> = {}) =>
  style<IMaskProps<T>, Theme, Breakpoints>({
    cssProp: 'mask',
    prop: 'mask',
    themeProp,
  });
