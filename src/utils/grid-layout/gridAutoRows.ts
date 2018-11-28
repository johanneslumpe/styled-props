import { GridAutoRowsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridAutoRowsProps<T> {
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows: T;
}

export const gridAutoRows = <
  T = GridAutoRowsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridAutoRowsProps<T>, Theme>> = {}) =>
  style<IGridAutoRowsProps<T>, Theme, Breakpoints>({
    cssProp: 'gridAutoRows',
    prop: 'gridAutoRows',
    themeProp,
  });
