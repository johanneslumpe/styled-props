import { PaddingBlockStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PaddingBlockStartProps<T> {
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  style$PaddingBlockStart: T;
}

export const paddingBlockStart = <
  T = PaddingBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PaddingBlockStartProps<T>, Theme>> = {}) =>
  style<PaddingBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingBlockStart',
    prop: 'style$PaddingBlockStart',
    themeProp,
  });
