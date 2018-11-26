import { ListStylePositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IListStylePositionProps<T> {
  listStylePosition: T;
}

export const listStylePosition = <
  T = ListStylePositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IListStylePositionProps<T>, Theme>> = {}) =>
  style<IListStylePositionProps<T>, Theme, Breakpoints>({
    cssProp: 'listStylePosition',
    prop: 'listStylePosition',
    themeProp,
  });
