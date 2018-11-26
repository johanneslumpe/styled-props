import { ListStyleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IListStyleProps<T> {
  listStyle: T;
}

export const listStyle = <
  T = ListStyleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IListStyleProps<T>, Theme>> = {}) =>
  style<IListStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'listStyle',
    prop: 'listStyle',
    themeProp,
  });
