import { BreakInsidePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBreakInsideProps<T> {
  /**
   * The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside: T;
}

export const breakInside = <
  T = BreakInsidePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBreakInsideProps<T>, Theme>> = {}) =>
  style<IBreakInsideProps<T>, Theme, Breakpoints>({
    cssProp: 'breakInside',
    prop: 'breakInside',
    themeProp,
  });
