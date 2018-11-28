import { MaskModeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskModeProps<T> {
  /**
   * The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  maskMode: T;
}

export const maskMode = <
  T = MaskModeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskModeProps<T>, Theme>> = {}) =>
  style<IMaskModeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskMode',
    prop: 'maskMode',
    themeProp,
  });
