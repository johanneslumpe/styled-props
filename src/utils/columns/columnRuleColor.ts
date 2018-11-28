import { ColumnRuleColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnRuleColorProps<T> {
  /**
   * The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
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
