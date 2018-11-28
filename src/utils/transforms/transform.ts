import { TransformProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransformProps<T> {
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform: T;
}

export const transform = <
  T = TransformProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransformProps<T>, Theme>> = {}) =>
  style<ITransformProps<T>, Theme, Breakpoints>({
    cssProp: 'transform',
    prop: 'transform',
    themeProp,
  });
