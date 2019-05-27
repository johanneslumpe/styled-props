import { BorderBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockEndProps<T> {
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  style$BorderBlockEnd: T;
}

export const borderBlockEnd = <
  T = BorderBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockEndProps<T>, Theme>> = {}) =>
  style<BorderBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEnd',
    prop: 'style$BorderBlockEnd',
    themeProp,
  });
