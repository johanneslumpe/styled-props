import { ScrollSnapTypePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IScrollSnapTypeProps<T> {
  scrollSnapType: T;
}

export const scrollSnapType = <
  T = ScrollSnapTypePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IScrollSnapTypeProps<T>, Theme>> = {}) =>
  style<IScrollSnapTypeProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollSnapType',
    prop: 'scrollSnapType',
    themeProp,
  });
