import { GridTemplateColumnsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridTemplateColumnsProps<T> {
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
