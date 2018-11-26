import { JustifyItemsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IJustifyItemsProps<T> {
  justifyItems: T;
}

export const justifyItems = <
  T = JustifyItemsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IJustifyItemsProps<T>, Theme>> = {}) =>
  style<IJustifyItemsProps<T>, Theme, Breakpoints>({
    cssProp: 'justifyItems',
    prop: 'justifyItems',
    themeProp,
  });
