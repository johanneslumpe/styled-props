import { TransformStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransformStyleProps<T> {
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle: T;
}

export const transformStyle = <
  T = TransformStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransformStyleProps<T>, Theme>> = {}) =>
  style<ITransformStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'transformStyle',
    prop: 'transformStyle',
    themeProp,
  });
