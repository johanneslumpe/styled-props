import { BorderBlockStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockStartProps<T> {
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  style$BorderBlockStart: T;
}

export const borderBlockStart = <
  T = BorderBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockStartProps<T>, Theme>> = {}) =>
  style<BorderBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockStart',
    prop: 'style$BorderBlockStart',
    themeProp,
  });
