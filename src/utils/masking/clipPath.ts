import { ClipPathProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IClipPathProps<T> {
  clipPath: T;
}

export const clipPath = <
  T = ClipPathProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IClipPathProps<T>, Theme>> = {}) =>
  style<IClipPathProps<T>, Theme, Breakpoints>({
    cssProp: 'clipPath',
    prop: 'clipPath',
    themeProp,
  });
