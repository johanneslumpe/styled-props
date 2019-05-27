import { BorderBlockProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBlockProps<T> {
  /**
   * The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block
   */
  style$BorderBlock: T;
}

export const borderBlock = <
  T = BorderBlockProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBlockProps<T>, Theme>> = {}) =>
  style<BorderBlockProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlock',
    prop: 'style$BorderBlock',
    themeProp,
  });
