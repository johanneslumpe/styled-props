import { ScrollPaddingBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollPaddingBlockEndProps<T> {
  /**
   * The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end
   */
  style$ScrollPaddingBlockEnd: T;
}

export const scrollPaddingBlockEnd = <
  T = ScrollPaddingBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollPaddingBlockEndProps<T>, Theme>> = {}) =>
  style<ScrollPaddingBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollPaddingBlockEnd',
    prop: 'style$ScrollPaddingBlockEnd',
    themeProp,
  });
