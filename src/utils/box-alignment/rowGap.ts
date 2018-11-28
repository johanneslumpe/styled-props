import { RowGapProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IRowGapProps<T> {
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's rows.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  rowGap: T;
}

export const rowGap = <
  T = RowGapProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IRowGapProps<T>, Theme>> = {}) =>
  style<IRowGapProps<T>, Theme, Breakpoints>({
    cssProp: 'rowGap',
    prop: 'rowGap',
    themeProp,
  });
