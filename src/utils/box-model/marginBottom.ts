import { MarginBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginBottomProps<T> {
  marginBottom: T;
}

export const marginBottom = <
  T = MarginBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginBottomProps<T>, Theme>> = {}) =>
  style<IMarginBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'marginBottom',
    prop: 'marginBottom',
    themeProp,
  });
