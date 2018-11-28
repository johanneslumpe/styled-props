import { GridTemplateColumnsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridTemplateColumnsProps<T> {
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns: T;
}

export const gridTemplateColumns = <
  T = GridTemplateColumnsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridTemplateColumnsProps<T>, Theme>> = {}) =>
  style<IGridTemplateColumnsProps<T>, Theme, Breakpoints>({
    cssProp: 'gridTemplateColumns',
    prop: 'gridTemplateColumns',
    themeProp,
  });
