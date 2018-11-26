import { BackgroundRepeatProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundRepeatProps<T> {
  backgroundRepeat: T;
}

export const backgroundRepeat = <
  T = BackgroundRepeatProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundRepeatProps<T>, Theme>> = {}) =>
  style<IBackgroundRepeatProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundRepeat',
    prop: 'backgroundRepeat',
    themeProp,
  });
