import { TextOverflowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextOverflowProps<T> {
  textOverflow: T;
}

export const textOverflow = <
  T = TextOverflowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextOverflowProps<T>, Theme>> = {}) =>
  style<ITextOverflowProps<T>, Theme, Breakpoints>({
    cssProp: 'textOverflow',
    prop: 'textOverflow',
    themeProp,
  });
