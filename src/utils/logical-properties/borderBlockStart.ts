import { BorderBlockStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockStartProps<T> {
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart: T;
}

export const borderBlockStart = <
  T = BorderBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockStartProps<T>, Theme>> = {}) =>
  style<IBorderBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockStart',
    prop: 'borderBlockStart',
    themeProp,
  });
