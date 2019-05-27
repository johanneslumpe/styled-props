import { ScrollMarginInlineProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginInlineProps<T> {
  /**
   * The `scroll-margin-inline` property is a shorthand property which sets the scroll-margin longhands in the inline dimension.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline
   */
  style$ScrollMarginInline: T;
}

export const scrollMarginInline = <
  T = ScrollMarginInlineProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginInlineProps<T>, Theme>> = {}) =>
  style<ScrollMarginInlineProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMarginInline',
    prop: 'style$ScrollMarginInline',
    themeProp,
  });
