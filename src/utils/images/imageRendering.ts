import { ImageRenderingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IImageRenderingProps<T> {
  imageRendering: T;
}

export const imageRendering = <
  T = ImageRenderingPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IImageRenderingProps<T>, Theme>> = {}) =>
  style<IImageRenderingProps<T>, Theme, Breakpoints>({
    cssProp: 'imageRendering',
    prop: 'imageRendering',
    themeProp,
  });
