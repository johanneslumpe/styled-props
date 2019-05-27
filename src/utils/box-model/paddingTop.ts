import { PaddingTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PaddingTopProps<T> {
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  style$PaddingTop: T;
}

export const paddingTop = <
  T = PaddingTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PaddingTopProps<T>, Theme>> = {}) =>
  style<PaddingTopProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingTop',
    prop: 'style$PaddingTop',
    themeProp,
  });
