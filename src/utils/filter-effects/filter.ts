import { FilterProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFilterProps<T> {
  filter: T;
}

export const filter = <
  T = FilterProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFilterProps<T>, Theme>> = {}) =>
  style<IFilterProps<T>, Theme, Breakpoints>({
    cssProp: 'filter',
    prop: 'filter',
    themeProp,
  });
