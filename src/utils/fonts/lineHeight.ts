import { LineHeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ILineHeightProps<T> {
  lineHeight: T;
}

export const lineHeight = <
  T = LineHeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ILineHeightProps<T>, Theme>> = {}) =>
  style<ILineHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'lineHeight',
    prop: 'lineHeight',
    themeProp,
  });
