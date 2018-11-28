import { BorderRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderRadiusProps<T> {
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius: T;
}

export const borderRadius = <
  T = BorderRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderRadiusProps<T>, Theme>> = {}) =>
  style<IBorderRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRadius',
    prop: 'borderRadius',
    themeProp,
  });
