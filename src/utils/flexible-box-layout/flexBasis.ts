import { FlexBasisProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FlexBasisProps<T> {
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  style$FlexBasis: T;
}

export const flexBasis = <
  T = FlexBasisProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FlexBasisProps<T>, Theme>> = {}) =>
  style<FlexBasisProps<T>, Theme, Breakpoints>({
    cssProp: 'flexBasis',
    prop: 'style$FlexBasis',
    themeProp,
  });
