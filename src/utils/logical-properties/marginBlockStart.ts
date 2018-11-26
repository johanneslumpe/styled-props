import { MarginBlockStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginBlockStartProps<T> {
  marginBlockStart: T;
}

export const marginBlockStart = <
  T = MarginBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginBlockStartProps<T>, Theme>> = {}) =>
  style<IMarginBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: 'marginBlockStart',
    prop: 'marginBlockStart',
    themeProp,
  });
