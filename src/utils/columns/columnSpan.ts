import { ColumnSpanPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnSpanProps<T> {
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan: T;
}

export const columnSpan = <
  T = ColumnSpanPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnSpanProps<T>, Theme>> = {}) =>
  style<IColumnSpanProps<T>, Theme, Breakpoints>({
    cssProp: 'columnSpan',
    prop: 'columnSpan',
    themeProp,
  });
