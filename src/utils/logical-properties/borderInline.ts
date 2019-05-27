import { BorderInlineProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderInlineProps<T> {
  /**
   * The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline
   */
  style$BorderInline: T;
}

export const borderInline = <
  T = BorderInlineProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderInlineProps<T>, Theme>> = {}) =>
  style<BorderInlineProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInline',
    prop: 'style$BorderInline',
    themeProp,
  });
