import { WordBreakPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWordBreakProps<T> {
  wordBreak: T;
}

export const wordBreak = <
  T = WordBreakPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWordBreakProps<T>, Theme>> = {}) =>
  style<IWordBreakProps<T>, Theme, Breakpoints>({
    cssProp: 'wordBreak',
    prop: 'wordBreak',
    themeProp,
  });
