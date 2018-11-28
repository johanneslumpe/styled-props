import { BorderInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineStartProps<T> {
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart: T;
}

export const borderInlineStart = <
  T = BorderInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineStartProps<T>, Theme>> = {}) =>
  style<IBorderInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStart',
    prop: 'borderInlineStart',
    themeProp,
  });
