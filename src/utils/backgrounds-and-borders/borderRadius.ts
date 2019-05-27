import { BorderRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderRadiusProps<T> {
  /**
   * The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  style$BorderRadius: T;
}

export const borderRadius = <
  T = BorderRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderRadiusProps<T>, Theme>> = {}) =>
  style<BorderRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRadius',
    prop: 'style$BorderRadius',
    themeProp,
  });
