import { FlexWrapPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../style';

export interface IFlexWrapProps<T> {
  flexWrap: T;
}

export const flexWrap = <
  T = FlexWrapPropertyCombined,
  Theme = never,
  Breakpoints = never
>() =>
  style<IFlexWrapProps<T>, Theme, Breakpoints>({
    cssProp: 'flexWrap',
    prop: 'flexWrap',
  });
