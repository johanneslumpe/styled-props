import { GridTemplateRowsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridTemplateRowsProps<T> {
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
