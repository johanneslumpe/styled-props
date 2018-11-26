import { BorderProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderProps<T> {
  border: T;
}

export const border = <
  T = BorderProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderProps<T>, Theme>> = {}) =>
  style<IBorderProps<T>, Theme, Breakpoints>({
    cssProp: 'border',
    prop: 'border',
    themeProp,
  });
