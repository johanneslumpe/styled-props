import { ShapeMarginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IShapeMarginProps<T> {
  /**
   * The **`shape-margin`** CSS property specifies a margin for a CSS shape created using `shape-outside`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin: T;
}

export const shapeMargin = <
  T = ShapeMarginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IShapeMarginProps<T>, Theme>> = {}) =>
  style<IShapeMarginProps<T>, Theme, Breakpoints>({
    cssProp: 'shapeMargin',
    prop: 'shapeMargin',
    themeProp,
  });
