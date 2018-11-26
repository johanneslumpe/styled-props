import { BackgroundImageProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundImageProps<T> {
  backgroundImage: T;
}

export const backgroundImage = <
  T = BackgroundImageProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundImageProps<T>, Theme>> = {}) =>
  style<IBackgroundImageProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundImage',
    prop: 'backgroundImage',
    themeProp,
  });
