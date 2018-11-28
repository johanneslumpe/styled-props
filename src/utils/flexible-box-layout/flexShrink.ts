import { FlexShrinkProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexShrinkProps<T> {
  /**
   * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink: T;
}

export const flexShrink = <
  T = FlexShrinkProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFlexShrinkProps<T>, Theme>> = {}) =>
  style<IFlexShrinkProps<T>, Theme, Breakpoints>({
    cssProp: 'flexShrink',
    prop: 'flexShrink',
    themeProp,
  });
