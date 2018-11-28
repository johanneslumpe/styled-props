import { BorderTopStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopStyleProps<T> {
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle: T;
}

export const borderTopStyle = <
  T = BorderTopStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopStyleProps<T>, Theme>> = {}) =>
  style<IBorderTopStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopStyle',
    prop: 'borderTopStyle',
    themeProp,
  });
