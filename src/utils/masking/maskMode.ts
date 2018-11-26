import { MaskModeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskModeProps<T> {
  maskMode: T;
}

export const maskMode = <
  T = MaskModeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskModeProps<T>, Theme>> = {}) =>
  style<IMaskModeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskMode',
    prop: 'maskMode',
    themeProp,
  });
