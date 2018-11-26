import { BreakAfterPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBreakAfterProps<T> {
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
