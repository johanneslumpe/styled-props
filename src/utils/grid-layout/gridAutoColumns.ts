import { GridAutoColumnsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridAutoColumnsProps<T> {
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  style$GridAutoColumns: T;
}

export const gridAutoColumns = <
  T = GridAutoColumnsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridAutoColumnsProps<T>, Theme>> = {}) =>
  style<GridAutoColumnsProps<T>, Theme, Breakpoints>({
    cssProp: 'gridAutoColumns',
    prop: 'style$GridAutoColumns',
    themeProp,
  });
