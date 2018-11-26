import { PaddingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingProps<T> {
  padding: T;
}

export const padding = <
  T = PaddingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingProps<T>, Theme>> = {}) =>
  style<IPaddingProps<T>, Theme, Breakpoints>({
    cssProp: 'padding',
    prop: 'padding',
    themeProp,
  });
