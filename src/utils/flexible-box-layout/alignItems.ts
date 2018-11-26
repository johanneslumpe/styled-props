import { AlignItemsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAlignItemsProps<T> {
  alignItems: T;
}

export const alignItems = <
  T = AlignItemsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAlignItemsProps<T>, Theme>> = {}) =>
  style<IAlignItemsProps<T>, Theme, Breakpoints>({
    cssProp: 'alignItems',
    prop: 'alignItems',
    themeProp,
  });
