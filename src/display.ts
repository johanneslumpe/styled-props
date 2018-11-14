import { DisplayPropertyCombined } from '@johanneslumpe/css-types';

import { style } from './style';

export interface IDisplayProps<T> {
  display: T;
}

export const display = <
  T = DisplayPropertyCombined,
  Theme = never,
  Breakpoints = never
>() =>
  style<IDisplayProps<T>, Theme, Breakpoints>({
    cssProp: 'display',
    prop: 'display',
  });
