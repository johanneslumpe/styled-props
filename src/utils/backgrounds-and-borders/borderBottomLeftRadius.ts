import { BorderBottomLeftRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomLeftRadiusProps<T> {
  /**
   * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius: T;
}

export const borderBottomLeftRadius = <
  T = BorderBottomLeftRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomLeftRadiusProps<T>, Theme>> = {}) =>
  style<IBorderBottomLeftRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomLeftRadius',
    prop: 'borderBottomLeftRadius',
    themeProp,
  });
