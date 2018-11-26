import { OrphansProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOrphansProps<T> {
  orphans: T;
}

export const orphans = <
  T = OrphansProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOrphansProps<T>, Theme>> = {}) =>
  style<IOrphansProps<T>, Theme, Breakpoints>({
    cssProp: 'orphans',
    prop: 'orphans',
    themeProp,
  });
