import { InsetInlineProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface InsetInlineProps<T> {
  /**
   * The **`inset-inline`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline
   */
  style$InsetInline: T;
}

export const insetInline = <
  T = InsetInlineProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<InsetInlineProps<T>, Theme>> = {}) =>
  style<InsetInlineProps<T>, Theme, Breakpoints>({
    cssProp: 'insetInline',
    prop: 'style$InsetInline',
    themeProp,
  });
