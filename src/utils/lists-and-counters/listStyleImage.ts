import { ListStyleImageProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IListStyleImageProps<T> {
  listStyleImage: T;
}

export const listStyleImage = <
  T = ListStyleImageProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IListStyleImageProps<T>, Theme>> = {}) =>
  style<IListStyleImageProps<T>, Theme, Breakpoints>({
    cssProp: 'listStyleImage',
    prop: 'listStyleImage',
    themeProp,
  });
