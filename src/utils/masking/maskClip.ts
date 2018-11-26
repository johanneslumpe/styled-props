import { MaskClipProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskClipProps<T> {
  maskClip: T;
}

export const maskClip = <
  T = MaskClipProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskClipProps<T>, Theme>> = {}) =>
  style<IMaskClipProps<T>, Theme, Breakpoints>({
    cssProp: 'maskClip',
    prop: 'maskClip',
    themeProp,
  });
