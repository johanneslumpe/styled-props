import { BreakInsidePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBreakInsideProps<T> {
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
