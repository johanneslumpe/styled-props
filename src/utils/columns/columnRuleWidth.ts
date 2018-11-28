import { ColumnRuleWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnRuleWidthProps<T> {
  /**
   * The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
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
