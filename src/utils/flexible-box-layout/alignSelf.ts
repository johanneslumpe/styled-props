import { AlignSelfPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAlignSelfProps<T> {
  alignSelf: T;
}

export const alignSelf = <
  T = AlignSelfPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAlignSelfProps<T>, Theme>> = {}) =>
  style<IAlignSelfProps<T>, Theme, Breakpoints>({
    cssProp: 'alignSelf',
    prop: 'alignSelf',
    themeProp,
  });
