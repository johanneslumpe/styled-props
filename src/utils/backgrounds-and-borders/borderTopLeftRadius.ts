import { BorderTopLeftRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopLeftRadiusProps<T> {
  /**
   * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius: T;
}

export const borderTopLeftRadius = <
  T = BorderTopLeftRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopLeftRadiusProps<T>, Theme>> = {}) =>
  style<IBorderTopLeftRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopLeftRadius',
    prop: 'borderTopLeftRadius',
    themeProp,
  });
