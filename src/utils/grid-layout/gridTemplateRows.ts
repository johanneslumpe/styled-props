import { GridTemplateRowsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridTemplateRowsProps<T> {
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows: T;
}

export const gridTemplateRows = <
  T = GridTemplateRowsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridTemplateRowsProps<T>, Theme>> = {}) =>
  style<IGridTemplateRowsProps<T>, Theme, Breakpoints>({
    cssProp: 'gridTemplateRows',
    prop: 'gridTemplateRows',
    themeProp,
  });
