import { GridTemplateColumnsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridTemplateColumnsProps<T> {
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  style$GridTemplateColumns: T;
}

export const gridTemplateColumns = <
  T = GridTemplateColumnsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridTemplateColumnsProps<T>, Theme>> = {}) =>
  style<GridTemplateColumnsProps<T>, Theme, Breakpoints>({
    cssProp: 'gridTemplateColumns',
    prop: 'style$GridTemplateColumns',
    themeProp,
  });
