import { BackgroundBlendModeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundBlendModeProps<T> {
  backgroundBlendMode: T;
}

export const backgroundBlendMode = <
  T = BackgroundBlendModeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundBlendModeProps<T>, Theme>> = {}) =>
  style<IBackgroundBlendModeProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundBlendMode',
    prop: 'backgroundBlendMode',
    themeProp,
  });
