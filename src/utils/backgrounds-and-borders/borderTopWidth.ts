import { BorderTopWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopWidthProps<T> {
  borderTopWidth: T;
}

export const borderTopWidth = <
  T = BorderTopWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopWidthProps<T>, Theme>> = {}) =>
  style<IBorderTopWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopWidth',
    prop: 'borderTopWidth',
    themeProp,
  });
