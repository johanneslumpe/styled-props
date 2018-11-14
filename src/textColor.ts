import { style } from './style';
import { IStyleOptions } from './types';

export interface ITextColorProps<T> {
  textColor: T;
}

export const textColor = <T = string, Theme = never, Breakpoints = never>({
  themeProp,
}: Partial<IStyleOptions<ITextColorProps<T>, Theme>> = {}) =>
  style<ITextColorProps<T>, Theme, Breakpoints>({
    cssProp: 'color',
    prop: 'textColor',
    themeProp,
  });
