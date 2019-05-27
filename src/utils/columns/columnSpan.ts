import { ColumnSpanPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ColumnSpanProps<T> {
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  style$ColumnSpan: T;
}

export const columnSpan = <
  T = ColumnSpanPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ColumnSpanProps<T>, Theme>> = {}) =>
  style<ColumnSpanProps<T>, Theme, Breakpoints>({
    cssProp: 'columnSpan',
    prop: 'style$ColumnSpan',
    themeProp,
  });
