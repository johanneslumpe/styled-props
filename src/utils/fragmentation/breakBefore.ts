import { BreakBeforePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BreakBeforeProps<T> {
  /**
   * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  style$BreakBefore: T;
}

export const breakBefore = <
  T = BreakBeforePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BreakBeforeProps<T>, Theme>> = {}) =>
  style<BreakBeforeProps<T>, Theme, Breakpoints>({
    cssProp: 'breakBefore',
    prop: 'style$BreakBefore',
    themeProp,
  });
