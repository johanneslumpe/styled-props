import { ShapeImageThresholdProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IShapeImageThresholdProps<T> {
  /**
   * The **`shape-image-threshold`** CSS property defines the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold: T;
}

export const shapeImageThreshold = <
  T = ShapeImageThresholdProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IShapeImageThresholdProps<T>, Theme>> = {}) =>
  style<IShapeImageThresholdProps<T>, Theme, Breakpoints>({
    cssProp: 'shapeImageThreshold',
    prop: 'shapeImageThreshold',
    themeProp,
  });
