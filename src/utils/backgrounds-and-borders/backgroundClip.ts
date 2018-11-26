import { BackgroundClipProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundClipProps<T> {
  backgroundClip: T;
}

export const backgroundClip = <
  T = BackgroundClipProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundClipProps<T>, Theme>> = {}) =>
  style<IBackgroundClipProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundClip',
    prop: 'backgroundClip',
    themeProp,
  });
