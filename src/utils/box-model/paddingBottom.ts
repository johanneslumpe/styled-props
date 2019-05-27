import { PaddingBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PaddingBottomProps<T> {
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  style$PaddingBottom: T;
}

export const paddingBottom = <
  T = PaddingBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PaddingBottomProps<T>, Theme>> = {}) =>
  style<PaddingBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingBottom',
    prop: 'style$PaddingBottom',
    themeProp,
  });
