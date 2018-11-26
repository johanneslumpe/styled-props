import { ShapeImageThresholdProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IShapeImageThresholdProps<T> {
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
