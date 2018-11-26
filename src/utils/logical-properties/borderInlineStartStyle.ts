import { BorderInlineStartStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineStartStyleProps<T> {
  borderInlineStartStyle: T;
}

export const borderInlineStartStyle = <
  T = BorderInlineStartStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineStartStyleProps<T>, Theme>> = {}) =>
  style<IBorderInlineStartStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStartStyle',
    prop: 'borderInlineStartStyle',
    themeProp,
  });
