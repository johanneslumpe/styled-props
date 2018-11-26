import { TranslateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITranslateProps<T> {
  translate: T;
}

export const translate = <
  T = TranslateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITranslateProps<T>, Theme>> = {}) =>
  style<ITranslateProps<T>, Theme, Breakpoints>({
    cssProp: 'translate',
    prop: 'translate',
    themeProp,
  });
