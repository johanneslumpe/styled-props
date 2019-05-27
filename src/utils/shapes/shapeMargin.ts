import { ShapeMarginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ShapeMarginProps<T> {
  /**
   * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  style$ShapeMargin: T;
}

export const shapeMargin = <
  T = ShapeMarginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ShapeMarginProps<T>, Theme>> = {}) =>
  style<ShapeMarginProps<T>, Theme, Breakpoints>({
    cssProp: 'shapeMargin',
    prop: 'style$ShapeMargin',
    themeProp,
  });
