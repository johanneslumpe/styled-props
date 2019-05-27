import { ScrollPaddingBlockStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollPaddingBlockStartProps<T> {
  /**
   * The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start
   */
  style$ScrollPaddingBlockStart: T;
}

export const scrollPaddingBlockStart = <
  T = ScrollPaddingBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollPaddingBlockStartProps<T>, Theme>> = {}) =>
  style<ScrollPaddingBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollPaddingBlockStart',
    prop: 'style$ScrollPaddingBlockStart',
    themeProp,
  });
