import { PaddingBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingBlockEndProps<T> {
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd: T;
}

export const paddingBlockEnd = <
  T = PaddingBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingBlockEndProps<T>, Theme>> = {}) =>
  style<IPaddingBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingBlockEnd',
    prop: 'paddingBlockEnd',
    themeProp,
  });
