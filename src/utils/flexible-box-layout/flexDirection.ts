import { FlexDirectionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexDirectionProps<T> {
  /**
   * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection: T;
}

export const flexDirection = <
  T = FlexDirectionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFlexDirectionProps<T>, Theme>> = {}) =>
  style<IFlexDirectionProps<T>, Theme, Breakpoints>({
    cssProp: 'flexDirection',
    prop: 'flexDirection',
    themeProp,
  });
