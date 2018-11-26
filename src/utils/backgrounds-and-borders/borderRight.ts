import { BorderRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderRightProps<T> {
  borderRight: T;
}

export const borderRight = <
  T = BorderRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderRightProps<T>, Theme>> = {}) =>
  style<IBorderRightProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRight',
    prop: 'borderRight',
    themeProp,
  });
