import { WhiteSpacePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWhiteSpaceProps<T> {
  whiteSpace: T;
}

export const whiteSpace = <
  T = WhiteSpacePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWhiteSpaceProps<T>, Theme>> = {}) =>
  style<IWhiteSpaceProps<T>, Theme, Breakpoints>({
    cssProp: 'whiteSpace',
    prop: 'whiteSpace',
    themeProp,
  });
