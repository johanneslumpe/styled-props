import { BorderImageOutsetProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderImageOutsetProps<T> {
  borderImageOutset: T;
}

export const borderImageOutset = <
  T = BorderImageOutsetProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderImageOutsetProps<T>, Theme>> = {}) =>
  style<IBorderImageOutsetProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageOutset',
    prop: 'borderImageOutset',
    themeProp,
  });
