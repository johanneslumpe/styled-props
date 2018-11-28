import { PaddingInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingInlineStartProps<T> {
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart: T;
}

export const paddingInlineStart = <
  T = PaddingInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingInlineStartProps<T>, Theme>> = {}) =>
  style<IPaddingInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingInlineStart',
    prop: 'paddingInlineStart',
    themeProp,
  });
