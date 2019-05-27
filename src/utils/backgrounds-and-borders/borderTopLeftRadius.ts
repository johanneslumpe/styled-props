import { BorderTopLeftRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderTopLeftRadiusProps<T> {
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  style$BorderTopLeftRadius: T;
}

export const borderTopLeftRadius = <
  T = BorderTopLeftRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderTopLeftRadiusProps<T>, Theme>> = {}) =>
  style<BorderTopLeftRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopLeftRadius',
    prop: 'style$BorderTopLeftRadius',
    themeProp,
  });
