import { BorderLeftStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderLeftStyleProps<T> {
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle: T;
}

export const borderLeftStyle = <
  T = BorderLeftStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderLeftStyleProps<T>, Theme>> = {}) =>
  style<IBorderLeftStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeftStyle',
    prop: 'borderLeftStyle',
    themeProp,
  });
