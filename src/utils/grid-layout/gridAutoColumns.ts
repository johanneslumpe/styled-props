import { GridAutoColumnsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridAutoColumnsProps<T> {
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns: T;
}

export const gridAutoColumns = <
  T = GridAutoColumnsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridAutoColumnsProps<T>, Theme>> = {}) =>
  style<IGridAutoColumnsProps<T>, Theme, Breakpoints>({
    cssProp: 'gridAutoColumns',
    prop: 'gridAutoColumns',
    themeProp,
  });
