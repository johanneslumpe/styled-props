import { ZIndexProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ZIndexProps<T> {
  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  style$ZIndex: T;
}

export const zIndex = <
  T = ZIndexProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ZIndexProps<T>, Theme>> = {}) =>
  style<ZIndexProps<T>, Theme, Breakpoints>({
    cssProp: 'zIndex',
    prop: 'style$ZIndex',
    themeProp,
  });
