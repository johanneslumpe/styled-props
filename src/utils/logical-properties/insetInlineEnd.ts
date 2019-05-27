import { InsetInlineEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface InsetInlineEndProps<T> {
  /**
   * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
   */
  style$InsetInlineEnd: T;
}

export const insetInlineEnd = <
  T = InsetInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<InsetInlineEndProps<T>, Theme>> = {}) =>
  style<InsetInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: 'insetInlineEnd',
    prop: 'style$InsetInlineEnd',
    themeProp,
  });
