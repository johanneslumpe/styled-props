import { InsetBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface InsetBlockEndProps<T> {
  /**
   * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-end
   */
  style$InsetBlockEnd: T;
}

export const insetBlockEnd = <
  T = InsetBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<InsetBlockEndProps<T>, Theme>> = {}) =>
  style<InsetBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'insetBlockEnd',
    prop: 'style$InsetBlockEnd',
    themeProp,
  });
