import { PaddingTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingTopProps<T> {
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop: T;
}

export const paddingTop = <
  T = PaddingTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingTopProps<T>, Theme>> = {}) =>
  style<IPaddingTopProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingTop',
    prop: 'paddingTop',
    themeProp,
  });
