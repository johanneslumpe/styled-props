import { PlaceSelfPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PlaceSelfProps<T> {
  /**
   * The **`place-self`** CSS property is a shorthand property sets both the `align-self` and `justify-self` properties. The first value is the `align-self` property value, the second the `justify-self` one. If the second value is not present, the first value is also used for it.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/place-self
   */
  style$PlaceSelf: T;
}

export const placeSelf = <
  T = PlaceSelfPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PlaceSelfProps<T>, Theme>> = {}) =>
  style<PlaceSelfProps<T>, Theme, Breakpoints>({
    cssProp: 'placeSelf',
    prop: 'style$PlaceSelf',
    themeProp,
  });
