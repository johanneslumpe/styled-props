import { MarginRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginRightProps<T> {
  marginRight: T;
}

export const marginRight = <
  T = MarginRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginRightProps<T>, Theme>> = {}) =>
  style<IMarginRightProps<T>, Theme, Breakpoints>({
    cssProp: 'marginRight',
    prop: 'marginRight',
    themeProp,
  });
