import { FlexWrapPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FlexWrapProps<T> {
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  style$FlexWrap: T;
}

export const flexWrap = <
  T = FlexWrapPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FlexWrapProps<T>, Theme>> = {}) =>
  style<FlexWrapProps<T>, Theme, Breakpoints>({
    cssProp: 'flexWrap',
    prop: 'style$FlexWrap',
    themeProp,
  });
