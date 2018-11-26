import { MinWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMinWidthProps<T> {
  minWidth: T;
}

export const minWidth = <
  T = MinWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMinWidthProps<T>, Theme>> = {}) =>
  style<IMinWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'minWidth',
    prop: 'minWidth',
    themeProp,
  });
