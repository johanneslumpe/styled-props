import { FlexDirectionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FlexDirectionProps<T> {
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  style$FlexDirection: T;
}

export const flexDirection = <
  T = FlexDirectionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FlexDirectionProps<T>, Theme>> = {}) =>
  style<FlexDirectionProps<T>, Theme, Breakpoints>({
    cssProp: 'flexDirection',
    prop: 'style$FlexDirection',
    themeProp,
  });
