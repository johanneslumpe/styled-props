import { MaskSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaskSizeProps<T> {
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  style$MaskSize: T;
}

export const maskSize = <
  T = MaskSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaskSizeProps<T>, Theme>> = {}) =>
  style<MaskSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskSize',
    prop: 'style$MaskSize',
    themeProp,
  });
