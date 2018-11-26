import { MarginTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginTopProps<T> {
  marginTop: T;
}

export const marginTop = <
  T = MarginTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginTopProps<T>, Theme>> = {}) =>
  style<IMarginTopProps<T>, Theme, Breakpoints>({
    cssProp: 'marginTop',
    prop: 'marginTop',
    themeProp,
  });
