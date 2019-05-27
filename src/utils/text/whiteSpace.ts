import { WhiteSpacePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface WhiteSpaceProps<T> {
  /**
   * The **`white-space`** CSS property sets how white space inside an element is handled.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  style$WhiteSpace: T;
}

export const whiteSpace = <
  T = WhiteSpacePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<WhiteSpaceProps<T>, Theme>> = {}) =>
  style<WhiteSpaceProps<T>, Theme, Breakpoints>({
    cssProp: 'whiteSpace',
    prop: 'style$WhiteSpace',
    themeProp,
  });
