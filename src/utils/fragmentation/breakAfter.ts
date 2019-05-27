import { BreakAfterPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BreakAfterProps<T> {
  /**
   * The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  style$BreakAfter: T;
}

export const breakAfter = <
  T = BreakAfterPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BreakAfterProps<T>, Theme>> = {}) =>
  style<BreakAfterProps<T>, Theme, Breakpoints>({
    cssProp: 'breakAfter',
    prop: 'style$BreakAfter',
    themeProp,
  });
