import { PaddingLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingLeftProps<T> {
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft: T;
}

export const paddingLeft = <
  T = PaddingLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingLeftProps<T>, Theme>> = {}) =>
  style<IPaddingLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingLeft',
    prop: 'paddingLeft',
    themeProp,
  });
