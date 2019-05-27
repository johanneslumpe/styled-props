import { ScrollMarginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginProps<T> {
  /**
   * The **`scroll-margin`** property is a shorthand property which sets all of the `scroll-margin` longhands, assigning values much like the `margin` property does for the `margin-*` longhands.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
   */
  style$ScrollMargin: T;
}

export const scrollMargin = <
  T = ScrollMarginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginProps<T>, Theme>> = {}) =>
  style<ScrollMarginProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMargin',
    prop: 'style$ScrollMargin',
    themeProp,
  });
