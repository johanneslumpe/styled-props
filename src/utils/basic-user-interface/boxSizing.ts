import { BoxSizingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBoxSizingProps<T> {
  boxSizing: T;
}

export const boxSizing = <
  T = BoxSizingPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBoxSizingProps<T>, Theme>> = {}) =>
  style<IBoxSizingProps<T>, Theme, Breakpoints>({
    cssProp: 'boxSizing',
    prop: 'boxSizing',
    themeProp,
  });
