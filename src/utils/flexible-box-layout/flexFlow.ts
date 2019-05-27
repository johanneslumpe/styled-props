import { FlexFlowPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FlexFlowProps<T> {
  /**
   * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` properties.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  style$FlexFlow: T;
}

export const flexFlow = <
  T = FlexFlowPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FlexFlowProps<T>, Theme>> = {}) =>
  style<FlexFlowProps<T>, Theme, Breakpoints>({
    cssProp: 'flexFlow',
    prop: 'style$FlexFlow',
    themeProp,
  });
