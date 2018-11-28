import { BorderBottomRightRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomRightRadiusProps<T> {
  /**
   * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius: T;
}

export const borderBottomRightRadius = <
  T = BorderBottomRightRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomRightRadiusProps<T>, Theme>> = {}) =>
  style<IBorderBottomRightRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomRightRadius',
    prop: 'borderBottomRightRadius',
    themeProp,
  });
