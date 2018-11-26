import { ColumnRuleColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnRuleColorProps<T> {
  columnRuleColor: T;
}

export const columnRuleColor = <
  T = ColumnRuleColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnRuleColorProps<T>, Theme>> = {}) =>
  style<IColumnRuleColorProps<T>, Theme, Breakpoints>({
    cssProp: 'columnRuleColor',
    prop: 'columnRuleColor',
    themeProp,
  });
