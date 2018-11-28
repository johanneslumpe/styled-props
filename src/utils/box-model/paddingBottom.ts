import { PaddingBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingBottomProps<T> {
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom: T;
}

export const paddingBottom = <
  T = PaddingBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingBottomProps<T>, Theme>> = {}) =>
  style<IPaddingBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingBottom',
    prop: 'paddingBottom',
    themeProp,
  });
