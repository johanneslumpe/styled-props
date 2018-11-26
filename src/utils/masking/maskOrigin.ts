import { MaskOriginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskOriginProps<T> {
  maskOrigin: T;
}

export const maskOrigin = <
  T = MaskOriginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskOriginProps<T>, Theme>> = {}) =>
  style<IMaskOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'maskOrigin',
    prop: 'maskOrigin',
    themeProp,
  });
