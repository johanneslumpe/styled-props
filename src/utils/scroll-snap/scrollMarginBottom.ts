import { ScrollMarginBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginBottomProps<T> {
  /**
   * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
   */
  style$ScrollMarginBottom: T;
}

export const scrollMarginBottom = <
  T = ScrollMarginBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginBottomProps<T>, Theme>> = {}) =>
  style<ScrollMarginBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMarginBottom',
    prop: 'style$ScrollMarginBottom',
    themeProp,
  });
