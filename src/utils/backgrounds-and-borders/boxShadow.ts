import { BoxShadowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBoxShadowProps<T> {
  boxShadow: T;
}

export const boxShadow = <
  T = BoxShadowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBoxShadowProps<T>, Theme>> = {}) =>
  style<IBoxShadowProps<T>, Theme, Breakpoints>({
    cssProp: 'boxShadow',
    prop: 'boxShadow',
    themeProp,
  });
