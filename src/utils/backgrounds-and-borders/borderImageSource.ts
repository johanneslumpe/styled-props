import { BorderImageSourceProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderImageSourceProps<T> {
  borderImageSource: T;
}

export const borderImageSource = <
  T = BorderImageSourceProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderImageSourceProps<T>, Theme>> = {}) =>
  style<IBorderImageSourceProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageSource',
    prop: 'borderImageSource',
    themeProp,
  });
