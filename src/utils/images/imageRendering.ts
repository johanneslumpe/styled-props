import { ImageRenderingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ImageRenderingProps<T> {
  /**
   * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  style$ImageRendering: T;
}

export const imageRendering = <
  T = ImageRenderingPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ImageRenderingProps<T>, Theme>> = {}) =>
  style<ImageRenderingProps<T>, Theme, Breakpoints>({
    cssProp: 'imageRendering',
    prop: 'style$ImageRendering',
    themeProp,
  });
