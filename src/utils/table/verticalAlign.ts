import { VerticalAlignProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IVerticalAlignProps<T> {
  verticalAlign: T;
}

export const verticalAlign = <
  T = VerticalAlignProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IVerticalAlignProps<T>, Theme>> = {}) =>
  style<IVerticalAlignProps<T>, Theme, Breakpoints>({
    cssProp: 'verticalAlign',
    prop: 'verticalAlign',
    themeProp,
  });
