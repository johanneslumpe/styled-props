import { TransformProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TransformProps<T> {
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  style$Transform: T;
}

export const transform = <
  T = TransformProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TransformProps<T>, Theme>> = {}) =>
  style<TransformProps<T>, Theme, Breakpoints>({
    cssProp: 'transform',
    prop: 'style$Transform',
    themeProp,
  });
