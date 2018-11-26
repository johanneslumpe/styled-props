import { VisibilityPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IVisibilityProps<T> {
  visibility: T;
}

export const visibility = <
  T = VisibilityPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IVisibilityProps<T>, Theme>> = {}) =>
  style<IVisibilityProps<T>, Theme, Breakpoints>({
    cssProp: 'visibility',
    prop: 'visibility',
    themeProp,
  });
