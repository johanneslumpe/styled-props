import { UnicodeBidiPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IUnicodeBidiProps<T> {
  unicodeBidi: T;
}

export const unicodeBidi = <
  T = UnicodeBidiPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IUnicodeBidiProps<T>, Theme>> = {}) =>
  style<IUnicodeBidiProps<T>, Theme, Breakpoints>({
    cssProp: 'unicodeBidi',
    prop: 'unicodeBidi',
    themeProp,
  });
