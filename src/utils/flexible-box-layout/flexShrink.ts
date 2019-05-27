import { FlexShrinkProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FlexShrinkProps<T> {
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  style$FlexShrink: T;
}

export const flexShrink = <
  T = FlexShrinkProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FlexShrinkProps<T>, Theme>> = {}) =>
  style<FlexShrinkProps<T>, Theme, Breakpoints>({
    cssProp: 'flexShrink',
    prop: 'style$FlexShrink',
    themeProp,
  });
