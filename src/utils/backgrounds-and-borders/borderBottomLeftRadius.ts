import { BorderBottomLeftRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBottomLeftRadiusProps<T> {
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  style$BorderBottomLeftRadius: T;
}

export const borderBottomLeftRadius = <
  T = BorderBottomLeftRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBottomLeftRadiusProps<T>, Theme>> = {}) =>
  style<BorderBottomLeftRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomLeftRadius',
    prop: 'style$BorderBottomLeftRadius',
    themeProp,
  });
