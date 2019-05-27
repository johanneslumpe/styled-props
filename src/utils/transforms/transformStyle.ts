import { TransformStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TransformStyleProps<T> {
  /**
   * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  style$TransformStyle: T;
}

export const transformStyle = <
  T = TransformStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TransformStyleProps<T>, Theme>> = {}) =>
  style<TransformStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'transformStyle',
    prop: 'style$TransformStyle',
    themeProp,
  });
