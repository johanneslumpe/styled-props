import { ScrollMarginBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginBlockEndProps<T> {
  /**
   * The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end
   */
  style$ScrollMarginBlockEnd: T;
}

export const scrollMarginBlockEnd = <
  T = ScrollMarginBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginBlockEndProps<T>, Theme>> = {}) =>
  style<ScrollMarginBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMarginBlockEnd',
    prop: 'style$ScrollMarginBlockEnd',
    themeProp,
  });
