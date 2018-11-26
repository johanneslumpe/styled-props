import { JustifySelfPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IJustifySelfProps<T> {
  justifySelf: T;
}

export const justifySelf = <
  T = JustifySelfPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IJustifySelfProps<T>, Theme>> = {}) =>
  style<IJustifySelfProps<T>, Theme, Breakpoints>({
    cssProp: 'justifySelf',
    prop: 'justifySelf',
    themeProp,
  });
