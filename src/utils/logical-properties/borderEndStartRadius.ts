import { BorderEndStartRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderEndStartRadiusProps<T> {
  /**
   * The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
   */
  style$BorderEndStartRadius: T;
}

export const borderEndStartRadius = <
  T = BorderEndStartRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderEndStartRadiusProps<T>, Theme>> = {}) =>
  style<BorderEndStartRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderEndStartRadius',
    prop: 'style$BorderEndStartRadius',
    themeProp,
  });
