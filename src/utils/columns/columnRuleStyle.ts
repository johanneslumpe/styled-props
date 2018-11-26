import { ColumnRuleStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnRuleStyleProps<T> {
  columnRuleStyle: T;
}

export const columnRuleStyle = <
  T = ColumnRuleStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnRuleStyleProps<T>, Theme>> = {}) =>
  style<IColumnRuleStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'columnRuleStyle',
    prop: 'columnRuleStyle',
    themeProp,
  });
