import { ZIndexProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IZIndexProps<T> {
  /**
   * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex: T;
}

export const zIndex = <
  T = ZIndexProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IZIndexProps<T>, Theme>> = {}) =>
  style<IZIndexProps<T>, Theme, Breakpoints>({
    cssProp: 'zIndex',
    prop: 'zIndex',
    themeProp,
  });
