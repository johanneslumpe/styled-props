import { BorderStartEndRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderStartEndRadiusProps<T> {
  /**
   * The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
   */
  style$BorderStartEndRadius: T;
}

export const borderStartEndRadius = <
  T = BorderStartEndRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderStartEndRadiusProps<T>, Theme>> = {}) =>
  style<BorderStartEndRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderStartEndRadius',
    prop: 'style$BorderStartEndRadius',
    themeProp,
  });
