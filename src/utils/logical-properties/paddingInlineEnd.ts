import { PaddingInlineEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingInlineEndProps<T> {
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd: T;
}

export const paddingInlineEnd = <
  T = PaddingInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingInlineEndProps<T>, Theme>> = {}) =>
  style<IPaddingInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingInlineEnd',
    prop: 'paddingInlineEnd',
    themeProp,
  });
