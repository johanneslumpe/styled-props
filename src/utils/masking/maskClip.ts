import { MaskClipProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskClipProps<T> {
  /**
   * The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip: T;
}

export const maskClip = <
  T = MaskClipProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskClipProps<T>, Theme>> = {}) =>
  style<IMaskClipProps<T>, Theme, Breakpoints>({
    cssProp: 'maskClip',
    prop: 'maskClip',
    themeProp,
  });
