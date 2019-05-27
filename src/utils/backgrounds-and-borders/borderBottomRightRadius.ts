import { BorderBottomRightRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBottomRightRadiusProps<T> {
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  style$BorderBottomRightRadius: T;
}

export const borderBottomRightRadius = <
  T = BorderBottomRightRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBottomRightRadiusProps<T>, Theme>> = {}) =>
  style<BorderBottomRightRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomRightRadius',
    prop: 'style$BorderBottomRightRadius',
    themeProp,
  });
