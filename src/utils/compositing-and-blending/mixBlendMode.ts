import { MixBlendModePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMixBlendModeProps<T> {
  mixBlendMode: T;
}

export const mixBlendMode = <
  T = MixBlendModePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMixBlendModeProps<T>, Theme>> = {}) =>
  style<IMixBlendModeProps<T>, Theme, Breakpoints>({
    cssProp: 'mixBlendMode',
    prop: 'mixBlendMode',
    themeProp,
  });
