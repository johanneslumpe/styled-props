import { ShapeOutsideProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IShapeOutsideProps<T> {
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
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
