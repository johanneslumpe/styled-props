import { ClipProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IClipProps<T> {
  clip: T;
}

export const clip = <
  T = ClipProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IClipProps<T>, Theme>> = {}) =>
  style<IClipProps<T>, Theme, Breakpoints>({
    cssProp: 'clip',
    prop: 'clip',
    themeProp,
  });
