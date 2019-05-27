import { MaskModeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaskModeProps<T> {
  /**
   * The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  style$MaskMode: T;
}

export const maskMode = <
  T = MaskModeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaskModeProps<T>, Theme>> = {}) =>
  style<MaskModeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskMode',
    prop: 'style$MaskMode',
    themeProp,
  });
