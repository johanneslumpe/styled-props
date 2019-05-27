import { ScrollPaddingBlockProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollPaddingBlockProps<T> {
  /**
   * The `scroll-padding-block` property is a shorthand property which sets the scroll-padding longhands for the block dimension.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
   */
  style$ScrollPaddingBlock: T;
}

export const scrollPaddingBlock = <
  T = ScrollPaddingBlockProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollPaddingBlockProps<T>, Theme>> = {}) =>
  style<ScrollPaddingBlockProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollPaddingBlock',
    prop: 'style$ScrollPaddingBlock',
    themeProp,
  });
