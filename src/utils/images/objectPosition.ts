import { ObjectPositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IObjectPositionProps<T> {
  objectPosition: T;
}

export const objectPosition = <
  T = ObjectPositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IObjectPositionProps<T>, Theme>> = {}) =>
  style<IObjectPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'objectPosition',
    prop: 'objectPosition',
    themeProp,
  });
