import { MaskTypePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskTypeProps<T> {
  maskType: T;
}

export const maskType = <
  T = MaskTypePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskTypeProps<T>, Theme>> = {}) =>
  style<IMaskTypeProps<T>, Theme, Breakpoints>({
    cssProp: 'maskType',
    prop: 'maskType',
    themeProp,
  });
