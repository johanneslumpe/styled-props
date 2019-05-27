import { ColumnRuleColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ColumnRuleColorProps<T> {
  /**
   * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  style$ColumnRuleColor: T;
}

export const columnRuleColor = <
  T = ColumnRuleColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ColumnRuleColorProps<T>, Theme>> = {}) =>
  style<ColumnRuleColorProps<T>, Theme, Breakpoints>({
    cssProp: 'columnRuleColor',
    prop: 'style$ColumnRuleColor',
    themeProp,
  });
