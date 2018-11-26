import { BackgroundOriginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundOriginProps<T> {
  backgroundOrigin: T;
}

export const backgroundOrigin = <
  T = BackgroundOriginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundOriginProps<T>, Theme>> = {}) =>
  style<IBackgroundOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundOrigin',
    prop: 'backgroundOrigin',
    themeProp,
  });
