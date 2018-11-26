import { FlexWrapPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexWrapProps<T> {
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
