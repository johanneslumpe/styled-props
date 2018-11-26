import { BorderInlineStartColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineStartColorProps<T> {
  borderInlineStartColor: T;
}

export const borderInlineStartColor = <
  T = BorderInlineStartColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineStartColorProps<T>, Theme>> = {}) =>
  style<IBorderInlineStartColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStartColor',
    prop: 'borderInlineStartColor',
    themeProp,
  });
