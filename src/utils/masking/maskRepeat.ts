import { MaskRepeatProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskRepeatProps<T> {
  maskRepeat: T;
}

export const maskRepeat = <
  T = MaskRepeatProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskRepeatProps<T>, Theme>> = {}) =>
  style<IMaskRepeatProps<T>, Theme, Breakpoints>({
    cssProp: 'maskRepeat',
    prop: 'maskRepeat',
    themeProp,
  });
