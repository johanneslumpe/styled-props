import { ScrollbarWidthPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollbarWidthProps<T> {
  /**
   * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-width
   */
  style$ScrollbarWidth: T;
}

export const scrollbarWidth = <
  T = ScrollbarWidthPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollbarWidthProps<T>, Theme>> = {}) =>
  style<ScrollbarWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollbarWidth',
    prop: 'style$ScrollbarWidth',
    themeProp,
  });
