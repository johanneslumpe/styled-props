import { TransformOriginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransformOriginProps<T> {
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin: T;
}

export const transformOrigin = <
  T = TransformOriginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransformOriginProps<T>, Theme>> = {}) =>
  style<ITransformOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'transformOrigin',
    prop: 'transformOrigin',
    themeProp,
  });
