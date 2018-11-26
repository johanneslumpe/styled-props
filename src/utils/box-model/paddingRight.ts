import { PaddingRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingRightProps<T> {
  paddingRight: T;
}

export const paddingRight = <
  T = PaddingRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingRightProps<T>, Theme>> = {}) =>
  style<IPaddingRightProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingRight',
    prop: 'paddingRight',
    themeProp,
  });
