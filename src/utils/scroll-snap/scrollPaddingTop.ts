import { ScrollPaddingTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollPaddingTopProps<T> {
  /**
   * The `scroll-padding-top` property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
   */
  style$ScrollPaddingTop: T;
}

export const scrollPaddingTop = <
  T = ScrollPaddingTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollPaddingTopProps<T>, Theme>> = {}) =>
  style<ScrollPaddingTopProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollPaddingTop',
    prop: 'style$ScrollPaddingTop',
    themeProp,
  });
