import { FlexFlowPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexFlowProps<T> {
  flexFlow: T;
}

export const flexFlow = <
  T = FlexFlowPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFlexFlowProps<T>, Theme>> = {}) =>
  style<IFlexFlowProps<T>, Theme, Breakpoints>({
    cssProp: 'flexFlow',
    prop: 'flexFlow',
    themeProp,
  });
