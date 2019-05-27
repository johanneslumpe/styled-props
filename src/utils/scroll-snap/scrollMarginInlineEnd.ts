import { ScrollMarginInlineEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginInlineEndProps<T> {
  /**
   * The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
   */
  style$ScrollMarginInlineEnd: T;
}

export const scrollMarginInlineEnd = <
  T = ScrollMarginInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginInlineEndProps<T>, Theme>> = {}) =>
  style<ScrollMarginInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMarginInlineEnd',
    prop: 'style$ScrollMarginInlineEnd',
    themeProp,
  });
