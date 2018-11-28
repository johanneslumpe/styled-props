import { BorderInlineEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineEndProps<T> {
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd: T;
}

export const borderInlineEnd = <
  T = BorderInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineEndProps<T>, Theme>> = {}) =>
  style<IBorderInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineEnd',
    prop: 'borderInlineEnd',
    themeProp,
  });
