import { RowGapProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IRowGapProps<T> {
  rowGap: T;
}

export const rowGap = <
  T = RowGapProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IRowGapProps<T>, Theme>> = {}) =>
  style<IRowGapProps<T>, Theme, Breakpoints>({
    cssProp: 'rowGap',
    prop: 'rowGap',
    themeProp,
  });
