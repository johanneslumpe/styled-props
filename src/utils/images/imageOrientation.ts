import { ImageOrientationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IImageOrientationProps<T> {
  /**
   * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
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
