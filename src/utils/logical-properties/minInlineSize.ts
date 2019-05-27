import { MinInlineSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MinInlineSizeProps<T> {
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  style$MinInlineSize: T;
}

export const minInlineSize = <
  T = MinInlineSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MinInlineSizeProps<T>, Theme>> = {}) =>
  style<MinInlineSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'minInlineSize',
    prop: 'style$MinInlineSize',
    themeProp,
  });
