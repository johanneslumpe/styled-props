import { OutlineStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOutlineStyleProps<T> {
  outlineStyle: T;
}

export const outlineStyle = <
  T = OutlineStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOutlineStyleProps<T>, Theme>> = {}) =>
  style<IOutlineStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineStyle',
    prop: 'outlineStyle',
    themeProp,
  });
