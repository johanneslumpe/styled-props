import { MaskOriginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaskOriginProps<T> {
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  style$MaskOrigin: T;
}

export const maskOrigin = <
  T = MaskOriginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaskOriginProps<T>, Theme>> = {}) =>
  style<MaskOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'maskOrigin',
    prop: 'style$MaskOrigin',
    themeProp,
  });
