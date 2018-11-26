import { BorderLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderLeftProps<T> {
  borderLeft: T;
}

export const borderLeft = <
  T = BorderLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderLeftProps<T>, Theme>> = {}) =>
  style<IBorderLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeft',
    prop: 'borderLeft',
    themeProp,
  });
