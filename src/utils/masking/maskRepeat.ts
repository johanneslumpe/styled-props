import { MaskRepeatProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskRepeatProps<T> {
  /**
   * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat: T;
}

export const maskRepeat = <
  T = MaskRepeatProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskRepeatProps<T>, Theme>> = {}) =>
  style<IMaskRepeatProps<T>, Theme, Breakpoints>({
    cssProp: 'maskRepeat',
    prop: 'maskRepeat',
    themeProp,
  });
