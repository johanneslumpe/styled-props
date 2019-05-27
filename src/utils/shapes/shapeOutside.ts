import { ShapeOutsideProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ShapeOutsideProps<T> {
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  style$ShapeOutside: T;
}

export const shapeOutside = <
  T = ShapeOutsideProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ShapeOutsideProps<T>, Theme>> = {}) =>
  style<ShapeOutsideProps<T>, Theme, Breakpoints>({
    cssProp: 'shapeOutside',
    prop: 'style$ShapeOutside',
    themeProp,
  });
