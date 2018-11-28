import { WidowsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWidowsProps<T> {
  /**
   * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows: T;
}

export const widows = <
  T = WidowsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWidowsProps<T>, Theme>> = {}) =>
  style<IWidowsProps<T>, Theme, Breakpoints>({
    cssProp: 'widows',
    prop: 'widows',
    themeProp,
  });
