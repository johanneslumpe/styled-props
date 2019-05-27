import { BreakInsidePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BreakInsideProps<T> {
  /**
   * The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  style$BreakInside: T;
}

export const breakInside = <
  T = BreakInsidePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BreakInsideProps<T>, Theme>> = {}) =>
  style<BreakInsideProps<T>, Theme, Breakpoints>({
    cssProp: 'breakInside',
    prop: 'style$BreakInside',
    themeProp,
  });
