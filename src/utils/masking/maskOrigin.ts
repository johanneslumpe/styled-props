import { MaskOriginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskOriginProps<T> {
  /**
   * The **`mask-origin`** CSS property sets the origin of a mask.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin: T;
}

export const maskOrigin = <
  T = MaskOriginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskOriginProps<T>, Theme>> = {}) =>
  style<IMaskOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'maskOrigin',
    prop: 'maskOrigin',
    themeProp,
  });
