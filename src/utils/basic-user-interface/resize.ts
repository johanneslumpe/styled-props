import { ResizePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IResizeProps<T> {
  resize: T;
}

export const resize = <
  T = ResizePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IResizeProps<T>, Theme>> = {}) =>
  style<IResizeProps<T>, Theme, Breakpoints>({
    cssProp: 'resize',
    prop: 'resize',
    themeProp,
  });
