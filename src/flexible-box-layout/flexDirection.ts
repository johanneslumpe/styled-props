import { FlexDirectionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../style';

export interface IFlexDirectionProps<T> {
  flexDirection: T;
}

export const flexDirection = <
  T = FlexDirectionPropertyCombined,
  Theme = never,
  Breakpoints = never
>() =>
  style<IFlexDirectionProps<T>, Theme, Breakpoints>({
    cssProp: 'flexDirection',
    prop: 'flexDirection',
  });
