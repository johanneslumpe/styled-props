import { BorderRightStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderRightStyleProps<T> {
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle: T;
}

export const borderRightStyle = <
  T = BorderRightStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderRightStyleProps<T>, Theme>> = {}) =>
  style<IBorderRightStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRightStyle',
    prop: 'borderRightStyle',
    themeProp,
  });
