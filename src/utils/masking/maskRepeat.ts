import { MaskRepeatProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaskRepeatProps<T> {
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  style$MaskRepeat: T;
}

export const maskRepeat = <
  T = MaskRepeatProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaskRepeatProps<T>, Theme>> = {}) =>
  style<MaskRepeatProps<T>, Theme, Breakpoints>({
    cssProp: 'maskRepeat',
    prop: 'style$MaskRepeat',
    themeProp,
  });
