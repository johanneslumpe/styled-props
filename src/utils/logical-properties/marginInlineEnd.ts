import { MarginInlineEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginInlineEndProps<T> {
  marginInlineEnd: T;
}

export const marginInlineEnd = <
  T = MarginInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginInlineEndProps<T>, Theme>> = {}) =>
  style<IMarginInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: 'marginInlineEnd',
    prop: 'marginInlineEnd',
    themeProp,
  });
