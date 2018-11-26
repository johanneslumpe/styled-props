import { BackfaceVisibilityPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackfaceVisibilityProps<T> {
  backfaceVisibility: T;
}

export const backfaceVisibility = <
  T = BackfaceVisibilityPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackfaceVisibilityProps<T>, Theme>> = {}) =>
  style<IBackfaceVisibilityProps<T>, Theme, Breakpoints>({
    cssProp: 'backfaceVisibility',
    prop: 'backfaceVisibility',
    themeProp,
  });
