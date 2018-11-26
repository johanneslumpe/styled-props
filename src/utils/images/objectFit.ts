import { ObjectFitPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IObjectFitProps<T> {
  objectFit: T;
}

export const objectFit = <
  T = ObjectFitPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IObjectFitProps<T>, Theme>> = {}) =>
  style<IObjectFitProps<T>, Theme, Breakpoints>({
    cssProp: 'objectFit',
    prop: 'objectFit',
    themeProp,
  });
