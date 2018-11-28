import { MarginBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginBottomProps<T> {
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom: T;
}

export const marginBottom = <
  T = MarginBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginBottomProps<T>, Theme>> = {}) =>
  style<IMarginBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'marginBottom',
    prop: 'marginBottom',
    themeProp,
  });
