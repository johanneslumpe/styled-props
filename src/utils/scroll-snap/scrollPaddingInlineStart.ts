import { ScrollPaddingInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollPaddingInlineStartProps<T> {
  /**
   * The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start
   */
  style$ScrollPaddingInlineStart: T;
}

export const scrollPaddingInlineStart = <
  T = ScrollPaddingInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollPaddingInlineStartProps<T>, Theme>> = {}) =>
  style<ScrollPaddingInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollPaddingInlineStart',
    prop: 'style$ScrollPaddingInlineStart',
    themeProp,
  });
