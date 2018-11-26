import { TextCombineUprightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextCombineUprightProps<T> {
  textCombineUpright: T;
}

export const textCombineUpright = <
  T = TextCombineUprightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextCombineUprightProps<T>, Theme>> = {}) =>
  style<ITextCombineUprightProps<T>, Theme, Breakpoints>({
    cssProp: 'textCombineUpright',
    prop: 'textCombineUpright',
    themeProp,
  });
