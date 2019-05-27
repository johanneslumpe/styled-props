import { PaddingRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PaddingRightProps<T> {
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  style$PaddingRight: T;
}

export const paddingRight = <
  T = PaddingRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PaddingRightProps<T>, Theme>> = {}) =>
  style<PaddingRightProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingRight',
    prop: 'style$PaddingRight',
    themeProp,
  });
