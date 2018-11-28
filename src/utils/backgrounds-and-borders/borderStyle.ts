import { BorderStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderStyleProps<T> {
  /**
   * The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle: T;
}

export const borderStyle = <
  T = BorderStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderStyleProps<T>, Theme>> = {}) =>
  style<IBorderStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderStyle',
    prop: 'borderStyle',
    themeProp,
  });
