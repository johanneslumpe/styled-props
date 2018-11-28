import { BorderBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockEndProps<T> {
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd: T;
}

export const borderBlockEnd = <
  T = BorderBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockEndProps<T>, Theme>> = {}) =>
  style<IBorderBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEnd',
    prop: 'borderBlockEnd',
    themeProp,
  });
