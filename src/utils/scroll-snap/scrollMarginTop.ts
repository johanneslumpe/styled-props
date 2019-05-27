import { ScrollMarginTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginTopProps<T> {
  /**
   * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
   */
  style$ScrollMarginTop: T;
}

export const scrollMarginTop = <
  T = ScrollMarginTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginTopProps<T>, Theme>> = {}) =>
  style<ScrollMarginTopProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMarginTop',
    prop: 'style$ScrollMarginTop',
    themeProp,
  });
