import { FlexBasisProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexBasisProps<T> {
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
