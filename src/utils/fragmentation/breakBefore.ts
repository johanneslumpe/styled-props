import { BreakBeforePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBreakBeforeProps<T> {
  /**
   * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore: T;
}

export const breakBefore = <
  T = BreakBeforePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBreakBeforeProps<T>, Theme>> = {}) =>
  style<IBreakBeforeProps<T>, Theme, Breakpoints>({
    cssProp: 'breakBefore',
    prop: 'breakBefore',
    themeProp,
  });
