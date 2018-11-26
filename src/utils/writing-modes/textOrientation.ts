import { TextOrientationPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextOrientationProps<T> {
  textOrientation: T;
}

export const textOrientation = <
  T = TextOrientationPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextOrientationProps<T>, Theme>> = {}) =>
  style<ITextOrientationProps<T>, Theme, Breakpoints>({
    cssProp: 'textOrientation',
    prop: 'textOrientation',
    themeProp,
  });
