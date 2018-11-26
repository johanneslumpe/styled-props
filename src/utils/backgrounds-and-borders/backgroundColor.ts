import { BackgroundColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundColorProps<T> {
  backgroundColor: T;
}

export const backgroundColor = <
  T = BackgroundColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundColorProps<T>, Theme>> = {}) =>
  style<IBackgroundColorProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundColor',
    prop: 'backgroundColor',
    themeProp,
  });
