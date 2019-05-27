import { PaddingBlockProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PaddingBlockProps<T> {
  /**
   * The **`padding-block`** CSS property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
   */
  style$PaddingBlock: T;
}

export const paddingBlock = <
  T = PaddingBlockProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PaddingBlockProps<T>, Theme>> = {}) =>
  style<PaddingBlockProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingBlock',
    prop: 'style$PaddingBlock',
    themeProp,
  });
