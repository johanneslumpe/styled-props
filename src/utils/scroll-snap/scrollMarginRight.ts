import { ScrollMarginRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginRightProps<T> {
  /**
   * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
   */
  style$ScrollMarginRight: T;
}

export const scrollMarginRight = <
  T = ScrollMarginRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginRightProps<T>, Theme>> = {}) =>
  style<ScrollMarginRightProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMarginRight',
    prop: 'style$ScrollMarginRight',
    themeProp,
  });
