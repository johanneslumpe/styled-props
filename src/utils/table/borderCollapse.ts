import { BorderCollapsePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderCollapseProps<T> {
  borderCollapse: T;
}

export const borderCollapse = <
  T = BorderCollapsePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderCollapseProps<T>, Theme>> = {}) =>
  style<IBorderCollapseProps<T>, Theme, Breakpoints>({
    cssProp: 'borderCollapse',
    prop: 'borderCollapse',
    themeProp,
  });
