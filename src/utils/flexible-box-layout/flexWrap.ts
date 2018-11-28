import { FlexWrapPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexWrapProps<T> {
  /**
   * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap: T;
}

export const flexWrap = <
  T = FlexWrapPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFlexWrapProps<T>, Theme>> = {}) =>
  style<IFlexWrapProps<T>, Theme, Breakpoints>({
    cssProp: 'flexWrap',
    prop: 'flexWrap',
    themeProp,
  });
