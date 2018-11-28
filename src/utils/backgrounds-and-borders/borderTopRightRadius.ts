import { BorderTopRightRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopRightRadiusProps<T> {
  /**
   * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius: T;
}

export const borderTopRightRadius = <
  T = BorderTopRightRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopRightRadiusProps<T>, Theme>> = {}) =>
  style<IBorderTopRightRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopRightRadius',
    prop: 'borderTopRightRadius',
    themeProp,
  });
