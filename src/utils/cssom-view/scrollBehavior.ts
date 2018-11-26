import { ScrollBehaviorPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IScrollBehaviorProps<T> {
  scrollBehavior: T;
}

export const scrollBehavior = <
  T = ScrollBehaviorPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IScrollBehaviorProps<T>, Theme>> = {}) =>
  style<IScrollBehaviorProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollBehavior',
    prop: 'scrollBehavior',
    themeProp,
  });
