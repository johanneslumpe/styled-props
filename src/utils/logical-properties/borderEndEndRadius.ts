import { BorderEndEndRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderEndEndRadiusProps<T> {
  /**
   * The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on on the element's `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
   */
  style$BorderEndEndRadius: T;
}

export const borderEndEndRadius = <
  T = BorderEndEndRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderEndEndRadiusProps<T>, Theme>> = {}) =>
  style<BorderEndEndRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderEndEndRadius',
    prop: 'style$BorderEndEndRadius',
    themeProp,
  });
