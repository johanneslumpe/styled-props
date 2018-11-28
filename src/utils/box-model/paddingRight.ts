import { PaddingRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingRightProps<T> {
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight: T;
}

export const paddingRight = <
  T = PaddingRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingRightProps<T>, Theme>> = {}) =>
  style<IPaddingRightProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingRight',
    prop: 'paddingRight',
    themeProp,
  });
