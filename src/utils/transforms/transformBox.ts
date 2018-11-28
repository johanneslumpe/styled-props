import { TransformBoxPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransformBoxProps<T> {
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox: T;
}

export const transformBox = <
  T = TransformBoxPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransformBoxProps<T>, Theme>> = {}) =>
  style<ITransformBoxProps<T>, Theme, Breakpoints>({
    cssProp: 'transformBox',
    prop: 'transformBox',
    themeProp,
  });
