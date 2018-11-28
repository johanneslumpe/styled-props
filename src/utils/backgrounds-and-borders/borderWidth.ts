import { BorderWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderWidthProps<T> {
  /**
   * The **`border-width`** shorthand CSS property sets the widths of all four sides of an element's border.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth: T;
}

export const borderWidth = <
  T = BorderWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderWidthProps<T>, Theme>> = {}) =>
  style<IBorderWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderWidth',
    prop: 'borderWidth',
    themeProp,
  });
