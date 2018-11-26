import { MaxWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaxWidthProps<T> {
  maxWidth: T;
}

export const maxWidth = <
  T = MaxWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaxWidthProps<T>, Theme>> = {}) =>
  style<IMaxWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'maxWidth',
    prop: 'maxWidth',
    themeProp,
  });
