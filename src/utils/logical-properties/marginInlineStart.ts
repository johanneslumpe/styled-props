import { MarginInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginInlineStartProps<T> {
  marginInlineStart: T;
}

export const marginInlineStart = <
  T = MarginInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginInlineStartProps<T>, Theme>> = {}) =>
  style<IMarginInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'marginInlineStart',
    prop: 'marginInlineStart',
    themeProp,
  });
