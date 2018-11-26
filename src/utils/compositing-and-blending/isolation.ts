import { IsolationPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IIsolationProps<T> {
  isolation: T;
}

export const isolation = <
  T = IsolationPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IIsolationProps<T>, Theme>> = {}) =>
  style<IIsolationProps<T>, Theme, Breakpoints>({
    cssProp: 'isolation',
    prop: 'isolation',
    themeProp,
  });
