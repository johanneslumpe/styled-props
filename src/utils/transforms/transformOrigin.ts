import { TransformOriginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TransformOriginProps<T> {
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  style$TransformOrigin: T;
}

export const transformOrigin = <
  T = TransformOriginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TransformOriginProps<T>, Theme>> = {}) =>
  style<TransformOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'transformOrigin',
    prop: 'style$TransformOrigin',
    themeProp,
  });
