import { ScrollMarginInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginInlineStartProps<T> {
  /**
   * The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start
   */
  style$ScrollMarginInlineStart: T;
}

export const scrollMarginInlineStart = <
  T = ScrollMarginInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginInlineStartProps<T>, Theme>> = {}) =>
  style<ScrollMarginInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMarginInlineStart',
    prop: 'style$ScrollMarginInlineStart',
    themeProp,
  });
