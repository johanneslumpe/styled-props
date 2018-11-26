import { ColumnRuleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnRuleProps<T> {
  columnRule: T;
}

export const columnRule = <
  T = ColumnRuleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnRuleProps<T>, Theme>> = {}) =>
  style<IColumnRuleProps<T>, Theme, Breakpoints>({
    cssProp: 'columnRule',
    prop: 'columnRule',
    themeProp,
  });
