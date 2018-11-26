import { ImageOrientationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IImageOrientationProps<T> {
  imageOrientation: T;
}

export const imageOrientation = <
  T = ImageOrientationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IImageOrientationProps<T>, Theme>> = {}) =>
  style<IImageOrientationProps<T>, Theme, Breakpoints>({
    cssProp: 'imageOrientation',
    prop: 'imageOrientation',
    themeProp,
  });
