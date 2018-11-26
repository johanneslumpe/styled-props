import { OutlineProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOutlineProps<T> {
  outline: T;
}

export const outline = <
  T = OutlineProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOutlineProps<T>, Theme>> = {}) =>
  style<IOutlineProps<T>, Theme, Breakpoints>({
    cssProp: 'outline',
    prop: 'outline',
    themeProp,
  });
