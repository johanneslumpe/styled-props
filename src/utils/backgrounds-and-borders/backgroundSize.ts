import { BackgroundSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundSizeProps<T> {
  backgroundSize: T;
}

export const backgroundSize = <
  T = BackgroundSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundSizeProps<T>, Theme>> = {}) =>
  style<IBackgroundSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundSize',
    prop: 'backgroundSize',
    themeProp,
  });
