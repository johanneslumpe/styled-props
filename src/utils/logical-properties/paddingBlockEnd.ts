import { PaddingBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PaddingBlockEndProps<T> {
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  style$PaddingBlockEnd: T;
}

export const paddingBlockEnd = <
  T = PaddingBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PaddingBlockEndProps<T>, Theme>> = {}) =>
  style<PaddingBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingBlockEnd',
    prop: 'style$PaddingBlockEnd',
    themeProp,
  });
