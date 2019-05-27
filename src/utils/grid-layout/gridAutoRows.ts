import { GridAutoRowsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridAutoRowsProps<T> {
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  style$GridAutoRows: T;
}

export const gridAutoRows = <
  T = GridAutoRowsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridAutoRowsProps<T>, Theme>> = {}) =>
  style<GridAutoRowsProps<T>, Theme, Breakpoints>({
    cssProp: 'gridAutoRows',
    prop: 'style$GridAutoRows',
    themeProp,
  });
