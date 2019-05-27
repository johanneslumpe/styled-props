import { InsetBlockStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface InsetBlockStartProps<T> {
  /**
   * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-start
   */
  style$InsetBlockStart: T;
}

export const insetBlockStart = <
  T = InsetBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<InsetBlockStartProps<T>, Theme>> = {}) =>
  style<InsetBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: 'insetBlockStart',
    prop: 'style$InsetBlockStart',
    themeProp,
  });
