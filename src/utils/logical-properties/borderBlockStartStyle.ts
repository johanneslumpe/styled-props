import { BorderBlockStartStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockStartStyleProps<T> {
  borderBlockStartStyle: T;
}

export const borderBlockStartStyle = <
  T = BorderBlockStartStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockStartStyleProps<T>, Theme>> = {}) =>
  style<IBorderBlockStartStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockStartStyle',
    prop: 'borderBlockStartStyle',
    themeProp,
  });
