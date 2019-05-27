import { TransformBoxPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TransformBoxProps<T> {
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  style$TransformBox: T;
}

export const transformBox = <
  T = TransformBoxPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TransformBoxProps<T>, Theme>> = {}) =>
  style<TransformBoxProps<T>, Theme, Breakpoints>({
    cssProp: 'transformBox',
    prop: 'style$TransformBox',
    themeProp,
  });
