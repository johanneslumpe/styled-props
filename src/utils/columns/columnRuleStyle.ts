import { ColumnRuleStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ColumnRuleStyleProps<T> {
  /**
   * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  style$ColumnRuleStyle: T;
}

export const columnRuleStyle = <
  T = ColumnRuleStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ColumnRuleStyleProps<T>, Theme>> = {}) =>
  style<ColumnRuleStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'columnRuleStyle',
    prop: 'style$ColumnRuleStyle',
    themeProp,
  });
