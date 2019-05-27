import { FlexProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FlexProps<T> {
  /**
   * The **`flex`** CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  style$Flex: T;
}

export const flex = <
  T = FlexProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FlexProps<T>, Theme>> = {}) =>
  style<FlexProps<T>, Theme, Breakpoints>({
    cssProp: 'flex',
    prop: 'style$Flex',
    themeProp,
  });
