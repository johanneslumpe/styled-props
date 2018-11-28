import { MaskPositionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskPositionProps<T> {
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition: T;
}

export const maskPosition = <
  T = MaskPositionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskPositionProps<T>, Theme>> = {}) =>
  style<IMaskPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'maskPosition',
    prop: 'maskPosition',
    themeProp,
  });
