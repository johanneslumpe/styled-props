import { BorderStartStartRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderStartStartRadiusProps<T> {
  /**
   * The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
   */
  style$BorderStartStartRadius: T;
}

export const borderStartStartRadius = <
  T = BorderStartStartRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderStartStartRadiusProps<T>, Theme>> = {}) =>
  style<BorderStartStartRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderStartStartRadius',
    prop: 'style$BorderStartStartRadius',
    themeProp,
  });
