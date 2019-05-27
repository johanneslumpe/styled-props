import { ScrollPaddingInlineProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollPaddingInlineProps<T> {
  /**
   * The `scroll-padding-inline` property is a shorthand property which sets the scroll-padding longhands for the inline dimension.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
   */
  style$ScrollPaddingInline: T;
}

export const scrollPaddingInline = <
  T = ScrollPaddingInlineProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollPaddingInlineProps<T>, Theme>> = {}) =>
  style<ScrollPaddingInlineProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollPaddingInline',
    prop: 'style$ScrollPaddingInline',
    themeProp,
  });
