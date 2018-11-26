import { TextShadowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextShadowProps<T> {
  textShadow: T;
}

export const textShadow = <
  T = TextShadowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextShadowProps<T>, Theme>> = {}) =>
  style<ITextShadowProps<T>, Theme, Breakpoints>({
    cssProp: 'textShadow',
    prop: 'textShadow',
    themeProp,
  });
