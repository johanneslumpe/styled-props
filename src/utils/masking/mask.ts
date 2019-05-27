import { MaskProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaskProps<T> {
  /**
   * The **`mask`** CSS property hides an element (partially or fully) by masking or clipping the image at specific points.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  style$Mask: T;
}

export const mask = <
  T = MaskProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaskProps<T>, Theme>> = {}) =>
  style<MaskProps<T>, Theme, Breakpoints>({
    cssProp: 'mask',
    prop: 'style$Mask',
    themeProp,
  });
