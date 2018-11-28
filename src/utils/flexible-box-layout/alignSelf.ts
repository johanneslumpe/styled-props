import { AlignSelfPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAlignSelfProps<T> {
  /**
   * The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored. In Grid layout `align-self` aligns the item inside the grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf: T;
}

export const alignSelf = <
  T = AlignSelfPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAlignSelfProps<T>, Theme>> = {}) =>
  style<IAlignSelfProps<T>, Theme, Breakpoints>({
    cssProp: 'alignSelf',
    prop: 'alignSelf',
    themeProp,
  });
