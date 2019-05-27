import { MaskPositionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaskPositionProps<T> {
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  style$MaskPosition: T;
}

export const maskPosition = <
  T = MaskPositionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaskPositionProps<T>, Theme>> = {}) =>
  style<MaskPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'maskPosition',
    prop: 'style$MaskPosition',
    themeProp,
  });
