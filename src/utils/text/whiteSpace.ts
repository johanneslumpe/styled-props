import { WhiteSpacePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWhiteSpaceProps<T> {
  /**
   * The **`white-space`** CSS property sets how white space inside an element is handled.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
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
