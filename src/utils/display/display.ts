import { DisplayPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IDisplayProps<T> {
  display: T;
}

export const display = <
  T = DisplayPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IDisplayProps<T>, Theme>> = {}) =>
  style<IDisplayProps<T>, Theme, Breakpoints>({
    cssProp: 'display',
    prop: 'display',
    themeProp,
  });
