import { WritingModePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWritingModeProps<T> {
  writingMode: T;
}

export const writingMode = <
  T = WritingModePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWritingModeProps<T>, Theme>> = {}) =>
  style<IWritingModeProps<T>, Theme, Breakpoints>({
    cssProp: 'writingMode',
    prop: 'writingMode',
    themeProp,
  });
