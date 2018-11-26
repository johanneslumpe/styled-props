import { ShapeOutsideProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IShapeOutsideProps<T> {
  shapeOutside: T;
}

export const shapeOutside = <
  T = ShapeOutsideProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IShapeOutsideProps<T>, Theme>> = {}) =>
  style<IShapeOutsideProps<T>, Theme, Breakpoints>({
    cssProp: 'shapeOutside',
    prop: 'shapeOutside',
    themeProp,
  });
