import { WidowsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface WidowsProps<T> {
  /**
   * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  style$Widows: T;
}

export const widows = <
  T = WidowsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<WidowsProps<T>, Theme>> = {}) =>
  style<WidowsProps<T>, Theme, Breakpoints>({
    cssProp: 'widows',
    prop: 'style$Widows',
    themeProp,
  });
