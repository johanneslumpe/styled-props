import { BorderInlineEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderInlineEndProps<T> {
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  style$BorderInlineEnd: T;
}

export const borderInlineEnd = <
  T = BorderInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderInlineEndProps<T>, Theme>> = {}) =>
  style<BorderInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineEnd',
    prop: 'style$BorderInlineEnd',
    themeProp,
  });
