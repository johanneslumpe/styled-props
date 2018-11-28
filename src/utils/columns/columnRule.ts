import { ColumnRuleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnRuleProps<T> {
  /**
   * The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
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
