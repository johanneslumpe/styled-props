import { MaskImageProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskImageProps<T> {
  maskImage: T;
}

export const maskImage = <
  T = MaskImageProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskImageProps<T>, Theme>> = {}) =>
  style<IMaskImageProps<T>, Theme, Breakpoints>({
    cssProp: 'maskImage',
    prop: 'maskImage',
    themeProp,
  });
