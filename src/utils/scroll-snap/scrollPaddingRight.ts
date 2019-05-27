import { ScrollPaddingRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollPaddingRightProps<T> {
  /**
   * The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
   */
  style$ScrollPaddingRight: T;
}

export const scrollPaddingRight = <
  T = ScrollPaddingRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollPaddingRightProps<T>, Theme>> = {}) =>
  style<ScrollPaddingRightProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollPaddingRight',
    prop: 'style$ScrollPaddingRight',
    themeProp,
  });
