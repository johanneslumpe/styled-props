import { AlignSelfPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AlignSelfProps<T> {
  /**
   * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  style$AlignSelf: T;
}

export const alignSelf = <
  T = AlignSelfPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AlignSelfProps<T>, Theme>> = {}) =>
  style<AlignSelfProps<T>, Theme, Breakpoints>({
    cssProp: 'alignSelf',
    prop: 'style$AlignSelf',
    themeProp,
  });
