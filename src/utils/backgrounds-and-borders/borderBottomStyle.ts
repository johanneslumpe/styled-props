import { BorderBottomStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomStyleProps<T> {
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle: T;
}

export const borderBottomStyle = <
  T = BorderBottomStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomStyleProps<T>, Theme>> = {}) =>
  style<IBorderBottomStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomStyle',
    prop: 'borderBottomStyle',
    themeProp,
  });
