import { InsetProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface InsetProps<T> {
  /**
   * The **`inset`** CSS property, though part of the logical specification, doesn't define logical block or inline offsets, and instead defines physical offsets, regardless of the element's writing mode, directionality, and text orientation. It has the same multi-value syntax of the `margin` shorthand. It is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/inset
   */
  style$Inset: T;
}

export const inset = <
  T = InsetProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<InsetProps<T>, Theme>> = {}) =>
  style<InsetProps<T>, Theme, Breakpoints>({
    cssProp: 'inset',
    prop: 'style$Inset',
    themeProp,
  });
