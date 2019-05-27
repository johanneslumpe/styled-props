import { ScrollMarginBlockProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginBlockProps<T> {
  /**
   * The `scroll-margin-block` property is a shorthand property which sets the scroll-margin longhands in the block dimension.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
   */
  style$ScrollMarginBlock: T;
}

export const scrollMarginBlock = <
  T = ScrollMarginBlockProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginBlockProps<T>, Theme>> = {}) =>
  style<ScrollMarginBlockProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMarginBlock',
    prop: 'style$ScrollMarginBlock',
    themeProp,
  });
