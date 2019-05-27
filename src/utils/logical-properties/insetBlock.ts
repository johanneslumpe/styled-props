import { InsetBlockProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface InsetBlockProps<T> {
  /**
   * The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block
   */
  style$InsetBlock: T;
}

export const insetBlock = <
  T = InsetBlockProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<InsetBlockProps<T>, Theme>> = {}) =>
  style<InsetBlockProps<T>, Theme, Breakpoints>({
    cssProp: 'insetBlock',
    prop: 'style$InsetBlock',
    themeProp,
  });
