import { LineBreakPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ILineBreakProps<T> {
  lineBreak: T;
}

export const lineBreak = <
  T = LineBreakPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ILineBreakProps<T>, Theme>> = {}) =>
  style<ILineBreakProps<T>, Theme, Breakpoints>({
    cssProp: 'lineBreak',
    prop: 'lineBreak',
    themeProp,
  });
