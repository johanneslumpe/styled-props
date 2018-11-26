import { AllPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAllProps<T> {
  all: T;
}

export const all = <
  T = AllPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAllProps<T>, Theme>> = {}) =>
  style<IAllProps<T>, Theme, Breakpoints>({
    cssProp: 'all',
    prop: 'all',
    themeProp,
  });
