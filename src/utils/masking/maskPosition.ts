import { MaskPositionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskPositionProps<T> {
  maskPosition: T;
}

export const maskPosition = <
  T = MaskPositionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskPositionProps<T>, Theme>> = {}) =>
  style<IMaskPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'maskPosition',
    prop: 'maskPosition',
    themeProp,
  });
