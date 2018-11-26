import { HyphensPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IHyphensProps<T> {
  hyphens: T;
}

export const hyphens = <
  T = HyphensPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IHyphensProps<T>, Theme>> = {}) =>
  style<IHyphensProps<T>, Theme, Breakpoints>({
    cssProp: 'hyphens',
    prop: 'hyphens',
    themeProp,
  });
