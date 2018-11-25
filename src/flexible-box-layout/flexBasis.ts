import { FlexBasisProperty } from '@johanneslumpe/css-types';

import { style } from '../style';

export interface IFlexBasisProps<T> {
  flexBasis: T;
}

export const flexBasis = <
  T = FlexBasisProperty,
  Theme = never,
  Breakpoints = never
>() =>
  style<IFlexBasisProps<T>, Theme, Breakpoints>({
    cssProp: 'flexBasis',
    prop: 'flexBasis',
  });
