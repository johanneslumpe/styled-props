import { MaskClipProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaskClipProps<T> {
  /**
   * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  style$MaskClip: T;
}

export const maskClip = <
  T = MaskClipProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaskClipProps<T>, Theme>> = {}) =>
  style<MaskClipProps<T>, Theme, Breakpoints>({
    cssProp: 'maskClip',
    prop: 'style$MaskClip',
    themeProp,
  });
