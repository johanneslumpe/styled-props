import { ScrollbarColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollbarColorProps<T> {
  /**
   * The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-color
   */
  style$ScrollbarColor: T;
}

export const scrollbarColor = <
  T = ScrollbarColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollbarColorProps<T>, Theme>> = {}) =>
  style<ScrollbarColorProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollbarColor',
    prop: 'style$ScrollbarColor',
    themeProp,
  });
