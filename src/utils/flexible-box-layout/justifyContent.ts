import { JustifyContentPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IJustifyContentProps<T> {
  justifyContent: T;
}

export const justifyContent = <
  T = JustifyContentPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IJustifyContentProps<T>, Theme>> = {}) =>
  style<IJustifyContentProps<T>, Theme, Breakpoints>({
    cssProp: 'justifyContent',
    prop: 'justifyContent',
    themeProp,
  });
