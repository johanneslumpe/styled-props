import { FlexBasisProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexBasisProps<T> {
  /**
   * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis: T;
}

export const flexBasis = <
  T = FlexBasisProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFlexBasisProps<T>, Theme>> = {}) =>
  style<IFlexBasisProps<T>, Theme, Breakpoints>({
    cssProp: 'flexBasis',
    prop: 'flexBasis',
    themeProp,
  });
