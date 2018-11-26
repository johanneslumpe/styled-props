import { BorderBottomStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomStyleProps<T> {
  borderBottomStyle: T;
}

export const borderBottomStyle = <
  T = BorderBottomStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomStyleProps<T>, Theme>> = {}) =>
  style<IBorderBottomStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomStyle',
    prop: 'borderBottomStyle',
    themeProp,
  });
