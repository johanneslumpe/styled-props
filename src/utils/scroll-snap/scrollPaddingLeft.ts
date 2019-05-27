import { ScrollPaddingLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollPaddingLeftProps<T> {
  /**
   * The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
   */
  style$ScrollPaddingLeft: T;
}

export const scrollPaddingLeft = <
  T = ScrollPaddingLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollPaddingLeftProps<T>, Theme>> = {}) =>
  style<ScrollPaddingLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollPaddingLeft',
    prop: 'style$ScrollPaddingLeft',
    themeProp,
  });
