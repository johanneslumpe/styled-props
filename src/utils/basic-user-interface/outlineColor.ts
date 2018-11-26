import { OutlineColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOutlineColorProps<T> {
  outlineColor: T;
}

export const outlineColor = <
  T = OutlineColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOutlineColorProps<T>, Theme>> = {}) =>
  style<IOutlineColorProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineColor',
    prop: 'outlineColor',
    themeProp,
  });
