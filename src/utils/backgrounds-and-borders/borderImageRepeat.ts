import { BorderImageRepeatPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderImageRepeatProps<T> {
  borderImageRepeat: T;
}

export const borderImageRepeat = <
  T = BorderImageRepeatPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderImageRepeatProps<T>, Theme>> = {}) =>
  style<IBorderImageRepeatProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageRepeat',
    prop: 'borderImageRepeat',
    themeProp,
  });
