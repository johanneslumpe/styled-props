import { TransformBoxPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransformBoxProps<T> {
  transformBox: T;
}

export const transformBox = <
  T = TransformBoxPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransformBoxProps<T>, Theme>> = {}) =>
  style<ITransformBoxProps<T>, Theme, Breakpoints>({
    cssProp: 'transformBox',
    prop: 'transformBox',
    themeProp,
  });
