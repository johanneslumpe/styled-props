import { BorderTopRightRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderTopRightRadiusProps<T> {
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  style$BorderTopRightRadius: T;
}

export const borderTopRightRadius = <
  T = BorderTopRightRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderTopRightRadiusProps<T>, Theme>> = {}) =>
  style<BorderTopRightRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopRightRadius',
    prop: 'style$BorderTopRightRadius',
    themeProp,
  });
