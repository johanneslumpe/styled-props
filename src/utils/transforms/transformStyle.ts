import { TransformStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransformStyleProps<T> {
  transformStyle: T;
}

export const transformStyle = <
  T = TransformStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransformStyleProps<T>, Theme>> = {}) =>
  style<ITransformStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'transformStyle',
    prop: 'transformStyle',
    themeProp,
  });
