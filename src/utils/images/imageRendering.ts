import { ImageRenderingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IImageRenderingProps<T> {
  /**
   * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
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
