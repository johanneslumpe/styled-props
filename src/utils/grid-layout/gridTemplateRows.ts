import { GridTemplateRowsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridTemplateRowsProps<T> {
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  style$GridTemplateRows: T;
}

export const gridTemplateRows = <
  T = GridTemplateRowsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridTemplateRowsProps<T>, Theme>> = {}) =>
  style<GridTemplateRowsProps<T>, Theme, Breakpoints>({
    cssProp: 'gridTemplateRows',
    prop: 'style$GridTemplateRows',
    themeProp,
  });
