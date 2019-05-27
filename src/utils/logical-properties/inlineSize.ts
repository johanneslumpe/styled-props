import { InlineSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface InlineSizeProps<T> {
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  style$InlineSize: T;
}

export const inlineSize = <
  T = InlineSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<InlineSizeProps<T>, Theme>> = {}) =>
  style<InlineSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'inlineSize',
    prop: 'style$InlineSize',
    themeProp,
  });
