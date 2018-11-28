import { BreakAfterPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBreakAfterProps<T> {
  /**
   * The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter: T;
}

export const breakAfter = <
  T = BreakAfterPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBreakAfterProps<T>, Theme>> = {}) =>
  style<IBreakAfterProps<T>, Theme, Breakpoints>({
    cssProp: 'breakAfter',
    prop: 'breakAfter',
    themeProp,
  });
