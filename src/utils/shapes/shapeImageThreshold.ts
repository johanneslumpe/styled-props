import { ShapeImageThresholdProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ShapeImageThresholdProps<T> {
  /**
   * The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  style$ShapeImageThreshold: T;
}

export const shapeImageThreshold = <
  T = ShapeImageThresholdProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ShapeImageThresholdProps<T>, Theme>> = {}) =>
  style<ShapeImageThresholdProps<T>, Theme, Breakpoints>({
    cssProp: 'shapeImageThreshold',
    prop: 'style$ShapeImageThreshold',
    themeProp,
  });
