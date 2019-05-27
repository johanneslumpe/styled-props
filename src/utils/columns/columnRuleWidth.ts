import { ColumnRuleWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ColumnRuleWidthProps<T> {
  /**
   * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  style$ColumnRuleWidth: T;
}

export const columnRuleWidth = <
  T = ColumnRuleWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ColumnRuleWidthProps<T>, Theme>> = {}) =>
  style<ColumnRuleWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'columnRuleWidth',
    prop: 'style$ColumnRuleWidth',
    themeProp,
  });
