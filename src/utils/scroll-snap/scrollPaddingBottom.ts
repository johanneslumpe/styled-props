import { ScrollPaddingBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollPaddingBottomProps<T> {
  /**
   * The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
   */
  style$ScrollPaddingBottom: T;
}

export const scrollPaddingBottom = <
  T = ScrollPaddingBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollPaddingBottomProps<T>, Theme>> = {}) =>
  style<ScrollPaddingBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollPaddingBottom',
    prop: 'style$ScrollPaddingBottom',
    themeProp,
  });
