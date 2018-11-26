import { BoxDecorationBreakPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBoxDecorationBreakProps<T> {
  boxDecorationBreak: T;
}

export const boxDecorationBreak = <
  T = BoxDecorationBreakPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBoxDecorationBreakProps<T>, Theme>> = {}) =>
  style<IBoxDecorationBreakProps<T>, Theme, Breakpoints>({
    cssProp: 'boxDecorationBreak',
    prop: 'boxDecorationBreak',
    themeProp,
  });
