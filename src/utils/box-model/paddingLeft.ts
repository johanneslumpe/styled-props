import { PaddingLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PaddingLeftProps<T> {
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the top of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  style$PaddingLeft: T;
}

export const paddingLeft = <
  T = PaddingLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PaddingLeftProps<T>, Theme>> = {}) =>
  style<PaddingLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingLeft',
    prop: 'style$PaddingLeft',
    themeProp,
  });
