import { InsetInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface InsetInlineStartProps<T> {
  /**
   * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
   */
  style$InsetInlineStart: T;
}

export const insetInlineStart = <
  T = InsetInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<InsetInlineStartProps<T>, Theme>> = {}) =>
  style<InsetInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'insetInlineStart',
    prop: 'style$InsetInlineStart',
    themeProp,
  });
