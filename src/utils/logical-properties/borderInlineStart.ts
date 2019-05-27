import { BorderInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderInlineStartProps<T> {
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  style$BorderInlineStart: T;
}

export const borderInlineStart = <
  T = BorderInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderInlineStartProps<T>, Theme>> = {}) =>
  style<BorderInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStart',
    prop: 'style$BorderInlineStart',
    themeProp,
  });
