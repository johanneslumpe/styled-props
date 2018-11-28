import { InlineSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IInlineSizeProps<T> {
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize: T;
}

export const inlineSize = <
  T = InlineSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IInlineSizeProps<T>, Theme>> = {}) =>
  style<IInlineSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'inlineSize',
    prop: 'inlineSize',
    themeProp,
  });
