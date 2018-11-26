import { MarginBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginBlockEndProps<T> {
  marginBlockEnd: T;
}

export const marginBlockEnd = <
  T = MarginBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginBlockEndProps<T>, Theme>> = {}) =>
  style<IMarginBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'marginBlockEnd',
    prop: 'marginBlockEnd',
    themeProp,
  });
