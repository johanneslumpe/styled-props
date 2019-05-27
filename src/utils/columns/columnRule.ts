import { ColumnRuleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ColumnRuleProps<T> {
  /**
   * The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  style$ColumnRule: T;
}

export const columnRule = <
  T = ColumnRuleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ColumnRuleProps<T>, Theme>> = {}) =>
  style<ColumnRuleProps<T>, Theme, Breakpoints>({
    cssProp: 'columnRule',
    prop: 'style$ColumnRule',
    themeProp,
  });
