import { PaddingInlineProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PaddingInlineProps<T> {
  /**
   * The **`padding-inline`** CSS property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
   */
  style$PaddingInline: T;
}

export const paddingInline = <
  T = PaddingInlineProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PaddingInlineProps<T>, Theme>> = {}) =>
  style<PaddingInlineProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingInline',
    prop: 'style$PaddingInline',
    themeProp,
  });
