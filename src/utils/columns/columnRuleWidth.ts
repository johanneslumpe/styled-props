import { ColumnRuleWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnRuleWidthProps<T> {
  columnRuleWidth: T;
}

export const columnRuleWidth = <
  T = ColumnRuleWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnRuleWidthProps<T>, Theme>> = {}) =>
  style<IColumnRuleWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'columnRuleWidth',
    prop: 'columnRuleWidth',
    themeProp,
  });
