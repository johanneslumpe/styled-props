import { FlexDirectionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexDirectionProps<T> {
  flexDirection: T;
}

export const flexDirection = <
  T = FlexDirectionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFlexDirectionProps<T>, Theme>> = {}) =>
  style<IFlexDirectionProps<T>, Theme, Breakpoints>({
    cssProp: 'flexDirection',
    prop: 'flexDirection',
    themeProp,
  });
