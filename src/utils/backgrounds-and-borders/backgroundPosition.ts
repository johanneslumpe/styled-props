import { BackgroundPositionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundPositionProps<T> {
  backgroundPosition: T;
}

export const backgroundPosition = <
  T = BackgroundPositionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundPositionProps<T>, Theme>> = {}) =>
  style<IBackgroundPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundPosition',
    prop: 'backgroundPosition',
    themeProp,
  });
