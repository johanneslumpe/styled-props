import { MarginTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginTopProps<T> {
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginTop: T;
}

export const marginTop = <
  T = MarginTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginTopProps<T>, Theme>> = {}) =>
  style<IMarginTopProps<T>, Theme, Breakpoints>({
    cssProp: 'marginTop',
    prop: 'marginTop',
    themeProp,
  });
