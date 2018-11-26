import { BorderLeftWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderLeftWidthProps<T> {
  borderLeftWidth: T;
}

export const borderLeftWidth = <
  T = BorderLeftWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderLeftWidthProps<T>, Theme>> = {}) =>
  style<IBorderLeftWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeftWidth',
    prop: 'borderLeftWidth',
    themeProp,
  });
