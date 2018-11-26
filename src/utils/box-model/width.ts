import { WidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWidthProps<T> {
  width: T;
}

export const width = <
  T = WidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWidthProps<T>, Theme>> = {}) =>
  style<IWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'width',
    prop: 'width',
    themeProp,
  });
