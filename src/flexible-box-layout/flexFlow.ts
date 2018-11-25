import { FlexFlowPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../style';

export interface IFlexFlowProps<T> {
  flexFlow: T;
}

export const flexFlow = <
  T = FlexFlowPropertyCombined,
  Theme = never,
  Breakpoints = never
>() =>
  style<IFlexFlowProps<T>, Theme, Breakpoints>({
    cssProp: 'flexFlow',
    prop: 'flexFlow',
  });
