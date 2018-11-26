import { MaskSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskSizeProps<T> {
  maskSize: T;
}

export const maskSize = <
  T = MaskSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskSizeProps<T>, Theme>> = {}) =>
  style<IMaskSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskSize',
    prop: 'maskSize',
    themeProp,
  });
