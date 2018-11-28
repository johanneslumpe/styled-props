import { MaskSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskSizeProps<T> {
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  maskSize: T;
}

export const maskSize = <
  T = MaskSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskSizeProps<T>, Theme>> = {}) =>
  style<IMaskSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskSize',
    prop: 'maskSize',
    themeProp,
  });
