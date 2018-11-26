import { ListStyleTypeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IListStyleTypeProps<T> {
  listStyleType: T;
}

export const listStyleType = <
  T = ListStyleTypeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IListStyleTypeProps<T>, Theme>> = {}) =>
  style<IListStyleTypeProps<T>, Theme, Breakpoints>({
    cssProp: 'listStyleType',
    prop: 'listStyleType',
    themeProp,
  });
