import { AlignContentPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAlignContentProps<T> {
  alignContent: T;
}

export const alignContent = <
  T = AlignContentPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAlignContentProps<T>, Theme>> = {}) =>
  style<IAlignContentProps<T>, Theme, Breakpoints>({
    cssProp: 'alignContent',
    prop: 'alignContent',
    themeProp,
  });
