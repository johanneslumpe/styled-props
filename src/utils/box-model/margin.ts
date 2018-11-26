import { MarginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginProps<T> {
  margin: T;
}

export const margin = <
  T = MarginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginProps<T>, Theme>> = {}) =>
  style<IMarginProps<T>, Theme, Breakpoints>({
    cssProp: 'margin',
    prop: 'margin',
    themeProp,
  });
