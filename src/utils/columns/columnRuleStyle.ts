import { ColumnRuleStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnRuleStyleProps<T> {
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
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
